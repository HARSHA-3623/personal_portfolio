"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ExternalLink, Github } from "lucide-react";
import type { Project } from "@/lib/data/portfolio";
import Image from "next/image";
import clsx from "clsx";

type Props = {
  project: Project;
  index: number;
  variant: "professional" | "personal";
};

const PREVIEW_GRADIENTS = [
  "from-sky-900/40 to-slate-900",
  "from-indigo-900/40 to-slate-900",
  "from-cyan-900/30 to-slate-900",
  "from-violet-900/35 to-slate-900",
  "from-teal-900/35 to-slate-900",
  "from-blue-900/40 to-slate-900",
];

export function ProjectCard({ project, index, variant }: Props) {
  const [expanded, setExpanded] = useState(false);
  const isPro = variant === "professional";
  const previewCount = isPro ? 4 : 0;
  const hasMore = isPro && project.contributions.length > previewCount;

  return (
    <motion.article
      className="group card-interactive gradient-ring flex flex-col h-full"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      whileHover={{ y: -5 }}
    >
      <div
        className={clsx(
          "relative h-44 sm:h-48 overflow-hidden bg-surface-elevated",
          !project.image && `bg-gradient-to-br ${PREVIEW_GRADIENTS[index % PREVIEW_GRADIENTS.length]}`
        )}
      >
        {project.image ? (
          <>
            <Image
              src={project.image}
              alt=""
              fill
              className="object-cover opacity-75 group-hover:opacity-95 group-hover:scale-[1.03] transition-all duration-700"
              sizes="(max-width: 768px) 100vw, 480px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#11161d] via-transparent to-transparent" />
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl font-bold text-white/10 select-none">
              {project.title.charAt(0)}
            </span>
          </div>
        )}
        {isPro && (
          <span className="absolute top-3 left-3 text-[10px] uppercase tracking-wider px-2 py-1 rounded-md bg-sky-500/20 text-sky-300 border border-sky-500/30 backdrop-blur-sm">
            Professional
          </span>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1 relative z-10">
        <h3 className="text-lg font-semibold text-white group-hover:text-sky-300 transition-colors">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-slate-400 leading-relaxed line-clamp-2 sm:line-clamp-none">
          {project.description}
        </p>

        <div className="mt-4">
          <p className="text-[10px] uppercase tracking-wider text-slate-600 mb-2">
            Technologies
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.06] text-slate-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {project.paymentProviders && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.paymentProviders.map((p) => (
              <span
                key={p}
                className="text-[10px] px-2 py-0.5 rounded text-sky-400/90 bg-sky-500/10 border border-sky-500/15"
              >
                {p}
              </span>
            ))}
          </div>
        )}

        {isPro ? (
          <div className="mt-5 flex-1">
            <p className="text-[10px] uppercase tracking-wider text-slate-600 mb-2">
              Key contributions
            </p>
            <ul className="space-y-1.5">
              {project.contributions
                .slice(0, expanded ? undefined : previewCount)
                .map((item) => (
                  <li
                    key={item}
                    className="text-sm text-slate-400 flex gap-2 leading-snug"
                  >
                    <span className="text-sky-500/70 shrink-0">·</span>
                    <span>{item}</span>
                  </li>
                ))}
            </ul>
            {hasMore && (
              <button
                type="button"
                onClick={() => setExpanded(!expanded)}
                className="mt-3 inline-flex items-center gap-1 text-xs text-sky-400 hover:text-sky-300 transition-colors"
              >
                {expanded ? "Show less" : `Show ${project.contributions.length - previewCount} more`}
                <ChevronDown
                  size={14}
                  className={clsx("transition-transform", expanded && "rotate-180")}
                />
              </button>
            )}
          </div>
        ) : (
          <p className="mt-4 text-sm text-slate-500 flex-1">
            {project.contributions[0]}
          </p>
        )}

        <div className="mt-5 flex gap-3 pt-4 border-t border-white/[0.06]">
          {project.github && project.github !== "#" && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-300 hover:text-sky-300 hover:border-sky-500/30 transition-all"
            >
              <Github size={15} />
              GitHub
            </a>
          )}
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-lg bg-sky-500/10 border border-sky-500/25 text-sky-300 hover:bg-sky-500/20 transition-all"
            >
              <ExternalLink size={15} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
