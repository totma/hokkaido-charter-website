'use client';

import { use } from 'react';
import { useTranslation } from '@/i18n/useTranslation';

export default function RouteDetailClient({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const { t } = useTranslation();
  const routeData = t.route_detail.routes as Record<string, any>;
  const route = routeData[slug] || routeData['sapporo-city'];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-[#1B3A5C] to-[#2C5282] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{route.name}</h1>
          <div className="flex flex-wrap gap-4 text-lg">
            <span>⏱️ {route.duration}</span>
            <span>📅 {route.season}</span>
            <span className="text-[#C4A35A] font-bold">{route.price}</span>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">{t.route_detail.itinerary_title}</h2>
          <div className="max-w-3xl mx-auto">
            {route.itinerary.map((item: any, idx: number) => (
              <div key={idx} className="flex gap-4 mb-6">
                <div className="flex-shrink-0 w-20 text-[#1B3A5C] font-bold text-lg">{item.time}</div>
                <div className="flex-grow">
                  <h3 className="font-bold text-xl mb-2">{item.location}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">{t.route_detail.map_title}</h2>
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-200 to-blue-400 h-96 rounded-lg flex items-center justify-center text-white text-2xl font-bold">
            {t.route_detail.map_placeholder}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">{t.route_detail.notes_title}</h2>
          <div className="max-w-3xl mx-auto bg-yellow-50 border-l-4 border-yellow-400 p-6">
            <ul className="space-y-2">
              {route.notes.map((note: string, idx: number) => (
                <li key={idx} className="flex items-start gap-2"><span className="text-yellow-600 mt-1">•</span><span>{note}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#1B3A5C] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{t.route_detail.cta_title}</h2>
          <p className="text-xl mb-8 opacity-90">{t.route_detail.cta_subtitle}</p>
          <button className="bg-[#C4A35A] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#D4B36A] transition">{t.route_detail.book_now}</button>
        </div>
      </section>
    </div>
  );
}
