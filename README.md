# Josiah Peter James portfolio

React + TypeScript + Vite. Homepage renders to static HTML during the build, then hydrates for navigation. Agency page is static HTML.

## Local development

```sh
npm ci
npm run dev
```

## Production checks

```sh
npm run lint
npm run build
npm run preview -- --port 5173
```

Build runs `tests/seo.mjs` to check prerendered content, distinct titles, canonical URLs, schema, assets, sitemap, and the 404 page. Run `npm test` for redesign/content regressions. After starting the production preview on port 5173, run `npm run test:browser` for hydration, no-JavaScript content, six viewport widths, keyboard navigation and desktop/mobile axe WCAG AA checks. Browser-test dependencies are included in devDependencies. Set `CHROME_PATH` if Chrome is not at `/usr/bin/google-chrome-stable`, and `PORTFOLIO_URL` to check a deployment instead. Set `SCREENSHOT_DIR` to save desktop/mobile screenshots.

The home page is portrait-free. `npm run social-card` regenerates its typography-only sharing image. Keep the public CV aligned with the applicant’s confirmed qualifications; do not restore the old Diploma wording.

## Cloudflare Pages

- Repository root: this directory.
- Build command: `npm run build`.
- Output directory: `dist`.
- Publish the complete output, including `404.html`. Its presence disables Pages' default homepage fallback for unknown paths.

After deploying, confirm homepage source contains its heading and projects, `/agency-support/` returns 200, and an unknown path returns 404. Submit `https://josiah-peter-james.pages.dev/sitemap.xml` in Google Search Console and inspect both page URLs. Search Console access and field Core Web Vitals are separate from local build checks.

Canonical URLs use `https://josiah-peter-james.pages.dev/`. If the primary domain changes, update metadata, JSON-LD, robots.txt, sitemap.xml, and SEO checks together. Sitemap intentionally omits `lastmod` rather than publishing stale dates.
