import { useContext, useState, createContext } from "react";

const ThemeContext = createContext({})

export const useTheme = () => {
    return useContext(ThemeContext)
}

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light")

    const switchTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    return (
        <ThemeContext.Provider value={{theme, switchTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}