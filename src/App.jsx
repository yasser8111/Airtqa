import { useEffect, lazy, Suspense } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Home from "./pages/Home";

// Lazy load non-critical pages for code splitting
const News = lazy(() => import("./pages/News"));
const NewsDetails = lazy(() => import("./pages/NewsDetails"));

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
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

    // Small delay to let DOM settle after route change
    const timer = setTimeout(() => {
      initReveal();
    }, 50);

    return () => {
      clearTimeout(timer);
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
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-gray-200 border-t-blue rounded-full animate-spin"></div>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home onNavigate={handleNavigate} />} />
          <Route path="/news" element={<News onNavigate={handleNavigate} />} />
          <Route path="/news/:id" element={<NewsDetails onNavigate={handleNavigate} />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
