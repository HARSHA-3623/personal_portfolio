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
    <section id="projects" className="section-pad">
      <SectionHeader
        title="Featured Projects"
        subtitle="Professional platform work and personal learning projects"
      />

      <div className="flex justify-center gap-2 mb-10 p-1 glass rounded-xl w-fit mx-auto">
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
              "px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300",
              tab === t.id
                ? "bg-sky-500/20 text-sky-300 border border-sky-500/30"
                : "text-slate-500 hover:text-slate-300"
            )}
          >
            {t.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          className="grid gap-8 md:grid-cols-2"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              compact={tab === "personal"}
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
