'use client';

import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { lifecycleTabs } from '@/lib/content-data';

export function LifecycleSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="section-container">
        {/* 標題區 */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Trusted Secure Lifecycle
          </h2>
          <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-4xl mx-auto">
            ASRock Industrial is a trusted pioneer in Secure Edge AI Platforms,
            delivering comprehensive protection across every layer of the ecosystem—from
            secure devices and deployment to long-term operation, internationally
            recognized certifications, supply chain transparency, and incident
            response preparedness.
          </p>
        </div>

        {/* Tabs 區塊 */}
        <Tabs defaultValue="secure-device" className="w-full">
          {/* 上方箭頭 Tabs */}
          <div className="w-full mb-8">
            <TabsList className="arrow-tabs">
              {lifecycleTabs.map((tab, index) => {
                const positionClass =
                  index === 0
                    ? 'arrow-tab--first'
                    : index === lifecycleTabs.length - 1
                    ? 'arrow-tab--last'
                    : 'arrow-tab--middle';

                return (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    className={[
                      'arrow-tab',
                      positionClass,
                      // 這裡控制字體大小 & 粗細 & padding
                      'flex-1 flex items-center justify-center px-8 py-3 sm:py-4 text-base sm:text-xl font-bold transition-all duration-200',
                    ].join(' ')}
                  >
                    {tab.title}
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </div>

          {/* 內容區 */}
          {lifecycleTabs.map((tab) => {
            const isSecureDevice = tab.id === 'secure-device';

            return (
              <TabsContent
                key={tab.id}
                value={tab.id}
                className="mt-8 animate-fade-in"
              >
                {tab.id === 'secure-operation' ? (
                  <>
                    {/* ---------- SECURE OPERATION ---------- */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                      {/* 左側文字 */}
                      <div className="flex flex-col justify-center space-y-6">
                        <h3 className="text-2xl sm:text-3xl font-bold">
                          {tab.title}
                        </h3>
                        <p
                          className="text-lg text-[hsl(var(--muted-foreground))] leading-relaxed text-justify"
                          style={{ textAlignLast: 'left' as any }}
                        >
                          {tab.description}
                        </p>
                      </div>

                      {/* AiSafeguard 卡片 */}
                      <div className="flex flex-col rounded-2xl shadow-xl overflow-hidden h-full bg-gray-100">
                        <img
                          src="/AiSafeguard.jpg"
                          alt="AiSafeguard"
                          className="w-full h-56 sm:h-64 object-cover"
                        />
                        <div className="px-4 py-4 lg:px-5 lg:py-5 bg-slate-100">
                          <h4 className="text-lg font-bold text-slate-900 text-center">
                            AiSafeguard
                          </h4>
                          <p
                            className="mt-3 text-base text-slate-700 leading-relaxed text-justify"
                            style={{ textAlignLast: 'left' as any }}
                          >
                            secures OT devices using Zero Trust and containerized
                            architecture, enabling isolation, monitoring, and resilient
                            governance.
                          </p>
                        </div>
                      </div>

                      {/* AiSMA 卡片 */}
                      <div className="flex flex-col rounded-2xl shadow-xl overflow-hidden h-full bg-gray-100">
                        <img
                          src="/AiSMA copy.jpg"
                          alt="AiSMA"
                          className="w-full h-56 sm:h-64 object-cover"
                        />
                        <div className="px-4 py-4 lg:px-5 lg:py-5 bg-slate-100">
                          <h4 className="text-lg font-bold text-slate-900 text-center">
                            AiSMA
                          </h4>
                          <p
                            className="mt-3 text-base text-slate-700 leading-relaxed text-justify"
                            style={{ textAlignLast: 'left' as any }}
                          >
                            integrates the Redfish standard for secure,
                            cryptographically hardened out-of-band (OOB) remote
                            management across distributed industrial deployments.
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* ---------- SECURE DEVICE / SECURE DEPLOYMENT ---------- */}
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                      {/* 左側文字 */}
                      <div className="space-y-6">
                        <h3 className="text-2xl sm:text-3xl font-bold">
                          {tab.title}
                        </h3>
                        <p
                          className="text-lg text-[hsl(var(--muted-foreground))] leading-relaxed text-justify"
                          style={{ textAlignLast: 'left' as any }}
                        >
                          {tab.description}
                        </p>
                      </div>

                      {/* 右側圖片 / 卡片 */}
                      <div className="relative">
                        {tab.id === 'secure-deployment' ? (
                          <div className="rounded-2xl bg-white shadow-xl overflow-hidden flex flex-col h-full">
                            <img
                              src="/AiFDO 1200x600 copy.jpg"
                              alt={tab.title}
                              className="w-full h-56 sm:h-64 md:h-72 object-cover"
                            />
                            <div className="px-6 py-6 bg-slate-100">
                              <h4 className="text-lg font-bold text-slate-900 text-center">
                                Ai FDO
                              </h4>
                              <p
                                className="mt-3 text-base text-slate-700 leading-relaxed text-justify"
                                style={{ textAlignLast: 'left' as any }}
                              >
                                provides zero-touch, automated, and highly secure
                                onboarding solution based on the FIDO Alliance industry
                                standard.
                              </p>
                            </div>
                          </div>
                        ) : (
                          <div className="aspect-video relative rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                              src="/Secure_Device.png"
                              alt={tab.title}
                              fill
                              className="object-contain"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                )}

{isSecureDevice && (
  <div className="mt-10 rounded-2xl bg-slate-50 px-6 py-8 lg:px-10 lg:py-10 shadow-lg">
    {/* 手機：1 欄垂直；桌機：4 欄，維持原本排版 */}
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* Card 1 */}
      <div className="flex flex-row lg:flex-col items-center lg:items-center h-full">
        {/* Icon：手機在左，垂直置中；桌機在上 */}
        <div className="mr-4 lg:mr-0 flex-shrink-0 flex items-center justify-center self-center w-16 lg:w-auto lg:h-16 lg:mb-3">
          <Image
            src="/icons/foundational-trust.svg"
            alt="Foundational Trust & Platform Integrity"
            width={48}
            height={48}
            className="object-contain"
          />
        </div>

        {/* 文字：手機靠左，桌機置中，保持原來字級 */}
        <div className="flex flex-col flex-1 w-full">
          <h4 className="text-sm font-semibold text-slate-700 text-left lg:text-center min-h-[3rem] flex items-center lg:justify-center">
            Foundational Trust &amp; Platform Integrity
          </h4>
          <p
            className="mt-2 text-xs leading-relaxed text-slate-500 text-justify"
            style={{ textAlignLast: 'left' as any }}
          >
            Secure boot and platform attestation, with technologies like TPM and
            hardware-based safeguards, establish a hardware-rooted chain of
            trust to ensure systems start clean and remain tamper-resistant.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="flex flex-row lg:flex-col items-center lg:items-center h-full">
        <div className="mr-4 lg:mr-0 flex-shrink-0 flex items-center justify-center self-center w-16 lg:w-auto lg:h-16 lg:mb-3">
          <Image
            src="/icons/virtualization-isolation.svg"
            alt="Virtualization & I/O Isolation Hardening"
            width={48}
            height={48}
            className="object-contain"
          />
        </div>
        <div className="flex flex-col flex-1 w-full">
          <h4 className="text-sm font-semibold text-slate-700 text-left lg:text-center min-h-[3rem] flex items-center lg:justify-center">
            Virtualization &amp; I/O Isolation Hardening
          </h4>
          <p
            className="mt-2 text-xs leading-relaxed text-slate-500 text-justify"
            style={{ textAlignLast: 'left' as any }}
          >
            Hardware-enforced virtualization and I/O isolation, minimizing
            attack surfaces and protecting data in multi-tenant environments,
            ensuring secure resource separation.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="flex flex-row lg:flex-col items-center lg:items-center h-full">
        <div className="mr-4 lg:mr-0 flex-shrink-0 flex items-center justify-center self-center w-16 lg:w-auto lg:h-16 lg:mb-3">
          <Image
            src="/icons/runtime-memory.svg"
            alt="Runtime & Memory Protection"
            width={62}
            height={62}
            className="object-contain"
          />
        </div>
        <div className="flex flex-col flex-1 w-full">
          <h4 className="text-sm font-semibold text-slate-700 text-left lg:text-center min-h-[3rem] flex items-center lg:justify-center">
            Runtime &amp; Memory Protection
          </h4>
          <p
            className="mt-2 text-xs leading-relaxed text-slate-500 text-justify"
            style={{ textAlignLast: 'left' as any }}
          >
            Advanced encryption, access controls, and side-channel defenses to
            safeguard memory, code integrity, and sensitive workloads in real
            time.
          </p>
        </div>
      </div>

      {/* Card 4 */}
      <div className="flex flex-row lg:flex-col items-center lg:items-center h-full">
        <div className="mr-4 lg:mr-0 flex-shrink-0 flex items-center justify-center self-center w-16 lg:w-auto lg:h-16 lg:mb-3">
          <Image
            src="/icons/cryptographic-acceleration.svg"
            alt="Cryptographic Acceleration"
            width={44}
            height={44}
            className="h-11 w-11 object-contain"
          />
        </div>
        <div className="flex flex-col flex-1 w-full">
          <h4 className="text-sm font-semibold text-slate-700 text-left lg:text-center min-h-[3rem] flex items-center lg:justify-center">
            Cryptographic Acceleration
          </h4>
          <p
            className="mt-2 text-xs leading-relaxed text-slate-500 text-justify"
            style={{ textAlignLast: 'left' as any }}
          >
            AES-NI and SHA Extensions accelerate encryption, strengthen
            randomness, and protect stored data with efficient, hardware-based
            cryptography.
          </p>
        </div>
      </div>
    </div>
  </div>
)}
              
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
}