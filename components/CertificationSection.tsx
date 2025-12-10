'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

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

interface CertificationSectionProps {
  id?: string;
}

export function CertificationSection({ id }: CertificationSectionProps) {
  const certifications = [
    {
      id: 'iec-62443-4-2',
      icon: '/icons/IEC62443-4-1.png',
      title: 'IEC 62443-4-1: Secure Development Lifecycle',
      description:
        'This certification ensures <strong>ASRock Industrial</strong>’s product development process follows international standards for secure design, implementation, testing, and maintenance, guaranteeing cybersecurity is embedded throughout the entire lifecycle.',
    },
    {
      id: 'iec-62443-4-1',
      icon: '/icons/IEC62443-4-2.png',
      // ★ 修改 1：在這裡加入 \n 強制換行
      title: 'IEC 62443-4-2: Secure\nProduct Standard', 
      description:
        'This certification verifies that <strong>ASRock Industrial</strong>’s products meet the technical security requirements for <strong>industrial automation and control systems (IACS)</strong>, ensuring trusted resilient, and compliant device operation.',
    },
    {
      id: 'fido-device-onboard',
      icon: '/icons/FDO.png',
      title: 'FIDO Device Onboard (FDO): Secure and Automated Onboarding',
      description:
        'Certified under the <strong>FIDO Alliance</strong> standard, this ensures devices can be securely authenticated, registered, and deployed automatically, enabling trusted, zero-touch onboarding from factory to field.',
    },
  ];

  return (
    <section 
      id={id} 
      className="relative py-20 lg:py-28 bg-slate-50 overflow-hidden"
    >
      
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle at 50% 0%, #1e3a8a 0%, transparent 70%)',
            backgroundAttachment: 'fixed',
          }}
        />
      </div>

      <div className="section-container relative z-10">
        <FadeIn>
          <div className="max-w-4xl mx-auto mb-12 lg:mb-16 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-slate-900">
              Secure Certification
            </h2>
            <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-3xl mx-auto">
              ASRock Industrial is a pioneer in OT security with IEC 62443 and FIDO certifications.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {certifications.map((cert, index) => {
            const isFDO = cert.id === 'fido-device-onboard';

            return (
              <FadeIn key={cert.id} delay={index * 150} className="h-full">
                <div
                  className="
                    h-full flex flex-col 
                    items-center text-center
                    bg-white rounded-2xl 
                    pt-6 pb-6 px-4 sm:pt-8 sm:pb-8 sm:px-6 
                    shadow-lg border border-slate-200 
                    transition-all duration-300
                    hover:-translate-y-2 hover:shadow-2xl
                  "
                >
                  <div className="w-full h-52 sm:h-64 lg:h-72 relative mb-6 sm:mb-8 flex items-center justify-center flex-shrink-0">
                    <Image
                      src={cert.icon}
                      alt={cert.title}
                      fill
                      className={
                        'object-contain object-center drop-shadow-sm ' + (isFDO ? 'scale-75 sm:scale-100' : '')
                      }
                    />
                  </div>

                  {/* 標題容器 */}
                  <div className="flex items-start justify-center mb-4 sm:mb-6 text-center min-h-[4.5rem] w-full px-2">
                    <h3
                      className={
                        (isFDO ? 'text-base ' : 'text-lg ') +
                        // ★ 修改 2：加入 'whitespace-pre-line' 讓 \n 生效
                        'sm:text-xl font-bold leading-snug text-slate-800 whitespace-pre-line'
                      }
                    >
                      {cert.title}
                    </h3>
                  </div>

                  <div
                    className="flex-1 text-xs sm:text-sm text-slate-600 leading-relaxed w-full px-2 sm:px-0"
                    style={{
                      textAlign: 'justify',
                      textJustify: 'inter-word',
                      textAlignLast: 'left' as any,
                    }}
                    dangerouslySetInnerHTML={{ __html: cert.description }}
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