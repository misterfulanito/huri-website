'use client';

import dynamic from 'next/dynamic';
import styles from './Experience.module.css';

// Dynamically import Chrono with SSR disabled to avoid DOM manipulation errors
const Chrono = dynamic(
  () => import('react-chrono').then((mod) => mod.Chrono),
  {
    ssr: false,
    loading: () => <div className={styles.loading}>Loading timeline...</div>
  }
);

interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  location: string;
  responsibilities: string[];
  tags: string[];
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
    tags: ['React', 'Next.js', 'TypeScript', 'Node.js', 'AWS'],
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
    tags: ['Node.js', 'GraphQL', 'PostgreSQL', 'Docker'],
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
    tags: ['JavaScript', 'React', 'CSS', 'Webpack'],
  },
];

// Transform data for react-chrono
const chronoItems = experiences.map((exp) => ({
  title: exp.period,
  cardTitle: exp.position,
  cardSubtitle: `${exp.company} • ${exp.location}`,
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
          cardHeight={280}
          disableToolbar
          activeItemIndex={0}
          theme={{
            primary: '#0645ad',
            secondary: '#f8f9fa',
            cardBgColor: '#f8f9fa',
            titleColor: '#0645ad',
            titleColorActive: '#0645ad',
          }}
          fontSizes={{
            cardSubtitle: '0.9375rem',
            cardText: '1rem',
            cardTitle: '1.25rem',
            title: '0.8125rem',
          }}
        >
          {/* Custom card content with responsibilities and tags */}
          {experiences.map((exp, index) => (
            <div key={index} className={styles.customCard}>
              <ul className={styles.responsibilities}>
                {exp.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
              <div className={styles.tags}>
                {exp.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </Chrono>
      </div>
    </section>
  );
}
