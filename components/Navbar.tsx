"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/lib/data/portfolio";
import { useActiveSection } from "@/hooks/useActiveSection";
import clsx from "clsx";

const SECTION_IDS = ["hero", ...navLinks.map((l) => l.id)];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const ids = useMemo(() => SECTION_IDS, []);
  const active = useActiveSection(ids);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <motion.header
      className={clsx(
        "fixed top-0 w-full z-50 transition-all duration-500",
        scrolled
          ? "py-2.5 bg-[#080b0f]/75 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/20"
          : "py-4 bg-transparent"
      )}
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-sm font-semibold text-white hover:text-sky-400 transition-colors"
        >
          HN
          <span className="hidden sm:inline text-slate-500 font-normal ml-2">
            Backend Engineer
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-0.5" aria-label="Main">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => scrollTo(link.id)}
              className={clsx(
                "relative px-3 py-2 text-sm rounded-lg transition-colors duration-300",
                active === link.id
                  ? "text-sky-300"
                  : "text-slate-500 hover:text-slate-300"
              )}
            >
              {active === link.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-sky-500/10 border border-sky-500/20 rounded-lg"
                  transition={{ type: "spring", stiffness: 380, damping: 28 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </button>
          ))}
        </nav>

        <button
          type="button"
          className="md:hidden p-2 rounded-lg text-slate-400 hover:bg-white/[0.05]"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden mx-4 mt-2 rounded-2xl bg-[#0f1419]/95 backdrop-blur-xl border border-white/[0.08] overflow-hidden"
            initial={{ opacity: 0, y: -8, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -8, height: 0 }}
          >
            <div className="p-3 space-y-0.5">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => scrollTo(link.id)}
                  className={clsx(
                    "block w-full text-left px-4 py-3 text-sm rounded-xl transition-colors",
                    active === link.id
                      ? "text-sky-300 bg-sky-500/10"
                      : "text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]"
                  )}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
