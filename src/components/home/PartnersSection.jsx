import React from "react";
import SectionTitle from "../common/SectionTitle";

const PartnersSection = () => {
  return (
    <section className="py-40 bg-white">
      <div className="container-custom">
        <SectionTitle>شركاؤنا</SectionTitle>

        <div className="flex flex-wrap justify-center items-center gap-8 mt-12">
          <div className="h-50 w-50 flex items-center justify-center p-8 bg-light">
            <img
              src="/co-1.svg"
              alt="Partner 1"
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div className="h-50 w-50 flex items-center justify-center p-8 bg-light">
            <img
              src="/co-2.svg"
              alt="Partner 2"
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div className="h-50 w-50 flex items-center justify-center p-8 bg-light">
            <img
              src="/co-1.svg"
              alt="Partner 1"
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div className="h-50 w-50 flex items-center justify-center p-8 bg-light">
            <img
              src="/co-2.svg"
              alt="Partner 2"
              className="max-h-full max-w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
