import React from 'react';
import Link from 'next/link';

const Navigation: React.FC = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/chatgpt">ChatGPT</Link>
                </li>
                <li>
                    <Link href="/suno">Suno</Link>
                </li>
                <li>
                    <Link href="/sora">Sora 2</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;