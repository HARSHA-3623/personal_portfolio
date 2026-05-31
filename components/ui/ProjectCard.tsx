"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/lib/data/portfolio";
import Image from "next/image";

type Props = {
  project: Project;
  index: number;
  compact?: boolean;
};

export function ProjectCard({ project, index, compact = false }: Props) {
  return (
    <motion.article
      className="group glass rounded-2xl overflow-hidden hover:border-sky-500/25 transition-colors duration-500"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
    >
      {project.image && (
        <div className="relative h-40 w-full overflow-hidden bg-surface-elevated">
          <Image
            src={project.image}
            alt=""
            fill
            className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
            sizes="(max-width: 768px) 100vw, 400px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-elevated to-transparent" />
        </div>
      )}

      <div className={compact ? "p-5" : "p-6 sm:p-7"}>
        <h3 className="text-lg font-semibold text-white group-hover:text-sky-300 transition-colors">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-slate-400 leading-relaxed">
          {project.description}
        </p>

        {!compact && (
          <div className="mt-4">
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">
              Key contributions
            </p>
            <ul className="space-y-1.5">
              {project.contributions.map((item) => (
                <li
                  key={item}
                  className="text-sm text-slate-400 flex gap-2 leading-relaxed"
                >
                  <span className="text-sky-500 shrink-0">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {compact && project.contributions[0] && (
          <p className="mt-3 text-sm text-slate-500">
            <span className="text-slate-400">Learned: </span>
            {project.contributions[0]}
          </p>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.06] text-slate-400"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.paymentProviders && (
          <div className="mt-3 flex flex-wrap gap-2">
            {project.paymentProviders.map((p) => (
              <span
                key={p}
                className="text-xs px-2 py-0.5 rounded text-sky-400/90 bg-sky-500/10 border border-sky-500/20"
              >
                {p}
              </span>
            ))}
          </div>
        )}

        {(project.github || project.liveDemo) && (
          <div className="mt-5 flex gap-4 pt-4 border-t border-white/[0.06]">
            {project.github && project.github !== "#" && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-sky-400 hover:text-sky-300"
              >
                <Github size={14} />
                GitHub
              </a>
            )}
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-sky-400 hover:text-sky-300"
              >
                <ExternalLink size={14} />
                Live
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}
