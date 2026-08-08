import type { CSSProperties, ReactNode } from "react";
import { cn } from "../../utils/cn";

type CardProps = {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
  style?: CSSProperties;
};

export default function Card({ children, className, interactive, style }: CardProps) {
  return (
    <div
      style={style}
      className={cn(
        "panel-card p-6",
        interactive && "hover:border-amber-dim hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(62,207,142,0.12)]",
        className
      )}
    >
      {children}
    </div>
  );
}