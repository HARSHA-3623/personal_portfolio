"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function About() {
  return (
    <section id="about" className="section-pad">
      <SectionHeader
        eyebrow="About me"
        title="About"
        subtitle="Backend development, integrations, and platform work"
      />
      <Reveal>
        <div className="card-interactive gradient-ring max-w-3xl p-6 sm:p-8 space-y-4">
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            I develop backend services for iGaming platforms — REST APIs, payment
            and affiliate integrations, transaction flows, and third-party
            connectivity.
          </p>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            My day-to-day includes casino and payment integrations, KYC
            onboarding, migration support, and debugging live issues. I&apos;m
            focused on shipping reliable APIs and growing in system design and
            cloud infrastructure.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
