# Divyesh Gangera's Full-Stack Portfolio

A responsive, production-ready full-stack portfolio website showcasing projects, skills, and experience. Built with modern web technologies and deployed on cloud platforms with secure email notification system.

**Live URLs:**
- 🌐 **Frontend**:  [divyesh-gangera-portfolio.netlify.app](https://divyesh-gangera-portfolio.netlify.app)
- 🔌 **Backend API**: [my-portfolio-backend-cl9q.onrender.com](https://my-portfolio-backend-cl9q.onrender.com)
- 📧 **Contact Email**: gangera0707@gmail.com
- 🧪 **Postman Collection**: [Postman Collection](https://divyeshgangera.postman.co/workspace/Divyesh-Gangera's-Workspace~753ced6c-f8a3-4456-83d0-5aff0dc7059d/collection/46277832-4dd8112f-d573-4a95-8be2-c4f261aa0abf?action=share&creator=46277832&active-environment=46277832-220a9adc-b599-48d7-8c4f-0f9b624ac431&live=7w8hhzsrxy)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Running Locally](#running-locally)
- [API Documentation](#api-documentation)
- [Postman Testing](#postman-testing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## 📱 Overview

This portfolio is a **full-stack web application** that:
- Displays professional projects, skills, and experience
- Allows visitors to submit feedback with star ratings (1-5)
- Enables direct contact via message forms
- Sends formatted emails via Gmail SMTP
- Implements security best practices (rate limiting, validation, sanitization)
- Deployed with CI/CD on Netlify (frontend) and Render (backend)

**Key Achievements:**
- ✅ Secure email system with validation & rate limiting
- ✅ Responsive design (mobile-first)
- ✅ Production-ready deployment
- ✅ Enterprise-grade security layers
- ✅ Real-time form feedback & error handling

---

## ✨ Features

### Frontend Features
- **Responsive Design**: Mobile, tablet, and desktop optimized
- **Project Showcase**: Display all projects with descriptions
- **Skills Section**: Organized by categories
- **Contact Forms**: Two separate forms (Feedback & Get in Touch)
- **Star Rating**: Visitor feedback with 1-5 star ratings
- **Toast Notifications**: Real-time form submission feedback
- **Smooth Animations**: Framer Motion transitions

### Backend Features
- **REST API Endpoints**: Send feedback and messages
- **Input Validation**: All fields validated before processing
- **Rate Limiting**: 5 requests per 15 minutes per IP
- **Email Sanitization**: XSS prevention via HTML escaping
- **Email Notifications**: Formatted HTML emails via Gmail SMTP
- **CORS Protection**: Origin-based access control
- **Error Handling**: Comprehensive error responses
- **Environment Variables**: Secure secret management

---

## 🛠 Tech Stack

### Frontend
| Technology | Version | Purpose |
|-----------|---------|---------|
| **React** | 18+ | UI framework |
| **TypeScript** | 5+ | Type safety |
| **Vite** | 5+ | Build tool & dev server |
| **Tailwind CSS** | 3+ | Utility-first styling |
| **shadcn/ui** | Latest | Pre-built components |
| **Axios** | 1+ | HTTP client |
| **React Router** | 6+ | Navigation |
| **Sonner** | 1+ | Toast notifications |

### Backend
| Technology | Purpose |
|-----------|---------|
| **Node.js** | Runtime environment |
| **Express.js** | Web framework |
| **Nodemailer** | Email service |
| **Dotenv** | Environment variables |
| **CORS** | Cross-origin requests |
| **Body-parser** | JSON parsing |

### Deployment & Tools
| Platform | Purpose |
|----------|---------|
| **Netlify** | Frontend hosting (Git-based) |
| **Render** | Backend hosting (Node.js) |
| **GitHub** | Version control & CI/CD |
| **Gmail SMTP** | Email delivery |
| **Postman** | API testing |

---

## 📂 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── ContactSection.tsx       # Feedback & message forms
│   │   ├── ProjectCard.tsx          # Project display
│   │   ├── SkillCard.tsx            # Skill display
│   │   └── ...other components
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   └── ...other
│   ├── types/
│   │   └── index.ts                 # TypeScript types
│   ├── App.tsx                      # Main app
│   └── main.tsx                     # Vite entry point
├── public/
│   ├── _redirects                   # SPA routing for Netlify
│   └── ...assets
├── server.js                        # Express backend server
├── .env.production                  # Production env vars
├── package.json                     # Dependencies & scripts
├── vite.config.ts                   # Vite configuration
├── tsconfig.json                    # TypeScript config
├── tailwind.config.ts               # Tailwind config
└── README.md                        # This file
```

---

## 🚀 Installation & Setup

### Prerequisites
- **Node.js** 18+ ([Download](https://nodejs.org))
- **npm** or **yarn**
- **Git**
- **Gmail Account** with [2-Step Verification enabled](https://myaccount.google.com/security)

### Step 1: Clone Repository
```bash
git clone https://github.com/divyeshgangara2211/portfolio.git
cd portfolio
```

### Step 2: Install Dependencies
```bash
npm install
# or
yarn install
```

### Step 3: Set Up Gmail App Password
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable **2-Step Verification** (if not already enabled)
3. Go to [App Passwords](https://myaccount.google.com/apppasswords)
4. Select **Mail** and **Windows (or your device)**
5. Copy the **16-character app password**

### Step 4: Configure Environment Variables
```bash
# Copy template

# Edit .env with your values
nano .env
# or use your editor of choice
```

#### `.env` Template:
```env
NODE_ENV=development
PORT=5000

# Gmail SMTP
EMAIL_USER=gangera0707@gmail.com
EMAIL_PASSWORD=your-16-char-app-password-here
RECEIVE_EMAIL=gangera0707@gmail.com

# Frontend URL (for CORS)
CLIENT_URL=http://localhost:5173

# backend URL
VITE_API_URL=https://your-portfolio-backend.onrender.com
```

### Step 5: Verify Installation
```bash
# Check Node version
node --version

# Check npm version
npm --version

# List installed dependencies
npm list
```

---

## 💻 Running Locally

### Option A: Run Both Services Together
```bash
npm run devall
```
This command runs both frontend and backend simultaneously.

**Expected Output:**
```
VITE v5.x.x  ready in xxx ms

➜  Local:   http://localhost:5173/
```

### Option B: Run Services Separately

**Terminal 1 - Start Backend:**
```bash
npm run devserver
```
Expected: `Server running on http://localhost:5000`

**Terminal 2 - Start Frontend:**
```bash
npm run dev
```
Expected: `Local: http://localhost:5173/`

### Test Locally
1. Open http://localhost:5173 in your browser
2. Navigate to **Contact** section
3. Submit a **Feedback** or **Message**
4. Check your email (gangera0707@gmail.com) within 5 seconds
5. If success → ✅ System working correctly

---

## 📡 API Documentation

### Base URLs
- **Local**: `http://localhost:5000`
- **Production**: `https://your-portfolio-backend.onrender.com`

### Endpoints

#### 1️⃣ Send Feedback
**POST** `/api/send-feedback`

**Request Headers:**
```http
Content-Type: application/json
Origin: http://localhost:5173
```

**Request Body:**
```json
{
  "message": "Great portfolio!",
  "rating": 5,
  "visitorName": "John Doe",
  "visitorEmail": "john@example.com"
}
```

**Response (Success - 200):**
```json
{
  "success": true,
  "message": "Feedback submitted successfully!"
}
```

**Response (Error - 400):**
```json
{
  "success": false,
  "message": "Missing required fields: message and rating"
}
```

**Validation Rules:**
- `message` (required): 1-5000 characters
- `rating` (required): 1-5 (integer)
- `visitorName` (optional): string
- `visitorEmail` (optional): valid email format

---

#### 2️⃣ Send Message
**POST** `/api/send-message`

**Request Headers:**
```http
Content-Type: application/json
Origin: http://localhost:5173
```

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Let's collaborate",
  "message": "I'd like to discuss a project..."
}
```

**Response (Success - 200):**
```json
{
  "success": true,
  "message": "Message sent successfully!"
}
```

**Response (Error - 400):**
```json
{
  "success": false,
  "message": "Invalid email format"
}
```

**Validation Rules:**
- `name` (required): 1-100 characters
- `email` (required): valid email format
- `subject` (required): 1-200 characters
- `message` (required): 1-5000 characters

---

### Error Responses

**Rate Limit (429):**
```json
{
  "success": false,
  "message": "Too many requests. Please try again later.",
  "retryAfter": 900
}
```

**CORS Error (403):**
```json
{
  "success": false,
  "message": "CORS policy: Origin not allowed"
}
```

**Server Error (500):**
```json
{
  "success": false,
  "message": "Internal server error. Please try again later."
}
```

---

## 🧪 Postman Testing

- 🧪 **Postman Collection**: [Postman Collection](https://divyeshgangera.postman.co/workspace/Divyesh-Gangera's-Workspace~753ced6c-f8a3-4456-83d0-5aff0dc7059d/collection/46277832-4dd8112f-d573-4a95-8be2-c4f261aa0abf?action=share&creator=46277832&active-environment=46277832-220a9adc-b599-48d7-8c4f-0f9b624ac431&live=7w8hhzsrxy)

### Import Postman Collection

1. **Download Postman** from [postman.com](https://www.postman.com/downloads/)
2. **Import Collection**:
   - Click **Import** → **Link** → Paste below URL (when available)
   - Or manually create requests using the examples below

### Postman Requests

#### Setup Collection Variables
In Postman, create these variables:
- `base_url_local`: `http://localhost:5000`
- `base_url_prod`: `https://your-portfolio-backend.onrender.com`
- `frontend_url`: `http://localhost:5173`

---

#### Request 1: Send Feedback (Local)
**Name:** Send Feedback - Local

```
Method: POST
URL: {{base_url_local}}/api/send-feedback

Headers:
- Content-Type: application/json
- Origin: {{frontend_url}}

Body (raw JSON):
{
  "message": "This is an amazing portfolio! Great work on the design and functionality.",
  "rating": 5,
  "visitorName": "Alex Johnson",
  "visitorEmail": "alex@example.com"
}
```

**Expected Status:** 200

---

#### Request 2: Send Feedback (Production)
**Name:** Send Feedback - Production

```
Method: POST
URL: {{base_url_prod}}/api/send-feedback

Headers:
- Content-Type: application/json
- Origin: https://your-portfolio.netlify.app

Body (raw JSON):
{
  "message": "Excellent full-stack project! Really impressed.",
  "rating": 4,
  "visitorName": "Sarah Smith",
  "visitorEmail": "sarah@example.com"
}
```

**Expected Status:** 200

---

#### Request 3: Send Message (Local)
**Name:** Send Message - Local

```
Method: POST
URL: {{base_url_local}}/api/send-message

Headers:
- Content-Type: application/json
- Origin: {{frontend_url}}

Body (raw JSON):
{
  "name": "Divyesh Gangera",
  "email": "divyesh@example.com",
  "subject": "Partnership Opportunity",
  "message": "I'm interested in discussing a collaboration. Your portfolio is impressive!"
}
```

**Expected Status:** 200

---

#### Request 4: Test Rate Limiting
**Name:** Test Rate Limit (send 6 requests)

```
Method: POST
URL: {{base_url_local}}/api/send-feedback

Body (send this request 6 times rapidly):
{
  "message": "Testing rate limit",
  "rating": 3
}
```

**Expected Result:**
- Requests 1-5: Status 200 ✅
- Request 6: Status 429 (Too Many Requests) ⛔

---

#### Request 5: Test Invalid Email
**Name:** Test Invalid Email

```
Method: POST
URL: {{base_url_local}}/api/send-message

Body (raw JSON):
{
  "name": "Test User",
  "email": "invalid-email-format",
  "subject": "Test",
  "message": "Testing validation"
}
```

**Expected Status:** 400
**Expected Response:**
```json
{
  "success": false,
  "message": "Invalid email format"
}
```

---

#### Request 6: Test Missing Fields
**Name:** Test Missing Fields

```
Method: POST
URL: {{base_url_local}}/api/send-feedback

Body (raw JSON):
{
  "message": "Only message provided"
}
```

**Expected Status:** 400
**Expected Response:**
```json
{
  "success": false,
  "message": "Missing required fields: message and rating"
}
```

---

### Postman Collection Export (JSON)

Save as `Portfolio-API.postman_collection.json`:

```json
{
  "info": {
    "name": "Portfolio API",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "item": [
    {
      "name": "Send Feedback - Local",
      "request": {
        "method": "POST",
        "header": [{"key": "Content-Type", "value": "application/json"}],
        "url": {"raw": "{{base_url_local}}/api/send-feedback"},
        "body": {"mode": "raw", "raw": "{\"message\": \"Great!\", \"rating\": 5}"}
      }
    },
    {
      "name": "Send Message - Local",
      "request": {
        "method": "POST",
        "header": [{"key": "Content-Type", "value": "application/json"}],
        "url": {"raw": "{{base_url_local}}/api/send-message"},
        "body": {"mode": "raw", "raw": "{\"name\": \"John\", \"email\": \"john@example.com\", \"subject\": \"Hi\", \"message\": \"Hello\"}"}
      }
    }
  ]
}
```

---

## 🌐 Deployment

### Frontend Deployment (Netlify)

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "chore: prepare for deployment"
   git push origin main
   ```

2. **Connect to Netlify**:
   - Go to [netlify.com](https://www.netlify.com)
   - Click **Import from Git** → Select repository
   - Build command: `npm run build`
   - Publish directory: `dist`

3. **Set Environment Variables**:
   - Site Settings → Environment Variables
   - Add: `VITE_API_URL=https://your-portfolio-backend.onrender.com`

4. **Deploy**: Netlify auto-deploys on push to main

---

### Backend Deployment (Render)

1. **Create Render Account**: [render.com](https://render.com)

2. **Create Web Service**:
   - **Name**: `portfolio-api`
   - **Environment**: Node.js
   - **Build command**: `npm install`
   - **Start command**: `node server.js`

3. **Set Environment Variables**:
   ```
   NODE_ENV=production
   PORT=5000
   EMAIL_USER=gangera0707@gmail.com
   EMAIL_PASSWORD=your-app-password
   RECEIVE_EMAIL=gangera0707@gmail.com
   CLIENT_URL=https://your-portfolio.netlify.app
   ```

4. **Deploy**: Click Deploy

---

### Keep Backend Awake (Optional)

Use UptimeRobot to prevent free-tier sleep:

1. Go to [uptimerobot.com](https://uptimerobot.com)
2. Create monitor:
   - **Type**: HTTP(s)
   - **URL**: `https://your-portfolio-backend.onrender.com/`
   - **Interval**: Every 5 minutes
3. Save

---


## 📊 Project Statistics

| Metric | Value |
|--------|-------|
| **Frontend** | React + TypeScript + Vite |
| **Backend** | Node.js + Express |
| **Security Layers** | 8 (HTTPS, CORS, Rate Limit, Validation, Sanitization, etc.) |
| **API Endpoints** | 2 (/send-feedback, /send-message) |
| **Response Time** | 1-3 seconds (avg) |
| **Rate Limit** | 5 requests per 15 minutes per IP |
| **Database** | None (email-based) |
| **Deployment** | Netlify (frontend) + Render (backend) |
| **Uptime** | 99.9% (monitored with UptimeRobot) |

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/your-feature`
3. **Commit changes**: `git commit -m "feat: add your feature"`
4. **Push to branch**: `git push origin feature/your-feature`
5. **Open a Pull Request**

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 📧 Contact

**Divyesh Gangera**

- 🌐 **Portfolio**: [divyesh-gangera-portfolio.netlify.app](https://divyesh-gangera-portfolio.netlify.app)
- 💼 **LinkedIn**: [Divyesh Gangera](https://www.linkedin.com/in/divyesh-gangera-916468274/)
- 🐙 **GitHub**: [divyeshgangara2211](https://github.com/divyeshgangara2211)
- 📱 **Phone**: +91 8849440341
- 📍 **Location**: Gandhinagar, Gujarat, India

---

## 🙏 Acknowledgments

- **React & Vite** communities for excellent documentation
- **Tailwind CSS** for utility-first styling
- **shadcn/ui** for pre-built components
- **Nodemailer** for email integration
- **Netlify & Render** for free hosting tiers

---

## 📞 Support

For issues or questions:
1. Check the [GitHub Issues](https://github.com/divyeshgangara2211/portfolio/issues)
2. Email: gangera0707@gmail.com
3. Create a new issue with detailed information

---

<!-- **Last Updated**: January 01, 2026   -->
**Version**: 1.0.0  
**Status**: ✅ Production Ready

⭐ If you find this project helpful, please give it a star on GitHub!
