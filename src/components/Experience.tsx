import styles from './Experience.module.css';

interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  location: string;
  responsibilities: string[];
  technologies: string[];
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
    technologies: [
      'TypeScript',
      'React',
      'Next.js',
      'Node.js',
      'PostgreSQL',
      'AWS',
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
    technologies: ['JavaScript', 'React', 'Express.js', 'MongoDB', 'Docker'],
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
    technologies: ['JavaScript', 'React', 'Redux', 'SASS', 'Webpack'],
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

      <div className={styles.timeline}>
        {experiences.map((exp, index) => (
          <article key={index} className={styles.experienceItem}>
            <div className={styles.header}>
              <h3 className={styles.position}>{exp.position}</h3>
              <div className={styles.period}>{exp.period}</div>
            </div>

            <div className={styles.companyInfo}>
              <span className={styles.company}>{exp.company}</span>
              <span className={styles.separator}>•</span>
              <span className={styles.location}>{exp.location}</span>
            </div>

            <div className={styles.responsibilities}>
              <h4 className={styles.subsectionTitle}>
                Key Responsibilities:
              </h4>
              <ul className={styles.list}>
                {exp.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            </div>

            <div className={styles.technologies}>
              <h4 className={styles.subsectionTitle}>Technologies:</h4>
              <div className={styles.techTags}>
                {exp.technologies.map((tech, i) => (
                  <span key={i} className={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
