// Tokens to turbines: a 3D model of what it takes to serve a day of AI tokens, drawn to scale in meters.
// Bundled with three.js into model/model.js (see src/model/build.sh).
import {
  Scene, PerspectiveCamera, WebGLRenderer, WebGLRenderTarget, HalfFloatType, Color, FogExp2,
  HemisphereLight, DirectionalLight, PointLight,
  BoxGeometry, CylinderGeometry, SphereGeometry, LatheGeometry, PlaneGeometry, CapsuleGeometry, TubeGeometry, BufferGeometry, Float32BufferAttribute,
  MeshStandardMaterial, MeshBasicMaterial, LineBasicMaterial, ShaderMaterial, SpriteMaterial,
  InstancedMesh, Mesh, Points, LineSegments, Sprite, Group, Object3D,
  Vector2, Vector3, Box3, Sphere, Raycaster, EdgesGeometry, MeshToonMaterial, DataTexture, RedFormat, NearestFilter, CircleGeometry, CatmullRomCurve3, CanvasTexture, SRGBColorSpace, ACESFilmicToneMapping,
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
  // Back and Next walk the scales in order; from the last one, Next opens the dials, then starts over
  $("#prev").disabled = i === 0;
  const nx = CHAPTERS[i + 1];
  $("#nextTxt").textContent = nx ? `Next: ${nx.name}` : document.body.classList.contains("open") ? "Start again at one token" : "Now tune the numbers";
  $$("#chaps button").forEach((b, j) => {
    b.setAttribute("aria-pressed", String(b.dataset.k === k)); b.classList.toggle("past", j < i);
    // on a phone the journey scrolls; keep the current stop in view
    if (b.dataset.k === k && small) { const c = b.parentNode; c.scrollTo({ left: b.offsetLeft - (c.clientWidth - b.offsetWidth) / 2, behavior: calm ? "auto" : "smooth" }); }
  });
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
  // the bill of materials; a line whose number moved flashes, so you can see what a dial touched
  const before = $$("#bom li b").map(b => b.textContent);
  $("#bom").innerHTML = rows.map(([k, v, n], i) => `<li style="--i:${i}"${before.length && before[i] !== v ? ' class="flash"' : ""}><span class="k">${esc(k)}</span><b>${esc(v)}</b><span class="n">${esc(n)}</span></li>`).join("");

  syncControls();
  writeState(state);
  // each stop on the journey carries its number, so the dock reads as the chain: joules, kW, racks, MW, plants
  $$("#chaps button").forEach(b => { $("small", b).textContent = b.dataset.k === "all" ? "overview" : chapterCopy(b.dataset.k, r, state).big; });
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
  if (last) showCard(chapter);
}
tune.addEventListener("click", () => openConsole(!document.body.classList.contains("open")));
$("#close").addEventListener("click", () => { openConsole(false); showCard(chapter); });
addEventListener("keydown", e => { if (e.key === "Escape" && document.body.classList.contains("open") && !wide()) openConsole(false); });

/* the chapter buttons */
$("#chaps").innerHTML = CHAPTERS.map(c => `<button type="button" data-k="${c.k}" class="${c.tone === "p" ? "pw" : ""}" aria-pressed="false"><b>${c.n}</b><small></small></button>`).join("");
function go(k) {
  chapter = k; showCard(k);
  if (world) world.visit(k);
  if (!wide() && document.body.classList.contains("open")) openConsole(false);
}
$$("#chaps button").forEach(b => b.addEventListener("click", () => go(b.dataset.k)));
const stepBy = d => { const i = CHAPTERS.findIndex(c => c.k === chapter); return CHAPTERS[Math.min(CHAPTERS.length - 1, Math.max(0, i + d))].k; };
$("#prev").addEventListener("click", () => go(stepBy(-1)));
$("#next").addEventListener("click", () => {
  if (chapter !== "all") return go(stepBy(1));
  if (!document.body.classList.contains("open")) { openConsole(true); showCard(chapter); } else go("token");
});
$("#recenter").addEventListener("click", () => go(chapter));
// the nav turns solid once you scroll past the model, as it does on the home page
const navEl = $("#nav");
const navSolid = () => navEl.classList.toggle("solid", scrollY > 40);
addEventListener("scroll", navSolid, { passive: true }); navSolid();
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
    site.heroHall = { ix, iz, inW: H.inW, inD: H.inD, racks: H.racks, heroX: hr.x, lines: H.lines };
    site.hall = { c: new Vector3(ix - GAL / 2, 0, iz), w: H.w, d: H.d };
    person.position.set(site.heroRack.x + 1.9, .2, site.heroRack.z + hr.face * (RK.d / 2 + 1));
    person.rotation.y = -.7;
    heroToken.position.set(site.heroRack.x + .3 * hr.face, 2.8, site.heroRack.z + hr.face * (RK.d / 2 + .34));
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
    feeders.slice(Lc.nb ? 1 : 0, small ? 8 : 20).forEach(p => pulses.lines.push({ pts: p.map(q => new Vector3(...q)), kind: "p", r: .3 }));

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
    site.plant = { c: new Vector3((P.minX + P.maxX) / 2, 0, (P.minZ + P.maxZ) / 2), w: P.maxX - P.minX, d: P.maxZ - P.minZ, h: S.h, k: blk.k, n }; site.P = P;
    plantLight.position.set(site.plant.c.x, S.h * 1.4, site.plant.c.z); plantLight.intensity = ghost || r.p.shape === "cell" ? 0 : Math.min(2.4e4, 70 * Math.sqrt(n) * S.h * S.h / 10);
    return { g, P };
  }

  /* ------------------------------------------------ things for scale: a truck and a football field */
  function buildRefs(r, Lc, P) {
    const g = new Group(); g.name = "refs";
    const tx = P.maxX - 40, tz = P.maxZ + 10;
    inst(G.box, M.truck, [[tx, .9, tz, 13.6, 3.1, 2.6]], g); inst(G.box, M.steel, [[tx + 8.6, .6, tz, 2.6, 3.2, 2.5]], g);
    inst(G.box, M.dark, [[tx + 2, 0, tz, 17, .9, 2.4]], g); inst(G.box, M.coral, [[tx - 6.85, 1.3, tz + .9, .08, .25, .3], [tx - 6.85, 1.3, tz - .9, .08, .25, .3]], g);
    site.truck = new Vector3(tx + 2, 4.5, tz); site.truckTop = new Vector3(tx - 3.5, 4, tz + .2);
    // an American football field, 120 yards with end zones
    const C = Lc.campus;
    const fx = Lc.nb ? C.maxX - 55 - 10 : C.maxX + 80, fz = Lc.nb ? C.maxZ + 52 : 0;
    const Lf = 109.7, Wf = 48.8, f = [];
    boxEdges(f, fx - Lf / 2, .08, fz - Wf / 2, fx + Lf / 2, .08, fz + Wf / 2);
    for (let i = 0; i <= 10; i++) { const x = fx - 45.72 + i * 9.144; f.push(x, .08, fz - Wf / 2, x, .08, fz + Wf / 2); }
    lines(f.slice(0, 24 * 1).concat(f.slice(24 * 3)), L.field, g);
    site.field = new Vector3(fx, 2.5, fz); site.fieldC = Lc.nb ? new Vector3(fx, 0, fz) : null;
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
    t("rack", `<b>${sig(c.kw * c.rack, 3)} kW</b><small>one ${c.n} rack, ${c.rack} GPUs</small>`, site.heroRack.clone().add(new Vector3(-.55, RK.h + .05, site.heroFace * .3)));
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
  // the open part of the screen, between the headline, the card, the dock and the console: views center on it and
  // pull back to fit it, so nothing you're meant to look at sits under the text
  let free = { cx: 0, cy: 0, k: 1 };
  function measureFree() {
    const sr = stage.getBoundingClientRect();
    const box = s => { const n = $(s); if (!n) return null; const r = n.getBoundingClientRect(); return r.width ? { l: r.left - sr.left, r: r.right - sr.left, t: r.top - sr.top, b: r.bottom - sr.top } : null; };
    const nav = box("#nav"), title = box(".title"), card = box("#card"), dock = box(".dock");
    let L = 0, R = W, T = nav ? Math.max(0, nav.b) : 0, B = H;
    if (document.body.classList.contains("open") && wide()) R = W - $("#console").offsetWidth - 24;
    if (dock) B = Math.min(B, dock.t - 6);
    if (small) { if (title) T = Math.max(T, title.b); if (card) B = Math.min(B, card.t - 6); }
    else {
      // the headline and the card own the left edge, top and bottom; the middle of the left side is still open
      if (title) T = Math.max(T, title.t + (title.b - title.t) * .45);
      if (card) B = Math.min(B, card.t + (card.b - card.t) * .3);
      L = Math.max(title ? title.r : 0, card ? card.r : 0) * .38;
    }
    const fw = Math.max(120, R - L), fh = Math.max(120, B - T);
    free = { cx: (L + R) / 2, cy: (T + B) / 2, k: Math.min(1.55, Math.max(1, Math.pow(Math.max(H / fh, W / fw * .7), .62))) };
  }
  const measureText = () => {
    const sr = stage.getBoundingClientRect(), rg = document.createRange();
    measureFree();
    textBoxes = $$("#nav, .title h1, .title .ans, .title .kicker, #card, .dock > *, .console").filter(n => getComputedStyle(n).visibility !== "hidden").map(n => {
      let r;
      if (n.matches("h1, .ans")) { rg.selectNodeContents(n); r = rg.getBoundingClientRect(); } else r = n.getBoundingClientRect();
      return { l: r.left - sr.left - 8, r: r.right - sr.left + 8, t: r.top - sr.top - 6, b: r.bottom - sr.top + 6 };
    }).filter(b => b.r > b.l && b.b > b.t);
  };
  // when two labels would overlap, the more important one wins and the other waits
  const LB_ORDER = ["plant", "campus", "hall", "rack", "token", "sub", "flow", "gas", "person", "truck", "field"];
  function placeLabels(dt) {
    const placed = [];
    LB_ORDER.map(k => LB[k]).forEach(l => {
      let want = 0, x = 0, y = 0, flip = false;
      if (l.on) {
        const d = camera.position.distanceTo(l.p);
        v3.copy(l.p).project(camera);
        x = (v3.x + 1) / 2 * W; y = (1 - v3.y) / 2 * H;
        if (v3.z < 1 && d > l.r[0] && d < l.r[1] && x > -40 && x < W + 40 && y > 20 && y < H) {
          const w = l.el.offsetWidth / 2, h = l.el.offsetHeight;
          const hits = (y0, y1) => textBoxes.some(b => x + w > b.l && x - w < b.r && y1 > b.t && y0 < b.b) || placed.some(b => x + w + 4 > b.l && x - w - 4 < b.r && y1 > b.t && y0 < b.b);
          // a label sits above what it points at; if text or another label is in the way, it hangs below instead
          if (!hits(y - h, y)) want = 1; else if (!hits(y, y + h) && y + h < H - 10) { want = 1; flip = true; }
          if (want) placed.push({ l: x - w, r: x + w, t: flip ? y : y - h, b: flip ? y + h : y });
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

  /* ------------------------------------------------ Echo, EchoTempo's mascot, in 3D */
  // One rig, traced from Echo's drawing on the home page and scaled so the shell is 1 tall: a gumdrop shell whose white
  // belly is painted into the same smooth surface (no second mesh, so no seam), a glass visor of teeth with a heartbeat
  // that sweeps across it, gills, nostrils, paddle fins and two big round feet. Each copy gets a job and an outfit.
  const ECHO = (() => {
    const sm = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
    const U = .0105;                                       // one unit of the drawing, in shell heights
    const LIFT = .09;                                      // the shell rides on its feet
    const R = .463, HEEL = .13, SIDE0 = .1, TOP = .64, DOME = .36, SQ = 2.2, ZS = .82, BULGE = .1;
    // half-width at height y: a rounded heel, straight sides, a dome a little fuller than an ellipse
    const rAt = y => y <= 0 ? R - HEEL : y < SIDE0 ? R - HEEL + HEEL * Math.sqrt(Math.max(0, 1 - ((SIDE0 - y) / SIDE0) ** 2))
      : y <= TOP ? R : y >= TOP + DOME ? 0 : R * Math.pow(1 - Math.pow((y - TOP) / DOME, SQ), 1 / SQ);
    const zsAt = th => ZS + BULGE * Math.max(0, Math.cos(th)) ** 2;   // deeper in front: the belly bulges a little
    const surf = (th, y, out = new Vector3(), push = 0) => { const r = rAt(y) + push; return out.set(r * Math.sin(th), y + LIFT, r * Math.cos(th) * zsAt(th)); };
    const surfN = (th, y) => {
      const a = surf(th - .002, y), b = surf(th + .002, y), c = surf(th, y - .002), d = surf(th, y + .002);
      return b.sub(a).cross(d.sub(c)).normalize();
    };
    const onSurf = (o, th, y, lift = 0) => { o.position.copy(surf(th, y)).addScaledVector(surfN(th, y), lift); o.quaternion.setFromUnitVectors(new Vector3(0, 0, 1), surfN(th, y)); return o; };

    // the outline, bottom center to the top, as [r, y]
    const outline = [];
    for (let i = 0; i <= 5; i++) outline.push([(R - HEEL) * i / 5, 0]);
    for (let i = 1; i <= 16; i++) { const a = -Math.PI / 2 + i / 16 * Math.PI / 2; outline.push([R - HEEL + HEEL * Math.cos(a), SIDE0 + SIDE0 * Math.sin(a)]); }
    for (let i = 1; i <= 14; i++) outline.push([R, SIDE0 + (TOP - SIDE0) * i / 14]);
    for (let i = 1; i <= 40; i++) { const a = i / 40 * Math.PI / 2; outline.push([R * Math.pow(Math.cos(a), 2 / SQ), TOP + DOME * Math.pow(Math.sin(a), 2 / SQ)]); }
    outline[outline.length - 1][0] = 0;

    const lin = h => new Color(h);
    const C = { shellLo: lin(0x6c4ff2), shell: lin(0x8f76ff), shellHi: lin(0xb3a2ff), belly: lin(0xf3f0ff), bellyEdge: lin(0xdcd2ff), base: lin(0x5a3fd6),
      finHi: lin(0x9d86ff), finLo: lin(0x6547ec), footHi: lin(0xe6dfff), footLo: lin(0xb7a5f4) };
    const EDGE = Math.asin(.85);                           // the belly covers the front out to 85% of the width, as drawn

    const bodyG = (() => {
      const SEG = 120, pos = [], col = [], idx = [], c = new Color();
      outline.forEach(([r, y]) => {
        for (let j = 0; j <= SEG; j++) {
          const th = Math.PI + j / SEG * Math.PI * 2;     // the seam runs down the back
          pos.push(r * Math.sin(th), y + LIFT, r * Math.cos(th) * zsAt(th));
          const a = Math.abs(Math.atan2(Math.sin(th), Math.cos(th)));
          const belly = (1 - sm(EDGE - .035, EDGE + .035, a)) * (1 - sm(.955, .985, y)) * (y < .002 ? 0 : 1);
          c.copy(C.shellLo).lerp(C.shell, sm(0, .45, y)).lerp(C.shellHi, sm(.6, 1, y) * .8);
          if (y < .002) c.copy(C.base);
          const bc = C.belly.clone().lerp(C.bellyEdge, Math.max(sm(EDGE - .45, EDGE, a) * .85, sm(.22, 0, y) * .7));
          c.lerp(bc, belly);
          col.push(c.r, c.g, c.b);
        }
      });
      const rows = outline.length, W = SEG + 1;
      for (let i = 0; i < rows - 1; i++) for (let j = 0; j < SEG; j++) { const a = i * W + j, b = a + W; idx.push(a, a + 1, b, a + 1, b + 1, b); }
      const g = new BufferGeometry(); g.setAttribute("position", new Float32BufferAttribute(pos, 3)); g.setAttribute("color", new Float32BufferAttribute(col, 3)); g.setIndex(idx);
      g.computeVertexNormals();
      const n = g.attributes.normal;
      for (let i = 0; i < rows; i++) {   // weld the seam, and point the poles straight down and up
        const a = i * W, b = a + SEG;
        const x = n.getX(a) + n.getX(b), y = n.getY(a) + n.getY(b), z = n.getZ(a) + n.getZ(b), l = Math.hypot(x, y, z) || 1;
        n.setXYZ(a, x / l, y / l, z / l); n.setXYZ(b, x / l, y / l, z / l);
        if (i === 0 || i === rows - 1) for (let j = 0; j <= SEG; j++) n.setXYZ(a + j, 0, i ? 1 : -1, 0);
      }
      for (let i = 0; i < 5; i++) for (let j = 0; j <= SEG; j++) n.setXYZ(i * W + j, 0, -1, 0);   // the flat base
      return g;
    })();
    // a paddle fin: a teardrop, narrow at the shoulder, flattened against the side
    const finG = (() => {
      const pts = []; for (let i = 0; i <= 28; i++) { const t = i / 28; pts.push(new Vector2(Math.max(1e-4, .5 * Math.pow(Math.sin(Math.PI * Math.pow(t, 1.55)), .72)), -t)); }
      const g = new LatheGeometry(pts, 36); g.scale(.17, .56, .27);
      const p = g.attributes.position, col = [], c = new Color();
      for (let i = 0; i < p.count; i++) { c.copy(C.finHi).lerp(C.finLo, sm(0, -.56, p.getY(i))); col.push(c.r, c.g, c.b); }
      g.setAttribute("color", new Float32BufferAttribute(col, 3)); return g;
    })();
    const footG = (() => {
      const g = new SphereGeometry(1, 36, 22), p = g.attributes.position, col = [], c = new Color();
      for (let i = 0; i < p.count; i++) { c.copy(C.footLo).lerp(C.footHi, sm(-.6, .8, p.getY(i))); col.push(c.r, c.g, c.b); }
      g.setAttribute("color", new Float32BufferAttribute(col, 3)); return g;
    })();
    const sphere = new SphereGeometry(1, 28, 18), cylG = new CylinderGeometry(1, 1, 1, 32);

    // materials: lit by the scene, with a little light of their own so Echo reads at night, and a cool rim
    const echoMat = (rough, self, rim, extra = {}) => {
      const m = new MeshStandardMaterial({ vertexColors: true, roughness: rough, metalness: 0, ...extra });
      m.userData.u = { uSelf: { value: self }, uRim: { value: rim }, uRimC: { value: new Color(0x9fd8ff) }, uTint: { value: new Color(0, 0, 0) } };
      m.onBeforeCompile = sh => {
        Object.assign(sh.uniforms, m.userData.u);
        sh.fragmentShader = sh.fragmentShader
          .replace("#include <common>", "#include <common>\nuniform float uSelf, uRim; uniform vec3 uRimC, uTint;")
          .replace("#include <emissivemap_fragment>", "#include <emissivemap_fragment>\ntotalEmissiveRadiance += diffuseColor.rgb * uSelf + uTint;")
          .replace("#include <opaque_fragment>", "outgoingLight += uRimC * uRim * pow(1. - saturate(dot(normal, geometryViewDir)), 3.);\n#include <opaque_fragment>");
      };
      m.customProgramCacheKey = () => "echo-skin";
      return m;
    };
    const plain = (color, rough, self, extra) => { const m = echoMat(rough, self, .25, extra); m.vertexColors = false; m.color = new Color(color); return m; };
    const mat = {
      skin: echoMat(.52, .21, .3), balloon: echoMat(.34, .23, .4),
      eye: plain(0x1b1530, .22, 0), shine: new MeshBasicMaterial({ color: 0xffffff }),
      gill: new MeshBasicMaterial({ color: 0x4f33c8 }), nose: plain(0xd5cbf7, .6, .2), blush: plain(0xff9db4, .7, .35),
      hat: plain(0x3fd6c8, .38, .22), brim: plain(0x2aa99d, .45, .18), lamp: new MeshBasicMaterial({ color: new Color(0xfff2dc).multiplyScalar(.95) }),
      ball: plain(0x8f5434, .6, .15), lace: new MeshBasicMaterial({ color: 0xf2efe8 }),
      cart: plain(0x22384f, .5, .12), cartTrim: new MeshBasicMaterial({ color: new Color(0x3fd6c8).multiplyScalar(1.6) }), tire: plain(0x0d141c, .8, 0),
      crate: plain(0x2c4560, .5, .12), tray: plain(0x182636, .45, .1), off: new MeshBasicMaterial({ color: 0x1a2a3a }),
      on: new MeshBasicMaterial({ color: new Color(0x3fd6c8).multiplyScalar(2) }), crateGlow: new MeshBasicMaterial({ color: new Color(0x3fd6c8).multiplyScalar(.9) }),
      fan: plain(0xf4977a, .6, .3, { side: DoubleSide }), rope: new LineBasicMaterial({ color: 0xc9d6e2, transparent: true, opacity: .5 })
    };

    // the visor and the heartbeat are drawn from the home page's own paths, so the two Echos match
    const V = { x0: 16, x1: 84, y0: 8, y1: 48, k: 16 };   // the patch of the drawing the visor texture covers
    const VISOR = {
      awake: { box: "M34 10.8 Q50 8.51 66 10.8 C78.16 11.21 82 17.95 82 28.25 C82 37.84 78.16 46 66 46 L34 46 C21.84 46 18 37.84 18 28.25 C18 17.95 21.84 11.21 34 10.8 Z",
        beat: "M28.88 28.04 H40.53 L42.96 24.84 L46.16 31.23 L49.62 23.42 L52.56 30.03 L54.61 28.04 H71.12",
        teeth: ["M26.96 15.47 C26.96 13.28 28.96 12.25 31.96 12.1 Q50 10.89 68.04 12.1 C71.04 12.25 73.04 13.28 73.04 15.47 C73.04 18.35 70.74 19.3 67.28 19.3 C63.82 19.3 62.32 18.74 61.52 17.03 C60.72 18.74 59.22 19.3 55.76 19.3 C52.3 19.3 50.8 18.74 50 17.03 C49.2 18.74 47.7 19.3 44.24 19.3 C40.78 19.3 39.28 18.74 38.48 17.03 C37.68 18.74 36.18 19.3 32.72 19.3 C29.26 19.3 26.96 18.35 26.96 15.47 Z",
          "M26.96 41.03 C26.96 43.22 28.96 44.25 31.96 44.4 Q50 45.61 68.04 44.4 C71.04 44.25 73.04 43.22 73.04 41.03 C73.04 38.15 70.74 37.2 67.28 37.2 C63.82 37.2 62.32 37.76 61.52 39.47 C60.72 37.76 59.22 37.2 55.76 37.2 C52.3 37.2 50.8 37.76 50 39.47 C49.2 37.76 47.7 37.2 44.24 37.2 C40.78 37.2 39.28 37.76 38.48 39.47 C37.68 37.76 36.18 37.2 32.72 37.2 C29.26 37.2 26.96 38.15 26.96 41.03 Z"] },
      sleep: { box: "M37.5 20.13 Q50 19.1 62.5 20.13 C72 20.32 75 23.36 75 28 C75 32.32 72 36 62.5 36 L37.5 36 C28 36 25 32.32 25 28 C25 23.36 28 20.32 37.5 20.13 Z",
        beat: "M33.5 27.9 H42.6 L44.5 26.46 L47 29.34 L49.7 25.82 L52 28.8 L53.6 27.9 H66.5",
        teeth: ["M32 22.24 C32 21.25 34 20.87 37 20.72 Q50 20.18 63 20.72 C66 20.87 68 21.25 68 22.24 C68 23.54 66.2 23.97 63.5 23.97 C60.8 23.97 59.8 23.71 59 22.94 C58.2 23.71 57.2 23.97 54.5 23.97 C51.8 23.97 50.8 23.71 50 22.94 C49.2 23.71 48.2 23.97 45.5 23.97 C42.8 23.97 41.8 23.71 41 22.94 C40.2 23.71 39.2 23.97 36.5 23.97 C33.8 23.97 32 23.54 32 22.24 Z",
          "M32 33.76 C32 34.75 34 35.13 37 35.28 Q50 35.82 63 35.28 C66 35.13 68 34.75 68 33.76 C68 32.46 66.2 32.03 63.5 32.03 C60.8 32.03 59.8 32.29 59 33.06 C58.2 32.29 57.2 32.03 54.5 32.03 C51.8 32.03 50.8 32.29 50 33.06 C49.2 32.29 48.2 32.03 45.5 32.03 C42.8 32.03 41.8 32.29 41 33.06 C40.2 32.29 39.2 32.03 36.5 32.03 C33.8 32.03 32 32.46 32 33.76 Z"] }
    };
    const visorTex = (v, glow) => canvasTex((V.x1 - V.x0) * V.k, (V.y1 - V.y0) * V.k, (g) => {
      g.setTransform(V.k, 0, 0, V.k, -V.x0 * V.k, -V.y0 * V.k);
      if (glow) {
        g.lineJoin = g.lineCap = "round"; g.strokeStyle = "#fff";
        [[4.4, .07], [3, .14], [2, .3], [1.3, 1]].forEach(([w, a]) => { g.globalAlpha = a; g.lineWidth = w; g.stroke(new Path2D(v.beat)); });
        return;
      }
      const box = new Path2D(v.box);
      g.fillStyle = "#241a3a"; g.fill(box);
      // glass: a soft sheen across the top, and a darker well toward the bottom
      g.save(); g.clip(box);
      const sh = g.createLinearGradient(0, 8, 0, 46); sh.addColorStop(0, "rgba(160,150,255,.22)"); sh.addColorStop(.45, "rgba(160,150,255,0)"); sh.addColorStop(1, "rgba(0,0,0,.25)");
      g.fillStyle = sh; g.fillRect(16, 8, 68, 40);
      g.restore();
      g.fillStyle = "#ffffff"; v.teeth.forEach(t => g.fill(new Path2D(t)));
      g.lineJoin = g.lineCap = "round"; g.strokeStyle = "rgba(79,210,255,.45)"; g.lineWidth = 1.3; g.stroke(new Path2D(v.beat));
      g.strokeStyle = "rgba(255,255,255,.07)"; g.lineWidth = .8; g.stroke(box);
    });
    const TEX = { awake: visorTex(VISOR.awake), sleep: visorTex(VISOR.sleep), glow: visorTex(VISOR.awake, true), glowSleep: visorTex(VISOR.sleep, true) };
    Object.values(TEX).forEach(t => { t.anisotropy = 8; }); TEX.awake.colorSpace = TEX.sleep.colorSpace = SRGBColorSpace;
    // the visor patch: the drawing's rectangle bent onto the front of the shell, standing just proud of it
    const visorG = (proud) => {
      const g = new PlaneGeometry(1, 1, 36, 18), p = g.attributes.position, v = new Vector3();
      for (let i = 0; i < p.count; i++) {
        const xd = V.x0 + (p.getX(i) + .5) * (V.x1 - V.x0), yd = V.y1 - (p.getY(i) + .5) * (V.y1 - V.y0);
        const x = (xd - 50) * U, y = (95 - yd) / 94.5, r = rAt(y);
        const th = Math.asin(Math.max(-.985, Math.min(.985, x / Math.max(r, 1e-3))));
        surf(th, y, v, proud); p.setXYZ(i, v.x, v.y, v.z);
      }
      g.computeVertexNormals(); return g;
    };
    const VG = visorG(.004), VGlow = visorG(.007);
    const beatMat = () => new ShaderMaterial({
      uniforms: { map: { value: TEX.glow }, color: { value: new Color(0x4fd2ff).multiplyScalar(1.5) }, t: { value: 0 }, amp: { value: 1 } },
      vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }`,
      fragmentShader: `uniform sampler2D map; uniform vec3 color; uniform float t, amp; varying vec2 vUv;
        void main(){ float a = texture2D(map, vUv).a; float x = (vUv.x - .19) / .62; float d = fract(t) * 1.5 - .2 - x;
          float trail = d >= 0. ? exp(-d * 4.5) : exp(d * 50.); float k = a * (.22 + 1.25 * trail) * amp;
          if (k < .003) discard; gl_FragColor = vec4(color * k, k); }`,
      transparent: true, depthWrite: false, blending: AdditiveBlending
    });
    const shadowTex = canvasTex(128, 128, (g) => { const r = g.createRadialGradient(64, 64, 0, 64, 64, 64); r.addColorStop(0, "rgba(0,0,0,.55)"); r.addColorStop(.55, "rgba(0,0,0,.28)"); r.addColorStop(1, "rgba(0,0,0,0)"); g.fillStyle = r; g.fillRect(0, 0, 128, 128); });
    const shadowG = new PlaneGeometry(1, 1); shadowG.rotateX(-Math.PI / 2);
    const m = (geo, mt, x, y, z, sx, sy, sz, parent) => { const o = new Mesh(geo, mt); o.position.set(x, y, z); o.scale.set(sx, sy ?? sx, sz ?? sx); parent && parent.add(o); return o; };
    // the hard hat, turned in one piece: crown, brim and a lip
    const hatG = (() => {
      const pts = [[0, .29], [.07, .287], [.14, .276], [.2, .258], [.25, .232], [.29, .2], [.32, .162], [.34, .118], [.352, .07], [.357, .03], [.36, .012], [.4, .006], [.44, .0], [.462, -.008], [.468, -.02], [.458, -.028], [.43, -.022], [.37, -.014], [.33, -.01]];
      const g = new LatheGeometry(pts.map(([x, y]) => new Vector2(x, y)), 64); g.scale(1, 1, .96); return g;
    })();

    function make(o = {}) {
      const root = new Group(), body = new Group(); root.add(body);
      const sh = o.shadow !== false ? m(shadowG, new MeshBasicMaterial({ map: shadowTex, transparent: true, depthWrite: false, opacity: .9 }), 0, .006, .05, 1.05, 1, .95, root) : null;
      const skin = o.mode === "balloon" ? mat.balloon : mat.skin;
      const shell = new Mesh(bodyG, skin); body.add(shell);
      const visor = new Mesh(VG, new MeshBasicMaterial({ map: o.sleep ? TEX.sleep : TEX.awake, color: 0xc4c2d2, transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 })); visor.renderOrder = 3; body.add(visor);
      const pulse = new Mesh(VGlow, beatMat()); pulse.renderOrder = 4; if (o.sleep) pulse.material.uniforms.map.value = TEX.glowSleep; body.add(pulse);
      // eyes sit on the rim of the shell just outside the belly, where the drawing has them
      const eyes = new Group(); eyes.position.y = .805 + LIFT; body.add(eyes);
      [-1, 1].forEach(s => {
        const e = onSurf(new Mesh(sphere, mat.eye), s * 1.07, .805, -.006); e.position.y -= .805 + LIFT; e.scale.set(.04, .047, .026); eyes.add(e);
        const n = surfN(s * 1.07, .805), sh2 = new Mesh(sphere, mat.shine);
        sh2.position.copy(e.position).addScaledVector(n, .019).add(new Vector3(-s * .011, .015, .007)); sh2.scale.setScalar(.012); eyes.add(sh2);
      });
      // gills on each side, two short dashes; nostrils, two dots up top
      [-1, 1].forEach(s => [.575, .54].forEach(y => {
        const g = onSurf(new Mesh(new CapsuleGeometry(.0055, .026, 4, 10), mat.gill), s * 1.2, y, .001);
        const t = surf(s * 1.2 + .01, y).sub(surf(s * 1.2 - .01, y)).normalize();
        g.quaternion.setFromUnitVectors(new Vector3(0, 1, 0), t); body.add(g);
      }));
      [-1, 1].forEach(s => { const n = onSurf(new Mesh(sphere, mat.nose), s * .36, .93, -.002); n.scale.set(.013, .009, .006); body.add(n); });
      // blushing cheeks, for when it's hot
      const blush = [-1, 1].map(s => { const b = onSurf(new Mesh(sphere, mat.blush), s * .82, .66, -.002); b.scale.set(.05, .026, .008); b.visible = false; body.add(b); return b; });
      // fins hang from the shoulders and turn about the top; feet turn about an ankle at the front of the base
      const fin = s => { const p = new Group(); p.position.set(s * .44, .62 + LIFT, .02); body.add(p); const f = new Mesh(finG, skin); f.position.set(s * .025, 0, 0); p.add(f); p.rotation.z = s * .14; return p; };
      const finL = fin(-1), finR = fin(1);
      const foot = s => { const p = new Group(); p.position.set(s * .2, .1, .06); body.add(p); if (o.mode === "sit") m(footG, skin, 0, -.02, .09, .135, .13, .15, p); else m(footG, skin, 0, -.01, .06, .19, .1, .21, p); return p; };
      const footL = foot(-1), footR = foot(1);
      let hat = null, lamp = null;
      if (o.hat) {
        hat = new Group(); hat.position.set(0, .91 + LIFT, .01); hat.rotation.x = -.07; body.add(hat);
        const h = new Mesh(hatG, mat.hat); hat.add(h);
        m(cylG, mat.brim, 0, .12, .33, .055, .03, .055, hat).rotation.x = Math.PI / 2 - .35;
        lamp = m(sphere, mat.lamp, 0, .125, .345, .036, .036, .016, hat); lamp.rotation.x = -.35;
      }
      let ball = null;
      if (o.ball) { ball = m(sphere, mat.ball, 0, -.5, .12, .1, .065, .065, finR); m(cylG, mat.lace, 0, -.5 + .06, .12, .004, .02, .05, finR).rotation.z = Math.PI / 2; }
      return { root, body, shell, visor, pulse, eyes, finL, finR, footL, footR, hat, lamp, ball, blush, shadow: sh, o,
        seed: Math.random() * 20, hop: -1, wave: -1, cheer: -1, excite: 0, yaw: 0, pitch: 0, beatT: Math.random(), nextBlink: 1 + Math.random() * 3, blinkT: -1,
        mode: o.mode || "stand", sleep: !!o.sleep };
    }
    const setSleep = (e, on) => { if (e.sleep === on) return; e.sleep = on; e.visor.material.map = on ? TEX.sleep : TEX.awake; e.pulse.material.uniforms.map.value = on ? TEX.glowSleep : TEX.glow; e.visor.material.needsUpdate = true; };
    return { make, mat, m, sphere, cylG, setSleep, LIFT };
  })();

  // a little cart for the aisle, a GPU tray for the technician, and the rope for the balloons
  function cartOf() {
    const g = new Group(), M_ = ECHO.mat, m = ECHO.m, bx = new BoxGeometry(1, 1, 1);
    m(bx, M_.cart, 0, .3, 0, .78, .22, 1.25, g);
    m(bx, M_.cartTrim, 0, .3, .63, .8, .04, .02, g);
    m(bx, M_.crate, 0, .58, .28, .62, .34, .5, g);
    m(bx, M_.crateGlow, 0, .76, .28, .5, .02, .38, g);
    [[-.4, .45], [.4, .45], [-.4, -.42], [.4, -.42]].forEach(([x, z]) => { const w = m(ECHO.cylG, M_.tire, x, .14, z, .14, .08, .14, g); w.rotation.z = Math.PI / 2; });
    m(ECHO.sphere, M_.lamp, 0, .34, .66, .06, .045, .02, g);
    m(ECHO.cylG, M_.cart, -.3, .85, -.5, .015, .9, .015, g);
    const beacon = m(ECHO.sphere, M.beacon, -.3, 1.32, -.5, .05, .05, .05, g);
    return { g, beacon };
  }
  const ECHOS = {};
  const echoGroup = new Group(); scene.add(echoGroup);
  const ROPE_SEG = 10, ropeG = new BufferGeometry();
  ropeG.setAttribute("position", new Float32BufferAttribute(new Float32Array(2 * 3 * ROPE_SEG * 2 * 3), 3).setUsage(DynamicDrawUsage));
  const ropes = new LineSegments(ropeG, ECHO.mat.rope); ropes.frustumCulled = false; scene.add(ropes);
  // a pop of sparks when you tap an Echo
  const SPARK = particles(48, pointsMat(softFrag, new Color(0x8de8df).multiplyScalar(1.6), { blending: AdditiveBlending }));
  SPARK.st.forEach(s => { s.age = s.life = 1; });
  function sparks(e) {
    const S = e.root.scale.x; e.root.updateMatrixWorld();
    const c = new Vector3(0, .8, .2).applyMatrix4(e.root.matrixWorld);
    let n = 0;
    for (const s of SPARK.st) {
      if (s.age < s.life) continue;
      const a = Math.random() * Math.PI * 2, up = .5 + Math.random();
      s.x = c.x; s.y = c.y; s.z = c.z; s.vx = Math.cos(a) * S * 1.4; s.vz = Math.sin(a) * S * 1.4; s.vy = up * S * 1.6;
      s.age = 0; s.life = .7 + Math.random() * .4; s.s0 = S * .09; s.s1 = S * .02; s.gr = S * 2.4;
      if (++n >= 12) break;
    }
  }
  {
    const add = (k, o) => { const e = ECHO.make(o); e.k = k; echoGroup.add(e.root); ECHOS[k] = e; return e; };
    add("sitter", { mode: "sit", shadow: false });
    const tech = add("tech", { mode: "tech", hat: true });
    tech.tray = new Group(); tech.root.add(tech.tray);
    ECHO.m(new BoxGeometry(1, 1, 1), ECHO.mat.tray, 0, 0, 0, .5, .05, .62, tech.tray);
    tech.led = ECHO.m(new BoxGeometry(1, 1, 1), ECHO.mat.off, 0, .0, -.315, .42, .025, .012, tech.tray);
    const cart = add("cart", { mode: "cart", shadow: false });
    cart.cart = cartOf(); cart.root.add(cart.cart.g);
    add("campus", { mode: "balloon", shadow: false });
    add("plant", { mode: "balloon", hat: true, shadow: false });
    add("rider", { mode: "sit", shadow: false });
    add("runner", { mode: "run", ball: true });
    const hot = add("hot", { mode: "hot" });
    hot.fan = new Group(); hot.fan.position.set(.02, -.5, .1); hot.finL.add(hot.fan);
    const fg = new CircleGeometry(1, 24, 0, Math.PI); const fm = new Mesh(fg, ECHO.mat.fan); fm.scale.setScalar(.22); fm.rotation.y = Math.PI / 2; hot.fan.add(fm);
    ECHO.m(ECHO.cylG, ECHO.mat.fan, 0, -.06, 0, .012, .14, .012, hot.fan);
    // Zzz over the plant balloon when there's nothing to build
    const zTex = canvasTex(64, 64, (g) => { g.fillStyle = "#fff"; g.font = `900 52px "Big Shoulders Display","Arial Narrow",sans-serif`; g.textAlign = "center"; g.textBaseline = "middle"; g.fillText("z", 32, 34); });
    ECHOS.plant.zs = [0, 1, 2].map(() => { const sp = new Sprite(new SpriteMaterial({ map: zTex, color: new Color(0xcfe3ff), transparent: true, depthWrite: false })); sp.visible = false; scene.add(sp); return sp; });
  }
  // put each Echo where its job is, for the build on screen
  function placeEchos(r) {
    const E = ECHOS, hr = site.heroRack, f = site.heroFace || 1;
    // on top of the hero rack, at the corner nearest the aisle, feet over the front edge, watching the token
    E.sitter.root.position.set(hr.x - .12 * f, hr.y + RK.h, hr.z + f * (RK.d / 2 - .2)); E.sitter.root.rotation.y = f > 0 ? 0 : Math.PI; E.sitter.root.scale.setScalar(.62);
    // the technician works six racks down the front row, if the row is that long
    const hh = site.heroHall;
    const techRack = hh && (hh.racks.find(k => k.line === 0 && Math.abs(k.x - (hh.heroX + 7.2)) < .31) || hh.racks.find(k => k.line === 0 && Math.abs(k.x - (hh.heroX + 3.6)) < .31));
    E.tech.root.visible = !!techRack;
    if (techRack) { E.tech.root.position.set(hh.ix + techRack.x, .2, hh.iz + techRack.z + f * (RK.d / 2 + .78)); E.tech.root.rotation.y = f > 0 ? Math.PI : 0; E.tech.root.scale.setScalar(.95); }
    // the cart runs the spine aisle, front to back, if the hall has more than a row or two
    E.cart.root.visible = !!(hh && hh.lines >= 3);
    if (hh) { E.cart.path = { x: hh.ix, z0: hh.iz + hh.inD / 2 - MARGIN - 2 * RK.d - HOT - 1, z1: hh.iz - hh.inD / 2 + 1.6 }; E.cart.root.scale.setScalar(1); }
    // a parade balloon over the campus; under one rack it's a party balloon tied to the rack's pad
    const C = lay.campus, big = lay.nb > 0;
    E.campus.anchor = big ? new Vector3(C.minX + (C.maxX - C.minX) * .62, 0, C.minZ - 6) : new Vector3(hr.x - 1.4, .2, hr.z - .9);
    E.campus.size = big ? Math.min(46, 30 + (C.maxX - C.minX) * .02) : 1.15;
    E.campus.lift = big ? 30 + E.campus.size * .5 : 4.4;
    E.campus.drift = big ? new Vector3(4, 0, -10) : new Vector3(-.5, 0, .4);
    // and one in a hard hat over the plant; if the load needs less than one plant, this Echo is asleep
    const pl = site.plant, P = site.P;
    E.plant.anchor = new Vector3(P.maxX - 8, 0, P.minZ + 8);
    E.plant.size = r.p.shape === "reactor" ? 56 : r.p.shape === "cell" ? 12 : r.p.shape === "aero" ? 20 : 30;
    E.plant.lift = pl.h + E.plant.size * .75 + (r.p.shape === "cell" ? 6 : 10);
    E.plant.drift = new Vector3(-E.plant.size * .5, 0, E.plant.size * .4);
    if (E.plant.sleep && r.many) E.plant.cheer = performance.now();   // wakes up when there's something to build
    ECHO.setSleep(E.plant, !r.many);
    // fanning itself on a hall roof among the chillers, or on the open hall's gallery roof
    E.hot.root.visible = !!hh;
    if (hh) {
      const second = lay.halls[1];
      if (second) E.hot.root.position.set(second.x - lay.bw / 2 + 12 + (lay.bw - 20) / 6 * .5, HALL_H + .06, second.z);
      else E.hot.root.position.set(hh.ix - hh.inW / 2 - GAL / 2, CUT + .2, hh.iz + 2);
      E.hot.root.rotation.y = .5; E.hot.root.scale.setScalar(1.1);
    }
    E.hot.pue = state.pue;
    E.hot.blush.forEach(b => { b.visible = state.pue >= 1.3; });
    // riding on the truck's trailer
    E.rider.root.position.copy(site.truckTop); E.rider.root.rotation.y = 0; E.rider.root.scale.setScalar(1.05);
    // running the football field with a ball
    E.runner.root.visible = !!site.fieldC;
    if (site.fieldC) E.runner.path = { x0: site.fieldC.x - 46, x1: site.fieldC.x + 46, z: site.fieldC.z + 6 };
    echoBubble.k && placeBubble();
  }
  const vtmp = new Vector3(), vtmp2 = new Vector3();
  // where something is, seen from an Echo: a turn and a tilt toward it
  const aim = (e, p) => { vtmp2.copy(p); e.root.worldToLocal(vtmp2); const yaw = Math.atan2(vtmp2.x, vtmp2.z), pitch = Math.atan2(vtmp2.y - .8, Math.hypot(vtmp2.x, vtmp2.z)); return { yaw, pitch, d: vtmp2.length() }; };
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  function animateEchos(t, dt) {
    const E = ECHOS, s = t / 1000, still = calm, LIFT = ECHO.LIFT;
    let ri = 0; const rp = ropeG.attributes.position.array;
    Object.values(E).forEach(e => {
      if (!e.root.visible) return;
      const tt = still ? e.seed : s + e.seed, S = e.root.scale.x;
      // blink now and then, sometimes twice
      if (!still && !e.sleep) {
        e.nextBlink -= dt;
        if (e.nextBlink <= 0) { e.blinkT = 0; e.nextBlink = Math.random() < .25 ? .32 : 2.2 + Math.random() * 3.6; }
        if (e.blinkT >= 0) { e.blinkT += dt; if (e.blinkT > .16) e.blinkT = -1; }
      }
      e.eyes.scale.y = e.sleep ? .14 : e.blinkT >= 0 ? .12 + Math.abs(e.blinkT - .08) / .08 * .88 : 1;
      // the heartbeat sweeps across the visor; faster when excited, slow when asleep
      e.excite = Math.max(0, e.excite - dt * .35);
      e.beatT += still ? 0 : dt * (e.sleep ? .35 : .75 + e.excite * 1.4);
      e.pulse.material.uniforms.t.value = still ? .55 : e.beatT;
      e.pulse.material.uniforms.amp.value = e.sleep ? .55 : 1;
      // breathe
      const br = still ? 0 : Math.sin(tt * 2.1);
      let bob = Math.sin(tt * 2.4) * .01, finA = still ? 0 : Math.sin(tt * 1.9) * .06, baseY = 0, lean = 0, look = 0, spin = 0;
      e.finL.rotation.set(0, 0, -.14 - finA); e.finR.rotation.set(0, 0, .14 + finA);
      e.footL.rotation.set(0, 0, 0); e.footR.rotation.set(0, 0, 0);
      e.footL.position.set(-.2, .1, .06); e.footR.position.set(.2, .1, .06);
      // how much it should turn to face you: only when you're close enough to see its face
      const cam = aim(e, camera.position), near = clamp(1 - (cam.d - 3) / 10, 0, 1);
      let target = cam, turn = .7;
      if (e.mode === "sit") {
        // sitting on an edge: feet swing over it; the sitter watches its token and reaches for it now and then
        baseY = -LIFT;
        e.footL.position.set(-.2, .07, .36); e.footR.position.set(.2, .07, .36);
        e.footL.rotation.x = 1 + Math.sin(tt * 3.2) * .4; e.footR.rotation.x = 1 + Math.sin(tt * 3.2 + 2.2) * .4;
        if (e.k === "sitter") {
          const reach = still ? 0 : Math.max(0, Math.sin(tt * .9)) ** 6;
          e.finR.rotation.set(-1 * reach, 0, .14 + finA + 1.4 * reach);
          const watchTok = (tt % 9) < 6 || near < .2;
          if (watchTok) { target = aim(e, heroToken.position); look = 1; turn = .9; } else look = near;
          lean = reach * .12;
        } else {
          const w = still ? 0 : Math.max(0, Math.sin(tt * .7)) ** 4;
          e.finL.rotation.set(0, 0, -.14 - 2.4 * w + Math.sin(tt * 9) * .25 * w);
          look = near;
        }
        bob *= .4;
      } else if (e.mode === "tech") {
        // pull a tray out, look it over, slide it home, watch its light come on, then glance at you
        const c = (tt % 7) / 7, k = c < .17 ? c / .17 : c < .4 ? 1 : c < .57 ? 1 - (c - .4) / .17 : 0;
        e.tray.position.set(0, .66, .62 - .34 * (1 - k) + .05);
        e.finL.rotation.set(-1.25, 0, -.32); e.finR.rotation.set(-1.25, 0, .32);
        lean = .1 - .12 * k; e.body.position.z = -.12 * k;
        e.led.material = k < .02 && c > .6 ? ECHO.mat.on : ECHO.mat.off;
        look = c > .7 ? near : 0;
        if (c > .7 && near > .3) { e.finR.rotation.set(-.2, 0, .3 + Math.max(0, Math.sin((c - .7) / .3 * Math.PI)) * 2.2); }
      } else if (e.mode === "cart") {
        // drive the aisle, turn around at each end
        const P = e.path; if (P) {
          const len = Math.abs(P.z1 - P.z0), sp = 2.4, leg = len / sp + 1.2, cyc = 2 * leg, u = (still ? .3 : (s * 1 + e.seed) % cyc);
          let z, dir;
          if (u < leg) { const v = Math.min(1, u / (len / sp)); z = P.z0 + (P.z1 - P.z0) * v; dir = Math.sign(P.z1 - P.z0); if (u > len / sp) dir *= Math.cos(Math.min(1, (u - len / sp) / 1.2) * Math.PI); }
          else { const v = Math.min(1, (u - leg) / (len / sp)); z = P.z1 + (P.z0 - P.z1) * v; dir = Math.sign(P.z0 - P.z1); if (u - leg > len / sp) dir *= Math.cos(Math.min(1, (u - leg - len / sp) / 1.2) * Math.PI); }
          e.root.position.set(P.x + .2, .2, z);
          e.root.rotation.y = dir >= 0 ? 0 : Math.PI;
        }
        e.finL.rotation.set(-1.1, 0, -.2); e.finR.rotation.set(-1.1, 0, .2);
        e.cart.beacon.visible = still || Math.sin(s * 9) > 0;
        baseY = .41 - LIFT * .82; e.body.position.z = -.38;
        bob = Math.abs(Math.sin(tt * 7)) * .01;
        look = near * .6;
      } else if (e.mode === "balloon") {
        // floating on its tethers, swaying in the wind, paddling slowly; it spins and cheers when the build changes
        const B = e.size || 20;
        const gust = still ? 0 : Math.sin(tt * .23) * .6 + Math.sin(tt * .61 + 2) * .4;
        const sway = still ? 0 : Math.sin(tt * .35) * .5, sway2 = still ? 0 : Math.sin(tt * .27 + 1) * .5;
        e.root.scale.setScalar(B);
        e.root.position.set(e.anchor.x + e.drift.x * (1 + sway * .15 + gust * .08), e.anchor.y + e.lift + (still ? 0 : Math.sin(tt * .6) * B * .045), e.anchor.z + e.drift.z * (1 + sway2 * .15));
        let ch = 0; if (e.cheer >= 0) { const u = (t - e.cheer) / 1800; if (u >= 1) e.cheer = -1; else ch = u; }
        spin = ch ? (1 - Math.pow(1 - ch, 3)) * Math.PI * 2 : 0;
        e.root.rotation.set(sway * .06 + gust * .03, .5 + sway * .25 + spin, sway2 * .05);
        e.root.updateMatrixWorld();
        const paddle = still ? 0 : Math.sin(tt * 1.1);
        e.finL.rotation.set(paddle * .25, 0, -.3 - Math.sin(tt * .8) * .14 - (ch ? Math.sin(ch * Math.PI) * 2.2 : 0));
        e.finR.rotation.set(-paddle * .25, 0, .3 + Math.sin(tt * .8 + 1) * .14 + (ch ? Math.sin(ch * Math.PI) * 2.2 : 0));
        e.footL.rotation.x = .3 + paddle * .15; e.footR.rotation.x = .3 - paddle * .15;
        bob = 0; look = near * .5; turn = .5;
        if (e.zs) e.zs.forEach((z, i) => {
          z.visible = e.sleep;
          if (!e.sleep) return;
          const u = ((still ? .3 * i : s * .35 + i / 3) % 1);
          vtmp.set(.32 + u * .5, 1.15 + u * .7, .1).applyMatrix4(e.root.matrixWorld);
          z.position.copy(vtmp); z.scale.setScalar(B * (.14 + u * .16)); z.material.opacity = Math.sin(Math.PI * u) * .9;
        });
        // three tethers from the base down to the anchor, each with a little slack that the wind pushes
        [[-.3, .2], [.3, .2], [0, -.28]].forEach(([x, z], i) => {
          const A = new Vector3(x, LIFT + .02, z).applyMatrix4(e.root.matrixWorld);
          const Bp = new Vector3(e.anchor.x + (i - 1) * B * .06, e.anchor.y + .05, e.anchor.z + (i === 2 ? -B * .05 : B * .03));
          const slack = B * (.05 + .02 * gust);
          let prev = A.clone();
          for (let k = 1; k <= ROPE_SEG; k++) {
            const u = k / ROPE_SEG, p = A.clone().lerp(Bp, u), bow = Math.sin(Math.PI * u) * slack;
            p.x += bow * .8; p.z -= bow * .5;
            rp.set([prev.x, prev.y, prev.z, p.x, p.y, p.z], ri); ri += 6; prev = p;
          }
        });
      } else if (e.mode === "hot") {
        // the higher the PUE, the faster the fan; it looks up at you between fans
        const sp = 3 + (e.pue - 1) * 40;
        e.finL.rotation.set(-.6, 0, -.9 - Math.abs(Math.sin(tt * sp * .5)) * .5);
        e.fan.rotation.set(0, 0, Math.sin(tt * sp) * .5);
        e.body.rotation.z = Math.sin(tt * .8) * .03;
        look = near * .8;
      } else if (e.mode === "run") {
        // run the length of the field and back, ball tucked in
        const P = e.path; if (P) {
          const len = P.x1 - P.x0, sp = 5.2, leg = len / sp, u = still ? .2 : (s + e.seed) % (2 * leg), out = u < leg, v = out ? u / leg : (u - leg) / leg;
          e.root.position.set(out ? P.x0 + len * v : P.x1 - len * v, 0, P.z);
          e.root.rotation.y = out ? Math.PI / 2 : -Math.PI / 2;
        }
        const st = tt * 11;
        e.footL.rotation.x = Math.sin(st) * .7; e.footR.rotation.x = -Math.sin(st) * .7;
        e.finL.rotation.set(Math.sin(st) * .6, 0, -.25);
        e.finR.rotation.set(-.5, 0, .55);
        lean = .16;
        bob = Math.abs(Math.sin(st)) * .06;
      } else {
        // standing: shift weight from foot to foot
        const w = Math.sin(tt * .9);
        e.footL.rotation.x = Math.max(0, w) * .25; e.footR.rotation.x = Math.max(0, -w) * .25;
        look = near;
      }
      // a wave when you point at it
      if (e.wave >= 0) {
        const u = (t - e.wave) / 1400;
        if (u >= 1) e.wave = -1;
        else { const k = Math.sin(Math.PI * Math.min(1, u * 1.6)) ** .5 * (u < .85 ? 1 : (1 - u) / .15); e.finL.rotation.set(-.2 * k, 0, -.14 - 2.5 * k + Math.sin(u * 28) * .3 * k); look = Math.max(look, 1); target = cam; turn = .9; }
      }
      // turn toward what it's looking at, easing, never further than its neck allows
      const want = look ? clamp(target.yaw, -turn, turn) * look : 0, wantP = look ? clamp(target.pitch, -.3, .35) * look : 0;
      const k = Math.min(1, dt * (still ? 60 : 3.2));
      e.yaw += (want - e.yaw) * k; e.pitch += (wantP - e.pitch) * k;
      e.body.rotation.y = e.yaw;
      e.body.rotation.x = lean - e.pitch * .35;
      if (e.mode !== "tech" && e.mode !== "cart") e.body.position.z = 0;
      // a tap makes Echo hop, squashing on the way up and on landing
      let hop = 0, sq = 0;
      if (e.hop >= 0) { const u = (t - e.hop) / 700; if (u >= 1) e.hop = -1; else { hop = Math.sin(Math.PI * clamp((u - .12) / .76, 0, 1)) * .34; sq = u < .12 ? -Math.sin(u / .12 * Math.PI) * .1 : u > .88 ? -Math.sin((u - .88) / .12 * Math.PI) * .08 : .04; } }
      const base = e.mode === "cart" ? .82 : 1;
      e.body.scale.set(base * (1 - .012 * br - sq * .6), base * (1 + .016 * br + sq), base * (1 - .012 * br - sq * .6));
      e.body.position.y = baseY + bob + hop;
      if (e.shadow) { const f = 1 - hop * 1.3; e.shadow.scale.set(1.05 * f, 1, .95 * f); e.shadow.material.opacity = .9 * f; }
      void S;
    });
    for (let i = ri; i < rp.length; i++) rp[i] = 0;
    ropeG.attributes.position.needsUpdate = true;
    // sparks
    for (let i = 0; i < SPARK.n; i++) {
      const p = SPARK.st[i];
      if (p.age >= p.life) { SPARK.alpha[i] = 0; continue; }
      p.age += dt; const a = p.age, u = a / p.life;
      SPARK.pos[i * 3] = p.x + p.vx * a; SPARK.pos[i * 3 + 1] = p.y + p.vy * a - p.gr * a * a; SPARK.pos[i * 3 + 2] = p.z + p.vz * a;
      SPARK.size[i] = p.s0 + (p.s1 - p.s0) * u; SPARK.alpha[i] = (1 - u) * .95;
    }
    SPARK.g.attributes.position.needsUpdate = true; SPARK.g.attributes.aSize.needsUpdate = true; SPARK.g.attributes.aAlpha.needsUpdate = true;
  }

  // what Echo says when you tap it
  const bubbleEl = document.createElement("div"); bubbleEl.className = "bubble3d"; bubbleEl.setAttribute("role", "status"); labelBox.parentNode.appendChild(bubbleEl);
  const echoBubble = { k: null, until: 0 };
  function echoLine(k) {
    const r = last, p = r.p, kW = sig(r.c.kw * r.c.rack, 3);
    return {
      sitter: `That token cost ${joules(r.jTok)}. Worth it.`,
      tech: `Hot swap! This rack draws ${kW} kW.`,
      cart: `Delivering ${words(r.tps)} tokens a second.`,
      campus: lay.nb ? `${power(r.facMW)} and counting!` : `It’s a party: ${sig(r.chips, 2)} chips’ worth.`,
      plant: r.many ? `${int(r.build)} ${r.build === 1 ? p.one : p.many}, coming up.` : `I only need ${answerBig(r)} of this one. Zzz.`,
      hot: state.pue >= 1.3 ? `PUE ${state.pue.toFixed(2)}. It’s getting hot up here.` : `PUE ${state.pue.toFixed(2)}. Cooling adds ${Math.round((state.pue - 1) * 100)}%.`,
      rider: p.gas ? "Next stop: the turbine queue." : "Special delivery!",
      runner: "110 meters. I paced it out."
    }[k];
  }
  function sayEcho(k, text, ms = 3200) {
    const e = ECHOS[k]; if (!e) return;
    echoBubble.k = k; echoBubble.until = performance.now() + ms;
    bubbleEl.textContent = text || echoLine(k);
    bubbleEl.classList.add("on");
    if (!calm) { e.hop = performance.now(); e.excite = 1; sparks(e); }
  }
  function placeBubble() {
    const k = echoBubble.k; if (!k) return;
    const e = ECHOS[k];
    if (performance.now() > echoBubble.until || !e.root.visible) { bubbleEl.classList.remove("on"); if (performance.now() > echoBubble.until + 400) echoBubble.k = null; return; }
    vtmp.set(0, e.hat ? 1.36 : 1.2, 0).applyMatrix4(e.root.matrixWorld).project(camera);
    const x = (vtmp.x + 1) / 2 * W, y = (1 - vtmp.y) / 2 * H;
    const off = vtmp.z > 1 || x < -60 || x > W + 60 || y < -40 || y > H + 40;
    bubbleEl.style.opacity = off ? "0" : "";
    const bw = bubbleEl.offsetWidth, bh = bubbleEl.offsetHeight;
    let bx = Math.min(W - bw - 12, Math.max(12, x - 18)), by = y;
    for (let i = 0; i < 3; i++) {
      const hit = textBoxes.find(b => bx + bw > b.l && bx < b.r && by > b.t && by - bh < b.b);
      if (!hit) break;
      // under the headline: drop below it; on the card or dock: lift above it
      by = hit.t < H / 2 ? hit.b + bh + 10 : hit.t - 10;
    }
    bubbleEl.style.transform = `translate(${bx.toFixed(1)}px,${by.toFixed(1)}px) translate(0,-100%)`;
  }
  function echoView(k) {
    const e = ECHOS[k], s = e.root.scale.x;
    e.root.updateMatrixWorld();
    const c = new Vector3(0, e.mode === "sit" ? .5 : .62, 0).applyMatrix4(e.root.matrixWorld);
    const az = e.mode === "tech" ? (site.heroFace > 0 ? 1.3 : Math.PI + 1.3) : e.mode === "cart" ? e.root.rotation.y + .25 : e.mode === "run" ? e.root.rotation.y + .75 : e.root.rotation.y + .38;
    const dist = e.mode === "balloon" ? s * 3.4 : e.mode === "cart" ? 5.5 : e.mode === "run" ? 7 : e.mode === "hot" ? 6 : Math.max(3.2, s * 4.2);
    return { target: c, dist, az, el: e.mode === "balloon" ? .05 : e.mode === "cart" ? .3 : .16, follow: e.mode === "cart" || e.mode === "run" ? k : null };
  }
  function screenSize(k) {
    const e = ECHOS[k], s = e.root.scale.x;
    const d = camera.position.distanceTo(vtmp.set(0, .5, 0).applyMatrix4(e.root.matrixWorld));
    return s / (2 * d * Math.tan(camera.fov * Math.PI / 360)) * H;
  }
  function pickEcho(rayIn) {
    let best = null, bd = Infinity;
    Object.values(ECHOS).forEach(e => {
      if (!e.root.visible) return;
      const s = e.root.scale.x, c = vtmp.set(0, .6, 0).applyMatrix4(e.root.matrixWorld);
      // a far-off Echo is still a fair target: at least 16 pixels across
      const wpp = 2 * camera.position.distanceTo(c) * Math.tan(camera.fov * Math.PI / 360) / H;
      const sp = new Sphere(c.clone(), Math.max(.66 * s * (e.mode === "cart" ? 1.4 : 1), wpp * 16));
      if (rayIn.intersectsSphere(sp)) { const d = rayIn.origin.distanceTo(c); if (d < bd) { bd = d; best = e.k; } }
    });
    return best;
  }

  /* ------------------------------------------------ the camera: chapters, flights and the scale bar */
  function view(k) {
    const sv = (target, dist, az, el) => ({ target, dist, az, el });
    const all = new Box3().setFromPoints([new Vector3(site.plant.c.x - site.plant.w / 2, 0, site.plant.c.z - site.plant.d / 2), new Vector3(lay.campus.maxX, 0, lay.campus.maxZ), new Vector3(lay.campus.minX, 0, lay.campus.minZ), new Vector3(site.plant.c.x + site.plant.w / 2, 0, site.plant.c.z + site.plant.d / 2)]);
    if (site.field && lay.nb) all.expandByPoint(site.field.clone().add(new Vector3(60, 0, 30)));
    const sz = all.getSize(new Vector3()), ctr = all.getCenter(new Vector3());
    // every view is framed for the whole screen, then pulled back to fit the open part of it (see measureFree)
    const tall = free.k, fit = 1, f = site.heroFace || 1, face = f > 0 ? 0 : Math.PI, hr = site.heroRack;
    if (k === "token") return sv(new Vector3(hr.x + .1 * f, 2.86, hr.z + f * (RK.d / 2 + .1)), 2.5 * tall, face - .32, .1);
    if (k === "rack") return sv(new Vector3(hr.x + .45, 2.05, hr.z + f * (RK.d / 2 + .45)), 5.1 * tall, face - .3, .05);
    if (k === "hall") return lay.nb ? sv(site.hall.c.clone().add(new Vector3(0, 1, 0)), (Math.max(site.hall.w, site.hall.d) * 1.12 + 16) * tall, .45, .66) : sv(site.heroRack.clone().add(new Vector3(0, 1, 0)), 14 * tall, .6, .5);
    if (k === "campus") {
      const C = lay.campus, w = C.maxX - C.minX, d = C.maxZ - C.minZ;
      return sv(new Vector3((C.minX + C.maxX) / 2, 0, (C.minZ + C.maxZ) / 2 + d * .05), (Math.max(w, d * 1.3) * .9 + 70) * tall * fit, .62, .62);
    }
    if (k === "power") {
      // the plant, its stacks, and Echo's balloon over it
      const top = ECHOS.plant.lift + ECHOS.plant.size * 1.1;
      return sv(site.plant.c.clone().add(new Vector3(site.plant.w * .1, Math.max(site.plant.h * .3, top * .38), 0)), (Math.max(site.plant.w, site.plant.d) * 1.05 + Math.max(site.plant.h * 1.6, top * 1.15) + 50) * tall * fit, -.72, .3);
    }
    // on a tall phone screen, look down the line from the campus end so the whole build stacks up the screen
    if (small) return sv(ctr.setY(0), (Math.max(sz.x * .7, sz.z * 1.5) + 160), 1.42, .42);
    return sv(ctr.setY(0), (Math.max(sz.x, sz.z * 1.6) * .92 + 150) * tall * fit, .34, .3);
  }
  const offsetOf = v => new Vector3(Math.sin(v.az) * Math.cos(v.el), Math.sin(v.el), Math.cos(v.az) * Math.cos(v.el)).multiplyScalar(v.dist);
  function snap(v) { controls.target.copy(v.target); camera.position.copy(v.target).add(offsetOf(v)); camera.lookAt(v.target); controls.update(); }
  let flight = null, intro = false, moved = false, follow = null;
  function fly(v, dur, isIntro = false) {
    if (calm) { snap(v); return; }
    const off = camera.position.clone().sub(controls.target);
    const d0 = off.length(), az0 = Math.atan2(off.x, off.z), el0 = Math.asin(Math.min(1, off.y / d0));
    let daz = v.az - az0; daz = ((daz + Math.PI) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2) - Math.PI;
    flight = { t0: performance.now(), dur: dur ?? Math.min(4200, 1200 + 520 * Math.abs(Math.log10(v.dist / d0))), from: { t: controls.target.clone(), d: d0, az: az0, el: el0 }, to: v, daz };
    intro = isIntro; controls.enabled = false; controls.autoRotate = false; follow = null;
  }
  const ease = u => u < .5 ? 4 * u * u * u : 1 - Math.pow(-2 * u + 2, 3) / 2;
  const fc = new Vector3();
  function stepFollow() {
    if (!follow || flight) return;
    const e = ECHOS[follow]; if (!e || !e.root.visible) { follow = null; return; }
    fc.set(0, .55, 0).applyMatrix4(e.root.matrixWorld).sub(controls.target);
    controls.target.add(fc); camera.position.add(fc);
  }
  function stepFlight(now) {
    if (!flight) return;
    const f = flight, u = Math.min(1, (now - f.t0) / f.dur), e = ease(u);
    if (f.to.follow) { const ec = ECHOS[f.to.follow]; f.to.target.set(0, .55, 0).applyMatrix4(ec.root.matrixWorld); }
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
      if (f.done) f.done();
      if (f.to.follow) follow = f.to.follow;
      controls.autoRotate = !calm && chapter === "all" && !moved;
    }
  }
  const scaleEl = $("#scale"), scaleBar = $("i", scaleEl), scaleTxt = $("span", scaleEl);
  let lastScale = "";
  // a round length that fits in about 110 pixels at this distance, as the scale bar shows it
  const niceAt = d => {
    const wpp = 2 * d * Math.tan(camera.fov * Math.PI / 360) / H, want = (small ? 70 : 110) * wpp;
    const e = Math.floor(Math.log10(want)), b = 10 ** e, nice = [5, 2, 1].map(m => m * b).find(v => v <= want) || b;
    return { wpp, nice, txt: nice < 1 ? `${Math.round(nice * 100)} cm` : nice < 1000 ? `${int(nice)} m` : `${sig(nice / 1000, 2)} km` };
  };
  // each stop on the journey shows the scale bar you'll see when you get there
  function updateScale() {
    const { wpp, nice, txt } = niceAt(camera.position.distanceTo(controls.target));
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
    if (changed) placeEchos(r);
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
    site.heroRack = new Vector3(0, .2, 0); site.heroFace = 1; site.heroHall = null;
    site.hall = { c: new Vector3(0, 0, 0), w: 5, d: 5 };
    emit.racks = [{ x: 0, z: 0 }]; emit.roofs = [];
    person.position.set(1.4, .2, RK.d / 2 + 1); person.rotation.y = -.7;
    heroToken.position.set(.3, 2.8, RK.d / 2 + .34);
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
    const ek = pickEcho(ray.ray); if (ek) return "echo:" + ek;
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
    if (k && k.startsWith("echo:")) {
      const ek = k.slice(5);
      if (screenSize(ek) < 70) { fly(echoView(ek)); flight && (flight.done = () => sayEcho(ek)); if (!flight) sayEcho(ek); }
      else sayEcho(ek);
      return;
    }
    if (k && k !== chapter) go(k); else if (k) go(k === "hall" ? "rack" : k === "campus" ? "hall" : k);
  });
  let hoverQ = false;
  canvas.addEventListener("pointermove", e => {
    if (down || hoverQ || e.pointerType !== "mouse") return;
    hoverQ = true; requestAnimationFrame(() => {
      hoverQ = false; const k = pick(e); canvas.style.cursor = k ? "pointer" : "";
      // pointing at an Echo makes it look up and wave
      const ec = k && k.startsWith("echo:") && ECHOS[k.slice(5)], now = performance.now();
      if (ec && !calm && ec.wave < 0 && now - (ec.waved || 0) > 2600) { ec.wave = now; ec.waved = now; }
    });
  });
  // once you take the camera, a Re-center button brings you back to the chapter's view
  const recenter = $("#recenter");
  const setMoved = v => { moved = v; recenter.hidden = !v; };
  controls.addEventListener("start", () => { setMoved(true); follow = null; controls.autoRotate = false; stage.classList.add("touched"); });
  canvas.addEventListener("wheel", () => { setMoved(true); controls.autoRotate = false; stage.classList.add("touched"); }, { passive: true });

  /* ------------------------------------------------ sizing */
  let W = 1, H = 1, ox = 0, oy = 0;
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
    // when the console opens or closes, center on the space that's left and reframe, unless you've taken the camera
    measureText();
    if (now === true) { ox = W / 2 - free.cx; oy = H / 2 - free.cy; return; }
    clearTimeout(frameT);
    frameT = setTimeout(() => { measureText(); if (!flight && !moved && !intro) fly(view(chapter), 900); }, 120);
  }
  let frameT = 0;
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
    stepFollow();
    if (!flight) controls.update();
    ox += (W / 2 - free.cx - ox) * Math.min(1, dt * 6);
    oy += (H / 2 - free.cy - oy) * Math.min(1, dt * 6);
    camera.setViewOffset(W, H, ox, oy, W, H);
    const d = camera.position.distanceTo(controls.target);
    scene.fog.density = .26 / (d + 18); groundMat.uniforms.fogD.value = scene.fog.density;
    camera.near = Math.min(6, Math.max(.03, d * .004)); camera.updateProjectionMatrix();
    sky.position.copy(camera.position); stars.position.copy(camera.position); ridges.position.copy(camera.position); towns.position.copy(camera.position);
    ground.position.set(Math.round(camera.position.x / 1000) * 1000, 0, Math.round(camera.position.z / 1000) * 1000);
    if (bloom) bloom.strength = (small ? .5 : .62) * Math.min(1, .45 + d / 160);
    animate(dt, now);
    animateEchos(now, dt);
    placeLabels(dt);
    placeBubble();
    if (frameN % 3 === 0) updateScale();
    if (composer) composer.render(); else renderer.render(scene, camera);
  }

  let settleT = 0;
  // a handle for local screenshots; the published build defines DEBUG as false and drops this
  if (typeof DEBUG !== "undefined" && DEBUG) window.__m = { camera, controls, ECHOS, snap, view, echoView, sayEcho, scene, heroToken, get flight() { return flight; }, get free() { return free; }, get off() { return [ox, oy, W, H]; } };
  return {
    update(r) { if (lay) pending = r; else update(r); },
    settle(big) {
      if (big) growNext = true;
      // after the dials stop moving, reframe whatever chapter is showing
      clearTimeout(settleT);
      settleT = setTimeout(() => { if (!intro) fly(view(chapter), 1300); }, 420);
      // the balloons cheer a new build
      if (big && !calm) { const now = performance.now(); ECHOS.campus.cheer = now; ECHOS.plant.cheer = now + 250; }
    },
    visit(k) { setMoved(false); fly(view(k)); },
    frameSide,
    start() {
      size();
      if (calm || location.hash === "#all") { document.body.classList.remove("intro"); chapter = "all"; showCard("all"); snap(view("all")); controls.autoRotate = false; }
      else {
        chapter = "token"; showCard("token"); snap(view("token"));
        setTimeout(() => { sayEcho("sitter", "Hi, I’m Echo! 👋 Follow this token.", 2600); ECHOS.sitter.wave = performance.now(); }, 450);
        setTimeout(() => { if (!moved) fly(view("all"), 8200, true); else document.body.classList.remove("intro"); }, 2700);
      }
      requestAnimationFrame(tick);
    }
  };
}
