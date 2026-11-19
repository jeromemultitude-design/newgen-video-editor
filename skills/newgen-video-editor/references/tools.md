# Tools, pages and accounts

Compressed 18 Nov 2026 from the memories edit-bay-dashboard, timeline-comment-bar, finals-library, editors-progress-board, fast-edit-system, chrome-profiles-map, motion-skills-precedence, ad-voice-meter and three-font-formula.

## Timeline page (every job)
- Every video job has a timeline artifact. Open it before the first edit step and keep it matching the latest export. Update it BEFORE sending any export.
- Layout he likes (TAL-LOUIS Send Love timeline, (team page: ask the lead editor for the link)): the player on the left and a details panel on the right (time, shot, model, voice, music, loudness). The review page shows only the player, details and notes. The tracks are hidden with `.tl{display:none}` but stay in the DOM, because the notes read shot names from them.
- **Comment bar (14 Nov, required on every timeline):** the snippet is at `Documents\aivc-tools\timeline-comments\comment-bar.html`; its header lists what the page needs. Publish with `capabilities: {comments: {}}`.
  - Clicking the box or pressing C pauses the video and pins the frame. Enter adds the note to a time-sorted list (saved per video in browser storage). There's a "General instructions" box.
  - "Send all to Claude" sends one `[video revision notes]` message with `@m:ss.s · shot : text` lines. If no chat is watching, it lands as a plain comment, which never notifies, so read comments at the start of each revision turn.
  - Upgrade an old v1 page with `node apply.js <timeline.html>` in the snippet folder. Never go back to v1.
- Spot 06 timeline template: (team page: ask the lead editor for the link).

## Edit Bay (older, all-jobs bay)
- (team page: ask the lead editor for the link), pinned. The status lives in the `bay/status` doc (job, detail, pct, state, steps, todo, versions, credits, updated), updated with ArtifactData and `if_version`. States: working, rendering, waiting on you, ready for review, delivered.
- After an export: `Documents\aivc-tools\bay_build.py vNN`, set `bay/timeline` from `Work\bay\timeline.json`, and republish with the new proxy.mp4 and thumbs.jpg.
- Credits dashboard: (team page: ask the lead editor for the link).

## Finals Library
- (team page: ask the lead editor for the link): the 5 newest client finals, one per client, as timeline tabs, plus a "Compare styles" tab.
- When a new final is approved, edit the `V` list in `Documents\free247editor\kit\finals-library\gen.mjs` (file path, plus fonts read from the job's build files, never guessed). Run `node gen.mjs` and republish `out\index.html` to the same URL with the p/t/s files.

## Editors Progress Board (actual clients only, no trials)
- (team page: ask the lead editor for the link), collection `data/team/editors`, one doc per actual-client job: ai-videos-co, jenn-b, monica, uvola, cdx, tal-louis-ecb0018, tal-louis-ecb0019, tal-louis-send-love, tal-louis-whatsapp.
- Fields: client, session, stage (Planning/Editing/Rendering/Review/Delivered/Idle), job, latest, next, waiting_on (Jerome/Editor/None), updated (ISO).
- Update rows with ArtifactData `update` and `if_version`; never republish for data. "Delivered" means uploaded to the client.
- Trials (Pura, Fora, Passion Product, Josiah Krol, Damian, Hunter Collins) stay off this board.

## Fast edit system
- `Documents\aivc-tools\fastedit` (the run sheet is its README). Order: open the timeline, fan out research and footage to subagents while aligning the VO, then `fe.py get`, `fe.py sheets`, write one `job.json`, `fe.py all`.
- Revisions: `fe.py audio` for sound (about 14 s); only changed shots rebuild. Measured: about 2 min for a 39 s, 21-shot edit.
- Don't send until `qc` passes, you've read `qc/film.jpg` and `qc/shot_ends.jpg`, and a reviewer subagent has seen the export.
- Extend `fe.py` or add a `tpl_*.py`; never write per-job scratch scripts.

## Accounts
- Each client's tool logins (Higgsfield, ElevenLabs, Suno, Frame.io, Drive) belong to that client only. Ask the lead editor which account to use before any call, even a free one.

## Motion skills precedence (installed 9 Nov)
- Order: Jerome's rules, then the HyperFrames render contract, the HyperFrames workflow skills, the gsap-* API skills, and the animation-principles skills (taste only).
- One engine per video: HyperFrames. Remotion is for ideas only. No `repeat:-1`, ScrollTrigger, ScrollSmoother or Draggable in a render.
- No HeyGen generation without the client's account OK. The full table is at `Desktop\1. CDX\CDX Videos\SKILL RULES - motion skills.md`.

## Voice meter (ad VO)
- `node Documents\free247editor\tools\voicemeter.mjs <audio...>`; a same-name transcript .json gives wpm. Compare candidates on the SAME text.
- Ad targets: pitch movement ≥ 2.5 st, range p10-p90 ≥ 7 st, emphasis ≥ 8 rises/min, energy movement ≥ 4.5 dB, Spanish pace 160-205 wpm, mean pause ≤ 0.45 s. Fix long pauses in the edit (about 0.3 s).
- "Calm" in a brief still means calm but alive. Voices described as serious or documentary read flat; never pick by library description. [Uvola 17 Nov: Angel was flat, Marco passed]
- A livelier ElevenLabs starting point (Multilingual v2): stability 0.40, similarity 0.80, style 30%, speed 1.10.

## 3-font formula (14 Nov, Torsten Roscoe)
- Engine: Inter for every caption, never at default tracking (tight about -0.06 em; titles wide, about +300, thin).
- Paint: Garamond (local `C:\Windows\Fonts\GARA.TTF`, `GARAIT.TTF`, `GARABD.TTF`) for keywords, calmly.
- Spoiler: one script word per video (Aston Script; ask before downloading from dafont).
