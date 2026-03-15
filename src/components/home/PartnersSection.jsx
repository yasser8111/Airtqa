import React from "react";

const PartnersSection = () => {
  return (
    <section className="min-h-[calc(70dvh-80px)] flex flex-col py-10 justify-center items-center">
      <div className="container-custom">
         <h2 className="text-3xl md:text-4xl font-extrabold text-blue tracking-tight mb-8 md:mb-12 reveal text-right">
          شركاؤنا
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-12 w-full">
          <div className="reveal reveal-delay-1">
            <div className="aspect-square flex items-center justify-center p-6 md:p-8 bg-light rounded-2xl">
              <img
                src="/co-1.svg"
                alt="Partner 1"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
          <div className="reveal reveal-delay-2">
            <div className="aspect-square flex items-center justify-center p-6 md:p-8 bg-light rounded-2xl">
              <img
                src="/co-2.svg"
                alt="Partner 2"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
          <div className="reveal reveal-delay-3">
            <div className="aspect-square flex items-center justify-center p-6 md:p-8 bg-light rounded-2xl">
              <img
                src="/co-1.svg"
                alt="Partner 1"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
          <div className="reveal reveal-delay-4">
            <div className="aspect-square flex items-center justify-center p-6 md:p-8 bg-light rounded-2xl">
              <img
                src="/co-2.svg"
                alt="Partner 2"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
