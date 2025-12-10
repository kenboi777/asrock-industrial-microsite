'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface PageHeroProps {
  id?: string;
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  desktopImage?: string;
  mobileImage?: string;
}

export function PageHero({
  // 修改這裡：給 id 一個預設值 'overview'
  // 這樣如果外面沒傳 id 進來，它就會自動變成 'overview'
  id = 'overview', 
  title,
  subtitle,
  backgroundImage,
  desktopImage,
  mobileImage
}: PageHeroProps) {
  const hasContent = !!title || !!subtitle;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (hasContent) {
      setIsVisible(true);
    }
  }, [hasContent]);

  return (
    // 這裡會接收上面的值，變成 id="overview"
    <section 
      id={id} 
      className="relative w-full overflow-hidden"
    >
      {/* 1. 背景圖片區域 */}
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

      {/* 2. 文字內容與遮罩 */}
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