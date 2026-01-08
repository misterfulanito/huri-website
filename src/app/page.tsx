import PageLayout from '@/components/PageLayout';

export default function Home() {
  return (
    <PageLayout>
      <article>
        <section id="about" style={{ minHeight: '100vh', paddingTop: '2rem' }}>
          <h1>Huri</h1>
          <p>
            Welcome to my Wikipedia-style portfolio website. This section will
            contain information about me.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </section>

        <section
          id="experience"
          style={{ minHeight: '100vh', paddingTop: '2rem' }}
        >
          <h2>My Experience</h2>
          <p>
            This section will showcase my professional experience and career
            timeline.
          </p>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </section>

        <section
          id="portfolio"
          style={{ minHeight: '100vh', paddingTop: '2rem' }}
        >
          <h2>Portfolio</h2>
          <p>Featured projects and work samples will be displayed here.</p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
        </section>

        <section id="blog" style={{ minHeight: '100vh', paddingTop: '2rem' }}>
          <h2>Blog</h2>
          <p>Articles and thoughts will be listed in this section.</p>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </section>

        <section
          id="contact"
          style={{ minHeight: '100vh', paddingTop: '2rem' }}
        >
          <h2>Contact</h2>
          <p>Get in touch through various channels.</p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium.
          </p>
        </section>
      </article>
    </PageLayout>
  );
}
