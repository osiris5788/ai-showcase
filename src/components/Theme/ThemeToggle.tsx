'use client';
import React, { useEffect, useState } from 'react';

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // initialize from saved preference (optional)
        const saved = localStorage.getItem('theme') === 'dark';
        setIsDark(saved);
        document.documentElement.setAttribute('data-theme', saved ? 'dark' : 'light');
    }, []);

    const toggle = () => {
        const next = !isDark;
        setIsDark(next);
        localStorage.setItem('theme', next ? 'dark' : 'light');
        document.documentElement.setAttribute('data-theme', next ? 'dark' : 'light');
    };

    return <button onClick={toggle}>{isDark ? 'Dark' : 'Light'}</button>;
}