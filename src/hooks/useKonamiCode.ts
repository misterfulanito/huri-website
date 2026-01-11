'use client';

import { useEffect, useState, useCallback } from 'react';

// Konami Code sequence: ↑ ↑ ↓ ↓ ← → ← → B A
const KONAMI_CODE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'KeyB',
  'KeyA',
];

interface UseKonamiCodeOptions {
  onActivate?: () => void;
  persistKey?: string;
}

export function useKonamiCode(options: UseKonamiCodeOptions = {}) {
  const { onActivate, persistKey = 'konamiCodeActivated' } = options;
  const [isActivated, setIsActivated] = useState(false);
  const [inputSequence, setInputSequence] = useState<string[]>([]);

  // Check localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(persistKey);
      if (stored === 'true') {
        setIsActivated(true);
      }
    }
  }, [persistKey]);

  const activate = useCallback(() => {
    setIsActivated(true);
    if (typeof window !== 'undefined') {
      localStorage.setItem(persistKey, 'true');
    }
    onActivate?.();
  }, [onActivate, persistKey]);

  const deactivate = useCallback(() => {
    setIsActivated(false);
    if (typeof window !== 'undefined') {
      localStorage.removeItem(persistKey);
    }
  }, [persistKey]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Don't capture if user is typing in an input
      if (
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      const key = event.code;

      setInputSequence((prev) => {
        const newSequence = [...prev, key].slice(-KONAMI_CODE.length);

        // Check if the sequence matches
        if (newSequence.length === KONAMI_CODE.length) {
          const matches = newSequence.every(
            (k, i) => k === KONAMI_CODE[i]
          );

          if (matches && !isActivated) {
            // Use setTimeout to avoid state update during render
            setTimeout(() => activate(), 0);
          }
        }

        return newSequence;
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isActivated, activate]);

  return {
    isActivated,
    activate,
    deactivate,
    progress: inputSequence.length / KONAMI_CODE.length,
  };
}
