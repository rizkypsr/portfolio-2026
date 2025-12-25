'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-neo-primary text-black border-[3px] border-neo-border rounded-full shadow-[4px_4px_0px_0px] shadow-neo-border flex items-center justify-center animate-bounce"
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-6 h-6" strokeWidth={2.5} />
    </button>
  );
}

export default ScrollToTop;
