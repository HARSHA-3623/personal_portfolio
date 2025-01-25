import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-r from-[#0f2a4f] to-[#1a3e66] text-white py-16 px-6 sm:px-12 lg:px-24"
    >
      <style>{`html { scroll-behavior: smooth; }`}</style>
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-bold text-center mb-8 sm:mb-12 text-[#4cd7d0]"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <div className="flex flex-col lg:flex-row lg:space-x-12">
          {/* About Me Description */}
          <motion.div
            className="lg:w-2/3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-lg leading-8 mb-6">
              Hello! I'm Harsha, a final-year Information Technology student at Sir C R Reddy College of Engineering.
              I have a strong foundation in web development, with expertise in frontend technologies like HTML, CSS, JavaScript, and React.js,
              along with backend technologies such as Java and Python. I’ve built impactful projects such as an Inventory Management System using Spring Boot,
              a Netflix clone website with Tailwind CSS, a BMI calculator, and a Movie Review System powered by the OMDB API, showcasing my creativity and technical expertise.
            </p>
            <p className="text-lg leading-8">
              Outside of coding, I enjoy participating in technical events and have won accolades in quizzes and competitions.
              I'm passionate about continuous learning, having completed internships in Full Stack Java and Salesforce, and earning an NPTEL certification in Java programming.
            </p>
          </motion.div>

          {/* Additional Details or Highlights */}
          <motion.div
            className="lg:w-1/3 mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-[#4cd7d0]">
              Highlights
            </h3>
            <ul className="space-y-3 lg:text-lg">
              <li className="flex items-center">
                <span className="text-xl">🎯 Completed 5+ projects in web development</span>
              </li>
              <li className="flex items-center">
                <span className="text-xl">📦 Inventory Management System with Spring Boot</span>
              </li>
              <li className="flex items-center">
                <span className="text-xl">🎬 Netflix clone website using Tailwind CSS</span>
              </li>
              <li className="flex items-center">
                <span className="text-xl">☁️ Weather Forecast Application with OpenWeather API</span>
              </li>
              <li className="flex items-center">
                <span className="text-xl">🎓 Certified in Java Programming (NPTEL)</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
