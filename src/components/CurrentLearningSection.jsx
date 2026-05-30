import { motion } from "framer-motion";
import { currentLearning } from "../data/portfolio";
import SectionHeader from "./SectionHeader";

const CurrentLearningSection = () => {
  return (
    <section
      id="learning"
      className="section-padding section-surface py-14"
      aria-labelledby="learning-heading"
    >
      <div className="max-w-4xl mx-auto">
        <SectionHeader title="Current Learning" subtitle="Continuous growth in system design and scale" />
        <motion.ul
          className="flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {currentLearning.map((topic) => (
            <li
              key={topic}
              className="text-sm px-4 py-2 rounded-lg border border-[var(--border)] text-slate-300 bg-[var(--bg-elevated)]"
            >
              {topic}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default CurrentLearningSection;
