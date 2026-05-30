import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, FileText } from "lucide-react";
import emailjs from "@emailjs/browser";
import { CONTACT, RESUME_URL } from "../data/portfolio";
import SectionHeader from "./SectionHeader";

export default function ContactMe() {
  const formRef = useRef();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send("service_5w0xord", "template_9n5c731", formData, "1kTcw0zHqh_wK5y_w")
      .then(() => {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Failed to send message. Please try again later.");
      });
  };

  return (
    <section id="contact" className="section-padding" aria-labelledby="contact-heading">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          title="Contact"
          subtitle="Open to backend engineering opportunities and technical conversations"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="card p-6 space-y-5"
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wide">
              Connect
            </h3>
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-slate-300 hover:text-sky-400 transition-colors"
            >
              <Github size={18} className="text-sky-500" />
              GitHub — HARSHA-3623
            </a>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-slate-300 hover:text-sky-400 transition-colors"
            >
              <Linkedin size={18} className="text-sky-500" />
              LinkedIn — Harshavardan Naidu
            </a>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-slate-300 hover:text-sky-400 transition-colors"
            >
              <FileText size={18} className="text-sky-500" />
              Resume
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-3 text-slate-300 hover:text-sky-400 transition-colors"
            >
              <Mail size={18} className="text-sky-500" />
              {CONTACT.email}
            </a>
          </motion.div>

          <motion.form
            ref={formRef}
            className="card p-6"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-4">
              Send a message
            </h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-xs text-slate-500 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 rounded-lg bg-[#0d1219] border border-[var(--border)] text-white text-sm focus:outline-none focus:border-sky-500/50"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs text-slate-500 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 rounded-lg bg-[#0d1219] border border-[var(--border)] text-white text-sm focus:outline-none focus:border-sky-500/50"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs text-slate-500 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 rounded-lg bg-[#0d1219] border border-[var(--border)] text-white text-sm focus:outline-none focus:border-sky-500/50 resize-y"
                />
              </div>
              <button type="submit" className="btn-primary w-full">
                {submitted ? "Message Sent" : "Send Message"}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
