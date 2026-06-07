"use client";

import { motion } from "framer-motion";
import { heroSkills } from "@/lib/data/portfolio";
import clsx from "clsx";

type Props = {
  compact?: boolean;
};

export function SkillShowcase({ compact = false }: Props) {
  return (
    <div
      className={clsx(
        "relative w-full",
        compact ? "max-w-full" : "max-w-md mx-auto lg:mx-0 lg:ml-auto"
      )}
    >
      <div
        className="absolute inset-0 rounded-3xl bg-gradient-to-br from-sky-500/10 via-violet-500/5 to-transparent blur-2xl scale-110"
        aria-hidden
      />

      <div className="relative rounded-2xl border border-white/[0.08] bg-surface/60 backdrop-blur-sm p-5 sm:p-6">
        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-sky-400/80 mb-4">
          Tech stack
        </p>

        <div
          className={clsx(
            compact
              ? "flex flex-wrap gap-2"
              : "grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3"
          )}
        >
          {heroSkills.map((skill, index) => (
            <motion.div
              key={skill}
              className="skill-float-card text-center"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: compact ? 0 : [0, -5, 0],
              }}
              transition={{
                opacity: { delay: 0.3 + index * 0.04, duration: 0.4 },
                scale: { delay: 0.3 + index * 0.04, duration: 0.4 },
                y: compact
                  ? undefined
                  : {
                      duration: 4 + index * 0.25,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.15,
                    },
              }}
              whileHover={{ scale: 1.04, y: -2 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
