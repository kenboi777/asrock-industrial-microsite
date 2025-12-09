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
        <HeroSection />
        <LifecycleSection />
        <CertificationSection />
        <section className="py-16">
          <WhyChooseSection />
        </section>
        <InquirySection />
      </main>
    </>
  );
}