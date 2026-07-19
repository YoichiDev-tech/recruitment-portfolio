import { useProjects } from "../../features/projects/useProjects";
import ProjectCard from "./ProjectCard";

export default function ProjectGrid() {
    const { projects } = useProjects();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
    );
}