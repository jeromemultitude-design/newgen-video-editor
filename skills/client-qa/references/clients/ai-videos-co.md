# Ai Videos Co (aivideos.co)

## Who / what
- Client: Adam Pragel, Ai Videos Co. Makes AI video ads with digital twins. Nick on Adam's team approves scripts and assigns presenters.
- Dave = David Pragel's digital twin, the usual presenter. Adam sometimes presents himself (S003). Some series use fictional presenters (Sofia, Marcus Bell, Jenna Cole).
- Tasks arrive on the ArcLight task portal (help.arclightcontent.com/admin). Finished work is submitted there too.
- Project standard (Adam): "Hyper-realistic, Cinematic and always follows the brief with a lot of Keen to details."
- Work done so far:
  - Dave series (9 spots planned): Business Owners Ad, 01 Who Likes Making Content, 02 Louder, 04 The Trucks, 06 Thursday Night.
  - Alignable A4 "Why I Stopped Knocking Doors" (Dave; profile and group cuts).
  - Loan Officer Series LO1-LO5 (fictional Marcus Bell, Cedarline Home Loans).
  - Brightwater Motors dealer walkarounds (fictional dealer): T03 2021 Tacoma (Dave), T04 2020 4Runner (Sofia).
  - S003 "Explain It Once" (AiVideos.co own content, Adam presents).
- Client accounts: Higgsfield and ElevenLabs used on these jobs are Adam's own accounts. Use them only for Ai Videos Co. The Higgsfield credits are shared with Adam's team: read the balance live and count a job's spend from its own generations. Adam checks credit spend against the screen, so be ready to explain each model and cost.

## Deliverables & specs
- Usually 9:16, 1080p. Finals at 24 fps (some older spots also have a 30 fps version).
- Loudness of past finals: about -13.7 to -16.4 LUFS integrated. Recent target about -14.4.
- Safe zone (1080x1920): x 60-960, y 250-1500. All text, labels and logos inside it.
- File names:
  - Dave series: `AiVideos.co x Dave Pragel  NN Title 24fps.mp4` (two spaces before the number).
  - Loan officers: `AiVideos.co x Loan Officer Series  LOn <Title> 24fps.mp4`.
  - Alignable: `AiVideos.co x Alignable  A4 <Title> - Version 2 - Profile|Group 24fps.mp4`.
  - Brightwater: `Brightwater Motors - <Year Make Model Trim> - <Presenter> Walkaround.mp4`.
  - If the lead renames a final, keep the lead's name.
- Alignable cuts:
  - Profile cut: label DAVID PRAGEL | AIVIDEOS.CO plus a VIRTUAL TWIN tag; end card with "Message David".
  - Group cut: no end card, no logo, no URL.
- Loan Officer compliance:
  - No rates, APRs, payment or down payment amounts. No guarantee language. No text inside generated shots.
  - End card: lender logo, names, NMLS, Equal Housing Opportunity logo, fine print.
  - Demo numbers only (fictional): NMLS #9481736, company #9620358, Jenna Cole licence 9573104. QR code is a non-scanning DEMO placeholder (Adam's call).
  - Look: Cedarline green and gold from the client's brand kit.
  - LO4 has a co-branded end card with headshots (Marcus + Jenna Cole of Tidewell Realty).
- Brightwater Motors rules:
  - The car must match the client's photos exactly.
  - Price on the spec card only. No financing talk.
  - Blank licence plates. Remove house numbers.
  - Footer drops "AI-generated presenter" (lead's decision for both cars).
  - Logo comes from the fact sheet PDF (render the vector) or the spec card. There is no separate logo file.
  - Cinematic, hyper-realistic direction beats the brief's "plain inventory look, eye level, steady".
  - No static photo shots. Captions on. Motion graphics for every feature named.
  - Dave's Brightwater outfit (every Brightwater Dave car): navy suit, white open-collar shirt, no tie, brown belt, brown shoes.
  - Sofia (fictional): early 30s, long dark-brown waves, navy blazer, white blouse, small gold necklace, dark trousers. Voice: ElevenLabs library voice "Marina", v4, stability/similarity 50/75. Reuse the same look and voice for her next car.
  - 4Runner specifics: odometer 92,520 on screen, "about ninety-two thousand" in the read. NOT a one-owner car. Don't feature the replaced windshield or the ADAS light.
- S003 / Adam-as-presenter:
  - Use only real photos of Adam. Never Dave refs or the Dave element.
  - Voice: ElevenLabs "Adam new" (an instant clone in Adam's account), Eleven v4, 50/75, no tags. Script tone: calm teacher energy, a touch of humour.
  - Outfit: casual long sleeve, not a polo (light-blue oxford, open collar, sleeves rolled; navy chinos; brown leather sneakers).
  - An approved look preview image may go in as an outfit/scene ref beside the real face photos. The face always comes from the real photos.
  - "Hyper-realistic in all frames": real skin pores, natural light, no plastic or AI look, same face in every frame. Put it in the GLOBAL prompt block.
  - House style to match: the published AiVideos.co reel with the Adam twin (facebook.com/reel/1736550981518821, 31.5 s). Several real locations, a digital-particle twin effect, ONE-WORD captions (bold italic, white or orange, centred on the chest), orange "PROFESSIONAL VIDEO ADS" super on a black box, end card = aivideos.co logo with "COMMERCIAL-GRADE AI VIDEO PRODUCTION".

## Production rules
- Plan before prompt. Before any prompt, show: (a) the VO, playable; (b) a ref board per shot (which Dave, outfit, location, other characters); (c) the planned shots as frame pictures (sketches or stills from real refs, not generates). Then prompt, then price, then generate. No spend before the lead's OK.
- Write prompts like a film director: camera move, lens feel, blocking, eyeline, how each shot transitions, the motivation for each move.
- Dave references:
  - Real photos and real video of Dave only. Never a generated Dave image (generated refs drift his face, outfit and eye colour). Some older generated suit/tuxedo sheets and a "realism" video are banned.
  - Every prompt says `Dave's real face: <<<image_n>>>` and "Dave's eyes are blue."
  - The Higgsfield element `dave-pragel_v1` (real selfie, face only) may be used. In API/tool calls, put the element's id in `<<<...>>>` inside the prompt; `@dave-pragel_v1` works only on the website. It works on Nano Banana Pro/2, GPT Image 2, Seedream, Cinema Studio, Seedance 2.0 and 2.5. Elements cannot be renamed or edited.
  - The Higgsfield element named just "dave" is a different man (Metro Realty polo). Never use it.
- Voice:
  - Every Adam or Dave voice is made in ElevenLabs (David Pragel voice for Dave), including revisions of old finals. Seedance or Higgsfield voices are never the final audio.
  - Exception: a finished VO Adam supplies in the brief stays as supplied (e.g. Fish Audio VOs on the Jenn Byrne jobs).
  - Use only Adam's ElevenLabs account (it holds the David Pragel voice). Other ElevenLabs accounts in the browser belong to other clients or have no Dave voice: never use them.
  - Read an account's history before uploading anything to it.
- Adam's prompt format:
  - Copy Adam's prompt method exactly. Check his newest prompt in his generation history before each spot.
  - ONE prompt, ONE generate for the whole spot, cutaways included. Never split to save credits or reuse clips unless the lead asks or approves (S003 was approved as two generates: presenter + B-roll).
  - No start image.
  - Every shot says "There is only one Dave in this shot." Voiceover cutaways say the mouth stays closed.
  - Add "NO SUBTITLES OR CAPTIONS" to the global line.
  - "Higgsfield first": write every action, reveal, transition and hold into the prompt, so the edit is only captions, sound and end card. Picture faults go to a repair prompt before heavy local compositing.
- Models: Seedance 2.5 for Dave and all speaking shots. Kling 4.0 for B-roll, same prompt structure. Never Kling 3.0. Never pick a model on price.
- Real motion: Adam never wants "still images talking". Real motion beats any "locked-off" or "standing" line in a brief; raise the conflict before any prompt or spend. Every shot block writes Dave's body movement, a hand gesture, pedestrians in both directions, and workers visibly doing the job (dust, tools).
- Twin beat: the clone splits out and waves with its left hand; Dave points at it, then moves to frame left.
- Pace: Spot 06 is the edit style to repeat, but faster. Target a first cut in about 60 min, 2 versions. Plan on day one: full spoken captions, an IG-style post where social appears, a clean name tag, a subtle logo light, a planned 2 s hook, music matched to the energy.
- Workflow:
  - Batch every fix into one render.
  - Test scripts on a few frames before a full render.
  - Send a 10 s preview for timing before a full render.
  - Reuse paid clips before proposing a new generate.
  - Ask before reusing anything from another spot.
  - Higgsfield 480p draft -> finalize: finalize needs a non-empty prompt and the same media inputs.

## Style rules
**Sound**
- Keep the presenter's original VO tone. Never ship a lip-sync model's re-performed audio.
- Never time-stretch the voice (it sounded "drunk"). Slide whole phrases; cut only in silence.
- No whoosh SFX on transitions. Exception: a soft airy drift-away sound when props fade out. (S003 v2 used icon whooshes the lead asked for.)
- Music stronger than a soft bed. No code-made music; use a licensed or generated track. A repeating SFX (e.g. jackhammer) stays at one volume. Duck music under the voice.

**Captions**
- Timing from forced alignment on the final audio, never from a generic ASR's word times.
- A caption about a person stays on that person's shot.
- Position: on the chest, one position per shot. Never on the face, mouth or B-roll subject. Measure the face and set the caption top below the chin.
- Use only the reference ads' few styles: hard outline or glow. Rejected: plain dark pill captions, soft shadows, captions moving around, a different gimmick per keyword ("slop").
- Problem words may get same-size icons with matching in/out motion.
- Negation lists (NO CAMERAS / NO CREW) get a cancel effect (strike or break apart).
- Boxed label: the big word spans the full width of the line above (COMMERCIAL-GRADE / VIDEO).
- Dave series: full captions on every line, none on close-ups (Spot 06). S003/Adam twin style: one-word captions.

**Labels and end card**
- Name label: name over website (DAVID PRAGEL / www.aivideos.co), bottom left, in the safe zone, readable. Real variations, not templated. No red ribbons; use a clean card or lower third (Spot 06: white tag with orange bar).
- End card: one logo only, no "aivideos.co" text above the logo bar. The logo enters with clean motion. Never freeze on a pose and cut to black.
- Brightwater end card recipe (approved): car cutout drives forward in; presenter cutout from a generated frame; real logo; tagline, CTA with phone icon, footer; floor reflection; no spotlight behind the presenter.
- Alignable style: Inter + Garamond italic, tight letter shadow, push-in lines, logo slow zoom on a blurred background.
- Loan Officer: the lead prefers designed screens (house photo, prices, UI cards) over plain sign text.

**Picture**
- No freeze frames. Never fill time with duplicated frames (caused a stutter on Louder v3).
- Reject B-roll with unnatural motion. Don't speed-ramp people.
- Transitions: keep it simple (light dissolve / light flash). Rejected: zoom-blur, spin ("very bad"), film strip. When a build drags, do the simple edit. Show options before rendering.
- No platform UI if the brief bans it; if you use an IG card, flag it.

## QA checklist (tick before delivery)
- [ ] Every line checked against the brief. Quote the brief line when asked "is this in the brief?". Reference ads checked before styling.
- [ ] Any change from the brief is flagged to the lead (e.g. dollar figures in a series that bans them, platform UI, music stronger than "light").
- [ ] After each generate, checked at full size: burned-in subtitles, gibberish text on props/signs/badges, people walking backwards, word timing against the VO.
- [ ] Dave: real face, blue eyes, one Dave per shot, correct outfit for the job. Adam: real face, same in every frame.
- [ ] Hyper-realistic in every frame: no plastic skin, no AI look.
- [ ] Real motion in every shot. No still-image talking heads, no freeze frames, no duplicated frames, no speed-ramped people.
- [ ] Voice is ElevenLabs (or the client-supplied VO). Not stretched. No lip-sync model audio.
- [ ] Lip sync: every word present (run ASR on the final), lips on the words.
- [ ] Captions from forced alignment; on the chest, below the chin; never on faces or B-roll subjects; approved style only.
- [ ] All text, labels and logos inside the safe zone (x 60-960, y 250-1500).
- [ ] Name label correct; end card has one logo, clean logo motion, no freeze-to-black.
- [ ] No white, black or frozen frames (except an intended end-card hold).
- [ ] Render compared to source section by section (brightness too; see lessons).
- [ ] Loudness measured (about -14 to -16 LUFS), music ducked under voice, SFX levels steady.
- [ ] Series-specific rules met (Loan Officer compliance, Brightwater car/price/plate rules, Alignable profile vs group).
- [ ] Run a reviewer pass on the first export. Every face note is a must-fix.
- [ ] Credit spend for the job counted and explainable per model.
- [ ] Final file name matches the series pattern; final copy verified byte-for-byte against the render.

## Delivery steps
1. "Export" means: final render into the job's Final folder, verify the copy, then purge drafts (keep raw generates and the final's direct source).
2. Upload to the lead's Ai Videos Co Drive (not any other account). Make one new folder per job inside the client or series folder (e.g. Brightwater Motors > "2020 Toyota 4Runner Limited - Sofia Walkaround"). Share it as "Anyone with the link: Editor".
   - Read the signed-in account on the page first. Never switch to other browsers or profiles unasked. If the right login isn't available, ask once at the start. The lead signs in, never you.
   - Browser upload (for automated uploads): split the file into 9 MB parts, load each into an injected file input, merge back into one File, compare SHA-256 with the local file, then dispatch dragenter, dragover and drop on the main area. In an EMPTY folder, dispatch dragenter on the "Drop files here" element first, then dragover and drop on the overlay. It starts after a few seconds even if nothing shows. Do not retry. If a "replace / keep both" dialog appears, press Cancel.
   - Test the share link while logged out.
3. On the lead's word only, submit on ArcLight: open the task, click "Comments", add the comment, then click "Add Comment". Text (blank lines between): "Hi Adam, / Here's the link for this task: <Drive link> / Best, / <lead's name>". For automation, typing doesn't land in the comment editor; set its content through the editor's API.
4. Set the task status to "Awaiting Feedback" and check the dashboard row.
5. Never send anything to the client yourself. Never click the task timer; the lead runs it.
6. Loan Officer Series: Drive upload is on hold for a new flow; deliver to Nick and Adam for review when told.

## Task intake (ArcLight)
- When Adam adds a task: tell the lead, read the task, brief and assets right away, write the plan (VO, ref board, shot frames), post it. No spend before the lead's OK.
- Check that every brief link in the task points to this job (the 4Runner task's first "Brief" link opened the Tacoma folder).
- A task that goes back to "In Progress" needs attention too.

## Lessons learned (do not repeat)
- Generated Dave refs drifted his face, outfit and eye colour. Real refs only.
- Seedance/Higgsfield voices, standing shots, flat angles and generated refs caused many revision rounds (A4, Louder, Thursday). Get the plan right before spending.
- Spot 02 failed "real motion": a brief's "standing" line was followed instead of raising it.
- v2 voice was off-tone, whooshes sounded cheap, red ribbons looked unprofessional, per-keyword caption gimmicks were rejected as slop.
- A rubberband time-stretch made the voice sound drunk.
- Duplicated frames caused a stutter (Louder v3).
- A TV composite looked fake; the lead wanted a real TV/LED wall in the shot, not an ad on glass. Regenerate the shot instead.
- A full regenerate with too many errors, and LatentSync on generated clips, were dropped on A4. See the AI talking-shot method.
- Real-ESRGAN upscale is not a substitute for a true 1080p finalize (rejected).
- Before raising a VO length mismatch, search for a newer VO file (Downloads etc.).
- Reusing a clip from another spot without asking (LO1 used a Spot 06 clip): always ask first.
- A final was once uploaded to the wrong Drive account without checking; then other profiles were tried unasked. Check the account; ask, don't guess.
- A voice sample once went into the wrong account's clone form. Read the account history first.
- Seedance people sometimes walk backwards; take that section from another generate or repair it.
- HyperFrames traps: video elements can show on the first frames even inside a hidden parent; dark sections rendered about 30% dimmer. Compare render brightness with the base per section.
- Light jump where two generates are cut together (LO4): match grade at the cut.
- Music generation sat queued 35 min while asking whether to wait. After 10-15 min, switch route (see the stuck-step method).
- In the Ai Videos Co channel, talk only about Ai Videos Co. Don't relay other clients' jobs.

## Open items (as of last notes)
- Business Owners Ad: music is still a code-made bed; needs a licensed track. If revisions come, the held plan is to redo six Kling shots in Seedance 2.5 1080p (about 384 cr), only with the lead's yes.
- 01 Who Likes Making Content: Nick wants stronger end card assets (ask for the official logo and template); Adam wants better music.
- 02 Louder: a revision with the ElevenLabs David Pragel voice exists but is NOT exported. Dust fades off the suit after about 18.5 s. Some paid clips are unused.
- Loan Officer: official EHO and Tidewell logo files never came (an EHO mark was drawn). Known faint lilac tint on the seller's cuff in LO2 (7.6-9 s). LO2 and LO3 keep LO1's music bed. LO3 shows "$750,000 -> NOW $690,000" by the lead's request though the brief bans dollar figures (flagged; can be toggled off).
- LO5: Marcus says "home anniversary"; captions follow speech, the card keeps HAPPY HOME-IVERSARY, JORDAN!.
- Brightwater: the brand kit overview was still missing.
