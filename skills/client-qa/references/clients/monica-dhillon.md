# Monica F. Dhillon / This New Thing (TNT)

## Who/what
- Monica's channel This New Thing (TNT). Series "Thames Cottage": an architect turns a 2-bed cottage into a 3-bed.
- Part 1 (first floor, 8:03) delivered. Part 2 (A001.2, ground floor + side extension) exported: 12:14, 1080p30, -21 LUFS.
- Shorts are cut from the long videos (curiosity hook, picture on the word, hand-drawn graphics, no real photos).

## Deliverables & specs
- Long video: 1080p30, voice ~-21 LUFS.
- Shorts: vertical, inside the safe zone, within the platform length limit.
- TNT logo animation ends EVERY Monica/TNT video, Shorts too ("Always add the logo animation that we did"). 5 s and 8 s versions exist. Monica's brand only.
  - Long video: at the very end.
  - Shorts: a short vertical version in the safe zone as the closing beat.

## Style rules
- Voice on its own track. Plain cuts: no Light Shift/Mix transitions, no punch-ins on her.
- Music 15 LU under her voice. No music swell on her first words. Cut breaths before her first words.
- 30 s hook: her house drawing paints itself in. Kinetic titles, plans redraw, highlighted words. Red pipe rings (her request).
- No still renders: pencil sketch -> watercolour burst -> moving render. Loop forward/reverse if the render is short.
- One render reveal per room. Plan-led graphics.
- Red line or circle ON the named wall instead of words on plans.
- Keep each caption phrase on one line.
- Long look-down talking: cut to illustrations.
- Match odd takes with a different look (e.g. soft background mask on the recap).
- Soft dissolves at her <-> graphic cuts.
- Tracked callouts on items she names. Paper question cards for her questions.
- CTA cards (comment, like, subscribe) at the end.
- Location tag; previous-video card with "link in comments"; photos beside their rooms.

## Privacy
- No exterior photos except her own.
- Blur the listing address, price and house front.

## QA checklist
- [ ] TNT logo animation at the end (long and Shorts).
- [ ] No still renders; every render moves.
- [ ] Check AI (Gemini) render videos for a hidden cut in the first frames (the kitchen had 3).
- [ ] Music 15 LU under voice, no swell on first words, breaths cut.
- [ ] Red marks sit ON the wall named.
- [ ] Caption phrases on one line.
- [ ] Address, price, house front blurred; no outside exterior photos.
- [ ] Mispoken facts flagged (e.g. she flubbed "4.8 metres long").
- [ ] Shorts: no renders (Shorts rule); logo inside the safe zone.
- [ ] Review files are versioned (e.g. `p1_v5.mp4`) so a browser never shows an old cut.

## Delivery steps
1. Versioned review file for each round.
2. On approval, export the final (1080p30, -21 LUFS).
3. Export = keep the final; delete drafts, graphics renders, pieces and previews.

## Lessons learned
- Part 1 was edited inside her own CapCut draft ("Do not create a new project"): back up the draft first, CapCut on Home (no lock file), edit the draft JSON, reopen, export. For CapCut: cut only in real silence, check with the sentence before, revisions in a new project.
- Part 2 was built in our own pipeline (HyperFrames graphics + assembly), not CapCut. Rebuilding needs a full graphics render.
- Part 2's plan image was a tiled HEIC; convert with ffmpeg without a scale filter.
- Open questions from part 2: no WC render; renders in the long video vs the Shorts no-render rule.
