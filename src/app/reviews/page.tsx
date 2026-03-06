'use client';

import { useTranslation } from '@/i18n/useTranslation';

export default function ReviewsPage() {
  const { t } = useTranslation();
  const touristReviews = t.reviews.tourist_reviews;
  const corporateReviews = t.reviews.corporate_reviews;
  const stats = t.reviews.stats;
  const avatars = ['bg-pink-500', 'bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-yellow-500', 'bg-red-500'];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-[#1B3A5C] to-[#2C5282] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.reviews.page_title}</h1>
          <p className="text-xl opacity-90">{t.reviews.page_subtitle}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">{t.reviews.tourist_title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {touristReviews.map((review, idx) => (
              <div key={idx} className="bg-white border rounded-lg p-6 shadow-lg hover:shadow-xl transition">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 ${avatars[idx % avatars.length]} rounded-full flex items-center justify-center text-white font-bold text-xl`}>{review.name[0]}</div>
                  <div>
                    <div className="font-bold">{review.name}</div>
                    <div className="text-sm text-gray-600">{review.from}</div>
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-2">{[...Array(5)].map((_, i) => <span key={i} className="text-yellow-400">⭐</span>)}</div>
                <div className="text-sm text-gray-500 mb-3">{review.trip} · {review.date}</div>
                <p className="text-gray-700 leading-relaxed">"{review.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">{t.reviews.corporate_title}</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {corporateReviews.map((review, idx) => (
              <div key={idx} className="bg-white border rounded-lg p-8 shadow-lg">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <h3 className="text-2xl font-bold text-[#1B3A5C]">{review.company}</h3>
                  <span className="bg-[#C4A35A] text-white px-3 py-1 rounded-full text-sm">{review.event}</span>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                  <span>👥 {review.participants}</span>
                  <span>📅 {review.date}</span>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">"{review.comment}"</p>
                <div className="flex flex-wrap gap-2">
                  {review.services.map((service, i) => <span key={i} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">{service}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
            {stats.map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl font-bold text-[#1B3A5C] mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1B3A5C] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{t.reviews.cta_title}</h2>
          <p className="text-xl mb-8 opacity-90">{t.reviews.cta_subtitle}</p>
          <button className="bg-[#C4A35A] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#D4B36A] transition">{t.reviews.cta_button}</button>
        </div>
      </section>
    </div>
  );
}
