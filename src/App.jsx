import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import ExperienceSection from "./components/ExperienceSection";
import ProductionImpactSection from "./components/ProductionImpactSection";
import CaseStudiesSection from "./components/CaseStudiesSection";
import FeaturedWorkSection from "./components/FeaturedWorkSection";
import IntegrationsShowcase from "./components/IntegrationsShowcase";
import SkillsSection from "./components/SkillsSection";
import DevelopmentWorkflowSection from "./components/DevelopmentWorkflowSection";
import CurrentLearningSection from "./components/CurrentLearningSection";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main>
        <Hero />
        <AboutMe />
        <ExperienceSection />
        <ProductionImpactSection />
        <CaseStudiesSection />
        <FeaturedWorkSection />
        <IntegrationsShowcase />
        <SkillsSection />
        <DevelopmentWorkflowSection />
        <CurrentLearningSection />
        <ContactMe />
      </main>
      <Footer />
    </div>
  );
}

export default App;
