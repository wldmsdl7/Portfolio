export interface TeamMember {
  role: string;
  count: number;
}

export interface Project {
  id: number | string;
  title: string;
  description: string;
  isPublic: boolean;
  images: string[];
  technologies: string[];
  duration: string;
  team?: TeamMember[];
  myRole: string[];
  keyFeatures: string[];
  reflections?: string;
  url: string;
  totalMembers: number;
}
