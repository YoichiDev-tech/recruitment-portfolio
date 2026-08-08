import type { ReactNode } from "react";
import { cn } from "../../utils/cn";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  /** Narrower measure for text-heavy pages (About, Contact) */
  narrow?: boolean;
};

export default function Container({ children, className, narrow }: ContainerProps) {
  return (
    <div className={cn(narrow ? "max-w-3xl" : "max-w-6xl", "mx-auto px-6", className)}>
      {children}
    </div>
  );
}