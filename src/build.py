"""Build index.html and monitor/index.html from the files in src/.

Run from anywhere: python3 src/build.py
The Buildout Monitor reads monitor/data.json when the page loads, so data updates need no build."""
import pathlib, re

SRC = pathlib.Path(__file__).resolve().parent
OUT = SRC.parent


def strip_css(src):
    out = re.sub(r"/\*.*?\*/", "", src, flags=re.S)
    out = "\n".join(l.rstrip() for l in out.split("\n"))
    return re.sub(r"\n{2,}", "\n", out).strip() + "\n"


def strip_js(src):
    """Drop whole-line // and /* */ comments, never inside a template literal."""
    out, in_block, in_tpl = [], False, False
    for line in src.split("\n"):
        s = line.strip()
        if in_block:
            if "*/" in line:
                in_block = False
            continue
        if not in_tpl:
            if s.startswith("//"):
                continue
            if s.startswith("/*"):
                if "*/" not in s[2:]:
                    in_block = True
                continue
        ticks = len(re.findall(r"(?<!\\)`", line))
        if ticks % 2:
            in_tpl = not in_tpl
        out.append(line.rstrip())
    return re.sub(r"\n{2,}", "\n", "\n".join(out)).strip() + "\n"


css = strip_css((SRC / "style.css").read_text())
js = strip_js((SRC / "app.js").read_text())
body = (SRC / "body.html").read_text()
head = (SRC / "head.html").read_text()
head_tail = (SRC / "head-tail.html").read_text()

index = f"{head}<style>\n{css}\n</style>{head_tail}{body}\n<script>\n{js}\n</script>\n</body>\n</html>\n"
(OUT / "index.html").write_text(index)
print("built", (OUT / "index.html").stat().st_size, "bytes")

# Buildout Monitor page (its numbers live in monitor/data.json)
MON = SRC / "monitor"
mout = OUT / "monitor"
mout.mkdir(exist_ok=True)
us = (MON / "us.json").read_text().strip()
mjs = strip_js((MON / "monitor.js").read_text()).replace("/*__US__*/null", us)
mcss = strip_css((MON / "monitor.css").read_text())
page = (MON / "page.html").read_text().replace("/*__CSS__*/", mcss).replace("/*__JS__*/", mjs)
(mout / "index.html").write_text(page)
print("built monitor", (mout / "index.html").stat().st_size, "bytes")
