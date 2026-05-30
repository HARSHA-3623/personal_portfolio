import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { caseStudies } from "../data/portfolio";
import SectionHeader from "./SectionHeader";

const CaseStudiesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = caseStudies[activeIndex];

  return (
    <section id="case-studies" className="section-padding" aria-labelledby="case-studies-heading">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          title="Engineering Case Studies"
          subtitle="Real production problems, investigation, and outcomes"
        />

        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {caseStudies.map((study, index) => (
            <button
              key={study.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`px-3 py-1.5 text-xs sm:text-sm rounded-md border transition-colors ${
                activeIndex === index
                  ? "border-sky-500/60 bg-sky-500/10 text-sky-300"
                  : "border-[var(--border)] text-slate-400 hover:text-slate-200"
              }`}
            >
              {index + 1}. {study.title.split(" ").slice(0, 3).join(" ")}
              {study.title.split(" ").length > 3 ? "…" : ""}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.article
            key={active.title}
            className="card p-6 sm:p-8"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-white mb-6">{active.title}</h3>
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                { label: "Problem", value: active.problem },
                { label: "Investigation", value: active.investigation },
                { label: "Solution", value: active.solution },
                { label: "Outcome", value: active.outcome },
              ].map((block) => (
                <div key={block.label}>
                  <h4 className="text-xs uppercase tracking-wider text-sky-400 font-medium mb-2">
                    {block.label}
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed">{block.value}</p>
                </div>
              ))}
            </div>
            {active.providers && (
              <div className="mt-6 pt-6 border-t border-[var(--border)]">
                <p className="text-xs uppercase tracking-wider text-sky-400 font-medium mb-2">
                  Providers
                </p>
                <div className="flex flex-wrap gap-2">
                  {active.providers.map((p) => (
                    <span
                      key={p}
                      className="text-sm px-3 py-1 rounded-md border border-[var(--border)] text-slate-300"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.article>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
