"use client";

import { currentLearning } from "@/lib/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";

export function Learning() {
  return (
    <section className="section-pad py-14 sm:py-16 section-alt">
      <Reveal className="text-center">
        <p className="text-xs font-medium uppercase tracking-[0.15em] text-zinc-600 mb-5">
          Continuous learning
        </p>
        <ul className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
          {currentLearning.map((topic) => (
            <li key={topic} className="badge">
              {topic}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
