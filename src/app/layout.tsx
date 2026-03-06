import type { Metadata } from 'next';
import { Inter, Noto_Sans_JP } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import BackToTop from '@/components/BackToTop';
import { LanguageProvider } from '@/i18n/LanguageContext';
import ClientHtmlLang from '@/components/ClientHtmlLang';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const notoSansJP = Noto_Sans_JP({ subsets: ['latin'], variable: '--font-noto' });

export const metadata: Metadata = {
  title: 'Hokkaido Premium Travel',
  description: 'Professional Hokkaido charter services',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh" className={`${inter.variable} ${notoSansJP.variable}`}>
      <body className="font-sans">
        <LanguageProvider>
          <ClientHtmlLang />
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <FloatingCTA />
          <BackToTop />
        </LanguageProvider>
      </body>
    </html>
  );
}
