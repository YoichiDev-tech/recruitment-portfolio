import type { TextareaHTMLAttributes } from "react";
import { cn } from "../../utils/cn";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
};

export default function Textarea({ label, id, className, ...rest }: TextareaProps) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={id} className="font-mono text-xs text-ink-soft tracking-widest">
          {label.toUpperCase()}
        </label>
      )}
      <textarea
        id={id}
        className={cn(
          "bg-paper-raised border border-line rounded-lg px-4 py-3 text-ink placeholder:text-ink-faint focus:border-accent focus:outline-none transition",
          className
        )}
        {...rest}
      />
    </div>
  );
}