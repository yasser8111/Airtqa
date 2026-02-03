import React from "react";

const PartnersSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-4xl font-bold text-dark mb-4 text-center">
            شركاؤنا
          </h2>
          <div className="h-1 w-20 bg-gold rounded-full"></div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Placeholder Logos */}
          <div className="h-24 w-48 flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300">
            <img
              src="/co-1.svg"
              alt="Partner 1"
              className="max-h-full max-w-full"
            />
          </div>
          <div className="h-24 w-48 flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300">
            <img
              src="/co-2.svg"
              alt="Partner 2"
              className="max-h-full max-w-full"
            />
          </div>
          <div className="h-24 w-48 flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300">
            <img
              src="/co-1.svg"
              alt="Partner 1"
              className="max-h-full max-w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
