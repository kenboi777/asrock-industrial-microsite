'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const highlights = [
  {
    image: '/Security Becomes a Global.png',
    title: 'Security Becomes a Global Requirement',
    description: (
      <>
        By December 2027, the EU{' '}
        <strong className="text-slate-900">Cyber Resilience Act (CRA)</strong> will
        require digital products to meet cybersecurity standards for CE marking to
        enter the EU market.
      </>
    ),
  },
  {
    image: '/Rising Requirement Risk.png',
    title: 'Growing Connectivity, Rising Risk',
    description:
      'As industrial systems become more connected, the attack surface expands. With cyber threats growing in scale and complexity, every connection must be secured to stop vulnerabilities from spreading.',
  },
  {
    image: '/Building Trust Through.png',
    title: 'Building Trust Through Lifecycle Security',
    description:
      'Security must extend from design to operation. Adopting standards like IEC 62443 ensures trusted, compliant, and resilient systems.',
  },
];

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
      className={`transition-all duration-500 transform ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-12'
      } ${className}`}
    >
      {children}
    </div>
  );
};

export function HeroSection() {
  return (
    <div id="overview" className="w-full">
      
      {/* Section 1: 圖片區 */}
      <section className="relative bg-white w-full z-10">
        <FadeIn>
          <div className="w-full">
            <img 
              src="/Overview-m.jpg" 
              alt="Industrial Cybersecurity Mobile"
              className="w-full h-auto block md:hidden"
            />
            <img 
              src="/hero.jpg/Overview.jpg" 
              alt="Industrial Cybersecurity Desktop"
              className="w-full h-auto hidden md:block"
            />
          </div>
        </FadeIn>
      </section>

      {/* Section 2: 文字與卡片區 */}
      <section className="relative w-full py-20 lg:py-28 overflow-hidden">
        
        {/* ★ 修改重點：背景光暈顏色調整 */}
        <div className="absolute inset-0 w-full h-full -z-10 bg-white pointer-events-none">
          <div 
            className="absolute inset-0 opacity-15" 
            style={{ 
              // 原本是 #0ea5e9 (Sky-500)，現在改成 #38bdf8 (Sky-400)，顏色更淺更亮
              backgroundImage: 'radial-gradient(circle at 50% 0%, #38bdf8 0%, transparent 70%)', 
              backgroundAttachment: 'fixed' 
            }} 
          />
        </div>

        <div className="section-container px-4">
          
          <FadeIn>
            {/* 標題區 */}
            <div className="max-w-7xl mx-auto mb-12 sm:mb-16 text-center">
              
              <h1 className={`
                text-3xl sm:text-4xl lg:text-5xl 
                font-bold mb-6 text-slate-900
                lg:whitespace-nowrap
              `}>
                Why Industrial Cybersecurity Matters More Than Ever
              </h1>
              
              <p className="text-base md:text-sm lg:text-base text-slate-600 max-w-6xl mx-auto leading-relaxed text-justify [text-align-last:left]">
                In today’s connected industrial landscape, cybersecurity has become the foundation of trust. As automation, AI, and IoT continue to reshape industries, every connected system introduces both innovation and potential risk. Industrial cybersecurity safeguards operations against data breaches, service interruptions, and evolving cyber threats ensuring safety, reliability, and continuity across critical environments.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {highlights.map((highlight, index) => {
              const isSecond = index === 1;
              return (
                <FadeIn key={highlight.title} delay={index * 150} className="h-full">
                  <div className="relative h-full flex flex-col items-center rounded-2xl p-6 bg-white/70 backdrop-blur-md border border-transparent shadow-md transition-all duration-300 hover:bg-white/95 hover:shadow-[0_20px_50px_-12px_rgba(56,189,248,0.3)] hover:-translate-y-1">
                    <div className="flex items-center justify-center h-24 mb-4 w-full">
                      <Image src={highlight.image} alt={highlight.title} width={isSecond ? 120 : 80} height={isSecond ? 120 : 80} className={`${isSecond ? 'w-[120px] h-[120px]' : 'w-20 h-20'} object-contain drop-shadow-sm`} />
                    </div>
                    <div className="flex flex-col flex-1 w-11/12 mx-auto items-center">
                      <h3 className="font-bold leading-tight text-center text-base sm:text-lg text-slate-900 mb-3 min-h-[3.5rem] flex items-start justify-center">
                        {highlight.title}
                      </h3>
                      <div className="text-sm text-slate-600 leading-relaxed text-justify [text-align-last:left] flex-1 w-full">
                        {highlight.description}
                      </div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}