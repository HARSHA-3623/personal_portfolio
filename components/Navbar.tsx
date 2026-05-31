"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/lib/data/portfolio";
import { useActiveSection } from "@/hooks/useActiveSection";
import { scrollToSection } from "@/lib/scroll";
import clsx from "clsx";

const SECTION_IDS = ["hero", ...navLinks.map((l) => l.id)];

const MENU_CLOSE_MS = 320;

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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNavClick = useCallback(
    (id: string) => {
      const wasOpen = open;
      setOpen(false);
      scrollToSection(id, {
        delay: wasOpen ? MENU_CLOSE_MS : 0,
      });
    },
    [open]
  );

  const scrollTop = () => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (history.replaceState) history.replaceState(null, "", " ");
  };

  return (
    <motion.header
      data-site-header
      className={clsx(
        "fixed top-0 w-full z-50 transition-all duration-500",
        scrolled
          ? "py-2.5 bg-[#080b0f]/80 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/25"
          : "py-3.5 bg-[#080b0f]/40 backdrop-blur-md"
      )}
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-wide flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={scrollTop}
          className="font-heading text-sm font-semibold text-white hover:text-sky-400 transition-colors shrink-0"
        >
          <span className="sm:hidden">HN</span>
          <span className="hidden sm:inline">Harshavardan Naidu</span>
          <span className="hidden lg:inline text-slate-500 font-normal font-sans ml-2 text-xs">
            Backend Engineer
          </span>
        </button>

        <nav
          className="hidden lg:flex items-center gap-1 flex-1 justify-center max-w-2xl mx-auto"
          aria-label="Main"
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => handleNavClick(link.id)}
              className={clsx(
                "relative px-4 py-2 text-sm rounded-lg transition-colors duration-300 whitespace-nowrap",
                active === link.id
                  ? "text-sky-300"
                  : "text-slate-500 hover:text-slate-300"
              )}
            >
              {active === link.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-sky-500/12 border border-sky-500/25 rounded-lg shadow-sm shadow-sky-500/10"
                  transition={{ type: "spring", stiffness: 380, damping: 28 }}
                />
              )}
              <span className="relative z-10 font-medium">{link.label}</span>
            </button>
          ))}
        </nav>

        <button
          type="button"
          className="lg:hidden p-2.5 rounded-xl text-slate-400 hover:bg-white/[0.06] hover:text-white shrink-0"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              className="fixed inset-0 z-40 bg-black/50 lg:hidden cursor-default"
              aria-label="Close menu overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              id="mobile-menu"
              className="lg:hidden relative z-50 mx-4 sm:mx-8 mt-2 rounded-2xl bg-[#0f1419]/98 backdrop-blur-xl border border-white/[0.1] shadow-2xl overflow-hidden"
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.25 }}
            >
              <nav className="p-2" aria-label="Mobile">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() => handleNavClick(link.id)}
                    className={clsx(
                      "block w-full text-left px-4 py-3.5 text-base rounded-xl transition-colors font-medium",
                      active === link.id
                        ? "text-sky-300 bg-sky-500/12 border border-sky-500/20"
                        : "text-slate-300 hover:text-white hover:bg-white/[0.05]"
                    )}
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
