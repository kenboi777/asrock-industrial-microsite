'use client';

import { useEffect, useState } from 'react';
import { ShieldCheck, Server, Link } from 'lucide-react';

export function InsightsHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      
      {/* --- 1. 背景圖層 --- */}
      <div
        className="hidden md:block w-full bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: 'url(/insight_1920x720.jpg)', aspectRatio: '1920/720' }}
      >
        <div className="absolute inset-0 bg-gradient-to-l from-[#0b1c38]/90 via-[#0b1c38]/40 to-transparent pointer-events-none" />
      </div>

      <div
        className="block md:hidden w-full bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: 'url(/insight_720x1140.jpg)', aspectRatio: '720/1140' }}
      >
        {/* Mobile 遮罩 */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1c38]/95 via-[#0b1c38]/50 to-transparent pointer-events-none" />
      </div>

      {/* --- 2. 內容層 --- */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4 h-full">
          <div className="flex flex-col md:flex-row justify-end md:justify-end items-center h-full pb-4 md:pb-0">
            
            {/* ★ 修改重點：將 lg:mr-24 改為 lg:mr-8 */}
            <div 
              className={`w-full md:w-1/2 lg:w-1/2 lg:mr-8 flex flex-col gap-2 md:gap-4 transition-all duration-1000 ease-out 
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            >
              
              {/* Box 1 */}
              <div className="group border border-white/20 bg-white/10 backdrop-blur-md rounded-xl p-3 md:p-5 shadow-lg md:min-h-[130px] flex items-center">
                <div className="flex items-center gap-0 md:gap-4 w-full">
                  <div className="hidden md:block p-2 bg-white/80 rounded-lg text-[#0b1c38] shrink-0 shadow-sm backdrop-blur-sm">
                    <ShieldCheck size={24} />
                  </div>
                  <div className="text-blue-50 text-xs md:text-sm leading-relaxed text-justify w-full">
                    Secure Device – Multi-layered protection with TPM, secure boot, virtualization, I/O isolation, memory protection and crypto safeguards.
                  </div>
                </div>
              </div>

              {/* Box 2 */}
              <div className="group border border-white/20 bg-white/10 backdrop-blur-md rounded-xl p-3 md:p-5 shadow-lg md:min-h-[130px] flex items-center">
                  <div className="flex items-center gap-0 md:gap-4 w-full">
                  <div className="hidden md:block p-2 bg-white/80 rounded-lg text-[#0b1c38] shrink-0 shadow-sm backdrop-blur-sm">
                    <Server size={24} />
                  </div>
                  <div className="text-blue-50 text-xs md:text-sm leading-relaxed text-justify w-full">
                    Secure Deployment & Operation – Ai FDO for trusted onboarding, Ai Safeguard for Zero Trust security, AiSMA for Redfish-based management.
                  </div>
                </div>
              </div>

              {/* Box 3 */}
              <div className="group border border-white/20 bg-white/10 backdrop-blur-md rounded-xl p-3 md:p-5 shadow-lg md:min-h-[130px] flex items-center">
                  <div className="flex items-center gap-0 md:gap-4 w-full">
                  <div className="hidden md:block p-2 bg-white/80 rounded-lg text-[#0b1c38] shrink-0 shadow-sm backdrop-blur-sm">
                    <Link size={24} />
                  </div>
                  <div className="text-blue-50 text-xs md:text-sm leading-relaxed text-justify w-full">
                    Secure Supply Chain & Rapid Incident Response ensure transparency, traceability, and swift risk mitigation.
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}