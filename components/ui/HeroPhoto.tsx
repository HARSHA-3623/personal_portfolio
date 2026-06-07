"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const PROFILE_IMAGE = "/assets/profile.png";

export function HeroPhoto() {
  return (
    <motion.div
      className="relative w-[140px] h-[140px] sm:w-[150px] sm:h-[150px] lg:w-[260px] lg:h-[260px] shrink-0"
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-500/25 to-violet-500/15 blur-2xl scale-125 opacity-70"
        aria-hidden
      />

      <div className="relative w-full h-full rounded-full p-[2px] bg-gradient-to-br from-sky-500/40 via-violet-500/25 to-sky-500/15 shadow-lg shadow-sky-500/10">
        <div className="relative w-full h-full rounded-full overflow-hidden border border-white/10 bg-surface shadow-xl shadow-black/30">
          <Image
            src={PROFILE_IMAGE}
            alt="Harshavardan Naidu"
            fill
            priority
            className="object-cover object-top"
            sizes="(max-width: 1024px) 150px, 260px"
          />
        </div>
      </div>
    </motion.div>
  );
}
