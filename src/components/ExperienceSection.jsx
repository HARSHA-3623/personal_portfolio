import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Salesforce Administrator Internship",
    duration: "April 2023 - May 2023",
    description:
      "Gained hands-on experience in CRM management systems, earned 42 Trailhead badges, and accumulated 57,550 points. Achieved the rank of Mountaineer Badger.",
    certificateLink:
      "https://drive.google.com/file/d/1iFjI32avmWq6i2c2ja8MXZs6oMIA_dzL/view?usp=sharing",
  },
  {
    title: "IBM SkillsBuild Internship in Cybersecurity",
    duration: "October 13, 2023 - November 26, 2023",
    description:
      "Worked on the Steganography project, gaining valuable experience in cybersecurity concepts and practical implementations.",
    certificateLink:
      "https://drive.google.com/file/d/1o6mFP90lHRj3QsAx-HmZIY9LafgeAxjp/view?usp=sharing",
  },
  {
    title: "Java Full-Stack Internship",
    duration: "June 15, 2024 - July 31, 2024",
    description:
      "Worked on Spring Boot projects, developing full-stack applications and enhancing backend and frontend integration skills.",
    certificateLink:
      "https://drive.google.com/file/d/1qaVptAMJywbiYHZeZl4IMP-yX1VVKatn/view?usp=sharing",
  },
];

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="bg-gradient-to-r from-[#0f2a4f] to-[#1a3e66] text-white py-16 px-6 sm:px-12 lg:px-24"
    >
      <style>{`html { scroll-behavior: smooth; }`}</style>
      <div className="max-w-7xl mx-auto">
        {/* Section Title Animation */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-[#4cd7d0]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>

        <div className="relative border-l-2 border-[#4cd7d0] pl-6 mx-auto lg:max-w-4xl">
          {experiences.map((experience, index) => (
            <div key={index} className="mb-10 last:mb-0">
              <div className="absolute -left-3 w-6 h-6 bg-[#4cd7d0] rounded-full border-2 border-white"></div>
              {/* Title Animation */}
              <motion.h3
                className="text-xl sm:text-2xl font-bold mb-2"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              >
                {experience.title}
              </motion.h3>

              {/* Duration Animation */}
              <motion.span
                className="text-sm sm:text-base text-gray-300 block mb-2"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.3,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              >
                {experience.duration}
              </motion.span>

              {/* Description Animation */}
              <motion.p
                className="text-sm sm:text-base text-gray-200 leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.4,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              >
                {experience.description}
              </motion.p>

              {/* Certificate Link Animation */}
              <motion.a
                href={experience.certificateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm sm:text-base text-[#4cd7d0] mt-2 block"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.5,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              >
                View Certificate
              </motion.a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
