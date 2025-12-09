'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { navItems } from '@/lib/content-data';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // 預設 activeSection 為 overview，確保一進來就亮
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      // --- 機制修改 1: 強制置頂判定 ---
      // 如果捲動高度小於 100px (接近頂部)，直接鎖定 Overview 為作用中
      // 這樣可以解決「一開始沒有滑動就不亮」或者「滑回頂部延遲」的問題
      if (currentScrollY < 100) {
        setActiveSection('overview');
        return; 
      }

      // --- 機制修改 2: 一般區塊偵測 ---
      const sections = navItems.map((item) => item.href.substring(1));
      
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // 只要區塊頂部進入視窗上方 1/3 (300px) 範圍內，就視為該區塊
          return rect.top <= 300 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    // 初始化時執行一次，確保重整後狀態正確
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);

    if (href.startsWith('/')) {
      window.location.href = href;
      return;
    }

    // 點擊瞬間直接設定為 Active，提升反應速度
    const targetId = href.substring(1);
    setActiveSection(targetId);

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
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ease-in-out bg-white/90 backdrop-blur-md ${
          isScrolled ? 'shadow-sm border-b border-slate-200' : ''
        }`}
      >
        <nav className="section-container h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <div className="flex items-center">
              <a
                href="https://www.asrockind.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img
                  src="/ASRI Logo.svg"
                  alt="ASRock Industrial"
                  className="h-8 sm:h-10 w-auto"
                />
              </a>
            </div>

            {/* Desktop 導覽選單 */}
            <div className="hidden lg:flex items-center space-x-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`
                    px-5 py-2 text-sm font-medium rounded-full transition-all duration-300
                    ${
                      activeSection === item.href.substring(1)
                        ? 'text-white bg-[#2a3971] shadow-md scale-105' // Active: 企業深藍 + 放大
                        : 'text-slate-600 hover:text-[#2a3971] hover:bg-white hover:shadow-lg hover:-translate-y-0.5'
                    }
                  `}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* 右側按鈕區 */}
            <div className="flex items-center space-x-4">
              <Button
                onClick={() =>
                  window.open('https://www.asrockind.com/product-inquiry', '_blank')
                }
                className="
                  hidden sm:inline-flex 
                  text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5
                  /* --- 顏色修改：上下漸層 (bg-gradient-to-b) --- */
                  /* 從淺天空藍 (sky-400) 漸變到 寶藍色 (blue-600) */
                  bg-gradient-to-b from-sky-400 to-blue-600 
                  hover:from-sky-300 hover:to-blue-500
                "
              >
                Product Inquiry
              </Button>

              {/* 手機版漢堡按鈕 */}
              <button
                className="lg:hidden p-2 rounded-full hover:bg-white hover:shadow-md transition-all text-slate-700"
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

      {/* --- 手機版選單 --- */}
      <div
        className={`
          lg:hidden fixed top-16 left-0 right-0 bottom-0 z-40
          bg-white/95 backdrop-blur-xl border-t border-slate-100
          transition-all duration-300 ease-in-out origin-top
          ${
            isMobileMenuOpen
              ? 'opacity-100 visible translate-y-0'
              : 'opacity-0 invisible -translate-y-4'
          }
        `}
      >
        <nav className="section-container py-6 flex flex-col h-full overflow-y-auto">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`
                  w-full px-6 py-4 text-left text-base font-semibold rounded-xl transition-all duration-300
                  ${
                    activeSection === item.href.substring(1)
                      ? 'bg-slate-100 text-[#2a3971] border-l-4 border-[#2a3971] shadow-sm'
                      : 'text-slate-500 hover:text-[#2a3971] hover:bg-white hover:shadow-md hover:translate-x-1'
                  }
                `}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* 手機版 Inquiry 按鈕 */}
          <div className="mt-8 px-2">
            <Button
              onClick={() =>
                window.open('https://www.asrockind.com/product-inquiry', '_blank')
              }
              className="
                w-full py-6 text-lg text-white shadow-lg transition-all active:scale-95
                /* 同步修改：上下漸層 */
                bg-gradient-to-b from-sky-400 to-blue-600 
                hover:from-sky-300 hover:to-blue-500
              "
            >
              Product Inquiry
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
}