"use client";

import { motion } from "framer-motion";
import { currentLearning } from "@/lib/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";

export function Learning() {
  return (
    <section className="section-pad py-14 sm:py-16">
      <Reveal className="text-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-600 mb-5">
          Currently learning
        </p>
        <ul className="flex flex-wrap justify-center gap-2.5 sm:gap-3 max-w-3xl mx-auto">
          {currentLearning.map((topic, i) => (
            <motion.li
              key={topic}
              className="text-sm px-4 py-2 rounded-full glass text-slate-400 hover:text-sky-300 hover:border-sky-500/25 transition-all duration-300 cursor-default"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              {topic}
            </motion.li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
