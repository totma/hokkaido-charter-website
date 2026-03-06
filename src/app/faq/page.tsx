'use client';

import { useTranslation } from '@/i18n/useTranslation';

export default function FAQPage() {
  const { t } = useTranslation();

  const faqs = [
    {
      category: t.faq?.cat_booking || '预约与费用',
      questions: [
        {
          q: t.faq?.q_booking_how || '如何预约包车服务？',
          a: t.faq?.a_booking_how || '您可以通过电话、邮件、LINE、WhatsApp或网站表单联系我们。请提供出行日期、人数、行程需求等信息，我们会在24小时内回复报价。'
        },
        {
          q: t.faq?.q_booking_include || '费用包含哪些内容？',
          a: t.faq?.a_booking_include || '基础费用包含：车辆使用费、司机服务费、车辆保险、基本油费。不包含：高速费、停车费、景点门票、餐费、司机住宿费（多日行程）。'
        },
        {
          q: t.faq?.q_booking_payment || '如何支付？',
          a: t.faq?.a_booking_payment || '我们接受现金、信用卡、银行转账、支付宝、微信支付。通常需要支付30%定金，余款在服务结束后支付。'
        },
        {
          q: t.faq?.q_booking_invoice || '可以开具发票吗？',
          a: t.faq?.a_booking_invoice || '可以。我们可以提供正规发票，请在预约时说明发票抬头和税号。'
        }
      ]
    },
    {
      category: t.faq?.cat_cancel || '取消与变更',
      questions: [
        {
          q: t.faq?.q_cancel_policy || '取消政策是什么？',
          a: t.faq?.a_cancel_policy || '7天前取消免费；7-3天取消收取30%；3天内取消收取50%；当天取消或No Show收取100%。'
        },
        {
          q: t.faq?.q_cancel_change || '可以临时改变行程吗？',
          a: t.faq?.a_cancel_change || '可以。在不超时的情况下，您可以随时与司机沟通调整行程。如需大幅变更，请提前联系我们。'
        },
        {
          q: t.faq?.q_cancel_delay || '航班延误怎么办？',
          a: t.faq?.a_cancel_delay || '机场接送服务免费等待2小时。超过2小时按¥3,000/小时收取等待费。请及时通知我们航班变动。'
        }
      ]
    },
    {
      category: t.faq?.cat_language || '语言与沟通',
      questions: [
        {
          q: t.faq?.q_lang_driver || '司机会说中文/英文吗？',
          a: t.faq?.a_lang_driver || '我们有会说中文和英文的司机，需提前预约。外语司机需额外支付¥5,000/天。'
        },
        {
          q: t.faq?.q_lang_no || '如果语言不通怎么办？',
          a: t.faq?.a_lang_no || '我们提供翻译设备和常用短语卡片。客服团队也可以通过电话协助沟通。'
        }
      ]
    },
    {
      category: t.faq?.cat_children || '儿童与特殊需求',
      questions: [
        {
          q: t.faq?.q_child_seat || '提供儿童座椅吗？',
          a: t.faq?.a_child_seat || '免费提供儿童座椅，请在预约时说明儿童年龄和体重，我们会准备合适的座椅。'
        },
        {
          q: t.faq?.q_ski || '可以携带滑雪器材吗？',
          a: t.faq?.a_ski || '可以。请提前告知器材数量和尺寸，我们会安排合适的车型。'
        },
        {
          q: t.faq?.q_wheelchair || '轮椅可以上车吗？',
          a: t.faq?.a_wheelchair || '部分车型可以容纳折叠轮椅。如需无障碍车辆，请提前联系我们安排。'
        }
      ]
    },
    {
      category: t.faq?.cat_luggage || '行李与物品',
      questions: [
        {
          q: t.faq?.q_luggage_limit || '行李限制是多少？',
          a: t.faq?.a_luggage_limit || '每种车型的行李容量不同。一般轿车2-3件、MPV 4-6件、Van 8-10件。大件行李请提前说明。'
        },
        {
          q: t.faq?.q_eat || '可以在车上吃东西吗？',
          a: t.faq?.a_eat || '可以饮用水和简单零食。请勿食用气味强烈的食物，保持车内清洁。'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#1B3A5C] to-[#2C5282] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.faq?.page_title || '常见问题'}</h1>
          <p className="text-xl opacity-90">{t.faq?.page_subtitle || '快速找到您关心的问题答案'}</p>
        </div>
      </section>

      {/* FAQ Sections */}
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

      {/* Contact CTA */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{t.faq?.no_answer || '没有找到答案？'}</h2>
          <p className="text-xl text-gray-600 mb-8">{t.faq?.contact_us || '随时联系我们的客服团队'}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-[#1B3A5C] text-white px-6 py-3 rounded-lg hover:bg-[#2C5282] transition">
              📞 {t.faq?.phone_btn || '电话咨询'}
            </button>
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
              💬 {t.faq?.line_btn || 'LINE咨询'}
            </button>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              📧 {t.faq?.email_btn || '邮件咨询'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
