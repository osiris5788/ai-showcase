import React, { JSX } from 'react';
import Link from 'next/link';
import TiltImage from '../../../components/UI/TiltImage';

export default function Page(): JSX.Element {
    return (
        <main style={{ padding: 24, maxWidth: 900, margin: '0 auto' }}>
            <header style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
                <TiltImage src="/images/chatgpt.png" alt="ChatGPT logo" href="https://chat.openai.com" width={120} />
                <h1 style={{ margin: 0 }}>ChatGPT</h1>
            </header>

            <p>
                Developed by OpenAI — ChatGPT is a family of large language models for conversational AI,
                text generation and understanding.
            </p>

            <h3>Common uses</h3>
            <ul>
                <li>Conversational assistants and chatbots</li>
                <li>Summarization, question answering and content generation</li>
                <li>Drafting emails, code snippets and documentation</li>
                <li>Data extraction and text classification</li>
            </ul>

            <h3>Common / currently available model variants (examples)</h3>
            <ul>
                <li>GPT-4 family (high-capability instruction-following)</li>
                <li>GPT-3.5 family (cost-efficient finishing and chat)</li>
                <li>Specialized or fine-tuned variants (task- or domain-specific)</li>
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