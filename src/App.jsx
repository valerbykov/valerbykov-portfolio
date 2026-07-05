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
    photoLabel: "Add your photo",
    photoHint: "public/photo.jpg",
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
    flagTitle: "Friends' Padel League",
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
    photoLabel: "Место под фото",
    photoHint: "public/photo.jpg",
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
    flagTitle: "Падел-лига для своих",
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

/* ---------------- styles ---------------- */
const css = `
:root{
  --ink:#0A2623; --ink-2:#0F332F; --panel:#12403A;
  --paper:#F2EDE3; --muted:#8FA9A3; --accent:#E8A33D; --accent-soft:#f0c078;
  --line:rgba(242,237,227,.12); --line-strong:rgba(242,237,227,.28); --maxw:1080px;
}
*{box-sizing:border-box;margin:0;padding:0}
.pf{background:var(--ink);color:var(--paper);font-family:'Manrope',system-ui,sans-serif;line-height:1.55;-webkit-font-smoothing:antialiased;min-height:100vh;overflow-x:hidden}
.pf a{color:inherit;text-decoration:none}
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
.nav-r a{font-size:.86rem;color:var(--muted);transition:color .2s}
.nav-r a:hover{color:var(--paper)}
.pf a:focus-visible,.pf button:focus-visible{outline:2px solid var(--accent);outline-offset:4px;border-radius:2px}
.toggle{display:inline-flex;border:1px solid var(--line-strong);border-radius:999px;overflow:hidden;font-family:'JetBrains Mono',monospace;font-size:.72rem}
.toggle button{background:none;border:0;color:var(--muted);padding:6px 11px;cursor:pointer;letter-spacing:.05em}
.toggle button.on{background:var(--accent);color:var(--ink);font-weight:700}

/* hero */
.hero{padding:clamp(56px,10vh,120px) 0 32px}
.hero-grid{display:grid;grid-template-columns:1.4fr .9fr;gap:40px;align-items:center}
.hero h1{font-size:clamp(2.6rem,7vw,5.4rem);line-height:.94;letter-spacing:.01em;margin:20px 0 24px;max-width:16ch}
.hero .sub{font-size:clamp(1.02rem,2vw,1.28rem);max-width:44ch;font-weight:300;color:var(--paper)}
.hero .sub b{font-weight:600}
.photo{aspect-ratio:4/5;border:1.5px dashed var(--line-strong);border-radius:16px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;color:var(--muted);background:linear-gradient(160deg,var(--ink-2),var(--panel));text-align:center;padding:20px}
.photo .pl{font-family:'Oswald',sans-serif;text-transform:uppercase;letter-spacing:.06em;font-size:1.05rem;color:var(--paper)}
.photo .ph{font-family:'JetBrains Mono',monospace;font-size:.72rem}
.photo .ic{width:38px;height:38px;border-radius:50%;border:1.5px solid var(--muted);display:flex;align-items:center;justify-content:center;margin-bottom:4px}

/* pipeline */
.pipeline{margin:52px 0 6px}
.pipeline svg{display:block;width:100%;height:60px;overflow:visible}
.track{stroke:var(--line-strong);stroke-width:2;fill:none}
.flow{stroke:var(--accent);stroke-width:2;fill:none;stroke-dasharray:1000;stroke-dashoffset:1000;animation:draw 1.6s .3s ease forwards}
@keyframes draw{to{stroke-dashoffset:0}}
.node{fill:var(--ink);stroke:var(--accent);stroke-width:2;opacity:0;transform-box:fill-box;transform-origin:center;animation:pop .4s ease forwards}
.node.n1{animation-delay:.5s}.node.n2{animation-delay:.85s}.node.n3{animation-delay:1.2s}.node.n4{animation-delay:1.55s;fill:var(--accent)}
@keyframes pop{from{opacity:0;transform:scale(0)}to{opacity:1;transform:scale(1)}}
.stages{display:grid;grid-template-columns:repeat(4,1fr);margin-top:4px}
.stage{text-align:center}
.stage .n{font-family:'JetBrains Mono',monospace;font-size:.7rem;color:var(--muted)}
.stage .l{font-family:'Oswald',sans-serif;font-weight:600;text-transform:uppercase;font-size:clamp(.85rem,2vw,1.25rem);letter-spacing:.03em;margin-top:2px}
.stage:last-child .l{color:var(--accent)}

/* sections */
.sec{padding:clamp(52px,8vh,92px) 0;border-top:1px solid var(--line)}
.sec-head{display:flex;align-items:baseline;gap:1rem;margin-bottom:34px;flex-wrap:wrap}
.sec-head h2{font-size:clamp(1.5rem,4vw,2.5rem);letter-spacing:.02em;line-height:1}

/* rows */
.row{display:grid;grid-template-columns:44px 1fr;gap:20px;padding:24px 0;border-top:1px solid var(--line);align-items:start}
.row:first-child{border-top:none}
.row .idx{font-family:'JetBrains Mono',monospace;color:var(--accent);font-size:.85rem;padding-top:5px}
.row h3{font-size:1.24rem;font-weight:700;margin-bottom:6px}
.row p{color:var(--muted);max-width:60ch;font-weight:300}

/* flagship */
.flag{background:linear-gradient(160deg,var(--ink-2),var(--panel));border:1px solid var(--line);border-radius:18px;padding:clamp(26px,4vw,46px)}
.flag h3{font-size:clamp(1.7rem,5vw,2.9rem);line-height:.96;margin:12px 0 16px;letter-spacing:.02em}
.flag p{font-weight:300;max-width:62ch;margin-bottom:20px}
.chips{display:flex;flex-wrap:wrap;gap:9px;margin-bottom:22px}
.chip{font-family:'JetBrains Mono',monospace;font-size:.74rem;padding:6px 11px;border:1px solid var(--line-strong);border-radius:999px;color:var(--muted)}
.status{display:inline-flex;align-items:center;gap:10px;font-size:.92rem;color:var(--accent-soft);margin-bottom:22px}
.status .pulse{width:9px;height:9px;border-radius:50%;background:var(--accent);animation:pulse 2s infinite}
@keyframes pulse{0%{box-shadow:0 0 0 0 rgba(232,163,61,.5)}70%{box-shadow:0 0 0 12px rgba(232,163,61,0)}100%{box-shadow:0 0 0 0 rgba(232,163,61,0)}}
.caselink{display:block;margin-top:4px;font-family:'JetBrains Mono',monospace;font-size:.85rem;color:var(--accent);background:none;border:0;cursor:pointer;padding:0}
.caselink:hover{color:var(--accent-soft)}

/* background grid */
.bg-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1px;background:var(--line)}
.cell{background:var(--ink);padding:24px}
.cell .k{font-family:'JetBrains Mono',monospace;color:var(--accent);font-size:.7rem;letter-spacing:.14em;text-transform:uppercase}
.cell .v{font-size:1.02rem;margin-top:8px;font-weight:300}
.fit{margin-top:26px;color:var(--muted);font-size:.95rem;font-weight:300;max-width:72ch;font-style:italic}
.fit b{color:var(--paper);font-style:normal;font-weight:600}

/* contact */
.contact h2{font-size:clamp(2rem,7vw,4.6rem);line-height:.94;margin-bottom:26px;white-space:pre-line}
.cta{display:inline-block;background:var(--accent);color:var(--ink);font-weight:700;font-size:1.02rem;padding:15px 30px;border-radius:999px;transition:transform .18s,box-shadow .18s}
.cta:hover{transform:translateY(-2px);box-shadow:0 10px 30px -10px rgba(232,163,61,.6)}
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
.shot{aspect-ratio:9/19;border:1.5px dashed var(--line-strong);border-radius:20px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;color:var(--muted);background:linear-gradient(160deg,var(--ink-2),var(--panel));text-align:center;padding:14px}
.shot .sl{font-family:'Oswald',sans-serif;text-transform:uppercase;font-size:.9rem;color:var(--paper);letter-spacing:.05em}
.shot .sh{font-family:'JetBrains Mono',monospace;font-size:.66rem}
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
  .pf *{animation:none!important;transition:none!important}
  .flow{stroke-dashoffset:0}.node{opacity:1}.reveal{opacity:1;transform:none}
}
`;

/* ---------------- small components ---------------- */
function Pipeline({ stages }) {
  const xs = [125, 375, 625, 875];
  return (
    <div className="pipeline" aria-hidden="true">
      <svg viewBox="0 0 1000 40" preserveAspectRatio="none">
        <line className="track" x1="125" y1="20" x2="875" y2="20" />
        <line className="flow" x1="125" y1="20" x2="875" y2="20" />
        {xs.map((x, i) => (
          <circle key={i} className={`node n${i + 1}`} cx={x} cy="20" r={i === 3 ? 8 : 7} />
        ))}
      </svg>
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

function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  });
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
            <div className="photo">
              <div className="ic">▲</div>
              <div className="pl">{t.photoLabel}</div>
              <div className="ph">{t.photoHint}</div>
            </div>
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
          <p className="alt reveal">{t.contactAlt1}<a href="#" target="_blank" rel="noopener">Upwork</a>{t.contactAlt2}</p>
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
        <div className="csub">{t.caseSubtitle}</div>
        <p className="ov">{t.caseOverview}</p>

        <div className="shots reveal">
          {[1, 2, 3].map((n) => (
            <div className="shot" key={n}>
              <div className="sl">{t.caseShotLabel} {n}</div>
              <div className="sh">{t.caseShotHint}</div>
            </div>
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
export default function App() {
  const [lang, setLang] = useState("en");
  const [view, setView] = useState(() => (typeof window !== "undefined" && window.location.hash === "#/padel" ? "padel" : "home"));
  const t = T[lang];

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
      <nav className="nav">
        <div className="wrap nav-in">
          <button className="brand" onClick={() => go("home")}><span className="bd" />Valeriy&nbsp;Bykov</button>
          <div className="nav-r">
            {view === "home" && <>
              <a href="#work" className="hide-sm">{t.nav.work}</a>
              <a href="#project" className="hide-sm">{t.nav.project}</a>
              <a href="#contact" className="hide-sm">{t.nav.contact}</a>
            </>}
            <div className="toggle" role="group" aria-label="Language">
              <button className={lang === "en" ? "on" : ""} onClick={() => setLang("en")}>EN</button>
              <button className={lang === "ru" ? "on" : ""} onClick={() => setLang("ru")}>RU</button>
            </div>
          </div>
        </div>
      </nav>

      {view === "home" ? <Home t={t} go={go} /> : <Padel t={t} go={go} />}

      <footer className="foot">
        <div className="wrap">
          <span className="mono">© 2026 Valeriy Bykov</span>
          <span className="mono">{t.footerBuilt}</span>
        </div>
      </footer>
    </div>
  );
}
