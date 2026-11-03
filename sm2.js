// SM-2 spaced repetition (Wozniak 1987) plus an exponential forgetting-curve forecast.
(function(root){
function addDays(iso,n){const d=new Date(iso+'T00:00:00Z');d.setUTCDate(d.getUTCDate()+n);return d.toISOString().slice(0,10);}
function newItem(name,today){return {name,reps:0,interval:0,ef:2.5,due:today,last:null};}
function review(item,q,today){let {reps,interval,ef}=item;
 ef=Math.max(1.3,ef+(0.1-(5-q)*(0.08+(5-q)*0.02)));
 if(q<3){reps=0;interval=1;}else{reps+=1;interval=reps===1?1:reps===2?6:Math.round(interval*ef);}
 return {reps,interval,ef,due:addDays(today,interval),last:today};}
function stability(item){return Math.max(1,item.interval||1)*item.ef/2.5;}
function forecast(items,today,days){if(!items.length)return[];const out=[];
 for(let t=0;t<=days;t++){let s=0;items.forEach(i=>{const since=i.last?Math.round((new Date(today)-new Date(i.last))/864e5):0;s+=Math.exp(-(since+t)/stability(i));});out.push(s/items.length);}return out;}
const SM2={addDays,newItem,review,stability,forecast};
if(typeof module!=='undefined')module.exports=SM2;else root.SM2=SM2;
})(this);
