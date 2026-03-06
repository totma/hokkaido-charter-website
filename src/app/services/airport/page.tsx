'use client';

import Link from 'next/link';
import { useTranslation } from '@/i18n/useTranslation';

export default function AirportPage() {
  const { t } = useTranslation();

  return (
    <div>
      <section className="relative py-20 bg-gradient-to-br from-primary to-primary-light text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-6xl mb-4">✈️</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.airport.page_title}</h1>
            <p className="text-xl text-gray-200">{t.airport.page_subtitle}</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">{t.airport.service_features_title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.airport.service_features.map((item, idx) => (
              <div key={idx} className="card text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">{t.airport.airports_title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: t.airport.chitose_title, process: t.airport.chitose_process, destinations: t.airport.chitose_destinations },
              { title: t.airport.asahikawa_title, process: t.airport.asahikawa_process, destinations: t.airport.asahikawa_destinations },
            ].map((airport, index) => (
              <div key={index} className="card">
                <h3 className="text-2xl font-bold text-primary mb-4">{airport.title}</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>{t.airport.pickup_process_title}</strong></p>
                  <ol className="list-decimal list-inside space-y-2 ml-4">
                    {airport.process.map((item, idx) => <li key={idx}>{item}</li>)}
                  </ol>
                  <p className="mt-4"><strong>{t.airport.destinations_title}</strong></p>
                  <ul className="list-disc list-inside ml-4">
                    {airport.destinations.map((item, idx) => <li key={idx}>{item}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">{t.airport.pricing_title}</h2>
          <p className="section-subtitle text-center">{t.airport.pricing_subtitle}</p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-6 py-4 text-left">{t.airport.table_route}</th>
                  <th className="px-6 py-4 text-center whitespace-pre-line">{t.airport.table_sedan}</th>
                  <th className="px-6 py-4 text-center whitespace-pre-line">{t.airport.table_mpv}</th>
                  <th className="px-6 py-4 text-center whitespace-pre-line">{t.airport.table_van}</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {t.airport.pricing_rows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-primary">{row.route}</td>
                    <td className="px-6 py-4 text-center">{row.sedan}</td>
                    <td className="px-6 py-4 text-center">{row.mpv}</td>
                    <td className="px-6 py-4 text-center">{row.van}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h3 className="font-bold text-primary mb-3">{t.airport.price_notes_title}</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              {t.airport.price_notes.map((note, idx) => <li key={idx}>• {note}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">{t.airport.faq_title}</h2>
          <div className="space-y-4">
            {t.airport.faqs.map((faq, idx) => (
              <div key={idx} className="card">
                <h3 className="font-bold text-primary mb-2">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">{t.airport.cta_title}</h2>
          <p className="text-xl mb-8 text-gray-200">{t.airport.cta_subtitle}</p>
          <Link href="/contact" className="btn-accent">{t.airport.cta_button}</Link>
        </div>
      </section>
    </div>
  );
}
