import { Header } from '@/components/Header';
import { SolutionsHero } from '@/components/SolutionsHero';
import { SolutionsSection } from '@/components/SolutionsSection';
import { InquirySection } from '@/components/InquirySection';

export default function SolutionsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        <SolutionsHero />
        <SolutionsSection />
        <InquirySection />
      </main>
    </>
  );
}
