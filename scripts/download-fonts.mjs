import fs from 'node:fs/promises';
const source = await fs.readFile('public/fonts/google-source.css', 'utf8');
let css = source;
const urls = [...new Set(source.match(/https:\/\/[^)]+/g))];
for (const [i, url] of urls.entries()) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Font download failed: ${response.status}`);
  const name = `font-${i}.ttf`;
  await fs.writeFile(`public/fonts/${name}`, Buffer.from(await response.arrayBuffer()));
  css = css.replaceAll(url, `/fonts/${name}`);
}
await fs.writeFile('public/fonts/fonts.css', css);
console.log(`${urls.length} fonts self-hosted`);
