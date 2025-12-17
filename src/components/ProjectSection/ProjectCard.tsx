import type { Project } from "../../types/Project";
import { IsPublicCard } from "./IsPublicCard";
import { TechTag } from "./TechTag";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1"
    >
      <div className="w-full h-48 overflow-hidden bg-gray-100">
        <img
          src={project.images[0]}
          alt={project.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-blue-600 hover:text-blue-700 text-xl">
            {project.title}
          </h3>
          <IsPublicCard isPublic={project.isPublic} />
        </div>

        <p className="text-lg text-gray-600 mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <TechTag key={index} tech={tech} />
          ))}
          {project.technologies.length > 3 && (
            <p className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded border border-gray-200 flex items-center">
              +{project.technologies.length - 3}
            </p>
          )}
        </div>

        <div className="flex items-center justify-between text-sm border-t border-gray-100 pt-3">
          <div className="text-gray-600">
            {project.myRole && (
              <span className="text-xs">{project.myRole.join(", ")}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
