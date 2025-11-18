'use client';

import Image from 'next/image';

export function CertificationSection() {
  const certifications = [
    {
      id: 'iec-62443-4-2',
      icon: '/icons/IEC62443-4-1.png',
      title: 'IEC 62443-4-1: Secure Development Lifecycle',
      description:
        'This certification ensures ASRock Industrial’s product development process follows international standards for secure design, implementation, testing, and maintenance, guaranteeing cybersecurity is embedded throughout the entire lifecycle. ',
    },
    {
      id: 'iec-62443-4-1',
      icon: '/icons/IEC62443-4-2.png',
      title: 'IEC 62443-4-2: Secure Product Standard',
      description:
        'This certification verifies that ASRock Industrial’s products meet the technical security requirements for industrial automation and control systems (IACS), ensuring trusted resilient, and compliant device operation. ',
    },
    {
      id: 'fido-device-onboard',
      icon: '/icons/FDO.png',
      title: 'FIDO Device Onboard (FDO): Secure and Automated Onboarding',
      description:
        'Certified under the FIDO Alliance standard, this ensures devices can be securely authenticated, registered, and deployed automatically, enabling trusted, zero-touch onboarding from factory to field. ',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[hsl(var(--muted))]">
      <div className="section-container">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Secure Certification
          </h2>
          <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-3xl mx-auto">
            Industry-leading certifications ensuring compliance and trust
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert) => {
            const isFDO = cert.id === 'fido-device-onboard';

            return (
              <div
                key={cert.id}
                className="card-gloss rounded-2xl pt-6 pb-5 sm:pt-8 sm:pb-6 px-4 sm:px-6 shadow-xl border border-[hsl(var(--border))] hover-lift bg-white flex flex-col items-center text-center"
              >
                {/* 圖片容器：手機矮一點，桌機才拉高 */}
        <div className="w-full h-52 sm:h-72 lg:h-80 relative mb-4 sm:mb-6 flex items-center justify-center">
          <Image
            src={cert.icon}
              alt={cert.title}
                 fill
                  className={
                'object-contain' +
            (isFDO ? ' scale-75 sm:scale-100' : '')
              }
            />
          </div>

                {/* 標題：高度稍微縮短一點 */}
               <div
  className={
    'flex items-start justify-center mb-2 sm:mb-3 text-center ' +
    (isFDO ? 'h-auto' : 'h-[3.5rem] sm:h-[4.5rem]')
  }
>
  <h3
    className={
      (isFDO ? 'text-base ' : 'text-lg ') + // 第三張手機版字小一點
      'sm:text-xl font-bold leading-snug'
    }
  >
    {cert.title}
  </h3>
</div>

                {/* 內文：左右等寬、最後一行靠左 */}
                <p
                  className="text-xs sm:text-sm text-[hsl(var(--muted-foreground))] leading-relaxed"
                  style={{
                    textAlign: 'justify',
                    textJustify: 'inter-word',
                    textAlignLast: 'left' as any,
                  }}
                >
                  {cert.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}