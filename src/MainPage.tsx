import AboutSection from "./sections/AboutSection";
import HomeSection from "./sections/HomeSection";
import ProjectSection from "./sections/ProjectSection";
import SkillsSection from "./sections/SkillSection";

const MainPage = () => {
  return (
    <main
      id="scroll-container"
      className="flex-1 overflow-y-auto scroll-smooth"
    >
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <ProjectSection />
    </main>
  );
};

export default MainPage;
