'use client'
import React from 'react';

const ThemeToggle: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = React.useState<boolean>(false);

    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
        document.body.classList.toggle('dark-mode', !isDarkMode);
    };

    return (
        <button onClick={toggleTheme} aria-label="Toggle theme">
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
    );
};

export default ThemeToggle;