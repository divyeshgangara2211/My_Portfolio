import { Button } from "@/components/ui/button";
import { ArrowRight, Download, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Divyesh Gangera
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed">
                A passionate{" "}
                <span className="font-semibold text-blue-600">
                  Computer Engineering
                </span>{" "}
                student crafting innovative digital solutions
              </p>
            </div>

            <p className="text-lg text-gray-700 max-w-2xl mx-auto lg:mx-0">
              I build modern web applications using React, Node.js, and
              cutting-edge technologies. From full-stack development to UI/UX
              design, I love creating experiences that make a difference.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/projects">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 group"
                >
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gray-300 hover:border-blue-500 hover:text-blue-600 transition-all duration-300 group"
                onClick={() => {
                  // Resume PDF functionality - add your resume PDF link here
                  const resumeUrl = "/resume.pdf"; // Replace with your actual resume PDF path
                  window.open(resumeUrl, "_blank");
                }}
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Resume
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Blue Glow on Hover */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>

              {/* Image Card */}
              <div className="relative w-80 h-96 lg:w-96 lg:h-[28rem] rounded-2xl overflow-hidden shadow-2xl border-4 border-white group-hover:scale-105 transition-transform duration-500">
                <img
                  src="/lovable-uploads/75cc9876-0ee7-40e7-b84a-99037d1a220f.png"
                  alt="Divyesh Gangera - Full Stack Developer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
