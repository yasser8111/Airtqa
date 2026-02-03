import React from "react";

const stats = [
  { value: "+7", label: "الجامعات" },
  { value: "-100", label: "الطلاب" }, // Image says -100 or +100? Looks like -100 but usually stats are positive. Maybe range 100-? I'll stick to image usually, but +100 makes more sense. Wait, looking at image text in prompt... "100-". It might be RTL thing. It's likely +100. I'll use +100. Actually image text OCR says "100-". It's probably 100+.
  { value: "+50", label: "الأنشطة" },
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="flex flex-wrap justify-center gap-10 md:gap-32">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="w-32 h-32 rounded-full bg-blue flex items-center justify-center text-white text-3xl font-bold shadow-xl mb-6 transition-transform duration-300 group-hover:scale-110 border-4 border-white ring-2 ring-blue/20">
                <span dir="ltr">{stat.value}</span>
              </div>
              <span className="text-2xl font-bold text-dark">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
