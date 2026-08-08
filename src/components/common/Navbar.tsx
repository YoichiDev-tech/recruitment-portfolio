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
    <nav className="w-full bg-graphite border-b border-white/8 sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-graphite/90">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-mono text-sm tracking-tight text-offwhite hover:text-amber transition">
          F.COLE<span className="text-amber">_</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={closeMenu}
              className={`text-sm font-medium transition ${
                pathname === l.to ? "text-amber" : "text-slate hover:text-offwhite"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <span className="flex items-center gap-2 text-xs font-mono text-slate pl-4 border-l border-white/10">
            <span className="status-dot" /> open to work
          </span>
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen((p) => !p)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className={`w-6 h-0.5 bg-offwhite transition ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-0.5 bg-offwhite transition ${open ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 bg-offwhite transition ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden flex flex-col gap-1 px-6 pb-5 border-t border-white/8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={closeMenu}
              className={`py-3 text-sm font-medium border-b border-white/5 ${
                pathname === l.to ? "text-amber" : "text-slate"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <span className="flex items-center gap-2 text-xs font-mono text-slate pt-3">
            <span className="status-dot" /> open to work
          </span>
        </div>
      )}
    </nav>
  );
}