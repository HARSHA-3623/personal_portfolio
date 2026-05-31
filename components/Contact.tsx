"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText, ArrowUpRight } from "lucide-react";
import { CONTACT, RESUME_URL } from "@/lib/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MagneticButton } from "@/components/ui/MagneticButton";
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
        eyebrow="Get in touch"
        title="Contact"
        subtitle="Interested in backend roles or technical collaboration? I'd like to hear from you."
        align="center"
      />

      <Reveal className="w-full max-w-4xl mx-auto">
        <div className="card-interactive gradient-ring p-8 sm:p-10 lg:p-12 text-center mb-8 sm:mb-10 relative overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-to-br from-sky-500/8 via-transparent to-cyan-500/5 pointer-events-none"
            aria-hidden
          />
          <p className="relative text-lg sm:text-xl lg:text-2xl text-slate-300 font-medium leading-relaxed max-w-2xl mx-auto text-balance font-heading">
            Let&apos;s talk about backend engineering, integrations, or your
            next platform build.
          </p>
          <div className="relative mt-8">
            <MagneticButton href={`mailto:${CONTACT.email}`}>
              Start a conversation
            </MagneticButton>
          </div>
        </div>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-5xl mx-auto">
        {links.map((link, index) => (
          <motion.a
            key={link.label}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="group card-interactive gradient-ring p-5 flex flex-col sm:flex-row lg:flex-col sm:items-center lg:items-stretch justify-between gap-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06 }}
            whileHover={{ y: -3 }}
          >
            <div className="flex items-center gap-3 min-w-0">
              <span className="shrink-0 p-2.5 rounded-xl bg-sky-500/10 text-sky-400 group-hover:bg-sky-500/20 transition-colors">
                <link.icon size={20} />
              </span>
              <div className="min-w-0 text-left">
                <p className="font-heading font-medium text-white">{link.label}</p>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5 line-clamp-2 group-hover:text-slate-400 transition-colors">
                  {link.detail}
                </p>
              </div>
            </div>
            <ArrowUpRight
              size={16}
              className="shrink-0 text-slate-600 group-hover:text-sky-400 self-end sm:self-center lg:self-end transition-all"
            />
          </motion.a>
        ))}
      </div>
    </section>
  );
}
