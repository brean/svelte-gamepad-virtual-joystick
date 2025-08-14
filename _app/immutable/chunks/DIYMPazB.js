import"./DsnmJJEf.js";import{Q as g2,I as S2,O as M3,F as H,aj as w3,J as S3,g as P,a1 as B2,L as z2,M as U2,N as i2,P as D3,W as a3,ak as d2,ao as V2,R as B3,S as W2,D as K2,aG as X2,H as Y2,aH as o2,as as h2,ag as j2,aI as J2,T as Q2,V as Z2,aJ as $2,aK as t5,aL as R3,aM as w2,am as f2,aN as n5,ar as e5,aO as s5,a3 as W3,t as Z,aP as i5,ap as o5,an as r5,au as r2,aQ as a5,aR as l5,aS as L5,aT as g5,aU as d5,aV as h5,aW as Q5,K as w5,aX as f5,aY as p5,X as u5,v as c5,aZ as v5,a_ as F5,a$ as k5,ac as p2,b0 as x5,Y as _5,b1 as Q3,p as b3,j as X,h as R,b as n3,c as K3,f as o3,a as D,k as Y,d as S,i as N,r as C,e as M,s as m5,b2 as E3,n as f3,l as u2,u as p3}from"./BJWlXNjI.js";import{p as u,i as G,b as l3}from"./BKPxjZPp.js";import{a as M5,s as c2,d as A3,o as g3,e as L3}from"./BSONIcSF.js";import{g as y5}from"./DJXAkb1G.js";function b5(e,t){return t}function E5(e,t,n){for(var s=e.items,i=[],o=t.length,L=0;L<o;L++)n5(t[L].e,i,!0);var Q=o>0&&i.length===0&&n!==null;if(Q){var w=n.parentNode;e5(w),w.append(n),s.clear(),J(e,t[0].prev,t[o-1].next)}s5(i,()=>{for(var p=0;p<o;p++){var g=t[p];Q||(s.delete(g.k),J(e,g.prev,g.next)),w2(g.e,!Q)}})}function A5(e,t,n,s,i,o=null){var L=e,Q={flags:t,items:new Map,first:null};{var w=e;L=H?M3(w3(w)):w.appendChild(g2())}H&&S3();var p=null,g=!1,f=new Map,d=B2(()=>{var a=n();return j2(a)?a:a==null?[]:h2(a)}),h,r;function l(){P5(r,h,Q,f,L,i,t,s,n),o!==null&&(h.length===0?p?Q2(p):p=B3(()=>o(L)):p!==null&&Z2(p,()=>{p=null}))}S2(()=>{r??=W3,h=P(d);var a=h.length;if(g&&a===0)return;g=a===0;let c=!1;if(H){var m=z2(L)===U2;m!==(a===0)&&(L=i2(),M3(L),D3(!1),c=!0)}if(H){for(var v=null,F,E=0;E<a;E++){if(a3.nodeType===d2&&a3.data===V2){L=a3,c=!0,D3(!1);break}var k=h[E],x=s(k,E);F=z3(a3,Q,v,null,k,x,E,i,t,n),Q.items.set(x,F),v=F}a>0&&M3(i2())}if(H)a===0&&o&&(p=B3(()=>o(L)));else if(W2()){var I=new Set,y=K2;for(E=0;E<a;E+=1){k=h[E],x=s(k,E);var U=Q.items.get(x)??f.get(x);U?v2(U,k,E):(F=z3(null,Q,null,null,k,x,E,i,t,n,!0),f.set(x,F)),I.add(x)}for(const[A,B]of Q.items)I.has(A)||y.skipped_effects.add(B.e);y.add_callback(l)}else l();c&&D3(!0),P(d)}),H&&(L=a3)}function P5(e,t,n,s,i,o,L,Q,w){var p=t.length,g=n.items,f=n.first,d=f,h,r=null,l=[],a=[],c,m,v,F;for(F=0;F<p;F+=1){if(c=t[F],m=Q(c,F),v=g.get(m),v===void 0){var E=s.get(m);if(E!==void 0){s.delete(m),g.set(m,E);var k=r?r.next:d;J(n,r,E),J(n,E,k),q3(E,k,i),r=E}else{var x=d?d.e.nodes_start:i;r=z3(x,n,r,r===null?n.first:r.next,c,m,F,o,L,w)}g.set(m,r),l=[],a=[],d=r.next;continue}if(v2(v,c,F),(v.e.f&R3)!==0&&Q2(v.e),v!==d){if(h!==void 0&&h.has(v)){if(l.length<a.length){var I=a[0],y;r=I.prev;var U=l[0],A=l[l.length-1];for(y=0;y<l.length;y+=1)q3(l[y],I,i);for(y=0;y<a.length;y+=1)h.delete(a[y]);J(n,U.prev,A.next),J(n,r,U),J(n,A,I),d=I,r=A,F-=1,l=[],a=[]}else h.delete(v),q3(v,d,i),J(n,v.prev,v.next),J(n,v,r===null?n.first:r.next),J(n,r,v),r=v;continue}for(l=[],a=[];d!==null&&d.k!==m;)(d.e.f&R3)===0&&(h??=new Set).add(d),a.push(d),d=d.next;if(d===null)continue;v=d}l.push(v),r=v,d=v.next}if(d!==null||h!==void 0){for(var B=h===void 0?[]:h2(h);d!==null;)(d.e.f&R3)===0&&B.push(d),d=d.next;var x3=B.length;if(x3>0){var P3=p===0?i:null;E5(n,B,P3)}}e.first=n.first&&n.first.e,e.last=r&&r.e;for(var d3 of s.values())w2(d3.e);s.clear()}function v2(e,t,n,s){X2(e.v,t),e.i=n}function z3(e,t,n,s,i,o,L,Q,w,p,g){var f=(w&$2)!==0,d=(w&t5)===0,h=f?d?Y2(i,!1,!1):o2(i):i,r=(w&J2)===0?L:o2(L),l={i:r,v:h,k:o,a:null,e:null,prev:n,next:s};try{if(e===null){var a=document.createDocumentFragment();a.append(e=g2())}return l.e=B3(()=>Q(e,h,r,p),H),l.e.prev=n&&n.e,l.e.next=s&&s.e,n===null?g||(t.first=l):(n.next=l,n.e.next=l.e),s!==null&&(s.prev=l,s.e.prev=l.e),l}finally{}}function q3(e,t,n){for(var s=e.next?e.next.e.nodes_start:n,i=t?t.e.nodes_start:n,o=e.e.nodes_start;o!==null&&o!==s;){var L=f2(o);i.before(o),o=L}}function J(e,t,n){t===null?e.first=n:(t.next=n,t.e.next=n&&n.e),n!==null&&(n.prev=t,n.e.prev=t&&t.e)}function I5(e,t,n=!1,s=!1,i=!1){var o=e,L="";Z(()=>{var Q=W3;if(L===(L=t()??"")){H&&S3();return}if(Q.nodes_start!==null&&(i5(Q.nodes_start,Q.nodes_end),Q.nodes_start=Q.nodes_end=null),L!==""){if(H){a3.data;for(var w=S3(),p=w;w!==null&&(w.nodeType!==d2||w.data!=="");)p=w,w=f2(w);if(w===null)throw o5(),r5;r2(a3,p),o=M3(w);return}var g=L+"";n?g=`<svg>${g}</svg>`:s&&(g=`<math>${g}</math>`);var f=a5(g);if((n||s)&&(f=w3(f)),r2(w3(f),f.lastChild),n||s)for(;w3(f);)o.before(w3(f));else o.before(f)}})}function F2(e){var t,n,s="";if(typeof e=="string"||typeof e=="number")s+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=F2(e[t]))&&(s&&(s+=" "),s+=n)}else for(n in e)e[n]&&(s&&(s+=" "),s+=n);return s}function C5(){for(var e,t,n=0,s="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=F2(e))&&(s&&(s+=" "),s+=t);return s}function s3(e){return typeof e=="object"?C5(e):e??""}function T5(e,t,n){var s=e==null?"":""+e;return t&&(s=s?s+" "+t:t),s===""?null:s}function a2(e,t=!1){var n=t?" !important;":";",s="";for(var i in e){var o=e[i];o!=null&&o!==""&&(s+=" "+i+": "+o+n)}return s}function O3(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function N5(e,t){if(t){var n="",s,i;if(Array.isArray(t)?(s=t[0],i=t[1]):s=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var o=!1,L=0,Q=!1,w=[];s&&w.push(...Object.keys(s).map(O3)),i&&w.push(...Object.keys(i).map(O3));var p=0,g=-1;const l=e.length;for(var f=0;f<l;f++){var d=e[f];if(Q?d==="/"&&e[f-1]==="*"&&(Q=!1):o?o===d&&(o=!1):d==="/"&&e[f+1]==="*"?Q=!0:d==='"'||d==="'"?o=d:d==="("?L++:d===")"&&L--,!Q&&o===!1&&L===0){if(d===":"&&g===-1)g=f;else if(d===";"||f===l-1){if(g!==-1){var h=O3(e.substring(p,g).trim());if(!w.includes(h)){d!==";"&&f++;var r=e.substring(p,f).trim();n+=" "+r+";"}}p=f+1,g=-1}}}}return s&&(n+=a2(s)),i&&(n+=a2(i,!0)),n=n.trim(),n===""?null:n}return e==null?null:String(e)}function V(e,t,n,s,i,o){var L=e.__className;if(H||L!==n||L===void 0){var Q=T5(n,s);(!H||Q!==e.getAttribute("class"))&&(Q==null?e.removeAttribute("class"):t?e.className=Q:e.setAttribute("class",Q)),e.__className=n}return o}function G3(e,t={},n,s){for(var i in n){var o=n[i];t[i]!==o&&(n[i]==null?e.style.removeProperty(i):e.style.setProperty(i,o,s))}}function K(e,t,n,s){var i=e.__style;if(H||i!==t){var o=N5(t,s);(!H||o!==e.getAttribute("style"))&&(o==null?e.removeAttribute("style"):e.style.cssText=o),e.__style=t}else s&&(Array.isArray(s)?(G3(e,n?.[0],s[0]),G3(e,n?.[1],s[1],"important")):G3(e,n,s));return s}const D5=Symbol("is custom element"),R5=Symbol("is html");function kt(e){if(H){var t=!1,n=()=>{if(!t){if(t=!0,e.hasAttribute("value")){var s=e.value;i3(e,"value",null),e.value=s}if(e.hasAttribute("checked")){var i=e.checked;i3(e,"checked",null),e.checked=i}}};e.__on_r=n,d5(n),h5()}}function i3(e,t,n,s){var i=q5(e);H&&(i[t]=e.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&e.nodeName==="LINK")||i[t]!==(i[t]=n)&&(t==="loading"&&(e[Q5]=n),n==null?e.removeAttribute(t):typeof n!="string"&&O5(e).includes(t)?e[t]=n:e.setAttribute(t,n))}function q5(e){return e.__attributes??={[D5]:e.nodeName.includes("-"),[R5]:e.namespaceURI===l5}}var l2=new Map;function O5(e){var t=l2.get(e.nodeName);if(t)return t;l2.set(e.nodeName,t=[]);for(var n,s=e,i=Element.prototype;i!==s;){n=g5(s);for(var o in n)n[o].set&&t.push(o);s=L5(s)}return t}const G5=()=>performance.now(),t3={tick:e=>requestAnimationFrame(e),now:()=>G5(),tasks:new Set};function k2(){const e=t3.now();t3.tasks.forEach(t=>{t.c(e)||(t3.tasks.delete(t),t.f())}),t3.tasks.size!==0&&t3.tick(k2)}function H5(e){let t;return t3.tasks.size===0&&t3.tick(k2),{promise:new Promise(n=>{t3.tasks.add(t={c:e,f:n})}),abort(){t3.tasks.delete(t)}}}function m3(e,t){p2(()=>{e.dispatchEvent(new CustomEvent(t))})}function S5(e){if(e==="float")return"cssFloat";if(e==="offset")return"cssOffset";if(e.startsWith("--"))return e;const t=e.split("-");return t.length===1?t[0]:t[0]+t.slice(1).map(n=>n[0].toUpperCase()+n.slice(1)).join("")}function L2(e){const t={},n=e.split(";");for(const s of n){const[i,o]=s.split(":");if(!i||o===void 0)break;const L=S5(i.trim());t[L]=o.trim()}return t}const B5=e=>e;function u3(e,t,n,s){var i=(e&F5)!==0,o=(e&k5)!==0,L=i&&o,Q=(e&v5)!==0,w=L?"both":i?"in":"out",p,g=t.inert,f=t.style.overflow,d,h;function r(){return p2(()=>p??=n()(t,s?.()??{},{direction:w}))}var l={is_global:Q,in(){if(t.inert=g,!i){h?.abort(),h?.reset?.();return}o||d?.abort(),m3(t,"introstart"),d=U3(t,r(),h,1,()=>{m3(t,"introend"),d?.abort(),d=p=void 0,t.style.overflow=f})},out(v){if(!o){v?.(),p=void 0;return}t.inert=!0,m3(t,"outrostart"),h=U3(t,r(),d,0,()=>{m3(t,"outroend"),v?.()})},stop:()=>{d?.abort(),h?.abort()}},a=W3;if((a.transitions??=[]).push(l),i&&M5){var c=Q;if(!c){for(var m=a.parent;m&&(m.f&w5)!==0;)for(;(m=m.parent)&&(m.f&f5)===0;);c=!m||(m.f&p5)!==0}c&&u5(()=>{c5(()=>l.in())})}}function U3(e,t,n,s,i){var o=s===1;if(x5(t)){var L,Q=!1;return _5(()=>{if(!Q){var a=t({direction:o?"in":"out"});L=U3(e,a,n,s,i)}}),{abort:()=>{Q=!0,L?.abort()},deactivate:()=>L.deactivate(),reset:()=>L.reset(),t:()=>L.t()}}if(n?.deactivate(),!t?.duration)return i(),{abort:Q3,deactivate:Q3,reset:Q3,t:()=>s};const{delay:w=0,css:p,tick:g,easing:f=B5}=t;var d=[];if(o&&n===void 0&&(g&&g(0,1),p)){var h=L2(p(0,1));d.push(h,h)}var r=()=>1-s,l=e.animate(d,{duration:w,fill:"forwards"});return l.onfinish=()=>{l.cancel();var a=n?.t()??1-s;n?.abort();var c=s-a,m=t.duration*Math.abs(c),v=[];if(m>0){var F=!1;if(p)for(var E=Math.ceil(m/16.666666666666668),k=0;k<=E;k+=1){var x=a+c*f(k/E),I=L2(p(x,1-x));v.push(I),F||=I.overflow==="hidden"}F&&(e.style.overflow="hidden"),r=()=>{var y=l.currentTime;return a+c*f(y/m)},g&&H5(()=>{if(l.playState!=="running")return!1;var y=r();return g(y,1-y),!0})}l=e.animate(v,{duration:m,fill:"forwards"}),l.onfinish=()=>{r=()=>s,g?.(s,1-s),i()}},{abort:()=>{l&&(l.cancel(),l.effect=null,l.onfinish=Q3)},deactivate:()=>{i=Q3},reset:()=>{s===0&&g?.(1,0)},t:()=>r()}}class O{static DOWN=0;static RIGHT=1;static LEFT=2;static UP=3;static BUMPER_LEFT=4;static BUMPER_RIGHT=5;static TRIGGER_LEFT=6;static TRIGGER_RIGHT=7;static VIEW=8;static MENU=9;static AXIS_BUTTON_LEFT=10;static AXIS_BUTTON_RIGHT=11;static DPAD_UP=12;static DPAD_DOWN=13;static DPAD_LEFT=14;static DPAD_RIGHT=15;static HOME=16;static CROSS=0;static CIRCLE=1;static SQUARE=2;static TRIANGLE=3;static L1=4;static R1=5;static L2=6;static R2=7;static SHARE=8;static OPTIONS=9;static PS=16;static A=0;static B=1;static X=2;static Y=3;static LB=4;static RB=5;static TL=6;static TR=7;static BACK=8;static START=9;static XBOX=16}const z5=(e,t)=>Math.sqrt(e**2+t**2),U5=(e,t)=>Math.atan2(t,e),V5=(e,t)=>[e*Math.cos(t),e*Math.sin(t)],W5=(e,t)=>Math.min(Math.max(-t,e),t);function c3(e,t){return e.gamepad===-1||e.gamepad===t.index}function x2(e){const t=document.activeElement,n=Array.from(document.querySelectorAll('input, select, textarea, button, [tabindex]:not([tabindex="-1"])'));if(!t)return;let s=n.indexOf(t);for(let i=1;i<n.length;i++){let o=(s+i*e)%n.length;o<0&&(o=n.length-1,s=o);const L=n[o];if(!L.hasAttribute("disabled"))return L}}function K5(){const e=x2(-1);e&&e.focus()}function _2(){const e=x2(1);e&&e.focus()}class X3{focusElement;requiresFocus;input;disabled=!1;onpressedCallback;onholdCallback;onreleaseCallback;consumePress;constructor(t,n,s=!1,i,o,L,Q=!1){this.onpressedCallback=i,this.onholdCallback=o,this.onreleaseCallback=L,this.focusElement=n,this.input=t,this.requiresFocus=s,this.consumePress=Q}onpressed(){return this.disabled?!1:(this.onpressedCallback&&this.onpressedCallback(),this.consumePress)}onhold(){this.onholdCallback&&this.onholdCallback()}onrelease(){this.onreleaseCallback&&this.onreleaseCallback()}thisGamepadButton(t,n){return c3(this.input,t)}onbuttonpressed(t,n){return this.onpressed()}onbuttonrelease(t,n){this.onrelease()}onbuttonhold(t,n){this.onhold()}onupdate(t){}thisKey(t){return!1}onkeypressed(t){return this.thisKey(t)&&this.onpressed()}onkeyrelease(t){this.thisKey(t)&&this.onrelease()}onkeyhold(t){this.thisKey(t)&&this.onhold()}}const b=b3({components:{},activeComponents:[],showHints:!1,context:"default"}),V3=e=>{b.activeComponents.includes(e)||b.activeComponents.push(e)},F3=(e,t)=>{e.forEach(n=>{b.components[n]||(b.components[n]=[]),b.components[n].push(t)}),!t.requiresFocus&&e.includes("default")&&V3(t),t.focusElement&&t.requiresFocus&&(t.focusElement.addEventListener("focus",()=>{e.includes(b.context)&&V3(t)}),t.focusElement.addEventListener("blur",()=>{b.activeComponents.splice(b.activeComponents.indexOf(t),1)}))},k3=(e,t)=>{e.forEach(n=>{b.components[n]&&b.components[n].splice(b.components[n].indexOf(t),1)}),b.activeComponents.includes(t)&&b.activeComponents.slice(b.activeComponents.indexOf(t))},X5=e=>e;function v3(e,{delay:t=0,duration:n=400,easing:s=X5}={}){const i=+getComputedStyle(e).opacity;return{delay:t,duration:n,easing:s,css:o=>`opacity: ${o*i}`}}const Y5=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
`,j5=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
`,J5=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
`,Z5=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
`,$5=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 L48 8 M39 26 L39 23 38 22 35 22 25 38 25 41 26 42 29 42 39 26"/>
  </g>
</svg>`,t4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 M30 24 L30 28.6 26.05 26.3 24.05 29.75 28 32.05 24.05 34.3 26.05 37.75 30 35.5 30 40 34 40 34 35.5 37.9 37.75 39.9 34.3 35.95 32.05 39.9 29.75 37.9 26.3 34 28.55 34 24 30 24"/>
  </g>
</svg>`,n4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q9.55 56 8.3 50.8 8 49.55 8 48 L8 16 Q8 14.45 8.3 13.2 9.55 8 16 8 M31 36 Q29 36 29 38 L29 40 Q29 42 31 42 L33 42 33 43 32.7 43.7 32 44 Q31.6 44 31.3 43.7 L29.9 45.1 Q30.8 46 32 46 33.2 46 34.1 45.1 35 44.2 35 43 L35 40.25 35 40 35 38 Q35 36 33 36 L31 36"/>
  </g>
</svg>`,e4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M31 36 Q29 36 29 38 L29 40 Q29 42 31 42 L33 42 Q35 42 35 40 L35 38 Q35 36 33 36 L31 36"/>
  </g>
</svg>`,s4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M31 22 Q29 22 29 24 L29 26 Q29 28 31 28 L33 28 Q35 28 35 26 L35 24 Q35 22 33 22 L31 22 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M31 36 Q29 36 29 38 L29 40 Q29 42 31 42 L33 42 Q35 42 35 40 L35 38 Q35 36 33 36 L31 36"/>
  </g>
</svg>`,i4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M31 36 Q29 36 29 38 L29 40 Q29 42 31 42 L33 42 33 43 32.7 43.7 32 44 Q31.6 44 31.3 43.7 L29.9 45.1 Q30.8 46 32 46 33.2 46 34.1 45.1 35 44.2 35 43 L35 40.25 35 40 35 38 Q35 36 33 36 L31 36 M31 22 Q29 22 29 24 L29 26 Q29 28 31 28 L33 28 Q35 28 35 26 L35 24 Q35 22 33 22 L31 22"/>
  </g>
</svg>`,o4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M32 26 L36 26 36 22 29 22 28 23 28 41 29 42 36 42 36 38 32 38 32 26"/>
  </g>
</svg>`,r4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M32 26 L32 38 28 38 28 42 35 42 36 41 36 23 35 22 28 22 28 26 32 26"/>
  </g>
</svg>`,a4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M40 30 L34 30 34 24 30 24 30 30 24 30 24 34 30 34 30 40 34 40 34 34 40 34 40 30 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 52.9 53 54.8 51.1 56 48 56 L16 56 Q12.9 56 11 54.8 8 52.9 8 48 L8 16 Q8 8 16 8"/>
  </g>
</svg>`,l4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M40 30 L24 30 24 34 40 34 40 30"/>
  </g>
</svg>`,L4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q9.55 56 8.3 50.8 8 49.55 8 48 L8 16 Q8 14.45 8.3 13.2 9.55 8 16 8 M27.5 28 Q24 28 21.55 30.65 20.95 31.25 21 32.1 21.05 32.9 21.65 33.5 22.25 34.05 23.1 34 23.9 33.95 24.5 33.35 25.7 32 27.5 32 29.3 32 30.55 33.35 33 36 36.5 36 40 36 42.5 33.35 43.05 32.75 43 31.95 42.95 31.1 42.35 30.55 41.75 29.95 40.95 30 40.1 30.05 39.55 30.65 38.3 32 36.5 32 34.7 32 33.5 30.65 31 28 27.5 28"/>
  </g>
</svg>`,g4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M26 41 L26 37 22 37 22 44 23 45 41 45 42 44 42 37 38 37 38 41 26 41"/>
  </g>
</svg>`,d4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M36 20 Q34 20 34 22 L34 28 Q34 30 36 30 L38 30 Q40 30 40 28 L40 22 Q40 20 38 20 L36 20 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M26 20 Q24 20 24 22 L24 28 Q24 30 26 30 L28 30 Q30 30 30 28 L30 22 Q30 20 28 20 L26 20"/>
  </g>
</svg>`,h4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 16 L48 16 Q56 16 56 24 L56 40 Q56 44.9 53 46.8 51.1 48 48 48 L16 48 Q12.9 48 11 46.8 8 44.9 8 40 L8 24 Q8 16 16 16 M20 32 L26 38 28 38 28 34 44 34 44 30 28 30 28 26 26 26 20 32"/>
  </g>
</svg>`,Q4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 14 L48 14 Q56 14 56 22 L56 41 Q56 49 48 49 L16 49 Q8 49 8 41 L8 22 Q8 14 16 14 M36 42 L36 38 28 38 28 42 36 42 M32 20 L24 28 24 30 28 30 28 36 36 36 36 30 40 30 40 28 32 20"/>
  </g>
</svg>`,w4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M44 31 L44 45 47 45 47 31 44 31 M48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 M23 26 L29 32 31 32 31 28 47 28 47 24 31 24 31 20 29 20 23 26 M41 38 L35 32 33 32 33 36 17 36 17 40 33 40 33 44 35 44 41 38 M17 19 L17 33 20 33 20 19 17 19"/>
  </g>
</svg>`,f4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 16 L48 16 Q56 16 56 24 L56 40 Q56 44.9 53 46.8 51.1 48 48 48 L16 48 Q12.9 48 11 46.8 8 44.9 8 40 L8 24 Q8 16 16 16 M32 24 L24 32 24 34 28 34 28 40 36 40 36 34 40 34 40 32 32 24"/>
  </g>
</svg>`,p4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M29 17 L35 17 Q39 17 39 21 L39 27 Q39 31 35 31 L29 31 Q25 31 25 27 L25 21 Q25 17 29 17 M45 33 L51 33 Q55 33 55 37 L55 43 Q55 47 51 47 L45 47 Q41 47 41 43 L41 37 Q41 33 45 33 M29 33 L35 33 Q39 33 39 37 L39 43 Q39 47 35 47 L29 47 Q25 47 25 43 L25 37 Q25 33 29 33"/>
    <path stroke="none" fill="#E73246" d="M13 33 L19 33 Q23 33 23 37 L23 43 Q23 47 19 47 L13 47 Q9 47 9 43 L9 37 Q9 33 13 33"/>
  </g>
</svg>`,u4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M29 17 L35 17 Q39 17 39 21 L39 27 Q39 31 35 31 L29 31 Q25 31 25 27 L25 21 Q25 17 29 17 M29 33 L35 33 Q39 33 39 37 L39 43 Q39 47 35 47 L29 47 Q25 47 25 43 L25 37 Q25 33 29 33 M13 33 L19 33 Q23 33 23 37 L23 43 Q23 47 19 47 L13 47 Q9 47 9 43 L9 37 Q9 33 13 33"/>
    <path stroke="none" fill="#E73246" d="M45 33 L51 33 Q55 33 55 37 L55 43 Q55 47 51 47 L45 47 Q41 47 41 43 L41 37 Q41 33 45 33"/>
  </g>
</svg>`,c4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#E73246" d="M29 17 L35 17 Q39 17 39 21 L39 27 Q39 31 35 31 L29 31 Q25 31 25 27 L25 21 Q25 17 29 17"/>
    <path stroke="none" fill="#FFFFFF" d="M45 33 L51 33 Q55 33 55 37 L55 43 Q55 47 51 47 L45 47 Q41 47 41 43 L41 37 Q41 33 45 33 M29 33 L35 33 Q39 33 39 37 L39 43 Q39 47 35 47 L29 47 Q25 47 25 43 L25 37 Q25 33 29 33 M13 33 L19 33 Q23 33 23 37 L23 43 Q23 47 19 47 L13 47 Q9 47 9 43 L9 37 Q9 33 13 33"/>
  </g>
</svg>`,v4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M29 17 L35 17 Q39 17 39 21 L39 27 Q39 31 35 31 L29 31 Q25 31 25 27 L25 21 Q25 17 29 17 M45 33 L51 33 Q55 33 55 37 L55 43 Q55 47 51 47 L45 47 Q41 47 41 43 L41 37 Q41 33 45 33 M13 33 L19 33 Q23 33 23 37 L23 43 Q23 47 19 47 L13 47 Q9 47 9 43 L9 37 Q9 33 13 33"/>
    <path stroke="none" fill="#E73246" d="M29 33 L35 33 Q39 33 39 37 L39 43 Q39 47 35 47 L29 47 Q25 47 25 43 L25 37 Q25 33 29 33"/>
  </g>
</svg>`,F4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M36.95 27 L35.95 27 Q35.55 27 35.25 27.3 34.95 27.6 34.95 28 34.95 28.4 35.25 28.7 L35.95 29 35.95 29.25 35.7 29.8 35.7 29.75 34.95 30 34.15 29.75 33.95 29.25 33.95 24.8 Q33.95 24.45 34.2 24.2 L34.15 24.3 Q34.5 24 34.95 24 L35.7 24.3 35.7 24.25 35.95 24.8 Q35.95 25.2 36.25 25.5 36.55 25.8 36.95 25.8 L37.65 25.5 37.95 24.8 Q37.95 23.65 37.05 22.8 L37 22.75 Q36.1 22 34.95 22 33.7 22 32.85 22.75 L32.8 22.8 Q31.95 23.65 31.95 24.8 L31.95 29.25 Q31.95 30.35 32.8 31.2 L32.85 31.3 Q33.7 32 34.95 32 36.1 32 37 31.3 L37.05 31.25 Q37.95 30.35 37.95 29.25 L37.95 28 37.65 27.3 36.95 27 M44 22 L40 22 Q39.6 22 39.3 22.3 39 22.6 39 23 L39 31 Q39 31.4 39.3 31.7 39.6 32 40 32 L44 32 44.7 31.7 45 31 44.7 30.3 Q44.4 30 44 30 L41 30 41 28 44 28 44.7 27.7 45 27 44.7 26.3 Q44.4 26 44 26 L41 26 41 24 44 24 44.7 23.7 45 23 44.7 22.3 Q44.4 22 44 22 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M40.95 35.8 L40.95 42 Q40.95 42.4 41.25 42.7 41.55 43 41.95 43 L42.65 42.7 42.95 42 42.95 35.8 Q42.95 35.45 43.2 35.2 L43.15 35.3 Q43.5 35 43.95 35 L44.7 35.3 44.7 35.25 44.95 35.8 44.95 42 Q44.95 42.4 45.25 42.7 45.55 43 45.95 43 L46.65 42.7 46.95 42 46.95 35.8 Q46.95 34.65 46.05 33.8 L46 33.75 Q45.1 33 43.95 33 42.7 33 41.85 33.75 L41.8 33.8 Q40.95 34.65 40.95 35.8 M31.95 34.15 L32.95 42.15 33.2 42.7 33.75 43 34.35 42.95 34.8 42.55 35.95 40.8 37.15 42.55 37.6 42.95 38.2 43 38.7 42.7 38.95 42.15 39.95 34.15 39.75 33.4 Q39.5 33.05 39.1 33 38.65 32.95 38.35 33.2 38 33.45 37.95 33.9 L37.3 39.2 36.8 38.45 36.3 38.05 35.65 38.05 35.15 38.45 34.65 39.2 33.95 33.9 33.6 33.2 Q33.25 32.95 32.85 33 32.4 33.05 32.15 33.4 31.9 33.7 31.95 34.15 M21.1 26 L20 26 20 24 21.05 24 21.7 24.25 22 25 21.75 25.7 21.7 25.7 21.45 25.9 21.1 26 M21.1 28 L22.35 27.7 22.45 27.65 23.1 27.15 23.1 27.1 Q24 26.25 24 25 24 23.75 23.1 22.85 22.25 22 21.05 22 L19 22 Q18.6 22 18.3 22.3 18 22.6 18 23 L18 31 Q18 31.4 18.3 31.7 18.6 32 19 32 L19.7 31.7 20 31 20 28 21.1 28 M27 24.8 L27.25 24.2 27.2 24.3 Q27.55 24 28 24 28.45 24 28.75 24.3 L28.75 24.25 29 24.8 29 27 27 27 27 24.8 M25 24.8 L25 31 Q25 31.4 25.3 31.7 25.6 32 26 32 L26.7 31.7 27 31 27 29 29 29 29 31 Q29 31.4 29.3 31.7 L30 32 Q30.4 32 30.7 31.7 L31 31 31 24.8 Q31 23.65 30.1 22.8 L30.05 22.75 Q29.15 22 28 22 26.75 22 25.9 22.75 L25.85 22.8 Q25 23.65 25 24.8 M25.8 33.8 Q24.95 34.65 24.95 35.8 L24.95 40.25 Q24.95 41.35 25.8 42.2 L25.85 42.3 Q26.7 43 27.95 43 29.1 43 30 42.3 L30.05 42.25 Q30.95 41.35 30.95 40.25 L30.95 35.8 Q30.95 34.65 30.05 33.8 L30 33.75 Q29.1 33 27.95 33 26.7 33 25.85 33.75 L25.8 33.8 M26.95 35.8 Q26.95 35.45 27.2 35.2 L27.15 35.3 Q27.5 35 27.95 35 L28.7 35.3 28.7 35.25 28.95 35.8 28.95 40.25 28.7 40.8 28.7 40.75 27.95 41 27.15 40.75 26.95 40.25 26.95 35.8 M23.05 33.75 Q22.15 33 21.05 33 L19 33 Q18.6 33 18.3 33.3 18 33.6 18 34 L18 42 Q18 42.4 18.3 42.7 18.6 43 19 43 L21.05 43 Q22.15 43 23.05 42.3 L23.1 42.25 Q24 41.35 24 40.25 L24 35.8 Q24 34.65 23.1 33.8 L23.05 33.75 M21.05 35 Q21.45 35 21.75 35.3 L21.75 35.25 22 35.8 22 40.25 21.75 40.8 21.75 40.75 21.05 41 20 41 20 35 21.05 35"/>
  </g>
</svg>`,k4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M37 27 L36 27 Q35.6 27 35.3 27.3 35 27.6 35 28 L35.3 28.7 Q35.6 29 36 29 L36 29.25 35.75 29.8 35.75 29.75 35 30 34.2 29.75 34 29.25 34 24.8 Q34 24.45 34.25 24.2 L34.2 24.3 Q34.55 24 35 24 35.45 24 35.75 24.3 L35.75 24.25 36 24.8 Q36 25.2 36.3 25.5 L37 25.8 37.7 25.5 38 24.8 Q38 23.65 37.1 22.8 L37.05 22.75 Q36.15 22 35 22 33.75 22 32.9 22.75 L32.85 22.8 Q32 23.65 32 24.8 L32 29.25 Q32 30.35 32.85 31.2 L32.9 31.3 Q33.75 32 35 32 36.15 32 37.05 31.3 L37.1 31.25 Q38 30.35 38 29.25 L38 28 37.7 27.3 Q37.4 27 37 27 M44 26 L41 26 41 24 44 24 44.7 23.7 45 23 44.7 22.3 Q44.4 22 44 22 L40 22 Q39.6 22 39.3 22.3 39 22.6 39 23 L39 31 Q39 31.4 39.3 31.7 39.6 32 40 32 L44 32 44.7 31.7 45 31 44.7 30.3 Q44.4 30 44 30 L41 30 41 28 44 28 44.7 27.7 45 27 44.7 26.3 Q44.4 26 44 26 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M21.1 26 L20 26 20 24 21.05 24 21.7 24.25 22 25 21.75 25.7 21.7 25.7 21.45 25.9 21.1 26 M21.1 28 L22.35 27.7 22.45 27.65 23.1 27.15 23.1 27.1 Q24 26.25 24 25 24 23.75 23.1 22.85 22.25 22 21.05 22 L19 22 Q18.6 22 18.3 22.3 18 22.6 18 23 L18 31 Q18 31.4 18.3 31.7 18.6 32 19 32 L19.7 31.7 20 31 20 28 21.1 28 M27 24.8 L27.25 24.2 27.2 24.3 Q27.55 24 28 24 28.45 24 28.75 24.3 L28.75 24.25 29 24.8 29 27 27 27 27 24.8 M25 24.8 L25 31 Q25 31.4 25.3 31.7 25.6 32 26 32 L26.7 31.7 27 31 27 29 29 29 29 31 Q29 31.4 29.3 31.7 L30 32 Q30.4 32 30.7 31.7 L31 31 31 24.8 Q31 23.65 30.1 22.8 L30.05 22.75 Q29.15 22 28 22 26.75 22 25.9 22.75 L25.85 22.8 Q25 23.65 25 24.8 M28.1 37 L27 37 27 35 28.05 35 28.7 35.25 29 36 28.75 36.7 28.7 36.7 28.45 36.9 28.1 37 M28.1 39 L29.35 38.7 29.45 38.65 30.1 38.15 30.1 38.1 Q31 37.25 31 36 31 34.75 30.1 33.85 29.25 33 28.05 33 L26 33 Q25.6 33 25.3 33.3 25 33.6 25 34 L25 42 Q25 42.4 25.3 42.7 25.6 43 26 43 L26.7 42.7 27 42 27 39 28.1 39 M20 40.2 L20 34 19.7 33.3 Q19.4 33 19 33 18.6 33 18.3 33.3 18 33.6 18 34 L18 40.2 Q18 41.35 18.85 42.2 L18.9 42.3 Q19.75 43 21 43 22.15 43 23.05 42.3 L23.1 42.25 Q24 41.35 24 40.2 L24 34 23.7 33.3 Q23.4 33 23 33 22.6 33 22.3 33.3 22 33.6 22 34 L22 40.2 21.75 40.8 21.75 40.75 21 41 20.2 40.75 20 40.2"/>
  </g>
</svg>`,x4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M39 25 L39 38 41.5 38 Q43.8 38 45.35 36.4 L45.4 36.35 Q47 34.8 47 32.5 L47 30.5 Q47 28.2 45.4 26.7 L45.35 26.6 Q43.8 25 41.5 25 L39 25 M42 28.05 L43.2 28.75 43.25 28.75 43.3 28.8 Q44 29.45 44 30.5 L44 32.5 Q44 33.55 43.3 34.2 L43.2 34.3 Q42.7 34.8 42 34.95 L42 28.05 M17 25 L17 38 25 38 25 35 20 35 20 33 25 33 25 30 20 30 20 28 25 28 25 25 17 25 M37 38 L37 25 34 25 34 32 30 25 27 25 27 38 30 38 30 31 34 38 37 38"/>
  </g>
</svg>`,_4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M40 28 L40 36 Q40 36.4 40.3 36.7 L41 37 45 37 45.7 36.7 46 36 45.7 35.3 Q45.4 35 45 35 L42 35 42 33 45 33 45.7 32.7 46 32 45.7 31.3 Q45.4 31 45 31 L42 31 42 29 45 29 45.7 28.7 46 28 45.7 27.3 Q45.4 27 45 27 L41 27 40.7 27.05 Q40.45 27.1 40.3 27.3 40 27.6 40 28 M23 36 L23 28 22.7 27.3 Q22.55 27.1 22.3 27.05 L22 27 21.7 27.05 Q21.45 27.1 21.3 27.3 21 27.6 21 28 L21 31 19 31 19 28 18.7 27.3 Q18.55 27.1 18.3 27.05 L18 27 17.7 27.05 Q17.45 27.1 17.3 27.3 17 27.6 17 28 L17 36 Q17 36.4 17.3 36.7 L18 37 Q18.4 37 18.7 36.7 L19 36 19 33 21 33 21 36 Q21 36.4 21.3 36.7 21.6 37 22 37 L22.7 36.7 23 36 M39 36 L39 28 38.7 27.3 Q38.55 27.1 38.3 27.05 L38 27 37.7 27.05 Q37.45 27.1 37.3 27.3 L35 29.6 32.7 27.3 Q32.55 27.1 32.3 27.05 L32 27 31.7 27.05 Q31.45 27.1 31.3 27.3 31 27.6 31 28 L31 36 Q31 36.4 31.3 36.7 31.6 37 32 37 L32.7 36.7 33 36 33 30.4 34.3 31.7 Q34.6 32 35 32 L35.7 31.7 37 30.4 37 36 Q37 36.4 37.3 36.7 37.6 37 38 37 L38.7 36.7 39 36 M24.85 27.8 Q24 28.65 24 29.8 L24 34.25 Q24 35.35 24.85 36.2 L24.9 36.3 Q25.75 37 27 37 28.15 37 29.05 36.3 L29.1 36.25 Q30 35.35 30 34.25 L30 29.8 Q30 28.65 29.1 27.8 L29.05 27.75 Q28.4 27.2 27.6 27.05 L27 27 26.4 27.05 Q25.55 27.2 24.9 27.75 L24.85 27.8 M26 29.8 Q26 29.45 26.25 29.2 L26.2 29.3 Q26.55 29 27 29 27.45 29 27.75 29.3 L27.75 29.25 28 29.8 28 34.25 27.75 34.8 27.75 34.75 27 35 26.2 34.75 26 34.25 26 29.8"/>
  </g>
</svg>`,m4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M38.1 32.1 Q39 31.25 39 30 39 28.75 38.1 27.85 37.25 27 36.05 27 L34 27 Q33.6 27 33.3 27.3 33 27.6 33 28 L33 36 Q33 36.4 33.3 36.7 L34 37 Q34.4 37 34.7 36.7 L35 36 35 33 35.4 33 37.1 36.45 Q37.3 36.8 37.7 36.95 L38.45 36.9 38.95 36.35 38.9 35.55 37.45 32.65 38.1 32.15 38.1 32.1 M36.1 31 L35 31 35 29 36.05 29 Q36.45 29 36.7 29.25 L37 30 36.75 30.7 36.7 30.7 36.45 30.9 36.1 31 M40 28 L40 36 Q40 36.4 40.3 36.7 L41 37 45 37 45.7 36.7 46 36 45.7 35.3 Q45.4 35 45 35 L42 35 42 28 41.7 27.3 Q41.4 27 41 27 40.6 27 40.3 27.3 40 27.6 40 28 M56 22 L56 42 Q56 46.9 53 48.8 51.1 50 48 50 L16 50 Q12.9 50 11 48.8 8 46.9 8 42 L8 22 Q8 14 16 14 L48 14 Q56 14 56 22 M24.1 36.25 Q25 35.35 25 34.25 L24.7 33.55 Q24.4 33.25 24 33.25 23.6 33.25 23.3 33.55 23 33.85 23 34.25 L22.75 34.8 22.75 34.75 22 35 21.2 34.75 21 34.25 21 29.8 21.25 29.2 21.2 29.3 Q21.55 29 22 29 22.45 29 22.75 29.3 L22.75 29.25 23 29.8 Q23 30.2 23.3 30.5 23.6 30.8 24 30.8 L24.7 30.5 25 29.8 Q25 28.65 24.1 27.8 L24.05 27.75 Q23.15 27 22 27 20.75 27 19.9 27.75 L19.85 27.8 Q19 28.65 19 29.8 L19 34.25 Q19 35.35 19.85 36.2 L19.9 36.3 Q20.75 37 22 37 23.15 37 24.05 36.3 L24.1 36.25 M27 29 L28 29 28 36 Q28 36.4 28.3 36.7 28.6 37 29 37 L29.7 36.7 30 36 30 29 31 29 31.7 28.7 32 28 31.7 27.3 Q31.4 27 31 27 L27 27 Q26.6 27 26.3 27.3 26 27.6 26 28 L26.3 28.7 27 29"/>
  </g>
</svg>`,M4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 40 8 38.95 8 36 Q8 28 16 28 L28 28 28 16 Q28 8 36 8 L38.95 8 40 8 48 8 M29 41 L35 47 37 47 37 43 44.1 43 Q45.3 42.95 46.1 42.1 46.95 41.3 47 40.1 L47 29 43 29 43 39 37 39 37 35 35 35 29 41"/>
  </g>
</svg>`,y4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M38 42 L42 42 34 22 30 22 22 42 26 42 27.6 38 36.4 38 38 42 M32 27 L34.8 34 29.2 34 32 27"/>
  </g>
</svg>`,b4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M34 22 L25 22 24 23 24 41 25 42 34 42 Q36.45 42 38.2 40.25 L38.25 40.2 Q40 38.45 40 36 40 33.65 38.45 32 40 30.3 40 28 40 25.5 38.25 23.75 L38.2 23.7 Q36.45 22 34 22 M28 26 L34 26 Q34.8 26 35.4 26.6 L35.45 26.6 Q36 27.15 36 28 36 28.8 35.45 29.35 L35.35 29.45 Q34.8 29.95 34.15 30 L28 30 28 26 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M28 38 L28 34 34.15 34 Q34.85 34.05 35.4 34.6 L35.45 34.6 Q36 35.15 36 36 36 36.8 35.45 37.35 L35.35 37.45 Q34.8 38 34 38 L28 38"/>
  </g>
</svg>`,E4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M24 30 L24 34.2 Q24.05 37.35 26.35 39.65 L28 40.95 Q29.8 42 32 42 34.2 42 36 40.95 L37.65 39.65 Q38.95 38.35 39.55 36.8 L35.8 35.35 34.85 36.85 Q33.65 38 32 38 30.35 38 29.2 36.85 28.05 35.7 28 34.1 L28 30 Q28 28.35 29.2 27.2 30.35 26 32 26 33.65 26 34.85 27.2 L35.8 28.7 39.55 27.2 Q38.95 25.65 37.65 24.35 35.3 22 32 22 28.7 22 26.35 24.35 24 26.7 24 30 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8"/>
  </g>
</svg>`,A4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M28 26 L30.15 26 Q32.5 26.05 34.25 27.8 36 29.55 36 32 36 34.45 34.25 36.25 32.5 37.95 30.15 38 L28 38 28 26 M24 22 L24 42 30.25 42 Q34.25 41.9 37.1 39.1 L38.05 38 Q40 35.4 40 32 40 28.55 38.05 26 L37.1 24.95 Q34.25 22.1 30.25 22 L24 22"/>
  </g>
</svg>`,P4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M24 22 L24 42 40 42 40 38 28 38 28 34 40 34 40 30 28 30 28 26 40 26 40 22 24 22 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8"/>
  </g>
</svg>`,I4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M24 22 L24 42 28 42 28 34 40 34 40 30 28 30 28 26 40 26 40 22 24 22"/>
  </g>
</svg>`,C4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M39.25 24.8 Q36.45 22 32.5 22 28.55 22 25.8 24.8 23 27.55 23 31.5 L23 32.85 23.3 34.95 Q23.85 37.3 25.8 39.25 28.55 42 32.5 42 36.45 42 39.25 39.25 41.1 37.3 41.75 35 L41.8 34.85 42 32.85 42 32 41 31 31 31 31 35 37.45 35 36.4 36.4 Q34.75 38 32.5 38 30.25 38 28.65 36.4 27.55 35.3 27.2 34 L27 32.65 27 31.5 Q27 29.25 28.65 27.65 30.25 26 32.5 26 34.75 26 36.4 27.65 L36.85 28.15 39.7 25.3 39.25 24.8"/>
  </g>
</svg>`,T4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q51.45 8 53.45 9.5 56 11.45 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 11.45 10.6 9.5 12.55 8 16 8 M24 22 L24 42 28 42 28 34 36 34 36 42 40 42 40 22 36 22 36 30 28 30 28 22 24 22"/>
  </g>
</svg>`,N4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M30 22 L30 42 34 42 34 22 30 22"/>
  </g>
</svg>`,D4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M37 34.2 L37 22 33 22 33 34.1 Q32.95 35.7 31.85 36.85 30.65 38 29 38 L27 38 27 42 29.25 42 Q31.3 41.95 33 40.95 L34.65 39.65 Q36.95 37.35 37 34.2"/>
  </g>
</svg>`,R4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M28 34 L31 34 37 42 40 42 40 39 34.75 32 40 25 40 22 37 22 31 30 28 30 28 22 24 22 24 42 28 42 28 34"/>
  </g>
</svg>`,q4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M24 42 L40 42 40 38 28 38 28 22 24 22 24 42"/>
  </g>
</svg>`,O4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M22 42 L26 42 26 32 31 42 33 42 38 32 38 42 42 42 42 22 38 22 32 34 26 22 22 22 22 42 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8"/>
  </g>
</svg>`,G4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M28 42 L28 30 36 42 40 42 40 22 36 22 36 34 28 22 24 22 24 42 28 42"/>
  </g>
</svg>`,H4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M40 32 Q40 27.85 37.65 24.9 35.3 22 32 22 28.65 22 26.3 24.9 24 27.85 24 32 24 36.15 26.3 39.1 28.65 42 32 42 35.3 42 37.65 39.1 40 36.15 40 32 M34.55 27.4 L34.55 27.45 Q36 29.35 36 32 36 34.65 34.55 36.6 33.45 37.9 32 38 30.5 37.9 29.4 36.6 28 34.65 28 32 28 29.35 29.4 27.45 30.5 26.1 32 26 33.45 26.1 34.55 27.4 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8"/>
  </g>
</svg>`,S4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M25 22 L24 23 24 42 28 42 28 36 34 36 34.2 36 Q35.75 35.95 37 35.2 L38.1 34.4 38.1 34.35 38.2 34.25 38.25 34.2 39.6 32.3 40 30 40 28 Q40 25.5 38.25 23.75 L38.2 23.7 37 22.8 Q35.75 22.05 34.2 22 L25 22 M28 26 L34 26 Q34.8 26 35.4 26.6 L35.45 26.6 Q36 27.15 36 28 L36 30.4 35.45 31.35 35.35 31.45 34.9 31.8 34.05 32 28 32 28 26 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8"/>
  </g>
</svg>`,B4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M28 30 Q28 28.35 29.2 27.2 30.35 26 32 26 33.65 26 34.85 27.2 36 28.35 36 30 L36 34.1 35.9 34.9 35 34 32 34 32 37 32.9 37.9 32 38 Q30.35 38 29.2 36.85 28.05 35.7 28 34.1 L28 30 M24 30 L24 34.2 Q24.05 37.35 26.35 39.65 L28 40.95 Q29.8 42 32 42 34.2 42 36 41 L37 42 40 42 40 39 39 38 Q39.95 36.25 40 34.2 L40 30 Q40 26.7 37.65 24.35 35.3 22 32 22 28.7 22 26.35 24.35 24 26.7 24 30"/>
  </g>
</svg>`,z4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M25 22 L24 23 24 42 28 42 28 36 34 36 34.5 36 36 42 40 42 38.1 34.35 38.2 34.25 38.25 34.2 Q40 32.45 40 30 L40 28 Q40 25.5 38.25 23.75 L38.2 23.7 37 22.8 Q35.75 22.05 34.2 22 L25 22 M28 26 L34 26 Q34.8 26 35.4 26.6 L35.45 26.6 Q36 27.15 36 28 L36 30 Q36 30.8 35.45 31.35 L35.35 31.45 Q34.8 32 34 32 L28 32 28 26 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8"/>
  </g>
</svg>`,U4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M34 30 L30 30 Q29.2 30 28.6 29.4 28 28.8 28 28 28 27.2 28.55 26.65 L28.65 26.55 Q29.2 26 30 26 L34.05 26 Q34.8 26 35.35 26.55 L35.45 26.65 Q36 27.2 36 28 L39.85 26.5 39.7 26 Q39.25 24.8 38.25 23.8 L38.2 23.75 Q36.5 22.05 34.15 22 L30 22 Q27.55 22 25.8 23.75 L25.75 23.8 Q24 25.55 24 28 24 30.5 25.75 32.25 27.5 34 30 34 L34 34 Q34.8 34 35.4 34.6 36 35.2 36 36 36 36.8 35.45 37.35 L35.35 37.45 Q34.8 38 34 38 L29.95 38 Q29.2 38 28.65 37.45 L28.55 37.35 Q28 36.8 28 36 L24.2 37.55 24.35 38 Q24.75 39.2 25.75 40.2 L25.8 40.25 Q27.5 41.95 29.85 42 L34 42 Q36.45 42 38.2 40.25 L38.25 40.2 Q40 38.45 40 36 40 33.5 38.25 31.75 36.5 30 34 30 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8"/>
  </g>
</svg>`,V4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M40 22 L24 22 24 26 30 26 30 42 34 42 34 26 40 26 40 22"/>
  </g>
</svg>`,W4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M40 22 L36 22 36 34.1 Q35.95 35.7 34.85 36.85 33.65 38 32 38 30.35 38 29.2 36.85 28.05 35.7 28 34.1 L28 22 24 22 24 34.2 Q24.05 37.35 26.35 39.65 L28 40.95 Q29.8 42 32 42 34.2 42 36 40.95 L37.65 39.65 Q39.95 37.35 40 34.2 L40 22"/>
  </g>
</svg>`,K4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 56 Q8 56 8 48 L8 16 Q8 8 16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 M38 22 L32 37 26 22 22 22 30 42 34 42 42 22 38 22"/>
  </g>
</svg>`,X4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M31 22 L28 31 25 22 21 22 21 24 27 42 29 42 32 33 35 42 37 42 43 24 43 22 39 22 36 31 33 22 31 22"/>
  </g>
</svg>`,Y4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M23 25 L29 32 23 39 23 40 25.25 42 26.4 42 32 35.5 37.65 42 38.75 42 41 40 41 39 35 32 41 25 41 24 38.75 22 37.65 22 32 28.55 26.4 22 25.25 22 23 24 23 25"/>
  </g>
</svg>`,j4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M23 25 L30 32.9 30 42 34 42 34 32.9 41 25 41 24 38.75 22 37.65 22 32 28.55 26.4 22 25.25 22 23 24 23 25"/>
  </g>
</svg>`,J4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M24 22 L24 26 34 26 24 38 24 42 40 42 40 38 30 38 40 26 40 22 24 22"/>
  </g>
</svg>`,Z4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M36.95 25.55 Q34.9 23.5 32 23.5 29.15 23.5 27.05 25.5 L27 25.55 Q25 27.65 25 30.5 L25 33.5 Q25 36.4 27.05 38.45 29.15 40.5 32 40.5 34.85 40.5 36.9 38.45 L36.95 38.4 Q39 36.35 39 33.5 L39 30.5 Q39 27.65 36.95 25.55 M32 27.5 Q33.2 27.5 34.1 28.4 35 29.25 35 30.5 L35 33.5 Q35 34.7 34.1 35.55 L34.05 35.6 Q33.2 36.5 32 36.5 30.75 36.5 29.9 35.6 29 34.7 29 33.5 L29 30.5 Q29 29.3 29.85 28.4 L29.9 28.35 Q30.8 27.5 32 27.5"/>
  </g>
</svg>`,$4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M35 24 L31 24 28 27 28 28.95 31 28.95 31 33.85 31 33.95 31 41 35 41 35 24"/>
  </g>
</svg>`,t1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M33.5 28.4 Q34.25 29.15 33 30.45 L26 37 26 41 30.85 41 30.95 41 38 41 38 37 32 37 36.45 32.55 Q38.65 30.35 37.4 27 L36.4 25.65 36.35 25.6 Q34.75 24 32.5 24 L30.85 24 Q28.9 24.05 27.5 25.4 L27.4 25.5 Q26.35 26.6 26.1 28 L26 29 30 29 Q30 28.6 30.3 28.3 30.55 28.05 30.85 28 L30.95 28 32.5 28 Q33.1 28 33.5 28.4"/>
  </g>
</svg>`,n1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M38 35.75 Q38.05 33.9 36.75 32.5 38.05 31.1 38 29.25 38.05 27.05 36.05 25.4 L36.1 25.5 Q34.4 24 32 24 29.6 24 27.9 25.45 26.05 26.95 26 29 L30.1 29 30.45 28.55 30.45 28.5 Q31.1 28 32 28 32.9 28 33.5 28.5 L33.55 28.55 Q33.95 28.85 34 29.25 L33.6 30 Q33 30.5 32.15 30.5 L30 30.5 30 34.5 32.15 34.5 32.7 34.55 Q33.2 34.65 33.6 35 L34 35.75 33.55 36.45 33.5 36.5 Q32.9 37 32 37 31.1 37 30.45 36.5 L30.45 36.45 30.1 36 26 36 Q26.05 38.05 27.9 39.55 29.6 41 32 41 34.4 41 36.1 39.5 L36.05 39.6 Q38.05 37.95 38 35.75"/>
  </g>
</svg>`,e1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M38 24 L34 24 34 30 30 30 30 24 26 24 26 32.05 Q26 32.85 26.55 33.4 27.15 34 27.95 34 L34 34 34 41 38 41 38 24"/>
  </g>
</svg>`,s1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M34.5 36.6 Q34.1 37 33.5 37 L30.95 37 Q30.6 37 30.3 36.7 30 36.4 30 36 L26 36 26.1 37 Q26.35 38.4 27.4 39.5 L27.5 39.6 Q28.9 40.95 30.85 41 L33.5 41 Q35.75 41 37.35 39.4 L37.4 39.35 Q38.8 37.95 39 36 L39 35.5 Q39 33.2 37.4 31.6 35.8 30 33.5 30 L30 30 30 28 39 28 39 24 26 24 26 34 33.5 34 Q34.1 34 34.55 34.45 35 34.9 35 35.5 35 36.1 34.6 36.5 L34.5 36.6"/>
  </g>
</svg>`,i1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M37.25 30.75 Q35.5 29 33 29 L35 24 30 24 26.15 33.65 26.1 34 26 35 Q26 37.5 27.75 39.25 29.5 41 32 41 L33 41 Q35.45 41 37.2 39.25 L37.25 39.2 Q39 37.45 39 35 39 32.5 37.25 30.75 M33 33 Q33.8 33 34.4 33.6 35 34.2 35 35 35 35.8 34.45 36.35 L34.35 36.45 Q33.8 37 33 37 L32 37 Q31.2 37 30.6 36.4 30 35.8 30 35 30 34.45 30.25 34 L30.55 33.6 30.6 33.55 31.35 33.1 32 33 33 33"/>
  </g>
</svg>`,o1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M33 41 L38 28 38 24 25 24 25 28 33 28 28 41 33 41"/>
  </g>
</svg>`,r1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M32.5 41 Q34.75 41 36.35 39.4 L36.4 39.35 Q37.8 37.95 38 36 L38 35.5 Q38 33.6 36.9 32.2 38 30.85 38 29 38 26.95 36.6 25.5 L36.5 25.4 Q35.05 24 33.05 24 L29.95 24 28.65 24.2 Q27.45 24.5 26.5 25.4 L26.4 25.5 Q25 26.95 25 29 25 30.85 26.1 32.2 25 33.6 25 35.5 L25 36 Q25.2 37.95 26.6 39.35 L26.65 39.4 Q28.25 41 30.5 41 L32.5 41 M30 30 L29.3 29.7 Q29 29.4 29 29 29 28.6 29.3 28.3 29.6 28 29.95 28 L33.05 28 Q33.4 28 33.7 28.3 L34 29 33.7 29.7 33 30 30 30 M33.5 36.6 Q33.1 37 32.5 37 L30.5 37 Q29.9 37 29.5 36.6 L29.4 36.5 Q29 36.1 29 35.5 29 34.9 29.45 34.45 29.9 34 30.5 34 L32.55 34 Q33.1 34 33.55 34.45 34 34.9 34 35.5 34 36.1 33.6 36.5 L33.5 36.6"/>
  </g>
</svg>`,a1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M26.75 34.25 Q28.5 36 31 36 L29 41 34 41 37.85 31.35 37.9 31 38 30 Q38 27.5 36.25 25.75 34.5 24 32 24 L31 24 Q28.55 24 26.8 25.75 L26.75 25.8 Q25 27.55 25 30 25 32.5 26.75 34.25 M31 32 Q30.2 32 29.6 31.4 29 30.8 29 30 29 29.2 29.55 28.65 L29.65 28.55 Q30.2 28 31 28 L32 28 Q32.8 28 33.4 28.6 34 29.2 34 30 L33.75 31 33.45 31.4 33.4 31.45 32.65 31.9 32 32 31 32"/>
  </g>
</svg>`,l1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M43 24 L39 24 36 27 36 28.95 39 28.95 39 33.85 39 33.95 39 41 43 41 43 24 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M25 41 L25 35 32 35 32 31 28.15 31 28.05 31 25 31 25 28 32 28 32 24 28.15 24 28.05 24 21 24 21 33.85 21 33.95 21 41 25 41"/>
  </g>
</svg>`,L1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M23 41 L23 35 30 35 30 31 23 31 23 28 30 28 30 24 24.15 24 24.05 24 19 24 19 33.85 19 33.95 19 41 23 41 M40.5 28.4 Q41.25 29.15 40 30.45 L33 37 33 41 37.85 41 37.95 41 45 41 45 37 39 37 43.45 32.55 Q45.65 30.35 44.4 27 L43.4 25.65 43.35 25.6 43.25 25.5 Q41.7 24 39.5 24 L37.85 24 Q35.9 24.05 34.5 25.4 L34.4 25.5 Q33.35 26.6 33.1 28 L33 29 37 29 Q37 28.6 37.3 28.3 37.55 28.05 37.85 28 L37.95 28 39.5 28 Q40.1 28 40.5 28.4"/>
  </g>
</svg>`,g1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M45 35.75 Q45.05 33.9 43.75 32.5 45.05 31.1 45 29.25 45.05 27.05 43.05 25.4 L43.1 25.5 Q41.4 24 39 24 36.6 24 34.9 25.45 33.05 26.95 33 29 L37.1 29 37.45 28.55 37.45 28.5 Q38.1 28 39 28 39.9 28 40.5 28.5 L40.55 28.55 41 29.25 40.6 30 Q40 30.5 39.15 30.5 L37 30.5 37 34.5 39.15 34.5 39.7 34.55 Q40.2 34.65 40.6 35 L41 35.75 40.55 36.45 40.5 36.5 Q39.9 37 39 37 38.1 37 37.45 36.5 L37.45 36.45 37.1 36 33 36 Q33.05 38.05 34.9 39.55 36.6 41 39 41 41.4 41 43.1 39.5 L43.05 39.6 Q45.05 37.95 45 35.75 M23 41 L23 35 30 35 30 31 26.15 31 26.05 31 23 31 23 28 30 28 30 24 26.15 24 26.05 24 19 24 19 33.85 19 33.95 19 41 23 41"/>
  </g>
</svg>`,d1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M45 24 L41 24 41 30 37 30 37 24 33 24 33 32.05 Q33 32.85 33.55 33.4 34.15 34 34.95 34 L41 34 41 41 45 41 45 24 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M23 41 L23 35 30 35 30 31 26.15 31 26.05 31 23 31 23 28 30 28 30 24 26.15 24 26.05 24 19 24 19 33.85 19 33.95 19 41 23 41"/>
  </g>
</svg>`,h1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M41.5 36.6 Q41.1 37 40.5 37 L37.95 37 37.3 36.7 Q37 36.4 37 36 L33 36 33.1 37 Q33.35 38.4 34.4 39.5 L34.5 39.6 Q35.9 40.95 37.85 41 L40.5 41 Q42.75 41 44.35 39.4 L44.4 39.35 Q45.8 37.95 46 36 L46 35.5 Q46 33.2 44.4 31.6 42.8 30 40.5 30 L37 30 37 28 46 28 46 24 33 24 33 34 40.5 34 Q41.1 34 41.55 34.45 42 34.9 42 35.5 42 36.1 41.6 36.5 L41.5 36.6 M22 41 L22 35 29 35 29 31 25.15 31 25.05 31 22 31 22 28 29 28 29 24 25.15 24 25.05 24 18 24 18 33.85 18 33.95 18 41 22 41"/>
  </g>
</svg>`,Q1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M44.25 30.75 Q42.5 29 40 29 L42 24 37 24 33.15 33.65 33.1 34 33 35 Q33 37.5 34.75 39.25 36.5 41 39 41 L40 41 Q42.45 41 44.2 39.25 L44.25 39.2 Q46 37.45 46 35 46 32.5 44.25 30.75 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M40 33 Q40.8 33 41.4 33.6 42 34.2 42 35 42 35.8 41.45 36.35 L41.35 36.45 Q40.8 37 40 37 L39 37 Q38.2 37 37.6 36.4 37 35.8 37 35 37 34.45 37.25 34 L37.55 33.6 37.6 33.55 Q37.95 33.25 38.35 33.1 L39 33 40 33 M23 41 L23 35 30 35 30 31 26.15 31 26.05 31 23 31 23 28 30 28 30 24 26.15 24 26.05 24 19 24 19 33.85 19 33.95 19 41 23 41"/>
  </g>
</svg>`,w1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M41 41 L46 28 46 24 33 24 33 28 41 28 36 41 41 41 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M22 41 L22 35 29 35 29 31 25.15 31 25.05 31 22 31 22 28 29 28 29 24 25.15 24 25.05 24 18 24 18 33.85 18 33.95 18 41 22 41"/>
  </g>
</svg>`,f1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M38 30 Q37.6 30 37.3 29.7 37 29.4 37 29 37 28.6 37.3 28.3 37.6 28 37.95 28 L41.05 28 Q41.4 28 41.7 28.3 L42 29 41.7 29.7 41 30 38 30 M40.5 41 Q42.75 41 44.35 39.4 L44.4 39.35 Q45.8 37.95 46 36 L46 35.5 Q46 33.6 44.9 32.2 46 30.85 46 29 46 26.95 44.6 25.5 L44.5 25.4 Q43.05 24 41.05 24 L37.95 24 36.65 24.2 Q35.45 24.5 34.5 25.4 L34.4 25.5 Q33 26.95 33 29 33 30.85 34.1 32.2 33 33.6 33 35.5 L33 36 Q33.2 37.95 34.6 39.35 L34.65 39.4 Q36.25 41 38.5 41 L40.5 41 M41.5 36.6 Q41.1 37 40.5 37 L38.5 37 Q37.9 37 37.5 36.6 L37.4 36.5 Q37 36.1 37 35.5 37 34.9 37.45 34.45 37.9 34 38.5 34 L40.55 34 Q41.1 34 41.55 34.45 42 34.9 42 35.5 42 36.1 41.6 36.5 L41.5 36.6 M22 41 L22 35 29 35 29 31 25.15 31 25.05 31 22 31 22 28 29 28 29 24 25.15 24 25.05 24 18 24 18 33.85 18 33.95 18 41 22 41"/>
  </g>
</svg>`,p1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M39 32 Q38.2 32 37.6 31.4 37 30.8 37 30 37 29.2 37.55 28.65 L37.65 28.55 Q38.2 28 39 28 L40 28 Q40.8 28 41.4 28.6 42 29.2 42 30 L41.75 31 41.45 31.4 41.4 31.45 40.65 31.9 40 32 39 32 M34.75 34.25 Q36.5 36 39 36 L37 41 42 41 45.85 31.35 45.9 31 46 30 Q46 27.5 44.25 25.75 42.5 24 40 24 L39 24 Q36.55 24 34.8 25.75 L34.75 25.8 Q33 27.55 33 30 33 32.5 34.75 34.25 M23 41 L23 35 30 35 30 31 26.15 31 26.05 31 23 31 23 28 30 28 30 24 26.15 24 26.05 24 19 24 19 33.85 19 33.95 19 41 23 41"/>
  </g>
</svg>`,u1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M43 28 Q44.2 28 45.1 28.9 46 29.75 46 31 L46 34 Q46 35.2 45.1 36.05 L45.05 36.1 Q44.2 37 43 37 41.75 37 40.9 36.1 40 35.2 40 34 L40 31 Q40 29.8 40.85 28.9 L40.9 28.85 Q41.8 28 43 28 M47.95 26.05 Q45.9 24 43 24 40.15 24 38.05 26 L38 26.05 Q36 28.15 36 31 L36 34 Q36 36.9 38.05 38.95 40.15 41 43 41 45.85 41 47.9 38.95 L47.95 38.9 Q50 36.85 50 34 L50 31 Q50 28.15 47.95 26.05 M34 24 L30 24 27 27 27 28.95 30 28.95 30 33.85 30 33.95 30 41 34 41 34 24 M18 41 L18 35 25 35 25 31 21.15 31 21.05 31 18 31 18 28 25 28 25 24 21.15 24 21.05 24 14 24 14 33.85 14 33.95 14 41 18 41"/>
  </g>
</svg>`,c1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M47 24 L43 24 40 27 40 28.95 43 28.95 43 33.85 43 33.95 43 41 47 41 47 24 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M21 41 L21 35 28 35 28 31 24.15 31 24.05 31 21 31 21 28 28 28 28 24 24.15 24 24.05 24 17 24 17 33.85 17 33.95 17 41 21 41 M38 24 L34 24 31 27 31 28.95 34 28.95 34 33.85 34 33.95 34 41 38 41 38 24"/>
  </g>
</svg>`,v1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M34 24 L30 24 27 27 27 28.95 30 28.95 30 33.85 30 33.95 30 41 34 41 34 24 M18 41 L18 35 25 35 25 31 21.15 31 21.05 31 18 31 18 28 25 28 25 24 21.15 24 21.05 24 14 24 14 33.85 14 33.95 14 41 18 41 M44.5 28.4 Q45.25 29.15 44 30.45 L37 37 37 41 41.85 41 41.95 41 49 41 49 37 43 37 47.45 32.55 Q49.65 30.35 48.4 27 L47.4 25.65 47.35 25.6 Q45.75 24 43.5 24 L41.85 24 Q39.9 24.05 38.5 25.4 L38.4 25.5 Q37.35 26.6 37.1 28 L37 29 41 29 Q41 28.6 41.3 28.3 41.55 28.05 41.85 28 L41.95 28 43.5 28 Q44.1 28 44.5 28.4"/>
  </g>
</svg>`,F1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#7C66E8" d="M22.8 20 L20 22.8 29.2 32 20 41.2 22.8 44 32 34.8 41.2 44 44 41.2 34.8 32 44 22.8 41.2 20 32 29.2 22.8 20 M56 32 Q56 42 48.95 48.95 42 56 32 56 22.05 56 15 48.95 8 42 8 32 8 22.05 15 15 22.05 8 32 8 42 8 48.95 15 56 22.05 56 32"/>
  </g>
</svg>`,k1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FF6666" d="M37.7 26.35 Q40 28.65 40 32 40 35.35 37.7 37.7 35.35 40 32 40 28.7 40 26.4 37.7 L26.35 37.65 Q24 35.3 24 32 24 28.7 26.35 26.35 L26.4 26.35 Q28.7 24 32 24 35.35 24 37.7 26.35 M44 32 Q44 27 40.5 23.5 37 20 32 20 27.05 20 23.55 23.5 20 27 20 32 20 37 23.55 40.5 27.05 44 32 44 37 44 40.5 40.5 44 37 44 32 M56 32 Q56 42 48.95 48.95 42 56 32 56 22.05 56 15 48.95 8 42 8 32 8 22.05 15 15 22.05 8 32 8 42 8 48.95 15 56 22.05 56 32"/>
  </g>
</svg>`,x1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FF69F8" d="M56 32 Q56 42 48.95 48.95 42 56 32 56 22.05 56 15 48.95 8 42 8 32 8 22.05 15 15 22.05 8 32 8 42 8 48.95 15 56 22.05 56 32 M20 20 L20 44 44 44 44 20 20 20 M24 40 L24 24 40 24 40 40 24 40"/>
  </g>
</svg>`,_1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#40E2A0" d="M56 32 Q56 42 48.95 48.95 42 56 32 56 22.05 56 15 48.95 8 42 8 32 8 22.05 15 15 22.05 8 32 8 42 8 48.95 15 56 22.05 56 32 M46 42 L32 18 18 42 46 42 M32 25.95 L39.05 38 25 38 32 25.95"/>
  </g>
</svg>`,m1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M42 25 L38 25 35 28 35 29.95 38 29.95 38 34.85 38 34.95 38 42 42 42 42 25 M12 30 Q12 21.7 17.8 15.8 20.2 13.45 22.95 12.1 27.05 10 32 10 40.25 10 46.1 15.8 49.85 19.55 51.25 24.3 L51.8 26.9 52 29.6 52 46 52 46.45 Q51.85 49.15 50.1 51.2 L49.65 51.65 49.45 51.85 Q48 53.2 46.25 53.7 L44 54 20 54 Q16.7 54 14.35 51.65 12 49.3 12 46 L12 30 M22 25 L22 42 34 42 34 38 26 38 26 25 22 25"/>
  </g>
</svg>`,M1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M21 25 L21 42 25 42 25 37 28 37 30.5 42 34.5 42 31.45 35.9 32.2 35.25 32.25 35.2 33.2 34 Q34 32.65 34 31 34 28.5 32.25 26.75 L31.35 26 Q29.9 25 28 25 L21 25 M43 25 L39 25 36 28 36 29.95 39 29.95 39 34.85 39 34.95 39 42 43 42 43 25 M12 30 Q12 21.7 17.8 15.8 23.7 10 32 10 40.25 10 46.1 15.8 49.85 19.55 51.25 24.3 L51.8 26.9 52 29.6 52 46 52 46.45 Q51.85 49.15 50.1 51.2 L49.65 51.65 49.45 51.85 Q48 53.2 46.25 53.7 L44 54 20 54 Q16.85 54 14.55 51.85 L14.35 51.65 Q12 49.3 12 46 L12 30 M28 29 Q28.8 29 29.4 29.6 30 30.2 30 31 30 31.8 29.45 32.35 L29.35 32.45 Q28.8 33 28 33 L25 33 25 29 28 29"/>
  </g>
</svg>`,y1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M23 23 L23 40 35 40 35 36 27 36 27 23 23 23 M16 30 L16 16 Q16 12.7 18.35 10.35 20.7 8 24 8 L48 8 Q51.3 8 53.65 10.35 55.75 12.45 56 15.25 L56 16 56 40 Q56 46.6 51.3 51.3 46.6 56 40 56 L12.8 56 Q10.75 56 9.45 54.75 8 53.45 8 51.6 8 50.15 12 43.6 15.75 37.4 16 30 M44.5 27.4 Q45.25 28.15 44 29.45 L37 36 37 40 41.85 40 41.95 40 49 40 49 36 43 36 47.45 31.55 Q49.65 29.35 48.4 26 L47.4 24.65 47.35 24.6 Q45.75 23 43.5 23 L41.85 23 Q39.9 23.05 38.5 24.4 L38.4 24.5 Q37.35 25.6 37.1 27 L37 28 41 28 Q41 27.6 41.3 27.3 41.55 27.05 41.85 27 L41.95 27 43.5 27 Q44.1 27 44.5 27.4"/>
  </g>
</svg>`,b1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M48 30 Q48.25 37.4 52 43.6 56 50.15 56 51.6 56 53.45 54.55 54.75 53.25 56 51.2 56 L24 56 Q17.4 56 12.7 51.3 8 46.6 8 40 L8 16 Q8 12.7 10.35 10.35 12.7 8 16 8 L40 8 Q43.3 8 45.65 10.35 48 12.7 48 16 L48 30 M37.5 27.4 Q38.25 28.15 37 29.45 L30 36 30 40 34.85 40 34.95 40 42 40 42 36 36 36 40.45 31.55 Q42.65 29.35 41.4 26 L40.4 24.65 40.35 24.6 Q38.75 23 36.5 23 L34.85 23 Q32.9 23.05 31.5 24.4 L31.4 24.5 Q30.35 25.6 30.1 27 L30 28 34 28 Q34 27.6 34.3 27.3 34.55 27.05 34.85 27 L34.95 27 36.5 27 Q37.1 27 37.5 27.4 M22 27 Q22.8 27 23.4 27.6 24 28.2 24 29 24 29.8 23.45 30.35 L23.35 30.45 Q22.8 31 22 31 L19 31 19 27 22 27 M15 23 L15 40 19 40 19 35 22 35 24.5 40 28.5 40 25.45 33.9 26.2 33.25 26.25 33.2 Q28 31.45 28 29 28 26.5 26.25 24.75 24.5 23 22 23 L15 23"/>
  </g>
</svg>`,E1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M28 19 L27.7 19.7 Q27.4 20 27 20 L26.3 19.7 26 19 26 16 24 16 24 19 23.7 19.7 23 20 Q22.6 20 22.3 19.7 22 19.4 22 19 L22 11 Q22 10.6 22.3 10.3 22.6 10 23 10 23.4 10 23.7 10.3 L24 11 24 14 26 14 26 11 Q26 10.6 26.3 10.3 26.6 10 27 10 27.4 10 27.7 10.3 L28 11 28 19 M18 12 Q17.6 12 17.3 12.3 17 12.6 17 13 17 13.4 17.3 13.7 17.6 14 17.95 14 L18.05 14 Q19.2 14 20.1 14.9 21 15.8 21 17 21 18.2 20.1 19.1 19.2 20 18 20 L16 20 15.3 19.7 Q15 19.4 15 19 15 18.6 15.3 18.3 15.6 18 16 18 L18 18 Q18.4 18 18.7 17.7 L19 17 18.7 16.3 Q18.4 16 18.05 16 L17.95 16 Q16.8 16 15.9 15.1 15 14.2 15 13 15 11.8 15.9 10.9 16.8 10 18 10 L20 10 Q20.4 10 20.7 10.3 L21 11 20.7 11.7 20 12 18 12 M39.1 14 L39.45 13.9 39.7 13.7 39.75 13.7 40 13 39.7 12.25 Q39.45 12 39.05 12 L38 12 38 14 39.1 14 M29 12.8 Q29 11.65 29.85 10.8 L29.9 10.75 Q30.75 10 32 10 33.15 10 34.05 10.75 L34.1 10.8 Q35 11.65 35 12.8 L35 19 34.7 19.7 Q34.4 20 34 20 L33.3 19.7 Q33 19.4 33 19 L33 17 31 17 31 19 30.7 19.7 Q30.4 20 30 20 L29.3 19.7 Q29 19.4 29 19 L29 12.8 M31 12.8 L31 15 33 15 33 12.8 32.75 12.25 32.75 12.3 Q32.45 12 32 12 31.55 12 31.2 12.3 L31.25 12.2 Q31 12.45 31 12.8 M41.1 15.1 L41.1 15.15 40.45 15.65 41.9 18.55 41.95 19.35 41.45 19.9 40.7 19.95 Q40.3 19.8 40.1 19.45 L38.4 16 38 16 38 19 37.7 19.7 37 20 36.3 19.7 Q36 19.4 36 19 L36 11 Q36 10.6 36.3 10.3 36.6 10 37 10 L39.05 10 Q40.25 10 41.1 10.85 42 11.75 42 13 42 14.25 41.1 15.1 M43 11 Q43 10.6 43.3 10.3 43.6 10 44 10 L48 10 Q48.4 10 48.7 10.3 L49 11 48.7 11.7 Q48.4 12 48 12 L45 12 45 14 48 14 Q48.4 14 48.7 14.3 L49 15 48.7 15.7 Q48.4 16 48 16 L45 16 45 18 48 18 Q48.4 18 48.7 18.3 L49 19 48.7 19.7 Q48.4 20 48 20 L44 20 Q43.6 20 43.3 19.7 43 19.4 43 19 L43 11 M32 26 Q35.3 26 37.65 28.35 40 30.7 40 34 L40 46 Q40 49.3 37.65 51.65 35.3 54 32 54 28.7 54 26.35 51.65 24 49.3 24 46 L24 34 Q24 30.7 26.35 28.35 28.7 26 32 26"/>
  </g>
</svg>`,A1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M10.85 10.8 L10.9 10.75 Q11.75 10 13 10 14.15 10 15.05 10.75 L15.1 10.8 Q16 11.65 16 12.8 L16 17.25 Q16 18.35 15.1 19.25 L15.05 19.3 Q14.15 20 13 20 11.75 20 10.9 19.3 L10.85 19.2 Q10 18.35 10 17.25 L10 12.8 Q10 11.65 10.85 10.8 M12 12.8 L12 17.25 12.2 17.75 13 18 13.75 17.75 13.75 17.8 14 17.25 14 12.8 13.75 12.25 13.75 12.3 Q13.45 12 13 12 12.55 12 12.2 12.3 L12.25 12.2 12 12.8 M20.1 14 L20.45 13.9 20.7 13.7 20.75 13.7 21 13 20.7 12.25 Q20.45 12 20.05 12 L19 12 19 14 20.1 14 M19 19 L18.7 19.7 Q18.4 20 18 20 L17.3 19.7 Q17 19.4 17 19 L17 11 Q17 10.6 17.3 10.3 17.6 10 18 10 L20.05 10 Q21.25 10 22.1 10.85 23 11.75 23 13 23 14.25 22.1 15.1 L22.1 15.15 21.45 15.65 21.35 15.7 20.1 16 19 16 19 19 M25 12 L24.3 11.7 Q24 11.4 24 11 24 10.6 24.3 10.3 24.6 10 25 10 L29 10 29.7 10.3 30 11 29.7 11.7 29 12 28 12 28 19 27.7 19.7 Q27.4 20 27 20 L26.3 19.7 26 19 26 12 25 12 M36 12.8 L36 17.25 36.2 17.75 37 18 37.75 17.75 37.75 17.8 38 17.25 38 12.8 37.75 12.25 37.75 12.3 Q37.45 12 37 12 36.55 12 36.2 12.3 L36.25 12.2 36 12.8 M34.85 10.8 L34.9 10.75 Q35.75 10 37 10 38.15 10 39.05 10.75 L39.1 10.8 Q40 11.65 40 12.8 L40 17.25 Q40 18.35 39.1 19.25 L39.05 19.3 Q38.15 20 37 20 35.75 20 34.9 19.3 L34.85 19.2 Q34 18.35 34 17.25 L34 12.8 Q34 11.65 34.85 10.8 M33 19 L32.7 19.7 32 20 Q31.6 20 31.3 19.7 31 19.4 31 19 L31 11 Q31 10.6 31.3 10.3 31.6 10 32 10 32.4 10 32.7 10.3 L33 11 33 19 M47 19 L46.8 19.65 46.25 20 45.6 19.9 45.1 19.45 43 15.25 43 19 42.7 19.7 42 20 41.3 19.7 Q41 19.4 41 19 L41 11 Q41 10.65 41.25 10.4 L41.8 10.05 42.45 10.1 42.9 10.55 45 14.75 45 11 Q45 10.6 45.3 10.3 45.6 10 46 10 46.4 10 46.7 10.3 L47 11 47 19 M51 12 Q50.6 12 50.3 12.3 50 12.6 50 13 50 13.4 50.3 13.7 L50.95 14 51.05 14 Q52.2 14 53.1 14.9 54 15.8 54 17 54 18.2 53.1 19.1 52.2 20 51 20 L49 20 Q48.6 20 48.3 19.7 48 19.4 48 19 48 18.6 48.3 18.3 48.6 18 49 18 L51 18 Q51.4 18 51.7 17.7 L52 17 51.7 16.3 Q51.4 16 51.05 16 L50.95 16 Q49.8 16 48.9 15.1 48 14.2 48 13 48 11.8 48.9 10.9 49.8 10 51 10 L53 10 Q53.4 10 53.7 10.3 L54 11 53.7 11.7 53 12 51 12 M32 26 Q35.3 26 37.65 28.35 40 30.7 40 34 L40 46 39.85 47.6 Q39.4 49.9 37.65 51.65 35.3 54 32 54 28.7 54 26.35 51.65 24.6 49.9 24.15 47.6 L24 46 24 34 Q24 30.7 26.35 28.35 28.7 26 32 26"/>
  </g>
</svg>`,P1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M31.2 37 Q24.55 36.75 19.8 32.95 L19.7 32.9 Q16.3 30 16 26.1 L16 26.05 Q16.25 22 19.85 19 L19.95 18.9 Q25 15 32 15 39.15 15 44.2 19 L44.15 19 Q47.7 22 48 25.95 L48 26.05 Q47.7 30 44.2 32.9 L44 33.05 Q39.35 36.75 32.8 37 L31.2 37 M42.8 40.15 L46.55 37.7 46.6 37.65 Q51.9 33.4 52 27.4 51.85 21.4 46.55 17.1 40.55 12.3 32 12.3 23.45 12.3 17.4 17.1 L17.45 17.1 Q12.15 21.4 12 27.4 12.1 33.45 17.4 37.65 L21.25 40.15 Q21 40.8 21 41.65 21 43.5 22.25 44.85 L22.3 44.95 28.7 51.6 Q30 53 32 53 33.85 53.05 35.3 51.65 L35.3 51.6 41.7 44.95 41.8 44.85 Q43 43.5 43 41.65 L42.8 40.15 M43 50 Q43 52.5 39.75 54.25 36.55 56 32 56 27.5 56 24.25 54.25 21 52.5 21 50 L21 47.9 Q17.8 46.55 15 44.3 8 38.7 8 30.65 L8 30.1 8 29.55 8 29 8 28.5 8 28.1 8 27.95 8 27.4 Q8 19.4 15 13.65 22.05 8 32 8 42 8 48.95 13.65 56 19.4 56 27.4 L56 27.95 56 28.1 56 28.5 56 29 56 29.55 56 30.1 56 30.65 Q56 38.7 48.95 44.3 46.2 46.55 43 47.9 L43 50 M31 30 L31 20 28 20 28 33 37 33 37 30 31 30 M25.6 40 L38.4 40 Q39.05 40 39.55 40.5 L40 41.3 40 41.65 Q40 42.35 39.55 42.85 L33.15 49.5 Q32.65 50 32 50 31.3 50 30.85 49.5 L24.45 42.85 Q24 42.35 24 41.65 L24.05 41.3 24.45 40.5 Q24.9 40 25.6 40"/>
    <path stroke="none" fill="#FFFFFF" fill-opacity="0" d="M25.6 40 Q24.9 40 24.45 40.5 L24.05 41.3 24 41.65 Q24 42.35 24.45 42.85 L30.85 49.5 Q31.3 50 32 50 32.65 50 33.15 49.5 L39.55 42.85 Q40 42.35 40 41.65 L40 41.3 39.55 40.5 Q39.05 40 38.4 40 L25.6 40 M32.8 37 L38.4 37 Q40.25 36.95 41.7 38.4 42.45 39.15 42.8 40.15 L43 41.65 Q43 43.5 41.8 44.85 L41.7 44.95 35.3 51.6 35.3 51.65 Q33.85 53.05 32 53 30 53 28.7 51.6 L22.3 44.95 22.25 44.85 Q21 43.5 21 41.65 21 40.8 21.25 40.15 21.55 39.2 22.25 38.5 23.55 37 25.6 37 L31.2 37 32.8 37"/>
  </g>
</svg>`,I1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M31.2 37 Q24.55 36.75 19.8 32.95 L19.7 32.9 Q16.3 30 16 26.1 L16 26.05 Q16.25 22 19.85 19 L19.95 18.9 Q25 15 32 15 39.15 15 44.2 19 L44.15 19 Q47.7 22 48 25.95 L48 26.05 Q47.7 30 44.2 32.9 L44 33.05 Q39.35 36.75 32.8 37 L31.2 37 M42.8 40.15 L46.55 37.7 46.6 37.65 Q51.9 33.4 52 27.4 51.85 21.4 46.55 17.1 40.55 12.3 32 12.3 23.45 12.3 17.4 17.1 L17.45 17.1 Q12.15 21.4 12 27.4 12.1 33.45 17.4 37.65 L21.25 40.15 Q21 40.8 21 41.65 21 43.5 22.25 44.85 L22.3 44.95 28.7 51.6 Q30 53 32 53 33.85 53.05 35.3 51.65 L35.3 51.6 41.7 44.95 41.8 44.85 Q43 43.5 43 41.65 L42.8 40.15 M43 50 Q43 52.5 39.75 54.25 36.55 56 32 56 27.5 56 24.25 54.25 21 52.5 21 50 L21 47.9 Q17.8 46.55 15 44.3 8 38.7 8 30.65 L8 30.1 8 29.55 8 29 8 28.5 8 28.1 8 27.95 8 27.4 Q8 19.4 15 13.65 22.05 8 32 8 42 8 48.95 13.65 56 19.4 56 27.4 L56 27.95 56 28.1 56 28.5 56 29 56 29.55 56 30.1 56 30.65 Q56 38.7 48.95 44.3 46.2 46.55 43 47.9 L43 50 M33 30 L34 29.9 34 30 35 33 38 33 36.5 28.5 Q38 27.05 38 25 38 22.95 36.5 21.45 35.05 20 33 20 L27 20 27 33 30 33 30 30 33 30 M30 27 L30 23 33 23 Q33.85 23 34.4 23.55 35 24.15 35 25 35 25.85 34.4 26.4 33.85 27 33.05 27 L30 27 M30.85 49.5 L24.45 42.85 Q24 42.35 24 41.65 L24.05 41.3 24.45 40.5 Q24.9 40 25.6 40 L38.4 40 Q39.05 40 39.55 40.5 L40 41.3 40 41.65 Q40 42.35 39.55 42.85 L33.15 49.5 Q32.65 50 32 50 31.3 50 30.85 49.5"/>
    <path stroke="none" fill="#FFFFFF" fill-opacity="0" d="M30.85 49.5 Q31.3 50 32 50 32.65 50 33.15 49.5 L39.55 42.85 Q40 42.35 40 41.65 L40 41.3 39.55 40.5 Q39.05 40 38.4 40 L25.6 40 Q24.9 40 24.45 40.5 L24.05 41.3 24 41.65 Q24 42.35 24.45 42.85 L30.85 49.5 M32.8 37 L38.4 37 Q40.25 36.95 41.7 38.4 42.45 39.15 42.8 40.15 L43 41.65 Q43 43.5 41.8 44.85 L41.7 44.95 35.3 51.6 35.3 51.65 Q33.85 53.05 32 53 30 53 28.7 51.6 L22.3 44.95 22.25 44.85 Q21 43.5 21 41.65 21 40.8 21.25 40.15 21.55 39.2 22.25 38.5 23.55 37 25.6 37 L31.2 37 32.8 37"/>
  </g>
</svg>`,C1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#E73246" d="M40 10 L40 19.15 Q40 20 39.45 20.6 L33.45 26.6 Q32.85 27.15 32 27.15 31.15 27.15 30.6 26.6 L24.6 20.6 Q24 20 24 19.15 L24 10 Q24 9.15 24.6 8.6 25.15 8 26 8 L38 8 Q38.85 8 39.45 8.6 40 9.15 40 10"/>
    <path stroke="none" fill="#FFFFFF" d="M56 26 L56 38 Q56 38.85 55.45 39.45 54.85 40 54 40 L44.85 40 Q44 40 43.45 39.45 L37.45 33.45 Q36.85 32.85 36.85 32 36.85 31.15 37.45 30.6 L43.45 24.6 Q44 24 44.85 24 L54 24 Q54.85 24 55.45 24.6 56 25.15 56 26 M33.45 37.45 L39.45 43.45 Q40 44 40 44.85 L40 54 Q40 54.85 39.45 55.45 38.85 56 38 56 L26 56 Q25.15 56 24.6 55.45 24 54.85 24 54 L24 44.85 Q24 44 24.6 43.45 L30.6 37.45 Q31.15 36.85 32 36.85 32.85 36.85 33.45 37.45 M19.15 40 L10 40 Q9.15 40 8.6 39.45 8 38.85 8 38 L8 26 Q8 25.15 8.6 24.6 9.15 24 10 24 L19.15 24 Q20 24 20.6 24.6 L26.6 30.6 Q27.15 31.15 27.15 32 27.15 32.85 26.6 33.45 L20.6 39.45 Q20 40 19.15 40"/>
  </g>
</svg>`,T1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M40 10 L40 19.15 Q40 20 39.45 20.6 L33.45 26.6 Q32.85 27.15 32 27.15 31.15 27.15 30.6 26.6 L24.6 20.6 Q24 20 24 19.15 L24 10 Q24 9.15 24.6 8.6 25.15 8 26 8 L38 8 Q38.85 8 39.45 8.6 40 9.15 40 10 M56 26 L56 38 Q56 38.85 55.45 39.45 54.85 40 54 40 L44.85 40 Q44 40 43.45 39.45 L37.45 33.45 Q36.85 32.85 36.85 32 36.85 31.15 37.45 30.6 L43.45 24.6 Q44 24 44.85 24 L54 24 Q54.85 24 55.45 24.6 56 25.15 56 26 M19.15 40 L10 40 Q9.15 40 8.6 39.45 8 38.85 8 38 L8 26 Q8 25.15 8.6 24.6 9.15 24 10 24 L19.15 24 Q20 24 20.6 24.6 L26.6 30.6 Q27.15 31.15 27.15 32 27.15 32.85 26.6 33.45 L20.6 39.45 Q20 40 19.15 40"/>
    <path stroke="none" fill="#E73246" d="M33.45 37.45 L39.45 43.45 Q40 44 40 44.85 L40 54 Q40 54.85 39.45 55.45 38.85 56 38 56 L26 56 Q25.15 56 24.6 55.45 24 54.85 24 54 L24 44.85 Q24 44 24.6 43.45 L30.6 37.45 Q31.15 36.85 32 36.85 32.85 36.85 33.45 37.45"/>
  </g>
</svg>`,N1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M40 10 L40 19.15 Q40 20 39.45 20.6 L33.45 26.6 Q32.85 27.15 32 27.15 31.15 27.15 30.6 26.6 L24.6 20.6 Q24 20 24 19.15 L24 10 Q24 9.15 24.6 8.6 25.15 8 26 8 L38 8 Q38.85 8 39.45 8.6 40 9.15 40 10 M56 26 L56 38 Q56 38.85 55.45 39.45 54.85 40 54 40 L44.85 40 Q44 40 43.45 39.45 L37.45 33.45 Q36.85 32.85 36.85 32 36.85 31.15 37.45 30.6 L43.45 24.6 Q44 24 44.85 24 L54 24 Q54.85 24 55.45 24.6 56 25.15 56 26 M33.45 37.45 L39.45 43.45 Q40 44 40 44.85 L40 54 Q40 54.85 39.45 55.45 38.85 56 38 56 L26 56 Q25.15 56 24.6 55.45 24 54.85 24 54 L24 44.85 Q24 44 24.6 43.45 L30.6 37.45 Q31.15 36.85 32 36.85 32.85 36.85 33.45 37.45"/>
    <path stroke="none" fill="#E73246" d="M19.15 40 L10 40 Q9.15 40 8.6 39.45 8 38.85 8 38 L8 26 Q8 25.15 8.6 24.6 9.15 24 10 24 L19.15 24 Q20 24 20.6 24.6 L26.6 30.6 Q27.15 31.15 27.15 32 27.15 32.85 26.6 33.45 L20.6 39.45 Q20 40 19.15 40"/>
  </g>
</svg>`,D1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M40 10 L40 19.15 Q40 20 39.45 20.6 L33.45 26.6 Q32.85 27.15 32 27.15 31.15 27.15 30.6 26.6 L24.6 20.6 Q24 20 24 19.15 L24 10 Q24 9.15 24.6 8.6 25.15 8 26 8 L38 8 Q38.85 8 39.45 8.6 40 9.15 40 10 M33.45 37.45 L39.45 43.45 Q40 44 40 44.85 L40 54 Q40 54.85 39.45 55.45 38.85 56 38 56 L26 56 Q25.15 56 24.6 55.45 24 54.85 24 54 L24 44.85 Q24 44 24.6 43.45 L30.6 37.45 Q31.15 36.85 32 36.85 32.85 36.85 33.45 37.45 M19.15 40 L10 40 Q9.15 40 8.6 39.45 8 38.85 8 38 L8 26 Q8 25.15 8.6 24.6 9.15 24 10 24 L19.15 24 Q20 24 20.6 24.6 L26.6 30.6 Q27.15 31.15 27.15 32 27.15 32.85 26.6 33.45 L20.6 39.45 Q20 40 19.15 40"/>
    <path stroke="none" fill="#E73246" d="M56 26 L56 38 Q56 38.85 55.45 39.45 54.85 40 54 40 L44.85 40 Q44 40 43.45 39.45 L37.45 33.45 Q36.85 32.85 36.85 32 36.85 31.15 37.45 30.6 L43.45 24.6 Q44 24 44.85 24 L54 24 Q54.85 24 55.45 24.6 56 25.15 56 26"/>
  </g>
</svg>`,R1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M37.7 26.35 Q40 28.65 40 32 40 35.35 37.7 37.7 35.35 40 32 40 28.7 40 26.4 37.7 L26.35 37.65 Q24 35.3 24 32 24 28.7 26.35 26.35 L26.4 26.35 Q28.7 24 32 24 35.35 24 37.7 26.35 M44 32 Q44 27 40.5 23.5 37 20 32 20 27.05 20 23.55 23.5 20 27 20 32 20 37 23.55 40.5 27.05 44 32 44 37 44 40.5 40.5 44 37 44 32 M56 32 Q56 42 48.95 48.95 42 56 32 56 22.05 56 15 48.95 8 42 8 32 8 22.05 15 15 22.05 8 32 8 42 8 48.95 15 56 22.05 56 32"/>
  </g>
</svg>`,q1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M44.15 19 Q47.7 22 48 25.95 L48 26.05 Q47.7 30 44.2 32.9 L44 33.05 Q39.05 37 32 37 24.85 37 19.8 32.95 L19.7 32.9 Q16.3 30 16 26.1 L16 26.05 Q16.25 22 19.85 19 L19.95 18.9 Q25 15 32 15 39.15 15 44.2 19 L44.15 19 M43 50 Q43 52.5 39.75 54.25 36.55 56 32 56 27.5 56 24.25 54.25 21 52.5 21 50 L21 47.9 Q17.8 46.55 15 44.3 8 38.7 8 30.65 L8 30.1 8 29.55 8 29 8 28.5 8 28.1 8 27.95 8 27.4 Q8 19.4 15 13.65 22.05 8 32 8 42 8 48.95 13.65 56 19.4 56 27.4 L56 27.95 56 28.1 56 28.5 56 29 56 29.55 56 30.1 56 30.65 Q56 38.7 48.95 44.3 46.2 46.55 43 47.9 L43 50 M31 30 L31 20 28 20 28 33 37 33 37 30 31 30 M12 27.4 Q12.1 33.45 17.4 37.65 23.45 42.5 32 42.5 40.55 42.5 46.55 37.7 L46.6 37.65 Q51.9 33.4 52 27.4 51.85 21.4 46.55 17.1 40.55 12.3 32 12.3 23.45 12.3 17.4 17.1 L17.45 17.1 Q12.15 21.4 12 27.4"/>
  </g>
</svg>`,O1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M44.15 19 Q47.7 22 48 25.95 L48 26.05 Q47.7 30 44.2 32.9 L44 33.05 Q39.05 37 32 37 24.85 37 19.8 32.95 L19.7 32.9 Q16.3 30 16 26.1 L16 26.05 Q16.25 22 19.85 19 L19.95 18.9 Q25 15 32 15 39.15 15 44.2 19 L44.15 19 M43 50 Q43 52.5 39.75 54.25 36.55 56 32 56 27.5 56 24.25 54.25 21 52.5 21 50 L21 47.9 Q17.8 46.55 15 44.3 8 38.7 8 30.65 L8 30.1 8 29.55 8 29 8 28.5 8 28.1 8 27.95 8 27.4 Q8 19.4 15 13.65 22.05 8 32 8 42 8 48.95 13.65 56 19.4 56 27.4 L56 27.95 56 28.1 56 28.5 56 29 56 29.55 56 30.1 56 30.65 Q56 38.7 48.95 44.3 46.2 46.55 43 47.9 L43 50 M33 30 L34 29.9 34 30 35 33 38 33 36.5 28.5 Q38 27.05 38 25 38 22.95 36.5 21.45 35.05 20 33 20 L27 20 27 33 30 33 30 30 33 30 M30 27 L30 23 33 23 Q33.85 23 34.4 23.55 35 24.15 35 25 35 25.85 34.4 26.4 33.85 27 33.05 27 L30 27 M12 27.4 Q12.1 33.45 17.4 37.65 23.45 42.5 32 42.5 40.55 42.5 46.55 37.7 L46.6 37.65 Q51.9 33.4 52 27.4 51.85 21.4 46.55 17.1 40.55 12.3 32 12.3 23.45 12.3 17.4 17.1 L17.45 17.1 Q12.15 21.4 12 27.4"/>
  </g>
</svg>`;var G1=S('<div class="svg-container svelte-6pjcsf"><!></div>');function z(e,t){X(t,!0);let n=u(t,"width",3,40),s=u(t,"height",3,40),i=u(t,"color",3,"#666666");const o={0:F1,1:k1,2:x1,3:_1,4:m1,5:M1,6:y1,7:b1,8:E1,9:A1,10:P1,11:I1,12:C1,13:T1,14:N1,15:D1,16:R1,axis_left:q1,axis_right:O1},L={"/":$5,"*":t4,",":n4,".":e4,":":s4,";":i4,"[":o4,"]":r4,"+":a4,"-":l4,"~":L4," ":g4,'"':d4,backspace:h4,capslock:Q4,tab:w4,shift:f4,arrowleft:p4,arrowright:u4,arrowup:c4,arrowdown:v4,pagedown:F4,pageup:k4,end:x4,home:_4,control:m4,enter:M4,a:y4,b:b4,c:E4,d:A4,e:P4,f:I4,g:C4,h:T4,i:N4,j:D4,k:R4,l:q4,m:O4,n:G4,o:H4,p:S4,q:B4,r:z4,s:U4,t:V4,u:W4,v:K4,w:X4,x:Y4,y:j4,z:J4,0:Z4,1:$4,2:t1,3:n1,4:e1,5:s1,6:i1,7:o1,8:r1,9:a1,f1:l1,f2:L1,f3:g1,f4:d1,f5:h1,f6:Q1,f7:w1,f8:f1,f9:p1,f10:u1,f11:c1,f12:v1},Q={0:Y5,1:j5,2:J5,3:Z5};let w=n3(void 0);switch(t.type,["ps4","ps5"].includes(t.type),t.type){case"keyboard_mouse":let d=t.input.toLowerCase();R(w,L[d],!0);break;case"ps4":R(w,o[t.input],!0);break;case"generic":t.input in Q?R(w,Q[t.input],!0):R(w,o[t.input],!0)}var p=K3(),g=o3(p);{var f=d=>{var h=G1();let r;var l=N(h);I5(l,()=>P(w).replace("<g>",`<g transform="scale(${Math.min(n()/64,s()/64)})">`).replace('fill="#FFFFFF"',`fill="${i()}"`)),C(h),Z(a=>r=K(h,"",r,a),[()=>({height:`${s()??""}px`,width:`${n()??""}px`})]),D(d,h)};G(g,d=>{P(w)&&d(f)})}D(e,p),Y()}var H1=S('<div><div class="hint"> <!> <!></div></div>');function y3(e,t){X(t,!0);let n=u(t,"context",19,()=>["default"]),s=u(t,"text",3,""),i=u(t,"class",3,"hint-container"),o=u(t,"style",3,"");var L=K3(),Q=o3(L);{var w=p=>{var g=H1(),f=N(g),d=N(f),h=M(d);{var r=c=>{z(c,{type:"keyboard_mouse",get input(){return t.keys[0]}})};G(h,c=>{t.keys.length>0&&c(r)})}var l=M(h,2);{var a=c=>{z(c,{type:"generic",get input(){return t.buttons[0]}})};G(l,c=>{t.buttons.length>0&&c(a)})}C(f),C(g),Z(()=>{V(g,1,s3(i())),K(g,o()),c2(d,`${s()??""} `)}),u3(2,g,()=>v3),u3(1,g,()=>v3),D(p,g)};G(Q,p=>{b.showHints&&n().includes(b.context)&&p(w)})}D(e,L),Y()}class m2 extends X3{thisGamepadButton(t,n){return super.thisGamepadButton(t,n)&&this.input.buttons.includes(n)}thisKey(t){return this.input.keys.includes(t.key.toLowerCase())||!1}}var S1=(e,t)=>{P(t)?.onpressed(),setTimeout(()=>{P(t)?.onrelease()},50)},B1=S("<div><button><!></button> <!></div>");function M2(e,t){X(t,!0);let n=u(t,"disabled",3,!1),s=u(t,"onpressed",3,void 0),i=u(t,"onhold",3,void 0),o=u(t,"onrelease",3,void 0),L=u(t,"onpointerout",3,void 0),Q=u(t,"style",3,""),w=u(t,"cssclass",3,"vbutton"),p=u(t,"cssclassWrapper",3,"button-wrapper"),g=u(t,"inputMapping",19,()=>({name:"",gamepad:-1,buttons:[O.DOWN],keys:["e"," "]})),f=u(t,"context",19,()=>["default"]),d=u(t,"requiresFocus",3,!1),h=u(t,"consumePress",3,!1),r=n3(""),l,a=n3(void 0);function c(){return l}g3(()=>(R(a,new m(g(),l,d(),s(),i(),o(),h()),!0),F3(f(),P(a)),()=>{P(a)&&k3(f(),P(a))}));class m extends m2{onpressed(){return R(r,"button_clicked "),super.onpressed()}onrelease(){R(r,""),super.onrelease()}}var v=B1(),F=N(v);F.__pointerdown=function(...x){P(a)?.onpressed?.apply(this,x)},F.__click=[S1,a],F.__pointerup=function(...x){P(a)?.onrelease?.apply(this,x)},F.__pointerout=function(...x){L()?.apply(this,x)};var E=N(F);m5(E,()=>t.children),C(F),l3(F,x=>l=x,()=>l);var k=M(F,2);return y3(k,{get context(){return f()},get keys(){return g().keys},get buttons(){return g().buttons},style:"left: 50%;"}),C(v),Z(()=>{V(v,1,s3(p()),"svelte-bpza0d"),K(F,Q()),V(F,1,P(r)+w(),"svelte-bpza0d"),F.disabled=n()}),D(e,v),Y({getElement:c})}A3(["pointerdown","click","pointerup","pointerout"]);function z1(e,t){X(t,!0);let n=u(t,"updateUsingAnimationFrame",3,!1),s=u(t,"updateUsingInterval",3,!0),i=u(t,"timeout",3,1e3/25),o=!0;const L=r=>{b.activeComponents.forEach(a=>{a.focusElement&&a.focusElement.blur()}),b.activeComponents=[],b.components[r].forEach(a=>{(!a.requiresFocus||a.focusElement===document.activeElement)&&V3(a)}),b.context=r};let Q={},w={};const p=()=>{let r=b.activeComponents;for(let l of navigator.getGamepads())if(l){for(let a=0;a<l.buttons.length;a++){if(l.buttons[a].pressed&&(r.forEach(c=>{c.thisGamepadButton(l,a)&&c.onbuttonhold(l,a)}),!Q[a])){Q[a]=!0;for(let c of r)if(c.thisGamepadButton(l,a)&&c.onbuttonpressed(l,a)===!0)break}Q[a]&&!l.buttons[a].pressed&&(Q[a]=!1,r.forEach(c=>{c.thisGamepadButton(l,a)&&c.onbuttonrelease(l,a)}))}r.forEach(a=>{c3(a.input,l)&&a.onupdate(l)})}},g=()=>{p(),o&&requestAnimationFrame(g)};g3(()=>{let r;return n()?(o=!0,g()):s()&&(r=setInterval(p,i())),()=>{r&&clearInterval(r),o=!1,b.activeComponents=[]}});const f=r=>{let l=b.activeComponents;for(let a of l)if(a.onkeypressed(r)===!0)break},d=r=>{const l=r.key.toLowerCase();w[l]||f(r);let a=b.activeComponents;w[l]=!0,a.forEach(c=>{c.onkeyhold(r)})},h=r=>{const l=r.key.toLowerCase();delete w[l],b.activeComponents.forEach(c=>{c.onkeyrelease(r)})};return L3("keydown",E3,d),L3("keyup",E3,h),Y({changeContext:L})}class y2 extends X3{gamepadActive=!0;pos=[0,0];updatePosition;xPos=!1;xNeg=!1;yPos=!1;yNeg=!1;constructor(t,n,s,i=!1){super(t,s,i),this.updatePosition=n}onrelease(){let t=this.pos[0],n=this.pos[1];(this.xPos||this.xNeg)&&(t=0),(this.yPos||this.yNeg)&&(n=0),!(t==this.pos[0]&&n==this.pos[1])&&(this.pos=[t,n],this.updatePosition(!0,this.pos))}onhold(){let t=this.pos[0],n=this.pos[1];this.xPos?t=1:this.xNeg&&(t=-1),this.yPos?n=1:this.yNeg&&(n=-1),!(t==this.pos[0]&&n==this.pos[1])&&(this.pos=[t,n],this.updatePosition(!0,this.pos))}updateKeys(t){const n=this.input,s=t.key.toLowerCase();this.xPos=n.key_x_pos.includes(s),this.xNeg=n.key_x_neg.includes(s),this.yPos=n.key_y_pos.includes(s),this.yNeg=n.key_y_neg.includes(s)}thisKey(t){return this.xPos||this.xNeg||this.yPos||this.yNeg}onkeyrelease(t){this.disabled||(this.updateKeys(t),super.onkeyrelease(t))}onkeyhold(t){this.disabled||(this.updateKeys(t),super.onkeyhold(t))}updateButton(t){const n=this.input;this.xPos=n.button_x_pos.includes(t),this.xNeg=n.button_x_neg.includes(t),this.yPos=n.button_y_pos.includes(t),this.yNeg=n.button_y_neg.includes(t)}onbuttonhold(t,n){this.disabled||(this.updateButton(n),super.onbuttonhold(t,n))}onbuttonrelease(t,n){this.disabled||(this.updateButton(n),super.onbuttonrelease(t,n))}onupdate(t){if(this.disabled||!this.gamepadActive||!c3(this.input,t))return;const n=this.input;let s=t.axes[n.axes_x],i=t.axes[n.axes_y];if(n.invert_x&&(s=-s),n.invert_y&&(i=-i),Math.abs(s)<n.deadzoneX&&Math.abs(i)<n.deadzoneY){this.updatePosition(!1,[0,0]);return}this.updatePosition(!0,[s,i])}activateGamepad=()=>{this.disabled||(this.gamepadActive=!0)}}class U1 extends X3{axesDown=-1;changeFocus;constructor(t,n,s,i=!1,o,L,Q,w=!1){super(t,s,i,o,L,Q,w),this.changeFocus=n}onbuttonpressed(t,n){if(this.disabled||!c3(this.input,t))return!1;const s=this.input;return s.buttons.includes(n)?this.onpressed():(s.buttons_next.includes(n)&&this.changeFocus(1),s.buttons_prev.includes(n)&&this.changeFocus(-1),!1)}onkeypressed(t){if(this.disabled)return!1;const n=this.input,s=t.key.toLowerCase();return n.keys.includes(s)?this.onpressed():(n.keys_next.includes(s)&&this.changeFocus(1),n.keys_prev.includes(s)&&this.changeFocus(-1),!1)}onupdate(t){if(this.disabled||!c3(this.input,t))return;const n=this.input;for(const s of n.axes){const i=t.axes[s];let o=n.sensitivity;if(i<-o&&this.axesDown!=s){this.changeFocus(-1),this.axesDown=s;continue}if(i>o&&this.axesDown!=s){this.changeFocus(1),this.axesDown=s;continue}i<o&&i>-o&&(this.axesDown=-1)}}}var V1=(e,t,n)=>{t(t()[1]=n().invert_y?1:-1,!0)},W1=(e,t,n)=>{t(t()[1]=0,!0),R(n,!1)},K1=(e,t,n)=>{t(t()[0]=n().invert_x?1:-1,!0)},X1=(e,t,n)=>{t(t()[0]=0,!0),R(n,!1)},Y1=(e,t,n)=>{t(t()[0]=n().invert_x?-1:1,!0)},j1=(e,t,n)=>{t(t()[0]=0,!0),R(n,!1)},J1=(e,t,n)=>{t(t()[1]=n().invert_y?-1:1,!0)},Z1=(e,t,n)=>{t(t()[1]=0,!0),R(n,!1)},$1=S('<div role="button"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><linearGradient gradientUnits="userSpaceOnUse" x1="-819.2" x2="819.2" spreadMethod="pad" gradientTransform="matrix(0 0.05859375 -0.05859375 0 48 48)" id="gradient0"><stop offset="0" stop-color="#333341"></stop><stop offset="1" stop-color="#1E1E23"></stop></linearGradient></defs><g><g><path stroke="none" fill="url(#gradient0)" d="M36 0 L60 0 Q62.5 0 64.25 1.75 66 3.5 66 6 L66 30 90 30 Q92.5 30 94.25 31.75 96 33.5 96 36 L96 60 Q96 62.5 94.25 64.25 92.5 66 90 66 L66 66 66 90 Q66 92.5 64.25 94.25 62.5 96 60 96 L36 96 Q33.5 96 31.75 94.25 30 92.5 30 90 L30 66 6 66 Q3.5 66 1.75 64.25 0 62.5 0 60 L0 36 Q0 33.5 1.75 31.75 3.5 30 6 30 L30 30 30 6 Q30 3.5 31.75 1.75 33.5 0 36 0 M60 6 L36 6 36 36 6 36 6 60 36 60 36 90 60 90 60 60 90 60 90 36 60 36 60 6"></path><path stroke="none" fill="#1E1E23" d="M60 6 L60 36 90 36 90 60 60 60 60 90 36 90 36 60 6 60 6 36 36 36 36 6 60 6"></path><path fill="none" stroke="#151519" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" d="M60 6 L60 36 90 36 90 60 60 60 60 90 36 90 36 60 6 60 6 36 36 36 36 6 60 6"></path><path stroke="none" fill="#3F3F4D" d="M51 48 Q51 49.25 50.1 50.1 49.25 51 48 51 46.75 51 45.85 50.1 45 49.25 45 48 45 46.75 45.85 45.85 46.75 45 48 45 49.25 45 50.1 45.85 51 46.75 51 48"></path><path stroke="none" id="dpad-arrow-up" d="M43.15 20.65 L47.15 14.45 Q47.35 14.1 47.7 14.05 L48.3 14.05 Q48.6 14.1 48.8 14.45 L52.9 20.65 53 21.3 52.7 21.75 52.05 22 43.95 22 43.3 21.75 43 21.3 Q42.95 20.95 43.15 20.65"></path><path stroke="none" id="dpad-arrow-down" d="M43.15 75.35 L43 74.7 43.3 74.25 Q43.55 74 43.95 74 L52.05 74 Q52.4 74 52.7 74.25 L53 74.7 52.9 75.35 48.8 81.55 48.3 81.95 47.7 81.95 47.15 81.55 43.15 75.35"></path><path stroke="none" id="dpad-arrow-right" d="M75.35 43.15 L81.55 47.15 81.95 47.7 81.95 48.3 81.55 48.8 75.35 52.9 74.7 53 74.25 52.7 74 52.05 74 43.95 Q74 43.55 74.25 43.3 L74.7 43 75.35 43.15"></path><path stroke="none" id="dpad-arrow-left" d="M20.65 43.15 L21.3 43 21.75 43.3 22 43.95 22 52.05 21.75 52.7 21.3 53 20.65 52.9 14.45 48.8 14.05 48.3 14.05 47.7 Q14.1 47.35 14.45 47.15 L20.65 43.15"></path></g><g id="dpad-up"><rect width="38" height="30" x="29" y="0" class="svelte-1b7sb3l"></rect><rect class="ripple svelte-1b7sb3l" width="38" height="38" x="29" y="0" rx="6"></rect></g><g id="dpad-left"><rect width="30" height="36" x="0" y="30" class="svelte-1b7sb3l"></rect><rect class="ripple svelte-1b7sb3l" width="38" height="38" x="0" y="29" rx="6"></rect></g><g id="dpad-right"><rect width="30" height="36" x="66" y="30" class="svelte-1b7sb3l"></rect><rect class="ripple svelte-1b7sb3l" width="38" height="38" x="58" y="29" rx="6"></rect></g><g id="dpad-down"><rect width="38" height="30" x="29" y="67" class="svelte-1b7sb3l"></rect><rect class="ripple svelte-1b7sb3l" width="38" height="38" x="29" y="60" rx="6"></rect></g></g></svg></div>');function xt(e,t){X(t,!0);let n=u(t,"inputMapping",19,()=>({name:"Virtual D-Pad",gamepad:-1,axes_x:0,axes_y:1,button_x_pos:[O.DPAD_RIGHT],button_x_neg:[O.DPAD_LEFT],button_y_pos:[O.DPAD_DOWN],button_y_neg:[O.DPAD_UP],deadzoneX:.25,deadzoneY:.25,key_x_pos:["d"],key_x_neg:["a"],key_y_pos:["s"],key_y_neg:["w"],invert_x:!1,invert_y:!1})),s=u(t,"position",31,()=>b3([0,0])),i=u(t,"context",19,()=>["default"]),o=u(t,"requiresFocus",3,!1),L=u(t,"scale",3,1.5),Q,w,p=n3(!1),g=n3(!1),f=n3(!1),d=n3(!1);function h(U,A){if(!U)return;const B=[Math.round(A[0]),Math.round(A[1])];R(p,B[0]==-1),R(g,B[0]==1),R(f,B[1]==-1),R(d,B[1]==1),s(B)}g3(()=>(Q=new y2(n(),h,w,o()),F3(i(),Q),()=>{Q&&k3(i(),Q)}));var r=$1();L3("pointerup",E3,()=>{s([0,0])}),i3(r,"tabindex",0),r.__keydown=()=>{w.focus()},r.__click=()=>{w.focus()};var l=N(r),a=M(N(l)),c=N(a),m=M(N(c),4),v=M(m),F=M(v),E=M(F);C(c);var k=M(c);k.__pointerdown=[V1,s,n],k.__pointerup=[W1,s,f];var x=M(k);x.__pointerdown=[K1,s,n],x.__pointerup=[X1,s,p];var I=M(x);I.__pointerdown=[Y1,s,n],I.__pointerup=[j1,s,g];var y=M(I);y.__pointerdown=[J1,s,n],y.__pointerup=[Z1,s,d],C(a),C(l),C(r),l3(r,U=>w=U,()=>w),Z(()=>{i3(l,"width",96*L()),i3(l,"height",96*L()),i3(a,"transform",`scale(${L()??""})`),V(m,0,s3(s()[1]===-1?"dpad-arrow-pressed":"dpad-arrow"),"svelte-1b7sb3l"),V(v,0,s3(s()[1]===1?"dpad-arrow-pressed":"dpad-arrow"),"svelte-1b7sb3l"),V(F,0,s3(s()[0]===1?"dpad-arrow-pressed":"dpad-arrow"),"svelte-1b7sb3l"),V(E,0,s3(s()[0]===-1?"dpad-arrow-pressed":"dpad-arrow"),"svelte-1b7sb3l"),V(k,0,"dpad-button"+(P(f)?" active":""),"svelte-1b7sb3l"),V(x,0,"dpad-button"+(P(p)?" active":""),"svelte-1b7sb3l"),V(I,0,"dpad-button"+(P(g)?" active":""),"svelte-1b7sb3l"),V(y,0,"dpad-button"+(P(d)?" active":""),"svelte-1b7sb3l")}),D(e,r),Y()}A3(["keydown","click","pointerdown","pointerup"]);var tt=S("<!> <!>",1),nt=S("<li> </li>"),et=S('<div role="button"><!> <ul></ul> <!></div>');function st(e,t){X(t,!0);let n=u(t,"onpressed",3,void 0),s=u(t,"disabled",3,!1),i=u(t,"wrap",3,!0),o=u(t,"style",3,""),L=u(t,"cssclass",3,"vlist"),Q=u(t,"selectedIndex",15,0),w=u(t,"focussed",15,0),p=u(t,"inputMapping",19,()=>({name:"List",gamepad:-1,axes:[1],sensitivity:.05,buttons:[O.DOWN],buttons_prev:[O.DPAD_UP],buttons_next:[O.DPAD_DOWN],keys_prev:["arrowup","w"],keys_next:["arrowdown","s"],keys:["enter","r"]})),g=u(t,"context",19,()=>["default"]),f=u(t,"requiresFocus",3,!0);function d(k){let x="item";return x+=Q()===k?" selected":"",w()===k&&(x+=" focussed"),x}function h(k){k>=t.items.length&&(k=i()?0:t.items.length-1),k<0&&(k=i()?t.items.length-1:0),w(k)}function r(){Q(w()),n()&&n()(),_2()}let l;function a(){return l}g3(()=>{const k=new U1(p(),x=>{h(w()+x)},l,f(),r);return F3(g(),k),()=>{k3(g(),k)}});var c=et();i3(c,"tabindex",0);var m=N(c);{var v=k=>{var x=tt(),I=o3(x);y3(I,{text:"↑",get context(){return g()},get keys(){return p().keys_prev},get buttons(){return p().buttons_prev},style:"left: 50%;"});var y=M(I,2);y3(y,{get context(){return g()},get keys(){return p().keys},get buttons(){return p().buttons},style:"left: 50%; top: 50%"}),D(k,x)};G(m,k=>{b.showHints&&g().includes(b.context)&&k(v)})}var F=M(m,2);A5(F,21,()=>t.items,b5,(k,x,I)=>{var y=nt();y.__pointerdown=()=>{s()||(w(I),r())};var U=N(y,!0);C(y),Z(A=>{V(y,1,A,"svelte-1q9b7hc"),c2(U,P(x))},[()=>s3(d(I))]),L3("pointerenter",y,()=>{s()||w(I)}),D(k,y)}),C(F);var E=M(F,2);return y3(E,{text:"↓",get context(){return g()},get keys(){return p().keys_next},get buttons(){return p().buttons_next},style:"left: 50%;"}),C(c),l3(c,k=>l=k,()=>l),Z(()=>{V(c,1,s3(L()),"svelte-1q9b7hc"),K(F,o())}),D(e,c),Y({focusItemAtIndex:h,getElement:a})}A3(["pointerdown"]);function H3(e,t){X(t,!0);let n=u(t,"disabled",3,!1),s=u(t,"onpressed",3,void 0),i=u(t,"onhold",3,void 0),o=u(t,"onrelease",3,void 0),L=u(t,"inputMapping",19,()=>({name:"Help",gamepad:-1,buttons:[O.VIEW],keys:["h"]})),Q=u(t,"context",19,()=>["default"]);g3(()=>{const w=new m2(L(),void 0,!1,s(),i(),o());return w.disabled=n(),F3(Q(),w),()=>{w&&k3(Q(),w)}}),Y()}class it extends y2{radius;calcPos;constructor(t,n,s,i,o,L=!1){super(t,i,o,L),this.radius=n,this.calcPos=s}onrelease(){let t=this.pos[0],n=this.pos[1];(this.xPos||this.xNeg)&&(t=0),(this.yPos||this.yNeg)&&(n=0),!(t==this.pos[0]&&n==this.pos[1])&&(this.calcPos(t*this.radius,n*this.radius),this.pos=[t,n],this.gamepadActive=!0)}onhold(){let t=this.pos[0],n=this.pos[1];this.xPos?t=1:this.xNeg&&(t=-1),this.yPos?n=1:this.yNeg&&(n=-1),!(t==this.pos[0]&&n==this.pos[1])&&(this.pos=[t,n],this.calcPos(t*this.radius,n*this.radius),this.gamepadActive=!1)}}var ot=()=>{},rt=S("<!> <br/>",1),at=S("<!> <br/>",1),lt=S('<div class="hints_container svelte-1annkz1"><div class="hint svelte-1annkz1"><!></div> <div class="hint hint-up svelte-1annkz1"><!> <!></div> <div class="hint hint-down svelte-1annkz1"><!> <!></div> <div class="hint hint-left svelte-1annkz1"><!> <!></div> <div class="hint hint-right svelte-1annkz1"><!> <!></div></div>'),Lt=S('<div id="joystick_area" role="button" class="svelte-1annkz1"><!> <div class="joystick_container svelte-1annkz1"><div class="joystick_back svelte-1annkz1"></div> <div class="joystick_front svelte-1annkz1"></div></div></div>');function _t(e,t){X(t,!0);let n=u(t,"disabled",3,!1),s=u(t,"size",3,100),i=u(t,"backgroundWidth",3,200),o=u(t,"backgroundHeight",3,200),L=u(t,"color",3,"rgb(106, 191, 163)"),Q=u(t,"defaultOpacity",3,.5),w=u(t,"activeOpacity",3,.8),p=u(t,"border",3,1),g=u(t,"borderColor",3,"black"),f=u(t,"position",31,()=>b3([0,0])),d=u(t,"style",3,"background-color: rgb(215, 219, 221);"),h=u(t,"inputMapping",19,()=>({name:"Virtual Joystick",gamepad:-1,axes_x:0,axes_y:1,button_x_pos:[O.DPAD_RIGHT],button_x_neg:[O.DPAD_LEFT],button_y_pos:[O.DPAD_DOWN],button_y_neg:[O.DPAD_UP],deadzoneX:.05,deadzoneY:.05,key_x_pos:["d"],key_x_neg:["a"],key_y_pos:["s"],key_y_neg:["w"],invert_x:!1,invert_y:!1})),r=u(t,"context",19,()=>["default"]),l=u(t,"requiresFocus",3,!1);const a=s()/2;let c=!1,m,v,F=n3(b3(Q()));function E(){return m}function k(T){if(n()||!h().gamepad||!c||!T.target)return;const q=T.target.getBoundingClientRect(),j=T.x-q.x,W=T.y-q.y;v&&(v.gamepadActive=!1,x(j,W))}function x(T,q){let j=T-i()/2,W=q-o()/2;I(j,W)}function I(T,q){const j=z5(T,q),W=U5(T,q);let I3=W5(j,a),_3=V5(I3,W),r3=_3[0]/a,$=_3[1]/a;if(Math.abs(r3)<h().deadzoneX&&Math.abs($)<h().deadzoneY){f([0,0]),R(F,Q());return}r3=Math.abs(r3)<1e-6?0:r3,$=Math.abs($)<1e-6?0:$,R(F,w()),f([r3,$])}function y(){c=!1,R(F,Q()),f([0,0])}function U(T,q){R(F,T?w():Q(),!0),f(q)}g3(()=>(v=new it(h(),a,I,U,m,l()),F3(r(),v),()=>{v&&k3(r(),v)}));var A=Lt();L3("pointerup",E3,y),i3(A,"tabindex",0),A.__keydown=()=>{m.focus()},A.__click=()=>{m.focus()};let B;A.__pointerdown=T=>{n()||(T.stopImmediatePropagation(),c=!0,k(T))},A.__pointerup=()=>{v?.activateGamepad()},A.__pointermove=k,A.__touchstart=[ot],A.__touchend=()=>{v?.activateGamepad()},A.__pointerout=()=>{v?.activateGamepad()};var x3=N(A);{var P3=T=>{var q=lt();let j;var W=N(q),I3=N(W);{var _3=_=>{z(_,{type:"generic",input:"axis_left"})},r3=_=>{var e3=K3(),h3=o3(e3);{var H2=N3=>{z(N3,{type:"generic",input:"axis_right"})};G(h3,N3=>{[2,3].includes(h().axes_x)&&[2,3].includes(h().axes_y)&&N3(H2)},!0)}D(_,e3)};G(I3,_=>{[0,1].includes(h().axes_x)&&[0,1].includes(h().axes_y)?_(_3):_(r3,!1)})}C(W);var $=M(W,2),$3=N($);{var E2=_=>{z(_,{type:"keyboard_mouse",get input(){return h().key_y_neg[0]}})};G($3,_=>{h().key_y_neg.length>0&&_(E2)})}var A2=M($3,2);{var P2=_=>{z(_,{type:"generic",get input(){return h().button_y_neg[0]}})};G(A2,_=>{h().button_y_neg.length>0&&_(P2)})}C($);var C3=M($,2),t2=N(C3);{var I2=_=>{z(_,{type:"keyboard_mouse",get input(){return h().key_y_pos[0]}})};G(t2,_=>{h().key_y_pos.length>0&&_(I2)})}var C2=M(t2,2);{var T2=_=>{z(_,{type:"generic",get input(){return h().button_y_pos[0]}})};G(C2,_=>{h().button_y_pos.length>0&&_(T2)})}C(C3);var T3=M(C3,2),n2=N(T3);{var N2=_=>{var e3=rt(),h3=o3(e3);z(h3,{type:"keyboard_mouse",get input(){return h().key_x_neg[0]}}),f3(2),D(_,e3)};G(n2,_=>{h().key_x_neg.length>0&&_(N2)})}var D2=M(n2,2);{var R2=_=>{z(_,{type:"generic",get input(){return h().button_x_neg[0]}})};G(D2,_=>{h().button_x_neg.length>0&&_(R2)})}C(T3);var e2=M(T3,2),s2=N(e2);{var q2=_=>{var e3=at(),h3=o3(e3);z(h3,{type:"keyboard_mouse",get input(){return h().key_x_pos[0]}}),f3(2),D(_,e3)};G(s2,_=>{h().key_x_pos.length>0&&_(q2)})}var O2=M(s2,2);{var G2=_=>{z(_,{type:"generic",get input(){return h().button_x_pos[0]}})};G(O2,_=>{h().button_x_pos.length>0&&_(G2)})}C(e2),C(q),Z(_=>j=K(q,"",j,_),[()=>({width:i()+"px",height:o()+"px"})]),u3(2,q,()=>v3),u3(1,q,()=>v3),D(T,q)};G(x3,T=>{b.showHints&&r().includes(b.context)&&T(P3)})}var d3=M(x3,2);let Y3;var j3=N(d3);let J3;var b2=M(j3,2);let Z3;return C(d3),C(A),l3(A,T=>m=T,()=>m),Z((T,q,j,W)=>{B=K(A,d(),B,T),Y3=K(d3,"",Y3,q),J3=K(j3,"",J3,j),Z3=K(b2,"",Z3,W)},[()=>({width:i()+"px",height:o()+"px"}),()=>({left:(i()-s())/2+"px",top:(o()-s())/2+"px"}),()=>({width:s()+"px",height:s()+"px",background:L(),opacity:P(F),transition:"none",border:p()>0?p()+"px solid "+g():0}),()=>({left:f()[0]*a+"px",top:f()[1]*a+"px","margin-top":a/2+"px","margin-left":a/2+"px",transition:"opacity 0.2s ease-in-out",width:a+"px",height:a+"px",background:L(),opacity:P(F),border:p()>0?p()+"px solid "+g():0})]),L3("pointerleave",A,()=>{v?.activateGamepad()}),D(e,A),Y({getElement:E})}A3(["keydown","click","pointerdown","pointerup","pointermove","touchstart","touchend","pointerout"]);var gt=S('<div id="sidenav" class="sidenav"><!> <!></div>');function dt(e,t){X(t,!0);let n=u(t,"open",15,!1);const s=["Main","Joystick","D-Pad","List","Slider"],i="/svelte-gamepad-virtual-joystick",o={Main:"/",Joystick:"/joystick","D-Pad":"/d-pad",List:"/list",Slider:"/slider"};let L;function Q(){return L.getElement()}let w=n3(0);function p(){const r=s[P(w)],l=`${i}${o[r]}`;n(!1),t.mgr?.changeContext("default"),y5(l)}var g=gt();let f;var d=N(g);{let r=p3(()=>({name:"close side nav",gamepad:-1,buttons:[O.LEFT],keys:["x"]}));M2(d,{cssclassWrapper:"closebtn",onpressed:()=>{n(!1),t.mgr?.changeContext("default")},context:["nav"],get inputMapping(){return P(r)},children:(l,a)=>{f3();var c=u2("×");D(l,c)},$$slots:{default:!0}})}var h=M(d,2);{let r=p3(()=>!n());l3(st(h,{context:["nav"],requiresFocus:!1,get disabled(){return P(r)},onpressed:p,get items(){return s},wrap:!0,get selectedIndex(){return P(w)},set selectedIndex(l){R(w,l,!0)}}),l=>L=l,()=>L)}return C(g),Z(r=>f=K(g,"",f,r),[()=>({width:n()?"250px":"0"})]),D(e,g),Y({getListElement:Q})}var ht=S('<div class="help-modal"><div class="help-content"><!> or <!> toggle help.</div></div>'),Qt=S("<!> <!> <!> <!>",1);function wt(e,t){X(t,!0);let n=u(t,"showInfo",11,!1);const s={name:"Hint",gamepad:-1,buttons:[O.VIEW],keys:["h"]};var i=Qt(),o=o3(i);H3(o,{context:["default","my_ctx","nav"],onpressed:()=>{b.showHints=!b.showHints},get inputMapping(){return s}});var L=M(o,2);{let g=p3(()=>({name:"Focus next",gamepad:-1,buttons:[O.TRIGGER_RIGHT],keys:["k"]}));H3(L,{onpressed:()=>{_2()},get inputMapping(){return P(g)}})}var Q=M(L,2);{let g=p3(()=>({name:"Focus previous",gamepad:-1,buttons:[O.TRIGGER_LEFT],keys:["i"]}));H3(Q,{onpressed:()=>{K5()},get inputMapping(){return P(g)}})}var w=M(Q,2);{var p=g=>{var f=ht();K(f,"",{},{"pointer-events":"none","z-index":"999"});var d=N(f),h=N(d);z(h,{type:"keyboard_mouse",get input(){return s.keys[0]},color:"#FFFFFF"});var r=M(h,2);z(r,{type:"ps4",get input(){return s.buttons[0]},color:"#FFFFFF"}),f3(),C(d),C(f),u3(3,f,()=>v3,()=>({duration:300})),D(g,f)};G(w,g=>{n()&&g(p)})}D(e,i),Y()}var ft=S("<!> <!> <!> <!>",1);function mt(e,t){X(t,!0);let n=u(t,"open",15,!1),s=u(t,"showInfo",11,!1),i=u(t,"mgr",15),o;var L=ft(),Q=o3(L);l3(z1(Q,{}),f=>i(f),()=>i());var w=M(Q,2);wt(w,{get showInfo(){return s()}});var p=M(w,2);l3(dt(p,{get mgr(){return i()},get open(){return n()},set open(f){n(f)}}),f=>o=f,()=>o);var g=M(p,2);{let f=p3(()=>({name:"side nav",gamepad:-1,buttons:[O.UP],keys:["t"]}));M2(g,{onpressed:()=>{n(!0),o.getListElement().focus(),i()?.changeContext("nav")},get inputMapping(){return P(f)},children:(d,h)=>{f3();var r=u2("side nav");D(d,r)},$$slots:{default:!0}})}D(e,L),Y()}export{M2 as B,xt as D,O as G,y3 as H,X3 as I,_t as J,st as L,mt as M,kt as a,i3 as b,_2 as f,F3 as r,K as s,c3 as t,k3 as u};
