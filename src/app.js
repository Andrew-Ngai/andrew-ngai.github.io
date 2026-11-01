(() => {
"use strict";

const CONFIG = {
  name: "Andrew Ngai",
  email: "",
  linkedin: "https://www.linkedin.com/in/andrewrngai/",
  instagram: "https://www.instagram.com/andrew.ngai_/",
  github: "https://github.com/Andrew-Ngai",
  echotempoSite: "https://echotempo.github.io/",
  appStore: "https://apps.apple.com/app/id6816788315"
};

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
// An OS "reduce motion" setting (common on managed work laptops) keeps gentle loops but drops
// parallax, scroll-linked motion and the load sweep. The footer button pauses everything.
const calm = matchMedia("(prefers-reduced-motion: reduce)").matches;
// The page's scale: CSS px per design px (1 unless --u-max is raised; see the top of style.css).
// Fixed sizes in this file are design px, so multiply them by zoom() before comparing with measured ones.
const zoom = () => parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--u")) || 1;
let motionPaused = false;
try { motionPaused = localStorage.getItem("motion") === "paused"; } catch (e) {}

/* ---------------------------------------------------------------- sources */
const SRC = {
  nbMo: "https://datacenterdynamics.com/en/news/nebius-breaks-ground-on-400-acre-data-center-campus-in-independence-missouri/",
  awsPrice: "https://aws.amazon.com/ec2/pricing/on-demand/",
  nbMsft: "https://www.datacenterdynamics.com/en/news/microsoft-to-use-nebius-gpu-data-centers-in-deal-worth-174bn-over-five-years/",
  nbMeta: "https://www.investing.com/analysis/nebius-27-billion-meta-deal-rewrites-its-revenue-outlook-200676725",
  nbDcd: "https://www.datacenterdynamics.com/en/analysis/becoming-nebius/",
  nbQ2: "https://finance.yahoo.com/technology/ai/articles/nebius-group-nv-nbis-q2-010716755.html",
  nbConc: "https://www.fool.com/investing/2026/10/05/nebius-has-usd40-billion-of-customer-commitments-most-of-it-comes-from-2-customers/",
  nbPrice: "https://www.fool.com/investing/2026/09/27/nebius-is-raising-the-price-of-its-ai-compute-on-oct-1-here-s-what-that-says-about-the-shortage/",
  msftNeo: "https://finance.yahoo.com/news/microsoft-inks-33-billion-deals-191655037.html",
  awsCut: "https://aws.amazon.com/blogs/aws/announcing-up-to-45-price-reduction-for-amazon-ec2-nvidia-gpu-accelerated-instances/",
  h100idx: "https://www.silicondata.com/products/silicon-index/h100",
  rand: "https://www.rand.org/pubs/research_briefs/RBA2849-1.html",
  epochCost: "https://arxiv.org/abs/2405.21015",
  attention: "https://arxiv.org/abs/1706.03762",
  llamaLeak: "https://www.deeplearning.ai/the-batch/how-metas-llama-nlp-model-leaked",
  distill: "https://techcrunch.com/2026/02/23/anthropic-accuses-chinese-ai-labs-of-mining-claude-as-us-debates-ai-chip-exports/",
  distill7: "https://thehackernews.com/2026/09/anthropic-says-seven-china-based-ai.html",
  exportCtl: "https://www.aljazeera.com/economy/2026/7/1/us-lifts-restrictions-on-powerful-ai-models-fable-mythos-anthropic-says",
  cowosOut: "https://www.trendforce.com/news/2026/08/05/news-tsmc-reportedly-expands-outsourcing-of-key-cowos-front-end-step-to-osats-amid-rising-nvidia-asic-demand/",
  tglass: "https://www.tomshardware.com/tech-industry/shortages-of-crucial-chip-packaging-material-threatens-ai-accelerator-supply-chains-nittobos-fukushima-plant-is-tripling-capacity-but-itll-take-years-before-market",
  bwWafer: "https://www.datacenterdynamics.com/en/news/first-us-made-nvidia-blackwell-wafer-manufactured-at-tsmcs-arizona-fab/",
  tsmcAp: "https://www.datacenterdynamics.com/en/news/tsmc-updates-roadmap-with-three-new-process-nodes-breaks-ground-on-arizona-packaging-facility/",
  amkor: "https://azbigmedia.com/business/amkor-increases-investment-in-new-arizona-facility-to-12-billion/",
  amkorNv: "https://finance.yahoo.com/technology/ai/articles/amkor-jumps-1-5-billion-124203060.html",
  nv800: "https://developer.nvidia.com/blog/nvidia-800-v-hvdc-architecture-will-power-the-next-generation-of-ai-factories/",
  bloomOracle: "https://investor.bloomenergy.com/press-releases/press-release-details/2026/Bloom-Energy-and-Oracle-Expand-Strategic-Partnership-to-Deploy-up-to-2-8-GW-to-Accelerate-AI-Infrastructure-Build-Out/default.aspx",
  bloomQ2: "https://investor.bloomenergy.com/press-releases/press-release-details/2026/Bloom-Energy-Reports-Record-Second-Quarter-2026-Financial-Results-and-Raises-Full-Year-2026-Guidance/default.aspx",
  bloomCap: "https://www.utilitydive.com/news/bloom-energy-says-its-on-track-for-2-gw-annual-production-capacity/804291/",
  bloomSheet: "https://www.bloomenergy.com/wp-content/uploads/bloom-energy-server-datasheet-feb-2026.pdf",
  bloomDC: "https://www.bloomenergy.com/news/the-new-rules-of-ai-power-report/",
  saII: "https://situational-awareness.ai/from-agi-to-superintelligence/",
  saIIIa: "https://situational-awareness.ai/racing-to-the-trillion-dollar-cluster/",
  openai: "https://openai.com/index/research-acceleration-view-inside-openai/",
  utility: "https://www.utilitydive.com/news/ge-vernova-gas-turbine-backlog-climbs-to-116-gw/826039/",
  nadella: "https://www.tomshardware.com/tech-industry/artificial-intelligence/microsoft-ceo-says-the-company-doesnt-have-enough-electricity-to-install-all-the-ai-gpus-in-its-inventory-you-may-actually-have-a-bunch-of-chips-sitting-in-inventory-that-i-cant-plug-in",
  epoch: "https://epoch.ai/publications/openai-stargate-where-the-us-sites-stand",
  sherwood: "https://sherwood.news/tech/alphabet-amazon-microsoft-meta-plan-more-than-700-billion-on-capex-this-year/",
  wmedia: "https://w.media/ai-infrastructure-demand-pushes-alphabets-2026-capex-guidance-to-us-205-billion/",
  skh: "https://news.skhynix.com/en/q2-2026-business-results/",
  trend: "https://www.trendforce.com/news/2026/06/15/news-tsmc-cowos-supply-demand-gap-reportedly-seen-narrowing-from-20-to-10-by-end-2026-as-capacity-expands/",
  sg: "https://www.hhs.gov/sites/default/files/surgeon-general-social-connection-advisory.pdf",
  stat: "https://www.statnews.com/2023/05/02/loneliness-surgeon-general/",
  moore: "https://www.cs.utexas.edu/~fussell/courses/cs352h/papers/moore.pdf",
  n2: "https://www.techspot.com/news/110755-tsmc-2nm-n2-process-officially-enters-volume-production.html",
  a16: "https://www.trendforce.com/news/2026/04/23/news-tsmc-unveils-latest-roadmap-a12-a13-set-for-2029-without-high-na-euv-a16-volume-production-delayed-to-2027/",
  dcd: "https://www.datacenterdynamics.com/en/analysis/nvidia-gtc-jensen-huang-data-center-rack-density/",
  msft: "https://news.microsoft.com/source/features/innovation/microfluidics-liquid-cooling-ai-chips/",
  saI: "https://situational-awareness.ai/from-gpt-4-to-agi/",
  dgx: "https://www.pny.com/en-eu/nvidia/dgx/b200",
  anthTpu: "https://www.tomshardware.com/tech-industry/artificial-intelligence/anthropic-signs-deal-with-google-cloud-to-expand-tpu-chip-capacity-ai-company-expects-to-have-over-1gw-of-processing-power-in-2026",
  metaTpu: "https://siliconangle.com/2026/02/26/google-meta-reportedly-strike-new-multibillion-dollar-ai-chip-deal/",
  chipwar: "https://en.wikipedia.org/wiki/Chip_War",
  video: "https://youtu.be/o9g49L-MmeE",
  epochTrend: "https://epoch.ai/blog/training-compute-of-frontier-ai-models-grows-by-4-5x-per-year",
  highna: "https://www.techtimes.com/articles/327533/20260915/tsmc-joins-all-four-chipmakers-asml-high-na-euv-eindhoven-campus-breaks-ground.htm",
  n3: "https://en.wikipedia.org/wiki/3_nm_process",
  f13: "https://13f.info/manager/0002045724-situational-awareness-lp",
  scrivner: "https://www.danielscrivner.com/leopold-aschenbrenner-trades-and-holdings-q2-2026/",
  telecom: "https://en.wikipedia.org/wiki/Telecoms_crash",
  bea: "https://www.anthropic.com/engineering/building-effective-agents",
  harness: "https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents",
  cpulse: "https://openai.com/index/introducing-chatgpt-pulse/",
  ap2: "https://cloud.google.com/blog/products/ai-machine-learning/announcing-agents-to-payments-ap2-protocol",
  axios: "https://www.axios.com/2025/09/29/openai-shopping-chatgpt",
  hypo: "https://www.hypotenuse.ai/blog/chatgpts-instant-checkout-the-next-phase-of-agentic-commerce",
  saasNadella: "https://cloudwars.com/ai/apps-apocalypse-bill-mcdermott-joins-satya-nadella-in-saying-ai-agents-will-crush-applications/",
  saasSell: "https://finance.yahoo.com/news/anthropics-ai-tools-deepen-selloff-054551832.html",
  saasHigh: "https://www.thestar.com.my/tech/tech-news/2026/10/06/us-software-stocks-scale-fresh-2026-highs-as-ai-disruption-worries-fade",
  klarna: "https://techcrunch.com/2025/03/04/klarna-ceo-doubts-that-other-companies-will-replace-salesforce-with-ai",
  claudeforce: "https://www.salesforce.com/news/press-releases/2026/08/26/salesforce-and-anthropic-announce-claudeforce/",
  crmQ2: "https://www.thestar.com.my/tech/tech-news/2026/08/27/salesforce-raises-annual-revenue-forecasts-on-ai-product-momentum",
  crmStake: "https://www.nasdaq.com/articles/salesforce-stock-just-soared-thank-anthropic",
  crmCall: "https://www.fool.com/earnings/call-transcripts/2026/08/31/salesforce-crm-q2-2027-earnings-call-transcript/",
  nowQ2: "https://www.sec.gov/Archives/edgar/data/0001373715/000137371526000072/erq2fy26.htm",
  intercom: "https://www.intercom.com/pricing",
  gartner26: "https://www.gartner.com/en/newsroom/press-releases/2026-04-22-gartner-forecasts-worldwide-it-spending-to-grow-13-point-5-percent-in-2026-totaling-6-point-31-trillion-dollars",
  spxIpo: "https://www.businessday.co.za/world/international-companies/2026-06-11-spacex-raises-75bn-in-blockbuster-ipo/",
  spxCursor: "https://www.sec.gov/Archives/edgar/data/0001181412/000162828026056945/spcx-20260814.htm",
  spxExercise: "https://www.capitalbrief.com/briefing/spacex-exercises-option-to-buy-cursor-for-usd60b-9f3721c7-1276-4772-9451-e3bf32acbab9/",
  cursor4b: "https://dealroom.co/news/134107-cursor-tops-4b-annualized-revenue/",
  spxFin: "https://www.satellitetoday.com/finance/2026/05/20/spacexs-ipo-filing-gives-first-look-into-companys-financials/",
  spxQ2: "https://abc7.com/post/elon-musk-face-tough-questions-during-spacexs-first-earnings-call-public-company/19623672/",
  spxLeaseTc: "https://techcrunch.com/2026/05/28/how-long-is-anthropics-lease-with-spacex-opinions-vary/",
  cursorCo: "https://en.wikipedia.org/wiki/Cursor_(company)",
  spxCap: "https://stockanalysis.com/stocks/spcx/statistics/",
  spxF14: "https://aiaa.org/2026/09/28/starship-reaches-orbit-for-first-time-on-flight-14/",
  spxF14b: "https://www.satellitetoday.com/launch/2026/09/28/spacexs-starship-reaches-orbit-cuts-10-hour-mission-short-after-engine-issue/",
  pgGillette: "https://www.sec.gov/Archives/edgar/data/41499/000095010305000139/jan2705_ex9901.htm",
  rklbQ2: "https://www.sec.gov/Archives/edgar/data/0001819994/000181999426000061/rklb-08102026ex991.htm",
  rklbIrdm: "https://www.manufacturingdive.com/news/rocket-lab-iridium-communications-space-spectrum-network-acquisition/824006/",
  neutron: "https://spaceflightnow.com/2026/08/10/window-for-2026-launch-debut-of-rocket-labs-neutron-rocket-is-narrowing-as-development-continues/",
  burry: "https://www.streetinsider.com/General+News/Michael+Burry+warns+of+%24176+billion+depreciation+understatement+by+tech+giants/25584209.html",
  burry60s: "https://www.benzinga.com/markets/equities/26/10/62129119/michael-burry-just-pulled-a-1960s-market-bubble-into-nvidias-ai-debate-we-have-all-been-here-before",
  depDj: "https://www.itiger.com/news/2589331119",
  rubin: "https://blogs.nvidia.com/blog/vera-rubin/",
  a100Huang: "https://www.thestreet.com/investing/stocks/jensen-huang-just-answered-michael-burrys-nvidia-bear-case-coreweave",
  a100Val: "https://www.benzinga.com/markets/prediction-markets/26/09/61668402/nvidia-a100-chips-michael-burry-depreciation",
  h100Spike: "https://www.silicondata.com/blog/h100-price-spike",
  semiShort: "https://newsletter.semianalysis.com/p/the-great-gpu-shortage-rental-capacity",
  nbDep: "https://www.sec.gov/Archives/edgar/data/0001513845/000110465926094844/nbis-20260812xex99d1.htm",
  dgxH100: "https://docs.nvidia.com/dgx/dgxh100-user-guide/introduction-to-dgxh100.html",
  qGoogle: "https://www.research.google/blog/safeguarding-cryptocurrency-by-disclosing-quantum-vulnerabilities-responsibly/",
  qForbes: "https://www.forbes.com/sites/digital-assets/2026/03/31/google-finds-quantum-computers-could-break-bitcoin-sooner-than-expected/",
  qEchoes: "https://thequantuminsider.com/2025/10/22/google-quantum-ai-shows-13000x-speedup-over-worlds-fastest-supercomputer-in-physics-simulation/",
  qBoard: "https://quantumzeitgeist.com/quantum-logical-qubit-leaderboard/",
  qIbm: "https://www.datacenterdynamics.com/en/news/ibm-updates-quantum-computing-roadmap-to-deliver-starling-system-by-2029/",
  qNvq: "https://quantumcomputingreport.com/nvidias-nvqlink-unites-quantum-ecosystem-for-real-time-error-correction/",
  btcExposed: "https://forklog.com/en/news/glassnode-assesses-bitcoin-with-exposed-public-keys",
  btcPaper: "https://bitcoin.org/bitcoin.pdf",
  kinexys: "https://catenaa.com/markets/global-markets/jpmorgan-blockchain-payments-kinexys-mitsubishi",
  occGenius: "https://occ.gov/news-issuances/bulletins/2026/bulletin-2026-50.html",
  avgoQ3: "https://pulse2.com/broadcom-q3-fiscal-2026-revenue-jumps-86-to-29-6-billion-as-ai-semiconductor-revenue-reaches-16-7-billion/",
  avgoCall: "https://www.nasdaq.com/articles/broadcom-q3-earnings-call-highlights",
  asicState: "https://tomshardware.com/tech-industry/semiconductors/custom-ai-asics-examined-from-broadcom-to-mtia",
  mrvlBench: "https://finance.yahoo.com/news/marvell-mrvl-stock-downgraded-concerns-092046712.html",
  mrvlHigh: "https://www.fool.com/investing/2026/06/18/marvell-stock-just-hit-a-new-high-a-quiet-amazon-d/",
  mrvlQ2: "https://pulse2.com/marvell-data-center-revenue-growth-accelerates-to-46-as-ai-demand-drives-record-2-74-billion-quarter/",
  mrvlLite: "https://www.fool.com/investing/2026/10/29/why-marvell-stock-is-down-today/",
  nbFrame: "https://betteresearch.com/posts/nebius-investment-framework",
  nbTf: "https://nebius.com/newsroom/nebius-launches-nebius-token-factory-to-deliver-production-ai-inference-at-scale",
  amodeiMlg: "https://www.darioamodei.com/essay/machines-of-loving-grace",
  amodeiAdol: "https://fortune.com/2026/01/27/country-of-geniuses-anthropic-dario-amodei-50-million-nobel-prize-winners/",
  gtc26: "https://siliconangle.com/2026/03/16/ai-inflection-point-nvidias-jensen-huang-outlines-vision-agents-ai-factory-forecasts-big-jump-revenue/",
  googTok: "https://blog.google/innovation-and-ai/sundar-pichai-io-2026/",
  civoWrap: "https://www.civo.com/blog/navigate-london-2026-wrap-up",
  gigatokens: "https://finance.yahoo.com/technology/ai/articles/gigatokens-civo-bring-uk-sovereign-160000930.html",
  nvNames: "https://en.wikipedia.org/wiki/List_of_eponyms_of_Nvidia_GPU_microarchitectures",
  tpuWiki: "https://en.wikipedia.org/wiki/Tensor_Processing_Unit",
  tpu7: "https://docs.cloud.google.com/tpu/docs/tpu7x",
  nvRoad: "https://www.tomshardware.com/tech-industry/semiconductors/nvidia-enterprise-roadmap-rubin-rubin-ultra-feynman-and-silicon-photonics",
  gtcBuy: "https://bizon-tech.com/blog/nvidia-gtc-2026-key-announcements",
  gpuGens: "https://www.baseten.co/inference-engineering/book/03-hardware/gpu-architecture-generations/",
  ocWiki: "https://en.wikipedia.org/wiki/OpenClaw",
  ocNow: "https://thegenaimagazine.com/openclaw-where-is-it-now-what-people-built-hype-dead",
  ocRedHat: "https://siliconangle.com/2026/10/27/red-hat-openclaw-agents-kubeconna/",
  saIIId: "https://situational-awareness.ai/the-free-world-must-prevail/",
  aiIndex: "https://thenextweb.com/news/stanford-ai-index-2026-china-us-performance-gap",
  epochShare: "https://officechai.com/ai/the-uss-share-of-new-compute-has-risen-from-60-in-2024-to-78-in-first-half-of-2026/",
  genesis: "https://www.govinfo.gov/content/pkg/FR-2025-11-28/html/2025-21665.htm",
  phpKt: "https://www.koreatimes.co.kr/world/20261022/websites-go-dark-worldwide-as-ai-exposes-critical-security-flaws",
  phpCtv: "https://ctvnews.ca/sci-tech/article/websites-shut-down-globally-after-ai-finds-cybersecurity-flaw-affecting-70-of-the-internet/",
  phpPaubox: "https://www.paubox.com/blog/php-flaws-found-by-ai-force-governments-and-major-sites-offline",
  plcAi: "https://www.helpnetsecurity.com/2026/08/20/usa-ai-attacks-siemens-s7-plcs-critical-infrastructure/",
  altman3: "https://www.forbes.com/sites/anishasircar/2026/10/22/sam-altman-reportedly-laid-out-three-endgames-for-ai-and-one-ends-with-rivals-gpus-melted/",
  altmanSI: "https://www.medianama.com/2026/02/223-superintelligence-within-years-sam-altman-meta-ai-scientist-disagrees/",
  gpuHammer: "https://arxiv.org/abs/2507.08166",
  teeFail: "https://bleepingcomputer.com/news/security/teefail-attack-breaks-confidential-computing-on-intel-amd-nvidia-cpus",
  meltdownPerf: "https://www.infoq.com/news/2018/01/intel-spectre-performance",
  stuxnet: "https://www.rte.ie/brainstorm/2025/0624/1520026-iran-nuclear-power-stuxnet-cyberattack"
};

const BINS = {
  agree:    { label: "Agree",     css: "var(--beat)",   hex: "#6aa8ff" },
  build:    { label: "Build on",  css: "var(--amber)",  hex: "#3fd6c8" },
  push:     { label: "Push back", css: "var(--coral)",  hex: "#f4977a" },
  original: { label: "My read",   css: "var(--violet)", hex: "#d4e3f0" }
};

/* ---------------------------------------------------------------- theses */
const THESES = [
  {
    id: "automate", die: [0, 6], stance: "agree",
    title: "Automate the researcher, not the economy.",
    h2: "Automate the researcher, | not the economy.",
    short: "Automate the researcher",
    hook: "The fastest path to transformative AI runs through one job. The labs are already on it.",
    ref: { label: "Leopold Aschenbrenner, Situational Awareness, ch. II, “From AGI to Superintelligence” (June 2024)", href: SRC.saII },
    signal: `<blockquote class="pull">We don’t need | to automate everything—|just AI research.</blockquote>
      <p>In 2024 that read like science fiction. On September 6, 2026, OpenAI said it had reached its goal of an “automated research intern” on schedule, and that its research org now logs 3.1 agent-workdays for every human workday.</p>`,
    takes: [
      ["The loop is closing at the intern level.", "Agents already run multi-day, well-scoped research tasks. Getting from intern to researcher is a judgment problem, not a labor problem."],
      ["Experiment compute sets the speed limit.", "Aschenbrenner calls limited compute for experiments probably the most important bottleneck, then argues the loop runs anyway. I think it sets the pace. When agent labor is nearly free, every idea gets tried, and the GPU queue becomes the research queue."],
      ["Taste becomes the scarcest input.", "OpenAI says humans still set priorities and judge results. One researcher with great taste, supervising a hundred agents, is the new unit of a frontier lab."]
    ],
    bet: "Back the tooling for automated research: experiment schedulers, evals that agents can’t game, and verification that lets one person trust a hundred agents’ results.",
    wrong: "Agent-workdays grow 10x and the pace of frontier releases doesn’t change. Then labor was never the bottleneck.",
    receipts: [["Situational Awareness, ch. II", SRC.saII], ["OpenAI, Research acceleration (Sept 2026)", SRC.openai]],
    viz: "automate", echo: { pose: "idle", acc: "flask", name: "Researcher" }
  },
  {
    id: "agent", die: [4, 8], stance: "build",
    title: "An agent is a brain with a body.",
    h2: "An agent is | a brain with a body.",
    short: "A brain with a body",
    hook: "The model already knows what you need for the camping trip. The harness decides whether it can go buy it.",
    ref: { label: "Anthropic, “Building effective agents” (December 2024), and its guide to harnesses for long-running agents (November 2025)", href: SRC.bea },
    signal: `<blockquote class="pull">…systems where LLMs | dynamically direct | their own processes | and tool usage.</blockquote>
      <p>That’s Anthropic’s definition of an agent, and it has two halves: a model that decides, and everything around it that lets the decision happen. The model is the brain. The harness, with its tools, memory, permissions and payments, is the body.</p>`,
    takes: [
      ["The brain is ahead of the body.", "Ask any frontier model what to pack for a camping trip and you’ll get a good list. Buying it is the hard part: OpenAI launched in-chat checkout in September 2025 and retired it in March 2026. Even Anthropic’s guide to long-running agents is mostly about the body: progress notes, git and a checklist so each session knows what the last one did."],
      ["The body grows in three steps: ask, anticipate, act.", "Ask works today: say “camping next weekend” and it plans. Anticipate is arriving: ChatGPT Pulse can read a connected calendar overnight and suggest what to do before an upcoming trip. Act is next: it buys, and you approve."],
      ["The confirm button closes the loop.", "Google’s AP2 turns approval into a signed “mandate”: you approve the exact cart, or set rules ahead of time, like buying tickets the moment they go on sale under a price limit. That’s the full circle. The model decides, the harness acts, and you only say yes."]
    ],
    bet: "Back the body. The next wave of agent value is in the harness: permissions and identity for agents, payment mandates, connectors to calendars and stores, and memory that survives between sessions. A better brain makes every body more useful, but only a better body lets it act.",
    wrong: "By 2028, most people still won’t let an agent check out for them, even with a confirm button.",
    receipts: [["Anthropic, Building effective agents (Dec 2024)", SRC.bea], ["Anthropic, Effective harnesses for long-running agents (Nov 2025)", SRC.harness], ["OpenAI, Introducing ChatGPT Pulse (Sept 2025)", SRC.cpulse], ["Google Cloud, Announcing AP2 (Sept 2025)", SRC.ap2], ["Axios on Instant Checkout (Sept 2025)", SRC.axios], ["Hypotenuse on its retirement (2026)", SRC.hypo]],
    viz: "agent", echo: { pose: "run", acc: "camper", name: "Camper" }
  },
  {
    id: "weights", die: [-2, -6], stance: "agree",
    title: "Weights are the new crown jewels.",
    h2: "Weights are | the new crown jewels.",
    short: "Weights are the crown jewels",
    hook: "A frontier model is a billion-dollar training run boiled down to one file. Copy the file and you skip the race.",
    ref: { label: "RAND, “Securing AI Model Weights” (2024)", href: SRC.rand },
    signal: `<blockquote class="pull">Achieving SL5 | is currently not possible.</blockquote>
      <p>RAND ranks the security of model weights in five levels. Level 5 is the one that stops “top-priority operations conducted by the world’s most capable nation-states.” AI labs told RAND that reaching it would take at least five years and the support of the national security community.</p>
      <p>The most valuable file in tech can’t yet be defended against the people most likely to want it.</p>`,
    takes: [
      ["Training turns compute into one file.", "A model is billions of numbers called weights. Training nudges them, over trillions of words, until the model gets better at one job: predicting the next token. The cost of the biggest runs has grown about 2.4× a year, on track to reach about $1 billion per run by 2027. What comes out is a file. A trillion weights at 16 bits each is about 2 TB, small enough for a pocket drive."],
      ["The typing effect is the model working.", "Chatbots stream text because that’s literally how they generate it. The model predicts one token, adds it to everything written so far, and predicts the next one from the whole sequence again. Servers cache the earlier math instead of redoing it, but every word still depends on all the words before it. That loop is all inference is, so whoever holds the weights and enough GPUs holds the capability."],
      ["The race is already working around the vault.", "Meta’s first LLaMA weights leaked online about a week after release in 2023. In February 2026, Anthropic said DeepSeek, Moonshot and MiniMax used more than 24,000 fake accounts and 16 million exchanges to distill Claude’s skills, and by September it had named seven China-based labs. In June, Washington ordered Anthropic to keep foreign nationals, even its own staff, off its two most powerful models, citing national security, then lifted the order weeks later once Anthropic agreed to security conditions."]
    ],
    bet: "Frontier weights get treated like fissile material: a national asset with government-grade protection. Expect SL4 and SL5 data centers built with the national security community, confidential computing down to the GPU, insider-risk programs, and anti-distillation detection as a standard product. Back the companies that make weights hard to steal and capabilities hard to copy.",
    wrong: "By 2028, open or distilled models match the frontier within months without any stolen weights, so locking down one file stops mattering.",
    receipts: [["RAND, Securing AI Model Weights (2024)", SRC.rand], ["Epoch AI on training costs (Cottier et al.)", SRC.epochCost], ["Vaswani et al., Attention Is All You Need (2017)", SRC.attention], ["The Batch on the LLaMA leak (2023)", SRC.llamaLeak], ["TechCrunch on distillation (Feb 2026)", SRC.distill], ["The Hacker News on seven labs (Sept 2026)", SRC.distill7], ["Al Jazeera on the export controls (July 2026)", SRC.exportCtl]],
    viz: "weights", echo: { pose: "idle", acc: "vault", name: "Keeper" }
  },
  {
    id: "ooms", die: [0, -3], stance: "build",
    title: "The computer is now the building.",
    h2: "The computer is | now the building.",
    short: "The computer is the building",
    hook: "Aschenbrenner counts the OOMs to AGI. I count where they physically land, from chip to campus.",
    ref: { label: "Leopold Aschenbrenner, Situational Awareness, ch. I, “From GPT-4 to AGI: Counting the OOMs” (June 2024)", href: SRC.saI },
    signal: `<blockquote class="pull">AGI by 2027 | is strikingly plausible.</blockquote>
      <p>His method is to count orders of magnitude (OOMs) of effective compute. GPT-2 (2019) was a preschooler and GPT-4 (2023) a smart high schooler, about 4.5 to 6 OOMs apart. He expects another jump that size by 2027, and treats AGI as the starting line, not the finish line.</p>`,
    takes: [
      ["Every OOM has to live somewhere.", "Compute comes in five nested levels: a chip (about 1 kW), a server (14.3 kW for eight Blackwell GPUs), a rack (about 120 kW for Nvidia’s GB200 NVL72), a cluster, and a campus (Stargate Abilene is planned for 1.2 GW). Chip to campus is about six OOMs of power."],
      ["The product keeps climbing a level.", "Nvidia’s flagship is now a 72-GPU rack, not a chip. The next unit of competition is the building, where networking and power decide how much of the compute is usable."],
      ["The vertical stacks are opening up.", "Google designs its TPUs from chip to datacenter, and now rents them to outside labs at scale: Anthropic signed for up to a million in 2025, and Meta signed a multibillion-dollar deal in 2026. Nvidia sells the general-purpose version to everyone."]
    ],
    bet: "Back the glue between levels: networking and optical interconnect, power delivery inside the building, and software that keeps a whole campus busy. I expect each new OOM to make the glue a bigger share of the bill.",
    wrong: "A single rack can train a frontier model by 2028, so the frontier stops climbing levels.",
    receipts: [["Situational Awareness, ch. I", SRC.saI], ["DGX B200 specs", SRC.dgx], ["DCD on rack density (Mar 2025)", SRC.dcd], ["Epoch AI on Stargate (Apr 2026)", SRC.epoch], ["Tom’s Hardware on Anthropic’s TPUs (Oct 2025)", SRC.anthTpu], ["SiliconANGLE on Meta’s TPUs (Feb 2026)", SRC.metaTpu]],
    viz: "ooms", echo: { pose: "idle", acc: "rack", name: "Rack" }
  },
  {
    id: "molecules", die: [7, 5], stance: "build",
    title: "Molecules are easy. Machines are hard.",
    h2: "Molecules are easy. Machines are hard.",
    short: "Molecules are easy",
    hook: "Aschenbrenner was right that power binds. He was early about where it binds.",
    ref: { label: "Leopold Aschenbrenner, Situational Awareness, ch. IIIa, “Racing to the Trillion-Dollar Cluster” (June 2024)", href: SRC.saIIIa },
    signal: `<p>Aschenbrenner called power the binding constraint on AI, and showed the fuel exists: roughly 1,200 new wells in the Marcellus and Utica shale could power 100 GW, in under a year of drilling.</p>
      <p>He was right about power. The gas was never the hard part.</p>`,
    takes: [
      ["The fuel isn’t the constraint. The conversion is.", "Gas in the ground does nothing until a turbine, a transformer and a substation turn it into power at the rack."],
      ["The queue is measured in years.", "GE Vernova’s gas turbine backlog reached 116 GW in Q2 2026, and it’s taking reservations for 2031 deliveries. A well takes months. A turbine slot takes about five years."],
      ["Chips are already waiting on power.", "In late 2025, Satya Nadella said Microsoft’s problem had shifted from getting enough chips to having chips it couldn’t plug in."]
    ],
    bet: "The scarcest asset in AI infrastructure is a delivery slot. Back what shortens the path from molecule to rack: modular and behind-the-meter generation, faster grid interconnection, and anything that squeezes more tokens per watt out of sites that already have power.",
    wrong: "Turbine lead times fall under two years by 2028 while AI capex keeps rising.",
    receipts: [["Situational Awareness, ch. IIIa", SRC.saIIIa], ["Utility Dive on GE Vernova (July 2026)", SRC.utility], ["Tom’s Hardware on Nadella (Nov 2025)", SRC.nadella]],
    viz: "molecules", echo: { pose: "idle", acc: "hardhat", name: "Hard hat" }
  },
  {
    id: "bloom", die: [-9, 2], stance: "build",
    title: "The power plant that ships like a server.",
    h2: "The power plant | that ships like a server.",
    short: "Power that ships like servers",
    hook: "Bloom Energy’s fuel cells skip the turbine queue. Nvidia’s move to DC power could let them skip the transformer too.",
    ref: { label: "NVIDIA, “800 VDC Architecture Will Power the Next Generation of AI Factories” (May 2025)", href: SRC.nv800 },
    signal: `<blockquote class="pull">Repeated AC/DC | transformations… | are not energy efficient.</blockquote>
      <p>That’s Nvidia explaining why its racks move to 800-volt DC with Kyber in 2027. Today, power reaches a data center as AC, gets stepped down and converted several times, and arrives at the chips as DC.</p>
      <p>A fuel cell makes DC in the first place. Bloom Energy builds them, and it already wins on speed.</p>`,
    takes: [
      ["Speed is the product.", "Bloom delivered a working fuel cell system to Oracle in 55 days, more than a month early. A gas turbine ordered today ships around 2031. Oracle has since agreed to buy up to 2.8 GW, and Bloom’s quarterly revenue passed $1 billion for the first time in Q2 2026, up 166%."],
      ["It scales like compute, not like a power plant.", "Each Energy Server is a 325 kW block about 9 meters long, so capacity grows as racks arrive, and Bloom planned to double production capacity to 2 GW a year by the end of 2026. No combustion, almost no NOx, no water in normal operation. The catch: it runs mostly on natural gas, and efficiency fades from 65% to 53% as the cells age."],
      ["DC is the sleeper.", "A fuel cell can feed DC straight to the row, skipping transformers and switchgear that are themselves backlogged. Bloom says that cuts non-compute capex for a 1 GW site by $3.6 billion, about 27%. That’s the company’s own math, but the direction is right."]
    ],
    bet: "Onsite power stops being a stopgap and becomes how AI campuses are designed: factory-built, modular and DC from the start. Bloom is the clearest early winner. Back it, and the DC stack around it: 800 V distribution, solid-state transformers, DC protection, and storage that smooths GPU load swings.",
    wrong: "By 2028, turbine and grid lead times fall back under two years, fuel-cell power still costs more per MWh, and Bloom goes back to being backup power.",
    receipts: [["NVIDIA on 800 VDC (May 2025)", SRC.nv800], ["Bloom and Oracle (Apr 2026)", SRC.bloomOracle], ["Bloom Q2 2026 results (July 2026)", SRC.bloomQ2], ["Utility Dive on Bloom’s 2 GW plan (Oct 2025)", SRC.bloomCap], ["Energy Server 6.5 datasheet (Feb 2026)", SRC.bloomSheet], ["Bloom on 800 V DC power (Sept 2026)", SRC.bloomDC], ["Utility Dive on GE Vernova (July 2026)", SRC.utility]],
    viz: "bloom", echo: { pose: "idle", acc: "bloom", name: "Power plant" }
  },
  {
    id: "fleet", die: [-3, 2], stance: "push",
    title: "A fleet, not a cluster.",
    h2: "A fleet, | not a cluster.",
    short: "A fleet, not a cluster",
    hook: "The trillion-dollar scale is on schedule. The single giant cluster isn’t.",
    ref: { label: "Leopold Aschenbrenner, Situational Awareness, ch. IIIa, the trillion-dollar cluster ladder (June 2024)", href: SRC.saIIIa },
    signal: `<p>Aschenbrenner’s ladder puts one cluster on each rung, ten times bigger every two years: about 1 GW around 2026, 10 GW around 2028, and 100 GW around 2030, more than a fifth of US electricity.</p>
      <p>Two years in, the spending is tracking that curve. The shape of what’s getting built isn’t.</p>`,
    takes: [
      ["The money is on pace.", "Amazon, Alphabet, Microsoft and Meta planned more than $700B of 2026 capex, and Alphabet raised its own guide to as much as $205B in July. A trillion a year by 2027 no longer sounds crazy."],
      ["The sites are splitting.", "Stargate is seven US sites aiming for 9+ GW by 2029. OpenAI moved Abilene’s planned expansion to other sites instead of making one campus bigger. Compute goes where power is."],
      ["Inference eats training.", "Every agent-workday is inference. When one lab runs 3.1 agent-workdays per human workday, demand shifts toward serving models, and serving doesn’t need one building."]
    ],
    bet: "The next winners run fleets: software that places training and inference across sites by power price and availability, long-haul links between datacenters, and training methods that tolerate distance.",
    wrong: "Someone builds a single 5 GW+ training campus and its models clearly beat fleet-trained rivals.",
    receipts: [["Situational Awareness, ch. IIIa", SRC.saIIIa], ["Epoch AI on Stargate (Apr 2026)", SRC.epoch], ["Sherwood News on 2026 capex", SRC.sherwood], ["W.Media on Alphabet’s guide", SRC.wmedia], ["OpenAI (Sept 2026)", SRC.openai]],
    viz: "fleet", echo: { pose: "swim", acc: "captain", name: "Captain" }
  },
  {
    id: "gpulife", die: [4, 5], stance: "push",
    title: "Old GPUs don’t die. They move down the menu.",
    h2: "Old GPUs don’t die. They move | down the menu.",
    short: "Old GPUs move down the menu",
    hook: "Burry is right that the frontier moves every year. The cash doesn’t stop when a GPU leaves it.",
    ref: { label: "Michael Burry on X (November 2025): hyperscalers will understate depreciation by about $176 billion over 2026–2028", href: SRC.burry },
    signal: `<blockquote class="pull">Understating depreciation | by extending | useful life of assets | artificially boosts earnings…</blockquote>
      <p>Michael Burry posted that in November 2025. His case: hyperscalers depreciate GPU servers over five to six years when Nvidia’s chips run on a two- to three-year product cycle, so they will understate 2026–2028 depreciation by about $176 billion. In early October, he compared Nvidia’s defense of long GPU lives to the 1960s computer-leasing bubble: “We have all been here before.”</p>
      <p>Nvidia keeps making his point for him. It says Vera Rubin, ramping now, gets 10 times the throughput per megawatt of Blackwell. When power is the bottleneck, that sounds like a death sentence for every older chip.</p>`,
    takes: [
      ["A GPU has more than one life.", "When the next generation lands, the old one doesn’t go to a landfill. It moves down the menu: from training frontier models, to serving them, to cheaper work like fine-tuning and batch jobs, to a second owner. CoreWeave signed an A100 contract that runs through 2029, nine years after the chip launched, and Silicon Data values six-year-old A100s at about $5,000 each, roughly flat since late 2025."],
      ["The market priced old GPUs, and the price went up.", "Silicon Data’s H100 rental index rose from $2.00 an hour in December 2025 to $2.82 today, and SemiAnalysis found some H100 contracts being renewed for four years, through 2028. In late 2025, H100 systems in their third year resold for about 45% of the price of a new one. Burry’s reply is that a chip can rent and still depreciate fast. True, but rent above running cost is what pays the capex back."],
      ["Power is the real clock, and it runs slow.", "Burry’s sharpest point is opportunity cost: a megawatt of old chips could hold ten times the tokens. But Rubin needs liquid-cooled racks that most air-cooled H100 halls can’t take without major upgrades, and this spring, on-demand capacity for every GPU type sold out anyway. So old GPUs keep their power until the building turns over. Electricity for an H100, server and cooling included, runs roughly 15 to 20 cents an hour. The chip rents for $2.82."]
    ],
    bet: "Treat a GPU like an airplane, not a phone. Jets fly flagship routes, then regional ones, then cargo, then go to a second airline, and lessors price every stage. GPUs are getting the same ladder. The neoclouds worth owning sign contracts that pay back the chip before the next generation lands, then run it down the menu. Nebius depreciates its servers over five years (four until this year) and signed Microsoft for five, so the contract covers the whole book life. Back the plumbing of a GPU’s second and third lives: rental and residual-value indexes, compute futures, schedulers that send cheap work to old chips, refurbishing and resale, and lenders who underwrite GPUs on contracted cash instead of book value.",
    wrong: "H100 rental prices fall below $1 an hour by 2028 while the newest chips are still sold out, or neoclouds start selling old GPUs for parts. Then the second life was a shortage, not a market.",
    receipts: [["StreetInsider on Burry’s $176B estimate (Nov 2025)", SRC.burry], ["Benzinga on Burry’s 1960s comparison (Oct 2026)", SRC.burry60s], ["Dow Jones on GPU useful lives and resale (Dec 2025)", SRC.depDj], ["NVIDIA on Vera Rubin (July 2026)", SRC.rubin], ["TheStreet on Huang and CoreWeave’s A100s (Sept 2026)", SRC.a100Huang], ["Benzinga on A100 values (Sept 2026)", SRC.a100Val], ["Silicon Data H100 index (Oct 2026)", SRC.h100idx], ["Silicon Data on the H100 spike (Jan 2026)", SRC.h100Spike], ["SemiAnalysis, The Great GPU Shortage (Apr 2026)", SRC.semiShort], ["Nebius H1 2026 results on useful lives (Aug 2026)", SRC.nbDep], ["DCD on Microsoft and Nebius (Sept 2025)", SRC.nbMsft], ["NVIDIA DGX H100 guide (power)", SRC.dgxH100]],
    viz: "gpulife", echo: { pose: "idle", acc: "waiter", name: "Maître d’" }
  },
  {
    id: "saas", die: [3, -2], stance: "push",
    title: "AI eats the seat, not the software.",
    h2: "AI eats the seat, | not the software.",
    short: "The seat, not the software",
    hook: "The SaaSpocalypse priced software like a screen. It’s really a record and a rulebook, and agents need both.",
    ref: { label: "Satya Nadella on the BG2 podcast (December 2024): business apps are “probably where they’ll all collapse… in the agent era”", href: SRC.saasNadella },
    signal: `<blockquote class="pull">…business applications… | that’s probably where | they’ll all collapse, | right, in the agent era.</blockquote>
      <p>Satya Nadella said that in December 2024. In late January 2026, Anthropic released plug-ins that let its Claude Cowork agent do legal, sales and data work, and a sell-off in software stocks deepened. On February 3, Thomson Reuters fell as much as 18% in its worst day on record, and RELX had its biggest drop since 1988. By April, the S&amp;P 500 software and services index was down more than 26% from late January. Wall Street called it the SaaSpocalypse.</p>
      <p>On October 6, the same index hit its highest level since November 2025.</p>`,
    takes: [
      ["The screen collapses. The record doesn’t.", "Nadella is half right. Agents don’t need menus and forms, so software that was mostly a screen gets squeezed. But an agent still has to read and write the record: who the customer is, what was promised, who can approve a discount. Klarna, the poster child for ripping out Salesforce, moved its data into its own in-house system, and its CEO said, “we did not replace SaaS with an LLM.”"],
      ["Agents need a rulebook, and SaaS holds it.", "A model guesses. A company’s books can’t. On August 26, Salesforce and Anthropic, whose plug-ins had deepened the sell-off, announced Claudeforce: Claude works on Salesforce data, and its actions are routed back through Salesforce “to help ensure business rules are always enforced.” That quarter, Salesforce’s filing showed about $2.7 billion of unrealized gains on its Anthropic stake. The software company owns a piece of the AI lab."],
      ["The meter moves from seats to work.", "The real risk is that one agent does the work of ten people who each had a license. So vendors are charging for the work. Intercom charges from $0.99 per outcome for its Fin agent. Salesforce sells Agentforce partly by the action, and its Agentforce revenue run rate passed $1.5 billion, up more than 240%. Marc Benioff told investors, “Our seats were supposed to decline,” then said its sales, service and Slack products all grew instead. ServiceNow’s AI annual contract value crossed $1 billion, and Gartner expects software spending to grow about 15% this year. A seat is priced against the IT budget. Finished work is priced against the labor budget, which is far bigger."]
    ],
    bet: "Over the next decade, AI and SaaS both win by splitting the job. Labs sell reasoning by the token. Software companies sell the trusted record, the rules and the finished work, priced by the outcome. The losers are thin tools whose whole product was a screen. Back systems of record in regulated industries like healthcare and finance, security for a world full of agents (CrowdStrike, Fortinet and Palo Alto Networks have all more than doubled this year), and the metering and billing that outcome pricing needs.",
    wrong: "By 2028, big companies are moving their core records, like CRM, ERP and HR, off SaaS and onto in-house systems built with AI, the way Klarna did, and revenue from existing customers at the big system-of-record vendors starts shrinking.",
    receipts: [["Cloud Wars on Nadella’s BG2 remarks (May 2025)", SRC.saasNadella], ["Reuters on the Cowork sell-off (Feb 2026)", SRC.saasSell], ["Reuters on software’s 2026 highs (Oct 2026)", SRC.saasHigh], ["TechCrunch on Klarna (Mar 2025)", SRC.klarna], ["Salesforce and Anthropic on Claudeforce (Aug 2026)", SRC.claudeforce], ["Reuters on Salesforce’s Q2 (Aug 2026)", SRC.crmQ2], ["Nasdaq on Salesforce’s Anthropic gains (Aug 2026)", SRC.crmStake], ["Salesforce Q2 FY27 call (Aug 2026)", SRC.crmCall], ["ServiceNow Q2 2026 results (July 2026)", SRC.nowQ2], ["Intercom pricing (Oct 2026)", SRC.intercom], ["Gartner IT spending forecast (Apr 2026)", SRC.gartner26]],
    viz: "saas", echo: { pose: "wave", acc: "seat", name: "Record keeper" }
  },
  {
    id: "neocloud", die: [-6, -7], stance: "build",
    title: "The clouds are renting from the neoclouds.",
    h2: "The clouds are renting | from the neoclouds.",
    short: "Clouds renting from neoclouds",
    hook: "Nebius rents out GPU-hours for less than the big clouds charge, and the big clouds are its biggest customers.",
    ref: { label: "Microsoft’s $17.4 billion, five-year GPU contract with Nebius (September 2025)", href: SRC.nbMsft },
    signal: `<p>In September 2025, Microsoft, which runs the world’s second-largest cloud, agreed to pay Nebius $17.4 billion over five years, up to $19.4 billion, for dedicated GPU capacity at a new data center in Vineland, New Jersey. In March 2026, Meta signed with Nebius for up to $27 billion.</p>
      <p>The hyperscalers aren’t only competing with the neoclouds. They’re buying from them.</p>`,
    takes: [
      ["A neocloud sells one thing: the GPU-hour.", "It builds or leases data center space and power, fills it with Nvidia GPUs and the networking and software to run them, and rents the result by the hour. Nebius, which grew out of Yandex’s international business in 2024, owns its Finnish site, is building its own campus in Missouri, and leases space elsewhere. Revenue grew 454% to $582 million in Q2 2026, and its annualized run rate hit $3 billion by the end of June."],
      ["Cheaper than the big clouds, even in a shortage.", "AWS lists an H100 at about $6.88 an hour on demand. Silicon Data’s index of what neoclouds actually charge sits near $2.82 (October 2026), less than half. Nebius runs at the premium end: $2.95 in early May 2026, then $4.50 from October as demand outran supply, still about a third below AWS. A cloud built only for GPUs carries less overhead into the price."],
      ["The hyperscalers are customers, not just rivals.", "Microsoft and Meta account for about $32 billion of Nebius’s $40 billion-plus in contracted revenue, and Microsoft pays whether or not it uses the capacity. Renting lets a hyperscaler add GPUs faster than it can build them. By October 2025, Microsoft had reportedly signed $33 billion of neocloud deals, using that capacity for its own AI teams while selling its own data centers’ capacity to customers."]
    ],
    bet: "Neoclouds become the wholesale layer of AI compute. Hyperscalers keep the customers and the software; neoclouds build and run GPU capacity fastest and sell it to anyone, hyperscalers included. Back the ones with take-or-pay contracts from investment-grade buyers and their own power pipeline. Nebius is targeting 5 GW of contracted power by the end of 2026.",
    wrong: "When the shortage ends, the hyperscalers stop renewing, pull their workloads back in-house, and GPU-hour prices fall below what the neoclouds’ GPU-backed debt needs.",
    receipts: [["DCD on Microsoft and Nebius (Sept 2025)", SRC.nbMsft], ["Investing.com on the Meta deal (Mar 2026)", SRC.nbMeta], ["DCD, “Becoming Nebius” (May 2025)", SRC.nbDcd], ["DCD on Nebius in Missouri (May 2026)", SRC.nbMo], ["Nebius Q2 2026 call (Aug 2026)", SRC.nbQ2], ["Motley Fool on Nebius pricing (Sept 2026)", SRC.nbPrice], ["AWS EC2 on-demand pricing", SRC.awsPrice], ["AWS on its P5 price cut (June 2025)", SRC.awsCut], ["Silicon Data H100 index (Oct 2026)", SRC.h100idx], ["Motley Fool on customer concentration (Oct 2026)", SRC.nbConc], ["Yahoo Finance on Microsoft’s neocloud deals (Oct 2025)", SRC.msftNeo]],
    viz: "neocloud", echo: { pose: "float", acc: "cloud", name: "Neocloud" }
  },
  {
    id: "builders", die: [-1, 9], stance: "build",
    title: "Back the builders. Survive the bust.",
    h2: "Back the builders. Survive the bust.",
    short: "Back the builders",
    hook: "Aschenbrenner turned his paper into a fund with the simplest possible thesis. A bust can’t break it. Leverage can.",
    ref: { label: "Situational Awareness LP, Leopold Aschenbrenner’s fund, as disclosed in its 13F filings (2025–2026)", href: SRC.f13 },
    signal: `<p class="claim">If AI keeps scaling, | someone has to build it. Sometimes the simple thesis | is the best one.</p>
      <p>That’s the trade Aschenbrenner’s fund makes in public. Its disclosed US positions went from $255 million in its first filing to about $20 billion in August 2026, led by memory makers SanDisk and Micron, with builders like Bloom Energy, CoreWeave and IREN across its 2026 filings. By August, its large semiconductor hedges were gone.</p>`,
    takes: [
      ["You don’t have to pick the winning lab.", "Every lab’s scaling plan buys the same four things: chips, memory, datacenters and power. Owning the builders is a bet on scaling itself."],
      ["Bankruptcies don’t break it.", "The 1990s telecom boom put over $500 billion, mostly debt, into fiber and networks. WorldCom and Global Crossing collapsed and bondholders got back about 20 cents on the dollar. The fiber stayed in the ground and carried the internet’s next decade."],
      ["Leverage does.", "A builder can fail and the thesis survive. What doesn’t survive is whoever borrowed against a straight line. The mirror image is shorting businesses AI could eat, like parts of software. Adobe is the example I watch."]
    ],
    bet: "For venture, I’d run the same thesis with less leverage: back builders that still work in a capacity glut, like software and services that get better as compute gets cheaper, and be wary of businesses that only work while GPU prices and cheap debt both hold.",
    wrong: "AI capex falls two years in a row. Then the builders weren’t mispriced, they were early.",
    note: "Not investment advice.",
    receipts: [["13F filing history", SRC.f13], ["Daniel Scrivner on the Q2 2026 13F", SRC.scrivner], ["Wikipedia, Telecoms crash", SRC.telecom]],
    viz: "builders", echo: { pose: "float", acc: "chute", name: "Parachute" }
  },
  {
    id: "moat", die: [-1, -9], stance: "build",
    title: "The slowdown is the moat.",
    h2: "The slowdown | is the moat.",
    short: "The slowdown is the moat",
    hook: "Moore’s law got harder. That’s why so few companies can still play.",
    ref: { label: "Chris Miller, Chip War: The Fight for the World’s Most Critical Technology (2022)", href: SRC.chipwar },
    signal: `<p>Moore’s law said the transistors on a chip double about every two years. It held for decades, then slowed as features neared the scale of atoms. “3 nm” is now a product name, not a measurement: the gates on TSMC’s N3 sit about 45 nm apart.</p>
      <p>Chris Miller’s <cite>Chip War</cite> tells the other half: every step got harder, and every step left fewer companies able to take it.</p>`,
    takes: [
      ["AI compute never slowed down.", "Epoch AI finds frontier training compute grew 4 to 5× a year from 2010 to 2024, about 0.65 OOMs a year. Moore’s pace is about 0.15. More chips, bigger clusters and 3D stacking paid for the gap."],
      ["Each harder step removes competitors.", "ASML is the only company selling EUV machines for the most advanced chips. Its newest High-NA model costs roughly $380 to $400 million, and the four chipmakers committed to it are TSMC, Samsung, SK hynix and Intel."],
      ["The slope is the moat.", "A slower, harder Moore’s law doesn’t weaken the leaders. It raises the price of keeping up, so the field keeps shrinking while demand for compute keeps compounding."]
    ],
    bet: "Back the next chokepoint before it’s obvious: the steps only one or two companies can do as chips go 3D, like hybrid bonding, advanced packaging and inspecting layers you can’t see from the top.",
    wrong: "A chipmaker reaches leading-edge volume production without ASML’s EUV machines.",
    receipts: [["Chip War (Wikipedia)", SRC.chipwar], ["The video behind this note", SRC.video], ["Epoch AI on training compute (May 2024)", SRC.epochTrend], ["TechTimes on High-NA EUV (Sept 2026)", SRC.highna], ["Wikipedia, 3 nm process", SRC.n3]],
    viz: "moat", echo: { pose: "wave", acc: "moat", name: "Moat keeper" }
  },
  {
    id: "memory", die: [-6, 7], stance: "original",
    title: "The bottleneck moved below the GPU.",
    h2: "The bottleneck moved | below the GPU.",
    short: "Below the GPU",
    hook: "The GPU is the brand. Memory is the moat.",
    ref: { k: "Reference design", label: "My own read of 2026 supplier results: SK hynix’s Q2 2026 report and TrendForce’s CoWoS tracking", href: SRC.skh },
    signal: `<p>Everyone tracks who makes the best GPU. 2026’s numbers say the choke points sit beside and beneath it: the HBM memory stacked next to the die, and the packaging that joins them.</p>
      <p>The GPU is the brand. Memory is the moat.</p>`,
    takes: [
      ["Memory is where the margin went.", "SK hynix posted a 76% operating margin in Q2 2026 and has long-term agreements with about ten major customers. Buyers are paying for guaranteed supply."],
      ["Packaging is loosening first.", "TrendForce expects TSMC’s CoWoS shortfall to narrow from about 20% to about 10% by the end of 2026. That bottleneck has a visible end. Memory’s doesn’t yet."],
      ["Agents are memory-bound.", "Long-running agents hold long contexts, and the KV cache grows with every token they keep in mind. SK hynix itself says agentic AI is widening demand for every kind of memory."]
    ],
    bet: "Back bandwidth per watt between memory and compute: the HBM supply chain (hybrid bonding and TSV tools), CXL memory pooling, co-packaged optics, and inference chips that need less HBM per token.",
    wrong: "HBM prices fall sharply in 2027 while AI capex is still rising.",
    receipts: [["SK hynix Q2 2026 results", SRC.skh], ["TrendForce on CoWoS (June 2026)", SRC.trend]],
    viz: "memory", echo: { pose: "idle", acc: "hbm", name: "HBM stack" }
  },
  {
    id: "backend", die: [0, 3], stance: "build",
    title: "Packaging was the first job we sent offshore. Now it’s the bottleneck.",
    h2: "Packaging was | the first job | we sent offshore. Now it’s | the bottleneck.",
    short: "The back end is the bottleneck",
    hook: "A finished wafer isn’t a chip yet. The steps after the fab now decide how many AI chips ship, and where they’re made.",
    ref: { label: "Chris Miller, Chip War (2022), ch. 10, “Transistor Girls”", href: SRC.chipwar },
    signal: `<p>In 1963, Fairchild opened an assembly plant in Hong Kong. Assembly meant packaging: wiring each chip into its case, mostly by hand, at about a tenth of American wages. Miller marks it as the start of the industry’s move to Asia. Packaging went first because it was the cheapest step.</p>
      <p>Sixty years later, it’s the step AI is waiting on.</p>`,
    takes: [
      ["The choke point moved downstream.", "Nvidia has reportedly reserved 800,000 to 850,000 wafers of TSMC’s CoWoS packaging for 2026, more than half of it, and demand still runs about 20% ahead of supply, though TrendForce sees the gap narrowing by year-end. TSMC is reportedly outsourcing more of the chip-on-wafer step, where dies are placed on the interposer, to packaging houses such as ASE."],
      ["Bigger packages, more ways to fail.", "An AI package holds a GPU and its HBM stacks on an interposer, and the GPU silicon alone has roughly doubled, from Hopper’s 814 mm² die to about 1,700 mm² across Blackwell’s two. One bad die scraps the whole package, so testing before assembly decides the yield. Even the substrate’s glass cloth is short: Nittobo makes about 90% of the specialist low-expansion cloth, and new supply lands in mid-2027."],
      ["A US chip isn’t made in the US until it’s packaged.", "The first US-made Blackwell wafer came off TSMC’s Arizona line in October 2025 and still flew to Taiwan for CoWoS. TSMC has started building an Arizona packaging plant for CoWoS before 2029, and Amkor raised its Arizona campus to about $12 billion, alongside a $1.5 billion multiyear Nvidia deal that includes a prepayment."]
    ],
    bet: "Through 2028, AI chip supply will be counted in packaging capacity, not wafer starts. Back the back end: packaging and test houses taking on CoWoS work, substrate materials, and the bonding and inspection tools that make big packages yield. The first US packaging lines at scale are worth more than they look.",
    wrong: "CoWoS supply catches up with demand in 2027 and stays caught up while AI chip shipments keep growing.",
    receipts: [["Chip War (2022)", SRC.chipwar], ["TrendForce on CoWoS supply (June 2026)", SRC.trend], ["TrendForce on CoWoS outsourcing (Aug 2026)", SRC.cowosOut], ["Tom’s Hardware on T-glass (Mar 2026)", SRC.tglass], ["DCD on the Arizona Blackwell wafer (Oct 2025)", SRC.bwWafer], ["DCD on TSMC’s Arizona packaging (Apr 2026)", SRC.tsmcAp], ["AZ Big Media on Amkor (Sept 2026)", SRC.amkor], ["Yahoo Finance on Amkor and Nvidia (July 2026)", SRC.amkorNv]],
    viz: "backend", echo: { pose: "idle", acc: "package", name: "Packager" }
  },
  {
    id: "heat", die: [7, -5], stance: "build",
    title: "Going 3D saved Moore’s law. Heat is the bill.",
    h2: "Going 3D | saved Moore’s law. Heat is the bill.",
    short: "Heat is the bill",
    hook: "We beat the slowdown by stacking transistors upward. Moore’s own answer to heat assumed chips stay flat.",
    ref: { label: "Gordon Moore, “Cramming more components onto integrated circuits,” Electronics (1965), the section on heat", href: SRC.moore },
    signal: `<blockquote class="pull">…a surface available for cooling | close to each center | of heat generation.</blockquote>
      <p>That was Moore’s 1965 answer to whether chips could shed their heat: they’re flat, so every hot spot sits right under a surface. For decades it held. Then shrinking stopped paying for itself, and the industry went vertical.</p>
      <p>Every layer we stack takes away the surface Moore was counting on.</p>`,
    takes: [
      ["3D is how Moore’s law survives.", "TSMC moved to nanosheet (gate-all-around) transistors at N2 in late 2025, with backside power next on A16, now slated for 2027. Memory went vertical years ago with stacked HBM, chiplets get bonded face to face, and CFET, further out on the roadmaps, stacks the two transistor types on top of each other."],
      ["Every layer traps heat.", "A buried layer’s heat has to cross everything above it to escape. Racks show the result: Nvidia’s GB200 NVL72 draws about 120 kW, and its Kyber rack design targets about 600 kW, cooled entirely by liquid with no fans."],
      ["Cooling moves inside the chip.", "Microsoft etched coolant channels into the back of the silicon and reported heat removal up to three times better than cold plates. It also warned that cold plates could become the limit within five years."]
    ],
    bet: "The next decade of compute gains will be gated by thermals, not lithography. Back thermal-first infrastructure: in-chip and two-phase liquid cooling, thermal-aware chip design tools, high-conductivity bonding and packaging materials, and retrofits that bring liquid to existing datacenters.",
    wrong: "Logic-on-logic 3D chips ship at scale before 2030 using ordinary cold plates alone.",
    receipts: [["Moore, Electronics (1965)", SRC.moore], ["TechSpot on TSMC N2 (Dec 2025)", SRC.n2], ["TrendForce on TSMC A16 (Apr 2026)", SRC.a16], ["DCD on Nvidia rack density (Mar 2025)", SRC.dcd], ["Microsoft on microfluidics (Sept 2025)", SRC.msft]],
    viz: "heat", echo: { pose: "idle", acc: "thermo", name: "Thermometer" }
  },
  {
    id: "screentime", die: [9, 0], stance: "original",
    title: "The best consumer AI will give you your time back.",
    h2: "The best consumer AI | will give you | your time back.",
    short: "Give people time back",
    hook: "As AI takes over work, the scarce thing becomes an hour with your people.",
    ref: { label: "U.S. Surgeon General, “Our Epidemic of Loneliness and Isolation” (2023)", href: SRC.sg },
    signal: `<p>Americans’ in-person time with friends fell from about 60 minutes a day in 2003 to 20 in 2020. For 15 to 24 year olds, the drop was about 70%.</p>
      <p>If the other theses on this page are right, AI is about to hand people a lot of hours back. The question is where those hours go.</p>`,
    takes: [
      ["Feeds will try to take the hours.", "Engagement-optimized products will treat freed-up time as inventory to fill."],
      ["Count the opposite metric.", "A product that gets people together should be judged by the hours its users spend with each other, not the hours they spend inside it."],
      ["AI should handle the logistics.", "What keeps friends apart is mostly scheduling and the small risk of reaching out. Software can take on both in the background, so seeing people takes less effort than scrolling."]
    ],
    bet: "Back consumer AI that is measured by time people spend together offline, not time on screen. I’m making this bet with my own time: EchoTempo turns “I’d be down” into real plans with friends, and its north star is plans that happened.",
    extraCta: `<a class="btn primary" href="${CONFIG.echotempoSite}" target="_blank" rel="noopener">See EchoTempo</a>`,
    wrong: "People say they want more time together but won’t spend 20 seconds a week to get it.",
    receipts: [["Surgeon General advisory (2023)", SRC.sg], ["STAT News coverage", SRC.stat]],
    viz: "screen", echo: { pose: "idle", acc: "hourglass", name: "Hourglass" }
  },
  {
    id: "spacex", die: [3, 2], stance: "original",
    title: "SpaceX’s strongest engine is its stock.",
    h2: "SpaceX’s | strongest engine | is its stock.",
    short: "The stock is the engine",
    hook: "SpaceX sells launches, internet and AI. Its most useful product might be the shares it pays with.",
    ref: { label: "My own read of SpaceX’s IPO and its $60 billion all-stock purchase of Cursor (June 2026)", href: SRC.spxCursor },
    signal: `<p class="claim">Four days after its IPO, | SpaceX agreed | to buy an AI company | with its own stock.</p>
      <p>SpaceX listed on Nasdaq on June 12, 2026, at $135 a share, a $1.77 trillion valuation. On June 16, it exercised its option to buy Cursor, the AI coding startup, for $60 billion, paid in about 389 million new SpaceX shares rather than cash. The deal closed August 14.</p>
      <p>SpaceX lost $4.9 billion last year, so it has no P/E to speak of. At the IPO price it was valued at about 95 times its 2025 revenue, and still more than 50 times its current run rate. Cursor cost 15 to 20 times its reported run rate. That gap is a business model.</p>`,
    takes: [
      ["The rockets still have to work.", "The space bet rests on Starship making orbit cheap. On September 28, it reached orbit for the first time and deployed 26 Starlink V3 satellites, though an engine shut down early and the flight was cut short. Starlink is the cash engine: $11.4 billion of SpaceX’s $18.7 billion in 2025 revenue. The AI side is less certain. Anthropic’s $1.25 billion a month for compute runs through May 2029 on paper, but either side can walk away on 90 days’ notice."],
      ["The stock is a currency.", "When your shares trade at 50 to 95 times revenue and the company you’re buying sells for 15 to 20, paying in stock adds more revenue per share than it gives away. Cursor cost SpaceX about 3% more shares and brought $3 billion to $4 billion of run-rate revenue, a sixth to a fifth of SpaceX’s 2025 revenue. P&G built its house of brands with stock too, paying for Gillette in 2005 with about $57 billion of its own shares, but it leaned on cost savings, not a rich multiple. SpaceX’s edge is the multiple itself. Musk holds about 82% of the votes, so no one can block the next deal."],
      ["Rocket Lab is running it smaller.", "Rocket Lab has spent years buying satellite suppliers, most recently Mynaric and Motiv, and on June 28 agreed to buy Iridium for about $8 billion in cash and stock. “If you want to do big things in space, you need spectrum,” Peter Beck said. Its backlog hit a record $2.36 billion. But its bigger rocket, Neutron, slipped after a fuel tank ruptured in testing in January, and it’s now aiming for the pad by the end of 2026."]
    ],
    bet: "SpaceX becomes the P&G of AI and space: a house of brands held together by Starlink’s reach, xAI’s compute and one very expensive stock. As long as its shares trade far above what it pays, every stock deal adds revenue per share, and the deals can keep getting bigger. That changes the exit map for founders and VCs. The likeliest buyer for a fast-growing AI or space startup may be a stock swap with SpaceX, not an IPO. Build what plugs into Starlink, xAI or Cursor, and know the window lasts only as long as the multiple.",
    wrong: "SpaceX’s stock falls to roughly what it paid for Cursor, 15 to 20 times revenue, so stock deals stop adding revenue per share. Or Starship misses routine reuse through 2028 and the core business needs the cash.",
    note: "Not investment advice.",
    receipts: [["SpaceX 8-K closing the Cursor deal (Aug 2026)", SRC.spxCursor], ["Capital Brief on the option exercise (June 2026)", SRC.spxExercise], ["Dealroom on Cursor’s $4B run rate (June 2026)", SRC.cursor4b], ["Wikipedia, Cursor (company)", SRC.cursorCo], ["Reuters on the IPO (June 2026)", SRC.spxIpo], ["Via Satellite on SpaceX’s 2025 financials (May 2026)", SRC.spxFin], ["AP on SpaceX’s Q2 (2026)", SRC.spxQ2], ["Stock Analysis, SPCX statistics (Oct 2026)", SRC.spxCap], ["AIAA on Starship Flight 14 (Sept 2026)", SRC.spxF14], ["Via Satellite on Flight 14 (Sept 2026)", SRC.spxF14b], ["TechCrunch on the Anthropic lease (May 2026)", SRC.spxLeaseTc], ["P&G and Gillette merger release (Jan 2005)", SRC.pgGillette], ["Rocket Lab Q2 2026 results (Aug 2026)", SRC.rklbQ2], ["Manufacturing Dive on Rocket Lab and Iridium (June 2026)", SRC.rklbIrdm], ["Spaceflight Now on Neutron (Aug 2026)", SRC.neutron]],
    viz: "spacex", echo: { pose: "float", acc: "jet", name: "Dealmaker" }
  },
  {
    id: "quantum", die: [6, 1], stance: "build",
    title: "Quantum’s first big job is breaking keys, not training models.",
    h2: "Quantum’s first big job | is breaking keys, | not training models.",
    short: "Quantum breaks keys first",
    hook: "The AI race runs on GPUs. Quantum computing’s first decisive move will be on the locks, not the models.",
    ref: { label: "Google Quantum AI, “Safeguarding cryptocurrency by disclosing quantum vulnerabilities responsibly” (March 2026)", href: SRC.qGoogle },
    signal: `<p class="claim">Fewer than 500,000 qubits. | A few minutes per key.</p>
      <p>On March 31, 2026, Google Quantum AI said a quantum computer with fewer than 500,000 physical qubits could break the 256-bit elliptic-curve keys that secure Bitcoin and Ethereum, in a few minutes per key. That’s about 20 times fewer qubits than earlier estimates. Google published a zero-knowledge proof that its circuits work instead of the circuits themselves.</p>
      <p>Google’s best chip has 105 qubits. The gap is about 5,000×, and it’s closing from both ends.</p>`,
    takes: [
      ["The hardware works, and it’s still tiny.", "In December 2024, Google’s 105-qubit Willow chip showed error correction getting better as it added qubits, the threshold that makes scaling worth it. In October 2025, a 65-qubit run of its “Quantum Echoes” experiment beat the Frontier supercomputer about 13,000× on one physics problem: 2.1 hours versus roughly 3.2 years. Error-corrected “logical” qubits are still counted in dozens. Quantinuum’s Helios ran 48 on 98 physical qubits in November 2025, and IBM is aiming for 200 by 2029. Breaking a Bitcoin key takes about 1,200."],
      ["AI helps quantum more than quantum helps AI.", "Training a frontier model means pushing trillions of tokens through matrix math, and quantum computers have no known edge at either. They can’t even load that much data. The help runs the other way: error correction needs a classical computer to read the qubits and decide fixes within microseconds, so Nvidia’s NVQLink, launched in October 2025, wires GPUs to quantum processors from 17 builders with a round trip under 4 µs. Quantum’s eventual gift to AI is data: simulations of molecules and materials no GPU can run, for drugs, batteries and chips."],
      ["The AI race meets the quantum clock at the locks.", "About 6.26 million bitcoin, 31% of supply, sit in addresses whose public keys are already visible, including roughly 1.1 million attributed to Satoshi. Anything encrypted today can be recorded now and read later, which is why Google set itself a 2029 deadline to move to post-quantum cryptography and the NSA wants national security systems there by 2030. The first key-breaking machine would open years of other people’s secrets, including the ones that guard AI labs."]
    ],
    bet: `Quantum’s first trillion-dollar consequence is a migration, not a computer. Back the post-quantum switchover: tools that find everywhere a company uses breakable encryption, post-quantum libraries and hardware security modules, wallet and custody upgrades for crypto, and the GPU-side control stack (decoders and low-latency links) that every quantum builder needs, whichever qubit type wins. The blockchain half of this story is in <a href="#ledger">Banks won’t mine</a>.`,
    wrong: "A quantum computer trains or serves a frontier AI model faster than GPUs before any quantum computer breaks a 256-bit elliptic-curve key.",
    receipts: [["Google Quantum AI on cryptocurrency (Mar 2026)", SRC.qGoogle], ["Forbes on Google’s paper (Mar 2026)", SRC.qForbes], ["The Quantum Insider on Quantum Echoes (Oct 2025)", SRC.qEchoes], ["Quantum Zeitgeist logical-qubit leaderboard (2026)", SRC.qBoard], ["DCD on IBM’s Starling roadmap (2025)", SRC.qIbm], ["Quantum Computing Report on NVQLink (Oct 2025)", SRC.qNvq], ["ForkLog on Glassnode’s exposed-key count (Oct 2026)", SRC.btcExposed]],
    viz: "quantum", echo: { pose: "float", acc: "qubit", name: "Qubit" }
  },
  {
    id: "ledger", die: [4, -8], stance: "build",
    title: "Banks won’t mine. They’ll still share the ledger.",
    h2: "Banks won’t mine. | They’ll still | share the ledger.",
    short: "Banks will share the ledger",
    hook: "Bitcoin built a ledger nobody owns and anyone can check. Banks want the second half without the first.",
    ref: { label: "Satoshi Nakamoto, “Bitcoin: A Peer-to-Peer Electronic Cash System” (2008)", href: SRC.btcPaper },
    signal: `<blockquote class="pull">…a record that | cannot be changed | without redoing | the proof-of-work.</blockquote>
      <p>That’s the whole trick. Every block holds its data, its own hash (a fingerprint of everything in it) and the hash of the block before it. Change anything in an old block and its fingerprint changes, which breaks the link to every block after it. Only the first block, the genesis block, points to nothing.</p>`,
    takes: [
      ["Tampering doesn’t fail. It gets outworked.", "A forger can rewrite a block and make the chain look valid again, but only by redoing the proof of work for that block and every block after it, then outrunning everyone still adding honest ones. Bitcoin tunes that work so a block lands about every 10 minutes. Satoshi did the math: an attacker with 10% of the network’s computing power, six blocks behind, catches up about 0.02% of the time. Waiting for confirmations is waiting for that number to shrink."],
      ["Everyone keeps a copy, so nobody reconciles.", "Every participant holds the whole ledger and checks each new block, so agreement comes from consensus instead of a back office matching two banks’ books after the fact. That’s what banks are buying. JPMorgan’s Kinexys moves about $5 billion a day and has handled more than $3 trillion since 2020, and its JPM Coin deposit token runs on Coinbase’s Base network."],
      ["Banks swap the work for a guest list.", "Proof of work burns electricity so strangers can trust each other. Banks know who’s on their network, so their chains use proof of authority or stake: identified validators vote, and blocks settle in seconds. The rules are arriving too. The OCC’s final GENIUS Act rule for payment stablecoins, issued October 21, takes effect January 18, 2027. What none of them can swap yet is the signature math: Shor’s algorithm on a big enough quantum computer breaks the elliptic-curve keys (ECDSA) behind Bitcoin and most chains."]
    ],
    bet: `Within five years, most money moving between big banks will move on shared ledgers: deposit tokens, tokenized Treasurys and stablecoins from bank subsidiaries. Banks still reconciling separate books will be slower and costlier than the ones that aren’t. Back the plumbing: bridges between bank chains and public ones, identity and compliance built into the token, custody, and post-quantum signatures before the ledgers are valuable enough to attack. The quantum side is in <a href="#quantum">Quantum’s first big job</a>.`,
    wrong: "By 2031, the biggest US banks still settle almost all of their payments with each other on legacy rails, and their chains are still pilots.",
    receipts: [["Satoshi Nakamoto, Bitcoin white paper (2008)", SRC.btcPaper], ["Catenaa on Kinexys and Mitsubishi (Apr 2026)", SRC.kinexys], ["OCC Bulletin 2026-50, GENIUS Act final rule (Oct 2026)", SRC.occGenius], ["Google Quantum AI on elliptic-curve keys (Mar 2026)", SRC.qGoogle]],
    viz: "ledger", echo: { pose: "idle", acc: "chain", name: "Ledger" }
  },
  {
    id: "custom", die: [-3, -2], stance: "original",
    title: "The chip is custom. The moat is everything around it.",
    h2: "The chip is custom. | The moat is | everything around it.",
    short: "The moat around the chip",
    hook: "Hyperscalers can learn to design their own AI chips. The wires, the packaging and the supply are much harder to bring in-house.",
    ref: { k: "Reference design", label: "My own read of Broadcom’s and Marvell’s 2026 results and the custom-chip deals behind them", href: SRC.avgoCall },
    signal: `<p class="claim">$16.7 billion of AI chips | in one quarter, | up 221%.</p>
      <p>That was Broadcom’s AI semiconductor revenue in its fiscal third quarter, reported September 3. Custom accelerators were 73% of it, led by Google’s TPUs and OpenAI’s first chip, which shipped that quarter. Meta’s MTIA follows in the fourth. Broadcom expects about $115 billion of AI revenue in fiscal 2027 and about $230 billion in 2028.</p>
      <p>Every one of those customers is also learning to design chips without it.</p>`,
    takes: [
      ["Custom wins on the job, not the spec sheet.", "A GPU is built to run anything. A custom accelerator, or ASIC, is built for one company’s models, trading flexibility for cost and power. Custom ASIC shipments were projected to grow 44.6% in 2026 against 16.1% for GPUs, and Broadcom and Marvell co-design about 95% of them. Anthropic alone plans to add 5 GW of Google’s TPU v8i in 2027, per Broadcom."],
      ["The insourcing threat is real, and partial.", "Google brought in MediaTek as a second design partner for TPU v7. Amazon designs Trainium in-house at Annapurna Labs, and in December 2025 Benchmark said it was highly confident Marvell had lost Trainium3 and Trainium4 to Taiwan’s Alchip. What customers keep buying is the hard periphery: high-speed I/O, the memory interface, packaging and a slice of TSMC’s scarce CoWoS capacity, where Broadcom holds about 15%."],
      ["So the vendors are moving to what can’t be insourced.", "Broadcom sells the network with the chips. Its AI networking revenue grew more than 2.5× in a year, and it says it has secured supply for fiscal 2027. Marvell’s stock more than tripled in the first half of 2026, partly on optical networking, then fell about 13% on October 29 after Bloomberg reported it was in advanced talks to buy Lumentum, an optical-parts maker worth about $83 billion, likely in stock."]
    ],
    bet: "The design fee is the part that gets competed away. Back the layers customers can’t easily build: high-speed SerDes and optical interconnect, co-packaged optics, advanced packaging capacity, and the networking that makes a million chips act as one. Broadcom already sells most of that stack alongside its chips. Marvell is betting optics becomes its moat, and a Lumentum deal would make that bet in one move.",
    wrong: "By 2028, a top hyperscaler ships its flagship AI chip with no outside design partner, using its own high-speed I/O and packaging flow, and Broadcom’s AI revenue stops growing faster than Nvidia’s.",
    note: "Not investment advice.",
    receipts: [["Nasdaq on Broadcom’s Q3 call (Sept 2026)", SRC.avgoCall], ["Pulse 2.0 on Broadcom’s Q3 results (Sept 2026)", SRC.avgoQ3], ["Tom’s Hardware, custom AI ASIC state of play (May 2026)", SRC.asicState], ["Yahoo Finance on Benchmark’s Marvell downgrade (Dec 2025)", SRC.mrvlBench], ["Motley Fool on Marvell’s new high (June 2026)", SRC.mrvlHigh], ["Pulse 2.0 on Marvell’s Q2 (Aug 2026)", SRC.mrvlQ2], ["Motley Fool on the Lumentum talks (Oct 2026)", SRC.mrvlLite]],
    viz: "custom", echo: { pose: "idle", acc: "asic", name: "Chip designer" }
  },
  {
    id: "tokens", die: [6, -3], stance: "agree",
    title: "Rent GPUs to survive. Sell tokens to win.",
    h2: "Rent GPUs to survive. | Sell tokens to win.",
    short: "Sell tokens to win",
    hook: "Nebius’s bull case isn’t more data centers. It’s selling what comes out of them.",
    ref: { label: "betteresearch, “Nebius Group · Investment Framework” (May 2026)", href: SRC.nbFrame },
    signal: `<p class="claim">Pennies to make. | Dollars to sell.</p>
      <p>The framework’s rough math for a million tokens from a popular model: about $0.10 to $0.30 of GPU time to make, run efficiently, and $5 to $15 at list price through a public API. That’s a spread of 17× to 150×. Renting the same GPUs by the hour earns gross margins of about 20% to 30%.</p>
      <p>Nebius launched Token Factory in November 2025 to sell the tokens instead of the hours.</p>`,
    takes: [
      ["The GPU-hour is a commodity.", "Raw rental is priced against every other operator with the same Nvidia chips. Field interviews the framework cites found bare-metal customers keep three to five providers and re-bid every month. CoreWeave, which mostly rents GPU-hours, brings in about $8 million to $12 million a year per megawatt. That’s what a strong neocloud earns. It isn’t a software business."],
      ["The token is a product.", "Token Factory serves more than 40 open models with fine-tuning, distillation and dedicated endpoints at a 99.9% uptime SLA. Prosus runs up to 200 billion tokens a day on it and reports costs up to 26× lower than with proprietary models. Then Nebius bought ways to get more out of each GPU and each customer: Eigen AI ($643 million) for model-level inference tuning, Clarifai’s team and patents for system-level orchestration, and Tavily for agent search, with about 700,000 developers. A customer wired into an API is harder to re-bid than a rack."],
      ["The spread is real, and it’s melting.", "Token prices fall 30% to 50% a year across providers, so over four years the 17–150× spread shrinks to roughly 2–20×. Together AI, Fireworks, Groq and open engines like vLLM chase the same margin. The framework gives the window two to four years, and Nebius hasn’t yet broken out Token Factory revenue. Its scenarios show the stakes: about 11× for shareholders if tokens become a software-class business, a loss of 70% or more if Nebius stays a GPU landlord in a glut."]
    ],
    bet: `Neoclouds that stay landlords earn landlord returns. The ones worth owning turn more of every megawatt into tokens sold by the million, and keep customers through APIs, fine-tuned models and agents rather than price. This extends my take in <a href="#neocloud">The clouds are renting from the neoclouds</a>: renting GPU-hours wholesale is the floor, and tokens are the upside. The tell is the share of Nebius’s revenue that comes from Token Factory, which it hasn’t disclosed yet.`,
    wrong: "By the end of 2027, Nebius earns no more revenue per megawatt than CoreWeave, or token prices fall faster than its cost per token, so selling tokens pays no better than renting GPUs.",
    note: "Not investment advice.",
    receipts: [["betteresearch, Nebius Investment Framework (May 2026)", SRC.nbFrame], ["Nebius launches Token Factory (Nov 2025)", SRC.nbTf], ["DCD on Microsoft and Nebius (Sept 2025)", SRC.nbMsft]],
    viz: "tokens", echo: { pose: "wave", acc: "tokens", name: "Token seller" }
  },
  {
    id: "factory", die: [-4, 5], stance: "build",
    title: "A token factory is a country of experts on a meter.",
    h2: "A token factory | is a country of experts | on a meter.",
    short: "A country of experts",
    hook: "Data centers used to store work. The new ones manufacture it, one token at a time.",
    ref: { label: "Dario Amodei, “Machines of Loving Grace” (October 2024), and the “country full of experts” framing I heard on a Civo Navigate London 2026 panel", href: SRC.amodeiMlg },
    signal: `<blockquote class="pull">This is your token factory, | this is your AI factory, | this is your revenue.</blockquote>
      <p>That’s Jensen Huang at GTC, March 16, 2026. A token is a piece of a word, the unit an AI model reads and writes. Google was processing more than 3.2 quadrillion of them a month by May, up 7× in a year.</p>
      <p>At Civo Navigate London in September, I heard the human version: an optimized data center is a mini country full of experts.</p>`,
    takes: [
      ["Raw materials in, finished work out.", "A token factory takes in electricity, chips and a trained model and ships tokens: answers, code, plans. So measure it like a factory. Throughput is tokens per second, efficiency is tokens per watt, and the price list is per token. Nebius named its inference product Token Factory, and one customer, Prosus, runs up to 200 billion tokens a day through it."],
      ["It’s a country, with strange labor laws.", "Dario Amodei’s version: the cluster that trains a model can then run millions of copies of it, each working at roughly 10× to 100× human speed, a “country of geniuses in a datacenter.” These experts never sleep, can be copied on demand and switch specialties between requests. Every hour they work is metered in tokens, and every token has a power bill."],
      ["Countries have borders, so token factories do too.", "Tokens carry the data they work on, so regulated firms want the factory in-country. At the same event, Civo unveiled a liquid-cooled UK edge data center built on Nvidia’s Vera Rubin, with 72 Rubin GPUs per rack and 40 UK sites planned. In October, Gigatokens began selling per-token AI from Civo’s UK GPUs with zero data retention by default. Sovereignty used to be a policy. Now it’s an address."]
    ],
    bet: "Count AI capacity like an economy, not a server room: how many experts are on staff (agents running at once), how many hours they work (tokens), and how productive they are (tokens per watt). Back what raises output per megawatt: inference engines, smarter routing and caching, smaller distilled models, and in-country token factories for banks, hospitals and governments.",
    wrong: "By 2028, tokens per watt stop improving and per-token prices stop falling, so a token factory behaves like a utility with fixed output instead of an economy whose workforce keeps growing.",
    receipts: [["Dario Amodei, Machines of Loving Grace (Oct 2024)", SRC.amodeiMlg], ["Fortune on “a country of geniuses” (Jan 2026)", SRC.amodeiAdol], ["Civo Navigate London 2026 wrap-up (Sept 2026)", SRC.civoWrap], ["SiliconANGLE on Huang at GTC (Mar 2026)", SRC.gtc26], ["Google I/O 2026 keynote (May 2026)", SRC.googTok], ["Gigatokens and Civo (Oct 2026)", SRC.gigatokens], ["Nebius launches Token Factory (Nov 2025)", SRC.nbTf]],
    viz: "factory", echo: { pose: "idle", acc: "factory", name: "Foreman" }
  },
  {
    id: "chipnames", die: [2, -6], stance: "original",
    title: "Every GPU name is a scientist and a year.",
    h2: "Every GPU name | is a scientist | and a year.",
    short: "A scientist and a year",
    hook: "H100, B200, Rubin: the alphabet soup is a family tree. Learn the letters and the roadmap reads itself.",
    ref: { k: "Reference design", label: "My own map of Nvidia’s architectures and Google’s TPUs, from their roadmaps and docs", href: SRC.nvNames },
    signal: `<p class="claim">The letter is the scientist. | The number is the tier.</p>
      <p>Nvidia names each architecture after a scientist and stamps the initial on the chip: T4 for Alan Turing, A100 for André-Marie Ampère, L40S for Ada Lovelace, H100 for Grace Hopper, B200 for David Blackwell. Rubin, for the astronomer Vera Rubin, ships this year, and Feynman is due in 2028.</p>
      <p>The extras are clues too. GB200 pairs Blackwell GPUs with Nvidia’s Grace CPU, and “NVL72” means 72 GPUs wired to act as one.</p>`,
    takes: [
      ["The family split in 2022, then came back together.", "Turing (2018) put tensor cores, the matrix-math units AI runs on, into gaming cards and the low-power T4. Ampere (2020) covered everything from the A100 to RTX 30 cards. In 2022 Nvidia split the line: Ada Lovelace for graphics and cheaper inference (RTX 40, L4, L40S) and Hopper for the data center (H100). Blackwell reunited them, from B200 to RTX 50, and Nvidia now ships a new data-center architecture every year."],
      ["The real upgrade is usually memory.", "H200 is the H100’s Hopper chip with 141 GB of memory instead of 80 GB, and 4.8 TB/s instead of 3.35. B200 joins two dies with 192 GB, and B300, Blackwell Ultra, has 288 GB. A Rubin GPU keeps 288 GB but moves to HBM4 at up to 22 TB/s, nearly triple B300’s 8 TB/s, and Nvidia rates it at 50 petaflops of FP4 inference. A model lives in memory, so memory decides how big it can be and bandwidth decides how fast it answers."],
      ["Google’s TPUs went the other way: one customer, then everyone.", "TPU v1 (2015) only ran models inside Google. v2 (2017) added training and the bfloat16 number format now used across AI. v4 (2021) linked 4,096 chips in a pod. Ironwood, TPU v7, reached general availability in April 2026 with 192 GB per chip and pods of 9,216 chips. Google then split the eighth generation into TPU 8t for training and 8i for inference, and sells to outside labs: Anthropic signed for up to a million TPUs."]
    ],
    bet: "Ignore the name on the box and read three numbers: memory per chip, memory bandwidth, and how many chips act as one machine, 72 in an NVL72 rack or 9,216 in an Ironwood pod. That’s where the generations really differ. Back what wins whichever name is on the box: HBM suppliers, the interconnect that makes thousands of chips act as one, and software that moves models between GPUs and TPUs without a rewrite.",
    wrong: "By 2028, a chip with less memory and a smaller scale-up domain than its rivals wins the frontier on raw compute alone.",
    receipts: [["Wikipedia, eponyms of Nvidia GPU architectures", SRC.nvNames], ["Baseten, GPU architecture generations", SRC.gpuGens], ["Bizon on GTC 2026 and Vera Rubin specs (Mar 2026)", SRC.gtcBuy], ["Tom’s Hardware, Nvidia’s data-center roadmap", SRC.nvRoad], ["NVIDIA on Vera Rubin (July 2026)", SRC.rubin], ["Wikipedia, Tensor Processing Unit", SRC.tpuWiki], ["Google Cloud, TPU7x (Ironwood) docs", SRC.tpu7], ["Tom’s Hardware on Anthropic’s TPUs (Oct 2025)", SRC.anthTpu]],
    viz: "chipnames", echo: { pose: "wave", acc: "nametag", name: "Name tag" }
  },
  {
    id: "openclaw", die: [-5, -3], stance: "build",
    title: "OpenClaw gave the brain a body. Now it needs a badge.",
    h2: "OpenClaw gave the brain | a body. | Now it needs a badge.",
    short: "A body that needs a badge",
    hook: "The open-source agent that lives in your group chat is the best test yet of my brain-with-a-body thesis, and of what breaks without permissions.",
    ref: { label: "OpenClaw, Peter Steinberger’s open-source agent (November 2025 onward), now run by the OpenClaw Foundation", href: SRC.ocWiki },
    signal: `<p class="claim">A side project | to 391,800 GitHub stars | in under a year.</p>
      <p>Peter Steinberger released it as Warelay on November 24, 2025, and renamed it four times, partly after trademark complaints from Anthropic, before settling on OpenClaw on January 30. It runs on your own machine, takes orders through Signal, Telegram or Discord, and acts on your email, calendar, files and browser through installable “skills.” Steinberger joined OpenAI in February, and a nonprofit foundation now runs the project.</p>`,
    takes: [
      ["For a lean startup, it’s staff.", "The best-documented uses are small and practical: lead generation, prospect research, website audits, CRM updates, inbox triage, price alerts. One-person agencies run SEO monitoring, email and a Shopify store through it from a chat window. The software is MIT-licensed and free, and the bill is model tokens. For a five-person company, that’s a back office for the price of an API key."],
      ["For a big company, it’s a liability until it has a badge.", "Satya Nadella called OpenClaw a virus-like security risk in February. By May, Microsoft was testing an OpenClaw-based desktop called ClawPilot internally. Nvidia launched NemoClaw in March to wrap it in guardrails and sandboxing, and on October 27 Red Hat brought Nvidia’s OpenShell sandbox runtime to OpenClaw agents on Kubernetes. China barred state agencies, state firms and banks from running it in March. Enterprises want the agent, with identity, permissions and an audit trail."],
      ["The body is where it breaks.", "One audit reportedly found 341 of 2,857 skills on ClawHub, about 12%, were malicious, and researchers have counted more than 40,000 exposed instances online. In OpenClaw 2.0, released August 30, the sandbox is still off by default and stored secrets aren’t encrypted at rest. An agent with your inbox and no badge is a very helpful stranger."]
    ],
    bet: `Personal agents will follow the smartphone: open and messy first, then managed. Startups should run OpenClaw now for back-office work, with the sandbox on and only skills they’ve read. Big companies will run its descendants inside managed runtimes. Back the badge: agent identity and permissions, vetted skill registries, sandboxes and secret stores, and an audit log for every action. It’s the next step of the bet in <a href="#agent">An agent is a brain with a body</a>.`,
    wrong: "By 2028, most large companies still don’t let any autonomous agent act in employees’ email or calendars, sandboxed or not.",
    receipts: [["Wikipedia, OpenClaw", SRC.ocWiki], ["The GenAI Magazine, OpenClaw one year later (Oct 2026)", SRC.ocNow], ["SiliconANGLE on Red Hat and OpenShell (Oct 2026)", SRC.ocRedHat], ["Anthropic, Building effective agents (Dec 2024)", SRC.bea]],
    viz: "openclaw", echo: { pose: "run", acc: "claw", name: "Claw" }
  },
  {
    id: "race", die: [-6, 1], stance: "agree",
    title: "America can’t afford second place in AI.",
    h2: "America can’t afford | second place in AI.",
    short: "No second place in AI",
    hook: "China has nearly caught up on models. America’s lead is in capital and compute, and in a race where the prize compounds, that lead is the game.",
    ref: { label: "Leopold Aschenbrenner, Situational Awareness, ch. IIId, “The Free World Must Prevail” (June 2024)", href: SRC.saIIId },
    signal: `<p class="claim">China: 2.7% behind on models. | 23× behind on investment.</p>
      <p>Stanford’s 2026 AI Index found the best Chinese model trails the best American one by 2.7% on head-to-head ratings, down from as much as 31.6 points in 2023. But US private AI investment was $285.9 billion in 2025, against China’s reported $12.4 billion, and the US added 78% of the world’s new AI compute in the first half of 2026.</p>
      <p>The models are close. The inputs aren’t.</p>`,
    takes: [
      ["Commercially, the leader sets the defaults.", "Whoever’s models, chips and clouds the world builds on collects the rent and writes the standards, the way the US did with the internet. The US hosts 5,427 data centers, more than ten times any other country, and about 72% of the world’s AI compute. China leads where AI meets the physical world: it installed 295,000 industrial robots last year to America’s 34,200, and filed 69.7% of AI patents. Once models converge, compute and capital are the moat, and both can be lost."],
      ["For security, AI now finds the weapons.", "In October, AI models helped find two flaws that had sat unnoticed for over a decade in PHP, which runs about 70% of websites, and governments took sites offline to patch. In August, the NSA, CISA, FBI, Energy Department and EPA warned that attackers are using AI to write exploits for Siemens controllers in water and energy systems. The side with the better models finds the holes first, in its own systems or someone else’s."],
      ["Racing has a cost, so a lead has to buy something.", "Aschenbrenner’s argument is that a healthy lead buys room to be careful, where a neck-and-neck race invites cutting corners. Sam Altman reportedly told OpenAI staff in October that he favors an IAEA-style international watchdog, but that OpenAI can’t afford to cede ground while it waits. Others argue the race itself is the danger and only coordination makes it safe. Either way, a lead is only worth having if it’s spent on safety and standards."]
    ],
    bet: "Treat frontier AI as a strategic industry, the way the US treated chips in the 1980s and space in the 1960s: secure the inputs (power, fabs, packaging, talent), secure the outputs (model weights and access), and use the lead to set the safety rules everyone else has to meet. The Genesis Mission, the November 2025 order putting the Energy Department’s national labs behind AI for science, is a start. Back what the buildout and its defense need: power and grid, domestic packaging, AI-native cyber defense and secure compute for government.",
    wrong: "By 2028, Chinese models lead American ones for a full year, and US companies and defenses are no worse off for it. Then it was a market, not a race.",
    receipts: [["Situational Awareness, ch. IIId", SRC.saIIId], ["TNW on Stanford’s 2026 AI Index (Apr 2026)", SRC.aiIndex], ["OfficeChai on Epoch AI’s compute shares (Oct 2026)", SRC.epochShare], ["Korea Times on the PHP flaws (Oct 2026)", SRC.phpKt], ["Help Net Security on AI-written PLC exploits (Aug 2026)", SRC.plcAi], ["Forbes on Altman’s three endgames (Oct 2026)", SRC.altman3], ["Federal Register, Launching the Genesis Mission (Nov 2025)", SRC.genesis]],
    viz: "race", echo: { pose: "run", acc: "baton", name: "Relay" }
  },
  {
    id: "silicon", die: [-9, -2], stance: "original",
    title: "Software can be patched. Silicon has to be outlived.",
    h2: "Software can be patched. | Silicon has to be outlived.",
    short: "Silicon has to be outlived",
    hook: "If superintelligence arrives on Altman’s schedule, the weakest point won’t be the model. It’ll be the chips it runs on.",
    ref: { k: "Reference design", label: "My own read of 2026’s AI-found flaws and hardware attacks, against Sam Altman’s superintelligence timeline", href: SRC.altmanSI },
    signal: `<blockquote class="pull">…only a couple of years away | from early versions | of true superintelligence.</blockquote>
      <p>Sam Altman said that in February, adding that by the end of 2028 more of the world’s intellectual capacity could sit inside data centers than outside them. In October, The Information reported he had walked OpenAI staff through three endgames. In one, a lab uses self-improving AI to starve its rivals of chips, the “melt their GPUs” scenario. He reportedly called it terrible.</p>
      <p>Either way, the prize is the hardware.</p>`,
    takes: [
      ["AI now finds holes faster than people fill them.", "Researchers using frontier AI models found two flaws that had hidden in PHP for more than a decade, and Wiz said AI did in a week what used to take a world-class team months. When the fix shipped on October 21, governments and companies pulled sites offline worldwide. Industrial systems are next in line: in August, federal agencies warned that attackers are using AI to write exploits for Siemens industrial controllers. So far they’re mapping systems, not breaking them. But Stuxnet showed in 2010 that code aimed at Siemens controllers can wreck about 1,000 centrifuges."],
      ["Chip flaws don’t get patched. They get taxed.", "A hardware flaw is baked into the silicon, so software can only work around it, usually at a cost in speed. The 2018 fixes for Meltdown and Spectre slowed database-style workloads by 8% to 19%. In 2025, GPUHammer flipped one bit in an Nvidia A6000’s memory and dropped an image model’s accuracy from 80% to 0.08%. The fix, error-correcting memory, costs 6.5% of capacity and 3% to 10% of speed. TEE.fail used a memory-bus probe built for under $1,000 to pull keys from Intel’s and AMD’s secure enclaves and fake Nvidia attestations."],
      ["So the trust boundary moves to the building.", "If chips can’t be made perfect, security comes from who can touch them and what they can reach: locked cages, isolated networks, attestation that a chip is genuine and unmodified, and replacing fleets before known flaws pile up. AMD said physical attacks like TEE.fail are out of scope for its chips. For a data center holding the most valuable model on Earth, physical access is the whole scope."]
    ],
    bet: `As AI gets more capable, the decisive security work moves from patching software to defending hardware and buildings. Back defensive AI that finds and fixes flaws before attackers do, memory encryption with integrity checks, hardware attestation, monitoring for industrial control systems, and data centers where physical access is the hardest thing to get. It’s the physical half of <a href="#weights">Weights are the new crown jewels</a>.`,
    wrong: "By 2028, a new generation of AI accelerators goes two years with no publicly demonstrated hardware attack, and serious AI-found software flaws get rarer, not more common.",
    receipts: [["Medianama on Altman’s superintelligence remarks (Feb 2026)", SRC.altmanSI], ["Forbes on Altman’s three endgames (Oct 2026)", SRC.altman3], ["CTV News on the PHP flaws (Oct 2026)", SRC.phpCtv], ["Paubox on the PHP fix and shutdowns (Oct 2026)", SRC.phpPaubox], ["Help Net Security on AI-written PLC exploits (Aug 2026)", SRC.plcAi], ["RTÉ on Stuxnet (2025)", SRC.stuxnet], ["InfoQ on Meltdown and Spectre slowdowns (Jan 2018)", SRC.meltdownPerf], ["GPUHammer paper (2025)", SRC.gpuHammer], ["BleepingComputer on TEE.fail (Oct 2025)", SRC.teeFail]],
    viz: "silicon", echo: { pose: "idle", acc: "patch", name: "Patcher" }
  }
];

const PROBES = [
  { die: [0, 0], title: "The capex fight is really a depreciation fight.", hook: "Whether $700B a year pays off depends on how long a GPU stays useful." }
];

// featured theses in the hero: one number each, drawn as chips fresh off the line
const RECEIPTS = [
  { v: "~2 TB", t: "A billion-dollar training run, boiled down to one file.", id: "weights", fresh: 1 },
  { v: "55 days", t: "Fuel cells to first power at Oracle. A turbine ordered today ships ~2031.", id: "bloom", fresh: 1 },
  { v: "76%", t: "SK hynix operating margin, Q2 2026. Memory is where the margin went.", id: "memory" },
  { v: "50%+", t: "Of TSMC’s 2026 CoWoS packaging, reserved by Nvidia. Still ~20% short.", id: "backend", fresh: 1 }
];

const byId = Object.fromEntries(THESES.map(t => [t.id, t]));
const num = v => (v < 0 ? "−" + Math.abs(v) : String(v));
const dieLabel = d => `(${num(d[0])}, ${num(d[1])})`;

/* ---------------------------------------------------------------- Echo */
let echoN = 0;
const FIN_DOWN_L = "M11 33 C4 37 -0.5 52 0 66 C0.5 79 4 87.5 9 88.5 C14 89.5 16 84 16 72 C16 56 16.5 40 11 33 Z";
const FIN_DOWN_R = "M89 33 C96 37 100.5 52 100 66 C99.5 79 96 87.5 91 88.5 C86 89.5 84 84 84 72 C84 56 83.5 40 89 33 Z";
const FIN_UP_L = "M2 44 C-1 30 0 14 4.5 4.5 C7 -1 12.5 -1 14 4.5 C17 14 17.5 30 16 44 Z";
const FIN_UP_R = "M98 44 C101 30 100 14 95.5 4.5 C93 -1 87.5 -1 86 4.5 C83 14 82.5 30 84 44 Z";
const BEAT = d => `<g class="echo-beat"><path d="${d}" stroke="#4fd2ff" stroke-width="3.2" fill="none" stroke-linecap="round" stroke-linejoin="round" opacity=".2"/><path d="${d}" stroke="#4fd2ff" stroke-width="1.3" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>`;
const VISOR_AWAKE = `<path d="M34 10.8 Q50 8.51 66 10.8 C78.16 11.21 82 17.95 82 28.25 C82 37.84 78.16 46 66 46 L34 46 C21.84 46 18 37.84 18 28.25 C18 17.95 21.84 11.21 34 10.8 Z" fill="#261c3d"/>` +
  BEAT("M28.88 28.04 H40.53 L42.96 24.84 L46.16 31.23 L49.62 23.42 L52.56 30.03 L54.61 28.04 H71.12") +
  `<path d="M26.96 15.47 C26.96 13.28 28.96 12.25 31.96 12.1 Q50 10.89 68.04 12.1 C71.04 12.25 73.04 13.28 73.04 15.47 C73.04 18.35 70.74 19.3 67.28 19.3 C63.82 19.3 62.32 18.74 61.52 17.03 C60.72 18.74 59.22 19.3 55.76 19.3 C52.3 19.3 50.8 18.74 50 17.03 C49.2 18.74 47.7 19.3 44.24 19.3 C40.78 19.3 39.28 18.74 38.48 17.03 C37.68 18.74 36.18 19.3 32.72 19.3 C29.26 19.3 26.96 18.35 26.96 15.47 Z" fill="#fff"/><path d="M26.96 41.03 C26.96 43.22 28.96 44.25 31.96 44.4 Q50 45.61 68.04 44.4 C71.04 44.25 73.04 43.22 73.04 41.03 C73.04 38.15 70.74 37.2 67.28 37.2 C63.82 37.2 62.32 37.76 61.52 39.47 C60.72 37.76 59.22 37.2 55.76 37.2 C52.3 37.2 50.8 37.76 50 39.47 C49.2 37.76 47.7 37.2 44.24 37.2 C40.78 37.2 39.28 37.76 38.48 39.47 C37.68 37.76 36.18 37.2 32.72 37.2 C29.26 37.2 26.96 38.15 26.96 41.03 Z" fill="#fff"/>`;
const VISOR_SLEEP = `<path d="M37.5 20.13 Q50 19.1 62.5 20.13 C72 20.32 75 23.36 75 28 C75 32.32 72 36 62.5 36 L37.5 36 C28 36 25 32.32 25 28 C25 23.36 28 20.32 37.5 20.13 Z" fill="#261c3d"/>` +
  BEAT("M33.5 27.9 H42.6 L44.5 26.46 L47 29.34 L49.7 25.82 L52 28.8 L53.6 27.9 H66.5") +
  `<path d="M32 22.24 C32 21.25 34 20.87 37 20.72 Q50 20.18 63 20.72 C66 20.87 68 21.25 68 22.24 C68 23.54 66.2 23.97 63.5 23.97 C60.8 23.97 59.8 23.71 59 22.94 C58.2 23.71 57.2 23.97 54.5 23.97 C51.8 23.97 50.8 23.71 50 22.94 C49.2 23.71 48.2 23.97 45.5 23.97 C42.8 23.97 41.8 23.71 41 22.94 C40.2 23.71 39.2 23.97 36.5 23.97 C33.8 23.97 32 23.54 32 22.24 Z" fill="#fff"/><path d="M32 33.76 C32 34.75 34 35.13 37 35.28 Q50 35.82 63 35.28 C66 35.13 68 34.75 68 33.76 C68 32.46 66.2 32.03 63.5 32.03 C60.8 32.03 59.8 32.29 59 33.06 C58.2 32.29 57.2 32.03 54.5 32.03 C51.8 32.03 50.8 32.29 50 33.06 C49.2 32.29 48.2 32.03 45.5 32.03 C42.8 32.03 41.8 32.29 41 33.06 C40.2 32.29 39.2 32.03 36.5 32.03 C33.8 32.03 32 32.46 32 33.76 Z" fill="#fff"/>`;
const EYES_OPEN = `<circle cx="11.6" cy="18.5" r="2.6" fill="#1b1530"/><circle cx="12.3" cy="17.7" r=".85" fill="#fff"/><circle cx="88.4" cy="18.5" r="2.6" fill="#1b1530"/><circle cx="89.1" cy="17.7" r=".85" fill="#fff"/>`;
const EYES_SHUT = `<path d="M8.9 18.8 Q11.6 21.2 14.3 18.8 M85.7 18.8 Q88.4 21.2 91.1 18.8" stroke="#1b1530" stroke-width="1.5" fill="none" stroke-linecap="round"/>`;
const spark = (x, y, s, c, d) => `<g transform="translate(${x} ${y}) scale(${s})"><path class="echo-spark" style="animation-delay:${d}s" d="M0 -5 C.7 -.7 .7 -.7 5 0 C.7 .7 .7 .7 0 5 C-.7 .7 -.7 .7 -5 0 C-.7 -.7 -.7 -.7 0 -5 Z" fill="${c}"/></g>`;

function echo({ pose = "idle", acc = null, label = "", bare = false } = {}) {
  const k = "pq" + (++echoN);
  const up = pose === "wave" || pose === "cheer";
  const finL = up ? FIN_UP_L : FIN_DOWN_L;
  const finR = pose === "cheer" ? FIN_UP_R : FIN_DOWN_R;
  // sitting or dozing on a ledge: no floor, so no shadow, and the feet dangle over the edge
  const dangle = pose === "sit" || pose === "doze";
  const sleep = pose === "sleep" || pose === "doze";
  let accDefs = "", accIn = "", accBack = "", accUnder = "", accExtra = "";
  if (acc === "hardhat") {
    accDefs = `<linearGradient id="${k}h" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffd98a"/><stop offset="1" stop-color="#ffb23f"/></linearGradient>`;
    accIn = `<path d="M17 4 C17 -17 83 -17 83 4 Z" fill="url(#${k}h)"/><path d="M50 -13.6 V3" stroke="#d98a12" stroke-width="3" stroke-linecap="round"/><rect x="8" y="1.5" width="84" height="7" rx="3.5" fill="#f2a12a"/><path d="M27 -5 Q31 -11 39 -12.6" stroke="#fff" stroke-opacity=".6" stroke-width="2.2" fill="none" stroke-linecap="round"/>`;
    accExtra = `<g transform="translate(-6 64)"><path d="M0 2 V26" stroke="#cfc6f5" stroke-width="2" stroke-linecap="round"/><g transform="scale(.8)"><path class="echo-spin" d="M0 0 C-2 -8 2 -12 4 -13 C3 -7 2 -3 0 0 Z M0 0 C8 -2 12 2 13 4 C7 3 3 2 0 0 Z M0 0 C2 8 -2 12 -4 13 C-3 7 -2 3 0 0 Z M0 0 C-8 2 -12 -2 -13 -4 C-7 -3 -3 -2 0 0 Z" fill="#ffd98a" stroke="#d98a12" stroke-width=".6"/></g><circle r="2.2" fill="#f2a12a"/></g>`;
  } else if (acc === "wafer") {
    accDefs = `<linearGradient id="${k}i" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#4fd2ff"/><stop offset=".35" stop-color="#a08bff"/><stop offset=".68" stop-color="#ff6b80"/><stop offset="1" stop-color="#ffb23f"/></linearGradient><clipPath id="${k}c"><circle r="21"/></clipPath>`;
    accIn = `<g transform="translate(84 70) rotate(-16)"><circle r="23" fill="url(#${k}i)" stroke="#ece7ff" stroke-width="1.3"/><g clip-path="url(#${k}c)" stroke="#0f0c22" stroke-opacity=".38" stroke-width=".7"><path d="M-23 -15 H23 M-23 -9 H23 M-23 -3 H23 M-23 3 H23 M-23 9 H23 M-23 15 H23 M-15 -23 V23 M-9 -23 V23 M-3 -23 V23 M3 -23 V23 M9 -23 V23 M15 -23 V23"/></g><circle cy="23" r="2.4" fill="#0f0c22"/><ellipse class="echo-glint" cx="-8" cy="-10" rx="7" ry="2.6" fill="#fff" transform="rotate(-32 -8 -10)"/></g>`;
  } else if (acc === "memo") {
    accIn = `<g transform="rotate(-7 50 74)"><rect x="26" y="52" width="48" height="42" rx="3" fill="#fbfaff" stroke="#cfc6f5"/><text x="31" y="67" font-family="Big Shoulders Display, Arial Narrow, sans-serif" font-size="14" font-weight="900" fill="#2b2142">SA</text><text x="51" y="67" font-family="Big Shoulders Text, Arial Narrow, sans-serif" font-size="7" font-weight="700" fill="#7b5cfa">2024</text><path d="M31 74 H68 M31 79 H63 M31 84 H66 M31 89 H56" stroke="#b8a6ff" stroke-width="1.7" stroke-linecap="round"/><path d="M58 86 l3.5 3.5 l7 -8" stroke="#2fb87a" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>`;
  } else if (acc === "thermo") {
    accIn = `<path d="M86 1 C86 1 81.5 6.5 81.5 9.2 A4.5 4.5 0 0 0 90.5 9.2 C90.5 6.5 86 1 86 1 Z" fill="#a6e9ff" stroke="#fff" stroke-width=".8"/><g transform="translate(90 62) rotate(16)"><rect x="-4.5" y="-28" width="9" height="36" rx="4.5" fill="#fff" stroke="#cfc6f5"/><rect class="echo-merc" x="-1.8" y="-18" width="3.6" height="24" rx="1.8" fill="#ff6b80"/><circle cy="10" r="7" fill="#ff6b80" stroke="#fff" stroke-width="1.6"/><path d="M4.5 -22 h3 M4.5 -15 h3 M4.5 -8 h3" stroke="#cfc6f5" stroke-width="1.1"/></g>`;
  } else if (acc === "flask") {
    accIn = `<g transform="translate(93 70) rotate(10)"><path d="M-4 -18 H4 V-10 L13 5 Q14 8 11 8 H-11 Q-14 8 -13 5 L-4 -10 Z" fill="#f2fbff" fill-opacity=".92" stroke="#bfe9ff"/><path class="echo-glint" d="M-8.8 -2 H8.8 L13 5 Q14 8 11 8 H-11 Q-14 8 -13 5 Z" fill="#4fd2ff"/><rect x="-5.5" y="-21" width="11" height="3.4" rx="1.2" fill="#bfe9ff"/></g>`;
    accExtra = [[96, 44, 2.6, 0], [100, 32, 2, .7], [94, 22, 1.6, 1.4]].map(([x, y, r, d]) => `<circle class="echo-bubble" style="animation-delay:${d}s" cx="${x}" cy="${y}" r="${r}" fill="#4fd2ff" fill-opacity=".45" stroke="#a6e9ff" stroke-width=".6"/>`).join("");
  } else if (acc === "rack") {
    accIn = `<g transform="translate(86 52)"><rect width="22" height="42" rx="2.5" fill="#211a32" stroke="#9b83ff"/>${[0, 1, 2, 3].map(i => `<rect x="3" y="${4 + i * 9.5}" width="16" height="6.5" rx="1" fill="#30234d"/><circle class="echo-led" style="animation-delay:${(i * .27).toFixed(2)}s" cx="7" cy="${(7.2 + i * 9.5).toFixed(1)}" r="1.4" fill="#4fd2ff"/><circle class="echo-led" style="animation-delay:${(i * .27 + .5).toFixed(2)}s" cx="11.5" cy="${(7.2 + i * 9.5).toFixed(1)}" r="1.4" fill="#ffb23f"/>`).join("")}</g>`;
  } else if (acc === "captain") {
    accIn = `<path d="M22 8 C22 -10 78 -10 78 8 Z" fill="#f8f6ff" stroke="#cfc6f5"/><rect x="20" y="2" width="60" height="7" rx="2" fill="#211a32"/><path d="M16 8 Q50 17 84 8 L82 11.5 Q50 21 18 11.5 Z" fill="#1b1530"/><g transform="translate(50 -3)" fill="none" stroke="#ffb23f" stroke-width="1.6" stroke-linecap="round"><path d="M0 -3 V5 M-4 2 Q0 7 4 2 M-3 -1 H3"/><circle cy="-4.6" r="1.4"/></g>`;
  } else if (acc === "chute") {
    accDefs = `<linearGradient id="${k}c" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="100" y2="0"><stop offset=".25" stop-color="#ffb23f"/><stop offset=".25" stop-color="#f8f6ff"/><stop offset=".5" stop-color="#f8f6ff"/><stop offset=".5" stop-color="#ffb23f"/><stop offset=".75" stop-color="#ffb23f"/><stop offset=".75" stop-color="#f8f6ff"/></linearGradient>`;
    accIn = `<path d="M2 -4 L14 32 M26 -4 L24 3 M74 -4 L76 3 M98 -4 L86 32" stroke="#cfc6f5" stroke-width=".8" fill="none"/><path d="M0 -4 C8 -24 92 -24 100 -4 Q87.5 -10 75 -4 Q62.5 -10 50 -4 Q37.5 -10 25 -4 Q12.5 -10 0 -4 Z" fill="url(#${k}c)" stroke="#d98a12" stroke-width=".8"/>`;
  } else if (acc === "moat") {
    accIn = `<path d="M26 7 V-9 H33 V-3 H40 V-9 H47 V-3 H53 V-9 H60 V-3 H67 V-9 H74 V7 Z" fill="#b8a6ff" stroke="#7b5cfa"/><path d="M45 7 V2 A5 5 0 0 1 55 2 V7 Z" fill="#2b2142"/>`;
    accExtra = `<ellipse cx="50" cy="107" rx="56" ry="7" fill="#4fd2ff" fill-opacity=".2"/><path class="echo-water" d="M-6 107 q6 -4 12 0 t12 0 t12 0 t12 0 t12 0 t12 0 t12 0 t12 0 t12 0 t12 0" fill="none" stroke="#4fd2ff" stroke-width="1.6" stroke-linecap="round"/>`;
  } else if (acc === "hbm") {
    accIn = `<rect x="34" y="-1.2" width="32" height="2.6" rx="1" fill="#4fd2ff"/>` + [0, 1, 2, 3].map(i => `<rect class="echo-stack" style="animation-delay:${(i * .12).toFixed(2)}s" x="30" y="${(-5.6 - i * 4.8).toFixed(1)}" width="40" height="4" rx="1" fill="${i % 2 ? "#ffc566" : "#ffb23f"}" stroke="#d98a12" stroke-width=".6"/>`).join("");
  } else if (acc === "hourglass") {
    accIn = `<g transform="translate(94 68)"><g class="echo-flip"><path d="M-8 -14 H8 M-8 14 H8" stroke="#b8a6ff" stroke-width="2.4" stroke-linecap="round"/><path d="M-6.5 -12 H6.5 C6.5 -5 1.5 -2 1.2 0 C1.5 2 6.5 5 6.5 12 H-6.5 C-6.5 5 -1.5 2 -1.2 0 C-1.5 -2 -6.5 -5 -6.5 -12 Z" fill="#f2fbff" fill-opacity=".88" stroke="#cfc6f5" stroke-width=".8"/><path d="M-5.5 -10 H5.5 C5 -6 2 -4 0 -1.5 C-2 -4 -5 -6 -5.5 -10 Z" fill="#ffb23f"/><path d="M-4.5 11 H4.5 C4 8 2 7 0 6.5 C-2 7 -4 8 -4.5 11 Z" fill="#ffb23f"/></g></g>`;
  } else if (acc === "camper") {
    accUnder = `<rect x="-13" y="34" width="24" height="46" rx="7" fill="#2fb87a"/><rect x="-9" y="56" width="16" height="14" rx="3" fill="#249566"/><rect x="-15" y="25" width="28" height="11" rx="5.5" fill="#ffb23f"/><path d="M-7 25 V36 M5 25 V36" stroke="#d98a12" stroke-width="1.4"/>`;
    accIn = `<path d="M13 10 Q50 0 87 10" stroke="#30234d" stroke-width="3.2" fill="none" stroke-linecap="round"/><circle class="echo-lamp" cx="50" cy="4" r="10" fill="#ffd98a"/><circle cx="50" cy="4.5" r="4.4" fill="#ffd98a" stroke="#d98a12"/>`;
  } else if (acc === "cloud") {
    // Echo floats on a small cloud with a price tag: GPU-hours by the hour
    accUnder = `<g transform="translate(50 104)"><path d="M-44 6 C-50 -6 -36 -14 -26 -8 C-22 -20 -4 -22 2 -12 C8 -22 28 -20 30 -6 C42 -10 52 2 44 10 C46 18 36 20 30 16 H-36 C-48 18 -54 10 -44 6 Z" fill="#f2eefb" stroke="#cfc6f5"/><path d="M-30 10 H30" stroke="#cfc6f5" stroke-width="1.2" opacity=".7"/></g>`;
    accIn = `<g transform="translate(92 60) rotate(14)"><path d="M0 -10 V-2" stroke="#cfc6f5" stroke-width="1.2"/><path d="M-11 -2 H11 L14 4 L11 18 H-11 Z" fill="#ffb23f" stroke="#d98a12"/><circle cx="0" cy="2" r="1.6" fill="#211a32"/><text x="0" y="14.5" text-anchor="middle" font-size="7.5" font-weight="900" fill="#211a32">$/hr</text></g>`;
    accExtra = [[-14, 30, 0], [108, 24, .5], [-10, 74, 1]].map(([x, y, d]) => `<rect class="echo-led" style="animation-delay:${d}s" x="${x}" y="${y}" width="9" height="5" rx="1.2" fill="#4fd2ff"/>`).join("");
  } else if (acc === "vault") {
    accIn = `<g transform="translate(90 70) rotate(-28)"><circle r="8.5" fill="none" stroke="#ffc566" stroke-width="4"/><circle r="8.5" fill="none" stroke="#d98a12" stroke-width="1" opacity=".6"/><path d="M8 -1.6 H30 V1.6 H8 Z" fill="#ffc566"/><path d="M22 1.6 V7 H25.5 V1.6 M27 1.6 V5.2 H30 V1.6" fill="#ffc566"/><path class="echo-glint" d="M-4 -4 L2 -6" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/></g>`;
    accExtra = `<g transform="translate(-9 62)"><path d="M-5 -2 V-7 A5 5 0 0 1 5 -7 V-2" fill="none" stroke="#cfc6f5" stroke-width="2.2"/><rect x="-7.5" y="-2.5" width="15" height="13" rx="2.5" fill="#a08bff" stroke="#fff" stroke-opacity=".6"/><circle class="echo-led" cy="3" r="1.8" fill="#4fd2ff"/></g>`;
  } else if (acc === "package") {
    // a finished chip: black mold body, gold leads, metal lid with a die glint
    const leads = [0, 1, 2, 3, 4].map(i => `<rect x="${-13 + i * 6}" y="-19" width="2.6" height="5" rx=".8" fill="#ffc566"/><rect x="${-13 + i * 6}" y="14" width="2.6" height="5" rx=".8" fill="#ffc566"/><rect x="-19" y="${-13 + i * 6}" width="5" height="2.6" rx=".8" fill="#ffc566"/><rect x="14" y="${-13 + i * 6}" width="5" height="2.6" rx=".8" fill="#ffc566"/>`).join("");
    accIn = `<g transform="translate(90 68) rotate(-10)">${leads}<rect x="-15" y="-15" width="30" height="30" rx="3" fill="#1b1530" stroke="#4a3f86"/><rect x="-9" y="-9" width="18" height="18" rx="2" fill="#cfc6f5"/><rect x="-9" y="-9" width="18" height="18" rx="2" fill="url(#${k}p)" opacity=".85"/><path class="echo-glint" d="M-7 4 L4 -7" stroke="#fff" stroke-width="2.2" stroke-linecap="round"/><circle cx="-11" cy="-11" r="1.4" fill="#4a3f86"/></g>`;
    accDefs = `<linearGradient id="${k}p" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#4fd2ff"/><stop offset=".5" stop-color="#a08bff"/><stop offset="1" stop-color="#ffb23f"/></linearGradient>`;
    accExtra = `<g transform="translate(-8 70)"><rect x="-6" y="-4" width="12" height="8" rx="2" fill="#2fb87a"/><path d="M-3 0 L-1 2 L3 -2" stroke="#fff" stroke-width="1.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>`;
  } else if (acc === "bloom") {
    // a flower on Echo's head whose center is a fuel cell: petals around a glowing bolt
    const petals = [0, 60, 120, 180, 240, 300].map((a, i) => `<ellipse cx="0" cy="-8.5" rx="4.6" ry="7.6" transform="rotate(${a})" fill="${i % 2 ? "#ffb23f" : "#b8a6ff"}" stroke="#fff" stroke-opacity=".55" stroke-width=".6"/>`).join("");
    accIn = `<path d="M60 9 C62 2 64 -4 68 -9" stroke="#2fb87a" stroke-width="2.6" fill="none" stroke-linecap="round"/><path d="M62 2 C56 -1 54 -6 55 -9 C59 -8 62 -5 62 2 Z" fill="#2fb87a"/><g transform="translate(69 -14)">${petals}<circle r="6" fill="#211a32" stroke="#4fd2ff" stroke-width="1.2"/><circle class="echo-lamp" r="6" fill="#4fd2ff"/><path d="M1 -4 L-2.4 .6 H.6 L-1 4 L2.6 -.8 H-.4 Z" fill="#fff"/></g>`;
    accExtra = [[100, 44, 0], [104, 28, .6], [-8, 40, 1.2]].map(([x, y, d]) => `<text class="echo-z" style="animation-delay:${d}s" x="${x}" y="${y}" font-size="10" font-weight="800" fill="#4fd2ff">⚡</text>`).join("");
  } else if (acc === "waiter") {
    // a maître d' with a bow tie, serving a GPU on a tray: today's special, or tomorrow's value menu
    accIn = `<g transform="translate(50 50)"><path d="M0 0 L-9 -5 V5 Z M0 0 L9 -5 V5 Z" fill="#211a32" stroke="#ff6b80" stroke-width=".8" stroke-linejoin="round"/><circle r="2.2" fill="#ff6b80"/></g>` +
      `<g transform="translate(99 30)"><path d="M-1 4 L-4 26" stroke="#cfc6f5" stroke-width="1.6" stroke-linecap="round"/><ellipse cx="0" cy="4" rx="19" ry="3.4" fill="#e9e4f7" stroke="#b8a6ff"/><g transform="translate(0 -4)"><rect x="-14" y="-6" width="28" height="11" rx="1.6" fill="#211a32" stroke="#9b83ff"/><circle class="echo-spin" cx="-6.5" cy="-.5" r="3.6" fill="#30234d" stroke="#4fd2ff" stroke-width=".9"/><circle class="echo-spin" cx="6.5" cy="-.5" r="3.6" fill="#30234d" stroke="#4fd2ff" stroke-width=".9"/><path d="M-11 5 V7 M-7 5 V7 M-3 5 V7 M1 5 V7 M5 5 V7" stroke="#ffc566" stroke-width="1.2"/></g><g transform="translate(14 -16) rotate(12)"><rect x="-8" y="-5" width="16" height="10" rx="1.5" fill="#ffb23f"/><text x="0" y="2.6" text-anchor="middle" font-size="6.5" font-weight="900" fill="#211a32">$/hr</text></g></g>`;
  } else if (acc === "jet") {
    // a jetpack for orbit and a share certificate for the next deal
    accUnder = `<path class="echo-flame" d="M-4.5 70 Q.5 106 5.5 70 Z" fill="#ffb23f"/><path class="echo-flame" style="animation-delay:.12s" d="M94.5 70 Q99.5 106 104.5 70 Z" fill="#ffb23f"/><path class="echo-flame" d="M-2 70 Q.5 94 3 70 Z" fill="#fff4d6"/><path class="echo-flame" style="animation-delay:.12s" d="M97 70 Q99.5 94 102 70 Z" fill="#fff4d6"/><rect x="-6" y="40" width="13" height="34" rx="5" fill="#cfc6f5" stroke="#9b83ff"/><rect x="93" y="40" width="13" height="34" rx="5" fill="#cfc6f5" stroke="#9b83ff"/>`;
    accIn = `<g transform="translate(86 70) rotate(-12)"><rect x="-15" y="-10.5" width="30" height="21" rx="2" fill="#fbfaff" stroke="#ffb23f" stroke-width="1.3"/><rect x="-12" y="-7.5" width="24" height="15" rx="1" fill="none" stroke="#ffd98a" stroke-width=".8"/><text x="0" y="1.6" text-anchor="middle" font-size="7" font-weight="900" fill="#211a32">SPCX</text><path d="M-6 5 H6" stroke="#cfc6f5" stroke-width="1"/><path d="M11 -15 L15 -21 L19 -15 M15 -21 V-11" stroke="#2fb87a" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>`;
    accBack = spark(-10, 4, .5, "#fff", 0) + spark(112, 24, .45, "#fff", .6) + spark(110, 84, .55, "#ffd98a", 1.1);
  } else if (acc === "seat") {
    // Echo keeps the record (a database with a rules check) while an office chair beside it has a bite taken out
    accIn = `<g transform="translate(91 67) rotate(8)"><path d="M-12 -14 V12 A12 4.2 0 0 0 12 12 V-14 Z" fill="#fbfaff" stroke="#cfc6f5"/><path d="M-12 -5 A12 4.2 0 0 0 12 -5 M-12 4 A12 4.2 0 0 0 12 4" stroke="#ffb23f" stroke-width="1.6" fill="none"/><ellipse cy="-14" rx="12" ry="4.2" fill="#ffd98a" stroke="#d98a12" stroke-width=".8"/><circle class="echo-led" cx="-6" cy="0" r="1.3" fill="#4fd2ff"/><circle class="echo-led" style="animation-delay:.5s" cx="-6" cy="8.6" r="1.3" fill="#4fd2ff"/><g transform="translate(9 12)"><circle r="5.6" fill="#2fb87a" stroke="#fff" stroke-width="1"/><path d="M-2.6 0 L-.6 2 L2.8 -2" stroke="#fff" stroke-width="1.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g></g>`;
    accExtra = `<g transform="translate(-8 70)"><mask id="${k}m" maskUnits="userSpaceOnUse" x="-20" y="-34" width="40" height="52"><rect x="-20" y="-34" width="40" height="52" fill="#fff"/><circle cx="8.5" cy="-27" r="4.4" fill="#000"/><circle cx="10.5" cy="-20.5" r="3.8" fill="#000"/><circle cx="3.6" cy="-29.5" r="3.4" fill="#000"/></mask><g mask="url(#${k}m)"><rect x="-8" y="-30" width="16" height="18" rx="4" fill="#ff6b80"/><rect x="-1.4" y="-12" width="2.8" height="5" fill="#c94a5e"/><rect x="-11" y="-7.5" width="22" height="6" rx="3" fill="#ff8a9a"/></g><rect x="-1.3" y="-1.5" width="2.6" height="9" fill="#cfc6f5"/><path d="M-9 10 L0 7.5 L9 10" stroke="#cfc6f5" stroke-width="2" fill="none" stroke-linecap="round"/><circle cx="-9" cy="11.5" r="1.8" fill="#cfc6f5"/><circle cx="9" cy="11.5" r="1.8" fill="#cfc6f5"/><circle class="echo-bubble" cx="14" cy="-30" r="1.3" fill="#ff8a9a"/><circle class="echo-bubble" style="animation-delay:.8s" cx="17" cy="-24" r="1" fill="#ff8a9a"/></g>`;
  } else if (acc === "helmet") {
    accDefs = `<radialGradient id="${k}g" cx="50%" cy="45%" r="55%"><stop offset=".72" stop-color="#bfe9ff" stop-opacity="0"/><stop offset=".95" stop-color="#bfe9ff" stop-opacity=".26"/><stop offset="1" stop-color="#e8f8ff" stop-opacity=".5"/></radialGradient>`;
    accIn = `<circle cx="50" cy="50" r="60" fill="url(#${k}g)" stroke="#bfe9ff" stroke-opacity=".7" stroke-width="1.6"/><path class="echo-glint" d="M12 32 A46 46 0 0 1 38 7" stroke="#fff" stroke-width="3.6" fill="none" stroke-linecap="round"/>`;
    accBack = spark(-12, -12, .8, "#ffb23f", 0) + spark(112, 4, .6, "#fff", .4) + spark(118, 70, .7, "#4fd2ff", .8);
  } else if (acc === "qubit") {
    // a Bloch sphere in hand, its state arrow sweeping, and two entangled sparks orbiting the head
    accIn = `<g transform="translate(91 66)"><circle r="13" fill="#bfe9ff" fill-opacity=".18" stroke="#a6e9ff" stroke-width="1.2"/><ellipse rx="13" ry="4.2" fill="none" stroke="#a6e9ff" stroke-width=".9" stroke-dasharray="2 2"/><path d="M0 -13 V13" stroke="#a6e9ff" stroke-width=".7" opacity=".6"/><g class="echo-spin" style="animation-duration:3.2s"><circle r="13" fill="none"/><path d="M0 0 L7.5 -8.5" stroke="#ffd98a" stroke-width="2" stroke-linecap="round"/><circle cx="7.5" cy="-8.5" r="2.4" fill="#ffd98a"/></g><circle r="1.6" fill="#fff"/></g>`;
    accExtra = spark(4, -6, .55, "#4fd2ff", 0) + spark(98, -12, .5, "#ffd98a", .6) + `<ellipse cx="50" cy="-4" rx="40" ry="6" fill="none" stroke="#a6e9ff" stroke-opacity=".45" stroke-width=".8" stroke-dasharray="3 3"/>`;
  } else if (acc === "chain") {
    // a block from the whiteboard in each hand, linked by a chain: data, hash, previous hash
    const cube = (x, y, c) => `<g transform="translate(${x} ${y})"><path d="M-9 -4 L0 -9 L9 -4 L0 1 Z" fill="${c}" opacity=".95"/><path d="M-9 -4 V7 L0 12 V1 Z" fill="${c}" opacity=".7"/><path d="M9 -4 V7 L0 12 V1 Z" fill="${c}" opacity=".5"/><path d="M-9 -4 L0 1 L9 -4 M0 1 V12" stroke="#fff" stroke-opacity=".5" stroke-width=".6" fill="none"/></g>`;
    accIn = cube(93, 62, "#ffb23f") + `<path d="M84 70 Q70 86 52 84" stroke="#cfc6f5" stroke-width="2.2" fill="none" stroke-dasharray="5 3" stroke-linecap="round"/>`;
    accExtra = cube(-6, 66, "#4fd2ff") + `<path d="M3 72 Q18 88 40 86" stroke="#cfc6f5" stroke-width="2.2" fill="none" stroke-dasharray="5 3" stroke-linecap="round"/><text class="echo-z" x="98" y="40" font-size="8" font-weight="800" fill="#ffb23f">#</text><text class="echo-z" style="animation-delay:1.4s" x="-10" y="46" font-size="8" font-weight="800" fill="#4fd2ff">#</text>`;
  } else if (acc === "asic") {
    // a blueprint with a chip drawn on it and a pencil: the customer designs, the partner builds
    accIn = `<g transform="translate(88 66) rotate(-8)"><rect x="-17" y="-15" width="34" height="30" rx="2" fill="#1d3f74" stroke="#a6e9ff"/><path d="M-17 -7 H17 M-17 1 H17 M-17 9 H17 M-9 -15 V15 M-1 -15 V15 M7 -15 V15" stroke="#a6e9ff" stroke-opacity=".25" stroke-width=".6"/><rect x="-8" y="-7" width="16" height="14" rx="1.5" fill="none" stroke="#ffd98a" stroke-width="1.4"/><path d="M-11 -3 H-8 M-11 3 H-8 M8 -3 H11 M8 3 H11 M-3 -10 V-7 M3 -10 V-7 M-3 7 V10 M3 7 V10" stroke="#ffd98a" stroke-width="1.1"/><g class="echo-glint"><path d="M12 -20 L22 -30 L25 -27 L15 -17 Z" fill="#ffb23f"/><path d="M12 -20 L15 -17 L10 -15 Z" fill="#ffe7c2"/></g></g>`;
    accExtra = `<g transform="translate(-8 66)"><circle r="7" fill="none" stroke="#4fd2ff" stroke-width="1.6"/><path class="echo-spin" style="animation-duration:6s" d="M0 -10 V-6 M0 6 V10 M-10 0 H-6 M6 0 H10" stroke="#4fd2ff" stroke-width="1.6"/></g>`;
  } else if (acc === "tokens") {
    // a ticket roll of tokens, priced by the million
    const coin = (y, d) => `<g class="echo-stack" style="animation-delay:${d}s"><ellipse cx="0" cy="${y}" rx="9" ry="3.2" fill="#ffb23f" stroke="#d98a12" stroke-width=".7"/><text x="0" y="${y + 2}" text-anchor="middle" font-size="4.6" font-weight="900" fill="#211a32">TOK</text></g>`;
    accIn = `<g transform="translate(92 74)">${coin(0, 0)}${coin(-5, .12)}${coin(-10, .24)}${coin(-15, .36)}</g><g transform="translate(91 40) rotate(10)"><path d="M0 -4 V2" stroke="#cfc6f5" stroke-width="1.1"/><rect x="-13" y="2" width="26" height="12" rx="2" fill="#fbfaff" stroke="#cfc6f5"/><text x="0" y="10.6" text-anchor="middle" font-size="6.2" font-weight="900" fill="#211a32">$/M tok</text></g>`;
    accExtra = [[-12, 30, 0], [-6, 56, .6], [-14, 80, 1.2]].map(([x, y, d]) => `<text class="echo-z" style="animation-delay:${d}s" x="${x}" y="${y}" font-size="8" font-weight="800" fill="#ffb23f">tok</text>`).join("");
  } else if (acc === "factory") {
    // a little factory with a sawtooth roof, puffing word-pieces instead of smoke
    accIn = `<g transform="translate(90 70)"><path d="M-16 12 V-2 L-9 -7 V-2 L-2 -7 V-2 L5 -7 V-2 L12 -7 V12 Z" fill="#cfc6f5" stroke="#9b83ff" stroke-width=".9" stroke-linejoin="round"/><rect x="8" y="-20" width="5" height="16" fill="#9b83ff"/><rect x="-12" y="3" width="5" height="5" rx="1" fill="#4fd2ff" class="echo-led"/><rect x="-3" y="3" width="5" height="5" rx="1" fill="#4fd2ff" class="echo-led" style="animation-delay:.4s"/><rect x="5" y="3" width="5" height="9" rx="1" fill="#211a32"/></g>`;
    accExtra = [["Th", 104, 40, 0], ["ink", 98, 26, .9], ["ing", 108, 12, 1.8]].map(([w, x, y, d]) => `<text class="echo-z" style="animation-delay:${d}s" x="${x}" y="${y}" font-size="7.5" font-weight="800" fill="#ffd98a">${w}</text>`).join("");
  } else if (acc === "nametag") {
    // a "Hello, my name is" sticker reading H100
    accIn = `<g transform="translate(50 70) rotate(-6)"><rect x="-21" y="-12" width="42" height="25" rx="3" fill="#fff" stroke="#ff6b80" stroke-width="1"/><path d="M-21 -9 A3 3 0 0 1 -18 -12 H18 A3 3 0 0 1 21 -9 V-3 H-21 Z" fill="#ff6b80"/><text x="0" y="-5" text-anchor="middle" font-size="4.6" font-weight="900" fill="#fff" letter-spacing=".3">HELLO MY NAME IS</text><text x="0" y="9" text-anchor="middle" font-family="Big Shoulders Display, Arial Narrow, sans-serif" font-size="12" font-weight="900" fill="#211a32">H100</text></g>`;
    accExtra = spark(102, 30, .6, "#ffd98a", 0) + spark(-8, 40, .5, "#4fd2ff", .5);
  } else if (acc === "claw") {
    // a lobster claw for a hand and two antennae: an agent that grabs things
    accIn = `<path d="M38 3 C34 -8 26 -14 18 -16 M62 3 C66 -8 74 -14 82 -16" stroke="#ff6b80" stroke-width="2" fill="none" stroke-linecap="round"/><circle cx="18" cy="-16" r="2.4" fill="#ff6b80"/><circle cx="82" cy="-16" r="2.4" fill="#ff6b80"/>` +
      `<g transform="translate(92 66) rotate(-20)"><path d="M-6 6 C-10 -6 -6 -18 6 -20 C10 -12 8 -6 2 -4 C8 -2 12 2 10 8 C4 12 -2 10 -6 6 Z" fill="#ff6b80" stroke="#c94a5e" stroke-width=".9"/><path d="M2 -4 L8 -10" stroke="#c94a5e" stroke-width="1.4" stroke-linecap="round"/><circle cx="-1" cy="-9" r="1.4" fill="#fff" opacity=".7"/></g>`;
    accExtra = `<g transform="translate(-10 34)"><rect x="-8" y="-6" width="16" height="12" rx="4" fill="#4fd2ff"/><path d="M-4 6 L-6 10 L0 6" fill="#4fd2ff"/><circle cx="-3.5" cy="0" r="1.1" fill="#211a32"/><circle cx="0" cy="0" r="1.1" fill="#211a32"/><circle cx="3.5" cy="0" r="1.1" fill="#211a32"/></g>`;
  } else if (acc === "baton") {
    // a relay baton in hand and a stopwatch: a race you hand off, and keep timing
    accIn = `<g transform="translate(92 64) rotate(-35)"><rect x="-4" y="-16" width="8" height="32" rx="4" fill="#ffb23f" stroke="#d98a12" stroke-width=".8"/><path d="M-4 -6 H4 M-4 6 H4" stroke="#fff" stroke-opacity=".7" stroke-width="1.4"/></g>`;
    accExtra = `<g transform="translate(-8 60)"><rect x="-2" y="-14" width="4" height="4" rx="1" fill="#cfc6f5"/><circle r="9" fill="#fbfaff" stroke="#9b83ff" stroke-width="1.4"/><g class="echo-spin" style="animation-duration:2s"><circle r="6.5" fill="none"/><path d="M0 0 V-6.5" stroke="#ff6b80" stroke-width="1.4" stroke-linecap="round"/></g><circle r="1.3" fill="#211a32"/></g>`;
  } else if (acc === "patch") {
    // a chip with a bandage on it (silicon can only be worked around) and a bug slinking off
    accIn = `<g transform="translate(90 68) rotate(-10)"><rect x="-13" y="-13" width="26" height="26" rx="2.5" fill="#1b1530" stroke="#4a3f86"/>${[-8, -2, 4].map(v => `<rect x="${v}" y="-16" width="2.4" height="3" fill="#ffc566"/><rect x="${v}" y="13" width="2.4" height="3" fill="#ffc566"/>`).join("")}<g transform="rotate(-38)"><rect x="-15" y="-4.5" width="30" height="9" rx="4.5" fill="#ffd9b8" stroke="#d9a072" stroke-width=".6"/><rect x="-4.5" y="-4.5" width="9" height="9" fill="#f2c096"/><circle cx="-10" cy="-1.5" r=".7" fill="#d9a072"/><circle cx="-8" cy="1.5" r=".7" fill="#d9a072"/><circle cx="8" cy="-1.5" r=".7" fill="#d9a072"/><circle cx="10" cy="1.5" r=".7" fill="#d9a072"/></g></g>`;
    accExtra = `<g transform="translate(-8 74)"><g class="echo-speed" style="animation-duration:1.4s"><ellipse rx="6" ry="4.4" fill="#2fb87a"/><circle cx="6" cy="0" r="2.6" fill="#2fb87a"/><path d="M-4 -4 L-6 -8 M0 -4 L0 -8 M4 -4 L6 -8 M-4 4 L-6 8 M0 4 L0 8 M4 4 L6 8 M8 -1 L11 -4 M8 1 L11 4" stroke="#2fb87a" stroke-width="1" stroke-linecap="round"/></g></g>`;
  }
  let extras = "";
  if (pose === "cheer") extras = spark(-6, 8, 1, "#4fd2ff", 0) + spark(104, 2, .9, "#fff", .18) + spark(-12, 46, .7, "#b8a6ff", .36) + spark(110, 40, .8, "#ffb23f", .54);
  if (pose === "run" && acc !== "camper") extras = `<rect class="echo-speed" x="-22" y="44" width="16" height="2.6" rx="1.3" fill="#4fd2ff"/><rect class="echo-speed" style="animation-delay:.12s" x="-19" y="60" width="13" height="2.6" rx="1.3" fill="#4fd2ff"/><rect class="echo-speed" style="animation-delay:.24s" x="-16" y="76" width="10" height="2.6" rx="1.3" fill="#4fd2ff"/>`;
  if (pose === "dance") extras = `<text class="echo-note" x="100" y="10" font-size="14" fill="#4fd2ff">♪</text><text class="echo-note" style="animation-delay:.5s" x="-14" y="22" font-size="12" fill="#b8a6ff">♫</text>`;
  if (pose === "swim" && acc !== "helmet") extras = `<circle class="echo-bubble" cx="94" cy="30" r="3" fill="none" stroke="#a6e9ff" stroke-width=".9"/><circle class="echo-bubble" style="animation-delay:.6s" cx="100" cy="12" r="2" fill="none" stroke="#a6e9ff" stroke-width=".9"/><circle class="echo-bubble" style="animation-delay:1.2s" cx="90" cy="0" r="1.6" fill="none" stroke="#a6e9ff" stroke-width=".9"/>`;
  if (sleep) extras = `<text class="echo-z" x="92" y="6" font-size="11" font-weight="800" fill="#b8a6ff">z</text><text class="echo-z" style="animation-delay:1.1s" x="100" y="-6" font-size="8" font-weight="800" fill="#b8a6ff">z</text>`;
  if (bare) { accExtra = ""; extras = ""; }
  const a11y = label ? `role="img" aria-label="${label}"` : `aria-hidden="true" focusable="false"`;
  return `<svg class="echo echo-${pose}" viewBox="-16 -22 132 138" xmlns="http://www.w3.org/2000/svg" ${a11y}><defs><radialGradient id="${k}b" cx="35%" cy="18%" r="85%"><stop offset="0" stop-color="#b7a6ff"/><stop offset=".5" stop-color="#8f76ff"/><stop offset="1" stop-color="#6c4ff2"/></radialGradient><radialGradient id="${k}w" cx="50%" cy="45%" r="62%"><stop offset="0" stop-color="#fff"/><stop offset=".75" stop-color="#f7f4ff"/><stop offset="1" stop-color="#e6dfff"/></radialGradient><linearGradient id="${k}f" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#efeaff"/><stop offset="1" stop-color="#d6c9ff"/></linearGradient><radialGradient id="${k}n" cx="30%" cy="30%" r="90%"><stop offset="0" stop-color="#9d86ff"/><stop offset="1" stop-color="#6547ec"/></radialGradient>${accDefs}</defs>${accBack}${dangle || bare ? "" : `<ellipse class="echo-shadow" cx="50" cy="110.5" rx="36" ry="3.2" fill="#000" opacity=".22"/>`}<g class="echo-all">${accUnder}<path class="echo-fin-l" d="${finL}" fill="url(#${k}n)"/><path class="echo-fin-r" d="${finR}" fill="url(#${k}n)"/><path d="M6 34 C6 12 26 0.5 50 0.5 C74 0.5 94 12 94 34 L93.5 84 C93.5 92 80 95 50 95 C20 95 6.5 92 6.5 84 Z" fill="url(#${k}b)"/><path d="M7.6 40.5 H10.4 M7.6 43.6 H10.4 M89.6 40.5 H92.4 M89.6 43.6 H92.4" stroke="#4f33c8" stroke-width=".9" stroke-linecap="round" opacity=".7"/>${dangle ? `<ellipse class="echo-foot-l" cx="31" cy="106" rx="12.5" ry="13.5" fill="url(#${k}f)" stroke="#6c4ff2" stroke-opacity=".55" stroke-width="1.2"/><ellipse class="echo-foot-r" cx="69" cy="106" rx="12.5" ry="13.5" fill="url(#${k}f)" stroke="#6c4ff2" stroke-opacity=".55" stroke-width="1.2"/>` : `<ellipse class="echo-foot-l" cx="29.5" cy="98" rx="20.5" ry="12.5" fill="url(#${k}f)"/><ellipse class="echo-foot-r" cx="70.5" cy="98" rx="20.5" ry="12.5" fill="url(#${k}f)"/>`}<path d="M12.5 34 C12 14 24 3.2 50 3.2 C76 3.2 88 14 87.5 34 L87.5 80 C84 94 64 102.5 50 102.5 C36 102.5 16 94 12.5 80 Z" fill="url(#${k}w)"/><path d="M12.5 80 C16 94 36 102.5 50 102.5 C64 102.5 84 94 87.5 80" stroke="#ddd3fb" stroke-width="1.2" fill="none" stroke-linecap="round"/><ellipse cx="40.5" cy="6.6" rx="1.2" ry=".85" fill="#d5cbf7"/><ellipse cx="59.5" cy="6.6" rx="1.2" ry=".85" fill="#d5cbf7"/>${sleep ? VISOR_SLEEP : VISOR_AWAKE}<g class="echo-eyes">${sleep ? EYES_SHUT : EYES_OPEN}</g>${accIn}</g>${accExtra}${extras}</svg>`;
}

function mountEchoes(root = document) {
  $$("[data-echo]", root).forEach(el => {
    const tpl = document.createElement("template");
    tpl.innerHTML = echo({ pose: el.dataset.echo, acc: el.dataset.acc || null, label: el.dataset.label || "" }).trim();
    const svg = tpl.content.firstElementChild;
    el.classList.forEach(c => svg.classList.add(c));
    el.replaceWith(svg);
  });
}

/* ---------------------------------------------------------------- map data */
// Lower-48 outline (Natural Earth, public domain), Albers equal-area, fit to 440 units wide
const US48 = "M383 51 407 45 407 42 411 41 413 34 413 25 416 16 419 18 423 15 427 16 431 30 434 31 435 34 438 34 440 38 434 44 430 44 431 47 428 47 428 44 427 50 424 53 423 52 423 54 421 54 420 56 418 66 420 68 418 72 420 72 424 77 427 75 425 73 428 76 423 79 422 78 419 81 418 78 416 78 417 83 406 86 399 94 398 89 399 92 398 97 400 98 401 104 400 102 397 114 396 115 396 112 390 110 390 107 392 104 389 108 396 120 392 135 393 126 391 126 390 122 389 124 387 122 386 121 388 120 385 120 386 118 385 117 385 114 387 110 386 110 384 114 382 114 386 123 383 122 387 126 381 123 379 124 379 119 378 122 379 125 388 128 386 131 380 127 389 133 388 135 385 133 389 136 389 138 386 136 381 136 386 136 388 139 392 138 398 149 393 140 395 146 392 145 393 146 389 148 387 146 388 149 394 148 394 151 395 148 396 149 394 155 386 154 391 156 390 159 387 158 388 159 393 159 393 160 386 164 385 163 386 165 382 172 381 170 382 173 375 176 373 182 372 180 372 183 367 188 367 189 361 192 363 192 362 194 360 193 361 195 358 199 357 205 356 211 360 221 369 234 371 240 368 234 368 236 366 232 367 235 377 251 378 261 376 267 370 270 369 268 371 268 366 263 361 260 359 257 360 255 358 256 358 252 355 253 350 247 353 243 350 242 351 245 349 244 349 233 338 223 332 222 332 224 323 227 319 223 320 221 318 223 312 221 315 221 314 220 305 222 307 220 305 222 298 224 300 223 298 219 297 223 290 223 284 226 279 224 277 225 276 227 278 228 282 226 282 228 283 229 285 227 286 229 283 232 290 236 286 238 286 236 279 233 280 235 279 238 277 236 274 238 268 236 270 236 269 233 266 233 263 231 259 234 251 232 245 232 245 230 244 233 236 236 238 234 236 234 236 232 234 233 235 236 231 241 223 246 225 244 219 243 221 246 214 249 215 251 211 253 213 254 211 258 208 256 211 259 211 267 214 272 211 273 203 271 195 267 192 260 191 255 175 231 166 229 157 238 147 231 143 220 131 206 115 204 114 208 89 205 58 186 59 184 38 182 37 173 32 167 30 166 29 163 13 153 14 147 8 132 10 127 6 122 6 118 7 116 9 120 9 114 15 115 9 112 7 115 3 112 5 110 1 101 2 92 0 85 6 74 6 59 12 51 21 26 26 28 21 25 23 21 22 19 24 18 22 18 23 2 27 6 35 9 35 12 31 16 32 16 32 15 36 11 34 18 33 18 33 17 31 18 33 19 36 17 39 11 37 9 38 8 37 6 39 4 38 0 91 13 148 22 220 27 231 27 231 23 232 23 234 29 241 31 246 30 250 34 253 33 257 36 261 34 271 35 262 40 253 49 254 50 262 47 262 51 266 51 278 43 280 47 281 46 285 46 288 50 293 50 297 47 305 45 305 48 310 48 314 53 309 53 308 55 302 53 297 55 294 59 295 56 292 58 291 56 285 70 285 71 288 68 290 68 287 85 289 96 293 102 298 99 300 94 300 87 297 75 299 66 303 62 303 67 304 61 307 60 306 58 306 56 312 57 319 61 321 69 317 76 319 77 324 72 326 73 329 86 328 88 327 87 323 97 330 99 327 100 331 100 337 98 353 86 357 80 355 76 361 73 371 73 375 69 374 65 376 64 373 63 380 53Z";
// Stargate's US sites per Epoch AI (April 2026): name, map x, map y, planned GW, label offset and anchor
const STARGATE = [
  ["Abilene, TX", 191.4, 202.8, 1.2, -10, -18, "end", "1.2 GW · 0.3 live"],
  ["Shackelford Co., TX", 195.3, 199.9, 2.0, 12, -22, "start"],
  ["Milam Co., TX", 215.6, 222.6, 1.2, 13, 14, "start"],
  ["Doña Ana Co., NM", 129.2, 204.4, 2.2, 0, 24, "middle"],
  ["Port Washington, WI", 287.1, 83.3, 1.3, -12, -4, "end"],
  ["Saline Twp., MI", 320.2, 92.9, 1.4, 4, -24, "start"],
  ["Lordstown, OH", 344.5, 100.2, 0.3, 12, 12, "start", "under 0.3 GW"]
];

/* ---------------------------------------------------------------- visuals */
const VIZ = {
  automate() {
    const nodes = [[200, 72, "Agents"], [311, 264, "AI research"], [89, 264, "Better models"]];
    const tx = t => 40 + (t - 2024.2) * (320 / 4.2);
    return `<div class="viz" data-step="1">
      <div class="frame f1"><svg viewBox="0 0 400 400" role="img" aria-label="A loop: agents run AI research, which produces better models, which become better agents.">
        <circle class="v-ring" cx="200" cy="200" r="130"/>
        <circle class="v-run" cx="200" cy="200" r="130" transform="rotate(-90 200 200)"/>
        ${nodes.map(([x, y, l]) => `<g class="v-node"><circle cx="${x}" cy="${y}" r="56"/><text x="${x}" y="${y + 6}">${l}</text></g>`).join("")}
        <text x="200" y="196" text-anchor="middle" class="t-strong" font-size="22">Automate</text>
        <text x="200" y="222" text-anchor="middle" font-size="17">one job</text>
      </svg><p class="cap">Aschenbrenner’s shortcut: automate the one job whose output improves every other job.</p></div>
      <div class="frame f2"><div class="ratio" role="img" aria-label="3.1 agent-workdays for every human workday">
        <div class="r-row"><span class="r-l">Human workdays</span><div class="r-blocks"><i class="h">8h</i></div></div>
        <div class="r-row"><span class="r-l">Agent workdays</span><div class="r-blocks"><i>8h</i><i>8h</i><i>8h</i><i class="sliver"></i></div></div>
        <p class="r-big">3.1 : 1</p>
      </div><p class="cap">OpenAI’s research org, mid-August 2026. Each block is an eight-hour workday; agent days are machine runtime.</p></div>
      <div class="frame f3"><svg viewBox="0 0 400 270" role="img" aria-label="Timeline from Situational Awareness in June 2024 to an automated research intern in September 2026 to a targeted automated AI researcher in March 2028.">
        <line class="ax" x1="30" y1="135" x2="372" y2="135"/>
        ${[2025, 2026, 2027, 2028].map(y => `<line class="ax" x1="${tx(y)}" y1="130" x2="${tx(y)}" y2="140"/><text x="${tx(y)}" y="158" text-anchor="middle" font-size="13">${y}</text>`).join("")}
        <circle cx="${tx(2024.42)}" cy="135" r="7" fill="var(--paper)"/>
        <text x="40" y="96" class="t-strong" font-size="17">Jun 2024</text><text x="40" y="116" font-size="15">Situational Awareness</text>
        <circle cx="${tx(2026.67)}" cy="135" r="10" fill="var(--beat)" style="filter:drop-shadow(0 0 8px var(--beat))"/>
        <text x="${tx(2026.67)}" y="196" text-anchor="middle" class="t-strong" font-size="17">Sep 2026</text><text x="${tx(2026.67)}" y="216" text-anchor="middle" font-size="15">Automated research intern</text><text x="${tx(2026.67)}" y="236" text-anchor="middle" font-size="15" style="fill:var(--beat)">Reached</text>
        <circle cx="${tx(2028.17)}" cy="135" r="10" fill="var(--ink)" stroke="var(--beat)" stroke-width="2" stroke-dasharray="4 3"/>
        <text x="372" y="76" text-anchor="end" class="t-strong" font-size="17">Mar 2028</text><text x="372" y="96" text-anchor="end" font-size="15">Automated AI researcher</text><text x="372" y="116" text-anchor="end" font-size="15" style="fill:var(--beat)">Target</text>
      </svg><p class="cap">OpenAI’s stated milestones, September 6, 2026.</p></div>
    </div>`;
  },

  molecules() {
    const X = t => 60 + (t - 2026) * 86;
    const nodes = [[50, "Gas well", "amber"], [155, "Turbine", "coral"], [260, "Transformer", "coral"], [365, "Substation", "coral"], [470, "Rack", "beat"]];
    const icon = i => [
      `<path d="M-11 14 L0 -14 L11 14 M-7 3 H7 M-4 -5 H4"/>`,
      `<circle r="12"/><path d="M0 0 L0 -11 M0 0 L9.5 5.5 M0 0 L-9.5 5.5"/>`,
      `<circle cx="-5" r="8"/><circle cx="5" r="8"/>`,
      `<path d="M-12 13 V-6 M12 13 V-6 M-12 -6 H12 M-12 4 H12 M-6 -13 V-6 M6 -13 V-6"/>`,
      `<rect x="-10" y="-14" width="20" height="28"/><path d="M-6 -7 H6 M-6 0 H6 M-6 7 H6"/>`
    ][i];
    return `<div class="viz" data-step="1">
      <div class="frame f1"><svg viewBox="0 0 520 280" role="img" aria-label="A field of 1,200 dots, one per well, fills in under a year of drilling, next to a nodding pump jack.">
        <defs><pattern class="ml-pat" id="mlWell" x="24" y="70" width="6.4" height="6.4" patternUnits="userSpaceOnUse"><circle cx="3.2" cy="3.2" r="2"/></pattern><clipPath id="mlClip"><rect class="ml-reveal" x="24" y="70" width="256" height="192"/></clipPath></defs>
        <text x="24" y="32" class="t-strong" font-size="17">Drill the gas: ~1,200 wells</text>
        <text x="24" y="52" font-size="13">One dot per well</text>
        <rect x="24" y="70" width="256" height="192" fill="url(#mlWell)" class="ml-ghost"/>
        <rect x="24" y="70" width="256" height="192" fill="url(#mlWell)" class="ml-done" clip-path="url(#mlClip)"/>
        <g class="ml-jack" transform="translate(402 150)">
          <line x1="-58" y1="0" x2="58" y2="0" class="ml-ground"/>
          <path d="M-16 0 L0 -58 L16 0 M-9 -26 H9" class="ml-frame"/>
          <path d="M-64 -46 V0 M-70 0 H-58 V-8 H-70 Z" class="ml-rod"/>
          <g class="ml-beam" style="transform-origin:0px -58px"><rect x="-56" y="-62" width="104" height="8" rx="2"/><path d="M-56 -66 C-72 -60 -72 -42 -62 -38 L-56 -46 C-60 -50 -60 -56 -54 -58 Z"/><circle cx="0" cy="-58" r="3.5" class="ml-pin"/></g>
          <line x1="44" y1="-54" x2="40" y2="-22" class="ml-frame"/>
          <g class="ml-crank" style="transform-origin:40px -22px"><circle cx="40" cy="-22" r="11"/><rect x="36" y="-38" width="8" height="16" rx="2"/></g>
        </g>
        <text x="312" y="204" class="ml-big">1,200</text><text x="430" y="204" font-size="15" class="t-strong">wells</text>
        <line x1="312" y1="232" x2="500" y2="232" class="ml-track"/>
        <line x1="312" y1="232" x2="${(312 + 188 * 11 / 12).toFixed(1)}" y2="232" class="ml-fill"/>
        <text x="312" y="252" font-size="12">0</text><text x="500" y="252" text-anchor="end" font-size="12">12 months</text>
        <text x="${(312 + 188 * 11 / 12).toFixed(1)}" y="222" text-anchor="end" font-size="13" class="ml-under">under a year</text>
      </svg><p class="cap">Fuel: about 1,200 new wells, under a year of drilling, could supply 100 GW (Aschenbrenner, 2024).</p></div>
      <div class="frame f2"><svg viewBox="0 0 520 280" role="img" aria-label="A conveyor line of gas turbines waiting their turn. An order placed now gets a slot around 2031, while the fuel is drilled in under a year.">
        <text x="24" y="32" class="t-strong" font-size="17">Gas turbine delivery slot</text>
        <text x="24" y="52" font-size="13">GE Vernova’s backlog: 116 GW</text>
        <g transform="translate(318 18)" class="ml-fuel"><rect width="182" height="28" rx="14"/><path d="M14 14 l4 4 l8 -9" fill="none" stroke="var(--amber)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><text x="34" y="18.5" font-size="12.5" class="t-strong">Fuel: drilled in under a year</text></g>
        <path d="M${X(2026.75)} 104 V96 H${X(2031) + 2} V104" fill="none" stroke="var(--coral)" stroke-width="1.5"/>
        <text x="${(X(2026.75) + X(2031)) / 2}" y="88" text-anchor="middle" font-size="14" class="t-strong ml-wait">about five years in line</text>
        <rect x="40" y="186" width="466" height="16" rx="8" class="ml-belt"/>
        <line x1="48" y1="194" x2="498" y2="194" class="ml-roll"/>
        <line x1="40" y1="112" x2="40" y2="230" class="ml-dock"/><text x="46" y="122" font-size="12" class="ml-now">now</text><text x="46" y="136" font-size="12" class="ml-now">shipping</text>
        ${Array.from({ length: 11 }, (_, i) => { const x = 86 + i * 39.4, me = i === 10; return `<g transform="translate(${x.toFixed(1)} 172)"><g class="ml-tb${me ? " me" : ""}" style="--d:${(i * .12).toFixed(2)}s"><path d="M-13 -6 L8 -8.5 L15 -4.5 V4.5 L8 8.5 L-13 6 Z"/><ellipse cx="-13" cy="0" rx="3.2" ry="8"/><path d="M-4 -7 V7 M3 -8 V8" class="ml-fan"/><rect x="-11" y="9" width="22" height="4" rx="1"/></g></g>`; }).join("")}
        <g transform="translate(${(86 + 10 * 39.4 - 30).toFixed(1)} 118)"><g class="ml-ticket"><path d="M0 0 H60 V12 a4 4 0 0 0 0 8 V32 H0 V20 a4 4 0 0 0 0 -8 Z"/><text x="30" y="13" text-anchor="middle" font-size="9" class="ml-tk-k">YOUR SLOT</text><text x="30" y="27" text-anchor="middle" font-size="13" class="ml-tk-v">2031</text></g></g>
        <line class="ax" x1="60" y1="236" x2="500" y2="236"/>
        ${[2026, 2027, 2028, 2029, 2030, 2031].map(y => `<line class="ax" x1="${X(y)}" y1="232" x2="${X(y)}" y2="240"/><text x="${X(y)}" y="258" text-anchor="middle" font-size="13">${y}</text>`).join("")}
      </svg><p class="cap">Machines: GE Vernova’s gas turbine backlog hit 116 GW in Q2 2026, and it’s taking reservations for 2031.</p></div>
      <div class="frame f3"><svg viewBox="0 0 520 240" role="img" aria-label="Chain from gas well to turbine, transformer, substation and rack. The queue sits in the middle three.">
        <path d="M110 58 V46 H410 V58" fill="none" stroke="var(--coral)" stroke-width="1.5"/><text x="260" y="36" text-anchor="middle" font-size="16" style="fill:var(--coral);font-weight:700">the queue lives here</text>
        <line class="ax" x1="50" y1="120" x2="470" y2="120"/>
        ${nodes.map(([x, l, c], i) => `<g transform="translate(${x} 120)"><circle r="36" fill="var(--ink-2)" stroke="var(--${c})" stroke-width="2"/><g fill="none" stroke="var(--${c})" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${icon(i)}</g></g><text x="${x}" y="182" text-anchor="middle" font-size="16" class="t-strong">${l}</text>`).join("")}
        ${[0, .5, 1, 1.5].map(d => `<circle class="flow-dot" cx="86" cy="120" r="5" style="--to:24px;animation-delay:${d}s"/>`).join("")}
      </svg><p class="cap">Where the queue lives: between the molecule and the rack.</p></div>
    </div>`;
  },

  fleet() {
    const Y = L => 300 - (L - 1) * 62, X = yr => 96 + (yr - 2022) * 42;
    const ladder = [[2022, 1], [2024, 2], [2026, 3], [2028, 4], [2030, 5]];
    const labels = ["10 MW", "100 MW", "1 GW", "10 GW", "100 GW"];
    const live = Math.log10(300), plan = Math.log10(1200);
    // slides 2 and 3: Stargate's seven sites on a dot map of the lower 48
    const MS = .92, MX = 28, MY = 40;
    const S = STARGATE.map(([name, x, y, gw, dx, dy, anchor, note]) => ({ name, gw, dx, dy, anchor, note, x: MX + x * MS, y: MY + y * MS }));
    const usMap = id => `<defs><pattern class="fl-pat" id="${id}d" width="8" height="13.86" patternUnits="userSpaceOnUse"><circle cx="4" cy="3.46" r="1.3"/><circle cx="0" cy="10.39" r="1.3"/><circle cx="8" cy="10.39" r="1.3"/></pattern><clipPath id="${id}c"><path d="${US48}" transform="translate(${MX} ${MY}) scale(${MS})"/></clipPath></defs>
        <path class="fl-land" d="${US48}" transform="translate(${MX} ${MY}) scale(${MS})"/>
        <rect class="fl-dots" x="${MX - 4}" y="${MY - 4}" width="412" height="262" fill="url(#${id}d)" clip-path="url(#${id}c)"/>`;
    const siteMark = (s, i, cls) => `<g transform="translate(${s.x.toFixed(1)} ${s.y.toFixed(1)})"><g class="fl-site ${cls}" style="--d:${(0.55 + i * 0.12).toFixed(2)}s"><circle class="fl-halo" r="${(6.5 * Math.sqrt(s.gw)).toFixed(1)}"/><circle class="fl-core${i === 0 ? " live" : ""}" r="3.4"/></g></g>`;
    const siteLabel = (s, i) => { const x = s.x + s.dx, y = s.y + s.dy; return `<g class="fl-lab" style="--d:${(0.9 + i * 0.12).toFixed(2)}s"><text x="${x.toFixed(1)}" y="${y.toFixed(1)}" text-anchor="${s.anchor}" class="t-strong" font-size="11.5">${s.name}</text><text x="${x.toFixed(1)}" y="${(y + 12).toFixed(1)}" text-anchor="${s.anchor}" font-size="11" class="fl-gw">${s.note || s.gw.toFixed(1) + " GW"}</text></g>`; };
    const total = S.reduce((a, s) => a + s.gw, 0);
    let bx = 20;
    const strip = [...S].sort((a, b) => b.gw - a.gw).map(s => { const w = s.gw / total * 420, x = bx; bx += w; return `<rect x="${(x + .6).toFixed(1)}" y="314" width="${(w - 1.2).toFixed(1)}" height="9" rx="1.5" class="fl-seg"/>${s.name.startsWith("Abilene") ? `<rect x="${(x + .6).toFixed(1)}" y="314" width="${(.3 / total * 420).toFixed(1)}" height="9" rx="1.5" fill="var(--beat)"/>` : ""}`; }).join("");
    const curve = (a, b, k) => { const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2; return `M${a.x.toFixed(1)} ${a.y.toFixed(1)} Q${(mx + (b.y - a.y) * k).toFixed(1)} ${(my - (b.x - a.x) * k).toFixed(1)} ${b.x.toFixed(1)} ${b.y.toFixed(1)}`; };
    // fiber between sites, always drawn west to east so every arc bows north
    const LINKS = [[3, 0, .3], [0, 2, .3], [1, 4, .14], [2, 5, .16], [4, 5, .4], [5, 6, .5], [2, 6, .12], [3, 4, .12]].map(([a, b, k]) => curve(S[a], S[b], k));
    const PKT = [[0, 2.6, 0, "t"], [2, 3.4, -1.1, "t"], [3, 3.2, -2.2, "s"], [5, 1.8, -.6, "s"], [6, 3.6, -1.7, "t"], [7, 4.2, -3, "s"], [1, 2.2, -1.4, "s"]];
    const chips = [["Placed by power", `<path d="M2 -6 L-3 1 H1 L-1 6 L4 -1 H0 Z" fill="var(--amber)"/>`], ["Linked by fiber", `<path d="M-6 0 Q-3 -5 0 0 T6 0" fill="none" stroke="var(--beat)" stroke-width="1.8" stroke-linecap="round"/>`], ["Scheduled by software", `<rect x="-5" y="-5" width="10" height="10" rx="2" fill="none" stroke="var(--paper)" stroke-width="1.5"/><path d="M-2 -7.5 V-5 M2 -7.5 V-5 M-2 5 V7.5 M2 5 V7.5 M-7.5 -2 H-5 M-7.5 2 H-5 M5 -2 H7.5 M5 2 H7.5" stroke="var(--paper)" stroke-width="1.2"/>`]];
    const jobs = [["TRAIN", "shard 14 → Doña Ana, NM"], ["SERVE", "agents → Saline Twp., MI"], ["SYNC", "weights → Port Washington"]];
    return `<div class="viz" data-step="1">
      <div class="frame f1"><svg viewBox="0 0 460 396" role="img" aria-label="Log-scale ladder of cluster power from 10 megawatts in 2022 to 100 gigawatts in 2030, with Stargate Abilene at 0.3 gigawatts live and 1.2 planned in April 2026.">
        ${labels.map((l, i) => `<line class="gridl" x1="88" y1="${Y(i + 1)}" x2="450" y2="${Y(i + 1)}"/><text x="80" y="${Y(i + 1) + 5}" text-anchor="end" font-size="14">${l}</text>`).join("")}
        <polyline points="${ladder.map(([y, L]) => `${X(y)},${Y(L)}`).join(" ")}" fill="none" stroke="var(--paper)" stroke-width="1.5" stroke-dasharray="5 5" opacity=".7"/>
        ${ladder.map(([y, L]) => `<circle cx="${X(y)}" cy="${Y(L)}" r="6" fill="var(--paper)"/><text x="${X(y)}" y="330" text-anchor="middle" font-size="14">${y}</text>`).join("")}
        <text x="${X(2030) - 14}" y="${Y(5) + 5}" text-anchor="end" font-size="14">more than 20% of US power</text>
        <line x1="${X(2026.29)}" y1="${Y(live)}" x2="${X(2026.29)}" y2="${Y(plan)}" stroke="var(--beat)" stroke-width="1.5"/>
        <circle cx="${X(2026.29)}" cy="${Y(live)}" r="7" fill="var(--beat)"/>
        <circle cx="${X(2026.29)}" cy="${Y(plan)}" r="7" fill="var(--ink)" stroke="var(--beat)" stroke-width="2" stroke-dasharray="3 3"/>
        <text x="${X(2026.29) + 14}" y="${Y(live) + 5}" font-size="14" style="fill:var(--beat)">Abilene live, Apr 2026: 0.3 GW</text>
        <text x="${X(2026.29) + 14}" y="${Y(plan) + 18}" font-size="14" style="fill:var(--beat)">planned: 1.2 GW</text>
        <g transform="translate(96 360)"><line x1="0" y1="0" x2="22" y2="0" stroke="var(--paper)" stroke-dasharray="5 4"/><text x="30" y="5" font-size="14">Aschenbrenner’s ladder (2024)</text><circle cx="11" cy="22" r="5" fill="var(--beat)"/><text x="30" y="27" font-size="14">Stargate Abilene (Epoch AI)</text></g>
      </svg><p class="cap">One cluster per rung, ten times bigger every two years (dashed). Abilene in April 2026, per Epoch AI (blue).</p></div>
      <div class="frame f2"><svg viewBox="0 0 460 336" role="img" aria-label="Map of Stargate’s seven US sites: Abilene, Shackelford County and Milam County in Texas, Doña Ana County in New Mexico, Port Washington in Wisconsin, Saline Township in Michigan and Lordstown in Ohio, with over 9 GW planned in total.">
        ${usMap("fl2")}
        <text x="20" y="22" class="t-strong" font-size="17">Not one 100 GW campus. Seven sites.</text>
        <g class="fl-ghost" style="transform-origin:${S[0].x.toFixed(1)}px ${S[0].y.toFixed(1)}px"><circle cx="${S[0].x.toFixed(1)}" cy="${S[0].y.toFixed(1)}" r="150"/></g>
        ${S.map((s, i) => siteMark(s, i, "pop")).join("")}
        ${S.map(siteLabel).join("")}
        <text x="20" y="306" class="t-strong" font-size="12">9+ GW planned across the seven</text>
        <g transform="translate(440 302)"><circle cx="-128" cy="0" r="3.4" fill="var(--beat)"/><text x="-120" y="4" font-size="11.5">live today</text><circle cx="-56" cy="0" r="3.4" fill="var(--amber)"/><text x="-48" y="4" font-size="11.5">planned</text></g>
        ${strip}
      </svg><p class="cap">Stargate today, per Epoch AI (Apr 2026): seven US sites, 9+ GW planned by 2029. OpenAI moved Abilene’s extra 2.1 GW to other sites.</p></div>
      <div class="frame f3"><svg viewBox="0 0 460 346" role="img" aria-label="The same seven sites linked by long-haul fiber, with training and inference jobs flowing between them and a scheduler routing work by power.">
        ${usMap("fl3")}
        <text x="20" y="22" class="t-strong" font-size="17">One fleet, scheduled like one computer</text>
        ${LINKS.map((d, i) => `<path class="fl-fiber" d="${d}"/><path class="fl-fiber-glow" d="${d}" style="animation-delay:${(i * -.35).toFixed(2)}s"/>`).join("")}
        ${S.map((s, i) => siteMark(s, i, "glow")).join("")}
        ${PKT.map(([l, dur, begin, kind]) => `<circle r="2.8" class="fl-pkt ${kind}"><animateMotion dur="${dur}s" begin="${begin}s" repeatCount="indefinite" path="${LINKS[l]}"/></circle>`).join("")}
        <g transform="translate(12 252)"><rect width="164" height="62" rx="6" class="fl-card"/><text x="10" y="15" font-size="9.5" class="fl-k">FLEET SCHEDULER</text><rect class="fl-hl" x="5" y="20" width="154" height="13" rx="3"/>${jobs.map(([k, v], i) => `<text x="10" y="${30 + i * 13}" font-size="9.5" class="fl-tag ${k.toLowerCase()}">${k}</text><text x="44" y="${30 + i * 13}" font-size="10" class="t-strong">${v}</text>`).join("")}</g>
        ${chips.map(([l, ic], i) => `<g class="fl-chip" style="--cd:${i * 1.5}s" transform="translate(${12 + i * 147} 322)"><rect width="141" height="22" rx="11"/><g transform="translate(15 11)">${ic}</g><text x="28" y="15" font-size="12" class="t-strong">${l}</text></g>`).join("")}
      </svg><p class="cap">The fleet: placed by power, linked by fiber, scheduled by software. Links and jobs are illustrative.</p></div>
    </div>`;
  },

  memory() {
    const stacks = [[30, 36], [30, 112], [170, 36], [170, 112]];
    return `<div class="viz" data-step="1"><div class="pkg-wrap">
      <div class="pkg" id="pkg" role="img" aria-label="An AI accelerator package: substrate, silicon interposer, logic die and four HBM memory stacks.">
        <div class="pkg-rot" id="pkgRot">
          <div class="ly l-sub"></div>
          <div class="ly l-int"></div>
          <div class="ly l-die"></div>
          ${stacks.map(([x, y]) => `<div class="hbm" style="left:${x}px;top:${y}px">${Array.from({ length: 8 }, (_, i) => `<div class="hb" style="--i:${i}"></div>`).join("")}</div>`).join("")}
        </div>
      </div>
      <div>
        <div class="pkg-legend"><span><i style="background:var(--amber)"></i>HBM stacks</span><span><i style="background:var(--beat)"></i>Logic die</span><span><i style="background:var(--violet)"></i>Interposer (CoWoS)</span><span><i style="background:#2a4d70"></i>Substrate</span></div>
        <div class="cap-set" style="margin-top:calc(8 * var(--u))"><p class="cap c1">An AI accelerator package, assembled. Move your pointer to turn it.</p><p class="cap c2">Memory: SK hynix ran a 76% operating margin in Q2 2026.</p><p class="cap c3">Packaging: TrendForce sees the CoWoS shortfall narrowing from ~20% to ~10% by end-2026.</p></div>
      </div>
    </div></div>`;
  },

  agent() {
    const ports = [["Tools", 230, 44], ["Permissions", 356, 146], ["Payments", 230, 248], ["Memory", 104, 146]];
    const cards = [
      ["Ask", "Today", "var(--beat)", `<rect x="10" y="26" width="110" height="62" rx="12" fill="var(--ink-3)"/><text x="20" y="48" font-size="13" class="t-strong">Camping next</text><text x="20" y="64" font-size="13" class="t-strong">weekend. What</text><text x="20" y="80" font-size="13" class="t-strong">do I need?</text><text x="10" y="116" font-size="12">It plans a gear list.</text>`],
      ["Anticipate", "Arriving", "var(--amber)", `<rect x="10" y="26" width="110" height="44" rx="6" fill="var(--ink-3)" stroke="var(--amber)" stroke-opacity=".6"/><rect x="10" y="26" width="110" height="12" rx="6" fill="var(--amber)" fill-opacity=".8"/><text x="20" y="57" font-size="13" class="t-strong">Sat, Oct 17</text><text x="10" y="88" font-size="12">Yosemite trip on</text><text x="10" y="104" font-size="12">your calendar. Gear</text><text x="10" y="120" font-size="12">list drafted early.</text>`],
      ["Act", "Next", "var(--coral)", `<text x="10" y="40" font-size="12">Tent stakes</text><text x="10" y="56" font-size="12">Headlamp</text><text x="10" y="72" font-size="12">Stove fuel</text><line x1="10" y1="80" x2="120" y2="80" class="ax"/><rect x="6" y="90" width="118" height="28" rx="14" fill="var(--amber)"/><text x="65" y="108.5" text-anchor="middle" font-size="12" style="fill:var(--ink);font-weight:700">Confirm purchase</text><text x="10" y="140" font-size="12">You tap once.</text>`]
    ];
    const nodes = [["You", "“camping trip”", 230, 52, "var(--paper)"], ["Model", "plans the list", 340, 158, "var(--violet)"], ["Harness", "carts the gear", 230, 264, "var(--beat)"], ["You", "tap confirm", 120, 158, "var(--amber)"]];
    return `<div class="viz" data-step="1">
      <div class="frame f1"><svg viewBox="0 0 460 300" role="img" aria-label="An agent drawn as a brain inside a body: the model at the center, connected to the harness’s tools, permissions, payments and memory.">
        <rect x="104" y="44" width="252" height="204" rx="48" fill="none" stroke="var(--amber)" stroke-width="1.5" stroke-dasharray="6 6"/>
        ${ports.map(([n, x, y]) => `<line class="link" x1="230" y1="146" x2="${x}" y2="${y}" style="stroke:var(--amber)"/>`).join("")}
        <circle cx="230" cy="146" r="52" fill="var(--violet)" fill-opacity=".22" stroke="var(--violet)" stroke-width="2"/>
        <circle cx="230" cy="146" r="64" fill="none" stroke="var(--violet)" stroke-opacity=".3" class="brain-glow"/>
        <text x="230" y="142" text-anchor="middle" class="t-strong" font-size="19">Model</text>
        <text x="230" y="162" text-anchor="middle" font-size="14">the brain</text>
        ${ports.map(([n, x, y]) => `<rect x="${x - 50}" y="${y - 15}" width="100" height="30" rx="15" fill="var(--ink-2)" stroke="var(--amber)"/><text x="${x}" y="${y + 5}" text-anchor="middle" class="t-strong" font-size="14">${n}</text>`).join("")}
        <text x="230" y="290" text-anchor="middle" font-size="14" style="fill:var(--amber)">Harness: the body</text>
      </svg><p class="cap">The model decides. The harness is how it reaches the world.</p></div>
      <div class="frame f2"><svg viewBox="0 0 460 300" role="img" aria-label="Three steps toward buying camping gear: ask, anticipate from your calendar, then act with a confirm purchase button.">
        ${cards.map(([n, st, c, body], i) => { const x = 14 + i * 150; return `<g transform="translate(${x} 40)"><text x="0" y="0" class="t-strong" font-size="16"><tspan style="fill:var(--amber)">${i + 1}</tspan> ${n}</text><rect x="0" y="12" width="130" height="200" rx="8" fill="var(--ink-2)" stroke="var(--rule)"/><g transform="translate(0 0)">${body}</g><text x="10" y="200" font-size="12" style="fill:${c};font-weight:700">${st}</text></g>${i < 2 ? `<path d="M${x + 134} 150 h10 m-5 -5 l5 5 l-5 5" fill="none" stroke="var(--faint)" stroke-width="1.6"/>` : ""}`; }).join("")}
      </svg><p class="cap">My camping-trip example. Ask works today, ChatGPT Pulse shows anticipate arriving, and act is still being built.</p></div>
      <div class="frame f3"><svg viewBox="0 0 460 320" role="img" aria-label="A loop: you mention camping, the model plans, the harness finds and carts the gear, and you tap confirm.">
        <circle class="v-ring" cx="230" cy="158" r="106"/>
        <circle class="v-run2" cx="230" cy="158" r="106" transform="rotate(-90 230 158)"/>
        <text x="230" y="143" text-anchor="middle" font-size="14">agent =</text>
        <text x="230" y="162" text-anchor="middle" class="t-strong" font-size="15">model +</text>
        <text x="230" y="180" text-anchor="middle" class="t-strong" font-size="15">harness</text>
        ${nodes.map(([a, b, x, y, c]) => `<g><circle cx="${x}" cy="${y}" r="46" fill="var(--ink-2)" stroke="${c}" stroke-width="${c === "var(--amber)" ? 2.5 : 1.5}"/><text x="${x}" y="${y - 3}" text-anchor="middle" class="t-strong" font-size="15">${a}</text><text x="${x}" y="${y + 15}" text-anchor="middle" font-size="11.5">${b}</text></g>`).join("")}
      </svg><p class="cap">Full circle: the model decides, the harness acts, and you only say yes.</p></div>
    </div>`;
  },

  ooms() {
    const Y = o => 280 - o * 20, X = { 2019: 100, 2023: 250, 2027: 400 };
    const LV = [["Chip", "1 GPU", 3, "~1 kW"], ["Server", "8 GPUs", Math.log10(14300), "14.3 kW"], ["Rack", "72 GPUs", Math.log10(1.2e5), "~120 kW"], ["Cluster", "~100k GPUs", Math.log10(1.2e8), "~120 MW"], ["Campus", "Abilene, planned", Math.log10(1.2e9), "1.2 GW"]];
    const LX = lg => 130 + (lg - 2) * 38;
    return `<div class="viz" data-step="1">
      <div class="frame f1"><svg viewBox="0 0 460 320" role="img" aria-label="Effective compute in OOMs above GPT-2: GPT-4 about 4.5 to 6 OOMs higher in 2023, and Aschenbrenner’s 2027 projection about 7.5 to 12.">
        ${[0, 2, 4, 6, 8, 10, 12].map(o => `<line class="gridl" x1="56" y1="${Y(o)}" x2="440" y2="${Y(o)}"/><text x="48" y="${Y(o) + 5}" text-anchor="end" font-size="13">${o}</text>`).join("")}
        <text x="16" y="${Y(6)}" font-size="13" transform="rotate(-90 16 ${Y(6)})" text-anchor="middle">OOMs above GPT-2</text>
        <text x="64" y="26" class="t-strong" font-size="15">AGI is the starting line, not the finish line.</text>
        <line x1="${X[2019]}" y1="${Y(0)}" x2="${X[2023]}" y2="${Y(5.25)}" stroke="var(--paper)" stroke-width="1.5"/>
        <line x1="${X[2023]}" y1="${Y(5.25)}" x2="${X[2027]}" y2="${Y(10.25)}" stroke="var(--amber)" stroke-width="1.5" stroke-dasharray="5 5"/>
        <circle cx="${X[2019]}" cy="${Y(0)}" r="7" fill="var(--paper)"/>
        <text x="${X[2019]}" y="244" text-anchor="middle" class="t-strong" font-size="16">GPT-2</text>
        <text x="${X[2019]}" y="262" text-anchor="middle" font-size="14">preschooler</text>
        <rect x="${X[2023] - 6}" y="${Y(6)}" width="12" height="${Y(4.5) - Y(6)}" fill="var(--paper)" opacity=".3"/>
        <circle cx="${X[2023]}" cy="${Y(5.25)}" r="7" fill="var(--paper)"/>
        <text x="${X[2023] + 14}" y="${Y(5.25) - 4}" class="t-strong" font-size="16">GPT-4</text>
        <text x="${X[2023] + 14}" y="${Y(5.25) + 14}" font-size="14">smart high schooler</text>
        <rect x="${X[2027] - 6}" y="${Y(12)}" width="12" height="${Y(7.5) - Y(12)}" fill="none" stroke="var(--amber)" stroke-dasharray="4 3"/>
        <circle cx="${X[2027]}" cy="${Y(10.25)}" r="8" fill="var(--ink)" stroke="var(--amber)" stroke-width="2"/>
        <text x="${X[2027] + 14}" y="${Y(10.25) + 5}" class="t-strong" font-size="16" style="fill:var(--amber)">AGI?</text>
        ${[2019, 2023, 2027].map(y => `<text x="${X[y]}" y="304" text-anchor="middle" font-size="14">${y}</text>`).join("")}
      </svg><p class="cap">Aschenbrenner’s count of effective compute. Bars are his ranges; 2027 is his projection.</p></div>
      <div class="frame f2"><svg viewBox="0 0 460 310" role="img" aria-label="Power per level on a log scale: chip about 1 kW, server 14.3 kW, rack about 120 kW, cluster about 120 MW, campus 1.2 GW.">
        <path d="M${LX(3)} 32 V24 H${LX(LV[4][2])} V32" fill="none" stroke="var(--amber)" stroke-width="1.5"/>
        <text x="${(LX(3) + LX(LV[4][2])) / 2}" y="16" text-anchor="middle" class="t-strong" font-size="14">about six OOMs, chip to campus</text>
        ${LV.map(([n, sub, lg, v], i) => { const y = 64 + i * 50; return `<text x="118" y="${y - 1}" text-anchor="end" class="t-strong" font-size="16">${n}</text><text x="118" y="${y + 16}" text-anchor="end" font-size="12">${sub}</text><rect x="130" y="${y - 12}" width="${(LX(lg) - 130).toFixed(1)}" height="24" fill="var(--amber)" opacity="${(0.4 + i * 0.13).toFixed(2)}"/><text x="${(LX(lg) + 8).toFixed(1)}" y="${y + 5}" class="t-strong" font-size="14">${v}</text>`; }).join("")}
        <line class="ax" x1="130" y1="292" x2="440" y2="292"/>
        ${[[3, "1 kW"], [6, "1 MW"], [9, "1 GW"]].map(([lg, l]) => `<line class="ax" x1="${LX(lg)}" y1="288" x2="${LX(lg)}" y2="296"/><text x="${LX(lg)}" y="309" text-anchor="middle" font-size="12">${l}</text>`).join("")}
      </svg><p class="cap">Power per level, log scale. The cluster is my estimate, scaled from Epoch AI’s Abilene figures.</p></div>
      <div class="frame f3"><div class="oomcalc">
        <label class="oc-l" for="oomRange">Multiply one GPU’s power (about 1 kW) by</label>
        <output class="oc-x" id="oomX" for="oomRange">×1,000</output>
        <input class="oc-range" type="range" id="oomRange" min="0" max="6" step="0.5" value="3" aria-describedby="oomRead">
        <p class="oc-o" id="oomRead">3 OOMs. About 1 MW, between a rack and a cluster.</p>
        <ol class="oc-levels">${LV.map(l => `<li>${l[0]}</li>`).join("")}</ol>
      </div><p class="cap">OOMs = log₁₀ of the multiple. 10× is one OOM, 3× about half of one, 30× about one and a half.</p></div>
    </div>`;
  },

  builders() {
    const D = [["Feb ’25", .25], ["May ’25", 1.0], ["Aug ’25", 2.1], ["Nov ’25", 4.1], ["Feb ’26", 5.5], ["May ’26", 13.7], ["Aug ’26", 20.2]];
    const Y = v => 270 - v * 10;
    // slide 2: every lab's plan lands on the same four-layer stack, drawn in isometric
    const SW = 176, SH = 62, ST = 16, CX = 168, CY = [108, 154, 200, 246];
    const STACK = [
      ["Chips", "TSMC", "#6aa8ff", [0, 1, 2].map(i => [0, 1, 2].map(j => `<rect x="${18 + i * 24}" y="${18 + j * 24}" width="16" height="16" rx="2"/>`).join("")).join("")],
      ["Memory", "Micron, SanDisk", "#3fd6c8", [0, 1, 2, 3].map(k => `<rect x="12" y="${14 + k * 19}" width="76" height="12" rx="2"/>`).join("")],
      ["Datacenters", "CoreWeave, IREN, Nebius", "#d4e3f0", [0, 1, 2, 3, 4].map(k => `<rect x="${10 + k * 17}" y="14" width="12" height="72" rx="2"/>`).join("")],
      ["Power", "Bloom Energy", "#ffd98a", `<path d="M58 8 L26 56 H48 L40 92 L74 40 H52 Z"/>`]
    ];
    const slab = (cy, i, c, ic) => {
      const t = `${CX},${cy - SH / 2} ${CX + SW / 2},${cy} ${CX},${cy + SH / 2} ${CX - SW / 2},${cy}`;
      const l = `${CX - SW / 2},${cy} ${CX},${cy + SH / 2} ${CX},${cy + SH / 2 + ST} ${CX - SW / 2},${cy + ST}`;
      const r = `${CX},${cy + SH / 2} ${CX + SW / 2},${cy} ${CX + SW / 2},${cy + ST} ${CX},${cy + SH / 2 + ST}`;
      return `<g class="bd-slab" style="--c:${c};--d:${(.1 + (3 - i) * .15).toFixed(2)}s"><polygon points="${l}" class="l"/><polygon points="${r}" class="r"/><polygon points="${t}" class="t"/><g transform="matrix(${SW / 200} ${SH / 200} ${-SW / 200} ${SH / 200} ${CX} ${cy - SH / 2})" class="ic">${ic}</g></g>`;
    };
    const LABS = ["Lab A", "Lab B", "Lab C"];
    const FLOWS = [`M98 58 Q100 70 ${CX - 22} ${CY[0] - SH / 2 + 12}`, `M${CX} 58 V${CY[0] - SH / 2 + 2}`, `M238 58 Q236 70 ${CX + 22} ${CY[0] - SH / 2 + 12}`];
    return `<div class="viz" data-step="1">
      <div class="frame f1"><svg viewBox="0 0 460 310" role="img" aria-label="Situational Awareness LP’s disclosed US positions by 13F filing date, rising from about $0.25 billion in February 2025 to $20.2 billion in August 2026.">
        ${[0, 5, 10, 15, 20].map(v => `<line class="gridl" x1="56" y1="${Y(v)}" x2="440" y2="${Y(v)}"/><text x="48" y="${Y(v) + 5}" text-anchor="end" font-size="13">${v ? "$" + v + "B" : "$0"}</text>`).join("")}
        <line class="ax" x1="56" y1="${Y(0)}" x2="440" y2="${Y(0)}"/>
        ${D.map(([l, v], i) => { const x = 66 + i * 54; return `<rect x="${x}" y="${Y(v)}" width="38" height="${(v * 10).toFixed(1)}" fill="var(--amber)" opacity="${(0.5 + i * 0.08).toFixed(2)}"/><text x="${x + 19}" y="${Y(v) - 8}" text-anchor="middle" class="t-strong" font-size="13">${v < 1 ? "$0.25B" : "$" + v.toFixed(1) + "B"}</text><text x="${x + 19}" y="292" text-anchor="middle" font-size="12">${l}</text>`; }).join("")}
      </svg><p class="cap">US positions disclosed in each 13F filing, by filing date. Not total assets; shorts and non-US holdings aren’t shown.</p></div>
      <div class="frame f2"><svg viewBox="0 0 460 300" role="img" aria-label="Three rival labs all feed into the same four-layer stack: chips, memory, datacenters and power, with example companies from the fund’s filings.">
        <text x="16" y="17" class="t-strong" font-size="15">Whoever wins the lab race…</text>
        ${LABS.map((l, i) => `<g transform="translate(${70 + i * 70} 36)"><rect width="56" height="22" rx="11" class="bd-lab"/><text x="28" y="15.5" text-anchor="middle" font-size="12" class="t-strong">${l}</text></g>`).join("")}
        <g transform="translate(168 28)" class="bd-crown"><path d="M-9 4 L-9 -4 L-4.5 0 L0 -6 L4.5 0 L9 -4 L9 4 Z"/><text x="0" y="3" text-anchor="middle" font-size="7" class="bd-q">?</text></g>
        ${FLOWS.map(d => `<path d="${d}" class="bd-flow"/>`).join("")}
        ${FLOWS.map((d, i) => `<circle r="2.6" class="bd-cash"><animateMotion dur="1.8s" begin="${(-i * .6).toFixed(1)}s" repeatCount="indefinite" path="${d}"/></circle>`).join("")}
        ${[...STACK].reverse().map(([n, ex, c, ic], k) => slab(CY[3 - k], 3 - k, c, ic)).join("")}
        ${STACK.map(([n, ex, c], i) => `<g class="bd-lbl" style="--d:${(.5 + i * .15).toFixed(2)}s"><line x1="${CX + SW / 2 + 4}" y1="${CY[i] + 8}" x2="${CX + SW / 2 + 16}" y2="${CY[i] + 8}" stroke="${c}"/><text x="${CX + SW / 2 + 22}" y="${CY[i] + 6}" class="t-strong" font-size="16">${n}</text><text x="${CX + SW / 2 + 22}" y="${CY[i] + 22}" font-size="12.5">${ex}</text></g>`).join("")}
        <text x="${CX + SW / 2 + 22}" y="292" class="t-strong bd-all" font-size="15">…buys all four.</text>
      </svg><p class="cap">Examples from the fund’s 2026 filings, by the layer they build. Not investment advice.</p></div>
      <div class="frame f3"><svg viewBox="0 0 460 300" role="img" aria-label="In the 1990s telecom bust, every dollar of bonds paid back about 20 cents and WorldCom and Global Crossing went bankrupt, but the fiber stayed in the ground, still lit.">
        <defs><linearGradient id="bdSoil" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#14283f" stop-opacity=".9"/><stop offset="1" stop-color="#07101d" stop-opacity="0"/></linearGradient></defs>
        <text x="16" y="22" class="t-strong" font-size="16">The 1990s telecom boom</text>
        <g transform="translate(18 40)"><g class="bd-bond"><rect width="128" height="74" rx="3"/><rect x="5" y="5" width="118" height="64" rx="2" class="in"/><text x="64" y="22" text-anchor="middle" font-size="10" class="bd-bk">TELECOM BOND</text><text x="64" y="52" text-anchor="middle" class="bd-bv">$1.00</text></g></g>
        <path d="M152 77 H196 m-7 -6 l7 6 l-7 6" class="bd-arrow"/>
        <g class="bd-coin"><circle cx="228" cy="77" r="26"/><text x="228" y="83" text-anchor="middle" class="bd-cv">20¢</text></g>
        <text x="228" y="122" text-anchor="middle" font-size="12.5">paid back after the bust</text>
        ${[["WorldCom", 300, 66, 44, 104], ["Global Crossing", 370, 86, 64, 84]].map(([n, x, y, w, h], i) => `<g class="bd-bldg"><rect x="${x}" y="${y}" width="${w}" height="${h}"/>${Array.from({ length: Math.floor((h - 12) / 12) * Math.floor((w - 8) / 10) }, (_, k) => { const cols = Math.floor((w - 8) / 10), cx = x + 6 + (k % cols) * 10, cy = y + 8 + Math.floor(k / cols) * 12; return `<rect x="${cx}" y="${cy}" width="5" height="6" class="${(k * 7 + i) % 5 ? "w" : "w lit"}"/>`; }).join("")}<text x="${x + w / 2}" y="186" text-anchor="middle" font-size="12" class="t-strong">${n}</text></g><g class="bd-stamp" style="--d:${(.6 + i * .35).toFixed(2)}s;transform-origin:${x + w / 2}px ${y + h / 2}px"><rect x="${x + w / 2 - 38}" y="${y + h / 2 - 11}" width="76" height="22" rx="3" transform="rotate(-14 ${x + w / 2} ${y + h / 2})"/><text x="${x + w / 2}" y="${y + h / 2 + 5}" text-anchor="middle" transform="rotate(-14 ${x + w / 2} ${y + h / 2})">BANKRUPT</text></g>`).join("")}
        <rect x="0" y="170" width="460" height="130" fill="url(#bdSoil)"/>
        <line x1="0" y1="170" x2="460" y2="170" class="bd-ground"/>
        <path d="M0 206 H460 M0 262 H460" class="bd-strata"/>
        <rect x="-6" y="222" width="472" height="16" rx="8" class="bd-pipe"/>
        <line x1="0" y1="230" x2="460" y2="230" class="bd-fiber"/>
        <line x1="0" y1="230" x2="460" y2="230" class="bd-light"/>
        <text x="230" y="288" text-anchor="middle" class="t-strong" font-size="16">The fiber stayed in the ground.</text>
      </svg><p class="cap">Telecoms crash, 2001: $500B+ invested, mostly debt. WorldCom and Global Crossing went bankrupt.</p></div>
    </div>`;
  },

  moat() {
    const X = y => 70 + (y - 2010) * 25, Y = o => 270 - o * 22;
    const yr = 14, lo = yr * Math.log10(4), hi = yr * Math.log10(5), mid = yr * Math.log10(4.5), moore = yr * Math.log10(Math.SQRT2);
    const mk = [["TSMC", 70], ["Samsung", 176], ["SK hynix", 284], ["Intel", 390]];
    const layer = (y, c, o) => `<polygon points="40,${y} 150,${y - 36} 260,${y} 150,${y + 36}" fill="${c}" fill-opacity="${o}" stroke="var(--paper)" stroke-opacity=".35"/>`;
    return `<div class="viz" data-step="1">
      <div class="frame f1"><svg viewBox="0 0 460 310" role="img" aria-label="Growth since 2010 in OOMs: frontier AI training compute at 4 to 5 times a year reaches about 9 OOMs by 2024, while Moore’s pace reaches about 2.">
        ${[0, 2, 4, 6, 8, 10].map(o => `<line class="gridl" x1="62" y1="${Y(o)}" x2="424" y2="${Y(o)}"/><text x="54" y="${Y(o) + 5}" text-anchor="end" font-size="13">${o}</text>`).join("")}
        <text x="16" y="${Y(5)}" font-size="13" transform="rotate(-90 16 ${Y(5)})" text-anchor="middle">OOMs since 2010</text>
        <polygon points="${X(2010)},${Y(0)} ${X(2024)},${Y(lo).toFixed(1)} ${X(2024)},${Y(hi).toFixed(1)}" fill="var(--beat)" fill-opacity=".22"/>
        <line x1="${X(2010)}" y1="${Y(0)}" x2="${X(2024)}" y2="${Y(mid).toFixed(1)}" stroke="var(--beat)" stroke-width="2.5"/>
        <line x1="${X(2010)}" y1="${Y(0)}" x2="${X(2024)}" y2="${Y(moore).toFixed(1)}" stroke="var(--paper)" stroke-width="2" stroke-dasharray="6 5"/>
        <text x="412" y="28" text-anchor="end" class="t-strong" font-size="15" style="fill:var(--beat)">Frontier AI training compute, 4–5× a year</text>
        <text x="412" y="46" text-anchor="end" font-size="14">about 9 OOMs since 2010</text>
        <text x="412" y="212" text-anchor="end" class="t-strong" font-size="14">Moore’s pace: about 2 OOMs</text>
        ${[2010, 2015, 2020, 2024].map(y => `<text x="${X(y)}" y="292" text-anchor="middle" font-size="13">${y}</text>`).join("")}
      </svg><p class="cap">Growth rates, not model-by-model data: Epoch AI’s 4–5× a year vs. a doubling every two years, 2010–2024.</p></div>
      <div class="frame f2"><svg viewBox="0 0 460 310" role="img" aria-label="Four chipmakers, TSMC, Samsung, SK hynix and Intel, all depend on one supplier, ASML, for the newest EUV machines.">
        <text x="230" y="24" text-anchor="middle" font-size="14">Committed to ASML’s newest EUV machine</text>
        ${mk.map(([n, x]) => `<line class="link" x1="${x}" y1="76" x2="230" y2="190"/>`).join("")}
        ${mk.map(([n, x]) => `<rect x="${x - 44}" y="44" width="88" height="32" rx="16" fill="var(--ink-2)" stroke="var(--beat)"/><text x="${x}" y="65" text-anchor="middle" class="t-strong" font-size="14">${n}</text>`).join("")}
        <circle cx="230" cy="214" r="38" fill="var(--amber)"/>
        <text x="230" y="220" text-anchor="middle" font-size="18" style="fill:var(--ink);font-weight:800">ASML</text>
        <text x="280" y="214" font-size="14" class="t-strong" style="fill:var(--amber)">~$380–400M each</text>
        <text x="230" y="278" text-anchor="middle" class="t-strong" font-size="15">The only seller of EUV machines</text>
        <text x="230" y="297" text-anchor="middle" font-size="14">for the most advanced chips</text>
      </svg><p class="cap">TechTimes, September 2026.</p></div>
      <div class="frame f3"><svg viewBox="0 0 460 290" role="img" aria-label="A stack of chip layers with three possible new chokepoints: hybrid bonding, advanced packaging and inspection.">
        <text x="230" y="24" text-anchor="middle" class="t-strong" font-size="15">Where the next chokepoints could form</text>
        ${layer(210, "var(--coral)", .7)}${layer(180, "var(--amber)", .7)}${layer(150, "var(--beat)", .65)}${layer(120, "var(--violet)", .75)}
        <path d="M236 132 L276 104" stroke="var(--paper)" stroke-width="1"/><text x="282" y="100" class="t-strong" font-size="15">Hybrid bonding</text><text x="282" y="118" font-size="14">fuses stacked layers</text>
        <path d="M260 180 L276 176" stroke="var(--paper)" stroke-width="1"/><text x="282" y="172" class="t-strong" font-size="15">Advanced packaging</text><text x="282" y="190" font-size="14">joins chips in one package</text>
        <path d="M222 226 L276 246" stroke="var(--paper)" stroke-width="1"/><text x="282" y="244" class="t-strong" font-size="15">Inspection</text><text x="282" y="262" font-size="14">finds buried flaws</text>
      </svg><p class="cap">My read of where one-or-two-company steps could form as chips go 3D.</p></div>
    </div>`;
  },

  heat() {
    const fins = (x0, n, y, h) => Array.from({ length: n }, (_, i) => `<rect x="${x0 + i * 22}" y="${y}" width="10" height="${h}" rx="2" fill="var(--ink-3)" stroke="var(--rule)"/>`).join("");
    const up = (x, d) => `<path class="heat-rise" style="animation-delay:${d}s" d="M${x} 64 V24 M${x - 5} 31 L${x} 24 L${x + 5} 31" fill="none" stroke="var(--coral)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>`;
    const vein = "M100 140 H360 M150 140 C170 120 182 96 196 62 M150 140 C170 160 182 184 196 218 M215 140 C236 116 250 92 262 58 M215 140 C236 164 250 188 262 222 M280 140 C298 120 310 100 322 70 M280 140 C298 160 310 180 322 210 M182 104 C200 96 214 92 230 92 M182 176 C200 184 214 188 230 188 M250 100 C266 96 280 96 292 98 M250 180 C266 184 280 184 292 182";
    return `<div class="viz" data-step="1">
      <div class="frame f1"><svg viewBox="0 0 460 260" role="img" aria-label="A flat chip under a heat sink: heat from its single layer of transistors has a short path straight up.">
        ${Array.from({ length: 9 }, (_, i) => up(126 + i * 26, i * .22)).join("")}
        ${fins(96, 13, 70, 56)}
        <rect x="86" y="124" width="288" height="14" rx="2" fill="var(--ink-3)" stroke="var(--rule)"/>
        <rect x="120" y="142" width="220" height="12" fill="var(--violet)"/>
        <rect x="96" y="156" width="268" height="18" fill="#15304a" stroke="#2a4d70"/>
        ${Array.from({ length: 12 }, (_, i) => `<circle cx="${109 + i * 22}" cy="181" r="4" fill="#4a7aa8"/>`).join("")}
        <text x="230" y="216" text-anchor="middle" class="t-strong" font-size="17">One flat layer of transistors</text>
        <text x="230" y="238" text-anchor="middle" font-size="15">Every hot spot sits right under the heat sink.</text>
      </svg><p class="cap">Moore, 1965: flat chips keep a cooling surface close to every source of heat.</p></div>
      <div class="frame f2"><svg viewBox="0 0 460 300" role="img" aria-label="A stacked chip whose bottom layer’s heat must cross every layer above it, next to rack power rising from about 120 kW to about 600 kW.">
        ${fins(42, 8, 30, 30)}
        <rect x="34" y="60" width="184" height="10" rx="2" fill="var(--ink-3)" stroke="var(--rule)"/>
        ${["var(--violet)", "var(--beat)", "var(--amber)", "var(--coral)"].map((c, i) => `<rect x="44" y="${78 + i * 30}" width="164" height="20" fill="${c}" opacity="${(0.5 + i * 0.16).toFixed(2)}"/>`).join("")}
        <path class="heat-path" d="M126 168 V86" stroke="var(--paper)" stroke-width="2.4" stroke-dasharray="5 5"/>
        <path d="M120 93 L126 86 L132 93" fill="none" stroke="var(--paper)" stroke-width="2.4" stroke-linecap="round"/>
        <text x="126" y="214" text-anchor="middle" class="t-strong" font-size="16">Stacked chip</text>
        <text x="126" y="234" text-anchor="middle" font-size="14">The bottom layer’s heat</text>
        <text x="126" y="252" text-anchor="middle" font-size="14">crosses every layer above it.</text>
        <text x="355" y="30" text-anchor="middle" class="t-strong" font-size="16">Power per rack</text>
        <line class="ax" x1="270" y1="250" x2="440" y2="250"/>
        <rect x="276" y="216" width="50" height="34" fill="var(--amber)"/>
        <rect x="380" y="80" width="50" height="170" fill="var(--coral)"/>
        <text x="301" y="206" text-anchor="middle" class="t-strong" font-size="15">~120 kW</text>
        <text x="405" y="70" text-anchor="middle" class="t-strong" font-size="15">~600 kW</text>
        <text x="301" y="270" text-anchor="middle" font-size="12">GB200 NVL72</text>
        <text x="405" y="270" text-anchor="middle" font-size="12">Kyber design</text>
        <text x="405" y="288" text-anchor="middle" font-size="12" style="fill:var(--coral)">liquid only</text>
      </svg><p class="cap">Left: why stacking traps heat. Right: Nvidia rack power, per DCD (March 2025).</p></div>
      <div class="frame f3"><svg viewBox="0 0 460 290" role="img" aria-label="Top view of a chip with branching coolant channels, shaped like leaf veins, etched into the back of the silicon and flowing past hot spots.">
        <rect x="100" y="40" width="260" height="200" rx="6" fill="var(--ink-2)" stroke="var(--violet)" stroke-width="1.5"/>
        <circle cx="200" cy="100" r="30" fill="var(--coral)" opacity=".22"/><circle cx="276" cy="186" r="34" fill="var(--coral)" opacity=".2"/><circle cx="160" cy="196" r="22" fill="var(--coral)" opacity=".18"/>
        <path d="${vein}" fill="none" stroke="var(--beat)" stroke-width="6" stroke-linecap="round" opacity=".18"/>
        <path class="coolant" d="${vein}" fill="none" stroke="var(--beat)" stroke-width="2.2" stroke-linecap="round"/>
        <path d="M40 140 H92 M84 133 L92 140 L84 147" fill="none" stroke="var(--beat)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M368 140 H420 M412 133 L420 140 L412 147" fill="none" stroke="var(--beat)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
        <text x="40" y="126" font-size="14">coolant in</text>
        <text x="420" y="126" text-anchor="end" font-size="14">out</text>
        <text x="230" y="272" text-anchor="middle" class="t-strong" font-size="16">Up to 3× better heat removal than cold plates</text>
      </svg><p class="cap">Microsoft, 2025: channels etched into the back of the silicon, shaped like leaf veins.</p></div>
    </div>`;
  },

  neocloud() {
    // ---- frame 1: who rents from whom, as a building cross-section
    const racks = Array.from({ length: 8 }, (_, i) => `<rect x="${92 + i * 36}" y="128" width="26" height="54" rx="2" fill="#11263c" stroke="var(--violet)"/>${[0, 1, 2, 3].map(k => `<rect class="nc-led" style="animation-delay:${((i * 4 + k) * .13 % 1.6).toFixed(2)}s" x="${96 + i * 36}" y="${134 + k * 12}" width="18" height="5" rx="1" fill="var(--beat)"/>`).join("")}`).join("");
    const tenants = [["AI labs", 70], ["Startups", 168], ["Microsoft", 266], ["Meta", 364]];
    const roof = tenants.map(([n, x], i) => `<rect x="${x - 40}" y="22" width="80" height="34" rx="5" fill="var(--ink-2)" stroke="${i > 1 ? "var(--amber)" : "var(--rule)"}" stroke-width="${i > 1 ? 1.6 : 1}"/><text x="${x}" y="44" text-anchor="middle" font-size="13" class="t-strong" ${i > 1 ? `style="fill:var(--amber)"` : ""}>${n}</text>`).join("");
    const up = tenants.map(([, x], i) => `<path id="ncUp${i}" d="M${x} 118 V60" fill="none"/><circle r="3.6" fill="var(--beat)"><animateMotion dur="1.8s" begin="-${(i * .45).toFixed(2)}s" repeatCount="indefinite"><mpath href="#ncUp${i}"/></animateMotion></circle>`).join("");
    const down = tenants.map(([, x], i) => `<path id="ncDn${i}" d="M${x + 14} 60 V118" fill="none"/><text font-size="12" font-weight="800" style="fill:var(--amber)" text-anchor="middle">$<animateMotion dur="1.8s" begin="-${(i * .45 + .9).toFixed(2)}s" repeatCount="indefinite"><mpath href="#ncDn${i}"/></animateMotion></text>`).join("");
    const F1 = `<svg viewBox="0 -8 460 308" role="img" aria-label="A building cross-section. On the bottom floor, a landlord supplies the shell and power. On the middle floor, the neocloud runs racks of GPUs. On the roof, tenants rent GPU-hours: AI labs, startups, and the hyperscalers Microsoft and Meta. GPU-hours flow up and dollars flow down.">
        ${roof}
        <path d="M228 14 V8 H402 V14" fill="none" stroke="var(--amber)" stroke-width="1.2"/><text x="315" y="4" text-anchor="middle" font-size="11" font-weight="700" style="fill:var(--amber);letter-spacing:.12em">HYPERSCALERS, RENTING</text>
        ${up}${down}
        <rect x="70" y="118" width="320" height="86" rx="4" fill="none" stroke="var(--violet)" stroke-width="1.4"/>
        ${racks}
        <text x="230" y="198" text-anchor="middle" font-size="12" class="t-strong" style="fill:var(--violet)">NEOCLOUD: GPUs, network, software</text>
        <rect x="50" y="208" width="360" height="54" rx="3" fill="var(--ink-2)" stroke="var(--rule)"/>
        <path d="M70 262 V226 H130 V262" fill="none" stroke="var(--rule)"/>
        <path class="nc-bolt" d="M362 216 L348 238 H360 L352 256 L374 230 H362 L370 216 Z" fill="var(--amber)"/>
        <text x="230" y="234" text-anchor="middle" font-size="12" class="t-strong">LANDLORD: land, shell, power</text>
        <text x="230" y="250" text-anchor="middle" font-size="11">owned or leased</text>
        <line class="ax" x1="20" y1="262" x2="440" y2="262"/>
        <text x="230" y="288" text-anchor="middle" font-size="13"><tspan style="fill:var(--beat)" font-weight="700">● GPU-hours</tspan> go up. <tspan style="fill:var(--amber)" font-weight="700">$</tspan> comes down.</text>
      </svg>`;

    // ---- frame 2: the price board and a cluster bill calculator
    const ROWS = [["AWS, on demand", 6.88, "var(--coral)"], ["Nebius, Oct 2026", 4.50, "var(--violet)"], ["Nebius, May 2026", 2.95, "var(--violet)"], ["Neocloud average", 2.82, "var(--beat)"]];
    const board = ROWS.map(([n, v, c], i) => `<li style="--w:${(v / 6.88 * 100).toFixed(1)}%;--c:${c}"><span class="n">${n}</span><span class="b"><i></i></span><span class="v">$${v.toFixed(2)}</span></li>`).join("");
    const F2 = `<div class="nccalc">
        <p class="nc-k">One H100, one hour</p>
        <ol class="nc-board">${board}</ol>
        <label class="oc-l" for="ncRange">Rent <b id="ncN">1,000</b> H100s for 30 days</label>
        <input class="oc-range" type="range" id="ncRange" min="100" max="10000" step="100" value="1000">
        <div class="nc-bills" id="ncBills"></div>
      </div>`;

    // ---- frame 3: whose money, and on what terms
    const arc = (from, to, r, c, w) => { const a0 = (from / 100) * 2 * Math.PI - Math.PI / 2, a1 = (to / 100) * 2 * Math.PI - Math.PI / 2; const p = a => [140 + r * Math.cos(a), 150 + r * Math.sin(a)]; const [x0, y0] = p(a0), [x1, y1] = p(a1); return `<path d="M${x0.toFixed(1)} ${y0.toFixed(1)} A${r} ${r} 0 ${to - from > 50 ? 1 : 0} 1 ${x1.toFixed(1)} ${y1.toFixed(1)}" fill="none" stroke="${c}" stroke-width="${w}"/>`; };
    const F3 = `<svg viewBox="0 0 460 300" role="img" aria-label="Nebius has more than 40 billion dollars of contracted revenue; about 32 billion, roughly four fifths, comes from Microsoft and Meta. Microsoft pays whether or not it uses the capacity. Nebius targets 5 gigawatts of contracted power by the end of 2026.">
        <text x="20" y="26" class="t-strong" font-size="15">Nebius contracted revenue: $40B+</text>
        <circle cx="140" cy="150" r="86" fill="none" stroke="var(--ink-3)" stroke-width="30"/>
        <g class="nc-donut">${arc(0, 48, 86, "var(--amber)", 30)}${arc(48.6, 79.4, 86, "var(--coral)", 30)}${arc(80, 99.4, 86, "var(--beat)", 30)}</g>
        <text x="140" y="146" text-anchor="middle" class="t-strong" font-size="24">~80%</text>
        <text x="140" y="166" text-anchor="middle" font-size="12">from two buyers</text>
        ${[["Microsoft", "$17.4B–19.4B, 5 yrs", "var(--amber)"], ["Meta", "$3B, then $12B firm (up to $27B)", "var(--coral)"], ["Everyone else", "the remaining ~20%", "var(--beat)"]].map(([a, b, c], i) => `<rect x="262" y="${78 + i * 46}" width="12" height="12" rx="2" fill="${c}"/><text x="282" y="${88 + i * 46}" class="t-strong" font-size="14">${a}</text><text x="282" y="${105 + i * 46}" font-size="12">${b}</text>`).join("")}
        <text x="20" y="272" font-size="13"><tspan class="t-strong" style="fill:var(--amber)">Take-or-pay:</tspan> Microsoft pays whether or not it uses the GPUs.</text>
        <text x="20" y="292" font-size="13"><tspan class="t-strong" style="fill:var(--beat)">Next:</tspan> 5 GW of contracted power targeted by end of 2026.</text>
      </svg>`;

    return `<div class="viz" data-step="1">
      <div class="frame f1">${F1}<p class="cap">How a neocloud stacks up. Microsoft and Meta are on the roof as tenants, not landlords.</p></div>
      <div class="frame f2">${F2}<p class="cap">Per H100-hour. AWS and Nebius list prices; neocloud average from Silicon Data. Contracts get discounts.</p></div>
      <div class="frame f3">${F3}<p class="cap">Firm commitments only, approximate, from Motley Fool’s read of Nebius filings (Oct 2026).</p></div>
    </div>`;
  },

  saas() {
    // ---- frame 1: the sell-off and the round trip, drawn as a schematic index line
    const X = m => 40 + m * 39, Y = v => 250 - (v - 70) * 4.5, P = (m, v) => `${X(m).toFixed(1)} ${Y(v).toFixed(1)}`;
    const PTS = [[0, 100], [.4, 101], [.85, 102], [1.1, 92], [1.5, 88], [2, 84], [2.5, 86], [3, 79], [3.4, 75.4], [4, 80], [4.6, 84], [5.05, 82], [5.6, 85], [6, 86], [6.8, 92], [7.85, 97], [8.5, 100], [9, 103], [9.2, 105]];
    const d = PTS.map(([m, v], i) => `${i ? "L" : "M"}${P(m, v)}`).join(" ");
    const months = "JFMAMJJASO".split("").map((c, i) => `<text x="${(X(i) + 19.5).toFixed(1)}" y="276" text-anchor="middle" font-size="12">${c}</text>`).join("");
    const F1 = `<svg viewBox="0 0 460 290" role="img" aria-label="Schematic of the S&amp;P 500 software and services index in 2026. It fell after Anthropic’s Cowork plug-ins in early February, bottomed in April more than 26% below its late-January level, recovered after Salesforce and Anthropic launched Claudeforce in August, and on October 6 hit its highest level since November 2025.">
        <defs><linearGradient id="spLine" gradientUnits="userSpaceOnUse" x1="40" y1="0" x2="400" y2="0"><stop offset=".55" stop-color="#f4977a"/><stop offset=".85" stop-color="#6aa8ff"/></linearGradient>
        <linearGradient id="spFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f4977a" stop-opacity=".22"/><stop offset="1" stop-color="#f4977a" stop-opacity="0"/></linearGradient></defs>
        <path class="sp-area" d="${d} L${X(9.2).toFixed(1)} 256 L40 256 Z" fill="url(#spFill)"/>
        <line class="ax" x1="40" y1="256" x2="430" y2="256"/>${months}
        <path class="sp-line" d="${d}" pathLength="100" fill="none" stroke="url(#spLine)" stroke-width="3.2" stroke-linejoin="round" stroke-linecap="round"/>
        <g class="sp-early"><path d="M${X(1.1).toFixed(1)} 62 V${(Y(92) - 8).toFixed(1)}" stroke="var(--faint)" stroke-dasharray="3 3"/><circle cx="${X(1.1).toFixed(1)}" cy="${Y(92).toFixed(1)}" r="5" fill="#f4977a"/>
          <text x="78" y="40" class="t-strong" font-size="13">Feb 3: Cowork plug-ins</text><text x="78" y="56" font-size="12">Thomson Reuters’ worst day</text>
          <circle cx="${X(3.4).toFixed(1)}" cy="${Y(75.4).toFixed(1)}" r="5" fill="#f4977a"/><text x="${X(3.4).toFixed(1)}" y="246" text-anchor="middle" font-size="12" font-weight="700" style="fill:var(--coral)">April low: −26%+</text></g>
        <g transform="translate(205 100) rotate(-8)"><g class="sp-stamp"><rect x="-82" y="-17" width="164" height="34" rx="4" fill="rgba(7,16,29,.6)" stroke="#f4977a" stroke-width="2.4"/><text y="7" text-anchor="middle" font-size="20" font-weight="900" textLength="146" lengthAdjust="spacingAndGlyphs" style="fill:#f4977a">SAASPOCALYPSE</text></g></g>
        <g class="sp-late"><path d="M${X(7.85).toFixed(1)} ${(Y(97) + 8).toFixed(1)} V158" stroke="var(--faint)" stroke-dasharray="3 3"/><circle cx="${X(7.85).toFixed(1)}" cy="${Y(97).toFixed(1)}" r="5" fill="#6aa8ff"/>
          <text x="362" y="174" text-anchor="middle" class="t-strong" font-size="13">Aug 26: Claudeforce</text><text x="362" y="190" text-anchor="middle" font-size="12">Anthropic + Salesforce</text>
          <circle class="sp-ping" cx="${X(9.2).toFixed(1)}" cy="${Y(105).toFixed(1)}" r="6" fill="none" stroke="#6aa8ff" stroke-width="2"/><circle cx="${X(9.2).toFixed(1)}" cy="${Y(105).toFixed(1)}" r="6" fill="#6aa8ff"/>
          <text x="440" y="48" text-anchor="end" class="t-strong" font-size="13" style="fill:var(--beat)">Oct 6: highest since Nov 2025</text><text x="440" y="64" text-anchor="end" font-size="12">up 5% on the year</text></g>
      </svg>`;

    // ---- frame 2: the stack. Agents skip the screen and go straight to the record, through its rules
    const slab = (y, h, c, title, sub, tag, tc, extra = "") => `<rect x="100" y="${y}" width="340" height="${h}" rx="6" fill="var(--ink-2)" stroke="${c}" stroke-width="1.5" ${extra}/><text x="116" y="${y + (sub ? 24 : 20)}" class="t-strong" font-size="15">${title}</text>${sub ? `<text x="116" y="${y + 42}" font-size="12">${sub}</text>` : ""}${tag ? `<text x="428" y="${y + (sub ? 24 : 20)}" text-anchor="end" font-size="13" font-weight="800" style="fill:${tc}">${tag}</text>` : ""}`;
    const dn = "M100 96 H52 V266 H100", upP = "M100 278 H68 V108 H100";
    const dots = (id, n, dur, fill) => Array.from({ length: n }, (_, i) => `<circle r="3.6" fill="${fill}"><animateMotion dur="${dur}s" begin="-${(i * dur / n).toFixed(2)}s" repeatCount="indefinite"><mpath href="#${id}"/></animateMotion></circle>`).join("");
    const F2 = `<svg viewBox="0 0 460 312" role="img" aria-label="A stack of layers. The model, the brain, is paid by the token. The agent decides and acts. The screen layer of menus, forms and dashboards falls away, because agents skip it. Agents go straight to the system of record through its rules: permissions, approvals and audit. The system of record is paid by the outcome.">
        ${slab(8, 52, "var(--violet)", "MODEL: the brain", "Anthropic, OpenAI, Google", "$ per token", "var(--violet)")}
        ${slab(72, 52, "var(--beat)", "AGENT: decides and acts", "calls tools instead of clicking", "", "")}
        <g class="sp-screen">${slab(136, 52, "var(--coral)", "SCREEN: menus and forms", "built for people clicking", "", "", `stroke-dasharray="6 5" opacity=".9"`)}<text x="428" y="178" text-anchor="end" font-size="13" font-weight="800" style="fill:var(--coral)">✕ collapses</text></g>
        ${slab(200, 30, "var(--amber)", "RULES: permissions, approvals, audit", "", "", "")}
        <rect x="100" y="240" width="340" height="62" rx="6" fill="rgba(63,214,200,.1)" stroke="var(--amber)" stroke-width="1.5"/>
        <text x="116" y="266" class="t-strong" font-size="16">SYSTEM OF RECORD</text><text x="116" y="286" font-size="12">customers, contracts, who can approve</text>
        <text x="428" y="266" text-anchor="end" font-size="13" font-weight="800" style="fill:var(--amber)">$ per outcome</text>
        <path id="spDn" d="${dn}" fill="none" stroke="var(--beat)" stroke-opacity=".45" stroke-dasharray="4 4"/>
        <path id="spUp" d="${upP}" fill="none" stroke="var(--amber)" stroke-opacity=".45" stroke-dasharray="4 4"/>
        ${dots("spDn", 3, 2.4, "#6aa8ff")}${dots("spUp", 3, 2.4, "#3fd6c8")}
        <g transform="translate(60 215)"><path d="M-5 -2 V-6 A5 5 0 0 1 5 -6 V-2" fill="none" stroke="var(--amber)" stroke-width="2"/><rect x="-8" y="-3" width="16" height="12" rx="2.5" fill="var(--amber)"/><path d="M-3 3 L-1 5 L3.5 .5" stroke="var(--ink)" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>
        <text x="30" y="185" text-anchor="middle" font-size="12" font-weight="700" transform="rotate(-90 30 185)" style="fill:var(--beat);letter-spacing:.12em">API · MCP</text>
      </svg>`;

    // ---- frame 3: the meter. Hand work to agents and watch seat revenue shrink while outcome revenue grows
    const F3 = `<div class="spcalc">
        <p class="nc-k sp-k">One support team, one month</p>
        <label class="oc-l" for="spRange">Agents resolve <b id="spPct">40%</b> of 100,000 conversations</label>
        <input class="oc-range sp-range" type="range" id="spRange" min="0" max="80" step="5" value="40">
        <div class="sp-seats" id="spSeats" aria-hidden="true">${"<i></i>".repeat(100)}</div>
        <p class="sp-leg" aria-hidden="true"><span class="p"></span>a person’s seat <span class="a"></span>work done by agents</p>
        <div class="nc-bills" id="spBills"></div>
        <p class="nc-save" id="spRead"></p>
      </div>`;

    return `<div class="viz" data-step="1">
      <div class="frame f1">${F1}<p class="cap">Graph: the S&amp;P 500 software and services index in 2026, drawn as a schematic from Reuters figures. Down 26%+ from late January to the April low, up 5% on the year by October 6.</p></div>
      <div class="frame f2">${F2}<p class="cap">Nadella’s half: agents skip the screen. My half: they hit the record and its rules far more often than people ever did.</p></div>
      <div class="frame f3">${F3}<p class="cap"><span class="cap-l">Illustrative: 100 people, 1,000 conversations each, and every conversation an agent resolves billed as one outcome. Intercom list prices: $85 a seat a month (Advanced, billed annually), from $0.99 per Fin outcome.</span><span class="cap-s">Illustrative. Intercom list prices: $85 a seat a month, from $0.99 per outcome.</span></p></div>
    </div>`;
  },

  gpulife() {
    // ---- frame 1: two clocks. The books' straight line, Burry's 2–3 year band, and what the market actually paid
    const X = a => 50 + a * 40, Y = v => 236 - v * 1.7, P = (a, v) => `${X(a)} ${Y(v).toFixed(1)}`;
    const gens = Array.from({ length: 9 }, (_, i) => `<rect x="${X(i + 1) - 5}" y="34" width="10" height="10" rx="2" fill="var(--ink-3)" stroke="var(--violet)"/><path d="M${X(i + 1) - 2} 34 V31 M${X(i + 1) + 2} 34 V31 M${X(i + 1) - 2} 44 V47 M${X(i + 1) + 2} 44 V47" stroke="var(--violet)"/>`).join("");
    const xt = [0, 3, 6, 9].map(a => `<line class="ax" x1="${X(a)}" y1="236" x2="${X(a)}" y2="241"/><text x="${X(a)}" y="256" text-anchor="middle" font-size="12">${a}</text>`).join("");
    const F1 = `<svg viewBox="0 0 460 290" role="img" aria-label="Share of a GPU's original value by age. The books write it down in a straight line over six years. Burry says two to three years. The market: an H100 system in its third year resold for about 45 percent of a new one in late 2025, and one A100 contract runs to age nine, through 2029. Nvidia releases a new flagship every year.">
        <text x="50" y="22" font-size="12" font-weight="700" style="fill:var(--violet)">A new Nvidia flagship every year</text>${gens}
        <line class="ax" x1="50" y1="236" x2="420" y2="236"/><line class="ax" x1="50" y1="66" x2="50" y2="236"/>
        <text x="44" y="${Y(100) + 4}" text-anchor="end" font-size="11">100%</text><text x="44" y="${Y(50) + 4}" text-anchor="end" font-size="11">50%</text><text x="44" y="240" text-anchor="end" font-size="11">0</text>
        ${xt}<text x="235" y="278" text-anchor="middle" font-size="12">Age of the GPU, years</text>
        <path class="gl-draw gl-burry" d="M${P(0, 100)} L${P(2, 0)} L${P(3, 0)} Z" pathLength="100" fill="rgba(244,151,122,.16)" stroke="var(--coral)" stroke-width="2" stroke-linejoin="round"/>
        <text x="56" y="196" font-size="12" font-weight="800" style="fill:var(--coral)">Burry:</text><text x="56" y="212" font-size="12" font-weight="800" style="fill:var(--coral)">2–3 years</text>
        <path class="gl-draw" d="M${P(0, 100)} L${P(6, 0)}" pathLength="100" fill="none" stroke="var(--amber)" stroke-width="2.4" stroke-dasharray="7 5"/>
        <text x="226" y="165" font-size="13" font-weight="800" style="fill:var(--amber)">Books: 6 years</text>
        <g class="gl-mkt"><circle class="sp-ping" cx="${X(2.5)}" cy="${Y(45)}" r="7" fill="none" stroke="var(--beat)" stroke-width="2"/><circle cx="${X(2.5)}" cy="${Y(45)}" r="7" fill="var(--beat)"/>
          <path d="M${X(2.5) + 4} ${Y(45) - 8} L168 118" stroke="var(--beat)" stroke-dasharray="3 3"/><text x="172" y="100" class="t-strong" font-size="13" style="fill:var(--beat)">H100 system, year 3:</text><text x="172" y="116" font-size="12">resold for ~45% of new</text>
          <path d="M${X(6)} ${Y(14)} H${X(9)}" stroke="var(--beat)" stroke-width="3" stroke-linecap="round"/><path d="M${X(9) - 7} ${Y(14) - 5} L${X(9)} ${Y(14)} L${X(9) - 7} ${Y(14) + 5}" fill="none" stroke="var(--beat)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          <text x="${X(7.5)}" y="${Y(14) - 10}" text-anchor="middle" class="t-strong" font-size="12" style="fill:var(--beat)">A100: rented to age 9</text></g>
      </svg>`;

    // ---- frame 2: the compute menu. A chip works its way down from the specials to the value menu
    const MENU = [["Frontier training", "Rubin, Blackwell", "MP"], ["Frontier serving", "Blackwell, H200", "MP"], ["Everyday inference, fine-tuning", "H100, age 3–4", "$2.82"], ["Batch jobs, research, second owners", "A100, age 6", "$1.29"]];
    const F2 = `<div class="gm">
        <div class="gm-board">
          <p class="gm-h">Today’s compute menu</p>
          <ol class="gm-list">${MENU.map(([it, ch, pr], i) => `<li style="--i:${i}"><span class="it">${it}<small>${ch}</small></span><span class="dots" aria-hidden="true"></span><span class="pr">${pr}</span></li>`).join("")}</ol>
          <span class="gm-chip" aria-hidden="true"><i></i><b>GPU</b></span>
          <p class="gm-foot">Per GPU-hour, Silicon Data indexes. MP = market price. One A100 contract runs through 2029.</p>
        </div>
      </div>`;

    // ---- frame 3: does one H100 pay for itself? Drag the yearly price change
    const F3 = `<div class="glcalc">
        <p class="nc-k gl-k">One H100, six years</p>
        <label class="oc-l" for="glRange">Its rental price changes <b id="glG">−25%</b> a year</label>
        <div class="sx-rw"><input class="oc-range gl-range" type="range" id="glRange" min="-60" max="20" step="5" value="-25">
          <div class="sx-ticks" aria-hidden="true"><span style="--p:${(10 / 80 * 100).toFixed(1)}%">Burry’s world</span><span class="end" style="--p:${(80 / 80 * 100).toFixed(1)}%">2026: rising</span></div></div>
        <svg class="gl-chart" id="glChart" viewBox="0 0 460 150" role="img" aria-label="Cash earned each year by one H100 and the running total against its cost."></svg>
        <p class="sx-out gl-out" id="glOut"></p>
      </div>`;

    return `<div class="viz" data-step="1">
      <div class="frame f1">${F1}<p class="cap">Straight-line book value versus market evidence. Resale from Silicon Data via Dow Jones (Dec 2025); A100 contract from CoreWeave (Aug 2026).</p></div>
      <div class="frame f2">${F2}<p class="cap">The newest chips sell at whatever the market bears. Older ones move down to cheaper work, and still get paid.</p></div>
      <div class="frame f3">${F3}<p class="cap"><span class="cap-l">Illustrative: $35,000 all-in per H100 (chip plus its share of server and network), starting at today’s $2.82 index rate, 70% utilized, about 40 cents an hour for power and data-center space.</span><span class="cap-s">Illustrative: $35K all-in, $2.82/hr start, 70% utilized.</span></p></div>
    </div>`;
  },

  spacex() {
    // ---- frame 1: the exchange counter. Share certificates slide across; no cash changes hands
    const cert = (x, y, s = 1, cls = "") => `<g class="${cls}" transform="translate(${x} ${y}) scale(${s})"><rect x="-26" y="-17" width="52" height="34" rx="3" fill="#f7fafc" stroke="#3fd6c8" stroke-width="1.6"/><rect x="-21" y="-12" width="42" height="24" rx="2" fill="none" stroke="#a6eee6"/><path d="M-12 5 L-9 -6 L-6 5 Z" fill="#d4e3f0"/><text x="7" y="1" text-anchor="middle" font-size="9" font-weight="900" style="fill:#0b1828">SPCX</text><path d="M-2 6 H16" stroke="#c9d8e6"/></g>`;
    const flow = Array.from({ length: 4 }, (_, i) => `<g opacity="0"><g transform="scale(.55)">${cert(0, 0)}</g><animateMotion dur="2.8s" begin="-${(i * .7).toFixed(2)}s" repeatCount="indefinite" path="M150 92 C200 60 260 60 312 92"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.15;.8;1" dur="2.8s" begin="-${(i * .7).toFixed(2)}s" repeatCount="indefinite"/></g>`).join("");
    const TL = [["Apr 21", "option to buy"], ["Jun 12", "IPO at $135"], ["Jun 16", "exercised"], ["Aug 14", "closed"]];
    const tl = TL.map(([d, l], i) => { const x = 60 + i * 113; return `<circle cx="${x}" cy="226" r="${i === 2 ? 8 : 6}" fill="${i === 2 ? "var(--violet)" : "var(--ink-2)"}" stroke="var(--violet)" stroke-width="2"/><text x="${x}" y="254" text-anchor="middle" class="t-strong" font-size="13">${d}</text><text x="${x}" y="271" text-anchor="middle" font-size="12">${l}</text>`; }).join("");
    const F1 = `<svg viewBox="0 0 460 290" role="img" aria-label="An exchange counter. SpaceX pays for Cursor with about 389 million new shares worth 60 billion dollars and no cash. Timeline: an option to buy on April 21, the IPO at 135 dollars on June 12, the option exercised four days later on June 16, and the deal closed on August 14, 2026.">
        <text x="230" y="22" text-anchor="middle" font-size="12" font-weight="800" style="fill:var(--violet);letter-spacing:.18em">EXCHANGE COUNTER</text>
        ${cert(78, 104, 1.5)}${cert(72, 96, 1.5)}${cert(66, 88, 1.5)}
        <text x="74" y="150" text-anchor="middle" class="t-strong" font-size="14">~389M new shares</text><text x="74" y="167" text-anchor="middle" font-size="12">SpaceX Class A</text>
        <path d="M150 92 C200 60 260 60 312 92" fill="none" stroke="var(--rule)" stroke-dasharray="4 5"/>
        ${flow}
        <g transform="translate(372 96)"><path d="M-54 -26 L-40 -40 H54 L40 -26 Z" fill="#12253b" stroke="var(--violet)"/><rect x="-54" y="-26" width="94" height="58" rx="3" fill="var(--ink-2)" stroke="var(--violet)" stroke-width="1.6"/><path d="M40 -26 L54 -40 V18 L40 32 Z" fill="#0b1828" stroke="var(--violet)"/>
          <text x="-7" y="2" text-anchor="middle" class="t-strong" font-size="16">CURSOR</text><text x="-7" y="20" text-anchor="middle" font-size="12">AI coding</text></g>
        <text x="372" y="150" text-anchor="middle" class="t-strong" font-size="14" style="fill:var(--amber)">$60B, all stock</text><text x="372" y="167" text-anchor="middle" font-size="12">cash paid: $0</text>
        <line class="ax" x1="40" y1="226" x2="420" y2="226"/>
        <path d="M173 204 V198 H286 V204" fill="none" stroke="var(--violet)"/><text x="230" y="192" text-anchor="middle" font-size="12" font-weight="800" style="fill:var(--violet)">+4 days</text>
        ${tl}
      </svg>`;

    // ---- frame 2: mission control's go / no-go poll for the whole bet
    const POLL = [["go", "Starship reaches orbit", "Sept 28, Flight 14"], ["next", "Ship caught by the tower", "maybe Flight 15"], ["go", "Starlink pays the bills", "$11.4B in 2025"], ["hold", "AI compute renters stay", "90-day outs"], ["hold", "The stock stays expensive", "more lock-ups end Oct–Dec"], ["next", "Neutron reaches the pad", "target: end of 2026"], ["next", "Rocket Lab closes Iridium", "expected mid-2027"]];
    const WORD = { go: "GO", hold: "HOLD", next: "NEXT" };
    const F2 = `<div class="gng">
        <p class="nc-k sx-k">Go / no-go: what the space bet needs</p>
        <ol class="gng-list">${POLL.map(([st, sys, ev], i) => `<li class="${st}" style="--i:${i}"><span class="sys">${sys}</span><span class="ev">${ev}</span><span class="st">${WORD[st]}</span></li>`).join("")}</ol>
      </div>`;

    // ---- frame 3: the house of brands, and the exchange rate that funds it
    const BRANDS = [["Launch", 46], ["Starlink", 62], ["xAI", 52], ["X", 40], ["Cursor", 56]];
    let bx = 100;
    const shelf = BRANDS.map(([n, h], i) => { const w = Math.max(30, n.length * 7 + 18), x = bx; bx += w + 6; const isNew = n === "Cursor"; return `<g class="${isNew ? "sx-new" : ""}"><rect x="${x}" y="${84 - h}" width="${w}" height="${h}" rx="3" fill="${isNew ? "rgba(63,214,200,.16)" : "var(--ink-2)"}" stroke="${isNew ? "var(--amber)" : "var(--violet)"}" stroke-width="1.4"/><text x="${x + w / 2}" y="${80 - h / 2 + 4}" text-anchor="middle" class="t-strong" font-size="13">${n}</text>${isNew ? `<text x="${x + w / 2}" y="${76 - h}" text-anchor="middle" font-size="10" font-weight="800" style="fill:var(--amber);letter-spacing:.1em">NEW</text>` : ""}</g>`; }).join("") +
      `<g class="sx-next"><rect x="${bx}" y="34" width="50" height="50" rx="3" fill="none" stroke="var(--faint)" stroke-dasharray="5 4"/><text x="${bx + 25}" y="64" text-anchor="middle" font-size="13" font-weight="800" style="fill:var(--faint)">next?</text></g>`;
    const F3 = `<div class="sxcalc">
        <svg class="sx-shelf" viewBox="0 0 460 110" role="img" aria-label="A store shelf labeled SpaceX and Co. holding Launch, Starlink, xAI, X and the newest product, Cursor, with an empty slot marked next.">
          <text x="14" y="52" class="t-strong" font-size="14">SPACEX</text><text x="14" y="70" font-size="12">&amp; Co.</text>
          ${shelf}
          <rect x="92" y="84" width="358" height="7" rx="2" fill="var(--violet)" opacity=".7"/><path d="M110 91 V104 M432 91 V104" stroke="var(--violet)" stroke-width="3" opacity=".5"/>
        </svg>
        <label class="oc-l" for="sxRange">SpaceX trades at <b id="sxM">95×</b> its 2025 revenue</label>
        <div class="sx-rw"><input class="oc-range sx-range" type="range" id="sxRange" min="10" max="130" step="5" value="95">
          <div class="sx-ticks" aria-hidden="true"><span style="--p:${(10 / 120 * 100).toFixed(1)}%">Cursor 20×</span><span style="--p:${(85 / 120 * 100).toFixed(1)}%">IPO 95×</span><span class="end" style="--p:${(115 / 120 * 100).toFixed(1)}%">Oct 6 ~125×</span></div></div>
        <div class="nc-bills" id="sxBills"></div>
        <p class="sx-out" id="sxOut"></p>
      </div>`;

    return `<div class="viz" data-step="1">
      <div class="frame f1">${F1}<p class="cap">The Cursor deal, as SpaceX paid for it. New shares based on SpaceX’s volume-weighted average price.</p></div>
      <div class="frame f2">${F2}<p class="cap">Status as of October 6, 2026.</p></div>
      <div class="frame f3">${F3}<p class="cap"><span class="cap-l">Simplified: SpaceX’s 2025 revenue ($18.7B) as the base; Cursor at $60B with $3B of run-rate revenue (later reports said $4B, which flatters the deal). Revenue, not profit. Ignores costs, debt and synergies.</span><span class="cap-s">Simplified: SpaceX’s 2025 revenue as the base; Cursor at $60B and ~$3B run rate.</span></p></div>
    </div>`;
  },

  weights() {
    // ---- frame 2: compute in, one file out, three ways out
    const yr = [2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027];
    const bars = yr.map((y, i) => { const h = 6 + Math.pow(2.4, i) / Math.pow(2.4, 7) * 128; return `<rect class="g-bar grow v" x="${24 + i * 22}" y="${190 - h}" width="15" height="${h}" fill="var(--amber)" opacity="${(.35 + i * .09).toFixed(2)}"/>`; }).join("");
    const grid = Array.from({ length: 48 }, (_, i) => `<rect x="${336 + (i % 8) * 11}" y="${84 + Math.floor(i / 8) * 11}" width="9" height="9" rx="1" fill="var(--violet)" opacity="${(.25 + ((i * 37) % 11) / 14).toFixed(2)}"/>`).join("");
    const F2 = `<svg viewBox="0 0 460 320" role="img" aria-label="Frontier training costs grow about 2.4 times a year, reaching about a billion dollars per run by 2027. The output is one file: a trillion weights at 16 bits is about 2 terabytes. Capability can leave by theft of the file, by distillation through the API, or through an insider.">
        <text x="20" y="22" class="t-strong" font-size="15">Training bill per frontier run</text>
        <text x="20" y="40" font-size="12">~2.4× a year (Epoch AI)</text>
        ${bars}
        <line class="ax" x1="18" y1="190" x2="200" y2="190"/>
        <text x="27" y="206" font-size="11">2020</text><text x="178" y="206" text-anchor="middle" font-size="11">2027</text>
        <text x="178" y="50" text-anchor="middle" font-size="12" style="fill:var(--amber)" font-weight="700">~$1B</text>
        <path class="wt-flow" d="M206 120 H318" stroke="var(--paper)" stroke-width="2" stroke-dasharray="6 6" fill="none"/>
        <path d="M310 113 L318 120 L310 127" stroke="var(--paper)" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        <text x="262" y="108" text-anchor="middle" font-size="12">compressed into</text>
        <path d="M328 72 H408 L428 92 V160 H328 Z" fill="var(--ink-2)" stroke="var(--violet)" stroke-width="1.5"/><path d="M408 72 V92 H428" fill="none" stroke="var(--violet)" stroke-width="1.5"/>
        ${grid}
        <text x="378" y="182" text-anchor="middle" class="t-strong" font-size="14">weights.bin ≈ 2 TB</text>
        <text x="378" y="198" text-anchor="middle" font-size="11">1 trillion weights × 2 bytes</text>
        <line class="ax" x1="20" y1="226" x2="440" y2="226"/>
        <text x="20" y="248" class="t-strong" font-size="14">Three ways the capability leaves</text>
        ${[["Copy the file", "theft or a leak", "var(--coral)"], ["Distill it", "16M+ exchanges", "var(--amber)"], ["Walk it out", "an insider", "var(--violet)"]].map(([a, b, c], i) => `<rect x="${20 + i * 142}" y="260" width="132" height="50" rx="5" fill="var(--ink-2)" stroke="${c}"/><text x="${86 + i * 142}" y="281" text-anchor="middle" class="t-strong" font-size="13">${a}</text><text x="${86 + i * 142}" y="299" text-anchor="middle" font-size="11">${b}</text>`).join("")}
      </svg>`;

    // ---- frame 3: RAND's five levels as vault rings around the weights
    const LV = [["SL1", "Hobbyist hackers"], ["SL2", "Professional opportunists"], ["SL3", "Crime groups, insiders"], ["SL4", "Standard state operations"], ["SL5", "Top nation-state operations"]];
    const rings = LV.map(([n], i) => { const r = 128 - i * 22, last = i === 4; return `<circle cx="140" cy="160" r="${r}" fill="none" stroke="${last ? "var(--coral)" : "var(--violet)"}" stroke-width="${last ? 2 : 6}" opacity="${last ? 1 : (.25 + i * .14).toFixed(2)}" ${last ? `stroke-dasharray="4 6" class="wt-ring5"` : ""}/>`; }).join("");
    const labels = LV.map(([n, d], i) => { const y = 72 + i * 42, last = i === 4, r = 128 - i * 22, a = Math.atan2(y - 10 - 160, 300 - 140); return `<line x1="${(140 + r * Math.cos(a)).toFixed(1)}" y1="${(160 + r * Math.sin(a)).toFixed(1)}" x2="300" y2="${y - 10}" stroke="var(--faint)" stroke-width=".8"/><text x="306" y="${y - 6}" class="t-strong" font-size="13" ${last ? `style="fill:var(--coral)"` : ""}>${n}</text><text x="306" y="${y + 9}" font-size="11">${d}</text>`; }).join("");
    const F3 = `<svg viewBox="0 0 460 320" data-freeze-at="2.2" role="img" aria-label="RAND's five security levels drawn as rings around the weights. Levels 1 to 4 stop attackers up to standard state operations. Level 5, against top-priority nation-state operations, is drawn dashed because RAND says it is not currently achievable.">
        ${rings}
        <circle cx="140" cy="160" r="26" fill="var(--amber)" opacity=".18"/><circle class="wt-core" cx="140" cy="160" r="16" fill="var(--amber)"/>
        <text x="140" y="164" text-anchor="middle" font-size="10" style="fill:var(--ink)" font-weight="800">W</text>
        <g class="wt-attacker"><animateMotion dur="5s" repeatCount="indefinite" path="M24 52 L140 160" keyPoints="0;.51;.51;.87;.87" keyTimes="0;.35;.55;.8;1" calcMode="linear"/><animate attributeName="opacity" dur="5s" repeatCount="indefinite" values="0;1;1;0" keyTimes="0;.08;.9;1"/><circle r="5" fill="var(--coral)"/><text x="-9" y="-8" text-anchor="end" font-size="11" font-weight="700" style="fill:var(--coral)">Attacker</text></g>
        ${labels}
        <text x="306" y="290" font-size="12" style="fill:var(--coral)" font-weight="700">SL5: “currently not possible”</text>
        <text x="306" y="306" font-size="11">5+ years, per labs RAND spoke to</text>
      </svg>`;

    return `<div class="viz" data-step="1">
      <div class="frame f1"><div class="nt">
        <p class="nt-k" id="ntK">Pass 1</p>
        <div class="nt-row" id="ntRow" aria-live="off"></div>
        <svg class="nt-net" viewBox="0 0 460 70" aria-hidden="true">${Array.from({ length: 23 }, (_, i) => `<line x1="${10 + i * 20}" y1="0" x2="${150 + i * 7}" y2="60"/>`).join("")}<rect x="140" y="58" width="180" height="10" rx="3"/></svg>
        <p class="nt-w">The weights score every possible next token</p>
        <ol class="nt-cands" id="ntCands"></ol>
        <div class="nt-ctrl"><button type="button" id="ntStep">Next token</button><button type="button" id="ntPlay" aria-label="Pause">❚❚</button><button type="button" id="ntReset">Start over</button></div>
      </div><p class="cap">Illustrative probabilities. Real models pick from tens of thousands of tokens on every pass.</p></div>
      <div class="frame f2">${F2}<p class="cap">Costs: Cottier et al., Epoch AI. File size is arithmetic: 10¹² weights at 2 bytes each.</p></div>
      <div class="frame f3">${F3}<p class="cap">RAND, “Securing AI Model Weights” (2024). The attacker gets past rings that don’t exist yet.</p></div>
    </div>`;
  },

  backend() {
    // ---- shared wafer for probe and dice
    const CX = 230, CY = 126, R = 104, P = 18, S = 15;
    const dies = [];
    for (let jy = -5; jy <= 5; jy++) for (let ix = -5; ix <= 5; ix++) {
      const x = CX + ix * P, y = CY + jy * P, h = S / 2;
      if (Math.max(Math.hypot(x - h - CX, y - h - CY), Math.hypot(x + h - CX, y - h - CY), Math.hypot(x - h - CX, y + h - CY), Math.hypot(x + h - CX, y + h - CY)) > R - 6) continue;
      const bad = (ix * 3 + jy * 5 + 40) % 13 === 0;
      dies.push({ x: x - h, y: y - h, bad, o: (jy + 5) * 11 + (ix + 5) });
    }
    const dieRects = lit => dies.map(d => `<rect class="bk-d" x="${d.x}" y="${d.y}" width="${S}" height="${S}" rx="1.5" style="--o:${d.o};--c:${d.bad ? "var(--coral)" : "var(--beat)"}${lit ? `;fill:var(--c);fill-opacity:${d.bad ? .9 : .55}` : ""}"/>`).join("");
    const wafer = (lit, extra = "") => `<circle cx="${CX}" cy="${CY}" r="${R}" fill="var(--ink-2)" stroke="var(--rule)" stroke-width="1.5"/><path d="M${CX - 10} ${CY + R} A10 10 0 0 1 ${CX + 10} ${CY + R}" fill="var(--ink)" stroke="var(--rule)"/><g class="bk-dies">${dieRects(lit)}</g>${extra}`;
    // saw streets
    const streets = [];
    for (let i = -6; i <= 5; i++) {
      const off = (i + .5) * P; if (Math.abs(off) >= R - 4) continue;
      const half = Math.sqrt(R * R - off * off) - 2;
      streets.push(`<line class="bk-cut" style="--k:${streets.length}" x1="${CX + off}" y1="${CY - half}" x2="${CX + off}" y2="${CY + half}" pathLength="1"/>`);
      streets.push(`<line class="bk-cut" style="--k:${streets.length}" x1="${CX - half}" y1="${CY + off}" x2="${CX + half}" y2="${CY + off}" pathLength="1"/>`);
    }
    const blade = `<g class="bk-blade"><circle r="16" fill="none" stroke="#c9d8e6" stroke-width="3" stroke-dasharray="2.6 2.6"/><circle r="12" fill="#15304a" stroke="#7f95a8"/><circle r="3" fill="#c9d8e6"/></g>`;
    // ---- shared cross-section for bond and seal
    const xsec = (landed) => {
      const balls = Array.from({ length: 12 }, (_, i) => `<circle cx="${130 + i * 20}" cy="241" r="5" fill="#7f95a8"/>`).join("");
      const c4 = Array.from({ length: 13 }, (_, i) => `<circle cx="${142 + i * 16}" cy="209" r="2.6" fill="#c9d8e6"/>`).join("");
      const hbm = x => Array.from({ length: 7 }, (_, k) => `<rect x="${x}" y="${180 - k * 8}" width="40" height="6.4" rx="1" fill="${k % 2 ? "#3d7fa3" : "#2f6688"}"/>`).join("");
      const mb = xs => xs.map(x => `<circle class="bk-mb" cx="${x}" cy="191.5" r="2.2"/>`).join("");
      return `<rect x="120" y="214" width="240" height="20" rx="2" fill="#1d5a49" stroke="#2f8a6f"/>${balls}${c4}
        <rect x="136" y="196" width="208" height="9" rx="1.5" fill="#2a4d70" stroke="var(--violet)"/>
        <g class="bk-hbm ${landed ? "" : "drop"}">${hbm(144)}${hbm(296)}</g>
        ${mb([150, 160, 170, 178, 202, 214, 226, 238, 250, 262, 274, 302, 312, 322, 330])}
        <g class="bk-gpu ${landed ? "" : "flip"}"><rect x="194" y="160" width="92" height="28" rx="2" fill="#11263c" stroke="var(--amber)" stroke-width="1.4"/><rect x="198" y="162" width="84" height="3" rx="1" fill="var(--amber)" opacity=".85"/></g><text class="bk-gpu-l t-strong" x="240" y="178" text-anchor="middle" font-size="11">GPU</text>`;
    };
    const lbl = (x, y, s, x2, y2, end) => `<line x1="${x2}" y1="${y2}" x2="${end ? x + 4 : x - 4}" y2="${y - 4}" stroke="var(--faint)"/><text x="${x}" y="${y}" font-size="12" ${end ? `text-anchor="end"` : ""}>${s}</text>`;

    const S1 = `<g class="bk-s on" data-s="0">${wafer(false, `<g transform="translate(${CX} ${CY})"><g class="bk-probe"><rect x="-3" y="-140" width="6" height="120" fill="#1d3a57"/><rect x="-14" y="-26" width="28" height="12" rx="2" fill="#2a4d70" stroke="#7f95a8"/><path d="M-8 -14 L-1 -1 M0 -14 L0 -1 M8 -14 L1 -1" stroke="#c9d8e6" stroke-width="1.2"/><circle r="3.4" fill="var(--amber)"/></g></g>`)}
      <text x="${CX}" y="258" text-anchor="middle" font-size="13">Blue passes, orange gets flagged</text></g>`;
    const S2 = `<g class="bk-s" data-s="1">${wafer(true, `<g class="bk-cuts">${streets.join("")}</g><g transform="translate(${CX} ${CY})">${blade}</g>`)}
      <text x="${CX}" y="258" text-anchor="middle" font-size="13">The saw runs down the streets between dies</text></g>`;
    const grid = Array.from({ length: 30 }, (_, i) => { const c = i % 6, r = Math.floor(i / 6), bad = i === 8 || i === 22; return `<rect x="${34 + c * 24}" y="${44 + r * 24}" width="17" height="17" rx="1.5" fill="${bad ? "var(--coral)" : "var(--beat)"}" fill-opacity="${bad ? .9 : .55}"/>`; }).join("");
    const tray = Array.from({ length: 15 }, (_, i) => { const c = i % 5, r = Math.floor(i / 5); return `<rect x="${300 + c * 26}" y="${50 + r * 26}" width="20" height="20" rx="2" fill="${i < 9 ? "var(--beat)" : "none"}" fill-opacity=".55" stroke="#2c6f8f"/>`; }).join("");
    const S3 = `<g class="bk-s" data-s="2">${grid}
      <rect x="290" y="38" width="146" height="94" rx="4" fill="none" stroke="var(--beat)" stroke-width="1.4"/>${tray}
      <text x="363" y="150" text-anchor="middle" font-size="12" class="t-strong">Known-good dies</text>
      <rect x="300" y="176" width="126" height="46" rx="4" fill="rgba(244,151,122,.08)" stroke="var(--coral)" stroke-width="1.4"/>
      <rect x="318" y="196" width="17" height="17" rx="1.5" fill="var(--coral)" opacity=".9"/>
      <text x="363" y="240" text-anchor="middle" font-size="12" class="t-strong">Failed dies</text>
      <g class="bk-pick a"><path d="M0 -56 V-12" stroke="#7f95a8" stroke-width="3"/><rect x="-6" y="-14" width="12" height="6" rx="1" fill="#c9d8e6"/><rect x="-8.5" y="-8" width="17" height="17" rx="1.5" fill="var(--beat)" fill-opacity=".75"/></g>
      <g class="bk-pick b"><path d="M0 -56 V-12" stroke="#7f95a8" stroke-width="3"/><rect x="-6" y="-14" width="12" height="6" rx="1" fill="#c9d8e6"/><rect x="-8.5" y="-8" width="17" height="17" rx="1.5" fill="var(--coral)"/></g>
      <text x="102" y="200" text-anchor="middle" font-size="13">Diced dies, still on tape</text></g>`;
    const S4 = `<g class="bk-s" data-s="3">${xsec(false)}
      ${lbl(372, 146, "HBM stack", 336, 150, false)}${lbl(372, 172, "GPU, face down", 286, 172, false)}
      ${lbl(112, 202, "Interposer", 136, 200, true)}${lbl(112, 228, "Substrate", 120, 224, true)}
      <text x="240" y="272" text-anchor="middle" font-size="13" class="t-strong" style="fill:var(--amber)">Chip-on-wafer-on-substrate: CoWoS, the choke point</text></g>`;
    const S5 = `<g class="bk-s" data-s="4">${xsec(true)}
      <path class="bk-fill" d="M190 190 H290 L296 196 H184 Z M140 190 H188 L184 196 H138 Z M292 190 H340 L342 196 H296 Z" fill="var(--amber)" opacity=".55"/>
      <g class="bk-lid"><path d="M124 214 V128 Q124 122 130 122 H350 Q356 122 356 128 V214 H346 V134 H134 V214 Z" fill="#8fa3b6" stroke="#c9d8e6"/><rect x="134" y="122" width="212" height="6" fill="#c9d8e6" opacity=".6"/></g>
      <text x="240" y="110" text-anchor="middle" font-size="12">Lid and heat spreader</text>${lbl(112, 186, "Underfill", 140, 192, true)}
      <text x="240" y="272" text-anchor="middle" font-size="13">Sealed against moisture, stress and heat</text></g>`;
    const pins = Array.from({ length: 9 }, (_, i) => `<circle cx="${172 + i * 14.5}" cy="54" r="2.4"/><circle cx="${172 + i * 14.5}" cy="186" r="2.4"/><circle cx="164" cy="${62 + i * 14.5}" r="2.4"/><circle cx="296" cy="${62 + i * 14.5}" r="2.4"/>`).join("");
    const done = Array.from({ length: 6 }, (_, i) => `<rect x="${352 + (i % 2) * 40}" y="${60 + Math.floor(i / 2) * 40}" width="30" height="30" rx="3" fill="#08131f" stroke="#2a4d70"/><rect x="${359 + (i % 2) * 40}" y="${67 + Math.floor(i / 2) * 40}" width="16" height="16" rx="2" fill="#8fa3b6"/>`).join("");
    const S6 = `<g class="bk-s" data-s="5">
      <rect x="150" y="40" width="160" height="160" rx="8" fill="var(--ink-2)" stroke="var(--rule)" stroke-width="1.5"/><g fill="#8de8df" opacity=".7">${pins}</g>
      <rect x="176" y="66" width="108" height="108" rx="5" fill="#08131f" stroke="#2a4d70"/><rect x="196" y="86" width="68" height="68" rx="3" fill="#8fa3b6"/>
      <g class="bk-head"><rect x="186" y="-30" width="88" height="60" rx="4" fill="#1d3a57" stroke="#7f95a8"/><rect x="222" y="-70" width="16" height="40" fill="#1d3a57"/></g>
      <text class="bk-pass t-strong" x="230" y="226" text-anchor="middle" font-size="18">PASS</text>
      <rect x="340" y="48" width="96" height="134" rx="4" fill="none" stroke="var(--rule)" stroke-dasharray="4 3"/>${done}
      <text x="388" y="200" text-anchor="middle" font-size="12">Ready to ship</text>
      <text x="230" y="258" text-anchor="middle" font-size="13">Runs at full speed in a socket. Now it’s a chip.</text></g>`;
    const STEPS = ["Probe", "Dice", "Sort", "Bond", "Seal", "Test"];

    // ---- frame 2: the choke point in numbers
    const sq = (mm2, x, y, c, num, name) => { const s = Math.sqrt(mm2) * 2.3; return `<rect x="${x}" y="${y - s}" width="${s}" height="${s}" rx="2" fill="${c}" fill-opacity=".22" stroke="${c}" stroke-width="1.5"/><text x="${x + s / 2}" y="${y + 17}" text-anchor="middle" font-size="13" class="t-strong">${num}</text><text x="${x + s / 2}" y="${y + 32}" text-anchor="middle" font-size="11">${name}</text>`; };
    const F2 = `<svg viewBox="0 0 460 320" role="img" aria-label="Nvidia reportedly reserved more than half of TSMC's 2026 CoWoS capacity and demand runs about 20 percent ahead of supply; GPU silicon roughly doubled from Hopper's 814 square millimeters to about 1,700 across Blackwell's two dies; one supplier makes about 90 percent of the specialist glass cloth in substrates.">
        <text x="20" y="24" class="t-strong" font-size="15">TSMC CoWoS, 2026</text>
        <text x="20" y="44" font-size="12">Supply</text>
        <rect class="g-bar grow" x="76" y="32" width="300" height="18" fill="var(--ink-3)" stroke="var(--rule)"/>
        <rect class="g-bar grow" x="76" y="32" width="160" height="18" fill="var(--amber)"/>
        <text x="84" y="45" font-size="12" style="fill:var(--ink)" font-weight="700">Nvidia, over half</text>
        <text x="20" y="74" font-size="12">Demand</text>
        <rect class="g-bar grow" x="76" y="62" width="300" height="18" fill="var(--paper)" opacity=".18"/>
        <rect class="g-bar grow" x="376" y="62" width="60" height="18" fill="var(--coral)" opacity=".85"/>
        <text x="406" y="98" text-anchor="middle" font-size="12" style="fill:var(--coral)" font-weight="700">~20% short</text>
        <line class="ax" x1="20" y1="122" x2="440" y2="122"/>
        <text x="20" y="148" class="t-strong" font-size="15">GPU silicon per package</text>
        ${sq(814, 30, 276, "var(--violet)", "814 mm²", "Hopper")}${sq(1700, 112, 276, "var(--amber)", "~1,700 mm²", "Blackwell, 2 dies")}
        
        <text x="300" y="148" class="t-strong" font-size="15">Specialist glass cloth</text>
        <circle cx="352" cy="226" r="46" fill="none" stroke="var(--ink-3)" stroke-width="18"/>
        <circle class="bk-donut" cx="352" cy="226" r="46" fill="none" stroke="var(--coral)" stroke-width="18" pathLength="100" stroke-dasharray="90 100" transform="rotate(-90 352 226)"/>
        <text x="352" y="232" text-anchor="middle" class="t-strong" font-size="20">~90%</text>
        <text x="352" y="296" text-anchor="middle" font-size="12">from one supplier, Nittobo.</text>
        <text x="352" y="312" text-anchor="middle" font-size="12">New supply: mid-2027.</text>
      </svg>`;

    // ---- frame 3: the round trip
    const lat = [70, 120, 170, 220].map(y => `<path d="M10 ${y} Q230 ${y - 26} 450 ${y}" fill="none" stroke="var(--grid)"/>`).join("") + [60, 140, 230, 320, 400].map(x => `<path d="M${x} 30 Q${x + (x - 230) * .08} 140 ${x} 250" fill="none" stroke="var(--grid)"/>`).join("");
    const F3 = `<svg viewBox="0 0 460 300" role="img" aria-label="A wafer made in Arizona flies to Taiwan for CoWoS packaging and the finished chip flies back. Packaging lines planned in Arizona would close the loop. In 1963, packaging was the first step to move to Hong Kong.">
        ${lat}
        <text x="230" y="150" text-anchor="middle" font-size="12" style="fill:var(--faint);letter-spacing:.3em">PACIFIC</text>
        <path id="bkOut" d="M106 132 Q235 4 362 122" fill="none" stroke="var(--amber)" stroke-width="1.8" stroke-dasharray="5 5"/>
        <path id="bkBack" d="M108 150 Q235 262 362 140" fill="none" stroke="var(--beat)" stroke-width="1.8" stroke-dasharray="5 5"/>
        <text font-size="12" class="t-strong" dy="-6"><textPath href="#bkOut" startOffset="50%" text-anchor="middle">wafer goes out</textPath></text>
        <text font-size="12" class="t-strong" dy="16"><textPath href="#bkBack" startOffset="50%" text-anchor="middle">chip comes back</textPath></text>
        <circle r="5" fill="var(--amber)"><animateMotion dur="4s" repeatCount="indefinite"><mpath href="#bkOut"/></animateMotion></circle>
        <circle r="5" fill="var(--beat)"><animateMotion dur="4s" begin="-2s" repeatCount="indefinite" keyPoints="1;0" keyTimes="0;1" calcMode="linear"><mpath href="#bkBack"/></animateMotion></circle>
        <circle cx="100" cy="140" r="7" fill="var(--amber)"/>
        <circle cx="100" cy="140" r="22" fill="none" stroke="var(--paper)" stroke-width="1.4" stroke-dasharray="4 4" class="bk-loop"/>
        <text x="100" y="186" text-anchor="middle" class="t-strong" font-size="14">Arizona</text>
        <text x="100" y="203" text-anchor="middle" font-size="12">TSMC fab: wafers</text>
        <circle cx="368" cy="130" r="7" fill="var(--beat)"/>
        <text x="404" y="88" text-anchor="middle" class="t-strong" font-size="14">Taiwan</text>
        <text x="404" y="105" text-anchor="middle" font-size="12">CoWoS packaging</text>
        <circle cx="318" cy="214" r="5" fill="none" stroke="var(--faint)" stroke-width="1.4"/>
        <text x="318" y="238" text-anchor="middle" font-size="12" style="fill:var(--faint)">Hong Kong, 1963:</text>
        <text x="318" y="253" text-anchor="middle" font-size="12" style="fill:var(--faint)">packaging leaves first</text>
        <text x="16" y="270" class="t-strong" font-size="13">Closing the loop in Arizona:</text>
        <text x="16" y="288" font-size="12">Amkor phase 1 due 2028. TSMC CoWoS before 2029.</text>
      </svg>`;

    return `<div class="viz" data-step="1">
      <div class="frame f1"><div class="bk">
        <svg class="bk-stage" viewBox="0 0 460 280" role="img" aria-label="Animated back-end line, from finished wafer to finished chip, in six steps: probe, dice, sort, bond, seal and test.">${S1}${S2}${S3}${S4}${S5}${S6}</svg>
        <div class="bk-steps" role="group" aria-label="Back-end steps">${STEPS.map((s, i) => `<button type="button" data-s="${i}" aria-pressed="${i === 0}"><b>${i + 1}</b>${s}</button>`).join("")}<button type="button" class="bk-play" aria-label="Pause the line">❚❚</button></div>
      </div><p class="cap" id="bkCap">Probe. Needles touch every die on the finished wafer, and bad ones are flagged before anyone pays to package them.</p></div>
      <div class="frame f2">${F2}<p class="cap">Sources: TrendForce (June and Aug 2026), Tom’s Hardware (Mar 2026). Squares drawn to scale.</p></div>
      <div class="frame f3">${F3}<p class="cap">Simplified map. The first US-made Blackwell wafer, October 2025, still needed CoWoS in Taiwan.</p></div>
    </div>`;
  },

  bloom() {
    // ---- frame 1: two power paths into a GPU
    const box = (x, y, w, t1, t2, c, conv) => `<rect x="${x}" y="${y}" width="${w}" height="48" rx="5" fill="var(--ink-2)" stroke="${c}" stroke-width="1.4"/><text x="${x + w / 2}" y="${y + 21}" text-anchor="middle" font-size="12" class="t-strong">${t1}</text><text x="${x + w / 2}" y="${y + 37}" text-anchor="middle" font-size="11">${t2}</text>${conv ? `<circle cx="${x + w - 2}" cy="${y + 2}" r="8" fill="var(--coral)"/><text x="${x + w - 2}" y="${y + 6}" text-anchor="middle" font-size="10" style="fill:var(--ink)" font-weight="800">⟳</text>` : ""}`;
    const AC = [["Grid", "AC", 0], ["Substation", "step down", 1], ["Switchgear", "AC", 0], ["UPS", "AC→DC→AC", 1], ["Rack PSU", "AC→DC", 1]];
    const top = AC.map(([a, b, c], i) => box(14 + i * 74, 52, 64, a, b, "var(--rule)", c)).join("") + box(388, 52, 60, "GPU", "DC", "var(--beat)", 0);
    const bot = box(14, 180, 120, "Fuel cell", "makes DC", "var(--beat)", 0) + box(168, 180, 120, "800 V DC bus", "Kyber, 2027", "var(--beat)", 0) + box(322, 180, 126, "Rack → GPU", "DC", "var(--beat)", 0);
    const flowTop = `<path id="blTop" d="M22 76 H440" fill="none"/>${[0, 1, 2, 3, 4, 5].map(i => `<circle class="bl-dot fade" r="3.4" style="animation-delay:-${(i * .5).toFixed(1)}s"><animateMotion dur="3s" repeatCount="indefinite" begin="-${(i * .5).toFixed(1)}s"><mpath href="#blTop"/></animateMotion></circle>`).join("")}`;
    const flowBot = `<path id="blBot" d="M22 204 H440" fill="none"/>${[0, 1, 2, 3, 4, 5].map(i => `<circle class="bl-dot" r="3.4"><animateMotion dur="2.2s" repeatCount="indefinite" begin="-${(i * .37).toFixed(2)}s"><mpath href="#blBot"/></animateMotion></circle>`).join("")}`;
    const F1 = `<svg viewBox="0 0 460 280" role="img" aria-label="Today, grid power passes a substation, switchgear, a UPS and a rack power supply, converting between AC and DC several times before reaching the GPU as DC. A fuel cell makes DC and can feed an 800-volt DC bus straight to the rack.">
        <text x="14" y="30" class="t-strong" font-size="15">Grid power today</text>
        <text x="446" y="30" text-anchor="end" font-size="12" style="fill:var(--coral)">⟳ = a conversion</text>
        ${flowTop}${top}
        <text x="14" y="158" class="t-strong" font-size="15">Fuel cell, 800 V DC</text>
        ${flowBot}${bot}
        <text x="230" y="266" text-anchor="middle" font-size="13">Fewer boxes, fewer losses, less backlogged gear.</text>
      </svg>`;

    // ---- frame 2: the race to power, and what happens inside the cell
    const yrX = y => 120 + (y - 2026) * 62;
    const ions = Array.from({ length: 7 }, (_, i) => `<circle class="bl-ion" cx="${150 + i * 30}" cy="232" r="3.6" style="animation-delay:${(i * .28).toFixed(2)}s"/>`).join("");
    const F2 = `<svg viewBox="0 0 460 320" role="img" aria-label="Time to power: Bloom delivered to Oracle in 55 days, while a gas turbine ordered in 2026 arrives around 2031. Below, a solid oxide cell: oxygen ions cross a ceramic electrolyte and react with fuel without combustion, releasing electrons as DC.">
        <text x="14" y="24" class="t-strong" font-size="15">Time to power</text>
        ${[2026, 2027, 2028, 2029, 2030, 2031].map(y => `<line class="gridl" x1="${yrX(y)}" y1="36" x2="${yrX(y)}" y2="112"/><text x="${yrX(y)}" y="128" text-anchor="middle" font-size="12">${y}</text>`).join("")}
        <text x="110" y="58" text-anchor="end" font-size="12" class="t-strong">Fuel cells</text>
        <rect class="g-bar grow" x="120" y="46" width="${(55 / 365 * 62).toFixed(1)}" height="16" fill="var(--beat)"/>
        <text x="${(132 + 55 / 365 * 62).toFixed(0)}" y="59" font-size="12" style="fill:var(--beat)" font-weight="700">55 days (Oracle)</text>
        <text x="110" y="94" text-anchor="end" font-size="12" class="t-strong">Gas turbine</text>
        <rect class="g-bar grow" x="120" y="82" width="${5 * 62}" height="16" fill="var(--coral)" opacity=".8"/>
        <text x="${120 + 5 * 62 - 6}" y="95" text-anchor="end" font-size="12" style="fill:var(--ink)" font-weight="700">ordered now, ships ~2031</text>
        <text x="14" y="166" class="t-strong" font-size="15">Inside a solid oxide cell</text>
        <rect x="120" y="178" width="240" height="30" rx="3" fill="#2a4a6a" stroke="#6aa8ff" stroke-opacity=".5"/><text x="240" y="198" text-anchor="middle" font-size="12" class="t-strong">Air side: oxygen in</text>
        <rect x="120" y="212" width="240" height="40" fill="#5a4a2a" fill-opacity=".55" stroke="var(--amber)" stroke-opacity=".6"/><text x="372" y="236" font-size="12">ceramic</text>
        <rect x="120" y="256" width="240" height="30" rx="3" fill="#15304a" stroke="var(--violet)" stroke-opacity=".6"/><text x="240" y="276" text-anchor="middle" font-size="12" class="t-strong">Fuel side: gas in, no flame</text>
        ${ions}
        <text x="110" y="236" text-anchor="end" font-size="12" style="fill:var(--beat)">O²⁻ ions</text>
        <path class="bl-wire" d="M360 272 H420 V192 H360" fill="none" stroke="var(--amber)" stroke-width="2" stroke-dasharray="6 5"/>
        <text x="424" y="236" font-size="12" style="fill:var(--amber)" font-weight="700">DC</text>
        <text x="240" y="310" text-anchor="middle" font-size="12">Electrons take the outside path: that’s the power.</text>
      </svg>`;

    // ---- frame 3: size a campus
    const cells = Array.from({ length: 100 }, (_, i) => `<i style="--i:${i}"></i>`).join("");
    const F3 = `<div class="blcalc">
        <label class="oc-l" for="blRange">Power a campus of</label>
        <output class="oc-x" id="blMW" for="blRange">300 MW</output>
        <input class="oc-range" type="range" id="blRange" min="10" max="1000" step="10" value="300" aria-describedby="blRead">
        <div class="bl-grid" id="blGrid" aria-hidden="true">${cells}</div>
        <p class="oc-o" id="blRead"></p>
      </div>`;

    return `<div class="viz bl" data-step="1">
      <div class="frame f1">${F1}<p class="cap">Simplified. Nvidia moves its racks to 800 V DC with Kyber in 2027; today’s chain converts AC and DC several times.</p></div>
      <div class="frame f2">${F2}<p class="cap">Oracle delivery per Bloom (Apr 2026). Turbine timing per GE Vernova’s reservations, Utility Dive (July 2026).</p></div>
      <div class="frame f3">${F3}<p class="cap">Each square is 10 MW. 325 kW per Energy Server; output at Bloom’s planned 2 GW a year.</p></div>
    </div>`;
  },

  screen() {
    // slide 1: an hour with friends, drawn as a clock that winds back from 60 minutes (2003) to 20 (2020)
    const cx = 136, cy = 166, C = 2 * Math.PI * 46;
    const pt = (m, r) => { const a = (m / 60 * 360 - 90) * Math.PI / 180; return [cx + r * Math.cos(a), cy + r * Math.sin(a)]; };
    const ticks = Array.from({ length: 60 }, (_, m) => { const [x1, y1] = pt(m, m % 5 ? 95 : 89), [x2, y2] = pt(m, 100); return `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" class="${m % 5 ? "st-tk" : "st-tk5"}"/>`; }).join("");
    const nums = [[0, "0"], [15, "15"], [30, "30"], [45, "45"]].map(([m, l]) => { const [x, y] = pt(m, 124); return `<text x="${x.toFixed(1)}" y="${(y + 4).toFixed(1)}" text-anchor="middle" font-size="12">${l}</text>`; }).join("");
    const [lx, ly] = pt(40, 60), [wx, wy] = pt(10, 58);
    // slide 2: the same freed-up hour can flow to a feed or to your people
    const top = "M84 160 C150 160 150 92 226 92", bot = "M84 160 C150 160 150 228 226 228";
    const dots = (d, cls) => [0, -.7, -1.4, -2.1].map(b => `<circle r="3.2" class="${cls}"><animateMotion dur="2.8s" begin="${b}s" repeatCount="indefinite" path="${d}"/></circle>`).join("");
    const av = [[232, 219, "#8fb7e6", "MC"], [254, 209, "#f4977a", "RP"], [276, 219, "#ffd98a", "AN"]];
    // slide 3: the group chat flatlines, then EchoTempo turns it into a plan (after the EchoTempo LinkedIn graphic)
    const confetti = [[214, 70, "var(--amber)", 0], [244, 18, "var(--beat)", .4], [300, 8, "#ffd98a", .9], [356, 14, "var(--coral)", .2], [420, 24, "var(--amber)", 1.2], [446, 70, "var(--violet)", .6], [204, 120, "#ffd98a", 1.5], [440, 130, "var(--beat)", 1], [190, 250, "var(--coral)", .3], [300, 224, "var(--amber)", 1.7], [176, 198, "var(--violet)", .8], [452, 196, "#ffd98a", 1.9]];
    const nest = (svg, x, y, w, h) => svg.replace("<svg ", `<svg x="${x}" y="${y}" width="${w}" height="${h}" style="width:${w}px;height:${h}px" `);
    return `<div class="viz" data-step="1">
      <div class="frame f1"><svg viewBox="0 0 440 320" role="img" aria-label="A clock of daily in-person time with friends: a full 60 minutes in 2003, wound back to 20 minutes in 2020. Ages 15 to 24 are down about 70 percent.">
        <defs><pattern id="stHatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="6" height="6" fill="var(--ink-2)"/><line x1="0" y1="0" x2="0" y2="6" stroke="var(--coral)" stroke-opacity=".45" stroke-width="2"/></pattern></defs>
        <circle cx="${cx}" cy="${cy}" r="110" class="st-ring"/>
        <circle cx="${cx}" cy="${cy}" r="100" class="st-face"/>
        <circle cx="${cx}" cy="${cy}" r="46" class="st-lost" stroke="url(#stHatch)" stroke-dasharray="${(C * 2 / 3).toFixed(2)} ${C.toFixed(2)}" stroke-dashoffset="${(-C / 3).toFixed(2)}" transform="rotate(-90 ${cx} ${cy})"/>
        <circle cx="${cx}" cy="${cy}" r="46" class="st-wedge" style="--c:${C.toFixed(2)}" stroke-dasharray="${(C / 3).toFixed(2)} ${C.toFixed(2)}" transform="rotate(-90 ${cx} ${cy})"/>
        ${ticks}${nums}
        <g class="st-hand" style="transform-origin:${cx}px ${cy}px"><line x1="${cx}" y1="${cy}" x2="${cx}" y2="${cy - 86}"/></g>
        <circle cx="${cx}" cy="${cy}" r="6" fill="var(--paper)"/>
        <g class="st-after"><text x="${wx.toFixed(1)}" y="${(wy + 5).toFixed(1)}" text-anchor="middle" font-size="15" class="st-in">20 min</text><text x="${lx.toFixed(1)}" y="${(ly + 5).toFixed(1)}" text-anchor="middle" font-size="15" class="t-strong st-out">−40 min</text></g>
        <text x="276" y="80" class="st-big"><tspan class="a">60</tspan><tspan class="ar"> → </tspan><tspan class="b">20</tspan></text>
        <text x="276" y="104" font-size="14">minutes a day with friends,</text>
        <text x="276" y="121" font-size="14">in person, 2003 → 2020</text>
        <g transform="translate(276 150)" font-size="13"><rect y="-8" width="16" height="6" rx="3" fill="var(--violet)" opacity=".5"/><text x="24" y="-1">2003: a full hour</text><rect y="12" width="16" height="10" rx="2" fill="var(--coral)"/><text x="24" y="21">2020: 20 minutes</text><rect y="34" width="16" height="10" rx="2" fill="url(#stHatch)" stroke="var(--coral)" stroke-opacity=".5"/><text x="24" y="43">the 40 minutes that went</text></g>
        <text x="276" y="240" class="t-strong" font-size="15" style="fill:var(--coral)">Ages 15 to 24:</text><text x="276" y="258" font-size="15" style="fill:var(--coral)">down about 70%</text>
      </svg><p class="cap">Average daily time with friends in person, U.S. (Surgeon General’s advisory, 2023).</p></div>
      <div class="frame f2"><svg viewBox="0 0 460 320" role="img" aria-label="Illustration: hours that AI hands back can flow to a feed, which counts minutes on screen, or to your people, which counts hours spent together.">
        <text x="16" y="24" class="t-strong" font-size="17">Where do the hours go?</text>
        ${[0, 1, 2].map(i => `<g transform="translate(30 ${120 + i * 28})"><g class="st-tok" style="--d:${(i * .25).toFixed(2)}s"><rect width="46" height="24" rx="6"/><text x="23" y="16.5" text-anchor="middle" font-size="13" class="t-strong">1h</text></g></g>`).join("")}
        <text x="53" y="222" text-anchor="middle" font-size="13">Hours AI</text><text x="53" y="238" text-anchor="middle" font-size="13">hands back</text>
        <path d="${top}" class="st-ch feed"/><path d="${bot}" class="st-ch ppl"/>
        <path d="${top}" class="st-core feed"/><path d="${bot}" class="st-core ppl"/>
        ${dots(top, "st-dot feed")}${dots(bot, "st-dot ppl")}
        <g transform="translate(232 56)"><rect width="44" height="74" rx="9" class="st-phone"/><clipPath id="stFeedClip"><rect x="4" y="9" width="36" height="56" rx="3"/></clipPath><g clip-path="url(#stFeedClip)"><g class="st-scroll">${[0, 1, 2, 3, 4, 5].map(i => `<rect x="7" y="${11 + i * 19}" width="30" height="15" rx="2" class="st-post"/>`).join("")}</g></g><rect x="16" y="4" width="12" height="2.4" rx="1.2" fill="var(--rule)"/></g>
        <text x="290" y="82" class="t-strong" font-size="17">The feed</text>
        <text x="290" y="101" font-size="13.5">counts minutes</text><text x="290" y="117" font-size="13.5">on screen <tspan class="st-up feed">▲</tspan></text>
        <ellipse cx="254" cy="238" rx="27" ry="9" class="st-table"/>
        ${av.map(([x, y, c, t]) => `<g class="st-av"><circle cx="${x}" cy="${y}" r="10" fill="${c}"/><text x="${x}" y="${y + 3.2}" text-anchor="middle" font-size="8.5" style="fill:#0c1a2b;font-weight:800;font-family:var(--sans)">${t}</text></g>`).join("")}
        <text x="292" y="220" class="t-strong st-ppl-t" font-size="17">Your people</text>
        <text x="292" y="239" font-size="13.5">counts hours spent</text><text x="292" y="255" font-size="13.5">together <tspan class="st-up ppl">▲</tspan></text>
        <text x="16" y="302" font-size="14" class="t-strong">Same hour, two scoreboards. <tspan style="fill:var(--amber)">EchoTempo keeps the second.</tspan></text>
      </svg><p class="cap">Illustration, not data. A feed counts minutes on screen; EchoTempo counts hours friends spend together.</p></div>
      <div class="frame f3"><svg viewBox="0 0 460 356" role="img" aria-label="A group chat fades out: we should hang this week, when, idk lmk. Its line goes flat while Echo dozes on it, then spikes into a heartbeat that runs into EchoTempo’s It’s a tempo screen, with Echo cheering and confetti.">
        <defs><clipPath id="stScr"><rect x="283" y="31" width="142" height="310" rx="21"/></clipPath><linearGradient id="stPill" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#3fd6c8"/><stop offset="1" stop-color="#6aa8ff"/></linearGradient></defs>
        <text x="16" y="26" class="t-strong" font-size="17">Most plans die in the group chat.</text>
        <text x="16" y="47" class="t-strong" font-size="17" style="fill:var(--amber)">EchoTempo brings them back.</text>
        <g class="st-chat">
          <g class="st-b me"><rect x="44" y="74" width="170" height="26" rx="13"/><text x="129" y="91.5" text-anchor="middle">we should hang this week!!</text></g>
          <g class="st-b them" style="--o:.78"><rect x="16" y="108" width="58" height="26" rx="13"/><text x="45" y="125.5" text-anchor="middle">when?</text></g>
          <g class="st-b them" style="--o:.56"><rect x="16" y="142" width="66" height="26" rx="13"/><text x="49" y="159.5" text-anchor="middle">idk lmk</text></g>
          <text x="214" y="114" text-anchor="end" font-size="10.5" class="st-seen">Seen Tue</text>
        </g>
        ${nest(echo({ pose: "doze" }), 56, 158, 50, 52)}
        <path class="st-flat" d="M16 206 H170"/>
        <text x="16" y="226" font-size="12" class="st-fl-l">flatline</text>
        <path class="st-beat-glow" d="M170 206 H180 L190 178 L202 236 L214 156 L226 224 L236 206 H284"/>
        <path class="st-beat" pathLength="1" d="M170 206 H180 L190 178 L202 236 L214 156 L226 224 L236 206 H284"/>
        <rect x="276" y="24" width="156" height="324" rx="27" class="st-bezel"/>
        <image href="img/echotempo-tempo.webp" x="283" y="31" width="142" height="310" preserveAspectRatio="xMidYMid slice" clip-path="url(#stScr)"/>
        <rect x="333" y="37" width="42" height="11" rx="5.5" fill="#05080f"/>
        <g class="st-pill"><rect x="240" y="116" width="122" height="30" rx="15" fill="url(#stPill)"/><text x="301" y="136.5" text-anchor="middle" class="st-pill-t">It’s a tempo!</text></g>
        ${confetti.map(([x, y, c, d], i) => `<rect class="st-conf" x="${x}" y="${y}" width="${i % 3 ? 5 : 7}" height="${i % 3 ? 9 : 4}" rx="1" fill="${c}" style="animation-delay:${d}s"/>`).join("")}
        ${nest(echo({ pose: "cheer" }), 200, 236, 104, 109)}
        <g transform="translate(16 296)" class="st-north hug" data-max="196"><rect width="196" height="30" rx="15"/><path d="M15 15 l4 4 l8 -9" fill="none" stroke="var(--amber)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><text x="35" y="19.5" font-size="12" class="t-strong">North star: plans that happened</text></g>
      </svg><p class="cap">EchoTempo’s “It’s a tempo!” screen, when friends’ echoes line up. Echo appears courtesy of EchoTempo.</p></div>
    </div>`;
  },

  quantum() {
    // ---- frame 1: how far from a key-breaking machine, on a log ruler of qubits
    const X = n => 60 + Math.log10(n) * 55;
    const ticks = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7].map((n, i) => `<line class="ax" x1="${X(n).toFixed(1)}" y1="262" x2="${X(n).toFixed(1)}" y2="268"/><text x="${X(n).toFixed(1)}" y="284" text-anchor="middle" font-size="12">${["1", "10", "100", "1K", "10K", "100K", "1M", "10M"][i]}</text>`).join("");
    const dots = Array.from({ length: 14 }, (_, i) => { const a = i * 2.4, r = 5 + (i % 4) * 3.2; return `<circle class="qu-q" style="animation-delay:${(i * .17).toFixed(2)}s" cx="${(X(105) + Math.cos(a) * r).toFixed(1)}" cy="${(96 + Math.sin(a) * r * .7).toFixed(1)}" r="1.7"/>`; }).join("");
    const gap = (x0, x1, y, lab) => `<rect class="qu-gap" x="${x0.toFixed(1)}" y="${y - 6}" width="${(x1 - x0).toFixed(1)}" height="12" rx="3"/><text x="${((x0 + x1) / 2).toFixed(1)}" y="${y - 12}" text-anchor="middle" font-size="13" font-weight="800" class="qu-gapt">${lab}</text>`;
    const F1 = `<svg viewBox="0 0 460 300" role="img" aria-label="Qubits on a log scale. Physical qubits: today's best chips have about 100 (Google Willow 105, Quantinuum Helios 98); Google's 2026 estimate to break a 256-bit elliptic-curve key is under 500,000, down from millions in earlier estimates, a gap of about 5,000 times. Logical qubits: Helios ran 48 in 2025, IBM targets 200 by 2029, and the attack needs about 1,200, a gap of about 25 times.">
        <text x="20" y="26" class="t-strong" font-size="16">Qubits needed to break a Bitcoin key</text>
        <text x="20" y="44" font-size="12">Log scale: each step is 10×</text>
        <text x="20" y="74" font-size="13" class="t-strong qu-row">Physical qubits</text>
        <line class="ax" x1="${X(1)}" y1="96" x2="${X(1e7)}" y2="96" stroke-dasharray="2 4"/>
        ${gap(X(105) + 10, X(5e5) - 10, 96, "~5,000×")}
        ${dots}<circle cx="${X(105).toFixed(1)}" cy="96" r="7" class="qu-now"/>
        <text x="${X(105).toFixed(1)}" y="126" text-anchor="middle" font-size="12" class="t-strong">Today: ~100</text><text x="${X(105).toFixed(1)}" y="141" text-anchor="middle" font-size="11">Willow 105 · Helios 98</text>
        <g class="qu-old"><circle cx="${X(1e7).toFixed(1)}" cy="96" r="6" fill="none" stroke="var(--faint)" stroke-dasharray="2 2"/><text x="${X(1e7).toFixed(1)}" y="74" text-anchor="end" font-size="11">earlier estimates: millions</text></g>
        <g class="qu-need"><circle cx="${X(5e5).toFixed(1)}" cy="96" r="8" class="qu-tgt"/><path d="M${X(5e5).toFixed(1)} 104 V114" stroke="var(--coral)"/><text x="${X(5e5).toFixed(1)}" y="128" text-anchor="middle" font-size="12" class="t-strong" style="fill:var(--coral)">Needed: &lt;500K</text><text x="${X(5e5).toFixed(1)}" y="143" text-anchor="middle" font-size="11">Google, Mar 2026</text></g>
        <text x="20" y="182" font-size="13" class="t-strong qu-row">Error-corrected (logical) qubits</text>
        <line class="ax" x1="${X(1)}" y1="206" x2="${X(1e7)}" y2="206" stroke-dasharray="2 4"/>
        ${gap(X(48) + 8, X(1200) - 8, 206, "~25×")}
        <circle cx="${X(48).toFixed(1)}" cy="206" r="6" class="qu-now"/><text x="${X(48).toFixed(1)}" y="234" text-anchor="middle" font-size="11"><tspan class="t-strong">48</tspan> Helios</text>
        <circle cx="${X(200).toFixed(1)}" cy="206" r="5" fill="none" stroke="var(--beat)" stroke-width="1.6" stroke-dasharray="3 2"/><text x="${X(200).toFixed(1)}" y="250" text-anchor="middle" font-size="11"><tspan class="t-strong">200</tspan> IBM, 2029 goal</text>
        <circle cx="${X(1200).toFixed(1)}" cy="206" r="7" class="qu-tgt"/><text x="${(X(1200) + 12).toFixed(1)}" y="234" font-size="11" style="fill:var(--coral)"><tspan font-weight="800">~1,200</tspan> to break a key</text>
        <line class="ax" x1="${X(1)}" y1="262" x2="${X(1e7)}" y2="262"/>${ticks}
      </svg>`;

    // ---- frame 2: who helps whom. A dilution-fridge chandelier, a GPU, and the loop between them
    const tiers = [[70, 92], [104, 74], [138, 56], [172, 40]].map(([y, w], i) => `<rect x="${100 - w / 2}" y="${y}" width="${w}" height="9" rx="2" class="qu-tier"/>${i < 3 ? [-1, 1].map(s => `<line x1="${100 + s * (w / 2 - 10)}" y1="${y + 9}" x2="${100 + s * (w / 2 - 14)}" y2="${y + 34}" class="qu-rod"/>`).join("") : ""}`).join("");
    const grid = Array.from({ length: 9 }, (_, i) => `<circle class="qu-q" style="animation-delay:${(i * .2).toFixed(1)}s" cx="${88 + (i % 3) * 12}" cy="${206 + Math.floor(i / 3) * 10}" r="2.2"/>`).join("");
    const mv = (id, n, dur, cls) => Array.from({ length: n }, (_, i) => `<circle r="4" class="${cls}"><animateMotion dur="${dur}s" begin="-${(i * dur / n).toFixed(2)}s" repeatCount="indefinite"><mpath href="#${id}"/></animateMotion></circle>`).join("");
    const F2 = `<svg viewBox="0 0 460 300" role="img" aria-label="A quantum processor in its refrigerator sends qubit readouts to a GPU, which decodes errors and sends corrections back, over Nvidia's NVQLink in under four microseconds round trip. Seventeen quantum builders support it. Later, quantum computers may send AI something back: simulations of molecules and materials.">
        <text x="20" y="26" class="t-strong" font-size="16">Who needs whom, today</text>
        <line x1="100" y1="44" x2="100" y2="70" class="qu-rod"/>${tiers}
        <rect x="76" y="196" width="48" height="34" rx="3" fill="var(--ink-2)" stroke="var(--beat)"/>${grid}
        <text x="100" y="252" text-anchor="middle" font-size="13" class="t-strong">Quantum chip</text><text x="100" y="267" text-anchor="middle" font-size="11">at ~0.01 K, in its fridge</text>
        <g transform="translate(320 112)"><rect width="110" height="70" rx="5" fill="var(--ink-2)" stroke="var(--amber)" stroke-width="1.5"/>${[0, 1, 2, 3, 4, 5, 6].map(k => `<line x1="${14 + k * 14}" y1="10" x2="${14 + k * 14}" y2="60" stroke="var(--amber)" stroke-opacity=".35"/>`).join("")}<rect x="34" y="20" width="42" height="30" rx="3" fill="var(--ink-3)" stroke="var(--amber)"/><text x="55" y="40" text-anchor="middle" font-size="12" font-weight="800" style="fill:var(--amber)">GPU</text></g>
        <text x="375" y="202" text-anchor="middle" font-size="13" class="t-strong">GPU decoder</text><text x="375" y="217" text-anchor="middle" font-size="11">reads errors, sends fixes</text>
        <path id="quUp" d="M128 120 C200 74 260 74 318 128" fill="none" stroke="var(--beat)" stroke-opacity=".35" stroke-dasharray="4 4"/>
        <path id="quDn" d="M318 168 C260 214 200 214 128 196" fill="none" stroke="var(--amber)" stroke-opacity=".35" stroke-dasharray="4 4"/>
        ${mv("quUp", 4, 1.6, "qu-pk")}${mv("quDn", 4, 1.6, "qu-pk2")}
        <text x="222" y="82" text-anchor="middle" font-size="12" style="fill:var(--beat)" font-weight="700">qubit readouts</text>
        <text x="222" y="222" text-anchor="middle" font-size="12" style="fill:var(--amber)" font-weight="700">corrections</text>
        <g transform="translate(222 150)"><rect x="-78" y="-21" width="156" height="42" rx="21" fill="var(--ink)" stroke="var(--rule)"/><text y="-3" text-anchor="middle" font-size="13" class="t-strong">NVQLink: &lt; 4 µs</text><text y="13" text-anchor="middle" font-size="11">17 quantum builders</text></g>
        <path d="M164 262 C200 270 230 270 262 270 C330 270 372 258 375 228" fill="none" stroke="var(--violet)" stroke-dasharray="2 5" stroke-opacity=".7"/>
        <text x="262" y="294" text-anchor="middle" font-size="11" style="fill:var(--violet)">later: molecule and material simulations, as data for AI</text>
      </svg>`;

    // ---- frame 3: can a quantum thief beat the next block?
    const F3 = `<div class="qucalc">
        <p class="nc-k qu-k">Can a quantum thief beat your transaction?</p>
        <label class="oc-l" for="quRange">Breaking one exposed key takes <b id="quT">9 minutes</b></label>
        <input class="oc-range qu-range" type="range" id="quRange" min="1" max="30" step="1" value="9">
        <svg class="qu-chart" id="quChart" viewBox="0 0 460 140" role="img" aria-label="Chance the attacker breaks the key before the transaction's first confirmation, by minutes needed per key."></svg>
        <p class="sx-out qu-out" id="quOut"></p>
        <div class="qu-rest"><span class="qu-bar" aria-hidden="true"><i></i></span><span><b>6.26M BTC</b> (31%) need no race at all: their public keys are already on-chain.</span></div>
      </div>`;

    return `<div class="viz" data-step="1">
      <div class="frame f1">${F1}<p class="cap">Physical qubits are the hardware; logical qubits are error-corrected ones built from many physical qubits. Google (Mar 2026), Quantinuum (Nov 2025), IBM roadmap.</p></div>
      <div class="frame f2">${F2}<p class="cap">Error correction needs fast classical decoding, so the GPU sits in the loop. Quantum Computing Report on NVQLink (Oct 2025).</p></div>
      <div class="frame f3">${F3}<p class="cap"><span class="cap-l">Spending bitcoin reveals your public key. Blocks arrive at random, about every 10 minutes, so the thief wins if the key breaks before the first confirmation. Google says “a few minutes” per key; Forbes reports about 9, with the same ~41% odds. Exposed coins: Glassnode (Oct 2026).</span><span class="cap-s">Blocks arrive about every 10 minutes at random. Google: “a few minutes” per key.</span></p></div>
    </div>`;
  },

  ledger() {
    // ---- frame 1: the whiteboard, live. Four blocks, real SHA-256, tamper and re-mine
    const F1 = `<div class="lgc">
        <p class="nc-k lg-k">The whiteboard, live: edit any block</p>
        <div class="lg-row" id="lgRow"></div>
        <div class="lg-ctl"><button class="btn lg-btn" id="lgTamper" type="button">Tamper with block 1</button><button class="btn lg-btn primary" id="lgMine" type="button">Redo the work</button></div>
        <p class="lg-msg" id="lgMsg" aria-live="polite"></p>
      </div>`;

    // ---- frame 2: Satoshi's catch-up race
    const F2 = `<div class="lgcalc">
        <p class="nc-k lg-k">Can a forger catch up?</p>
        <label class="oc-l" for="lgQ">Forger’s share of the network’s computing power: <b id="lgQv">10%</b></label>
        <input class="oc-range lg-range" type="range" id="lgQ" min="1" max="49" step="1" value="10">
        <label class="oc-l" for="lgZ">Blocks you wait before trusting a payment: <b id="lgZv">6</b></label>
        <input class="oc-range lg-range" type="range" id="lgZ" min="0" max="12" step="1" value="6">
        <svg class="lg-chart" id="lgChart" viewBox="0 0 460 130" role="img" aria-label="Chance the forger ever catches up, for each number of blocks waited."></svg>
        <p class="sx-out lg-out" id="lgOut"></p>
      </div>`;

    // ---- frame 3: three ways to agree, and where banks land
    const COLS = [
      [82, "Proof of work", "anyone with machines", "electricity spent", "~10 min", "Bitcoin", "var(--coral)", 3.2],
      [230, "Proof of stake", "anyone who stakes coins", "a deposit at risk", "seconds", "Ethereum", "var(--beat)", 1.1],
      [378, "Proof of authority", "known, vetted members", "a name and a license", "seconds", "bank networks", "var(--amber)", .9]
    ];
    const col = ([x, h, who, why, spd, ex, c, dur], i) => `<g>
        <rect x="${x - 68}" y="56" width="136" height="178" rx="6" fill="var(--ink-2)" stroke="${c}" stroke-opacity=".7"/>
        <text x="${x}" y="80" text-anchor="middle" class="t-strong" font-size="14.5">${h}</text>
        <text x="${x - 58}" y="104" font-size="10.5" class="lg-lab">WHO ADDS BLOCKS</text><text x="${x - 58}" y="120" font-size="12.5" class="t-strong">${who}</text>
        <text x="${x - 58}" y="144" font-size="10.5" class="lg-lab">WHAT KEEPS THEM HONEST</text><text x="${x - 58}" y="160" font-size="12.5" class="t-strong">${why}</text>
        <text x="${x - 58}" y="184" font-size="10.5" class="lg-lab">NEW BLOCK EVERY</text><text x="${x - 58}" y="200" font-size="12.5" class="t-strong">${spd}</text>
        <text x="${x}" y="224" text-anchor="middle" font-size="11.5" style="fill:${c}" font-weight="700">${ex}</text>
        <g class="lg-drop" style="--dur:${dur}s;animation-delay:${(i * .3).toFixed(1)}s"><rect x="${x - 9}" y="34" width="18" height="14" rx="2.5" fill="${c}"/></g>
      </g>`;
    const F3 = `<svg viewBox="0 0 460 300" role="img" aria-label="Three ways a network agrees on the next block. Proof of work: anyone with machines, kept honest by electricity spent, a block about every 10 minutes, Bitcoin. Proof of stake: anyone who stakes coins, kept honest by a deposit at risk, seconds, Ethereum. Proof of authority: known, vetted members, kept honest by their name and license, seconds, bank networks. Banks land on stake and authority. All three still rely on elliptic-curve signatures, which a large quantum computer could break.">
        <text x="14" y="24" class="t-strong" font-size="16">Three ways to agree on the next block</text>
        ${col(COLS[0], 0)}${col(COLS[1], 1)}${col(COLS[2], 2)}
        <path d="M230 248 V256 H378 V248" fill="none" stroke="var(--amber)" stroke-width="1.4"/>
        <text x="304" y="272" text-anchor="middle" font-size="12" class="t-strong" style="fill:var(--amber)">Where banks land</text>
        <text x="304" y="287" text-anchor="middle" font-size="11">Kinexys: ~$5B a day · JPM Coin on Base</text>
        <g transform="translate(46 262)"><path d="M-6 0 V-5 A6 6 0 0 1 6 -5 V0" fill="none" stroke="var(--coral)" stroke-width="2"/><rect x="-9" y="-1" width="18" height="14" rx="2.5" fill="var(--coral)"/></g>
        <text x="62" y="268" font-size="11.5" class="t-strong">All three sign with</text><text x="62" y="283" font-size="11.5" class="t-strong">elliptic-curve keys</text>
      </svg>`;

    return `<div class="viz" data-step="1">
      <div class="frame f1">${F1}<p class="cap">Real SHA-256 hashes, shortened to their first six characters. Here a block counts as “mined” when its hash starts with 00, about 256 tries on average.</p></div>
      <div class="frame f2">${F2}<p class="cap">Satoshi’s formula, section 11 of the white paper. Bitcoin users traditionally wait six confirmations, about an hour.</p></div>
      <div class="frame f3">${F3}<p class="cap">Banks keep the shared ledger and replace mining with known validators. Signatures are the part none of them have replaced yet.</p></div>
    </div>`;
  },

  custom() {
    // ---- frame 1: who designs which part of the chip, as customers take more of it in-house
    const cores = Array.from({ length: 16 }, (_, i) => `<rect x="${178 + (i % 4) * 27}" y="${86 + Math.floor(i / 4) * 24}" width="21" height="18" rx="2"/>`).join("");
    const hbm = [[118, 70], [118, 150], [322, 70], [322, 150]].map(([x, y]) => `<g class="cu-r" data-r="mem"><rect x="${x}" y="${y}" width="20" height="62" rx="3"/>${[1, 2, 3, 4, 5].map(k => `<line x1="${x}" y1="${y + k * 10.3}" x2="${x + 20}" y2="${y + k * 10.3}" class="cu-ln"/>`).join("")}</g>`).join("");
    const F1 = `<div class="cu">
        <svg viewBox="0 0 460 250" role="img" aria-label="A custom AI chip in its package. Regions: the compute cores, the memory interface and HBM stacks, the high-speed I/O ring, the package and its CoWoS supply, and the network beyond the chip. Drag the slider to see which of these the customer designs at each stage.">
          <g class="cu-r" data-r="pkg"><rect x="96" y="44" width="268" height="190" rx="8" class="cu-pkg"/><text x="230" y="226" text-anchor="middle" font-size="11.5" class="cu-t">Packaging &amp; CoWoS supply</text></g>
          ${hbm}
          <text x="128" y="62" text-anchor="middle" font-size="11" class="cu-t">HBM</text><text x="332" y="62" text-anchor="middle" font-size="11" class="cu-t">HBM</text>
          <g class="cu-r" data-r="io"><rect x="152" y="62" width="156" height="146" rx="5" class="cu-ring"/></g>
          <text x="230" y="78" text-anchor="middle" font-size="10.5" class="cu-t">high-speed I/O ring</text>
          <g class="cu-r" data-r="core">${cores}</g>
          <text x="230" y="202" text-anchor="middle" font-size="11" class="cu-t">compute cores</text>
          <g class="cu-r" data-r="net"><path d="M364 139 H392" class="cu-wire"/><rect x="392" y="100" width="58" height="78" rx="6"/><path d="M402 118 H440 M402 132 H440 M402 146 H440 M402 160 H440" class="cu-ln"/></g>
          <text x="421" y="196" text-anchor="middle" font-size="11" class="cu-t">network &amp;</text><text x="421" y="209" text-anchor="middle" font-size="11" class="cu-t">optics</text>
          <text x="40" y="132" text-anchor="middle" font-size="11" class="cu-t">memory</text><text x="40" y="145" text-anchor="middle" font-size="11" class="cu-t">interface</text><path d="M62 139 H116" class="cu-wire"/>
        </svg>
        <div class="cu-leg" aria-hidden="true"><span class="c">customer</span><span class="p">design partner</span><span class="s">cheaper second partner</span></div>
        <input class="oc-range cu-range" type="range" id="cuRange" min="1" max="4" step="1" value="2" aria-label="Stage of insourcing">
        <p class="cu-read" id="cuRead"></p>
      </div>`;

    // ---- frame 2: who designs whose chip (2026)
    const C = [["Google", 50], ["Anthropic", 92], ["Meta", 134], ["OpenAI", 176], ["Amazon", 218], ["Microsoft", 260]];
    const P = [["Broadcom", 64, "var(--amber)"], ["MediaTek", 116, "var(--coral)"], ["Marvell", 168, "var(--beat)"], ["Alchip", 216, "var(--coral)"], ["In-house", 262, "var(--violet)"]];
    const E = [[0, 0, "TPU"], [0, 1, "TPU v7"], [1, 0, "via TPUs", 1], [2, 0, "MTIA"], [3, 0, "first chip"], [4, 2, "Trainium2"], [4, 3, "Trn3/4, reported"], [4, 4, "Annapurna"], [5, 2, "Maia 200"]];
    const edge = ([ci, pi, lab, dash], k) => { const y0 = C[ci][1], y1 = P[pi][1]; return `<path class="cu-e" style="--c:${P[pi][2]};animation-delay:${(k * .15).toFixed(2)}s" d="M126 ${y0} C230 ${y0} 230 ${y1} 330 ${y1}" ${dash ? `stroke-dasharray="3 5"` : ""}/>`; };
    const F2 = `<svg viewBox="0 0 460 300" role="img" aria-label="Who designs whose custom AI chip in 2026. Google works with Broadcom and, for TPU v7, MediaTek. Anthropic uses Google's TPUs. Meta's MTIA and OpenAI's first chip are with Broadcom. Amazon used Marvell for Trainium2, reportedly Alchip for Trainium3 and 4, and designs in-house at Annapurna Labs. Microsoft's Maia 200 is with Marvell.">
        <text x="14" y="24" class="t-strong" font-size="16">Who designs whose chip, 2026</text>
        ${E.map(edge).join("")}
        ${C.map(([n, y]) => `<g><rect x="14" y="${y - 15}" width="112" height="30" rx="15" fill="var(--ink-2)" stroke="var(--rule)"/><text x="70" y="${y + 5}" text-anchor="middle" font-size="13.5" class="t-strong">${n}</text></g>`).join("")}
        ${P.map(([n, y, c]) => `<g><rect x="330" y="${y - 16}" width="116" height="32" rx="4" fill="var(--ink-2)" stroke="${c}" stroke-width="1.5"/><text x="388" y="${y + 5}" text-anchor="middle" font-size="13.5" class="t-strong" style="fill:${c}">${n}</text></g>`).join("")}
        <text x="70" y="294" text-anchor="middle" font-size="11">customers</text><text x="388" y="294" text-anchor="middle" font-size="11">design partners</text>
        <text x="230" y="294" text-anchor="middle" font-size="11" style="fill:var(--faint)">dashed: indirect</text>
      </svg>`;

    // ---- frame 3: Broadcom's AI revenue outlook
    const Y = v => 238 - v * .78;
    const bars = [["FY2026", 58, "forecast"], ["FY2027", 115, "outlook"], ["FY2028", 230, "outlook"]].map(([l, v, s], i) => { const x = 70 + i * 92; return `<rect class="cu-bar" style="animation-delay:${(.2 + i * .25).toFixed(2)}s" x="${x}" y="${Y(v).toFixed(1)}" width="62" height="${(238 - Y(v)).toFixed(1)}" rx="3"/><text x="${x + 31}" y="${(Y(v) - 8).toFixed(1)}" text-anchor="middle" font-size="15" class="t-strong">~$${v}B</text><text x="${x + 31}" y="256" text-anchor="middle" font-size="12.5" class="t-strong">${l}</text><text x="${x + 31}" y="271" text-anchor="middle" font-size="11">${s}</text>`; }).join("");
    const F3 = `<svg viewBox="0 0 460 290" role="img" aria-label="Broadcom's AI revenue: about 58 billion dollars forecast for fiscal 2026, about 115 billion for fiscal 2027 and about 230 billion for fiscal 2028. In fiscal Q3 2026, custom accelerators were 73 percent of 16.7 billion dollars of AI revenue.">
        <text x="14" y="24" class="t-strong" font-size="16">Broadcom AI revenue, by fiscal year</text>
        <text x="14" y="42" font-size="12">Doubling a year, if the outlook holds</text>
        <line class="ax" x1="50" y1="238" x2="330" y2="238"/>${bars}
        <g transform="translate(352 74)"><text x="45" y="0" text-anchor="middle" font-size="12" class="t-strong">FQ3 2026</text><text x="45" y="16" text-anchor="middle" font-size="12">$16.7B</text>
          <rect x="22" y="26" width="46" height="150" rx="3" fill="var(--ink-3)"/><rect class="cu-xpu" x="22" y="${(26 + 150 * .27).toFixed(1)}" width="46" height="${(150 * .73).toFixed(1)}" rx="3" fill="var(--amber)"/>
          <text x="45" y="${(26 + 150 * .27 + 58).toFixed(1)}" text-anchor="middle" font-size="16" font-weight="900" style="fill:var(--ink)">73%</text><text x="45" y="${(26 + 150 * .27 + 74).toFixed(1)}" text-anchor="middle" font-size="10.5" font-weight="700" style="fill:var(--ink)">custom</text><text x="45" y="48" text-anchor="middle" font-size="10.5">network</text><text x="45" y="61" text-anchor="middle" font-size="10.5">&amp; other</text></g>
      </svg>`;

    return `<div class="viz" data-step="1">
      <div class="frame f1">${F1}<p class="cap">Drag through four stages. Most of today’s deals sit at stage 2 or 3; stage 4 is the threat.</p></div>
      <div class="frame f2">${F2}<p class="cap">Tom’s Hardware (May 2026); Broadcom’s Q3 call (Sept 2026); Benchmark via Yahoo Finance on Trainium3 and 4 (Dec 2025, not confirmed by the companies).</p></div>
      <div class="frame f3">${F3}<p class="cap">Broadcom’s fiscal year ends around November. FY2026 forecast and FY2027–28 outlook from its Q3 call; 73% custom share for fiscal Q3.</p></div>
    </div>`;
  },

  tokens() {
    // ---- frame 1: climbing the stack, from landlord to token seller
    const S = [["Land & power", ""], ["GPUs", "bought from Nvidia"], ["GPU-hours", "20–30% gross margin"], ["Tokens", "Token Factory, 2025"], ["Agents", "Tavily search, 2026"]];
    const step = ([t, s], i) => { const x = 14 + i * 88, y = 250 - i * 42; return `<g class="tk-step" style="animation-delay:${(i * .18).toFixed(2)}s"><rect x="${x}" y="${y}" width="88" height="${292 - y}" fill="${i > 2 ? "rgba(63,214,200,.12)" : "var(--ink-2)"}" stroke="${i > 2 ? "var(--amber)" : "var(--rule)"}"/><text x="${x + 8}" y="${y + 19}" class="t-strong" font-size="13.5">${t}</text>${s ? `<text x="${x + 8}" y="${y + 34}" font-size="10.5">${s}</text>` : ""}</g>`; };
    const path = "M30 248 L102 248 L102 206 L190 206 L190 164 L278 164 L278 122 L366 122 L366 80 L440 80";
    const F1 = `<svg viewBox="0 0 460 300" role="img" aria-label="A staircase from land and power, to GPUs, to GPU-hours at 20 to 30 percent gross margin, to tokens sold through Token Factory since November 2025, to agents, with Tavily search in 2026. Acquisitions sit on the upper steps: Eigen AI and Clarifai's team on tokens, Tavily on agents. Price on the lower steps is set by the cost of capital; on the upper steps, by the value to the customer.">
        <text x="14" y="24" class="t-strong" font-size="16">Moving up the stack</text>
        <text x="14" y="42" font-size="12">The higher the step, the more price follows value, not cost</text>
        ${S.map(step).join("")}
        <path id="tkStair" d="${path}" fill="none"/>
        <g><circle r="8" fill="var(--amber)"/><text y="3.5" text-anchor="middle" font-size="8" font-weight="900" style="fill:var(--ink)">tok</text><animateMotion dur="5s" repeatCount="indefinite" keyPoints="0;1;1" keyTimes="0;.8;1" calcMode="linear"><mpath href="#tkStair"/></animateMotion></g>
        <g class="tk-pin" style="animation-delay:1.2s"><rect x="246" y="64" width="106" height="38" rx="4" fill="var(--ink)" stroke="var(--amber)"/><text x="254" y="80" font-size="11" class="t-strong">Eigen AI, $643M</text><text x="254" y="95" font-size="11">Clarifai team</text><path d="M322 102 L322 122" stroke="var(--amber)"/></g>
        <g class="tk-pin" style="animation-delay:1.5s"><rect x="372" y="34" width="78" height="22" rx="4" fill="var(--ink)" stroke="var(--amber)"/><text x="380" y="49" font-size="11" class="t-strong">+ Tavily</text><path d="M410 56 L410 78" stroke="var(--amber)"/></g>
      </svg>`;

    // ---- frame 2: the melting spread
    const F2 = `<div class="tkcalc">
        <p class="nc-k tk-k">One million tokens from a popular model</p>
        <label class="oc-l" for="tkRange">Years from now: <b id="tkY">0</b></label>
        <input class="oc-range tk-range" type="range" id="tkRange" min="0" max="4" step="1" value="0">
        <div class="tk-rate" role="group" aria-label="Yearly fall in token prices"><span>Prices fall</span>${[30, 40, 50].map(r => `<button type="button" class="tk-r${r === 40 ? " on" : ""}" data-r="${r}">${r}%/yr</button>`).join("")}</div>
        <svg class="tk-chart" id="tkChart" viewBox="0 0 460 170" role="img" aria-label="List price per million tokens falling over four years against a flat production cost, and the spread between them."></svg>
        <p class="sx-out tk-out" id="tkOut"></p>
      </div>`;

    // ---- frame 3: the three 2030 outcomes the price is choosing between
    const X = v => 128 + v * 2.7;
    const R = [["Bear", 5, 12, "−70% to −100%", "commodity GPU landlord in a glut", "var(--coral)"], ["Base", 45, 66, "~4.5×", "specialist, some token revenue", "var(--beat)"], ["Bull", 77, 112, "~11×", "tokens over half of revenue", "var(--amber)"]];
    const row = ([n, lo, hi, out, d, c], i) => { const y = 92 + i * 62; return `<text x="14" y="${y + 5}" class="t-strong" font-size="15">${n}</text><text x="14" y="${y + 21}" font-size="12.5" font-weight="800" style="fill:${c}">${out}</text>
        <line class="ax" x1="${X(0)}" y1="${y}" x2="${X(120)}" y2="${y}" stroke-dasharray="2 4"/>
        <rect class="tk-rng" style="animation-delay:${(.2 + i * .25).toFixed(2)}s" x="${X(lo).toFixed(1)}" y="${y - 9}" width="${(X(hi) - X(lo)).toFixed(1)}" height="18" rx="9" fill="${c}"/>
        <text x="${X(hi) + 8 > 400 ? (X(lo) - 8).toFixed(1) : (X(hi) + 8).toFixed(1)}" y="${y + 4.5}" ${X(hi) + 8 > 400 ? `text-anchor="end"` : ""} font-size="12.5" class="t-strong">$${lo}–${hi}B</text>
        <text x="${X(0)}" y="${y + 27}" font-size="11">${d}</text>`; };
    const F3 = `<svg viewBox="0 0 460 300" role="img" aria-label="The framework's three 2030 scenarios for Nebius's revenue run rate. Bear: 5 to 12 billion dollars, a loss of 70 to 100 percent per share. Base: 45 to 66 billion, about 4.5 times. Bull: 77 to 112 billion, about 11 times.">
        <text x="14" y="24" class="t-strong" font-size="16">Nebius in 2030: three outcomes</text>
        <text x="14" y="42" font-size="12">Revenue run rate ($B) and per-share return from ~$207 (May 2026)</text>
        ${R.map(row).join("")}
        <line class="ax" x1="${X(0)}" y1="276" x2="${X(120)}" y2="276"/>${[0, 30, 60, 90, 120].map(v => `<line class="ax" x1="${X(v)}" y1="272" x2="${X(v)}" y2="280"/><text x="${X(v)}" y="294" text-anchor="middle" font-size="11.5">$${v}B</text>`).join("")}
      </svg>`;

    return `<div class="viz" data-step="1">
      <div class="frame f1">${F1}<p class="cap">Nebius’s own climb. Acquisitions: Eigen AI ($643M, May 2026), Clarifai’s team and patents (May 2026), Tavily (early 2026).</p></div>
      <div class="frame f2">${F2}<p class="cap"><span class="cap-l">The framework’s numbers: $5–15 list price and $0.10–0.30 production cost per million tokens today, with prices falling 30–50% a year and cost held flat. At 40% a year, four years cuts list prices about 87%.</span><span class="cap-s">List $5–15, cost $0.10–0.30 per million tokens; prices fall 30–50% a year.</span></p></div>
      <div class="frame f3">${F3}<p class="cap">Scenario ranges from the betteresearch framework (May 2026), at a ~$64B diluted market cap.</p></div>
    </div>`;
  },

  factory() {
    // ---- frame 1: a token factory in cross-section
    const racks = Array.from({ length: 5 }, (_, i) => `<rect x="${146 + i * 36}" y="160" width="24" height="68" rx="2" fill="#11263c" stroke="var(--violet)" stroke-opacity=".7"/>${[0, 1, 2, 3].map(k => `<rect class="nc-led" style="animation-delay:${((i * 4 + k) * .17 % 1.6).toFixed(2)}s" x="${150 + i * 36}" y="${166 + k * 15}" width="16" height="4" rx="1" fill="var(--amber)"/>`).join("")}`).join("");
    const words = ["Th", "ink", "ing", " step", " by", " step", "def", " plan", "()", " yes"];
    const belt = words.map((w, i) => `<g class="fa-tok" style="animation-delay:-${(i * 1.3).toFixed(2)}s"><rect x="0" y="-11" width="${18 + w.length * 6}" height="20" rx="4" fill="var(--ink-2)" stroke="var(--amber)"/><text x="${9 + w.length * 3}" y="3.5" text-anchor="middle" font-size="11.5" class="t-strong">${w.trim() || "·"}</text></g>`).join("");
    const puffs = ["Th", "ink", "ing"].map((w, i) => `<text class="fa-puff" style="animation-delay:${(i * 1.1).toFixed(1)}s" x="309" y="54" text-anchor="middle" font-size="11" font-weight="800">${w}</text>`).join("");
    const inArr = (y, d) => `<path id="faIn${y}" d="M78 ${y} H138" fill="none"/><circle r="3.4" fill="var(--beat)"><animateMotion dur="1.4s" begin="-${d}s" repeatCount="indefinite"><mpath href="#faIn${y}"/></animateMotion></circle>`;
    const F1 = `<svg viewBox="0 0 460 300" role="img" aria-label="A token factory in cross-section. Power, chips and a trained model go in on the left; racks inside run the model; tokens come out on a conveyor on the right and puff from the smokestack. Google processed more than 3.2 quadrillion tokens a month by May 2026.">
        <text x="14" y="24" class="t-strong" font-size="16">In: power, chips, a model. Out: tokens.</text>
        <path d="M134 250 V128 L170 104 V128 L206 104 V128 L242 104 V128 L278 104 V128 L314 104 V250 Z" fill="var(--ink-2)" stroke="var(--rule)" stroke-width="1.5" stroke-linejoin="round"/>
        <rect x="300" y="62" width="18" height="50" fill="var(--ink-3)" stroke="var(--rule)"/>${puffs}
        ${racks}
        <g transform="translate(50 150)"><path class="nc-bolt" d="M4 -16 L-8 3 H2 L-4 18 L12 -3 H2 L8 -16 Z" fill="var(--amber)"/></g><text x="50" y="182" text-anchor="middle" font-size="11">power</text>
        <g transform="translate(50 210)"><rect x="-11" y="-11" width="22" height="22" rx="2" fill="var(--ink-3)" stroke="var(--violet)"/><rect x="-5" y="-5" width="10" height="10" fill="var(--violet)"/></g><text x="50" y="238" text-anchor="middle" font-size="11">chips</text>
        <g transform="translate(50 108)"><path d="M-9 -12 H4 L10 -6 V12 H-9 Z" fill="var(--ink-3)" stroke="var(--beat)"/><path d="M-5 -2 H6 M-5 3 H6 M-5 8 H3" stroke="var(--beat)" stroke-width="1.2"/></g><text x="50" y="134" text-anchor="middle" font-size="11">model</text>
        ${inArr(108, 0)}${inArr(150, .5)}${inArr(210, 1)}
        <line x1="314" y1="250" x2="456" y2="250" stroke="var(--rule)" stroke-width="2"/>
        <defs><clipPath id="faClip"><rect x="316" y="212" width="144" height="40"/></clipPath></defs><g clip-path="url(#faClip)"><g transform="translate(0 236)">${belt}</g></g>
        <text x="386" y="276" text-anchor="middle" font-size="12" class="t-strong" style="fill:var(--amber)">tokens out</text>
        <text x="14" y="292" font-size="12">Google, May 2026: <tspan class="t-strong">3.2 quadrillion tokens a month</tspan>, 7× a year earlier</text>
      </svg>`;

    // ---- frame 2: staff your country of experts
    const F2 = `<div class="facalc">
        <p class="nc-k fa-k">Staff a country of experts</p>
        <label class="oc-l" for="faRange">Copies of the model running at once: <b id="faN">1,000,000</b></label>
        <input class="oc-range fa-range" type="range" id="faRange" min="3" max="7" step=".25" value="6">
        <div class="tk-rate" role="group" aria-label="Speed versus a human"><span>Each works at</span>${[10, 100].map(s => `<button type="button" class="tk-r fa-s${s === 10 ? " on" : ""}" data-s="${s}">${s}× human speed</button>`).join("")}</div>
        <div class="fa-grid" id="faGrid" aria-hidden="true">${"<i></i>".repeat(100)}</div>
        <p class="sx-out fa-out" id="faOut"></p>
      </div>`;

    // ---- frame 3: a year of the meter running, stacked tile by tile
    const tile = (x, i, c, d) => `<rect class="fa-tile" style="animation-delay:${d}s" x="${x}" y="${246 - (i + 1) * 6.2}" width="58" height="5" rx="1" fill="${c}"/>`;
    const may25 = Array.from({ length: 5 }, (_, i) => tile(112, i, "var(--violet)", (i * .05).toFixed(2))).join("");
    const may26 = Array.from({ length: 32 }, (_, i) => tile(276, i, "var(--amber)", (.3 + i * .045).toFixed(2))).join("");
    const F3 = `<svg viewBox="0 0 460 300" role="img" aria-label="Google's monthly tokens, stacked in blocks of 100 trillion: about 480 trillion in May 2025, more than 3.2 quadrillion in May 2026, seven times more.">
        <text x="14" y="24" class="t-strong" font-size="16">The meter, one year apart</text>
        <text x="14" y="42" font-size="12">Google’s tokens per month · each bar = 100 trillion</text>
        <line class="ax" x1="80" y1="247" x2="380" y2="247"/>
        ${may25}${may26}
        <text x="141" y="264" text-anchor="middle" font-size="13" class="t-strong">May 2025</text><text x="141" y="280" text-anchor="middle" font-size="12">~480 trillion</text>
        <text x="305" y="264" text-anchor="middle" font-size="13" class="t-strong">May 2026</text><text x="305" y="280" text-anchor="middle" font-size="12">3.2 quadrillion+</text>
        <g class="fa-x"><path d="M178 200 C200 150 230 100 262 66" fill="none" stroke="var(--amber)" stroke-width="1.6" stroke-dasharray="4 4"/><text x="214" y="118" text-anchor="middle" font-size="26" font-weight="900" style="fill:var(--amber);font-family:var(--display)">7×</text></g>
        <text x="352" y="96" font-size="12" class="t-strong">Gemini app</text><text x="352" y="112" font-size="12">400M → 900M+</text><text x="352" y="128" font-size="12">monthly users</text>
      </svg>`;

    return `<div class="viz" data-step="1">
      <div class="frame f1">${F1}<p class="cap">A token is a piece of a word. Throughput is tokens per second; efficiency is tokens per watt. Google I/O, May 2026.</p></div>
      <div class="frame f2">${F2}<p class="cap"><span class="cap-l">Illustrative: copies × speed gives full-time expert equivalents. Amodei expects clusters able to run millions of copies at 10–100× human speed by about 2027, and pictured that country as about 50 million geniuses (Jan 2026).</span><span class="cap-s">Illustrative: copies × speed. Amodei: millions of copies at 10–100× human speed.</span></p></div>
      <div class="frame f3">${F3}<p class="cap">Google I/O keynotes, May 2025 and May 2026.</p></div>
    </div>`;
  },

  chipnames() {
    // ---- frame 1: the family tree, as element tiles on two lanes
    const X = y => 34 + (y - 2017) * 36.5;
    const T = [[2017, "Vo", "Volta", "V100", "dc"], [2018, "Tu", "Turing", "T4 · RTX 20", "gx"], [2020, "Am", "Ampere", "A100 · RTX 30", "both"], [2022, "Lo", "Lovelace", "L40S · RTX 40", "gx"], [2022, "Ho", "Hopper", "H100 · H200", "dc"], [2024, "Bl", "Blackwell", "B200 · B300 · RTX 50", "both"], [2026, "Ru", "Rubin", "Vera Rubin", "dc"], [2028, "Fe", "Feynman", "due 2028", "dc"]];
    const tile = ([yr, sym, name, chips, lane], i) => { const x = X(yr), both = lane === "both", y = lane === "gx" ? 168 : 72, h = both ? 168 : 72; return `<g class="cn-tile${yr >= 2026 ? " fut" : ""}" style="animation-delay:${(.15 + i * .22).toFixed(2)}s"><rect x="${(x - 25).toFixed(1)}" y="${y}" width="50" height="${h}" rx="4"/><text x="${(x - 20).toFixed(1)}" y="${y + 13}" font-size="9.5" class="cn-yr">${yr}</text><text x="${x.toFixed(1)}" y="${y + (both ? h / 2 + 8 : 46)}" text-anchor="middle" class="cn-sym">${sym}</text></g><text x="${x.toFixed(1)}" y="${(both ? 252 : lane === "gx" ? 256 : 160)}" text-anchor="middle" font-size="10.5" class="t-strong cn-nm">${name}</text>`; };
    const F1 = `<svg viewBox="0 0 460 300" role="img" aria-label="Nvidia's architectures as element tiles on two lanes, data center and graphics. Volta 2017, Turing 2018 (T4, RTX 20), Ampere 2020 across both lanes (A100, RTX 30), Ada Lovelace 2022 for graphics (L40S, RTX 40) and Hopper 2022 for the data center (H100, H200), Blackwell 2024 across both (B200, B300, RTX 50), Rubin 2026 and Feynman due 2028.">
        <text x="14" y="24" class="t-strong" font-size="16">Nvidia’s family tree</text>
        <text x="14" y="62" font-size="10.5" class="cn-lane">DATA CENTER</text><text x="14" y="282" font-size="10.5" class="cn-lane">GRAPHICS &amp; CHEAPER INFERENCE</text>
        <line x1="14" y1="164" x2="446" y2="164" stroke="var(--grid)" stroke-dasharray="3 5"/>
        ${T.map(tile).join("")}
        <path d="M${X(2022) + 28} 108 C${X(2022) + 40} 140 ${X(2022) + 40} 170 ${X(2022) + 28} 196" fill="none" stroke="var(--coral)" stroke-width="1.4" stroke-dasharray="3 3"/><text x="${X(2022) + 34}" y="186" font-size="10.5" text-anchor="end" style="fill:var(--coral)" font-weight="700">split</text>
      </svg>`;

    // ---- frame 2: the decoder. Pick a chip; read its name
    const PICKS = ["T4", "A100", "L40S", "H100", "H200", "B200", "GB200 NVL72", "B300", "Vera Rubin NVL72"];
    const F2 = `<div class="cn">
        <p class="nc-k cn-k">Decode a chip name</p>
        <div class="cn-picks" role="group" aria-label="Chip names">${PICKS.map(p => `<button type="button" class="cn-p${p === "GB200 NVL72" ? " on" : ""}" data-p="${p}">${p}</button>`).join("")}</div>
        <p class="cn-name" id="cnName" aria-live="polite"></p>
        <ul class="cn-parts" id="cnParts"></ul>
        <p class="cn-mem" id="cnMem"></p>
      </div>`;

    // ---- frame 3: memory per chip, GPUs vs TPUs
    const xs = y => 64 + (y - 2021) * 70, ys = g => 236 - g * .56;
    const NV = [[2022, 80, "H100"], [2024, 141, "H200"], [2024.6, 192, "B200"], [2025.4, 288, "B300"], [2026.3, 288, "Rubin (HBM4)"]];
    const GO = [[2021, 32, "v4"], [2023, 95, "v5p"], [2024, 32, "v6e"], [2025.4, 192, "v7 Ironwood"], [2026.3, 288, "8i (preview)"]];
    const ser = (pts, c, cls, below) => `<polyline class="${cls}" points="${pts.map(([y, g]) => `${xs(y).toFixed(1)},${ys(g).toFixed(1)}`).join(" ")}" fill="none" stroke="${c}" stroke-width="2.4" stroke-linejoin="round" pathLength="100"/>` +
      pts.map(([y, g, l], i) => `<circle cx="${xs(y).toFixed(1)}" cy="${ys(g).toFixed(1)}" r="4.5" fill="${c}"/><text x="${xs(y).toFixed(1)}" y="${(ys(g) + (below ? 18 : -10)).toFixed(1)}" text-anchor="middle" font-size="11" class="t-strong" style="fill:${c}">${l}</text>`).join("");
    const F3 = `<svg viewBox="0 0 460 290" role="img" aria-label="Memory per chip in gigabytes. Nvidia: H100 80 in 2022, H200 141 and B200 192 in 2024, B300 288 in 2025, Rubin 288 of HBM4 in 2026. Google TPUs: v4 32 in 2021, v5p 95 in 2023, v6e Trillium 32 in 2024, Ironwood 192 in 2025, TPU 8i 288 in 2026.">
        <text x="14" y="24" class="t-strong" font-size="16">Memory per chip (GB)</text>
        <text x="14" y="42" font-size="12"><tspan style="fill:var(--beat)" font-weight="700">● Nvidia GPUs</tspan>  <tspan style="fill:var(--amber)" font-weight="700">● Google TPUs</tspan></text>
        ${[0, 100, 200, 300].map(g => `<line class="gridl" x1="56" y1="${ys(g)}" x2="446" y2="${ys(g)}"/><text x="48" y="${ys(g) + 4}" text-anchor="end" font-size="11">${g}</text>`).join("")}
        ${[2021, 2022, 2023, 2024, 2025, 2026].map(y => `<text x="${xs(y)}" y="258" text-anchor="middle" font-size="11.5">${y}</text>`).join("")}
        ${ser(GO, "var(--amber)", "cn-line", true)}${ser(NV, "var(--beat)", "cn-line", false)}
      </svg>`;

    return `<div class="viz" data-step="1">
      <div class="frame f1">${F1}<p class="cap">Named for Volta, Turing, Ampère, Lovelace, Hopper, Blackwell, Rubin and Feynman. Year = first launch.</p></div>
      <div class="frame f2">${F2}<p class="cap">Memory and bandwidth from Baseten and Nvidia’s GTC 2026 specs. Rubin rack figures from Civo’s Vera Rubin build.</p></div>
      <div class="frame f3">${F3}<p class="cap">Year of launch. Ironwood reached general availability in April 2026; TPU 8i is a preview, due in late 2027.</p></div>
    </div>`;
  },

  openclaw() {
    // ---- frame 1: a lead-gen errand in a chat thread
    const steps = [["Found 20 clinics", "web search"], ["Audited 20 sites: 14 load slowly on phones", "site audit"], ["Added 20 leads to the CRM", "CRM skill"]];
    const F1 = `<div class="ow">
        <div class="ow-phone">
          <div class="ow-top"><svg viewBox="-12 -12 24 24" aria-hidden="true"><path d="M-4 6 C-8 -4 -4 -10 6 -11 C9 -5 7 -2 2 -1 C7 0 10 3 8 8 C3 11 -1 9 -4 6 Z" fill="#f4977a"/></svg><b>OpenClaw</b><span>on your own machine</span></div>
          <div class="ow-thread">
            <p class="ow-m me" style="--d:.2s">Find 20 dental clinics in Austin with no online booking. Audit their sites and add them to our CRM.</p>
            <p class="ow-m bot" style="--d:1s">On it. Skills: web search, site audit, CRM.</p>
            ${steps.map(([t, s], i) => `<p class="ow-m bot step" style="--d:${(1.8 + i * .8).toFixed(1)}s"><i class="ow-tick" aria-hidden="true"></i>${t}<small>${s}</small></p>`).join("")}
            <p class="ow-m bot" style="--d:4.4s">Drafted 20 intro emails. Send them?</p>
            <div class="ow-btns" style="--d:5s"><span>Review first</span><span class="go">Send</span></div>
          </div>
        </div>
      </div>`;

    // ---- frame 2: same agent, two speeds
    const lane = (y, nodes, c, dur, id, dots) => { const xs = nodes.map((_, i) => 40 + i * (380 / (nodes.length - 1))); return `<path id="${id}" d="M${xs[0]} ${y} H${xs[xs.length - 1]}" stroke="var(--rule)" stroke-width="2" fill="none"/>` +
      nodes.map(([n, gate], i) => `<g transform="translate(${xs[i].toFixed(1)} ${y})">${gate ? `<rect x="-17" y="-17" width="34" height="34" rx="6" fill="var(--ink-2)" stroke="${c}" stroke-width="1.5"/><path d="M-5 -2 V-6 A5 5 0 0 1 5 -6 V-2" fill="none" stroke="${c}" stroke-width="1.6"/><rect x="-7" y="-2" width="14" height="10" rx="2" fill="${c}"/>` : `<circle r="14" fill="var(--ink-2)" stroke="var(--paper)" stroke-opacity=".5"/>`}</g><text x="${xs[i].toFixed(1)}" y="${y + 34}" text-anchor="middle" font-size="11.5" class="t-strong">${n}</text>`).join("") +
      Array.from({ length: dots }, (_, k) => `<circle r="5" fill="${c}"><animateMotion dur="${dur}s" begin="-${(k * dur / dots).toFixed(2)}s" repeatCount="indefinite"><mpath href="#${id}"/></animateMotion></circle>`).join(""); };
    const F2 = `<svg viewBox="0 0 460 300" role="img" aria-label="Same agent, two speeds. At a lean startup, a task goes straight to the agent and is done. At a big company, the same task passes gates for identity, a sandbox, approval and an audit log before it's done.">
        <text x="14" y="24" class="t-strong" font-size="16">Same agent, two speeds</text>
        <text x="14" y="64" font-size="12.5" font-weight="800" style="fill:var(--beat)">LEAN STARTUP</text>
        ${lane(96, [["task"], ["agent"], ["done"]], "var(--beat)", 2.4, "owA", 3)}
        <text x="14" y="176" font-size="12.5" font-weight="800" style="fill:var(--amber)">BIG COMPANY</text>
        ${lane(208, [["task"], ["identity", 1], ["sandbox", 1], ["approval", 1], ["agent"], ["audit", 1], ["done"]], "var(--amber)", 6, "owB", 3)}
        <text x="14" y="288" font-size="12">Gates are what NemoClaw and Red Hat’s OpenShell runtime sell: the badge.</text>
      </svg>`;

    // ---- frame 3: stars, and what's hiding in the skill store
    const D = d => 54 + d * (300 / 323), V = v => 200 - v / 400 * 140;
    const PTS = [[0, 0], [98, 247], [142, 346], [306, 390.6], [323, 391.8]];
    const EV = [[67, "renamed OpenClaw (Jan 30)"], [82, "Steinberger joins OpenAI (Feb 14)"], [279, "2.0 (Aug 30)"]];
    const F3 = `<svg viewBox="0 0 460 300" role="img" aria-label="OpenClaw's GitHub stars: zero at launch on November 24, 2025; 247,000 by March 2, 2026; about 346,000 in April; 390,600 by September 26; 391,800 by October 13. One audit found 341 of 2,857 ClawHub skills, about 12 percent, were malicious.">
        <text x="14" y="24" class="t-strong" font-size="16">GitHub stars (thousands)</text>
        ${[0, 100, 200, 300, 400].map(v => `<line class="gridl" x1="54" y1="${V(v).toFixed(1)}" x2="356" y2="${V(v).toFixed(1)}"/><text x="46" y="${(V(v) + 4).toFixed(1)}" text-anchor="end" font-size="11">${v}</text>`).join("")}
        ${EV.map(([d], i) => `<line x1="${D(d).toFixed(1)}" y1="${V(400) + 8}" x2="${D(d).toFixed(1)}" y2="200" stroke="var(--violet)" stroke-opacity=".4" stroke-dasharray="2 3"/><circle cx="${D(d).toFixed(1)}" cy="${V(400)}" r="7" fill="var(--ink)" stroke="var(--violet)"/><text x="${D(d).toFixed(1)}" y="${V(400) + 3.5}" text-anchor="middle" font-size="9.5" font-weight="800" style="fill:var(--violet)">${i + 1}</text>`).join("")}
        <text x="14" y="240" font-size="11" style="fill:var(--violet)">${EV.map(([, l], i) => `${i + 1} ${l}`).join("   ")}</text>
        <polyline class="ow-line" points="${PTS.map(([d, v]) => `${D(d).toFixed(1)},${V(v).toFixed(1)}`).join(" ")}" pathLength="100" fill="none" stroke="var(--coral)" stroke-width="2.6" stroke-linejoin="round"/>
        ${PTS.slice(1).map(([d, v]) => `<circle cx="${D(d).toFixed(1)}" cy="${V(v).toFixed(1)}" r="4" fill="var(--coral)"/>`).join("")}
        <text x="${D(323).toFixed(1)}" y="${(V(391.8) + 20).toFixed(1)}" text-anchor="end" font-size="12" class="t-strong">391.8K, Oct 13</text>
        ${["Nov", "Jan", "Mar", "May", "Jul", "Sep"].map((m, i) => `<text x="${D([7, 38, 97, 158, 219, 281][i]).toFixed(1)}" y="218" text-anchor="middle" font-size="11">${m}</text>`).join("")}
        <g transform="translate(408 120)"><circle r="34" fill="none" stroke="var(--ink-3)" stroke-width="12"/><circle class="ow-ring" r="34" fill="none" stroke="var(--coral)" stroke-width="12" stroke-dasharray="${(2 * Math.PI * 34 * .119).toFixed(1)} 999" transform="rotate(-90)"/><text y="5" text-anchor="middle" font-size="18" font-weight="900" style="fill:var(--coral);font-family:var(--display)">12%</text></g>
        <text x="408" y="174" text-anchor="middle" font-size="11" class="t-strong">of ClawHub</text><text x="408" y="188" text-anchor="middle" font-size="11" class="t-strong">skills audited</text><text x="408" y="202" text-anchor="middle" font-size="11">were malicious</text>
        <text x="14" y="264" font-size="12"><tspan class="t-strong">40,000+</tspan> instances found exposed online.</text>
        <text x="14" y="282" font-size="12">In 2.0, the sandbox is still off by default; secrets aren’t encrypted at rest.</text>
      </svg>`;

    return `<div class="viz" data-step="1">
      <div class="frame f1">${F1}<p class="cap">An illustrative errand. Lead research, site audits and CRM updates are among the best-documented uses. The send button stays with you.</p></div>
      <div class="frame f2">${F2}<p class="cap">The enterprise version adds a badge at every step. NemoClaw (Nvidia, Mar 2026); OpenShell on Red Hat (Oct 2026).</p></div>
      <div class="frame f3">${F3}<p class="cap">Dots are known star counts, joined by straight lines. Wikipedia and The GenAI Magazine (Oct 2026); the skill audit is as reported there.</p></div>
    </div>`;
  },

  race() {
    // ---- frame 1: head to head, bars growing out from the center line
    const ROWS = [["Private AI investment, 2025", 285.9, 12.4, v => `$${v}B`], ["Share of world AI compute", 72.2, 9.6, v => `${v}%`], ["Notable AI models, 2025", 50, 30, v => `${v}`], ["Best model’s rating, Mar 2026", 1503, 1464, v => v.toLocaleString("en-US")], ["Industrial robots installed", 34200, 295000, v => `${(v / 1000).toFixed(v < 1e5 ? 1 : 0)}K`]];
    const row = ([l, us, cn, f], i) => { const y = 76 + i * 46, m = Math.max(us, cn), wu = us / m * 168, wc = cn / m * 168, lead = us >= cn; return `<text x="230" y="${y - 12}" text-anchor="middle" font-size="12" class="t-strong">${l}</text>
        <rect class="rc-l" style="animation-delay:${(.15 + i * .15).toFixed(2)}s" x="${(228 - wu).toFixed(1)}" y="${y - 6}" width="${wu.toFixed(1)}" height="14" rx="2" fill="var(--beat)" opacity="${lead ? 1 : .55}"/>
        <rect class="rc-r" style="animation-delay:${(.15 + i * .15).toFixed(2)}s" x="232" y="${y - 6}" width="${Math.max(2, wc).toFixed(1)}" height="14" rx="2" fill="var(--coral)" opacity="${lead ? .55 : 1}"/>
        <text x="${(Math.max(26, 222 - wu)).toFixed(1)}" y="${y + 5}" text-anchor="${wu > 150 ? "start" : "end"}" font-size="12" font-weight="800" ${wu > 150 ? `style="fill:var(--ink)"` : `style="fill:var(--beat)"`} dx="${wu > 150 ? 6 : 0}">${f(us)}</text>
        <text x="${(wc > 150 ? 226 + wc : 238 + wc).toFixed(1)}" y="${y + 5}" text-anchor="${wc > 150 ? "end" : "start"}" font-size="12" font-weight="800" ${wc > 150 ? `style="fill:var(--ink)"` : `style="fill:var(--coral)"`}>${f(cn)}</text>`; };
    const F1 = `<svg viewBox="0 0 460 300" role="img" aria-label="United States versus China. Private AI investment in 2025: 285.9 billion dollars versus 12.4 billion. Share of world AI compute: 72.2 percent versus 9.6 percent. Notable AI models in 2025: 50 versus 30. Best model's rating in March 2026: 1,503 versus 1,464. Industrial robots installed: 34,200 versus 295,000.">
        <text x="216" y="26" text-anchor="end" font-size="15" font-weight="800" style="fill:var(--beat)">United States</text><text x="244" y="26" font-size="15" font-weight="800" style="fill:var(--coral)">China</text>
        <line x1="230" y1="40" x2="230" y2="290" stroke="var(--rule)"/>
        ${ROWS.map(row).join("")}
      </svg>`;

    // ---- frame 2: compute, the input that compounds
    const arc = (a, b, c) => { const p = t => [118 + 70 * Math.cos(t * 2 * Math.PI - Math.PI / 2), 168 + 70 * Math.sin(t * 2 * Math.PI - Math.PI / 2)]; const [x0, y0] = p(a), [x1, y1] = p(b); return `<path d="M${x0.toFixed(1)} ${y0.toFixed(1)} A70 70 0 ${b - a > .5 ? 1 : 0} 1 ${x1.toFixed(1)} ${y1.toFixed(1)}" fill="none" stroke="${c}" stroke-width="26"/>`; };
    const SH = [[72.2, "var(--beat)", "US"], [9.6, "var(--coral)", "China"], [5.1, "var(--violet)", "EU"], [5.6, "var(--amber)", "Malaysia, India, Japan"], [7.5, "var(--ink-3)", "rest of world"]];
    let acc = 0;
    const donut = SH.map(([v, c]) => { const a = acc / 100, b = (acc + v) / 100 - .003; acc += v; return arc(a, b, c); }).join("");
    const NEW = [["2022–24", 60, "~60%"], ["2025", 72, "72%"], ["H1 2026", 78, "78%"]];
    const F2 = `<svg viewBox="0 0 460 300" role="img" aria-label="AI compute by country. Cumulative share as of Q2 2026: US 72.2 percent, China 9.6, EU 5.1, Malaysia, India and Japan 5.6 combined, rest of world 7.5. US share of new compute added each year: about 60 percent in 2022 to 2024, 72 percent in 2025, 78 percent in the first half of 2026.">
        <text x="14" y="24" class="t-strong" font-size="16">Who holds the world’s AI compute</text>
        <text x="14" y="42" font-size="12">H100-equivalents, from customs records (Epoch AI)</text>
        <g class="rc-donut">${donut}</g>
        <text x="118" y="166" text-anchor="middle" font-size="26" font-weight="900" style="fill:var(--beat);font-family:var(--display)">72%</text><text x="118" y="184" text-anchor="middle" font-size="11">US, cumulative</text>
        ${SH.map(([v, c, n], i) => `<text x="${[14, 84, 164, 14, 164][i]}" y="${i < 3 ? 268 : 286}" font-size="11"><tspan style="fill:${c === "var(--ink-3)" ? "var(--faint)" : c}" font-weight="800">■</tspan> ${n} ${v}%</text>`).join("")}
        <text x="262" y="78" class="t-strong" font-size="13">US share of new compute</text>
        ${NEW.map(([l, v, t], i) => { const y = 100 + i * 52, w = v / 100 * 170; return `<text x="262" y="${y + 6}" font-size="12">${l}</text><rect x="262" y="${y + 14}" width="170" height="16" rx="2" fill="var(--ink-3)"/><rect class="rc-l2" style="animation-delay:${(.3 + i * .2).toFixed(1)}s" x="262" y="${y + 14}" width="${w.toFixed(1)}" height="16" rx="2" fill="var(--beat)"/><text x="${(262 + w - 6).toFixed(1)}" y="${y + 27}" text-anchor="end" font-size="12" font-weight="800" style="fill:var(--ink)">${t}</text>`; }).join("")}
      </svg>`;

    // ---- frame 3: AI on both sides of the fence, as a vertical timeline
    const vline = (rows, y0, step, x0 = 112) => `<line x1="${x0}" y1="${y0 - 12}" x2="${x0}" y2="${y0 + (rows.length - 1) * step + 12}" stroke="var(--rule)" stroke-width="2"/>` + rows.map(([d, a, b, c, open], i) => { const y = y0 + i * step; return `<g class="rc-ev" style="animation-delay:${(.15 + i * .22).toFixed(2)}s"><text x="${x0 - 14}" y="${y + 4}" text-anchor="end" font-size="11.5" font-weight="800" style="fill:${c}">${d}</text><circle cx="${x0}" cy="${y}" r="6" fill="${open ? "var(--ink)" : c}" stroke="${c}" stroke-width="2"/><text x="${x0 + 16}" y="${b ? y - 2 : y + 4}" font-size="12" class="t-strong">${a}</text>${b ? `<text x="${x0 + 16}" y="${y + 13}" font-size="11.5">${b}</text>` : ""}</g>`; }).join("");
    const F3 = `<svg viewBox="0 0 460 300" role="img" aria-label="AI on both sides of the fence. November 24, 2025: the Genesis Mission puts the Energy Department's national labs behind AI for science. August 20, 2026: five agencies warn attackers are using AI to write exploits for industrial controllers. Late August: AI helps researchers find two decade-old flaws in PHP. October 21: the PHP fix ships. October 22: governments and companies take sites offline to patch.">
        <text x="14" y="24" class="t-strong" font-size="16">AI is on both sides of the fence</text>
        <text x="14" y="42" font-size="12"><tspan style="fill:var(--amber)" font-weight="800">● defense</tspan>   <tspan style="fill:var(--coral)" font-weight="800">● offense and fallout</tspan></text>
        ${vline([["Nov 24, 2025", "Genesis Mission puts the national labs", "behind AI for science", "var(--amber)"], ["Aug 20, 2026", "NSA, CISA, FBI, DOE, EPA: attackers are", "using AI to write factory-controller exploits", "var(--coral)"], ["Late Aug", "AI helps researchers find two", "decade-old flaws in PHP", "var(--amber)"], ["Oct 21", "The PHP fix ships", "", "var(--amber)"], ["Oct 21–22", "Governments and companies take", "sites offline worldwide to patch", "var(--coral)"]], 80, 46, 104)}
      </svg>`;

    return `<div class="viz" data-step="1">
      <div class="frame f1">${F1}<p class="cap">Stanford AI Index 2026 (investment, models, ratings, robots); Epoch AI (compute share, Q2 2026). China’s investment figure likely misses state guidance funds.</p></div>
      <div class="frame f2">${F2}<p class="cap">Epoch AI’s chip-imports explorer, via OfficeChai (Oct 2026). Excludes chips made and used inside Taiwan.</p></div>
      <div class="frame f3">${F3}<p class="cap">Federal Register (Nov 2025); joint NSA, CISA, FBI, DOE and EPA advisory (Aug 2026); PHP coverage (Oct 2026).</p></div>
    </div>`;
  },

  silicon() {
    // ---- frame 1: patch the top three layers; the bottom one can only be worked around
    const L = [["Apps", 52], ["Operating system", 108], ["Firmware", 164], ["Silicon", 220]];
    const bug = (x, y, cls, d) => `<g class="${cls}" style="animation-delay:${d}s" transform="translate(${x} ${y})"><ellipse rx="7" ry="5" fill="var(--amber)"/><circle cx="7" r="3" fill="var(--amber)"/><path d="M-4 -4 L-6 -8 M0 -5 V-9 M4 -4 L6 -8 M-4 4 L-6 8 M0 5 V9 M4 4 L6 8" stroke="var(--amber)" stroke-width="1.2" stroke-linecap="round"/></g>`;
    const band = (x, y, cls, d) => `<g class="${cls}" style="animation-delay:${d}s" transform="translate(${x} ${y}) rotate(-30)"><rect x="-15" y="-5" width="30" height="10" rx="5" fill="#f2c096"/><rect x="-5" y="-5" width="10" height="10" fill="#d9a072"/></g>`;
    const layer = ([n, y], i) => { const si = i === 3; return `<rect x="20" y="${y - 22}" width="300" height="44" rx="${si ? 3 : 6}" fill="${si ? "#11263c" : "var(--ink-2)"}" stroke="${si ? "var(--violet)" : "var(--rule)"}" stroke-width="${si ? 1.6 : 1}"/>${si ? Array.from({ length: 13 }, (_, k) => `<line x1="${34 + k * 22}" y1="${y - 22}" x2="${34 + k * 22}" y2="${y + 22}" stroke="var(--violet)" stroke-opacity=".12"/>`).join("") : ""}<text x="34" y="${y + 5}" font-size="14" class="t-strong">${n}</text><text x="226" y="${y + 5}" font-size="12" font-weight="800" style="fill:${si ? "var(--coral)" : "var(--amber)"}">${si ? "work around" : "patch"}</text>${bug(196, y, si ? "si-bugstay" : "si-bug", (i * .4).toFixed(1))}${si ? `<path class="si-shield" d="M196 ${y - 14} L208 ${y - 9} V${y + 1} C208 ${y + 8} 202 ${y + 12} 196 ${y + 15} C190 ${y + 12} 184 ${y + 8} 184 ${y + 1} V${y - 9} Z" fill="rgba(244,151,122,.25)" stroke="var(--coral)" stroke-width="1.4"/>` : band(196, y, "si-band", (i * .4).toFixed(1))}`; };
    const F1 = `<svg viewBox="0 0 460 300" role="img" aria-label="Four layers: apps, operating system, firmware and silicon. Bugs in the top three get patched and disappear. A bug in the silicon stays; software can only work around it, and the workaround slows the machine.">
        <text x="20" y="22" class="t-strong" font-size="16">Where a fix can reach</text>
        ${L.map(layer).join("")}
        <g transform="translate(394 148)"><path d="M-46 0 A46 46 0 0 1 46 0" fill="none" stroke="var(--ink-3)" stroke-width="10"/><path d="M-46 0 A46 46 0 0 1 46 0" fill="none" stroke="var(--amber)" stroke-width="10" stroke-dasharray="109 200"/><path d="M33 -32 A46 46 0 0 1 46 0" fill="none" stroke="var(--coral)" stroke-width="10"/><g transform="rotate(88)"><path d="M0 0 L0 -40" stroke="var(--paper)" stroke-width="2.4" stroke-linecap="round"/><animateTransform attributeName="transform" type="rotate" values="88;88;60;60;88" keyTimes="0;.42;.52;.9;1" dur="6s" repeatCount="indefinite"/></g><circle r="5" fill="var(--paper)"/>
          <text y="24" text-anchor="middle" font-size="12" class="t-strong">speed</text><text y="40" text-anchor="middle" font-size="11" style="fill:var(--coral)">the mitigation tax</text></g>
        <path d="M322 220 C360 220 380 210 390 190" fill="none" stroke="var(--coral)" stroke-dasharray="3 3"/>
      </svg>`;

    // ---- frame 2: the mitigation tax on a fleet
    const F2 = `<div class="sicalc">
        <p class="nc-k si-k">The mitigation tax</p>
        <div class="tk-rate si-pick" role="group" aria-label="Which hardware fix">${[["ecc", "ECC vs GPUHammer: 3–10%"], ["kpti", "Meltdown/Spectre fixes, databases: 8–19%"]].map(([k, l], i) => `<button type="button" class="tk-r si-f${i ? "" : " on"}" data-f="${k}">${l}</button>`).join("")}</div>
        <label class="oc-l" for="siRange">Fleet: <b id="siN">10,000</b> machines</label>
        <input class="oc-range si-range" type="range" id="siRange" min="1000" max="100000" step="1000" value="10000">
        <div class="fa-grid si-grid" id="siGrid" aria-hidden="true">${"<i></i>".repeat(100)}</div>
        <p class="sp-leg si-leg" aria-hidden="true"><span class="lo"></span>lost at the low end <span class="hi"></span>more lost at the high end</p>
        <p class="sx-out si-out" id="siOut"></p>
      </div>`;

    // ---- frame 3: from Stuxnet to superintelligence, as a vertical timeline
    const vline = (rows, y0, step, x0 = 112) => `<line x1="${x0}" y1="${y0 - 12}" x2="${x0}" y2="${y0 + (rows.length - 1) * step + 12}" stroke="var(--rule)" stroke-width="2"/>` + rows.map(([d, a, b, c, open], i) => { const y = y0 + i * step; return `<g class="rc-ev" style="animation-delay:${(.15 + i * .22).toFixed(2)}s"><text x="${x0 - 14}" y="${y + 4}" text-anchor="end" font-size="11.5" font-weight="800" style="fill:${c}">${d}</text><circle cx="${x0}" cy="${y}" r="6" fill="${open ? "var(--ink)" : c}" stroke="${c}" stroke-width="2"/><text x="${x0 + 16}" y="${b ? y - 2 : y + 4}" font-size="12" class="t-strong">${a}</text>${b ? `<text x="${x0 + 16}" y="${y + 13}" font-size="11.5">${b}</text>` : ""}</g>`; }).join("");
    const V = "var(--violet)", C = "var(--coral)";
    const F3 = `<svg viewBox="0 0 460 300" role="img" aria-label="Timeline. Hardware and physical attacks: Stuxnet in 2010 wrecked about 1,000 centrifuges through Siemens controllers; Meltdown and Spectre in 2018, whose fixes cost 8 to 19 percent on databases; GPUHammer in 2025, where one flipped bit breaks an AI model; TEE.fail in October 2025. The AI era: in February 2026 Altman says superintelligence may be a couple of years away; in August 2026 agencies warn AI is writing exploits for Siemens controllers; in October 2026 AI finds PHP flaws and sites go dark; and by the end of 2028, Altman says, more of the world's intellect could sit inside data centers than outside.">
        <text x="14" y="24" class="t-strong" font-size="16">From Stuxnet to superintelligence</text>
        <text x="14" y="42" font-size="12"><tspan style="fill:var(--violet)" font-weight="800">● hardware &amp; physical</tspan>   <tspan style="fill:var(--coral)" font-weight="800">● the AI era</tspan></text>
        ${vline([["2010", "Stuxnet wrecks ~1,000 centrifuges via Siemens PLCs", "", V], ["2018", "Meltdown/Spectre fixes cost 8–19% on databases", "", V], ["2025", "GPUHammer: one flipped bit breaks an AI model", "", V], ["Oct 2025", "TEE.fail: a sub-$1,000 probe beats secure enclaves", "", V], ["Feb 2026", "Altman: superintelligence “a couple of years away”", "", C], ["Aug 2026", "Agencies: AI is writing exploits for Siemens PLCs", "", C], ["Oct 2026", "AI finds decade-old PHP flaws; sites go dark", "", C], ["End 2028", "More intellect inside data centers than outside?", "", C, 1]], 70, 29, 96)}
      </svg>`;

    return `<div class="viz" data-step="1">
      <div class="frame f1">${F1}<p class="cap">Software patches remove a bug. A silicon flaw stays in every chip already made, so the fix is a workaround that costs speed.</p></div>
      <div class="frame f2">${F2}<p class="cap"><span class="cap-l">Illustrative: share of a fleet’s output lost to a fix, using the published ranges. GPUHammer paper (2025): ECC costs 6.5% of memory and 3–10% of speed. Red Hat via InfoQ (2018): Meltdown and Spectre fixes cost 8–19% on transaction-heavy databases.</span><span class="cap-s">Illustrative. ECC: 3–10% slower. Meltdown/Spectre fixes: 8–19% on databases.</span></p></div>
      <div class="frame f3">${F3}<p class="cap">Stuxnet, Meltdown, GPUHammer and TEE.fail show silicon can be attacked; the AI era raises the stakes. Sources in Receipts.</p></div>
    </div>`;
  }
};

/* interactive bits inside a memo's visual */
const VIZ_INIT = {
  quantum(root) {
    const r = $("#quRange", root), svg = $("#quChart", root);
    if (!r || !svg) return;
    $(".qu-bar i", root).style.width = "31.2%";
    // Bitcoin blocks arrive at random, about every 10 minutes: P(no confirmation yet after t) = e^(-t/10)
    const P = t => Math.exp(-t / 10), X = t => 40 + t * 13.6, Y = p => 116 - p * 100;
    const curve = Array.from({ length: 61 }, (_, i) => `${X(i / 2).toFixed(1)},${Y(P(i / 2)).toFixed(1)}`).join(" ");
    const base = `<line class="ax" x1="40" y1="116" x2="448" y2="116"/>` +
      [0, 50, 100].map(v => `<text x="34" y="${Y(v / 100) + 4}" text-anchor="end" font-size="11">${v}%</text>`).join("") +
      [0, 10, 20, 30].map(t => `<text x="${X(t)}" y="132" text-anchor="middle" font-size="11">${t} min</text>`).join("") +
      `<polygon points="40,116 ${curve} ${X(30)},116" fill="rgba(244,151,122,.14)"/><polyline points="${curve}" fill="none" stroke="var(--coral)" stroke-width="2.4"/>` +
      `<line x1="${X(10)}" y1="14" x2="${X(10)}" y2="116" stroke="var(--violet)" stroke-dasharray="3 3" opacity=".6"/><text x="${X(10) + 4}" y="24" font-size="10.5" style="fill:var(--violet)">avg. block: 10 min</text>`;
    const upd = () => {
      const t = +r.value, p = P(t);
      $("#quT", root).textContent = `${t} minute${t > 1 ? "s" : ""}`;
      svg.innerHTML = base + `<line x1="${X(t)}" y1="${Y(p)}" x2="${X(t)}" y2="116" stroke="var(--paper)" stroke-opacity=".5"/><circle cx="${X(t)}" cy="${Y(p)}" r="6" fill="var(--coral)" stroke="var(--ink)" stroke-width="2"/>`;
      $("#quOut", root).innerHTML = `<b class="${p > .2 ? "dn" : "up"}">${Math.round(p * 100)}%</b><span>chance the thief breaks your key before your transaction confirms.</span>`;
    };
    r.addEventListener("input", upd);
    upd();
  },
  ledger(root) {
    const row = $("#lgRow", root);
    if (!row) return;
    // SHA-256, small and synchronous, so mining can animate a nonce counter frame by frame
    const frac = x => (x - Math.floor(x)) * 4294967296 | 0;
    const primes = []; for (let n = 2; primes.length < 64; n++) if (primes.every(p => n % p)) primes.push(n);
    const K = primes.map(p => frac(Math.cbrt(p))), H0 = primes.slice(0, 8).map(p => frac(Math.sqrt(p)));
    const enc = new TextEncoder(), w = new Int32Array(64);
    const sha = str => {
      const b = enc.encode(str), l = b.length, n = ((l + 9 + 63) >> 6) << 6, m = new Uint8Array(n);
      m.set(b); m[l] = 0x80;
      const dv = new DataView(m.buffer);
      dv.setUint32(n - 4, l * 8 >>> 0); dv.setUint32(n - 8, Math.floor(l / 536870912));
      const h = H0.slice();
      for (let o = 0; o < n; o += 64) {
        for (let i = 0; i < 16; i++) w[i] = dv.getInt32(o + i * 4);
        for (let i = 16; i < 64; i++) {
          const a = w[i - 15], c = w[i - 2];
          w[i] = (w[i - 16] + ((a >>> 7 | a << 25) ^ (a >>> 18 | a << 14) ^ (a >>> 3)) + w[i - 7] + ((c >>> 17 | c << 15) ^ (c >>> 19 | c << 13) ^ (c >>> 10))) | 0;
        }
        let [A, B, C, D, E, F, G, Hh] = h;
        for (let i = 0; i < 64; i++) {
          const t1 = (Hh + ((E >>> 6 | E << 26) ^ (E >>> 11 | E << 21) ^ (E >>> 25 | E << 7)) + ((E & F) ^ (~E & G)) + K[i] + w[i]) | 0;
          const t2 = (((A >>> 2 | A << 30) ^ (A >>> 13 | A << 19) ^ (A >>> 22 | A << 10)) + ((A & B) ^ (A & C) ^ (B & C))) | 0;
          Hh = G; G = F; F = E; E = (D + t1) | 0; D = C; C = B; B = A; A = (t1 + t2) | 0;
        }
        [A, B, C, D, E, F, G, Hh].forEach((v, i) => (h[i] = (h[i] + v) | 0));
      }
      return h.map(v => (v >>> 0).toString(16).padStart(8, "0")).join("");
    };
    const DATA = ["Genesis", "Alice pays Bob 5", "Bob pays Cara 2", "Cara pays Dev 1"];
    const B = DATA.map((d, i) => ({ i, data: d, nonce: 0, hash: "" }));
    const hashOf = (b, prev) => sha(`${b.i}|${prev}|${b.data}|${b.nonce}`);
    const prevOf = i => (i ? B[i - 1].hash : "0".repeat(64));
    const mineSync = i => { const prev = prevOf(i), b = B[i]; b.nonce = 0; while (!(b.hash = hashOf(b, prev)).startsWith("00")) b.nonce++; };
    B.forEach((_, i) => mineSync(i));
    // what each block points to is the hash it had when it was mined (stored); tampering changes what it hashes to now
    const stored = B.map(b => b.hash);
    row.innerHTML = B.map((b, i) => `<div class="lg-b" data-i="${i}">
        <span class="lg-h">${i ? `Block ${i}` : "Block 0 · genesis"}</span>
        <label class="lg-f"><i>Data</i><input type="text" value="${b.data}" data-i="${i}" spellcheck="false" aria-label="Data in block ${i}"></label>
        <span class="lg-f"><i>Prev hash</i><code class="lg-prev"></code></span>
        <span class="lg-f"><i>Nonce</i><code class="lg-n"></code></span>
        <span class="lg-f"><i>Hash</i><code class="lg-hash"></code></span>
        <span class="lg-ok"></span>
      </div>`).join("");
    const cards = $$(".lg-b", row), msg = $("#lgMsg", root);
    const short = h => (h === "0".repeat(64) ? "none" : h.slice(0, 6).toUpperCase());
    let busy = false;
    const draw = (note) => {
      // each block's stored hash is what the next block points to; recompute what each block's hash is now
      const now = B.map((b, i) => hashOf(b, i ? stored[i - 1] : "0".repeat(64)));
      let firstBad = -1;
      cards.forEach((c, i) => {
        const linked = i === 0 || stored[i - 1] === now[i - 1];
        // valid only if it carries the work, still matches what it was mined as, points at the block before, and that block is valid
        const ok = firstBad < 0 && now[i].startsWith("00") && now[i] === stored[i] && linked;
        if (!ok && firstBad < 0) firstBad = i;
        c.classList.toggle("bad", !ok);
        $(".lg-prev", c).textContent = short(i ? stored[i - 1] : "0".repeat(64));
        $(".lg-prev", c).classList.toggle("x", !linked);
        $(".lg-n", c).textContent = B[i].nonce;
        $(".lg-hash", c).textContent = short(now[i]);
        $(".lg-hash", c).classList.toggle("x", !now[i].startsWith("00"));
        $(".lg-ok", c).textContent = ok ? "✓ valid" : "✕ invalid";
      });
      msg.innerHTML = note || (firstBad < 0 ? `All four blocks are valid. Each hash starts with <b>00</b>, and each block points at the one before it.`
        : `Block ${firstBad} no longer matches its fingerprint, so every block after it points at a hash that doesn’t exist. Press <b>Redo the work</b> to re-mine from block ${firstBad}.`);
      $("#lgMine", root).disabled = firstBad < 0 || busy;
      return firstBad;
    };
    $$("input", row).forEach(inp => inp.addEventListener("input", () => { if (busy) return; B[+inp.dataset.i].data = inp.value; draw(); }));
    $("#lgTamper", root).addEventListener("click", () => {
      if (busy) return;
      const inp = $$("input", row)[1];
      inp.value = B[1].data === "Alice pays Bob 500" ? "Alice pays Bob 5" : "Alice pays Bob 500";
      B[1].data = inp.value; draw();
    });
    $("#lgMine", root).addEventListener("click", () => {
      const start = draw();
      if (start < 0 || busy) return;
      busy = true; $("#lgMine", root).disabled = true;
      let i = start, tries = 0;
      const step = () => {
        const prev = i ? stored[i - 1] : "0".repeat(64), b = B[i];
        // try a handful of nonces per frame so the counter visibly spins
        for (let k = 0; k < (calm || motionPaused ? 1e6 : 9); k++) {
          const h = hashOf(b, prev); tries++;
          if (h.startsWith("00")) { stored[i] = h; i++; break; }
          b.nonce++;
        }
        draw(`Mining block ${Math.min(i, B.length - 1)}… nonce <b>${B[Math.min(i, B.length - 1)].nonce}</b>`);
        if (i < B.length) requestAnimationFrame(step);
        else { busy = false; draw(`Valid again, after <b>${tries.toLocaleString("en-US")}</b> tries across ${B.length - start} block${B.length - start > 1 ? "s" : ""}. On Bitcoin, you’d also have to outrun every honest miner.`); }
      };
      B[start].nonce = 0;
      requestAnimationFrame(step);
    });
    draw();

    // frame 2: Satoshi's catch-up probability (white paper, section 11)
    const q = $("#lgQ", root), z = $("#lgZ", root), chart = $("#lgChart", root);
    const catchUp = (qq, zz) => {
      const p = 1 - qq, lam = zz * (qq / p);
      let sum = 1, pois = Math.exp(-lam);
      for (let k = 0; k <= zz; k++) { if (k > 0) pois *= lam / k; sum -= pois * (1 - Math.pow(qq / p, zz - k)); }
      return Math.max(0, Math.min(1, sum));
    };
    const pct = v => (v >= .1 ? `${(v * 100).toFixed(0)}%` : v >= .001 ? `${(v * 100).toFixed(1)}%` : v >= .00001 ? `${(v * 100).toFixed(3)}%` : "<0.001%");
    const upd = () => {
      const qq = +q.value / 100, zz = +z.value;
      $("#lgQv", root).textContent = `${q.value}%`; $("#lgZv", root).textContent = zz;
      const bw = 400 / 13;
      chart.innerHTML = `<line class="ax" x1="42" y1="104" x2="444" y2="104"/>` + Array.from({ length: 13 }, (_, k) => {
        // log scale, 100% down to one in a million, so small odds stay visible
        const v = catchUp(qq, k), h = Math.max(1.5, (6 + Math.log10(Math.max(v, 1e-6))) / 6 * 88), x = 44 + k * bw;
        return `<rect x="${x.toFixed(1)}" y="${(104 - h).toFixed(1)}" width="${(bw - 6).toFixed(1)}" height="${h.toFixed(1)}" rx="2" fill="${k === zz ? "var(--coral)" : "var(--ink-3)"}" stroke="${k === zz ? "var(--coral)" : "var(--rule)"}"/><text x="${(x + bw / 2 - 3).toFixed(1)}" y="120" text-anchor="middle" font-size="11" ${k === zz ? `class="t-strong"` : ""}>${k}</text>`;
      }).join("") + [["100%", 0], ["1%", 2], ["0.01%", 4], ["0.0001%", 6]].map(([t, e]) => `<text x="38" y="${(16 + e / 6 * 88 + 4).toFixed(1)}" text-anchor="end" font-size="10.5">${t}</text><line class="gridl" x1="42" y1="${(16 + e / 6 * 88).toFixed(1)}" x2="444" y2="${(16 + e / 6 * 88).toFixed(1)}"/>`).join("");
      const v = catchUp(qq, zz);
      $("#lgOut", root).innerHTML = `<b class="${v > .01 ? "dn" : "up"}">${pct(v)}</b><span>chance a forger with ${q.value}% of the power ever catches up from ${zz} block${zz === 1 ? "" : "s"} behind.</span>`;
    };
    q.addEventListener("input", upd); z.addEventListener("input", upd);
    upd();
  },
  custom(root) {
    const r = $("#cuRange", root);
    if (!r) return;
    const regions = $$(".cu-r", root);
    // who designs each region at each stage: c = customer, p = design partner, s = cheaper second partner
    const OWN = {
      1: { core: "p", mem: "p", io: "p", pkg: "p", net: "p" },
      2: { core: "c", mem: "p", io: "p", pkg: "p", net: "p" },
      3: { core: "c", mem: "s", io: "s", pkg: "s", net: "p" },
      4: { core: "c", mem: "c", io: "c", pkg: "c", net: "p" }
    };
    const TXT = {
      1: "<b>1. Turnkey.</b> The partner builds the whole chip from the customer’s requirements.",
      2: "<b>2. Today’s norm.</b> The customer designs the compute; Broadcom or Marvell does the high-speed I/O, memory interface, packaging and supply.",
      3: "<b>3. Price pressure.</b> A cheaper second partner takes the back end: MediaTek on TPU v7, and reportedly Alchip on Trainium3 and 4.",
      4: "<b>4. Full insourcing, the threat.</b> The customer does it all. What’s left to sell is the network and the optics around the chip."
    };
    const upd = () => {
      const s = +r.value;
      regions.forEach(g => g.setAttribute("data-o", OWN[s][g.dataset.r]));
      $("#cuRead", root).innerHTML = TXT[s];
    };
    r.addEventListener("input", upd);
    upd();
  },
  tokens(root) {
    const r = $("#tkRange", root), svg = $("#tkChart", root);
    if (!r || !svg) return;
    let rate = .4;
    // log price axis from 5 cents to $20 per million tokens
    const Y = v => 140 - (Math.log10(v) - Math.log10(.05)) / (Math.log10(20) - Math.log10(.05)) * 124, X = y => 64 + y * 92;
    const money = v => (v >= 1 ? `$${Math.abs(v - Math.round(v)) < .05 ? Math.round(v) : v.toFixed(1)}` : `$${v.toFixed(2)}`);
    const upd = () => {
      const yr = +r.value, f = t => Math.pow(1 - rate, t);
      $("#tkY", root).textContent = yr;
      const hi = Array.from({ length: 41 }, (_, i) => `${X(i / 10).toFixed(1)},${Y(15 * f(i / 10)).toFixed(1)}`), lo = Array.from({ length: 41 }, (_, i) => `${X(i / 10).toFixed(1)},${Y(5 * f(i / 10)).toFixed(1)}`).reverse();
      const rl = 5 * f(yr), rh = 15 * f(yr), sl = rl / .3, sh = rh / .1;
      svg.innerHTML = [.1, 1, 10].map(v => `<line class="gridl" x1="64" y1="${Y(v).toFixed(1)}" x2="432" y2="${Y(v).toFixed(1)}"/><text x="56" y="${(Y(v) + 4).toFixed(1)}" text-anchor="end" font-size="11">${money(v)}</text>`).join("") +
        [0, 1, 2, 3, 4].map(y => `<text x="${X(y)}" y="160" text-anchor="middle" font-size="11" ${y === yr ? `class="t-strong"` : ""}>yr ${y}</text>`).join("") +
        `<polygon points="${hi.join(" ")} ${lo.join(" ")}" fill="rgba(63,214,200,.22)" stroke="var(--amber)" stroke-width="1.4"/>` +
        `<rect x="64" y="${Y(.3).toFixed(1)}" width="368" height="${(Y(.1) - Y(.3)).toFixed(1)}" fill="rgba(244,151,122,.25)" stroke="var(--coral)" stroke-width="1.2"/>` +
        `<text x="430" y="${(Y(.3) - 6).toFixed(1)}" text-anchor="end" font-size="11" font-weight="800" style="fill:var(--coral)">cost to make: $0.10–0.30</text>` +
        `<text x="70" y="${(Y(15) - 6).toFixed(1)}" font-size="11" font-weight="800" style="fill:var(--amber)">list price</text>` +
        `<line x1="${X(yr)}" y1="${Y(rh).toFixed(1)}" x2="${X(yr)}" y2="${Y(.1).toFixed(1)}" stroke="var(--paper)" stroke-width="2" stroke-dasharray="3 3"/>` +
        `<circle cx="${X(yr)}" cy="${Y(rh).toFixed(1)}" r="4.5" fill="var(--amber)"/><circle cx="${X(yr)}" cy="${Y(rl).toFixed(1)}" r="4.5" fill="var(--amber)"/>`;
      $("#tkOut", root).innerHTML = `<b class="${sl >= 5 ? "up" : sl >= 1.5 ? "" : "dn"}">${sl.toFixed(sl < 10 ? 1 : 0)}–${sh.toFixed(0)}×</b><span>spread. List price ${money(rl)}–${money(rh)} per million tokens.</span>`;
    };
    $$(".tk-r", root).forEach(b => b.addEventListener("click", () => {
      $$(".tk-r", root).forEach(x => x.classList.toggle("on", x === b));
      rate = +b.dataset.r / 100; upd();
    }));
    r.addEventListener("input", upd);
    upd();
  },
  factory(root) {
    const r = $("#faRange", root);
    if (!r) return;
    let speed = 10;
    const cells = $$("#faGrid i", root), MAX = 5e8;
    const big = v => (v >= 1e9 ? `${(v / 1e9).toFixed(v >= 1e10 ? 0 : 1)} billion` : v >= 1e6 ? `${(v / 1e6).toFixed(v >= 1e7 ? 0 : 1).replace(/\.0$/, "")} million` : `${Math.round(v / 1e3).toLocaleString("en-US")},000`);
    const upd = () => {
      const n = Math.round(Math.pow(10, +r.value)), e = n * speed;
      $("#faN", root).textContent = n.toLocaleString("en-US");
      const lit = Math.min(100, Math.ceil(e / MAX * 100 - 1e-9));
      cells.forEach((c, i) => { c.classList.toggle("a", i < lit); c.classList.toggle("nobel", i === Math.round(5e7 / MAX * 100) - 1); });
      $("#faOut", root).innerHTML = `<b>${big(e)}</b><span>full-time experts’ worth of work${e >= 5e7 ? `, past Amodei’s “50 million”` : `, ${Math.round(e / 5e7 * 100) || "<1"}% of Amodei’s “50 million”`}.</span>`;
    };
    $$(".fa-s", root).forEach(b => b.addEventListener("click", () => {
      $$(".fa-s", root).forEach(x => x.classList.toggle("on", x === b));
      speed = +b.dataset.s; upd();
    }));
    r.addEventListener("input", upd);
    upd();
  },
  chipnames(root) {
    const name = $("#cnName", root);
    if (!name) return;
    const D = {
      "T4": [[["T", "Turing (2018), after Alan Turing"], ["4", "the small, low-power tier"]], "A small inference card, still common for low-traffic serving."],
      "A100": [[["A", "Ampere (2020), after André-Marie Ampère"], ["100", "the flagship tier"]], "The H100’s predecessor, and the chip behind early ChatGPT-era training."],
      "L40S": [[["L", "Ada Lovelace (2022), after Ada Lovelace"], ["40", "the mid tier, for graphics and inference"], ["S", "a boosted version of the L40"]], "48 GB of memory and no NVLink, so it doesn’t scale up like an H100."],
      "H100": [[["H", "Hopper (2022), after Grace Hopper"], ["100", "the flagship tier"]], "80 GB of memory at 3.35 TB/s."],
      "H200": [[["H", "still Hopper: the same chip"], ["200", "the refresh, with more and faster memory"]], "141 GB at 4.8 TB/s, up from 80 GB at 3.35."],
      "B200": [[["B", "Blackwell (2024), after David Blackwell"], ["200", "the flagship: two dies in one package"]], "192 GB at up to 8 TB/s."],
      "GB200 NVL72": [[["G", "a Grace CPU, one for every two GPUs"], ["B200", "Blackwell GPUs"], ["NVL72", "72 GPUs on one NVLink network: a rack that works as one"]], "36 Grace CPUs and 72 Blackwell GPUs per rack."],
      "B300": [[["B", "still Blackwell"], ["300", "Blackwell Ultra, the mid-cycle upgrade"]], "288 GB at 8 TB/s."],
      "Vera Rubin NVL72": [[["Vera", "the Vera CPU, which replaces Grace"], ["Rubin", "Rubin GPUs (2026), after astronomer Vera Rubin"], ["NVL72", "72 Rubin GPUs and 36 Vera CPUs per rack"]], "288 GB of HBM4 per GPU at up to 22 TB/s; 20.7 TB per rack."]
    };
    const COLORS = ["var(--beat)", "var(--amber)", "var(--coral)"];
    const show = p => {
      const [parts, mem] = D[p];
      name.innerHTML = parts.map(([s], i) => `<span style="--c:${COLORS[i]}">${s}</span>`).join(p.includes(" ") ? " " : "");
      $("#cnParts", root).innerHTML = parts.map(([s, d], i) => `<li style="--c:${COLORS[i]}"><b>${s}</b><span>${d}</span></li>`).join("");
      $("#cnMem", root).textContent = mem;
    };
    $$(".cn-p", root).forEach(b => b.addEventListener("click", () => { $$(".cn-p", root).forEach(x => x.classList.toggle("on", x === b)); show(b.dataset.p); }));
    show("GB200 NVL72");
  },
  silicon(root) {
    const r = $("#siRange", root);
    if (!r) return;
    const F = { ecc: [3, 10, "ECC against GPUHammer", " It also gives up 6.5% of memory."], kpti: [8, 19, "Meltdown and Spectre fixes on databases", ""] };
    let f = "ecc";
    const cells = $$("#siGrid i", root);
    const upd = () => {
      const n = +r.value, [lo, hi, l, extra] = F[f];
      $("#siN", root).textContent = n.toLocaleString("en-US");
      cells.forEach((c, i) => { c.classList.toggle("lo", i >= 100 - lo); c.classList.toggle("hi", i >= 100 - hi && i < 100 - lo); });
      $("#siOut", root).innerHTML = `<b class="dn">${Math.round(n * lo / 100).toLocaleString("en-US")}–${Math.round(n * hi / 100).toLocaleString("en-US")}</b><span>machines’ worth of output lost to ${l}.${extra}</span>`;
    };
    $$(".si-f", root).forEach(b => b.addEventListener("click", () => { $$(".si-f", root).forEach(x => x.classList.toggle("on", x === b)); f = b.dataset.f; upd(); }));
    r.addEventListener("input", upd);
    upd();
  },
  neocloud(root) {
    const r = $("#ncRange", root);
    if (!r) return;
    const RATES = [["AWS, on demand", 6.88, "var(--coral)", "AWS"], ["Nebius, Oct 2026", 4.50, "var(--violet)", "Nebius"], ["Neocloud average", 2.82, "var(--beat)", "Neoclouds"]];
    const fmt = v => v >= 1e6 ? `$${(v / 1e6).toFixed(v >= 1e7 ? 0 : 1)}M` : `$${Math.round(v / 1e3)}K`;
    const upd = () => {
      const n = +r.value, hours = n * 24 * 30;
      $("#ncN", root).textContent = n.toLocaleString("en-US");
      const bills = RATES.map(([l, rate, c, s]) => [l, rate * hours, c, s, rate]);
      const max = bills[0][1];
      $("#ncBills", root).innerHTML = bills.map(([l, v, c, s, rate]) => `<div class="nc-bill" style="--c:${c};--w:${(v / max * 100).toFixed(1)}%"><span class="l"><span class="lg">${l}</span><span class="sm">${s} <em>$${rate.toFixed(2)}/hr</em></span></span><span class="b"><i></i></span><b>${fmt(v)}</b></div>`).join("") +
        `<p class="nc-save">Nebius saves about <b>${fmt(bills[0][1] - bills[1][1])}</b> a month against AWS list price.</p>`;
    };
    r.addEventListener("input", upd);
    upd();
  },
  gpulife(root) {
    const r = $("#glRange", root), svg = $("#glChart", root);
    if (!r || !svg) return;
    const COST = 35000, START = 2.82, RUN = .40, HOURS = .7 * 8760, MAX = 100000;
    const run = g => { let cum = 0; return Array.from({ length: 6 }, (_, i) => { const net = Math.max(0, START * Math.pow(1 + g, i) - RUN) * HOURS; cum += net; return [net, cum]; }); };
    let lo = -.9, hi = 0;
    for (let k = 0; k < 40; k++) { const mid = (lo + hi) / 2; run(mid)[5][1] >= COST ? (hi = mid) : (lo = mid); }
    const be = Math.round(hi * 100), beTxt = `${be < 0 ? "−" : ""}${Math.abs(be)}%`;
    const k$ = v => `$${Math.round(v / 1000)}K`;
    const yv = v => (128 - Math.min(v, MAX) / MAX * 112).toFixed(1);
    const upd = () => {
      const g = +r.value / 100, rows = run(g), pay = rows.findIndex(([, c]) => c >= COST), total = rows[5][1];
      $("#glG", root).textContent = `${g > 0 ? "+" : g < 0 ? "−" : ""}${Math.abs(Math.round(g * 100))}%`;
      const bx = i => 46 + i * 68;
      svg.innerHTML = `<line class="ax" x1="30" y1="128" x2="446" y2="128"/>` +
        rows.map(([n], i) => `<rect x="${bx(i)}" y="${yv(n)}" width="34" height="${(128 - yv(n)).toFixed(1)}" rx="2" fill="var(--violet)" opacity=".75"/><text x="${bx(i) + 17}" y="144" text-anchor="middle" font-size="11">yr ${i + 1}</text>`).join("") +
        `<line x1="30" y1="${yv(COST)}" x2="446" y2="${yv(COST)}" stroke="var(--coral)" stroke-width="1.6" stroke-dasharray="5 4"/><text x="32" y="${yv(COST) - 5}" font-size="11" font-weight="700" style="fill:var(--coral)">cost $35K</text>` +
        `<polyline points="${rows.map(([, c], i) => `${bx(i) + 17},${yv(c)}`).join(" ")}" fill="none" stroke="var(--beat)" stroke-width="2.6" stroke-linejoin="round"/>` +
        rows.map(([, c], i) => `<circle cx="${bx(i) + 17}" cy="${yv(c)}" r="${i === pay ? 6 : 3.4}" fill="${i === pay ? "var(--amber)" : "var(--beat)"}"/>`).join("") +
        `<text x="${bx(5) + 17}" y="${Math.max(12, +yv(total) - 10)}" text-anchor="middle" font-size="12" font-weight="800" style="fill:var(--beat)">${k$(total)}${total > MAX ? " ↑" : ""}</text>`;
      $("#glOut", root).innerHTML = pay >= 0
        ? `<b class="up">Pays back in year ${pay + 1}</b><span>and returns ${(total / COST).toFixed(1)}× its cost by year 6. Break-even is about ${beTxt} a year.</span>`
        : `<b class="dn">Never pays back</b><span>It recovers ${Math.round(total / COST * 100)}% of its cost. Break-even is about ${beTxt} a year.</span>`;
    };
    r.addEventListener("input", upd);
    upd();
  },
  spacex(root) {
    const r = $("#sxRange", root);
    if (!r) return;
    const REV = 18.7, PRICE = 60, ADD = 3, SCALE = 35;
    const upd = () => {
      const m = +r.value, f = PRICE / (m * REV), add = ADD / REV, rps = (1 + add) / (1 + f) - 1;
      $("#sxM", root).textContent = `${m}×`;
      $("#sxBills", root).innerHTML = [["New shares", f, "var(--coral)"], ["Revenue added", add, "var(--beat)"]].map(([l, v, c]) => `<div class="nc-bill" style="--c:${c};--w:${Math.min(100, v * 100 / SCALE * 100).toFixed(1)}%"><span class="l">${l}</span><span class="b"><i></i></span><b>+${(v * 100).toFixed(1)}%</b></div>`).join("");
      const pct = (rps * 100).toFixed(1).replace("-0.0", "0.0");
      $("#sxOut", root).innerHTML = `Revenue per share: <b class="${rps > .0005 ? "up" : rps < -.0005 ? "dn" : ""}">${rps > .0005 ? "+" : ""}${pct.replace("-", "−")}%</b><span>${rps > .0005 ? "The deal pays for itself in stock." : rps < -.0005 ? "Below 20×, buying Cursor in stock shrinks each share’s slice." : "At 20×, the trade is even."}</span>`;
    };
    r.addEventListener("input", upd);
    upd();
  },
  saas(root) {
    const r = $("#spRange", root);
    if (!r) return;
    const cells = $$("#spSeats i", root);
    const SEAT = 85, OUTCOME = .99, CONVOS = 100000, MAX = 81000;
    const fmt = v => `$${(v / 1000).toFixed(1)}K`;
    const upd = () => {
      const pct = +r.value, seats = Math.round(100 * (1 - pct / 100));
      const seatRev = seats * SEAT, both = seatRev + CONVOS * pct / 100 * OUTCOME;
      $("#spPct", root).textContent = `${pct}%`;
      cells.forEach((c, i) => c.classList.toggle("a", i >= seats));
      $("#spBills", root).innerHTML = [["Seats only", seatRev, "var(--violet)"], ["Seats + outcomes", both, "var(--amber)"]].map(([l, v, c]) => `<div class="nc-bill" style="--c:${c};--w:${Math.max(1, v / MAX * 100).toFixed(1)}%"><span class="l">${l}</span><span class="b"><i></i></span><b>${fmt(v)}</b></div>`).join("");
      $("#spRead", root).innerHTML = pct === 0 ? "Drag the slider to hand conversations to agents." : `Per-seat revenue falls ${pct}% to <b class="c">${fmt(seatRev)}</b>. Charging per outcome takes it to <b>${fmt(both)}</b>.`;
    };
    r.addEventListener("input", upd);
    upd();
  },
  weights(root) {
    const row = $("#ntRow", root), cands = $("#ntCands", root), k = $("#ntK", root), viz = $(".viz", root);
    if (!row) return;
    const PROMPT = ["The", "most", "valuable", "file", "in", "AI", "is"];
    const STEPS = [
      [["the", 41], ["its", 22], ["a", 14], ["not", 6]],
      [["model’s", 38], ["chip", 17], ["data", 15], ["training", 9]],
      [["weights", 64], ["code", 11], ["data", 9], ["name", 3]],
      [[".", 71], [",", 12], ["and", 8], ["file", 2]]
    ];
    let n = 0, playing = !(calm || motionPaused), busy = false;
    const draw = () => {
      const gen = STEPS.slice(0, n).map(s => s[0][0]);
      row.innerHTML = PROMPT.map(w => `<span class="tok">${w}</span>`).join("") + gen.map(w => `<span class="tok gen">${w}</span>`).join("") + (n < STEPS.length ? `<span class="tok next">?</span>` : "");
      const total = PROMPT.length + n;
      k.textContent = n < STEPS.length ? `Pass ${n + 1}: read all ${total} tokens, then pick token ${total + 1}` : `Done. ${STEPS.length} passes, each one rereading everything before it.`;
      cands.innerHTML = n < STEPS.length ? STEPS[n].map(([w, p]) => `<li><span class="w">${w}</span><span class="bar"><i style="--p:${p}"></i></span><span class="p">${p}%</span></li>`).join("") : "";
    };
    const step = () => {
      if (busy) return;
      if (n >= STEPS.length) { n = 0; draw(); return; }
      busy = true;
      const toks = $$(".tok:not(.next)", row);
      toks.forEach((el, i) => { el.classList.remove("read"); void el.offsetWidth; el.style.animationDelay = `${i * 60}ms`; el.classList.add("read"); });
      root.querySelector(".nt-net").classList.remove("hum"); void root.offsetWidth; root.querySelector(".nt-net").classList.add("hum");
      const wait = toks.length * 60 + 350;
      setTimeout(() => { cands.classList.add("show"); cands.firstElementChild && cands.firstElementChild.classList.add("win"); }, wait);
      setTimeout(() => { n++; cands.classList.remove("show"); draw(); busy = false; }, wait + 1100);
    };
    const setPlay = v => { playing = v; $("#ntPlay", root).textContent = v ? "❚❚" : "▶"; $("#ntPlay", root).setAttribute("aria-label", v ? "Pause" : "Play"); };
    $("#ntStep", root).addEventListener("click", () => { setPlay(false); step(); });
    $("#ntPlay", root).addEventListener("click", () => setPlay(!playing));
    $("#ntReset", root).addEventListener("click", () => { n = 0; busy = false; draw(); });
    setPlay(playing); draw();
    const timer = setInterval(() => {
      if (!root.contains(row) || memo.hidden) return clearInterval(timer);
      if (playing && !motionPaused && viz.dataset.step === "1") step();
    }, 2600);
  },
  backend(root) {
    const stage = $(".bk-stage", root), cap = $("#bkCap", root), viz = $(".viz", root);
    if (!stage) return;
    const CAPS = [
      "Probe. Needles touch every die on the finished wafer, and bad ones are flagged before anyone pays to package them.",
      "Dice. A diamond saw or a laser cuts the wafer along the streets between dies.",
      "Sort. Good dies go on to assembly. In an AI package, one bad die scraps the GPU and every HBM stack beside it.",
      "Bond. The GPU is flipped face down onto an interposer beside its HBM, then onto a substrate. That’s TSMC’s CoWoS, and it’s the choke point.",
      "Seal. Underfill, a lid and a heat spreader protect the dies and pull heat out.",
      "Test. The finished package runs at full speed in a socket. Only then is it a chip."
    ];
    const scenes = $$(".bk-s", stage), btns = $$(".bk-steps [data-s]", root), play = $(".bk-play", root);
    let cur = 0, playing = !(calm || motionPaused);
    const show = i => {
      cur = i;
      scenes.forEach(s => s.classList.remove("on"));
      void stage.getBoundingClientRect();
      scenes[i].classList.add("on");
      btns.forEach((b, k) => b.setAttribute("aria-pressed", String(k === i)));
      cap.textContent = CAPS[i];
    };
    const setPlay = v => { playing = v; play.textContent = v ? "❚❚" : "▶"; play.setAttribute("aria-label", v ? "Pause the line" : "Play the line"); };
    btns.forEach(b => b.addEventListener("click", () => { setPlay(false); show(+b.dataset.s); }));
    play.addEventListener("click", () => setPlay(!playing));
    setPlay(playing);
    const timer = setInterval(() => {
      if (!root.contains(stage) || memo.hidden) return clearInterval(timer);
      if (playing && !motionPaused && viz.dataset.step === "1") show((cur + 1) % scenes.length);
    }, 3600);
  },
  bloom(root) {
    const r = $("#blRange", root);
    if (!r) return;
    const cells = $$("#blGrid i", root);
    const upd = () => {
      const mw = +r.value, servers = Math.ceil(mw * 1000 / 325), days = mw / 2000 * 365;
      const time = days < 45 ? `about ${Math.max(1, Math.round(days))} days` : `about ${Math.round(days / 30.4)} months`;
      $("#blMW", root).textContent = mw >= 1000 ? "1 GW" : `${mw} MW`;
      $("#blRead", root).innerHTML = `<b>${servers.toLocaleString("en-US")}</b> Energy Servers, or ${time} of Bloom’s planned factory output.`;
      cells.forEach((c, i) => c.classList.toggle("on", i < mw / 10));
    };
    r.addEventListener("input", upd);
    upd();
  },
  ooms(root) {
    const r = $("#oomRange", root);
    if (!r) return;
    const LV = [["chip", 3], ["server", Math.log10(14300)], ["rack", Math.log10(1.2e5)], ["cluster", Math.log10(1.2e8)], ["campus", Math.log10(1.2e9)]];
    const items = $$(".oc-levels li", root);
    const fmtX = s => (Number.isInteger(s) ? "×" : "×≈") + Math.round(Number(Math.pow(10, s).toPrecision(1))).toLocaleString("en-US");
    const fmtW = lg => {
      const w = Math.pow(10, lg);
      const [d, u] = w >= 1e9 ? [1e9, "GW"] : w >= 1e6 ? [1e6, "MW"] : [1e3, "kW"];
      return `${Number((w / d).toPrecision(1))} ${u}`;
    };
    const upd = () => {
      const s = +r.value, lg = 3 + s;
      let best = 0;
      LV.forEach((l, i) => { if (Math.abs(l[1] - lg) < Math.abs(LV[best][1] - lg)) best = i; });
      const near = Math.abs(LV[best][1] - lg) <= .3;
      const above = LV.findIndex(l => l[1] > lg);
      const where = near ? `roughly a ${LV[best][0]}` : `between a ${LV[above - 1][0]} and a ${LV[above][0]}`;
      $("#oomX", root).textContent = fmtX(s);
      $("#oomRead", root).textContent = `${s === 1 ? "1 OOM" : s + " OOMs"}. About ${fmtW(lg)}, ${where}.`;
      items.forEach((li, i) => li.classList.toggle("on", near && i === best));
    };
    r.addEventListener("input", upd);
    upd();
  }
};

/* ---------------------------------------------------------------- render: home */
function renderHome() {
  $$("[data-name]").forEach(el => (el.textContent = CONFIG.name));
  $$("[data-href]").forEach(el => (el.href = CONFIG[el.dataset.href]));

  $("#receipts").innerHTML = RECEIPTS.map(r => {
    const t = byId[r.id], b = BINS[t.stance];
    return `<li><a class="feat" href="#${r.id}" style="--bin:${b.css}" aria-label="${t.title} ${r.v}: ${r.t} Open the thesis.">
      <span class="feat-scan" aria-hidden="true"></span>
      <span class="feat-top"><span>Die ${dieLabel(t.die)}</span><span class="bin" style="--bin:${b.css}">${b.label}</span>${r.fresh ? `<span class="feat-new">New</span>` : ""}</span>
      <b class="feat-v">${r.v}</b>
      <span class="feat-t">${r.t}</span>
      <span class="feat-title">${t.title}</span>
      <span class="feat-go">Open thesis <i>→</i></span>
      <span class="feat-echo" aria-hidden="true">${echo(t.echo)}</span>
    </a></li>`;
  }).join("");
  // a probe light visits each featured chip in turn, until someone is reading them
  const feats = $$("#receipts .feat");
  let fi = 0, featHold = false;
  $("#receipts").addEventListener("pointerenter", () => (featHold = true));
  $("#receipts").addEventListener("pointerleave", () => (featHold = false));
  $("#receipts").addEventListener("focusin", () => (featHold = true));
  $("#receipts").addEventListener("focusout", () => (featHold = false));
  setInterval(() => {
    if (featHold || calm || motionPaused || document.hidden) return;
    feats.forEach(f => f.classList.remove("ping"));
    void $("#receipts").offsetWidth;
    feats[fi++ % feats.length].classList.add("ping");
  }, 2200);

  $("#readout").innerHTML = `Probe idle. <b>${THESES.length} dies binned</b>, ${PROBES.length} in probe.`;
  $("#legend").innerHTML = Object.values(BINS).map(b => `<span class="bin" style="--bin:${b.css}">${b.label}</span>`).join("") + `<span class="bin probe">In probe</span>`;

  // size "Theses on the wafer" to the full width, then light a few dies on the strip behind it in each bin color
  const spanH = $("#theses-h"), spanT = $(".span-t", spanH), indexSub = $("#index-sub");
  const spanDies = document.createElement("span");
  spanDies.className = "span-dies"; spanDies.setAttribute("aria-hidden", "true");
  spanH.appendChild(spanDies);
  const LIT_DIES = [[.13, 1, "beat"], [.27, 3, "amber"], [.41, 0, "coral"], [.55, 2, "amber"], [.68, 4, "violet"], [.8, 1, "amber"], [.9, 3, "beat"]];

  // Echoes hanging around on the letters: Hard hat sits on the T like a steel beam, a probe Echo sleeps on its back
  // on the floor in front of "on the", and Dealmaker lifts off the end of the "r" on its jetpack
  const cast = {};
  const castEl = (name, html) => {
    const el = document.createElement("span");
    el.className = "sc sc-" + name; el.setAttribute("aria-hidden", "true"); el.innerHTML = html;
    spanH.appendChild(el); return (cast[name] = el);
  };
  castEl("sit", echo({ pose: "sit", acc: "hardhat", bare: true }));
  // the sleeper: lying back on a pillow on the floor line, asleep
  const sleeper = echo({ pose: "sleep", bare: true }).replace('<svg class="echo ', '<svg x="-66" y="-69" width="132" height="138" overflow="visible" class="sc-echo ');
  castEl("nap", `<svg class="sc-bed" viewBox="-80 -70 150 120" aria-hidden="true">
    <g transform="rotate(-14 -52 24)"><path d="M-75 6 Q-52 13 -29 6 Q-23 24 -29 42 Q-52 35 -75 42 Q-81 24 -75 6 Z" fill="#cfc6f5" stroke="#9b83ff" stroke-width="1.4" stroke-linejoin="round"/><path d="M-70 12 Q-52 17 -34 12" stroke="#fff" stroke-opacity=".75" stroke-width="2.2" fill="none" stroke-linecap="round"/><path d="M-52 16 V34" stroke="#9b83ff" stroke-opacity=".5" stroke-width="1" stroke-dasharray="2 2.4"/></g>
    <g transform="translate(6 -4) rotate(-72)">${sleeper}</g>
  </svg><i class="sc-z">z</i><i class="sc-z">z</i><i class="sc-z">z</i>`);
  castEl("burn", "");
  // longer exhaust than the stock jetpack, so the flames reach the letter it is lifting off
  const JET_FLAMES = [0.5, 99.5].map((x, i) => `<path class="echo-flame" style="animation-delay:${i * .12}s" d="M${x - 7} 72 Q${x} 168 ${x + 7} 72 Z" fill="#ffb23f" opacity=".9"/><path class="echo-flame" style="animation-delay:${i * .12}s" d="M${x - 3.4} 72 Q${x} 142 ${x + 3.4} 72 Z" fill="#fff4d6"/>`).join("");
  // the flames go inside Echo's own body group so they swing with it
  castEl("jet", echo({ pose: "float", acc: "jet", bare: true }).replace('<g class="echo-all">', `<g class="echo-all"><g class="sc-flames">${JET_FLAMES}</g>`));

  // read a glyph's ink edges at any height above the baseline by drawing it once on a canvas
  const gctx = document.createElement("canvas").getContext("2d", { willReadFrequently: true });
  const glyph = (ch, font, fs) => {
    const W = Math.ceil(fs * 1.4), H = Math.ceil(fs * 1.3), ox = Math.round(fs * .2), by = Math.round(fs * 1.05);
    gctx.canvas.width = W; gctx.canvas.height = H;
    gctx.font = font; gctx.fillStyle = "#000"; gctx.fillText(ch, ox, by);
    const d = gctx.getImageData(0, 0, W, H).data;
    return h => {
      const y = Math.min(H - 1, Math.max(0, Math.round(by - h)));
      let l = -1, r = -1;
      for (let x = 0; x < W; x++) if (d[(y * W + x) * 4 + 3] > 110) { if (l < 0) l = x; r = x + 1; }
      return l < 0 ? null : [l - ox, r - ox];
    };
  };
  const place = (el, x, y, w, h) => {
    el.style.left = x.toFixed(1) + "px"; el.style.top = y.toFixed(1) + "px";
    el.style.width = w.toFixed(1) + "px"; el.style.height = h.toFixed(1) + "px";
    el.classList.add("on");
  };
  const placeCast = fs => {
    Object.values(cast).forEach(el => el.classList.remove("on"));
    const tn = spanT.firstChild, txt = tn && tn.data;
    if (!txt || txt !== "Theses on the wafer") return;
    const cs = getComputedStyle(spanH), font = `${cs.fontWeight} ${fs}px ${cs.fontFamily}`;
    gctx.font = font;
    const hr = spanH.getBoundingClientRect();
    const at = i => { const r = document.createRange(); r.setStart(tn, i); r.setEnd(tn, i + 1); const b = r.getBoundingClientRect(); return { x: b.left - hr.left, top: b.top - hr.top, h: b.height }; };
    const m0 = gctx.measureText("x"), a0 = at(0);
    const baseline = a0.top + (m0.fontBoundingBoxAscent || a0.h * .82);
    const xh = m0.actualBoundingBoxAscent;
    const g = {}, G = (i, ch) => (g[i] = g[i] || glyph(ch, font, fs));
    const edge = (i, h) => { const e = G(i, txt[i])(h); const x = at(i).x; return e ? [x + e[0], x + e[1]] : null; };
    const topOf = i => baseline - gctx.measureText(txt[i]).actualBoundingBoxAscent;
    const box = 132 / 138, zm = zoom();

    // 1. Hard hat sits on the crossbar of the T like a steel beam, legs over the edge
    {
      const W = Math.max(32 * zm, fs * .44), u = W / 132, tTop = topOf(0), bar = edge(0, baseline - tTop - fs * .02);
      if (bar) place(cast.sit, (bar[0] + bar[1]) / 2 + W * .06 - 66 * u, tTop + 1 - 117 * u, W, W / box);
    }
    // 2. the probe Echo lies back on a pillow on the floor line in front of "on the", head under the gap so its z's rise between the words
    {
      const u = Math.max(.23 * zm, fs * .0036), nR = edge(8, xh * .4), tL = edge(10, xh * .4);
      if (nR && tL) {
        const gapX = (nR[1] + tL[0]) / 2, floor = spanH.offsetHeight - 1;
        place(cast.nap, gapX - 56 * u, floor - 120 * u, 150 * u, 120 * u);
        $$(".sc-z", cast.nap).forEach((z, i) => {
          z.style.fontSize = Math.max(11 * zm, fs * (.09 + i * .03)).toFixed(1) + "px";
          z.style.left = ((28 + i * 8) * u).toFixed(1) + "px"; z.style.top = ((-6 - i * 22) * u).toFixed(1) + "px";
        });
      }
    }
    // 3. Dealmaker lifts off the arm of the last "r" on its jetpack, off the end of the line
    {
      const W = Math.max(30 * zm, fs * .4), u = W / 132, rTop = topOf(18), arm = edge(18, xh - fs * .03);
      const room = document.documentElement.clientWidth - hr.right;
      const rL = edge(18, xh * .5);
      // one jet over the r's stem, the other over its arm; the jetpack's right edge is 56 units right of center
      const cx = arm && rL ? (rL[0] + arm[1]) / 2 + 3 * u : 0;
      if (arm && rL && cx + 60 * u - hr.width < room - 2) {
        place(cast.jet, cx - 66 * u, rTop - fs * .03 - 132.5 * u, W, W / box);
        place(cast.burn, rL[0] - 16 * u, rTop - 8 * u, arm[1] - rL[0] + 32 * u, 18 * u);
      }
    }
  };

  const fitSpan = () => {
    spanH.style.fontSize = "";
    const base = parseFloat(getComputedStyle(spanH).fontSize), w = spanH.clientWidth, tw = spanT.getBoundingClientRect().width;
    if (!w || !tw) return;
    const zm = zoom(), fs = Math.min(240 * zm, base * w / tw * .998);
    spanH.style.fontSize = fs.toFixed(2) + "px";
    const pitch = Math.max(Math.round(10 * zm), Math.round(fs * .2)), rows = Math.max(1, Math.floor(spanH.offsetHeight / pitch)), cols = Math.floor(w / pitch);
    spanH.style.setProperty("--pitch", pitch + "px");
    const gap = 3 * zm;
    spanDies.innerHTML = LIT_DIES.map(([x, r, c]) => `<i style="--bin:var(--${c});left:${Math.round(x * cols) * pitch + gap}px;top:${Math.min(r, rows - 1) * pitch + gap}px;width:${pitch - gap}px;height:${pitch - gap}px"></i>`).join("");
    try { placeCast(fs); } catch (e) {}
    // line the subtitle columns up under "on" and "wafer"
    const tn = spanT.firstChild, hr = spanH.getBoundingClientRect();
    if (tn && tn.data.indexOf(" wafer") > 0) {
      const inkL = i => { const r = document.createRange(); r.setStart(tn, i); r.setEnd(tn, i + 1); gctx.font = `${getComputedStyle(spanH).fontWeight} ${fs}px ${getComputedStyle(spanH).fontFamily}`; return r.getBoundingClientRect().left - hr.left - gctx.measureText(tn.data[i]).actualBoundingBoxLeft; };
      const c1 = inkL(tn.data.indexOf(" on ") + 1), c2 = inkL(tn.data.indexOf(" wafer") + 1);
      indexSub.style.setProperty("--c1", c1.toFixed(1) + "px");
      indexSub.style.setProperty("--c2", (c2 - c1).toFixed(1) + "px");
    }
  };
  fitSpan();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitSpan);
  let spanRaf = 0;
  addEventListener("resize", () => { cancelAnimationFrame(spanRaf); spanRaf = requestAnimationFrame(fitSpan); });

  $("#tlist").innerHTML = THESES.map(t => {
    const b = BINS[t.stance];
    return `<li><a class="t-item" href="#${t.id}" data-id="${t.id}" style="--bin:${b.css}"><span class="t-die">Die ${dieLabel(t.die)}</span><span class="t-title">${t.title}</span><span class="t-hook">${t.hook}</span><span class="bin">${b.label}</span></a></li>`;
  }).join("") + PROBES.map((p, i) => `<li><div class="t-item probe" data-id="probe${i}" tabindex="0"><span class="t-die">Die ${dieLabel(p.die)}</span><span class="t-title">${p.title}</span><span class="t-hook">${p.hook}</span><span class="bin probe">In probe</span></div></li>`).join("");

  // contact
  // a datasheet pinout: each way to reach me is an I/O pin on the package
  const pins = [
    CONFIG.email && { tag: "@", name: "Email", handle: CONFIG.email, role: "The direct line.", href: `mailto:${CONFIG.email}` },
    CONFIG.linkedin && { tag: "in", name: "LinkedIn", handle: "in/andrewrngai", role: "Work and intros. Start here.", href: CONFIG.linkedin, ext: 1 },
    CONFIG.instagram && { tag: "ig", name: "Instagram", handle: "@andrew.ngai_", role: "The side channel. Life outside the theses.", href: CONFIG.instagram, ext: 1 },
    CONFIG.github && { tag: "gh", name: "GitHub", handle: "Andrew-Ngai", role: "Source for this site.", href: CONFIG.github, ext: 1 },
    CONFIG.echotempoSite && { tag: "et", name: "EchoTempo", handle: "echotempo.github.io", role: "What I’m building.", href: CONFIG.echotempoSite, ext: 1 }
  ].filter(Boolean);
  $("#contactLinks").innerHTML = `
    <div class="pinout-head"><span>Pinout</span><span>AN-01 · ${pins.length} I/O<span class="po-extra"> · all pins open</span></span></div>
    <div class="pinout-body" style="--n:${pins.length}">
      <div class="io-pkg" aria-hidden="true">
        <span class="pkg-id">AN-01</span>
        <span class="pkg-name">${CONFIG.name}<small>2640 · Signal grade</small></span>
        <svg class="pkg-beat" viewBox="0 0 600 40" preserveAspectRatio="none"><path class="base" d="M0 20H210l12-12 10 26 12-30 12 26 8-10H600"/><path class="run" d="M0 20H210l12-12 10 26 12-30 12 26 8-10H600"/></svg>
        <span class="pkg-pads">${pins.map(() => "<i></i>").join("")}</span>
      </div>
      <ol class="pins">${pins.map((p, i) => `
        <li><a class="pin" href="${p.href}"${p.ext ? ` target="_blank" rel="noopener"` : ""}>
          <span class="leg" aria-hidden="true"></span>
          <span class="pin-no">${String(i + 1).padStart(2, "0")}</span>
          <span class="pin-tag" aria-hidden="true">${p.tag}</span>
          <span class="pin-id"><b>${p.name}</b><span>${p.handle}</span></span>
          <span class="pin-role">${p.role}</span>
          <span class="pin-go" aria-hidden="true">${p.ext ? "↗" : "→"}</span>
        </a></li>`).join("")}
      </ol>
    </div>`;
  // light the matching bond pad on the package while a pin is hovered or focused
  const pads = $$("#contactLinks .pkg i");
  $$("#contactLinks .pin").forEach((a, i) => {
    const on = v => () => pads[i] && pads[i].classList.toggle("hot", v);
    a.addEventListener("mouseenter", on(true)); a.addEventListener("mouseleave", on(false));
    a.addEventListener("focus", on(true)); a.addEventListener("blur", on(false));
  });
  if (CONFIG.email) {
    const note = $("#mailNote");
    note.hidden = false;
    note.innerHTML = `Or copy it: <span>${CONFIG.email}</span>`;
  }
}

/* ---------------------------------------------------------------- wafer map */
function buildMap() {
  const svg = $("#wmap");
  const ds = 24, R = 11.63 * ds, lim = R * 0.955, N = 13;
  const taken = new Map();
  THESES.forEach(t => taken.set(t.die.join(","), { type: "t", t }));
  PROBES.forEach((p, i) => taken.set(p.die.join(","), { type: "p", p, i }));
  let base = "", hits = "";
  for (let i = -N; i <= N; i++) for (let j = -N; j <= N; j++) {
    const x0 = (i - .5) * ds, x1 = (i + .5) * ds, y0 = (j - .5) * ds, y1 = (j + .5) * ds;
    const mr = Math.max(Math.hypot(x0, y0), Math.hypot(x1, y0), Math.hypot(x0, y1), Math.hypot(x1, y1));
    if (mr > lim) continue;
    const rect = `<rect x="${x0 + 1.5}" y="${-y1 + 1.5}" width="${ds - 3}" height="${ds - 3}" rx="1.5"/>`;
    const k = taken.get(i + "," + j);
    if (!k) { base += rect.replace("<rect", `<rect class="wm-die"`); continue; }
    if (k.type === "t") {
      const b = BINS[k.t.stance];
      hits += `<a class="wm-hit" href="#${k.t.id}" data-id="${k.t.id}" style="--bin:${b.css}" aria-label="Die ${dieLabel(k.t.die)}: ${k.t.title} Bin: ${b.label}.">${rect}</a>`;
    } else {
      hits += `<g class="wm-probe-die" data-id="probe${k.i}" tabindex="0" aria-label="Die ${dieLabel(k.p.die)}, in probe: ${k.p.title}"><title>In probe: ${k.p.title}</title>${rect}</g>`;
    }
  }
  svg.innerHTML = `<circle class="wm-edge" r="${R}" fill="var(--ink-2)"/><circle class="wm-excl" r="${lim}" stroke-dasharray="2 6"/>${base}${hits}
    <circle cx="0" cy="${R}" r="10" fill="var(--ink)"/><path d="M-10 ${R} A10 10 0 0 1 10 ${R}" fill="none" stroke="var(--rule)" stroke-width="2"/>
    <g id="probe" style="transform:translate(0px,0px);opacity:.35"><circle r="19"/><line x1="-34" y1="0" x2="-22" y2="0"/><line x1="22" y1="0" x2="34" y2="0"/><line x1="0" y1="-34" x2="0" y2="-22"/><line x1="0" y1="22" x2="0" y2="34"/></g>`;

  const probe = $("#probe"), readout = $("#readout"), tag = $("#dieTag"), wm = $(".wafermap"), decho = $("#dieEcho");
  const grid = $(".index-grid"), col = $(".map-col"), line = $("#linkLine");
  const idle = readout.innerHTML;
  const desktop = () => getComputedStyle(col).position === "sticky";
  let active = null, alignTimer = 0, offTimer = 0;
  const info = id => {
    const isProbe = id.startsWith("probe");
    const t = isProbe ? PROBES[+id.slice(5)] : byId[id];
    return { t, isProbe, css: isProbe ? "var(--faint)" : BINS[t.stance].css, bin: isProbe ? "In probe" : BINS[t.stance].label, spec: isProbe ? { pose: "sleep", name: "Snoozing" } : t.echo };
  };
  const dieEl = id => $(`#wmap [data-id="${id}"] rect`);
  const itemEl = id => $(`.t-item[data-id="${id}"]`);

  // callout pinned to the die
  let echoFor = null;
  function showTag(id) {
    const { t, isProbe, css, bin, spec } = info(id), d = dieEl(id);
    if (!d) return;
    const wr = wm.getBoundingClientRect(), dr = d.getBoundingClientRect(), cx = dr.left + dr.width / 2 - wr.left;
    // mini Echo in this thesis's outfit, standing on its die
    if (echoFor !== id) {
      echoFor = id;
      decho.innerHTML = echo(spec);
      decho.classList.remove("land"); void decho.offsetWidth; decho.classList.add("land");
    }
    const pw = decho.offsetWidth, ph = pw * 138 / 132;
    const pTop = dr.top - wr.top + dr.height * .35 - ph * .96;
    decho.style.left = (cx - pw / 2) + "px";
    decho.style.top = pTop + "px";
    decho.classList.add("show");
    tag.style.setProperty("--bin", css);
    tag.innerHTML = `<span class="dt-row"><span>Die ${dieLabel(t.die)}</span><span class="bin${isProbe ? " probe" : ""}" style="--bin:${css}">${bin}</span></span><b class="dt-t">${t.title}</b><span class="dt-go">${isProbe ? "Still testing this one." : `${spec.name} Echo is on it. Click the die to open.`}</span>`;
    const w = tag.offsetWidth, h = tag.offsetHeight;
    const left = Math.max(-8, Math.min(wr.width - w + 8, cx - w / 2));
    let top = pTop - h - 4;
    if (top < -24) top = dr.bottom - wr.top + 12;
    tag.style.left = left + "px";
    tag.style.top = top + "px";
    tag.classList.add("show");
  }

  // signal line from the die to its article
  function drawLine() {
    if (!active || !desktop()) { line.innerHTML = ""; return; }
    const d = dieEl(active), it = itemEl(active);
    if (!d || !it) { line.innerHTML = ""; return; }
    const gr = grid.getBoundingClientRect(), dr = d.getBoundingClientRect(), tr = it.querySelector(".t-title").getBoundingClientRect();
    const x1 = dr.right - gr.left, y1 = dr.top + dr.height / 2 - gr.top;
    const zm = zoom(), x2 = it.getBoundingClientRect().left - 17 * zm - gr.left, y2 = tr.top + Math.min(tr.height / 2, 20 * zm) - gr.top;
    const mx = x1 + (x2 - x1) * .55;
    const path = `M${x1.toFixed(1)} ${y1.toFixed(1)} C${mx.toFixed(1)} ${y1.toFixed(1)} ${mx.toFixed(1)} ${y2.toFixed(1)} ${x2.toFixed(1)} ${y2.toFixed(1)}`;
    line.style.setProperty("--bin", info(active).css);
    line.innerHTML = `<path class="ll-glow" d="${path}"/><path class="ll" d="${path}"/><circle cx="${x1.toFixed(1)}" cy="${y1.toFixed(1)}" r="3"/><circle cx="${x2.toFixed(1)}" cy="${y2.toFixed(1)}" r="4.5"/>`;
  }

  // slide the list so the article sits level with its die, without unsticking the wafer
  function align(id) {
    const it = itemEl(id), d = dieEl(id);
    if (!it || !d || !desktop()) return;
    const tr = it.querySelector(".t-title").getBoundingClientRect(), dr = d.getBoundingClientRect();
    const delta = tr.top + Math.min(tr.height / 2, 20 * zoom()) - (dr.top + dr.height / 2);
    const stick = parseFloat(getComputedStyle(col).top) || 0, gr = grid.getBoundingClientRect();
    const minY = scrollY + gr.top - stick, maxY = scrollY + gr.bottom - stick - col.offsetHeight;
    glide(Math.max(minY, Math.min(maxY, scrollY + delta)));
  }

  // our own eased scroll, so it starts instantly and stops the moment the reader scrolls
  let tween = 0, gliding = false;
  const root = document.documentElement;
  const stopGlide = () => { if (!gliding) return; gliding = false; cancelAnimationFrame(tween); root.style.scrollBehavior = ""; };
  ["wheel", "touchstart", "keydown"].forEach(ev => addEventListener(ev, stopGlide, { passive: true }));
  function glide(target) {
    stopGlide();
    const start = scrollY, dist = target - start;
    if (Math.abs(dist) < 6) return;
    root.style.scrollBehavior = "auto";
    if (calm) { window.scrollTo(0, target); root.style.scrollBehavior = ""; return; }
    const dur = Math.min(720, 300 + Math.abs(dist) * .22), t0 = performance.now();
    gliding = true;
    const step = now => {
      if (!gliding) return;
      const k = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - k, 3);
      window.scrollTo(0, start + dist * e);
      if (k < 1) tween = requestAnimationFrame(step); else stopGlide();
    };
    tween = requestAnimationFrame(step);
  }

  function activate(id, on, from) {
    clearTimeout(alignTimer);
    if (!on) {
      clearTimeout(offTimer);
      offTimer = setTimeout(() => {
        active = null;
        $$(".wm-hit, .t-item, .wm-probe-die").forEach(el => el.classList.remove("on", "scan"));
        readout.innerHTML = idle; probe.style.opacity = ".35"; tag.classList.remove("show"); line.innerHTML = "";
        decho.classList.remove("show"); echoFor = null;
      }, 120);
      return;
    }
    clearTimeout(offTimer);
    const changed = active !== id;
    active = id;
    const { t, isProbe, bin } = info(id);
    $$(".wm-hit, .t-item, .wm-probe-die").forEach(el => el.classList.toggle("on", el.dataset.id === id));
    if (changed && from === "die") {
      const it = itemEl(id);
      if (it) { it.classList.remove("scan"); void it.offsetWidth; it.classList.add("scan"); }
    }
    probe.style.transform = `translate(${t.die[0] * ds}px,${-t.die[1] * ds}px)`;
    probe.style.opacity = "1";
    readout.innerHTML = `<b>${t.title}</b><br>${t.hook}`;
    showTag(id);
    drawLine();
    if (from === "die") alignTimer = setTimeout(() => align(id), 160);
  }
  $$(".wm-hit, .wm-probe-die").forEach(el => {
    const id = el.dataset.id;
    el.addEventListener("mouseenter", () => activate(id, true, "die"));
    el.addEventListener("mouseleave", () => activate(id, false));
    el.addEventListener("focus", () => activate(id, true, "focus"));
    el.addEventListener("blur", () => activate(id, false));
  });
  $$(".t-item").forEach(el => {
    const id = el.dataset.id;
    el.addEventListener("mouseenter", () => activate(id, true, "list"));
    el.addEventListener("mouseleave", () => activate(id, false));
    el.addEventListener("focus", () => activate(id, true, "list"));
    el.addEventListener("blur", () => activate(id, false));
  });
  let raf = 0;
  const follow = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(() => { if (active) { drawLine(); showTag(active); } }); };
  addEventListener("scroll", follow, { passive: true });
  addEventListener("resize", follow);
}

/* ---------------------------------------------------------------- memo reader */
const memo = $("#memo");
let memoId = null, lastFocus = null, memoKeys = null, markMore = () => {};

// Line-break helpers for slide 1. A title, pull quote or claim breaks between phrases, never inside one.
// "|" marks where a line may break: with a space when the pipe has one beside it, with none right after a dash.
// Each sentence stays together where it fits, and each phrase stays on one line unless it's wider than the column.
const plain = s => s.replace(/<[^>]+>/g, "").replace(/\s*\|\s*/g, " ");
const phrases = (txt, tail = "") => {
  const bits = txt.replace(/—(?!\|)/g, "⁠—⁠").split("|");
  return bits.map((b, i) => {
    const joint = i === 0 ? "" : /\s$/.test(bits[i - 1]) || /^\s/.test(b) ? " " : "<wbr>";
    return `${joint}<span class="ph">${b.trim()}${i === bits.length - 1 ? tail : ""}</span>`;
  }).join("");
};
const sentences = (txt, tail = "") => {
  const ss = txt.split(/(?<=[.!?…])\s+(?=[A-Z“"])/);
  return ss.map((x, i) => `<span class="sen">${phrases(x, i === ss.length - 1 ? tail : "")}</span>`).join(" ");
};
const tidySignal = html => html
  .replace(/<blockquote class="pull">([\s\S]*?)<\/blockquote>/g, (m, q) => {
    const n = plain(q).length;
    return `<blockquote class="pull ${n > 80 ? "q-l" : n > 48 ? "q-m" : "q-s"}"><span class="qo" aria-hidden="true">“</span>${phrases(q, '<span class="qc" aria-hidden="true">”</span>')}</blockquote>`;
  })
  .replace(/<p class="claim">([\s\S]*?)<\/p>/g, (m, c) => `<p class="claim">${sentences(c)}</p>`);

// Pick the line breaks for slide 1 at the current width. The CSS above already keeps phrases whole; this goes further
// and tries every way of grouping the phrases into lines, then keeps the most even set: no line jutting past the rest,
// a sentence end at a line end where it can be, and an extra line when that evens things out. Browsers balance text
// differently (Safari vs Chrome), so explicit breaks keep laptops and phones consistent. Re-run on resize.
const typeSrc = new WeakMap();
function setType(root) {
  $$(".slide h2, blockquote.pull, p.claim", root).forEach(el => {
    if (!typeSrc.has(el)) typeSrc.set(el, el.innerHTML);
    el.innerHTML = typeSrc.get(el);
    const ph = $$(".ph", el), n = ph.length;
    if (n < 2 || n > 12) return;
    const cs = getComputedStyle(el);
    const W = el.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
    if (!(W > 0)) return;
    const probe = document.createElement("span");
    probe.style.cssText = "white-space:pre;display:inline-block";
    probe.textContent = " ";
    el.appendChild(probe);
    const sp = probe.getBoundingClientRect().width;
    probe.remove();
    const w = ph.map(p => p.getBoundingClientRect().width);
    // joint before phrase i: a space, or nothing (a break right after a dash); flag sentence starts
    const gap = ph.map((p, i) => (i && p.previousSibling && p.previousSibling.nodeName === "WBR" ? 0 : sp));
    const senStart = ph.map((p, i) => i > 0 && p.parentNode.classList.contains("sen") && p === p.parentNode.querySelector(".ph"));
    let best = null;
    for (let mask = 0; mask < 1 << (n - 1); mask++) {
      const lines = [];
      let cur = [0];
      for (let i = 1; i < n; i++) {
        if (mask & (1 << (i - 1))) { lines.push(cur); cur = [i]; } else cur.push(i);
      }
      lines.push(cur);
      let ok = true, cost = 0;
      const lw = lines.map(l => {
        const x = l.reduce((s, i, k) => s + w[i] + (k ? gap[i] : 0), 0);
        if (l.length > 1 && x > W + .5) ok = false;
        l.slice(1).forEach(i => { if (senStart[i]) cost += .1; });
        return Math.min(x, W);
      });
      if (!ok) continue;
      const top = Math.max(...lw);
      lw.forEach((x, k) => {
        const s = (top - x) / W;
        cost += (k === lw.length - 1 ? .5 : 1) * s * s;
      });
      // each line costs a little, and so does leaving the column mostly empty (a tall, narrow stack on a laptop)
      cost += .08 * lines.length + (1 - top / W) ** 2;
      if (!best || cost < best.cost - 1e-9) best = { cost, lines, lw };
    }
    if (!best || best.lines.length < 2 && best.lw[0] < W) return;
    const qo = $(".qo", el);
    el.innerHTML = (qo ? qo.outerHTML : "") + best.lines.map((l, k) =>
      `<span class="ln${l.length === 1 && best.lw[k] >= W ? " wide" : ""}">${l.map((i, j) => (j ? (gap[i] ? " " : "") : "") + ph[i].innerHTML).join("")}</span>`
    ).join("<br>");
  });
}

function memoHTML(t) {
  const b = BINS[t.stance];
  const idx = THESES.indexOf(t);
  const next = THESES[(idx + 1) % THESES.length];
  return `<div class="memo-head" style="--bin:${b.css}">
      <button class="btn memo-close" id="memoClose" type="button">Close</button>
      <div class="memo-meta"><span class="m-die">Die ${dieLabel(t.die)}&nbsp;&nbsp;<span class="bin">${b.label}</span></span><span class="m-title" id="memoTitle">${t.title}</span></div>
      <div class="memo-prog" aria-hidden="true"><i class="on"></i><i></i><i></i></div>
      <div class="memo-src">
        <button class="btn memo-src-btn" id="memoSrcBtn" type="button" aria-expanded="false" aria-controls="memoSrc">Receipts <span class="memo-src-n">${t.receipts.length}</span></button>
        <div class="memo-src-panel" id="memoSrc" hidden>
          <p class="memo-src-k">Receipts for this thesis</p>
          <ul>${t.receipts.map(([l, h]) => `<li><a href="${h}" target="_blank" rel="noopener">${l}</a></li>`).join("")}</ul>
        </div>
      </div>
    </div>
    <div class="memo-body" style="--bin:${b.css}">
      <div class="slides" id="slides" tabindex="0" aria-label="Thesis slides. Use the arrow keys to move between them.">
        <section class="slide" aria-label="Slide 1 of 3, the signal">
          <p class="slide-k">The signal</p>
          <h2>${sentences(t.h2 || t.title)}</h2>
          <div class="ref"><span class="ref-k">Reference design</span><a href="${t.ref.href}" target="_blank" rel="noopener">${t.ref.label}</a></div>
          ${tidySignal(t.signal)}
        </section>
        <section class="slide" aria-label="Slide 2 of 3, my take">
          <p class="slide-k">My take</p>
          <ol class="takes">${t.takes.map(([h, p]) => `<li><b>${h}</b><span>${p}</span></li>`).join("")}</ol>
        </section>
        <section class="slide" aria-label="Slide 3 of 3, the bet">
          <p class="slide-k">The bet</p>
          <p class="bet">${t.bet}</p>
          <div class="wrong"><b>I’m wrong if</b>${t.wrong}</div>
          <div class="bet-row"><figure class="bet-echo">${echo(t.echo)}<figcaption>${t.echo.name} Echo</figcaption></figure>${t.extraCta ? `<div class="ctas">${t.extraCta}</div>` : ""}</div>
          ${t.note ? `<p class="memo-note">${t.note}</p>` : ""}
        </section>
      </div>
      <button class="slides-more" id="slidesMore" type="button" tabindex="-1" aria-hidden="true" hidden>More <span>↓</span></button>
      <div class="viz-pane">${VIZ[t.viz]()}</div>
    </div>
    <div class="memo-foot">
      <button class="btn" id="memoPrev" type="button">Back</button>
      <span class="count" id="memoCount">1 of 3</span>
      <a class="btn memo-ask" href="#contact">Tell me I’m wrong</a>
      <button class="btn primary" id="memoNext" type="button" data-next="${next.id}">Next</button>
    </div>`;
}

// Pausing a fresh SVG before its first frame leaves SMIL unsampled, so movers sit at the origin. Seek to force a frame.
function freezeSvg(s) {
  if (!s.pauseAnimations) return;
  s.pauseAnimations();
  // a chart can name the moment that tells its story best (data-freeze-at, in seconds)
  const at = parseFloat(s.dataset.freezeAt);
  try { s.setCurrentTime(isNaN(at) ? s.getCurrentTime() : at); } catch (e) {}
}

// A mover whose motion path never got applied sits at the SVG origin. Hide it rather than leave it in the corner.
function hideStuckMovers(root) {
  setTimeout(() => $$("animateMotion", root).forEach(a => {
    const el = a.parentNode, m = el.getCTM && el.getCTM(), pm = el.parentNode.getCTM && el.parentNode.getCTM();
    if (m && pm && Math.abs(m.e - pm.e) < .01 && Math.abs(m.f - pm.f) < .01) el.style.visibility = "hidden";
  }), 700);
}

// On a short screen, a frame built from HTML rather than SVG can be taller than its slot and spill onto its caption.
// Shrink it to fit, the way an SVG chart already does: lay it out a little wider, then scale it down to the slot.
function fitFrames(root) {
  $$(".viz .frame", root).forEach(fr => {
    const body = fr.firstElementChild;
    if (!body || body.matches("svg, .cap")) return;
    ["transform", "transform-origin", "width", "height", "align-self"].forEach(k => body.style.removeProperty(k));
    const slot = body.getBoundingClientRect().height;
    const natural = () => {
      body.style.height = "auto"; body.style.alignSelf = "start";
      const h = body.getBoundingClientRect().height;
      body.style.removeProperty("height"); body.style.removeProperty("align-self");
      return h;
    };
    let need = natural();
    if (!slot || need <= slot + 1) return;
    let s = 1;
    for (let k = 0; k < 4; k++) {
      s = Math.max(.5, Math.min(1, slot / need));
      body.style.width = (100 / s).toFixed(3) + "%";
      need = natural();
    }
    s = Math.max(.5, Math.min(1, slot / need));
    body.style.width = (100 / s).toFixed(3) + "%";
    body.style.height = (slot / s).toFixed(1) + "px";
    body.style.transformOrigin = "0 0";
    body.style.transform = `scale(${s.toFixed(4)})`;
  });
}
// The 3D package (memory thesis) on a phone: scale it so the whole thing, stacks fully risen, fits above its key and caption.
// At scale 1 the tilted package spans 312px across, 192px above its center (risen stacks) and 81px below.
function fitPkg(root) {
  const pkg = $(".pkg", root), rot = $(".pkg-rot", root);
  if (!pkg || !rot) return;
  pkg.style.removeProperty("padding-top"); rot.style.removeProperty("--ps");
  if (innerWidth > 860) return;
  const ps = Math.max(.3, Math.min(.62, pkg.clientWidth / 312 * .92, pkg.clientHeight / 273 * .88));
  rot.style.setProperty("--ps", ps.toFixed(3));
  pkg.style.paddingTop = (111 * ps).toFixed(1) + "px";
}
// Size pill outlines to their label, so a wider font render never spills past the edge.
// If a fallback font runs wide, squeeze the label rather than let the pill grow into its neighbours.
const hugPills = root => root.querySelectorAll(".hug").forEach(g => {
  const t = g.querySelector("text"), r = g.querySelector("rect"), x = +t.getAttribute("x"), pad = 15, max = +g.dataset.max || Infinity;
  t.removeAttribute("textLength"); t.removeAttribute("lengthAdjust");
  const w = t.getComputedTextLength();
  if (!w) return;
  if (x + w + pad > max) { t.setAttribute("textLength", max - x - pad); t.setAttribute("lengthAdjust", "spacingAndGlyphs"); }
  r.setAttribute("width", Math.ceil(Math.min(x + w + pad, max)));
});
const fitViz = root => { setType(root); fitFrames(root); fitPkg(root); hugPills(root); };
let fitRaf = 0;
addEventListener("resize", () => { if (memo.hidden) return; cancelAnimationFrame(fitRaf); fitRaf = requestAnimationFrame(() => { fitViz(memo); markMore(); }); });

function openMemo(id) {
  const t = byId[id];
  if (!t) return;
  if (memo.hidden) lastFocus = document.activeElement;
  memoId = id;
  memo.innerHTML = memoHTML(t);
  memo.hidden = false;
  if (VIZ_INIT[t.viz]) VIZ_INIT[t.viz](memo);
  fitViz(memo);
  if (document.fonts && document.fonts.status !== "loaded") document.fonts.ready.then(() => { if (!memo.hidden) { fitViz(memo); markMore(); } });
  if (calm || motionPaused) $$("svg", memo).forEach(freezeSvg);
  hideStuckMovers(memo);
  document.documentElement.style.overflow = "hidden";
  if (wafer) wafer.hold(true);

  const slides = $("#slides"), viz = $(".viz", memo), prev = $("#memoPrev"), next = $("#memoNext"), count = $("#memoCount"), prog = $$(".memo-prog i", memo);
  const nextT = byId[next.dataset.next];
  let step = 0;
  const set = s => {
    if (s === step) return;
    step = s;
    if (viz) viz.dataset.step = s;
    // the caption (and anything a step adds) can change height with the step, so refit once it lands
    setTimeout(() => { if (!memo.hidden) { fitViz(memo); markMore(); } }, 650);
    prog.forEach((p, i) => p.classList.toggle("on", i < s));
    count.textContent = `${s} of 3`;
    prev.disabled = s === 1;
    next.textContent = s === 3 ? (innerWidth < 600 ? "Next thesis" : `Next thesis: ${nextT.short}`) : "Next";
  };
  set(1);
  const go = s => slides.scrollTo({ left: (s - 1) * slides.clientWidth, behavior: calm ? "auto" : "smooth" });
  slides.addEventListener("scroll", () => { set(Math.min(3, Math.max(1, Math.round(slides.scrollLeft / slides.clientWidth) + 1))); markMore(); }, { passive: true });

  // A slide taller than its window scrolls inside itself. Fade its bottom edge and show "More" so that's visible.
  const slideEls = $$(".slide", slides), more = $("#slidesMore");
  const cur = () => slideEls[step - 1];
  markMore = () => {
    if (memo.hidden) return;
    slideEls.forEach(s => s.classList.toggle("more", s.scrollHeight - s.clientHeight - s.scrollTop > 8));
    more.hidden = !cur().classList.contains("more");
  };
  slideEls.forEach(s => s.addEventListener("scroll", markMore, { passive: true }));
  more.addEventListener("click", () => cur().scrollBy({ top: cur().clientHeight * .8, behavior: calm ? "auto" : "smooth" }));
  requestAnimationFrame(markMore);
  setTimeout(markMore, 700);

  // Receipts: a menu in the top bar, so the sources are one click away on every slide
  const srcBtn = $("#memoSrcBtn"), srcPanel = $("#memoSrc");
  const setSrc = open => { srcPanel.hidden = !open; srcBtn.setAttribute("aria-expanded", String(open)); };
  srcBtn.addEventListener("click", () => setSrc(srcPanel.hidden));
  [...memo.children].forEach(el => el.addEventListener("click", e => { if (!srcPanel.hidden && !e.target.closest(".memo-src")) setSrc(false); }));
  prev.addEventListener("click", () => step > 1 && go(step - 1));
  next.addEventListener("click", () => (step < 3 ? go(step + 1) : (location.hash = nextT.id)));
  $("#memoClose").addEventListener("click", () => closeMemo(true));

  if (memoKeys) document.removeEventListener("keydown", memoKeys);
  memoKeys = e => {
    if (memo.hidden) return;
    if (e.key === "Escape" && !srcPanel.hidden) { setSrc(false); srcBtn.focus(); }
    else if (e.key === "Escape") closeMemo(true);
    else if (e.target === slides && ["ArrowDown", "ArrowUp", "PageDown", "PageUp", " ", "Home", "End"].includes(e.key)) {
      e.preventDefault();
      const s = cur(), page = s.clientHeight * .85, line = 60;
      const by = { ArrowDown: line, ArrowUp: -line, PageDown: page, " ": e.shiftKey ? -page : page, PageUp: -page, Home: -s.scrollHeight, End: s.scrollHeight }[e.key];
      s.scrollBy({ top: by, behavior: calm ? "auto" : "smooth" });
    }
    else if (e.key === "ArrowRight" && !e.target.matches("input,textarea")) { e.preventDefault(); step < 3 ? go(step + 1) : null; }
    else if (e.key === "ArrowLeft") { e.preventDefault(); step > 1 && go(step - 1); }
  };
  document.addEventListener("keydown", memoKeys);

  // 3D package follows the pointer
  const rot = $("#pkgRot", memo);
  if (rot) {
    $(".viz-pane", memo).addEventListener("pointermove", e => {
      const r = e.currentTarget.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - .5, py = (e.clientY - r.top) / r.height - .5;
      rot.style.setProperty("--rz", `${-38 + px * 40}deg`);
      rot.style.setProperty("--rx", `${58 - py * 24}deg`);
    });
  }
  $("#memoClose").focus({ preventScroll: true });
}

function closeMemo(updateUrl) {
  if (memo.hidden) return;
  memo.hidden = true;
  memo.innerHTML = "";
  memoId = null;
  document.documentElement.style.overflow = "";
  if (wafer) wafer.hold(false);
  if (updateUrl) {
    try { history.replaceState(null, "", location.pathname + location.search); } catch (e) {}
  }
  if (lastFocus && document.contains(lastFocus)) lastFocus.focus({ preventScroll: true });
}

/* ---------------------------------------------------------------- router */
const nav = $("#nav");

function route() {
  const h = decodeURIComponent(location.hash.slice(1));
  if (byId[h]) {
    openMemo(h);
    return;
  }
  closeMemo(false);
  onScroll();
}

/* ---------------------------------------------------------------- scroll: nav, parallax, wafer tilt */
let wafer = null;
const depthEls = $$("[data-depth]");
const heroEl = $(".hero");
let canvas = $("#wafer");
// Phones and tablets scroll on their own thread, so a parallax shift set from script lands a frame or two behind
// the finger and the wafer shakes. On touch screens the canvas rides the page as is and only its tilt follows the scroll.
const touch = matchMedia("(hover: none) and (pointer: coarse)");
function onScroll() {
  const y = window.scrollY;
  nav.classList.toggle("solid", y > 40);
  if (calm || motionPaused) return;
  const hh = heroEl.offsetHeight;
  if (y < hh * 1.2) {
    if (!touch.matches) canvas.style.transform = `translate3d(0,${(y * 0.38).toFixed(1)}px,0)`;
    else if (canvas.style.transform) canvas.style.transform = "";
    if (wafer) wafer.setScroll(Math.min(1, y / hh));
  }
  for (const el of depthEls) {
    const r = el.parentElement.getBoundingClientRect();
    if (r.bottom < -200 || r.top > innerHeight + 200) continue;
    const c = r.top + r.height / 2 - innerHeight / 2;
    el.style.transform = `translate3d(0,${(-c * parseFloat(el.dataset.depth)).toFixed(1)}px,0)`;
  }
}

/* ---------------------------------------------------------------- hero wafer
   WebGL first. If WebGL is blocked, software-only, lost, or too slow (common on managed
   work laptops with graphics acceleration off), it falls back to a Canvas 2D wafer. */
const LIT = Array.from({ length: 32 }, (_, i) => THESES[i] || null);
// Place the wafer in pixels inside the hero's stage (the part above the featured chips), then convert
// to the shader's units (offset from canvas center and camera distance, both in canvas heights).
function waferLayout(w, h) {
  const fw = $(".feat-wrap", heroEl), nav = $("#nav"), zm = zoom();
  const stageH = Math.max(320 * zm, h - (fw ? fw.offsetHeight : 0));
  const top = nav ? nav.offsetHeight : 72 * zm;
  let R, cx, cy;
  if (w > 700) {
    const gutter = parseFloat(getComputedStyle($(".hero-copy", heroEl)).paddingLeft) || 32 * zm;
    const right = Math.min(w, (w + 1240 * zm) / 2) - gutter;
    R = Math.min((stageH - top) * .44, w * .26, 520 * zm);
    cx = Math.min(right - R * .6, w - R * .8);
    cy = top + (stageH - top) * .45;
  } else {
    R = Math.min(w * .44, 200 * zm);
    cx = w * .56;
    cy = (parseFloat(getComputedStyle(heroEl).paddingTop) || 300) * .5;
  }
  const center = [(cx - w / 2) / h, (h / 2 - cy) / h];
  return { R, center, dist: 1.75 * h / R, cx, cy, w, h };
}

function makeGL(cv, st, force) {
  let gl = null;
  try { gl = cv.getContext("webgl", { antialias: false, alpha: false, powerPreference: "high-performance", failIfMajorPerformanceCaveat: !force }); } catch (e) {}
  if (!gl) return null;
  const vs = "attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}";
  const fs = `precision highp float;
uniform vec2 uRes;uniform float uTime;uniform vec2 uMouse;uniform float uScroll;uniform float uExpose;uniform vec2 uCenter;uniform float uDist;
uniform vec2 uDies[32];uniform vec3 uBins[32];
mat3 rx(float a){float c=cos(a),s=sin(a);return mat3(1.,0.,0.,0.,c,s,0.,-s,c);}
mat3 ry(float a){float c=cos(a),s=sin(a);return mat3(c,0.,-s,0.,1.,0.,s,0.,c);}
mat3 rz(float a){float c=cos(a),s=sin(a);return mat3(c,s,0.,-s,c,0.,0.,0.,1.);}
float h21(vec2 p){p=fract(p*vec2(233.34,851.73));p+=dot(p,p+23.45);return fract(p.x*p.y);}
vec3 env(vec3 r){
  vec3 b=mix(vec3(.02,.04,.07),vec3(.12,.27,.40),smoothstep(-.3,.9,r.y));
  float lamp=pow(max(dot(r,normalize(vec3(-.55,.65,.55))),0.),40.);
  float cool=pow(max(dot(r,normalize(vec3(.75,.15,.65))),0.),20.);
  return b+vec3(1.,.8,.64)*lamp*1.5+vec3(.25,.85,.85)*cool*.6;
}
void main(){
  vec2 uv=(gl_FragCoord.xy-.5*uRes)/uRes.y-uCenter;
  vec3 ro=vec3(0.,0.,uDist);
  vec3 rd=normalize(vec3(uv,-1.75));
  float tilt=mix(1.0,.3,uScroll)+uMouse.y*.14;
  float yaw=-.38+uMouse.x*.22;
  mat3 R=ry(yaw)*rx(-tilt)*rz(uTime*.03);
  vec3 ex=R*vec3(1.,0.,0.),ey=R*vec3(0.,1.,0.),n=R*vec3(0.,0.,1.);
  float d=length(uv);
  float dw=d*uDist/1.75;
  float land=smoothstep(.55,1.,uRes.x/uRes.y),glow=exp(-dw*dw*.162);
  // a deep night-blue backdrop, easing into the page ink lower down; wide screens add a faint teal halo behind the wafer
  vec3 col=mix(vec3(.024,.078,.14),vec3(.027,.063,.114),smoothstep(.4,.72,gl_FragCoord.y/uRes.y));
  col+=vec3(.04,.24,.30)*glow*.32*land;
  col+=vec3(.95,.66,.48)*.03*exp(-length(uv+uCenter-vec2(-.9,.55))*1.6)*land;
  vec2 gp=gl_FragCoord.xy/uRes.y*30.;
  col+=vec3(.5,.78,.95)*smoothstep(.08,0.,length(fract(gp)-.5))*.05*exp(-d*1.1)*mix(.35,1.,land);
  float dn=dot(rd,n);
  if(abs(dn)>1e-4){
    float tt=-dot(ro,n)/dn;
    float tb=(-.024-dot(ro,n))/dn;
    vec3 pt=ro+rd*tt;vec2 qt=vec2(dot(pt,ex),dot(pt,ey));
    vec3 pb=ro+rd*tb;vec2 qb=vec2(dot(pb,ex),dot(pb,ey));
    bool hitT=tt>0.&&length(qt)<1.&&length(qt-vec2(0.,-1.))>.03;
    bool hitB=tb>0.&&length(qb)<1.&&length(qb-vec2(0.,-1.))>.03;
    if(hitT){
      float r=length(qt);
      float c=abs(dn);
      vec3 E=env(reflect(rd,n));
      float fres=pow(1.-c,4.);
      vec3 si=vec3(.035,.05,.075)+E*.5;
      float ds=.086;
      vec2 g=qt/ds+.5;
      vec2 id=floor(g);vec2 f=fract(g);
      vec2 c0=(id-.5)*ds,c1=(id+.5)*ds;
      float mr=max(max(length(c0),length(vec2(c1.x,c0.y))),max(length(vec2(c0.x,c1.y)),length(c1)));
      float full=step(mr,.955);
      float inDie=step(.06,f.x)*step(f.x,.94)*step(.06,f.y)*step(f.y,.94);
      vec2 bid=floor(f*vec2(3.,4.));
      float hb=h21(bid+id*1.37);
      vec3 Lr=reflect(rd,n);
      float hue=dot(Lr,normalize(vec3(-.4,.6,.7)))*2.1+qt.x*.5-qt.y*.22+.05*hb+.03*h21(id);
      vec3 rb=vec3(.25,.56,.86)+vec3(.2,.3,.14)*cos(6.28318*(hue+vec3(0.,.16,.32)));
      float arr=step(.2,f.x)*step(f.x,.8)*step(.18,f.y)*step(f.y,.82);
      float lines=1.-.22*arr*step(.5,fract(f.y*28.));
      vec3 dieCol=mix(vec3(.10,.15,.21),rb,.58)*(.62+.3*hb)*lines+E*.3;
      float sx=(qt.x+qt.y*.35+1.25)/2.5;
      float exposed=smoothstep(uExpose,uExpose-.06,sx);
      vec3 surf=mix(si,dieCol,full*inDie*exposed);
      surf+=vec3(.35,.95,.88)*exp(-pow((sx-uExpose)*55.,2.))*step(uExpose,1.05)*.9;
      for(int i=0;i<32;i++){
        float m=step(abs(id.x-uDies[i].x)+abs(id.y-uDies[i].y),.5)*inDie*full;
        surf=mix(surf,uBins[i]*(.78+.22*sin(uTime*2.2+float(i)*1.7))+E*.12,m*.9*exposed);
      }
      surf+=smoothstep(.975,1.,r)*.3;
      surf+=E*fres*.8;
      col=surf;
    } else if(hitB){
      vec3 E=env(reflect(rd,n));
      col=vec3(.24,.32,.42)*(.45+.55*E.b);
    }
  }
  col*=1.-.3*smoothstep(.7,1.6,length(uv+uCenter));
  gl_FragColor=vec4(pow(col,vec3(.93)),1.);
}`;
  const sh = (type, src) => { const x = gl.createShader(type); gl.shaderSource(x, src); gl.compileShader(x); return gl.getShaderParameter(x, gl.COMPILE_STATUS) ? x : null; };
  const v = sh(gl.VERTEX_SHADER, vs), f = sh(gl.FRAGMENT_SHADER, fs);
  if (!v || !f) return null;
  const pr = gl.createProgram();
  gl.attachShader(pr, v); gl.attachShader(pr, f); gl.linkProgram(pr);
  if (!gl.getProgramParameter(pr, gl.LINK_STATUS)) return null;
  gl.useProgram(pr);
  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const loc = gl.getAttribLocation(pr, "p");
  gl.enableVertexAttribArray(loc);
  gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
  const U = name => gl.getUniformLocation(pr, name);
  const u = { res: U("uRes"), time: U("uTime"), mouse: U("uMouse"), scroll: U("uScroll"), expose: U("uExpose"), center: U("uCenter"), dist: U("uDist") };
  const hex3 = h => [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16) / 255);
  gl.uniform2fv(U("uDies"), new Float32Array(LIT.flatMap(t => (t ? t.die : [99, 99]))));
  gl.uniform3fv(U("uBins"), new Float32Array(LIT.flatMap(t => (t ? hex3(BINS[t.stance].hex) : [0, 0, 0]))));
  let W = 1, H = 1, L = null;
  return {
    kind: "gl",
    resize(w, h, sc) {
      const nW = Math.max(1, Math.round(w * sc)), nH = Math.max(1, Math.round(h * sc));
      if (nW !== W || nH !== H) { W = nW; H = nH; cv.width = W; cv.height = H; gl.viewport(0, 0, W, H); }
      L = waferLayout(w, h);
    },
    draw(t) {
      gl.uniform2f(u.res, W, H);
      gl.uniform1f(u.time, t);
      gl.uniform2f(u.mouse, st.mouse[0], st.mouse[1]);
      gl.uniform1f(u.scroll, calm ? 0 : st.scroll);
      gl.uniform1f(u.expose, calm ? 1.3 : Math.min(1.3, 0.05 + t / 2.6));
      gl.uniform2f(u.center, L.center[0], L.center[1]);
      gl.uniform1f(u.dist, L.dist);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    }
  };
}

function make2D(cv, st) {
  let ctx = null;
  try { ctx = cv.getContext("2d", { alpha: false }); } catch (e) {}
  if (!ctx) return null;
  const ds = 1 / 11.63, N = 12, dies = [];
  for (let i = -N; i <= N; i++) for (let j = -N; j <= N; j++) {
    const x0 = (i - .5) * ds, x1 = (i + .5) * ds, y0 = (j - .5) * ds, y1 = (j + .5) * ds;
    if (Math.max(Math.hypot(x0, y0), Math.hypot(x1, y0), Math.hypot(x0, y1), Math.hypot(x1, y1)) > .955) continue;
    const k = LIT.findIndex(t => t && t.die[0] === i && t.die[1] === j);
    const hs = Math.abs(Math.sin(i * 127.1 + j * 311.7) * 43758.5453) % 1;
    dies.push({ x: i * ds, y: -j * ds, sx: (i * ds + j * ds * .35 + 1.25) / 2.5, h: hs, lit: k >= 0 ? BINS[LIT[k].stance].hex : null, k });
  }
  const TAU = Math.PI * 2, sz = ds * .88;
  let sc = 1, L = null;
  const disc = () => { ctx.beginPath(); ctx.arc(0, 0, 1, 0, TAU); };
  return {
    kind: "2d",
    resize(w, h, s) {
      sc = s;
      const nW = Math.max(1, Math.round(w * s)), nH = Math.max(1, Math.round(h * s));
      if (cv.width !== nW || cv.height !== nH) { cv.width = nW; cv.height = nH; }
      L = waferLayout(w, h);
    },
    draw(t) {
      const { cx, cy, R, w, h } = L;
      ctx.setTransform(sc, 0, 0, sc, 0, 0);
      ctx.fillStyle = "#07101d";
      ctx.fillRect(0, 0, w, h);
      const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, R * 1.9);
      glow.addColorStop(0, "rgba(30,110,150,.5)");
      glow.addColorStop(1, "rgba(7,16,29,0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, w, h);
      const tilt = (1.0 - .7 * (calm ? 0 : st.scroll)) + st.mouse[1] * .14;
      const yaw = -.38 + st.mouse[0] * .22, sq = Math.max(.12, Math.cos(tilt)), spin = t * .03;
      const expose = calm ? 2 : Math.min(2, .05 + t / 2.6);
      const base = (dy = 0) => { ctx.setTransform(sc, 0, 0, sc, 0, 0); ctx.translate(cx, cy + dy); ctx.rotate(yaw * .5); ctx.scale(R, R * sq); };
      base(R * .05 * Math.sin(tilt)); disc(); ctx.fillStyle = "#1a2c40"; ctx.fill();
      base();
      const surf = ctx.createLinearGradient(-1, -1, 1, 1);
      surf.addColorStop(0, "#1d3a57"); surf.addColorStop(.5, "#0f2236"); surf.addColorStop(1, "#173550");
      disc(); ctx.fillStyle = surf; ctx.fill();
      ctx.rotate(spin);
      const cs = Math.cos(spin), sn = Math.sin(spin), m = st.mouse[0];
      for (const d of dies) {
        if (d.sx > expose) continue;
        if (d.lit) { ctx.globalAlpha = .82 + .18 * Math.sin(t * 2.2 + d.k * 1.7); ctx.fillStyle = d.lit; }
        else {
          const wx = d.x * cs - d.y * sn, wy = d.x * sn + d.y * cs;
          const hue = 200 + 30 * Math.sin(wx * 2.1 - wy * 1.3 + m * .8 + d.h * .5) + 12 * wy;
          ctx.globalAlpha = 1;
          ctx.fillStyle = `hsl(${hue.toFixed(0)},58%,${(36 + 18 * d.h).toFixed(0)}%)`;
        }
        ctx.fillRect(d.x - sz / 2, d.y - sz / 2, sz, sz);
      }
      ctx.globalAlpha = 1;
      ctx.beginPath(); ctx.arc(0, 1, .035, 0, TAU); ctx.fillStyle = "#07101d"; ctx.fill();
      base();
      ctx.lineWidth = .012; ctx.strokeStyle = "rgba(206,226,245,.55)"; disc(); ctx.stroke();
      const sheen = ctx.createLinearGradient(-1, -.5, .7, .6);
      sheen.addColorStop(0, "rgba(255,255,255,0)"); sheen.addColorStop(.45, "rgba(255,255,255,.1)"); sheen.addColorStop(.62, "rgba(255,255,255,0)");
      disc(); ctx.fillStyle = sheen; ctx.fill();
    }
  };
}

function initWafer() {
  const st = { mouse: [0, 0], target: [0, 0], scroll: 0, scrollTo: 0 };
  const t0 = performance.now();
  const q = location.search;
  const fresh = () => { const c = canvas.cloneNode(false); canvas.replaceWith(c); canvas = c; return c; };
  let r = /[?&]gl=0\b/.test(q) ? null : makeGL(canvas, st, /[?&]gl=1\b/.test(q));
  if (!r) r = make2D(fresh(), st);
  if (!r) { heroEl.classList.add("no-gl"); return null; }
  heroEl.dataset.renderer = r.kind;
  let running = false, raf = 0, visible = false, held = false, last = 0, frames = 0, slow = 0;
  const size = () => {
    const w = canvas.clientWidth || innerWidth, h = canvas.clientHeight || innerHeight;
    let s = Math.min(window.devicePixelRatio || 1, r.kind === "gl" ? 1.5 : 2);
    const cap = r.kind === "gl" ? 1.6e6 : 4e6;
    if (w * h * s * s > cap) s = Math.sqrt(cap / (w * h));
    r.resize(w, h, s);
  };
  const frame = now => {
    st.mouse[0] += (st.target[0] - st.mouse[0]) * .05;
    st.mouse[1] += (st.target[1] - st.mouse[1]) * .05;
    st.scroll += (st.scrollTo - st.scroll) * .3;
    r.draw((now - t0) / 1000);
  };
  const sync = () => {
    if (!r) return;
    const want = visible && !held && !motionPaused;
    if (want && !running) { running = true; last = 0; raf = requestAnimationFrame(loop); }
    else if (!want && running) { running = false; cancelAnimationFrame(raf); }
    if (!running) frame(performance.now());
  };
  const fallback = () => {
    running = false;
    cancelAnimationFrame(raf);
    r = make2D(fresh(), st);
    if (!r) { heroEl.classList.add("no-gl"); return; }
    heroEl.dataset.renderer = "2d";
    size();
    sync();
  };
  function loop(now) {
    if (!running || !r) return;
    raf = requestAnimationFrame(loop);
    if (last && now - last < 10) return;
    if (r.kind === "gl" && last) {
      frames++;
      if (frames > 10 && now - last > 50) slow++;
      if (frames === 70 && slow > 30) { fallback(); return; }
    }
    last = now;
    frame(now);
  }
  addEventListener("resize", () => { if (!r) return; size(); if (!running) frame(performance.now()); });
  if (window.ResizeObserver) new ResizeObserver(() => { if (!r) return; size(); if (!running) frame(performance.now()); }).observe(heroEl);
  addEventListener("pointermove", e => { st.target[0] = e.clientX / innerWidth * 2 - 1; st.target[1] = -(e.clientY / innerHeight * 2 - 1); }, { passive: true });
  if (r.kind === "gl") canvas.addEventListener("webglcontextlost", e => { e.preventDefault(); fallback(); });
  size();
  frame(performance.now());
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; sync(); }).observe(heroEl);
  return { setScroll(p) { st.scrollTo = p; if (!running) st.scroll = p; }, hold(v) { held = v; sync(); }, sync };
}

/* ---------------------------------------------------------------- Echo test line */
const ECHO_CLASSICS = [
  { pose: "wave", n: "Wave", d: "Hi, I’m Echo!" },
  { pose: "idle", n: "Idle", d: "Set your echo" },
  { pose: "swim", n: "Swim", d: "Finding the overlap" },
  { pose: "sleep", n: "Snooze", d: "Quiet means quiet" },
  { pose: "cheer", n: "Cheer", d: "It’s a tempo!" },
  { pose: "run", n: "Run", d: "Free now" },
  { pose: "dance", n: "Dance", d: "That happened" }
];
const ECHO_CREW = [
  { pose: "idle", acc: "wafer", n: "Wafer", d: "Hosting the theses map", go: "#theses", goText: "See the wafer map" },
  { pose: "idle", acc: "memo", n: "Analyst", d: "Grading the scorecard", go: "#scorecard", goText: "See the scorecard" },
  { pose: "swim", acc: "helmet", n: "Astronaut", d: "For thinking big" }
];

function buildLine() {
  const stage = $("#lineStage"), track = $("#lineTrack"), readout = $("#lineReadout"), count = $("#lineCount");
  if (!stage) return;

  // arrival order: Wave says hi, then thesis Echoes alternate with the classics and the site crew
  const thesis = THESES.map(t => ({ ...t.echo, n: t.echo.name, t }));
  const classic = ECHO_CLASSICS.map(p => ({ ...p, kind: "classic" }));
  const crew = ECHO_CREW.map(p => ({ ...p, kind: "crew" }));
  const others = [...classic.slice(1), ...crew];
  const cast = [classic[0]];
  thesis.forEach((p, i) => { cast.push(p); if (others[i]) cast.push(others[i]); });
  others.slice(thesis.length).forEach(p => cast.push(p));
  const N = cast.length;

  // the belt runs left to right, so the DOM is in reverse arrival order
  const order = cast.map((_, i) => N - 1 - i);
  const tag = p => p.t ? `<span class="bin" style="--bin:${BINS[p.t.stance].css}">${BINS[p.t.stance].label}</span>`
    : p.kind === "classic" ? `<span class="bin" style="--bin:var(--violet)">EchoTempo app</span>` : `<span class="bin" style="--bin:var(--dim)">Site crew</span>`;
  const item = (p, k, ghost) => {
    const inner = `<span class="li-echo">${echo(p)}</span><span class="li-tray"></span><span class="li-tag"><b>${p.n}</b>${tag(p)}</span>`;
    const hit = p.t
      ? `<a class="li-hit" href="#${p.t.id}" draggable="false"${ghost ? ` tabindex="-1"` : ""} aria-label="${p.n} Echo: open “${p.t.short}”">${inner}</a>`
      : `<div class="li-hit">${inner}</div>`;
    return `<li class="li-item${p.t ? " is-link" : ""}" data-k="${k}">${hit}</li>`;
  };
  const set = ghost => `<ol class="li-set"${ghost ? ` aria-hidden="true"` : ` aria-label="Echoes on the test line"`}>${order.map(i => item(cast[i], i, ghost)).join("")}</ol>`;
  track.innerHTML = set(true) + set(false);
  const byK = k => $$(`.li-item[data-k="${k}"]`, track);

  const say = (k, how) => {
    const p = cast[k];
    const head = `<p class="lr-k">${how} · Unit ${String(k + 1).padStart(2, "0")} of ${N}</p><p class="lr-n">${p.n} Echo</p>`;
    let body, go = "";
    if (p.t) {
      body = `<p class="lr-d">${tag(p)} <span>Die ${dieLabel(p.t.die)} · ${p.t.short}</span></p>`;
      go = `<a class="lr-go" href="#${p.t.id}">Open the thesis →</a>`;
    } else {
      body = `<p class="lr-d">${tag(p)} <span>${p.d}</span></p>`;
      if (p.go) go = `<a class="lr-go" href="${p.go}">${p.goText} →</a>`;
      else if (p.kind === "classic") go = `<a class="lr-go" href="${CONFIG.echotempoSite}" target="_blank" rel="noopener">Meet EchoTempo →</a>`;
    }
    readout.innerHTML = head + body + go;
    count.textContent = `${k + 1} / ${N}`;
  };

  let sp = 0, W = 0, S = 0, x = 0, v = 0, last = 0, raf = 0;
  let real = false, visible = false, hover = false, focusK = -1, drag = null, glideTo = null, under = -1, shown = -1, suppress = false;
  const mod = (a, m) => ((a % m) + m) % m;
  const measure = () => {
    const first = $(".li-item", track);
    const w = first ? first.getBoundingClientRect().width : 0;
    real = w > 0 && stage.clientWidth > 0;
    sp = w || 170; W = sp * N; S = stage.clientWidth || innerWidth;
  };
  // x places the arriving set; the DOM index of arrival k is N-1-k
  const centerOf = k => mod(x + (N - 1 - k) * sp + sp / 2 - S / 2 + W / 2, W) - W / 2 + S / 2;
  const xFor = k => mod(S / 2 - (N - 1 - k) * sp - sp / 2, W);
  const apply = () => {
    track.style.transform = `translate3d(${(mod(x, W) - W).toFixed(1)}px,0,0)`;
    stage.style.setProperty("--bx", `${mod(x, 40 * zoom()).toFixed(1)}px`);
  };
  const probe = () => {
    let best = -1, bd = Infinity;
    for (let k = 0; k < N; k++) { const d = Math.abs(centerOf(k) - S / 2); if (d < bd) { bd = d; best = k; } }
    const k = bd < sp * .3 ? best : -1;
    if (k !== under) {
      if (under >= 0) byK(under).forEach(el => el.classList.remove("under"));
      under = k;
      if (k >= 0) byK(k).forEach(el => el.classList.add("under"));
      stage.classList.toggle("scanning", k >= 0);
      if (k >= 0 && !hover && focusK < 0 && k !== shown) { shown = k; say(k, "Probing"); }
    }
  };
  const still = () => calm || motionPaused;
  const tick = now => {
    raf = 0;
    const dt = Math.min(.1, (now - (last || now)) / 1000); last = now;
    if (drag) {
      // position is set directly by the pointer
    } else if (glideTo !== null) {
      const diff = mod(glideTo - x + W / 2, W) - W / 2;
      x += diff * Math.min(1, dt * 7);
      if (Math.abs(diff) < .5) { x = glideTo; glideTo = null; v = 0; }
    } else {
      const zm = zoom(), target = still() || hover || focusK >= 0 ? 0 : (S < 700 * zm ? 34 : 46) * zm;
      v += (target - v) * Math.min(1, dt * (Math.abs(v) > Math.abs(target) ? 2.2 : 1.2));
      x += v * dt;
    }
    x = mod(x, W);
    apply(); probe();
    if (visible) raf = requestAnimationFrame(tick);
  };
  const wake = () => { if (visible && !raf) { last = 0; raf = requestAnimationFrame(tick); } };
  const goTo = k => { glideTo = xFor(mod(k, N)); shown = -1; wake(); };

  // pointer: hover pauses, drag scrubs, a flick keeps rolling
  stage.addEventListener("pointerenter", e => { if (e.pointerType === "mouse") hover = true; });
  stage.addEventListener("pointerleave", e => { if (e.pointerType === "mouse") { hover = false; shown = -1; } });
  stage.addEventListener("pointerover", e => {
    const li = e.target.closest(".li-item");
    if (li && e.pointerType === "mouse" && !drag) { $$(".li-item.hot", track).forEach(el => el.classList.remove("hot")); byK(li.dataset.k).forEach(el => el.classList.add("hot")); shown = +li.dataset.k; say(+li.dataset.k, "Inspecting"); }
  });
  stage.addEventListener("pointerout", e => {
    const li = e.target.closest(".li-item");
    if (li && !li.contains(e.relatedTarget)) byK(li.dataset.k).forEach(el => el.classList.remove("hot"));
  });
  stage.addEventListener("pointerdown", e => {
    if (e.button !== 0) return;
    drag = { x0: e.clientX, from: x, moved: 0, lx: e.clientX, lt: performance.now(), vx: 0, id: e.pointerId };
    glideTo = null;
  });
  addEventListener("pointermove", e => {
    if (!drag || e.pointerId !== drag.id) return;
    const dx = e.clientX - drag.x0;
    if (!drag.moved && Math.abs(dx) > 6) { drag.moved = 1; stage.classList.add("dragging"); try { stage.setPointerCapture(e.pointerId); } catch (_) {} }
    if (drag.moved) {
      const now = performance.now(), dt = Math.max(1, now - drag.lt);
      drag.vx = drag.vx * .6 + ((e.clientX - drag.lx) / dt * 1000) * .4;
      drag.lx = e.clientX; drag.lt = now;
      x = mod(drag.from + dx, W); wake();
    }
  });
  const release = e => {
    if (!drag || (e && e.pointerId !== drag.id)) return;
    if (drag.moved) { suppress = true; v = Math.max(-1600 * zoom(), Math.min(1600 * zoom(), drag.vx)); setTimeout(() => (suppress = false), 0); }
    stage.classList.remove("dragging");
    drag = null; wake();
  };
  addEventListener("pointerup", release);
  addEventListener("pointercancel", release);
  stage.addEventListener("click", e => { if (suppress) { e.preventDefault(); e.stopPropagation(); suppress = false; } }, true);
  stage.addEventListener("dragstart", e => e.preventDefault());

  // keyboard: focusing a thesis Echo parks it under the probe
  stage.addEventListener("focusin", e => {
    const li = e.target.closest(".li-item"); if (!li) return;
    focusK = +li.dataset.k; byK(focusK).forEach(el => el.classList.add("focus")); say(focusK, "Selected"); goTo(focusK);
  });
  stage.addEventListener("focusout", e => {
    const li = e.target.closest(".li-item"); if (li) byK(li.dataset.k).forEach(el => el.classList.remove("focus"));
    focusK = -1; shown = -1; wake();
  });
  const current = () => under >= 0 ? under : (shown >= 0 ? shown : 0);
  $("#lineNext").addEventListener("click", () => { const k = mod(current() + 1, N); say(k, "Selected"); shown = k; goTo(k); });
  $("#lineBack").addEventListener("click", () => { const k = mod(current() - 1, N); say(k, "Selected"); shown = k; goTo(k); });

  const layout = () => { const k = current(); measure(); x = xFor(k); apply(); probe(); };
  addEventListener("resize", () => { layout(); wake(); });
  new IntersectionObserver(([e]) => {
    visible = e.isIntersecting;
    if (visible && (!real || stage.clientWidth !== S)) layout();
    wake();
  }, { rootMargin: "120px" }).observe(stage);
  measure(); x = xFor(0); apply(); say(0, "Probing"); shown = 0; probe();
  buildLine.wake = wake;
}

/* ---------------------------------------------------------------- motion toggle */
function setMotion(paused, save) {
  motionPaused = paused;
  document.documentElement.classList.toggle("paused", paused);
  $$("[data-motion]").forEach(b => (b.textContent = paused ? "Play motion" : "Pause motion"));
  if (save) { try { localStorage.setItem("motion", paused ? "paused" : "on"); } catch (e) {} }
  if (wafer) wafer.sync();
  $$("svg", memo).forEach(s => (paused || calm ? freezeSvg(s) : s.unpauseAnimations && s.unpauseAnimations()));
  if (buildLine.wake) buildLine.wake();
}

/* ---------------------------------------------------------------- boot */
renderHome();
buildMap();
buildLine();
mountEchoes();
wafer = initWafer();
$$("[data-motion]").forEach(b => b.addEventListener("click", () => setMotion(!motionPaused, true)));
setMotion(motionPaused, false);
let scrollQueued = false;
addEventListener("scroll", () => { if (scrollQueued) return; scrollQueued = true; requestAnimationFrame(() => { scrollQueued = false; onScroll(); }); }, { passive: true });
addEventListener("hashchange", route);
route();
})();
