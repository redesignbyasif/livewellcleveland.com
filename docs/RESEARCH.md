# Research and design direction

Research date: November 23, 2026.

## Verified sources

- https://www.livewellcleveland.com/ — approach, telehealth, services, insurance, HSA/FSA and self-pay
- https://www.livewellcleveland.com/about — licensed clinicians, virtual care, areas of support
- https://www.livewellcleveland.com/ourteam — provider names, credentials and original photography
- https://www.livewellcleveland.com/contact — admin@livewellcleveland.com, 216-347-4240 and emergency guidance
- https://www.livewellcleveland.com/get-started — appointment pathway
- https://www.livewellcleveland.com/?format=json — business name and social destinations
- https://www.livewellcleveland.com/site.css — actual original brand color tokens

Business: Live Well Counseling. Industry: virtual mental health care. Audience: people throughout Ohio seeking individual counseling, couples counseling or psychiatric services/medication management. No street address is invented for this virtual practice.

## Original brand palette

Extracted HSL values, retained in the redesign:

- Dark accent: `hsl(172.94117647 10.42944785% 31.96078431%)` ≈ `#495a58`
- Darkest: `hsl(174.54545455 8.02919708% 26.8627451%)` ≈ `#3f4a49`
- Accent: `hsl(16.875 19.04761905% 67.05882353%)` ≈ `#bba499`
- Light accent: `hsl(44 19.48051948% 84.90196078%)` ≈ `#e0dcd1`
- White: `#ffffff`

Supporting off-white and sage surfaces extend these colors rather than introducing a new brand palette. Manrope is the sole font family, self-hosted with its license. Original HTML has `header-title-text` reading “Live Well Counseling”; no image logo was present. The identity is preserved as a text wordmark, not replaced with an invented company emblem.

## Audit and direction

Content review found a substantial, paragraph-heavy approach explanation and a payment/appointment flow that would benefit from clearer hierarchy. The redesign brings the telehealth proposition and primary CTA into the hero; separates three care pathways; introduces provider previews; makes insurance scannable; and answers common questions before the final CTA. An original-site rendered mobile audit was not performed, so no original mobile defects are asserted.

Visual direction: calm editorial wellness, generous breathing room, strong sans-serif hierarchy, arch-framed original woodland photograph, quiet sage surfaces and restrained line iconography. Layouts alternate rather than repeating rounded cards. No fictitious testimonials or results are added.

## Images

Local optimized WebP copies:

- `hero.webp`: original homepage forest image, Squarespace item `1642792049699-5FIACZM14JLWDU7S2FX5/unsplash-image-LOt8O3nfZQ4.jpg`
- `approach.webp`: original about-page image, item `1642881099267-P20RE26TOK82GV9DVUB5/unsplash-image-mzN7eMmv9IM.jpg`
- `kelsey.webp`: Kelsey Pilling original official portrait, `efee4692-633c-4097-9141-6c0f5b378b34/IMG_9220.jpeg`
- `mary.webp`: Mary Lawrence official portrait, `df2591ef-c724-4198-9b4a-7a4a114b6785/Mary+Lawrence+new+headshot.jpg`
- `molly.webp`: Molly McGann official portrait, `a9807250-9ce3-4e21-a581-7c2bcbaeb96d/Molly+McGann+.jpg`

CDN root: `https://images.squarespace-cdn.com/content/v1/61e892e5ceee0115f1c816d3/`. Hero and approach originals were retrieved using a temporary GitHub Actions workflow because the sandbox CDN connection was restricted; the one-time workflow and raw source were removed afterward. Provider images were retrieved through search results pointing to official pages. Images are not presented as client outcomes or testimonials.
