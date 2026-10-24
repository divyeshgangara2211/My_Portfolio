"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Award,
  Bot,
  Code,
  Trophy,
  Users,
  Medal,
  Calendar,
  MapPin,
  ExternalLink,
  GraduationCap,
  Cpu,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-10 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            👨‍💻 About{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-base sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Software Engineer specializing in Python, scalable backend architectures, and Applied AI solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center mb-12 sm:mb-20">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="flex items-start space-x-3.5">
              <span className="text-2xl mt-0.5">💼</span>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                I am a <strong>Software Engineer</strong> at <strong>Silent Infotech</strong>, specializing in <strong>Python</strong>, backend architecture, and database engineering. I design and implement automated backend workflows, custom enterprise modules, and scalable data-driven services.
              </p>
            </div>

            <div className="flex items-start space-x-3.5">
              <span className="text-2xl mt-0.5">🧠</span>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                My core passion is exploring and building in <strong>Artificial Intelligence and Machine Learning</strong>. From predictive modeling and data pipelines with Scikit-learn, Pandas, and NumPy to NLP language translation and intelligent chatbots, I enjoy turning raw data into high-impact solutions.
              </p>
            </div>

            <div className="flex items-start space-x-3.5">
              <span className="text-2xl mt-0.5">🎓</span>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                Holding a Bachelor's degree in <strong>Computer Engineering from GEC Gandhinagar</strong> and certified in Advanced AI & ML by BSE Institute & RUSA, I bridge solid theoretical fundamentals with hands-on production engineering.
              </p>
            </div>

            <div className="flex items-start space-x-3.5">
              <span className="text-2xl mt-0.5">⚡</span>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                With <strong>270+ LeetCode problems solved (Rating: 1555)</strong> in C++, I bring deep analytical rigor, algorithmic efficiency, and an optimization-first mindset to every Python architecture and data pipeline I build.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-900 dark:to-slate-800 p-6 rounded-2xl border-l-4 border-blue-500 mt-8">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4 flex items-center">
                <span className="text-2xl mr-2">🎯</span>
                Beyond the Code
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <span className="text-xl">♟️</span>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Strategy & Focus:</strong> Competitive chess player who loves tactical analysis and pattern recognition, combined with regular fitness for discipline.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-xl">📚</span>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Continuous Learning:</strong> Constantly reading up on modern AI research, open-source Python libraries, and scalable system architectures.
                  </p>
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
              <div className="relative w-[270px] h-[340px] sm:w-80 sm:h-96 lg:w-96 lg:h-[28rem] max-w-[85vw] rounded-2xl overflow-hidden shadow-2xl border-4 border-white group-hover:scale-105 transition-transform duration-500">
                <img
                  src="/All_Certificate_Photos/My_Photo.png"
                  alt="Divyesh Gangera - Full Stack Developer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-8 sm:mb-12 text-center">
            💼 Experience & Achievements
          </h3>

          {/* Silent Infotech - Software Engineer */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-blue-900/20 rounded-2xl sm:rounded-3xl p-5 sm:p-8 mb-8 border-2 border-blue-200 dark:border-blue-900/50 hover:shadow-xl dark:hover:shadow-blue-900/20 transition-all duration-300">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">💼</span>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                      Software Engineer
                    </h4>
                    <div className="flex items-center text-blue-600 mt-2">
                      <span className="font-medium">Silent Infotech</span>
                      <span className="mx-2">•</span>
                      <span className="font-medium">Jan 2026 - Present</span>
                    </div>
                  </div>
                </div>
                <div className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  🚀 <strong>Full-Time Software Engineer</strong> after a successful 6-month internship based on strong performance and contributions.
                  <p className="mt-2">
                    Independently analyzed functional requirements and owned the full cycle — designing, solving, and implementing end-to-end backend workflows for user ease on Odoo to solve real business requirements.
                  </p>
                </div>
                <div className="bg-blue-100 p-4 rounded-lg mb-4">
                  <p className="text-blue-800 font-medium">
                    🛠️ Tech Stack & Responsibilities:
                  </p>
                  <ul className="text-blue-700 mt-2 space-y-1">
                    <li>• Python, PostgreSQL, Node.js, and Git</li>
                    <li>• Designed complex backend workflows on Odoo</li>
                    <li>• End-to-end RESTful API development</li>
                    <li>• Collaborative team environment</li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center space-y-8">
                <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-blue-100 overflow-hidden">
                  <img src="https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://silentinfotech.com&size=256" alt="Silent Infotech Logo" className="w-20 h-20 object-contain rounded-full" />
                </div>
                <div className="bg-blue-100 dark:bg-blue-900/30 p-6 rounded-xl text-center border border-blue-200 dark:border-blue-800/50">
                  <p className="text-blue-800 dark:text-blue-200 font-bold text-2xl">Silent Infotech</p>
                  <p className="text-blue-600 dark:text-blue-300">Gandhinagar, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Silent Infotech - Intern */}
          <div className="bg-gradient-to-r from-cyan-50 to-teal-50 dark:from-slate-800 dark:to-cyan-900/20 rounded-3xl p-8 mb-8 border-2 border-cyan-200 dark:border-cyan-800/50 hover:shadow-xl dark:hover:shadow-cyan-900/20 transition-all duration-300">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">👨‍💻</span>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                      Software Engineering Intern
                    </h4>
                    <div className="flex items-center text-cyan-600 mt-2">
                      <span className="font-medium">Silent Infotech</span>
                      <span className="mx-2">•</span>
                      <span className="font-medium">6 Months</span>
                    </div>
                  </div>
                </div>
                <div className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  🌱 <strong>Software Engineering Internship!</strong> During this 6-month internship, I contributed heavily to building data pipelines and backend systems.
                  <p className="mt-2">
                    Skilled across the data lifecycle — from ETL and database optimization to predictive modeling. This rigorous internship directly led to my full-time conversion.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center space-y-8">
                <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-cyan-100 overflow-hidden">
                  <img src="https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://silentinfotech.com&size=256" alt="Silent Infotech Logo" className="w-20 h-20 object-contain rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* NIH Finalist */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-slate-800 dark:to-purple-900/20 rounded-3xl p-8 mb-8 border-2 border-purple-200 dark:border-purple-800/50 hover:shadow-xl dark:hover:shadow-purple-900/20 transition-all duration-300">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <Medal className="h-10 w-10 text-purple-600 mr-4" />
                  <div>
                    <h4 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
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
                <div className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  🎯 <strong>Grand Finale Qualifier!</strong> one of Gujarat's
                  most prestigious innovation competitions, organized under SSIP
                  2.0 by the Education Department, Government of Gujarat.
                  <p>
                    Among thousands of talented participants, our team secured a
                    spot in the grand finale with our project — a{" "}
                    <strong> Government Scheme Portal </strong> built using
                    Angular.js, HTML, CSS, and Express.js. The portal aimed to
                    simplify access to government welfare schemes through
                    intelligent filtering and a user-friendly interface. I
                    contributed to building a responsive and user-friendly UI,
                    integrating frontend and backend components, ensuring
                    seamless API integration and dynamic data handling. Our
                    collaborative efforts, version-controlled via GitHub, not
                    only enhanced team efficiency but also resulted in a
                    technically robust and socially impactful solution.
                  </p>
                </div>
                <div className="bg-purple-100 p-2 rounded-lg mb-4">
                  <p className="text-purple-800 font-medium">
                    🏅 Achievement Journey:
                  </p>
                  <ul className="text-purple-700 mt-2 space-y-1">
                    <li>• Regional Round Participation (4th November 2023)</li>
                    <li>• Grand Finale Qualification (25th November 2023)</li>
                    <li>
                      • National level competition at Pandit Deendayal Energy
                      University , Gandhinagar
                    </li>
                  </ul>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      const modal = document.createElement("div");
                      modal.className =
                        "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50";
                      // NIH Regional Certificate Modal
                      modal.innerHTML = `
                        <div class="bg-white dark:bg-slate-800 p-4 rounded-lg max-w-3xl max-h-[90vh] overflow-auto">
                          <img src="/All_Certificate_Photos/NIH_Regional_Round_Certificate.png" alt="NIH Regional Certificate" class="w-full h-auto" />
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
                      // NIH Final Certificate Modal
                      modal.innerHTML = `
                        <div class="bg-white dark:bg-slate-800 p-4 rounded-lg max-w-3xl max-h-[90vh] overflow-auto">
                          <img src="/All_Certificate_Photos/NIH_Final_Certificate.png" alt="NIH Final Certificate" class="w-full h-auto" />
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
                    src="/All_Certificate_Photos/NIH_Final_Team_Photo.png"
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
            className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-slate-800 dark:to-yellow-900/20 rounded-3xl p-6 sm:p-8 mb-8 border-2 border-yellow-200 dark:border-yellow-800/50 hover:shadow-xl dark:hover:shadow-yellow-900/20 transition-all duration-300"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <Trophy className="h-10 w-10 text-yellow-600 mr-4" />
                  <div>
                    <h4 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
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
                <div className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  🎉 <strong>Victory at HackTheSpring!</strong> Led our team
                  "Tech Titans" to secure first place in the ideathon
                  competition with our{" "}
                  <strong>
                    Virtual Reality Therapy for Mental & Physical Health
                  </strong>{" "}
                  project.
                  <p>
                    {" "}
                    Developed an immersive VR-based therapy solution aimed at
                    improving both mental and physical well-being. The project
                    leveraged virtual environments to deliver calming, engaging,
                    and personalized therapeutic experiences, offering
                    innovative support for stress relief, emotional regulation,
                    and physical rehabilitation.
                  </p>
                  From ideation to execution, I guided the team through the
                  complete development cycle — fostering collaboration, driving
                  creativity, and ensuring technical excellence at every stage.
                  This experience not only showcased our ability to tackle
                  real-world health challenges, but also strengthened my
                  leadership, strategic thinking, and passion for building
                  meaningful tech solutions.
                </div>
                <div className="bg-yellow-100/90 dark:bg-yellow-950/40 border border-yellow-200/80 dark:border-yellow-900/40 p-4 rounded-xl mb-4">
                  <p className="text-yellow-900 dark:text-yellow-200 font-semibold">
                    🌟 Complete Project Journey:
                  </p>
                  <ul className="text-yellow-800 dark:text-yellow-300 mt-2 space-y-1">
                    <li>• Team Leader : Tech Titans - Divyesh Gangera</li>
                    <li>
                      • Project : Virtual Reality Therapy for Mental & Physical
                      Health
                    </li>
                    {/* <li>
                      • Duration : 4th & 5th Semester Design Engineering Project
                    </li> */}
                    <li>
                      • Achievement : Certificate of Merit for 1st Rank Winner
                    </li>
                    <li>
                      • Location: Government Engineering College, Sector 28,
                      Gandhinagar
                    </li>
                    <li>
                      • Impact : Innovative healthcare solution integrating VR
                      and AI to enhance well-being
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
                      "fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4";
                    // HackTheSpring Certificate Modal
                    modal.innerHTML = `
                      <div class="bg-white dark:bg-slate-800 p-4 rounded-2xl max-w-3xl max-h-[90vh] overflow-auto shadow-2xl border border-gray-200 dark:border-slate-700">
                        <img src="/All_Certificate_Photos/Ideathon_Winner_Certificate.png" alt="HackTheSpring Certificate of Merit" class="w-full h-auto rounded-lg" />
                        <div class="mt-4 flex justify-end">
                          <button class="px-5 py-2 bg-yellow-600 text-white font-medium rounded-lg hover:bg-yellow-700 transition-colors cursor-pointer" onclick="this.closest('.fixed').remove()">Close</button>
                        </div>
                      </div>
                    `;
                    document.body.appendChild(modal);
                  }}
                  className="inline-flex items-center justify-center px-4 py-2.5 bg-yellow-600 text-white rounded-xl hover:bg-yellow-700 active:scale-95 transition-all font-medium text-sm shadow-sm hover:shadow-md hover:shadow-yellow-500/20 w-full sm:w-auto cursor-pointer"
                >
                  <Trophy className="h-4 w-4 mr-2" />
                  View Certificate
                </button>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6 mt-6 lg:mt-0">
                <div className="flex justify-center">
                  <div className="text-7xl sm:text-8xl hover:scale-105 transition-transform duration-300 select-none">🏆</div>
                </div>
                <div className="flex justify-center">
                  <img
                    src="/All_Certificate_Photos/HackTheSpring'24_Ideathon_Team_Photo.png"
                    alt="HackTheSpring Team"
                    className="w-full max-w-xs sm:w-64 h-48 object-cover rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Core Team Member */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-slate-800 dark:to-green-900/20 rounded-3xl p-6 sm:p-8 mb-8 border-2 border-green-200 dark:border-green-800/50 hover:shadow-xl dark:hover:shadow-green-900/20 transition-all duration-300">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <Users className="h-10 w-10 text-green-600 mr-4" />
                  <div>
                    <h4 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
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
                <div className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  🌟 <strong>Leadership in Event Management !</strong> Serving
                  as a <strong>Core Team Member (Coordinator)</strong> for
                  HackTheSpring'25,organizing one of the most anticipated
                  hackathons in the region.
                  <p>
                    From managing logistics and participant engagement to
                    solving real-time technical issues. This journey not only
                    reflects my leadership growth but also my dedication to
                    creating impactful experiences and supporting innovation
                    within the tech community.
                  </p>
                </div>
                <div className="bg-green-100/90 dark:bg-green-950/40 border border-green-200/80 dark:border-green-900/40 p-4 rounded-xl mb-4">
                  <p className="text-green-900 dark:text-green-200 font-semibold">
                    🎯 Responsibilities & Impact:
                  </p>
                  <ul className="text-green-800 dark:text-green-300 mt-2 space-y-1">
                    <li>• Event coordination and management</li>
                    <li>
                      • Managed participant support and on-ground logistics
                    </li>
                    <li>
                      • Resolved Wi-Fi issues during workshops to ensure
                      technical continuity
                    </li>
                    <li>• Technical workshop organization</li>
                    <li>
                      • Fostered collaboration, networking, and a positive event
                      experience
                    </li>
                    <li>
                      • Demonstrated leadership in high-pressure, live event
                      environment
                    </li>
                  </ul>
                </div>
                <button
                  onClick={() => {
                    const modal = document.createElement("div");
                    modal.className =
                      "fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4";
                    // Core Team Certificate Modal
                    modal.innerHTML = `
                      <div class="bg-white dark:bg-slate-800 p-4 rounded-2xl max-w-3xl max-h-[90vh] overflow-auto shadow-2xl border border-gray-200 dark:border-slate-700">
                        <img src="/All_Certificate_Photos/HackTheSpring'25_Cordinator_Certificate.png" alt="Core Team Certificate" class="w-full h-auto rounded-lg" />
                        <div class="mt-4 flex justify-end">
                          <button class="px-5 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors cursor-pointer" onclick="this.closest('.fixed').remove()">Close</button>
                        </div>
                      </div>
                    `;
                    document.body.appendChild(modal);
                  }}
                  className="inline-flex items-center justify-center px-4 py-2.5 bg-green-600 text-white rounded-xl hover:bg-green-700 active:scale-95 transition-all font-medium text-sm shadow-sm hover:shadow-md hover:shadow-green-500/20 w-full sm:w-auto cursor-pointer"
                >
                  <Users className="h-4 w-4 mr-2" />
                  View Certificate
                </button>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6 mt-6 lg:mt-0">
                <div className="flex justify-center">
                  <div className="text-7xl sm:text-8xl hover:scale-105 transition-transform duration-300 select-none">👥</div>
                </div>
                <div className="flex justify-center">
                  <img
                    src="/All_Certificate_Photos/HackTheSpring'25_Cordinator_Team_Photo.png"
                    alt="Team Photo"
                    className="w-full max-w-xs sm:w-64 h-48 object-cover rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* AI Training Certificate */}
          <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-slate-800 dark:to-orange-900/20 rounded-3xl p-6 sm:p-8 mb-8 border-2 border-orange-200 dark:border-orange-800/50 hover:shadow-xl dark:hover:shadow-orange-900/20 transition-all duration-300">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <Bot className="h-10 w-10 text-purple-600 mr-4" />
                  <div>
                    <h4 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                      AI And Machine Learning Training Certificate
                    </h4>
                    <div className="flex items-center text-orange-600 mt-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="font-medium">Feb 3 - Feb 12, 2025</span>
                      <Award className="h-4 w-4 ml-4 mr-2" />
                      <span className="font-medium">GEC , Gandhinagar</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  🤖 <strong>Advanced AI & Machine Learning Training!</strong>{" "}
                  Successfully completed a 54+ hour certified training program
                  on <strong>Introduction to AI and Machine Learning</strong> at
                  Government Engineering College, Gandhinagar, organized in
                  collaboration with BSE Institute and RUSA. This program
                  combined theoretical foundations with hands-on applications,
                  enhancing my understanding of real-world AI and ML workflows.
                </p>
                <div className="bg-orange-100/90 dark:bg-orange-950/40 border border-orange-200/80 dark:border-orange-900/40 p-4 rounded-xl mb-4">
                  <p className="text-orange-900 dark:text-orange-200 font-semibold">
                    🧠 Learning Outcomes:
                  </p>
                  <ul className="text-orange-800 dark:text-orange-300 mt-2 space-y-1">
                    <li>
                      • Gained in-depth knowledge of Machine Learning
                      fundamentals, including supervised and unsupervised
                      algorithms.
                    </li>
                    <li>
                      • Learned the basics of Artificial Intelligence, model
                      training, and predictive analysis.
                    </li>
                    <li>
                      • Developed a Placement Prediction Model using historical
                      student data to forecast employability outcomes.
                    </li>
                    <li>
                      • Worked on building and training a basic language
                      translator, applying concepts of NLP and data
                      preprocessing.
                    </li>
                    <li>
                      • Successfully completed over 54 hours of guided learning
                      and hands-on project work, fulfilling all evaluation
                      criteria.
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 mt-4">
                  <button
                    onClick={() => {
                      const modal = document.createElement("div");
                      modal.className =
                        "fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4";
                      // AI Training Certificate Modal
                      modal.innerHTML = `
                        <div class="bg-white dark:bg-slate-800 p-4 rounded-2xl max-w-3xl max-h-[90vh] overflow-auto shadow-2xl border border-gray-200 dark:border-slate-700">
                          <img src="/All_Certificate_Photos/Ai_And_Ml_Training_Certificate.png" alt="AI Training Certificate" class="w-full h-auto rounded-lg" />
                          <div class="mt-4 flex justify-end">
                            <button class="px-5 py-2 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition-colors cursor-pointer" onclick="this.closest('.fixed').remove()">Close</button>
                          </div>
                        </div>
                      `;
                      document.body.appendChild(modal);
                    }}
                    className="inline-flex items-center justify-center px-4 py-2.5 bg-orange-600 hover:bg-orange-700 text-white rounded-xl transition-all duration-200 font-medium text-sm shadow-sm hover:shadow-md hover:shadow-orange-500/20 active:scale-95 cursor-pointer w-full sm:w-auto"
                  >
                    <Code className="h-4 w-4 mr-2" />
                    View Certificate
                  </button>

                  <a
                    href="https://github.com/divyeshgangara2211/AI-And-ML-Training-Projects"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2.5 bg-orange-600 hover:bg-orange-700 text-white rounded-xl transition-all duration-200 font-medium text-sm shadow-sm hover:shadow-md hover:shadow-orange-500/20 active:scale-95 cursor-pointer w-full sm:w-auto"
                  >
                    <Code className="h-4 w-4 mr-2" />
                    View Project
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6 mt-6 lg:mt-0">
                <div className="flex justify-center">
                  <div className="text-6xl sm:text-7xl hover:scale-105 transition-transform duration-300 select-none">🤖</div>
                </div>
                <div className="flex justify-center w-full">
                  <div className="bg-orange-100/90 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-800/40 p-5 sm:p-6 rounded-2xl text-center w-full max-w-sm shadow-sm">
                    <p className="text-orange-900 dark:text-orange-200 font-bold text-lg sm:text-xl">
                      AI & ML Training
                    </p>
                    <p className="text-orange-700 dark:text-orange-300 font-medium text-sm sm:text-base mt-1">
                      Government Engineering College , Gandhinagar
                    </p>
                    <p className="text-orange-600/80 dark:text-orange-400/80 text-xs sm:text-sm mt-1">
                      BSE Institute & RUSA Certified
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Degree Milestone: B.E. Computer Engineering with Minor in IoT */}
          <div className="bg-gradient-to-r from-amber-50 via-orange-50 to-amber-100/60 dark:from-slate-800 dark:via-amber-950/20 dark:to-orange-950/30 rounded-3xl p-6 sm:p-8 mb-8 border-2 border-amber-300 dark:border-amber-700/60 hover:shadow-xl dark:hover:shadow-amber-900/20 transition-all duration-300">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-amber-500/10 dark:bg-amber-500/20 rounded-2xl mr-4 border border-amber-300 dark:border-amber-700/50">
                    <GraduationCap className="h-9 w-9 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h4 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                        Degree Milestone
                      </h4>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500 text-white shadow-sm">
                        Graduated with Honors
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center text-amber-700 dark:text-amber-400 text-sm font-medium gap-y-1">
                      <div className="flex items-center mr-3">
                        <Calendar className="h-4 w-4 mr-1.5" />
                        <span>May 2026</span>
                      </div>
                      <div className="flex items-center mr-3">
                        <Award className="h-4 w-4 mr-1.5" />
                        <span>B.E. Computer Engineering</span>
                      </div>
                      <div className="flex items-center">
                        <Cpu className="h-4 w-4 mr-1.5" />
                        <span className="font-semibold text-amber-800 dark:text-amber-300">Minor in IoT</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  🎓 <strong>Graduated with Dual Specialization!</strong> Successfully completed Bachelor of Engineering in <strong>Computer Engineering</strong> along with a specialized <strong>Minor Degree in Internet of Things (IoT)</strong> with an impressive cumulative <strong>8.70 CGPA</strong> from Gujarat Technological University.
                </p>

                <div className="bg-amber-100/90 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-800/40 p-4 rounded-xl mb-5">
                  <p className="text-amber-950 dark:text-amber-200 font-semibold flex items-center">
                    <Sparkles className="h-4 w-4 mr-1.5 text-amber-600 dark:text-amber-400" />
                    Degree Credentials & Highlights:
                  </p>
                  <ul className="text-amber-900 dark:text-amber-300 mt-2 space-y-1.5 text-sm sm:text-base">
                    <li>
                      • <strong>Overall CGPA: 8.70</strong> — 0 Active / Total Backlogs
                    </li>
                    <li>
                      • <strong>Major Degree:</strong> Bachelor of Engineering in Computer Engineering
                    </li>
                    <li>
                      • <strong>Minor Degree:</strong> Internet of Things (IoT)
                    </li>
                    <li>
                      • <strong>Accreditation:</strong> Gujarat Technological University (NAAC Accredited A+)
                    </li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => {
                      const modal = document.createElement("div");
                      modal.className =
                        "fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4";
                      modal.innerHTML = `
                        <div class="bg-white dark:bg-slate-800 p-4 sm:p-6 rounded-2xl max-w-3xl max-h-[92vh] overflow-auto shadow-2xl border border-gray-200 dark:border-slate-700 w-full">
                          <div class="flex items-center justify-between pb-3 mb-3 border-b border-gray-200 dark:border-slate-700">
                            <h3 class="font-bold text-gray-800 dark:text-gray-100 text-base sm:text-lg">Provisional Degree Certificate</h3>
                            <a href="/All_Certificate_Photos/Provisional Degree Certificate.pdf" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300 font-medium text-xs sm:text-sm rounded-lg hover:bg-amber-200 transition-colors inline-flex items-center gap-1">Open PDF ↗</a>
                          </div>
                          <img src="/All_Certificate_Photos/Provisional-Degree-Certificate.png" alt="Provisional Degree Certificate" class="w-full h-auto rounded-lg shadow-sm" />
                          <div class="mt-4 flex justify-end">
                            <button class="px-5 py-2 bg-amber-600 text-white font-medium rounded-lg hover:bg-amber-700 transition-colors cursor-pointer" onclick="this.closest('.fixed').remove()">Close</button>
                          </div>
                        </div>
                      `;
                      document.body.appendChild(modal);
                    }}
                    className="inline-flex items-center justify-center px-4 py-2.5 bg-amber-600 text-white rounded-xl hover:bg-amber-700 active:scale-95 transition-all font-medium text-sm shadow-sm hover:shadow-md hover:shadow-amber-500/20 w-full sm:w-auto cursor-pointer"
                  >
                    <GraduationCap className="h-4 w-4 mr-2" />
                    View Degree Certificate
                  </button>
                  <a
                    href="/All_Certificate_Photos/Provisional Degree Certificate.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2.5 bg-amber-100 dark:bg-amber-950/50 text-amber-900 dark:text-amber-200 border border-amber-300 dark:border-amber-700/60 rounded-xl hover:bg-amber-200 dark:hover:bg-amber-900/50 active:scale-95 transition-all font-medium text-sm w-full sm:w-auto"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Open PDF
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6 mt-6 lg:mt-0">
                <div className="flex justify-center">
                  <div className="text-7xl sm:text-8xl hover:scale-105 transition-transform duration-300 select-none">📜</div>
                </div>
                <div className="flex justify-center w-full">
                  <div className="bg-amber-100/90 dark:bg-amber-950/40 border-2 border-amber-300/80 dark:border-amber-800/60 p-5 sm:p-6 rounded-2xl text-center w-full max-w-sm shadow-sm">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500 text-white mb-2">
                      Graduation Honors
                    </span>
                    <p className="text-amber-950 dark:text-amber-100 font-extrabold text-3xl">
                      CGPA: 8.70
                    </p>
                    <p className="text-amber-800 dark:text-amber-300 font-bold text-base mt-1">
                      B.E. Computer Engineering
                    </p>
                    <p className="text-amber-700 dark:text-amber-400 font-semibold text-sm mt-0.5">
                      + Minor in Internet of Things (IoT)
                    </p>
                    <p className="text-amber-600/80 dark:text-amber-400/80 text-xs mt-2 border-t border-amber-200 dark:border-amber-800/40 pt-2">
                      Gujarat Technological University (NAAC A+)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Academic Excellence 8th sem */}
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-slate-800 dark:to-emerald-900/20 rounded-3xl p-6 sm:p-8 mb-8 border-2 border-emerald-300 dark:border-emerald-800/60 hover:shadow-xl dark:hover:shadow-emerald-900/20 transition-all duration-300">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-emerald-500/10 dark:bg-emerald-500/20 rounded-2xl mr-4 border border-emerald-300 dark:border-emerald-700/50">
                    <Trophy className="h-9 w-9 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h4 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                        Academic Excellence
                      </h4>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-600 text-white shadow-sm">
                        Perfect 10 SPI
                      </span>
                    </div>
                    <div className="flex items-center text-emerald-600 dark:text-emerald-400 text-sm font-medium">
                      <Calendar className="h-4 w-4 mr-1.5" />
                      <span>BE Semester 8 - May 2026</span>
                      <Award className="h-4 w-4 ml-4 mr-1.5" />
                      <span>Computer Engineering</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  🏆 <strong>Flawless Final Semester Performance!</strong> Achieved a <strong>Perfect 10.00 SPI</strong> in Semester 8, culminating the engineering degree with highest distinction in the Major Industry Project / Internship with an <strong>AA Grade</strong>.
                </p>

                <div className="bg-emerald-100/90 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-900/40 p-4 rounded-xl mb-5">
                  <p className="text-emerald-950 dark:text-emerald-200 font-semibold flex items-center">
                    <Sparkles className="h-4 w-4 mr-1.5 text-emerald-600 dark:text-emerald-400" />
                    Semester 8 Highlights:
                  </p>
                  <ul className="text-emerald-900 dark:text-emerald-300 mt-2 space-y-1.5 text-sm sm:text-base">
                    <li>
                      • <strong>SPI: 10.00</strong> — 8th Semester (Perfect Score)
                    </li>
                    <li>
                      • <strong>Overall CGPA: 8.70</strong> | CPI: 8.17
                    </li>
                    <li>
                      • <strong>Major Internship / Project: AA Grade</strong> (Highest Distinction)
                    </li>
                    <li>
                      • Current & Total Backlogs: <strong>0</strong>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => {
                      const modal = document.createElement("div");
                      modal.className =
                        "fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4";
                      modal.innerHTML = `
                        <div class="bg-white dark:bg-slate-800 p-4 sm:p-6 rounded-2xl max-w-3xl max-h-[92vh] overflow-auto shadow-2xl border border-gray-200 dark:border-slate-700 w-full">
                          <div class="flex items-center justify-between pb-3 mb-3 border-b border-gray-200 dark:border-slate-700">
                            <h3 class="font-bold text-gray-800 dark:text-gray-100 text-base sm:text-lg">BE Semester 8 Result</h3>
                            <a href="/All_Certificate_Photos/Sem 8 Result.pdf" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300 font-medium text-xs sm:text-sm rounded-lg hover:bg-emerald-200 transition-colors inline-flex items-center gap-1">Open PDF ↗</a>
                          </div>
                          <img src="/All_Certificate_Photos/8th-Sem-Result.png" alt="BE Semester 8 Result" class="w-full h-auto rounded-lg shadow-sm" />
                          <div class="mt-4 flex justify-end">
                            <button class="px-5 py-2 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors cursor-pointer" onclick="this.closest('.fixed').remove()">Close</button>
                          </div>
                        </div>
                      `;
                      document.body.appendChild(modal);
                    }}
                    className="inline-flex items-center justify-center px-4 py-2.5 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 active:scale-95 transition-all font-medium text-sm shadow-sm hover:shadow-md hover:shadow-emerald-500/20 w-full sm:w-auto cursor-pointer"
                  >
                    <GraduationCap className="h-4 w-4 mr-2" />
                    View Result
                  </button>
                  <a
                    href="/All_Certificate_Photos/Sem 8 Result.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2.5 bg-emerald-100 dark:bg-emerald-950/50 text-emerald-900 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-700/60 rounded-xl hover:bg-emerald-200 dark:hover:bg-emerald-900/50 active:scale-95 transition-all font-medium text-sm w-full sm:w-auto"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Open PDF
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6 mt-6 lg:mt-0">
                <div className="flex justify-center">
                  <div className="text-7xl sm:text-8xl hover:scale-105 transition-transform duration-300 select-none">🏆</div>
                </div>
                <div className="flex justify-center w-full">
                  <div className="bg-emerald-100/90 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800/60 p-5 sm:p-6 rounded-2xl text-center w-full max-w-sm shadow-sm">
                    <p className="text-emerald-900 dark:text-emerald-200 font-extrabold text-3xl">
                      SPI: 10.00
                    </p>
                    <p className="text-emerald-700 dark:text-emerald-300 font-bold mt-1">
                      CGPA: 8.70
                    </p>
                    <p className="text-emerald-600/90 dark:text-emerald-400 font-medium text-sm mt-0.5">
                      Computer Engineering
                    </p>
                    <p className="text-emerald-600/80 dark:text-emerald-400/80 text-xs sm:text-sm mt-1">
                      Gujarat Technological University, Ahmedabad
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Academic Excellence 7th sem */}
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-slate-800 dark:to-purple-900/20 rounded-3xl p-6 sm:p-8 mb-8 border-2 border-purple-200 dark:border-purple-800/50 hover:shadow-xl dark:hover:shadow-purple-900/20 transition-all duration-300">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-purple-500/10 dark:bg-purple-500/20 rounded-2xl mr-4 border border-purple-200 dark:border-purple-700/50">
                    <GraduationCap className="h-9 w-9 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                      Academic Excellence
                    </h4>
                    <div className="flex items-center text-purple-600 dark:text-purple-400 mt-1 text-sm font-medium">
                      <Calendar className="h-4 w-4 mr-1.5" />
                      <span>BE Semester 7 - December 2025</span>
                      <Award className="h-4 w-4 ml-4 mr-1.5" />
                      <span>Computer Engineering</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  📈 <strong>High Academic Consistency in Core & Advanced Tech!</strong> Achieved <strong>8.13 SPI</strong> in Semester 7 while undertaking advanced curriculum including Artificial Intelligence, Machine Learning, Cloud Computing, and Information Security.
                </p>

                <div className="bg-purple-100/90 dark:bg-purple-950/40 border border-purple-200/80 dark:border-purple-900/40 p-4 rounded-xl mb-5">
                  <p className="text-purple-950 dark:text-purple-200 font-semibold flex items-center">
                    <Sparkles className="h-4 w-4 mr-1.5 text-purple-600 dark:text-purple-400" />
                    Semester 7 Highlights:
                  </p>
                  <ul className="text-purple-900 dark:text-purple-300 mt-2 space-y-1 text-sm sm:text-base">
                    <li>
                      • <strong>SPI: 8.13</strong> | <strong>CGPA: 8.47</strong> — 7th Semester
                    </li>
                    <li>• Summer Internship: <strong>AA Grade</strong></li>
                    <li>• Mobile Application Development: <strong>AB Grade</strong></li>
                    <li>• Artificial Intelligence & Cloud Computing: <strong>BB Grade</strong></li>
                    <li>• Information Security & Compiler Design: <strong>BB Grade</strong></li>
                    <li>• Machine Learning: <strong>BC Grade (Practical AA Grade)</strong></li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => {
                      const modal = document.createElement("div");
                      modal.className =
                        "fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4";
                      modal.innerHTML = `
                        <div class="bg-white dark:bg-slate-800 p-4 sm:p-6 rounded-2xl max-w-3xl max-h-[92vh] overflow-auto shadow-2xl border border-gray-200 dark:border-slate-700 w-full">
                          <div class="flex items-center justify-between pb-3 mb-3 border-b border-gray-200 dark:border-slate-700">
                            <h3 class="font-bold text-gray-800 dark:text-gray-100 text-base sm:text-lg">BE Semester 7 Result</h3>
                            <a href="/All_Certificate_Photos/Sem 7 Result .pdf" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300 font-medium text-xs sm:text-sm rounded-lg hover:bg-purple-200 transition-colors inline-flex items-center gap-1">Open PDF ↗</a>
                          </div>
                          <img src="/All_Certificate_Photos/7th-Sem-Result.png" alt="BE Semester 7 Result" class="w-full h-auto rounded-lg shadow-sm" />
                          <div class="mt-4 flex justify-end">
                            <button class="px-5 py-2 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors cursor-pointer" onclick="this.closest('.fixed').remove()">Close</button>
                          </div>
                        </div>
                      `;
                      document.body.appendChild(modal);
                    }}
                    className="inline-flex items-center justify-center px-4 py-2.5 bg-purple-600 text-white rounded-xl hover:bg-purple-700 active:scale-95 transition-all font-medium text-sm shadow-sm hover:shadow-md hover:shadow-purple-500/20 w-full sm:w-auto cursor-pointer"
                  >
                    <GraduationCap className="h-4 w-4 mr-2" />
                    View Result
                  </button>
                  <a
                    href="/All_Certificate_Photos/Sem 7 Result .pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2.5 bg-purple-100 dark:bg-purple-950/50 text-purple-900 dark:text-purple-200 border border-purple-300 dark:border-purple-700/60 rounded-xl hover:bg-purple-200 dark:hover:bg-purple-900/50 active:scale-95 transition-all font-medium text-sm w-full sm:w-auto"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Open PDF
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6 mt-6 lg:mt-0">
                <div className="flex justify-center">
                  <div className="text-7xl sm:text-8xl hover:scale-105 transition-transform duration-300 select-none">📊</div>
                </div>
                <div className="flex justify-center w-full">
                  <div className="bg-purple-100/90 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800/40 p-5 sm:p-6 rounded-2xl text-center w-full max-w-sm shadow-sm">
                    <p className="text-purple-900 dark:text-purple-200 font-extrabold text-3xl">
                      SPI: 8.13
                    </p>
                    <p className="text-purple-700 dark:text-purple-300 font-bold mt-1">
                      CGPA: 8.47
                    </p>
                    <p className="text-purple-600/90 dark:text-purple-400 font-medium text-sm mt-0.5">
                      Computer Engineering
                    </p>
                    <p className="text-purple-600/80 dark:text-purple-400/80 text-xs sm:text-sm mt-1">
                      Gujarat Technological University, Ahmedabad
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Academic Excellence 6th sem */}
          <div className="bg-gradient-to-r from-teal-50 to-green-50 dark:from-slate-800 dark:to-teal-900/20 rounded-3xl p-6 sm:p-8 mb-8 border-2 border-teal-200 dark:border-teal-800/50 hover:shadow-xl dark:hover:shadow-teal-900/20 transition-all duration-300">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-teal-500/10 dark:bg-teal-500/20 rounded-2xl mr-4 border border-teal-200 dark:border-teal-700/50">
                    <GraduationCap className="h-9 w-9 text-teal-600 dark:text-teal-400" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                      Academic Excellence
                    </h4>
                    <div className="flex items-center text-teal-600 dark:text-teal-400 mt-1 text-sm font-medium">
                      <Calendar className="h-4 w-4 mr-1.5" />
                      <span>BE Semester 6 - May 2025</span>
                      <Award className="h-4 w-4 ml-4 mr-1.5" />
                      <span>Computer Engineering</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  🎓 <strong>Outstanding Academic Performance!</strong> Achieved a remarkable <strong>CGPA of 8.65</strong>, showcasing a strong grasp of core subjects and a commitment to excellence in Computer Engineering studies.
                </p>

                <div className="bg-teal-100/90 dark:bg-teal-950/40 border border-teal-200/80 dark:border-teal-900/40 p-4 rounded-xl mb-5">
                  <p className="text-teal-950 dark:text-teal-200 font-semibold flex items-center">
                    <Sparkles className="h-4 w-4 mr-1.5 text-teal-600 dark:text-teal-400" />
                    Semester 6 Highlights:
                  </p>
                  <ul className="text-teal-900 dark:text-teal-300 mt-2 space-y-1 text-sm sm:text-base">
                    <li>
                      • <strong>SPI: 8.61</strong> | <strong>CGPA: 8.65</strong> — 6th Semester
                    </li>
                    <li>• Design Engineering II B: <strong>AB Grade</strong></li>
                    <li>• Theory of Computation: <strong>AB Grade</strong></li>
                    <li>• Advanced Java Programming: <strong>AB Grade</strong></li>
                    <li>• Data Mining: <strong>AB Grade</strong></li>
                    <li>• IOT and Applications: <strong>BB Grade</strong></li>
                    <li>• Microprocessor and Interfacing: <strong>BC Grade</strong></li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => {
                      const modal = document.createElement("div");
                      modal.className =
                        "fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4";
                      modal.innerHTML = `
                        <div class="bg-white dark:bg-slate-800 p-4 sm:p-6 rounded-2xl max-w-3xl max-h-[92vh] overflow-auto shadow-2xl border border-gray-200 dark:border-slate-700 w-full">
                          <div class="flex items-center justify-between pb-3 mb-3 border-b border-gray-200 dark:border-slate-700">
                            <h3 class="font-bold text-gray-800 dark:text-gray-100 text-base sm:text-lg">BE Semester 6 Result</h3>
                            <a href="/All_Certificate_Photos/6th-Sem-Result.pdf" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300 font-medium text-xs sm:text-sm rounded-lg hover:bg-teal-200 transition-colors inline-flex items-center gap-1">Open PDF ↗</a>
                          </div>
                          <img src="/All_Certificate_Photos/6th sem Result.png" alt="BE Semester 6 Result" class="w-full h-auto rounded-lg shadow-sm" />
                          <div class="mt-4 flex justify-end">
                            <button class="px-5 py-2 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors cursor-pointer" onclick="this.closest('.fixed').remove()">Close</button>
                          </div>
                        </div>
                      `;
                      document.body.appendChild(modal);
                    }}
                    className="inline-flex items-center justify-center px-4 py-2.5 bg-teal-600 text-white rounded-xl hover:bg-teal-700 active:scale-95 transition-all font-medium text-sm shadow-sm hover:shadow-md hover:shadow-teal-500/20 w-full sm:w-auto cursor-pointer"
                  >
                    <GraduationCap className="h-4 w-4 mr-2" />
                    View Result
                  </button>
                  <a
                    href="/All_Certificate_Photos/6th-Sem-Result.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2.5 bg-teal-100 dark:bg-teal-950/50 text-teal-900 dark:text-teal-200 border border-teal-300 dark:border-teal-700/60 rounded-xl hover:bg-teal-200 dark:hover:bg-teal-900/50 active:scale-95 transition-all font-medium text-sm w-full sm:w-auto"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Open PDF
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6 mt-6 lg:mt-0">
                <div className="flex justify-center">
                  <div className="text-7xl sm:text-8xl hover:scale-105 transition-transform duration-300 select-none">🎓</div>
                </div>
                <div className="flex justify-center w-full">
                  <div className="bg-teal-100/90 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800/40 p-5 sm:p-6 rounded-2xl text-center w-full max-w-sm shadow-sm">
                    <p className="text-teal-900 dark:text-teal-200 font-extrabold text-3xl">
                      SPI: 8.61
                    </p>
                    <p className="text-teal-700 dark:text-teal-300 font-bold mt-1">
                      CGPA: 8.65
                    </p>
                    <p className="text-teal-600/90 dark:text-teal-400 font-medium text-sm mt-0.5">
                      Computer Engineering
                    </p>
                    <p className="text-teal-600/80 dark:text-teal-400/80 text-xs sm:text-sm mt-1">
                      Gujarat Technological University, Ahmedabad
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Academic Excellence 5th sem  */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-blue-900/20 rounded-3xl p-6 sm:p-8 mb-8 border-2 border-blue-200 dark:border-blue-800/50 hover:shadow-xl dark:hover:shadow-blue-900/20 transition-all duration-300">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-2xl mr-4 border border-blue-200 dark:border-blue-700/50">
                    <GraduationCap className="h-9 w-9 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                      Academic Excellence
                    </h4>
                    <div className="flex items-center text-blue-600 dark:text-blue-400 mt-1 text-sm font-medium">
                      <Calendar className="h-4 w-4 mr-1.5" />
                      <span>BE Semester 5 - December 2024</span>
                      <Award className="h-4 w-4 ml-4 mr-1.5" />
                      <span>Computer Engineering</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  🎓 <strong>Outstanding Academic Performance!</strong> Consistently maintaining excellent grades throughout my Computer Engineering journey. Achieved an impressive <strong>CGPA of 8.70</strong>, demonstrating strong analytical fundamentals and commitment to academic excellence.
                </p>

                <div className="bg-blue-100/90 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-900/40 p-4 rounded-xl mb-5">
                  <p className="text-blue-950 dark:text-blue-200 font-semibold flex items-center">
                    <Sparkles className="h-4 w-4 mr-1.5 text-blue-600 dark:text-blue-400" />
                    Semester 5 Highlights:
                  </p>
                  <ul className="text-blue-800 dark:text-blue-300 mt-2 space-y-1 text-sm sm:text-base">
                    <li>
                      • <strong>SPI: 8.70</strong> | <strong>CGPA: 8.70</strong> — 5th Semester
                    </li>
                    <li>• Design Engineering - II A: <strong>AA Grade</strong></li>
                    <li>• Analysis and Design of Algorithms: <strong>AB Grade</strong></li>
                    <li>• Computer Networks: <strong>AB Grade</strong></li>
                    <li>• Software Engineering: <strong>BB Grade</strong></li>
                    <li>• Python for Data Science: <strong>BB Grade</strong></li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => {
                      const modal = document.createElement("div");
                      modal.className =
                        "fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4";
                      modal.innerHTML = `
                        <div class="bg-white dark:bg-slate-800 p-4 sm:p-6 rounded-2xl max-w-3xl max-h-[92vh] overflow-auto shadow-2xl border border-gray-200 dark:border-slate-700 w-full">
                          <div class="flex items-center justify-between pb-3 mb-3 border-b border-gray-200 dark:border-slate-700">
                            <h3 class="font-bold text-gray-800 dark:text-gray-100 text-base sm:text-lg">BE Semester 5 Result</h3>
                            <a href="/All_Certificate_Photos/5th-Sem-Result.pdf" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300 font-medium text-xs sm:text-sm rounded-lg hover:bg-blue-200 transition-colors inline-flex items-center gap-1">Open PDF ↗</a>
                          </div>
                          <img src="/All_Certificate_Photos/5th-Sem-Result.png" alt="BE Semester 5 Result" class="w-full h-auto rounded-lg shadow-sm" />
                          <div class="mt-4 flex justify-end">
                            <button class="px-5 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors cursor-pointer" onclick="this.closest('.fixed').remove()">Close</button>
                          </div>
                        </div>
                      `;
                      document.body.appendChild(modal);
                    }}
                    className="inline-flex items-center justify-center px-4 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 active:scale-95 transition-all font-medium text-sm shadow-sm hover:shadow-md hover:shadow-blue-500/20 w-full sm:w-auto cursor-pointer"
                  >
                    <GraduationCap className="h-4 w-4 mr-2" />
                    View Result
                  </button>
                  <a
                    href="/All_Certificate_Photos/5th-Sem-Result.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2.5 bg-blue-100 dark:bg-blue-950/50 text-blue-900 dark:text-blue-200 border border-blue-300 dark:border-blue-700/60 rounded-xl hover:bg-blue-200 dark:hover:bg-blue-900/50 active:scale-95 transition-all font-medium text-sm w-full sm:w-auto"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Open PDF
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6 mt-6 lg:mt-0">
                <div className="flex justify-center">
                  <div className="text-7xl sm:text-8xl hover:scale-105 transition-transform duration-300 select-none">🎓</div>
                </div>
                <div className="flex justify-center w-full">
                  <div className="bg-blue-100/90 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/40 p-5 sm:p-6 rounded-2xl text-center w-full max-w-sm shadow-sm">
                    <p className="text-blue-900 dark:text-blue-200 font-extrabold text-3xl">
                      SPI: 8.70
                    </p>
                    <p className="text-blue-700 dark:text-blue-300 font-bold mt-1">
                      CGPA: 8.70
                    </p>
                    <p className="text-blue-600/90 dark:text-blue-400 font-medium text-sm mt-0.5">
                      Computer Engineering
                    </p>
                    <p className="text-blue-600/80 dark:text-blue-400/80 text-xs sm:text-sm mt-1">
                      Gujarat Technological University, Ahmedabad
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
