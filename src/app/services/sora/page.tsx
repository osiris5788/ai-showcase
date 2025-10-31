import React, { JSX } from 'react';
import Link from 'next/link';
import TiltImage from '../../../components/UI/TiltImage';

export default function Page(): JSX.Element {
    return (
        <main style={{ padding: 24, maxWidth: 900, margin: '0 auto' }}>
            <header style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
                <TiltImage
                    src="/images/sora.png"
                    alt="Sora logo"
                    href="https://openai.com/index/sora-2" /* replace with real product homepage */
                    width={120}
                />
                <h1 style={{ margin: 0 }}>Sora 2</h1>
            </header>

            <p>
                Sora 2 (site/product name as used in this showroom) is a next-generation media/vision model
                for video and image generation and manipulation. The page summarizes common scenarios and model variants.
            </p>

            <h3>Common uses</h3>
            <ul>
                <li>AI-assisted video generation and editing</li>
                <li>Image-to-video and frame interpolation</li>
                <li>Style transfer, compositing and scene editing</li>
                <li>Automated content creation pipelines</li>
            </ul>

            <h3>Common / currently available variants (examples)</h3>
            <ul>
                <li>Sora 2 (high-fidelity generation modes)</li>
                <li>Lightweight/fast variants for real-time editing</li>
                <li>Fine-tuned models for domain-specific media tasks</li>
            </ul>

            <p style={{ marginTop: 24 }}>
                <Link href="/">← Back to showroom</Link>
            </p>

            <nav style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
                <Link href="/">Showroom</Link>
                <Link href="/services/chatgpt">ChatGPT</Link>
                <Link href="/services/suno">Suno</Link>
                <Link href="/services/sora">Sora 2</Link>
            </nav>
        </main>
    );
}