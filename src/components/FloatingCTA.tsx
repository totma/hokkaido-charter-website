'use client';

import Link from 'next/link';
import { useTranslation } from '@/i18n/useTranslation';

export default function FloatingCTA() {
  const { t } = useTranslation();
  
  return (
    <div className="fixed bottom-0 left-0 right-0 lg:hidden bg-white border-t shadow-lg z-40">
      <div className="flex items-center justify-between px-4 py-3">
        <a href={`tel:${t.nav.phone}`} className="flex items-center space-x-2 text-primary">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span className="font-semibold">{t.faq.phone_btn}</span>
        </a>
        <Link href="/contact" className="btn-primary">
          {t.nav.cta}
        </Link>
      </div>
    </div>
  );
}
