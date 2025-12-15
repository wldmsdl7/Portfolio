import AboutSection from "./components/sections/AboutSection";
import HomeSection from "./components/sections/HomeSection";
import ProjectsSection from "./components/sections/Projects";
import SkillsSection from "./components/sections/Skills";

const MainPage = () => {
  return (
    <main
      id="scroll-container"
      className="flex-1 overflow-y-auto scroll-smooth"
    >
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
    </main>
  );
};

export default MainPage;
