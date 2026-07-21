import ProjectGrid from '../../components/portfolio/ProjectGrid';
import Hero from '../../components/portfolio/Hero';

export default function Projects() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12 text-gray-800 cursor-default">

            {/* Hero Section */}
            <Hero />

            {/* Featured Project */}
            <section className="mb-16 mt-12">
                <h2 className="text-3xl font-bold mb-6">Featured Project</h2>

                <div className="border rounded-lg p-6 shadow-md">
                    <h3 className="text-xl font-semibold mb-2">Cafe Shop</h3>
                    <p className="mb-4">
                        A fully deployed Cafe website showcasing menu, atmosphere and brand identity.
                        Built as a fast and responsive frontend experience for real users.
                    </p>

                    <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                        View Project
                    </button>
                </div>
            </section>

            {/* All Projects */}
            <section className="mb-16">
                <h2 className="text-3xl font-bold mb-6">Projects</h2>

                {/* Project grid */}
                <ProjectGrid />
            </section>

            {/* Prototype Section */}
            <section>
                <h2 className="text-3xl font-bold mb-6">Prototypes</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Prototype */}
                    <div className="border rounded-lg p-6 shadow-md">
                        <h3 className="text-xl font-semibold mb-2">Invoice Generator Prototype</h3>
                        <p className="mb-4">Building my own personal invoice generator prototype.</p>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                            View Prototype
                        </button>
                    </div>

                </div>
            </section>

        </div>
    );
}