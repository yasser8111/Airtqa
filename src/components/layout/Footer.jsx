import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-10 relative z-20">
      <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Right Side: Logos */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            {/* Placeholder for SCS Logo */}
            <img
              src="/logo.svg"
              alt="Alrtiqaa University Center"
              className="h-16 w-auto"
            />
          </div>
        </div>

        {/* Left Side: Contact */}
        <div className="flex flex-col items-end gap-3 text-sm text-muted">
          <div className="flex items-center gap-2 hover:text-blue transition-colors cursor-pointer">
            <span>صنعاء - المنطقة - الشارع</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gold"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="flex items-center gap-2 hover:text-blue transition-colors cursor-pointer">
            <span dir="ltr">+967 77x xxx xxx</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gold"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
          </div>
          <div className="flex items-center gap-2 hover:text-blue transition-colors cursor-pointer">
            <span dir="ltr">info@alrtiqaa.com</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gold"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="container-custom mt-8 pt-6 border-t border-gray-50 text-center text-xs text-muted flex justify-between items-center">
        <span>
          Develop by <span className="text-gold font-bold">Yasser Al-nahdi</span>
        </span>
        <span>
          &copy; {new Date().getFullYear()} مركز الارتقاء الجامعي. جميع الحقوق
          محفوظة.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
