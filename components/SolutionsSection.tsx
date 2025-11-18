'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { solutionTabs } from '@/lib/content-data';
import { ExternalLink, Check } from 'lucide-react';

export function SolutionsSection() {
  return (
    <section id="solutions" className="py-20 lg:py-28 bg-[hsl(var(--muted))]">
      <div className="section-container">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Secure Solutions
          </h2>
          <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-3xl mx-auto">
            Comprehensive portfolio of secure industrial computing platforms
          </p>
        </div>

        <Tabs defaultValue="edge-aiot" className="w-full">
<TabsList
  className="
    grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
    gap-2 h-auto
    bg-white p-2 mb-8
    rounded-2xl shadow-md        /* ⭐ 整條白色底變圓角 */
  "
>
  {solutionTabs.map((tab) => (
    <TabsTrigger
      key={tab.id}
      value={tab.id}
      className="
        px-4 py-3
        text-xs sm:text-sm font-medium whitespace-normal
        h-auto min-h-[3rem]
        rounded-xl                  /* ⭐ 每一個 tab 自己也圓角 */
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
              className="mt-8 animate-fade-in"
            >
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                <div className="space-y-6">
                  <h3 className="text-2xl sm:text-3xl font-bold">
                    {tab.title}
                  </h3>
                  <p className="text-lg text-[hsl(var(--muted-foreground))] leading-relaxed text-justify" style={{ textAlignLast: 'left' }}>
                    {tab.description}
                  </p>

                  <div className="space-y-3 pt-4">
                    {tab.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-5 h-5 rounded-full bg-[hsl(var(--primary))]/10 flex items-center justify-center">
                            <Check className="w-3 h-3 text-[hsl(var(--primary))]" />
                          </div>
                        </div>
                        <p className="text-base text-[hsl(var(--foreground))]">
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-[hsl(var(--muted-foreground))] mb-4">
                      Learn More
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {tab.links.map((link) => (
                        <Button
                          key={link.label}
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(link.url, '_blank')}
                          className="group"
                        >
                          {link.label}
                          <ExternalLink className="ml-2 w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src="/AiFDO 1200x600.jpg"
                      alt={tab.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--primary))]/20 to-transparent" />
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
