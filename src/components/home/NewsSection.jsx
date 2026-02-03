import React from "react";
import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button";

const newsItems = [
  {
    id: 1,
    title: "يفيضي شمخمخش شخض",
    excerpt: "مشيربض - شبعض يبي شيخيقي ش يل شيخش يبي شيربي ذي يبيلي ...",
    date: "12 أكتوبر 2025",
    image:
      "https://images.unsplash.com/photo-1544531586-fde5298cdd40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "يعشيوي ضحي يبي شخشيصي شحشي",
    excerpt: "ضحي يبي شبعض يبي شيخيقي ش يل شيخش يبي شيربي ذي يبيلي ...",
    date: "10 أكتوبر 2025",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "يفيضي شمخمخش شخض",
    excerpt: "مشيربض - شبعض يبي شيخيقي ش يل شيخش يبي شيربي ذي يبيلي ...",
    date: "08 أكتوبر 2025",
    image:
      "https://images.unsplash.com/photo-1544531586-fde5298cdd40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

const NewsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <SectionTitle>آخر الأخبار</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <div
              key={item.id}
              className="bg-light overflow-hidden group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-blue text-white text-xs px-3 py-1 rounded-full">
                  {item.date}
                </div>
              </div>

              <div className="p-6 text-right">
                <h3 className="text-xl font-bold text-dark mb-3 line-clamp-2 group-hover:text-blue transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted mb-6 line-clamp-3 leading-relaxed">
                  {item.excerpt}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-muted font-bold hover:text-blue transition-colors"
                >
                  قراءة المزيد
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2 transform rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline">عرض كل الأخبار</Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
