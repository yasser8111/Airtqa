import React from "react";
import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button";

const newsItems = [
  {
    id: 1,
    title: "إطلاق المبادرة الوطنية للتشجير",
    excerpt: "تهدف المبادرة إلى زراعة مليون شجرة في مختلف مناطق المملكة لتعزيز الغطاء النباتي ومكافحة التصحر...",
    date: "15 أكتوبر 2025",
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "توقيع اتفاقية تعاون في مجال الطاقة المتجددة",
    excerpt: "تم اليوم توقيع اتفاقية استراتيجية تهدف إلى تطوير مشاريع الطاقة الشمسية والرياح لتعزيز الاستدامة...",
    date: "12 أكتوبر 2025",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "افتتاح المركز التقني الجديد للابتكار و الرمجة",
    excerpt: "يعد المركز منصة رائدة لدعم الشركات الناشئة وتطوير الحلول التقنية المتقدمة في المنطقة...",
    date: "10 أكتوبر 2025",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
                <div className="absolute top-4 right-4 bg-blue text-white text-xs px-3 py-1">
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
