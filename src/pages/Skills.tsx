
import Navigation from "@/components/Navigation";
import SkillsSection from "@/components/SkillsSection";
import Footer from "@/components/Footer";

const Skills = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navigation />
      <main className="pt-16">
        <SkillsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Skills;
