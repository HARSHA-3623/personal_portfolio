"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experienceMeta, experienceHighlights } from "@/lib/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

export function Experience() {
  return (
    <section id="experience" className="scroll-target section-pad section-alt">
      <SectionHeader
        eyebrow="Career"
        title="Experience"
        subtitle={`${experienceMeta.company} · ${experienceMeta.industry}`}
      />

      <div className="relative w-full">
        <div
          className="absolute left-[11px] top-8 bottom-8 w-px bg-gradient-to-b from-sky-500/50 via-sky-500/20 to-transparent hidden sm:block"
          aria-hidden
        />

        <Reveal>
          <motion.article
            className="relative sm:pl-10"
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="absolute left-0 top-1 hidden sm:flex h-6 w-6 items-center justify-center rounded-full bg-sky-500/20 border border-sky-500/40 text-sky-400">
              <Briefcase size={12} />
            </span>

            <div className="card-interactive gradient-ring p-6 sm:p-8 lg:p-10">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-8">
                <div>
                  <h3 className="font-heading text-xl lg:text-2xl font-semibold text-white">
                    {experienceMeta.company}
                  </h3>
                  <p className="text-sky-400 mt-1 font-medium">
                    {experienceMeta.role}
                  </p>
                </div>
                <p className="text-sm text-slate-500 md:text-right shrink-0">
                  {experienceMeta.duration}
                </p>
              </div>

              <ul className="grid sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-3">
                {experienceHighlights.map((item, i) => (
                  <motion.li
                    key={item}
                    className="text-sm text-slate-400 flex gap-2.5 leading-snug"
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.03 }}
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
