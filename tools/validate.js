#!/usr/bin/env node
// Validates module content (modules/*.js) and lesson steps (modules/teach/*.js) against modules/README.md.
// Usage: node tools/validate.js [modules/foo.js ...]   (teach files are always loaded)
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const dir = path.join(__dirname, "..", "modules");
const teachDir = path.join(dir, "teach");
const files = process.argv.slice(2).length
  ? process.argv.slice(2)
  : fs.readdirSync(dir).filter((f) => f.endsWith(".js")).map((f) => path.join(dir, f));
const teachFiles = fs.existsSync(teachDir)
  ? fs.readdirSync(teachDir).filter((f) => f.endsWith(".js")).map((f) => path.join(teachDir, f))
  : [];

const LEVELS = ["B1+", "B2", "B2+", "C1"];
let errors = 0;
let warnings = 0;
const err = (where, msg) => { errors++; console.log(`ERROR  ${where}: ${msg}`); };
const warn = (where, msg) => { warnings++; console.log(`warn   ${where}: ${msg}`); };
const isStr = (s) => typeof s === "string" && s.trim().length > 0;
const words = (s) => s.trim().split(/\s+/).length;
const bag = (s) => s.trim().split(/\s+/).map((t) => t.toLowerCase().replace(/[^a-z0-9']/g, "")).sort().join(" ");

// ---- load teach files (shared window) ----
const teachCtx = { window: {} };
for (const f of teachFiles) {
  try { vm.runInNewContext(fs.readFileSync(f, "utf8"), teachCtx, { filename: f }); }
  catch (e) { err(path.relative(dir, f), "syntax/runtime error: " + e.message); }
}
const TEACH = teachCtx.window.EA_TEACH || {};
const usedTeach = new Set();

function checkExercise(e, w) {
  switch (e && e.type) {
    case "mcq":
      if (!isStr(e.q)) err(w, "q missing");
      if (!Array.isArray(e.options) || e.options.length < 2 || e.options.length > 5) err(w, "options must be 2-5");
      else {
        if (!Number.isInteger(e.answer) || e.answer < 0 || e.answer >= e.options.length) err(w, "answer index out of range");
        if (new Set(e.options).size !== e.options.length) err(w, "duplicate options");
      }
      break;
    case "fill": {
      if (!isStr(e.q)) { err(w, "q missing"); break; }
      const blanks = (e.q.match(/___/g) || []).length;
      if (e.q.includes("____")) err(w, "use exactly three underscores for the blank");
      if (blanks !== 1) err(w, `q must contain exactly one ___ (found ${blanks})`);
      if (!Array.isArray(e.answers) || !e.answers.length || !e.answers.every(isStr)) err(w, "answers missing");
      break;
    }
    case "order":
    case "combine":
      if (!isStr(e.answer)) { err(w, "answer missing"); break; }
      if (e.type === "order") { const n = words(e.answer); if (n < 3 || n > 28) warn(w, `answer has ${n} words`); }
      else {
        if (!Array.isArray(e.parts) || e.parts.length < 2 || e.parts.length > 4 || !e.parts.every(isStr)) err(w, "parts must be 2-4 sentences");
        const n = words(e.answer); if (n < 8 || n > 34) warn(w, `combined answer has ${n} words`);
      }
      if (e.extra && !Array.isArray(e.extra)) err(w, "extra must be an array");
      if (e.alts !== undefined) {
        if (!Array.isArray(e.alts) || !e.alts.every(isStr)) err(w, "alts must be an array of strings");
        else e.alts.forEach((a) => { if (bag(a) !== bag(e.answer)) err(w, `alt "${a}" does not use exactly the same words as answer`); });
      }
      break;
    case "match":
      if (!Array.isArray(e.pairs) || e.pairs.length < 3 || e.pairs.length > 6) err(w, "pairs must be 3-6");
      else {
        const l = e.pairs.map((p) => p[0]), r = e.pairs.map((p) => p[1]);
        if (!e.pairs.every((p) => Array.isArray(p) && isStr(p[0]) && isStr(p[1]))) err(w, "each pair needs two strings");
        if (new Set(l).size !== l.length || new Set(r).size !== r.length) err(w, "duplicate pair text");
      }
      break;
    case "listen":
      if (!isStr(e.text)) err(w, "text missing");
      if (/\d/.test(e.text || "")) warn(w, "listen text contains digits; spell numbers out");
      break;
    default:
      err(w, `unknown type ${e && e.type}`);
  }
}

function checkTeach(steps, w) {
  if (!Array.isArray(steps) || !steps.length) { warn(w, "no teach steps yet"); return 0; }
  if (steps.length < 4 || steps.length > 8) warn(w, `teach has ${steps.length} steps (want 5-6)`);
  steps.forEach((s, i) => {
    const sw = `${w} teach[${i}]`;
    if (!isStr(s.title)) err(sw, "title missing");
    if (!isStr(s.tr)) err(sw, "tr missing");
    if (!Array.isArray(s.examples) || s.examples.length < 2) err(sw, "needs at least 2 examples");
    (s.examples || []).forEach((e, j) => { if (!isStr(e.en) || !isStr(e.tr)) err(sw, `examples[${j}] needs en+tr`); });
    (s.mistakes || []).forEach((m, j) => { if (!isStr(m.wrong) || !isStr(m.right)) err(sw, `mistakes[${j}] needs wrong+right`); });
    if (s.check) checkExercise(s.check, sw + " check");
  });
  return steps.length;
}

const seenModuleIds = new Set();
const seenUnitIds = new Set();

for (const file of files) {
  const ctx = { window: {} };
  try {
    vm.runInNewContext(fs.readFileSync(file, "utf8"), ctx, { filename: file });
  } catch (e) {
    err(file, "syntax/runtime error: " + e.message);
    continue;
  }
  const mods = ctx.window.EA_MODULES || [];
  if (mods.length !== 1) err(file, `expected exactly 1 module push, got ${mods.length}`);
  for (const m of mods) {
    const mw = `${path.basename(file)}`;
    for (const k of ["id", "title", "icon", "color", "description"]) if (!isStr(m[k])) err(mw, `module.${k} missing`);
    if (seenModuleIds.has(m.id)) err(mw, `duplicate module id ${m.id}`);
    seenModuleIds.add(m.id);
    if (!Array.isArray(m.units) || !m.units.length) { err(mw, "no units"); continue; }
    let lastWeek = 0;
    let exCount = 0, cardCount = 0, stepCount = 0, withTeach = 0;
    m.units.forEach((u, ui) => {
      const uw = `${mw} unit[${ui}] ${u.id}`;
      if (!isStr(u.id)) err(uw, "unit.id missing");
      if (seenUnitIds.has(u.id)) err(uw, "duplicate unit id");
      seenUnitIds.add(u.id);
      if (!isStr(u.title)) err(uw, "title missing");
      if (!LEVELS.includes(u.level)) err(uw, `bad level ${u.level}`);
      if (!Number.isInteger(u.week) || u.week < 1 || u.week > 8) err(uw, `bad week ${u.week}`);
      if (u.week < lastWeek) warn(uw, "weeks not in ascending order");
      lastWeek = u.week;
      const it = u.intro || {};
      if (!isStr(it.tr)) err(uw, "intro.tr missing");
      if (!Array.isArray(it.points) || it.points.length < 1) err(uw, "intro.points missing");
      if (!Array.isArray(it.examples) || it.examples.length < 1) err(uw, "intro.examples missing");
      (it.examples || []).forEach((e, i) => { if (!isStr(e.en) || !isStr(e.tr)) err(uw, `intro.examples[${i}] needs en+tr`); });
      if (u.cards !== undefined) {
        if (!Array.isArray(u.cards)) err(uw, "cards must be an array");
        else u.cards.forEach((c, i) => { if (!isStr(c.en) || !isStr(c.tr)) err(uw, `cards[${i}] needs en+tr`); cardCount++; });
      }
      const t = TEACH[u.id];
      if (t) usedTeach.add(u.id);
      if (t && u.teach) err(uw, "teach defined both in unit and in modules/teach");
      const steps = u.teach || (t && t.teach);
      const n = checkTeach(steps, uw);
      stepCount += n; if (n) withTeach++;
      const extra = (t && t.extra) || [];
      if (t && t.extra !== undefined && !Array.isArray(t.extra)) err(uw, "teach extra must be an array");
      const ex = (u.exercises || []).concat(extra);
      exCount += ex.length;
      if (ex.length < 8) err(uw, `only ${ex.length} exercises (need 10-14)`);
      else if (ex.length < 10) warn(uw, `only ${ex.length} exercises (want 10-14)`);
      const types = new Set(ex.map((e) => e.type));
      if (types.size < 3) warn(uw, "fewer than 3 exercise types");
      ex.forEach((e, i) => checkExercise(e, `${uw} ex[${i}] ${e.type}`));
    });
    console.log(`ok     ${mw}: ${m.units.length} units (${withTeach} with teach, ${stepCount} steps), ${exCount} exercises, ${cardCount} cards`);
  }
}
if (!process.argv.slice(2).length) {
  Object.keys(TEACH).filter((id) => !usedTeach.has(id)).forEach((id) => err("teach", `EA_TEACH["${id}"] has no matching unit`));
}
console.log(`\n${errors} error(s), ${warnings} warning(s)`);
process.exit(errors ? 1 : 0);
