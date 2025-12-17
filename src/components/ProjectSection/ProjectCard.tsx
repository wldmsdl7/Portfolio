import type { Project } from "../../types/Project";

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
      {/* Image */}
      <div className="w-full h-48 overflow-hidden bg-gray-100">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title and Badge */}
        <div className="flex items-center gap-2 mb-2">
          <h3 className="text-blue-600 hover:text-blue-700">{project.title}</h3>
          {project.isPublic && (
            <span className="px-2 py-0.5 text-xs bg-green-100 text-green-700 rounded border border-green-200">
              Public
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs bg-blue-50 text-blue-600 rounded border border-blue-100"
            >
              ● {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded border border-gray-200">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between text-sm border-t border-gray-100 pt-3">
          <div className="text-gray-600">
            <span className="text-xs">{project.myRole}</span>
          </div>
          <button className="text-blue-600 hover:text-blue-700 transition-colors">
            View details →
          </button>
        </div>
      </div>
    </div>
  );
}
