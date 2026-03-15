import React from "react";

const NewsCard = ({ item, index, onNavigate }) => {
  // Use the first image from the array if available
  const displayImage = Array.isArray(item.image) ? item.image[0] : item.image;

  return (
    <div className={`reveal reveal-delay-${(index % 3) + 1}`}>
      <article
        onClick={() => onNavigate && onNavigate("details", item.id)}
        className="bg-white rounded-2xl overflow-hidden border-2 border-gray-100 shadow-blue/10 hover:shadow-xl transition-all duration-300 group flex flex-col hover:-translate-y-2 hover:scale-[1.02] cursor-pointer"
      >
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={displayImage}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <div className="p-5 flex flex-col flex-1 text-right">
          <span className="text-sm text-gold font-bold mb-2">{item.date}</span>
          <h3 className="text-lg font-medium text-blue mb-1 line-clamp-2 leading-snug">
            {item.title}
          </h3>
        </div>
      </article>
    </div>
  );
};

export default NewsCard;
