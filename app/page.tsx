import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { LifecycleSection } from '@/components/LifecycleSection';
import { CertificationSection } from '@/components/CertificationSection';
import { WhyChooseSection } from '@/components/WhyChooseSection';
import { InquirySection } from '@/components/InquirySection';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        
        {/* ★ 修改這裡：加入 scroll-mt-20 ★ 
            這會讓瀏覽器在跳轉到此 ID 時，自動往上多留約 80px 的緩衝空間。
            因為你的 padding 是 pt-16 (64px)，設 20 (80px) 可以確保它一定會捲到最頂端 (0px)。
        */}
        <div id="overview" className="scroll-mt-20">
          <HeroSection />
          <LifecycleSection />
          <CertificationSection />
          <section className="py-16">
            <WhyChooseSection />
          </section>
        </div>

        {/* 建議 Inquiry 也加上，這樣滑下去時不會被 Header 擋住標題 */}
        <div id="inquiry" className="scroll-mt-20">
          <InquirySection />
        </div>

      </main>
    </>
  );
}