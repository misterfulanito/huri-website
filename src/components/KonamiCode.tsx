'use client';

import { useEffect, useState } from 'react';
import { useKonamiCode } from '../hooks/useKonamiCode';
import styles from './KonamiCode.module.css';

export default function KonamiCode() {
  const [showNotification, setShowNotification] = useState(false);
  const [hasShownOnce, setHasShownOnce] = useState(false);

  const { isActivated } = useKonamiCode({
    onActivate: () => {
      // Show notification
      setShowNotification(true);

      // Play a subtle sound effect (optional)
      playActivationSound();

      // Log to console for the curious
      console.log(
        '%c🎮 Achievement Unlocked: Master Gamer!',
        'color: #7db4ff; font-size: 20px; font-weight: bold;'
      );
      console.log(
        '%cYou found the Konami Code easter egg!',
        'color: #b8bcc2; font-size: 14px;'
      );

      // Hide notification after delay
      setTimeout(() => {
        setShowNotification(false);
      }, 4000);
    },
  });

  // Check if we should show the "already activated" message on first load
  useEffect(() => {
    if (isActivated && !hasShownOnce) {
      setHasShownOnce(true);
      // Don't show notification on page load if already activated
    }
  }, [isActivated, hasShownOnce]);

  // Log a hint to the console on mount
  useEffect(() => {
    console.log(
      '%c🎮 Hint: Old-school gamers might find something special here...',
      'color: #7db4ff; font-size: 12px; font-style: italic;'
    );
  }, []);

  // Apply retro effect to the page when activated
  useEffect(() => {
    if (isActivated) {
      document.documentElement.classList.add('konami-active');
    } else {
      document.documentElement.classList.remove('konami-active');
    }

    return () => {
      document.documentElement.classList.remove('konami-active');
    };
  }, [isActivated]);

  return (
    <>
      {showNotification && (
        <div className={styles.notification} role="alert" aria-live="polite">
          <div className={styles.notificationContent}>
            <span className={styles.icon}>🎮</span>
            <div className={styles.text}>
              <strong className={styles.title}>Achievement Unlocked!</strong>
              <span className={styles.subtitle}>Master Gamer Mode Activated</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function playActivationSound() {
  // Create a simple beep sound using Web Audio API
  if (typeof window === 'undefined') return;

  try {
    const audioContext = new (window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext)();

    // Create a sequence of beeps (like old game sounds)
    const playBeep = (frequency: number, startTime: number, duration: number) => {
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.value = frequency;
      oscillator.type = 'square';

      gainNode.gain.setValueAtTime(0.1, startTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + duration);

      oscillator.start(startTime);
      oscillator.stop(startTime + duration);
    };

    const now = audioContext.currentTime;
    playBeep(523.25, now, 0.1); // C5
    playBeep(659.25, now + 0.1, 0.1); // E5
    playBeep(783.99, now + 0.2, 0.2); // G5
  } catch {
    // Audio not supported or blocked, fail silently
  }
}
