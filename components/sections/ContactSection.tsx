'use client';

import { useState } from 'react';
import { Mail, Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { portfolioData } from '@/lib/data';

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const { email } = portfolioData.personal;

  const handleCopyDetails = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback: show alert with email if clipboard API fails
      alert(`Contact email: ${email}`);
    }
  };

  return (
    <section 
      id="contact" 
      className="py-12 sm:py-16 md:py-24"
    >
      {/* Mobile-first: smaller padding, larger on tablet/desktop */}
      <div className="max-w-4xl mx-auto px-4 sm:px-5 md:px-6">
        <div className="
          bg-neo-primary border-neo rounded-neo-lg 
          p-6 sm:p-8 md:p-12 
          shadow-neo
        ">
          {/* Headline - responsive typography */}
          <h2 className="
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
            font-bold text-black mb-3 md:mb-4
          ">
            GOT A PROJECT?
          </h2>
          <p className="
            text-base sm:text-lg md:text-xl 
            text-black/80 mb-6 md:mb-8
          ">
            Let&apos;s work together and build something amazing.
          </p>
          
          {/* Buttons - stack on mobile, row on tablet+ */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button
              href={`mailto:${email}`}
              variant="primary"
              icon={<Mail className="w-4 h-4 sm:w-5 sm:h-5" />}
            >
              Email Me
            </Button>
            
            <Button
              onClick={handleCopyDetails}
              variant="secondary"
              icon={copied ? <Check className="w-4 h-4 sm:w-5 sm:h-5" /> : <Copy className="w-4 h-4 sm:w-5 sm:h-5" />}
            >
              {copied ? 'Copied!' : 'Copy Details'}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
