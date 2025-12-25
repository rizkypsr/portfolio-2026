'use client';

interface TechBadgeProps {
  name: string;
  color?: 'cyan' | 'pink' | 'green' | 'yellow' | 'white';
}

export function TechBadge({ name, color = 'white' }: TechBadgeProps) {
  const colorStyles = {
    cyan: 'bg-neo-cyan text-black',
    pink: 'bg-neo-pink text-black',
    green: 'bg-neo-primary text-black',
    yellow: 'bg-neo-yellow text-black',
    white: 'bg-surface text-foreground',
  };

  return (
    <span
      className={`inline-flex items-center justify-center px-3 sm:px-4 py-1.5 sm:py-2 font-semibold text-xs sm:text-sm border-neo rounded-full shadow-neo-sm transition-transform duration-150 hover:-translate-y-1 ${colorStyles[color]}`}
    >
      {name}
    </span>
  );
}

export default TechBadge;
