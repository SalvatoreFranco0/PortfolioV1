# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static personal portfolio website for Salvatore Franco — no build tools, frameworks, or dependencies. Open `index.html` directly in a browser to run.

## File Structure

- **index.html** — Main portfolio page (hero, projects, skills, contact)
- **about.html** — Detailed about page (bio, work experience, education)
- **portfolio.css** — Primary stylesheet (design tokens, all components, responsive layout)
- **about.css** — Page-specific styles for about.html
- **styles.css** — Experimental base/utility styles (largely superseded by portfolio.css)
- **i18n.js** — Bilingual translation system (English/Italian)
- **01.images/** — Static assets (profile photo, wallpapers)

## Architecture

### Styling
`portfolio.css` uses CSS custom properties as design tokens: Zinc dark palette + Indigo accent, with a light mode override via `[data-theme="light"]` selector. Fonts are self-hosted in `fonts/` (`fonts/fonts.css`): Space Grotesk (headings), Inter (body), JetBrains Mono (labels). GSAP is in `js/`. Never load fonts, scripts or media from third-party servers: `privacy.html` states that the site sends no data to third parties, and it must be updated first if that changes.

### JavaScript
All JS is embedded directly in HTML files (no external `.js` files except `i18n.js`). Each page has inline scripts for:
- **Theme toggle** — light/dark, persisted via `localStorage('theme')`
- **Mobile nav toggle** — hamburger menu open/close
- **Scroll animations** — Intersection Observer for fade-in reveals and active nav links

### Internationalization
`i18n.js` drives EN/IT switching. HTML elements use `data-i18n="key"` attributes; the script maps keys to translated strings and updates the DOM. Language preference persists via `localStorage('lang')`. Adding new translatable text requires:
1. Adding `data-i18n="newKey"` to the HTML element
2. Adding `newKey` entries to both `translations.en` and `translations.it` in `i18n.js`

### Content
All content is hardcoded in HTML — no CMS or API. To add a project card or experience entry, duplicate an existing card block in the relevant HTML section and update the text/links.

### Instruction
Whenever asked for change, commit a copy of the version inside the folder "Versioni" inside a new folder called "vN" where N=new version number (e.g. v01 v02 v03 v04 ...v10 v11 v12 v13 ... vN). the first version is called v01.

Whenever asked for change start in Plan Mode, do not make any changes until you have 95% level of confidence. Ask me question to reach this level of confidence on what asked.
