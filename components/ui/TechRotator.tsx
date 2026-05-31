"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { heroTechStack } from "@/lib/data/portfolio";

export function TechRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % heroTechStack.length);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex flex-wrap items-center gap-2 mt-6">
      <span className="text-xs text-slate-500 uppercase tracking-wider">
        Stack
      </span>
      <div className="flex flex-wrap gap-2">
        {heroTechStack.map((tech) => (
          <span
            key={tech}
            className="text-xs px-2.5 py-1 rounded-full border border-white/[0.08] text-slate-500 bg-white/[0.02]"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="hidden sm:flex items-center gap-2 ml-1 pl-3 border-l border-white/[0.08] h-6">
        <span className="text-xs text-slate-600">Focus</span>
        <div className="relative h-6 overflow-hidden min-w-[100px]">
          <AnimatePresence mode="wait">
            <motion.span
              key={heroTechStack[index]}
              className="absolute left-0 text-sm font-medium text-sky-400"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
            >
              {heroTechStack[index]}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
