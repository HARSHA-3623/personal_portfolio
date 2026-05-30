import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const AboutMe = () => {
  return (
    <section id="about" className="section-padding section-surface" aria-labelledby="about-heading">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          title="About"
          subtitle="Backend engineering focused on production systems and integrations"
        />
        <motion.div
          className="card p-6 sm:p-8 space-y-5 text-slate-300 leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p>
            Backend Engineer with experience building and maintaining scalable
            iGaming platforms using{" "}
            <span className="text-white font-medium">Node.js</span>,{" "}
            <span className="text-white font-medium">Express.js</span>,{" "}
            <span className="text-white font-medium">PostgreSQL</span>, and{" "}
            <span className="text-white font-medium">Redis</span>.
          </p>
          <p>
            Experienced in developing REST APIs, integrating casino providers,
            payment gateways, affiliate platforms, and third-party services.
          </p>
          <p>
            Strong background in production support, root cause analysis,
            debugging backend systems, transaction processing, affiliate tracking,
            user migrations, and system integrations.
          </p>
          <p>
            Passionate about building reliable backend systems and solving
            production challenges.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
