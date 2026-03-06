'use client';

import Link from 'next/link';
import { useTranslation } from '@/i18n/useTranslation';

export default function SightseeingPage() {
  const { t } = useTranslation();

  return (
    <div>
      <section className="relative py-20 bg-gradient-to-br from-primary to-primary-light text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-4">🗻</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.sightseeing.page_title}</h1>
          <p className="text-xl text-gray-200">{t.sightseeing.page_subtitle}</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">{t.sightseeing.service_types_title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.sightseeing.service_types.map((item, idx) => (
              <div key={idx} className="card text-center">
                <h3 className="text-2xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-2">{item.duration}</p>
                <p className="text-3xl font-bold text-accent mb-4">{item.price}</p>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">{t.sightseeing.seasonal_title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.sightseeing.seasonal_routes.map((season, idx) => (
              <div key={idx} className="card">
                <div className="flex items-center mb-4">
                  <span className="text-5xl mr-4">{season.icon}</span>
                  <h3 className="text-2xl font-bold text-primary">{season.season}</h3>
                </div>
                <p className="text-accent font-semibold mb-3">{season.highlights}</p>
                <h4 className="font-semibold text-primary mb-2">{t.sightseeing.recommended_routes_label}</h4>
                <ul className="space-y-1">
                  {season.routes.map((route, ridx) => (
                    <li key={ridx} className="text-gray-700 flex items-center"><span className="text-accent mr-2">•</span>{route}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">{t.sightseeing.popular_title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.sightseeing.popular_routes.map((route, idx) => (
              <div key={idx} className="card">
                <h3 className="text-xl font-bold text-primary mb-2">{route.name}</h3>
                <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                  <span>⏱️ {route.time}</span>
                  <span className="text-accent font-bold text-lg">{route.price}</span>
                </div>
                <h4 className="font-semibold text-sm text-primary mb-2">{t.sightseeing.popular_spots_label}</h4>
                <ul className="space-y-1 mb-4">
                  {route.spots.map((spot, sidx) => <li key={sidx} className="text-sm text-gray-700">• {spot}</li>)}
                </ul>
                <Link href="/routes" className="btn-outline w-full text-center block">{t.sightseeing.view_details}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">{t.sightseeing.features_title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.sightseeing.features.map((feature, idx) => (
              <div key={idx} className="card text-center">
                <div className="text-5xl mb-3">{feature.icon}</div>
                <h3 className="text-lg font-bold text-primary mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">{t.sightseeing.pricing_title}</h2>
          <div className="card">
            <h3 className="font-bold text-primary mb-4">{t.sightseeing.includes_title}</h3>
            <ul className="space-y-2 text-gray-700 mb-6">
              {t.sightseeing.includes.map((item, idx) => <li key={idx}>✓ {item}</li>)}
            </ul>
            <h3 className="font-bold text-primary mb-4">{t.sightseeing.excludes_title}</h3>
            <ul className="space-y-2 text-gray-700 mb-6">
              {t.sightseeing.excludes.map((item, idx) => <li key={idx}>✗ {item}</li>)}
            </ul>
            <h3 className="font-bold text-primary mb-4">{t.sightseeing.extras_title}</h3>
            <ul className="space-y-2 text-gray-700">
              {t.sightseeing.extras.map((item, idx) => <li key={idx}>• {item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">{t.sightseeing.cta_title}</h2>
          <p className="text-xl mb-8 text-gray-200">{t.sightseeing.cta_subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-accent">{t.sightseeing.cta_contact}</Link>
            <Link href="/routes" className="bg-white hover:bg-gray-100 text-primary font-semibold py-3 px-6 rounded-lg transition-colors">{t.sightseeing.cta_routes}</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
