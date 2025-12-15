'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { socialLinks } from '@/lib/content-data';
import { Linkedin, Youtube, Mail } from 'lucide-react';

const iconMap = {
  linkedin: Linkedin,
  youtube: Youtube,
};

// --- FadeIn 動畫元件 ---
const FadeIn = ({ children, delay = 0, className = '' }: { children: React.ReactNode, delay?: number, className?: string }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (domRef.current) observer.unobserve(domRef.current);
        }
      });
    }, { threshold: 0.1 });

    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      ref={domRef}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out transform ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-12'
      } ${className}`}
    >
      {children}
    </div>
  );
};

// 1. 定義介面
interface InquirySectionProps {
  id?: string;
}

// 2. 接收 id，如果不傳，預設就是 undefined (不會產生 id 屬性)
export function InquirySection({ id }: InquirySectionProps) {
  return (
    // 3. 這裡的 id 屬性會由外部傳入。如果外層沒傳，這個 section 就沒有 id，避免重複。
    <section id={id} className="relative bg-[#020617] text-white overflow-hidden">
      
      {/* 背景光暈層 */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-90"
          style={{
            backgroundImage: 'radial-gradient(circle at 50% 100%, #465ba3 0%, #2a3971 40%, transparent 85%)',
            backgroundAttachment: 'fixed',
          }}
        />
      </div>

      <div className="section-container relative z-10 py-20 lg:py-28">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-slate-200 max-w-2xl mx-auto mb-10 leading-relaxed">
              Contact us to learn more about our secure industrial computing solutions and how we can help protect your	smart infrastructure.
            </p>
            
            <Button
              size="lg"
              onClick={() =>
                window.open('https://www.asrockind.com/product-inquiry', '_blank')
              }
              className="
                bg-white 
                text-[#2a3971]
                hover:bg-blue-50 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]
                transition-all duration-300
                text-lg px-8 py-6 h-auto rounded-full font-bold
              "
            >
              <Mail className="mr-2 w-5 h-5" />
              Product Inquiry
            </Button>
          </div>
        </FadeIn>

        {/* 社交圖示 */}
        <FadeIn delay={200}>
          <div className="flex justify-center items-center space-x-6 pt-8 border-t border-white/20 mt-12">
            {socialLinks.map((social) => {
              const Icon = iconMap[social.icon as keyof typeof iconMap];
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center justify-center w-12 h-12 rounded-full 
                    bg-white/10 border border-white/10 backdrop-blur-sm
                    
                    /* 修改處：Hover 反白效果 */
                    /* 背景變白，邊框變白，文字變深色(#020617) */
                    hover:bg-white hover:border-white hover:text-[#020617] 
                    hover:-translate-y-1
                    
                    transition-all duration-300 text-slate-200
                  "
                  aria-label={social.name}
                >
                  {Icon && <Icon className="w-5 h-5" />}
                </a>
              );
            })}
          </div>
        </FadeIn>
      </div>

      {/* 版權宣告 */}
      <footer className="border-t border-white/10 relative z-10 bg-[#0f1526]/30 backdrop-blur-md">
        <div className="section-container py-8">
          <div className="text-center text-sm text-slate-400">
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