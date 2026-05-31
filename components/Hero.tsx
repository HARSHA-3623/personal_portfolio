"use client";

import { motion } from "framer-motion";
import { RESUME_URL } from "@/lib/data/portfolio";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { TechRotator } from "@/components/ui/TechRotator";

export function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center section-pad pt-28 overflow-hidden"
    >
      <div
        className="absolute top-1/4 -left-32 w-72 h-72 rounded-full bg-sky-500/10 blur-[100px] pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full bg-cyan-500/8 blur-[120px] pointer-events-none"
        aria-hidden
      />

      <div className="w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-slate-400 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Backend Engineer · iGaming
        </motion.div>

        <motion.h1
          className="text-[2.75rem] sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="block text-white">Harshavardan</span>
          <span className="block text-gradient mt-1">Naidu</span>
        </motion.h1>

        <motion.p
          className="mt-5 text-lg sm:text-xl text-slate-300 font-medium max-w-md"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Backend Engineer
        </motion.p>

        <motion.p
          className="mt-5 max-w-xl text-slate-400 text-base sm:text-lg leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Building iGaming backends — APIs, payments, affiliates, KYC, and
          transaction flows with Node.js, PostgreSQL, and Redis.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <TechRotator />
        </motion.div>

        <motion.div
          className="mt-10 flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <MagneticButton onClick={() => scrollTo("projects")}>
            View Work
          </MagneticButton>
          <MagneticButton href={RESUME_URL} variant="secondary">
            Download Resume
          </MagneticButton>
          <MagneticButton variant="secondary" onClick={() => scrollTo("contact")}>
            Contact
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
