# TAL-LOUIS (Noor Qalb)

## Who/what
- Per-video client. Brand Noor Qalb (noorqalb.com, @joinnoorqalb): Arabic name necklaces, gold gift brand. Founder Mariam, contact Louis. Notion owned by Tal Stanislas.
- Direction: "simple caption with more on story telling in B-Roll". Keep the Adam prompt structure (one prompt, one generate, no start image, real motion). Where the client's own best practice is better, theirs wins.
- Scripts come from the lead. Each script gets a copy QA pass before any prompt or spend. Never bring in another client's facts.
- Reuse nothing from Ai Videos Co. Never relay TAL-LOUIS news into other client chats.

## Accounts and tools
- Use only the accounts assigned to this client. Never another client's Higgsfield or ElevenLabs. If the account is unclear, make no call at all.
- Never repeat, store or type logins. The lead signs in.
- Higgsfield: work only in the project assigned to you, one folder per video (Her Name, Send Love That Travels, Name to Necklace). Never My Generations. Don't touch other editors' projects.
- The team shares one Higgsfield login and burns credits at night. Re-check the balance after every spend and log it.
- "Use the latest model always." Check the live model list. Prices seen 6 Nov 2026: Seedance 2.5 16 cr/s at 1080p, 7 cr/s at 720p, 4-30 s; Kling 4.0 10 s 1080p 32.5 cr; GPT Image 2.6 Sunburst 2.75 cr High 2K.
- Client elements (Cinema Studio, 9:16): @mariam (beige sweater, bottom of list), @amina (photoreal only, mid-30s to 40, no hijab), @emeraldbox, @nqshop, @nqshop_empty, @nqshop_emptied, @nqshop_dusk, @nqbackroom, @mariampxr (the only 3D character), @mariam_necklace.
- Pick exactly "mariam" and "nqshop". Never make a new Mariam or upload her photo. New elements (e.g. a 3D Amina) only with Louis's okay.
- Cheap route from the client PDF (GPT Image ~6.5 cr, Grok Imagine 1.5 Lite ~5 cr via START FRAME) is for look tests only. Cinema Studio video is 70-90 cr.
- Client prompt style: Kling single shots 5-10 s, start image, the line + "very emotionally and naturally", Roman Urdu notes, reruns 2-3x, `[Ref: NQ-name-<name>.png]`, voice block, acting on the word, long negatives, "NQ V84 Line 8" labels, locked-off iPhone for founder shots. Use Adam structure for story films; theirs for repairs and push-ins. Borrow "already in motion from frame 1".
- Audio: ElevenLabs on a Free plan has no commercial licence, so no delivery VO or music from it (needs Starter or higher). VO = Higgsfield Audio voice "Nadine" (~0.46 cr for hooks, ~4.6 cr a whole script). Music = Suno on the client's Premier plan (commercial rights). Suno CDN links return 403; use the Download menu.

## Deliverables & specs
- Per video: 9:16, 1080x1920, H.264.
- Each video has its own 3 hooks. One Frame.io file each, named `<code>.H1.mp4`, `.H2`, `.H3`.
- Hook in the first 2 s. Write 2-3 extra hooks per script (the client tests hooks).
- One name per film (ECB#0018 and ECB#0019 use ياسمين / Yasmin).
- Loudness ~-14 LUFS. Quiet close sound.

## Style rules
- Look: glossy stylised 3D feature film (client sample 3, "the Lee film" frame). Elegant adults, big glossy eyes, sharp brows, winged liner, warm lamp light. Palette browns, creams, gold, emerald.
- Luxurious and enticing: emerald velvet, ivory, editorial close-ups, "the moment before she reads her name". The necklace is the star.
- Prompt wording: "3D animated feature film". Never "Pixar" or "Frozen".
- Show characters full body before making video.
- Story first, product payoff at the end.
- Captions: one word at a time, white bold sans, ~75% down, no box, no shadow.
- Song captions: exactly what is sung. Keep repeats, drop skipped words, always spell "Noor Qalb".
- Arabic name: plain font, no calligraphy fonts. Render the name as an image, attach it, prompt GPT Image "copy every letter exactly".
- Pendant: one solid piece; "every letter and dot is physically joined into one solid connected piece, nothing floating". Each break (after ا, د, ر, و) gets one THIN gold bridge at letter mid-height. No baseline bar, not at top or bottom, letters unchanged. For ياسمين: alif stem to the first tooth of س. Dots fused. Jump rings on both ends.
- Box: gold-foil "NOOR QALB" centred on every emerald lid. EB Garamond caps, QALB in italic, wider spacing. Patch in the real wordmark if the AI warps it.
- Claims: only "name in Arabic, joined letters, 18k gold plated, checked by a native reader". Live ads conflict (closing sale, 130k vs 500k customers, 11k vs 50k orders, charity, was-prices). Never repeat those; raise with Louis.
- Founder to-camera (V00): no price, no logo, face first.

## QA checklist
- [ ] Every Arabic letter correct. A wrong letter is a serious fault; every name needs an Arabic reader's sign-off.
- [ ] Pendant reference shown and approved before spend (two tries were rejected).
- [ ] Pendant letters joined by thin mid-height bridges, dots fused, rings both ends.
- [ ] Box lid wordmark correct and not warped; no "NOORQALB" growing on the box.
- [ ] Check frame by frame for mirrored shots (hflip) and Arabic scrambling as the pendant turns (Kling faults).
- [ ] Captions match the sung/spoken words exactly; "Noor Qalb" spelled right.
- [ ] Singer gender matches the character on screen (see singing-character method).
- [ ] Only approved claims.
- [ ] 3 hooks per video, each its own file, correct names.
- [ ] 9:16 1080x1920 H.264, ~-14 LUFS.
- [ ] A voice mix with nothing at 0:00 has silence or music added at the start.

## Delivery steps
1. Upload each file (H1, H2, H3) to Frame.io. Large finals are dragged in by hand.
2. Make a share link with Allow downloads ON.
3. Paste it in the Notion card's Final Videos field and move the card to Edit Review.
4. The lead sends. Editors never send to the client.
5. Export = keep finals; delete drafts and caches. Keep generated clips, music and scripts.

## Lessons learned
- Recipe that won (ECB#0018 "Send Love That Travels"): the real noorqalb.com page tracked onto a hand-held phone, ending on the real site.
- Hook ECB#0018 H3 "gift on top of the van" was rejected. Redone as a globe + Yasmin hugging the box.
- An "All credits used" warning once still generated. Check Usage before re-clicking.
- After changing a source clip, clear that segment's cache before rebuilding, or the old segment is reused.
- Songs made straight from the script wasted 6 generates. Write lyrics from the cut first (see song-lyrics method).
