import { useState } from "react";
import Button from "../common/Button";

function Header({ onNavigate }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "الرئيسية", id: "home" },
    { name: "من نحن", id: "about" },
    { name: "التواصل", id: "contact" },
    { name: "الاخبار", id: "news" },
  ];

  const handleClick = (e, id) => {
    e.preventDefault();
    if (id === "home" || id === "news") {
      onNavigate(id);
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur-md">
      <nav className="container-custom h-20 flex justify-between items-center px-4 relative">
        <div 
          className="flex items-center gap-2 cursor-pointer relative z-50" 
          onClick={() => { onNavigate("home"); setIsMenuOpen(false); }}
        >
          <img src="/logo.svg" alt="Logo" className="h-10 md:h-12 w-auto" />
        </div>

        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href="#"
                onClick={(e) => handleClick(e, item.id)}
                className="text-muted hover:text-blue font-semibold transition-colors duration-200"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button variant="primary">سجل الآن</Button>
        </div>

        <button 
          className="md:hidden p-2 text-blue focus:outline-none relative z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <div 
          className={`fixed inset-0 z-40 flex flex-col transition-all duration-500 md:hidden bg-white ${
            isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white via-blue/5 to-white -z-10"></div>
          
          <div className="absolute top-[-5%] left-[-5%] w-72 h-72 bg-gold/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-[-5%] right-[-5%] w-72 h-72 bg-blue/5 rounded-full blur-3xl animate-pulse"></div>
          
          <div className="relative flex flex-col h-full overflow-y-auto">
            <div className="min-h-[120px]"></div>
            
            <div className="flex-1 flex flex-col justify-center px-6">
              <ul className="flex flex-col gap-2">
                {navItems.map((item, index) => (
                  <li 
                    key={item.id} 
                    className={`transition-all duration-500 ${
                      isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <a
                      href="#"
                      onClick={(e) => handleClick(e, item.id)}
                      className="group flex items-center justify-between py-4 px-4 rounded-2xl hover:bg-blue/5 transition-all duration-300"
                    >
                      <span className="text-2xl sm:text-3xl font-bold text-blue group-hover:text-gold transition-colors">
                        {item.name}
                      </span>
                      <span className="text-xl text-gold opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0">
                        ←
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className={`p-8 w-full transition-all duration-700 delay-500 ${
              isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}>
              <Button variant="primary" className="w-full py-4 text-xl shadow-xl shadow-blue/20 rounded-xl">
                سجل الآن
              </Button>
            </div>

            <div className="h-8"></div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;