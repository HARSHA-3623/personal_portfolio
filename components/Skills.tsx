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

export function Skills() {
  return (
    <section id="skills" className="section-pad section-alt">
      <SectionHeader eyebrow="Expertise" title="Skills" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {skillGroups.map((group, index) => {
          const Icon = icons[group.icon];
          return (
            <motion.div
              key={group.name}
              className="group card-interactive gradient-ring p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              whileHover={{ y: -4 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 group-hover:bg-sky-500/20 group-hover:scale-105 transition-all duration-300">
                  <Icon size={20} strokeWidth={1.75} />
                </span>
                <h3 className="text-sm font-semibold text-white">
                  {group.name}
                </h3>
              </div>
              <ul className="space-y-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-slate-400 flex items-center gap-2 group-hover:text-slate-300 transition-colors"
                  >
                    <span className="w-1 h-1 rounded-full bg-sky-500/50" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
