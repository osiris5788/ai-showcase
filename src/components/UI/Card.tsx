import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Card.module.css';

interface CardProps {
    title: string;
    description: string;
    image: string;
    href?: string;
    children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, description, image, href, children }) => {
    const inner = (
        <>
            <div className={styles.imageWrapper}>
                <Image
                    src={image}
                    alt={title}
                    width={268} // Calculated from card width (300px) minus padding (2 * 16px)
                    height={151} // Maintains 16:9 aspect ratio
                    className={styles.image}
                    priority
                />
            </div>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
            <div className={styles.content}>
                {children}
            </div>
        </>
    );

    return href ? (
        <Link href={href} className={styles.card}>
            {inner}
        </Link>
    ) : (
        <div className={styles.card}>{inner}</div>
    );
};

export default Card;