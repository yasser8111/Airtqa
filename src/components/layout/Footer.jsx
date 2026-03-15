import React from "react";

const Footer = () => {
  return (
    <footer className="bg-light pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Brand */}
          <div className="flex flex-col items-start">
            <img src="/logo.svg" alt="الشعار" className="mb-6 h-12 w-auto" />
            <p className="text-blue/70 max-w-xs">
              مركز الارتقاء الجامعي - لنرتقي بأخلاقنا وعلمنا نحو مستقبل أفضل.
            </p>
          </div>

          {/* Column 2: Links */}
          <div>
            <h3 className="text-xl font-bold text-blue mb-8">روابط سريعة</h3>
            <ul className="flex flex-col gap-5">
              <li>
                <a
                  href="#"
                  className="text-blue/60 hover:text-gold transition-colors font-medium"
                >
                  الرئيسية
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue/60 hover:text-gold transition-colors font-medium"
                >
                  من نحن
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue/60 hover:text-gold transition-colors font-medium"
                >
                  التواصل
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue/60 hover:text-gold transition-colors font-medium"
                >
                  الأخبار
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-xl font-bold text-blue mb-8">تواصل معنا</h3>
            <div className="flex flex-col gap-6">
              {/* Location */}
              <div className="flex items-center gap-4 text-blue/60">
                <div className="w-10 h-10 rounded-xl bg-gold/5 flex items-center justify-center text-gold">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <span className="font-medium">حضرموت - المكلا - المساكن</span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 text-blue/60">
                <div className="w-10 h-10 rounded-xl bg-gold/5 flex items-center justify-center text-gold">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <span className="font-medium" dir="ltr">+967 774 637 441</span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 text-blue/60">
                <div className="w-10 h-10 rounded-xl bg-gold/5 flex items-center justify-center text-gold">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <span className="font-medium">mrkzalartgalltnmyt@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-blue/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue/40 font-medium">
          <p>
            © {new Date().getFullYear()} مركز الارتقاء الجامعي. جميع الحقوق
            محفوظة.
          </p>
          <p>Developed & Designed by Yasser Al-Nahdi & Abdullah Brishan</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
