'use client';

import { useEffect, useRef, useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { faqItems } from '@/lib/content-data';

// 1. 定義 props 介面
interface QASectionProps {
  id?: string;
}

// 2. 接收 id 參數
export function QASection({ id }: QASectionProps) {
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

  const renderAnswerContent = (answerText: string) => {
    const parts = answerText.split('•');
    const startsWithBullet = answerText.trim().startsWith('•');

    return (
      <div className="space-y-4">
        {parts.map((part, index) => {
          if (!part.trim()) return null;

          const shouldShowBullet = index > 0 || startsWithBullet;

          const processedText = part.replace(
            /\(Source:\s*(.*?)\)/g,
            (_match, inner) =>
              `<span class="block mt-1 text-sm text-[#2563eb] italic underline hover:text-blue-700 transition-colors">
                (Source: ${inner})
               </span>`
          );

          return (
            <div
              key={index}
              className={`text-base leading-relaxed text-[hsl(var(--muted-foreground))] text-justify [text-align-last:left] ${
                shouldShowBullet ? 'flex items-start' : 'block'
              }`}
            >
              {shouldShowBullet && (
                <span className="mr-3 shrink-0 select-none">•</span>
              )}
              <span dangerouslySetInnerHTML={{ __html: processedText }} />
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <section
      // 3. 使用傳入的 id，如果沒傳則預設為 "qa"
      id={id || "qa"}
      ref={sectionRef}
      className="py-16 lg:py-28 bg-[hsl(var(--muted))]"
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
            {faqItems.map((item) => (
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
                <AccordionTrigger className="text-left text-xl sm:text-2xl font-semibold py-6 hover:text-[hsl(var(--primary))] hover:no-underline">
                  {item.question}
                </AccordionTrigger>

                <AccordionContent className="pb-6">
                  {renderAnswerContent(item.answer)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}