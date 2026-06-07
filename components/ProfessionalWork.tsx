"use client";

import { professionalProjects } from "@/lib/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProfessionalWorkCard } from "@/components/ui/ProfessionalWorkCard";

export function ProfessionalWork() {
  return (
    <section id="work" className="scroll-target section-pad">
      <SectionHeader
        eyebrow="Professional work"
        title="What I work on"
        subtitle="Backend projects from industry platform development"
      />

      <div className="space-y-6 lg:space-y-8">
        {professionalProjects.map((project, index) => (
          <ProfessionalWorkCard
            key={project.title}
            project={project}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
