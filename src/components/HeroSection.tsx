import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/45d24f43-d6dc-4cb5-b8cb-94c595c377a0/files/e4b1680e-f63f-4f6a-9ee3-5c636d8a4051.jpg";
const AUTOMATION_IMG = "https://cdn.poehali.dev/projects/45d24f43-d6dc-4cb5-b8cb-94c595c377a0/files/5e53604f-6fde-4aa0-a9ef-0fc2181435a7.jpg";

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

const stats = [
  { value: "12+", label: "лет на рынке" },
  { value: "350+", label: "проектов завершено" },
  { value: "98%", label: "клиентов довольны" },
];

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

interface HeroSectionProps {
  scrollTo: (id: string) => void;
}

export default function HeroSection({ scrollTo }: HeroSectionProps) {
  return (
    <>
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
    </>
  );
}
