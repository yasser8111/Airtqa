import React, { useState, useEffect, useRef } from "react";
import Counter from "../common/Counter";

const StatCounter = ({ end, fontSize }) => {
  const [value, setValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      // Small timeout to coordinate with the parent section's fade-in/reveal effect
      const timer = setTimeout(() => {
        setValue(parseInt(end, 10));
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setValue(0);
    }
  }, [isVisible, end]);

  // Compute fixed places based on the final target number to keep container widths static.
  // This prevents layout jumps during rolling and aligns the digits beautifully.
  const endStr = end.toString();
  const places = [...endStr].map((ch, i, a) => {
    if (ch === ".") return ".";
    return 10 ** (a.length - i - 1);
  });

  return (
    <span ref={containerRef} className="inline-flex items-center select-none" style={{ direction: "ltr" }}>
      <Counter
        value={value}
        places={places}
        fontSize={fontSize}
        textColor="#0a4979" // matching the --color-blue theme color
        fontWeight="bold"
        borderRadius={0}
        padding={0}
        gap={0}
        horizontalPadding={0}
        gradientHeight={fontSize * 0.15} // responsive gradient fade height
        gradientFrom="#fafbfc" // matches the bg-light/30 overlaid on white body background
        gradientTo="transparent"
      />
    </span>
  );
};

const stats = [
  { value: "10", label: "الجامعات" },
  { value: "100", label: "الطلاب" },
  { value: "50", label: "الأنشطة" },
];

const StatsSection = () => {
  const [fontSize, setFontSize] = useState(48);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setFontSize(72); // lg:text-7xl
      } else if (window.innerWidth >= 768) {
        setFontSize(60); // md:text-6xl
      } else {
        setFontSize(48); // text-5xl
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="min-h-[40vh] md:min-h-[60vh] flex flex-col justify-center items-center bg-light/30 py-16 md:py-24 overflow-hidden">
      <div className="container-custom w-full">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8 lg:gap-24 items-center justify-items-center">
          {stats.map((stat, index) => (
            <div key={index} className={`reveal reveal-delay-${index + 1} w-full`}>
              <div className="flex flex-col items-center gap-3 md:gap-5 text-center px-4">
                <span 
                  className="flex items-center justify-center font-bold text-blue leading-none select-none" 
                  style={{ fontSize: `${fontSize}px`, direction: "ltr" }}
                >
                  <StatCounter end={stat.value} fontSize={fontSize} />
                  <span>+</span>
                </span>
                <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue/40 tracking-wide uppercase">
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
