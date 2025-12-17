import { FaReact, FaNodeJs, FaDocker, FaAws } from "react-icons/fa";
import {
  SiNextdotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiRedis,
  SiSpringboot,
  SiVite,
  SiRobotframework,
  SiMysql,
} from "react-icons/si";
import { AiOutlineApi } from "react-icons/ai";

interface TechTagProps {
  tech: string;
}

const techMap: {
  [key: string]: { colorClass: string; Icon: React.ElementType };
} = {
  React: {
    colorClass: "bg-blue-50 text-blue-600 border-blue-100",
    Icon: FaReact,
  },
  "Next.js": {
    colorClass: "bg-teal-50 text-teal-600 border-teal-100",
    Icon: SiNextdotjs,
  },
  "Node.js": {
    colorClass: "bg-green-50 text-green-600 border-green-100",
    Icon: FaNodeJs,
  },
  Express: {
    colorClass: "bg-lime-50 text-lime-600 border-lime-100",
    Icon: SiExpress,
  },
  PostgreSQL: {
    colorClass: "bg-indigo-50 text-indigo-600 border-indigo-100",
    Icon: SiPostgresql,
  },
  MongoDB: {
    colorClass: "bg-emerald-50 text-emerald-600 border-emerald-100",
    Icon: SiMongodb,
  },
  Firebase: {
    colorClass: "bg-orange-50 text-orange-600 border-orange-100",
    Icon: SiFirebase,
  },
  Redis: { colorClass: "bg-red-50 text-red-600 border-red-100", Icon: SiRedis },
  "Spring Boot": {
    colorClass: "bg-gray-50 text-gray-600 border-gray-100",
    Icon: SiSpringboot,
  },
  Docker: {
    colorClass: "bg-cyan-50 text-cyan-600 border-cyan-100",
    Icon: FaDocker,
  },
  "AWS (ECS, ALB, Aurora, ElastiCache, CloudFront/S3)": {
    colorClass: "bg-yellow-50 text-yellow-600 border-yellow-100",
    Icon: FaAws,
  },
  "CI/CD": {
    colorClass: "bg-pink-50 text-pink-600 border-pink-100",
    Icon: SiRobotframework,
  },
  Vite: {
    colorClass: "bg-violet-50 text-violet-600 border-violet-100",
    Icon: SiVite,
  },
  "Gemini API": {
    colorClass: "bg-rose-50 text-rose-600 border-rose-100",
    Icon: AiOutlineApi,
  },
  MySQL: {
    colorClass: "bg-pink-50 text-pink-600 border-pink-100",
    Icon: SiMysql,
  },
};

export const TechTag = ({ tech }: TechTagProps) => {
  const { colorClass, Icon } = techMap[tech] || {
    colorClass: "bg-gray-50 text-gray-600 border-gray-100",
    Icon: AiOutlineApi,
  };

  return (
    <span
      className={`px-4 py-2 rounded-lg border flex items-center gap-2 ${colorClass}`}
    >
      <Icon className="w-4 h-4" />
      {tech}
    </span>
  );
};
