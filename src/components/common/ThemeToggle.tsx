import { useTheme } from "../../features/theme/useTheme";

export default function ThemeToggle() {
  const theme = useTheme();
  if (!theme) return null;

  const { colorTheme, setColorTheme } = theme;

  function toggle() {
    if (colorTheme === "ruby") setColorTheme("emerald");
    else if (colorTheme === "emerald") setColorTheme("sapphire");
    else setColorTheme("ruby");
  }

  return (
    <button
      onClick={toggle}
      className="px-3 py-1 rounded bg-white text-black shadow"
    >
      Theme
    </button>
  );
}