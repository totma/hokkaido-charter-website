'use client';

import { useEffect } from 'react';
import { useTranslation } from '@/i18n/useTranslation';

export default function ClientHtmlLang() {
  const { language, t } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = t.meta.title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', t.meta.description);
    }
  }, [language, t]);

  return null;
}
