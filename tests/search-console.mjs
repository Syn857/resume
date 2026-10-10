import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
const home=await readFile(new URL('../dist/index.html',import.meta.url),'utf8');
const agency=await readFile(new URL('../dist/agency-support/index.html',import.meta.url),'utf8');
assert.match(home,/<meta name="google-site-verification" content="T8n5fx_mbw0PV9mLWlET7rbobnpUilKYMD3hoEXQ7gw" \/>/);
assert.match(home,/<title>Josiah Peter James \| WordPress &amp; Laravel Developer<\/title>/);
const schema=JSON.parse(home.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
const graph=schema['@graph'];
assert.ok(graph,'Homepage needs connected profile, person and website entities');
const person=graph.find(x=>x['@type']==='Person');
const profile=graph.find(x=>x['@type']==='ProfilePage');
const website=graph.find(x=>x['@type']==='WebSite');
assert.equal(profile.mainEntity['@id'],person['@id']);
assert.equal(website.publisher['@id'],person['@id']);
assert.ok(person.sameAs.includes('https://www.linkedin.com/in/josiahpeterjames/'));
for(const html of [home,agency]){
 assert.doesNotMatch(html,/profile\.jpg/);
 assert.match(html,/<html lang="en">/);
 assert.match(html,/<meta name="description" content="[^"]+"/);
 assert.match(html,/<meta property="og:image" content="https:\/\/josiah-peter-james.pages.dev\/social-card.png"/);
}
console.log('PASS: Search Console verification, search title, linked profile schema and sharing metadata');
