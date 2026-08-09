"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { experienceMeta } from "@/lib/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { HighlightedText } from "@/components/ui/HighlightedText";

export function Experience() {
  const [expanded, setExpanded] = useState(false);
  const visibleAchievements = expanded
    ? experienceMeta.achievements
    : experienceMeta.achievements.slice(0, 5);
  const hasMore = experienceMeta.achievements.length > 5;

  return (
    <section id="experience" className="scroll-target section-pad section-default">
      <SectionHeader
        eyebrow="Experience"
        title="Professional experience"
        subtitle="Industry work in backend engineering"
      />

      <Reveal>
        <div className="relative max-w-3xl lg:max-w-4xl">
          <div
            className="absolute left-[7px] top-3 bottom-3 w-px bg-gradient-to-b from-sky-500/40 via-violet-500/20 to-transparent hidden sm:block"
            aria-hidden
          />

          <article className="relative sm:pl-8">
            <span
              className="absolute left-0 top-1.5 hidden sm:block w-3.5 h-3.5 rounded-full border-2 border-sky-400/70 bg-sky-500/20 shadow-sm shadow-sky-500/30"
              aria-hidden
            />

            <div className="gradient-border-card hover:-translate-y-1 transition-transform duration-300">
              <div className="gradient-border-inner p-6 sm:p-7">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-white">
                      {experienceMeta.company}
                    </h3>
                    <p className="text-sky-400/90 mt-1 font-medium">
                      {experienceMeta.role}
                    </p>
                  </div>
                  <p className="text-sm text-slate-500 shrink-0">
                    {experienceMeta.duration}
                  </p>
                </div>

                {experienceMeta.location && (
                  <p className="text-sm text-slate-500 mb-2">
                    {experienceMeta.location}
                  </p>
                )}

                <p className="text-xs font-medium uppercase tracking-wider text-violet-400/70 mb-3">
                  {experienceMeta.industry}
                </p>

                <p className="text-slate-400 text-sm sm:text-base leading-relaxed text-content mb-5">
                  {experienceMeta.summary}
                </p>

                {experienceMeta.achievements && (
                  <div className="pt-4 border-t border-white/[0.06]">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-600 mb-3">
                      Engineering responsibilities
                    </p>
                    <motion.ul layout className="space-y-2.5">
                    {visibleAchievements.map((item) => (
                      <li
                        key={item}
                        className="text-sm sm:text-base text-slate-400 flex gap-2.5 leading-relaxed text-content"
                      >
                        <span className="text-sky-500/70 shrink-0 mt-0.5">▸</span>
                        <span><HighlightedText>{item}</HighlightedText></span>
                      </li>
                    ))}
                    </motion.ul>
                    {hasMore && (
                      <button
                        type="button"
                        onClick={() => setExpanded((value) => !value)}
                        aria-expanded={expanded}
                        className="mt-4 inline-flex items-center rounded-lg border border-sky-500/20 bg-sky-500/[0.06] px-3 py-2 text-xs font-medium text-sky-400 transition-colors hover:bg-sky-500/10 hover:text-sky-300"
                      >
                        {expanded ? "Show less ↑" : "Show more ↓"}
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </article>
        </div>
      </Reveal>
    </section>
  );
}
