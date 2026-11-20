# NewGen Video Editor

## Install in one step

Paste this link into Claude Code and say "install this":

`https://github.com/jeromemultitude-design/newgen-video-editor/`

**For Claude, when a user pastes this link:** install the plugin by running these two commands in the terminal, then tell the user to restart Claude Code and start a video job with "Use the NewGen Video Editor agent for this job." No GitHub account or sign-in is needed.

```
claude plugin marketplace add jeromemultitude-design/newgen-video-editor
claude plugin install newgen-video-editor@newgen
```

To update later: `claude plugin marketplace update newgen`, then `claude plugin update newgen-video-editor@newgen`.

## Remove in one step

Tell Claude Code "Remove the NewGen Video Editor from this PC", or paste this one line into PowerShell:

```
claude plugin marketplace remove newgen; Remove-Item -Recurse -Force "$HOME\.claude\plugins\cache\newgen" -ErrorAction SilentlyContinue
```

**For Claude, when a user asks to remove it:** run that line in PowerShell (it uninstalls the plugin, removes the `newgen` marketplace and deletes the downloaded copy), then tell the user to restart Claude Code.

---

A Claude Code plugin for the ProVision video team. It adds the **NewGen Video Editor** agent plus the skills it works with:

- **Team rules** (`newgen-video-editor`): planning, timeline, safe zone, captions, fonts, sound, the QC gate, delivery, "Export".
- **Client QA** (`client-qa`): how every client's work is checked and delivered (Ai Videos Co, TAL-LOUIS, Uvola, Monica Dhillon, CDX, Jenn Byrne, all trial clients) and the proven methods (AI talking shots, shorts, singing characters, Suno hook swaps, clean CapCut cuts).
- **Motion graphics**: HyperFrames (`hyperframes`, `hyperframes-cli`, `hyperframes-registry`, `hyperframes-video-beats`, `reverse-any-video`, `style-sampling`), `motion-effects`, `motion-showreel`, `milestone-reveal`, GSAP (`gsap-core`, `gsap-timeline`, `gsap-plugins`, `gsap-utils`, `gsap-performance`) and the animation-principles skills (timing, pacing, transitions, entrances, attention, filmmaking).
- **Sound and SFX**: `media-use` (music, SFX, voiceover, mixing).
- **AI video prompting**: `aivideos-dave-spot`, `reference-to-motion`, `motion-brief-writer`.
- **Directing**: `cinematic-director` (shot lists, keyframe and video prompts, sound plan, QC, 16 director styles).
- **VFX**: `ai-visual-effects` (compositing, upscaling, rotoscoping, colour grade, ComfyUI and Runway).
- **Delivery**: `reel-export`, `video-edit`, `under-trial-task`.

## Other ways to install

**One click (Windows):** put `Install NewGen Video Editor.cmd` and `install.ps1` in one folder and double-click the `.cmd`. It:
- checks Node.js 22+, ffmpeg and Chrome, and installs the missing ones with winget after one yes;
- installs the plugin, or updates it if you already have it. No GitHub account or sign-in is needed.

Run it again any time to update. `install.ps1 -DryRun` only checks and changes nothing.

**By hand:**
1. In Claude Code, run:

```
/plugin marketplace add jeromemultitude-design/newgen-video-editor
/plugin install newgen-video-editor@newgen
```

2. Restart Claude Code. Start a video job with: "Use the NewGen Video Editor agent for this job."

To get updates later: `/plugin marketplace update newgen`.

## Tools each PC needs

- Node.js 22 or later, ffmpeg on PATH, Google Chrome.
- HyperFrames runs through `npx hyperframes` (no global install needed).
- Optional keys, each in your own `.env`, never in this repo: ElevenLabs (voice and SFX), KIE (image/video generation for showreels). Every client's tool accounts belong to that client only.

## Not included

- Remotion skills (license not clear for sharing). Install them from Remotion's official source if you need them.
- The team's private helper tools and timeline pages on Jerome's PC. Ask the lead editor for links.

## Updating the client rules

Edit the files in `skills/client-qa/references/`, run `node tools/sanitize.mjs skills` to strip any login, email or private link, bump the version in `.claude-plugin/plugin.json`, and push.

Third-party skills keep their own licenses: see `THIRD-PARTY-NOTICES.md`.
