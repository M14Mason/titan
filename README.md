# titan

Personal training system and sparring film lab. One offline-first web app: habits, goals with pacing, daily schedule, life meters, fuel and sleep logging, boxing round timer, a coach that gives tips/drills/plans, and a pose-tracking sparring + shadowboxing analyzer.

**Live app:** https://m14mason.github.io/titan/

## Using it on a phone

1. Open the live link in Safari.
2. Share → **Add to Home Screen**.
3. Open it from that icon from then on. Data is stored per-URL, so always launch it the same way.

Updates arrive automatically: when a new version is pushed here, the app shows an "Update now" bar the next time you open it. It also works offline once loaded.

## What's inside

- **Home** — life meters (body, intellect, career, life, discipline, focus), focus score, 60-day grid, today's lift, habits, streaks, fuel rings, insights
- **Goals** — targets with deadlines, auto-suggested daily steps, pacing bar (ahead / on pace / behind)
- **Plan** — week strip, per-day checklist including goal steps and coach drills
- **Train** — session builder, round timer with get-ready countdown, combo generator, personal records, conditioning log
- **Fuel** — calories, protein, water, barcode scanning, 7-day history
- **Coach** — ask-a-question engine, 16 drills, reaction trainer, post-spar debrief, opponent game plans, tactics library
- **Spar** — MediaPipe pose tracking: strike detection and classification, contact/landed calls, guard and counter tracking, round scorecard, momentum, shadowbox grading
- **Stats** — accuracy and consistency, habit performance, weekly patterns, weekly review, journal
- **More** — morning log, reminders (calendar export), setup guide, widgets, backup and restore

## Files

| File | Purpose |
|---|---|
| `index.html` | The entire app |
| `sw.js` | Service worker: offline cache and update handling |
| `manifest.json` | Home Screen install metadata |
| `icon-*.png` | App icons |

## Data

Everything is stored locally in the browser. Nothing is uploaded, and sparring footage never leaves the device. Export a backup weekly from **More → Settings → Export Full Backup**.
