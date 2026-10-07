# HVAC Code Navigator

A free, open learning resource that helps technicians, engineers and anyone learning the trade find **which HVAC codes, standards and regulations apply to a given job** — and why.

**Live site:** https://mehdiq466.github.io/HVAC-codes-standards/

## Features
- **Job finder** — pick a type of work (AC replacement, furnace, RTU, kitchen hood, A2L refrigerants…) and see the applicable codes, standards, regulations and guidelines, with "why it applies" and "where to look".
- **Role views** — tips for technicians, engineers and owners/students.
- **Region filter** — United States, Canada, or all.
- **Library** — searchable plain-language summaries of every code and standard.
- **Learn** — how codes become law, where to read them for free, and a glossary.

## Editing content
All content lives in [`js/data.js`](js/data.js):
- `CODES` — add or correct a code/standard entry.
- `JOBS` — add a job type, or add `[codeId, why, whereToLook]` rows to an existing one.

No build step — it's plain HTML, CSS and JavaScript. Open `index.html` in a browser to preview.

## Publishing (GitHub Pages)
Repository **Settings → Pages → Build and deployment → Deploy from a branch → `main` / `(root)`**.

## Disclaimer
Educational resource only — not legal or engineering advice. Codes are adopted and amended locally; always confirm with your Authority Having Jurisdiction (AHJ) and the official documents.
