'use client';

import { useTranslation } from '@/i18n/useTranslation';

export default function FleetPage() {
  const { t } = useTranslation();

  const vehicles = [
    {
      name: t.fleet?.vehicle_luxury_sedan || '豪华商务轿车',
      model: t.fleet?.vehicle_luxury_sedan_model || '丰田 Crown / 日产 Fuga',
      seats: t.fleet?.vehicle_luxury_sedan_seats || '4座',
      luggage: t.fleet?.vehicle_luxury_sedan_luggage || '2-3件',
      features: ['真皮座椅', 'WiFi', '充电口', '饮用水', '雨伞'],
      price: t.fleet?.vehicle_luxury_sedan_price || '¥15,000起/天',
      image: 'bg-gradient-to-br from-slate-700 to-slate-900'
    },
    {
      name: t.fleet?.vehicle_mpv || '高端MPV',
      model: t.fleet?.vehicle_mpv_model || '丰田 Alphard / 日产 Elgrand',
      seats: t.fleet?.vehicle_mpv_seats || '6-7座',
      luggage: t.fleet?.vehicle_mpv_luggage || '4-6件',
      features: ['豪华座椅', '大空间', 'WiFi', '充电口', '饮用水', '儿童座椅可选'],
      price: t.fleet?.vehicle_mpv_price || '¥25,000起/天',
      image: 'bg-gradient-to-br from-blue-700 to-blue-900'
    },
    {
      name: t.fleet?.vehicle_van || '商务Van',
      model: t.fleet?.vehicle_van_model || '丰田 Hiace',
      seats: t.fleet?.vehicle_van_seats || '9-10座',
      luggage: t.fleet?.vehicle_van_luggage || '8-10件',
      features: ['宽敞空间', '适合团队', 'WiFi', '充电口', '饮用水'],
      price: t.fleet?.vehicle_van_price || '¥30,000起/天',
      image: 'bg-gradient-to-br from-indigo-700 to-indigo-900'
    },
    {
      name: t.fleet?.vehicle_bus || '中型巴士',
      model: t.fleet?.vehicle_bus_model || '丰田 Coaster',
      seats: t.fleet?.vehicle_bus_seats || '20-25座',
      luggage: t.fleet?.vehicle_bus_luggage || '15-20件',
      features: ['团体出行', '行李舱', 'WiFi', '充电口', '导游麦克风'],
      price: t.fleet?.vehicle_bus_price || '¥50,000起/天',
      image: 'bg-gradient-to-br from-purple-700 to-purple-900'
    }
  ];

  const extraFees = [
    { name: t.fleet?.extra_highway || '高速公路费', value: t.fleet?.extra_highway_value || '实报实销' },
    { name: t.fleet?.extra_parking || '停车费', value: t.fleet?.extra_parking_value || '实报实销' },
    { name: t.fleet?.extra_driver_hotel || '司机住宿费（多日行程）', value: t.fleet?.extra_driver_hotel_value || '¥8,000/晚 或客户安排' },
    { name: t.fleet?.extra_overtime || '超时费', value: t.fleet?.extra_overtime_value || '¥3,000/小时' },
    { name: t.fleet?.extra_night || '夜间加价（22:00-06:00）', value: t.fleet?.extra_night_value || '+30%' },
    { name: t.fleet?.extra_language || '外语司机', value: t.fleet?.extra_language_value || '+¥5,000/天' },
    { name: t.fleet?.extra_childseat || '儿童座椅', value: t.fleet?.extra_childseat_value || '免费提供' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#1B3A5C] to-[#2C5282] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.fleet?.page_title || '车型与价格'}</h1>
          <p className="text-xl opacity-90">{t.fleet?.page_subtitle || '多种车型选择，满足不同需求'}</p>
        </div>
      </section>

      {/* Vehicle Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {vehicles.map((vehicle, idx) => (
              <div key={idx} className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
                <div className={`h-48 ${vehicle.image} flex items-center justify-center text-white text-2xl font-bold`}>
                  {vehicle.name}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{vehicle.name}</h3>
                  <p className="text-gray-600 mb-4">{vehicle.model}</p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <span className="font-semibold">{t.fleet?.seats || '座位数'}：</span>{vehicle.seats}
                    </div>
                    <div>
                      <span className="font-semibold">{t.fleet?.luggage || '行李容量'}：</span>{vehicle.luggage}
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="font-semibold">{t.fleet?.features || '车内配置'}：</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {vehicle.features.map((f, i) => (
                        <span key={i} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-[#C4A35A] mb-4">{vehicle.price}</div>
                  <button className="w-full bg-[#1B3A5C] text-white py-3 rounded-lg hover:bg-[#2C5282] transition">
                    {t.fleet?.quote_now || '立即询价'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Notes */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">{t.fleet?.extra_fees_title || '附加费用说明'}</h2>
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow">
            <div className="space-y-4">
              {extraFees.map((fee, idx) => (
                <div key={idx} className={`flex justify-between pb-2 ${idx < extraFees.length - 1 ? 'border-b' : ''}`}>
                  <span className="font-semibold">{fee.name}</span>
                  <span>{fee.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
