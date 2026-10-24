"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Download, ExternalLink } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6 sm:space-y-8 animate-fade-in">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
                  Divyesh Gangera
                </span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
                A{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  Software Engineer
                </span>{" "}
                building scalable backend systems, data pipelines, and intelligent solutions
              </p>
            </div>

            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Specializing in Python backend architecture and Applied AI / Machine Learning. Currently engineering enterprise workflows and automated systems at Silent Infotech, while actively building and experimenting with predictive ML models and intelligent AI tools to solve real-world problems.
            </p>

            <div className="flex flex-col sm:flex-row gap-3.5 sm:gap-4 justify-center lg:justify-start">
              <Link href="/projects" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                >
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group bg-transparent cursor-pointer"
                onClick={() => {
                  // Resume PDF functionality 
                  const resumeUrl = "/All_Certificate_Photos/Divyesh_Gangera_Resume.pdf" ; 
                  window.open(resumeUrl, "_blank");
                }}
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Resume
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="flex justify-center lg:justify-end perspective-1000 mt-4 lg:mt-0">
            <div className="relative group w-[270px] h-[340px] sm:w-80 sm:h-96 lg:w-96 lg:h-[28rem] max-w-[85vw] cursor-pointer">
              {/* Dynamic Animated Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500 rounded-[2.5rem] blur-xl opacity-30 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"></div>
              
              {/* Frame Container */}
              <div className="absolute inset-0 bg-white/20 dark:bg-slate-800/30 backdrop-blur-md rounded-[2.5rem] border border-white/40 dark:border-white/10 overflow-hidden transform transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2 group-hover:rotate-1 shadow-2xl">
                
                {/* Image */}
                <img
                  src="/All_Certificate_Photos/myphoto_blazerjpeg.jpeg"
                  alt="Divyesh Gangera - Software Engineer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Subtle overlay gradient for professional look */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
