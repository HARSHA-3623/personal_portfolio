import { useState } from "react";
import { motion } from "framer-motion";
import { professionalWork, personalProjects } from "../data/portfolio";
import SectionHeader from "./SectionHeader";

const FeaturedWorkSection = () => {
  const [tab, setTab] = useState("professional");

  return (
    <section
      id="work"
      className="section-padding section-surface"
      aria-labelledby="work-heading"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Featured Work"
          subtitle="Professional production work and personal project journey"
        />

        <div className="flex justify-center gap-2 mb-10">
          {[
            { id: "professional", label: "Professional Experience" },
            { id: "personal", label: "Personal Projects" },
          ].map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              className={`px-4 py-2 text-sm font-medium rounded-lg border transition-colors ${
                tab === t.id
                  ? "border-sky-500/60 bg-sky-500/10 text-sky-300"
                  : "border-[var(--border)] text-slate-400 hover:text-slate-200"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {tab === "professional" ? (
          <motion.div
            key="professional"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {professionalWork.map((item, index) => (
              <motion.div
                key={item}
                className="card p-5 flex items-center"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <span className="text-sky-500 mr-3">▸</span>
                <span className="text-sm text-slate-300">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="personal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {personalProjects.map((project, index) => (
              <motion.article
                key={project.title}
                className="card overflow-hidden flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                viewport={{ once: true }}
              >
                <div className="h-36 bg-[#0d1219] overflow-hidden">
                  <img
                    src={project.image}
                    alt=""
                    className="w-full h-full object-cover opacity-80"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed flex-1">
                    {project.description}
                  </p>
                  <p className="mt-3 text-xs text-slate-500">
                    <span className="text-slate-400 font-medium">Learnings: </span>
                    {project.learnings}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-0.5 rounded border border-[var(--border)] text-slate-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 mt-4 pt-4 border-t border-[var(--border)] text-sm">
                    {project.liveDemo !== "#" && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sky-400 hover:text-sky-300"
                      >
                        Live
                      </a>
                    )}
                    {project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sky-400 hover:text-sky-300"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default FeaturedWorkSection;
