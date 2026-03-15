import React, { useState, useEffect, useRef } from "react";

const CountUp = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const endValue = parseInt(end);
    if (start === endValue) return;

    let totalMiliseconds = duration;
    let incrementTime = (totalMiliseconds / endValue);

    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === endValue) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isVisible, end, duration]);

  return <span ref={countRef}>{count}</span>;
};

const stats = [
  { value: "10", label: "الجامعات" },
  { value: "100", label: "الطلاب" },
  { value: "50", label: "الأنشطة" },
];

const StatsSection = () => {
  return (
    <section className="min-h-[40vh] md:min-h-[60vh] flex flex-col justify-center items-center bg-light/30 py-16 md:py-24 overflow-hidden">
      <div className="container-custom w-full">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8 lg:gap-24 items-center justify-items-center">
          {stats.map((stat, index) => (
            <div key={index} className={`reveal reveal-delay-${index + 1} w-full`}>
              <div className="flex flex-col items-center gap-3 md:gap-5 text-center px-4">
                <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-blue leading-none">
                  <CountUp end={stat.value} />+
                </span>
                <span className="text-xl md:text-2xl font-bold text-blue/40 tracking-wide uppercase">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
