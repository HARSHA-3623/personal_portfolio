import { motion } from "framer-motion";
import { skillGroups } from "../data/portfolio";
import SectionHeader from "./SectionHeader";

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="section-padding section-surface"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          title="Technical Skills"
          subtitle="Focused on backend systems, data, and integrations"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.name}
              className="card p-5"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm font-semibold text-sky-400 uppercase tracking-wide mb-4">
                {group.name}
              </h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-slate-300 flex gap-2">
                    <span className="text-slate-600">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
