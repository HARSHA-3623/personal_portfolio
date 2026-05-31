"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experienceMeta, experienceHighlights } from "@/lib/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

export function Experience() {
  return (
    <section id="experience" className="section-pad section-alt">
      <SectionHeader
        eyebrow="Career"
        title="Experience"
        subtitle={`${experienceMeta.company} · ${experienceMeta.industry}`}
      />

      <div className="relative max-w-3xl">
        <div
          className="absolute left-[11px] top-8 bottom-8 w-px bg-gradient-to-b from-sky-500/50 via-sky-500/20 to-transparent"
          aria-hidden
        />

        <Reveal>
          <motion.article
            className="relative pl-10"
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-sky-500/20 border border-sky-500/40 text-sky-400">
              <Briefcase size={12} />
            </span>

            <div className="card-interactive gradient-ring p-6 sm:p-7">
              <div className="flex flex-col sm:flex-row sm:justify-between gap-2 mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {experienceMeta.company}
                  </h3>
                  <p className="text-sky-400 text-sm font-medium mt-1">
                    {experienceMeta.role}
                  </p>
                </div>
                <p className="text-sm text-slate-500 sm:text-right">
                  {experienceMeta.duration}
                </p>
              </div>

              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                {experienceHighlights.map((item, i) => (
                  <motion.li
                    key={item}
                    className="text-sm text-slate-400 flex gap-2 leading-snug"
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <span className="text-sky-500/80 shrink-0 mt-0.5">▸</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.article>
        </Reveal>
      </div>
    </section>
  );
}
