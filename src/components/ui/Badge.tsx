import type { ReactNode } from "react";
import { cn } from "../../utils/cn";

type BadgeProps = {
  children: ReactNode;
  tone?: "accent" | "live" | "faint";
  className?: string;
};

const dotTone: Record<NonNullable<BadgeProps["tone"]>, string> = {
  accent: "bg-accent shadow-[0_0_6px_rgba(84,69,224,0.6)]",
  live: "bg-live shadow-[0_0_6px_rgba(46,139,87,0.6)]",
  faint: "bg-ink-faint shadow-none",
};

export default function Badge({ children, tone = "accent", className }: BadgeProps) {
  return (
    <span className={cn("inline-flex items-center gap-2 text-xs font-mono text-ink-soft", className)}>
      <span className={cn("w-[7px] h-[7px] rounded-full", dotTone[tone])} />
      {children}
    </span>
  );
}