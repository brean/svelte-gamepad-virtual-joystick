import"./DsnmJJEf.js";import{Q as v2,I as D2,O as z3,F as W,aj as R3,J as r2,g as T,a1 as R2,L as O2,M as G2,N as Q2,P as t2,W as _3,ak as F2,ao as H2,R as a2,S as S2,D as B2,aG as U2,H as W2,aH as w2,as as _2,ag as z2,aI as V2,T as k2,V as K2,aJ as X2,aK as Y2,aL as n2,aM as x2,am as m2,aN as j2,ar as J2,aO as Z2,a3 as g2,t as o3,aP as $2,ap as t5,an as n5,au as f2,aQ as e5,aR as s5,aS as i5,aT as o5,aU as r5,aV as a5,aW as l5,K as L5,aX as d5,aY as g5,X as h5,v as Q5,aZ as w5,a_ as f5,a$ as c5,ac as M2,b0 as u5,Y as p5,b1 as D3,p as K3,j as r3,h as H,b as f3,c as Y3,f as Y,a as C,k as a3,d as S,i as q,r as I,e as x,s as v5,b2 as X3,n as k3,l as y2,u as O3}from"./Cvz79Lni.js";import{p,i as P,b as x3}from"./-KaJ0ttI.js";import{a as F5,s as b2,d as j3,o as A3,e as E3}from"./DwfRsjSU.js";import{g as _5}from"./CMchpZt4.js";function k5(e,t){return t}function x5(e,t,n){for(var s=e.items,i=[],o=t.length,g=0;g<o;g++)j2(t[g].e,i,!0);var Q=o>0&&i.length===0&&n!==null;if(Q){var f=n.parentNode;J2(f),f.append(n),s.clear(),l3(e,t[0].prev,t[o-1].next)}Z2(i,()=>{for(var c=0;c<o;c++){var d=t[c];Q||(s.delete(d.k),l3(e,d.prev,d.next)),x2(d.e,!Q)}})}function m5(e,t,n,s,i,o=null){var g=e,Q={flags:t,items:new Map,first:null};{var f=e;g=W?z3(R3(f)):f.appendChild(v2())}W&&r2();var c=null,d=!1,w=new Map,h=R2(()=>{var r=n();return z2(r)?r:r==null?[]:_2(r)}),L,a;function l(){M5(a,L,Q,w,g,i,t,s,n),o!==null&&(L.length===0?c?k2(c):c=a2(()=>o(g)):c!==null&&K2(c,()=>{c=null}))}D2(()=>{a??=g2,L=T(h);var r=L.length;if(d&&r===0)return;d=r===0;let u=!1;if(W){var y=O2(g)===G2;y!==(r===0)&&(g=Q2(),z3(g),t2(!1),u=!0)}if(W){for(var v=null,_,b=0;b<r;b++){if(_3.nodeType===F2&&_3.data===H2){g=_3,u=!0,t2(!1);break}var k=L[b],M=s(k,b);_=l2(_3,Q,v,null,k,M,b,i,t,n),Q.items.set(M,_),v=_}r>0&&z3(Q2())}if(W)r===0&&o&&(c=a2(()=>o(g)));else if(S2()){var O=new Set,A=B2;for(b=0;b<r;b+=1){k=L[b],M=s(k,b);var J=Q.items.get(M)??w.get(M);J?E2(J,k,b):(_=l2(null,Q,null,null,k,M,b,i,t,n,!0),w.set(M,_)),O.add(M)}for(const[N,K]of Q.items)O.has(N)||A.skipped_effects.add(K.e);A.add_callback(l)}else l();u&&t2(!0),T(h)}),W&&(g=_3)}function M5(e,t,n,s,i,o,g,Q,f){var c=t.length,d=n.items,w=n.first,h=w,L,a=null,l=[],r=[],u,y,v,_;for(_=0;_<c;_+=1){if(u=t[_],y=Q(u,_),v=d.get(y),v===void 0){var b=s.get(y);if(b!==void 0){s.delete(y),d.set(y,b);var k=a?a.next:h;l3(n,a,b),l3(n,b,k),e2(b,k,i),a=b}else{var M=h?h.e.nodes_start:i;a=l2(M,n,a,a===null?n.first:a.next,u,y,_,o,g,f)}d.set(y,a),l=[],r=[],h=a.next;continue}if(E2(v,u,_),(v.e.f&n2)!==0&&k2(v.e),v!==h){if(L!==void 0&&L.has(v)){if(l.length<r.length){var O=r[0],A;a=O.prev;var J=l[0],N=l[l.length-1];for(A=0;A<l.length;A+=1)e2(l[A],O,i);for(A=0;A<r.length;A+=1)L.delete(r[A]);l3(n,J.prev,N.next),l3(n,a,J),l3(n,N,O),h=O,a=N,_-=1,l=[],r=[]}else L.delete(v),e2(v,h,i),l3(n,v.prev,v.next),l3(n,v,a===null?n.first:a.next),l3(n,a,v),a=v;continue}for(l=[],r=[];h!==null&&h.k!==y;)(h.e.f&n2)===0&&(L??=new Set).add(h),r.push(h),h=h.next;if(h===null)continue;v=h}l.push(v),a=v,h=v.next}if(h!==null||L!==void 0){for(var K=L===void 0?[]:_2(L);h!==null;)(h.e.f&n2)===0&&K.push(h),h=h.next;var L3=K.length;if(L3>0){var c3=c===0?i:null;x5(n,K,c3)}}e.first=n.first&&n.first.e,e.last=a&&a.e;for(var d3 of s.values())x2(d3.e);s.clear()}function E2(e,t,n,s){U2(e.v,t),e.i=n}function l2(e,t,n,s,i,o,g,Q,f,c,d){var w=(f&X2)!==0,h=(f&Y2)===0,L=w?h?W2(i,!1,!1):w2(i):i,a=(f&V2)===0?g:w2(g),l={i:a,v:L,k:o,a:null,e:null,prev:n,next:s};try{if(e===null){var r=document.createDocumentFragment();r.append(e=v2())}return l.e=a2(()=>Q(e,L,a,c),W),l.e.prev=n&&n.e,l.e.next=s&&s.e,n===null?d||(t.first=l):(n.next=l,n.e.next=l.e),s!==null&&(s.prev=l,s.e.prev=l.e),l}finally{}}function e2(e,t,n){for(var s=e.next?e.next.e.nodes_start:n,i=t?t.e.nodes_start:n,o=e.e.nodes_start;o!==null&&o!==s;){var g=m2(o);i.before(o),o=g}}function l3(e,t,n){t===null?e.first=n:(t.next=n,t.e.next=n&&n.e),n!==null&&(n.prev=t,n.e.prev=t&&t.e)}function y5(e,t,n=!1,s=!1,i=!1){var o=e,g="";o3(()=>{var Q=g2;if(g===(g=t()??"")){W&&r2();return}if(Q.nodes_start!==null&&($2(Q.nodes_start,Q.nodes_end),Q.nodes_start=Q.nodes_end=null),g!==""){if(W){_3.data;for(var f=r2(),c=f;f!==null&&(f.nodeType!==F2||f.data!=="");)c=f,f=m2(f);if(f===null)throw t5(),n5;f2(_3,c),o=z3(f);return}var d=g+"";n?d=`<svg>${d}</svg>`:s&&(d=`<math>${d}</math>`);var w=e5(d);if((n||s)&&(w=R3(w)),f2(R3(w),w.lastChild),n||s)for(;R3(w);)o.before(R3(w));else o.before(w)}})}function A2(e){var t,n,s="";if(typeof e=="string"||typeof e=="number")s+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=A2(e[t]))&&(s&&(s+=" "),s+=n)}else for(n in e)e[n]&&(s&&(s+=" "),s+=n);return s}function b5(){for(var e,t,n=0,s="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=A2(e))&&(s&&(s+=" "),s+=t);return s}function p3(e){return typeof e=="object"?b5(e):e??""}function E5(e,t,n){var s=e==null?"":""+e;return t&&(s=s?s+" "+t:t),s===""?null:s}function c2(e,t=!1){var n=t?" !important;":";",s="";for(var i in e){var o=e[i];o!=null&&o!==""&&(s+=" "+i+": "+o+n)}return s}function s2(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function A5(e,t){if(t){var n="",s,i;if(Array.isArray(t)?(s=t[0],i=t[1]):s=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var o=!1,g=0,Q=!1,f=[];s&&f.push(...Object.keys(s).map(s2)),i&&f.push(...Object.keys(i).map(s2));var c=0,d=-1;const l=e.length;for(var w=0;w<l;w++){var h=e[w];if(Q?h==="/"&&e[w-1]==="*"&&(Q=!1):o?o===h&&(o=!1):h==="/"&&e[w+1]==="*"?Q=!0:h==='"'||h==="'"?o=h:h==="("?g++:h===")"&&g--,!Q&&o===!1&&g===0){if(h===":"&&d===-1)d=w;else if(h===";"||w===l-1){if(d!==-1){var L=s2(e.substring(c,d).trim());if(!f.includes(L)){h!==";"&&w++;var a=e.substring(c,w).trim();n+=" "+a+";"}}c=w+1,d=-1}}}}return s&&(n+=c2(s)),i&&(n+=c2(i,!0)),n=n.trim(),n===""?null:n}return e==null?null:String(e)}function X(e,t,n,s,i,o){var g=e.__className;if(W||g!==n||g===void 0){var Q=E5(n,s);(!W||Q!==e.getAttribute("class"))&&(Q==null?e.removeAttribute("class"):t?e.className=Q:e.setAttribute("class",Q)),e.__className=n}return o}function i2(e,t={},n,s){for(var i in n){var o=n[i];t[i]!==o&&(n[i]==null?e.style.removeProperty(i):e.style.setProperty(i,o,s))}}function j(e,t,n,s){var i=e.__style;if(W||i!==t){var o=A5(t,s);(!W||o!==e.getAttribute("style"))&&(o==null?e.removeAttribute("style"):e.style.cssText=o),e.__style=t}else s&&(Array.isArray(s)?(i2(e,n?.[0],s[0]),i2(e,n?.[1],s[1],"important")):i2(e,n,s));return s}const P5=Symbol("is custom element"),I5=Symbol("is html");function kt(e){if(W){var t=!1,n=()=>{if(!t){if(t=!0,e.hasAttribute("value")){var s=e.value;v3(e,"value",null),e.value=s}if(e.hasAttribute("checked")){var i=e.checked;v3(e,"checked",null),e.checked=i}}};e.__on_r=n,a5(n),l5()}}function v3(e,t,n,s){var i=q5(e);W&&(i[t]=e.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&e.nodeName==="LINK")||i[t]!==(i[t]=n)&&(t==="loading"&&(e[o5]=n),n==null?e.removeAttribute(t):typeof n!="string"&&C5(e).includes(t)?e[t]=n:e.setAttribute(t,n))}function q5(e){return e.__attributes??={[P5]:e.nodeName.includes("-"),[I5]:e.namespaceURI===s5}}var u2=new Map;function C5(e){var t=u2.get(e.nodeName);if(t)return t;u2.set(e.nodeName,t=[]);for(var n,s=e,i=Element.prototype;i!==s;){n=r5(s);for(var o in n)n[o].set&&t.push(o);s=i5(s)}return t}const T5=()=>performance.now(),w3={tick:e=>requestAnimationFrame(e),now:()=>T5(),tasks:new Set};function P2(){const e=w3.now();w3.tasks.forEach(t=>{t.c(e)||(w3.tasks.delete(t),t.f())}),w3.tasks.size!==0&&w3.tick(P2)}function N5(e){let t;return w3.tasks.size===0&&w3.tick(P2),{promise:new Promise(n=>{w3.tasks.add(t={c:e,f:n})}),abort(){w3.tasks.delete(t)}}}function W3(e,t){M2(()=>{e.dispatchEvent(new CustomEvent(t))})}function D5(e){if(e==="float")return"cssFloat";if(e==="offset")return"cssOffset";if(e.startsWith("--"))return e;const t=e.split("-");return t.length===1?t[0]:t[0]+t.slice(1).map(n=>n[0].toUpperCase()+n.slice(1)).join("")}function p2(e){const t={},n=e.split(";");for(const s of n){const[i,o]=s.split(":");if(!i||o===void 0)break;const g=D5(i.trim());t[g]=o.trim()}return t}const R5=e=>e;function m3(e,t,n,s){var i=(e&f5)!==0,o=(e&c5)!==0,g=i&&o,Q=(e&w5)!==0,f=g?"both":i?"in":"out",c,d=t.inert,w=t.style.overflow,h,L;function a(){return M2(()=>c??=n()(t,s?.()??{},{direction:f}))}var l={is_global:Q,in(){if(t.inert=d,!i){L?.abort(),L?.reset?.();return}o||h?.abort(),W3(t,"introstart"),h=L2(t,a(),L,1,()=>{W3(t,"introend"),h?.abort(),h=c=void 0,t.style.overflow=w})},out(v){if(!o){v?.(),c=void 0;return}t.inert=!0,W3(t,"outrostart"),L=L2(t,a(),h,0,()=>{W3(t,"outroend"),v?.()})},stop:()=>{h?.abort(),L?.abort()}},r=g2;if((r.transitions??=[]).push(l),i&&F5){var u=Q;if(!u){for(var y=r.parent;y&&(y.f&L5)!==0;)for(;(y=y.parent)&&(y.f&d5)===0;);u=!y||(y.f&g5)!==0}u&&h5(()=>{Q5(()=>l.in())})}}function L2(e,t,n,s,i){var o=s===1;if(u5(t)){var g,Q=!1;return p5(()=>{if(!Q){var r=t({direction:o?"in":"out"});g=L2(e,r,n,s,i)}}),{abort:()=>{Q=!0,g?.abort()},deactivate:()=>g.deactivate(),reset:()=>g.reset(),t:()=>g.t()}}if(n?.deactivate(),!t?.duration)return i(),{abort:D3,deactivate:D3,reset:D3,t:()=>s};const{delay:f=0,css:c,tick:d,easing:w=R5}=t;var h=[];if(o&&n===void 0&&(d&&d(0,1),c)){var L=p2(c(0,1));h.push(L,L)}var a=()=>1-s,l=e.animate(h,{duration:f,fill:"forwards"});return l.onfinish=()=>{l.cancel();var r=n?.t()??1-s;n?.abort();var u=s-r,y=t.duration*Math.abs(u),v=[];if(y>0){var _=!1;if(c)for(var b=Math.ceil(y/16.666666666666668),k=0;k<=b;k+=1){var M=r+u*w(k/b),O=p2(c(M,1-M));v.push(O),_||=O.overflow==="hidden"}_&&(e.style.overflow="hidden"),a=()=>{var A=l.currentTime;return r+u*w(A/y)},d&&N5(()=>{if(l.playState!=="running")return!1;var A=a();return d(A,1-A),!0})}l=e.animate(v,{duration:y,fill:"forwards"}),l.onfinish=()=>{a=()=>s,d?.(s,1-s),i()}},{abort:()=>{l&&(l.cancel(),l.effect=null,l.onfinish=D3)},deactivate:()=>{i=D3},reset:()=>{s===0&&d?.(1,0)},t:()=>a()}}class U{static DOWN=0;static RIGHT=1;static LEFT=2;static UP=3;static BUMPER_LEFT=4;static BUMPER_RIGHT=5;static TRIGGER_LEFT=6;static TRIGGER_RIGHT=7;static VIEW=8;static MENU=9;static AXIS_BUTTON_LEFT=10;static AXIS_BUTTON_RIGHT=11;static DPAD_UP=12;static DPAD_DOWN=13;static DPAD_LEFT=14;static DPAD_RIGHT=15;static HOME=16;static CROSS=0;static CIRCLE=1;static SQUARE=2;static TRIANGLE=3;static L1=4;static R1=5;static L2=6;static R2=7;static SHARE=8;static OPTIONS=9;static PS=16;static A=0;static B=1;static X=2;static Y=3;static LB=4;static RB=5;static TL=6;static TR=7;static BACK=8;static START=9;static XBOX=16}const O5=(e,t)=>Math.sqrt(e**2+t**2),G5=(e,t)=>Math.atan2(t,e),H5=(e,t)=>[e*Math.cos(t),e*Math.sin(t)],S5=(e,t)=>Math.min(Math.max(-t,e),t);function G3(e,t){return e.gamepad===-1||e.gamepad===t.index}function I2(e){const t=document.activeElement,n=Array.from(document.querySelectorAll('input, select, textarea, button, [tabindex]:not([tabindex="-1"])'));if(!t)return;let s=n.indexOf(t);for(let i=1;i<n.length;i++){let o=(s+i*e)%n.length;o<0&&(o=n.length-1,s=o);const g=n[o];if(!g.hasAttribute("disabled"))return g}}function B5(){const e=I2(-1);e&&e.focus()}function q2(){const e=I2(1);e&&e.focus()}class h2{focusElement;requiresFocus;input;disabled=!1;onpressedCallback;onholdCallback;onreleaseCallback;consumePress;constructor(t,n,s=!1,i,o,g,Q=!1){this.onpressedCallback=i,this.onholdCallback=o,this.onreleaseCallback=g,this.focusElement=n,this.input=t,this.requiresFocus=s,this.consumePress=Q}onpressed(){return this.disabled?!1:(this.onpressedCallback&&this.onpressedCallback(),this.consumePress)}onhold(){this.onholdCallback&&this.onholdCallback()}onrelease(){this.onreleaseCallback&&this.onreleaseCallback()}thisGamepadButton(t,n){return G3(this.input,t)}onbuttonpressed(t,n){return this.onpressed()}onbuttonrelease(t,n){this.onrelease()}onbuttonhold(t,n){this.onhold()}onupdate(t){}thisKey(t){return!1}onkeypressed(t){return this.thisKey(t)&&this.onpressed()}onkeyrelease(t){this.thisKey(t)&&this.onrelease()}onkeyhold(t){this.thisKey(t)&&this.onhold()}}const E=K3({components:{},activeComponents:[],showHints:!1,context:"default"}),d2=e=>{E.activeComponents.includes(e)||E.activeComponents.push(e)},H3=(e,t)=>{e.forEach(n=>{E.components[n]||(E.components[n]=[]),E.components[n].push(t)}),!t.requiresFocus&&e.includes("default")&&d2(t),t.focusElement&&t.requiresFocus&&(t.focusElement.addEventListener("focus",()=>{e.includes(E.context)&&d2(t)}),t.focusElement.addEventListener("blur",()=>{E.activeComponents.splice(E.activeComponents.indexOf(t),1)}))},S3=(e,t)=>{e.forEach(n=>{E.components[n]&&E.components[n].splice(E.components[n].indexOf(t),1)}),E.activeComponents.includes(t)&&E.activeComponents.slice(E.activeComponents.indexOf(t))},U5=e=>e;function M3(e,{delay:t=0,duration:n=400,easing:s=U5}={}){const i=+getComputedStyle(e).opacity;return{delay:t,duration:n,easing:s,css:o=>`opacity: ${o*i}`}}const W5=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path
         stroke="none"
         fill="#7db700"
         d="m 32,20 q 0,5 -3.525,8.475 Q 25,32 20,32 15.025,32 11.5,28.475 8,25 8,20 8,15.025 11.5,11.5 15.025,8 20,8 25,8 28.475,11.5 32,15.025 32,20 m -9,5 h 2 L 21,15 h -2 l -4,10 h 2 l 0.8,-2 h 4.4 L 23,25 M 20,17.5 21.4,21 H 18.6 L 20,17.5"
         id="path4"
         style="stroke-width:0.500001" />
    <path
       stroke="none"
       fill="#7c66e8"
       d="m 40,38 -1.4,1.4 4.6,4.6 -4.6,4.6 1.400001,1.4 4.6,-4.6 4.6,4.6 1.4,-1.4 -4.6,-4.6 4.6,-4.6 -1.4,-1.4 -4.6,4.6 -4.6,-4.6 M 56,44 q 0,5 -3.525,8.475 Q 48.999999,56 43.999999,56 39.024999,56 35.499998,52.475 32,49 32,44 q 0,-4.975 3.499998,-8.5 3.525001,-3.5 8.500001,-3.5 5,0 8.475001,3.5 Q 56,39.025 56,44"
       id="path14"
       style="stroke-width:0.5" />
  </g>
</svg>
`,z5=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
  <path
     stroke="none"
     fill="#ef4e29"
     d="m 32,20 q 0,5 -3.525,8.475001 -3.475,3.525 -8.475,3.525 -4.975,0 -8.5,-3.525 Q 8,25 8,20 8,15.025 11.5,11.5 15.025,8 20,8 25,8 28.475,11.5 32,15.025 32,20 m -9.5,-2 q 0,0.425 -0.275,0.7 H 22.2 Q 21.9,19 21.5,19 h -3 v -2 h 3 q 0.4,0 0.675,0.275 l 0.05,0.05 Q 22.5,17.6 22.5,18 m 2,4 q 0,-1.15 -0.75,-2 0.75,-0.85 0.75,-2 0,-1.225 -0.875,-2.1 L 23.6,15.875 Q 22.725,15 21.5,15 h -5 v 10 h 5 q 1.225,0 2.1,-0.875 L 23.625,24.1 Q 24.5,23.225 24.5,22 m -2,0 q 0,0.4 -0.275,0.675 l -0.05,0.05 Q 21.9,23 21.5,23 h -3 v -2 h 3 q 0.4,0 0.7,0.3 h 0.025 Q 22.5,21.575 22.5,22"
     id="path242"
     style="stroke-width:0.5" />
     <path
     stroke="none"
     fill="#ff6666"
     d="m 46.850002,41.175 q 1.15,1.15 1.15,2.825 0,1.674999 -1.15,2.849999 -1.175,1.15 -2.85,1.15 -1.65,0 -2.800001,-1.15 l -0.025,-0.025 q -1.175,-1.175 -1.175,-2.824999 0,-1.65 1.175,-2.825 h 0.025 Q 42.350002,40 44.000002,40 q 1.675,0 2.85,1.175 m 3.15,2.825 q 0,-2.5 -1.75,-4.25 -1.75,-1.75 -4.25,-1.75 -2.475001,0 -4.225001,1.75 -1.775,1.75 -1.775,4.25 0,2.499999 1.775,4.249999 1.75,1.75 4.225001,1.75 2.5,0 4.25,-1.75 1.75,-1.75 1.75,-4.249999 m 6,0 q 0,4.999999 -3.525,8.474999 -3.475,3.525 -8.475,3.525 -4.975001,0 -8.500002,-3.525 Q 32,48.999999 32,44 q 0,-4.975 3.5,-8.5 3.525001,-3.5 8.500002,-3.5 5,0 8.475,3.5 3.525,3.525 3.525,8.5"
     id="path254"
     style="stroke-width:0.5" />
  </g>
</svg>
`,V5=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path
     stroke="none"
     fill="#ff69f8"
     d="m 56,43.999999 q 0,4.999999 -3.525,8.474999 -3.475,3.525 -8.475,3.525 -4.975,0 -8.5,-3.525 Q 32,48.999998 32,43.999999 32,39.024999 35.5,35.5 39.025,32 44,32 49,32 52.475,35.5 56,39.024999 56,43.999999 m -18,-6 V 49.999998 H 50 V 37.999999 H 38 m 2,9.999999 v -7.999999 h 8 v 7.999999 h -8"
     id="path287"
     style="stroke-width:0.5" />
    <path
     stroke="none"
     fill="#009feb"
     d="m 32,19.999999 q 0,5 -3.525,8.475 Q 25,31.999998 19.999999,31.999998 15.025,31.999998 11.5,28.474999 8,24.999999 8,19.999999 8,15.025 11.5,11.5 15.025,8 19.999999,8 25,8 28.475,11.5 32,15.025 32,19.999999 M 15.5,16.5 l 2.999999,3.499999 -2.999999,3.5 v 0.5 l 1.124999,1 h 0.575 l 2.8,-3.25 2.825002,3.25 h 0.55 l 1.124999,-1 v -0.5 l -2.999999,-3.5 L 24.5,16.5 V 16 l -1.124999,-1 h -0.55 l -2.825002,3.275 -2.8,-3.275 h -0.575 L 15.5,16 v 0.5"
     id="path299"
     style="stroke-width:0.5" />
  </g>
</svg>
`,K5=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path
     stroke="none"
     fill="#40e2a0"
     d="m 56,44 q 0,5 -3.525,8.475 Q 49,56 44,56 39.025,56 35.5,52.475 32,49 32,44 32,39.025 35.5,35.5 39.025,32 44,32 49,32 52.475,35.5 56,39.025 56,44 M 51,49 44,37 37,49 H 51 M 44,40.975 47.525,47 H 40.5 L 44,40.975"
     id="path9"
     style="stroke-width:0.5" /><path
     stroke="none"
     fill="#feb504"
     d="m 32,20 q 0,5 -3.525,8.475 Q 25,32 20,32 15.025,32 11.5,28.475 8,25 8,20 8,15.025 11.5,11.5 15.025,8 20,8 25,8 28.475,11.5 32,15.025 32,20 M 15.5,16.5 19,20.45 V 25 h 2 V 20.45 L 24.5,16.5 V 16 l -1.125,-1 h -0.55 L 20,18.275 17.2,15 H 16.625 L 15.5,16 v 0.5"
     id="path179"
     style="stroke-width:0.5" />
  </g>     
</svg>
`,X5=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 L48 8 M39 26 L39 23 38 22 35 22 25 38 25 41 26 42 29 42 39 26"/>
  </g>
</svg>`,Y5=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 M30 24 L30 28.6 26.05 26.3 24.05 29.75 28 32.05 24.05 34.3 26.05 37.75 30 35.5 30 40 34 40 34 35.5 37.9 37.75 39.9 34.3 35.95 32.05 39.9 29.75 37.9 26.3 34 28.55 34 24 30 24"/>
  </g>
</svg>`,j5=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q9.55 56 8.3 50.8 8 49.55 8 48 L8 16 Q8 14.45 8.3 13.2 9.55 8 16 8 M31 36 Q29 36 29 38 L29 40 Q29 42 31 42 L33 42 33 43 32.7 43.7 32 44 Q31.6 44 31.3 43.7 L29.9 45.1 Q30.8 46 32 46 33.2 46 34.1 45.1 35 44.2 35 43 L35 40.25 35 40 35 38 Q35 36 33 36 L31 36"/>
  </g>
</svg>`,J5=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M31 36 Q29 36 29 38 L29 40 Q29 42 31 42 L33 42 Q35 42 35 40 L35 38 Q35 36 33 36 L31 36"/>
  </g>
</svg>`,Z5=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M31 22 Q29 22 29 24 L29 26 Q29 28 31 28 L33 28 Q35 28 35 26 L35 24 Q35 22 33 22 L31 22 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M31 36 Q29 36 29 38 L29 40 Q29 42 31 42 L33 42 Q35 42 35 40 L35 38 Q35 36 33 36 L31 36"/>
  </g>
</svg>`,$5=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M31 36 Q29 36 29 38 L29 40 Q29 42 31 42 L33 42 33 43 32.7 43.7 32 44 Q31.6 44 31.3 43.7 L29.9 45.1 Q30.8 46 32 46 33.2 46 34.1 45.1 35 44.2 35 43 L35 40.25 35 40 35 38 Q35 36 33 36 L31 36 M31 22 Q29 22 29 24 L29 26 Q29 28 31 28 L33 28 Q35 28 35 26 L35 24 Q35 22 33 22 L31 22"/>
  </g>
</svg>`,t4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M32 26 L36 26 36 22 29 22 28 23 28 41 29 42 36 42 36 38 32 38 32 26"/>
  </g>
</svg>`,n4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M32 26 L32 38 28 38 28 42 35 42 36 41 36 23 35 22 28 22 28 26 32 26"/>
  </g>
</svg>`,e4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M40 30 L34 30 34 24 30 24 30 30 24 30 24 34 30 34 30 40 34 40 34 34 40 34 40 30 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 52.9 53 54.8 51.1 56 48 56 L16 56 Q12.9 56 11 54.8 8 52.9 8 48 L8 16 Q8 8 16 8"/>
  </g>
</svg>`,s4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M40 30 L24 30 24 34 40 34 40 30"/>
  </g>
</svg>`,i4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q9.55 56 8.3 50.8 8 49.55 8 48 L8 16 Q8 14.45 8.3 13.2 9.55 8 16 8 M27.5 28 Q24 28 21.55 30.65 20.95 31.25 21 32.1 21.05 32.9 21.65 33.5 22.25 34.05 23.1 34 23.9 33.95 24.5 33.35 25.7 32 27.5 32 29.3 32 30.55 33.35 33 36 36.5 36 40 36 42.5 33.35 43.05 32.75 43 31.95 42.95 31.1 42.35 30.55 41.75 29.95 40.95 30 40.1 30.05 39.55 30.65 38.3 32 36.5 32 34.7 32 33.5 30.65 31 28 27.5 28"/>
  </g>
</svg>`,o4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M26 41 L26 37 22 37 22 44 23 45 41 45 42 44 42 37 38 37 38 41 26 41"/>
  </g>
</svg>`,r4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M36 20 Q34 20 34 22 L34 28 Q34 30 36 30 L38 30 Q40 30 40 28 L40 22 Q40 20 38 20 L36 20 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M26 20 Q24 20 24 22 L24 28 Q24 30 26 30 L28 30 Q30 30 30 28 L30 22 Q30 20 28 20 L26 20"/>
  </g>
</svg>`,a4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 16 L48 16 Q56 16 56 24 L56 40 Q56 44.9 53 46.8 51.1 48 48 48 L16 48 Q12.9 48 11 46.8 8 44.9 8 40 L8 24 Q8 16 16 16 M20 32 L26 38 28 38 28 34 44 34 44 30 28 30 28 26 26 26 20 32"/>
  </g>
</svg>`,l4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 14 L48 14 Q56 14 56 22 L56 41 Q56 49 48 49 L16 49 Q8 49 8 41 L8 22 Q8 14 16 14 M36 42 L36 38 28 38 28 42 36 42 M32 20 L24 28 24 30 28 30 28 36 36 36 36 30 40 30 40 28 32 20"/>
  </g>
</svg>`,L4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M44 31 L44 45 47 45 47 31 44 31 M48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 M23 26 L29 32 31 32 31 28 47 28 47 24 31 24 31 20 29 20 23 26 M41 38 L35 32 33 32 33 36 17 36 17 40 33 40 33 44 35 44 41 38 M17 19 L17 33 20 33 20 19 17 19"/>
  </g>
</svg>`,d4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 16 L48 16 Q56 16 56 24 L56 40 Q56 44.9 53 46.8 51.1 48 48 48 L16 48 Q12.9 48 11 46.8 8 44.9 8 40 L8 24 Q8 16 16 16 M32 24 L24 32 24 34 28 34 28 40 36 40 36 34 40 34 40 32 32 24"/>
  </g>
</svg>`,g4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M29 17 L35 17 Q39 17 39 21 L39 27 Q39 31 35 31 L29 31 Q25 31 25 27 L25 21 Q25 17 29 17 M45 33 L51 33 Q55 33 55 37 L55 43 Q55 47 51 47 L45 47 Q41 47 41 43 L41 37 Q41 33 45 33 M29 33 L35 33 Q39 33 39 37 L39 43 Q39 47 35 47 L29 47 Q25 47 25 43 L25 37 Q25 33 29 33"/>
    <path stroke="none" fill="#E73246" d="M13 33 L19 33 Q23 33 23 37 L23 43 Q23 47 19 47 L13 47 Q9 47 9 43 L9 37 Q9 33 13 33"/>
  </g>
</svg>`,h4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M29 17 L35 17 Q39 17 39 21 L39 27 Q39 31 35 31 L29 31 Q25 31 25 27 L25 21 Q25 17 29 17 M29 33 L35 33 Q39 33 39 37 L39 43 Q39 47 35 47 L29 47 Q25 47 25 43 L25 37 Q25 33 29 33 M13 33 L19 33 Q23 33 23 37 L23 43 Q23 47 19 47 L13 47 Q9 47 9 43 L9 37 Q9 33 13 33"/>
    <path stroke="none" fill="#E73246" d="M45 33 L51 33 Q55 33 55 37 L55 43 Q55 47 51 47 L45 47 Q41 47 41 43 L41 37 Q41 33 45 33"/>
  </g>
</svg>`,Q4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#E73246" d="M29 17 L35 17 Q39 17 39 21 L39 27 Q39 31 35 31 L29 31 Q25 31 25 27 L25 21 Q25 17 29 17"/>
    <path stroke="none" fill="#FFFFFF" d="M45 33 L51 33 Q55 33 55 37 L55 43 Q55 47 51 47 L45 47 Q41 47 41 43 L41 37 Q41 33 45 33 M29 33 L35 33 Q39 33 39 37 L39 43 Q39 47 35 47 L29 47 Q25 47 25 43 L25 37 Q25 33 29 33 M13 33 L19 33 Q23 33 23 37 L23 43 Q23 47 19 47 L13 47 Q9 47 9 43 L9 37 Q9 33 13 33"/>
  </g>
</svg>`,w4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M29 17 L35 17 Q39 17 39 21 L39 27 Q39 31 35 31 L29 31 Q25 31 25 27 L25 21 Q25 17 29 17 M45 33 L51 33 Q55 33 55 37 L55 43 Q55 47 51 47 L45 47 Q41 47 41 43 L41 37 Q41 33 45 33 M13 33 L19 33 Q23 33 23 37 L23 43 Q23 47 19 47 L13 47 Q9 47 9 43 L9 37 Q9 33 13 33"/>
    <path stroke="none" fill="#E73246" d="M29 33 L35 33 Q39 33 39 37 L39 43 Q39 47 35 47 L29 47 Q25 47 25 43 L25 37 Q25 33 29 33"/>
  </g>
</svg>`,f4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M36.95 27 L35.95 27 Q35.55 27 35.25 27.3 34.95 27.6 34.95 28 34.95 28.4 35.25 28.7 L35.95 29 35.95 29.25 35.7 29.8 35.7 29.75 34.95 30 34.15 29.75 33.95 29.25 33.95 24.8 Q33.95 24.45 34.2 24.2 L34.15 24.3 Q34.5 24 34.95 24 L35.7 24.3 35.7 24.25 35.95 24.8 Q35.95 25.2 36.25 25.5 36.55 25.8 36.95 25.8 L37.65 25.5 37.95 24.8 Q37.95 23.65 37.05 22.8 L37 22.75 Q36.1 22 34.95 22 33.7 22 32.85 22.75 L32.8 22.8 Q31.95 23.65 31.95 24.8 L31.95 29.25 Q31.95 30.35 32.8 31.2 L32.85 31.3 Q33.7 32 34.95 32 36.1 32 37 31.3 L37.05 31.25 Q37.95 30.35 37.95 29.25 L37.95 28 37.65 27.3 36.95 27 M44 22 L40 22 Q39.6 22 39.3 22.3 39 22.6 39 23 L39 31 Q39 31.4 39.3 31.7 39.6 32 40 32 L44 32 44.7 31.7 45 31 44.7 30.3 Q44.4 30 44 30 L41 30 41 28 44 28 44.7 27.7 45 27 44.7 26.3 Q44.4 26 44 26 L41 26 41 24 44 24 44.7 23.7 45 23 44.7 22.3 Q44.4 22 44 22 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M40.95 35.8 L40.95 42 Q40.95 42.4 41.25 42.7 41.55 43 41.95 43 L42.65 42.7 42.95 42 42.95 35.8 Q42.95 35.45 43.2 35.2 L43.15 35.3 Q43.5 35 43.95 35 L44.7 35.3 44.7 35.25 44.95 35.8 44.95 42 Q44.95 42.4 45.25 42.7 45.55 43 45.95 43 L46.65 42.7 46.95 42 46.95 35.8 Q46.95 34.65 46.05 33.8 L46 33.75 Q45.1 33 43.95 33 42.7 33 41.85 33.75 L41.8 33.8 Q40.95 34.65 40.95 35.8 M31.95 34.15 L32.95 42.15 33.2 42.7 33.75 43 34.35 42.95 34.8 42.55 35.95 40.8 37.15 42.55 37.6 42.95 38.2 43 38.7 42.7 38.95 42.15 39.95 34.15 39.75 33.4 Q39.5 33.05 39.1 33 38.65 32.95 38.35 33.2 38 33.45 37.95 33.9 L37.3 39.2 36.8 38.45 36.3 38.05 35.65 38.05 35.15 38.45 34.65 39.2 33.95 33.9 33.6 33.2 Q33.25 32.95 32.85 33 32.4 33.05 32.15 33.4 31.9 33.7 31.95 34.15 M21.1 26 L20 26 20 24 21.05 24 21.7 24.25 22 25 21.75 25.7 21.7 25.7 21.45 25.9 21.1 26 M21.1 28 L22.35 27.7 22.45 27.65 23.1 27.15 23.1 27.1 Q24 26.25 24 25 24 23.75 23.1 22.85 22.25 22 21.05 22 L19 22 Q18.6 22 18.3 22.3 18 22.6 18 23 L18 31 Q18 31.4 18.3 31.7 18.6 32 19 32 L19.7 31.7 20 31 20 28 21.1 28 M27 24.8 L27.25 24.2 27.2 24.3 Q27.55 24 28 24 28.45 24 28.75 24.3 L28.75 24.25 29 24.8 29 27 27 27 27 24.8 M25 24.8 L25 31 Q25 31.4 25.3 31.7 25.6 32 26 32 L26.7 31.7 27 31 27 29 29 29 29 31 Q29 31.4 29.3 31.7 L30 32 Q30.4 32 30.7 31.7 L31 31 31 24.8 Q31 23.65 30.1 22.8 L30.05 22.75 Q29.15 22 28 22 26.75 22 25.9 22.75 L25.85 22.8 Q25 23.65 25 24.8 M25.8 33.8 Q24.95 34.65 24.95 35.8 L24.95 40.25 Q24.95 41.35 25.8 42.2 L25.85 42.3 Q26.7 43 27.95 43 29.1 43 30 42.3 L30.05 42.25 Q30.95 41.35 30.95 40.25 L30.95 35.8 Q30.95 34.65 30.05 33.8 L30 33.75 Q29.1 33 27.95 33 26.7 33 25.85 33.75 L25.8 33.8 M26.95 35.8 Q26.95 35.45 27.2 35.2 L27.15 35.3 Q27.5 35 27.95 35 L28.7 35.3 28.7 35.25 28.95 35.8 28.95 40.25 28.7 40.8 28.7 40.75 27.95 41 27.15 40.75 26.95 40.25 26.95 35.8 M23.05 33.75 Q22.15 33 21.05 33 L19 33 Q18.6 33 18.3 33.3 18 33.6 18 34 L18 42 Q18 42.4 18.3 42.7 18.6 43 19 43 L21.05 43 Q22.15 43 23.05 42.3 L23.1 42.25 Q24 41.35 24 40.25 L24 35.8 Q24 34.65 23.1 33.8 L23.05 33.75 M21.05 35 Q21.45 35 21.75 35.3 L21.75 35.25 22 35.8 22 40.25 21.75 40.8 21.75 40.75 21.05 41 20 41 20 35 21.05 35"/>
  </g>
</svg>`,c4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M37 27 L36 27 Q35.6 27 35.3 27.3 35 27.6 35 28 L35.3 28.7 Q35.6 29 36 29 L36 29.25 35.75 29.8 35.75 29.75 35 30 34.2 29.75 34 29.25 34 24.8 Q34 24.45 34.25 24.2 L34.2 24.3 Q34.55 24 35 24 35.45 24 35.75 24.3 L35.75 24.25 36 24.8 Q36 25.2 36.3 25.5 L37 25.8 37.7 25.5 38 24.8 Q38 23.65 37.1 22.8 L37.05 22.75 Q36.15 22 35 22 33.75 22 32.9 22.75 L32.85 22.8 Q32 23.65 32 24.8 L32 29.25 Q32 30.35 32.85 31.2 L32.9 31.3 Q33.75 32 35 32 36.15 32 37.05 31.3 L37.1 31.25 Q38 30.35 38 29.25 L38 28 37.7 27.3 Q37.4 27 37 27 M44 26 L41 26 41 24 44 24 44.7 23.7 45 23 44.7 22.3 Q44.4 22 44 22 L40 22 Q39.6 22 39.3 22.3 39 22.6 39 23 L39 31 Q39 31.4 39.3 31.7 39.6 32 40 32 L44 32 44.7 31.7 45 31 44.7 30.3 Q44.4 30 44 30 L41 30 41 28 44 28 44.7 27.7 45 27 44.7 26.3 Q44.4 26 44 26 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M21.1 26 L20 26 20 24 21.05 24 21.7 24.25 22 25 21.75 25.7 21.7 25.7 21.45 25.9 21.1 26 M21.1 28 L22.35 27.7 22.45 27.65 23.1 27.15 23.1 27.1 Q24 26.25 24 25 24 23.75 23.1 22.85 22.25 22 21.05 22 L19 22 Q18.6 22 18.3 22.3 18 22.6 18 23 L18 31 Q18 31.4 18.3 31.7 18.6 32 19 32 L19.7 31.7 20 31 20 28 21.1 28 M27 24.8 L27.25 24.2 27.2 24.3 Q27.55 24 28 24 28.45 24 28.75 24.3 L28.75 24.25 29 24.8 29 27 27 27 27 24.8 M25 24.8 L25 31 Q25 31.4 25.3 31.7 25.6 32 26 32 L26.7 31.7 27 31 27 29 29 29 29 31 Q29 31.4 29.3 31.7 L30 32 Q30.4 32 30.7 31.7 L31 31 31 24.8 Q31 23.65 30.1 22.8 L30.05 22.75 Q29.15 22 28 22 26.75 22 25.9 22.75 L25.85 22.8 Q25 23.65 25 24.8 M28.1 37 L27 37 27 35 28.05 35 28.7 35.25 29 36 28.75 36.7 28.7 36.7 28.45 36.9 28.1 37 M28.1 39 L29.35 38.7 29.45 38.65 30.1 38.15 30.1 38.1 Q31 37.25 31 36 31 34.75 30.1 33.85 29.25 33 28.05 33 L26 33 Q25.6 33 25.3 33.3 25 33.6 25 34 L25 42 Q25 42.4 25.3 42.7 25.6 43 26 43 L26.7 42.7 27 42 27 39 28.1 39 M20 40.2 L20 34 19.7 33.3 Q19.4 33 19 33 18.6 33 18.3 33.3 18 33.6 18 34 L18 40.2 Q18 41.35 18.85 42.2 L18.9 42.3 Q19.75 43 21 43 22.15 43 23.05 42.3 L23.1 42.25 Q24 41.35 24 40.2 L24 34 23.7 33.3 Q23.4 33 23 33 22.6 33 22.3 33.3 22 33.6 22 34 L22 40.2 21.75 40.8 21.75 40.75 21 41 20.2 40.75 20 40.2"/>
  </g>
</svg>`,u4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M39 25 L39 38 41.5 38 Q43.8 38 45.35 36.4 L45.4 36.35 Q47 34.8 47 32.5 L47 30.5 Q47 28.2 45.4 26.7 L45.35 26.6 Q43.8 25 41.5 25 L39 25 M42 28.05 L43.2 28.75 43.25 28.75 43.3 28.8 Q44 29.45 44 30.5 L44 32.5 Q44 33.55 43.3 34.2 L43.2 34.3 Q42.7 34.8 42 34.95 L42 28.05 M17 25 L17 38 25 38 25 35 20 35 20 33 25 33 25 30 20 30 20 28 25 28 25 25 17 25 M37 38 L37 25 34 25 34 32 30 25 27 25 27 38 30 38 30 31 34 38 37 38"/>
  </g>
</svg>`,p4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M40 28 L40 36 Q40 36.4 40.3 36.7 L41 37 45 37 45.7 36.7 46 36 45.7 35.3 Q45.4 35 45 35 L42 35 42 33 45 33 45.7 32.7 46 32 45.7 31.3 Q45.4 31 45 31 L42 31 42 29 45 29 45.7 28.7 46 28 45.7 27.3 Q45.4 27 45 27 L41 27 40.7 27.05 Q40.45 27.1 40.3 27.3 40 27.6 40 28 M23 36 L23 28 22.7 27.3 Q22.55 27.1 22.3 27.05 L22 27 21.7 27.05 Q21.45 27.1 21.3 27.3 21 27.6 21 28 L21 31 19 31 19 28 18.7 27.3 Q18.55 27.1 18.3 27.05 L18 27 17.7 27.05 Q17.45 27.1 17.3 27.3 17 27.6 17 28 L17 36 Q17 36.4 17.3 36.7 L18 37 Q18.4 37 18.7 36.7 L19 36 19 33 21 33 21 36 Q21 36.4 21.3 36.7 21.6 37 22 37 L22.7 36.7 23 36 M39 36 L39 28 38.7 27.3 Q38.55 27.1 38.3 27.05 L38 27 37.7 27.05 Q37.45 27.1 37.3 27.3 L35 29.6 32.7 27.3 Q32.55 27.1 32.3 27.05 L32 27 31.7 27.05 Q31.45 27.1 31.3 27.3 31 27.6 31 28 L31 36 Q31 36.4 31.3 36.7 31.6 37 32 37 L32.7 36.7 33 36 33 30.4 34.3 31.7 Q34.6 32 35 32 L35.7 31.7 37 30.4 37 36 Q37 36.4 37.3 36.7 37.6 37 38 37 L38.7 36.7 39 36 M24.85 27.8 Q24 28.65 24 29.8 L24 34.25 Q24 35.35 24.85 36.2 L24.9 36.3 Q25.75 37 27 37 28.15 37 29.05 36.3 L29.1 36.25 Q30 35.35 30 34.25 L30 29.8 Q30 28.65 29.1 27.8 L29.05 27.75 Q28.4 27.2 27.6 27.05 L27 27 26.4 27.05 Q25.55 27.2 24.9 27.75 L24.85 27.8 M26 29.8 Q26 29.45 26.25 29.2 L26.2 29.3 Q26.55 29 27 29 27.45 29 27.75 29.3 L27.75 29.25 28 29.8 28 34.25 27.75 34.8 27.75 34.75 27 35 26.2 34.75 26 34.25 26 29.8"/>
  </g>
</svg>`,v4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M38.1 32.1 Q39 31.25 39 30 39 28.75 38.1 27.85 37.25 27 36.05 27 L34 27 Q33.6 27 33.3 27.3 33 27.6 33 28 L33 36 Q33 36.4 33.3 36.7 L34 37 Q34.4 37 34.7 36.7 L35 36 35 33 35.4 33 37.1 36.45 Q37.3 36.8 37.7 36.95 L38.45 36.9 38.95 36.35 38.9 35.55 37.45 32.65 38.1 32.15 38.1 32.1 M36.1 31 L35 31 35 29 36.05 29 Q36.45 29 36.7 29.25 L37 30 36.75 30.7 36.7 30.7 36.45 30.9 36.1 31 M40 28 L40 36 Q40 36.4 40.3 36.7 L41 37 45 37 45.7 36.7 46 36 45.7 35.3 Q45.4 35 45 35 L42 35 42 28 41.7 27.3 Q41.4 27 41 27 40.6 27 40.3 27.3 40 27.6 40 28 M56 22 L56 42 Q56 46.9 53 48.8 51.1 50 48 50 L16 50 Q12.9 50 11 48.8 8 46.9 8 42 L8 22 Q8 14 16 14 L48 14 Q56 14 56 22 M24.1 36.25 Q25 35.35 25 34.25 L24.7 33.55 Q24.4 33.25 24 33.25 23.6 33.25 23.3 33.55 23 33.85 23 34.25 L22.75 34.8 22.75 34.75 22 35 21.2 34.75 21 34.25 21 29.8 21.25 29.2 21.2 29.3 Q21.55 29 22 29 22.45 29 22.75 29.3 L22.75 29.25 23 29.8 Q23 30.2 23.3 30.5 23.6 30.8 24 30.8 L24.7 30.5 25 29.8 Q25 28.65 24.1 27.8 L24.05 27.75 Q23.15 27 22 27 20.75 27 19.9 27.75 L19.85 27.8 Q19 28.65 19 29.8 L19 34.25 Q19 35.35 19.85 36.2 L19.9 36.3 Q20.75 37 22 37 23.15 37 24.05 36.3 L24.1 36.25 M27 29 L28 29 28 36 Q28 36.4 28.3 36.7 28.6 37 29 37 L29.7 36.7 30 36 30 29 31 29 31.7 28.7 32 28 31.7 27.3 Q31.4 27 31 27 L27 27 Q26.6 27 26.3 27.3 26 27.6 26 28 L26.3 28.7 27 29"/>
  </g>
</svg>`,F4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 40 8 38.95 8 36 Q8 28 16 28 L28 28 28 16 Q28 8 36 8 L38.95 8 40 8 48 8 M29 41 L35 47 37 47 37 43 44.1 43 Q45.3 42.95 46.1 42.1 46.95 41.3 47 40.1 L47 29 43 29 43 39 37 39 37 35 35 35 29 41"/>
  </g>
</svg>`,_4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M38 42 L42 42 34 22 30 22 22 42 26 42 27.6 38 36.4 38 38 42 M32 27 L34.8 34 29.2 34 32 27"/>
  </g>
</svg>`,k4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M34 22 L25 22 24 23 24 41 25 42 34 42 Q36.45 42 38.2 40.25 L38.25 40.2 Q40 38.45 40 36 40 33.65 38.45 32 40 30.3 40 28 40 25.5 38.25 23.75 L38.2 23.7 Q36.45 22 34 22 M28 26 L34 26 Q34.8 26 35.4 26.6 L35.45 26.6 Q36 27.15 36 28 36 28.8 35.45 29.35 L35.35 29.45 Q34.8 29.95 34.15 30 L28 30 28 26 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M28 38 L28 34 34.15 34 Q34.85 34.05 35.4 34.6 L35.45 34.6 Q36 35.15 36 36 36 36.8 35.45 37.35 L35.35 37.45 Q34.8 38 34 38 L28 38"/>
  </g>
</svg>`,x4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M24 30 L24 34.2 Q24.05 37.35 26.35 39.65 L28 40.95 Q29.8 42 32 42 34.2 42 36 40.95 L37.65 39.65 Q38.95 38.35 39.55 36.8 L35.8 35.35 34.85 36.85 Q33.65 38 32 38 30.35 38 29.2 36.85 28.05 35.7 28 34.1 L28 30 Q28 28.35 29.2 27.2 30.35 26 32 26 33.65 26 34.85 27.2 L35.8 28.7 39.55 27.2 Q38.95 25.65 37.65 24.35 35.3 22 32 22 28.7 22 26.35 24.35 24 26.7 24 30 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8"/>
  </g>
</svg>`,m4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M28 26 L30.15 26 Q32.5 26.05 34.25 27.8 36 29.55 36 32 36 34.45 34.25 36.25 32.5 37.95 30.15 38 L28 38 28 26 M24 22 L24 42 30.25 42 Q34.25 41.9 37.1 39.1 L38.05 38 Q40 35.4 40 32 40 28.55 38.05 26 L37.1 24.95 Q34.25 22.1 30.25 22 L24 22"/>
  </g>
</svg>`,M4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M24 22 L24 42 40 42 40 38 28 38 28 34 40 34 40 30 28 30 28 26 40 26 40 22 24 22 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8"/>
  </g>
</svg>`,y4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M24 22 L24 42 28 42 28 34 40 34 40 30 28 30 28 26 40 26 40 22 24 22"/>
  </g>
</svg>`,b4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M39.25 24.8 Q36.45 22 32.5 22 28.55 22 25.8 24.8 23 27.55 23 31.5 L23 32.85 23.3 34.95 Q23.85 37.3 25.8 39.25 28.55 42 32.5 42 36.45 42 39.25 39.25 41.1 37.3 41.75 35 L41.8 34.85 42 32.85 42 32 41 31 31 31 31 35 37.45 35 36.4 36.4 Q34.75 38 32.5 38 30.25 38 28.65 36.4 27.55 35.3 27.2 34 L27 32.65 27 31.5 Q27 29.25 28.65 27.65 30.25 26 32.5 26 34.75 26 36.4 27.65 L36.85 28.15 39.7 25.3 39.25 24.8"/>
  </g>
</svg>`,E4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q51.45 8 53.45 9.5 56 11.45 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 11.45 10.6 9.5 12.55 8 16 8 M24 22 L24 42 28 42 28 34 36 34 36 42 40 42 40 22 36 22 36 30 28 30 28 22 24 22"/>
  </g>
</svg>`,A4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M30 22 L30 42 34 42 34 22 30 22"/>
  </g>
</svg>`,P4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M37 34.2 L37 22 33 22 33 34.1 Q32.95 35.7 31.85 36.85 30.65 38 29 38 L27 38 27 42 29.25 42 Q31.3 41.95 33 40.95 L34.65 39.65 Q36.95 37.35 37 34.2"/>
  </g>
</svg>`,I4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M28 34 L31 34 37 42 40 42 40 39 34.75 32 40 25 40 22 37 22 31 30 28 30 28 22 24 22 24 42 28 42 28 34"/>
  </g>
</svg>`,q4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M24 42 L40 42 40 38 28 38 28 22 24 22 24 42"/>
  </g>
</svg>`,C4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M22 42 L26 42 26 32 31 42 33 42 38 32 38 42 42 42 42 22 38 22 32 34 26 22 22 22 22 42 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8"/>
  </g>
</svg>`,T4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M28 42 L28 30 36 42 40 42 40 22 36 22 36 34 28 22 24 22 24 42 28 42"/>
  </g>
</svg>`,N4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M40 32 Q40 27.85 37.65 24.9 35.3 22 32 22 28.65 22 26.3 24.9 24 27.85 24 32 24 36.15 26.3 39.1 28.65 42 32 42 35.3 42 37.65 39.1 40 36.15 40 32 M34.55 27.4 L34.55 27.45 Q36 29.35 36 32 36 34.65 34.55 36.6 33.45 37.9 32 38 30.5 37.9 29.4 36.6 28 34.65 28 32 28 29.35 29.4 27.45 30.5 26.1 32 26 33.45 26.1 34.55 27.4 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8"/>
  </g>
</svg>`,D4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M25 22 L24 23 24 42 28 42 28 36 34 36 34.2 36 Q35.75 35.95 37 35.2 L38.1 34.4 38.1 34.35 38.2 34.25 38.25 34.2 39.6 32.3 40 30 40 28 Q40 25.5 38.25 23.75 L38.2 23.7 37 22.8 Q35.75 22.05 34.2 22 L25 22 M28 26 L34 26 Q34.8 26 35.4 26.6 L35.45 26.6 Q36 27.15 36 28 L36 30.4 35.45 31.35 35.35 31.45 34.9 31.8 34.05 32 28 32 28 26 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8"/>
  </g>
</svg>`,R4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M28 30 Q28 28.35 29.2 27.2 30.35 26 32 26 33.65 26 34.85 27.2 36 28.35 36 30 L36 34.1 35.9 34.9 35 34 32 34 32 37 32.9 37.9 32 38 Q30.35 38 29.2 36.85 28.05 35.7 28 34.1 L28 30 M24 30 L24 34.2 Q24.05 37.35 26.35 39.65 L28 40.95 Q29.8 42 32 42 34.2 42 36 41 L37 42 40 42 40 39 39 38 Q39.95 36.25 40 34.2 L40 30 Q40 26.7 37.65 24.35 35.3 22 32 22 28.7 22 26.35 24.35 24 26.7 24 30"/>
  </g>
</svg>`,O4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M25 22 L24 23 24 42 28 42 28 36 34 36 34.5 36 36 42 40 42 38.1 34.35 38.2 34.25 38.25 34.2 Q40 32.45 40 30 L40 28 Q40 25.5 38.25 23.75 L38.2 23.7 37 22.8 Q35.75 22.05 34.2 22 L25 22 M28 26 L34 26 Q34.8 26 35.4 26.6 L35.45 26.6 Q36 27.15 36 28 L36 30 Q36 30.8 35.45 31.35 L35.35 31.45 Q34.8 32 34 32 L28 32 28 26 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8"/>
  </g>
</svg>`,G4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M34 30 L30 30 Q29.2 30 28.6 29.4 28 28.8 28 28 28 27.2 28.55 26.65 L28.65 26.55 Q29.2 26 30 26 L34.05 26 Q34.8 26 35.35 26.55 L35.45 26.65 Q36 27.2 36 28 L39.85 26.5 39.7 26 Q39.25 24.8 38.25 23.8 L38.2 23.75 Q36.5 22.05 34.15 22 L30 22 Q27.55 22 25.8 23.75 L25.75 23.8 Q24 25.55 24 28 24 30.5 25.75 32.25 27.5 34 30 34 L34 34 Q34.8 34 35.4 34.6 36 35.2 36 36 36 36.8 35.45 37.35 L35.35 37.45 Q34.8 38 34 38 L29.95 38 Q29.2 38 28.65 37.45 L28.55 37.35 Q28 36.8 28 36 L24.2 37.55 24.35 38 Q24.75 39.2 25.75 40.2 L25.8 40.25 Q27.5 41.95 29.85 42 L34 42 Q36.45 42 38.2 40.25 L38.25 40.2 Q40 38.45 40 36 40 33.5 38.25 31.75 36.5 30 34 30 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8"/>
  </g>
</svg>`,H4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M40 22 L24 22 24 26 30 26 30 42 34 42 34 26 40 26 40 22"/>
  </g>
</svg>`,S4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M40 22 L36 22 36 34.1 Q35.95 35.7 34.85 36.85 33.65 38 32 38 30.35 38 29.2 36.85 28.05 35.7 28 34.1 L28 22 24 22 24 34.2 Q24.05 37.35 26.35 39.65 L28 40.95 Q29.8 42 32 42 34.2 42 36 40.95 L37.65 39.65 Q39.95 37.35 40 34.2 L40 22"/>
  </g>
</svg>`,B4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 56 Q8 56 8 48 L8 16 Q8 8 16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 M38 22 L32 37 26 22 22 22 30 42 34 42 42 22 38 22"/>
  </g>
</svg>`,U4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M31 22 L28 31 25 22 21 22 21 24 27 42 29 42 32 33 35 42 37 42 43 24 43 22 39 22 36 31 33 22 31 22"/>
  </g>
</svg>`,W4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M23 25 L29 32 23 39 23 40 25.25 42 26.4 42 32 35.5 37.65 42 38.75 42 41 40 41 39 35 32 41 25 41 24 38.75 22 37.65 22 32 28.55 26.4 22 25.25 22 23 24 23 25"/>
  </g>
</svg>`,z4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M23 25 L30 32.9 30 42 34 42 34 32.9 41 25 41 24 38.75 22 37.65 22 32 28.55 26.4 22 25.25 22 23 24 23 25"/>
  </g>
</svg>`,V4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M24 22 L24 26 34 26 24 38 24 42 40 42 40 38 30 38 40 26 40 22 24 22"/>
  </g>
</svg>`,K4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M36.95 25.55 Q34.9 23.5 32 23.5 29.15 23.5 27.05 25.5 L27 25.55 Q25 27.65 25 30.5 L25 33.5 Q25 36.4 27.05 38.45 29.15 40.5 32 40.5 34.85 40.5 36.9 38.45 L36.95 38.4 Q39 36.35 39 33.5 L39 30.5 Q39 27.65 36.95 25.55 M32 27.5 Q33.2 27.5 34.1 28.4 35 29.25 35 30.5 L35 33.5 Q35 34.7 34.1 35.55 L34.05 35.6 Q33.2 36.5 32 36.5 30.75 36.5 29.9 35.6 29 34.7 29 33.5 L29 30.5 Q29 29.3 29.85 28.4 L29.9 28.35 Q30.8 27.5 32 27.5"/>
  </g>
</svg>`,X4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M35 24 L31 24 28 27 28 28.95 31 28.95 31 33.85 31 33.95 31 41 35 41 35 24"/>
  </g>
</svg>`,Y4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M33.5 28.4 Q34.25 29.15 33 30.45 L26 37 26 41 30.85 41 30.95 41 38 41 38 37 32 37 36.45 32.55 Q38.65 30.35 37.4 27 L36.4 25.65 36.35 25.6 Q34.75 24 32.5 24 L30.85 24 Q28.9 24.05 27.5 25.4 L27.4 25.5 Q26.35 26.6 26.1 28 L26 29 30 29 Q30 28.6 30.3 28.3 30.55 28.05 30.85 28 L30.95 28 32.5 28 Q33.1 28 33.5 28.4"/>
  </g>
</svg>`,j4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M38 35.75 Q38.05 33.9 36.75 32.5 38.05 31.1 38 29.25 38.05 27.05 36.05 25.4 L36.1 25.5 Q34.4 24 32 24 29.6 24 27.9 25.45 26.05 26.95 26 29 L30.1 29 30.45 28.55 30.45 28.5 Q31.1 28 32 28 32.9 28 33.5 28.5 L33.55 28.55 Q33.95 28.85 34 29.25 L33.6 30 Q33 30.5 32.15 30.5 L30 30.5 30 34.5 32.15 34.5 32.7 34.55 Q33.2 34.65 33.6 35 L34 35.75 33.55 36.45 33.5 36.5 Q32.9 37 32 37 31.1 37 30.45 36.5 L30.45 36.45 30.1 36 26 36 Q26.05 38.05 27.9 39.55 29.6 41 32 41 34.4 41 36.1 39.5 L36.05 39.6 Q38.05 37.95 38 35.75"/>
  </g>
</svg>`,J4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M38 24 L34 24 34 30 30 30 30 24 26 24 26 32.05 Q26 32.85 26.55 33.4 27.15 34 27.95 34 L34 34 34 41 38 41 38 24"/>
  </g>
</svg>`,Z4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M34.5 36.6 Q34.1 37 33.5 37 L30.95 37 Q30.6 37 30.3 36.7 30 36.4 30 36 L26 36 26.1 37 Q26.35 38.4 27.4 39.5 L27.5 39.6 Q28.9 40.95 30.85 41 L33.5 41 Q35.75 41 37.35 39.4 L37.4 39.35 Q38.8 37.95 39 36 L39 35.5 Q39 33.2 37.4 31.6 35.8 30 33.5 30 L30 30 30 28 39 28 39 24 26 24 26 34 33.5 34 Q34.1 34 34.55 34.45 35 34.9 35 35.5 35 36.1 34.6 36.5 L34.5 36.6"/>
  </g>
</svg>`,$4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M37.25 30.75 Q35.5 29 33 29 L35 24 30 24 26.15 33.65 26.1 34 26 35 Q26 37.5 27.75 39.25 29.5 41 32 41 L33 41 Q35.45 41 37.2 39.25 L37.25 39.2 Q39 37.45 39 35 39 32.5 37.25 30.75 M33 33 Q33.8 33 34.4 33.6 35 34.2 35 35 35 35.8 34.45 36.35 L34.35 36.45 Q33.8 37 33 37 L32 37 Q31.2 37 30.6 36.4 30 35.8 30 35 30 34.45 30.25 34 L30.55 33.6 30.6 33.55 31.35 33.1 32 33 33 33"/>
  </g>
</svg>`,t1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M33 41 L38 28 38 24 25 24 25 28 33 28 28 41 33 41"/>
  </g>
</svg>`,n1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M32.5 41 Q34.75 41 36.35 39.4 L36.4 39.35 Q37.8 37.95 38 36 L38 35.5 Q38 33.6 36.9 32.2 38 30.85 38 29 38 26.95 36.6 25.5 L36.5 25.4 Q35.05 24 33.05 24 L29.95 24 28.65 24.2 Q27.45 24.5 26.5 25.4 L26.4 25.5 Q25 26.95 25 29 25 30.85 26.1 32.2 25 33.6 25 35.5 L25 36 Q25.2 37.95 26.6 39.35 L26.65 39.4 Q28.25 41 30.5 41 L32.5 41 M30 30 L29.3 29.7 Q29 29.4 29 29 29 28.6 29.3 28.3 29.6 28 29.95 28 L33.05 28 Q33.4 28 33.7 28.3 L34 29 33.7 29.7 33 30 30 30 M33.5 36.6 Q33.1 37 32.5 37 L30.5 37 Q29.9 37 29.5 36.6 L29.4 36.5 Q29 36.1 29 35.5 29 34.9 29.45 34.45 29.9 34 30.5 34 L32.55 34 Q33.1 34 33.55 34.45 34 34.9 34 35.5 34 36.1 33.6 36.5 L33.5 36.6"/>
  </g>
</svg>`,e1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M26.75 34.25 Q28.5 36 31 36 L29 41 34 41 37.85 31.35 37.9 31 38 30 Q38 27.5 36.25 25.75 34.5 24 32 24 L31 24 Q28.55 24 26.8 25.75 L26.75 25.8 Q25 27.55 25 30 25 32.5 26.75 34.25 M31 32 Q30.2 32 29.6 31.4 29 30.8 29 30 29 29.2 29.55 28.65 L29.65 28.55 Q30.2 28 31 28 L32 28 Q32.8 28 33.4 28.6 34 29.2 34 30 L33.75 31 33.45 31.4 33.4 31.45 32.65 31.9 32 32 31 32"/>
  </g>
</svg>`,s1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M43 24 L39 24 36 27 36 28.95 39 28.95 39 33.85 39 33.95 39 41 43 41 43 24 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M25 41 L25 35 32 35 32 31 28.15 31 28.05 31 25 31 25 28 32 28 32 24 28.15 24 28.05 24 21 24 21 33.85 21 33.95 21 41 25 41"/>
  </g>
</svg>`,i1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M23 41 L23 35 30 35 30 31 23 31 23 28 30 28 30 24 24.15 24 24.05 24 19 24 19 33.85 19 33.95 19 41 23 41 M40.5 28.4 Q41.25 29.15 40 30.45 L33 37 33 41 37.85 41 37.95 41 45 41 45 37 39 37 43.45 32.55 Q45.65 30.35 44.4 27 L43.4 25.65 43.35 25.6 43.25 25.5 Q41.7 24 39.5 24 L37.85 24 Q35.9 24.05 34.5 25.4 L34.4 25.5 Q33.35 26.6 33.1 28 L33 29 37 29 Q37 28.6 37.3 28.3 37.55 28.05 37.85 28 L37.95 28 39.5 28 Q40.1 28 40.5 28.4"/>
  </g>
</svg>`,o1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M45 35.75 Q45.05 33.9 43.75 32.5 45.05 31.1 45 29.25 45.05 27.05 43.05 25.4 L43.1 25.5 Q41.4 24 39 24 36.6 24 34.9 25.45 33.05 26.95 33 29 L37.1 29 37.45 28.55 37.45 28.5 Q38.1 28 39 28 39.9 28 40.5 28.5 L40.55 28.55 41 29.25 40.6 30 Q40 30.5 39.15 30.5 L37 30.5 37 34.5 39.15 34.5 39.7 34.55 Q40.2 34.65 40.6 35 L41 35.75 40.55 36.45 40.5 36.5 Q39.9 37 39 37 38.1 37 37.45 36.5 L37.45 36.45 37.1 36 33 36 Q33.05 38.05 34.9 39.55 36.6 41 39 41 41.4 41 43.1 39.5 L43.05 39.6 Q45.05 37.95 45 35.75 M23 41 L23 35 30 35 30 31 26.15 31 26.05 31 23 31 23 28 30 28 30 24 26.15 24 26.05 24 19 24 19 33.85 19 33.95 19 41 23 41"/>
  </g>
</svg>`,r1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M45 24 L41 24 41 30 37 30 37 24 33 24 33 32.05 Q33 32.85 33.55 33.4 34.15 34 34.95 34 L41 34 41 41 45 41 45 24 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M23 41 L23 35 30 35 30 31 26.15 31 26.05 31 23 31 23 28 30 28 30 24 26.15 24 26.05 24 19 24 19 33.85 19 33.95 19 41 23 41"/>
  </g>
</svg>`,a1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M41.5 36.6 Q41.1 37 40.5 37 L37.95 37 37.3 36.7 Q37 36.4 37 36 L33 36 33.1 37 Q33.35 38.4 34.4 39.5 L34.5 39.6 Q35.9 40.95 37.85 41 L40.5 41 Q42.75 41 44.35 39.4 L44.4 39.35 Q45.8 37.95 46 36 L46 35.5 Q46 33.2 44.4 31.6 42.8 30 40.5 30 L37 30 37 28 46 28 46 24 33 24 33 34 40.5 34 Q41.1 34 41.55 34.45 42 34.9 42 35.5 42 36.1 41.6 36.5 L41.5 36.6 M22 41 L22 35 29 35 29 31 25.15 31 25.05 31 22 31 22 28 29 28 29 24 25.15 24 25.05 24 18 24 18 33.85 18 33.95 18 41 22 41"/>
  </g>
</svg>`,l1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M44.25 30.75 Q42.5 29 40 29 L42 24 37 24 33.15 33.65 33.1 34 33 35 Q33 37.5 34.75 39.25 36.5 41 39 41 L40 41 Q42.45 41 44.2 39.25 L44.25 39.2 Q46 37.45 46 35 46 32.5 44.25 30.75 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M40 33 Q40.8 33 41.4 33.6 42 34.2 42 35 42 35.8 41.45 36.35 L41.35 36.45 Q40.8 37 40 37 L39 37 Q38.2 37 37.6 36.4 37 35.8 37 35 37 34.45 37.25 34 L37.55 33.6 37.6 33.55 Q37.95 33.25 38.35 33.1 L39 33 40 33 M23 41 L23 35 30 35 30 31 26.15 31 26.05 31 23 31 23 28 30 28 30 24 26.15 24 26.05 24 19 24 19 33.85 19 33.95 19 41 23 41"/>
  </g>
</svg>`,L1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M41 41 L46 28 46 24 33 24 33 28 41 28 36 41 41 41 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M22 41 L22 35 29 35 29 31 25.15 31 25.05 31 22 31 22 28 29 28 29 24 25.15 24 25.05 24 18 24 18 33.85 18 33.95 18 41 22 41"/>
  </g>
</svg>`,d1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M38 30 Q37.6 30 37.3 29.7 37 29.4 37 29 37 28.6 37.3 28.3 37.6 28 37.95 28 L41.05 28 Q41.4 28 41.7 28.3 L42 29 41.7 29.7 41 30 38 30 M40.5 41 Q42.75 41 44.35 39.4 L44.4 39.35 Q45.8 37.95 46 36 L46 35.5 Q46 33.6 44.9 32.2 46 30.85 46 29 46 26.95 44.6 25.5 L44.5 25.4 Q43.05 24 41.05 24 L37.95 24 36.65 24.2 Q35.45 24.5 34.5 25.4 L34.4 25.5 Q33 26.95 33 29 33 30.85 34.1 32.2 33 33.6 33 35.5 L33 36 Q33.2 37.95 34.6 39.35 L34.65 39.4 Q36.25 41 38.5 41 L40.5 41 M41.5 36.6 Q41.1 37 40.5 37 L38.5 37 Q37.9 37 37.5 36.6 L37.4 36.5 Q37 36.1 37 35.5 37 34.9 37.45 34.45 37.9 34 38.5 34 L40.55 34 Q41.1 34 41.55 34.45 42 34.9 42 35.5 42 36.1 41.6 36.5 L41.5 36.6 M22 41 L22 35 29 35 29 31 25.15 31 25.05 31 22 31 22 28 29 28 29 24 25.15 24 25.05 24 18 24 18 33.85 18 33.95 18 41 22 41"/>
  </g>
</svg>`,g1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M39 32 Q38.2 32 37.6 31.4 37 30.8 37 30 37 29.2 37.55 28.65 L37.65 28.55 Q38.2 28 39 28 L40 28 Q40.8 28 41.4 28.6 42 29.2 42 30 L41.75 31 41.45 31.4 41.4 31.45 40.65 31.9 40 32 39 32 M34.75 34.25 Q36.5 36 39 36 L37 41 42 41 45.85 31.35 45.9 31 46 30 Q46 27.5 44.25 25.75 42.5 24 40 24 L39 24 Q36.55 24 34.8 25.75 L34.75 25.8 Q33 27.55 33 30 33 32.5 34.75 34.25 M23 41 L23 35 30 35 30 31 26.15 31 26.05 31 23 31 23 28 30 28 30 24 26.15 24 26.05 24 19 24 19 33.85 19 33.95 19 41 23 41"/>
  </g>
</svg>`,h1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M43 28 Q44.2 28 45.1 28.9 46 29.75 46 31 L46 34 Q46 35.2 45.1 36.05 L45.05 36.1 Q44.2 37 43 37 41.75 37 40.9 36.1 40 35.2 40 34 L40 31 Q40 29.8 40.85 28.9 L40.9 28.85 Q41.8 28 43 28 M47.95 26.05 Q45.9 24 43 24 40.15 24 38.05 26 L38 26.05 Q36 28.15 36 31 L36 34 Q36 36.9 38.05 38.95 40.15 41 43 41 45.85 41 47.9 38.95 L47.95 38.9 Q50 36.85 50 34 L50 31 Q50 28.15 47.95 26.05 M34 24 L30 24 27 27 27 28.95 30 28.95 30 33.85 30 33.95 30 41 34 41 34 24 M18 41 L18 35 25 35 25 31 21.15 31 21.05 31 18 31 18 28 25 28 25 24 21.15 24 21.05 24 14 24 14 33.85 14 33.95 14 41 18 41"/>
  </g>
</svg>`,Q1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M47 24 L43 24 40 27 40 28.95 43 28.95 43 33.85 43 33.95 43 41 47 41 47 24 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M21 41 L21 35 28 35 28 31 24.15 31 24.05 31 21 31 21 28 28 28 28 24 24.15 24 24.05 24 17 24 17 33.85 17 33.95 17 41 21 41 M38 24 L34 24 31 27 31 28.95 34 28.95 34 33.85 34 33.95 34 41 38 41 38 24"/>
  </g>
</svg>`,w1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M34 24 L30 24 27 27 27 28.95 30 28.95 30 33.85 30 33.95 30 41 34 41 34 24 M18 41 L18 35 25 35 25 31 21.15 31 21.05 31 18 31 18 28 25 28 25 24 21.15 24 21.05 24 14 24 14 33.85 14 33.95 14 41 18 41 M44.5 28.4 Q45.25 29.15 44 30.45 L37 37 37 41 41.85 41 41.95 41 49 41 49 37 43 37 47.45 32.55 Q49.65 30.35 48.4 27 L47.4 25.65 47.35 25.6 Q45.75 24 43.5 24 L41.85 24 Q39.9 24.05 38.5 25.4 L38.4 25.5 Q37.35 26.6 37.1 28 L37 29 41 29 Q41 28.6 41.3 28.3 41.55 28.05 41.85 28 L41.95 28 43.5 28 Q44.1 28 44.5 28.4"/>
  </g>
</svg>`,f1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#7C66E8" d="M22.8 20 L20 22.8 29.2 32 20 41.2 22.8 44 32 34.8 41.2 44 44 41.2 34.8 32 44 22.8 41.2 20 32 29.2 22.8 20 M56 32 Q56 42 48.95 48.95 42 56 32 56 22.05 56 15 48.95 8 42 8 32 8 22.05 15 15 22.05 8 32 8 42 8 48.95 15 56 22.05 56 32"/>
  </g>
</svg>`,c1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FF6666" d="M37.7 26.35 Q40 28.65 40 32 40 35.35 37.7 37.7 35.35 40 32 40 28.7 40 26.4 37.7 L26.35 37.65 Q24 35.3 24 32 24 28.7 26.35 26.35 L26.4 26.35 Q28.7 24 32 24 35.35 24 37.7 26.35 M44 32 Q44 27 40.5 23.5 37 20 32 20 27.05 20 23.55 23.5 20 27 20 32 20 37 23.55 40.5 27.05 44 32 44 37 44 40.5 40.5 44 37 44 32 M56 32 Q56 42 48.95 48.95 42 56 32 56 22.05 56 15 48.95 8 42 8 32 8 22.05 15 15 22.05 8 32 8 42 8 48.95 15 56 22.05 56 32"/>
  </g>
</svg>`,u1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FF69F8" d="M56 32 Q56 42 48.95 48.95 42 56 32 56 22.05 56 15 48.95 8 42 8 32 8 22.05 15 15 22.05 8 32 8 42 8 48.95 15 56 22.05 56 32 M20 20 L20 44 44 44 44 20 20 20 M24 40 L24 24 40 24 40 40 24 40"/>
  </g>
</svg>`,p1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#40E2A0" d="M56 32 Q56 42 48.95 48.95 42 56 32 56 22.05 56 15 48.95 8 42 8 32 8 22.05 15 15 22.05 8 32 8 42 8 48.95 15 56 22.05 56 32 M46 42 L32 18 18 42 46 42 M32 25.95 L39.05 38 25 38 32 25.95"/>
  </g>
</svg>`,v1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M42 25 L38 25 35 28 35 29.95 38 29.95 38 34.85 38 34.95 38 42 42 42 42 25 M12 30 Q12 21.7 17.8 15.8 20.2 13.45 22.95 12.1 27.05 10 32 10 40.25 10 46.1 15.8 49.85 19.55 51.25 24.3 L51.8 26.9 52 29.6 52 46 52 46.45 Q51.85 49.15 50.1 51.2 L49.65 51.65 49.45 51.85 Q48 53.2 46.25 53.7 L44 54 20 54 Q16.7 54 14.35 51.65 12 49.3 12 46 L12 30 M22 25 L22 42 34 42 34 38 26 38 26 25 22 25"/>
  </g>
</svg>`,F1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M21 25 L21 42 25 42 25 37 28 37 30.5 42 34.5 42 31.45 35.9 32.2 35.25 32.25 35.2 33.2 34 Q34 32.65 34 31 34 28.5 32.25 26.75 L31.35 26 Q29.9 25 28 25 L21 25 M43 25 L39 25 36 28 36 29.95 39 29.95 39 34.85 39 34.95 39 42 43 42 43 25 M12 30 Q12 21.7 17.8 15.8 23.7 10 32 10 40.25 10 46.1 15.8 49.85 19.55 51.25 24.3 L51.8 26.9 52 29.6 52 46 52 46.45 Q51.85 49.15 50.1 51.2 L49.65 51.65 49.45 51.85 Q48 53.2 46.25 53.7 L44 54 20 54 Q16.85 54 14.55 51.85 L14.35 51.65 Q12 49.3 12 46 L12 30 M28 29 Q28.8 29 29.4 29.6 30 30.2 30 31 30 31.8 29.45 32.35 L29.35 32.45 Q28.8 33 28 33 L25 33 25 29 28 29"/>
  </g>
</svg>`,_1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M23 23 L23 40 35 40 35 36 27 36 27 23 23 23 M16 30 L16 16 Q16 12.7 18.35 10.35 20.7 8 24 8 L48 8 Q51.3 8 53.65 10.35 55.75 12.45 56 15.25 L56 16 56 40 Q56 46.6 51.3 51.3 46.6 56 40 56 L12.8 56 Q10.75 56 9.45 54.75 8 53.45 8 51.6 8 50.15 12 43.6 15.75 37.4 16 30 M44.5 27.4 Q45.25 28.15 44 29.45 L37 36 37 40 41.85 40 41.95 40 49 40 49 36 43 36 47.45 31.55 Q49.65 29.35 48.4 26 L47.4 24.65 47.35 24.6 Q45.75 23 43.5 23 L41.85 23 Q39.9 23.05 38.5 24.4 L38.4 24.5 Q37.35 25.6 37.1 27 L37 28 41 28 Q41 27.6 41.3 27.3 41.55 27.05 41.85 27 L41.95 27 43.5 27 Q44.1 27 44.5 27.4"/>
  </g>
</svg>`,k1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M48 30 Q48.25 37.4 52 43.6 56 50.15 56 51.6 56 53.45 54.55 54.75 53.25 56 51.2 56 L24 56 Q17.4 56 12.7 51.3 8 46.6 8 40 L8 16 Q8 12.7 10.35 10.35 12.7 8 16 8 L40 8 Q43.3 8 45.65 10.35 48 12.7 48 16 L48 30 M37.5 27.4 Q38.25 28.15 37 29.45 L30 36 30 40 34.85 40 34.95 40 42 40 42 36 36 36 40.45 31.55 Q42.65 29.35 41.4 26 L40.4 24.65 40.35 24.6 Q38.75 23 36.5 23 L34.85 23 Q32.9 23.05 31.5 24.4 L31.4 24.5 Q30.35 25.6 30.1 27 L30 28 34 28 Q34 27.6 34.3 27.3 34.55 27.05 34.85 27 L34.95 27 36.5 27 Q37.1 27 37.5 27.4 M22 27 Q22.8 27 23.4 27.6 24 28.2 24 29 24 29.8 23.45 30.35 L23.35 30.45 Q22.8 31 22 31 L19 31 19 27 22 27 M15 23 L15 40 19 40 19 35 22 35 24.5 40 28.5 40 25.45 33.9 26.2 33.25 26.25 33.2 Q28 31.45 28 29 28 26.5 26.25 24.75 24.5 23 22 23 L15 23"/>
  </g>
</svg>`,x1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M28 19 L27.7 19.7 Q27.4 20 27 20 L26.3 19.7 26 19 26 16 24 16 24 19 23.7 19.7 23 20 Q22.6 20 22.3 19.7 22 19.4 22 19 L22 11 Q22 10.6 22.3 10.3 22.6 10 23 10 23.4 10 23.7 10.3 L24 11 24 14 26 14 26 11 Q26 10.6 26.3 10.3 26.6 10 27 10 27.4 10 27.7 10.3 L28 11 28 19 M18 12 Q17.6 12 17.3 12.3 17 12.6 17 13 17 13.4 17.3 13.7 17.6 14 17.95 14 L18.05 14 Q19.2 14 20.1 14.9 21 15.8 21 17 21 18.2 20.1 19.1 19.2 20 18 20 L16 20 15.3 19.7 Q15 19.4 15 19 15 18.6 15.3 18.3 15.6 18 16 18 L18 18 Q18.4 18 18.7 17.7 L19 17 18.7 16.3 Q18.4 16 18.05 16 L17.95 16 Q16.8 16 15.9 15.1 15 14.2 15 13 15 11.8 15.9 10.9 16.8 10 18 10 L20 10 Q20.4 10 20.7 10.3 L21 11 20.7 11.7 20 12 18 12 M39.1 14 L39.45 13.9 39.7 13.7 39.75 13.7 40 13 39.7 12.25 Q39.45 12 39.05 12 L38 12 38 14 39.1 14 M29 12.8 Q29 11.65 29.85 10.8 L29.9 10.75 Q30.75 10 32 10 33.15 10 34.05 10.75 L34.1 10.8 Q35 11.65 35 12.8 L35 19 34.7 19.7 Q34.4 20 34 20 L33.3 19.7 Q33 19.4 33 19 L33 17 31 17 31 19 30.7 19.7 Q30.4 20 30 20 L29.3 19.7 Q29 19.4 29 19 L29 12.8 M31 12.8 L31 15 33 15 33 12.8 32.75 12.25 32.75 12.3 Q32.45 12 32 12 31.55 12 31.2 12.3 L31.25 12.2 Q31 12.45 31 12.8 M41.1 15.1 L41.1 15.15 40.45 15.65 41.9 18.55 41.95 19.35 41.45 19.9 40.7 19.95 Q40.3 19.8 40.1 19.45 L38.4 16 38 16 38 19 37.7 19.7 37 20 36.3 19.7 Q36 19.4 36 19 L36 11 Q36 10.6 36.3 10.3 36.6 10 37 10 L39.05 10 Q40.25 10 41.1 10.85 42 11.75 42 13 42 14.25 41.1 15.1 M43 11 Q43 10.6 43.3 10.3 43.6 10 44 10 L48 10 Q48.4 10 48.7 10.3 L49 11 48.7 11.7 Q48.4 12 48 12 L45 12 45 14 48 14 Q48.4 14 48.7 14.3 L49 15 48.7 15.7 Q48.4 16 48 16 L45 16 45 18 48 18 Q48.4 18 48.7 18.3 L49 19 48.7 19.7 Q48.4 20 48 20 L44 20 Q43.6 20 43.3 19.7 43 19.4 43 19 L43 11 M32 26 Q35.3 26 37.65 28.35 40 30.7 40 34 L40 46 Q40 49.3 37.65 51.65 35.3 54 32 54 28.7 54 26.35 51.65 24 49.3 24 46 L24 34 Q24 30.7 26.35 28.35 28.7 26 32 26"/>
  </g>
</svg>`,m1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M10.85 10.8 L10.9 10.75 Q11.75 10 13 10 14.15 10 15.05 10.75 L15.1 10.8 Q16 11.65 16 12.8 L16 17.25 Q16 18.35 15.1 19.25 L15.05 19.3 Q14.15 20 13 20 11.75 20 10.9 19.3 L10.85 19.2 Q10 18.35 10 17.25 L10 12.8 Q10 11.65 10.85 10.8 M12 12.8 L12 17.25 12.2 17.75 13 18 13.75 17.75 13.75 17.8 14 17.25 14 12.8 13.75 12.25 13.75 12.3 Q13.45 12 13 12 12.55 12 12.2 12.3 L12.25 12.2 12 12.8 M20.1 14 L20.45 13.9 20.7 13.7 20.75 13.7 21 13 20.7 12.25 Q20.45 12 20.05 12 L19 12 19 14 20.1 14 M19 19 L18.7 19.7 Q18.4 20 18 20 L17.3 19.7 Q17 19.4 17 19 L17 11 Q17 10.6 17.3 10.3 17.6 10 18 10 L20.05 10 Q21.25 10 22.1 10.85 23 11.75 23 13 23 14.25 22.1 15.1 L22.1 15.15 21.45 15.65 21.35 15.7 20.1 16 19 16 19 19 M25 12 L24.3 11.7 Q24 11.4 24 11 24 10.6 24.3 10.3 24.6 10 25 10 L29 10 29.7 10.3 30 11 29.7 11.7 29 12 28 12 28 19 27.7 19.7 Q27.4 20 27 20 L26.3 19.7 26 19 26 12 25 12 M36 12.8 L36 17.25 36.2 17.75 37 18 37.75 17.75 37.75 17.8 38 17.25 38 12.8 37.75 12.25 37.75 12.3 Q37.45 12 37 12 36.55 12 36.2 12.3 L36.25 12.2 36 12.8 M34.85 10.8 L34.9 10.75 Q35.75 10 37 10 38.15 10 39.05 10.75 L39.1 10.8 Q40 11.65 40 12.8 L40 17.25 Q40 18.35 39.1 19.25 L39.05 19.3 Q38.15 20 37 20 35.75 20 34.9 19.3 L34.85 19.2 Q34 18.35 34 17.25 L34 12.8 Q34 11.65 34.85 10.8 M33 19 L32.7 19.7 32 20 Q31.6 20 31.3 19.7 31 19.4 31 19 L31 11 Q31 10.6 31.3 10.3 31.6 10 32 10 32.4 10 32.7 10.3 L33 11 33 19 M47 19 L46.8 19.65 46.25 20 45.6 19.9 45.1 19.45 43 15.25 43 19 42.7 19.7 42 20 41.3 19.7 Q41 19.4 41 19 L41 11 Q41 10.65 41.25 10.4 L41.8 10.05 42.45 10.1 42.9 10.55 45 14.75 45 11 Q45 10.6 45.3 10.3 45.6 10 46 10 46.4 10 46.7 10.3 L47 11 47 19 M51 12 Q50.6 12 50.3 12.3 50 12.6 50 13 50 13.4 50.3 13.7 L50.95 14 51.05 14 Q52.2 14 53.1 14.9 54 15.8 54 17 54 18.2 53.1 19.1 52.2 20 51 20 L49 20 Q48.6 20 48.3 19.7 48 19.4 48 19 48 18.6 48.3 18.3 48.6 18 49 18 L51 18 Q51.4 18 51.7 17.7 L52 17 51.7 16.3 Q51.4 16 51.05 16 L50.95 16 Q49.8 16 48.9 15.1 48 14.2 48 13 48 11.8 48.9 10.9 49.8 10 51 10 L53 10 Q53.4 10 53.7 10.3 L54 11 53.7 11.7 53 12 51 12 M32 26 Q35.3 26 37.65 28.35 40 30.7 40 34 L40 46 39.85 47.6 Q39.4 49.9 37.65 51.65 35.3 54 32 54 28.7 54 26.35 51.65 24.6 49.9 24.15 47.6 L24 46 24 34 Q24 30.7 26.35 28.35 28.7 26 32 26"/>
  </g>
</svg>`,M1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M31.2 37 Q24.55 36.75 19.8 32.95 L19.7 32.9 Q16.3 30 16 26.1 L16 26.05 Q16.25 22 19.85 19 L19.95 18.9 Q25 15 32 15 39.15 15 44.2 19 L44.15 19 Q47.7 22 48 25.95 L48 26.05 Q47.7 30 44.2 32.9 L44 33.05 Q39.35 36.75 32.8 37 L31.2 37 M42.8 40.15 L46.55 37.7 46.6 37.65 Q51.9 33.4 52 27.4 51.85 21.4 46.55 17.1 40.55 12.3 32 12.3 23.45 12.3 17.4 17.1 L17.45 17.1 Q12.15 21.4 12 27.4 12.1 33.45 17.4 37.65 L21.25 40.15 Q21 40.8 21 41.65 21 43.5 22.25 44.85 L22.3 44.95 28.7 51.6 Q30 53 32 53 33.85 53.05 35.3 51.65 L35.3 51.6 41.7 44.95 41.8 44.85 Q43 43.5 43 41.65 L42.8 40.15 M43 50 Q43 52.5 39.75 54.25 36.55 56 32 56 27.5 56 24.25 54.25 21 52.5 21 50 L21 47.9 Q17.8 46.55 15 44.3 8 38.7 8 30.65 L8 30.1 8 29.55 8 29 8 28.5 8 28.1 8 27.95 8 27.4 Q8 19.4 15 13.65 22.05 8 32 8 42 8 48.95 13.65 56 19.4 56 27.4 L56 27.95 56 28.1 56 28.5 56 29 56 29.55 56 30.1 56 30.65 Q56 38.7 48.95 44.3 46.2 46.55 43 47.9 L43 50 M31 30 L31 20 28 20 28 33 37 33 37 30 31 30 M25.6 40 L38.4 40 Q39.05 40 39.55 40.5 L40 41.3 40 41.65 Q40 42.35 39.55 42.85 L33.15 49.5 Q32.65 50 32 50 31.3 50 30.85 49.5 L24.45 42.85 Q24 42.35 24 41.65 L24.05 41.3 24.45 40.5 Q24.9 40 25.6 40"/>
    <path stroke="none" fill="#FFFFFF" fill-opacity="0" d="M25.6 40 Q24.9 40 24.45 40.5 L24.05 41.3 24 41.65 Q24 42.35 24.45 42.85 L30.85 49.5 Q31.3 50 32 50 32.65 50 33.15 49.5 L39.55 42.85 Q40 42.35 40 41.65 L40 41.3 39.55 40.5 Q39.05 40 38.4 40 L25.6 40 M32.8 37 L38.4 37 Q40.25 36.95 41.7 38.4 42.45 39.15 42.8 40.15 L43 41.65 Q43 43.5 41.8 44.85 L41.7 44.95 35.3 51.6 35.3 51.65 Q33.85 53.05 32 53 30 53 28.7 51.6 L22.3 44.95 22.25 44.85 Q21 43.5 21 41.65 21 40.8 21.25 40.15 21.55 39.2 22.25 38.5 23.55 37 25.6 37 L31.2 37 32.8 37"/>
  </g>
</svg>`,y1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M31.2 37 Q24.55 36.75 19.8 32.95 L19.7 32.9 Q16.3 30 16 26.1 L16 26.05 Q16.25 22 19.85 19 L19.95 18.9 Q25 15 32 15 39.15 15 44.2 19 L44.15 19 Q47.7 22 48 25.95 L48 26.05 Q47.7 30 44.2 32.9 L44 33.05 Q39.35 36.75 32.8 37 L31.2 37 M42.8 40.15 L46.55 37.7 46.6 37.65 Q51.9 33.4 52 27.4 51.85 21.4 46.55 17.1 40.55 12.3 32 12.3 23.45 12.3 17.4 17.1 L17.45 17.1 Q12.15 21.4 12 27.4 12.1 33.45 17.4 37.65 L21.25 40.15 Q21 40.8 21 41.65 21 43.5 22.25 44.85 L22.3 44.95 28.7 51.6 Q30 53 32 53 33.85 53.05 35.3 51.65 L35.3 51.6 41.7 44.95 41.8 44.85 Q43 43.5 43 41.65 L42.8 40.15 M43 50 Q43 52.5 39.75 54.25 36.55 56 32 56 27.5 56 24.25 54.25 21 52.5 21 50 L21 47.9 Q17.8 46.55 15 44.3 8 38.7 8 30.65 L8 30.1 8 29.55 8 29 8 28.5 8 28.1 8 27.95 8 27.4 Q8 19.4 15 13.65 22.05 8 32 8 42 8 48.95 13.65 56 19.4 56 27.4 L56 27.95 56 28.1 56 28.5 56 29 56 29.55 56 30.1 56 30.65 Q56 38.7 48.95 44.3 46.2 46.55 43 47.9 L43 50 M33 30 L34 29.9 34 30 35 33 38 33 36.5 28.5 Q38 27.05 38 25 38 22.95 36.5 21.45 35.05 20 33 20 L27 20 27 33 30 33 30 30 33 30 M30 27 L30 23 33 23 Q33.85 23 34.4 23.55 35 24.15 35 25 35 25.85 34.4 26.4 33.85 27 33.05 27 L30 27 M30.85 49.5 L24.45 42.85 Q24 42.35 24 41.65 L24.05 41.3 24.45 40.5 Q24.9 40 25.6 40 L38.4 40 Q39.05 40 39.55 40.5 L40 41.3 40 41.65 Q40 42.35 39.55 42.85 L33.15 49.5 Q32.65 50 32 50 31.3 50 30.85 49.5"/>
    <path stroke="none" fill="#FFFFFF" fill-opacity="0" d="M30.85 49.5 Q31.3 50 32 50 32.65 50 33.15 49.5 L39.55 42.85 Q40 42.35 40 41.65 L40 41.3 39.55 40.5 Q39.05 40 38.4 40 L25.6 40 Q24.9 40 24.45 40.5 L24.05 41.3 24 41.65 Q24 42.35 24.45 42.85 L30.85 49.5 M32.8 37 L38.4 37 Q40.25 36.95 41.7 38.4 42.45 39.15 42.8 40.15 L43 41.65 Q43 43.5 41.8 44.85 L41.7 44.95 35.3 51.6 35.3 51.65 Q33.85 53.05 32 53 30 53 28.7 51.6 L22.3 44.95 22.25 44.85 Q21 43.5 21 41.65 21 40.8 21.25 40.15 21.55 39.2 22.25 38.5 23.55 37 25.6 37 L31.2 37 32.8 37"/>
  </g>
</svg>`,b1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#E73246" d="M40 10 L40 19.15 Q40 20 39.45 20.6 L33.45 26.6 Q32.85 27.15 32 27.15 31.15 27.15 30.6 26.6 L24.6 20.6 Q24 20 24 19.15 L24 10 Q24 9.15 24.6 8.6 25.15 8 26 8 L38 8 Q38.85 8 39.45 8.6 40 9.15 40 10"/>
    <path stroke="none" fill="#FFFFFF" d="M56 26 L56 38 Q56 38.85 55.45 39.45 54.85 40 54 40 L44.85 40 Q44 40 43.45 39.45 L37.45 33.45 Q36.85 32.85 36.85 32 36.85 31.15 37.45 30.6 L43.45 24.6 Q44 24 44.85 24 L54 24 Q54.85 24 55.45 24.6 56 25.15 56 26 M33.45 37.45 L39.45 43.45 Q40 44 40 44.85 L40 54 Q40 54.85 39.45 55.45 38.85 56 38 56 L26 56 Q25.15 56 24.6 55.45 24 54.85 24 54 L24 44.85 Q24 44 24.6 43.45 L30.6 37.45 Q31.15 36.85 32 36.85 32.85 36.85 33.45 37.45 M19.15 40 L10 40 Q9.15 40 8.6 39.45 8 38.85 8 38 L8 26 Q8 25.15 8.6 24.6 9.15 24 10 24 L19.15 24 Q20 24 20.6 24.6 L26.6 30.6 Q27.15 31.15 27.15 32 27.15 32.85 26.6 33.45 L20.6 39.45 Q20 40 19.15 40"/>
  </g>
</svg>`,E1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M40 10 L40 19.15 Q40 20 39.45 20.6 L33.45 26.6 Q32.85 27.15 32 27.15 31.15 27.15 30.6 26.6 L24.6 20.6 Q24 20 24 19.15 L24 10 Q24 9.15 24.6 8.6 25.15 8 26 8 L38 8 Q38.85 8 39.45 8.6 40 9.15 40 10 M56 26 L56 38 Q56 38.85 55.45 39.45 54.85 40 54 40 L44.85 40 Q44 40 43.45 39.45 L37.45 33.45 Q36.85 32.85 36.85 32 36.85 31.15 37.45 30.6 L43.45 24.6 Q44 24 44.85 24 L54 24 Q54.85 24 55.45 24.6 56 25.15 56 26 M19.15 40 L10 40 Q9.15 40 8.6 39.45 8 38.85 8 38 L8 26 Q8 25.15 8.6 24.6 9.15 24 10 24 L19.15 24 Q20 24 20.6 24.6 L26.6 30.6 Q27.15 31.15 27.15 32 27.15 32.85 26.6 33.45 L20.6 39.45 Q20 40 19.15 40"/>
    <path stroke="none" fill="#E73246" d="M33.45 37.45 L39.45 43.45 Q40 44 40 44.85 L40 54 Q40 54.85 39.45 55.45 38.85 56 38 56 L26 56 Q25.15 56 24.6 55.45 24 54.85 24 54 L24 44.85 Q24 44 24.6 43.45 L30.6 37.45 Q31.15 36.85 32 36.85 32.85 36.85 33.45 37.45"/>
  </g>
</svg>`,A1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M40 10 L40 19.15 Q40 20 39.45 20.6 L33.45 26.6 Q32.85 27.15 32 27.15 31.15 27.15 30.6 26.6 L24.6 20.6 Q24 20 24 19.15 L24 10 Q24 9.15 24.6 8.6 25.15 8 26 8 L38 8 Q38.85 8 39.45 8.6 40 9.15 40 10 M56 26 L56 38 Q56 38.85 55.45 39.45 54.85 40 54 40 L44.85 40 Q44 40 43.45 39.45 L37.45 33.45 Q36.85 32.85 36.85 32 36.85 31.15 37.45 30.6 L43.45 24.6 Q44 24 44.85 24 L54 24 Q54.85 24 55.45 24.6 56 25.15 56 26 M33.45 37.45 L39.45 43.45 Q40 44 40 44.85 L40 54 Q40 54.85 39.45 55.45 38.85 56 38 56 L26 56 Q25.15 56 24.6 55.45 24 54.85 24 54 L24 44.85 Q24 44 24.6 43.45 L30.6 37.45 Q31.15 36.85 32 36.85 32.85 36.85 33.45 37.45"/>
    <path stroke="none" fill="#E73246" d="M19.15 40 L10 40 Q9.15 40 8.6 39.45 8 38.85 8 38 L8 26 Q8 25.15 8.6 24.6 9.15 24 10 24 L19.15 24 Q20 24 20.6 24.6 L26.6 30.6 Q27.15 31.15 27.15 32 27.15 32.85 26.6 33.45 L20.6 39.45 Q20 40 19.15 40"/>
  </g>
</svg>`,P1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M40 10 L40 19.15 Q40 20 39.45 20.6 L33.45 26.6 Q32.85 27.15 32 27.15 31.15 27.15 30.6 26.6 L24.6 20.6 Q24 20 24 19.15 L24 10 Q24 9.15 24.6 8.6 25.15 8 26 8 L38 8 Q38.85 8 39.45 8.6 40 9.15 40 10 M33.45 37.45 L39.45 43.45 Q40 44 40 44.85 L40 54 Q40 54.85 39.45 55.45 38.85 56 38 56 L26 56 Q25.15 56 24.6 55.45 24 54.85 24 54 L24 44.85 Q24 44 24.6 43.45 L30.6 37.45 Q31.15 36.85 32 36.85 32.85 36.85 33.45 37.45 M19.15 40 L10 40 Q9.15 40 8.6 39.45 8 38.85 8 38 L8 26 Q8 25.15 8.6 24.6 9.15 24 10 24 L19.15 24 Q20 24 20.6 24.6 L26.6 30.6 Q27.15 31.15 27.15 32 27.15 32.85 26.6 33.45 L20.6 39.45 Q20 40 19.15 40"/>
    <path stroke="none" fill="#E73246" d="M56 26 L56 38 Q56 38.85 55.45 39.45 54.85 40 54 40 L44.85 40 Q44 40 43.45 39.45 L37.45 33.45 Q36.85 32.85 36.85 32 36.85 31.15 37.45 30.6 L43.45 24.6 Q44 24 44.85 24 L54 24 Q54.85 24 55.45 24.6 56 25.15 56 26"/>
  </g>
</svg>`,I1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M37.7 26.35 Q40 28.65 40 32 40 35.35 37.7 37.7 35.35 40 32 40 28.7 40 26.4 37.7 L26.35 37.65 Q24 35.3 24 32 24 28.7 26.35 26.35 L26.4 26.35 Q28.7 24 32 24 35.35 24 37.7 26.35 M44 32 Q44 27 40.5 23.5 37 20 32 20 27.05 20 23.55 23.5 20 27 20 32 20 37 23.55 40.5 27.05 44 32 44 37 44 40.5 40.5 44 37 44 32 M56 32 Q56 42 48.95 48.95 42 56 32 56 22.05 56 15 48.95 8 42 8 32 8 22.05 15 15 22.05 8 32 8 42 8 48.95 15 56 22.05 56 32"/>
  </g>
</svg>`,q1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M44.15 19 Q47.7 22 48 25.95 L48 26.05 Q47.7 30 44.2 32.9 L44 33.05 Q39.05 37 32 37 24.85 37 19.8 32.95 L19.7 32.9 Q16.3 30 16 26.1 L16 26.05 Q16.25 22 19.85 19 L19.95 18.9 Q25 15 32 15 39.15 15 44.2 19 L44.15 19 M43 50 Q43 52.5 39.75 54.25 36.55 56 32 56 27.5 56 24.25 54.25 21 52.5 21 50 L21 47.9 Q17.8 46.55 15 44.3 8 38.7 8 30.65 L8 30.1 8 29.55 8 29 8 28.5 8 28.1 8 27.95 8 27.4 Q8 19.4 15 13.65 22.05 8 32 8 42 8 48.95 13.65 56 19.4 56 27.4 L56 27.95 56 28.1 56 28.5 56 29 56 29.55 56 30.1 56 30.65 Q56 38.7 48.95 44.3 46.2 46.55 43 47.9 L43 50 M31 30 L31 20 28 20 28 33 37 33 37 30 31 30 M12 27.4 Q12.1 33.45 17.4 37.65 23.45 42.5 32 42.5 40.55 42.5 46.55 37.7 L46.6 37.65 Q51.9 33.4 52 27.4 51.85 21.4 46.55 17.1 40.55 12.3 32 12.3 23.45 12.3 17.4 17.1 L17.45 17.1 Q12.15 21.4 12 27.4"/>
  </g>
</svg>`,C1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M44.15 19 Q47.7 22 48 25.95 L48 26.05 Q47.7 30 44.2 32.9 L44 33.05 Q39.05 37 32 37 24.85 37 19.8 32.95 L19.7 32.9 Q16.3 30 16 26.1 L16 26.05 Q16.25 22 19.85 19 L19.95 18.9 Q25 15 32 15 39.15 15 44.2 19 L44.15 19 M43 50 Q43 52.5 39.75 54.25 36.55 56 32 56 27.5 56 24.25 54.25 21 52.5 21 50 L21 47.9 Q17.8 46.55 15 44.3 8 38.7 8 30.65 L8 30.1 8 29.55 8 29 8 28.5 8 28.1 8 27.95 8 27.4 Q8 19.4 15 13.65 22.05 8 32 8 42 8 48.95 13.65 56 19.4 56 27.4 L56 27.95 56 28.1 56 28.5 56 29 56 29.55 56 30.1 56 30.65 Q56 38.7 48.95 44.3 46.2 46.55 43 47.9 L43 50 M33 30 L34 29.9 34 30 35 33 38 33 36.5 28.5 Q38 27.05 38 25 38 22.95 36.5 21.45 35.05 20 33 20 L27 20 27 33 30 33 30 30 33 30 M30 27 L30 23 33 23 Q33.85 23 34.4 23.55 35 24.15 35 25 35 25.85 34.4 26.4 33.85 27 33.05 27 L30 27 M12 27.4 Q12.1 33.45 17.4 37.65 23.45 42.5 32 42.5 40.55 42.5 46.55 37.7 L46.6 37.65 Q51.9 33.4 52 27.4 51.85 21.4 46.55 17.1 40.55 12.3 32 12.3 23.45 12.3 17.4 17.1 L17.45 17.1 Q12.15 21.4 12 27.4"/>
  </g>
</svg>`;var T1=S('<div class="svg-container svelte-6pjcsf"><!></div>');function R(e,t){r3(t,!0);let n=p(t,"width",3,40),s=p(t,"height",3,40),i=p(t,"color",3,"#666666");const o={0:f1,1:c1,2:u1,3:p1,4:v1,5:F1,6:_1,7:k1,8:x1,9:m1,10:M1,11:y1,12:b1,13:E1,14:A1,15:P1,16:I1,axis_left:q1,axis_right:C1},g={"/":X5,"*":Y5,",":j5,".":J5,":":Z5,";":$5,"[":t4,"]":n4,"+":e4,"-":s4,"~":i4," ":o4,'"':r4,backspace:a4,capslock:l4,tab:L4,shift:d4,arrowleft:g4,arrowright:h4,arrowup:Q4,arrowdown:w4,pagedown:f4,pageup:c4,end:u4,home:p4,control:v4,enter:F4,a:_4,b:k4,c:x4,d:m4,e:M4,f:y4,g:b4,h:E4,i:A4,j:P4,k:I4,l:q4,m:C4,n:T4,o:N4,p:D4,q:R4,r:O4,s:G4,t:H4,u:S4,v:B4,w:U4,x:W4,y:z4,z:V4,0:K4,1:X4,2:Y4,3:j4,4:J4,5:Z4,6:$4,7:t1,8:n1,9:e1,f1:s1,f2:i1,f3:o1,f4:r1,f5:a1,f6:l1,f7:L1,f8:d1,f9:g1,f10:h1,f11:Q1,f12:w1},Q={0:W5,1:z5,2:V5,3:K5};let f=f3(void 0);switch(t.type,["ps4","ps5"].includes(t.type),t.type){case"keyboard_mouse":let h=t.input.toLowerCase();H(f,g[h],!0);break;case"ps4":H(f,o[t.input],!0);break;case"generic":t.input in Q?H(f,Q[t.input],!0):H(f,o[t.input],!0)}var c=Y3(),d=Y(c);{var w=h=>{var L=T1();let a;var l=q(L);y5(l,()=>T(f).replace("<g>",`<g transform="scale(${Math.min(n()/64,s()/64)})">`).replace('fill="#FFFFFF"',`fill="${i()}"`)),I(L),o3(r=>a=j(L,"",a,r),[()=>({height:`${s()??""}px`,width:`${n()??""}px`})]),C(h,L)};P(d,h=>{T(f)&&h(w)})}C(e,c),a3()}var N1=S('<div><div class="hint"> <!> <!></div></div>');function V3(e,t){r3(t,!0);let n=p(t,"context",19,()=>["default"]),s=p(t,"text",3,""),i=p(t,"class",3,"hint-container"),o=p(t,"style",3,"");var g=Y3(),Q=Y(g);{var f=c=>{var d=N1(),w=q(d),h=q(w),L=x(h);{var a=u=>{R(u,{type:"keyboard_mouse",get input(){return t.keys[0]}})};P(L,u=>{t.keys.length>0&&u(a)})}var l=x(L,2);{var r=u=>{R(u,{type:"generic",get input(){return t.buttons[0]}})};P(l,u=>{t.buttons.length>0&&u(r)})}I(w),I(d),o3(()=>{X(d,1,p3(i())),j(d,o()),b2(h,`${s()??""} `)}),m3(2,d,()=>M3),m3(1,d,()=>M3),C(c,d)};P(Q,c=>{E.showHints&&n().includes(E.context)&&c(f)})}C(e,g),a3()}class C2 extends h2{thisGamepadButton(t,n){return super.thisGamepadButton(t,n)&&this.input.buttons.includes(n)}thisKey(t){return this.input.keys.includes(t.key.toLowerCase())||!1}}var D1=(e,t)=>{T(t)?.onpressed(),setTimeout(()=>{T(t)?.onrelease()},50)},R1=S("<div><button><!></button> <!></div>");function T2(e,t){r3(t,!0);let n=p(t,"disabled",3,!1),s=p(t,"onpressed",3,void 0),i=p(t,"onhold",3,void 0),o=p(t,"onrelease",3,void 0),g=p(t,"onpointerout",3,void 0),Q=p(t,"style",3,""),f=p(t,"cssclass",3,"vbutton"),c=p(t,"cssclassWrapper",3,"button-wrapper"),d=p(t,"inputMapping",19,()=>({name:"",gamepad:-1,buttons:[U.DOWN],keys:["e"," "]})),w=p(t,"context",19,()=>["default"]),h=p(t,"requiresFocus",3,!1),L=p(t,"consumePress",3,!1),a=f3(""),l,r=f3(void 0);function u(){return l}A3(()=>(H(r,new y(d(),l,h(),s(),i(),o(),L()),!0),H3(w(),T(r)),()=>{T(r)&&S3(w(),T(r))}));class y extends C2{onpressed(){return H(a,"button_clicked "),super.onpressed()}onrelease(){H(a,""),super.onrelease()}}var v=R1(),_=q(v);_.__pointerdown=function(...M){T(r)?.onpressed?.apply(this,M)},_.__click=[D1,r],_.__pointerup=function(...M){T(r)?.onrelease?.apply(this,M)},_.__pointerout=function(...M){g()?.apply(this,M)};var b=q(_);v5(b,()=>t.children),I(_),x3(_,M=>l=M,()=>l);var k=x(_,2);return V3(k,{get context(){return w()},get keys(){return d().keys},get buttons(){return d().buttons},style:"left: 50%;"}),I(v),o3(()=>{X(v,1,p3(c()),"svelte-bpza0d"),j(_,Q()),X(_,1,T(a)+f(),"svelte-bpza0d"),_.disabled=n()}),C(e,v),a3({getElement:u})}j3(["pointerdown","click","pointerup","pointerout"]);function O1(e,t){r3(t,!0);let n=p(t,"updateUsingAnimationFrame",3,!1),s=p(t,"updateUsingInterval",3,!0),i=p(t,"timeout",3,1e3/25),o=!0;const g=a=>{E.activeComponents.forEach(r=>{r.focusElement&&r.focusElement.blur()}),E.activeComponents=[],E.components[a].forEach(r=>{(!r.requiresFocus||r.focusElement===document.activeElement)&&d2(r)}),E.context=a};let Q={},f={};const c=()=>{let a=E.activeComponents;for(let l of navigator.getGamepads())if(l){for(let r=0;r<l.buttons.length;r++){if(l.buttons[r].pressed&&(a.forEach(u=>{u.thisGamepadButton(l,r)&&u.onbuttonhold(l,r)}),!Q[r])){Q[r]=!0;for(let u of a)if(u.thisGamepadButton(l,r)&&u.onbuttonpressed(l,r)===!0)break}Q[r]&&!l.buttons[r].pressed&&(Q[r]=!1,a.forEach(u=>{u.thisGamepadButton(l,r)&&u.onbuttonrelease(l,r)}))}a.forEach(r=>{G3(r.input,l)&&r.onupdate(l)})}},d=()=>{c(),o&&requestAnimationFrame(d)};A3(()=>{let a;return n()?(o=!0,d()):s()&&(a=setInterval(c,i())),()=>{a&&clearInterval(a),o=!1,E.activeComponents=[]}});const w=a=>{let l=E.activeComponents;for(let r of l)if(r.onkeypressed(a)===!0)break},h=a=>{const l=a.key.toLowerCase();f[l]||w(a);let r=E.activeComponents;f[l]=!0,r.forEach(u=>{u.onkeyhold(a)})},L=a=>{const l=a.key.toLowerCase();delete f[l],E.activeComponents.forEach(u=>{u.onkeyrelease(a)})};return E3("keydown",X3,h),E3("keyup",X3,L),a3({changeContext:g})}class N2 extends h2{gamepadActive=!0;pos=[0,0];updatePosition;xPos=!1;xNeg=!1;yPos=!1;yNeg=!1;constructor(t,n,s,i=!1){super(t,s,i),this.updatePosition=n}onrelease(){let t=this.pos[0],n=this.pos[1];(this.xPos||this.xNeg)&&(t=0),(this.yPos||this.yNeg)&&(n=0),!(t==this.pos[0]&&n==this.pos[1])&&(this.pos=[t,n],this.updatePosition(!0,this.pos))}onhold(){let t=this.pos[0],n=this.pos[1];this.xPos?t=1:this.xNeg&&(t=-1),this.yPos?n=1:this.yNeg&&(n=-1),!(t==this.pos[0]&&n==this.pos[1])&&(this.pos=[t,n],this.updatePosition(!0,this.pos))}updateKeys(t){const n=this.input,s=t.key.toLowerCase();this.xPos=n.key_x_pos.includes(s),this.xNeg=n.key_x_neg.includes(s),this.yPos=n.key_y_pos.includes(s),this.yNeg=n.key_y_neg.includes(s)}thisKey(t){return this.xPos||this.xNeg||this.yPos||this.yNeg}onkeyrelease(t){this.disabled||(this.updateKeys(t),super.onkeyrelease(t))}onkeyhold(t){this.disabled||(this.updateKeys(t),super.onkeyhold(t))}updateButton(t){const n=this.input;this.xPos=n.button_x_pos.includes(t),this.xNeg=n.button_x_neg.includes(t),this.yPos=n.button_y_pos.includes(t),this.yNeg=n.button_y_neg.includes(t)}onbuttonhold(t,n){this.disabled||(this.updateButton(n),super.onbuttonhold(t,n))}onbuttonrelease(t,n){this.disabled||(this.updateButton(n),super.onbuttonrelease(t,n))}onupdate(t){if(this.disabled||!this.gamepadActive||!G3(this.input,t))return;const n=this.input;let s=t.axes[n.axes_x],i=t.axes[n.axes_y];if(n.invert_x&&(s=-s),n.invert_y&&(i=-i),Math.abs(s)<n.deadzoneX&&Math.abs(i)<n.deadzoneY){this.updatePosition(!1,[0,0]);return}this.updatePosition(!0,[s,i])}activateGamepad=()=>{this.disabled||(this.gamepadActive=!0)}}class G1 extends h2{axesDown=-1;changeFocus;constructor(t,n,s,i=!1,o,g,Q,f=!1){super(t,s,i,o,g,Q,f),this.changeFocus=n}onbuttonpressed(t,n){if(this.disabled||!G3(this.input,t))return!1;const s=this.input;return s.buttons.includes(n)?this.onpressed():(s.buttons_next.includes(n)&&this.changeFocus(1),s.buttons_prev.includes(n)&&this.changeFocus(-1),!1)}onkeypressed(t){if(this.disabled)return!1;const n=this.input,s=t.key.toLowerCase();return n.keys.includes(s)?this.onpressed():(n.keys_next.includes(s)&&this.changeFocus(1),n.keys_prev.includes(s)&&this.changeFocus(-1),!1)}onupdate(t){if(this.disabled||!G3(this.input,t))return;const n=this.input;for(const s of n.axes){const i=t.axes[s];let o=n.sensitivity;if(i<-o&&this.axesDown!=s){this.changeFocus(-1),this.axesDown=s;continue}if(i>o&&this.axesDown!=s){this.changeFocus(1),this.axesDown=s;continue}i<o&&i>-o&&(this.axesDown=-1)}}}var H1=()=>{},S1=S("<!> <br/>",1),B1=S("<!> <br/>",1),U1=S('<div class="hints_container svelte-1kfcq8m"><div class="hint svelte-1kfcq8m"><!></div> <div class="hint hint-up svelte-1kfcq8m"><!> <!></div> <div class="hint hint-down svelte-1kfcq8m"><!> <!></div> <div class="hint hint-left svelte-1kfcq8m"><!> <!></div> <div class="hint hint-right svelte-1kfcq8m"><!> <!></div></div>'),W1=(e,t,n)=>{t(t()[1]=n().invert_y?1:-1,!0)},z1=(e,t,n)=>{t(t()[1]=0,!0),H(n,!1)},V1=(e,t,n)=>{t(t()[0]=n().invert_x?1:-1,!0)},K1=(e,t,n)=>{t(t()[0]=0,!0),H(n,!1)},X1=(e,t,n)=>{t(t()[0]=n().invert_x?-1:1,!0)},Y1=(e,t,n)=>{t(t()[0]=0,!0),H(n,!1)},j1=(e,t,n)=>{t(t()[1]=n().invert_y?-1:1,!0)},J1=(e,t,n)=>{t(t()[1]=0,!0),H(n,!1)},Z1=S('<div class="dpad_area svelte-1kfcq8m" role="button"><!> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="svelte-1kfcq8m"><defs><linearGradient gradientUnits="userSpaceOnUse" x1="-819.2" x2="819.2" spreadMethod="pad" gradientTransform="matrix(0 0.05859375 -0.05859375 0 48 48)" id="gradient0"><stop offset="0" stop-color="#333341"></stop><stop offset="1" stop-color="#1E1E23"></stop></linearGradient></defs><g><g><path stroke="none" fill="url(#gradient0)" d="M36 0 L60 0 Q62.5 0 64.25 1.75 66 3.5 66 6 L66 30 90 30 Q92.5 30 94.25 31.75 96 33.5 96 36 L96 60 Q96 62.5 94.25 64.25 92.5 66 90 66 L66 66 66 90 Q66 92.5 64.25 94.25 62.5 96 60 96 L36 96 Q33.5 96 31.75 94.25 30 92.5 30 90 L30 66 6 66 Q3.5 66 1.75 64.25 0 62.5 0 60 L0 36 Q0 33.5 1.75 31.75 3.5 30 6 30 L30 30 30 6 Q30 3.5 31.75 1.75 33.5 0 36 0 M60 6 L36 6 36 36 6 36 6 60 36 60 36 90 60 90 60 60 90 60 90 36 60 36 60 6"></path><path stroke="none" fill="#1E1E23" d="M60 6 L60 36 90 36 90 60 60 60 60 90 36 90 36 60 6 60 6 36 36 36 36 6 60 6"></path><path fill="none" stroke="#151519" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" d="M60 6 L60 36 90 36 90 60 60 60 60 90 36 90 36 60 6 60 6 36 36 36 36 6 60 6"></path><path stroke="none" fill="#3F3F4D" d="M51 48 Q51 49.25 50.1 50.1 49.25 51 48 51 46.75 51 45.85 50.1 45 49.25 45 48 45 46.75 45.85 45.85 46.75 45 48 45 49.25 45 50.1 45.85 51 46.75 51 48"></path><path stroke="none" id="dpad-arrow-up" d="M43.15 20.65 L47.15 14.45 Q47.35 14.1 47.7 14.05 L48.3 14.05 Q48.6 14.1 48.8 14.45 L52.9 20.65 53 21.3 52.7 21.75 52.05 22 43.95 22 43.3 21.75 43 21.3 Q42.95 20.95 43.15 20.65"></path><path stroke="none" id="dpad-arrow-down" d="M43.15 75.35 L43 74.7 43.3 74.25 Q43.55 74 43.95 74 L52.05 74 Q52.4 74 52.7 74.25 L53 74.7 52.9 75.35 48.8 81.55 48.3 81.95 47.7 81.95 47.15 81.55 43.15 75.35"></path><path stroke="none" id="dpad-arrow-right" d="M75.35 43.15 L81.55 47.15 81.95 47.7 81.95 48.3 81.55 48.8 75.35 52.9 74.7 53 74.25 52.7 74 52.05 74 43.95 Q74 43.55 74.25 43.3 L74.7 43 75.35 43.15"></path><path stroke="none" id="dpad-arrow-left" d="M20.65 43.15 L21.3 43 21.75 43.3 22 43.95 22 52.05 21.75 52.7 21.3 53 20.65 52.9 14.45 48.8 14.05 48.3 14.05 47.7 Q14.1 47.35 14.45 47.15 L20.65 43.15"></path></g><g id="dpad-up"><rect width="38" height="30" x="29" y="0" class="svelte-1kfcq8m"></rect><rect class="ripple svelte-1kfcq8m" width="38" height="38" x="29" y="0" rx="6"></rect></g><g id="dpad-left"><rect width="30" height="36" x="0" y="30" class="svelte-1kfcq8m"></rect><rect class="ripple svelte-1kfcq8m" width="38" height="38" x="0" y="29" rx="6"></rect></g><g id="dpad-right"><rect width="30" height="36" x="66" y="30" class="svelte-1kfcq8m"></rect><rect class="ripple svelte-1kfcq8m" width="38" height="38" x="58" y="29" rx="6"></rect></g><g id="dpad-down"><rect width="38" height="30" x="29" y="67" class="svelte-1kfcq8m"></rect><rect class="ripple svelte-1kfcq8m" width="38" height="38" x="29" y="60" rx="6"></rect></g></g></svg></div>');function xt(e,t){r3(t,!0);let n=p(t,"inputMapping",19,()=>({name:"Virtual D-Pad",gamepad:-1,axes_x:0,axes_y:1,button_x_pos:[U.DPAD_RIGHT],button_x_neg:[U.DPAD_LEFT],button_y_pos:[U.DPAD_DOWN],button_y_neg:[U.DPAD_UP],deadzoneX:.25,deadzoneY:.25,key_x_pos:["d"],key_x_neg:["a"],key_y_pos:["s"],key_y_neg:["w"],invert_x:!1,invert_y:!1})),s=p(t,"position",31,()=>K3([0,0])),i=p(t,"context",19,()=>["default"]),o=p(t,"requiresFocus",3,!1),g=p(t,"scale",3,1.5),Q=p(t,"backgroundWidth",3,200),f=p(t,"backgroundHeight",3,200),c=p(t,"style",3,"background-color: rgb(215, 219, 221);"),d,w,h=f3(!1),L=f3(!1),a=f3(!1),l=f3(!1);function r(Z,$){if(!Z)return;const s3=[Math.round($[0]),Math.round($[1])];H(h,s3[0]==-1),H(L,s3[0]==1),H(a,s3[1]==-1),H(l,s3[1]==1),s(s3)}A3(()=>(d=new N2(n(),r,w,o()),H3(i(),d),()=>{d&&S3(i(),d)}));var u=Z1();E3("pointerup",X3,()=>{s([0,0])}),v3(u,"tabindex",0),u.__keydown=()=>{w.focus()},u.__click=()=>{w.focus()};let y;u.__pointerup=()=>{d?.activateGamepad()},u.__touchstart=[H1],u.__touchend=()=>{d?.activateGamepad()},u.__pointerout=()=>{d?.activateGamepad()};var v=q(u);{var _=Z=>{var $=U1();let s3;var P3=q($),B3=q(P3);{var D=F=>{R(F,{type:"generic",input:"axis_left"})},G=F=>{var m=Y3(),i3=Y(m);{var N3=$3=>{R($3,{type:"generic",input:"axis_right"})};P(i3,$3=>{[2,3].includes(n().axes_x)&&[2,3].includes(n().axes_y)&&$3(N3)},!0)}C(F,m)};P(B3,F=>{[0,1].includes(n().axes_x)&&[0,1].includes(n().axes_y)?F(D):F(G,!1)})}I(P3);var z=x(P3,2),V=q(z);{var I3=F=>{R(F,{type:"keyboard_mouse",get input(){return n().key_y_neg[0]}})};P(V,F=>{n().key_y_neg.length>0&&F(I3)})}var y3=x(V,2);{var g3=F=>{R(F,{type:"generic",get input(){return n().button_y_neg[0]}})};P(y3,F=>{n().button_y_neg.length>0&&F(g3)})}I(z);var t3=x(z,2),U3=q(t3);{var J3=F=>{R(F,{type:"keyboard_mouse",get input(){return n().key_y_pos[0]}})};P(U3,F=>{n().key_y_pos.length>0&&F(J3)})}var Z3=x(U3,2);{var B=F=>{R(F,{type:"generic",get input(){return n().button_y_pos[0]}})};P(Z3,F=>{n().button_y_pos.length>0&&F(B)})}I(t3);var n3=x(t3,2),e3=q(n3);{var h3=F=>{var m=S1(),i3=Y(m);R(i3,{type:"keyboard_mouse",get input(){return n().key_x_neg[0]}}),k3(2),C(F,m)};P(e3,F=>{n().key_x_neg.length>0&&F(h3)})}var Q3=x(e3,2);{var q3=F=>{R(F,{type:"generic",get input(){return n().button_x_neg[0]}})};P(Q3,F=>{n().button_x_neg.length>0&&F(q3)})}I(n3);var b3=x(n3,2),u3=q(b3);{var F3=F=>{var m=B1(),i3=Y(m);R(i3,{type:"keyboard_mouse",get input(){return n().key_x_pos[0]}}),k3(2),C(F,m)};P(u3,F=>{n().key_x_pos.length>0&&F(F3)})}var C3=x(u3,2);{var T3=F=>{R(F,{type:"generic",get input(){return n().button_x_pos[0]}})};P(C3,F=>{n().button_x_pos.length>0&&F(T3)})}I(b3),I($),o3(F=>s3=j($,"",s3,F),[()=>({width:Q()+"px",height:f()+"px"})]),m3(2,$,()=>M3),m3(1,$,()=>M3),C(Z,$)};P(v,Z=>{E.showHints&&i().includes(E.context)&&Z(_)})}var b=x(v,2),k=x(q(b)),M=q(k),O=x(q(M),4),A=x(O),J=x(A),N=x(J);I(M);var K=x(M);K.__pointerdown=[W1,s,n],K.__pointerup=[z1,s,a];var L3=x(K);L3.__pointerdown=[V1,s,n],L3.__pointerup=[K1,s,h];var c3=x(L3);c3.__pointerdown=[X1,s,n],c3.__pointerup=[Y1,s,L];var d3=x(c3);d3.__pointerdown=[j1,s,n],d3.__pointerup=[J1,s,l],I(k),I(b),I(u),x3(u,Z=>w=Z,()=>w),o3(Z=>{y=j(u,c(),y,Z),v3(b,"width",96*g()),v3(b,"height",96*g()),v3(k,"transform",`scale(${g()??""})`),X(O,0,p3(s()[1]===-1?"dpad-arrow-pressed":"dpad-arrow"),"svelte-1kfcq8m"),X(A,0,p3(s()[1]===1?"dpad-arrow-pressed":"dpad-arrow"),"svelte-1kfcq8m"),X(J,0,p3(s()[0]===1?"dpad-arrow-pressed":"dpad-arrow"),"svelte-1kfcq8m"),X(N,0,p3(s()[0]===-1?"dpad-arrow-pressed":"dpad-arrow"),"svelte-1kfcq8m"),X(K,0,"dpad-button"+(T(a)?" active":""),"svelte-1kfcq8m"),X(L3,0,"dpad-button"+(T(h)?" active":""),"svelte-1kfcq8m"),X(c3,0,"dpad-button"+(T(L)?" active":""),"svelte-1kfcq8m"),X(d3,0,"dpad-button"+(T(l)?" active":""),"svelte-1kfcq8m")},[()=>({width:Q()+"px",height:f()+"px"})]),C(e,u),a3()}j3(["keydown","click","pointerup","touchstart","touchend","pointerout","pointerdown"]);var $1=S("<!> <!>",1),tt=S("<li> </li>"),nt=S('<div role="button"><!> <ul></ul> <!></div>');function et(e,t){r3(t,!0);let n=p(t,"onpressed",3,void 0),s=p(t,"disabled",3,!1),i=p(t,"wrap",3,!0),o=p(t,"style",3,""),g=p(t,"cssclass",3,"vlist"),Q=p(t,"selectedIndex",15,0),f=p(t,"focussed",15,0),c=p(t,"inputMapping",19,()=>({name:"List",gamepad:-1,axes:[1],sensitivity:.05,buttons:[U.DOWN],buttons_prev:[U.DPAD_UP],buttons_next:[U.DPAD_DOWN],keys_prev:["arrowup","w"],keys_next:["arrowdown","s"],keys:["enter","r"]})),d=p(t,"context",19,()=>["default"]),w=p(t,"requiresFocus",3,!0);function h(k){let M="item";return M+=Q()===k?" selected":"",f()===k&&(M+=" focussed"),M}function L(k){k>=t.items.length&&(k=i()?0:t.items.length-1),k<0&&(k=i()?t.items.length-1:0),f(k)}function a(){Q(f()),n()&&n()(),q2()}let l;function r(){return l}A3(()=>{const k=new G1(c(),M=>{L(f()+M)},l,w(),a);return H3(d(),k),()=>{S3(d(),k)}});var u=nt();v3(u,"tabindex",0);var y=q(u);{var v=k=>{var M=$1(),O=Y(M);V3(O,{text:"↑",get context(){return d()},get keys(){return c().keys_prev},get buttons(){return c().buttons_prev},style:"left: 50%;"});var A=x(O,2);V3(A,{get context(){return d()},get keys(){return c().keys},get buttons(){return c().buttons},style:"left: 50%; top: 50%"}),C(k,M)};P(y,k=>{E.showHints&&d().includes(E.context)&&k(v)})}var _=x(y,2);m5(_,21,()=>t.items,k5,(k,M,O)=>{var A=tt();A.__pointerdown=()=>{s()||(f(O),a())};var J=q(A,!0);I(A),o3(N=>{X(A,1,N,"svelte-1q9b7hc"),b2(J,T(M))},[()=>p3(h(O))]),E3("pointerenter",A,()=>{s()||f(O)}),C(k,A)}),I(_);var b=x(_,2);return V3(b,{text:"↓",get context(){return d()},get keys(){return c().keys_next},get buttons(){return c().buttons_next},style:"left: 50%;"}),I(u),x3(u,k=>l=k,()=>l),o3(()=>{X(u,1,p3(g()),"svelte-1q9b7hc"),j(_,o())}),C(e,u),a3({focusItemAtIndex:L,getElement:r})}j3(["pointerdown"]);function o2(e,t){r3(t,!0);let n=p(t,"disabled",3,!1),s=p(t,"onpressed",3,void 0),i=p(t,"onhold",3,void 0),o=p(t,"onrelease",3,void 0),g=p(t,"inputMapping",19,()=>({name:"Help",gamepad:-1,buttons:[U.VIEW],keys:["h"]})),Q=p(t,"context",19,()=>["default"]);A3(()=>{const f=new C2(g(),void 0,!1,s(),i(),o());return f.disabled=n(),H3(Q(),f),()=>{f&&S3(Q(),f)}}),a3()}class st extends N2{radius;calcPos;constructor(t,n,s,i,o,g=!1){super(t,i,o,g),this.radius=n,this.calcPos=s}onrelease(){let t=this.pos[0],n=this.pos[1];(this.xPos||this.xNeg)&&(t=0),(this.yPos||this.yNeg)&&(n=0),!(t==this.pos[0]&&n==this.pos[1])&&(this.calcPos(t*this.radius,n*this.radius),this.pos=[t,n],this.gamepadActive=!0)}onhold(){let t=this.pos[0],n=this.pos[1];this.xPos?t=1:this.xNeg&&(t=-1),this.yPos?n=1:this.yNeg&&(n=-1),!(t==this.pos[0]&&n==this.pos[1])&&(this.pos=[t,n],this.calcPos(t*this.radius,n*this.radius),this.gamepadActive=!1)}}var it=()=>{},ot=S('<div class="hint hint-up svelte-1fb0oge"><!> <!></div> <div class="hint hint-down svelte-1fb0oge"><!> <!></div>',1),rt=S("<!> <br/>",1),at=S("<!> <br/>",1),lt=S('<div class="hint hint-left svelte-1fb0oge"><!> <!></div> <div class="hint hint-right svelte-1fb0oge"><!> <!></div>',1),Lt=S('<div class="hints_container svelte-1fb0oge"><div class="hint svelte-1fb0oge"><!></div> <!> <!></div>'),dt=S('<div class="joystick_area svelte-1fb0oge" role="button"><!> <div class="joystick_container svelte-1fb0oge"><div class="joystick_back svelte-1fb0oge"></div> <div class="joystick_front svelte-1fb0oge"></div></div></div>');function mt(e,t){r3(t,!0);let n=p(t,"disabled",3,!1),s=p(t,"size",3,100),i=p(t,"backgroundWidth",3,200),o=p(t,"backgroundHeight",3,200),g=p(t,"color",3,"rgb(106, 191, 163)"),Q=p(t,"defaultOpacity",3,.5),f=p(t,"activeOpacity",3,.8),c=p(t,"border",3,1),d=p(t,"borderColor",3,"black"),w=p(t,"position",31,()=>K3([0,0])),h=p(t,"style",3,"background-color: rgb(215, 219, 221);"),L=p(t,"inputMapping",19,()=>({name:"Virtual Joystick",gamepad:-1,axes_x:0,axes_y:1,button_x_pos:[U.DPAD_RIGHT],button_x_neg:[U.DPAD_LEFT],button_y_pos:[U.DPAD_DOWN],button_y_neg:[U.DPAD_UP],deadzoneX:.05,deadzoneY:.05,key_x_pos:["d"],key_x_neg:["a"],key_y_pos:["s"],key_y_neg:["w"],invert_x:!1,invert_y:!1})),a=p(t,"context",19,()=>["default"]),l=p(t,"requiresFocus",3,!1);const r=s()/2;let u=!1,y,v,_=f3(K3(Q()));function b(){return y}function k(D){if(n()||!L().gamepad||!u||!D.target)return;const G=D.target.getBoundingClientRect(),z=D.x-G.x,V=D.y-G.y;v&&(v.gamepadActive=!1,M(z,V))}function M(D,G){let z=D-i()/2,V=G-o()/2;O(z,V)}function O(D,G){L().disable_axes&&(L().disable_axes.includes("x")&&(D=0),L().disable_axes.includes("y")&&(G=0));const z=O5(D,G),V=G5(D,G);let I3=S5(z,r),y3=H5(I3,V),g3=y3[0]/r,t3=y3[1]/r;if(Math.abs(g3)<L().deadzoneX&&Math.abs(t3)<L().deadzoneY){w([0,0]),H(_,Q());return}g3=Math.abs(g3)<1e-6?0:g3,t3=Math.abs(t3)<1e-6?0:t3,H(_,f()),w([g3,t3])}function A(){u=!1,H(_,Q()),w([0,0])}function J(D,G){H(_,D?f():Q(),!0),L().disable_axes&&(L().disable_axes.includes("x")&&(G[0]=0),L().disable_axes.includes("y")&&(G[1]=0)),w(G)}A3(()=>(v=new st(L(),r,O,J,y,l()),H3(a(),v),()=>{v&&S3(a(),v)}));var N=dt();E3("pointerup",X3,A),v3(N,"tabindex",0),N.__keydown=()=>{y.focus()},N.__click=()=>{y.focus()};let K;N.__pointerdown=D=>{n()||(D.stopImmediatePropagation(),u=!0,k(D))},N.__pointerup=()=>{v?.activateGamepad()},N.__pointermove=k,N.__touchstart=[it],N.__touchend=()=>{v?.activateGamepad()},N.__pointerout=()=>{v?.activateGamepad()};var L3=q(N);{var c3=D=>{var G=Lt();let z;var V=q(G),I3=q(V);{var y3=B=>{R(B,{type:"generic",input:"axis_left"})},g3=B=>{var n3=Y3(),e3=Y(n3);{var h3=Q3=>{R(Q3,{type:"generic",input:"axis_right"})};P(e3,Q3=>{[2,3].includes(L().axes_x)&&[2,3].includes(L().axes_y)&&Q3(h3)},!0)}C(B,n3)};P(I3,B=>{[0,1].includes(L().axes_x)&&[0,1].includes(L().axes_y)?B(y3):B(g3,!1)})}I(V);var t3=x(V,2);{var U3=B=>{var n3=ot(),e3=Y(n3),h3=q(e3);{var Q3=m=>{R(m,{type:"keyboard_mouse",get input(){return L().key_y_neg[0]}})};P(h3,m=>{L().key_y_neg.length>0&&m(Q3)})}var q3=x(h3,2);{var b3=m=>{R(m,{type:"generic",get input(){return L().button_y_neg[0]}})};P(q3,m=>{L().button_y_neg.length>0&&m(b3)})}I(e3);var u3=x(e3,2),F3=q(u3);{var C3=m=>{R(m,{type:"keyboard_mouse",get input(){return L().key_y_pos[0]}})};P(F3,m=>{L().key_y_pos.length>0&&m(C3)})}var T3=x(F3,2);{var F=m=>{R(m,{type:"generic",get input(){return L().button_y_pos[0]}})};P(T3,m=>{L().button_y_pos.length>0&&m(F)})}I(u3),C(B,n3)};P(t3,B=>{L().disable_axes?.includes("y")||B(U3)})}var J3=x(t3,2);{var Z3=B=>{var n3=lt(),e3=Y(n3),h3=q(e3);{var Q3=m=>{var i3=rt(),N3=Y(i3);R(N3,{type:"keyboard_mouse",get input(){return L().key_x_neg[0]}}),k3(2),C(m,i3)};P(h3,m=>{L().key_x_neg.length>0&&m(Q3)})}var q3=x(h3,2);{var b3=m=>{R(m,{type:"generic",get input(){return L().button_x_neg[0]}})};P(q3,m=>{L().button_x_neg.length>0&&m(b3)})}I(e3);var u3=x(e3,2),F3=q(u3);{var C3=m=>{var i3=at(),N3=Y(i3);R(N3,{type:"keyboard_mouse",get input(){return L().key_x_pos[0]}}),k3(2),C(m,i3)};P(F3,m=>{L().key_x_pos.length>0&&m(C3)})}var T3=x(F3,2);{var F=m=>{R(m,{type:"generic",get input(){return L().button_x_pos[0]}})};P(T3,m=>{L().button_x_pos.length>0&&m(F)})}I(u3),C(B,n3)};P(J3,B=>{L().disable_axes?.includes("x")||B(Z3)})}I(G),o3(B=>z=j(G,"",z,B),[()=>({width:i()+"px",height:o()+"px"})]),m3(2,G,()=>M3),m3(1,G,()=>M3),C(D,G)};P(L3,D=>{E.showHints&&a().includes(E.context)&&D(c3)})}var d3=x(L3,2);let Z;var $=q(d3);let s3;var P3=x($,2);let B3;return I(d3),I(N),x3(N,D=>y=D,()=>y),o3((D,G,z,V)=>{K=j(N,h(),K,D),Z=j(d3,"",Z,G),s3=j($,"",s3,z),B3=j(P3,"",B3,V)},[()=>({width:i()+"px",height:o()+"px"}),()=>({left:(i()-s())/2+"px",top:(o()-s())/2+"px"}),()=>({width:s()+"px",height:s()+"px",background:g(),opacity:T(_),transition:"none",border:c()>0?c()+"px solid "+d():0}),()=>({left:w()[0]*r+"px",top:w()[1]*r+"px","margin-top":r/2+"px","margin-left":r/2+"px",transition:"opacity 0.2s ease-in-out",width:r+"px",height:r+"px",background:g(),opacity:T(_),border:c()>0?c()+"px solid "+d():0})]),E3("pointerleave",N,()=>{v?.activateGamepad()}),C(e,N),a3({getElement:b})}j3(["keydown","click","pointerdown","pointerup","pointermove","touchstart","touchend","pointerout"]);var gt=S('<div id="sidenav" class="sidenav"><!> <!></div>');function ht(e,t){r3(t,!0);let n=p(t,"open",15,!1);const s=["Main","Joystick","D-Pad","List","Slider"],i="/svelte-gamepad-virtual-joystick",o={Main:"/",Joystick:"/joystick","D-Pad":"/d-pad",List:"/list",Slider:"/slider"};let g;function Q(){return g.getElement()}let f=f3(0);function c(){const a=s[T(f)],l=`${i}${o[a]}`;n(!1),t.mgr?.changeContext("default"),_5(l)}var d=gt();let w;var h=q(d);{let a=O3(()=>({name:"close side nav",gamepad:-1,buttons:[U.LEFT],keys:["x"]}));T2(h,{cssclassWrapper:"closebtn",onpressed:()=>{n(!1),t.mgr?.changeContext("default")},context:["nav"],get inputMapping(){return T(a)},children:(l,r)=>{k3();var u=y2("×");C(l,u)},$$slots:{default:!0}})}var L=x(h,2);{let a=O3(()=>!n());x3(et(L,{context:["nav"],requiresFocus:!1,get disabled(){return T(a)},onpressed:c,get items(){return s},wrap:!0,get selectedIndex(){return T(f)},set selectedIndex(l){H(f,l,!0)}}),l=>g=l,()=>g)}return I(d),o3(a=>w=j(d,"",w,a),[()=>({width:n()?"250px":"0"})]),C(e,d),a3({getListElement:Q})}var Qt=S('<div class="help-modal"><div class="help-content"><!> or <!> toggle help.</div></div>'),wt=S("<!> <!> <!> <!>",1);function ft(e,t){r3(t,!0);let n=p(t,"showInfo",11,!1);const s={name:"Hint",gamepad:-1,buttons:[U.VIEW],keys:["h"]};var i=wt(),o=Y(i);o2(o,{context:["default","my_ctx","nav"],onpressed:()=>{E.showHints=!E.showHints},get inputMapping(){return s}});var g=x(o,2);{let d=O3(()=>({name:"Focus next",gamepad:-1,buttons:[U.TRIGGER_RIGHT],keys:["k"]}));o2(g,{onpressed:()=>{q2()},get inputMapping(){return T(d)}})}var Q=x(g,2);{let d=O3(()=>({name:"Focus previous",gamepad:-1,buttons:[U.TRIGGER_LEFT],keys:["i"]}));o2(Q,{onpressed:()=>{B5()},get inputMapping(){return T(d)}})}var f=x(Q,2);{var c=d=>{var w=Qt();j(w,"",{},{"pointer-events":"none","z-index":"999"});var h=q(w),L=q(h);R(L,{type:"keyboard_mouse",get input(){return s.keys[0]},color:"#FFFFFF"});var a=x(L,2);R(a,{type:"ps4",get input(){return s.buttons[0]},color:"#FFFFFF"}),k3(),I(h),I(w),m3(3,w,()=>M3,()=>({duration:300})),C(d,w)};P(f,d=>{n()&&d(c)})}C(e,i),a3()}var ct=S("<!> <!> <!> <!>",1);function Mt(e,t){r3(t,!0);let n=p(t,"open",15,!1),s=p(t,"showInfo",11,!1),i=p(t,"mgr",15),o;var g=ct(),Q=Y(g);x3(O1(Q,{}),w=>i(w),()=>i());var f=x(Q,2);ft(f,{get showInfo(){return s()}});var c=x(f,2);x3(ht(c,{get mgr(){return i()},get open(){return n()},set open(w){n(w)}}),w=>o=w,()=>o);var d=x(c,2);{let w=O3(()=>({name:"side nav",gamepad:-1,buttons:[U.UP],keys:["t"]}));T2(d,{onpressed:()=>{n(!0),o.getListElement().focus(),i()?.changeContext("nav")},get inputMapping(){return T(w)},children:(h,L)=>{k3();var a=y2("side nav");C(h,a)},$$slots:{default:!0}})}C(e,g),a3()}export{T2 as B,xt as D,U as G,V3 as H,h2 as I,mt as J,et as L,Mt as M,kt as a,v3 as b,q2 as f,H3 as r,j as s,G3 as t,S3 as u};
