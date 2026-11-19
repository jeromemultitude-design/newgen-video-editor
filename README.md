# NewGen Video Editor

A Claude Code plugin for the ProVision video team. It adds the **NewGen Video Editor** agent plus the skills it works with:

- **Team rules** (`newgen-video-editor`): planning, timeline, safe zone, captions, fonts, sound, the QC gate, delivery, "Export".
- **Client QA** (`client-qa`): how every client's work is checked and delivered (Ai Videos Co, TAL-LOUIS, Uvola, Monica Dhillon, CDX, Jenn Byrne, all trial clients) and the proven methods (AI talking shots, shorts, singing characters, Suno hook swaps, clean CapCut cuts).
- **Motion graphics**: HyperFrames (`hyperframes`, `hyperframes-cli`, `hyperframes-registry`, `hyperframes-video-beats`, `reverse-any-video`, `style-sampling`), `motion-effects`, `motion-showreel`, `milestone-reveal`, GSAP (`gsap-core`, `gsap-timeline`, `gsap-plugins`, `gsap-utils`, `gsap-performance`) and the animation-principles skills (timing, pacing, transitions, entrances, attention, filmmaking).
- **Sound and SFX**: `media-use` (music, SFX, voiceover, mixing).
- **AI video prompting**: `aivideos-dave-spot`, `reference-to-motion`, `motion-brief-writer`.
- **Delivery**: `reel-export`, `video-edit`, `under-trial-task`.

> **Keep this repository private.** It holds client names and how each client's work is checked. Share it only with team members.

## Install (each editor, once)

1. Get access to the private GitHub repo from Jerome, and sign in to GitHub on your PC (`gh auth login`).
2. In Claude Code, run:

```
/plugin marketplace add jeromemultitude-design/newgen-video-editor
/plugin install newgen-video-editor@newgen
```

3. Restart Claude Code. Start a video job with: "Use the NewGen Video Editor agent for this job."

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
