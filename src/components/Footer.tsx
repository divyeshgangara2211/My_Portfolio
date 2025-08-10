import { Link } from "react-router-dom";
import {
  Github,
  Linkedin,
  Instagram,
  Heart,
  Mail,
  Phone,
  MapPin,
  Coffee,
} from "lucide-react";
import HackerRankLogo from "./HackerRankIcon.tsx";
import LeetCodeLogo from "./LeetCodeIcon.tsx";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "About Me", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  // const socialLinks = [
  //   { name: "LinkedIn", href: "https://linkedin.com/in/divyeshgangera22", icon: Linkedin, hoverColor: "hover:text-blue-400" },
  //   { name: "GitHub", href: "https://github.com/divyeshgangera22", icon: Github, hoverColor: "hover:text-white" },
  //   { name: "Instagram", href: "https://instagram.com/divyeshgangera22", icon: Instagram, hoverColor: "hover:text-pink-400" },
  // ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Divyesh Gangera
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Passionate Computer Engineering student building innovative
              solutions. From React applications to full-stack development, I
              create digital experiences that matter.
            </p>

            {/* LinkedIn */}
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/divyesh-gangera-916468274/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                <Linkedin className="h-6 w-6" />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/divyeshgangara2211"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-200 transition-colors duration-200"
              >
                <Github className="h-6 w-6" />
              </a>

              {/* LeetCode */}
              <a
                href="https://leetcode.com/u/divyeshgangera22/"
                target="_blank"
                rel="noopener noreferrer"
                // The hover effect is now controlled by opacity for a modern feel
                className="hover:opacity-80 transition-opacity duration-200"
              >
                <LeetCodeLogo className="h-6 w-6" />
              </a>

              {/* HackerRank */}
              <a
                href="https://www.hackerrank.com/profile/divyeshgangera22"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-500 transition-colors duration-200"
              >
                <HackerRankLogo className="h-6 w-6" />
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/divyeshgangera22"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-400 transition-colors duration-200"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-gray-400">
              {/* Email Link */}
              <a
                href="mailto:gangera0707@gmail.com"
                className="flex items-center hover:text-white transition-colors duration-200"
              >
                <Mail className="h-4 w-4 mr-3" />
                <span>gangera0707@gmail.com</span>
              </a>

              {/* Phone Link */}
              <a
                href="tel:+918849440341"
                className="flex items-center hover:text-white transition-colors duration-200"
              >
                <Phone className="h-4 w-4 mr-3" />
                <span>+91 8849440341</span>
              </a>

              {/* Location (not clickable) */}
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-3" />
                <span>Gujarat, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            {/* Made with{" "}
            <Heart className="h-4 w-4 text-red-500 mx-1" fill="currentColor" />{" "}
            by Divyesh Gangera */}

            Made by Divyesh Gangera with{" "}
            <Heart className="h-4 w-4 text-red-500 mx-1" fill="currentColor" />{" "}
            and lots of {" "} <Coffee className="h-6 w-6 text-green-500 ml-1" />

            {/* Designed & Built with <Heart className="h-4 w-4 text-red-500 mx-1.5" fill="currentColor" /> */}
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © {new Date().getFullYear()} Divyesh Gangera. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// <div className="flex space-x-3">
//   {socialLinks.map((link) => (
//     <a
//       key={link.name}
//       href={link.href}
//       target="_blank"
//       rel="noopener noreferrer"
//       className={`bg-gray-800 p-2 rounded-full text-gray-400 transition-all duration-300 hover:scale-110 ${link.hoverColor}`}
//     >
//       <link.icon className="h-5 w-5" />
//     </a>
//   ))}
// </div>
