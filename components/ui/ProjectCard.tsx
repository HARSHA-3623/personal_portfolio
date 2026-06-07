"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/lib/data/portfolio";
import Image from "next/image";
import clsx from "clsx";

type Props = {
  project: Project;
  index: number;
};

const PREVIEW_GRADIENTS = [
  "from-sky-950/50 to-[#0B1220]",
  "from-violet-950/40 to-[#0B1220]",
  "from-slate-900/50 to-[#0B1220]",
  "from-indigo-950/40 to-[#0B1220]",
  "from-cyan-950/35 to-[#0B1220]",
  "from-blue-950/40 to-[#0B1220]",
];

export function ProjectCard({ project, index }: Props) {
  return (
    <motion.article
      className="group surface-card-lift flex flex-col h-full overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
    >
      <div
        className={clsx(
          "relative h-36 sm:h-40 overflow-hidden bg-surface-elevated",
          !project.image &&
            `bg-gradient-to-br ${PREVIEW_GRADIENTS[index % PREVIEW_GRADIENTS.length]}`
        )}
      >
        {project.image ? (
          <>
            <Image
              src={project.image}
              alt=""
              fill
              className="object-cover opacity-75 group-hover:opacity-90 group-hover:scale-[1.03] transition-all duration-500"
              sizes="(max-width: 768px) 100vw, 400px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-transparent to-transparent" />
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl font-semibold text-white/10 select-none font-heading">
              {project.title.charAt(0)}
            </span>
          </div>
        )}
        <span className="absolute top-3 left-3 text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-md bg-violet-500/15 text-violet-300 border border-violet-500/20">
          Personal
        </span>
      </div>

      <div className="p-5 sm:p-6 flex flex-col flex-1">
        <h3 className="font-heading text-base font-semibold text-white group-hover:text-sky-200 transition-colors">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-slate-500 leading-relaxed line-clamp-2">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span key={tech} className="badge">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-4 flex gap-2">
          {project.github && project.github !== "#" && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-lg border border-white/[0.08] text-slate-400 hover:text-sky-300 hover:border-sky-500/30 transition-all"
            >
              <Github size={13} />
              GitHub
            </a>
          )}
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-lg border border-white/[0.08] text-slate-400 hover:text-violet-300 hover:border-violet-500/30 transition-all"
            >
              <ExternalLink size={13} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
