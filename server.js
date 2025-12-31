import fetch from "node-fetch";
import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import rateLimit from "express-rate-limit";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();

// Tell Express to trust Render's proxy (needed for rate limiting & IPs)
app.set("trust proxy", 1);

const PORT = process.env.PORT || 5000;

// Middleware
// Parse allowed client URLs from env and use a dynamic origin check
const rawClientUrls =
  process.env.CLIENT_URL ||
  "http://localhost:5173,http://localhost:3000,http://localhost:8080";
  
const allowedOrigins = rawClientUrls
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      // allow requests with no origin (curl, server-to-server, non-browser)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) return callback(null, true);
      return callback(null, false);
    },
    credentials: true,
  })
);
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

// Rate limiting to prevent spam
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: process.env.NODE_ENV === "production" ? 20 : 5, // Limit each IP to 5 requests per windowMs on development
  message: "Too many contact requests from this IP, please try again later.",
  standardHeaders: true,
  legacyHeaders: false,
  skip: (req) => {
    // Skip rate limiting in development
    return process.env.NODE_ENV === "development";
  },
});

// Configure email transporter
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD, // App-specific password for Gmail
  },
  pool: {
    maxConnections: 1,
    maxMessages: Infinity,
    rateDelta: 20000,
    rateLimit: 5,
  },
  connectionTimeout: 10000,
  socketTimeout: 10000,
  tls: {
    rejectUnauthorized: false,
    minVersion: "TLSv1.2",
  },
});

// Verify transporter connection
if (process.env.NODE_ENV !== "production") {
  transporter.verify((error, success) => {
    if (error) {
      console.error("❌ Email transporter error:", error.message);
      console.error("This usually means:");
      console.error("1. EMAIL_USER is not set...");
    } else {
      console.log("Email service is ready to send messages");
    }
  });
}

const isProduction = process.env.NODE_ENV === "production";
const fromEmail = isProduction ? "onboarding@resend.dev" : process.env.EMAIL_USER;

async function sendEmail({ to, subject, html, text }) {
  if (!to || !subject) {
    throw new Error('Missing "to" or "subject" in sendEmail');
  }

  // ✅ Local: use Gmail via Nodemailer
  if (!isProduction) {
    await transporter.sendMail({
      from: fromEmail,
      to,
      subject,
      html,
      text,
    });
    return;
  }

  // ✅ Production (Render): use Resend HTTP API
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to,
      subject,
      html,
      text,
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Resend failed: ${res.status} ${body}`);
  }
}

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK", message: "Server is running" });
});

// Contact/Feedback endpoint
app.post("/api/send-feedback", contactLimiter, async (req, res) => {
  try {
    const { message, rating, visitorEmail, visitorName } = req.body;

    // Validation
    if (!message || !rating) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields: message and rating",
      });
    }

    if (message.length > 5000) {
      return res.status(400).json({
        success: false,
        message: "Message is too long (max 5000 characters)",
      });
    }

    if (rating < 1 || rating > 5) {
      return res.status(400).json({
        success: false,
        message: "Rating must be between 1 and 5",
      });
    }

    // Sanitize inputs (basic XSS prevention)
    const sanitizeInput = (str) => {
      return str.replace(/[<>]/g, "").trim();
    };

    const sanitizedMessage = sanitizeInput(message);
    const sanitizedName = visitorName
      ? sanitizeInput(visitorName)
      : "Anonymous Visitor";

    const sanitizedEmail = visitorEmail
      ? sanitizeInput(visitorEmail)
      : "Not provided";

    const stars = "⭐".repeat(rating);
    const submittedAt = new Date().toLocaleString();

    // Email content
    const html = `
      <div style="font-family: Arial, sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px;">

        <div style="background: white; border-radius: 10px; padding: 30px; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; margin-bottom: 20px;">🎉 New Portfolio Feedback!</h2>
          
          <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 20px;">

            <p style="margin: 10px 0;"><strong>Rating:</strong> ${stars} (${rating}/5)</p>
            <p style="margin: 10px 0;"><strong>Visitor Name:</strong> ${sanitizedName}</p>
            <p style="margin: 10px 0;"><strong>Visitor Email:</strong> <a href="mailto:${sanitizedEmail}">${sanitizedEmail}</a></p>
            <p style="margin: 10px 0;"><strong>Submitted:</strong> ${submittedAt}</p>

          </div>

          <div style="background: #f0f4ff; padding: 15px; border-left: 4px solid #667eea; border-radius: 4px; margin-bottom: 20px;">

            <p style="margin: 0; color: #333; line-height: 1.6;"><strong>Message:</strong><br>${sanitizedMessage.replace(
              /\n/g,
              "<br>"
            )}</p>

          </div>

          <div style="text-align: center; border-top: 1px solid #eee; padding-top: 15px; margin-top: 20px;">

            <p style="color: #666; font-size: 12px; margin: 0;">This is an automated email from your portfolio website</p>

          </div>

        </div>
      </div>
    `;

    const text = `
          Rating: ${rating}/5
          Visitor: ${sanitizedName}
          Email: ${sanitizedEmail}

          Message:
          ${sanitizedMessage}
        `;

    // Send email
    // use shared helper instead of transporter.sendMail
    await sendEmail({
      to: process.env.RECEIVE_EMAIL,
      subject: `📩 Portfolio Feedback - ${rating}⭐`,
      html,
      text,
    });

    // Log successful submission
    console.log(
      `Feedback received: ${sanitizedName} (${rating}⭐) at ${new Date().toISOString()}`
    );

    res.status(200).json({
      success: true,
      message:
        "Feedback submitted successfully! You will receive a confirmation email.",
    });
  } catch (error) {
    console.error("❌ Error sending email:", {
      message: error.message,
      code: error.code,
      command: error.command,
      response: error.response,
    });
    res.status(500).json({
      success: false,
      message: "Failed to submit feedback. Please try again later.",
    });
  }
});

// Contact form endpoint (for direct inquiries)
app.post("/api/send-message", contactLimiter, async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email address",
      });
    }

    if (message.length > 5000) {
      return res.status(400).json({
        success: false,
        message: "Message is too long (max 5000 characters)",
      });
    }

    // Sanitize inputs
    const sanitizeInput = (str) => {
      return str.replace(/[<>]/g, "").trim();
    };

    const sanitizedName = sanitizeInput(name);
    const sanitizedEmail = sanitizeInput(email);
    const sanitizedSubject = sanitizeInput(subject);
    const sanitizedMessage = sanitizeInput(message);
    const submittedAt = new Date().toLocaleString();

    // Email content
    const html = `
      <div style="font-family: Arial, sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px;">

        <div style="background: white; border-radius: 10px; padding: 30px; max-width: 600px; margin: 0 auto;">

          <h2 style="color: #333; margin-bottom: 20px;">📨 New Contact Message!</h2>
          
          <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
            <p style="margin: 10px 0;"><strong>From:</strong> ${sanitizedName}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${sanitizedEmail}">${sanitizedEmail}</a></p>
            <p style="margin: 10px 0;"><strong>Subject:</strong> ${sanitizedSubject}</p>
            <p style="margin: 10px 0;"><strong>Submitted:</strong> ${submittedAt}</p>
          </div>

          <div style="background: #f0f4ff; padding: 15px; border-left: 4px solid #667eea; border-radius: 4px; margin-bottom: 20px;">

            <p style="margin: 0; color: #333; line-height: 1.6;"><strong>Message:</strong><br>${sanitizedMessage.replace(
              /\n/g,
              "<br>"
            )}</p>

          </div>

          <div style="text-align: center; border-top: 1px solid #eee; padding-top: 15px; margin-top: 20px;">
            <p style="color: #666; font-size: 12px; margin: 0;">Reply directly to this email to respond to ${sanitizedName}</p>
          </div>

        </div>
      </div>
    `;

    const text = `
          From: ${sanitizedName}
          Email: ${sanitizedEmail}
          Subject: ${sanitizedSubject}

          Message:
          ${sanitizedMessage}
        `;

    // Send email
    // CHANGED: use shared helper instead of transporter.sendMail
    await sendEmail({
      to: process.env.RECEIVE_EMAIL,
      subject: `💬 New Message from Portfolio: ${sanitizedSubject}`,
      html,
      text,
    });

    // Log successful submission
    console.log(
      `Message received from: ${sanitizedName} (${sanitizedEmail}) at ${new Date().toISOString()}`
    );

    res.status(200).json({
      success: true,
      message: "Message sent successfully! I'll get back to you soon.",
    });
  } catch (error) {
    console.error("❌ Error sending message:", {
      message: error.message,
      code: error.code,
      command: error.command,
      response: error.response,
    });
    res.status(500).json({
      success: false,
      message: "Failed to send message. Please try again later.",
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "An unexpected error occurred",
  });
});

// 404 for non-GET or unmatched API requests
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Endpoint not found",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || "development"}`);
});
