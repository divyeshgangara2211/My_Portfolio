"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const BackgroundAnimation = () => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
      {/* Dynamic Animated Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-400/20 dark:bg-blue-600/20 blur-[100px] animate-blob" />
      <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-400/20 dark:bg-purple-600/20 blur-[120px] animate-blob animation-delay-2000" />
      <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[60%] rounded-full bg-indigo-400/20 dark:bg-indigo-600/20 blur-[150px] animate-blob animation-delay-4000" />
      <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-cyan-400/20 dark:bg-cyan-600/20 blur-[100px] animate-blob animation-delay-3000" />
      
      {/* Professional Tech/Grid overlay pattern (subtle) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      {/* Floating Particles/Dust */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Generate multiple particles with varying sizes and animations */}
        <div className="absolute w-[2px] h-[2px] bg-slate-600/50 dark:bg-white/40 rounded-full top-[15%] left-[20%] animate-pulse shadow-[0_0_10px_2px_rgba(255,255,255,0.3)]" />
        <div className="absolute w-[3px] h-[3px] bg-slate-600/60 dark:bg-white/50 rounded-full top-[25%] left-[80%] animate-pulse animation-delay-1000 shadow-[0_0_12px_2px_rgba(255,255,255,0.4)]" />
        <div className="absolute w-[2px] h-[2px] bg-slate-500/50 dark:bg-white/30 rounded-full top-[65%] left-[10%] animate-pulse animation-delay-2000 shadow-[0_0_8px_2px_rgba(255,255,255,0.2)]" />
        <div className="absolute w-[4px] h-[4px] bg-slate-600/40 dark:bg-white/60 rounded-full top-[75%] left-[75%] animate-pulse animation-delay-3000 shadow-[0_0_15px_3px_rgba(255,255,255,0.5)]" />
        <div className="absolute w-[2px] h-[2px] bg-slate-600/60 dark:bg-white/40 rounded-full top-[45%] left-[40%] animate-pulse animation-delay-4000 shadow-[0_0_10px_2px_rgba(255,255,255,0.3)]" />
        <div className="absolute w-[3px] h-[3px] bg-blue-500/50 dark:bg-blue-400/50 rounded-full top-[30%] left-[50%] animate-pulse animation-delay-1000 shadow-[0_0_10px_2px_rgba(59,130,246,0.5)]" />
        <div className="absolute w-[2px] h-[2px] bg-purple-500/50 dark:bg-purple-400/50 rounded-full top-[85%] left-[30%] animate-pulse animation-delay-2000 shadow-[0_0_10px_2px_rgba(168,85,247,0.5)]" />
      </div>
    </div>
  );
};

export default BackgroundAnimation;
