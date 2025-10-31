'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Navigation.module.css';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={styles.nav}>
            <button 
                className={styles.hamburger}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
            
            <div className={`${styles.menuItems} ${isOpen ? styles.isOpen : ''}`}>
                <Link href="/">Home</Link>
                <Link href="/services/chatgpt">ChatGPT</Link>
                <Link href="/services/suno">Suno</Link>
                <Link href="/services/sora">Sora 2</Link>
                <Link href="/services/midjourney">Midjourney</Link>
            </div>
        </nav>
    );
};

export default Navigation;