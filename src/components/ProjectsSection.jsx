import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "E-Commerce App (Swing)",
    description: "A GUI-based shopping cart system in Java Swing.",
    image: "https://images.unsplash.com/photo-1664455340023-214c33a9d0bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RWNvbW1lcmNlfGVufDB8MHwwfHx8Mg%3D%3D",
    techStack: ["Java", "Swing"],
    liveDemo: "#",
    github: "#",
  },
  {
    title: "Course Management System (Swing)",
    description: "Java Swing app for managing courses and users.",
    image: "https://sprout24.com/wp-content/uploads/2021/06/lms-.png",
    techStack: ["Java", "Swing"],
    liveDemo: "#",
    github: "https://github.com/HARSHA-3623/Course-Management-System",
  },
  {
    title: "Quiz App (Swing)",
    description: "Interactive quiz app using Java Swing with timer and score.",
    image: "https://projectgurukul.org/wp-content/uploads/2023/06/quiz-application.webp",
    techStack: ["Java", "Swing"],
    liveDemo: "#",
    github: "https://github.com/HARSHA-3623/SwingQuizApp",
  },
  {
    title: "Inventory Management System",
    description: "A web app using Spring Boot for inventory and stock management.",
    image: "https://spherewms.com/wp-content/uploads/2024/01/SPH-Whse-Inv-Mgmt-Blog-shutterstock_1930996376-1.webp",
    techStack: ["Spring Boot", "MySQL", "Java"],
    liveDemo: "#",
    github: "https://github.com/HARSHA-3623/Ecom-proj",
  },
  {
    title: "Weather Forecast App",
    description: "Real-time weather data using OpenWeather API.",
    image: "/assets/weather.webp",
    techStack: ["OpenWeather API", "CSS"],
    liveDemo: "https://weather-app-mu-azure.vercel.app/",
    github: "https://github.com/HARSHA-3623/Weather_app",
  },
  {
    title: "Netflix Clone Website",
    description: "Netflix UI clone with Tailwind CSS and responsive design.",
    image: "https://www.codewithrandom.com/wp-content/uploads/2022/08/Snapshot_22-08-11_14-06-52.png",
    techStack: ["Tailwind CSS", "HTML"],
    liveDemo: "https://netflix-clone-by-harsha.vercel.app/",
    github: "https://github.com/HARSHA-3623/Netflix-Clone",
  },
];

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className=" text-white py-20 px-6 sm:px-10 xl:px-20 font-poppins"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-14 text-[#4cd7d0] font-playfair">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-[#102a44] rounded-2xl text-white shadow-xl hover:shadow-[#4cd7d0]/30 hover:scale-[1.02] transition-all duration-300 border border-[#1e3b57] hover:border-[#4cd7d0] overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              {/* Project Image */}
              <div className="w-full h-40 bg-[#1a3e66] flex items-center justify-center overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover"
                />
              </div>

              {/* Project Content */}
              <div className="p-5 flex flex-col justify-between min-h-[240px]">
                <div>
                  <h3 className="text-xl font-semibold text-[#81ecec] mb-2 font-playfair">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-200 mb-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-3">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-[#1e3f5f] px-2 py-1 rounded-full border border-[#4cd7d0] text-[#d1f4f3]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between text-sm text-[#4cd7d0] font-medium pt-3 border-t border-[#1f4b6b]">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
