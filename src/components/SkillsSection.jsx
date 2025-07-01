import React, { useEffect, useState } from "react";

const skills = [
  {
    name: "Frontend Development",
    skills: [
      { name: "HTML5", level: 95, image: "./assets/html.png" },
      { name: "CSS3", level: 70, image: "./assets/css.png" },
      { name: "JavaScript", level: 75, image: "./assets/JS.png" },
      { name: "React.js", level: 60, image: "./assets/react.png" },
      { name: "Tailwind CSS", level: 65, image: "./assets/tailwindcss.png" },
    ],
  },
  {
    name: "Backend & Tools",
    skills: [
      { name: "Java", level: 85, image: "./assets/java.png" },
      { name: "Spring Boot", level: 50, image: "./assets/spring-boot-icon.png" },
      { name: "Hibernate", level: 50, image: "./assets/hibernate.png" },
      { name: "MySQL", level: 85, image: "./assets/my-sql.png" },
      { name: "Git & GitHub", level: 75, image: "./assets/git.png" },
    ],
  },
];

const SkillsSection = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const section = document.getElementById("skills");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      className="bg-gradient-to-r from-[#0f2a4f] to-[#1a3e66] text-white py-20 px-6 sm:px-10 xl:px-20 font-poppins"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className={`text-3xl sm:text-4xl font-bold text-center mb-5 text-[#4cd7d0] font-playfair transition-all duration-1000 ease-in-out ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
          }`}
        >
          Skills & Technologies
        </h2>

        <div className="flex flex-wrap justify-between gap-10">
          {skills.map((category, index) => (
            <div
              key={index}
              className="w-full md:w-[48%] bg-[#1f4a6e]/60 backdrop-blur-md rounded-2xl p-6 shadow-md"
            >
              <h3 className="text-xl font-semibold mb-6 text-[#4cd7d0] font-playfair border-b border-[#4cd7d0]/40 pb-2">
                {category.name}
              </h3>

              {category.skills.map((skill, idx) => (
                <div key={idx} className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14">
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="w-full h-full object-cover rounded-full border-2 border-[#4cd7d0] shadow-md"
                    />
                  </div>

                  <div className="flex-1">
                    <h4 className="text-sm sm:text-base font-semibold mb-1">
                      {skill.name}
                    </h4>
                    <div className="w-full bg-[#406281] rounded-full h-2">
                      <div
                        className={`bg-[#4cd7d0] h-2 rounded-full transition-all duration-1000 ease-in-out`}
                        style={{
                          width: animate ? `${skill.level}%` : "0%",
                        }}
                      ></div>
                    </div>
                  </div>

                  <span className="text-sm font-medium w-10 text-right">
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
