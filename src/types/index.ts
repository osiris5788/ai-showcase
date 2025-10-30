// This file exports TypeScript types and interfaces used throughout the application.

export interface Theme {
    mode: 'light' | 'dark';
}

export interface AIComponentProps {
    title: string;
    description: string;
}

export interface HeaderProps {
    title: string;
    links: Array<{ label: string; href: string }>;
}

export interface FooterProps {
    copyright: string;
    links: Array<{ label: string; href: string }>;
}