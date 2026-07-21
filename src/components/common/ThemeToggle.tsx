import { useState } from "react";
import { useTheme } from "../../features/theme/useTheme";

export default function ThemeToggle() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  if (!theme) return null;

  const { setColorTheme } = theme;

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="px-3 py-1 rounded bg-white text-black shadow"
      >
        Theme
      </button>

      {open && (
        <div className="absolute right-0 mt-2 bg-white shadow rounded p-2 flex flex-col">
          <button
            onClick={() => {
              setColorTheme("ruby");
              setOpen(false);
            }}
            className="px-3 py-1 text-left hover:bg-gray-100"
          >
            Ruby
          </button>

          <button
            onClick={() => {
              setColorTheme("emerald");
              setOpen(false);
            }}
            className="px-3 py-1 text-left hover:bg-gray-100"
          >
            Emerald
          </button>

          <button
            onClick={() => {
              setColorTheme("sapphire");
              setOpen(false);
            }}
            className="px-3 py-1 text-left hover:bg-gray-100"
          >
            Sapphire
          </button>
        </div>
      )}
    </div>
  );
}