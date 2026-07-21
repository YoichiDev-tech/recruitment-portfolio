import SkillBadge from "../../components/portfolio/SkillBadge";

export default function About() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-12 text-gray-800 cursor-default">

            <h1 className="text-4xl font-bold mb-6">About Me</h1>

            <p className="mb-4 text-lg">
                I'm Francesco, a frontend-heavy web developer focused on building clean, fast,
                and real-world products. Before tech, I spent years working in
                restaurants and hotels — learning discipline, communication, and
                how to deliver great experiences.
            </p>

            <p className="mb-8 text-lg">
                Today, I build modern web applications using React, TypeScript,
                Tailwind, and Supabase. My goal is to create fullstack products
                that solve real problems and help real users.
            </p>

            {/* Skills */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Technical Skills</h2>

                <div className="flex flex-wrap gap-3 cursor-default">
                    <SkillBadge skill="HTML5" />
                    <SkillBadge skill="CSS3" />
                    <SkillBadge skill="JavaScript" />
                    <SkillBadge skill="ES6+" />
                    <SkillBadge skill="React" />
                    <SkillBadge skill="TypeScript" />
                    <SkillBadge skill="Tailwind CSS" />
                    <SkillBadge skill="Supabase" />
                    <SkillBadge skill="Frontend Development" />
                    <SkillBadge skill="UI Implementation" />
                </div>
            </section>

            {/* Soft Skills */}
            <section>
                <h2 className="text-2xl font-bold mb-4">Soft Skills</h2>

                <div className="flex flex-wrap gap-3 cursor-default">
                    <SkillBadge skill="Communication & Empathy" />
                    <SkillBadge skill="Crisis Management & Adaptability" />
                    <SkillBadge skill="Collaboration & Teamwork" />
                    <SkillBadge skill="Self-Direction" />
                </div>
            </section>
        </div>
    );
}