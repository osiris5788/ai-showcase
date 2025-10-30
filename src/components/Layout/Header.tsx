import React from 'react';
import Image from 'next/image';
import ThemeToggle from '../Theme/ThemeToggle';

const Header: React.FC = () => {
    return (
        <header>
            <Image
                src="/images/sogeti-logo-png.png"
                alt="Sogeti Logo"
                width={120}
                height={40}
                className="logo"
                // removed priority to avoid preload warning
            />
            <nav>
                <ThemeToggle />
            </nav>
        </header>
    );
};

export default Header;