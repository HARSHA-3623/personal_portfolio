"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  professionalProjects,
  personalProjects,
} from "@/lib/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/ui/ProjectCard";
import clsx from "clsx";

type Tab = "professional" | "personal";

export function Projects() {
  const [tab, setTab] = useState<Tab>("professional");
  const projects =
    tab === "professional" ? professionalProjects : personalProjects;

  return (
    <section id="projects" className="scroll-target section-pad">
      <SectionHeader
        eyebrow="Portfolio"
        title="Featured Projects"
        subtitle="Industry platform work and personal learning projects"
      />

      <div className="flex justify-center gap-1 mb-10 sm:mb-12 p-1.5 glass rounded-2xl w-full max-w-md sm:max-w-lg mx-auto">
        {(
          [
            { id: "professional" as Tab, label: "Professional Work" },
            { id: "personal" as Tab, label: "Personal Projects" },
          ] as const
        ).map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTab(t.id)}
            className={clsx(
              "relative flex-1 px-4 sm:px-5 py-2.5 text-sm font-medium rounded-xl transition-all duration-300",
              tab === t.id
                ? "text-sky-300"
                : "text-slate-500 hover:text-slate-300"
            )}
          >
            {tab === t.id && (
              <motion.span
                layoutId="project-tab"
                className="absolute inset-0 bg-sky-500/15 border border-sky-500/25 rounded-xl"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{t.label}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          className={clsx(
            "grid gap-6 lg:gap-8 w-full",
            tab === "professional"
              ? "md:grid-cols-2"
              : "sm:grid-cols-2 xl:grid-cols-3"
          )}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35 }}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              variant={tab === "professional" ? "professional" : "personal"}
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
