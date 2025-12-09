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
      { threshold: 0.1 }
    );

    const tabsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTabsInView(true);
          if (tabsRef.current) tabsObserver.unobserve(tabsRef.current);
        }
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) titleObserver.observe(titleRef.current);
    if (tabsRef.current) tabsObserver.observe(tabsRef.current);

    return () => {
      titleObserver.disconnect();
      tabsObserver.disconnect();
    };
  }, []);

  return (
    <section 
      id="solutions" 
      className="py-12 lg:py-28 bg-[hsl(var(--muted))]"
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
        
        {/* --- 第一部分：標題區 --- */}
        <div 
          ref={titleRef} 
          className={`text-center mb-8 lg:mb-16 opacity-0 ${titleInView ? 'animate-title-delayed' : ''}`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Secure Solutions
          </h2>
          <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-3xl mx-auto">
            Comprehensive portfolio of secure industrial computing platforms
          </p>
        </div>

        {/* --- 第二部分：Tabs 區塊 --- */}
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
              {solutionTabs.map((tab) => (
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

            {solutionTabs.map((tab) => (
              <TabsContent
                key={tab.id}
                value={tab.id}
                className="mt-4 focus:outline-none overflow-hidden"
              >
                <div key={tab.id} className="animate-tab-content space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-2xl sm:text-3xl font-bold">
                      {tab.title}
                    </h3>
                    <p className="text-lg text-[hsl(var(--muted-foreground))] leading-relaxed text-justify" style={{ textAlignLast: 'left' }}>
                      {tab.description}
                    </p>
                  </div>

                  <div className={`grid grid-cols-1 gap-6 ${tab.id === 'software-services' ? 'lg:grid-cols-3' : 'lg:grid-cols-2'}`}>
                    {tab.links.map((link) => {
                      const isSoftwareTab = tab.id === 'software-services';
                      
                      // 1. 排版方向
                      const flexDirection = isSoftwareTab ? 'flex-col' : 'flex-col md:flex-row';
                      
                      // 2. 寬度分配
                      const imageWidthClass = isSoftwareTab ? 'w-full' : 'w-full md:w-[35%]';
                      
                      // 3. 縮放模式：Software 改用 cover 且寬度滿版，其他用 contain
                      const imageObjectFit = isSoftwareTab ? 'object-cover' : 'object-contain';
                      
                      // 4. 高度設定：Software 改用 h-auto 讓圖片依比例撐開，避免裁切；其他維持固定高度
                      const imageHeightClass = isSoftwareTab ? 'h-auto aspect-video' : 'h-64 md:h-auto'; 
                      
                      // 5. 關鍵修正：內距設定
                      // Software Tab 設為 p-0 (無內距) -> 達成滿版效果
                      // 其他 Tab 設為 p-4 -> 保持留白美感
                      const imagePadding = isSoftwareTab ? 'p-0' : 'p-4';

                      return (
                        <div
                          key={link.label}
                          className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex ${flexDirection}`}
                        >
                          {/* 圖片容器：套用動態的 padding 和 height */}
                          <div className={`${imageWidthClass} ${imageHeightClass} relative overflow-hidden flex-shrink-0 flex items-center justify-center bg-white ${imagePadding}`}>
                            <img
                              src={link.image}
                              alt={link.label}
                              className={`w-full h-full ${imageObjectFit}`}
                            />
                          </div>
                          
                          <div className="p-6 flex flex-col flex-grow">
                            <h4 className="text-xl font-bold mb-3">
                              {link.label}
                            </h4>
                            <p className="text-[hsl(var(--muted-foreground))] mb-4 flex-grow text-justify" style={{ textAlignLast: 'left' }}>
                              {link.description}
                            </p>
                            <Button
                              onClick={() => window.open(link.url, '_blank')}
                              className="w-full bg-green-600 hover:bg-green-700 text-white group mt-auto"
                            >
                              Learn More
                              <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
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