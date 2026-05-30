import { motion } from "framer-motion";
import { heroStats, RESUME_URL } from "../data/portfolio";

const Hero = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center section-padding pt-28"
      aria-label="Introduction"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sky-400 text-sm font-medium tracking-wide uppercase mb-4">
            Production Backend Systems
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Harshavardan Naidu
          </h1>
          <p className="mt-3 text-xl sm:text-2xl text-slate-300 font-medium">
            Backend Engineer
          </p>
          <p className="mt-6 max-w-3xl text-base sm:text-lg text-slate-400 leading-relaxed">
            Building scalable transaction-driven systems for iGaming platforms.
            Experienced in payment integrations, affiliate systems, KYC workflows,
            user migration initiatives, transaction processing, and production
            reliability.
          </p>
          <p className="mt-4 text-sm text-slate-500">
            Node.js · PostgreSQL · Redis · Integrations · Production Systems
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => scrollTo("experience")}
              className="btn-primary"
            >
              View Experience
            </button>
            <a
              href={RESUME_URL}
              className="btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
            <button
              type="button"
              onClick={() => scrollTo("contact")}
              className="btn-secondary"
            >
              Contact Me
            </button>
          </div>
        </motion.div>

        <motion.div
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {heroStats.map((stat) => (
            <div key={stat.label} className="card p-5">
              <p className="text-2xl font-semibold text-sky-400">{stat.value}</p>
              <p className="mt-2 text-sm text-slate-400 leading-snug">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
