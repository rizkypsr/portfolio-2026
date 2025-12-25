import { portfolioData } from '@/lib/data';

function LinkedInIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

interface SocialLink {
  label: string;
  href: string | undefined;
  icon: React.ReactNode;
}

export function Footer() {
  const { personal } = portfolioData;
  const currentYear = new Date().getFullYear();

  const socialLinks: SocialLink[] = [
    { label: 'LinkedIn', href: personal.linkedin, icon: <LinkedInIcon /> },
    { label: 'GitHub', href: personal.github, icon: <GitHubIcon /> },
  ];

  return (
    <footer className="bg-foreground text-background py-6 sm:py-8">
      {/* Mobile-first: smaller padding, larger on tablet/desktop */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stack vertically on mobile, row on tablet+ */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
          {/* Logo and Copyright */}
          <div className="flex flex-col items-center md:items-start gap-1 sm:gap-2">
            <span className="text-lg md:text-xl font-bold">
              buildby<span className="text-neo-primary">riz</span>
            </span>
            <p className="text-xs sm:text-sm opacity-80 text-center md:text-left">
              © {currentYear} {personal.name}. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3 sm:gap-4">
            {socialLinks.map(
              (link) =>
                link.href && (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      p-1.5 sm:p-2 rounded-neo
                      bg-background text-foreground
                      border-2 border-background
                      hover:bg-neo-primary hover:border-neo-primary
                      transition-colors duration-150
                    "
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
