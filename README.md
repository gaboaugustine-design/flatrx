# Storefront 2 — v7 blue + warm white (SnagRx-style page)

v7 (Oct 14): full page now mirrors the SnagRx landing page order: hero (unchanged from v6, small print removed) → feature strip → How it works panel → medication cards → Plans (replaces a pricing tab; annual vs monthly for each medication) → FAQ cards → closing band → footer (disclaimer verbatim). Previews: `preview/v7-1280.png`, `preview/v7-390.png`. v6 kept in `backups/v6-1720/`.

## v6 notes (hero)

Current design: navy text, blue buttons, warm white and pale-blue panels, clean sans-serif type. The hero now follows the SnagRx composition Gabo asked for: headline and two-line sub on the left, then ONE offer card holding a navy vial (`assets/vial-navy.png`, the no-brand Cora plate hue-shifted purple to navy) beside the price (semaglutide from $79/mo, $948 billed yearly, or $149 month-to-month; tirzepatide as a second line), a Get started button, and three badges (No insurance · No hidden fees · Cancel anytime). The same natural-looking woman holding out loose jeans stays on the right; on desktop the offer card overlaps the photo's lower-left corner, on phones the order is copy, photo, card. Photo is labeled AI-generated/non-patient with results vary. No "Was $X" strike-through, countdown, outcome claims, press logos or review counts. v5 source is kept in `backups/v5-<time>/`; green v3 and lavender were rejected earlier.

**Status:** design complete and locally verified; not published. Brand name, prices, checkout link, legal/support details and policy links are still placeholders in `config.js`. Do not treat this as launch-ready or quote its placeholder prices as Cora pricing.

**Review:** open `index.html` locally, or serve this folder with `python3 -m http.server 4849 --bind 127.0.0.1`. Desktop/mobile screenshots: `preview/v6-desktop-1280.png`, `preview/v6-hero-1280.png`, `preview/v6-mobile-390.png` (v5 previews still in `preview/`). Those are saved files and can be reviewed after the temporary server stops. Old source is retained in `backups/v3-green/`.

**Verified (v6):** headless Chrome screenshots at 320, 390, 900 and 1280 reviewed by eye; no overlaps, cropping or horizontal spill; all images load. Footer disclaimer and every section below the hero are byte-identical to v5. `config.js` and `app.js` unchanged; prices still flow from `config.js` via `data-price`. v5's JS-level checks (FAQ toggle, anchor, JS errors) were not re-run. CTA links are placeholders, so a live checkout was not tested.

## Publishing instructions (once placeholders are resolved)

This folder is a complete website. Nothing to install. To change the brand name,
prices, phone, email, or the button link, open **config.js** in TextEdit, change
the text between the quotes, and save.

## Put it online — 5 small steps

1. **Make the repo.** Go to https://github.com/new. Repository name: `storefront-2`.
   Pick **Private** (switch to Public later when you launch). Click **Create repository**.

2. **Open Terminal** and paste this (one line at a time):
   ```
   cd ~/Cora/storefront-2
   git init && git add . && git commit -m "First version of storefront"
   ```

3. **Connect and push.** Replace `YOUR-USERNAME` with your GitHub username:
   ```
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/storefront-2.git
   git push -u origin main
   ```
   (If Terminal asks you to log in, follow the prompt in the browser.)

4. **Turn on Pages.** On the repo page: **Settings → Pages → Build and deployment →
   Source: "Deploy from a branch" → Branch: `main`, folder `/ (root)` → Save.**
   Note: GitHub Pages on a free account only works on a **Public** repo. Flip it to
   Public under Settings → General → Danger Zone when you are ready to launch.

5. **Wait about a minute**, then visit `https://YOUR-USERNAME.github.io/storefront-2/`.

## Updating the site later
Edit `config.js` (or any file), then in Terminal:
```
cd ~/Cora/storefront-2
git add . && git commit -m "Update prices" && git push
```
The live site updates in about a minute.

## Custom domain (later)
Settings → Pages → Custom domain → type the domain → add the CNAME record at
your domain registrar as GitHub shows you.

## Files
- `index.html` — page layout and content
- `styles.css` — v4 base + v5 + v6 hero overrides (appended at the bottom)
- `app.js` — fills the page from the configuration
- `config.js` — brand, pricing and links; launch decisions still required
- `assets/hero-v5.png` — edited v4 woman in an illustrative loose-jeans pose; built-in image tool; not a patient/testimonial
- `assets/vial-navy.png` — navy vial for the offer card: Cora no-brand plate `Cora Ads/plates/2026-09-14-vial-realistic-variants/03-precision-detail.png` hue-shifted purple to navy (#182D4D) with PIL/numpy, background cut out, label text is generic ("Compounded Injection / GLP-1 / Compounded Medication / Rx Only"), no Cora wordmark
- `assets/ref/snagrx/` — SnagRx reference captures (page.html, hero_promo_products.png, hero images); reference only, never ship
- `assets/hero.jpg`, `assets/vial-green.png`, `assets/vial.png` — archived previous designs, not used by v4
- `preview/v6-*.png` — current desktop/hero/mobile screenshots; `preview/v5-*.png` previous
- `preview/v5-checks.json` — responsive and interaction check results
- `research-notes.md` — research, design decisions and v4 image prompt
- `backups/v3-green/`, `backups/v4-blue/`, `backups/v5-<time>/` — source before each redesign; associated old assets remain in `assets/`
- `CHANGELOG.md` — one line per version, for Codex and Claude

## Switching between Codex and Claude
On the laptop, `minicora codex` reconnects to screen `cora-codex` on the mini. `minicora` reconnects to Claude screen `cora`. Keep the mini awake/online and laptop Tailscale connected. Read `../CODEX_HANDOFF.md` and `../CODEX_LOG.md` on every switch. Chats do not auto-sync. Let one agent finish before asking the other to change the same files.

## Shareable design preview
https://storefront-two-design-preview.fairy-kiwi-6216.chatgpt.site

Published October 13 for review, accessible to anyone with the link. Draft banner; prices/brand/checkout remain placeholders. Deployment source is the separate `../storefront-preview/` checkout; update its `dist/` assets and reuse `.openai/hosting.json` to republish.
