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
  { value: "7", label: "الجامعات" },
  { value: "100", label: "الطلاب" },
  { value: "50", label: "الأنشطة" },
];

const StatsSection = () => {
  return (
    <section className="min-h-[calc(70dvh-80px)] flex flex-col justify-center items-center bg-light/50 overflow-hidden">
      <div className="container-custom flex flex-col md:flex-row justify-around w-full gap-12 md:gap-0">
        {stats.map((stat, index) => (
          <div key={index} className={`reveal reveal-delay-${index + 1}`}>
            <div className="flex flex-col items-center gap-5">
              <span className="text-6xl font-bold text-blue">
                <CountUp end={stat.value} />+
              </span>
              <span className="text-2xl font-bold text-blue/50">{stat.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
