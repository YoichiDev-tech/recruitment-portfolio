import { useTheme } from "../../features/theme/useTheme"
import { useState } from "react";

export default function ThemeToggle() {
    const { colorTheme, setColorTheme } = useTheme();
    const [open, setOpen] = useState(false);

    // Theme switch handler
    function setRuby() {
        setColorTheme('ruby');
    }
    function setEmerald() {
        setColorTheme('emerald');
    }
    function setSapphire() {
        setColorTheme('sapphire');
    }

    function toggleMenu() {
        setOpen(prev => !prev);
    }

    return (
        <div className="relative">
            
            {/* Main trigger button */}
            <button 
                onClick={toggleMenu} 
                className="hover:text-blue-500 transition"
            >
                Theme
            </button>

            {/* Popover menu */}
            {open && (
                <div className="absolute mt-2 bg-white text-gray-800 shadow-lg rounded-md p-3 flex flex-col gap-2">
                    <button 
                        onClick={setRuby} 
                        className="hover:text-blue-500 transition"
                    >
                        Ruby
                    </button>

                    <button 
                        onClick={setEmerald} 
                        className="hover:text-blue-500 transition"
                    >
                        Emerald
                    </button>

                    <button 
                        onClick={setSapphire} 
                        className="hover:text-blue-500 transition"
                    >
                        Sapphire
                    </button>
                </div>
            )}
        </div>
    );
}