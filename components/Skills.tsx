"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/lib/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Skills() {
  return (
    <section id="skills" className="section-pad">
      <SectionHeader title="Skills" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.name}
            className="glass rounded-xl p-5 hover:border-sky-500/20 transition-colors duration-300"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06 }}
            whileHover={{ y: -2 }}
          >
            <h3 className="text-xs font-semibold uppercase tracking-wider text-sky-400/90 mb-4">
              {group.name}
            </h3>
            <ul className="space-y-2">
              {group.items.map((item) => (
                <li key={item} className="text-sm text-slate-400">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
