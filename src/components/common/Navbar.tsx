import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "../../features/theme/useTheme";
import { useState } from "react";

export default function Navbar() {
    const { colorTheme } = useTheme();
    const [open, setOpen] = useState(false);

    let navbarBackgroundClass;

    if (colorTheme === "ruby") {
        navbarBackgroundClass = "bg-gradient-to-r from-rose-700 to-stone-50";
    }
    if (colorTheme === "emerald") {
        navbarBackgroundClass = "bg-gradient-to-r from-emerald-700 to-stone-50";
    }
    if (colorTheme === "sapphire") {
        navbarBackgroundClass = "bg-gradient-to-r from-blue-700 to-stone-50";
    }

    function toggleMenu() {
        setOpen((prev) => !prev);
    }

    function closeMenu() {
        setOpen(false);
    }

    return (
        <nav className={`w-full text-gray-800 border-b ${navbarBackgroundClass}`}>
            <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

                {/* Logo */}
                <p className="cursor-pointer hover:text-blue-500 transition">
                    Temporary Yoichi
                </p>

                {/* Desktop navigation */}
                <div className="hidden md:flex items-center gap-8">
                    <Link to="/" className="cursor-pointer hover:text-blue-500 transition" onClick={closeMenu}>
                        Home
                    </Link>
                    <Link to="/about" className="cursor-pointer hover:text-blue-500 transition" onClick={closeMenu}>
                        About
                    </Link>
                    <Link to="/projects" className="cursor-pointer hover:text-blue-500 transition" onClick={closeMenu}>
                        Projects
                    </Link>
                    <Link to="/contact" className="cursor-pointer hover:text-blue-500 transition" onClick={closeMenu}>
                        Contact
                    </Link>

                    <ThemeToggle />
                </div>

                {/* Mobile hamburger button */}
                <button
                    className="md:hidden flex flex-col gap-1"
                    onClick={toggleMenu}
                >
                    <span className="w-6 h-0.5 bg-white"></span>
                    <span className="w-6 h-0.5 bg-white"></span>
                    <span className="w-6 h-0.5 bg-white"></span>
                </button>
            </div>

            {/* Mobile menu */}
            {open && (
                <div className="md:hidden flex flex-col gap-4 px-4 py-4">
                    <Link to="/" className="cursor-pointer hover:text-blue-500 transition" onClick={closeMenu}>
                        Home
                    </Link>
                    <Link to="/about" className="cursor-pointer hover:text-blue-500 transition" onClick={closeMenu}>
                        About
                    </Link>
                    <Link to="/projects" className="cursor-pointer hover:text-blue-500 transition" onClick={closeMenu}>
                        Projects
                    </Link>
                    <Link to="/contact" className="cursor-pointer hover:text-blue-500 transition" onClick={closeMenu}>
                        Contact
                    </Link>

                    <ThemeToggle />
                </div>
            )}
        </nav>
    );
}