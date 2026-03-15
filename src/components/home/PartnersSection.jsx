import React from "react";

const PartnersSection = () => {
  return (
    <section className="min-h-[calc(70dvh-80px)] flex flex-col justify-center items-center">
      <div className="container-custom">
        <h2 className="text-4xl font-extrabold text-blue tracking-tight mb-12">
          شركاؤنا
        </h2>

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
