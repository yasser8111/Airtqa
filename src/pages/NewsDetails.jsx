import { useParams } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import newsData from "../constants/news.json";
import Button from "../components/common/Button";
import Breadcrumbs from "../components/common/Breadcrumbs";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

function NewsDetails({ onNavigate }) {
  const { id } = useParams();
  const newsId = parseInt(id) || id;
  const newsItem = newsData.find((item) => item.id === newsId);

  if (!newsItem) {
    return (
      <div className="bg-white font-sans min-h-screen flex flex-col" dir="rtl">
        <Header onNavigate={onNavigate} />
        <main className="flex-1 flex flex-col justify-center items-center p-6 text-center">
          <div className="w-24 h-24 bg-light rounded-full flex items-center justify-center mb-6">
            <svg
              className="w-12 h-12 text-blue/20"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-blue mb-6">الخبر غير موجود</h2>
          <Button variant="primary" onClick={() => onNavigate("home")}>
            العودة للرئيسية
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  const customBreadcrumbTitles = {
    news: "الأخبار",
    [id]: newsItem.title,
  };

  const images = Array.isArray(newsItem.image) ? newsItem.image : [newsItem.image];

  return (
    <div className="bg-white font-sans min-h-screen flex flex-col" dir="rtl">
      <Header onNavigate={onNavigate} />

      <main className="flex-1 pb-20">
        {/* Breadcrumbs Section */}
        <div className="container-custom px-4 md:px-8 mt-6">
          <Breadcrumbs customTitles={customBreadcrumbTitles} />
        </div>

        {/* Hero Image Section */}
        <div className="container-custom px-4 md:px-8 mt-2 mb-12 md:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
            
            {/* Right side: Two static images (Desktop Only) */}
            <div className="hidden lg:flex flex-col gap-4 lg:gap-6 col-span-1 h-full">
              <div className="flex-1 rounded-[2rem] overflow-hidden bg-black relative shadow-2xl shadow-blue/10 flex items-center justify-center">
                <img
                  src={images[1] || images[0]}
                  alt="صورة إضافية 1"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 rounded-[2rem] overflow-hidden bg-black relative shadow-2xl shadow-blue/10 flex items-center justify-center">
                <img
                  src={images[2] || images[0]}
                  alt="صورة إضافية 2"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Left side: Swiper Main Image */}
            <div className="col-span-1 lg:col-span-2 relative rounded-[2rem] overflow-hidden shadow-2xl shadow-blue/10 bg-black lg:h-[600px]">
              <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                effect="fade"
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                className="w-full h-full"
                autoHeight={false}
                loop={true}
              >
                {images.map((img, idx) => (
                  <SwiperSlide key={idx} className="h-full flex items-center justify-center">
                    <img
                      src={img}
                      alt={`صورة ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

          </div>
        </div>

        {/* Content Section */}
        <article className="container-custom px-4 md:px-8 max-w-4xl">
          <div className="bg-white">
            <div className="mb-10 text-right">
              <span className="inline-block px-4 py-1.5 bg-gold/10 text-gold rounded-full text-sm font-bold mb-4">
                {newsItem.date}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue leading-tight md:leading-[1.2] mb-8">
                {newsItem.title}
              </h1>
            </div>

            <div className="prose prose-lg md:prose-xl prose-blue max-w-none text-blue/80 leading-relaxed font-medium">
              {newsItem.description.map((para, idx) => (
                <p key={idx} className="mb-6 md:mb-8 text-justify">
                  {para}
                </p>
              ))}
            </div>

            {/* Tags and Share */}
            <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-3">
                <span className="text-muted font-bold">مشاركة:</span>
                <div className="flex gap-2">
                  {/* Social placeholders */}
                  <div className="w-10 h-10 rounded-full bg-light flex items-center justify-center text-blue hover:bg-gold hover:text-white transition-colors cursor-pointer">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-light flex items-center justify-center text-blue hover:bg-gold hover:text-white transition-colors cursor-pointer">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  </div>
                </div>
              </div>

              <div className="text-blue/40 font-bold text-sm">
                مركز الارتقاء الجامعي - قسم الإعلام
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}

export default NewsDetails;
