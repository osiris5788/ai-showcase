import React from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import Navigation from '../components/Layout/Navigation';
import ThemeToggle from '../components/Theme/ThemeToggle';
import ChatGPT from '../components/AI/ChatGPT';
import Suno from '../components/AI/Suno';
import Sora from '../components/AI/Sora';

const Page: React.FC = () => {
    return (
        <div>
            <Header />
            <Navigation />
            <ThemeToggle />
            <main>
                <h1>Welcome to the AI Showroom</h1>
                <section>
                    <h2>ChatGPT</h2>
                    <ChatGPT />
                </section>
                <section>
                    <h2>Suno</h2>
                    <Suno />
                </section>
                <section>
                    <h2>Sora 2</h2>
                    <Sora />
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Page;