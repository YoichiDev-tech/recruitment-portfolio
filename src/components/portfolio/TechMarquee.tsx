import { stack } from "../../data/stack";

export default function TechMarquee() {
  const items = [...stack, ...stack];

  return (
    <div className="marquee-mask border-y border-line bg-paper-raised/70 overflow-hidden">
      <div className="marquee-track py-4">
        {items.map(({ name, icon: Icon, color }, i) => (
          <div key={`${name}-${i}`} className="flex items-center gap-3 px-6 shrink-0">
            <Icon size={16} color={color} aria-hidden="true" />
            <span className="font-mono text-sm text-ink-soft whitespace-nowrap">{name}</span>
            <span className="w-1 h-1 rounded-full bg-accent/50 ml-6" aria-hidden="true" />
          </div>
        ))}
      </div>
    </div>
  );
}