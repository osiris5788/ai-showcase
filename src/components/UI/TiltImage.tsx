'use client';
import React, { useRef } from 'react';
import styles from './TiltImage.module.css';

interface Props {
    src: string;
    alt?: string;
    href?: string;
    width?: number;
    height?: number;
}

export default function TiltImage({ src, alt = '', href, width, height }: Props) {
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const imgRef = useRef<HTMLImageElement | null>(null);

    function handleMove(e: React.MouseEvent) {
        const w = wrapperRef.current;
        const img = imgRef.current;
        if (!w || !img) return;
        const rect = w.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const px = (x / rect.width - 0.5) * 2;
        const py = (y / rect.height - 0.5) * 2;
        const rotateY = px * 6;
        const rotateX = -py * 6;
        img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
        img.style.boxShadow = '0 20px 40px rgba(0,0,0,0.25)';
    }

    function handleLeave() {
        const img = imgRef.current;
        if (!img) return;
        img.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
        img.style.boxShadow = 'none';
    }

    const imgEl = (
        <img
            ref={imgRef}
            src={src}
            alt={alt}
            className={styles.img}
            style={{ width: width ?? 'auto', height: height ?? 'auto' }}
            draggable={false}
        />
    );

    return (
        <div
            className={styles.wrapper}
            ref={wrapperRef}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
        >
            {href ? (
                <a href={href} target="_blank" rel="noopener noreferrer" aria-label={alt}>
                    {imgEl}
                </a>
            ) : (
                imgEl
            )}
        </div>
    );
}