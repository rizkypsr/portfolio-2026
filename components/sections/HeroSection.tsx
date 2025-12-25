'use client';

import { portfolioData } from '@/lib/data';
import { Button } from '@/components/ui/Button';
import { Github } from 'lucide-react';

export function HeroSection() {
  const { personal } = portfolioData;

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center py-16 md:py-20 px-4 sm:px-6 md:px-8"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Role Badge - tilted with hover effect */}
        <div className="mb-6 md:mb-8">
          <span className="inline-block bg-neo-cyan text-black font-bold text-xs sm:text-sm uppercase tracking-wider px-6 py-3 border-2 border-neo-border rounded-full shadow-neo-sm -rotate-3 hover:rotate-0 transition-transform duration-300 cursor-default">
            {personal.role}
          </span>
        </div>

        {/* Main Headline - Large bold text */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 md:mb-8 leading-[0.95] tracking-tighter">
          <span className="block text-neo-border">BUILDING</span>
          <span
            className="block text-transparent bg-clip-text"
            style={{
              backgroundImage: 'linear-gradient(90deg, #99E885 0%, #F7CB46 100%)',
            }}
          >
            DIGITAL
          </span>
          <span className="block text-neo-border">EXPERIENCES</span>
        </h1>

        {/* Introduction paragraph with left border */}
        <div className="border-l-4 border-neo-primary pl-4 sm:pl-6 mb-8 md:mb-10 max-w-xl">
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Hi, I&apos;m Rizky — a Full Stack Developer from Indonesia with 5+ years of experience in web & mobile app development. I turn complex problems into chunky, beautiful, and functional code.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
          <Button href="#projects" variant="primary">
            View My Work
          </Button>
          <Button
            href={personal.github}
            variant="secondary"
            external
            icon={<Github size={20} />}
          >
            GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
