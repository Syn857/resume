import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { test } from 'node:test';
const read = path => readFile(new URL(`../${path}`, import.meta.url), 'utf8');
test('the portfolio does not expose a portrait in its page or social metadata', async () => {
  const app = await read('src/App.tsx');
  const html = await read('index.html');
  assert.doesNotMatch(app + html, /profile\.jpg|portrait-wrap|portrait-card/);
  await assert.rejects(access(new URL('../public/profile.jpg', import.meta.url)));
});
test('the introduction identifies the developer and makes hiring paths explicit', async () => {
  const app = await read('src/App.tsx');
  assert.ok(app.includes('<h1>Josiah Peter James'), 'Lead with the developer’s name');
  assert.ok(app.includes('Freelance, contract &amp; remote roles'), 'Show availability for both clients and employers');
  assert.ok(app.includes('https://www.linkedin.com/in/josiahpeterjames/'), 'Use the current LinkedIn URL');
  assert.ok(!app.includes('https://github.com/Syn857/weddingRsvp'), 'Do not send visitors to private source code');
});
