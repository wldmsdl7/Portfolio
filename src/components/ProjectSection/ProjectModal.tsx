import { X, ExternalLink, Calendar, Code } from "lucide-react";
import type { Project } from "../../types/Project";
import { TechTag } from "./TechTag";
import { SectionHeader } from "./SectionHeader";
import { IsPublicCard } from "./IsPublicCard";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!isOpen || !project) return null;
  const isSingleImage = project.images.length === 1;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10">
          <h2 className="flex-1 text-2xl font-bold text-gray-900 flex items-center gap-3">
            {project.title}
            <IsPublicCard isPublic={project.isPublic} />
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>
        <div className="p-6 space-y-10">
          <div>
            <SectionHeader title="프로젝트 소개" icon={<span>📱</span>} />
            <div
              className={`flex gap-4 pb-4 px-4 ${
                project.images.length > 1 ? "flex-col" : ""
              }`}
            >
              {project.images.map((img, index) => (
                <div
                  key={index}
                  className="rounded-lg shadow-md overflow-hidden"
                  style={{ width: "auto", height: "auto" }}
                >
                  <img
                    src={img}
                    alt={`${project.title}-${index}`}
                    className="block max-w-full max-h-[90vh] object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeader
              title="프로젝트 개요"
              icon={<Code className="w-5 h-5 text-blue-600" />}
            />
            <p className="text-gray-700 text-lg leading-relaxed px-4">
              {project.description}
            </p>
          </div>
          <div>
            <SectionHeader title="사용 기술" icon={<span>🛠️</span>} />
            <div className="flex flex-wrap gap-2 px-4">
              {project.technologies.map((tech, index) => (
                <TechTag key={index} tech={tech} />
              ))}
            </div>
          </div>
          <div>
            <SectionHeader
              title="진행 기간"
              icon={<Calendar className="w-5 h-5 text-blue-600" />}
            />
            <p className="text-gray-900 text-lg px-4">{project.duration}</p>
          </div>
          <div>
            <SectionHeader title="역할" icon={<span>🎯</span>} />
            <div className="px-4 space-y-3">
              {project.team ? (
                <>
                  <p className="text-gray-700">
                    팀원{" "}
                    {project.team.reduce((sum, role) => sum + role.count, 0)}
                    명이 다음과 같이 역할 분담을 하였습니다.
                  </p>

                  <ol className="space-y-2">
                    {project.team.map((role, index) => (
                      <li
                        key={index}
                        className={
                          project.myRole?.some((r) => role.role.includes(r))
                            ? "text-red-600 font-medium"
                            : "text-gray-700"
                        }
                      >
                        {index + 1}. {role.role} ({role.count}명)
                      </li>
                    ))}
                  </ol>
                  <p className="text-gray-700 mt-4">
                    저는 이 중{" "}
                    <span className="text-red-600 font-semibold">
                      {project.myRole?.join(", ")}
                    </span>
                    에 참여했습니다.
                  </p>
                </>
              ) : (
                <p className="text-red-600 font-medium">Individual Project</p>
              )}
            </div>
          </div>
          <div>
            <SectionHeader title="주요 기능" icon={<span>⚙️</span>} />
            <ul className="space-y-2 px-4 text-gray-700 text-lg">
              {project.keyFeatures.map((feature, index) => (
                <li key={index} className="flex gap-2">
                  <span className="text-blue-600">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeader title="느낀 점" icon={<span>💭</span>} />
            <p className="px-4 text-gray-700 text-lg leading-relaxed">
              {project.reflections}
            </p>
          </div>
          <div className="pt-4">
            {project.url ? (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2 text-lg font-medium"
              >
                <ExternalLink className="w-5 h-5" />
                프로젝트 보기
              </a>
            ) : (
              <p className="w-full text-center bg-gray-200 text-gray-600 py-3 rounded-lg">
                Private Repository 입니다.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
