import { motion } from "framer-motion";
import { productionImpact } from "../data/portfolio";
import SectionHeader from "./SectionHeader";

const ProductionImpactSection = () => {
  return (
    <section
      id="impact"
      className="section-padding section-surface"
      aria-labelledby="impact-heading"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Production Impact"
          subtitle="Measurable contributions to platform reliability and scale"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {productionImpact.map((card, index) => (
            <motion.div
              key={card.title}
              className="card p-6 sm:p-7 hover:border-sky-500/30 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-sky-400">{card.title}</h3>
              <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductionImpactSection;
