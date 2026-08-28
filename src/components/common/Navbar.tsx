import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const closeMenu = () => setOpen(false);

  return (
    <nav className="w-full bg-paper/90 border-b border-line sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-paper/80">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-display text-base font-semibold tracking-tight text-ink hover:text-accent transition">
          Francesco Cole
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={closeMenu}
              className={`text-sm font-medium transition ${
                pathname === l.to ? "text-accent" : "text-ink-soft hover:text-ink"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <span className="flex items-center gap-2 text-xs font-mono text-ink-soft pl-4 border-l border-line">
            <span className="status-dot" /> open to work
          </span>
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen((p) => !p)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className={`w-6 h-0.5 bg-ink transition ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-0.5 bg-ink transition ${open ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 bg-ink transition ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden flex flex-col gap-1 px-6 pb-5 border-t border-line bg-paper">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={closeMenu}
              className={`py-3 text-sm font-medium border-b border-line ${
                pathname === l.to ? "text-accent" : "text-ink-soft"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <span className="flex items-center gap-2 text-xs font-mono text-ink-soft pt-3">
            <span className="status-dot" /> open to work
          </span>
        </div>
      )}
    </nav>
  );
}