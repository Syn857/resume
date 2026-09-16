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

Build runs `tests/seo.mjs` to check prerendered content, distinct titles, canonical URLs, schema, assets, sitemap, and the 404 page. With Playwright and Edge available, run `node tests/portfolio.cjs` against the preview to check hydration, no-JavaScript content, responsive layout, and keyboard navigation. An external Playwright installation can be provided through `NODE_PATH`.

## Cloudflare Pages

- Repository root: this directory.
- Build command: `npm run build`.
- Output directory: `dist`.
- Publish the complete output, including `404.html`. Its presence disables Pages' default homepage fallback for unknown paths.

After deploying, confirm homepage source contains its heading and projects, `/agency-support/` returns 200, and an unknown path returns 404. Submit `https://josiah-peter-james.pages.dev/sitemap.xml` in Google Search Console and inspect both page URLs. Search Console access and field Core Web Vitals are separate from local build checks.

Canonical URLs use `https://josiah-peter-james.pages.dev/`. If the primary domain changes, update metadata, JSON-LD, robots.txt, sitemap.xml, and SEO checks together. Sitemap intentionally omits `lastmod` rather than publishing stale dates.
