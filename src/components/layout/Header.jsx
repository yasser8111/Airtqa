import { useState } from "react";
import Button from "../common/Button";

function Header({ onNavigate }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "الرئيسية", id: "home" },
    { name: "من نحن", id: "#Welcome" },
    { name: "التواصل", id: "#contact" },
    { name: "الاخبار", id: "news" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur-md">
      <nav className="container-custom h-20 flex justify-between items-center px-4 relative">
        <div
          className="flex items-center gap-2 cursor-pointer relative z-50"
          onClick={() => {
            onNavigate("home");
            setIsMenuOpen(false);
          }}
        >
          <img src="/logo.svg" alt="Logo" className="h-10 md:h-12 w-auto" />
        </div>

        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.id}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(item.id);
                  setIsMenuOpen(false);
                }}
                className="text-muted hover:text-blue font-semibold transition-colors duration-200"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button - Added for completeness and to use setIsMenuOpen */}
        <button 
          className="md:hidden p-2 text-blue z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-20 left-0 w-full bg-white border-b border-gray-100 py-4 px-4 flex flex-col gap-4 md:hidden shadow-lg animate-in fade-in slide-in-from-top-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.id}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(item.id);
                  setIsMenuOpen(false);
                }}
                className="text-muted hover:text-blue font-semibold py-2 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        )}

        <div className="hidden md:block">
          <Button variant="primary">سجل الآن</Button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
