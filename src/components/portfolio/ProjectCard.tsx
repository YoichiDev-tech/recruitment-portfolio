type Project = {
  title: string;
  description: string;
  link: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border p-4 rounded shadow">
      <h3 className="font-bold">{project.title}</h3>
      <p>{project.description}</p>
      <a
        href={project.link}
        target="_blank"
        className="text-blue-600 underline"
      >
        View project
      </a>
    </div>
  );
}