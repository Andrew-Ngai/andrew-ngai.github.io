"""Give every thesis its own link, with its own preview card.

andrew-ngai.github.io/t/<id>/ carries that thesis's title, hook and card image, so pasting it into LinkedIn, iMessage
or Slack shows the thesis rather than the home page. People who click it land on the thesis itself.

Run after build.py whenever a thesis is added or its headline changes:
    python3 src/share.py
It renders the cards in Google Chrome through Playwright for Python (pip install playwright)."""
import html, json, os, pathlib, re, shutil, tempfile

from playwright.sync_api import sync_playwright

SRC = pathlib.Path(__file__).resolve().parent
OUT = SRC.parent
SITE = "https://andrew-ngai.github.io"
CHROME = os.environ.get("CHROME", "/usr/bin/google-chrome")

head = (SRC / "head.html").read_text()
icon = re.search(r'<link rel="icon" href="[^"]+">', head).group(0)

PAGE = """<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title} | Andrew Ngai</title>
<meta name="description" content="{hook}">
<meta name="theme-color" content="#07101d">
<meta property="og:type" content="article">
<meta property="og:site_name" content="Andrew Ngai">
<meta property="og:title" content="{title}">
<meta property="og:description" content="{hook}">
<meta property="og:url" content="{site}/t/{id}/">
<meta property="og:image" content="{site}/t/{id}/card.jpg">
<meta property="og:image:type" content="image/jpeg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="{alt}">
<meta name="twitter:card" content="summary_large_image">
{icon}
<script>
// Readers go straight to the thesis. Link previewers (LinkedInBot, Slackbot, iMessage, which sends
// facebookexternalhit, WhatsApp) name themselves in the user agent, and stay to read the card.
if (!/bot|crawl|spider|preview|facebookexternalhit|embedly|whatsapp|vkshare|google/i.test(navigator.userAgent)) location.replace("/#{id}");
</script>
<style>
:root{{color-scheme:dark}}
body{{margin:0;min-height:100vh;display:grid;place-items:center;background:#07101d;color:#eef4f8;font:19px/1.45 Georgia,serif;padding:24px;box-sizing:border-box}}
main{{max-width:34rem}}
p{{color:#9fb3c4}}
a{{color:#3fd6c8}}
</style>
</head>
<body>
<main>
<p>Andrew Ngai · Die {die} · {bin}</p>
<h1>{title}</h1>
<p>{hook}</p>
<p><a href="/#{id}">Read the thesis</a></p>
</main>
</body>
</html>
"""

index = (OUT / "index.html").read_text()
tail = "})();\n\n</script>"
assert tail in index, "run build.py first"
card_js, card_css = (SRC / "share" / "card.js").read_text(), (SRC / "share" / "card.css").read_text()
page = index.replace(tail, card_js + tail).replace("</head>", f"<style>\n{card_css}</style>\n</head>", 1)

with tempfile.TemporaryDirectory() as tmp, sync_playwright() as pw:
    src = pathlib.Path(tmp) / "cards.html"
    src.write_text(page)
    browser = pw.chromium.launch(executable_path=CHROME if os.path.exists(CHROME) else None)
    tab = browser.new_page(viewport={"width": 1200, "height": 630}, device_scale_factor=1)
    tab.goto(src.as_uri())
    tab.evaluate("document.fonts.ready")
    tab.wait_for_timeout(600)
    theses = tab.evaluate("__cards.list()")
    (OUT / "t").mkdir(exist_ok=True)
    for t in theses:
        tab.evaluate("id => __cards.show(id)", t["id"])
        tab.wait_for_timeout(120)
        folder = OUT / "t" / t["id"]
        folder.mkdir(exist_ok=True)
        tab.screenshot(path=str(folder / "card.jpg"), type="jpeg", quality=90)
        esc = {k: html.escape(str(v), quote=True) for k, v in t.items()}
        alt = html.escape(f"{t['title']} Die {t['die']}, {t['bin']}, on Andrew Ngai's wafer of theses.", quote=True)
        (folder / "index.html").write_text(PAGE.format(site=SITE, icon=icon, alt=alt, **esc))
    browser.close()

# a thesis that was taken down loses its page too
keep = {t["id"] for t in theses}
for d in (OUT / "t").iterdir():
    if d.is_dir() and d.name not in keep and (d / "card.jpg").exists():
        shutil.rmtree(d)
print("wrote", len(theses), "share pages to t/")
