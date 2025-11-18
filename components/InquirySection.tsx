'use client';

import { Button } from '@/components/ui/button';
import { socialLinks } from '@/lib/content-data';
import { Linkedin, Youtube, Mail } from 'lucide-react';

const iconMap = {
  linkedin: Linkedin,
  youtube: Youtube,
};

export function InquirySection() {
  return (
    <section id="inquiry" className="bg-[#2a3971] text-white">
      <div className="section-container py-20 lg:py-28">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Contact us to learn more about our secure industrial computing solutions and how we can help protect your critical infrastructure.
          </p>
          <Button
            size="lg"
            onClick={() =>
              window.open('https://www.asrockind.com/product-inquiry', '_blank')
            }
            className="bg-white text-[hsl(var(--secondary))] hover:bg-white/90 text-lg px-8 py-6 h-auto"
          >
            <Mail className="mr-2 w-5 h-5" />
            Product Inquiry
          </Button>
        </div>

        <div className="flex justify-center items-center space-x-6 pt-8">
          {socialLinks.map((social) => {
            const Icon = iconMap[social.icon as keyof typeof iconMap];
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label={social.name}
              >
                {Icon && <Icon className="w-5 h-5" />}
              </a>
            );
          })}
        </div>
      </div>

      <footer className="border-t border-white/20">
        <div className="section-container py-8">
          <div className="text-center text-sm text-white/70">
            <p>
              © ASRock Industrial. All rights reserved. Information published on
              ASRockInd.com is subject to change without notice.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}
