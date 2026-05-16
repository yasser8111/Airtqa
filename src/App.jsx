import { useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Lenis from "lenis";
import Home from "./pages/Home";
import News from "./pages/News";
import NewsDetails from "./pages/NewsDetails";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    let rafId;

    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    const initReveal = () => {
      const observerOptions = { threshold: 0.1 };
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

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      observer.disconnect();
    };
  }, [location.pathname]);

  useEffect(() => {
    // Scroll to top on route change unless there is a hash
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const targetId = location.hash.substring(1);
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          const elementRect = el.getBoundingClientRect();
          const absoluteElementTop = elementRect.top + window.pageYOffset;
          const middleOffset = (window.innerHeight - elementRect.height) / 2;

          const finalOffset =
            elementRect.height > window.innerHeight
              ? absoluteElementTop - 100
              : absoluteElementTop - middleOffset;

          window.scrollTo({
            top: finalOffset,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  }, [location]);

  const handleNavigate = (page, id = null) => {
    if (page.startsWith("#")) {
      if (location.pathname !== "/") {
        navigate(`/${page}`);
      } else {
        navigate(page); // Just update hash
      }
      return;
    }

    if (page === "home") {
      navigate("/");
    } else if (page === "news") {
      navigate("/news");
    } else if (page === "details" && id) {
      navigate(`/news/${id}`);
    }
  };

  return (
    <div className="min-h-screen bg-white text-dark font-sans" dir="rtl">
      <Routes>
        <Route path="/" element={<Home onNavigate={handleNavigate} />} />
        <Route path="/news" element={<News onNavigate={handleNavigate} />} />
        <Route path="/news/:id" element={<NewsDetails onNavigate={handleNavigate} />} />
      </Routes>
    </div>
  );
}

export default App;
