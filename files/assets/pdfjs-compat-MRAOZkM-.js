for(let e of[Map,WeakMap]){let t=e?.prototype;t&&(typeof t.getOrInsert!=`function`&&(t.getOrInsert=function(e,t){return this.has(e)||this.set(e,t),this.get(e)}),typeof t.getOrInsertComputed!=`function`&&(t.getOrInsertComputed=function(e,t){return this.has(e)||this.set(e,t(e)),this.get(e)}))}var e=null;function t(t){if(typeof window>`u`)return t;if(e)return e;try{let n=new URL(t,window.location.href).href,r=`
for (const C of [Map, WeakMap]) {
  const p = C && C.prototype;
  if (!p) continue;
  if (typeof p.getOrInsert !== "function") {
    p.getOrInsert = function (k, v) { if (!this.has(k)) this.set(k, v); return this.get(k); };
  }
  if (typeof p.getOrInsertComputed !== "function") {
    p.getOrInsertComputed = function (k, f) { if (!this.has(k)) this.set(k, f(k)); return this.get(k); };
  }
}
\nimport ${JSON.stringify(n)};\n`;return e=URL.createObjectURL(new Blob([r],{type:`text/javascript`})),e}catch{return t}}export{t};