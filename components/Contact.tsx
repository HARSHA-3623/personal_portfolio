"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { CONTACT, RESUME_URL } from "@/lib/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MagneticButton } from "@/components/ui/MagneticButton";

const links = [
  {
    label: "GitHub",
    href: CONTACT.github,
    icon: Github,
    detail: "HARSHA-3623",
  },
  {
    label: "LinkedIn",
    href: CONTACT.linkedin,
    icon: Linkedin,
    detail: "Harshavardan Naidu",
  },
  {
    label: "Email",
    href: `mailto:${CONTACT.email}`,
    icon: Mail,
    detail: CONTACT.email,
  },
  {
    label: "Resume",
    href: RESUME_URL,
    icon: FileText,
    detail: "Download PDF",
  },
];

export function Contact() {
  return (
    <section id="contact" className="section-pad pb-32">
      <SectionHeader
        title="Contact"
        subtitle="Open to backend engineering opportunities"
      />
      <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
        {links.map((link, index) => (
          <motion.a
            key={link.label}
            href={link.href}
            target={link.label !== "Email" ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="group glass rounded-xl p-5 flex items-center gap-4 hover:border-sky-500/30 transition-all duration-300"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            whileHover={{ y: -2 }}
          >
            <span className="p-2.5 rounded-lg bg-sky-500/10 text-sky-400 group-hover:bg-sky-500/20 transition-colors">
              <link.icon size={20} />
            </span>
            <div>
              <p className="font-medium text-white">{link.label}</p>
              <p className="text-sm text-slate-500 mt-0.5">{link.detail}</p>
            </div>
          </motion.a>
        ))}
      </div>
      <motion.div
        className="mt-10 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <MagneticButton href={`mailto:${CONTACT.email}`}>
          Send Email
        </MagneticButton>
      </motion.div>
    </section>
  );
}
