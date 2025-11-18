import Image from 'next/image';

const highlights = [
  {
    image: '/Security Becomes a Global.png',
    title: 'Security Becomes a Global Requirement',
    description:
      'Global frameworks such as the EU Cyber Resilience Act (CRA), NIST, and NIS2 elevate security from an option to as a baseline requirement.',
  },
  {
    image: '/Rising Requirement Risk.png',
    title: 'Growing Connectivity, Rising Risk',
    description:
      'As industrial systems become more connected, the attack surface expands. With cyber threats growing in scale and complexity, every connection must be secured to stop vulnerabilities from spreading.',
    largeIcon: true, // 中間這張 icon 放大
  },
  {
    image: '/Building Trust Through.png',
    title: 'Building Trust Through Lifecycle Security',
    description:
      'Security must extend from design to operation. Adopting standards like IEC 62443 ensures trusted, compliant, and resilient systems.',
  },
];

export function HeroSection() {
  return (
    <section id="overview" className="bg-white">
      {/* Hero image */}
      <div className="w-full">
        <Image
          src="/hero.jpg/Overview.jpg"
          alt="Industrial cybersecurity hero"
          width={1920}
          height={800}
          priority
          sizes="100vw"
          className="hidden md:block w-full h-auto object-cover"
        />
        <Image
          src="/Overview-m.jpg"
          alt="Industrial cybersecurity hero"
          width={720}
          height={1280}
          priority
          sizes="100vw"
          className="block md:hidden w-full h-auto object-cover"
        />
      </div>

      {/* Intro text */}
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 pt-10 sm:pt-14 pb-4 sm:pb-5">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Why Industrial Cybersecurity Matters More Than Ever
        </h1>

<p
  className="mt-3 text-slate-600 leading-relaxed"
  style={{
    textAlign: 'justify',
    textJustify: 'inter-word',
    textAlignLast: 'left' as any,
  }}
>
  In today&apos;s connected industrial landscape, cybersecurity has become the
  foundation of trust. As automation, AI, and IoT continue to reshape industries,
  every connected system introduces both innovation and potential risk. Industrial
  cybersecurity safeguards operations against data breaches, service interruptions,
  and evolving cyber threats ensuring safety, reliability, and continuity across
  critical environments.
</p>

      </div>

      {/* 3 highlight cards */}
      <div className="section-container mt-0 md:mt-1 pb-16">
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((highlight) => {
            const isLarge = (highlight as any).largeIcon;

            return (
              <div
                key={highlight.title}
                className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[hsl(var(--border))] flex flex-col items-center h-full"
              >
                {/* ICON：固定高度區塊 → 三張水平 & 垂直對齊 */}
                <div className="flex items-center justify-center h-24 mb-4 w-full">
                  <Image
                    src={highlight.image}
                    alt={highlight.title}
                    width={isLarge ? 101 : 72}
                    height={isLarge ? 101 : 72}
                    className={`${isLarge ? 'w-[101px] h-[101px]' : 'w-[72px] h-[72px]'} object-contain`}
                  />
                </div>

                {/* 文字區：內縮約 10–20%，等寬等高 */}
                <div className="flex flex-col flex-1 w-11/12 mx-auto">
                  {/* Title 置中 */}
                  <h3 className="font-semibold text-base mb-2 leading-tight text-center">
                    {highlight.title}
                  </h3>

                  <p
                    className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed text-justify"
                    style={{ textAlignLast: 'left' as any }}
                  >
                    {highlight.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}