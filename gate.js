/* Optional passphrase lock for data stored in this browser.
   - When the lock is OFF nothing changes: the app loads straight away.
   - When ON, a passphrase is asked before the app starts. A key is derived with PBKDF2-SHA256 (WebCrypto) and kept only in memory.
     Everything the app keeps under nextlevel_* / pulsefit_* / nl-* in localStorage (workouts, meals, profile, sign-in session, backups)
     is stored as XSalsa20-Poly1305 (tweetnacl secretbox) ciphertext. The app code itself is untouched: this file transparently wraps
     localStorage.getItem / setItem. A forgotten passphrase cannot be recovered (cloud-synced accounts can sign in again and re-sync).
   - Limits: it protects data at rest on the device (stolen/shared phone, copied browser profile, storage dumps). It cannot protect an
     unlocked session from code running in the page. */
(function(){
  'use strict';
  const META='nl_lock_meta',PREFIX='enc1:',ITER=250000;
  const PLAIN=new Set(['nl_theme','nextlevel_guest_mode','nextlevel_tour_done','nextlevel_fb_last','nextlevel_lastbackup',META]);
  const isSecret=k=>typeof k==='string'&&!PLAIN.has(k)&&/^(nextlevel_|pulsefit_|nl-)/.test(k);
  const ls=window.localStorage,SP=Storage.prototype,rawGet=SP.getItem,rawSet=SP.setItem,rawRemove=SP.removeItem;
  const nacl=window.nacl,subtle=window.crypto&&window.crypto.subtle;
  const supported=!!(nacl&&subtle&&window.crypto.getRandomValues&&window.isSecureContext);
  let KEY=null;
  const enc=new TextEncoder(),dec=new TextDecoder();
  const b64=u=>{let s='';for(let i=0;i<u.length;i+=8192)s+=String.fromCharCode.apply(null,u.subarray(i,i+8192));return btoa(s)};
  const unb64=s=>{const b=atob(s),u=new Uint8Array(b.length);for(let i=0;i<b.length;i++)u[i]=b.charCodeAt(i);return u};
  function seal(text,key){const n=nacl.randomBytes(24),box=nacl.secretbox(enc.encode(text),n,key),o=new Uint8Array(24+box.length);o.set(n);o.set(box,24);return PREFIX+b64(o)}
  function open(val,key){try{const o=unb64(val.slice(PREFIX.length)),m=nacl.secretbox.open(o.subarray(24),o.subarray(0,24),key);return m?dec.decode(m):null}catch(e){return null}}
  async function derive(pass,salt,iter){const base=await subtle.importKey('raw',enc.encode(pass),'PBKDF2',false,['deriveBits']);
    return new Uint8Array(await subtle.deriveBits({name:'PBKDF2',hash:'SHA-256',salt,iterations:iter},base,256))}
  const getMeta=()=>{try{return JSON.parse(rawGet.call(ls,META)||'null')}catch(e){return null}};
  const secretKeys=()=>{const out=[];for(let i=0;i<ls.length;i++){const k=ls.key(i);if(isSecret(k))out.push(k)}return out};

  /* Transparent wrapper (installed once a key is in memory). */
  SP.getItem=function(k){const v=rawGet.apply(this,arguments);
    if(this===ls&&KEY&&v!=null&&isSecret(k)&&v.startsWith(PREFIX)){const t=open(v,KEY);return t}
    return v};
  SP.setItem=function(k,v){
    if(this===ls&&KEY&&isSecret(k))return rawSet.call(this,k,seal(String(v),KEY));
    return rawSet.apply(this,arguments)};

  async function unlockWith(pass){const m=getMeta();if(!m)return true;
    const key=await derive(pass,unb64(m.salt),m.iter||ITER);
    if(open(m.check,key)!=='nl-ok')return false;KEY=key;return true}

  async function enable(pass){
    if(!supported)throw new Error('Passphrase lock needs a secure (https) connection in a modern browser.');
    if(getMeta())throw new Error('Lock is already on.');
    if(typeof pass!=='string'||pass.length<8)throw new Error('Use at least 8 characters.');
    const salt=nacl.randomBytes(16),key=await derive(pass,salt,ITER);
    const plain=secretKeys().map(k=>[k,rawGet.call(ls,k)]);
    rawSet.call(ls,META,JSON.stringify({v:1,salt:b64(salt),iter:ITER,check:seal('nl-ok',key)}));
    KEY=key;
    plain.forEach(([k,v])=>{if(v!=null&&!v.startsWith(PREFIX))rawSet.call(ls,k,seal(v,key))})}

  async function disable(pass){
    const m=getMeta();if(!m)return;
    const key=await derive(String(pass||''),unb64(m.salt),m.iter||ITER);
    if(open(m.check,key)!=='nl-ok')throw new Error('Wrong passphrase.');
    const items=secretKeys().map(k=>{const v=rawGet.call(ls,k);return [k,v&&v.startsWith(PREFIX)?open(v,key):v]});
    if(items.some(([,v])=>v==null))throw new Error('Some data could not be decrypted, so the lock was left on.');
    items.forEach(([k,v])=>rawSet.call(ls,k,v));
    rawRemove.call(ls,META);KEY=null}

  function eraseLocal(){secretKeys().forEach(k=>rawRemove.call(ls,k));rawRemove.call(ls,META);KEY=null}

  window.NLLock=Object.freeze({supported,enabled:()=>!!getMeta(),enable,disable,lockNow:()=>location.reload()});

  function startApp(){['supabase-init.js','exguide.js','app.js'].forEach(src=>{const s=document.createElement('script');s.src=src;s.async=false;document.body.appendChild(s)})}

  function showLock(){
    const ov=document.createElement('div');ov.id='nlLock';ov.setAttribute('role','dialog');ov.setAttribute('aria-modal','true');ov.setAttribute('aria-labelledby','nlLockT');
    ov.style.cssText='position:fixed;inset:0;z-index:2147483000;display:flex;align-items:center;justify-content:center;padding:20px;background:var(--bg,#0b0f17);color:var(--c,#fff);font-family:inherit';
    const box=document.createElement('div');box.style.cssText='width:100%;max-width:360px;text-align:center';
    const h=document.createElement('h1');h.id='nlLockT';h.textContent='Next Level is locked';h.style.cssText='font-size:22px;font-weight:800;margin-bottom:6px';
    const p=document.createElement('p');p.textContent='Enter your passphrase to open your training data.';p.style.cssText='font-size:14px;opacity:.7;margin-bottom:14px';
    const inp=document.createElement('input');inp.type='password';inp.autocomplete='current-password';inp.placeholder='Passphrase';inp.setAttribute('aria-label','Passphrase');inp.style.cssText='width:100%;padding:12px;border-radius:12px;border:1px solid rgba(127,139,163,.4);background:transparent;color:inherit;font-size:16px;margin-bottom:10px';
    const err=document.createElement('div');err.setAttribute('role','alert');err.style.cssText='min-height:20px;font-size:13px;color:#FF6B6B;margin-bottom:8px';
    const go=document.createElement('button');go.type='button';go.textContent='Unlock';go.style.cssText='width:100%;padding:12px;border-radius:12px;border:0;background:#00FF66;color:#04210f;font-weight:800;font-size:16px;cursor:pointer';
    const fg=document.createElement('button');fg.type='button';fg.textContent='Forgot passphrase? Erase data on this device';fg.style.cssText='margin-top:16px;background:none;border:0;color:inherit;opacity:.6;font-size:12px;text-decoration:underline;cursor:pointer';
    box.append(h,p,inp,err,go,fg);ov.appendChild(box);document.body.appendChild(ov);inp.focus();
    let busy=false;
    async function attempt(){if(busy)return;busy=true;err.textContent='';go.disabled=true;go.textContent='Unlocking…';
      try{if(await unlockWith(inp.value)){ov.remove();startApp()}else{err.textContent='Wrong passphrase.';inp.select()}}
      catch(e){err.textContent='Could not unlock on this device.'}
      busy=false;go.disabled=false;go.textContent='Unlock'}
    go.addEventListener('click',attempt);inp.addEventListener('keydown',e=>{if(e.key==='Enter')attempt()});
    fg.addEventListener('click',()=>{
      if(!window.confirm('This permanently erases the workouts, meals and profile stored on this device, and signs you out here. Data already synced to your account stays in the cloud. Continue?'))return;
      eraseLocal();location.reload()})}

  if(getMeta()){if(!supported){document.body.textContent='This app is locked and needs a secure (https) connection to unlock.';return}showLock()}
  else startApp();
})();
