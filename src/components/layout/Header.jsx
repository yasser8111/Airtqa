import Button from "../common/Button";

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <nav className="container-custom h-20 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="الشعار" className="h-12 w-auto" />
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-8">
          {["الرئيسية", "من نحن", "التواصل", "الاخبار"].map((item) => (
            <li key={item}>
              <a
                href="#"
                className="text-muted hover:text-blue font-medium transition-colors duration-200"
              >
                {item}
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
