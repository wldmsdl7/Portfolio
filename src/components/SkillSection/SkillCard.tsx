import type { Skill, SkillCategory } from "../../types/Skill";

interface SkilCardProps {
  skill: Skill;
  catData: SkillCategory;
  idx: number;
}

export const SkillCard = ({ skill, catData, idx }: SkilCardProps) => {
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
    <div
      key={idx}
      className="border-b border-gray-100 last:border-0 pb-4 last:pb-0"
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold text-gray-800">{skill.name}</h3>
        {renderSkillLevel(skill.level, catData.color)}
      </div>
      <p className="text-sm text-gray-600 break-keep">{skill.description}</p>
    </div>
  );
};
