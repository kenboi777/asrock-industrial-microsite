'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { whyChooseFeatures } from '@/lib/content-data';

// --- 1. 定義 FadeIn 動畫元件 (與其他頁面保持一致) ---
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
    }, { threshold: 0.1 }); // 進入畫面 10% 觸發

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

const imageMap = {
  'shield-check': '/Trusted Security by Design.png',
  'cpu': '/Proven Edge Intelligence.png',
  'globe': '/Local Commitment.png',
};

export function WhyChooseSection() {
  return (
    // 建議加上 section tag 與 padding 讓結構更完整
    <section className="py-20 lg:py-28 bg-white">
      <div className="section-container">
        
        {/* 2. 標題區塊加入淡入動畫 */}
        <FadeIn>
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Why Choose ASRock Industrial?
            </h2>
            <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-3xl mx-auto">
              Empowering industries with trusted, secure, and intelligent edge solutions.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {whyChooseFeatures.map((feature, index) => {
            const imageSrc = imageMap[feature.icon as keyof typeof imageMap];
            
            return (
              // 3. 卡片區塊加入淡入動畫，設定 delay 產生階梯式效果
              <FadeIn key={feature.id} delay={index * 150} className="h-full">
                <div
                  className="
                    flex flex-col h-full p-8 rounded-2xl 
                    shadow-lg bg-white border border-[hsl(var(--border))] 
                    hover-lift transition-all duration-300 hover:shadow-xl
                  "
                >
                  <div className="flex justify-center mb-6">
                    <div className="w-32 h-32 rounded-xl bg-[hsl(var(--primary))]/10 flex items-center justify-center p-4">
                      {imageSrc && (
                        <Image
                          src={imageSrc}
                          alt={feature.title}
                          width={90}
                          height={90}
                          className="w-[70%] h-[70%] object-contain"
                        />
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 leading-tight text-center">
                    {feature.title}
                  </h3>
                  
                  <p
                    className="text-base text-[hsl(var(--muted-foreground))] leading-relaxed text-justify"
                    style={{ textAlignLast: 'left' as any }}
                    dangerouslySetInnerHTML={{ __html: feature.description }}
                  />
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}