/* English Voyage — B1 → C1 oyunlaştırılmış İngilizce uygulaması.
 * Saf JavaScript, build yok. İçerik modules/*.js dosyalarından gelir (bkz. modules/README.md).
 * İlerleme tarayıcının localStorage'ında tutulur; Ayarlar'dan dışa/içe aktarılabilir. */
(() => {
  "use strict";

  // ---------------------------------------------------------------- content
  const MODULE_ORDER = ["tenses", "grammar", "marine", "conversation", "connectors"];
  const MODULES = (window.EA_MODULES || []).slice().sort((a, b) => {
    const ia = MODULE_ORDER.indexOf(a.id), ib = MODULE_ORDER.indexOf(b.id);
    return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib);
  });
  const PLAN = window.EA_PLAN || { weeks: [], levels: ["B1+", "B2", "B2+", "C1"] };
  // modules/teach/*.js: konu anlatımı adımları + uzun cümleli ek alıştırmalar
  const TEACH = window.EA_TEACH || {};
  MODULES.forEach((m) => m.units.forEach((u) => {
    const t = TEACH[u.id];
    if (!t) return;
    if (t.teach && !u.teach) u.teach = t.teach;
    if (t.extra && t.extra.length) u.exercises = u.exercises.concat(t.extra);
  }));
  const teachSteps = (u) => u.teach || [];
  // tahmini süre: anlatım adımı ~70 sn, alıştırma ~30 sn
  const unitMinutes = (u) => Math.max(5, Math.round((teachSteps(u).length * 70 + teachSteps(u).filter((t) => t.check).length * 25 + u.exercises.length * 30) / 60));
  const UNIT = {};
  MODULES.forEach((m) => m.units.forEach((u, i) => { UNIT[u.id] = { u, m, i }; }));
  const MOD = Object.fromEntries(MODULES.map((m) => [m.id, m]));
  const DEBUG = {}; // testler için: o an ekrandaki alıştırma

  // ---------------------------------------------------------------- utils
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const app = $("#app");
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const pad = (n) => String(n).padStart(2, "0");
  const dstr = (d = new Date()) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  const parseD = (s) => { const [y, m, d] = s.split("-").map(Number); return new Date(y, m - 1, d); };
  const addDays = (s, n) => { const d = parseD(s); d.setDate(d.getDate() + n); return dstr(d); };
  const daysBetween = (a, b) => Math.round((parseD(b) - parseD(a)) / 86400000);
  const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
  const shuffle = (arr) => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const sample = (arr, n) => shuffle(arr).slice(0, n);
  const norm = (s) => String(s).toLowerCase().replace(/[’‘`´]/g, "'").replace(/[“”]/g, '"').replace(/\s+/g, " ").trim().replace(/[.!?,;:]+$/, "").trim();
  const normLoose = (s) => String(s).toLowerCase().replace(/[’‘`´]/g, "'").replace(/[^a-z0-9'çğıöşü\s-]/gi, " ").replace(/\s+/g, " ").trim();
  function lev(a, b) {
    if (a === b) return 0;
    const m = a.length, n = b.length;
    if (!m || !n) return m || n;
    let prev = Array.from({ length: n + 1 }, (_, j) => j);
    for (let i = 1; i <= m; i++) {
      const cur = [i];
      for (let j = 1; j <= n; j++) cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      prev = cur;
    }
    return prev[n];
  }
  const fmtQ = (q) => esc(q).replace(/___/g, '<span class="blank"></span>').replace(/\n/g, "<br>");
  const sayBtn = (text, label = "🔊") => (window.speechSynthesis && text ? `<button class="speak" data-say="${esc(text)}" aria-label="Sesli dinle">${label}</button>` : "");

  function toast(msg, ms = 2200) {
    const t = document.createElement("div");
    t.className = "toast"; t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(() => t.remove(), ms);
  }
  // Sayfa içi onay penceresi → Promise<boolean>
  function ask(text, { ok = "Evet", cancel = "Vazgeç", danger = false } = {}) {
    return new Promise((resolve) => {
      const prevKey = keyHandler;
      const wrap = document.createElement("div");
      wrap.className = "modal";
      wrap.innerHTML = `<div class="dialog" role="dialog" aria-modal="true"><p>${esc(text)}</p>
        <div class="row"><button class="btn ghost" data-a="0">${esc(cancel)}</button><span class="spacer"></span><button class="btn ${danger ? "bad" : ""}" data-a="1">${esc(ok)}</button></div></div>`;
      const close = (v) => { wrap.remove(); keyHandler = prevKey; resolve(v); };
      wrap.addEventListener("click", (e) => { if (e.target === wrap) close(false); const b = e.target.closest("[data-a]"); if (b) close(b.dataset.a === "1"); });
      keyHandler = (e) => { if (e.key === "Escape") close(false); if (e.key === "Enter") { e.preventDefault(); close(true); } };
      document.body.appendChild(wrap);
      wrap.querySelector('[data-a="1"]').focus();
    });
  }
  function confetti() {
    const set = ["🎉", "⭐", "⚓", "✨", "🏆", "💙"];
    for (let i = 0; i < 28; i++) {
      const c = document.createElement("div");
      c.className = "confetti"; c.textContent = set[i % set.length];
      c.style.left = Math.random() * 100 + "vw";
      c.style.animationDelay = Math.random() * 0.6 + "s";
      document.body.appendChild(c);
      setTimeout(() => c.remove(), 3200);
    }
  }

  // ---------------------------------------------------------------- state
  const KEY = "ea_state_v1";
  const defaultState = () => ({
    version: 1, startDate: dstr(), xp: 0, streak: 0, bestStreak: 0, lastActive: null,
    days: {}, units: {}, cards: {}, mistakes: [], best: {}, weekTests: {}, challenges: {},
    settings: { goal: 20, accent: "en-GB", rate: 0.9, sound: true, unlockAll: false, theme: "auto" }
  });
  const hasProgress = (s) => !!s && ((s.xp || 0) > 0 || Object.keys(s.units || {}).length > 0);
  // İki cihazın durumunu birleştirir; `a` daha yeni olandır (ayarlar ve plan tarihi ondan gelir).
  function mergeStates(a, b) {
    const m = migrate(JSON.parse(JSON.stringify(a)));
    m.xp = Math.max(a.xp || 0, b.xp || 0);
    m.bestStreak = Math.max(a.bestStreak || 0, b.bestStreak || 0);
    if ((b.lastActive || "") > (a.lastActive || "")) { m.lastActive = b.lastActive; m.streak = b.streak; }
    Object.entries(b.units || {}).forEach(([k, u]) => {
      const x = m.units[k];
      m.units[k] = !x ? u : {
        done: !!(x.done || u.done), best: Math.max(x.best || 0, u.best || 0), stars: Math.max(x.stars || 0, u.stars || 0),
        attempts: Math.max(x.attempts || 0, u.attempts || 0), doneOn: x.doneOn || u.doneOn,
      };
    });
    Object.entries(b.cards || {}).forEach(([k, c]) => { if (!m.cards[k]) m.cards[k] = c; });
    Object.entries(b.days || {}).forEach(([d, x]) => {
      const y = m.days[d];
      m.days[d] = !y ? x : {
        ...y, sec: Math.max(y.sec || 0, x.sec || 0), xp: Math.max(y.xp || 0, x.xp || 0),
        units: [...new Set([...(y.units || []), ...(x.units || [])])], review: !!(y.review || x.review), game: !!(y.game || x.game),
      };
    });
    Object.entries(b.weekTests || {}).forEach(([w, v]) => { m.weekTests[w] = Math.max(m.weekTests[w] || 0, v); });
    Object.entries(b.challenges || {}).forEach(([k, v]) => { if (v) m.challenges[k] = true; });
    const ab = a.best || {}, bb = b.best || {};
    m.best = { ...bb, ...ab, speed: Math.max(ab.speed || 0, bb.speed || 0) };
    if (ab.match || bb.match) m.best.match = Math.min(ab.match || Infinity, bb.match || Infinity);
    m.updatedAt = Math.max(a.updatedAt || 0, b.updatedAt || 0);
    return m;
  }
  function migrate(s) { const d = defaultState(); return { ...d, ...s, settings: { ...d.settings, ...(s.settings || {}) } }; }
  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) return migrate(JSON.parse(raw));
    } catch (e) { /* ignore */ }
    return defaultState();
  }
  let S = load();
  // Kayıt: her zaman bu tarayıcıya; yayınlanan sürümde ayrıca hesaba (bkz. cloudSync)
  function save(sync = true) {
    if (sync) S.updatedAt = Date.now();
    try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* ignore */ }
    if (sync) cloud.schedule();
  }

  // claude.ai Artifact olarak açıldığında ilerleme kullanıcının özel db alanına da yazılır,
  // böylece telefon ve bilgisayarda aynı ilerleme görünür. Bağımsız açılışta hiçbir şey yapmaz.
  const cloud = {
    ref: null, timer: null, writing: false, pending: false, dirty: false, status: "local",
    schedule(delay = 4000) {
      if (!this.ref) return;
      this.dirty = true;
      clearTimeout(this.timer);
      this.timer = setTimeout(() => this.push(), delay);
    },
    async push() {
      if (!this.ref) return;
      if (this.writing) { this.pending = true; return; }
      clearTimeout(this.timer);
      this.writing = true; this.dirty = false;
      try { await this.ref.set({ v: 1, state: JSON.parse(JSON.stringify(S)) }); this.status = "synced"; }
      catch (e) {
        if (e && (e.code === "invalid_argument" || e.code === "revoked" || e.code === "not_granted")) { this.ref = null; this.status = "local"; }
        else this.status = "error";
      }
      this.writing = false;
      if (this.pending) { this.pending = false; this.push(); }
    },
    // Uzak kaydı okur ve yerel durumla birleştirir: ilerleme hiçbir zaman kaybolmaz.
    async pull() {
      if (!this.ref) return;
      let snap;
      try { snap = await this.ref.get(); } catch (e) { this.status = "error"; return; }
      const data = snap.exists ? snap.data() : null;
      const remote = data && data.state ? JSON.parse(JSON.stringify(data.state)) : null;
      if (!remote) { if (hasProgress(S)) this.push(); return; }
      const before = JSON.stringify(S);
      if (!hasProgress(S)) S = migrate(remote);
      else S = (remote.updatedAt || 0) > (S.updatedAt || 0) ? mergeStates(remote, S) : mergeStates(S, remote);
      save(false);
      if (JSON.stringify(S) !== JSON.stringify(remote)) this.push(); else this.status = "synced";
      // sadece pasif ekranlarda yeniden çiz (ders/oyun ortasında veya sonuç ekranında değil)
      if (JSON.stringify(S) !== before && !activeMode && /^\/($|modules$|module\/|unit\/|games$|plan$|settings$)/.test(route)) { applyTheme(); render(); }
    },
    async init() {
      try {
        if (!window.claude || typeof window.claude.use !== "function") return;
        const [db, user] = await Promise.all([window.claude.use("db"), window.claude.use("user")]);
        if (!db || !user) return;
        const uid = await user.id();
        if (!uid) return;
        this.ref = db.doc("data/users/" + uid + "/progress");
        await this.pull();
        document.addEventListener("visibilitychange", () => {
          if (document.visibilityState === "visible") this.pull();
          else if (this.dirty) this.push();
        });
      } catch (e) { this.ref = null; }
    },
  };
  const today = () => dstr();
  function day(d = today()) {
    if (!S.days[d]) S.days[d] = { sec: 0, xp: 0, units: [], review: false, game: false, plan: null };
    return S.days[d];
  }
  function streakNow() {
    if (!S.lastActive) return 0;
    const gap = daysBetween(S.lastActive, today());
    return gap <= 1 ? S.streak : 0;
  }
  function touchStreak() {
    const t = today();
    if (S.lastActive === t) return;
    S.streak = S.lastActive && daysBetween(S.lastActive, t) === 1 ? S.streak + 1 : 1;
    S.bestStreak = Math.max(S.bestStreak || 0, S.streak);
    S.lastActive = t;
  }
  function addXP(n) { if (n <= 0) return; S.xp += n; day().xp += n; touchStreak(); save(); }

  const curWeek = () => clamp(Math.floor(daysBetween(S.startDate, today()) / 7) + 1, 1, 8);
  const unitDone = (id) => !!(S.units[id] && S.units[id].done);
  const isUnlocked = (u) => {
    const { m, i } = UNIT[u.id];
    return S.settings.unlockAll || i === 0 || unitDone(u.id) || unitDone(m.units[i - 1].id);
  };
  const nextUnit = (m) => m.units.find((u) => !unitDone(u.id));
  const doneCount = (m) => m.units.filter((u) => unitDone(u.id)).length;
  const totalUnits = () => MODULES.reduce((a, m) => a + m.units.length, 0);
  const totalDone = () => MODULES.reduce((a, m) => a + doneCount(m), 0);
  function moduleLag(m, w = curWeek()) { return m.units.filter((u) => u.week <= w).length - doneCount(m); }
  // Bugünden önceki günlere göre beklenen ünite sayısı ile yapılanın farkı (+ önde, − geride)
  function planDelta() {
    const elapsed = Math.max(0, daysBetween(S.startDate, today()));
    let expected = 0;
    MODULES.forEach((m) => m.units.forEach((u) => { expected += clamp((elapsed - (u.week - 1) * 7) / 7, 0, 1); }));
    return totalDone() - Math.floor(expected);
  }
  function levelReached() {
    let reached = "B1";
    for (const lvl of PLAN.levels) {
      const us = MODULES.flatMap((m) => m.units.filter((u) => u.level === lvl));
      if (!us.length) continue;
      if (us.filter((u) => unitDone(u.id)).length / us.length >= 0.8) reached = lvl; else break;
    }
    return reached;
  }

  // ---------------------------------------------------------------- spaced repetition (Leitner)
  const INTERVALS = [0, 1, 2, 4, 7, 15, 30, 60];
  const cardKey = (uid, c) => uid + "|" + c.en;
  function addUnitCards(u) {
    (u.cards || []).forEach((c) => { const k = cardKey(u.id, c); if (!S.cards[k]) S.cards[k] = { box: 0, due: today() }; });
  }
  function cardIndex() {
    const idx = {};
    MODULES.forEach((m) => m.units.forEach((u) => (u.cards || []).forEach((c) => { idx[cardKey(u.id, c)] = { c, u, m }; })));
    return idx;
  }
  const CARDS = cardIndex();
  const myCards = () => Object.keys(S.cards).filter((k) => CARDS[k]).map((k) => ({ k, ...CARDS[k], st: S.cards[k] }));
  const dueCards = () => myCards().filter((x) => x.st.due <= today());
  function gradeCard(k, grade) {
    const st = S.cards[k] || (S.cards[k] = { box: 0, due: today() });
    if (grade === 0) st.box = 0;
    else if (grade === 2) st.box = Math.min(st.box + 1, INTERVALS.length - 1);
    st.due = addDays(today(), grade === 0 ? 0 : grade === 1 ? 1 : INTERVALS[st.box]);
    save();
  }
  // Oyunlar için kelime havuzu: öğrenilmiş kartlar, yoksa açık ünitelerin kartları
  function cardPool(min = 8) {
    let pool = myCards().map((x) => ({ k: x.k, c: x.c, u: x.u }));
    if (pool.length < min) {
      const extra = Object.entries(CARDS).filter(([k, x]) => isUnlocked(x.u) && !S.cards[k]).map(([k, x]) => ({ k, c: x.c, u: x.u }));
      pool = pool.concat(extra);
    }
    if (pool.length < min) pool = Object.entries(CARDS).map(([k, x]) => ({ k, c: x.c, u: x.u }));
    return pool;
  }

  // ---------------------------------------------------------------- mistakes
  const exRef = (uid, idx) => uid + "#" + idx;
  function getEx(ref) {
    const [uid, idx] = ref.split("#");
    const e = UNIT[uid] && UNIT[uid].u.exercises[+idx];
    return e ? { ex: e, uid, idx: +idx } : null;
  }
  function recordMistake(item) {
    if (!item.uid) return;
    const r = exRef(item.uid, item.idx);
    S.mistakes = [r].concat(S.mistakes.filter((x) => x !== r)).slice(0, 200);
  }
  function clearMistake(item) {
    if (!item.uid) return;
    const r = exRef(item.uid, item.idx);
    S.mistakes = S.mistakes.filter((x) => x !== r);
  }

  // ---------------------------------------------------------------- sound & speech
  let audioCtx = null;
  function beep(ok) {
    if (!S.settings.sound) return;
    try {
      audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
      const notes = ok ? [660, 880] : [220, 180];
      notes.forEach((f, i) => {
        const o = audioCtx.createOscillator(), g = audioCtx.createGain();
        o.type = ok ? "sine" : "square"; o.frequency.value = f;
        const t0 = audioCtx.currentTime + i * 0.09;
        g.gain.setValueAtTime(0.0001, t0);
        g.gain.exponentialRampToValueAtTime(ok ? 0.18 : 0.06, t0 + 0.01);
        g.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.16);
        o.connect(g).connect(audioCtx.destination); o.start(t0); o.stop(t0 + 0.18);
      });
    } catch (e) { /* ignore */ }
  }
  const TTS = !!window.speechSynthesis;
  function pickVoice() {
    if (!TTS) return null;
    const vs = speechSynthesis.getVoices();
    const lang = S.settings.accent.toLowerCase();
    return vs.find((v) => v.lang.toLowerCase().replace("_", "-") === lang && /natural|google|samantha|daniel|serena|neural/i.test(v.name))
      || vs.find((v) => v.lang.toLowerCase().replace("_", "-") === lang)
      || vs.find((v) => v.lang.toLowerCase().startsWith("en"));
  }
  function speak(text, slow = false) {
    if (!TTS || !text) return;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = S.settings.accent;
    const v = pickVoice(); if (v) u.voice = v;
    u.rate = slow ? 0.6 : S.settings.rate;
    speechSynthesis.speak(u);
  }
  if (TTS) speechSynthesis.onvoiceschanged = () => {};
  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-say]");
    if (b) { e.preventDefault(); e.stopPropagation(); speak(b.dataset.say, b.dataset.slow === "1"); }
  });

  // ---------------------------------------------------------------- active time tracking
  let activeMode = false, lastInput = Date.now(), tick = 0;
  ["click", "keydown", "touchstart"].forEach((ev) => document.addEventListener(ev, () => { lastInput = Date.now(); }, { passive: true }));
  setInterval(() => {
    if (!activeMode || document.visibilityState !== "visible" || Date.now() - lastInput > 90000) return;
    day().sec += 1;
    if (++tick % 10 === 0) save(false);
  }, 1000);

  // keyboard handler for the current screen
  let keyHandler = null;
  // ekrandan çıkarken çalışacak temizlik fonksiyonları (zamanlayıcılar vb.)
  let leaveFns = [];
  const onLeave = (fn) => leaveFns.push(fn);
  document.addEventListener("keydown", (e) => { if (keyHandler) keyHandler(e); });

  // ---------------------------------------------------------------- daily plan
  function todaysPlan() {
    const d = day();
    if (!d.plan) {
      const n = MODULES.length;
      const offset = Math.max(0, daysBetween(S.startDate, today()));
      const cands = MODULES.map((m, i) => ({ m, lag: moduleLag(m), rot: ((i - offset * 2) % n + n) % n }))
        .filter((x) => nextUnit(x.m))
        .sort((a, b) => (b.lag > 0) - (a.lag > 0) || b.lag - a.lag || a.rot - b.rot);
      // üniteler ~15 dk: planın gerisindeysen 2, değilsen 1 ünite (+ tekrar) → günde 15-30 dk
      d.plan = cands.slice(0, planDelta() < 0 ? 2 : 1).map((x) => nextUnit(x.m).id);
      save(false);
    }
    return d.plan;
  }

  // ================================================================ ROUTER
  const routes = [
    [/^#?\/?$/, viewHome],
    [/^#\/modules$/, viewModules],
    [/^#\/module\/([\w-]+)$/, viewModule],
    [/^#\/unit\/([\w-]+)$/, viewUnitIntro],
    [/^#\/lesson\/([\w-]+)$/, viewLesson],
    [/^#\/learn\/([\w-]+)$/, viewLearn],
    [/^#\/games$/, viewGames],
    [/^#\/review$/, viewReview],
    [/^#\/speed$/, viewSpeed],
    [/^#\/match$/, viewMatchRush],
    [/^#\/quiz\/(mix|mistakes)$/, viewQuiz],
    [/^#\/week\/(\d)$/, viewWeekTest],
    [/^#\/plan$/, viewPlan],
    [/^#\/settings$/, viewSettings],
  ];
  let route = (location.hash || "#/").replace(/^#/, "");
  function render() {
    leaveFns.forEach((fn) => fn()); leaveFns = [];
    keyHandler = null; activeMode = false;
    if (TTS) speechSynthesis.cancel();
    document.body.classList.remove("in-session");
    $$(".confetti, .modal").forEach((el) => el.remove());
    const h = "#" + route;
    const tab = h.startsWith("#/module") || h.startsWith("#/unit") ? "modules"
      : h.startsWith("#/games") ? "games" : h.startsWith("#/plan") ? "plan" : h.startsWith("#/settings") ? "settings" : "home";
    $$("#tabbar a").forEach((a) => a.classList.toggle("active", a.dataset.tab === tab));
    for (const [re, fn] of routes) {
      const m = h.match(re);
      if (m) { fn(...m.slice(1)); window.scrollTo(0, 0); return; }
    }
    viewHome();
  }
  // Yönlendirme durumu sayfada tutulur; geçmiş (geri tuşu) destekleniyorsa ona da yazılır.
  function go(h) {
    route = h.replace(/^#/, "") || "/";
    try { if (location.hash !== "#" + route) history.pushState(null, "", "#" + route); } catch (e) { /* sandbox */ }
    render();
  }
  window.addEventListener("popstate", () => { route = (location.hash || "#/").replace(/^#/, ""); render(); });
  document.addEventListener("click", (e) => {
    const a = e.target.closest('a[href^="#/"]');
    if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey) return;
    e.preventDefault();
    go(a.getAttribute("href"));
  });

  let themeSet = false;
  function applyTheme() {
    const t = S.settings.theme;
    if (t === "auto") { if (themeSet) { document.documentElement.removeAttribute("data-theme"); themeSet = false; } }
    else { document.documentElement.setAttribute("data-theme", t); themeSet = true; }
  }

  // ================================================================ VIEWS
  function topStats() {
    const w = curWeek();
    const wk = PLAN.weeks[w - 1];
    return `<div class="topstats">
      <div class="brand">⚓ English Voyage</div>
      <div class="pills"><span class="pill" title="Seri">🔥 ${streakNow()}</span>
      <span class="pill" title="Toplam XP">⭐ ${S.xp}</span>
      <span class="pill" title="Plan haftası">🗓️ Hafta ${w}/8${wk ? " · " + wk.level : ""}</span></div>
    </div>`;
  }

  function viewHome() {
    const d = day();
    const goalSec = S.settings.goal * 60;
    const pct = clamp(Math.round((d.sec / goalSec) * 100), 0, 100);
    const plan = todaysPlan();
    const due = dueCards().length;
    const delta = planDelta();
    const w = curWeek();
    const wk = PLAN.weeks[w - 1] || {};
    const tasks = plan.map((id) => {
      const x = UNIT[id]; if (!x) return "";
      const done = d.units.includes(id);
      return `<a class="task ${done ? "done" : ""}" href="#/unit/${id}" style="--accent:${x.m.color};--accent-ink:var(--on-bright)">
        <div class="ic">${done ? "✅" : x.m.icon}</div>
        <div><div class="t">${esc(x.u.title)}</div><div class="small muted">${esc(x.m.title)} · ${x.u.level} · ~${unitMinutes(x.u)} dk</div></div>
        <div class="chev">›</div></a>`;
    }).join("");
    const practiceDone = d.review || d.game;
    const reviewTask = due > 0 || d.review
      ? `<a class="task ${practiceDone ? "done" : ""}" href="#/review"><div class="ic">${practiceDone ? "✅" : "🃏"}</div>
          <div><div class="t">Kart tekrarı</div><div class="small muted">${due ? due + " kart tekrar bekliyor" : "Bugünün kartları bitti"} · ~5 dk</div></div><div class="chev">›</div></a>`
      : `<a class="task ${practiceDone ? "done" : ""}" href="#/speed"><div class="ic">${practiceDone ? "✅" : "⚡"}</div>
          <div><div class="t">Hız Turu</div><div class="small muted">60 saniyelik tekrar oyunu · ~3 dk</div></div><div class="chev">›</div></a>`;
    const allDone = plan.every((id) => d.units.includes(id)) && practiceDone;
    const deltaMsg = delta > 0 ? `Plandan <b>${delta} ünite öndesin</b> 🚀`
      : delta < 0 ? `Plandan <b>${-delta} ünite geridesin</b> — bugün bir ünite fazla yapmayı dene 💪`
        : "Tam plana uygun ilerliyorsun 👌";
    const cont = MODULES.map((m) => {
      const nu = nextUnit(m);
      const dc = doneCount(m);
      return `<a class="card tap" href="#/module/${m.id}" style="--accent:${m.color};--accent-ink:var(--on-bright);margin:0">
        <div class="row"><span style="font-size:1.6rem">${m.icon}</span><div style="flex:1;min-width:0"><b>${esc(m.title)}</b>
        <div class="small muted" style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${nu ? "Sıradaki: " + esc(nu.title) : "Tamamlandı 🏆"}</div></div></div>
        <div class="bar" style="margin-top:10px"><i style="width:${(dc / m.units.length) * 100}%"></i></div>
        <div class="small muted" style="margin-top:4px">${dc}/${m.units.length} ünite</div></a>`;
    }).join("");

    app.innerHTML = `<div class="wrap">
      ${topStats()}
      <div class="card">
        <div class="row" style="flex-wrap:nowrap">
          <div class="ring" style="--p:${pct}"><div>${Math.floor(d.sec / 60)}<br><span class="small muted">/${S.settings.goal} dk</span></div></div>
          <div style="flex:1">
            <h2 style="margin:0">${allDone ? "Bugünün görevi tamam! 🎉" : "Bugünün planı"}</h2>
            <div class="small muted">Hafta ${w}: <b>${esc(wk.title || "")}</b> · Hedef seviye ${wk.level || ""}</div>
            <div class="small" style="margin-top:4px">${deltaMsg}</div>
          </div>
        </div>
        ${tasks || `<p class="muted">Tüm üniteleri bitirdin! Oyunlar ve haftalık sınavlarla tekrar yapmaya devam et.</p>`}
        ${reviewTask}
        ${allDone ? `<p class="small muted" style="margin:12px 0 0">Daha fazla çalışmak istersen aşağıdan istediğin modülde ilerleyebilirsin — günlük sınır yok.</p>` : ""}
      </div>

      <div class="row" style="margin:6px 0 10px"><h2 style="margin:0">Ekstra çalış</h2><span class="spacer"></span><a class="small" href="#/modules">Tümü ›</a></div>
      <div class="grid">${cont}</div>

      <div class="row" style="margin:20px 0 10px"><h2 style="margin:0">Hızlı oyunlar</h2><span class="spacer"></span><a class="small" href="#/games">Tümü ›</a></div>
      <div class="grid">
        <a class="card tap" href="#/speed" style="margin:0"><b>⚡ Hız Turu</b><div class="small muted">60 sn · rekor ${S.best.speed || 0}</div></a>
        <a class="card tap" href="#/review" style="margin:0"><b>🃏 Kart Tekrarı</b><div class="small muted">${due} kart bekliyor</div></a>
        <a class="card tap" href="#/quiz/mistakes" style="margin:0"><b>🩹 Hatalarım</b><div class="small muted">${S.mistakes.length} soru</div></a>
      </div>
    </div>`;
  }

  function viewModules() {
    app.innerHTML = `<div class="wrap">${topStats()}
      <h1>Modüller</h1>
      <p class="muted small">Her modül kendi içinde sırayla açılır. İstediğin gün istediğin modülde istediğin kadar ilerleyebilirsin.</p>
      ${MODULES.map((m) => {
        const dc = doneCount(m);
        const lag = moduleLag(m);
        return `<a class="card tap" href="#/module/${m.id}" style="--accent:${m.color};--accent-ink:var(--on-bright)">
          <div class="row"><span style="font-size:2rem">${m.icon}</span>
            <div style="flex:1"><h3 style="margin:0">${esc(m.title)}</h3><div class="small muted">${esc(m.description)}</div></div></div>
          <div class="bar" style="margin-top:12px"><i style="width:${(dc / m.units.length) * 100}%"></i></div>
          <div class="row small muted" style="margin-top:6px"><span>${dc}/${m.units.length} ünite</span><span class="spacer"></span>
            <span>${lag > 0 ? `Bu hafta için ${lag} ünite kaldı` : "Bu haftanın hedefi tamam ✓"}</span></div>
        </a>`;
      }).join("")}
    </div>`;
  }

  function viewModule(id) {
    const m = MOD[id];
    if (!m) return go("#/modules");
    const nu = nextUnit(m);
    let html = "", lastWeek = 0, k = 0;
    m.units.forEach((u) => {
      if (u.week !== lastWeek) {
        if (lastWeek) html += "</div>";
        lastWeek = u.week;
        html += `<div class="weekhead"><span class="badge lvl">Hafta ${u.week}</span><span class="badge">${u.level}</span></div><div class="path">`;
      }
      const st = S.units[u.id];
      const done = unitDone(u.id), unlocked = isUnlocked(u), current = nu && nu.id === u.id;
      const off = Math.round(Math.sin(k++ * 1.1) * 70);
      const stars = done ? "★".repeat(st.stars || 1) + "☆".repeat(3 - (st.stars || 1)) : "";
      html += `<button class="node ${done ? "done" : unlocked ? "" : "locked"} ${current ? "current" : ""}" data-unit="${u.id}" style="transform:translateX(${off}px)">
        <div class="dot">${done ? "★" : unlocked ? UNIT[u.id].i + 1 : "🔒"}</div>
        <div class="nt">${esc(u.title)}</div>
        <div class="stars">${stars}</div></button>`;
    });
    if (lastWeek) html += "</div>";
    app.innerHTML = `<div class="wrap" style="--accent:${m.color};--accent-ink:var(--on-bright)">
      <div class="row"><a href="#/modules" class="iconbtn" aria-label="Geri">←</a><span style="font-size:1.8rem">${m.icon}</span><h1 style="margin:0">${esc(m.title)}</h1></div>
      <p class="muted small">${esc(m.description)}</p>
      <div class="bar"><i style="width:${(doneCount(m) / m.units.length) * 100}%"></i></div>
      ${html}
      <div style="height:20px"></div>
    </div>`;
    $$(".node", app).forEach((b) => b.addEventListener("click", () => {
      const u = UNIT[b.dataset.unit].u;
      if (isUnlocked(u)) return go("#/unit/" + u.id);
      ask("Bu ünite henüz kilitli. Yine de şimdi açmak ister misin? Kendi hızında ilerleyebilirsin.", { ok: "Aç" })
        .then((yes) => { if (yes) go("#/unit/" + u.id); });
    }));
  }

  function viewUnitIntro(id) {
    const x = UNIT[id];
    if (!x) return go("#/modules");
    const { u, m } = x;
    const it = u.intro || {};
    const st = S.units[id];
    activeMode = true;
    app.innerHTML = `<div class="wrap intro" style="--accent:${m.color};--accent-ink:var(--on-bright)">
      <div class="row"><a href="#/module/${m.id}" class="iconbtn" aria-label="Geri">←</a>
        <span class="badge lvl">${u.level}</span><span class="badge">Hafta ${u.week}</span><span class="badge">${m.icon} ${esc(m.title)}</span></div>
      <h1 style="margin-top:10px">${esc(u.title)}</h1>
      ${st && st.done ? `<p class="small muted">En iyi skor: %${Math.round((st.best || 0) * 100)} · <span class="stars">${"★".repeat(st.stars || 1)}</span></p>` : ""}
      <div class="card lessonplan"><div class="row"><b>⏱️ ~${unitMinutes(u)} dk</b><span class="spacer"></span>
        <span class="small muted">${teachSteps(u).length ? `${teachSteps(u).length} adım konu anlatımı → ` : ""}${u.exercises.length} alıştırma</span></div>
        ${teachSteps(u).length ? `<ol class="steps">${teachSteps(u).map((t) => `<li>${esc(t.title)}</li>`).join("")}</ol>` : ""}
        <button class="btn block" id="start">${teachSteps(u).length ? "Derse başla: önce konu anlatımı" : `Derse başla · ${u.exercises.length} soru`}</button>
        ${teachSteps(u).length && st ? `<button class="btn ghost block" id="learn" style="margin-top:10px">Sadece konu anlatımını tekrar oku</button>` : ""}</div>
      <div class="card"><h3>📝 Özet</h3><p>${esc(it.tr)}</p>
        ${it.points && it.points.length ? `<ul>${it.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>` : ""}</div>
      ${it.examples && it.examples.length ? `<div class="card"><h3>💡 Örnekler</h3>
        ${it.examples.map((e) => `<div class="ex"><div><b>${esc(e.en)}</b> ${sayBtn(e.en)}</div><div class="small muted">${esc(e.tr)}</div></div>`).join("")}</div>` : ""}
      ${u.cards && u.cards.length ? `<div class="card"><h3>🃏 Bu ünitenin kartları (${u.cards.length})</h3>
        ${u.cards.map((c) => `<div class="ex"><b>${esc(c.en)}</b> ${sayBtn(c.en)} — <span class="muted">${esc(c.tr)}</span>${c.ex ? `<div class="small muted"><i>${esc(c.ex)}</i></div>` : ""}</div>`).join("")}
        <p class="small muted">Üniteyi bitirince bu kartlar tekrar sistemine eklenir.</p></div>` : ""}
      <div style="height:16px"></div>
    </div>`;
    $("#start").addEventListener("click", () => go("#/lesson/" + id));
    const learn = $("#learn");
    if (learn) learn.addEventListener("click", () => go("#/learn/" + id));
  }

  // ================================================================ EXERCISE ENGINE
  // Her alıştırma: render(el, ex, finish) → finish(ok, {answer, note, say})
  const EX = {
    mcq(el, ex, finish) {
      const opts = shuffle(ex.options.map((t, i) => ({ t, i })));
      const plain = ex.q.includes("___") ? null : ex.q;
      el.innerHTML = `<div class="prompt">Doğru seçeneği seç</div>
        <div class="q">${fmtQ(ex.q)} ${plain ? sayBtn(plain) : ""}</div>
        <div class="options">${opts.map((o, j) => `<button class="opt" data-i="${o.i}"><span class="key">${j + 1}</span><span>${esc(o.t)}</span></button>`).join("")}</div>`;
      const btns = $$(".opt", el);
      const choose = (b) => {
        if (b.disabled) return;
        btns.forEach((x) => { x.disabled = true; });
        const ok = +b.dataset.i === ex.answer;
        b.classList.add(ok ? "right" : "wrong");
        btns.find((x) => +x.dataset.i === ex.answer).classList.add("right");
        const ans = ex.options[ex.answer];
        finish(ok, { answer: ans, say: ex.q.includes("___") ? ex.q.replace("___", ans) : null });
      };
      btns.forEach((b) => b.addEventListener("click", () => choose(b)));
      return (e) => { const n = +e.key; if (n >= 1 && n <= btns.length) choose(btns[n - 1]); };
    },

    fill(el, ex, finish) {
      const [before, after] = ex.q.split("___");
      el.innerHTML = `<div class="prompt">Boşluğu doldur</div>
        <div class="q">${esc(before).replace(/\n/g, "<br>")}<input class="fillin" id="fi" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="cevap">${esc(after || "").replace(/\n/g, "<br>")}</div>
        ${ex.hint ? `<button class="btn ghost sm hintbtn" id="hint">💡 İpucu</button> <span id="hinttext" class="muted small"></span>` : ""}
        <div style="margin-top:18px"><button class="btn block" id="chk">Kontrol et</button></div>`;
      const inp = $("#fi", el);
      setTimeout(() => inp.focus(), 50);
      if (ex.hint) $("#hint", el).addEventListener("click", () => { $("#hinttext", el).textContent = ex.hint; });
      const check = () => {
        const v = norm(inp.value);
        if (!v) { inp.focus(); return; }
        inp.disabled = true; $("#chk", el).disabled = true;
        const answers = ex.answers.map(norm);
        let ok = answers.includes(v), note = "";
        if (!ok) {
          const close = answers.find((a) => a.length >= 5 && lev(a, v) === 1);
          if (close) { ok = true; note = `Küçük bir yazım hatası var: doğrusu “${close}”.`; }
        }
        finish(ok, { answer: ex.answers[0], note, say: ex.q.replace("___", ok ? inp.value.trim() : ex.answers[0]) });
      };
      $("#chk", el).addEventListener("click", check);
      inp.addEventListener("keydown", (e) => { if (e.key === "Enter") { e.preventDefault(); e.stopPropagation(); check(); } });
      return null;
    },

    order(el, ex, finish, prompt = "Kelimeleri sıraya dizerek cümleyi kur", header = null) {
      const tokens = ex.answer.trim().split(/\s+/);
      let bank = shuffle(tokens.concat(ex.extra || []).map((t, i) => ({ t, id: i })));
      if (bank.length > 2 && bank.map((b) => b.t).join(" ") === tokens.join(" ")) bank = bank.slice(1).concat(bank[0]);
      const chosen = [];
      el.innerHTML = `<div class="prompt">${prompt}</div>
        ${header != null ? header : ex.tr ? `<div class="q">🇹🇷 ${esc(ex.tr)}</div>` : ""}
        <div class="answer-line" id="line"></div>
        <div class="bank" id="bank"></div>
        <div style="margin-top:22px"><button class="btn block" id="chk" disabled>Kontrol et</button></div>`;
      const line = $("#line", el), bankEl = $("#bank", el), chk = $("#chk", el);
      let locked = false;
      const draw = () => {
        line.innerHTML = chosen.map((c) => `<button class="chip" data-id="${c.id}">${esc(c.t)}</button>`).join("");
        bankEl.innerHTML = bank.map((c) => `<button class="chip ${chosen.includes(c) ? "used" : ""}" data-id="${c.id}">${esc(c.t)}</button>`).join("");
        chk.disabled = !chosen.length || locked;
        $$(".chip", line).forEach((b) => b.addEventListener("click", () => {
          if (locked) return;
          const i = chosen.findIndex((c) => c.id === +b.dataset.id); chosen.splice(i, 1); draw();
        }));
        $$(".chip", bankEl).forEach((b) => b.addEventListener("click", () => {
          if (locked) return;
          const c = bank.find((x) => x.id === +b.dataset.id); if (!chosen.includes(c)) { chosen.push(c); draw(); }
        }));
      };
      draw();
      const check = () => {
        if (locked || !chosen.length) return;
        locked = true; chk.disabled = true;
        const built = normLoose(chosen.map((c) => c.t).join(" "));
        const ok = [ex.answer].concat(ex.alts || []).some((a) => normLoose(a) === built);
        finish(ok, { answer: ex.answer + (ex.type === "combine" && ex.tr ? `\n🇹🇷 ${ex.tr}` : ""), say: ex.answer });
      };
      chk.addEventListener("click", check);
      return (e) => { if (e.key === "Enter") check(); else if (e.key === "Backspace" && chosen.length && !locked) { chosen.pop(); draw(); } };
    },

    // Kısa cümleleri tek uzun cümlede birleştirme (kelime kartlarıyla; extra = yanlış bağlaç çeldiricileri)
    combine(el, ex, finish) {
      const header = `<div class="q parts">${ex.parts.map((p) => `<div class="part">• ${esc(p)} ${sayBtn(p)}</div>`).join("")}
        <div class="small muted" style="margin-top:6px">Doğru bağlacı seç; fazladan kartlar var.</div></div>`;
      return EX.order(el, ex, finish, "Bu cümleleri tek cümlede birleştir", header);
    },

    match(el, ex, finish) {
      const L = shuffle(ex.pairs.map((p, i) => ({ t: p[0], i })));
      const R = shuffle(ex.pairs.map((p, i) => ({ t: p[1], i })));
      el.innerHTML = `<div class="prompt">Eşleştir</div>
        <div class="matchgrid"><div class="col">${L.map((x) => `<button class="mitem" data-side="L" data-i="${x.i}">${esc(x.t)}</button>`).join("")}</div>
        <div class="col">${R.map((x) => `<button class="mitem" data-side="R" data-i="${x.i}">${esc(x.t)}</button>`).join("")}</div></div>`;
      let sel = { L: null, R: null }, mistakes = 0, matched = 0;
      $$(".mitem", el).forEach((b) => b.addEventListener("click", () => {
        if (b.classList.contains("matched")) return;
        const side = b.dataset.side;
        if (side === "L") speak(b.textContent);
        if (sel[side]) sel[side].classList.remove("sel");
        sel[side] = b; b.classList.add("sel");
        if (sel.L && sel.R) {
          const a = sel.L, c = sel.R; sel = { L: null, R: null };
          a.classList.remove("sel"); c.classList.remove("sel");
          if (a.dataset.i === c.dataset.i) {
            a.classList.add("matched"); c.classList.add("matched"); matched++;
            if (matched === ex.pairs.length) finish(mistakes === 0, { answer: mistakes ? `${mistakes} hatalı eşleştirme yaptın.` : null, plainAnswer: true });
          } else {
            mistakes++; beep(false);
            [a, c].forEach((x) => { x.classList.add("flash"); setTimeout(() => x.classList.remove("flash"), 400); });
          }
        }
      }));
      return null;
    },

    listen(el, ex, finish) {
      if (!TTS) return EX.order(el, { answer: ex.text, tr: ex.tr }, finish, "Kelimeleri sıraya diz (sesli okuma desteklenmiyor)");
      el.innerHTML = `<div class="prompt">Dinle ve duyduğunu yaz</div>
        <div class="listenbtns"><button class="btn bigspeak" data-say="${esc(ex.text)}">🔊</button>
        <button class="btn ghost bigspeak" data-say="${esc(ex.text)}" data-slow="1">🐢</button></div>
        <textarea class="textin" id="li" rows="2" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="İngilizce yaz…"></textarea>
        <div style="margin-top:18px"><button class="btn block" id="chk">Kontrol et</button></div>
        <p class="small muted" style="text-align:center"><button class="linkbtn" id="nosound">Ses gelmiyor mu? Cümle kurma olarak çöz</button></p>`;
      setTimeout(() => speak(ex.text), 300);
      $("#nosound", el).addEventListener("click", () => {
        if (TTS) speechSynthesis.cancel();
        keyHandler = EX.order(el, { answer: ex.text, tr: ex.tr }, finish, "Kelimeleri sıraya dizerek cümleyi kur");
      });
      const inp = $("#li", el);
      const check = () => {
        const v = normLoose(inp.value);
        if (!v) { inp.focus(); return; }
        inp.disabled = true; $("#chk", el).disabled = true;
        const target = normLoose(ex.text);
        const d = lev(target, v);
        const ok = d === 0 || (target.length >= 12 && d <= 2);
        finish(ok, { answer: ex.text + (ex.tr ? `\n🇹🇷 ${ex.tr}` : ""), note: ok && d ? "Küçük yazım farkları var, yukarıdaki doğru hâline bak." : "", say: ex.text });
      };
      $("#chk", el).addEventListener("click", check);
      inp.addEventListener("keydown", (e) => { if (e.key === "Enter") { e.preventDefault(); e.stopPropagation(); check(); } });
      return null;
    },
  };

  const paras = (t) => String(t || "").split(/\n\s*\n/).map((p) => `<p>${esc(p.trim()).replace(/\n/g, "<br>")}</p>`).join("");
  function renderTeach(el, item) {
    const st = item.teach;
    el.innerHTML = `<div class="teach">
      <div class="eyebrow">📖 Konu anlatımı · ${item.ti + 1}/${item.tn}</div>
      <h2>${esc(st.title)}</h2>
      ${paras(st.tr)}
      ${st.pattern ? `<div class="pattern"><span class="lbl">Kalıp</span>${esc(st.pattern).replace(/\n/g, "<br>")}</div>` : ""}
      ${st.logic ? `<div class="logic"><span class="lbl">🧠 Mantık</span>${esc(st.logic).replace(/\n/g, "<br>")}</div>` : ""}
      ${(st.examples || []).length ? `<div class="texs">${st.examples.map((e) => `<div class="tex">
        <div class="en">${esc(e.en)} ${sayBtn(e.en)}</div><div class="tr">${esc(e.tr)}</div>
        ${e.note ? `<div class="note">↳ ${esc(e.note)}</div>` : ""}</div>`).join("")}</div>` : ""}
      ${(st.mistakes || []).length ? `<div class="mistakes"><span class="lbl">⚠️ Sık yapılan hatalar</span>${st.mistakes.map((x) => `<div class="mistake">
        <div class="wrong">✗ ${esc(x.wrong)}</div><div class="right">✓ ${esc(x.right)}</div>${x.why ? `<div class="why">${esc(x.why)}</div>` : ""}</div>`).join("")}</div>` : ""}
    </div>`;
  }

  /* Bir ders/alıştırma oturumu çalıştırır.
   * items: [{ex, uid, idx}] alıştırma · [{teach, ti, tn}] anlatım adımı · [{ex, check:true}] hızlı kontrol (puana sayılmaz)
   * opts: {accent, requeue, exitTo, onDone(result)} */
  function runSession(items, opts) {
    document.body.classList.add("in-session");
    activeMode = true;
    let queue = items.map((it) => ({ ...it, first: true }));
    const total = items.filter((it) => !it.teach && !it.check).length;
    const steps = items.length;
    let resolved = 0, firstCorrect = 0, xp = 0, streak = 0;
    const wrong = [];
    app.innerHTML = `<div class="session" style="${opts.accent ? `--accent:${opts.accent};--accent-ink:var(--on-bright)` : ""}">
      <div class="sess-top"><button class="iconbtn" id="quit" aria-label="Çık">✕</button>
        <div class="bar"><i id="prog" style="width:0%"></i></div><span id="combo" class="combo small"></span></div>
      <div class="sess-body" id="body"></div>
      <div class="sess-foot" id="foot" hidden></div></div>`;
    $("#quit").addEventListener("click", () => {
      ask("Dersten çıkmak istiyor musun? Şimdiye kadar kazandığın XP kaydedildi.", { ok: "Çık", cancel: "Devam et" })
        .then((yes) => { if (yes) go(opts.exitTo || "#/"); });
    });
    const body = $("#body"), foot = $("#foot"), prog = $("#prog");

    const next = () => {
      keyHandler = null;
      foot.hidden = true; foot.className = "sess-foot";
      if (!queue.length) { activeMode = false; return opts.onDone({ firstCorrect, total, wrong, xp }); }
      const item = queue.shift();
      body.innerHTML = "";
      const host = document.createElement("div");
      if (item.teach) {
        body.appendChild(host);
        renderTeach(host, item);
        DEBUG.current = { type: "teach" };
        const hasMore = queue.some((x) => x.teach);
        foot.className = "sess-foot";
        foot.innerHTML = `<button class="btn block" id="cont">${hasMore ? "Anladım, devam" : "Anladım, alıştırmalara geç"}</button>
          ${queue.some((x) => !x.teach && !x.check) ? `<p class="small" style="text-align:center;margin:8px 0 0"><button class="linkbtn" id="skipteach">Anlatımı geç, sorulara başla</button></p>` : ""}`;
        foot.hidden = false;
        let advanced = false;
        const advance = () => { if (advanced) return; advanced = true; resolved++; prog.style.width = (resolved / steps) * 100 + "%"; next(); };
        $("#cont").addEventListener("click", advance);
        const skip = $("#skipteach");
        if (skip) skip.addEventListener("click", () => {
          if (advanced) return; advanced = true;
          const removed = queue.filter((x) => x.teach || x.check).length + 1;
          queue = queue.filter((x) => !x.teach && !x.check);
          resolved += removed; prog.style.width = (resolved / steps) * 100 + "%";
          next();
        });
        keyHandler = (e) => { if (e.key === "Enter") { e.preventDefault(); advance(); } };
        window.scrollTo(0, 0);
        return;
      }
      if (item.check) body.insertAdjacentHTML("beforeend", `<div class="badge" style="margin-bottom:10px">⚡ Hızlı kontrol</div>`);
      else if (!item.first) body.insertAdjacentHTML("beforeend", `<div class="badge" style="margin-bottom:10px">🔁 Tekrar deneme</div>`);
      body.appendChild(host);
      const fn = EX[item.ex.type];
      if (!fn) return next();
      DEBUG.current = item.ex;
      keyHandler = fn(host, item.ex, (ok, info) => feedback(item, ok, info || {})) || null;
      window.scrollTo(0, 0);
    };

    const feedback = (item, ok, info) => {
      beep(ok);
      if (item.check) { /* hızlı kontrol: puana ve hatalara sayılmaz */ }
      else if (item.first) {
        if (ok) { firstCorrect++; clearMistake(item); } else { wrong.push(item); recordMistake(item); }
      }
      streak = ok ? streak + 1 : 0;
      $("#combo").textContent = streak >= 3 ? `🔥 ${streak}` : "";
      const gain = ok ? (item.first ? 10 : 5) + (streak >= 5 ? 2 : 0) : 0;
      xp += gain; addXP(gain);
      const retry = !ok && item.first && opts.requeue && !item.check;
      if (!retry) resolved++;
      else queue.push({ ...item, first: false });
      prog.style.width = (resolved / steps) * 100 + "%";
      const praise = ["Harika!", "Mükemmel!", "Çok iyi!", "Süper!", "Aynen öyle!", "Bravo!"];
      const answerHtml = info.answer
        ? (info.plainAnswer ? esc(info.answer) : `${ok ? "" : "Doğru cevap: "}<b>${esc(info.answer).replace(/\n/g, "<br>")}</b>`) : "";
      foot.className = "sess-foot " + (ok ? "ok" : "bad");
      foot.innerHTML = `<div class="fb-title">${ok ? "✓ " + praise[Math.floor(Math.random() * praise.length)] : "✗ Olmadı"}
          ${info.say ? sayBtn(info.say) : ""}</div>
        <div class="fb-text">${ok && !info.note ? "" : answerHtml}
          ${info.note ? `<div class="small">${esc(info.note)}</div>` : ""}
          ${item.ex.explain ? `<div class="small" style="margin-top:4px">💬 ${esc(item.ex.explain)}</div>` : ""}</div>
        <button class="btn block ${ok ? "ok" : "bad"}" id="cont">Devam</button>`;
      foot.hidden = false;
      const cont = $("#cont");
      let advanced = false;
      const advance = () => { if (advanced) return; advanced = true; next(); };
      cont.addEventListener("click", advance);
      setTimeout(() => cont.focus(), 30);
      keyHandler = (e) => { if (e.key === "Enter") { e.preventDefault(); advance(); } };
      save();
    };
    next();
  }

  function resultScreen({ title, emoji, score, stars, stats, wrong, buttons, celebrate }) {
    document.body.classList.remove("in-session");
    if (celebrate) confetti();
    app.innerHTML = `<div class="wrap result">
      <div class="emoji">${emoji}</div>
      <h1>${title}</h1>
      ${stars != null ? `<div class="bigstars">${"★".repeat(stars)}${"☆".repeat(3 - stars)}</div>` : ""}
      ${score != null ? `<p class="muted">Skor: %${Math.round(score * 100)}</p>` : ""}
      <div class="statgrid">${stats.map(([v, l]) => `<div class="stat"><b>${v}</b><span class="small muted">${l}</span></div>`).join("")}</div>
      <div style="display:grid;gap:10px">${buttons.map((b, i) => `<button class="btn ${b.ghost ? "ghost" : ""} block" data-b="${i}">${b.label}</button>`).join("")}</div>
      ${wrong && wrong.length ? `<div class="card" style="text-align:left;margin-top:20px"><h3>🩹 Gözden geçir</h3>
        ${wrong.map((w) => `<div class="ex" style="padding:8px 0;border-top:1px dashed var(--border)">${describeEx(w.ex)}</div>`).join("")}
        <p class="small muted">Bu sorular “Hatalarım” bölümüne eklendi.</p></div>` : ""}
    </div>`;
    $$("[data-b]").forEach((b) => b.addEventListener("click", () => buttons[+b.dataset.b].fn()));
    keyHandler = (e) => { if (e.key === "Enter") { e.preventDefault(); buttons[0].fn(); } };
  }
  function describeEx(ex) {
    switch (ex.type) {
      case "mcq": return `${fmtQ(ex.q)}<br>→ <b>${esc(ex.options[ex.answer])}</b>`;
      case "fill": return `${fmtQ(ex.q)}<br>→ <b>${esc(ex.answers[0])}</b>`;
      case "order":
      case "combine": return `${ex.parts ? `<div class="small muted">${ex.parts.map(esc).join(" + ")}</div>` : ""}<b>${esc(ex.answer)}</b>${ex.tr ? `<div class="small muted">${esc(ex.tr)}</div>` : ""}`;
      case "listen": return `<b>${esc(ex.text)}</b> ${sayBtn(ex.text)}${ex.tr ? `<div class="small muted">${esc(ex.tr)}</div>` : ""}`;
      case "match": return ex.pairs.map((p) => `${esc(p[0])} = <b>${esc(p[1])}</b>`).join("<br>");
      default: return "";
    }
  }

  function lessonSteps(u) {
    const steps = teachSteps(u), out = [];
    steps.forEach((t, ti) => {
      out.push({ teach: t, ti, tn: steps.length });
      if (t.check) out.push({ ex: t.check, check: true });
    });
    return out;
  }
  // Sadece konu anlatımı (tekrar okumak için); ilerlemeyi değiştirmez
  function viewLearn(id) {
    const x = UNIT[id];
    if (!x || !teachSteps(x.u).length) return go("#/unit/" + id);
    runSession(lessonSteps(x.u), {
      accent: x.m.color, requeue: false, exitTo: "#/unit/" + id,
      onDone: ({ xp }) => resultScreen({
        title: "Konu anlatımı bitti", emoji: "📖", stats: [[teachSteps(x.u).length, "adım"], [`+${xp}`, "XP"], [`${Math.floor(day().sec / 60)} dk`, "bugün"]],
        buttons: [{ label: "Alıştırmalara başla", fn: () => go("#/lesson/" + id) }, { label: "Üniteye dön", ghost: true, fn: () => go("#/unit/" + id) }],
      }),
    });
  }

  function viewLesson(id) {
    const x = UNIT[id];
    if (!x) return go("#/modules");
    const { u, m, i } = x;
    const items = lessonSteps(u).concat(u.exercises.map((ex, idx) => ({ ex, uid: u.id, idx })));
    runSession(items, {
      accent: m.color, requeue: true, exitTo: "#/module/" + m.id,
      onDone: ({ firstCorrect, total, wrong, xp }) => {
        const score = firstCorrect / total;
        const stars = score >= 0.9 ? 3 : score >= 0.75 ? 2 : score >= 0.6 ? 1 : 0;
        const prev = S.units[id] || {};
        const passed = stars > 0;
        let bonus = 0;
        if (passed) {
          bonus = 20 + (stars === 3 ? 10 : 0);
          addXP(bonus);
          addUnitCards(u);
          const d = day();
          if (!d.units.includes(id)) d.units.push(id);
        }
        S.units[id] = {
          done: prev.done || passed, best: Math.max(prev.best || 0, score), stars: Math.max(prev.stars || 0, stars),
          attempts: (prev.attempts || 0) + 1, doneOn: prev.doneOn || (passed ? today() : undefined)
        };
        save();
        const nextU = m.units[i + 1];
        const planIds = todaysPlan();
        const remainingPlan = planIds.find((pid) => pid !== id && !day().units.includes(pid));
        const buttons = [];
        if (passed && remainingPlan) buttons.push({ label: "Bugünün planında devam ›", fn: () => go("#/unit/" + remainingPlan) });
        if (passed && nextU) buttons.push({ label: "Sonraki ünite: " + esc(nextU.title), ghost: !!remainingPlan, fn: () => go("#/unit/" + nextU.id) });
        if (!passed) buttons.push({ label: "Tekrar dene", fn: () => go("#/lesson/" + id) });
        buttons.push({ label: "Ana sayfa", ghost: true, fn: () => go("#/") });
        resultScreen({
          title: passed ? (stars === 3 ? "Kusursuz!" : "Ünite tamamlandı!") : "Biraz daha pratik lazım",
          emoji: passed ? (stars === 3 ? "🏆" : "🎉") : "💪",
          score, stars, celebrate: passed,
          stats: [[`${firstCorrect}/${total}`, "ilk denemede"], [`+${xp + bonus}`, "XP"], [`${Math.floor(day().sec / 60)} dk`, "bugün"]],
          wrong, buttons,
        });
        if (!passed) toast("Geçmek için en az %60 gerekiyor. Konu anlatımına tekrar göz at!", 3500);
      },
    });
  }

  // ================================================================ QUIZZES
  function poolExercises(filterUnit) {
    const out = [];
    MODULES.forEach((m) => m.units.forEach((u) => {
      if (!filterUnit(u)) return;
      u.exercises.forEach((ex, idx) => out.push({ ex, uid: u.id, idx }));
    }));
    return out;
  }
  function viewQuiz(kind) {
    let items, title;
    if (kind === "mistakes") {
      items = sample(S.mistakes.map(getEx).filter(Boolean), 15);
      title = "Hatalarım";
      if (!items.length) {
        app.innerHTML = `<div class="wrap result"><div class="emoji">🌟</div><h1>Hatalı soru yok!</h1><p class="muted">Yanlış yaptığın sorular burada birikir ve doğru cevaplayınca listeden silinir.</p><a class="btn" href="#/games">Oyunlara dön</a></div>`;
        return;
      }
    } else {
      let pool = poolExercises((u) => unitDone(u.id));
      if (pool.length < 12) pool = pool.concat(poolExercises((u) => isUnlocked(u) && !unitDone(u.id)));
      items = sample(pool, 12);
      title = "Karışık Test";
    }
    runSession(items, {
      requeue: kind === "mistakes", exitTo: "#/games",
      onDone: ({ firstCorrect, total, wrong, xp }) => {
        day().game = true; save();
        resultScreen({
          title: title + " bitti", emoji: firstCorrect / total >= 0.8 ? "🎯" : "📈", score: firstCorrect / total,
          stats: [[`${firstCorrect}/${total}`, "doğru"], [`+${xp}`, "XP"], [S.mistakes.length, "kalan hata"]],
          wrong: kind === "mistakes" ? [] : wrong, celebrate: firstCorrect / total >= 0.8,
          buttons: [{ label: "Tekrar oyna", fn: () => go("#/quiz/" + kind) }, { label: "Oyunlar", ghost: true, fn: () => go("#/games") }],
        });
      },
    });
  }

  function viewWeekTest(n) {
    n = +n;
    const pool = poolExercises((u) => u.week === n && u.exercises.length).filter((x) => x.ex.type !== "match");
    // her modülden dengeli seç
    const byMod = {};
    pool.forEach((x) => { const mid = UNIT[x.uid].m.id; (byMod[mid] = byMod[mid] || []).push(x); });
    let items = [];
    Object.values(byMod).forEach((arr) => { items = items.concat(sample(arr, 4)); });
    items = shuffle(items).slice(0, 20);
    if (!items.length) return go("#/plan");
    runSession(items, {
      requeue: false, exitTo: "#/plan",
      onDone: ({ firstCorrect, total, wrong, xp }) => {
        const score = firstCorrect / total;
        S.weekTests[n] = Math.max(S.weekTests[n] || 0, score);
        day().game = true; save();
        resultScreen({
          title: `Hafta ${n} sınavı`, emoji: score >= 0.8 ? "🏅" : "📝", score, celebrate: score >= 0.8,
          stats: [[`${firstCorrect}/${total}`, "doğru"], [`+${xp}`, "XP"], [`%${Math.round(S.weekTests[n] * 100)}`, "en iyi"]],
          wrong, buttons: [{ label: "Tekrar çöz", fn: () => go("#/week/" + n) }, { label: "Plana dön", ghost: true, fn: () => go("#/plan") }],
        });
        if (score < 0.8) toast("İpucu: %80'in altındaysan o haftanın ünitelerini tekrar et.", 3500);
      },
    });
  }

  // ================================================================ GAMES
  function viewGames() {
    const due = dueCards().length;
    const games = [
      ["#/review", "🃏", "Kart Tekrarı", `Aralıklı tekrar sistemi · ${due} kart bekliyor`],
      ["#/speed", "⚡", "Hız Turu", `60 saniyede olabildiğince çok doğru · rekor ${S.best.speed || 0}`],
      ["#/match", "🧩", "Eşleştirme Yarışı", `3 tur kelime eşleştirme · en iyi ${S.best.match ? S.best.match + " sn" : "–"}`],
      ["#/quiz/mix", "🎲", "Karışık Test", "Bitirdiğin ünitelerden rastgele 12 soru"],
      ["#/quiz/mistakes", "🩹", "Hatalarım", `${S.mistakes.length} yanlış yaptığın soru`],
    ];
    app.innerHTML = `<div class="wrap">${topStats()}<h1>Oyunlar & Tekrar</h1>
      <p class="muted small">Ünitelerde öğrendiklerini kalıcı yapmak için. Günlük planın 3. görevi buradan gelir.</p>
      ${games.map(([h, ic, t, d]) => `<a class="card tap" href="${h}"><div class="row"><span style="font-size:2rem">${ic}</span><div><h3 style="margin:0">${t}</h3><div class="small muted">${d}</div></div></div></a>`).join("")}
      <h2 style="margin-top:20px">Haftalık sınavlar</h2>
      <div class="grid">${PLAN.weeks.map((w) => `<a class="card tap" style="margin:0" href="#/week/${w.week}"><b>Hafta ${w.week}</b> <span class="badge">${w.level}</span>
        <div class="small muted">${S.weekTests[w.week] != null ? "En iyi %" + Math.round(S.weekTests[w.week] * 100) : "Henüz çözülmedi"}</div></a>`).join("")}</div>
    </div>`;
  }

  function viewReview() {
    let queue = dueCards();
    let extraMode = false;
    if (!queue.length) {
      const mine = myCards();
      app.innerHTML = `<div class="wrap result"><div class="emoji">🃏</div><h1>Bugün tekrar edilecek kart yok</h1>
        <p class="muted">${mine.length ? `Sistemde ${mine.length} kartın var. Kartlar, ünite bitirdikçe eklenir ve unutma eğrisine göre geri gelir.` : "Kartlar, kart içeren üniteleri bitirdikçe buraya eklenir."}</p>
        <div style="display:grid;gap:10px;max-width:360px;margin:0 auto">
        ${mine.length ? `<button class="btn" id="more">Yine de 10 kart çalış</button>` : `<a class="btn" href="#/module/marine">Gemi Camı modülüne git</a>`}
        <a class="btn ghost" href="#/speed">Hız Turu oyna</a></div></div>`;
      const more = $("#more");
      if (more) more.addEventListener("click", () => { extraMode = true; queue = sample(mine, 10); start(); });
      return;
    }
    start();
    function start() {
      queue = shuffle(queue).slice(0, 30);
      document.body.classList.add("in-session");
      activeMode = true;
      const total = queue.length;
      let n = 0, known = 0;
      const again = new Set();
      const show = () => {
        if (!queue.length) {
          activeMode = false;
          day().review = true; save();
          addXP(known * 2);
          return resultScreen({
            title: "Tekrar tamam!", emoji: "🧠", celebrate: true,
            stats: [[total, "kart"], [known, "bildin"], [`+${known * 2}`, "XP"]],
            buttons: [{ label: "Ana sayfa", fn: () => go("#/") }, { label: "Hız Turu", ghost: true, fn: () => go("#/speed") }],
          });
        }
        const x = queue[0];
        const rev = Math.random() < 0.3; // bazen Türkçe → İngilizce
        const front = rev ? x.c.tr : x.c.en;
        app.innerHTML = `<div class="session"><div class="sess-top"><button class="iconbtn" id="quit">✕</button>
          <div class="bar"><i style="width:${(n / total) * 100}%"></i></div><span class="small muted">${n}/${total}</span></div>
          <div class="sess-body"><div class="prompt">${rev ? "İngilizcesi ne?" : "Anlamı ne?"} <span class="small muted">· ${esc(x.m.title)}</span></div>
          <div class="flash" id="fc"><div class="inner">
            <div class="face"><div class="big">${esc(front)}</div>${rev ? "" : sayBtn(x.c.en)}<p class="small muted">Çevirmek için dokun</p></div>
            <div class="face back"><div class="big">${esc(x.c.en)} ${sayBtn(x.c.en)}</div><div style="margin-top:6px">${esc(x.c.tr)}</div>
              ${x.c.ex ? `<p class="small muted"><i>${esc(x.c.ex)}</i> ${sayBtn(x.c.ex)}</p>` : ""}</div></div></div>
          <div id="grades" hidden><div class="btn3">
            <button class="btn bad" data-g="0">Bilmedim</button><button class="btn ghost" data-g="1">Zor</button><button class="btn ok" data-g="2">Bildim</button></div>
            <p class="small muted" style="text-align:center">Klavye: 1 · 2 · 3</p></div>
          <button class="btn block" id="flip">Cevabı göster</button></div></div>`;
        $("#quit").addEventListener("click", () => go("#/"));
        const flip = () => { $("#fc").classList.add("flipped"); $("#grades").hidden = false; $("#flip").hidden = true; if (rev) speak(x.c.en); };
        $("#fc").addEventListener("click", (e) => { if (!e.target.closest("[data-say]")) flip(); });
        $("#flip").addEventListener("click", flip);
        const grade = (g) => {
          queue.shift();
          if (!extraMode || g === 0) gradeCard(x.k, g);
          if (g === 0 && !again.has(x.k)) { again.add(x.k); queue.push(x); }
          else { n++; if (g === 2) known++; }
          show();
        };
        $$("[data-g]").forEach((b) => b.addEventListener("click", () => grade(+b.dataset.g)));
        keyHandler = (e) => {
          if (e.key === " " || e.key === "Enter") { e.preventDefault(); flip(); }
          if (!$("#grades").hidden && ["1", "2", "3"].includes(e.key)) grade(+e.key - 1);
        };
      };
      show();
    }
  }

  // Hız turu soruları: ünite mcq'ları + kartlardan üretilen sorular
  function speedQuestions() {
    const qs = [];
    let units = MODULES.flatMap((m) => m.units.filter((u) => unitDone(u.id)));
    if (units.length < 2) units = MODULES.flatMap((m) => m.units.filter((u) => isUnlocked(u)));
    units.forEach((u) => u.exercises.forEach((ex) => { if (ex.type === "mcq" && ex.q.length < 140) qs.push({ q: ex.q, options: ex.options, answer: ex.answer }); }));
    const pool = cardPool(8);
    pool.forEach((x) => {
      const rev = Math.random() < 0.4;
      const others = sample(pool.filter((y) => y.c.tr !== x.c.tr && y.c.en !== x.c.en), 3);
      if (others.length < 3) return;
      const options = shuffle([x].concat(others));
      qs.push({ q: rev ? `“${x.c.tr}” İngilizce?` : `“${x.c.en}” ne demek?`, options: options.map((o) => (rev ? o.c.en : o.c.tr)), answer: options.indexOf(x) });
    });
    return shuffle(qs);
  }

  function viewSpeed() {
    const qs = speedQuestions();
    document.body.classList.add("in-session");
    app.innerHTML = `<div class="wrap result"><div class="emoji">⚡</div><h1>Hız Turu</h1>
      <p class="muted">60 saniye. Doğru cevaplar puan, art arda doğrular çarpan kazandırır (x5'e kadar). Yanlışta çarpan sıfırlanır.</p>
      <p>Rekorun: <b>${S.best.speed || 0}</b></p>
      <div style="display:grid;gap:10px;max-width:360px;margin:0 auto"><button class="btn" id="go">Başla</button><a class="btn ghost" href="#/games">Geri</a></div></div>`;
    if (!qs.length) { $("#go").disabled = true; return; }
    $("#go").addEventListener("click", start);
    keyHandler = (e) => { if (e.key === "Enter") start(); };
    let started = false;
    function start() {
      if (started) return;
      started = true;
      activeMode = true;
      let i = 0, score = 0, combo = 0, correct = 0, answered = 0, left = 60, over = false;
      app.innerHTML = `<div class="session"><div class="sess-top"><button class="iconbtn" id="quit">✕</button>
        <span class="timer" id="tm">60</span><div class="bar"><i id="tb" style="width:100%"></i></div>
        <span class="pill">⭐ <span id="sc">0</span></span><span class="combo" id="cb"></span></div>
        <div class="sess-body" id="body"></div></div>`;
      $("#quit").addEventListener("click", () => go("#/games"));
      onLeave(() => { over = true; clearInterval(timer); });
      const timer = setInterval(() => {
        left--; $("#tm").textContent = left; $("#tb").style.width = (left / 60) * 100 + "%";
        if (left <= 0) finish();
      }, 1000);
      const ask = () => {
        if (over) return;
        const q = qs[i++ % qs.length];
        const opts = shuffle(q.options.map((t, k) => ({ t, k })));
        $("#body").innerHTML = `<div class="q">${fmtQ(q.q)}</div><div class="options">${opts.map((o, j) => `<button class="opt" data-k="${o.k}"><span class="key">${j + 1}</span><span>${esc(o.t)}</span></button>`).join("")}</div>`;
        const btns = $$(".opt");
        const pick = (b) => {
          if (over || b.disabled) return;
          btns.forEach((x) => { x.disabled = true; });
          answered++;
          const ok = +b.dataset.k === q.answer;
          beep(ok);
          b.classList.add(ok ? "right" : "wrong");
          if (!ok) btns.find((x) => +x.dataset.k === q.answer).classList.add("right");
          if (ok) { correct++; combo = Math.min(combo + 1, 5); score += 10 * combo; } else combo = 0;
          $("#sc").textContent = score; $("#cb").textContent = combo > 1 ? "x" + combo : "";
          setTimeout(ask, ok ? 350 : 900);
        };
        btns.forEach((b) => b.addEventListener("click", () => pick(b)));
        keyHandler = (e) => { const n = +e.key; if (n >= 1 && n <= btns.length) pick(btns[n - 1]); };
      };
      const finish = () => {
        if (over) return;
        over = true; clearInterval(timer); activeMode = false;
        const rec = score > (S.best.speed || 0);
        if (rec) S.best.speed = score;
        day().game = true;
        addXP(correct * 2);
        save();
        resultScreen({
          title: rec ? "Yeni rekor!" : "Süre doldu!", emoji: rec ? "🏆" : "⏱️", celebrate: rec,
          stats: [[score, "puan"], [`${correct}/${answered}`, "doğru"], [`+${correct * 2}`, "XP"]],
          buttons: [{ label: "Tekrar oyna", fn: () => go("#/speed") }, { label: "Oyunlar", ghost: true, fn: () => go("#/games") }],
        });
      };
      ask();
    }
  }

  function viewMatchRush() {
    const pool = cardPool(15);
    const ROUNDS = 3, PER = 5;
    document.body.classList.add("in-session");
    activeMode = true;
    let round = 0, mistakes = 0;
    const t0 = Date.now();
    const used = new Set();
    let timer = null;
    const nextRound = () => {
      if (round >= ROUNDS) return done();
      round++;
      const cand = pool.filter((x) => !used.has(x.k));
      const picks = [];
      for (const x of shuffle(cand.length >= PER ? cand : pool)) {
        if (picks.length === PER) break;
        if (picks.some((p) => p.c.en === x.c.en || p.c.tr === x.c.tr)) continue;
        picks.push(x); used.add(x.k);
      }
      const L = shuffle(picks.map((x, i) => ({ t: x.c.en, i }))), R = shuffle(picks.map((x, i) => ({ t: x.c.tr, i })));
      app.innerHTML = `<div class="session"><div class="sess-top"><button class="iconbtn" id="quit">✕</button>
        <div class="bar"><i style="width:${((round - 1) / ROUNDS) * 100}%"></i></div><span class="timer" id="tm">0</span></div>
        <div class="sess-body"><div class="prompt">Tur ${round}/${ROUNDS} · Eşleştir! <span class="small muted">(hata = +3 sn)</span></div>
        <div class="matchgrid"><div class="col">${L.map((x) => `<button class="mitem" data-side="L" data-i="${x.i}">${esc(x.t)}</button>`).join("")}</div>
        <div class="col">${R.map((x) => `<button class="mitem" data-side="R" data-i="${x.i}">${esc(x.t)}</button>`).join("")}</div></div></div></div>`;
      $("#quit").addEventListener("click", () => go("#/games"));
      let sel = { L: null, R: null }, matched = 0;
      $$(".mitem").forEach((b) => b.addEventListener("click", () => {
        if (b.classList.contains("matched")) return;
        const side = b.dataset.side;
        if (sel[side]) sel[side].classList.remove("sel");
        sel[side] = b; b.classList.add("sel");
        if (sel.L && sel.R) {
          const a = sel.L, c = sel.R; sel = { L: null, R: null };
          a.classList.remove("sel"); c.classList.remove("sel");
          if (a.dataset.i === c.dataset.i) {
            a.classList.add("matched"); c.classList.add("matched"); beep(true);
            if (++matched === picks.length) setTimeout(nextRound, 300);
          } else {
            mistakes++; beep(false);
            [a, c].forEach((x) => { x.classList.add("flash"); setTimeout(() => x.classList.remove("flash"), 400); });
          }
        }
      }));
    };
    onLeave(() => clearInterval(timer));
    timer = setInterval(() => { const el = $("#tm"); if (el) el.textContent = Math.floor((Date.now() - t0) / 1000) + mistakes * 3; }, 250);
    const done = () => {
      clearInterval(timer); activeMode = false;
      const secs = Math.round((Date.now() - t0) / 1000) + mistakes * 3;
      const rec = !S.best.match || secs < S.best.match;
      if (rec) S.best.match = secs;
      day().game = true;
      const gain = Math.max(5, 30 - mistakes * 3);
      addXP(gain); save();
      resultScreen({
        title: rec ? "Yeni rekor!" : "Tamamlandı!", emoji: rec ? "🏆" : "🧩", celebrate: rec,
        stats: [[secs + " sn", "süre"], [mistakes, "hata"], [`+${gain}`, "XP"]],
        buttons: [{ label: "Tekrar oyna", fn: () => go("#/match") }, { label: "Oyunlar", ghost: true, fn: () => go("#/games") }],
      });
    };
    nextRound();
  }

  // ================================================================ PLAN
  function viewPlan() {
    const w = curWeek();
    const lvl = levelReached();
    app.innerHTML = `<div class="wrap">${topStats()}
      <h1>8 Haftalık Yol Haritası</h1>
      <div class="card">
        <p style="margin-top:0"><b>B1 → C1</b> · ${totalUnits()} ünite · günde <b>15–30 dk</b>. Her ünite ~15 dk: önce adım adım konu anlatımı, sonra alıştırmalar. Her gün 1 ünite + 1 tekrar görevi gelir; planın gerisindeysen 2 ünite (~15-30 dk).
        Daha fazla çalışmak istediğin gün, istediğin modülde ilerleyebilirsin.</p>
        <div class="row small"><span>Genel ilerleme: <b>${totalDone()}/${totalUnits()}</b></span><span class="spacer"></span><span>Tamamlanan seviye: <b>${lvl}</b></span></div>
        <div class="bar" style="margin-top:8px"><i style="width:${(totalDone() / Math.max(1, totalUnits())) * 100}%"></i></div>
        <details style="margin-top:12px"><summary><b>Nasıl çalışır? / Gerçekçi beklenti</b></summary>
          <ul class="small">
            <li><b>Günlük döngü:</b> Konu anlatımı → alıştırmalar (yanlışlar sona tekrar gelir) → kartlar aralıklı tekrar sistemine eklenir.</li>
            <li><b>Haftalık döngü:</b> Hafta sonunda o haftanın sınavını çöz (%80 hedef) ve iki “gerçek hayat görevini” yap.</li>
            <li><b>Plan esnek:</b> Geride kalırsan ana sayfa en çok geride olan modülü öne alır; önde gidersen sınır yok.</li>
            <li><b>Dürüst not:</b> 1-2 ayda B1'den C1'e çıkmak çok iddialı bir hedef; tipik olarak yüzlerce saat gerekir. Bu plan seni sağlam bir B2+'ya taşıyıp C1 yapılarıyla tanıştırır.
              Hızlandırmak için uygulamanın dışında da İngilizce dinle/oku ve haftalık görevlerdeki <b>konuşma ve yazma</b> pratiklerini atlama.</li>
          </ul></details>
      </div>
      ${PLAN.weeks.map((wk) => {
        const units = MODULES.flatMap((m) => m.units.filter((u) => u.week === wk.week).map((u) => ({ u, m })));
        const dc = units.filter((x) => unitDone(x.u.id)).length;
        const test = S.weekTests[wk.week];
        return `<div class="card week ${wk.week === w ? "current" : ""}">
          <div class="row"><h2 style="margin:0">Hafta ${wk.week}</h2><span class="badge lvl">${wk.level}</span>${wk.week === w ? `<span class="badge">← şu an</span>` : ""}
            <span class="spacer"></span><span class="small muted">${dc}/${units.length}</span></div>
          <div><b>${esc(wk.title)}</b></div>
          <div class="small muted">${esc(wk.goal)}</div>
          <div class="bar" style="margin:10px 0"><i style="width:${units.length ? (dc / units.length) * 100 : 0}%"></i></div>
          <details ${wk.week === w ? "open" : ""}><summary class="small">Üniteler & görevler</summary>
            <ul class="unitlist">${units.map((x) => `<li>${unitDone(x.u.id) ? "✅" : "⬜"} ${x.m.icon} <a href="#/unit/${x.u.id}">${esc(x.u.title)}</a></li>`).join("")}</ul>
            <div class="small"><b>🌍 Gerçek hayat görevleri</b></div>
            ${(wk.challenges || []).map((c, ci) => {
              const k = wk.week + "-" + ci;
              return `<label class="check small"><input type="checkbox" data-ch="${k}" ${S.challenges[k] ? "checked" : ""}><span>${esc(c)}</span></label>`;
            }).join("")}
          </details>
          <div class="row" style="margin-top:10px"><a class="btn sm" href="#/week/${wk.week}">📝 Haftalık sınav</a>
            <span class="small muted">${test != null ? "En iyi: %" + Math.round(test * 100) : "Hedef: %80"}</span></div>
        </div>`;
      }).join("")}
    </div>`;
    $$("[data-ch]").forEach((cb) => cb.addEventListener("change", () => {
      S.challenges[cb.dataset.ch] = cb.checked;
      if (cb.checked) { addXP(15); toast("+15 XP · Harika, gerçek hayatta pratik en değerlisi!"); }
      save();
    }));
  }

  // ================================================================ SETTINGS
  function viewSettings() {
    const st = S.settings;
    const seg = (name, vals) => `<div class="seg">${vals.map(([v, l]) => `<button data-set="${name}" data-v="${v}" class="${String(st[name]) === String(v) ? "on" : ""}">${l}</button>`).join("")}</div>`;
    app.innerHTML = `<div class="wrap">${topStats()}<h1>Ayarlar</h1>
      <div class="card">
        <div class="field"><label>Günlük hedef</label>${seg("goal", [[15, "15 dk"], [20, "20 dk"], [30, "30 dk"]])}</div>
        <div class="field"><label>Telaffuz aksanı</label>${seg("accent", [["en-GB", "🇬🇧 İngiliz"], ["en-US", "🇺🇸 Amerikan"]])}
          <div class="small muted" style="margin-top:6px">${TTS ? "Sesli okuma tarayıcının kendi sesleriyle yapılır." : "Bu tarayıcı sesli okumayı desteklemiyor; dinleme soruları cümle kurma sorusuna dönüşür."}</div></div>
        <div class="field"><label>Konuşma hızı: <span id="rv">${st.rate}</span></label>
          <input type="range" min="0.6" max="1.2" step="0.05" value="${st.rate}" id="rate" style="width:100%">
          <button class="btn ghost sm" data-say="We can deliver the laminated glass within four weeks.">🔊 Dene</button></div>
        <div class="field"><label>Ses efektleri</label>${seg("sound", [[true, "Açık"], [false, "Kapalı"]])}</div>
        <div class="field"><label>Tema</label>${seg("theme", [["auto", "Otomatik"], ["light", "Açık"], ["dark", "Koyu"]])}</div>
        <div class="field"><label>Tüm üniteleri aç</label>${seg("unlockAll", [[false, "Sırayla aç"], [true, "Hepsi açık"]])}
          <div class="small muted" style="margin-top:6px">Kendini bir konuda iyi hissediyorsan atlayabilmen için.</div></div>
      </div>
      <div class="card">
        <div class="field"><label>Plan başlangıç tarihi</label><input type="date" id="sd" value="${S.startDate}">
          <div class="small muted" style="margin-top:6px">Şu an Hafta ${curWeek()}. Tarihi değiştirerek planı kaydırabilirsin.</div></div>
      </div>
      <div class="card">
        <h3>İlerlemeni yedekle</h3>
        <p class="small muted">${cloud.ref
          ? "☁️ İlerlemen hesabına da kaydediliyor; bu bağlantıyı telefonda ve bilgisayarda açınca aynı yerden devam edersin."
          : "İlerleme bu tarayıcıda saklanır. Başka bir cihaza taşımak için yedeği kopyala veya indir, diğer cihazda içe aktar."}</p>
        <div class="row"><button class="btn sm" id="exp">⬇️ Dosya olarak indir</button><button class="btn ghost sm" id="copy">📋 Yedeği kopyala</button>
          <label class="btn ghost sm" for="imp">⬆️ Dosyadan yükle</label><input type="file" id="imp" accept="application/json,.json" hidden></div>
        <details style="margin-top:10px"><summary class="small">Kopyalanmış yedeği yapıştır</summary>
          <textarea class="textin" id="paste" rows="3" placeholder="Yedek metnini buraya yapıştır…" style="margin-top:8px"></textarea>
          <button class="btn ghost sm" id="pasteok" style="margin-top:8px">İçe aktar</button></details>
        <div class="row" style="margin-top:14px"><span class="spacer"></span><button class="btn bad sm" id="reset">İlerlemeyi sıfırla</button></div>
      </div>
      <div class="card small muted">
        <b>İstatistikler:</b> ${S.xp} XP · en uzun seri ${S.bestStreak || 0} gün · ${totalDone()}/${totalUnits()} ünite · ${Object.keys(S.cards).length} kart ·
        toplam ${Math.round(Object.values(S.days).reduce((a, d) => a + d.sec, 0) / 60)} dk çalışma
      </div>
    </div>`;
    $$("[data-set]").forEach((b) => b.addEventListener("click", () => {
      let v = b.dataset.v;
      if (v === "true") v = true; else if (v === "false") v = false; else if (/^\d+$/.test(v)) v = +v;
      st[b.dataset.set] = v; save(); applyTheme(); viewSettings();
    }));
    $("#rate").addEventListener("input", (e) => { st.rate = +e.target.value; $("#rv").textContent = st.rate; save(); });
    $("#sd").addEventListener("change", (e) => {
      if (!e.target.value) return;
      S.startDate = e.target.value; day().plan = null; save(); viewSettings(); toast("Plan tarihi güncellendi");
    });
    const backup = () => JSON.stringify(S);
    const restore = (txt) => {
      try {
        const s = JSON.parse(txt);
        if (!s || typeof s !== "object" || !s.units || !s.settings) throw new Error("bad");
        S = migrate(s);
        save(); applyTheme(); toast("İlerleme içe aktarıldı ✓"); viewSettings();
      } catch (e) { toast("Bu metin geçerli bir English Voyage yedeği değil."); }
    };
    $("#exp").addEventListener("click", async () => {
      const filename = `english-voyage-${today()}.json`;
      const dl = window.claude && typeof window.claude.use === "function" ? await window.claude.use("downloads") : null;
      if (dl) {
        try { await dl.save({ filename, data: backup() }); }
        catch (e) { if (e && e.code !== "declined") toast("İndirme bu görünümde kullanılamıyor; “Yedeği kopyala”yı dene."); }
        return;
      }
      const a = document.createElement("a");
      a.href = URL.createObjectURL(new Blob([backup()], { type: "application/json" })); a.download = filename; a.click();
      setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    });
    $("#copy").addEventListener("click", () => {
      const txt = backup();
      const fallback = () => { const t = $("#paste"); t.closest("details").open = true; t.value = txt; t.select(); toast("Metin seçildi; kopyalayıp sakla."); };
      try { navigator.clipboard.writeText(txt).then(() => toast("Yedek panoya kopyalandı ✓"), fallback); } catch (e) { fallback(); }
    });
    $("#pasteok").addEventListener("click", () => { const v = $("#paste").value.trim(); if (v) restore(v); });
    $("#imp").addEventListener("change", (e) => {
      const f = e.target.files[0]; if (!f) return;
      f.text().then(restore, () => toast("Dosya okunamadı."));
    });
    $("#reset").addEventListener("click", () => {
      ask("Tüm ilerleme (XP, üniteler, kartlar) silinecek. Emin misin?", { ok: "Sıfırla", danger: true }).then((yes) => {
        if (!yes) return;
        S = defaultState(); save(); applyTheme(); go("#/");
      });
    });
  }

  // ---------------------------------------------------------------- boot
  applyTheme();
  if (!MODULES.length) {
    app.innerHTML = `<div class="wrap"><h1>İçerik yüklenemedi</h1><p>modules/ klasöründeki dosyalar bulunamadı.</p></div>`;
    return;
  }
  render();
  cloud.init();
  window.EA_DEBUG = Object.assign(DEBUG, { state: () => S, MODULES });
})();
