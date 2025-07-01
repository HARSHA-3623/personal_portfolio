import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const titles = ["Aspiring FullStack Developer","Tech Enthusiast", "Web Developer", "Backend Developer"];
  const [displayText, setDisplayText] = useState("");
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 100 : 150;
    const nextTitleDelay = 2000;

    const timeoutId = setTimeout(() => {
      const currentTitle = titles[currentTitleIndex];

      if (!isDeleting && charIndex < currentTitle.length) {
        setDisplayText((prev) => prev + currentTitle[charIndex]);
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === currentTitle.length) {
        setTimeout(() => setIsDeleting(true), nextTitleDelay);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeoutId);
  }, [charIndex, isDeleting, currentTitleIndex, titles]);

  return (
    <section
      id="hero"
      className="bg-gradient-to-r from-[#0f2a4f] to-[#1a3e66] text-white min-h-screen flex items-center justify-center px-6 sm:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center w-full space-y-10 lg:space-y-0 lg:space-x-8">
        {/* Left content */}
        <motion.div
          className="lg:w-full text-center lg:text-left space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <h1 className="text-3xl sm:text-3xl lg:text-4xl font-bold font-playfair leading-tight">
            Hi, I'm <span className="text-[#facc15]">Harshavardan</span>{" "}
            <span className="text-[#00f0ff]">Naidu</span> 👋
          </h1>

          <motion.p
            className="text-lg lg:text-2xl font-semibold text-[#4cd7d0] mt-2 font-poppins"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            <span className="text-white">and I'm a </span>
            <span className="ml-2">{displayText}</span>
            <span className="blinking-cursor">|</span>
          </motion.p>

          <p className="text-md lg:text-lg font-poppins text-gray-200 text-justify px-2 lg:px-0">
            I’m a passionate developer skilled in Java, Spring Boot, React.js, and My SQL. I love building efficient and responsive applications that make life easier.
          </p>

          <div className="flex flex-col sm:flex-row items-center sm:justify-start space-y-3 sm:space-y-0 sm:space-x-4">
            <a
              href="https://drive.google.com/file/d/1R_VhlmHYl8EMEfBnLTDn0TPmgHAfbtFn/view?usp=sharing"
              className="inline-block px-5 py-3 bg-[#4cd7d0] text-[#0f2a4f] font-semibold rounded-md hover:bg-[#3bbfb8] transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-block px-5 py-3 border-2 border-[#4cd7d0] text-[#4cd7d0] font-semibold rounded-md hover:bg-[#4cd7d0] hover:text-[#0f2a4f] transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Right profile image */}
        <motion.div
          className="lg:w-1/2 flex justify-center"
          initial={{ scale: 0.8, y: 20, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
            type: "spring",
            stiffness: 120,
            damping: 10,
          }}
        >
          <img
            src="/assets\Profile.png"
            alt="Harshavardan Naidu"
            className="rounded-full shadow-xl w-48 h-48 lg:w-80 lg:h-80 object-cover transition-transform duration-300 hover:scale-105"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
