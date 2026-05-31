"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function About() {
  return (
    <section id="about" className="section-pad">
      <SectionHeader
        title="About"
        subtitle="Backend development, integrations, and platform work"
      />
      <motion.div
        className="glass rounded-2xl p-6 sm:p-8 max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-slate-300 leading-relaxed">
          I build and maintain backend services for iGaming platforms — REST
          APIs, payment and affiliate integrations, transaction flows, and
          third-party provider connectivity with Node.js, Express, PostgreSQL,
          and Redis.
        </p>
        <p className="mt-4 text-slate-400 leading-relaxed text-sm sm:text-base">
          My work spans casino and payment integrations, KYC onboarding,
          migration support, and debugging live platform issues. I enjoy solving
          real integration and data consistency problems while continuing to
          grow in system design and distributed systems.
        </p>
      </motion.div>
    </section>
  );
}
