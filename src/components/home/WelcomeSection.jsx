import React from "react";

const WelcomeSection = () => {
  return (
    <section className="py-24 bg-linear-to-b from-white to-light/50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

      <div className="container-custom flex flex-col items-center text-center relative z-10">
        {/* Title / Calligraphy Placeholder */}
        <div className="mb-16 transform hover:scale-105 transition-transform duration-500">
          {/* Using text for now as we don't have the calligraphy SVGs */}
          <img
            src="/welcame.svg"
            alt="أهلاً وسهلاً ومرحباً بكم"
            className="h-32 w-auto mx-auto drop-shadow-sm"
          />
          <div className="h-1 w-32 bg-gold mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-10 max-w-4xl w-full px-4">
          {/* Vision */}
          <div className="flex flex-col md:flex-row-reverse items-start gap-6 group hover:bg-white p-6 rounded-2xl transition-all duration-300 hover:shadow-lg border border-transparent hover:border-gray-100">
            <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0 text-gold group-hover:bg-gold group-hover:text-white transition-colors duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </div>
            <div className="text-right flex-1">
              <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-blue transition-colors">
                رؤيتنا
              </h3>
              <p className="text-muted leading-loose text-lg">
                نزرع امالنا الى اعداد جيل من الطلاب المؤهلين لتنمية مجتمعهم
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="flex flex-col md:flex-row-reverse items-start gap-6 group hover:bg-white p-6 rounded-2xl transition-all duration-300 hover:shadow-lg border border-transparent hover:border-gray-100">
            <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0 text-gold group-hover:bg-gold group-hover:text-white transition-colors duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <div className="text-right flex-1">
              <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-blue transition-colors">
                رسالتنا
              </h3>
              <p className="text-muted leading-loose text-lg">
                سنكون دوماً نعمل على ايصال الخدمات الانسانية والتنموية لطلاب
                بالاتحاد بهم فكراً وتربوي ليشاركوا في بناء مستقبل الوطن
              </p>
            </div>
          </div>

          {/* Goals */}
          <div className="flex flex-col md:flex-row-reverse items-start gap-6 group hover:bg-white p-6 rounded-2xl transition-all duration-300 hover:shadow-lg border border-transparent hover:border-gray-100">
            <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0 text-gold group-hover:bg-gold group-hover:text-white transition-colors duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="text-right flex-1">
              <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-blue transition-colors">
                أهدافنا
              </h3>
              <p className="text-muted leading-loose text-lg">
                توفير بيئة مناسبة للطلاب للدراسة والتحصيل العلمي وتنمية الموهب
                لدى الطلاب للابداع بالجانب علماً وسلوكاً وثقافياً لتعم روح
                المحبة والاخوة بين الطلاب
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
