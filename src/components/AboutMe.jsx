import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-r from-[#0f2a4f] to-[#1a3e66] text-white mb-10 py-20 px-4 sm:px-6 lg:px-12 xl:px-20 font-poppins min-h-screen flex items-center"
    >
      <div className="w-full">
        {/* Section Title */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center text-[#4cd7d0] mb-5 font-playfair"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-6 xl:gap-12 items-stretch">
          {/* About Me Description */}
          <motion.div
            className="w-full lg:w-full bg-opacity-10 p-6 xl:p-8 rounded-xl shadow-md backdrop-blur-sm bg-white/5"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-base leading-7 mb-4 text-justify">
              Hello! I'm{" "}
              <span className="text-[#facc15] font-semibold">
                Harshavardan Naidu
              </span>
              , a passionate and dedicated Information Technology graduate from
              Sir C R Reddy College of Engineering. I specialize in full stack
              web development, with strong skills in <strong>Java</strong>,{" "}
              <strong>Spring Boot</strong>, <strong>React.js</strong>, and{" "}
              <strong>Tailwind CSS</strong>. I’m driven by a passion for
              building clean, scalable, and intuitive web applications.
            </p>
            <p className="text-base leading-7 text-justify">
              My projects include a powerful{" "}
              <strong>Course Management System</strong>, a dynamic{" "}
              <strong>Quiz App</strong>, and a feature-rich{" "}
              <strong>E-Commerce Application</strong> built using Java Swing. I
              also created a <strong>Weather App</strong> using the OpenWeather
              API and a responsive <strong>Netflix Clone</strong>.
            </p>
            <p className="text-base leading-7 text-justify">
              I'm currently open to opportunities as a{" "}
              <span className="text-[#4cd7d0] font-semibold">
                Software Development Engineer (SDE)
              </span>
              , with a strong interest in roles involving{" "}
              <span className="text-[#4cd7d0] font-semibold">
                Full Stack Development
              </span>
              ,{" "}
              <span className="text-[#4cd7d0] font-semibold">
                Java-based backend systems
              </span>
              ,{" "}
              <span className="text-[#4cd7d0] font-semibold">
                modern frontend technologies
              </span>
              , and{" "}
              <span className="text-[#4cd7d0] font-semibold">
                MySQL-driven data handling
              </span>
              . I’m eager to contribute to innovative teams by delivering
              scalable, maintainable, and impactful software solutions.
            </p>
          </motion.div>

          {/* Highlights */}
          <motion.div
            className="w-full lg:w-1/2 bg-opacity-10 p-6 xl:p-8 rounded-xl shadow-md backdrop-blur-sm bg-white/5"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4 text-[#4cd7d0] font-playfair text-center">
              Highlights
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span>✅</span>
                <span>
                  Developed 7+ real-world projects using Java, React & Spring
                  Boot
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span>🛒</span>
                <span>
                  E-Commerce App with shopping cart, billing & UI modules
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span>🎓</span>
                <span>
                  Course Management System for professor-student management
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span>🧠</span>
                <span>
                  Quiz App with timer, score tracking, and dynamic questions
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span>🎬</span>
                <span>Netflix Clone with responsive Tailwind CSS UI</span>
              </li>
              <li className="flex items-start gap-2">
                <span>📜</span>
                <span>Certified in Java Programming (NPTEL)</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
