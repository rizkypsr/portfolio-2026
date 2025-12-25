import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rizky | Full Stack Developer Portfolio Indonesia",
  description:
    "Full Stack Developer Indonesia dengan 4+ tahun pengalaman di Flutter, React, Laravel, dan Kotlin. Spesialis web & mobile app development.",
  openGraph: {
    title: "Rizky | Full Stack Developer Portfolio Indonesia",
    description:
      "Full Stack Developer Indonesia dengan 4+ tahun pengalaman di Flutter, React, Laravel, dan Kotlin. Spesialis web & mobile app development.",
    type: "website",
    locale: "en_US",
    siteName: "buildbyriz",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rizky | Full Stack Developer Portfolio Indonesia",
    description:
      "Full Stack Developer Indonesia dengan 4+ tahun pengalaman di Flutter, React, Laravel, dan Kotlin.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Script to prevent flash of incorrect theme on page load
const themeScript = `
  (function() {
    try {
      var theme = localStorage.getItem('theme');
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      }
    } catch (e) {}
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
