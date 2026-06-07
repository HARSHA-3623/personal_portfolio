"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import type { Project } from "@/lib/data/portfolio";

type Props = {
  project: Project;
  index: number;
};

function ProjectSection({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-wider text-zinc-600 mb-3">
        {label}
      </p>
      {children}
    </div>
  );
}

export function ProfessionalWorkCard({ project, index }: Props) {
  return (
    <motion.article
      className="surface-card p-6 sm:p-8 lg:p-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
    >
      <h3 className="font-heading text-xl sm:text-2xl font-semibold text-white">
        {project.title}
      </h3>

      <p className="mt-3 text-zinc-400 text-sm sm:text-base leading-relaxed max-w-3xl">
        {project.description}
      </p>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <ProjectSection label="Technologies">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="badge">
                {tech}
              </span>
            ))}
          </div>
        </ProjectSection>

        <ProjectSection label="Key contributions">
          <ul className="space-y-2">
            {project.contributions.map((item) => (
              <li
                key={item}
                className="text-sm text-zinc-400 flex gap-2.5 leading-snug"
              >
                <span className="text-zinc-600 shrink-0 mt-0.5">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </ProjectSection>

        {project.challenges && (
          <ProjectSection label="Challenges">
            <ul className="space-y-2">
              {project.challenges.map((item) => (
                <li
                  key={item}
                  className="text-sm text-zinc-400 flex gap-2.5 leading-snug"
                >
                  <span className="text-zinc-600 shrink-0 mt-0.5">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </ProjectSection>
        )}

        {project.learnings && (
          <ProjectSection label="Learnings">
            <ul className="space-y-2">
              {project.learnings.map((item) => (
                <li
                  key={item}
                  className="text-sm text-zinc-400 flex gap-2.5 leading-snug"
                >
                  <span className="text-zinc-600 shrink-0 mt-0.5">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </ProjectSection>
        )}
      </div>
    </motion.article>
  );
}
