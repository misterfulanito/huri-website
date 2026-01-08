'use client';

import { Chrono } from 'react-chrono';
import styles from './Experience.module.css';

interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  location: string;
  responsibilities: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: 'Tech Innovations Inc.',
    position: 'Senior Software Engineer',
    period: '2021 - Present',
    location: 'San Francisco, CA',
    responsibilities: [
      'Lead development of customer-facing web applications using React and Next.js',
      'Architected and implemented scalable microservices infrastructure',
      'Mentored junior developers and conducted code reviews',
      'Collaborated with product and design teams on feature development',
    ],
  },
  {
    company: 'StartupXYZ',
    position: 'Full Stack Developer',
    period: '2019 - 2021',
    location: 'Remote',
    responsibilities: [
      'Developed and maintained full-stack web applications',
      'Implemented RESTful APIs and GraphQL endpoints',
      'Optimized application performance and database queries',
      'Participated in agile development processes and sprint planning',
    ],
  },
  {
    company: 'Digital Solutions Co.',
    position: 'Frontend Developer',
    period: '2017 - 2019',
    location: 'San Francisco, CA',
    responsibilities: [
      'Built responsive user interfaces with modern web technologies',
      'Collaborated with UX designers to implement pixel-perfect designs',
      'Improved site performance and accessibility standards',
      'Maintained and updated legacy codebases',
    ],
  },
];

// Transform data for react-chrono
const chronoItems = experiences.map((exp) => ({
  title: exp.period,
  cardTitle: exp.position,
  cardSubtitle: `${exp.company} • ${exp.location}`,
  cardDetailedText: exp.responsibilities,
}));

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <h2 className={styles.title}>My Experience</h2>

      <p className={styles.intro}>
        A summary of professional experience in software development, focusing
        on web technologies and full-stack engineering.
      </p>

      <div className={styles.timelineWrapper}>
        <Chrono
          items={chronoItems}
          mode="VERTICAL"
          hideControls
          disableToolbar
          disableClickOnCircle
          cardHeight={200}
          theme={{
            primary: '#0645ad',
            secondary: '#f8f9fa',
            cardBgColor: '#f8f9fa',
            titleColor: '#000000',
            titleColorActive: '#0645ad',
          }}
          fontSizes={{
            cardSubtitle: '0.875rem',
            cardText: '0.875rem',
            cardTitle: '1.25rem',
            title: '0.8125rem',
          }}
        />
      </div>
    </section>
  );
}
