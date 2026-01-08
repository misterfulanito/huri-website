'use client';

import { useEffect, useState } from 'react';
import styles from './Sidebar.module.css';

const sections = [
  { id: 'about', label: 'About Me' },
  { id: 'experience', label: 'My Experience' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact' },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState('about');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      // Check if user has scrolled down
      setIsScrolled(window.scrollY > 100);

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    handleScroll(); // Check initial state
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        <h4 className={styles.navTitle}>Contents</h4>

        <ul className={styles.navList}>
          {/* Top button */}
          <li className={styles.navItem}>
            <a
              href="#top"
              className={`${styles.navLink} ${styles.topLink} ${
                !isScrolled ? styles.disabled : ''
              }`}
              onClick={scrollToTop}
              aria-disabled={!isScrolled}
            >
              (top)
            </a>
          </li>

          {/* Section links */}
          {sections.map(section => (
            <li key={section.id} className={styles.navItem}>
              <a
                href={`#${section.id}`}
                className={`${styles.navLink} ${
                  activeSection === section.id ? styles.active : ''
                }`}
                onClick={e => handleClick(e, section.id)}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
