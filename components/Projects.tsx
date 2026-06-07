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

const contentVariants = {
  initial: { opacity: 0, y: 20, filter: "blur(4px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  exit: { opacity: 0, y: -16, filter: "blur(4px)" },
};

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

      <div className="tab-bar w-full max-w-lg sm:max-w-xl mx-auto mb-12">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTab(t.id)}
            aria-selected={tab === t.id}
            role="tab"
            className={clsx(
              "relative flex-1 px-4 sm:px-6 py-3 text-sm font-medium rounded-xl transition-colors duration-300",
              tab === t.id ? "text-sky-200" : "text-slate-500 hover:text-slate-300"
            )}
          >
            {tab === t.id && (
              <motion.span
                layoutId="project-tab"
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-sky-500/25 to-violet-500/15 border border-sky-500/30 shadow-md shadow-sky-500/10"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
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
            role="tabpanel"
            className="space-y-8 lg:space-y-10"
            variants={contentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
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
            role="tabpanel"
            className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3 opacity-95"
            variants={contentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
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
