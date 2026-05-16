import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({ item, index }) => {
  // Use the first image from the array if available
  const displayImage = Array.isArray(item.image) ? item.image[0] : item.image;

  return (
    <div className={`reveal reveal-delay-${(index % 3) + 1} h-full`}>
      <Link
        to={`/news/${item.id}`}
        className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-blue/10 hover:shadow-xl transition-all duration-300 group flex flex-col h-full hover:-translate-y-2 relative"
      >
        {/* Date Badge */}
        <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm text-gold font-bold text-xs px-3 py-1.5 rounded-full shadow-sm">
          {item.date}
        </div>

        {/* Image Container */}
        <div className="relative w-full overflow-hidden shrink-0">
          <div className="absolute inset-0 bg-blue/10 z-0 pointer-events-none"></div>
          <img
            src={displayImage}
            alt={item.title}
            className="w-full h-auto block"
            loading="lazy"
          />
        </div>

        <div className="p-6 flex flex-col flex-1 text-right bg-linear-to-b from-white to-light/30">
          <h3 className="text-xl font-bold text-blue mb-3 line-clamp-2 leading-snug group-hover:text-gold transition-colors duration-200">
            {item.title}
          </h3>
          <p className="text-blue/80 font-medium text-sm leading-relaxed line-clamp-3 mb-4 flex-1">
            {item.description[0]}
          </p>
          

        </div>
      </Link>
    </div>
  );
};

export default NewsCard;
