// Tokens to turbines: a 3D model of what it takes to serve a day of AI tokens, drawn to scale in meters.
// Bundled with three.js into model/model.js (see src/model/build.sh).
import {
  Scene, PerspectiveCamera, WebGLRenderer, WebGLRenderTarget, HalfFloatType, Color, FogExp2,
  HemisphereLight, DirectionalLight, PointLight,
  BoxGeometry, CylinderGeometry, SphereGeometry, LatheGeometry, PlaneGeometry, CapsuleGeometry, TubeGeometry, BufferGeometry, Float32BufferAttribute,
  MeshStandardMaterial, MeshBasicMaterial, LineBasicMaterial, ShaderMaterial, SpriteMaterial,
  InstancedMesh, Mesh, Points, LineSegments, Sprite, Group, Object3D,
  Vector2, Vector3, Box3, Raycaster, EdgesGeometry, CatmullRomCurve3, CanvasTexture, SRGBColorSpace, ACESFilmicToneMapping,
  AdditiveBlending, DoubleSide, BackSide, RepeatWrapping, DynamicDrawUsage
} from "three";
import { OrbitControls } from "three-addons/controls/OrbitControls.js";
import { EffectComposer } from "three-addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three-addons/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three-addons/postprocessing/UnrealBloomPass.js";
import { OutputPass } from "three-addons/postprocessing/OutputPass.js";

/* ---------------------------------------------------------------- the numbers */
const DEMAND = [
  { k: "google", n: "Google, every product", d: "3.2 quadrillion tokens a month, May 2026", v: 3.2e15 / 30 },
  { k: "api", n: "Google’s API alone", d: "Nearly 32 billion tokens a minute, Oct 2026", v: 32e9 * 1440 },
  { k: "billion", n: "A billion people, one answer each", d: "1,000 tokens apiece, every day. My scenario", v: 1e12 },
  { k: "agent", n: "One heavy coding agent", d: "50 million tokens a day. My scenario", v: 5e7 }
];
const CHIPS = [
  { k: "h100", n: "H100", sys: "DGX H100: 8 GPUs, 10.2 kW", kw: 10.2 / 8, rack: 32, rackNote: "4 servers a rack", thr: 2000, led: 0x6aa8ff,
    thrNote: "My estimate. NVIDIA puts B200 at more than 4× H200 on Llama 3.3 70B, and H100 is no faster than H200." },
  { k: "b200", n: "B200", sys: "DGX B200: 8 GPUs, about 14.3 kW", kw: 14.3 / 8, rack: 32, rackNote: "4 servers a rack", thr: 10000, led: 0x8de8df,
    thrNote: "NVIDIA, InferenceMAX: Llama 3.3 70B at 50 tokens a second per user." },
  { k: "gb200", n: "GB200 NVL72", sys: "72 GPUs in one rack, about 120 kW", kw: 120 / 72, rack: 72, rackNote: "72 GPUs a rack", thr: 10000, led: 0x3fd6c8,
    thrNote: "My estimate, from NVIDIA’s 4× per-GPU throughput over H200." },
  { k: "gb300", n: "GB300 NVL72", sys: "72 GPUs in one rack, 132–140 kW", kw: 136 / 72, rack: 72, rackNote: "72 GPUs a rack", thr: 15000, led: 0x5fe8b8,
    thrNote: "My estimate, from NVIDIA’s 1.5× over GB200." }
];
const POWER = [
  { k: "7ha", n: "Gas turbine", m: "GE Vernova 7HA.03", sing: "GE Vernova 7HA.03 gas turbine", plur: "GE Vernova 7HA.03 gas turbines", one: "turbine", many: "turbines", mw: 430, shape: "turbine", gas: true,
    link: ["molecules", "Molecules are easy. Machines are hard."], nudge: "The gas is the easy part. The wait is for a turbine slot." },
  { k: "lm6000", n: "Aeroderivative", m: "GE Vernova LM6000PF+", sing: "GE Vernova LM6000 turbine", plur: "GE Vernova LM6000 turbines", one: "turbine", many: "turbines", mw: 56.9, shape: "aero", gas: true,
    link: ["molecules", "Molecules are easy. Machines are hard."], nudge: "Smaller units, more of them, same gas." },
  { k: "bloom", n: "Fuel cells", m: "Bloom Energy Server", sing: "Bloom Energy Server", plur: "Bloom Energy Servers", one: "Energy Server", many: "Energy Servers", mw: 0.325, shape: "cell", gas: true,
    link: ["bloom", "The power plant that ships like a server."], nudge: "Each one is a 325 kW box that ships like a server and skips the turbine queue." },
  { k: "ap1000", n: "Reactor", m: "Westinghouse AP1000", sing: "Westinghouse AP1000 reactor", plur: "Westinghouse AP1000 reactors", one: "reactor", many: "reactors", mw: 1117, shape: "reactor",
    probe: "Nuclear is the 2030s answer to a 2020s problem.", nudge: "Restarts land this decade. Most new reactors land in the next one." }
];
const REFS = [
  { v: 2400, t: "H200 · Llama 70B" },
  { v: 10000, t: "B200 · Llama 70B" },
  { v: 30000, t: "B200 · gpt-oss" },
  { v: 60000, t: "B200 peak" }
];
const ABILENE_MW = 1200;
const T_MIN = 6, T_MAX = 17;           // tokens a day, as powers of ten
const THR_MIN = Math.log10(500), THR_MAX = 5;

const byK = (list, k) => list.find(x => x.k === k) || list[0];
const DEFAULT = { t: DEMAND[0].v, chip: "gb200", thr: 10000, u: .5, pue: 1.09, src: "7ha", preset: "google" };

function calc(s) {
  const c = byK(CHIPS, s.chip), p = byK(POWER, s.src);
  const tps = s.t / 86400;
  const chips = tps / (s.thr * s.u);
  const racks = chips / c.rack;
  const itMW = chips * c.kw / 1000;
  const facMW = itMW * s.pue;
  const units = facMW / p.mw;
  const build = Math.max(1, Math.ceil(units - 1e-9));
  const jTok = c.kw * 1000 * s.pue / (s.thr * s.u);
  return { c, p, tps, chips, racks, itMW, facMW, units, build, jTok, whAnswer: jTok * 1000 / 3600, abilene: facMW / ABILENE_MW,
    halls: racks < 1 ? 0 : Math.ceil(racks / SLOTS), many: units >= 1 };
}

/* ---------------------------------------------------------------- physical sizes, in meters */
const RK = { w: .6, d: 1.2, h: 2.3 };          // one rack
const LINE = 40, ROWS = 16, SLOTS = LINE * 2 * ROWS; // a full hall: 16 rows of 80 racks
const SPINE = 3, MARGIN = 3, HOT = 1, COLD = 1.2, GAL = 7, HALL_H = 10, CUT = 3.4;

/* ---------------------------------------------------------------- formatting */
const WORDS = [[1e15, "quadrillion"], [1e12, "trillion"], [1e9, "billion"], [1e6, "million"], [1e3, "thousand"]];
const sig = (v, d = 3) => {
  if (v === 0) return "0";
  const p = Math.max(0, d - 1 - Math.floor(Math.log10(Math.abs(v))));
  const f = Math.min(p, Math.abs(v) < 1 ? 8 : 2);
  return (+v.toFixed(f)).toLocaleString("en-US", { maximumFractionDigits: f });
};
const words = (v, d = 3) => {
  for (const [m, w] of WORDS) if (v >= m * .9995 && (m >= 1e6 || v < 1e6)) return m === 1e3 ? Math.round(v).toLocaleString("en-US") : `${sig(v / m, d)} ${w}`;
  return sig(v, d);
};
const count = v => v >= 1e6 ? words(v) : v >= 10 ? Math.round(v).toLocaleString("en-US") : sig(v, 2);
const power = mw => mw >= 1000 ? `${sig(mw / 1000)} GW` : mw >= 1 ? `${sig(mw)} MW` : mw >= .001 ? `${sig(mw * 1000)} kW` : `${sig(mw * 1e6)} W`;
const joules = j => j >= 1 ? `${sig(j)} J` : `${sig(j * 1000)} mJ`;
const wh = w => w >= 1 ? `${sig(w)} Wh` : `${sig(w * 1000)} mWh`;
const pct = v => `${Math.round(v * 100)}%`;
const int = v => Math.round(v).toLocaleString("en-US");
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const answerBig = r => r.many ? int(r.build) : (r.units >= .01 ? `${Math.round(r.units * 100)}%` : `${sig(r.units * 100, 2)}%`);
const answerWhat = r => r.many ? `${r.build === 1 ? r.p.sing : r.p.plur} to build` : `of one ${r.p.sing}`;

/* ---------------------------------------------------------------- state, kept in the URL so a scenario can be shared */
function readState() {
  const q = new URLSearchParams(location.search), s = { ...DEFAULT };
  const num = (k, lo, hi) => { const v = parseFloat(q.get(k)); return isFinite(v) ? Math.min(hi, Math.max(lo, v)) : null; };
  const t = num("t", 10 ** T_MIN, 10 ** T_MAX); if (t) { s.t = t; s.preset = (DEMAND.find(d => Math.abs(d.v - t) / d.v < .001) || {}).k || null; }
  if (q.get("chip") && CHIPS.some(c => c.k === q.get("chip"))) { s.chip = q.get("chip"); s.thr = byK(CHIPS, s.chip).thr; }
  const thr = num("thr", 10 ** THR_MIN, 10 ** THR_MAX); if (thr) s.thr = thr;
  const u = num("u", 10, 100); if (u) s.u = u / 100;
  const pue = num("pue", 1.05, 1.6); if (pue) s.pue = pue;
  if (q.get("src") && POWER.some(p => p.k === q.get("src"))) s.src = q.get("src");
  return s;
}
function writeState(s) {
  const q = new URLSearchParams({ t: s.t.toPrecision(4).replace("e+", "e"), chip: s.chip, thr: Math.round(s.thr), u: Math.round(s.u * 100), pue: s.pue.toFixed(2), src: s.src });
  try { history.replaceState(null, "", `${location.pathname}?${q}${location.hash}`); } catch (e) {}
}

/* ---------------------------------------------------------------- the chapters: one per power of ten */
const CHAPTERS = [
  { k: "token", n: "Token", name: "One token", tone: "c" },
  { k: "rack", n: "Rack", name: "One rack", tone: "c" },
  { k: "hall", n: "Hall", name: "The hall", tone: "c" },
  { k: "campus", n: "Campus", name: "The campus", tone: "p" },
  { k: "power", n: "Power", name: "The power", tone: "p" },
  { k: "all", n: "All", name: "All of it", tone: "p" }
];

function chapterCopy(k, r, s) {
  const c = r.c, p = r.p;
  if (k === "token") return { big: joules(r.jTok), txt: `What one token costs at the wall, counting the chip, its share of the server and the cooling. A 1,000-token answer is ${wh(r.whAnswer)}. Google measured 0.24 Wh for its median prompt.` };
  if (k === "rack") {
    const lit = r.racks < 1 ? ` This load keeps ${sig(r.chips, 2)} of its ${c.rack} GPUs busy, lit here.` : "";
    return { big: `${sig(c.kw * c.rack, 3)} kW`, txt: `One ${c.n} rack, ${c.rack} GPUs. At ${int(s.thr)} tokens a second each and ${pct(s.u)} load, it serves ${words(s.thr * s.u * c.rack)} tokens a second.${lit}` };
  }
  if (k === "hall") {
    if (r.racks < 1) return { big: `${sig(r.racks, 2)} racks`, txt: `Less than one rack: the work of ${sig(r.chips, 2)} chips. A hall like the one behind it holds ${int(SLOTS)} racks.` };
    return { big: `${count(r.racks)} racks`, txt: `${count(r.chips)} chips. A hall like this holds ${int(SLOTS)} racks, so this load ${r.halls === 1 ? "fits in one" : `fills ${int(r.halls)}`}.` };
  }
  if (k === "campus") {
    const ab = r.abilene >= .01 ? `${sig(r.abilene, 2)}× Stargate Abilene, planned at 1.2 GW.` : "Under 1% of Stargate Abilene, planned at 1.2 GW.";
    return { big: power(r.facMW), txt: `${power(r.itMW)} for the chips, plus ${Math.round((s.pue - 1) * 100)}% for cooling and losses. ${ab}` };
  }
  if (k === "power") {
    const lead = r.many
      ? `${power(r.facMW)} of load is ${sig(r.units, 3)} ${r.units === 1 ? p.one : p.many} at full output, so you build ${int(r.build)}.`
      : `${power(r.facMW)} of load, a sliver of one ${p.one}.`;
    return { big: answerBig(r), txt: `${lead} ${p.nudge}` };
  }
  return { big: answerBig(r), txt: `${words(s.t)} tokens a day → ${count(r.chips)} chips → ${count(r.racks)} racks → ${power(r.facMW)} → ${answerBig(r)} ${r.many ? (r.build === 1 ? p.one : p.many) : `of one ${p.one}`}.` };
}

/* ---------------------------------------------------------------- the panel */
const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
const state = readState();
const panel = $("#panel");

panel.innerHTML = `
  <section class="ctl">
    <div class="ctl-h"><h3>Tokens served a day</h3><output id="oT"></output></div>
    <input type="range" id="rT" min="${T_MIN}" max="${T_MAX}" step="0.01" aria-label="Tokens served a day, on a log scale">
    <div class="scale"><span>1 million</span><span>1 trillion</span><span>100 quadrillion</span></div>
    <div class="presets" role="group" aria-label="Scenarios">${DEMAND.map(d => `<button type="button" data-k="${d.k}"><b>${d.n}</b><small>${d.d}</small></button>`).join("")}</div>
  </section>
  <section class="ctl">
    <div class="ctl-h"><h3>Chip</h3><output id="oC"></output></div>
    <div class="seg" role="group" aria-label="Chip">${CHIPS.map(c => `<button type="button" data-k="${c.k}">${c.n}</button>`).join("")}</div>
  </section>
  <section class="ctl">
    <div class="ctl-h"><h3>Tokens a second, per chip</h3><output id="oThr"></output></div>
    <div class="rail-wrap"><input type="range" id="rThr" min="${THR_MIN}" max="${THR_MAX}" step="0.005" aria-label="Tokens a second each chip serves">
      <div class="ticks" aria-hidden="true">${REFS.map((r, i) => `<i class="${i % 2 ? "lo" : ""}" style="left:${((Math.log10(r.v) - THR_MIN) / (THR_MAX - THR_MIN) * 100).toFixed(2)}%"><span>${r.t}</span></i>`).join("")}</div></div>
    <p class="note" id="nThr"></p>
  </section>
  <section class="ctl two">
    <div><div class="ctl-h"><h3>Average load</h3><output id="oU"></output></div>
      <input type="range" id="rU" min="10" max="100" step="1" aria-label="Average share of capacity in use">
      <p class="note">My assumption. Fleets are built for the peak, not the average.</p></div>
    <div><div class="ctl-h"><h3>Cooling overhead (PUE)</h3><output id="oP"></output></div>
      <input type="range" id="rP" min="1.05" max="1.6" step="0.01" aria-label="Power usage effectiveness">
      <p class="note">Google’s fleet averaged 1.09 in 2025. Newer liquid-cooled sites run 1.1 to 1.3.</p></div>
  </section>
  <section class="ctl">
    <div class="ctl-h"><h3>Power it with</h3></div>
    <div class="srcs" role="group" aria-label="Power source">${POWER.map(p => `<button type="button" data-k="${p.k}"><b>${p.n}</b><small>${p.m} · ${power(p.mw)}</small></button>`).join("")}</div>
    <p class="note" id="nSrc"></p>
  </section>
  <section class="bom" aria-labelledby="bomH">
    <h3 id="bomH">The bill of materials</h3>
    <ol id="bom"></ol>
  </section>
  <div class="acts"><button type="button" id="share">Copy a link to this scenario</button><button type="button" id="reset" class="quiet">Reset</button></div>`;

const rT = $("#rT"), rThr = $("#rThr"), rU = $("#rU"), rP = $("#rP");
let chapter = "all";

function syncControls() {
  rT.value = Math.log10(state.t); rThr.value = Math.log10(state.thr); rU.value = Math.round(state.u * 100); rP.value = state.pue;
  $$(".presets button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.k === state.preset)));
  $$(".seg button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.k === state.chip)));
  $$(".srcs button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.k === state.src)));
  [rT, rThr, rU, rP].forEach(r => r.style.setProperty("--f", `${((r.value - r.min) / (r.max - r.min) * 100).toFixed(2)}%`));
}

let last = null;
function showCard(k) {
  const r = last, ch = CHAPTERS.find(c => c.k === k), i = CHAPTERS.indexOf(ch);
  const { big, txt } = chapterCopy(k, r, state);
  const card = $("#card");
  card.classList.toggle("pw", ch.tone === "p");
  $("#cNo").textContent = `${i + 1} of ${CHAPTERS.length}`;
  $("#cName").textContent = ch.name;
  $("#cBig").textContent = big;
  $("#cTxt").textContent = txt;
  $$("#chaps button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.k === k)));
}

function render() {
  const r = calc(state), c = r.c, p = r.p;
  last = r;
  $("#oT").textContent = words(state.t);
  $("#oC").textContent = c.sys;
  $("#oThr").textContent = int(state.thr);
  const bench = Math.abs(state.thr - c.thr) / c.thr < .01;
  $("#nThr").innerHTML = bench ? esc(c.thrNote) : `You’ve set your own number. <button type="button" class="link" id="bench">Use the ${esc(c.n)} default (${int(c.thr)})</button>`;
  $("#oU").textContent = pct(state.u);
  $("#oP").textContent = state.pue.toFixed(2);
  $("#nSrc").innerHTML = p.link ? `Ties to my thesis <a href="../#${p.link[0]}">${esc(p.link[1])}</a>` : `A thesis I’m still testing: <em>${esc(p.probe)}</em>`;

  $("#aBig").textContent = answerBig(r);
  $("#aWhat").textContent = answerWhat(r);

  const rows = [
    ["Tokens a day", words(state.t), state.preset ? byK(DEMAND, state.preset).n : "Your number"],
    ["Tokens a second", words(r.tps), "÷ 86,400 seconds"],
    ["Chips", count(r.chips), `÷ (${int(state.thr)} a second × ${pct(state.u)} load)`],
    ["Racks", count(r.racks), `÷ ${c.rack} GPUs a rack (${c.rackNote.replace(/ a rack$/, "")})`],
    ["IT power", power(r.itMW), `× ${sig(c.kw, 3)} kW a chip, with its share of the server`],
    ["Facility power", power(r.facMW), `× ${state.pue.toFixed(2)} PUE for cooling and losses`],
    [p.many[0].toUpperCase() + p.many.slice(1), r.many ? `${sig(r.units, 3)} → build ${int(r.build)}` : `${sig(r.units, 2)} of one`, `÷ ${power(p.mw)} each`],
    ["Per token, at the wall", joules(r.jTok), `A 1,000-token answer: ${wh(r.whAnswer)}. Google measured 0.24 Wh for its median prompt.`],
    ["Against Abilene", r.abilene >= .01 ? `${sig(r.abilene, 2)}×` : "under 1%", "Stargate Abilene is planned at 1.2 GW"]
  ];
  $("#bom").innerHTML = rows.map(([k, v, n], i) => `<li style="--i:${i}"><span class="k">${esc(k)}</span><b>${esc(v)}</b><span class="n">${esc(n)}</span></li>`).join("");

  syncControls();
  writeState(state);
  showCard(chapter);
  world && world.update(r, state);
}

const set = (patch, big) => { Object.assign(state, patch); render(); world && world.settle(big); };
rT.addEventListener("input", () => set({ t: 10 ** +rT.value, preset: null }));
rThr.addEventListener("input", () => set({ thr: 10 ** +rThr.value }));
rU.addEventListener("input", () => set({ u: +rU.value / 100 }));
rP.addEventListener("input", () => set({ pue: +rP.value }));
$$(".presets button").forEach(b => b.addEventListener("click", () => set({ t: byK(DEMAND, b.dataset.k).v, preset: b.dataset.k }, true)));
$$(".seg button").forEach(b => b.addEventListener("click", () => set({ chip: b.dataset.k, thr: byK(CHIPS, b.dataset.k).thr }, true)));
$$(".srcs button").forEach(b => b.addEventListener("click", () => set({ src: b.dataset.k }, true)));
panel.addEventListener("click", e => { if (e.target.closest("#bench")) set({ thr: byK(CHIPS, state.chip).thr }); });
$("#reset").addEventListener("click", () => set({ ...DEFAULT }, true));
$("#share").addEventListener("click", async () => {
  const b = $("#share");
  try { await navigator.clipboard.writeText(location.href); b.textContent = "Link copied"; }
  catch (e) { b.textContent = "Copy the address bar to share"; }
  setTimeout(() => { b.textContent = "Copy a link to this scenario"; }, 2200);
});

/* the console opens beside the scene on wide screens and as a sheet on phones */
const wide = () => matchMedia("(min-width: 1180px)").matches;
const tune = $("#tune");
function openConsole(on) {
  document.body.classList.toggle("open", on);
  tune.setAttribute("aria-expanded", String(on));
  world && world.frameSide();
}
tune.addEventListener("click", () => openConsole(!document.body.classList.contains("open")));
$("#close").addEventListener("click", () => openConsole(false));
addEventListener("keydown", e => { if (e.key === "Escape" && document.body.classList.contains("open") && !wide()) openConsole(false); });

/* the chapter buttons */
$("#chaps").innerHTML = CHAPTERS.map(c => `<button type="button" data-k="${c.k}" aria-pressed="false">${c.n}</button>`).join("");
function go(k) {
  chapter = k; showCard(k);
  if (world) world.visit(k);
  if (!wide() && document.body.classList.contains("open")) openConsole(false);
}
$$("#chaps button").forEach(b => b.addEventListener("click", () => go(b.dataset.k)));
addEventListener("keydown", e => {
  if (e.target.closest && e.target.closest("input, textarea, select")) return;
  const i = CHAPTERS.findIndex(c => c.k === chapter);
  if (e.key === "ArrowRight" || e.key === "]") { e.preventDefault(); go(CHAPTERS[Math.min(CHAPTERS.length - 1, i + 1)].k); }
  if (e.key === "ArrowLeft" || e.key === "[") { e.preventDefault(); go(CHAPTERS[Math.max(0, i - 1)].k); }
});

/* ---------------------------------------------------------------- the world */
const GLYPHS = ["▁the", "▁power", "ing", "▁of", "▁AI", "token", "▁a", "?", "▁MW", "ine", "▁turb", "▁chip", "▁rack", "GPU", "▁is", "s",
  "▁to", "42", "▁answer", "ed", "▁heat", "▁grid", "▁gas", "▁watt", "{", "}", "def", "=>", "▁hello", "▁why", "▁and", "▁model",
  "▁data", "er", "▁build", "▁slot", "▁fuel", "▁cell", "▁DC", "▁kW", "...", "▁it", "▁in", "▁we", "▁you", "ly", "▁not", "▁new",
  "▁fast", "▁cool", "▁air", "▁light", "▁code", "▁line", "▁Echo", "##", "▁world", "▁time", "▁up", "▁out", "▁for", "▁next", "▁yes", "!"];
const calm = matchMedia("(prefers-reduced-motion: reduce)").matches;
const small = matchMedia("(max-width: 760px)").matches;
let world = null;
if (wide()) document.body.classList.add("open");
try { world = makeWorld(); } catch (e) { document.body.classList.add("no-gl"); }
render();
if (world) world.start(); else document.body.classList.remove("intro");



function makeWorld() {
  const stage = $("#stage"), canvas = $("#cv");
  const renderer = new WebGLRenderer({ canvas, antialias: true, powerPreference: "high-performance" });
  if (!renderer.capabilities.isWebGL2) throw new Error("WebGL 2 is needed");
  const PR = Math.min(devicePixelRatio || 1, small ? 1.6 : 1.75);
  renderer.setPixelRatio(PR);
  renderer.toneMapping = ACESFilmicToneMapping; renderer.toneMappingExposure = 1.08;
  renderer.outputColorSpace = SRGBColorSpace;

  const scene = new Scene();
  scene.background = new Color(0x040a13);
  scene.fog = new FogExp2(0x112a3d, .0004);
  const camera = new PerspectiveCamera(40, 1, .05, 80000);
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true; controls.dampingFactor = .075; controls.enablePan = false;
  controls.maxPolarAngle = Math.PI * .485; controls.minDistance = 1.2; controls.maxDistance = 14000;
  controls.zoomSpeed = .9; controls.rotateSpeed = .5; controls.autoRotateSpeed = .22;

  let composer = null, bloom = null;
  try {
    composer = new EffectComposer(renderer, new WebGLRenderTarget(4, 4, { type: HalfFloatType, samples: small ? 0 : 4 }));
    composer.addPass(new RenderPass(scene, camera));
    bloom = new UnrealBloomPass(new Vector2(256, 256), .6, .5, .95);
    composer.addPass(bloom);
    composer.addPass(new OutputPass());
  } catch (e) { composer = null; }

  /* ------------------------------------------------ sky, stars, far ridges and the ground */
  const far = (vs, fs, extra = {}) => new ShaderMaterial({ vertexShader: vs, fragmentShader: fs, depthWrite: false, depthTest: false, fog: false, ...extra });
  const HOR = new Color(0x163a50), FOGC = new Color(0x112a3d);
  const sky = new Mesh(new SphereGeometry(100, 48, 24), far(
    `varying vec3 vD; void main(){ vD = position; vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.); gl_Position = p.xyww; }`,
    `uniform vec3 top, mid, hor, warm, wdir; varying vec3 vD;
     void main(){ vec3 d = normalize(vD); float h = d.y;
       vec3 c = mix(hor, mid, smoothstep(-.01, .14, h)); c = mix(c, top, smoothstep(.1, .7, h));
       float w = pow(max(dot(normalize(vec3(d.x, 0., d.z) + 1e-5), wdir), 0.), 4.) * (1. - smoothstep(-.02, .2, h));
       c += warm * w * .2; if (h < -.01) c = hor * .7;
       gl_FragColor = vec4(c, 1.); }`,
    { side: BackSide, uniforms: { top: { value: new Color(0x02050b) }, mid: { value: new Color(0x07172a) }, hor: { value: HOR }, warm: { value: new Color(0xf4977a) }, wdir: { value: new Vector3(-1, 0, -.4).normalize() } } }));
  sky.renderOrder = -10; sky.frustumCulled = false; scene.add(sky);

  const starG = new BufferGeometry(), sp = [], ss = [];
  for (let i = 0; i < (small ? 900 : 1800); i++) {
    const u = Math.random() * 2 - 1, a = Math.random() * Math.PI * 2, y = .03 + Math.pow(Math.random(), .7) * .97, rr = Math.sqrt(1 - y * y);
    sp.push(Math.cos(a) * rr * 95, y * 95, Math.sin(a) * rr * 95); ss.push(.6 + Math.pow(Math.random(), 6) * 2.4); void u;
  }
  starG.setAttribute("position", new Float32BufferAttribute(sp, 3)); starG.setAttribute("aS", new Float32BufferAttribute(ss, 1));
  const stars = new Points(starG, far(
    `attribute float aS; uniform float pr; varying float vA; void main(){ vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.); gl_Position = p.xyww; gl_PointSize = aS * pr; vA = clamp(aS / 2.6, .15, 1.) * smoothstep(.0, .25, normalize(position).y); }`,
    `varying float vA; void main(){ float d = length(gl_PointCoord - .5); if (d > .5) discard; gl_FragColor = vec4(vec3(.72, .82, .95) * vA * (1. - d * 1.6), 1.); }`,
    { blending: AdditiveBlending, uniforms: { pr: { value: PR } } }));
  stars.renderOrder = -9; stars.frustumCulled = false; scene.add(stars);

  // a ring of low ridges on the horizon, so the ground has an edge
  const ridgeG = new BufferGeometry(), rp = [], ri = [];
  const RN = 240;
  for (let i = 0; i <= RN; i++) {
    const a = i / RN * Math.PI * 2;
    const h = .9 + Math.sin(a * 3 + 1) * .7 + Math.sin(a * 7.3) * .45 + Math.sin(a * 17.1 + 2) * .22 + Math.max(0, Math.sin(a * 1.7 - .6)) * 1.6;
    rp.push(Math.cos(a) * 92, -1, Math.sin(a) * 92, Math.cos(a) * 92, Math.max(.25, h) , Math.sin(a) * 92);
    if (i < RN) { const b = i * 2; ri.push(b, b + 1, b + 2, b + 1, b + 3, b + 2); }
  }
  ridgeG.setAttribute("position", new Float32BufferAttribute(rp, 3)); ridgeG.setIndex(ri);
  const ridges = new Mesh(ridgeG, far(
    `varying float vY; void main(){ vY = position.y; vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.); gl_Position = p.xyww; }`,
    `uniform vec3 c0, c1; varying float vY; void main(){ gl_FragColor = vec4(mix(c0, c1, smoothstep(-1., 3.5, vY)), 1.); }`,
    { side: DoubleSide, uniforms: { c0: { value: new Color(0x0d2232) }, c1: { value: new Color(0x081624) } } }));
  ridges.renderOrder = -8; ridges.frustumCulled = false; scene.add(ridges);
  const townG = new BufferGeometry(), tp = [], tsz = [];
  [[.35, 40], [1.9, 26], [2.8, 60], [4.1, 18], [5.3, 34]].forEach(([a0, n]) => { for (let i = 0; i < n; i++) { const a = a0 + (Math.random() - .5) * .09; tp.push(Math.cos(a) * 90, .05 + Math.random() * .5, Math.sin(a) * 90); tsz.push(.8 + Math.random() * 1.6); } });
  townG.setAttribute("position", new Float32BufferAttribute(tp, 3)); townG.setAttribute("aS", new Float32BufferAttribute(tsz, 1));
  const towns = new Points(townG, far(
    `attribute float aS; uniform float pr; varying float vA; void main(){ vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.); gl_Position = p.xyww; gl_PointSize = aS * pr; vA = aS / 2.4; }`,
    `varying float vA; void main(){ float d = length(gl_PointCoord - .5); if (d > .5) discard; gl_FragColor = vec4(vec3(1., .78, .6) * vA * (1. - d * 1.8), 1.); }`,
    { blending: AdditiveBlending, uniforms: { pr: { value: PR } } }));
  towns.renderOrder = -7; towns.frustumCulled = false; scene.add(towns);

  const groundMat = new ShaderMaterial({
    uniforms: { base: { value: new Color(0x07111c) }, lineC: { value: new Color(0x3fd6c8) }, fogC: { value: FOGC }, fogD: { value: .0004 } },
    vertexShader: `varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,
    fragmentShader: `uniform vec3 base, lineC, fogC; uniform float fogD; varying vec3 vW;
      float gl(vec2 p, float s){ vec2 q = p / s; vec2 fw = max(fwidth(q), vec2(1e-5)); vec2 g = abs(fract(q - .5) - .5) / fw;
        float l = 1. - min(min(g.x, g.y), 1.); return l * (1. - smoothstep(.12, .4, max(fw.x, fw.y))); }
      void main(){ vec2 p = vW.xz; float a = gl(p, 1.) * .03 + gl(p, 10.) * .045 + gl(p, 100.) * .085 + gl(p, 1000.) * .1;
        vec3 c = base + lineC * a; float d = distance(vW, cameraPosition); float f = 1. - exp(-pow(fogD * d, 2.));
        gl_FragColor = vec4(mix(c, fogC, clamp(f, 0., 1.)), 1.); }`
  });
  const ground = new Mesh(new PlaneGeometry(60000, 60000), groundMat);
  ground.rotation.x = -Math.PI / 2; ground.renderOrder = -5; scene.add(ground);

  /* ------------------------------------------------ light */
  scene.add(new HemisphereLight(0x5b82a8, 0x05080e, 1.25));
  const moon = new DirectionalLight(0xc2d6ec, 1.9); moon.position.set(-.55, 1, .5); scene.add(moon);
  const rim = new DirectionalLight(0x3fd6c8, .55); rim.position.set(.9, .35, -1); scene.add(rim);
  const hallLight = new PointLight(0x3fd6c8, 0, 0, 2); scene.add(hallLight);
  const plantLight = new PointLight(0xf4977a, 0, 0, 2); scene.add(plantLight);

  /* ------------------------------------------------ materials and shapes */
  const std = (color, o = {}) => new MeshStandardMaterial({ color, roughness: .82, metalness: .15, ...o });
  const glow = (color, k, o = {}) => new MeshBasicMaterial({ color: new Color(color).multiplyScalar(k), ...o });
  const M = {
    pad: std(0x0e1a29, { roughness: .95 }), road: std(0x132234, { roughness: .9 }), gravel: std(0x101c2a, { roughness: 1 }),
    wall: std(0x182c44), roof: std(0x12233a), floor: std(0x0d1a2a, { roughness: .6, metalness: .35 }),
    gallery: std(0x1b2f48), rack: std(0x0b1520, { roughness: .4, metalness: .7 }), chiller: std(0x22374f, { metalness: .45, roughness: .6 }),
    steel: std(0x263c56, { metalness: .65, roughness: .45 }), dark: std(0x101c2b, { metalness: .5, roughness: .5 }), stack: std(0x41566e, { metalness: .5, roughness: .6 }),
    concrete: std(0x7e8c9c, { roughness: .95 }), tower: std(0x6b7a8b, { roughness: .95, side: DoubleSide }), hall2: std(0x2a3e57),
    cell: std(0x8697ad, { roughness: .5, metalness: .35 }), person: std(0x6f8296, { roughness: .8 }), truck: std(0x33485f, { metalness: .4, roughness: .5 }),
    teal: glow(0x3fd6c8, 2.4), tealDim: glow(0x3fd6c8, .75), busGlow: glow(0xf4977a, .32), lamp: glow(0xffe2c8, 1.9), beacon: glow(0xf4977a, 3), coral: glow(0xf4977a, 2.8), coralDim: glow(0xf4977a, .7), blue: glow(0x6aa8ff, 2.2), off: glow(0x1a2a3a, 1),
    ghost: new MeshStandardMaterial({ color: 0x3a5576, transparent: true, opacity: .14, depthWrite: false, roughness: 1 }),
    ghostRoof: new MeshStandardMaterial({ color: 0x3fd6c8, transparent: true, opacity: .035, depthWrite: false, roughness: 1, side: DoubleSide })
  };
  const L = {
    teal: new LineBasicMaterial({ color: new Color(0x3fd6c8).multiplyScalar(1.3), transparent: true, opacity: .55 }),
    tealFaint: new LineBasicMaterial({ color: 0x3fd6c8, transparent: true, opacity: .22 }),
    coral: new LineBasicMaterial({ color: new Color(0xf4977a).multiplyScalar(1.2), transparent: true, opacity: .7 }),
    wire: new LineBasicMaterial({ color: 0x9fb3c4, transparent: true, opacity: .55 }),
    steel: new LineBasicMaterial({ color: 0x6f86a0, transparent: true, opacity: .8 }),
    field: new LineBasicMaterial({ color: 0xbfd0de, transparent: true, opacity: .32 }),
    ghost: new LineBasicMaterial({ color: new Color(0xf4977a).multiplyScalar(1.1), transparent: true, opacity: .55 })
  };
  const G = { box: new BoxGeometry(1, 1, 1), cyl: new CylinderGeometry(1, 1, 1, 28, 1), cylOpen: new CylinderGeometry(1, 1, 1, 36, 1, true), ball: new SphereGeometry(1, 14, 10) };
  G.box.translate(0, .5, 0);   // boxes sit on their base
  G.cyl.translate(0, .5, 0); G.cylOpen.translate(0, .5, 0);
  const keep = new Set([...Object.values(G)]);

  const tmp = new Object3D();
  // one instanced mesh from a list of [x, y, z, sx, sy, sz, ry]
  function inst(geo, mat, list, parent) {
    if (!list.length) return null;
    const m = new InstancedMesh(geo, mat, list.length);
    list.forEach((p, i) => { tmp.position.set(p[0], p[1], p[2]); tmp.rotation.set(0, p[6] || 0, 0); tmp.scale.set(p[3] ?? 1, p[4] ?? 1, p[5] ?? 1); tmp.updateMatrix(); m.setMatrixAt(i, tmp.matrix); });
    m.instanceMatrix.needsUpdate = true; m.computeBoundingSphere(); m.computeBoundingBox();
    if (parent) parent.add(m);
    return m;
  }
  function lines(pos, mat, parent) {
    const g = new BufferGeometry(); g.setAttribute("position", new Float32BufferAttribute(pos, 3));
    const l = new LineSegments(g, mat); if (parent) parent.add(l); return l;
  }
  // the 12 edges of a box, as line segments
  function boxEdges(out, x0, y0, z0, x1, y1, z1) {
    const c = [[x0, y0, z0], [x1, y0, z0], [x1, y0, z1], [x0, y0, z1], [x0, y1, z0], [x1, y1, z0], [x1, y1, z1], [x0, y1, z1]];
    [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]].forEach(([a, b]) => out.push(...c[a], ...c[b]));
  }
  function dispose(g) {
    g.traverse(o => {
      if (o.isInstancedMesh) o.dispose();
      if (o.geometry && !keep.has(o.geometry)) o.geometry.dispose();
    });
    g.parent && g.parent.remove(g);
  }
  const canvasTex = (w, h, draw, rep) => {
    const c = document.createElement("canvas"); c.width = w; c.height = h; draw(c.getContext("2d"), w, h);
    const t = new CanvasTexture(c); t.anisotropy = 4; if (rep) { t.wrapS = t.wrapT = RepeatWrapping; } return t;
  };
  // the front of a rack: one light per tray
  const ledTex = canvasTex(64, 256, (g, w, h) => {
    g.fillStyle = "#fff";
    for (let i = 0; i < 18; i++) { const y = 18 + i * 12.4; g.globalAlpha = i % 6 === 5 ? .35 : 1; g.fillRect(8, y, 30, 3); g.fillRect(44, y, 10, 3); }
    g.globalAlpha = .5; g.fillRect(8, 6, 48, 2); g.fillRect(8, h - 10, 48, 2);
  });
  const tileTex = canvasTex(128, 128, (g, w) => { g.fillStyle = "#fff"; g.globalAlpha = .9; g.fillRect(0, 0, w, w); g.globalAlpha = 1; g.fillStyle = "#c8d4de"; g.fillRect(0, 0, w, 2); g.fillRect(0, 0, 2, w); }, true);
  const panelTex = canvasTex(256, 256, (g, w, h) => {
    g.fillStyle = "#fff"; g.fillRect(0, 0, w, h);
    g.fillStyle = "#aab6c2"; for (let x = 0; x < w; x += 32) g.fillRect(x, 0, 3, h);
    g.fillStyle = "#8d9aa8"; g.fillRect(0, h * .12, w, h * .06); g.fillRect(0, h * .9, w, h * .02);
  }, true);
  M.hallWall = std(0x1c3149); M.hallWall.map = panelTex;
  const ledMat = new MeshBasicMaterial({ map: ledTex, color: new Color(0x3fd6c8).multiplyScalar(1.05), transparent: true, depthWrite: false });

  /* ------------------------------------------------ tokens, heat and steam: points with a size in meters */
  const pointScale = { value: 1 };
  const atlasCanvas = document.createElement("canvas"); atlasCanvas.width = atlasCanvas.height = 1024;
  const atlas = new CanvasTexture(atlasCanvas); atlas.anisotropy = 4;
  const drawAtlas = () => {
    const g = atlasCanvas.getContext("2d"), C = 128; g.clearRect(0, 0, 1024, 1024); g.textAlign = "center"; g.textBaseline = "middle"; g.fillStyle = "#fff";
    GLYPHS.forEach((t, i) => {
      const x = (i % 8) * C + C / 2, y = Math.floor(i / 8) * C + C / 2;
      let f = 58; g.font = `700 ${f}px "Big Shoulders Text","Arial Narrow",sans-serif`;
      const w = g.measureText(t).width; if (w > C * .88) { f *= C * .88 / w; g.font = `700 ${f}px "Big Shoulders Text","Arial Narrow",sans-serif`; }
      g.fillText(t, x, y);
    });
    atlas.needsUpdate = true;
  };
  drawAtlas(); if (document.fonts && document.fonts.ready) document.fonts.ready.then(drawAtlas);

  const pointsMat = (frag, color, extra) => new ShaderMaterial({
    uniforms: { uScale: pointScale, uColor: { value: color }, uAtlas: { value: atlas } },
    vertexShader: `attribute float aSize; attribute float aAlpha; attribute float aCell; varying float vA; varying float vCell;
      uniform float uScale; void main(){ vA = aAlpha; vCell = aCell; vec4 mv = modelViewMatrix * vec4(position, 1.);
        gl_PointSize = clamp(aSize * uScale / -mv.z, 0., 220.); if (aAlpha < .005) gl_PointSize = 0.; gl_Position = projectionMatrix * mv; }`,
    fragmentShader: frag, transparent: true, depthWrite: false, fog: false, ...extra
  });
  const glyphFrag = `uniform sampler2D uAtlas; uniform vec3 uColor; varying float vA; varying float vCell;
    void main(){ vec2 pc = vec2(gl_PointCoord.x, 1. - gl_PointCoord.y); float cx = mod(vCell, 8.), cy = floor(vCell / 8. + .001);
      vec4 t = texture2D(uAtlas, (vec2(cx, 7. - cy) + pc) / 8.); float a = t.a * vA; if (a < .02) discard; gl_FragColor = vec4(uColor, a); }`;
  const softFrag = `uniform vec3 uColor; varying float vA; void main(){ float d = length(gl_PointCoord - .5) * 2.; float a = pow(max(0., 1. - d), 1.8) * vA; if (a < .004) discard; gl_FragColor = vec4(uColor, a); }`;

  function particles(n, mat) {
    const g = new BufferGeometry();
    const pos = new Float32Array(n * 3), size = new Float32Array(n), alpha = new Float32Array(n), cell = new Float32Array(n);
    g.setAttribute("position", new Float32BufferAttribute(pos, 3).setUsage(DynamicDrawUsage));
    g.setAttribute("aSize", new Float32BufferAttribute(size, 1).setUsage(DynamicDrawUsage));
    g.setAttribute("aAlpha", new Float32BufferAttribute(alpha, 1).setUsage(DynamicDrawUsage));
    g.setAttribute("aCell", new Float32BufferAttribute(cell, 1));
    const p = new Points(g, mat); p.frustumCulled = false; scene.add(p);
    const st = Array.from({ length: n }, () => ({ x: 0, y: 0, z: 0, vx: 0, vy: 0, vz: 0, age: 1, life: 1, s0: 1, s1: 1, a: 0 }));
    return { p, g, st, n, pos: g.attributes.position.array, size: g.attributes.aSize.array, alpha: g.attributes.aAlpha.array, cell: g.attributes.aCell.array };
  }
  const TOK = particles(small ? 380 : 900, pointsMat(glyphFrag, new Color(0x3fd6c8).multiplyScalar(2.1), { blending: AdditiveBlending }));
  for (let i = 0; i < TOK.n; i++) TOK.cell[i] = Math.floor(Math.random() * GLYPHS.length);
  TOK.g.attributes.aCell.needsUpdate = true;
  const HEAT = particles(small ? 160 : 360, pointsMat(softFrag, new Color(0xf4977a).multiplyScalar(.42), { blending: AdditiveBlending }));
  const STEAM = particles(small ? 90 : 200, pointsMat(softFrag, new Color(0xa9bccd).multiplyScalar(.5), {}));

  /* ------------------------------------------------ the hero token and a person, for scale */
  function drawToken(g, w, h) {
    const r = 30, rr = () => { g.beginPath(); g.moveTo(r + 8, 8); g.arcTo(w - 8, 8, w - 8, h - 8, r); g.arcTo(w - 8, h - 8, 8, h - 8, r); g.arcTo(8, h - 8, 8, 8, r); g.arcTo(8, 8, w - 8, 8, r); g.closePath(); };
    rr(); g.fillStyle = "rgba(6,16,30,.88)"; g.fill(); g.strokeStyle = "#3fd6c8"; g.lineWidth = 7; g.stroke();
    g.textAlign = "center"; g.textBaseline = "middle"; g.font = `800 120px "Big Shoulders Text","Arial Narrow",sans-serif`;
    g.fillStyle = "#62798d"; g.fillText("▁", w / 2 - 128, h / 2 + 8); g.fillStyle = "#e9fbf8"; g.fillText("power", w / 2 + 22, h / 2 + 8);
  }
  const tokenTex = canvasTex(512, 256, (g, w, h) => {
    drawToken(g, w, h);
  });
  const heroToken = new Sprite(new SpriteMaterial({ map: tokenTex, transparent: true, depthWrite: false }));
  heroToken.scale.set(.56, .28, 1); scene.add(heroToken);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { /* redraw with the real face */
    const c = tokenTex.image, g = c.getContext("2d"); g.clearRect(0, 0, c.width, c.height);
    drawToken(g, c.width, c.height);
    tokenTex.needsUpdate = true; drawAtlas();
  });

  const person = new Group();
  { const body = new Mesh(new CapsuleGeometry(.19, 1.14, 6, 14), M.person); body.position.y = .76; person.add(body);
    const head = new Mesh(new SphereGeometry(.12, 16, 12), M.person); head.position.y = 1.68; person.add(head);
    const hat = new Mesh(new SphereGeometry(.135, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2), M.tealDim); hat.position.y = 1.71; person.add(hat); }
  scene.add(person);

  /* ------------------------------------------------ layout: every size here is in meters */
  const site = {};
  const groups = { campus: null, hero: null, grid: null, plant: null, refs: null };
  let keys = {};
  const pulses = { lines: [], m: null, mb: null, list: [] };
  const emit = { racks: [], roofs: [], heat: [], steam: [] };

  function hallPlan(n) {
    // n racks in rows of up to 80 (two halves of 40 either side of a spine). Rows pair up back to back across a
    // hot aisle; the pairs face each other across cold aisles. The front row faces out, toward the open side.
    const nl = Math.max(1, Math.min(ROWS, Math.ceil(n / (LINE * 2))));
    const perLine = Math.min(LINE * 2, Math.max(1, Math.round(n)));
    const half = Math.ceil(perLine / 2);
    const lz = [];
    for (let li = 0; li < nl; li++) { const p = li >> 1, side = li & 1; lz.push(-(p * (2 * RK.d + HOT + COLD) + side * (RK.d + HOT)) - RK.d / 2); }
    const front = MARGIN, back = lz[nl - 1] - RK.d / 2 - MARGIN, cz = (front + back) / 2;
    const inD = front - back, inW = half * 2 * RK.w + SPINE + 2 * MARGIN;
    const racks = []; let left = Math.max(1, Math.round(n));
    for (let li = 0; li < nl && left > 0; li++) {
      const cnt = Math.min(perLine, left); left -= cnt;
      for (let j = 0; j < cnt; j++) {
        const h = j < half ? 0 : 1, jj = h ? j - half : j;
        racks.push({ x: h ? SPINE / 2 + (jj + .5) * RK.w : -SPINE / 2 - (jj + .5) * RK.w, z: lz[li] - cz, face: (li & 1) ? -1 : 1, line: li });
      }
    }
    return { racks, inW, inD, lines: nl, lineZ: lz.map(z => z - cz), half, w: inW + GAL, d: inD };
  }

  function blockOf(n, cap) {
    n = Math.max(1, Math.ceil(n));
    if (n <= cap) return { k: 1, n };
    for (let e = 0; e < 12; e++) for (const m of [1, 2, 5]) { const k = m * 10 ** e; if (k > 1 && Math.ceil(n / k) <= cap) return { k, n: Math.ceil(n / k) }; }
    return { k: 1, n: cap };
  }

  function layout(r) {
    const full = hallPlan(SLOTS);
    const nHero = r.racks < 1 ? 1 : Math.min(SLOTS, Math.ceil(r.racks));
    const hero = r.halls > 1 ? full : hallPlan(nHero);
    const blk = blockOf(Math.max(1, r.halls), small ? 64 : 180);
    const nb = r.racks < 1 ? 0 : blk.n;
    const bw = r.halls > 1 ? full.w : hero.w, bd = r.halls > 1 ? full.d : hero.d;
    const cols = nb <= 1 ? 1 : Math.ceil(Math.sqrt(nb * 1.5)), rows = nb <= 1 ? 1 : Math.ceil(nb / cols);
    const pitchX = bw + 26, pitchZ = bd + 30;
    const halls = [];
    for (let i = 0; i < nb; i++) {
      const c = i % cols, rr = rows - 1 - Math.floor(i / cols);   // the first hall sits front left
      halls.push({ x: (c - (cols - 1) / 2) * pitchX, z: (rr - (rows - 1) / 2) * pitchZ });
    }
    const campus = nb ? { minX: -((cols - 1) / 2) * pitchX - bw / 2 - 14, maxX: ((cols - 1) / 2) * pitchX + bw / 2 + 14, minZ: -((rows - 1) / 2) * pitchZ - bd / 2 - 14, maxZ: ((rows - 1) / 2) * pitchZ + bd / 2 + 14 }
      : { minX: -6, maxX: 6, minZ: -6, maxZ: 6 };
    return { full, hero, nb, k: blk.k, halls, bw, bd, campus, nHero };
  }

  /* ------------------------------------------------ the campus: halls, one of them cut open */
  function buildCampus(r, Lc) {
    const g = new Group(); g.name = "campus";
    const C = Lc.campus;
    inst(G.box, M.pad, [[(C.minX + C.maxX) / 2, 0, (C.minZ + C.maxZ) / 2, C.maxX - C.minX, .06, C.maxZ - C.minZ]], g);
    const edges = [], roofs = [], walls = [], bands = [], chillers = [], galleries = [];
    emit.roofs = [];
    Lc.halls.forEach((h, i) => {
      // halls hang off their interior center; the electrical gallery is on the west side
      const x0 = h.x - Lc.bw / 2, x1 = h.x + Lc.bw / 2, z0 = h.z - Lc.bd / 2, z1 = h.z + Lc.bd / 2;
      if (i === 0) return;
      walls.push([h.x, .06, h.z, Lc.bw, HALL_H, Lc.bd]);
      bands.push([h.x, HALL_H - 1.4, h.z, Lc.bw + .3, .35, Lc.bd + .3]);
      boxEdges(edges, x0, .06, z0, x1, HALL_H + .06, z1);
      for (let a = 0; a < 2; a++) for (let b = 0; b < 7; b++) chillers.push([x0 + 12 + b * (Lc.bw - 20) / 6, HALL_H + .06, h.z + (a ? 1 : -1) * Lc.bd * .22, 4, 2, 2.6]);
      emit.roofs.push({ x0: x0 + 4, x1: x1 - 4, z0: z0 + 4, z1: z1 - 4, y: HALL_H + 2 });
    });
    if (walls.length) { M.hallWall.map.repeat.set(Lc.bw / 9.6, 1); M.hallWall.needsUpdate = true; }
    inst(G.box, M.hallWall, walls, g); inst(G.box, M.tealDim, bands, g); inst(G.box, M.chiller, chillers, g);
    if (edges.length) lines(edges, L.teal, g);
    void roofs; void galleries;
    if (Lc.nb) buildHero(g, r, Lc);
    return g;
  }

  function buildHero(g, r, Lc) {
    const H = Lc.hero, h0 = Lc.halls[0], c = r.c;
    const gx = h0.x - (Lc.bw - H.w) / 2;   // a small hero hall sits at the front left of its plot
    const ix = gx + GAL / 2, iz = h0.z;     // interior center
    const hall = new Group(); hall.position.set(ix, 0, iz); g.add(hall);
    // floor, low section-cut walls, a ghost of the full building, and its electrical gallery
    const fl = new Mesh(new BoxGeometry(H.inW, .2, H.inD), M.floor.clone());
    fl.material.map = tileTex.clone(); fl.material.map.needsUpdate = true; fl.material.map.repeat.set(H.inW / .6, H.inD / .6); fl.material.color.set(0x0f1d2d);
    fl.position.y = .1; hall.add(fl);
    const T = .35, W2 = H.inW / 2, D2 = H.inD / 2;
    const ws = [[0, .2, -D2 - T / 2, H.inW + 2 * T, CUT, T], [W2 + T / 2, .2, 0, T, CUT, H.inD], [-W2 - T / 2, .2, 0, T, CUT, H.inD], [0, .2, D2 + T / 2, H.inW + 2 * T, 1.1, T]];
    inst(G.box, M.wall, ws, hall);
    const cut = [], ct = CUT + .21, fr = 1.31;
    cut.push(-W2 - T, ct, -D2 - T, W2 + T, ct, -D2 - T, W2 + T, ct, -D2 - T, W2 + T, ct, D2, -W2 - T, ct, -D2 - T, -W2 - T, ct, D2,
      -W2 - T, fr, D2 + T, W2 + T, fr, D2 + T, W2 + T, ct, D2, W2 + T, fr, D2 + T, -W2 - T, ct, D2, -W2 - T, fr, D2 + T);
    lines(cut, L.teal, hall);
    const gal = [-W2 - T - GAL / 2 + T / 2, .2, 0, GAL - T, CUT, H.inD];
    inst(G.box, M.gallery, [gal], hall);
    const gc = []; boxEdges(gc, -W2 - GAL, CUT + .2, -D2, -W2 - T, CUT + .2, D2); lines(gc.slice(0, 24), L.coral, hall);
    // switchgear lights along the gallery roof
    const nl = Math.max(2, Math.round(H.inD / 6));
    inst(G.box, M.lamp, Array.from({ length: nl }, (_, i) => [-W2 - T - GAL / 2, CUT + .2, -D2 + 3 + i * (H.inD - 6) / (nl - 1), .5, .08, .5]), hall);
    const gl = []; boxEdges(gl, -W2 - GAL, .2, -D2, W2, HALL_H, D2); lines(gl, L.tealFaint, hall);
    const ghost = new Mesh(new BoxGeometry(H.inW + GAL, HALL_H - CUT, H.inD), M.ghostRoof); ghost.position.set(-GAL / 2, CUT + (HALL_H - CUT) / 2 + .2, 0); hall.add(ghost);

    // racks: the hero rack is the front row's last one on the east side, drawn in detail
    let hi = -1;
    H.racks.forEach((rk, i) => { if (rk.line === 0 && rk.x > 0 && (hi < 0 || rk.x < H.racks[hi].x)) hi = i; });
    if (hi < 0) H.racks.forEach((rk, i) => { if (rk.line === 0 && (hi < 0 || rk.x > H.racks[hi].x)) hi = i; });
    const hr = H.racks[hi];
    const bodies = [], leds = [];
    emit.racks = [];
    H.racks.forEach((rk, i) => {
      emit.racks.push({ x: ix + rk.x, z: iz + rk.z });
      if (i === hi) return;
      bodies.push([rk.x, .2, rk.z, RK.w * .96, RK.h, RK.d]);
      leds.push([rk.x, .2 + .12, rk.z + rk.face * (RK.d / 2 + .012), RK.w * .82, RK.h * .9, 1, rk.face > 0 ? 0 : Math.PI]);
    });
    inst(G.box, M.rack, bodies, hall);
    const ledM = ledMat.clone(); ledM.color = new Color(c.led).multiplyScalar(1.05);
    const lp = new PlaneGeometry(1, 1); lp.translate(0, .5, 0);
    const lm = inst(lp, ledM, leds, hall); if (lm) lm.renderOrder = 2;
    // overhead busways, one per row, carrying power down the line
    inst(G.box, M.dark, H.lineZ.map(z => [0, 3.3, z, H.half * 2 * RK.w + SPINE - .4, .1, .2]), hall);
    inst(G.box, M.busGlow, H.lineZ.map(z => [0, 3.27, z, H.half * 2 * RK.w + SPINE - .4, .03, .05]), hall);
    // hot-aisle roofs between each pair of rows
    inst(G.box, M.ghost, H.lineZ.filter((z, i) => i % 2 === 0 && H.lineZ[i + 1] !== undefined).map((z, i) => [0, RK.h + .22, z - RK.d / 2 - HOT / 2, H.half * 2 * RK.w + SPINE, .05, HOT + .1]), hall);

    // the hero rack
    const rg = new Group(); rg.position.set(hr.x, .2, hr.z); hall.add(rg);
    const body = new Mesh(G.box, M.rack); body.scale.set(RK.w, RK.h, RK.d); rg.add(body);
    const front = RK.d / 2 + .006;
    const lit = r.racks < 1 ? r.chips : Infinity;
    const strip = (y, mat, w = .5, hgt = .03) => { const m = new Mesh(G.box, mat); m.scale.set(w, hgt, .012); m.position.set(0, y, front); rg.add(m); };
    const ledC = glow(c.led, 1.35), off = M.off;
    if (c.rack === 72) {
      // 2 power shelves, 10 compute trays, 9 switch trays, 8 compute trays, 2 power shelves
      const slots = [["p"], ["p"], ...Array(10).fill(["c"]), ...Array(9).fill(["s"]), ...Array(8).fill(["c"]), ["p"], ["p"]];
      let ci = 0;
      slots.forEach(([t], i) => {
        const y = RK.h - .12 - i * ((RK.h - .24) / (slots.length - 1));
        if (t === "c") { const on = ci * 4 < lit; ci++; strip(y, on ? ledC : off); strip(y + .002, on ? M.lamp : off, .05, .028); }
        else strip(y, t === "p" ? M.coral : M.blue, .5, .022);
      });
    } else {
      for (let s = 0; s < 4; s++) {
        const y0 = .35 + s * .46, on = s * 8 < lit;
        const face = new Mesh(G.box, M.dark); face.scale.set(.54, .4, .01); face.position.set(0, y0, front - .002); rg.add(face);
        for (let k = 0; k < 6; k++) strip(y0 + .04 + k * .055, on ? ledC : off, .44, .016);
      }
      strip(.12, M.coral); strip(RK.h - .1, M.coral);
    }
    // where the camera can find things
    site.heroRack = new Vector3(ix + hr.x, .2, iz + hr.z);
    site.heroFace = hr.face;
    site.hall = { c: new Vector3(ix - GAL / 2, 0, iz), w: H.w, d: H.d };
    person.position.set(site.heroRack.x + 1.9, .2, site.heroRack.z + hr.face * (RK.d / 2 + 1));
    person.rotation.y = -.7;
    heroToken.position.set(site.heroRack.x + .15, 2.2, site.heroRack.z + hr.face * (RK.d / 2 + .55));
    hallLight.position.set(ix, 16, iz + 6); hallLight.intensity = Math.min(420, 2 * H.inW * H.inD / 10);
  }

  /* ------------------------------------------------ the substation, the line, the pipe */
  function buildGrid(r, Lc, P) {
    const g = new Group(); g.name = "grid";
    const C = Lc.campus;
    const tiny = Lc.nb === 0;
    const sw = tiny ? 10 : 74, sd = tiny ? 8 : 52;
    const sx = C.minX - (tiny ? 16 : 60) - sw / 2, sz = tiny ? site.heroRack.z : 0;
    site.sub = { c: new Vector3(sx, 0, sz), w: sw, d: sd };
    inst(G.box, M.gravel, [[sx, 0, sz, sw, .05, sd]], g);
    const fe = []; boxEdges(fe, sx - sw / 2, .05, sz - sd / 2, sx + sw / 2, 2.4, sz + sd / 2); lines(fe, L.steel, g);
    const nT = tiny ? 1 : Math.min(8, Math.max(2, Math.ceil(r.facMW / 140) + 1));
    const tx = [], fins = [], bush = [], tips = [];
    for (let i = 0; i < nT; i++) {
      const x = tiny ? sx : sx - sw / 2 + 10 + i * ((sw - 20) / Math.max(1, nT - 1)), z = sz + (tiny ? 0 : 6);
      const s = tiny ? .35 : 1;
      tx.push([x, .05, z, 6 * s, 4.6 * s, 4.4 * s]);
      for (let f = 0; f < 5; f++) fins.push([x - 2.4 * s + f * 1.2 * s, .4, z + 2.6 * s, .16, 3.6 * s, .9 * s]);
      for (let b = -1; b <= 1; b++) { bush.push([x + b * 1.7 * s, 4.6 * s, z, .22 * s, 2.2 * s, .22 * s]); tips.push([x + b * 1.7 * s, 6.8 * s, z, .34 * s, .34 * s, .34 * s]); }
    }
    inst(G.box, M.steel, tx, g); inst(G.box, M.dark, fins, g); inst(G.cyl, M.concrete, bush, g); inst(G.ball, M.coral, tips, g);
    // gantries over the bus
    if (!tiny) { const ga = []; for (let i = 0; i < 4; i++) { const x = sx - sw / 2 + 8 + i * ((sw - 16) / 3); ga.push(x, 0, sz - 16, x, 16, sz - 16, x, 16, sz - 16, x, 16, sz - 4, x, 0, sz - 4, x, 16, sz - 4); } ga.push(sx - sw / 2 + 8, 14, sz - 10, sx + sw / 2 - 8, 14, sz - 10); lines(ga, L.steel, g); }

    // feeders, underground from the substation to each hall's gallery, drawn as glowing cable routes
    const feeders = [];
    const halls = Lc.halls.slice(0, small ? 18 : 48);
    const busX = C.minX + 4;
    halls.forEach((h, i) => {
      const gxw = h.x - Lc.bw / 2 + (i === 0 && Lc.nb === 1 ? 0 : 0) + 3;
      const path = [[sx + sw / 2, .25, sz - 10 + (i % 5) * 1.2], [busX - 2 + (i % 5) * .8, .25, sz - 10 + (i % 5) * 1.2], [busX - 2 + (i % 5) * .8, .25, h.z], [gxw, .25, h.z]];
      feeders.push(path);
    });
    if (tiny) feeders.push([[sx + sw / 2, .25, sz], [site.heroRack.x, .25, sz]]);
    const fpos = []; feeders.forEach(p => { for (let i = 0; i < p.length - 1; i++) fpos.push(...p[i], ...p[i + 1]); });
    lines(fpos, L.coral, g);

    pulses.lines = [];
    if (onsite(r)) {
      // buried cables straight from the plant's edge into the substation
      const cab = [];
      for (let k = -1; k <= 1; k++) {
        const pts = [new Vector3(P.maxX - 4, .3, sz + k * 1.6), new Vector3(sx - sw / 2, .3, sz + k * 1.6)];
        cab.push(...pts[0].toArray(), ...pts[1].toArray());
        pulses.lines.push({ pts, kind: "p", r: .7 });
      }
      lines(cab, L.coral, g);
      site.line = null;
    } else {
      // the transmission line from the plant's switchyard to the substation
      const a = new Vector3(P.maxX + 6, 0, 0), b = new Vector3(sx - sw / 2 - 4, 0, sz);
      const span = a.distanceTo(b), nTow = Math.max(2, Math.round(span / 140) + 1);
      const tow = [], arms = [];
      const towerLines = (x, z, out) => {
        const H = 38, b0 = 4.2, b1 = 1.1;
        const lv = [0, 9, 18, 27, 34, H];
        const wAt = y => b0 + (b1 - b0) * Math.min(1, y / 34);
        const sq = y => { const w = y >= 34 ? b1 * .7 : wAt(y); return [[x - w, y, z - w], [x + w, y, z - w], [x + w, y, z + w], [x - w, y, z + w]]; };
        for (let k = 0; k < lv.length - 1; k++) {
          const A = sq(lv[k]), B = sq(lv[k + 1]);
          for (let j = 0; j < 4; j++) { out.push(...A[j], ...B[j], ...A[j], ...A[(j + 1) % 4], ...A[j], ...B[(j + 1) % 4], ...A[(j + 1) % 4], ...B[j]); }
        }
        out.push(x, 34, z - 9, x, 34, z + 9, x, 34, z - 9, x, 30, z - 2.5, x, 34, z + 9, x, 30, z + 2.5, x, H, z, x, 34, z - 9, x, H, z, x, 34, z + 9);
      };
      const tpts = [];
      for (let i = 0; i < nTow; i++) { const t = i / (nTow - 1); const x = a.x + (b.x - a.x) * t, z = a.z + (b.z - a.z) * t; towerLines(x, z, tow); tpts.push(new Vector3(x, 0, z)); }
      lines(tow, L.steel, g);
      void arms;
      inst(G.ball, M.beacon, tpts.map(t => [t.x, 38.6, t.z, .55, .55, .55]), g);
      // three conductors that sag between towers
      const phases = [[34, -8.4], [34, 8.4], [38, 0]];
      phases.forEach(([y, dz]) => {
        const pts = [];
        for (let i = 0; i < tpts.length - 1; i++) for (let s = 0; s <= 16; s++) {
          const t = s / 16, p = tpts[i].clone().lerp(tpts[i + 1], t);
          pts.push(new Vector3(p.x, y - 3.4 * 4 * t * (1 - t) - .6, p.z + dz));
        }
        const lp = []; for (let i = 0; i < pts.length - 1; i++) lp.push(pts[i].x, pts[i].y, pts[i].z, pts[i + 1].x, pts[i + 1].y, pts[i + 1].z);
        lines(lp, L.wire, g);
        pulses.lines.push({ pts, kind: "p", r: 1.1 });
      });
  site.line = tpts[Math.floor(tpts.length / 2)].clone().setY(40);
    }
    feeders.slice(0, small ? 8 : 20).forEach(p => pulses.lines.push({ pts: p.map(q => new Vector3(...q)), kind: "p", r: .55 }));

    // gas comes in by pipe from over the horizon
    if (r.p.gas) {
      const px = P.minX - 24, pz0 = -2600, pz1 = (P.minZ + P.maxZ) / 2;
      const path = [new Vector3(px, .9, pz0), new Vector3(px, .9, pz1 - 6), new Vector3(px + 6, .9, pz1), new Vector3(P.minX + 2, .9, pz1)];
      const tube = new Mesh(new TubeGeometry(new CatmullRomCurve3(path, false, "catmullrom", .05), 120, .6, 10, false), M.steel); g.add(tube);
      const sup = []; for (let z = pz0; z < pz1 - 10; z += 24) sup.push([px, 0, z, .3, .6, 1.4]); inst(G.box, M.dark, sup, g);
      pulses.lines.push({ pts: path, kind: "g", r: .75 });
      site.gas = new Vector3(px, 4, Math.max(pz0 + 300, pz1 - 420));
    } else site.gas = null;
    return g;
  }

  /* ------------------------------------------------ power plants, one shape per source */
  const SHAPES = {
    turbine: { w: 54, d: 26, h: 40, gx: 22, gz: 26, cap: 120, aspect: 1.4 },
    aero: { w: 30, d: 12, h: 18, gx: 12, gz: 14, cap: 300, aspect: 1.6 },
    cell: { w: 8.9, d: 2.4, h: 2.2, gx: 1.4, gz: 2.4, cap: small ? 1400 : 3600, aspect: 1.3 },
    reactor: { w: 270, d: 230, h: 152, gx: 60, gz: 60, cap: 24, aspect: 1.5 }
  };
  // each part: [geometry, material, x, y, z, sx, sy, sz]
  function partsOf(shape, ghost) {
    const S = (m) => ghost ? (m === M.coral || m === M.coralDim || m === M.teal || m === M.tealDim || m === M.lamp ? M.coralDim : M.ghost) : m;
    if (shape === "turbine") return [
      [G.box, S(M.pad), 0, 0, 0, 54, .4, 26], [G.box, S(M.steel), -18, .4, 0, 12, 6.5, 6.5], [G.box, S(M.dark), -18, .4, 9.5, 6, 5, 5],
      [G.box, S(M.hall2), -2, .4, 0, 20, 9, 8], [G.box, S(M.steel), -5, 9.4, 0, 10, 8, 13], [G.box, S(M.dark), -8, 3, 0, 3, 7, 3],
      [G.box, S(M.steel), 13, .4, 0, 8, 7.5, 7.5], [G.cyl, S(M.stack), 21, .4, 0, 4.4, 37, 4.4], [G.cylOpen, S(M.dark), 21, 30, 0, 4.46, 1.2, 4.46],
      [G.cylOpen, S(M.coral), 21, 37, 0, 4.48, .9, 4.48], [G.box, S(M.coralDim), -2, 9.1, 0, 20.2, .25, 8.2],
      [G.box, S(M.lamp), -12.2, 6, 4.1, .5, .3, .2], [G.box, S(M.lamp), 8.2, 6, 4.1, .5, .3, .2], [G.box, S(M.lamp), -18, 6.6, 3.35, .5, .3, .2],
      [G.box, S(M.lamp), -5, 17.5, 6.6, .6, .3, .2], [G.box, S(M.lamp), 17, 7.6, 3.85, .5, .3, .2]
    ];
    if (shape === "aero") return [
      [G.box, S(M.pad), 0, 0, 0, 30, .3, 12], [G.box, S(M.hall2), -2, .3, 0, 14, 5.5, 4.6], [G.box, S(M.steel), -6, 5.8, 0, 5, 4, 5.6],
      [G.box, S(M.steel), -11.5, .3, 0, 6, 4, 4], [G.cyl, S(M.dark), 8, .3, 0, 1.7, 16, 1.7], [G.cylOpen, S(M.coral), 8, 16.2, 0, 1.76, .5, 1.76],
      [G.box, S(M.coralDim), -2, 5.75, 0, 14.2, .18, 4.8], [G.box, S(M.lamp), -6, 3.6, 2.35, .4, .25, .15], [G.box, S(M.lamp), 3, 3.6, 2.35, .4, .25, .15]
    ];
    if (shape === "cell") return [
      [G.box, S(M.cell), 0, 0, 0, 8.9, 2.1, 2.4], [G.box, S(M.tealDim), 0, 1.72, 0, 8.94, .1, 2.44], [G.box, S(M.dark), 0, 2.1, 0, 8.6, .14, 2.1]
    ];
    return [
      [G.box, S(M.pad), 0, 0, 0, 270, .5, 230], [G.cyl, S(M.concrete), -80, .5, -40, 21.5, 58, 21.5],
      [G.ball, S(M.concrete), -80, 58.5, -40, 21.5, 11, 21.5], [G.cylOpen, S(M.steel), -80, 50, -40, 21.8, 3.2, 21.8],
      [G.box, S(M.concrete), -80, .5, 12, 50, 30, 40], [G.box, S(M.hall2), 10, .5, -55, 92, 36, 44], [G.box, S(M.wall), 10, .5, -20, 60, 14, 20],
      [G.box, S(M.coralDim), 10, 34.6, -32.8, 92.2, .5, .2], [G.box, S(M.lamp), -20, 12, -32.8, 1.2, .5, .2], [G.box, S(M.lamp), 40, 12, -32.8, 1.2, .5, .2]
    ];
  }
  const towerGeo = (() => {
    const pts = [[0, 0], [62, 0], [52, 40], [40, 100], [37, 118], [38, 136], [41, 152], [40.4, 152], [36.6, 136], [35.8, 118], [38.8, 100], [50.8, 40], [60.8, 0]].map(([x, y]) => new Vector2(x, y));
    return new LatheGeometry(pts, 64);
  })();

  const onsite = r => r.p.shape === "cell" || r.facMW < 20;
  function buildPlant(r) {
    const g = new Group(); g.name = "plant";
    const S = SHAPES[r.p.shape], ghost = !r.many;
    const blk = blockOf(ghost ? 1 : r.build, S.cap);
    const n = blk.n;
    let cols = Math.max(1, Math.ceil(Math.sqrt(n * S.aspect * S.d / S.w)));
    if (r.p.shape === "cell") cols = Math.max(1, Math.ceil(Math.sqrt(n * 3.4)));
    cols = Math.min(n, cols);
    const rows = Math.ceil(n / cols);
    const blockGap = r.p.shape === "cell" ? 8 : 0;   // fuel cells sit in blocks of 10 × 10 with roads between
    const ux = i => { const c = i % cols; return c * (S.w + S.gx) + (blockGap ? Math.floor(c / 10) * blockGap : 0); };
    const uz = i => { const rr = Math.floor(i / cols); return rr * (S.d + S.gz) + (blockGap ? Math.floor(rr / 10) * blockGap : 0); };
    const W = ux(cols - 1) + S.w, D = uz((rows - 1) * cols) + S.d;
    const m = 16 + (r.p.shape === "reactor" ? 30 : 0);
    // the plant sits west of the substation, across the transmission line
    const east = site.sub.c.x - site.sub.w / 2 - (onsite(r) ? 28 : Math.max(260, Math.min(700, (W + D) * .35)));
    const x0 = east - W, z0 = -D / 2;
    const P = { minX: x0 - m, maxX: east + m, minZ: z0 - m, maxZ: z0 + D + m };
    inst(G.box, M.gravel, [[(P.minX + P.maxX) / 2, 0, (P.minZ + P.maxZ) / 2, P.maxX - P.minX, .04, P.maxZ - P.minZ]], g);
    const pos = Array.from({ length: n }, (_, i) => [x0 + ux(i) + S.w / 2, z0 + uz(i) + S.d / 2]);
    partsOf(r.p.shape, ghost).forEach(([geo, mat, x, y, z, sx, sy, sz]) => {
      inst(geo, mat, pos.map(([px, pz]) => [px + x, y, pz + z, sx, sy, sz]), g);
      if (ghost && mat === M.ghost) {
        const e = new LineSegments(new EdgesGeometry(geo, 25), L.ghost);
        e.position.set(pos[0][0] + x, y, pos[0][1] + z); e.scale.set(sx, sy, sz); g.add(e);
      }
    });
    emit.heat = []; emit.steam = [];
    if (r.p.shape === "reactor") {
      inst(towerGeo, ghost ? M.ghost : M.tower, pos.map(([px, pz]) => [px + 75, .5, pz + 55]), g);
      if (ghost) { const e = new LineSegments(new EdgesGeometry(towerGeo, 8), L.ghost); e.position.set(pos[0][0] + 75, .5, pos[0][1] + 55); g.add(e); }
      inst(G.ball, M.coral, pos.flatMap(([px, pz]) => [0, 1, 2, 3].map(k => [px + 75 + Math.cos(k * 1.57) * 41, 153, pz + 55 + Math.sin(k * 1.57) * 41, .9, .9, .9])), g);
      if (!ghost) pos.slice(0, 8).forEach(([px, pz]) => emit.steam.push(new Vector3(px + 75, 150, pz + 55)));
    } else if (!ghost && r.p.shape !== "cell") {
      const sx = r.p.shape === "turbine" ? 21 : 8, sy = r.p.shape === "turbine" ? 38 : 16.6;
      pos.slice(0, small ? 10 : 28).forEach(([px, pz]) => emit.heat.push(new Vector3(px + sx, sy, pz)));
    }
    site.plant = { c: new Vector3((P.minX + P.maxX) / 2, 0, (P.minZ + P.maxZ) / 2), w: P.maxX - P.minX, d: P.maxZ - P.minZ, h: S.h, k: blk.k, n };
    plantLight.position.set(site.plant.c.x, S.h * 1.4, site.plant.c.z); plantLight.intensity = ghost || r.p.shape === "cell" ? 0 : Math.min(2.4e4, 70 * Math.sqrt(n) * S.h * S.h / 10);
    return { g, P };
  }

  /* ------------------------------------------------ things for scale: a truck and a football field */
  function buildRefs(r, Lc, P) {
    const g = new Group(); g.name = "refs";
    const tx = P.maxX - 40, tz = P.maxZ + 10;
    inst(G.box, M.truck, [[tx, .9, tz, 13.6, 3.1, 2.6]], g); inst(G.box, M.steel, [[tx + 8.6, .6, tz, 2.6, 3.2, 2.5]], g);
    inst(G.box, M.dark, [[tx + 2, 0, tz, 17, .9, 2.4]], g); inst(G.box, M.coral, [[tx - 6.85, 1.3, tz + .9, .08, .25, .3], [tx - 6.85, 1.3, tz - .9, .08, .25, .3]], g);
    site.truck = new Vector3(tx + 2, 4.5, tz);
    // an American football field, 120 yards with end zones
    const C = Lc.campus;
    const fx = Lc.nb ? C.maxX - 55 - 10 : C.maxX + 80, fz = Lc.nb ? C.maxZ + 52 : 0;
    const Lf = 109.7, Wf = 48.8, f = [];
    boxEdges(f, fx - Lf / 2, .08, fz - Wf / 2, fx + Lf / 2, .08, fz + Wf / 2);
    for (let i = 0; i <= 10; i++) { const x = fx - 45.72 + i * 9.144; f.push(x, .08, fz - Wf / 2, x, .08, fz + Wf / 2); }
    lines(f.slice(0, 24 * 1).concat(f.slice(24 * 3)), L.field, g);
    site.field = new Vector3(fx, 2.5, fz);
    // a road from the plant to the campus
    inst(G.box, M.road, [[(P.maxX + C.minX) / 2, 0, (Lc.nb ? C.maxZ : 6) + 8, C.minX - P.maxX + 40, .05, 7]], g);
    return g;
  }

  /* ------------------------------------------------ labels that point at things */
  const labelBox = $("#labels");
  const LB = {
    token: { r: [.8, 4.6] }, rack: { r: [2.4, 60] }, person: { r: [2.2, 34] }, hall: { r: [22, 600] }, field: { r: [90, 1800] },
    campus: { r: [160, 12000] }, flow: { r: [70, 12000] }, sub: { r: [60, 900] }, plant: { r: [90, 20000] }, truck: { r: [25, 460] }, gas: { r: [140, 4000] }
  };
  Object.entries(LB).forEach(([id, l]) => {
    const el = document.createElement("div"); el.className = `lb lb-${id}`; labelBox.appendChild(el);
    l.el = el; l.p = new Vector3(); l.on = false; l.o = 0;
  });
  function setLabels(r, Lc) {
    const c = r.c, p = r.p;
    const t = (id, html, pos) => { LB[id].el.innerHTML = html; if (pos) LB[id].p.copy(pos); LB[id].on = !!pos; };
    t("token", `<b>1 token</b><small>${joules(r.jTok)} at the wall</small>`, heroToken.position.clone().add(new Vector3(0, .3, 0)));
    t("rack", `<b>${sig(c.kw * c.rack, 3)} kW</b><small>one ${c.n} rack, ${c.rack} GPUs</small>`, site.heroRack.clone().add(new Vector3(0, RK.h + .25, 0)));
    t("person", `<b>1.8 m</b><small>a person, for scale</small>`, person.position.clone().add(new Vector3(0, 1.95, 0)));
    t("hall", Lc.nb ? `<b>${count(r.racks)} racks</b><small>${count(r.chips)} chips${r.halls > 1 ? ` in ${int(r.halls)} halls` : ""}</small>` : `<b>${sig(r.chips, 2)} chips</b><small>less than one rack</small>`,
      Lc.nb ? site.hall.c.clone().add(new Vector3(0, HALL_H + 5, 0)) : site.heroRack.clone().add(new Vector3(0, 4.2, 0)));
    t("campus", `<b>${power(r.facMW)}</b><small>${Lc.k > 1 ? `each hall drawn stands for ${int(Lc.k)}` : `at the wall, PUE ${state.pue.toFixed(2)}`}</small>`,
      Lc.nb > 1 ? new Vector3((Lc.campus.minX + Lc.campus.maxX) / 2, HALL_H + 20 + (Lc.campus.maxX - Lc.campus.minX) * .05, (Lc.campus.minZ + Lc.campus.maxZ) / 2) : null);
    t("flow", `<b>${words(r.tps)}</b><small>tokens a second, out to the world</small>`, (Lc.nb ? site.hall.c.clone() : site.heroRack.clone()).add(new Vector3(0, Lc.nb ? 70 : 9, 0)));
    t("field", `<b>110 m</b><small>a football field</small>`, Lc.nb ? site.field : null);
    t("sub", `<b>Substation</b><small>${power(r.facMW)} stepped down</small>`, site.sub.c.clone().add(new Vector3(0, Lc.nb ? 20 : 4, 0)));
    const pl = site.plant;
    t("plant", r.many ? `<b>${int(r.build)} ${r.build === 1 ? p.one : p.many}</b><small>${pl.k > 1 ? `each one drawn stands for ${int(pl.k)}` : `${power(r.build * p.mw)} of ${p.m}`}</small>`
      : `<b>${answerBig(r)}</b><small>of one ${p.one}, drawn as a ghost</small>`, pl.c.clone().add(new Vector3(0, pl.h + 14 + pl.w * .03, 0)));
    t("truck", `<b>16 m</b><small>a semi-truck</small>`, site.truck);
    t("gas", `<b>Gas in</b><small>the molecules are the easy part</small>`, site.gas);
  }
  const v3 = new Vector3();
  let textBoxes = [];
  const measureText = () => {
    const sr = stage.getBoundingClientRect(), rg = document.createRange();
    textBoxes = $$(".title h1, .title .ans, #card, .dock, .console").filter(n => getComputedStyle(n).visibility !== "hidden").map(n => {
      let r;
      if (n.matches("h1, .ans")) { rg.selectNodeContents(n); r = rg.getBoundingClientRect(); } else r = n.getBoundingClientRect();
      return { l: r.left - sr.left - 8, r: r.right - sr.left + 8, t: r.top - sr.top - 6, b: r.bottom - sr.top + 6 };
    }).filter(b => b.r > b.l && b.b > b.t);
  };
  function placeLabels(dt) {
    Object.values(LB).forEach(l => {
      let want = 0, x = 0, y = 0, flip = false;
      if (l.on) {
        const d = camera.position.distanceTo(l.p);
        v3.copy(l.p).project(camera);
        x = (v3.x + 1) / 2 * W; y = (1 - v3.y) / 2 * H;
        if (v3.z < 1 && d > l.r[0] && d < l.r[1] && x > -40 && x < W + 40 && y > 20 && y < H) {
          const w = l.el.offsetWidth / 2, h = l.el.offsetHeight;
          const hits = (y0, y1) => textBoxes.some(b => x + w > b.l && x - w < b.r && y1 > b.t && y0 < b.b);
          // a label sits above what it points at; if the text is in the way, it hangs below instead
          if (!hits(y - h, y)) want = 1; else if (!hits(y, y + h) && y + h < H - 10) { want = 1; flip = true; }
          // fade in and out at the edges of the label's range of distances
          want *= Math.min(1, (d - l.r[0]) / (l.r[0] * .5 + .01), (l.r[1] - d) / (l.r[1] * .25));
        }
      }
      l.o += (want - l.o) * Math.min(1, dt * 7);
      if (l.o < .01) { if (l.el.style.opacity !== "0") l.el.style.opacity = "0"; return; }
      l.el.style.opacity = l.o.toFixed(3);
      if (want) { if (flip !== l.flip) { l.flip = flip; l.el.classList.toggle("flip", flip); } }
      l.el.style.transform = `translate(-50%,${l.flip ? "0" : "-100%"}) translate(${x.toFixed(1)}px,${y.toFixed(1)}px)`;
    });
  }

  /* ------------------------------------------------ the camera: chapters, flights and the scale bar */
  function view(k) {
    const sv = (target, dist, az, el) => ({ target, dist, az, el });
    const all = new Box3().setFromPoints([new Vector3(site.plant.c.x - site.plant.w / 2, 0, site.plant.c.z - site.plant.d / 2), new Vector3(lay.campus.maxX, 0, lay.campus.maxZ), new Vector3(lay.campus.minX, 0, lay.campus.minZ), new Vector3(site.plant.c.x + site.plant.w / 2, 0, site.plant.c.z + site.plant.d / 2)]);
    if (site.field && lay.nb) all.expandByPoint(site.field.clone().add(new Vector3(60, 0, 30)));
    const sz = all.getSize(new Vector3()), ctr = all.getCenter(new Vector3());
    const tall = small ? 1.25 : 1, fit = document.body.classList.contains("open") && wide() ? 1.14 : 1;
    if (k === "token") return sv(heroToken.position.clone().add(new Vector3(.18, -.12, 0)), 2.1 * tall, -.36, .05);
    if (k === "rack") return small ? sv(site.heroRack.clone().add(new Vector3(1.05, 1.75, .9)), 8.6, -.22, .1) : sv(site.heroRack.clone().add(new Vector3(.75, 1.05, .9)), 6.4, -.5, .14);
    if (k === "hall") return lay.nb ? sv(site.hall.c.clone().add(new Vector3(0, 1, 0)), (Math.max(site.hall.w, site.hall.d) * 1.12 + 16) * tall, .45, .66) : sv(site.heroRack.clone().add(new Vector3(0, 1, 0)), 14 * tall, .6, .5);
    if (k === "campus") {
      const C = lay.campus, w = C.maxX - C.minX, d = C.maxZ - C.minZ;
      return sv(new Vector3((C.minX + C.maxX) / 2, 0, (C.minZ + C.maxZ) / 2 + d * .05), (Math.max(w, d * 1.3) * .9 + 70) * tall * fit, .62, .62);
    }
    if (k === "power") return sv(site.plant.c.clone().add(new Vector3(site.plant.w * .12, site.plant.h * .3, 0)), (Math.max(site.plant.w, site.plant.d) * 1.05 + site.plant.h * 1.6 + 50) * tall * fit, -.72, .34);
    // on a tall phone screen, look down the line from the campus end so the whole build stacks up the screen
    if (small) return sv(ctr.setY(0), (Math.max(sz.x * .7, sz.z * 1.5) + 160), 1.42, .42);
    return sv(ctr.setY(0), (Math.max(sz.x, sz.z * 1.6) * .92 + 150) * tall * fit, .34, .3);
  }
  const offsetOf = v => new Vector3(Math.sin(v.az) * Math.cos(v.el), Math.sin(v.el), Math.cos(v.az) * Math.cos(v.el)).multiplyScalar(v.dist);
  function snap(v) { controls.target.copy(v.target); camera.position.copy(v.target).add(offsetOf(v)); camera.lookAt(v.target); controls.update(); }
  let flight = null, intro = false, moved = false;
  function fly(v, dur, isIntro = false) {
    if (calm) { snap(v); return; }
    const off = camera.position.clone().sub(controls.target);
    const d0 = off.length(), az0 = Math.atan2(off.x, off.z), el0 = Math.asin(Math.min(1, off.y / d0));
    let daz = v.az - az0; daz = ((daz + Math.PI) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2) - Math.PI;
    flight = { t0: performance.now(), dur: dur ?? Math.min(4200, 1200 + 520 * Math.abs(Math.log10(v.dist / d0))), from: { t: controls.target.clone(), d: d0, az: az0, el: el0 }, to: v, daz };
    intro = isIntro; controls.enabled = false; controls.autoRotate = false;
  }
  const ease = u => u < .5 ? 4 * u * u * u : 1 - Math.pow(-2 * u + 2, 3) / 2;
  function stepFlight(now) {
    if (!flight) return;
    const f = flight, u = Math.min(1, (now - f.t0) / f.dur), e = ease(u);
    const d = Math.exp(Math.log(f.from.d) + (Math.log(f.to.dist) - Math.log(f.from.d)) * e);
    // the target follows the distance, so zooming out keeps the start in frame and zooming in arrives before it descends
    const span = f.to.dist - f.from.d;
    const k = Math.abs(span) < 1e-6 ? e : Math.min(1, Math.max(0, (d - f.from.d) / span));
    const tk = k * .75 + e * .25;
    controls.target.copy(f.from.t).lerp(f.to.target, tk);
    const az = f.from.az + f.daz * e, el = f.from.el + (f.to.el - f.from.el) * e;
    camera.position.copy(controls.target).add(offsetOf({ dist: d, az, el }));
    camera.lookAt(controls.target);
    if (intro) {
      // the card keeps pace with the scale on the way out
      let k2 = "token";
      for (const ch of ["rack", "hall", "campus", "all"]) if (d >= view(ch).dist * .7) k2 = ch;
      if (k2 !== chapter) { chapter = k2; showCard(k2); }
    }
    if (u >= 1) {
      flight = null; controls.enabled = true; controls.update();
      if (intro) { intro = false; document.body.classList.remove("intro"); chapter = "all"; showCard("all"); }
      controls.autoRotate = !calm && chapter === "all" && !moved;
    }
  }
  const scaleEl = $("#scale"), scaleBar = $("i", scaleEl), scaleTxt = $("span", scaleEl);
  let lastScale = "";
  function updateScale() {
    const d = camera.position.distanceTo(controls.target);
    const wpp = 2 * d * Math.tan(camera.fov * Math.PI / 360) / H;
    const want = (small ? 70 : 110) * wpp;
    const e = Math.floor(Math.log10(want)), b = 10 ** e;
    const nice = [5, 2, 1].map(m => m * b).find(v => v <= want) || b;
    const txt = nice < 1 ? `${Math.round(nice * 100)} cm` : nice < 1000 ? `${int(nice)} m` : `${sig(nice / 1000, 2)} km`;
    if (txt !== lastScale) { scaleTxt.textContent = txt; lastScale = txt; }
    scaleBar.style.width = `${(nice / wpp).toFixed(1)}px`;
  }

  /* ------------------------------------------------ building and rebuilding */
  let lay = null, growT = -1e9, pending = null, growNext = false;
  function update(r) {
    lay = layout(r);
    const kc = `${lay.nb}|${lay.k}|${lay.nHero}|${r.c.k}|${lay.bw.toFixed(1)}`;
    const kp = `${r.p.k}|${r.many ? r.build : "ghost"}`;
    const kg = `${kc}|${kp}|${Math.min(8, Math.max(2, Math.ceil(r.facMW / 140) + 1))}`;
    let changed = false;
    if (kc !== keys.c) {
      if (groups.campus) dispose(groups.campus);
      groups.campus = buildCampus(r, lay); scene.add(groups.campus); keys.c = kc; changed = true;
      if (!lay.nb) {   // less than one rack: it stands on its own pad
        const g = groups.campus, hg = new Group(); g.add(hg);
        const solo = { racks: [{ x: 0, z: 0, face: 1, line: 0 }], inW: 4, inD: 4, lines: 1, lineZ: [0], half: 1, w: 4, d: 4 };
        buildHeroSolo(hg, r, solo);
      }
    }
    if (kp !== keys.p || kg !== keys.g || changed) {
      if (groups.plant) dispose(groups.plant);
      if (groups.grid) dispose(groups.grid);
      if (groups.refs) dispose(groups.refs);
      // the substation's place depends on the campus; the plant's on the substation; the line on both
      const tmpSub = { c: new Vector3(lay.campus.minX - 60 - 37, 0, 0), w: 74 };
      site.sub = tmpSub;
      const pl = buildPlant(r); groups.plant = pl.g; scene.add(pl.g);
      groups.grid = buildGrid(r, lay, pl.P); scene.add(groups.grid);
      groups.refs = buildRefs(r, lay, pl.P); scene.add(groups.refs);
      buildPulses(r);
      keys.p = kp; keys.g = kg; changed = true;
    }
    if (changed && growNext) growT = performance.now();
    growNext = false;
    setLabels(r, lay);
    flowRate = Math.max(.15, Math.min(1, (Math.log10(Math.max(10, r.tps)) - 1) / 8));
    powerRate = Math.max(.25, Math.min(1.6, Math.log10(Math.max(.001, r.facMW) * 1000 + 10) / 4));
    requestAnimationFrame(measureText);
  }
  function buildHeroSolo(g, r, H) {
    // one rack on a pad, with the person and the token beside it
    const c = r.c;
    inst(G.box, M.pad, [[0, 0, 0, 5, .2, 5]], g);
    const rg = new Group(); rg.position.set(0, .2, 0); g.add(rg);
    const body = new Mesh(G.box, M.rack); body.scale.set(RK.w, RK.h, RK.d); rg.add(body);
    const front = RK.d / 2 + .006, lit = r.chips, ledC = glow(c.led, 1.35);
    const strip = (y, mat, w = .5, hgt = .03) => { const m = new Mesh(G.box, mat); m.scale.set(w, hgt, .012); m.position.set(0, y, front); rg.add(m); };
    if (c.rack === 72) {
      const slots = [["p"], ["p"], ...Array(10).fill(["c"]), ...Array(9).fill(["s"]), ...Array(8).fill(["c"]), ["p"], ["p"]];
      let ci = 0;
      slots.forEach(([t], i) => {
        const y = RK.h - .12 - i * ((RK.h - .24) / (slots.length - 1));
        if (t === "c") { const on = ci * 4 < lit; ci++; strip(y, on ? ledC : M.off); strip(y + .002, on ? M.lamp : M.off, .05, .028); }
        else strip(y, t === "p" ? M.coral : M.blue, .5, .022);
      });
    } else {
      for (let s = 0; s < 4; s++) { const y0 = .35 + s * .46, on = s * 8 < lit; const face = new Mesh(G.box, M.dark); face.scale.set(.54, .4, .01); face.position.set(0, y0, front - .002); rg.add(face); for (let k = 0; k < 6; k++) strip(y0 + .04 + k * .055, on ? ledC : M.off, .44, .016); }
      strip(.12, M.coral); strip(RK.h - .1, M.coral);
    }
    void H;
    site.heroRack = new Vector3(0, .2, 0); site.heroFace = 1;
    site.hall = { c: new Vector3(0, 0, 0), w: 5, d: 5 };
    emit.racks = [{ x: 0, z: 0 }]; emit.roofs = [];
    person.position.set(1.4, .2, RK.d / 2 + 1); person.rotation.y = -.7;
    heroToken.position.set(.15, 2.2, RK.d / 2 + .55);
    hallLight.position.set(0, 6, 3); hallLight.intensity = 60;
  }

  let flowRate = .5, powerRate = 1;
  function buildPulses(r) {
    if (pulses.m) { pulses.m.parent.remove(pulses.m); pulses.m.dispose(); pulses.m = null; }
    if (pulses.mb) { pulses.mb.parent.remove(pulses.mb); pulses.mb.dispose(); pulses.mb = null; }
    pulses.list = [];
    pulses.lines.forEach((ln, li) => {
      // cumulative lengths so a pulse can move at a steady speed
      const cum = [0]; for (let i = 1; i < ln.pts.length; i++) cum.push(cum[i - 1] + ln.pts[i].distanceTo(ln.pts[i - 1]));
      ln.len = cum[cum.length - 1]; ln.cum = cum;
      const per = Math.max(2, Math.min(ln.kind === "g" ? 60 : 26, Math.round(ln.len / (ln.r > 1 ? 34 : ln.kind === "g" ? 46 : 22))));
      for (let j = 0; j < per; j++) pulses.list.push({ li, u: j / per, kind: ln.kind });
    });
    const np = pulses.list.filter(p => p.kind === "p").length, ng = pulses.list.length - np;
    pulses.m = new InstancedMesh(G.ball, glow(0xf4977a, 3.4), Math.max(1, np)); pulses.m.frustumCulled = false; scene.add(pulses.m);
    pulses.mb = new InstancedMesh(G.ball, glow(0x6aa8ff, 2.6), Math.max(1, ng)); pulses.mb.frustumCulled = false; scene.add(pulses.mb);
    pulses.m.count = np; pulses.mb.count = ng;
    void r;
  }
  const pAt = (ln, u, out) => {
    const s = u * ln.len; let i = 1; while (i < ln.cum.length - 1 && ln.cum[i] < s) i++;
    const a = ln.cum[i - 1], b = ln.cum[i], t = b > a ? (s - a) / (b - a) : 0;
    return out.copy(ln.pts[i - 1]).lerp(ln.pts[i], t);
  };

  /* ------------------------------------------------ picking: tap a thing to fly to it */
  const ray = new Raycaster(), ndc = new Vector2(), hit = new Vector3();
  function pick(ev) {
    const b = canvas.getBoundingClientRect();
    ndc.set((ev.clientX - b.left) / b.width * 2 - 1, -((ev.clientY - b.top) / b.height) * 2 + 1);
    ray.setFromCamera(ndc, camera);
    const box = (c, w, h, d) => new Box3(new Vector3(c.x - w / 2, 0, c.z - d / 2), new Vector3(c.x + w / 2, h, c.z + d / 2));
    const tests = [
      ["rack", box(site.heroRack, 1.4, 2.6, 2), 0], ["hall", lay.nb ? box(site.hall.c, site.hall.w, HALL_H, site.hall.d) : null, 0],
      ["power", box(site.plant.c, site.plant.w, site.plant.h, site.plant.d), 0], ["campus", box(new Vector3((lay.campus.minX + lay.campus.maxX) / 2, 0, (lay.campus.minZ + lay.campus.maxZ) / 2), lay.campus.maxX - lay.campus.minX, HALL_H + 2, lay.campus.maxZ - lay.campus.minZ), 0]
    ];
    for (const [k, bx] of tests) if (bx && ray.ray.intersectBox(bx, hit)) return k;
    return null;
  }
  let down = null;
  canvas.addEventListener("pointerdown", e => {
    down = { x: e.clientX, y: e.clientY, t: performance.now() };
    if (flight) { flight = null; controls.enabled = true; if (intro) { intro = false; document.body.classList.remove("intro"); } }
  });
  canvas.addEventListener("pointerup", e => {
    if (!down) return;
    const still = Math.hypot(e.clientX - down.x, e.clientY - down.y) < 6 && performance.now() - down.t < 450;
    down = null;
    if (!still) return;
    const k = pick(e);
    if (k && k !== chapter) go(k); else if (k) go(k === "hall" ? "rack" : k === "campus" ? "hall" : k);
  });
  let hoverQ = false;
  canvas.addEventListener("pointermove", e => {
    if (down || hoverQ || e.pointerType !== "mouse") return;
    hoverQ = true; requestAnimationFrame(() => { hoverQ = false; canvas.style.cursor = pick(e) ? "pointer" : ""; });
  });
  controls.addEventListener("start", () => { moved = true; controls.autoRotate = false; stage.classList.add("touched"); });
  canvas.addEventListener("wheel", () => { moved = true; controls.autoRotate = false; }, { passive: true });

  /* ------------------------------------------------ sizing */
  let W = 1, H = 1, ox = 0, oxWant = 0;
  const size = () => {
    W = stage.clientWidth; H = stage.clientHeight;
    renderer.setSize(W, H, false);
    if (composer) { composer.setPixelRatio(PR); composer.setSize(W, H); }
    camera.aspect = W / H;
    pointScale.value = H * PR / (2 * Math.tan(camera.fov * Math.PI / 360));
    frameSide(true);
    measureText();
  };
  function frameSide(now) {
    // with the console open beside the scene, slide the picture's center into the space that's left
    oxWant = document.body.classList.contains("open") && wide() ? 215 : 0;
    if (now === true) ox = oxWant;
    setTimeout(measureText, 380);
  }
  const ro = new ResizeObserver(size); ro.observe(stage);

  /* ------------------------------------------------ the loop */
  let visible = true, lastT = performance.now(), frameN = 0;
  new IntersectionObserver(es => { visible = es[0].isIntersecting; }).observe(stage);
  document.addEventListener("visibilitychange", () => { if (!document.hidden) lastT = performance.now(); });
  const q = new Vector3();
  function spawnToken(s) {
    // most tokens leave from the racks in the open hall; the rest from the roofs of the others
    const fromRoof = emit.roofs.length && Math.random() < .45;
    if (fromRoof) {
      const rf = emit.roofs[(Math.random() * emit.roofs.length) | 0];
      s.x = rf.x0 + Math.random() * (rf.x1 - rf.x0); s.z = rf.z0 + Math.random() * (rf.z1 - rf.z0); s.y = rf.y;
      s.vy = 9 + Math.random() * 10; s.vx = (Math.random() - .5) * 1.4; s.vz = (Math.random() - .5) * 1.4; s.life = 6 + Math.random() * 6; s.s0 = 2.6; s.s1 = 7;
    } else {
      const near = Math.random() < (emit.racks.length > 1 ? .12 : 1);
      const rk = near ? { x: site.heroRack.x, z: site.heroRack.z } : emit.racks[(Math.random() * emit.racks.length) | 0];
      s.x = rk.x + (Math.random() - .5) * .5; s.z = rk.z + (Math.random() - .5) * 1; s.y = 2.3 + Math.random() * .3;
      s.vy = .45 + Math.random() * .5; s.vx = (Math.random() - .5) * .12; s.vz = (Math.random() - .5) * .12;
      s.life = near ? 7 + Math.random() * 6 : 14 + Math.random() * 10; s.s0 = .15; s.s1 = near ? .28 : 1.4;
      if (!near) { s.vy = 2.2 + Math.random() * 3; s.s0 = .3; s.s1 = 3.2; }
    }
    s.age = 0;
  }
  TOK.st.forEach(s => { s.age = 1e9; });
  function animate(dt, t) {
    // tokens
    const active = Math.round(TOK.n * flowRate);
    for (let i = 0; i < TOK.n; i++) {
      const s = TOK.st[i];
      if (s.age >= s.life) { if (i < active && site.heroRack) { spawnToken(s); s.age = calm ? Math.random() * s.life : -Math.random() * 3; TOK.cell[i] = (Math.random() * GLYPHS.length) | 0; } else { TOK.alpha[i] = 0; continue; } }
      s.age += calm ? 0 : dt;
      const a = Math.max(0, s.age), u = a / s.life;
      TOK.pos[i * 3] = s.x + s.vx * a; TOK.pos[i * 3 + 1] = s.y + s.vy * a + (s.s1 > 3 ? a * a * .8 : 0); TOK.pos[i * 3 + 2] = s.z + s.vz * a;
      TOK.size[i] = s.s0 + (s.s1 - s.s0) * u;
      TOK.alpha[i] = s.age < 0 ? 0 : Math.min(1, u * 8) * (1 - u) * (1 - u) * .95;
    }
    TOK.g.attributes.position.needsUpdate = true; TOK.g.attributes.aSize.needsUpdate = true; TOK.g.attributes.aAlpha.needsUpdate = true; TOK.g.attributes.aCell.needsUpdate = true;
    // heat over the stacks, steam over the cooling towers
    const plume = (P, src, rise, spread, s0, s1, life) => {
      for (let i = 0; i < P.n; i++) {
        const s = P.st[i];
        if (!src.length) { P.alpha[i] = 0; continue; }
        if (s.age >= s.life) { const e = src[i % src.length]; s.x = e.x; s.y = e.y; s.z = e.z; s.vx = (Math.random() - .5) * spread + 1.5 * spread; s.vz = (Math.random() - .5) * spread; s.vy = rise * (.7 + Math.random() * .6); s.life = life * (.7 + Math.random() * .6); s.age = calm ? Math.random() * s.life : -Math.random() * life; }
        s.age += calm ? 0 : dt;
        const a = Math.max(0, s.age), u = a / s.life;
        P.pos[i * 3] = s.x + s.vx * a; P.pos[i * 3 + 1] = s.y + s.vy * a; P.pos[i * 3 + 2] = s.z + s.vz * a;
        P.size[i] = s0 + (s1 - s0) * u; P.alpha[i] = s.age < 0 ? 0 : Math.sin(Math.PI * Math.min(1, u)) * .55;
      }
      P.g.attributes.position.needsUpdate = true; P.g.attributes.aSize.needsUpdate = true; P.g.attributes.aAlpha.needsUpdate = true;
    };
    plume(HEAT, emit.heat, 6, 2, 2.5, 11, 4);
    plume(STEAM, emit.steam, 9, 5, 30, 120, 14);
    // power along the wires, gas along the pipe
    let ip = 0, ig = 0;
    pulses.list.forEach(p => {
      const ln = pulses.lines[p.li]; if (!ln || !ln.len) return;
      if (!calm) p.u = (p.u + dt * (p.kind === "g" ? 9 : 26 * powerRate) / ln.len * (ln.r > 1 ? 2.2 : 1)) % 1;
      pAt(ln, p.u, q);
      tmp.position.copy(q); tmp.scale.setScalar(ln.r); tmp.rotation.set(0, 0, 0); tmp.updateMatrix();
      if (p.kind === "g") pulses.mb.setMatrixAt(ig++, tmp.matrix); else pulses.m.setMatrixAt(ip++, tmp.matrix);
    });
    if (pulses.m) pulses.m.instanceMatrix.needsUpdate = true;
    if (pulses.mb) pulses.mb.instanceMatrix.needsUpdate = true;
    // the token by the hero rack bobs
    heroToken.position.y += Math.sin(t / 700) * .0009;
    heroToken.material.opacity = 1;
    M.beacon.color.setRGB(3, 1.1, .7).multiplyScalar(calm ? .8 : (Math.sin(t / 260) > .55 ? 1 : .08));
    // new things rise out of the ground
    const g = Math.min(1, (t - growT) / 900), ge = 1 - Math.pow(1 - g, 3);
    [groups.campus, groups.plant, groups.grid, groups.refs].forEach(o => { if (o) o.scale.y = calm ? 1 : Math.max(.001, ge); });
  }

  function tick(now) {
    requestAnimationFrame(tick);
    if (!visible || document.hidden) return;
    const dt = Math.min(.05, (now - lastT) / 1000); lastT = now; frameN++;
    if (pending) { update(pending); pending = null; }
    stepFlight(now);
    if (!flight) controls.update();
    ox += (oxWant - ox) * Math.min(1, dt * 6);
    camera.setViewOffset(W, H, ox, small ? H * .06 : -H * .045, W, H);
    const d = camera.position.distanceTo(controls.target);
    scene.fog.density = .26 / (d + 18); groundMat.uniforms.fogD.value = scene.fog.density;
    camera.near = Math.min(6, Math.max(.03, d * .004)); camera.updateProjectionMatrix();
    sky.position.copy(camera.position); stars.position.copy(camera.position); ridges.position.copy(camera.position); towns.position.copy(camera.position);
    ground.position.set(Math.round(camera.position.x / 1000) * 1000, 0, Math.round(camera.position.z / 1000) * 1000);
    if (bloom) bloom.strength = (small ? .5 : .62) * Math.min(1, .45 + d / 160);
    animate(dt, now);
    placeLabels(dt);
    if (frameN % 3 === 0) updateScale();
    if (composer) composer.render(); else renderer.render(scene, camera);
  }

  let settleT = 0;
  return {
    update(r) { if (lay) pending = r; else update(r); },
    settle(big) {
      if (big) growNext = true;
      // after the dials stop moving, reframe whatever chapter is showing
      clearTimeout(settleT);
      settleT = setTimeout(() => { if (!intro) fly(view(chapter), 1300); }, 420);
    },
    visit(k) { moved = false; fly(view(k)); },
    frameSide,
    start() {
      size();
      if (calm || location.hash === "#all") { document.body.classList.remove("intro"); chapter = "all"; showCard("all"); snap(view("all")); controls.autoRotate = false; }
      else {
        chapter = "token"; showCard("token"); snap(view("token"));
        setTimeout(() => { if (!moved) fly(view("all"), 8200, true); else document.body.classList.remove("intro"); }, 1400);
      }
      requestAnimationFrame(tick);
    }
  };
}
