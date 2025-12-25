'use client';

import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

function SunIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="w-4 h-4 sm:w-5 sm:h-5"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="w-4 h-4 sm:w-5 sm:h-5"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}

/**
 * Gets the initial theme from localStorage.
 * Returns null during SSR to prevent hydration mismatch.
 * Default is light mode (no system preference check).
 */
function getInitialTheme(): Theme | null {
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    const stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') {
      return stored;
    }
  } catch {
    // localStorage unavailable (e.g., private browsing)
  }

  // Default to light mode
  return 'light';
}

/**
 * Applies the theme to the document by toggling the 'dark' class on <html>.
 */
function applyTheme(theme: Theme): void {
  if (typeof document === 'undefined') return;

  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

/**
 * Persists the theme to localStorage.
 */
function persistTheme(theme: Theme): void {
  try {
    localStorage.setItem('theme', theme);
  } catch {
    // localStorage unavailable
  }
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);
  const [mounted, setMounted] = useState(false);

  // Initialize theme on mount (client-side only)
  useEffect(() => {
    const initialTheme = getInitialTheme();
    setTheme(initialTheme ?? 'light');
    if (initialTheme) {
      applyTheme(initialTheme);
    }
    setMounted(true);
  }, []);

  // Apply theme changes
  useEffect(() => {
    if (theme && mounted) {
      applyTheme(theme);
      persistTheme(theme);
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // Render placeholder during SSR to prevent hydration mismatch
  // Mobile-first: smaller button on mobile, larger on tablet+
  if (!mounted) {
    return (
      <button
        type="button"
        className="
          inline-flex items-center justify-center
          w-8 h-8 sm:w-10 sm:h-10
          border-neo rounded-neo
          bg-surface
          shadow-neo-sm shadow-neo-hover
          transition-all duration-150
          cursor-pointer
        "
        aria-label="Toggle theme"
        disabled
      >
        <span className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="
        inline-flex items-center justify-center
        w-8 h-8 sm:w-10 sm:h-10
        border-neo rounded-neo
        bg-surface text-foreground
        shadow-neo-sm shadow-neo-hover
        transition-all duration-150
        cursor-pointer
      "
      aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      {theme === 'light' ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}

export default ThemeToggle;
