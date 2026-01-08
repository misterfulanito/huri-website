import PageLayout from '@/components/PageLayout';
import AboutMe from '@/components/AboutMe';
import Experience from '@/components/Experience';
import Portfolio from '@/components/Portfolio';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <PageLayout>
      <article>
        <AboutMe />
        <Experience />
        <Portfolio />
        <Blog />
        <Contact />
      </article>
    </PageLayout>
  );
}
