# Master SOP, production system and QC gates

From the memory `video-edit-sop-qc` (5-17 Nov 2026), compressed 18 Nov 2026. A round is not done until every gate passes on the exported file.

Why this exists: Monica went from v1 to v13 (my QC passed v8, then Jerome found 9 faults). The Dave ad took 9 drafts and 1,187 credits. Dave 04 took 5 hours and 17 versions. The goal is one plan, one generate, one edit, one QC and one send: a first full cut in about 90 minutes (30 minutes from footage) and no more than 3 versions.

## Production system for AI spots
**Phase 1, Intake**
- Open the timeline.
- Read the brief, the client memory, `taste.md` and Adam's prompt method.
- Search Downloads and the job folder for the newest VO, and force-align it to the script before saying anything is missing.
- Study the reference frame by frame from local copies: transitions, mascot or twin reveal, SFX. Say before opening any website, and close it after.

**Phase 2, One-page plan, shown once before any spend**
- Beat sheet, one row per shot: time, picture, VO words, caption, motion graphic, SFX, transition, music moment.
- Brief table: every line marked will meet, changed by a standing direction, or conflict. Decide conflicts here, once.
- Look sheet unique to this spot: name reveal, transition, keyword graphics, logo ending, music genre, SFX palette. Check it against the used register below.
- Transitions: 3 options on a 5 s low-res clip now. Pick one main idea; hard cuts on the beat everywhere else.
- Spend list with prices. Get one yes.

**Phase 3, Assets and generate, in parallel**
- Put the reveals, transitions, scans and actions into the one prompt, so the edit stays light.
- Check every reference image at full size for real logos, gibberish, wrong role or wardrobe, look-alikes and brief colours. Write "plain, no badge" into vehicle prompts.
- While the generate runs, do the music, SFX, graphics scaffold and caption list from the real VO.

**Phase 4, Picture lock**
- Check every shot at full size against the brief, and check timing drift with forced alignment.
- Write one repair prompt for all faulty shots. Reuse paid clips first.
- Keep the native 24 fps. Paint out logos and signs across every shot.
- Slide whole VO phrases to the lips: words with visible lips within about 0.12 s, measured per word with stem vs generate ASR.
- Cut silent gaps. Add a slow push-in where the generate goes still.

**Phase 5, Graphics and sound, in one pass**
- Captions: one rule. Labels stay clear of hands, faces and highlights. Light or wipe layers sit above the text. A name label never stacks with a caption.
- Sound by stems (voice, music, SFX, bed): the hook or honk first, a clear gap, then the voice. In the intro the voice sits at least 10 dB above everything else. Lift the music where the voice stops. Master through a delay, limiter and trim chain.

**Phase 6, QC gate** (below), plus one independent reviewer subagent. Give it the brief and the gate list, not your conclusions.

**Phase 7, Deliver:** update the timeline, send the file, then a short report.

**Used register: never repeat across Ai Videos Co spots**
- 01: funk; logo bar, then an end card with stripes.
- 02: neo-soul to boom-bap; lime-bar name; light flash; gold hourglass blur on LATER; stacked logo with shine; scan brackets; LOUDER zoom shake.
- 04: stomp-clap rock 100 BPM; van-door name; van drive-by; warm bloom; full-body mesh scan; blue hologram mascot; van reveals the logo.
- 06: desert twang to soul-disco; neon tube name (later rejected); postcard flip; wind-blown wood letters; neon sign logo.
- Rejected: zoom blur, spin, orange logo wipe, whip pan, film strip, sound-wave bars, twin shadow step-out.

## Checklist, every job
- Before planning: open the timeline, read `taste.md`, the client memory and the whole brief (quote the lines for tone, on-screen text, audio, cast colours and the end card), find the newest VO and assets, and study the reference.
- Before any spend: use Adam's structure (one prompt, one generate, all shots, no start image). Every presenter shot moves and every background is alive. Check every reference at full size. Show the prompt and price and get a clear yes.
- After generating: check every shot at full size for logos, signs, subtitles, missing or floating people, reversed crowd motion, and word timing.
- Before calling an export done: run the whole QC gate, update the timeline, memory and the taste list, and say what you could not check.

## SOP details
1. **Intake.** Make a numbered checklist of every note. Get a word-level transcript and a frame at each note's timecode. If a screenshot arrives with no words, ask what it means. Quote the brief when asked about it.
2. **Conflicts.** If Jerome's instruction contradicts a client note or the brief, say so in one line. Never silently reverse a note.
3. **Ambiguity.** Creative "more/less" notes: make the smallest change and flag it. Unclear instructions or names: ask (SKILL section 2).
4. **References before style.** Copy the reference's few styles; never invent a gimmick per keyword ("SLOP").
5. **AI shot plan.** Each shot's action, words, location, on-screen text and length; action lines are requirements. Reuse paid shots first.
6. **AI models.** Check the live catalog. Use current top models only, never chosen by price. Know whether a model keeps or re-performs supplied audio. Ai Videos Co runs at 720p drafts; finals use a true 1080p render, never a local upscale.
7. **Spend.** Cheapest test first (one hard shot or one track). "Save credits" means one generation, not a batch. Log the credits and the balance.
8. **Timeline plan.** Map old times to new. List what each change knocks on: captions, bars, music, overlays.
9. **Build (CapCut).** Go to Home first and confirm there's no `.locked`. Diff the saved timeline for Jerome's own edits, back up, and dry-run for overlaps. Use new file names each round; never overwrite media in use. Revisions go in a new project unless told otherwise.
10. **Music.** Use a real track, never a synthesized bed on client work, unless the client memory says so. Measure it (`measure_energy.py`, `track_check.py`), pick a BPM so beats land on cuts, cut it to the picture (`mix4.py`), and land it on the first word.
11. **Export.** Code renders: master encode, H.264 yuv420p bt709, AAC 320k. CapCut: H.264 1080p, sync to space OFF, confirm the name field, close the share dialog.
12. **Final.** Copy as `<name> - Final.mp4`, verify it, and list what is left for Jerome.

## QC gates (on the EXPORT, never the render)
- **File:** codec, size, fps, frame count and duration as expected; 0 decode errors.
- **Audio:** project loudness. The voice is clear over music. The transcript matches the script, and every requested cut is gone. Listen for flubs; Whisper can merge them away.
- **Every note and brief line:** a frame at its timecode, marked pass, missed, or changed on purpose.
- **Flash scan:** per-frame brightness (`signalstats` YAVG); explain every jump. Use blackdetect and freezedetect where useful.
- **Every join:** frames at -0.2, 0 and +0.2 s. Look for ghosted or warped faces, blank flashes, jumps and bad first frames.
- **Full-res crops** for anything traced, aligned or composited. After any frame repair, compare every repaired frame to the source.
- **On-screen text:** legible, no overlap, inside the safe zone, spelled right, on the spoken word, not crossing a cut.
- **Picture on the word:** every noun the voice names is on screen at that moment.
- **AI picture:** no stray gear, logos, burned-in subtitles, gibberish signs, morphs or a wrong mouth speaking. Do a realism check: compare non-presenter people and rooms with the client's real ads.
- **Story:** nothing revealed early, and no leftovers from old versions. Do the first 10 s grip?
- **Project:** zero missing media, the old project untouched, a backup exists.

## Tool quirks on this PC
- ffmpeg: `drawtext` needs `fontfile=arial.ttf` in the cwd and can crash. There's no glob input. Flatten alpha PNGs to JPG before tiling. Use `-fps_mode vfr`, not `-vsync`. Write 0.45, not .45.
- Remove single bad frames with `select='not(eq(n\,17))',fps=30` (`freezeframes` fails). Chain steps with `&&`.
- `rm` with relative globs is blocked; use new folders. Write scripts with the Write tool, not apostrophe heredocs. There's no pdftoppm: use `pdftotext` and pull the JPEG streams with node.
- HyperFrames: `--format mov` for alpha; absolute-position SVG overlays; about 2 min with `--browser-gpu`. Patch a few frames with `overlay=enable='between(n,a,b)'` instead of re-rendering.
- Repair a finished 30 fps file made from 24 fps sources: `aivc-tools\fix24.py`, then `fix24b.py`.
