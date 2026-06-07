"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { heroTechRotator } from "@/lib/data/portfolio";

const INTERVAL_MS = 1750;

export function TechRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % heroTechRotator.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="mt-5 sm:mt-6">
      <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-600 mb-2">
        Working with
      </p>
      <div className="relative h-8 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.span
            key={heroTechRotator[index]}
            className="absolute left-0 font-heading text-lg sm:text-xl font-semibold text-sky-300"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            {heroTechRotator[index]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}
