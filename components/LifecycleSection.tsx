'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { lifecycleTabs } from '@/lib/content-data';

// --- FadeIn 動畫元件 (保持不變) ---
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

// 1. 定義 props 介面，加入 id
interface LifecycleSectionProps {
  id?: string;
}

// 2. 接收 id 屬性
export function LifecycleSection({ id }: LifecycleSectionProps) {
  const tabOrder = ['secure-device', 'secure-deployment', 'secure-operation'];
  const [activeTab, setActiveTab] = useState('secure-device');
  const [direction, setDirection] = useState('right');

  const handleTabChange = (newValue: string) => {
    const currentIndex = tabOrder.indexOf(activeTab);
    const newIndex = tabOrder.indexOf(newValue);
    setDirection(newIndex > currentIndex ? 'right' : 'left');
    setActiveTab(newValue);
  };

  // 箭頭深度
  const arrowDepth = '25px';

  return (
    // 3. 將 id 綁定到最外層的 section
    <section 
      id={id} 
      className="py-20 lg:py-28 bg-white overflow-hidden"
    >
      <style jsx global>{`
        /* --- 動畫效果 --- */
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

        /* --- 1. 外層藍色容器形狀 (右尖左圓) --- */
        .tabs-container-shape {
          clip-path: none;
        }
        @media (min-width: 641px) {
          .tabs-container-shape {
            /* 左側不切 (保留border-radius)，只切右邊箭頭 */
            clip-path: polygon(
              0% 0%,
              calc(100% - ${arrowDepth}) 0%,
              100% 50%,
              calc(100% - ${arrowDepth}) 100%,
              0% 100%
            );
          }
        }

        /* --- 2. 作用中 Tab 形狀：起始 (左圓右尖) --- */
        .active-shape-start {
          clip-path: none;
        }
        @media (min-width: 641px) {
          .active-shape-start {
            /* 手機版不切，桌機版切右邊箭頭，左邊保留給 border-radius */
            clip-path: polygon(
              0% 0%,
              calc(100% - ${arrowDepth}) 0%,
              100% 50%,
              calc(100% - ${arrowDepth}) 100%,
              0% 100%
            );
          }
        }

        /* --- 3. 作用中 Tab 形狀：流程中 (左凹右尖) --- */
        .active-shape-flow {
          clip-path: none; /* 手機版不切，變回預設箭頭或圓角 */
        }
        @media (max-width: 640px) {
           /* 手機版：作用中時顯示標準向右箭頭 */
           .active-shape-start, .active-shape-flow {
             clip-path: polygon(
                0% 0%, 
                calc(100% - ${arrowDepth}) 0%, 
                100% 50%, 
                calc(100% - ${arrowDepth}) 100%, 
                0% 100%
             );
           }
        }
        @media (min-width: 641px) {
          /* 桌機版：左凹右尖 */
          .active-shape-flow {
            clip-path: polygon(
              0% 0%,                  /* 左上 */
              calc(100% - ${arrowDepth}) 0%,       /* 右上 */
              100% 50%,                            /* 右尖 */
              calc(100% - ${arrowDepth}) 100%,     /* 右下 */
              0% 100%,                             /* 左下 */
              ${arrowDepth} 50%                    /* 左凹點 (關鍵) */
            );
          }
        }
      `}</style>

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
            ASRock Industrial is a trusted pioneer in Secure Edge AI Platforms, delivering comprehensive protection across every layer of the ecosystem—from secure devices and deployment to long-term operation, internationally recognized certifications, supply chain transparency, and incident response preparedness.</p>
        </div>

        {/* Tabs 元件 */}
        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          
          {/* Tabs 導航容器 */}
          <div className="w-full mb-12 px-2 filter drop-shadow-xl">
            <TabsList className="tabs-container-shape w-full h-auto sm:h-24 p-2 flex flex-col sm:flex-row 
              bg-[linear-gradient(to_right,#020617,#1e3a8a)]
              shadow-[inset_0_4px_12px_rgba(0,0,0,0.6)]
              rounded-xl sm:rounded-l-2xl sm:rounded-r-none">
              {lifecycleTabs.map((tab, index) => {
                const isActive = activeTab === tab.id;
                const isFirst = index === 0;

                // 形狀選擇：如果是第一個，用 start (左不切)；如果是後面的，用 flow (左凹)
                let shapeClass = '';
                if (isActive) {
                    shapeClass = isFirst ? 'active-shape-start' : 'active-shape-flow';
                }

                // 負邊距：讓後面的 Tab 稍微蓋住前面的
                const marginClass = isFirst ? '' : 'mt-2 sm:mt-0 sm:-ml-8';

                return (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    className={`
                      ${shapeClass}
                      ${marginClass}
                      relative w-full sm:flex-1 h-16 sm:h-full
                      flex items-center justify-center
                      text-lg sm:text-xl font-bold tracking-wide
                      transition-all duration-500 ease-out
                      border-none outline-none
                      z-10
                      
                      rounded-xl
                      ${isActive && isFirst ? 'sm:rounded-l-2xl sm:rounded-r-none' : 'sm:rounded-none'}

                      /* --- 非作用中狀態 --- */
                      data-[state=inactive]:bg-transparent
                      data-[state=inactive]:text-slate-400
                      data-[state=inactive]:hover:text-white
                      data-[state=inactive]:shadow-none
                      data-[state=inactive]:z-0

                      /* --- 作用中狀態 (無紫色金屬漸層) --- */
                      data-[state=active]:bg-[linear-gradient(to_bottom,#ffffff_30%,#f1f5f9_80%,#cbd5e1_100%)]
                      data-[state=active]:text-[#1e3a8a] 
                      
                      /* 內框線 */
                      data-[state=active]:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.9),inset_0_0_1px_1px_rgba(147,197,253,0.3)]

                      /* 外陰影 */
                      data-[state=active]:drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]
                      
                      data-[state=active]:z-20
                      
                      focus-visible:ring-0
                      focus-visible:ring-offset-0
                    `}
                  >
                    {/* 文字位移：中間的箭頭文字要稍微右移避開凹角 */}
                    <span className={isActive && !isFirst ? 'sm:pl-6' : ''}>
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
                      <div className="flex flex-col rounded-2xl shadow-xl overflow-hidden h-full bg-white border border-slate-100 group hover:shadow-2xl transition-all duration-300">
                        <div className="overflow-hidden h-56 sm:h-64 relative">
                          <Image src="/AiSafeguard.jpg" alt="AiSafeguard" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="p-6 bg-slate-50 flex-1">
                          <p className="text-base md:text-sm text-slate-700 leading-relaxed text-justify" style={{ textAlignLast: 'left' as any }}>
                            <span className="font-bold text-slate-900">AiSafeguard</span> enhances endpoint security by isolating untrusted devices using Honeypot Sandbox, securing trusted peripherals, and leveraging AI for data protection and continuous, secure operations.
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col rounded-2xl shadow-xl overflow-hidden h-full bg-white border border-slate-100 group hover:shadow-2xl transition-all duration-300">
                        <div className="overflow-hidden h-56 sm:h-64 relative">
                           <Image src="/aisma_redfish.jpg" alt="AiSMA" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="p-6 bg-slate-50 flex-1">
                          <p className="text-base md:text-sm text-slate-700 leading-relaxed text-justify" style={{ textAlignLast: 'left' as any }}>
                            <span className="font-bold text-slate-900">AiSMA</span> integrates the Redfish standard for secure, cryptographically hardened out-of-band (OOB) remote management across distributed industrial deployments.
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
                        
                        <div className="relative group h-full">
                          {tab.id === 'secure-deployment' ? (
                            <div className="rounded-2xl bg-white shadow-xl border border-slate-100 overflow-hidden flex flex-col h-full hover:shadow-2xl transition-all duration-300 group">
                              <div className="w-full h-56 sm:h-64 md:h-72 relative overflow-hidden">
                                <Image src="/AiFDO 1200x600 copy.jpg" alt={tab.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                              </div>
                              <div className="p-6 bg-slate-50 flex-1">
                                <p className="text-base md:text-sm text-slate-700 leading-relaxed text-justify" style={{ textAlignLast: 'left' as any }}>
                                  <span className="font-bold text-slate-900">Ai FDO</span> provides zero-touch, automated, and highly secure onboarding solution based on the FIDO Alliance industry standard.
                                </p>
                              </div>
                            </div>
                          ) : (
                            <div className="aspect-video relative rounded-2xl overflow-hidden bg-white shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-300 group">
                              <Image 
                                src="/Secure_Device.png" 
                                alt={tab.title} 
                                fill 
                                className="object-cover group-hover:scale-105 transition-transform duration-500" 
                              />
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Secure Device 下方卡片 */}
                      {isSecureDevice && (
                        <div className="rounded-3xl bg-slate-50 px-6 py-8 lg:px-10 lg:py-10 shadow-inner border border-slate-100">
                          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                            {[
                              { icon: '/icons/foundational-trust.svg', title: 'Foundational Trust & Platform Integrity', desc: 'Secure boot and platform attestation, with technologies like TPM and hardware-based safeguards, establish a hardware-rooted chain of trust to ensure systems start clean and remain tamper-resistant.' },
                              { icon: '/icons/virtualization-isolation.svg', title: 'Virtualization & I/O Isolation Hardening', desc: 'Hardware-enforced virtualization and I/O isolation, minimizing attack surfaces and protecting data in multi-tenant environments, ensuring secure resource separation.' },
                              { icon: '/icons/runtime-memory.svg', title: 'Runtime & Memory Protection', desc: 'Advanced encryption, access controls, and side-channel defenses to safeguard memory, code integrity, and sensitive workloads in real time. ' },
                              { icon: '/icons/cryptographic-acceleration.svg', title: 'Cryptographic Acceleration', desc: 'AES-NI and SHA Extensions accelerate encryption, strengthen randomness, and protect stored data with efficient, hardware-based cryptography.' }
                            ].map((item, idx) => {
                              const isRuntime = item.title.includes('Runtime');
                              return (
                                <div key={idx} className="flex flex-row lg:flex-col items-center lg:items-center h-full group">
                                  <div className="mr-4 lg:mr-0 flex-shrink-0 flex items-center justify-center w-12 lg:w-auto lg:h-[82px] lg:mb-4">
                                    <Image 
                                      src={item.icon} 
                                      alt={item.title} 
                                      width={60} 
                                      height={60} 
                                      className={`
                                        w-12 h-12 lg:w-[60px] lg:h-[60px] object-contain drop-shadow-md transition-transform duration-300
                                        ${
                                          isRuntime 
                                            ? 'scale-[1.15] group-hover:scale-[1.25]' 
                                            : 'group-hover:scale-110'
                                        }
                                      `}
                                    />
                                  </div>
                                  <div className="flex flex-col flex-1 w-full">
                                    <h4 className="text-sm md:text-lg font-bold text-slate-800 text-left lg:text-center lg:min-h-[3.5rem] flex items-start lg:justify-center mb-2 leading-tight">
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