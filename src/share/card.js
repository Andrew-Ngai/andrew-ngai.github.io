/* ---------------------------------------------------------------- share cards (only in share.py's render, never on the site) */
// One 1200 x 630 card per thesis: its headline, its bin and its die lit on the wafer, with its Echo standing on it.
window.__cards = {
  list: () => THESES.map(t => ({ id: t.id, title: plain(t.title), hook: plain(t.hook), die: dieLabel(t.die), bin: BINS[t.stance].label, layer: layerName(t.layer) })),
  show(id) {
    const t = byId[id], b = BINS[t.stance], ds = 24;
    document.documentElement.style.setProperty("--u", "1px");
    const wafer = (this.wafer = this.wafer || $("#wmap").cloneNode(true)), mark = (this.mark = this.mark || $(".mark svg").outerHTML);
    wafer.removeAttribute("id");
    $$(".wm-hit, .wm-field, .wm-isle", wafer).forEach(el => el.classList.remove("on", "lit", "dim"));
    $$(".wm-hit", wafer).forEach(a => a.classList.add(a.dataset.id === id ? "lit" : "dim"));
    $$(".wm-field, .wm-isle", wafer).forEach(g => g.classList.toggle("on", g.dataset.layer === t.layer));
    const pr = $("#probe", wafer);
    pr.style.transform = `translate(${t.die[0] * ds}px,${-t.die[1] * ds}px)`;
    pr.style.opacity = "1";
    const stage = document.createElement("div");
    stage.className = "shc";
    stage.style.cssText = `--bin:${b.css};--lc:${ISLE[t.layer][1]}`;
    stage.innerHTML = `<div class="shc-wafer"></div><div class="shc-scrim"></div>
      <div class="shc-mark">${mark}<span>Andrew Ngai</span></div>
      <div class="shc-meta"><span>Die ${dieLabel(t.die)}</span><span class="shc-bin"><i></i>${b.label}</span><span class="shc-layer">${layerName(t.layer)}</span></div>
      <div class="shc-copy"><h1 class="shc-h">${sentences(t.h2 || t.title)}</h1><p class="shc-hook">${t.hook}</p></div>
      <div class="shc-foot"><span>andrew-ngai.github.io</span><span class="shc-wrong">Ends with how I’d be wrong</span></div>
      <div class="shc-echo">${echo(t.echo)}</div>`;
    $(".shc-wafer", stage).appendChild(wafer);
    document.body.replaceChildren(stage);
    document.body.className = "shc-body";
    // Echo stands on its die, as it does on the site
    const r = $(`.wm-hit[data-id="${id}"] rect`, wafer).getBoundingClientRect(), e = $(".shc-echo", stage), w = e.offsetWidth;
    e.style.left = `${r.left + r.width / 2 - w / 2}px`;
    e.style.top = `${r.top + r.height * .1 - w * 138 / 132 * .96}px`;
    return { title: plain(t.title), hook: plain(t.hook) };
  }
};
