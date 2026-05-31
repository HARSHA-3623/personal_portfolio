"use client";

import { motion } from "framer-motion";
import { impactStats } from "@/lib/data/portfolio";
import clsx from "clsx";

type Props = {
  id?: string;
  className?: string;
  variant?: "hero" | "compact";
};

export function ImpactMetrics({ id, className, variant = "hero" }: Props) {
  const isHero = variant === "hero";

  return (
    <div
      id={id}
      className={clsx(
        "scroll-target grid grid-cols-2 gap-3 sm:gap-4",
        isHero && "lg:gap-4",
        className
      )}
    >
      {impactStats.map((stat, index) => (
        <motion.div
          key={stat.label}
          className={clsx(
            "group card-interactive gradient-ring flex flex-col justify-center",
            isHero ? "p-4 sm:p-5 lg:p-6 min-h-[108px] lg:min-h-[120px]" : "p-4 sm:p-5"
          )}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.5 + index * 0.08 }}
          whileHover={{ y: -3 }}
        >
          <p
            className={clsx(
              "font-bold text-sky-400 tracking-tight font-heading",
              isHero ? "text-xl sm:text-2xl lg:text-3xl" : "text-xl sm:text-2xl"
            )}
          >
            {stat.value}
          </p>
          <p
            className={clsx(
              "mt-1.5 text-slate-500 leading-snug group-hover:text-slate-400 transition-colors",
              isHero ? "text-xs sm:text-sm" : "text-xs sm:text-sm"
            )}
          >
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
