import './globals.css';
import type { Metadata } from 'next';
import { Inter, IBM_Plex_Sans } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const ibmPlexSans = IBM_Plex_Sans({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-ibm-plex',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Industrial Cybersecurity, Built for Trust | ASRock Industrial',
  description: 'In today\'s connected industrial landscape, cybersecurity has become the foundation of trust. ASRock Industrial delivers secure, compliant, and resilient systems for critical environments.',
  keywords: 'industrial cybersecurity, IEC 62443, secure industrial systems, edge computing, IoT security, ASRock Industrial',
  authors: [{ name: 'ASRock Industrial' }],
  openGraph: {
    title: 'Industrial Cybersecurity, Built for Trust | ASRock Industrial',
    description: 'Secure industrial solutions with hardware-rooted trust, lifecycle security, and global compliance standards.',
    url: 'https://www.asrockind.com',
    siteName: 'ASRock Industrial',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Industrial Cybersecurity, Built for Trust | ASRock Industrial',
    description: 'Secure industrial solutions with hardware-rooted trust, lifecycle security, and global compliance standards.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${ibmPlexSans.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
