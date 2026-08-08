import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiSupabase,
  SiGit,
} from "react-icons/si";
import type { IconType } from "react-icons";

export type StackItem = {
  name: string;
  icon: IconType;
  /** Each brand's official mark color, used at low opacity against the dark panel */
  color: string;
};

export const stack: StackItem[] = [
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
  { name: "Git / GitHub", icon: SiGit, color: "#F05032" },
];