"use client";

import { motion } from "framer-motion";
import { RESUME_URL, heroIntro } from "@/lib/data/portfolio";
import { HeroPhoto } from "@/components/ui/HeroPhoto";
import { TechRotator } from "@/components/ui/TechRotator";
import { HeroHighlights } from "@/components/ui/HeroHighlights";
import { HeroMetrics } from "@/components/ui/HeroMetrics";
import { scrollToSection } from "@/lib/scroll";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const goTo = (id: string) => scrollToSection(id);

  return (
    <section
      id="hero"
      className="scroll-target relative min-h-0 lg:min-h-screen flex items-center container-wide pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-28 lg:pb-20 section-default"
    >
      <div className="w-full flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12 xl:gap-16">
        <motion.div
          className="order-2 lg:order-1 min-w-0 lg:basis-[55%]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-xs text-emerald-400 mb-4 sm:mb-5"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for opportunities
          </motion.div>

          <motion.h1
            className="font-heading text-3xl sm:text-4xl md:text-5xl xl:text-[3.25rem] font-bold tracking-tight leading-[1.1] text-white"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.55, ease }}
          >
            <span className="block">Harshavardan</span>
            <span className="block text-gradient mt-0.5 sm:mt-1">Naidu</span>
          </motion.h1>

          <motion.p
            className="mt-3 sm:mt-4 text-lg sm:text-xl text-sky-300/90 font-semibold font-heading"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
          >
            Backend Engineer
          </motion.p>

          <motion.div
            className="mt-3 sm:mt-4 max-w-[46rem] space-y-3 text-slate-400 text-sm sm:text-base leading-relaxed text-content"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24 }}
          >
            {heroIntro.map((paragraph) => (
              <p key={paragraph}>
                {paragraph}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <TechRotator />
            <HeroHighlights />
            <HeroMetrics />
          </motion.div>

          <motion.div
            className="mt-7 sm:mt-8 flex flex-col sm:flex-row flex-wrap gap-3"
            initial={{ opacity: 0, y: 8 }}
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

        <div className="order-1 lg:order-2 flex justify-center lg:absolute lg:top-[50svh] lg:right-10 xl:right-12 lg:-translate-y-1/2 lg:basis-[45%]">
          <HeroPhoto />
        </div>
      </div>
    </section>
  );
}
