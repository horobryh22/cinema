import React, { ReactNode, useEffect, useMemo, useState } from 'react';

import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from '../lib/ThemeContext';
import { Theme } from '../lib/useTheme';

import { ReturnComponentType } from 'shared/types';

let defaultTheme: Theme;

if (typeof window !== 'undefined') {
    defaultTheme =
        (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;
}

interface IThemeProvider {
    children: ReactNode;
}

export const ThemeProvider = ({ children }: IThemeProvider): ReturnComponentType => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    const defaultProps = useMemo(() => {
        return { theme, setTheme };
    }, [theme]);

    return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};
