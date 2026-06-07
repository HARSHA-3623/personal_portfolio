"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  professionalProjects,
  personalProjects,
} from "@/lib/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProfessionalWorkCard } from "@/components/ui/ProfessionalWorkCard";
import { ProjectCard } from "@/components/ui/ProjectCard";
import clsx from "clsx";

type Tab = "professional" | "personal";

const tabs: { id: Tab; label: string }[] = [
  { id: "professional", label: "Professional Work" },
  { id: "personal", label: "Personal Projects" },
];

export function Projects() {
  const [tab, setTab] = useState<Tab>("professional");

  return (
    <section
      id="projects"
      className="scroll-target section-pad section-glow-top section-purple"
    >
      <SectionHeader
        eyebrow="Projects"
        title="What I build"
        subtitle="Industry platform work and personal learning projects"
      />

      <div className="tab-bar w-full max-w-md sm:max-w-lg mx-auto mb-12">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTab(t.id)}
            className={clsx(
              "relative flex-1 px-4 py-2.5 text-sm font-medium rounded-xl transition-colors duration-300",
              tab === t.id ? "text-sky-200" : "text-slate-500 hover:text-slate-300"
            )}
          >
            {tab === t.id && (
              <motion.span
                layoutId="project-tab"
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-sky-500/20 to-violet-500/15 border border-sky-500/25 shadow-sm shadow-sky-500/10"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{t.label}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {tab === "professional" ? (
          <motion.div
            key="professional"
            className="space-y-8 lg:space-y-10"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {professionalProjects.map((project, index) => (
              <ProfessionalWorkCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="personal"
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 opacity-90"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {personalProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
