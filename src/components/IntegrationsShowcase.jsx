import { motion } from "framer-motion";
import { integrationCategories } from "../data/portfolio";
import SectionHeader from "./SectionHeader";
import { ArrowDown } from "lucide-react";

const IntegrationsShowcase = () => {
  return (
    <section
      id="integrations"
      className="section-padding"
      aria-labelledby="integrations-heading"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Integrations Showcase"
          subtitle="How backend services connect clients to third-party providers"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrationCategories.map((category, index) => (
            <motion.div
              key={category.name}
              className="card p-6"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              viewport={{ once: true }}
            >
              <h3 className="text-base font-semibold text-white mb-5">
                {category.name}
              </h3>
              <div className="space-y-2">
                {category.flow.map((step, i) => (
                  <div key={step}>
                    <div className="text-sm px-3 py-2 rounded-md bg-[#0d1219] border border-[var(--border)] text-slate-300 text-center">
                      {step}
                    </div>
                    {i < category.flow.length - 1 && (
                      <div className="flex justify-center py-1 text-slate-600">
                        <ArrowDown size={16} aria-hidden />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationsShowcase;
