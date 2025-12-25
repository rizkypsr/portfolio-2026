'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from '../ui/ThemeToggle';

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

/**
 * Handles smooth scrolling to a section when a nav link is clicked.
 */
function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  e.preventDefault();
  const targetId = href.replace('#', '');
  const element = document.getElementById(targetId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

export function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface border-b-2 border-neo-border">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          {isHomePage ? (
            <a
              href="#"
              className="text-lg md:text-xl font-black tracking-tight text-foreground"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              buildby<span className="text-neo-primary">riz</span>
            </a>
          ) : (
            <Link
              href="/"
              className="text-lg md:text-xl font-black tracking-tight text-foreground"
            >
              buildby<span className="text-neo-primary">riz</span>
            </Link>
          )}

          {/* Right side: Nav Links + Theme Toggle */}
          <div className="flex items-center gap-6 md:gap-8">
            {/* Navigation Links - Hidden on mobile and on non-home pages */}
            {isHomePage && (
              <div className="hidden md:flex items-center gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-foreground font-extrabold hover:text-neo-primary transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}

            {/* Theme Toggle */}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
