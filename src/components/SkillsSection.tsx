import { Card, CardContent } from "@/components/ui/card";
import tailwindLogo from './assets/tailwindCss_logo.png';
import expressLogo from './assets/expressJs_logo.jpeg';
import dsaLogo from './assets/DSA.png';
import dbmsLogo from './assets/dbms_logo.png';
import oopsLogo from './assets/oop.jpg';
import cnLogo from './assets/cnLogo.jpg';
import canvaLogo from './assets/canva.jpg';
import nodeJsLogo from './assets/nodeJS.jpeg';


const SkillsSection = () => {

  const webDevSkills = [  
    { 
      name: "HTML", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      color: "from-orange-400 to-red-500",
      description: "Semantic markup & accessibility"
    },
    { 
      name: "CSS", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      color: "from-blue-400 to-blue-600",
      description: "Responsive design & animations"
    },
    { 
      name: "Tailwind CSS", 
      logo: tailwindLogo ,
      color: "from-sky-400 to-cyan-400",
      description: "Utility-first CSS framework"
    },
    { 
      name: "JavaScript", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      color: "from-yellow-400 to-orange-500",
      description: "ES6+ & DOM manipulation"
    },
    { 
      name: "React.JS", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color: "from-cyan-400 to-blue-500",
      description: "Component-based architecture"
    },
    { 
      name: "Express.JS", 
      logo: expressLogo,
      color: "from-gray-600 to-gray-800",
      description: "Fast & minimalist web framework"
    },
    { 
      name: "Node.JS", 
      // logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      logo: nodeJsLogo ,
      color: "from-green-400 to-emerald-600",
      description: "Server-side JavaScript runtime"
    },
  ];

  const programmingSkills = [
    { 
      name: "C++", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      color: "from-blue-600 to-indigo-600",
      description: "Solving complex problems with optimal efficiency."
    },
    { 
      name: "Python", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      color: "from-yellow-500 to-orange-600",
      description: "Versatile for web dev & data science."
    },
    { 
      name: "Java", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      color: "from-red-500 to-orange-600",
      description: "Object-oriented programming"
    },
  ];

  const databaseSkills = [
     {
      name: "SQL",
      logo: "https://www.svgrepo.com/show/331760/sql-database-generic.svg",
      color: "from-cyan-500 to-blue-500",
      description: "The standard language for relational databases."
    },
    { 
      name: "MySQL", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      color: "from-blue-600 to-cyan-600",
      description: "Structured query language"
    },
    // { 
    //   name: "PostgreSQL", 
    //   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    //   color: "from-blue-500 to-indigo-600",
    //   description: "Advanced relational database"
    // },
    { 
      name: "MongoDB", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      color: "from-green-500 to-emerald-600",
      description: "NoSQL document database"
    },    
  ];

  const csFundamentals = [
    { 
      name: "Data Structures and Algorithms", 
      logo: dsaLogo,
      color: "from-purple-500 to-pink-600",
      description: "Problem solving , optimization & Analyze "
    },
    { 
      name: "Object-Oriented Programming", 
      logo: oopsLogo,
      color: "from-indigo-500 to-purple-600",
      description: "Building scalable and maintainable software"
    },
    { 
      name: "Operating Systems", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
      color: "from-gray-600 to-gray-800",
      description: "System concepts & management"
    },
    { 
      name: "Computer Networks", 
      logo: cnLogo,
      color: "from-green-500 to-teal-600",
      description: "Network protocols & architecture"
    },
    { 
      name: "DBMS", 
      logo: dbmsLogo,
      color: "from-blue-500 to-cyan-600",
      description: "Database management systems",
      // sizeClass: "w-20 h-20"
    },
  ];

  const versionControlSkills = [
    {
      name: "Git",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      color: "from-orange-500 to-red-600",
      description: "Distributed version control system"
    },
    {
      name: "GitHub",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      color: "from-gray-700 to-black",
      description: "Platform for code hosting and collaboration"
    },
  ];

   const developmentToolsSkills = [
     {
      name: "VS Code",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      color: "from-blue-500 to-blue-700",
      description: "A lightweight but powerful code editor"
    },
    {
      name: "Postman",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
      color: "from-orange-400 to-orange-600",
      description: "API platform for building and testing APIs"
    },
    {
      name: "Vite",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
      color: "from-purple-500 to-blue-500",
      description: "Next-generation frontend tooling"
    },
    {
      name: "Figma",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      color: "from-pink-500 to-purple-600",
      description: "Collaborative interface design tool"
    },
    {
      name: "Canva",
      // logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
      logo: canvaLogo ,
      color: "from-blue-400 to-purple-500",
      description: "Graphic design for social media and presentations"
    },
  ];

  const SkillCard = ({ skill, index }: { skill: any; index: number }) => (
    <Card 
      className="group hover:shadow-xl transition-all duration-500 border-0 bg-white hover:-translate-y-2 cursor-pointer h-full transform hover:scale-105"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <CardContent className="p-6 text-center h-full flex flex-col justify-between">
        <div>
          <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <img 
              src={skill.logo} 
              alt={skill.name}
              className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 mb-2">
            {skill.name}
          </h3>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {skill.description}
        </p>
      </CardContent>
    </Card>
  );

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
          My Tech Stack
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I love turning complex ideas into elegant digital solutions. This is my current tech stack.
          </p>
        </div>

        <div className="space-y-16">

          {/* Web Development */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 md:p-10 border border-gray-200 shadow-2xl shadow-blue-200/50">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Web Development
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-6">
              {webDevSkills.map((skill, index) => <SkillCard key={skill.name} skill={skill} index={index} />)}
            </div>
          </div>

          {/* Programming Languages */}
           <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 md:p-10 border border-gray-200 shadow-2xl shadow-blue-200/50">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Programming Languages
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {programmingSkills.map((skill, index) => <SkillCard key={skill.name} skill={skill} index={index} />)}
            </div>
          </div>

          {/* Database */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 md:p-10 border border-gray-200 shadow-2xl shadow-blue-200/50">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Database
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {databaseSkills.map((skill, index) => <SkillCard key={skill.name} skill={skill} index={index} />)}
            </div>
          </div>

          {/* Version Control */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 md:p-10 border border-gray-200 shadow-2xl shadow-blue-200/50">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Version Control
            </h3>
            <div className="grid grid-cols-2 gap-6 max-w-sm mx-auto">
              {versionControlSkills.map((skill, index) => <SkillCard key={skill.name} skill={skill} index={index} />)}
            </div>
          </div>

          {/* CS Fundamentals */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 md:p-10 border border-gray-200 shadow-2xl shadow-blue-200/50">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              CS Fundamentals
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-6xl mx-auto">
              {csFundamentals.map((skill, index) => <SkillCard key={skill.name} skill={skill} index={index} />)}
            </div>
          </div>

          {/* Development Tools */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 md:p-10 border border-gray-200 shadow-2xl shadow-blue-200/50">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Development Tools
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
              {developmentToolsSkills.map((skill, index) => <SkillCard key={skill.name} skill={skill} index={index} />)}
            </div>
          </div>

        </div>
  
      </div>
    </section>
  );
};

export default SkillsSection;
