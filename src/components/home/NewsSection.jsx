import React from "react";
import Button from "../common/Button";
import NewsCard from "../common/newsCard";
import newsData from "../../constants/news.json";

const NewsSection = () => {
  // Show only the first 3 news items on the home page
  const featuredNews = newsData.slice(0, 3);

  return (
    <section className="min-h-[calc(100dvh-80px)] flex flex-col justify-center items-center bg-light/50 py-20" id="News">
      <div className="container-custom relative z-10 w-full">
        <h2 className="text-4xl font-extrabold text-blue tracking-tight mb-12 reveal px-4">
          آخر الأخبار والفعاليات
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-10 px-4">
          {featuredNews.map((item, index) => (
            <NewsCard key={item.id} item={item} index={index} />
          ))}
        </div>

        <div className="mt-12 text-center reveal reveal-delay-2 px-4">
          <Button variant="outline" className="px-10">
            عرض كل الأخبار
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
