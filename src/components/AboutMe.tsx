import Image from 'next/image';
import styles from './AboutMe.module.css';

export default function AboutMe() {
  return (
    <section id="about" className={styles.section}>
      <h1 className={styles.title}>Huri</h1>

      {/* Wikipedia-style Infobox */}
      <aside className={styles.infobox}>
        <div className={styles.infoboxTitle}>Personal Information</div>

        <div className={styles.infoboxImage}>
          <Image
            src="/placeholder-avatar.svg"
            alt="Huri"
            width={220}
            height={220}
            className={styles.avatar}
          />
        </div>

        <div className={styles.infoboxContent}>
          <div className={styles.infoboxRow}>
            <div className={styles.infoboxLabel}>Location</div>
            <div className={styles.infoboxData}>San Francisco, CA</div>
          </div>

          <div className={styles.infoboxRow}>
            <div className={styles.infoboxLabel}>Education</div>
            <div className={styles.infoboxData}>
              Computer Science
              <br />
              Stanford University
            </div>
          </div>

          <div className={styles.infoboxRow}>
            <div className={styles.infoboxLabel}>Current Role</div>
            <div className={styles.infoboxData}>
              Senior Software Engineer
            </div>
          </div>

          <div className={styles.infoboxRow}>
            <div className={styles.infoboxLabel}>Skills</div>
            <div className={styles.infoboxData}>
              JavaScript, TypeScript
              <br />
              React, Next.js
              <br />
              Node.js, Python
            </div>
          </div>

          <div className={styles.infoboxRow}>
            <div className={styles.infoboxLabel}>Links</div>
            <div className={styles.infoboxData}>
              <a
                href="https://github.com/misterfulanito"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-external-link"
              >
                GitHub
              </a>
              <br />
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-external-link"
              >
                LinkedIn
              </a>
              <br />
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-external-link"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className={styles.content}>
        <p className={styles.intro}>
          <strong>Huri</strong> is a software engineer specializing in web
          development and user interface design. With a passion for creating
          elegant solutions to complex problems, Huri has contributed to
          various open-source projects and commercial applications.
        </p>

        <h2>Early Life and Education</h2>
        <p>
          Born and raised in the San Francisco Bay Area, Huri developed an
          early interest in technology and programming. After completing a
          degree in Computer Science at Stanford University, Huri began working
          in the tech industry, focusing on full-stack web development.
        </p>

        <h2>Career</h2>
        <p>
          Throughout a diverse career spanning several years, Huri has worked
          with startups and established companies, building scalable web
          applications and contributing to product development. Expertise
          includes modern JavaScript frameworks, cloud infrastructure, and agile
          development methodologies.
        </p>

        <h2>Professional Philosophy</h2>
        <p>
          Huri believes in writing clean, maintainable code and values
          collaboration and continuous learning. A strong advocate for web
          accessibility and performance optimization, Huri strives to create
          experiences that are both beautiful and functional.
        </p>

        <h2>Personal Interests</h2>
        <p>
          Outside of professional work, Huri enjoys contributing to open-source
          projects, attending tech meetups, and exploring new technologies.
          Other interests include:
        </p>
        <ul>
          <li>Reading technical books and blogs</li>
          <li>Photography and visual design</li>
          <li>Hiking and outdoor activities</li>
          <li>Gaming and retro game development</li>
        </ul>

        <h2>Community Involvement</h2>
        <p>
          Active in the developer community, Huri regularly participates in
          hackathons, contributes to open-source projects, and mentors aspiring
          developers. Passionate about knowledge sharing and helping others
          succeed in their tech careers.
        </p>
      </div>
    </section>
  );
}
