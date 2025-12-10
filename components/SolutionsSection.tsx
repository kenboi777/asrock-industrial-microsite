'use client';

import { useState, useEffect, useRef } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { solutionTabs } from '@/lib/content-data';
import { ExternalLink } from 'lucide-react';

export function SolutionsSection() {
  const [titleInView, setTitleInView] = useState(false);
  const titleRef = useRef<HTMLDivElement>(null);

  const [tabsInView, setTabsInView] = useState(false);
  const tabsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const titleObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleInView(true);
          if (titleRef.current) titleObserver.unobserve(titleRef.current);
        }
      },
      { threshold: 0.3 }
    );

    const tabsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTabsInView(true);
          if (tabsRef.current) tabsObserver.unobserve(tabsRef.current);
        }
      },
      { threshold: 0.2 }
    );

    if (titleRef.current) titleObserver.observe(titleRef.current);
    if (tabsRef.current) tabsObserver.observe(tabsRef.current);

    return () => {
      titleObserver.disconnect();
      tabsObserver.disconnect();
    };
  }, []);

  const tabs = solutionTabs || [];

  return (
    <section 
      id="solutions" 
      className="py-12 lg:py-16 bg-[hsl(var(--muted))]"
    >
      <style jsx global>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-title-delayed {
          animation: fadeInUp 1s cubic-bezier(0.2, 0.8, 0.2, 1) both;
          animation-delay: 0.2s;
        }
        .animate-tabs-normal {
          animation: fadeInUp 1s cubic-bezier(0.2, 0.8, 0.2, 1) both;
          animation-delay: 0.2s;
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-tab-content {
          animation: slideInRight 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
      `}</style>

      <div className="container mx-auto px-4">
        
        {/* --- 標題區 --- */}
        <div 
          ref={titleRef} 
          className={`text-center mb-8 lg:mb-10 opacity-0 ${titleInView ? 'animate-title-delayed' : ''}`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Secure Solutions
          </h2>
          <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-3xl mx-auto">
            Comprehensive portfolio of secure industrial computing platforms
          </p>
        </div>

        {/* --- Tabs 區塊 --- */}
        <div 
          ref={tabsRef}
          className={`w-full opacity-0 ${tabsInView ? 'animate-tabs-normal' : ''}`}
        >
          <Tabs defaultValue="edge-aiot" className="w-full">
            <TabsList
              className="
              grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
              gap-2 h-auto
              bg-white p-2 mb-8
              rounded-2xl shadow-md
              "
            >
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="
                  px-4 py-3
                  text-sm font-medium whitespace-normal
                  h-auto min-h-[3.5rem]
                  rounded-xl
                  data-[state=active]:bg-[hsl(var(--primary))]
                  data-[state=active]:text-white
                  data-[state=active]:shadow-md
                  transition-all
                  "
                >
                  {tab.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {tabs.map((tab) => (
              <TabsContent
                key={tab.id}
                value={tab.id}
                className="mt-4 focus:outline-none"
              >
                <div key={tab.id} className="animate-tab-content space-y-8 p-1">
                  <div className="space-y-4 text-center sm:text-left">
                    <h3 className="text-2xl sm:text-3xl font-bold">
                      {tab.title}
                    </h3>
                    <p className="text-lg text-[hsl(var(--muted-foreground))] leading-relaxed text-justify" style={{ textAlignLast: 'left' }}>
                      {tab.description}
                    </p>
                  </div>

                  <div className={`grid grid-cols-1 sm:grid-cols-2 gap-8 ${tab.id === 'software-services' ? 'lg:grid-cols-3' : 'lg:grid-cols-4'}`}>
                    {tab.links.map((link) => {
                      const isSoftwareTab = tab.id === 'software-services';
                      
                      const isExpandable = link.label === 'Expandable Edge AIoT Platform';
                      const isCompact = link.label === 'Compact Edge AIoT Platform';

                      // --- 縮放邏輯設定 ---
                      let scaleClass = 'scale-100 group-hover:scale-[1.15]'; 

                      if (isExpandable) {
                        // ★ 第一張圖：放大 15% (scale-1.15)
                        scaleClass = 'scale-[1.15] group-hover:scale-[1.25]';
                      } else if (isCompact) {
                        // ★ 第二張圖：放大 15% (scale-1.15)
                        scaleClass = 'scale-[1.15] group-hover:scale-[1.25]';
                      } else if (isSoftwareTab) {
                         scaleClass = 'scale-100 group-hover:scale-110';
                      }

                      const flexDirection = 'flex-col';
                      const imageObjectFit = isSoftwareTab ? 'object-cover' : 'object-contain';
                      const imagePadding = isSoftwareTab ? 'p-0' : 'p-6';
                      
                      // 高度統一設定為 h-64，確保底部文字對齊
                      const imageHeightClass = isSoftwareTab ? 'h-auto aspect-video' : 'h-64'; 

                      return (
                        <div
                          key={link.label}
                          className={`
                            bg-white rounded-2xl overflow-hidden 
                            shadow-[0_0_20px_rgba(0,0,0,0.08)] 
                            hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)] 
                            transition-all duration-300 
                            flex ${flexDirection} h-full group
                            border border-transparent hover:border-slate-100
                            relative z-10
                          `}
                        >
                          {/* 圖片區域 */}
                          <div className={`w-full ${imageHeightClass} relative overflow-visible flex-shrink-0 flex items-center justify-center bg-white ${imagePadding}`}>
                            
                            {/* 底部高斯模糊陰影 (懸浮感) - 僅硬體顯示 */}
                            {!isSoftwareTab && (
                              <div 
                                className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[70%] h-4 bg-black/20 blur-xl rounded-[100%] transition-opacity duration-300 opacity-0 group-hover:opacity-50"
                                aria-hidden="true"
                              />
                            )}

                            <img
                              src={link.image}
                              alt={link.label}
                              className={`w-full h-full ${imageObjectFit} transition-transform duration-500 ease-out ${scaleClass} relative z-20`}
                            />
                          </div>
                          
                          {/* 內容區域 - 維持 justify-end 確保文字靠下對齊 */}
                          <div className="p-5 flex flex-col flex-grow items-center justify-end gap-4 z-30 bg-white">
                            <h4 className="text-lg font-bold text-center leading-tight">
                              {link.label}
                            </h4>
                            
                            <Button
                              onClick={() => window.open(link.url, '_blank')}
                              className="w-full bg-green-600 hover:bg-green-700 text-white group/btn mt-auto"
                            >
                              Learn More
                              <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                            </Button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}