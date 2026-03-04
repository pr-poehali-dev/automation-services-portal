import Icon from "@/components/ui/icon";

interface NavbarProps {
  activeSection: string;
  navScrolled: boolean;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  scrollTo: (id: string) => void;
}

const navLinks = [
  { id: "home", label: "Главная" },
  { id: "services", label: "Услуги" },
  { id: "catalog", label: "Каталог" },
  { id: "portfolio", label: "Портфолио" },
  { id: "contacts", label: "Контакты" },
];

export default function Navbar({ activeSection, navScrolled, mobileMenuOpen, setMobileMenuOpen, scrollTo }: NavbarProps) {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navScrolled ? "nav-scrolled py-3" : "py-5 bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo("home")}>
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-sky-400 flex items-center justify-center animate-pulse-glow">
            <Icon name="Zap" size={18} className="text-white" />
          </div>
          <span className="font-montserrat font-800 text-xl text-slate-800">
            Электро<span className="gradient-text font-black">Проект</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`electric-line text-sm font-medium transition-colors duration-200 pb-1 ${
                activeSection === link.id ? "text-blue-600" : "text-slate-600 hover:text-blue-600"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => scrollTo("contacts")}
          className="hidden md:block btn-primary px-5 py-2.5 rounded-lg text-sm font-montserrat font-semibold"
        >
          Получить консультацию
        </button>

        <button className="md:hidden text-slate-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl shadow-xl border-t border-blue-50 py-4 animate-fade-in">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="w-full text-left px-6 py-3 text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors font-medium"
            >
              {link.label}
            </button>
          ))}
          <div className="px-6 pt-3">
            <button
              onClick={() => scrollTo("contacts")}
              className="btn-primary w-full py-3 rounded-lg font-montserrat font-semibold text-sm"
            >
              Получить консультацию
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
