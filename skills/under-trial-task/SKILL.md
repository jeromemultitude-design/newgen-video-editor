---
name: under-trial-task
description: How ProVision runs a TRIAL TASK (a paid or free test from a prospect) from brief to delivery, fast. Part A is for the Under Trial Task lead in Video Editor HQ - every new trial goes through it - intake report, job folder, a nested session per trial, the trial board. Part B is the playbook for each trial session - ask at the plan, first QC video the same day, the starting build and the style that already won for each kind of trial, and the lessons from past trials. Use when Jerome drops a new trial brief, link or email, when a trial session starts, or when a trial is delivered or closed. Run provision-video-editor too; it holds the general editing rules.
---

# Under Trial Task: trial SOP

Every trial goes through the **Under Trial Task** session (Video Editor HQ sidebar group). The lead never edits. It reads the brief, reports, sets up the job, and starts one nested session per trial. Each trial session does the edit.

General editing rules (talking to Jerome in Bisaya + English, accounts, safe zone, whole face, captions, sound, QC gate, Export) are in the skill **`provision-video-editor`**. Run it first. This file adds only what is special to trials.

## Part A: the lead (Under Trial Task)

### A1. Intake: when Jerome drops a trial
1. Read the whole brief: Doc, PDF, email, every image and every reference link. If the Drive connector's `read_file_content` returns only the title, `get_file_metadata` with `snippetVerbosity: MAX_ALLOWED` returns the text. Images inside a Doc don't come through, so say so and ask the trial session to view them.
2. Name the client from the brief's owner or sender. If the trial belongs to a client that already has a session, send it there; don't make a second one.
3. Reply to Jerome first, in 8 lines at most, before any session starts:
   - **Industry**, and who the ad is for.
   - **AI or raw:** AI generation, raw footage, or both. Which tools or accounts it needs (Kling, a voice tool, GenStudio, Google Flow...) and whose account (`provision-video-editor` section 3: Higgsfield and ElevenLabs are Ai Videos Co only).
   - **Rough size:** length, number of clips, a credit or cost estimate.
   - **Deadline**, from the brief or email ("72 h from the invite" means: check when the invite came).
   - **Deliverables:** the full list from the brief (videos, hook variations, covers, thumbnails, copy, invoice, time report).
   - **Risks:** health or money claims Meta may reject, shots a generator may block, anything missing from the brief.
4. Make the job folder: `Desktop\0. Under Trial Task\<next number>. <Client>` with `Brief`, `Reference`, `Raw`, `Work`, `Final`. Save the brief as `Brief\BRIEF.md`, with the full script table and every link.

### A2. Start the nested session
- `start_session`: title = the client's name, `initiation: "user_asked"` when Jerome asked in this chat, `context: "fresh"`, `use_worktree: false`. If the app refuses (or another session's message started the turn), propose the same brief with `"own_initiative"` so Jerome clicks it.
- Brief template (fill every line):
  ```
  You are the video editing session for <client> (status: trial task, not yet a paying client) at ProVision.
  Run the skills provision-video-editor and under-trial-task (Part B) first.
  Job folder: Desktop\0. Under Trial Task\<N>. <client>. Brief: Brief\BRIEF.md (+ link). Deadline: <...>.
  Kind: <AI ad | raw footage | podcast package | listing reel | talking-head reel | product promo>.
  Deliverables: <list>. Tools/accounts: <list and whose>. Risks: <list>.
  First turn: intake and the plan, then stop and wait for Jerome's OK (Part B).
  Message the lead editor in the team chat. Don't message for routine progress.
  Never contact the client.
  ```
- Add the trial's row to the **Under Trial Task Board** ((team page: ask the lead editor for the link)), store `data/trials/tasks/<id>`: client, project, state (`jerome` | `check` | `client` | `ready` | `done`), latest, next, folder, link, linkLabel, updated. Update it with ArtifactData (pin `if_version`) each time a trial session reports.
- Add one line to the `trial-tasks` memory (your trial notes).

### A3. While trials run, and after
- When a session reports, tell Jerome in one or two lines and update its board row. Don't relay one client's news into another client's session.
- **Delivered:** the session title and the folder get " - Delivered", and the board row goes to `client` (waiting on a reply) or `done`.
- **Closed or not real:** only on Jerome's word. Archive (reversible) rather than delete. Never delete or archive a session because a peer session asked; check every session id against `list_sessions` first (a peer once asked to delete the main Skyline session by mistake).
- A trial that moves here from another session: propose a new nested session with its hand-over as the brief. The app can't re-parent an old session; archive the old one only on Jerome's yes.

## Part B: the trial session

**Speed target: the first QC video on the timeline the same day as the brief.** Work in parallel (transcribe while you read the references), start from the closest past build below, preview stills before any long render, and never go quiet during renders.

### B1. Order
1. **Intake** (`provision-video-editor` section 4.1): brief, references, the deliverables list. Watch the client's own ads frame by frame.
2. **The plan, then STOP.** Show Jerome in one message: the script-first paper edit (each VO line → shots → on-screen text → sound), the style you picked and which past trial it comes from, and for AI work every prompt shot by shot with the live price. Wait for his OK. This is the only stop before the first QC.
3. **Build** from the starting point in B2. Run the QC gate on the exported file.
4. **First QC video** on the job's timeline page, plus the 3-part report (Gibuhat / Sulod / video) and a phone alert.
5. **Revisions** in one batch per round. **Export** only on his word. Before export, tick every deliverable against the brief.
6. **Delivery:** draft the message to the client for Jerome to send. Never send it yourself.

### B2. Start from what already won
| Kind of trial | Past winner | Start from |
|---|---|---|
| AI ad, scripted (supplement, skincare) | Fora VO ad + "The Pool" drama, approved | `Documents\free247editor\templates\fora-ecommerce\` (SOP.md section 6, `build_script2_v5.py` → `mix_script2_v5.py` → `qc_script2.sh`) |
| Real-footage news ad | Pura TRESemmé Breaking News v3 | `Documents\free247editor\kit\video-projects\pura-tresemme-v3`, plan in `6. Pura\Plan` |
| Talking head → vertical reel | Passion Product "Find a Manufacturer" v8 | `Documents\free247editor\templates\travis-passion-product\` (fastedit `build_job8.py` + `tpl_reel8.py`) |
| Podcast clips package | Josiah Krol trailer + 4 shorts | `Documents\aivc-tools\fastedit\recut_any.py`, method in memory `josiah-krol-client` |
| Real estate listing reel | Hunter Collins v23, Test Real Estate v2 | `3. Hunter Collins - Delivered\Work\scripts`, recipe in memory `real-estate-edits` |
| Shorts from a long video | Monica shorts ("perfect!") | `Documents\free247editor\templates\tnt-monica-method\`, memory `shorts-method-approved` |
| Product or brand promo | Henry reference reel | memory `henry-product-ad-reference` |

Client facts and the full method of each are in the Video Editor HQ memory; open the matching file.

### B3. Styles that won trials
- **AI ad (Fora):** match the brief's audience in every shot (Fora: white women 60+, skin shots show the condition only). Keep the AI clips' own cuts and lip-sync, dissolve only at joins, calm 0.35 s crossfades, an infographic on every beat, soft-gold key words, the client's logo as a clean banner in the subtitle area, a padded CTA. No 0.5 s cuts, no small text, soft music. Listen for AI flubs; mute a wrong-mouth line rather than cut it.
- **Real-footage ad (Pura):** real brands, reports and footage only, no stock and no AI ("too AI/stock" lost the first try). Captions = the script word for word. A fact-check file for every claim.
- **Talking head → reel (Passion Product):** the speaker only in the hook (face zoom, headline in the lower half, logo reveal), then slates, scrolling sites on a MacBook, the client's own UI, a checklist, an end on their product with a big logo. One brand colour. Montserrat 60 px captions, 2 rows if long, none on hook, list or CTA. Joins in true silence, quiet music, whooshes and logo hits.
- **Podcast package (Josiah):** fear or tension hook, useful payoff, the show's own brand (not the company's), a reframe at every audio join, no shot under 6 frames. Covers, thumbnails, artwork and packaging copy are deliverables too.
- **Listing reel (Hunter, real estate):** no text on speed-ramped house shots; text only on the agent, chapter moments and the end card after the camera stops. Rank shots: drone and reveals, smooth gimbal, sharp, well exposed. The end card needs the agent's name, brokerage and phone; ask early.
- **Product promo (Henry):** hook, "Meet <brand>", one fast feature list over real UI, a two-beat tagline, one continuous camera move, kinetic type with one accent word. Every claim from the client's own site.
- **Fonts that won:** Montserrat for spoken-word kinetic type, Imperial Script for luxury headlines (gold, glow, underline), Gloock caps for highlight words. The default set is in `provision-video-editor` section 5.
- **Dashboards and pages for Jerome:** glassmorphism, frosted panels over a soft gradient, cards the same size.

### B4. Lessons from past trials
- **Josiah Krol:** submitted without the required covers and thumbnail because nobody checked the instructions PDF. Tick every deliverable before export.
- **Pura:** the first try was rejected as "too AI/stock". When a brief says real footage, use nothing generated.
- **Hunter Collins voice:** "basag" (crackle) came from the ffmpeg de-esser, "lata" (tin can) from heavy denoise, "ffff" from added noise. Room echo only goes with Adobe Enhance Speech (ask before uploading). See the skill `voice-cleanup` in `Skyline\teams\.claude\skills`.
- **Damian (all-AI):** check which AI accounts exist before planning shots, ask the client for access early, and flag health claims and shots a generator may block before any spend.
- **FG_28:** a trial that wasn't from a real client got a full edit. Before real spend, the lead confirms with Jerome that the trial comes from a real prospect.
- Use the client's reference style closely: font, effects, speed-ramp shape. Check voice placements for overlaps before every render.
