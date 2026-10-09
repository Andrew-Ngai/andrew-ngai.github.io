(() => {
"use strict";
const US = /*__US__*/null;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const NS = "http://www.w3.org/2000/svg";
const calm = matchMedia("(prefers-reduced-motion: reduce)").matches;
const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const MON = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const day = s => new Date(s.length === 7 ? s + "-15T00:00:00Z" : s + "T00:00:00Z");
const dLong = s => { const d = day(s); return `${MON[d.getUTCMonth()]} ${d.getUTCDate()}, ${d.getUTCFullYear()}`; };
const dShort = s => { const d = day(s); return `${MON[d.getUTCMonth()]} ${d.getUTCDate()}`; };
const dMonth = s => { const d = day(s); return `${MON[d.getUTCMonth()]} ${d.getUTCFullYear()}`; };
const qLabel = q => `Q${q.slice(5)} ${q.slice(0, 4)}`;
const qShort = q => `Q${q.slice(5)} ’${q.slice(2, 4)}`;
const pct = (a, b) => (a / b - 1) * 100;
const sgn = v => (v >= 0 ? "+" : "−") + Math.abs(Math.round(v)) + "%";
const $b = (v, d = 1) => "$" + v.toFixed(d) + "B";
const num = v => Math.round(v).toLocaleString("en-US");
const host = u => { try { return new URL(u).hostname.replace(/^www\./, ""); } catch (e) { return ""; } };
const sum = a => a.reduce((x, y) => x + (y || 0), 0);
const C = { s1: "#2f9fd8", s2: "#e0662f", s3: "#8a72f0", s4: "#c08400", s5: "#19a57a", muted: "#3f3866", amber: "#ffb23f", surface: "#15112b" };

/* ---------------------------------------------------------------- svg + tooltip helpers */
function el(tag, attrs = {}, parent) {
  const e = document.createElementNS(NS, tag);
  for (const k in attrs) if (attrs[k] !== undefined && attrs[k] !== null) e.setAttribute(k, attrs[k]);
  if (parent) parent.appendChild(e);
  return e;
}
function txt(parent, x, y, s, attrs = {}) { const t = el("text", { x, y, ...attrs }, parent); t.textContent = s; return t; }
function plot(host, h) {
  host.innerHTML = "";
  const w = Math.max(280, host.clientWidth);
  const svg = el("svg", { viewBox: `0 0 ${w} ${h}`, width: w, height: h, role: "img", "aria-label": host.dataset.label || "" }, host);
  return { svg, w, h };
}
const lin = (d0, d1, r0, r1) => v => r0 + (v - d0) / (d1 - d0) * (r1 - r0);
function nice(max, n = 4) {
  const raw = max / n, p = Math.pow(10, Math.floor(Math.log10(raw))), f = raw / p;
  const step = (f <= 1 ? 1 : f <= 2 ? 2 : f <= 2.5 ? 2.5 : f <= 5 ? 5 : 10) * p;
  const top = Math.ceil(max / step) * step;
  const ticks = []; for (let v = 0; v <= top + 1e-9; v += step) ticks.push(+v.toFixed(6));
  return { top, ticks };
}
function yGrid(svg, y, ticks, x0, x1, f) {
  const g = el("g", { class: "tick" }, svg);
  ticks.forEach(t => {
    el("line", { x1: x0, x2: x1, y1: y(t), y2: y(t), class: t === 0 ? "axis-line" : "" }, g);
    txt(g, x0 - 8, y(t) + 4, f(t), { "text-anchor": "end" });
  });
}
// column with a 4px rounded data end and a square baseline
function colPath(x, y0, y1, w, r = 4) {
  const top = Math.min(y0, y1), bot = Math.max(y0, y1), rr = Math.min(r, (bot - top) / 2, w / 2);
  return `M${x} ${bot}V${top + rr}Q${x} ${top} ${x + rr} ${top}H${x + w - rr}Q${x + w} ${top} ${x + w} ${top + rr}V${bot}Z`;
}
const tip = $("#tip");
function showTip(html, cx, cy) {
  tip.innerHTML = html; tip.hidden = false;
  const r = tip.getBoundingClientRect(), vw = innerWidth, vh = innerHeight;
  let x = cx + 16, y = cy + 16;
  if (x + r.width > vw - 8) x = cx - r.width - 16;
  if (x < 8) x = 8;
  if (y + r.height > vh - 8) y = cy - r.height - 16;
  if (y < 8) y = 8;
  tip.style.left = x + "px"; tip.style.top = y + "px";
}
const hideTip = () => { tip.hidden = true; };
const tipAt = (html, node) => { const b = node.getBoundingClientRect(); showTip(html, b.left + b.width / 2, b.top); };
const row = (c, name, val, cls = "") => `<div class="row ${cls}"><span>${c ? `<i style="--c:${c}"></i>` : ""}${esc(name)}</span><b>${esc(val)}</b></div>`;
// hover + keyboard on one mark
function hover(node, html, onIn, onOut) {
  node.addEventListener("pointermove", e => { showTip(typeof html === "function" ? html() : html, e.clientX, e.clientY); onIn && onIn(); });
  node.addEventListener("pointerleave", () => { hideTip(); onOut && onOut(); });
  node.addEventListener("focus", () => { tipAt(typeof html === "function" ? html() : html, node); onIn && onIn(); });
  node.addEventListener("blur", () => { hideTip(); onOut && onOut(); });
}
addEventListener("scroll", hideTip, { passive: true });

/* ---------------------------------------------------------------- derived readings */
function derive(D) {
  const M = {};
  const mq = D.money.quarters, big4 = D.money.companies.filter(c => c.id !== "ORCL");
  M.big4 = mq.map((q, i) => sum(big4.map(c => c.v[i])));
  const mi = mq.length - 1;
  M.money = { q: mq[mi], v: M.big4[mi], ya: M.big4[mi - 4], qa: mq[mi - 4] };
  M.y2025 = big4.map(c => ({ id: c.id, v: sum(mq.map((q, i) => q.startsWith("2025") ? c.v[i] : 0)) }));
  M.g26 = { low: sum(D.money.guidance.map(g => g.low)), high: sum(D.money.guidance.map(g => g.high)) };
  const cq = D.chips.quarters, ci = cq.length - 1;
  M.chips = { r: cq[ci], ya: cq[ci - 4], prev: cq[ci - 8] };
  const h = D.buildings.halves, hi = h.length - 1;
  M.bld = { r: h[hi], ya: h[hi - 2] };
  const g = D.power.gev, gi = g.length - 1, gq = g[gi].q;
  M.pow = { r: g[gi], ya: g.find(x => x.q === (+gq.slice(0, 4) - 1) + gq.slice(4)) };
  const hh = D.compute.h100, bb = D.compute.b200;
  M.cmp = { r: hh[hh.length - 1], base: hh[0], b: bb[bb.length - 1], bbase: bb[0], a: D.compute.a100[D.compute.a100.length - 1] };
  return M;
}
const nvMonths = end => { const d = day(end), m = d.getUTCMonth(); return `${MON[(m + 10) % 12]}–${MON[m]} ${d.getUTCFullYear()}`; };
const nvLabel = end => { const d = day(end); return `${MON[d.getUTCMonth()]} ’${String(d.getUTCFullYear()).slice(2)}`; };

/* ---------------------------------------------------------------- the board */
function spark(vals) {
  const w = 84, h = 42, max = Math.max(...vals), min = Math.min(...vals);
  const x = i => i / (vals.length - 1) * w, y = v => h - 3 - (v - min) / (max - min || 1) * (h - 8);
  const d = vals.map((v, i) => `${i ? "L" : "M"}${x(i).toFixed(1)} ${y(v).toFixed(1)}`).join("");
  return `<svg class="blk-spark" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none" aria-hidden="true"><path d="${d}" vector-effect="non-scaling-stroke"/><circle cx="${w}" cy="${y(vals[vals.length - 1]).toFixed(1)}" r="3"/></svg>`;
}
function board(D, M) {
  const B = [
    { k: "money", n: 1, name: "Money", v: `$${Math.round(M.money.v)}<small>B</small>`, d: `<b>${sgn(pct(M.money.v, M.money.ya))}</b> y/y`, l: `Capex at Microsoft, Alphabet, Amazon and Meta, ${qLabel(M.money.q)}`, s: M.big4 },
    { k: "chips", n: 2, name: "Chips", v: `$${M.chips.r.dc.toFixed(1)}<small>B</small>`, d: `<b>${sgn(pct(M.chips.r.dc, M.chips.ya.dc))}</b> y/y`, l: `Nvidia data center revenue, ${nvMonths(M.chips.r.end)}`, s: D.chips.quarters.map(q => q.dc) },
    { k: "buildings", n: 3, name: "Buildings", v: `${(M.bld.r.uc / 1000).toFixed(1)}<small>GW</small>`, d: `<b>${sgn(pct(M.bld.r.uc, M.bld.ya.uc))}</b> y/y`, l: `Under construction in CBRE’s primary markets, ${M.bld.r.p}`, s: D.buildings.halves.map(x => x.uc) },
    { k: "power", n: 4, name: "Power", v: `${M.pow.r.total}<small>GW</small>`, d: `<b>${sgn(pct(M.pow.r.total, M.pow.ya.total))}</b> y/y`, l: `GE Vernova gas turbine backlog plus slot reservations, ${qLabel(M.pow.r.q)}`, s: D.power.gev.map(x => x.total) },
    { k: "compute", n: 5, name: "Compute", v: `$${M.cmp.r.v.toFixed(2)}<small>/hr</small>`, d: `<b>${sgn(pct(M.cmp.r.v, M.cmp.base.v))}</b> since ${dShort(M.cmp.base.d)}`, l: `Silicon Data H100 rental index, ${dLong(M.cmp.r.d)}`, s: D.compute.h100.map(x => x.v) }
  ];
  const host = $("#board");
  host.innerHTML = `<div class="fb-lane"></div>` + B.map(b => `<a class="blk" data-k="${b.k}" href="#g-${b.k}" aria-label="${esc(b.name)}: ${esc(b.l)}. Jump to gauge ${b.n}.">
      <span class="blk-top"><i aria-hidden="true"></i>${b.name}<span class="n">U${b.n}</span></span>
      <span class="blk-v">${b.v}</span>
      <span class="blk-d">${b.d}</span>${spark(b.s)}
      <span class="blk-l">${esc(b.l)}</span></a>`).join("") + `<p class="board-note">Read it left to right. <b>Capex buys chips, the chips fill buildings, power feeds the buildings, and the buildings rent out compute.</b> If the rent keeps paying back the capex, the loop keeps spinning. Click any block to jump to its gauge.</p><svg class="traces" aria-hidden="true"></svg>`;
  const svg = $(".traces", host);
  const draw = () => {
    svg.innerHTML = "";
    const R = host.getBoundingClientRect(), rect = k => { const r = $(`.blk[data-k="${k}"]`, host).getBoundingClientRect(); return { l: r.left - R.left, r: r.right - R.left, t: r.top - R.top, b: r.bottom - R.top, cx: (r.left + r.right) / 2 - R.left, cy: (r.top + r.bottom) / 2 - R.top }; };
    const m = rect("money"), c = rect("chips"), b = rect("buildings"), p = rect("power"), o = rect("compute");
    const wide = getComputedStyle(host).gridTemplateColumns.split(" ").length >= 4;
    const W = [];
    if (wide) {
      const fy = Math.min(m.t, o.t) - 26;
      W.push({ a: "money", z: "chips", d: `M${m.r} ${m.cy}H${c.l}`, lab: "buys", lx: (m.r + c.l) / 2, ly: m.cy - 10 });
      W.push({ a: "chips", z: "buildings", d: `M${c.r} ${c.cy}H${b.l}`, lab: "fill", lx: (c.r + b.l) / 2, ly: c.cy - 10 });
      W.push({ a: "buildings", z: "compute", d: `M${b.r} ${b.cy}H${o.l}`, lab: "rent out", lx: (b.r + o.l) / 2, ly: b.cy - 10 });
      W.push({ a: "power", z: "buildings", d: `M${p.cx} ${p.t}V${b.b}`, lab: "feeds", lx: p.cx + 34, ly: (p.t + b.b) / 2 + 5 });
      W.push({ a: "compute", z: "money", d: `M${o.cx} ${o.t}V${fy}H${m.cx}V${m.t}`, lab: "rent pays back the capex", lx: (o.cx + m.cx) / 2, ly: fy - 8 });
      W.push({ pin: 1, a: "money", d: `M${m.l - 36} ${m.cy}H${m.l - 6}`, lab: "IN", lx: m.l - 36, ly: m.cy - 10, anchor: "start" });
      W.push({ pin: 1, a: "compute", d: `M${o.r + 6} ${o.cy}H${o.r + 36}`, lab: "OUT", lx: o.r + 36, ly: o.cy - 10, anchor: "end", noArrow: 1 });
    } else {
      const rx = R.width - Math.max(12, (R.width - o.r) / 2);
      W.push({ a: "money", z: "chips", d: `M${m.l + 40} ${m.b}V${c.t}`, lab: "buys", lx: m.l + 52, ly: (m.b + c.t) / 2 + 5, anchor: "start" });
      W.push({ a: "chips", z: "buildings", d: `M${b.cx} ${c.b}V${b.t}`, lab: "fill", lx: b.cx + 12, ly: (c.b + b.t) / 2 + 5, anchor: "start" });
      W.push({ a: "power", z: "buildings", d: `M${p.l} ${p.cy}H${b.r}`, lab: "", lx: 0, ly: 0 });
      W.push({ a: "buildings", z: "compute", d: `M${b.cx} ${b.b}V${o.t}`, lab: "rent out", lx: b.cx + 12, ly: (b.b + o.t) / 2 + 5, anchor: "start" });
      W.push({ a: "compute", z: "money", d: `M${o.r} ${o.cy}H${rx}V${m.cy}H${m.r}`, lab: "", lx: 0, ly: 0 });
    }
    let k = 0;
    W.forEach(w => {
      const g = el("g", { "data-a": w.a, "data-z": w.z || "" }, svg);
      const path = el("path", { d: w.d, class: "trace" }, g);
      const len = path.getTotalLength();
      if (!w.pin) el("path", { d: w.d, class: "trace-pulse", style: `--len:${len.toFixed(0)};--delay:${(k++ * 0.42).toFixed(2)}s` }, g);
      const s = path.getPointAtLength(0), e = path.getPointAtLength(len), e2 = path.getPointAtLength(Math.max(0, len - 6));
      el("circle", { cx: s.x, cy: s.y, r: 3.2, class: "pad-dot" }, g);
      if (!w.noArrow) { const ang = Math.atan2(e.y - e2.y, e.x - e2.x) * 180 / Math.PI; el("path", { d: "M0 0L-8 -4.5L-8 4.5Z", class: "arrow", transform: `translate(${e.x} ${e.y}) rotate(${ang})` }, g); }
      else el("circle", { cx: e.x, cy: e.y, r: 3.2, class: "pad-dot" }, g);
      if (w.lab) txt(g, w.lx, w.ly, w.lab, { class: w.pin ? "pin-label" : "trace-label", "text-anchor": w.anchor || "middle" });
    });
    if (!wide) { // vertical labels along the long return trace
      const g = $$("g", svg).find(x => x.dataset.a === "compute" && x.dataset.z === "money");
      const rx = R.width - Math.max(12, (R.width - o.r) / 2);
      if (g) txt(g, rx - 8, (m.cy + o.cy) / 2, "rent pays back the capex", { class: "trace-label", "text-anchor": "middle", transform: `rotate(-90 ${rx - 8} ${(m.cy + o.cy) / 2})` });
      const pg = $$("g", svg).find(x => x.dataset.a === "power");
      if (pg) txt(pg, (p.l + b.r) / 2, p.cy - 9, "feeds", { class: "trace-label", "text-anchor": "middle" });
    }
  };
  draw();
  let rt = 0; addEventListener("resize", () => { cancelAnimationFrame(rt); rt = requestAnimationFrame(draw); });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(draw);
  $$(".blk", host).forEach(b => {
    const k = b.dataset.k, on = v => $$("g", svg).forEach(g => g.classList.toggle("lit", v && (g.dataset.a === k || g.dataset.z === k)));
    b.addEventListener("mouseenter", () => on(true)); b.addEventListener("mouseleave", () => on(false));
    b.addEventListener("focus", () => on(true)); b.addEventListener("blur", () => on(false));
  });
  if (!calm && "IntersectionObserver" in window) {
    const io = new IntersectionObserver(es => { if (es[0].isIntersecting) { host.classList.add("run"); io.disconnect(); } }, { threshold: .35 });
    io.observe(host);
  }
}

/* ---------------------------------------------------------------- gauge scaffolding */
function gaugeHTML(g) {
  const params = `<table class="ptab spec"><caption>Parameters</caption><thead><tr><th scope="col">Reading</th><th scope="col">Latest</th><th scope="col">${g.cmpHead || "A year earlier"}</th><th scope="col">Change</th></tr></thead><tbody>${g.params.map(r => `<tr><th scope="row">${r[0]}</th><td>${r[1]}</td><td>${r[2]}</td><td class="chg">${r[3]}</td></tr>`).join("")}</tbody></table>`;
  const figs = g.figs.map(f => `<figure class="fig" id="${f.id}">
      <div class="fig-head"><span class="fig-n">Figure ${g.n}.${f.n}</span><span class="fig-t">${f.t}</span></div>
      ${f.pre || ""}<div class="legend" ${f.legend ? "" : "hidden"}>${f.legend || ""}</div>
      <div class="plot" data-label="${esc(f.t)}"></div>
      <figcaption>${f.cap}</figcaption>
      ${f.post || ""}
      <details class="numbers"><summary>Show the numbers</summary><div class="tscroll">${f.table}</div></details>
    </figure>`).join("");
  return `<section class="gauge" id="g-${g.k}" aria-labelledby="g-${g.k}-h"><div class="wrap">
    <header class="g-head"><span class="g-num" aria-hidden="true">${g.n}</span><h2 id="g-${g.k}-h">${g.name}</h2><p class="g-what">${g.what}</p>
      <div class="g-big"><b>${g.big}</b><span>${g.bigNote}</span></div></header>
    <div class="g-grid">
      <div class="g-side"><p class="reading">${esc(g.copy.reading)}</p>${params}
        <div class="watch"><b>Watch for</b>${esc(g.copy.watch)}</div>
        ${g.copy.thesis ? `<p class="g-thesis">Related thesis: <a href="../#${g.copy.thesis[0]}">${esc(g.copy.thesis[1])}</a></p>` : ""}
      </div>
      <div class="figs">${figs}</div>
    </div>
    <details class="sources"><summary>Sources and notes</summary><div class="notes">${g.notes.map(n => `<p>${n}</p>`).join("")}</div><ol>${g.sources.map(([l, u]) => (u.startsWith("#") ? `<li><a href="${esc(u)}">${esc(l)}</a></li>` : `<li><a href="${esc(u)}" target="_blank" rel="noopener">${esc(l)}</a> <span>(${esc(host(u))})</span></li>`)).join("")}</ol></details>
  </div></section>`;
}
const link = (v, u) => u ? `<a href="${esc(u)}" target="_blank" rel="noopener">${v}</a>` : v;
const table = (head, rows) => `<table class="ptab"><thead><tr>${head.map((h, i) => `<th scope="col">${h}</th>`).join("")}</tr></thead><tbody>${rows.map(r => `<tr>${r.map((c, i) => i ? `<td>${c}</td>` : `<th scope="row">${c}</th>`).join("")}</tr>`).join("")}</tbody></table>`;
const lgItem = (name, c, opts = {}) => `<button type="button" class="lg${opts.static ? " static" : ""}" ${opts.id ? `data-id="${opts.id}"` : ""} ${opts.static ? "tabindex=\"-1\"" : `aria-pressed="${opts.on ? "true" : "false"}"`}><i class="${opts.shape || ""}" style="--c:${c}"></i>${esc(name)}</button>`;

/* ---------------------------------------------------------------- 1. money */
const CO = { MSFT: C.s1, GOOGL: C.s2, AMZN: C.s3, META: C.s4, ORCL: C.s5 };
function capexChart(host, D, state) {
  const { svg, w, h } = plot(host, host.clientWidth < 560 ? 270 : 320);
  const Q = D.money.quarters, cos = D.money.companies.filter(c => state[c.id]);
  const tot = Q.map((q, i) => sum(cos.map(c => c.v[i])));
  const L = 46, R = 14, T = 26, B = 30;
  const { top, ticks } = nice(Math.max(...tot) * 1.04, 4);
  const y = lin(0, top, h - B, T), band = (w - L - R) / Q.length, bw = Math.min(24, band * .62);
  yGrid(svg, y, ticks, L, w - R, v => "$" + v + "B");
  const hl = el("rect", { class: "hl", y: T - 10, height: h - B - T + 10, width: band, x: -999 }, svg);
  Q.forEach((q, i) => {
    const x = L + i * band + (band - bw) / 2;
    let acc = 0; const segs = cos.filter(c => c.v[i]);
    segs.forEach((c, j) => {
      const v0 = acc, v1 = acc + c.v[i]; acc = v1;
      const ya = y(v0) - (j ? 1 : 0), yb = y(v1) + 1;
      const isTop = j === segs.length - 1;
      el("path", { d: isTop ? colPath(x, ya, Math.min(yb, ya - 1), bw) : `M${x} ${ya}V${Math.min(yb, ya - 1)}H${x + bw}V${ya}Z`, fill: CO[c.id] }, svg);
    });
    if (q.endsWith("Q1")) txt(svg, x + bw / 2, h - B + 18, q.slice(0, 4), { "text-anchor": "middle" });
  });
  const li = Q.length - 1;
  txt(svg, L + li * band + band / 2, y(tot[li]) - 8, $b(tot[li]), { "text-anchor": "end", class: "lbl", dx: bw / 2 });
  txt(svg, L + li * band + band / 2, y(tot[li]) - 24, qLabel(Q[li]), { "text-anchor": "end", class: "lbl-dim", dx: bw / 2 });
  Q.forEach((q, i) => {
    const hit = el("rect", { class: "hit", x: L + i * band, y: T - 10, width: band, height: h - B - T + 10, tabindex: 0, role: "img", "aria-label": `${qLabel(q)}: ${$b(tot[i])}` }, svg);
    hover(hit, () => `<div class="t-h">${qLabel(q)}</div>` + [...cos].reverse().map(c => row(CO[c.id], c.name, $b(c.v[i]))).join("") + row(null, "Total shown", $b(tot[i]), "sum"),
      () => hl.setAttribute("x", L + i * band), () => hl.setAttribute("x", -999));
  });
}
function guideChart(host, D, M) {
  const rows = D.money.guidance.map(g => ({ ...g, y25: M.y2025.find(x => x.id === g.id).v }));
  const { svg, w, h } = plot(host, 44 * rows.length + 40);
  const L = host.clientWidth < 520 ? 74 : 92, R = 96, T = 10, B = 26;
  const x = lin(0, 250, L, w - R), rh = (h - T - B) / rows.length;
  const g = el("g", { class: "tick" }, svg);
  (w < 520 ? [0, 100, 200] : [0, 50, 100, 150, 200, 250]).forEach(t => { el("line", { x1: x(t), x2: x(t), y1: T, y2: h - B, class: t ? "" : "axis-line" }, g); txt(g, x(t), h - B + 17, "$" + t + "B", { "text-anchor": "middle" }); });
  rows.forEach((r, i) => {
    const cy = T + rh * i + rh / 2, c = CO[r.id];
    txt(svg, L - 12, cy + 4, r.name, { "text-anchor": "end", class: "lbl" });
    el("line", { x1: x(r.y25), x2: x(r.low), y1: cy, y2: cy, stroke: c, "stroke-width": 1, opacity: .6 }, svg);
    el("circle", { cx: x(r.y25), cy, r: 5, fill: C.surface, stroke: c, "stroke-width": 2 }, svg);
    if (r.high > r.low) el("rect", { x: x(r.low), y: cy - 6, width: x(r.high) - x(r.low), height: 12, rx: 4, fill: c }, svg);
    else el("circle", { cx: x(r.low), cy, r: 6, fill: c, stroke: C.surface, "stroke-width": 2 }, svg);
    txt(svg, x(r.high) + 12, cy + 4, r.high > r.low ? `$${r.low}–${r.high}B` : `~$${r.low}B`, { class: "lbl" });
    const hit = el("rect", { class: "hit", x: 0, y: cy - rh / 2, width: w, height: rh, tabindex: 0 }, svg);
    hover(hit, `<div class="t-h">${esc(r.name)}</div>${row(null, "2025 actual", $b(r.y25))}${row(c, "2026 guidance", r.high > r.low ? `$${r.low}–${r.high}B` : `~$${r.low}B`)}<p>${esc(r.basis)}. Given ${dLong(r.date)}.</p>`);
  });
}
function money(D, M) {
  const cos = D.money.companies, mi = D.money.quarters.length - 1;
  const q = D.money.quarters[mi], qa = D.money.quarters[mi - 4];
  const orc = cos.find(c => c.id === "ORCL"), oi = orc.v.length - 1;
  const y25 = sum(M.y2025.map(x => x.v));
  const g = {
    k: "money", n: 1, name: "Money", what: "Capital spending by the biggest AI buyers", copy: D.copy.money,
    big: $b(M.money.v), bigNote: `Big-four capex, ${qLabel(q)}, <em>${sgn(pct(M.money.v, M.money.ya))}</em> y/y`,
    params: [
      [`Big four, ${qLabel(q)}`, $b(M.money.v), $b(M.money.ya), sgn(pct(M.money.v, M.money.ya))],
      ...cos.filter(c => c.id !== "ORCL").map(c => [c.name, $b(c.v[mi]), $b(c.v[mi - 4]), sgn(pct(c.v[mi], c.v[mi - 4]))]),
      [`Oracle, ${D.money.oracle_latest.label.replace(/ \(.*\)/, "")}`, $b(D.money.oracle_latest.v), $b(orc.v[mi - 3]), sgn(pct(D.money.oracle_latest.v, orc.v[mi - 3]))],
      ["Big-four 2026 guidance, summed", `$${M.g26.low}–${M.g26.high}B`, `$${Math.round(y25)}B in 2025`, `${sgn(pct(M.g26.low, y25))}–${Math.round(pct(M.g26.high, y25))}%`]
    ],
    figs: [
      { n: 1, id: "f-capex", t: "Quarterly capex, by company", legend: cos.map(c => lgItem(c.name, CO[c.id], { id: c.id, on: c.id !== "ORCL" })).join(""),
        cap: `Calendar quarters, US$ billions. Tap a company to add or remove it. Oracle is off by default because its fiscal quarters end a month earlier (latest: ${$b(D.money.oracle_latest.v)} in Jun–Aug 2026). Definitions differ slightly by company; see notes.`,
        table: table(["Quarter", ...cos.map(c => c.name)], D.money.quarters.map((q, i) => [qLabel(q), ...cos.map(c => link(c.v[i].toFixed(1), c.src[i]))])) },
      { n: 2, id: "f-guide", t: "2025 actual against 2026 guidance",
        legend: lgItem("2025 actual", "#aaa2cf", { static: 1, shape: "ring" }) + lgItem("2026 guidance", "#aaa2cf", { static: 1 }),
        cap: `US$ billions. Microsoft’s figure is calendar 2026 and includes finance leases. Amazon guides on cash capex, a little below the gross figure charted above. Together: about $${M.g26.low}–${M.g26.high}B, my sum of each company’s own guidance.`,
        table: table(["Company", "2025 actual", "2026 guidance", "Given"], D.money.guidance.map(gd => [gd.name, $b(M.y2025.find(x => x.id === gd.id).v), link(gd.high > gd.low ? `$${gd.low}–${gd.high}B` : `~$${gd.low}B`, gd.src), dLong(gd.date)])) }
    ],
    notes: [
      "Microsoft: capital expenditures including finance leases, as stated by the CFO each quarter (calendar quarters shown; Microsoft’s fiscal year ends in June). Alphabet and Amazon: purchases of property and equipment. Meta: capital expenditures including principal payments on finance leases. Oracle: capital expenditures, fiscal quarters mapped to the calendar quarter they mostly cover.",
      "From mid-2026, Microsoft books more data center leases as operating leases, which drop out of capex. Microsoft says this alone moved its calendar-2026 expectation from about $190B to about $175B.",
      "None of these companies breaks out AI-only capex, so the totals include offices, warehouses and networks. Every quarterly value in the table links to its filing or earnings release."
    ],
    sources: [
      ["Microsoft FY26 Q4 earnings and CFO remarks", cos[0].src[mi]], ["Alphabet 10-Q filings (SEC EDGAR)", cos[1].src[mi]], ["Amazon 10-Q filings (SEC EDGAR)", cos[2].src[mi]],
      ["Meta Q2 2026 results", cos[3].src[mi]], ["Oracle 10-Q filings (SEC EDGAR)", D.money.oracle_latest.src],
      ...D.money.guidance.map(gd => [`${gd.name} 2026 guidance (${dMonth(gd.date)})`, gd.src])
    ]
  };
  return g;
}

/* ---------------------------------------------------------------- 2. chips */
function nvChart(host, D) {
  const { svg, w, h } = plot(host, host.clientWidth < 560 ? 260 : 300);
  const Q = D.chips.quarters, O = D.chips.outlook, n = Q.length + 1;
  const L = 46, R = 14, T = 26, B = 30;
  const top = nice(O.total * (1 + O.pm / 100) * 1.05, 4);
  const y = lin(0, top.top, h - B, T), band = (w - L - R) / n, bw = Math.min(24, band * .62);
  yGrid(svg, y, top.ticks, L, w - R, v => "$" + v + "B");
  const hl = el("rect", { class: "hl", y: T - 10, height: h - B - T + 10, width: band, x: -999 }, svg);
  Q.forEach((q, i) => {
    const x = L + i * band + (band - bw) / 2;
    el("path", { d: `M${x} ${y(0)}V${y(q.dc)}H${x + bw}V${y(0)}Z`, fill: C.s3 }, svg);
    el("path", { d: colPath(x, y(q.dc) - 2, y(q.total), bw), fill: C.muted }, svg);
    const d = day(q.end);
    if (d.getUTCMonth() <= 1 || i === Q.length - 1) txt(svg, x + bw / 2, h - B + 18, i === Q.length - 1 ? nvLabel(q.end) : String(d.getUTCFullYear()), { "text-anchor": "middle" });
  });
  // next-quarter outlook: a dashed outline, because it's a projection
  const xo = L + Q.length * band + (band - bw) / 2;
  el("path", { d: colPath(xo, y(0), y(O.total), bw), fill: "none", stroke: "#aaa2cf", "stroke-dasharray": "3 3", "stroke-width": 1.2 }, svg);
  el("line", { x1: xo + bw / 2, x2: xo + bw / 2, y1: y(O.total * (1 - O.pm / 100)), y2: y(O.total * (1 + O.pm / 100)), stroke: "#aaa2cf", "stroke-width": 1.2 }, svg);
  txt(svg, xo + bw / 2, y(O.total * (1 + O.pm / 100)) - 8, "Outlook", { "text-anchor": "middle", class: "lbl-dim" });
  const last = Q[Q.length - 1], lx = L + (Q.length - 1) * band + band / 2;
  txt(svg, lx, y(last.total) - 8, $b(last.dc), { "text-anchor": "middle", class: "lbl" });
  [...Q, { outlook: 1 }].forEach((q, i) => {
    const hit = el("rect", { class: "hit", x: L + i * band, y: T - 10, width: band, height: h - B - T + 10, tabindex: 0 }, svg);
    hover(hit, () => q.outlook
      ? `<div class="t-h">Outlook, ${q.fq || "next quarter"}</div>${row(null, "Total revenue", `$${O.total}B ±${O.pm}%`)}<p>Given ${dLong(O.date)}. Assumes no data center compute revenue from China.</p>`
      : `<div class="t-h">${q.fq.replace("FY", "FY ").replace("Q", " Q")}, ${nvMonths(q.end)}</div>${row(C.s3, "Data center", $b(q.dc, 2))}${row(C.muted, "Everything else", $b(q.total - q.dc, 2))}${row(null, "Total revenue", $b(q.total, 2), "sum")}`,
      () => hl.setAttribute("x", L + i * band), () => hl.setAttribute("x", -999));
  });
}
function cowosChart(host, D) {
  const { svg, w, h } = plot(host, 220);
  const E = D.chips.cowos.map(e => ({ ...e, lo: e.wpm_low ?? e.wpm, hi: e.wpm_high ?? e.wpm }));
  const years = [...new Set(E.map(e => e.year))].sort();
  const L = 46, R = 14, T = 20, B = 28;
  const { top, ticks } = nice(Math.max(...E.map(e => e.hi)) * 1.08, 4);
  const y = lin(0, top, h - B, T), band = (w - L - R) / years.length;
  yGrid(svg, y, ticks, L, w - R, v => v ? (v / 1000) + "k" : "0");
  years.forEach((yr, i) => {
    const es = E.filter(e => e.year === yr), cx = L + band * i + band / 2;
    const lo = Math.min(...es.map(e => e.lo)), hi = Math.max(...es.map(e => e.hi));
    el("rect", { x: cx - 5, y: y(hi), width: 10, height: Math.max(3, y(lo) - y(hi)), rx: 4, fill: C.s1, opacity: .35 }, svg);
    es.forEach((e, j) => {
      const off = (j - (es.length - 1) / 2) * 9, mid = (e.lo + e.hi) / 2;
      const gg = el("g", { tabindex: 0, class: "mark-focus" }, svg);
      if (e.hi > e.lo) el("line", { x1: cx + off, x2: cx + off, y1: y(e.hi), y2: y(e.lo), stroke: C.s1, "stroke-width": 2 }, gg);
      el("circle", { cx: cx + off, cy: y(mid), r: 4.5, fill: C.s1, stroke: C.surface, "stroke-width": 2 }, gg);
      el("rect", { x: cx + off - 12, y: y(e.hi) - 12, width: 24, height: Math.max(24, y(e.lo) - y(e.hi) + 24), class: "hit" }, gg);
      hover(gg, `<div class="t-h">${yr}: ${e.hi > e.lo ? `${num(e.lo)}–${num(e.hi)}` : num(e.lo)} wafers a month</div><p>${esc(e.who)}, ${dLong(e.date)}. ${e.who.startsWith("KGI") ? "Analyst estimate." : "Press estimate, not a TSMC figure."}</p>`);
    });
    txt(svg, cx, h - B + 18, String(yr), { "text-anchor": "middle" });
    txt(svg, cx + 14, y(hi) - 2, hi > lo ? `${Math.round(lo / 1000)}–${Math.round(hi / 1000)}k` : `${Math.round(hi / 1000)}k`, { class: "lbl" });
  });
}
function chips(D, M) {
  const r = M.chips.r, ya = M.chips.ya, Q = D.chips.quarters;
  const prevQ = Q.find(q => q.fq === D.chips.outlook.fq.replace(/FY(\d{4})/, (m, yy) => "FY" + (yy - 1)));
  const v = D.chips.visibility;
  const e26 = D.chips.cowos.filter(e => e.year === 2026), e25 = D.chips.cowos.filter(e => e.year === 2025);
  const rng = es => `${Math.round(Math.min(...es.map(e => e.wpm_low ?? e.wpm)) / 1000)}–${Math.round(Math.max(...es.map(e => e.wpm_high ?? e.wpm)) / 1000)}k`;
  return {
    k: "chips", n: 2, name: "Chips", what: "What the money buys: Nvidia’s data center business and the packaging behind it", copy: D.copy.chips,
    big: $b(r.dc), bigNote: `Nvidia data center revenue, ${nvMonths(r.end)}, <em>${sgn(pct(r.dc, ya.dc))}</em> y/y`,
    params: [
      ["Data center revenue", $b(r.dc), $b(ya.dc), sgn(pct(r.dc, ya.dc))],
      ["Total revenue", $b(r.total), $b(ya.total), sgn(pct(r.total, ya.total))],
      ["Data center share of revenue", Math.round(r.dc / r.total * 100) + "%", Math.round(ya.dc / ya.total * 100) + "%", "—"],
      ["Next-quarter outlook, total revenue", `$${D.chips.outlook.total}B ±${D.chips.outlook.pm}%`, prevQ ? $b(prevQ.total) : "—", prevQ ? sgn(pct(D.chips.outlook.total, prevQ.total)) : "—"],
      ["TSMC CoWoS wafers a month, year end (est.)", rng(e26), `${rng(e25)} in 2025`, "—"]
    ],
    figs: [
      { n: 1, id: "f-nv", t: "Nvidia revenue by quarter", legend: lgItem("Data center", C.s3, { static: 1 }) + lgItem("Everything else", C.muted, { static: 1 }) + lgItem("Next-quarter outlook", "#aaa2cf", { static: 1, shape: "ring" }),
        post: `<ul class="quotes">${(D.copy.chips.quotes || []).map(q => `<li>“${esc(q.q)}”<span>${esc(q.who)}, ${dLong(q.d)}. ${esc(q.note)} <a href="${esc(q.src)}" target="_blank" rel="noopener">Source</a></span></li>`).join("")}</ul>`,
        cap: `US$ billions, Nvidia fiscal quarters (labelled by the month they end). The label is data center revenue for the latest quarter. The dashed column is the company’s outlook for the quarter ending in late October: $${D.chips.outlook.total}B ±${D.chips.outlook.pm}% of total revenue.`,
        table: table(["Quarter", "Ends", "Data center", "Total"], Q.map(q => [q.fq, dLong(q.end), link(q.dc.toFixed(2), q.src), q.total.toFixed(2)])) },
      { n: 2, id: "f-cowos", t: "TSMC CoWoS packaging capacity, estimates",
        cap: "Wafers a month at year end. Each dot is one published estimate; the band spans them. TSMC doesn’t publish this number, so these come from Taiwan press and broker research relayed by TrendForce.",
        table: table(["Year", "Estimate", "Who", "When"], D.chips.cowos.map(e => [String(e.year), link(e.wpm ? num(e.wpm) : `${num(e.wpm_low)}–${num(e.wpm_high)}`, e.src), esc(e.who), dLong(e.date)])) }
    ],
    notes: [
      "Data center and total revenue come from each quarter’s Nvidia CFO commentary or earnings release. Nvidia’s fiscal year ends in late January, so its fiscal 2027 second quarter ran from late April to late July 2026.",
      "Neither of the management quotes above is a disclosed bookings number. Nvidia doesn’t report bookings."
    ],
    sources: [
      ["Nvidia Q2 FY2027 CFO commentary", r.src], ["Nvidia Q3 FY2027 outlook", D.chips.outlook.src],
      ...v.map(x => [`${x.who.split(",")[0]}, ${dMonth(x.date)}`, x.src]),
      ...[...new Map(D.chips.cowos.map(e => [e.src, e])).values()].map(e => [`CoWoS estimate: ${e.who} (${dMonth(e.date)})`, e.src])
    ]
  };
}

/* ---------------------------------------------------------------- 3. buildings */
function ucChart(host, D) {
  const H = D.buildings.halves, small = host.clientWidth < 560;
  const { svg, w, h } = plot(host, small ? 330 : 360);
  const L = 52, R = 14, T = 24, B = 26, gap = 34, h1 = (h - T - B - gap) * .66;
  const band = (w - L - R) / H.length, bw = Math.min(24, band * .5);
  const top = nice(Math.max(...H.map(x => x.uc)) * 1.06, 4), y = lin(0, top.top, T + h1, T);
  yGrid(svg, y, top.ticks, L, w - R, v => v ? num(v) : "0");
  txt(svg, L, T - 10, "Under construction, MW", { class: "lbl-dim" });
  const y2top = T + h1 + gap, y2 = lin(0, 4, h - B, y2top);
  yGrid(svg, y2, [0, 2, 4], L, w - R, v => v + "%");
  txt(svg, L, y2top - 10, "Vacancy", { class: "lbl-dim" });
  const hl = el("rect", { class: "hl", y: T - 8, height: h - B - T + 8, width: band, x: -999 }, svg);
  H.forEach((p, i) => {
    const x = L + i * band + (band - bw) / 2;
    el("path", { d: colPath(x, y(0), y(p.uc), bw), fill: C.s1 }, svg);
    txt(svg, x + bw / 2, h - B + 17, small ? p.p.replace(" 20", " ’") : p.p, { "text-anchor": "middle" });
  });
  const pts = H.map((p, i) => [L + i * band + band / 2, y2(p.vac)]);
  el("path", { d: pts.map((p, i) => `${i ? "L" : "M"}${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(""), fill: "none", stroke: C.s2, "stroke-width": 2, "stroke-linejoin": "round" }, svg);
  pts.forEach(p => el("circle", { cx: p[0], cy: p[1], r: 4, fill: C.s2, stroke: C.surface, "stroke-width": 2 }, svg));
  const li = H.length - 1;
  txt(svg, L + li * band + band / 2, y(H[li].uc) - 8, num(H[li].uc) + " MW", { "text-anchor": "middle", class: "lbl" });
  txt(svg, pts[li][0], pts[li][1] - 10, H[li].vac + "%", { "text-anchor": "middle", class: "lbl" });
  txt(svg, pts[0][0], pts[0][1] + 18, H[0].vac + "%", { "text-anchor": "middle", class: "lbl-dim" });
  H.forEach((p, i) => {
    const hit = el("rect", { class: "hit", x: L + i * band, y: T - 8, width: band, height: h - B - T + 8, tabindex: 0 }, svg);
    hover(hit, `<div class="t-h">${p.p}, CBRE primary markets</div>${row(C.s1, "Under construction", num(p.uc) + " MW")}${p.inv ? row(null, "Inventory", num(p.inv) + " MW") : ""}${row(C.s2, "Vacancy", p.vac + "%")}`,
      () => hl.setAttribute("x", L + i * band), () => hl.setAttribute("x", -999));
  });
}
const SHORT = { "Microsoft Fairwater Wisconsin": "Fairwater, Wis.", "Anthropic-Amazon New Carlisle (Project Rainier)": "Rainier, Ind.", "Meta Hyperion": "Hyperion, La.", "Colossus 2": "Colossus 2, Memphis", "OpenAI Stargate Shackelford (Vantage Frontier)": "Stargate Shackelford, Texas", "Meta Prometheus": "Prometheus, Ohio" };
function campusMap(host, D) {
  const { svg, w, h } = plot(host, Math.round(host.clientWidth * US.h / US.w));
  const k = w / US.w, P = US.proj;
  const proj = (lon, lat) => {
    const phi = lat * Math.PI / 180, th = P.n * (lon - P.lon0) * Math.PI / 180, rho = Math.sqrt(P.C - 2 * P.n * Math.sin(phi)) / P.n;
    return [(P.tx + rho * Math.sin(th) * P.k) * k, (P.ty - (P.rho0 - rho * Math.cos(th)) * P.k) * k];
  };
  el("path", { d: US.d, transform: `scale(${k})`, fill: "#1b1640", stroke: "#2f2860", "stroke-width": 1 / k, "stroke-linejoin": "round" }, svg);
  const cs = [...D.buildings.campuses].sort((a, b) => b.planned_gw - a.planned_gw);
  const K = Math.max(9, w * .024);
  cs.forEach(c => {
    const [x, y] = proj(c.lon, c.lat), rp = Math.sqrt(c.planned_gw) * K, ro = Math.sqrt(c.operating_gw || 0) * K;
    const g = el("g", { tabindex: 0, class: "mark-focus" }, svg);
    el("circle", { cx: x, cy: y, r: rp, fill: "rgba(47,159,216,.12)", stroke: C.s1, "stroke-width": 1.6 }, g);
    if (ro > 0) el("circle", { cx: x, cy: y, r: ro, fill: C.s1, stroke: C.surface, "stroke-width": 1.5 }, g);
    hover(g, `<div class="t-h">${esc(c.name)}</div>${row(null, "Chips owned by", c.owner)}${row(null, "Where", c.place)}${row(C.s1, "Planned IT power", c.planned_gw.toFixed(2) + " GW")}${row(C.s1, "Operating now", (c.operating_gw || 0).toFixed(2) + " GW")}<p>${esc(c.status)}. ${esc(c.target)}.</p>`);
    g.addEventListener("click", () => window.open(c.src, "_blank", "noopener"));
    g.addEventListener("keydown", e => { if (e.key === "Enter") window.open(c.src, "_blank", "noopener"); });
    c._xy = [x, y, rp];
  });
  // place each label on the first side that doesn't collide with a circle or an earlier label
  if (w >= 420) {
    const boxes = cs.map(c => ({ l: c._xy[0] - c._xy[2], r: c._xy[0] + c._xy[2], t: c._xy[1] - c._xy[2], b: c._xy[1] + c._xy[2], circle: c }));
    const hitBox = (a, b) => a.l < b.r && a.r > b.l && a.t < b.b && a.b > b.t;
    cs.filter(c => SHORT[c.name]).forEach(c => {
      const [x, y, rp] = c._xy;
      const t = txt(svg, 0, 0, SHORT[c.name], { class: "lbl" });
      t.setAttribute("style", "paint-order:stroke;stroke:#15112b;stroke-width:4px;stroke-linejoin:round;pointer-events:none");
      const bw = t.getComputedTextLength(), bh = 13;
      const opts = [[x + rp + 6, y + 4, "start"], [x - rp - 6, y + 4, "end"], [x, y - rp - 7, "middle"], [x, y + rp + 15, "middle"], [x + rp + 4, y - rp - 2, "start"], [x - rp - 4, y + rp + 12, "end"]];
      let pick = opts[0];
      for (const o of opts) {
        const l = o[2] === "start" ? o[0] : o[2] === "end" ? o[0] - bw : o[0] - bw / 2;
        const box = { l, r: l + bw, t: o[1] - bh + 2, b: o[1] + 3 };
        if (box.l < 2 || box.r > w - 2) continue;
        if (!boxes.some(b => b.circle !== c && hitBox(box, b))) { pick = o; boxes.push(box); break; }
      }
      t.setAttribute("x", pick[0]); t.setAttribute("y", pick[1]); t.setAttribute("text-anchor", pick[2]);
    });
  }
}
function buildings(D, M) {
  const r = M.bld.r, ya = M.bld.ya, cs = D.buildings.campuses;
  const big = [...cs].sort((a, b) => b.planned_gw - a.planned_gw)[0];
  return {
    k: "buildings", n: 3, name: "Buildings", what: "Data center construction and the biggest AI campuses", copy: D.copy.buildings,
    big: (r.uc / 1000).toFixed(1) + " GW", bigNote: `Under construction, ${r.p}, <em>${sgn(pct(r.uc, ya.uc))}</em> y/y`,
    params: [
      ["Under construction", num(r.uc) + " MW", num(ya.uc) + " MW", sgn(pct(r.uc, ya.uc))],
      ["Built inventory", num(r.inv) + " MW", num(ya.inv) + " MW", sgn(pct(r.inv, ya.inv))],
      ["Vacancy", r.vac + "%", ya.vac + "%", ((r.vac - ya.vac) >= 0 ? "+" : "−") + Math.abs(r.vac - ya.vac).toFixed(1) + " pts"],
      [`Biggest campus: ${esc(SHORT[big.name] || big.name)}, planned`, `${big.planned_gw.toFixed(2)} GW`, `${(big.operating_gw || 0).toFixed(2)} GW running now`, "—"]
    ],
    figs: [
      { n: 1, id: "f-uc", t: "Under construction and vacancy, CBRE primary markets",
        legend: lgItem("Under construction", C.s1, { static: 1 }) + lgItem("Vacancy", C.s2, { static: 1, shape: "line" }),
        cap: "Half-years, megawatts of critical IT load across CBRE’s eight primary North American markets (Northern Virginia, Atlanta, Dallas–Fort Worth, Phoenix, Chicago, Silicon Valley, Hillsboro and New York Tri-State). Two panels, two scales.",
        table: table(["Period", "Under construction", "Inventory", "Vacancy"], D.buildings.halves.map(p => [p.p, link(num(p.uc) + " MW", p.src), p.inv ? num(p.inv) + " MW" : "n/a", p.vac + "%"])) },
      { n: 2, id: "f-map", t: "The biggest AI campuses, planned against running",
        legend: lgItem("Planned IT power (outline)", C.s1, { static: 1, shape: "ring" }) + lgItem("Running now (fill)", C.s1, { static: 1 }),
        cap: `Circle area is IT power from Epoch AI’s Frontier Data Centers directory, updated ${dLong(D.buildings.campus_date)}. IT power runs below the headline figures companies announce: Meta says Hyperion will reach 5 GW. Locations are approximate. Click a campus for its Epoch page.`,
        table: table(["Campus", "Chips owned by", "Where", "Planned", "Running", "Status"], cs.map(c => [link(esc(c.name), c.src), esc(c.owner), esc(c.place), c.planned_gw.toFixed(2) + " GW", (c.operating_gw || 0).toFixed(2) + " GW", esc(c.status)])) }
    ],
    notes: [
      "CBRE’s figures are for its primary markets only, so they miss the big rural AI campuses in Texas, Louisiana, Ohio and Wisconsin. That is why the second figure exists. Inventory isn’t reported for H1 2023 or H1 2024.",
      "Epoch AI lists who owns the chips at each site, which is why Oracle appears for Stargate Abilene and Shackelford. Its power numbers are IT load, not grid connection size."
    ],
    sources: [...D.buildings.halves.map(p => [`CBRE North America Data Center Trends, ${p.p}`, p.src]), ["Epoch AI, Frontier Data Centers directory", "https://epoch.ai/data/ai-data-centers"]]
  };
}

/* ---------------------------------------------------------------- 4. power */
function gevChart(host, D) {
  const G = D.power.gev, { svg, w, h } = plot(host, host.clientWidth < 560 ? 262 : 280);
  const L = 44, R = 14, T = 24, B = host.clientWidth < 560 ? 40 : 28;
  const { top, ticks } = nice(Math.max(...G.map(g => g.total)) * 1.08, 4);
  const y = lin(0, top, h - B, T), band = (w - L - R) / G.length, bw = Math.min(26, band * .5);
  yGrid(svg, y, ticks, L, w - R, v => v + " GW");
  const hl = el("rect", { class: "hl", y: T - 10, height: h - B - T + 10, width: band, x: -999 }, svg);
  G.forEach((g, i) => {
    const x = L + i * band + (band - bw) / 2;
    if (g.backlog == null) el("path", { d: colPath(x, y(0), y(g.total), bw), fill: "none", stroke: "#aaa2cf", "stroke-width": 1.2 }, svg);
    else {
      el("path", { d: `M${x} ${y(0)}V${y(g.backlog)}H${x + bw}V${y(0)}Z`, fill: C.s1 }, svg);
      el("path", { d: colPath(x, y(g.backlog) - 2, y(g.total), bw), fill: C.s2 }, svg);
    }
    if (band >= 52) txt(svg, x + bw / 2, h - B + 18, qShort(g.q), { "text-anchor": "middle" });
    else { txt(svg, x + bw / 2, h - B + 16, "Q" + g.q.slice(5), { "text-anchor": "middle" }); if (i === 0 || g.q.endsWith("Q1")) txt(svg, x + bw / 2, h - B + 30, "’" + g.q.slice(2, 4), { "text-anchor": "middle", class: "lbl-dim" }); }
    if (i === 0 || i === G.length - 1) txt(svg, x + bw / 2, y(g.total) - 8, g.total + " GW", { "text-anchor": "middle", class: i ? "lbl" : "lbl-dim" });
    const hit = el("rect", { class: "hit", x: L + i * band, y: T - 10, width: band, height: h - B - T + 10, tabindex: 0 }, svg);
    hover(hit, `<div class="t-h">${qLabel(g.q)}</div>${g.backlog == null ? `<p>${g.total} GW in total. GE Vernova didn’t split backlog from reservations before 2025; the CEO gave this year-end figure later.</p>` : row(C.s2, "Slot reservations", g.slots + " GW") + row(C.s1, "Firm backlog", g.backlog + " GW") + row(null, "Total (as reported)", g.total + " GW", "sum")}`,
      () => hl.setAttribute("x", L + i * band), () => hl.setAttribute("x", -999));
  });
}
function queueChart(host, D) {
  const Qs = D.power.queue, small = host.clientWidth < 600;
  const rh = small ? 58 : 46, { svg, w, h } = plot(host, rh * Qs.length + 40);
  const L = small ? 8 : 92, R = 12, T = 8, B = 28;
  const t0 = Date.UTC(2024, 6, 1), t1 = Date.UTC(2033, 0, 1), x = lin(t0, t1, L, w - R);
  const yr = Y => Date.UTC(Y, 0, 1);
  const g = el("g", { class: "tick" }, svg);
  for (let Y = 2025; Y <= 2033; Y++) { el("line", { x1: x(yr(Y)), x2: x(yr(Y)), y1: T, y2: h - B }, g); if (Y < 2033) txt(g, (x(yr(Y)) + x(yr(Y + 1))) / 2, h - B + 18, small ? "’" + String(Y).slice(2) : String(Y), { "text-anchor": "middle" }); }
  const today = Date.UTC(2026, 9, 9);
  el("line", { x1: x(today), x2: x(today), y1: T, y2: h - B, stroke: "#f2eefb", "stroke-width": 1, opacity: .5 }, svg);
  Qs.forEach((q, i) => {
    const top = T + i * rh, cy = top + rh - 14, t = day(q.d).getTime();
    const gg = el("g", { tabindex: 0, class: "mark-focus" }, svg);
    if (!small) txt(gg, L - 10, cy + 4, dMonth(q.d), { "text-anchor": "end" });
    el("circle", { cx: x(t), cy, r: 4, fill: "#f2eefb" }, gg);
    const s0 = yr(q.sell[0]), s1 = yr(q.sell[1] + 1);
    if (q.sold) el("rect", { x: x(t), y: cy - 5, width: Math.max(0, x(yr(q.sold + 1)) - x(t)), height: 10, rx: 2, fill: C.s1 }, gg);
    el("line", { x1: x(q.sold ? yr(q.sold + 1) : t), x2: x(s0), y1: cy, y2: cy, stroke: "#6f6799", "stroke-width": 1 }, gg);
    el("rect", { x: x(s0) + 1, y: cy - 5, width: x(s1) - x(s0) - 2, height: 10, rx: 4, fill: C.s2 }, gg);
    txt(gg, small ? L : x(t), top + 12, small ? `${dMonth(q.d)}: ${q.t}` : q.t, { class: "lbl", "text-anchor": "start" });
    el("rect", { x: 0, y: top, width: w, height: rh, class: "hit" }, gg);
    const ahead = ((s1 - t) / 3.156e10).toFixed(1);
    hover(gg, `<div class="t-h">${dLong(q.d)}</div><p>“${esc(q.q)}”</p>${row(C.s2, "Furthest year being sold", String(q.sell[1]))}${q.sold ? row(C.s1, "Sold out through", String(q.sold)) : ""}${row(null, "Queue reaches", ahead + " years out")}`);
    gg.addEventListener("click", () => window.open(q.src, "_blank", "noopener"));
  });
}
const LANES = ["Gas", "Existing nuclear", "New nuclear", "Fuel cells", "Geothermal", "Renewables", "Other"];
const WHO = ["All", "Microsoft", "Google", "Amazon", "Meta", "Oracle", "xAI", "Developers and utilities"];
function dealsChart(host, D, who) {
  const deals = D.power.deals, small = host.clientWidth < 520;
  const lh = small ? 50 : 54, { svg, w, h } = plot(host, lh * LANES.length + 34);
  const L = small ? 6 : 118, R = 18, T = 4, B = 28;
  const t0 = Date.UTC(2024, 0, 1), t1 = Date.UTC(2026, 11, 1), x = lin(t0, t1, L + 10, w - R);
  const g = el("g", { class: "tick" }, svg);
  [2024, 2025, 2026].forEach(Y => { el("line", { x1: x(Date.UTC(Y, 0, 1)), x2: x(Date.UTC(Y, 0, 1)), y1: T, y2: h - B }, g); txt(g, x(Date.UTC(Y, 6, 1)), h - B + 18, String(Y), { "text-anchor": "middle" }); });
  const kr = Math.min(.24, w / 3400);
  LANES.forEach((ln, i) => {
    const top = T + i * lh;
    el("line", { x1: L, x2: w - R, y1: top + lh, y2: top + lh, stroke: "#251f48" }, svg);
    if (small) txt(svg, L + 4, top + 13, ln, { class: "lbl-dim" }); else txt(svg, L - 10, top + lh / 2 + 4, ln, { "text-anchor": "end", class: "lbl" });
  });
  const placed = {};
  [...deals].sort((a, b) => (b.mw || 0) - (a.mw || 0)).forEach(d => {
    const i = LANES.indexOf(d.lane), top = T + i * lh, base = top + lh / 2 + (small ? 6 : 0);
    const cx = x(day(d.d).getTime()), r = d.mw ? Math.max(3.5, Math.sqrt(d.mw) * kr) : 4;
    const P = placed[d.lane] || (placed[d.lane] = []);
    let cy = base;
    for (const off of [0, -8, 8, -14, 14]) { const yy = base + off; if (!P.some(p => Math.hypot(p[0] - cx, p[1] - yy) < Math.min(p[2], r) + 3)) { cy = yy; break; } }
    P.push([cx, cy, r]);
    const on = who === "All" || d.who === who;
    const gg = el("g", { tabindex: 0, class: "mark-focus" + (on ? "" : " faded"), role: "link", "aria-label": `${d.buyer} and ${d.with}, ${dLong(d.d)}` }, svg);
    if (!d.mw) el("path", { d: `M${cx} ${cy - 5}L${cx + 5} ${cy}L${cx} ${cy + 5}L${cx - 5} ${cy}Z`, fill: "none", stroke: C.amber, "stroke-width": 1.5 }, gg);
    else el("circle", { cx, cy, r, fill: d.firm ? "rgba(255,178,63,.85)" : "rgba(255,178,63,.08)", stroke: d.firm ? C.surface : C.amber, "stroke-width": d.firm ? 1.5 : 1.4 }, gg);
    el("circle", { cx, cy, r: Math.max(12, r), class: "hit" }, gg);
    const basis = { contracted: "contracted", nameplate: "plant size", planned: "planned", "framework-max": "framework ceiling", permitted: "permitted", "pending approval": "pending approval" }[d.mw_basis] || "";
    hover(gg, `<div class="t-h">${esc(d.buyer)} and ${esc(d.with)}</div>${row(null, dLong(d.d), d.mw ? num(d.mw) + " MW " + basis : "size not disclosed")}<p>${esc(d.t)}. ${esc(d.where)}.</p>${d.why ? `<p>Not added to the totals: ${esc(d.why)}.</p>` : ""}<p>Click for the source.</p>`);
    gg.addEventListener("click", () => window.open(d.src, "_blank", "noopener"));
    gg.addEventListener("keydown", e => { if (e.key === "Enter") window.open(d.src, "_blank", "noopener"); });
  });
}
function dealTotals(D, who) {
  const ds = D.power.deals.filter(d => who === "All" || d.who === who);
  // deals that repeat another one (Hermes 2 inside Kairos, Talen 2024 replaced in 2025) are shown but not added up
  const firm = sum(ds.filter(d => d.firm && d.count !== false).map(d => d.mw));
  const soft = sum(ds.filter(d => !d.firm && d.count !== false).map(d => d.mw));
  return `<span><b>${ds.length}</b> deals</span><span><b>${(firm / 1000).toFixed(1)} GW</b> contracted or built</span><span><b>${(soft / 1000).toFixed(1)} GW</b> more in plans, permits, pending approvals and framework ceilings</span>`;
}
function power(D, M) {
  const r = M.pow.r, ya = M.pow.ya, cap = D.power.capacity;
  const peers = D.power.peers, si = peers.find(p => /69 GW/.test(p.text)), mh = peers.find(p => /35 GW/.test(p.text));
  return {
    k: "power", n: 4, name: "Power", what: "The turbine queue, and the deals buyers sign to skip it", copy: D.copy.power,
    big: r.total + " GW", bigNote: `GE Vernova gas backlog and reservations, ${qLabel(r.q)}, <em>${sgn(pct(r.total, ya.total))}</em> y/y`,
    params: [
      ["GE Vernova backlog plus reservations", r.total + " GW", ya.total + " GW", sgn(pct(r.total, ya.total))],
      ["Of which slot reservations", r.slots + " GW", ya.slots + " GW", sgn(pct(r.slots, ya.slots))],
      ["Of which firm backlog", r.backlog + " GW", ya.backlog + " GW", sgn(pct(r.backlog, ya.backlog))],
      ["Furthest delivery year sold", String(D.power.queue[D.power.queue.length - 1].sell[1]), (q => `${q.sell[1]} (${dMonth(q.d)})`)(D.power.queue.filter(q => day(q.d) <= new Date(Date.UTC(2025, 9, 1))).slice(-1)[0]), "—"],
      ["GE Vernova gas turbine output (plan: 24 GW in 2028, 30 GW in 2030)", "20 GW a year", "20 GW from 2027 (Apr 2025 plan)", "—"]
    ],
    figs: [
      { n: 1, id: "f-gev", t: "GE Vernova gas turbine backlog and slot reservations",
        legend: lgItem("Firm backlog", C.s1, { static: 1 }) + lgItem("Slot reservations", C.s2, { static: 1 }),
        cap: "Gigawatts of gas turbines, end of quarter, as GE Vernova reports them. A slot reservation is a paid deposit on a future factory slot that hasn’t become a firm order yet. The Q4 2024 outline is a total the CEO cited later, with no split.",
        table: table(["Quarter", "Firm backlog", "Reservations", "Total"], D.power.gev.map(g => [qLabel(g.q), g.backlog ?? "n/a", g.slots ?? "n/a", link(g.total + " GW", g.src)])) },
      { n: 2, id: "f-queue", t: "Order a turbine today, and when does it arrive?",
        legend: lgItem("Sold out", C.s1, { static: 1 }) + lgItem("Still selling", C.s2, { static: 1 }) + lgItem("Date of the statement", "#f2eefb", { static: 1, shape: "ring" }),
        cap: "Each row is something GE Vernova management said, plotted against the delivery years it described. The white line is today. Hover or tap a row for the quote; click to open the transcript.",
        pre: `<div class="tiles" style="margin-bottom:14px"><div class="tile"><b>${r.total} GW</b><span>GE Vernova, backlog plus reservations, ${qLabel(r.q)}</span></div><div class="tile"><b>69 GW</b><span>Siemens Energy gas turbine backlog, Jun 2026</span></div><div class="tile"><b>35 GW</b><span>Mitsubishi Power large-frame backlog, Jun 2026</span></div></div>`,
        table: table(["Said on", "What", "Sold out through", "Selling into"], D.power.queue.map(q => [dLong(q.d), link(esc(q.t), q.src), q.sold ?? "—", q.sell[0] === q.sell[1] ? q.sell[0] : `${q.sell[0]}–${q.sell[1]}`])) },
      { n: 3, id: "f-deals", t: "Power deals signed for AI, January 2024 to now",
        pre: `<div class="filters" role="group" aria-label="Filter by buyer">${WHO.map(w => `<button type="button" class="fchip" data-who="${w}" aria-pressed="${w === "All"}">${w}</button>`).join("")}</div>`,
        legend: lgItem("Contracted or built", C.amber, { static: 1 }) + lgItem("Planned or a ceiling", C.amber, { static: 1, shape: "ring" }),
        post: `<div class="tot" id="dealTot">${dealTotals(D, "All")}</div>`,
        cap: "Circle area is megawatts. Diamonds are deals with no size disclosed. Filled circles are signed or built; hollow ones are plans, permits, framework ceilings or deals still awaiting a regulator. Some ceilings overlap: Chevron’s 4 GW and Crusoe and Engine No. 1’s 4.5 GW draw on the same turbines. Click any deal to open its source.",
        table: table(["Date", "Buyer", "With", "Type", "MW", "Basis"], D.power.deals.map(d => [dLong(d.d), esc(d.buyer), link(esc(d.with), d.src), d.lane, d.mw ? num(d.mw) : "n/a", d.mw_basis || "n/a"])) }
    ],
    notes: [
      `GE Vernova’s gigawatts are gas turbine capacity, including aeroderivatives, not finished plant capacity. Its stated totals are rounded, so backlog plus reservations can differ from the total by 1 GW. Q3 2026 results come out ${D.meta.next.includes("28") ? "October 28" : "later this month"}.`,
      `Production capacity: ${esc(cap.text.split(". ")[0])}.`,
      "Siemens Energy and Mitsubishi figures come from Utility Dive’s reporting of their earnings calls, and their fiscal years differ from the calendar. The ledger counts reactor uprates with existing nuclear, and counts xAI’s own turbines as permits, not purchase contracts."
    ],
    sources: [
      ["GE Vernova Q2 2026 results", r.src], ["GE Vernova production capacity (Jul 2026 webcast)", cap.src],
      ...D.power.queue.map(q => [`GE Vernova, ${dLong(q.d)}`, q.src]),
      ["Siemens Energy backlog (Utility Dive, Aug 2026)", si ? si.src : "https://www.utilitydive.com/"], ["Mitsubishi backlog (Utility Dive, Aug 2026)", mh ? mh.src : "https://www.utilitydive.com/"],
      ["Every deal in the ledger links to its own announcement or report (see Show the numbers)", "#f-deals"]
    ]
  };
}

/* ---------------------------------------------------------------- 5. compute */
function gpuChart(host, D) {
  const G = D.compute, { svg, w, h } = plot(host, host.clientWidth < 560 ? 280 : 320);
  const L = 44, R = 64, T = 56, B = 30;
  const t0 = Date.UTC(2025, 10, 20), t1 = Date.UTC(2026, 9, 31), x = lin(t0, t1, L, w - R), y = lin(0, 7, h - B, T);
  yGrid(svg, y, [0, 1, 2, 3, 4, 5, 6, 7], L, w - R, v => "$" + v);
  const every = w < 520 ? 3 : 2;
  for (let m = 1; m < 11; m++) { const t = Date.UTC(2025, 11 + m, 1), d = new Date(t); if ((m - 1) % every === 0) txt(svg, x(t), h - B + 18, MON[d.getUTCMonth()] + (d.getUTCMonth() === 0 ? " ’" + String(d.getUTCFullYear()).slice(2) : ""), { "text-anchor": "middle" }); }
  // H100's March range (no daily readings published for that month)
  el("rect", { x: x(Date.UTC(2026, 2, 1)), width: x(Date.UTC(2026, 3, 1)) - x(Date.UTC(2026, 2, 1)), y: y(G.h100_march.hi), height: y(G.h100_march.lo) - y(G.h100_march.hi), fill: C.s1, opacity: .22, rx: 2 }, svg);
  const S = [{ k: "b200", c: C.s2, n: "B200" }, { k: "h100", c: C.s1, n: "H100" }, { k: "a100", c: C.s3, n: "A100" }];
  S.forEach(s => {
    const pts = G[s.k].map(p => ({ ...p, t: day(p.d).getTime() }));
    let d = "";
    pts.forEach((p, i) => { const gapBefore = i && p.t - pts[i - 1].t > 60 * 864e5; d += `${!i || gapBefore ? "M" : "L"}${x(p.t).toFixed(1)} ${y(p.v).toFixed(1)}`; });
    el("path", { d, fill: "none", stroke: s.c, "stroke-width": 2, "stroke-linejoin": "round", "stroke-linecap": "round" }, svg);
    pts.forEach(p => el("circle", { cx: x(p.t), cy: y(p.v), r: 4, fill: s.c, stroke: C.surface, "stroke-width": 2 }, svg));
    const lp = pts[pts.length - 1];
    txt(svg, x(lp.t) + 10, y(lp.v) + 4, `${s.n} $${lp.v.toFixed(2)}`, { class: "lbl" });
  });
  // methodology changes, marked on the axis
  G.method.forEach(m => {
    const t = day(m.d).getTime(); if (t < t0) return;
    const gg = el("g", { tabindex: 0, class: "mark-focus" }, svg);
    el("path", { d: `M${x(t)} ${h - B}l-4 7h8z`, fill: "#7a72a6" }, gg);
    el("rect", { x: x(t) - 12, y: h - B - 4, width: 24, height: 18, class: "hit" }, gg);
    hover(gg, `<div class="t-h">Index method change, ${dLong(m.d)}</div><p>${esc(m.t)}.</p>`);
  });
  // events: numbered in date order
  let lastPin = -99, lift = 0;
  G.events.forEach((e, i) => {
    const t = day(e.d).getTime(), cx = x(t);
    lift = cx - lastPin < 22 && !lift ? 22 : 0; lastPin = cx;
    const cy = T - 18 - lift;
    const gg = el("g", { tabindex: 0, class: "mark-focus" }, svg);
    el("line", { x1: cx, x2: cx, y1: cy + 9, y2: h - B, stroke: "#f2eefb", opacity: .14 }, gg);
    el("circle", { cx, cy, r: 9, fill: "#221b45", stroke: "#ffb23f", "stroke-width": 1.4 }, gg);
    txt(gg, cx, cy + 4, String(i + 1), { "text-anchor": "middle", class: "lbl", style: "font-size:11px" });
    el("rect", { x: cx - 12, y: cy - 12, width: 24, height: 24, class: "hit" }, gg);
    hover(gg, `<div class="t-h">${dLong(e.d)}</div><p>${esc(e.t)}.</p>`);
    gg.addEventListener("click", () => window.open(e.src, "_blank", "noopener"));
  });
  // crosshair: the nearest reading for each chip within three weeks
  const xh = el("line", { class: "xhair", y1: T, y2: h - B, x1: 0, x2: 0, visibility: "hidden" }, svg);
  const hit = el("rect", { class: "hit", x: L, y: T, width: w - R - L, height: h - B - T }, svg);
  hit.addEventListener("pointermove", e => {
    const bb = svg.getBoundingClientRect(), px = (e.clientX - bb.left) * (w / bb.width), t = t0 + (px - L) / (w - R - L) * (t1 - t0);
    const rows = S.map(s => { const p = G[s.k].map(p => ({ ...p, t: day(p.d).getTime() })).reduce((a, b) => Math.abs(b.t - t) < Math.abs(a.t - t) ? b : a); return Math.abs(p.t - t) < 21 * 864e5 ? row(s.c, `${s.n}, ${dShort(p.d)}`, "$" + p.v.toFixed(2)) : ""; }).join("");
    xh.setAttribute("x1", px); xh.setAttribute("x2", px); xh.setAttribute("visibility", "visible");
    showTip(rows ? `<div class="t-h">${dLong(new Date(t).toISOString().slice(0, 10))}</div>${rows}` : `<div class="t-h">No published reading near this date</div>`, e.clientX, e.clientY);
  });
  hit.addEventListener("pointerleave", () => { hideTip(); xh.setAttribute("visibility", "hidden"); });
}
function compute(D, M) {
  const c = M.cmp, G = D.compute, tm = G.term;
  return {
    k: "compute", n: 5, name: "Compute", what: "The price of renting a GPU, the output of everything above", copy: D.copy.compute, cmpHead: "Starting point",
    big: `$${c.r.v.toFixed(2)}`, bigNote: `H100 per GPU-hour, ${dLong(c.r.d)}, <em>${sgn(pct(c.r.v, c.base.v))}</em> since ${dShort(c.base.d)}`,
    params: [
      [`H100 index, ${dShort(c.r.d)}`, `$${c.r.v.toFixed(2)}`, `$${c.base.v.toFixed(2)} (${dMonth(c.base.d)})`, sgn(pct(c.r.v, c.base.v))],
      [`B200 index, ${dShort(c.b.d)}`, `$${c.b.v.toFixed(2)}`, `$${c.bbase.v.toFixed(2)} (${dMonth(c.bbase.d)})`, sgn(pct(c.b.v, c.bbase.v))],
      [`A100 index, ${dShort(c.a.d)}`, `$${c.a.v.toFixed(2)}`, "—", "—"],
      [`H100 12-month term rate, ${dShort(tm.d)}`, `$${tm.term12.toFixed(2)}`, `$${tm.spot.toFixed(2)} spot that day`, sgn(pct(tm.term12, tm.spot))],
      ["H100 one-year contracts (SemiAnalysis)", `$${G.semi.to.toFixed(2)} (Mar 2026)`, `$${G.semi.from.toFixed(2)} (Oct 2025)`, sgn(pct(G.semi.to, G.semi.from))]
    ],
    figs: [
      { n: 1, id: "f-gpu", t: "GPU rental price indexes, per GPU-hour",
        legend: lgItem("H100", C.s1, { static: 1, shape: "line" }) + lgItem("B200", C.s2, { static: 1, shape: "line" }) + lgItem("A100", C.s3, { static: 1, shape: "line" }),
        cap: `Silicon Data neocloud rental indexes, US$ per GPU-hour, at every date Silicon Data published a reading. Lines break where no readings were published for two months. The shaded box is H100’s March range. Numbered pins are events. Silicon Data restated its H100 and A100 history on ${dLong(G.method[0].d)}; the chart starts after that.`,
        post: `<ol class="notes" style="padding-left:20px">${G.events.map(e => `<li>${esc(dLong(e.d))}: ${esc(e.t)}.</li>`).join("")}</ol>`,
        table: table(["Date", "Chip", "Index"], ["h100", "b200", "a100"].flatMap(k => G[k].map(p => [dLong(p.d), k.toUpperCase(), link("$" + p.v.toFixed(2), p.src)]))) }
    ],
    notes: [
      "Silicon Data’s indexes track neocloud on-demand prices. Its separate H100 hyperscaler index ran about $7.40–7.55 an hour in spring 2026 and isn’t shown. Silicon Data adjusts its provider mix from time to time, which can move levels by a few percent; its announcements page lists the changes.",
      "SemiAnalysis’s one-year contract figures and Silicon Data’s term rates are different measures from the spot index, so they sit in the table rather than on the chart."
    ],
    sources: [
      ["Silicon Data H100 index", "https://www.silicondata.com/products/silicon-index/h100"], ["Silicon Data B200 index", "https://www.silicondata.com/products/silicon-index/b200"], ["Silicon Data A100 index", "https://www.silicondata.com/products/silicon-index/a100"],
      ...[...new Set(G.h100.concat(G.b200).map(p => p.src))].filter(u => /blog/.test(u)).map(u => [`Silicon Data blog: ${u.split("/blog/")[1].replace(/-/g, " ")}`, u]),
      ["Silicon Data index method announcements", G.method_src], ["SemiAnalysis, The Great GPU Shortage", G.semi.src], ...G.events.filter(e => !/silicondata|semianalysis/.test(e.src)).map(e => [e.t.split(/[:,;]/)[0], e.src])
    ]
  };
}

/* ---------------------------------------------------------------- boot */
function init(D) {
  const M = derive(D);
  $("#rev").innerHTML = `Rev ${esc(D.meta.rev)}, updated ${esc(dLong(D.meta.updated))}`;
  $("#history tbody").innerHTML = D.meta.history.map(h => `<tr><td>${esc(h.rev)}</td><td>${esc(dLong(h.d))}</td><td>${esc(h.t)}</td></tr>`).join("");
  $("#next").textContent = "Next revision: " + D.meta.next.charAt(0).toLowerCase() + D.meta.next.slice(1);
  board(D, M);
  const G = [money(D, M), chips(D, M), buildings(D, M), power(D, M), compute(D, M)];
  $("#gauges").innerHTML = G.map(gaugeHTML).join("");

  const capexState = Object.fromEntries(D.money.companies.map(c => [c.id, c.id !== "ORCL"]));
  let who = "All";
  const charts = [
    ["#f-capex .plot", h => capexChart(h, D, capexState)], ["#f-guide .plot", h => guideChart(h, D, M)],
    ["#f-nv .plot", h => nvChart(h, D)], ["#f-cowos .plot", h => cowosChart(h, D)],
    ["#f-uc .plot", h => ucChart(h, D)], ["#f-map .plot", h => campusMap(h, D)],
    ["#f-gev .plot", h => gevChart(h, D)], ["#f-queue .plot", h => queueChart(h, D)], ["#f-deals .plot", h => dealsChart(h, D, who)],
    ["#f-gpu .plot", h => gpuChart(h, D)]
  ];
  const renderAll = () => charts.forEach(([s, f]) => { const h = $(s); if (h) f(h); });
  renderAll();
  let lastW = innerWidth, rt = 0;
  addEventListener("resize", () => { if (innerWidth === lastW) return; lastW = innerWidth; clearTimeout(rt); rt = setTimeout(renderAll, 120); });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(renderAll);

  $$("#f-capex .lg").forEach(b => b.addEventListener("click", () => {
    const id = b.dataset.id, on = !capexState[id];
    if (!on && Object.values(capexState).filter(Boolean).length === 1) return;
    capexState[id] = on; b.setAttribute("aria-pressed", on);
    capexChart($("#f-capex .plot"), D, capexState);
  }));
  $$("#f-deals .fchip").forEach(b => b.addEventListener("click", () => {
    who = b.dataset.who;
    $$("#f-deals .fchip").forEach(x => x.setAttribute("aria-pressed", x === b));
    dealsChart($("#f-deals .plot"), D, who);
    $("#dealTot").innerHTML = dealTotals(D, who);
  }));
  if (location.hash) { const t = document.getElementById(location.hash.slice(1)); if (t) setTimeout(() => t.scrollIntoView(), 60); }
}
fetch("data.json", { cache: "no-cache" }).then(r => { if (!r.ok) throw new Error(r.status); return r.json(); }).then(init).catch(() => {
  $("#board").innerHTML = `<p class="reading" style="padding:20px 0">The data file didn’t load. Refresh the page to try again.</p>`;
});
})();
