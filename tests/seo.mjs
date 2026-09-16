import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';

const read = path => readFile(new URL(`../dist/${path}`, import.meta.url), 'utf8');
const home = await read('index.html');
const agency = await read('agency-support/index.html');
const title = html => html.match(/<title>(.*?)<\/title>/s)?.[1];
assert.notEqual(title(home), title(agency), 'Pages need distinct titles');
for (const html of [home, agency]) {
  assert.equal((html.match(/<h1\b/g) || []).length, 1, 'Content must exist in initial HTML');
  assert.match(html, /<link rel="canonical" href="https:\/\/josiah-peter-james.pages.dev\//);
  assert.doesNotMatch(html, /content="noindex/);
  for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) JSON.parse(match[1]);
}
assert.match(home, /CRM &amp; Operations Platform/);
assert.match(home, /href="\/agency-support\/"/);
assert.doesNotMatch(home, /src="\/src\//);
for (const match of home.matchAll(/(?:src|href)="(\/assets\/[^"?#]+)"/g)) {
  await access(new URL(`../dist${match[1]}`, import.meta.url));
}
const schema = JSON.parse(agency.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
const service = schema['@graph'].find(item => item['@type'] === 'Service');
assert.equal(service.provider['@type'], 'Person');
assert.ok(service.serviceType.length);
assert.match(await read('404.html'), /content="noindex, follow"/);
const sitemap = await read('sitemap.xml');
assert.match(sitemap, /<loc>https:\/\/josiah-peter-james.pages.dev\/<\/loc>/);
assert.match(sitemap, /<loc>https:\/\/josiah-peter-james.pages.dev\/agency-support\/<\/loc>/);
assert.doesNotMatch(sitemap, /404|<lastmod>/);
assert.match(await read('robots.txt'), /Sitemap: https:\/\/josiah-peter-james.pages.dev\/sitemap.xml/);
console.log('PASS: prerendered content, metadata, assets, schema, 404 page, and sitemap');
