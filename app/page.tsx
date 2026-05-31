import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ImpactSnapshot } from "@/components/ImpactSnapshot";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Learning } from "@/components/Learning";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <ImpactSnapshot />
        <Experience />
        <Projects />
        <Skills />
        <Learning />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
