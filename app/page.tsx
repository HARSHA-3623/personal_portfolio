import { HashScrollHandler } from "@/components/HashScrollHandler";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { ProfessionalWork } from "@/components/ProfessionalWork";
import { PersonalProjects } from "@/components/PersonalProjects";
import { Skills } from "@/components/Skills";
import { Learning } from "@/components/Learning";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <HashScrollHandler />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <ProfessionalWork />
        <PersonalProjects />
        <Skills />
        <Learning />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
