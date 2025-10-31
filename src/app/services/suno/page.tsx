import React from 'react';
import Link from 'next/link';
import TiltImage from '../../../components/UI/TiltImage';

export default function Page(): JSX.Element {
    return (
        <main style={{ padding: 24, maxWidth: 900, margin: '0 auto' }}>
            <header style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
                <TiltImage
                    src="/images/suno.png"
                    alt="Suno logo"
                    href="https://www.suno.ai"
                    width={120}
                />
                <h1 style={{ margin: 0 }}>Suno</h1>
            </header>

            <p>
                Suno is an AI audio generation suite (music and voice synthesis). It focuses on producing
                high-quality audio and musical arrangements from prompts.
            </p>

            <h3>Common uses</h3>
            <ul>
                <li>Music and soundtrack generation</li>
                <li>Voice synthesis and TTS</li>
                <li>Audio prototypes and creative sound design</li>
                <li>Assisted composition and mood-based audio generation</li>
            </ul>

            <h3>Common / currently available variants (examples)</h3>
            <ul>
                <li>Suno generative music models (various sizes/quality vs latency trade-offs)</li>
                <li>Voice TTS models (multiple voices / timbres)</li>
            </ul>

            <nav style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
                <Link href="/">Showroom</Link>
                <Link href="/services/chatgpt">ChatGPT</Link>
                <Link href="/services/suno">Suno</Link>
                <Link href="/services/sora">Sora 2</Link>
            </nav>
        </main>
    );
}