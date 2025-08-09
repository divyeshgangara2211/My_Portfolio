import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Trophy,FileText,Video , Heart } from "lucide-react";

const ProjectsSection = () => {

  const fullStackProjects = [
      {
        title: "Social Blog Hub", 
        icon: "📱",
        description: "A dynamic, full-stack blogging platform built with React and Tailwind CSS, powered by Appwrite for all backend services. This project features a sophisticated Rich Text Editor (RTE) for professional content creation  with text , image/file uploads , robust user authentication, and role-based access control. With Redux Toolkit managing state, it offers a seamless and modern user experience for creating and exploring rich media blog posts.",
        tech: ["React.js", "Appwrite", "Redux Toolkit", "Tailwind CSS", "RTE (TinyMCE)"],
        features: [
          "Secure User Authentication & Session Management",
          "Role-Based Access Control (Admin & User)",
          "Full CRUD Functionality for Blog Posts",
          "Rich Text Editor for Professional Content Creation",
          "Cloud Image Uploads (Appwrite Storage)",
          "Centralized State Management with Redux Toolkit",
        ],
        githubLink: "https://github.com/divyeshgangara2211/Social_Blog_App",
        // liveLink: "your-live-demo-link-here"
    },
  ];

  const backendProjects = [
    {
      title: "YouStreamPro Backend",
      description: "A complete backend powerhouse inspired by YouTube and Twitter.  Built with a modern Node.js and Express stack , it integrates with MongoDB for data and Cloudinary for cloud media storage. This project features a secure JWT-based authentication system, efficient media handling with Cloudinary, and a complete suite of RESTful APIs for managing users, videos, tweets, playlists, comments, and likes. It's a deep dive into backend architecture, API security, and building scalable, production-ready systems.",
      tech: ["Node.js", "Express.js", "MongoDB", "JWT", "Cookies", "Bcrypt", "Multer" ,"Cloudinary" , "Erasor.io", "Custom error/auth handlers"],
      icon: "🎬",
      features: [
        "Secure User Authentication  & User Profiles (JWT & Bcrypt)",
        "Modular RESTful API Design",
        "Advanced Middleware (Auth, Validation)",
        "Cloud Media Management (Cloudinary)",
        "Video , Tweets , Playlist & Subscription  Management",
        "Interactive Social Features (Likes & Comments)",
        "Channel Analytics Dashboard"
      ],
      githubLink: "https://github.com/divyeshgangara2211/YouStreamPro",
      // liveLink: "https://youstreampro.your-live-site.com" 
    },
  ];

  const frontendProjects = [
      {
        title: "Harmony Health",
        icon: "🌿",
        isWinner: true,
        description: "A frontend prototype for a holistic wellness platform designed to integrate mental, emotional, and physical health. This project features a user-centric interface for accessing personalized wellness plans, mood tracking, and guided meditation resources.",
        journey: "This project began as ' Virtual Reality Therapy for Mental & Physical Health ' an award-winning concept that won 1st place at the HackTheSpring'24 Ideathon. As team leader, I guided our initial research, solution design, and presentation. Evolving from that victory, my DE team and I developed it into a comprehensive Design Engineering project over two semesters, creating detailed prototypes, system architecture diagrams, and this functional frontend.",
        tech: ["React.js", "Tailwind CSS", "React Router", "Figma", "AI Chatbot"],
        features: [
          "Ideathon-Winning Concept & Design",
          "Interactive UI for Wellness Plans",
          "Mood & Progress Tracking Interface",
          "Guided Meditation & Therapy Resources",
          "AI Chatbot for User Assistance"
        ],
        githubLink: "https://github.com/divyeshgangara2211/Mega-Projects/tree/main/Harmony-Health", 
        // liveLink: "https://harmony-health.your-live-site.com",  
        reportLink: "https://drive.google.com/file/d/1EgtbznkfiwI7OZyQC7AQdjMP_aq4Xv9_/view?usp=drivesdk",             
        videoLink: "https://drive.google.com/drive/u/2/folders/1FkHTCm_17zmJ0a4NVbB6op_hGChiyTQP" 
    },
  ];

  const reactProjects = [
    {
      title: "BgChanger Project",
      icon: "🎨",
      description: "A simple yet elegant UI demonstrating powerful state management in React. This project allows users to dynamically change the background color with a click, showcasing a solid understanding of component state and event handling.",
      tech: ["React.js", "State Management", "Tailwind CSS","Interactive UI"],
      features: [
        "Interactive Color-Changing Buttons",
        "Dynamic UI Updates via State",
        "Clean, Component-Based Architecture",
        "Responsive and Modern Interface"
      ],
      githubLink: "https://github.com/divyeshgangara2211/React_Projects/tree/main/01-BackgroundChanger",
      videoLink: "https://drive.google.com/drive/u/2/folders/1FkHTCm_17zmJ0a4NVbB6op_hGChiyTQP" 
    },
    {
      title: "Password Generator",
      icon: "🔐",
      description: "A practical tool for creating strong, customizable passwords. It features adjustable length controls, options for including numbers and special characters, and a one-click copy-to-clipboard function.",
      tech: ["React.js", "Custom Hooks", "Clipboard API","State Management"],
      features: [
        "Customizable Password Length Slider",
        "Character Type Selection (Numbers & Symbols)",
        "Instant 'Copy to Clipboard' Button",
        "Real-time Password Regeneration on Option Change",
        "Clean and Responsive User Interface"
      ],
      githubLink: "https://github.com/divyeshgangara2211/React_Projects/tree/main/02-PasswordGenerator",
      videoLink: "https://drive.google.com/drive/u/2/folders/1FkHTCm_17zmJ0a4NVbB6op_hGChiyTQP" 
    },
    {
      title: "Currency Converter",
      icon: "💱",
      description: "A real-time currency conversion app that showcases skills in fetching and handling data from external APIs. This project uses custom hooks to create reusable, efficient logic for managing API calls and state. It provides users with up-to-date exchange rates in a clean, intuitive, and interactive interface, demonstrating practical application of asynchronous JavaScript in React.",
      tech: ["React.js", "API Integration", "Custom Hooks", "State Management"],
      features: [
        "Live Exchange Rates from an External API",
        "Reusable Logic with Custom Hooks",
        "Dynamic Dropdowns for Currency Selection",
        "Instant Conversion Calculation",
        "User-Friendly and Responsive Layout"
      ],
      githubLink: "https://github.com/divyeshgangara2211/React_Projects/tree/main/03-CurrencyConvertor",
      videoLink: "https://drive.google.com/drive/u/2/folders/1FkHTCm_17zmJ0a4NVbB6op_hGChiyTQP" 
    },
    {
      title: "React Router Project",
      icon: "🔁",
      description: "A project demonstrating a deep understanding of modern client-side routing with React Router v6. It features dynamic user profile pages using URL parameters, protected routes for authentication simulation, and fetches live data from the GitHub API. This project is a comprehensive showcase of building a multi-page application with complex navigation and data fetching patterns.",
      tech: ["React Router v6", "Protected Routes", "GitHub API", "Dynamic Routing"],
      features: [
        "Multi-Page Navigation with React Router",
        "Dynamic Routes with URL Parameters",
        "Protected Route Implementation",
        "Live Data Fetching from GitHub API",
        "Responsive Header and Navigation Bar"
      ],
      githubLink: "https://github.com/divyeshgangara2211/React_Projects/tree/main/04-reactRouter",
      videoLink: "https://drive.google.com/drive/u/2/folders/1FkHTCm_17zmJ0a4NVbB6op_hGChiyTQP" 
    },
    {
      title: "Advanced Todo List",
      icon: "✅",
      description: "A feature-rich todo application that goes beyond the basics, using the Context API for robust global state management and localStorage for data persistence across browser sessions. This project focuses on building complex business logic, including full CRUD (Create, Read, Update, Delete) functionality, and demonstrates how to manage application-wide state without prop drilling.",
      tech: ["React.js", "Context API", "LocalStorage", "State Management"],
      features: [
        "Full CRUD (Create, Read, Update, Delete) Functionality",
        "Global State Management with Context API",
        "Persistent Data with LocalStorage",
        "Individual Todo Completion Toggling",
        "Clean, Component-Based Structure"
      ],
      githubLink: "https://github.com/divyeshgangara2211/React_Projects/tree/main/05-TodoList",
      videoLink: "https://drive.google.com/drive/u/2/folders/1FkHTCm_17zmJ0a4NVbB6op_hGChiyTQP" 
    },
  ];

  const jsProjects = [
    {
      title: "ColorChanger",
      icon: "🌈",
      description: "A foundational project demonstrating core JavaScript concepts. This app allows users to cycle through a palette of colors, instantly changing the background and showcasing a solid understanding of DOM manipulation and event handling.",
      tech: ["HTML", "CSS", "JavaScript", "DOM"],
      features: [
        "Interactive Color-Changing Buttons",
        "Direct DOM Manipulation",
        "Clean Event Listener Implementation",
        "Simple and Intuitive User Interface"
      ],
      githubLink: "https://github.com/divyeshgangara2211/JavaScript_Projects/tree/main/Projects/1-colorChanger",
      // liveLink: "your-live-demo-link-here"
    },
    {
      title: "BMI Calculator",
      icon: "⚖️",
      description: "A practical tool that calculates Body Mass Index based on user input. This project focuses on essential web development skills like form handling, input validation to prevent errors, and dynamically displaying results to the user in a clear, readable format.",
      tech: ["HTML", "CSS", "JavaScript", "Forms"],
      features: [
        "User-Friendly Form for Input",
        "Robust Input Validation",
        "Dynamic BMI Calculation and Display",
        "Clear User Feedback and Results"
      ],
      githubLink: "https://github.com/divyeshgangara2211/JavaScript_Projects/tree/main/Projects/2-BMICalculator",
      // liveLink: "your-live-demo-link-here"
    },
    {
      title: "Digital Clock",
      icon: "🕐",
      description: "A dynamic, real-time digital clock that continuously updates every second. This project showcases the use of JavaScript's Date object and the setInterval method to create a live, ticking clock, demonstrating a key skill for building time-sensitive applications.",
      tech: ["HTML", "CSS", "JavaScript", "Date API"],
      features: [
        "Real-Time, Second-by-Second Updates",
        "Efficient Use of `setInterval`",
        "Clean Display of Hours, Minutes, and Seconds",
        "Integration with the JavaScript Date Object"
      ],
      githubLink: "https://github.com/divyeshgangara2211/JavaScript_Projects/tree/main/Projects/3-DigitalClock",
      // liveLink: "your-live-demo-link-here"
    },
    // {
    //   title: "SmartWatch Interface",
    //   description: "Multifunctional smartwatch simulation with stopwatch, timer, and alarm features",
    //   tech: ["HTML", "CSS", "JavaScript"],
    //   icon: "⌚"
    // },
    {
      title: "Guess The Number",
      icon: "🎲",
      description: "An interactive and fun number guessing game where the user tries to guess a randomly generated number. This project is a great example of implementing game logic, handling user input, providing feedback, and managing state in vanilla JavaScript.",
      tech: ["HTML", "CSS", "JavaScript", "Game Logic"],
      features: [
        "Random Number Generation",
        "User Guess Input and Validation",
        "Feedback on Guesses (Too High/Low)",
        "Win/Loss Condition Logic and Display"
      ],
      githubLink: "https://github.com/divyeshgangara2211/JavaScript_Projects/tree/main/Projects/5-GuessTheNumber",
      // liveLink: "your-live-demo-link-here"
    },
    {
      title: "Keyboard Press Game",
      icon: "⌨️",
      description: "A playful and interactive web app that visually displays which key is being pressed in real-time. This project demonstrates a strong understanding of keyboard event handling and DOM manipulation to create an engaging and responsive user experience.",
      tech: ["HTML", "CSS", "JavaScript", "Events"],
      features: [
        "Real-Time Keyboard Event Detection",
        "Dynamic UI Updates with Key Information",
        "Engaging Visual Feedback on Key Press",
        "Creative Use of CSS for Animations"
      ],
      githubLink: "https://github.com/divyeshgangara2211/JavaScript_Projects/tree/main/Projects/6-KeyboardPressGame",
      // liveLink: "your-live-demo-link-here"
    },
    {
      title: "Unlimited Colors",
      icon: "🎨",
      description: "A captivating app that continuously changes the background to a random color at set intervals. This project highlights the use of interval timers (setInterval and clearInterval) and random color generation to create a dynamic visual effect that the user can control.",
      tech: ["HTML", "CSS", "JavaScript", "Timers"],
      features: [
        "Continuous Random Color Generation",
        "User-Controlled Start/Stop Functionality",
        "Efficient Management of Interval Timers",
        "Dynamic Background Updates"
      ],
      githubLink: "https://github.com/divyeshgangara2211/JavaScript_Projects/tree/main/Projects/8-UnlimitedColors",
      // liveLink: "your-live-demo-link-here"
    },
    {
      title: "Simon Game",
      icon: "🧠",
      description: "A classic memory challenge where players repeat an ever-growing sequence of colors. The game begins with a key press, then challenges the user to replicate the pattern by clicking the colored tiles. This project showcases advanced JavaScript logic for managing game state, tracking user input against a generated sequence, and creating a progressively difficult and engaging user experience.",
      tech: ["HTML", "CSS", "JavaScript", "Game Logic"],
      features: [
        "Game Start on Keyboard Press",
        "Randomly Generated Color Sequence",
        "Interactive User Input via Clicks",
        "Progressively Increasing Difficulty",
        "Visual Feedback for Correct/Incorrect Moves"
      ],
      githubLink: "https://github.com/divyeshgangara2211/JavaScript-Projects",
      // liveLink: "your-live-demo-link-here"
    },
  ];

  const pythonProjects = [
    {
      title: "YouTube Manager (File I/O)",
      icon: "📹",
      description: "A console-based application for managing a personal YouTube video library, built entirely in Python. This project demonstrates core programming principles, including file I/O operations for data persistence using a JSON text file. It's a solid showcase of fundamental Python skills and creating interactive command-line tools.",
      tech: ["Python", "JSON", "File I/O", "CLI"],
      features: [
        "List All Saved Videos",
        "Add New Video Details",
        "Update Existing Video Information",
        "Delete a Video from the Library",
        "Data Persistence using JSON File"
      ],
      githubLink: "https://github.com/divyeshgangara2211/Python_Projects/tree/main/Project%201%20-%20YouTube%20Manager",
      liveLink: "" // No live link for a CLI app
    },
    {
      title: "YouTube Manager (Database)",
      icon: "🗄️",
      description: "An evolution of the file-based manager, this version integrates a lightweight SQLite database for more robust and scalable data storage. This project demonstrates a clear understanding of database design, executing raw SQL queries in Python, and building a structured console application that performs full CRUD (Create, Read, Update, Delete) operations.",
      tech: ["Python", "SQLite3", "Database", "SQL"],
      features: [
        "Full CRUD (Create, Read, Update, Delete) Operations",
        "Structured Data Storage with SQLite3",
        "Direct SQL Query Execution from Python",
        "Interactive Command-Line Interface (CLI)",
        "Relational Database Table Design"
      ],
      githubLink: "https://github.com/divyeshgangara2211/Python_Projects/tree/main/Project%202%20-%20YouTube%20Manager%20with%20DB",
      liveLink: "" // No live link for a CLI app
    }
  ];

  const cloneProjects = [
      { 
        title: "Amazon Clone", 
        icon: "🛒", 
        description: "A pixel-perfect frontend clone of the Amazon homepage, built to showcase advanced HTML and CSS skills. This project focuses on faithfully recreating a complex, real-world user interface, demonstrating a keen eye for design, layout, and responsive development.", 
        tech: ["HTML", "CSS", "JavaScript", "Responsive Design"], 
        features: [
          "Replicated Navigation Bar & Search",
          "Product Grid & Card Layout",
          "Dynamic Hero Section Carousel",
          "Responsive Design for Mobile & Desktop",
          "Footer Section Recreation"
        ],
        githubLink: "https://github.com/divyeshgangara2211/Amazon-Clone-Project-using-HTML-and-CSS",
        // liveLink: "your-live-demo-link-here"   ,
        videoLink: "https://drive.google.com/file/d/1kCo_8q0P6QljIiC76ZVuyPALd9xqQNWh/view" ,
    },
    { 
      title: "Spotify Clone", 
      icon: "🎧", 
      description: "A functional and visually polished clone of the Spotify web player, built with a focus on replicating the core user experience. This project showcases the ability to build complex, media-rich interfaces with responsive design and interactive playback controls.", 
      tech: ["HTML", "CSS", "JavaScript", "Responsive Design"], 
      features: [
        "Interactive Music Player & Controls",
        "Replicated UI & Layout",
        "Dynamic Playlist & Album Display",
        "Responsive Design for All Devices",
         "Functional Volume Control Slider"
      ],
      githubLink: "https://github.com/divyeshgangara2211/Spotify-Clone", 
      // liveLink: "your-live-demo-link-here"   
    }
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
        
        <div className="flex flex-wrap gap-2">
          {project.githubLink && ( 
            <Button 
              size="sm" 
              variant="outline" 
              className="flex-1 border-blue-300 text-blue-600 hover:bg-blue-50"
              onClick={() => {
                // Placeholder for GitHub/project links 
                window.open( project.githubLink , '_blank');
              }}
            >
              <Github className="h-4 w-4 mr-2" />
              Code
            </Button>
           )}

          {project.liveLink && (
            <Button 
              size="sm" 
              variant="outline" 
              className="flex-1 border-green-300 text-green-600 hover:bg-green-50"
              onClick={() => {
                // Placeholder for view project links 
                window.open( project.liveLink , '_blank');
              }}
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              View
            </Button>
          )}

          {/* Report Button */}
          {project.reportLink && (
            <Button 
              size="sm" 
              variant="outline" 
              className="flex-1 border-gray-300 text-gray-600 hover:bg-gray-50"
              onClick={() => window.open(project.reportLink, '_blank')}
            >
              <FileText className="h-4 w-4 mr-2" />
              Report
            </Button>
          )}

          {/* Video Button */}
          {project.videoLink && (
            <Button 
              size="sm" 
              variant="outline" 
              className="flex-1 border-red-300 text-red-600 hover:bg-red-50"
              onClick={() => window.open(project.videoLink, '_blank')}
            >
              <Video className="h-4 w-4 mr-2" />
              Video
            </Button>
          )}

          {project.isWinner && (
            <Button 
              size="sm" 
              className="flex-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white"
              onClick={() => {
                // Correctly navigates to the #ideathon section of your about page
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
          <div className="grid lg:grid-cols-1 gap-8 max-w-3xl mx-auto">
            {fullStackProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>

         {/* Backend Projects */}
        <div className="mb-20">
          <h3 className="text-3xl font-semibold text-gray-800 mb-12 text-center">⚙️ Backend Projects</h3>
          <div className="grid lg:grid-cols-1 gap-8 max-w-3xl mx-auto">
            {backendProjects.map((project, index) => (
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
