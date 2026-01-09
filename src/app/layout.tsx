import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Huri Portfolio',
  description: 'Wikipedia-style portfolio website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a href="#about" className="skip-to-content">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
