"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function About() {
  return (
    <section id="about" className="scroll-target section-pad section-blue">
      <SectionHeader
        eyebrow="About"
        title="Who I am"
        subtitle="Backend development, integrations, and platform work"
      />
      <Reveal>
        <div className="max-w-3xl space-y-4 surface-card-lift p-6 sm:p-8 lg:p-10 text-content">
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            I build backend services for iGaming platforms — REST APIs,
            payment and affiliate integrations, transaction systems, and
            third-party connectivity.
          </p>
          <p className="text-slate-500 text-base leading-relaxed">
            My work spans API development, platform configuration, casino and
            payment integrations, and debugging production issues. I&apos;m
            focused on writing clear, reliable backend code and continuing to
            grow in system design and cloud infrastructure.
          </p>
          <p className="text-slate-500 text-base leading-relaxed">
            In production, I work with PostgreSQL, Redis, AWS, Bull Queue, and
            async job processing — building webhook handling, payment
            integrations, production migrations, and performance optimizations
            for transaction-driven platforms.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
