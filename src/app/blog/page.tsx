'use client';

import { useTranslation } from '@/i18n/useTranslation';

export default function BlogPage() {
  const { t } = useTranslation();

  const posts = [
    {
      slug: 'charter-vs-self-drive',
      title: t.blog.posts[0].title,
      date: t.blog.posts[0].date,
      category: t.blog.posts[0].category,
      excerpt: t.blog.posts[0].excerpt,
      image: 'bg-gradient-to-br from-blue-400 to-blue-600'
    },
    {
      slug: 'chitose-to-niseko',
      title: t.blog.posts[1].title,
      date: t.blog.posts[1].date,
      category: t.blog.posts[1].category,
      excerpt: t.blog.posts[1].excerpt,
      image: 'bg-gradient-to-br from-purple-400 to-purple-600'
    },
    {
      slug: 'furano-flower-season',
      title: t.blog.posts[2].title,
      date: t.blog.posts[2].date,
      category: t.blog.posts[2].category,
      excerpt: t.blog.posts[2].excerpt,
      image: 'bg-gradient-to-br from-pink-400 to-pink-600'
    },
    {
      slug: 'winter-charter-tips',
      title: t.blog.posts[3].title,
      date: t.blog.posts[3].date,
      category: t.blog.posts[3].category,
      excerpt: t.blog.posts[3].excerpt,
      image: 'bg-gradient-to-br from-cyan-400 to-cyan-600'
    },
    {
      slug: 'otaru-one-day-guide',
      title: t.blog.posts[4].title,
      date: t.blog.posts[4].date,
      category: t.blog.posts[4].category,
      excerpt: t.blog.posts[4].excerpt,
      image: 'bg-gradient-to-br from-indigo-400 to-indigo-600'
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-[#1B3A5C] to-[#2C5282] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.blog.page_title}</h1>
          <p className="text-xl opacity-90">{t.blog.page_subtitle}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {posts.map((post) => (
              <article key={post.slug} className="bg-white border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
                <div className={`h-48 ${post.image} flex items-center justify-center text-white text-xl font-bold p-4 text-center`}>
                  {post.title}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-[#C4A35A] text-white px-3 py-1 rounded-full text-sm">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.date}</span>
                  </div>
                  <h2 className="text-xl font-bold mb-3 text-[#1B3A5C]">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <button className="text-[#1B3A5C] font-semibold hover:text-[#2C5282] transition">
                    {t.blog.read_more}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">{t.blog.categories_title}</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {t.blog.categories.map((category: string) => (
              <button key={category} className="bg-white border-2 border-[#1B3A5C] text-[#1B3A5C] px-6 py-3 rounded-lg font-semibold hover:bg-[#1B3A5C] hover:text-white transition">
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-gradient-to-r from-[#1B3A5C] to-[#2C5282] text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">{t.blog.newsletter_title}</h2>
            <p className="text-lg mb-6 opacity-90">
              {t.blog.newsletter_subtitle}
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder={t.blog.newsletter_placeholder}
                className="flex-grow px-4 py-3 rounded-lg text-gray-900 focus:outline-none"
              />
              <button className="bg-[#C4A35A] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#D4B36A] transition whitespace-nowrap">
                {t.blog.newsletter_button}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
