import { useState } from "react";

const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "impact", label: "Impact" },
  { id: "case-studies", label: "Case Studies" },
  { id: "work", label: "Work" },
  { id: "integrations", label: "Integrations" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  };

  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav
      className="fixed w-full z-50 border-b border-[var(--border)] bg-[#090c10]/90 backdrop-blur-md animate-fadeIn"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          <button
            type="button"
            onClick={handleScrollToTop}
            className="text-sm sm:text-base font-semibold text-white hover:text-sky-400 transition-colors"
          >
            Harshavardan Naidu
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="sm:hidden p-2 rounded-md text-slate-300 hover:text-white"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <div className="hidden lg:flex gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleLinkClick(e, link.id)}
                className="px-3 py-2 text-sm text-slate-400 hover:text-sky-400 transition-colors rounded-md"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden sm:flex lg:hidden gap-1">
            {navLinks.slice(0, 5).map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleLinkClick(e, link.id)}
                className="px-2 py-2 text-xs text-slate-400 hover:text-sky-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden border-t border-[var(--border)] animate-slideDown" id="mobile-menu">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleLinkClick(e, link.id)}
                className="block px-3 py-2 text-sm text-slate-400 hover:text-sky-400 rounded-md"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
