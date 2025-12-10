import { Header } from '@/components/Header';
import { PageHero } from '@/components/PageHero';
import { QASection } from '@/components/QASection';
import { InquirySection } from '@/components/InquirySection';

export default function QAPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        <PageHero
          // ★ 修改重點：這裡一定要覆蓋預設的 'overview' ID
          // 隨便給它一個不衝突的名字，例如 "qa-hero"
          id="qa-hero" 
          
          desktopImage="/hero.jpg/Overview.jpg"
          mobileImage="/Overview-m.jpg"
        />
        
        {/* 其他維持原樣 */}
        <QASection />
        <InquirySection id="inquiry" />
      </main>
    </>
  );
}