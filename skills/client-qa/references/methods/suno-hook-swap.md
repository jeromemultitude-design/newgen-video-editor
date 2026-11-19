# Suno hook swap (replace the first sung hook)

Use when each video needs its own sung hook (H1, H2, H3) on the same song body. First used on TAL-LOUIS ECB#0018/0019.

## Don't
- Don't use Replace Section on a hook window: it returns random lengths (14 s to 8 min) and mumbled words.
- Don't Extend from the intro (before any vocals): Suno invents a new singer ("What happened to the voice?"). A Voice persona doesn't fix it.

## Do
1. Edit > Extend from AFTER the first hook, ~1 s before the body's first word (e.g. 0:11 on one song, 0:19.2 on another), so Suno keeps the singer.
2. Lyrics: `[tag]` + new hook + blank line + `[Verse 1]` + 1-2 body lines. Takes run ~18 s. Ask for clear diction.
3. Splice:
   - Pick the intro point whose sound best matches the take's first 0.8 s (chroma match).
   - Join with a 0.3 s crossfade + 1.5 s gain ramp.
   - New song = intro + extension up to 0.35 s before the body word + the original from there (20/120 ms fades).
   - Find the body word with forced alignment (wav2vec2, ~0.01 s accurate; give it long context text).
   - New word timings = aligned hook words + body words shifted.
4. Verify: run speech recognition on the first ~26 s and read the hook back. Check levels at each junction. The original "and" pickup word is fine to keep.

## Picture
- A shot lip-synced to the original hook only can't carry a new hook. Use non-singing shots for H2/H3 (and avoid known glitch frames in a clip).

## QA checklist
- [ ] Same singer voice through the hook and body.
- [ ] Hook words read back correctly by speech recognition.
- [ ] No level jump or click at the joins.
- [ ] Hook picture has no lip-sync to the old hook.
- [ ] Captions match the new hook words.
