
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Star, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    message: "",
    rating: 0,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hoveredStar, setHoveredStar] = useState(0);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setFormData(prev => ({
      ...prev,
      message: value
    }));
  };

  const handleStarClick = (rating: number) => {
    setFormData(prev => ({
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
    const activeRating = hoveredStar || formData.rating;
    if (star <= activeRating) {
      return 'text-amber-400 fill-amber-400';
    }
    return 'text-gray-300';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send feedback email to gangera0707@gmail.com
      const feedbackData = {
        to: 'gangera0707@gmail.com',
        subject: 'Portfolio Feedback Received',
        message: `
          Rating: ${formData.rating} star${formData.rating > 1 ? 's' : ''}
          
          Feedback:
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
            subject: feedbackData.subject,
            message: feedbackData.message,
            email: 'portfolio-feedback@noreply.com'
          })
        });
      } catch (emailError) {
        console.log('Email service not configured, feedback logged:', feedbackData);
      }
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Feedback Submitted Successfully! ⭐",
        description: `Thank you for your ${formData.rating}-star feedback! I'll get back to you soon.`,
      });
      
      // Reset form
      setFormData({
        message: "",
        rating: 0,
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
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Drop Your Feedback</h2>
          <div className="flex justify-center mb-6 space-x-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star 
                key={star} 
                className={`w-10 h-10 cursor-pointer transition-all duration-300 hover:scale-110 transform ${getStarColor(star)}`}
                onClick={() => handleStarClick(star)}
                onMouseEnter={() => handleStarHover(star)}
                onMouseLeave={handleStarLeave}
                style={{
                  filter: star <= (hoveredStar || formData.rating) 
                    ? 'drop-shadow(0 0 8px rgba(251, 191, 36, 0.5))' 
                    : 'none'
                }}
              />
            ))}
          </div>
          {formData.rating > 0 && (
            <p className="text-lg text-gray-600 animate-fade-in">
              Thank you for rating {formData.rating} star{formData.rating > 1 ? 's' : ''}! ✨
            </p>
          )}
        </div>

        {/* Contact Form */}
        <Card className="border-0 shadow-xl bg-white rounded-3xl overflow-hidden mb-16">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Textarea
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 resize-none rounded-xl text-lg"
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

        {/* Social Links */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-8 text-center">
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
  );
};

export default ContactSection;
