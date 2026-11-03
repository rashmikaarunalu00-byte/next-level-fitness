(function(){
  const cfg=window.NL_SUPABASE_CONFIG||{};
  const url=String(cfg.url||'').trim(), key=String(cfg.anonKey||cfg.publishableKey||'').trim();
  const valid=url.startsWith('https://')&&/\.supabase\.co\/?$/.test(url)&&key&&!/YOUR_|REPLACE_ME|PASTE_/i.test(key);
  window.NL_SUPABASE_CONFIGURED=!!(valid&&window.supabase&&typeof window.supabase.createClient==='function');
  window.NL_SUPABASE_CLIENT=window.NL_SUPABASE_CONFIGURED?window.supabase.createClient(url,key,{
    auth:{storageKey:'nl-fit-auth',persistSession:true,autoRefreshToken:true,detectSessionInUrl:true}
  }):null;
  window.NL_CACHED_AUTH_USER=null;
  if(window.NL_SUPABASE_CONFIGURED){
    try{const x=JSON.parse(localStorage.getItem('nl-fit-auth')||'null');window.NL_CACHED_AUTH_USER=(x&&(x.user||(x.currentSession&&x.currentSession.user)))||null;}catch(e){}
  }
})();
