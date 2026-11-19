# CDX Records

## Who/what
- CDX Records, Nashville (cdxrecords.com), Joe Kelly's company. The owner's own label.
- Products: CDX Records artist promotion; CDX TRACtion (radio airplay tracking, cdxtraction.com); CDX Charts.
- Quality bar: the "Henry" product ad (hook, meet the brand, list over real UI, two-beat tagline).

## Accounts
- All CDX work (HeyGen, ElevenLabs, sites, uploads) runs on Joe's CDX account and browser profile only. Never the owner's personal account.
- Check the signed-in account before any sign-in, OAuth or spend. Joe or the lead types passwords.

## Deliverables & specs
- 9:16 vertical, 30 s and 45 s cuts.
- Every CDX VO = ElevenLabs "Joe Kelly" voice clone in Joe's workspace. "Always Joe Kelly." Model eleven_multilingual_v2. First-person, short scripts.
- Never speed a take up. Extend the picture instead.
- Show the script and the price before generating.
- Loudness example: Artist Ad re-mix at -13.7 LUFS.

## Style rules
- Clear hook in the first 3 s: open on the spoken hook. No hit or whoosh under it. Music ~-28 LUFS, voice ~15 dB over it, swell after the hook.
- TRACtion hook: "Is your song really getting played on the radio?"
- Real claims only: "700 U.S. radio stations that play Country, Texas Country, Americana, Album Adult Alternative, Southern Gospel and Positive Country". The website still says 3,000+; don't use it. Hide "3000+ / 100% global" in screenshots.
- cdxtraction.com stream and chart are SAMPLE data. Real wins = CDX Charts cards from cdxrecords.com.
- Artist Ad look: navy, cyan #4FD3FF, gold #F0A93B, radar rings, glass cards, phone pages, cursor clicks, Anton captions word by word (forced-aligned). Fonts from the brand: Anton, Inter Tight, JetBrains Mono. "Flawless smooth." Joe's image. Outro: website + email + phone.
- TRACtion look: iPhone mockups, taps, real CDX Charts, green #6BB344 on dark. Silent zoom, then the hook.
- TRACtion "On Air" look: paper editorial, Big Shoulders font, FM tuner hook, US map, log ticket, strike/stamp cards, Jon Brennan #1 clipping, white iPhone.
- TRACtion end card: "Request access", cdxtraction.com, Joe's email. No "Invite only" line.
- Music used: Mixkit "For Larry" (1139) from 8.12 s.

## QA checklist
- [ ] Work done on Joe's CDX account only.
- [ ] VO is the Joe Kelly clone, not sped up.
- [ ] First 3 s measured: spoken hook clear, no SFX under it, music ~-28 LUFS, voice ~15 dB over.
- [ ] Only the 700-stations claim; no 3,000+; sample data not shown as real results.
- [ ] SFX timing correct across the whole mix (no pile-up at the start).
- [ ] Mix not truncated at the end.
- [ ] After stretching pauses, scene changes re-anchored before the next line.
- [ ] End card correct (no "Invite only").

## Delivery steps
1. Drafts stay in `Renders/` until the lead says "Export".
2. Export = finals into `Final/`; delete drafts.

## Lessons learned
- Artist and fan Jon Brennan: "the music effect makes it hard to hear your first sentence." Hence the clear-hook rule.
- Joe's first take sounded "unreal" (eleven_v4, clipped and sped up). Fix the take on Joe's voice; don't swap voices.
- An adelay bug piled all SFX into the first 1.5 s. Re-mixed with aresample async; the riser was dropped.
- A mix script that truncates the end was replaced; always check the full length after a mix.
- A first-person 45 s take was kept untouched and the picture stretched to fit it.
