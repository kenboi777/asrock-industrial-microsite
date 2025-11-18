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
}

export interface SolutionTab {
  id: string;
  title: string;
  description: string;
  highlights: string[];
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

export const certifications: CertificationCard[] = [
  {
    id: 'iec-62443-4-1',
    title: 'IEC 62443-4-1',
    badge: 'Secure Development',
    description: 'Secure Development Lifecycle: international standard for secure design, implementation, testing, and maintenance across the product lifecycle.',
  },
  {
    id: 'iec-62443-4-2',
    title: 'IEC 62443-4-2',
    badge: 'Product Security',
    description: 'Secure Product Standard: verifies products meet IACS security requirements for trusted, resilient, compliant operation.',
  },
  {
    id: 'fido-device-onboard',
    title: 'FIDO Device Onboard',
    badge: 'FDO',
    description: 'Secure and automated onboarding for zero-touch, factory-to-field deployment under FIDO Alliance standards.',
  },
];

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

export const whyChooseFeatures: FeatureCard[] = [
  {
    id: 'trusted-security',
    title: 'Trusted Security by Design',
    description: 'Security is embedded across every stage, from hardware and firmware to deployment and operation. ASRock Industrial integrates IEC 62443 certified development and secure device design to ensure lasting reliability. ',
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

export const solutionTabs: SolutionTab[] = [
  {
    id: 'edge-aiot',
    title: 'Industrial Robust Edge AIoT Platform',
    description: 'High-performance compute, reliable connectivity, and intelligent manageability for mission-critical environments. Real-time processing, predictive maintenance, secure automation.',
    highlights: [
      'Real-time AI inference at the edge',
      'Predictive maintenance capabilities',
      'Secure, automated operations',
    ],
    links: [
      { label: 'Expandable Edge AIoT Platform', url: 'https://www.asrockind.com/expandable-edge-aiot-platform' },
      { label: 'Compact Edge AIoT Platform', url: 'https://www.asrockind.com/compact-edge-aiot-platform' },
      { label: 'Industrial IoT Controller', url: 'https://www.asrockind.com/industrial-iot-controller' },
      { label: 'Edge AI Platform', url: 'https://www.asrockind.com/product-category/150' },
    ],
  },
  {
    id: 'embedded-system',
    title: 'Embedded Computer System',
    description: 'Performance, reliability, compact design for kiosks, signage, automation, transportation, healthcare.',
    highlights: [
      'Compact, fanless designs',
      '24/7 reliable operation',
      'Wide temperature range support',
    ],
    links: [
      { label: 'Fanless Embedded Box PC', url: 'https://www.asrockind.com/fanless-embedded-box-pc' },
      { label: 'Fanned Embedded BOX PC', url: 'https://www.asrockind.com/fanned-embedded-box-pc' },
    ],
  },
  {
    id: 'motherboard',
    title: 'Industrial & Embedded Motherboard',
    description: 'Powerful compute, rich expansion, long-term reliability; 24/7 operation, advanced connectivity, extended lifecycle.',
    highlights: [
      'Extended product lifecycle',
      'Rich I/O and expansion options',
      'Industrial-grade components',
    ],
    links: [
      { label: 'Industrial Motherboards', url: 'https://www.asrockind.com/industrial-motherboards' },
      { label: 'Single Board Computer', url: 'https://www.asrockind.com/single-board-computer' },
      { label: 'Computer on Module', url: 'https://www.asrockind.com/computer-on-module' },
      { label: 'Embedded Peripherals', url: 'https://www.asrockind.com/embedded-peripherals' },
    ],
  },
  {
    id: 'software-services',
    title: 'Software & Services',
    description: 'Remote monitoring, secure connectivity, streamlined deployment; visibility, efficiency, and trust across edge operations.',
    highlights: [
      'Zero-touch provisioning',
      'Remote device management',
      'Real-time security monitoring',
    ],
    links: [
      { label: 'Ai FDO', url: 'https://www.asrockind.com/Ai%20FDO' },
      { label: 'AiSMA', url: '#' },
      { label: 'AiSafeguard', url: '#' },
    ],
  },
];

export const insightArticles: InsightArticle[] = [
  {
    id: '1',
    title: 'ASRock Industrial Launches AiUAC to Power Software-Defined, Open Industrial Automation',
    date: '2024-03-15',
    category: 'Product Launch',
    excerpt: 'Introducing next-generation automation controller with enhanced security features and open architecture support.',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
    link: '#',
  },
  {
    id: '2',
    title: 'Understanding IEC 62443: The Foundation of Industrial Cybersecurity',
    date: '2024-02-28',
    category: 'Security Standards',
    excerpt: 'Deep dive into the international standard that defines security requirements for industrial automation and control systems.',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg',
    link: '#',
  },
  {
    id: '3',
    title: 'Edge AI in Manufacturing: Transforming Production Lines',
    date: '2024-02-10',
    category: 'Edge Computing',
    excerpt: 'How edge AI platforms enable real-time decision making and predictive maintenance in smart factories.',
    image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg',
    link: '#',
  },
  {
    id: '4',
    title: 'Zero Trust Architecture for Industrial Networks',
    date: '2024-01-22',
    category: 'Network Security',
    excerpt: 'Implementing Zero Trust principles to protect critical infrastructure from evolving cyber threats.',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg',
    link: '#',
  },
  {
    id: '5',
    title: 'FIDO Device Onboard: Simplifying Secure IoT Deployment',
    date: '2024-01-08',
    category: 'IoT Security',
    excerpt: 'How FDO protocol enables automated, secure provisioning at scale for industrial IoT devices.',
    image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg',
    link: '#',
  },
  {
    id: '6',
    title: 'Cyber Resilience Act: What It Means for Industrial OEMs',
    date: '2023-12-15',
    category: 'Compliance',
    excerpt: 'Navigating the EU Cyber Resilience Act requirements and preparing for mandatory security standards.',
    image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg',
    link: '#',
  },
  {
    id: '7',
    title: 'Hardware-Rooted Trust: Building Secure Industrial Systems',
    date: '2023-11-30',
    category: 'Hardware Security',
    excerpt: 'The critical role of TPM, secure boot, and cryptographic processors in protecting industrial systems.',
    image: 'https://images.pexels.com/photos/2582928/pexels-photo-2582928.jpeg',
    link: '#',
  },
  {
    id: '8',
    title: 'Remote Management Best Practices for Edge Devices',
    date: '2023-11-10',
    category: 'Device Management',
    excerpt: 'Secure strategies for monitoring and maintaining distributed edge computing infrastructure.',
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg',
    link: '#',
  },
  {
    id: '9',
    title: 'NIS2 Directive: Strengthening Cybersecurity Across Europe',
    date: '2023-10-25',
    category: 'Compliance',
    excerpt: 'Understanding the Network and Information Security Directive 2 and its impact on industrial sectors.',
    image: 'https://images.pexels.com/photos/5380590/pexels-photo-5380590.jpeg',
    link: '#',
  },
  {
    id: '10',
    title: 'AI-Powered Predictive Maintenance in Smart Manufacturing',
    date: '2023-10-08',
    category: 'Edge Computing',
    excerpt: 'Leveraging machine learning at the edge to predict equipment failures before they occur.',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
    link: '#',
  },
  {
    id: '11',
    title: 'Secure Boot and Firmware Protection Strategies',
    date: '2023-09-20',
    category: 'Hardware Security',
    excerpt: 'Essential techniques for ensuring firmware integrity and preventing unauthorized modifications.',
    image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg',
    link: '#',
  },
  {
    id: '12',
    title: 'Building Resilient OT Networks in Critical Infrastructure',
    date: '2023-09-05',
    category: 'Network Security',
    excerpt: 'Design principles for operational technology networks that withstand cyber attacks and maintain uptime.',
    image: 'https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg',
    link: '#',
  },
];

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
      'Industrial cybersecurity protects the systems that keep industries running—from manufacturing lines to smart infrastructure. It ensures operational continuity, data integrity, and trust in every connected process, forming the foundation for sustainable digital growth.',
  },
  {
    id: 'standards',
    question: 'What is the international standard for Industrial Cybersecurity?',
    answer:
      'The international frameworks that guide industrial cybersecurity include:<br/><br/>' +
      '• IEC 62443 – A globally recognized standard developed by ISA and IEC for securing industrial automation and control systems (IACS) through lifecycle-based security design and certification. ' +
      '(Source: <a href="https://www.isa.org/isa62443" target="_blank" rel="noopener noreferrer">ISA/IEC 62443 Series of Standards</a>)<br/><br/>' +
      '• NIST SP 800-82 – A U.S. National Institute of Standards and Technology guideline providing practical recommendations for protecting industrial control systems against cyber threats. ' +
      '(Source: <a href="https://csrc.nist.gov/publications/detail/sp/800-82/rev-2/final" target="_blank" rel="noopener noreferrer">NIST SP 800-82 Guide to ICS/OT Security</a>)<br/><br/>' +
      '• ISO/IEC 27001 – An international standard for information security management systems (ISMS), ensuring consistent governance, risk assessment, and data protection practices across organizations. ' +
      '(Source: <a href="https://www.iso.org/standard/54534.html" target="_blank" rel="noopener noreferrer">ISO/IEC 27001</a>)',
  },
  {
    id: 'requirements',
    question: 'What international requirements and frameworks must industrial cybersecurity follow?',
    answer:
      'Key international requirements and frameworks include:<br/><br/>' +
      '• Cyber Resilience Act (CRA) – Requires products with digital elements to implement secure-by-design principles and maintain cybersecurity risk management throughout the entire lifecycle. ' +
      '(Source: <a href="https://digital-strategy.ec.europa.eu/en/policies/cyber-resilience-act" target="_blank" rel="noopener noreferrer">Cyber Resilience Act</a>)<br/><br/>' +
      '• NIS2 – Expands cybersecurity obligations for operators of essential and important entities, including risk management, incident reporting, and governance requirements. ' +
      '(Source: <a href="https://digital-strategy.ec.europa.eu/en/policies/nis2-directive" target="_blank" rel="noopener noreferrer">NIS2 Directive</a>)<br/><br/>' +
      '• NIST – Provides structured frameworks such as the NIST Cybersecurity Framework and SP 800-82 to strengthen governance, risk management, and incident response for industrial environments. ' +
      '(Source: <a href="https://www.nist.gov/cyberframework" target="_blank" rel="noopener noreferrer">NIST Cybersecurity Framework</a>)',
  },
  {
    id: 'hardware-matters',
    question: 'Why hardware security matters?',
    answer:
      'In the OT domain, software protection alone cannot ensure complete security. Hardware-based cybersecurity establishes the root of trust, enabling secure boot, data integrity, and resistance against tampering or firmware attacks. When combined, hardware and software form a multi-layered defense architecture, ensuring resilience from the foundational layer to the application level. ' +
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
      '<strong>Secure Software Solutions</strong> – Extending protection beyond hardware with a suite of secure software technologies:<br/>' +
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
  { label: 'Overview', href: '#overview' },
  { label: 'Secure Solutions', href: '#solutions' },
  { label: 'Insights & Resources', href: '#insights' },
  { label: 'Q&A', href: '#qa' },
  { label: 'Inquiry', href: '#inquiry' },
];
