
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Trophy, Heart } from "lucide-react";

const ProjectsSection = () => {
  const fullStackProjects = [
    {
      title: "YouStreamPro",
      description: "🔥 YouStreamPro is a powerful streaming management tool designed to simplify and enhance your live streaming experience. Features multi-platform streaming support, real-time analytics, customizable overlays, and stream scheduling. The backend is a full-featured YouTube-like platform built with Node.js, Express.js, MongoDB, JWT, and bcrypt.",
      tech: ["Node.js", "Express.js", "MongoDB", "JWT", "React.js"],
      icon: "📺",
      features: ["Multi-platform Streaming", "Real-time Analytics", "RESTful APIs", "User Authentication", "Video Management", "Secure Token Handling"]
    },
    {
      title: "Social Media App", 
      description: "A modern full-stack social media app built with React and Appwrite. Features secure authentication, post creation with text, image/file uploads, and real-time content sharing. Uses Appwrite for backend services like auth, database, and storage. Ideal for learning scalable app development.",
      tech: ["React.js", "Appwrite", "JavaScript", "Authentication", "Real-time"],
      icon: "📱",
      features: ["Secure Authentication", "Post Creation", "File Uploads", "Real-time Sharing", "Content Management"]
    },
  ];

  const frontendProjects = [
    {
      title: "Harmony Health",
      description: "🏆 A holistic wellness platform that integrates mental, emotional, and physical health. Features personalized wellness plans, mood tracking, guided meditation, therapy resources, and AI chatbot assistance. This project represents my victory at HackTheSpring ideathon and months of dedication during my 4th & 5th semester design engineering course.",
      tech: ["React.js", "Tailwind CSS", "React Router", "AI Chatbot"],
      icon: "🏥",
      isWinner: true,
      journey: "This project represents my victory at HackTheSpring'24 ideathon and months of dedication during my 4th & 5th semester design engineering course. From initial concept to winning first place as team leader, it was a transformative experience combining health tech innovation with modern web development.",
      features: ["Personalized Wellness Plans", "Mood Tracking", "Guided Meditation", "AI Chatbot", "Progress Monitoring"]
    },
  ];

  const reactProjects = [
    {
      title: "BgChanger Project",
      description: "🎨 Dynamic background color changer with React state management and interactive UI components",
      tech: ["React.JS", "State Management", "Interactive UI"],
      icon: "🎨"
    },
    {
      title: "Password Generator",
      description: "🔐 Customizable password generation with clipboard functionality, length controls, and strength indicator",
      tech: ["React.JS", "Custom Hooks", "Clipboard API"],
      icon: "🔐"
    },
    {
      title: "Currency Converter",
      description: "💱 Real-time currency conversion with external API integration and custom hooks implementation",
      tech: ["React.JS", "API Integration", "Custom Hooks"],
      icon: "💱"
    },
    {
      title: "React Router Project",
      description: "🔁 Dynamic routing with React Router v6, protected routes, and GitHub API integration",
      tech: ["React Router v6", "Protected Routes", "GitHub API"],
      icon: "🔁"
    },
    {
      title: "Advanced Todo List",
      description: "✅ Complete todo app with localStorage, Context API, and business logic focus",
      tech: ["React.JS", "Context API", "LocalStorage"],
      icon: "✅"
    },
  ];

  const jsProjects = [
    {
      title: "ColorChanger",
      description: "A simple web application for changing background colors with DOM manipulation",
      tech: ["HTML", "CSS", "JavaScript"],
      icon: "🌈"
    },
    {
      title: "BMI Calculator",
      description: "User-friendly BMI calculator with form handling and input validation",
      tech: ["HTML", "CSS", "JavaScript"],
      icon: "⚖️"
    },
    {
      title: "Digital Clock",
      description: "Dynamic digital clock with real-time updates and time-based events",
      tech: ["HTML", "CSS", "JavaScript"],
      icon: "🕐"
    },
    {
      title: "SmartWatch Interface",
      description: "Multifunctional smartwatch simulation with stopwatch, timer, and alarm features",
      tech: ["HTML", "CSS", "JavaScript"],
      icon: "⌚"
    },
    {
      title: "Guess The Number",
      description: "Interactive number guessing game with conditional logic and user feedback",
      tech: ["HTML", "CSS", "JavaScript"],
      icon: "🎲"
    },
    {
      title: "Keyboard Press Game",
      description: "Interactive keyboard game with real-time events and animated effects",
      tech: ["HTML", "CSS", "JavaScript"],
      icon: "⌨️"
    },
    {
      title: "Simon Game",
      description: "Classic memory game with sequence patterns and state management",
      tech: ["HTML", "CSS", "JavaScript"],
      icon: "🧠"
    },
    {
      title: "Unlimited Colors",
      description: "Dynamic color changing app with interval timers and random generation",
      tech: ["HTML", "CSS", "JavaScript"],
      icon: "🎨"
    },
  ];

  const pythonProjects = [
    {
      title: "YouTube Video Manager (File-based)",
      description: "Console application for managing YouTube video records with JSON file storage",
      tech: ["Python", "JSON", "File I/O"],
      icon: "📹"
    },
    {
      title: "YouTube Video Manager (Database)",
      description: "Enhanced video manager with SQLite database integration for persistent storage",
      tech: ["Python", "SQLite3", "Database"],
      icon: "🗄️"
    },
  ];

  const cloneProjects = [
    {
      title: "Amazon Clone",
      description: "Frontend clone of Amazon website showcasing responsive design and UX skills. A challenging yet rewarding experience demonstrating frontend development capabilities with professional e-commerce interface design.",
      tech: ["HTML", "CSS", "Responsive Design"],
      icon: "📦",
      logo: "🛒"
    },
    {
      title: "Spotify Clone",
      description: "Music streaming interface clone focusing on modern UI/UX design patterns with beautiful layouts and interactive elements.",
      tech: ["HTML", "CSS", "JavaScript"],
      icon: "🎵",
      logo: "🎧"
    },
  ];

  const ProjectCard = ({ project, index, isSpecial = false }: { project: any; index: number; isSpecial?: boolean }) => (
    <Card 
      className={`group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:-translate-y-2 ${isSpecial ? 'border-2 border-yellow-300 bg-gradient-to-br from-yellow-50 to-orange-50' : ''}`}
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <CardContent className="p-6">
        {isSpecial && (
          <div className="flex items-center mb-4">
            <Trophy className="h-6 w-6 text-yellow-600 mr-2" />
            <span className="bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded-full font-medium">
              Ideathon Winner
            </span>
          </div>
        )}
        
        <div className="text-4xl mb-4 text-center">{project.logo || project.icon}</div>
        <h4 className="text-xl font-semibold text-gray-900 mb-3 text-center">{project.title}</h4>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
        
        {project.journey && (
          <div className="bg-blue-50 p-4 rounded-lg mb-4 border-l-4 border-blue-500">
            <p className="text-blue-800 text-sm italic">{project.journey}</p>
          </div>
        )}

        {project.features && (
          <div className="mb-4">
            <h5 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h5>
            <ul className="text-xs text-gray-600 space-y-1">
              {project.features.map((feature: string) => (
                <li key={feature} className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech: string) => (
            <span 
              key={tech} 
              className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-2">
          <Button 
            size="sm" 
            variant="outline" 
            className="flex-1 border-blue-300 text-blue-600 hover:bg-blue-50"
            onClick={() => {
              // Placeholder for GitHub/project links - will be updated later
              window.open('#', '_blank');
            }}
          >
            <Github className="h-4 w-4 mr-2" />
            Code
          </Button>
          <Button 
            size="sm" 
            variant="outline" 
            className="flex-1 border-green-300 text-green-600 hover:bg-green-50"
            onClick={() => {
              // Placeholder for view project links - will be updated later
              window.open('#', '_blank');
            }}
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            View
          </Button>
          {project.isWinner && (
            <Button 
              size="sm" 
              className="flex-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white"
              onClick={() => {
                // Scroll to about page ideathon section
                window.location.href = '/about#ideathon';
              }}
            >
              <Heart className="h-4 w-4 mr-2" />
              View Journey
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">My Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my development journey across different technologies and frameworks
          </p>
        </div>

        {/* Full Stack Projects */}
        <div className="mb-20">
          <h3 className="text-3xl font-semibold text-gray-800 mb-12 text-center">🚀 Full Stack Projects</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {fullStackProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* Frontend Projects */}
        <div className="mb-20">
          <h3 className="text-3xl font-semibold text-gray-800 mb-12 text-center">💻 Frontend Projects</h3>
          <div className="grid lg:grid-cols-1 gap-8 max-w-3xl mx-auto">
            {frontendProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} isSpecial={true} />
            ))}
          </div>
        </div>

        {/* Clone Projects */}
        <div className="mb-20">
          <h3 className="text-3xl font-semibold text-gray-800 mb-12 text-center">🎭 Clone Projects</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {cloneProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* React Mini Projects */}
        <div className="mb-20">
          <h3 className="text-3xl font-semibold text-gray-800 mb-12 text-center">⚛️ React Mini Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reactProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* JavaScript Mini Projects */}
        <div className="mb-20">
          <h3 className="text-3xl font-semibold text-gray-800 mb-12 text-center">🟨 JavaScript Mini Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {jsProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* Python Projects */}
        <div>
          <h3 className="text-3xl font-semibold text-gray-800 mb-12 text-center">🐍 Python Projects</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pythonProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
