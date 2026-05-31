"use client";

import { motion } from "framer-motion";
import { experienceMeta, professionalProjects } from "@/lib/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/ui/ProjectCard";

export function Experience() {
  return (
    <section id="experience" className="section-pad">
      <SectionHeader
        title="Experience"
        subtitle="Project-based work at GAMMASTACK"
      />

      <motion.div
        className="glass rounded-2xl p-6 sm:p-8 mb-10"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
      >
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
          <div>
            <h3 className="text-xl font-semibold text-white">
              {experienceMeta.company}
            </h3>
            <p className="text-sky-400 mt-1 font-medium">{experienceMeta.role}</p>
          </div>
          <div className="text-sm text-slate-500 sm:text-right">
            <p>{experienceMeta.industry}</p>
            <p>{experienceMeta.duration}</p>
          </div>
        </div>
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-1">
        {professionalProjects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
