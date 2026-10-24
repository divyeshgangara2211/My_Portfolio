"use client";

import { useState, useEffect } from "react";
import { Menu, X, Home, Cpu, Briefcase, User, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Skills", href: "/skills", icon: Cpu },
    { name: "Projects", href: "/projects", icon: Briefcase },
    { name: "About Me", href: "/about", icon: User },
    { name: "Contact", href: "/contact", icon: Mail },
  ];

  const isActive = (href: string) => {
    if (href === "/" && (pathname === "/" || pathname === "/home")) {
      return true;
    }
    return pathname === href;
  };

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link
                href="/"
                className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200"
              >
                Divyesh Gangera
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      isActive(item.href)
                        ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-slate-800 font-semibold"
                        : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-800"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <ThemeToggle />
              </div>
            </div>

            {/* Mobile menu trigger */}
            <div className="md:hidden flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(true)}
                aria-label="Open navigation menu"
                className="p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Slide-Over Drawer & Dimmed Backdrop */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isMenuOpen}
      >
        {/* Backdrop */}
        <div
          className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Right-Side Slide Panel */}
        <aside
          className={`fixed top-0 right-0 h-full w-[290px] sm:w-[320px] bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border-l border-gray-200/80 dark:border-slate-800 shadow-2xl flex flex-col justify-between p-6 transition-transform duration-300 ease-out transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Top Section */}
          <div>
            <div className="flex items-center justify-between pb-5 border-b border-gray-100 dark:border-slate-800">
              <div>
                <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Divyesh Gangera
                </span>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Software Engineer</p>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-full text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Close navigation menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Navigation Links with Icons */}
            <nav className="py-6 space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center space-x-3.5 px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                      active
                        ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 shadow-sm border border-blue-100 dark:border-blue-900/40 font-semibold"
                        : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-slate-800/60"
                    }`}
                  >
                    <Icon
                      className={`h-5 w-5 ${
                        active ? "text-blue-600 dark:text-blue-400" : "text-gray-500 dark:text-gray-400"
                      }`}
                    />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Bottom Actions */}
          <div className="pt-5 border-t border-gray-100 dark:border-slate-800 space-y-3.5">
            {/* Theme Toggle Row */}
            <div className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-slate-800/60 border border-gray-100 dark:border-slate-700/50">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Theme</span>
              <ThemeToggle />
            </div>

            {/* Quick Resume Button */}
            <a
              href="/All_Certificate_Photos/Divyesh_Gangera_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium text-sm shadow-md hover:shadow-lg transition-all active:scale-95"
            >
              <Download className="h-4 w-4" />
              <span>Download Resume</span>
            </a>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Navigation;
