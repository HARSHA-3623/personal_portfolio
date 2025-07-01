import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Java Trainee – Global Quest Technologies (GQT)",
    duration: "May 2025 – Present",
    description:
      "Hands-on training in Core and Advanced Java including OOPs, JDBC, Servlets, JSP. Working on project development under professional mentorship.",
    certificateLink: "#",
  },
  {
    title: "Full Stack Java Intern – ExcelR Edtech Pvt. Ltd. & APSCHE",
    duration: "July 2024 – August 2024",
    description:
      "Learned Full Stack Java including Spring Boot, REST APIs, HTML, CSS, JS, and MySQL. Built and deployed web-based mini projects during the internship.",
    certificateLink:
      "https://drive.google.com/file/d/1qaVptAMJywbiYHZeZl4IMP-yX1VVKatn/view?usp=sharing",
  },
];

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="bg-gradient-to-r from-[#0f2a4f] to-[#1a3e66] text-white py-20 px-6 sm:px-10 xl:px-20 font-poppins"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-12 text-[#4cd7d0] font-playfair"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>

        <div className="grid gap-10 sm:grid-cols-2">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              className="bg-[#1f4a6e] rounded-xl p-6 shadow-lg hover:shadow-2xl transition duration-300 border border-[#4cd7d0]/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-[#81ecec] font-playfair mb-2">
                {experience.title}
              </h3>
              <span className="text-sm sm:text-base text-gray-300 block mb-3">
                {experience.duration}
              </span>
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed mb-3">
                {experience.description}
              </p>
              <a
                href={experience.certificateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm sm:text-base text-[#4cd7d0] hover:underline"
              >
                View Certificate
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
