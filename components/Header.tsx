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

      const sections = navItems.map((item) => item.href.substring(1));
      const currentSection = sections.find((section) => {
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
    <>
      {/* 固定在最上方的 header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ease-in-out bg-white/90 backdrop-blur-md ${
          isScrolled ? 'shadow-md border-b border-slate-200' : ''
        }`}
      >
        <nav className="section-container">
          <div className="flex items-center justify-between h-16">
            {/* Logo：連到官網 */}
            <div className="flex items-center">
              <a
                href="https://www.asrockind.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/ASRI Logo.svg"
                  alt="ASRock Industrial"
                  className="h-8 sm:h-10 w-auto"
                />
              </a>
            </div>

            {/* Desktop 導覽按鈕 */}
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

            {/* 右側 CTA + 漢堡選單 */}
            <div className="flex items-center space-x-4">
              <Button
                onClick={() =>
                  window.open(
                    'https://www.asrockind.com/product-inquiry',
                    '_blank',
                  )
                }
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
        </nav>
      </header>

      {/* 手機版展開 menu 的白色毛玻璃遮罩 */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40">
          {/* 這層是白色微透明 + 高斯模糊；上方留出 header 高度 */}
          <div className="w-full h-full bg-white/70 backdrop-blur-xl pt-16">
            <nav className="section-container">
              <div className="flex flex-col py-3 space-y-2">
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
                  onClick={() =>
                    window.open(
                      'https://www.asrockind.com/product-inquiry',
                      '_blank',
                    )
                  }
                  className="sm:hidden mt-2"
                >
                  Product Inquiry
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
