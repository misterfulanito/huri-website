import styles from './Blog.module.css';

interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  readTime: string;
  tags: string[];
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    title: 'Building Scalable Web Applications with Next.js',
    date: 'January 5, 2026',
    excerpt:
      'Explore best practices for building scalable web applications using Next.js, including server-side rendering, static site generation, and API routes. Learn how to optimize performance and improve SEO.',
    readTime: '8 min read',
    tags: ['Next.js', 'React', 'Web Development'],
    slug: 'building-scalable-nextjs-apps',
  },
  {
    title: 'The Power of TypeScript in Modern Development',
    date: 'December 28, 2025',
    excerpt:
      'Discover how TypeScript enhances JavaScript development with type safety, better tooling, and improved code quality. A deep dive into practical use cases and advanced features.',
    readTime: '6 min read',
    tags: ['TypeScript', 'JavaScript', 'Programming'],
    slug: 'power-of-typescript',
  },
  {
    title: 'Optimizing React Performance: Tips and Tricks',
    date: 'December 15, 2025',
    excerpt:
      'Learn essential techniques for optimizing React application performance, including memoization, code splitting, lazy loading, and avoiding common pitfalls that slow down your app.',
    readTime: '10 min read',
    tags: ['React', 'Performance', 'Optimization'],
    slug: 'optimizing-react-performance',
  },
  {
    title: 'CSS Grid vs Flexbox: When to Use Each',
    date: 'November 30, 2025',
    excerpt:
      'A comprehensive comparison of CSS Grid and Flexbox, helping you understand when to use each layout system for building responsive and maintainable web layouts.',
    readTime: '7 min read',
    tags: ['CSS', 'Web Design', 'Frontend'],
    slug: 'css-grid-vs-flexbox',
  },
  {
    title: 'Introduction to Web Accessibility (WCAG 2.1)',
    date: 'November 18, 2025',
    excerpt:
      'Understanding web accessibility guidelines and how to implement them in your projects. Make your websites usable for everyone, including people with disabilities.',
    readTime: '9 min read',
    tags: ['Accessibility', 'WCAG', 'Web Standards'],
    slug: 'intro-to-web-accessibility',
  },
];

export default function Blog() {
  return (
    <section id="blog" className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Blog</h2>
        <a href="#blog-all" className={styles.blogButton}>
          Blog
        </a>
      </div>

      <p className={styles.intro}>
        Articles and thoughts on web development, programming, and technology.
        Exploring topics from frontend frameworks to best practices in software
        engineering.
      </p>

      <div className={styles.postGrid}>
        {blogPosts.slice(0, 3).map((post, index) => (
          <article key={index} className={styles.postItem}>
            <div className={styles.postHeader}>
              <h3 className={styles.postTitle}>
                <a href={`#${post.slug}`} className={styles.postLink}>
                  {post.title}
                </a>
              </h3>
              <div className={styles.postMeta}>
                <time className={styles.postDate}>{post.date}</time>
                <span className={styles.separator}>•</span>
                <span className={styles.readTime}>{post.readTime}</span>
              </div>
            </div>

            <p className={styles.postExcerpt}>{post.excerpt}</p>

            <div className={styles.postFooter}>
              <div className={styles.tags}>
                {post.tags.map((tag, i) => (
                  <span key={i} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <a href={`#${post.slug}`} className={styles.readMore}>
                Read more →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
