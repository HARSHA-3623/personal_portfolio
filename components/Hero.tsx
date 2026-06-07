"use client";

import { motion } from "framer-motion";
import { heroSkills, RESUME_URL } from "@/lib/data/portfolio";
import { scrollToSection } from "@/lib/scroll";
import clsx from "clsx";

export function Hero() {
  const goTo = (id: string) => scrollToSection(id);

  return (
    <section
      id="hero"
      className="scroll-target relative min-h-[88vh] flex items-center section-pad pt-28 sm:pt-32"
    >
      <div className="w-full max-w-3xl">
        <motion.p
          className="text-sm font-medium text-zinc-500 mb-6"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Backend Engineer
        </motion.p>

        <motion.h1
          className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Harshavardan Naidu
        </motion.h1>

        <motion.p
          className="mt-5 text-lg sm:text-xl text-zinc-300 font-medium"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16 }}
        >
          Backend Engineer
        </motion.p>

        <motion.p
          className="mt-4 max-w-2xl text-zinc-400 text-base sm:text-lg leading-relaxed text-balance"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.24 }}
        >
          Backend Engineer focused on building APIs, integrations, transaction
          systems, and backend services for iGaming platforms.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.32 }}
        >
          {heroSkills.map((skill) => (
            <span key={skill} className="badge">
              {skill}
            </span>
          ))}
        </motion.div>

        <motion.div
          className="mt-10 flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <button
            type="button"
            onClick={() => goTo("experience")}
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-lg bg-white text-zinc-950 hover:bg-zinc-200 transition-colors duration-200"
          >
            View Experience
          </button>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-lg border border-white/[0.12] text-zinc-200 hover:bg-white/[0.04] hover:border-white/[0.18] transition-colors duration-200"
          >
            Download Resume
          </a>
          <button
            type="button"
            onClick={() => goTo("contact")}
            className={clsx(
              "inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-lg",
              "border border-white/[0.12] text-zinc-200 hover:bg-white/[0.04] hover:border-white/[0.18] transition-colors duration-200"
            )}
          >
            Contact
          </button>
        </motion.div>
      </div>
    </section>
  );
}
