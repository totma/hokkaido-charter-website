'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useTranslation } from '@/i18n/useTranslation';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, language, setLanguage } = useTranslation();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">北</span>
            </div>
            <div className="hidden md:block">
              <div className="text-primary font-bold text-lg">{t.nav.brand_title}</div>
              <div className="text-xs text-gray-600">{t.nav.brand_subtitle}</div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/services" className="text-gray-700 hover:text-primary transition-colors">{t.nav.services}</Link>
            <Link href="/fleet" className="text-gray-700 hover:text-primary transition-colors">{t.nav.fleet}</Link>
            <Link href="/routes" className="text-gray-700 hover:text-primary transition-colors">{t.nav.routes}</Link>
            <Link href="/faq" className="text-gray-700 hover:text-primary transition-colors">{t.nav.faq}</Link>
            <Link href="/about" className="text-gray-700 hover:text-primary transition-colors">{t.nav.about}</Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary transition-colors">{t.nav.contact}</Link>

            <div className="flex items-center space-x-2 border-l pl-4">
              <button onClick={() => setLanguage('zh')} className={`text-sm ${language === 'zh' ? 'text-primary font-bold' : 'text-gray-600 hover:text-primary'}`}>{t.nav.lang_zh}</button>
              <span className="text-gray-400">|</span>
              <button onClick={() => setLanguage('ja')} className={`text-sm ${language === 'ja' ? 'text-primary font-bold' : 'text-gray-600 hover:text-primary'}`}>{t.nav.lang_ja}</button>
              <span className="text-gray-400">|</span>
              <button onClick={() => setLanguage('en')} className={`text-sm ${language === 'en' ? 'text-primary font-bold' : 'text-gray-600 hover:text-primary'}`}>{t.nav.lang_en}</button>
            </div>

            <div className="flex items-center space-x-4 border-l pl-4">
              <a href={`tel:${t.nav.phone}`} className="text-primary font-semibold">{t.nav.phone}</a>
              <Link href="/contact" className="btn-primary">{t.nav.cta}</Link>
            </div>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link href="/services" className="text-gray-700 hover:text-primary transition-colors">{t.nav.services}</Link>
              <Link href="/fleet" className="text-gray-700 hover:text-primary transition-colors">{t.nav.fleet}</Link>
              <Link href="/routes" className="text-gray-700 hover:text-primary transition-colors">{t.nav.routes}</Link>
              <Link href="/faq" className="text-gray-700 hover:text-primary transition-colors">{t.nav.faq}</Link>
              <Link href="/about" className="text-gray-700 hover:text-primary transition-colors">{t.nav.about}</Link>
              <Link href="/contact" className="text-gray-700 hover:text-primary transition-colors">{t.nav.contact}</Link>
              <div className="flex items-center space-x-4 pt-4 border-t">
                <button onClick={() => setLanguage('zh')} className={`text-sm ${language === 'zh' ? 'text-primary font-bold' : 'text-gray-600'}`}>{t.nav.lang_zh}</button>
                <button onClick={() => setLanguage('ja')} className={`text-sm ${language === 'ja' ? 'text-primary font-bold' : 'text-gray-600'}`}>{t.nav.lang_ja}</button>
                <button onClick={() => setLanguage('en')} className={`text-sm ${language === 'en' ? 'text-primary font-bold' : 'text-gray-600'}`}>{t.nav.lang_en}</button>
              </div>
              <a href={`tel:${t.nav.phone}`} className="text-primary font-semibold">{t.nav.phone}</a>
              <Link href="/contact" className="btn-primary text-center">{t.nav.cta}</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
