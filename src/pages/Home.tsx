
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navigation />
      <main>
        <HeroSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
