import AboutSection from "./sections/AboutSection";
import HomeSection from "./sections/HomeSection";
import ProjectsSection from "./sections/Projects";
import SkillsSection from "./sections/Skills";

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
