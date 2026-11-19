---
name: aivideos-dave-spot
description: Make or revise any Ai Videos Co (Adam Pragel) video with Dave (David Pragel's digital twin) or another presenter, from an ArcLight task or brief to the exported final. Covers task intake on help.arclightcontent.com, studying the brief and original reference photos, ElevenLabs VO (David Pragel voice), the director-style shot-by-shot, storyboard frames, the one-generate Seedance 2.5 prompt, putting the VO on the lips, the edit (safe zone, fonts, captions), the timeline with comment bar, QC and Export. Use for "new task", "Brightwater", "walkaround", "Dave", "Adam", "A4", "Louder", "Thursday" or any aivideos.co job.
---

# Ai Videos Co / Dave spot: the whole process

These are Jerome's standing rules, collected from his reviews (Nov 2026). Follow them in order and do not skip a gate.

Reply to Jerome in short Bisaya + English, never Tagalog.
Show the video, not text.
Decide and keep moving. Ask only at the gates marked **ASK**.

## 0. Intake: find the task
- Tasks live at https://help.arclightcontent.com/admin. Open them in Chrome with the **the client's account** account .
- Never sign in for him. If the page asks for a login, tell him.
- On the Dashboard, open My Tasks and click the task named (or the In Progress one). Read the dialog: Description links (brief doc + Drive assets folder), creator (Adam Campellone), checklist.
- Read the brief with the Google Drive connector (`read_file_content` on the doc id). The Docs page renders on a canvas, so page text is empty.
- List the assets folder with `search_files` (`parentId = '<id>'`). Download each file with `curl -sL "https://drive.google.com/uc?export=download&id=<id>"` into `Desktop\2. Ai Videos Co - Adam Pragel\<Client>\<Job>\Brief\`, then make a labelled contact sheet.
- Save a memory note for the job: brief id, folder id, local path, key rules.

## 1. Study the brief, then report
- Pull out the script lines, timing, format (9:16), presenter, voice, setting, on-screen rules, end card, legal and microcopy.
- Note anything that must match the source exactly: car colour, wheels, interior, plates to blank, no readable signs.
- Tell Jerome **whether a VO exists or must be made in ElevenLabs**. Check any supplied audio's tags with `ffprobe` (a `fish.audio` tag means it is not ElevenLabs).
- If the brief says "plain, eye level, steady" but Jerome asked for cinematic movement and hyper-realistic shots, Jerome wins.

## 2. Reference images: originals only
- Dave's face and body come from his real photos in `Assets\Dave Photos`: 10 photos, blue eyes, goatee, spiky brown hair. His real motion clips are in `Assets\Dave Video References`.
- On Higgsfield these are real photos d4cf20b6-0539-4b7b-aa69-ff378bfb48ae, 8e49335e-c560-4663-a4af-4e1dddaa937c, 3bcafb16-bfa9-4e6f-a1b9-d91dbdaf5323 and real video cb26d7e0-ea35-4a51-9b96-f23b2a81316b.
- Never use the suit sheet b4428ad9, generated Dave images or realism video 04a66c62.
- Other real subjects (cars, products, people) also come only from the client's original photos.
- Generated refs are allowed only for fictional characters such as Marcus, and for locations.
- Show Jerome the reference sheet before writing the prompt.

## 3. Voice over: ElevenLabs only
- Use Adam's ElevenLabs in the Ai Videos Co Chrome profile: voice **David Pragel**, model **Eleven v4**, stability 50%, similarity 75%.
- The linked ElevenLabs MCP is NOT Adam's account: it has no David Pragel voice, and accounts never cross.
- One line or one breath per generate, 2 takes each. Download both, then file them as `Work\vo_el\L<n>_t<k>.mp3`.
- ElevenLabs **autoplays** each take: pause it right away (`document.querySelectorAll('audio,video').forEach(a=>a.pause())`).
- If the lines run longer than the lips, prefix the text with `[quickly, upbeat]`. v4 has no speed slider.
- Check every word with ASR (wav2vec2 in `aivc-tools\chatterbox\venv`, `thu_asr.py`).
- Seedance and Fish Audio voices are never the final voice. Exception: a client's own real recording (for example Jenn) stays as supplied.
- **ASK** before generating: show the exact lines, voice, model and settings.

## 4. Shot-by-shot like a film director
The VO times drive every shot. Use Adam's structure for every model:
- Character blocks (face refs, eyes: blue, realism video, voice = audio_1, outfit, hair)
- Locations
- Global line (hyper-realistic, ARRI cinema look, shallow DOF, real motion, no text, logos, captions or music)
- Audio rule (exact dialogue and timing, only the presenter speaks)
- SHOT blocks with 3-decimal times and dialogue lines

Every shot follows these rules:
- Real moving backgrounds: people walk, cars pass, things react.
- No standing talking heads; the presenter walks, gestures and works the subject.
- Extra camera angles: drone or high wide, Steadicam, side dolly or arc, over-the-shoulder, low angle, inserts.
- Push in from far to close on the face.
- Leave the zones the edit needs clear, for example a calm corner for a card.

Inserts that must match exactly (dash, odometer, screen) come from the original photos in the edit, with gentle motion. Do not regenerate them.

Show a table (time, camera, what we see, line), then **storyboard frames**. A quick PIL sketch over a location ref is enough: silhouette size per framing, a camera arrow, a social-card zone. See `aivc-tools\thu_board.py`.

## 5. Prompt, price, generate
- **TOP RULE:** show the exact prompt and the price from `get_cost`, and **wait for OK on that prompt**.
- Upload refs and VO:
  1. `media_upload`.
  2. One curl PUT per file, using the exact URL.
  3. `media_confirm`.
- Model `seedance_2_5`, `mode: omni_reference`, 9:16, `bitrate_mode: high`, `generate_audio: true`.
- Media order must match the `image_n` labels in the prompt.
- Usual route: a 480p draft (`draft: true`, about 3 cr/s), then finalize at 1080p with `draft_job_id` (16 cr/s). If Jerome says "1080p finalize" first, go straight to 1080p.
- Note the job id and the spend. Download the result to `Generated\clips\`.

## 6. VO on the lips (move, never stretch)
- ASR the generate's audio for word times. Place each ElevenLabs phrase so its first word lands on Seedance's first-word time for that phrase. Split only in silences and keep one breath together.
  - Scripts: `aivc-tools\a4v2_prep.py`, `th10_prep.py`, `louder_el_place.py`.
- Fade only at phrase edges found with an envelope, never at sample-zero crossings.
- If a generated shot has a flaw (people walking backwards, morphs), swap in a clean shot from an earlier generate and re-place that line on its lips.

## 7. Edit rules
- **Safe zone 9:16 (ALWAYS, Jerome 17 Nov):** x 60–960, y 250–1500, text centred about x 510. This covers every chip, logo, badge, spec card, CTA and end-card panel; only the background picture may go outside it. Draw the red box on snapshots of every graphic beat and the end card before every render.
- **Face always visible:** no captions, icons, cards or logos on the face. Measure the face box (haar cascade) and the chin.
  - If a card or logo must sit near a close-up, put it below the chin or hide it during the close-up.
- **Fonts (3-font formula):** Inter tight, ExtraBold, for captions; Garamond italic for keywords; script only on ONE hero word, if any.
  - Shadow sits on the letters only (tight drop shadow). No background scrims or blobs.
  - Lines push in whole: no word-by-word typing and no left-to-right wipes.
- Captions start about 0.16 s before the word and stay long enough to read. They may run past a cut.
- Transitions: soft light dissolves or light flashes. No zoom-blur, spin or whip. Keep what Jerome praised exactly as it was.
- Name label: readable Inter type, never a small script.
- Sound:
  - Music matches the energy and is ducked under the voice.
  - No cricket chirps, wind beds or noise bursts under the voice.
  - Keep a street bed subtle.
  - About -14 to -16 LUFS.
- Deliver 1080p at 24 fps, CRF 12–14. For the phone, also send a 1080p copy at about 6–7 Mb/s, under 30 MB.

## 8. Timeline and review loop
- The job goes on the Ai Videos Co timeline artifact ((team page: ask the lead editor for the link)) as a **tab**: `aivc-tools\tl_tabs_page.py` plus `tl_tabs_template.html`.
- The page has the comment bar (publish with `capabilities: {comments: {}}`).
- Give every new proxy a **new file name** (for example `thu_v10h.mp4`) so the browser cannot show a cached old video. Open the right tab by default.
- Do not open a new session for a new task. Jerome wants new jobs as tabs here.
- Timeline comments sent to Claude are Jerome's revisions:
  1. Fix them all.
  2. Reply in the thread with what changed.
  3. Resolve the thread.
- Before sending ANY version:
  - Watch the changed part at 12 fps and the whole film at 3 fps.
  - Re-check every earlier note.
  - Compare transitions with the last approved version frame by frame.
  - Send one complete version, not drip fixes. ("Tarunga ra imung trabaho, ga cge ratag balik2.")
  Message the lead editor in the team chat. Don't message for routine progress.

## 9. Export (only on Jerome's own word "Export")
- Copy the final into `Final\` with a client-style name. Verify it with `cmp`.
- Permanently delete that job's drafts, versions, phone copies and renders (`rm`, no Recycle Bin). Keep raw generates, refs, VO takes, scripts and earlier finals.
- Report what was deleted and the size, and update memory.
- Then deliver to Drive (Jerome, 18 Nov), every Export:
  1. Open the client's Drive folder in the client's Chrome profile and confirm it is the Ai Videos Co account.
  2. Create a new folder with a proper name, inside the client folder.
  3. Upload the FINAL video.
  4. Share it: anyone with the link, Editor.
  5. Give Jerome the link. The method is in memory ai-videos-drive-delivery.
- When Jerome says to report it on ArcLight, comment on the task: "Hi Adam, / Here's the link for this task: <Drive link> / Best, / Jerome" (memory arclight-task-watch). Jerome runs the timer.
- Never send anything to the client yourself.

## Gates summary (ASK)
1. VO lines and settings.
2. Shot plan and storyboard.
3. Exact prompt and price.
4. Any extra spend.
5. Export.

Everything else: do it, check it, show the video.
