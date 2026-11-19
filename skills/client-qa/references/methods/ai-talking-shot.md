# AI talking shots (lip sync)

## The route that works
- Seedance 2.5 with audio generation ON (omni-reference). It makes mouth and sound together, so they lock.
- Feed the final VO (e.g. ElevenLabs) as the audio reference. Then move the final VO phrases onto Seedance's word times.
- Why: a separate recording laid over a generated mouth breaks sync.

## Prompt rules
- State the exact words and timing of the reference audio.
- Lips close fully on B, M and P. Mouth rests closed in pauses.
- No music, no text, no film crew or gear in the prompt. Never prompt gear (a boom and stand once appeared because the prompt mentioned them).
- Name the background people.

## Fixing timing
- Seedance re-performs and drifts: about 20-30% faster, or 0.4-2.5 s late.
- Move whole phrases. Never stretch the voice or the picture.
- Hide small offsets with cutaways.
- Send a 10 s preview for timing before a full render.
- Say early when editing cannot fix something.
- Automated lip scores do not predict what the client or lead sees. Trust their eyes.

## Cost and time (Higgsfield Seedance 2.5)
- About 7 credits/s at 720p, 16 cr/s at 1080p, about 3 cr/s for a 480p draft.
- About 15 min per generate.

## Failed routes (do not repeat)
- Seedance with sound OFF: generic mouth.
- Intone: re-performs, talking-head only, pads lead-in silence.
- LatentSync 1.5: soft, rejected. A later free run was replaced by a regenerate.
- Wan 2.7: "it animated the image" (though it keeps the audio exactly).
- Re-timing the picture to a voice: freezes and jumps.
- Stretching the voice: sounds drunk.
- Real-ESRGAN upscale instead of a true 1080p finalize: rejected.

## Local tools
- Chatterbox voice conversion: keeps length; adds an inaudible watermark. Can tone a generated voice toward the presenter's.
- LatentSync and Real-ESRGAN exist but see the failed list above.
