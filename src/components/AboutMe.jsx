import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="scroll-mt-[20px] bg-gradient-to-r from-[#0f2a4f] to-[#1a3e66] text-white py-12 px-6 sm:px-10 lg:px-16"
    >
      <style>{`html { scroll-behavior: smooth; }`}</style>
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.h2
          className="text-3xl font-bold text-center mb-6 sm:mb-10 text-[#4cd7d0]"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <div className="flex flex-col lg:flex-row lg:gap-8 items-stretch">
          {/* About Me Description */}
          <motion.div
            className="lg:w-1/2 flex flex-col justify-between bg-opacity-10 p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-base leading-7 mb-4 flex-grow text-justify">
              Hello! I'm Harshavardan Naidu, a final-year Information Technology student at Sir C R Reddy College of Engineering.
              I have a strong foundation in web development, with expertise in frontend technologies like HTML, CSS, JavaScript, and React.js,
              along with backend technologies such as Java and Python. I’ve built impactful projects such as an Inventory Management System using Spring Boot,
              a Netflix clone website with Tailwind CSS, a BMI calculator, and a Movie Review System powered by the OMDB API, showcasing my creativity and technical expertise.
            </p>
            <p className="text-base leading-7 text-justify">
              Outside of coding, I enjoy participating in technical events and have won accolades in quizzes and competitions.
              I'm passionate about continuous learning, having completed internships in Full Stack Java and Salesforce, and earning an NPTEL certification in Java programming.
            </p>
          </motion.div>

          {/* Additional Details or Highlights */}
          <motion.div
            className="lg:w-1/2 flex flex-col justify-between bg-opacity-10 p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-3 text-[#4cd7d0]">
              Highlights
            </h3>
            <ul className="space-y-2 flex-grow">
              <li className="text-base">🎯 Completed 5+ projects in web development</li>
              <li className="text-base">📦 Inventory Management System with Spring Boot</li>
              <li className="text-base">🎬 Netflix clone website using Tailwind CSS</li>
              <li className="text-base">☁️ Weather Forecast Application with OpenWeather API</li>
              <li className="text-base">🎓 Certified in Java Programming (NPTEL)</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
