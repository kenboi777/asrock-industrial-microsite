import { whyChooseFeatures } from '@/lib/content-data';
import Image from 'next/image';

const imageMap = {
  'shield-check': '/Trusted Security by Design.png',
  'cpu': '/Proven Edge Intelligence.png',
  'globe': '/Local Commitment.png',
};

export function WhyChooseSection() {
  return (
    <>
      <div className="section-container">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Why Choose ASRock Industrial?
          </h2>
          <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-3xl mx-auto">
            Empowering industries with trusted, secure, and intelligent edge solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {whyChooseFeatures.map((feature, index) => {
            const imageSrc = imageMap[feature.icon as keyof typeof imageMap];
            return (
              <div
                key={feature.id}
                className="flex flex-col h-full p-8 rounded-2xl shadow-lg bg-white border border-[hsl(var(--border))] hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-32 h-32 rounded-xl bg-[hsl(var(--primary))]/10 flex items-center justify-center p-4">
                    {imageSrc && (
                      <Image
                        src={imageSrc}
                        alt={feature.title}
                        width={90}           // 原本是 128
                        height={90}          // 原本是 128
                        className="w-[70%] h-[70%] object-contain" // 縮小到 70%
                      />
                    )}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 leading-tight text-center">
                  {feature.title}
                </h3>
                <p
                  className="text-base text-[hsl(var(--muted-foreground))] leading-relaxed text-justify"
                  style={{ textAlignLast: 'left' }}
                >
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}