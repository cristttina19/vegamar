# Web Vegamar (web-vegamar) — notes for Claude

One-page static site (HTML/CSS/JS, no build step) for **Verónica Garijo — "Vegamar" / Espacio Ser**: spiritual
services (reiki, womb cleansing/healing, soul reading), meditations, workshops, programmes, her book.
Made for Cris (same owner as `web-chacinas-prime`): explain in **Spanish**, plainly.
Code and comments in **English**, page text in Spanish. Commit locally; **push only when she asks**: every push
to main publishes the web (`.github/workflows/pages.yml`, GitHub Pages via Actions, everything except git files, *.md and lint configs). Don't invent business data (prices, dates, bio): ask.

- Sources (2026-11-16): Vero's link page (claude.ai artifact QgMT7tBABfAYv1xCmQv9Pq: services, prices, WhatsApp
  message link 4CHVMTHTK6S3P1, Amazon link of «Reconociéndome», WhatsApp group of the free class) and her public
  Instagram @vegamar__ (name "Verónica Garijo | Amor, Calma y Gozo en lo simple", bio "Te ayudo a dejar de
  sobrevivir tu vida y empezar a gozártela", "21 NOV - clase gratuita"). The "Sobre mí" paragraph and the short
  service descriptions are drafts written by Claude: to be checked by Vero.
- Files: `index.html` (home), `css/estilo.css` (palette in `:root`: Vero's garnet, teja orange, gold, cream — provisional until she sends her exact palette),
  `css/fonts.css` + `fonts/` (Fraunces, Work Sans, local), `js/main.js` (WhatsApp links from `data-wa`, phone menu,
  sparkles from `data-sparkles`, hides `.event` after `data-until`), `img/favicon.svg` (sun mark).
- Strict Content-Security-Policy meta: no inline scripts or `style=""` attributes; no third-party requests.
- Style: same configs as web-chacinas-prime (`.prettierrc.json`, `.stylelintrc.json`, `.htmlvalidate.json`). No
  node_modules here: run the tools from `..\web-chacinas-prime` with absolute paths (npx html-validate / stylelint /
  prettier). Check with Playwright (`channel="msedge"`) at 1366 px and 390 px.
- Published since 2026-11-16: public repo github.com/cristttina19/vegamar → https://cristttina19.github.io/vegamar/
- Vero's feedback (2026-11-16): her colours are garnet, terracotta orange, gold and cream; more elegant look; landing
  must be short and easy to scan. Fixed order: free masterclass first → sessions → recorded courses (still being made)
  → «Volver a ti» (programa de transformación en el camino al éxtasis, 8 semanas de acompañamiento, 897 €; during
  launches she lowers it to 677/693 €). Lectura álmica = 150 € (sesión + documento PDF). She helps «personas», not
  only women. She will send photos, her exact palette and the descriptions of everything.
- Since 2026-11-16 (Vero's request, modelled on space.soulshambhala.com/viaje-al-ser-lista-de-espera/): short home
  that links to one landing per offer: `masterclass/`, `reiki/`, `sanacion-de-utero/`, `lectura-almica/`, `cursos/`,
  `volver-a-ti/` (plain HTML, relative paths `../`, shared css/js). Landing blocks: `.lp-hero` + `.facts`,
  `.checklist`, `.steps`, `.about-mini`, `.faq` (details), `.final`. All landing copy beyond the facts is a draft
  by Claude, gender-neutral (she works with «personas»): replace it with Vero's descriptions when they arrive.
  Prices appear both on the home and on each landing. Photos: `img/fotos/` from Desktop\claudeegamar\perfil.jpeg.
- Book: «Reconociéndome: la guía práctica para dejar de repetir patrones, entenderte y volver a ti» (Kindle eBook,
  «VEGAMAR — Guías de Transformación nº 2», author Verónica Garijo Martínez). Cover from its Amazon page (B0H23WFJ4K).
  Since the book is nº 2, there may be a nº 1.
