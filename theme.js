try{var _t=localStorage.getItem('nl_theme');if(_t==='light'){document.documentElement.setAttribute('data-theme','light');document.querySelector('meta[name=theme-color]').setAttribute('content','#EEF2F8')}}catch(e){}

/* Login gate: hide the app shell until app.js has confirmed a signed-in user. */
document.documentElement.classList.add("nl-locked");
