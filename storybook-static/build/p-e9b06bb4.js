let t,e,n,l=0,o=!1,s=!1,r=!1,i=!1;const c="undefined"!=typeof window?window:{},a=c.document||{head:{}},f={t:0,l:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,e,n,l)=>t.addEventListener(e,n,l),rel:(t,e,n,l)=>t.removeEventListener(e,n,l)},u=(()=>!!a.head.attachShadow)(),p=(()=>{try{return new CSSStyleSheet,!0}catch(t){}return!1})(),d=new WeakMap,m=t=>d.get(t),$=(t,e)=>d.set(e.o=t,e),w=(t,e)=>e in t,h=t=>console.error(t),y=new Map,b=new Map,_=[],v=[],g=[],j=(t,e)=>n=>{t.push(n),o||(o=!0,e&&4&f.t?k(S):f.raf(S))},R=(t,e)=>{let n=0,l=0;for(;n<t.length&&(l=performance.now())<e;)try{t[n++](l)}catch(o){h(o)}n===t.length?t.length=0:0!==n&&t.splice(0,n)},S=()=>{l++,(t=>{for(let n=0;n<t.length;n++)try{t[n](performance.now())}catch(e){h(e)}t.length=0})(_);const t=2==(6&f.t)?performance.now()+10*Math.ceil(l*(1/22)):1/0;R(v,t),R(g,t),v.length>0&&(g.push(...v),v.length=0),(o=_.length+v.length+g.length>0)?f.raf(S):l=0},k=t=>Promise.resolve().then(t),M=j(v,!0),U={},O=t=>"object"==(t=typeof t)||"function"===t,L=()=>c.CSS&&c.CSS.supports&&c.CSS.supports("color","var(--c)")?Promise.resolve():__sc_import_blip_ds("./p-d8631f0b.js").then(()=>{f.s=c.__stencil_cssshim}),P=async()=>{f.s=c.__stencil_cssshim;const t=new RegExp("/blip-ds(\\.esm)?\\.js($|\\?|#)"),e=Array.from(a.querySelectorAll("script")).find(e=>t.test(e.src)||"blip-ds"===e.getAttribute("data-stencil-namespace")),n=e["data-opts"];{const t=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,c.location.href));return x(t.href),window.customElements||await __sc_import_blip_ds("./p-3b66a627.js"),Object.assign(Object.assign({},n),{resourcesUrl:t.href})}},x=t=>{const e=(()=>`__sc_import_${"blip-ds".replace(/\s|-/g,"_")}`)();try{c[e]=new Function("w",`return import(w);//${Math.random()}`)}catch(n){const l=new Map;c[e]=n=>{const o=new URL(n,t).href;let s=l.get(o);if(!s){const t=a.createElement("script");t.type="module",t.src=URL.createObjectURL(new Blob([`import * as m from '${o}'; window.${e}.m = m;`],{type:"application/javascript"})),s=new Promise(n=>{t.onload=()=>{n(c[e].m),t.remove()}}),l.set(o,s),a.head.appendChild(t)}return s}}},C=new WeakMap,E=t=>"sc-"+t,T=(t,e,...n)=>{let l=null,o=null,s=!1,r=!1,i=[];const c=e=>{for(let n=0;n<e.length;n++)l=e[n],Array.isArray(l)?c(l):null!=l&&"boolean"!=typeof l&&((s="function"!=typeof t&&!O(l))&&(l=String(l)),s&&r?i[i.length-1].i+=l:i.push(s?A(null,l):l),r=s)};if(c(n),e){e.name&&(o=e.name);{const t=e.className||e.class;t&&(e.class="object"!=typeof t?t:Object.keys(t).filter(e=>t[e]).join(" "))}}if("function"==typeof t)return t(e,i,H);const a=A(t,null);return a.u=e,i.length>0&&(a.p=i),a.$=o,a},A=(t,e)=>({t:0,h:t,i:e,_:null,p:null,u:null,$:null}),F={},H={forEach:(t,e)=>t.map(N).forEach(e),map:(t,e)=>t.map(N).map(e).map(W)},N=t=>({vattrs:t.u,vchildren:t.p,vkey:t.v,vname:t.$,vtag:t.h,vtext:t.i}),W=t=>{const e=A(t.vtag,t.vtext);return e.u=t.vattrs,e.p=t.vchildren,e.v=t.vkey,e.$=t.vname,e},q=(t,e,n,l,o,s)=>{if(n===l)return;let r=w(t,e),i=e.toLowerCase();if("class"===e){const e=t.classList,o=V(n),s=V(l);e.remove(...o.filter(t=>t&&!s.includes(t))),e.add(...s.filter(t=>t&&!o.includes(t)))}else if(r||"o"!==e[0]||"n"!==e[1]){const i=O(l);if((r||i&&null!==l)&&!o)try{if(t.tagName.includes("-"))t[e]=l;else{let o=null==l?"":l;"list"===e?r=!1:null!=n&&t[e]==o||(t[e]=o)}}catch(a){}null==l||!1===l?t.removeAttribute(e):(!r||4&s||o)&&!i&&t.setAttribute(e,l=!0===l?"":l)}else e="-"===e[2]?e.slice(3):w(c,i)?i.slice(2):i[2]+e.slice(3),n&&f.rel(t,e,n,!1),l&&f.ael(t,e,l,!1)},B=/\s/,V=t=>t?t.split(B):[],z=(t,e,n,l)=>{const o=11===e._.nodeType&&e._.host?e._.host:e._,s=t&&t.u||U,r=e.u||U;for(l in s)l in r||q(o,l,s[l],void 0,n,e.t);for(l in r)q(o,l,s[l],r[l],n,e.t)},D=(l,o,r,c)=>{let f,u,p,d=o.p[r],m=0;if(s||(i=!0,"slot"===d.h&&(t&&c.classList.add(t+"-s"),d.t|=d.p?2:1)),null!==d.i)f=d._=a.createTextNode(d.i);else if(1&d.t)f=d._=a.createTextNode("");else if(f=d._=a.createElement(2&d.t?"slot-fb":d.h),z(null,d,!1),(t=>null!=t)(t)&&f["s-si"]!==t&&f.classList.add(f["s-si"]=t),d.p)for(m=0;m<d.p.length;++m)(u=D(l,d,m,f))&&f.appendChild(u);return f["s-hn"]=n,3&d.t&&(f["s-sr"]=!0,f["s-cr"]=e,f["s-sn"]=d.$||"",(p=l&&l.p&&l.p[r])&&p.h===d.h&&l._&&G(l._,!1)),f},G=(t,e)=>{f.t|=1;const l=t.childNodes;for(let o=l.length-1;o>=0;o--){const t=l[o];t["s-hn"]!==n&&t["s-ol"]&&(X(t).insertBefore(t,Q(t)),t["s-ol"].remove(),t["s-ol"]=void 0,i=!0),e&&G(t,e)}f.t&=-2},I=(t,e,l,o,s,r)=>{let i,c=t["s-cr"]&&t["s-cr"].parentNode||t;for(c.shadowRoot&&c.tagName===n&&(c=c.shadowRoot);s<=r;++s)o[s]&&(i=D(null,l,s,t))&&(o[s]._=i,c.insertBefore(i,Q(e)))},J=(t,e,n,l,o)=>{for(;e<=n;++e)(l=t[e])&&(r=!0,(o=l._)["s-ol"]?o["s-ol"].remove():G(o,!0),o.remove())},K=(t,e)=>t.h===e.h&&("slot"!==t.h||t.$===e.$),Q=t=>t&&t["s-ol"]||t,X=t=>(t["s-ol"]?t["s-ol"]:t).parentNode,Y=(t,e)=>{const n=e._=t._,l=t.p,o=e.p;let s;null===e.i?("slot"===e.h||z(t,e,!1),null!==l&&null!==o?((t,e,n,l)=>{let o,s=0,r=0,i=e.length-1,c=e[0],a=e[i],f=l.length-1,u=l[0],p=l[f];for(;s<=i&&r<=f;)null==c?c=e[++s]:null==a?a=e[--i]:null==u?u=l[++r]:null==p?p=l[--f]:K(c,u)?(Y(c,u),c=e[++s],u=l[++r]):K(a,p)?(Y(a,p),a=e[--i],p=l[--f]):K(c,p)?("slot"!==c.h&&"slot"!==p.h||G(c._.parentNode,!1),Y(c,p),t.insertBefore(c._,a._.nextSibling),c=e[++s],p=l[--f]):K(a,u)?("slot"!==c.h&&"slot"!==p.h||G(a._.parentNode,!1),Y(a,u),t.insertBefore(a._,c._),a=e[--i],u=l[++r]):(o=D(e&&e[r],n,r,t),u=l[++r],o&&X(c._).insertBefore(o,Q(c._)));s>i?I(t,null==l[f+1]?null:l[f+1]._,n,l,r,f):r>f&&J(e,s,i)})(n,l,e,o):null!==o?(null!==t.i&&(n.textContent=""),I(n,null,e,o,0,o.length-1)):null!==l&&J(l,0,l.length-1)):(s=n["s-cr"])?s.parentNode.textContent=e.i:t.i!==e.i&&(n.data=e.i)},Z=t=>{let e,n,l,o,s,r,i=t.childNodes;for(n=0,l=i.length;n<l;n++)if(1===(e=i[n]).nodeType){if(e["s-sr"])for(s=e["s-sn"],e.hidden=!1,o=0;o<l;o++)if(i[o]["s-hn"]!==e["s-hn"])if(r=i[o].nodeType,""!==s){if(1===r&&s===i[o].getAttribute("slot")){e.hidden=!0;break}}else if(1===r||3===r&&""!==i[o].textContent.trim()){e.hidden=!0;break}Z(e)}},tt=[],et=t=>{let e,n,l,o,s=t.childNodes,i=s.length,c=0,a=0,f=0;for(i=s.length;c<i;c++){if((e=s[c])["s-sr"]&&(n=e["s-cr"]))for(o=e["s-sn"],a=(l=n.parentNode.childNodes).length-1;a>=0;a--)(n=l[a])["s-cn"]||n["s-nr"]||n["s-hn"]===e["s-hn"]||((3===(f=n.nodeType)||8===f)&&""===o||1===f&&null===n.getAttribute("slot")&&""===o||1===f&&n.getAttribute("slot")===o)&&(tt.some(t=>t.g===n)||(r=!0,n["s-sn"]=o,tt.push({j:e,g:n})));1===e.nodeType&&et(e)}},nt=(t,e)=>{e&&!t.R&&e["s-p"].push(new Promise(e=>t.R=e))},lt=(t,e,n,l)=>{if(e.t|=16,4&e.t)return void(e.t|=512);const o=e.o,s=()=>ot(t,e,n,o,l);return nt(e,e.S),ct(void 0,()=>M(s))},ot=(l,o,c,p,d)=>{const m=l["s-rc"];d&&((t,e)=>{const n=((t,e)=>{let n=E(e.k),l=b.get(n);if(t=11===t.nodeType?t:a,l)if("string"==typeof l){let e,o=C.get(t=t.head||t);o||C.set(t,o=new Set),o.has(n)||((e=a.createElement("style")).innerHTML=l,t.insertBefore(e,t.querySelector("link")),o&&o.add(n))}else t.adoptedStyleSheets.includes(l)||(t.adoptedStyleSheets=[...t.adoptedStyleSheets,l]);return n})(u&&t.shadowRoot?t.shadowRoot:t.getRootNode(),e);10&e.t&&(t["s-sc"]=n,t.classList.add(n+"-h"))})(l,c),((l,o,c,p)=>{n=l.tagName;const d=o.M||A(null,null),m=(t=>t&&t.h===F)(p)?p:T(null,null,p);if(c.U&&(m.u=m.u||{},c.U.forEach(([t,e])=>m.u[e]=l[t])),m.h=null,m.t|=4,o.M=m,m._=d._=l.shadowRoot||l,t=l["s-sc"],e=l["s-cr"],s=u&&0!=(1&c.t),r=!1,Y(d,m),i){et(m._);for(let t=0;t<tt.length;t++){const e=tt[t];if(!e.g["s-ol"]){const t=a.createTextNode("");t["s-nr"]=e.g,e.g.parentNode.insertBefore(e.g["s-ol"]=t,e.g)}}f.t|=1;for(let t=0;t<tt.length;t++){const e=tt[t],n=e.j.parentNode;let l=e.j.nextSibling,o=e.g["s-ol"];for(;o=o.previousSibling;){let t=o["s-nr"];if(t&&t["s-sn"]===e.g["s-sn"]&&n===t.parentNode&&(!(t=t.nextSibling)||!t["s-nr"])){l=t;break}}(!l&&n!==e.g.parentNode||e.g.nextSibling!==l)&&e.g!==l&&n.insertBefore(e.g,l)}f.t&=-2}r&&Z(m._),tt.length=0})(l,o,c,st(p)),o.t&=-17,o.t|=2,m&&(m.forEach(t=>t()),l["s-rc"]=void 0);{const t=l["s-p"],e=()=>rt(l,o,c);0===t.length?e():(Promise.all(t).then(e),o.t|=4,t.length=0)}},st=t=>{try{t=t.render()}catch(e){h(e)}return t},rt=(t,e,n)=>{const l=e.S;64&e.t||(e.t|=64,t.classList.add("hydrated"),e.O(t),l||it()),e.R&&(e.R(),e.R=void 0),512&e.t&&k(()=>lt(t,e,n,!1)),e.t&=-517},it=()=>{a.documentElement.classList.add("hydrated"),f.t|=2},ct=(t,e)=>t&&t.then?t.then(e):e(),at=(t,e,n)=>{if(e.L){t.watchers&&(e.P=t.watchers);const l=Object.entries(e.L),o=t.prototype;if(l.forEach(([t,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(o,t,{get(){return((t,e)=>m(t).C.get(e))(this,t)},set(n){((t,e,n,l)=>{const o=m(this),s=o.T,r=o.C.get(e),i=o.t,c=o.o;if(!((n=((t,e)=>null==t||O(t)?t:4&e?"false"!==t&&(""===t||!!t):1&e?String(t):t)(n,l.L[e][0]))===r||8&i&&void 0!==r)&&(o.C.set(e,n),c)){if(l.P&&128&i){const t=l.P[e];t&&t.forEach(t=>{try{c[t](n,r,e)}catch(l){h(l)}})}2==(18&i)&&lt(s,o,l,!1)}})(0,t,n,e)},configurable:!0,enumerable:!0})}),1&n){const n=new Map;o.attributeChangedCallback=function(t,e,l){f.jmp(()=>{const e=n.get(t);this[e]=(null!==l||"boolean"!=typeof this[e])&&l})},t.observedAttributes=l.filter(([t,e])=>15&e[0]).map(([t,l])=>{const o=l[1]||t;return n.set(o,t),512&l[0]&&e.U.push([t,o]),o})}}return t},ft=t=>{(t=>{if(t&&t.connectedCallback)try{t.connectedCallback(void 0)}catch(e){h(e)}})(t)},ut=(t,e={})=>{const n=[],l=e.exclude||[],o=a.head,s=c.customElements,r=o.querySelector("meta[charset]"),i=a.createElement("style"),$=[];let w,_=!0;Object.assign(f,e),f.l=new URL(e.resourcesUrl||"./",a.baseURI).href,e.syncQueue&&(f.t|=4),t.forEach(t=>t[1].forEach(e=>{const o={t:e[0],k:e[1],L:e[2],A:e[3]};o.L=e[2],o.U=[],o.P={},!u&&1&o.t&&(o.t|=8);const r=o.k,i=class extends HTMLElement{constructor(t){super(t),(t=>{const e={t:0,T:t,C:new Map};e.F=new Promise(t=>e.O=t),t["s-p"]=[],t["s-rc"]=[],d.set(t,e)})(t=this),1&o.t&&(u?t.attachShadow({mode:"open"}):"shadowRoot"in t||(t.shadowRoot=t))}connectedCallback(){w&&(clearTimeout(w),w=null),_?$.push(this):f.jmp(()=>((t,e)=>{if(0==(1&f.t)){const n=()=>{},l=m(t);if(!(1&l.t)){let n;l.t|=1,n||(4&e.t||8&e.t)&&(t=>{const e=t["s-cr"]=a.createComment("");e["s-cn"]=!0,t.insertBefore(e,t.firstChild)})(t);{let e=t;for(;e=e.parentNode||e.host;)if(e["s-p"]){nt(l,l.S=e);break}}e.L&&Object.entries(e.L).forEach(([e,[n]])=>{if(31&n&&t.hasOwnProperty(e)){const n=t[e];delete t[e],t[e]=n}}),k(()=>(async(t,e,n,l,o)=>{if(0==(32&e.t)){e.t|=32;{if((o=(t=>{const e=t.k.replace(/-/g,"_"),n=t.H,l=y.get(n);return l?l[e]:__sc_import_blip_ds(`./${n}.entry.js`).then(t=>(y.set(n,t),t[e]),h)})(n)).then){const t=()=>{};o=await o,t()}o.isProxied||(n.P=o.watchers,at(o,n,2),o.isProxied=!0);const t=()=>{};e.t|=8;try{new o(e)}catch(i){h(i)}e.t&=-9,e.t|=128,t(),ft(e.o)}const t=E(n.k);if(!b.has(t)&&o.style){const e=()=>{};let l=o.style;8&n.t&&(l=await __sc_import_blip_ds("./p-affe7c09.js").then(e=>e.scopeCss(l,t,!1))),((t,e,n)=>{let l=b.get(t);p&&n?(l=l||new CSSStyleSheet).replace(e):l=e,b.set(t,l)})(t,l,!!(1&n.t)),e()}}const s=e.S,r=()=>lt(t,e,n,!0);s&&s["s-rc"]?s["s-rc"].push(r):r()})(t,l,e))}ft(l.o),n()}})(this,o))}disconnectedCallback(){f.jmp(()=>void 0)}forceUpdate(){((t,e)=>{{const n=m(t);n.T.isConnected&&2==(18&n.t)&&lt(t,n,e,!1)}})(this,o)}componentOnReady(){return m(this).F}};o.H=t[0],l.includes(r)||s.get(r)||(n.push(r),s.define(r,at(i,o,1)))})),i.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",i.setAttribute("data-styles",""),o.insertBefore(i,r?r.nextSibling:o.firstChild),_=!1,$.length>0?$.forEach(t=>t.connectedCallback()):f.jmp(()=>w=setTimeout(it,30,"timeout"))},pt=t=>{const e=new URL(t,f.l);return e.origin!==c.location.origin?e.href:e.pathname};export{F as H,L as a,ut as b,pt as g,T as h,P as p,$ as r};