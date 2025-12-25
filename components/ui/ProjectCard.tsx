'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  accentColor: 'pink' | 'green' | 'yellow' | 'cyan';
  images: string[];
}

export function ProjectCard({
  id,
  title,
  description,
  techStack,
  accentColor,
  images,
}: ProjectCardProps) {
  const accentColorStyles = {
    pink: 'bg-neo-pink',
    green: 'bg-neo-primary',
    yellow: 'bg-neo-yellow',
    cyan: 'bg-neo-cyan',
  };

  const hasImage = images && images.length > 0;

  return (
    <Link
      href={`/projects/${id}`}
      className="block border-[3px] border-neo-border rounded-3xl overflow-hidden bg-surface shadow-[6px_6px_0px_0px] shadow-neo-border transition-all duration-200 cursor-pointer group hover:shadow-[3px_3px_0px_0px] hover:translate-x-0.75 hover:translate-y-0.75"
    >
      {/* Image area */}
      <div
        className={`${accentColorStyles[accentColor]} h-52 sm:h-60 md:h-72 border-b-[3px] border-neo-border relative overflow-hidden`}
      >
        {hasImage ? (
          <Image
            src={images[0]}
            alt={title}
            fill
            className="object-contain group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <>
            {/* Fallback decorative elements */}
            <div className="absolute top-4 left-4 right-4 h-8 bg-neo-border/20 rounded-md flex items-center px-3 gap-2">
              <div className="w-3 h-3 rounded-full bg-neo-border/30" />
              <div className="w-3 h-3 rounded-full bg-neo-border/30" />
              <div className="w-3 h-3 rounded-full bg-neo-border/30" />
            </div>
            <div className="absolute top-16 left-4 right-4 bottom-4 bg-neo-border/10 rounded-lg" />
            <div className="absolute top-12 right-8 w-16 h-16 rounded-full bg-neo-yellow/80 border-2 border-neo-border/20" />
            <div className="absolute bottom-8 left-8 w-24 h-32 bg-neo-cyan/60 rounded-lg border-2 border-neo-border/20 -rotate-12" />
          </>
        )}
      </div>

      {/* Card content */}
      <div className="p-6 sm:p-8 bg-surface">
        {/* Title row with arrow button */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <h3 className="font-black text-xl sm:text-2xl text-neo-border uppercase tracking-tight leading-tight">
            {title}
          </h3>
          <div className="shrink-0 w-12 h-12 border-[3px] border-neo-border rounded-xl flex items-center justify-center bg-surface group-hover:bg-neo-border transition-colors">
            <ArrowUpRight
              className="w-6 h-6 text-neo-border group-hover:text-surface transition-colors"
              strokeWidth={2.5}
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-base leading-relaxed mb-6">
          {description}
        </p>

        {/* Tech stack badges */}
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-4 py-1.5 text-sm font-medium text-neo-border border-2 border-neo-border rounded-full bg-transparent"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
