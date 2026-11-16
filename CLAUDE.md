# Web Vegamar (web-vegamar) — notes for Claude

One-page static site (HTML/CSS/JS, no build step) for **Verónica Garijo — "Vegamar" / Espacio Ser**: spiritual
services (reiki, womb cleansing/healing, soul reading), meditations, workshops, programmes, her book.
Made for Cris (same owner as `web-chacinas-prime`): explain in **Spanish**, plainly.
Code and comments in **English**, page text in Spanish. Commit locally; **push only when she asks**: every push
to main publishes the web (`.github/workflows/pages.yml`, GitHub Pages via Actions, only index.html, css, js, fonts, img). Don't invent business data (prices, dates, bio): ask.

- Sources (2026-11-16): Vero's link page (claude.ai artifact QgMT7tBABfAYv1xCmQv9Pq: services, prices, WhatsApp
  message link 4CHVMTHTK6S3P1, Amazon link of «Reconociéndome», WhatsApp group of the free class) and her public
  Instagram @vegamar__ (name "Verónica Garijo | Amor, Calma y Gozo en lo simple", bio "Te ayudo a dejar de
  sobrevivir tu vida y empezar a gozártela", "21 NOV - clase gratuita"). The "Sobre mí" paragraph and the short
  service descriptions are drafts written by Claude: to be checked by Vero.
- Files: `index.html` (all content), `css/estilo.css` (palette in `:root`: cream, blush, lavender, plum, gold),
  `css/fonts.css` + `fonts/` (Fraunces, Work Sans, local), `js/main.js` (WhatsApp links from `data-wa`, phone menu,
  sparkles from `data-sparkles`, hides `.event` after `data-until`), `img/favicon.svg` (sun mark).
- Strict Content-Security-Policy meta: no inline scripts or `style=""` attributes; no third-party requests.
- Style: same configs as web-chacinas-prime (`.prettierrc.json`, `.stylelintrc.json`, `.htmlvalidate.json`). No
  node_modules here: run the tools from `..\web-chacinas-prime` with absolute paths (npx html-validate / stylelint /
  prettier). Check with Playwright (`channel="msedge"`) at 1366 px and 390 px.
- Published since 2026-11-16: public repo github.com/cristttina19/vegamar → https://cristttina19.github.io/vegamar/
