'use client';

import { useEffect, useState } from 'react';
import styles from './AccessibilityTools.module.css';

type TextSize = 'small' | 'standard' | 'large';
type Width = 'standard' | 'wide';
type ColorScheme = 'automatic' | 'light' | 'dark';

export default function AccessibilityTools() {
  const [mounted, setMounted] = useState(false);
  const [textSize, setTextSize] = useState<TextSize>('standard');
  const [width, setWidth] = useState<Width>('standard');
  const [colorScheme, setColorScheme] = useState<ColorScheme>('automatic');
  const [showWidthMessage, setShowWidthMessage] = useState(false);

  useEffect(() => {
    // Load preferences from localStorage on mount
    const savedTextSize = localStorage.getItem('textSize') as TextSize;
    const savedWidth = localStorage.getItem('width') as Width;
    const savedColorScheme = localStorage.getItem('colorScheme') as ColorScheme;

    if (savedTextSize) setTextSize(savedTextSize);
    if (savedWidth) setWidth(savedWidth);
    if (savedColorScheme) setColorScheme(savedColorScheme);

    setMounted(true);
  }, []);

  useEffect(() => {
    // Apply text size - affects font size only
    const root = document.documentElement;
    switch (textSize) {
      case 'small':
        // 75% of 16px = 12px
        root.style.setProperty('--base-font-size', '0.75rem');
        root.style.setProperty('--base-line-height', '1.625');
        break;
      case 'large':
        // 150% of 16px = 24px
        root.style.setProperty('--base-font-size', '1.5rem');
        root.style.setProperty('--base-line-height', '1.625');
        break;
      default:
        // 100% = 16px = 1rem
        root.style.setProperty('--base-font-size', '1rem');
        root.style.setProperty('--base-line-height', '1.625');
    }
    localStorage.setItem('textSize', textSize);
  }, [textSize]);

  useEffect(() => {
    // Apply width - affects layout container
    const root = document.documentElement;
    root.setAttribute('data-width', width);

    if (width === 'wide') {
      // Wide: full viewport width
      root.style.setProperty('--max-content-width', 'none');
      setShowWidthMessage(true);
      // Hide message after 3 seconds
      const timer = setTimeout(() => setShowWidthMessage(false), 3000);
      return () => clearTimeout(timer);
    } else {
      // Standard: 1280px + margins (2rem each side) = 84rem total
      root.style.setProperty('--max-content-width', '84rem');
      setShowWidthMessage(false);
    }
    localStorage.setItem('width', width);
  }, [width]);

  useEffect(() => {
    // Apply color scheme
    const root = document.documentElement;

    if (colorScheme === 'automatic') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      root.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    } else {
      root.setAttribute('data-theme', colorScheme);
    }
    localStorage.setItem('colorScheme', colorScheme);
  }, [colorScheme]);

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <aside className={styles.accessibility}>
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Appearance</h3>
        </div>
      </aside>
    );
  }

  return (
    <aside className={styles.accessibility}>
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Appearance</h3>

        {/* Text Size */}
        <div className={styles.control}>
          <div className={styles.controlLabel}>Text</div>
          <div className={styles.divider}></div>
          <div className={styles.radioGroup}>
            <label className={styles.radioLabel}>
              <input
                type="radio"
                name="textSize"
                value="small"
                checked={textSize === 'small'}
                onChange={() => setTextSize('small')}
                className={styles.radio}
              />
              <span>Small</span>
            </label>
            <label className={styles.radioLabel}>
              <input
                type="radio"
                name="textSize"
                value="standard"
                checked={textSize === 'standard'}
                onChange={() => setTextSize('standard')}
                className={styles.radio}
              />
              <span>Standard</span>
            </label>
            <label className={styles.radioLabel}>
              <input
                type="radio"
                name="textSize"
                value="large"
                checked={textSize === 'large'}
                onChange={() => setTextSize('large')}
                className={styles.radio}
              />
              <span>Large</span>
            </label>
          </div>
        </div>

        {/* Width */}
        <div className={styles.control}>
          <div className={styles.controlLabel}>Width</div>
          <div className={styles.divider}></div>
          <div className={styles.radioGroup}>
            <label className={styles.radioLabel}>
              <input
                type="radio"
                name="width"
                value="standard"
                checked={width === 'standard'}
                onChange={() => setWidth('standard')}
                className={styles.radio}
              />
              <span>Standard</span>
            </label>
            <label className={styles.radioLabel}>
              <input
                type="radio"
                name="width"
                value="wide"
                checked={width === 'wide'}
                onChange={() => setWidth('wide')}
                className={styles.radio}
              />
              <span>Wide</span>
            </label>
          </div>
          {showWidthMessage && width === 'wide' && (
            <div className={styles.widthMessage}>
              The content is as wide as possible for your browser window.
            </div>
          )}
        </div>

        {/* Color */}
        <div className={styles.control}>
          <div className={styles.controlLabel}>Color</div>
          <div className={styles.divider}></div>
          <div className={styles.radioGroup}>
            <label className={styles.radioLabel}>
              <input
                type="radio"
                name="colorScheme"
                value="automatic"
                checked={colorScheme === 'automatic'}
                onChange={() => setColorScheme('automatic')}
                className={styles.radio}
              />
              <span>Automatic</span>
            </label>
            <label className={styles.radioLabel}>
              <input
                type="radio"
                name="colorScheme"
                value="light"
                checked={colorScheme === 'light'}
                onChange={() => setColorScheme('light')}
                className={styles.radio}
              />
              <span>Light</span>
            </label>
            <label className={styles.radioLabel}>
              <input
                type="radio"
                name="colorScheme"
                value="dark"
                checked={colorScheme === 'dark'}
                onChange={() => setColorScheme('dark')}
                className={styles.radio}
              />
              <span>Dark</span>
            </label>
          </div>
        </div>
      </div>
    </aside>
  );
}
