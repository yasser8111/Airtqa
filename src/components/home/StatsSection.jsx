import React from "react";

const stats = [
  { value: "7", label: "الجامعات" },
  { value: "100", label: "الطلاب" },
  { value: "50", label: "الأنشطة" },
];

const StatsSection = () => {
  return (
    <section className="min-h-[calc(70dvh-80px)] flex flex-col justify-center items-center bg-light/50">
      <div className="container-custom flex justify-around w-full">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center gap-5">
            <span className="text-6xl font-bold text-blue">{stat.value}+</span>
            <span className="text-2xl font-bold text-blue/50">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
