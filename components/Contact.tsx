"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText, ArrowUpRight } from "lucide-react";
import { CONTACT, RESUME_URL } from "@/lib/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

const links = [
  {
    label: "GitHub",
    href: CONTACT.github,
    icon: Github,
    detail: "HARSHA-3623",
    external: true,
  },
  {
    label: "LinkedIn",
    href: CONTACT.linkedin,
    icon: Linkedin,
    detail: "Connect professionally",
    external: true,
  },
  {
    label: "Email",
    href: `mailto:${CONTACT.email}`,
    icon: Mail,
    detail: CONTACT.email,
    external: false,
  },
  {
    label: "Resume",
    href: RESUME_URL,
    icon: FileText,
    detail: "Download PDF",
    external: true,
  },
];

export function Contact() {
  return (
    <section id="contact" className="scroll-target section-pad pb-24 sm:pb-28">
      <SectionHeader
        eyebrow="Contact"
        title="Get in touch"
        subtitle="Interested in backend roles or technical collaboration? I'd like to hear from you."
        align="center"
      />

      <Reveal className="w-full max-w-xl mx-auto text-center mb-10">
        <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
          Let&apos;s talk about backend engineering, integrations, or your
          next platform build.
        </p>
        <a
          href={`mailto:${CONTACT.email}`}
          className="inline-flex items-center justify-center mt-6 px-5 py-2.5 text-sm font-medium rounded-lg bg-white text-zinc-950 hover:bg-zinc-200 transition-colors duration-200"
        >
          Start a conversation
        </a>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
        {links.map((link, index) => (
          <motion.a
            key={link.label}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="group surface-card p-4 flex items-center justify-between gap-3"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
          >
            <div className="flex items-center gap-3 min-w-0">
              <span className="shrink-0 p-2 rounded-lg bg-white/[0.04] text-zinc-400 group-hover:text-zinc-300 transition-colors">
                <link.icon size={16} />
              </span>
              <div className="min-w-0 text-left">
                <p className="font-heading text-sm font-medium text-white">
                  {link.label}
                </p>
                <p className="text-xs text-zinc-600 mt-0.5 truncate group-hover:text-zinc-500 transition-colors">
                  {link.detail}
                </p>
              </div>
            </div>
            <ArrowUpRight
              size={14}
              className="shrink-0 text-zinc-700 group-hover:text-zinc-400 transition-colors"
            />
          </motion.a>
        ))}
      </div>
    </section>
  );
}
