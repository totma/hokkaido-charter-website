'use client';

import Link from 'next/link';
import { useTranslation } from '@/i18n/useTranslation';

export default function HomePage() {
  const { t } = useTranslation();
  
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-primary-dark"></div>
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            {t.home.hero_title}
          </h1>
          <p className="text-2xl md:text-3xl mb-4 text-accent">
            {t.home.hero_subtitle}
          </p>
          <p className="text-xl mb-12 text-gray-200">
            {t.home.hero_description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-accent hover:bg-accent-dark text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors">
              {t.home.cta_quote}
            </Link>
            <Link href="/fleet" className="bg-white hover:bg-gray-100 text-primary font-bold py-4 px-8 rounded-lg text-lg transition-colors">
              {t.home.cta_fleet}
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Quick Service Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">{t.home.services_title}</h2>
          <p className="section-subtitle text-center">{t.home.services_subtitle}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: t.home.service_airport, desc: t.home.service_airport_desc, icon: '✈️', link: '/services/airport' },
              { title: t.home.service_city, desc: t.home.service_city_desc, icon: '🚗', link: '/services/sightseeing' },
              { title: t.home.service_multi, desc: t.home.service_multi_desc, icon: '📅', link: '/services/sightseeing' },
              { title: t.home.service_ski, desc: t.home.service_ski_desc, icon: '⛷️', link: '/services/sightseeing' },
              { title: t.home.service_vip, desc: t.home.service_vip_desc, icon: '💼', link: '/services/vip' },
              { title: t.home.service_photo, desc: t.home.service_photo_desc, icon: '📸', link: '/services/sightseeing' },
            ].map((service, idx) => (
              <Link key={idx} href={service.link} className="card group hover:scale-105 transition-transform">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
                <div className="mt-4 text-accent font-semibold flex items-center">
                  {t.home.learn_more}
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">{t.home.why_title}</h2>
          <p className="section-subtitle text-center">{t.home.why_subtitle}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: t.home.why_multilang, desc: t.home.why_multilang_desc, icon: '🗣️' },
              { title: t.home.why_local, desc: t.home.why_local_desc, icon: '🏔️' },
              { title: t.home.why_transparent, desc: t.home.why_transparent_desc, icon: '💰' },
              { title: t.home.why_legal, desc: t.home.why_legal_desc, icon: '✅' },
              { title: t.home.why_custom, desc: t.home.why_custom_desc, icon: '🗺️' },
              { title: t.home.why_fast, desc: t.home.why_fast_desc, icon: '⚡' },
            ].map((feature, idx) => (
              <div key={idx} className="text-center">
                <div className="text-6xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">{t.home.fleet_title}</h2>
          <p className="section-subtitle text-center">{t.home.fleet_subtitle}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: t.home.vehicle_sedan, seats: t.home.vehicle_sedan_seats, luggage: t.home.vehicle_sedan_luggage, price: t.home.vehicle_sedan_price },
              { name: t.home.vehicle_mpv, seats: t.home.vehicle_mpv_seats, luggage: t.home.vehicle_mpv_luggage, price: t.home.vehicle_mpv_price },
              { name: t.home.vehicle_van, seats: t.home.vehicle_van_seats, luggage: t.home.vehicle_van_luggage, price: t.home.vehicle_van_price },
              { name: t.home.vehicle_bus, seats: t.home.vehicle_bus_seats, luggage: t.home.vehicle_bus_luggage, price: t.home.vehicle_bus_price },
            ].map((vehicle, idx) => (
              <div key={idx} className="card">
                <div className="h-40 bg-gradient-to-br from-primary to-primary-light rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-6xl">🚙</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{vehicle.name}</h3>
                <div className="space-y-1 text-sm text-gray-600 mb-4">
                  <p>👥 {vehicle.seats}</p>
                  <p>🧳 {vehicle.luggage}</p>
                </div>
                <p className="text-accent font-bold text-lg mb-4">{vehicle.price}</p>
                <Link href="/fleet" className="btn-outline w-full text-center block">
                  {t.home.view_details}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">{t.home.routes_title}</h2>
          <p className="section-subtitle text-center">{t.home.routes_subtitle}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: t.home.route_sapporo, duration: t.home.route_sapporo_duration, season: t.home.route_sapporo_season, price: t.home.route_sapporo_price },
              { name: t.home.route_furano, duration: t.home.route_furano_duration, season: t.home.route_furano_season, price: t.home.route_furano_price },
              { name: t.home.route_noboribetsu, duration: t.home.route_noboribetsu_duration, season: t.home.route_noboribetsu_season, price: t.home.route_noboribetsu_price },
              { name: t.home.route_hakodate, duration: t.home.route_hakodate_duration, season: t.home.route_hakodate_season, price: t.home.route_hakodate_price },
              { name: t.home.route_niseko, duration: t.home.route_niseko_duration, season: t.home.route_niseko_season, price: t.home.route_niseko_price },
              { name: t.home.route_east, duration: t.home.route_east_duration, season: t.home.route_east_season, price: t.home.route_east_price },
            ].map((route, idx) => (
              <Link key={idx} href="/routes" className="card group hover:scale-105 transition-transform">
                <div className="h-48 bg-gradient-to-br from-accent-light to-accent rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-7xl">🗻</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">{route.name}</h3>
                <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                  <span>⏱️ {route.duration}</span>
                  <span>🌸 {route.season}</span>
                </div>
                <p className="text-accent font-bold text-lg">{route.price}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/routes" className="btn-primary">
              {t.home.view_all_routes}
            </Link>
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{t.home.booking_title}</h2>
          <p className="text-xl text-center mb-12 text-gray-300">{t.home.booking_subtitle}</p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: t.home.booking_step1, title: t.home.booking_step1_title, desc: t.home.booking_step1_desc },
              { step: t.home.booking_step2, title: t.home.booking_step2_title, desc: t.home.booking_step2_desc },
              { step: t.home.booking_step3, title: t.home.booking_step3_title, desc: t.home.booking_step3_desc },
              { step: t.home.booking_step4, title: t.home.booking_step4_title, desc: t.home.booking_step4_desc },
            ].map((process, idx) => (
              <div key={idx} className="text-center">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{process.title}</h3>
                <p className="text-gray-300">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">{t.home.reviews_title}</h2>
          <p className="section-subtitle text-center">{t.home.reviews_subtitle}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: t.home.reviewer_zhang, from: t.home.reviewer_zhang_from, rating: 5, comment: t.home.reviewer_zhang_comment },
              { name: t.home.reviewer_li, from: t.home.reviewer_li_from, rating: 5, comment: t.home.reviewer_li_comment },
              { name: t.home.reviewer_wang, from: t.home.reviewer_wang_from, rating: 5, comment: t.home.reviewer_wang_comment },
            ].map((review, idx) => (
              <div key={idx} className="card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-3">
                    {review.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">{review.name}</h4>
                    <p className="text-sm text-gray-600">{review.from}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-accent text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700">{review.comment}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/reviews" className="btn-outline">
              {t.home.view_more_reviews}
            </Link>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">{t.home.partners_title}</h2>
          <p className="section-subtitle text-center">{t.home.partners_subtitle}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[...Array(6)].map((_, idx) => (
              <div key={idx} className="flex items-center justify-center h-24 bg-gray-100 rounded-lg">
                <span className="text-gray-400 font-bold">LOGO</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">{t.home.final_cta_title}</h2>
          <p className="text-xl mb-8 text-gray-200">{t.home.final_cta_subtitle}</p>
          <Link href="/contact" className="bg-accent hover:bg-accent-dark text-white font-bold py-4 px-12 rounded-lg text-lg inline-block transition-colors">
            {t.home.final_cta_button}
          </Link>
        </div>
      </section>
    </div>
  );
}
