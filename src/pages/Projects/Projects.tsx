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
                    <h3 className="text-xl font-semibold mb-2">Invoice Generator App</h3>
                    <p className="mb-4">
                        A professional, client-ready invoice generator. This tool allows freelancers,
                        small business owners and operators to create clean and branded invoices
                        with a modern UI and export them as high-quality PDFs. 
                    </p>

                   <a
                        href="https://invoice-generator-41ubdd5uf-yoichidev-techs-projects.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                    >
                        View Project
                    </a>

                </div>

                <div className="border rounded-lg p-6 shadow-md">
                    <h3 className="text-xl font-semibold mb-2">BrightWave-studio</h3>
                    <p className="mb-4">
                        A modern, responsive website for a creative agency. This project showcases
                        the agency's portfolio, services, templates to choose from and more, making the
                        web page user-friendly and visually appealing.
                    </p>
                    <a
                        href="https://bright-wave-studio.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                    >
                        View Project
                    </a>
                </div>

                <div className="border rounded-lg p-6 shadow-md">
                    <h3 className="text-xl font-semibold mb-2">ServeSync</h3>
                    <p className='mb-4'>
                        A new workflow automation management tool designed to streamline team
                        collaboration and task tracking. 
                        ServeSync offers a clean interface, real-time updates, and integration 
                        with popular productivity tools to enhance team efficiency.
                        Designed for small and large teams.
                    </p>

                    <a
                        href="https://my-serve-sync.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                    >
                        View Project
                    </a>
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
                        <h3 className="text-xl font-semibold mb-2">Waste Opportunity Finder</h3>
                        <p className="mb-4">
                            A simple, fast and user-friendly web application designed to help businesses
                            identify potential reuse, resale or recycling opportunities for their waste output.
                        </p>
                        <a
                            href="https://wof-form-eta.vercel.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                        >
                            View Prototype
                        </a>

                    </div>

                </div>
            </section>

        </div>
    );
}