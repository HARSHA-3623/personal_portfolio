"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const PROFILE_IMAGE = "/assets/profile.png";

export function HeroPhoto() {
  return (
    <motion.div
      className="relative w-full max-w-sm mx-auto lg:max-w-none lg:mx-0 lg:ml-auto"
      initial={{ opacity: 0, scale: 0.96, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className="absolute -inset-4 sm:-inset-6 rounded-[2rem] bg-gradient-to-br from-sky-500/20 via-violet-500/10 to-transparent blur-2xl opacity-80"
        aria-hidden
      />
      <div
        className="absolute -inset-px rounded-[1.35rem] bg-gradient-to-br from-sky-500/40 via-violet-500/25 to-sky-500/10 opacity-60"
        aria-hidden
      />

      <div className="relative gradient-border-card rounded-[1.35rem] overflow-hidden shadow-2xl shadow-sky-500/10">
        <div className="relative aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5] overflow-hidden rounded-[1.25rem] bg-surface">
          <Image
            src={PROFILE_IMAGE}
            alt="Harshavardan Naidu"
            fill
            priority
            className="object-cover object-top"
            sizes="(max-width: 1024px) 80vw, 480px"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#050816]/80 via-transparent to-transparent pointer-events-none"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-br from-sky-500/5 via-transparent to-violet-500/5 pointer-events-none"
            aria-hidden
          />
        </div>
      </div>
    </motion.div>
  );
}
