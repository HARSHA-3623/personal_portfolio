"use client";

import { motion } from "framer-motion";
import type { Project } from "@/lib/data/portfolio";

type Props = {
  project: Project;
  index: number;
};

export function ProfessionalWorkCard({ project, index }: Props) {
  return (
    <motion.article
      className="pro-card group"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <div className="gradient-border-inner p-6 sm:p-8 lg:p-10">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
          <div className="min-w-0 flex-1">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[10px] font-semibold uppercase tracking-wider bg-sky-500/15 text-sky-400 border border-sky-500/25 mb-4">
              Professional
            </span>
            <h3 className="font-heading text-xl sm:text-2xl lg:text-[1.65rem] font-semibold text-white group-hover:text-sky-100 transition-colors">
              {project.title}
            </h3>
            <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed max-w-3xl text-content">
              {project.description}
            </p>
          </div>
        </div>

        <div className="mb-8">
          <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-600 mb-3">
            Technologies
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <span
                key={tech}
                className={i % 2 === 0 ? "badge-sky" : "badge-violet"}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-600 mb-4">
            Key contributions
          </p>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5">
            {project.contributions.map((item) => (
              <li
                key={item}
                className="text-sm text-slate-400 flex gap-2.5 leading-snug group-hover:text-slate-300 transition-colors"
              >
                <span className="text-sky-500/70 shrink-0 mt-0.5">▸</span>
                <span className="text-content">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {(project.challenges || project.learnings) && (
          <div className="mt-8 pt-6 border-t border-white/[0.06] grid sm:grid-cols-2 gap-6">
            {project.challenges && (
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-600 mb-3">
                  Challenges
                </p>
                <ul className="space-y-2">
                  {project.challenges.map((item) => (
                    <li
                      key={item}
                      className="text-xs text-slate-500 leading-relaxed flex gap-2"
                    >
                      <span className="text-violet-500/60 shrink-0">—</span>
                      <span className="text-content">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {project.learnings && (
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-600 mb-3">
                  Learnings
                </p>
                <ul className="space-y-2">
                  {project.learnings.map((item) => (
                    <li
                      key={item}
                      className="text-xs text-slate-500 leading-relaxed flex gap-2"
                    >
                      <span className="text-emerald-500/60 shrink-0">—</span>
                      <span className="text-content">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}
