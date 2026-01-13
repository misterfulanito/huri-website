'use client';

import Timeline, { TimelineItem } from './Timeline';
import styles from './Experience.module.css';

const experiences: TimelineItem[] = [
  {
    id: 'tech-innovations',
    period: '2021 - Present',
    title: 'Senior Software Engineer',
    subtitle: 'Tech Innovations Inc. • San Francisco, CA',
    description: [
      'Lead development of customer-facing web applications using React and Next.js',
      'Architected and implemented scalable microservices infrastructure',
      'Mentored junior developers and conducted code reviews',
      'Collaborated with product and design teams on feature development',
    ],
    tags: ['React', 'Next.js', 'TypeScript', 'Node.js', 'AWS'],
  },
  {
    id: 'startupxyz',
    period: '2019 - 2021',
    title: 'Full Stack Developer',
    subtitle: 'StartupXYZ • Remote',
    description: [
      'Developed and maintained full-stack web applications',
      'Implemented RESTful APIs and GraphQL endpoints',
      'Optimized application performance and database queries',
      'Participated in agile development processes and sprint planning',
    ],
    tags: ['Node.js', 'GraphQL', 'PostgreSQL', 'Docker'],
  },
  {
    id: 'digital-solutions',
    period: '2017 - 2019',
    title: 'Frontend Developer',
    subtitle: 'Digital Solutions Co. • San Francisco, CA',
    description: [
      'Built responsive user interfaces with modern web technologies',
      'Collaborated with UX designers to implement pixel-perfect designs',
      'Improved site performance and accessibility standards',
      'Maintained and updated legacy codebases',
    ],
    tags: ['JavaScript', 'React', 'CSS', 'Webpack'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <h2 className={styles.title}>My Experience</h2>

      <p className={styles.intro}>
        A summary of professional experience in software development, focusing
        on web technologies and full-stack engineering.
      </p>

      <Timeline items={experiences} />
    </section>
  );
}
