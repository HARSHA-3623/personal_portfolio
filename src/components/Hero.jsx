import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const titles = ["Harshavardan Naidu", "Web Developer", "Aspiring Software Engineer"];
  const [displayText, setDisplayText] = useState("");
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 100 : 150; // Typing and deleting speed
    const nextTitleDelay = 2000; // Delay before switching to the next title

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
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length); // Cycle through titles
      }
    }, typingSpeed);

    return () => clearTimeout(timeoutId);
  }, [charIndex, isDeleting, currentTitleIndex, titles]);

  return (
    <div className="bg-gradient-to-r from-[#0f2a4f] to-[#1a3e66] text-white h-screen flex items-center justify-center">
      <style>{`html { scroll-behavior: smooth; }`}</style>
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center">
        {/* Left Side: Basic Details with Fade Animation */}
        <motion.div
          className="lg:w-full lg:px-12 text-center lg:text-left space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
          }}
        >
          <h1 className="text-2xl lg:text-4xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="text-[#4cd7d0]">{displayText}</span>
            <span className="blinking-cursor">|</span>
          </h1>
          <p className="text-md lg:text-xl font-medium px-4 lg:px-0 text-justify">
            I am a passionate Web Developer with expertise in HTML, CSS, JavaScript, and React.js.
            With a strong foundation in backend technologies like Java and Python, I enjoy building
            scalable and efficient web applications. My goal is to create seamless digital experiences.
          </p>
          <div className="space-x-4">
            <a
              href="https://drive.google.com/file/d/16xxrmo1zq_2oc-8eUw4Wyn1p9u0VhG2J/view?usp=sharing"
              className="inline-block px-3 py-3 bg-[#4cd7d0] text-[#0f2a4f] font-semibold rounded-md hover:bg-[#3bbfb8] transition-all duration-300"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-block px-3 py-3 border-2 border-[#4cd7d0] text-[#4cd7d0] font-semibold rounded-md hover:bg-[#4cd7d0] hover:text-[#0f2a4f] transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Right Side: Photo with Bounce-and-Scale Animation */}
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
            src="src\assets\Profie.jpg"
            alt="Your Name"
            className="rounded-full shadow-lg w-48 h-48 lg:w-80 lg:h-80 object-cover transition-transform duration-300 hover:scale-105 mb-6 lg:mb-0"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
