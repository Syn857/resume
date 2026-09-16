// Run against the built site at localhost:5173 with Playwright available in NODE_PATH.
const assert = require('node:assert/strict');
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  try {
    const staticPage = await browser.newPage({ javaScriptEnabled: false });
    await staticPage.goto('http://localhost:5173');
    assert.equal(await staticPage.locator('h1').count(), 1, 'Homepage must render without JavaScript');
    assert.ok(await staticPage.getByRole('heading', { name: 'CRM & Operations Platform' }).isVisible());
    await staticPage.close();
    const page = await browser.newPage();
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('console', message => {
      if (message.type() === 'error') errors.push(message.text());
    });
    for (const width of [320, 390, 720, 768, 1024, 1440]) {
      await page.setViewportSize({ width, height: 844 });
      await page.goto('http://localhost:5173');
      await page.evaluate(() => document.fonts.ready);
      assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `Overflow at ${width}px`);
      assert.equal(await page.locator('#work article:visible').count(), 3);
      const details = page.locator('.more-work');
      await details.locator('summary').focus();
      await page.keyboard.press('Enter');
      assert.equal(await details.getAttribute('open'), '');
      assert.equal(await page.locator('#work article:visible').count(), 6);
      assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
    }
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('http://localhost:5173');
    const menu = page.locator('.menu-button');
    await menu.click();
    for (let i = 0; i < 6; i++) await page.keyboard.press('Tab');
    assert.equal(await menu.getAttribute('aria-expanded'), 'false', 'Menu must close when focus leaves header');
    await menu.click();
    await page.keyboard.press('Escape');
    assert.equal(await menu.getAttribute('aria-expanded'), 'false');
    assert.ok(await menu.evaluate(button => button === document.activeElement));
    await menu.click();
    await page.getByRole('navigation').getByRole('link', { name: 'Work', exact: true }).click();
    assert.equal(await menu.getAttribute('aria-expanded'), 'false');
    assert.equal(new URL(page.url()).hash, '#work');
    assert.deepEqual(errors, []);
    console.log('PASS: no-JavaScript content, hydration, six viewport widths, disclosure, and keyboard navigation');
  } finally {
    await browser.close();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
