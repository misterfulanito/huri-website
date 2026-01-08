'use client';

import { useEffect, useState } from 'react';
import styles from './AccessibilityTools.module.css';

type TextSize = 'small' | 'standard' | 'large';
type Width = 'standard' | 'wide';
type ColorScheme = 'automatic' | 'light' | 'dark';

export default function AccessibilityTools() {
  const [textSize, setTextSize] = useState<TextSize>('standard');
  const [width, setWidth] = useState<Width>('standard');
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');

  useEffect(() => {
    // Load preferences from localStorage
    const savedTextSize = localStorage.getItem('textSize') as TextSize;
    const savedWidth = localStorage.getItem('width') as Width;
    const savedColorScheme = localStorage.getItem('colorScheme') as ColorScheme;

    if (savedTextSize) setTextSize(savedTextSize);
    if (savedWidth) setWidth(savedWidth);
    if (savedColorScheme) setColorScheme(savedColorScheme);
  }, []);

  useEffect(() => {
    // Apply text size
    const root = document.documentElement;
    switch (textSize) {
      case 'small':
        root.style.setProperty('--base-font-size', '14px');
        root.style.setProperty('--base-line-height', '22px');
        break;
      case 'large':
        root.style.setProperty('--base-font-size', '18px');
        root.style.setProperty('--base-line-height', '30px');
        break;
      default:
        root.style.setProperty('--base-font-size', '16px');
        root.style.setProperty('--base-line-height', '26px');
    }
    localStorage.setItem('textSize', textSize);
  }, [textSize]);

  useEffect(() => {
    // Apply width
    const root = document.documentElement;
    if (width === 'wide') {
      root.style.setProperty('--max-content-width', '1400px');
    } else {
      root.style.setProperty('--max-content-width', '1000px');
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

  return (
    <aside className={styles.accessibility}>
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Appearance</h3>

        <div className={styles.control}>
          <div className={styles.controlLabel}>Text</div>
          <div className={styles.buttonGroup}>
            <button
              className={`${styles.button} ${textSize === 'small' ? styles.active : ''}`}
              onClick={() => setTextSize('small')}
              aria-pressed={textSize === 'small'}
            >
              Small
            </button>
            <button
              className={`${styles.button} ${textSize === 'standard' ? styles.active : ''}`}
              onClick={() => setTextSize('standard')}
              aria-pressed={textSize === 'standard'}
            >
              Standard
            </button>
            <button
              className={`${styles.button} ${textSize === 'large' ? styles.active : ''}`}
              onClick={() => setTextSize('large')}
              aria-pressed={textSize === 'large'}
            >
              Large
            </button>
          </div>
        </div>

        <div className={styles.control}>
          <div className={styles.controlLabel}>Width</div>
          <div className={styles.buttonGroup}>
            <button
              className={`${styles.button} ${width === 'standard' ? styles.active : ''}`}
              onClick={() => setWidth('standard')}
              aria-pressed={width === 'standard'}
            >
              Standard
            </button>
            <button
              className={`${styles.button} ${width === 'wide' ? styles.active : ''}`}
              onClick={() => setWidth('wide')}
              aria-pressed={width === 'wide'}
            >
              Wide
            </button>
          </div>
        </div>

        <div className={styles.control}>
          <div className={styles.controlLabel}>Color</div>
          <div className={styles.buttonGroup}>
            <button
              className={`${styles.button} ${colorScheme === 'automatic' ? styles.active : ''}`}
              onClick={() => setColorScheme('automatic')}
              aria-pressed={colorScheme === 'automatic'}
            >
              Automatic
            </button>
            <button
              className={`${styles.button} ${colorScheme === 'light' ? styles.active : ''}`}
              onClick={() => setColorScheme('light')}
              aria-pressed={colorScheme === 'light'}
            >
              Light
            </button>
            <button
              className={`${styles.button} ${colorScheme === 'dark' ? styles.active : ''}`}
              onClick={() => setColorScheme('dark')}
              aria-pressed={colorScheme === 'dark'}
            >
              Dark
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
