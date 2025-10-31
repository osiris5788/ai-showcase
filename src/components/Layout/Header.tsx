import React from 'react';
import Image from 'next/image';
import ThemeToggle from '../Theme/ThemeToggle';

const Header: React.FC = () => {
    return (
        <header>
            <img
                src="/images/Sogeti_Logo_Primary_2COL_RGB.png"
                alt="Sogeti Logo"
                className="logo"
                width={104} // Changed from 600 to 200
                height={40} // Changed from 350 to 116 to maintain aspect ratio
            />
            <nav>
                <ThemeToggle />
            </nav>
        </header>
    );
};

export default Header;