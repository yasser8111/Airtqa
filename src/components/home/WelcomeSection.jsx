import React from "react";

const WelcomeSection = () => {
  const items = [
    {
      title: "أهدافنا",
      desc: "توفير سكن مناسب للطلاب و الاهتمام بالتنمية والتاهيل للطلاب تهيئة الجو المناسب للطلاب و الارتقاء بالطلاب علميا وسلوكيا وثقافيا",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "رسالتنا",
      desc: "سكن طلابي يعمل على ايصال الخدمات الانسانية والتنموية للطلاب والارتقاء بهم فكريا وتربويا ليشاركوا في بناء مستقبل الوطن",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: "رؤيتنا",
      desc: "سكن طلابي يعمل على ايصال الخدمات الانسانية والتنموية للطلاب والارتقاء بهم فكريا وتربويا ليشاركوا في بناء مستقبل الوطن",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden" id="Welcome">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-30"></div>

      <div className="container-custom relative z-10 px-4">
        <div className="text-center mb-16">
          <img
            src="/welcame.svg"
            alt="أهلاً وسهلاً"
            className="h-24 md:h-28 w-auto mx-auto mb-4"
          />
          <div className="w-20 h-1 bg-gold mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col items-center text-center hover:-translate-y-1"
            >
              <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-white transition-all">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-dark mb-4">
                {item.title}
              </h3>
              <p className="text-muted leading-relaxed text-lg">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;