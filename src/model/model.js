// Tokens to turbines: a 3D model of what it takes to serve a day of AI tokens.
// Bundled with three.js into model/model.js (see src/model/build.sh).
import {
  Scene, PerspectiveCamera, WebGLRenderer, Color, Fog, AmbientLight, HemisphereLight, DirectionalLight,
  BoxGeometry, CylinderGeometry, SphereGeometry, LatheGeometry, PlaneGeometry, BufferGeometry, BufferAttribute,
  MeshStandardMaterial, MeshBasicMaterial, PointsMaterial, LineBasicMaterial, InstancedMesh, Mesh, Points, Line,
  Object3D, Vector3, Vector2, Group, CatmullRomCurve3, AdditiveBlending, CanvasTexture, GridHelper, SRGBColorSpace,
  ACESFilmicToneMapping, DynamicDrawUsage, RepeatWrapping, PCFShadowMap, EdgesGeometry, LineSegments
} from "three";
import { OrbitControls } from "three-addons/controls/OrbitControls.js";

/* ---------------------------------------------------------------- the numbers */
const DEMAND = [
  { k: "google", n: "Google, every product", d: "3.2 quadrillion tokens a month, May 2026", v: 3.2e15 / 30 },
  { k: "api", n: "Google’s API alone", d: "Nearly 32 billion tokens a minute, Oct 2026", v: 32e9 * 1440 },
  { k: "billion", n: "A billion people, one answer each", d: "1,000 tokens apiece, every day. My scenario", v: 1e12 },
  { k: "agent", n: "One heavy coding agent", d: "50 million tokens a day. My scenario", v: 5e7 }
];
const CHIPS = [
  { k: "h100", n: "H100", sys: "DGX H100: 8 GPUs, 10.2 kW", kw: 10.2 / 8, rack: 32, rackNote: "4 servers a rack", thr: 2000,
    thrNote: "My estimate. NVIDIA puts B200 at more than 4× H200 on Llama 3.3 70B, and H100 is no faster than H200." },
  { k: "b200", n: "B200", sys: "DGX B200: 8 GPUs, about 14.3 kW", kw: 14.3 / 8, rack: 32, rackNote: "4 servers a rack", thr: 10000,
    thrNote: "NVIDIA, InferenceMAX: Llama 3.3 70B at 50 tokens a second per user." },
  { k: "gb200", n: "GB200 NVL72", sys: "72 GPUs in one rack, about 120 kW", kw: 120 / 72, rack: 72, rackNote: "72 GPUs a rack", thr: 10000,
    thrNote: "My estimate, from NVIDIA’s 4× per-GPU throughput over H200." },
  { k: "gb300", n: "GB300 NVL72", sys: "72 GPUs in one rack, 132–140 kW", kw: 136 / 72, rack: 72, rackNote: "72 GPUs a rack", thr: 15000,
    thrNote: "My estimate, from NVIDIA’s 1.5× over GB200." }
];
const POWER = [
  { k: "7ha", n: "Gas turbine", m: "GE Vernova 7HA.03", sing: "GE Vernova 7HA.03 gas turbine", plur: "GE Vernova 7HA.03 gas turbines", one: "turbine", many: "turbines", mw: 430, shape: "turbine",
    link: ["molecules", "Molecules are easy. Machines are hard."] },
  { k: "lm6000", n: "Aeroderivative", m: "GE Vernova LM6000PF+", sing: "GE Vernova LM6000 turbine", plur: "GE Vernova LM6000 turbines", one: "turbine", many: "turbines", mw: 56.9, shape: "aero",
    link: ["molecules", "Molecules are easy. Machines are hard."] },
  { k: "bloom", n: "Fuel cells", m: "Bloom Energy Server", sing: "Bloom Energy Server", plur: "Bloom Energy Servers", one: "Energy Server", many: "Energy Servers", mw: 0.325, shape: "cell",
    link: ["bloom", "The power plant that ships like a server."] },
  { k: "ap1000", n: "Reactor", m: "Westinghouse AP1000", sing: "Westinghouse AP1000 reactor", plur: "Westinghouse AP1000 reactors", one: "reactor", many: "reactors", mw: 1117, shape: "reactor",
    probe: "Nuclear is the 2030s answer to a 2020s problem." }
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
  return { c, p, tps, chips, racks, itMW, facMW, units, build, jTok, whAnswer: jTok * 1000 / 3600, abilene: facMW / ABILENE_MW };
}

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
const count = v => v >= 1e6 ? words(v) : v >= 10 ? Math.round(v).toLocaleString("en-US") : v >= 1 ? sig(v, 2) : sig(v, 2);
const power = mw => mw >= 1000 ? `${sig(mw / 1000)} GW` : mw >= 1 ? `${sig(mw)} MW` : mw >= .001 ? `${sig(mw * 1000)} kW` : `${sig(mw * 1e6)} W`;
const joules = j => j >= 1 ? `${sig(j)} J` : `${sig(j * 1000)} mJ`;
const wh = w => w >= 1 ? `${sig(w)} Wh` : `${sig(w * 1000)} mWh`;
const pct = v => `${Math.round(v * 100)}%`;
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

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
  try { history.replaceState(null, "", `${location.pathname}?${q}`); } catch (e) {}
}

/* ---------------------------------------------------------------- the panel */
const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
const state = readState();
const panel = $("#panel");

panel.innerHTML = `
  <section class="ctl">
    <div class="ctl-h"><h2>Tokens served a day</h2><output id="oT"></output></div>
    <input type="range" id="rT" min="${T_MIN}" max="${T_MAX}" step="0.01" aria-label="Tokens served a day, on a log scale">
    <div class="scale"><span>1 million</span><span>1 trillion</span><span>100 quadrillion</span></div>
    <div class="presets" role="group" aria-label="Scenarios">${DEMAND.map(d => `<button type="button" data-k="${d.k}"><b>${d.n}</b><small>${d.d}</small></button>`).join("")}</div>
  </section>
  <section class="ctl">
    <div class="ctl-h"><h2>Chip</h2><output id="oC"></output></div>
    <div class="seg" role="group" aria-label="Chip">${CHIPS.map(c => `<button type="button" data-k="${c.k}">${c.n}</button>`).join("")}</div>
  </section>
  <section class="ctl">
    <div class="ctl-h"><h2>Tokens a second, per chip</h2><output id="oThr"></output></div>
    <div class="rail-wrap"><input type="range" id="rThr" min="${THR_MIN}" max="${THR_MAX}" step="0.005" aria-label="Tokens a second each chip serves">
      <div class="ticks" aria-hidden="true">${REFS.map((r, i) => `<i class="${i % 2 ? "lo" : ""}" style="left:${((Math.log10(r.v) - THR_MIN) / (THR_MAX - THR_MIN) * 100).toFixed(2)}%"><span>${r.t}</span></i>`).join("")}</div></div>
    <p class="note" id="nThr"></p>
  </section>
  <section class="ctl two">
    <div><div class="ctl-h"><h2>Average load</h2><output id="oU"></output></div>
      <input type="range" id="rU" min="10" max="100" step="1" aria-label="Average share of capacity in use">
      <p class="note">My assumption. Fleets are built for the peak, not the average.</p></div>
    <div><div class="ctl-h"><h2>Facility overhead (PUE)</h2><output id="oP"></output></div>
      <input type="range" id="rP" min="1.05" max="1.6" step="0.01" aria-label="Power usage effectiveness">
      <p class="note">Google’s fleet averaged 1.09 in 2025. Newer liquid-cooled sites run 1.1 to 1.3.</p></div>
  </section>
  <section class="ctl">
    <div class="ctl-h"><h2>Power it with</h2></div>
    <div class="srcs" role="group" aria-label="Power source">${POWER.map(p => `<button type="button" data-k="${p.k}"><b>${p.n}</b><small>${p.m} · ${power(p.mw)}</small></button>`).join("")}</div>
    <p class="note" id="nSrc"></p>
  </section>
  <section class="bom" aria-labelledby="bomH">
    <h2 id="bomH">The bill of materials</h2>
    <ol id="bom"></ol>
  </section>
  <div class="acts"><button type="button" id="share">Copy a link to this scenario</button><button type="button" id="reset" class="quiet">Reset</button></div>`;

const rT = $("#rT"), rThr = $("#rThr"), rU = $("#rU"), rP = $("#rP");

function syncControls() {
  rT.value = Math.log10(state.t); rThr.value = Math.log10(state.thr); rU.value = Math.round(state.u * 100); rP.value = state.pue;
  $$(".presets button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.k === state.preset)));
  $$(".seg button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.k === state.chip)));
  $$(".srcs button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.k === state.src)));
  [rT, rThr, rU, rP].forEach(r => r.style.setProperty("--f", `${((r.value - r.min) / (r.max - r.min) * 100).toFixed(2)}%`));
}

function render() {
  const r = calc(state), c = r.c, p = r.p;
  $("#oT").textContent = words(state.t);
  $("#oC").textContent = c.sys;
  $("#oThr").textContent = Math.round(state.thr).toLocaleString("en-US");
  const bench = Math.abs(state.thr - c.thr) / c.thr < .01;
  $("#nThr").innerHTML = bench ? esc(c.thrNote) : `You’ve set your own number. <button type="button" class="link" id="bench">Use the ${esc(c.n)} default (${c.thr.toLocaleString("en-US")})</button>`;
  $("#oU").textContent = pct(state.u);
  $("#oP").textContent = state.pue.toFixed(2);
  $("#nSrc").innerHTML = p.link ? `Ties to my thesis <a href="../#${p.link[0]}">${esc(p.link[1])}</a>` : `A thesis I’m still testing: <em>${esc(p.probe)}</em>`;

  // the answer, in the stage
  const many = r.units >= 1;
  $("#aBig").textContent = many ? r.build.toLocaleString("en-US") : (r.units >= .01 ? `${Math.round(r.units * 100)}%` : `${sig(r.units * 100, 2)}%`);
  $("#aWhat").textContent = many ? `${r.build === 1 ? p.sing : p.plur} to build` : `of one ${p.sing}`;
  $("#aSub").textContent = many
    ? `${power(r.facMW)} of load is ${sig(r.units, 3)} ${r.units === 1 ? p.one : p.many} at full output, so you build ${r.build.toLocaleString("en-US")}.`
    : `${power(r.facMW)} of load, running on ${c.n} chips.`;

  // the chain, step by step
  const rows = [
    ["Tokens a day", words(state.t), state.preset ? byK(DEMAND, state.preset).n : "Your number"],
    ["Tokens a second", words(r.tps), "÷ 86,400 seconds"],
    ["Chips", count(r.chips), `÷ (${Math.round(state.thr).toLocaleString("en-US")} a second × ${pct(state.u)} load)`],
    ["Racks", count(r.racks), `÷ ${c.rack} GPUs a rack (${c.rackNote.replace(/ a rack$/, "")})`],
    ["IT power", power(r.itMW), `× ${sig(c.kw, 3)} kW a chip, with its share of the server`],
    ["Facility power", power(r.facMW), `× ${state.pue.toFixed(2)} PUE for cooling and losses`],
    [p.many[0].toUpperCase() + p.many.slice(1), many ? `${sig(r.units, 3)} → build ${r.build.toLocaleString("en-US")}` : `${sig(r.units, 2)} of one`, `÷ ${power(p.mw)} each`],
    ["Per token, at the wall", joules(r.jTok), `A 1,000-token answer: ${wh(r.whAnswer)}. Google measured 0.24 Wh for its median prompt.`],
    ["Against Abilene", r.abilene >= .01 ? `${sig(r.abilene, 2)}×` : "under 1%", "Stargate Abilene is planned at 1.2 GW"]
  ];
  $("#bom").innerHTML = rows.map(([k, v, n], i) => `<li style="--i:${i}"><span class="k">${esc(k)}</span><b>${esc(v)}</b><span class="n">${esc(n)}</span></li>`).join("");

  syncControls();
  writeState(state);
  world && world.update(r, state);
}

const set = patch => { Object.assign(state, patch); render(); };
rT.addEventListener("input", () => set({ t: 10 ** +rT.value, preset: null }));
rThr.addEventListener("input", () => set({ thr: 10 ** +rThr.value }));
rU.addEventListener("input", () => set({ u: +rU.value / 100 }));
rP.addEventListener("input", () => set({ pue: +rP.value }));
$$(".presets button").forEach(b => b.addEventListener("click", () => set({ t: byK(DEMAND, b.dataset.k).v, preset: b.dataset.k })));
$$(".seg button").forEach(b => b.addEventListener("click", () => set({ chip: b.dataset.k, thr: byK(CHIPS, b.dataset.k).thr })));
$$(".srcs button").forEach(b => b.addEventListener("click", () => set({ src: b.dataset.k })));
panel.addEventListener("click", e => { if (e.target.closest("#bench")) set({ thr: byK(CHIPS, state.chip).thr }); });
$("#reset").addEventListener("click", () => set({ ...DEFAULT }));
$("#share").addEventListener("click", async () => {
  const b = $("#share");
  try { await navigator.clipboard.writeText(location.href); b.textContent = "Link copied"; }
  catch (e) { b.textContent = "Copy the address bar to share"; }
  setTimeout(() => { b.textContent = "Copy a link to this scenario"; }, 2200);
});

/* ---------------------------------------------------------------- the world */
const calm = matchMedia("(prefers-reduced-motion: reduce)").matches;
const small = matchMedia("(max-width: 860px)").matches;
let world = null;
try { world = makeWorld(); } catch (e) { document.body.classList.add("no-gl"); }
render();

function makeWorld() {
  const stage = $("#stage"), canvas = $("#cv");
  const renderer = new WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: "high-performance" });
  renderer.setPixelRatio(Math.min(devicePixelRatio, small ? 2 : 2));
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.shadowMap.enabled = !small;
  renderer.shadowMap.type = PCFShadowMap;

  const INK = 0x07101d;
  const scene = new Scene();
  scene.fog = new Fog(INK, 40, 160);
  const camera = new PerspectiveCamera(38, 1, .1, 2000);
  camera.position.set(34, 26, 40);
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true; controls.dampingFactor = .08;
  controls.autoRotate = !calm; controls.autoRotateSpeed = .45;
  controls.maxPolarAngle = Math.PI * .47; controls.minPolarAngle = Math.PI * .12;
  controls.enablePan = false;
  controls.addEventListener("start", () => { controls.autoRotate = false; stage.classList.add("touched"); });

  scene.add(new AmbientLight(0xbcd2ff, .22));
  scene.add(new HemisphereLight(0x9cc0ff, INK, .55));
  const key = new DirectionalLight(0xe4eeff, 1.55);
  key.position.set(40, 60, 30); key.castShadow = !small;
  key.shadow.mapSize.set(2048, 2048);
  key.shadow.bias = -.0008;
  scene.add(key, key.target);
  const rim = new DirectionalLight(0x3fd6c8, .55); rim.position.set(-50, 30, -40); scene.add(rim);

  // ground: the site's grid, fading into the night
  const grid = new GridHelper(600, 150, 0x22405c, 0x15283d);
  grid.material.transparent = true; grid.material.opacity = .55; scene.add(grid);
  const ground = new Mesh(new PlaneGeometry(600, 600), new MeshStandardMaterial({ color: 0x08121f, roughness: 1 }));
  ground.rotation.x = -Math.PI / 2; ground.position.y = -.02; ground.receiveShadow = true; scene.add(ground);

  // shared materials
  const M = {
    slab: new MeshStandardMaterial({ color: 0x0f2033, roughness: .85, metalness: .1 }),
    rack: new MeshStandardMaterial({ color: 0x15293f, roughness: .55, metalness: .45 }),
    led: new MeshBasicMaterial({ color: 0x3fd6c8 }),
    steel: new MeshStandardMaterial({ color: 0x8fa3b7, roughness: .38, metalness: .7 }),
    dark: new MeshStandardMaterial({ color: 0x2b3f55, roughness: .6, metalness: .5 }),
    gen: new MeshStandardMaterial({ color: 0x22405c, roughness: .5, metalness: .4 }),
    cell: new MeshStandardMaterial({ color: 0xd4e3f0, roughness: .45, metalness: .15 }),
    concrete: new MeshStandardMaterial({ color: 0xb9c7d4, roughness: .8, metalness: .05 }),
    glow: new MeshBasicMaterial({ color: 0xf4977a, transparent: true, opacity: .85, blending: AdditiveBlending, depthWrite: false })
  };
  const slabTex = (() => {
    const c = document.createElement("canvas"); c.width = c.height = 128;
    const g = c.getContext("2d"); g.fillStyle = "#0f2033"; g.fillRect(0, 0, 128, 128);
    g.strokeStyle = "rgba(63,214,200,.22)"; g.lineWidth = 2; g.strokeRect(1, 1, 126, 126);
    const t = new CanvasTexture(c); t.wrapS = t.wrapT = RepeatWrapping; t.colorSpace = SRGBColorSpace; return t;
  })();
  const dot = (() => {
    const c = document.createElement("canvas"); c.width = c.height = 64;
    const g = c.getContext("2d"), gr = g.createRadialGradient(32, 32, 0, 32, 32, 32);
    gr.addColorStop(0, "rgba(255,255,255,1)"); gr.addColorStop(.35, "rgba(190,250,244,.85)"); gr.addColorStop(1, "rgba(63,214,200,0)");
    g.fillStyle = gr; g.fillRect(0, 0, 64, 64); return new CanvasTexture(c);
  })();

  // geometry for every kind of unit
  const G = {
    rack: new BoxGeometry(.7, 2, 1.1).translate(0, 1, 0),
    led: new BoxGeometry(.5, .06, .02).translate(0, 0, 0),
    tBody: new CylinderGeometry(1, 1.15, 4.4, 20).rotateZ(Math.PI / 2).translate(0, 1.25, 0),
    tGen: new BoxGeometry(1.9, 2, 2).translate(3.3, 1, 0),
    tStack: new CylinderGeometry(.55, .65, 5.6, 16).translate(-2.9, 2.8, 0),
    aBox: new BoxGeometry(3.6, 2.2, 1.8).translate(0, 1.1, 0),
    aStack: new CylinderGeometry(.34, .38, 3.6, 12).translate(-1.3, 2.9, 0),
    cBox: new BoxGeometry(1.25, 1.05, .7).translate(0, .525, 0),
    cStripe: new BoxGeometry(1.26, .08, .71).translate(0, .82, 0),
    rCont: new CylinderGeometry(2.3, 2.3, 3.6, 28).translate(0, 1.8, 0),
    rDome: new SphereGeometry(2.3, 28, 14, 0, Math.PI * 2, 0, Math.PI / 2).translate(0, 3.6, 0),
    rTower: new LatheGeometry([[3.2, 0], [2.6, 2.5], [2.05, 5], [2.0, 6.2], [2.2, 7.6]].map(([x, y]) => new Vector2(x, y)), 32),
    glow: new SphereGeometry(.42, 12, 8),
    pulse: new SphereGeometry(.2, 10, 8)
  };
  const SHAPES = {
    turbine: { foot: [9, 4.4], cap: small ? 60 : 120, parts: [["tBody", "steel"], ["tGen", "gen"], ["tStack", "dark"]], hot: [[-2.9, 5.7, 0]], top: 5.6 },
    aero: { foot: [5.2, 3], cap: small ? 120 : 240, parts: [["aBox", "steel"], ["aStack", "dark"]], hot: [[-1.3, 4.75, 0]], top: 4.7 },
    cell: { foot: [1.65, 1.15], cap: small ? 400 : 900, parts: [["cBox", "cell"], ["cStripe", "led"]], hot: [], top: 1.1 },
    reactor: { foot: [9, 15], cap: small ? 24 : 48, parts: [["rCont", "concrete"], ["rDome", "concrete"], ["rTower", "concrete", [0, 0, 6.6]]], hot: [], top: 7.6, steam: [0, 7.8, 6.6] }
  };

  const hallG = new Group(), yardG = new Group(), flowG = new Group();
  scene.add(hallG, yardG, flowG);
  const dummy = new Object3D();
  const disposeGroup = g => { g.children.slice().forEach(o => { g.remove(o); if (o.geometry && !Object.values(G).includes(o.geometry)) o.geometry.dispose(); }); };

  // pick a block size (1, 10, 100… units a block) that keeps the instance count drawable
  const blockOf = (n, cap) => { let k = 1; while (n / k > cap) k *= 10; return { k, n: Math.max(1, Math.round(n / k)) }; };
  const gridOf = (n, aspect) => { const cols = Math.max(1, Math.ceil(Math.sqrt(n * aspect))); return { cols, rows: Math.ceil(n / cols) }; };

  let grow = 1, growAt = 0, hall = null, yard = null, last = {};

  function buildHall(racks) {
    disposeGroup(hallG);
    const b = blockOf(racks, small ? 500 : 900);
    const { cols, rows } = gridOf(b.n, 1.5);
    const px = 1.05, pz = 1.75;
    const w = cols * px + 2.4, d = rows * pz + 2.4;
    const slabMat = M.slab.clone(); slabMat.map = slabTex.clone(); slabMat.map.needsUpdate = true; slabMat.map.repeat.set(w / 1.6, d / 1.6);
    const slab = new Mesh(new BoxGeometry(w, .36, d).translate(0, .18, 0), slabMat);
    slab.receiveShadow = true; hallG.add(slab);
    const edge = new LineSegments(new EdgesGeometry(slab.geometry), new LineBasicMaterial({ color: 0x3fd6c8, transparent: true, opacity: .35 }));
    hallG.add(edge);
    const body = new InstancedMesh(G.rack, M.rack, b.n), led = new InstancedMesh(G.led, M.led, b.n * 3);
    body.castShadow = true; body.receiveShadow = true;
    body.instanceMatrix.setUsage(DynamicDrawUsage); led.instanceMatrix.setUsage(DynamicDrawUsage);
    const spots = [];
    for (let i = 0; i < b.n; i++) {
      const cx = i % cols, rz = Math.floor(i / cols);
      spots.push([(cx - (cols - 1) / 2) * px, .36, (rz - (rows - 1) / 2) * pz]);
    }
    hallG.add(body, led);
    hall = { b, w, d, body, led, spots, top: 2.4 };
    return hall;
  }

  function buildYard(units, shape) {
    disposeGroup(yardG);
    const S = SHAPES[shape];
    const b = blockOf(units, S.cap);
    const { cols, rows } = gridOf(b.n, S.foot[1] / S.foot[0] * 1.4);
    const w = cols * S.foot[0], d = rows * S.foot[1];
    const pad = new Mesh(new BoxGeometry(w + 2, .12, d + 2).translate(0, .06, 0), new MeshStandardMaterial({ color: 0x0b1828, roughness: .95 }));
    pad.receiveShadow = true; yardG.add(pad);
    const meshes = S.parts.map(([g, m, off]) => { const im = new InstancedMesh(G[g], M[m], b.n); im.castShadow = true; im.receiveShadow = true; im.instanceMatrix.setUsage(DynamicDrawUsage); im.userData.off = off || [0, 0, 0]; yardG.add(im); return im; });
    const hot = S.hot.length ? new InstancedMesh(G.glow, M.glow, b.n * S.hot.length) : null;
    if (hot) yardG.add(hot);
    const spots = [];
    for (let i = 0; i < b.n; i++) {
      const cx = i % cols, rz = Math.floor(i / cols);
      spots.push([(cx - (cols - 1) / 2) * S.foot[0], .12, (rz - (rows - 1) / 2) * S.foot[1] - (shape === "reactor" ? 3.3 : 0)]);
    }
    let steam = null;
    if (S.steam) {
      const n = Math.min(b.n, 24) * 14, pos = new Float32Array(n * 3);
      const geo = new BufferGeometry(); geo.setAttribute("position", new BufferAttribute(pos, 3));
      steam = new Points(geo, new PointsMaterial({ size: 2.6, map: dot, color: 0xdfe9f3, transparent: true, opacity: .32, depthWrite: false, sizeAttenuation: true }));
      steam.userData.n = n; yardG.add(steam);
    }
    yard = { b, w: w + 2, d: d + 2, meshes, hot, spots, S, shape, steam, top: S.top };
    return yard;
  }

  // token rain over the hall, and power pulses from the yard to the hall
  const RAIN = small ? 900 : 1800;
  const rainPos = new Float32Array(RAIN * 3), rainV = new Float32Array(RAIN);
  const rainGeo = new BufferGeometry(); rainGeo.setAttribute("position", new BufferAttribute(rainPos, 3));
  const rain = new Points(rainGeo, new PointsMaterial({ size: .32, map: dot, color: 0x8de8df, transparent: true, depthWrite: false, blending: AdditiveBlending, sizeAttenuation: true }));
  scene.add(rain);
  let curves = [], pulses = null, cables = [];

  function buildFlows() {
    disposeGroup(flowG); cables.forEach(c => c.geometry.dispose()); cables = []; curves = [];
    const n = Math.min(6, yard.spots.length);
    const pick = Array.from({ length: n }, (_, i) => yard.spots[Math.floor(i * yard.spots.length / n)]);
    pick.forEach((s, i) => {
      const a = new Vector3(yard.pos.x + s[0] * yard.sc, yard.top * yard.sc * .55, s[2] * yard.sc + yard.pos.z);
      const zEnd = (i / Math.max(1, n - 1) - .5) * hall.d * .7;
      const b = new Vector3(-hall.w / 2 + .4, 1.4, zEnd);
      const mid = a.clone().lerp(b, .5); mid.y = Math.max(a.y, b.y) + Math.max(4, a.distanceTo(b) * .18);
      const curve = new CatmullRomCurve3([a, mid, b]);
      curves.push(curve);
      const line = new Line(new BufferGeometry().setFromPoints(curve.getPoints(48)), new LineBasicMaterial({ color: 0xf4977a, transparent: true, opacity: .28 }));
      flowG.add(line); cables.push(line);
    });
    pulses = new InstancedMesh(G.pulse, M.glow, curves.length * 8);
    pulses.instanceMatrix.setUsage(DynamicDrawUsage);
    flowG.add(pulses);
  }

  function seedRain() {
    for (let i = 0; i < RAIN; i++) {
      rainPos[i * 3] = (Math.random() - .5) * hall.w * .92;
      rainPos[i * 3 + 1] = hall.top + Math.random() * rainH();
      rainPos[i * 3 + 2] = (Math.random() - .5) * hall.d * .92;
      rainV[i] = .6 + Math.random() * .8;
    }
    rainGeo.attributes.position.needsUpdate = true;
  }
  const rainH = () => Math.max(10, Math.max(hall.w, hall.d) * .55);

  // labels that ride on the scene
  const labels = $("#labels");
  labels.innerHTML = `<span class="lb" id="lbT"></span><span class="lb" id="lbH"></span><span class="lb" id="lbY"></span>`;
  const L = { T: $("#lbT"), H: $("#lbH"), Y: $("#lbY") };
  const anchors = { T: new Vector3(), H: new Vector3(), Y: new Vector3() };

  // fit the camera to whatever was built
  let fit = null;
  function frame() {
    const minX = yard.pos.x - yard.w * yard.sc / 2, maxX = hall.w / 2;
    const cx = (minX + maxX) / 2, span = Math.max(maxX - minX, hall.d, yard.d * yard.sc, yard.top * yard.sc * 1.5);
    const target = new Vector3(cx, Math.min(6, span * .06), 0);
    const dist = span * (small ? 1.7 : 1.42) + 16;
    fit = { from: controls.target.clone(), to: target, d0: camera.position.distanceTo(controls.target), d1: dist, t: 0 };
    scene.fog.near = dist * .9; scene.fog.far = dist * 3.2;
    controls.maxDistance = dist * 3; controls.minDistance = Math.min(8, dist * .2);
    const sh = key.shadow.camera, ext = span * .75 + 10;
    sh.left = -ext; sh.right = ext; sh.top = ext; sh.bottom = -ext; sh.near = 1; sh.far = 400; sh.updateProjectionMatrix();
    key.position.set(cx + 40, 70, 34); key.target.position.set(cx, 0, 0);
  }

  function update(r, s) {
    requestAnimationFrame(measureText);
    const racksKey = blockOf(r.racks, small ? 500 : 900), unitsKey = blockOf(r.units, SHAPES[r.p.shape].cap);
    const rebuildHall = !hall || racksKey.k !== hall.b.k || racksKey.n !== hall.b.n;
    const rebuildYard = !yard || yard.shape !== r.p.shape || unitsKey.k !== yard.b.k || unitsKey.n !== yard.b.n;
    if (rebuildHall) buildHall(r.racks);
    if (rebuildYard || rebuildHall) {
      if (rebuildYard) buildYard(r.units, r.p.shape);
      // one block of racks stands for hall.b.k racks; scale the plants by the same factor so the two stay comparable
      yard.sc = Math.min(1.6, Math.max(.3, Math.sqrt(10 / hall.b.k)));
      yardG.scale.setScalar(yard.sc);
      const gap = Math.max(5, hall.w * .14);
      yard.pos = new Vector3(-(hall.w / 2 + gap + yard.w * yard.sc / 2), 0, 0);
      yardG.position.copy(yard.pos);
      buildFlows(); seedRain(); frame();
      grow = 0; growAt = performance.now();
    }
    // the LEDs show the chip family; the rain shows the demand
    M.led.color.set(s.chip === "h100" ? 0x6aa8ff : s.chip === "gb300" ? 0x8de8df : 0x3fd6c8);
    flow.rate = Math.min(1.6, .25 + Math.max(0, Math.log10(r.tps)) / 9);
    flow.power = Math.min(1.8, .3 + Math.max(0, Math.log10(r.facMW * 1000 + 1)) / 5);
    const many = r.units >= 1;
    L.T.innerHTML = `<b>${words(r.tps)}</b> tokens a second`;
    L.H.innerHTML = `<b>${count(r.racks)}</b> ${r.racks === 1 ? "rack" : "racks"} · ${count(r.chips)} chips${hall.b.k > 1 ? `<small>each block is ${hall.b.k.toLocaleString("en-US")} racks</small>` : r.racks < 1 ? "<small>less than one rack</small>" : ""}`;
    L.Y.innerHTML = `<b>${many ? r.build.toLocaleString("en-US") : sig(r.units, 2)}</b> ${many ? (r.build === 1 ? r.p.one : r.p.many) : "of one " + r.p.one} · ${power(r.facMW)}${yard.b.k > 1 ? `<small>each unit drawn is ${yard.b.k.toLocaleString("en-US")}</small>` : ""}`;
    last = { r, s };
  }
  const flow = { rate: 1, power: 1 };

  function place(t) {
    // grow the hall and the yard in from the ground after every rebuild
    const g = Math.min(1, (t - growAt) / 900);
    if (grow < 1) grow = g;
    const ease = x => 1 - Math.pow(1 - Math.min(1, Math.max(0, x)), 3);
    if (hall) {
      const n = hall.b.n;
      for (let i = 0; i < n; i++) {
        const [x, y, z] = hall.spots[i], e = ease(grow * 1.6 - (i / n) * .6);
        dummy.position.set(x, y, z); dummy.scale.set(1, Math.max(.001, e), 1); dummy.rotation.set(0, 0, 0); dummy.updateMatrix();
        hall.body.setMatrixAt(i, dummy.matrix);
        for (let k = 0; k < 3; k++) {
          dummy.position.set(x, y + (.5 + k * .55) * e, z + .56); dummy.scale.set(1, 1, e > .02 ? 1 : .001); dummy.updateMatrix();
          hall.led.setMatrixAt(i * 3 + k, dummy.matrix);
        }
      }
      hall.body.instanceMatrix.needsUpdate = true; hall.led.instanceMatrix.needsUpdate = true;
    }
    if (yard) {
      const n = yard.b.n;
      yard.meshes.forEach(im => {
        const o = im.userData.off;
        for (let i = 0; i < n; i++) {
          const [x, y, z] = yard.spots[i], e = ease(grow * 1.6 - (i / n) * .6);
          dummy.position.set(x + o[0], y + o[1], z + o[2]); dummy.scale.set(1, Math.max(.001, e), 1); dummy.updateMatrix();
          im.setMatrixAt(i, dummy.matrix);
        }
        im.instanceMatrix.needsUpdate = true;
      });
      if (yard.hot) {
        let j = 0;
        for (let i = 0; i < n; i++) for (const h of yard.S.hot) {
          const [x, y, z] = yard.spots[i], e = ease(grow * 1.6 - (i / n) * .6);
          const flick = calm ? 1 : .8 + .35 * Math.sin(t / 140 + i * 1.7);
          dummy.position.set(x + h[0], y + h[1] * e, z + h[2]); dummy.scale.setScalar(Math.max(.001, e * flick)); dummy.updateMatrix();
          yard.hot.setMatrixAt(j++, dummy.matrix);
        }
        yard.hot.instanceMatrix.needsUpdate = true;
      }
    }
  }

  // anchor the labels
  const v = new Vector3();
  function project(id, p) {
    v.copy(p).project(camera);
    const el = L[id], ok = v.z < 1 && Math.abs(v.x) < 1.15 && Math.abs(v.y) < 1.15;
    const x = (v.x + 1) / 2 * W, y = (1 - v.y) / 2 * H, w = el.offsetWidth / 2, h = el.offsetHeight;
    // a label that drifts under the headline steps back so the answer stays readable
    const under = textBoxes.some(b => x + w > b.l && x - w < b.r && y > b.t && y - h < b.b);
    el.style.opacity = ok ? (under ? ".1" : "1") : "0";
    el.style.transform = `translate(-50%,-100%) translate(${x.toFixed(1)}px,${y.toFixed(1)}px)`;
  }

  // where the headline's words actually sit, in stage pixels
  let textBoxes = [];
  const measureText = () => {
    const sr = stage.getBoundingClientRect(), rg = document.createRange();
    textBoxes = [...head.querySelectorAll("h1, #aBig, #aWhat, #aSub")].map(n => {
      rg.selectNodeContents(n); const r = rg.getBoundingClientRect();
      return { l: r.left - sr.left - 6, r: r.right - sr.left + 6, t: r.top - sr.top - 4, b: r.bottom - sr.top + 4 };
    }).filter(b => b.r > b.l);
  };

  let W = 1, H = 1;
  const head = $(".head", stage);
  // the headline sits over the top left (top, on a phone), so slide the picture's center away from it
  const size = () => {
    W = stage.clientWidth; H = stage.clientHeight;
    renderer.setSize(W, H, false); camera.aspect = W / H;
    const hr = head.getBoundingClientRect(), phone = matchMedia("(max-width: 860px)").matches;
    const ox = phone ? 0 : Math.min(W * .12, hr.width * .26), oy = phone ? Math.min(H * .26, hr.height * .6) : H * .06;
    camera.setViewOffset(W, H, -ox, -oy, W, H);
    camera.updateProjectionMatrix();
    measureText();
  };
  const ro = new ResizeObserver(size); ro.observe(stage); ro.observe(head); size();

  let visible = true, prev = performance.now();
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; }).observe(stage);
  function tick(t) {
    requestAnimationFrame(tick);
    if (!visible || document.hidden) { prev = t; return; }
    const dt = Math.min(.05, (t - prev) / 1000); prev = t;
    if (fit) {
      fit.t = Math.min(1, fit.t + dt / 1.1);
      const e = 1 - Math.pow(1 - fit.t, 3);
      controls.target.lerpVectors(fit.from, fit.to, e);
      const dir = camera.position.clone().sub(controls.target).normalize();
      camera.position.copy(controls.target).addScaledVector(dir, fit.d0 + (fit.d1 - fit.d0) * e);
      if (fit.t >= 1) fit = null;
    }
    place(t);
    if (hall) {
      const top = hall.top + rainH(), fall = calm ? 0 : dt * (4 + 14 * flow.rate);
      for (let i = 0; i < RAIN; i++) {
        let y = rainPos[i * 3 + 1] - fall * rainV[i];
        if (y < hall.top) { y = top - Math.random() * 2; rainPos[i * 3] = (Math.random() - .5) * hall.w * .92; rainPos[i * 3 + 2] = (Math.random() - .5) * hall.d * .92; }
        rainPos[i * 3 + 1] = y;
      }
      rainGeo.attributes.position.needsUpdate = true;
      rain.material.opacity = .35 + .55 * Math.min(1, flow.rate);
      anchors.T.set(0, hall.top + rainH() * .92, 0); anchors.H.set(0, hall.top + .4, hall.d / 2);
      project("T", anchors.T); project("H", anchors.H);
    }
    if (yard && yard.steam && !calm) {
      const pos = yard.steam.geometry.attributes.position, n = yard.steam.userData.n, towers = Math.min(yard.b.n, 24);
      for (let i = 0; i < n; i++) {
        const tw = i % towers, s = yard.spots[tw], ph = ((t / 2600) + i / n * 7) % 1;
        pos.array[i * 3] = s[0] + yard.S.steam[0] + Math.sin(i * 12.9) * 1.1 * ph;
        pos.array[i * 3 + 1] = s[1] + yard.S.steam[1] + ph * 6;
        pos.array[i * 3 + 2] = s[2] + yard.S.steam[2] + Math.cos(i * 7.3) * 1.1 * ph;
      }
      pos.needsUpdate = true;
    }
    if (yard) { anchors.Y.set(yard.pos.x, (yard.top + 1.6) * yard.sc, yard.pos.z); project("Y", anchors.Y); }
    if (pulses && curves.length) {
      let j = 0;
      for (let c = 0; c < curves.length; c++) for (let k = 0; k < 8; k++) {
        const u = calm ? k / 8 : ((t / 1000) * .22 * flow.power + k / 8 + c * .13) % 1;
        curves[c].getPointAt(u, dummy.position); dummy.scale.setScalar(.8 + .5 * Math.sin(u * Math.PI)); dummy.updateMatrix();
        pulses.setMatrixAt(j++, dummy.matrix);
      }
      pulses.instanceMatrix.needsUpdate = true;
    }
    controls.update();
    renderer.render(scene, camera);
  }
  requestAnimationFrame(tick);
  return { update };
}
