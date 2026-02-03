import React from "react";
import SectionTitle from "../common/SectionTitle";

const PartnersSection = () => {
  return (
    <section className="py-40 bg-white">
      <div className="container-custom">
        <SectionTitle>شركاؤنا</SectionTitle>

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
