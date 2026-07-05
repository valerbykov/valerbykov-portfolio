import { useState, useEffect } from "react";

/* ---------------- content ---------------- */
const T = {
  en: {
    nav: { work: "Work", project: "Project", contact: "Contact" },
    heroEyebrow: "Product Manager · PMP · PMI-ACP",
    heroLead: "I don't just manage products. I ",
    heroAccent: "ship",
    heroTail: " them.",
    heroSub1: "I turn ideas into working apps on an AI-assisted stack — ",
    heroSub2: "scoped, built, and launched to the App Store by one person.",
    photoRole: "Idea → App Store",
    stages: ["Idea", "Build", "Launch", "App Store"],
    workEyebrow: "What I do",
    workTitle: "Shipping, end to end",
    services: [
      ["Ship a real MVP", "From idea to a working web app or PWA on React + Supabase — scope, data model, build, deploy. One fixed price, one person, no team to assemble."],
      ["Web to mobile & store release", "Wrap an existing web app into iOS and Android builds with Capacitor and take it all the way through store submission."],
      ["AI automation & agentic workflows", "n8n pipelines, LLM-in-the-loop processes, and document-processing agents that take real work off your plate."],
      ["Product rescue", "I step into a stalled build as a PM with hands: restore control over scope, unblock delivery, and get the release out."],
    ],
    flagEyebrow: "Flagship — built solo",
    flagTitle: "PadelPack",
    flagDesc: "A live league app I conceived, designed, built, and shipped alone: automated scheduling, live standings, player profiles, guest invites, and a natural-language admin layer with a human confirmation step before anything is written to the database.",
    flagStatus: "iOS + Android — in internal store testing (Google Play & App Store)",
    caseLink: "View case study →",
    bgEyebrow: "Background",
    bgTitle: "Management meets making",
    bgCells: [
      ["Certified", "PMP & PMI-ACP project manager"],
      ["Delivered", "Large-scale ERP, BI/DWH & CRM implementations"],
      ["Discipline", "Scope control, risk analysis, stakeholder delivery"],
      ["Tooling", "AI-native development as a daily driver, not an experiment"],
    ],
    fitBest: "Best fit:",
    fitBestText: " MVPs, PWAs, cross-platform mobile via Capacitor, internal tools, and AI automation. ",
    fitNo: "Not my lane:",
    fitNoText: " large performance- or security-critical engineering that needs a senior software engineer — and I'll tell you so up front rather than waste your budget.",
    contactEyebrow: "Let's talk",
    contactTitle: "Have something\nto ship?",
    contactAlt1: "Or find me on ",
    contactAlt2: ". Based remote · working across RU & international.",
    footerBuilt: "Built solo — of course.",
    /* case study */
    caseBack: "← Back to home",
    caseEyebrow: "Case study · solo product",
    caseSubtitle: "Concept to app stores, one person",
    caseOverview: "A padel community needed a way to run recurring leagues without spreadsheets and group-chat chaos. I built the whole product solo — from the data model to the mobile builds now in store review.",
    caseShotLabel: "Screenshot",
    caseShotHint: "replace in public/",
    caseBlocks: [
      ["The problem", "Manual scheduling, results scattered across chats, and no single source of truth for standings. It didn't scale past a handful of players."],
      ["What I built", "A full product: automated round-robin scheduling, live standings and ratings, player profiles and history, and guest-invite flows — on web first, then packaged for mobile."],
      ["The AI admin layer", "Admins type a request in plain language. The system proposes the exact change and waits for a human confirmation before writing anything to the database — speed without losing control."],
      ["Status", "Live with real players on the web app. iOS and Android builds are in internal testing with Google Play and the App Store."],
    ],
    caseStackTitle: "Stack",
    caseRoleTitle: "Role",
    caseRole: "Solo — product, design, build, and release.",
  },
  ru: {
    nav: { work: "Услуги", project: "Проект", contact: "Контакт" },
    heroEyebrow: "Проджект-менеджер · PMP · PMI-ACP",
    heroLead: "Я не просто веду продукты. Я ",
    heroAccent: "довожу",
    heroTail: " их до релиза.",
    heroSub1: "Превращаю идеи в работающие приложения на AI-стеке — ",
    heroSub2: "один человек ставит задачу, собирает и доводит до App Store.",
    photoRole: "Идея → App Store",
    stages: ["Идея", "Сборка", "Запуск", "App Store"],
    workEyebrow: "Что делаю",
    workTitle: "Довожу до конца, целиком",
    services: [
      ["Собрать реальный MVP", "От идеи до работающего веб-приложения или PWA на React + Supabase: постановка, модель данных, сборка, деплой. Один человек, фиксированная цена, без сборки команды."],
      ["Веб → мобильное и выкладка в сторы", "Упакую готовое веб-приложение в сборки под iOS и Android на Capacitor и проведу через публикацию в сторах."],
      ["Автоматизация и AI-воркфлоу", "Пайплайны на n8n, процессы с LLM-в-контуре и агенты для обработки документов, которые снимают рутину."],
      ["Разбор застрявших проектов", "Вхожу как PM с руками: навожу порядок в скоупе, снимаю блокеры и довожу до релиза."],
    ],
    flagEyebrow: "Флагман — сделано в одиночку",
    flagTitle: "PadelPack",
    flagDesc: "Живое приложение лиги, которое я придумал, спроектировал, собрал и запустил один: автоматическое расписание, живые рейтинги, профили игроков, гостевые инвайты и NL-интерфейс администратора с подтверждением человеком перед любой записью в базу.",
    flagStatus: "iOS + Android — на внутреннем тестировании в сторах (Google Play и App Store)",
    caseLink: "Смотреть кейс →",
    bgEyebrow: "Опыт",
    bgTitle: "Управление плюс руки",
    bgCells: [
      ["Сертификация", "Проджект-менеджер с PMP и PMI-ACP"],
      ["Внедрял", "Крупные внедрения ERP, BI/DWH и CRM"],
      ["Дисциплина", "Управление скоупом, анализ рисков, работа со стейкхолдерами"],
      ["Инструменты", "AI-разработка как ежедневная работа, а не эксперимент"],
    ],
    fitBest: "Хорошо подхожу:",
    fitBestText: " MVP, PWA, кроссплатформенные мобильные на Capacitor, внутренние инструменты и AI-автоматизация. ",
    fitNo: "Не мой профиль:",
    fitNoText: " нагруженная или security-critical инженерия, которой нужен сильный software-инженер — скажу об этом сразу, а не потрачу бюджет впустую.",
    contactEyebrow: "Давай обсудим",
    contactTitle: "Есть что\nзапустить?",
    contactAlt1: "Или найди меня на ",
    contactAlt2: ". Работаю удалённо — по РФ и международно.",
    footerBuilt: "Сделано в одиночку — а как же.",
    /* case study */
    caseBack: "← На главную",
    caseEyebrow: "Кейс · сольный продукт",
    caseSubtitle: "От идеи до сторов, один человек",
    caseOverview: "Сообществу падела нужен был способ вести регулярные лиги без таблиц и хаоса в чатах. Я собрал весь продукт один — от модели данных до мобильных сборок, которые сейчас на ревью в сторах.",
    caseShotLabel: "Скриншот",
    caseShotHint: "заменить в public/",
    caseBlocks: [
      ["Проблема", "Расписание вручную, результаты разбросаны по чатам, нет единого источника правды по рейтингам. Дальше горстки игроков это не масштабировалось."],
      ["Что сделал", "Полноценный продукт: автоматическое расписание по круговой системе, живые рейтинги, профили и история игроков, гостевые инвайты — сначала на вебе, затем упаковано под мобильные."],
      ["AI-администрирование", "Администратор пишет запрос обычным языком. Система предлагает точное изменение и ждёт подтверждения человеком перед любой записью в базу — скорость без потери контроля."],
      ["Статус", "Работает с живыми игроками в веб-версии. Сборки под iOS и Android — на внутреннем тестировании в Google Play и App Store."],
    ],
    caseStackTitle: "Стек",
    caseRoleTitle: "Роль",
    caseRole: "Один — продукт, дизайн, разработка и релиз.",
  },
};

const STACK = ["Vite", "React", "Supabase", "Postgres · RLS", "Edge Functions", "Storage", "Capacitor"];

/* fill in when the profile is live; empty string hides the line */
const UPWORK_URL = "";

const SHOTS = [1, 2, 3, 4, 5, 6, 7].map((n) => `/shot${n}.jpg`);

/* ---------------- styles ---------------- */
const css = `
:root{
  --ink:#0A2623; --ink-2:#0F332F; --panel:#12403A;
  --paper:#F2EDE3; --muted:#8FA9A3; --accent:#E8A33D; --accent-soft:#f0c078;
  --line:rgba(242,237,227,.12); --line-strong:rgba(242,237,227,.28); --maxw:1080px;
}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
:root{color-scheme:dark}
.pf{background:var(--ink);color:var(--paper);font-family:'Manrope',system-ui,sans-serif;line-height:1.55;-webkit-font-smoothing:antialiased;min-height:100dvh;overflow-x:hidden}
.pf a,.pf button{touch-action:manipulation}
.pf a{color:inherit;text-decoration:none}
.skip{position:absolute;left:-9999px;top:0;z-index:100;background:var(--accent);color:var(--ink);font-weight:700;padding:10px 18px;border-radius:0 0 8px 0}
.skip:focus{left:0}
.pf ::selection{background:var(--accent);color:var(--ink)}
.wrap{max-width:var(--maxw);margin:0 auto;padding:0 28px}
.disp{font-family:'Oswald',sans-serif;font-weight:700;text-transform:uppercase}
.eyebrow{font-family:'JetBrains Mono',monospace;font-size:.72rem;letter-spacing:.2em;text-transform:uppercase;color:var(--accent)}
.accent{color:var(--accent)}
.mono{font-family:'JetBrains Mono',monospace}

/* nav */
.nav{position:sticky;top:0;z-index:50;backdrop-filter:blur(10px);background:rgba(10,38,35,.72);border-bottom:1px solid var(--line)}
.nav-in{display:flex;align-items:center;justify-content:space-between;height:64px}
.brand{font-family:'Oswald',sans-serif;font-weight:700;font-size:1.15rem;letter-spacing:.08em;text-transform:uppercase;display:flex;align-items:center;gap:.55rem;cursor:pointer;background:none;border:0;color:var(--paper)}
.brand .bd{width:9px;height:9px;border-radius:50%;background:var(--accent)}
.nav-r{display:flex;gap:1.4rem;align-items:center}
.nav-r a{font-size:.86rem;color:var(--muted);transition:color .2s;padding:12px 4px}
.nav-r a:hover{color:var(--paper)}
.pf a:focus-visible,.pf button:focus-visible{outline:2px solid var(--accent);outline-offset:4px;border-radius:2px}
.toggle{display:inline-flex;border:1px solid var(--line-strong);border-radius:999px;overflow:hidden;font-family:'JetBrains Mono',monospace;font-size:.72rem}
.toggle button{background:none;border:0;color:var(--muted);padding:6px 11px;cursor:pointer;letter-spacing:.05em;position:relative}
.toggle button::after{content:"";position:absolute;inset:-9px -1px}
.toggle button.on{background:var(--accent);color:var(--ink);font-weight:700}

/* hero */
.hero{padding:clamp(56px,10vh,120px) 0 32px}
.hero-grid{display:grid;grid-template-columns:1.4fr .9fr;gap:40px;align-items:center}
.hero h1{font-size:clamp(2.6rem,7vw,5.4rem);line-height:.94;letter-spacing:.01em;margin:20px 0 24px;max-width:16ch}
.hero .sub{font-size:clamp(1.02rem,2vw,1.28rem);max-width:44ch;font-weight:300;color:var(--paper)}
.hero .sub b{font-weight:600}
.photo-img{display:block;width:100%;aspect-ratio:4/5;object-fit:cover;border-radius:16px;border:1px solid var(--line-strong)}
.photo-card{position:relative;aspect-ratio:4/5;border:1px solid var(--line-strong);border-radius:16px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;background:linear-gradient(160deg,var(--ink-2),var(--panel));text-align:center;padding:20px;overflow:hidden}
.photo-card::before{content:"";position:absolute;inset:10px;border:1px solid var(--line);border-radius:10px;pointer-events:none}
.photo-card .pc-mono{font-family:'Oswald',sans-serif;font-weight:700;font-size:clamp(3.4rem,8vw,5.2rem);line-height:1;letter-spacing:.04em;color:var(--paper)}
.photo-card .pc-mono i{font-style:normal;color:var(--accent)}
.photo-card .pc-name{font-family:'Oswald',sans-serif;text-transform:uppercase;letter-spacing:.1em;font-size:.95rem;color:var(--paper)}
.photo-card .pc-role{font-family:'JetBrains Mono',monospace;font-size:.72rem;letter-spacing:.08em;color:var(--muted)}

/* pipeline */
.pipeline{margin:52px 0 6px}
.pipe{position:relative;height:44px}
.pipe .track,.pipe .flow{position:absolute;left:12.5%;right:12.5%;top:50%;height:2px;margin-top:-1px}
.pipe .track{background:var(--line-strong)}
.pipe .flow{background:var(--accent);transform:scaleX(0);transform-origin:left center;animation:draw 1.6s .3s ease forwards}
@keyframes draw{to{transform:scaleX(1)}}
.pipe .node{position:absolute;top:50%;width:14px;height:14px;margin:-7px 0 0 -7px;border-radius:50%;background:var(--ink);border:2px solid var(--accent);opacity:0;transform:scale(0);animation:pop .4s ease forwards}
.pipe .n1{left:12.5%;animation-delay:.5s}.pipe .n2{left:37.5%;animation-delay:.85s}.pipe .n3{left:62.5%;animation-delay:1.2s}
.pipe .n4{left:87.5%;animation-delay:1.55s;background:var(--accent);width:16px;height:16px;margin:-8px 0 0 -8px}
@keyframes pop{from{opacity:0;transform:scale(0)}to{opacity:1;transform:scale(1)}}
.stages{display:grid;grid-template-columns:repeat(4,1fr);margin-top:4px}
.stage{text-align:center}
.stage .n{font-family:'JetBrains Mono',monospace;font-size:.7rem;color:var(--muted)}
.stage .l{font-family:'Oswald',sans-serif;font-weight:600;text-transform:uppercase;font-size:clamp(.85rem,2vw,1.25rem);letter-spacing:.03em;margin-top:2px}
.stage:last-child .l{color:var(--accent)}

/* sections */
.sec{padding:clamp(52px,8vh,92px) 0;border-top:1px solid var(--line);scroll-margin-top:64px}
.sec-head{display:flex;align-items:baseline;gap:1rem;margin-bottom:34px;flex-wrap:wrap}
.sec-head h2{font-size:clamp(1.5rem,4vw,2.5rem);letter-spacing:.02em;line-height:1}

/* rows */
.row{display:grid;grid-template-columns:44px 1fr;gap:20px;padding:24px 12px;margin:0 -12px;border-top:1px solid var(--line);align-items:start;border-radius:10px;transition:background .25s}
.row:hover{background:rgba(242,237,227,.03)}
.row:first-child{border-top:none}
.row .idx{font-family:'JetBrains Mono',monospace;color:var(--accent);font-size:.85rem;padding-top:5px;transition:transform .25s}
.row:hover .idx{transform:translateX(4px)}
.row h3{font-size:1.24rem;font-weight:700;margin-bottom:6px}
.row p{color:var(--muted);max-width:60ch;font-weight:300}

/* flagship */
.flag{background:linear-gradient(160deg,var(--ink-2),var(--panel));border:1px solid var(--line);border-radius:18px;padding:clamp(26px,4vw,46px)}
.flag h3{font-size:clamp(1.7rem,5vw,2.9rem);line-height:.96;margin:12px 0 16px;letter-spacing:.02em}
.flag p{font-weight:300;max-width:62ch;margin-bottom:20px}
.chips{display:flex;flex-wrap:wrap;gap:9px;margin-bottom:22px}
.chip{font-family:'JetBrains Mono',monospace;font-size:.74rem;padding:6px 11px;border:1px solid var(--line-strong);border-radius:999px;color:var(--muted);transition:border-color .25s,color .25s}
.chip:hover{border-color:var(--accent);color:var(--paper)}
.status{display:inline-flex;align-items:center;gap:10px;font-size:.92rem;color:var(--accent-soft);margin-bottom:22px}
.status .pulse{width:9px;height:9px;border-radius:50%;background:var(--accent);animation:pulse 2s infinite}
@keyframes pulse{0%{box-shadow:0 0 0 0 rgba(232,163,61,.5)}70%{box-shadow:0 0 0 12px rgba(232,163,61,0)}100%{box-shadow:0 0 0 0 rgba(232,163,61,0)}}
.caselink{display:block;margin-top:4px;font-family:'JetBrains Mono',monospace;font-size:.85rem;color:var(--accent);background:none;border:0;cursor:pointer;padding:0}
.caselink:hover{color:var(--accent-soft)}
.livelink{display:inline-block;margin-top:10px;font-family:'JetBrains Mono',monospace;font-size:.85rem;color:var(--accent)}
.livelink:hover{color:var(--accent-soft)}

/* background grid */
.bg-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1px;background:var(--line)}
.cell{background:var(--ink);padding:24px;transition:background .25s}
.cell:hover{background:var(--ink-2)}
.cell .k{font-family:'JetBrains Mono',monospace;color:var(--accent);font-size:.7rem;letter-spacing:.14em;text-transform:uppercase}
.cell .v{font-size:1.02rem;margin-top:8px;font-weight:300}
.fit{margin-top:26px;color:var(--muted);font-size:.95rem;font-weight:300;max-width:72ch;font-style:italic}
.fit b{color:var(--paper);font-style:normal;font-weight:600}

/* contact */
.contact h2{font-size:clamp(2rem,7vw,4.6rem);line-height:.94;margin-bottom:26px;white-space:pre-line}
.cta{display:inline-block;background:var(--accent);color:var(--ink);font-weight:700;font-size:1.02rem;padding:15px 30px;border-radius:999px;transition:transform .18s,box-shadow .18s}
.cta:hover{transform:translateY(-2px);box-shadow:0 10px 30px -10px rgba(232,163,61,.6)}
.cta:active{transform:translateY(0) scale(.98)}
.alt{margin-top:20px;color:var(--muted);font-size:.92rem}
.alt a{color:var(--paper);border-bottom:1px solid var(--line-strong)}
.alt a:hover{border-color:var(--accent)}
.foot{border-top:1px solid var(--line);padding:32px 0;color:var(--muted);font-size:.82rem}
.foot .wrap{display:flex;justify-content:space-between;flex-wrap:wrap;gap:10px}

/* case study page */
.case{padding-top:40px}
.backb{font-family:'JetBrains Mono',monospace;font-size:.82rem;color:var(--muted);background:none;border:0;cursor:pointer;padding:0;margin-bottom:36px}
.backb:hover{color:var(--paper)}
.case h1{font-size:clamp(2.2rem,6vw,4rem);line-height:.96;margin:14px 0 12px;letter-spacing:.02em}
.case .csub{color:var(--muted);font-family:'JetBrains Mono',monospace;font-size:.9rem;margin-bottom:26px}
.case .ov{font-size:clamp(1.05rem,2vw,1.3rem);font-weight:300;max-width:60ch;margin-bottom:40px}
.shots{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:48px}
.shot-img{display:block;width:100%;height:auto;aspect-ratio:562/1232;object-fit:cover;border-radius:20px;border:1px solid var(--line);background:var(--ink-2);transition:transform .3s,border-color .3s}
.shot-img:hover{transform:translateY(-4px);border-color:var(--line-strong)}
.cblocks{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:var(--line);margin-bottom:36px}
.cblock{background:var(--ink);padding:26px 24px}
.cblock h4{font-family:'Oswald',sans-serif;font-weight:600;text-transform:uppercase;letter-spacing:.03em;font-size:1.15rem;margin-bottom:8px}
.cblock p{color:var(--muted);font-weight:300}
.cmeta{display:grid;grid-template-columns:1fr 2fr;gap:28px;border-top:1px solid var(--line);padding-top:28px}
.cmeta .mt{font-family:'JetBrains Mono',monospace;color:var(--accent);font-size:.7rem;letter-spacing:.14em;text-transform:uppercase;margin-bottom:10px}
.cmeta p{font-weight:300;color:var(--paper)}

.reveal{opacity:0;transform:translateY(16px);transition:opacity .6s,transform .6s}
.reveal.in{opacity:1;transform:none}

@media(max-width:760px){
  .hero-grid{grid-template-columns:1fr;gap:26px}
  .photo{max-width:260px}
  .bg-grid,.cblocks{grid-template-columns:1fr}
  .shots{grid-template-columns:1fr 1fr}
  .cmeta{grid-template-columns:1fr;gap:20px}
  .nav-r a.hide-sm{display:none}
}
@media(max-width:440px){.shots{grid-template-columns:1fr}}
@media(prefers-reduced-motion:reduce){
  html{scroll-behavior:auto}
  .pf *{animation:none!important;transition:none!important}
  .pipe .flow{transform:none}.pipe .node{opacity:1;transform:none}.reveal{opacity:1;transform:none}
}
`;

/* ---------------- small components ---------------- */
function Pipeline({ stages }) {
  return (
    <div className="pipeline" aria-hidden="true">
      <div className="pipe">
        <div className="track" />
        <div className="flow" />
        {[1, 2, 3, 4].map((n) => <span key={n} className={`node n${n}`} />)}
      </div>
      <div className="stages">
        {stages.map((s, i) => (
          <div className="stage" key={i}>
            <div className="n">0{i + 1}</div>
            <div className="l">{s}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Photo({ t }) {
  const [hasPhoto, setHasPhoto] = useState(true);
  if (hasPhoto) {
    return <img className="photo-img" src="/photo.jpg" alt="Valeriy Bykov" width="480" height="600" decoding="async" onError={() => setHasPhoto(false)} />;
  }
  return (
    <div className="photo-card" aria-hidden="true">
      <div className="pc-mono">VB<i>.</i></div>
      <div className="pc-name">Valeriy Bykov</div>
      <div className="pc-role">{t.photoRole}</div>
    </div>
  );
}

function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ---------------- home ---------------- */
function Home({ t, go }) {
  useReveal();
  return (
    <>
      <header className="hero">
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <span className="eyebrow">{t.heroEyebrow}</span>
              <h1 className="disp">{t.heroLead}<span className="accent">{t.heroAccent}</span>{t.heroTail}</h1>
              <p className="sub">{t.heroSub1}<b>{t.heroSub2}</b></p>
            </div>
            <Photo t={t} />
          </div>
          <Pipeline stages={t.stages} />
        </div>
      </header>

      <section className="sec" id="work">
        <div className="wrap">
          <div className="sec-head reveal"><span className="eyebrow">{t.workEyebrow}</span><h2 className="disp">{t.workTitle}</h2></div>
          {t.services.map(([h, p], i) => (
            <div className="row reveal" key={i}>
              <div className="idx">0{i + 1}</div>
              <div><h3>{h}</h3><p>{p}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="sec" id="project">
        <div className="wrap">
          <div className="flag reveal">
            <span className="eyebrow">{t.flagEyebrow}</span>
            <h3 className="disp">{t.flagTitle}</h3>
            <p>{t.flagDesc}</p>
            <div className="chips">{STACK.map((s) => <span className="chip" key={s}>{s}</span>)}</div>
            <div className="status"><span className="pulse" />{t.flagStatus}</div>
            <button className="caselink" onClick={() => go("padel")}>{t.caseLink}</button>
            <a className="caselink livelink" href="https://padelpack.app" target="_blank" rel="noopener">padelpack.app ↗</a>
          </div>
        </div>
      </section>

      <section className="sec" id="bg">
        <div className="wrap">
          <div className="sec-head reveal"><span className="eyebrow">{t.bgEyebrow}</span><h2 className="disp">{t.bgTitle}</h2></div>
          <div className="bg-grid reveal">
            {t.bgCells.map(([k, v], i) => (
              <div className="cell" key={i}><div className="k">{k}</div><div className="v">{v}</div></div>
            ))}
          </div>
          <p className="fit reveal"><b>{t.fitBest}</b>{t.fitBestText}<b>{t.fitNo}</b>{t.fitNoText}</p>
        </div>
      </section>

      <section className="sec contact" id="contact">
        <div className="wrap">
          <span className="eyebrow reveal">{t.contactEyebrow}</span>
          <h2 className="disp reveal">{t.contactTitle}</h2>
          <a className="cta reveal" href="mailto:hi@valerbykov.com">hi@valerbykov.com</a>
          {UPWORK_URL && <p className="alt reveal">{t.contactAlt1}<a href={UPWORK_URL} target="_blank" rel="noopener noreferrer">Upwork</a>{t.contactAlt2}</p>}
        </div>
      </section>
    </>
  );
}

/* ---------------- case study ---------------- */
function Padel({ t, go }) {
  useReveal();
  return (
    <section className="sec case">
      <div className="wrap">
        <button className="backb" onClick={() => go("home")}>{t.caseBack}</button>
        <span className="eyebrow">{t.caseEyebrow}</span>
        <h1 className="disp">{t.flagTitle}</h1>
        <div className="csub">{t.caseSubtitle} · <a className="livelink" href="https://padelpack.app" target="_blank" rel="noopener">padelpack.app ↗</a></div>
        <p className="ov">{t.caseOverview}</p>

        <div className="shots reveal">
          {SHOTS.map((src, i) => (
            <img className="shot-img" key={src} src={src} alt={`PadelPack — ${t.caseShotLabel} ${i + 1}`} width="562" height="1232" loading="lazy" decoding="async" />
          ))}
        </div>

        <div className="cblocks reveal">
          {t.caseBlocks.map(([h, p], i) => (
            <div className="cblock" key={i}><h4>{h}</h4><p>{p}</p></div>
          ))}
        </div>

        <div className="cmeta reveal">
          <div>
            <div className="mt">{t.caseStackTitle}</div>
            <div className="chips" style={{ marginBottom: 0 }}>{STACK.map((s) => <span className="chip" key={s}>{s}</span>)}</div>
          </div>
          <div>
            <div className="mt">{t.caseRoleTitle}</div>
            <p>{t.caseRole}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- app ---------------- */
function initialLang() {
  if (typeof window === "undefined") return "en";
  const saved = localStorage.getItem("pf-lang");
  if (saved === "en" || saved === "ru") return saved;
  return navigator.language?.toLowerCase().startsWith("ru") ? "ru" : "en";
}

export default function App() {
  const [lang, setLang] = useState(initialLang);
  const [view, setView] = useState(() => (typeof window !== "undefined" && window.location.hash === "#/padel" ? "padel" : "home"));
  const t = T[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem("pf-lang", lang);
  }, [lang]);

  useEffect(() => {
    const id = "pf-fonts";
    if (!document.getElementById(id)) {
      const l = document.createElement("link");
      l.id = id; l.rel = "stylesheet";
      l.href = "https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Manrope:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;700&display=swap";
      document.head.appendChild(l);
    }
  }, []);

  const go = (v) => {
    setView(v);
    if (typeof window !== "undefined") window.location.hash = v === "padel" ? "#/padel" : "#/";
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  useEffect(() => {
    const onHash = () => setView(window.location.hash === "#/padel" ? "padel" : "home");
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <div className="pf">
      <style>{css}</style>
      <a className="skip" href="#main">{lang === "ru" ? "К содержимому" : "Skip to content"}</a>
      <nav className="nav">
        <div className="wrap nav-in">
          <button className="brand" onClick={() => go("home")}><span className="bd" />Valeriy&nbsp;Bykov</button>
          <div className="nav-r">
            {view === "home" && <>
              <a href="#work" className="hide-sm">{t.nav.work}</a>
              <a href="#project" className="hide-sm">{t.nav.project}</a>
              <a href="#contact">{t.nav.contact}</a>
            </>}
            <div className="toggle" role="group" aria-label="Language">
              <button className={lang === "en" ? "on" : ""} aria-pressed={lang === "en"} onClick={() => setLang("en")}>EN</button>
              <button className={lang === "ru" ? "on" : ""} aria-pressed={lang === "ru"} onClick={() => setLang("ru")}>RU</button>
            </div>
          </div>
        </div>
      </nav>

      <main id="main">
        {view === "home" ? <Home t={t} go={go} /> : <Padel t={t} go={go} />}
      </main>

      <footer className="foot">
        <div className="wrap">
          <span className="mono">© 2026 Valeriy Bykov</span>
          <span className="mono">{t.footerBuilt}</span>
        </div>
      </footer>
    </div>
  );
}
