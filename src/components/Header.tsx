import Image from 'next/image';
import styles from './Header.module.css';

interface HeaderProps {
  onMenuClick?: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <button
          className={styles.menuButton}
          onClick={onMenuClick}
          aria-label="Toggle navigation menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        <div className={styles.logo}>
          <Image
            src="/book-icon.svg"
            alt="Portfolio Logo"
            width={32}
            height={32}
            priority
          />
          <h1 className={styles.siteName}>Huri</h1>
        </div>

        <nav className={styles.headerNav}>
          <a href="#about" className={styles.navLink}>
            About
          </a>
          <a href="#experience" className={styles.navLink}>
            Experience
          </a>
          <a href="#portfolio" className={styles.navLink}>
            Portfolio
          </a>
          <a href="#blog" className={styles.navLink}>
            Blog
          </a>
          <a href="#contact" className={styles.navLink}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
