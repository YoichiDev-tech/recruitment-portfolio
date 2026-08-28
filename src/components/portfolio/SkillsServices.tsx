import { LuCode, LuLayoutGrid, LuDatabase } from "react-icons/lu";
import Container from "../ui/Container";
import Card from "../ui/Card";

const services = [
  {
    num: "01",
    icon: LuCode,
    title: "Frontend Engineering",
    desc: "Interfaces built with React and TypeScript — fast, accessible, and styled with Tailwind CSS.",
  },
  {
    num: "02",
    icon: LuLayoutGrid,
    title: "Design Systems",
    desc: "Reusable component libraries and token-based styling, so a UI stays consistent as it grows.",
  },
  {
    num: "03",
    icon: LuDatabase,
    title: "Backend-as-a-Service",
    desc: "Auth, data, and storage wired up with Supabase — without needing a dedicated backend team.",
  },
];

export default function SkillsServices() {
  return (
    <section className="bg-paper-dim/60 border-y border-line py-16 md:py-24">
      <Container narrow>
        <p className="font-mono text-xs text-accent tracking-widest mb-10">SKILLS &amp; SERVICES</p>

        <div className="flex flex-col gap-5">
          {services.map((s) => (
            <Card key={s.num} className="!p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="w-11 h-11 rounded-xl border border-line flex items-center justify-center text-accent">
                  <s.icon size={20} aria-hidden="true" />
                </div>
                <span className="font-mono text-sm text-ink-faint">{s.num}</span>
              </div>
              <h3 className="font-display text-2xl font-semibold mb-2">{s.title}</h3>
              <p className="text-ink-soft leading-relaxed">{s.desc}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}