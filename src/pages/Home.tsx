
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeedbackSection from "@/components/FeedbackSection";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navigation />
      <main>
        <HeroSection />
        <FeedbackSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
