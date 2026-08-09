"use client";

import { motion } from "framer-motion";
import { heroMetrics } from "@/lib/data/portfolio";

export function HeroMetrics() {
  const migrationMetric = heroMetrics.find((metric) => metric.value === "300K+");
  const integrationsMetric = heroMetrics.find((metric) => metric.value === "10+");

  const metrics = [migrationMetric, integrationsMetric].filter(
    (metric): metric is NonNullable<typeof metric> => Boolean(metric)
  );

  if (!metrics.length) return null;

  return (
    <div className="mt-5 sm:mt-6 flex justify-center lg:justify-start">
      <div className="grid w-full max-w-[460px] grid-cols-2 gap-3">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.value}
            className="min-h-[112px] rounded-xl border border-sky-500/20 bg-sky-500/[0.06] px-4 py-4 text-center flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 + index * 0.06, duration: 0.4 }}
          >
            <p className="font-heading text-2xl font-bold text-sky-300">{metric.value}</p>
            <p className="mt-1 text-xs text-slate-400 leading-snug text-center">
              {metric.value === "300K+" ? "Users migrated to production" : "Third-party integrations"}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
