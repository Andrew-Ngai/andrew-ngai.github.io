# andrew-ngai.github.io

Source for [andrew-ngai.github.io](https://andrew-ngai.github.io/): short, sourced theses on AI's physical layer (power, chips and labs), a scorecard for Leopold Aschenbrenner's *Situational Awareness*, and a page for [Pulse](https://pulsefriends.github.io/pulse-app.github.io/), the app I'm building.

Each thesis opens as a three-slide memo and links its sources.

`monitor/` is the Buildout Monitor: five sourced gauges on the AI buildout (capex, Nvidia data center revenue, data center construction, gas turbine backlogs and power deals, GPU rental prices). Its numbers live in `monitor/data.json`, updated monthly.

The pages are built from `src/`: edit the files there and run `python3 src/build.py`, which writes `index.html` and `monitor/index.html`. The monitor reads `monitor/data.json` in the browser, so updating its numbers needs no build.

Fonts: Big Shoulders and Newsreader via Google Fonts. Inter is bundled under the SIL Open Font License (`fonts/Inter-LICENSE.txt`).

© Andrew Ngai
