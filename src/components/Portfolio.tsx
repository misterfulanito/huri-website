import Image from 'next/image';
import styles from './Portfolio.module.css';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    title: 'E-commerce Platform',
    description:
      'A full-featured e-commerce platform with shopping cart, payment integration, and admin dashboard. Built with modern web technologies for optimal performance.',
    image: '/project-placeholder-1.svg',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/misterfulanito',
    featured: true,
  },
  {
    title: 'Task Management App',
    description:
      'Collaborative task management application with real-time updates, team collaboration features, and intuitive drag-and-drop interface.',
    image: '/project-placeholder-2.svg',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/misterfulanito',
    featured: true,
  },
  {
    title: 'Weather Dashboard',
    description:
      'Beautiful weather dashboard with forecasts, interactive maps, and location-based recommendations. Integrates multiple weather APIs for accuracy.',
    image: '/project-placeholder-3.svg',
    technologies: ['React', 'OpenWeather API', 'Mapbox', 'Chart.js'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/misterfulanito',
    featured: false,
  },
  {
    title: 'Portfolio CMS',
    description:
      'Content management system specifically designed for portfolio websites, with customizable templates and easy content editing.',
    image: '/project-placeholder-4.svg',
    technologies: ['Next.js', 'Tina CMS', 'Tailwind CSS', 'Vercel'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/misterfulanito',
    featured: false,
  },
  {
    title: 'Fitness Tracker',
    description:
      'Mobile-responsive fitness tracking app with workout logging, progress charts, and personalized workout recommendations.',
    image: '/project-placeholder-5.svg',
    technologies: ['React Native', 'Firebase', 'Redux', 'Chart.js'],
    githubUrl: 'https://github.com/misterfulanito',
    featured: false,
  },
  {
    title: 'Blog Platform',
    description:
      'Modern blogging platform with Markdown support, SEO optimization, and social sharing features. Designed for writers and content creators.',
    image: '/project-placeholder-6.svg',
    technologies: ['Next.js', 'MDX', 'Tailwind CSS', 'Vercel'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/misterfulanito',
    featured: false,
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className={styles.section}>
      <h2 className={styles.title}>Portfolio</h2>

      <p className={styles.intro}>
        A selection of projects showcasing work in web development, ranging
        from e-commerce platforms to productivity tools. Each project
        demonstrates proficiency in modern technologies and best practices.
      </p>

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <article key={index} className={styles.projectCard}>
            <div className={styles.imageContainer}>
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={250}
                className={styles.projectImage}
              />
              {project.featured && (
                <span className={styles.featuredBadge}>Featured</span>
              )}
            </div>

            <div className={styles.cardContent}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>

              <div className={styles.technologies}>
                {project.technologies.map((tech, i) => (
                  <span key={i} className={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className={styles.links}>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.link} wiki-external-link`}
                  >
                    Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.link} wiki-external-link`}
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
