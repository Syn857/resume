import { readFile, writeFile } from 'node:fs/promises';
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import { createServer } from 'vite';

// Render the homepage from the same component used by the browser.
const server = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
  optimizeDeps: { noDiscovery: true, include: [] },
});
try {
  const { default: App } = await server.ssrLoadModule('/src/App.tsx');
  const file = new URL('../dist/index.html', import.meta.url);
  const html = await readFile(file, 'utf8');
  const placeholder = '<div id="root"></div>';
  if (!html.includes(placeholder)) throw new Error('Missing homepage render placeholder');
  await writeFile(file, html.replace(placeholder, () => `<div id="root">${renderToString(createElement(App))}</div>`));
} finally {
  await server.close();
}
