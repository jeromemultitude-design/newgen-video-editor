# Singing character (3D character sings a Suno song)

Use when a client wants animated-musical singing (reference: Frozen's "Do You Want to Build a Snowman"), not music over B-roll. First approved on TAL-LOUIS ECB#0019 (Mariam sings).

## Steps
1. Song first, timed to the shots. Follow the song-lyrics-from-video-first method.
2. Generate each shot in Kling 4.0, 1080p, 9:16, with the client's 3D character element.
   - The character SINGS like a musical heroine: breath in, mouth wide on vowels, brows up, head tilts on the beat, sway, hand gesture.
   - AUDIO: no music, no voice.
   - Adam-style SHOT blocks of 5 s.
3. Cut each shot to 5 s with its song line (ffmpeg), starting ~0.25 s before the first word.
4. Lip sync in Higgsfield Lipsync Studio: Sync Lipsync 3, Temperature 0.8 (click the slider, then arrow keys).
   - Video under 10 MB (crf 18).
   - Audio via the Upload tab, then click its NAME to select it.
   - ~16 cr per 5 s. The price shows only once both inputs are set.
5. Results come back named by UTC time (`hf_<time>`). Match by UTC time or by first-frame similarity (SSIM).
6. Mux the song line back on and check the mouth.

Test cost ~32 cr per 5 s shot (Kling 16.25 + sync ~16).

## Gotchas
- Lipsync Studio has no folders; results don't land in your project folder.
- ONE job at a time. Clicks during a running job drop silently (no charge). Check Usage before clicking again.
- Long prompts freeze the editor ~1 min but still land.

## Singer gender must match the character
- A male voice on a female character was rejected. ECB#0019 came out male despite "female lead".
- In Suno Advanced: set Vocal Gender and put "female vocals" / "male vocals" first in the style.
- Check every song yourself before the edit or lip sync. Never hand the lead a check you can measure.
- Pitch fails in a full mix (a male song measured 242 Hz, same as female takes). Use a speaker embedding instead (e.g. the Chatterbox voice encoder) and compare against a known female and a known male reference. Female takes scored 0.71-0.73 vs male 0.64.
- Fix: Suno Cover, Vocal Gender Female, "female vocals" first, exclude male vocals, Audio Influence 61%. Timing stays within ~2 s.

## QA checklist
- [ ] Lyric sheet approved before any Suno generate.
- [ ] Singer gender measured and matches the character.
- [ ] Every 5 s shot lip-synced; mouth checked against the line.
- [ ] Kling shots have no music or voice baked in.
