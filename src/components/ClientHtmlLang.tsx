'use client';

import { useEffect } from 'react';
import { useTranslation } from '@/i18n/useTranslation';

export default function ClientHtmlLang() {
  const { language } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return null;
}
