'use client';

import { useTranslation } from '@/i18n/useTranslation';

export default function RoutesPage() {
  const { t } = useTranslation();

  const routes = [
    {
      name: t.routes.route_sapporo,
      duration: t.routes.route_sapporo_duration,
      season: t.routes.route_sapporo_season,
      highlights: t.routes.route_sapporo_highlights,
      price: t.routes.route_sapporo_price,
      tag: t.routes.tag_classic,
    },
    {
      name: t.routes.route_otaru,
      duration: t.routes.route_otaru_duration,
      season: t.routes.route_otaru_season,
      highlights: t.routes.route_otaru_highlights,
      price: t.routes.route_otaru_price,
      tag: t.routes.tag_popular,
    },
    {
      name: t.routes.route_furano,
      duration: t.routes.route_furano_duration,
      season: t.routes.route_furano_season,
      highlights: t.routes.route_furano_highlights,
      price: t.routes.route_furano_price,
      tag: t.routes.tag_seasonal,
    },
    {
      name: t.routes.route_noboribetsu,
      duration: t.routes.route_noboribetsu_duration,
      season: t.routes.route_noboribetsu_season,
      highlights: t.routes.route_noboribetsu_highlights,
      price: t.routes.route_noboribetsu_price,
      tag: t.routes.tag_onsen,
    },
    {
      name: t.routes.route_niseko,
      duration: t.routes.route_niseko_duration,
      season: t.routes.route_niseko_season,
      highlights: t.routes.route_niseko_highlights,
      price: t.routes.route_niseko_price,
      tag: t.routes.tag_winter,
    },
    {
      name: t.routes.route_asahikawa,
      duration: t.routes.route_asahikawa_duration,
      season: t.routes.route_asahikawa_season,
      highlights: t.routes.route_asahikawa_highlights,
      price: t.routes.route_asahikawa_price,
      tag: t.routes.tag_family,
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-[#1B3A5C] to-[#2C5282] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.routes.page_title}</h1>
          <p className="text-xl opacity-90">{t.routes.page_subtitle}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {routes.map((route, idx) => (
              <div key={idx} className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 h-40 flex items-center justify-center text-white text-2xl font-bold p-4 text-center">
                  {route.name}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-[#C4A35A] text-white px-3 py-1 rounded-full text-sm">
                      {route.tag}
                    </span>
                    <span className="text-gray-600 text-sm">{route.season}</span>
                  </div>
                  <div className="mb-4">
                    <span className="font-semibold">{t.routes.duration}：</span>{route.duration}
                  </div>
                  <div className="mb-4">
                    <span className="font-semibold">{t.routes.highlights}：</span>
                    <p className="text-gray-600 mt-1">{route.highlights}</p>
                  </div>
                  <div className="text-2xl font-bold text-[#1B3A5C] mb-4">{route.price}</div>
                  <button className="w-full bg-[#1B3A5C] text-white py-2 rounded-lg hover:bg-[#2C5282] transition">
                    {t.home.view_details}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#C4A35A] to-[#D4B36A] py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">{t.routes.custom_title}</h2>
          <p className="text-xl mb-8">{t.routes.custom_subtitle}</p>
          <button className="bg-white text-[#1B3A5C] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            {t.routes.custom_button}
          </button>
        </div>
      </section>
    </div>
  );
}
