# Design
- sm2.js: addDays, newItem, review, stability, forecast (pure functions, no DOM (Document Object Model)).
- index.html: state S {items, points, streak, last}; render() splits items into ghosts (due) and resting (future).
- Visuals: tombstone cards; due cards get a glowing ghost style and float animation; pumpkin-orange forecast line.
- Tests: test.js asserts the SM-2 intervals, reset on poor recall, ease floor and forecast decay.
