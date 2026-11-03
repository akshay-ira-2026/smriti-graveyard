const S=require('./sm2.js');const assert=require('assert');
let i=S.newItem('x','2026-11-04');
i=Object.assign(i,S.review(i,5,'2026-11-04'));assert.equal(i.interval,1);assert.equal(i.due,'2026-11-05');
i=Object.assign(i,S.review(i,4,'2026-11-05'));assert.equal(i.interval,6);
i=Object.assign(i,S.review(i,4,'2026-11-11'));assert.equal(i.interval,Math.round(6*i.ef));
const j=Object.assign(S.newItem('y','2026-11-04'),{reps:3,interval:15,ef:2.0});const r=S.review(j,1,'2026-11-04');assert.equal(r.reps,0);assert.equal(r.interval,1);assert.ok(r.ef>=1.3);
const f=S.forecast([i],'2026-11-11',30);assert.equal(f.length,31);assert.ok(f[0]>f[30]);
console.log('all 8 checks passed');
