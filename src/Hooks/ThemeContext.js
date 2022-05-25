import { useMediaQuery } from "@material-ui/core";
import { createContext, useContext, useEffect, useState } from "react";


const ThemeCtx = createContext();

const ThemeCtxProvider = ({children}) => {
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
 
    const [darkMode, setDarkMode] = useState();


    useEffect(() => {
        if (localStorage.getItem('theme') === "dark") {
            setDarkMode(true);
        } else if(localStorage.getItem("theme") === "light") {
            setDarkMode(false);
        } else {
            setDarkMode(true);
        }

    }, [prefersDarkMode]);

    const toggleTheme = () => {
        if (darkMode) {
            localStorage.setItem('theme', "light");
            setDarkMode(false);
        } else {
            localStorage.setItem('theme', "dark");
            setDarkMode(true);
        }
    };

    return (
        <ThemeCtx.Provider value={{ darkMode, toggleTheme }}>
            {
                children
            }
        </ThemeCtx.Provider>
    )
}

const useThemeMode = (props) => {
    return useContext(ThemeCtx);
}

export {useThemeMode, ThemeCtxProvider}