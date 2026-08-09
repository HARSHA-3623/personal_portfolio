"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { Project } from "@/lib/data/portfolio";
import { HighlightedText } from "@/components/ui/HighlightedText";

type Props = {
  project: Project;
  index: number;
};

const featuredContributionIndexes = {
  "Lukx Link": [0, 8, 10, 12, 13],
  "Candy Coins": [15, 16, 17, 18],
} as const;

const redundantContributionIndexes = {
  "Lukx Link": [1],
  "Candy Coins": [8, 9, 10, 14, 19],
} as const;

const projectDescriptions = {
  "Lukx Link": "Production iGaming backend platform focused on player and Admin Backoffice services, transaction processing, payment gateway and casino provider integrations, real-time wallet updates, and secure role-based workflows.",
  "Candy Coins": "Production iGaming platform where I built backend services and owned the migration of 300K+ user accounts from SweetSweep, using Bull Queue, parallel processing, deduplication, and controlled concurrency to execute the migration safely with zero data loss.",
} as const;

export function ProfessionalWorkCard({ project, index }: Props) {
  const [expanded, setExpanded] = useState(false);
  const description = projectDescriptions[
    project.title as keyof typeof projectDescriptions
  ] ?? project.description;
  const featuredIndexes = featuredContributionIndexes[
    project.title as keyof typeof featuredContributionIndexes
  ] ?? project.contributions.slice(0, 5).map((_, itemIndex) => itemIndex);
  const indexes: number[] = [...featuredIndexes];
  const redundantIndexes: number[] = [
    ...(redundantContributionIndexes[
      project.title as keyof typeof redundantContributionIndexes
    ] ?? []),
  ];
  const featuredContributions = indexes.map((itemIndex) => project.contributions[itemIndex]);
  const remainingContributions = project.contributions.filter(
    (_, itemIndex) => !indexes.includes(itemIndex) && !redundantIndexes.includes(itemIndex)
  );
  const initialContributions = project.title === "Candy Coins" && project.highlight
    ? [project.highlight, ...featuredContributions]
    : featuredContributions;

  return (
    <motion.article
      className="pro-card group"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <div className="gradient-border-inner p-6 sm:p-7 lg:p-8">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-5">
          <div className="min-w-0 flex-1">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[10px] font-semibold uppercase tracking-wider bg-sky-500/15 text-sky-400 border border-sky-500/25 mb-4">
              Professional
            </span>
            <h3 className="font-heading text-xl sm:text-2xl lg:text-[1.65rem] font-semibold text-white group-hover:text-sky-100 transition-colors">
              {project.title}
            </h3>
            <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed max-w-3xl text-content">
              {description}
            </p>
          </div>
        </div>

        <div className="mb-6">
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
          <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-600 mb-3">
            Key contributions
          </p>
          <motion.ul layout className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5">
            {initialContributions.map((item) => (
              <li
                key={item}
                className="text-sm text-slate-400 flex gap-2.5 leading-snug group-hover:text-slate-300 transition-colors"
              >
                <span className="text-sky-500/70 shrink-0 mt-0.5">▸</span>
                <span className="text-content"><HighlightedText>{item}</HighlightedText></span>
              </li>
            ))}
            {expanded && remainingContributions.map((item) => (
                  <li key={item} className="text-sm text-slate-500 flex gap-2.5 leading-snug">
                    <span className="text-sky-500/70 shrink-0 mt-0.5">▸</span>
                    <span><HighlightedText>{item}</HighlightedText></span>
                  </li>
                ))}
          </motion.ul>
          {remainingContributions.length > 0 && (
            <button
              type="button"
              onClick={() => setExpanded((value) => !value)}
              aria-expanded={expanded}
              className="mt-4 inline-flex items-center rounded-lg border border-sky-500/20 bg-sky-500/[0.06] px-3 py-2 text-xs font-medium text-sky-400 transition-colors hover:bg-sky-500/10 hover:text-sky-300"
            >
              {expanded ? "Show less ↑" : "Show more ↓"}
            </button>
          )}
        </div>

        {(project.challenges || project.learnings) && (
          <div className="mt-6 pt-5 border-t border-white/[0.06] grid sm:grid-cols-2 gap-5">
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
