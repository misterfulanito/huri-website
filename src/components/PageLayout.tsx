'use client';

import { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import MobileNav from './MobileNav';
import AccessibilityTools from './AccessibilityTools';
import styles from './PageLayout.module.css';

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <div className={styles.pageContainer}>
      <Header onMenuClick={() => setIsMobileNavOpen(true)} />
      <div className={styles.contentWrapper}>
        <Sidebar />
        <MobileNav
          isOpen={isMobileNavOpen}
          onClose={() => setIsMobileNavOpen(false)}
        />
        <main className={styles.mainContent}>{children}</main>
        <aside className={styles.accessibilityColumn}>
          <AccessibilityTools />
        </aside>
      </div>
    </div>
  );
}
