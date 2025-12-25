'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  href?: string;
  onClick?: () => void;
  icon?: ReactNode;
  external?: boolean;
  className?: string;
}

export function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  icon,
  external = false,
  className = '',
}: ButtonProps) {
  // Mobile-first: smaller padding and text on mobile, larger on tablet+
  const baseStyles = `
    inline-flex items-center justify-center gap-1.5 sm:gap-2
    px-4 sm:px-5 md:px-6 py-2.5 sm:py-3
    font-bold text-sm sm:text-base
    border-neo rounded-neo
    shadow-neo shadow-neo-hover
    transition-all duration-150
    cursor-pointer
  `;

  const variantStyles = {
    primary: 'bg-foreground text-background',
    secondary: 'bg-surface text-foreground',
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`.trim();

  // If href is provided, render as a link
  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedStyles}
        >
          {children}
          {icon}
        </a>
      );
    }

    return (
      <Link href={href} className={combinedStyles}>
        {children}
        {icon}
      </Link>
    );
  }

  // Otherwise render as a button
  return (
    <button type="button" onClick={onClick} className={combinedStyles}>
      {children}
      {icon}
    </button>
  );
}

export default Button;
