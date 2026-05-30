import { motion } from "framer-motion";

export default function SectionHeader({ title, subtitle }) {
  return (
    <motion.div
      className="mb-12 text-center"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-slate-400">
          {subtitle}
        </p>
      )}
      <div className="mt-4 mx-auto h-px w-16 bg-sky-500/60" />
    </motion.div>
  );
}
