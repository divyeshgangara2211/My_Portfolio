import { Card, CardContent } from "@/components/ui/card";

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
      name: "Node.JS", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      color: "from-green-400 to-emerald-600",
      description: "Server-side JavaScript runtime"
    },
    { 
      name: "Express.JS", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      color: "from-gray-600 to-gray-800",
      description: "Fast & minimalist web framework"
    },
    { 
      name: "Tailwind CSS", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      color: "from-teal-400 to-cyan-600",
      description: "Utility-first CSS framework"
    },
  ];

  const programmingSkills = [
    { 
      name: "C++", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      color: "from-blue-600 to-indigo-600",
      description: "Object-oriented programming"
    },
    { 
      name: "Python", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      color: "from-yellow-500 to-orange-600",
      description: "Data analysis & automation"
    },
    { 
      name: "Java", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      color: "from-red-500 to-orange-600",
      description: "Enterprise applications"
    },
  ];

  const databaseSkills = [
    { 
      name: "MongoDB", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      color: "from-green-500 to-emerald-600",
      description: "NoSQL document database"
    },
    { 
      name: "PostgreSQL", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      color: "from-blue-500 to-indigo-600",
      description: "Advanced relational database"
    },
    { 
      name: "SQL", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      color: "from-blue-600 to-cyan-600",
      description: "Structured query language"
    },
  ];

  const csFundamentals = [
    { 
      name: "Data Structures and Algorithms", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      color: "from-purple-500 to-pink-600",
      description: "Problem solving & optimization"
    },
    { 
      name: "Object-Oriented Programming", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      color: "from-indigo-500 to-purple-600",
      description: "Design patterns & principles"
    },
    { 
      name: "Operating Systems", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
      color: "from-gray-600 to-gray-800",
      description: "System concepts & management"
    },
    { 
      name: "Computer Networks", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/networkx/networkx-original.svg",
      color: "from-green-500 to-teal-600",
      description: "Network protocols & architecture"
    },
    { 
      name: "DBMS", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      color: "from-blue-500 to-cyan-600",
      description: "Database management systems"
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
              className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
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
          <h2 className="text-5xl font-bold text-gray-900 mb-6 animate-fade-in">My Skills</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Web Development */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg">
              Web Development
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-6">
            {webDevSkills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>

        {/* Programming Languages */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg">
              Programming Languages
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {programmingSkills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>

        {/* Database */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg">
              Database
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {databaseSkills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>

        {/* CS Fundamentals */}
        <div>
          <div className="flex items-center justify-center mb-8">
            <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg">
              CS Fundamentals
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {csFundamentals.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
