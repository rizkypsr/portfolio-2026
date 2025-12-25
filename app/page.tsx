import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { ScrollToTop } from '@/components/ui/ScrollToTop';

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      {/* Responsive top padding: smaller on mobile (h-14), larger on desktop (h-16) */}
      <main className="pt-14 md:pt-16">
        <article>
          <HeroSection />
        </article>

        <article>
          <AboutSection />
        </article>

        <article>
          <ProjectsSection />
        </article>

        <article>
          <ContactSection />
        </article>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
