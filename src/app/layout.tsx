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
  title: '北海道プレミアムトラベル - 安心・安全・快適な北海道包车服务',
  description: '专业的北海道包车服务，提供机场接送、观光包车、商务VIP等服务。多语言司机，透明报价，合法资质。',
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
