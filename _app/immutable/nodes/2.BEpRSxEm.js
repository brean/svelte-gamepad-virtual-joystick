var W2=Object.defineProperty;var K2=(e,t,n)=>t in e?W2(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var v=(e,t,n)=>K2(e,typeof t!="symbol"?t+"":t,n);import"../chunks/Bzak7iHL.js";import{a as j2,b as X2,w as v2,l as Y2,o as f3,e as p3,d as N3,s as C3}from"../chunks/DpBWZb-Z.js";import{j as u2,b as J2,g as I3,h as Y,aa as m3,d as G3,y as N,A as Z2,r as G2,H as B2,e as L2,i as H3,o as Q3,ab as c2,af as $2,k as B3,m as t5,l as u3,aD as n5,ax as e5,aE as g2,aj as p2,a8 as s5,aF as i5,n as F2,p as r5,aG as o5,aH as a5,aI as V3,aJ as k2,ad as x2,aK as l5,ai as L5,aL as g5,F as e2,_ as r3,aM as d5,ag as h5,ae as Q5,al as d2,aN as w5,aO as f5,aP as v5,aQ as u5,aR as c5,aS as p5,E as F5,aT as k5,aU as x5,q as _5,u as _2,aV as m5,aW as M5,aX as y5,aY as b5,v as E5,aB as _3,aZ as A5,t as C5,a_ as I5,B as P3,Y as l3,$ as L3,a$ as T3,C as K,ay as i3,c as m2,f as F3,a as z,Z as j,a0 as q,a1 as D,s as T5,a2 as E,b0 as c3,az as h3,aA as z3}from"../chunks/CiVHJLyf.js";import{p as x,i as S,b as M3}from"../chunks/BIbwjlAo.js";import"../chunks/DMDLTAg4.js";function P5(e,t){return t}function N5(e,t,n){for(var s=e.items,i=[],r=t.length,o=0;o<r;o++)l5(t[o].e,i,!0);var w=r>0&&i.length===0&&n!==null;if(w){var h=n.parentNode;L5(h),h.append(n),s.clear(),s3(e,t[0].prev,t[r-1].next)}g5(i,()=>{for(var L=0;L<r;L++){var u=t[L];w||(s.delete(u.k),s3(e,u.prev,u.next)),k2(u.e,!w)}})}function R5(e,t,n,s,i,r=null){var o=e,w={flags:t,items:new Map,first:null};{var h=e;o=Y?I3(m3(h)):h.appendChild(u2())}Y&&G3();var L=null,u=!1,_=new Map,g=Z2(()=>{var a=n();return s5(a)?a:a==null?[]:p2(a)}),l,c;function d(){D5(c,l,w,_,o,i,t,s,n),r!==null&&(l.length===0?L?F2(L):L=B3(()=>r(o)):L!==null&&r5(L,()=>{L=null}))}J2(()=>{c??(c=e2),l=N(g);var a=l.length;if(u&&a===0)return;u=a===0;let Q=!1;if(Y){var m=G2(o)===B2;m!==(a===0)&&(o=L2(),I3(o),H3(!1),Q=!0)}if(Y){for(var f=null,A,b=0;b<a;b++){if(Q3.nodeType===c2&&Q3.data===$2){o=Q3,Q=!0,H3(!1);break}var p=l[b],y=s(p,b);A=$3(Q3,w,f,null,p,y,b,i,t,n),w.items.set(y,A),f=A}a>0&&I3(L2())}if(Y)a===0&&r&&(L=B3(()=>r(o)));else if(t5()){var I=new Set,F=u3;for(b=0;b<a;b+=1){p=l[b],y=s(p,b);var M=w.items.get(y)??_.get(y);M?M2(M,p,b):(A=$3(null,w,null,null,p,y,b,i,t,n,!0),_.set(y,A)),I.add(y)}for(const[U,V]of w.items)I.has(U)||F.skipped_effects.add(V.e);F.add_callback(d)}else d();Q&&H3(!0),N(g)}),Y&&(o=Q3)}function D5(e,t,n,s,i,r,o,w,h){var L=t.length,u=n.items,_=n.first,g=_,l,c=null,d=[],a=[],Q,m,f,A;for(A=0;A<L;A+=1){if(Q=t[A],m=w(Q,A),f=u.get(m),f===void 0){var b=s.get(m);if(b!==void 0){s.delete(m),u.set(m,b);var p=c?c.next:g;s3(n,c,b),s3(n,b,p),U3(b,p,i),c=b}else{var y=g?g.e.nodes_start:i;c=$3(y,n,c,c===null?n.first:c.next,Q,m,A,r,o,h)}u.set(m,c),d=[],a=[],g=c.next;continue}if(M2(f,Q,A),(f.e.f&V3)!==0&&F2(f.e),f!==g){if(l!==void 0&&l.has(f)){if(d.length<a.length){var I=a[0],F;c=I.prev;var M=d[0],U=d[d.length-1];for(F=0;F<d.length;F+=1)U3(d[F],I,i);for(F=0;F<a.length;F+=1)l.delete(a[F]);s3(n,M.prev,U.next),s3(n,c,M),s3(n,U,I),g=I,c=U,A-=1,d=[],a=[]}else l.delete(f),U3(f,g,i),s3(n,f.prev,f.next),s3(n,f,c===null?n.first:c.next),s3(n,c,f),c=f;continue}for(d=[],a=[];g!==null&&g.k!==m;)(g.e.f&V3)===0&&(l??(l=new Set)).add(g),a.push(g),g=g.next;if(g===null)continue;f=g}d.push(f),c=f,g=f.next}if(g!==null||l!==void 0){for(var V=l===void 0?[]:p2(l);g!==null;)(g.e.f&V3)===0&&V.push(g),g=g.next;var X=V.length;if(X>0){var n3=L===0?i:null;N5(n,V,n3)}}e.first=n.first&&n.first.e,e.last=c&&c.e;for(var P of s.values())k2(P.e);s.clear()}function M2(e,t,n,s){n5(e.v,t),e.i=n}function $3(e,t,n,s,i,r,o,w,h,L,u){var _=(h&o5)!==0,g=(h&a5)===0,l=_?g?e5(i,!1,!1):g2(i):i,c=(h&i5)===0?o:g2(o),d={i:c,v:l,k:r,a:null,e:null,prev:n,next:s};try{if(e===null){var a=document.createDocumentFragment();a.append(e=u2())}return d.e=B3(()=>w(e,l,c,L),Y),d.e.prev=n&&n.e,d.e.next=s&&s.e,n===null?u||(t.first=d):(n.next=d,n.e.next=d.e),s!==null&&(s.prev=d,s.e.prev=d.e),d}finally{}}function U3(e,t,n){for(var s=e.next?e.next.e.nodes_start:n,i=t?t.e.nodes_start:n,r=e.e.nodes_start;r!==null&&r!==s;){var o=x2(r);i.before(r),r=o}}function s3(e,t,n){t===null?e.first=n:(t.next=n,t.e.next=n&&n.e),n!==null&&(n.prev=t,n.e.prev=t&&t.e)}function q5(e,t,n=!1,s=!1,i=!1){var r=e,o="";r3(()=>{var w=e2;if(o===(o=t()??"")){Y&&G3();return}if(w.nodes_start!==null&&(d5(w.nodes_start,w.nodes_end),w.nodes_start=w.nodes_end=null),o!==""){if(Y){Q3.data;for(var h=G3(),L=h;h!==null&&(h.nodeType!==c2||h.data!=="");)L=h,h=x2(h);if(h===null)throw h5(),Q5;d2(Q3,L),r=I3(h);return}var u=o+"";n?u=`<svg>${u}</svg>`:s&&(u=`<math>${u}</math>`);var _=w5(u);if((n||s)&&(_=m3(_)),d2(m3(_),_.lastChild),n||s)for(;m3(_);)r.before(m3(_));else r.before(_)}})}function y2(e){var t,n,s="";if(typeof e=="string"||typeof e=="number")s+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=y2(e[t]))&&(s&&(s+=" "),s+=n)}else for(n in e)e[n]&&(s&&(s+=" "),s+=n);return s}function S5(){for(var e,t,n=0,s="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=y2(e))&&(s&&(s+=" "),s+=t);return s}function h2(e){return typeof e=="object"?S5(e):e??""}function O5(e,t,n){var s=e==null?"":""+e;return t&&(s=s?s+" "+t:t),s===""?null:s}function Q2(e,t=!1){var n=t?" !important;":";",s="";for(var i in e){var r=e[i];r!=null&&r!==""&&(s+=" "+i+": "+r+n)}return s}function W3(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function H5(e,t){if(t){var n="",s,i;if(Array.isArray(t)?(s=t[0],i=t[1]):s=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var r=!1,o=0,w=!1,h=[];s&&h.push(...Object.keys(s).map(W3)),i&&h.push(...Object.keys(i).map(W3));var L=0,u=-1;const d=e.length;for(var _=0;_<d;_++){var g=e[_];if(w?g==="/"&&e[_-1]==="*"&&(w=!1):r?r===g&&(r=!1):g==="/"&&e[_+1]==="*"?w=!0:g==='"'||g==="'"?r=g:g==="("?o++:g===")"&&o--,!w&&r===!1&&o===0){if(g===":"&&u===-1)u=_;else if(g===";"||_===d-1){if(u!==-1){var l=W3(e.substring(L,u).trim());if(!h.includes(l)){g!==";"&&_++;var c=e.substring(L,_).trim();n+=" "+c+";"}}L=_+1,u=-1}}}}return s&&(n+=Q2(s)),i&&(n+=Q2(i,!0)),n=n.trim(),n===""?null:n}return e==null?null:String(e)}function t2(e,t,n,s,i,r){var o=e.__className;if(Y||o!==n||o===void 0){var w=O5(n,s);(!Y||w!==e.getAttribute("class"))&&(w==null?e.removeAttribute("class"):e.className=w),e.__className=n}return r}function K3(e,t={},n,s){for(var i in n){var r=n[i];t[i]!==r&&(n[i]==null?e.style.removeProperty(i):e.style.setProperty(i,r,s))}}function $(e,t,n,s){var i=e.__style;if(Y||i!==t){var r=H5(t,s);(!Y||r!==e.getAttribute("style"))&&(r==null?e.removeAttribute("style"):e.style.cssText=r),e.__style=t}else s&&(Array.isArray(s)?(K3(e,n==null?void 0:n[0],s[0]),K3(e,n==null?void 0:n[1],s[1],"important")):K3(e,n,s));return s}const V5=Symbol("is custom element"),z5=Symbol("is html");function U5(e){if(Y){var t=!1,n=()=>{if(!t){if(t=!0,e.hasAttribute("value")){var s=e.value;w3(e,"value",null),e.value=s}if(e.hasAttribute("checked")){var i=e.checked;w3(e,"checked",null),e.checked=i}}};e.__on_r=n,c5(n),j2()}}function w3(e,t,n,s){var i=W5(e);Y&&(i[t]=e.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&e.nodeName==="LINK")||i[t]!==(i[t]=n)&&(t==="loading"&&(e[p5]=n),n==null?e.removeAttribute(t):typeof n!="string"&&K5(e).includes(t)?e[t]=n:e.setAttribute(t,n))}function W5(e){return e.__attributes??(e.__attributes={[V5]:e.nodeName.includes("-"),[z5]:e.namespaceURI===f5})}var w2=new Map;function K5(e){var t=w2.get(e.nodeName);if(t)return t;w2.set(e.nodeName,t=[]);for(var n,s=e,i=Element.prototype;i!==s;){n=u5(s);for(var r in n)n[r].set&&t.push(r);s=v5(s)}return t}const j5=()=>performance.now(),a3={tick:e=>requestAnimationFrame(e),now:()=>j5(),tasks:new Set};function b2(){const e=a3.now();a3.tasks.forEach(t=>{t.c(e)||(a3.tasks.delete(t),t.f())}),a3.tasks.size!==0&&a3.tick(b2)}function X5(e){let t;return a3.tasks.size===0&&a3.tick(b2),{promise:new Promise(n=>{a3.tasks.add(t={c:e,f:n})}),abort(){a3.tasks.delete(t)}}}function A3(e,t){v2(()=>{e.dispatchEvent(new CustomEvent(t))})}function Y5(e){if(e==="float")return"cssFloat";if(e==="offset")return"cssOffset";if(e.startsWith("--"))return e;const t=e.split("-");return t.length===1?t[0]:t[0]+t.slice(1).map(n=>n[0].toUpperCase()+n.slice(1)).join("")}function f2(e){const t={},n=e.split(";");for(const s of n){const[i,r]=s.split(":");if(!i||r===void 0)break;const o=Y5(i.trim());t[o]=r.trim()}return t}const J5=e=>e;function J(e,t,n,s){var i=(e&M5)!==0,r=(e&y5)!==0,o=i&&r,w=(e&m5)!==0,h=o?"both":i?"in":"out",L,u=t.inert,_=t.style.overflow,g,l;function c(){return v2(()=>L??(L=n()(t,(s==null?void 0:s())??{},{direction:h})))}var d={is_global:w,in(){var f;if(t.inert=u,!i){l==null||l.abort(),(f=l==null?void 0:l.reset)==null||f.call(l);return}r||g==null||g.abort(),A3(t,"introstart"),g=n2(t,c(),l,1,()=>{A3(t,"introend"),g==null||g.abort(),g=L=void 0,t.style.overflow=_})},out(f){if(!r){f==null||f(),L=void 0;return}t.inert=!0,A3(t,"outrostart"),l=n2(t,c(),g,0,()=>{A3(t,"outroend"),f==null||f()})},stop:()=>{g==null||g.abort(),l==null||l.abort()}},a=e2;if((a.transitions??(a.transitions=[])).push(d),i&&X2){var Q=w;if(!Q){for(var m=a.parent;m&&(m.f&F5)!==0;)for(;(m=m.parent)&&(m.f&k5)===0;);Q=!m||(m.f&x5)!==0}Q&&_5(()=>{_2(()=>d.in())})}}function n2(e,t,n,s,i){var r=s===1;if(b5(t)){var o,w=!1;return E5(()=>{if(!w){var a=t({direction:r?"in":"out"});o=n2(e,a,n,s,i)}}),{abort:()=>{w=!0,o==null||o.abort()},deactivate:()=>o.deactivate(),reset:()=>o.reset(),t:()=>o.t()}}if(n==null||n.deactivate(),!(t!=null&&t.duration))return i(),{abort:_3,deactivate:_3,reset:_3,t:()=>s};const{delay:h=0,css:L,tick:u,easing:_=J5}=t;var g=[];if(r&&n===void 0&&(u&&u(0,1),L)){var l=f2(L(0,1));g.push(l,l)}var c=()=>1-s,d=e.animate(g,{duration:h,fill:"forwards"});return d.onfinish=()=>{d.cancel();var a=(n==null?void 0:n.t())??1-s;n==null||n.abort();var Q=s-a,m=t.duration*Math.abs(Q),f=[];if(m>0){var A=!1;if(L)for(var b=Math.ceil(m/16.666666666666668),p=0;p<=b;p+=1){var y=a+Q*_(p/b),I=f2(L(y,1-y));f.push(I),A||(A=I.overflow==="hidden")}A&&(e.style.overflow="hidden"),c=()=>{var F=d.currentTime;return a+Q*_(F/m)},u&&X5(()=>{if(d.playState!=="running")return!1;var F=c();return u(F,1-F),!0})}d=e.animate(f,{duration:m,fill:"forwards"}),d.onfinish=()=>{c=()=>s,u==null||u(s,1-s),i()}},{abort:()=>{d&&(d.cancel(),d.effect=null,d.onfinish=_3)},deactivate:()=>{i=_3},reset:()=>{s===0&&(u==null||u(1,0))},t:()=>c()}}function Z5(e,t,n=t){var s=A5(),i=new WeakSet;Y2(e,"input",r=>{var o=r?e.defaultValue:e.value;if(o=j3(e)?X3(o):o,n(o),u3!==null&&i.add(u3),s&&o!==(o=t())){var w=e.selectionStart,h=e.selectionEnd;e.value=o??"",h!==null&&(e.selectionStart=w,e.selectionEnd=Math.min(h,e.value.length))}}),(Y&&e.defaultValue!==e.value||_2(t)==null&&e.value)&&(n(j3(e)?X3(e.value):e.value),u3!==null&&i.add(u3)),C5(()=>{var r=t();if(e===document.activeElement){var o=I5??u3;if(i.has(o))return}j3(e)&&r===X3(e.value)||e.type==="date"&&!r&&!e.value||r!==e.value&&(e.value=r??"")})}function j3(e){var t=e.type;return t==="number"||t==="range"}function X3(e){return e===""?null:+e}const G5=(e,t)=>Math.sqrt(e**2+t**2),B5=(e,t)=>Math.atan2(t,e),$5=(e,t)=>[e*Math.cos(t),e*Math.sin(t)],t4=(e,t)=>Math.min(Math.max(-t,e),t);function k3(e,t){return e.gamepad===-1||e.gamepad===t.index}function E2(e){const t=document.activeElement,n=Array.from(document.querySelectorAll('input, select, textarea, button, [tabindex]:not([tabindex="-1"])'));if(!t)return;let s=n.indexOf(t);for(let i=1;i<n.length;i++){let r=(s+i*e)%n.length;r<0&&(r=n.length-1,s=r);const o=n[r];if(!o.hasAttribute("disabled"))return o}}function n4(){const e=E2(-1);e&&e.focus()}function s2(){const e=E2(1);e&&e.focus()}class R3{constructor(t,n,s=!1,i=void 0,r=void 0,o=void 0){v(this,"focusElement");v(this,"requiresFocus");v(this,"input");v(this,"disabled",!1);v(this,"onpressedCallback");v(this,"onholdCallback");v(this,"onreleaseCallback");this.onpressedCallback=i,this.onholdCallback=r,this.onreleaseCallback=o,this.focusElement=n,this.input=t,console.log(n),this.requiresFocus=s}onpressed(){return this.onpressedCallback?this.onpressedCallback():!1}onhold(){this.onholdCallback&&this.onholdCallback()}onrelease(){this.onreleaseCallback&&this.onreleaseCallback()}thisGamepadButton(t,n){return k3(this.input,t)}onbuttonpressed(t,n){return this.onpressed()}onbuttonrelease(t,n){this.onrelease()}onbuttonhold(t,n){this.onhold()}onupdate(t){}thisKey(t){return!1}onkeypressed(t){return this.onpressed()}onkeyrelease(t){this.onrelease()}onkeyhold(t){this.onhold()}}const T=P3({components:{},activeComponents:[],showHints:!1,context:"default"}),y3=(e,t)=>{e.forEach(n=>{T.components[n]||(T.components[n]=[]),T.components[n].push(t)}),!t.requiresFocus&&e.includes("default")&&T.activeComponents.push(t),t.focusElement&&t.requiresFocus&&(t.focusElement.addEventListener("focus",()=>{e.includes(T.context)&&T.activeComponents.push(t)}),t.focusElement.addEventListener("blur",()=>{T.activeComponents.splice(T.activeComponents.indexOf(t),1)}))},b3=(e,t)=>{e.forEach(n=>{T.components[n]&&T.components[n].splice(T.components[n].indexOf(t),1)}),T.activeComponents.includes(t)&&T.activeComponents.slice(T.activeComponents.indexOf(t))};function e4(e,t){l3(t,!0);let n=x(t,"updateUsingAnimationFrame",3,!1),s=x(t,"updateUsingInterval",3,!0),i=x(t,"timeout",3,1e3/25);const r=d=>{T.activeComponents.forEach(Q=>{Q.focusElement&&Q.focusElement.blur()}),T.activeComponents=[],T.components[d].forEach(Q=>{(!Q.requiresFocus||Q.focusElement===document.activeElement)&&T.activeComponents.push(Q)}),T.context=d};let o={},w={},h;const L=d=>{h=d.target.navigator},u=()=>{let d=T.activeComponents;if(h){for(let a of h.getGamepads())if(a){for(let Q=0;Q<a.buttons.length;Q++){if(a.buttons[Q].pressed&&(d.forEach(m=>{m.thisGamepadButton(a,Q)&&m.onbuttonhold(a,Q)}),!o[Q])){o[Q]=!0;for(let m of d)if(m.thisGamepadButton(a,Q)&&m.onbuttonpressed(a,Q)===!0)break}o[Q]&&!a.buttons[Q].pressed&&(o[Q]=!1,d.forEach(m=>{m.thisGamepadButton(a,Q)&&m.onbuttonrelease(a,Q)}))}d.forEach(Q=>{k3(Q.input,a)&&Q.onupdate(a)})}}},_=()=>{u(),requestAnimationFrame(_)};f3(()=>{n()?_():s()&&setInterval(u,i())});const g=d=>{let a=T.activeComponents;for(let Q of a)if(Q.onkeypressed(d)===!0)break},l=d=>{const a=d.key.toLowerCase();w[a]||g(d);let Q=T.activeComponents;w[a]=!0,Q.forEach(m=>{m.onkeyhold(d)})},c=d=>{const a=d.key.toLowerCase();delete w[a],T.activeComponents.forEach(m=>{m.onkeyrelease(d)})};return p3("gamepadconnected",T3,L),p3("keydown",T3,l),p3("keyup",T3,c),L3({changeContext:r})}class A2 extends R3{constructor(){super(...arguments);v(this,"pressed",!1)}thisGamepadButton(n,s){return super.thisGamepadButton(n,s)&&this.input.buttons.includes(s)}onpressed(){return this.disabled?!1:(this.pressed=!0,super.onpressed(),!0)}onhold(){super.onhold()}onrelease(){this.pressed=!1,super.onrelease()}thisKey(n){return n&&this.input.keys.includes(n.key.toLowerCase())||!1}onkeypressed(n){return this.thisKey(n)&&super.onkeypressed(n)}onkeyrelease(n){this.thisKey(n)&&super.onkeyrelease(n)}onkeyhold(n){this.thisKey(n)&&super.onkeyhold(n)}}const s4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
`,i4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
`,r4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
`,o4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
`,a4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 L48 8 M39 26 L39 23 38 22 35 22 25 38 25 41 26 42 29 42 39 26"/>
  </g>
</svg>`,l4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 M30 24 L30 28.6 26.05 26.3 24.05 29.75 28 32.05 24.05 34.3 26.05 37.75 30 35.5 30 40 34 40 34 35.5 37.9 37.75 39.9 34.3 35.95 32.05 39.9 29.75 37.9 26.3 34 28.55 34 24 30 24"/>
  </g>
</svg>`,L4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q9.55 56 8.3 50.8 8 49.55 8 48 L8 16 Q8 14.45 8.3 13.2 9.55 8 16 8 M31 36 Q29 36 29 38 L29 40 Q29 42 31 42 L33 42 33 43 32.7 43.7 32 44 Q31.6 44 31.3 43.7 L29.9 45.1 Q30.8 46 32 46 33.2 46 34.1 45.1 35 44.2 35 43 L35 40.25 35 40 35 38 Q35 36 33 36 L31 36"/>
  </g>
</svg>`,g4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M31 36 Q29 36 29 38 L29 40 Q29 42 31 42 L33 42 Q35 42 35 40 L35 38 Q35 36 33 36 L31 36"/>
  </g>
</svg>`,d4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M31 22 Q29 22 29 24 L29 26 Q29 28 31 28 L33 28 Q35 28 35 26 L35 24 Q35 22 33 22 L31 22 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M31 36 Q29 36 29 38 L29 40 Q29 42 31 42 L33 42 Q35 42 35 40 L35 38 Q35 36 33 36 L31 36"/>
  </g>
</svg>`,h4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M31 36 Q29 36 29 38 L29 40 Q29 42 31 42 L33 42 33 43 32.7 43.7 32 44 Q31.6 44 31.3 43.7 L29.9 45.1 Q30.8 46 32 46 33.2 46 34.1 45.1 35 44.2 35 43 L35 40.25 35 40 35 38 Q35 36 33 36 L31 36 M31 22 Q29 22 29 24 L29 26 Q29 28 31 28 L33 28 Q35 28 35 26 L35 24 Q35 22 33 22 L31 22"/>
  </g>
</svg>`,Q4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M32 26 L36 26 36 22 29 22 28 23 28 41 29 42 36 42 36 38 32 38 32 26"/>
  </g>
</svg>`,w4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M32 26 L32 38 28 38 28 42 35 42 36 41 36 23 35 22 28 22 28 26 32 26"/>
  </g>
</svg>`,f4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M40 30 L34 30 34 24 30 24 30 30 24 30 24 34 30 34 30 40 34 40 34 34 40 34 40 30 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 52.9 53 54.8 51.1 56 48 56 L16 56 Q12.9 56 11 54.8 8 52.9 8 48 L8 16 Q8 8 16 8"/>
  </g>
</svg>`,v4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M40 30 L24 30 24 34 40 34 40 30"/>
  </g>
</svg>`,u4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q9.55 56 8.3 50.8 8 49.55 8 48 L8 16 Q8 14.45 8.3 13.2 9.55 8 16 8 M27.5 28 Q24 28 21.55 30.65 20.95 31.25 21 32.1 21.05 32.9 21.65 33.5 22.25 34.05 23.1 34 23.9 33.95 24.5 33.35 25.7 32 27.5 32 29.3 32 30.55 33.35 33 36 36.5 36 40 36 42.5 33.35 43.05 32.75 43 31.95 42.95 31.1 42.35 30.55 41.75 29.95 40.95 30 40.1 30.05 39.55 30.65 38.3 32 36.5 32 34.7 32 33.5 30.65 31 28 27.5 28"/>
  </g>
</svg>`,c4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M26 41 L26 37 22 37 22 44 23 45 41 45 42 44 42 37 38 37 38 41 26 41"/>
  </g>
</svg>`,p4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M36 20 Q34 20 34 22 L34 28 Q34 30 36 30 L38 30 Q40 30 40 28 L40 22 Q40 20 38 20 L36 20 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M26 20 Q24 20 24 22 L24 28 Q24 30 26 30 L28 30 Q30 30 30 28 L30 22 Q30 20 28 20 L26 20"/>
  </g>
</svg>`,F4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 16 L48 16 Q56 16 56 24 L56 40 Q56 44.9 53 46.8 51.1 48 48 48 L16 48 Q12.9 48 11 46.8 8 44.9 8 40 L8 24 Q8 16 16 16 M20 32 L26 38 28 38 28 34 44 34 44 30 28 30 28 26 26 26 20 32"/>
  </g>
</svg>`,k4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 14 L48 14 Q56 14 56 22 L56 41 Q56 49 48 49 L16 49 Q8 49 8 41 L8 22 Q8 14 16 14 M36 42 L36 38 28 38 28 42 36 42 M32 20 L24 28 24 30 28 30 28 36 36 36 36 30 40 30 40 28 32 20"/>
  </g>
</svg>`,x4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M44 31 L44 45 47 45 47 31 44 31 M48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 M23 26 L29 32 31 32 31 28 47 28 47 24 31 24 31 20 29 20 23 26 M41 38 L35 32 33 32 33 36 17 36 17 40 33 40 33 44 35 44 41 38 M17 19 L17 33 20 33 20 19 17 19"/>
  </g>
</svg>`,_4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 16 L48 16 Q56 16 56 24 L56 40 Q56 44.9 53 46.8 51.1 48 48 48 L16 48 Q12.9 48 11 46.8 8 44.9 8 40 L8 24 Q8 16 16 16 M32 24 L24 32 24 34 28 34 28 40 36 40 36 34 40 34 40 32 32 24"/>
  </g>
</svg>`,m4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M29 17 L35 17 Q39 17 39 21 L39 27 Q39 31 35 31 L29 31 Q25 31 25 27 L25 21 Q25 17 29 17 M45 33 L51 33 Q55 33 55 37 L55 43 Q55 47 51 47 L45 47 Q41 47 41 43 L41 37 Q41 33 45 33 M29 33 L35 33 Q39 33 39 37 L39 43 Q39 47 35 47 L29 47 Q25 47 25 43 L25 37 Q25 33 29 33"/>
    <path stroke="none" fill="#E73246" d="M13 33 L19 33 Q23 33 23 37 L23 43 Q23 47 19 47 L13 47 Q9 47 9 43 L9 37 Q9 33 13 33"/>
  </g>
</svg>`,M4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M29 17 L35 17 Q39 17 39 21 L39 27 Q39 31 35 31 L29 31 Q25 31 25 27 L25 21 Q25 17 29 17 M29 33 L35 33 Q39 33 39 37 L39 43 Q39 47 35 47 L29 47 Q25 47 25 43 L25 37 Q25 33 29 33 M13 33 L19 33 Q23 33 23 37 L23 43 Q23 47 19 47 L13 47 Q9 47 9 43 L9 37 Q9 33 13 33"/>
    <path stroke="none" fill="#E73246" d="M45 33 L51 33 Q55 33 55 37 L55 43 Q55 47 51 47 L45 47 Q41 47 41 43 L41 37 Q41 33 45 33"/>
  </g>
</svg>`,y4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#E73246" d="M29 17 L35 17 Q39 17 39 21 L39 27 Q39 31 35 31 L29 31 Q25 31 25 27 L25 21 Q25 17 29 17"/>
    <path stroke="none" fill="#FFFFFF" d="M45 33 L51 33 Q55 33 55 37 L55 43 Q55 47 51 47 L45 47 Q41 47 41 43 L41 37 Q41 33 45 33 M29 33 L35 33 Q39 33 39 37 L39 43 Q39 47 35 47 L29 47 Q25 47 25 43 L25 37 Q25 33 29 33 M13 33 L19 33 Q23 33 23 37 L23 43 Q23 47 19 47 L13 47 Q9 47 9 43 L9 37 Q9 33 13 33"/>
  </g>
</svg>`,b4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M29 17 L35 17 Q39 17 39 21 L39 27 Q39 31 35 31 L29 31 Q25 31 25 27 L25 21 Q25 17 29 17 M45 33 L51 33 Q55 33 55 37 L55 43 Q55 47 51 47 L45 47 Q41 47 41 43 L41 37 Q41 33 45 33 M13 33 L19 33 Q23 33 23 37 L23 43 Q23 47 19 47 L13 47 Q9 47 9 43 L9 37 Q9 33 13 33"/>
    <path stroke="none" fill="#E73246" d="M29 33 L35 33 Q39 33 39 37 L39 43 Q39 47 35 47 L29 47 Q25 47 25 43 L25 37 Q25 33 29 33"/>
  </g>
</svg>`,E4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M36.95 27 L35.95 27 Q35.55 27 35.25 27.3 34.95 27.6 34.95 28 34.95 28.4 35.25 28.7 L35.95 29 35.95 29.25 35.7 29.8 35.7 29.75 34.95 30 34.15 29.75 33.95 29.25 33.95 24.8 Q33.95 24.45 34.2 24.2 L34.15 24.3 Q34.5 24 34.95 24 L35.7 24.3 35.7 24.25 35.95 24.8 Q35.95 25.2 36.25 25.5 36.55 25.8 36.95 25.8 L37.65 25.5 37.95 24.8 Q37.95 23.65 37.05 22.8 L37 22.75 Q36.1 22 34.95 22 33.7 22 32.85 22.75 L32.8 22.8 Q31.95 23.65 31.95 24.8 L31.95 29.25 Q31.95 30.35 32.8 31.2 L32.85 31.3 Q33.7 32 34.95 32 36.1 32 37 31.3 L37.05 31.25 Q37.95 30.35 37.95 29.25 L37.95 28 37.65 27.3 36.95 27 M44 22 L40 22 Q39.6 22 39.3 22.3 39 22.6 39 23 L39 31 Q39 31.4 39.3 31.7 39.6 32 40 32 L44 32 44.7 31.7 45 31 44.7 30.3 Q44.4 30 44 30 L41 30 41 28 44 28 44.7 27.7 45 27 44.7 26.3 Q44.4 26 44 26 L41 26 41 24 44 24 44.7 23.7 45 23 44.7 22.3 Q44.4 22 44 22 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M40.95 35.8 L40.95 42 Q40.95 42.4 41.25 42.7 41.55 43 41.95 43 L42.65 42.7 42.95 42 42.95 35.8 Q42.95 35.45 43.2 35.2 L43.15 35.3 Q43.5 35 43.95 35 L44.7 35.3 44.7 35.25 44.95 35.8 44.95 42 Q44.95 42.4 45.25 42.7 45.55 43 45.95 43 L46.65 42.7 46.95 42 46.95 35.8 Q46.95 34.65 46.05 33.8 L46 33.75 Q45.1 33 43.95 33 42.7 33 41.85 33.75 L41.8 33.8 Q40.95 34.65 40.95 35.8 M31.95 34.15 L32.95 42.15 33.2 42.7 33.75 43 34.35 42.95 34.8 42.55 35.95 40.8 37.15 42.55 37.6 42.95 38.2 43 38.7 42.7 38.95 42.15 39.95 34.15 39.75 33.4 Q39.5 33.05 39.1 33 38.65 32.95 38.35 33.2 38 33.45 37.95 33.9 L37.3 39.2 36.8 38.45 36.3 38.05 35.65 38.05 35.15 38.45 34.65 39.2 33.95 33.9 33.6 33.2 Q33.25 32.95 32.85 33 32.4 33.05 32.15 33.4 31.9 33.7 31.95 34.15 M21.1 26 L20 26 20 24 21.05 24 21.7 24.25 22 25 21.75 25.7 21.7 25.7 21.45 25.9 21.1 26 M21.1 28 L22.35 27.7 22.45 27.65 23.1 27.15 23.1 27.1 Q24 26.25 24 25 24 23.75 23.1 22.85 22.25 22 21.05 22 L19 22 Q18.6 22 18.3 22.3 18 22.6 18 23 L18 31 Q18 31.4 18.3 31.7 18.6 32 19 32 L19.7 31.7 20 31 20 28 21.1 28 M27 24.8 L27.25 24.2 27.2 24.3 Q27.55 24 28 24 28.45 24 28.75 24.3 L28.75 24.25 29 24.8 29 27 27 27 27 24.8 M25 24.8 L25 31 Q25 31.4 25.3 31.7 25.6 32 26 32 L26.7 31.7 27 31 27 29 29 29 29 31 Q29 31.4 29.3 31.7 L30 32 Q30.4 32 30.7 31.7 L31 31 31 24.8 Q31 23.65 30.1 22.8 L30.05 22.75 Q29.15 22 28 22 26.75 22 25.9 22.75 L25.85 22.8 Q25 23.65 25 24.8 M25.8 33.8 Q24.95 34.65 24.95 35.8 L24.95 40.25 Q24.95 41.35 25.8 42.2 L25.85 42.3 Q26.7 43 27.95 43 29.1 43 30 42.3 L30.05 42.25 Q30.95 41.35 30.95 40.25 L30.95 35.8 Q30.95 34.65 30.05 33.8 L30 33.75 Q29.1 33 27.95 33 26.7 33 25.85 33.75 L25.8 33.8 M26.95 35.8 Q26.95 35.45 27.2 35.2 L27.15 35.3 Q27.5 35 27.95 35 L28.7 35.3 28.7 35.25 28.95 35.8 28.95 40.25 28.7 40.8 28.7 40.75 27.95 41 27.15 40.75 26.95 40.25 26.95 35.8 M23.05 33.75 Q22.15 33 21.05 33 L19 33 Q18.6 33 18.3 33.3 18 33.6 18 34 L18 42 Q18 42.4 18.3 42.7 18.6 43 19 43 L21.05 43 Q22.15 43 23.05 42.3 L23.1 42.25 Q24 41.35 24 40.25 L24 35.8 Q24 34.65 23.1 33.8 L23.05 33.75 M21.05 35 Q21.45 35 21.75 35.3 L21.75 35.25 22 35.8 22 40.25 21.75 40.8 21.75 40.75 21.05 41 20 41 20 35 21.05 35"/>
  </g>
</svg>`,A4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M37 27 L36 27 Q35.6 27 35.3 27.3 35 27.6 35 28 L35.3 28.7 Q35.6 29 36 29 L36 29.25 35.75 29.8 35.75 29.75 35 30 34.2 29.75 34 29.25 34 24.8 Q34 24.45 34.25 24.2 L34.2 24.3 Q34.55 24 35 24 35.45 24 35.75 24.3 L35.75 24.25 36 24.8 Q36 25.2 36.3 25.5 L37 25.8 37.7 25.5 38 24.8 Q38 23.65 37.1 22.8 L37.05 22.75 Q36.15 22 35 22 33.75 22 32.9 22.75 L32.85 22.8 Q32 23.65 32 24.8 L32 29.25 Q32 30.35 32.85 31.2 L32.9 31.3 Q33.75 32 35 32 36.15 32 37.05 31.3 L37.1 31.25 Q38 30.35 38 29.25 L38 28 37.7 27.3 Q37.4 27 37 27 M44 26 L41 26 41 24 44 24 44.7 23.7 45 23 44.7 22.3 Q44.4 22 44 22 L40 22 Q39.6 22 39.3 22.3 39 22.6 39 23 L39 31 Q39 31.4 39.3 31.7 39.6 32 40 32 L44 32 44.7 31.7 45 31 44.7 30.3 Q44.4 30 44 30 L41 30 41 28 44 28 44.7 27.7 45 27 44.7 26.3 Q44.4 26 44 26 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M21.1 26 L20 26 20 24 21.05 24 21.7 24.25 22 25 21.75 25.7 21.7 25.7 21.45 25.9 21.1 26 M21.1 28 L22.35 27.7 22.45 27.65 23.1 27.15 23.1 27.1 Q24 26.25 24 25 24 23.75 23.1 22.85 22.25 22 21.05 22 L19 22 Q18.6 22 18.3 22.3 18 22.6 18 23 L18 31 Q18 31.4 18.3 31.7 18.6 32 19 32 L19.7 31.7 20 31 20 28 21.1 28 M27 24.8 L27.25 24.2 27.2 24.3 Q27.55 24 28 24 28.45 24 28.75 24.3 L28.75 24.25 29 24.8 29 27 27 27 27 24.8 M25 24.8 L25 31 Q25 31.4 25.3 31.7 25.6 32 26 32 L26.7 31.7 27 31 27 29 29 29 29 31 Q29 31.4 29.3 31.7 L30 32 Q30.4 32 30.7 31.7 L31 31 31 24.8 Q31 23.65 30.1 22.8 L30.05 22.75 Q29.15 22 28 22 26.75 22 25.9 22.75 L25.85 22.8 Q25 23.65 25 24.8 M28.1 37 L27 37 27 35 28.05 35 28.7 35.25 29 36 28.75 36.7 28.7 36.7 28.45 36.9 28.1 37 M28.1 39 L29.35 38.7 29.45 38.65 30.1 38.15 30.1 38.1 Q31 37.25 31 36 31 34.75 30.1 33.85 29.25 33 28.05 33 L26 33 Q25.6 33 25.3 33.3 25 33.6 25 34 L25 42 Q25 42.4 25.3 42.7 25.6 43 26 43 L26.7 42.7 27 42 27 39 28.1 39 M20 40.2 L20 34 19.7 33.3 Q19.4 33 19 33 18.6 33 18.3 33.3 18 33.6 18 34 L18 40.2 Q18 41.35 18.85 42.2 L18.9 42.3 Q19.75 43 21 43 22.15 43 23.05 42.3 L23.1 42.25 Q24 41.35 24 40.2 L24 34 23.7 33.3 Q23.4 33 23 33 22.6 33 22.3 33.3 22 33.6 22 34 L22 40.2 21.75 40.8 21.75 40.75 21 41 20.2 40.75 20 40.2"/>
  </g>
</svg>`,C4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M39 25 L39 38 41.5 38 Q43.8 38 45.35 36.4 L45.4 36.35 Q47 34.8 47 32.5 L47 30.5 Q47 28.2 45.4 26.7 L45.35 26.6 Q43.8 25 41.5 25 L39 25 M42 28.05 L43.2 28.75 43.25 28.75 43.3 28.8 Q44 29.45 44 30.5 L44 32.5 Q44 33.55 43.3 34.2 L43.2 34.3 Q42.7 34.8 42 34.95 L42 28.05 M17 25 L17 38 25 38 25 35 20 35 20 33 25 33 25 30 20 30 20 28 25 28 25 25 17 25 M37 38 L37 25 34 25 34 32 30 25 27 25 27 38 30 38 30 31 34 38 37 38"/>
  </g>
</svg>`,I4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M40 28 L40 36 Q40 36.4 40.3 36.7 L41 37 45 37 45.7 36.7 46 36 45.7 35.3 Q45.4 35 45 35 L42 35 42 33 45 33 45.7 32.7 46 32 45.7 31.3 Q45.4 31 45 31 L42 31 42 29 45 29 45.7 28.7 46 28 45.7 27.3 Q45.4 27 45 27 L41 27 40.7 27.05 Q40.45 27.1 40.3 27.3 40 27.6 40 28 M23 36 L23 28 22.7 27.3 Q22.55 27.1 22.3 27.05 L22 27 21.7 27.05 Q21.45 27.1 21.3 27.3 21 27.6 21 28 L21 31 19 31 19 28 18.7 27.3 Q18.55 27.1 18.3 27.05 L18 27 17.7 27.05 Q17.45 27.1 17.3 27.3 17 27.6 17 28 L17 36 Q17 36.4 17.3 36.7 L18 37 Q18.4 37 18.7 36.7 L19 36 19 33 21 33 21 36 Q21 36.4 21.3 36.7 21.6 37 22 37 L22.7 36.7 23 36 M39 36 L39 28 38.7 27.3 Q38.55 27.1 38.3 27.05 L38 27 37.7 27.05 Q37.45 27.1 37.3 27.3 L35 29.6 32.7 27.3 Q32.55 27.1 32.3 27.05 L32 27 31.7 27.05 Q31.45 27.1 31.3 27.3 31 27.6 31 28 L31 36 Q31 36.4 31.3 36.7 31.6 37 32 37 L32.7 36.7 33 36 33 30.4 34.3 31.7 Q34.6 32 35 32 L35.7 31.7 37 30.4 37 36 Q37 36.4 37.3 36.7 37.6 37 38 37 L38.7 36.7 39 36 M24.85 27.8 Q24 28.65 24 29.8 L24 34.25 Q24 35.35 24.85 36.2 L24.9 36.3 Q25.75 37 27 37 28.15 37 29.05 36.3 L29.1 36.25 Q30 35.35 30 34.25 L30 29.8 Q30 28.65 29.1 27.8 L29.05 27.75 Q28.4 27.2 27.6 27.05 L27 27 26.4 27.05 Q25.55 27.2 24.9 27.75 L24.85 27.8 M26 29.8 Q26 29.45 26.25 29.2 L26.2 29.3 Q26.55 29 27 29 27.45 29 27.75 29.3 L27.75 29.25 28 29.8 28 34.25 27.75 34.8 27.75 34.75 27 35 26.2 34.75 26 34.25 26 29.8"/>
  </g>
</svg>`,T4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M38.1 32.1 Q39 31.25 39 30 39 28.75 38.1 27.85 37.25 27 36.05 27 L34 27 Q33.6 27 33.3 27.3 33 27.6 33 28 L33 36 Q33 36.4 33.3 36.7 L34 37 Q34.4 37 34.7 36.7 L35 36 35 33 35.4 33 37.1 36.45 Q37.3 36.8 37.7 36.95 L38.45 36.9 38.95 36.35 38.9 35.55 37.45 32.65 38.1 32.15 38.1 32.1 M36.1 31 L35 31 35 29 36.05 29 Q36.45 29 36.7 29.25 L37 30 36.75 30.7 36.7 30.7 36.45 30.9 36.1 31 M40 28 L40 36 Q40 36.4 40.3 36.7 L41 37 45 37 45.7 36.7 46 36 45.7 35.3 Q45.4 35 45 35 L42 35 42 28 41.7 27.3 Q41.4 27 41 27 40.6 27 40.3 27.3 40 27.6 40 28 M56 22 L56 42 Q56 46.9 53 48.8 51.1 50 48 50 L16 50 Q12.9 50 11 48.8 8 46.9 8 42 L8 22 Q8 14 16 14 L48 14 Q56 14 56 22 M24.1 36.25 Q25 35.35 25 34.25 L24.7 33.55 Q24.4 33.25 24 33.25 23.6 33.25 23.3 33.55 23 33.85 23 34.25 L22.75 34.8 22.75 34.75 22 35 21.2 34.75 21 34.25 21 29.8 21.25 29.2 21.2 29.3 Q21.55 29 22 29 22.45 29 22.75 29.3 L22.75 29.25 23 29.8 Q23 30.2 23.3 30.5 23.6 30.8 24 30.8 L24.7 30.5 25 29.8 Q25 28.65 24.1 27.8 L24.05 27.75 Q23.15 27 22 27 20.75 27 19.9 27.75 L19.85 27.8 Q19 28.65 19 29.8 L19 34.25 Q19 35.35 19.85 36.2 L19.9 36.3 Q20.75 37 22 37 23.15 37 24.05 36.3 L24.1 36.25 M27 29 L28 29 28 36 Q28 36.4 28.3 36.7 28.6 37 29 37 L29.7 36.7 30 36 30 29 31 29 31.7 28.7 32 28 31.7 27.3 Q31.4 27 31 27 L27 27 Q26.6 27 26.3 27.3 26 27.6 26 28 L26.3 28.7 27 29"/>
  </g>
</svg>`,P4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 40 8 38.95 8 36 Q8 28 16 28 L28 28 28 16 Q28 8 36 8 L38.95 8 40 8 48 8 M29 41 L35 47 37 47 37 43 44.1 43 Q45.3 42.95 46.1 42.1 46.95 41.3 47 40.1 L47 29 43 29 43 39 37 39 37 35 35 35 29 41"/>
  </g>
</svg>`,N4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M38 42 L42 42 34 22 30 22 22 42 26 42 27.6 38 36.4 38 38 42 M32 27 L34.8 34 29.2 34 32 27"/>
  </g>
</svg>`,R4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M34 22 L25 22 24 23 24 41 25 42 34 42 Q36.45 42 38.2 40.25 L38.25 40.2 Q40 38.45 40 36 40 33.65 38.45 32 40 30.3 40 28 40 25.5 38.25 23.75 L38.2 23.7 Q36.45 22 34 22 M28 26 L34 26 Q34.8 26 35.4 26.6 L35.45 26.6 Q36 27.15 36 28 36 28.8 35.45 29.35 L35.35 29.45 Q34.8 29.95 34.15 30 L28 30 28 26 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M28 38 L28 34 34.15 34 Q34.85 34.05 35.4 34.6 L35.45 34.6 Q36 35.15 36 36 36 36.8 35.45 37.35 L35.35 37.45 Q34.8 38 34 38 L28 38"/>
  </g>
</svg>`,D4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M24 30 L24 34.2 Q24.05 37.35 26.35 39.65 L28 40.95 Q29.8 42 32 42 34.2 42 36 40.95 L37.65 39.65 Q38.95 38.35 39.55 36.8 L35.8 35.35 34.85 36.85 Q33.65 38 32 38 30.35 38 29.2 36.85 28.05 35.7 28 34.1 L28 30 Q28 28.35 29.2 27.2 30.35 26 32 26 33.65 26 34.85 27.2 L35.8 28.7 39.55 27.2 Q38.95 25.65 37.65 24.35 35.3 22 32 22 28.7 22 26.35 24.35 24 26.7 24 30 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8"/>
  </g>
</svg>`,q4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M28 26 L30.15 26 Q32.5 26.05 34.25 27.8 36 29.55 36 32 36 34.45 34.25 36.25 32.5 37.95 30.15 38 L28 38 28 26 M24 22 L24 42 30.25 42 Q34.25 41.9 37.1 39.1 L38.05 38 Q40 35.4 40 32 40 28.55 38.05 26 L37.1 24.95 Q34.25 22.1 30.25 22 L24 22"/>
  </g>
</svg>`,S4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M24 22 L24 42 40 42 40 38 28 38 28 34 40 34 40 30 28 30 28 26 40 26 40 22 24 22 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8"/>
  </g>
</svg>`,O4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M24 22 L24 42 28 42 28 34 40 34 40 30 28 30 28 26 40 26 40 22 24 22"/>
  </g>
</svg>`,H4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M39.25 24.8 Q36.45 22 32.5 22 28.55 22 25.8 24.8 23 27.55 23 31.5 L23 32.85 23.3 34.95 Q23.85 37.3 25.8 39.25 28.55 42 32.5 42 36.45 42 39.25 39.25 41.1 37.3 41.75 35 L41.8 34.85 42 32.85 42 32 41 31 31 31 31 35 37.45 35 36.4 36.4 Q34.75 38 32.5 38 30.25 38 28.65 36.4 27.55 35.3 27.2 34 L27 32.65 27 31.5 Q27 29.25 28.65 27.65 30.25 26 32.5 26 34.75 26 36.4 27.65 L36.85 28.15 39.7 25.3 39.25 24.8"/>
  </g>
</svg>`,V4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q51.45 8 53.45 9.5 56 11.45 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 11.45 10.6 9.5 12.55 8 16 8 M24 22 L24 42 28 42 28 34 36 34 36 42 40 42 40 22 36 22 36 30 28 30 28 22 24 22"/>
  </g>
</svg>`,z4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M30 22 L30 42 34 42 34 22 30 22"/>
  </g>
</svg>`,U4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M37 34.2 L37 22 33 22 33 34.1 Q32.95 35.7 31.85 36.85 30.65 38 29 38 L27 38 27 42 29.25 42 Q31.3 41.95 33 40.95 L34.65 39.65 Q36.95 37.35 37 34.2"/>
  </g>
</svg>`,W4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M28 34 L31 34 37 42 40 42 40 39 34.75 32 40 25 40 22 37 22 31 30 28 30 28 22 24 22 24 42 28 42 28 34"/>
  </g>
</svg>`,K4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M24 42 L40 42 40 38 28 38 28 22 24 22 24 42"/>
  </g>
</svg>`,j4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M22 42 L26 42 26 32 31 42 33 42 38 32 38 42 42 42 42 22 38 22 32 34 26 22 22 22 22 42 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8"/>
  </g>
</svg>`,X4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M28 42 L28 30 36 42 40 42 40 22 36 22 36 34 28 22 24 22 24 42 28 42"/>
  </g>
</svg>`,Y4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M40 32 Q40 27.85 37.65 24.9 35.3 22 32 22 28.65 22 26.3 24.9 24 27.85 24 32 24 36.15 26.3 39.1 28.65 42 32 42 35.3 42 37.65 39.1 40 36.15 40 32 M34.55 27.4 L34.55 27.45 Q36 29.35 36 32 36 34.65 34.55 36.6 33.45 37.9 32 38 30.5 37.9 29.4 36.6 28 34.65 28 32 28 29.35 29.4 27.45 30.5 26.1 32 26 33.45 26.1 34.55 27.4 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8"/>
  </g>
</svg>`,J4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M25 22 L24 23 24 42 28 42 28 36 34 36 34.2 36 Q35.75 35.95 37 35.2 L38.1 34.4 38.1 34.35 38.2 34.25 38.25 34.2 39.6 32.3 40 30 40 28 Q40 25.5 38.25 23.75 L38.2 23.7 37 22.8 Q35.75 22.05 34.2 22 L25 22 M28 26 L34 26 Q34.8 26 35.4 26.6 L35.45 26.6 Q36 27.15 36 28 L36 30.4 35.45 31.35 35.35 31.45 34.9 31.8 34.05 32 28 32 28 26 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8"/>
  </g>
</svg>`,Z4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M28 30 Q28 28.35 29.2 27.2 30.35 26 32 26 33.65 26 34.85 27.2 36 28.35 36 30 L36 34.1 35.9 34.9 35 34 32 34 32 37 32.9 37.9 32 38 Q30.35 38 29.2 36.85 28.05 35.7 28 34.1 L28 30 M24 30 L24 34.2 Q24.05 37.35 26.35 39.65 L28 40.95 Q29.8 42 32 42 34.2 42 36 41 L37 42 40 42 40 39 39 38 Q39.95 36.25 40 34.2 L40 30 Q40 26.7 37.65 24.35 35.3 22 32 22 28.7 22 26.35 24.35 24 26.7 24 30"/>
  </g>
</svg>`,G4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M25 22 L24 23 24 42 28 42 28 36 34 36 34.5 36 36 42 40 42 38.1 34.35 38.2 34.25 38.25 34.2 Q40 32.45 40 30 L40 28 Q40 25.5 38.25 23.75 L38.2 23.7 37 22.8 Q35.75 22.05 34.2 22 L25 22 M28 26 L34 26 Q34.8 26 35.4 26.6 L35.45 26.6 Q36 27.15 36 28 L36 30 Q36 30.8 35.45 31.35 L35.35 31.45 Q34.8 32 34 32 L28 32 28 26 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8"/>
  </g>
</svg>`,B4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M34 30 L30 30 Q29.2 30 28.6 29.4 28 28.8 28 28 28 27.2 28.55 26.65 L28.65 26.55 Q29.2 26 30 26 L34.05 26 Q34.8 26 35.35 26.55 L35.45 26.65 Q36 27.2 36 28 L39.85 26.5 39.7 26 Q39.25 24.8 38.25 23.8 L38.2 23.75 Q36.5 22.05 34.15 22 L30 22 Q27.55 22 25.8 23.75 L25.75 23.8 Q24 25.55 24 28 24 30.5 25.75 32.25 27.5 34 30 34 L34 34 Q34.8 34 35.4 34.6 36 35.2 36 36 36 36.8 35.45 37.35 L35.35 37.45 Q34.8 38 34 38 L29.95 38 Q29.2 38 28.65 37.45 L28.55 37.35 Q28 36.8 28 36 L24.2 37.55 24.35 38 Q24.75 39.2 25.75 40.2 L25.8 40.25 Q27.5 41.95 29.85 42 L34 42 Q36.45 42 38.2 40.25 L38.25 40.2 Q40 38.45 40 36 40 33.5 38.25 31.75 36.5 30 34 30 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8"/>
  </g>
</svg>`,$4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M40 22 L24 22 24 26 30 26 30 42 34 42 34 26 40 26 40 22"/>
  </g>
</svg>`,t1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M40 22 L36 22 36 34.1 Q35.95 35.7 34.85 36.85 33.65 38 32 38 30.35 38 29.2 36.85 28.05 35.7 28 34.1 L28 22 24 22 24 34.2 Q24.05 37.35 26.35 39.65 L28 40.95 Q29.8 42 32 42 34.2 42 36 40.95 L37.65 39.65 Q39.95 37.35 40 34.2 L40 22"/>
  </g>
</svg>`,n1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 56 Q8 56 8 48 L8 16 Q8 8 16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 M38 22 L32 37 26 22 22 22 30 42 34 42 42 22 38 22"/>
  </g>
</svg>`,e1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M31 22 L28 31 25 22 21 22 21 24 27 42 29 42 32 33 35 42 37 42 43 24 43 22 39 22 36 31 33 22 31 22"/>
  </g>
</svg>`,s1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M23 25 L29 32 23 39 23 40 25.25 42 26.4 42 32 35.5 37.65 42 38.75 42 41 40 41 39 35 32 41 25 41 24 38.75 22 37.65 22 32 28.55 26.4 22 25.25 22 23 24 23 25"/>
  </g>
</svg>`,i1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M23 25 L30 32.9 30 42 34 42 34 32.9 41 25 41 24 38.75 22 37.65 22 32 28.55 26.4 22 25.25 22 23 24 23 25"/>
  </g>
</svg>`,r1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M24 22 L24 26 34 26 24 38 24 42 40 42 40 38 30 38 40 26 40 22 24 22"/>
  </g>
</svg>`,o1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M36.95 25.55 Q34.9 23.5 32 23.5 29.15 23.5 27.05 25.5 L27 25.55 Q25 27.65 25 30.5 L25 33.5 Q25 36.4 27.05 38.45 29.15 40.5 32 40.5 34.85 40.5 36.9 38.45 L36.95 38.4 Q39 36.35 39 33.5 L39 30.5 Q39 27.65 36.95 25.55 M32 27.5 Q33.2 27.5 34.1 28.4 35 29.25 35 30.5 L35 33.5 Q35 34.7 34.1 35.55 L34.05 35.6 Q33.2 36.5 32 36.5 30.75 36.5 29.9 35.6 29 34.7 29 33.5 L29 30.5 Q29 29.3 29.85 28.4 L29.9 28.35 Q30.8 27.5 32 27.5"/>
  </g>
</svg>`,a1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M35 24 L31 24 28 27 28 28.95 31 28.95 31 33.85 31 33.95 31 41 35 41 35 24"/>
  </g>
</svg>`,l1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M33.5 28.4 Q34.25 29.15 33 30.45 L26 37 26 41 30.85 41 30.95 41 38 41 38 37 32 37 36.45 32.55 Q38.65 30.35 37.4 27 L36.4 25.65 36.35 25.6 Q34.75 24 32.5 24 L30.85 24 Q28.9 24.05 27.5 25.4 L27.4 25.5 Q26.35 26.6 26.1 28 L26 29 30 29 Q30 28.6 30.3 28.3 30.55 28.05 30.85 28 L30.95 28 32.5 28 Q33.1 28 33.5 28.4"/>
  </g>
</svg>`,L1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M38 35.75 Q38.05 33.9 36.75 32.5 38.05 31.1 38 29.25 38.05 27.05 36.05 25.4 L36.1 25.5 Q34.4 24 32 24 29.6 24 27.9 25.45 26.05 26.95 26 29 L30.1 29 30.45 28.55 30.45 28.5 Q31.1 28 32 28 32.9 28 33.5 28.5 L33.55 28.55 Q33.95 28.85 34 29.25 L33.6 30 Q33 30.5 32.15 30.5 L30 30.5 30 34.5 32.15 34.5 32.7 34.55 Q33.2 34.65 33.6 35 L34 35.75 33.55 36.45 33.5 36.5 Q32.9 37 32 37 31.1 37 30.45 36.5 L30.45 36.45 30.1 36 26 36 Q26.05 38.05 27.9 39.55 29.6 41 32 41 34.4 41 36.1 39.5 L36.05 39.6 Q38.05 37.95 38 35.75"/>
  </g>
</svg>`,g1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M38 24 L34 24 34 30 30 30 30 24 26 24 26 32.05 Q26 32.85 26.55 33.4 27.15 34 27.95 34 L34 34 34 41 38 41 38 24"/>
  </g>
</svg>`,d1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M34.5 36.6 Q34.1 37 33.5 37 L30.95 37 Q30.6 37 30.3 36.7 30 36.4 30 36 L26 36 26.1 37 Q26.35 38.4 27.4 39.5 L27.5 39.6 Q28.9 40.95 30.85 41 L33.5 41 Q35.75 41 37.35 39.4 L37.4 39.35 Q38.8 37.95 39 36 L39 35.5 Q39 33.2 37.4 31.6 35.8 30 33.5 30 L30 30 30 28 39 28 39 24 26 24 26 34 33.5 34 Q34.1 34 34.55 34.45 35 34.9 35 35.5 35 36.1 34.6 36.5 L34.5 36.6"/>
  </g>
</svg>`,h1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M37.25 30.75 Q35.5 29 33 29 L35 24 30 24 26.15 33.65 26.1 34 26 35 Q26 37.5 27.75 39.25 29.5 41 32 41 L33 41 Q35.45 41 37.2 39.25 L37.25 39.2 Q39 37.45 39 35 39 32.5 37.25 30.75 M33 33 Q33.8 33 34.4 33.6 35 34.2 35 35 35 35.8 34.45 36.35 L34.35 36.45 Q33.8 37 33 37 L32 37 Q31.2 37 30.6 36.4 30 35.8 30 35 30 34.45 30.25 34 L30.55 33.6 30.6 33.55 31.35 33.1 32 33 33 33"/>
  </g>
</svg>`,Q1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M33 41 L38 28 38 24 25 24 25 28 33 28 28 41 33 41"/>
  </g>
</svg>`,w1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M32.5 41 Q34.75 41 36.35 39.4 L36.4 39.35 Q37.8 37.95 38 36 L38 35.5 Q38 33.6 36.9 32.2 38 30.85 38 29 38 26.95 36.6 25.5 L36.5 25.4 Q35.05 24 33.05 24 L29.95 24 28.65 24.2 Q27.45 24.5 26.5 25.4 L26.4 25.5 Q25 26.95 25 29 25 30.85 26.1 32.2 25 33.6 25 35.5 L25 36 Q25.2 37.95 26.6 39.35 L26.65 39.4 Q28.25 41 30.5 41 L32.5 41 M30 30 L29.3 29.7 Q29 29.4 29 29 29 28.6 29.3 28.3 29.6 28 29.95 28 L33.05 28 Q33.4 28 33.7 28.3 L34 29 33.7 29.7 33 30 30 30 M33.5 36.6 Q33.1 37 32.5 37 L30.5 37 Q29.9 37 29.5 36.6 L29.4 36.5 Q29 36.1 29 35.5 29 34.9 29.45 34.45 29.9 34 30.5 34 L32.55 34 Q33.1 34 33.55 34.45 34 34.9 34 35.5 34 36.1 33.6 36.5 L33.5 36.6"/>
  </g>
</svg>`,f1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M26.75 34.25 Q28.5 36 31 36 L29 41 34 41 37.85 31.35 37.9 31 38 30 Q38 27.5 36.25 25.75 34.5 24 32 24 L31 24 Q28.55 24 26.8 25.75 L26.75 25.8 Q25 27.55 25 30 25 32.5 26.75 34.25 M31 32 Q30.2 32 29.6 31.4 29 30.8 29 30 29 29.2 29.55 28.65 L29.65 28.55 Q30.2 28 31 28 L32 28 Q32.8 28 33.4 28.6 34 29.2 34 30 L33.75 31 33.45 31.4 33.4 31.45 32.65 31.9 32 32 31 32"/>
  </g>
</svg>`,v1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M43 24 L39 24 36 27 36 28.95 39 28.95 39 33.85 39 33.95 39 41 43 41 43 24 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M25 41 L25 35 32 35 32 31 28.15 31 28.05 31 25 31 25 28 32 28 32 24 28.15 24 28.05 24 21 24 21 33.85 21 33.95 21 41 25 41"/>
  </g>
</svg>`,u1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M23 41 L23 35 30 35 30 31 23 31 23 28 30 28 30 24 24.15 24 24.05 24 19 24 19 33.85 19 33.95 19 41 23 41 M40.5 28.4 Q41.25 29.15 40 30.45 L33 37 33 41 37.85 41 37.95 41 45 41 45 37 39 37 43.45 32.55 Q45.65 30.35 44.4 27 L43.4 25.65 43.35 25.6 43.25 25.5 Q41.7 24 39.5 24 L37.85 24 Q35.9 24.05 34.5 25.4 L34.4 25.5 Q33.35 26.6 33.1 28 L33 29 37 29 Q37 28.6 37.3 28.3 37.55 28.05 37.85 28 L37.95 28 39.5 28 Q40.1 28 40.5 28.4"/>
  </g>
</svg>`,c1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M45 35.75 Q45.05 33.9 43.75 32.5 45.05 31.1 45 29.25 45.05 27.05 43.05 25.4 L43.1 25.5 Q41.4 24 39 24 36.6 24 34.9 25.45 33.05 26.95 33 29 L37.1 29 37.45 28.55 37.45 28.5 Q38.1 28 39 28 39.9 28 40.5 28.5 L40.55 28.55 41 29.25 40.6 30 Q40 30.5 39.15 30.5 L37 30.5 37 34.5 39.15 34.5 39.7 34.55 Q40.2 34.65 40.6 35 L41 35.75 40.55 36.45 40.5 36.5 Q39.9 37 39 37 38.1 37 37.45 36.5 L37.45 36.45 37.1 36 33 36 Q33.05 38.05 34.9 39.55 36.6 41 39 41 41.4 41 43.1 39.5 L43.05 39.6 Q45.05 37.95 45 35.75 M23 41 L23 35 30 35 30 31 26.15 31 26.05 31 23 31 23 28 30 28 30 24 26.15 24 26.05 24 19 24 19 33.85 19 33.95 19 41 23 41"/>
  </g>
</svg>`,p1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M45 24 L41 24 41 30 37 30 37 24 33 24 33 32.05 Q33 32.85 33.55 33.4 34.15 34 34.95 34 L41 34 41 41 45 41 45 24 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M23 41 L23 35 30 35 30 31 26.15 31 26.05 31 23 31 23 28 30 28 30 24 26.15 24 26.05 24 19 24 19 33.85 19 33.95 19 41 23 41"/>
  </g>
</svg>`,F1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M41.5 36.6 Q41.1 37 40.5 37 L37.95 37 37.3 36.7 Q37 36.4 37 36 L33 36 33.1 37 Q33.35 38.4 34.4 39.5 L34.5 39.6 Q35.9 40.95 37.85 41 L40.5 41 Q42.75 41 44.35 39.4 L44.4 39.35 Q45.8 37.95 46 36 L46 35.5 Q46 33.2 44.4 31.6 42.8 30 40.5 30 L37 30 37 28 46 28 46 24 33 24 33 34 40.5 34 Q41.1 34 41.55 34.45 42 34.9 42 35.5 42 36.1 41.6 36.5 L41.5 36.6 M22 41 L22 35 29 35 29 31 25.15 31 25.05 31 22 31 22 28 29 28 29 24 25.15 24 25.05 24 18 24 18 33.85 18 33.95 18 41 22 41"/>
  </g>
</svg>`,k1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M44.25 30.75 Q42.5 29 40 29 L42 24 37 24 33.15 33.65 33.1 34 33 35 Q33 37.5 34.75 39.25 36.5 41 39 41 L40 41 Q42.45 41 44.2 39.25 L44.25 39.2 Q46 37.45 46 35 46 32.5 44.25 30.75 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M40 33 Q40.8 33 41.4 33.6 42 34.2 42 35 42 35.8 41.45 36.35 L41.35 36.45 Q40.8 37 40 37 L39 37 Q38.2 37 37.6 36.4 37 35.8 37 35 37 34.45 37.25 34 L37.55 33.6 37.6 33.55 Q37.95 33.25 38.35 33.1 L39 33 40 33 M23 41 L23 35 30 35 30 31 26.15 31 26.05 31 23 31 23 28 30 28 30 24 26.15 24 26.05 24 19 24 19 33.85 19 33.95 19 41 23 41"/>
  </g>
</svg>`,x1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M41 41 L46 28 46 24 33 24 33 28 41 28 36 41 41 41 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M22 41 L22 35 29 35 29 31 25.15 31 25.05 31 22 31 22 28 29 28 29 24 25.15 24 25.05 24 18 24 18 33.85 18 33.95 18 41 22 41"/>
  </g>
</svg>`,_1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M38 30 Q37.6 30 37.3 29.7 37 29.4 37 29 37 28.6 37.3 28.3 37.6 28 37.95 28 L41.05 28 Q41.4 28 41.7 28.3 L42 29 41.7 29.7 41 30 38 30 M40.5 41 Q42.75 41 44.35 39.4 L44.4 39.35 Q45.8 37.95 46 36 L46 35.5 Q46 33.6 44.9 32.2 46 30.85 46 29 46 26.95 44.6 25.5 L44.5 25.4 Q43.05 24 41.05 24 L37.95 24 36.65 24.2 Q35.45 24.5 34.5 25.4 L34.4 25.5 Q33 26.95 33 29 33 30.85 34.1 32.2 33 33.6 33 35.5 L33 36 Q33.2 37.95 34.6 39.35 L34.65 39.4 Q36.25 41 38.5 41 L40.5 41 M41.5 36.6 Q41.1 37 40.5 37 L38.5 37 Q37.9 37 37.5 36.6 L37.4 36.5 Q37 36.1 37 35.5 37 34.9 37.45 34.45 37.9 34 38.5 34 L40.55 34 Q41.1 34 41.55 34.45 42 34.9 42 35.5 42 36.1 41.6 36.5 L41.5 36.6 M22 41 L22 35 29 35 29 31 25.15 31 25.05 31 22 31 22 28 29 28 29 24 25.15 24 25.05 24 18 24 18 33.85 18 33.95 18 41 22 41"/>
  </g>
</svg>`,m1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M39 32 Q38.2 32 37.6 31.4 37 30.8 37 30 37 29.2 37.55 28.65 L37.65 28.55 Q38.2 28 39 28 L40 28 Q40.8 28 41.4 28.6 42 29.2 42 30 L41.75 31 41.45 31.4 41.4 31.45 40.65 31.9 40 32 39 32 M34.75 34.25 Q36.5 36 39 36 L37 41 42 41 45.85 31.35 45.9 31 46 30 Q46 27.5 44.25 25.75 42.5 24 40 24 L39 24 Q36.55 24 34.8 25.75 L34.75 25.8 Q33 27.55 33 30 33 32.5 34.75 34.25 M23 41 L23 35 30 35 30 31 26.15 31 26.05 31 23 31 23 28 30 28 30 24 26.15 24 26.05 24 19 24 19 33.85 19 33.95 19 41 23 41"/>
  </g>
</svg>`,M1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M43 28 Q44.2 28 45.1 28.9 46 29.75 46 31 L46 34 Q46 35.2 45.1 36.05 L45.05 36.1 Q44.2 37 43 37 41.75 37 40.9 36.1 40 35.2 40 34 L40 31 Q40 29.8 40.85 28.9 L40.9 28.85 Q41.8 28 43 28 M47.95 26.05 Q45.9 24 43 24 40.15 24 38.05 26 L38 26.05 Q36 28.15 36 31 L36 34 Q36 36.9 38.05 38.95 40.15 41 43 41 45.85 41 47.9 38.95 L47.95 38.9 Q50 36.85 50 34 L50 31 Q50 28.15 47.95 26.05 M34 24 L30 24 27 27 27 28.95 30 28.95 30 33.85 30 33.95 30 41 34 41 34 24 M18 41 L18 35 25 35 25 31 21.15 31 21.05 31 18 31 18 28 25 28 25 24 21.15 24 21.05 24 14 24 14 33.85 14 33.95 14 41 18 41"/>
  </g>
</svg>`,y1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M47 24 L43 24 40 27 40 28.95 43 28.95 43 33.85 43 33.95 43 41 47 41 47 24 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M21 41 L21 35 28 35 28 31 24.15 31 24.05 31 21 31 21 28 28 28 28 24 24.15 24 24.05 24 17 24 17 33.85 17 33.95 17 41 21 41 M38 24 L34 24 31 27 31 28.95 34 28.95 34 33.85 34 33.95 34 41 38 41 38 24"/>
  </g>
</svg>`,b1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M34 24 L30 24 27 27 27 28.95 30 28.95 30 33.85 30 33.95 30 41 34 41 34 24 M18 41 L18 35 25 35 25 31 21.15 31 21.05 31 18 31 18 28 25 28 25 24 21.15 24 21.05 24 14 24 14 33.85 14 33.95 14 41 18 41 M44.5 28.4 Q45.25 29.15 44 30.45 L37 37 37 41 41.85 41 41.95 41 49 41 49 37 43 37 47.45 32.55 Q49.65 30.35 48.4 27 L47.4 25.65 47.35 25.6 Q45.75 24 43.5 24 L41.85 24 Q39.9 24.05 38.5 25.4 L38.4 25.5 Q37.35 26.6 37.1 28 L37 29 41 29 Q41 28.6 41.3 28.3 41.55 28.05 41.85 28 L41.95 28 43.5 28 Q44.1 28 44.5 28.4"/>
  </g>
</svg>`,E1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#7C66E8" d="M22.8 20 L20 22.8 29.2 32 20 41.2 22.8 44 32 34.8 41.2 44 44 41.2 34.8 32 44 22.8 41.2 20 32 29.2 22.8 20 M56 32 Q56 42 48.95 48.95 42 56 32 56 22.05 56 15 48.95 8 42 8 32 8 22.05 15 15 22.05 8 32 8 42 8 48.95 15 56 22.05 56 32"/>
  </g>
</svg>`,A1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FF6666" d="M37.7 26.35 Q40 28.65 40 32 40 35.35 37.7 37.7 35.35 40 32 40 28.7 40 26.4 37.7 L26.35 37.65 Q24 35.3 24 32 24 28.7 26.35 26.35 L26.4 26.35 Q28.7 24 32 24 35.35 24 37.7 26.35 M44 32 Q44 27 40.5 23.5 37 20 32 20 27.05 20 23.55 23.5 20 27 20 32 20 37 23.55 40.5 27.05 44 32 44 37 44 40.5 40.5 44 37 44 32 M56 32 Q56 42 48.95 48.95 42 56 32 56 22.05 56 15 48.95 8 42 8 32 8 22.05 15 15 22.05 8 32 8 42 8 48.95 15 56 22.05 56 32"/>
  </g>
</svg>`,C1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FF69F8" d="M56 32 Q56 42 48.95 48.95 42 56 32 56 22.05 56 15 48.95 8 42 8 32 8 22.05 15 15 22.05 8 32 8 42 8 48.95 15 56 22.05 56 32 M20 20 L20 44 44 44 44 20 20 20 M24 40 L24 24 40 24 40 40 24 40"/>
  </g>
</svg>`,I1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#40E2A0" d="M56 32 Q56 42 48.95 48.95 42 56 32 56 22.05 56 15 48.95 8 42 8 32 8 22.05 15 15 22.05 8 32 8 42 8 48.95 15 56 22.05 56 32 M46 42 L32 18 18 42 46 42 M32 25.95 L39.05 38 25 38 32 25.95"/>
  </g>
</svg>`,T1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M42 25 L38 25 35 28 35 29.95 38 29.95 38 34.85 38 34.95 38 42 42 42 42 25 M12 30 Q12 21.7 17.8 15.8 20.2 13.45 22.95 12.1 27.05 10 32 10 40.25 10 46.1 15.8 49.85 19.55 51.25 24.3 L51.8 26.9 52 29.6 52 46 52 46.45 Q51.85 49.15 50.1 51.2 L49.65 51.65 49.45 51.85 Q48 53.2 46.25 53.7 L44 54 20 54 Q16.7 54 14.35 51.65 12 49.3 12 46 L12 30 M22 25 L22 42 34 42 34 38 26 38 26 25 22 25"/>
  </g>
</svg>`,P1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M21 25 L21 42 25 42 25 37 28 37 30.5 42 34.5 42 31.45 35.9 32.2 35.25 32.25 35.2 33.2 34 Q34 32.65 34 31 34 28.5 32.25 26.75 L31.35 26 Q29.9 25 28 25 L21 25 M43 25 L39 25 36 28 36 29.95 39 29.95 39 34.85 39 34.95 39 42 43 42 43 25 M12 30 Q12 21.7 17.8 15.8 23.7 10 32 10 40.25 10 46.1 15.8 49.85 19.55 51.25 24.3 L51.8 26.9 52 29.6 52 46 52 46.45 Q51.85 49.15 50.1 51.2 L49.65 51.65 49.45 51.85 Q48 53.2 46.25 53.7 L44 54 20 54 Q16.85 54 14.55 51.85 L14.35 51.65 Q12 49.3 12 46 L12 30 M28 29 Q28.8 29 29.4 29.6 30 30.2 30 31 30 31.8 29.45 32.35 L29.35 32.45 Q28.8 33 28 33 L25 33 25 29 28 29"/>
  </g>
</svg>`,N1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M23 23 L23 40 35 40 35 36 27 36 27 23 23 23 M16 30 L16 16 Q16 12.7 18.35 10.35 20.7 8 24 8 L48 8 Q51.3 8 53.65 10.35 55.75 12.45 56 15.25 L56 16 56 40 Q56 46.6 51.3 51.3 46.6 56 40 56 L12.8 56 Q10.75 56 9.45 54.75 8 53.45 8 51.6 8 50.15 12 43.6 15.75 37.4 16 30 M44.5 27.4 Q45.25 28.15 44 29.45 L37 36 37 40 41.85 40 41.95 40 49 40 49 36 43 36 47.45 31.55 Q49.65 29.35 48.4 26 L47.4 24.65 47.35 24.6 Q45.75 23 43.5 23 L41.85 23 Q39.9 23.05 38.5 24.4 L38.4 24.5 Q37.35 25.6 37.1 27 L37 28 41 28 Q41 27.6 41.3 27.3 41.55 27.05 41.85 27 L41.95 27 43.5 27 Q44.1 27 44.5 27.4"/>
  </g>
</svg>`,R1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M48 30 Q48.25 37.4 52 43.6 56 50.15 56 51.6 56 53.45 54.55 54.75 53.25 56 51.2 56 L24 56 Q17.4 56 12.7 51.3 8 46.6 8 40 L8 16 Q8 12.7 10.35 10.35 12.7 8 16 8 L40 8 Q43.3 8 45.65 10.35 48 12.7 48 16 L48 30 M37.5 27.4 Q38.25 28.15 37 29.45 L30 36 30 40 34.85 40 34.95 40 42 40 42 36 36 36 40.45 31.55 Q42.65 29.35 41.4 26 L40.4 24.65 40.35 24.6 Q38.75 23 36.5 23 L34.85 23 Q32.9 23.05 31.5 24.4 L31.4 24.5 Q30.35 25.6 30.1 27 L30 28 34 28 Q34 27.6 34.3 27.3 34.55 27.05 34.85 27 L34.95 27 36.5 27 Q37.1 27 37.5 27.4 M22 27 Q22.8 27 23.4 27.6 24 28.2 24 29 24 29.8 23.45 30.35 L23.35 30.45 Q22.8 31 22 31 L19 31 19 27 22 27 M15 23 L15 40 19 40 19 35 22 35 24.5 40 28.5 40 25.45 33.9 26.2 33.25 26.25 33.2 Q28 31.45 28 29 28 26.5 26.25 24.75 24.5 23 22 23 L15 23"/>
  </g>
</svg>`,D1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M28 19 L27.7 19.7 Q27.4 20 27 20 L26.3 19.7 26 19 26 16 24 16 24 19 23.7 19.7 23 20 Q22.6 20 22.3 19.7 22 19.4 22 19 L22 11 Q22 10.6 22.3 10.3 22.6 10 23 10 23.4 10 23.7 10.3 L24 11 24 14 26 14 26 11 Q26 10.6 26.3 10.3 26.6 10 27 10 27.4 10 27.7 10.3 L28 11 28 19 M18 12 Q17.6 12 17.3 12.3 17 12.6 17 13 17 13.4 17.3 13.7 17.6 14 17.95 14 L18.05 14 Q19.2 14 20.1 14.9 21 15.8 21 17 21 18.2 20.1 19.1 19.2 20 18 20 L16 20 15.3 19.7 Q15 19.4 15 19 15 18.6 15.3 18.3 15.6 18 16 18 L18 18 Q18.4 18 18.7 17.7 L19 17 18.7 16.3 Q18.4 16 18.05 16 L17.95 16 Q16.8 16 15.9 15.1 15 14.2 15 13 15 11.8 15.9 10.9 16.8 10 18 10 L20 10 Q20.4 10 20.7 10.3 L21 11 20.7 11.7 20 12 18 12 M39.1 14 L39.45 13.9 39.7 13.7 39.75 13.7 40 13 39.7 12.25 Q39.45 12 39.05 12 L38 12 38 14 39.1 14 M29 12.8 Q29 11.65 29.85 10.8 L29.9 10.75 Q30.75 10 32 10 33.15 10 34.05 10.75 L34.1 10.8 Q35 11.65 35 12.8 L35 19 34.7 19.7 Q34.4 20 34 20 L33.3 19.7 Q33 19.4 33 19 L33 17 31 17 31 19 30.7 19.7 Q30.4 20 30 20 L29.3 19.7 Q29 19.4 29 19 L29 12.8 M31 12.8 L31 15 33 15 33 12.8 32.75 12.25 32.75 12.3 Q32.45 12 32 12 31.55 12 31.2 12.3 L31.25 12.2 Q31 12.45 31 12.8 M41.1 15.1 L41.1 15.15 40.45 15.65 41.9 18.55 41.95 19.35 41.45 19.9 40.7 19.95 Q40.3 19.8 40.1 19.45 L38.4 16 38 16 38 19 37.7 19.7 37 20 36.3 19.7 Q36 19.4 36 19 L36 11 Q36 10.6 36.3 10.3 36.6 10 37 10 L39.05 10 Q40.25 10 41.1 10.85 42 11.75 42 13 42 14.25 41.1 15.1 M43 11 Q43 10.6 43.3 10.3 43.6 10 44 10 L48 10 Q48.4 10 48.7 10.3 L49 11 48.7 11.7 Q48.4 12 48 12 L45 12 45 14 48 14 Q48.4 14 48.7 14.3 L49 15 48.7 15.7 Q48.4 16 48 16 L45 16 45 18 48 18 Q48.4 18 48.7 18.3 L49 19 48.7 19.7 Q48.4 20 48 20 L44 20 Q43.6 20 43.3 19.7 43 19.4 43 19 L43 11 M32 26 Q35.3 26 37.65 28.35 40 30.7 40 34 L40 46 Q40 49.3 37.65 51.65 35.3 54 32 54 28.7 54 26.35 51.65 24 49.3 24 46 L24 34 Q24 30.7 26.35 28.35 28.7 26 32 26"/>
  </g>
</svg>`,q1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M10.85 10.8 L10.9 10.75 Q11.75 10 13 10 14.15 10 15.05 10.75 L15.1 10.8 Q16 11.65 16 12.8 L16 17.25 Q16 18.35 15.1 19.25 L15.05 19.3 Q14.15 20 13 20 11.75 20 10.9 19.3 L10.85 19.2 Q10 18.35 10 17.25 L10 12.8 Q10 11.65 10.85 10.8 M12 12.8 L12 17.25 12.2 17.75 13 18 13.75 17.75 13.75 17.8 14 17.25 14 12.8 13.75 12.25 13.75 12.3 Q13.45 12 13 12 12.55 12 12.2 12.3 L12.25 12.2 12 12.8 M20.1 14 L20.45 13.9 20.7 13.7 20.75 13.7 21 13 20.7 12.25 Q20.45 12 20.05 12 L19 12 19 14 20.1 14 M19 19 L18.7 19.7 Q18.4 20 18 20 L17.3 19.7 Q17 19.4 17 19 L17 11 Q17 10.6 17.3 10.3 17.6 10 18 10 L20.05 10 Q21.25 10 22.1 10.85 23 11.75 23 13 23 14.25 22.1 15.1 L22.1 15.15 21.45 15.65 21.35 15.7 20.1 16 19 16 19 19 M25 12 L24.3 11.7 Q24 11.4 24 11 24 10.6 24.3 10.3 24.6 10 25 10 L29 10 29.7 10.3 30 11 29.7 11.7 29 12 28 12 28 19 27.7 19.7 Q27.4 20 27 20 L26.3 19.7 26 19 26 12 25 12 M36 12.8 L36 17.25 36.2 17.75 37 18 37.75 17.75 37.75 17.8 38 17.25 38 12.8 37.75 12.25 37.75 12.3 Q37.45 12 37 12 36.55 12 36.2 12.3 L36.25 12.2 36 12.8 M34.85 10.8 L34.9 10.75 Q35.75 10 37 10 38.15 10 39.05 10.75 L39.1 10.8 Q40 11.65 40 12.8 L40 17.25 Q40 18.35 39.1 19.25 L39.05 19.3 Q38.15 20 37 20 35.75 20 34.9 19.3 L34.85 19.2 Q34 18.35 34 17.25 L34 12.8 Q34 11.65 34.85 10.8 M33 19 L32.7 19.7 32 20 Q31.6 20 31.3 19.7 31 19.4 31 19 L31 11 Q31 10.6 31.3 10.3 31.6 10 32 10 32.4 10 32.7 10.3 L33 11 33 19 M47 19 L46.8 19.65 46.25 20 45.6 19.9 45.1 19.45 43 15.25 43 19 42.7 19.7 42 20 41.3 19.7 Q41 19.4 41 19 L41 11 Q41 10.65 41.25 10.4 L41.8 10.05 42.45 10.1 42.9 10.55 45 14.75 45 11 Q45 10.6 45.3 10.3 45.6 10 46 10 46.4 10 46.7 10.3 L47 11 47 19 M51 12 Q50.6 12 50.3 12.3 50 12.6 50 13 50 13.4 50.3 13.7 L50.95 14 51.05 14 Q52.2 14 53.1 14.9 54 15.8 54 17 54 18.2 53.1 19.1 52.2 20 51 20 L49 20 Q48.6 20 48.3 19.7 48 19.4 48 19 48 18.6 48.3 18.3 48.6 18 49 18 L51 18 Q51.4 18 51.7 17.7 L52 17 51.7 16.3 Q51.4 16 51.05 16 L50.95 16 Q49.8 16 48.9 15.1 48 14.2 48 13 48 11.8 48.9 10.9 49.8 10 51 10 L53 10 Q53.4 10 53.7 10.3 L54 11 53.7 11.7 53 12 51 12 M32 26 Q35.3 26 37.65 28.35 40 30.7 40 34 L40 46 39.85 47.6 Q39.4 49.9 37.65 51.65 35.3 54 32 54 28.7 54 26.35 51.65 24.6 49.9 24.15 47.6 L24 46 24 34 Q24 30.7 26.35 28.35 28.7 26 32 26"/>
  </g>
</svg>`,S1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M31.2 37 Q24.55 36.75 19.8 32.95 L19.7 32.9 Q16.3 30 16 26.1 L16 26.05 Q16.25 22 19.85 19 L19.95 18.9 Q25 15 32 15 39.15 15 44.2 19 L44.15 19 Q47.7 22 48 25.95 L48 26.05 Q47.7 30 44.2 32.9 L44 33.05 Q39.35 36.75 32.8 37 L31.2 37 M42.8 40.15 L46.55 37.7 46.6 37.65 Q51.9 33.4 52 27.4 51.85 21.4 46.55 17.1 40.55 12.3 32 12.3 23.45 12.3 17.4 17.1 L17.45 17.1 Q12.15 21.4 12 27.4 12.1 33.45 17.4 37.65 L21.25 40.15 Q21 40.8 21 41.65 21 43.5 22.25 44.85 L22.3 44.95 28.7 51.6 Q30 53 32 53 33.85 53.05 35.3 51.65 L35.3 51.6 41.7 44.95 41.8 44.85 Q43 43.5 43 41.65 L42.8 40.15 M43 50 Q43 52.5 39.75 54.25 36.55 56 32 56 27.5 56 24.25 54.25 21 52.5 21 50 L21 47.9 Q17.8 46.55 15 44.3 8 38.7 8 30.65 L8 30.1 8 29.55 8 29 8 28.5 8 28.1 8 27.95 8 27.4 Q8 19.4 15 13.65 22.05 8 32 8 42 8 48.95 13.65 56 19.4 56 27.4 L56 27.95 56 28.1 56 28.5 56 29 56 29.55 56 30.1 56 30.65 Q56 38.7 48.95 44.3 46.2 46.55 43 47.9 L43 50 M31 30 L31 20 28 20 28 33 37 33 37 30 31 30 M25.6 40 L38.4 40 Q39.05 40 39.55 40.5 L40 41.3 40 41.65 Q40 42.35 39.55 42.85 L33.15 49.5 Q32.65 50 32 50 31.3 50 30.85 49.5 L24.45 42.85 Q24 42.35 24 41.65 L24.05 41.3 24.45 40.5 Q24.9 40 25.6 40"/>
    <path stroke="none" fill="#FFFFFF" fill-opacity="0" d="M25.6 40 Q24.9 40 24.45 40.5 L24.05 41.3 24 41.65 Q24 42.35 24.45 42.85 L30.85 49.5 Q31.3 50 32 50 32.65 50 33.15 49.5 L39.55 42.85 Q40 42.35 40 41.65 L40 41.3 39.55 40.5 Q39.05 40 38.4 40 L25.6 40 M32.8 37 L38.4 37 Q40.25 36.95 41.7 38.4 42.45 39.15 42.8 40.15 L43 41.65 Q43 43.5 41.8 44.85 L41.7 44.95 35.3 51.6 35.3 51.65 Q33.85 53.05 32 53 30 53 28.7 51.6 L22.3 44.95 22.25 44.85 Q21 43.5 21 41.65 21 40.8 21.25 40.15 21.55 39.2 22.25 38.5 23.55 37 25.6 37 L31.2 37 32.8 37"/>
  </g>
</svg>`,O1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M31.2 37 Q24.55 36.75 19.8 32.95 L19.7 32.9 Q16.3 30 16 26.1 L16 26.05 Q16.25 22 19.85 19 L19.95 18.9 Q25 15 32 15 39.15 15 44.2 19 L44.15 19 Q47.7 22 48 25.95 L48 26.05 Q47.7 30 44.2 32.9 L44 33.05 Q39.35 36.75 32.8 37 L31.2 37 M42.8 40.15 L46.55 37.7 46.6 37.65 Q51.9 33.4 52 27.4 51.85 21.4 46.55 17.1 40.55 12.3 32 12.3 23.45 12.3 17.4 17.1 L17.45 17.1 Q12.15 21.4 12 27.4 12.1 33.45 17.4 37.65 L21.25 40.15 Q21 40.8 21 41.65 21 43.5 22.25 44.85 L22.3 44.95 28.7 51.6 Q30 53 32 53 33.85 53.05 35.3 51.65 L35.3 51.6 41.7 44.95 41.8 44.85 Q43 43.5 43 41.65 L42.8 40.15 M43 50 Q43 52.5 39.75 54.25 36.55 56 32 56 27.5 56 24.25 54.25 21 52.5 21 50 L21 47.9 Q17.8 46.55 15 44.3 8 38.7 8 30.65 L8 30.1 8 29.55 8 29 8 28.5 8 28.1 8 27.95 8 27.4 Q8 19.4 15 13.65 22.05 8 32 8 42 8 48.95 13.65 56 19.4 56 27.4 L56 27.95 56 28.1 56 28.5 56 29 56 29.55 56 30.1 56 30.65 Q56 38.7 48.95 44.3 46.2 46.55 43 47.9 L43 50 M33 30 L34 29.9 34 30 35 33 38 33 36.5 28.5 Q38 27.05 38 25 38 22.95 36.5 21.45 35.05 20 33 20 L27 20 27 33 30 33 30 30 33 30 M30 27 L30 23 33 23 Q33.85 23 34.4 23.55 35 24.15 35 25 35 25.85 34.4 26.4 33.85 27 33.05 27 L30 27 M30.85 49.5 L24.45 42.85 Q24 42.35 24 41.65 L24.05 41.3 24.45 40.5 Q24.9 40 25.6 40 L38.4 40 Q39.05 40 39.55 40.5 L40 41.3 40 41.65 Q40 42.35 39.55 42.85 L33.15 49.5 Q32.65 50 32 50 31.3 50 30.85 49.5"/>
    <path stroke="none" fill="#FFFFFF" fill-opacity="0" d="M30.85 49.5 Q31.3 50 32 50 32.65 50 33.15 49.5 L39.55 42.85 Q40 42.35 40 41.65 L40 41.3 39.55 40.5 Q39.05 40 38.4 40 L25.6 40 Q24.9 40 24.45 40.5 L24.05 41.3 24 41.65 Q24 42.35 24.45 42.85 L30.85 49.5 M32.8 37 L38.4 37 Q40.25 36.95 41.7 38.4 42.45 39.15 42.8 40.15 L43 41.65 Q43 43.5 41.8 44.85 L41.7 44.95 35.3 51.6 35.3 51.65 Q33.85 53.05 32 53 30 53 28.7 51.6 L22.3 44.95 22.25 44.85 Q21 43.5 21 41.65 21 40.8 21.25 40.15 21.55 39.2 22.25 38.5 23.55 37 25.6 37 L31.2 37 32.8 37"/>
  </g>
</svg>`,H1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#E73246" d="M40 10 L40 19.15 Q40 20 39.45 20.6 L33.45 26.6 Q32.85 27.15 32 27.15 31.15 27.15 30.6 26.6 L24.6 20.6 Q24 20 24 19.15 L24 10 Q24 9.15 24.6 8.6 25.15 8 26 8 L38 8 Q38.85 8 39.45 8.6 40 9.15 40 10"/>
    <path stroke="none" fill="#FFFFFF" d="M56 26 L56 38 Q56 38.85 55.45 39.45 54.85 40 54 40 L44.85 40 Q44 40 43.45 39.45 L37.45 33.45 Q36.85 32.85 36.85 32 36.85 31.15 37.45 30.6 L43.45 24.6 Q44 24 44.85 24 L54 24 Q54.85 24 55.45 24.6 56 25.15 56 26 M33.45 37.45 L39.45 43.45 Q40 44 40 44.85 L40 54 Q40 54.85 39.45 55.45 38.85 56 38 56 L26 56 Q25.15 56 24.6 55.45 24 54.85 24 54 L24 44.85 Q24 44 24.6 43.45 L30.6 37.45 Q31.15 36.85 32 36.85 32.85 36.85 33.45 37.45 M19.15 40 L10 40 Q9.15 40 8.6 39.45 8 38.85 8 38 L8 26 Q8 25.15 8.6 24.6 9.15 24 10 24 L19.15 24 Q20 24 20.6 24.6 L26.6 30.6 Q27.15 31.15 27.15 32 27.15 32.85 26.6 33.45 L20.6 39.45 Q20 40 19.15 40"/>
  </g>
</svg>`,V1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M40 10 L40 19.15 Q40 20 39.45 20.6 L33.45 26.6 Q32.85 27.15 32 27.15 31.15 27.15 30.6 26.6 L24.6 20.6 Q24 20 24 19.15 L24 10 Q24 9.15 24.6 8.6 25.15 8 26 8 L38 8 Q38.85 8 39.45 8.6 40 9.15 40 10 M56 26 L56 38 Q56 38.85 55.45 39.45 54.85 40 54 40 L44.85 40 Q44 40 43.45 39.45 L37.45 33.45 Q36.85 32.85 36.85 32 36.85 31.15 37.45 30.6 L43.45 24.6 Q44 24 44.85 24 L54 24 Q54.85 24 55.45 24.6 56 25.15 56 26 M19.15 40 L10 40 Q9.15 40 8.6 39.45 8 38.85 8 38 L8 26 Q8 25.15 8.6 24.6 9.15 24 10 24 L19.15 24 Q20 24 20.6 24.6 L26.6 30.6 Q27.15 31.15 27.15 32 27.15 32.85 26.6 33.45 L20.6 39.45 Q20 40 19.15 40"/>
    <path stroke="none" fill="#E73246" d="M33.45 37.45 L39.45 43.45 Q40 44 40 44.85 L40 54 Q40 54.85 39.45 55.45 38.85 56 38 56 L26 56 Q25.15 56 24.6 55.45 24 54.85 24 54 L24 44.85 Q24 44 24.6 43.45 L30.6 37.45 Q31.15 36.85 32 36.85 32.85 36.85 33.45 37.45"/>
  </g>
</svg>`,z1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M40 10 L40 19.15 Q40 20 39.45 20.6 L33.45 26.6 Q32.85 27.15 32 27.15 31.15 27.15 30.6 26.6 L24.6 20.6 Q24 20 24 19.15 L24 10 Q24 9.15 24.6 8.6 25.15 8 26 8 L38 8 Q38.85 8 39.45 8.6 40 9.15 40 10 M56 26 L56 38 Q56 38.85 55.45 39.45 54.85 40 54 40 L44.85 40 Q44 40 43.45 39.45 L37.45 33.45 Q36.85 32.85 36.85 32 36.85 31.15 37.45 30.6 L43.45 24.6 Q44 24 44.85 24 L54 24 Q54.85 24 55.45 24.6 56 25.15 56 26 M33.45 37.45 L39.45 43.45 Q40 44 40 44.85 L40 54 Q40 54.85 39.45 55.45 38.85 56 38 56 L26 56 Q25.15 56 24.6 55.45 24 54.85 24 54 L24 44.85 Q24 44 24.6 43.45 L30.6 37.45 Q31.15 36.85 32 36.85 32.85 36.85 33.45 37.45"/>
    <path stroke="none" fill="#E73246" d="M19.15 40 L10 40 Q9.15 40 8.6 39.45 8 38.85 8 38 L8 26 Q8 25.15 8.6 24.6 9.15 24 10 24 L19.15 24 Q20 24 20.6 24.6 L26.6 30.6 Q27.15 31.15 27.15 32 27.15 32.85 26.6 33.45 L20.6 39.45 Q20 40 19.15 40"/>
  </g>
</svg>`,U1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M40 10 L40 19.15 Q40 20 39.45 20.6 L33.45 26.6 Q32.85 27.15 32 27.15 31.15 27.15 30.6 26.6 L24.6 20.6 Q24 20 24 19.15 L24 10 Q24 9.15 24.6 8.6 25.15 8 26 8 L38 8 Q38.85 8 39.45 8.6 40 9.15 40 10 M33.45 37.45 L39.45 43.45 Q40 44 40 44.85 L40 54 Q40 54.85 39.45 55.45 38.85 56 38 56 L26 56 Q25.15 56 24.6 55.45 24 54.85 24 54 L24 44.85 Q24 44 24.6 43.45 L30.6 37.45 Q31.15 36.85 32 36.85 32.85 36.85 33.45 37.45 M19.15 40 L10 40 Q9.15 40 8.6 39.45 8 38.85 8 38 L8 26 Q8 25.15 8.6 24.6 9.15 24 10 24 L19.15 24 Q20 24 20.6 24.6 L26.6 30.6 Q27.15 31.15 27.15 32 27.15 32.85 26.6 33.45 L20.6 39.45 Q20 40 19.15 40"/>
    <path stroke="none" fill="#E73246" d="M56 26 L56 38 Q56 38.85 55.45 39.45 54.85 40 54 40 L44.85 40 Q44 40 43.45 39.45 L37.45 33.45 Q36.85 32.85 36.85 32 36.85 31.15 37.45 30.6 L43.45 24.6 Q44 24 44.85 24 L54 24 Q54.85 24 55.45 24.6 56 25.15 56 26"/>
  </g>
</svg>`,W1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M37.7 26.35 Q40 28.65 40 32 40 35.35 37.7 37.7 35.35 40 32 40 28.7 40 26.4 37.7 L26.35 37.65 Q24 35.3 24 32 24 28.7 26.35 26.35 L26.4 26.35 Q28.7 24 32 24 35.35 24 37.7 26.35 M44 32 Q44 27 40.5 23.5 37 20 32 20 27.05 20 23.55 23.5 20 27 20 32 20 37 23.55 40.5 27.05 44 32 44 37 44 40.5 40.5 44 37 44 32 M56 32 Q56 42 48.95 48.95 42 56 32 56 22.05 56 15 48.95 8 42 8 32 8 22.05 15 15 22.05 8 32 8 42 8 48.95 15 56 22.05 56 32"/>
  </g>
</svg>`,K1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M44.15 19 Q47.7 22 48 25.95 L48 26.05 Q47.7 30 44.2 32.9 L44 33.05 Q39.05 37 32 37 24.85 37 19.8 32.95 L19.7 32.9 Q16.3 30 16 26.1 L16 26.05 Q16.25 22 19.85 19 L19.95 18.9 Q25 15 32 15 39.15 15 44.2 19 L44.15 19 M43 50 Q43 52.5 39.75 54.25 36.55 56 32 56 27.5 56 24.25 54.25 21 52.5 21 50 L21 47.9 Q17.8 46.55 15 44.3 8 38.7 8 30.65 L8 30.1 8 29.55 8 29 8 28.5 8 28.1 8 27.95 8 27.4 Q8 19.4 15 13.65 22.05 8 32 8 42 8 48.95 13.65 56 19.4 56 27.4 L56 27.95 56 28.1 56 28.5 56 29 56 29.55 56 30.1 56 30.65 Q56 38.7 48.95 44.3 46.2 46.55 43 47.9 L43 50 M31 30 L31 20 28 20 28 33 37 33 37 30 31 30 M12 27.4 Q12.1 33.45 17.4 37.65 23.45 42.5 32 42.5 40.55 42.5 46.55 37.7 L46.6 37.65 Q51.9 33.4 52 27.4 51.85 21.4 46.55 17.1 40.55 12.3 32 12.3 23.45 12.3 17.4 17.1 L17.45 17.1 Q12.15 21.4 12 27.4"/>
  </g>
</svg>`,j1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M44.15 19 Q47.7 22 48 25.95 L48 26.05 Q47.7 30 44.2 32.9 L44 33.05 Q39.05 37 32 37 24.85 37 19.8 32.95 L19.7 32.9 Q16.3 30 16 26.1 L16 26.05 Q16.25 22 19.85 19 L19.95 18.9 Q25 15 32 15 39.15 15 44.2 19 L44.15 19 M43 50 Q43 52.5 39.75 54.25 36.55 56 32 56 27.5 56 24.25 54.25 21 52.5 21 50 L21 47.9 Q17.8 46.55 15 44.3 8 38.7 8 30.65 L8 30.1 8 29.55 8 29 8 28.5 8 28.1 8 27.95 8 27.4 Q8 19.4 15 13.65 22.05 8 32 8 42 8 48.95 13.65 56 19.4 56 27.4 L56 27.95 56 28.1 56 28.5 56 29 56 29.55 56 30.1 56 30.65 Q56 38.7 48.95 44.3 46.2 46.55 43 47.9 L43 50 M33 30 L34 29.9 34 30 35 33 38 33 36.5 28.5 Q38 27.05 38 25 38 22.95 36.5 21.45 35.05 20 33 20 L27 20 27 33 30 33 30 30 33 30 M30 27 L30 23 33 23 Q33.85 23 34.4 23.55 35 24.15 35 25 35 25.85 34.4 26.4 33.85 27 33.05 27 L30 27 M12 27.4 Q12.1 33.45 17.4 37.65 23.45 42.5 32 42.5 40.55 42.5 46.55 37.7 L46.6 37.65 Q51.9 33.4 52 27.4 51.85 21.4 46.55 17.1 40.55 12.3 32 12.3 23.45 12.3 17.4 17.1 L17.45 17.1 Q12.15 21.4 12 27.4"/>
  </g>
</svg>`;var X1=j('<div class="svg-container svelte-1kt13e4"><!></div>');function H(e,t){l3(t,!0);let n=x(t,"width",3,40),s=x(t,"height",3,40),i=x(t,"color",3,"#666666");const r={0:E1,1:A1,2:C1,3:I1,4:T1,5:P1,6:N1,7:R1,8:D1,9:q1,10:S1,11:O1,12:H1,13:V1,14:z1,15:U1,16:W1,axis_left:K1,axis_right:j1},o={"/":a4,"*":l4,",":L4,".":g4,":":d4,";":h4,"[":Q4,"]":w4,"+":f4,"-":v4,"~":u4," ":c4,'"':p4,backspace:F4,capslock:k4,tab:x4,shift:_4,arrowleft:m4,arrowright:M4,arrowup:y4,arrowdown:b4,pagedown:E4,pageup:A4,end:C4,home:I4,control:T4,enter:P4,a:N4,b:R4,c:D4,d:q4,e:S4,f:O4,g:H4,h:V4,i:z4,j:U4,k:W4,l:K4,m:j4,n:X4,o:Y4,p:J4,q:Z4,r:G4,s:B4,t:$4,u:t1,v:n1,w:e1,x:s1,y:i1,z:r1,0:o1,1:a1,2:l1,3:L1,4:g1,5:d1,6:h1,7:Q1,8:w1,9:f1,f1:v1,f2:u1,f3:c1,f4:p1,f5:F1,f6:k1,f7:x1,f8:_1,f9:m1,f10:M1,f11:y1,f12:b1},w={0:s4,1:i4,2:r4,3:o4};let h=i3(void 0);switch(t.type,["ps4","ps5"].includes(t.type),t.type){case"keyboard_mouse":let g=t.input.toLowerCase();K(h,o[g],!0);break;case"ps4":K(h,r[t.input],!0);break;case"generic":t.input in w?K(h,w[t.input],!0):K(h,r[t.input],!0)}var L=m2(),u=F3(L);{var _=g=>{var l=X1();let c;var d=q(l);q5(d,()=>N(h).replace("<g>",`<g transform="scale(${Math.min(n()/64,s()/64)})">`).replace('fill="#FFFFFF"',`fill="${i()}"`)),D(l),r3(a=>c=$(l,"",c,a),[()=>({height:`${s()??""}px`,width:`${n()??""}px`})]),z(g,l)};S(u,g=>{N(h)&&g(_)})}z(e,L),L3()}const Y1=e=>e;function Z(e,{delay:t=0,duration:n=400,easing:s=Y1}={}){const i=+getComputedStyle(e).opacity;return{delay:t,duration:n,easing:s,css:r=>`opacity: ${r*i}`}}class k{}v(k,"DOWN",0),v(k,"RIGHT",1),v(k,"LEFT",2),v(k,"UP",3),v(k,"BUMPER_LEFT",4),v(k,"BUMPER_RIGHT",5),v(k,"TRIGGER_LEFT",6),v(k,"TRIGGER_RIGHT",7),v(k,"VIEW",8),v(k,"MENU",9),v(k,"AXIS_BUTTON_LEFT",10),v(k,"AXIS_BUTTON_RIGHT",11),v(k,"DPAD_UP",12),v(k,"DPAD_DOWN",13),v(k,"DPAD_LEFT",14),v(k,"DPAD_RIGHT",15),v(k,"HOME",16),v(k,"CROSS",0),v(k,"CIRCLE",1),v(k,"SQUARE",2),v(k,"TRIANGLE",3),v(k,"L1",4),v(k,"R1",5),v(k,"L2",6),v(k,"R2",7),v(k,"SHARE",8),v(k,"OPTIONS",9),v(k,"PS",16),v(k,"A",0),v(k,"B",1),v(k,"X",2),v(k,"Y",3),v(k,"LB",4),v(k,"RB",5),v(k,"TL",6),v(k,"TR",7),v(k,"BACK",8),v(k,"START",9),v(k,"XBOX",16);const J1=(e,t,n)=>{N(t)&&(N(t).pressed=!1),n()&&n()()};var Z1=(e,t)=>{var n;(n=N(t))==null||n.onpressed(),setTimeout(()=>{var s;(s=N(t))==null||s.onrelease()},50)},G1=j('<div class="hint-container svelte-j52h91"><div class="hint hint-up svelte-j52h91"><!> <!></div></div>'),B1=j('<div class="button-wrapper svelte-j52h91"><button><!></button> <!></div>');function Y3(e,t){l3(t,!0);let n=x(t,"disabled",3,!1),s=x(t,"onpressed",3,void 0),i=x(t,"onhold",3,void 0),r=x(t,"onrelease",3,void 0),o=x(t,"onpointerout",3,void 0),w=x(t,"style",3,""),h=x(t,"cssclass",3,"vbutton"),L=x(t,"inputMapping",19,()=>({name:"",gamepad:-1,buttons:[k.DOWN],keys:["e"," "]})),u=x(t,"context",19,()=>["default"]),_=x(t,"requiresFocus",3,!1),g=i3(""),l,c=i3(void 0);f3(()=>(K(c,new d(L(),l,_(),s(),i(),r()),!0),y3(u(),N(c)),()=>{N(c)&&b3(u(),N(c))}));class d extends A2{onpressed(){const p=super.onpressed();return K(g,"button_clicked "),l&&l.focus(),p}onrelease(){K(g,""),super.onrelease()}}var a=B1(),Q=q(a);Q.__pointerdown=function(...b){var p,y;(y=(p=N(c))==null?void 0:p.onpressed)==null||y.apply(this,b)},Q.__click=[Z1,c],Q.__pointerup=function(...b){var p,y;(y=(p=N(c))==null?void 0:p.onrelease)==null||y.apply(this,b)},Q.__pointerout=[J1,c,o];var m=q(Q);T5(m,()=>t.children),D(Q),M3(Q,b=>l=b,()=>l);var f=E(Q,2);{var A=b=>{var p=G1(),y=q(p),I=q(y);{var F=V=>{H(V,{type:"keyboard_mouse",get input(){return L().keys[0]}})};S(I,V=>{L().keys.length>0&&V(F)})}var M=E(I,2);{var U=V=>{H(V,{type:"generic",get input(){return L().buttons[0]}})};S(M,V=>{L().buttons.length>0&&V(U)})}D(y),D(p),J(2,p,()=>Z),J(1,p,()=>Z),z(b,p)};S(f,b=>{T.showHints&&u().includes(T.context)&&b(A)})}D(a),r3(()=>{$(Q,w()),t2(Q,1,N(g)+h(),"svelte-j52h91"),Q.disabled=n()}),z(e,a),L3()}N3(["pointerdown","click","pointerup","pointerout"]);class $1 extends R3{constructor(){super(...arguments);v(this,"setValue",n=>{});v(this,"getValue",()=>0);v(this,"max",0);v(this,"min",0);v(this,"step",1)}onbuttonpressed(n,s){if(this.disabled||!k3(this.input,n))return!1;const i=this.input;return i.buttons_pos.includes(s)?(this.setValue(Math.min(this.max,this.getValue()+this.step)),!0):i.buttons_neg.includes(s)?(this.setValue(Math.max(this.min,this.getValue()-this.step)),!0):i.buttons.includes(s)?super.onbuttonpressed(n,s):!1}thisKey(n){return n&&this.input.keys.includes(n.key.toLowerCase())||!1}onkeypressed(n){return this.thisKey(n)&&super.onkeypressed(n)}onkeyhold(n){if(!n)return;const s=this.input,i=n.key.toLowerCase();if(s.keys.includes(i))return this.onhold();s.keys_pos.includes(i)&&this.setValue(Math.min(this.max,this.getValue()+this.step)),s.keys_neg.includes(i)&&this.setValue(Math.max(this.min,this.getValue()-this.step))}}var tt=j('<div class="hint-container hint-left svelte-il5fu"><div class="hint"><!> <!></div></div>'),nt=j('<div class="hint-container hint-right svelte-il5fu"><div class="hint"><!> <!></div></div>'),et=j('<div class="vslider svelte-il5fu"><!> <input type="range"/> <!></div>');function J3(e,t){l3(t,!0);let n=x(t,"value",15,50),s=x(t,"onpressed",3,void 0),i=x(t,"min",3,0),r=x(t,"max",3,100),o=x(t,"step",3,10),w=x(t,"disabled",3,!1),h=x(t,"inputMapping",19,()=>({name:"Slider",gamepad:-1,sensitivity:.05,axes:0,buttons:[k.DOWN],buttons_neg:[k.L1,k.DPAD_LEFT],buttons_pos:[k.R1,k.DPAD_RIGHT],keys_pos:["d"],keys_neg:["a"],keys:["e","enter"],invert:!1})),L=x(t,"context",19,()=>["default"]),u=x(t,"requiresFocus",3,!0),_;function g(){return s2(),s()?s()():!1}f3(()=>{const f=new $1(h(),_,u(),g);return f.setValue=A=>{n(A)},f.getValue=()=>n(),f.max=r(),f.min=i(),f.step=o(),y3(L(),f),()=>{b3(L(),f)}});var l=et(),c=q(l);{var d=f=>{var A=tt(),b=q(A),p=q(b);{var y=M=>{H(M,{type:"keyboard_mouse",get input(){return h().keys_neg[0]}})};S(p,M=>{h().keys_neg.length>0&&M(y)})}var I=E(p,2);{var F=M=>{H(M,{type:"generic",get input(){return h().buttons_neg[0]}})};S(I,M=>{h().buttons_neg.length>0&&M(F)})}D(b),D(A),J(2,A,()=>Z),J(1,A,()=>Z),z(f,A)};S(c,f=>{T.showHints&&L().includes(T.context)&&f(d)})}var a=E(c,2);U5(a),$(a,"",{},{width:"100%;"}),M3(a,f=>_=f,()=>_);var Q=E(a,2);{var m=f=>{var A=nt(),b=q(A),p=q(b);{var y=M=>{H(M,{type:"keyboard_mouse",get input(){return h().keys_pos[0]}})};S(p,M=>{h().keys_pos.length>0&&M(y)})}var I=E(p,2);{var F=M=>{H(M,{type:"generic",get input(){return h().buttons_pos[0]}})};S(I,M=>{h().buttons_pos.length>0&&M(F)})}D(b),D(A),J(2,A,()=>Z),J(1,A,()=>Z),z(f,A)};S(Q,f=>{T.showHints&&L().includes(T.context)&&f(m)})}D(l),r3(()=>{w3(a,"min",i()),w3(a,"max",r()),w3(a,"step",o()),a.disabled=w()}),Z5(a,n),z(e,l),L3()}class st extends R3{constructor(){super(...arguments);v(this,"xPos",!1);v(this,"xNeg",!1);v(this,"yPos",!1);v(this,"yNeg",!1);v(this,"gamepadActive",!1);v(this,"pos",[0,0]);v(this,"radius",50);v(this,"calcPos",(n,s)=>{});v(this,"updatePosition",(n,s)=>{});v(this,"activateGamepad",()=>{this.disabled||(this.gamepadActive=!0)})}onrelease(){let n=this.pos[0],s=this.pos[1];(this.xPos||this.xNeg)&&(n=0),(this.yPos||this.yNeg)&&(s=0),!(n==this.pos[0]&&s==this.pos[1])&&(this.calcPos(n*this.radius,s*this.radius),this.pos=[n,s],this.gamepadActive=!0)}onhold(){let n=this.pos[0],s=this.pos[1];this.xPos?n=1:this.xNeg&&(n=-1),this.yPos?s=1:this.yNeg&&(s=-1),!(n==this.pos[0]&&s==this.pos[1])&&(this.calcPos(n*this.radius,s*this.radius),this.pos=[n,s],this.gamepadActive=!1)}updateKeys(n){const s=this.input,i=n.key.toLowerCase();this.xPos=s.key_x_pos.includes(i),this.xNeg=s.key_x_neg.includes(i),this.yPos=s.key_y_pos.includes(i),this.yNeg=s.key_y_neg.includes(i)}onkeyrelease(n){this.disabled||!n||(this.updateKeys(n),super.onkeyrelease(n))}onkeyhold(n){this.disabled||!n||(this.updateKeys(n),super.onkeyhold(n))}updateButton(n){const s=this.input;this.xPos=s.button_x_pos.includes(n),this.xNeg=s.button_x_neg.includes(n),this.yPos=s.button_y_pos.includes(n),this.yNeg=s.button_y_neg.includes(n)}onbuttonhold(n,s){this.disabled||(this.updateButton(s),super.onbuttonhold(n,s))}onbuttonrelease(n,s){this.disabled||(this.updateButton(s),super.onbuttonrelease(n,s))}onupdate(n){if(this.disabled||!this.gamepadActive||!k3(this.input,n))return;const s=this.input;let i=n.axes[s.axes_x],r=n.axes[s.axes_y];if(s.invert_x&&(i=-i),s.invert_y&&(r=-r),Math.abs(i)<s.deadzoneX&&Math.abs(r)<s.deadzoneY){this.updatePosition(!1,[0,0]);return}this.updatePosition(!0,[i,r])}}var it=()=>{},rt=()=>{},ot=j("<!> <br/>",1),at=j("<!> <br/>",1),lt=j('<div class="hints_container svelte-1annkz1"><div class="hint svelte-1annkz1"><!></div> <div class="hint hint-up svelte-1annkz1"><!> <!></div> <div class="hint hint-down svelte-1annkz1"><!> <!></div> <div class="hint hint-left svelte-1annkz1"><!> <!></div> <div class="hint hint-right svelte-1annkz1"><!> <!></div></div>'),Lt=j('<div id="joystick_area" role="button" class="svelte-1annkz1"><!> <div class="joystick_container svelte-1annkz1"><div class="joystick_back svelte-1annkz1"></div> <div class="joystick_front svelte-1annkz1"></div></div></div>');function gt(e,t){l3(t,!0);let n=x(t,"disabled",3,!1),s=x(t,"size",3,100),i=x(t,"backgroundWidth",3,200),r=x(t,"backgroundHeight",3,200),o=x(t,"color",3,"rgb(106, 191, 163)"),w=x(t,"defaultOpacity",3,.5),h=x(t,"activeOpacity",3,.8),L=x(t,"border",3,1),u=x(t,"borderColor",3,"black"),_=x(t,"position",31,()=>P3([0,0])),g=x(t,"style",3,"background-color: rgb(215, 219, 221);"),l=x(t,"inputMapping",19,()=>({name:"Virtual Joystick",gamepad:-1,axes_x:0,axes_y:1,button_x_pos:[k.DPAD_RIGHT],button_x_neg:[k.DPAD_LEFT],button_y_pos:[k.DPAD_DOWN],button_y_neg:[k.DPAD_UP],deadzoneX:.05,deadzoneY:.05,key_x_pos:["d"],key_x_neg:["a"],key_y_pos:["s"],key_y_neg:["w"],invert_x:!1,invert_y:!1})),c=x(t,"context",19,()=>["default"]),d=x(t,"requiresFocus",3,!1);const a=s()/2;let Q=!1,m=i3(P3(w()));function f(O){if(n()||!l().gamepad||!Q||!O.target)return;F&&(F.gamepadActive=!1);const R=O.target.getBoundingClientRect(),e3=O.x-R.x,t3=O.y-R.y;A(e3,t3)}function A(O,R){let e3=O-i()/2,t3=R-r()/2;b(e3,t3)}function b(O,R){const e3=G5(O,R),t3=B5(O,R);let D3=t4(e3,a),E3=$5(D3,t3),d3=E3[0]/a,o3=E3[1]/a;if(Math.abs(d3)<l().deadzoneX&&Math.abs(o3)<l().deadzoneY){_([0,0]),K(m,w());return}d3=Math.abs(d3)<1e-6?0:d3,o3=Math.abs(o3)<1e-6?0:o3,K(m,h()),_([d3,o3])}function p(){Q=!1,K(m,w()),_([0,0])}function y(O,R){K(m,O?h():w(),!0),_(R)}let I,F;f3(()=>(F=new st(l(),I,d()),F.radius=a,F.calcPos=b,F.updatePosition=y,y3(c(),F),()=>{F&&b3(c(),F)}));var M=Lt();p3("pointerup",T3,p),w3(M,"tabindex",0),M.__keydown=[it],M.__click=()=>{I.focus()};let U;M.__pointerdown=O=>{n()||(O.stopImmediatePropagation(),Q=!0,f(O))},M.__pointerup=()=>{F==null||F.activateGamepad()},M.__pointermove=f,M.__touchstart=[rt],M.__touchend=()=>{F==null||F.activateGamepad()},M.__pointerout=()=>{F==null||F.activateGamepad()};var V=q(M);{var X=O=>{var R=lt();let e3;var t3=q(R),D3=q(t3);{var E3=C=>{H(C,{type:"generic",input:"axis_left"})},d3=C=>{var g3=m2(),x3=F3(g3);{var U2=O3=>{H(O3,{type:"generic",input:"axis_right"})};S(x3,O3=>{[2,3].includes(l().axes_x)&&[2,3].includes(l().axes_y)&&O3(U2)},!0)}z(C,g3)};S(D3,C=>{[0,1].includes(l().axes_x)&&[0,1].includes(l().axes_y)?C(E3):C(d3,!1)})}D(t3);var o3=E(t3,2),i2=q(o3);{var I2=C=>{H(C,{type:"keyboard_mouse",get input(){return l().key_y_neg[0]}})};S(i2,C=>{l().key_y_neg.length>0&&C(I2)})}var T2=E(i2,2);{var P2=C=>{H(C,{type:"generic",get input(){return l().button_y_neg[0]}})};S(T2,C=>{l().button_y_neg.length>0&&C(P2)})}D(o3);var q3=E(o3,2),r2=q(q3);{var N2=C=>{H(C,{type:"keyboard_mouse",get input(){return l().key_y_pos[0]}})};S(r2,C=>{l().key_y_pos.length>0&&C(N2)})}var R2=E(r2,2);{var D2=C=>{H(C,{type:"generic",get input(){return l().button_y_pos[0]}})};S(R2,C=>{l().button_y_pos.length>0&&C(D2)})}D(q3);var S3=E(q3,2),o2=q(S3);{var q2=C=>{var g3=ot(),x3=F3(g3);H(x3,{type:"keyboard_mouse",get input(){return l().key_x_neg[0]}}),c3(2),z(C,g3)};S(o2,C=>{l().key_x_neg.length>0&&C(q2)})}var S2=E(o2,2);{var O2=C=>{H(C,{type:"generic",get input(){return l().button_x_neg[0]}})};S(S2,C=>{l().button_x_neg.length>0&&C(O2)})}D(S3);var a2=E(S3,2),l2=q(a2);{var H2=C=>{var g3=at(),x3=F3(g3);H(x3,{type:"keyboard_mouse",get input(){return l().key_x_pos[0]}}),c3(2),z(C,g3)};S(l2,C=>{l().key_x_pos.length>0&&C(H2)})}var V2=E(l2,2);{var z2=C=>{H(C,{type:"generic",get input(){return l().button_x_pos[0]}})};S(V2,C=>{l().button_x_pos.length>0&&C(z2)})}D(a2),D(R),r3(C=>e3=$(R,"",e3,C),[()=>({width:i()+"px",height:r()+"px"})]),J(2,R,()=>Z),J(1,R,()=>Z),z(O,R)};S(V,O=>{T.showHints&&c().includes(T.context)&&O(X)})}var n3=E(V,2);let P;var W=q(n3);let G;var B=E(W,2);let v3;D(n3),D(M),M3(M,O=>I=O,()=>I),r3((O,R,e3,t3)=>{U=$(M,g(),U,O),P=$(n3,"",P,R),G=$(W,"",G,e3),v3=$(B,"",v3,t3)},[()=>({width:i()+"px",height:r()+"px"}),()=>({left:(i()-s())/2+"px",top:(r()-s())/2+"px"}),()=>({width:s()+"px",height:s()+"px",background:o(),opacity:N(m),transition:"none",border:L()>0?L()+"px solid "+u():0}),()=>({left:_()[0]*a+"px",top:_()[1]*a+"px","margin-top":a/2+"px","margin-left":a/2+"px",transition:"opacity 0.2s ease-in-out",width:a+"px",height:a+"px",background:o(),opacity:N(m),border:L()>0?L()+"px solid "+u():0})]),p3("pointerleave",M,()=>{F==null||F.activateGamepad()}),z(e,M),L3()}N3(["keydown","click","pointerdown","pointerup","pointermove","touchstart","touchend","pointerout"]);function Z3(e,t){l3(t,!0);let n=x(t,"disabled",3,!1),s=x(t,"onpressed",3,void 0),i=x(t,"onhold",3,void 0),r=x(t,"onrelease",3,void 0),o=x(t,"pressed",3,!1),w=x(t,"inputMapping",19,()=>({name:"Help",gamepad:-1,buttons:[k.VIEW],keys:["h"]})),h=x(t,"context",19,()=>["default"]);f3(()=>{const L=new A2(w(),void 0,!1,s(),i(),r());return L.disabled=n(),L.pressed=o(),y3(h(),L),()=>{L&&b3(h(),L)}}),L3()}class dt extends R3{constructor(){super(...arguments);v(this,"axesDown",-1);v(this,"changeFocus",n=>{})}onpressed(){return this.disabled?!1:super.onpressed()}onbuttonpressed(n,s){if(this.disabled||!k3(this.input,n))return!1;const i=this.input;return i.buttons.includes(s)?this.onpressed():i.buttons_next.includes(s)?(this.changeFocus(1),!0):i.buttons_prev.includes(s)?(this.changeFocus(-1),!0):!1}onkeypressed(n){if(!n)return!1;const s=this.input,i=n.key.toLowerCase();return s.keys.includes(i)?this.onpressed():s.keys_next.includes(i)?(this.changeFocus(1),!0):s.keys_prev.includes(i)?(this.changeFocus(-1),!0):!1}onupdate(n){if(this.disabled||!k3(this.input,n))return;const s=this.input;for(const i of s.axes){const r=n.axes[i];let o=s.sensitivity;if(r<-o&&this.axesDown!=i){this.changeFocus(-1),this.axesDown=i;continue}if(r>o&&this.axesDown!=i){this.changeFocus(1),this.axesDown=i;continue}r<o&&r>-o&&(this.axesDown=-1)}}}var ht=j('<div class="hint-container svelte-pm5mnn"><div class="hint">↑ <!> <!></div></div> <div class="hint-center svelte-pm5mnn"><div class="hint-container svelte-pm5mnn"><div class="hint"><!> <!></div></div></div>',1),Qt=j("<li> </li>"),wt=j('<div class="hint-container svelte-pm5mnn"><div class="hint">↓ <!> <!></div></div>'),ft=j('<div role="button"><!> <ul></ul> <!></div>');function C2(e,t){l3(t,!0);let n=x(t,"onpressed",3,void 0),s=x(t,"disabled",3,!1),i=x(t,"wrap",3,!0),r=x(t,"style",3,""),o=x(t,"cssclass",3,"vlist"),w=x(t,"selectedIndex",15,0),h=x(t,"focussed",15,0),L=x(t,"inputMapping",19,()=>({name:"List",gamepad:-1,axes:[1],sensitivity:.05,buttons:[k.DOWN],buttons_prev:[k.DPAD_UP],buttons_next:[k.DPAD_DOWN],keys_prev:["arrowup","w"],keys_next:["arrowdown","s"],keys:["enter","r"]})),u=x(t,"context",19,()=>["default"]),_=x(t,"requiresFocus",3,!0);function g(p){let y="item";return y+=w()===p?" selected":"",h()===p&&(y+=" focussed"),y}function l(p){p>=t.items.length&&(p=i()?0:t.items.length-1),p<0&&(p=i()?t.items.length-1:0),h(p)}function c(){return w(h()),n()?n()():(s2(),!0)}let d;f3(()=>{const p=new dt(L(),d,_(),c);return p.changeFocus=y=>{l(h()+y)},y3(u(),p),()=>{b3(u(),p)}});var a=ft();w3(a,"tabindex",0);var Q=q(a);{var m=p=>{var y=ht(),I=F3(y),F=q(I),M=E(q(F));{var U=R=>{H(R,{type:"keyboard_mouse",get input(){return L().keys_prev[0]}})};S(M,R=>{L().keys_prev.length>0&&R(U)})}var V=E(M,2);{var X=R=>{H(R,{type:"generic",get input(){return L().buttons_prev[0]}})};S(V,R=>{L().buttons_prev.length>0&&R(X)})}D(F),D(I);var n3=E(I,2),P=q(n3),W=q(P),G=q(W);{var B=R=>{H(R,{type:"keyboard_mouse",get input(){return L().keys[0]}})};S(G,R=>{L().keys.length>0&&R(B)})}var v3=E(G,2);{var O=R=>{H(R,{type:"generic",get input(){return L().buttons[0]}})};S(v3,R=>{L().buttons.length>0&&R(O)})}D(W),D(P),D(n3),J(2,I,()=>Z),J(1,I,()=>Z),J(2,P,()=>Z),J(1,P,()=>Z),z(p,y)};S(Q,p=>{T.showHints&&u().includes(T.context)&&p(m)})}var f=E(Q,2);R5(f,21,()=>t.items,P5,(p,y,I)=>{var F=Qt();F.__pointerdown=()=>{s()||(h(I),c())};var M=q(F,!0);D(F),r3(U=>{t2(F,1,U,"svelte-pm5mnn"),C3(M,N(y))},[()=>h2(g(I))]),p3("pointerenter",F,()=>{s()||h(I)}),z(p,F)}),D(f);var A=E(f,2);{var b=p=>{var y=wt(),I=q(y),F=E(q(I));{var M=X=>{H(X,{type:"keyboard_mouse",get input(){return L().keys_next[0]}})};S(F,X=>{L().keys_next.length>0&&X(M)})}var U=E(F,2);{var V=X=>{H(X,{type:"generic",get input(){return L().buttons_next[0]}})};S(U,X=>{L().buttons_next.length>0&&X(V)})}D(I),D(y),J(2,y,()=>Z),J(1,y,()=>Z),z(p,y)};S(A,p=>{T.showHints&&u().includes(T.context)&&p(b)})}D(a),M3(a,p=>d=p,()=>d),r3(()=>{t2(a,1,h2(o()),"svelte-pm5mnn"),$(f,r())}),z(e,a),L3()}N3(["pointerdown"]);var vt=(e,t)=>{t(!1)},ut=j('<div id="sidenav" class="sidenav"><button class="closebtn">&times;</button> <!></div>');function ct(e,t){l3(t,!0);const n=["Main","Second","Third","Settings","Fifth"];let s=x(t,"open",15,!1),i=i3(0);function r(){return n[N(i)],s(!1),!0}var o=ut();let w;var h=q(o);h.__click=[vt,s];var L=E(h,2);{let u=h3(()=>!s());C2(L,{get disabled(){return N(u)},onpressed:r,get items(){return n},wrap:!1,get selectedIndex(){return N(i)},set selectedIndex(_){K(i,_,!0)}})}D(o),r3(u=>w=$(o,"",w,u),[()=>({width:s()?"250px":"0"})]),z(e,o),L3()}N3(["click"]);var pt=j('<div class="help-modal svelte-zep3tj"><div class="help-content"><!> or <!> toggle help.</div></div>'),Ft=j('<!> <!> <!> <!> <div class="background svelte-zep3tj"><main><!> <!> <!> <br/> <!> <br/>  <!><br/> <!><br/> <!> <!> <!><br/> <br/> <!></main></div>',1);function bt(e,t){l3(t,!0);const n=["banana","orange","apple","strawberry"];let s=i3(0),i=i3(P3([0,0])),r,o=i3(!0),w=i3(!1),h=i3(!0);f3(()=>{setTimeout(()=>{K(h,!1)},2e3)});var L=Ft(),u=F3(L);{let P=h3(()=>({name:"Help",gamepad:-1,buttons:[k.VIEW],keys:["h"]}));Z3(u,{context:["default","my_ctx"],onpressed:()=>(T.showHints=!T.showHints,!0),get inputMapping(){return N(P)}})}var _=E(u,2);{let P=h3(()=>({name:"Focus next",gamepad:-1,buttons:[k.TRIGGER_RIGHT],keys:["k"]}));Z3(_,{onpressed:()=>(s2(),!0),get inputMapping(){return N(P)}})}var g=E(_,2);{let P=h3(()=>({name:"Focus previous",gamepad:-1,buttons:[k.TRIGGER_LEFT],keys:["i"]}));Z3(g,{onpressed:()=>(n4(),!0),get inputMapping(){return N(P)}})}var l=E(g,2);ct(l,{get open(){return N(w)},set open(P){K(w,P,!0)}});var c=E(l,2),d=q(c);let a;var Q=q(d);{var m=P=>{var W=pt();$(W,"",{},{"pointer-events":"none"});var G=q(W),B=q(G);H(B,{type:"keyboard_mouse",input:"h",color:"#FFFFFF"});var v3=E(B,2);H(v3,{type:"ps4",input:"8",color:"#FFFFFF"}),c3(),D(G),D(W),J(3,W,()=>Z,()=>({duration:300})),z(P,W)};S(Q,P=>{N(h)&&P(m)})}var f=E(Q,2);{let P=h3(()=>({name:"Main Button",gamepad:-1,buttons:[k.RIGHT],keys:["e"]}));Y3(f,{onrelease:()=>{r.changeContext("my_ctx"),K(o,!1)},get inputMapping(){return N(P)},children:(W,G)=>{c3();var B=z3("switch to context for button2!");z(W,B)},$$slots:{default:!0}})}var A=E(f,2);{let P=h3(()=>({name:"Second Button",gamepad:-1,buttons:[k.LEFT],keys:["q"]}));Y3(A,{onrelease:()=>{r.changeContext("default"),K(o,!0)},context:["my_ctx"],get inputMapping(){return N(P)},get disabled(){return N(o)},children:(W,G)=>{c3();var B=z3("switch back to default context!");z(W,B)},$$slots:{default:!0}})}var b=E(A,4);{let P=h3(()=>({name:"side nav",gamepad:-1,buttons:[k.UP],keys:["t"]}));Y3(b,{onrelease:()=>{K(w,!0)},get inputMapping(){return N(P)},children:(W,G)=>{c3();var B=z3("side nav");z(W,B)},$$slots:{default:!0}})}var p=E(b,4);J3(p,{});var y=E(p,3);J3(y,{});var I=E(y,3);J3(I,{});var F=E(I,2);C2(F,{get items(){return n},get selectedIndex(){return N(s)},set selectedIndex(P){K(s,P,!0)}});var M=E(F),U=E(M);gt(U,{get position(){return N(i)},set position(P){K(i,P,!0)}});var V=E(U,2),X=E(V,2),n3=E(X);M3(e4(n3,{}),P=>r=P,()=>r),D(d),D(c),r3((P,W,G)=>{a=$(d,"",a,P),C3(M,` Selected: ${n[N(s)]??""} `),C3(V,` x: ${W??""}`),C3(X,` y: ${G??""} `)},[()=>({"margin-left":N(w)?"250px":0}),()=>N(i)[0].toFixed(3),()=>N(i)[1].toFixed(3)]),z(e,L),L3()}export{bt as component};
