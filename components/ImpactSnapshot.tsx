"use client";

import { motion } from "framer-motion";
import { impactStats } from "@/lib/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ImpactSnapshot() {
  return (
    <section id="impact" className="section-pad section-alt">
      <SectionHeader
        eyebrow="At a glance"
        title="Impact Snapshot"
        subtitle="Contributions across migrations, integrations, and platform work"
        align="center"
      />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {impactStats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="group card-interactive gradient-ring p-4 sm:p-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: index * 0.07 }}
            whileHover={{ y: -3 }}
          >
            <p className="text-xl sm:text-2xl font-bold text-sky-400 tracking-tight">
              {stat.value}
            </p>
            <p className="mt-2 text-xs sm:text-sm text-slate-500 leading-snug group-hover:text-slate-400 transition-colors">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
