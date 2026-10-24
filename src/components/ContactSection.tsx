"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Github, Linkedin, Star, Instagram, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  process.env.VITE_API_URL ||
  (typeof window !== "undefined" && window.location.hostname !== "localhost"
    ? "https://my-portfolio-backend-cl9q.onrender.com"
    : "http://localhost:5000");

const ContactSection = () => {
  const [activeTab, setActiveTab] = useState<'feedback' | 'message'>('feedback');
  const [feedbackData, setFeedbackData] = useState({
    message: "",
    rating: 0,
    visitorName: "",
    visitorEmail: "",
  });
  const [messageData, setMessageData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hoveredStar, setHoveredStar] = useState(0);
  const { toast } = useToast();

  const handleFeedbackInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setFeedbackData(prev => ({
      ...prev,
      message: value
    }));
  };

  const handleMessageInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setMessageData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleStarClick = (rating: number) => {
    setFeedbackData(prev => ({
      ...prev,
      rating
    }));
  };

  const handleStarHover = (star: number) => {
    setHoveredStar(star);
  };

  const handleStarLeave = () => {
    setHoveredStar(0);
  };

  const getStarColor = (star: number) => {
    const activeRating = hoveredStar || feedbackData.rating;
    if (star <= activeRating) {
      return 'text-amber-400 fill-amber-400';
    }
    return 'text-gray-300';
  };

  const handleFeedbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!feedbackData.message.trim() || feedbackData.rating === 0) {
      toast({
        title: "Validation Error",
        description: "Please provide feedback and select a rating.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_URL}/api/send-feedback`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: feedbackData.message,
          rating: feedbackData.rating,
          visitorName: feedbackData.visitorName || 'Anonymous',
          visitorEmail: feedbackData.visitorEmail || 'Not provided',
        })
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Feedback Submitted Successfully! ⭐",
          description: `Thank you for your ${feedbackData.rating}-star feedback! I'll review it soon.`,
        });

        // Reset form
        setFeedbackData({
          message: "",
          rating: 0,
          visitorName: "",
          visitorEmail: "",
        });
      } else {
        toast({
          title: "Error",
          description: data.message || "Failed to submit feedback. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
      toast({
        title: "Error",
        description: "Failed to submit feedback. Please check your connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleMessageSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, subject, message } = messageData;

    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      toast({
        title: "Validation Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Validation Error",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_URL}/api/send-message`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
        })
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Message Sent Successfully! 📨",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });

        // Reset form
        setMessageData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        toast({
          title: "Error",
          description: data.message || "Failed to send message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please check your connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-10 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-4xl mx-auto">
        {/* Tab Navigation */}
        <div className="flex justify-center gap-2.5 sm:gap-4 mb-10 sm:mb-16">
          <button
            onClick={() => setActiveTab('feedback')}
            className={`px-4 sm:px-6 py-2.5 text-sm sm:text-base rounded-full font-semibold transition-all duration-300 ${
              activeTab === 'feedback'
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                : 'bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 border-2 border-gray-200 dark:border-slate-700 hover:border-blue-500'
            }`}
          >
            ⭐ Feedback
          </button>
          <button
            onClick={() => setActiveTab('message')}
            className={`px-4 sm:px-6 py-2.5 text-sm sm:text-base rounded-full font-semibold transition-all duration-300 ${
              activeTab === 'message'
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                : 'bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 border-2 border-gray-200 dark:border-slate-700 hover:border-blue-500'
            }`}
          >
            💬 Get in Touch
          </button>
        </div>

        {/* Feedback Tab */}
        {activeTab === 'feedback' && (
          <>
            <div className="text-center mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">Drop Your Feedback</h2>
              <div className="flex justify-center mb-4 sm:mb-6 space-x-1.5 sm:space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star} 
                    className={`w-8 h-8 sm:w-10 sm:h-10 cursor-pointer transition-all duration-300 hover:scale-110 transform ${getStarColor(star)}`}
                    onClick={() => handleStarClick(star)}
                    onMouseEnter={() => handleStarHover(star)}
                    onMouseLeave={handleStarLeave}
                    style={{
                      filter: star <= (hoveredStar || feedbackData.rating) 
                        ? 'drop-shadow(0 0 8px rgba(251, 191, 36, 0.5))' 
                        : 'none'
                    }}
                  />
                ))}
              </div>
              {feedbackData.rating > 0 && (
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 animate-fade-in">
                  Thank you for rating {feedbackData.rating} star{feedbackData.rating > 1 ? 's' : ''}! ✨
                </p>
              )}
            </div>

            <div className="relative group mb-16">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-300 to-pink-300 dark:from-purple-600 dark:to-pink-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
              <Card className="relative border-0 shadow-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg rounded-2xl sm:rounded-3xl overflow-hidden">
                <CardContent className="p-5 sm:p-8">
                <form onSubmit={handleFeedbackSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                    <Input
                      type="text"
                      name="visitorName"
                      value={feedbackData.visitorName}
                      onChange={(e) => setFeedbackData(prev => ({ ...prev, visitorName: e.target.value }))}
                      className="w-full border-2 border-gray-200 dark:border-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 rounded-xl bg-white dark:bg-slate-900 dark:text-white"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                    <Input
                      type="email"
                      name="visitorEmail"
                      value={feedbackData.visitorEmail}
                      onChange={(e) => setFeedbackData(prev => ({ ...prev, visitorEmail: e.target.value }))}
                      className="w-full border-2 border-gray-200 dark:border-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 rounded-xl bg-white dark:bg-slate-900 dark:text-white"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Feedback</label>
                    <Textarea
                      name="message"
                      required
                      rows={6}
                      value={feedbackData.message}
                      onChange={handleFeedbackInputChange}
                      className="w-full border-2 border-gray-200 dark:border-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 resize-none rounded-xl text-lg bg-white dark:bg-slate-900 dark:text-white"
                      placeholder="Share your thoughts about my work..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                        Submitting...
                      </>
                    ) : (
                      'Submit Feedback'
                    )}
                  </Button>
                </form>
                </CardContent>
              </Card>
            </div>
          </>
        )}

        {/* Message Tab */}
        {activeTab === 'message' && (
          <>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Get in Touch</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">Have a project in mind? Let's talk!</p>
            </div>

            <div className="relative group mb-16">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-300 to-emerald-300 dark:from-teal-600 dark:to-emerald-600 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
              <Card className="relative border-0 shadow-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg rounded-2xl sm:rounded-3xl overflow-hidden">
                <CardContent className="p-5 sm:p-8">
                <form onSubmit={handleMessageSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name *</label>
                    <Input
                      type="text"
                      name="name"
                      required
                      value={messageData.name}
                      onChange={handleMessageInputChange}
                      className="w-full border-2 border-gray-200 dark:border-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 rounded-xl bg-white dark:bg-slate-900 dark:text-white"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email *</label>
                    <Input
                      type="email"
                      name="email"
                      required
                      value={messageData.email}
                      onChange={handleMessageInputChange}
                      className="w-full border-2 border-gray-200 dark:border-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 rounded-xl bg-white dark:bg-slate-900 dark:text-white"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject *</label>
                    <Input
                      type="text"
                      name="subject"
                      required
                      value={messageData.subject}
                      onChange={handleMessageInputChange}
                      className="w-full border-2 border-gray-200 dark:border-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 rounded-xl bg-white dark:bg-slate-900 dark:text-white"
                      placeholder="What is this about?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message *</label>
                    <Textarea
                      name="message"
                      required
                      rows={6}
                      value={messageData.message}
                      onChange={handleMessageInputChange}
                      className="w-full border-2 border-gray-200 dark:border-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 resize-none rounded-xl text-lg bg-white dark:bg-slate-900 dark:text-white"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </Button>
                </form>
                </CardContent>
              </Card>
            </div>
          </>
        )}

        {/* Social Links */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 rounded-3xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-8">Let's Build Together</h3>
          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="https://www.linkedin.com/in/divyesh-gangera-916468274/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-200 hover:scale-110 transform shadow-lg"
            >
              <Linkedin className="h-8 w-8" />
            </a>
            <a
              href="https://github.com/divyeshgangara2211"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-16 h-16 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-all duration-200 hover:scale-110 transform shadow-lg"
            >
              <Github className="h-8 w-8" />
            </a>
            <a
              href="https://www.instagram.com/divyesh_22_11" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-200 hover:scale-110 transform shadow-lg"
            >
              <Instagram className="h-8 w-8" />
            </a>
          </div>
          {/* <p className="text-gray-600 dark:text-gray-400 text-lg font-medium">
            Made with ❤️ by Divyesh Gangera
          </p> */}
          <p className="text-black-900 mb-8 max-w-2xl mx-auto">
            I'm currently looking for new opportunities and collaborations. If you have a project in mind or just want to connect, feel free to reach out.
          </p>
          {/* <a
            href="mailto:gangera0707@gmail.com"
            className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 transform transition-transform duration-300"
          >
            <Mail className="h-5 w-5 mr-2" />
            Get in Touch
          </a> */}
        </div>


      </div>
    </section>
  );
};

export default ContactSection;
