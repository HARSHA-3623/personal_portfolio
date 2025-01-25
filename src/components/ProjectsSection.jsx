import React from "react";
import { motion } from "framer-motion";

const projects = [
    {
        title: "Inventory Management System",
        description: "A web application built using Spring Boot for managing store inventory and stock levels with a clean UI design.",
        image: "https://spherewms.com/wp-content/uploads/2024/01/SPH-Whse-Inv-Mgmt-Blog-shutterstock_1930996376-1.webp",
        techStack: ["Spring Boot", "MySQL", "Java"],
        liveDemo: "#",
        github: "https://github.com/HARSHA-3623/Ecom-proj",
    },
    {
        title: "Netflix Clone Website",
        description: "A Netflix clone website built with Tailwind CSS, showcasing popular movies and TV shows with a clean UI design and responsive layout for all devices.",
        image: "https://www.codewithrandom.com/wp-content/uploads/2022/08/Snapshot_22-08-11_14-06-52.png",
        techStack: ["Tailwind CSS", "HTML"],
        liveDemo: "https://netflix-clone-by-harsha.vercel.app/",
        github: "https://github.com/HARSHA-3623/Netflix-Clone",
    },
    {
        title: "BMI Calculator",
        description: "A simple BMI calculator that computes Body Mass Index based on weight and height inputs with a clean design and responsive layout for all devices.",
        image: "https://d3lzcn6mbbadaf.cloudfront.net/media/details/ANI-20241010093744.jpg",
        techStack: ["JavaScript", "HTML", "CSS"],
        liveDemo: "#",
        github: "#",
    },
    {
        title: "Weather Forecast App",
        description: "Displays real-time weather data using the OpenWeather API with a clean design and responsive layout for all devices.",
        image: "https://play-lh.googleusercontent.com/HOnQyPxVCPr7W50rXUp6bu1-UZo2bM_GuQ9coNItncFrP117qbkadZpc60qVmJ5-kw=w526-h296-rw",
        techStack: ["OpenWeather API", "CSS"],
        liveDemo: "https://weather-app-mu-azure.vercel.app/",
        github: "https://github.com/HARSHA-3623/Weather_app",
    },
    {
        title: "Movie Review System",
        description: "Search and review movies with details like plot, ratings, and release year, powered by the OMDB API.",
        image: "https://watchmoviesreview.wordpress.com/wp-content/uploads/2019/10/terminator_rt_29reviews_10222019.jpg",
        techStack: ["OMDB API", "Bootstrap"],
        liveDemo: "#",
        github: "#",
    },
    {
        title: "Heart Disease Prediction",
        description: "A machine learning model predicting heart disease likelihood based on health metrics.",
        image: "https://dvl2h13awlxkt.cloudfront.net/assets/general-images/Knowledge/_1200x630_crop_center-center_82_none/Coronary-heart-disease.jpg?mtime=1657262027",
        techStack: ["Python", "Scikit-Learn", "Pandas"],
        liveDemo: "https://colab.research.google.com/drive/1DC9lwvPQ-YEeKHju9XMmPP5zTlqVrB9A?usp=sharing",
        github: "#",
    },
];
  

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="bg-gradient-to-r from-[#0f2a4f] to-[#1a3e66] text-white py-16 px-6 sm:px-12 lg:px-24"
    >
      <style>{`html { scroll-behavior: smooth; }`}</style>
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-[#4cd7d0]">
          Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white text-black rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 overflow-hidden text-sm sm:text-base"
              style={{ maxWidth: "450px", margin: "0 auto", height: "100%" }}
              initial={{ opacity: 0, y: 50 }} // Animation Start
              whileInView={{ opacity: 1, y: 0 }} // Animation End
              viewport={{ once: true }} // Trigger animation only once
              transition={{ duration: 0.5, delay: index * 0.2 }} // Timing
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 sm:h-46 lg:h-48 object-cover"
                loading="lazy"
              />
              <div className="p-4 sm:p-5">
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-[#0f2a4f]">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base leading-6 text-gray-700 mb-3">
                  {project.description}
                </p>
                <ul className="flex flex-wrap gap-2 mb-4 text-xs sm:text-sm text-gray-600">
                  {project.techStack.map((tech, techIndex) => (
                    <li
                      key={techIndex}
                      className="bg-gray-200 px-2 py-1 rounded"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between items-center">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
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