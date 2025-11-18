'use client';

import { useEffect, useRef, useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { faqItems } from '@/lib/content-data';

export function QASection() {
  const [visibleItems, setVisibleItems] = useState<string[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            faqItems.forEach((item, index) => {
              setTimeout(() => {
                setVisibleItems((prev) => [...prev, item.id]);
              }, index * 200);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="qa"
      ref={sectionRef}
      className="py-20 lg:py-28 bg-[hsl(var(--muted))]"
    >
      <div className="section-container">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Questions &amp; Answers
          </h2>
          <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-3xl mx-auto">
            Common questions about industrial cybersecurity and our solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="multiple" className="space-y-4">
            {faqItems.map((item) => {
              // 將每一個 "(Source: 內容)" 中的「內容」變成藍色＋斜體＋底線
              const styledAnswer = item.answer.replace(
                /\(Source:\s*(.*?)\)/g,
                (_match, inner) =>
                  `(Source: <span class="text-[#2563eb] italic underline">${inner}</span>)`
              );

              return (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className={`bg-white rounded-2xl border border-[hsl(var(--border))] px-6 shadow-md data-[state=open]:shadow-xl transition-all ${
                    visibleItems.includes(item.id)
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-4'
                  }`}
                  style={{
                    transition:
                      'opacity 0.7s ease-out, transform 0.7s ease-out, box-shadow 0.3s ease',
                  }}
                >
                  <AccordionTrigger className="text-left text-base sm:text-lg font-semibold py-6 hover:text-[hsl(var(--primary))] hover:no-underline">
                    {item.question}
                  </AccordionTrigger>

                  <AccordionContent className="pb-6">
                    <p
                      className="text-base text-[hsl(var(--muted-foreground))] leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: styledAnswer }}
                    />
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
