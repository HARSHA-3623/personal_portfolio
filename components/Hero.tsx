"use client";

import { motion } from "framer-motion";
import { RESUME_URL } from "@/lib/data/portfolio";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { TechRotator } from "@/components/ui/TechRotator";
import { ImpactMetrics } from "@/components/ui/ImpactMetrics";
import { scrollToSection } from "@/lib/scroll";

export function Hero() {
  const goTo = (id: string) => scrollToSection(id);

  return (
    <section
      id="hero"
      className="scroll-target relative min-h-[min(92vh,900px)] flex items-center section-pad pt-28 sm:pt-32 overflow-hidden"
    >
      <div
        className="absolute top-1/4 -left-32 w-80 h-80 rounded-full bg-sky-500/12 blur-[110px] pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute top-1/3 right-0 w-[420px] h-[420px] rounded-full bg-cyan-500/10 blur-[130px] pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-br from-sky-950/20 via-transparent to-transparent pointer-events-none"
        aria-hidden
      />

      <div className="w-full relative z-10 grid lg:grid-cols-[1.05fr_0.95fr] xl:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-12 xl:gap-16 items-center">
        <div className="min-w-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-slate-400 mb-6 sm:mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Backend Engineer · iGaming
          </motion.div>

          <motion.h1
            className="font-heading text-[2.5rem] sm:text-5xl xl:text-[3.5rem] font-bold tracking-tight leading-[1.05]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="block text-white">Harshavardan</span>
            <span className="block text-gradient mt-1">Naidu</span>
          </motion.h1>

          <motion.p
            className="mt-4 sm:mt-5 text-lg sm:text-xl text-slate-300 font-semibold font-heading"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28 }}
          >
            Backend Engineer
          </motion.p>

          <motion.p
            className="mt-4 sm:mt-5 max-w-xl text-slate-400 text-base sm:text-lg leading-relaxed text-balance"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38 }}
          >
            Building iGaming backends — APIs, payments, affiliates, KYC, and
            transaction flows with Node.js, PostgreSQL, and Redis.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.48 }}
          >
            <TechRotator />
          </motion.div>

          <motion.div
            className="mt-8 sm:mt-10 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
          >
            <MagneticButton onClick={() => goTo("projects")}>
              View Work
            </MagneticButton>
            <MagneticButton href={RESUME_URL} variant="secondary">
              Download Resume
            </MagneticButton>
            <MagneticButton variant="secondary" onClick={() => goTo("contact")}>
              Contact
            </MagneticButton>
          </motion.div>
        </div>

        <div className="min-w-0 lg:pl-4">
          <motion.p
            className="hidden lg:block text-xs font-medium uppercase tracking-[0.2em] text-slate-600 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
          >
            Impact at a glance
          </motion.p>
          <ImpactMetrics id="impact" variant="hero" />
        </div>
      </div>
    </section>
  );
}
