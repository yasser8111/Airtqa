import React from "react";
import Button from "../components/common/Button";

const ErrorPage = ({ onNavigate }) => {
  return (
    <div className="min-h-[calc(100dvh-80px)] bg-white flex flex-col items-center justify-center p-6 relative overflow-hidden text-right" dir="rtl">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue/5 rounded-full blur-[150px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[150px] -z-10 -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-2xl w-full text-center space-y-8 relative z-10">
        {/* Large 404 Illustration */}
        <div className="relative inline-block">
          <h1 className="text-[150px] md:text-[220px] font-black leading-none bg-gradient-to-b from-blue to-blue/20 bg-clip-text text-transparent opacity-10 select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl md:text-6xl font-extrabold text-blue reveal">عذراً !</span>
          </div>
        </div>

        <div className="space-y-4 reveal reveal-delay-1">
          <h2 className="text-2xl md:text-3xl font-bold text-dark">
            الصفحة التي تبحث عنها غير موجودة
          </h2>
          <p className="text-blue/50 text-lg md:text-xl max-w-md mx-auto leading-relaxed">
            ربما تم نقل الصفحة أو حذفها، أو قد يكون هناك خطأ في الرابط الذي استخدمته.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 reveal reveal-delay-2">
          <Button 
            variant="primary" 
            className="px-10 py-4 text-xl shadow-2xl shadow-blue/20 w-full sm:w-auto"
            onClick={() => onNavigate && onNavigate("home")}
          >
            العودة للرئيسية
          </Button>
          <Button 
            variant="outline" 
            className="px-10 py-4 text-xl w-full sm:w-auto"
            onClick={() => window.history.back()}
          >
            الرجوع للخلف
          </Button>
        </div>

        {/* Support Info */}
        <div className="pt-12 border-t border-gray-100 mt-12 reveal reveal-delay-3">
          <p className="text-blue/30 font-medium">
            هل تعتقد أن هذا خطأ؟ <a href="#" className="text-gold hover:underline">تواصل مع الدعم الفني</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
