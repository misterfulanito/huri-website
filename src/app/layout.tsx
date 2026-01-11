import type { Metadata, Viewport } from 'next';
import '../styles/globals.css';
import KonamiCode from '../components/KonamiCode';

export const metadata: Metadata = {
  title: 'Huri Portfolio',
  description: 'Wikipedia-style portfolio website showcasing software engineering projects and experience',
  keywords: ['portfolio', 'software engineer', 'web developer', 'React', 'Next.js', 'TypeScript'],
  authors: [{ name: 'Huri' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Huri Portfolio',
    description: 'Wikipedia-style portfolio website showcasing software engineering projects',
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#101418' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preconnect"
          href="https://res.cloudinary.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
      </head>
      <body>
        <a href="#about" className="skip-to-content">
          Skip to main content
        </a>
        <KonamiCode />
        {children}
      </body>
    </html>
  );
}
