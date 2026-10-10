#!/usr/bin/env node
// Builds a single self-contained page (CSS + all scripts inlined) from index.html,
// suitable for publishing as a claude.ai Artifact (no <!doctype>/<html>/<head>/<body>;
// the host wraps the page in its own skeleton).
// Usage: node tools/build-artifact.js <output.html>
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const out = process.argv[2];
if (!out) { console.error("usage: node tools/build-artifact.js <output.html>"); process.exit(1); }

const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const read = (rel) => fs.readFileSync(path.join(root, rel), "utf8");
const scriptSafe = (js) => js.replace(/<\/script/gi, "<\\/script").replace(/<!--/g, "<\\!--");

const title = (html.match(/<title>([\s\S]*?)<\/title>/) || [, "English Voyage"])[1];
const fontLinks = (html.match(/<link[^>]+fonts\.(googleapis|gstatic)\.com[^>]*>/g) || []).join("\n");
const css = [...html.matchAll(/<link rel="stylesheet" href="(?!https?:)([^"]+)">/g)].map((m) => read(m[1])).join("\n");
const scripts = [...html.matchAll(/<script src="([^"]+)"><\/script>/g)].map((m) => m[1]);
const body = html.match(/<body>([\s\S]*?)<\/body>/)[1].replace(/\s*<script[\s\S]*?<\/script>/g, "").trim();

const page = [
  `<title>${title}</title>`,
  fontLinks,
  `<style>\n${css}\n</style>`,
  body,
  ...scripts.map((src) => `<script>\n/* ${src} */\n${scriptSafe(read(src))}\n</script>`),
  "",
].join("\n");

fs.writeFileSync(out, page);
console.log(`wrote ${out}: ${(page.length / 1024).toFixed(0)} KB, ${scripts.length} scripts inlined`);
