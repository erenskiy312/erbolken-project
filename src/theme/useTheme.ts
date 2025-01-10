import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";

interface useThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

export function useTheme() {

    const {theme, setTheme} = useContext(ThemeContext)

    const toggleTheme = () => {
        const newTheme = localStorage.setItem(LOCAL_STORAGE_THEME_KEY)
        setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)
    }

}