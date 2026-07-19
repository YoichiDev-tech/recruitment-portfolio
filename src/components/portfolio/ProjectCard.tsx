export default function ProjectCard({ project }) {
    return (
        <div className="border rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

            <p className="mb-4 text-gray-700">
                {project.description}
            </p>

            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                View Project
            </button>
        </div>
    );
}