# Tech steering
- Plain HTML, CSS and JavaScript. No build step, no framework, no network calls.
- Scheduling logic lives only in sm2.js, a UMD (Universal Module Definition) module usable in browser and Node.
- Any change to sm2.js must keep `node test.js` green.
- Escape all user text before putting it into HTML.
- Phone first: base font 18px, tap targets at least 32px.
