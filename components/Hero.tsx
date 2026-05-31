"use client";

import { motion } from "framer-motion";
import { heroStats, RESUME_URL } from "@/lib/data/portfolio";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center section-pad pt-32"
    >
      <div className="w-full">
        <motion.p
          className="text-sky-400/90 text-sm font-medium tracking-wide mb-4"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Backend Engineer · iGaming Platforms
        </motion.p>

        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Harshavardan{" "}
          <span className="text-gradient">Naidu</span>
        </motion.h1>

        <motion.p
          className="mt-3 text-xl text-slate-300 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
        >
          Backend Engineer
        </motion.p>

        <motion.p
          className="mt-6 max-w-2xl text-slate-400 leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
        >
          Backend Engineer experienced in building scalable iGaming platforms,
          payment integrations, affiliate systems, KYC workflows, transaction
          processing, and backend services using Node.js, PostgreSQL, and Redis.
        </motion.p>

        <motion.p
          className="mt-4 text-sm text-slate-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Node.js · Express.js · PostgreSQL · Redis
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
        >
          <MagneticButton onClick={() => scrollTo("projects")}>
            View Work
          </MagneticButton>
          <MagneticButton href={RESUME_URL} variant="secondary">
            Download Resume
          </MagneticButton>
          <MagneticButton
            variant="secondary"
            onClick={() => scrollTo("contact")}
          >
            Contact
          </MagneticButton>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }}
        >
          {heroStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="glass rounded-xl p-5 hover:border-sky-500/20 transition-colors"
              whileHover={{ scale: 1.02 }}
              transition={{ delay: i * 0.05 }}
            >
              <p className="text-xl sm:text-2xl font-semibold text-sky-400">
                {stat.value}
              </p>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-500 leading-snug">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
