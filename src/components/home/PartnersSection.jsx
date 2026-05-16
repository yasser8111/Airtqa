import React, { useEffect, useRef } from "react";

const PartnersSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let rafId;
    let position = 0;
    const baseSpeed = 1.2;
    let targetSpeed = baseSpeed;
    let lastScrollY = window.scrollY;
    let isVisible = false;
    let maxScroll = 0;

    // Cache scrollWidth to prevent layout thrashing
    const updateMaxScroll = () => {
      maxScroll = container.scrollWidth / 2;
      position = -maxScroll;
    };
    
    // Initial calculation after a short delay for images
    setTimeout(updateMaxScroll, 100);
    window.addEventListener("resize", updateMaxScroll);

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          lastScrollY = window.scrollY;
          rafId = requestAnimationFrame(render);
        } else {
          cancelAnimationFrame(rafId);
        }
      },
      { threshold: 0 }
    );
    
    observer.observe(container);

    const render = () => {
      if (!isVisible) return;

      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;

      // Smooth target speed integration
      targetSpeed = baseSpeed + Math.abs(scrollDelta) * 0.15;
      targetSpeed = targetSpeed * 0.9 + baseSpeed * 0.1;

      position += targetSpeed;

      if (position >= 0 && maxScroll > 0) {
        position -= maxScroll;
      }

      container.style.transform = `translate3d(${position}px, 0, 0)`;

      rafId = requestAnimationFrame(render);
    };

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", updateMaxScroll);
      observer.disconnect();
    };
  }, []);

  const partnerLogos = [
    "/co-1.svg",
    "/co-2.svg",
    "/co-1.svg",
    "/co-2.svg",
    "/co-1.svg",
    "/co-2.svg",
    "/co-1.svg",
    "/co-2.svg",
  ];

  return (
    <section className="flex flex-col py-20 justify-center items-center bg-white overflow-hidden">
      <div className="container-custom relative z-10 w-full px-4 text-right mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue tracking-tight reveal">
          شركاؤنا
        </h2>
      </div>

      <div className="w-full relative py-8 overflow-hidden" dir="ltr">
        {/* Gradient fades on the edges for a professional look */}
        <div className="absolute top-0 bottom-0 left-0 w-24 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-24 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <div
          ref={containerRef}
          className="flex items-center w-max gap-8 md:gap-16 pr-8 md:pr-16 will-change-transform"
        >
          {/* Double the logos to create the infinite scroll illusion */}
          {[...partnerLogos, ...partnerLogos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center p-6 md:p-8 bg-light/50 rounded-[2.5rem] hover:bg-light transition-colors duration-300 w-48 h-48 md:w-64 md:h-64"
            >
              <img
                src={logo}
                alt={`Partner ${index + 1}`}
                className="max-h-full max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-500 opacity-70 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
