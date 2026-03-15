import React from "react";

const LoadingPage = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue/5 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-gold/5 rounded-full blur-[120px] animate-pulse"></div>

      <div className="relative flex flex-col items-center">
        {/* Animated Logo Container */}
        <div className="relative mb-8 animate-bounce-slow">
          <div className="absolute inset-0 bg-gold/20 rounded-full blur-2xl scale-150 animate-pulse"></div>
          <img src="/logo.svg" alt="مركز الارتقاء" className="h-24 md:h-32 w-auto relative z-10" />
        </div>

        {/* Professional Loading Indicator */}
        <div className="flex flex-col items-center gap-4">
          <div className="w-48 h-1 bg-gray-100 rounded-full overflow-hidden relative">
            <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue to-gold w-1/2 rounded-full animate-progress shadow-[0_0_10px_rgba(212,175,55,0.5)]"></div>
          </div>
          <span className="text-blue/40 font-bold text-sm tracking-[0.2em] animate-pulse uppercase">
            جاري التحميل ...
          </span>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes progress {
          0% { left: -50%; width: 30%; }
          50% { left: 25%; width: 50%; }
          100% { left: 100%; width: 30%; }
        }
        .animate-progress {
          animation: progress 2s infinite ease-in-out;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite ease-in-out;
        }
      `}} />
    </div>
  );
};

export default LoadingPage;
