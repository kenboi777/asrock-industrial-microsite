'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { navItems } from '@/lib/content-data';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ease-in-out bg-white/95 backdrop-blur-md ${
        isScrolled
          ? 'shadow-md border-b border-slate-200'
          : ''
      }`}
    >
      <nav className="section-container">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img
              src="/ASRI Logo.svg"
              alt="ASRock Industrial"
              className="h-8 sm:h-10 w-auto"
            />
          </div>

          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeSection === item.href.substring(1)
                    ? 'text-[hsl(var(--primary))] bg-[hsl(var(--muted))]'
                    : 'text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] hover:bg-[hsl(var(--muted))]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Button
              onClick={() => window.open('https://www.asrockind.com/product-inquiry', '_blank')}
              className="hidden sm:inline-flex"
            >
              Product Inquiry
            </Button>

            <button
              className="lg:hidden p-2 rounded-lg hover:bg-[hsl(var(--muted))] transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-[hsl(var(--border))] animate-fade-in">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`px-4 py-3 text-left text-sm font-medium rounded-lg transition-colors ${
                    activeSection === item.href.substring(1)
                      ? 'text-[hsl(var(--primary))] bg-[hsl(var(--muted))]'
                      : 'text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted))]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => window.open('https://www.asrockind.com/product-inquiry', '_blank')}
                className="sm:hidden mt-2"
              >
                Product Inquiry
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
