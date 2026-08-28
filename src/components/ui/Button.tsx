import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "../../utils/cn";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center gap-2 rounded-full font-semibold px-6 py-3 transition disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary: "bg-ink text-paper hover:bg-accent",
  secondary: "border border-ink/20 text-ink hover:border-accent hover:text-accent",
  ghost: "text-ink-soft hover:text-ink",
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

type ButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    to?: string;
    href?: string;
  };

export default function Button({ children, variant = "primary", className, to, href, ...rest }: ButtonProps) {
  const classes = cn(base, variants[variant], className);

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}