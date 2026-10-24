import { Card, CardContent } from "@/components/ui/card";
import tailwindLogo from './assets/tailwindCss_logo.png';
import expressLogo from './assets/expressJs_logo.jpeg';
import dsaLogo from './assets/DSA.png';
import dbmsLogo from './assets/dbms_logo.png';
import oopsLogo from './assets/oop.jpg';
import cnLogo from './assets/cnLogo.jpg';
import canvaLogo from './assets/canva.jpg';
import nodeJsLogo from './assets/nodeJS.jpeg';
import aiLogo from './assets/ai_logo.png';


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

  const machineLearningSkills = [
    {
      name: "Machine Learning",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg",
      color: "from-blue-400 to-indigo-500",
      description: "Supervised & Unsupervised Learning, Feature Engineering, Scikit-Learn & Predictive Modeling"
    },
    {
      name: "Pandas",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
      color: "from-blue-600 to-indigo-800",
      description: "Data Wrangling, Feature Extraction, Advanced Aggregations & Exploratory Data Analysis"
    },
    {
      name: "NumPy",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
      color: "from-blue-400 to-cyan-500",
      description: "N-Dimensional Array Computing, Vectorized Operations, Linear Algebra & Matrix Math"
    },
    {
      name: "Artificial Intelligence",
      logo: aiLogo,
      color: "from-purple-500 to-pink-600",
      description: "Deep Learning Architectures, Neural Networks, NLP & Intelligent Agent Systems"
    }
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
      className="group hover:shadow-xl transition-all duration-500 border-0 bg-white dark:bg-slate-800 hover:-translate-y-2 cursor-pointer h-full transform hover:scale-105"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <CardContent className="p-4 sm:p-6 text-center h-full flex flex-col justify-between">
        <div>
          <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
            <img 
              src={typeof skill.logo === 'string' ? skill.logo : skill.logo.src || skill.logo} 
              alt={skill.name}
              className="w-12 h-12 sm:w-16 sm:h-16 object-contain group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <h3 className="text-base sm:text-lg font-bold text-gray-800 dark:text-gray-100 group-hover:text-blue-600 transition-colors duration-300 mb-1 sm:mb-2">
            {skill.name}
          </h3>
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 mt-1">
          {skill.description}
        </p>
      </CardContent>
    </Card>
  );

  return (
    <section id="skills" className="py-10 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 animate-fade-in">
          My Tech Stack
          </h2>
          <p className="text-base sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I love turning complex ideas into elegant digital solutions. This is my current tech stack.
          </p>
        </div>

        <div className="space-y-10 sm:space-y-16">

          {/* Web Development */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-900 dark:to-slate-800 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-gray-200 dark:border-slate-700 shadow-xl shadow-blue-200/30 dark:shadow-none">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6 sm:mb-8 text-center">
              Web Development
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3.5 sm:gap-6">
              {webDevSkills.map((skill, index) => <SkillCard key={skill.name} skill={skill} index={index} />)}
            </div>
          </div>

          {/* Programming Languages */}
           <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-900 dark:to-slate-800 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-gray-200 dark:border-slate-700 shadow-xl shadow-blue-200/30 dark:shadow-none">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6 sm:mb-8 text-center">
              Programming Languages
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-6 max-w-4xl mx-auto">
              {programmingSkills.map((skill, index) => <SkillCard key={skill.name} skill={skill} index={index} />)}
            </div>
          </div>

          {/* Machine Learning & AI */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-900 dark:to-slate-800 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-gray-200 dark:border-slate-700 shadow-xl shadow-blue-200/30 dark:shadow-none">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6 sm:mb-8 text-center">
              Machine Learning & AI
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-6 max-w-4xl mx-auto">
              {machineLearningSkills.map((skill, index) => <SkillCard key={skill.name} skill={skill} index={index} />)}
            </div>
          </div>

          {/* Database */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-900 dark:to-slate-800 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-gray-200 dark:border-slate-700 shadow-xl shadow-blue-200/30 dark:shadow-none">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6 sm:mb-8 text-center">
              Database
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-6 max-w-4xl mx-auto">
              {databaseSkills.map((skill, index) => <SkillCard key={skill.name} skill={skill} index={index} />)}
            </div>
          </div>

          {/* Version Control */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-900 dark:to-slate-800 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-gray-200 dark:border-slate-700 shadow-xl shadow-blue-200/30 dark:shadow-none">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6 sm:mb-8 text-center">
              Version Control
            </h3>
            <div className="grid grid-cols-2 gap-3.5 sm:gap-6 max-w-sm mx-auto">
              {versionControlSkills.map((skill, index) => <SkillCard key={skill.name} skill={skill} index={index} />)}
            </div>
          </div>

          {/* CS Fundamentals */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-900 dark:to-slate-800 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-gray-200 dark:border-slate-700 shadow-xl shadow-blue-200/30 dark:shadow-none">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6 sm:mb-8 text-center">
              CS Fundamentals
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3.5 sm:gap-6 max-w-6xl mx-auto">
              {csFundamentals.map((skill, index) => <SkillCard key={skill.name} skill={skill} index={index} />)}
            </div>
          </div>

          {/* Development Tools */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-900 dark:to-slate-800 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-gray-200 dark:border-slate-700 shadow-xl shadow-blue-200/30 dark:shadow-none">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6 sm:mb-8 text-center">
              Development Tools
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-6 max-w-5xl mx-auto">
              {developmentToolsSkills.map((skill, index) => <SkillCard key={skill.name} skill={skill} index={index} />)}
            </div>
          </div>

        </div>
  
      </div>
    </section>
  );
};

export default SkillsSection;
