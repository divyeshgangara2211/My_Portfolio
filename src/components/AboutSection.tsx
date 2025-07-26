import { Card, CardContent } from "@/components/ui/card";
import {
  Award,
  Code,
  Trophy,
  Users,
  Medal,
  Calendar,
  MapPin,
  ExternalLink,
  GraduationCap,
} from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            👨‍💻 About{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate Computer Engineering student building innovative
            solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="flex items-start space-x-3">
              <span className="text-2xl">😊</span>
              <p className="text-gray-700 text-lg leading-relaxed">
                I was born and raised in India.
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <span className="text-2xl">💡</span>
              <p className="text-gray-700 text-lg leading-relaxed">
                From a young age, I've always been fascinated by technology. I
                especially enjoyed learning about technologies during my school
                days, which sparked a deep interest in how things work behind
                the scenes.
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <span className="text-2xl">🎓</span>
              <p className="text-gray-700 text-lg leading-relaxed">
                This curiosity and enthusiasm naturally led me to pursue my
                journey in higher education with a Bachelor's degree in Computer
                Engineering 💻 at GEC Gandhinagar.
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <span className="text-2xl">🚀</span>
              <p className="text-gray-700 text-lg leading-relaxed">
                Along the way, I’ve built multiple full-stack projects and
                strengthened my problem-solving skills by solving 270+ LeetCode
                problems in C++ with a rating of 1555, all while actively
                exploring new tools and frameworks to create user-centric,
                impactful solutions.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl border-l-4 border-blue-500 mt-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="text-2xl mr-2">🎯</span>
                Wanna know about my Hobbies ?
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <span className="text-xl">♟️</span>
                  <p className="text-gray-700">
                    When I am not coding you will find me playing chess or
                    exercising.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-xl">📚</span>
                  <p className="text-gray-700">I also love reading books.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
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

        {/* Major Achievements Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-semibold text-gray-800 mb-12 text-center">
            🌟   Major Achievements
          </h3>

          {/* NIH Finalist */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-8 mb-8 border-2 border-purple-200">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <Medal className="h-10 w-10 text-purple-600 mr-4" />
                  <div>
                    <h4 className="text-2xl font-bold text-gray-800">
                      New India Vibrant Hackathon (NIH) - 2023 Finalist
                    </h4>
                    <div className="flex items-center text-purple-600 mt-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="font-medium">November 2023</span>
                      <MapPin className="h-4 w-4 ml-4 mr-2" />
                      <span className="font-medium">National Level</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  🎯 <strong>Grand Finale Qualifier!</strong>  one of Gujarat's most prestigious innovation competitions, organized under SSIP 2.0 by the Education Department, Government of Gujarat. 
                 
                  <p>Among thousands of talented participants, our team secured a spot in the grand finale with our project — a <strong> Government Scheme Portal </strong> built using Angular.js, HTML, CSS, and Express.js.
                  The portal aimed to simplify access to government welfare schemes through intelligent filtering and a user-friendly interface. 
                  I contributed to building a responsive and user-friendly UI, integrating frontend and backend components, ensuring seamless API integration and dynamic data handling. Our collaborative efforts, version-controlled via GitHub, not only enhanced team efficiency but also resulted in a technically robust and socially impactful solution. 
                  </p> 
                </p>
                <div className="bg-purple-100 p-2 rounded-lg mb-4">
                  <p className="text-purple-800 font-medium">
                    🏅 Achievement Journey:
                  </p>
                  <ul className="text-purple-700 mt-2 space-y-1">
                    <li>• Regional Round Participation (4th November 2023)</li>
                    <li>• Grand Finale Qualification (25th November 2023)</li>
                    <li>• National level competition at Pandit Deendayal Energy University , Gandhinagar</li>
                  </ul>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      const modal = document.createElement("div");
                      modal.className =
                        "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50";
                      modal.innerHTML = `
                        <div class="bg-white p-4 rounded-lg max-w-3xl max-h-[90vh] overflow-auto">
                          <img src="/lovable-uploads/e2674f69-facc-4f17-946e-05c3ff74574a.png" alt="NIH Regional Certificate" class="w-full h-auto" />
                          <button class="mt-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700" onclick="this.parentElement.parentElement.remove()">Close</button>
                        </div>
                      `;
                      document.body.appendChild(modal);
                    }}
                    className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    <Award className="h-4 w-4 mr-2" />
                    Regional Certificate
                  </button>
                  <button
                    onClick={() => {
                      const modal = document.createElement("div");
                      modal.className =
                        "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50";
                      modal.innerHTML = `
                        <div class="bg-white p-4 rounded-lg max-w-3xl max-h-[90vh] overflow-auto">
                          <img src="/lovable-uploads/990eb2f6-429a-4769-a765-9acccdf31147.png" alt="NIH Final Certificate" class="w-full h-auto" />
                          <button class="mt-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700" onclick="this.parentElement.parentElement.remove()">Close</button>
                        </div>
                      `;
                      document.body.appendChild(modal);
                    }}
                    className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    <Trophy className="h-4 w-4 mr-2" />
                    Final Certificate
                  </button>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-20">
                <div className="flex justify-center ">
                  <div className="text-8xl">🏅</div>
                </div>
                <div className="flex justify-center">
                  <img
                    src="/lovable-uploads/b87c6f38-e1f5-434d-9b31-bf886a0a46e0.png"
                    alt="NIH Team at Grand Finale"
                    className="w-64 h-48 object-cover rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Ideathon Winner */}
          <div
            id="ideathon"
            className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-3xl p-8 mb-8 border-2 border-yellow-200"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <Trophy className="h-10 w-10 text-yellow-600 mr-4" />
                  <div>
                    <h4 className="text-2xl font-bold text-gray-800">
                      HackTheSpring'24 Ideathon Winner
                    </h4>
                    <div className="flex items-center text-yellow-600 mt-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="font-medium"> 1-2 March 2024</span>
                      <Award className="h-4 w-4 ml-4 mr-2" />
                      <span className="font-medium">
                        1st Rank Winner & Team Leader
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  🎉 <strong>Victory at HackTheSpring!</strong> Led our team
                  "Tech Titans" to secure first place in the ideathon
                  competition with our <strong>Virtual Reality Therapy for Mental & Physical Health</strong> project.
                  <p> Developed an immersive VR-based therapy solution aimed at improving both mental and physical well-being. The project leveraged virtual environments to deliver calming, engaging, and personalized therapeutic experiences, offering innovative support for stress relief, emotional regulation, and physical rehabilitation.</p>
                  From ideation to execution, I guided the team through the complete development cycle — fostering collaboration, driving creativity, and ensuring technical excellence at every stage. This experience not only showcased our ability to tackle real-world health challenges, but also strengthened my leadership, strategic thinking, and passion for building meaningful tech solutions.
                </p>
                <div className="bg-yellow-100 p-4 rounded-lg mb-4">
                  <p className="text-yellow-800 font-medium">
                    🌟 Complete Project Journey:
                  </p>
                  <ul className="text-yellow-700 mt-2 space-y-1">
                    <li>• Team Leader : Tech Titans - Divyesh Gangera</li>
                    <li>
                      • Project : Virtual Reality Therapy for Mental & Physical Health
                    </li>
                    {/* <li>
                      • Duration : 4th & 5th Semester Design Engineering Project
                    </li> */}
                    <li>
                      • Achievement : Certificate of Merit for 1st Rank Winner
                    </li>
                    <li>
                      •  Location: Government Engineering College, Sector 28, Gandhinagar
                    </li>
                    <li>
                      • Impact : Innovative healthcare solution integrating VR and AI to enhance well-being
                    </li>
                    <li>
                      • Leadership : Team collaboration and project management
                    </li>
                  </ul>
                </div>
                <button
                  onClick={() => {
                    const modal = document.createElement("div");
                    modal.className =
                      "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50";
                    modal.innerHTML = `
                      <div class="bg-white p-4 rounded-lg max-w-3xl max-h-[90vh] overflow-auto">
                        <img src="/lovable-uploads/69d748c2-7f58-4b20-8ed2-1133f879dc34.png" alt="HackTheSpring Certificate of Merit" class="w-full h-auto" />
                        <button class="mt-4 px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700" onclick="this.parentElement.parentElement.remove()">Close</button>
                      </div>
                    `;
                    document.body.appendChild(modal);
                  }}
                  className="inline-flex items-center px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors"
                >
                  <Trophy className="h-4 w-4 mr-2" />
                  View Certificate
                </button>
              </div>
              <div className="flex flex-col justify-center space-y-20">
                <div className="flex justify-center">
                  <div className="text-8xl">🏆</div>
                </div>
                <div className="flex justify-center">
                  <img
                    src="/lovable-uploads/5dc2985c-4960-4610-8cd8-609e9d737b52.png"
                    alt="HackTheSpring Team"
                    className="w-64 h-48 object-cover rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Core Team Member */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 mb-8 border-2 border-green-200">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <Users className="h-10 w-10 text-green-600 mr-4" />
                  <div>
                    <h4 className="text-2xl font-bold text-gray-800">
                      Core Team Member - HackTheSpring'25
                    </h4>
                    <div className="flex items-center text-green-600 mt-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="font-medium">28 Feb - 1 March 2025</span>
                      <Award className="h-4 w-4 ml-4 mr-2" />
                      <span className="font-medium">Event Coordinator</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  🌟 <strong>Leadership in Event Management!</strong> Serving as
                  a core team member and coordinator for HackTheSpring'25,
                  organizing one of the most anticipated hackathons in the
                  region. This role showcases my leadership capabilities and
                  commitment to fostering innovation in the tech community.
                </p>
                <div className="bg-green-100 p-4 rounded-lg mb-4">
                  <p className="text-green-800 font-medium">
                    🎯 Responsibilities & Impact:
                  </p>
                  <ul className="text-green-700 mt-2 space-y-1">
                    <li>• Event coordination and management</li>
                    <li>• Participant engagement and support</li>
                    <li>• Technical workshop organization</li>
                    <li>• Community building and networking</li>
                    <li>• Mentoring upcoming developers</li>
                  </ul>
                </div>
                <button
                  onClick={() => {
                    const modal = document.createElement("div");
                    modal.className =
                      "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50";
                    modal.innerHTML = `
                      <div class="bg-white p-4 rounded-lg max-w-3xl max-h-[90vh] overflow-auto">
                        <img src="/lovable-uploads/b01e03e1-aadb-49c1-956c-b36df8368fdc.png" alt="Core Team Certificate" class="w-full h-auto" />
                        <button class="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700" onclick="this.parentElement.parentElement.remove()">Close</button>
                      </div>
                    `;
                    document.body.appendChild(modal);
                  }}
                  className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  <Users className="h-4 w-4 mr-2" />
                  View Certificate
                </button>
              </div>
              <div className="flex flex-col justify-center space-y-8">
                <div className="flex justify-center">
                  <div className="text-8xl">👥</div>
                </div>
                <div className="flex justify-center">
                  <img
                    src="/lovable-uploads/f9ead4e5-d622-4022-a942-99a88650187a.png"
                    alt="Core Team Group"
                    className="w-64 h-48 object-cover rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* AI Training Certificate */}
          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-3xl p-8 mb-8 border-2 border-orange-200">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <Code className="h-10 w-10 text-orange-600 mr-4" />
                  <div>
                    <h4 className="text-2xl font-bold text-gray-800">
                      AI Training Certificate
                    </h4>
                    <div className="flex items-center text-orange-600 mt-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="font-medium">Feb 3 - Feb 12, 2025</span>
                      <Award className="h-4 w-4 ml-4 mr-2" />
                      <span className="font-medium">
                        Government Engineering College
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  🤖 <strong>Advanced AI & Machine Learning Training!</strong>{" "}
                  Successfully completed intensive training program on
                  Introduction to AI and Machine Learning organized at
                  Government Engineering College, Gandhinagar. This training
                  enhanced my understanding of cutting-edge AI technologies and
                  their practical applications.
                </p>
                <div className="bg-orange-100 p-4 rounded-lg mb-4">
                  <p className="text-orange-800 font-medium">
                    🧠 Learning Outcomes:
                  </p>
                  <ul className="text-orange-700 mt-2 space-y-1">
                    <li>• Machine Learning fundamentals and algorithms</li>
                    <li>• AI application development</li>
                    <li>• Data science and analytics</li>
                    <li>• Industry best practices and trends</li>
                    <li>• Hands-on project implementation</li>
                  </ul>
                </div>
                <button
                  onClick={() => {
                    const modal = document.createElement("div");
                    modal.className =
                      "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50";
                    modal.innerHTML = `
                      <div class="bg-white p-4 rounded-lg max-w-3xl max-h-[90vh] overflow-auto">
                        <img src="/lovable-uploads/5f4cf882-37bd-4ce3-8704-b4914f232e64.png" alt="AI Training Certificate" class="w-full h-auto" />
                        <button class="mt-4 px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700" onclick="this.parentElement.parentElement.remove()">Close</button>
                      </div>
                    `;
                    document.body.appendChild(modal);
                  }}
                  className="inline-flex items-center px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
                >
                  <Code className="h-4 w-4 mr-2" />
                  View Certificate
                </button>
              </div>
              <div className="flex flex-col justify-center space-y-8">
                <div className="flex justify-center">
                  <div className="text-8xl">🤖</div>
                </div>
                <div className="flex justify-center">
                  <div className="bg-orange-100 p-6 rounded-xl">
                    <p className="text-orange-800 font-semibold text-lg">
                      AI & ML Training
                    </p>
                    <p className="text-orange-600">
                      Government Engineering College
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Academic Excellence */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 border-2 border-blue-200">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <GraduationCap className="h-10 w-10 text-blue-600 mr-4" />
                  <div>
                    <h4 className="text-2xl font-bold text-gray-800">
                      Academic Excellence
                    </h4>
                    <div className="flex items-center text-blue-600 mt-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="font-medium">
                        BE Semester 5 - December 2024
                      </span>
                      <Award className="h-4 w-4 ml-4 mr-2" />
                      <span className="font-medium">Computer Engineering</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  🎓 <strong>Outstanding Academic Performance!</strong>{" "}
                  Consistently maintaining excellent grades throughout my
                  Computer Engineering journey. Achieved impressive CGPA of
                  8.70, demonstrating strong understanding of core subjects and
                  commitment to academic excellence.
                </p>
                <div className="bg-blue-100 p-4 rounded-lg mb-4">
                  <p className="text-blue-800 font-medium">
                    📊 Academic Highlights:
                  </p>
                  <ul className="text-blue-700 mt-2 space-y-1">
                    <li>
                      • <strong>CGPA: 8.70</strong> - Final Year Student
                    </li>
                    <li>• Design Engineering - II A: AA Grade</li>
                    <li>• Analysis and Design of Algorithms: AB Grade</li>
                    <li>• Computer Networks: AB Grade</li>
                    <li>• Software Engineering: BB Grade</li>
                    <li>• Python for Data Science: BB Grade</li>
                  </ul>
                </div>
                <button
                  onClick={() => {
                    const modal = document.createElement("div");
                    modal.className =
                      "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50";
                    modal.innerHTML = `
                      <div class="bg-white p-4 rounded-lg max-w-3xl max-h-[90vh] overflow-auto">
                        <img src="/lovable-uploads/370ed6ae-2ee5-4f0b-9f00-290e1bf7ae96.png" alt="Academic Result" class="w-full h-auto" />
                        <button class="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" onclick="this.parentElement.parentElement.remove()">Close</button>
                      </div>
                    `;
                    document.body.appendChild(modal);
                  }}
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <GraduationCap className="h-4 w-4 mr-2" />
                  View Result
                </button>
              </div>
              <div className="flex flex-col justify-center space-y-8">
                <div className="flex justify-center">
                  <div className="text-8xl">🎓</div>
                </div>
                <div className="flex justify-center">
                  <div className="bg-blue-100 p-6 rounded-xl text-center">
                    <p className="text-blue-800 font-bold text-2xl">
                      CGPA: 8.70
                    </p>
                    <p className="text-blue-600 font-semibold">
                      Computer Engineering
                    </p>
                    <p className="text-blue-500">
                      Gujarat Technological University
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
