// @/lib/content-data.ts

export interface CertificationCard {
  id: string;
  title: string;
  badge: string;
  description: string;
}

export interface LifecycleTab {
  id: string;
  title: string;
  description: string;
}

export interface FeatureCard {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface SolutionLink {
  label: string;
  url: string;
  description: string;
  image: string;
}

export interface SolutionTab {
  id: string;
  title: string;
  description: string;
  links: SolutionLink[];
}

export interface InsightArticle {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
  link: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface SocialLink {
  name: string;
  icon: string;
  url: string;
}

// 1. Certifications
export const certifications: CertificationCard[] = [
  {
    id: 'iec-62443-4-1',
    title: 'IEC 62443-4-1',
    badge: 'Secure Development',
    description: 'This certification ensures <strong>ASRock Industrial</strong>’s product development process follows international standards for secure design, implementation, testing, and maintenance, guaranteeing cybersecurity is embedded throughout the entire lifecycle.',
  },
  {
    id: 'iec-62443-4-2',
    title: 'IEC 62443-4-2',
    badge: 'Product Security',
    description: 'This certification verifies that <strong>ASRock Industrial</strong>’s products meet the technical security requirements for <strong>industrial automation and control systems (IACS)</strong>, ensuring trusted resilient, and compliant device operation.',
  },
  {
    id: 'fido-device-onboard',
    title: 'FIDO Device Onboard',
    badge: 'FDO',
    description: 'Certified under the <strong>FIDO Alliance</strong> standard, this ensures devices can be securely authenticated, registered, and deployed automatically, enabling trusted, zero-touch onboarding from factory to field.',
  },
];

// 2. Lifecycle Tabs
export const lifecycleTabs: LifecycleTab[] = [
  {
    id: 'secure-device',
    title: 'Secure Device',
    description: 'Secure Device integrates hardware-rooted trust, TPM, and advanced cryptographic protection to ensure system integrity, data privacy, and secure operation throughout the device lifecycle.',
  },
  {
    id: 'secure-deployment',
    title: 'Secure Deployment',
    description: 'Secure Deployment ensures every device begins its lifecycle in a trusted state, enabling automated, verifiable onboarding from factory production to field operation while reducing risk and accelerating large-scale deployment.',
  },
  {
    id: 'secure-operation',
    title: 'Secure Operation',
    description: 'Secure Operation maintains trusted performance throughout runtime and maintenance, reinforcing system resilience through Zero Trust protection, real-time monitoring, and secure remote management across distributed environments.',
  },
];

// 3. Why Choose Features
export const whyChooseFeatures: FeatureCard[] = [
  {
    id: 'trusted-security',
    title: 'Trusted Security by Design',
    // 已更新：ASRock Industrial 與 IEC 62443 變粗
    description: 'Security is embedded across every stage, from hardware and firmware to deployment and operation. <strong>ASRock Industrial</strong> integrates <strong>IEC 62443</strong> certified development and secure device design to ensure lasting reliability. ',
    icon: 'shield-check',
  },
  {
    id: 'edge-intelligence',
    title: 'Proven Edge Intelligence',
    description: 'With extensive experience in industrial optimized for AI inference, data processing, and intelligent automation at the edge. ',
    icon: 'cpu',
  },
  {
    id: 'global-trust',
    title: 'Global Trust, Local Commitment',
    description: 'Supported by a worldwide network and close industry partnerships, ASRock Industrial ensures reliable deliver and responsive support for global customers.',
    icon: 'globe',
  },
];

// 4. Solution Tabs
export const solutionTabs: SolutionTab[] = [
  {
    id: 'edge-aiot',
    title: 'Industrial Robust Edge AIoT Platform',
    description: "ASRock Industrial's Industrial Robust Edge AIoT Platform delivers high-performance computing reliable connectivity, and intelligent manageability for mission-critical industrial environments. Designed to operate under extreme conditions, it combines ruggedized hardware with advanced AI and IoT capabilities to enable real-time data processing, predictive maintenance, and automation at the edge. Supporting diverse verticals such as smart manufacturing, energy, and transportation, the platform empowers industries to accelerate digital transformation securely and efficiently.",
    links: [
      {
        label: 'Expandable Edge AIoT Platform',
        url: 'https://www.asrockind.com/expandable-edge-aiot-platform',
        description: 'High-performance tower system with expandable architecture for advanced AI processing and flexible I/O configuration in demanding industrial environments.',
        image: '/expandable_edge_aiot_platform.png'
      },
      {
        label: 'Compact Edge AIoT Platform',
        url: 'https://www.asrockind.com/compact-edge-aiot-platform',
        description: 'Rugged, space-efficient platform designed for edge computing with integrated AI capabilities and rich connectivity for distributed deployment.',
        image: '/compact_edge_aiot_platform.png'
      },
      {
        label: 'Industrial IoT Controller',
        url: 'https://www.asrockind.com/industrial-iot-controller',
        description: 'Purpose-built controller optimized for real-time IoT data acquisition, processing, and control with industrial-grade reliability and wide operating temperature range.',
        image: '/industrial_iot_controller.png'
      },
      {
        label: 'Edge AI Platform',
        url: 'https://www.asrockind.com/product-category/150',
        description: 'Specialized computing platform engineered for AI inference at the edge, delivering high-throughput processing with optimized thermal management.',
        image: '/edge_ai_platform.png'
      },
    ],
  },
  {
    id: 'embedded-system',
    title: 'Embedded Computer System',
    description: "ASRock Industrial's embedded computer systems combine performance, reliability, and compact design to power a wide range of industrial and commercial applications, such as industrial KIOSK, digital signage, automation, transportation, healthcare and so on.",
    links: [
      {
        label: 'Fanless Embedded Box PC',
        url: 'https://www.asrockind.com/fanless-embedded-box-pc',
        description: 'Silent, maintenance-free embedded systems designed for 24/7 operation in harsh environments.',
        image: '/fanless_embedded_box_pc.png'
      },
      {
        label: 'Fanned Embedded BOX PC',
        url: 'https://www.asrockind.com/faned-embedded-box-pc',
        description: 'High-performance embedded computing with active cooling for intensive workloads.',
        image: '/fanned_embedded_box_pc.png'
      },
    ],
  },
  {
    id: 'motherboard',
    title: 'Industrial & Embedded Motherboard',
    description: "ASRock Industrial's industrial and embedded motherboards deliver powerful computing performance, rich expansion, and long-term reliability for diverse industrial applications. Design for 24/7 operation, they feature advanced connectivity, extended lifecycle support, and compatibility with leading processors, making them ideal for Edge AI, automation and intelligent system integration.",
    links: [
      {
        label: 'Industrial Motherboards',
        url: 'https://www.asrockind.com/industrial-motherboards',
        description: 'Robust motherboards built for industrial environments with extended lifecycle support.',
        image: '/industrial_motherboards.png'
      },
      {
        label: 'Single Board Computer',
        url: 'https://www.asrockind.com/single-board-computer',
        description: 'Compact, all-in-one computing solutions for space-constrained applications.',
        image: '/single_board_computer.png'
      },
      {
        label: 'Computer on Module',
        url: 'https://www.asrockind.com/computer-on-module',
        description: 'Modular computing platforms for flexible system integration and customization.',
        image: '/computer_on_module.png'
      },
      {
        label: 'Embedded Peripherals',
        url: 'https://www.asrockind.com/embedded-peripherals',
        description: 'Essential connectivity and expansion modules for embedded systems.',
        image: '/embedded_peripherals.png'
      },
    ],
  },
  {
    id: 'software-services',
    title: 'Software & Services',
    description: "ASRock Industrial's software and services strengthen industrial computing with intelligent management, secure connectivity, and streamlined deployment. From remote monitoring and system management to cybersecurity and AI enablement, our software ecosystem enhances visibility, efficiency, and trust across edge operations, empowering enterprises to build smarter, safer, and more resilient infrastructures.",
    links: [
      {
        label: 'Ai FDO',
        url: 'https://www.asrockind.com/Ai%20FDO',
        description: 'Ai FDO Secure, zero-touch device onboarding based on FIDO Device Onboard standards for automated deployment.',
        image: '/aifdo_835x540.jpg'
      },
      {
        label: 'AiSMA',
        url: '#',
        description: 'AiSMA Redfish-based secure management architecture for remote monitoring and control of distributed systems.',
        image: '/aisma.jpg'
      },
      {
        label: 'AiSafeguard',
        url: 'https://www.asrockind.com/%20AiSafeguard',
        description: 'AiSafeguard Zero Trust security framework with real-time threat detection and containerized protection.',
        image: '/AiSafeguard.jpg'
      },
    ],
  },
];

// 5. Insight Articles
export const insightArticles: InsightArticle[] = [
  // 新增：Article 252 (2025-12-02)
  {
    id: '252',
    title: 'ASRock Industrial Presents Certified Edge Security and FDO Deployment at FIDO Taipei Seminar',
    date: '2025-12-02',
    category: 'News',
    excerpt: 'ASRock Industrial made its mark at FIDO Taipei Seminar, presenting a keynote on Secure Device integration with FIDO Device Onboard (FDO) deployment technology, demonstrating how automated, trusted, and scalable onboarding is transforming industrial edge AI.',
    image: 'https://www.asrockind.com/image/catalog/asrock/news/%E6%96%B0%E8%81%9E%E5%9C%96%E7%89%87/ASRock%20Industrial%20Presents%20Certified%20Edge%20Security%20and%20FDO%20Deployment%20at%20FIDO%20Taipei%20Seminar%20-%20Copy%20-%20Copy.jpg',
    link: 'https://www.asrockind.com/en-gb/article/252',
  },
  {
    id: '250',
    title: 'ASRock Industrial Leads the Future of Secure Edge AI Platforms',
    date: '2025-10-27',
    category: 'News',
    excerpt: 'Industrial cybersecurity is essential to the future of smart infrastructure. Global frameworks such as the EU Cyber Resilience Act (CRA), NIST, and NIS2 elevate security from an option to a baseline requirement.',
    image: 'https://www.asrockind.com/image/catalog/asrock/page_banner/Insight_img/Secure_Edge_AI-1200x900.jpg',
    link: 'https://www.asrockind.com/en-gb/article/250',
  },
  {
    id: '246',
    title: 'ASRock Industrial Launches AiUAC to Power Software-Defined, Open Industrial Automation',
    date: '2025-09-02',
    category: 'Product Launch',
    excerpt: 'Announcing the launch of AiUAC (ASRock Industrial Universal Automation Control) solution, a scalable, IEC 61499 compliant control engine designed to accelerate the transition to open industrial automation.',
    image: 'https://www.asrockind.com/image/catalog/asrock/page_banner/Insight_img/AIUAC-1200x900.jpg',
    link: 'https://www.asrockind.com/en-gb/article/246',
  },
  {
    id: '245',
    title: 'ASRock Industrial and Barbara Announce Strategic Collaboration',
    date: '2025-08-25',
    category: 'Partnership',
    excerpt: 'Joining forces with Barbara to deliver advanced, secure, and cost-efficient edge computing solutions, combining reliable industrial computing systems with secure edge AI platform software.',
    image: 'https://www.asrockind.com/image/catalog/asrock/page_banner/Insight_img/Barbara_1200x1000.jpg',
    link: 'https://www.asrockind.com/en-gb/article/245',
  },
  {
    id: '244',
    title: 'ASRock Industrial Launches Ai InduAgent Powered by PEGAAi',
    date: '2025-08-19',
    category: 'Product Launch',
    excerpt: 'Introducing Ai InduAgent, an on-premise AI solution integrating automated optical inspection (AOI) with local LLM agent technology to deliver real-time analysis and actionable insights on the factory floor.',
    image: 'https://www.asrockind.com/image/catalog/asrock/page_banner/Insight_img/InduAgent-1200x900.jpg',
    link: 'https://www.asrockind.com/en-gb/article/244',
  },

  // --- From Category 29 (Articles / Case Studies) ---
  {
    id: '249',
    title: '[Case Study] Renowned Donut Chain Powers Digital Menu Boards with ASRock Industrial iBOX Series',
    date: '2025-10-16',
    category: 'Case Study',
    excerpt: 'A renowned global donut chain upgraded its digital signage with ASRock Industrial’s iBOX-J6412 to achieve standardized deployment across both indoor and outdoor displays, ensuring consistent customer experiences.',
    image: 'https://www.asrockind.com/image/catalog/asrock/page_banner/Insight_img/Renowned_Donut-1200x900.jpg',
    link: 'https://www.asrockind.com/en-gb/article/249',
  },
  {
    id: '240',
    title: '[Case Study] GR3N Pilots the World\'s First Modular Depolymerization Plants',
    date: '2025-08-13',
    category: 'Case Study',
    excerpt: 'Sustainability-driven innovator GR3N implemented a modular, scalable, and vendor-neutral control system to support its microwave-assisted depolymerization process, enabling infinite PET recycling.',
    image: 'https://www.asrockind.com/image/catalog/asrock/page_banner/Insight_img/GR3N_1200x1000.jpg',
    link: 'https://www.asrockind.com/en-gb/article/240',
  },
  {
    id: '238',
    title: '[Case Study] J&W Elevates Smart Logistics Center with ASRock Industrial’s iEP-5000G',
    date: '2025-07-02',
    category: 'Case Study',
    excerpt: 'J&W partnered with ASRock Industrial to deploy an intelligent hybrid automation system integrating a human-cobot system with a modular conveyor loop and autonomous mobile robots (AMRs).',
    image: 'https://www.asrockind.com/image/catalog/asrock/page_banner/Insight_img/J_W_1200x1000.jpg?',
    link: 'https://www.asrockind.com/en-gb/article/238',
  },
  {
    id: '69',
    title: '[Case Study] Transforming Semiconductor IC Substrate Inspection with AI',
    date: '2025-06-27',
    category: 'Case Study',
    excerpt: 'A global leader in semiconductor packaging deployed an advanced AI AOI system for second-stage inspection, integrating PEGATRON’s PEGAAi with ASRock Industrial’s iEPF-9030S platform.',
    image: 'https://www.asrockind.com/image/catalog/asrock/page_banner/Insight_img/PEGAAI_1200x1000.jpg?',
    link: 'https://www.asrockind.com/en-gb/case-study/69',
  },
];

// 6. FAQ Items
export const faqItems: FAQItem[] = [
  {
    id: 'what-is',
    question: 'What is Industrial Cybersecurity?',
    answer:
      'Industrial cybersecurity is the backbone of digital resilience in modern industry, protecting connected systems, data, and operations that power manufacturing, energy, and smart infrastructure. It extends beyond IT defense to secure operational technology (OT) environments where uptime and safety are critical. For forward-looking leaders, cybersecurity is not just protection, but a strategic enabler of trust, compliance, and sustainable growth. It ensures that as industries embrace AI, automation, and connectivity, they can innovate with confidence—keeping every system secure, every process reliable, and every future advancement built on trust.',
  },
  {
    id: 'why-important',
    question: 'Why is it important?',
    answer:
      'Industrial cybersecurity protects the systems that keep industries running from manufacturing lines to smart infrastructure. It ensures operational continuity, data integrity, and trust in every connected process, forming the foundation for sustainable digital growth.',
  },
  {
    id: 'standards',
    question: 'What is the international standard for Industrial Cybersecurity?',
    answer:
      'The international frameworks that guide industrial cybersecurity include:<br/><br/>' +
      '• IEC 62443 – A globally recognized standard developed by ISA and IEC for securing industrial automation and control systems (IACS) through lifecycle-based security design and certification.<br/>' +
      '(Source: <a href="https://www.isa.org/isa62443" target="_blank" rel="noopener noreferrer">ISA/IEC 62443 Series of Standards</a>)<br/><br/>' +
      '• NIST SP 800-82 – A U.S. National Institute of Standards and Technology guideline providing practical recommendations for protecting industrial control systems against cyber threats.<br/>' +
      '(Source: <a href="https://csrc.nist.gov/publications/detail/sp/800-82/rev-2/final" target="_blank" rel="noopener noreferrer">NIST SP 800-82 Guide to ICS/OT Security</a>)<br/><br/>' +
      '• ISO/IEC 27001 – An international standard for information security management systems (ISMS), ensuring consistent governance, risk assessment, and data protection practices across organizations.<br/>' +
      '(Source: <a href="https://www.iso.org/standard/54534.html" target="_blank" rel="noopener noreferrer">ISO/IEC 27001</a>)',
  },
  {
    id: 'requirements',
    question: 'What international requirements and frameworks must industrial cybersecurity follow?',
    answer:
      'Key international requirements and frameworks include:<br/><br/>' +
      '• Cyber Resilience Act (CRA) – Requires products with digital elements to implement secure-by-design principles and maintain cybersecurity risk management throughout the entire lifecycle.<br/>' +
      '(Source: <a href="https://digital-strategy.ec.europa.eu/en/policies/cyber-resilience-act" target="_blank" rel="noopener noreferrer">Cyber Resilience Act</a>)<br/><br/>' +
      '• NIS2 – Expands cybersecurity obligations for operators of essential and important entities, including risk management, incident reporting, and governance requirements.<br/>' +
      '(Source: <a href="https://digital-strategy.ec.europa.eu/en/policies/nis2-directive" target="_blank" rel="noopener noreferrer">NIS2 Directive</a>)<br/><br/>' +
      '• NIST – Provides structured frameworks such as the NIST Cybersecurity Framework and SP 800-82 to strengthen governance, risk management, and incident response for industrial environments.<br/>' +
      '(Source: <a href="https://www.nist.gov/cyberframework" target="_blank" rel="noopener noreferrer">NIST Cybersecurity Framework</a>)',
  },
  {
    id: 'hardware-matters',
    question: 'Why hardware security matters?',
    answer:
      'In the OT domain, software protection alone cannot ensure complete security. Hardware-based cybersecurity establishes the root of trust, enabling secure boot, data integrity, and resistance against tampering or firmware attacks. When combined, hardware and software form a multi-layered defense architecture, ensuring resilience from the foundational layer to the application level.<br/>' +
      '(Source: <a href="https://www.intel.com/content/www/us/en/business/enterprise-computers/resources/hardware-shield.html" target="_blank" rel="noopener noreferrer">Intel Hardware Shield</a>)',
  },
  {
    id: 'hardware-enhancement',
    question: 'How does hardware enhance industrial cybersecurity?',
    answer:
      'Hardware enhances industrial cybersecurity by establishing a root of trust that secures systems from the ground up. It enables secure boot, data encryption, identity verification, and protection against firmware tampering or physical intrusion, ensuring that operations remain trusted and resilient. By anchoring security in hardware, organizations can safeguard critical assets and reinforce software defenses for long-term reliability.',
  },
  {
    id: 'product-layout',
    question: "What's ASRock Industrial's cybersecurity product layout?",
    answer:
      'ASRock Industrial’s cybersecurity offering is structured around:<br/><br/>' +
      '<strong>Secure Device</strong> – Multi-layered protection built on hardware trust anchors, including a secure processor, TPM, secure boot, memory protection, and cryptographic safeguards. These mechanisms establish a hardware-rooted chain of trust, ensuring system integrity and defense against tampering from power-on to runtime.<br/><br/>' +
      '<strong>Secure Software Solutions</strong> – Extending protection beyond hardware, ASRock Industrial integrates a suite of secure software technologies<br/>' +
      '• <strong>Ai FDO</strong> – Enables secure and zero-touch device onboarding based on FIDO standards, ensuring every system begins in a trusted state.<br/>' +
      '• <strong>AiSafeguard</strong> – Reinforces OT device resilience with Zero Trust architecture, containerized isolation, and real-time threat monitoring.<br/>' +
      '• <strong>AiSMA</strong> – Provides Redfish-based secure remote management with cryptographic hardening and out-of-band control for distributed systems.',
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    url: 'https://www.linkedin.com/company/asrock-industrial',
  },
  {
    name: 'YouTube',
    icon: 'youtube',
    url: 'https://www.youtube.com/channel/UCQwbaWRKdmmSnIMflMOmVgg',
  },
];

export const navItems = [
  { label: 'Overview', href: '/' },
  { label: 'Secure Solutions', href: '/solutions' },
  { label: 'Insights & Resources', href: '/insights' },
  { label: 'Q&A', href: '/qa' },
  { label: 'Inquiry', href: '#inquiry' },
];