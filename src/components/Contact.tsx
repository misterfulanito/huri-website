import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <h2 className={styles.title}>Contact</h2>

      <p className={styles.intro}>
        Feel free to reach out for collaborations, questions, or just to say
        hello. I&apos;m always open to discussing new projects and opportunities.
      </p>

      <div className={styles.contactGrid}>
        {/* Contact Methods */}
        <div className={styles.contactMethods}>
          <h3 className={styles.subtitle}>Get in Touch</h3>

          <div className={styles.methodList}>
            <div className={styles.methodItem}>
              <div className={styles.methodIcon}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div className={styles.methodContent}>
                <div className={styles.methodLabel}>Email</div>
                <a
                  href="mailto:hello@huri.dev"
                  className={styles.methodValue}
                >
                  hello@huri.dev
                </a>
              </div>
            </div>

            <div className={styles.methodItem}>
              <div className={styles.methodIcon}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </div>
              <div className={styles.methodContent}>
                <div className={styles.methodLabel}>GitHub</div>
                <a
                  href="https://github.com/misterfulanito"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.methodValue} wiki-external-link`}
                >
                  @misterfulanito
                </a>
              </div>
            </div>

            <div className={styles.methodItem}>
              <div className={styles.methodIcon}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </div>
              <div className={styles.methodContent}>
                <div className={styles.methodLabel}>LinkedIn</div>
                <a
                  href="https://linkedin.com/in/huri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.methodValue} wiki-external-link`}
                >
                  linkedin.com/in/huri
                </a>
              </div>
            </div>

            <div className={styles.methodItem}>
              <div className={styles.methodIcon}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </div>
              <div className={styles.methodContent}>
                <div className={styles.methodLabel}>Twitter</div>
                <a
                  href="https://twitter.com/huri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.methodValue} wiki-external-link`}
                >
                  @huri
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className={styles.additionalInfo}>
          <h3 className={styles.subtitle}>Location & Availability</h3>

          <div className={styles.infoBox}>
            <div className={styles.infoItem}>
              <strong>Location:</strong> San Francisco, CA (PST)
            </div>
            <div className={styles.infoItem}>
              <strong>Status:</strong> Open to opportunities
            </div>
            <div className={styles.infoItem}>
              <strong>Response Time:</strong> Usually within 24-48 hours
            </div>
          </div>

          <h3 className={styles.subtitle}>Professional Networks</h3>

          <div className={styles.networkList}>
            <a
              href="https://stackoverflow.com/users/huri"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.networkLink} wiki-external-link`}
            >
              Stack Overflow
            </a>
            <a
              href="https://dev.to/huri"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.networkLink} wiki-external-link`}
            >
              DEV Community
            </a>
            <a
              href="https://dribbble.com/huri"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.networkLink} wiki-external-link`}
            >
              Dribbble
            </a>
            <a
              href="https://codepen.io/huri"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.networkLink} wiki-external-link`}
            >
              CodePen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
