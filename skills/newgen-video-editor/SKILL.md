---
name: newgen-video-editor
description: Jerome's standing rules for EVERY ProVision video editing job, any client or trial (Ai Videos Co, TAL-LOUIS, Uvola, CDX, Monica, Josiah Krol, Fora, Pura, Hunter Collins, Damian and new ones). How to talk to Jerome, when to decide and when to ask, client accounts (Higgsfield and ElevenLabs are Ai Videos Co only), script-first planning, the timeline with comment bar, safe zone, whole face, captions and fonts, sound, the QC gate, delivery, and what "Export" means. Use at the start of any video edit, revision, trial task, export or delivery, then open the client's own memory file.
---

# ProVision video editor: standing rules

These are Jerome's rules from his reviews, Oct to Nov 2026. They apply to every video job. Client rules live in the Video Editor HQ memory (one file per client). For Ai Videos Co / Dave jobs, also run the skill `aivideos-dave-spot`.

Before you recommend any plan, check it against every rule here and in the client's memory. A "yes" from Jerome does not make a broken rule his fault. Save each new direction to memory the moment he gives it.

## 1. Talking to Jerome
- Reply in short, simple Bisaya + English. **Never Tagalog.** Use sayop (not mali), gi-check (not suriin), parehas (not pareho), kay (not kasi), gyud (not talaga), karon (not ngayon). If you're unsure of a word, use the English one.
- **Show the video, not text.** Every report has three parts: **Gibuhat** (one line on what you did), **Sulod** (one line on what's in the video), and the video attached with SendUserFile (`display: render`, `status: proactive`). Send a 720p preview (crf 22, faststart, about 5 MB) and the full 1080p file. Attach it again even if you sent it before.
- **Progress:** the first item of the pinned task list is a loading bar with minutes left, for example `████░░░░░░ 40% · ~33 min`. Short step lines go under it. Never go quiet during renders.
- **Phone alert** when you need him (a decision, an approval, a file, or you're blocked) or a cut is ready. Don't send one for routine progress:
  Message the lead editor in the team chat. Don't message for routine progress.
- Don't explain why a glitch happened. Fix it, then say so in one line.
- In one client's chat, don't relay news from other clients' sessions. He watches each session himself.
- Say plainly when a style is your own idea and not the client's, and where a logo came from (the client's file or a redraw).

## 2. Decide or ask
- **Decide the creative calls yourself** and keep moving. Don't give him A/B menus. Start free and parallel work without asking. Spend tokens to save time; he hates waiting.
- **Ask first (one short question)** when:
  - an instruction has two meanings, or names something that doesn't exist;
  - a step can't be undone (deleting files, detaching or archiving sessions, moving his sidebar, sending anything);
  - any paid generation, even after a general yes to the plan.
- **Make only what is required.** List the deliverables from the brief or his message before planning. If an extra seems useful, mention it in one line and don't build it.
- **Before every export and before any submission, tick each required deliverable against the brief or instructions** (covers, thumbnails, artwork, copy, time report). Remind Jerome of anything missing. Josiah Krol was submitted without its required covers because nobody checked.
- **Never send anything to a client.** Never sign in for Jerome, and never store or repeat a login given in chat. Keep his file names.

## 3. Accounts and paid tools
- **Every Higgsfield, ElevenLabs, Suno or HeyGen login belongs to one client.** Before any call, even a free one (balance, price check, voice list), name the job's client and confirm the connected account is theirs. If you're unsure, stop and ask. Don't probe other accounts to find out.
- **The connected Higgsfield and ElevenLabs belong to Ai Videos Co (Adam Pragel) only** (confirmed 18 Nov 2026). For every other client or trial, never touch them, not even to look. Use free local tools (whisper) or ask which account to use.
- Other clients' own accounts: CDX uses Joe's ElevenLabs (Joe Kelly voice) in the the client's account Chrome, and TAL-LOUIS uses the louis Chrome profile (Suno, Higgsfield Lunaro). Chrome profile map: `references/tools.md`.
- **Show the prompt before generating.** Write every prompt shot by shot in Adam's format: character blocks, location, props, a global look line, an audio rule, a negative line, then `SHOT 1, 0.000-4.000:` blocks with 3-decimal times. Use one prompt and one generate per clip. Show each SHOT line with its time, what's on screen, prop and name details, and the live price. Generate only after his OK on those exact prompts. If a prompt changes, show it again. Report each spend and the balance after.
- Adam uses the Ai Videos Co Higgsfield too. Read the balance live before any spend, and count only this job's generations as our spend.
- Use current top models only. Check the live catalog before saying a tool can't do something.
- Video job sessions belong in the "Video Editor HQ" sidebar group.

## 4. The job, in order
Full SOP, checklists and QC gates: `references/sop-qc.md`.
1. **Intake.** Read the whole brief, every note, the images inside PDFs and the references. Open the client's memory file and SOP. List the required deliverables.
2. **Script first.** Transcribe every raw clip with whisper, B-roll included (a voice-over can hide in B-roll audio). Write a paper edit around the voice: each VO line → the shots → the on-screen text → the sounds. Study the client's own posts frame by frame for cuts, transitions and captions before styling anything.
3. **Timeline first.** Open or create the job's timeline page before the first cut. Every timeline has the comment bar (`references/tools.md`). Anything for QC goes on it as a video; a plan can sit beside it as a second tab, never instead of it.
4. **Build fast.** Edits from footage use `Documents\aivc-tools\fastedit` (read its README) or the client's own pipeline. Don't write per-job scripts in a scratchpad. Preview stills or a low-res clip of a change before any long render. Test scripts on a few frames first.
   **Light renders (Jerome, 2026-11-19):** the PC has 16 GB RAM, and a full-power render freezes it for everyone. HyperFrames: always `-w 4` (never auto), `-q standard` for previews, `-q high` only for the final. Remotion: `--concurrency=4`. One render at a time on the PC: before starting, check that no other `ffmpeg` or `hyperframes render` is running, and wait for it if one is.
5. **QC gate on the exported file** (section 7). Fix everything, then re-run the checks it touched.
6. **Deliver.** Update the timeline first, then send the video and the 3-part report. Never send anything you flagged as "will fix" unfixed.
7. **Revisions.** Read new timeline comments (ArtifactComments `read`) at the start of each revision turn. A timeline comment is Jerome's word. Batch all notes into one pass. Change only what he named, keep what he praised exactly as it was, and re-check every earlier note. Send one complete version, not drip fixes. Sound-only notes: remix the audio and don't re-render the picture.
8. **"Export"** (his word only, never a peer session's): copy the final as `<name> - Final.mp4`. Permanently delete that job's drafts, version renders, temp renders and old review-page previews, bypassing the Recycle Bin. Don't ask again first. Keep the final, raw footage, client assets, project files, source clips, scripts and notes. Never empty the whole Recycle Bin. Report what was deleted and the GB freed.

## 5. Picture rules
- **Safe zone (9:16):** keep all text, logos, chips, badges, CTAs and cards inside x 60-960, y 250-1500, with text centred at about x 510. Phone UI also covers the top 220, bottom 420 and right 140. Only background picture goes outside. Before every render, draw the red box on key frames (every graphic beat and the end card) and look.
- **The whole face is always visible:** eyes, nose, mouth and chin, at every frame, background people included. Measure the chin on real frames before placing any band, caption or headline; darkening starts below the chin. Inside a band section, punch in from the bottom (about 1.1x, fy 0.9) so the face moves up. Never crop, freeze or hold a presenter's face.
- **Captions:**
  - Time them by forced alignment on the final audio (`aivc-tools\force_align.py`), word for word with the script.
  - Show a phrase once, never in stages. A caption ends on or before the cut.
  - When a headline, name label or graphic already says the words, show no caption.
  - Captions are optional where they'd crowd a face. Wrap long ones to 2 rows; never shrink them.
  - Clean looks only: a hard outline or a clean bar, no soft shadows, nothing touching them.
- **Fonts (default unless the client has a style):** Inter with tight tracking (about -0.06 em) for captions, wide and thin for cinematic titles; Garamond italic for keywords, on their own line under the Inter line; ONE script word for the whole video (the brand or main point), faded in. A script on every keyword is rejected.
- **Graphics:** use motion infographics on the word they illustrate. To illustrate, go full screen; small cards over footage are rejected. Use the client's real logo, badge and brand colour, never an invented one. Make sure the logo and text are legible against what's behind them. Every video gets its own look, music, name reveal and logo ending; never reuse one from another video.
- **Cuts and motion:**
  - Every audio join needs a visible change (a reframe or a camera change), or a same-angle jump reads as a face glitch. No shot under 4-6 frames.
  - Don't stretch moving shots with minterpolate (it warps hands and screens).
  - Keep 24 fps generates at 24 fps; never duplicate frames to reach 30.
  - Never blend frames on people.
  - Zoom-blur, spin, whip pan, film strip and orange logo wipe were rejected. Use soft, clean transitions, hard cuts only on the beat, and no freeze frames.

## 6. Sound rules
- Cut the voice only in real silence. Check about 10 ms RMS around the cut, and verify by transcribing a window that includes the sentence before. Never splice inside a phrase or stretch a voice.
- Voice sits well above everything. Music sits about 9 dB under the voice, is new for every video and matches its purpose and energy. Sound follows the picture (a busy street gets traffic and crowd), and every action gets its sound. Avoid chopped horns or animal sounds, falling sub sweeps, noise bursts, clicks and wind under the voice.
- **ffmpeg bug here:** `adelay` followed by `apad`/`atrim` drops the delay. Always write `adelay=X|X,aresample=async=1:first_pts=0`. After every mix, run `silencedetect` on each stem and check the first sound starts where intended.
- Measure every VO candidate with `node Documents\free247editor\tools\voicemeter.mjs` against the ad targets before Jerome listens (`references/tools.md`).
- Loudness: Ai Videos Co about -14 LUFS, true peak under -1 dB; podcasts about -16 LUFS; Monica about -21 LUFS.

## 7. QC gate (before Jerome sees anything)
Jerome does not want to QA you. Before sending:
- Whole film from frame 0: `Documents\aivc-tools\qc_scan.py` (white, black, frozen runs), a 3 fps contact sheet, and the changed section at 12 fps.
- Flash and short-shot scan. Check the first, second and last frame of every shot, and frames at -0.2, 0 and +0.2 s on every cut and effect.
- `dupcheck.py` (under 2% repeated frames) and `face_text_qc.py` for text on faces. It misses profile heads, so look yourself too.
- Safe-zone box, chin clearance, legibility, spelling and names.
- An ASR transcript of the final against the script: no lost, doubled or clipped words, and no flubs.
- Loudness, plus a decode check: `ffmpeg -v error -i f -f null -`. Vertical files are 1080x1920, H.264 yuv420p bt709.
- Go through the brief line by line (met, changed on purpose, or missed), then the likes and rejects list in `references/taste.md`.
- Say what you could not check (you can't hear playback).

## References
- `references/sop-qc.md`: the full 7-phase production system for AI spots, checklists, QC gates, tool quirks.
- `references/taste.md`: everything Jerome has liked and rejected, by topic.
- `references/tools.md`: timeline and comment bar, Edit Bay, Finals Library, Editors Progress Board, Chrome profile map, motion-skill precedence, voice meter targets.
- Client facts and job status: the Video Editor HQ memory (`MEMORY.md` index).
