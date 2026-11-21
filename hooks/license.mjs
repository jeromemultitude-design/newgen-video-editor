// NewGen Video Editor access check, run when Claude Code starts. It sends this PC's personal-link key, a random device
// id and the computer name to ProVision. If the link was cut off or isn't valid, the plugin removes itself from this PC.
// If ProVision can't be reached (offline), nothing happens.
import { readFileSync, writeFileSync, rmSync } from "node:fs";
import { join } from "node:path";
import { homedir, hostname } from "node:os";
import { randomUUID } from "node:crypto";
import { execFileSync } from "node:child_process";

const CHECK = "https://skyline.provisionph.workers.dev/v/check";
const file = process.env.NEWGEN_LICENSE_FILE || join(homedir(), ".claude", "newgen-license.json");
const dryRun = Boolean(process.env.NEWGEN_DRY_RUN); // for testing: say what would be removed, remove nothing

let lic = {};
try { lic = JSON.parse(readFileSync(file, "utf8").replace(/^﻿/, "")); } catch { /* no key on this PC */ }

let answer;
if (!lic.token) answer = { ok: false, message: "This PC has no NewGen personal link. Ask ProVision for yours." };
else {
  if (!lic.device) { lic.device = randomUUID(); try { writeFileSync(file, JSON.stringify(lic)); } catch {} }
  try {
    const r = await fetch(CHECK, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ token: lic.token, device: lic.device, computer: process.env.COMPUTERNAME || hostname() }),
      signal: AbortSignal.timeout(8000),
    });
    answer = await r.json();
  } catch { process.exit(0); } // offline: keep working
}
if (answer.ok) process.exit(0);

const plugins = join(homedir(), ".claude", "plugins");
const remove = () => {
  try { execFileSync("claude", ["plugin", "marketplace", "remove", "newgen"], { stdio: "ignore", timeout: 20000, shell: true }); } catch { /* the folders below still go */ }
  for (const p of [join(plugins, "cache", "newgen"), join(plugins, "marketplaces", "newgen"), file]) {
    try { rmSync(p, { recursive: true, force: true }); } catch {}
  }
};
if (dryRun) console.log(`[dry run] would remove: newgen marketplace, ${join(plugins, "cache", "newgen")}, ${join(plugins, "marketplaces", "newgen")}, ${file}`);
else remove();
console.log(`NewGen Video Editor: ${answer.message} It has been removed from this PC. Tell the user this, and don't use the NewGen Video Editor agent or its skills.`);
