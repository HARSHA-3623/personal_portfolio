import React, { useEffect, useState } from "react";

const skills = [
  {
    name: "Frontend",
    skills: [
      { name: "HTML", level: 90, image: "./assets/Html.png" },
      { name: "CSS", level: 85, image: "./assets/css.png" },
      { name: "JavaScript", level: 75, image: "./assets/JS.png" },
      { name: "React.js", level: 50, image: "./assets/react.png" },
    ],
  },
  {
    name: "Programming & Tools",
    skills: [
      { name: "Java", level: 65, image: "./assets/java.png" },
      { name: "Python", level: 50, image: "./assets/python.png" },
      { name: "MySQL", level: 60, image: "./assets/mysql.png" },
      { name: "Git", level: 85, image: "./assets/git.png" },
    ],
  },
];

const SkillsSection = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleIntersection = (entries, observer) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setAnimate(true);
        observer.disconnect(); // Stop observing after the animation starts
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // Trigger when 50% of the section is visible
    });

    const section = document.getElementById("skills");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      className="bg-gradient-to-r from-[#0f2a4f] to-[#1a3e66] text-white py-16 px-6 sm:px-12 lg:px-24"
    >
      <style>{`html { scroll-behavior: smooth; }`}</style>
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-[#4cd7d0]">
          Skills
        </h2>

        <div className="flex flex-wrap justify-between gap-8 px-2">
          {skills.map((category, index) => (
            <div
              key={index}
              className="w-full sm:w-[48%] lg:w-[48%] bg-[#1f4a6e] rounded-lg p-4"
            >
              {/* Category Title */}
              <h3 className="text-xl font-bold mb-4 text-[#4cd7d0]">
                {category.name}
              </h3>

              {/* Skills */}
              {category.skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex items-center space-x-4 mb-6"
                >
                  {/* Skill Image */}
                  <div className="w-12 h-12 sm:w-16 sm:h-16">
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="w-full h-full object-cover rounded-full shadow-md"
                    />
                  </div>

                  {/* Skill Name and Progress */}
                  <div className="flex-1">
                    <h4 className="text-sm sm:text-base font-semibold mb-1">
                      {skill.name}
                    </h4>
                    <div className="relative pt-1">
                      <div className="w-full bg-gray-500 rounded-full h-2.5">
                        <div
                          className={`bg-white h-2.5 rounded-full transition-all duration-1000 ease-in-out ${
                            animate ? "opacity-100" : "opacity-0"
                          }`}
                          style={{
                            width: animate ? `${skill.level}%` : "0%",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  {/* Skill Level */}
                  <span className="text-sm sm:text-base font-medium">
                    {skill.level}%
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
