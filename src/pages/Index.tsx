import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/45d24f43-d6dc-4cb5-b8cb-94c595c377a0/files/e4b1680e-f63f-4f6a-9ee3-5c636d8a4051.jpg";
const AUTOMATION_IMG = "https://cdn.poehali.dev/projects/45d24f43-d6dc-4cb5-b8cb-94c595c377a0/files/5e53604f-6fde-4aa0-a9ef-0fc2181435a7.jpg";
const PORTFOLIO_IMG = "https://cdn.poehali.dev/projects/45d24f43-d6dc-4cb5-b8cb-94c595c377a0/files/fb3a0376-4e2a-4bc0-900c-711517cf0316.jpg";

const services = [
  {
    icon: "Zap",
    title: "Электромонтажные работы",
    desc: "Монтаж силовых линий, распределительных щитов, внутренней проводки жилых и промышленных объектов",
    color: "from-blue-500 to-sky-400",
  },
  {
    icon: "Settings",
    title: "Проектирование систем",
    desc: "Разработка проектной документации для электроустановок и систем автоматизации любой сложности",
    color: "from-sky-500 to-cyan-400",
  },
  {
    icon: "Cpu",
    title: "Монтаж автоматизации",
    desc: "Установка и настройка PLC, SCADA-систем, промышленных контроллеров и диспетчеризации",
    color: "from-cyan-500 to-blue-400",
  },
  {
    icon: "Shield",
    title: "Сервисное обслуживание",
    desc: "Плановое ТО, аварийное восстановление, диагностика и ремонт электрооборудования",
    color: "from-blue-600 to-sky-500",
  },
];

const catalog = [
  { icon: "Box", name: "Распределительные щиты", tag: "" },
  { icon: "Cpu", name: "Программируемые контроллеры", tag: "Siemens SIMATIC, Allen-Bradley, ОВЕН" },
  { icon: "Monitor", name: "SCADA / HMI панели", tag: "" },
  { icon: "Activity", name: "Частотные преобразователи", tag: "" },
  { icon: "Thermometer", name: "Датчики и измерительные приборы", tag: "" },
  { icon: "Wifi", name: "Системы диспетчеризации", tag: "" },
  { icon: "Lightbulb", name: "Умное освещение", tag: "" },
  { icon: "Lock", name: "Системы безопасности", tag: "" },
];

const portfolio = [
  { title: "Завод металлоконструкций", desc: "Полная автоматизация производственной линии, 48 точек управления", year: "2024", tag: "Промышленность" },
  { title: "Торговый центр «Меркурий»", desc: "Монтаж BMS системы, управление освещением и климатом 12 000 м²", year: "2024", tag: "Коммерция" },
  { title: "Котельная комплекса", desc: "Автоматизация котельного оборудования, диспетчеризация по GSM", year: "2023", tag: "Энергетика" },
  { title: "Жилой комплекс «Арктика»", desc: "Электромонтаж 240 квартир, умный дом, системы безопасности", year: "2023", tag: "Жилой сектор" },
  { title: "Молочный комбинат", desc: "SCADA-система управления технологическими процессами", year: "2023", tag: "Пищевая отрасль" },
  { title: "Логистический терминал", desc: "Силовой монтаж 2 МВт, система учёта электроэнергии", year: "2022", tag: "Логистика" },
];

const stats = [
  { value: "12+", label: "лет на рынке" },
  { value: "350+", label: "проектов завершено" },
  { value: "98%", label: "клиентов довольны" },
];

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function CircuitSVG() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
      <style>{`
        .circuit-line { stroke: #0ea5e9; stroke-width: 1.5; fill: none; stroke-dasharray: 1000; animation: circuit-flow 4s linear infinite; }
        .circuit-dot { fill: #0ea5e9; animation: spark 2s ease-in-out infinite; }
        @keyframes circuit-flow { 0% { stroke-dashoffset: 1000; } 100% { stroke-dashoffset: 0; } }
        @keyframes spark { 0%,100% { opacity:0.3; r:3; } 50% { opacity:1; r:5; } }
      `}</style>
      <path className="circuit-line" d="M0 150 H200 V100 H400 V200 H600 V150 H800" style={{ animationDelay: '0s' }} />
      <path className="circuit-line" d="M0 350 H150 V250 H350 V350 H500 V300 H800" style={{ animationDelay: '1s' }} />
      <path className="circuit-line" d="M0 500 H100 V450 H300 V500 H550 V480 H800" style={{ animationDelay: '2s' }} />
      <path className="circuit-line" d="M200 0 V100 H250 V200" style={{ animationDelay: '0.5s' }} />
      <path className="circuit-line" d="M500 0 V150 H450 V250 H550 V400" style={{ animationDelay: '1.5s' }} />
      <circle className="circuit-dot" cx="200" cy="150" r="4" style={{ animationDelay: '0s' }} />
      <circle className="circuit-dot" cx="400" cy="100" r="4" style={{ animationDelay: '0.3s' }} />
      <circle className="circuit-dot" cx="350" cy="250" r="4" style={{ animationDelay: '0.7s' }} />
      <circle className="circuit-dot" cx="500" cy="300" r="4" style={{ animationDelay: '1s' }} />
      <circle className="circuit-dot" cx="250" cy="200" r="4" style={{ animationDelay: '1.3s' }} />
      <circle className="circuit-dot" cx="550" cy="250" r="4" style={{ animationDelay: '1.7s' }} />
    </svg>
  );
}

export default function Index() {
  useReveal();
  const [activeSection, setActiveSection] = useState("home");
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactForm, setContactForm] = useState({ name: "", phone: "", message: "" });
  const [catalogFilter, setCatalogFilter] = useState("all");

  useEffect(() => {
    const onScroll = () => {
      setNavScrolled(window.scrollY > 50);
      const sections = ["home", "services", "catalog", "portfolio", "contacts"];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { id: "home", label: "Главная" },
    { id: "services", label: "Услуги" },
    { id: "catalog", label: "Каталог" },
    { id: "portfolio", label: "Портфолио" },
    { id: "contacts", label: "Контакты" },
  ];

  return (
    <div className="min-h-screen bg-white font-ibm overflow-x-hidden">

      {/* NAV */}
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
                className="block w-full text-left px-6 py-3 text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Электромонтажные работы" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c1e3a]/90 via-[#0c1e3a]/70 to-[#0c1e3a]/30" />
          <CircuitSVG />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-sky-400/20 border border-sky-400/30 rounded-full px-4 py-2 mb-6 animate-fade-in">
              <div className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              <span className="text-sky-300 text-sm font-medium">Профессиональные решения</span>
            </div>

            <h1 className="font-montserrat font-black text-white text-5xl md:text-7xl leading-tight mb-6 opacity-0 animate-fade-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              Электро<br />
              <span className="text-sky-400">монтаж</span> &<br />
              Автоматизация
            </h1>

            <p className="text-blue-100 text-lg md:text-xl leading-relaxed mb-10 opacity-0 animate-fade-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              Проектирование, монтаж и обслуживание электроустановок<br className="hidden md:block" /> и систем автоматизации любой сложности
            </p>

            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              <button onClick={() => scrollTo("services")} className="btn-primary px-8 py-4 rounded-xl font-montserrat font-bold text-base">
                Наши услуги
              </button>
              <button onClick={() => scrollTo("contacts")} className="px-8 py-4 rounded-xl font-montserrat font-semibold text-base text-white border-2 border-white/30 hover:border-sky-400 hover:text-sky-400 transition-all duration-300">
                Бесплатный расчёт
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 opacity-0 animate-fade-up" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
              {stats.map((s, i) => (
                <div key={i} className="text-center">
                  <div className="font-montserrat font-black text-3xl text-sky-400">{s.value}</div>
                  <div className="text-blue-200 text-sm mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <button onClick={() => scrollTo("services")} className="flex flex-col items-center gap-2 text-white/60 hover:text-sky-400 transition-colors">
            <span className="text-xs tracking-widest uppercase">Далее</span>
            <Icon name="ChevronDown" size={20} />
          </button>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 circuit-bg bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <span className="text-sky-500 font-medium text-sm tracking-widest uppercase">Что мы делаем</span>
            <h2 className="font-montserrat font-black text-4xl md:text-5xl text-slate-800 mt-3 mb-4">
              Наши <span className="gradient-text">услуги</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              Полный цикл работ — от проектирования до сервисного обслуживания
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <div
                key={i}
                className={`service-card glass-card rounded-2xl p-6 cursor-pointer reveal`}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-5 shadow-lg`}>
                  <Icon name={s.icon} size={26} className="text-white" />
                </div>
                <h3 className="font-montserrat font-bold text-slate-800 text-lg mb-3">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                <div className="mt-5 flex items-center gap-2 text-sky-500 text-sm font-medium hover:gap-3 transition-all cursor-pointer">
                  <span>Подробнее</span>
                  <Icon name="ArrowRight" size={14} />
                </div>
              </div>
            ))}
          </div>

          {/* About block */}
          <div className="mt-20 grid lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <img src={AUTOMATION_IMG} alt="Автоматизация" className="rounded-3xl shadow-2xl w-full h-72 object-cover" />
            </div>
            <div className="reveal" style={{ animationDelay: '0.2s' }}>
              <span className="text-sky-500 font-medium text-sm tracking-widest uppercase">О компании</span>
              <h3 className="font-montserrat font-black text-3xl md:text-4xl text-slate-800 mt-3 mb-6">
                Надёжные решения<br />для вашего бизнеса
              </h3>
              <div className="space-y-4 text-slate-600">
                <p>Более 12 лет мы реализуем проекты в сфере электромонтажа и автоматизации — от небольших офисов до крупных промышленных предприятий.</p>
                <p>Наша команда — дипломированные инженеры.</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {["СРО допуск", "ISO 9001"].map((badge) => (
                  <span key={badge} className="px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-blue-700 text-sm font-medium">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATALOG */}
      <section id="catalog" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <span className="text-sky-500 font-medium text-sm tracking-widest uppercase">Оборудование и системы</span>
            <h2 className="font-montserrat font-black text-4xl md:text-5xl text-slate-800 mt-3 mb-4">
              Каталог <span className="gradient-text">оборудования</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              Работаем с ведущими мировыми производителями электротехнического оборудования
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {catalog.map((item, i) => (
              <div
                key={i}
                className="reveal group border border-slate-100 rounded-2xl p-6 hover:border-sky-300 hover:bg-sky-50/50 transition-all duration-300 cursor-pointer"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-sky-100 group-hover:from-blue-200 group-hover:to-sky-200 flex items-center justify-center mb-4 transition-all duration-300">
                  <Icon name={item.icon} size={22} className="text-blue-600" />
                </div>
                <h4 className="font-montserrat font-bold text-slate-800 text-base mb-2">{item.name}</h4>
                <p className="text-slate-400 text-xs leading-relaxed">{item.tag}</p>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sky-500 text-sm font-medium flex items-center gap-1">
                    Запрос цены <Icon name="ArrowRight" size={12} />
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center reveal">
            <div className="bg-gradient-to-r from-blue-600 to-sky-500 rounded-3xl p-10 text-white relative overflow-hidden">
              <div className="absolute inset-0 animate-shimmer" />
              <h3 className="font-montserrat font-black text-3xl mb-3 relative z-10">
                Нужно специфическое оборудование?
              </h3>
              <p className="text-blue-100 mb-6 relative z-10">
                Мы подберём и поставим любое электротехническое оборудование под ваш проект
              </p>
              <button
                onClick={() => scrollTo("contacts")}
                className="relative z-10 bg-white text-blue-700 font-montserrat font-bold px-8 py-3.5 rounded-xl hover:bg-blue-50 transition-colors"
              >
                Оставить запрос
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-24 bg-slate-50 circuit-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <span className="text-sky-500 font-medium text-sm tracking-widest uppercase">Наши работы</span>
            <h2 className="font-montserrat font-black text-4xl md:text-5xl text-slate-800 mt-3 mb-4">
              <span className="gradient-text">Портфолио</span> проектов
            </h2>
          </div>

          <div className="mb-8 flex justify-center reveal">
            <div className="flex flex-wrap gap-3 justify-center">
              <img src={PORTFOLIO_IMG} alt="Portfolio" className="w-full rounded-3xl shadow-xl mb-8 h-64 object-cover" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.map((p, i) => (
              <div
                key={i}
                className="reveal service-card bg-white rounded-2xl p-6 border border-slate-100 shadow-sm"
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs font-semibold text-sky-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
                    {p.tag}
                  </span>
                  <span className="text-slate-400 text-sm">{p.year}</span>
                </div>
                <h4 className="font-montserrat font-bold text-slate-800 text-lg mb-2">{p.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map(s => <Icon key={s} name="Star" size={14} className="text-yellow-400 fill-yellow-400" />)}
                  </div>
                  <button className="text-sky-500 text-sm font-medium hover:text-sky-700 transition-colors flex items-center gap-1">
                    Детали <Icon name="ChevronRight" size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <span className="text-sky-500 font-medium text-sm tracking-widest uppercase">Связаться с нами</span>
            <h2 className="font-montserrat font-black text-4xl md:text-5xl text-slate-800 mt-3 mb-4">
              Обсудим ваш <span className="gradient-text">проект</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              Оставьте заявку и мы свяжемся с вами в течение часа
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="reveal space-y-6">
              {[
                { icon: "Phone", label: "Телефон", value: "+7 (920) 015-94-93", sub: "Звонок бесплатный" },
                { icon: "Mail", label: "Email", value: "Elektroproekt52@yandex.ru", sub: "Ответим в течение часа" },
                { icon: "MapPin", label: "Адрес", value: "Нижегородская область, г. Дзержинск", sub: "Пн–Пт, 9:00–18:00" },
              ].map((c, i) => (
                <div key={i} className="flex items-start gap-4 p-5 rounded-2xl border border-slate-100 hover:border-sky-200 hover:bg-sky-50/40 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-sky-100 flex items-center justify-center flex-shrink-0">
                    <Icon name={c.icon} size={22} className="text-blue-600" />
                  </div>
                  <div>
                    <div className="text-slate-400 text-xs mb-1">{c.label}</div>
                    <div className="font-montserrat font-bold text-slate-800 text-lg">{c.value}</div>
                    <div className="text-slate-400 text-sm">{c.sub}</div>
                  </div>
                </div>
              ))}

            </div>

            {/* Form */}
            <div className="reveal glass-card rounded-3xl p-8 shadow-lg border border-blue-50" style={{ animationDelay: '0.2s' }}>
              <h3 className="font-montserrat font-bold text-slate-800 text-2xl mb-6">Оставить заявку</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-slate-600 text-sm font-medium mb-2">Ваше имя</label>
                  <input
                    type="text"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    placeholder="Иван Иванов"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-100 text-slate-800 placeholder-slate-400 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-slate-600 text-sm font-medium mb-2">Телефон</label>
                  <input
                    type="tel"
                    value={contactForm.phone}
                    onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                    placeholder="+7 (___) ___-__-__"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-100 text-slate-800 placeholder-slate-400 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-slate-600 text-sm font-medium mb-2">Описание проекта</label>
                  <textarea
                    rows={4}
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    placeholder="Расскажите о вашем объекте и задаче..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-100 text-slate-800 placeholder-slate-400 transition-all resize-none"
                  />
                </div>
                <button className="btn-primary w-full py-4 rounded-xl font-montserrat font-bold text-base text-white mt-2">
                  Отправить заявку
                </button>
                <p className="text-center text-slate-400 text-xs">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0c1e3a] text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-sky-400 flex items-center justify-center">
                  <Icon name="Zap" size={18} className="text-white" />
                </div>
                <span className="font-montserrat font-black text-xl">
                  Электро<span className="text-sky-400">Проект</span>
                </span>
              </div>
              <p className="text-blue-200 text-sm max-w-xs leading-relaxed">
                Профессиональные электромонтажные работы и автоматизация с 2012 года
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
              <div>
                <h5 className="font-montserrat font-bold text-white mb-3">Услуги</h5>
                {["Электромонтаж", "Проектирование", "Автоматизация", "Обслуживание"].map(l => (
                  <div key={l} className="text-blue-300 hover:text-sky-400 cursor-pointer transition-colors mb-2">{l}</div>
                ))}
              </div>
              <div>
                <h5 className="font-montserrat font-bold text-white mb-3">Каталог</h5>
                {["Щиты", "Контроллеры", "SCADA", "Датчики"].map(l => (
                  <div key={l} className="text-blue-300 hover:text-sky-400 cursor-pointer transition-colors mb-2">{l}</div>
                ))}
              </div>
              <div>
                <h5 className="font-montserrat font-bold text-white mb-3">Контакты</h5>
                <div className="text-blue-300 mb-2">+7 (920) 015-94-93</div>
                <div className="text-blue-300 mb-2">Elektroproekt52@yandex.ru</div>
                <div className="text-blue-300">Москва, ул. Промышленная, 15</div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-blue-400 text-sm">
            <span>© 2024 ЭлектроПроект. Все права защищены.</span>
            <div className="flex gap-4">
              <span className="hover:text-sky-400 cursor-pointer transition-colors">Политика конфиденциальности</span>
              <span className="hover:text-sky-400 cursor-pointer transition-colors">СРО допуск</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}