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
        interactive && "hover:border-accent hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(84,69,224,0.10)]",
        className
      )}
    >
      {children}
    </div>
  );
}