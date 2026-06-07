"use client";

import { motion } from "framer-motion";
import { currentLearning } from "@/lib/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";

export function Learning() {
  return (
    <section className="section-pad py-14 sm:py-16 section-purple">
      <Reveal className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-violet-400/80 mb-5">
          Continuous learning
        </p>
        <ul className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
          {currentLearning.map((topic, i) => (
            <motion.li
              key={topic}
              className={i % 2 === 0 ? "badge-sky" : "badge-violet"}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -2 }}
            >
              {topic}
            </motion.li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
