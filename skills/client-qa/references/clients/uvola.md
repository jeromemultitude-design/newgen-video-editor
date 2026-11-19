# Uvola

## Who/what
- Mexican supplement direct-response ads (Meta/video). Audience 40-60.
- Reviewers: Gerardo (client, on Frame.io) and Aldrin.
- Cinematic and lively ("these are ads"). Look and clarity decide if they watch and buy.

## Deliverables & specs
- 9:16, 1080x1920.
- Video model: Seedance 2.5 in the client's Ursa workspace only. No other model or account unless the lead names it. One model keeps Don Carlos and every character identical; other accounts belong to other clients.
- VO: native Mexican Spanish (Z/C sound like S). Never Spain Spanish, never an English voice.
- Current VO: the client's APPROVED voice, dry and clean. Voice "mark254" (the voice of approved Batch 19, 3D circulation, 131 Hz documentary), ElevenLabs Multilingual v2, stability 50, similarity 75, speed 1.15 for the body (fits the 59 timing, ~187 wpm like B19).
- VO processing: highpass + light de-ess only. No room tone, no noise. Mix -16 LUFS.
- Music: the track from the brief's reference (INSPO) ad.

## Folder layout
- Don't save files just anywhere. One client folder:
  - `_Uvola Rules/`
  - `<Product>/` (e.g. `Cayenne Pepper/` with `Product Images/` and look notes)
  - `<Product>/<ad no> - <title>/` with `01 Brief`, `02 VO`, `03 Refs`, `04 Clips`, `05 Edit`, `06 Exports`
  - Old `Final/` = first trial; leave it.
- Move downloads into the job folder at once.

## Style rules
- Product look: match the live product page (tryuvola.com/products/pimienta-de-cayena) before prompting and at QC.
  - Small palm-sized white bottle and cap, red "CAYENNE PEPPER", black vertical "UVOLA", red badge column.
  - Always the RED "30 SOFTGELS" band with red softgels. Never green "30 VEGETARIAN CAPSULES" (brief stills are for pose only).
  - Props (e.g. pomada) stay unbranded.
- Prompts: show the prompt first. Options are not a yes to all; ask which. One test at a time.
- Prompt block: HYPER-REALISTIC + real-skin block (pores, wrinkles, sun spots, stubble, no airbrush) + anti-plastic negatives. 2-3 angles per 5 s generate; never repeat frames. Upload the matching VO piece as @Video1.
- Camera: shallow focus, slow push-ins, arcs, low-angle hero bottle, macro, warm light, 3D body fly-throughs.
- Open on a real person, not a 3D intestine. Mexican people 40-60 with real problems. Hands must read as the right person's (Don Carlos).
- New shot or move every 2-3 s. Structure: proof, real bottle, offer, guarantee, CTA.
- Spanish VO: spell numbers out ("trescientos miligramos", "dos por uno"). Keep the script wording; flag odd words. Wrong word: regenerate, then use the pronunciation guide's spelling for that line. Put the pronunciation guide in every VO prompt.
- Captions: copy the reference ad. One word at a time, all yellow, black outline + soft shadow, ~95 px, just below middle, hooks too. Text from the brief, accents in caps, brand "UVOLA". No chips, no time marks.
- Music from the reference: remove the reference's voice with an ffmpeg side channel (L-R to mono). Music ~-24/-25 dB RMS between words. A/B first.
- Match the brief's reference ad, not only past approved ads. Rosabella reference: voice centroid ~2040 Hz (bright), even level, music 7.3 dB under the voice. Our accepted chain (rev7): VO EQ -3 dB @280 Hz, +5.5 dB @3.2 kHz, +6 dB shelf @8 kHz, compressor 5:1, music gap ~7.5 dB.
- Approved Done ads use dry studio TTS with music ~11.5 dB under the voice.

## Safe zone
- Nothing in the top 14% (y < 270), bottom 35% (y > 1248) or 6% each side of 1080x1920.
- Keep text off faces and the product label.

## QA checklist
- [ ] Bottle colour and size right against hands and plates; red still true after the grade.
- [ ] Red "30 SOFTGELS" band, red softgels; no green capsule label; no garbled labels (redo them).
- [ ] Same Don Carlos/characters in every shot; hands match the person.
- [ ] Mexican Spanish pronunciation; numbers spoken as words; no wrong words.
- [ ] Voice is the approved voice, dry, clean. No room tone or noise.
- [ ] Measure the voice-to-music gap (median minus p10 RMS) and the voice centroid against the reference ad before every send.
- [ ] Mix at -16 LUFS.
- [ ] Captions: one word, yellow, outline, ~95 px, just below middle; no time marks.
- [ ] Safe-zone check run; view every red-zone frame before export.
- [ ] Run the pronunciation guide's delivery checklist before sending.

## Delivery steps
1. Export into `06 Exports` of the job folder.
2. Client reviews on Frame.io.
3. Export = keep the final; delete drafts.

## Lessons learned
- Client note: "voice over and audio still not sounding clean, compare with the reference." Our room-tone + noise read as dirty. Use the approved voice, close to the brief.
- An earlier rule (iPhone-in-a-room voice, voice #252-R, speed 1.0, room tone via light echo + pink noise ~-59 dB) is REPLACED by the dry approved voice above.
- Our music was once 15 dB too low. Use the reference track at the levels above.
- To find which voice an approved ad used: download the Done ad's audio from the Frame.io audio stream, voiceprint-match it against all voice previews in the account (Batch 11 matched "batch 11 - cayenne pepper" at 0.979).
- New VO on an old cut: fit tempo per part, max ±6%.
- The lead asks "did you compare with the reference?" Always do it before showing.
