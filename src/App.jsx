import { useState, useEffect, useRef, useCallback, lazy, Suspense } from "react";

const Phone3D = lazy(() => import("./Phone3D.jsx"));

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
    caseLink: "View case study",
    bgEyebrow: "Background",
    bgTitle: "Management meets making",
    bgCells: [
      ["Certified", "PMP & PMI-ACP project manager"],
      ["Delivered", "Large-scale ERP, BI/DWH & CRM implementations"],
      ["Discipline", "Scope control, risk analysis, stakeholder delivery"],
      ["Tooling", "AI-native development as a daily driver, not an experiment"],
    ],
    fitBest: "Best fit:",
    fitBestText: "MVPs, PWAs, cross-platform mobile via Capacitor, internal tools, and AI automation.",
    fitNo: "Not my lane:",
    fitNoText: "large performance- or security-critical engineering that needs a senior software engineer — and I'll tell you so up front rather than waste your budget.",
    contactEyebrow: "Let's talk",
    contactTitle: "Have something\nto ship?",
    contactAlt1: "Or message me on ",
    contactAlt2: ". Based remote · working across RU & international.",
    footerBuilt: "Shipped with precision. Built solo — of course.",
    /* case study */
    caseBack: "← Back to home",
    caseEyebrow: "Case study · solo product",
    caseSubtitle: "Concept to app stores, one person",
    caseOverview: "A padel community needed a way to run recurring leagues without spreadsheets and group-chat chaos. I built the whole product solo — from the data model to the mobile builds now in store review.",
    caseShotsLabel: "App screenshots — scroll horizontally",
    caseShots: [
      "League board & members",
      "Tournament rounds, live score",
      "Score entry",
      "League analytics",
      "Player profile & form",
      "Tournament finale",
    ],
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
    caseLink: "Смотреть кейс",
    bgEyebrow: "Опыт",
    bgTitle: "Управление плюс руки",
    bgCells: [
      ["Сертификация", "Проджект-менеджер с PMP и PMI-ACP"],
      ["Внедрял", "Крупные внедрения ERP, BI/DWH и CRM"],
      ["Дисциплина", "Управление скоупом, анализ рисков, работа со стейкхолдерами"],
      ["Инструменты", "AI-разработка как ежедневная работа, а не эксперимент"],
    ],
    fitBest: "Хорошо подхожу:",
    fitBestText: "MVP, PWA, кроссплатформенные мобильные на Capacitor, внутренние инструменты и AI-автоматизация.",
    fitNo: "Не мой профиль:",
    fitNoText: "нагруженная или security-critical инженерия, которой нужен сильный software-инженер — скажу об этом сразу, а не потрачу бюджет впустую.",
    contactEyebrow: "Давай обсудим",
    contactTitle: "Есть что\nзапустить?",
    contactAlt1: "Или напиши в ",
    contactAlt2: ". Работаю удалённо — по РФ и международно.",
    footerBuilt: "Сделано в одиночку — а как же.",
    /* case study */
    caseBack: "← На главную",
    caseEyebrow: "Кейс · сольный продукт",
    caseSubtitle: "От идеи до сторов, один человек",
    caseOverview: "Сообществу падела нужен был способ вести регулярные лиги без таблиц и хаоса в чатах. Я собрал весь продукт один — от модели данных до мобильных сборок, которые сейчас на ревью в сторах.",
    caseShotsLabel: "Скриншоты приложения — прокрутка по горизонтали",
    caseShots: [
      "Доска лиги и участники",
      "Раунды турнира, живой счёт",
      "Ввод результата",
      "Аналитика лиги",
      "Профиль игрока и форма",
      "Финал турнира",
    ],
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

const TELEGRAM_URL = "https://t.me/valerbykov";
/* fill in when the profile is live; empty string hides the link */
const UPWORK_URL = "";

const SHOTS = [1, 2, 3, 4, 5, 7].map((n) => `/shot${n}.jpg`);

/* ---------------- styles · Obsidian Kinetic ---------------- */
const css = `
:root{
  --surface:#001714; --surface-deep:#00110f;
  --container-low:#04201d; --container:#072421; --container-high:#132e2b; --container-highest:#1f3936;
  --raised:#0D2E2B; --variant:#1f3936;
  --text:#cbe9e3; --text-soft:#d6c4b0; --sec:#b1ccc6;
  --accent:#ffc16c; --accent-deep:#e8a33d; --on-accent:#2a1800;
  --line:rgba(143,169,163,.15); --line-strong:rgba(143,169,163,.35);
  --glow:rgba(232,163,61,.6);
  --maxw:1280px;
}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
:root{color-scheme:dark}
.pf{background:transparent;color:var(--text);font-family:'Manrope',system-ui,sans-serif;line-height:1.55;-webkit-font-smoothing:antialiased;min-height:100dvh;overflow-x:hidden}
.gbg{position:fixed;inset:0;width:100vw;height:100vh;z-index:-1;pointer-events:none;opacity:.4}
.pf a,.pf button{touch-action:manipulation}
.pf a{color:inherit;text-decoration:none}
.skip{position:absolute;left:-9999px;top:0;z-index:100;background:var(--accent);color:var(--on-accent);font-weight:700;padding:10px 18px}
.skip:focus{left:0}
.pf ::selection{background:var(--accent);color:var(--surface)}
.pf ::-webkit-scrollbar{width:6px}
.pf ::-webkit-scrollbar-track{background:var(--surface)}
.pf ::-webkit-scrollbar-thumb{background:var(--variant)}
.pf ::-webkit-scrollbar-thumb:hover{background:var(--accent)}
.wrap{max-width:var(--maxw);margin:0 auto;padding:0 24px}
.disp{font-family:'Oswald',sans-serif;font-weight:700;text-transform:uppercase}
.eyebrow{font-family:'JetBrains Mono',monospace;font-size:.74rem;letter-spacing:.2em;text-transform:uppercase;color:var(--sec)}
.accent{color:var(--accent);font-style:italic}
.mono{font-family:'JetBrains Mono',monospace}

/* nav */
.nav{position:sticky;top:0;z-index:50;backdrop-filter:blur(10px);background:rgba(0,23,20,.8);border-bottom:1px solid var(--line)}
.nav-in{display:flex;align-items:center;justify-content:space-between;height:64px}
.brand{font-family:'Oswald',sans-serif;font-weight:700;font-size:1.1rem;letter-spacing:.04em;text-transform:uppercase;display:flex;align-items:center;gap:.55rem;cursor:pointer;background:none;border:0;color:var(--accent)}
.brand .bd{width:9px;height:9px;background:var(--accent);box-shadow:0 0 10px var(--glow)}
.nav-r{display:flex;gap:1.4rem;align-items:center}
.nav-r a{font-family:'JetBrains Mono',monospace;font-size:.78rem;letter-spacing:.05em;text-transform:uppercase;color:var(--text);transition:color .2s;padding:12px 2px}
.nav-r a:hover{color:var(--accent)}
.pf a:focus-visible,.pf button:focus-visible{outline:2px solid var(--accent);outline-offset:4px}
.toggle{display:inline-flex;border:1px solid var(--line-strong);overflow:hidden;font-family:'JetBrains Mono',monospace;font-size:.72rem}
.toggle button{background:none;border:0;color:var(--sec);padding:6px 11px;cursor:pointer;letter-spacing:.05em;position:relative}
.toggle button::after{content:"";position:absolute;inset:-9px -1px}
.toggle button.on{background:var(--accent-deep);color:var(--on-accent);font-weight:700}

/* hero */
.hero{padding:clamp(56px,10vh,120px) 0 32px;position:relative;overflow:hidden}
.hero .wrap{position:relative}
.hero-grid{display:grid;grid-template-columns:1.5fr .8fr;gap:40px;align-items:center}
.hero h1{font-size:clamp(2.7rem,7vw,5.25rem);line-height:.96;letter-spacing:-.01em;margin:20px 0 24px;max-width:17ch}
.hero .sub{font-size:clamp(1.02rem,2vw,1.14rem);max-width:46ch;font-weight:400;color:var(--text-soft)}
.hero .sub b{font-weight:600;color:var(--text)}
.photo-img{display:block;width:100%;aspect-ratio:3/4;object-fit:cover;border:1px solid var(--line)}
.photo-card{position:relative;aspect-ratio:3/4;border:1px solid var(--line);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;background:var(--raised);text-align:center;padding:28px;overflow:hidden}
.photo-card::before{content:"";position:absolute;inset:0;background:linear-gradient(135deg,rgba(255,193,108,.05),transparent 60%);pointer-events:none}
.photo-card .tick{position:absolute;width:10px;height:10px;pointer-events:none}
.photo-card .tick.tl{top:8px;left:8px;border-top:1px solid rgba(255,193,108,.35);border-left:1px solid rgba(255,193,108,.35)}
.photo-card .tick.br{bottom:8px;right:8px;border-bottom:1px solid rgba(255,193,108,.35);border-right:1px solid rgba(255,193,108,.35)}
.photo-card .pc-mono{font-family:'Oswald',sans-serif;font-weight:700;font-size:clamp(3.4rem,8vw,4.6rem);line-height:1;letter-spacing:.02em;color:var(--accent)}
.photo-card .pc-mono i{font-style:normal;color:var(--text)}
.photo-card .pc-name{font-family:'Oswald',sans-serif;font-weight:500;text-transform:uppercase;letter-spacing:.08em;font-size:1.05rem;color:var(--text)}
.photo-card .pc-role{font-family:'JetBrains Mono',monospace;font-size:.72rem;letter-spacing:.08em;color:var(--sec);text-transform:uppercase;border-top:1px solid var(--line);padding-top:14px;width:100%}
.phone3d{width:100%;max-width:420px;height:500px;cursor:grab}
.phone3d:active{cursor:grabbing}
.phone3d canvas{display:block}

/* process strip */
.process{position:relative;margin-top:56px;background:var(--container-low);border-top:1px solid var(--line);border-bottom:1px solid var(--line);overflow:hidden}
.process .wrap{position:relative;z-index:2;padding-top:34px;padding-bottom:34px}
.pipe{position:relative;height:40px}
.pipe .track,.pipe .flow{position:absolute;left:12.5%;right:12.5%;top:50%;height:2px;margin-top:-1px}
.pipe .track{background:var(--variant)}
.pipe .flow{background:var(--accent);transform:scaleX(0);transform-origin:left center}
.process.go .flow{animation:draw 1.5s .2s ease-out forwards}
@keyframes draw{to{transform:scaleX(1)}}
.pipe .node{position:absolute;top:50%;width:14px;height:14px;margin:-7px 0 0 -7px;border-radius:50%;background:var(--accent);opacity:0;transform:scale(0)}
.process.go .node{animation:pop .4s ease forwards,pulseGlow 2s ease-in-out infinite}
.pipe .n1{left:12.5%;animation-delay:.4s,.8s}.pipe .n2{left:37.5%;animation-delay:.7s,1.1s}.pipe .n3{left:62.5%;animation-delay:1s,1.4s}
.pipe .n4{left:87.5%;animation-delay:1.3s,1.7s;width:20px;height:20px;margin:-10px 0 0 -10px;border:3px solid var(--surface);outline:2px solid var(--accent)}
@keyframes pop{from{opacity:0;transform:scale(0)}to{opacity:1;transform:scale(1)}}
@keyframes pulseGlow{0%,100%{box-shadow:0 0 6px rgba(255,193,108,.35)}50%{box-shadow:0 0 18px rgba(255,193,108,.75)}}
.stages{display:grid;grid-template-columns:repeat(4,1fr);margin-top:6px}
.stage{text-align:center}
.stage .n{font-family:'JetBrains Mono',monospace;font-size:.7rem;color:var(--sec)}
.stage .l{font-family:'Oswald',sans-serif;font-weight:500;text-transform:uppercase;font-size:clamp(.85rem,2vw,1.35rem);letter-spacing:.03em;margin-top:2px}
.stage:last-child .n{color:var(--accent);font-weight:700}
.stage:last-child .l{color:var(--accent)}

/* sections */
.sec{padding:clamp(52px,8vh,92px) 0;scroll-margin-top:64px}
.sec-head{margin-bottom:34px}
.sec-head h2{font-family:'Oswald',sans-serif;font-weight:600;text-transform:uppercase;font-size:clamp(1.6rem,4vw,2.5rem);letter-spacing:.01em;line-height:1.2;margin-top:8px}

/* service cards */
.cards{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.card{background:var(--raised);border:1px solid var(--line);padding:32px;transition:border-color .25s}
.card:hover{border-color:var(--accent)}
.card .idx{font-family:'Oswald',sans-serif;font-weight:700;font-size:2.25rem;line-height:1;color:rgba(177,204,198,.3);display:block;margin-bottom:16px;transition:color .25s}
.card:hover .idx{color:rgba(255,193,108,.5)}
.card h3{font-family:'Oswald',sans-serif;font-weight:500;text-transform:uppercase;font-size:1.3rem;letter-spacing:.02em;margin-bottom:8px}
.card p{color:var(--text-soft);font-weight:400;max-width:60ch}

/* flagship */
.flag{background:var(--container-high);border:1px solid var(--line);padding:clamp(26px,4vw,56px);position:relative;overflow:hidden}
.flag::before{content:"";position:absolute;top:-96px;right:-96px;width:384px;height:384px;border-radius:50%;background:rgba(255,193,108,.05);filter:blur(100px);pointer-events:none}
.flag-grid{display:grid;grid-template-columns:1fr clamp(210px,24vw,300px);gap:clamp(26px,4vw,64px);align-items:center;position:relative;z-index:1}
.flag h3{font-family:'Oswald',sans-serif;font-weight:700;text-transform:uppercase;font-size:clamp(2rem,6vw,4.2rem);line-height:.96;margin:12px 0 16px;letter-spacing:-.01em}
.flag p{font-weight:400;color:var(--text-soft);max-width:62ch;margin-bottom:20px;font-size:1.05rem}
.chips{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:22px}
.chip{font-family:'JetBrains Mono',monospace;font-size:.72rem;letter-spacing:.05em;text-transform:uppercase;padding:5px 12px;border:1px solid rgba(177,204,198,.3);background:rgba(177,204,198,.1);color:var(--sec);transition:border-color .25s,color .25s}
.chip:hover{border-color:var(--accent);color:var(--text)}
.status{display:inline-flex;align-items:center;gap:10px;font-family:'JetBrains Mono',monospace;font-size:.76rem;letter-spacing:.05em;text-transform:uppercase;font-weight:700;color:var(--accent);margin-bottom:22px}
.status .pulse{width:9px;height:9px;border-radius:50%;background:var(--accent);animation:pulse 2s infinite}
@keyframes pulse{0%{box-shadow:0 0 0 0 rgba(232,163,61,.5)}70%{box-shadow:0 0 0 12px rgba(232,163,61,0)}100%{box-shadow:0 0 0 0 rgba(232,163,61,0)}}
.flag-links{display:flex;flex-wrap:wrap;gap:12px 28px;margin-top:4px}
.caselink{display:inline-flex;align-items:center;gap:8px;font-family:'Oswald',sans-serif;font-weight:500;text-transform:uppercase;font-size:1.1rem;letter-spacing:.03em;color:var(--accent);background:none;border:0;cursor:pointer;padding:0}
.caselink .arr{transition:transform .25s}
.caselink:hover .arr{transform:translateX(4px)}
.caselink.ext{color:var(--text-soft)}
.caselink.ext:hover{color:var(--text)}
.caselink.ext:hover .arr{transform:translate(3px,-3px)}

/* phone mockup */
.phone{position:relative;width:100%;max-width:300px;aspect-ratio:.46;background:var(--surface-deep);border:4px solid var(--container-highest);border-radius:40px;padding:12px;box-shadow:0 25px 50px -12px rgba(0,0,0,.5);overflow:hidden;margin:0 auto}
.phone .notch{position:absolute;top:0;left:50%;transform:translateX(-50%);width:96px;height:22px;background:var(--container-highest);border-radius:0 0 12px 12px;z-index:2}
.phone img{display:block;width:100%;height:100%;object-fit:cover;border-radius:28px;transition:transform .7s}
.flag:hover .phone img{transform:scale(1.04)}

/* background section */
.bg-grid{display:grid;grid-template-columns:5fr 7fr;gap:clamp(28px,5vw,72px);align-items:start}
.bg-list .item{border-top:1px solid var(--line);padding:20px 0 4px}
.bg-list .item:first-child{border-top:none;padding-top:8px}
.bg-list .k{font-family:'JetBrains Mono',monospace;color:var(--sec);font-size:.7rem;letter-spacing:.14em;text-transform:uppercase}
.bg-list .v{font-size:1.08rem;margin-top:8px;font-weight:400;padding-bottom:16px}
.bg-right{display:flex;gap:12px;align-items:stretch;flex-wrap:wrap}
.portrait{flex:0 0 clamp(180px,17vw,230px);margin:0;background:#eef2ee;border:1px solid var(--line);display:flex;flex-direction:column;overflow:hidden}
.portrait img{display:block;width:100%;flex:1;aspect-ratio:5/6;object-fit:cover;object-position:top}
.portrait figcaption{background:var(--surface-deep);border-top:1px solid var(--line);padding:10px 14px;display:flex;flex-direction:column;gap:2px}
.portrait .pn{font-family:'Oswald',sans-serif;font-weight:600;text-transform:uppercase;font-size:.95rem;letter-spacing:.04em;color:var(--text)}
.portrait .pc{font-family:'JetBrains Mono',monospace;font-size:.66rem;letter-spacing:.14em;color:var(--accent);text-transform:uppercase}
.fit-card{flex:1 1 260px;background:var(--raised);border:1px solid var(--line);padding:32px;position:relative;overflow:hidden}
.fit-card::before{content:"";position:absolute;top:-32px;right:-32px;width:64px;height:64px;background:rgba(255,193,108,.1);transform:rotate(-45deg)}
.fit-card h4{font-family:'Oswald',sans-serif;font-weight:500;text-transform:uppercase;font-size:1.25rem;letter-spacing:.02em;margin-bottom:8px;color:var(--accent)}
.fit-card .no h4{color:var(--sec)}
.fit-card p{font-size:1.05rem;font-weight:400}
.fit-card .no{border-top:1px solid var(--line);margin-top:26px;padding-top:24px}
.fit-card .no p{color:var(--text-soft);font-style:italic}

/* contact */
.contact{background:var(--container-low);border-top:1px solid var(--line);text-align:center}
.contact .wrap{display:flex;flex-direction:column;align-items:center;gap:22px}
.contact h2{font-size:clamp(2.2rem,7vw,4.8rem);line-height:.96;white-space:pre-line}
.pf .cta{display:inline-block;background:var(--accent);color:var(--surface-deep);font-family:'Oswald',sans-serif;font-weight:700;text-transform:uppercase;letter-spacing:.02em;font-size:1.2rem;padding:16px 48px;box-shadow:0 0 40px rgba(255,193,108,.3);transition:transform .18s,background .18s}
.cta:hover{transform:scale(1.04);background:#fff}
.cta:active{transform:scale(.97)}
.alt{color:var(--text-soft);font-size:.95rem;max-width:46ch}
.alt a{color:var(--text);border-bottom:1px solid var(--line-strong)}
.alt a:hover{color:var(--accent);border-color:var(--accent)}
.foot{border-top:1px solid var(--line);padding:32px 0;color:var(--sec);font-size:.78rem}
.foot .wrap{display:flex;justify-content:space-between;flex-wrap:wrap;gap:10px;text-transform:uppercase;letter-spacing:.05em}
.foot .mono{opacity:.6}

/* case study page */
.case{padding-top:40px}
.backb{display:block;font-family:'JetBrains Mono',monospace;font-size:.82rem;color:var(--sec);background:none;border:0;cursor:pointer;padding:0;margin-bottom:36px;text-transform:uppercase;letter-spacing:.05em}
.backb:hover{color:var(--accent)}
.case h1{font-family:'Oswald',sans-serif;font-weight:700;text-transform:uppercase;font-size:clamp(2.2rem,6vw,4rem);line-height:.96;margin:14px 0 12px}
.case .csub{color:var(--sec);font-family:'JetBrains Mono',monospace;font-size:.88rem;margin-bottom:26px}
.case .csub a{color:var(--accent)}
.case .ov{font-size:clamp(1.05rem,2vw,1.25rem);font-weight:400;color:var(--text-soft);max-width:60ch;margin-bottom:40px}
.shots{display:flex;gap:18px;overflow-x:auto;scroll-snap-type:x mandatory;padding:4px 4px 14px;margin-bottom:40px;scrollbar-width:thin;scrollbar-color:var(--line-strong) transparent}
.shots::-webkit-scrollbar{height:8px}
.shots::-webkit-scrollbar-thumb{background:var(--line-strong)}
.shots::-webkit-scrollbar-track{background:transparent}
.shots:focus-visible{outline:2px solid var(--accent);outline-offset:4px}
.shot{flex:0 0 auto;width:min(230px,66vw);scroll-snap-align:start;margin:0}
.shot .sh-frame{border:1px solid var(--line);background:var(--surface-deep);padding:8px;border-radius:24px;transition:transform .3s,border-color .3s}
.shot .sh-frame img{display:block;width:100%;height:auto;aspect-ratio:562/1232;object-fit:cover;border-radius:16px}
.shot:hover .sh-frame{transform:translateY(-4px);border-color:var(--line-strong)}
.shot-cap{margin-top:10px;font-size:.82rem;color:var(--sec)}
.shot-cap .cn{font-family:'JetBrains Mono',monospace;font-size:.7rem;color:var(--accent);margin-right:7px}
.cblocks{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:36px}
.cblock{background:var(--raised);border:1px solid var(--line);padding:28px 26px;transition:border-color .25s}
.cblock:hover{border-color:var(--accent)}
.cblock h4{font-family:'Oswald',sans-serif;font-weight:500;text-transform:uppercase;letter-spacing:.03em;font-size:1.2rem;margin-bottom:8px}
.cblock p{color:var(--text-soft);font-weight:400}
.cmeta{display:grid;grid-template-columns:1fr 2fr;gap:28px;border-top:1px solid var(--line);padding-top:28px}
.cmeta .mt{font-family:'JetBrains Mono',monospace;color:var(--sec);font-size:.7rem;letter-spacing:.14em;text-transform:uppercase;margin-bottom:10px}
.cmeta p{font-weight:400;color:var(--text)}

.reveal{opacity:0;transform:translateY(16px);transition:opacity .6s,transform .6s}
.reveal.in{opacity:1;transform:none}
.rvl{display:block;overflow:hidden}
.rvl>span{display:block;transform:translateY(105%);transition:transform .8s cubic-bezier(.16,1,.3,1)}
.rvl.in>span{transform:none}
.kin{transition:transform .5s cubic-bezier(.16,1,.3,1),border-color .25s,opacity .6s;transform-style:preserve-3d;will-change:transform}

@media(max-width:760px){
  .hero-grid{grid-template-columns:1fr;gap:26px}
  .photo-img,.photo-card{max-width:280px}
  .phone3d{height:380px;max-width:300px;margin:0 auto}
  .cards,.bg-grid,.cblocks{grid-template-columns:1fr}
  .portrait{flex-basis:230px;margin:0 auto}
  .flag-grid{grid-template-columns:1fr}
  .phone{max-width:220px;margin-top:10px}
  .cmeta{grid-template-columns:1fr;gap:20px}
  .nav-r a.hide-sm{display:none}
}
@media(prefers-reduced-motion:reduce){
  html{scroll-behavior:auto}
  .pf *{animation:none!important;transition:none!important}
  .pipe .flow{transform:none}.pipe .node{opacity:1;transform:none}.reveal{opacity:1;transform:none}
  .rvl>span{transform:none}
}
`;

/* ---------------- global kinetic background (Obsidian Kinetic) ---------------- */
const WAVE_FRAG = `precision highp float;
uniform float t;
uniform vec2 r;
void main(){
  vec2 uv=gl_FragCoord.xy/r;
  float n=sin(uv.x*10.0+t)*cos(uv.y*10.0+t);
  vec3 col=mix(vec3(0.0,0.09,0.08),vec3(0.01,0.15,0.13),n*0.5+0.5);
  gl_FragColor=vec4(col,1.0);
}`;

const WAVE_VERT = `attribute vec2 p;
void main(){gl_Position=vec4(p,0.0,1.0);}`;

function GlobalWaves() {
  const ref = useRef(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const canvas = ref.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if (!gl) return;

    const cs = (type, src) => {
      const s = gl.createShader(type);
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };
    const prog = gl.createProgram();
    gl.attachShader(prog, cs(gl.VERTEX_SHADER, WAVE_VERT));
    gl.attachShader(prog, cs(gl.FRAGMENT_SHADER, WAVE_FRAG));
    gl.linkProgram(prog);
    gl.useProgram(prog);
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);
    const pos = gl.getAttribLocation(prog, "p");
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);
    const tLoc = gl.getUniformLocation(prog, "t");
    const rLoc = gl.getUniformLocation(prog, "r");

    let raf;
    const render = (time) => {
      const w = window.innerWidth, h = window.innerHeight;
      if (canvas.width !== w || canvas.height !== h) { canvas.width = w; canvas.height = h; }
      gl.viewport(0, 0, w, h);
      if (tLoc) gl.uniform1f(tLoc, time * 0.0005);
      if (rLoc) gl.uniform2f(rLoc, w, h);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      raf = requestAnimationFrame(render);
    };
    raf = requestAnimationFrame(render);

    /* no loseContext() here: React StrictMode re-runs the effect on the same
       canvas, and a lost context can't be re-acquired via getContext() */
    return () => cancelAnimationFrame(raf);
  }, []);
  return <canvas ref={ref} className="gbg" aria-hidden="true" />;
}

/* ---------------- hero: interactive 3D phone (lazy three.js) ---------------- */
function HeroPhone({ t }) {
  const [fallback, setFallback] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const onFail = useCallback(() => setFallback(true), []);

  if (fallback) return <Photo t={t} />;
  return (
    <Suspense fallback={<div className="phone3d" aria-hidden="true" />}>
      <Phone3D onFail={onFail} />
    </Suspense>
  );
}

/* ---------------- small components ---------------- */
function Process({ stages }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { el.classList.add("go"); io.disconnect(); } }),
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div className="process" ref={ref} aria-hidden="true">
      <div className="wrap">
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
    </div>
  );
}

function Portrait() {
  const [ok, setOk] = useState(true);
  if (!ok) return null;
  return (
    <figure className="portrait">
      <img src="/photo.jpg" alt="Valeriy Bykov" width="418" height="501" loading="lazy" decoding="async" onError={() => setOk(false)} />
      <figcaption>
        <span className="pn">Valeriy Bykov</span>
        <span className="pc">PMP · PMI-ACP</span>
      </figcaption>
    </figure>
  );
}

function Photo({ t }) {
  const [hasPhoto, setHasPhoto] = useState(true);
  if (hasPhoto) {
    return <img className="photo-img" src="/photo.jpg" alt="Valeriy Bykov" width="480" height="640" decoding="async" onError={() => setHasPhoto(false)} />;
  }
  return (
    <div className="photo-card" aria-hidden="true">
      <span className="tick tl" /><span className="tick br" />
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
    document.querySelectorAll(".reveal, .rvl").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* 3D tilt that follows the cursor on .kin cards */
function useKinetic() {
  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const cards = Array.from(document.querySelectorAll(".kin"));
    const handlers = cards.map((card) => {
      const move = (e) => {
        const rect = card.getBoundingClientRect();
        /* normalized by card size: max ±6° regardless of card dimensions */
        const rx = -((e.clientY - rect.top) / rect.height - 0.5) * 12;
        const ry = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
        card.style.transform = `translateY(-4px) rotateX(${rx}deg) rotateY(${ry}deg)`;
      };
      const leave = () => { card.style.transform = ""; };
      card.addEventListener("mousemove", move);
      card.addEventListener("mouseleave", leave);
      return { card, move, leave };
    });
    return () => handlers.forEach(({ card, move, leave }) => {
      card.removeEventListener("mousemove", move);
      card.removeEventListener("mouseleave", leave);
    });
  }, []);
}

/* masked slide-up text reveal */
function Rv({ children, className = "" }) {
  return <span className={`rvl ${className}`}><span>{children}</span></span>;
}

/* ---------------- home ---------------- */
function Home({ t, go }) {
  useReveal();
  useKinetic();
  return (
    <>
      <header className="hero">
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <Rv className="eyebrow">{t.heroEyebrow}</Rv>
              <h1 className="disp"><Rv>{t.heroLead}<span className="accent">{t.heroAccent}</span>{t.heroTail}</Rv></h1>
              <p className="sub"><Rv>{t.heroSub1}<b>{t.heroSub2}</b></Rv></p>
            </div>
            <HeroPhone t={t} />
          </div>
        </div>
        <Process stages={t.stages} />
      </header>

      <section className="sec" id="work">
        <div className="wrap">
          <div className="sec-head"><Rv className="eyebrow">{t.workEyebrow}</Rv><h2><Rv>{t.workTitle}</Rv></h2></div>
          <div className="cards">
            {t.services.map(([h, p], i) => (
              <div className="card reveal kin" key={i}>
                <span className="idx">0{i + 1}</span>
                <h3>{h}</h3><p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" id="project">
        <div className="wrap">
          <div className="flag reveal">
            <div className="flag-grid">
              <div>
                <Rv className="eyebrow">{t.flagEyebrow}</Rv>
                <h3><Rv>{t.flagTitle}</Rv></h3>
                <p>{t.flagDesc}</p>
                <div className="chips">{STACK.map((s) => <span className="chip" key={s}>{s}</span>)}</div>
                <div className="status"><span className="pulse" />{t.flagStatus}</div>
                <div className="flag-links">
                  <button className="caselink" onClick={() => go("padel")}>{t.caseLink}<span className="arr" aria-hidden="true">→</span></button>
                  <a className="caselink ext" href="https://padelpack.app" target="_blank" rel="noopener noreferrer">padelpack.app<span className="arr" aria-hidden="true">↗</span></a>
                </div>
              </div>
              <div className="phone" aria-hidden="true">
                <div className="notch" />
                <img src="/shot2.jpg" alt="" width="562" height="1232" loading="lazy" decoding="async" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec" id="bg">
        <div className="wrap">
          <div className="bg-grid">
            <div className="bg-list reveal">
              <Rv className="eyebrow">{t.bgEyebrow}</Rv>
              <h2 className="disp" style={{ fontSize: "clamp(1.6rem,4vw,2.5rem)", fontWeight: 600, margin: "8px 0 22px", lineHeight: 1.2 }}><Rv>{t.bgTitle}</Rv></h2>
              {t.bgCells.map(([k, v], i) => (
                <div className="item" key={i}><div className="k">{k}</div><div className="v">{v}</div></div>
              ))}
            </div>
            <div className="bg-right reveal">
              <Portrait />
              <div className="fit-card kin">
                <div>
                  <h4>{t.fitBest}</h4>
                  <p>{t.fitBestText}</p>
                </div>
                <div className="no">
                  <h4>{t.fitNo}</h4>
                  <p>{t.fitNoText}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec contact" id="contact">
        <div className="wrap">
          <Rv className="eyebrow">{t.contactEyebrow}</Rv>
          <h2 className="disp"><Rv>{t.contactTitle}</Rv></h2>
          <a className="cta reveal" href="mailto:hi@valerbykov.com">hi@valerbykov.com</a>
          <p className="alt reveal">
            {t.contactAlt1}<a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">Telegram</a>
            {UPWORK_URL && <> · <a href={UPWORK_URL} target="_blank" rel="noopener noreferrer">Upwork</a></>}
            {t.contactAlt2}
          </p>
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
        <h1>{t.flagTitle}</h1>
        <div className="csub">{t.caseSubtitle} · <a href="https://padelpack.app" target="_blank" rel="noopener">padelpack.app ↗</a></div>
        <p className="ov">{t.caseOverview}</p>

        <div className="shots reveal" tabIndex="0" role="region" aria-label={t.caseShotsLabel}>
          {SHOTS.map((src, i) => (
            <figure className="shot" key={src}>
              <div className="sh-frame">
                <img src={src} alt={`PadelPack — ${t.caseShots[i]}`} width="562" height="1232" loading="lazy" decoding="async" />
              </div>
              <figcaption className="shot-cap"><span className="cn">0{i + 1}</span>{t.caseShots[i]}</figcaption>
            </figure>
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
      l.href = "https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap";
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
      <GlobalWaves />
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
