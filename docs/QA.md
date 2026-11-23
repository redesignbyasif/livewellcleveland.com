# QA results

Tested November 23, 2026 using headless Chromium with Playwright against a local static HTTP server. Browser engine supplied by @sparticuz/chromium; these are QA-only tools, not website dependencies.

## Viewport matrix

| Width | Horizontal overflow | Broken images | Anchor targets | Mobile menu + Escape + link close | FAQ open/close |
|---|---|---|---|---|---|
| 360 | None | None | Pass | Pass | Pass |
| 390 | None | None | Pass | Pass | Pass |
| 430 | None | None | Pass | Pass | Pass |
| 768 | None | None | Pass | Pass | Pass |
| 1024 | None | None | Pass | Pass | Pass |
| 1280 | None | None | Pass | Desktop nav | Pass |
| 1440 | None | None | Pass | Desktop nav | Pass |

Lazy-loaded images were explicitly decoded before the broken-image check. Full-page screenshots at 390px and 1440px were visually inspected. Initial lazy-image false positives were resolved in the test by waiting for decode, not by disabling lazy loading in the website.

## Additional checks

- No browser page errors or HTTP error responses during viewport matrix.
- Local HTML image, CSS, JS, favicon and preload font URLs returned HTTP 200.
- JavaScript syntax: `node --check js/script.js` passed.
- Mobile floating CTA at 390×844: hidden in hero, visible in services at x=16 with width=358 and bottom=832 (inside viewport), hidden at final CTA.
- Responsive navigation uses aria-expanded/aria-controls, keyboard Escape, outside-click close and anchor-click close.
- Semantic landmarks, one h1, descriptive image alt text, skip link, focus-visible styles and reduced-motion preference included.
- No contact form or fictitious booking confirmation.
- Assets use relative paths; no localhost URLs exist in browser-facing code.
- No backend or build step required.

## Limits

Tests used emulated viewport sizes in Chromium, not physical phones. Safari/Firefox, screen-reader audit, production PageSpeed/Lighthouse and live GitHub Pages rendering were not tested. External appointment destinations were sourced from the official website, not end-to-end submitted. No appointments or messages were sent. GitHub Pages creation was attempted and rejected with HTTP 403, so deployment remains an owner action.
