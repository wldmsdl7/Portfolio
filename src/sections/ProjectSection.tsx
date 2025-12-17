import { useState } from "react";
import { FolderGit2 } from "lucide-react";
import type { Project } from "../types/Project";
import { ProjectModal } from "../components/ProjectSection/ProjectModal";
import { PROJECT } from "../constants/project";
import { ProjectCard } from "../components/ProjectSection/ProjectCard";

const ProjectSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section id="projects" className="min-h-screen scroll-mt-20 p-4">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="max-w-7xl mt-10 mx-auto h-20 flex items-center">
          <div className="flex flex-col gap-4 items-center">
            <div className="flex flex-row items-center gap-3">
              <FolderGit2 size={32} className="text-blue-600" />
              <h1 className="text-5xl font-bold">Projects</h1>
            </div>
            <p className="text-sm text-gray-500">주요 프로젝트 포트폴리오</p>
          </div>
          <div className="text-right ml-auto">
            <p className="text-gray-900 ">{PROJECT.length}</p>
            <p className="text-lg text-gray-500">Total projects</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECT.map((project: Project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => handleCardClick(project)}
            />
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default ProjectSection;
