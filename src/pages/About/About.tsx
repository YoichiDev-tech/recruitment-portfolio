import SkillBadge from "../../components/portfolio/SkillBadge";
import Container from "../../components/ui/Container";
import Section from "../../components/ui/Section";
import Card from "../../components/ui/Card";
import Badge from "../../components/ui/Badge";
import { stack } from "../../data/stack";

const soft = ["Communication & Empathy", "Crisis Management", "Collaboration", "Self-Direction"];

const education = [
  { label: "freeCodeCamp — Full self-directed curriculum", status: "in progress" as const },
  { label: "Technical Assistant Diploma", status: "completed" as const },
  { label: "Electrical Operator Qualification", status: "completed" as const },
];

export default function About() {
  return (
    <Container narrow className="py-16">
      <p className="font-mono text-xs text-amber tracking-widest mb-4 animate-fade-up">ABOUT</p>
      <h1 className="font-display text-4xl font-bold mb-8 text-offwhite animate-fade-up-delay-1">
        From service floors and switchboards to the frontend.
      </h1>

      <p className="mb-4 text-lg text-slate leading-relaxed">
        I'm Francesco — a frontend-heavy web developer focused on building clean,
        fast, real-world products. Before tech, I spent seven years in restaurants
        and hotels, and hold a technical diploma plus a qualification as an
        electrical operator. Both trades taught me the same thing: things either
        work under pressure, or they don't.
      </p>
      <p className="mb-12 text-lg text-slate leading-relaxed">
        Today I build modern web applications with React, TypeScript, Tailwind,
        and Supabase — self-taught, currently deepening my fundamentals through
        freeCodeCamp, and shipping deployable projects rather than exercises.
      </p>

      <Section eyebrow="TECHNICAL — LIVE CIRCUITS" className="py-0 mb-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {stack.map(({ name, icon, color }) => (
            <SkillBadge key={name} skill={name} icon={icon} color={color} />
          ))}
        </div>
      </Section>

      <Section eyebrow="SOFT SKILLS" className="py-0 mb-12">
        <div className="grid grid-cols-2 gap-3">
          {soft.map((s) => (
            <SkillBadge key={s} skill={s} />
          ))}
        </div>
      </Section>

      <Card>
        <p className="font-mono text-xs text-slate tracking-widest mb-4">EDUCATION</p>
        <ul className="space-y-3 text-slate">
          {education.map((item) => (
            <li key={item.label} className="flex justify-between gap-4 flex-wrap items-center">
              <span className="text-offwhite">{item.label}</span>
              <Badge tone={item.status === "completed" ? "amber" : "wire"}>{item.status}</Badge>
            </li>
          ))}
        </ul>
      </Card>
    </Container>
  );
}