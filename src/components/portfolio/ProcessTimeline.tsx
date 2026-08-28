import { LuLightbulb, LuPenTool, LuCode, LuFlaskConical, LuRocket } from "react-icons/lu";
import Container from "../ui/Container";

const steps = [
  {
    num: "01",
    icon: LuLightbulb,
    title: "Understand",
    desc: "I start from the brief — the goal, the user, and the constraints I'm actually building inside.",
  },
  {
    num: "02",
    icon: LuPenTool,
    title: "Design",
    desc: "I map the structure and flow before touching a component, so decisions aren't made on the fly.",
  },
  {
    num: "03",
    icon: LuCode,
    title: "Build",
    desc: "React, TypeScript and Tailwind, built as reusable, typed components — not one-off markup.",
  },
  {
    num: "04",
    icon: LuFlaskConical,
    title: "Test",
    desc: "I check it on real devices and real connections. If it breaks quietly, it's not done.",
  },
  {
    num: "05",
    icon: LuRocket,
    title: "Ship",
    desc: "Deployed, not demoed. Every project in my log is a live link, not a local build.",
  },
];

export default function ProcessTimeline() {
  return (
    <Container narrow className="py-16 md:py-24">
      <p className="font-mono text-xs text-accent tracking-widest mb-4">MY PROCESS</p>
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 leading-tight">
        How I ship work that <span className="text-accent">holds up.</span>
      </h2>
      <p className="text-lg text-ink-soft mb-12 max-w-xl leading-relaxed">
        Five steps, borrowed as much from hospitality service and electrical
        work as from any bootcamp — because the standard doesn't change.
      </p>

      <div className="flex flex-col gap-5">
        {steps.map((step) => (
          <div key={step.num} className="flex gap-5 items-start">
            <div className="flex flex-col items-center shrink-0">
              <div className="w-11 h-11 rounded-full bg-accent text-paper font-mono text-sm font-semibold flex items-center justify-center">
                {step.num}
              </div>
              <div className="w-px flex-1 bg-line mt-2 last:hidden" aria-hidden="true" />
            </div>
            <div className="panel-card p-6 flex-1 mb-1">
              <div className="flex items-center gap-3 mb-2">
                <step.icon size={18} className="text-accent" aria-hidden="true" />
                <h3 className="font-display text-lg font-semibold">{step.title}</h3>
              </div>
              <p className="text-ink-soft leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}