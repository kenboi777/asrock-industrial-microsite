'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { navItems } from '@/lib/content-data';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // --- 1. 全域判斷：是否滑到底部 (Inquiry) ---
      // 這個判斷每一頁都會執行。如果滑到底部，優先級最高。
      // 這裡設定 -50 是緩衝，讓它稍微接近底部就亮燈
      if ((windowHeight + currentScrollY) >= documentHeight - 50) {
        setActiveSection('inquiry'); 
        return; // ★ 關鍵：直接 return，不執行後面的判斷
      }

      // --- 2. 首頁專屬判斷 (Overview & 其他區塊) ---
      if (isHomePage) {
        // 強制頂部 (Overview)
        if (currentScrollY < 100) {
          setActiveSection('overview');
          return; 
        }

        const offset = 100;
        for (const item of navItems) { 
          let sectionId = '';
          if (item.href.includes('#')) {
             const parts = item.href.split('#');
             sectionId = parts[parts.length - 1]; 
          } else {
             continue; 
          }

          const element = document.getElementById(sectionId);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= offset && rect.bottom > offset) {
               setActiveSection(sectionId);
               break; 
            }
          }
        }
      } 
      // --- 3. 內頁專屬判斷 ---
      else {
        // 如果程式跑到這裡，代表「沒有滑到底部」。
        // 那就恢復該頁面原本的燈號 (例如 '/solutions')
        const currentNav = navItems.find(item => item.href === pathname);
        if (currentNav) {
          setActiveSection(currentNav.href);
        } else {
          setActiveSection('');
        }
      }
    };

    // 初始化執行一次，確保重整後燈號正確
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage, pathname]); // 加入依賴，切換頁面時會重置邏輯


  // --- 點擊處理邏輯 (保持不變) ---
  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);

    const isAnchor = href.includes('#');
    const parts = href.split('#');
    const targetId = isAnchor ? parts[parts.length - 1] : '';

    if (!isAnchor) {
      window.location.href = href;
      return;
    }

    const element = document.getElementById(targetId);

    if (element) {
      setActiveSection(targetId);
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    } else {
      window.location.href = href;
    }
  };

  // --- 燈號判斷邏輯 (★ 修改重點) ---
  const isLinkActive = (itemHref: string) => {
    // 1. 如果是錨點 (例如 #inquiry)，只要 activeSection 是它就亮
    if (itemHref.includes('#')) {
       const parts = itemHref.split('#');
       const id = parts[parts.length - 1];
       return activeSection === id;
    }

    // 2. 如果是頁面路徑 (例如 /solutions)
    if (pathname === itemHref) {
      // ★ 關鍵修正：如果現在是 'inquiry' 狀態，就算路徑對了也不要亮燈！
      if (activeSection === 'inquiry') return false;
      
      return true;
    }

    return false;
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
            <div className="flex items-center">
              <a href="/" className="hover:opacity-80 transition-opacity">
                <img src="/ASRI Logo.svg" alt="ASRock Industrial" className="h-8 sm:h-10 w-auto" />
              </a>
            </div>

            <div className="hidden lg:flex items-center space-x-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`
                    px-5 py-2 text-sm font-medium rounded-full transition-all duration-300
                    ${
                      isLinkActive(item.href)
                        ? 'text-white bg-[#2a3971] shadow-md scale-105'
                        : 'text-slate-600 hover:text-[#2a3971] hover:bg-white hover:shadow-lg hover:-translate-y-0.5'
                    }
                  `}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <Button
                onClick={() => window.open('https://www.asrockind.com/product-inquiry', '_blank')}
                className="hidden sm:inline-flex text-white shadow-lg bg-gradient-to-b from-sky-400 to-blue-600 hover:from-sky-300 hover:to-blue-500 hover:-translate-y-0.5 transition-all"
              >
                Product Inquiry
              </Button>
              <button
                className="lg:hidden p-2 rounded-full hover:bg-white hover:shadow-md transition-all text-slate-700"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      <div
        className={`
          lg:hidden fixed top-16 left-0 right-0 bottom-0 z-40
          bg-white/95 backdrop-blur-xl border-t border-slate-100
          transition-all duration-300 ease-in-out origin-top
          ${isMobileMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}
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
                    isLinkActive(item.href)
                      ? 'bg-[#2a3971] text-white shadow-md scale-[1.02]'
                      : 'text-slate-600 hover:text-[#2a3971] hover:bg-slate-50'
                  }
                `}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="mt-8 px-2">
            <Button
              onClick={() => window.open('https://www.asrockind.com/product-inquiry', '_blank')}
              className="w-full py-6 text-lg text-white shadow-lg bg-gradient-to-b from-sky-400 to-blue-600 hover:from-sky-300 hover:to-blue-500"
            >
              Product Inquiry
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
}