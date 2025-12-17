import { FaCircle } from "react-icons/fa";
import type { SkillCategory } from "../../types/Skill";
import { SkillCard } from "./SkillCard";

interface CategoryCardProps {
  category: string;
  catData: SkillCategory;
}

export const CategoryCard = ({ category, catData }: CategoryCardProps) => {
  return (
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
          <h2 className="text-xl font-bold text-gray-800">{category}</h2>
        </div>
        <div className="space-y-4">
          {catData.items.map((skill, idx) => (
            <SkillCard key={idx} skill={skill} catData={catData} idx={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};
