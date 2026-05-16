import React, { useState, useEffect, useRef } from "react";

const MapSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[500px] w-full bg-gray-200">
      <div className="absolute top-10 right-0 left-0 z-10 container-custom px-4 text-right pointer-events-none">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue tracking-tight reveal">
          موقعنا
        </h2>
      </div>

      {isVisible && (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3862.9311051258733!2d49.04463549999999!3d14.4886444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3de8e1c6a02e0fe3%3A0x7f8d585451749f5e!2z2YXYsdmD2LIg2KfZhNil2LHYqtmC2KfYoSDYp9mE2KzYp9mF2LnZig!5e0!3m2!1sar!2s!4v1778970260973!5m2!1sar!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      )}
    </section>
  );
};

export default MapSection;
