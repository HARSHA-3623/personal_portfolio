"use client";

import { motion } from "framer-motion";
import { RESUME_URL } from "@/lib/data/portfolio";
import { HeroPhoto } from "@/components/ui/HeroPhoto";
import { scrollToSection } from "@/lib/scroll";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const goTo = (id: string) => scrollToSection(id);

  return (
    <section
      id="hero"
      className="scroll-target relative min-h-0 lg:min-h-[88vh] flex items-center section-pad pt-24 sm:pt-28 lg:pt-32 section-default"
    >
      <div className="w-full grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
        <motion.div
          className="order-2 lg:order-1 min-w-0"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-xs text-emerald-400 mb-5 sm:mb-6"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for opportunities
          </motion.div>

          <motion.h1
            className="font-heading text-3xl sm:text-4xl md:text-5xl xl:text-[3.25rem] font-bold tracking-tight leading-[1.1] text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6, ease }}
          >
            <span className="block">Harshavardan</span>
            <span className="block text-gradient mt-0.5 sm:mt-1">Naidu</span>
          </motion.h1>

          <motion.p
            className="mt-4 sm:mt-5 text-lg sm:text-xl text-sky-300/90 font-semibold font-heading"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22 }}
          >
            Backend Engineer
          </motion.p>

          <motion.p
            className="mt-3 sm:mt-4 max-w-xl text-slate-400 text-base sm:text-lg leading-relaxed text-balance"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28 }}
          >
            Backend Engineer focused on building APIs, integrations, transaction
            systems, and backend services for iGaming platforms.
          </motion.p>

          <motion.div
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.36 }}
          >
            <button
              type="button"
              onClick={() => goTo("experience")}
              className="btn-primary w-full sm:w-auto"
            >
              View Experience
            </button>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full sm:w-auto text-center"
            >
              Download Resume
            </a>
            <button
              type="button"
              onClick={() => goTo("contact")}
              className="btn-secondary w-full sm:w-auto"
            >
              Contact
            </button>
          </motion.div>
        </motion.div>

        <div className="order-1 lg:order-2 min-w-0 w-full">
          <HeroPhoto />
        </div>
      </div>
    </section>
  );
}
