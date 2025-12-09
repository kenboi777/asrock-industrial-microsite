'use client';

import Image from 'next/image';

export function SolutionsHero() {
  return (
    // 修改 1: 移除 h-[400px] 等固定高度，改為讓內容撐開
    <section className="w-full bg-[hsl(var(--muted))]">
      
      {/* 1. 電腦版圖片 (Desktop) - 寬螢幕比例 */}
      <div className="hidden md:block w-full">
        <Image
          src="/secure_solution_1920x720.jpg"
          alt="Secure Solution Desktop"
          // 修改 2: 設定原始圖片尺寸 (Next.js 用這個算比例)
          width={1920} 
          height={720}
          // 修改 3: CSS 設定寬度 100%，高度自動 (h-auto)
          className="w-full h-auto"
          priority
        />
      </div>

      {/* 2. 手機版圖片 (Mobile) - 長條比例 */}
      <div className="block md:hidden w-full">
        <Image
          src="/secure_solution_720x1140.jpg"
          alt="Secure Solution Mobile"
          // 修改 2: 設定原始圖片尺寸 (若是 720x1140)
          width={720}
          height={1140}
          // 修改 3: 保證寬度滿版，高度按比例縮放，不會被切到
          className="w-full h-auto"
          priority
        />
      </div>

    </section>
  );
}