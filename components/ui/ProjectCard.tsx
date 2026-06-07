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
  "from-zinc-800/60 to-zinc-900",
  "from-indigo-950/40 to-zinc-900",
  "from-zinc-800/50 to-zinc-900",
  "from-slate-800/50 to-zinc-900",
  "from-neutral-800/50 to-zinc-900",
  "from-stone-800/50 to-zinc-900",
];

export function ProjectCard({ project, index }: Props) {
  return (
    <motion.article
      className="group surface-card flex flex-col h-full overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
    >
      <div
        className={clsx(
          "relative h-40 sm:h-44 overflow-hidden bg-surface-elevated",
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
              className="object-cover opacity-80 group-hover:opacity-95 group-hover:scale-[1.02] transition-all duration-500"
              sizes="(max-width: 768px) 100vw, 400px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#18181b] via-transparent to-transparent" />
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl font-semibold text-white/10 select-none font-heading">
              {project.title.charAt(0)}
            </span>
          </div>
        )}
      </div>

      <div className="p-5 sm:p-6 flex flex-col flex-1">
        <h3 className="font-heading text-lg font-semibold text-white group-hover:text-zinc-100 transition-colors">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span key={tech} className="badge">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-5 flex gap-2">
          {project.github && project.github !== "#" && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium px-3 py-2 rounded-lg border border-white/[0.08] text-zinc-300 hover:text-white hover:border-white/[0.14] transition-colors"
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
              className="inline-flex items-center gap-1.5 text-sm font-medium px-3 py-2 rounded-lg border border-white/[0.08] text-zinc-300 hover:text-white hover:border-white/[0.14] transition-colors"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
