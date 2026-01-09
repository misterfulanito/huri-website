'use client';

import { useEffect, useCallback } from 'react';
import styles from './MobileNav.module.css';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const sections = [
  { id: 'about', label: 'About Me' },
  { id: 'experience', label: 'My Experience' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact' },
];

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEscape);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, handleEscape]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y =
        element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className={styles.overlay}
        onClick={onClose}
        role="button"
        aria-label="Close navigation menu"
        tabIndex={0}
        onKeyDown={e => e.key === 'Enter' && onClose()}
      />
      <nav className={styles.mobileNav}>
        <div className={styles.header}>
          <h2 className={styles.title}>Navigation</h2>
          <button
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <ul className={styles.navList}>
          {sections.map(section => (
            <li key={section.id} className={styles.navItem}>
              <a
                href={`#${section.id}`}
                className={styles.navLink}
                onClick={e => handleClick(e, section.id)}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
