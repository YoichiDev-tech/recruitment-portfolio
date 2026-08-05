import ProjectCard from "./ProjectCard";

const projects = [
    {
        id: "invoice",
        title: "Invoice Generator App",
        description: "A professional invoice generator...",
        link: "https://invoice-generator-41ubdd5uf-yoichidev-techs-projects.vercel.app"
    },
    {
        id: "brightwave",
        title: "BrightWave-studio",
        description: "A modern responsive website...",
        link: "https://bright-wave-studio.vercel.app"
    },
    {
        id: "servesync",
        title: "ServeSync",
        description: "A workflow automation tool...",
        link: "https://my-serve-sync.vercel.app"
    }
];

export default function ProjectGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
    );
}