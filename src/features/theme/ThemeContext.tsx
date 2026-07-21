import { createContext, useState, ReactNode } from "react";

type ThemeContextType = {
  colorTheme: string;
  setColorTheme: React.Dispatch<React.SetStateAction<string>>;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [colorTheme, setColorTheme] = useState("ruby");

  return (
    <ThemeContext.Provider value={{ colorTheme, setColorTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}