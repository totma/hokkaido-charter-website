'use client';

import type { Metadata } from 'next';
import Link from 'next/link';
import { useTranslation } from '@/i18n/useTranslation';

export default function ServicesPage() {
  const { t } = useTranslation();

  const services = [
    {
      id: 'airport',
      title: t.services.airport_title,
      icon: '✈️',
      description: t.services.airport_desc,
      features: [t.services.feature_airport_24h, t.services.feature_airport_wait, t.services.feature_airport_childseat, t.services.feature_airport_luggage],
      suitable: t.services.suitable_for,
      priceFrom: '¥8,000',
      vehicles: ['豪华轿车', '商务MPV', '豪华面包车'],
      link: '/services/airport',
    },
    {
      id: 'sightseeing',
      title: t.services.sightseeing_title,
      icon: '🗻',
      description: t.services.sightseeing_desc,
      features: [t.services.feature_sightseeing_flex, t.services.feature_sightseeing_guide, t.services.feature_sightseeing_spots, t.services.feature_sightseeing_food],
      suitable: t.services.suitable_for,
      priceFrom: '¥25,000',
      vehicles: ['商务MPV', '豪华面包车', '中型巴士'],
      link: '/services/sightseeing',
    },
    {
      id: 'vip',
      title: t.services.vip_title,
      icon: '💼',
      description: t.services.vip_desc,
      features: ['专属司机', '商务车型', '保密协议', '灵活调度'],
      suitable: t.services.suitable_for,
      priceFrom: '¥35,000',
      vehicles: ['豪华轿车', '商务MPV'],
      link: '/services/vip',
    },
    {
      id: 'ski',
      title: t.services.ski_title,
      icon: '⛷️',
      description: t.services.ski_desc,
      features: ['雪具运输', '早晚接送', '多日套餐', '酒店直达'],
      suitable: t.services.suitable_for,
      priceFrom: '¥30,000',
      vehicles: ['商务MPV', '豪华面包车'],
      link: '/services/sightseeing',
    },
    {
      id: 'custom',
      title: t.services.custom_title,
      icon: '🎯',
      description: t.services.custom_desc,
      features: ['完全定制', '专业规划', '弹性时间', '特殊需求'],
      suitable: t.services.suitable_for,
      priceFrom: t.services.price_from,
      vehicles: ['全车型可选'],
      link: '/contact',
    },
    {
      id: 'photo',
      title: t.services.photo_title,
      icon: '📸',
      description: t.services.photo_desc,
      features: ['最佳拍摄点', '灵活停留', '日出日落', '季节推荐'],
      suitable: t.services.suitable_for,
      priceFrom: '¥28,000',
      vehicles: ['商务MPV', '豪华面包车'],
      link: '/services/sightseeing',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary via-primary-light to-primary-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.services.page_title}</h1>
          <p className="text-xl text-gray-200">{t.services.page_subtitle}</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.id} className="card">
                <div className="flex items-start mb-4">
                  <div className="text-5xl mr-4">{service.icon}</div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-primary mb-2">{service.title}</h2>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <h3 className="font-semibold text-primary mb-2">服务特色</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-700">
                          <span className="text-accent mr-2">✓</span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary mb-2">{t.services.suitable_for}</h3>
                    <p className="text-sm text-gray-700">{service.suitable}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary mb-2">{t.services.vehicles_available}</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.vehicles.map((vehicle, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gray-100 text-sm text-gray-700 rounded-full">
                          {vehicle}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <span className="text-sm text-gray-600">{t.services.price_from}</span>
                    <p className="text-2xl font-bold text-accent">{service.priceFrom}</p>
                  </div>
                  <Link href={service.link} className="btn-primary">
                    {t.services.details}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">{t.services.guarantee_title}</h2>
          <p className="section-subtitle text-center">{t.services.guarantee_subtitle}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: t.services.guarantee_legal, desc: t.services.guarantee_legal_desc, icon: '📜' },
              { title: t.services.guarantee_driver, desc: t.services.guarantee_driver_desc, icon: '👨‍✈️' },
              { title: t.services.guarantee_insurance, desc: t.services.guarantee_insurance_desc, icon: '🛡️' },
              { title: t.services.guarantee_24h, desc: t.services.guarantee_24h_desc, icon: '⏰' },
            ].map((item, idx) => (
              <div key={idx} className="text-center p-6">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">{t.services.help_title}</h2>
          <p className="text-xl mb-8 text-gray-200">{t.services.help_subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-accent">
              {t.services.help_contact}
            </Link>
            <Link href="/fleet" className="bg-white hover:bg-gray-100 text-primary font-semibold py-3 px-6 rounded-lg transition-colors">
              {t.services.help_fleet}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
