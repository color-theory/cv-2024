"use client";
import React, {
    createContext,
    useState,
    useContext,
    ReactNode,
    useEffect,
} from "react";

type ThemeContextType = {
    theme: string | undefined;
    setTheme: (theme: string) => void;
};
type ThemeProviderProps = {
    children: ReactNode;
};

const ThemeContext = createContext<ThemeContextType>({
    theme: "",
    setTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = (props: ThemeProviderProps) => {
    const [theme, setTheme] = useState("");

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme") || "";
        setTheme(storedTheme);
        document.documentElement.setAttribute("data-theme", storedTheme);
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
};
