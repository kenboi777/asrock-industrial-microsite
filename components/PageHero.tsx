'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface PageHeroProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  desktopImage?: string;
  mobileImage?: string;
}

export function PageHero({
  title,
  subtitle,
  backgroundImage,
  desktopImage,
  mobileImage
}: PageHeroProps) {
  // 判斷是否有傳入標題，如果有，代表這個頁面需要顯示「舊版的文字遮罩模式」
  const hasContent = !!title || !!subtitle;
  
  // 只有在有內容時才需要動畫狀態
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (hasContent) {
      setIsVisible(true);
    }
  }, [hasContent]);

  return (
    <section className="relative w-full overflow-hidden">
      {/* 1. 背景圖片區域 (共用邏輯) */}
      {backgroundImage ? (
        <div
          className="w-full h-[400px] md:h-[500px] lg:h-[600px] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      ) : (
        <>
          {desktopImage && (
            <div className="hidden md:block w-full">
              <Image
                src={desktopImage}
                alt={title || 'Hero Image'}
                width={1920}
                height={800}
                priority
                sizes="100vw"
                className="w-full h-auto object-cover"
              />
            </div>
          )}
          {mobileImage && (
            <div className="block md:hidden w-full">
              <Image
                src={mobileImage}
                alt={title || 'Hero Image'}
                width={720}
                height={1280}
                priority
                sizes="100vw"
                className="w-full h-auto object-cover"
              />
            </div>
          )}
        </>
      )}

      {/* 2. 條件渲染：只有當 title 或 subtitle 存在時，才把遮罩加回來 */}
      {hasContent && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <div
              className={`transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              {title && (
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                  {title}
                </h1>
              )}
              {subtitle && (
                <p className="text-lg sm:text-xl md:text-2xl text-white/95 drop-shadow-md max-w-4xl mx-auto">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}