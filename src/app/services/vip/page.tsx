'use client';

import Link from 'next/link';
import { useTranslation } from '@/i18n/useTranslation';

export default function VIPPage() {
  const { t } = useTranslation();

  return (
    <div>
      <section className="relative py-20 bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-4">💼</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.vip.page_title}</h1>
          <p className="text-xl text-gray-200">{t.vip.page_subtitle}</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">{t.vip.features_title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.vip.features.map((feature, idx) => (
              <div key={idx} className="card text-center">
                <div className="text-5xl mb-3">{feature.icon}</div>
                <h3 className="text-lg font-bold text-primary mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">{t.vip.service_types_title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.vip.service_types.map((service, idx) => (
              <div key={idx} className="card">
                <h3 className="text-2xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <h4 className="font-semibold text-primary mb-2">{t.vip.service_contents_label}</h4>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, fidx) => <li key={fidx} className="text-gray-700 flex items-center"><span className="text-accent mr-2">✓</span>{feature}</li>)}
                </ul>
                <p className="text-2xl font-bold text-accent">{service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">{t.vip.vehicles_title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.vip.vehicles.map((vehicle, idx) => (
              <div key={idx} className="card">
                <div className="h-40 bg-gradient-to-br from-primary-dark to-primary rounded-lg mb-4 flex items-center justify-center"><span className="text-6xl">🚙</span></div>
                <h3 className="text-xl font-bold text-primary mb-2">{vehicle.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{vehicle.model}</p>
                <p className="text-sm text-gray-700 mb-3">👥 {vehicle.seats}</p>
                <h4 className="font-semibold text-sm text-primary mb-2">{t.vip.vehicle_config_label}</h4>
                <ul className="space-y-1 mb-4">
                  {vehicle.features.map((feature, fidx) => <li key={fidx} className="text-sm text-gray-700">• {feature}</li>)}
                </ul>
                <p className="text-xl font-bold text-accent">{vehicle.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">{t.vip.case_studies_title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.vip.case_studies.map((caseStudy, idx) => (
              <div key={idx} className="card">
                <h3 className="text-xl font-bold text-primary mb-3">{caseStudy.title}</h3>
                <div className="space-y-2 text-sm text-gray-700 mb-4">
                  <p><strong>{t.vip.client_label}</strong> {caseStudy.client}</p>
                  <p><strong>{t.vip.service_label}</strong> {caseStudy.service}</p>
                  <p><strong>{t.vip.vehicles_label}</strong> {caseStudy.vehicles}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg"><p className="text-gray-700 italic">"{caseStudy.feedback}"</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">{t.vip.why_choose_title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.vip.why_choose.map((reason, idx) => (
              <div key={idx} className="card text-center">
                <div className="text-5xl mb-4">{reason.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">{t.vip.cta_title}</h2>
          <p className="text-xl mb-8 text-gray-200">{t.vip.cta_subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-accent">{t.vip.cta_contact}</Link>
            <a href={`tel:${t.vip.contact_phone}`} className="bg-white hover:bg-gray-100 text-primary font-semibold py-3 px-6 rounded-lg transition-colors">{t.vip.cta_call}</a>
          </div>
        </div>
      </section>
    </div>
  );
}
