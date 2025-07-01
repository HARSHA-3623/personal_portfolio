import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsOpen(false); // Close menu if clicking logo on mobile
  };

  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Close mobile menu
  };

  return (
    <nav className="bg-gradient-to-r from-[#0f2a4f] to-[#1a3e66] text-white fixed w-full z-10 animate-fadeIn font-poppins">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&family=Poppins:wght@400;600&display=swap');
        .font-poppins {
          font-family: 'Poppins', sans-serif;
        }
        .font-playfair {
          font-family: 'Playfair Display', serif;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14"> {/* reduced height */}
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer">
            <h1
              onClick={handleScrollToTop}
              className="text-xl sm:text-2xl font-bold transition-transform duration-300 hover:scale-105 font-playfair"
            >
              <span className="text-[#facc15]">Harshavardan</span>{" "}
              <span className="text-white">Naidu</span>
            </h1>
          </div>

          {/* Hamburger menu */}
          <div className="-mr-2 flex sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-transparent inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white hover:text-[#0f2a4f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0f2a4f] focus:ring-white transition-all duration-300"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop nav */}
          <div className="hidden sm:block">
            <div className="flex space-x-6">
              {["about", "projects", "skills", "experience", "contact"].map(
                (link) => (
                  <a
                    key={link}
                    href={`#${link}`}
                    onClick={(e) => handleLinkClick(e, link)}
                    className="px-4 py-2 rounded-md text-lg font-semibold hover:bg-white hover:text-[#0f2a4f] transition-colors duration-300"
                  >
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden animate-slideDown" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {["about", "projects", "skills", "experience", "contact"].map(
              (link) => (
                <a
                  key={link}
                  href={`#${link}`}
                  onClick={(e) => handleLinkClick(e, link)}
                  className="block px-4 py-2 rounded-md text-lg font-semibold hover:bg-white hover:text-[#0f2a4f] transition-colors duration-300"
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </a>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
