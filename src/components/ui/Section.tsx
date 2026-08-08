import type { ReactNode } from "react";
import { cn } from "../../utils/cn";

type SectionProps = {
  children: ReactNode;
  eyebrow?: string;
  title?: string;
  className?: string;
};

export default function Section({ children, eyebrow, title, className }: SectionProps) {
  return (
    <section className={cn("py-16", className)}>
      {eyebrow && (
        <p className="font-mono text-xs text-amber tracking-widest mb-4">{eyebrow}</p>
      )}
      {title && (
        <h2 className="font-display text-3xl font-bold text-offwhite mb-6">{title}</h2>
      )}
      {children}
    </section>
  );
}