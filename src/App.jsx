import { useEffect, useState } from "react";
import Home from "./pages/Home";
import NewPage from "./pages/newPage";
import NewsDetails from "./pages/newDetiles";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedNewsId, setSelectedNewsId] = useState(null);

  const handleNavigate = (page, id = null) => {
    setCurrentPage(page);
    if (id) setSelectedNewsId(id);
    window.scrollTo(0, 0);
  };

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

    const observer = initReveal();
    return () => observer.disconnect();
  }, [currentPage, selectedNewsId]);

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
