// Animation kit for the visual options: entrance and ambient motion live in kit.css;
// this file handles the moving parts that need JavaScript (count-ups, loops, sliders, toggles, drags).
window.AX = window.AX || {};
window.K = (() => {
  const paused = () => document.documentElement.classList.contains("paused");
  const active = fr => { const v = fr && fr.closest(".viz"); return !!v && fr.classList.contains("f" + v.dataset.step); };
  // run fn each time this frame becomes the visible slide
  function onEnter(fr, fn) {
    const v = fr.closest(".viz"); if (!v) return;
    let was = false;
    const chk = () => { const a = active(fr); if (a && !was) fn(); was = a; };
    new MutationObserver(chk).observe(v, { attributes: true, attributeFilter: ["data-step"] });
    chk();
  }
  // a timer that only ticks while its slide is on screen and motion isn't paused
  function loop(fr, fn, ms) {
    let n = 0;
    const iv = setInterval(() => { if (!fr.isConnected) return clearInterval(iv); if (!active(fr) || paused() || document.hidden) return; fn(++n); }, ms);
  }
  // an animation-frame loop with the same rules; fn(dt in ms, now)
  function raf(fr, fn) {
    let last = performance.now();
    const tick = now => { if (!fr.isConnected) return; const dt = Math.min(64, now - last); last = now; if (active(fr) && !paused() && !document.hidden) fn(dt, now); requestAnimationFrame(tick); };
    requestAnimationFrame(tick);
  }
  const FMT = {
    int: v => Math.round(v).toLocaleString("en-US"), d1: v => v.toFixed(1), d2: v => v.toFixed(2),
    pct: v => Math.round(v) + "%", x1: v => v.toFixed(1) + "×", x: v => Math.round(v) + "×", k: v => (v / 1000).toFixed(1) + "K"
  };
  function count(el, to, { dur = 1400, fmt = FMT.int, from = 0 } = {}) {
    const t0 = performance.now();
    const step = now => { const k = Math.min(1, (now - t0) / dur), e = 1 - (1 - k) ** 3; el.textContent = fmt(from + (to - from) * e); if (k < 1 && el.isConnected) requestAnimationFrame(step); };
    if (paused()) { el.textContent = fmt(to); return; }
    requestAnimationFrame(step);
  }
  // any [data-to] inside the frame counts up when the slide opens
  function counters(fr) {
    onEnter(fr, () => fr.querySelectorAll("[data-to]").forEach(el => count(el, +el.dataset.to, { dur: +(el.dataset.dur || 1400), fmt: FMT[el.dataset.fmt || "int"], from: +(el.dataset.from || 0) })));
  }
  // a row of buttons where one is on; fn(value, button)
  function tabs(fr, sel, fn, init) {
    const bs = [...fr.querySelectorAll(sel)];
    const set = b => { bs.forEach(x => { x.classList.toggle("on", x === b); x.setAttribute("aria-pressed", String(x === b)); }); fn(b.dataset.v, b); };
    bs.forEach(b => b.addEventListener("click", () => set(b)));
    if (bs.length) set(init != null ? bs.find(b => b.dataset.v === String(init)) || bs[0] : bs[0]);
    return set;
  }
  function slider(fr, sel, fn) {
    const r = fr.querySelector(sel); if (!r) return null;
    const up = () => fn(+r.value, r);
    r.addEventListener("input", up); up();
    return r;
  }
  // drag inside an element; fn(x, y) with x and y from 0 to 1 across its box
  function drag(el, fn, { start, end } = {}) {
    let on = false;
    const at = e => { const r = el.getBoundingClientRect(); return [Math.max(0, Math.min(1, (e.clientX - r.left) / r.width)), Math.max(0, Math.min(1, (e.clientY - r.top) / r.height))]; };
    el.addEventListener("pointerdown", e => { on = true; el.setPointerCapture(e.pointerId); start && start(); fn(...at(e), e); e.preventDefault(); });
    el.addEventListener("pointermove", e => { if (on) fn(...at(e), e); });
    const stop = () => { if (on) { on = false; end && end(); } };
    el.addEventListener("pointerup", stop); el.addEventListener("pointercancel", stop);
    el.style.touchAction = "none";
  }
  function rng(seed = 1) { let s = seed; return () => (s = (s * 16807) % 2147483647) / 2147483647; }
  const lerp = (a, b, t) => a + (b - a) * t;
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  // svg helpers
  const pts = arr => arr.map(([x, y]) => `${(+x).toFixed(1)},${(+y).toFixed(1)}`).join(" ");
  return { paused, active, onEnter, loop, raf, count, counters, tabs, slider, drag, rng, lerp, clamp, pts, FMT };
})();

window.__H = { echo, $, $$, get: n => ({ US48, STARGATE })[n] };
// 1 · Automate the researcher, not the economy.
(() => {
const A = window.AX, cap = t => `<p class="cap">${t}</p>`;

// ---------------------------------------------------------------- slide 1
A["automate-1a"] = { html: () => {
    const N = [["Agents", "do the research", -90], ["AI research", "finds better methods", 30], ["Better models", "become better agents", 150]];
    const P = a => [230 + 112 * Math.cos(a * Math.PI / 180), 150 + 112 * Math.sin(a * Math.PI / 180)];
    return `<div class="k-col">
      <svg viewBox="0 0 460 300" class="k-svg al-svg" style="overflow:visible" aria-label="A loop: agents run AI research, which produces better models, which become better agents. A pulse laps the loop faster each time.">
        <circle cx="230" cy="150" r="112" fill="none" stroke="var(--rule)" stroke-width="10"/>
        <circle cx="230" cy="150" r="112" fill="none" stroke="var(--amber)" stroke-width="2" stroke-opacity=".5" class="k-ants"/>
        <path id="alTrail" fill="none" stroke="var(--amber)" stroke-width="10" stroke-linecap="round" opacity=".35"/>
        ${N.map(([n, s, a], i) => { const [x, y] = P(a); return `<g class="al-n" data-i="${i}"><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="44" fill="var(--ink-2)" stroke="var(--beat)" stroke-width="2"/><text x="${x.toFixed(1)}" y="${(y - 1).toFixed(1)}" text-anchor="middle" class="t-strong" font-size="15">${n}</text><text x="${x.toFixed(1)}" y="${(y + 15).toFixed(1)}" text-anchor="middle" font-size="10.5">${s}</text></g>`; }).join("")}
        <circle id="alDot" r="9" fill="var(--amber)" class="al-dot"/>
        <text x="230" y="124" text-anchor="middle" font-size="11" style="fill:var(--faint);letter-spacing:.12em" font-weight="700">MODEL GENERATION</text>
        <text x="230" y="172" text-anchor="middle" class="al-gen" id="alGen">1</text>
        <text x="230" y="190" text-anchor="middle" font-size="11.5" id="alSpd">lap speed 1.0×</text>
      </svg>
      <p class="k-note">Automate one job: the one whose output improves every other job.</p>
    </div>${cap("Aschenbrenner’s shortcut: automate the one job whose output improves every other job. Speeds are illustrative.")}`; },
  init: fr => {
    const dot = fr.querySelector("#alDot"), trail = fr.querySelector("#alTrail"), gen = fr.querySelector("#alGen"), spd = fr.querySelector("#alSpd"), nodes = [...fr.querySelectorAll(".al-n")];
    let a = -90, v = 60, g = 1;
    const at = d => [230 + 112 * Math.cos(d * Math.PI / 180), 150 + 112 * Math.sin(d * Math.PI / 180)];
    const reset = () => { a = -90; v = 60; g = 1; gen.textContent = "1"; spd.textContent = "lap speed 1.0×"; };
    K.onEnter(fr, reset);
    K.raf(fr, dt => {
      const prev = a; a += v * dt / 1000;
      [-90, 30, 150].forEach((n, i) => { const t = n + 360 * Math.ceil((prev - n) / 360); if (prev < t && a >= t) { nodes[i].classList.remove("hit"); void nodes[i].getBBox(); nodes[i].classList.add("hit"); if (i === 2) { g++; gen.textContent = g; v = Math.min(v * 1.22, 900); spd.textContent = `lap speed ${(v / 60).toFixed(1)}×`; } } });
      const [x, y] = at(a); dot.setAttribute("cx", x.toFixed(1)); dot.setAttribute("cy", y.toFixed(1));
      const tail = Math.min(80, 20 + v / 8), [x0, y0] = at(a - tail);
      trail.setAttribute("d", `M${x0.toFixed(1)} ${y0.toFixed(1)} A112 112 0 0 1 ${x.toFixed(1)} ${y.toFixed(1)}`);
      if (g > 14) reset();
    });
  } };





// ---------------------------------------------------------- slide 2
A["automate-2a"] = { html: () => `<div class="k-col wd">
      <div class="wd-top"><p class="k-k">OpenAI’s research org, one workday</p><span class="wd-clock" id="wdC">9:00</span></div>
      <div class="wd-row"><span class="wd-l">Human</span><div class="wd-bars"><i class="wd-b h"><b></b></i></div><b class="wd-v" id="wdH">0.0</b></div>
      <div class="wd-row"><span class="wd-l">Agents</span><div class="wd-bars">${[0, 1, 2, 3].map(i => `<i class="wd-b a" style="--cap:${i < 3 ? 1 : .1}"><b></b></i>`).join("")}</div><b class="wd-v" id="wdA">0.0</b></div>
      <p class="wd-ratio"><b id="wdR">0.0</b><span>agent-workdays for every human workday</span></p>
      <p class="k-note">Each block is an eight-hour workday. Agent days are machine runtime.</p>
    </div>${cap("OpenAI’s research org, mid-August 2026: 3.1 agent-workdays per human workday.")}`,
  init: fr => {
    const hb = fr.querySelector(".wd-b.h b"), ab = [...fr.querySelectorAll(".wd-b.a b")], C = fr.querySelector("#wdC");
    let t = 0;
    const draw = () => {
      const k = Math.min(1, t / 2800), hrs = 8 * k, agent = 3.1 * 8 * k;
      hb.style.width = (k * 100) + "%";
      ab.forEach((b, i) => { const v = K.clamp(agent / 8 - i, 0, i < 3 ? 1 : .1); b.style.width = (v / (i < 3 ? 1 : .1) * 100) + "%"; });
      const m = 9 * 60 + 480 * k; C.textContent = `${Math.floor(m / 60) > 12 ? Math.floor(m / 60) - 12 : Math.floor(m / 60)}:${String(Math.floor(m % 60)).padStart(2, "0")}${m >= 720 ? " pm" : " am"}`;
      fr.querySelector("#wdH").textContent = hrs.toFixed(1) + " h"; fr.querySelector("#wdA").textContent = agent.toFixed(1) + " h";
      fr.querySelector("#wdR").textContent = k >= 1 ? "3.1 : 1" : (agent / Math.max(hrs, .01)).toFixed(1) + " : 1";
      fr.classList.toggle("wd-done", k >= 1);
    };
    const re = () => { t = 0; draw(); };
    K.onEnter(fr, re);
    K.raf(fr, dt => { if (t < 2800) { t += dt; draw(); } });
  } };





// ---------------------------------------------------------- slide 3
A["automate-3a"] = { html: () => {
    const X = d => 30 + (d - 2024.4) / (2028.3 - 2024.4) * 400;
    const NOW = 2026.83;
    return `<div class="k-col">
      <svg viewBox="0 0 460 250" class="k-svg" aria-label="Timeline from Situational Awareness in June 2024 to an automated research intern in September 2026, reached, to an automated AI researcher targeted for March 2028.">
        ${[2025, 2026, 2027, 2028].map(y => `<line x1="${X(y)}" y1="70" x2="${X(y)}" y2="150" class="gridl"/><text x="${X(y)}" y="166" text-anchor="middle" font-size="11">${y}</text>`).join("")}
        <line x1="${X(2024.45)}" y1="110" x2="${X(NOW)}" y2="110" stroke="var(--amber)" stroke-width="4" pathLength="100" class="k-draw" style="--t:2s"/>
        <line x1="${X(NOW)}" y1="110" x2="${X(2028.2)}" y2="110" stroke="var(--amber)" stroke-width="4" stroke-dasharray="2 6" stroke-linecap="round" opacity=".6"/>
        <g class="k-pop" style="--d:.1s"><circle cx="${X(2024.45)}" cy="110" r="7" fill="var(--beat)"/><text x="${X(2024.45)}" y="88" font-size="11.5" class="t-strong">Jun 2024</text><text x="${X(2024.45)}" y="74" font-size="10.5">Situational Awareness</text></g>
        <g class="k-pop" style="--d:1.5s"><circle cx="${X(2026.68)}" cy="110" r="9" fill="var(--amber)"/><text x="${X(2026.68)}" y="190" text-anchor="middle" font-size="11.5" class="t-strong">Sep 2026</text><text x="${X(2026.68)}" y="205" text-anchor="middle" font-size="10.5">automated research intern</text>
          <g transform="translate(${X(2026.68)} 236) rotate(-6)"><rect x="-36" y="-12" width="72" height="20" rx="3" fill="none" stroke="var(--amber)" stroke-width="2"/><text x="0" y="3" text-anchor="middle" font-size="11" font-weight="800" style="fill:var(--amber);letter-spacing:.12em">REACHED</text></g></g>
        <g><circle cx="${X(NOW)}" cy="110" r="5" fill="var(--paper)" class="k-throb"/><text x="${X(NOW)}" y="140" text-anchor="middle" font-size="10.5" style="fill:var(--paper)">today</text></g>
        <g class="k-pop" style="--d:2.1s"><circle cx="${X(2028.2)}" cy="110" r="10" fill="none" stroke="var(--coral)" stroke-width="2.5" class="k-throb"/><text x="${X(2028.2)}" y="88" text-anchor="end" font-size="11.5" class="t-strong">Mar 2028</text><text x="${X(2028.2)}" y="74" text-anchor="end" font-size="10.5">automated AI researcher: target</text></g>
      </svg>
      <div class="cd"><div><b id="cdD">—</b><span>days to the March 2028 target</span></div><div><b id="cdP">—</b><span>of the time to the target has passed</span></div></div>
    </div>${cap("OpenAI’s stated milestones, September 6, 2026. The countdown runs to March 1, 2028.")}`; },
  init: fr => {
    const now = new Date(), tgt = new Date(2028, 2, 1), start = new Date(2026, 8, 6);
    const days = Math.max(0, Math.ceil((tgt - now) / 864e5)), pct = K.clamp((now - start) / (tgt - start), 0, 1) * 100;
    K.onEnter(fr, () => { K.count(fr.querySelector("#cdD"), days, { dur: 1600 }); K.count(fr.querySelector("#cdP"), pct, { dur: 1600, fmt: v => Math.round(v) + "%" }); });
  } };




})();

// 2 · An agent is a brain with a body.
(() => {
const A = window.AX, cap = t => `<p class="cap">${t}</p>`;
const LIMBS = [["Tools", "search, browse, run code"], ["Permissions", "what it may touch"], ["Payments", "a mandate to buy"], ["Memory", "notes between sessions"]];

// ---------------------------------------------------------- slide 1
A["agent-1a"] = { html: () => {
    const C = [[90, 58], [370, 58], [370, 242], [90, 242]];
    return `<div class="k-col bw" data-body="on">
      <svg viewBox="0 0 460 300" class="k-svg" aria-label="The model at the center as the brain, wired to the harness's tools, permissions, payments and memory as the body.">
        <rect x="12" y="12" width="436" height="276" rx="44" fill="none" stroke="var(--rule)" stroke-width="1.5" stroke-dasharray="5 7" class="bw-skin"/>
        <rect x="168" y="279" width="124" height="18" fill="var(--ink)"/>
        <text x="230" y="292" text-anchor="middle" font-size="11.5" class="bw-hl">HARNESS: THE BODY</text>
        ${LIMBS.map(([n, s], i) => { const [x, y] = C[i]; const d = `M230 150 Q${x} 150 ${x} ${y}`, r = `M${x} ${y} Q${x} 150 230 150`; return `<g class="bw-l" data-i="${i}">
          <path d="${d}" stroke="var(--amber)" stroke-width="2.2" class="bw-w" fill="none"/>
          ${[[d, 0], [r, 1], [d, 2]].map(([q, k]) => `<circle r="${k === 1 ? 3.5 : 5}" fill="${k === 1 ? "var(--violet)" : "var(--amber)"}" class="k-flow bw-sig" style="offset-path:path('${q}');--t:${(2.1 + i * .17).toFixed(2)}s;--d:${(k * .7 + i * .4).toFixed(2)}s"/>`).join("")}
          <rect x="${x - 64}" y="${y - 22}" width="128" height="44" rx="7" fill="var(--ink-2)" stroke="var(--amber)" stroke-width="1.5" class="bw-box"/>
          <text x="${x}" y="${y + 1}" text-anchor="middle" class="t-strong" font-size="15">${n}</text>
          <text x="${x}" y="${y + 15}" text-anchor="middle" font-size="10.5" class="bw-sub">${s}</text></g>`; }).join("")}
        <circle cx="230" cy="150" r="70" fill="none" stroke="var(--violet)" stroke-opacity=".25" class="bw-aura"/>
        <circle cx="230" cy="150" r="56" fill="#141029" stroke="var(--violet)" stroke-width="2.5" class="bw-brain"/>
        <path d="M206 136 q6 -16 22 -10 q12 -12 26 0 q14 4 8 18 q6 12 -8 16 q-6 10 -20 4 q-14 8 -22 -4 q-14 -6 -6 -24z M216 134 q10 4 8 14 M240 128 q-4 10 6 16 M228 156 q4 -8 14 -4" fill="none" stroke="var(--violet)" stroke-width="1.8" stroke-linecap="round" class="bw-gyri"/>
        <text x="230" y="182" text-anchor="middle" class="t-strong" font-size="15">Model</text>
        <text x="230" y="196" text-anchor="middle" font-size="10.5" style="fill:var(--violet)" font-weight="700" letter-spacing=".1em">THE BRAIN</text>
      </svg>
      <div class="bw-ctl"><button type="button" class="k-b on" id="bwBody">Body on</button><p class="bw-say" id="bwSay">The model decides. The harness is how it reaches the world.</p></div>
    </div>${cap("The model decides. The harness is how it reaches the world.")}`; },
  init: fr => {
    const root = fr.querySelector(".bw"), say = fr.querySelector("#bwSay"), btn = fr.querySelector("#bwBody");
    fr.querySelectorAll(".bw-l").forEach(g => g.addEventListener("click", () => {
      fr.querySelectorAll(".bw-l").forEach(x => x.classList.toggle("sel", x === g));
      const [n, s] = LIMBS[+g.dataset.i]; say.innerHTML = `<b>${n}:</b> ${s}.`;
    }));
    btn.addEventListener("click", () => { const on = root.dataset.body !== "on"; root.dataset.body = on ? "on" : "off"; btn.textContent = on ? "Body on" : "Body off"; btn.classList.toggle("on", on); say.innerHTML = on ? "The model decides. The harness is how it reaches the world." : "<b>No body:</b> the brain can still plan the trip. It just can’t do anything about it."; });
  } };





// ---------------------------------------------------------- slide 2
A["agent-2a"] = { html: () => `<div class="k-col aa">
      <div class="aa-steps">${[["Ask", "works today"], ["Anticipate", "arriving"], ["Act", "being built"]].map(([n, s], i) => `<button type="button" class="aa-s" data-i="${i}"><b>${i + 1}</b><span>${n}<small>${s}</small></span></button>`).join("")}</div>
      <div class="aa-phone"><div class="aa-bar"><span>Agent</span><i></i></div><div class="aa-th" id="aaTh"></div></div>
    </div>${cap("My camping-trip example. Ask works today, ChatGPT Pulse shows anticipate arriving, and act is still being built.")}`,
  init: fr => {
    const th = fr.querySelector("#aaTh"), steps = [...fr.querySelectorAll(".aa-s")];
    let tm = [];
    const later = (f, ms) => tm.push(setTimeout(() => { if (K.active(fr)) f(); }, ms));
    const add = (h, cls) => { const d = document.createElement("div"); d.className = "aa-m " + cls; d.innerHTML = h; th.appendChild(d); th.scrollTop = th.scrollHeight; return d; };
    const type = (el, txt, ms = 28) => { let i = 0; const iv = setInterval(() => { if (!el.isConnected) return clearInterval(iv); el.textContent = txt.slice(0, ++i); if (i >= txt.length) clearInterval(iv); }, ms); };
    const sel = i => steps.forEach((s, k) => s.classList.toggle("on", k === i));
    const play = from => {
      tm.forEach(clearTimeout); tm = []; th.innerHTML = "";
      const S = [
        () => { sel(0); const m = add("", "me"); type(m, "Camping next weekend. What do I need?"); later(() => add("Here’s a list: tent stakes, a headlamp, stove fuel, a rain fly.", "bot"), 1500); },
        () => { sel(1); add(`<b>Sat, Oct 17</b> · Yosemite trip on your calendar`, "cal"); later(() => add("Your trip is in 5 days. I drafted your gear list early.", "bot"), 1100); },
        () => { sel(2); const c = add(`<p class="aa-ck">Cart</p><p>Tent stakes <b>$14</b></p><p>Headlamp <b>$29</b></p><p>Stove fuel <b>$8</b></p><button type="button" class="aa-go">Confirm purchase · $51</button>`, "cart"); c.querySelector(".aa-go").addEventListener("click", e => { e.target.outerHTML = `<span class="aa-ok">✓ Ordered. You only said yes.</span>`; }); }
      ];
      S.slice(from).forEach((f, k) => later(f, 300 + k * 3200));
    };
    steps.forEach((s, i) => s.addEventListener("click", () => play(i)));
    K.onEnter(fr, () => play(0));
  } };





// ---------------------------------------------------------- slide 3
A["agent-3a"] = { html: () => {
    const N = [["You", "“camping trip”", -90], ["Model", "plans the list", 0], ["Harness", "carts the gear", 90], ["You", "tap confirm", 180]];
    const P = a => [230 + 158 * Math.cos(a * Math.PI / 180), 140 + 100 * Math.sin(a * Math.PI / 180)];
    return `<div class="k-col fc">
      <svg viewBox="0 0 460 290" class="k-svg" aria-label="A loop: you mention camping, the model plans, the harness finds and carts the gear, and you tap confirm.">
        <ellipse cx="230" cy="140" rx="158" ry="100" fill="none" stroke="var(--rule)" stroke-width="8"/>
        <path id="fcArc" fill="none" stroke="var(--amber)" stroke-width="8" stroke-linecap="round"/>
        ${N.map(([n, s, a], i) => { const [x, y] = P(a); return `<g class="fc-n" data-i="${i}"><rect x="${(x - 58).toFixed(1)}" y="${(y - 23).toFixed(1)}" width="116" height="46" rx="8" fill="var(--ink-2)" stroke="${i === 1 ? "var(--violet)" : i === 2 ? "var(--amber)" : "var(--paper)"}" stroke-width="1.6"/><text x="${x.toFixed(1)}" y="${(y - 3).toFixed(1)}" text-anchor="middle" class="t-strong" font-size="13.5">${n}</text><text x="${x.toFixed(1)}" y="${(y + 13).toFixed(1)}" text-anchor="middle" font-size="11">${s}</text></g>`; }).join("")}
        <text x="230" y="128" text-anchor="middle" font-size="11" style="fill:var(--faint);letter-spacing:.12em" font-weight="700">AGENT =</text>
        <text x="230" y="150" text-anchor="middle" class="t-strong" font-size="17">model + harness</text>
        <text x="230" y="170" text-anchor="middle" font-size="11.5" id="fcN">0 orders</text>
        <g id="fcBox" opacity="0"><rect x="-12" y="-10" width="24" height="20" rx="2" fill="#c79a5b"/><path d="M-12 -2 h24 M0 -10 v20" stroke="#7a5a2c"/></g>
      </svg>
      <button type="button" class="fc-go" id="fcGo" disabled>Waiting for the agent…</button>
    </div>${cap("Full circle: the model decides, the harness acts, and you only say yes.")}`; },
  init: fr => {
    const arc = fr.querySelector("#fcArc"), go = fr.querySelector("#fcGo"), box = fr.querySelector("#fcBox"), nodes = [...fr.querySelectorAll(".fc-n")];
    let a = -90, wait = false, n = 0, ship = -1;
    const P = d => [230 + 158 * Math.cos(d * Math.PI / 180), 140 + 100 * Math.sin(d * Math.PI / 180)];
    go.addEventListener("click", () => { if (!wait) return; wait = false; n++; fr.querySelector("#fcN").textContent = `${n} order${n > 1 ? "s" : ""}`; go.disabled = true; go.textContent = "Ordered. The loop starts again…"; ship = 0; });
    K.onEnter(fr, () => { a = -90; wait = false; go.disabled = true; go.textContent = "Waiting for the agent…"; });
    K.raf(fr, dt => {
      if (!wait) { a += dt * .17; if (a >= 180 && a < 190) { a = 180; wait = true; go.disabled = false; go.textContent = "Tap to confirm"; } if (a >= 270) a = -90; }
      const pts = []; for (let d = -90; d <= a; d += 4) pts.push(P(d)); pts.push(P(a));
      arc.setAttribute("d", "M" + pts.map(p => p.map(v => v.toFixed(1)).join(" ")).join(" L"));
      nodes.forEach((g, i) => g.classList.toggle("lit", a >= [-90, 0, 90, 180][i] - 2));
      if (ship >= 0) { ship += dt / 650; const [x, y] = P(180 + ship * 90); box.setAttribute("transform", `translate(${x.toFixed(1)} ${(y - 30).toFixed(1)})`); box.setAttribute("opacity", ship < 1 ? 1 : 0); if (ship >= 1) ship = -1; }
    });
  } };




})();

// 3 · Weights are the new crown jewels.
(() => {
const A = window.AX, cap = t => `<p class="cap">${t}</p>`;
// a small next-token table: last word → four candidates and their probabilities
const NEXT = {
  is: [["the", .41], ["its", .22], ["a", .14], ["not", .06]],
  the: [["weights", .58], ["model", .2], ["data", .11], ["training", .05]],
  its: [["weights", .52], ["model", .25], ["own", .1], ["brain", .04]],
  a: [["file", .34], ["model", .3], ["trillion", .16], ["secret", .08]],
  not: [["the", .4], ["code", .25], ["data", .18], ["a", .07]],
  own: [["weights", .6], ["model", .22], ["file", .1], ["brain", .04]],
  weights: [[".", .48], [",", .2], ["file", .14], ["themselves", .06]],
  model: [[".", .4], ["weights", .3], ["itself", .14], ["file", .06]],
  data: [[".", .45], ["center", .2], ["itself", .14], ["set", .08]],
  file: [[".", .5], ["itself", .2], ["of", .12], ["that", .08]],
  trillion: [["weights", .7], ["numbers", .18], ["parameters", .08], ["dollars", .02]],
  training: [["run", .5], ["data", .3], ["bill", .1], ["file", .05]],
  code: [[".", .55], ["itself", .2], [",", .1], ["base", .08]],
  brain: [[".", .6], ["itself", .2], [",", .1], ["file", .05]],
  secret: [["file", .4], ["sauce", .3], [".", .2], ["weights", .05]],
  numbers: [[".", .6], [",", .2], ["inside", .1], ["file", .05]],
  parameters: [[".", .6], [",", .2], ["file", .1], ["itself", .05]],
  dollars: [[".", .6], [",", .2], ["of", .1], ["file", .05]],
  themselves: [[".", .7], [",", .2], ["file", .05], ["too", .03]],
  itself: [[".", .75], [",", .15], ["too", .05], ["file", .03]],
  run: [[".", .6], [",", .2], ["itself", .1], ["file", .05]],
  bill: [[".", .6], [",", .2], ["itself", .1], ["file", .05]],
  center: [[".", .6], [",", .2], ["itself", .1], ["file", .05]],
  set: [[".", .6], [",", .2], ["itself", .1], ["file", .05]],
  sauce: [[".", .7], [",", .2], ["itself", .05], ["file", .03]],
  base: [[".", .7], [",", .2], ["itself", .05], ["file", .03]],
  of: [["the", .5], ["weights", .3], ["a", .1], ["its", .05]],
  that: [["the", .4], ["weights", .3], ["a", .1], ["its", .1]],
  inside: [["the", .5], ["a", .2], ["its", .2], ["it", .05]],
  too: [[".", .8], [",", .1], ["file", .03], ["itself", .02]],
  ",": [["the", .4], ["its", .2], ["not", .15], ["a", .1]]
};
const START = ["The", "most", "valuable", "file", "in", "AI", "is"];

// ---------------------------------------------------------- slide 1






// ---------------------------------------------------------- slide 2
A["weights-2a"] = { html: () => {
    const yr = [2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027];
    const bars = yr.map((y, i) => { const h = 6 + Math.pow(2.4, i) / Math.pow(2.4, 7) * 122; return `<rect class="k-grow-y" x="${24 + i * 22}" y="${186 - h}" width="15" height="${h}" fill="var(--amber)" opacity="${(.35 + i * .09).toFixed(2)}" style="--d:${(.15 + i * .14).toFixed(2)}s"/>`; }).join("");
    const grid = Array.from({ length: 48 }, (_, i) => `<rect class="wa-c" x="${336 + (i % 8) * 11}" y="${84 + Math.floor(i / 8) * 11}" width="9" height="9" rx="1" fill="var(--violet)" style="--o:${(.25 + ((i * 37) % 11) / 14).toFixed(2)};animation-delay:${(-((i * 53) % 17) / 6).toFixed(2)}s"/>`).join("");
    const EX = [["Copy the file", "theft or a leak", "var(--coral)", "copy"], ["Distill it", "16M+ exchanges", "var(--amber)", "dist"], ["Walk it out", "an insider", "var(--violet)", "walk"]];
    return `<div class="k-col wa"><svg viewBox="0 0 460 318" class="k-svg" aria-label="Frontier training costs grow about 2.4 times a year, reaching about a billion dollars per run by 2027. The output is one file of about 2 terabytes. Capability can leave three ways.">
        <text x="20" y="22" class="t-strong" font-size="15">Training bill per frontier run</text>
        <text x="20" y="40" font-size="12">~2.4× a year (Epoch AI)</text>
        ${bars}
        <line class="ax" x1="18" y1="186" x2="200" y2="186"/>
        <text x="27" y="202" font-size="11">2020</text><text x="178" y="202" text-anchor="middle" font-size="11">2027</text>
        <text x="178" y="52" text-anchor="middle" font-size="13" style="fill:var(--amber);--d:1.3s" font-weight="800" class="k-pop">~$1B</text>
        <path id="waArrow" d="M206 120 H318" stroke="var(--paper)" stroke-width="2" stroke-dasharray="6 6" fill="none" class="k-ants"/>
        <path d="M310 113 L318 120 L310 127" stroke="var(--paper)" stroke-width="2" fill="none" stroke-linecap="round"/>
        ${Array.from({ length: 5 }, (_, i) => `<text font-size="12" font-weight="800" style="fill:var(--amber);offset-path:path('M190 120 H326');--t:2.2s;--d:${(1.4 + i * .44).toFixed(2)}s" class="k-flow">$</text>`).join("")}
        <text x="262" y="106" text-anchor="middle" font-size="12">compressed into</text>
        <path d="M328 72 H408 L428 92 V160 H328 Z" fill="var(--ink-2)" stroke="var(--violet)" stroke-width="1.5" class="wa-file"/><path d="M408 72 V92 H428" fill="none" stroke="var(--violet)" stroke-width="1.5"/>
        ${grid}
        <text x="378" y="182" text-anchor="middle" class="t-strong" font-size="14">weights.bin ≈ <tspan data-to="2" data-dur="1800" style="fill:var(--amber)">0</tspan> TB</text>
        <text x="378" y="198" text-anchor="middle" font-size="11">1 trillion weights × 2 bytes</text>
        <line class="ax" x1="20" y1="222" x2="440" y2="222"/>
        <text x="20" y="242" class="t-strong" font-size="14">Three ways the capability leaves</text>
        ${EX.map(([a, b, c, k], i) => { const x = 20 + i * 142; return `<g class="wa-ex" data-i="${i}"><rect x="${x}" y="254" width="132" height="58" rx="6" fill="var(--ink-2)" stroke="${c}" stroke-width="1.5"/>
          <g transform="translate(${x + 22} 283)" class="wa-ic ${k}">${k === "copy" ? `<rect x="-9" y="-11" width="13" height="16" rx="1.5" fill="none" stroke="${c}" stroke-width="1.6"/><rect x="-4" y="-6" width="13" height="16" rx="1.5" fill="${c}" class="wa-dup"/>` : k === "dist" ? `<rect x="-11" y="-11" width="16" height="10" rx="3" fill="${c}" class="wa-q1"/><rect x="-5" y="1" width="16" height="10" rx="3" fill="none" stroke="${c}" stroke-width="1.6" class="wa-q2"/>` : `<g class="wa-man"><circle cy="-9" r="3.5" fill="${c}"/><path d="M0 -5 V4 M0 4 L-4 11 M0 4 L4 11 M-5 -1 H5" stroke="${c}" stroke-width="2" stroke-linecap="round"/><rect x="5" y="-3" width="7" height="8" rx="1" fill="${c}"/></g>`}</g>
          <text x="${x + 80}" y="279" text-anchor="middle" class="t-strong" font-size="13">${a}</text><text x="${x + 80}" y="297" text-anchor="middle" font-size="11">${b}</text></g>`; }).join("")}
      </svg><p class="wa-say" id="waSay">Three ways out. Tap one.</p></div>${cap("Costs: Cottier et al., Epoch AI. File size is arithmetic: 10¹² weights at 2 bytes each.")}`; },
  init: fr => {
    const SAY = ["<b>Copy the file.</b> Meta’s first LLaMA weights leaked online about a week after release in 2023.", "<b>Distill it.</b> In February 2026, Anthropic said three labs used 24,000+ fake accounts and 16 million exchanges to distill Claude.", "<b>Walk it out.</b> RAND’s SL3 is about insiders: anyone with access is a door."];
    fr.querySelectorAll(".wa-ex").forEach(g => g.addEventListener("click", () => { fr.querySelectorAll(".wa-ex").forEach(x => x.classList.toggle("sel", x === g)); fr.querySelector("#waSay").innerHTML = SAY[+g.dataset.i]; }));
  } };





// ---------------------------------------------------------- slide 3
const LV = [["SL1", "Hobbyist hackers"], ["SL2", "Professional opportunists"], ["SL3", "Crime groups, insiders"], ["SL4", "Standard state operations"], ["SL5", "Top nation-state operations"]];
A["weights-3a"] = { html: () => {
    const rings = LV.map(([n], i) => { const r = 120 - i * 21, last = i === 4; return `<circle class="rg-ring" data-i="${i}" cx="140" cy="150" r="${r}" fill="none" stroke-width="${last ? 2 : 6}" ${last ? `stroke-dasharray="4 6"` : ""}/>`; }).join("");
    return `<div class="k-col rg"><div class="rg-w">
      <svg viewBox="0 0 280 300" class="k-svg" aria-label="RAND's five security levels as rings around the weights, with attackers of five tiers trying to reach them.">
        ${rings}
        <circle cx="140" cy="150" r="26" fill="var(--amber)" opacity=".16" class="k-throb"/><circle cx="140" cy="150" r="16" fill="var(--amber)" id="rgCore"/>
        <text x="140" y="154" text-anchor="middle" font-size="10" style="fill:var(--ink)" font-weight="800">W</text>
        <g id="rgA" opacity="0"><circle r="7" fill="var(--coral)"/><text y="-12" text-anchor="middle" font-size="11" font-weight="800" style="fill:var(--coral)" id="rgAt">T1</text></g>
        <circle id="rgHit" r="0" fill="none" stroke="#2fd27a" stroke-width="3"/>
      </svg>
      <ol class="rg-l" id="rgL">${LV.map(([n, d], i) => `<li data-i="${i}"><b>${n}</b><span>${d}</span><i></i></li>`).join("")}</ol></div>
      <div class="k-seg" id="rgB">${[1, 2, 3, 4].map(v => `<button type="button" class="k-b" data-v="${v}">Vault at SL${v}</button>`).join("")}<button type="button" class="k-b rg-5" disabled>SL5 · not yet possible</button></div>
    </div>${cap("RAND, “Securing AI Model Weights” (2024). Labs told RAND SL5 would take at least five years.")}`; },
  init: fr => {
    let lvl = 3, tier = 0, t = 0;
    const A_ = fr.querySelector("#rgA"), hit = fr.querySelector("#rgHit"), lis = [...fr.querySelectorAll("#rgL li")];
    const R = i => 120 - i * 21;
    const paint = () => { fr.querySelectorAll(".rg-ring").forEach(r => { const i = +r.dataset.i; r.classList.toggle("built", i < lvl); }); lis.forEach((l, i) => { l.className = i < lvl ? "safe" : "open"; }); };
    K.tabs(fr, "#rgB .k-b:not(.rg-5)", v => { lvl = +v; paint(); t = 0; }, 3);
    K.onEnter(fr, () => { tier = 0; t = 0; });
    K.raf(fr, dt => {
      t += dt / 2200; const ang = -2.4 + tier * 1.25, stopR = tier < lvl ? R(tier) + 8 : 18;
      const d = t < .7 ? K.lerp(150, stopR, t / .7) : stopR;
      A_.setAttribute("transform", `translate(${(140 + d * Math.cos(ang)).toFixed(1)} ${(150 + d * Math.sin(ang)).toFixed(1)})`);
      A_.setAttribute("opacity", t < .05 ? t * 20 : t > .95 ? (1 - t) * 20 : 1);
      fr.querySelector("#rgAt").textContent = LV[tier][0].replace("SL", "Tier ");
      const blocked = tier < lvl;
      lis.forEach((l, i) => l.classList.toggle("now", i === tier));
      if (t >= .7) { if (blocked) { hit.setAttribute("cx", (140 + stopR * Math.cos(ang)).toFixed(1)); hit.setAttribute("cy", (150 + stopR * Math.sin(ang)).toFixed(1)); hit.setAttribute("r", ((t - .7) * 60).toFixed(1)); hit.setAttribute("opacity", (1 - (t - .7) / .3).toFixed(2)); } else fr.querySelector("#rgCore").classList.add("hit"); }
      else { hit.setAttribute("r", 0); fr.querySelector("#rgCore").classList.remove("hit"); }
      if (t >= 1) { t = 0; tier = (tier + 1) % 5; }
    });
    paint();
  } };




})();

// 4 · The computer is now the building.
(() => {
const A = window.AX, cap = t => `<p class="cap">${t}</p>`;
const big = n => n >= 1e12 ? (n / 1e12).toFixed(n < 1e13 ? 1 : 0).replace(/\.0$/, "") + " trillion" : n >= 1e9 ? (n / 1e9).toFixed(n < 1e10 ? 1 : 0).replace(/\.0$/, "") + " billion" : Math.round(n).toLocaleString("en-US");
const LEV = [["Chip", "1 GPU", 1e3, "~1 kW"], ["Server", "8 GPUs", 14.3e3, "14.3 kW"], ["Rack", "72 GPUs", 1.2e5, "~120 kW"], ["Cluster", "~100k GPUs", 1.2e8, "~120 MW"], ["Campus", "Abilene, planned", 1.2e9, "1.2 GW"]];

// ---------------------------------------------------------- slide 1
A["ooms-1a"] = { html: () => {
    const X = y => 60 + (y - 2019) / 8 * 330, Y = o => 250 - o / 12 * 220;
    return `<div class="k-col oc"><svg viewBox="0 0 460 290" class="k-svg" aria-label="Effective compute in OOMs above GPT-2: GPT-4 about 4.5 to 6 OOMs higher in 2023, and Aschenbrenner's 2027 projection about 7.5 to 12.">
        ${[0, 2, 4, 6, 8, 10, 12].map(o => `<line x1="56" x2="420" y1="${Y(o)}" y2="${Y(o)}" stroke="var(--rule)" stroke-width=".6"/><text x="48" y="${Y(o) + 4}" text-anchor="end" font-size="11">${o}</text>`).join("")}
        <text x="18" y="140" font-size="11" text-anchor="middle" transform="rotate(-90 18 140)">OOMs above GPT-2</text>
        ${[2019, 2023, 2027].map(y => `<text x="${X(y)}" y="270" text-anchor="middle" font-size="12">${y}</text>`).join("")}
        <rect x="${X(2023) - 7}" y="${Y(6)}" width="14" height="${Y(4.5) - Y(6)}" rx="3" fill="var(--paper)" opacity=".35" class="k-grow-y" style="--d:.9s"/>
        <rect x="${X(2027) - 12}" y="${Y(12)}" width="24" height="${Y(7.5) - Y(12)}" rx="4" fill="var(--amber)" fill-opacity=".12" stroke="var(--amber)" stroke-dasharray="4 4" class="k-grow-y oc-box" style="--d:1.8s"/>
        <path d="M${X(2019)} ${Y(0)} L${X(2023)} ${Y(5.25)}" stroke="var(--paper)" stroke-width="2.5" fill="none" pathLength="100" class="k-draw" style="--d:.2s;--t:1s"/>
        <path d="M${X(2023)} ${Y(5.25)} L${X(2027)} ${Y(9.75)}" stroke="var(--amber)" stroke-width="2.5" stroke-dasharray="6 6" fill="none" class="k-ants"/>
        <path d="M${X(2027) + 14} ${Y(9.75)} h34" stroke="var(--amber)" stroke-width="2" marker-end="url(#ocArr)" class="k-fade" style="--d:2.4s"/><defs><marker id="ocArr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10z" fill="var(--amber)"/></marker></defs>
        <text x="${X(2027) + 18}" y="${Y(9.75) - 10}" font-size="11" style="fill:var(--amber);--d:2.4s" class="k-fade">starting line</text>
        ${[[2019, 0, "GPT-2", "preschooler"], [2023, 5.25, "GPT-4", "smart high schooler"], [2027, 9.75, "AGI?", "his projection"]].map(([y, o, a, b], i) => `<g class="oc-p k-pop" data-i="${i}" style="--d:${(.2 + i * .9).toFixed(1)}s"><circle cx="${X(y)}" cy="${Y(o)}" r="16" fill="transparent"/><circle cx="${X(y)}" cy="${Y(o)}" r="7" fill="var(--ink)" stroke="${i === 2 ? "var(--amber)" : "var(--paper)"}" stroke-width="2.5"/><text x="${X(y) + (i === 2 ? -16 : 14)}" y="${Y(o) - 14}" text-anchor="${i === 2 ? "end" : "start"}" class="t-strong" font-size="14">${a}</text><text x="${X(y) + (i === 2 ? -16 : 14)}" y="${Y(o) + 2}" text-anchor="${i === 2 ? "end" : "start"}" font-size="11">${b}</text></g>`).join("")}
        <circle id="ocDot" r="6" fill="var(--amber)" class="oc-dot"/>
      </svg>
      <div class="oc-out"><span id="ocY">2019</span><b id="ocX">×1</b><span id="ocS">effective compute vs GPT-2</span></div>
    </div>${cap("Aschenbrenner’s count of effective compute. Bars are his ranges; 2027 is his projection.")}`; },
  init: fr => {
    const X = y => 60 + (y - 2019) / 8 * 330, Y = o => 250 - o / 12 * 220;
    let u = 0, hold = -1;
    const at = u => { const y = 2019 + u * 8, o = u <= .5 ? u / .5 * 5.25 : 5.25 + (u - .5) / .5 * 4.5; return [y, o]; };
    const put = () => { const [y, o] = at(u); const d = fr.querySelector("#ocDot"); d.setAttribute("cx", X(y).toFixed(1)); d.setAttribute("cy", Y(o).toFixed(1)); fr.querySelector("#ocY").textContent = Math.floor(y); fr.querySelector("#ocX").textContent = "×" + big(Math.pow(10, o)); };
    const RNG = ["×1 · the baseline", "×30,000 to ×1 million", "×30 million to ×1 trillion"];
    fr.querySelectorAll(".oc-p").forEach(g => g.addEventListener("click", () => { hold = +g.dataset.i; u = hold / 2; put(); fr.querySelector("#ocX").textContent = RNG[hold].split(" · ")[0]; fr.querySelector("#ocS").textContent = ["GPT-2, the baseline", "GPT-4 vs GPT-2: 4.5 to 6 OOMs", "2027 projection: 7.5 to 12 OOMs"][hold]; }));
    K.onEnter(fr, () => { u = 0; hold = -1; fr.querySelector("#ocS").textContent = "effective compute vs GPT-2"; });
    K.raf(fr, dt => { if (hold >= 0) return; u += dt / 6000; if (u > 1.25) u = 0; const v = u; u = Math.min(1, u); put(); u = v; });
  } };





// ---------------------------------------------------------- slide 2


A["ooms-2b"] = { html: () => `<div class="k-col zo">
      <div class="zo-w"><svg viewBox="0 0 300 220" class="k-svg" id="zoS" aria-label="A zoom from one chip to a server, a rack, a cluster and a campus."></svg>
        <div class="zo-r"><p class="k-k" id="zoK">Level 1 of 5</p><p class="zo-n" id="zoN">Chip</p><p class="zo-p" id="zoP">~1 kW</p><p class="zo-g" id="zoG">1 GPU</p></div></div>
      <div class="k-seg" id="zoB">${LEV.map(([n], i) => `<button type="button" class="k-b" data-v="${i}">${n}</button>`).join("")}</div>
    </div>${cap("Drawings are schematic. Power: chip ~1 kW, server 14.3 kW, rack ~120 kW, cluster ~120 MW (my estimate), campus 1.2 GW (Abilene, planned).")}`,
  init: fr => {
    const S = fr.querySelector("#zoS");
    const chip = (x, y, s) => `<rect x="${x}" y="${y}" width="${s}" height="${s}" rx="${s * .12}" fill="#1b3550" stroke="var(--amber)" stroke-width="${Math.max(.6, s * .04)}"/>${s > 30 ? `<rect x="${x + s * .28}" y="${y + s * .28}" width="${s * .44}" height="${s * .44}" fill="var(--amber)" fill-opacity=".5"/>` + Array.from({ length: 6 }, (_, i) => `<path d="M${x + s * (.2 + i * .12)} ${y} v-${s * .1} M${x + s * (.2 + i * .12)} ${y + s} v${s * .1}" stroke="var(--amber)" stroke-width="1.5"/>`).join("") : ""}`;
    const SC = [
      () => chip(110, 70, 80),
      () => `<rect x="30" y="60" width="240" height="100" rx="8" fill="var(--ink-2)" stroke="var(--paper)" stroke-width="1.5"/>` + Array.from({ length: 8 }, (_, i) => chip(46 + (i % 4) * 56, 72 + Math.floor(i / 4) * 44, 34)).join(""),
      () => `<rect x="100" y="8" width="100" height="204" rx="5" fill="var(--ink-2)" stroke="var(--paper)" stroke-width="1.5"/>` + Array.from({ length: 18 }, (_, i) => `<rect x="106" y="${14 + i * 10.9 + (i > 8 ? 4 : 0)}" width="88" height="8" rx="1.5" fill="#16324a"/>` + Array.from({ length: 4 }, (_, k) => `<rect x="${110 + k * 21}" y="${15.5 + i * 10.9 + (i > 8 ? 4 : 0)}" width="15" height="5" rx="1" fill="var(--amber)" opacity=".75"/>`).join("")).join(""),
      () => Array.from({ length: 8 }, (_, r) => Array.from({ length: 22 }, (_, c) => `<rect x="${14 + c * 12.4}" y="${22 + r * 24}" width="9" height="18" rx="1" fill="var(--amber)" opacity="${(.35 + ((r * 7 + c * 3) % 10) / 16).toFixed(2)}" class="zo-blink" style="animation-delay:${(-((r * 13 + c * 7) % 23) / 10).toFixed(1)}s"/>`).join("")).join("") + `<text x="150" y="216" text-anchor="middle" font-size="10" style="fill:var(--faint)">one dot ≈ 8 racks</text>`,
      () => `<rect x="6" y="6" width="288" height="208" rx="8" fill="#0a1320" stroke="var(--rule)"/>` + Array.from({ length: 8 }, (_, i) => `<rect x="${18 + (i % 4) * 68}" y="${24 + Math.floor(i / 4) * 92}" width="58" height="72" rx="3" fill="#13263b" stroke="var(--amber)" stroke-width="1.2"/>` + Array.from({ length: 6 }, (_, k) => `<rect x="${24 + (i % 4) * 68 + (k % 2) * 24}" y="${32 + Math.floor(i / 4) * 92 + Math.floor(k / 2) * 20}" width="20" height="14" rx="1" fill="var(--amber)" opacity=".5"/>`).join("")).join("") + `<path d="M6 116 H294" stroke="var(--beat)" stroke-width="2" stroke-dasharray="6 5" class="k-ants"/><text x="150" y="112" text-anchor="middle" font-size="10" style="fill:var(--beat)">power and fiber</text>`
    ];
    const G = ["1 GPU", "8 GPUs", "72 GPUs", "~100,000 GPUs", "several hundred thousand GPUs"];
    let lvl = 0, t = 0, auto = true;
    const go = (i, from) => {
      lvl = i; S.innerHTML = `<g class="zo-new">${SC[i]()}</g>`;
      if (from != null) S.insertAdjacentHTML("afterbegin", `<g class="zo-old">${SC[from]()}</g>`);
      fr.querySelector("#zoK").textContent = `Level ${i + 1} of 5`; fr.querySelector("#zoN").textContent = LEV[i][0]; fr.querySelector("#zoP").textContent = LEV[i][3]; fr.querySelector("#zoG").textContent = i === 4 ? "Stargate Abilene, planned" : G[i];
      fr.querySelectorAll("#zoB .k-b").forEach((b, k) => b.classList.toggle("on", k === i));
    };
    fr.querySelectorAll("#zoB .k-b").forEach((b, i) => b.addEventListener("click", () => { auto = false; go(i, lvl !== i ? lvl : null); }));
    K.onEnter(fr, () => { auto = true; t = 0; go(0); });
    K.raf(fr, dt => { if (!auto) return; t += dt; if (t > 2400) { t = 0; go((lvl + 1) % 5, lvl < 4 ? lvl : null); } });
    go(0);
  } };



// ---------------------------------------------------------- slide 3


A["ooms-3b"] = { html: () => `<div class="k-col gl">
      <div class="gl-st">${LEV.map(([n, s, , p], i) => `<div class="gl-l" style="--w:${40 + i * 15}%;--d:${(i * .15).toFixed(2)}s"><b>${n}</b><span>${p}</span></div>${i < 4 ? `<button type="button" class="gl-s" data-i="${i}" style="--w:${47 + i * 15}%"><i></i><i></i><i></i></button>` : ""}`).reverse().join("")}</div>
      <div class="gl-card" id="glC"></div>
    </div>${cap("My bet: each new OOM makes the glue a bigger share of the bill. Examples of glue are general categories, not picks.")}`,
  init: fr => {
    const G = [["Chip → server", "Boards, power delivery and NVLink between eight GPUs."], ["Server → rack", "NVLink switches and a copper spine that make 72 GPUs act as one, plus liquid cooling."], ["Rack → cluster", "The network: switches and optical interconnect tying thousands of racks together."], ["Cluster → campus", "Power delivery inside the building, cooling plants, and software that keeps a whole campus busy."]];
    const seams = [...fr.querySelectorAll(".gl-s")];
    const show = i => { seams.forEach(s => s.classList.toggle("on", +s.dataset.i === i)); fr.querySelector("#glC").innerHTML = `<p class="k-k">${G[i][0]}</p><p>${G[i][1]}</p>`; };
    let auto = true, k = 0;
    seams.forEach(s => s.addEventListener("click", () => { auto = false; show(+s.dataset.i); }));
    K.onEnter(fr, () => { auto = true; k = 0; show(0); });
    K.loop(fr, () => { if (auto) { k = (k + 1) % 4; show(k); } }, 2400);
    show(0);
  } };


})();

// 5 · Molecules are easy. Machines are hard.
(() => {
const A = window.AX, cap = t => `<p class="cap">${t}</p>`;
const jack = (x, y) => `<g transform="translate(${x} ${y})" class="mo-jack">
  <line x1="-50" x2="50" y1="0" y2="0" stroke="var(--rule)" stroke-width="2"/>
  <path d="M-14 0 L0 -50 L14 0 M-8 -22 H8" stroke="var(--paper)" stroke-width="2.4" fill="none" stroke-linejoin="round"/>
  <path d="M-54 -38 V0" stroke="var(--faint)" stroke-width="2"/>
  <g><animateTransform attributeName="transform" type="rotate" values="-9 0 -50;9 0 -50;-9 0 -50" dur="2.2s" repeatCount="indefinite"/><rect x="-50" y="-54" width="90" height="7" rx="2" fill="var(--amber)"/><path d="M-50 -58 C-64 -52 -64 -36 -55 -32 L-50 -40 C-53 -44 -53 -50 -47 -51 Z" fill="var(--amber)"/></g>
  <circle cx="0" cy="-50" r="3.2" fill="var(--paper)"/>
  <line x1="36" y1="-47" x2="34" y2="-18" stroke="var(--paper)" stroke-width="2"/>
  <g><animateTransform attributeName="transform" type="rotate" from="0 34 -18" to="360 34 -18" dur="2.2s" repeatCount="indefinite"/><circle cx="34" cy="-18" r="9" fill="var(--ink-2)" stroke="var(--paper)" stroke-width="2"/><rect x="31" y="-32" width="6" height="14" rx="2" fill="var(--paper)"/></g></g>`;

// ---------------------------------------------------------- slide 1
A["molecules-1a"] = { html: () => `<div class="k-col mf"><svg viewBox="0 0 520 290" class="k-svg" aria-label="A field of 1,200 dots, one per well, fills in under a year of drilling while a counter climbs to 100 gigawatts of fuel.">
      <text x="24" y="30" class="t-strong" font-size="17">Drill the gas: ~1,200 wells</text>
      <text x="24" y="50" font-size="13">One dot per well</text>
      <g id="mfF"></g>
      ${jack(420, 132)}
      <text x="312" y="190" class="mf-big" id="mfW">0</text><text x="436" y="190" font-size="15" class="t-strong">wells</text>
      <text x="312" y="216" font-size="14"><tspan id="mfG" class="mf-g">0</tspan> GW of fuel</text>
      <line x1="312" y1="240" x2="500" y2="240" stroke="var(--rule)" stroke-width="6" stroke-linecap="round"/>
      <line x1="312" y1="240" x2="312" y2="240" id="mfM" stroke="var(--amber)" stroke-width="6" stroke-linecap="round"/>
      <text x="312" y="262" font-size="12">0</text><text x="500" y="262" text-anchor="end" font-size="12">12 months</text>
      <text x="${(312 + 188 * 11 / 12).toFixed(1)}" y="282" text-anchor="end" font-size="12.5" id="mfU" class="mf-u">month <tspan id="mfMo">0</tspan></text>
    </svg></div>${cap("Fuel: about 1,200 new wells, under a year of drilling, could supply 100 GW (Aschenbrenner, 2024).")}`,
  init: fr => {
    const F = fr.querySelector("#mfF"), r = K.rng(11), ord = [];
    F.innerHTML = Array.from({ length: 1200 }, (_, i) => `<circle cx="${(27 + (i % 40) * 6.4).toFixed(1)}" cy="${(73 + Math.floor(i / 40) * 6.4).toFixed(1)}" r="2" class="mf-d"/>`).join("");
    const D = [...F.children]; for (let i = 0; i < 1200; i++) ord.push(i); for (let i = 1199; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [ord[i], ord[j]] = [ord[j], ord[i]]; }
    let t = 0, n = 0;
    const reset = () => { t = 0; n = 0; D.forEach(d => d.classList.remove("on")); fr.querySelector(".mf-u").classList.remove("done"); };
    K.onEnter(fr, reset);
    K.raf(fr, dt => {
      if (t >= 1) return; t = Math.min(1, t + dt / 6000);
      const want = Math.round(1200 * (1 - Math.pow(1 - t, 1.6)));
      while (n < want) D[ord[n++]].classList.add("on");
      fr.querySelector("#mfW").textContent = n.toLocaleString("en-US");
      fr.querySelector("#mfG").textContent = Math.round(n / 12);
      const mo = t * 11; fr.querySelector("#mfMo").textContent = Math.floor(mo);
      fr.querySelector("#mfM").setAttribute("x2", (312 + 188 * mo / 12).toFixed(1));
      if (t >= 1) { fr.querySelector("#mfU").innerHTML = "under a year"; fr.querySelector(".mf-u").classList.add("done"); }
    });
  } };





// ---------------------------------------------------------- slide 2






// ---------------------------------------------------------- slide 3
const NODES = [["Gas well", "var(--amber)", "Months to drill. Plenty of it."], ["Turbine", "var(--coral)", "Burns the gas and spins a generator. Slots booked into 2031."], ["Transformer", "var(--coral)", "Steps the voltage up and down. Also backlogged."], ["Substation", "var(--coral)", "Ties the plant to the grid and the site. Needs permits and interconnection."], ["Rack", "var(--beat)", "Where power turns into tokens, once it arrives."]];
const ICON = [`<path d="M-11 14 L0 -14 L11 14 M-7 3 H7 M-4 -5 H4"/>`, `<circle r="12"/><path d="M0 0 L0 -11 M0 0 L9.5 5.5 M0 0 L-9.5 5.5"><animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="3s" repeatCount="indefinite"/></path>`, `<circle cx="-5" r="8"/><circle cx="5" r="8"/>`, `<path d="M-12 13 V-6 M12 13 V-6 M-12 -6 H12 M-12 4 H12 M-6 -13 V-6 M6 -13 V-6"/>`, `<rect x="-10" y="-14" width="20" height="28"/><path d="M-6 -7 H6 M-6 0 H6 M-6 7 H6"/>`];





})();

// 6 · The power plant that ships like a server.
(() => {
const A = window.AX, cap = t => `<p class="cap">${t}</p>`;
const GRID = [["Grid", "AC", 0, "Power arrives as high-voltage AC."], ["Substation", "step down", 1, "Transformers step the voltage down. A conversion, and backlogged gear."], ["Switchgear", "AC", 0, "Breakers and switching for the building."], ["UPS", "AC→DC→AC", 1, "Batteries store DC, so power is turned to DC and back to AC. Two conversions in one box."], ["Rack PSU", "AC→DC", 1, "The rack’s power supply turns it to DC, finally."], ["GPU", "DC", 0, "The chip only ever wanted DC."]];
const FC = [["Fuel cell", "makes DC", 0, "The cell makes DC directly from gas, no combustion."], ["800 V DC bus", "Kyber, 2027", 0, "Nvidia’s racks move to 800-volt DC with Kyber in 2027."], ["Rack → GPU", "DC", 0, "DC all the way to the chip."]];

// ---------------------------------------------------------- slide 1
A["bloom-1a"] = { html: () => {
    const box = (x, y, w, [a, b, c], k, i) => `<g class="cv-b" data-k="${k}" data-i="${i}"><rect x="${x}" y="${y}" width="${w}" height="50" rx="6" fill="var(--ink-2)" stroke="${k === "f" || a === "GPU" ? "var(--beat)" : "var(--rule)"}" stroke-width="1.5"/><text x="${x + w / 2}" y="${y + 22}" text-anchor="middle" font-size="12.5" class="t-strong">${a}</text><text x="${x + w / 2}" y="${y + 38}" text-anchor="middle" font-size="10.5">${b}</text>${c ? `<g transform="translate(${x + w - 4} ${y + 4})"><circle r="9" fill="var(--coral)"/><path d="M-4 -1 a4.5 4.5 0 1 1 1.5 4.5" fill="none" stroke="var(--ink)" stroke-width="1.8" class="cv-spin"/></g>` : ""}</g>`;
    return `<div class="k-col cv"><svg viewBox="0 0 460 290" class="k-svg" aria-label="Today, grid power passes a substation, switchgear, a UPS and a rack power supply, converting between AC and DC several times. A fuel cell makes DC and can feed an 800-volt DC bus straight to the rack.">
      <text x="14" y="30" class="t-strong" font-size="15">Grid power today</text><text x="446" y="30" text-anchor="end" font-size="13" style="fill:var(--coral)" font-weight="700"><tspan id="cvN">0</tspan> conversions</text>
      <path d="M22 77 H440" stroke="var(--rule)" stroke-width="2" stroke-dasharray="3 5"/>
      ${GRID.map((g, i) => box(14 + i * 74, 52, i === 5 ? 60 : 64, g, "g", i)).join("")}
      <g id="cvT"></g>
      <text x="14" y="170" class="t-strong" font-size="15">Fuel cell, 800 V DC</text><text x="446" y="170" text-anchor="end" font-size="13" style="fill:var(--beat)" font-weight="700">0 conversions</text>
      <path d="M22 207 H440" stroke="var(--beat)" stroke-width="2" stroke-opacity=".4"/>
      ${FC.map((g, i) => box([14, 168, 322][i], 182, i === 2 ? 126 : 120, g, "f", i)).join("")}
      <g id="cvB"></g>
      <text x="230" y="270" text-anchor="middle" font-size="12.5" id="cvSay">Tap a box.</text>
    </svg></div>${cap("Simplified. Nvidia moves its racks to 800 V DC with Kyber in 2027; today’s chain converts AC and DC several times. Losses drawn for illustration.")}`; },
  init: fr => {
    const T = fr.querySelector("#cvT"), B = fr.querySelector("#cvB"), conv = [88 + 74 - 4, 14 + 3 * 74 + 60, 14 + 4 * 74 + 60];
    let ps = [], qs = [], acc = 0, n = 0;
    fr.querySelectorAll(".cv-b").forEach(g => g.addEventListener("click", () => { fr.querySelectorAll(".cv-b").forEach(x => x.classList.toggle("sel", x === g)); const d = (g.dataset.k === "g" ? GRID : FC)[+g.dataset.i]; fr.querySelector("#cvSay").textContent = `${d[0]}: ${d[3]}`; }));
    K.onEnter(fr, () => { n = 0; });
    K.raf(fr, dt => {
      acc += dt; if (acc > 260) { acc = 0; ps.push({ x: 22, y: 77, a: 1, d: 0 }); qs.push({ x: 22 }); }
      ps.forEach(p => { if (p.d) { p.y += dt * .05; p.a -= dt / 500; return; } const nx = p.x + dt * .1; conv.forEach(c => { if (p.x < c && nx >= c && Math.random() < .28) { p.d = 1; n++; } }); p.x = nx; });
      qs.forEach(q => q.x += dt * .14);
      ps = ps.filter(p => p.x < 440 && p.a > 0); qs = qs.filter(q => q.x < 440);
      T.innerHTML = ps.map(p => `<circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="3.6" fill="${p.d ? "var(--coral)" : "#f2b84b"}" opacity="${Math.max(0, p.a).toFixed(2)}"/>`).join("");
      B.innerHTML = qs.map(q => `<circle cx="${q.x.toFixed(1)}" cy="207" r="3.6" fill="var(--beat)"/>`).join("");
      fr.querySelector("#cvN").textContent = 3;
    });
  } };





// ---------------------------------------------------------- slide 2
A["bloom-2a"] = { html: () => `<div class="k-col ta"><svg viewBox="0 0 460 330" class="k-svg" aria-label="Time to power: Bloom delivered to Oracle in 55 days, while a gas turbine ordered in 2026 arrives around 2031. Below, a solid oxide cell: oxygen ions cross a ceramic electrolyte and react with fuel without combustion, releasing electrons as DC.">
      <text x="14" y="22" class="t-strong" font-size="15">Time to power</text>
      ${[2026, 2027, 2028, 2029, 2030, 2031].map((y, i) => `<text x="${110 + i * 66}" y="110" text-anchor="middle" font-size="11">${y}</text>`).join("")}
      <text x="100" y="52" text-anchor="end" font-size="12.5" class="t-strong">Fuel cells</text><rect x="110" y="40" height="16" rx="3" fill="var(--beat)" id="taF" width="0"/><text x="120" y="53" font-size="12" style="fill:var(--beat)" font-weight="700" id="taFt"></text>
      <text x="100" y="82" text-anchor="end" font-size="12.5" class="t-strong">Gas turbine</text><rect x="110" y="70" height="16" rx="3" fill="var(--coral)" id="taT" width="0"/><text x="116" y="83" font-size="11.5" style="fill:var(--ink)" font-weight="700" id="taTt"></text>
      <text x="14" y="148" class="t-strong" font-size="15">Inside a solid oxide cell</text>
      <rect x="70" y="160" width="250" height="34" rx="4" fill="#13283a" stroke="var(--beat)"/><text x="195" y="182" text-anchor="middle" font-size="12" class="t-strong">Air side: oxygen in</text>
      <rect x="70" y="194" width="250" height="44" fill="#3a3220" stroke="#b49450"/><text x="60" y="220" text-anchor="end" font-size="11.5">O²⁻ ions</text><text x="330" y="220" font-size="11.5">ceramic</text>
      <rect x="70" y="238" width="250" height="34" rx="4" fill="#1d2433" stroke="var(--amber)"/><text x="195" y="260" text-anchor="middle" font-size="12" class="t-strong" id="taFuel">Fuel side: gas in, no flame</text>
      <path id="taLoop" d="M320 255 H380 V160 H420 M420 160 V120 H380 V177 H320" fill="none" stroke="var(--beat)" stroke-width="1.6" stroke-dasharray="4 4"/>
      <g transform="translate(420 140)"><rect x="-20" y="-20" width="40" height="40" rx="5" fill="var(--ink-2)" stroke="var(--beat)" stroke-width="2" id="taG"/><text y="5" text-anchor="middle" font-size="11" font-weight="800" class="t-strong">GPU</text></g>
      <g id="taI"></g><g id="taE"></g>
      <text x="195" y="298" text-anchor="middle" font-size="12">Electrons take the outside path: that’s the power.</text>
    </svg><div class="k-seg"><button type="button" class="k-b on" id="taGo">Fuel on</button></div></div>${cap("Oracle delivery per Bloom (Apr 2026). Turbine timing per GE Vernova’s reservations, Utility Dive (July 2026).")}`,
  init: fr => {
    let t = 0, fuel = true, ions = [], el = [], acc = 0;
    const loop = fr.querySelector("#taLoop"), LL = loop.getTotalLength();
    fr.querySelector("#taGo").addEventListener("click", e => { fuel = !fuel; e.target.textContent = fuel ? "Fuel on" : "Fuel off"; e.target.classList.toggle("on", fuel); fr.querySelector("#taFuel").textContent = fuel ? "Fuel side: gas in, no flame" : "Fuel side: no gas, no power"; });
    K.onEnter(fr, () => { t = 0; });
    K.raf(fr, dt => {
      t += dt;
      const fd = Math.min(55, t / 1400 * 55); fr.querySelector("#taF").setAttribute("width", Math.max(3, fd / 365 * 66).toFixed(1)); fr.querySelector("#taFt").textContent = Math.round(fd) + " days" + (fd >= 55 ? " (Oracle)" : ""); fr.querySelector("#taFt").setAttribute("x", (116 + Math.max(3, fd / 365 * 66)).toFixed(1));
      const ty = Math.min(5, t / 5200 * 5); fr.querySelector("#taT").setAttribute("width", (ty * 66).toFixed(1)); fr.querySelector("#taTt").textContent = ty > 1.6 ? (ty >= 5 ? "ordered now, ships ~2031" : `${ty.toFixed(1)} years and counting`) : "";
      if (t > 9000) t = 0;
      acc += dt; if (fuel && acc > 220) { acc = 0; ions.push({ x: 85 + Math.random() * 220, y: 196 }); }
      ions.forEach(i => { i.y += dt * .03; if (i.y > 236 && !i.done) { i.done = true; el.push({ d: 0 }); } });
      ions = ions.filter(i => i.y < 238);
      el.forEach(e => e.d += dt * .09); el = el.filter(e => e.d < LL);
      fr.querySelector("#taI").innerHTML = ions.map(i => `<circle cx="${i.x.toFixed(1)}" cy="${i.y.toFixed(1)}" r="4" fill="#f2b84b"/><text x="${(i.x + 6).toFixed(1)}" y="${(i.y - 3).toFixed(1)}" font-size="7.5" style="fill:#f2b84b">2−</text>`).join("");
      fr.querySelector("#taE").innerHTML = el.map(e => { const p = loop.getPointAtLength(e.d); return `<circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="3" fill="var(--beat)"/>`; }).join("");
      fr.querySelector("#taG").classList.toggle("on", el.length > 2);
    });
  } };





// ---------------------------------------------------------- slide 3
A["bloom-3a"] = { html: () => `<div class="k-col pc">
      <p class="k-k">Power a campus of</p><p class="pc-big"><b id="pcMW">300</b> MW</p>
      <input type="range" id="pcR" min="50" max="1000" step="10" value="300" class="pc-r" aria-label="Campus size in megawatts">
      <div class="pc-g" id="pcG">${Array.from({ length: 100 }, (_, i) => `<i style="--k:${i}"></i>`).join("")}</div>
      <div class="pc-o"><p><b id="pcS">924</b> Energy Servers</p><p><b id="pcM">1.8</b> months of planned output</p><p><b id="pcK">2,500</b> NVL72 racks</p></div>
    </div>${cap("Each square is 10 MW. 325 kW per Energy Server; output at Bloom’s planned 2 GW a year; racks at about 120 kW each.")}`,
  init: fr => {
    const cells = [...fr.querySelectorAll("#pcG i")];
    K.slider(fr, "#pcR", v => {
      fr.querySelector("#pcMW").textContent = v.toLocaleString("en-US");
      const n = Math.round(v / 10); cells.forEach((c, i) => { const on = i < n; if (on && !c.classList.contains("on")) c.style.setProperty("--k", i - (cells.findIndex(x => !x.classList.contains("on")) || 0)); c.classList.toggle("on", on); });
      fr.querySelector("#pcS").textContent = Math.ceil(v * 1000 / 325).toLocaleString("en-US");
      fr.querySelector("#pcM").textContent = (v / 2000 * 12).toFixed(1);
      fr.querySelector("#pcK").textContent = Math.round(v * 1000 / 120).toLocaleString("en-US");
    });
    K.onEnter(fr, () => { const r = fr.querySelector("#pcR"); r.value = 50; r.dispatchEvent(new Event("input")); let v = 50; const iv = setInterval(() => { if (!K.active(fr) || v >= 300) return clearInterval(iv); v += 10; r.value = v; r.dispatchEvent(new Event("input")); }, 50); });
  } };




})();

// 7 · A fleet, not a cluster.
(() => {
const A = window.AX, cap = t => `<p class="cap">${t}</p>`;
const G = n => window.__H.get(n);
const MS = .92, MX = 28, MY = 40;
const sites = () => G("STARGATE").map(([name, x, y, gw, dx, dy, anchor, note]) => ({ name, gw, dx, dy, anchor, note, x: MX + x * MS, y: MY + y * MS }));
const usMap = id => `<defs><pattern id="${id}d" width="8" height="13.86" patternUnits="userSpaceOnUse"><circle cx="4" cy="3.46" r="1.3" fill="var(--paper)" fill-opacity=".15"/><circle cx="0" cy="10.39" r="1.3" fill="var(--paper)" fill-opacity=".15"/><circle cx="8" cy="10.39" r="1.3" fill="var(--paper)" fill-opacity=".15"/></pattern><clipPath id="${id}c"><path d="${G("US48")}" transform="translate(${MX} ${MY}) scale(${MS})"/></clipPath></defs>
  <path class="fl-land" d="${G("US48")}" transform="translate(${MX} ${MY}) scale(${MS})"/>
  <rect x="${MX - 4}" y="${MY - 4}" width="412" height="262" fill="url(#${id}d)" clip-path="url(#${id}c)"/>`;
const curve = (a, b, k) => { const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2; return `M${a.x.toFixed(1)} ${a.y.toFixed(1)} Q${(mx + (b.y - a.y) * k).toFixed(1)} ${(my - (b.x - a.x) * k).toFixed(1)} ${b.x.toFixed(1)} ${b.y.toFixed(1)}`; };
const LINKS = [[3, 0, .3], [0, 2, .3], [1, 4, .14], [2, 5, .16], [4, 5, .4], [5, 6, .5], [2, 6, .12], [3, 4, .12]];

// ---------------------------------------------------------- slide 1
A["fleet-1a"] = { html: () => {
    const Y = L => 300 - (L - 1) * 62, X = yr => 96 + (yr - 2022) * 42;
    const ladder = [[2022, 1, "10 MW"], [2024, 2, "100 MW"], [2026, 3, "1 GW"], [2028, 4, "10 GW"], [2030, 5, "100 GW"]];
    const live = Math.log10(300), plan = Math.log10(1200);
    return `<div class="k-col la"><svg viewBox="0 0 460 350" class="k-svg" aria-label="Log-scale ladder of cluster power from 10 megawatts in 2022 to 100 gigawatts in 2030, with Stargate Abilene at 0.3 gigawatts live and 1.2 planned in April 2026.">
        ${ladder.map(([, , l], i) => `<line x1="88" y1="${Y(i + 1)}" x2="450" y2="${Y(i + 1)}" stroke="var(--rule)" stroke-width=".7"/><text x="80" y="${Y(i + 1) + 5}" text-anchor="end" font-size="14">${l}</text>`).join("")}
        <polyline points="${ladder.map(([y, L]) => `${X(y)},${Y(L)}`).join(" ")}" fill="none" stroke="var(--paper)" stroke-width="1.8" stroke-dasharray="5 5" opacity=".75" pathLength="100" class="la-line"/>
        ${ladder.map(([y, L], i) => `<g class="la-r k-pop" data-i="${i}" style="--d:${(.2 + i * .45).toFixed(2)}s"><circle cx="${X(y)}" cy="${Y(L)}" r="16" fill="transparent"/><circle cx="${X(y)}" cy="${Y(L)}" r="7" fill="var(--paper)" class="la-dot"/>${i ? `<text x="${X(y) - 24}" y="${Y(L) + 30}" font-size="11" font-weight="800" style="fill:var(--violet)">×10</text>` : ""}</g><text x="${X(y)}" y="330" text-anchor="middle" font-size="13">${y}</text>`).join("")}
        <text x="${X(2030) - 14}" y="${Y(5) + 5}" text-anchor="end" font-size="13">more than 20% of US power</text>
        <line x1="${X(2026.29)}" y1="${Y(live)}" x2="${X(2026.29)}" y2="${Y(plan)}" stroke="var(--beat)" stroke-width="1.6"/>
        <circle cx="${X(2026.29)}" cy="${Y(live)}" r="7" fill="var(--beat)" class="k-throb"/>
        <circle cx="${X(2026.29)}" cy="${Y(plan)}" r="7" fill="var(--ink)" stroke="var(--beat)" stroke-width="2" stroke-dasharray="3 3" class="k-spin" style="--t:6s"/>
        <text x="${X(2026.29) + 14}" y="${Y(live) + 5}" font-size="13" style="fill:var(--beat)">Abilene live, Apr 2026: 0.3 GW</text>
        <text x="${X(2026.29) + 14}" y="${Y(plan) + 18}" font-size="13" style="fill:var(--beat)">planned: 1.2 GW</text>
        <text x="110" y="40" class="la-yr" id="laY">2022</text>
      </svg><p class="la-say" id="laSay">Tap a rung.</p></div>${cap("One cluster per rung, ten times bigger every two years (dashed). Abilene in April 2026, per Epoch AI (blue).")}`; },
  init: fr => {
    const SAY = ["<b>10 MW, 2022.</b> The bottom rung.", "<b>100 MW, 2024.</b> Ten times that, two years later.", "<b>1 GW, 2026.</b> About one Abilene, as planned. It had 0.3 GW live in April.", "<b>10 GW, 2028.</b> About all of Stargate’s seven sites put together, 9+ GW by 2029.", "<b>100 GW, 2030.</b> More than a fifth of US electricity, in one cluster."];
    fr.querySelectorAll(".la-r").forEach(g => g.addEventListener("click", () => { fr.querySelectorAll(".la-r").forEach(x => x.classList.toggle("sel", x === g)); fr.querySelector("#laSay").innerHTML = SAY[+g.dataset.i]; }));
    let t = 0; K.onEnter(fr, () => { t = 0; });
    K.raf(fr, dt => { if (t > 2400) return; t += dt; fr.querySelector("#laY").textContent = 2022 + Math.min(8, Math.floor(t / 2400 * 9)); });
  } };





// ---------------------------------------------------------- slide 2
A["fleet-2a"] = { html: () => `<div class="k-col mv"><svg viewBox="0 0 460 330" class="k-svg" id="mvS" aria-label="Map of Stargate's seven US sites, with Abilene's planned expansion moving to the other sites."></svg>
      <div class="mv-row"><p class="mv-s" id="mvSay">Tap a site.</p></div></div>${cap("Stargate today, per Epoch AI (Apr 2026): seven US sites, 9+ GW planned by 2029. OpenAI moved Abilene’s extra 2.1 GW to other sites.")}`,
  init: fr => {
    const S = sites(), svg = fr.querySelector("#mvS"), tot = S.reduce((a, s) => a + s.gw, 0);
    svg.innerHTML = usMap("mv") + `<text x="20" y="22" class="t-strong" font-size="17">Not one 100 GW campus. Seven sites.</text>
      <circle id="mvGhost" cx="${S[0].x}" cy="${S[0].y}" r="${6.5 * Math.sqrt(3.3)}" fill="none" stroke="var(--coral)" stroke-dasharray="4 4"/>
      ${S.map((s, i) => `<g class="mv-site" data-i="${i}" transform="translate(${s.x.toFixed(1)} ${s.y.toFixed(1)})"><circle r="14" fill="transparent"/><circle class="mv-h" r="${(6.5 * Math.sqrt(s.gw)).toFixed(1)}" fill="var(--amber)" fill-opacity=".16" stroke="var(--amber)" stroke-opacity=".75"/><circle r="3.4" fill="${i === 0 ? "var(--beat)" : "var(--amber)"}"/></g><text x="${(s.x + s.dx).toFixed(1)}" y="${(s.y + s.dy).toFixed(1)}" text-anchor="${s.anchor}" font-size="11" class="t-strong mv-l">${s.name}</text>`).join("")}
      <g id="mvP"></g>
      <text x="20" y="306" class="t-strong" font-size="13"><tspan id="mvN">0.0</tspan> GW planned across the seven</text>`;
    const T = [1, 2, 3, 4, 5]; let ps = [], t = 0, done = false;
    const go = () => { t = 0; done = false; ps = Array.from({ length: 21 }, (_, k) => ({ to: T[k % T.length], u: -k * .04 })); fr.querySelector("#mvGhost").setAttribute("opacity", 1); };
    fr.querySelectorAll(".mv-site").forEach(g => g.addEventListener("click", () => { const s = S[+g.dataset.i]; fr.querySelectorAll(".mv-site").forEach(x => x.classList.toggle("sel", x === g)); fr.querySelector("#mvSay").innerHTML = `<b>${s.name}:</b> ${s.note || s.gw.toFixed(1) + " GW planned"}.`; }));
    K.onEnter(fr, go);
    K.raf(fr, dt => {
      t += dt; fr.querySelector("#mvN").textContent = Math.min(tot, t / 2200 * tot).toFixed(1);
      ps.forEach(p => p.u += dt / 1600);
      const a = S[0];
      fr.querySelector("#mvP").innerHTML = ps.filter(p => p.u > 0 && p.u < 1).map(p => { const b = S[p.to], e = 1 - Math.pow(1 - p.u, 2), x = K.lerp(a.x, b.x, e), y = K.lerp(a.y, b.y, e) - Math.sin(e * Math.PI) * 40; return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="3" fill="var(--coral)" opacity="${(1 - p.u * .5).toFixed(2)}"/>`; }).join("");
      if (!done && ps.every(p => p.u >= 1)) { done = true; fr.querySelector("#mvGhost").setAttribute("opacity", .25); }
    });
  } };





// ---------------------------------------------------------- slide 3





})();

// 8 · Old GPUs don’t die. They move down the menu.
(() => {
const A = window.AX, cap = t => `<p class="cap">${t}</p>`;
const chipIc = (x, y, s, c = "var(--amber)") => `<g transform="translate(${x} ${y})"><rect x="${-s / 2}" y="${-s / 2}" width="${s}" height="${s}" rx="${s * .14}" fill="var(--ink-2)" stroke="${c}" stroke-width="1.5"/><rect x="${-s / 4}" y="${-s / 4}" width="${s / 2}" height="${s / 2}" fill="${c}" fill-opacity=".5"/></g>`;

// ---------------------------------------------------------- slide 1
A["gpulife-1a"] = { html: () => {
    const X = a => 60 + a * 40, Y = v => 230 - v * 1.7;
    return `<div class="k-col ga"><svg viewBox="0 0 460 290" class="k-svg" aria-label="Share of a GPU's original value by age: the books over six years, Burry over two to three, and market evidence at year three and year nine.">
      <text x="60" y="24" font-size="12.5" class="t-strong">A new Nvidia flagship every year</text>
      ${Array.from({ length: 10 }, (_, i) => `<g class="ga-fl" data-i="${i}">${chipIc(X(i), 44, 15, "var(--faint)")}</g>`).join("")}
      ${[0, 50, 100].map(v => `<line x1="56" x2="430" y1="${Y(v)}" y2="${Y(v)}" stroke="var(--rule)" stroke-width=".6"/><text x="48" y="${Y(v) + 4}" text-anchor="end" font-size="11">${v}%</text>`).join("")}
      ${[0, 3, 6, 9].map(a => `<text x="${X(a)}" y="250" text-anchor="middle" font-size="11">${a}</text>`).join("")}<text x="${X(4.5)}" y="270" text-anchor="middle" font-size="11.5">Age of the GPU, years</text>
      <path d="M${X(0)} ${Y(100)} L${X(6)} ${Y(0)}" stroke="var(--amber)" stroke-width="2.4" pathLength="100" class="k-draw" style="--t:1.2s"/>
      <path d="M${X(0)} ${Y(100)} L${X(2)} ${Y(0)} M${X(0)} ${Y(100)} L${X(3)} ${Y(0)}" stroke="var(--coral)" stroke-width="2" pathLength="100" class="k-draw" style="--t:1s;--d:.4s"/>
      <path d="M${X(0)} ${Y(100)} L${X(2)} ${Y(0)} L${X(3)} ${Y(0)} Z" fill="var(--coral)" fill-opacity=".14" class="k-fade" style="--d:1s"/>
      <circle cx="${X(2.6)}" cy="${Y(45)}" r="8" fill="var(--beat)" class="k-pop ga-ev" style="--d:1.4s" data-e="0"/>
      <path d="M${X(6)} ${Y(8)} H${X(9)}" stroke="var(--beat)" stroke-width="3" marker-end="url(#gaA)" class="k-grow-x ga-ev" style="--d:1.7s" data-e="1"/><defs><marker id="gaA" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10z" fill="var(--beat)"/></marker></defs>
      <text x="${X(9)}" y="${Y(8) - 10}" text-anchor="end" font-size="11.5" style="fill:var(--beat)" font-weight="700">A100: rented to age 9</text>
      <line id="gaL" y1="${Y(100) - 6}" y2="${Y(0)}" stroke="var(--paper)" stroke-dasharray="3 4"/>
      <circle id="gaB" r="5" fill="var(--amber)"/><circle id="gaR" r="5" fill="var(--coral)"/>
    </svg>
    <div class="ga-out"><p><span>Books</span><b id="gaBv">100%</b></p><p><span>Burry</span><b id="gaRv" class="c">100%</b></p><p><span>Market</span><b id="gaMv" class="b">new</b></p></div>
    <label class="k-row"><span>Age</span><input type="range" id="gaR2" min="0" max="9" step=".1" value="0"><b id="gaAv"></b></label>
    </div>${cap("Straight-line book value versus market evidence. Resale from Silicon Data via Dow Jones (Dec 2025); A100 contract from CoreWeave (Aug 2026).")}`; },
  init: fr => {
    const X = a => 60 + a * 40, Y = v => 230 - v * 1.7;
    let a = 0, auto = true;
    const set = v => {
      a = v; const book = Math.max(0, 100 - a / 6 * 100), burry = Math.max(0, 100 - a / 2.5 * 100);
      fr.querySelector("#gaL").setAttribute("x1", X(a)); fr.querySelector("#gaL").setAttribute("x2", X(a));
      fr.querySelector("#gaB").setAttribute("cx", X(a)); fr.querySelector("#gaB").setAttribute("cy", Y(book));
      fr.querySelector("#gaR").setAttribute("cx", X(a)); fr.querySelector("#gaR").setAttribute("cy", Y(burry));
      fr.querySelector("#gaBv").textContent = Math.round(book) + "%"; fr.querySelector("#gaRv").textContent = Math.round(burry) + "%";
      fr.querySelector("#gaMv").textContent = a < .5 ? "new" : a < 2.2 ? "renting" : a < 3.4 ? "~45%" : a < 6 ? "still renting" : "rented to 9";
      fr.querySelector("#gaAv").textContent = a.toFixed(1) + " yr";
      fr.querySelectorAll(".ga-fl").forEach((g, i) => g.classList.toggle("on", i <= a));
    };
    const r = fr.querySelector("#gaR2");
    r.addEventListener("input", () => { auto = false; set(+r.value); });
    K.onEnter(fr, () => { auto = true; set(0); });
    K.raf(fr, dt => { if (!auto) return; const v = a + dt / 900; if (v > 9) { auto = false; return; } r.value = v; set(v); });
    set(0);
  } };





// ---------------------------------------------------------- slide 2
const MENU = [["Rubin", 2026], ["Blackwell", 2024], ["H200", 2024], ["H100", 2022], ["A100", 2020]];
A["gpulife-2a"] = { html: () => `<div class="k-col mn">
      <div class="mn-card"><p class="mn-t">Today’s compute menu</p>
        <div class="mn-rows" id="mnRows">${[["Frontier training", "MP"], ["Frontier serving", "MP"], ["Everyday inference, fine-tuning", "$2.82"], ["Batch jobs, research, second owners", "$1.29"]].map(([t, p], i) => `<div class="mn-r" data-i="${i}"><span class="mn-n">${t}</span><span class="mn-c" id="mnC${i}"></span><i></i><b id="mnP${i}">${p}</b></div>`).join("")}</div>
        <p class="mn-f">Per GPU-hour, Silicon Data indexes. MP = market price.</p></div>
      <div class="k-seg"><button type="button" class="k-b go" id="mnGo">Next generation lands</button><button type="button" class="k-b" id="mnRe">Today</button></div>
    </div>${cap("The newest chips sell at whatever the market bears. Older ones move down to cheaper work, and still get paid.")}`,
  init: fr => {
    let gen = 0;
    const CH = [["Rubin, Blackwell"], ["Blackwell, H200"], ["H100, age 3–4"], ["A100, age 6"]];
    const NEXT = [["Rubin Ultra, Rubin", "Rubin, Blackwell", "Blackwell, H200", "H100, A100"], ["Feynman, Rubin Ultra", "Rubin Ultra, Rubin", "Rubin, Blackwell", "H200, H100"]];
    const draw = (anim) => {
      const names = gen === 0 ? CH.map(c => c[0]) : NEXT[Math.min(gen, 2) - 1];
      names.forEach((n, i) => { const c = fr.querySelector("#mnC" + i); if (anim) { c.classList.remove("mn-sl"); void c.offsetWidth; c.classList.add("mn-sl"); } c.textContent = n; });
      fr.querySelector("#mnGo").disabled = gen >= 2;
      if (gen) { fr.querySelector("#mnP2").textContent = "lower"; fr.querySelector("#mnP3").textContent = "lower still"; } else { fr.querySelector("#mnP2").textContent = "$2.82"; fr.querySelector("#mnP3").textContent = "$1.29"; }
      fr.querySelector(".mn-t").textContent = gen ? `The menu, ${gen} generation${gen > 1 ? "s" : ""} later` : "Today’s compute menu";
    };
    fr.querySelector("#mnGo").addEventListener("click", () => { gen = Math.min(2, gen + 1); draw(true); });
    fr.querySelector("#mnRe").addEventListener("click", () => { gen = 0; draw(true); });
    K.onEnter(fr, () => { gen = 0; draw(); K.count(fr.querySelector("#mnP2"), 2.82, { from: 2, dur: 1800, fmt: v => "$" + v.toFixed(2) }); });
    draw();
  } };





// ---------------------------------------------------------- slide 3
A["gpulife-3a"] = { html: () => `<div class="k-col pb">
      <p class="k-k">One H100, six years</p>
      <label class="k-row"><span>Rent changes</span><input type="range" id="pbR" min="-60" max="10" step="1" value="-25"><b id="pbRv"></b></label>
      <svg viewBox="0 0 460 200" class="k-svg" id="pbS" aria-label="Cash earned each year by one H100 and the running total against its cost."></svg>
      <p class="pb-v" id="pbV"></p>
    </div>${cap("Illustrative: $35,000 all-in per H100, starting at today’s $2.82 index rate, 70% utilized, about 40 cents an hour for power and data-center space.")}`,
  init: fr => {
    const S = fr.querySelector("#pbS"), X = i => 50 + i * 66, Y = v => 170 - v / 50000 * 140;
    let g = -.25, shown = 0;
    const calc = () => { const out = []; let cum = 0; for (let y = 0; y < 6; y++) { const r = 2.82 * Math.pow(1 + g, y), net = Math.max(0, r - .4) * 8760 * .7; cum += net; out.push([net, cum]); } return out; };
    const draw = () => {
      const d = calc(), pay = d.findIndex(x => x[1] >= 35000), k = Math.floor(shown);
      S.innerHTML = `<line x1="40" x2="440" y1="${Y(35000)}" y2="${Y(35000)}" stroke="var(--coral)" stroke-dasharray="5 5"/><text x="44" y="${Y(35000) - 6}" font-size="11.5" style="fill:var(--coral)" font-weight="700">cost $35K</text>
        ${d.map(([n], i) => `<rect x="${X(i) - 15}" y="${Y(n)}" width="30" height="${Math.max(0, 170 - Y(n)) * (i < k ? 1 : i === k ? shown - k : 0)}" transform="translate(0 ${(170 - Y(n)) * (1 - (i < k ? 1 : i === k ? shown - k : 0))})" fill="${i === pay ? "var(--amber)" : "#2b5a78"}" rx="2"/><text x="${X(i)}" y="188" text-anchor="middle" font-size="11">yr ${i + 1}</text>`).join("")}
        <polyline points="${d.slice(0, k + 1).map(([, c], i) => `${X(i)},${Y(c).toFixed(1)}`).join(" ")}" fill="none" stroke="var(--beat)" stroke-width="2.5"/>
        ${d.slice(0, k + 1).map(([, c], i) => `<circle cx="${X(i)}" cy="${Y(c).toFixed(1)}" r="${i === pay ? 6 : 3.5}" fill="${i === pay ? "var(--amber)" : "var(--beat)"}"/>`).join("")}
        ${k >= 5 ? `<text x="${X(5)}" y="${Y(d[5][1]) - 10}" text-anchor="middle" font-size="12" font-weight="800" style="fill:var(--beat)">$${Math.round(d[5][1] / 1000)}K</text>` : ""}`;
      const v = fr.querySelector("#pbV");
      if (shown < 5.9) { v.innerHTML = "Counting…"; return; }
      v.innerHTML = pay >= 0 ? `<b>Pays back in year ${pay + 1}</b> and returns ${(d[5][1] / 35000).toFixed(1)}× its cost by year 6.` : `<b class="no">Never pays back.</b> It earns $${Math.round(d[5][1] / 1000)}K of its $35K cost.`;
    };
    K.slider(fr, "#pbR", v => { g = v / 100; fr.querySelector("#pbRv").textContent = (v > 0 ? "+" : "") + v + "% a year"; shown = Math.max(shown, 0); draw(); });
    K.onEnter(fr, () => { shown = 0; });
    K.raf(fr, dt => { if (shown < 6) { shown = Math.min(6, shown + dt / 450); draw(); } });
  } };




})();

// 9 · AI eats the seat, not the software.
(() => {
const A = window.AX, cap = t => `<p class="cap">${t}</p>`;
// schematic index path, Jan to mid-Oct 2026, late-January peak = 100
const PTS = [[0, 98], [.35, 100], [.55, 93], [1, 86], [1.6, 81], [2.2, 77], [2.6, 73.5], [3.1, 76], [4, 80], [5, 84], [6, 88], [7.2, 93], [8, 99], [8.6, 104], [9.2, 106]];
const EV = [[.55, "Feb 3", "Cowork plug-ins", "Thomson Reuters falls as much as 18%, its worst day on record. RELX has its biggest drop since 1988."], [2.6, "April low", "−26%+", "The S&P 500 software and services index is down more than 26% from late January."], [7.85, "Aug 26", "Claudeforce", "Salesforce and Anthropic: Claude works on Salesforce data, and its actions route back through Salesforce’s rules."], [9.2, "Oct 6", "Highest since Nov 2025", "The same index hits its highest level since November 2025."]];

// ---------------------------------------------------------- slide 1
A["saas-1a"] = { html: () => {
    const X = m => 40 + m * 42, Y = v => 230 - (v - 70) * 5;
    return `<div class="k-col sp1"><svg viewBox="0 0 460 280" class="k-svg" aria-label="Schematic of the S&P 500 software and services index in 2026: down more than 26% from late January to the April low, then back to its highest level since November 2025 by October 6.">
      <defs><linearGradient id="sp1G" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="var(--coral)" stop-opacity=".25"/><stop offset="1" stop-color="var(--coral)" stop-opacity="0"/></linearGradient></defs>
      ${"JFMAMJJASO".split("").map((m, i) => `<text x="${X(i + .5)}" y="262" text-anchor="middle" font-size="11.5">${m}</text>`).join("")}
      <line x1="${X(0)}" x2="${X(10)}" y1="${Y(100)}" y2="${Y(100)}" stroke="var(--rule)" stroke-dasharray="3 5"/><text x="${X(10)}" y="${Y(100) - 6}" text-anchor="end" font-size="11">late-January level</text>
      <path id="sp1A" fill="url(#sp1G)"/><path id="sp1L" fill="none" stroke-width="3" stroke-linejoin="round"/>
      <g id="sp1St" opacity="0" transform="translate(${X(2.6)} ${Y(73.5) - 120}) rotate(-8)"><rect x="-86" y="-20" width="172" height="40" rx="4" fill="none" stroke="var(--coral)" stroke-width="3"/><text y="9" text-anchor="middle" font-size="22" font-weight="900" style="fill:var(--coral);letter-spacing:.06em">SAASPOCALYPSE</text></g>
      ${EV.map(([m], i) => { const p = PTS.reduce((a, b) => Math.abs(b[0] - m) < Math.abs(a[0] - m) ? b : a); return `<g class="sp1-e" data-i="${i}" transform="translate(${X(p[0])} ${Y(p[1])})"><circle r="14" fill="transparent"/><circle r="6" class="sp1-d"/></g>`; }).join("")}
      <circle id="sp1M" r="7" fill="var(--paper)"/>
    </svg><div class="sp1-card" id="sp1C"></div></div>${cap("Graph: the S&P 500 software and services index in 2026, drawn as a schematic from Reuters figures.")}`; },
  init: fr => {
    const X = m => 40 + m * 42, Y = v => 230 - (v - 70) * 5;
    let t = 0, hold = -1;
    const at = m => { for (let i = 1; i < PTS.length; i++) if (PTS[i][0] >= m) { const [a, b] = [PTS[i - 1], PTS[i]], k = (m - a[0]) / (b[0] - a[0]); return K.lerp(a[1], b[1], k); } return PTS[PTS.length - 1][1]; };
    const card = i => { const [, d, h, s] = EV[i]; fr.querySelector("#sp1C").innerHTML = `<p class="k-k">${d} · ${h}</p><p>${s}</p>`; fr.querySelectorAll(".sp1-e").forEach((e, k) => e.classList.toggle("on", k === i)); };
    const draw = m => {
      const pts = []; for (let x = 0; x <= m; x += .05) pts.push([X(x), Y(at(x))]); pts.push([X(m), Y(at(m))]);
      const d = "M" + pts.map(p => p.map(v => v.toFixed(1)).join(" ")).join(" L");
      const L = fr.querySelector("#sp1L"); L.setAttribute("d", d); L.setAttribute("stroke", m > 2.6 ? "url(#sp1S)" : "var(--coral)");
      fr.querySelector("#sp1A").setAttribute("d", d + ` L${X(m).toFixed(1)} 240 L${X(0)} 240 Z`);
      fr.querySelector("#sp1M").setAttribute("cx", X(m).toFixed(1)); fr.querySelector("#sp1M").setAttribute("cy", Y(at(m)).toFixed(1));
      const st = fr.querySelector("#sp1St"); st.setAttribute("opacity", m >= 2.6 ? 1 : 0); st.classList.toggle("slam", m >= 2.6);
      EV.forEach(([em], i) => { const e = fr.querySelectorAll(".sp1-e")[i]; e.classList.toggle("seen", m >= em - .05); });
      let last = -1; EV.forEach(([em], i) => { if (m >= em - .05) last = i; }); if (hold < 0 && last >= 0) card(last); else if (hold < 0) fr.querySelector("#sp1C").innerHTML = `<p class="k-k">Late January</p><p>Software stocks at their peak, days before Anthropic’s Cowork plug-ins.</p>`;
    };
    fr.querySelector("svg").insertAdjacentHTML("afterbegin", `<defs><linearGradient id="sp1S" gradientUnits="userSpaceOnUse" x1="${X(2.6)}" x2="${X(5)}" y1="0" y2="0"><stop offset="0" stop-color="var(--coral)"/><stop offset="1" stop-color="var(--beat)"/></linearGradient></defs>`);
    fr.querySelectorAll(".sp1-e").forEach(e => e.addEventListener("click", () => { hold = +e.dataset.i; t = 99; draw(9.2); card(hold); }));
    K.onEnter(fr, () => { t = 0; hold = -1; });
    K.raf(fr, dt => { if (t > 9.2) return; t = Math.min(9.2, t + dt / 300); draw(t); });
  } };





// ---------------------------------------------------------- slide 2
const LAY = [["MODEL: the brain", "Anthropic, OpenAI, Google", "$ per token", "m"], ["AGENT: decides and acts", "calls tools instead of clicking", "", "a"], ["SCREEN: menus and forms", "built for people clicking", "✕ collapses", "s"], ["RULES: permissions, approvals, audit", "", "", "r"], ["SYSTEM OF RECORD", "customers, contracts, who can approve", "$ per outcome", "d"]];
A["saas-2a"] = { html: () => `<div class="k-col sk">
      <div class="sk-st">${LAY.map(([t, s, p, k], i) => `<div class="sk-l ${k}" style="--i:${i}"><div><b>${t}</b>${s ? `<span>${s}</span>` : ""}</div>${p ? `<em>${p}</em>` : ""}${k === "r" ? `<span class="sk-ck">${["permission", "approval", "audit"].map(c => `<i data-c="${c}">${c}</i>`).join("")}</span>` : ""}${k === "s" ? `<span class="sk-sh">${Array.from({ length: 8 }, (_, j) => `<i style="--j:${j}"></i>`).join("")}</span>` : ""}</div>`).join("")}<i class="sk-dot" id="skDot"></i></div>
      <div class="sk-f"><span>Outcomes billed: <b id="skN">0</b></span></div>
    </div>${cap("Nadella’s half: agents skip the screen. My half: they hit the record and its rules far more often than people ever did.")}`,
  init: fr => {
    const root = fr.querySelector(".sk"); let n = 0, tm = [];
    const run = () => { tm.forEach(clearTimeout); tm = []; root.className = "k-col sk"; void root.offsetWidth;
      ["s1", "s2", "s3", "s4", "s5", "s6", "s7"].forEach((c, i) => tm.push(setTimeout(() => { if (!K.active(fr)) return; root.classList.add(c); if (c === "s7") { n++; fr.querySelector("#skN").textContent = n; } }, 300 + i * 650))); };
    K.loop(fr, run, 6200);
    K.onEnter(fr, () => { n = 0; fr.querySelector("#skN").textContent = 0; run(); });
  } };





// ---------------------------------------------------------- slide 3
A["saas-3a"] = { html: () => `<div class="k-col so3">
      <p class="k-k">One support team, one month</p>
      <label class="k-row"><span>Agents resolve</span><input type="range" id="soR" min="0" max="90" step="5" value="40"><b id="soRv"></b></label>
      <div class="so3-g" id="soG">${Array.from({ length: 100 }, (_, i) => `<i style="--i:${i}"></i>`).join("")}</div>
      <div class="so3-key"><span class="s">a person’s seat</span><span class="o">work done by agents</span></div>
      ${[["Seats only", "a"], ["Seats + outcomes", "b"]].map(([n, k]) => `<div class="so3-b ${k}"><span>${n}</span><div><i id="soB${k}"></i></div><b id="soV${k}"></b></div>`).join("")}
    </div>${cap("Illustrative: 100 people, 1,000 conversations each. Intercom list prices: $85 a seat a month, from $0.99 per outcome.")}`,
  init: fr => {
    const cells = [...fr.querySelectorAll("#soG i")];
    K.slider(fr, "#soR", v => {
      const x = v / 100, seats = 100 * (1 - x) * 85, outc = seats + x * 100000 * .99;
      fr.querySelector("#soRv").textContent = v + "%";
      cells.forEach((c, i) => c.classList.toggle("ag", i >= 100 - v));
      fr.querySelector("#soVa").textContent = "$" + (seats / 1000).toFixed(1) + "K"; fr.querySelector("#soVb").textContent = "$" + (outc / 1000).toFixed(1) + "K";
      fr.querySelector("#soBa").style.width = (seats / 100000 * 100) + "%"; fr.querySelector("#soBb").style.width = (outc / 100000 * 100) + "%";
    });
    K.onEnter(fr, () => { const r = fr.querySelector("#soR"); let v = 0; r.value = 0; r.dispatchEvent(new Event("input")); const iv = setInterval(() => { if (!K.active(fr) || v >= 40) return clearInterval(iv); v += 5; r.value = v; r.dispatchEvent(new Event("input")); }, 140); });
  } };




})();

// 10 · The clouds are renting from the neoclouds.
(() => {
const A = window.AX, cap = t => `<p class="cap">${t}</p>`;
const rack = (x, y, w, h, n = 5) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="2" fill="#0b1626" stroke="var(--rule)"/>` + Array.from({ length: n }, (_, i) => `<rect x="${x + 3}" y="${y + 4 + i * (h - 6) / n}" width="${w - 6}" height="${(h - 6) / n - 2}" rx="1" fill="var(--amber)" class="ncl-led" style="animation-delay:${(-((x * 7 + i * 13) % 17) / 10).toFixed(1)}s"/>`).join("");

// ---------------------------------------------------------- slide 1






// ---------------------------------------------------------- slide 2
const PR = [["AWS, on demand", 6.88, "var(--coral)"], ["Nebius, Oct 2026", 4.5, "#f2b84b"], ["Nebius, May 2026", 2.95, "var(--beat)"], ["Neocloud average", 2.82, "var(--amber)"]];
A["neocloud-2a"] = { html: () => `<div class="k-col rc">
      <div class="rc-in"><label class="k-row"><span>H100s</span><input type="range" id="rcG" min="8" max="10000" step="8" value="1000"><b id="rcGv"></b></label><label class="k-row"><span>Days</span><input type="range" id="rcD" min="1" max="90" step="1" value="30"><b id="rcDv"></b></label></div>
      <div class="rc-bars">${PR.map(([n, p, c], i) => `<div class="rc-b" style="--c:${c}"><span>${n}<small>$${p.toFixed(2)}/hr</small></span><div><i id="rcB${i}"></i></div><b id="rcV${i}"></b></div>`).join("")}</div>
      <p class="rc-save" id="rcS"></p>
    </div>${cap("Per H100-hour. AWS and Nebius list prices; neocloud average from Silicon Data. Contracts get discounts.")}`,
  init: fr => {
    let g = 1000, d = 30;
    const fmt = v => v >= 1e6 ? "$" + (v / 1e6).toFixed(1) + "M" : "$" + Math.round(v / 1000) + "K";
    const draw = () => { const H = g * d * 24, mx = H * 6.88; PR.forEach(([, p], i) => { fr.querySelector("#rcB" + i).style.width = (H * p / mx * 100) + "%"; fr.querySelector("#rcV" + i).textContent = fmt(H * p); });
      fr.querySelector("#rcS").innerHTML = `Neocloud average saves <b>${fmt(H * (6.88 - 2.82))}</b> against AWS on demand, <b>${Math.round((1 - 2.82 / 6.88) * 100)}%</b> off.`; };
    K.slider(fr, "#rcG", v => { g = v; fr.querySelector("#rcGv").textContent = v.toLocaleString("en-US"); draw(); });
    K.slider(fr, "#rcD", v => { d = v; fr.querySelector("#rcDv").textContent = v; draw(); });
  } };





// ---------------------------------------------------------- slide 3
A["neocloud-3a"] = { html: () => {
    const R = 78, C = 2 * Math.PI * R, S = [["Microsoft", "$17.4–19.4B, 5 yrs", .45, "var(--amber)", "Microsoft pays whether or not it uses the GPUs: take-or-pay, five years, Vineland, New Jersey."], ["Meta", "$3B, then $12B firm (up to $27B)", .35, "var(--coral)", "Meta signed $3 billion, then $12 billion firm, up to $27 billion in total (March 2026)."], ["Everyone else", "the remaining ~20%", .2, "var(--beat)", "Labs, startups and enterprises: the remaining fifth."]];
    let off = 0;
    return `<div class="k-col dn"><div class="dn-w"><svg viewBox="0 0 220 220" class="k-svg dn-s" aria-label="Nebius has more than 40 billion dollars of contracted revenue; about 32 billion, roughly four fifths, comes from Microsoft and Meta.">
        <circle cx="110" cy="110" r="${R}" fill="none" stroke="var(--ink-2)" stroke-width="34"/>
        ${S.map(([n, , f, c], i) => { const seg = `<circle class="dn-seg" data-i="${i}" cx="110" cy="110" r="${R}" fill="none" stroke="${c}" stroke-width="34" stroke-dasharray="${(f * C - 3).toFixed(1)} ${C.toFixed(1)}" stroke-dashoffset="${(-off * C).toFixed(1)}" transform="rotate(-90 110 110)" style="--len:${(f * C).toFixed(1)};--d:${(.2 + i * .5).toFixed(1)}s"/>`; off += f; return seg; }).join("")}
        <text x="110" y="108" text-anchor="middle" class="dn-c"><tspan data-to="80" data-dur="1600">0</tspan>%</text><text x="110" y="128" text-anchor="middle" font-size="11">from two buyers</text>
        <g transform="translate(168 36) rotate(12)"><g class="dn-stamp"><rect x="-44" y="-12" width="88" height="22" rx="3" fill="var(--ink)" stroke="var(--coral)" stroke-width="2"/><text y="4" text-anchor="middle" font-size="10" font-weight="900" style="fill:var(--coral);letter-spacing:.06em">TAKE-OR-PAY</text></g></g>
      </svg>
      <div class="dn-l">${S.map(([n, t, , c, d], i) => `<button type="button" class="dn-k" data-i="${i}" data-d="${d}" style="--c:${c}"><b>${n}</b><span>${t}</span></button>`).join("")}</div></div>
      <p class="dn-say" id="dnSay">Nebius contracted revenue: $40B+. Tap a segment.</p>
      <div class="cr-gw"><span>Next: contracted power by end of 2026</span><div><i></i></div><b>5 GW</b></div>
    </div>${cap("Firm commitments only, approximate, from Motley Fool’s read of Nebius filings (Oct 2026).")}`; },
  init: fr => {
    const pick = i => { fr.querySelectorAll(".dn-seg").forEach(x => x.classList.toggle("sel", +x.dataset.i === i)); fr.querySelectorAll(".dn-k").forEach(x => x.classList.toggle("sel", +x.dataset.i === i)); fr.querySelector("#dnSay").textContent = fr.querySelectorAll(".dn-k")[i].dataset.d; };
    fr.querySelectorAll(".dn-seg,.dn-k").forEach(e => e.addEventListener("click", () => pick(+e.dataset.i)));
  } };




})();

// 11 · Back the builders. Survive the bust.
(() => {
const A = window.AX, cap = t => `<p class="cap">${t}</p>`;
const F = [["Feb ’25", .25], ["May ’25", 1.0], ["Aug ’25", 2.1], ["Nov ’25", 4.1], ["Feb ’26", 5.5], ["May ’26", 13.7], ["Aug ’26", 20.2]];
const LAYERS = [["Chips", "TSMC", "var(--beat)"], ["Memory", "Micron, SanDisk", "var(--violet)"], ["Datacenters", "CoreWeave, IREN, Nebius", "var(--amber)"], ["Power", "Bloom Energy", "#f2b84b"]];

// ---------------------------------------------------------- slide 1
A["builders-1a"] = { html: () => {
    const X = i => 50 + i * 58, Y = v => 230 - v / 21 * 200;
    return `<div class="k-col fl1"><svg viewBox="0 0 460 280" class="k-svg" aria-label="Situational Awareness LP's disclosed US positions by 13F filing date, rising from about $0.25 billion in February 2025 to $20.2 billion in August 2026.">
      ${[0, 5, 10, 15, 20].map(v => `<line x1="40" x2="440" y1="${Y(v)}" y2="${Y(v)}" stroke="var(--rule)" stroke-width=".6"/><text x="34" y="${Y(v) + 4}" text-anchor="end" font-size="11">$${v}B</text>`).join("")}
      ${F.map(([d, v], i) => `<g class="fl1-b" data-i="${i}"><rect x="${X(i) - 18}" y="${Y(v).toFixed(1)}" width="36" height="${(230 - Y(v)).toFixed(1)}" rx="3" fill="var(--amber)" opacity="${(.4 + i * .1).toFixed(2)}" class="k-grow-y" style="--d:${(.15 + i * .3).toFixed(2)}s"/><text x="${X(i)}" y="${(Y(v) - 8).toFixed(1)}" text-anchor="middle" font-size="12.5" class="t-strong k-fade" style="--d:${(.45 + i * .3).toFixed(2)}s">$${v >= 1 ? v.toFixed(1) : v.toFixed(2)}B</text><text x="${X(i)}" y="248" text-anchor="middle" font-size="11">${d}</text></g>`).join("")}
      <g class="k-fade" style="--d:1.9s"><rect x="60" y="82" width="150" height="22" rx="11" fill="var(--violet)"/><text x="135" y="97" text-anchor="middle" font-size="11" font-weight="800" style="fill:var(--ink)">May ’26: memory leads</text></g>
      <g class="k-fade" style="--d:2.3s"><rect x="60" y="110" width="150" height="22" rx="11" fill="var(--coral)"/><text x="135" y="125" text-anchor="middle" font-size="11" font-weight="800" style="fill:var(--ink)">Aug ’26: hedges gone</text></g>
      <text x="60" y="44" class="fl1-x"><tspan id="fl1X">1</tspan>×</text><text x="60" y="64" font-size="12">the first filing</text>
    </svg><p class="fl1-say" id="fl1S">Tap a bar.</p></div>${cap("US positions disclosed in each 13F filing, by filing date. Not total assets; shorts and non-US holdings aren’t shown.")}`; },
  init: fr => {
    const S = ["<b>First filing, February 2025:</b> about $255 million of US positions.", "<b>May 2025:</b> about $1.0 billion.", "<b>August 2025:</b> about $2.1 billion.", "<b>November 2025:</b> about $4.1 billion.", "<b>February 2026:</b> about $5.5 billion.", "<b>May 2026:</b> $13.7 billion, led by memory makers SanDisk and Micron.", "<b>August 2026:</b> about $20 billion. Builders like Bloom Energy, CoreWeave and IREN across its 2026 filings, and the large semiconductor hedges gone."];
    fr.querySelectorAll(".fl1-b").forEach(g => g.addEventListener("click", () => { fr.querySelectorAll(".fl1-b").forEach(x => x.classList.toggle("sel", x === g)); fr.querySelector("#fl1S").innerHTML = S[+g.dataset.i]; }));
    K.onEnter(fr, () => setTimeout(() => K.active(fr) && K.count(fr.querySelector("#fl1X"), 20.2 / .25, { dur: 2200 }), 300));
  } };





// ---------------------------------------------------------- slide 2






// ---------------------------------------------------------- slide 3





})();

// 12 · The bottleneck moved below the GPU.
(() => {
const A = window.AX, cap = t => `<p class="cap">${t}</p>`;
// a CSS-3D accelerator package: substrate, interposer, logic die and four 8-high HBM stacks
const HBM = [[48, 44], [48, 112], [190, 44], [190, 112]];
const pkg = (id, hl = "") => `<div class="p3" id="${id}" data-hl="${hl}"><div class="p3-rot">
    <div class="p3-l sub" data-k="sub"></div><div class="p3-l int" data-k="int"></div><div class="p3-l die" data-k="die"><i></i></div>
    ${HBM.map(([x, y]) => `<div class="p3-h" data-k="hbm" style="left:${x}px;top:${y}px">${Array.from({ length: 8 }, (_, i) => `<b style="--i:${i}"></b>`).join("")}</div>`).join("")}
  </div></div>`;
const LEG = [["hbm", "HBM stacks", "var(--amber)", "Eight memory dies stacked and wired through with TSVs. SK hynix ran an 80% operating margin on this in Q3 2026."], ["die", "Logic die", "var(--beat)", "The GPU itself. Everyone tracks it; it’s the brand."], ["int", "Interposer (CoWoS)", "var(--paper)", "The silicon slab that wires memory to the GPU. TSMC’s CoWoS capacity is the packaging bottleneck."], ["sub", "Substrate", "#2a4d70", "The organic base that connects the package to the board."]];
const wire3d = (fr, sel) => {
  const P = fr.querySelector(sel); if (!P) return;
  let rz = -38, rx = 58, trz = -38, trx = 58, drag = false;
  P.addEventListener("pointermove", e => { const r = P.getBoundingClientRect(); trz = -38 + ((e.clientX - r.left) / r.width - .5) * 50; trx = 58 + ((e.clientY - r.top) / r.height - .5) * -24; });
  P.addEventListener("pointerleave", () => { trz = -38; trx = 58; });
  K.raf(fr, (dt, now) => { const idle = Math.sin(now / 1800) * 6; rz += (trz + idle - rz) * Math.min(1, dt / 220); rx += (trx - rx) * Math.min(1, dt / 220); P.style.setProperty("--rz", rz.toFixed(2) + "deg"); P.style.setProperty("--rx", rx.toFixed(2) + "deg"); });
};
const legend = (sel) => `<div class="p3-leg">${LEG.map(([k, n, c]) => `<button type="button" data-k="${k}" style="--c:${c}"><i></i>${n}</button>`).join("")}</div>`;
const wireLeg = (fr, pk, say) => fr.querySelectorAll(".p3-leg button").forEach(b => b.addEventListener("click", () => { fr.querySelector(pk).dataset.hl = b.dataset.k; fr.querySelectorAll(".p3-leg button").forEach(x => x.classList.toggle("on", x === b)); const L = LEG.find(l => l[0] === b.dataset.k); fr.querySelector(say).innerHTML = `<b>${L[1]}:</b> ${L[3]}`; }));

// ---------------------------------------------------------- slide 1
A["memory-1a"] = { html: () => `<div class="k-col p3w">${pkg("p3a")}${legend()}<label class="k-row"><span>Explode</span><input type="range" id="p3E" min="0" max="1" step=".01" value="0"><b id="p3Ev"></b></label><p class="p3-say" id="p3S">Move your pointer to turn it.</p></div>${cap("An AI accelerator package, assembled and taken apart. Simplified, not to scale.")}`,
  init: fr => {
    wire3d(fr, "#p3a"); wireLeg(fr, "#p3a", "#p3S");
    K.slider(fr, "#p3E", v => { fr.querySelector("#p3a").style.setProperty("--e", v); fr.querySelector("#p3Ev").textContent = v < .05 ? "assembled" : v > .95 ? "exploded" : Math.round(v * 100) + "%"; });
    let auto = true; fr.querySelector("#p3E").addEventListener("pointerdown", () => auto = false);
    K.onEnter(fr, () => { auto = true; let t = 0; const r = fr.querySelector("#p3E"); const iv = setInterval(() => { if (!auto || !K.active(fr) || t > 1) return clearInterval(iv); t += .03; r.value = Math.sin(Math.min(1, t) * Math.PI / 2); r.dispatchEvent(new Event("input")); }, 30); });
  } };





// ---------------------------------------------------------- slide 2
A["memory-2a"] = { html: () => `<div class="k-col mg"><div class="mg-w">${pkg("p3b", "hbm")}
      <div class="mg-r"><svg viewBox="0 0 160 100" class="mg-dial" aria-label="A dial at 80 percent."><path d="M15 90 A65 65 0 0 1 145 90" fill="none" stroke="var(--ink-2)" stroke-width="14" stroke-linecap="round"/><path d="M15 90 A65 65 0 0 1 145 90" fill="none" stroke="var(--amber)" stroke-width="14" stroke-linecap="round" pathLength="100" class="mg-arc"/><text x="80" y="82" text-anchor="middle" class="mg-v"><tspan data-to="80" data-dur="1600">0</tspan>%</text></svg>
        <p class="mg-k">SK hynix operating margin, Q3 2026</p>
        <div class="mg-lta" aria-label="2027–28 production capacity: more than half under long-term agreements">${Array.from({ length: 10 }, (_, i) => `<i style="--i:${i}"${i < 5 ? ' class="on"' : ""}></i>`).join("")}</div><p class="mg-k">More than half of 2027–28 capacity under long-term agreements</p></div></div>
    </div>${cap("Memory: SK hynix ran an 80% operating margin in Q3 2026, and more than half of its 2027–28 capacity is under long-term agreements.")}`,
  init: fr => { wire3d(fr, "#p3b"); fr.querySelector("#p3b").style.setProperty("--e", .75); } };





// ---------------------------------------------------------- slide 3
A["memory-3a"] = { html: () => `<div class="k-col lo"><div class="mg-w">${pkg("p3c", "int")}
      <div class="lo-r"><p class="k-k">CoWoS shortfall</p><p class="lo-n"><b id="loV">20</b>%</p><div class="lo-bar"><i id="loB"></i></div><p class="lo-m" id="loM">Jan 2026</p><p class="mg-k">TrendForce: about 20% short, narrowing to about 10% by the end of 2026</p></div></div>
    </div>${cap("Packaging: TrendForce sees the CoWoS shortfall narrowing from ~20% to ~10% by end-2026.")}`,
  init: fr => {
    wire3d(fr, "#p3c"); fr.querySelector("#p3c").style.setProperty("--e", .5);
    const M = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]; let m = 0;
    K.onEnter(fr, () => { m = 0; });
    K.loop(fr, () => { const v = 20 - 10 * m / 11; fr.querySelector("#loV").textContent = Math.round(v); fr.querySelector("#loB").style.width = (v * 4) + "%"; fr.querySelector("#loM").textContent = M[m] + " 2026"; m = m >= 11 ? 0 : m + 1; }, 550);
  } };




})();

// 14 · The slowdown is the moat.
(() => {
const A = window.AX, cap = t => `<p class="cap">${t}</p>`;
const MAKERS = [["TSMC", "Taiwan’s foundry, making most of the world’s leading-edge chips."], ["Samsung", "Memory and a foundry."], ["SK hynix", "Memory, including the HBM beside every AI GPU."], ["Intel", "Its own chips and a foundry business."]];

// ---------------------------------------------------------- slide 1
A["moat-1a"] = { html: () => {
    const X = y => 50 + (y - 2010) / 14 * 380, Y = o => 230 - o / 10 * 200;
    return `<div class="k-col rc2"><svg viewBox="0 0 460 270" class="k-svg" aria-label="Growth since 2010 in OOMs: frontier AI training compute at 4 to 5 times a year reaches about 9 OOMs by 2024, while Moore's pace reaches about 2.">
      ${[0, 2, 4, 6, 8, 10].map(o => `<line x1="46" x2="440" y1="${Y(o)}" y2="${Y(o)}" stroke="var(--rule)" stroke-width=".6"/><text x="40" y="${Y(o) + 4}" text-anchor="end" font-size="11">${o}</text>`).join("")}
      ${[2010, 2015, 2020, 2024].map(y => `<text x="${X(y)}" y="250" text-anchor="middle" font-size="11">${y}</text>`).join("")}
      <text x="16" y="130" font-size="11" text-anchor="middle" transform="rotate(-90 16 130)">OOMs since 2010</text>
      <path id="rcGap" fill="var(--beat)" fill-opacity=".12" class="rc2-gap"/>
      <path id="rcB" fill="var(--beat)" fill-opacity=".25"/>
      <path id="rcAi" fill="none" stroke="var(--beat)" stroke-width="3"/><path id="rcMo" fill="none" stroke="var(--paper)" stroke-width="2.5" stroke-dasharray="6 5"/>
      <circle id="rcAd" r="6" fill="var(--beat)"/><circle id="rcMd" r="5" fill="var(--paper)"/>
    </svg>
    <div class="rc2-out"><p class="b"><span>Frontier AI compute</span><b id="rcAv">×1</b></p><p><span>Moore’s pace</span><b id="rcMv">×1</b></p><p class="y"><span>Year</span><b id="rcY">2010</b></p></div>
    <p class="rc2-say" id="rcSay"></p></div>${cap("Growth rates, not model-by-model data: Epoch AI’s 4–5× a year vs. a doubling every two years, 2010–2024.")}`; },
  init: fr => {
    const X = y => 50 + (y - 2010) / 14 * 380, Y = o => 230 - o / 10 * 200;
    let t = 0;
    const big = v => v >= 1e9 ? (v / 1e9).toFixed(1) + " billion" : v >= 1e6 ? Math.round(v / 1e6) + " million" : v >= 1e3 ? Math.round(v / 1e3) + " thousand" : Math.round(v);
    fr.querySelector("#rcGap").addEventListener("click", () => fr.querySelector("#rcSay").innerHTML = "<b>The gap:</b> more chips, bigger clusters and 3D stacking paid for the difference.");
    K.onEnter(fr, () => { t = 0; fr.querySelector("#rcSay").innerHTML = ""; });
    K.raf(fr, dt => {
      if (t > 14) return; t = Math.min(14, t + dt / 170);
      const ys = []; for (let y = 0; y <= t; y += .1) ys.push(y); ys.push(t);
      const lo = y => y * Math.log10(4), hi = y => y * Math.log10(5), mid = y => (lo(y) + hi(y)) / 2, mo = y => y / 2 * Math.log10(2);
      fr.querySelector("#rcAi").setAttribute("d", "M" + ys.map(y => `${X(2010 + y).toFixed(1)} ${Y(mid(y)).toFixed(1)}`).join(" L"));
      fr.querySelector("#rcB").setAttribute("d", "M" + ys.map(y => `${X(2010 + y).toFixed(1)} ${Y(hi(y)).toFixed(1)}`).join(" L") + " L" + ys.slice().reverse().map(y => `${X(2010 + y).toFixed(1)} ${Y(lo(y)).toFixed(1)}`).join(" L") + "Z");
      fr.querySelector("#rcMo").setAttribute("d", "M" + ys.map(y => `${X(2010 + y).toFixed(1)} ${Y(mo(y)).toFixed(1)}`).join(" L"));
      fr.querySelector("#rcGap").setAttribute("d", "M" + ys.map(y => `${X(2010 + y).toFixed(1)} ${Y(lo(y)).toFixed(1)}`).join(" L") + " L" + ys.slice().reverse().map(y => `${X(2010 + y).toFixed(1)} ${Y(mo(y)).toFixed(1)}`).join(" L") + "Z");
      const a = fr.querySelector("#rcAd"), m = fr.querySelector("#rcMd"); a.setAttribute("cx", X(2010 + t)); a.setAttribute("cy", Y(mid(t))); m.setAttribute("cx", X(2010 + t)); m.setAttribute("cy", Y(mo(t)));
      fr.querySelector("#rcAv").textContent = "×" + big(Math.pow(10, mid(t))); fr.querySelector("#rcMv").textContent = "×" + big(Math.pow(10, mo(t))); fr.querySelector("#rcY").textContent = Math.floor(2010 + t);
      if (t >= 14) fr.querySelector("#rcSay").innerHTML = "About <b>9 OOMs</b> for AI compute against about <b>2</b> for Moore. Tap the gap.";
    });
  } };





// ---------------------------------------------------------- slide 2


A["moat-2b"] = { html: () => `<div class="k-col ev"><svg viewBox="0 0 460 260" class="k-svg" aria-label="EUV light source: a laser hits falling tin droplets, making plasma that emits 13.5 nanometer light, which mirrors reflect onto a mask and a wafer.">
      <rect x="20" y="20" width="160" height="160" rx="12" fill="#0b1626" stroke="var(--rule)"/><text x="100" y="40" text-anchor="middle" font-size="11" style="fill:var(--faint)" font-weight="800">VACUUM CHAMBER</text>
      <g id="evD"></g><g id="evL"></g><circle id="evF" cx="100" cy="110" r="0" fill="#c9a0ff"/>
      <path d="M100 110 L250 70 L330 150 L410 100" fill="none" stroke="#b48cff" stroke-width="3" stroke-opacity=".7" class="ev-beam"/>
      <rect x="236" y="58" width="30" height="8" rx="2" fill="#c9d8e6" transform="rotate(30 251 62)"/><rect x="316" y="152" width="30" height="8" rx="2" fill="#c9d8e6" transform="rotate(-30 331 156)"/>
      <rect x="380" y="86" width="60" height="8" fill="#e6eef7"/><text x="410" y="80" text-anchor="middle" font-size="11">mask</text>
      <ellipse cx="410" cy="200" rx="40" ry="10" fill="#1b3550" stroke="#5b8ff0"/><path d="M410 100 V196" stroke="#b48cff" stroke-width="2" stroke-dasharray="3 3"/><text x="410" y="226" text-anchor="middle" font-size="11">wafer</text>
      <text x="100" y="206" text-anchor="middle" font-size="12" class="t-strong"><tspan id="evN">0</tspan> droplets hit</text>
      <text x="290" y="240" text-anchor="middle" font-size="12.5" style="fill:#c9a0ff" font-weight="800">13.5 nm light</text>
    </svg><div class="k-seg"><button type="button" class="k-b" id="evS">Slow motion</button></div></div>${cap("Schematic. ASML’s EUV source hits tin droplets with a laser about 50,000 times a second to make 13.5 nm light.")}`,
  init: fr => {
    let slow = false, t = 0, n = 0, drops = [], flash = 0, acc = 0;
    fr.querySelector("#evS").addEventListener("click", e => { slow = !slow; e.target.classList.toggle("on", slow); e.target.textContent = slow ? "Real speed (sort of)" : "Slow motion"; });
    K.raf(fr, dt => {
      const sp = slow ? .15 : 1; t += dt * sp; acc += dt * sp;
      if (acc > 140) { acc = 0; drops.push({ y: 50 }); }
      drops.forEach(d => d.y += dt * sp * .12);
      drops = drops.filter(d => { if (d.y >= 110 && !d.hit) { d.hit = true; flash = 1; n += slow ? 1 : 357; return false; } return d.y < 180; });
      flash = Math.max(0, flash - dt * sp / 160);
      fr.querySelector("#evD").innerHTML = drops.map(d => `<circle cx="100" cy="${d.y.toFixed(1)}" r="3.2" fill="#c9d8e6"/>`).join("");
      fr.querySelector("#evL").innerHTML = flash > .6 ? `<path d="M20 110 H96" stroke="var(--coral)" stroke-width="3"/>` : "";
      const F = fr.querySelector("#evF"); F.setAttribute("r", (flash * 16).toFixed(1)); F.setAttribute("opacity", flash.toFixed(2));
      fr.querySelector("#evN").textContent = n.toLocaleString("en-US");
    });
  } };



// ---------------------------------------------------------- slide 3
const CH = [["Hybrid bonding", "fuses stacked layers, copper to copper", "var(--violet)"], ["Advanced packaging", "joins chips in one package", "var(--beat)"], ["Inspection", "finds flaws buried between layers", "var(--coral)"]];
A["moat-3a"] = { html: () => {
    const dia = (y, w = 110, h = 45, cx = 200) => `M${cx - w} ${y} L${cx} ${y - h} L${cx + w} ${y} L${cx} ${y + h} Z`;
    const L = [["#c9d8e6", .75], ["var(--beat)", .7], ["var(--amber)", .65], ["var(--coral)", .75]];
    return `<div class="k-col sk3"><svg viewBox="0 0 460 300" class="k-svg" id="sk3" aria-label="A stack of chip layers with three possible new chokepoints: hybrid bonding, advanced packaging and inspection.">
      <text x="230" y="22" text-anchor="middle" font-size="14" class="t-strong">Where the next chokepoints could form</text>
      ${L.map(([c, o], i) => `<g class="sk3-l" style="--i:${i}"><path d="${dia(110 + i * 34)}" fill="${c}" fill-opacity="${o}" stroke="#e6eef7" stroke-opacity=".5"/></g>`).join("")}
      <path d="${dia(120, 110, 45)}" fill="#fff" class="sk3-flash"/>
      <g class="sk3-chip l"><path d="${dia(178, 30, 12, 62)}" fill="var(--beat)" stroke="#9cc0ff"/></g><g class="sk3-chip r"><path d="${dia(178, 30, 12, 338)}" fill="var(--beat)" stroke="#9cc0ff"/></g>
      <g class="sk3-scan"><path d="${dia(100, 118, 48)}" fill="#b48cff" fill-opacity=".18" stroke="#b48cff" stroke-width="2"/></g>
      <g class="sk3-flaw" transform="translate(236 178)"><circle r="9" fill="none" stroke="#fff" stroke-width="2.5"/><path d="M-4 -4 L4 4 M4 -4 L-4 4" stroke="#fff" stroke-width="2.4"/></g>
      ${[["Hybrid bonding", "fuses stacked layers", 92, 0], ["Advanced packaging", "joins chips in one package", 158, 1], ["Inspection", "finds buried flaws", 226, 2]].map(([n, s, y, i]) => `<g class="sk3-k" data-i="${i}"><path d="M${[300, 304, 286][i]} ${[100, 162, 222][i]} L370 ${y}" stroke="var(--faint)" stroke-width="1"/><text x="374" y="${y - 2}" font-size="13" class="t-strong">${n}</text><text x="374" y="${y + 13}" font-size="10.5">${s}</text></g>`).join("")}
    </svg></div>${cap("My read of where one-or-two-company steps could form as chips go 3D.")}`; },
  init: fr => {
    const S = fr.querySelector("#sk3"); let tm = [];
    const play = only => { tm.forEach(clearTimeout); tm = []; S.setAttribute("class", "k-svg"); void S.getBoundingClientRect(); const seq = only == null ? [0, 1, 2] : [only];
      if (only != null) [0, 1, 2].filter(i => i < only).forEach(i => S.classList.add("p" + i, "held"));
      seq.forEach((i, k) => tm.push(setTimeout(() => { if (!K.active(fr)) return; S.classList.add("p" + i); fr.querySelectorAll(".sk3-k").forEach((g, j) => g.classList.toggle("on", j === i)); }, 300 + k * 1500))); };
    fr.querySelectorAll(".sk3-k").forEach(g => g.addEventListener("click", () => play(+g.dataset.i)));
    K.onEnter(fr, () => play());
  } };




})();

// 15 · Going 3D saved Moore’s law. Heat is the bill.
(() => {
const A = window.AX, cap = t => `<p class="cap">${t}</p>`;
const sink = (x, y, w, n = 14) => `<rect x="${x}" y="${y + 40}" width="${w}" height="10" fill="#5b7a99"/>` + Array.from({ length: n }, (_, i) => `<rect x="${x + 6 + i * (w - 12) / n}" y="${y}" width="${(w - 12) / n - 5}" height="40" fill="#3d5873"/>`).join("");
const heatCol = t => { const S = [[43, 90, 120], [242, 184, 75], [255, 96, 80]], k = Math.max(0, Math.min(1, t)) * 2, i = Math.min(1, Math.floor(k)), f = k - i; return `rgb(${S[i].map((c, j) => Math.round(c + (S[i + 1][j] - c) * f)).join(",")})`; };

// an isometric stack of four dies under a heat sink, hottest at the bottom
const ISO = (() => { const cx = 108, cy = 142, C = .866, S = .5, t = 10, gap = 12, step = t + gap, top = 4 * step;
  return { P: (x, y, z) => [cx + (x - y) * C, cy + (x + y) * S - z], t, gap, step, top, w: 100, d: 60 }; })();
const stack3d = () => {
  const { P, t, gap, step, top, w, d } = ISO, pt = (x, y, z) => P(x, y, z).map(v => v.toFixed(1)).join(",");
  const L = [["#ff5a3c", "#b8321c", "#8f2614", "logic die"], ["#ff8c6b", "#c25b3f", "#9a452f", "logic die"], ["#f2b84b", "#b8862c", "#8e661f", "logic die"], ["#5b8ff0", "#3d64b0", "#2c4a85", "memory"]];
  let h = `<defs><radialGradient id="trHg"><stop offset="0" stop-color="#ffd2a8" stop-opacity=".95"/><stop offset=".5" stop-color="#ff5a3c" stop-opacity=".55"/><stop offset="1" stop-color="#ff5a3c" stop-opacity="0"/></radialGradient><filter id="trGl" x="-1" y="-1" width="3" height="3"><feGaussianBlur stdDeviation="1.4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <linearGradient id="trT" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#ff5a3c"/><stop offset=".5" stop-color="#f2b84b"/><stop offset="1" stop-color="#5b8ff0"/></linearGradient></defs>`;
  L.forEach(([top_, side, dark, lab], i) => { const z = i * step;
    h += `<polygon points="${pt(0, d, z)} ${pt(w, d, z)} ${pt(w, d, z + t)} ${pt(0, d, z + t)}" fill="${side}"/>`;
    h += `<polygon points="${pt(w, 0, z)} ${pt(w, d, z)} ${pt(w, d, z + t)} ${pt(w, 0, z + t)}" fill="${dark}"/>`;
    h += `<polygon points="${pt(0, 0, z + t)} ${pt(w, 0, z + t)} ${pt(w, d, z + t)} ${pt(0, d, z + t)}" fill="${top_}" fill-opacity="${i ? .62 : .95}" stroke="#07101d" stroke-width=".8"/>`;
    for (let k = 1; k < 8; k++) { const [x1, y1] = P(k * w / 8, d, z), [, y2] = P(k * w / 8, d, z + t); h += `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x1.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="#07101d" stroke-opacity=".45" stroke-width="1"/>`; }
    if (i < 3) for (let k = 0; k < 9; k++) { const [bx, by] = P(6 + k * (w - 12) / 8, d, z + t + gap / 2); h += `<circle cx="${bx.toFixed(1)}" cy="${by.toFixed(1)}" r="1.5" fill="#d4e3f0" opacity=".7"/>`; }
    const [lx, ly] = P(w, 0, z + t / 2); h += `<text x="${(lx + 6).toFixed(1)}" y="${(ly + 4).toFixed(1)}" font-size="9.5" style="fill:${top_}">${lab}</text>`;
    if (i === 0) { const [hx, hy] = P(w * .45, d * .5, z + t); h += `<ellipse id="trHot" cx="${hx.toFixed(1)}" cy="${hy.toFixed(1)}" rx="40" ry="22" fill="url(#trHg)"/>`; } });
  const zs = top + 2;
  h += `<polygon points="${pt(0, 0, zs + 6)} ${pt(w, 0, zs + 6)} ${pt(w, d, zs + 6)} ${pt(0, d, zs + 6)}" fill="#7f9bb8"/><polygon points="${pt(0, d, zs)} ${pt(w, d, zs)} ${pt(w, d, zs + 6)} ${pt(0, d, zs + 6)}" fill="#5b7a99"/><polygon points="${pt(w, 0, zs)} ${pt(w, d, zs)} ${pt(w, d, zs + 6)} ${pt(w, 0, zs + 6)}" fill="#4a6580"/>`;
  for (let k = 0; k < 8; k++) { const x = 4 + k * (w - 8) / 7; h += `<polygon points="${pt(x, d, zs + 6)} ${pt(x, 0, zs + 6)} ${pt(x, 0, zs + 24)} ${pt(x, d, zs + 24)}" fill="#3d5873" stroke="#7f9bb8" stroke-width=".6"/>`; }
  h += `<text x="${(P(w, 0, zs + 22)[0] + 6).toFixed(1)}" y="${(P(w, 0, zs + 22)[1]).toFixed(1)}" font-size="9.5" style="fill:#9cb8d4">heat sink</text>`;
  h += `<rect x="14" y="40" width="6" height="150" rx="3" fill="url(#trT)"/><text x="24" y="46" font-size="9" style="fill:#5b8ff0">cool</text><text x="24" y="190" font-size="9" style="fill:#ff5a3c">hot</text>`;
  return h; };

// ---------------------------------------------------------- slide 1
A["heat-1a"] = { html: () => `<div class="k-col fh"><svg viewBox="0 0 460 260" class="k-svg" aria-label="A flat chip under a heat sink: heat from its single layer of transistors has a short path straight up.">
      ${sink(90, 30, 280)}
      <rect x="110" y="84" width="240" height="10" rx="2" fill="#c9d8e6" fill-opacity=".8"/>
      <rect x="100" y="94" width="260" height="16" rx="2" fill="#1d3a58" stroke="#2a4d70"/>
      ${Array.from({ length: 12 }, (_, i) => `<circle class="fh-s" data-i="${i}" cx="${118 + i * 20}" cy="102" r="5" style="--d:${(-((i * 7) % 11) / 4).toFixed(2)}s"/>`).join("")}
      <g id="fhP"></g>
      ${Array.from({ length: 12 }, (_, i) => `<circle cx="${118 + i * 20}" cy="122" r="3.4" fill="#5b7a99"/>`).join("")}
      <text x="230" y="160" text-anchor="middle" class="t-strong" font-size="15">One flat layer of transistors</text>
      <text x="230" y="178" text-anchor="middle" font-size="12">Every hot spot sits right under the heat sink.</text>
      <g transform="translate(410 40)"><rect x="-8" y="0" width="16" height="110" rx="8" fill="var(--ink-2)" stroke="var(--rule)"/><rect x="-4" y="70" width="8" height="36" rx="4" fill="var(--amber)" class="fh-th"/><circle cy="114" r="12" fill="var(--amber)"/><text y="140" text-anchor="middle" font-size="11">cool</text></g>
      <text x="230" y="230" text-anchor="middle" font-size="12.5" style="fill:var(--faint)" font-style="italic">“a surface available for cooling close to each center of heat generation”</text><text x="230" y="248" text-anchor="middle" font-size="11">Gordon Moore, 1965</text>
    </svg></div>${cap("Moore, 1965: flat chips keep a cooling surface close to every source of heat.")}`,
  init: fr => {
    let ps = [], acc = 0;
    fr.querySelectorAll(".fh-s").forEach(c => c.addEventListener("click", () => { for (let k = 0; k < 6; k++) ps.push({ x: +c.getAttribute("cx") + (Math.random() - .5) * 8, y: 96, v: .08 + Math.random() * .04 }); }));
    K.raf(fr, dt => { acc += dt; if (acc > 70) { acc = 0; ps.push({ x: 118 + Math.floor(Math.random() * 12) * 20 + (Math.random() - .5) * 6, y: 96, v: .06 + Math.random() * .04 }); }
      ps.forEach(p => p.y -= dt * p.v); ps = ps.filter(p => p.y > 20);
      fr.querySelector("#fhP").innerHTML = ps.map(p => `<circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="2.6" fill="var(--coral)" opacity="${Math.max(0, Math.min(1, (p.y - 20) / 50)).toFixed(2)}"/>`).join(""); });
  } };





// ---------------------------------------------------------- slide 2
A["heat-2a"] = { html: () => `<div class="k-col tr2"><svg viewBox="0 0 460 280" class="k-svg" aria-label="A stacked chip whose bottom layer's heat must cross every layer above it, next to rack power rising from about 120 kW to about 600 kW.">
      ${stack3d()}
      <g id="trP"></g>
      <text x="120" y="232" text-anchor="middle" class="t-strong" font-size="14">Stacked chip</text><text x="120" y="250" text-anchor="middle" font-size="11.5">The bottom layer’s heat</text><text x="120" y="265" text-anchor="middle" font-size="11.5">crosses every layer above it.</text>
      <text x="350" y="24" text-anchor="middle" class="t-strong" font-size="14">Power per rack</text>
      <g class="tr2-b" data-i="0"><rect x="270" y="190" width="56" height="30" rx="3" fill="var(--amber)" class="k-grow-y" style="--d:.3s"/><text x="298" y="180" text-anchor="middle" font-size="13" font-weight="800">~<tspan data-to="120" data-dur="1200">0</tspan> kW</text><text x="298" y="238" text-anchor="middle" font-size="10.5">GB200 NVL72</text></g>
      <g class="tr2-b" data-i="1"><clipPath id="trC"><rect x="360" y="70" width="56" height="150" rx="3"/></clipPath><rect x="360" y="70" width="56" height="150" rx="3" fill="#2a1a24" stroke="var(--coral)" class="k-grow-y" style="--d:.6s"/><g clip-path="url(#trC)"><path id="trW" fill="var(--coral)" fill-opacity=".85"/></g><text x="388" y="60" text-anchor="middle" font-size="13" font-weight="800">~<tspan data-to="600" data-dur="1800">0</tspan> kW</text><text x="388" y="238" text-anchor="middle" font-size="10.5">Kyber design</text><text x="388" y="252" text-anchor="middle" font-size="10.5" style="fill:var(--coral)">liquid only</text></g>
    </svg><p class="tr2-say" id="trSay">Tap a bar.</p></div>${cap("Left: why stacking traps heat. Right: Nvidia rack power, per DCD (March 2025).")}`,
  init: fr => {
    let ps = [], acc = 0, lv = 0;
    const S = ["<b>GB200 NVL72:</b> 72 GPUs in one rack, about 120 kW.", "<b>Kyber:</b> Nvidia’s next rack design targets about 600 kW, cooled entirely by liquid, no fans."];
    fr.querySelectorAll(".tr2-b").forEach(g => g.addEventListener("click", () => fr.querySelector("#trSay").innerHTML = S[+g.dataset.i]));
    K.onEnter(fr, () => { lv = 0; });
    K.raf(fr, (dt, now) => {
      acc += dt; if (acc > 90) { acc = 0; ps.push({ x: 25 + Math.random() * 50, y: 15 + Math.random() * 30, z: 6, v: 0 }); }
      ps.forEach(p => { const zz = p.z % ISO.step, slow = zz > ISO.t ? .35 : 1; p.z += dt * .022 * slow * (1 - p.z / 140); });
      ps = ps.filter(p => p.z < ISO.top + 18);
      fr.querySelector("#trP").innerHTML = ps.map(p => { const [x, y] = ISO.P(p.x, p.y, p.z), k = Math.min(1, p.z / ISO.top); return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${(3.2 - k * 1.4).toFixed(1)}" fill="${k < .35 ? "#ffd2a8" : k < .7 ? "#ffe9c9" : "#ffffff"}" opacity="${(p.z > ISO.top ? Math.max(0, 1 - (p.z - ISO.top) / 18) : .95).toFixed(2)}" filter="url(#trGl)"/>`; }).join("");
      const g = fr.querySelector("#trHot"); g && g.setAttribute("opacity", (.55 + .35 * Math.sin(now / 380)).toFixed(2));
      lv = Math.min(1, lv + dt / 2400); const top = 220 - 150 * lv; const pts = []; for (let x = 360; x <= 416; x += 4) pts.push(`${x} ${(top + Math.sin(x / 6 + now / 260) * 3).toFixed(1)}`);
      fr.querySelector("#trW").setAttribute("d", `M${pts.join(" L")} L416 222 L360 222 Z`);
    });
  } };





// ---------------------------------------------------------- slide 3
A["heat-3a"] = { html: () => {
    const VEIN = ["M100 140 H360", "M150 140 C170 120 182 96 196 62", "M150 140 C170 160 182 184 196 218", "M215 140 C236 116 250 92 262 58", "M215 140 C236 164 250 188 262 222", "M280 140 C298 120 310 100 322 70", "M280 140 C298 160 310 180 322 210", "M182 104 C200 96 214 92 230 92", "M182 176 C200 184 214 188 230 188", "M250 100 C266 96 280 96 292 98", "M250 180 C266 184 280 184 292 182"];
    return `<div class="k-col vn"><svg viewBox="0 0 460 290" class="k-svg" id="vnS" aria-label="Top view of a chip with branching coolant channels, shaped like leaf veins, etched into the back of the silicon and flowing past hot spots.">
      <rect x="100" y="40" width="260" height="200" rx="6" fill="var(--ink-2)" stroke="var(--violet)" stroke-width="1.5"/>
      ${[[200, 100, 30], [276, 186, 34], [160, 196, 22]].map(([x, y, r], i) => `<circle class="vn-h" cx="${x}" cy="${y}" r="${r}" style="--i:${i}"/>`).join("")}
      <path d="${VEIN.join(" ")}" fill="none" stroke="var(--beat)" stroke-width="6" stroke-linecap="round" opacity=".18" class="vn-c"/>
      <path d="${VEIN.join(" ")}" fill="none" stroke="var(--beat)" stroke-width="2.2" stroke-linecap="round" class="vn-c vn-flow"/>
      ${VEIN.map((d, i) => [0, 1].map(k => `<circle r="2.6" fill="#9fe7ff" class="k-flow vn-f" style="offset-path:path('${d}');--t:${(1.5 + (i % 4) * .2).toFixed(2)}s;--d:${(k * .7 + i * .13).toFixed(2)}s"/>`).join("")).join("")}
      <path d="M40 140 H92 M84 133 L92 140 L84 147" fill="none" stroke="var(--beat)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M368 140 H420 M412 133 L420 140 L412 147" fill="none" stroke="var(--beat)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
      <text x="40" y="126" font-size="14">coolant in</text>
      <text x="420" y="126" text-anchor="end" font-size="14">out</text>
      <text x="230" y="272" text-anchor="middle" class="t-strong" font-size="16" id="vnT">Up to 3× better heat removal than cold plates</text>
    </svg><div class="k-seg"><button type="button" class="k-b" data-v="in">Channels in the silicon</button><button type="button" class="k-b" data-v="cp">Cold plate</button></div></div>${cap("Microsoft, 2025: channels etched into the back of the silicon, shaped like leaf veins.")}`;
  },
  init: fr => { const S = fr.querySelector("#vnS"); K.tabs(fr, ".vn .k-b", v => { S.classList.toggle("cp", v === "cp"); fr.querySelector("#vnT").textContent = v === "cp" ? "Cold plate: the heat has further to travel" : "Up to 3× better heat removal than cold plates"; }, "in"); } };




})();

// 18 · Quantum’s first big job is breaking keys, not training models.
(() => {
const A = window.AX, cap = t => `<p class="cap">${t}</p>`;
const X = n => 60 + Math.log10(n) * 55, f1 = v => (+v).toFixed(1);
const sig1 = v => { const p = Math.pow(10, Math.floor(Math.log10(v))); return Math.round(v / p) * p; };

// ---------------------------------------------------------- slide 1
A["quantum-1a"] = { html: () => {
    const sw = Array.from({ length: 16 }, (_, i) => { const a = i / 16 * Math.PI * 2, r = 11 + (i % 2) * 5; return `<circle class="qu-q" style="animation-delay:${(i * .13).toFixed(2)}s" cx="${f1(Math.cos(a) * r)}" cy="${f1(Math.sin(a) * r * .7)}" r="1.7"/>`; }).join("");
    const ticks = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7].map((n, i) => `<line class="ax" x1="${f1(X(n))}" y1="262" x2="${f1(X(n))}" y2="268"/><text x="${f1(X(n))}" y="282" text-anchor="middle" font-size="12">${["1", "10", "100", "1K", "10K", "100K", "1M", "10M"][i]}</text>`).join("");
    return `<div class="k-col qr"><svg viewBox="0 0 460 290" class="k-svg" aria-label="Qubits on a log scale. Physical qubits: Google's Willow has 105; Caltech held 6,100 atom qubits; Google's March 2026 estimate to break a 256-bit elliptic-curve key is under 500,000, about 20 times fewer than earlier estimates in the millions. Logical qubits: Helios 48, QuEra 96, IBM's 2029 goal 200, and about 1,200 to break a key.">
      <text x="20" y="22" class="t-strong" font-size="16">Qubits needed to break a Bitcoin key</text>
      <text x="20" y="40" font-size="12">Log scale: each step is 10×</text>
      <text x="20" y="66" font-size="13" class="t-strong qu-row">Physical qubits</text>
      <line class="ax" x1="${X(1)}" y1="92" x2="${f1(X(1e7))}" y2="92" stroke-dasharray="2 4"/>
      <rect id="qrGap" class="qu-gap" y="86" height="12" rx="3"/>
      <text id="qrG1" y="80" text-anchor="middle" font-size="11" font-weight="800" class="qu-gapt"></text><text id="qrG2" y="80" text-anchor="middle" font-size="11" font-weight="800" class="qu-gapt"></text>
      <g transform="translate(${f1(X(105))} 92)"><g class="k-spin" style="--t:14s">${sw}</g><circle r="7" class="qu-now"/></g>
      <text x="${f1(X(105))}" y="120" text-anchor="middle" font-size="12" class="t-strong">Google Willow: 105</text><text x="${f1(X(105))}" y="134" text-anchor="middle" font-size="11">computes, error-corrected</text>
      <circle cx="${f1(X(6100))}" cy="92" r="7" fill="var(--ink)" stroke="var(--violet)" stroke-width="2" stroke-dasharray="3 2"/>
      <path d="M${f1(X(6100))} 101 V146" stroke="var(--violet)" stroke-opacity=".6" stroke-dasharray="2 3"/>
      <text x="${f1(X(6100))}" y="159" text-anchor="middle" font-size="12" class="t-strong" style="fill:var(--violet)">Caltech: 6,100</text><text x="${f1(X(6100))}" y="173" text-anchor="middle" font-size="11">held, not yet computing</text>
      <circle cx="${f1(X(1e7))}" cy="92" r="6" fill="none" stroke="var(--faint)" stroke-dasharray="2 2"/><text x="${f1(X(1e7))}" y="66" text-anchor="end" font-size="11">earlier estimates: millions</text>
      <path id="qrTrail" d="" stroke="var(--coral)" stroke-width="2" stroke-dasharray="1 4" stroke-linecap="round" fill="none"/>
      <text id="qrFew" x="${f1((X(5e5) + X(1e7)) / 2 + 4)}" y="80" text-anchor="middle" font-size="11" font-weight="800" style="fill:var(--coral)">20× fewer</text>
      <g id="qrNeed"><circle r="12" fill="none" stroke="var(--coral)" stroke-opacity=".4" class="k-pulse"/><circle r="8" class="qu-tgt"/><text y="28" text-anchor="middle" font-size="12" class="t-strong" style="fill:var(--coral)" id="qrNl">Needed: &lt;500K</text><text y="42" text-anchor="middle" font-size="11" id="qrNs">Google, Mar 2026</text></g>
      <text x="20" y="194" font-size="13" class="t-strong qu-row">Error-corrected (logical) qubits</text>
      <line class="ax" x1="${X(1)}" y1="214" x2="${f1(X(1e7))}" y2="214" stroke-dasharray="2 4"/>
      <rect class="qu-gap k-grow-x" style="--d:1.3s" x="${f1(X(96) + 8)}" y="208" width="${f1(X(1200) - X(96) - 16)}" height="12" rx="3"/>
      <circle r="3" fill="var(--coral)" class="k-flow" style="offset-path:path('M${f1(X(96) + 8)} 214 H${f1(X(1200) - 8)}');--t:2.4s;--d:1.8s"/>
      <text x="${f1((X(96) + X(1200)) / 2)}" y="234" text-anchor="middle" font-size="11" font-weight="800" class="qu-gapt k-fade" style="--d:1.4s">~12×</text>
      <g class="k-pop" style="--d:.4s"><circle cx="${f1(X(48))}" cy="214" r="5" class="qu-now" opacity=".6"/></g>
      <g class="k-pop" style="--d:.7s"><circle cx="${f1(X(96))}" cy="214" r="6" class="qu-now"/></g>
      <text x="${f1(X(72))}" y="238" text-anchor="end" font-size="11" class="k-fade" style="--d:.6s"><tspan class="t-strong">48</tspan> Helios · <tspan class="t-strong">96</tspan> QuEra</text>
      <g class="k-pop" style="--d:1s"><circle cx="${f1(X(200))}" cy="214" r="5" fill="none" stroke="var(--beat)" stroke-width="1.6" stroke-dasharray="3 2"/></g>
      <text x="${f1(X(72))}" y="252" text-anchor="end" font-size="11" class="k-fade" style="--d:1s"><tspan class="t-strong">200</tspan> IBM, 2029 goal</text>
      <g class="k-pop" style="--d:1.2s"><circle cx="${f1(X(1200))}" cy="214" r="7" class="qu-tgt"/></g>
      <text x="${f1(X(1200) + 12)}" y="238" font-size="11" class="k-fade" style="fill:var(--coral);--d:1.2s"><tspan font-weight="800">~1,200</tspan> to break a key</text>
      <line class="ax" x1="${X(1)}" y1="262" x2="${f1(X(1e7))}" y2="262"/>${ticks}
    </svg>
    <div class="qr-c"><div class="k-seg"><button type="button" class="k-b" data-v="old">Earlier estimates</button><button type="button" class="k-b" data-v="new">Google, Mar 2026</button></div><p class="k-out"><b id="qrX">~5,000×</b><span>from Willow to a key-breaker</span></p></div></div>${cap("Physical qubits are the hardware; logical qubits are error-corrected ones built from many physical qubits. Google (Mar 2026), Caltech (Sept 2025), Quantinuum and QuEra, IBM roadmap.")}`;
  },
  init: fr => {
    let cur = 7, tgt = 7, tok = 0;
    const $ = s => fr.querySelector(s), W = X(105), C = X(6100);
    const fmt = v => "~" + sig1(v).toLocaleString("en-US") + "×";
    const draw = () => {
      const xn = X(Math.pow(10, cur)), n = Math.pow(10, cur);
      $("#qrNeed").setAttribute("transform", `translate(${f1(xn)} 92)`);
      const g = $("#qrGap"); g.setAttribute("x", f1(W + 10)); g.setAttribute("width", f1(Math.max(0, xn - W - 20)));
      $("#qrG1").setAttribute("x", f1((W + C) / 2)); $("#qrG1").textContent = fmt(n / 105) + " from 105";
      $("#qrG2").setAttribute("x", f1((C + xn) / 2)); $("#qrG2").textContent = fmt(n / 6100) + " from 6,100";
      $("#qrTrail").setAttribute("d", cur < 6.98 ? `M${f1(X(1e7) - 8)} 92 H${f1(xn + 12)}` : "");
      $("#qrFew").style.opacity = cur < 5.8 ? 1 : 0;
      $("#qrX").textContent = fmt(n / 105);
      const old = cur > 6.5; $("#qrNl").innerHTML = old ? "Earlier: ~10M" : "Needed: &lt;500K"; $("#qrNs").textContent = old ? "before 2026" : "Google, Mar 2026";
    };
    const set = K.tabs(fr, ".qr .k-b", v => { tgt = v === "old" ? 7 : Math.log10(5e5); }, "new");
    const bs = fr.querySelectorAll(".qr .k-b");
    K.onEnter(fr, () => { const my = ++tok; set(bs[0]); cur = 7; draw(); setTimeout(() => { if (my === tok) set(bs[1]); }, K.paused() ? 0 : 1100); });
    K.raf(fr, dt => { if (Math.abs(tgt - cur) > .002) { cur += (tgt - cur) * Math.min(1, dt / 260); draw(); } });
    cur = tgt; draw();
  } };





// ---------------------------------------------------------- slide 2
A["quantum-2a"] = { html: () => {
    const tiers = [[62, 92], [94, 74], [126, 56], [158, 40]].map(([y, w], i) => `<rect x="${100 - w / 2}" y="${y}" width="${w}" height="9" rx="2" class="qu-tier"/>${i < 3 ? [-1, 1].map(s => `<line x1="${100 + s * (w / 2 - 10)}" y1="${y + 9}" x2="${100 + s * (w / 2 - 14)}" y2="${y + 32}" class="qu-rod"/>`).join("") : ""}`).join("");
    const grid = Array.from({ length: 9 }, (_, i) => `<circle class="qlp-q" data-i="${i}" cx="${84 + (i % 3) * 16}" cy="${192 + Math.floor(i / 3) * 13}" r="4.2"/>`).join("");
    return `<div class="k-col qlp"><svg viewBox="0 0 460 280" class="k-svg" aria-label="A quantum chip in its refrigerator sends qubit readouts to a GPU decoder, which sends corrections back over NVQLink in under four microseconds. When the decoder is off, errors pile up.">
      <text x="20" y="24" class="t-strong" font-size="16">Who needs whom, today</text>
      <line x1="100" y1="36" x2="100" y2="62" class="qu-rod"/>${tiers}
      <rect x="70" y="180" width="60" height="50" rx="4" fill="var(--ink-2)" stroke="var(--beat)" id="qlpChip"/>${grid}
      <text x="100" y="248" text-anchor="middle" font-size="13" class="t-strong">Quantum chip</text><text x="100" y="263" text-anchor="middle" font-size="11">at ~0.01 K, in its fridge</text>
      <g transform="translate(320 104)" id="qlpGpu"><rect width="110" height="70" rx="5" fill="var(--ink-2)" stroke="var(--amber)" stroke-width="1.5"/>${[0, 1, 2, 3, 4, 5, 6].map(k => `<line x1="${14 + k * 14}" y1="10" x2="${14 + k * 14}" y2="60" stroke="var(--amber)" stroke-opacity=".35"/>`).join("")}<rect x="34" y="20" width="42" height="30" rx="3" fill="var(--ink-3)" stroke="var(--amber)" class="qlp-core"/><text x="55" y="40" text-anchor="middle" font-size="12" font-weight="800" style="fill:var(--amber)">GPU</text></g>
      <text x="375" y="194" text-anchor="middle" font-size="13" class="t-strong">GPU decoder</text><text x="375" y="209" text-anchor="middle" font-size="11" id="qlpSt">reads errors, sends fixes</text>
      <path id="qlpUp" d="M134 190 C200 70 262 70 318 122" fill="none" stroke="var(--beat)" stroke-opacity=".35" stroke-dasharray="4 4"/>
      <path id="qlpDn" d="M318 160 C262 212 200 226 134 214" fill="none" stroke="var(--amber)" stroke-opacity=".35" stroke-dasharray="4 4"/>
      <g id="qlpPk"></g>
      <text x="236" y="82" text-anchor="middle" font-size="12" style="fill:var(--beat)" font-weight="700">qubit readouts</text>
      <text x="236" y="236" text-anchor="middle" font-size="12" style="fill:var(--amber)" font-weight="700">corrections</text>
      <g transform="translate(232 150)"><rect x="-74" y="-22" width="148" height="44" rx="22" fill="var(--ink)" stroke="var(--rule)"/><text y="-4" text-anchor="middle" font-size="13" class="t-strong">NVQLink: &lt; 4 µs</text><text y="12" text-anchor="middle" font-size="11">17 quantum builders</text></g>
      <text x="446" y="24" text-anchor="end" font-size="11" style="fill:var(--faint)">fixes sent</text><text x="446" y="46" text-anchor="end" font-size="22" font-weight="900" style="fill:var(--amber);font-family:var(--display)" id="qlpN">0</text>
      <path id="qlpLater" d="M150 270 C230 280 330 276 380 214" fill="none" stroke="var(--violet)" stroke-dasharray="2 5" stroke-opacity=".6"/>
      ${[0, 1, 2].map(i => `<circle r="2.6" fill="var(--violet)" class="k-flow" style="offset-path:path('M150 270 C230 280 330 276 380 214');--t:5s;--d:-${i * 1.66}s;offset-rotate:0deg"/>`).join("")}
      <text x="300" y="268" text-anchor="middle" font-size="10.5" style="fill:var(--violet)">later: molecule simulations, as data for AI</text>
    </svg>
    <div class="qlp-c"><div class="k-seg"><button type="button" class="k-b" data-v="on">Decoder on</button><button type="button" class="k-b" data-v="off">Decoder off</button></div><p class="k-note" id="qlpV">Motion slowed about a million times.</p></div></div>${cap("Error correction needs fast classical decoding, so the GPU sits in the loop. A round of error checks takes 1.1 µs on Willow (Google, Dec 2024). Quantum Computing Report on NVQLink (Oct 2025).")}`;
  },
  init: fr => {
    const up = fr.querySelector("#qlpUp"), dn = fr.querySelector("#qlpDn"), LU = up.getTotalLength(), LD = dn.getTotalLength();
    const qs = [...fr.querySelectorAll(".qlp-q")], pk = fr.querySelector("#qlpPk"), core = fr.querySelector(".qlp-core");
    let on = true, bad = new Set(), ps = [], acc = 0, n = 0, flash = 0;
    const err = i => { if (bad.has(i)) return; bad.add(i); qs[i].classList.add("bad"); if (on) ps.push({ i, u: 0, dir: 1 }); };
    qs.forEach((q, i) => { q.style.cursor = "pointer"; q.addEventListener("click", () => err(i)); });
    const verdict = () => { const v = fr.querySelector("#qlpV");
      if (on) { v.textContent = "Motion slowed about a million times."; fr.querySelector("#qlpSt").textContent = "reads errors, sends fixes"; }
      else { v.textContent = bad.size >= 5 ? "Too many errors at once: the logical qubit is lost." : "No decoder: nothing comes back, and errors pile up."; fr.querySelector("#qlpSt").textContent = "off"; }
      fr.querySelector("#qlpChip").classList.toggle("lost", !on && bad.size >= 5); };
    K.tabs(fr, ".qlp .k-b", v => { on = v === "on"; if (on) bad.forEach(i => { if (!ps.some(p => p.i === i)) ps.push({ i, u: 0, dir: 1 }); }); else ps = []; fr.querySelector("#qlpGpu").style.opacity = on ? 1 : .35; verdict(); });
    K.onEnter(fr, () => { n = 0; fr.querySelector("#qlpN").textContent = 0; });
    K.raf(fr, dt => {
      acc += dt; if (acc > (on ? 1100 : 900)) { acc = 0; err(Math.floor(Math.random() * 9)); verdict(); }
      ps.forEach(p => { p.u += dt / 900; if (p.u >= 1 && p.dir === 1) { p.dir = -1; p.u = 0; flash = 260; } });
      ps = ps.filter(p => { if (p.dir === -1 && p.u >= 1) { bad.delete(p.i); qs[p.i].classList.remove("bad"); qs[p.i].classList.add("ok"); setTimeout(() => qs[p.i].classList.remove("ok"), 400); n++; fr.querySelector("#qlpN").textContent = n; return false; } return true; });
      pk.innerHTML = ps.map(p => { const P = p.dir === 1 ? up.getPointAtLength(p.u * LU) : dn.getPointAtLength(p.u * LD); return `<circle cx="${f1(P.x)}" cy="${f1(P.y)}" r="4.5" fill="${p.dir === 1 ? "var(--beat)" : "var(--amber)"}"/>`; }).join("");
      flash = Math.max(0, flash - dt); core.style.fill = flash > 0 ? "var(--amber)" : "";
      verdict();
    });
  } };





// ---------------------------------------------------------- slide 3





})();

// 21 · Rent GPUs to survive. Sell tokens to win.
(() => {
const A = window.AX, cap = t => `<p class="cap">${t}</p>`, f1 = v => (+v).toFixed(1);
const xf = v => v >= 10 ? Math.round(v) + "×" : v.toFixed(v >= 2 ? 1 : 2).replace(/\.?0+$/, "") + "×";

// ---------------------------------------------------------- slide 1
A["tokens-1a"] = { html: () => `<div class="k-col tkl"><svg viewBox="0 0 460 236" class="k-svg" aria-label="Left: a metered tap selling GPU-hours at a 20 to 30 percent margin. Right: a bottling line filling bottles of tokens that cost 10 to 30 cents to make and sell for 5 to 15 dollars.">
      <text x="90" y="18" text-anchor="middle" font-size="12" font-weight="800" style="fill:var(--dim);letter-spacing:.12em">GPU-HOURS: THE TAP</text>
      <text x="330" y="18" text-anchor="middle" font-size="12" font-weight="800" style="fill:var(--amber);letter-spacing:.12em">TOKENS: THE BOTTLE</text>
      <path d="M40 44 h80 q14 0 14 14 v22 h-18 v-14 h-76z" fill="var(--ink-3)" stroke="var(--faint)" stroke-width="1.6"/><rect x="62" y="30" width="14" height="16" rx="2" fill="var(--faint)"/><rect x="52" y="24" width="34" height="8" rx="3" fill="var(--faint)"/>
      <path class="tkl-drip" d="M125 84 V176" stroke="#4fd2ff" stroke-width="5" stroke-linecap="round" stroke-dasharray="6 7"/>
      <path d="M100 176 h50 l-6 36 h-38z" fill="#4fd2ff" fill-opacity=".15" stroke="#a6e9ff" stroke-width="1.6"/><path d="M104 194 h42 l-3 18 h-36z" fill="#4fd2ff" fill-opacity=".35"/>
      <g transform="translate(24 100)"><rect width="70" height="50" rx="4" fill="#04080f" stroke="var(--rule)"/><text x="35" y="15" text-anchor="middle" font-size="9" style="fill:var(--faint);letter-spacing:.1em" font-weight="700">METER</text><text x="35" y="38" text-anchor="middle" font-size="16" font-weight="800" style="fill:var(--paper);font-family:'Courier New',monospace" id="tklM">00:00</text></g>
      <text x="90" y="230" text-anchor="middle" font-size="13" style="fill:var(--dim)">margin <tspan font-weight="800" style="fill:var(--paper)" font-size="17">20–30%</tspan></text>
      <line x1="200" y1="14" x2="200" y2="218" stroke="var(--rule)" stroke-dasharray="3 5"/>
      <g transform="translate(270 34)"><rect x="-16" y="0" width="32" height="26" rx="3" fill="var(--ink-3)" stroke="var(--faint)"/><path id="tklF" d="M0 26 V64" stroke="#4fd2ff" stroke-width="4" opacity="0"/><text x="0" y="-4" text-anchor="middle" font-size="10" style="fill:var(--faint)">filler</text></g>
      <g transform="translate(350 34)"><rect x="-16" y="0" width="32" height="20" rx="3" fill="var(--ink-3)" stroke="var(--faint)"/><rect x="-6" id="tklS" y="20" width="12" height="8" fill="var(--amber)"/><text x="0" y="-4" text-anchor="middle" font-size="10" style="fill:var(--faint)">labeler</text></g>
      <g id="tklB"></g>
      <path d="M210 186 H452" stroke="var(--faint)" stroke-width="3"/>${Array.from({ length: 12 }, (_, i) => `<circle cx="${214 + i * 20}" cy="192" r="4" fill="none" stroke="var(--rule)" class="k-spin" style="--t:1s"/>`).join("")}
      <text x="330" y="230" text-anchor="middle" font-size="13" style="fill:var(--dim)">markup <tspan font-weight="800" style="fill:var(--amber)" font-size="17" id="tklX">50×</tspan></text>
    </svg>
    <label class="k-row"><span>Cost to make, per million</span><input type="range" id="tklC" min="10" max="30" step="5" value="20"><b id="tklCv"></b></label>
    <label class="k-row"><span>List price, per million</span><input type="range" id="tklP" min="5" max="15" step="1" value="10"><b id="tklPv"></b></label>
    </div>${cap("Prices per million tokens from a popular model, from the framework. Nebius’s Token Factory (Nov 2025) is the bottling line.")}`,
  init: fr => {
    const $ = s => fr.querySelector(s); let c = .2, p = 10, t = 0, sec = 0;
    const upd = () => { $("#tklCv").textContent = "$" + c.toFixed(2); $("#tklPv").textContent = "$" + p; $("#tklX").textContent = xf(p / c); };
    K.slider(fr, "#tklC", v => { c = v / 100; upd(); }); K.slider(fr, "#tklP", v => { p = v; upd(); });
    const B = $("#tklB");
    K.raf(fr, dt => { t += dt; sec += dt;
      $("#tklM").textContent = `${String(Math.floor(sec / 60000) % 60).padStart(2, "0")}:${String(Math.floor(sec / 1000) % 60).padStart(2, "0")}`;
      let h = "", filling = false, stamping = false;
      for (let i = 0; i < 4; i++) { const x = 196 + ((t / 30 + i * 70) % 280); if (x > 452) continue;
        const fl = K.clamp((x - 256) / 26, 0, 1), lab = x > 350, tag = x > 372;
        if (x > 256 && x < 284) filling = true; if (x > 340 && x < 360) stamping = true;
        h += `<g transform="translate(${f1(x)} 182)"><path d="M-6 -66 h12 v10 q12 7 12 20 v32 q0 6 -6 6 h-24 q-6 0 -6 -6 v-32 q0 -13 12 -20z" fill="#4fd2ff" fill-opacity=".08" stroke="#a6e9ff" stroke-width="1.4"/>
          <rect x="-12" y="${f1(-4 - 34 * fl)}" width="24" height="${f1(34 * fl)}" fill="#4fd2ff" fill-opacity=".38"/>
          ${fl >= 1 ? `<rect x="-7" y="-70" width="14" height="6" rx="2" fill="var(--amber)"/>` : ""}
          ${lab ? `<rect x="-14" y="-36" width="28" height="20" rx="2" fill="var(--amber)"/><text y="-28" text-anchor="middle" font-size="6.2" font-weight="800" style="fill:var(--ink)">TOKEN</text><text y="-20" text-anchor="middle" font-size="6.2" font-weight="800" style="fill:var(--ink)">FACTORY</text>` : ""}
          ${tag ? `<g transform="translate(14 -76)"><path d="M0 0 h30 v14 h-30 l-6 -7z" fill="var(--paper)"/><text x="14" y="10.5" text-anchor="middle" font-size="9" font-weight="900" style="fill:var(--ink)">$${p}</text></g>` : ""}</g>`; }
      B.innerHTML = h; $("#tklF").setAttribute("opacity", filling ? 1 : 0); $("#tklS").setAttribute("y", stamping ? 30 : 20); });
  } };





// ---------------------------------------------------------- slide 2






// ---------------------------------------------------------- slide 3
A["tokens-3a"] = { html: () => {
    const win = (x0, cls) => Array.from({ length: 24 }, (_, i) => `<rect class="${cls}" data-i="${i}" x="${x0 + 14 + (i % 6) * 25}" y="${140 + Math.floor(i / 6) * 22}" width="17" height="12" rx="1"/>`).join("");
    return `<div class="k-col tkb"><svg viewBox="0 0 460 280" class="k-svg" aria-label="Two data centers aging from 2026 to 2030. The one that keeps renting GPU-hours goes dark and ends down 70 percent or more; the one that sells tokens lights up and ends around 11 times.">
      <text x="14" y="22" class="t-strong" font-size="15">The same building in <tspan id="tkbY">2026</tspan></text>
      <rect x="18" y="96" width="170" height="140" rx="3" fill="var(--ink-2)" stroke="var(--faint)" stroke-width="1.6"/>${win(18, "tkb-l")}
      <rect x="18" y="104" width="170" height="24" fill="#04080f"/><text x="103" y="121" text-anchor="middle" font-size="12" font-weight="800" style="fill:var(--faint);letter-spacing:.1em">GPU-HOURS</text>
      <g id="tkbF1" class="tkb-ban"><g transform="rotate(-8 70 180)"><rect x="34" y="166" width="72" height="26" fill="var(--coral)"/><text x="70" y="184" text-anchor="middle" font-size="12" font-weight="900" style="fill:var(--ink)">FOR LEASE</text></g></g>
      <g id="tkbF2" class="tkb-ban"><g transform="rotate(6 150 210)"><rect x="118" y="200" width="64" height="22" fill="var(--coral)" opacity=".85"/><text x="150" y="215" text-anchor="middle" font-size="10.5" font-weight="900" style="fill:var(--ink)">FOR LEASE</text></g></g>
      <rect x="272" y="96" width="170" height="140" rx="3" fill="var(--ink-2)" stroke="var(--amber)" stroke-width="1.6"/>${win(272, "tkb-r")}
      <rect x="272" y="104" width="170" height="26" fill="#04080f" stroke="var(--amber)"/><text x="357" y="122" text-anchor="middle" font-size="12" font-weight="800" style="fill:var(--amber)" id="tkbN">TOKENS SOLD 0</text>
      ${[["apps", 280, 296], ["agents", 357, 357], ["models", 434, 418]].map(([l, tx, x]) => `<path d="M${x} 96 C${x} 70 ${tx} 60 ${tx} 46" stroke="var(--amber)" stroke-width="1.6" fill="none" class="tkb-c k-ants"/><text x="${tx}" y="40" text-anchor="middle" font-size="11" style="fill:var(--paper)">${l}</text>`).join("")}
      <line x1="10" y1="236" x2="450" y2="236" stroke="var(--rule)" stroke-width="2"/>
      <text x="103" y="262" text-anchor="middle" font-size="15" style="fill:var(--coral)" font-weight="900" id="tkbL">0%</text><text x="103" y="278" text-anchor="middle" font-size="11.5">stayed a landlord</text>
      <text x="357" y="262" text-anchor="middle" font-size="15" style="fill:var(--amber)" font-weight="900" id="tkbR">1×</text><text x="357" y="278" text-anchor="middle" font-size="11.5">sells tokens, keeps the customers</text>
      <g transform="translate(230 150)" id="tkbCk"><line x1="0" y1="0" x2="0" y2="86" stroke="var(--faint)" stroke-width="3"/><rect x="-34" y="-30" width="68" height="34" rx="3" fill="var(--ink)" stroke="var(--paper)"/><text x="0" y="-15" text-anchor="middle" font-size="10" style="fill:var(--paper)" font-weight="800">CHECKPOINT</text><text x="0" y="-2" text-anchor="middle" font-size="10" style="fill:var(--dim)">end of 2027</text></g>
    </svg>
    <label class="k-row"><span>Year</span><input type="range" id="tkbR2" min="2026" max="2030" step=".02" value="2026"><b id="tkbYv"></b></label></div>${cap("Outcomes from the betteresearch framework’s 2030 scenarios (May 2026). The checkpoint: more revenue per megawatt than CoreWeave’s $8–12M. Illustrative.")}`;
  },
  init: fr => {
    const $ = s => fr.querySelector(s), L = [...fr.querySelectorAll(".tkb-l")], R = [...fr.querySelectorAll(".tkb-r")], r = $("#tkbR2");
    let y = 2026, play = true, tok = 0;
    const ord = L.map((_, i) => (i * 7) % 24);
    const draw = () => { const u = (y - 2026) / 4;
      $("#tkbY").textContent = Math.floor(y); $("#tkbYv").textContent = Math.floor(y);
      L.forEach((w, i) => w.classList.toggle("on", ord.indexOf(i) >= u * 24 * .9)); R.forEach((w, i) => w.classList.toggle("on", ord.indexOf(i) < 4 + u * 20));
      $("#tkbF1").classList.toggle("on", y > 2028); $("#tkbF2").classList.toggle("on", y > 2029);
      $("#tkbL").textContent = Math.round(-70 * Math.pow(u, 1.4)) + "%"; $("#tkbR").textContent = "~" + (1 + 10 * Math.pow(u, 1.6)).toFixed(1) + "×";
      $("#tkbCk").classList.toggle("on", y >= 2028); };
    r.addEventListener("input", () => { play = false; y = +r.value; draw(); });
    K.onEnter(fr, () => { y = 2026; play = true; r.value = y; draw(); tok = 1.2e9; });
    K.raf(fr, dt => { tok += dt * (1e5 + (y - 2026) * 4e6) / 16; $("#tkbN").textContent = "TOKENS SOLD " + (tok / 1e9).toFixed(2) + "B";
      if (play && y < 2030) { y = Math.min(2030, y + dt / 2200); r.value = y; draw(); } });
    draw();
  } };




})();

// 22 · A token factory is a country of experts on a meter.
(() => {
const A = window.AX, cap = t => `<p class="cap">${t}</p>`, f1 = v => (+v).toFixed(1);
const big = v => (v >= 1e12 ? `${(v / 1e12).toFixed(v >= 1e13 ? 0 : 1)} trillion` : v >= 1e9 ? `${(v / 1e9).toFixed(v >= 1e10 ? 0 : 1)} billion` : v >= 1e6 ? `${(v / 1e6).toFixed(v >= 1e7 ? 0 : 1).replace(/\.0$/, "")} million` : `${Math.round(v / 1e3).toLocaleString("en-US")},000`);

// ---------------------------------------------------------- slide 1
A["factory-1a"] = { html: () => {
    const racks = Array.from({ length: 5 }, (_, i) => `<g class="fca-r" data-i="${i}"><rect x="${146 + i * 36}" y="152" width="24" height="68" rx="2" fill="#11263c" stroke="var(--violet)" stroke-opacity=".7"/>${[0, 1, 2, 3].map(k => `<rect class="fca-led" style="animation-delay:${((i * 4 + k) * .17 % 1.6).toFixed(2)}s" x="${150 + i * 36}" y="${158 + k * 15}" width="16" height="4" rx="1"/>`).join("")}</g>`).join("");
    return `<div class="k-col fca"><svg viewBox="0 0 460 260" class="k-svg" aria-label="A token factory: power, chips and a model go in; racks run the model; tokens come out on a belt and spell an answer.">
      <text x="14" y="22" class="t-strong" font-size="16">In: power, chips, a model. Out: tokens.</text>
      <path d="M134 242 V120 L170 96 V120 L206 96 V120 L242 96 V120 L278 96 V120 L314 96 V242 Z" fill="var(--ink-2)" stroke="var(--rule)" stroke-width="1.5" stroke-linejoin="round"/>
      <rect x="300" y="54" width="18" height="50" fill="var(--ink-3)" stroke="var(--rule)"/><g id="fcaPuff"></g>
      ${racks}
      <g transform="translate(50 142)"><path d="M4 -16 L-8 3 H2 L-4 18 L12 -3 H2 L8 -16 Z" fill="var(--amber)"/></g><text x="50" y="174" text-anchor="middle" font-size="11">power</text>
      <g transform="translate(50 202)"><rect x="-11" y="-11" width="22" height="22" rx="2" fill="var(--ink-3)" stroke="var(--violet)"/><rect x="-5" y="-5" width="10" height="10" fill="var(--violet)"/></g><text x="50" y="230" text-anchor="middle" font-size="11">chips</text>
      <g transform="translate(50 100)"><path d="M-9 -12 H4 L10 -6 V12 H-9 Z" fill="var(--ink-3)" stroke="var(--beat)"/><path d="M-5 -2 H6 M-5 3 H6 M-5 8 H3" stroke="var(--beat)" stroke-width="1.2"/></g><text x="50" y="126" text-anchor="middle" font-size="11">model</text>
      <g id="fcaIn"></g>
      <line x1="314" y1="242" x2="456" y2="242" stroke="var(--rule)" stroke-width="2"/>
      <defs><clipPath id="fcaClip"><rect x="316" y="204" width="144" height="40"/></clipPath></defs><g clip-path="url(#fcaClip)"><g id="fcaBelt"></g></g>
      <g transform="translate(386 150)"><rect x="-58" y="-44" width="116" height="66" rx="5" fill="#04080f" stroke="var(--rule)"/><text x="0" y="-28" text-anchor="middle" font-size="9.5" font-weight="800" style="fill:var(--faint);letter-spacing:.1em">THROUGHPUT</text><text x="0" y="-8" text-anchor="middle" font-size="20" font-weight="900" style="fill:var(--amber);font-family:var(--display)" id="fcaT">3×</text><text x="0" y="12" text-anchor="middle" font-size="10" id="fcaE">tokens per watt: 1×</text></g>
    </svg>
    <p class="fca-out"><span>Shipped:</span> <span id="fcaO"></span><i class="fca-cur"></i></p>
    <label class="k-row"><span>Power</span><input type="range" id="fcaP" min="1" max="5" value="3"><b id="fcaPv"></b></label>
    <div class="k-seg"><button type="button" class="k-b" data-v="1">Today’s engine</button><button type="button" class="k-b" data-v="2">A better inference engine</button></div></div>${cap("Throughput is tokens per second; efficiency is tokens per watt. Multiples are illustrative. Google processed 3.2 quadrillion tokens a month by May 2026, about 1.2 billion a second on average (Google I/O).")}`;
  },
  init: fr => {
    const $ = s => fr.querySelector(s), W = ["The", " answer", " is", " ready", ":", " here", "’s", " the", " plan", ",", " step", " by", " step", "."];
    let pw = 3, eng = 1, t = 0, acc = 0, belt = [], wi = 0, out = "", puffs = [];
    const upd = () => { $("#fcaPv").textContent = pw + " of 5 racks"; fr.querySelectorAll(".fca-r").forEach((r, i) => r.classList.toggle("on", i < pw)); $("#fcaT").textContent = (pw * eng) + "×"; $("#fcaE").textContent = `tokens per watt: ${eng}×`; };
    K.slider(fr, "#fcaP", v => { pw = v; upd(); }); K.tabs(fr, ".fca .k-b", v => { eng = +v; upd(); }, 1);
    K.onEnter(fr, () => { belt = []; wi = 0; out = ""; $("#fcaO").textContent = ""; });
    K.raf(fr, dt => { t += dt; acc += dt; const rate = pw * eng;
      if (acc > 1700 / rate) { acc = 0; const w = W[wi % W.length]; wi++; belt.push({ w: w.trim() || "·", x: 300 }); if (wi % W.length === 1) out = ""; out += w; $("#fcaO").textContent = out; if (Math.random() < .5) puffs.push({ w: w.trim(), u: 0 }); }
      belt.forEach(b => b.x += dt * .025 * (1 + rate * .35)); belt = belt.filter(b => b.x < 470);
      $("#fcaBelt").innerHTML = belt.map(b => `<g transform="translate(${f1(b.x)} 226)"><rect x="0" y="-11" width="${14 + b.w.length * 6.4}" height="20" rx="4" fill="var(--ink-2)" stroke="var(--amber)"/><text x="${7 + b.w.length * 3.2}" y="3.5" text-anchor="middle" font-size="11.5" class="t-strong">${b.w}</text></g>`).join("");
      puffs.forEach(p => p.u += dt / 1800); puffs = puffs.filter(p => p.u < 1);
      $("#fcaPuff").innerHTML = puffs.map(p => `<text x="${f1(309 + p.u * 18)}" y="${f1(48 - p.u * 40)}" text-anchor="middle" font-size="11" font-weight="800" style="fill:var(--amber);opacity:${f1(1 - p.u)}">${p.w}</text>`).join("");
      $("#fcaIn").innerHTML = [100, 142, 202].map((y, k) => Array.from({ length: Math.min(4, pw) }, (_, i) => { const u = ((t * rate / 1400 + i / Math.min(4, pw) + k * .3) % 1); return `<circle cx="${f1(78 + u * 60)}" cy="${y}" r="3.4" fill="var(--beat)" opacity="${f1(Math.sin(u * Math.PI))}"/>`; }).join("")).join("");
    });
    upd();
  } };





// ---------------------------------------------------------- slide 2
A["factory-2a"] = { html: () => `<div class="k-col fco">
      <div class="fco-day"><span class="fco-sun" id="fcoSun"></span><i class="fco-h">humans <b id="fcoHs">at work</b></i><i class="fco-a">copies <b>at work</b></i></div>
      <label class="k-row"><span>Copies running at once</span><input type="range" id="fcoR" min="3" max="7" step=".25" value="6"><b id="fcoRv"></b></label>
      <div class="k-seg"><button type="button" class="k-b" data-v="10">10× human speed</button><button type="button" class="k-b" data-v="100">100× human speed</button></div>
      <div class="fco-g" id="fcoG">${Array.from({ length: 100 }, (_, i) => `<i style="--d:${((Math.abs(i % 10 - 4.5) + Math.abs(Math.floor(i / 10) - 4.5)) * 22).toFixed(0)}ms"></i>`).join("")}</div>
      <p class="k-out"><b id="fcoN"></b><span id="fcoS"></span></p>
    </div>${cap("Illustrative: copies × speed gives full-time expert equivalents; each figure is 5 million. Amodei expects clusters able to run millions of copies at 10–100× human speed by about 2027, and pictured that country as about 50 million geniuses (Jan 2026).")}`,
  init: fr => {
    const $ = s => fr.querySelector(s), cells = [...fr.querySelectorAll("#fcoG i")], MAX = 5e8; let n = 1e6, sp = 10, ph = 0;
    const upd = () => { const e = n * sp, lit = Math.min(100, Math.ceil(e / MAX * 100 - 1e-9));
      const ord = cells.map((c, i) => [Math.abs(i % 10 - 4.5) + Math.abs(Math.floor(i / 10) - 4.5), i]).sort((a, b) => a[0] - b[0]).map(x => x[1]);
      cells.forEach(c => c.classList.remove("a", "nobel")); ord.slice(0, lit).forEach(i => cells[i].classList.add("a")); cells[ord[9]].classList.add("nobel");
      $("#fcoRv").textContent = Math.round(n).toLocaleString("en-US");
      $("#fcoN").textContent = big(e); $("#fcoS").textContent = `full-time experts’ worth of work${e >= 5e7 ? ", past Amodei’s “50 million”" : `, ${Math.round(e / 5e7 * 100) || "<1"}% of Amodei’s “50 million”`}.`; };
    K.slider(fr, "#fcoR", v => { n = Math.round(Math.pow(10, v)); upd(); });
    K.tabs(fr, ".fco .k-b", v => { sp = +v; upd(); }, 10);
    K.raf(fr, dt => { ph = (ph + dt / 6000) % 1; const s = $("#fcoSun"); s.style.left = (ph * 100) + "%"; const night = ph > .5; s.classList.toggle("moon", night); fr.querySelector(".fco-day").classList.toggle("night", night); $("#fcoHs").textContent = night ? "asleep" : "at work"; });
  } };





// ---------------------------------------------------------- slide 3





})();

// 24 · OpenClaw gave the brain a body. Now it needs a badge.
(() => {
const A = window.AX, cap = t => `<p class="cap">${t}</p>`, f1 = v => (+v).toFixed(1);
const CLAW = `<svg viewBox="-12 -12 24 24" aria-hidden="true"><path d="M-4 6 C-8 -4 -4 -10 6 -11 C9 -5 7 -2 2 -1 C7 0 10 3 8 8 C3 11 -1 9 -4 6 Z" fill="#f4977a"/></svg>`;

// ---------------------------------------------------------- slide 1






// ---------------------------------------------------------- slide 2
A["openclaw-2a"] = { html: () => {
    const G = [["identity", "who is acting?"], ["sandbox", "what can it break?"], ["approval", "does a person agree?"], ["audit", "can we replay it?"]];
    const xs = [40, 116, 192, 268, 344, 420];
    return `<div class="k-col owp"><svg viewBox="0 0 460 250" class="k-svg" aria-label="Two lanes. The startup's tasks go straight through. The big company's tasks stop at gates for identity, sandbox, approval and audit.">
      <text x="14" y="22" class="t-strong" font-size="16">Same agent, two speeds</text>
      <text x="14" y="52" font-size="12" font-weight="800" style="fill:var(--beat)">LEAN STARTUP</text><line x1="40" x2="420" y1="80" y2="80" stroke="var(--rule)" stroke-width="2"/>
      ${[[40, "task"], [230, "agent"], [420, "done"]].map(([x, n]) => `<circle cx="${x}" cy="80" r="13" fill="var(--ink-2)" stroke="var(--beat)" stroke-width="1.5"/><text x="${x}" y="108" text-anchor="middle" font-size="10.5">${n}</text>`).join("")}
      <text x="14" y="146" font-size="12" font-weight="800" style="fill:var(--amber)">BIG COMPANY</text><line x1="40" x2="420" y1="178" y2="178" stroke="var(--rule)" stroke-width="2"/>
      <circle cx="40" cy="178" r="13" fill="var(--ink-2)" stroke="var(--amber)" stroke-width="1.5"/><text x="40" y="208" text-anchor="middle" font-size="10.5">task</text>
      <circle cx="420" cy="178" r="13" fill="var(--ink-2)" stroke="var(--amber)" stroke-width="1.5"/><text x="420" y="208" text-anchor="middle" font-size="10.5">done</text>
      ${G.map(([n, q], i) => `<g class="owp-g" data-i="${i}" transform="translate(${[116, 192, 268, 344][i] + (i === 3 ? 0 : 0)} 178)" tabindex="0" role="button"><rect x="-17" y="-17" width="34" height="34" rx="6" fill="var(--ink-2)" stroke="var(--amber)" stroke-width="1.5"/><path class="owp-sh" d="M-5 -2 V-6 A5 5 0 0 1 5 -6 V-2" fill="none" stroke="var(--amber)" stroke-width="1.8"/><rect x="-7" y="-2" width="14" height="10" rx="2" fill="var(--amber)"/><text y="32" text-anchor="middle" font-size="10.5">${n}</text><text y="45" text-anchor="middle" font-size="9" style="fill:var(--faint)">${q}</text></g>`).join("")}
      <g id="owpD"></g>
    </svg>
    <div class="owp-c"><p class="owp-s">Done: startup <b id="owpA">0</b> · big company <b id="owpB">0</b></p><div class="owp-risk"><span>Risk</span><i><u id="owpR"></u></i><em id="owpRt">badged</em></div></div></div>${cap("The enterprise version adds a badge at every step. NemoClaw (Nvidia, Mar 2026); OpenShell on Red Hat (Oct 2026). Speeds and risk are illustrative.")}`;
  },
  init: fr => {
    const gx = [116, 192, 268, 344], up = [true, true, true, true]; let a = [], b = [], acc = 0, nA = 0, nB = 0;
    const gs = [...fr.querySelectorAll(".owp-g")];
    const risk = () => { const off = up.filter(x => !x).length; fr.querySelector("#owpR").style.width = (8 + off * 23) + "%"; fr.querySelector("#owpRt").textContent = off ? `${off} gate${off > 1 ? "s" : ""} lifted` : "badged"; fr.querySelector(".owp-risk").classList.toggle("hot", off > 1); };
    gs.forEach((g, i) => { const t = () => { up[i] = !up[i]; g.classList.toggle("off", !up[i]); risk(); }; g.addEventListener("click", t); g.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); t(); } }); });
    K.onEnter(fr, () => { a = []; b = []; nA = nB = 0; });
    K.raf(fr, dt => { acc += dt; if (acc > 900) { acc = 0; a.push({ x: 40 }); b.push({ x: 40, hold: 0, gi: 0 }); }
      a.forEach(p => p.x += dt * .19); a = a.filter(p => { if (p.x > 420) { nA++; return false; } return true; });
      b.forEach(p => { if (p.hold > 0) { p.hold -= dt; return; } const nx = p.x + dt * .19; const g = gx.findIndex(x => p.x < x && nx >= x); if (g >= 0 && up[g]) { p.x = gx[g]; p.hold = 650; gs[g].classList.remove("open"); void gs[g].getBBox(); gs[g].classList.add("open"); p.x += .01; } else p.x = nx; });
      b = b.filter(p => { if (p.x > 420) { nB++; return false; } return true; });
      fr.querySelector("#owpD").innerHTML = a.map(p => `<circle cx="${f1(p.x)}" cy="80" r="5" fill="var(--beat)"/>`).join("") + b.map(p => `<circle cx="${f1(p.x)}" cy="178" r="5" fill="var(--amber)"/>`).join("");
      fr.querySelector("#owpA").textContent = nA; fr.querySelector("#owpB").textContent = nB; });
    risk();
  } };





// ---------------------------------------------------------- slide 3
A["openclaw-3a"] = { html: orig => `<div class="owd">${orig.replace(/<p class="cap">[\s\S]*<\/p>\s*$/, "")}<p class="owd-live" id="owdL"></p></div>${cap("2.0 defaults as reported: sandbox off, secrets unencrypted. About 12% of audited ClawHub skills were malicious. The log is illustrative.")}`,
  init: fr => {
    const b = fr.querySelector(".bd2"), ts = [...fr.querySelectorAll(".bd2-t")], rows = [...fr.querySelectorAll(".bd2-card dl > div")], L = fr.querySelector("#owdL"); let tok = 0, acc = 0, n = 0;
    const LOG = [["read inbox", "allowed"], ["draft reply", "allowed"], ["send to 20 leads", "waiting for approval"], ["install skill from ClawHub", "blocked: not in registry"], ["read calendar", "allowed"], ["export contacts", "blocked: out of scope"]];
    const set = (m, anim) => { const my = ++tok; b.dataset.m = m; ts.forEach(t => t.classList.toggle("on", t.dataset.m === m));
      rows.forEach(r => r.classList.remove("owd-st")); if (m === "on" && anim) rows.forEach((r, i) => setTimeout(() => { if (my === tok) r.classList.add("owd-st"); }, K.paused() ? 0 : 200 + i * 260)); L.innerHTML = ""; n = 0; };
    ts.forEach(t => t.addEventListener("click", () => set(t.dataset.m, true)));
    K.onEnter(fr, () => { set("off"); const my = tok; setTimeout(() => { if (my === tok && K.active(fr)) set("on", true); }, K.paused() ? 0 : 1600); });
    K.raf(fr, dt => { if (b.dataset.m !== "on") return; acc += dt; if (acc > 1300) { acc = 0; const [a, r] = LOG[n % LOG.length]; n++; const t = 9 * 60 + 14 + n; L.insertAdjacentHTML("afterbegin", `<span class="${r.startsWith("allowed") ? "ok" : r.startsWith("waiting") ? "wait" : "no"}">${String(Math.floor(t / 60)).padStart(2, "0")}:${String(t % 60).padStart(2, "0")} ${a} · ${r}</span>`); while (L.children.length > 3) L.lastChild.remove(); } });
  } };




})();

// 25 · America can’t afford second place in AI.
(() => {
const A = window.AX, cap = t => `<p class="cap">${t}</p>`, f1 = v => (+v).toFixed(1);
const MET = { inv: ["Private AI investment, 2025", 285.9, 12.4, v => `$${v}B`, "China’s figure likely misses state guidance funds."], comp: ["Share of the world’s AI compute", 72.2, 9.6, v => `${v}%`, "Epoch AI, Q2 2026."], bots: ["Industrial robots installed last year", 34.2, 295, v => `${v}K`, "China leads where AI meets the factory floor."] };

// ---------------------------------------------------------- slide 1






// ---------------------------------------------------------- slide 2


A["race-2b"] = { html: () => `<div class="k-col rcm"><svg viewBox="0 0 460 230" class="k-svg" aria-label="Of all AI compute, the US holds 72.2 percent and China 9.6 percent. Of new compute added in the first half of 2026, 78 percent went to the US.">
      <g id="rcmBk"></g><g id="rcmR"></g>
      ${[["United States", 80, "var(--beat)"], ["China", 230, "var(--coral)"], ["Everyone else", 380, "var(--violet)"]].map(([n, x, c]) => `<rect x="${x - 62}" y="80" width="124" height="130" rx="4" fill="none" stroke="${c}" stroke-opacity=".5"/><text x="${x}" y="226" text-anchor="middle" font-size="12" class="t-strong" style="fill:${c}">${n}</text>`).join("")}
      <text x="80" y="70" text-anchor="middle" font-size="18" font-weight="900" style="fill:var(--beat);font-family:var(--display)" id="rcmU"></text><text x="230" y="70" text-anchor="middle" font-size="18" font-weight="900" style="fill:var(--coral);font-family:var(--display)" id="rcmC"></text><text x="380" y="70" text-anchor="middle" font-size="18" font-weight="900" style="fill:var(--violet);font-family:var(--display)" id="rcmO"></text>
      <text x="230" y="20" text-anchor="middle" font-size="12" font-weight="800" style="fill:var(--faint);letter-spacing:.1em" id="rcmT"></text>
    </svg><div class="k-seg"><button type="button" class="k-b" data-v="stock">All AI compute today</button><button type="button" class="k-b" data-v="flow">New compute, H1 2026</button></div><p class="k-out"><b class="b">78%</b><span>of the new AI compute added in the first half of 2026 went to the US, above its 72% share of all of it. The US share is still growing.</span></p></div>${cap("Epoch AI: US 72.2% and China 9.6% of the world’s AI compute (Q2 2026). The US added 78% of the world’s new AI compute in the first half of 2026; the flow view doesn’t split the remaining 22%.")}`,
  init: fr => {
    const $ = s => fr.querySelector(s); let mode = "stock", drops = [], placed = [0, 0, 0], tgt = [72, 10, 18], acc = 0;
    const bx = [80, 230, 380];
    const cell = (b, i) => `<rect x="${bx[b] - 58 + (i % 10) * 11.6}" y="${204 - Math.floor(i / 10) * 12.4}" width="10" height="10.8" rx="1.5" fill="${["var(--beat)", "var(--coral)", "var(--violet)"][b]}"/>`;
    let picked = false, wait = 0;
    const tabs = K.tabs(fr, ".rcm .k-b", v => { mode = v; drops = []; placed = [0, 0, 0]; tgt = v === "stock" ? [72, 10, 18] : [78, 0, 22]; $("#rcmT").textContent = v === "stock" ? "OF EVERY 100 UNITS OF AI COMPUTE" : "OF EVERY 100 NEW UNITS, H1 2026";
      $("#rcmU").textContent = v === "stock" ? "72.2%" : "78%"; $("#rcmC").textContent = v === "stock" ? "9.6%" : "—"; $("#rcmO").textContent = v === "stock" ? "18.2%" : "22%"; fr.querySelector(".rcm").dataset.m = v; }, "stock");
    const bs = [...fr.querySelectorAll(".rcm .k-b")];
    bs.forEach(b => b.addEventListener("click", () => { picked = true; }));
    K.onEnter(fr, () => { drops = []; placed = [0, 0, 0]; wait = 0; if (!picked && mode !== "stock") tabs(bs[0]); });
    K.raf(fr, dt => { acc += dt; const tot = placed[0] + placed[1] + placed[2] + drops.length;
      if (!picked && mode === "stock" && placed[0] + placed[1] + placed[2] >= 100 && (wait += dt) > 1800) tabs(bs[1]);
      while (acc > 22 && tot < 100) { acc -= 22; const need = tgt.map((t, b) => Math.max(0, t - placed[b] - drops.filter(d => d.b === b).length)), sum = need[0] + need[1] + need[2]; if (!sum) break; let r = Math.random() * sum, b = 0; while (r >= need[b]) r -= need[b++]; drops.push({ b, i: placed[b] + drops.filter(d => d.b === b).length, y: 80 }); break; }
      drops.forEach(d => d.y += dt * .5); const land = drops.filter(d => d.y >= 204 - Math.floor(d.i / 10) * 12.4); land.forEach(d => placed[d.b]++); drops = drops.filter(d => !land.includes(d));
      $("#rcmBk").innerHTML = [0, 1, 2].map(b => Array.from({ length: placed[b] }, (_, i) => cell(b, i)).join("")).join("");
      $("#rcmR").innerHTML = drops.map(d => `<rect x="${bx[d.b] - 58 + (d.i % 10) * 11.6}" y="${f1(d.y)}" width="10" height="10.8" rx="1.5" fill="${["var(--beat)", "var(--coral)", "var(--violet)"][d.b]}" opacity=".8"/>`).join(""); });
  } };



// ---------------------------------------------------------- slide 3





})();

// Swap the chosen visual into each slide. The original frame stays in the page, hidden, so its own wiring still finds what it expects.
(function () {
  const AX = window.AX, PICK = {"automate":{"1":"automate-1a","2":"automate-2a","3":"automate-3a"},"agent":{"1":"agent-1a","2":"agent-2a","3":"agent-3a"},"weights":{"2":"weights-2a","3":"weights-3a"},"ooms":{"1":"ooms-1a","2":"ooms-2b","3":"ooms-3b"},"molecules":{"1":"molecules-1a"},"bloom":{"1":"bloom-1a","2":"bloom-2a","3":"bloom-3a"},"fleet":{"1":"fleet-1a","2":"fleet-2a"},"gpulife":{"1":"gpulife-1a","2":"gpulife-2a","3":"gpulife-3a"},"saas":{"1":"saas-1a","2":"saas-2a","3":"saas-3a"},"neocloud":{"2":"neocloud-2a","3":"neocloud-3a"},"builders":{"1":"builders-1a"},"moat":{"1":"moat-1a","2":"moat-2b","3":"moat-3a"},"memory":{"1":"memory-1a","2":"memory-2a","3":"memory-3a"},"heat":{"1":"heat-1a","2":"heat-2a","3":"heat-3a"},"quantum":{"1":"quantum-1a","2":"quantum-2a"},"tokens":{"1":"tokens-1a","3":"tokens-3a"},"factory":{"1":"factory-1a","2":"factory-2a"},"openclaw":{"2":"openclaw-2a","3":"openclaw-3a"},"race":{"2":"race-2b"}};
  Object.keys(PICK).forEach(t => {
    const k = byId[t] && byId[t].viz; if (!k || !VIZ[k]) return;
    const base = VIZ[k], bi = VIZ_INIT[k], p = PICK[t];
    VIZ[k] = () => {
      const d = document.createElement("div"); d.innerHTML = base();
      const v = d.querySelector(".viz"); if (!v) return d.innerHTML;
      if (!v.querySelector(".frame")) { const hid = document.createElement("div"); hid.className = "v-old"; while (v.firstChild) hid.appendChild(v.firstChild); v.appendChild(hid); [1, 2, 3].forEach(n => { const f = document.createElement("div"); f.className = "frame f" + n; v.appendChild(f); }); }
      [1, 2, 3].forEach(s => { const id = p[s], o = id && AX[id], fr = v.querySelector(".frame.f" + s); if (!o || !fr) return;
        const nf = document.createElement("div"); nf.className = "frame f" + s + " v2-frame"; nf.dataset.v2 = id; nf.innerHTML = o.html(fr.innerHTML);
        fr.classList.remove("f" + s); fr.classList.add("v-old"); fr.before(nf); });
      return d.innerHTML;
    };
    VIZ_INIT[k] = root => {
      try { bi && bi(root); } catch (e) { console.warn(e); }
      root.querySelectorAll(".v2-frame").forEach(fr => { const o = AX[fr.dataset.v2]; if (!o) return; K.counters(fr); try { o.init && o.init(fr, root); } catch (e) { console.warn(e); } });
    };
  });
})();
