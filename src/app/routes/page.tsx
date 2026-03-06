'use client';

import { useTranslation } from '@/i18n/useTranslation';

export default function RoutesPage() {
  const { t } = useTranslation();

  const routes = [
    {
      name: '札幌市内观光',
      duration: '6小时',
      season: '全年',
      highlights: '时计台、大通公园、白色恋人公园、场外市场',
      price: '¥35,000起',
      tag: '经典'
    },
    {
      name: '小樽一日游',
      duration: '8小时',
      season: '全年',
      highlights: '小樽运河、天狗山、堺町通、北一硝子馆',
      price: '¥45,000起',
      tag: '热门'
    },
    {
      name: '富良野·美瑛',
      duration: '10小时',
      season: '夏秋',
      highlights: '四季彩之丘、青池、富田农场、拼布之路',
      price: '¥60,000起',
      tag: '季节限定'
    },
    {
      name: '登别·洞爷湖',
      duration: '10小时',
      season: '全年',
      highlights: '地狱谷、熊牧场、洞爷湖展望台、昭和新山',
      price: '¥55,000起',
      tag: '温泉'
    },
    {
      name: '二世古滑雪接送',
      duration: '单程',
      season: '冬季',
      highlights: '新千岁机场 ↔ 二世古度假村',
      price: '¥40,000起',
      tag: '冬季'
    },
    {
      name: '旭川·旭山动物园',
      duration: '10小时',
      season: '全年',
      highlights: '旭山动物园、旭川拉面村、雪之美术馆',
      price: '¥58,000起',
      tag: '亲子'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#1B3A5C] to-[#2C5282] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.routes?.page_title || '热门线路'}</h1>
          <p className="text-xl opacity-90">{t.routes?.page_subtitle || '精选北海道经典路线，专业司机带您深度游览'}</p>
        </div>
      </section>

      {/* Routes Grid */}
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
                    <span className="font-semibold">{t.routes?.duration || '时长'}：</span>{route.duration}
                  </div>
                  <div className="mb-4">
                    <span className="font-semibold">{t.routes?.highlights || '主要景点'}：</span>
                    <p className="text-gray-600 mt-1">{route.highlights}</p>
                  </div>
                  <div className="text-2xl font-bold text-[#1B3A5C] mb-4">{route.price}</div>
                  <button className="w-full bg-[#1B3A5C] text-white py-2 rounded-lg hover:bg-[#2C5282] transition">
                    {t.home?.view_details || '查看详情'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Route CTA */}
      <section className="bg-gradient-to-r from-[#C4A35A] to-[#D4B36A] py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">{t.routes?.custom_title || '没有找到合适的线路？'}</h2>
          <p className="text-xl mb-8">{t.routes?.custom_subtitle || '我们提供完全定制化的行程规划服务'}</p>
          <button className="bg-white text-[#1B3A5C] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            {t.routes?.custom_button || '定制专属行程'}
          </button>
        </div>
      </section>
    </div>
  );
}
