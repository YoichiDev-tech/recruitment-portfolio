import type { TextareaHTMLAttributes } from "react";
import { cn } from "../../utils/cn";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
};

export default function Textarea({ label, id, className, ...rest }: TextareaProps) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={id} className="font-mono text-xs text-slate tracking-widest">
          {label.toUpperCase()}
        </label>
      )}
      <textarea
        id={id}
        className={cn(
          "bg-graphite border border-white/10 rounded-md px-4 py-3 text-offwhite placeholder:text-slate focus:border-amber focus:outline-none transition",
          className
        )}
        {...rest}
      />
    </div>
  );
}