import type { ReactNode } from "react";
import { cn } from "../../utils/cn";

type BadgeProps = {
  children: ReactNode;
  tone?: "amber" | "wire" | "slate";
  className?: string;
};

const dotTone: Record<NonNullable<BadgeProps["tone"]>, string> = {
  amber: "bg-amber shadow-[0_0_6px_rgba(62,207,142,0.9)]",
  wire: "bg-wire shadow-none",
  slate: "bg-slate shadow-none",
};

export default function Badge({ children, tone = "amber", className }: BadgeProps) {
  return (
    <span className={cn("inline-flex items-center gap-2 text-xs font-mono text-slate", className)}>
      <span className={cn("w-[7px] h-[7px] rounded-full", dotTone[tone])} />
      {children}
    </span>
  );
}