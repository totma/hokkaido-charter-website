'use client';

import { useTranslation } from '@/i18n/useTranslation';

export default function FleetPage() {
  const { t } = useTranslation();

  const vehicles = [
    {
      name: t.fleet.vehicle_luxury_sedan,
      model: t.fleet.vehicle_luxury_sedan_model,
      seats: t.fleet.vehicle_luxury_sedan_seats,
      luggage: t.fleet.vehicle_luxury_sedan_luggage,
      features: [t.fleet.feature_leather, t.fleet.feature_wifi, t.fleet.feature_charger, t.fleet.feature_water, t.fleet.feature_umbrella],
      price: t.fleet.vehicle_luxury_sedan_price,
      image: 'bg-gradient-to-br from-slate-700 to-slate-900'
    },
    {
      name: t.fleet.vehicle_mpv,
      model: t.fleet.vehicle_mpv_model,
      seats: t.fleet.vehicle_mpv_seats,
      luggage: t.fleet.vehicle_mpv_luggage,
      features: [t.fleet.feature_luxury_seat, t.fleet.feature_large_space, t.fleet.feature_wifi, t.fleet.feature_charger, t.fleet.feature_water, t.fleet.feature_childseat_optional],
      price: t.fleet.vehicle_mpv_price,
      image: 'bg-gradient-to-br from-blue-700 to-blue-900'
    },
    {
      name: t.fleet.vehicle_van,
      model: t.fleet.vehicle_van_model,
      seats: t.fleet.vehicle_van_seats,
      luggage: t.fleet.vehicle_van_luggage,
      features: [t.fleet.feature_team_space, t.fleet.feature_team, t.fleet.feature_wifi, t.fleet.feature_charger, t.fleet.feature_water],
      price: t.fleet.vehicle_van_price,
      image: 'bg-gradient-to-br from-indigo-700 to-indigo-900'
    },
    {
      name: t.fleet.vehicle_bus,
      model: t.fleet.vehicle_bus_model,
      seats: t.fleet.vehicle_bus_seats,
      luggage: t.fleet.vehicle_bus_luggage,
      features: [t.fleet.feature_team, t.fleet.feature_luggage_space, t.fleet.feature_wifi, t.fleet.feature_charger, t.fleet.feature_guide_mic],
      price: t.fleet.vehicle_bus_price,
      image: 'bg-gradient-to-br from-purple-700 to-purple-900'
    }
  ];

  const extraFees = [
    { name: t.fleet.extra_highway, value: t.fleet.extra_highway_value },
    { name: t.fleet.extra_parking, value: t.fleet.extra_parking_value },
    { name: t.fleet.extra_driver_hotel, value: t.fleet.extra_driver_hotel_value },
    { name: t.fleet.extra_overtime, value: t.fleet.extra_overtime_value },
    { name: t.fleet.extra_night, value: t.fleet.extra_night_value },
    { name: t.fleet.extra_language, value: t.fleet.extra_language_value },
    { name: t.fleet.extra_childseat, value: t.fleet.extra_childseat_value },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-[#1B3A5C] to-[#2C5282] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.fleet.page_title}</h1>
          <p className="text-xl opacity-90">{t.fleet.page_subtitle}</p>
        </div>
      </section>

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
                      <span className="font-semibold">{t.fleet.seats}：</span>{vehicle.seats}
                    </div>
                    <div>
                      <span className="font-semibold">{t.fleet.luggage}：</span>{vehicle.luggage}
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="font-semibold">{t.fleet.features}：</span>
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
                    {t.fleet.quote_now}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">{t.fleet.extra_fees_title}</h2>
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
