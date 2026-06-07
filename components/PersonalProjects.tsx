"use client";

import { personalProjects } from "@/lib/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/ui/ProjectCard";

export function PersonalProjects() {
  return (
    <section id="personal" className="scroll-target section-pad section-alt">
      <SectionHeader
        eyebrow="Personal projects"
        title="Side projects"
        subtitle="Learning projects built outside of work"
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {personalProjects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
