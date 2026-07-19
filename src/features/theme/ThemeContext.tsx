import { createContext, useState } from "react";
//  Create the context
const ThemeContext = createContext(null);

// Create the provider 
export default function ThemeProvider({ children }) {
    const [colorTheme, setColorTheme] = useState("ruby");

    return (
        <ThemeContext.Provider value={{ colorTheme, setColorTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

// Export the context as named
export { ThemeContext };