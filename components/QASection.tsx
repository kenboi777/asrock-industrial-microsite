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

  // 核心渲染邏輯：智慧判斷是否需要圓點
  const renderAnswerContent = (answerText: string) => {
    // 先把文字依據 '•' 切割開來
    const parts = answerText.split('•');
    // 檢查原始字串是不是以 '•' 開頭 (這決定了第一段文字是不是清單項)
    const startsWithBullet = answerText.trim().startsWith('•');

    return (
      <div className="space-y-4">
        {parts.map((part, index) => {
          // 過濾掉切割後產生的空字串 (例如 "• Item 1" 切割後第一個會是空字串)
          if (!part.trim()) return null;

          // 判斷這一行要不要加圓點樣式：
          // 1. 如果 index > 0，代表它是被切割出來的後半段，一定原本就有 '•'，所以要加。
          // 2. 如果 index === 0 (第一段)，只有在原始字串就是以 '•' 開頭時才加。
          //    (這樣可以避免 "這是一段前言 • 這是第一點" 的 "前言" 被加上圓點)
          const shouldShowBullet = index > 0 || startsWithBullet;

          // 處理 (Source: ...) 的樣式
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
                // 只有需要圓點時才渲染這個 span
                <span className="mr-3 shrink-0 select-none">•</span>
              )}
              {/* 內容區塊 */}
              <span dangerouslySetInnerHTML={{ __html: processedText }} />
            </div>
          );
        })}
      </div>
    );
  };

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