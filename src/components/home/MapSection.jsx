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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14876.16641774346!2d44.208198649999995!3d21.2306775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15e984950364985b%3A0xe54e223b9255ea!2sYemen!5e0!3m2!1sen!2s!4v1652014456789!5m2!1sen!2s"
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
