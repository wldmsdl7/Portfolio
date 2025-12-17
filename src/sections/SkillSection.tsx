import { SKILLS } from "../constants/skills";
import { CategoryCard } from "../components/SkillSection/CategoryCard";

const SkillsSection = () => {
  return (
    <section id="skills" className="min-h-screen mt-20 p-4">
      <div className="max-w-7xl mt-10 mx-auto">
        <h1 className="text-5xl font-bold mb-10">Skills</h1>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(SKILLS).map(([category, catData]) => (
              <CategoryCard category={category} catData={catData} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
