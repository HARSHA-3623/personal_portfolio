"use client";

import { motion } from "framer-motion";
import { Server, Database, Plug, Wrench } from "lucide-react";
import { skillGroups } from "@/lib/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";

const icons = {
  backend: Server,
  database: Database,
  integrations: Plug,
  tools: Wrench,
} as const;

const iconColors = [
  "text-sky-400 bg-sky-500/10 border-sky-500/20",
  "text-violet-400 bg-violet-500/10 border-violet-500/20",
  "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  "text-slate-400 bg-white/[0.04] border-white/[0.08]",
];

export function Skills() {
  return (
    <section id="skills" className="scroll-target section-pad section-blue">
      <SectionHeader
        eyebrow="Skills"
        title="Technologies I use"
        subtitle="Backend, database, integrations, and tooling"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
        {skillGroups.map((group, index) => {
          const Icon = icons[group.icon];
          return (
            <motion.div
              key={group.name}
              className="surface-card-lift p-6 sm:p-7 group"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span
                  className={`p-2.5 rounded-xl border ${iconColors[index % iconColors.length]}`}
                >
                  <Icon size={18} strokeWidth={1.75} />
                </span>
                <h3 className="font-heading text-base font-semibold text-white">
                  {group.name}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item, i) => (
                  <span
                    key={item}
                    className={i % 2 === 0 ? "badge-sky" : "badge"}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
