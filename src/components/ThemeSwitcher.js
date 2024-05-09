// src/components/ThemeSwitcher.js
import React, { useEffect, useState } from 'react';

const triggerThemeChange = () => {
    const event = new Event('themeChange');
    window.dispatchEvent(event);
};

const ThemeSwitcher = () => {
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

    return (
        <div>
            
        </div>
    );
};

export default ThemeSwitcher;
