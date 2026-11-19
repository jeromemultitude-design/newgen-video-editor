// Strips private details (logins, private links, PC paths) from the plugin's markdown before sharing.
// Usage: node tools/sanitize.mjs <dir...>   Prints what it changed; exits 1 if anything secret-looking is left.
import fs from "fs";
import path from "path";

const swaps = [
  [/^## Chrome profiles[\s\S]*?(?=^## )/m, "## Accounts\n- Each client's tool logins (Higgsfield, ElevenLabs, Suno, Frame.io, Drive) belong to that client only. Ask the lead editor which account to use before any call, even a free one.\n\n"],
  [/^.*alert\.mjs.*\n(?:\s*Use agent-id.*\n)?/gm, "  Message the lead editor in the team chat. Don't message for routine progress.\n"],
  [/https:\/\/claude\.ai\/(?:code\/)?artifact\/[A-Za-z0-9-]+/g, "(team page: ask the lead editor for the link)"],
  [/https:\/\/drive\.google\.com\/drive\/folders\/[A-Za-z0-9_-]+/g, "the client's Drive folder"],
  [/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g, "the client's account"],
  [/\b(?:in )?Chrome [0-9a-f]{8}\b/g, "in the client's Chrome profile"],
  [/\("PREDATOR" browser in Claude in Chrome\)/g, ""],
  [/C:\\Users\\USER\\/g, ""],
  [/\(Skyline project memory\)/g, "(your trial notes)"],
];
const leftovers = /password\s*[:=]|\bPIN\s*[:=]?\s*\d{4,6}\b|sk-ant-|sk-[A-Za-z0-9]{20,}|AIza[0-9A-Za-z_-]{20,}|alert\.mjs|claude\.ai\/artifact|C:\\Users\\USER/i;

let changed = 0, bad = 0;
const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).forEach((e) => {
  const p = path.join(d, e.name);
  if (e.isDirectory()) return walk(p);
  if (!/\.(md|txt)$/i.test(e.name)) return;
  let t = fs.readFileSync(p, "utf8"); const before = t;
  for (const [re, to] of swaps) t = t.replace(re, to);
  if (t !== before) { fs.writeFileSync(p, t); changed++; console.log("cleaned", p); }
  t.split("\n").forEach((line, i) => { if (leftovers.test(line)) { bad++; console.log(`LEFT ${p}:${i + 1}: ${line.slice(0, 140)}`); } });
});
process.argv.slice(2).forEach(walk);
console.log(`${changed} file(s) cleaned, ${bad} line(s) still need a look`);
process.exit(bad ? 1 : 0);
