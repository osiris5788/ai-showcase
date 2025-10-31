import React from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import Navigation from '../components/Layout/Navigation';
import Card from '../components/UI/Card';
import ChatGPT from '../components/AI/ChatGPT';
import Suno from '../components/AI/Suno';
import Sora from '../components/AI/Sora';
import styles from './page.module.css';

const aiServices = [
    {
        title: 'ChatGPT',
        description: 'Advanced language model for natural conversations and text generation',
        component: ChatGPT,
        image: '/images/chatgpt.png',
        href: '/services/chatgpt'
    },
    {
        title: 'Suno',
        description: 'AI-powered music creation and audio synthesis',
        component: Suno,
        image: '/images/suno.png',
        href: '/services/suno'
    },
    {
        title: 'Sora 2',
        description: 'Next-generation AI video generation and manipulation',
        component: Sora,
        image: '/images/sora.png',
        href: '/services/sora'
    }
];

const Page: React.FC = () => {
    return (
        <div>
            <main>
                <div className={styles.carouselText}>Welcome to the AI Showroom</div>
                <div className={styles.carousel}>
                    {aiServices.map((service, index) => (
                        <Card 
                            key={index}
                            image={service.image}
                            title={service.title}
                            description={service.description}
                            href={service.href}
                        >
                            <service.component />
                        </Card>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Page;