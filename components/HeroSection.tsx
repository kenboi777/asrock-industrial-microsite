'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

// --- 資料區塊 (保持不變) ---
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

// --- 淡入動畫元件 (保持不變) ---
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
    <>
      {/* --- Section 1: Hero 圖片 + 前導文字 (純白背景) --- */}
      <section id="overview" className="relative bg-white w-full pb-16 z-10">
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

        <div className="section-container px-4">
          <FadeIn delay={200}>
            <div className="mt-12 md:mt-20 text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-slate-900">
                Why Industrial Cybersecurity Matters More Than Ever
              </h1>
              <p 
  className="
    text-lg md:text-xl 
    text-[hsl(var(--muted-foreground))] 
    max-w-6xl mx-auto           /* 修改 1: 寬度加大至 6xl 以對齊標題 */
    leading-relaxed 
    text-justify                /* 修改 2: 左右對齊 */
    [text-align-last:left]      /* 修改 3: 強制最後一行靠左 */
  "
>
  In today’s connected industrial landscape, cybersecurity has become the foundation of trust. As automation, AI, and IoT continue to reshape industries, every connected system introduces both innovation and potential risk. Industrial cybersecurity safeguards operations against data breaches, service interruptions, and evolving cyber threats ensuring safety, reliability, and continuity across critical environments.
</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* --- Section 2: Understanding... Cards (科技藍光互動背景) --- */}
      <section className="relative w-full py-20 lg:py-28 overflow-hidden">
        
        {/* 互動背景層 */}
        <div 
          className="absolute inset-0 w-full h-full -z-10 bg-white pointer-events-none"
        >
          <div 
            className="absolute inset-0 opacity-15" 
            style={{
              // 修改 1: 色調調整
              // 使用 #0ea5e9 (Sky-500) 取代之前的藍紫色，這是更純正的「科技藍」
              backgroundImage: 'radial-gradient(circle at 50% 0%, #0ea5e9 0%, transparent 70%)',
              backgroundAttachment: 'fixed',
            }}
          />
        </div>

        <div className="section-container px-4">
          
          <FadeIn>
            <div className="max-w-5xl mx-auto mb-12 sm:mb-16 text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-center text-slate-800">
                Understanding the Need for Industrial Cybersecurity
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {highlights.map((highlight, index) => {
              const isSecond = index === 1;

              return (
                <FadeIn key={highlight.title} delay={index * 150} className="h-full">
                  <div
                    className="
                      relative h-full flex flex-col items-center
                      rounded-2xl p-6 
                      bg-white/70 backdrop-blur-md
                      border border-white/60
                      shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]
                      transition-all duration-300
                      /* Hover 時陰影也改成 Sky blue */
                      hover:bg-white/95 hover:shadow-[0_10px_40px_-10px_rgba(14,165,233,0.25)] hover:-translate-y-1
                    "
                  >
                    {/* ICON */}
                    <div className="flex items-center justify-center h-24 mb-4 w-full">
                      <Image
                        src={highlight.image}
                        alt={highlight.title}
                        width={isSecond ? 120 : 80}
                        height={isSecond ? 120 : 80}
                        className={`${
                          isSecond ? 'w-[120px] h-[120px]' : 'w-20 h-20'
                        } object-contain drop-shadow-sm`}
                      />
                    </div>

                    {/* 文字區 */}
                    <div className="flex flex-col flex-1 w-11/12 mx-auto items-center">
                      {/* 修改 2: 標題等高處理 
                          min-h-[3.5rem] 確保標題區塊至少有兩行的高度，
                          flex items-center 讓只有一行的標題垂直置中
                      */}
                      <h3 className="
                        font-bold leading-tight text-center text-base sm:text-lg text-slate-900 
                        mb-3 min-h-[3.5rem] flex items-center justify-center
                      ">
                        {highlight.title}
                      </h3>

                      <div
                        className="text-sm text-slate-600 leading-relaxed text-justify [text-align-last:left] flex-1 w-full"
                      >
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
    </>
  );
}