# Smriti: The Revision Graveyard

Kiroween 2026 entry, category Costume Contest. By Akshay Wagh.

Every topic you are about to forget rises from its grave as a ghost. Rate how well you recalled it and it goes back to rest until the spaced-repetition scheduler wakes it again.

## Why
Aspirants for long exams (UPSC (Union Public Service Commission), IFoS (Indian Forest Service)) study hundreds of topics and forget most before exam day. Smriti uses statistics, not gut feeling, to choose tonight's revision.

## Features
- SM-2 spaced repetition: recall rating 0-5 sets the next gap and ease factor
- Ghost graves for due topics, resting list for scheduled ones
- Forgetting-curve forecast R = e^(-t/S) over 30 nights
- Points ("souls saved") and a night streak
- Offline, no sign-up, data stays in the browser

## Run
Open index.html, or the live page on GitHub Pages. Tests: `node test.js`.

## Built with Kiro
See .kiro/: steering (product and tech rules), a spec (requirements, design, tasks) and a hook that runs the scheduler tests whenever sm2.js changes.

## License
MIT
