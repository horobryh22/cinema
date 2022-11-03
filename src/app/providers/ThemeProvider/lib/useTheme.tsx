import { useContext } from 'react';

import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from './ThemeContext';

export enum Theme {
    DARK = 'dark',
    LIGHT = 'light',
}

interface UseThemeResult {
    theme: Theme;
    toggleTheme: () => void;
}

export const useTheme = (): UseThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = (): void => {
        let selectedTheme: Theme;

        switch (theme) {
            case Theme.DARK:
                selectedTheme = Theme.LIGHT;
                break;
            case Theme.LIGHT:
                selectedTheme = Theme.DARK;
                break;
            default:
                selectedTheme = Theme.DARK;
        }

        setTheme?.(selectedTheme);
        document.body.className = selectedTheme;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, selectedTheme);
    };

    return { theme: theme || Theme.DARK, toggleTheme };
};
