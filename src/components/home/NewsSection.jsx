import React from "react";
import Button from "../common/Button";
import NewsCard from "../common/newsCard";
import newsData from "../../constants/news.json";

const NewsSection = ({ limit = 3, onNavigate, title = "آخر الأخبار والفعاليات" }) => {
  const featuredNews = newsData.slice(0, limit);

  return (
    <section className="min-h-[calc(100dvh-80px)] flex flex-col justify-center items-center bg-light/50 py-20" id="News">
      <div className="container-custom relative z-10 w-full px-4">
        <h2 className="text-4xl font-extrabold text-blue tracking-tight mb-12 reveal">
         {title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-10">
          {featuredNews.map((item, index) => (
            <NewsCard key={item.id} item={item} index={index} onNavigate={onNavigate} />
          ))}
        </div>

        {onNavigate && limit === 3 && (
          <div className="mt-16 text-center reveal reveal-delay-2">
            <Button
              variant="outline"
              className="px-10 py-4 text-lg"
              onClick={() => onNavigate("news")}
            >
              عرض كل الأخبار
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsSection;
