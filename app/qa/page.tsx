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
         
          desktopImage="/hero.jpg/Overview.jpg"
          mobileImage="/Overview-m.jpg"
        />
        <QASection />
        <InquirySection />
      </main>
    </>
  );
}
