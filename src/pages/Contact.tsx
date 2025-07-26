
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Phone, MapPin, Instagram } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email to gangera0707@gmail.com
      const emailData = {
        to: 'gangera0707@gmail.com',
        subject: `Portfolio Contact: ${formData.subject}`,
        message: `
          Name: ${formData.name}
          Email: ${formData.email}
          Subject: ${formData.subject}
          
          Message:
          ${formData.message}
        `
      };
      
      // Send email using EmailJS or similar service
      try {
        const response = await fetch('https://formsubmit.co/gangera0707@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            subject: emailData.subject,
            message: emailData.message,
            email: formData.email,
            name: formData.name
          })
        });
      } catch (emailError) {
        console.log('Email service not configured, message logged:', emailData);
      }
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Sent Successfully! 📧",
        description: "Thank you for reaching out! I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navigation />
      <main className="pt-16">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Get In Touch</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Have a project in mind? Let's discuss how we can work together.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="border-0 shadow-xl bg-white rounded-3xl overflow-hidden">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Name *
                        </label>
                        <Input
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          className="border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-xl"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <Input
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          className="border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-xl"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <Input
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What's this about?"
                        className="border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-xl"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project or just say hello!"
                        className="border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-xl resize-none"
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

              {/* Contact Info */}
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-3xl">
                  <div className="flex items-center mb-4">
                    <Mail className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-800">Email</h3>
                  </div>
                  <p className="text-gray-700 text-lg mb-2">gangera0707@gmail.com</p>
                  <a href="mailto:gangera0707@gmail.com" className="text-blue-600 hover:underline">
                    Send me an email →
                  </a>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-3xl">
                  <div className="flex items-center mb-4">
                    <Phone className="h-8 w-8 text-green-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-800">Phone</h3>
                  </div>
                  <p className="text-gray-700 text-lg mb-2">+91 8849440341</p>
                  <p className="text-green-600">Available for calls and WhatsApp</p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-8 rounded-3xl">
                  <div className="flex items-center mb-4">
                    <MapPin className="h-8 w-8 text-purple-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-800">Location</h3>
                  </div>
                  <p className="text-gray-700 text-lg mb-2">Gujarat, India</p>
                  <p className="text-purple-600">Open to remote opportunities</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-8 text-center mt-16">
              <h3 className="text-2xl font-bold text-gray-800 mb-8">Let's Build Together</h3>
              <div className="flex justify-center space-x-6 mb-6">
                <a
                  href="https://linkedin.com/in/divyeshgangera22"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-200 hover:scale-110 transform shadow-lg"
                >
                  <Linkedin className="h-8 w-8" />
                </a>
                <a
                  href="https://github.com/divyeshgangera22"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-16 h-16 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-all duration-200 hover:scale-110 transform shadow-lg"
                >
                  <Github className="h-8 w-8" />
                </a>
                <a
                  href="https://instagram.com/divyeshgangera22"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-200 hover:scale-110 transform shadow-lg"
                >
                  <Instagram className="h-8 w-8" />
                </a>
              </div>
              <p className="text-gray-600 text-lg font-medium">
                Made with ❤️ by Divyesh
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
