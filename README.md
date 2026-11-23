# Live Well Counseling — homepage redesign concept

A custom, mobile-first, static homepage for [Live Well Counseling](https://www.livewellcleveland.com/). Built with semantic HTML, CSS and vanilla JavaScript. No build, backend, runtime dependencies, trackers or remote font requests.

## Preview

Open `index.html`, or serve the repository:

```sh
python3 -m http.server 3000 --bind 0.0.0.0
```

## Structure

- `index.html` — complete single-page homepage; demo noindex/nofollow metadata
- `css/style.css` — responsive layouts, original palette, reduced-motion support
- `js/script.js` — accessible mobile navigation, FAQ uses native details/summary, contextual mobile CTA
- `assets/images/` — locally stored, optimized original website imagery
- `assets/fonts/` — self-hosted Manrope and its OFL license
- `assets/icons/favicon.svg` — custom typographic demo favicon
- `.nojekyll` — static GitHub Pages compatibility
- `docs/RESEARCH.md`, `docs/QA.md` — source notes and testing results

## Deployment

All asset paths are relative and work at a repository subdirectory. Root `index.html` is the entry point. No CNAME is included: the business domain must not be redirected to this independent demo.

GitHub Pages was not enabled at delivery: enabling through the API returned **403 Resource not accessible by integration**. An authorized repository owner must:

1. Open repository **Settings → Pages**.
2. Select **Deploy from a branch**.
3. Select `arena/b5ab21ae-livewellcleveland-com` and `/ (root)`.
4. Save and wait for the Pages deployment to finish. Use the URL GitHub actually reports.

No production deployment or live Pages URL is claimed. The Arena preview is separate from GitHub Pages.

## Content and functionality

Original practice information, services, contact details and insurance list were researched from the business website. The source uses a text site title, not an image logo; the existing business name is preserved as a typeset wordmark. All five photographs come from the original site; none are AI-generated. Insurance participation and clinician availability should be reconfirmed by the practice before any production launch.

Appointment CTAs lead to the official contact page. Provider links lead to official biographies. Phone/email/social links use published destinations. There is intentionally no fake booking form or success state. Insurance names are plain text, not fabricated partner logos. No invented testimonials, ratings, outcome statistics or certifications are used.

This is an independent design concept, visibly identified in the footer and excluded from search indexing. Original assets remain the property of their respective owners; permission is needed for use beyond an authorized redesign presentation.
