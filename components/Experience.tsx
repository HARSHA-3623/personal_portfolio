"use client";

import { experienceMeta } from "@/lib/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

export function Experience() {
  return (
    <section id="experience" className="scroll-target section-pad section-alt">
      <SectionHeader
        eyebrow="Experience"
        title="Professional experience"
        subtitle="Industry work in backend engineering"
      />

      <Reveal>
        <div className="relative max-w-2xl">
          <div
            className="absolute left-[7px] top-3 bottom-3 w-px bg-white/[0.08] hidden sm:block"
            aria-hidden
          />

          <article className="relative sm:pl-8">
            <span
              className="absolute left-0 top-1.5 hidden sm:block w-3.5 h-3.5 rounded-full border-2 border-indigo-400/60 bg-indigo-500/20"
              aria-hidden
            />

            <div className="surface-card p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                <div>
                  <h3 className="font-heading text-xl font-semibold text-white">
                    {experienceMeta.company}
                  </h3>
                  <p className="text-zinc-300 mt-1">{experienceMeta.role}</p>
                </div>
                <p className="text-sm text-zinc-500 shrink-0">
                  {experienceMeta.duration}
                </p>
              </div>

              <p className="text-xs font-medium uppercase tracking-wider text-zinc-600 mb-4">
                {experienceMeta.industry}
              </p>

              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                {experienceMeta.summary}
              </p>
            </div>
          </article>
        </div>
      </Reveal>
    </section>
  );
}
