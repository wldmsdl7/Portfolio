import { X, Star, GitFork, ExternalLink, Calendar, Code } from "lucide-react";
import type { Project } from "../../types/Project";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!isOpen || !project) return null;

  const totalTeamMembers = project.team.reduce(
    (sum, role) => sum + role.count,
    0
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <h2 className="text-gray-900">{project.title}</h2>
            {project.isPublic && (
              <span className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full border border-green-200">
                Public
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* 앱 소개 - Screenshots */}
          <div className="mb-8">
            <h3 className="text-gray-900 mb-4 flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg">
              <span className="text-lg">📱</span>
              프로젝트 소개
            </h3>
            <div className="flex gap-4 overflow-x-auto pb-4">
              <div className="flex-shrink-0 w-64 h-96 overflow-hidden bg-gray-200 rounded-lg shadow-md">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-shrink-0 w-64 h-96 bg-gray-200 rounded-lg shadow-md" />
              <div className="flex-shrink-0 w-64 h-96 bg-gray-200 rounded-lg shadow-md" />
              <div className="flex-shrink-0 w-64 h-96 bg-gray-200 rounded-lg shadow-md" />
            </div>
          </div>

          {/* 프로젝트 개요 */}
          <div className="mb-8">
            <h3 className="text-gray-900 mb-4 flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg">
              <Code className="w-5 h-5 text-blue-600" />
              프로젝트 개요
            </h3>
            <p className="text-gray-700 leading-relaxed px-4">
              {project.description}
            </p>
          </div>

          {/* 진행 기간 */}
          <div className="mb-8">
            <h3 className="text-gray-900 mb-4 flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg">
              <Calendar className="w-5 h-5 text-blue-600" />
              진행 기간
            </h3>
            <p className="text-gray-900 px-4">{project.duration}</p>
          </div>

          {/* 역할 */}
          <div className="mb-8">
            <h3 className="text-gray-900 mb-4 flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg">
              <span className="text-lg">🎯</span>
              역할
            </h3>
            <div className="px-4 space-y-3">
              <p className="text-gray-700">
                팀원 {totalTeamMembers}명이 다음과 같이 역할 분담을 하였습니다.
              </p>
              <ol className="space-y-2 text-gray-700">
                {project.team.map((role, index) => (
                  <li
                    key={index}
                    className={
                      project.myRole?.some((r) => role.role.includes(r))
                        ? "text-red-600"
                        : ""
                    }
                  >
                    {index + 1}. {role.role} ({role.count}명)
                  </li>
                ))}
              </ol>
              <p className="text-gray-700 mt-4">
                저는 이 중{" "}
                <span className="text-red-600 font-medium">
                  {project.myRole}
                </span>
                에 참여했습니다.
              </p>
            </div>
          </div>

          {/* 주요 기능 */}
          <div className="mb-8">
            <h3 className="text-gray-900 mb-4 flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg">
              <span className="text-lg">⚙️</span>
              주요 기능
            </h3>
            <ul className="space-y-2 px-4 text-gray-700">
              {project.keyFeatures!.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 느낀점 */}
          <div className="mb-8">
            <h3 className="text-gray-900 mb-4 flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg">
              <span className="text-lg">💭</span>
              느낀점
            </h3>
            <div className="px-4 text-gray-700 leading-relaxed">
              <p>{project.reflections}</p>
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-6">
            <h3 className="text-gray-900 mb-3">사용 기술</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg border border-blue-100"
                >
                  ● {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2 shadow-md">
              <ExternalLink className="w-5 h-5" />
              프로젝트 보기
            </button>
            <button className="px-8 py-3 border-2 border-gray-200 text-gray-700 rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-colors flex items-center gap-2">
              <Star className="w-5 h-5" />
              Star
            </button>
            <button className="px-8 py-3 border-2 border-gray-200 text-gray-700 rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-colors flex items-center gap-2">
              <GitFork className="w-5 h-5" />
              Fork
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
