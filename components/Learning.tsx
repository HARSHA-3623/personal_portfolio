"use client";

import { motion } from "framer-motion";
import { currentLearning } from "@/lib/data/portfolio";

export function Learning() {
  return (
    <section className="section-pad py-16">
      <motion.h2
        className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-6 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Currently Learning
      </motion.h2>
      <motion.ul
        className="flex flex-wrap justify-center gap-3"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {currentLearning.map((topic, i) => (
          <motion.li
            key={topic}
            className="text-sm px-4 py-2 rounded-full glass text-slate-400"
            whileHover={{ scale: 1.03, borderColor: "rgba(56,189,248,0.3)" }}
            transition={{ delay: i * 0.04 }}
          >
            {topic}
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
