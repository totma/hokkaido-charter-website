'use client';

import { useState } from 'react';
import { useTranslation } from '@/i18n/useTranslation';

export default function ContactPage() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    people: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(t.contact.success_message);
  };

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-[#1B3A5C] to-[#2C5282] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.contact.page_title}</h1>
          <p className="text-xl opacity-90">{t.contact.page_subtitle}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-6">{t.contact.form_title}</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block font-semibold mb-2">{t.contact.form_name}</label>
                  <input
                    type="text"
                    required
                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1B3A5C]"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-2">{t.contact.form_email}</label>
                  <input
                    type="email"
                    required
                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1B3A5C]"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-2">{t.contact.form_phone}</label>
                  <input
                    type="tel"
                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1B3A5C]"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold mb-2">{t.contact.form_date}</label>
                    <input
                      type="date"
                      className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1B3A5C]"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-2">{t.contact.form_people}</label>
                    <input
                      type="number"
                      min="1"
                      className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1B3A5C]"
                      value={formData.people}
                      onChange={(e) => setFormData({ ...formData, people: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-semibold mb-2">{t.contact.form_message}</label>
                  <textarea
                    required
                    rows={6}
                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1B3A5C]"
                    placeholder={t.contact.form_message_placeholder}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#1B3A5C] text-white py-3 rounded-lg font-semibold hover:bg-[#2C5282] transition"
                >
                  {t.contact.form_submit}
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">{t.contact.contact_title}</h2>
              <div className="space-y-6">
                <div className="bg-white border rounded-lg p-6 shadow">
                  <h3 className="font-bold text-xl mb-4 text-[#1B3A5C]">📞 {t.contact.phone_title}</h3>
                  <p className="text-lg mb-2">{t.contact.phone_number}</p>
                  <p className="text-sm text-gray-600">{t.contact.phone_hours}</p>
                </div>

                <div className="bg-white border rounded-lg p-6 shadow">
                  <h3 className="font-bold text-xl mb-4 text-[#1B3A5C]">📧 {t.contact.email_title}</h3>
                  <p className="text-lg">{t.contact.email_address}</p>
                  <p className="text-sm text-gray-600 mt-2">{t.contact.email_reply}</p>
                </div>

                <div className="bg-white border rounded-lg p-6 shadow">
                  <h3 className="font-bold text-xl mb-4 text-[#1B3A5C]">💬 {t.contact.im_title}</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="bg-green-500 text-white px-3 py-1 rounded">{t.contact.channel_line}</span>
                      <span>{t.contact.line_id}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="bg-green-600 text-white px-3 py-1 rounded">{t.contact.channel_whatsapp}</span>
                      <span>{t.contact.whatsapp}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="bg-green-700 text-white px-3 py-1 rounded">{t.contact.channel_wechat}</span>
                      <span>{t.contact.wechat}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white border rounded-lg p-6 shadow">
                  <h3 className="font-bold text-xl mb-4 text-[#1B3A5C]">📍 {t.contact.address_title}</h3>
                  <p dangerouslySetInnerHTML={{ __html: t.contact.address_value }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">{t.contact.map_title}</h2>
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-blue-300 to-blue-500 h-96 rounded-lg flex items-center justify-center text-white text-2xl font-bold">
            {t.common.map_placeholder}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">{t.contact.hours_title}</h2>
          <div className="max-w-2xl mx-auto bg-white border rounded-lg p-8 shadow">
            <div className="space-y-4">
              <div className="flex justify-between border-b pb-3">
                <span className="font-semibold">{t.contact.hours_weekday}</span>
                <span>{t.contact.hours_weekday_time}</span>
              </div>
              <div className="flex justify-between border-b pb-3">
                <span className="font-semibold">{t.contact.hours_weekend}</span>
                <span>{t.contact.hours_weekend_time}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">{t.contact.hours_emergency}</span>
                <span>{t.contact.hours_emergency_time}</span>
              </div>
            </div>
            <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <p className="text-sm text-gray-700">
                💡 {t.contact.booking_tip}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
