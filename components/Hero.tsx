"use client";

import { motion } from "framer-motion";
import { RESUME_URL } from "@/lib/data/portfolio";
import { SkillShowcase } from "@/components/ui/SkillShowcase";
import { scrollToSection } from "@/lib/scroll";

export function Hero() {
  const goTo = (id: string) => scrollToSection(id);

  return (
    <section
      id="hero"
      className="scroll-target relative min-h-[90vh] flex items-center section-pad pt-28 sm:pt-32 section-default"
    >
      <div className="w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="min-w-0">
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-xs text-emerald-400 mb-6"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for opportunities
          </motion.div>

          <motion.h1
            className="font-heading text-4xl sm:text-5xl xl:text-[3.25rem] font-bold tracking-tight leading-[1.08]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="block text-white">Harshavardan</span>
            <span className="block text-gradient mt-1">Naidu</span>
          </motion.h1>

          <motion.p
            className="mt-5 text-lg sm:text-xl text-sky-300/90 font-semibold font-heading"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
          >
            Backend Engineer
          </motion.p>

          <motion.p
            className="mt-4 max-w-xl text-slate-400 text-base sm:text-lg leading-relaxed text-balance"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24 }}
          >
            Backend Engineer focused on building APIs, integrations, transaction
            systems, and backend services for iGaming platforms.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.36 }}
          >
            <button
              type="button"
              onClick={() => goTo("experience")}
              className="btn-primary"
            >
              View Experience
            </button>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Download Resume
            </a>
            <button type="button" onClick={() => goTo("contact")} className="btn-secondary">
              Contact
            </button>
          </motion.div>
        </div>

        <motion.div
          className="min-w-0 hidden sm:block"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <SkillShowcase />
        </motion.div>
      </div>

      <motion.div
        className="sm:hidden mt-10"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45 }}
      >
        <SkillShowcase compact />
      </motion.div>
    </section>
  );
}
