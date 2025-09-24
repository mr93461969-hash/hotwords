// loader.js
(async ()=>{
  const hot=await fetch('https://mr93461969-hash.github.io/hotwords/hotwords.js').then(r=>r.text());
  eval(hot);
  const r=a=>a[Math.floor(Math.random()*a.length)];
  const script=`🎲 爆款腳本（已隨機）
反轉：${r(anti).replace('[A]','【題目】').replace('[B]',r(hotWords))}
身份：只有 ${r(iden)} 才懂
痛點：你也有過「${r(pain)}」的瞬間嗎？
語感：${r(vibe)}`;
  navigator.clipboard.writeText(script);
  alert(script);
})();