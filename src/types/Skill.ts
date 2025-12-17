export type Skill = {
  name: string;
  description: string;
  level: number;
};

export type SkillCategory = {
  color: string;
  description: string;
  items: Skill[];
};

export type SkillsType = {
  Frontend: SkillCategory;
  Backend: SkillCategory;
  DevOps: SkillCategory;
  Collaboration: SkillCategory;
};
