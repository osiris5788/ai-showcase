import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MidjourneyDemo from '../MidjourneyDemo';

// simple DOM mocks for next/link/next/image are not required here because we use <a> and <img>

describe('MidjourneyDemo', () => {
    test('renders demo card with title, prompt and buttons', () => {
        render(<MidjourneyDemo />);
        expect(screen.getByTestId('midjourney-demo')).toBeInTheDocument();
        expect(screen.getByText(/Midjourney quick demo/i)).toBeInTheDocument();
        expect(screen.getByText(/Cinematic cyberpunk cityscape/i)).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /Open Midjourney site/i })).toHaveAttribute(
            'href',
            'https://www.midjourney.com'
        );
        expect(screen.getByRole('button', { name: /Run demo/i })).toBeInTheDocument();
    });
});