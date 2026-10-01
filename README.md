# andrew-ngai.github.io

Andrew Ngai's personal site: short, sourced theses on AI's physical layer, a scorecard for *Situational Awareness*, and a page for Pulse. Plain HTML, no build step.

## Put it online (free, about 5 minutes)

1. Sign in to GitHub as **Andrew-Ngai** and create a new **public** repository named exactly `andrew-ngai.github.io`.
2. On the empty repo page, click **uploading an existing file**. Drag in everything from this folder: `index.html`, `404.html`, `og.png`, `README.md`, and the `fonts` and `img` folders. Click **Commit changes**.
3. Open **Settings → Pages**. Under *Build and deployment*, pick **Deploy from a branch**, branch **main**, folder **/ (root)**, then **Save**.
4. After a minute or two the site is live at **https://andrew-ngai.github.io/**.

If you use a different repo name, the site lives at `https://andrew-ngai.github.io/<repo-name>/`. In that case, update the two lines in `index.html` that start with `<meta property="og:url"` and `<meta property="og:image"` so link previews still work.

## Add your contact details

Open `index.html` (you can edit it right on GitHub with the pencil icon) and search for `const CONFIG`. Fill in:

```js
email: "you@example.com",
linkedin: "https://www.linkedin.com/in/your-handle/",
```

Leave a field as `""` to hide that button.

## Add or edit a thesis

In `index.html`, search for `const THESES`. Each thesis is one block with:

- `id`: the link name (`yoursite/#id` opens it directly)
- `die`: its spot on the wafer map, e.g. `[2, -4]` (keep both numbers between −7 and 7 so it lands on the wafer)
- `stance`: `agree`, `build`, `push` or `original`
- `title`, `hook`, `ref` (who you're building on, with a link), `signal`, three `takes`, `bet`, `wrong`, `receipts`
- `viz`: which visual to show (`automate`, `agent`, `ooms`, `molecules`, `fleet`, `builders`, `moat`, `memory`, `heat`, `screen`)
- `pip`: Pip's outfit for this thesis: a pose (`idle`, `wave`, `cheer`, `run`, `dance`, `swim`, `sleep`, `float`), an outfit (`flask`, `camper`, `rack`, `hardhat`, `captain`, `chute`, `moat`, `hbm`, `thermo`, `hourglass`, `wafer`, `memo`, `helmet`) and a `name`. It appears on the wafer when the thesis is hovered, at the end of the thesis, and in the Pulse page's Pip parade.

The two dashed "in probe" dies live in `const PROBES`. Move one into `THESES` when it's ready.

## Notes

- Facts are current as of September 30, 2026. Each thesis links its sources.
- Fonts: Big Shoulders and Newsreader load from Google Fonts. Inter (Pulse's font) is bundled in `fonts/` under the SIL Open Font License.
- The Pulse screenshots in `img/` and Pip come from the Pulse website.
