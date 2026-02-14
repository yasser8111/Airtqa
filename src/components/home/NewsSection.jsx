import React from "react";
import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button";

const newsItems = [
  {
    id: 1,
    category: "مبادرات",
    title: "إطلاق المبادرة الوطنية للتشجير في سكن الطلاب",
    excerpt:
      "تهدف المبادرة إلى تحسين البيئة المحيطة بالسكن وزيادة المساحات الخضراء لتهيئة جو صحي للطلاب...",
    date: "15 أكتوبر 2025",
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    category: "اتفاقيات",
    title: "توقيع اتفاقية تعاون لتوفير وجبات غذائية مدعومة",
    excerpt:
      "تم توقيع اتفاقية مع كبرى المطاعم لتوفير وجبات صحية وبأسعار مخفضة لطلاب السكن بمواصفات عالية...",
    date: "12 أكتوبر 2025",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    category: "تقنية",
    title: "تدشين نظام رقمي جديد لإدارة مرافق السكن",
    excerpt:
      "أصبح بإمكان الطلاب الآن طلب الصيانة أو حجز القاعات عبر تطبيق إلكتروني سهل الاستخدام وبكبسة زر واحدة...",
    date: "10 أكتوبر 2025",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

const NewsSection = () => {
  return (
    <section className="py-24 bg-light/30 relative" id="News">
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="text-right">
            <h2 className="text-4xl font-extrabold text-blue tracking-tight">
              آخر الأخبار والفعاليات
            </h2>
          </div>
          <div className="mt-auto">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-blue font-bold group/link"
            >
              <span className="relative">
                كل الاخبار
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue transition-all duration-300 group-hover/link:w-full"></span>
              </span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {newsItems.map((item) => (
            <article
              key={item.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100/50 flex flex-col hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Category Tag */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-blue text-xs font-bold px-4 py-1.5 rounded-full shadow-sm">
                  {item.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-1 text-right">
                <h3 className="text-2xl font-bold text-dark mb-4 group-hover:text-blue transition-colors line-clamp-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-muted mb-8 line-clamp-3 leading-relaxed text-lg">
                  {item.excerpt}
                </p>

                <div className="mt-auto">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-blue font-bold group/link"
                  >
                    <span className="relative">
                      إقرأ المزيد
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue transition-all duration-300 group-hover/link:w-full"></span>
                    </span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Button variant="outline" className="w-full">
            عرض كل الأخبار
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
