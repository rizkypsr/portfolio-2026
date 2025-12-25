'use client';

import { portfolioData } from '@/lib/data';
import { TechBadge } from '@/components/ui/TechBadge';

export function AboutSection() {
  const { personal, skills } = portfolioData;

  return (
    <section
      id="about"
      className="
        py-12 sm:py-16 md:py-20 
        px-4 sm:px-6 md:px-8
      "
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header - responsive typography */}
        <h2 className="
          text-2xl sm:text-3xl md:text-4xl 
          font-bold mb-8 sm:mb-10 md:mb-12 
          text-center
        ">
          About <span className="text-neo-primary">Me</span>
        </h2>

        {/* Mobile: stacked vertically, Tablet+: two columns */}
        <div className="
          grid grid-cols-1 md:grid-cols-2 
          gap-8 md:gap-12 
          items-start
        ">
          {/* Profile Image with decorative pink background */}
          <div className="relative flex justify-center">
            {/* Decorative pink background element - responsive sizing */}
            <div className="
              absolute top-3 left-1/2 -translate-x-1/2 md:left-8 md:translate-x-0
              w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 
              bg-neo-pink rounded-neo border-neo
            " />

            {/* Profile image container - responsive sizing */}
            <div className="
              relative 
              w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 
              bg-surface border-neo rounded-neo shadow-neo overflow-hidden
            ">
              {/* Placeholder for profile image - using initials */}
              <div className="w-full h-full flex items-center justify-center bg-neo-cyan">
                <span className="
                  text-5xl sm:text-6xl md:text-7xl lg:text-8xl 
                  font-bold text-foreground
                ">
                  {personal.name.charAt(0)}
                </span>
              </div>
            </div>
          </div>

          {/* About Text Content */}
          <div className="space-y-6">
            <div className="
              bg-surface border-neo rounded-neo 
              p-4 sm:p-5 md:p-6 
              shadow-neo
            ">
              <h3 className="text-lg sm:text-xl font-bold mb-3 md:mb-4">
                Hi, I'm <span className="text-neo-primary">{personal.name}</span>! 👋
              </h3>
              <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                {personal.bio}
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="mt-12 sm:mt-14 md:mt-16">
          <h3 className="
            text-xl sm:text-2xl 
            font-bold mb-6 sm:mb-8 
            text-center
          ">
            Tech <span className="text-neo-pink">Stack</span>
          </h3>

          {/* Tech stack badges grid - responsive gap */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {skills.map((skill) => (
              <TechBadge key={skill.name} name={skill.name} color={skill.color} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
