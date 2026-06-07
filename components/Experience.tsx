"use client";

import { experienceMeta } from "@/lib/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

export function Experience() {
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
              <div className="gradient-border-inner p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
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

                <p className="text-xs font-medium uppercase tracking-wider text-violet-400/70 mb-4">
                  {experienceMeta.industry}
                </p>

                <p className="text-slate-400 text-sm sm:text-base leading-relaxed text-content">
                  {experienceMeta.summary}
                </p>
              </div>
            </div>
          </article>
        </div>
      </Reveal>
    </section>
  );
}
