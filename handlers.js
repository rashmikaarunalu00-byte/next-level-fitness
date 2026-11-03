/* Safe replacement for inline on* attributes (needed so the Content-Security-Policy can drop 'unsafe-inline').
   Markup uses data-onclick / data-onchange / data-oninput / data-onkeydown / data-onsubmit with a tiny, strict grammar:
     statements separated by ';' - each one is  functionName(args)  |  return false  |  event.stopPropagation()  |  event.preventDefault()
     args: 'string', number, true, false, null, this, event, this.value, this.checked, event.key, event.target
   Only app-defined global functions can be called (native functions such as fetch/eval/alert are refused), and nothing is ever
   passed to eval/new Function, so an injected attribute cannot run arbitrary code. */
(function(){
  'use strict';
  const EVENTS=['click','change','input','keydown','submit'];
  function splitTop(str,sep){const out=[];let cur='',q=null;for(let i=0;i<str.length;i++){const c=str[i];
    if(q){cur+=c;if(c==='\\'){cur+=str[++i]||''}else if(c===q)q=null;continue}
    if(c==="'"||c==='"'){q=c;cur+=c;continue}
    if(c===sep){out.push(cur);cur='';continue}
    cur+=c}out.push(cur);return out}
  function unquote(s){return s.slice(1,-1).replace(/\\(.)/g,'$1')}
  function arg(a,el,ev){a=a.trim();
    if(/^'(?:[^'\\]|\\.)*'$/.test(a)||/^"(?:[^"\\]|\\.)*"$/.test(a))return unquote(a);
    if(/^-?\d+(\.\d+)?$/.test(a))return Number(a);
    switch(a){case'true':return true;case'false':return false;case'null':return null;case'this':return el;case'event':return ev;
      case'this.value':return el.value;case'this.checked':return el.checked;case'event.key':return ev.key;case'event.target':return ev.target}
    throw new Error('unsupported argument: '+a)}
  function isAppFn(f){return typeof f==='function'&&!/\{\s*\[native code\]\s*\}\s*$/.test(Function.prototype.toString.call(f))}
  function run(code,el,ev){let stopped=false;
    for(const raw of splitTop(code,';')){const st=raw.trim();if(!st)continue;
      if(st==='return false'){ev.preventDefault();continue}
      if(st==='event.stopPropagation()'){ev.stopPropagation();stopped=true;continue}
      if(st==='event.preventDefault()'){ev.preventDefault();continue}
      const m=/^([A-Za-z_$][\w$]*)\(([\s\S]*)\)$/.exec(st);
      if(!m)throw new Error('unsupported handler: '+st);
      const fn=window[m[1]];
      if(!isAppFn(fn))throw new Error('handler is not an app function: '+m[1]);
      const args=m[2].trim()?splitTop(m[2],',').map(a=>arg(a,el,ev)):[];
      fn.apply(window,args)}
    return stopped}
  EVENTS.forEach(type=>{const attr='data-on'+type;
    document.addEventListener(type,ev=>{
      for(let el=ev.target instanceof Element?ev.target:null;el;el=el.parentElement){
        const code=el.getAttribute(attr);if(code==null)continue;
        let stopped=false;try{stopped=run(code,el,ev)}catch(e){console.error('[handlers]',e.message)}
        if(stopped)break}
    })});
})();
