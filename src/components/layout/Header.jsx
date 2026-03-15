import Button from "../common/Button";

function Header({ onNavigate }) {
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
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <nav className="container-custom h-20 flex justify-between items-center px-4">
        {/* Logo Section */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate("home")}>
          <img src="/logo.svg" alt="الشعار" className="h-12 w-auto" />
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href="#"
                onClick={(e) => handleClick(e, item.id)}
                className="text-muted hover:text-blue font-medium transition-colors duration-200"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Action Button */}
        <Button variant="primary">سجل الآن</Button>
      </nav>
    </header>
  );
}

export default Header;
