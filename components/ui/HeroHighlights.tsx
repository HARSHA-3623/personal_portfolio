"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { heroHighlights } from "@/lib/data/portfolio";

export function HeroHighlights() {
  return (
    <ul className="mt-5 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
      {heroHighlights.map((item, index) => (
        <motion.li
          key={item}
          className="flex items-center gap-2 text-sm text-slate-500"
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.38 + index * 0.05, duration: 0.4 }}
        >
          <Check
            size={14}
            className="shrink-0 text-emerald-500/70"
            strokeWidth={2.5}
          />
          <span className="text-content">{item}</span>
        </motion.li>
      ))}
    </ul>
  );
}
