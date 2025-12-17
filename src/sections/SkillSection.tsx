import { FaCircle } from "react-icons/fa";
import { SKILLS } from "../constants/skills";

const SkillsSection = () => {
  const renderSkillLevel = (level: number, color?: string) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-sm ${
              i < level ? `bg-${color}-500` : "bg-gray-200"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="skills" className="min-h-screen mt-20 p-4">
      <div className="max-w-7xl mt-10 mx-auto">
        <h1 className="text-5xl font-bold mb-10">Skills</h1>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(SKILLS).map(([category, catData]) => (
              <div
                key={category}
                className="group relative bg-white rounded-lg shadow-md p-10 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/50 backdrop-blur-sm transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-10" />

                <div className="absolute inset-0 flex items-center justify-center text-center text-gray-800 font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 break-keep p-4">
                  {catData.description}
                </div>

                <div className="relative z-0">
                  <div className="flex items-center gap-2 mb-6">
                    <span className="text-2xl" style={{ color: catData.color }}>
                      <FaCircle size={20} />
                    </span>
                    <h2 className="text-xl font-bold text-gray-800">
                      {category}
                    </h2>
                  </div>
                  <div className="space-y-4">
                    {catData.items.map((skill, idx) => (
                      <div
                        key={idx}
                        className="border-b border-gray-100 last:border-0 pb-4 last:pb-0"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-gray-800">
                            {skill.name}
                          </h3>
                          {renderSkillLevel(skill.level, catData.color)}
                        </div>
                        <p className="text-sm text-gray-600 break-keep">
                          {skill.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
