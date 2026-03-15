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
        <main className="flex-1 flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold text-blue mb-4">الخبر غير موجود</h2>
          <Button variant="primary" onClick={() => onNavigate("home")}>
            العودة للرئيسية
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-white font-sans" dir="rtl">
      <Header onNavigate={onNavigate} />

      <main className="py-16 bg-light/30">
        <div className="container-custom px-4">
          {/* Back Button */}
          <Button
            variant="outline"
            onClick={() => onNavigate("news")}
            className="flex items-center gap-2 text-blue/60 hover:text-gold transition-colors mb-8 font-bold"
          >
            <span>→</span> العودة للأخبار
          </Button>

          {/* News Content */}
          <article className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-blue/5">
            <header className="mb-10 text-center">
              <span className="text-gold font-bold mb-4 block reveal">
                {newsItem.date}
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-blue leading-tight reveal">
                {newsItem.title}
              </h1>
            </header>

            {/* Swiper Image Gallery */}
            <div className="mb-12 w-full mx-auto reveal reveal-delay-1 rounded-3xl overflow-hidden shadow-2xl max-w-[850px]">
              {Array.isArray(newsItem.image) ? (
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  className="h-[700px]"
                  loop={true}
                >
                  {newsItem.image.map((img, idx) => (
                    <SwiperSlide key={idx}>
                      <img
                        src={img}
                        alt={`صورة ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <div className="rounded-2xl overflow-hidden shadow-lg h-[400px] md:h-[600px]">
                  <img
                    src={newsItem.image}
                    alt={newsItem.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>

            {/* Description Sections */}
            <div className="max-w-4xl mx-auto space-y-6 text-xl text-blue/70 leading-relaxed reveal reveal-delay-2">
              {newsItem.description.map((para, idx) => (
                <p key={idx} className="font-medium text-justify">
                  {para}
                </p>
              ))}
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default NewsDetails;
