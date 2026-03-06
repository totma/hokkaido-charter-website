'use client';

import { useTranslation } from '@/i18n/useTranslation';

export default function FAQPage() {
  const { t } = useTranslation();

  const faqs = [
    {
      category: t.faq.cat_booking,
      questions: [
        { q: t.faq.q_booking_how, a: t.faq.a_booking_how },
        { q: t.faq.q_booking_include, a: t.faq.a_booking_include },
        { q: t.faq.q_booking_payment, a: t.faq.a_booking_payment },
        { q: t.faq.q_booking_invoice, a: t.faq.a_booking_invoice },
      ]
    },
    {
      category: t.faq.cat_cancel,
      questions: [
        { q: t.faq.q_cancel_policy, a: t.faq.a_cancel_policy },
        { q: t.faq.q_cancel_change, a: t.faq.a_cancel_change },
        { q: t.faq.q_cancel_delay, a: t.faq.a_cancel_delay },
      ]
    },
    {
      category: t.faq.cat_language,
      questions: [
        { q: t.faq.q_lang_driver, a: t.faq.a_lang_driver },
        { q: t.faq.q_lang_no, a: t.faq.a_lang_no },
      ]
    },
    {
      category: t.faq.cat_children,
      questions: [
        { q: t.faq.q_child_seat, a: t.faq.a_child_seat },
        { q: t.faq.q_ski, a: t.faq.a_ski },
        { q: t.faq.q_wheelchair, a: t.faq.a_wheelchair },
      ]
    },
    {
      category: t.faq.cat_luggage,
      questions: [
        { q: t.faq.q_luggage_limit, a: t.faq.a_luggage_limit },
        { q: t.faq.q_eat, a: t.faq.a_eat },
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-[#1B3A5C] to-[#2C5282] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.faq.page_title}</h1>
          <p className="text-xl opacity-90">{t.faq.page_subtitle}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {faqs.map((category, catIdx) => (
              <div key={catIdx}>
                <h2 className="text-2xl font-bold mb-6 text-[#1B3A5C] border-b-2 border-[#C4A35A] pb-2">
                  {category.category}
                </h2>
                <div className="space-y-6">
                  {category.questions.map((item, qIdx) => (
                    <div key={qIdx} className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition">
                      <h3 className="font-bold text-lg mb-3 text-[#1B3A5C]">
                        Q: {item.q}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        A: {item.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{t.faq.no_answer}</h2>
          <p className="text-xl text-gray-600 mb-8">{t.faq.contact_us}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-[#1B3A5C] text-white px-6 py-3 rounded-lg hover:bg-[#2C5282] transition">
              📞 {t.faq.phone_btn}
            </button>
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
              💬 {t.faq.line_btn}
            </button>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              📧 {t.faq.email_btn}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
