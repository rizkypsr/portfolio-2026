'use client';

import { ArrowDown } from 'lucide-react';
import { ProjectCard } from '../ui/ProjectCard';
import { portfolioData } from '@/lib/data';

const ACCENT_COLORS: Array<'pink' | 'green' | 'yellow' | 'cyan'> = [
  'pink',
  'green',
  'yellow',
  'cyan',
];

export function getAccentColor(index: number): 'pink' | 'green' | 'yellow' | 'cyan' {
  return ACCENT_COLORS[index % ACCENT_COLORS.length];
}

export function ProjectsSection() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-start justify-between mb-8 sm:mb-12">
          <div>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-neo-border tracking-tighter mb-2">
              PROJECTS
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base font-medium tracking-wide">
              // SELECTED WORKS
            </p>
          </div>
          <ArrowDown
            className="w-8 h-8 sm:w-10 sm:h-10 text-neo-border animate-bounce mt-2"
            strokeWidth={2.5}
            aria-hidden="true"
          />
        </div>

        {/* Projects grid - 1 column on mobile, 2 on tablet+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              accentColor={getAccentColor(index)}
              images={project.images}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
