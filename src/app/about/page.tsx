'use client';

import Link from 'next/link';
import { useTranslation } from '@/i18n/useTranslation';

export default function AboutPage() {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#1B3A5C] to-[#2C5282] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.about.page_title}</h1>
          <p className="text-xl opacity-90">{t.about.page_subtitle}</p>
        </div>
      </section>

      {/* Company Intro */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">{t.about.company_name}</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {t.about.intro_p1}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t.about.intro_p2}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">{t.about.mission_title}</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow text-center">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-3 text-[#1B3A5C]">{t.about.mission_safe}</h3>
              <p className="text-gray-600">
                {t.about.mission_safe_desc}
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow text-center">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-bold mb-3 text-[#1B3A5C]">{t.about.mission_secure}</h3>
              <p className="text-gray-600">
                {t.about.mission_secure_desc}
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow text-center">
              <div className="text-5xl mb-4">😊</div>
              <h3 className="text-xl font-bold mb-3 text-[#1B3A5C]">{t.about.mission_comfort}</h3>
              <p className="text-gray-600">
                {t.about.mission_comfort_desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">{t.about.info_title}</h2>
          <div className="max-w-3xl mx-auto bg-white border rounded-lg p-8 shadow">
            <div className="space-y-4">
              <div className="flex border-b pb-4">
                <span className="font-semibold w-40">{t.about.info_name}</span>
                <span dangerouslySetInnerHTML={{ __html: t.about.info_name_value }} />
              </div>
              <div className="flex border-b pb-4">
                <span className="font-semibold w-40">{t.about.info_established}</span>
                <span>{t.about.info_established_value}</span>
              </div>
              <div className="flex border-b pb-4">
                <span className="font-semibold w-40">{t.about.info_address}</span>
                <span dangerouslySetInnerHTML={{ __html: t.about.info_address_value }} />
              </div>
              <div className="flex border-b pb-4">
                <span className="font-semibold w-40">{t.about.info_license}</span>
                <span dangerouslySetInnerHTML={{ __html: t.about.info_license_value }} />
              </div>
              <div className="flex border-b pb-4">
                <span className="font-semibold w-40">{t.about.info_insurance}</span>
                <span dangerouslySetInnerHTML={{ __html: t.about.info_insurance_value }} />
              </div>
              <div className="flex border-b pb-4">
                <span className="font-semibold w-40">{t.about.info_fleet}</span>
                <span>{t.about.info_fleet_value}</span>
              </div>
              <div className="flex">
                <span className="font-semibold w-40">{t.about.info_area}</span>
                <span>{t.about.info_area_value}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">{t.about.team_title}</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-3 text-[#1B3A5C]">{t.about.team_driver_title}</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• {t.about.team_driver_1}</li>
                  <li>• {t.about.team_driver_2}</li>
                  <li>• {t.about.team_driver_3}</li>
                  <li>• {t.about.team_driver_4}</li>
                  <li>• {t.about.team_driver_5}</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-3 text-[#1B3A5C]">{t.about.team_cs_title}</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• {t.about.team_cs_1}</li>
                  <li>• {t.about.team_cs_2}</li>
                  <li>• {t.about.team_cs_3}</li>
                  <li>• {t.about.team_cs_4}</li>
                  <li>• {t.about.team_cs_5}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">{t.about.partners_title}</h2>
          <div className="max-w-5xl mx-auto">
            <p className="text-center text-gray-600 mb-8">
              {t.about.partners_desc}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="bg-gray-100 h-24 rounded-lg flex items-center justify-center text-gray-400 font-semibold">
                  Partner {i}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1B3A5C] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{t.about.cta_title}</h2>
          <p className="text-xl mb-8 opacity-90">{t.about.cta_subtitle}</p>
          <Link href="/contact" className="bg-[#C4A35A] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#D4B36A] transition">
            {t.about.cta_button}
          </Link>
        </div>
      </section>
    </div>
  );
}
