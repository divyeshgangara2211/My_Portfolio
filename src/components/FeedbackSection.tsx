import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Star, Send, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const FeedbackSection = () => {
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!message.trim() || rating === 0) {
      toast({
        title: "Validation Error",
        description: "Please add feedback and select a rating.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch(`${API_URL}/api/send-feedback`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, rating }),
      });

      const data = await res.json();

      if (res.ok) {
        toast({
          title: "Feedback sent",
          description: `Thanks for your ${rating}-star feedback!`,
        });
        setMessage("");
        setRating(0);
      } else {
        toast({
          title: "Error",
          description: data.message || "Failed to send feedback",
          variant: "destructive",
        });
      }
    } catch (err) {
      console.error(err);
      toast({
        title: "Error",
        description: "Network error. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const starColor = (star: number) => {
    const active = hovered || rating;
    return star <= active
      ? "text-yellow-400 fill-yellow-400 drop-shadow-md"
      : "text-gray-300";
  };

  return (
    <section
      id="feedback"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 animate-fade-in">
          {/* <div className="inline-flex items-center gap-2 mb-3 text-blue-600">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-widest">Your Feedback</span>
          </div> */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Drop Your Feedback
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your thoughts help me improve. Let me know what you think !!
          </p>
        </div>

        {/* Main Card */}
        <div className="relative group">
          {/* Subtle gradient border */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-200 to-purple-200 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>

          <Card className="relative border border-white/60 bg-white/80 backdrop-blur-lg rounded-3xl shadow-lg overflow-hidden">
            <CardContent className="p-8 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-7">
                {/* Star Rating */}
                <div className="flex flex-col items-center gap-4">
                  <div className="flex gap-2 md:gap-3">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setRating(s)}
                        onMouseEnter={() => setHovered(s)}
                        onMouseLeave={() => setHovered(0)}
                        className="focus:outline-none transition-transform"
                      >
                        <Star
                          className={`w-16 md:w-20 cursor-pointer transition-all duration-200  
                            ${
                                (hovered > 0 && s <= hovered) ||
                                (hovered === 0 && s <= rating)
                                ? "scale-150"
                                : "scale-125"
                            }
                            ${starColor(s)}
                            `}
                          onMouseEnter={() => setHovered(s)}
                          onMouseLeave={() => setHovered(0)}
                          onClick={() => setRating(s)}
                        />
                      </button>
                    ))}
                  </div>
                  {rating > 0 && (
                    <div className="text-center">
                      <p className="text-gray-700 text-base md:text-lg font-semibold animate-fade-in">
                        {rating === 5 && "⭐ Excellent! You loved it!"}
                        {rating === 4 && "🌟 Great! Very satisfied"}
                        {rating === 3 && "👍 Good! Thanks for feedback"}
                        {rating === 2 && "📝 Could be better"}
                        {rating === 1 && "💭 Let me improve"}
                      </p>
                    </div>
                  )}
                </div>

                {/* Textarea */}
                <div>
                  <label className="sr-only">Your feedback</label>
                  <Textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={6}
                    placeholder="Write your thoughts here..."
                    className="w-full resize-none rounded-xl border border-blue-100 bg-white text-gray-900 placeholder-gray-400 px-5 py-4 text-base focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-300 focus:outline-none"
                  />
                </div>

                {/* Footer */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-5 pt-2">
                  <div className="text-center sm:text-left">
                    {rating > 0 && (
                      <p className="text-gray-700 font-semibold animate-fade-in">
                        Rating:{" "}
                        <span className="text-blue-600">{rating} / 5</span>
                      </p>
                    )}
                    {rating === 0 && (
                      <p className="text-gray-500 text-sm">
                        Select a rating above
                      </p>
                    )}
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting || rating === 0 || !message.trim()}
                    className="w-full sm:w-auto px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-blue-300/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2 inline-block"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 inline-block mr-2 group-hover:translate-x-0.5 transition-transform" />
                        Submit Feedback
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
