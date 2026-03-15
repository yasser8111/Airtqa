import { useEffect, useState } from "react";
import Lenis from "lenis";
import Home from "./pages/Home";
import NewPage from "./pages/newPage";
import NewsDetails from "./pages/newDetiles";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedNewsId, setSelectedNewsId] = useState(null);

  useEffect(() => {
    // 1. تهيئة Lenis للسكرول الناعم
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // 2. تهيئة أنيميشن الظهور (Reveal)
    const initReveal = () => {
      const observerOptions = { threshold: 0.5 };
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      }, observerOptions);

      const revealElements = document.querySelectorAll(".reveal");
      revealElements.forEach((el) => observer.observe(el));
      return observer;
    };

    const observer = initReveal();

    // العودة لأعلى الصفحة عند تغيير الصفحة باستخدام Lenis
    lenis.scrollTo(0, { immediate: true });

    return () => {
      lenis.destroy();
      observer.disconnect();
    };
  }, [currentPage, selectedNewsId]);

  const handleNavigate = (page, id = null) => {
    setCurrentPage(page);
    if (id) setSelectedNewsId(id);
  };

  return (
    <div className="min-h-screen bg-white text-dark font-sans" dir="rtl">
      {currentPage === "home" && (
        <Home onNavigate={handleNavigate} />
      )}
      {currentPage === "news" && (
        <NewPage onNavigate={handleNavigate} />
      )}
      {currentPage === "details" && (
        <NewsDetails onNavigate={handleNavigate} newsId={selectedNewsId} />
      )}
    </div>
  );
}

export default App;
