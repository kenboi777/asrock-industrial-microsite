import { Header } from '@/components/Header';
import { InsightsHero } from '@/components/InsightsHero';
import { InsightsSection } from '@/components/InsightsSection';
import { InquirySection } from '@/components/InquirySection';

export default function InsightsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        <InsightsHero />
        <section className="py-16">
          <InsightsSection />
        </section>
        
        {/* ★ 修改這裡：加上 id="inquiry" ★ */}
        <InquirySection id="inquiry" />
        
      </main>
    </>
  );
}