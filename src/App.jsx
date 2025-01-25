import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe'; 
import ProjectsSection from './components/ProjectsSection'; 
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';

function App(){
  return(
    <div>
      <NavBar />
      <Hero />
      <AboutMe />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactMe />
      <Footer />
    </div>
  )
}

export default App;


