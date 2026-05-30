import { motion } from "framer-motion";
import { experience } from "../data/portfolio";
import SectionHeader from "./SectionHeader";

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding" aria-labelledby="experience-heading">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          title="Experience"
          subtitle="Production backend work in iGaming"
        />
        <motion.article
          className="card p-6 sm:p-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-6">
            <div>
              <h3 className="text-xl font-semibold text-white">{experience.company}</h3>
              <p className="text-sky-400 font-medium mt-1">{experience.role}</p>
            </div>
            <div className="text-sm text-slate-400 sm:text-right">
              <p>{experience.industry}</p>
              <p>{experience.duration}</p>
            </div>
          </div>
          <ul className="space-y-3 text-slate-300 text-sm sm:text-base">
            {experience.responsibilities.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-sky-500 mt-1.5 shrink-0">▸</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.article>
      </div>
    </section>
  );
};

export default ExperienceSection;
