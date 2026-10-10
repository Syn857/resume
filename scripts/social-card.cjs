// Generate a portrait-free sharing image with the same typography as the site.
const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH || '/usr/bin/google-chrome-stable', headless: true });
  try {
    const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
    await page.setContent(`<!doctype html><html lang="en"><head><meta charset="utf-8"><style>
      @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&family=Instrument+Serif:ital@0;1&display=swap');
      *{box-sizing:border-box}body{margin:0;background:#f8f7f3;color:#202a38;padding:64px 72px;font-family:'DM Sans',sans-serif}header{display:flex;justify-content:space-between;border-bottom:1px solid #dcdedb;padding-bottom:24px;font-size:18px}h1{font-family:'Instrument Serif',Georgia,serif;font-weight:400;font-size:88px;line-height:1.03;letter-spacing:-2px;margin:42px 0 26px}em{color:#356152;font-weight:400}p{font-size:20px;color:#5b626c;margin:0;line-height:1.6}footer{border-top:1px solid #dcdedb;margin-top:38px;padding-top:20px;color:#5b626c;font-size:16px}
    </style></head><body><header><span>Josiah Peter James</span><span>Full-stack developer</span></header><h1>Websites &amp; software,<br><em>built to work.</em></h1><p>WordPress · Laravel · React / TypeScript</p><footer>Kuching, Malaysia / Freelance, contract &amp; remote roles</footer></body></html>`);
    await page.evaluate(() => document.fonts.ready);
    await page.screenshot({ path: 'public/social-card.png' });
    console.log('Generated public/social-card.png (1200 × 630), no portrait.');
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
