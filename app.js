const $=s=>document.querySelector(s);
const P={home:'<path d="M3 11l9-8 9 8v10a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',dumb:'<path d="M6 6v12M18 6v12M2 9v6M22 9v6M6 12h12"/>',cal:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',bot:'<rect x="4" y="8" width="16" height="12" rx="3"/><path d="M12 4v4M9 14h.01M15 14h.01"/>',plus:'<path d="M12 5v14M5 12h14"/>',trash:'<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/>',check:'<path d="M5 12l5 5 9-10"/>',bell:'<path d="M6 16V11a6 6 0 0 1 12 0v5l2 2H4zM10 21h4"/>',bolt:'<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',timer:'<circle cx="12" cy="13" r="8"/><path d="M12 9v4l3 2M9 2h6"/>',mute:'<path d="M6 16V11a6 6 0 0 1 9-5M18 11v5l2 2H4M3 3l18 18"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',cup:'<path d="M5 4h14l-1 16H6L5 4zM8 8h8M9 12h6"/>',ruler:'<path d="M3 7l4-4 14 14-4 4L3 7zM7 7l2-2M10 10l2-2M13 13l2-2M16 16l2-2"/>',trophy:'<path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4zM7 6H3v2a5 5 0 0 0 5 5M17 6h4v2a5 5 0 0 1-5 5"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 7h.01"/>',more:'<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>',user:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>'};
const ic=(n,s)=>`<svg class="ic" ${s?`style="width:${s}px;height:${s}px"`:''} viewBox="0 0 24 24">${P[n]}</svg>`;

/* ---------- Data ---------- */
const EX={'Incline Bench Press (Upper Chest)':'Chest','Bench Press (Middle / Overall Chest)':'Chest','Decline Bench Press (Lower Chest)':'Chest','Flys Incline (Upper Chest Isolation)':'Chest','Flys Middle (Middle Chest Isolation)':'Chest','Flys Lower (Lower Chest Isolation)':'Chest','Push-Up':'Chest','Pull-Up':'Back','Deadlift':'Back','Lat Pulldown':'Back','Incline Bench Row':'Back','Barbell / DB Row':'Back','Cable Row':'Back','Modified Lat Prayer':'Back','Squat':'Legs','Romanian Deadlift':'Legs','Leg Extension':'Legs','Bulgarian Split Squat':'Legs','Leg Press':'Legs','Hip Thrust':'Legs','Standing Calf Raise':'Legs','Seated Calf Raise':'Legs','Barbell Shrug':'Traps','Dumbbell Shrug':'Traps','Cable Shrug':'Traps','Overhead Press':'Shoulders','Lateral Raise':'Shoulders','Face Pulls':'Shoulders','Rear Delt':'Shoulders','Barbell Curl / EZ Bar Curl (Heavy compound/mass movement)':'Biceps','Incline Bicep Curls DB (Long head and stretch focus)':'Biceps','Bayesian Cable Curl / Preacher Curl (Constant tension / peak focus)':'Biceps','Hammer Curls DB / Cable (Brachialis and forearm thickness)':'Biceps','Concentration Curls (Isolation / burnout)':'Biceps','Spider Curl (Short head / peak squeeze)':'Biceps','Chin-Up (Compound / biceps and lats)':'Biceps','Close-Grip Bench Press':'Triceps','Skull Crushers':'Triceps','Overhead Extension':'Triceps','Triceps Pushdown':'Triceps','Triceps Kickbacks':'Triceps','Dips':'Triceps','Wrist Curls':'Forearms','Reverse Wrist Curls':'Forearms','Reverse Curl':'Forearms','Farmers Walk':'Forearms','Plate Pinches':'Forearms','Decline Plate Crunch':'Core','Hanging Leg Raises':'Core','Cable Crunches':'Core','Plank':'Core','Russian Twists':'Core','Ab Wheel Rollout':'Core','Dragon Flag':'Core','Running':'Cardio','Treadmill':'Cardio','Cycling':'Cardio','Jump Rope':'Cardio','Rowing':'Cardio','Stairmaster':'Cardio'};
const EXOLD={'Crunch':'Core','Barbell Curl':'Biceps','EZ Bar Curl':'Biceps','Incline Bicep Curls DB':'Biceps','Preacher Curl':'Biceps','Bayesian Cable Curl':'Biceps','Hammer Curls DB':'Biceps','Hammer Curls Cable':'Biceps','Concentration Curls':'Biceps','Overhead Press DB':'Shoulders','Overhead Press Barbell':'Shoulders','Lateral Raise DB':'Shoulders','Lateral Raise Cable':'Shoulders','Reverse Dumbbell Flyes':'Shoulders','Bent-Over Lateral Raises':'Shoulders','Cable Rear Delt Flyes':'Shoulders','Calf Raise':'Legs','DB Hip Thrust':'Legs','Barbell Hip Thrust':'Legs','Barbell Row':'Back','Dumbbell Row':'Back','Long Length Neutral Grip Pull-Ups':'Back','Lat-Focused Cable Row with Lengthened Partials':'Back','Cross-Body Lat Pull-Around':'Back','Incline DB Press':'Chest','Bench Press':'Chest','Bench Press DB':'Chest','Decline Bench Press':'Chest','Cable Flys Incline':'Chest','Cable Flys Middle Chest':'Chest','Cable Flys Lower Chest':'Chest'};
const R={"Arnold's Golden Six":['Bench Press (Middle / Overall Chest)','Squat','Pull-Up','Overhead Press','Barbell Curl / EZ Bar Curl (Heavy compound/mass movement)','Decline Plate Crunch'],'Push Day (PPL)':['Bench Press (Middle / Overall Chest)','Overhead Press','Incline Bench Press (Upper Chest)','Lateral Raise','Triceps Pushdown'],'Pull Day (PPL)':['Deadlift','Barbell / DB Row','Pull-Up','Lat Pulldown','Barbell Curl / EZ Bar Curl (Heavy compound/mass movement)'],'Leg Day (PPL)':['Squat','Leg Press','Romanian Deadlift','Decline Plate Crunch'],'Hypertrophy Gain Plan':['Incline Bench Press (Upper Chest)','Lat Pulldown','Leg Press','Lateral Raise','Barbell Curl / EZ Bar Curl (Heavy compound/mass movement)','Triceps Pushdown']};
/* ---------- Secure authentication: Supabase Auth only ---------- */
const ACC_KEY='nextlevel_accounts',SES_KEY='nextlevel_session',DK0='pulsefit_next_v2',OUTBOX='nextlevel_outbox';
const jget=(k,d)=>{try{const v=JSON.parse(localStorage.getItem(k));return v==null?d:v}catch(e){return d}};
const jset=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v));return true}catch(e){return false}};
const supabaseClient=window.NL_SUPABASE_CLIENT||null;
const MAP_KEY='nextlevel_datamap';let DKMAP=jget(MAP_KEY,{});if(!DKMAP||typeof DKMAP!=='object'||Array.isArray(DKMAP))DKMAP={};
/* Keep legacy profile/data-bucket metadata so existing workout data can be adopted by a Supabase account,
   but immediately remove all old client-side password verifiers/salts/credential remnants. */
const rawLegacyAccounts=jget(ACC_KEY,{});let ACC={};
if(rawLegacyAccounts&&typeof rawLegacyAccounts==='object'&&!Array.isArray(rawLegacyAccounts)){
 Object.entries(rawLegacyAccounts).forEach(([key,a])=>{if(!a||typeof a!=='object')return;
  const email=String(a.email||(String(key).includes('@')?key:'' )||'').toLowerCase();
  ACC[key]={id:String(a.id||key),type:a.type||'email',email,contact:a.contact||email,name:String(a.name||'Athlete').slice(0,60),phone:String(a.phone||''),alt:Array.isArray(a.alt)?a.alt.filter(x=>typeof x==='string').slice(0,5):[],birthday:String(a.birthday||''),dk:String(a.dk||''),created:String(a.created||'')};
 });
}
function legacyForEmail(email){const e=String(email||'').toLowerCase();return Object.values(ACC).find(a=>a&&a.email&&a.email.toLowerCase()===e)||null}
function dkFor(id){if(DKMAP[id])return DKMAP[id];const dk='nextlevel_data_'+id;DKMAP[id]=dk;jset(MAP_KEY,DKMAP);return dk}
function findAcc(id){return ACC[id]||Object.values(ACC).find(a=>a&&((a.alt||[]).includes(id)||a.email===id))||null}
const cachedAuthUser=window.NL_SUPABASE_CONFIGURED?window.NL_CACHED_AUTH_USER:null;
let SES=null;
if(cachedAuthUser&&cachedAuthUser.id){
 const old=legacyForEmail(cachedAuthUser.email),uid=cachedAuthUser.id,meta=cachedAuthUser.user_metadata||{};
 const dk=(old&&old.dk)||DKMAP[uid]||('nextlevel_data_'+uid);
 ACC[uid]={id:uid,type:'email',email:String(cachedAuthUser.email||'').toLowerCase(),contact:String(cachedAuthUser.email||''),name:String(meta.full_name||meta.name||(old&&old.name)||'Athlete').slice(0,60),phone:String(meta.phone||(old&&old.phone)||''),birthday:String(meta.birthday||(old&&old.birthday)||''),alt:[],dk,created:(old&&old.created)||''};
 SES={id:uid,dk,name:ACC[uid].name};DKMAP[uid]=dk;jset(SES_KEY,SES);
}else{try{localStorage.removeItem(SES_KEY)}catch(e){}}
jset(ACC_KEY,ACC);jset(MAP_KEY,DKMAP);
/* Retain only explicitly queued user feedback. Legacy account/profile payloads are discarded. */
function isOutboxItem(x){return !!x&&typeof x==='object'&&typeof x.message==='string'&&typeof x.type==='string'&&x.event!=='account-details'&&!('email' in x)&&!('phone' in x)&&!('name' in x)}
/* Drop legacy queued account/profile payloads. Only user-submitted feedback may be retried. */
const oldOutbox=jget(OUTBOX,[]);const feedbackOnly=Array.isArray(oldOutbox)?oldOutbox.filter(isOutboxItem).map(x=>({event:'feedback',type:String(x.type).slice(0,60),message:String(x.message).slice(0,1000),contact:String(x.contact||'').slice(0,120),ua:String(x.ua||'').slice(0,160),screen:String(x.screen||'').slice(0,30)})).slice(-50):[];jset(OUTBOX,feedbackOnly);
const K=SES?(ACC[SES.id].dk||SES.dk):'nextlevel_guest';try{localStorage.removeItem('pulsefit_next_v1')}catch(e){}
function normId(raw){const v=(raw||'').trim();if(!v)return null;if(v.includes('@')){const e=v.toLowerCase();return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e)?{id:e,type:'email'}:null}const d=v.replace(/\D/g,'');if(d.length<7||d.length>15||/[a-z]/i.test(v))return null;return{id:'tel:'+(v.startsWith('+')?'+':'')+d,type:'phone',phone:(v.startsWith('+')?'+':'')+d}}
/* Client-side password checks are UX only; Supabase performs secure credential storage and verification. */
const COMMON=['password','passw0rd','qwerty','letmein','welcome','admin','iloveyou','abc123','dragon','nextlevel','fitness','workout','srilanka','colombo'];
const SEQ=['0123','1234','2345','3456','4567','5678','6789','abcd','bcde','cdef','qwer','wert','asdf','sdfg','zxcv'];
const idNow=()=>($('#aEmail')||{}).value||'';
function pwCheck(pw,name,id){const low=pw.toLowerCase(),toks=[];(name||'').toLowerCase().split(/\s+/).forEach(t=>{if(t.length>=3)toks.push(t)});const local=(id||'').toLowerCase().split('@')[0];if(local.length>=3)toks.push(local);const weak=COMMON.some(w=>low.includes(w))||SEQ.some(w=>low.includes(w))||/(.)\1{2,}/.test(pw);const personal=toks.some(t=>low.includes(t));const rules=[['12+ characters',pw.length>=12],['Lowercase letter',/[a-z]/.test(pw)],['Uppercase letter',/[A-Z]/.test(pw)],['Number',/\d/.test(pw)],['Symbol (!@#$%)',/[^A-Za-z0-9]/.test(pw)],['No common word / pattern',!!pw&&!weak],['Not your name / email',!!pw&&!personal]];const pass=rules.filter(r=>r[1]).length;return{rules,pass,ok:pass===rules.length,missing:rules.filter(r=>!r[1]).map(r=>r[0]),long:pw.length>=16}}
function pwLive(){if(authMode!=='up')return;const pw=$('#aPw').value,c=pwCheck(pw,$('#aName').value,idNow());$('#pwRules').innerHTML=c.rules.map(([l,ok])=>`<li style="color:${ok?'var(--g)':'var(--mut)'}">${ok?'✓':'○'} ${l}</li>`).join('');const lvl=!pw?0:c.ok?(c.long?4:3):c.pass>=5?2:1,L=['Strength','Weak','Fair','Strong','Excellent'],C=['var(--mut)','#FF6B6B','#FFC400','var(--g)','var(--c)'];$('#pwBar').style.width=(pw?Math.max(8,c.pass/c.rules.length*100):0)+'%';$('#pwBar').style.background=C[lvl];$('#pwLbl').textContent=L[lvl];$('#pwLbl').style.color=C[lvl]}
function rint(n){if(!(window.crypto&&crypto.getRandomValues))return Math.floor(Math.random()*n);const a=new Uint32Array(1),lim=Math.floor(4294967296/n)*n;do{crypto.getRandomValues(a)}while(a[0]>=lim);return a[0]%n}
function genPw(){const set=['abcdefghijkmnopqrstuvwxyz','ABCDEFGHJKLMNPQRSTUVWXYZ','23456789','!@#$%^&*-_=+?'],all=set.join('');let out;do{const ch=set.map(x=>x[rint(x.length)]);while(ch.length<16)ch.push(all[rint(all.length)]);for(let i=ch.length-1;i>0;i--){const j=rint(i+1);[ch[i],ch[j]]=[ch[j],ch[i]]}out=ch.join('')}while(!pwCheck(out,$('#aName').value,idNow()).ok);$('#aPw').value=out;$('#aPw2').value=out;if($('#aPw').type==='password')togglePw();pwLive();toast('Strong password ready — save it somewhere safe')}
const sleep=ms=>new Promise(r=>setTimeout(r,ms));let authMode='in',authBusy=false;
function authErr(m){const e=$('#authErr');if(e){e.textContent=m||'';e.style.display=m?'block':'none'}if(m)authInfo('')}
function authInfo(m){const e=$('#authInfo');if(e){e.textContent=m||'';e.style.display=m?'block':'none'}if(m){const er=$('#authErr');if(er){er.textContent='';er.style.display='none'}}}
function setAuthMode(m){authMode=m;const up=m==='up';$('#authTabIn').classList.toggle('on',!up);$('#authTabUp').classList.toggle('on',up);$('#authInWrap').style.display=up?'none':'block';$('#authUpFields').style.display=up?'block':'none';$('#authConfWrap').style.display=up?'block':'none';$('#pwWrap').style.display=up?'block':'none';$('#authReset').style.display=up?'none':'flex';$('#aPw').placeholder=up?'Create a strong password':'Your password';$('#authTitle').textContent=up?'Create your account':'Welcome back';$('#authSub').textContent=up?'Create a secure account to sync your workouts and progress across devices.':'Sign in to access your workouts, nutrition and progress.';$('#authBtn').textContent=up?'Create Account':'Sign In';$('#aPw').autocomplete=up?'new-password':'current-password';$('#authFoot').innerHTML=up?'Already have an account? <a href="#" style="color:var(--g);font-weight:700" data-onclick="setAuthMode(\'in\');return false">Sign in</a>':'New here? <a href="#" style="color:var(--g);font-weight:700" data-onclick="setAuthMode(\'up\');return false">Create an account</a>';authErr('');authInfo('');if(up)pwLive()}
function togglePw(){const i=$('#aPw'),show=i.type==='password';i.type=show?'text':'password';if($('#aPw2'))$('#aPw2').type=i.type;$('#aPwEye').textContent=show?'Hide':'Show';$('#aPwEye').setAttribute('aria-label',show?'Hide password':'Show password')}
const REQ=window.NL_REQUIRE_LOGIN!==false;
function lockApp(){document.documentElement.classList.add('nl-locked')}
function unlockApp(){document.documentElement.classList.remove('nl-locked')}
function showAuth(m){$('#authLogo').innerHTML=ic('bolt',30);setAuthMode(m||'in');$('#auth').style.display='flex';document.body.style.overflow='hidden';if(!window.NL_SUPABASE_CONFIGURED)authErr('Secure cloud login is not configured yet. Follow SETUP.md, add your Supabase project URL and public anon key to supabase-config.js, then reload.');setTimeout(()=>{try{$(authMode==='up'?'#aName':'#aId').focus()}catch(e){}},60)}
function continueAsGuest(){if(REQ)return;try{localStorage.setItem('nextlevel_guest_mode','1')}catch(e){}$('#auth').style.display='none';document.body.style.overflow='';setCloudStatus('Local mode · data stays on this device until you sign in','warn');toast('Continuing in local mode')}
function appUserName(user){const md=user&&user.user_metadata||{};return String(md.full_name||md.name||user.email||'Athlete').slice(0,60)}
function dataHasContent(d){return !!(d&&((d.workouts||[]).length||(d.body||[]).length||(d.custom||[]).length||(d.plans||[]).length||Object.keys(d.meals||{}).length||Object.keys(d.water||{}).length))}
/* ---------- In-app dialogs (accessible replacement for confirm/prompt) ---------- */
function uiDialog(o){return new Promise(res=>{
 o=o||{};const d=$('#dlg'),inp=$('#dlgInput'),ok=$('#dlgOk'),cx=$('#dlgCancel'),prev=document.activeElement,prevOv=document.body.style.overflow;
 $('#dlgTitle').textContent=o.title||'Please confirm';$('#dlgMsg').textContent=o.message||'';$('#dlgMsg').style.display=o.message?'':'none';
 ok.textContent=o.okText||'OK';cx.textContent=o.cancelText||'Cancel';cx.style.display=o.alert?'none':'';ok.className='btn '+(o.danger?'danger-btn':'p');
 inp.hidden=!o.input;inp.value=o.value||'';inp.placeholder=o.placeholder||'';inp.maxLength=o.maxLength||60;
 const valid=()=>!o.validate||o.validate(inp.value);ok.disabled=!valid();inp.oninput=()=>{ok.disabled=!valid()};
 const close=v=>{d.hidden=true;document.body.style.overflow=prevOv;document.removeEventListener('keydown',key,true);ok.onclick=cx.onclick=d.onclick=inp.oninput=null;try{if(prev&&prev.focus)prev.focus()}catch(e){}res(v)};
 const accept=()=>{if(ok.disabled)return;close(o.input?inp.value:true)},dismiss=()=>close(o.input?null:false);
 ok.onclick=accept;cx.onclick=dismiss;d.onclick=e=>{if(e.target===d)dismiss()};
 const key=e=>{
  if(e.key==='Escape'){e.preventDefault();e.stopPropagation();dismiss();return}
  if(e.key==='Enter'&&e.target===inp){e.preventDefault();accept();return}
  if(e.key==='Tab'){const f=[inp,cx,ok].filter(x=>x&&!x.hidden&&x.style.display!=='none'&&!x.disabled);if(!f.length)return;const i=f.indexOf(document.activeElement);e.preventDefault();f[(i+(e.shiftKey?-1:1)+f.length)%f.length].focus()}};
 document.addEventListener('keydown',key,true);document.body.style.overflow='hidden';d.hidden=false;
 setTimeout(()=>(o.input?inp:(o.danger?cx:ok)).focus(),30);
})}
function askConfirm(message,o){return uiDialog(Object.assign({title:'Please confirm'},o||{},{message}))}
async function activateLocalSession(user, ev, extras){
 try{localStorage.removeItem('nextlevel_guest_mode')}catch(e){}
 const email=String(user.email||'').toLowerCase(),old=legacyForEmail(email),meta=user.user_metadata||{},uid=user.id;
 let dk=(old&&old.dk)||DKMAP[uid]||('nextlevel_data_'+uid);
 if(!old&&K==='nextlevel_guest'&&dataHasContent(S)&&!localStorage.getItem(dk)){
   if(await askConfirm('This browser has workout data that is not linked to an account. Would you like to move that data into your new account?',{title:'Move your existing data?',okText:'Move my data',cancelText:'Not now'})){try{localStorage.setItem(dk,JSON.stringify(S));localStorage.removeItem('nextlevel_guest');localStorage.removeItem('nextlevel_guest_bak')}catch(e){toast('Could not migrate guest data because browser storage is full')}}
 }
 const acc={id:uid,type:'email',email,contact:email,name:String((extras&&extras.name)||meta.full_name||meta.name||(old&&old.name)||'Athlete').slice(0,60),phone:String((extras&&extras.phone)||meta.phone||(old&&old.phone)||''),birthday:String((extras&&extras.birthday)||meta.birthday||(old&&old.birthday)||''),alt:[],dk,created:(old&&old.created)||new Date().toISOString()};
 ACC[uid]=acc;DKMAP[uid]=dk;jset(ACC_KEY,ACC);jset(MAP_KEY,DKMAP);SES={id:uid,dk,name:acc.name};jset(SES_KEY,SES);
 const profile={id:uid,name:acc.name,email,phone:acc.phone,birthday:acc.birthday,updatedAt:new Date().toISOString()};jset('nextlevel_user',profile);
 try{sessionStorage.setItem('nl_welcome',ev||'login')}catch(e){}
}
async function startSession(user,ev,extras){await activateLocalSession(user,ev,extras);location.reload()}
function authErrorMessage(error){const m=String(error&&error.message||'Could not complete sign-in. Try again.');if(/invalid login credentials/i.test(m))return 'Email or password is incorrect.';if(/email not confirmed/i.test(m))return 'Please confirm your email from the message we sent you before signing in.';if(/user already registered/i.test(m))return 'An account already exists with this email. Try signing in.';if(/password should be/i.test(m))return m;return m.slice(0,220)}
async function submitAuth(ev){ev.preventDefault();if(authBusy)return;authErr('');authInfo('');if(!supabaseClient)return authErr('Supabase is not configured. Open SETUP.md and add your project URL and public anon key to supabase-config.js.');const up=authMode==='up',pw=$('#aPw').value,btn=$('#authBtn');if(!pw)return authErr(up?'Create a password.':'Enter your password.');const emailRaw=up?$('#aEmail').value:$('#aId').value,email=String(emailRaw||'').trim().toLowerCase();if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))return authErr('Enter a valid email address.');let profile={};
 if(up){const name=$('#aName').value.replace(/[<>&"'`]/g,'').trim().slice(0,60),phone=$('#aPhone').value.trim(),bd=$('#aBday').value;if(!name)return authErr('Please enter your name.');if(!phone||!normId(phone)||normId(phone).type!=='phone')return authErr('Enter a valid phone number.');if(!bd||isNaN(new Date(bd))||bd>today()||bd<'1900-01-01')return authErr('Enter a valid birthday in the past.');const c=pwCheck(pw,name,email);if(!c.ok)return authErr('Password is too weak. Still needed: '+c.missing.join(', ')+'.');if($('#aPw2').value!==pw)return authErr('Passwords do not match.');profile={name,phone:phone.replace(/[<>"'`]/g,'').slice(0,30),birthday:bd}}
 authBusy=true;btn.disabled=true;btn.style.opacity='.65';btn.textContent=up?'Creating secure account…':'Signing in…';
 try{
  let result;
  if(up)result=await supabaseClient.auth.signUp({email,password:pw,options:{data:{full_name:profile.name,phone:profile.phone,birthday:profile.birthday},emailRedirectTo:location.origin+location.pathname}});
  else result=await supabaseClient.auth.signInWithPassword({email,password:pw});
  if(result.error)throw result.error;
  const user=result.data&&result.data.user,session=result.data&&result.data.session;
  if(!user)throw new Error('The authentication provider did not return a user.');
  /* Privacy: account name, phone, birthday and email stay with Supabase; never forward them to the feedback spreadsheet. */
  clearAuthForm();
  if(!session){authInfo(up?'Account created. Check your inbox and confirm your email, then return here to sign in.':'No active session was created. Try signing in again.');if(up)toast('Account created ✅');return}
  await startSession(user,up?'signup':'login',profile);
 }catch(error){authErr(authErrorMessage(error))}finally{authBusy=false;btn.disabled=false;btn.style.opacity='';btn.textContent=authMode==='up'?'Create Account':'Sign In'}}
function clearAuthForm(){['aId','aName','aEmail','aPhone','aBday','aPw','aPw2'].forEach(id=>{const el=$('#'+id);if(el)el.value=''});try{pwLive()}catch(e){}}
async function resetPassword(){if(!supabaseClient)return authErr('Supabase is not configured.');const email=String($('#aId').value||'').trim().toLowerCase();if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))return authErr('Enter your account email above first.');const b=$('#authReset');b.disabled=true;b.textContent='Sending reset email…';try{const {error}=await supabaseClient.auth.resetPasswordForEmail(email,{redirectTo:location.origin+location.pathname});if(error)throw error;authInfo('If an account exists for that email, a password-reset link has been sent.')}catch(e){authErr(authErrorMessage(e))}finally{b.disabled=false;b.textContent='Forgot password?'}}

const ymd=d=>d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
const today=()=>ymd(new Date());
const pd=s=>{const [y,m,d]=s.split('-').map(Number);return new Date(y,m-1,d)};
/* A workout is one session per calendar date in this app. Older local/cloud merge logic
   compared full JSON and could keep two versions of the same date as separate sessions.
   Consolidate by date; merge different exercises, and for an exercise present in both
   copies keep the richer entry (usually the version with more recorded sets). */
function mergeWorkoutRecords(input){
 const byDate=new Map();
 const rows=Array.isArray(input)?input:[];
 const setQuality=s=>{if(!s||typeof s!=='object')return 0;return ['w','r','c','m','d'].reduce((n,k)=>n+(s[k]!==undefined&&s[k]!==null&&s[k]!==''?1:0),0)};
 const exerciseQuality=e=>{
  const sets=Array.isArray(e&&e.sets)?e.sets:[];
  return sets.length*100+sets.reduce((n,s)=>n+setQuality(s),0)+(e&&e.m?1:0);
 };
 for(const raw of rows){
  if(!raw||typeof raw!=='object')continue;
  const date=String(raw.date||'').trim();
  if(!/^\d{4}-\d{2}-\d{2}$/.test(date))continue;
  const ex=Array.isArray(raw.ex)?raw.ex.filter(e=>e&&typeof e==='object'&&String(e.n||'').trim()).map(e=>({...e,sets:Array.isArray(e.sets)?e.sets:[]})):[];
  const prior=byDate.get(date);
  if(!prior){const first={...raw,date,ex};if(!raw.manual)delete first.manual;else first.manual=true;byDate.set(date,first);continue;}
  const combined={...prior,...raw,date,ex:[]};
  if(prior.manual||raw.manual)combined.manual=true;else delete combined.manual;
  const exByName=new Map();
  for(const e of [...(Array.isArray(prior.ex)?prior.ex:[]),...ex]){
   const key=String(e.n||'').trim().toLocaleLowerCase();
   if(!key)continue;
   const old=exByName.get(key);
   if(!old||exerciseQuality(e)>exerciseQuality(old))exByName.set(key,e);
  }
  combined.ex=[...exByName.values()];
  if(combined.ex.length)delete combined.manual;
  byDate.set(date,combined);
 }
 return [...byDate.values()].sort((a,b)=>String(b.date).localeCompare(String(a.date)));
}
let S=null;
{const rd=k=>{try{const r=localStorage.getItem(k);if(!r)return null;const o=JSON.parse(r);return o&&typeof o==='object'&&!Array.isArray(o)?{o,r}:null}catch(e){return null}};
 const a=rd(K),b=a?null:rd(K+'_bak');S=(a||b||{}).o||null; /* main copy, else the safety copy */
 if(a&&((a.o.workouts||[]).length||(a.o.body||[]).length||!rd(K+'_bak'))){try{localStorage.setItem(K+'_bak',a.r)}catch(e){}}}
if(!S||typeof S!=='object')S={};
scrubNames(S);
S.workouts=mergeWorkoutRecords(Array.isArray(S.workouts)?S.workouts:[]);
S.meals=cleanMealCollections(S.meals);
S.custom=S.custom||[];S.custom.forEach(c=>{if(c.g==='Arms')c.g='Biceps'});if(!Array.isArray(S.plans))S.plans=Array.isArray(S.plan)&&S.plan.length?[{name:'My Plan',ex:S.plan}]:[];delete S.plan;
const RN={'Dumbbell Row Variation':'Incline Bench Row','Crunch':'Decline Plate Crunch','Barbell Curl':'Barbell Curl / EZ Bar Curl (Heavy compound/mass movement)','EZ Bar Curl':'Barbell Curl / EZ Bar Curl (Heavy compound/mass movement)','Incline Bicep Curls DB':'Incline Bicep Curls DB (Long head and stretch focus)','Preacher Curl':'Bayesian Cable Curl / Preacher Curl (Constant tension / peak focus)','Bayesian Cable Curl':'Bayesian Cable Curl / Preacher Curl (Constant tension / peak focus)','Hammer Curls DB':'Hammer Curls DB / Cable (Brachialis and forearm thickness)','Hammer Curls Cable':'Hammer Curls DB / Cable (Brachialis and forearm thickness)','Concentration Curls':'Concentration Curls (Isolation / burnout)','Overhead Press DB':'Overhead Press','Overhead Press Barbell':'Overhead Press','Lateral Raise DB':'Lateral Raise','Lateral Raise Cable':'Lateral Raise','Reverse Dumbbell Flyes':'Rear Delt','Bent-Over Lateral Raises':'Rear Delt','Cable Rear Delt Flyes':'Rear Delt','DB Hip Thrust':'Hip Thrust','Barbell Hip Thrust':'Hip Thrust','Barbell Row':'Barbell / DB Row','Dumbbell Row':'Barbell / DB Row','Lat-Focused Cable Row with Lengthened Partials':'Cable Row','Bench Press':'Bench Press (Middle / Overall Chest)','Decline Bench Press':'Decline Bench Press (Lower Chest)','Cable Flys Incline':'Flys Incline (Upper Chest Isolation)','Cable Flys Middle Chest':'Flys Middle (Middle Chest Isolation)','Cable Flys Lower Chest':'Flys Lower (Lower Chest Isolation)'};
if(S.prs&&S.prs['Dumbbell Row Variation']){S.prs['Incline Bench Row']=S.prs['Dumbbell Row Variation'];delete S.prs['Dumbbell Row Variation']}S.workouts.forEach(w=>(w.ex||[]).forEach(e=>{if(RN[e.n])e.n=RN[e.n]}));(S.draft||[]).forEach(e=>{if(RN[e.n])e.n=RN[e.n]});S.plans.forEach(p=>{p.ex=[...new Set(p.ex.map(n=>RN[n]||n))]});S.draft=S.draft||[];S.body=S.body||[];S.unit=S.unit||'kg';if(S.sound===undefined)S.sound=true;
/* Readable cloud JSON schema (v2).
   Internally the legacy app uses compact keys; on Supabase we store human-readable field names.
   The decoder accepts both the old compact format and this new format so existing records remain usable. */
const CLOUD_TOP_TO_LONG={nut:'nutritionProfile',prs:'personalRecords',body:'bodyMeasurements',draft:'draftWorkout',unit:'weightUnit',sound:'soundEnabled',voice:'voiceGuidanceEnabled',water:'waterGlassesByDate',badges:'earnedBadges',custom:'customExercises',plans:'workoutPlans',meals:'mealsByDate'};
const CLOUD_NUT_TO_LONG={ht:'heightCm',act:'activityMultiplier',age:'ageYears',sex:'sex',goal:'goal'};
const CLOUD_PR_TO_LONG={b:'estimatedOneRepMax',w:'bestWeight'};
const CLOUD_BODY_TO_LONG={bw:'bodyWeight',bf:'bodyFatPercent',bi:'bicepsCm',ch:'chestCm',wa:'waistCm'};
const CLOUD_MEAL_TO_LONG={n:'name',k:'calories',p:'proteinGrams',c:'carbsGrams',f:'fatGrams'};
const CLOUD_EX_TO_LONG={n:'name',tg:'target',m:'metric'};
const CLOUD_SET_TO_LONG={w:'weight',r:'reps',c:'cardioValue',d:'completed'};
function remapCloudKeys(obj,map){
 if(!obj||typeof obj!=='object'||Array.isArray(obj))return obj;
 const out={};
 for(const [key,value] of Object.entries(obj)){
  const next=map[key]||key;
  if(!Object.prototype.hasOwnProperty.call(out,next)||next===key)out[next]=value;
 }
 return out;
}
function encodeCloudSet(set){return remapCloudKeys(set,CLOUD_SET_TO_LONG)}
function encodeCloudExercise(ex){const out=remapCloudKeys(ex,CLOUD_EX_TO_LONG);if(Array.isArray(ex&&ex.sets))out.sets=ex.sets.map(encodeCloudSet);return out}
function encodeReadableCloudData(source){
 const d=source&&typeof source==='object'?source:{};
 const out=remapCloudKeys(d,CLOUD_TOP_TO_LONG);out.schemaVersion=2;
 if(d.nut)out.nutritionProfile=remapCloudKeys(d.nut,CLOUD_NUT_TO_LONG);
 if(d.prs&&typeof d.prs==='object')out.personalRecords=Object.fromEntries(Object.entries(d.prs).map(([name,pr])=>[name,remapCloudKeys(pr,CLOUD_PR_TO_LONG)]));
 if(Array.isArray(d.body))out.bodyMeasurements=d.body.map(b=>remapCloudKeys(b,CLOUD_BODY_TO_LONG));
 if(Array.isArray(d.draft))out.draftWorkout=d.draft.map(encodeCloudExercise);
 if(Array.isArray(d.workouts))out.workouts=d.workouts.map(w=>{const v=remapCloudKeys(w,{ex:'exercises'});if(Array.isArray(w&&w.ex))v.exercises=w.ex.map(encodeCloudExercise);return v});
 if(d.meals&&typeof d.meals==='object'&&!Array.isArray(d.meals))out.mealsByDate=Object.fromEntries(Object.entries(d.meals).map(([day,items])=>[day,(Array.isArray(items)?items:[]).map(m=>remapCloudKeys(m,CLOUD_MEAL_TO_LONG))]));
 if(Array.isArray(d.plans))out.workoutPlans=d.plans.map(p=>{const v=remapCloudKeys(p,{ex:'exercises'});return v});
 if(Array.isArray(d.custom))out.customExercises=d.custom.map(c=>remapCloudKeys(c,{n:'name',g:'muscleGroup'}));
 return out;
}
const CLOUD_TOP_TO_SHORT=Object.fromEntries(Object.entries(CLOUD_TOP_TO_LONG).map(([a,b])=>[b,a]));
const CLOUD_NUT_TO_SHORT=Object.fromEntries(Object.entries(CLOUD_NUT_TO_LONG).map(([a,b])=>[b,a]));
const CLOUD_PR_TO_SHORT=Object.fromEntries(Object.entries(CLOUD_PR_TO_LONG).map(([a,b])=>[b,a]));
const CLOUD_BODY_TO_SHORT=Object.fromEntries(Object.entries(CLOUD_BODY_TO_LONG).map(([a,b])=>[b,a]));
const CLOUD_MEAL_TO_SHORT=Object.fromEntries(Object.entries(CLOUD_MEAL_TO_LONG).map(([a,b])=>[b,a]));
const CLOUD_EX_TO_SHORT=Object.fromEntries(Object.entries(CLOUD_EX_TO_LONG).map(([a,b])=>[b,a]));
const CLOUD_SET_TO_SHORT=Object.fromEntries(Object.entries(CLOUD_SET_TO_LONG).map(([a,b])=>[b,a]));
function decodeCloudSet(set){return remapCloudKeys(set,CLOUD_SET_TO_SHORT)}
function decodeCloudExercise(ex){const out=remapCloudKeys(ex,CLOUD_EX_TO_SHORT);if(Array.isArray(ex&&ex.sets))out.sets=ex.sets.map(decodeCloudSet);return out}
function decodeCloudData(source){
 const d=source&&typeof source==='object'&&!Array.isArray(source)?source:{};
 const isReadable=d.schemaVersion>=2||['nutritionProfile','personalRecords','bodyMeasurements','draftWorkout','mealsByDate','waterGlassesByDate','workoutPlans','customExercises','earnedBadges','weightUnit'].some(k=>Object.prototype.hasOwnProperty.call(d,k));
 if(!isReadable)return d; // legacy compact format from earlier app versions
 const raw={...d};delete raw.schemaVersion;
 const out=remapCloudKeys(raw,CLOUD_TOP_TO_SHORT);
 if(d.nutritionProfile)out.nut=remapCloudKeys(d.nutritionProfile,CLOUD_NUT_TO_SHORT);
 if(d.personalRecords&&typeof d.personalRecords==='object')out.prs=Object.fromEntries(Object.entries(d.personalRecords).map(([name,pr])=>[name,remapCloudKeys(pr,CLOUD_PR_TO_SHORT)]));
 if(Array.isArray(d.bodyMeasurements))out.body=d.bodyMeasurements.map(b=>remapCloudKeys(b,CLOUD_BODY_TO_SHORT));
 if(Array.isArray(d.draftWorkout))out.draft=d.draftWorkout.map(decodeCloudExercise);
 if(Array.isArray(d.workouts))out.workouts=d.workouts.map(w=>{const v=remapCloudKeys(w,{exercises:'ex'});if(Array.isArray(w&&w.exercises))v.ex=w.exercises.map(decodeCloudExercise);return v});
 if(d.mealsByDate&&typeof d.mealsByDate==='object'&&!Array.isArray(d.mealsByDate))out.meals=Object.fromEntries(Object.entries(d.mealsByDate).map(([day,items])=>[day,(Array.isArray(items)?items:[]).map(m=>remapCloudKeys(m,CLOUD_MEAL_TO_SHORT))]));
 if(Array.isArray(d.workoutPlans))out.plans=d.workoutPlans.map(p=>remapCloudKeys(p,{exercises:'ex'}));
 if(Array.isArray(d.customExercises))out.custom=d.customExercises.map(c=>remapCloudKeys(c,{name:'n',muscleGroup:'g'}));
 return out;
}

let cloudLoadDone=false,cloudSyncTimer=null,cloudSyncChain=Promise.resolve(),cloudSyncWarningShown=false,cloudVersion=null;
function setCloudStatus(message,kind){const el=$('#cloudStatus'),txt=$('#cloudStatusText'),retry=$('#cloudRetryBtn');if(!el||!txt)return;txt.textContent=message;el.classList.remove('ok','warn','bad');el.classList.add(kind||'warn');if(retry)retry.style.display=(kind==='bad'&&!!supabaseClient&&!!SES&&navigator.onLine!==false)?'inline-flex':'none'}
function cloudFriendlyError(err){const m=String(err&& (err.message||err.details||err.hint)||'').toLowerCase();if(navigator.onLine===false)return 'Offline · changes are saved on this device and will sync when you reconnect.';if(/jwt|token|session|auth/.test(m))return 'Cloud sync needs you to sign in again. Your local data is safe.';if(/row-level security|permission denied|42501|policy/.test(m))return 'Cloud sync blocked by database permissions. Check the fitness_data RLS policies and save_my_fitness_data RPC.';if(/function .* does not exist|could not find the function|pgrst202|42883/.test(m))return 'Cloud sync setup is incomplete: save_my_fitness_data RPC was not found. Run the latest supabase/schema.sql in SQL Editor.';if(/failed to fetch|network|fetch/.test(m))return 'Cannot reach Supabase. Check internet, project URL, and Supabase service status.';return 'Cloud sync paused · local data is safe. Check Supabase URL/key, database schema/RLS, then retry.'}
async function retryCloudSync(){if(!supabaseClient||!SES){setCloudStatus('Sign in to a configured Supabase account to sync.','warn');return}if(navigator.onLine===false){setCloudStatus('Offline · changes are saved on this device until you reconnect.','warn');return}try{setCloudStatus('Checking your account and retrying sync…','warn');const {data:{session},error}=await supabaseClient.auth.getSession();if(error)throw error;if(!session||session.user.id!==SES.id)throw new Error('session expired');await loadCloudData();await writeCloudSnapshot()}catch(err){console.warn('Manual cloud sync retry failed:',err);setCloudStatus(cloudFriendlyError(err),'bad')}}
function scheduleCloudSync(){if(!supabaseClient||!SES||!cloudLoadDone)return;clearTimeout(cloudSyncTimer);setCloudStatus('Changes saved on this device · syncing to your account…','warn');cloudSyncTimer=setTimeout(()=>{cloudSyncChain=cloudSyncChain.then(()=>writeCloudSnapshot()).catch(err=>{setCloudStatus(cloudFriendlyError(err),'bad');if(!cloudSyncWarningShown){cloudSyncWarningShown=true;console.warn('Cloud sync error:',err)}})},800)}
function isCloudVersionConflict(error){return !!error&&(error.code==='40001'||/fitness_data_conflict/i.test(String(error.message||'')))}
function rpcRow(data){return Array.isArray(data)?(data[0]||null):(data&&typeof data==='object'?data:null)}
async function readLatestCloudRow(){const {data,error}=await supabaseClient.from('fitness_data').select('app_data,updated_at').eq('user_id',SES.id).maybeSingle();if(error)throw error;return data||null}
async function writeCloudSnapshot(){
 if(!supabaseClient||!SES||!cloudLoadDone)return;
 const {data:{session},error:sessionError}=await supabaseClient.auth.getSession();
 if(sessionError)throw sessionError;
 if(!session||session.user.id!==SES.id)throw new Error('Your session expired. Sign in again to sync.');
 for(let attempt=0;attempt<3;attempt++){
  const snapshot=encodeReadableCloudData(JSON.parse(JSON.stringify(S)));
  const {data,error}=await supabaseClient.rpc('save_my_fitness_data',{p_app_data:snapshot,p_expected_updated_at:cloudVersion});
  if(!error){
   const saved=rpcRow(data);
   if(saved&&saved.updated_at)cloudVersion=saved.updated_at;
   else {const latest=await readLatestCloudRow();cloudVersion=latest?latest.updated_at:null}
   cloudSyncWarningShown=false;
   setCloudStatus('Synced to your account · '+new Date().toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'}),'ok');
   return;
  }
  if(!isCloudVersionConflict(error))throw error;
  const latest=await readLatestCloudRow();
  const currentLocal=JSON.parse(JSON.stringify(S));
  S=normalizeCloudData(mergeCloudData(currentLocal,decodeCloudData(latest&&latest.app_data||{})));
  try{localStorage.setItem(K,JSON.stringify(S))}catch(e){}
  cloudVersion=latest?latest.updated_at:null;
  renderAll();
 }
 throw new Error('fitness_data_conflict: cloud data changed repeatedly. Local data is preserved; please retry syncing in a moment.');
}
function save(){try{localStorage.setItem(K,JSON.stringify(S))}catch(e){if(!save.w){save.w=1;toast('Could not save — browser storage is full or blocked')}}scheduleCloudSync()}
function stableJsonValue(v){if(Array.isArray(v))return v.map(stableJsonValue);if(v&&typeof v==='object'){const o={};Object.keys(v).sort().forEach(k=>o[k]=stableJsonValue(v[k]));return o}return v}
function sameJson(a,b){try{return JSON.stringify(stableJsonValue(a))===JSON.stringify(stableJsonValue(b))}catch(e){return false}}
function uniqueMerge(a,b,keyFn){const out=[],seen=new Set();for(const x of [...(Array.isArray(a)?a:[]),...(Array.isArray(b)?b:[])]){let k;try{k=keyFn?keyFn(x):JSON.stringify(x)}catch(e){k=JSON.stringify(x)}if(!seen.has(k)){seen.add(k);out.push(x)}}return out}
/* PostgreSQL JSONB may return object properties in a different order than localStorage.
   Compare meals by their actual fields, not JSON.stringify property order, so local+cloud
   copies of the same meal do not appear twice after a refresh. */
function mealMergeKey(x){
 if(!x||typeof x!=='object')return JSON.stringify(x);
 const name=String(x.n||'Meal').normalize('NFKC').trim().replace(/\s+/g,' ').toLocaleLowerCase();
 const num=k=>{const v=Number(x[k]);return Number.isFinite(v)?String(Math.round(v*1000)/1000):'0'};
 return JSON.stringify([name,num('k'),num('p'),num('c'),num('f')]);
}
function cleanMealCollections(mealsObject){
 const out=mealsObject&&typeof mealsObject==='object'&&!Array.isArray(mealsObject)?{...mealsObject}:{};
 Object.keys(out).forEach(day=>{out[day]=uniqueMerge([],Array.isArray(out[day])?out[day]:[],mealMergeKey)});
 return out;
}
function mergeCloudData(local,remote){local=local&&typeof local==='object'?local:{};remote=remote&&typeof remote==='object'?remote:{};const out={...local,...remote};
 out.workouts=mergeWorkoutRecords([...(Array.isArray(local.workouts)?local.workouts:[]),...(Array.isArray(remote.workouts)?remote.workouts:[])]);
 out.body=uniqueMerge(local.body,remote.body,x=>String(x&&x.date||'')+'|'+JSON.stringify(x));
 out.custom=uniqueMerge(local.custom,remote.custom,x=>String(x&&x.n||'').toLowerCase());
 out.plans=uniqueMerge(local.plans,remote.plans,x=>String(x&&x.name||'').toLowerCase());
 out.badges=uniqueMerge(local.badges,remote.badges,x=>String(x));out.draft=Array.isArray(local.draft)&&local.draft.length?local.draft:(Array.isArray(remote.draft)?remote.draft:[]);
 const lm=local.meals&&typeof local.meals==='object'?local.meals:{},rm=remote.meals&&typeof remote.meals==='object'?remote.meals:{};
 out.meals={...rm,...lm};
 new Set([...Object.keys(lm),...Object.keys(rm)]).forEach(day=>{out.meals[day]=uniqueMerge(Array.isArray(lm[day])?lm[day]:[],Array.isArray(rm[day])?rm[day]:[],mealMergeKey)});
 out.water={...(remote.water&&typeof remote.water==='object'?remote.water:{}),...(local.water&&typeof local.water==='object'?local.water:{})};Object.keys(remote.water||{}).forEach(day=>{out.water[day]=Math.max(Number((local.water||{})[day])||0,Number((remote.water||{})[day])||0)});
 out.prs={...(remote.prs&&typeof remote.prs==='object'?remote.prs:{}),...(local.prs&&typeof local.prs==='object'?local.prs:{})};Object.keys(remote.prs||{}).forEach(n=>{const l=(local.prs||{})[n],r=remote.prs[n];if(l&&r)out.prs[n]=(Number(l.b)||0)>=(Number(r.b)||0)?l:r});
 out.nut=remote.nut||local.nut||{goal:'maint',sex:'m',age:0,ht:0,act:1.55};out.unit=remote.unit||local.unit||'kg';out.sound=remote.sound===undefined?(local.sound!==false):remote.sound!==false;out.voice=remote.voice===undefined?(local.voice!==false):remote.voice!==false;
 return out}
/* Defence in depth: names that arrive from cloud/local storage are cleaned the same way as names typed in the app. */
function scrubNames(d){const c=v=>typeof v==='string'?v.replace(/[<>&"'`]/g,'').trim().slice(0,80):'';
 const ex=a=>Array.isArray(a)&&a.forEach(e=>{if(e&&typeof e==='object')e.n=c(e.n)});
 try{(d.workouts||[]).forEach(w=>w&&ex(w.ex));ex(d.draft);(d.custom||[]).forEach(x=>{if(x&&typeof x==='object')x.n=c(x.n)});(d.plans||[]).forEach(p=>{if(p&&typeof p==='object'){p.name=c(p.name);if(Array.isArray(p.ex))p.ex=p.ex.map(c)}});
  if(d.meals&&typeof d.meals==='object')Object.values(d.meals).forEach(a=>Array.isArray(a)&&a.forEach(m=>{if(m&&typeof m==='object')m.n=c(m.n)}))}catch(e){}
 return d}
function normalizeCloudData(d){d=d&&typeof d==='object'?d:{};scrubNames(d);d.workouts=mergeWorkoutRecords(Array.isArray(d.workouts)?d.workouts:[]);d.custom=Array.isArray(d.custom)?d.custom:[];d.plans=Array.isArray(d.plans)?d.plans:[];d.draft=Array.isArray(d.draft)?d.draft:[];d.body=Array.isArray(d.body)?d.body:[];d.meals=cleanMealCollections(d.meals);d.water=d.water&&typeof d.water==='object'?d.water:{};d.nut=Object.assign({goal:'maint',sex:'m',age:0,ht:0,act:1.55},d.nut&&typeof d.nut==='object'?d.nut:{});d.badges=Array.isArray(d.badges)?d.badges:[];d.prs=d.prs&&typeof d.prs==='object'?d.prs:{};d.unit=d.unit==='lb'?'lb':'kg';d.sound=d.sound!==false;d.voice=d.voice!==false;return d}
async function loadCloudData(){if(!supabaseClient||!SES)return;setCloudStatus('Checking your account and loading cloud data…','warn');cloudLoadDone=false;
 const {data:row,error}=await supabaseClient.from('fitness_data').select('app_data,updated_at').eq('user_id',SES.id).maybeSingle();if(error)throw error;
 cloudVersion=row?row.updated_at:null;
 const localSnapshot=JSON.parse(JSON.stringify(S));let merged;
 if(row&&row.app_data&&typeof row.app_data==='object')merged=mergeCloudData(localSnapshot,decodeCloudData(row.app_data));else merged=localSnapshot;
 S=normalizeCloudData(merged);try{localStorage.setItem(K,JSON.stringify(S))}catch(e){}
 cloudLoadDone=true;renderAll();
 if(!row||!sameJson(row.app_data,encodeReadableCloudData(S))){scheduleCloudSync()}else setCloudStatus('Synced to your account','ok');
}
async function initializeCloudSync(){
 if(!supabaseClient){setCloudStatus('Secure cloud login not configured · see SETUP.md','warn');return}
 try{
  const {data,error}=await supabaseClient.auth.getSession();
  if(error)throw error;
  const session=data&&data.session;
  if(!session){if(SES&&navigator.onLine!==false){try{localStorage.removeItem('nl-fit-auth');localStorage.removeItem(SES_KEY)}catch(e){}location.reload();return}setCloudStatus(navigator.onLine===false?'Offline · local data remains available until you reconnect.':'Sign in to sync your fitness data','warn');return}
  if(REQ&&navigator.onLine!==false){
   // Server-verified check: getSession() only reads local storage, getUser() asks Supabase Auth.
   let ue=null,uu=null;try{const r=await supabaseClient.auth.getUser();ue=r.error;uu=r.data&&r.data.user}catch(x){ue=x}
   const net=!!ue&&(ue.name==='AuthRetryableFetchError'||ue instanceof TypeError||ue.status===0);
   if(!net&&(ue||!uu)){try{await supabaseClient.auth.signOut({scope:'local'})}catch(x){}try{localStorage.removeItem('nl-fit-auth');localStorage.removeItem(SES_KEY)}catch(x){}location.reload();return}
  }
  if(!SES||SES.id!==session.user.id){await activateLocalSession(session.user,'login');location.reload();return}
  unlockApp();
  checkAdminAccess();
  // Subscribe to auth changes so a remote sign-out cannot leave a stale account view open.
  supabaseClient.auth.onAuthStateChange((event,newSession)=>{if(event==='SIGNED_OUT'&&!window.NL_DELETING_ACCOUNT){try{localStorage.removeItem(SES_KEY);localStorage.removeItem(UKEY)}catch(e){}location.reload()}else if((event==='SIGNED_IN'||event==='USER_UPDATED')&&newSession&&SES&&newSession.user.id!==SES.id){activateLocalSession(newSession.user,'login');location.reload()}});
  await loadCloudData();
 }catch(e){if(SES)unlockApp();cloudLoadDone=true;setCloudStatus(navigator.onLine===false?'Offline · changes stay on this device until you reconnect.':'Cloud sync could not start · verify Supabase setup and RLS policies.','bad');console.error('Cloud initialization error:',e)}
}

const grp=n=>EX[n]||EXOLD[n]||(S.custom.find(c=>c.n===n)||{}).g||'Other';
const allEx=()=>[...Object.keys(EX),...S.custom.map(c=>c.n)];
const KG=2.20462,toU=kg=>S.unit==='kg'?kg:kg*KG,toKg=v=>S.unit==='kg'?v:v/KG;
const fmt=kg=>{const v=toU(kg);return(Math.round(v*10)/10).toString()};
const fv=kg=>{const v=toU(kg);return(v>=10000?(v/1000).toFixed(1)+'k':Math.round(v).toLocaleString())+' '+S.unit};
const e1=(w,r)=>w>0?w*(1+r/30):0;
/* time-based (isometric) exercises log seconds in r; cardio logs duration in r (seconds) + distance/calories/jumps/steps in c; neither has weight volume */
const TIMED=/\b(plank|wall sit|dead hang|hollow hold|l-sit|isometric|hold)\b/i;
const isTime=n=>TIMED.test(n||'');
const isCardio=n=>grp(n)==='Cardio';
const noReps=n=>isTime(n)||isCardio(n);
const fmtT=t=>{t=Math.round(t||0);if(t<60)return t+' sec';const m=Math.floor(t/60),r=t%60;return m+' min'+(r?' '+r+' sec':'')};
const CM={km:['Distance (km)','km'],kcal:['Calories (kcal)','kcal'],jumps:['Jumps','jumps'],steps:['Steps','steps']};
const cOpts=n=>n==='Jump Rope'?['jumps','kcal']:n==='Stairmaster'?['steps','kcal']:['km','kcal'];
const cMet=e=>CM[e.m]?e.m:cOpts(e.n)[0];
const fmtC=(m,c)=>(Math.round(c*100)/100)+' '+CM[m][1];
const cTxt=(s,m)=>[s.r?fmtT(s.r):'',s.c?fmtC(m,s.c):''].filter(Boolean).join(' \u00b7 ')||'\u2014';
const parseDur=v=>{v=String(v||'').trim();if(!v)return 0;if(v.includes(':')){const a=v.split(':');return Math.max(0,Math.round((parseFloat(a[0])||0)*60+(parseFloat(a[1])||0)))}return Math.max(0,Math.round((parseFloat(v)||0)*60))};
const durIn=t=>{t=Math.round(t||0);if(!t)return'';const m=Math.floor(t/60),r=t%60;return r?m+':'+String(r).padStart(2,'0'):String(m)};
const tTot=ex=>ex.sets.reduce((a,s)=>a+s.r,0);
const cTot=ex=>ex.sets.reduce((a,s)=>a+(s.c||0),0);
const volOf=ex=>noReps(ex.n)?0:ex.sets.reduce((a,s)=>a+s.w*s.r,0);
const mainV=e=>noReps(e.n)?tTot(e):volOf(e);
const mainT=e=>isCardio(e.n)?cTxt({r:tTot(e),c:cTot(e)},cMet(e)):isTime(e.n)?fmtT(tTot(e)):fv(volOf(e));
const wkStart=d=>{const x=new Date(d);x.setHours(0,0,0,0);x.setDate(x.getDate()-((x.getDay()+6)%7));return x};
const toast=m=>{const t=document.createElement('div');t.className='toast';t.textContent=m;document.body.appendChild(t);setTimeout(()=>t.remove(),1800)};

/* ---------- Navigation ---------- */
Object.assign(P,{clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',cup:'<path d="M5 3h14l-2 18H7zM6 9h12"/>',ruler:'<path d="M3 17L17 3l4 4L7 21zM8 12l2 2M11 9l2 2M14 6l2 2"/>',trophy:'<path d="M8 4h8v6a4 4 0 0 1-8 0zM8 6H4v2a4 4 0 0 0 4 4M16 6h4v2a4 4 0 0 1-4 4M12 14v4M8 21h8"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>'});
const NAV_PRIMARY=[['dash','Home','home'],['log','Train','dumb'],['nut','Fuel','cup'],['his','Progress','clock']];
const NAV_MORE=[['timer','Rest Timer','timer','Set a rest period between sets'],['cal','Training Days','cal','Calendar, monthly activity and streaks'],['ai','Recovery','bot','Readiness estimates and training tips'],['body','Body Progress','ruler','Weight and measurement charts'],['awd','Awards & PRs','trophy','Badges, records and share cards'],['about','Help & About','info','App information and developer feedback']];
const ADMIN_LINK=['admin','Admin Dashboard','shield','Server-authorized user and service overview'];
let NAV=NAV_PRIMARY.concat(NAV_MORE);
$('#navs').innerHTML=NAV_PRIMARY.map(([k,l,i])=>`<button type="button" data-k="${k}" aria-label="${l}" data-onclick="go('${k}')">${ic(i,22)}<span>${l}</span></button>`).join('')+`<button type="button" data-k="more" aria-label="More tools" aria-haspopup="dialog" data-onclick="openMoreMenu()">${ic('more',22)}<span>More</span></button>`;
function renderMoreLinks(){const list=NAV_MORE.concat(window.NL_IS_ADMIN?[ADMIN_LINK]:[]);NAV=NAV_PRIMARY.concat(list);$('#moreLinks').innerHTML=list.map(([k,l,i,d])=>`<button type="button" class="more-link" data-onclick="go('${k}');closeMoreMenu()"><span class="more-link-icon">${ic(i,22)}</span><span class="more-link-text"><b>${l}</b><small>${d}</small></span><span class="more-chevron">›</span></button>`).join('')}
renderMoreLinks();
/* The Admin entry appears only after the server confirms this account is on the admin list. */
async function checkAdminAccess(){if(!supabaseClient||!SES)return;try{const {data,error}=await supabaseClient.rpc('is_fitness_admin');if(error)throw error;const yes=data===true;if(yes!==!!window.NL_IS_ADMIN){window.NL_IS_ADMIN=yes;renderMoreLinks()}}catch(e){console.warn('Admin check unavailable:',e&&e.message)}}
function openMoreMenu(){const m=$('#moreMenu');m.classList.add('show');m.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';const b=m.querySelector('.more-link');if(b)b.focus()}
function closeMoreMenu(){const m=$('#moreMenu');m.classList.remove('show');m.setAttribute('aria-hidden','true');if(!$('#tour').classList.contains('show')&&getComputedStyle($('#auth')).display==='none'&&getComputedStyle($('#onb')).display==='none')document.body.style.overflow='';const b=$('#navs [data-k="more"]');if(b)b.focus()}
function go(k){closeMoreMenuIfOpen();document.querySelectorAll('.tab').forEach(t=>t.classList.toggle('act',t.id==='t-'+k));document.querySelectorAll('#navs button[data-k]').forEach(b=>b.classList.toggle('act',b.dataset.k===k));window.scrollTo({top:0,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});renderAll();if(k==='admin')loadAdminDashboard()}
function closeMoreMenuIfOpen(){const m=$('#moreMenu');if(m&&m.classList.contains('show')){m.classList.remove('show');m.setAttribute('aria-hidden','true');if(getComputedStyle($('#auth')).display==='none'&&getComputedStyle($('#onb')).display==='none'&&!$('#tour').classList.contains('show'))document.body.style.overflow=''}}
const SECTION_META={admin:['Admin dashboard','Server-verified administration tools.'],log:['Workout builder','Choose a routine, add exercises, and record each set.'],timer:['Rest timer','Keep your rest periods consistent between sets.'],his:['Progress history','Review workouts and compare your training over time.'],cal:['Training calendar','See your training rhythm and monthly consistency.'],ai:['Recovery assistant','Use recent training and how you feel to guide today’s session.'],nut:['Fuel & nutrition','Track meals, macros, and water toward your goal.'],body:['Body progress','Record body weight and measurements to see trends.'],awd:['Achievements','Celebrate personal records and training consistency.'],about:['Help & about','Find app information, back up data, and contact the developer.']};
Object.entries(SECTION_META).forEach(([id,meta])=>{const sec=$('#t-'+id);if(!sec||sec.querySelector('.section-heading'))return;const h=document.createElement('div');h.className='section-heading';const t=document.createElement('h1');t.textContent=meta[0];const p=document.createElement('p');p.textContent=meta[1];h.append(t,p);sec.prepend(h)});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&$('#moreMenu').classList.contains('show'))closeMoreMenu()});

/* ---------- Dashboard ---------- */
let chart;
/* Best previous week (volume, sets, reps): rings fill against it, so they only complete when you beat your best by a margin. */
function bestWeek(ws){const m={};S.workouts.forEach(w=>{const d=wkStart(pd(w.date));if(d>=ws)return;const k=+d,o=m[k]||(m[k]=[0,0,0]);(w.ex||[]).forEach(e=>{o[0]+=volOf(e);o[1]+=e.sets.length;o[2]+=noReps(e.n)?0:e.sets.reduce((a,x)=>a+x.r,0)})});return Object.values(m).reduce((b,o)=>[Math.max(b[0],o[0]),Math.max(b[1],o[1]),Math.max(b[2],o[2])],[0,0,0])}
const fmtRest=sec=>{sec=Math.round(sec);if(sec<=0)return '—';const h=Math.floor(sec/3600),m=Math.floor(sec%3600/60),s=sec%60;return h?h+'h '+m+'m':m?m+'m'+(s?' '+s+'s':''):s+'s'};
let volPopRing=0;
function updVolPop(){const d=window.VOLPOP,pop=$('#volPop');if(!d||!pop||!volPopRing)return;
 const n=volPopRing,col=['var(--r1)','var(--r2)','var(--r3)'][n-1];
 $('#vpT').style.color=col;
 if(n===1){const kg=Math.round(d.vol).toLocaleString(),lb=Math.round(d.vol*KG).toLocaleString();
  $('#vpT').textContent='Weekly Volume';$('#vpV').textContent=fv(d.vol);$('#vpA').innerHTML=$('#mVolD').innerHTML;
  $('#vpB').textContent=(S.unit==='kg'?'= '+lb+' lb':'= '+kg+' kg');
  $('#vpC').innerHTML='Rest <b>'+fmtRest(d.rest)+'</b>'}
 else if(n===2){$('#vpT').textContent='Total Sets';$('#vpV').textContent=$('#mSets').textContent;$('#vpA').textContent='this week';$('#vpB').textContent='';$('#vpC').innerHTML=''}
 else{$('#vpT').textContent='Total Reps';$('#vpV').textContent=$('#mReps').textContent;$('#vpA').textContent='this week';$('#vpB').textContent='';$('#vpC').innerHTML=''}}
function toggleVolPop(n,e){if(e)e.stopPropagation();const p=$('#volPop');if(!p)return;if(!p.hidden&&volPopRing===n){p.hidden=true;return}volPopRing=n;updVolPop();p.hidden=false}
[1,2,3].forEach(n=>['#rgDot','#rgHit'].forEach(q=>{const el=$(q+n);if(el)el.addEventListener('click',e=>toggleVolPop(n,e))}));
document.addEventListener('click',e=>{const p=$('#volPop');if(p&&!p.hidden&&!p.contains(e.target))p.hidden=true});
function renderDash(){
 const ws=wkStart(new Date()),pw=new Date(ws);pw.setDate(pw.getDate()-7);
 const inRange=(a,b)=>S.workouts.filter(w=>{const d=pd(w.date);return d>=a&&d<b});
 const nw=new Date(ws);nw.setDate(nw.getDate()+7);
 const cur=inRange(ws,nw),prev=inRange(pw,ws);
 const sum=(ws_,f)=>ws_.reduce((a,w)=>a+w.ex.reduce((b,e)=>b+f(e),0),0);
 const v=sum(cur,volOf),pv=sum(prev,volOf);
 $('#mVol').textContent=fv(v);
 const ch=pv?Math.round((v-pv)/pv*100):0;
 $('#mVolD').innerHTML=pv?`<span style="color:${ch>=0?'var(--g)':'#FF6B6B'}">${ch>=0?'▲':'▼'} ${Math.abs(ch)}%</span> <span style="color:var(--mut)">vs last week</span>`:'<span style="color:var(--mut)">no prior week</span>';
 $('#mSets').textContent=sum(cur,e=>e.sets.length);
 $('#mReps').textContent=sum(cur,e=>noReps(e.n)?0:e.sets.reduce((a,s)=>a+s.r,0));
 let best=0,bn='';S.workouts.forEach(w=>w.ex.forEach(e=>e.sets.forEach(s=>{const x=e1(s.w,s.r);if(x>best){best=x;bn=e.n}})));
 $('#m1rm').textContent=fv(best);$('#m1rmN').textContent=bn||'No lifts yet';
 {const fr_=(c,p)=>c<=0?0:Math.min(1,c/(Math.max(p,c)*1.1)),rp=e=>noReps(e.n)?0:e.sets.reduce((a,x)=>a+x.r,0),sv=sum(cur,e=>e.sets.length),ps=sum(prev,e=>e.sets.length),rv=sum(cur,rp),prr=sum(prev,rp),bw=bestWeek(ws),fr=[fr_(v,bw[0]),fr_(sv,bw[1]),fr_(rv,bw[2])];
  [['rg1',94],['rg2',74],['rg3',54]].forEach(([id,r],i)=>{const el=$('#'+id);if(el){const C=2*Math.PI*r;el.style.strokeDasharray=(fr[i]*C)+' '+C}});
  [[1,94],[2,74],[3,54]].forEach(([n,r])=>{const an=(-90+fr[n-1]*360)*Math.PI/180,x=(110+r*Math.cos(an)).toFixed(2),y=(110+r*Math.sin(an)).toFixed(2);['#rgDot','#rgHit'].forEach(q=>{const el=$(q+n);if(el){el.setAttribute('cx',x);el.setAttribute('cy',y)}})});
  window.VOLPOP={vol:v,rest:sum(cur,e=>(e.rest||0)*e.sets.length),restSets:sum(cur,e=>e.rest?e.sets.length:0),sets:sv};updVolPop();
  const mg=$('#ringMsg');if(mg)mg.textContent=!(v||sv||rv)?'Log a workout to fill your rings':(v>=pv?'Great Job!':'Keep pushing!')}
 const cut=new Date();cut.setDate(cut.getDate()-7);cut.setHours(0,0,0,0);const g={};
 S.workouts.filter(w=>pd(w.date)>cut).forEach(w=>w.ex.forEach(e=>g[grp(e.n)]=(g[grp(e.n)]||0)+e.sets.length));
 const ent=Object.entries(g).sort((a,b)=>b[1]-a[1]),mx=ent.length?ent[0][1]:1;
 $('#mFocus').innerHTML=ent.length?ent.slice(0,4).map(([k,n])=>`<div><div class="flex justify-between text-xs mb-1"><span>${k}</span><span style="color:var(--mut)">${n} sets</span></div><div class="bar"><i style="width:${n/mx*100}%"></i></div></div>`).join(''):'<div class="text-sm" style="color:var(--mut)">No workouts logged yet.</div>';
 const labels=[],vol=[],str=[],meta=[];let rngA=null,rngB=null;
 for(let i=(cp==='d'?6:5)+cpOff;i>=cpOff;i--){const M=cp==='m',D=cp==='d',N=new Date(),a=M?new Date(N.getFullYear(),N.getMonth()-i,1):D?new Date(N.getFullYear(),N.getMonth(),N.getDate()-i):new Date(ws),b=M?new Date(N.getFullYear(),N.getMonth()-i+1,1):D?new Date(N.getFullYear(),N.getMonth(),N.getDate()-i+1):new Date(ws);if(!M&&!D){a.setDate(a.getDate()-i*7);b.setDate(b.getDate()-i*7+7)}const w=inRange(a,b);if(!rngA)rngA=new Date(a);rngB=new Date(b);
  labels.push(a.toLocaleDateString(undefined,M?{month:'short'}:D?{weekday:'short',day:'numeric'}:{month:'short',day:'numeric'}));vol.push(Math.round(toU(sum(w,volOf))));
  let m=0,bn='';w.forEach(x=>x.ex.forEach(e=>e.sets.forEach(s=>{const q=e1(s.w,s.r);if(q>m){m=q;bn=e.n}})));str.push(m?Math.round(toU(m)):null);
   {const e2=new Date(b);e2.setDate(e2.getDate()-1);const f=(d,o)=>d.toLocaleDateString(undefined,o);
    meta.push({title:M?f(a,{month:'long',year:'numeric'}):D?f(a,{weekday:'long',month:'short',day:'numeric'}):f(a,{month:'short',day:'numeric'})+' – '+f(e2,{month:'short',day:'numeric'}),n:w.length,vol:sum(w,volOf),sets:sum(w,e=>e.sets.length),reps:sum(w,e=>noReps(e.n)?0:e.sets.reduce((q,x)=>q+x.r,0)),best:m,bn})}}
 {const rl=$('#cpRange'),nx=$('#cpNext');if(rl&&rngA&&rngB){const e=new Date(rngB);e.setDate(e.getDate()-1);const o={month:'short',day:'numeric',year:'numeric'};rl.textContent=cpOff?rngA.toLocaleDateString(undefined,o)+' – '+e.toLocaleDateString(undefined,o):'Latest · up to '+e.toLocaleDateString(undefined,o)}if(nx){nx.disabled=!cpOff;nx.style.opacity=cpOff?'':'.4'}}
 cpMeta=meta;if(cpSel==null||cpSel>=meta.length)cpSel=meta.length-1;
  const data={labels,datasets:[{type:'bar',label:'Volume ('+S.unit+')',data:vol,backgroundColor:c=>c.dataIndex===cpSel?'#00FF66':'rgba(0,255,102,.45)',borderColor:'#00FF66',borderWidth:c=>c.dataIndex===cpSel?2:1,borderRadius:8,yAxisID:'y'},{type:'line',label:'Best est. 1RM ('+S.unit+')',data:str,borderColor:'#00E5FF',backgroundColor:'#00E5FF',tension:.4,pointRadius:c=>c.dataIndex===cpSel?8:4,pointHoverRadius:9,spanGaps:true,yAxisID:'y1'}]};
 const tick={color:cssv('--mut')},grid={color:cssv('--grid')};
 if(chart){chart.data=data;chart.update();chart.resize()}else if(window.Chart)chart=new Chart($('#chart'),{type:'bar',data,options:{responsive:true,maintainAspectRatio:false,interaction:{mode:'index',intersect:false},onClick:(ev,_a,ch)=>{if(Date.now()-(window.__cpDrag||0)<400)return;const h=ch.getElementsAtEventForMode(ev,'index',{intersect:false},true);if(h.length&&h[0].index!==cpSel){cpSel=h[0].index;ch.update('none');cpDetail()}},plugins:{legend:{labels:{color:cssv('--lg'),usePointStyle:true}}},scales:{x:{ticks:tick,grid:{display:false}},y:{ticks:tick,grid,beginAtZero:true},y1:{position:'right',ticks:{color:'#00E5FF'},grid:{display:false}}}}});
  cpDetail();
}

/* ---------- Logger ---------- */
/* ---------- Exercise search + muscle-group filter ---------- */
let exGrp='All';
const exGroup=n=>EX[n]||(S.custom.find(c=>c.n===n)||{}).g||'';
function setExGrp(g){
  exGrp=g;
  document.querySelectorAll('#exFilters button').forEach(b=>b.classList.toggle('on',b.dataset.g===g));
  filterEx();
}
function filterEx(){
  const sel=$('#exSel');if(!sel)return;
  const q=(($('#exSearch')||{}).value||'').trim().toLowerCase(),keep=sel.value;
  const list=allEx().filter(n=>(exGrp==='All'||exGroup(n)===exGrp)&&(!q||n.toLowerCase().includes(q)));
  sel.innerHTML=list.length?list.map(n=>`<option>${escText(n)}</option>`).join(''):'<option value="">No exercises found</option>';
  if(list.includes(keep))sel.value=keep;
  const c=$('#exCount');if(c)c.textContent=list.length+(list.length===1?' exercise':' exercises')+(exGrp!=='All'||q?' found':'');
}
let showCL=false;
function fillSelects(){
 const rs=$('#routineSel'),rk=rs.value;rs.innerHTML=S.plans.map((p,i)=>`<option value="u:${i}">⭐ ${escText(p.name)}</option>`).concat(Object.keys(R).map(r=>`<option>${r}</option>`)).join('');if(rk&&[...rs.options].some(o=>o.value===rk))rs.value=rk;planUI();
 filterEx();
 $('#cList').innerHTML=S.custom.length?`<button type="button" class="btn" style="padding:6px 12px;font-size:12px" data-onclick="toggleCL()">${showCL?'▲ Hide':'▼ Show'} my exercises (${S.custom.length})</button>`+(showCL?`<div class="w-full lbl" style="text-transform:none">Swipe left to remove</div>`:'')+(showCL?S.custom.map((c,i)=>`<div class="swp" data-i="${i}"><div class="swp-bg">Delete</div><div class="swp-fg"><span>${escText(c.n)} <span class="lbl">${escText(c.g)}</span></span><button aria-label="Remove ${escText(c.n)}" data-onclick="delCustom(${i})">×</button></div></div>`).join(''):''):'';
}
function lastSession(n){const l=[...S.workouts].filter(w=>w.date<today()).sort((a,b)=>b.date<a.date?-1:1);for(const w of l){const e=w.ex.find(x=>x.n===n);if(e)return e}return null}
function addEx(n){if(!n)return;const p=lastSession(n);const sets=p?(isCardio(n)?p.sets.slice(0,1):p.sets).map(s=>({w:s.w,r:s.r,c:s.c||0,d:0})):Array.from({length:isCardio(n)?1:3},()=>({w:0,r:0,c:0,d:0}));S.draft.push(isCardio(n)?{n,sets,m:p&&p.m?p.m:cOpts(n)[0]}:{n,sets});save();renderLog()}
function renderPreviousWorkoutOptions(){const sel=$('#historyWorkoutSel'),hint=$('#historyWorkoutHint');if(!sel)return;const old=sel.value;const rows=[...S.workouts].filter(w=>Array.isArray(w.ex)&&w.ex.some(e=>e&&e.n)).sort((a,b)=>String(b.date).localeCompare(String(a.date)));sel.innerHTML='';if(!rows.length){const o=document.createElement('option');o.value='';o.textContent='No saved workouts yet';sel.appendChild(o);sel.disabled=true;if(hint)hint.textContent='Finish and save a workout first. Saved sessions will appear here.';return}sel.disabled=false;const placeholder=document.createElement('option');placeholder.value='';placeholder.textContent='Choose a saved session…';sel.appendChild(placeholder);rows.forEach((w,i)=>{const o=document.createElement('option');o.value=String(i);const names=w.ex.map(e=>e.n).filter(Boolean);o.textContent=(w.date||'Previous session')+' · '+names.slice(0,3).join(', ')+(names.length>3?' +'+(names.length-3)+' more':'');sel.appendChild(o)});if(old&&Number(old)<rows.length)sel.value=old;if(hint&&rows.length)hint.textContent=rows.length+' saved session'+(rows.length===1?'':'s')+' available. Loading copies the previous sets into your current workout; it does not change History.';sel.dataset.rows=JSON.stringify(rows.map(w=>w.date))}
async function applyWorkoutToDraft(w){if(S.draft.length&&!(await askConfirm('Replace the current draft with the selected previous workout? Your saved history will not change.',{title:'Replace current workout?',okText:'Replace'})))return false;S.draft=(w.ex||[]).filter(e=>e&&e.n).map(e=>{const sets=(Array.isArray(e.sets)?e.sets:[]).map(s=>({w:Number(s.w)||0,r:Number(s.r)||0,c:Number(s.c)||0,d:0}));if(!sets.length)sets.push({w:0,r:0,c:0,d:0});return isCardio(e.n)?{n:e.n,sets:sets.slice(0,1),m:e.m||cOpts(e.n)[0]}:{n:e.n,sets}});save();renderLog();return true}
async function trainAgain(d){const w=S.workouts.find(x=>x.date===d);if(!w||!Array.isArray(w.ex)||!w.ex.some(e=>e&&e.n))return toast('No exercises to load from that day');const m=$('#modal');if(m)m.classList.remove('show');if(!(await applyWorkoutToDraft(w)))return;go('log');toast('Workout loaded — update your sets, then Finish & Save Workout')}
async function loadPreviousWorkout(){const sel=$('#historyWorkoutSel');if(!sel||sel.disabled||sel.value==='')return toast('Choose a previous session first');const rows=[...S.workouts].filter(w=>Array.isArray(w.ex)&&w.ex.some(e=>e&&e.n)).sort((a,b)=>String(b.date).localeCompare(String(a.date)));const w=rows[Number(sel.value)];if(!w)return toast('That session is no longer available');if(!(await applyWorkoutToDraft(w)))return;toast('Previous workout loaded — update your sets, then Finish & Save Workout') }
function addCustom(){if($('#exSearch'))$('#exSearch').value='';setExGrp('All');const n=$('#cName').value.replace(/[<>&"'`]/g,'').trim().slice(0,40);if(!n)return toast('Enter a name');if(allEx().includes(n)){$('#exSel').value=n;return toast('Exercise already exists')}S.custom.push({n,g:$('#cGrp').value});$('#cName').value='';fillSelects();$('#exSel').value=n;save();toast('Saved to your exercise library')}
function delCustom(i){S.custom.splice(i,1);save();fillSelects()}
/* swipe-left to remove a custom exercise (touch + mouse) */
(function(){let st=null;
 const reset=fg=>{fg.style.transition='transform .2s';fg.style.transform=''};
 $('#cList').addEventListener('pointerdown',e=>{const fg=e.target.closest('.swp-fg');if(!fg||e.target.closest('button'))return;st={fg,x:e.clientX,y:e.clientY,dx:0,drag:false};fg.style.transition='none'});
 window.addEventListener('pointermove',e=>{if(!st)return;const dx=e.clientX-st.x,dy=e.clientY-st.y;
  if(!st.drag){if(Math.abs(dy)>8&&Math.abs(dy)>Math.abs(dx)){reset(st.fg);st=null;return}if(Math.abs(dx)>6)st.drag=true}
  if(st.drag){st.dx=Math.min(0,dx);st.fg.style.transform='translateX('+st.dx+'px)'}});
 const up=()=>{if(!st)return;const{fg,dx}=st;st=null;
  if(dx<-fg.offsetWidth*.4){const i=+fg.parentNode.dataset.i;fg.style.transition='transform .18s';fg.style.transform='translateX(-110%)';setTimeout(()=>{delCustom(i);toast('Exercise removed')},170)}else reset(fg)};
 window.addEventListener('pointerup',up);window.addEventListener('pointercancel',up)})();
const planIdx=()=>{const v=($('#routineSel')||{}).value||'';return v.startsWith('u:')?+v.slice(2):-1};
function planUI(){renderPlanList()}
function renderPlanList(){const el=$('#planList');if(!el)return;const sel=planIdx();
 el.innerHTML=S.plans.length?`<div class="lbl" style="text-transform:none">Swipe right to rename · swipe left to delete</div>`+S.plans.map((p,i)=>`<div class="swp" data-i="${i}"><div class="swp-bg" style="justify-content:space-between;padding:0 18px"><span>✏ Rename</span><span>🗑 Delete</span></div><div class="swp-fg" style="${i===sel?'border-color:var(--g)':''}"><span><b>⭐ ${escText(p.name)}</b> <span class="lbl">${p.ex.length} exercises</span></span><button style="color:var(--g);font-size:13px;font-weight:700" data-onclick="pickPlan(${i})">Load</button></div></div>`).join(''):''}
/* swipe right = rename, swipe left = delete (touch + mouse) */
(function(){let st=null;const L=$('#planList');if(!L)return;
 const reset=fg=>{fg.style.transition='transform .2s';fg.style.transform=''};
 L.addEventListener('pointerdown',e=>{const fg=e.target.closest('.swp-fg');if(!fg||e.target.closest('button'))return;st={fg,x:e.clientX,y:e.clientY,dx:0,drag:false};fg.style.transition='none'});
 window.addEventListener('pointermove',e=>{if(!st)return;const dx=e.clientX-st.x,dy=e.clientY-st.y;
  if(!st.drag){if(Math.abs(dy)>8&&Math.abs(dy)>Math.abs(dx)){reset(st.fg);st=null;return}if(Math.abs(dx)>6)st.drag=true}
  if(st.drag){st.dx=dx;st.fg.style.transform='translateX('+dx+'px)';st.fg.previousElementSibling.style.background=dx>0?'#0A84A6':'#FF4D4D'}});
 const up=()=>{if(!st)return;const{fg,dx}=st;st=null;const i=+fg.parentNode.dataset.i,th=fg.offsetWidth*.4;
  if(Math.abs(dx)>th){fg.style.transition='transform .18s';fg.style.transform='translateX('+(dx>0?'110%':'-110%')+')';
   setTimeout(()=>{if(dx>0)renamePlan(i);else delPlan(i);renderPlanList()},180)}else reset(fg)};
 window.addEventListener('pointerup',up);window.addEventListener('pointercancel',up)})();
function nextPlanName(){if(!S.plans.some(p=>p.name==='My Plan'))return 'My Plan';let n=2;while(S.plans.some(p=>p.name==='My Plan '+n))n++;return 'My Plan '+n}
async function renamePlan(i){if(i==null)i=planIdx();if(i<0||!S.plans[i])return;const r=await uiDialog({title:'Rename plan',message:'Choose a new name for this plan.',input:true,value:S.plans[i].name,maxLength:30,okText:'Save'});if(r==null||!S.plans[i])return;const n=String(r).replace(/[<>&"'`]/g,'').trim().slice(0,30);if(!n)return;if(S.plans.some((p,j)=>j!==i&&p.name.toLowerCase()===n.toLowerCase())||Object.keys(R).includes(n))return toast('That name is already used');S.plans[i].name=n;save();fillSelects();$('#routineSel').value='u:'+i;planUI();toast('Renamed')}
async function delPlan(i){if(i==null)i=planIdx();if(i<0||!S.plans[i])return;if(!(await askConfirm('Delete "'+S.plans[i].name+'"? Your History is not affected.',{title:'Delete plan?',okText:'Delete',danger:true}))||!S.plans[i])return;S.plans.splice(i,1);save();fillSelects();toast('Plan deleted')}
function loadRoutine(){const v=$('#routineSel').value,i=planIdx(),l=i>=0?S.plans[i].ex:R[v];if(!l||!l.length)return toast('Routine is empty');l.forEach(addEx);toast(i>=0?S.plans[i].name+' loaded':'Routine loaded')}
const chInfo=ch=>ch==null?['first session','var(--mut)']:[(ch>=0?'▲ +':'▼ ')+Math.abs(ch)+'% vs last',ch>=0?'var(--g)':'#FF6B6B'];
function updVol(i){const e=S.draft[i];if(!e)return;const v=mainV(e),p=lastSession(e.n),pv=p?mainV(p):0,ch=pv?Math.round((v-pv)/pv*100):null,[t,c]=chInfo(ch),a=$('#dv'+i),b=$('#dc'+i);if(a)a.textContent=mainT(e);if(b){b.textContent=t;b.style.color=c}const q=$('#sr'+i);if(q)q.innerHTML=srHtml(e);updEff(i)}
function setVal(i,j,k,v){const s=S.draft[i].sets[j];s[k]=k==='w'?Math.max(0,toKg(parseFloat(v)||0)):Math.max(0,parseInt(v)||0);const du=$('#du'+i+'_'+j);if(du)du.textContent=s.r?fmtT(s.r):'—';save();updVol(i)}
function setCardio(i,j,k,v){const s=S.draft[i].sets[j];if(k==='r')s.r=parseDur(v);else s.c=Math.min(100000,Math.max(0,Math.round((parseFloat(v)||0)*100)/100));save();updVol(i)}
function setMetric(i,v){if(CM[v]){S.draft[i].m=v;save();renderLog()}}
function addSet(i){const a=S.draft[i].sets,l=a[a.length-1]||{w:0,r:0};a.push({w:l.w,r:l.r,c:l.c||0,d:0});save();renderLog()}
function delSet(i,j){S.draft[i].sets.splice(j,1);save();renderLog()}
function delEx(i){S.draft.splice(i,1);save();renderLog()}
/* ===== EXERCISE VIDEOS — paste your own links here =====
   Format:  'Exercise Name': 'https://your-video-link',
   The name must match the exercise name exactly. */
const VIDEOS={
  // 'Bench Press (Middle / Overall Chest)':'https://www.youtube.com/watch?v=XXXXXXXXXXX',
  // 'Squat':'https://www.youtube.com/watch?v=XXXXXXXXXXX',
};
/* Preview button: opens your video for this exercise (nothing happens until you add a link above) */
function previewEx(i){const e=S.draft[i];if(!e)return;const u=VIDEOS[e.n];if(!u)return toast('No video added for '+e.n+' yet');const w=window.open(u,'_blank','noopener');if(!w)toast('Allow pop-ups to open the video')}
function moveEx(i,d){const j=i+d;if(j<0||j>=S.draft.length)return;[S.draft[i],S.draft[j]]=[S.draft[j],S.draft[i]];save();renderLog();const c=document.querySelectorAll('#draft > .card')[j];if(c)c.scrollIntoView({block:'nearest',behavior:'smooth'})}
function doneSet(i,j){const s=S.draft[i].sets[j];s.d=s.d?0:1;const pr=s.d?prCheck(S.draft[i].n,s):null;save();renderLog();if(s.d)startTimer(S.draft[i].rest||lastRest);if(pr)celebrate([pr],[])}
async function clearDraft(){if(S.draft.length&&!(await askConfirm('Clear all exercises from this workout?',{title:'Clear workout?',okText:'Clear',danger:true})))return;S.draft=[];save();renderLog()}
/* smart routine: split from activity level, sets/reps/rest from goal (rule-based, runs offline) */
const DAYX={'Full Body A':['Squat','Bench Press (Middle / Overall Chest)','Barbell / DB Row','Overhead Press','Plank'],'Full Body B':['Romanian Deadlift','Incline Bench Press (Upper Chest)','Lat Pulldown','Lateral Raise','Barbell Curl / EZ Bar Curl (Heavy compound/mass movement)'],'Full Body C':['Leg Press','Push-Up','Pull-Up','Triceps Pushdown','Decline Plate Crunch'],
'Upper A':['Bench Press (Middle / Overall Chest)','Barbell / DB Row','Overhead Press','Lat Pulldown','Barbell Curl / EZ Bar Curl (Heavy compound/mass movement)','Triceps Pushdown'],'Upper B':['Incline Bench Press (Upper Chest)','Pull-Up','Overhead Press','Lat Pulldown','Triceps Pushdown','Barbell Curl / EZ Bar Curl (Heavy compound/mass movement)'],
'Lower A':['Squat','Romanian Deadlift','Decline Plate Crunch','Plank'],'Lower B':['Deadlift','Leg Press','Decline Plate Crunch','Plank'],
'Push':['Bench Press (Middle / Overall Chest)','Overhead Press','Incline Bench Press (Upper Chest)','Lateral Raise','Triceps Pushdown'],'Pull':['Deadlift','Barbell / DB Row','Pull-Up','Lat Pulldown','Barbell Curl / EZ Bar Curl (Heavy compound/mass movement)'],'Legs':['Squat','Leg Press','Romanian Deadlift','Decline Plate Crunch']};
const WKD={2:['Mon','Thu'],3:['Mon','Wed','Fri'],4:['Mon','Tue','Thu','Fri'],5:['Mon','Tue','Wed','Fri','Sat'],6:['Mon','Tue','Wed','Thu','Fri','Sat']};
/* [sets, reps, rest s] for main lifts and for accessories, per goal */
const RX={gain:[[4,'6-10',120],[3,'10-12',75]],loss:[[3,'8-12',90],[3,'12-15',60]],maint:[[3,'8-10',90],[2,'10-12',60]],recomp:[[4,'6-10',90],[3,'10-12',60]]};
const MAIN=['Squat','Deadlift','Bench Press (Middle / Overall Chest)','Overhead Press','Barbell / DB Row','Romanian Deadlift','Pull-Up','Leg Press','Incline Bench Press (Upper Chest)'];
const RECT={gain:'Add weight or one rep each week. Rest days are when muscle is built, so sleep 7-9 hours.',loss:'Add 2-3 easy cardio or walking sessions of 20-30 min on rest days. Keep lifting heavy to hold on to muscle.',maint:'Keep 1-2 reps in reserve. This volume is enough to hold your muscle.',recomp:'Eat near maintenance, hit your protein target, and add weight when you reach the top of the rep range.'};
function rxFor(e,k,act){
 if(grp(e)==='Core')return{sets:3,reps:e==='Plank'?'30-60 s':'12-20',rest:45};
 const m=MAIN.includes(e),[sets,reps,rest]=RX[k][m?0:1];
 return{sets:m&&(act<=1.2||act>=1.9)?Math.max(2,sets-1):sets,reps,rest}}
function smartPlan(){
 const n=S.nut,k=RX[n.goal]?n.goal:'maint',act=n.act;
 const names=act<=1.375?['Full Body A','Full Body B','Full Body C']:act<=1.55?['Upper A','Lower A','Upper B','Lower B']:act<=1.725?['Push','Pull','Legs','Upper A','Lower A']:['Push','Pull','Legs','Push','Pull','Legs'];
 const kind=act<=1.375?'Full-body sessions with a rest day between':act<=1.55?'Upper / lower split':act<=1.725?'Push / pull / legs plus upper / lower':'Push / pull / legs twice a week, sets trimmed for recovery';
 const days=names.map((nm,i)=>({d:WKD[names.length][i],name:nm,ex:DAYX[nm].map(e=>{const r=rxFor(e,k,act);return{n:e,sets:r.sets,reps:r.reps,rest:r.rest,tg:`${r.sets} \u00d7 ${r.reps} \u00b7 rest ${r.rest>=120?r.rest/60+' min':r.rest+' s'}`}})}));
 return{k,act,days,kind,rec:RECT[k]}}
function renderSmart(){
 const p=smartPlan(),al=(ACTL.find(a=>a[0]===p.act)||ACTL[2])[1];
 $('#smartPlan').innerHTML=`<div class="text-xs mb-2" style="color:var(--mut)">${GL[p.k].n} \u00b7 ${al}<br>${p.days.length} days/week \u00b7 ${p.kind}. Change goal or activity in the Fuel tab.</div>`+p.days.map((d,i)=>`<div class="flex justify-between items-center gap-2 py-2" style="border-bottom:1px solid var(--bd)"><div><b>${d.d}</b> \u00b7 ${d.name}<div class="text-xs" style="color:var(--mut)">${d.ex.map(x=>x.n+' '+x.sets+'\u00d7'+x.reps).join(' \u00b7 ')}</div></div><button class="btn" data-onclick="loadSmart(${i})">Load</button></div>`).join('')+`<div class="text-xs mt-2" style="color:var(--mut)">${p.rec}</div>`}
/* About Us + feedback to the developer (sent to the Google Apps Script web app as {type, message, contact}) */
const ABOUT=[['dumb','Workout log','Log sets, reps and weights, use the built-in rest timer, and get celebrated when you set a personal record. History keeps every session.'],
['bot','Smart routines','Get a weekly split with sets, reps and rest matched to your goal and activity level, plus a quick check that your sets and reps suit that goal.'],
['cup','Fuel','Daily calorie, protein, carb and fat targets built from your goal, body weight and activity, with meal logging, live progress, smart tips and a water tracker.'],
['ruler','Body metrics','Track weight, body fat and measurements with charts, and estimate your VO2 max with a simple 1-mile walk test.'],
['cal','Streaks and recovery','See your training days and streaks, plus a recovery estimate to help you reflect on whether to train hard or take it easier.'],
['trophy','Awards','Earn badges for consistency and strength milestones and keep your personal records in one list.']];
function renderAbout(){$('#aboutFeat').innerHTML=ABOUT.map(([i,t,d])=>`<div class="card ab-f">${ic(i,26)}<div><b>${t}</b><span class="text-sm" style="color:var(--mut)">${d}</span></div></div>`).join('')}
renderAbout();
function fbCount(){$('#fbCnt').textContent=$('#fbMsg').value.length+' / 1000'}
/* POST JSON to the Google Apps Script web app.
   mode:'no-cors' means the browser hides the reply (opaque response), so a resolved fetch = "request sent", not "server confirmed".
   Content-Type must be text/plain: application/json is not allowed in no-cors mode. The script reads e.postData.contents and JSON.parses it. */
async function postToScript(payload){
 const ctl=new AbortController(),t=setTimeout(()=>ctl.abort(),20000); /* Apps Script can take a few seconds to wake up */
 try{await fetch(GOOGLE_SCRIPT_URL,{method:'POST',mode:'no-cors',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify(payload),signal:ctl.signal})}
 finally{clearTimeout(t)}}
const postFeedback=postToScript;
const isEmail=v=>/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
const isPhone=v=>{const n=normId(v);return !!(n&&n.type==='phone')};
/* Queue a payload for automatic re-send when the connection is back (keeps the last 50) */
function queueOutbox(p){const q=jget(OUTBOX,[]);q.push(p);jset(OUTBOX,q.slice(-50))}
async function sendFeedback(){
 const st=$('#fbStat'),btn=$('#fbBtn'),type=$('#fbType').value,msg=$('#fbMsg').value.trim(),contact=$('#fbContact').value.trim(),say=(t,c)=>{st.textContent=t;st.style.color=c||'var(--mut)'};
 if($('#fbHp').value)return;
 if(!type)return say('Please choose a type.','#FFB800');
 if(msg.length<10)return say('Please describe it in at least 10 characters.','#FFB800');
 if(contact&&!isEmail(contact.toLowerCase())&&!isPhone(contact))return say('Enter a valid email or phone number, or leave the contact box empty.','#FFB800');
 let last=0;try{last=+localStorage.getItem('nextlevel_fb_last')||0}catch(e){}
 if(Date.now()-last<30000)return say('Please wait a few seconds before sending another message.','#FFB800');
 const p={event:'feedback',type,message:msg.slice(0,1000),contact:contact.slice(0,120),ua:(navigator.userAgent||'').slice(0,160),screen:screen.width+'x'+screen.height}; /* Only user-submitted feedback is sent; contact is optional. */
 const clear=()=>{try{localStorage.setItem('nextlevel_fb_last',String(Date.now()))}catch(e){}$('#fbMsg').value='';$('#fbContact').value='';$('#fbType').selectedIndex=0;fbCount()};
 const queue=why=>{queueOutbox(p);clear();say(why+' Your message is saved and will be sent automatically when the connection is back.','#FFB800')};
 btn.disabled=true;
 try{
  if(navigator.onLine===false)return queue('You are offline.');
  say('Sending...');
  await postToScript(p);
  clear();say('Thank you! Your message was sent','var(--g)');toast('Message sent ✅')
 }catch(e){queue('Could not reach the server.')}
 finally{btn.disabled=false}}
function toggleSmartPlan(){
 const p=$('#smartPlan'),b=$('#smartBtn'),open=p.style.display==='none';
 p.style.display=open?'block':'none';b.textContent=open?'Hide':'Recommend';b.setAttribute('aria-expanded',open)}
function loadSmart(i){const d=smartPlan().days[i];if(!d)return;
 d.ex.forEach(x=>{const p=lastSession(x.n),sets=Array.from({length:isCardio(x.n)?1:x.sets},(_,j)=>{const q=p&&(p.sets[j]||p.sets[p.sets.length-1]);return{w:q?q.w:0,r:q?q.r:0,c:q?q.c||0:0,d:0}});S.draft.push(isCardio(x.n)?{n:x.n,sets,rest:x.rest,tg:x.tg,m:p&&p.m?p.m:cOpts(x.n)[0]}:{n:x.n,sets,rest:x.rest,tg:x.tg})});
 save();renderLog();toast(d.name+' loaded')}
/* VO2 max: Rockport fitness walking test (Kline et al., 1987) */
const VO2B=[[29,{m:[33,36.5,42.5,46.5],f:[28,31,35,39]}],[39,{m:[31.5,35.5,41,45],f:[27,30,34,37]}],[49,{m:[30.2,33.6,39,43.8],f:[24.5,28,31,35]}],[59,{m:[26.1,31,35.8,41],f:[21.3,24.5,28,31]}],[999,{m:[20.5,26.1,32.3,36.5],f:[19.1,22,25,28]}]];
const VO2L=['Poor','Fair','Good','Excellent','Superior'];
function vo2Level(v,age,male){const th=VO2B.find(b=>age<=b[0])[1][male?'m':'f'];let i=0;th.forEach((t,j)=>{if(v>=t)i=j+1});return VO2L[i]}
function vo2Fill(){const a=$('#vo2Age');if(!a||a.value)return;if(S.nut&&S.nut.age){a.value=S.nut.age;$('#vo2Gender').value=S.nut.sex==='f'?'0':'1'}}
function calcVo2Max(){
 let tv=($('#vo2Time').value||'').trim().replace(',','.'),time;
 if(tv.includes(':')){const [m,sc]=tv.split(':');time=parseFloat(m)+(parseFloat(sc)||0)/60}else time=parseFloat(tv);
 const hr=parseFloat($('#vo2Hr').value),age=parseInt($('#vo2Age').value),male=$('#vo2Gender').value==='1';
 if(!time||!hr||!age)return toast('Please fill in time, heart rate and age');
 if(time<6||time>40)return toast('Walk time should be between 6 and 40 minutes');
 if(hr<60||hr>220)return toast('Heart rate should be between 60 and 220 bpm');
 if(age<13||age>90)return toast('Age should be between 13 and 90');
 const wKg=wtKg();if(!wKg)return toast('Log your weight first (Body tab or Fuel plan)');
 const lb=wKg*2.20462;
 const v=132.853-0.0769*lb-0.3877*age+6.315*(male?1:0)-3.2649*time-0.1565*hr;
 if(!(v>5&&v<90)){$('#vo2Result').innerHTML='<div class="chip w"><span>Those numbers give an unrealistic result. Re-check your time and heart rate.</span></div>';return}
 const lv=vo2Level(v,age,male);
 $('#vo2Result').innerHTML=`<div class="chip g" style="justify-content:center"><span>VO2 max: <b>${(Math.round(v*10)/10).toFixed(1)} ml/kg/min</b> (${lv} for your age and sex)</span></div><div class="text-xs mt-2" style="color:var(--mut)">An estimate, usually within about 5 ml/kg/min of a lab test. The formula was built on adults aged roughly 30-69, so treat results outside that range loosely. Ratings are approximate population norms.</div>`}
/* sets x reps check against the active goal (rule table, runs offline) */
const SR={gain:[6,12,2,5],loss:[6,15,2,4],maint:[6,12,2,3],recomp:[6,12,3,4]};
function srHtml(e){
 const w=e.sets.filter(s=>s.r>0);if(!w.length||grp(e.n)==='Core'||noReps(e.n))return'';
 const k=(S.nut&&SR[S.nut.goal])?S.nut.goal:'maint',[lo,hi,sl,sh]=SR[k],t=GL[k].t,n=w.length;
 const r=w.map(s=>s.r).sort((a,b)=>a-b),m=r[Math.floor(r.length/2)],tip=[];
 if(m<lo)tip.push(`reps are low (about ${m}) for ${t}; lower the weight to land in ${lo}-${hi} reps`);
 else if(m>hi)tip.push(`reps are high (about ${m}) for ${t}; add weight to land in ${lo}-${hi} reps`);
 if(n<sl)tip.push(`add a set (${sl}-${sh} sets per exercise suits ${t})`);
 else if(n>sh)tip.push(`${n} sets is more than needed (${sl}-${sh} suits ${t}); extra sets add fatigue more than growth`);
 const st='padding:8px 12px;font-size:12px;margin-top:10px';
 return tip.length?`<div class="chip w" style="${st}"><span>Sets x reps: ${tip.join('; ')}.</span></div>`:`<div class="chip g" style="${st}"><span>${n} sets x about ${m} reps fits your ${t} goal (${sl}-${sh} sets, ${lo}-${hi} reps).</span></div>`}
/* ---------- Exercise list (Train tab): card per exercise with Log / Effort / Weight / Reps pills ---------- */
const GEMO={Chest:'🏋️',Back:'🧗',Legs:'🦵',Shoulders:'🤸',Traps:'🤸',Biceps:'💪',Triceps:'💪',Forearms:'🤜',Core:'🧘',Glutes:'🍑',Cardio:'🏃','Full Body':'🥊'};
function bestE1(n){let b=0;S.workouts.forEach(w=>(w.ex||[]).forEach(e=>{if(e.n===n)(e.sets||[]).forEach(s=>{b=Math.max(b,e1(s.w,s.r))})}));return b}
function effOf(e,s){const ref=Math.max(bestE1(e.n),...e.sets.map(x=>e1(x.w,x.r)));if(!ref||!(s.w>0)||!(s.r>0))return['—','var(--mut)'];const p=Math.min(100,Math.round(e1(s.w,s.r)/ref*100));return[p+'%',p>=85?'#FFB020':p>=60?'var(--c)':'var(--g)']}
function updEff(i){const e=S.draft[i];if(!e||isCardio(e.n)||isTime(e.n))return;e.sets.forEach((s,j)=>{const el=$('#ef'+i+'_'+j);if(el){const [t,c]=effOf(e,s);el.textContent=t;el.style.color=c}})}
function exMenu(i){const m=$('#xm'+i);if(!m)return;const open=m.classList.toggle('show');document.querySelectorAll('.ex-menu.show').forEach(x=>{if(x!==m)x.classList.remove('show')});const b=m.previousElementSibling;if(b&&b.setAttribute)b.setAttribute('aria-expanded',open?'true':'false')}
function delLastSet(i){const a=S.draft[i].sets;if(a.length<=1)return toast('Keep at least one set');a.pop();save();renderLog()}
function renderLog(){
 renderPreviousWorkoutOptions();
 const head=S.draft.length?`<div class="xl-head"><h2>Exercise list</h2><span class="xl-count">${S.draft.length} exercise${S.draft.length>1?'s':''}</span></div>`:'';
 $('#draft').innerHTML=S.draft.length?head+S.draft.map((e,i)=>{
  const T=isTime(e.n),C=isCardio(e.n),cm=cMet(e),v=mainV(e),p=lastSession(e.n),pv=p?mainV(p):0,ch=pv?Math.round((v-pv)/pv*100):null,g=grp(e.n),emo=GEMO[g]||'🏋️';
  const three=C||T,cols=C?['Time (min)',CM[cm][0]]:T?['Time (s)','Duration']:['Effort',S.unit,'Reps'];
  const ck=(j,s)=>`<button type="button" class="xck${s.d?' on':''}" aria-label="${s.d?'Set '+(j+1)+' done, tap to undo':'Mark set '+(j+1)+' done'}" aria-pressed="${s.d?'true':'false'}" data-onclick="doneSet(${i},${j})">${s.d?ic('check'):(j+1)}</button>`;
  const rows=e.sets.map((s,j)=>{
   if(C)return `<div class="xr three">${ck(j,s)}<label class="xp"><input type="text" value="${s.r?durIn(s.r):''}" placeholder="min or mm:ss" aria-label="Duration" data-onchange="setCardio(${i},${j},'r',this.value)"></label><label class="xp"><input type="number" step="0.01" min="0" inputmode="decimal" value="${s.c||''}" placeholder="0" aria-label="${CM[cm][0]}" data-onchange="setCardio(${i},${j},'c',this.value)"></label></div>`;
   if(T)return `<div class="xr three">${ck(j,s)}<label class="xp"><input type="number" inputmode="numeric" min="0" step="5" value="${s.r||''}" placeholder="30" aria-label="Time in seconds" data-onchange="setVal(${i},${j},'r',this.value)"></label><div class="xp ro" id="du${i}_${j}" style="color:var(--c)">${s.r?fmtT(s.r):'—'}</div></div>`;
   const [et,ec]=effOf(e,s);
   return `<div class="xr">${ck(j,s)}<div class="xp ro" id="ef${i}_${j}" style="color:${ec}">${et}</div><label class="xp"><input type="number" step="0.5" inputmode="decimal" value="${s.w?fmt(s.w):''}" placeholder="0" aria-label="Weight ${S.unit}" data-onchange="setVal(${i},${j},'w',this.value)"><span class="xu">${S.unit}</span></label><label class="xp"><input type="number" inputmode="numeric" value="${s.r||''}" placeholder="0" aria-label="Reps" data-onchange="setVal(${i},${j},'r',this.value)"></label></div>`}).join('');
  return `<div class="card xcard"><div class="xtop"><button type="button" class="xt" aria-label="Open ${escText(e.n)} guide" data-onclick="exInfo(${i})"><span class="xe" aria-hidden="true">${emo}</span>${exPhotoTag(e.n)}<span class="xpl" aria-hidden="true">${VIDEOS[e.n]?'▶':'i'}</span></button>
  <div class="xinfo"><div class="xname">${escText(e.n)}</div><div class="xpill">${escText(g)}${e.tg?' · Target '+e.tg:''}</div><div class="xmeta"><span id="dv${i}">${mainT(e)}</span> · <span id="dc${i}" style="color:${chInfo(ch)[1]}">${chInfo(ch)[0]}</span></div></div>
  <button type="button" class="xmore" aria-label="Exercise options" aria-expanded="false" data-onclick="exMenu(${i})">${ic('more')}</button>
  <div class="ex-menu" id="xm${i}"><button type="button" data-onclick="exInfo(${i})">ℹ️ Exercise guide</button>${i>0?`<button type="button" data-onclick="moveEx(${i},-1)">▲ Move up</button>`:''}${i<S.draft.length-1?`<button type="button" data-onclick="moveEx(${i},1)">▼ Move down</button>`:''}<button type="button" data-onclick="delLastSet(${i})">Remove last set</button><button type="button" style="color:#FF8A8A" data-onclick="delEx(${i})">Remove exercise</button></div></div>
  ${C?`<div class="flex items-center gap-2 mt-3"><span class="lbl">Track</span><select aria-label="Cardio metric" data-onchange="setMetric(${i},this.value)">${cOpts(e.n).map(k=>`<option value="${k}"${k===cm?' selected':''}>${CM[k][0]}</option>`).join('')}</select></div>`:''}
  <div class="xr xh${three?' three':''}"><span>Log</span>${cols.map(c=>`<span>${c}</span>`).join('')}</div>
  ${rows}
  <button type="button" class="xadd" aria-label="Add set" data-onclick="addSet(${i})">${ic('plus')}</button>
  <div id="sr${i}">${srHtml(e)}</div></div>`}).join(''):'<div class="card text-center" style="color:var(--mut)">No exercises yet. Load a routine or add an exercise to start logging.</div>';
}
function finish(){
 const ex=S.draft.map(e=>{const C=isCardio(e.n),o={n:e.n,rest:Math.max(0,Math.round(e.rest||lastRest||0)),sets:e.sets.filter(s=>C?(s.r>0||s.c>0):s.r>0).map(s=>C?{w:0,r:s.r,c:s.c||0}:{w:s.w,r:s.r})};if(C)o.m=cMet(e);return o}).filter(e=>e.sets.length);
 if(!ex.length)return toast('Add at least one set');
 let w=S.workouts.find(x=>x.date===today());
 if(w){w.ex.push(...ex);delete w.manual}else S.workouts.push({date:today(),ex});
 const prs=[];ex.forEach(e=>e.sets.forEach(s=>{const p=prCheck(e.n,s);if(p)prs.push(p)}));
 const pn=[...new Set(S.draft.map(e=>e.n))];let pi=S.plans.findIndex(p=>p.ex.length===pn.length&&p.ex.every((x,k)=>x===pn[k])),pm;if(pi<0){S.plans.push({name:nextPlanName(),ex:pn});pi=S.plans.length-1;pm='Saved to History & '+S.plans[pi].name+' 💪'}else pm='Saved to History 💪 (same as '+S.plans[pi].name+')';fillSelects();$('#routineSel').value='u:'+pi;planUI();S.draft=[];save();cy=new Date().getFullYear();cm=new Date().getMonth();toast(pm);go('his');celebrate(prs,newBadges())}

/* ---------- Timer ---------- */
let tl=0,tot=0,ti=null,lastRest=90,actx,endAt=0,tLeft=0,lastDur=90,tRun=false,tPaused=false,tBlk=false,tSaid=false,tAuto=false;
function beep(){if(!S.sound)return;try{actx=actx||new (window.AudioContext||window.webkitAudioContext)();if(actx.state==='suspended')actx.resume();[0,.25,.5].forEach(t=>{const o=actx.createOscillator(),g=actx.createGain();o.frequency.value=880;g.gain.value=.15;o.connect(g);g.connect(actx.destination);o.start(actx.currentTime+t);o.stop(actx.currentTime+t+.15)})}catch(e){}}
function primeAudio(){try{actx=actx||new (window.AudioContext||window.webkitAudioContext)();if(actx.state==='suspended')actx.resume()}catch(e){}}
function wedgePath(f){if(f<=.0005)return'';if(f>=.9995)return'M60 17A43 43 0 1 1 60 103A43 43 0 1 1 60 17Z';const a=f*2*Math.PI,x=60+43*Math.sin(a),y=60-43*Math.cos(a);return`M60 60L60 17A43 43 0 ${a>Math.PI?1:0} 1 ${x.toFixed(2)} ${y.toFixed(2)}Z`}
function drawT(){
 const rem=tRun?Math.max(0,(endAt-Date.now())/1000):tPaused?tLeft/1000:tl,f=tot?Math.max(0,Math.min(1,rem/tot)):0;
 const m=String(Math.floor(tl/60)).padStart(2,'0'),sc=String(tl%60).padStart(2,'0');
 const low=tRun&&tot>10&&tl<=10&&tl>0,col=low?'#FF6B6B':tPaused?'#FFC400':'var(--g)';
 $('#tDisp').textContent=m+':'+sc;$('#tDisp').style.color=col;
 const arc=$('#tArc');arc.style.strokeDashoffset=326.73*(1-f);arc.style.opacity=f>.002?1:0;arc.style.stroke=col;arc.style.color=col;
 const wg=$('#tWedge');wg.setAttribute('d',wedgePath(f));wg.style.fill=col;
 $('#tState').textContent=tRun?(tBlk?'Focus':'Rest'):tPaused?'Paused':(tot&&tl===0?'Done':'Ready');
 const tg=$('#tToggle');if(tg)tg.textContent=tRun?'Pause':tPaused?'Resume':(tot&&tl===0?'Restart':'Start');
 const md=$('#mDisp');if(md){md.textContent=m+':'+sc;md.style.color=col;const ma=$('#mArc');ma.style.strokeDashoffset=326.73*(1-f);ma.style.opacity=f>.002?1:0;ma.style.stroke=col;$('#mState').textContent=$('#tState').textContent;$('#mToggle').textContent=$('#tToggle').textContent}
 $('#tRing').setAttribute('aria-label','Countdown timer, '+m+' minutes '+sc+' seconds'+(tRun?' remaining':''))}
function tick(){const ms=endAt-Date.now();tl=Math.max(0,Math.ceil(ms/1000));
 if(tl<=10&&tl>0&&tot>10&&!tSaid){tSaid=true;say('10 seconds remaining')}
 if(ms<=0){clearInterval(ti);tRun=false;tl=0;drawT();finishT();return}
 drawT()}
function finishT(){beep();try{if('vibrate' in navigator)navigator.vibrate([200,100,200,100,300])}catch(e){}const ex=($('#tEx')||{}).value;say(tBlk?'Time is up!':'Get ready for your next set!');toast(tBlk?(ex?"Time's up! Tap Done to add it to your Log":"Time's up!"):'Rest over — next set!')}
function startTimer(s,blk){s=Math.max(1,Math.round(s)||0);if(!blk)lastRest=s;lastDur=s;tBlk=!!blk;clearInterval(ti);tAuto=false;tot=s;tl=s;tSaid=false;tPaused=false;tRun=true;endAt=Date.now()+s*1000;primeAudio();ti=setInterval(tick,100);drawT()}
function toggleTimer(){
 if(tRun){clearInterval(ti);tLeft=Math.max(0,endAt-Date.now());tl=Math.ceil(tLeft/1000);tRun=false;tPaused=true;drawT();return}
 if(tPaused){endAt=Date.now()+tLeft;tRun=true;tPaused=false;primeAudio();clearInterval(ti);ti=setInterval(tick,100);drawT();return}
 startTimer(tot||lastDur,tBlk)}
/* ---------- Minimize / expand the sticky timer on the Train tab ---------- */
function setMiniT(min){const m=$('#miniT'),b=$('#mMin');if(!m)return;m.classList.toggle('min',!!min);if(b){b.setAttribute('aria-expanded',min?'false':'true');b.setAttribute('aria-label',min?'Expand timer':'Minimize timer')}try{localStorage.setItem('nl_mini_min',min?'1':'0')}catch(e){}}
function toggleMiniT(){const m=$('#miniT');if(m)setMiniT(!m.classList.contains('min'))}
(function(){let v='0';try{v=localStorage.getItem('nl_mini_min')||'0'}catch(e){}if(v==='1')setMiniT(true)})();
function stopTimer(){clearInterval(ti);tRun=tPaused=false;tl=tot=0;drawT()}
function resetTimer(){if(!tot)return;clearInterval(ti);tRun=tPaused=false;tl=tot;tSaid=false;drawT()}
function tSt(n,blk){startTimer(n,blk||!!($('#tEx')||{}).value)}
function fillTEx(){const el=$('#tEx');if(!el)return;const keep=el.value,l=['Plank',...allEx().filter(isCardio)].filter((n,i,a)=>a.indexOf(n)===i&&n!=='Rowing');el.innerHTML='<option value="">Select exercise…</option>'+l.map(n=>`<option>${n}</option>`).join('');if(l.includes(keep))el.value=keep;tExUI()}
function tExPick(){tExUI();const n=$('#tEx').value;if(tRun||tPaused)return;if(n&&isCardio(n)){tot=tl=lastDur=3600;tBlk=true;tSaid=false;tAuto=true;drawT()}else if(tAuto){tot=tl=0;tAuto=false;drawT()}}
function tExUI(){const n=($('#tEx')||{}).value,r=$('#tExCRow');if(!r)return;const C=!!n&&isCardio(n);r.style.display=C?'block':'none';if(C)$('#tExC').placeholder=CM[cMet(S.draft.find(x=>x.n===n)||{n})][0]+' (optional)'}
function doneEx(){const n=$('#tEx').value;if(!n)return toast('Pick an exercise first');
 const rem=tRun?Math.max(0,(endAt-Date.now())/1000):tPaused?tLeft/1000:tl,el=tot?Math.round(tot-rem):0;
 if(el<=0)return toast('Start the timer first');
 const C=isCardio(n),c=C?Math.min(100000,Math.max(0,Math.round((parseFloat($('#tExC').value)||0)*100)/100)):0,set={w:0,r:el,c,d:1};
 let e=S.draft.find(x=>x.n===n);if(!e){e={n,sets:[]};if(C)e.m=cOpts(n)[0];S.draft.push(e)}
 const i=e.sets.findIndex(s=>!s.r&&!s.c&&!s.w);if(i>=0)e.sets[i]=set;else e.sets.push(set);
 save();stopTimer();$('#tExC').value='';renderLog();toast(n+' \u00b7 '+fmtT(el)+' added to Log \u2705')}
function startCustom(){const m=Math.max(0,parseInt($('#tcm').value)||0),s=Math.max(0,parseInt($('#tcs').value)||0),t=Math.min(86400,m*60+s);if(t<=0)return toast('Enter minutes or seconds');startTimer(t,1)}
function toggleSound(){S.sound=!S.sound;save();sndUI();if(S.sound)beep()}
function sndUI(){$('#sndBtn').className='btn '+(S.sound?'on':'');$('#sndBtn').innerHTML=ic(S.sound?'bell':'mute')+(S.sound?'Beep':'Mute');$('#vcBtn').className='btn '+(S.voice?'on':'');$('#vcBtn').innerHTML=ic('bot')+(S.voice?'Voice on':'Voice off')}
function toggleVoice(){S.voice=!S.voice;save();sndUI();say('Voice cues enabled')}
function say(t){if(!S.voice||!window.speechSynthesis)return;try{speechSynthesis.cancel();speechSynthesis.speak(new SpeechSynthesisUtterance(t))}catch(e){}}
function toggleUnit(){S.unit=S.unit==='kg'?'lb':'kg';save();renderAll()}

/* ---------- Calendar ---------- */
let cy=new Date().getFullYear(),cm=new Date().getMonth();
function monthGo(d){cm+=d;if(cm>11){cm=0;cy++}if(cm<0){cm=11;cy--}renderCal()}
async function toggleDay(ds){const i=S.workouts.findIndex(w=>w.date===ds);if(i<0)S.workouts.push({date:ds,ex:[],manual:true});else if(S.workouts[i].manual||!S.workouts[i].ex.length)S.workouts.splice(i,1);else{if(!(await askConfirm('Delete the logged workout on '+ds+'?',{title:'Delete workout?',okText:'Delete',danger:true})))return;const j=S.workouts.findIndex(w=>w.date===ds);if(j>=0)S.workouts.splice(j,1)}save();renderAll()}
function streaks(){const set=new Set(S.workouts.map(w=>w.date));let cur=0;const d=new Date();if(!set.has(ymd(d)))d.setDate(d.getDate()-1);while(set.has(ymd(d))){cur++;d.setDate(d.getDate()-1)}
 const ds=[...set].sort();let best=0,run=0,prev=null;ds.forEach(x=>{const dt=pd(x);if(prev&&Math.round((dt-prev)/864e5)===1)run++;else run=1;best=Math.max(best,run);prev=dt});return{cur,best}}
function renderCal(){
 const vols={};S.workouts.forEach(w=>vols[w.date]=(vols[w.date]||0)+w.ex.reduce((a,e)=>a+volOf(e),0));
 const mx=Math.max(1,...Object.values(vols));
 $('#calTitle').textContent=new Date(cy,cm,1).toLocaleDateString(undefined,{month:'long',year:'numeric'});
 const off=(new Date(cy,cm,1).getDay()+6)%7,n=new Date(cy,cm+1,0).getDate();let h='<span></span>'.repeat(off),mc=0;
 for(let d=1;d<=n;d++){const ds=cy+'-'+String(cm+1).padStart(2,'0')+'-'+String(d).padStart(2,'0');const has=S.workouts.some(w=>w.date===ds);if(has)mc++;
  const op=has?(.55+.45*((vols[ds]||0)/mx)):1;h+=`<div class="day ${has?'w':''} ${ds===today()?'t':''}" style="opacity:${op}" data-onclick="toggleDay('${ds}')">${d}</div>`}
 $('#calGrid').innerHTML=h;const s=streaks();$('#sCur').textContent=s.cur;$('#sBest').textContent=s.best+'d';$('#sMon').textContent=mc;
}

/* ---------- AI Assistant ---------- */
function renderAI(){
 if(!S.workouts.length){$('#recV').textContent='0%';$('#recV').style.color='var(--mut)';$('#recB').style.width='0';$('#recN').textContent='No data yet';$('#chips').innerHTML='<div class="chip">'+ic('bolt',20)+'<span>Log a workout to receive recommendations</span></div>';return}
 const now=new Date(),d3=new Date(now);d3.setDate(d3.getDate()-3);d3.setHours(0,0,0,0);
 const d7=new Date(now);d7.setDate(d7.getDate()-7);
 const sets3=S.workouts.filter(w=>pd(w.date)>=d3).reduce((a,w)=>a+w.ex.reduce((b,e)=>b+e.sets.length,0),0);
 const days7=S.workouts.filter(w=>pd(w.date)>d7).length;
 const last=[...S.workouts].sort((a,b)=>b.date<a.date?-1:1)[0];
 const rest=last?Math.max(0,Math.round((new Date(today().replace(/-/g,'/'))-pd(last.date))/864e5)):7;
 const score=Math.max(18,Math.min(99,Math.round(98-sets3*1.8-Math.max(0,days7-4)*5+Math.min(rest,3)*9)));
 $('#recV').textContent=score+'%';$('#recV').style.color=score>=75?'var(--g)':score>=50?'#FFC400':'#FF6B6B';
 $('#recB').style.width=score+'%';$('#recN').innerHTML=`${sets3} sets in 3 days<br>${days7} sessions in 7 days<br>${rest} day${rest===1?'':'s'} since last`;
 const chips=[];
 chips.push(score>=75?['g',`Optimal Recovery score: ${score}% — Go Heavy`]:score>=50?['',`Recovery at ${score}% — train as planned, keep 1–2 reps in reserve`]:['w',`Recovery at ${score}% — consider a light session or active rest`]);
 const by={};S.workouts.forEach(w=>w.ex.forEach(e=>(by[e.n]=by[e.n]||[]).push({date:w.date,e})));
 const inc=S.unit==='kg'?'2.5kg':'5lb';
 Object.entries(by).forEach(([n,arr])=>{arr.sort((a,b)=>a.date<b.date?-1:1);if(arr.length<2)return;
  if(isCardio(n))return;
  if(isTime(n)){if(arr.slice(-2).every(x=>x.e.sets.every(s=>s.r>=30)))chips.push(['',`Try holding ${n} 5–10 sec longer today`]);return}
  const top=x=>x.e.sets.reduce((m,s)=>e1(s.w,s.r)>e1(m.w,m.r)?s:m,x.e.sets[0]);
  const l=arr.slice(-3).map(x=>e1(top(x).w,top(x).r));
  if(arr.length>=3&&top(arr[arr.length-1]).w>0&&l[2]<=Math.max(l[0],l[1])*1.005){chips.push(['w',`Plateau detected in ${n} — Deload recommended (−10% load for 1 week)`]);return}
  const a=arr[arr.length-1].e.sets,b=arr[arr.length-2].e.sets;
  if(a.every(s=>s.r>=8)&&b.every(s=>s.r>=8)&&top(arr[arr.length-1]).w>0)chips.push(['',`Add +${inc} to ${n} today`]);
  else if(top(arr[arr.length-1]).w===0&&a.every(s=>s.r>=10))chips.push(['',`Add weight to ${n} — bodyweight reps are maxed out`]);
 });
 const g={};S.workouts.filter(w=>pd(w.date)>d7).forEach(w=>w.ex.forEach(e=>g[grp(e.n)]=(g[grp(e.n)]||0)+e.sets.length));
 const miss=['Chest','Back','Legs','Shoulders'].filter(k=>!g[k]);
 if(miss.length)chips.push(['',`No ${miss.join(', ')} work in 7 days — prioritize it next session`]);
 if(rest>=3)chips.push(['g','Fresh and rested — a great day to hit a new PR']);
 $('#chips').innerHTML=chips.map(([c,t])=>`<div class="chip ${c}">${ic(c==='w'?'timer':'bolt',20)}<span>${t}</span></div>`).join('');
}

/* ---------- PRs & Badges ---------- */
function bestOf(n){let b=0,w=0;S.workouts.forEach(x=>x.ex.forEach(e=>{if(e.n===n)e.sets.forEach(s=>{b=Math.max(b,e1(s.w,s.r));w=Math.max(w,s.w)})}));return{b,w}}
function prCheck(n,s){if(s.w<=0||isTime(n))return null;const p=S.prs[n],x=e1(s.w,s.r);if(!p){S.prs[n]={b:x,w:s.w};return null}
 if(x>p.b+.01||s.w>p.w){const r={n,w:s.w,r:s.r};p.b=Math.max(p.b,x);p.w=Math.max(p.w,s.w);return r}return null}
const BD=[['c100','100kg Club','💯',()=>S.workouts.some(w=>w.ex.some(e=>e.sets.some(s=>s.w>=100)))],['cons','Consistency King','👑',()=>{const c=new Date();c.setDate(c.getDate()-30);return S.workouts.filter(w=>pd(w.date)>c).length>=12}],['str5','5-Day Streak','🔥',()=>streaks().best>=5],['pr','PR Crusher','🏆',()=>Object.keys(S.prs).length>=5],['h2o','Hydration Hero','💧',()=>Object.values(S.water).some(v=>v>=8)]];
function newBadges(){const n=BD.filter(b=>!S.badges.includes(b[0])&&b[3]());n.forEach(b=>S.badges.push(b[0]));save();return n}
function celebrate(prs,bs){if(!prs.length&&!bs.length)return;
 $('#mBox').innerHTML=`<div style="font-size:54px">${prs.length?'🏆':'🎖️'}</div><div class="big gold">${prs.length?'PR Unlocked!':'Badge Unlocked!'}</div>`+prs.map(p=>`<div class="chip g mt-3" style="justify-content:center">${p.n}: ${fmt(p.w)} ${S.unit} × ${p.r}</div>`).join('')+bs.map(b=>`<div class="badge u mt-3"><div style="font-size:34px">${b[2]}</div><b class="gold">${b[1]}</b></div>`).join('')+`<button class="btn p mt-4" data-onclick="closeModal()">Awesome!</button>`;
 $('#modal').classList.add('show');if(prs.length){say('New personal record! Great work!');try{if(typeof confetti==='function')confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } })}catch(e){}}renderAwd()}
function renderAwd(){
 $('#badges').innerHTML=BD.map(b=>{const u=S.badges.includes(b[0]);return `<div class="badge ${u?'u':''}"><div style="font-size:30px">${b[2]}</div><div class="text-xs font-bold ${u?'gold':''}">${b[1]}</div></div>`}).join('');
 const pr=Object.entries(S.prs).sort((a,b)=>b[1].b-a[1].b);
 $('#prList').innerHTML=pr.length?pr.map(([n,p])=>`<div class="flex justify-between py-1 text-sm"><span>🏅 ${n}</span><span><b class="gold">${fv(p.b)}</b> <span style="color:var(--mut)">e1RM · top ${fmt(p.w)}</span></span></div>`).join(''):'No PRs yet.';
 const M=xp==='m',ws=M?new Date(new Date().getFullYear(),new Date().getMonth(),1):wkStart(new Date()),wk=S.workouts.filter(w=>pd(w.date)>=ws);
 const v=wk.reduce((a,w)=>a+w.ex.reduce((b,e)=>b+volOf(e),0),0),st=wk.reduce((a,w)=>a+w.ex.reduce((b,e)=>b+e.sets.length,0),0),top=pr[0];
 $('#share').innerHTML=`<div class="flex justify-between items-center"><div class="font-extrabold text-lg">Next <span style="color:#00FF66">Level</span> <span style="color:#00E5FF;font-size:11px">FITNESS</span></div><div class="lbl">${M?ws.toLocaleDateString(undefined,{month:'long',year:'numeric'}):'Week of '+ws.toLocaleDateString(undefined,{month:'short',day:'numeric'})}</div></div><div class="grid grid-cols-2 gap-3 mt-4">${[['Sessions',wk.length],['Volume',fv(v)],['Sets',st],['Streak',streaks().cur+' days 🔥']].map(([l,x])=>`<div><div class="lbl">${l}</div><div class="big">${x}</div></div>`).join('')}</div><div class="mt-4 text-sm">${top?`🏆 Top lift: <b class="gold">${top[0]}</b> — ${fv(top[1].b)} est. 1RM`:'Log workouts to fill your card'}</div><div class="mt-2 text-sm" style="color:#7F8BA3">Badges earned: ${S.badges.length}/${BD.length}</div>`}
async function exportCard(t){
 if(!window.html2canvas||!window.jspdf)return toast('Exporter still loading');
 let dl=null;try{dl=await claude.use('downloads')}catch(e){}
 let cv;try{cv=await html2canvas($('#share'),{backgroundColor:'#0B0F17',scale:2})}catch(e){return toast('Export failed')}let blob;
 if(t==='png')blob=await new Promise(r=>cv.toBlob(r,'image/png'));
 else{const w=cv.width/2,h=cv.height/2,d=new window.jspdf.jsPDF({unit:'px',orientation:w>=h?'l':'p',format:[w,h]});d.addImage(cv.toDataURL('image/png'),'PNG',0,0,w,h);blob=d.output('blob')}
 const fn='next-level-'+(xp==='m'?'month':'week')+'.'+t;
 if(dl){try{await dl.save({filename:fn,data:blob})}catch(e){if(e.code!=='declined')toast('Save unavailable')}return}
 const a=document.createElement('a'),u=URL.createObjectURL(blob);a.href=u;a.download=fn;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(u),4000)}

/* ---------- Nutrition & Hydration ---------- */
const DEF={k:2400,p:160,c:260,f:70,ml:2000},GOAL={...DEF,ok:false};let mCh,bCh,bm='bw';
/* goal presets: kcal vs maintenance (TDEE) and protein g per kg body weight */
const GL={gain:{n:'Muscle building',adj:400,pk:1.8,t:'muscle-building'},loss:{n:'Fat loss',adj:-400,pk:2.2,t:'fat-loss'},maint:{n:'Maintenance',adj:0,pk:1.6,t:'maintenance'},recomp:{n:'Recomposition',adj:-100,pk:2.2,t:'recomposition'}};
/* activity multiplier, label, extra water in ml */
const ACTL=[[1.2,'Sedentary (little exercise)',0],[1.375,'Light (1-3 workouts/week)',250],[1.55,'Moderate (3-5 workouts/week)',500],[1.725,'Very active (6-7 workouts/week)',750],[1.9,'Athlete / physical job + training',1000]];
const wtKg=()=>{const r=[...S.body].reverse().find(b=>b.bw>0);return r?r.bw:0};
function calcPlan(){
 const n=S.nut,w=wtKg(),g=GL[n.goal]||GL.maint;
 if(!w||!n.ht||!n.age){Object.assign(GOAL,DEF,{ok:false});return GOAL}
 const bmr=10*w+6.25*n.ht-5*n.age+(n.sex==='f'?-161:5),tdee=bmr*n.act,floor=n.sex==='f'?1200:1500;
 const kt=Math.max(floor,tdee+g.adj),p=Math.round(w*g.pk),f=Math.round(Math.max(w*0.8,kt*0.22/9));
 const c=Math.max(50,Math.round((kt-p*4-f*9)/4)),k=Math.round((p*4+c*4+f*9)/10)*10;
 const ac=ACTL.find(a=>a[0]===n.act)||ACTL[2],ml=Math.min(6000,Math.max(1500,Math.round((w*35+ac[2])/250)*250));
 Object.assign(GOAL,{ok:true,k,p,c,f,ml,bmr:Math.round(bmr),tdee:Math.round(tdee),w});return GOAL}
function fillPlan(){
 const n=S.nut;
 if(!n.age){const u=getUser()||{};if(u.birthday){const b=pd(u.birthday),t=new Date();let a=t.getFullYear()-b.getFullYear();if(t<new Date(t.getFullYear(),b.getMonth(),b.getDate()))a--;if(a>=13&&a<=90)n.age=a}}
 const sel=$('#nAct');if(!sel.options.length)sel.innerHTML=ACTL.map(a=>`<option value="${a[0]}">${a[1]}</option>`).join('');
 document.querySelectorAll('.wu').forEach(e=>e.textContent=S.unit);
 const ae=document.activeElement;if(ae&&ae.closest&&ae.closest('#planCard'))return;
 $('#nGoal').value=n.goal;$('#nSex').value=n.sex;$('#nAge').value=n.age||'';$('#nHt').value=n.ht||'';sel.value=String(n.act);
 const w=wtKg();$('#nWt').value=w?fmt(w):''}
function savePlan(){
 const n=S.nut,num=(id,a,b)=>{const v=parseFloat($('#'+id).value);return isFinite(v)&&v>=a&&v<=b?v:0};
 const gv=$('#nGoal').value;n.goal=GL[gv]?gv:'maint';n.sex=$('#nSex').value==='f'?'f':'m';
 n.age=Math.round(num('nAge',13,90));n.ht=Math.round(num('nHt',120,230));
 const act=parseFloat($('#nAct').value);n.act=ACTL.some(a=>a[0]===act)?act:1.55;
 const wr=parseFloat($('#nWt').value),w=isFinite(wr)&&toKg(wr)>=25&&toKg(wr)<=300?toKg(wr):0;
 /* weight lives in the Body log, so the Body tab and the plan always agree */
 if(w&&Math.abs(w-wtKg())>0.06){const d=today(),i=S.body.findIndex(b=>b.date===d);if(i>=0)S.body[i].bw=w;else S.body.push({date:d,bw:w});S.body.sort((a,b)=>a.date<b.date?-1:1)}
 save();renderNut();renderLog();renderSmart();vo2Fill();toast('Plan updated')}
function nutTips(t){
 const n=S.nut,g=GL[n.goal]||GL.maint,out=[];
 const rk=GOAL.k-t.k,rp=Math.round(GOAL.p-t.p),rc=Math.round(GOAL.c-t.c),rf=Math.round(GOAL.f-t.f),ml=(S.water[today()]||0)*250;
 if(!GOAL.ok)out.push(['w','Add your age, height and weight above so targets match your goal. Until then these are default targets.']);
 if(!meals().length)out.push(['',`Log your first meal. Today's target is ${GOAL.k} kcal and ${GOAL.p}g protein.`]);
 else{
  if(rp>0){const food=rp>=40?'a chicken breast (about 30g) plus a protein shake (about 25g)':rp>=20?'Greek yogurt (about 17g per 170g) or 3 eggs (about 19g)':'cottage cheese or an egg-white omelette';
   out.push(['',`You need ${rp}g more protein today to hit your ${g.t} target. Try ${food} in your next meal.`])}
  else out.push(['g','Protein target hit. Keep the rest of the day to carbs and fats within your budget.']);
  if(n.goal==='gain'&&rk>400)out.push(['',`You're ${Math.round(rk)} kcal short of your surplus target. Add calorie-dense foods like rice or oats, nuts, peanut butter or olive oil.`]);
  else if(n.goal!=='gain'&&rk<-50)out.push(['w',`You're ${Math.round(-rk)} kcal over target. Keep the next meal light: lean protein and vegetables.`]);
  else if(n.goal!=='loss'&&rc>60&&rk>200)out.push(['',`${rc}g of carbs left. Rice, potatoes, oats or fruit around training will fuel your next session.`]);
  if(rf<-10)out.push(['w',`Fats are ${-rf}g over target. Choose leaner cuts and go easy on oils for the rest of the day.`])}
 const expect=GOAL.ml*Math.min(1,Math.max(0,(new Date().getHours()-7)/14));
 if(ml<expected(expect))out.push(['',`Hydration is behind pace: ${ml} of ${GOAL.ml} ml. Have 500 ml now.`]);
 return out.slice(0,4)}
const expected=e=>e-500;
function renderNut(){
 calcPlan();fillPlan();const n=S.nut,g=GL[n.goal]||GL.maint;
 const t=meals().reduce((a,m)=>({k:a.k+m.k,p:a.p+m.p,c:a.c+m.c,f:a.f+m.f}),{k:0,p:0,c:0,f:0});
 $('#plTag').textContent=GOAL.ok?g.n:'Default targets';
 $('#plSum').innerHTML=GOAL.ok?`<div class="grid grid-cols-3 gap-2 text-center"><div><div class="lbl">BMR</div><b>${GOAL.bmr}</b></div><div><div class="lbl">Maintenance</div><b>${GOAL.tdee}</b></div><div><div class="lbl">Target</div><b style="color:var(--g)">${GOAL.k}</b></div></div><div class="text-xs mt-2" style="color:var(--mut)">${GOAL.k-GOAL.tdee>=0?'+':''}${GOAL.k-GOAL.tdee} kcal vs maintenance · protein ${g.pk} g/kg · estimate (Mifflin-St Jeor). Re-check after 2-3 weeks against your weight trend.</div>`:'<div class="text-xs" style="color:var(--mut)">Enter age, height and weight (or log weight in the Body tab) to calculate targets for your goal.</div>';
 const tot=t.p*4+t.c*4+t.f*9,pc=x=>tot?Math.round(x/tot*100):0;
 $('#mTot').innerHTML=`<div class="big">${Math.round(t.k)}<span class="text-sm" style="color:var(--mut)"> / ${GOAL.k} kcal</span></div><div style="color:var(--mut)">${Math.round(t.p)}g P · ${Math.round(t.c)}g C · ${Math.round(t.f)}g F</div><div class="text-xs mt-1" style="color:var(--mut)">${tot?`Calories from: P ${pc(t.p*4)}% · C ${pc(t.c*4)}% · F ${pc(t.f*9)}%`:'Macro split appears once you log a meal'}</div>`;
 const bar=(l,v,goal,u,c)=>{const over=v>goal*1.1;return`<div><div class="flex justify-between text-xs mb-1"><span>${l}</span><span style="color:${over?'#FFB800':'var(--mut)'}">${Math.round(v)}/${goal}${u}</span></div><div class="bar"><i style="width:${Math.min(100,goal?v/goal*100:0)}%;background:${over?'#FFB800':c}"></i></div></div>`};
 $('#mBars').innerHTML=bar('Calories',t.k,GOAL.k,' kcal','linear-gradient(90deg,#9B5CFF,#C58BFF)')+bar('Protein',t.p,GOAL.p,'g','var(--g)')+bar('Carbs',t.c,GOAL.c,'g','var(--c)')+bar('Fats',t.f,GOAL.f,'g','#FFD700');
 $('#mAI').innerHTML=nutTips(t).map(([c,m])=>`<div class="chip ${c}">${ic('bolt',20)}<span>${m}</span></div>`).join('');
 $('#mList').innerHTML=meals().map((m,i)=>`<div class="flex justify-between items-center"><span>${escText(m.n)} <span style="color:var(--mut)">${m.k} kcal · ${m.p}/${m.c}/${m.f}</span></span><button style="background:none;border:0;color:var(--mut);cursor:pointer" data-onclick="delMeal(${i})">${ic('trash')}</button></div>`).join('')||'<div style="color:var(--mut)">No meals logged yet</div>';
 const dd=[t.p*4,t.c*4,t.f*9],has=dd.some(x=>x>0),data={labels:['Protein','Carbs','Fats'],datasets:[{data:has?dd:[1,1,1],backgroundColor:has?['#00FF66','#00E5FF','#FFD700']:[cssv('--ph'),cssv('--ph'),cssv('--ph')],borderWidth:0}]};
 if(mCh){mCh.data=data;mCh.options.plugins.tooltip.enabled=has;mCh.update()}else if(window.Chart)mCh=new Chart($('#mChart'),{type:'doughnut',data,options:{cutout:'70%',plugins:{legend:{display:false},tooltip:{enabled:has}}}});
 const w=S.water[today()]||0,tg=Math.round(GOAL.ml/250);
 $('#wTxt').textContent=`${w*250} / ${GOAL.ml} ml`;$('#wBar').style.width=Math.min(100,w/tg*100)+'%';
 $('#wHint').textContent=GOAL.ok?`Goal: ${fmt(GOAL.w)} ${S.unit} body weight x 35 ml/kg plus an allowance for your activity level. Drink more in hot weather or long sessions.`:'Default 2000 ml goal. Add your weight above for a personal target.';
 $('#wGl').innerHTML=Array.from({length:Math.max(tg,w)},(_,i)=>`<span style="opacity:${i<w?1:.2};transition:.3s">🥛</span>`).join('')}
const meals=()=>S.meals[today()]||[];
function addMeal(){const pos=id=>Math.max(0,+$('#'+id).value||0),m={n:$('#mn').value.replace(/[<>&"'`]/g,'').trim().slice(0,40)||'Meal',k:pos('mk'),p:pos('mp'),c:pos('mc'),f:pos('mf')};if(!(m.k||m.p||m.c||m.f))return toast('Enter nutrition values');(S.meals[today()]=meals()).push(m);['mn','mk','mp','mc','mf'].forEach(i=>$('#'+i).value='');save();renderNut();toast('Meal logged')}
function delMeal(i){S.meals[today()].splice(i,1);save();renderNut()}
function addW(n){S.water[today()]=Math.max(0,(S.water[today()]||0)+n);save();renderNut();if(n>0)celebrate([],newBadges())}
/* ---------- Body ---------- */
const BM={bw:'Weight',bf:'Body Fat %',bi:'Biceps',ch:'Chest',wa:'Waist'};
function addBody(){const e={date:today()};const g=(id,k)=>{const v=parseFloat($('#'+id).value);if(!isNaN(v))e[k]=k==='bw'?toKg(v):v};g('bw','bw');g('bf','bf');g('bi','bi');g('bc','ch');g('bn','wa');
 if(Object.keys(e).length<2)return toast('Enter a value');const i=S.body.findIndex(b=>b.date===e.date);if(i>=0)Object.assign(S.body[i],e);else S.body.push(e);
 S.body.sort((a,b)=>a.date<b.date?-1:1);save();['bw','bf','bi','bc','bn'].forEach(i=>$('#'+i).value='');renderBody();toast('Measurements saved')}
function renderBody(){
 $('#bTabs').innerHTML=Object.entries(BM).map(([k,l])=>`<button class="btn ${k===bm?'on':''}" style="padding:6px 12px;font-size:12px" data-onclick="setBm('${k}')">${l}</button>`).join('');
 const rows=S.body.filter(b=>b[bm]!=null),cv=v=>bm==='bw'?Math.round(toU(v)*10)/10:v,u=bm==='bw'?S.unit:bm==='bf'?'%':'cm';
 const data={labels:rows.map(r=>r.date.slice(5)),datasets:[{label:BM[bm],data:rows.map(r=>cv(r[bm])),borderColor:'#00FF66',backgroundColor:'rgba(0,255,102,.12)',fill:true,tension:.4,pointRadius:4,pointBackgroundColor:'#00E5FF'}]};
 if(bCh){bCh.data=data;bCh.update()}else if(window.Chart)bCh=new Chart($('#bChart'),{type:'line',data,options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{x:{ticks:{color:cssv('--mut')},grid:{display:false}},y:{ticks:{color:cssv('--mut')},grid:{color:cssv('--grid')}}}}});
 const l=rows[rows.length-1],f=rows[0],d=l&&Math.round((cv(l[bm])-cv(f[bm]))*10)/10;
 $('#bLast').innerHTML=l?`Latest <b>${BM[bm]}</b>: <b style="color:var(--g)">${cv(l[bm])} ${u}</b>${rows.length>1?` <span style="color:var(--mut)">(${d>=0?'+':''}${d} since ${f.date})</span>`:''}`:'No data yet.'}

let cp='w',xp='w',cpOff=0,cpSel=null,cpMeta=[];
function cpDetail(){const el=$('#cpDetail'),m=cpMeta[cpSel];if(!el)return;if(!m){el.innerHTML='';return}
 const pm=cpSel>0?cpMeta[cpSel-1]:null,ch=pm&&pm.vol?Math.round((m.vol-pm.vol)/pm.vol*100):null,pl=cp==='d'?'day':cp==='m'?'month':'week';
 el.innerHTML=`<div class="flex justify-between items-start gap-2"><div><div class="font-bold text-sm">${escText(m.title)}</div><div class="text-xs" style="color:var(--mut)">${m.n?m.n+' session'+(m.n>1?'s':''):'Rest '+pl+' · no workouts'}</div></div>${ch==null?'':`<span class="text-xs font-bold" style="color:${ch>=0?'var(--g)':'#FF6B6B'};white-space:nowrap">${ch>=0?'▲':'▼'} ${Math.abs(ch)}% vs prev ${pl}</span>`}</div>`+
 (m.n?`<div class="grid grid-cols-4 gap-2 text-center mt-3"><div><div class="lbl">Volume</div><b style="color:var(--g)">${fv(m.vol)}</b></div><div><div class="lbl">Sets</div><b>${m.sets}</b></div><div><div class="lbl">Reps</div><b>${m.reps}</b></div><div><div class="lbl">Best 1RM</div><b style="color:var(--c)">${m.best?fv(m.best):'–'}</b></div></div>${m.bn?`<div class="text-xs mt-2" style="color:var(--mut)">Strongest lift: ${escText(m.bn)}</div>`:''}`:'')}
function cpShift(d){const n=cp==='d'?7:6;cpOff=Math.max(0,cpOff+d*n);cpSel=null;renderDash()}
function setCp(k){cp=k;cpOff=0;cpSel=null;$('#cpD').classList.toggle('on',k==='d');$('#cpW').classList.toggle('on',k==='w');$('#cpM').classList.toggle('on',k==='m');renderDash()}
/* Volume & Strength Trend: drag / swipe the chart left-right to move between periods */
(function(){const cv=$('#chart');if(!cv)return;const box=cv.parentNode;box.style.touchAction='pan-y';box.style.cursor='grab';box.style.overflow='hidden';
 let st=null,busy=false,tm=0;
 const set=(x,o,t)=>{cv.style.transition=t||'none';cv.style.transform=x?'translateX('+x+'px)':'';cv.style.opacity=o==null?'':o};
 box.addEventListener('pointerdown',e=>{if(busy||e.pointerType==='mouse'&&e.button!==0)return;st={x:e.clientX,y:e.clientY,dx:0,drag:false,id:e.pointerId,t:Date.now()}});
 window.addEventListener('pointermove',e=>{if(!st||e.pointerId!==st.id)return;const dx=e.clientX-st.x,dy=e.clientY-st.y;
  if(!st.drag){if(Math.abs(dy)>10&&Math.abs(dy)>Math.abs(dx)){st=null;return}if(Math.abs(dx)>8){st.drag=true;box.style.cursor='grabbing';try{box.setPointerCapture(e.pointerId)}catch(_){}}}
  if(st.drag){st.dx=dx;const x=(dx<0&&!cpOff)?dx*.25:dx;set(x,1-Math.min(Math.abs(x)/Math.max(1,box.offsetWidth),.6)*.7)}});
 const end=e=>{if(!st||(e&&e.pointerId!==st.id))return;const s0=st;st=null;box.style.cursor='grab';if(!s0.drag)return;window.__cpDrag=Date.now();
  const w=Math.max(1,box.offsetWidth),dx=s0.dx,fast=Math.abs(dx)/Math.max(1,Date.now()-s0.t)>.5,far=Math.abs(dx)>w*.2||(fast&&Math.abs(dx)>30),dir=dx>0?1:-1;
  const t0=cv.style.transform||'none',o0=cv.style.opacity||'1',anim=(f,t,ms,ease)=>cv.animate([f,t],{duration:ms,easing:ease,fill:'forwards'});
  const clr=()=>{clearTimeout(tm);busy=false;cv.getAnimations().forEach(x=>x.cancel());cv.style.transition='';cv.style.transform='';cv.style.opacity=''};
  if(far&&(dir>0||cpOff)){busy=true;set(0,1);
   const a=anim({transform:t0,opacity:o0},{transform:'translateX('+dir*w*.6+'px)',opacity:0},150,'ease-out');
   a.finished.then(()=>{cpShift(dir);a.cancel();cv.style.transform='translateX('+(-dir*w*.3)+'px)';cv.style.opacity='0';
    const b=anim({transform:'translateX('+(-dir*w*.3)+'px)',opacity:0},{transform:'translateX(0px)',opacity:1},300,'cubic-bezier(.2,.8,.2,1)');
    return b.finished}).then(clr,clr);tm=setTimeout(clr,1500)}
  else{set(0,1);busy=true;anim({transform:t0,opacity:o0},{transform:'translateX(0px)',opacity:1},300,'cubic-bezier(.2,1.2,.4,1)').finished.then(clr,clr);tm=setTimeout(clr,900)}};
 window.addEventListener('pointerup',end);window.addEventListener('pointercancel',end)})();
function setXp(k){xp=k;$('#xpW').classList.toggle('on',k==='w');$('#xpM').classList.toggle('on',k==='m');renderAwd()}
/* ---------- History ---------- */
let delArm=null;
function delWo(d){if(delArm!==d){delArm=d;toast('Tap delete again to confirm');setTimeout(()=>delArm=null,3000);return}S.workouts=S.workouts.filter(w=>w.date!==d);delArm=null;save();renderAll()}
function renderHis(){
 const cleanedWorkouts=mergeWorkoutRecords(S.workouts);
 if(!sameJson(cleanedWorkouts,S.workouts)){S.workouts=cleanedWorkouts;try{localStorage.setItem(K,JSON.stringify(S))}catch(e){}scheduleCloudSync()}
 const xs=$('#hEx'),cur=xs.value;xs.innerHTML='<option value="">All exercises</option>'+allEx().map(n=>`<option ${n===cur?'selected':''}>${n}</option>`).join('');
 const r=$('#hRange').value,dt=$('#hDate').value,mo=$('#hMon').value,g=$('#hGrp').value,kf=w=>g==='m'?w.date.slice(0,7):ymd(wkStart(pd(w.date))),fe=xs.value,ws=wkStart(new Date()),lw=new Date(ws),nw=new Date(ws),m30=new Date();
 lw.setDate(lw.getDate()-7);nw.setDate(nw.getDate()+7);m30.setDate(m30.getDate()-30);m30.setHours(0,0,0,0);
 let list=S.workouts.filter(w=>{const d=pd(w.date);if(dt)return w.date===dt;if(mo)return w.date.startsWith(mo);return r==='this'?d>=ws&&d<nw:r==='last'?d>=lw&&d<ws:r==='30'?d>=m30:true});
 if(fe)list=list.map(w=>({...w,ex:w.ex.filter(e=>e.n===fe)})).filter(w=>w.ex.length);
 list.sort((a,b)=>a.date<b.date?1:-1);
 const wv=w=>w.ex.reduce((a,e)=>a+volOf(e),0),ns=w=>w.ex.reduce((a,e)=>a+e.sets.length,0);
 $('#hSum').innerHTML=list.length?`<div class="grid grid-cols-3 text-center"><div><div class="lbl">Sessions</div><div class="big">${list.length}</div></div><div><div class="lbl">Sets</div><div class="big">${list.reduce((a,w)=>a+ns(w),0)}</div></div><div><div class="lbl">Volume</div><div class="big" style="font-size:20px;padding-top:4px">${fv(list.reduce((a,w)=>a+wv(w),0))}</div></div></div>`:`<div class="text-center" style="color:var(--mut)">${S.workouts.length?'No workouts match these filters.':'No workouts logged yet.'}</div>`;
 let wk='',h='';
 list.forEach(w=>{const k=kf(w);
  if(k!==wk){wk=k;const tot=list.filter(x=>kf(x)===k);h+=`<div class="lbl mt-2" style="color:var(--c)">${g==='m'?pd(w.date).toLocaleDateString(undefined,{month:'long',year:'numeric'}):'Week of '+wkStart(pd(w.date)).toLocaleDateString(undefined,{month:'short',day:'numeric'})} · ${tot.length} session${tot.length>1?'s':''} · ${fv(tot.reduce((a,x)=>a+wv(x),0))}</div>`}
  h+=`<div class="card" style="cursor:pointer" role="button" tabindex="0" data-onclick="showWo('${w.date}')" data-onkeydown="woKey(event,'${w.date}')"><div class="flex justify-between items-start"><div><div class="font-bold">${pd(w.date).toLocaleDateString(undefined,{weekday:'long',month:'short',day:'numeric',year:'numeric'})}</div><div class="text-xs" style="color:var(--mut)">${ns(w)} sets · ${fv(wv(w))}${w.manual?' · marked manually':''}</div></div><button aria-label="Delete workout" style="background:none;border:0;color:var(--mut);cursor:pointer" data-onclick="event.stopPropagation();delWo('${w.date}')">${ic('trash')}</button></div>`+
  (w.ex.length?`<div class="mt-2 text-sm" style="color:var(--mut)">${w.ex.map(e=>e.n+' ×'+e.sets.length+(noReps(e.n)?' ('+mainT(e)+')':'')).join(' · ')}</div><div class="flex justify-between items-center mt-2"><span class="text-xs" style="color:var(--c)">Tap to see full workout ›</span><button type="button" class="btn p" style="padding:6px 12px;font-size:12px" data-onclick="event.stopPropagation();trainAgain('${w.date}')" data-onkeydown="event.stopPropagation()">Train again</button></div>`:`<div class="text-xs mt-2" style="color:var(--mut)">No exercises logged for this day.</div>`)+'</div>'});
 $('#hList').innerHTML=h}

/* ---------- Workout detail popup ---------- */
function showWo(d){
 const w=S.workouts.find(x=>x.date===d);if(!w)return;
 const ns=w.ex.reduce((a,e)=>a+e.sets.length,0),rp=w.ex.reduce((a,e)=>a+(noReps(e.n)?0:e.sets.reduce((b,s)=>b+s.r,0)),0),vol=w.ex.reduce((a,e)=>a+volOf(e),0);
 const body=w.ex.length?w.ex.map(e=>{
  const top=e.sets.reduce((m,s)=>e1(s.w,s.r)>e1(m.w,m.r)?s:m,e.sets[0]);
  return `<div class="mt-4"><div class="flex justify-between text-sm"><b>${escText(e.n)} <span class="lbl">${escText(grp(e.n))}</span></b><span style="color:var(--mut)">${mainT(e)}</span></div>`+
  e.sets.map((s,i)=>`<div class="flex justify-between text-sm py-1" style="border-bottom:1px solid var(--bd)"><span style="color:var(--mut)">Set ${i+1}</span><span>${isCardio(e.n)?cTxt(s,cMet(e)):isTime(e.n)?fmtT(s.r):(s.w?fmt(s.w)+' '+S.unit:'Bodyweight')+' × '+s.r}</span></div>`).join('')+
  (top&&top.w>0?`<div class="text-xs mt-1" style="color:var(--c)">Best set est. 1RM: ${fv(e1(top.w,top.r))}</div>`:'')+'</div>'}).join(''):`<div class="mt-4 text-sm" style="color:var(--mut)">${w.manual?'This day was marked manually — no exercises were logged.':'No exercises logged.'}</div>`;
 $('#mBox').innerHTML=`<div style="text-align:left"><div class="flex justify-between items-start"><div><div class="font-bold text-lg">${pd(d).toLocaleDateString(undefined,{weekday:'long',month:'long',day:'numeric',year:'numeric'})}</div><div class="lbl">Workout details</div></div><button aria-label="Close" style="background:none;border:0;color:var(--mut);cursor:pointer;font-size:24px;line-height:1" data-onclick="closeModal()">×</button></div>
 <div class="grid grid-cols-3 gap-2 text-center mt-3"><div><div class="lbl">Exercises</div><div class="big" style="font-size:20px">${w.ex.length}</div></div><div><div class="lbl">Sets · Reps</div><div class="big" style="font-size:20px">${ns} · ${rp}</div></div><div><div class="lbl">Volume</div><div class="big" style="font-size:20px">${fv(vol)}</div></div></div>
 ${body}<div class="flex gap-2 justify-center flex-wrap mt-4">${w.ex.length?`<button class="btn p" data-onclick="trainAgain('${w.date}')">Train this again</button>`:''}<button class="btn" data-onclick="closeModal()">Close</button></div></div>`;
 $('#modal').classList.add('show')}

/* ---------- User profile and feedback integration ---------- */
/* Google Apps Script backend for user-submitted feedback only. Account/profile details are not sent here. */
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbygv5UDSOsIOiv4Q9XJPrHK-Iqvhdnq4N8_3YlqzrthYKtFQzlAOpzX2erGx33o9WLPTw/exec";
const FEEDBACK_URL = GOOGLE_SCRIPT_URL;
const UKEY = "nextlevel_user";
function getUser(){return jget(UKEY,null)}
function setUser(o){jset(UKEY,o)}
async function flushSync(){if(!navigator.onLine)return;let q=jget(OUTBOX,[]);if(!Array.isArray(q))q=[];q=q.filter(isOutboxItem);while(q.length){try{await postFeedback(q[0]);q.shift();jset(OUTBOX,q)}catch(e){break}}}
window.addEventListener('online',flushSync);
async function logout(){if(!supabaseClient)return toast('Supabase is not configured');if(!(await askConfirm('Your synced data will remain in your account.',{title:'Sign out?',okText:'Sign out'})))return;supabaseClient.auth.signOut({scope:'local'}).then(({error})=>{if(error){toast('Could not sign out. Try again.');return}try{localStorage.removeItem(SES_KEY);localStorage.removeItem(UKEY)}catch(e){}location.reload()}).catch(()=>toast('Could not sign out. Check your connection.'))}
function userUI(){const u=SES?getUser():null;{const ub=$('#userBtn');ub.innerHTML='<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"/></svg>';ub.setAttribute('aria-label',SES?'Profile':'Sign in');ub.title=SES?'Profile':'Sign in';ub.style.padding='9px 11px'}const h=new Date().getHours(),g=h<12?'Good morning':h<17?'Good afternoon':'Good evening';const prefix=$('#dashGreetingPrefix'),personWrap=$('#dashGreetingPersonWrap'),nameEl=$('#dashGreetingName'),guestSuffix=$('#dashGreetingGuestSuffix'),date=$('#dashDate');const firstName=u&&u.name?u.name.trim().split(/\s+/)[0]:'';if(prefix)prefix.textContent=g;if(nameEl)nameEl.textContent=firstName;if(personWrap)personWrap.style.display=firstName?'inline':'none';if(guestSuffix)guestSuffix.hidden=!!firstName;if(date)date.textContent=new Date().toLocaleDateString(undefined,{weekday:'long',month:'long',day:'numeric'})+' · Every session counts.'}
function showProfile(){const u=getUser()||{};$('#uName').value=u.name||'';$('#uPhone').value=u.phone||'';$('#uBday').value=u.birthday||'';$('#uCancel').style.display='flex';backupInfo();$('#onb').style.display='flex'}
async function saveProfile(){
 const name=$('#uName').value.replace(/[<>&"'`]/g,'').trim().slice(0,60);if(!name)return toast('Please enter your name');
 const phoneRaw=$('#uPhone').value.trim(),birthday=$('#uBday').value,normalized=phoneRaw?normId(phoneRaw):null;
 if(phoneRaw&&(!normalized||normalized.type!=='phone'))return toast('Enter a valid phone number');if(birthday&&(birthday>today()||birthday<'1900-01-01'))return toast('Enter a valid birthday');
 if(!supabaseClient||!SES)return toast('Please configure and sign in to your secure account first');
 const btn=document.querySelector('#onb .btn.p'),prev=btn.textContent;btn.disabled=true;btn.textContent='Saving securely…';
 try{
  const {data:authData,error:authError}=await supabaseClient.auth.updateUser({data:{full_name:name,phone:normalized?normalized.phone:'',birthday: birthday||''}});if(authError)throw authError;
  const record={id:SES.id,full_name:name,phone:normalized?normalized.phone:null,birthday:birthday||null,updated_at:new Date().toISOString()};
  const {error}=await supabaseClient.from('profiles').upsert(record,{onConflict:'id'});if(error)throw error;
  const acc=ACC[SES.id];if(acc){acc.name=name;acc.phone=normalized?normalized.phone:'';acc.birthday=birthday||'';jset(ACC_KEY,ACC)}
  SES.name=name;jset(SES_KEY,SES);const old=getUser()||{};setUser({...old,id:SES.id,name,phone:normalized?normalized.phone:'',birthday:birthday||'',email:(authData.user&&authData.user.email)||old.email||'',updatedAt:new Date().toISOString()});
  $('#onb').style.display='none';userUI();toast('Profile updated securely');
 }catch(e){console.error('Profile save error:',e);toast('Profile could not be saved. Check cloud setup and connection.')}finally{btn.disabled=false;btn.textContent=prev}
}
async function deleteAccount(){
 if(!supabaseClient||!SES)return toast('Sign in to your secure account first');
 const typed=await uiDialog({title:'Delete your account?',message:'This permanently deletes your cloud account and its synced data. It cannot be undone. Download a backup first if you need one.\n\nType DELETE to confirm.',input:true,placeholder:'DELETE',okText:'Delete account',danger:true,maxLength:10,validate:v=>v.trim()==='DELETE'});if(typed==null)return;
 const btn=document.querySelector('#onb .danger-btn');if(btn){btn.disabled=true;btn.textContent='Deleting account…'}
 try{
  const {error}=await supabaseClient.functions.invoke('delete-account',{body:{confirm:true}});if(error)throw error;
  window.NL_DELETING_ACCOUNT=true;await supabaseClient.auth.signOut({scope:'local'});
  try{[K,K+'_bak',K+'_prerestore',SES_KEY,UKEY].forEach(k=>localStorage.removeItem(k));delete ACC[SES.id];delete DKMAP[SES.id];jset(ACC_KEY,ACC);jset(MAP_KEY,DKMAP)}catch(e){}
  location.reload();
 }catch(e){console.error('Account deletion error:',e);toast('Account deletion did not complete. Make sure the delete-account Edge Function is deployed.');if(btn){btn.disabled=false;btn.textContent='Delete my account & cloud data'}}
}
/* ---------- Data backup / restore (file <-> this browser's localStorage; no server involved) ---------- */
const BK_KEY='nextlevel_lastbackup',GROUPS=['Chest','Back','Legs','Shoulders','Traps','Biceps','Triceps','Forearms','Core','Glutes','Cardio','Full Body'];
function backupInfo(){const d=jget(BK_KEY,null);$('#bkInfo').textContent=d?'Last backup: '+new Date(d).toLocaleString():'No backup yet. Download one so your data survives if the browser is cleared.'}
function backupData(){
  const acc=SES&&ACC[SES.id]; // app data only: no password, hash or login details
  const out={app:'next-level-fitness',version:1,exportedAt:new Date().toISOString(),account:acc?{id:acc.id,name:acc.name}:null,data:S};
  const blob=new Blob([JSON.stringify(out,null,1)],{type:'application/json'});
  const a=document.createElement('a'),u=URL.createObjectURL(blob);a.href=u;a.download='next-level-backup-'+today()+'.json';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(u),4000);
  jset(BK_KEY,new Date().toISOString());backupInfo();toast('Backup downloaded')}
/* a backup file is untrusted input: rebuild every field with strict types and strip markup characters */
function cleanBackup(d){
  const str=(v,n)=>String(v==null?'':v).replace(/[<>&"'`]/g,'').trim().slice(0,n||40);
  const num=(v,max)=>{v=Number(v);return isFinite(v)&&v>=0?Math.min(v,max||100000):0};
  const dt=v=>typeof v==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(v)&&!isNaN(pd(v))?v:null;
  const sets=(a,keepD)=>(Array.isArray(a)?a:[]).slice(0,100).map(s=>{s=s||{};const o={w:num(s.w,2000),r:Math.round(num(s.r,86400))};if(s.c)o.c=Math.round(num(s.c,100000)*100)/100;if(keepD)o.d=s.d?1:0;return o});
  const exs=(a,keepD)=>(Array.isArray(a)?a:[]).slice(0,200).map(e=>{const x={n:str(e&&e.n),sets:sets(e&&e.sets,keepD)};if(e&&CM[e.m])x.m=e.m;return x}).filter(e=>e.n);
  const o={unit:d.unit==='lb'?'lb':'kg',sound:d.sound!==false,voice:d.voice!==false,custom:[],workouts:[],body:[],draft:exs(d.draft,true),meals:{},water:{},badges:[]};
  (Array.isArray(d.custom)?d.custom:[]).slice(0,200).forEach(c=>{if(c&&c.g==='Arms')c={...c,g:'Biceps'};const n=str(c&&c.n);if(n&&!o.custom.some(x=>x.n===n))o.custom.push({n,g:GROUPS.includes(c.g)?c.g:'Full Body'})});
  const byDate={};
  (Array.isArray(d.workouts)?d.workouts:[]).slice(0,5000).forEach(w=>{const day=dt(w&&w.date);if(!day)return;const e=exs(w.ex);
    if(byDate[day]){byDate[day].ex.push(...e);delete byDate[day].manual}else{const x={date:day,ex:e};if(w.manual&&!e.length)x.manual=true;byDate[day]=x;o.workouts.push(x)}});
  const bd={};
  (Array.isArray(d.body)?d.body:[]).slice(0,5000).forEach(b=>{const day=dt(b&&b.date);if(!day)return;const x={date:day};
    ['bw','bf','bi','ch','wa'].forEach(k=>{if(b[k]!=null&&b[k]!==''&&isFinite(Number(b[k]))&&Number(b[k])>=0)x[k]=Math.min(Number(b[k]),2000)});
    if(Object.keys(x).length>1){if(bd[day])Object.assign(bd[day],x);else{bd[day]=x;o.body.push(x)}}});
  o.body.sort((a,b)=>a.date<b.date?-1:1);
  Object.entries(d.meals&&typeof d.meals==='object'?d.meals:{}).slice(0,5000).forEach(([k,arr])=>{const day=dt(k);if(!day||!Array.isArray(arr))return;
    o.meals[day]=arr.slice(0,100).map(m=>{m=m||{};return{n:str(m.n)||'Meal',k:num(m.k,20000),p:num(m.p,2000),c:num(m.c,2000),f:num(m.f,2000)}})});
  Object.entries(d.water&&typeof d.water==='object'?d.water:{}).slice(0,5000).forEach(([k,v])=>{const day=dt(k);if(day)o.water[day]=Math.round(num(v,100))});
  if(d.nut&&typeof d.nut==='object'){const q=d.nut,ac=Number(q.act);o.nut={goal:GL[q.goal]?q.goal:'maint',sex:q.sex==='f'?'f':'m',age:Math.round(num(q.age,90)),ht:Math.round(num(q.ht,230)),act:ACTL.some(a=>a[0]===ac)?ac:1.55}}
  o.plans=[];(Array.isArray(d.plans)?d.plans:[]).slice(0,200).forEach(q=>{const nm=str(q&&q.name,30),ex=[...new Set((Array.isArray(q&&q.ex)?q.ex:[]).slice(0,100).map(n=>str(n)).filter(Boolean))];if(nm&&ex.length&&!o.plans.some(x=>x.name.toLowerCase()===nm.toLowerCase()))o.plans.push({name:nm,ex})});
  o.badges=(Array.isArray(d.badges)?d.badges:[]).filter(x=>BD.some(b=>b[0]===x));
  const prs={};Object.entries(d.prs&&typeof d.prs==='object'?d.prs:{}).slice(0,500).forEach(([n,p])=>{n=str(n);if(n&&p)prs[n]={b:num(p.b,5000),w:num(p.w,2000)}});
  if(Object.keys(prs).length)o.prs=prs; // otherwise the app rebuilds personal records from the workouts
  return o}
async function restoreData(inp){
  const f=inp.files&&inp.files[0];inp.value='';if(!f)return;
  if(f.size>5*1024*1024)return toast('That file is too big to be a backup');
  let o;try{o=JSON.parse(await f.text())}catch(e){return toast('Not a valid backup file')}
  if(!o||o.app!=='next-level-fitness'||!o.data||typeof o.data!=='object')return toast('This is not a Next Level backup file');
  const nd=cleanBackup(o.data),nw=nd.workouts.length,nb=nd.body.length,nm=Object.keys(nd.meals).length;
  if(!nw&&!nb&&!nm&&!nd.custom.length)return toast('The backup has no data in it');
  if(!(await askConfirm('Restore from backup'+(o.exportedAt&&!isNaN(new Date(o.exportedAt))?' made '+new Date(o.exportedAt).toLocaleDateString():'')+'?\n\nIn the backup: '+nw+' workouts, '+nb+' body logs, '+nm+' days of meals\nOn this account now: '+S.workouts.length+' workouts, '+S.body.length+' body logs\n\nThis replaces the current data. A safety copy of the current data is kept in this browser.',{title:'Restore backup?',okText:'Restore',danger:true})))return;
  try{localStorage.setItem(K+'_prerestore',JSON.stringify(S))}catch(e){}
  try{localStorage.setItem(K,JSON.stringify(nd))}catch(e){return toast('Could not restore (browser storage is full)')}
  try{sessionStorage.setItem('nl_msg','Backup restored: '+nw+' workouts, '+nb+' body logs')}catch(e){}
  location.reload()}

/* ---------- Init ---------- */
S.meals=S.meals||{};S.water=S.water||{};S.nut=Object.assign({goal:'maint',sex:'m',age:0,ht:0,act:1.55},S.nut&&typeof S.nut==='object'?S.nut:{});S.badges=S.badges||[];S.voice=S.voice!==false;
if(!S.body)S.body=[];
if(!S.prs){S.prs={};S.workouts.forEach(x=>x.ex.forEach(e=>{if(!S.prs[e.n]){const b=bestOf(e.n);if(b.b>0)S.prs[e.n]=b}}))}
newBadges();
/* Admin functions only call RPCs whose authorization is enforced in Postgres. */
async function loadAdminDashboard(){
 const status=$('#adminStatus'),stats=$('#adminStats'),users=$('#adminUsers');stats.innerHTML='';users.innerHTML='';
 if(!supabaseClient||!SES){status.textContent='Sign in to your configured Supabase account first.';return}
 status.textContent='Checking server-side admin permission…';
 try{
  const {data:allowed,error}=await supabaseClient.rpc('is_fitness_admin');if(error)throw error;
  if(allowed!==true){status.textContent='Access denied. This account has not been granted the admin role by a trusted project owner.';return}
  const {data:summary,error:se}=await supabaseClient.rpc('admin_fitness_summary');if(se)throw se;
  status.textContent='Admin access verified by Supabase. User profile details are minimized; workout records are not exposed here.';
  const x=summary||{};stats.innerHTML=[['Total accounts',Number(x.total_users||0)],['Profiles',Number(x.profiles||0)],['Accounts with fitness data',Number(x.active_fitness_users||0)],['Updated in 7 days',Number(x.recent_updates||0)]].map(([k,v])=>`<div class="card"><div class="lbl">${k}</div><div class="big">${v}</div></div>`).join('');
  const {data:list,error:le}=await supabaseClient.rpc('admin_recent_profiles',{p_limit:10});if(le)throw le;
  users.innerHTML='<div class="card"><b>Recent profiles (limited fields)</b><div class="text-xs mt-1 mb-3" style="color:var(--mut)">Name, created date and last update only.</div>'+(Array.isArray(list)&&list.length?list.map(u=>`<div class="flex justify-between gap-3 py-2" style="border-top:1px solid var(--bd)"><span>${escText(u.full_name||'Athlete')}</span><span class="text-xs" style="color:var(--mut)">${escText(String(u.updated_at||u.created_at||'').slice(0,10))}</span></div>`).join(''):'<p class="text-sm mt-2">No profiles returned.</p>')+'</div>';
 }catch(e){console.error('Admin dashboard:',e);status.textContent='Admin functions are not installed or access could not be verified. Apply supabase/schema.sql and sign in again.'}
}
function escText(v){return String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}

function renderAll(){fillTEx();$('#unitBtn').textContent=S.unit.toUpperCase()+' ⇄ '+(S.unit==='kg'?'LB':'KG');renderDash();renderLog();renderSmart();vo2Fill();renderCal();renderAI();const on=k=>$('#t-'+k).classList.contains('act');if(on('nut'))renderNut();if(on('body'))renderBody();if(on('his'))renderHis();renderAwd()}
$('#logo').innerHTML=ic('bolt',30);$('#icTimer').innerHTML=ic('timer');drawT();$('#icBot').innerHTML=ic('bot',22);$('#icCheck').innerHTML=ic('check');
fillSelects();sndUI();go('dash');userUI();
if(!REQ)unlockApp();else{const g=$('#authGuest');if(g)g.style.display='none';try{localStorage.removeItem('nextlevel_guest_mode')}catch(e){}}
if(!SES){if(!REQ&&localStorage.getItem('nextlevel_guest_mode')==='1'){setCloudStatus(window.NL_SUPABASE_CONFIGURED?'Local mode · sign in to enable cross-device sync':'Local mode · data is saved on this device','warn')}else{showAuth('in');if(!window.NL_SUPABASE_CONFIGURED)setCloudStatus('Secure cloud login not configured · see SETUP.md','warn');else setCloudStatus('Sign in to sync your fitness data','warn')}}
else{if(!REQ||!supabaseClient||navigator.onLine===false)unlockApp();const a=ACC[SES.id]||{name:SES.name||'Athlete',email:'',phone:'',birthday:''};let u=getUser();
 if(!u||!u.name){u={id:SES.id,name:a.name,phone:a.phone||'',email:a.email||'',birthday:a.birthday||'',updatedAt:new Date().toISOString()};setUser(u)}userUI();
 try{const w=sessionStorage.getItem('nl_welcome');if(w){sessionStorage.removeItem('nl_welcome');setTimeout(()=>toast((w==='signup'?'Account ready':'Welcome back, '+String(a.name||'Athlete').split(' ')[0])+' · your training space is ready'),400)}}catch(e){}
 initializeCloudSync();}
try{const m=sessionStorage.getItem('nl_msg');if(m){sessionStorage.removeItem('nl_msg');setTimeout(()=>toast(m),600)}}catch(e){}
/* ---------- Dark / Light theme ---------- */
function cssv(n){return getComputedStyle(document.documentElement).getPropertyValue(n).trim()}
const THEME_KEY='nl_theme';
const ICON_SUN='<svg class="ic" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
const ICON_MOON='<svg class="ic" viewBox="0 0 24 24"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>';
const isLight=()=>document.documentElement.getAttribute('data-theme')==='light';
function themeUI(){
  const b=document.getElementById('themeBtn');if(!b)return;
  b.innerHTML=isLight()?ICON_MOON:ICON_SUN; /* icon shows what you will switch TO */
  const m=document.querySelector('meta[name=theme-color]');if(m)m.setAttribute('content',isLight()?'#EEF2F8':'#0B0F17');
}
function toggleTheme(){
  const light=!isLight();
  if(light)document.documentElement.setAttribute('data-theme','light');else document.documentElement.removeAttribute('data-theme');
  try{localStorage.setItem(THEME_KEY,light?'light':'dark')}catch(e){}
  themeUI();
  /* Chart.js bakes colours in when a chart is created, so rebuild the charts in the new theme */
  try{
    if(chart){chart.destroy();chart=null}
    if(bCh){bCh.destroy();bCh=null}
    if(mCh){mCh.destroy();mCh=null}
    if(S&&S.workouts)renderAll();
  }catch(e){}
}
themeUI();

/* ---------- First-time user onboarding tour ---------- */
const TOUR_KEY='nextlevel_tour_done';
const TOUR=[
 {e:'🏠',t:'Your Overview',d:'The Home tab shows your week at a glance: total volume, sets, reps, your best estimated 1RM and which muscle groups you have trained the most.',tab:'dash'},
 {e:'🏋️',t:'Workout Logger',d:'Open Train to add exercises and record every set with weight and reps. Use the built-in rest timer between sets. When cloud sync is configured, your entries sync to your account when you are online.',tab:'log'},
 {e:'🥗',t:'Fuel & Nutrition',d:'Pick your goal in the Fuel tab to get daily calorie and macro targets. Log your meals and track your water intake to stay on plan.',tab:'nut'},
 {e:'🧠',t:'Recovery Assistant',d:'The Recovery tab shows a training-readiness estimate based on recent training and offers general tips. Treat it as guidance, not medical advice.',tab:'ai'},
 {e:'🏆',t:'Badges & PRs',d:'Unlock badges as you stay consistent, track your personal records, and export a weekly or monthly share card as an image or PDF.',tab:'awd'}
];
let tourI=0;
function tourDone(){try{return localStorage.getItem(TOUR_KEY)==='true'}catch(e){return false}}
function tourRender(){
  const st=TOUR[tourI],n=TOUR.length;
  $('#tourStep').textContent='Step '+(tourI+1)+' of '+n;
  $('#tourBar').style.width=((tourI+1)/n*100)+'%';
  $('#tourEmo').textContent=st.e;$('#tourTitle').textContent=st.t;$('#tourDesc').textContent=st.d;
  const b=$('#tourBody');b.style.animation='none';void b.offsetWidth;b.style.animation='';
  $('#tourDots').innerHTML=TOUR.map((_,i)=>'<b class="'+(i===tourI?'on':'')+'"></b>').join('');
  $('#tourBack').style.visibility=tourI===0?'hidden':'visible';
  $('#tourNext').textContent=tourI===n-1?'Get Started! 🚀':'Next';
  try{go(st.tab)}catch(e){} /* show the matching tab behind the guide */
}
function tourGo(d){
  if(d>0&&tourI===TOUR.length-1)return endTour();
  tourI=Math.max(0,Math.min(TOUR.length-1,tourI+d));tourRender();
}
function endTour(){
  try{localStorage.setItem(TOUR_KEY,'true')}catch(e){}
  $('#tour').classList.remove('show');
  document.removeEventListener('keydown',tourKeys);
  if(!document.querySelector('#auth')||getComputedStyle($('#auth')).display==='none')document.body.style.overflow='';
  try{go('dash')}catch(e){}
}
function tourKeys(e){
  if(e.key==='Escape')endTour();
  else if(e.key==='ArrowRight')tourGo(1);
  else if(e.key==='ArrowLeft'&&tourI>0)tourGo(-1);
}
function showTour(){
  tourI=0;tourRender();
  $('#tour').classList.add('show');document.body.style.overflow='hidden';
  document.addEventListener('keydown',tourKeys);
}
/* wait 1s after load; if the sign-in or profile screen is open, wait until it is closed */
function tourTry(){
  if(tourDone())return;
  const open=id=>{const el=document.getElementById(id);return el&&getComputedStyle(el).display!=='none'};
  if(open('auth')||open('onb'))return setTimeout(tourTry,1000);
  showTour();
}
if(!tourDone())window.addEventListener('load',()=>setTimeout(tourTry,1000));

/* ---------- Live internet connection indicator ---------- */
(function(){
  const bar=document.getElementById('netbar'),txt=document.getElementById('netTxt');
  let online=true,hideT=null,busy=false;
  function show(ok){
    clearTimeout(hideT);
    bar.classList.toggle('ok',ok);
    txt.textContent=ok?'Back online':'Not connected';
    bar.classList.add('show');
    if(ok)hideT=setTimeout(()=>bar.classList.remove('show'),2500);
  }
  function set(v){
    if(v===online)return;
    online=v;show(v);
    if(v&&typeof flushSync==='function'){try{flushSync()}catch(e){}}
  }
  /* navigator.onLine can say true on wifi with no internet, so confirm with a tiny real request.
     Several hosts are tried at the same time and ONE success = online, so a single blocked host never shows a false "Not connected". */
  const PINGS=[
    'https://cdn.jsdelivr.net/npm/chart.js@4.4.1/package.json', /* already used by this app */
    'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js',
    'https://www.gstatic.com/generate_204',
    'https://www.cloudflare.com/cdn-cgi/trace'
  ];
  function probe(u){
    return new Promise((res,rej)=>{
      const c=new AbortController(),t=setTimeout(()=>{c.abort();rej(new Error('timeout'))},6000);
      fetch(u+(u.includes('?')?'&':'?')+'_='+Date.now(),{method:'GET',mode:'no-cors',cache:'no-store',signal:c.signal})
        .then(()=>{clearTimeout(t);res(true)},e=>{clearTimeout(t);rej(e)});
    });
  }
  function anyOk(list){ /* Promise.any fallback for older browsers */
    return new Promise(res=>{let n=list.length;list.forEach(p=>p.then(()=>res(true),()=>{if(--n===0)res(false)}))});
  }
  async function ping(){
    if(busy)return;busy=true;
    if(navigator.onLine===false){busy=false;return set(false)}
    const ok=await anyOk(PINGS.map(probe));
    set(ok);busy=false;
  }
  window.addEventListener('offline',()=>set(false));
  window.addEventListener('online',ping);
  document.addEventListener('visibilitychange',()=>{if(!document.hidden)ping()});
  setInterval(()=>{if(!document.hidden)ping()},15000);
  if(navigator.onLine===false){online=true;set(false)}else ping();
})();

window.addEventListener('load',renderDash);
/* Swipe left / right (touch), drag with mouse, or press the Left / Right arrow keys to move between tabs (Home > Log > Timer > ...) */
(function(){
 let sx=0,sy=0,st=0,ok=false;
 const open=id=>{const e=document.getElementById(id);return !!e&&getComputedStyle(e).display!=='none'};
 const busy=()=>open('auth')||open('onb')||open('tour')||!!document.querySelector('#modal.show');
 const blocked=el=>{
  if(!el||!el.closest)return true;
  if(el.closest('input,select,textarea,nav,canvas,.swp,#auth,#onb,#tour,#modal.show'))return true;
  for(let n=el;n&&n!==document.body;n=n.parentElement){const o=getComputedStyle(n).overflowX;if((o==='auto'||o==='scroll')&&n.scrollWidth>n.clientWidth+4)return true}
  return false};
 const step=d=>{
  const cur=(document.querySelector('.tab.act')||{}).id||'',i=NAV.findIndex(n=>'t-'+n[0]===cur),j=i+d;
  if(i<0||j<0||j>=NAV.length)return;
  go(NAV[j][0])};
 const begin=(x,y,el)=>{sx=x;sy=y;st=Date.now();ok=!busy()&&!blocked(el)};
 const finish=(x,y)=>{
  if(!ok)return;ok=false;
  const dx=x-sx,dy=y-sy;
  if(Math.abs(dx)<70||Math.abs(dx)<Math.abs(dy)*1.6||Date.now()-st>700)return;
  step(dx<0?1:-1)};
 /* phone / tablet */
 document.addEventListener('touchstart',e=>{if(e.touches.length!==1){ok=false;return}const t=e.touches[0];begin(t.clientX,t.clientY,e.target)},{passive:true});
 document.addEventListener('touchend',e=>{const t=e.changedTouches[0];finish(t.clientX,t.clientY)},{passive:true});
 document.addEventListener('touchcancel',()=>{ok=false},{passive:true});
 /* laptop: click and drag sideways */
 document.addEventListener('mousedown',e=>{if(e.button===0)begin(e.clientX,e.clientY,e.target)});
 document.addEventListener('mouseup',e=>finish(e.clientX,e.clientY));
 /* laptop: Left / Right arrow keys */
 document.addEventListener('keydown',e=>{
  if(e.key!=='ArrowLeft'&&e.key!=='ArrowRight')return;
  if(e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||busy())return;
  const t=e.target;if(t&&t.closest&&t.closest('input,select,textarea,[contenteditable]'))return;
  step(e.key==='ArrowRight'?1:-1)});
})();
    function goToFuelAndOrder() {
  // 1. Switch to the Fuel tab (tab key is 'nut')
  go('nut');

  // 2. Smooth scroll to the Order Meal Plan card
  setTimeout(() => {
    const sec = document.getElementById('orderCard');
    if (sec) {
      sec.scrollIntoView({ behavior: 'smooth', block: 'center' });
      sec.classList.add('ring-2', 'ring-emerald-400');
      setTimeout(() => sec.classList.remove('ring-2', 'ring-emerald-400'), 2000);
    }
  }, 400);
}

window.addEventListener('online',()=>{if(supabaseClient&&SES){cloudSyncWarningShown=false;retryCloudSync()}});

/* ---------- Handlers that used to be inline attribute code (see handlers.js) ---------- */
function acctBtn(){if(SES)openProfileMenu();else showAuth('in')}
/* ---------- Profile menu screen (opened from the header profile button) ---------- */
function openProfileMenu(){const m=$('#pmenu');if(!m)return showProfile();const u=getUser()||{};let mail=u.email||'';try{if(!mail&&typeof SES==='object'&&SES&&SES.user)mail=SES.user.email||''}catch(e){}
 $('#pmName').textContent=(u.name||'Athlete').trim();$('#pmMail').textContent=mail;m.classList.add('show');m.scrollTop=0;document.body.style.overflow='hidden';
 try{if(!(history.state&&history.state.pm))history.pushState({pm:1},'')}catch(e){}}
function closeProfileMenu(fromPop){const m=$('#pmenu');if(!m||!m.classList.contains('show'))return;m.classList.remove('show');document.body.style.overflow='';
 if(!fromPop){try{if(history.state&&history.state.pm)history.back()}catch(e){}}}
function pmGo(k){closeProfileMenu();
 if(k==='profile')return showProfile();
 if(k==='settings'){go('about');setTimeout(()=>{const e=$('#lockCard');if(e)e.scrollIntoView({behavior:'smooth',block:'center'})},350);return}
 if(k==='privacy'){go('about');setTimeout(()=>{const e=$('#privacyCard');if(e)e.scrollIntoView({behavior:'smooth',block:'center'})},350);return}
 if(k==='logout')return logout();
 toast((k==='wishlist'?'Wishlist':'Premium')+' is coming soon')}
window.addEventListener('popstate',()=>closeProfileMenu(true));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){const m=$('#pmenu');if(m&&m.classList.contains('show'))closeProfileMenu()}});
function clearHisFilter(){$('#hDate').value='';$('#hMon').value='';renderHis()}
function closeOnb(){$('#onb').style.display='none'}
function pickRestore(){$('#restoreFile').click()}
function toggleCL(){showCL=!showCL;fillSelects()}
function pickPlan(i){$('#routineSel').value='u:'+i;loadRoutine();renderPlanList()}
function closeModal(){$('#modal').classList.remove('show')}
function setBm(k){bm=k;renderBody()}
function moreBackdrop(ev,el){if(ev.target===el)closeMoreMenu()}
function selfClose(ev,el){if(ev.target===el)el.classList.remove('show')}
function addExSel(){addEx($('#exSel').value)}
function woKey(ev,d){if(ev.key==='Enter')showWo(d)}

/* ---------- Privacy lock card (logic lives in gate.js) ---------- */
function lockUI(){const L=window.NLLock,card=$('#lockCard');if(!card)return;
 if(!L||!L.supported){card.querySelector('#lockOff').style.display='none';$('#lockOn').style.display='none';$('#lockMsg').textContent='The privacy lock needs a secure (https) connection and a modern browser.';return}
 const on=L.enabled();$('#lockOff').style.display=on?'none':'';$('#lockOn').style.display=on?'':'none'}
async function lockEnable(){const L=window.NLLock,m=$('#lockMsg'),a=$('#lkP1').value,b=$('#lkP2').value;m.style.color='var(--mut)';
 if(a.length<8){m.style.color='#FF6B6B';return void(m.textContent='Use at least 8 characters.')}
 if(a!==b){m.style.color='#FF6B6B';return void(m.textContent='The two passphrases do not match.')}
 m.textContent='Encrypting…';try{await L.enable(a);$('#lkP1').value='';$('#lkP2').value='';m.textContent='Privacy lock is on. You will be asked for the passphrase next time the app opens.';toast('Privacy lock on')}catch(e){m.style.color='#FF6B6B';m.textContent=e.message||'Could not turn the lock on.'}lockUI()}
async function lockDisable(){const L=window.NLLock,m=$('#lockMsg');m.style.color='var(--mut)';
 try{await L.disable($('#lkCur').value);$('#lkCur').value='';m.textContent='Privacy lock is off.';toast('Privacy lock off')}catch(e){m.style.color='#FF6B6B';m.textContent=e.message||'Could not turn the lock off.'}lockUI()}
function NLLockNow(){window.NLLock.lockNow()}
lockUI();
