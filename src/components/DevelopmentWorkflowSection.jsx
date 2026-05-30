import { motion } from "framer-motion";
import { aiWorkflow } from "../data/portfolio";

const DevelopmentWorkflowSection = () => {
  return (
    <section className="section-padding py-12" aria-label="Development workflow">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="card p-6 border-dashed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wide">
            Development Workflow
          </h2>
          <p className="mt-2 text-xs text-slate-500">
            AI-assisted development — secondary to core engineering practice
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {aiWorkflow.tools.map((tool) => (
              <span
                key={tool}
                className="text-xs px-2.5 py-1 rounded border border-[var(--border)] text-slate-400"
              >
                {tool}
              </span>
            ))}
          </div>
          <p className="mt-4 text-sm text-slate-500">
            Usage: {aiWorkflow.usage.join(" · ")}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DevelopmentWorkflowSection;
