'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { socialLinks } from '@/lib/content-data';
import { Linkedin, Youtube, Mail } from 'lucide-react';

const iconMap = {
  linkedin: Linkedin,
  youtube: Youtube,
};

// --- FadeIn 動畫元件 (維持一致) ---
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

export function InquirySection() {
  return (
    // 1. 基底色：使用深黑色(#020617)作為畫布，讓上面的藍色光暈更明顯
    <section id="inquiry" className="relative bg-[#020617] text-white overflow-hidden">
      
      {/* 2. 互動背景層：企業藍光暈 (佔比 30%-40%)
          - 顏色：改用 #2a3971 (企業藍)
          - 範圍：opacity-90 (提高不透明度，讓藍色非常明顯)
          - 漸層：從底部中心向上擴散，保留足夠的藍色區域
      */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-90"
          style={{
            // 漸層邏輯：中心是較亮的企業藍 -> 向外擴散到純企業藍 -> 再過渡到透明
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
              Contact us to learn more about our secure industrial computing solutions and how we can help protect your critical infrastructure.
            </p>
            
            <Button
              size="lg"
              onClick={() =>
                window.open('https://www.asrockind.com/product-inquiry', '_blank')
              }
              className="
                bg-white 
                /* 修改：按鈕文字改為企業藍 #2a3971，呼應背景 */
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
                    /* Hover 時使用稍亮的藍色，增加層次 */
                    hover:bg-[#3d52a0] hover:border-[#3d52a0] hover:text-white hover:-translate-y-1
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