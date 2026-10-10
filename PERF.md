# Portfolio performance experiments

Measured October 10, 2026 with Lighthouse 13.5.0, default simulated-mobile settings, isolated headless Chrome. These are live-network lab samples, not field Core Web Vitals or ranking evidence. No CrUX / real-user INP data is available from these runs.

| Attempt | Baseline | Result | Decision |
|---|---|---|---|
| Agency: move Google Fonts from CSS `@import` into early head stylesheet links and preconnects | Performance 90–91; LCP 2.8 seconds | Performance 98; LCP 1.9 seconds | Kept for the agency route; recheck with future measurements |
| Home: same font-discovery change | Performance varied 86–98; LCP 1.9–3.0 seconds | Performance 85; LCP 3.1 seconds | Reverted for home: no demonstrated benefit; do not assume a font optimization helps both routes |
| Agency favicon | Best Practices 96; `/favicon.ico` 404 | Best Practices 100 after linking the existing SVG | Kept |
| Accessible names | Three label-content-name mismatches (unscored by Lighthouse category) | Audit passed after native brand name and complete project-link labels | Kept; browser tests now include `wcag21a` as well as WCAG 2.0/2.1 AA tags |

Full JSON artifacts for this session are under `/home/syn857/.hermes/cache/scratch/portfolio-seo/` (temporary). Scores must not be reported as guaranteed or permanent. Remaining optional opportunities: responsive project thumbnails and further profiling of homepage font/network timing. Do not rewrite hydration or remove working content merely for a Lighthouse score.
