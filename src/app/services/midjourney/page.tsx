import React, { JSX } from 'react';
import Link from 'next/link';
import TiltImage from '../../../components/UI/TiltImage';

export default function Page(): JSX.Element {
    return (
        <main style={{ padding: 24, maxWidth: 900, margin: '0 auto' }}>
            <header style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
                <TiltImage
                    src="/images/midjourney.png"
                    alt="Midjourney logo"
                    href="https://www.midjourney.com"
                    width={120}
                />
                <h1 style={{ margin: 0 }}>Midjourney</h1>
            </header>

            <p>
                Midjourney is an AI-powered image generation tool that transforms text descriptions
                into stunning visual artwork and illustrations.
            </p>

            <h3>Common uses</h3>
            <ul>
                <li>Creating concept art and illustrations</li>
                <li>Generating visual assets for design projects</li>
                <li>Exploring artistic styles and variations</li>
                <li>Prototyping visual ideas quickly</li>
            </ul>

            <h3>Features</h3>
            <ul>
                <li>High-quality image generation from text prompts</li>
                <li>Style mixing and variation control</li>
                <li>Aspect ratio and resolution options</li>
                <li>Community features and inspiration</li>
            </ul>

            <nav style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
                <Link href="/">Home</Link>
                <Link href="/services/chatgpt">ChatGPT</Link>
                <Link href="/services/suno">Suno</Link>
                <Link href="/services/sora">Sora</Link>
                <Link href="/services/midjourney">Midjourney</Link>
            </nav>
        </main>
    );
}