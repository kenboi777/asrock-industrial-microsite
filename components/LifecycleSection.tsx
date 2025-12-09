'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { lifecycleTabs } from '@/lib/content-data';

// --- 新增：淡入動畫元件 (FadeIn) ---
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

export function LifecycleSection() {
  const tabOrder = ['secure-device', 'secure-deployment', 'secure-operation'];
  const [activeTab, setActiveTab] = useState('secure-device');
  const [direction, setDirection] = useState('right');

  const handleTabChange = (newValue: string) => {
    const currentIndex = tabOrder.indexOf(activeTab);
    const newIndex = tabOrder.indexOf(newValue);
    setDirection(newIndex > currentIndex ? 'right' : 'left');
    setActiveTab(newValue);
  };

  const arrowDepth = '25px';

  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <style jsx global>{`
        /* --- 左右切換動畫 (保持不變) --- */
        @keyframes slideInFromRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInFromLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-enter-right {
          animation: slideInFromRight 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        .animate-enter-left {
          animation: slideInFromLeft 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }

        /* --- 箭頭形狀定義 --- */
        .tabs-arrow-shape { clip-path: none; }
        @media (min-width: 641px) {
          .tabs-arrow-shape {
            clip-path: polygon(0% 0%, calc(100% - ${arrowDepth}) 0%, 100% 50%, calc(100% - ${arrowDepth}) 100%, 0% 100%);
          }
        }

        .active-tab-shape { clip-path: polygon(0% 0%, calc(100% - ${arrowDepth}) 0%, 100% 50%, calc(100% - ${arrowDepth}) 100%, 0% 100%); }
        @media (min-width: 641px) {
          .active-tab-shape {
            clip-path: polygon(0% 0%, calc(100% - ${arrowDepth}) 0%, 100% 50%, calc(100% - ${arrowDepth}) 100%, 0% 100%);
          }
        }
      `}</style>

      {/* 使用 FadeIn 包覆主要內容區塊 */}
      <FadeIn className="section-container">
        
        {/* 標題區塊 */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Trusted Security Lifecycle
          </h2>
          <p
            className="text-base md:text-sm lg:text-base text-[hsl(var(--muted-foreground))] max-w-4xl mx-auto leading-relaxed"
            style={{ textAlign: 'justify', textAlignLast: 'left' as any }}
          >
            ASRock Industrial is a trusted pioneer in Secure Edge AI Platforms,
            delivering comprehensive protection across every layer of the
            ecosystem—from{' '}
            <strong className="text-slate-900">Secure Devices</strong>,{' '}
            <strong className="text-slate-900">Secure Deployment</strong> to{' '}
            <strong className="text-slate-900">Secure Operation</strong>.
          </p>
        </div>

        {/* Tabs 元件 */}
        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          
          {/* Tabs 導航容器 */}
          <div className="w-full mb-12 px-2 filter drop-shadow-xl">
            <TabsList className="tabs-arrow-shape w-full h-auto sm:h-24 p-2 flex flex-col sm:flex-row 
              bg-[linear-gradient(to_right,#020617,#1e3a8a)]
              shadow-[inset_0_4px_12px_rgba(0,0,0,0.6)]
              rounded-xl sm:rounded-l-2xl sm:rounded-r-none">
              {lifecycleTabs.map((tab, index) => {
                const isActive = activeTab === tab.id;
                const isFirst = index === 0;
                const shapeClass = isActive ? 'active-tab-shape' : '';
                const marginClass = isFirst ? '' : 'mt-2 sm:mt-0 sm:-ml-8';

                return (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    className={`
                      ${shapeClass} ${marginClass}
                      relative w-full sm:flex-1 h-16 sm:h-full
                      flex items-center justify-center
                      text-lg sm:text-xl font-bold tracking-wide
                      transition-all duration-500 ease-out
                      border-none outline-none z-10
                      rounded-xl ${isActive ? 'sm:rounded-l-xl sm:rounded-r-none' : 'sm:rounded-none'}

                      data-[state=inactive]:bg-transparent
                      data-[state=inactive]:text-slate-400
                      data-[state=inactive]:hover:text-white
                      data-[state=inactive]:shadow-none
                      data-[state=inactive]:z-0

                      data-[state=active]:bg-[linear-gradient(to_bottom,#ffffff_30%,#f1f5f9_80%,#cbd5e1_100%)]
                      data-[state=active]:text-[#1e3a8a] 
                      data-[state=active]:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.9),inset_0_0_1px_1px_rgba(147,197,253,0.3)]
                      data-[state=active]:drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]
                      data-[state=active]:z-20
                      
                      focus-visible:ring-0 focus-visible:ring-offset-0
                    `}
                  >
                    <span className={isActive ? 'sm:pl-0 pr-4 sm:pr-0' : ''}>
                      {tab.title}
                    </span>
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </div>

          {/* 內容區 */}
          {lifecycleTabs.map((tab) => {
            const isSecureDevice = tab.id === 'secure-device';
            let descriptionContent: React.ReactNode = tab.description;
            if (typeof tab.description === 'string' && tab.description.startsWith(tab.title)) {
              descriptionContent = (
                <>
                  <strong className="text-slate-900">{tab.title}</strong>
                  {tab.description.slice(tab.title.length)}
                </>
              );
            }

            return (
              <TabsContent
                key={tab.id}
                value={tab.id}
                className="focus:outline-none min-h-[400px]" 
              >
                <div className={direction === 'right' ? 'animate-enter-right' : 'animate-enter-left'}>
                  
                  {/* === Secure Operation === */}
                  {tab.id === 'secure-operation' ? (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                      <div className="flex flex-col justify-center space-y-6">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
                          {tab.title}
                        </h3>
                        <div className="text-base md:text-sm text-[hsl(var(--muted-foreground))] leading-relaxed text-justify" style={{ textAlignLast: 'left' as any }}>
                          {descriptionContent}
                        </div>
                      </div>
                      <div className="flex flex-col rounded-2xl shadow-xl overflow-hidden h-full bg-white border border-slate-100 group hover:shadow-2xl transition-all">
                        <div className="overflow-hidden h-56 sm:h-64">
                          <img src="/AiSafeguard.jpg" alt="AiSafeguard" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="p-6 bg-slate-50 flex-1">
                          <p className="text-base md:text-sm text-slate-700 leading-relaxed text-justify" style={{ textAlignLast: 'left' as any }}>
                            <span className="font-bold text-slate-900">AiSafeguard</span> enhances endpoint security by isolating untrusted devices using Honeypot Sandbox.
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col rounded-2xl shadow-xl overflow-hidden h-full bg-white border border-slate-100 group hover:shadow-2xl transition-all">
                        <div className="overflow-hidden h-56 sm:h-64">
                           <img src="/AiSMA copy.jpg" alt="AiSMA" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="p-6 bg-slate-50 flex-1">
                          <p className="text-base md:text-sm text-slate-700 leading-relaxed text-justify" style={{ textAlignLast: 'left' as any }}>
                            <span className="font-bold text-slate-900">AiSMA</span> integrates the Redfish standard for secure, cryptographically hardened remote management.
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* === Secure Device / Secure Deployment === */
                    <>
                      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-10">
                        <div className="space-y-6">
                          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
                            {tab.title}
                          </h3>
                          <div className="text-base md:text-sm text-[hsl(var(--muted-foreground))] leading-relaxed text-justify" style={{ textAlignLast: 'left' as any }}>
                            {descriptionContent}
                          </div>
                        </div>
                        <div className="relative group">
                          {tab.id === 'secure-deployment' ? (
                            <div className="rounded-2xl bg-white shadow-xl border border-slate-100 overflow-hidden flex flex-col h-full hover:shadow-2xl transition-shadow">
                              <img src="/AiFDO 1200x600 copy.jpg" alt={tab.title} className="w-full h-56 sm:h-64 md:h-72 object-cover" />
                              <div className="p-6 bg-slate-50">
                                <p className="text-base md:text-sm text-slate-700 leading-relaxed text-justify" style={{ textAlignLast: 'left' as any }}>
                                  <span className="font-bold text-slate-900">Ai FDO</span> provides zero-touch, automated onboarding solution based on FIDO standards.
                                </p>
                              </div>
                            </div>
                          ) : (
                            <div className="aspect-video relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100 bg-white">
                              <Image src="/Secure_Device.png" alt={tab.title} fill className="object-cover" />
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Secure Device 下方卡片 */}
                      {isSecureDevice && (
                        <div className="rounded-3xl bg-slate-50 px-6 py-8 lg:px-10 lg:py-10 shadow-inner border border-slate-100">
                          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                            {[
                              { icon: '/icons/foundational-trust.svg', title: 'Foundational Trust & Platform Integrity', desc: 'Secure boot and TPM establish a hardware-rooted chain of trust to ensure systems start clean.' },
                              { icon: '/icons/virtualization-isolation.svg', title: 'Virtualization & I/O Isolation Hardening', desc: 'Hardware-enforced virtualization minimizes attack surfaces and protects data in multi-tenant environments.' },
                              { icon: '/icons/runtime-memory.svg', title: 'Runtime & Memory Protection', desc: 'Advanced encryption and side-channel defenses to safeguard memory and sensitive workloads.' },
                              { icon: '/icons/cryptographic-acceleration.svg', title: 'Cryptographic Acceleration', desc: 'AES-NI and SHA Extensions accelerate encryption and strengthen randomness.' }
                            ].map((item, idx) => {
                              // 判斷是否為 Runtime & Memory Protection
                              const isRuntime = item.title.includes('Runtime');
                              
                              return (
                                <div key={idx} className="flex flex-row lg:flex-col items-start lg:items-center h-full group">
                                  <div className="mr-4 lg:mr-0 flex-shrink-0 flex items-center justify-center w-16 lg:w-auto lg:h-[82px] lg:mb-4">
                                    <Image 
                                      src={item.icon} 
                                      alt={item.title} 
                                      width={60} 
                                      height={60} 
                                      className={`
                                        w-[60px] h-[60px] object-contain drop-shadow-md transition-transform duration-300
                                        ${/* 關鍵修改：如果是 Runtime，基底放大到 1.2倍，Hover 放大到 1.3倍；其他維持預設 */
                                          isRuntime 
                                            ? 'scale-[1.2] group-hover:scale-[1.3]' 
                                            : 'group-hover:scale-110'
                                        }
                                      `}
                                    />
                                  </div>
                                  <div className="flex flex-col flex-1 w-full">
                                    <h4 className="text-sm md:text-lg font-bold text-slate-800 text-left lg:text-center min-h-[3.5rem] flex items-center lg:justify-center mb-2 leading-tight">
                                      {item.title}
                                    </h4>
                                    <p className="text-xs md:text-sm leading-relaxed text-slate-600 text-justify" style={{ textAlignLast: 'left' as any }}>
                                      {item.desc}
                                    </p>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </FadeIn>
    </section>
  );
}