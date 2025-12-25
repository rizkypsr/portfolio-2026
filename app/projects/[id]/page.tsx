import { portfolioData } from '@/lib/data';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScrollToTop } from '@/components/ui/ScrollToTop';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

/* ✅ WAJIB untuk static export */
export async function generateStaticParams() {
  return portfolioData.projects.map((project) => ({
    id: project.id.toString(),
  }));
}

/* (opsional tapi aman) */
export const dynamic = 'force-static';

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = portfolioData.projects.find(
    (p) => p.id.toString() === id
  );

  if (!project) {
    return (
      <>
        <Navbar />
        <main className="pt-14 md:pt-16 min-h-screen flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-4xl font-black text-neo-border mb-4">
              Project Not Found
            </h1>
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-neo-primary font-bold hover:underline"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Projects
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const accentColorStyles: Record<string, string> = {
    pink: 'bg-neo-pink',
    green: 'bg-neo-primary',
    yellow: 'bg-neo-yellow',
    cyan: 'bg-neo-cyan',
  };

  const hasImages = project.images?.length > 0;
  const externalLink = project.link || project.appStoreLink;

  return (
    <>
      <Navbar />
      <main className="pt-14 md:pt-16">
        <article className="py-12 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 mb-8"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Projects
            </Link>

            <h1 className="text-5xl font-black mb-4">{project.title}</h1>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.techStack.map((tech) => (
                <span key={tech} className="px-4 py-1.5 border rounded-full">
                  {tech}
                </span>
              ))}
            </div>

            {externalLink && (
              <a
                href={externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mb-8"
              >
                <ExternalLink className="w-5 h-5" />
                View Live Project
              </a>
            )}

            <p className="mb-12">{project.description}</p>

            {hasImages && (
              <div className="space-y-6">
                {project.images.map((image, index) => (
                  <div
                    key={index}
                    className={`${accentColorStyles[project.accentColor]} rounded-xl overflow-hidden`}
                  >
                    <div className="relative aspect-video">
                      <Image
                        src={image}
                        alt={`${project.title} screenshot ${index + 1}`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 800px"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </article>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
