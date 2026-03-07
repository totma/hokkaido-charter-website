'use client';

import Link from 'next/link';
import { useTranslation } from '@/i18n/useTranslation';

export default function Footer() {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t.footer.company_name}</h3>
            <p className="text-gray-300 text-sm mb-4">
              {t.footer.company_slogan}
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <p>{t.footer.address}</p>
              <p>{t.footer.address_detail}</p>
              <p>{t.footer.phone}</p>
              <p>{t.footer.email}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.footer.quick_links}</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/services" className="hover:text-accent transition-colors">{t.footer.link_services}</Link></li>
              <li><Link href="/fleet" className="hover:text-accent transition-colors">{t.footer.link_fleet}</Link></li>
              <li><Link href="/routes" className="hover:text-accent transition-colors">{t.footer.link_routes}</Link></li>
              <li><Link href="/faq" className="hover:text-accent transition-colors">{t.footer.link_faq}</Link></li>
              <li><Link href="/about" className="hover:text-accent transition-colors">{t.footer.link_about}</Link></li>
              <li><Link href="/reviews" className="hover:text-accent transition-colors">{t.footer.link_reviews}</Link></li>
              <li><Link href="/blog" className="hover:text-accent transition-colors">{t.footer.link_blog}</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.footer.main_services}</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/services/airport" className="hover:text-accent transition-colors">{t.footer.service_airport}</Link></li>
              <li><Link href="/services/sightseeing" className="hover:text-accent transition-colors">{t.footer.service_sightseeing}</Link></li>
              <li><Link href="/services/vip" className="hover:text-accent transition-colors">{t.footer.service_vip}</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">{t.footer.service_custom}</Link></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.footer.contact_title}</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <p>{t.footer.contact_line}</p>
              <p>{t.footer.contact_whatsapp}</p>
              <p>{t.footer.contact_wechat}</p>
            </div>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <span className="text-sm">{t.footer.social_facebook}</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <span className="text-sm">{t.footer.social_instagram}</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <span className="text-sm">{t.footer.social_x}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-gray-300">
          <p className="mb-2">{t.footer.license}</p>
          <p>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
