import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        const html = document.documentElement;
        if (darkMode) {
            html.classList.remove('dark');
            html.classList.add('light');
        } else {
            html.classList.remove('light');
            html.classList.add('dark');
        }
        setDarkMode(!darkMode);
        triggerThemeChange();
    };

    const triggerThemeChange = () => {
        const event = new Event('themeChange');
        window.dispatchEvent(event);
    };

    useEffect(() => {
        const html = document.documentElement;
        const initialDarkMode = html.classList.contains('dark');
        setDarkMode(initialDarkMode);
    }, []);

    return (
        <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
};