import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import newsData from "../constants/news.json";
import Button from "../components/common/Button";

// استيراد Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// استيراد استايلات Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function NewsDetails({ onNavigate, newsId }) {
  const newsItem = newsData.find((item) => item.id === newsId);

  if (!newsItem) {
    return (
      <div className="bg-white font-sans min-h-screen flex flex-col" dir="rtl">
        <Header onNavigate={onNavigate} />
        <main className="flex-1 flex flex-col justify-center items-center p-6 text-center">
          <div className="w-24 h-24 bg-light rounded-full flex items-center justify-center mb-6">
            <svg className="w-12 h-12 text-blue/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
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

  return (
    <div className="bg-white font-sans min-h-screen selection:bg-gold/30" dir="rtl">
      <Header onNavigate={onNavigate} />

      <main className="relative py-6 md:py-20 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gold/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2"></div>

        <div className="container-custom px-4 relative z-10">
          {/* Action Bar */}
          <div className="flex justify-between items-center mb-10 reveal">
            <button
              onClick={() => onNavigate("news")}
              className=" cursor-pointer flex items-center gap-3 text-blue/60 hover:text-blue group transition-all font-bold text-lg"
            >
              <span className="w-10 h-10 rounded-full border border-blue/10 flex items-center justify-center group-hover:bg-blue group-hover:text-white transition-all">
                <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </span>
              العودة للأخبار
            </button>
            <div className="hidden md:flex items-center gap-4">
              <span className="px-4 py-1.5 bg-gold/10 text-gold rounded-full text-sm font-bold">
                {newsItem.date}
              </span>
            </div>
          </div>

          <article className="max-w-5xl mx-auto">
            <header className="mb-12 text-right md:text-center">
              <span className="md:hidden inline-block px-4 py-1.5 bg-gold/10 text-gold rounded-full text-sm font-bold mb-4">
                {newsItem.date}
              </span>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-blue leading-[1.2] mb-6 reveal">
                {newsItem.title}
              </h1>
              <div className="h-1.5 w-24 bg-gold rounded-full md:mx-auto"></div>
            </header>

            {/* Main Visual Display */}
            <div className="mb-16 reveal reveal-delay-1 flex justify-center w-full">
              <div className="relative group rounded-[2rem] overflow-hidden shadow-2xl shadow-blue/10 border border-white/20 w-fit max-w-full">
                {Array.isArray(newsItem.image) ? (
                  <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    className="w-full"
                    autoHeight={true}
                    loop={true}
                  >
                    {newsItem.image.map((img, idx) => (
                      <SwiperSlide key={idx}>
                        <img
                          src={img}
                          alt={`صورة ${idx + 1}`}
                          className="w-auto h-auto max-h-[85vh] block mx-auto transform hover:scale-105 transition-transform duration-700"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                ) : (
                  <img
                    src={newsItem.image}
                    alt={newsItem.title}
                    className="w-auto h-auto max-h-[85vh] block"
                  />
                )}
              </div>
            </div>
            {/* Content Body */}
            <div className="bg-white/50 border-3 border-gray-100 rounded-[2.5rem] p-4 pt-8 sm:p-8 md:p-16">
              <div className="max-w-3xl mx-auto prose prose-xl prose-blue">
                {newsItem.description.map((para, idx) => (
                  <p 
                    key={idx} 
                    className="text-lg md:text-xl text-blue/80 leading-[1.8] mb-8 font-medium last:mb-0 text-justify reveal"
                    style={{ transitionDelay: `${(idx + 3) * 0.1}s` }}
                  >
                    {para}
                  </p>
                ))}
              </div>

              {/* Share/Footer Section */}
              <div className="mt-16 pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8 text-blue/40">
                <p className="font-bold flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  تاريخ النشر: {newsItem.date}
                </p>
                <div className="flex gap-4">
                  {/* Placeholder for share buttons or extra info */}
                  <span className="text-sm">مركز الارتقاء الجامعي - قسم الإعلام</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default NewsDetails;
