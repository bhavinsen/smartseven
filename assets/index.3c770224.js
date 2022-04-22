var n0=Object.defineProperty,r0=Object.defineProperties;var s0=Object.getOwnPropertyDescriptors;var Yi=Object.getOwnPropertySymbols;var Uh=Object.prototype.hasOwnProperty,Vh=Object.prototype.propertyIsEnumerable;var $h=(t,e,n)=>e in t?n0(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,$=(t,e)=>{for(var n in e||(e={}))Uh.call(e,n)&&$h(t,n,e[n]);if(Yi)for(var n of Yi(e))Vh.call(e,n)&&$h(t,n,e[n]);return t},gt=(t,e)=>r0(t,s0(e));var Gt=(t,e)=>{var n={};for(var r in t)Uh.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&Yi)for(var r of Yi(t))e.indexOf(r)<0&&Vh.call(t,r)&&(n[r]=t[r]);return n};const i0=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}};i0();function Hu(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const o0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a0=Hu(o0);function Np(t){return!!t||t===""}function aa(t){if(ee(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=We(r)?c0(r):aa(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(We(t))return t;if(Ye(t))return t}}const l0=/;(?![^(]*\))/g,u0=/:(.+)/;function c0(t){const e={};return t.split(l0).forEach(n=>{if(n){const r=n.split(u0);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function _n(t){let e="";if(We(t))e=t;else if(ee(t))for(let n=0;n<t.length;n++){const r=_n(t[n]);r&&(e+=r+" ")}else if(Ye(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function h0(t){if(!t)return null;let{class:e,style:n}=t;return e&&!We(e)&&(t.class=_n(e)),n&&(t.style=aa(n)),t}const Ci=t=>We(t)?t:t==null?"":ee(t)||Ye(t)&&(t.toString===Bp||!ce(t.toString))?JSON.stringify(t,Lp,2):String(t),Lp=(t,e)=>e&&e.__v_isRef?Lp(t,e.value):Yr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Fp(e)?{[`Set(${e.size})`]:[...e.values()]}:Ye(e)&&!ee(e)&&!$p(e)?String(e):e,Ne={},Qr=[],Zt=()=>{},d0=()=>!1,f0=/^on[^a-z]/,la=t=>f0.test(t),Ku=t=>t.startsWith("onUpdate:"),ft=Object.assign,Wu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},p0=Object.prototype.hasOwnProperty,ge=(t,e)=>p0.call(t,e),ee=Array.isArray,Yr=t=>ua(t)==="[object Map]",Fp=t=>ua(t)==="[object Set]",ce=t=>typeof t=="function",We=t=>typeof t=="string",Gu=t=>typeof t=="symbol",Ye=t=>t!==null&&typeof t=="object",Mp=t=>Ye(t)&&ce(t.then)&&ce(t.catch),Bp=Object.prototype.toString,ua=t=>Bp.call(t),m0=t=>ua(t).slice(8,-1),$p=t=>ua(t)==="[object Object]",Xu=t=>We(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ho=Hu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ca=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},g0=/-(\w)/g,ln=ca(t=>t.replace(g0,(e,n)=>n?n.toUpperCase():"")),v0=/\B([A-Z])/g,Dr=ca(t=>t.replace(v0,"-$1").toLowerCase()),ha=ca(t=>t.charAt(0).toUpperCase()+t.slice(1)),al=ca(t=>t?`on${ha(t)}`:""),si=(t,e)=>!Object.is(t,e),fo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Io=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},To=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let jh;const y0=()=>jh||(jh=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Ot;class Up{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Ot&&(this.parent=Ot,this.index=(Ot.scopes||(Ot.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Ot;try{return Ot=this,e()}finally{Ot=n}}}on(){Ot=this}off(){Ot=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function Vp(t){return new Up(t)}function b0(t,e=Ot){e&&e.active&&e.effects.push(t)}function _0(){return Ot}function w0(t){Ot&&Ot.cleanups.push(t)}const Qu=t=>{const e=new Set(t);return e.w=0,e.n=0,e},jp=t=>(t.w&Kn)>0,zp=t=>(t.n&Kn)>0,E0=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Kn},I0=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];jp(s)&&!zp(s)?s.delete(t):e[n++]=s,s.w&=~Kn,s.n&=~Kn}e.length=n}},jl=new WeakMap;let $s=0,Kn=1;const zl=30;let Xt;const fr=Symbol(""),ql=Symbol("");class Yu{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,b0(this,r)}run(){if(!this.active)return this.fn();let e=Xt,n=zn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Xt,Xt=this,zn=!0,Kn=1<<++$s,$s<=zl?E0(this):zh(this),this.fn()}finally{$s<=zl&&I0(this),Kn=1<<--$s,Xt=this.parent,zn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Xt===this?this.deferStop=!0:this.active&&(zh(this),this.onStop&&this.onStop(),this.active=!1)}}function zh(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let zn=!0;const qp=[];function bs(){qp.push(zn),zn=!1}function _s(){const t=qp.pop();zn=t===void 0?!0:t}function Ft(t,e,n){if(zn&&Xt){let r=jl.get(t);r||jl.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Qu()),Hp(s)}}function Hp(t,e){let n=!1;$s<=zl?zp(t)||(t.n|=Kn,n=!jp(t)):n=!t.has(Xt),n&&(t.add(Xt),Xt.deps.push(t))}function In(t,e,n,r,s,i){const o=jl.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&ee(t))o.forEach((l,u)=>{(u==="length"||u>=r)&&a.push(l)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":ee(t)?Xu(n)&&a.push(o.get("length")):(a.push(o.get(fr)),Yr(t)&&a.push(o.get(ql)));break;case"delete":ee(t)||(a.push(o.get(fr)),Yr(t)&&a.push(o.get(ql)));break;case"set":Yr(t)&&a.push(o.get(fr));break}if(a.length===1)a[0]&&Hl(a[0]);else{const l=[];for(const u of a)u&&l.push(...u);Hl(Qu(l))}}function Hl(t,e){for(const n of ee(t)?t:[...t])(n!==Xt||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const T0=Hu("__proto__,__v_isRef,__isVue"),Kp=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(Gu)),A0=Zu(),S0=Zu(!1,!0),C0=Zu(!0),qh=k0();function k0(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=ie(this);for(let i=0,o=this.length;i<o;i++)Ft(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(ie)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){bs();const r=ie(this)[e].apply(this,n);return _s(),r}}),t}function Zu(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?q0:Yp:e?Qp:Xp).get(r))return r;const o=ee(r);if(!t&&o&&ge(qh,s))return Reflect.get(qh,s,i);const a=Reflect.get(r,s,i);return(Gu(s)?Kp.has(s):T0(s))||(t||Ft(r,"get",s),e)?a:Fe(a)?!o||!Xu(s)?a.value:a:Ye(a)?t?Zp(a):Rr(a):a}}const D0=Wp(),R0=Wp(!0);function Wp(t=!1){return function(n,r,s,i){let o=n[r];if(ii(o)&&Fe(o)&&!Fe(s))return!1;if(!t&&!ii(s)&&(Jp(s)||(s=ie(s),o=ie(o)),!ee(n)&&Fe(o)&&!Fe(s)))return o.value=s,!0;const a=ee(n)&&Xu(r)?Number(r)<n.length:ge(n,r),l=Reflect.set(n,r,s,i);return n===ie(i)&&(a?si(s,o)&&In(n,"set",r,s):In(n,"add",r,s)),l}}function x0(t,e){const n=ge(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&In(t,"delete",e,void 0),r}function O0(t,e){const n=Reflect.has(t,e);return(!Gu(e)||!Kp.has(e))&&Ft(t,"has",e),n}function P0(t){return Ft(t,"iterate",ee(t)?"length":fr),Reflect.ownKeys(t)}const Gp={get:A0,set:D0,deleteProperty:x0,has:O0,ownKeys:P0},N0={get:C0,set(t,e){return!0},deleteProperty(t,e){return!0}},L0=ft({},Gp,{get:S0,set:R0}),Ju=t=>t,da=t=>Reflect.getPrototypeOf(t);function Zi(t,e,n=!1,r=!1){t=t.__v_raw;const s=ie(t),i=ie(e);e!==i&&!n&&Ft(s,"get",e),!n&&Ft(s,"get",i);const{has:o}=da(s),a=r?Ju:n?nc:oi;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Ji(t,e=!1){const n=this.__v_raw,r=ie(n),s=ie(t);return t!==s&&!e&&Ft(r,"has",t),!e&&Ft(r,"has",s),t===s?n.has(t):n.has(t)||n.has(s)}function eo(t,e=!1){return t=t.__v_raw,!e&&Ft(ie(t),"iterate",fr),Reflect.get(t,"size",t)}function Hh(t){t=ie(t);const e=ie(this);return da(e).has.call(e,t)||(e.add(t),In(e,"add",t,t)),this}function Kh(t,e){e=ie(e);const n=ie(this),{has:r,get:s}=da(n);let i=r.call(n,t);i||(t=ie(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?si(e,o)&&In(n,"set",t,e):In(n,"add",t,e),this}function Wh(t){const e=ie(this),{has:n,get:r}=da(e);let s=n.call(e,t);s||(t=ie(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&In(e,"delete",t,void 0),i}function Gh(){const t=ie(this),e=t.size!==0,n=t.clear();return e&&In(t,"clear",void 0,void 0),n}function to(t,e){return function(r,s){const i=this,o=i.__v_raw,a=ie(o),l=e?Ju:t?nc:oi;return!t&&Ft(a,"iterate",fr),o.forEach((u,c)=>r.call(s,l(u),l(c),i))}}function no(t,e,n){return function(...r){const s=this.__v_raw,i=ie(s),o=Yr(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),c=n?Ju:e?nc:oi;return!e&&Ft(i,"iterate",l?ql:fr),{next(){const{value:h,done:d}=u.next();return d?{value:h,done:d}:{value:a?[c(h[0]),c(h[1])]:c(h),done:d}},[Symbol.iterator](){return this}}}}function Rn(t){return function(...e){return t==="delete"?!1:this}}function F0(){const t={get(i){return Zi(this,i)},get size(){return eo(this)},has:Ji,add:Hh,set:Kh,delete:Wh,clear:Gh,forEach:to(!1,!1)},e={get(i){return Zi(this,i,!1,!0)},get size(){return eo(this)},has:Ji,add:Hh,set:Kh,delete:Wh,clear:Gh,forEach:to(!1,!0)},n={get(i){return Zi(this,i,!0)},get size(){return eo(this,!0)},has(i){return Ji.call(this,i,!0)},add:Rn("add"),set:Rn("set"),delete:Rn("delete"),clear:Rn("clear"),forEach:to(!0,!1)},r={get(i){return Zi(this,i,!0,!0)},get size(){return eo(this,!0)},has(i){return Ji.call(this,i,!0)},add:Rn("add"),set:Rn("set"),delete:Rn("delete"),clear:Rn("clear"),forEach:to(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=no(i,!1,!1),n[i]=no(i,!0,!1),e[i]=no(i,!1,!0),r[i]=no(i,!0,!0)}),[t,n,e,r]}const[M0,B0,$0,U0]=F0();function ec(t,e){const n=e?t?U0:$0:t?B0:M0;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ge(n,s)&&s in r?n:r,s,i)}const V0={get:ec(!1,!1)},j0={get:ec(!1,!0)},z0={get:ec(!0,!1)},Xp=new WeakMap,Qp=new WeakMap,Yp=new WeakMap,q0=new WeakMap;function H0(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function K0(t){return t.__v_skip||!Object.isExtensible(t)?0:H0(m0(t))}function Rr(t){return ii(t)?t:tc(t,!1,Gp,V0,Xp)}function W0(t){return tc(t,!1,L0,j0,Qp)}function Zp(t){return tc(t,!0,N0,z0,Yp)}function tc(t,e,n,r,s){if(!Ye(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=K0(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function wn(t){return ii(t)?wn(t.__v_raw):!!(t&&t.__v_isReactive)}function ii(t){return!!(t&&t.__v_isReadonly)}function Jp(t){return!!(t&&t.__v_isShallow)}function em(t){return wn(t)||ii(t)}function ie(t){const e=t&&t.__v_raw;return e?ie(e):t}function rs(t){return Io(t,"__v_skip",!0),t}const oi=t=>Ye(t)?Rr(t):t,nc=t=>Ye(t)?Zp(t):t;function tm(t){zn&&Xt&&(t=ie(t),Hp(t.dep||(t.dep=Qu())))}function nm(t,e){t=ie(t),t.dep&&Hl(t.dep)}function Fe(t){return!!(t&&t.__v_isRef===!0)}function k(t){return sm(t,!1)}function rm(t){return sm(t,!0)}function sm(t,e){return Fe(t)?t:new G0(t,e)}class G0{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ie(e),this._value=n?e:oi(e)}get value(){return tm(this),this._value}set value(e){e=this.__v_isShallow?e:ie(e),si(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:oi(e),nm(this))}}function _e(t){return Fe(t)?t.value:t}const X0={get:(t,e,n)=>_e(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Fe(s)&&!Fe(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function im(t){return wn(t)?t:new Proxy(t,X0)}function Q0(t){const e=ee(t)?new Array(t.length):{};for(const n in t)e[n]=om(t,n);return e}class Y0{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function om(t,e,n){const r=t[e];return Fe(r)?r:new Y0(t,e,n)}class Z0{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Yu(e,()=>{this._dirty||(this._dirty=!0,nm(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=ie(this);return tm(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function J0(t,e,n=!1){let r,s;const i=ce(t);return i?(r=t,s=Zt):(r=t.get,s=t.set),new Z0(r,s,i||!s,n)}function qn(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){fa(i,e,n)}return s}function Vt(t,e,n,r){if(ce(t)){const i=qn(t,e,n,r);return i&&Mp(i)&&i.catch(o=>{fa(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Vt(t[i],e,n,r));return s}function fa(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const u=i.ec;if(u){for(let c=0;c<u.length;c++)if(u[c](t,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){qn(l,null,10,[t,o,a]);return}}e_(t,n,s,r)}function e_(t,e,n,r=!0){console.error(t)}let Ao=!1,Kl=!1;const Pt=[];let mn=0;const qs=[];let Us=null,qr=0;const Hs=[];let Fn=null,Hr=0;const am=Promise.resolve();let rc=null,Wl=null;function Ie(t){const e=rc||am;return t?e.then(this?t.bind(this):t):e}function t_(t){let e=mn+1,n=Pt.length;for(;e<n;){const r=e+n>>>1;ai(Pt[r])<t?e=r+1:n=r}return e}function lm(t){(!Pt.length||!Pt.includes(t,Ao&&t.allowRecurse?mn+1:mn))&&t!==Wl&&(t.id==null?Pt.push(t):Pt.splice(t_(t.id),0,t),um())}function um(){!Ao&&!Kl&&(Kl=!0,rc=am.then(dm))}function n_(t){const e=Pt.indexOf(t);e>mn&&Pt.splice(e,1)}function cm(t,e,n,r){ee(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),um()}function r_(t){cm(t,Us,qs,qr)}function s_(t){cm(t,Fn,Hs,Hr)}function sc(t,e=null){if(qs.length){for(Wl=e,Us=[...new Set(qs)],qs.length=0,qr=0;qr<Us.length;qr++)Us[qr]();Us=null,qr=0,Wl=null,sc(t,e)}}function hm(t){if(Hs.length){const e=[...new Set(Hs)];if(Hs.length=0,Fn){Fn.push(...e);return}for(Fn=e,Fn.sort((n,r)=>ai(n)-ai(r)),Hr=0;Hr<Fn.length;Hr++)Fn[Hr]();Fn=null,Hr=0}}const ai=t=>t.id==null?1/0:t.id;function dm(t){Kl=!1,Ao=!0,sc(t),Pt.sort((n,r)=>ai(n)-ai(r));const e=Zt;try{for(mn=0;mn<Pt.length;mn++){const n=Pt[mn];n&&n.active!==!1&&qn(n,null,14)}}finally{mn=0,Pt.length=0,hm(),Ao=!1,rc=null,(Pt.length||qs.length||Hs.length)&&dm(t)}}function i_(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ne;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const c=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[c]||Ne;d?s=n.map(f=>f.trim()):h&&(s=n.map(To))}let a,l=r[a=al(e)]||r[a=al(ln(e))];!l&&i&&(l=r[a=al(Dr(e))]),l&&Vt(l,t,6,s);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Vt(u,t,6,s)}}function fm(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!ce(t)){const l=u=>{const c=fm(u,e,!0);c&&(a=!0,ft(o,c))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(r.set(t,null),null):(ee(i)?i.forEach(l=>o[l]=null):ft(o,i),r.set(t,o),o)}function pa(t,e){return!t||!la(e)?!1:(e=e.slice(2).replace(/Once$/,""),ge(t,e[0].toLowerCase()+e.slice(1))||ge(t,Dr(e))||ge(t,e))}let yt=null,ma=null;function So(t){const e=yt;return yt=t,ma=t&&t.type.__scopeId||null,e}function o_(t){ma=t}function a_(){ma=null}function ot(t,e=yt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&od(-1);const i=So(e),o=t(...s);return So(i),r._d&&od(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function ll(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:l,emit:u,render:c,renderCache:h,data:d,setupState:f,ctx:p,inheritAttrs:g}=t;let y,b;const w=So(t);try{if(n.shapeFlag&4){const M=s||r;y=sn(c.call(M,M,h,i,f,d,p)),b=l}else{const M=e;y=sn(M.length>1?M(i,{attrs:l,slots:a,emit:u}):M(i,null)),b=e.props?l:l_(l)}}catch(M){Ws.length=0,fa(M,t,1),y=ue(jt)}let x=y;if(b&&g!==!1){const M=Object.keys(b),{shapeFlag:j}=x;M.length&&j&7&&(o&&M.some(Ku)&&(b=u_(b,o)),x=Wn(x,b))}return n.dirs&&(x.dirs=x.dirs?x.dirs.concat(n.dirs):n.dirs),n.transition&&(x.transition=n.transition),y=x,So(w),y}const l_=t=>{let e;for(const n in t)(n==="class"||n==="style"||la(n))&&((e||(e={}))[n]=t[n]);return e},u_=(t,e)=>{const n={};for(const r in t)(!Ku(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function c_(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Xh(r,o,u):!!o;if(l&8){const c=e.dynamicProps;for(let h=0;h<c.length;h++){const d=c[h];if(o[d]!==r[d]&&!pa(u,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Xh(r,o,u):!0:!!o;return!1}function Xh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!pa(n,i))return!0}return!1}function h_({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const d_=t=>t.__isSuspense;function f_(t,e){e&&e.pendingBranch?ee(t)?e.effects.push(...t):e.effects.push(t):s_(t)}function Ue(t,e){if(tt){let n=tt.provides;const r=tt.parent&&tt.parent.provides;r===n&&(n=tt.provides=Object.create(r)),n[t]=e}}function be(t,e,n=!1){const r=tt||yt;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ce(e)?e.call(r.proxy):e}}function Ke(t,e){return ic(t,null,e)}const Qh={};function At(t,e,n){return ic(t,e,n)}function ic(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Ne){const a=tt;let l,u=!1,c=!1;if(Fe(t)?(l=()=>t.value,u=Jp(t)):wn(t)?(l=()=>t,r=!0):ee(t)?(c=!0,u=t.some(wn),l=()=>t.map(b=>{if(Fe(b))return b.value;if(wn(b))return lr(b);if(ce(b))return qn(b,a,2)})):ce(t)?e?l=()=>qn(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),Vt(t,a,3,[d])}:l=Zt,e&&r){const b=l;l=()=>lr(b())}let h,d=b=>{h=y.onStop=()=>{qn(b,a,4)}};if(li)return d=Zt,e?n&&Vt(e,a,3,[l(),c?[]:void 0,d]):l(),Zt;let f=c?[]:Qh;const p=()=>{if(!!y.active)if(e){const b=y.run();(r||u||(c?b.some((w,x)=>si(w,f[x])):si(b,f)))&&(h&&h(),Vt(e,a,3,[b,f===Qh?void 0:f,d]),f=b)}else y.run()};p.allowRecurse=!!e;let g;s==="sync"?g=p:s==="post"?g=()=>St(p,a&&a.suspense):g=()=>{!a||a.isMounted?r_(p):p()};const y=new Yu(l,g);return e?n?p():f=y.run():s==="post"?St(y.run.bind(y),a&&a.suspense):y.run(),()=>{y.stop(),a&&a.scope&&Wu(a.scope.effects,y)}}function p_(t,e,n){const r=this.proxy,s=We(t)?t.includes(".")?pm(r,t):()=>r[t]:t.bind(r,r);let i;ce(e)?i=e:(i=e.handler,n=e);const o=tt;ss(this);const a=ic(s,i.bind(r),n);return o?ss(o):mr(),a}function pm(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function lr(t,e){if(!Ye(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Fe(t))lr(t.value,e);else if(ee(t))for(let n=0;n<t.length;n++)lr(t[n],e);else if(Fp(t)||Yr(t))t.forEach(n=>{lr(n,e)});else if($p(t))for(const n in t)lr(t[n],e);return t}function m_(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return He(()=>{t.isMounted=!0}),_m(()=>{t.isUnmounting=!0}),t}const Ut=[Function,Array],g_={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ut,onEnter:Ut,onAfterEnter:Ut,onEnterCancelled:Ut,onBeforeLeave:Ut,onLeave:Ut,onAfterLeave:Ut,onLeaveCancelled:Ut,onBeforeAppear:Ut,onAppear:Ut,onAfterAppear:Ut,onAppearCancelled:Ut},setup(t,{slots:e}){const n=ws(),r=m_();let s;return()=>{const i=e.default&&vm(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const g of i)if(g.type!==jt){o=g;break}}const a=ie(t),{mode:l}=a;if(r.isLeaving)return ul(o);const u=Yh(o);if(!u)return ul(o);const c=Gl(u,a,r,n);Xl(u,c);const h=n.subTree,d=h&&Yh(h);let f=!1;const{getTransitionKey:p}=u.type;if(p){const g=p();s===void 0?s=g:g!==s&&(s=g,f=!0)}if(d&&d.type!==jt&&(!or(u,d)||f)){const g=Gl(d,a,r,n);if(Xl(d,g),l==="out-in")return r.isLeaving=!0,g.afterLeave=()=>{r.isLeaving=!1,n.update()},ul(o);l==="in-out"&&u.type!==jt&&(g.delayLeave=(y,b,w)=>{const x=gm(r,d);x[String(d.key)]=d,y._leaveCb=()=>{b(),y._leaveCb=void 0,delete c.delayedLeave},c.delayedLeave=w})}return o}}},mm=g_;function gm(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Gl(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:u,onEnterCancelled:c,onBeforeLeave:h,onLeave:d,onAfterLeave:f,onLeaveCancelled:p,onBeforeAppear:g,onAppear:y,onAfterAppear:b,onAppearCancelled:w}=e,x=String(t.key),M=gm(n,t),j=(S,ae)=>{S&&Vt(S,r,9,ae)},P={mode:i,persisted:o,beforeEnter(S){let ae=a;if(!n.isMounted)if(s)ae=g||a;else return;S._leaveCb&&S._leaveCb(!0);const Z=M[x];Z&&or(t,Z)&&Z.el._leaveCb&&Z.el._leaveCb(),j(ae,[S])},enter(S){let ae=l,Z=u,pe=c;if(!n.isMounted)if(s)ae=y||l,Z=b||u,pe=w||c;else return;let De=!1;const H=S._enterCb=Te=>{De||(De=!0,Te?j(pe,[S]):j(Z,[S]),P.delayedLeave&&P.delayedLeave(),S._enterCb=void 0)};ae?(ae(S,H),ae.length<=1&&H()):H()},leave(S,ae){const Z=String(t.key);if(S._enterCb&&S._enterCb(!0),n.isUnmounting)return ae();j(h,[S]);let pe=!1;const De=S._leaveCb=H=>{pe||(pe=!0,ae(),H?j(p,[S]):j(f,[S]),S._leaveCb=void 0,M[Z]===t&&delete M[Z])};M[Z]=t,d?(d(S,De),d.length<=1&&De()):De()},clone(S){return Gl(S,e,n,r)}};return P}function ul(t){if(ga(t))return t=Wn(t),t.children=null,t}function Yh(t){return ga(t)?t.children?t.children[0]:void 0:t}function Xl(t,e){t.shapeFlag&6&&t.component?Xl(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function vm(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===lt?(o.patchFlag&128&&s++,r=r.concat(vm(o.children,e,a))):(e||o.type!==jt)&&r.push(a!=null?Wn(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function G(t){return ce(t)?{setup:t,name:t.name}:t}const Co=t=>!!t.type.__asyncLoader,ga=t=>t.type.__isKeepAlive;function v_(t,e){ym(t,"a",e)}function y_(t,e){ym(t,"da",e)}function ym(t,e,n=tt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(va(e,r,n),n){let s=n.parent;for(;s&&s.parent;)ga(s.parent.vnode)&&b_(r,e,n,s),s=s.parent}}function b_(t,e,n,r){const s=va(e,t,r,!0);it(()=>{Wu(r[e],s)},n)}function va(t,e,n=tt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;bs(),ss(n);const a=Vt(e,n,t,o);return mr(),_s(),a});return r?s.unshift(i):s.push(i),i}}const Sn=t=>(e,n=tt)=>(!li||t==="sp")&&va(t,e,n),bm=Sn("bm"),He=Sn("m"),__=Sn("bu"),oc=Sn("u"),_m=Sn("bum"),it=Sn("um"),w_=Sn("sp"),E_=Sn("rtg"),I_=Sn("rtc");function T_(t,e=tt){va("ec",t,e)}let Ql=!0;function A_(t){const e=Em(t),n=t.proxy,r=t.ctx;Ql=!1,e.beforeCreate&&Zh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:u,created:c,beforeMount:h,mounted:d,beforeUpdate:f,updated:p,activated:g,deactivated:y,beforeDestroy:b,beforeUnmount:w,destroyed:x,unmounted:M,render:j,renderTracked:P,renderTriggered:S,errorCaptured:ae,serverPrefetch:Z,expose:pe,inheritAttrs:De,components:H,directives:Te,filters:Ce}=e;if(u&&S_(u,r,null,t.appContext.config.unwrapInjectedRef),o)for(const Ae in o){const Re=o[Ae];ce(Re)&&(r[Ae]=Re.bind(n))}if(s){const Ae=s.call(n,n);Ye(Ae)&&(t.data=Rr(Ae))}if(Ql=!0,i)for(const Ae in i){const Re=i[Ae],Rt=ce(Re)?Re.bind(n,n):ce(Re.get)?Re.get.bind(n,n):Zt,Mr=!ce(Re)&&ce(Re.set)?Re.set.bind(n):Zt,fn=R({get:Rt,set:Mr});Object.defineProperty(r,Ae,{enumerable:!0,configurable:!0,get:()=>fn.value,set:tn=>fn.value=tn})}if(a)for(const Ae in a)wm(a[Ae],r,n,Ae);if(l){const Ae=ce(l)?l.call(n):l;Reflect.ownKeys(Ae).forEach(Re=>{Ue(Re,Ae[Re])})}c&&Zh(c,t,"c");function Ve(Ae,Re){ee(Re)?Re.forEach(Rt=>Ae(Rt.bind(n))):Re&&Ae(Re.bind(n))}if(Ve(bm,h),Ve(He,d),Ve(__,f),Ve(oc,p),Ve(v_,g),Ve(y_,y),Ve(T_,ae),Ve(I_,P),Ve(E_,S),Ve(_m,w),Ve(it,M),Ve(w_,Z),ee(pe))if(pe.length){const Ae=t.exposed||(t.exposed={});pe.forEach(Re=>{Object.defineProperty(Ae,Re,{get:()=>n[Re],set:Rt=>n[Re]=Rt})})}else t.exposed||(t.exposed={});j&&t.render===Zt&&(t.render=j),De!=null&&(t.inheritAttrs=De),H&&(t.components=H),Te&&(t.directives=Te)}function S_(t,e,n=Zt,r=!1){ee(t)&&(t=Yl(t));for(const s in t){const i=t[s];let o;Ye(i)?"default"in i?o=be(i.from||s,i.default,!0):o=be(i.from||s):o=be(i),Fe(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function Zh(t,e,n){Vt(ee(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function wm(t,e,n,r){const s=r.includes(".")?pm(n,r):()=>n[r];if(We(t)){const i=e[t];ce(i)&&At(s,i)}else if(ce(t))At(s,t.bind(n));else if(Ye(t))if(ee(t))t.forEach(i=>wm(i,e,n,r));else{const i=ce(t.handler)?t.handler.bind(n):e[t.handler];ce(i)&&At(s,i,t)}}function Em(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>ko(l,u,o,!0)),ko(l,e,o)),i.set(e,l),l}function ko(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&ko(t,i,n,!0),s&&s.forEach(o=>ko(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=C_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const C_={data:Jh,props:sr,emits:sr,methods:sr,computed:sr,beforeCreate:wt,created:wt,beforeMount:wt,mounted:wt,beforeUpdate:wt,updated:wt,beforeDestroy:wt,beforeUnmount:wt,destroyed:wt,unmounted:wt,activated:wt,deactivated:wt,errorCaptured:wt,serverPrefetch:wt,components:sr,directives:sr,watch:D_,provide:Jh,inject:k_};function Jh(t,e){return e?t?function(){return ft(ce(t)?t.call(this,this):t,ce(e)?e.call(this,this):e)}:e:t}function k_(t,e){return sr(Yl(t),Yl(e))}function Yl(t){if(ee(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function wt(t,e){return t?[...new Set([].concat(t,e))]:e}function sr(t,e){return t?ft(ft(Object.create(null),t),e):e}function D_(t,e){if(!t)return e;if(!e)return t;const n=ft(Object.create(null),t);for(const r in e)n[r]=wt(t[r],e[r]);return n}function R_(t,e,n,r=!1){const s={},i={};Io(i,ya,1),t.propsDefaults=Object.create(null),Im(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:W0(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function x_(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=ie(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const c=t.vnode.dynamicProps;for(let h=0;h<c.length;h++){let d=c[h];if(pa(t.emitsOptions,d))continue;const f=e[d];if(l)if(ge(i,d))f!==i[d]&&(i[d]=f,u=!0);else{const p=ln(d);s[p]=Zl(l,a,p,f,t,!1)}else f!==i[d]&&(i[d]=f,u=!0)}}}else{Im(t,e,s,i)&&(u=!0);let c;for(const h in a)(!e||!ge(e,h)&&((c=Dr(h))===h||!ge(e,c)))&&(l?n&&(n[h]!==void 0||n[c]!==void 0)&&(s[h]=Zl(l,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!ge(e,h)&&!0)&&(delete i[h],u=!0)}u&&In(t,"set","$attrs")}function Im(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(ho(l))continue;const u=e[l];let c;s&&ge(s,c=ln(l))?!i||!i.includes(c)?n[c]=u:(a||(a={}))[c]=u:pa(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=ie(n),u=a||Ne;for(let c=0;c<i.length;c++){const h=i[c];n[h]=Zl(s,l,h,u[h],t,!ge(u,h))}}return o}function Zl(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=ge(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&ce(l)){const{propsDefaults:u}=s;n in u?r=u[n]:(ss(s),r=u[n]=l.call(null,e),mr())}else r=l}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Dr(n))&&(r=!0))}return r}function Tm(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!ce(t)){const c=h=>{l=!0;const[d,f]=Tm(h,e,!0);ft(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}if(!i&&!l)return r.set(t,Qr),Qr;if(ee(i))for(let c=0;c<i.length;c++){const h=ln(i[c]);ed(h)&&(o[h]=Ne)}else if(i)for(const c in i){const h=ln(c);if(ed(h)){const d=i[c],f=o[h]=ee(d)||ce(d)?{type:d}:d;if(f){const p=rd(Boolean,f.type),g=rd(String,f.type);f[0]=p>-1,f[1]=g<0||p<g,(p>-1||ge(f,"default"))&&a.push(h)}}}const u=[o,a];return r.set(t,u),u}function ed(t){return t[0]!=="$"}function td(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function nd(t,e){return td(t)===td(e)}function rd(t,e){return ee(e)?e.findIndex(n=>nd(n,t)):ce(e)&&nd(e,t)?0:-1}const Am=t=>t[0]==="_"||t==="$stable",ac=t=>ee(t)?t.map(sn):[sn(t)],O_=(t,e,n)=>{const r=ot((...s)=>ac(e(...s)),n);return r._c=!1,r},Sm=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Am(s))continue;const i=t[s];if(ce(i))e[s]=O_(s,i,r);else if(i!=null){const o=ac(i);e[s]=()=>o}}},Cm=(t,e)=>{const n=ac(e);t.slots.default=()=>n},P_=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ie(e),Io(e,"_",n)):Sm(e,t.slots={})}else t.slots={},e&&Cm(t,e);Io(t.slots,ya,1)},N_=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ne;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(ft(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Sm(e,s)),o=e}else e&&(Cm(t,e),o={default:1});if(i)for(const a in s)!Am(a)&&!(a in o)&&delete s[a]};function ki(t,e){const n=yt;if(n===null)return t;const r=wa(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,l,u=Ne]=e[i];ce(o)&&(o={mounted:o,updated:o}),o.deep&&lr(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:l,modifiers:u})}return t}function er(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(bs(),Vt(l,n,8,[t.el,a,t,e]),_s())}}function km(){return{app:null,config:{isNativeTag:d0,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let L_=0;function F_(t,e){return function(r,s=null){ce(r)||(r=Object.assign({},r)),s!=null&&!Ye(s)&&(s=null);const i=km(),o=new Set;let a=!1;const l=i.app={_uid:L_++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:aw,get config(){return i.config},set config(u){},use(u,...c){return o.has(u)||(u&&ce(u.install)?(o.add(u),u.install(l,...c)):ce(u)&&(o.add(u),u(l,...c))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,c){return c?(i.components[u]=c,l):i.components[u]},directive(u,c){return c?(i.directives[u]=c,l):i.directives[u]},mount(u,c,h){if(!a){const d=ue(r,s);return d.appContext=i,c&&e?e(d,u):t(d,u,h),a=!0,l._container=u,u.__vue_app__=l,wa(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(u,c){return i.provides[u]=c,l}};return l}}function Jl(t,e,n,r,s=!1){if(ee(t)){t.forEach((d,f)=>Jl(d,e&&(ee(e)?e[f]:e),n,r,s));return}if(Co(r)&&!s)return;const i=r.shapeFlag&4?wa(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:l}=t,u=e&&e.r,c=a.refs===Ne?a.refs={}:a.refs,h=a.setupState;if(u!=null&&u!==l&&(We(u)?(c[u]=null,ge(h,u)&&(h[u]=null)):Fe(u)&&(u.value=null)),ce(l))qn(l,a,12,[o,c]);else{const d=We(l),f=Fe(l);if(d||f){const p=()=>{if(t.f){const g=d?c[l]:l.value;s?ee(g)&&Wu(g,i):ee(g)?g.includes(i)||g.push(i):d?(c[l]=[i],ge(h,l)&&(h[l]=c[l])):(l.value=[i],t.k&&(c[t.k]=l.value))}else d?(c[l]=o,ge(h,l)&&(h[l]=o)):Fe(l)&&(l.value=o,t.k&&(c[t.k]=o))};o?(p.id=-1,St(p,n)):p()}}}const St=f_;function M_(t){return B_(t)}function B_(t,e){const n=y0();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:u,setElementText:c,parentNode:h,nextSibling:d,setScopeId:f=Zt,cloneNode:p,insertStaticContent:g}=t,y=(m,v,_,T=null,I=null,N=null,U=!1,O=null,F=!!v.dynamicChildren)=>{if(m===v)return;m&&!or(m,v)&&(T=W(m),$t(m,I,N,!0),m=null),v.patchFlag===-2&&(F=!1,v.dynamicChildren=null);const{type:C,ref:X,shapeFlag:z}=v;switch(C){case dc:b(m,v,_,T);break;case jt:w(m,v,_,T);break;case cl:m==null&&x(v,_,T,U);break;case lt:Te(m,v,_,T,I,N,U,O,F);break;default:z&1?P(m,v,_,T,I,N,U,O,F):z&6?Ce(m,v,_,T,I,N,U,O,F):(z&64||z&128)&&C.process(m,v,_,T,I,N,U,O,F,Le)}X!=null&&I&&Jl(X,m&&m.ref,N,v||m,!v)},b=(m,v,_,T)=>{if(m==null)r(v.el=a(v.children),_,T);else{const I=v.el=m.el;v.children!==m.children&&u(I,v.children)}},w=(m,v,_,T)=>{m==null?r(v.el=l(v.children||""),_,T):v.el=m.el},x=(m,v,_,T)=>{[m.el,m.anchor]=g(m.children,v,_,T,m.el,m.anchor)},M=({el:m,anchor:v},_,T)=>{let I;for(;m&&m!==v;)I=d(m),r(m,_,T),m=I;r(v,_,T)},j=({el:m,anchor:v})=>{let _;for(;m&&m!==v;)_=d(m),s(m),m=_;s(v)},P=(m,v,_,T,I,N,U,O,F)=>{U=U||v.type==="svg",m==null?S(v,_,T,I,N,U,O,F):pe(m,v,I,N,U,O,F)},S=(m,v,_,T,I,N,U,O)=>{let F,C;const{type:X,props:z,shapeFlag:Q,transition:ne,patchFlag:ve,dirs:je}=m;if(m.el&&p!==void 0&&ve===-1)F=m.el=p(m.el);else{if(F=m.el=o(m.type,N,z&&z.is,z),Q&8?c(F,m.children):Q&16&&Z(m.children,F,null,T,I,N&&X!=="foreignObject",U,O),je&&er(m,null,T,"created"),z){for(const Be in z)Be!=="value"&&!ho(Be)&&i(F,Be,null,z[Be],N,m.children,T,I,B);"value"in z&&i(F,"value",null,z.value),(C=z.onVnodeBeforeMount)&&rn(C,T,m)}ae(F,m,m.scopeId,U,T)}je&&er(m,null,T,"beforeMount");const Oe=(!I||I&&!I.pendingBranch)&&ne&&!ne.persisted;Oe&&ne.beforeEnter(F),r(F,v,_),((C=z&&z.onVnodeMounted)||Oe||je)&&St(()=>{C&&rn(C,T,m),Oe&&ne.enter(F),je&&er(m,null,T,"mounted")},I)},ae=(m,v,_,T,I)=>{if(_&&f(m,_),T)for(let N=0;N<T.length;N++)f(m,T[N]);if(I){let N=I.subTree;if(v===N){const U=I.vnode;ae(m,U,U.scopeId,U.slotScopeIds,I.parent)}}},Z=(m,v,_,T,I,N,U,O,F=0)=>{for(let C=F;C<m.length;C++){const X=m[C]=O?Bn(m[C]):sn(m[C]);y(null,X,v,_,T,I,N,U,O)}},pe=(m,v,_,T,I,N,U)=>{const O=v.el=m.el;let{patchFlag:F,dynamicChildren:C,dirs:X}=v;F|=m.patchFlag&16;const z=m.props||Ne,Q=v.props||Ne;let ne;_&&tr(_,!1),(ne=Q.onVnodeBeforeUpdate)&&rn(ne,_,v,m),X&&er(v,m,_,"beforeUpdate"),_&&tr(_,!0);const ve=I&&v.type!=="foreignObject";if(C?De(m.dynamicChildren,C,O,_,T,ve,N):U||Rt(m,v,O,null,_,T,ve,N,!1),F>0){if(F&16)H(O,v,z,Q,_,T,I);else if(F&2&&z.class!==Q.class&&i(O,"class",null,Q.class,I),F&4&&i(O,"style",z.style,Q.style,I),F&8){const je=v.dynamicProps;for(let Oe=0;Oe<je.length;Oe++){const Be=je[Oe],Wt=z[Be],Br=Q[Be];(Br!==Wt||Be==="value")&&i(O,Be,Wt,Br,I,m.children,_,T,B)}}F&1&&m.children!==v.children&&c(O,v.children)}else!U&&C==null&&H(O,v,z,Q,_,T,I);((ne=Q.onVnodeUpdated)||X)&&St(()=>{ne&&rn(ne,_,v,m),X&&er(v,m,_,"updated")},T)},De=(m,v,_,T,I,N,U)=>{for(let O=0;O<v.length;O++){const F=m[O],C=v[O],X=F.el&&(F.type===lt||!or(F,C)||F.shapeFlag&70)?h(F.el):_;y(F,C,X,null,T,I,N,U,!0)}},H=(m,v,_,T,I,N,U)=>{if(_!==T){for(const O in T){if(ho(O))continue;const F=T[O],C=_[O];F!==C&&O!=="value"&&i(m,O,C,F,U,v.children,I,N,B)}if(_!==Ne)for(const O in _)!ho(O)&&!(O in T)&&i(m,O,_[O],null,U,v.children,I,N,B);"value"in T&&i(m,"value",_.value,T.value)}},Te=(m,v,_,T,I,N,U,O,F)=>{const C=v.el=m?m.el:a(""),X=v.anchor=m?m.anchor:a("");let{patchFlag:z,dynamicChildren:Q,slotScopeIds:ne}=v;ne&&(O=O?O.concat(ne):ne),m==null?(r(C,_,T),r(X,_,T),Z(v.children,_,X,I,N,U,O,F)):z>0&&z&64&&Q&&m.dynamicChildren?(De(m.dynamicChildren,Q,_,I,N,U,O),(v.key!=null||I&&v===I.subTree)&&lc(m,v,!0)):Rt(m,v,_,X,I,N,U,O,F)},Ce=(m,v,_,T,I,N,U,O,F)=>{v.slotScopeIds=O,m==null?v.shapeFlag&512?I.ctx.activate(v,_,T,U,F):en(v,_,T,I,N,U,F):Ve(m,v,F)},en=(m,v,_,T,I,N,U)=>{const O=m.component=ew(m,T,I);if(ga(m)&&(O.ctx.renderer=Le),tw(O),O.asyncDep){if(I&&I.registerDep(O,Ae),!m.el){const F=O.subTree=ue(jt);w(null,F,v,_)}return}Ae(O,m,v,_,I,N,U)},Ve=(m,v,_)=>{const T=v.component=m.component;if(c_(m,v,_))if(T.asyncDep&&!T.asyncResolved){Re(T,v,_);return}else T.next=v,n_(T.update),T.update();else v.component=m.component,v.el=m.el,T.vnode=v},Ae=(m,v,_,T,I,N,U)=>{const O=()=>{if(m.isMounted){let{next:X,bu:z,u:Q,parent:ne,vnode:ve}=m,je=X,Oe;tr(m,!1),X?(X.el=ve.el,Re(m,X,U)):X=ve,z&&fo(z),(Oe=X.props&&X.props.onVnodeBeforeUpdate)&&rn(Oe,ne,X,ve),tr(m,!0);const Be=ll(m),Wt=m.subTree;m.subTree=Be,y(Wt,Be,h(Wt.el),W(Wt),m,I,N),X.el=Be.el,je===null&&h_(m,Be.el),Q&&St(Q,I),(Oe=X.props&&X.props.onVnodeUpdated)&&St(()=>rn(Oe,ne,X,ve),I)}else{let X;const{el:z,props:Q}=v,{bm:ne,m:ve,parent:je}=m,Oe=Co(v);if(tr(m,!1),ne&&fo(ne),!Oe&&(X=Q&&Q.onVnodeBeforeMount)&&rn(X,je,v),tr(m,!0),z&&he){const Be=()=>{m.subTree=ll(m),he(z,m.subTree,m,I,null)};Oe?v.type.__asyncLoader().then(()=>!m.isUnmounted&&Be()):Be()}else{const Be=m.subTree=ll(m);y(null,Be,_,T,m,I,N),v.el=Be.el}if(ve&&St(ve,I),!Oe&&(X=Q&&Q.onVnodeMounted)){const Be=v;St(()=>rn(X,je,Be),I)}v.shapeFlag&256&&m.a&&St(m.a,I),m.isMounted=!0,v=_=T=null}},F=m.effect=new Yu(O,()=>lm(m.update),m.scope),C=m.update=F.run.bind(F);C.id=m.uid,tr(m,!0),C()},Re=(m,v,_)=>{v.component=m;const T=m.vnode.props;m.vnode=v,m.next=null,x_(m,v.props,T,_),N_(m,v.children,_),bs(),sc(void 0,m.update),_s()},Rt=(m,v,_,T,I,N,U,O,F=!1)=>{const C=m&&m.children,X=m?m.shapeFlag:0,z=v.children,{patchFlag:Q,shapeFlag:ne}=v;if(Q>0){if(Q&128){fn(C,z,_,T,I,N,U,O,F);return}else if(Q&256){Mr(C,z,_,T,I,N,U,O,F);return}}ne&8?(X&16&&B(C,I,N),z!==C&&c(_,z)):X&16?ne&16?fn(C,z,_,T,I,N,U,O,F):B(C,I,N,!0):(X&8&&c(_,""),ne&16&&Z(z,_,T,I,N,U,O,F))},Mr=(m,v,_,T,I,N,U,O,F)=>{m=m||Qr,v=v||Qr;const C=m.length,X=v.length,z=Math.min(C,X);let Q;for(Q=0;Q<z;Q++){const ne=v[Q]=F?Bn(v[Q]):sn(v[Q]);y(m[Q],ne,_,null,I,N,U,O,F)}C>X?B(m,I,N,!0,!1,z):Z(v,_,T,I,N,U,O,F,z)},fn=(m,v,_,T,I,N,U,O,F)=>{let C=0;const X=v.length;let z=m.length-1,Q=X-1;for(;C<=z&&C<=Q;){const ne=m[C],ve=v[C]=F?Bn(v[C]):sn(v[C]);if(or(ne,ve))y(ne,ve,_,null,I,N,U,O,F);else break;C++}for(;C<=z&&C<=Q;){const ne=m[z],ve=v[Q]=F?Bn(v[Q]):sn(v[Q]);if(or(ne,ve))y(ne,ve,_,null,I,N,U,O,F);else break;z--,Q--}if(C>z){if(C<=Q){const ne=Q+1,ve=ne<X?v[ne].el:T;for(;C<=Q;)y(null,v[C]=F?Bn(v[C]):sn(v[C]),_,ve,I,N,U,O,F),C++}}else if(C>Q)for(;C<=z;)$t(m[C],I,N,!0),C++;else{const ne=C,ve=C,je=new Map;for(C=ve;C<=Q;C++){const xt=v[C]=F?Bn(v[C]):sn(v[C]);xt.key!=null&&je.set(xt.key,C)}let Oe,Be=0;const Wt=Q-ve+1;let Br=!1,Fh=0;const Ps=new Array(Wt);for(C=0;C<Wt;C++)Ps[C]=0;for(C=ne;C<=z;C++){const xt=m[C];if(Be>=Wt){$t(xt,I,N,!0);continue}let nn;if(xt.key!=null)nn=je.get(xt.key);else for(Oe=ve;Oe<=Q;Oe++)if(Ps[Oe-ve]===0&&or(xt,v[Oe])){nn=Oe;break}nn===void 0?$t(xt,I,N,!0):(Ps[nn-ve]=C+1,nn>=Fh?Fh=nn:Br=!0,y(xt,v[nn],_,null,I,N,U,O,F),Be++)}const Mh=Br?$_(Ps):Qr;for(Oe=Mh.length-1,C=Wt-1;C>=0;C--){const xt=ve+C,nn=v[xt],Bh=xt+1<X?v[xt+1].el:T;Ps[C]===0?y(null,nn,_,Bh,I,N,U,O,F):Br&&(Oe<0||C!==Mh[Oe]?tn(nn,_,Bh,2):Oe--)}}},tn=(m,v,_,T,I=null)=>{const{el:N,type:U,transition:O,children:F,shapeFlag:C}=m;if(C&6){tn(m.component.subTree,v,_,T);return}if(C&128){m.suspense.move(v,_,T);return}if(C&64){U.move(m,v,_,Le);return}if(U===lt){r(N,v,_);for(let z=0;z<F.length;z++)tn(F[z],v,_,T);r(m.anchor,v,_);return}if(U===cl){M(m,v,_);return}if(T!==2&&C&1&&O)if(T===0)O.beforeEnter(N),r(N,v,_),St(()=>O.enter(N),I);else{const{leave:z,delayLeave:Q,afterLeave:ne}=O,ve=()=>r(N,v,_),je=()=>{z(N,()=>{ve(),ne&&ne()})};Q?Q(N,ve,je):je()}else r(N,v,_)},$t=(m,v,_,T=!1,I=!1)=>{const{type:N,props:U,ref:O,children:F,dynamicChildren:C,shapeFlag:X,patchFlag:z,dirs:Q}=m;if(O!=null&&Jl(O,null,_,m,!0),X&256){v.ctx.deactivate(m);return}const ne=X&1&&Q,ve=!Co(m);let je;if(ve&&(je=U&&U.onVnodeBeforeUnmount)&&rn(je,v,m),X&6)q(m.component,_,T);else{if(X&128){m.suspense.unmount(_,T);return}ne&&er(m,null,v,"beforeUnmount"),X&64?m.type.remove(m,v,_,I,Le,T):C&&(N!==lt||z>0&&z&64)?B(C,v,_,!1,!0):(N===lt&&z&384||!I&&X&16)&&B(F,v,_),T&&ol(m)}(ve&&(je=U&&U.onVnodeUnmounted)||ne)&&St(()=>{je&&rn(je,v,m),ne&&er(m,null,v,"unmounted")},_)},ol=m=>{const{type:v,el:_,anchor:T,transition:I}=m;if(v===lt){E(_,T);return}if(v===cl){j(m);return}const N=()=>{s(_),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(m.shapeFlag&1&&I&&!I.persisted){const{leave:U,delayLeave:O}=I,F=()=>U(_,N);O?O(m.el,N,F):F()}else N()},E=(m,v)=>{let _;for(;m!==v;)_=d(m),s(m),m=_;s(v)},q=(m,v,_)=>{const{bum:T,scope:I,update:N,subTree:U,um:O}=m;T&&fo(T),I.stop(),N&&(N.active=!1,$t(U,m,v,_)),O&&St(O,v),St(()=>{m.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},B=(m,v,_,T=!1,I=!1,N=0)=>{for(let U=N;U<m.length;U++)$t(m[U],v,_,T,I)},W=m=>m.shapeFlag&6?W(m.component.subTree):m.shapeFlag&128?m.suspense.next():d(m.anchor||m.el),xe=(m,v,_)=>{m==null?v._vnode&&$t(v._vnode,null,null,!0):y(v._vnode||null,m,v,null,null,null,_),hm(),v._vnode=m},Le={p:y,um:$t,m:tn,r:ol,mt:en,mc:Z,pc:Rt,pbc:De,n:W,o:t};let fe,he;return e&&([fe,he]=e(Le)),{render:xe,hydrate:fe,createApp:F_(xe,fe)}}function tr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function lc(t,e,n=!1){const r=t.children,s=e.children;if(ee(r)&&ee(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Bn(s[i]),a.el=o.el),n||lc(o,a))}}function $_(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const U_=t=>t.__isTeleport,Ks=t=>t&&(t.disabled||t.disabled===""),sd=t=>typeof SVGElement!="undefined"&&t instanceof SVGElement,eu=(t,e)=>{const n=t&&t.to;return We(n)?e?e(n):null:n},V_={__isTeleport:!0,process(t,e,n,r,s,i,o,a,l,u){const{mc:c,pc:h,pbc:d,o:{insert:f,querySelector:p,createText:g,createComment:y}}=u,b=Ks(e.props);let{shapeFlag:w,children:x,dynamicChildren:M}=e;if(t==null){const j=e.el=g(""),P=e.anchor=g("");f(j,n,r),f(P,n,r);const S=e.target=eu(e.props,p),ae=e.targetAnchor=g("");S&&(f(ae,S),o=o||sd(S));const Z=(pe,De)=>{w&16&&c(x,pe,De,s,i,o,a,l)};b?Z(n,P):S&&Z(S,ae)}else{e.el=t.el;const j=e.anchor=t.anchor,P=e.target=t.target,S=e.targetAnchor=t.targetAnchor,ae=Ks(t.props),Z=ae?n:P,pe=ae?j:S;if(o=o||sd(P),M?(d(t.dynamicChildren,M,Z,s,i,o,a),lc(t,e,!0)):l||h(t,e,Z,pe,s,i,o,a,!1),b)ae||ro(e,n,j,u,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const De=e.target=eu(e.props,p);De&&ro(e,De,null,u,0)}else ae&&ro(e,P,S,u,1)}},remove(t,e,n,r,{um:s,o:{remove:i}},o){const{shapeFlag:a,children:l,anchor:u,targetAnchor:c,target:h,props:d}=t;if(h&&i(c),(o||!Ks(d))&&(i(u),a&16))for(let f=0;f<l.length;f++){const p=l[f];s(p,e,n,!0,!!p.dynamicChildren)}},move:ro,hydrate:j_};function ro(t,e,n,{o:{insert:r},m:s},i=2){i===0&&r(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:u,props:c}=t,h=i===2;if(h&&r(o,e,n),(!h||Ks(c))&&l&16)for(let d=0;d<u.length;d++)s(u[d],e,n,2);h&&r(a,e,n)}function j_(t,e,n,r,s,i,{o:{nextSibling:o,parentNode:a,querySelector:l}},u){const c=e.target=eu(e.props,l);if(c){const h=c._lpa||c.firstChild;e.shapeFlag&16&&(Ks(e.props)?(e.anchor=u(o(t),e,a(t),n,r,s,i),e.targetAnchor=h):(e.anchor=o(t),e.targetAnchor=u(h,e,c,n,r,s,i)),c._lpa=e.targetAnchor&&o(e.targetAnchor))}return e.anchor&&o(e.anchor)}const z_=V_,uc="components",q_="directives";function cc(t,e){return hc(uc,t,!0,e)||t}const Dm=Symbol();function H_(t){return We(t)?hc(uc,t,!1)||t:t||Dm}function K_(t){return hc(q_,t)}function hc(t,e,n=!0,r=!1){const s=yt||tt;if(s){const i=s.type;if(t===uc){const a=iw(i);if(a&&(a===e||a===ln(e)||a===ha(ln(e))))return i}const o=id(s[t]||i[t],e)||id(s.appContext[t],e);return!o&&r?i:o}}function id(t,e){return t&&(t[e]||t[ln(e)]||t[ha(ln(e))])}const lt=Symbol(void 0),dc=Symbol(void 0),jt=Symbol(void 0),cl=Symbol(void 0),Ws=[];let pr=null;function Se(t=!1){Ws.push(pr=t?null:[])}function W_(){Ws.pop(),pr=Ws[Ws.length-1]||null}let Do=1;function od(t){Do+=t}function Rm(t){return t.dynamicChildren=Do>0?pr||Qr:null,W_(),Do>0&&pr&&pr.push(t),t}function Je(t,e,n,r,s,i){return Rm(ye(t,e,n,r,s,i,!0))}function un(t,e,n,r,s){return Rm(ue(t,e,n,r,s,!0))}function Ro(t){return t?t.__v_isVNode===!0:!1}function or(t,e){return t.type===e.type&&t.key===e.key}const ya="__vInternal",xm=({key:t})=>t!=null?t:null,po=({ref:t,ref_key:e,ref_for:n})=>t!=null?We(t)||Fe(t)||ce(t)?{i:yt,r:t,k:e,f:!!n}:t:null;function ye(t,e=null,n=null,r=0,s=null,i=t===lt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&xm(e),ref:e&&po(e),scopeId:ma,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(fc(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=We(n)?8:16),Do>0&&!o&&pr&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&pr.push(l),l}const ue=G_;function G_(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Dm)&&(t=jt),Ro(t)){const a=Wn(t,e,!0);return n&&fc(a,n),a}if(ow(t)&&(t=t.__vccOpts),e){e=X_(e);let{class:a,style:l}=e;a&&!We(a)&&(e.class=_n(a)),Ye(l)&&(em(l)&&!ee(l)&&(l=ft({},l)),e.style=aa(l))}const o=We(t)?1:d_(t)?128:U_(t)?64:Ye(t)?4:ce(t)?2:0;return ye(t,e,n,r,s,o,i,!0)}function X_(t){return t?em(t)||ya in t?ft({},t):t:null}function Wn(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?ba(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&xm(a),ref:e&&e.ref?n&&s?ee(s)?s.concat(po(e)):[s,po(e)]:po(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==lt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Wn(t.ssContent),ssFallback:t.ssFallback&&Wn(t.ssFallback),el:t.el,anchor:t.anchor}}function xr(t=" ",e=0){return ue(dc,null,t,e)}function Q_(t="",e=!1){return e?(Se(),un(jt,null,t)):ue(jt,null,t)}function sn(t){return t==null||typeof t=="boolean"?ue(jt):ee(t)?ue(lt,null,t.slice()):typeof t=="object"?Bn(t):ue(dc,null,String(t))}function Bn(t){return t.el===null||t.memo?t:Wn(t)}function fc(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ee(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),fc(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(ya in e)?e._ctx=yt:s===3&&yt&&(yt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ce(e)?(e={default:e,_ctx:yt},n=32):(e=String(e),r&64?(n=16,e=[xr(e)]):n=8);t.children=e,t.shapeFlag|=n}function ba(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=_n([e.class,r.class]));else if(s==="style")e.style=aa([e.style,r.style]);else if(la(s)){const i=e[s],o=r[s];o&&i!==o&&!(ee(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function rn(t,e,n,r=null){Vt(t,e,7,[n,r])}function tu(t,e,n,r){let s;const i=n&&n[r];if(ee(t)||We(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Ye(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const u=o[a];s[a]=e(t[u],u,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}function _a(t,e,n={},r,s){if(yt.isCE||yt.parent&&Co(yt.parent)&&yt.parent.isCE)return ue("slot",e==="default"?null:{name:e},r&&r());let i=t[e];i&&i._c&&(i._d=!1),Se();const o=i&&Om(i(n)),a=un(lt,{key:n.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function Om(t){return t.some(e=>Ro(e)?!(e.type===jt||e.type===lt&&!Om(e.children)):!0)?t:null}const nu=t=>t?Pm(t)?wa(t)||t.proxy:nu(t.parent):null,xo=ft(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>nu(t.parent),$root:t=>nu(t.root),$emit:t=>t.emit,$options:t=>Em(t),$forceUpdate:t=>()=>lm(t.update),$nextTick:t=>Ie.bind(t.proxy),$watch:t=>p_.bind(t)}),Y_={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;let u;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(r!==Ne&&ge(r,e))return o[e]=1,r[e];if(s!==Ne&&ge(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&ge(u,e))return o[e]=3,i[e];if(n!==Ne&&ge(n,e))return o[e]=4,n[e];Ql&&(o[e]=0)}}const c=xo[e];let h,d;if(c)return e==="$attrs"&&Ft(t,"get",e),c(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ne&&ge(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,ge(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return s!==Ne&&ge(s,e)?(s[e]=n,!0):r!==Ne&&ge(r,e)?(r[e]=n,!0):ge(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Ne&&ge(t,o)||e!==Ne&&ge(e,o)||(a=i[0])&&ge(a,o)||ge(r,o)||ge(xo,o)||ge(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ge(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},Z_=km();let J_=0;function ew(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Z_,i={uid:J_++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Up(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Tm(r,s),emitsOptions:fm(r,s),emit:null,emitted:null,propsDefaults:Ne,inheritAttrs:r.inheritAttrs,ctx:Ne,data:Ne,props:Ne,attrs:Ne,slots:Ne,refs:Ne,setupState:Ne,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=i_.bind(null,i),t.ce&&t.ce(i),i}let tt=null;const ws=()=>tt||yt,ss=t=>{tt=t,t.scope.on()},mr=()=>{tt&&tt.scope.off(),tt=null};function Pm(t){return t.vnode.shapeFlag&4}let li=!1;function tw(t,e=!1){li=e;const{props:n,children:r}=t.vnode,s=Pm(t);R_(t,n,s,e),P_(t,r);const i=s?nw(t,e):void 0;return li=!1,i}function nw(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=rs(new Proxy(t.ctx,Y_));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?sw(t):null;ss(t),bs();const i=qn(r,t,0,[t.props,s]);if(_s(),mr(),Mp(i)){if(i.then(mr,mr),e)return i.then(o=>{ad(t,o,e)}).catch(o=>{fa(o,t,0)});t.asyncDep=i}else ad(t,i,e)}else Nm(t,e)}function ad(t,e,n){ce(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ye(e)&&(t.setupState=im(e)),Nm(t,n)}let ld;function Nm(t,e,n){const r=t.type;if(!t.render){if(!e&&ld&&!r.render){const s=r.template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,u=ft(ft({isCustomElement:i,delimiters:a},o),l);r.render=ld(s,u)}}t.render=r.render||Zt}ss(t),bs(),A_(t),_s(),mr()}function rw(t){return new Proxy(t.attrs,{get(e,n){return Ft(t,"get","$attrs"),e[n]}})}function sw(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=rw(t))},slots:t.slots,emit:t.emit,expose:e}}function wa(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(im(rs(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in xo)return xo[n](t)}}))}function iw(t){return ce(t)&&t.displayName||t.name}function ow(t){return ce(t)&&"__vccOpts"in t}const R=(t,e)=>J0(t,e,li);function Yt(t,e,n){const r=arguments.length;return r===2?Ye(e)&&!ee(e)?Ro(e)?ue(t,null,[e]):ue(t,e):ue(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ro(n)&&(n=[n]),ue(t,e,n))}const aw="3.2.33",lw="http://www.w3.org/2000/svg",ar=typeof document!="undefined"?document:null,ud=ar&&ar.createElement("template"),uw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?ar.createElementNS(lw,t):ar.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>ar.createTextNode(t),createComment:t=>ar.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ar.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{ud.innerHTML=r?`<svg>${t}</svg>`:t;const a=ud.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function cw(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function hw(t,e,n){const r=t.style,s=We(n);if(n&&!s){for(const i in n)ru(r,i,n[i]);if(e&&!We(e))for(const i in e)n[i]==null&&ru(r,i,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const cd=/\s*!important$/;function ru(t,e,n){if(ee(n))n.forEach(r=>ru(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=dw(t,e);cd.test(n)?t.setProperty(Dr(r),n.replace(cd,""),"important"):t[r]=n}}const hd=["Webkit","Moz","ms"],hl={};function dw(t,e){const n=hl[e];if(n)return n;let r=ln(e);if(r!=="filter"&&r in t)return hl[e]=r;r=ha(r);for(let s=0;s<hd.length;s++){const i=hd[s]+r;if(i in t)return hl[e]=i}return e}const dd="http://www.w3.org/1999/xlink";function fw(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(dd,e.slice(6,e.length)):t.setAttributeNS(dd,e,n);else{const i=a0(e);n==null||i&&!Np(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function pw(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n==null?"":n;(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Np(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[Lm,mw]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=()=>performance.now());const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let su=0;const gw=Promise.resolve(),vw=()=>{su=0},yw=()=>su||(gw.then(vw),su=Lm());function Kr(t,e,n,r){t.addEventListener(e,n,r)}function bw(t,e,n,r){t.removeEventListener(e,n,r)}function _w(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=ww(e);if(r){const u=i[e]=Ew(r,s);Kr(t,a,u,l)}else o&&(bw(t,a,o,l),i[e]=void 0)}}const fd=/(?:Once|Passive|Capture)$/;function ww(t){let e;if(fd.test(t)){e={};let n;for(;n=t.match(fd);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Dr(t.slice(2)),e]}function Ew(t,e){const n=r=>{const s=r.timeStamp||Lm();(mw||s>=n.attached-1)&&Vt(Iw(r,n.value),e,5,[r])};return n.value=t,n.attached=yw(),n}function Iw(t,e){if(ee(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const pd=/^on[a-z]/,Tw=(t,e,n,r,s=!1,i,o,a,l)=>{e==="class"?cw(t,r,s):e==="style"?hw(t,n,r):la(e)?Ku(e)||_w(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Aw(t,e,r,s))?pw(t,e,r,i,o,a,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),fw(t,e,r,s))};function Aw(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&pd.test(e)&&ce(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||pd.test(e)&&We(n)?!1:e in t}const xn="transition",Ns="animation",ui=(t,{slots:e})=>Yt(mm,Sw(t),e);ui.displayName="Transition";const Fm={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};ui.props=ft({},mm.props,Fm);const nr=(t,e=[])=>{ee(t)?t.forEach(n=>n(...e)):t&&t(...e)},md=t=>t?ee(t)?t.some(e=>e.length>1):t.length>1:!1;function Sw(t){const e={};for(const H in t)H in Fm||(e[H]=t[H]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:u=o,appearToClass:c=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=t,p=Cw(s),g=p&&p[0],y=p&&p[1],{onBeforeEnter:b,onEnter:w,onEnterCancelled:x,onLeave:M,onLeaveCancelled:j,onBeforeAppear:P=b,onAppear:S=w,onAppearCancelled:ae=x}=e,Z=(H,Te,Ce)=>{$r(H,Te?c:a),$r(H,Te?u:o),Ce&&Ce()},pe=(H,Te)=>{$r(H,f),$r(H,d),Te&&Te()},De=H=>(Te,Ce)=>{const en=H?S:w,Ve=()=>Z(Te,H,Ce);nr(en,[Te,Ve]),gd(()=>{$r(Te,H?l:i),On(Te,H?c:a),md(en)||vd(Te,r,g,Ve)})};return ft(e,{onBeforeEnter(H){nr(b,[H]),On(H,i),On(H,o)},onBeforeAppear(H){nr(P,[H]),On(H,l),On(H,u)},onEnter:De(!1),onAppear:De(!0),onLeave(H,Te){const Ce=()=>pe(H,Te);On(H,h),Rw(),On(H,d),gd(()=>{$r(H,h),On(H,f),md(M)||vd(H,r,y,Ce)}),nr(M,[H,Ce])},onEnterCancelled(H){Z(H,!1),nr(x,[H])},onAppearCancelled(H){Z(H,!0),nr(ae,[H])},onLeaveCancelled(H){pe(H),nr(j,[H])}})}function Cw(t){if(t==null)return null;if(Ye(t))return[dl(t.enter),dl(t.leave)];{const e=dl(t);return[e,e]}}function dl(t){return To(t)}function On(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function $r(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function gd(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let kw=0;function vd(t,e,n,r){const s=t._endId=++kw,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:l}=Dw(t,e);if(!o)return r();const u=o+"end";let c=0;const h=()=>{t.removeEventListener(u,d),i()},d=f=>{f.target===t&&++c>=l&&h()};setTimeout(()=>{c<l&&h()},a+1),t.addEventListener(u,d)}function Dw(t,e){const n=window.getComputedStyle(t),r=p=>(n[p]||"").split(", "),s=r(xn+"Delay"),i=r(xn+"Duration"),o=yd(s,i),a=r(Ns+"Delay"),l=r(Ns+"Duration"),u=yd(a,l);let c=null,h=0,d=0;e===xn?o>0&&(c=xn,h=o,d=i.length):e===Ns?u>0&&(c=Ns,h=u,d=l.length):(h=Math.max(o,u),c=h>0?o>u?xn:Ns:null,d=c?c===xn?i.length:l.length:0);const f=c===xn&&/\b(transform|all)(,|$)/.test(n[xn+"Property"]);return{type:c,timeout:h,propCount:d,hasTransform:f}}function yd(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>bd(n)+bd(t[r])))}function bd(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function Rw(){return document.body.offsetHeight}const _d=t=>{const e=t.props["onUpdate:modelValue"];return ee(e)?n=>fo(e,n):e};function xw(t){t.target.composing=!0}function wd(t){const e=t.target;e.composing&&(e.composing=!1,Ow(e,"input"))}function Ow(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const Mm={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=_d(s);const i=r||s.props&&s.props.type==="number";Kr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n?a=a.trim():i&&(a=To(a)),t._assign(a)}),n&&Kr(t,"change",()=>{t.value=t.value.trim()}),e||(Kr(t,"compositionstart",xw),Kr(t,"compositionend",wd),Kr(t,"change",wd))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=_d(i),t.composing||document.activeElement===t&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&To(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},Pw=["ctrl","shift","alt","meta"],Nw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Pw.some(n=>t[`${n}Key`]&&!e.includes(n))},pc=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=Nw[e[s]];if(i&&i(n,e))return}return t(n,...r)},Lw={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Bm=(t,e)=>n=>{if(!("key"in n))return;const r=Dr(n.key);if(e.some(s=>s===r||Lw[s]===r))return t(n)},$m={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Ls(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Ls(t,!0),r.enter(t)):r.leave(t,()=>{Ls(t,!1)}):Ls(t,e))},beforeUnmount(t,{value:e}){Ls(t,e)}};function Ls(t,e){t.style.display=e?t._vod:"none"}const Fw=ft({patchProp:Tw},uw);let Ed;function Mw(){return Ed||(Ed=M_(Fw))}const Bw=(...t)=>{const e=Mw().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=$w(r);if(!s)return;const i=e._component;!ce(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function $w(t){return We(t)?document.querySelector(t):t}/*!
  * vue-router v4.0.14
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Um=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Es=t=>Um?Symbol(t):"_vr_"+t,Uw=Es("rvlm"),Id=Es("rvd"),Ea=Es("r"),mc=Es("rl"),iu=Es("rvl"),Wr=typeof window!="undefined";function Vw(t){return t.__esModule||Um&&t[Symbol.toStringTag]==="Module"}const Pe=Object.assign;function fl(t,e){const n={};for(const r in e){const s=e[r];n[r]=Array.isArray(s)?s.map(t):t(s)}return n}const Gs=()=>{},jw=/\/$/,zw=t=>t.replace(jw,"");function pl(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("?"),l=e.indexOf("#",a>-1?a:0);return a>-1&&(r=e.slice(0,a),i=e.slice(a+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=Ww(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function qw(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Td(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Hw(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&is(e.matched[r],n.matched[s])&&Vm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function is(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Vm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Kw(t[n],e[n]))return!1;return!0}function Kw(t,e){return Array.isArray(t)?Ad(t,e):Array.isArray(e)?Ad(e,t):t===e}function Ad(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Ww(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],!(s===1||o==="."))if(o==="..")s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var ci;(function(t){t.pop="pop",t.push="push"})(ci||(ci={}));var Xs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Xs||(Xs={}));function Gw(t){if(!t)if(Wr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),zw(t)}const Xw=/^[^#]+#/;function Qw(t,e){return t.replace(Xw,"#")+e}function Yw(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ia=()=>({left:window.pageXOffset,top:window.pageYOffset});function Zw(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Yw(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Sd(t,e){return(history.state?history.state.position-e:-1)+t}const ou=new Map;function Jw(t,e){ou.set(t,e)}function eE(t){const e=ou.get(t);return ou.delete(t),e}let tE=()=>location.protocol+"//"+location.host;function jm(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),Td(l,"")}return Td(n,t)+r+s}function nE(t,e,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const f=jm(t,location),p=n.value,g=e.value;let y=0;if(d){if(n.value=f,e.value=d,o&&o===p){o=null;return}y=g?d.position-g.position:0}else r(f);s.forEach(b=>{b(n.value,p,{delta:y,type:ci.pop,direction:y?y>0?Xs.forward:Xs.back:Xs.unknown})})};function l(){o=n.value}function u(d){s.push(d);const f=()=>{const p=s.indexOf(d);p>-1&&s.splice(p,1)};return i.push(f),f}function c(){const{history:d}=window;!d.state||d.replaceState(Pe({},d.state,{scroll:Ia()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",c),{pauseListeners:l,listen:u,destroy:h}}function Cd(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ia():null}}function rE(t){const{history:e,location:n}=window,r={value:jm(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,c){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:tE()+t+l;try{e[c?"replaceState":"pushState"](u,"",d),s.value=u}catch(f){console.error(f),n[c?"replace":"assign"](d)}}function o(l,u){const c=Pe({},e.state,Cd(s.value.back,l,s.value.forward,!0),u,{position:s.value.position});i(l,c,!0),r.value=l}function a(l,u){const c=Pe({},s.value,e.state,{forward:l,scroll:Ia()});i(c.current,c,!0);const h=Pe({},Cd(r.value,l,null),{position:c.position+1},u);i(l,h,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function sE(t){t=Gw(t);const e=rE(t),n=nE(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Pe({location:"",base:t,go:r,createHref:Qw.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function iE(t){return typeof t=="string"||t&&typeof t=="object"}function zm(t){return typeof t=="string"||typeof t=="symbol"}const Pn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},qm=Es("nf");var kd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(kd||(kd={}));function os(t,e){return Pe(new Error,{type:t,[qm]:!0},e)}function Nn(t,e){return t instanceof Error&&qm in t&&(e==null||!!(t.type&e))}const Dd="[^/]+?",oE={sensitive:!1,strict:!1,start:!0,end:!0},aE=/[.+*?^${}()[\]/\\]/g;function lE(t,e){const n=Pe({},oE,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const c=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let h=0;h<u.length;h++){const d=u[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(aE,"\\$&"),f+=40;else if(d.type===1){const{value:p,repeatable:g,optional:y,regexp:b}=d;i.push({name:p,repeatable:g,optional:y});const w=b||Dd;if(w!==Dd){f+=10;try{new RegExp(`(${w})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${p}" (${w}): `+M.message)}}let x=g?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;h||(x=y&&u.length<2?`(?:/${x})`:"/"+x),y&&(x+="?"),s+=x,f+=20,y&&(f+=-8),g&&(f+=-20),w===".*"&&(f+=-50)}c.push(f)}r.push(c)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const c=u.match(o),h={};if(!c)return null;for(let d=1;d<c.length;d++){const f=c[d]||"",p=i[d-1];h[p.name]=f&&p.repeatable?f.split("/"):f}return h}function l(u){let c="",h=!1;for(const d of t){(!h||!c.endsWith("/"))&&(c+="/"),h=!1;for(const f of d)if(f.type===0)c+=f.value;else if(f.type===1){const{value:p,repeatable:g,optional:y}=f,b=p in u?u[p]:"";if(Array.isArray(b)&&!g)throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);const w=Array.isArray(b)?b.join("/"):b;if(!w)if(y)d.length<2&&(c.endsWith("/")?c=c.slice(0,-1):h=!0);else throw new Error(`Missing required param "${p}"`);c+=w}}return c}return{re:o,score:r,keys:i,parse:a,stringify:l}}function uE(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function cE(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=uE(r[n],s[n]);if(i)return i;n++}return s.length-r.length}const hE={type:0,value:""},dE=/[a-zA-Z0-9_]/;function fE(t){if(!t)return[[]];if(t==="/")return[[hE]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${u}": ${f}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,u="",c="";function h(){!u||(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function d(){u+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(u&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:l==="("?n=2:dE.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:n=3:c+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,c="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),s}function pE(t,e,n){const r=lE(fE(t.path),n),s=Pe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function mE(t,e){const n=[],r=new Map;e=xd({strict:!1,end:!0,sensitive:!1},e);function s(c){return r.get(c)}function i(c,h,d){const f=!d,p=vE(c);p.aliasOf=d&&d.record;const g=xd(e,c),y=[p];if("alias"in c){const x=typeof c.alias=="string"?[c.alias]:c.alias;for(const M of x)y.push(Pe({},p,{components:d?d.record.components:p.components,path:M,aliasOf:d?d.record:p}))}let b,w;for(const x of y){const{path:M}=x;if(h&&M[0]!=="/"){const j=h.record.path,P=j[j.length-1]==="/"?"":"/";x.path=h.record.path+(M&&P+M)}if(b=pE(x,h,g),d?d.alias.push(b):(w=w||b,w!==b&&w.alias.push(b),f&&c.name&&!Rd(b)&&o(c.name)),"children"in p){const j=p.children;for(let P=0;P<j.length;P++)i(j[P],b,d&&d.children[P])}d=d||b,l(b)}return w?()=>{o(w)}:Gs}function o(c){if(zm(c)){const h=r.get(c);h&&(r.delete(c),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(c);h>-1&&(n.splice(h,1),c.record.name&&r.delete(c.record.name),c.children.forEach(o),c.alias.forEach(o))}}function a(){return n}function l(c){let h=0;for(;h<n.length&&cE(c,n[h])>=0&&(c.record.path!==n[h].record.path||!Hm(c,n[h]));)h++;n.splice(h,0,c),c.record.name&&!Rd(c)&&r.set(c.record.name,c)}function u(c,h){let d,f={},p,g;if("name"in c&&c.name){if(d=r.get(c.name),!d)throw os(1,{location:c});g=d.record.name,f=Pe(gE(h.params,d.keys.filter(w=>!w.optional).map(w=>w.name)),c.params),p=d.stringify(f)}else if("path"in c)p=c.path,d=n.find(w=>w.re.test(p)),d&&(f=d.parse(p),g=d.record.name);else{if(d=h.name?r.get(h.name):n.find(w=>w.re.test(h.path)),!d)throw os(1,{location:c,currentLocation:h});g=d.record.name,f=Pe({},h.params,c.params),p=d.stringify(f)}const y=[];let b=d;for(;b;)y.unshift(b.record),b=b.parent;return{name:g,path:p,params:f,matched:y,meta:bE(y)}}return t.forEach(c=>i(c)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function gE(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function vE(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:yE(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function yE(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function Rd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function bE(t){return t.reduce((e,n)=>Pe(e,n.meta),{})}function xd(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Hm(t,e){return e.children.some(n=>n===t||Hm(t,n))}const Km=/#/g,_E=/&/g,wE=/\//g,EE=/=/g,IE=/\?/g,Wm=/\+/g,TE=/%5B/g,AE=/%5D/g,Gm=/%5E/g,SE=/%60/g,Xm=/%7B/g,CE=/%7C/g,Qm=/%7D/g,kE=/%20/g;function gc(t){return encodeURI(""+t).replace(CE,"|").replace(TE,"[").replace(AE,"]")}function DE(t){return gc(t).replace(Xm,"{").replace(Qm,"}").replace(Gm,"^")}function au(t){return gc(t).replace(Wm,"%2B").replace(kE,"+").replace(Km,"%23").replace(_E,"%26").replace(SE,"`").replace(Xm,"{").replace(Qm,"}").replace(Gm,"^")}function RE(t){return au(t).replace(EE,"%3D")}function xE(t){return gc(t).replace(Km,"%23").replace(IE,"%3F")}function OE(t){return t==null?"":xE(t).replace(wE,"%2F")}function Oo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function PE(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Wm," "),o=i.indexOf("="),a=Oo(o<0?i:i.slice(0,o)),l=o<0?null:Oo(i.slice(o+1));if(a in e){let u=e[a];Array.isArray(u)||(u=e[a]=[u]),u.push(l)}else e[a]=l}return e}function Od(t){let e="";for(let n in t){const r=t[n];if(n=RE(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(r)?r.map(i=>i&&au(i)):[r&&au(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function NE(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Array.isArray(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}function Fs(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function $n(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(os(4,{from:n,to:e})):h instanceof Error?a(h):iE(h)?a(os(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},u=t.call(r&&r.instances[s],e,n,l);let c=Promise.resolve(u);t.length<3&&(c=c.then(l)),c.catch(h=>a(h))})}function ml(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(LE(a)){const u=(a.__vccOpts||a)[e];u&&s.push($n(u,n,r,i,o))}else{let l=a();s.push(()=>l.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const c=Vw(u)?u.default:u;i.components[o]=c;const d=(c.__vccOpts||c)[e];return d&&$n(d,n,r,i,o)()}))}}return s}function LE(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Pd(t){const e=be(Ea),n=be(mc),r=R(()=>e.resolve(_e(t.to))),s=R(()=>{const{matched:l}=r.value,{length:u}=l,c=l[u-1],h=n.matched;if(!c||!h.length)return-1;const d=h.findIndex(is.bind(null,c));if(d>-1)return d;const f=Nd(l[u-2]);return u>1&&Nd(c)===f&&h[h.length-1].path!==f?h.findIndex(is.bind(null,l[u-2])):d}),i=R(()=>s.value>-1&&$E(n.params,r.value.params)),o=R(()=>s.value>-1&&s.value===n.matched.length-1&&Vm(n.params,r.value.params));function a(l={}){return BE(l)?e[_e(t.replace)?"replace":"push"](_e(t.to)).catch(Gs):Promise.resolve()}return{route:r,href:R(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const FE=G({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Pd,setup(t,{slots:e}){const n=Rr(Pd(t)),{options:r}=be(Ea),s=R(()=>({[Ld(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ld(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Yt("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),ME=FE;function BE(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function $E(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Array.isArray(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Nd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ld=(t,e,n)=>t!=null?t:e!=null?e:n,UE=G({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const r=be(iu),s=R(()=>t.route||r.value),i=be(Id,0),o=R(()=>s.value.matched[i]);Ue(Id,i+1),Ue(Uw,o),Ue(iu,s);const a=k();return At(()=>[a.value,o.value,t.name],([l,u,c],[h,d,f])=>{u&&(u.instances[c]=l,d&&d!==u&&l&&l===h&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),l&&u&&(!d||!is(u,d)||!h)&&(u.enterCallbacks[c]||[]).forEach(p=>p(l))},{flush:"post"}),()=>{const l=s.value,u=o.value,c=u&&u.components[t.name],h=t.name;if(!c)return Fd(n.default,{Component:c,route:l});const d=u.props[t.name],f=d?d===!0?l.params:typeof d=="function"?d(l):d:null,g=Yt(c,Pe({},f,e,{onVnodeUnmounted:y=>{y.component.isUnmounted&&(u.instances[h]=null)},ref:a}));return Fd(n.default,{Component:g,route:l})||g}}});function Fd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const VE=UE;function jE(t){const e=mE(t.routes,t),n=t.parseQuery||PE,r=t.stringifyQuery||Od,s=t.history,i=Fs(),o=Fs(),a=Fs(),l=rm(Pn);let u=Pn;Wr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=fl.bind(null,E=>""+E),h=fl.bind(null,OE),d=fl.bind(null,Oo);function f(E,q){let B,W;return zm(E)?(B=e.getRecordMatcher(E),W=q):W=E,e.addRoute(W,B)}function p(E){const q=e.getRecordMatcher(E);q&&e.removeRoute(q)}function g(){return e.getRoutes().map(E=>E.record)}function y(E){return!!e.getRecordMatcher(E)}function b(E,q){if(q=Pe({},q||l.value),typeof E=="string"){const he=pl(n,E,q.path),m=e.resolve({path:he.path},q),v=s.createHref(he.fullPath);return Pe(he,m,{params:d(m.params),hash:Oo(he.hash),redirectedFrom:void 0,href:v})}let B;if("path"in E)B=Pe({},E,{path:pl(n,E.path,q.path).path});else{const he=Pe({},E.params);for(const m in he)he[m]==null&&delete he[m];B=Pe({},E,{params:h(E.params)}),q.params=h(q.params)}const W=e.resolve(B,q),xe=E.hash||"";W.params=c(d(W.params));const Le=qw(r,Pe({},E,{hash:DE(xe),path:W.path})),fe=s.createHref(Le);return Pe({fullPath:Le,hash:xe,query:r===Od?NE(E.query):E.query||{}},W,{redirectedFrom:void 0,href:fe})}function w(E){return typeof E=="string"?pl(n,E,l.value.path):Pe({},E)}function x(E,q){if(u!==E)return os(8,{from:q,to:E})}function M(E){return S(E)}function j(E){return M(Pe(w(E),{replace:!0}))}function P(E){const q=E.matched[E.matched.length-1];if(q&&q.redirect){const{redirect:B}=q;let W=typeof B=="function"?B(E):B;return typeof W=="string"&&(W=W.includes("?")||W.includes("#")?W=w(W):{path:W},W.params={}),Pe({query:E.query,hash:E.hash,params:E.params},W)}}function S(E,q){const B=u=b(E),W=l.value,xe=E.state,Le=E.force,fe=E.replace===!0,he=P(B);if(he)return S(Pe(w(he),{state:xe,force:Le,replace:fe}),q||B);const m=B;m.redirectedFrom=q;let v;return!Le&&Hw(r,W,B)&&(v=os(16,{to:m,from:W}),Mr(W,W,!0,!1)),(v?Promise.resolve(v):Z(m,W)).catch(_=>Nn(_)?Nn(_,2)?_:Rt(_):Ae(_,m,W)).then(_=>{if(_){if(Nn(_,2))return S(Pe(w(_.to),{state:xe,force:Le,replace:fe}),q||m)}else _=De(m,W,!0,fe,xe);return pe(m,W,_),_})}function ae(E,q){const B=x(E,q);return B?Promise.reject(B):Promise.resolve()}function Z(E,q){let B;const[W,xe,Le]=zE(E,q);B=ml(W.reverse(),"beforeRouteLeave",E,q);for(const he of W)he.leaveGuards.forEach(m=>{B.push($n(m,E,q))});const fe=ae.bind(null,E,q);return B.push(fe),Ur(B).then(()=>{B=[];for(const he of i.list())B.push($n(he,E,q));return B.push(fe),Ur(B)}).then(()=>{B=ml(xe,"beforeRouteUpdate",E,q);for(const he of xe)he.updateGuards.forEach(m=>{B.push($n(m,E,q))});return B.push(fe),Ur(B)}).then(()=>{B=[];for(const he of E.matched)if(he.beforeEnter&&!q.matched.includes(he))if(Array.isArray(he.beforeEnter))for(const m of he.beforeEnter)B.push($n(m,E,q));else B.push($n(he.beforeEnter,E,q));return B.push(fe),Ur(B)}).then(()=>(E.matched.forEach(he=>he.enterCallbacks={}),B=ml(Le,"beforeRouteEnter",E,q),B.push(fe),Ur(B))).then(()=>{B=[];for(const he of o.list())B.push($n(he,E,q));return B.push(fe),Ur(B)}).catch(he=>Nn(he,8)?he:Promise.reject(he))}function pe(E,q,B){for(const W of a.list())W(E,q,B)}function De(E,q,B,W,xe){const Le=x(E,q);if(Le)return Le;const fe=q===Pn,he=Wr?history.state:{};B&&(W||fe?s.replace(E.fullPath,Pe({scroll:fe&&he&&he.scroll},xe)):s.push(E.fullPath,xe)),l.value=E,Mr(E,q,B,fe),Rt()}let H;function Te(){H=s.listen((E,q,B)=>{const W=b(E),xe=P(W);if(xe){S(Pe(xe,{replace:!0}),W).catch(Gs);return}u=W;const Le=l.value;Wr&&Jw(Sd(Le.fullPath,B.delta),Ia()),Z(W,Le).catch(fe=>Nn(fe,12)?fe:Nn(fe,2)?(S(fe.to,W).then(he=>{Nn(he,20)&&!B.delta&&B.type===ci.pop&&s.go(-1,!1)}).catch(Gs),Promise.reject()):(B.delta&&s.go(-B.delta,!1),Ae(fe,W,Le))).then(fe=>{fe=fe||De(W,Le,!1),fe&&(B.delta?s.go(-B.delta,!1):B.type===ci.pop&&Nn(fe,20)&&s.go(-1,!1)),pe(W,Le,fe)}).catch(Gs)})}let Ce=Fs(),en=Fs(),Ve;function Ae(E,q,B){Rt(E);const W=en.list();return W.length?W.forEach(xe=>xe(E,q,B)):console.error(E),Promise.reject(E)}function Re(){return Ve&&l.value!==Pn?Promise.resolve():new Promise((E,q)=>{Ce.add([E,q])})}function Rt(E){return Ve||(Ve=!E,Te(),Ce.list().forEach(([q,B])=>E?B(E):q()),Ce.reset()),E}function Mr(E,q,B,W){const{scrollBehavior:xe}=t;if(!Wr||!xe)return Promise.resolve();const Le=!B&&eE(Sd(E.fullPath,0))||(W||!B)&&history.state&&history.state.scroll||null;return Ie().then(()=>xe(E,q,Le)).then(fe=>fe&&Zw(fe)).catch(fe=>Ae(fe,E,q))}const fn=E=>s.go(E);let tn;const $t=new Set;return{currentRoute:l,addRoute:f,removeRoute:p,hasRoute:y,getRoutes:g,resolve:b,options:t,push:M,replace:j,go:fn,back:()=>fn(-1),forward:()=>fn(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:en.add,isReady:Re,install(E){const q=this;E.component("RouterLink",ME),E.component("RouterView",VE),E.config.globalProperties.$router=q,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>_e(l)}),Wr&&!tn&&l.value===Pn&&(tn=!0,M(s.location).catch(xe=>{}));const B={};for(const xe in Pn)B[xe]=R(()=>l.value[xe]);E.provide(Ea,q),E.provide(mc,Rr(B)),E.provide(iu,l);const W=E.unmount;$t.add(E),E.unmount=function(){$t.delete(E),$t.size<1&&(u=Pn,H&&H(),l.value=Pn,tn=!1,Ve=!1),W()}}}}function Ur(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function zE(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>is(u,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(u=>is(u,l))||s.push(l))}return[n,r,s]}function Ym(){return be(Ea)}function qE(){return be(mc)}var Cn=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n};const HE={},KE={class:"container mx-auto"};function WE(t,e){const n=cc("router-view");return Se(),Je("div",KE,[ue(n)])}var GE=Cn(HE,[["render",WE]]);function Zm(t){return _0()?(w0(t),!0):!1}const Jm=typeof window!="undefined",XE=t=>typeof t=="string",gl=()=>{};function QE(t,e){function n(...r){t(()=>e.apply(this,r),{fn:e,thisArg:this,args:r})}return n}const eg=t=>t();function YE(t=eg){const e=k(!0);function n(){e.value=!1}function r(){e.value=!0}return{isActive:e,pause:n,resume:r,eventFilter:(...i)=>{e.value&&t(...i)}}}function ZE(t,e=!0){ws()?bm(t):e?t():Ie(t)}function JE(t,e=!0){ws()?He(t):e?t():Ie(t)}function eI(t=!1){if(Fe(t))return e=>(t.value=typeof e=="boolean"?e:!t.value,t.value);{const e=k(t);return[e,r=>(e.value=typeof r=="boolean"?r:!e.value,e.value)]}}var Md=Object.getOwnPropertySymbols,tI=Object.prototype.hasOwnProperty,nI=Object.prototype.propertyIsEnumerable,rI=(t,e)=>{var n={};for(var r in t)tI.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&Md)for(var r of Md(t))e.indexOf(r)<0&&nI.call(t,r)&&(n[r]=t[r]);return n};function sI(t,e,n={}){const r=n,{eventFilter:s=eg}=r,i=rI(r,["eventFilter"]);return At(t,QE(s,e),i)}var iI=Object.defineProperty,oI=Object.defineProperties,aI=Object.getOwnPropertyDescriptors,Po=Object.getOwnPropertySymbols,tg=Object.prototype.hasOwnProperty,ng=Object.prototype.propertyIsEnumerable,Bd=(t,e,n)=>e in t?iI(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,lI=(t,e)=>{for(var n in e||(e={}))tg.call(e,n)&&Bd(t,n,e[n]);if(Po)for(var n of Po(e))ng.call(e,n)&&Bd(t,n,e[n]);return t},uI=(t,e)=>oI(t,aI(e)),cI=(t,e)=>{var n={};for(var r in t)tg.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&Po)for(var r of Po(t))e.indexOf(r)<0&&ng.call(t,r)&&(n[r]=t[r]);return n};function hI(t,e,n={}){const r=n,{eventFilter:s}=r,i=cI(r,["eventFilter"]),{eventFilter:o,pause:a,resume:l,isActive:u}=YE(s);return{stop:sI(t,e,uI(lI({},i),{eventFilter:o})),pause:a,resume:l,isActive:u}}function dI(t){var e;const n=_e(t);return(e=n==null?void 0:n.$el)!=null?e:n}const as=Jm?window:void 0;function fI(...t){let e,n,r,s;if(XE(t[0])?([n,r,s]=t,e=as):[e,n,r,s]=t,!e)return gl;let i=gl;const o=At(()=>dI(e),l=>{i(),l&&(l.addEventListener(n,r,s),i=()=>{l.removeEventListener(n,r,s),i=gl})},{immediate:!0,flush:"post"}),a=()=>{o(),i()};return Zm(a),a}function pI(t,e={}){const{window:n=as}=e;let r;const s=k(!1),i=()=>{!n||(r||(r=n.matchMedia(t)),s.value=r.matches)};return ZE(()=>{i(),r&&("addEventListener"in r?r.addEventListener("change",i):r.addListener(i),Zm(()=>{"removeEventListener"in r?r.removeEventListener("change",i):r.removeListener(i)}))}),s}const lu=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},uu="__vueuse_ssr_handlers__";lu[uu]=lu[uu]||{};const mI=lu[uu];function rg(t,e){return mI[t]||e}function gI(t){return t==null?"any":t instanceof Set?"set":t instanceof Map?"map":t instanceof Date?"date":typeof t=="boolean"?"boolean":typeof t=="string"?"string":typeof t=="object"||Array.isArray(t)?"object":Number.isNaN(t)?"any":"number"}const vI={boolean:{read:t=>t==="true",write:t=>String(t)},object:{read:t=>JSON.parse(t),write:t=>JSON.stringify(t)},number:{read:t=>Number.parseFloat(t),write:t=>String(t)},any:{read:t=>t,write:t=>String(t)},string:{read:t=>t,write:t=>String(t)},map:{read:t=>new Map(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t.entries()))},set:{read:t=>new Set(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t))},date:{read:t=>new Date(t),write:t=>t.toISOString()}};function yI(t,e,n,r={}){var s;const{flush:i="pre",deep:o=!0,listenToStorageChanges:a=!0,writeDefaults:l=!0,shallow:u,window:c=as,eventFilter:h,onError:d=P=>{console.error(P)}}=r,f=(u?rm:k)(e);if(!n)try{n=rg("getDefaultStorage",()=>{var P;return(P=as)==null?void 0:P.localStorage})()}catch(P){d(P)}if(!n)return f;const p=_e(e),g=gI(p),y=(s=r.serializer)!=null?s:vI[g],{pause:b,resume:w}=hI(f,()=>x(f.value),{flush:i,deep:o,eventFilter:h});return c&&a&&fI(c,"storage",j),j(),f;function x(P){try{P==null?n.removeItem(t):n.setItem(t,y.write(P))}catch(S){d(S)}}function M(P){if(!(P&&P.key!==t)){b();try{const S=P?P.newValue:n.getItem(t);return S==null?(l&&p!==null&&n.setItem(t,y.write(p)),p):typeof S!="string"?S:y.read(S)}catch(S){d(S)}finally{w()}}}function j(P){P&&P.key!==t||(f.value=M(P))}}function sg(t){return pI("(prefers-color-scheme: dark)",t)}var bI=Object.defineProperty,$d=Object.getOwnPropertySymbols,_I=Object.prototype.hasOwnProperty,wI=Object.prototype.propertyIsEnumerable,Ud=(t,e,n)=>e in t?bI(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,EI=(t,e)=>{for(var n in e||(e={}))_I.call(e,n)&&Ud(t,n,e[n]);if($d)for(var n of $d(e))wI.call(e,n)&&Ud(t,n,e[n]);return t};function II(t={}){const{selector:e="html",attribute:n="class",window:r=as,storage:s,storageKey:i="vueuse-color-scheme",listenToStorageChanges:o=!0,storageRef:a}=t,l=EI({auto:"",light:"light",dark:"dark"},t.modes||{}),u=sg({window:r}),c=R(()=>u.value?"dark":"light"),h=a||(i==null?k("auto"):yI(i,"auto",s,{window:r,listenToStorageChanges:o})),d=R({get(){return h.value==="auto"?c.value:h.value},set(y){h.value=y}}),f=rg("updateHTMLAttrs",(y,b,w)=>{const x=r==null?void 0:r.document.querySelector(y);if(!!x)if(b==="class"){const M=w.split(/\s/g);Object.values(l).flatMap(j=>(j||"").split(/\s/g)).filter(Boolean).forEach(j=>{M.includes(j)?x.classList.add(j):x.classList.remove(j)})}else x.setAttribute(b,w)});function p(y){var b;f(e,n,(b=l[y])!=null?b:y)}function g(y){t.onChanged?t.onChanged(y,p):p(y)}return At(d,g,{flush:"post",immediate:!0}),JE(()=>g(d.value)),d}var TI=Object.defineProperty,AI=Object.defineProperties,SI=Object.getOwnPropertyDescriptors,Vd=Object.getOwnPropertySymbols,CI=Object.prototype.hasOwnProperty,kI=Object.prototype.propertyIsEnumerable,jd=(t,e,n)=>e in t?TI(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,DI=(t,e)=>{for(var n in e||(e={}))CI.call(e,n)&&jd(t,n,e[n]);if(Vd)for(var n of Vd(e))kI.call(e,n)&&jd(t,n,e[n]);return t},RI=(t,e)=>AI(t,SI(e));function xI(t={}){const{valueDark:e="dark",valueLight:n="",window:r=as}=t,s=II(RI(DI({},t),{onChanged:(a,l)=>{var u;t.onChanged?(u=t.onChanged)==null||u.call(t,a==="dark"):l(a)},modes:{dark:e,light:n}})),i=sg({window:r});return R({get(){return s.value==="dark"},set(a){a===i.value?s.value="auto":s.value=a?"dark":"light"}})}var zd,qd;Jm&&(window==null?void 0:window.navigator)&&((zd=window==null?void 0:window.navigator)==null?void 0:zd.platform)&&/iP(ad|hone|od)/.test((qd=window==null?void 0:window.navigator)==null?void 0:qd.platform);function ig(t,e,n,r={}){var s;const{passive:i=!1,eventName:o,deep:a=!1}=r,l=ws(),u=n||(l==null?void 0:l.emit)||((s=l==null?void 0:l.$emit)==null?void 0:s.bind(l));let c=o;if(e||(e="modelValue"),c=o||c||`update:${e}`,i){const h=k(t[e]);return At(()=>t[e],d=>h.value=d),At(h,d=>{(d!==t[e]||a)&&u(c,d)},{deep:a}),h}else return R({get(){return t[e]},set(h){u(c,h)}})}var OI=!1;/*!
  * pinia v2.0.13
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let og;const Ta=t=>og=t,ag=Symbol();function cu(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Qs;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Qs||(Qs={}));function PI(){const t=Vp(!0),e=t.run(()=>k({}));let n=[],r=[];const s=rs({install(i){Ta(s),s._a=i,i.provide(ag,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!OI?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const lg=()=>{};function Hd(t,e,n,r=lg){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&ws()&&it(s),s}function Vr(t,...e){t.slice().forEach(n=>{n(...e)})}function hu(t,e){for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];cu(s)&&cu(r)&&t.hasOwnProperty(n)&&!Fe(r)&&!wn(r)?t[n]=hu(s,r):t[n]=r}return t}const NI=Symbol();function LI(t){return!cu(t)||!t.hasOwnProperty(NI)}const{assign:pn}=Object;function FI(t){return!!(Fe(t)&&t.effect)}function MI(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let l;function u(){a||(n.state.value[t]=s?s():{});const c=Q0(n.state.value[t]);return pn(c,i,Object.keys(o||{}).reduce((h,d)=>(h[d]=rs(R(()=>{Ta(n);const f=n._s.get(t);return o[d].call(f,f)})),h),{}))}return l=ug(t,u,e,n),l.$reset=function(){const h=s?s():{};this.$patch(d=>{pn(d,h)})},l}function ug(t,e,n={},r,s){let i;const o=n.state,a=pn({actions:{}},n),l={deep:!0};let u,c,h=rs([]),d=rs([]),f;const p=r.state.value[t];!o&&!p&&(r.state.value[t]={}),k({});function g(P){let S;u=c=!1,typeof P=="function"?(P(r.state.value[t]),S={type:Qs.patchFunction,storeId:t,events:f}):(hu(r.state.value[t],P),S={type:Qs.patchObject,payload:P,storeId:t,events:f}),Ie().then(()=>{u=!0}),c=!0,Vr(h,S,r.state.value[t])}const y=lg;function b(){i.stop(),h=[],d=[],r._s.delete(t)}function w(P,S){return function(){Ta(r);const ae=Array.from(arguments),Z=[],pe=[];function De(Ce){Z.push(Ce)}function H(Ce){pe.push(Ce)}Vr(d,{args:ae,name:P,store:M,after:De,onError:H});let Te;try{Te=S.apply(this&&this.$id===t?this:M,ae)}catch(Ce){throw Vr(pe,Ce),Ce}return Te instanceof Promise?Te.then(Ce=>(Vr(Z,Ce),Ce)).catch(Ce=>(Vr(pe,Ce),Promise.reject(Ce))):(Vr(Z,Te),Te)}}const x={_p:r,$id:t,$onAction:Hd.bind(null,d),$patch:g,$reset:y,$subscribe(P,S={}){const ae=Hd(h,P,S.detached,()=>Z()),Z=i.run(()=>At(()=>r.state.value[t],pe=>{(S.flush==="sync"?c:u)&&P({storeId:t,type:Qs.direct,events:f},pe)},pn({},l,S)));return ae},$dispose:b},M=Rr(pn({},x));r._s.set(t,M);const j=r._e.run(()=>(i=Vp(),i.run(()=>e())));for(const P in j){const S=j[P];if(Fe(S)&&!FI(S)||wn(S))o||(p&&LI(S)&&(Fe(S)?S.value=p[P]:hu(S,p[P])),r.state.value[t][P]=S);else if(typeof S=="function"){const ae=w(P,S);j[P]=ae,a.actions[P]=S}}return pn(M,j),pn(ie(M),j),Object.defineProperty(M,"$state",{get:()=>r.state.value[t],set:P=>{g(S=>{pn(S,P)})}}),r._p.forEach(P=>{pn(M,i.run(()=>P({store:M,app:r._a,pinia:r,options:a})))}),p&&o&&n.hydrate&&n.hydrate(M.$state,p),u=!0,c=!0,M}function vc(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,l){const u=ws();return a=a||u&&be(ag),a&&Ta(a),a=og,a._s.has(r)||(i?ug(r,e,s,a):MI(r,s,a)),a._s.get(r)}return o.$id=r,o}function cg(t){{t=ie(t);const e={};for(const n in t){const r=t[n];(Fe(r)||wn(r))&&(e[n]=om(t,n))}return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},BI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},dg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,c=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;l||(f=64,o||(d=64)),r.push(n[c],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(hg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):BI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||h==null)throw Error();const d=i<<2|a>>4;if(r.push(d),u!==64){const f=a<<4&240|u>>2;if(r.push(f),h!==64){const p=u<<6&192|h;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},$I=function(t){const e=hg(t);return dg.encodeByteArray(e,!0)},fg=function(t){return $I(t).replace(/\./g,"")},UI=function(t){try{return dg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function pg(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(nt())}function yc(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function mg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function jI(){return nt().indexOf("Electron/")>=0}function gg(){const t=nt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function zI(){return nt().indexOf("MSAppHost/")>=0}function vg(){return typeof indexedDB=="object"}function yg(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function qI(){return!(typeof navigator=="undefined"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HI="FirebaseError";class kn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=HI,Object.setPrototypeOf(this,kn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Or.prototype.create)}}class Or{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?KI(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new kn(s,a,r)}}function KI(t,e){return t.replace(WI,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const WI=/\{\$([^}]+)}/g;function GI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function hi(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Kd(i)&&Kd(o)){if(!hi(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Kd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Di(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function XI(t,e){const n=new QI(t,e);return n.subscribe.bind(n)}class QI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");YI(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=vl),s.error===void 0&&(s.error=vl),s.complete===void 0&&(s.complete=vl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function YI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function vl(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZI=1e3,JI=2,eT=4*60*60*1e3,tT=.5;function Wd(t,e=ZI,n=JI){const r=e*Math.pow(n,t),s=Math.round(tT*r*(Math.random()-.5)*2);return Math.min(eT,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vs(t,e){return new Promise((n,r)=>{t.onsuccess=s=>{n(s.target.result)},t.onerror=s=>{var i;r(`${e}: ${(i=s.target.error)===null||i===void 0?void 0:i.message}`)}})}class Gd{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,n="readonly"){return new bg(this._db.transaction.call(this._db,e,n))}createObjectStore(e,n){return new _g(this._db.createObjectStore(e,n))}close(){this._db.close()}}class bg{constructor(e){this._transaction=e,this.complete=new Promise((n,r)=>{this._transaction.oncomplete=function(){n()},this._transaction.onerror=()=>{r(this._transaction.error)},this._transaction.onabort=()=>{r(this._transaction.error)}})}objectStore(e){return new _g(this._transaction.objectStore(e))}}class _g{constructor(e){this._store=e}index(e){return new Xd(this._store.index(e))}createIndex(e,n,r){return new Xd(this._store.createIndex(e,n,r))}get(e){const n=this._store.get(e);return Vs(n,"Error reading from IndexedDB")}put(e,n){const r=this._store.put(e,n);return Vs(r,"Error writing to IndexedDB")}delete(e){const n=this._store.delete(e);return Vs(n,"Error deleting from IndexedDB")}clear(){const e=this._store.clear();return Vs(e,"Error clearing IndexedDB object store")}}class Xd{constructor(e){this._index=e}get(e){const n=this._index.get(e);return Vs(n,"Error reading from IndexedDB")}}function wg(t,e,n){return new Promise((r,s)=>{try{const i=indexedDB.open(t,e);i.onsuccess=o=>{r(new Gd(o.target.result))},i.onerror=o=>{var a;s(`Error opening indexedDB: ${(a=o.target.error)===null||a===void 0?void 0:a.message}`)},i.onupgradeneeded=o=>{n(new Gd(i.result),o.oldVersion,o.newVersion,new bg(i.transaction))}}catch(i){s(`Error opening indexedDB: ${i.message}`)}})}class Jt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new VI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(sT(e))try{this.getOrInitializeService({instanceIdentifier:ir})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=ir){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ir){return this.instances.has(e)}getOptions(e=ir){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:rT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ir){return this.component?this.component.multipleInstances?e:ir:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rT(t){return t===ir?void 0:t}function sT(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new nT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var we;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(we||(we={}));const oT={debug:we.DEBUG,verbose:we.VERBOSE,info:we.INFO,warn:we.WARN,error:we.ERROR,silent:we.SILENT},aT=we.INFO,lT={[we.DEBUG]:"log",[we.VERBOSE]:"log",[we.INFO]:"info",[we.WARN]:"warn",[we.ERROR]:"error"},uT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=lT[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Aa{constructor(e){this.name=e,this._logLevel=aT,this._logHandler=uT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in we))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?oT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,we.DEBUG,...e),this._logHandler(this,we.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,we.VERBOSE,...e),this._logHandler(this,we.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,we.INFO,...e),this._logHandler(this,we.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,we.WARN,...e),this._logHandler(this,we.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,we.ERROR,...e),this._logHandler(this,we.ERROR,...e)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(hT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function hT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const du="@firebase/app",Qd="0.7.21";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bc=new Aa("@firebase/app"),dT="@firebase/app-compat",fT="@firebase/analytics-compat",pT="@firebase/analytics",mT="@firebase/app-check-compat",gT="@firebase/app-check",vT="@firebase/auth",yT="@firebase/auth-compat",bT="@firebase/database",_T="@firebase/database-compat",wT="@firebase/functions",ET="@firebase/functions-compat",IT="@firebase/installations",TT="@firebase/installations-compat",AT="@firebase/messaging",ST="@firebase/messaging-compat",CT="@firebase/performance",kT="@firebase/performance-compat",DT="@firebase/remote-config",RT="@firebase/remote-config-compat",xT="@firebase/storage",OT="@firebase/storage-compat",PT="@firebase/firestore",NT="@firebase/firestore-compat",LT="firebase",FT="9.6.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eg="[DEFAULT]",MT={[du]:"fire-core",[dT]:"fire-core-compat",[pT]:"fire-analytics",[fT]:"fire-analytics-compat",[gT]:"fire-app-check",[mT]:"fire-app-check-compat",[vT]:"fire-auth",[yT]:"fire-auth-compat",[bT]:"fire-rtdb",[_T]:"fire-rtdb-compat",[wT]:"fire-fn",[ET]:"fire-fn-compat",[IT]:"fire-iid",[TT]:"fire-iid-compat",[AT]:"fire-fcm",[ST]:"fire-fcm-compat",[CT]:"fire-perf",[kT]:"fire-perf-compat",[DT]:"fire-rc",[RT]:"fire-rc-compat",[xT]:"fire-gcs",[OT]:"fire-gcs-compat",[PT]:"fire-fst",[NT]:"fire-fst-compat","fire-js":"fire-js",[LT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No=new Map,fu=new Map;function BT(t,e){try{t.container.addComponent(e)}catch(n){bc.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function cn(t){const e=t.name;if(fu.has(e))return bc.debug(`There were multiple attempts to register component ${e}.`),!1;fu.set(e,t);for(const n of No.values())BT(n,t);return!0}function Pr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $T={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},br=new Or("app","Firebase",$T);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Jt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw br.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ri=FT;function VT(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Eg,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw br.create("bad-app-name",{appName:String(r)});const s=No.get(r);if(s){if(hi(t,s.options)&&hi(n,s.config))return s;throw br.create("duplicate-app",{appName:r})}const i=new iT(r);for(const a of fu.values())i.addComponent(a);const o=new UT(t,n,i);return No.set(r,o),o}function _c(t=Eg){const e=No.get(t);if(!e)throw br.create("no-app",{appName:t});return e}function zt(t,e,n){var r;let s=(r=MT[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),bc.warn(a.join(" "));return}cn(new Jt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jT="firebase-heartbeat-database",zT=1,di="firebase-heartbeat-store";let yl=null;function Ig(){return yl||(yl=wg(jT,zT,(t,e)=>{switch(e){case 0:t.createObjectStore(di)}}).catch(t=>{throw br.create("storage-open",{originalErrorMessage:t.message})})),yl}async function qT(t){try{return(await Ig()).transaction(di).objectStore(di).get(Tg(t))}catch(e){throw br.create("storage-get",{originalErrorMessage:e.message})}}async function Yd(t,e){try{const r=(await Ig()).transaction(di,"readwrite");return await r.objectStore(di).put(e,Tg(t)),r.complete}catch(n){throw br.create("storage-set",{originalErrorMessage:n.message})}}function Tg(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HT=1024,KT=30*24*60*60*1e3;class WT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new XT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Zd();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=KT}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Zd(),{heartbeatsToSend:n,unsentEntries:r}=GT(this._heartbeatsCache.heartbeats),s=fg(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Zd(){return new Date().toISOString().substring(0,10)}function GT(t,e=HT){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Jd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Jd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class XT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vg()?yg().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await qT(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Yd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Yd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Jd(t){return fg(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QT(t){cn(new Jt("platform-logger",e=>new cT(e),"PRIVATE")),cn(new Jt("heartbeat",e=>new WT(e),"PRIVATE")),zt(du,Qd,t),zt(du,Qd,"esm2017"),zt("fire-js","")}QT("");/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function wc(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Ag(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const YT=Ag,Sg=new Or("auth","Firebase",Ag());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ef=new Aa("@firebase/auth");function mo(t,...e){ef.logLevel<=we.ERROR&&ef.error(`Auth (${Ri}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(t,...e){throw Ec(t,...e)}function on(t,...e){return Ec(t,...e)}function Cg(t,e,n){const r=Object.assign(Object.assign({},YT()),{[e]:n});return new Or("auth","Firebase",r).create(e,{appName:t.name})}function ZT(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&hn(t,"argument-error"),Cg(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ec(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Sg.create(t,...e)}function re(t,e,...n){if(!t)throw Ec(e,...n)}function vn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw mo(e),new Error(e)}function Tn(t,e){t||vn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tf=new Map;function yn(t){Tn(t instanceof Function,"Expected a class definition");let e=tf.get(t);return e?(Tn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,tf.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JT(t,e){const n=Pr(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(hi(i,e!=null?e:{}))return s;hn(s,"already-initialized")}return n.initialize({options:e})}function eA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(yn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pu(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function tA(){return nf()==="http:"||nf()==="https:"}function nf(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nA(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(tA()||yc()||"connection"in navigator)?navigator.onLine:!0}function rA(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Tn(n>e,"Short delay should be less than long delay!"),this.isMobile=pg()||mg()}get(){return nA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ic(t,e){Tn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;vn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;vn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;vn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iA=new xi(3e4,6e4);function oA(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Sa(t,e,n,r,s={}){return Dg(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Di(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),kg.fetch()(Rg(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function Dg(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},sA),e);try{const s=new lA(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw bl(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw bl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw bl(t,"email-already-in-use",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Cg(t,c,u);hn(t,c)}}catch(s){if(s instanceof kn)throw s;hn(t,"network-request-failed")}}async function aA(t,e,n,r,s={}){const i=await Sa(t,e,n,r,s);return"mfaPendingCredential"in i&&hn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Rg(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Ic(t.config,s):`${t.config.apiScheme}://${s}`}class lA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(on(this.auth,"network-request-failed")),iA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function bl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=on(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uA(t,e){return Sa(t,"POST","/v1/accounts:delete",e)}async function cA(t,e){return Sa(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ys(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function hA(t,e=!1){const n=Mt(t),r=await n.getIdToken(e),s=Tc(r);re(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ys(_l(s.auth_time)),issuedAtTime:Ys(_l(s.iat)),expirationTime:Ys(_l(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function _l(t){return Number(t)*1e3}function Tc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return mo("JWT malformed, contained fewer than 3 sections"),null;try{const s=UI(n);return s?JSON.parse(s):(mo("Failed to decode base64 JWT payload"),null)}catch(s){return mo("Caught error parsing JWT payload as JSON",s),null}}function dA(t){const e=Tc(t);return re(e,"internal-error"),re(typeof e.exp!="undefined","internal-error"),re(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof kn&&fA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function fA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ys(this.lastLoginAt),this.creationTime=Ys(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await fi(t,cA(n,{idToken:r}));re(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?vA(i.providerUserInfo):[],a=gA(t.providerData,o),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new xg(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function mA(t){const e=Mt(t);await Lo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function gA(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function vA(t){return t.map(e=>{var{providerId:n}=e,r=wc(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yA(t,e){const n=await Dg(t,{},async()=>{const r=Di({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Rg(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",kg.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){re(e.idToken,"internal-error"),re(typeof e.idToken!="undefined","internal-error"),re(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):dA(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return re(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await yA(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new pi;return r&&(re(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(re(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(re(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new pi,this.toJSON())}_performRefresh(){return vn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(t,e){re(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class gr{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=wc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new pA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new xg(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await fi(this,this.stsTokenManager.getToken(this.auth,e));return re(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return hA(this,e)}reload(){return mA(this)}_assign(e){this!==e&&(re(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new gr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){re(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Lo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await fi(this,uA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,f=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,g=(a=n.tenantId)!==null&&a!==void 0?a:void 0,y=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,b=(u=n.createdAt)!==null&&u!==void 0?u:void 0,w=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:x,emailVerified:M,isAnonymous:j,providerData:P,stsTokenManager:S}=n;re(x&&S,e,"internal-error");const ae=pi.fromJSON(this.name,S);re(typeof x=="string",e,"internal-error"),Ln(h,e.name),Ln(d,e.name),re(typeof M=="boolean",e,"internal-error"),re(typeof j=="boolean",e,"internal-error"),Ln(f,e.name),Ln(p,e.name),Ln(g,e.name),Ln(y,e.name),Ln(b,e.name),Ln(w,e.name);const Z=new gr({uid:x,auth:e,email:d,emailVerified:M,displayName:h,isAnonymous:j,photoURL:p,phoneNumber:f,tenantId:g,stsTokenManager:ae,createdAt:b,lastLoginAt:w});return P&&Array.isArray(P)&&(Z.providerData=P.map(pe=>Object.assign({},pe))),y&&(Z._redirectEventId=y),Z}static async _fromIdTokenResponse(e,n,r=!1){const s=new pi;s.updateFromServerResponse(n);const i=new gr({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Lo(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Og.type="NONE";const rf=Og;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function go(t,e,n){return`firebase:${t}:${e}:${n}`}class Zr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=go(this.userKey,s.apiKey,i),this.fullPersistenceKey=go("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?gr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Zr(yn(rf),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||yn(rf);const o=go(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=gr._fromJSON(e,c);u!==i&&(a=h),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Zr(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Zr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Lg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Pg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Mg(e))return"Blackberry";if(Bg(e))return"Webos";if(Ac(e))return"Safari";if((e.includes("chrome/")||Ng(e))&&!e.includes("edge/"))return"Chrome";if(Fg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Pg(t=nt()){return/firefox\//i.test(t)}function Ac(t=nt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ng(t=nt()){return/crios\//i.test(t)}function Lg(t=nt()){return/iemobile/i.test(t)}function Fg(t=nt()){return/android/i.test(t)}function Mg(t=nt()){return/blackberry/i.test(t)}function Bg(t=nt()){return/webos/i.test(t)}function Ca(t=nt()){return/iphone|ipad|ipod/i.test(t)}function bA(t=nt()){var e;return Ca(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function _A(){return gg()&&document.documentMode===10}function $g(t=nt()){return Ca(t)||Fg(t)||Bg(t)||Mg(t)||/windows phone/i.test(t)||Lg(t)}function wA(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ug(t,e=[]){let n;switch(t){case"Browser":n=sf(nt());break;case"Worker":n=`${sf(nt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ri}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EA{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new of(this),this.idTokenSubscription=new of(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Sg,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=yn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Zr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,i=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!s||s===i)&&(o==null?void 0:o.user)&&(r=o.user)}return r?r._redirectEventId?(re(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Lo(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=rA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Mt(e):null;return n&&re(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&re(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(yn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Or("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&yn(e)||this._popupRedirectResolver;re(n,this,"argument-error"),this.redirectPersistenceManager=await Zr.create(this,[yn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return re(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return re(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ug(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Sc(t){return Mt(t)}class of{constructor(e){this.auth=e,this.observer=null,this.addObserver=XI(n=>this.observer=n)}get next(){return re(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return vn("not implemented")}_getIdTokenResponse(e){return vn("not implemented")}_linkToIdToken(e,n){return vn("not implemented")}_getReauthenticationResolver(e){return vn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jr(t,e){return aA(t,"POST","/v1/accounts:signInWithIdp",oA(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IA="http://localhost";class _r extends Vg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new _r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):hn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=wc(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new _r(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Jr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Jr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Jr(e,n)}buildRequest(){const e={requestUri:IA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Di(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi extends Cc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends Oi{constructor(){super("facebook.com")}static credential(e){return _r._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Un.credential(e.oauthAccessToken)}catch{return null}}}Un.FACEBOOK_SIGN_IN_METHOD="facebook.com";Un.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn extends Oi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return _r._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return gn.credential(n,r)}catch{return null}}}gn.GOOGLE_SIGN_IN_METHOD="google.com";gn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn extends Oi{constructor(){super("github.com")}static credential(e){return _r._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vn.credential(e.oauthAccessToken)}catch{return null}}}Vn.GITHUB_SIGN_IN_METHOD="github.com";Vn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends Oi{constructor(){super("twitter.com")}static credential(e,n){return _r._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return jn.credential(n,r)}catch{return null}}}jn.TWITTER_SIGN_IN_METHOD="twitter.com";jn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await gr._fromIdTokenResponse(e,r,s),o=af(r);return new ls({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=af(r);return new ls({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function af(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo extends kn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Fo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Fo(e,n,r,s)}}function jg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Fo._fromErrorAndOperation(t,i,e,r):i})}async function TA(t,e,n=!1){const r=await fi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ls._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AA(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await fi(t,jg(r,s,e,t),n);re(i.idToken,r,"internal-error");const o=Tc(i.idToken);re(o,r,"internal-error");const{sub:a}=o;return re(t.uid===a,r,"user-mismatch"),ls._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&hn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SA(t,e,n=!1){const r="signIn",s=await jg(t,r,e),i=await ls._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function CA(t,e,n,r){return Mt(t).onAuthStateChanged(e,n,r)}const Mo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Mo,"1"),this.storage.removeItem(Mo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kA(){const t=nt();return Ac(t)||Ca(t)}const DA=1e3,RA=10;class qg extends zg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=kA()&&wA(),this.fallbackToPolling=$g(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);_A()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,RA):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},DA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}qg.type="LOCAL";const xA=qg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg extends zg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Hg.type="SESSION";const kc=Hg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OA(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ka(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),l=await OA(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ka.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const u=Dc("",20);s.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(c),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(){return window}function NA(t){an().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kg(){return typeof an().WorkerGlobalScope!="undefined"&&typeof an().importScripts=="function"}async function LA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function FA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function MA(){return Kg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wg="firebaseLocalStorageDb",BA=1,Bo="firebaseLocalStorage",Gg="fbase_key";class Pi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Da(t,e){return t.transaction([Bo],e?"readwrite":"readonly").objectStore(Bo)}function $A(){const t=indexedDB.deleteDatabase(Wg);return new Pi(t).toPromise()}function mu(){const t=indexedDB.open(Wg,BA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Bo,{keyPath:Gg})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Bo)?e(r):(r.close(),await $A(),e(await mu()))})})}async function lf(t,e,n){const r=Da(t,!0).put({[Gg]:e,value:n});return new Pi(r).toPromise()}async function UA(t,e){const n=Da(t,!1).get(e),r=await new Pi(n).toPromise();return r===void 0?null:r.value}function uf(t,e){const n=Da(t,!0).delete(e);return new Pi(n).toPromise()}const VA=800,jA=3;class Xg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await mu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>jA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Kg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ka._getInstance(MA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await LA(),!this.activeServiceWorker)return;this.sender=new PA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||FA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await mu();return await lf(e,Mo,"1"),await uf(e,Mo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>lf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>UA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>uf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Da(s,!1).getAll();return new Pi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),VA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Xg.type="LOCAL";const zA=Xg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function HA(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=on("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",qA().appendChild(r)})}function KA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new xi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qg(t,e){return e?yn(e):(re(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc extends Vg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Jr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Jr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Jr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function WA(t){return SA(t.auth,new Rc(t),t.bypassAuthState)}function GA(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),AA(n,new Rc(t),t.bypassAuthState)}async function XA(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),TA(n,new Rc(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return WA;case"linkViaPopup":case"linkViaRedirect":return XA;case"reauthViaPopup":case"reauthViaRedirect":return GA;default:hn(this.auth,"internal-error")}}resolve(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QA=new xi(2e3,1e4);async function YA(t,e,n){const r=Sc(t);ZT(t,e,Cc);const s=Qg(r,n);return new ur(r,"signInViaPopup",e,s).executeNotNull()}class ur extends Yg{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ur.currentPopupAction&&ur.currentPopupAction.cancel(),ur.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return re(e,this.auth,"internal-error"),e}async onExecution(){Tn(this.filter.length===1,"Popup operations only handle one event");const e=Dc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(on(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(on(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ur.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(on(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,QA.get())};e()}}ur.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZA="pendingRedirect",wl=new Map;class JA extends Yg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=wl.get(this.auth._key());if(!e){try{const r=await eS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}wl.set(this.auth._key(),e)}return this.bypassAuthState||wl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function eS(t,e){const n=nS(e),r=tS(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function tS(t){return yn(t._redirectPersistence)}function nS(t){return go(ZA,t.config.apiKey,t.name)}async function rS(t,e,n=!1){const r=Sc(t),s=Qg(r,e),o=await new JA(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sS=10*60*1e3;class iS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!oS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Zg(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(on(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=sS&&this.cachedEventUids.clear(),this.cachedEventUids.has(cf(e))}saveEventToCache(e){this.cachedEventUids.add(cf(e)),this.lastProcessedEventTime=Date.now()}}function cf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Zg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function oS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Zg(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aS(t,e={}){return Sa(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,uS=/^https?/;async function cS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await aS(t);for(const n of e)try{if(hS(n))return}catch{}hn(t,"unauthorized-domain")}function hS(t){const e=pu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!uS.test(n))return!1;if(lS.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dS=new xi(3e4,6e4);function hf(){const t=an().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function fS(t){return new Promise((e,n)=>{var r,s,i;function o(){hf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{hf(),n(on(t,"network-request-failed"))},timeout:dS.get()})}if(!((s=(r=an().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=an().gapi)===null||i===void 0)&&i.load)o();else{const a=KA("iframefcb");return an()[a]=()=>{gapi.load?o():n(on(t,"network-request-failed"))},HA(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw vo=null,e})}let vo=null;function pS(t){return vo=vo||fS(t),vo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mS=new xi(5e3,15e3),gS="__/auth/iframe",vS="emulator/auth/iframe",yS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},bS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _S(t){const e=t.config;re(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ic(e,vS):`https://${t.config.authDomain}/${gS}`,r={apiKey:e.apiKey,appName:t.name,v:Ri},s=bS.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Di(r).slice(1)}`}async function wS(t){const e=await pS(t),n=an().gapi;return re(n,t,"internal-error"),e.open({where:document.body,url:_S(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:yS,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=on(t,"network-request-failed"),a=an().setTimeout(()=>{i(o)},mS.get());function l(){an().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ES={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},IS=500,TS=600,AS="_blank",SS="http://localhost";class df{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function CS(t,e,n,r=IS,s=TS){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},ES),{width:r.toString(),height:s.toString(),top:i,left:o}),u=nt().toLowerCase();n&&(a=Ng(u)?AS:n),Pg(u)&&(e=e||SS,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[f,p])=>`${d}${f}=${p},`,"");if(bA(u)&&a!=="_self")return kS(e||"",a),new df(null);const h=window.open(e||"",a,c);re(h,t,"popup-blocked");try{h.focus()}catch{}return new df(h)}function kS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DS="__/auth/handler",RS="emulator/auth/handler";function ff(t,e,n,r,s,i){re(t.config.authDomain,t,"auth-domain-config-required"),re(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ri,eventId:s};if(e instanceof Cc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",GI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(i||{}))o[l]=u}if(e instanceof Oi){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${xS(t)}?${Di(a).slice(1)}`}function xS({config:t}){return t.emulator?Ic(t,RS):`https://${t.authDomain}/${DS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const El="webStorageSupport";class OS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=kc,this._completeRedirectFn=rS}async _openPopup(e,n,r,s){var i;Tn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=ff(e,n,r,pu(),s);return CS(e,o,Dc())}async _openRedirect(e,n,r,s){return await this._originValidation(e),NA(ff(e,n,r,pu(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Tn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await wS(e),r=new iS(e);return n.register("authEvent",s=>(re(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(El,{type:El},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[El];o!==void 0&&n(!!o),hn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=cS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return $g()||Ac()||Ca()}}const PS=OS;var pf="@firebase/auth",mf="0.19.12";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){re(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function FS(t){cn(new Jt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,l)=>{re(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),re(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ug(t)},c=new EA(a,l,u);return eA(c,n),c})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),cn(new Jt("auth-internal",e=>{const n=Sc(e.getProvider("auth").getImmediate());return(r=>new NS(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),zt(pf,mf,LS(t)),zt(pf,mf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Il(t=_c()){const e=Pr(t,"auth");return e.isInitialized()?e.getImmediate():JT(t,{popupRedirectResolver:PS,persistence:[zA,xA,kc]})}FS("Browser");const mi=vc("auth",()=>{const t=k(null),e=k(null),n=R(()=>t.value!==null);function r(a,l){var u,c,h;if(!a){t.value=null;return}a=a,t.value={userId:a.uid,profileImage:(u=a.photoURL)!=null?u:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbADKB5OER8mK9MCrkCBFJeXc2pZCGucLNxA&usqp=CAU",thumbnailImage:(c=a.photoURL)!=null?c:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbADKB5OER8mK9MCrkCBFJeXc2pZCGucLNxA&usqp=CAU",nickName:(h=a.displayName)!=null?h:"Anonymous"},l&&(e.value=l)}async function s(a,l){const u=Il();await u.setPersistence(kc);const c=await YA(u,a);r(c.user,l)}async function i(){r(null),await Il().signOut(),localStorage.clear()}function o(a){return new Promise(l=>{const u=Il();CA(u,c=>{c&&r(c,a),l(c!==null)})})}return{user:t,provider:e,isAuthenticated:n,getPersistenceFirebaseUser:o,logout:i,loginWithFirebase:s}});function Ge(t,e,...n){if(t in e){let s=e[t];return typeof s=="function"?s(...n):s}let r=new Error(`Tried to handle "${t}" but there is no handler defined. Only defined handlers are: ${Object.keys(e).map(s=>`"${s}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,Ge),r}function oe(r){var s=r,{visible:t=!0,features:e=0}=s,n=Gt(s,["visible","features"]);var i;if(t||e&2&&n.props.static)return Tl(n);if(e&1){let o=(i=n.props.unmount)==null||i?0:1;return Ge(o,{[0](){return null},[1](){return Tl(gt($({},n),{props:gt($({},n.props),{hidden:!0,style:{display:"none"}})}))}})}return Tl(n)}function Tl({props:t,attrs:e,slots:n,slot:r,name:s}){var i;let u=Yn(t,["unmount","static"]),{as:o}=u,a=Gt(u,["as"]),l=(i=n.default)==null?void 0:i.call(n,r);if(o==="template"){if(Object.keys(a).length>0||Object.keys(e).length>0){let[c,...h]=l!=null?l:[];if(!MS(c)||h.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${s} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(a).concat(Object.keys(e)).map(d=>`  - ${d}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(d=>`  - ${d}`).join(`
`)].join(`
`));return Wn(c,a)}return Array.isArray(l)&&l.length===1?l[0]:l}return Yt(o,a,l)}function Yn(t,e=[]){let n=Object.assign({},t);for(let r of e)r in n&&delete n[r];return n}function MS(t){return t==null?!1:typeof t.type=="string"||typeof t.type=="object"||typeof t.type=="function"}var BS=0;function $S(){return++BS}function ke(){return $S()}function US(t){throw new Error("Unexpected object: "+t)}function xc(t,e){let n=e.resolveItems();if(n.length<=0)return null;let r=e.resolveActiveIndex(),s=r!=null?r:-1,i=(()=>{switch(t.focus){case 0:return n.findIndex(o=>!e.resolveDisabled(o));case 1:{let o=n.slice().reverse().findIndex((a,l,u)=>s!==-1&&u.length-l-1>=s?!1:!e.resolveDisabled(a));return o===-1?o:n.length-1-o}case 2:return n.findIndex((o,a)=>a<=s?!1:!e.resolveDisabled(o));case 3:{let o=n.slice().reverse().findIndex(a=>!e.resolveDisabled(a));return o===-1?o:n.length-1-o}case 4:return n.findIndex(o=>e.resolveId(o)===t.id);case 5:return null;default:US(t)}})();return i===-1?r:i}function A(t){return t==null||t.value==null?null:"$el"in t.value?t.value.$el:t.value}function Ht(t,e,n){typeof window!="undefined"&&Ke(r=>{window.addEventListener(t,e,n),r(()=>{window.removeEventListener(t,e,n)})})}var Jg=Symbol("Context");function VS(){return Dn()!==null}function Dn(){return be(Jg,null)}function Is(t){Ue(Jg,t)}function gf(t,e){if(t)return t;let n=e!=null?e:"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function Nr(t,e){let n=k(gf(t.value.type,t.value.as));return He(()=>{n.value=gf(t.value.type,t.value.as)}),Ke(()=>{var r;n.value||!A(e)||A(e)instanceof HTMLButtonElement&&!((r=A(e))!=null&&r.hasAttribute("type"))&&(n.value="button")}),n}function Oc({container:t,accept:e,walk:n,enabled:r}){Ke(()=>{let s=t.value;if(!s||r!==void 0&&!r.value)return;let i=Object.assign(a=>e(a),{acceptNode:e}),o=document.createTreeWalker(s,NodeFilter.SHOW_ELEMENT,i,!1);for(;o.nextNode();)n(o.currentNode)})}var ev=Symbol("ComboboxContext");function Ts(t){let e=be(ev,null);if(e===null){let n=new Error(`<${t} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Ts),n}return e}G({name:"Combobox",emits:{"update:modelValue":t=>!0},props:{as:{type:[Object,String],default:"template"},disabled:{type:[Boolean],default:!1},modelValue:{type:[Object,String,Number,Boolean]}},setup(t,{slots:e,attrs:n,emit:r}){let s=k(1),i=k(null),o=k(null),a=k(null),l=k(null),u=k({static:!1,hold:!1}),c=k([]),h=k(null),d=R(()=>t.modelValue),f={comboboxState:s,value:d,inputRef:o,labelRef:i,buttonRef:a,optionsRef:l,disabled:R(()=>t.disabled),options:c,activeOptionIndex:h,inputPropsRef:k({displayValue:void 0}),optionsPropsRef:u,closeCombobox(){t.disabled||s.value!==1&&(s.value=1,h.value=null)},openCombobox(){t.disabled||s.value!==0&&(s.value=0)},goToOption(g,y){if(t.disabled||l.value&&!u.value.static&&s.value===1)return;let b=xc(g===4?{focus:4,id:y}:{focus:g},{resolveItems:()=>c.value,resolveActiveIndex:()=>h.value,resolveId:w=>w.id,resolveDisabled:w=>w.dataRef.disabled});h.value!==b&&(h.value=b)},syncInputValue(){let g=f.value.value;if(!A(f.inputRef)||g===void 0)return;let y=f.inputPropsRef.value.displayValue;typeof y=="function"?f.inputRef.value.value=y(g):typeof g=="string"&&(f.inputRef.value.value=g)},selectOption(g){let y=c.value.find(w=>w.id===g);if(!y)return;let{dataRef:b}=y;r("update:modelValue",b.value),f.syncInputValue()},selectActiveOption(){if(h.value===null)return;let{dataRef:g}=c.value[h.value];r("update:modelValue",g.value),f.syncInputValue()},registerOption(g,y){var b,w;let x=h.value!==null?c.value[h.value]:null,M=Array.from((w=(b=l.value)==null?void 0:b.querySelectorAll('[id^="headlessui-combobox-option-"]'))!=null?w:[]).reduce((j,P,S)=>Object.assign(j,{[P.id]:S}),{});c.value=[...c.value,{id:g,dataRef:y}].sort((j,P)=>M[j.id]-M[P.id]),h.value=(()=>x===null?null:c.value.indexOf(x))()},unregisterOption(g){let y=c.value.slice(),b=h.value!==null?y[h.value]:null,w=y.findIndex(x=>x.id===g);w!==-1&&y.splice(w,1),c.value=y,h.value=(()=>w===h.value||b===null?null:y.indexOf(b))()}};Ht("mousedown",g=>{var y,b,w;let x=g.target;s.value===0&&(((y=A(o))==null?void 0:y.contains(x))||((b=A(a))==null?void 0:b.contains(x))||((w=A(l))==null?void 0:w.contains(x))||f.closeCombobox())}),At([f.value,f.inputRef],()=>f.syncInputValue(),{immediate:!0}),Ue(ev,f),Is(R(()=>Ge(s.value,{[0]:0,[1]:1})));let p=R(()=>h.value===null?null:c.value[h.value].dataRef.value);return()=>{let g={open:s.value===0,disabled:t.disabled,activeIndex:h.value,activeOption:p.value};return oe({props:Yn(t,["modelValue","onUpdate:modelValue","disabled"]),slot:g,slots:e,attrs:n,name:"Combobox"})}}});G({name:"ComboboxLabel",props:{as:{type:[Object,String],default:"label"}},setup(t,{attrs:e,slots:n}){let r=Ts("ComboboxLabel"),s=`headlessui-combobox-label-${ke()}`;function i(){var o;(o=A(r.inputRef))==null||o.focus({preventScroll:!0})}return()=>{let o={open:r.comboboxState.value===0,disabled:r.disabled.value},a={id:s,ref:r.labelRef,onClick:i};return oe({props:$($({},t),a),slot:o,attrs:e,slots:n,name:"ComboboxLabel"})}}});G({name:"ComboboxButton",props:{as:{type:[Object,String],default:"button"}},setup(t,{attrs:e,slots:n}){let r=Ts("ComboboxButton"),s=`headlessui-combobox-button-${ke()}`;function i(l){r.disabled.value||(r.comboboxState.value===0?r.closeCombobox():(l.preventDefault(),r.openCombobox()),Ie(()=>{var u;return(u=A(r.inputRef))==null?void 0:u.focus({preventScroll:!0})}))}function o(l){switch(l.key){case"ArrowDown":l.preventDefault(),l.stopPropagation(),r.comboboxState.value===1&&(r.openCombobox(),Ie(()=>{r.value.value||r.goToOption(0)})),Ie(()=>{var u;return(u=r.inputRef.value)==null?void 0:u.focus({preventScroll:!0})});return;case"ArrowUp":l.preventDefault(),l.stopPropagation(),r.comboboxState.value===1&&(r.openCombobox(),Ie(()=>{r.value.value||r.goToOption(3)})),Ie(()=>{var u;return(u=r.inputRef.value)==null?void 0:u.focus({preventScroll:!0})});return;case"Escape":l.preventDefault(),r.optionsRef.value&&!r.optionsPropsRef.value.static&&l.stopPropagation(),r.closeCombobox(),Ie(()=>{var u;return(u=r.inputRef.value)==null?void 0:u.focus({preventScroll:!0})});return}}let a=Nr(R(()=>({as:t.as,type:e.type})),r.buttonRef);return()=>{var l,u;let c={open:r.comboboxState.value===0,disabled:r.disabled.value},h={ref:r.buttonRef,id:s,type:a.value,tabindex:"-1","aria-haspopup":!0,"aria-controls":(l=A(r.optionsRef))==null?void 0:l.id,"aria-expanded":r.disabled.value?void 0:r.comboboxState.value===0,"aria-labelledby":r.labelRef.value?[(u=A(r.labelRef))==null?void 0:u.id,s].join(" "):void 0,disabled:r.disabled.value===!0?!0:void 0,onKeydown:o,onClick:i};return oe({props:$($({},t),h),slot:c,attrs:e,slots:n,name:"ComboboxButton"})}}});G({name:"ComboboxInput",props:{as:{type:[Object,String],default:"input"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},displayValue:{type:Function}},emits:{change:t=>!0},setup(t,{emit:e,attrs:n,slots:r}){let s=Ts("ComboboxInput"),i=`headlessui-combobox-input-${ke()}`;s.inputPropsRef=R(()=>t);function o(l){switch(l.key){case"Enter":l.preventDefault(),l.stopPropagation(),s.selectActiveOption(),s.closeCombobox();break;case"ArrowDown":return l.preventDefault(),l.stopPropagation(),Ge(s.comboboxState.value,{[0]:()=>s.goToOption(2),[1]:()=>{s.openCombobox(),Ie(()=>{s.value.value||s.goToOption(0)})}});case"ArrowUp":return l.preventDefault(),l.stopPropagation(),Ge(s.comboboxState.value,{[0]:()=>s.goToOption(1),[1]:()=>{s.openCombobox(),Ie(()=>{s.value.value||s.goToOption(3)})}});case"Home":case"PageUp":return l.preventDefault(),l.stopPropagation(),s.goToOption(0);case"End":case"PageDown":return l.preventDefault(),l.stopPropagation(),s.goToOption(3);case"Escape":l.preventDefault(),s.optionsRef.value&&!s.optionsPropsRef.value.static&&l.stopPropagation(),s.closeCombobox();break;case"Tab":s.selectActiveOption(),s.closeCombobox();break}}function a(l){s.openCombobox(),e("change",l)}return()=>{var l,u,c,h,d;let f={open:s.comboboxState.value===0},p={"aria-controls":(l=s.optionsRef.value)==null?void 0:l.id,"aria-expanded":s.disabled?void 0:s.comboboxState.value===0,"aria-activedescendant":s.activeOptionIndex.value===null||(u=s.options.value[s.activeOptionIndex.value])==null?void 0:u.id,"aria-labelledby":(d=(c=A(s.labelRef))==null?void 0:c.id)!=null?d:(h=A(s.buttonRef))==null?void 0:h.id,id:i,onKeydown:o,onChange:a,onInput:a,role:"combobox",type:"text",tabIndex:0,ref:s.inputRef},g=Yn(t,["displayValue"]);return oe({props:$($({},g),p),slot:f,attrs:n,slots:r,features:3,name:"ComboboxInput"})}}});G({name:"ComboboxOptions",props:{as:{type:[Object,String],default:"ul"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},hold:{type:[Boolean],default:!1}},setup(t,{attrs:e,slots:n}){let r=Ts("ComboboxOptions"),s=`headlessui-combobox-options-${ke()}`;Ke(()=>{r.optionsPropsRef.value.static=t.static}),Ke(()=>{r.optionsPropsRef.value.hold=t.hold});let i=Dn(),o=R(()=>i!==null?i.value===0:r.comboboxState.value===0);return Oc({container:R(()=>A(r.optionsRef)),enabled:R(()=>r.comboboxState.value===0),accept(a){return a.getAttribute("role")==="option"?NodeFilter.FILTER_REJECT:a.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(a){a.setAttribute("role","none")}}),()=>{var a,l,u,c;let h={open:r.comboboxState.value===0},d={"aria-activedescendant":r.activeOptionIndex.value===null||(a=r.options.value[r.activeOptionIndex.value])==null?void 0:a.id,"aria-labelledby":(c=(l=A(r.labelRef))==null?void 0:l.id)!=null?c:(u=A(r.buttonRef))==null?void 0:u.id,id:s,ref:r.optionsRef,role:"listbox"},f=Yn(t,["hold"]);return oe({props:$($({},f),d),slot:h,attrs:e,slots:n,features:3,visible:o.value,name:"ComboboxOptions"})}}});G({name:"ComboboxOption",props:{as:{type:[Object,String],default:"li"},value:{type:[Object,String,Number,Boolean]},disabled:{type:Boolean,default:!1}},setup(t,{slots:e,attrs:n}){let r=Ts("ComboboxOption"),s=`headlessui-combobox-option-${ke()}`,i=R(()=>r.activeOptionIndex.value!==null?r.options.value[r.activeOptionIndex.value].id===s:!1),o=R(()=>ie(r.value.value)===ie(t.value)),a=R(()=>({disabled:t.disabled,value:t.value}));He(()=>r.registerOption(s,a)),it(()=>r.unregisterOption(s)),He(()=>{At([r.comboboxState,o],()=>{r.comboboxState.value===0&&(!o.value||r.goToOption(4,s))},{immediate:!0})}),Ke(()=>{r.comboboxState.value===0&&(!i.value||Ie(()=>{var d,f;return(f=(d=document.getElementById(s))==null?void 0:d.scrollIntoView)==null?void 0:f.call(d,{block:"nearest"})}))});function l(d){if(t.disabled)return d.preventDefault();r.selectOption(s),r.closeCombobox(),Ie(()=>{var f;return(f=A(r.inputRef))==null?void 0:f.focus({preventScroll:!0})})}function u(){if(t.disabled)return r.goToOption(5);r.goToOption(4,s)}function c(){t.disabled||i.value||r.goToOption(4,s)}function h(){t.disabled||!i.value||r.optionsPropsRef.value.hold||r.goToOption(5)}return()=>{let{disabled:d}=t,f={active:i.value,selected:o.value,disabled:d},p={id:s,role:"option",tabIndex:d===!0?void 0:-1,"aria-disabled":d===!0?!0:void 0,"aria-selected":o.value===!0?o.value:void 0,disabled:void 0,onClick:l,onFocus:u,onPointermove:c,onMousemove:c,onPointerleave:h,onMouseleave:h};return oe({props:$($({},t),p),slot:f,attrs:n,slots:e,name:"ComboboxOption"})}}});var gu=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(t=>`${t}:not([tabindex='-1'])`).join(",");function $o(t=document.body){return t==null?[]:Array.from(t.querySelectorAll(gu))}function jS(t,e=0){return t===document.body?!1:Ge(e,{[0](){return t.matches(gu)},[1](){let n=t;for(;n!==null;){if(n.matches(gu))return!0;n=n.parentElement}return!1}})}function Ms(t){t==null||t.focus({preventScroll:!0})}function ut(t,e){let n=Array.isArray(t)?t.slice().sort((c,h)=>{let d=c.compareDocumentPosition(h);return d&Node.DOCUMENT_POSITION_FOLLOWING?-1:d&Node.DOCUMENT_POSITION_PRECEDING?1:0}):$o(t),r=document.activeElement,s=(()=>{if(e&5)return 1;if(e&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),i=(()=>{if(e&1)return 0;if(e&2)return Math.max(0,n.indexOf(r))-1;if(e&4)return Math.max(0,n.indexOf(r))+1;if(e&8)return n.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),o=e&32?{preventScroll:!0}:{},a=0,l=n.length,u;do{if(a>=l||a+l<=0)return 0;let c=i+a;if(e&16)c=(c+l)%l;else{if(c<0)return 3;if(c>=l)return 1}u=n[c],u==null||u.focus(o),a+=s}while(u!==document.activeElement);return u.hasAttribute("tabindex")||u.setAttribute("tabindex","0"),2}function vu(t,e){for(let n of t)if(n.contains(e))return!0;return!1}function tv(t,e=k(!0),n=k({})){let r=k(typeof window!="undefined"?document.activeElement:null),s=k(null);function i(){if(!e.value||t.value.size!==1)return;let{initialFocus:a}=n.value,l=document.activeElement;if(a){if(a===l)return}else if(vu(t.value,l))return;if(r.value=l,a)Ms(a);else{let u=!1;for(let c of t.value)if(ut(c,1)===2){u=!0;break}u||console.warn("There are no focusable elements inside the <FocusTrap />")}s.value=document.activeElement}function o(){Ms(r.value),r.value=null,s.value=null}Ke(i),oc(()=>{e.value?i():o()}),it(o),Ht("keydown",a=>{if(!!e.value&&a.key==="Tab"&&!!document.activeElement&&t.value.size===1){a.preventDefault();for(let l of t.value)if(ut(l,(a.shiftKey?2:4)|16)===2){s.value=document.activeElement;break}}}),Ht("focus",a=>{if(!e.value||t.value.size!==1)return;let l=s.value;if(!l)return;let u=a.target;u&&u instanceof HTMLElement?vu(t.value,u)?(s.value=u,Ms(u)):(a.preventDefault(),a.stopPropagation(),Ms(l)):Ms(s.value)},!0)}var vf="body > *",jr=new Set,Mn=new Map;function yf(t){t.setAttribute("aria-hidden","true"),t.inert=!0}function bf(t){let e=Mn.get(t);!e||(e["aria-hidden"]===null?t.removeAttribute("aria-hidden"):t.setAttribute("aria-hidden",e["aria-hidden"]),t.inert=e.inert)}function zS(t,e=k(!0)){Ke(n=>{if(!e.value||!t.value)return;let r=t.value;jr.add(r);for(let s of Mn.keys())s.contains(r)&&(bf(s),Mn.delete(s));document.querySelectorAll(vf).forEach(s=>{if(s instanceof HTMLElement){for(let i of jr)if(s.contains(i))return;jr.size===1&&(Mn.set(s,{"aria-hidden":s.getAttribute("aria-hidden"),inert:s.inert}),yf(s))}}),n(()=>{if(jr.delete(r),jr.size>0)document.querySelectorAll(vf).forEach(s=>{if(s instanceof HTMLElement&&!Mn.has(s)){for(let i of jr)if(s.contains(i))return;Mn.set(s,{"aria-hidden":s.getAttribute("aria-hidden"),inert:s.inert}),yf(s)}});else for(let s of Mn.keys())bf(s),Mn.delete(s)})})}var nv=Symbol("StackContext");function rv(){return be(nv,()=>{})}function qS(t){let e=rv();Ke(n=>{let r=t==null?void 0:t.value;!r||(e(0,r),n(()=>e(1,r)))})}function sv(t){let e=rv();function n(...r){t==null||t(...r),e(...r)}Ue(nv,n)}var iv=Symbol("ForcePortalRootContext");function HS(){return be(iv,!1)}var _f=G({name:"ForcePortalRoot",props:{as:{type:[Object,String],default:"template"},force:{type:Boolean,default:!1}},setup(t,{slots:e,attrs:n}){return Ue(iv,t.force),()=>{let i=t,{force:r}=i,s=Gt(i,["force"]);return oe({props:s,slot:{},slots:e,attrs:n,name:"ForcePortalRoot"})}}});function KS(){let t=document.getElementById("headlessui-portal-root");if(t)return t;let e=document.createElement("div");return e.setAttribute("id","headlessui-portal-root"),document.body.appendChild(e)}var WS=G({name:"Portal",props:{as:{type:[Object,String],default:"div"}},setup(t,{slots:e,attrs:n}){let r=HS(),s=be(ov,null),i=k(r===!0||s===null?KS():s.resolveTarget());Ke(()=>{r||s!==null&&(i.value=s.resolveTarget())});let o=k(null);return qS(o),it(()=>{var a;let l=document.getElementById("headlessui-portal-root");!l||i.value===l&&i.value.children.length<=0&&((a=i.value.parentElement)==null||a.removeChild(i.value))}),sv(),()=>{if(i.value===null)return null;let a={ref:o};return Yt(z_,{to:i.value},oe({props:$($({},t),a),slot:{},attrs:n,slots:e,name:"Portal"}))}}}),ov=Symbol("PortalGroupContext"),GS=G({name:"PortalGroup",props:{as:{type:[Object,String],default:"template"},target:{type:Object,default:null}},setup(t,{attrs:e,slots:n}){let r=Rr({resolveTarget(){return t.target}});return Ue(ov,r),()=>{let o=t,{target:s}=o,i=Gt(o,["target"]);return oe({props:i,slot:{},attrs:e,slots:n,name:"PortalGroup"})}}}),av=Symbol("DescriptionContext");function XS(){let t=be(av,null);if(t===null)throw new Error("Missing parent");return t}function Ra({slot:t=k({}),name:e="Description",props:n={}}={}){let r=k([]);function s(i){return r.value.push(i),()=>{let o=r.value.indexOf(i);o!==-1&&r.value.splice(o,1)}}return Ue(av,{register:s,slot:t,name:e,props:n}),R(()=>r.value.length>0?r.value.join(" "):void 0)}G({name:"Description",props:{as:{type:[Object,String],default:"p"}},setup(t,{attrs:e,slots:n}){let r=XS(),s=`headlessui-description-${ke()}`;return He(()=>it(r.register(s))),()=>{let{name:i="Description",slot:o=k({}),props:a={}}=r,l=t,u=gt($({},Object.entries(a).reduce((c,[h,d])=>Object.assign(c,{[h]:_e(d)}),{})),{id:s});return oe({props:$($({},l),u),slot:o.value,attrs:e,slots:n,name:i})}}});var lv=Symbol("DialogContext");function Pc(t){let e=be(lv,null);if(e===null){let n=new Error(`<${t} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Pc),n}return e}var so="DC8F892D-2EBD-447C-A4C8-A03058436FF4";G({name:"Dialog",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},open:{type:[Boolean,String],default:so},initialFocus:{type:Object,default:null}},emits:{close:t=>!0},setup(t,{emit:e,attrs:n,slots:r}){let s=k(new Set),i=Dn(),o=R(()=>t.open===so&&i!==null?Ge(i.value,{[0]:!0,[1]:!1}):t.open);if(!(t.open!==so||i!==null))throw new Error("You forgot to provide an `open` prop to the `Dialog`.");if(typeof o.value!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${o.value===so?void 0:t.open}`);let a=R(()=>t.open?0:1),l=R(()=>i!==null?i.value===0:a.value===0),u=k(null),c=k(a.value===0);oc(()=>{c.value=a.value===0});let h=`headlessui-dialog-${ke()}`,d=R(()=>({initialFocus:t.initialFocus}));tv(s,c,d),zS(u,c),sv((b,w)=>Ge(b,{[0](){s.value.add(w)},[1](){s.value.delete(w)}}));let f=Ra({name:"DialogDescription",slot:R(()=>({open:o.value}))}),p=k(null),g={titleId:p,dialogState:a,setTitleId(b){p.value!==b&&(p.value=b)},close(){e("close",!1)}};Ue(lv,g),Ht("mousedown",b=>{let w=b.target;a.value===0&&s.value.size===1&&(vu(s.value,w)||(g.close(),Ie(()=>w==null?void 0:w.focus())))}),Ht("keydown",b=>{b.key==="Escape"&&a.value===0&&(s.value.size>1||(b.preventDefault(),b.stopPropagation(),g.close()))}),Ke(b=>{if(a.value!==0)return;let w=document.documentElement.style.overflow,x=document.documentElement.style.paddingRight,M=window.innerWidth-document.documentElement.clientWidth;document.documentElement.style.overflow="hidden",document.documentElement.style.paddingRight=`${M}px`,b(()=>{document.documentElement.style.overflow=w,document.documentElement.style.paddingRight=x})}),Ke(b=>{if(a.value!==0)return;let w=A(u);if(!w)return;let x=new IntersectionObserver(M=>{for(let j of M)j.boundingClientRect.x===0&&j.boundingClientRect.y===0&&j.boundingClientRect.width===0&&j.boundingClientRect.height===0&&g.close()});x.observe(w),b(()=>x.disconnect())});function y(b){b.stopPropagation()}return()=>{let b=gt($({},n),{ref:u,id:h,role:"dialog","aria-modal":a.value===0?!0:void 0,"aria-labelledby":p.value,"aria-describedby":f.value,onClick:y}),P=t,{open:w,initialFocus:x}=P,M=Gt(P,["open","initialFocus"]),j={open:a.value===0};return Yt(_f,{force:!0},()=>Yt(WS,()=>Yt(GS,{target:u.value},()=>Yt(_f,{force:!1},()=>oe({props:$($({},M),b),slot:j,attrs:n,slots:r,visible:l.value,features:3,name:"Dialog"})))))}}});G({name:"DialogOverlay",props:{as:{type:[Object,String],default:"div"}},setup(t,{attrs:e,slots:n}){let r=Pc("DialogOverlay"),s=`headlessui-dialog-overlay-${ke()}`;function i(o){o.target===o.currentTarget&&(o.preventDefault(),o.stopPropagation(),r.close())}return()=>oe({props:gt($({},t),{id:s,"aria-hidden":!0,onClick:i}),slot:{open:r.dialogState.value===0},attrs:e,slots:n,name:"DialogOverlay"})}});G({name:"DialogTitle",props:{as:{type:[Object,String],default:"h2"}},setup(t,{attrs:e,slots:n}){let r=Pc("DialogTitle"),s=`headlessui-dialog-title-${ke()}`;return He(()=>{r.setTitleId(s),it(()=>r.setTitleId(null))}),()=>oe({props:gt($({},t),{id:s}),slot:{open:r.dialogState.value===0},attrs:e,slots:n,name:"DialogTitle"})}});var uv=Symbol("DisclosureContext");function Nc(t){let e=be(uv,null);if(e===null){let n=new Error(`<${t} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Nc),n}return e}var cv=Symbol("DisclosurePanelContext");function QS(){return be(cv,null)}G({name:"Disclosure",props:{as:{type:[Object,String],default:"template"},defaultOpen:{type:[Boolean],default:!1}},setup(t,{slots:e,attrs:n}){let r=`headlessui-disclosure-button-${ke()}`,s=`headlessui-disclosure-panel-${ke()}`,i=k(t.defaultOpen?0:1),o=k(null),a=k(null),l={buttonId:r,panelId:s,disclosureState:i,panel:o,button:a,toggleDisclosure(){i.value=Ge(i.value,{[0]:1,[1]:0})},closeDisclosure(){i.value!==1&&(i.value=1)},close(u){l.closeDisclosure();let c=(()=>u?u instanceof HTMLElement?u:u.value instanceof HTMLElement?A(u):A(l.button):A(l.button))();c==null||c.focus()}};return Ue(uv,l),Is(R(()=>Ge(i.value,{[0]:0,[1]:1}))),()=>{let d=t,{defaultOpen:u}=d,c=Gt(d,["defaultOpen"]),h={open:i.value===0,close:l.close};return oe({props:c,slot:h,slots:e,attrs:n,name:"Disclosure"})}}});G({name:"DisclosureButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1}},setup(t,{attrs:e,slots:n}){let r=Nc("DisclosureButton"),s=QS(),i=s===null?!1:s===r.panelId,o=k(null);i||Ke(()=>{r.button.value=o.value});let a=Nr(R(()=>({as:t.as,type:e.type})),o);function l(){var h;t.disabled||(i?(r.toggleDisclosure(),(h=A(r.button))==null||h.focus()):r.toggleDisclosure())}function u(h){var d;if(!t.disabled)if(i)switch(h.key){case" ":case"Enter":h.preventDefault(),h.stopPropagation(),r.toggleDisclosure(),(d=A(r.button))==null||d.focus();break}else switch(h.key){case" ":case"Enter":h.preventDefault(),h.stopPropagation(),r.toggleDisclosure();break}}function c(h){switch(h.key){case" ":h.preventDefault();break}}return()=>{let h={open:r.disclosureState.value===0},d=i?{ref:o,type:a.value,onClick:l,onKeydown:u}:{id:r.buttonId,ref:o,type:a.value,"aria-expanded":t.disabled?void 0:r.disclosureState.value===0,"aria-controls":A(r.panel)?r.panelId:void 0,disabled:t.disabled?!0:void 0,onClick:l,onKeydown:u,onKeyup:c};return oe({props:$($({},t),d),slot:h,attrs:e,slots:n,name:"DisclosureButton"})}}});G({name:"DisclosurePanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},setup(t,{attrs:e,slots:n}){let r=Nc("DisclosurePanel");Ue(cv,r.panelId);let s=Dn(),i=R(()=>s!==null?s.value===0:r.disclosureState.value===0);return()=>{let o={open:r.disclosureState.value===0,close:r.close},a={id:r.panelId,ref:r.panel};return oe({props:$($({},t),a),slot:o,attrs:e,slots:n,features:3,visible:i.value,name:"DisclosurePanel"})}}});G({name:"FocusTrap",props:{as:{type:[Object,String],default:"div"},initialFocus:{type:Object,default:null}},setup(t,{attrs:e,slots:n}){let r=k(new Set),s=k(null),i=k(!0),o=R(()=>({initialFocus:t.initialFocus}));return He(()=>{!s.value||(r.value.add(s.value),tv(r,i,o))}),it(()=>{i.value=!1}),()=>{let a={},l={ref:s},h=t,{initialFocus:u}=h,c=Gt(h,["initialFocus"]);return oe({props:$($({},c),l),slot:a,attrs:e,slots:n,name:"FocusTrap"})}}});function YS(t){requestAnimationFrame(()=>requestAnimationFrame(t))}var hv=Symbol("ListboxContext");function Ni(t){let e=be(hv,null);if(e===null){let n=new Error(`<${t} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Ni),n}return e}G({name:"Listbox",emits:{"update:modelValue":t=>!0},props:{as:{type:[Object,String],default:"template"},disabled:{type:[Boolean],default:!1},horizontal:{type:[Boolean],default:!1},modelValue:{type:[Object,String,Number,Boolean]}},setup(t,{slots:e,attrs:n,emit:r}){let s=k(1),i=k(null),o=k(null),a=k(null),l=k([]),u=k(""),c=k(null),h=R(()=>t.modelValue),d={listboxState:s,value:h,orientation:R(()=>t.horizontal?"horizontal":"vertical"),labelRef:i,buttonRef:o,optionsRef:a,disabled:R(()=>t.disabled),options:l,searchQuery:u,activeOptionIndex:c,closeListbox(){t.disabled||s.value!==1&&(s.value=1,c.value=null)},openListbox(){t.disabled||s.value!==0&&(s.value=0)},goToOption(f,p){if(t.disabled||s.value===1)return;let g=xc(f===4?{focus:4,id:p}:{focus:f},{resolveItems:()=>l.value,resolveActiveIndex:()=>c.value,resolveId:y=>y.id,resolveDisabled:y=>y.dataRef.disabled});u.value===""&&c.value===g||(u.value="",c.value=g)},search(f){if(t.disabled||s.value===1)return;let p=u.value!==""?0:1;u.value+=f.toLowerCase();let g=(c.value!==null?l.value.slice(c.value+p).concat(l.value.slice(0,c.value+p)):l.value).find(b=>b.dataRef.textValue.startsWith(u.value)&&!b.dataRef.disabled),y=g?l.value.indexOf(g):-1;y===-1||y===c.value||(c.value=y)},clearSearch(){t.disabled||s.value!==1&&u.value!==""&&(u.value="")},registerOption(f,p){var g,y;let b=Array.from((y=(g=a.value)==null?void 0:g.querySelectorAll('[id^="headlessui-listbox-option-"]'))!=null?y:[]).reduce((w,x,M)=>Object.assign(w,{[x.id]:M}),{});l.value=[...l.value,{id:f,dataRef:p}].sort((w,x)=>b[w.id]-b[x.id])},unregisterOption(f){let p=l.value.slice(),g=c.value!==null?p[c.value]:null,y=p.findIndex(b=>b.id===f);y!==-1&&p.splice(y,1),l.value=p,c.value=(()=>y===c.value||g===null?null:p.indexOf(g))()},select(f){t.disabled||r("update:modelValue",f)}};return Ht("mousedown",f=>{var p,g,y;let b=f.target,w=document.activeElement;s.value===0&&((p=A(o))!=null&&p.contains(b)||((g=A(a))!=null&&g.contains(b)||d.closeListbox(),!(w!==document.body&&(w==null?void 0:w.contains(b)))&&(f.defaultPrevented||(y=A(o))==null||y.focus({preventScroll:!0}))))}),Ue(hv,d),Is(R(()=>Ge(s.value,{[0]:0,[1]:1}))),()=>{let f={open:s.value===0,disabled:t.disabled};return oe({props:Yn(t,["modelValue","onUpdate:modelValue","disabled","horizontal"]),slot:f,slots:e,attrs:n,name:"Listbox"})}}});G({name:"ListboxLabel",props:{as:{type:[Object,String],default:"label"}},setup(t,{attrs:e,slots:n}){let r=Ni("ListboxLabel"),s=`headlessui-listbox-label-${ke()}`;function i(){var o;(o=A(r.buttonRef))==null||o.focus({preventScroll:!0})}return()=>{let o={open:r.listboxState.value===0,disabled:r.disabled.value},a={id:s,ref:r.labelRef,onClick:i};return oe({props:$($({},t),a),slot:o,attrs:e,slots:n,name:"ListboxLabel"})}}});G({name:"ListboxButton",props:{as:{type:[Object,String],default:"button"}},setup(t,{attrs:e,slots:n}){let r=Ni("ListboxButton"),s=`headlessui-listbox-button-${ke()}`;function i(u){switch(u.key){case" ":case"Enter":case"ArrowDown":u.preventDefault(),r.openListbox(),Ie(()=>{var c;(c=A(r.optionsRef))==null||c.focus({preventScroll:!0}),r.value.value||r.goToOption(0)});break;case"ArrowUp":u.preventDefault(),r.openListbox(),Ie(()=>{var c;(c=A(r.optionsRef))==null||c.focus({preventScroll:!0}),r.value.value||r.goToOption(3)});break}}function o(u){switch(u.key){case" ":u.preventDefault();break}}function a(u){r.disabled.value||(r.listboxState.value===0?(r.closeListbox(),Ie(()=>{var c;return(c=A(r.buttonRef))==null?void 0:c.focus({preventScroll:!0})})):(u.preventDefault(),r.openListbox(),YS(()=>{var c;return(c=A(r.optionsRef))==null?void 0:c.focus({preventScroll:!0})})))}let l=Nr(R(()=>({as:t.as,type:e.type})),r.buttonRef);return()=>{var u,c;let h={open:r.listboxState.value===0,disabled:r.disabled.value},d={ref:r.buttonRef,id:s,type:l.value,"aria-haspopup":!0,"aria-controls":(u=A(r.optionsRef))==null?void 0:u.id,"aria-expanded":r.disabled.value?void 0:r.listboxState.value===0,"aria-labelledby":r.labelRef.value?[(c=A(r.labelRef))==null?void 0:c.id,s].join(" "):void 0,disabled:r.disabled.value===!0?!0:void 0,onKeydown:i,onKeyup:o,onClick:a};return oe({props:$($({},t),d),slot:h,attrs:e,slots:n,name:"ListboxButton"})}}});G({name:"ListboxOptions",props:{as:{type:[Object,String],default:"ul"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},setup(t,{attrs:e,slots:n}){let r=Ni("ListboxOptions"),s=`headlessui-listbox-options-${ke()}`,i=k(null);function o(u){switch(i.value&&clearTimeout(i.value),u.key){case" ":if(r.searchQuery.value!=="")return u.preventDefault(),u.stopPropagation(),r.search(u.key);case"Enter":if(u.preventDefault(),u.stopPropagation(),r.activeOptionIndex.value!==null){let{dataRef:c}=r.options.value[r.activeOptionIndex.value];r.select(c.value)}r.closeListbox(),Ie(()=>{var c;return(c=A(r.buttonRef))==null?void 0:c.focus({preventScroll:!0})});break;case Ge(r.orientation.value,{vertical:"ArrowDown",horizontal:"ArrowRight"}):return u.preventDefault(),u.stopPropagation(),r.goToOption(2);case Ge(r.orientation.value,{vertical:"ArrowUp",horizontal:"ArrowLeft"}):return u.preventDefault(),u.stopPropagation(),r.goToOption(1);case"Home":case"PageUp":return u.preventDefault(),u.stopPropagation(),r.goToOption(0);case"End":case"PageDown":return u.preventDefault(),u.stopPropagation(),r.goToOption(3);case"Escape":u.preventDefault(),u.stopPropagation(),r.closeListbox(),Ie(()=>{var c;return(c=A(r.buttonRef))==null?void 0:c.focus({preventScroll:!0})});break;case"Tab":u.preventDefault(),u.stopPropagation();break;default:u.key.length===1&&(r.search(u.key),i.value=setTimeout(()=>r.clearSearch(),350));break}}let a=Dn(),l=R(()=>a!==null?a.value===0:r.listboxState.value===0);return()=>{var u,c,h,d;let f={open:r.listboxState.value===0},p={"aria-activedescendant":r.activeOptionIndex.value===null||(u=r.options.value[r.activeOptionIndex.value])==null?void 0:u.id,"aria-labelledby":(d=(c=A(r.labelRef))==null?void 0:c.id)!=null?d:(h=A(r.buttonRef))==null?void 0:h.id,"aria-orientation":r.orientation.value,id:s,onKeydown:o,role:"listbox",tabIndex:0,ref:r.optionsRef};return oe({props:$($({},t),p),slot:f,attrs:e,slots:n,features:3,visible:l.value,name:"ListboxOptions"})}}});G({name:"ListboxOption",props:{as:{type:[Object,String],default:"li"},value:{type:[Object,String,Number,Boolean]},disabled:{type:Boolean,default:!1}},setup(t,{slots:e,attrs:n}){let r=Ni("ListboxOption"),s=`headlessui-listbox-option-${ke()}`,i=R(()=>r.activeOptionIndex.value!==null?r.options.value[r.activeOptionIndex.value].id===s:!1),o=R(()=>ie(r.value.value)===ie(t.value)),a=k({disabled:t.disabled,value:t.value,textValue:""});He(()=>{var d,f;let p=(f=(d=document.getElementById(s))==null?void 0:d.textContent)==null?void 0:f.toLowerCase().trim();p!==void 0&&(a.value.textValue=p)}),He(()=>r.registerOption(s,a)),it(()=>r.unregisterOption(s)),He(()=>{At([r.listboxState,o],()=>{var d,f;r.listboxState.value===0&&(!o.value||(r.goToOption(4,s),(f=(d=document.getElementById(s))==null?void 0:d.focus)==null||f.call(d)))},{immediate:!0})}),Ke(()=>{r.listboxState.value===0&&(!i.value||Ie(()=>{var d,f;return(f=(d=document.getElementById(s))==null?void 0:d.scrollIntoView)==null?void 0:f.call(d,{block:"nearest"})}))});function l(d){if(t.disabled)return d.preventDefault();r.select(t.value),r.closeListbox(),Ie(()=>{var f;return(f=A(r.buttonRef))==null?void 0:f.focus({preventScroll:!0})})}function u(){if(t.disabled)return r.goToOption(5);r.goToOption(4,s)}function c(){t.disabled||i.value||r.goToOption(4,s)}function h(){t.disabled||!i.value||r.goToOption(5)}return()=>{let{disabled:d}=t,f={active:i.value,selected:o.value,disabled:d},p={id:s,role:"option",tabIndex:d===!0?void 0:-1,"aria-disabled":d===!0?!0:void 0,"aria-selected":o.value===!0?o.value:void 0,disabled:void 0,onClick:l,onFocus:u,onPointermove:c,onMousemove:c,onPointerleave:h,onMouseleave:h};return oe({props:$($({},t),p),slot:f,attrs:n,slots:e,name:"ListboxOption"})}}});function ZS(t){requestAnimationFrame(()=>requestAnimationFrame(t))}var dv=Symbol("MenuContext");function xa(t){let e=be(dv,null);if(e===null){let n=new Error(`<${t} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,xa),n}return e}var JS=G({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(t,{slots:e,attrs:n}){let r=k(1),s=k(null),i=k(null),o=k([]),a=k(""),l=k(null),u={menuState:r,buttonRef:s,itemsRef:i,items:o,searchQuery:a,activeItemIndex:l,closeMenu:()=>{r.value=1,l.value=null},openMenu:()=>r.value=0,goToItem(c,h){let d=xc(c===4?{focus:4,id:h}:{focus:c},{resolveItems:()=>o.value,resolveActiveIndex:()=>l.value,resolveId:f=>f.id,resolveDisabled:f=>f.dataRef.disabled});a.value===""&&l.value===d||(a.value="",l.value=d)},search(c){let h=a.value!==""?0:1;a.value+=c.toLowerCase();let d=(l.value!==null?o.value.slice(l.value+h).concat(o.value.slice(0,l.value+h)):o.value).find(p=>p.dataRef.textValue.startsWith(a.value)&&!p.dataRef.disabled),f=d?o.value.indexOf(d):-1;f===-1||f===l.value||(l.value=f)},clearSearch(){a.value=""},registerItem(c,h){var d,f;let p=Array.from((f=(d=i.value)==null?void 0:d.querySelectorAll('[id^="headlessui-menu-item-"]'))!=null?f:[]).reduce((g,y,b)=>Object.assign(g,{[y.id]:b}),{});o.value=[...o.value,{id:c,dataRef:h}].sort((g,y)=>p[g.id]-p[y.id])},unregisterItem(c){let h=o.value.slice(),d=l.value!==null?h[l.value]:null,f=h.findIndex(p=>p.id===c);f!==-1&&h.splice(f,1),o.value=h,l.value=(()=>f===l.value||d===null?null:h.indexOf(d))()}};return Ht("mousedown",c=>{var h,d,f;let p=c.target,g=document.activeElement;r.value===0&&((h=A(s))!=null&&h.contains(p)||((d=A(i))!=null&&d.contains(p)||u.closeMenu(),!(g!==document.body&&(g==null?void 0:g.contains(p)))&&(c.defaultPrevented||(f=A(s))==null||f.focus({preventScroll:!0}))))}),Ue(dv,u),Is(R(()=>Ge(r.value,{[0]:0,[1]:1}))),()=>{let c={open:r.value===0};return oe({props:t,slot:c,slots:e,attrs:n,name:"Menu"})}}}),e1=G({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"}},setup(t,{attrs:e,slots:n}){let r=xa("MenuButton"),s=`headlessui-menu-button-${ke()}`;function i(u){switch(u.key){case" ":case"Enter":case"ArrowDown":u.preventDefault(),u.stopPropagation(),r.openMenu(),Ie(()=>{var c;(c=A(r.itemsRef))==null||c.focus({preventScroll:!0}),r.goToItem(0)});break;case"ArrowUp":u.preventDefault(),u.stopPropagation(),r.openMenu(),Ie(()=>{var c;(c=A(r.itemsRef))==null||c.focus({preventScroll:!0}),r.goToItem(3)});break}}function o(u){switch(u.key){case" ":u.preventDefault();break}}function a(u){t.disabled||(r.menuState.value===0?(r.closeMenu(),Ie(()=>{var c;return(c=A(r.buttonRef))==null?void 0:c.focus({preventScroll:!0})})):(u.preventDefault(),u.stopPropagation(),r.openMenu(),ZS(()=>{var c;return(c=A(r.itemsRef))==null?void 0:c.focus({preventScroll:!0})})))}let l=Nr(R(()=>({as:t.as,type:e.type})),r.buttonRef);return()=>{var u;let c={open:r.menuState.value===0},h={ref:r.buttonRef,id:s,type:l.value,"aria-haspopup":!0,"aria-controls":(u=A(r.itemsRef))==null?void 0:u.id,"aria-expanded":t.disabled?void 0:r.menuState.value===0,onKeydown:i,onKeyup:o,onClick:a};return oe({props:$($({},t),h),slot:c,attrs:e,slots:n,name:"MenuButton"})}}}),t1=G({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},setup(t,{attrs:e,slots:n}){let r=xa("MenuItems"),s=`headlessui-menu-items-${ke()}`,i=k(null);Oc({container:R(()=>A(r.itemsRef)),enabled:R(()=>r.menuState.value===0),accept(c){return c.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:c.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(c){c.setAttribute("role","none")}});function o(c){var h;switch(i.value&&clearTimeout(i.value),c.key){case" ":if(r.searchQuery.value!=="")return c.preventDefault(),c.stopPropagation(),r.search(c.key);case"Enter":if(c.preventDefault(),c.stopPropagation(),r.activeItemIndex.value!==null){let{id:d}=r.items.value[r.activeItemIndex.value];(h=document.getElementById(d))==null||h.click()}r.closeMenu(),Ie(()=>{var d;return(d=A(r.buttonRef))==null?void 0:d.focus({preventScroll:!0})});break;case"ArrowDown":return c.preventDefault(),c.stopPropagation(),r.goToItem(2);case"ArrowUp":return c.preventDefault(),c.stopPropagation(),r.goToItem(1);case"Home":case"PageUp":return c.preventDefault(),c.stopPropagation(),r.goToItem(0);case"End":case"PageDown":return c.preventDefault(),c.stopPropagation(),r.goToItem(3);case"Escape":c.preventDefault(),c.stopPropagation(),r.closeMenu(),Ie(()=>{var d;return(d=A(r.buttonRef))==null?void 0:d.focus({preventScroll:!0})});break;case"Tab":c.preventDefault(),c.stopPropagation();break;default:c.key.length===1&&(r.search(c.key),i.value=setTimeout(()=>r.clearSearch(),350));break}}function a(c){switch(c.key){case" ":c.preventDefault();break}}let l=Dn(),u=R(()=>l!==null?l.value===0:r.menuState.value===0);return()=>{var c,h;let d={open:r.menuState.value===0},f={"aria-activedescendant":r.activeItemIndex.value===null||(c=r.items.value[r.activeItemIndex.value])==null?void 0:c.id,"aria-labelledby":(h=A(r.buttonRef))==null?void 0:h.id,id:s,onKeydown:o,onKeyup:a,role:"menu",tabIndex:0,ref:r.itemsRef};return oe({props:$($({},t),f),slot:d,attrs:e,slots:n,features:3,visible:u.value,name:"MenuItems"})}}}),Al=G({name:"MenuItem",props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1}},setup(t,{slots:e,attrs:n}){let r=xa("MenuItem"),s=`headlessui-menu-item-${ke()}`,i=R(()=>r.activeItemIndex.value!==null?r.items.value[r.activeItemIndex.value].id===s:!1),o=k({disabled:t.disabled,textValue:""});He(()=>{var h,d;let f=(d=(h=document.getElementById(s))==null?void 0:h.textContent)==null?void 0:d.toLowerCase().trim();f!==void 0&&(o.value.textValue=f)}),He(()=>r.registerItem(s,o)),it(()=>r.unregisterItem(s)),Ke(()=>{r.menuState.value===0&&(!i.value||Ie(()=>{var h,d;return(d=(h=document.getElementById(s))==null?void 0:h.scrollIntoView)==null?void 0:d.call(h,{block:"nearest"})}))});function a(h){if(t.disabled)return h.preventDefault();r.closeMenu(),Ie(()=>{var d;return(d=A(r.buttonRef))==null?void 0:d.focus({preventScroll:!0})})}function l(){if(t.disabled)return r.goToItem(5);r.goToItem(4,s)}function u(){t.disabled||i.value||r.goToItem(4,s)}function c(){t.disabled||!i.value||r.goToItem(5)}return()=>{let{disabled:h}=t,d={active:i.value,disabled:h};return oe({props:gt($({},t),{id:s,role:"menuitem",tabIndex:h===!0?void 0:-1,"aria-disabled":h===!0?!0:void 0,onClick:a,onFocus:l,onPointermove:u,onMousemove:u,onPointerleave:c,onMouseleave:c}),slot:d,attrs:n,slots:e,name:"MenuItem"})}}}),fv=Symbol("PopoverContext");function Oa(t){let e=be(fv,null);if(e===null){let n=new Error(`<${t} /> is missing a parent <${r1.name} /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Oa),n}return e}var pv=Symbol("PopoverGroupContext");function mv(){return be(pv,null)}var gv=Symbol("PopoverPanelContext");function n1(){return be(gv,null)}var r1=G({name:"Popover",props:{as:{type:[Object,String],default:"div"}},setup(t,{slots:e,attrs:n}){let r=`headlessui-popover-button-${ke()}`,s=`headlessui-popover-panel-${ke()}`,i=k(1),o=k(null),a=k(null),l={popoverState:i,buttonId:r,panelId:s,panel:a,button:o,togglePopover(){i.value=Ge(i.value,{[0]:1,[1]:0})},closePopover(){i.value!==1&&(i.value=1)},close(f){l.closePopover();let p=(()=>f?f instanceof HTMLElement?f:f.value instanceof HTMLElement?A(f):A(l.button):A(l.button))();p==null||p.focus()}};Ue(fv,l),Is(R(()=>Ge(i.value,{[0]:0,[1]:1})));let u={buttonId:r,panelId:s,close(){l.closePopover()}},c=mv(),h=c==null?void 0:c.registerPopover;function d(){var f,p,g;return(g=c==null?void 0:c.isFocusWithinPopoverGroup())!=null?g:((f=A(o))==null?void 0:f.contains(document.activeElement))||((p=A(a))==null?void 0:p.contains(document.activeElement))}return Ke(()=>h==null?void 0:h(u)),Ht("focus",()=>{i.value===0&&(d()||!o||!a||l.closePopover())},!0),Ht("mousedown",f=>{var p,g,y;let b=f.target;i.value===0&&(((p=A(o))==null?void 0:p.contains(b))||((g=A(a))==null?void 0:g.contains(b))||(l.closePopover(),jS(b,1)||(f.preventDefault(),(y=A(o))==null||y.focus())))}),()=>{let f={open:i.value===0,close:l.close};return oe({props:t,slot:f,slots:e,attrs:n,name:"Popover"})}}});G({name:"PopoverButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1}},setup(t,{attrs:e,slots:n}){let r=Oa("PopoverButton"),s=mv(),i=s==null?void 0:s.closeOthers,o=n1(),a=o===null?!1:o===r.panelId,l=k(null),u=k(typeof window=="undefined"?null:document.activeElement);Ht("focus",()=>{u.value=l.value,l.value=document.activeElement},!0);let c=k(null);a||Ke(()=>{r.button.value=c.value});let h=Nr(R(()=>({as:t.as,type:e.type})),c);function d(g){var y,b,w,x;if(a){if(r.popoverState.value===1)return;switch(g.key){case" ":case"Enter":g.preventDefault(),g.stopPropagation(),r.closePopover(),(y=A(r.button))==null||y.focus();break}}else switch(g.key){case" ":case"Enter":g.preventDefault(),g.stopPropagation(),r.popoverState.value===1&&(i==null||i(r.buttonId)),r.togglePopover();break;case"Escape":if(r.popoverState.value!==0)return i==null?void 0:i(r.buttonId);if(!A(r.button)||!((b=A(r.button))!=null&&b.contains(document.activeElement)))return;g.preventDefault(),g.stopPropagation(),r.closePopover();break;case"Tab":if(r.popoverState.value!==0||!r.panel||!r.button)return;if(g.shiftKey){if(!u.value||((w=A(r.button))==null?void 0:w.contains(u.value))||((x=A(r.panel))==null?void 0:x.contains(u.value)))return;let M=$o(),j=M.indexOf(u.value);if(M.indexOf(A(r.button))>j)return;g.preventDefault(),g.stopPropagation(),ut(A(r.panel),8)}else g.preventDefault(),g.stopPropagation(),ut(A(r.panel),1);break}}function f(g){var y,b;if(!a&&(g.key===" "&&g.preventDefault(),r.popoverState.value===0&&!!r.panel&&!!r.button))switch(g.key){case"Tab":if(!u.value||((y=A(r.button))==null?void 0:y.contains(u.value))||((b=A(r.panel))==null?void 0:b.contains(u.value)))return;let w=$o(),x=w.indexOf(u.value);if(w.indexOf(A(r.button))>x)return;g.preventDefault(),g.stopPropagation(),ut(A(r.panel),8);break}}function p(){var g,y;t.disabled||(a?(r.closePopover(),(g=A(r.button))==null||g.focus()):(r.popoverState.value===1&&(i==null||i(r.buttonId)),(y=A(r.button))==null||y.focus(),r.togglePopover()))}return()=>{let g={open:r.popoverState.value===0},y=a?{ref:c,type:h.value,onKeydown:d,onClick:p}:{ref:c,id:r.buttonId,type:h.value,"aria-expanded":t.disabled?void 0:r.popoverState.value===0,"aria-controls":A(r.panel)?r.panelId:void 0,disabled:t.disabled?!0:void 0,onKeydown:d,onKeyup:f,onClick:p};return oe({props:$($({},t),y),slot:g,attrs:e,slots:n,name:"PopoverButton"})}}});G({name:"PopoverOverlay",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},setup(t,{attrs:e,slots:n}){let r=Oa("PopoverOverlay"),s=`headlessui-popover-overlay-${ke()}`,i=Dn(),o=R(()=>i!==null?i.value===0:r.popoverState.value===0);function a(){r.closePopover()}return()=>{let l={open:r.popoverState.value===0};return oe({props:gt($({},t),{id:s,"aria-hidden":!0,onClick:a}),slot:l,attrs:e,slots:n,features:3,visible:o.value,name:"PopoverOverlay"})}}});G({name:"PopoverPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},focus:{type:Boolean,default:!1}},setup(t,{attrs:e,slots:n}){let{focus:r}=t,s=Oa("PopoverPanel");Ue(gv,s.panelId),it(()=>{s.panel.value=null}),Ke(()=>{var l;if(!r||s.popoverState.value!==0||!s.panel)return;let u=document.activeElement;(l=A(s.panel))!=null&&l.contains(u)||ut(A(s.panel),1)}),Ht("keydown",l=>{var u,c;if(s.popoverState.value!==0||!A(s.panel)||l.key!=="Tab"||!document.activeElement||!((u=A(s.panel))!=null&&u.contains(document.activeElement)))return;l.preventDefault();let h=ut(A(s.panel),l.shiftKey?2:4);if(h===3)return(c=A(s.button))==null?void 0:c.focus();if(h===1){if(!A(s.button))return;let d=$o(),f=d.indexOf(A(s.button)),p=d.splice(f+1).filter(g=>{var y;return!((y=A(s.panel))!=null&&y.contains(g))});ut(p,1)===0&&ut(document.body,1)}}),Ht("focus",()=>{var l;!r||s.popoverState.value===0&&(!A(s.panel)||((l=A(s.panel))==null?void 0:l.contains(document.activeElement))||s.closePopover())},!0);let i=Dn(),o=R(()=>i!==null?i.value===0:s.popoverState.value===0);function a(l){var u,c;switch(l.key){case"Escape":if(s.popoverState.value!==0||!A(s.panel)||!((u=A(s.panel))!=null&&u.contains(document.activeElement)))return;l.preventDefault(),l.stopPropagation(),s.closePopover(),(c=A(s.button))==null||c.focus();break}}return()=>{let l={open:s.popoverState.value===0,close:s.close},u={ref:s.panel,id:s.panelId,onKeydown:a};return oe({props:$($({},t),u),slot:l,attrs:e,slots:n,features:3,visible:o.value,name:"PopoverPanel"})}}});G({name:"PopoverGroup",props:{as:{type:[Object,String],default:"div"}},setup(t,{attrs:e,slots:n}){let r=k(null),s=k([]);function i(u){let c=s.value.indexOf(u);c!==-1&&s.value.splice(c,1)}function o(u){return s.value.push(u),()=>{i(u)}}function a(){var u;let c=document.activeElement;return(u=A(r))!=null&&u.contains(c)?!0:s.value.some(h=>{var d,f;return((d=document.getElementById(h.buttonId))==null?void 0:d.contains(c))||((f=document.getElementById(h.panelId))==null?void 0:f.contains(c))})}function l(u){for(let c of s.value)c.buttonId!==u&&c.close()}return Ue(pv,{registerPopover:o,unregisterPopover:i,isFocusWithinPopoverGroup:a,closeOthers:l}),()=>oe({props:gt($({},t),{ref:r}),slot:{},attrs:e,slots:n,name:"PopoverGroup"})}});var vv=Symbol("LabelContext");function yv(){let t=be(vv,null);if(t===null){let e=new Error("You used a <Label /> component, but it is not inside a parent.");throw Error.captureStackTrace&&Error.captureStackTrace(e,yv),e}return t}function Lc({slot:t={},name:e="Label",props:n={}}={}){let r=k([]);function s(i){return r.value.push(i),()=>{let o=r.value.indexOf(i);o!==-1&&r.value.splice(o,1)}}return Ue(vv,{register:s,slot:t,name:e,props:n}),R(()=>r.value.length>0?r.value.join(" "):void 0)}G({name:"Label",props:{as:{type:[Object,String],default:"label"},passive:{type:[Boolean],default:!1}},setup(t,{slots:e,attrs:n}){let r=yv(),s=`headlessui-label-${ke()}`;return He(()=>it(r.register(s))),()=>{let{name:i="Label",slot:o={},props:a={}}=r,d=t,{passive:l}=d,u=Gt(d,["passive"]),c=gt($({},Object.entries(a).reduce((f,[p,g])=>Object.assign(f,{[p]:_e(g)}),{})),{id:s}),h=$($({},u),c);return l&&delete h.onClick,oe({props:h,slot:o,attrs:n,slots:e,name:i})}}});var bv=Symbol("RadioGroupContext");function _v(t){let e=be(bv,null);if(e===null){let n=new Error(`<${t} /> is missing a parent <RadioGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,_v),n}return e}G({name:"RadioGroup",emits:{"update:modelValue":t=>!0},props:{as:{type:[Object,String],default:"div"},disabled:{type:[Boolean],default:!1},modelValue:{type:[Object,String,Number,Boolean]}},setup(t,{emit:e,attrs:n,slots:r}){let s=k(null),i=k([]),o=Lc({name:"RadioGroupLabel"}),a=Ra({name:"RadioGroupDescription"}),l=R(()=>t.modelValue),u={options:i,value:l,disabled:R(()=>t.disabled),firstOption:R(()=>i.value.find(d=>!d.propsRef.disabled)),containsCheckedOption:R(()=>i.value.some(d=>ie(d.propsRef.value)===ie(t.modelValue))),change(d){var f;if(t.disabled||l.value===d)return!1;let p=(f=i.value.find(g=>ie(g.propsRef.value)===ie(d)))==null?void 0:f.propsRef;return p!=null&&p.disabled?!1:(e("update:modelValue",d),!0)},registerOption(d){var f;let p=Array.from((f=s.value)==null?void 0:f.querySelectorAll('[id^="headlessui-radiogroup-option-"]')).reduce((g,y,b)=>Object.assign(g,{[y.id]:b}),{});i.value.push(d),i.value.sort((g,y)=>p[g.id]-p[y.id])},unregisterOption(d){let f=i.value.findIndex(p=>p.id===d);f!==-1&&i.value.splice(f,1)}};Ue(bv,u),Oc({container:R(()=>A(s)),accept(d){return d.getAttribute("role")==="radio"?NodeFilter.FILTER_REJECT:d.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(d){d.setAttribute("role","none")}});function c(d){if(!s.value||!s.value.contains(d.target))return;let f=i.value.filter(p=>p.propsRef.disabled===!1).map(p=>p.element);switch(d.key){case"ArrowLeft":case"ArrowUp":if(d.preventDefault(),d.stopPropagation(),ut(f,18)===2){let p=i.value.find(g=>g.element===document.activeElement);p&&u.change(p.propsRef.value)}break;case"ArrowRight":case"ArrowDown":if(d.preventDefault(),d.stopPropagation(),ut(f,20)===2){let p=i.value.find(g=>g.element===document.activeElement);p&&u.change(p.propsRef.value)}break;case" ":{d.preventDefault(),d.stopPropagation();let p=i.value.find(g=>g.element===document.activeElement);p&&u.change(p.propsRef.value)}break}}let h=`headlessui-radiogroup-${ke()}`;return()=>{let y=t,{modelValue:d,disabled:f}=y,p=Gt(y,["modelValue","disabled"]),g={ref:s,id:h,role:"radiogroup","aria-labelledby":o.value,"aria-describedby":a.value,onKeydown:c};return oe({props:$($({},p),g),slot:{},attrs:n,slots:r,name:"RadioGroup"})}}});G({name:"RadioGroupOption",props:{as:{type:[Object,String],default:"div"},value:{type:[Object,String,Number,Boolean]},disabled:{type:Boolean,default:!1}},setup(t,{attrs:e,slots:n}){let r=_v("RadioGroupOption"),s=`headlessui-radiogroup-option-${ke()}`,i=Lc({name:"RadioGroupLabel"}),o=Ra({name:"RadioGroupDescription"}),a=k(null),l=R(()=>({value:t.value,disabled:t.disabled})),u=k(1);He(()=>r.registerOption({id:s,element:a,propsRef:l})),it(()=>r.unregisterOption(s));let c=R(()=>{var b;return((b=r.firstOption.value)==null?void 0:b.id)===s}),h=R(()=>r.disabled.value||t.disabled),d=R(()=>ie(r.value.value)===ie(t.value)),f=R(()=>h.value?-1:d.value||!r.containsCheckedOption.value&&c.value?0:-1);function p(){var b;!r.change(t.value)||(u.value|=2,(b=a.value)==null||b.focus())}function g(){u.value|=2}function y(){u.value&=-3}return()=>{let b=Yn(t,["value","disabled"]),w={checked:d.value,disabled:h.value,active:Boolean(u.value&2)},x={id:s,ref:a,role:"radio","aria-checked":d.value?"true":"false","aria-labelledby":i.value,"aria-describedby":o.value,"aria-disabled":h.value?!0:void 0,tabIndex:f.value,onClick:h.value?void 0:p,onFocus:h.value?void 0:g,onBlur:h.value?void 0:y};return oe({props:$($({},b),x),slot:w,attrs:e,slots:n,name:"RadioGroupOption"})}}});var wv=Symbol("GroupContext");G({name:"SwitchGroup",props:{as:{type:[Object,String],default:"template"}},setup(t,{slots:e,attrs:n}){let r=k(null),s=Lc({name:"SwitchLabel",props:{onClick(){!r.value||(r.value.click(),r.value.focus({preventScroll:!0}))}}}),i=Ra({name:"SwitchDescription"});return Ue(wv,{switchRef:r,labelledby:s,describedby:i}),()=>oe({props:t,slot:{},slots:e,attrs:n,name:"SwitchGroup"})}});G({name:"Switch",emits:{"update:modelValue":t=>!0},props:{as:{type:[Object,String],default:"button"},modelValue:{type:Boolean,default:!1}},setup(t,{emit:e,attrs:n,slots:r}){let s=be(wv,null),i=`headlessui-switch-${ke()}`;function o(){e("update:modelValue",!t.modelValue)}let a=k(null),l=s===null?a:s.switchRef,u=Nr(R(()=>({as:t.as,type:n.type})),l);function c(f){f.preventDefault(),o()}function h(f){f.key!=="Tab"&&f.preventDefault(),f.key===" "&&o()}function d(f){f.preventDefault()}return()=>{let f={checked:t.modelValue},p={id:i,ref:l,role:"switch",type:u.value,tabIndex:0,"aria-checked":t.modelValue,"aria-labelledby":s==null?void 0:s.labelledby.value,"aria-describedby":s==null?void 0:s.describedby.value,onClick:c,onKeyup:h,onKeypress:d};return oe({props:$($({},t),p),slot:f,attrs:n,slots:r,name:"Switch"})}}});var Ev=Symbol("TabsContext");function Li(t){let e=be(Ev,null);if(e===null){let n=new Error(`<${t} /> is missing a parent <TabGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Li),n}return e}G({name:"TabGroup",emits:{change:t=>!0},props:{as:{type:[Object,String],default:"template"},selectedIndex:{type:[Number],default:null},defaultIndex:{type:[Number],default:0},vertical:{type:[Boolean],default:!1},manual:{type:[Boolean],default:!1}},setup(t,{slots:e,attrs:n,emit:r}){let s=k(null),i=k([]),o=k([]),a={selectedIndex:s,orientation:R(()=>t.vertical?"vertical":"horizontal"),activation:R(()=>t.manual?"manual":"auto"),tabs:i,panels:o,setSelectedIndex(l){s.value!==l&&(s.value=l,r("change",l))},registerTab(l){i.value.includes(l)||i.value.push(l)},unregisterTab(l){let u=i.value.indexOf(l);u!==-1&&i.value.splice(u,1)},registerPanel(l){o.value.includes(l)||o.value.push(l)},unregisterPanel(l){let u=o.value.indexOf(l);u!==-1&&o.value.splice(u,1)}};return Ue(Ev,a),Ke(()=>{var l;if(a.tabs.value.length<=0||t.selectedIndex===null&&s.value!==null)return;let u=a.tabs.value.map(d=>A(d)).filter(Boolean),c=u.filter(d=>!d.hasAttribute("disabled")),h=(l=t.selectedIndex)!=null?l:t.defaultIndex;if(h<0)s.value=u.indexOf(c[0]);else if(h>a.tabs.value.length)s.value=u.indexOf(c[c.length-1]);else{let d=u.slice(0,h),f=[...u.slice(h),...d].find(p=>c.includes(p));if(!f)return;s.value=u.indexOf(f)}}),()=>{let l={selectedIndex:s.value};return oe({props:Yn(t,["selectedIndex","defaultIndex","manual","vertical","onChange"]),slot:l,slots:e,attrs:n,name:"TabGroup"})}}});G({name:"TabList",props:{as:{type:[Object,String],default:"div"}},setup(t,{attrs:e,slots:n}){let r=Li("TabList");return()=>{let s={selectedIndex:r.selectedIndex.value},i={role:"tablist","aria-orientation":r.orientation.value};return oe({props:$($({},t),i),slot:s,attrs:e,slots:n,name:"TabList"})}}});G({name:"Tab",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1}},setup(t,{attrs:e,slots:n}){let r=Li("Tab"),s=`headlessui-tabs-tab-${ke()}`,i=k();He(()=>r.registerTab(i)),it(()=>r.unregisterTab(i));let o=R(()=>r.tabs.value.indexOf(i)),a=R(()=>o.value===r.selectedIndex.value);function l(d){let f=r.tabs.value.map(p=>A(p)).filter(Boolean);if(d.key===" "||d.key==="Enter"){d.preventDefault(),d.stopPropagation(),r.setSelectedIndex(o.value);return}switch(d.key){case"Home":case"PageUp":return d.preventDefault(),d.stopPropagation(),ut(f,1);case"End":case"PageDown":return d.preventDefault(),d.stopPropagation(),ut(f,8)}return Ge(r.orientation.value,{vertical(){if(d.key==="ArrowUp")return ut(f,18);if(d.key==="ArrowDown")return ut(f,20)},horizontal(){if(d.key==="ArrowLeft")return ut(f,18);if(d.key==="ArrowRight")return ut(f,20)}})}function u(){var d;(d=A(i))==null||d.focus()}function c(){var d;t.disabled||((d=A(i))==null||d.focus(),r.setSelectedIndex(o.value))}let h=Nr(R(()=>({as:t.as,type:e.type})),i);return()=>{var d,f;let p={selected:a.value},g={ref:i,onKeydown:l,onFocus:r.activation.value==="manual"?u:c,onClick:c,id:s,role:"tab",type:h.value,"aria-controls":(f=(d=r.panels.value[o.value])==null?void 0:d.value)==null?void 0:f.id,"aria-selected":a.value,tabIndex:a.value?0:-1,disabled:t.disabled?!0:void 0};return oe({props:$($({},t),g),slot:p,attrs:e,slots:n,name:"Tab"})}}});G({name:"TabPanels",props:{as:{type:[Object,String],default:"div"}},setup(t,{slots:e,attrs:n}){let r=Li("TabPanels");return()=>{let s={selectedIndex:r.selectedIndex.value};return oe({props:t,slot:s,attrs:n,slots:e,name:"TabPanels"})}}});G({name:"TabPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},setup(t,{attrs:e,slots:n}){let r=Li("TabPanel"),s=`headlessui-tabs-panel-${ke()}`,i=k();He(()=>r.registerPanel(i)),it(()=>r.unregisterPanel(i));let o=R(()=>r.panels.value.indexOf(i)),a=R(()=>o.value===r.selectedIndex.value);return()=>{var l,u;let c={selected:a.value},h={ref:i,id:s,role:"tabpanel","aria-labelledby":(u=(l=r.tabs.value[o.value])==null?void 0:l.value)==null?void 0:u.id,tabIndex:a.value?0:-1};return oe({props:$($({},t),h),slot:c,attrs:e,slots:n,features:3,visible:a.value,name:"TabPanel"})}}});function s1(t){let e={called:!1};return(...n)=>{if(!e.called)return e.called=!0,t(...n)}}function Iv(){let t=[],e=[],n={enqueue(r){e.push(r)},requestAnimationFrame(...r){let s=requestAnimationFrame(...r);n.add(()=>cancelAnimationFrame(s))},nextFrame(...r){n.requestAnimationFrame(()=>{n.requestAnimationFrame(...r)})},setTimeout(...r){let s=setTimeout(...r);n.add(()=>clearTimeout(s))},add(r){t.push(r)},dispose(){for(let r of t.splice(0))r()},async workQueue(){for(let r of e.splice(0))await r()}};return n}function Sl(t,...e){t&&e.length>0&&t.classList.add(...e)}function io(t,...e){t&&e.length>0&&t.classList.remove(...e)}function i1(t,e){let n=Iv();if(!t)return n.dispose;let{transitionDuration:r,transitionDelay:s}=getComputedStyle(t),[i,o]=[r,s].map(a=>{let[l=0]=a.split(",").filter(Boolean).map(u=>u.includes("ms")?parseFloat(u):parseFloat(u)*1e3).sort((u,c)=>c-u);return l});return i!==0?n.setTimeout(()=>e("finished"),i+o):e("finished"),n.add(()=>e("cancelled")),n.dispose}function wf(t,e,n,r,s,i){let o=Iv(),a=i!==void 0?s1(i):()=>{};return io(t,...s),Sl(t,...e,...n),o.nextFrame(()=>{io(t,...n),Sl(t,...r),o.add(i1(t,l=>(io(t,...r,...e),Sl(t,...s),a(l))))}),o.add(()=>io(t,...e,...n,...r,...s)),o.add(()=>a("cancelled")),o.dispose}function rr(t=""){return t.split(" ").filter(e=>e.trim().length>1)}var Fc=Symbol("TransitionContext");function o1(){return be(Fc,null)!==null}function a1(){let t=be(Fc,null);if(t===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return t}function l1(){let t=be(Mc,null);if(t===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return t}var Mc=Symbol("NestingContext");function Pa(t){return"children"in t?Pa(t.children):t.value.filter(({state:e})=>e==="visible").length>0}function Tv(t){let e=k([]),n=k(!1);He(()=>n.value=!0),it(()=>n.value=!1);function r(i,o=1){let a=e.value.findIndex(({id:l})=>l===i);a!==-1&&(Ge(o,{[0](){e.value.splice(a,1)},[1](){e.value[a].state="hidden"}}),!Pa(e)&&n.value&&(t==null||t()))}function s(i){let o=e.value.find(({id:a})=>a===i);return o?o.state!=="visible"&&(o.state="visible"):e.value.push({id:i,state:"visible"}),()=>r(i,0)}return{children:e,register:s,unregister:r}}var Av=1,u1=G({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(t,{emit:e,attrs:n,slots:r}){if(!o1()&&VS())return()=>Yt(h1,gt($({},t),{onBeforeEnter:()=>e("beforeEnter"),onAfterEnter:()=>e("afterEnter"),onBeforeLeave:()=>e("beforeLeave"),onAfterLeave:()=>e("afterLeave")}),r);let s=k(null),i=k("visible"),o=R(()=>t.unmount?0:1),{show:a,appear:l}=a1(),{register:u,unregister:c}=l1(),h={value:!0},d=ke(),f={value:!1},p=Tv(()=>{f.value||(i.value="hidden",c(d),e("afterLeave"))});He(()=>{let S=u(d);it(S)}),Ke(()=>{if(o.value===1&&!!d){if(a&&i.value!=="visible"){i.value="visible";return}Ge(i.value,{hidden:()=>c(d),visible:()=>u(d)})}});let g=rr(t.enter),y=rr(t.enterFrom),b=rr(t.enterTo),w=rr(t.entered),x=rr(t.leave),M=rr(t.leaveFrom),j=rr(t.leaveTo);He(()=>{Ke(()=>{if(i.value==="visible"){let S=A(s);if(S instanceof Comment&&S.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}})});function P(S){let ae=h.value&&!l.value,Z=A(s);!Z||!(Z instanceof HTMLElement)||ae||(f.value=!0,a.value&&e("beforeEnter"),a.value||e("beforeLeave"),S(a.value?wf(Z,g,y,b,w,pe=>{f.value=!1,pe==="finished"&&e("afterEnter")}):wf(Z,x,M,j,w,pe=>{f.value=!1,pe==="finished"&&(Pa(p)||(i.value="hidden",c(d),e("afterLeave")))})))}return He(()=>{At([a,l],(S,ae,Z)=>{P(Z),h.value=!1},{immediate:!0})}),Ue(Mc,p),Is(R(()=>Ge(i.value,{visible:0,hidden:1}))),()=>{let Ae=t,{appear:S,show:ae,enter:Z,enterFrom:pe,enterTo:De,entered:H,leave:Te,leaveFrom:Ce,leaveTo:en}=Ae,Ve=Gt(Ae,["appear","show","enter","enterFrom","enterTo","entered","leave","leaveFrom","leaveTo"]);return oe({props:gt($({},Ve),{ref:s}),slot:{},slots:r,attrs:n,features:Av,visible:i.value==="visible",name:"TransitionChild"})}}}),c1=u1,h1=G({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(t,{emit:e,attrs:n,slots:r}){let s=Dn(),i=R(()=>t.show===null&&s!==null?Ge(s.value,{[0]:!0,[1]:!1}):t.show);Ke(()=>{if(![!0,!1].includes(i.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let o=k(i.value?"visible":"hidden"),a=Tv(()=>{o.value="hidden"}),l={value:!0},u={show:i,appear:R(()=>t.appear||!l.value)};return He(()=>{Ke(()=>{l.value=!1,i.value?o.value="visible":Pa(a)||(o.value="hidden")})}),Ue(Mc,a),Ue(Fc,u),()=>{let c=Yn(t,["show","appear","unmount"]),h={unmount:t.unmount};return oe({props:gt($({},h),{as:"template"}),slot:{},slots:gt($({},r),{default:()=>[Yt(c1,$($($({onBeforeEnter:()=>e("beforeEnter"),onAfterEnter:()=>e("afterEnter"),onBeforeLeave:()=>e("beforeLeave"),onAfterLeave:()=>e("afterLeave")},n),h),c),r.default)]}),attrs:{},features:Av,visible:o.value==="visible",name:"Transition"})}}});function d1(t,e){return Se(),un("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[ue("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19 9l-7 7-7-7"})])}function f1(t,e){return Se(),un("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[ue("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})])}function p1(t,e){return Se(),un("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[ue("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})])}const m1={class:"mx-auto w-full flex justify-between"},g1={class:"text-2xl font-bold flex items-center dark:text-gray-50 transition-colors"},v1=xr(" Smart Seven \u{1F1EC}\u{1F1E7} "),y1={class:"py-1"},b1={class:"flex items-center"},_1=["src"],w1=G({setup(t){const e=mi(),n=qE(),r=Ym(),s=R(()=>n.meta.title||"Home"),i=R(()=>e.user),o=R(()=>e.isAuthenticated),a=xI(),l=eI(a),u={async onClickProfile(){await e.logout(),await r.push("/auth/login")},onClickToggleDarkMode(){l()}};return(c,h)=>{var f;const d=K_("ripple");return _e(o)?(Se(),Je("header",h0(ba({key:0},c.$attrs)),[ye("div",m1,[ye("div",g1,Ci(_e(s)),1),ue(_e(JS),{as:"div",class:"relative inline-block text-left"},{default:ot(()=>[ye("div",null,[ue(_e(e1),{class:"inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"},{default:ot(()=>[v1,ue(_e(d1),{class:"-mr-1 ml-2 h-5 w-5","aria-hidden":"true"})]),_:1})]),ue(ui,{"enter-active-class":"transition ease-out duration-100","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:ot(()=>[ue(_e(t1),{class:"origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"},{default:ot(()=>[ye("div",y1,[ue(_e(Al),null,{default:ot(({active:p})=>[ye("a",{href:"#",class:_n([p?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"])},"Smart Seven \u{1F1EC}\u{1F1E7}",2)]),_:1}),ue(_e(Al),null,{default:ot(({active:p})=>[ye("a",{href:"#",class:_n([p?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"])},"Smart Seven Ireland \u{1F1EE}\u{1F1EA}",2)]),_:1}),ue(_e(Al),null,{default:ot(({active:p})=>[ye("a",{href:"#",class:_n([p?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"])},"Another podcast \u{1F916}",2)]),_:1})])]),_:1})]),_:1})]),_:1}),ye("div",b1,[ye("button",{type:"button",class:"round-btn mr-2 px-1 py-1",onClick:h[0]||(h[0]=pc((...p)=>u.onClickToggleDarkMode&&u.onClickToggleDarkMode(...p),["prevent","stop"]))},[ue(ui,{mode:"out-in",name:"fade"},{default:ot(()=>[_e(a)?(Se(),un(_e(f1),{key:0,class:"dark:text-white bg-transparent transition-colors"})):(Se(),un(_e(p1),{key:1,class:"dark:text-white bg-transparent transition-colors"}))]),_:1})]),ki((Se(),Je("button",{type:"button",class:"round-btn",onClick:h[1]||(h[1]=(...p)=>u.onClickProfile&&u.onClickProfile(...p))},[ye("img",{class:"rounded-full shadow-lg",alt:"profile image",src:(f=_e(i))==null?void 0:f.thumbnailImage},null,8,_1)])),[[d]])])])],16)):Q_("",!0)}}});var E1=Cn(w1,[["__scopeId","data-v-55995b9d"]]);const I1={class:"relative w-full h-full"},T1={class:"mx-auto w-full h-full"},A1=G({setup(t){return(e,n)=>{const r=cc("router-view");return Se(),Je("div",I1,[ue(E1),ye("main",T1,[ue(r)])])}}});let S1=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce((e,n)=>(n&=63,n<36?e+=n.toString(36):n<62?e+=(n-26).toString(36).toUpperCase():n>62?e+="-":e+="_",e),"");var C1=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},V,Bc=Bc||{},te=C1||self;function Uo(){}function yu(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Fi(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function k1(t){return Object.prototype.hasOwnProperty.call(t,Cl)&&t[Cl]||(t[Cl]=++D1)}var Cl="closure_uid_"+(1e9*Math.random()>>>0),D1=0;function R1(t,e,n){return t.call.apply(t.bind,arguments)}function x1(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function ct(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ct=R1:ct=x1,ct.apply(null,arguments)}function oo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function mt(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function Zn(){this.s=this.s,this.o=this.o}var O1=0,P1={};Zn.prototype.s=!1;Zn.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),O1!=0)){var t=k1(this);delete P1[t]}};Zn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Sv=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Cv=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,s=typeof t=="string"?t.split(""):t;for(let i=0;i<r;i++)i in s&&e.call(n,s[i],i,t)};function N1(t){e:{var e=AC;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let s=0;s<n;s++)if(s in r&&e.call(void 0,r[s],s,t)){e=s;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function Ef(t){return Array.prototype.concat.apply([],arguments)}function $c(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Vo(t){return/^[\s\xa0]*$/.test(t)}var If=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Et(t,e){return t.indexOf(e)!=-1}function kl(t,e){return t<e?-1:t>e?1:0}var It;e:{var Tf=te.navigator;if(Tf){var Af=Tf.userAgent;if(Af){It=Af;break e}}It=""}function Uc(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function kv(t){const e={};for(const n in t)e[n]=t[n];return e}var Sf="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Dv(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<Sf.length;i++)n=Sf[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Vc(t){return Vc[" "](t),t}Vc[" "]=Uo;function L1(t){var e=B1;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var F1=Et(It,"Opera"),us=Et(It,"Trident")||Et(It,"MSIE"),Rv=Et(It,"Edge"),bu=Rv||us,xv=Et(It,"Gecko")&&!(Et(It.toLowerCase(),"webkit")&&!Et(It,"Edge"))&&!(Et(It,"Trident")||Et(It,"MSIE"))&&!Et(It,"Edge"),M1=Et(It.toLowerCase(),"webkit")&&!Et(It,"Edge");function Ov(){var t=te.document;return t?t.documentMode:void 0}var jo;e:{var Dl="",Rl=function(){var t=It;if(xv)return/rv:([^\);]+)(\)|;)/.exec(t);if(Rv)return/Edge\/([\d\.]+)/.exec(t);if(us)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(M1)return/WebKit\/(\S+)/.exec(t);if(F1)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Rl&&(Dl=Rl?Rl[1]:""),us){var xl=Ov();if(xl!=null&&xl>parseFloat(Dl)){jo=String(xl);break e}}jo=Dl}var B1={};function $1(){return L1(function(){let t=0;const e=If(String(jo)).split("."),n=If("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var s=e[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s[0].length==0&&i[0].length==0)break;t=kl(s[1].length==0?0:parseInt(s[1],10),i[1].length==0?0:parseInt(i[1],10))||kl(s[2].length==0,i[2].length==0)||kl(s[2],i[2]),s=s[3],i=i[3]}while(t==0)}return 0<=t})}var _u;if(te.document&&us){var Cf=Ov();_u=Cf||parseInt(jo,10)||void 0}else _u=void 0;var U1=_u,V1=function(){if(!te.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{te.addEventListener("test",Uo,e),te.removeEventListener("test",Uo,e)}catch{}return t}();function bt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}bt.prototype.h=function(){this.defaultPrevented=!0};function gi(t,e){if(bt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(xv){e:{try{Vc(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:j1[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&gi.Z.h.call(this)}}mt(gi,bt);var j1={2:"touch",3:"pen",4:"mouse"};gi.prototype.h=function(){gi.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Mi="closure_listenable_"+(1e6*Math.random()|0),z1=0;function q1(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=s,this.key=++z1,this.ca=this.fa=!1}function Na(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function La(t){this.src=t,this.g={},this.h=0}La.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Eu(t,e,r,s);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new q1(e,this.src,i,!!r,s),e.fa=n,t.push(e)),e};function wu(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=Sv(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Na(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Eu(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==r)return s}return-1}var jc="closure_lm_"+(1e6*Math.random()|0),Ol={};function Pv(t,e,n,r,s){if(r&&r.once)return Lv(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Pv(t,e[i],n,r,s);return null}return n=Hc(n),t&&t[Mi]?t.N(e,n,Fi(r)?!!r.capture:!!r,s):Nv(t,e,n,!1,r,s)}function Nv(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=Fi(s)?!!s.capture:!!s,a=qc(t);if(a||(t[jc]=a=new La(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=H1(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)V1||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(Mv(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function H1(){function t(n){return e.call(t.src,t.listener,n)}var e=K1;return t}function Lv(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Lv(t,e[i],n,r,s);return null}return n=Hc(n),t&&t[Mi]?t.O(e,n,Fi(r)?!!r.capture:!!r,s):Nv(t,e,n,!0,r,s)}function Fv(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)Fv(t,e[i],n,r,s);else r=Fi(r)?!!r.capture:!!r,n=Hc(n),t&&t[Mi]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Eu(i,n,r,s),-1<n&&(Na(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=qc(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Eu(e,n,r,s)),(n=-1<t?e[t]:null)&&zc(n))}function zc(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[Mi])wu(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Mv(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=qc(e))?(wu(n,t),n.h==0&&(n.src=null,e[jc]=null)):Na(t)}}}function Mv(t){return t in Ol?Ol[t]:Ol[t]="on"+t}function K1(t,e){if(t.ca)t=!0;else{e=new gi(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&zc(t),t=n.call(r,e)}return t}function qc(t){return t=t[jc],t instanceof La?t:null}var Pl="__closure_events_fn_"+(1e9*Math.random()>>>0);function Hc(t){return typeof t=="function"?t:(t[Pl]||(t[Pl]=function(e){return t.handleEvent(e)}),t[Pl])}function rt(){Zn.call(this),this.i=new La(this),this.P=this,this.I=null}mt(rt,Zn);rt.prototype[Mi]=!0;rt.prototype.removeEventListener=function(t,e,n,r){Fv(this,t,e,n,r)};function ht(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new bt(e,t);else if(e instanceof bt)e.target=e.target||t;else{var s=e;e=new bt(r,t),Dv(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=ao(o,r,!0,e)&&s}if(o=e.g=t,s=ao(o,r,!0,e)&&s,s=ao(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=ao(o,r,!1,e)&&s}rt.prototype.M=function(){if(rt.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Na(n[r]);delete t.g[e],t.h--}}this.I=null};rt.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};rt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function ao(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,l=o.ia||o.src;o.fa&&wu(t.i,o),s=a.call(l,r)!==!1&&s}}return s&&!r.defaultPrevented}var Kc=te.JSON.stringify;function W1(){var t=$v;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class G1{constructor(){this.h=this.g=null}add(e,n){const r=Bv.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Bv=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new X1,t=>t.reset());class X1{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Q1(t){te.setTimeout(()=>{throw t},0)}function Wc(t,e){Iu||Y1(),Tu||(Iu(),Tu=!0),$v.add(t,e)}var Iu;function Y1(){var t=te.Promise.resolve(void 0);Iu=function(){t.then(Z1)}}var Tu=!1,$v=new G1;function Z1(){for(var t;t=W1();){try{t.h.call(t.g)}catch(n){Q1(n)}var e=Bv;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Tu=!1}function Fa(t,e){rt.call(this),this.h=t||1,this.g=e||te,this.j=ct(this.kb,this),this.l=Date.now()}mt(Fa,rt);V=Fa.prototype;V.da=!1;V.S=null;V.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),ht(this,"tick"),this.da&&(Gc(this),this.start()))}};V.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Gc(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}V.M=function(){Fa.Z.M.call(this),Gc(this),delete this.g};function Xc(t,e,n){if(typeof t=="function")n&&(t=ct(t,n));else if(t&&typeof t.handleEvent=="function")t=ct(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:te.setTimeout(t,e||0)}function Uv(t){t.g=Xc(()=>{t.g=null,t.i&&(t.i=!1,Uv(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class J1 extends Zn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Uv(this)}M(){super.M(),this.g&&(te.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function vi(t){Zn.call(this),this.h=t,this.g={}}mt(vi,Zn);var kf=[];function Vv(t,e,n,r){Array.isArray(n)||(n&&(kf[0]=n.toString()),n=kf);for(var s=0;s<n.length;s++){var i=Pv(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function jv(t){Uc(t.g,function(e,n){this.g.hasOwnProperty(n)&&zc(e)},t),t.g={}}vi.prototype.M=function(){vi.Z.M.call(this),jv(this)};vi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ma(){this.g=!0}Ma.prototype.Aa=function(){this.g=!1};function eC(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function tC(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Gr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+rC(t,n)+(r?" "+r:"")})}function nC(t,e){t.info(function(){return"TIMEOUT: "+e})}Ma.prototype.info=function(){};function rC(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Kc(n)}catch{return e}}var Lr={},Df=null;function Ba(){return Df=Df||new rt}Lr.Ma="serverreachability";function zv(t){bt.call(this,Lr.Ma,t)}mt(zv,bt);function yi(t){const e=Ba();ht(e,new zv(e,t))}Lr.STAT_EVENT="statevent";function qv(t,e){bt.call(this,Lr.STAT_EVENT,t),this.stat=e}mt(qv,bt);function Tt(t){const e=Ba();ht(e,new qv(e,t))}Lr.Na="timingevent";function Hv(t,e){bt.call(this,Lr.Na,t),this.size=e}mt(Hv,bt);function Bi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return te.setTimeout(function(){t()},e)}var $a={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Kv={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Qc(){}Qc.prototype.h=null;function Rf(t){return t.h||(t.h=t.i())}function Wv(){}var $i={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Yc(){bt.call(this,"d")}mt(Yc,bt);function Zc(){bt.call(this,"c")}mt(Zc,bt);var Au;function Ua(){}mt(Ua,Qc);Ua.prototype.g=function(){return new XMLHttpRequest};Ua.prototype.i=function(){return{}};Au=new Ua;function Ui(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new vi(this),this.P=sC,t=bu?125:void 0,this.W=new Fa(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Gv}function Gv(){this.i=null,this.g="",this.h=!1}var sC=45e3,Su={},zo={};V=Ui.prototype;V.setTimeout=function(t){this.P=t};function Cu(t,e,n){t.K=1,t.v=ja(An(e)),t.s=n,t.U=!0,Xv(t,null)}function Xv(t,e){t.F=Date.now(),Vi(t),t.A=An(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),ny(n.h,"t",r),t.C=0,n=t.l.H,t.h=new Gv,t.g=Ey(t.l,n?e:null,!t.s),0<t.O&&(t.L=new J1(ct(t.Ia,t,t.g),t.O)),Vv(t.V,t.g,"readystatechange",t.gb),e=t.H?kv(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),yi(1),eC(t.j,t.u,t.A,t.m,t.X,t.s)}V.gb=function(t){t=t.target;const e=this.L;e&&bn(t)==3?e.l():this.Ia(t)};V.Ia=function(t){try{if(t==this.g)e:{const c=bn(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>c)&&(c!=3||bu||this.g&&(this.h.h||this.g.ga()||Nf(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?yi(3):yi(2)),Va(this);var n=this.g.ba();this.N=n;t:if(Qv(this)){var r=Nf(this.g);t="";var s=r.length,i=bn(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){cr(this),Zs(this);var o="";break t}this.h.i=new te.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,tC(this.j,this.u,this.A,this.m,this.X,c,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Vo(a)){var u=a;break t}}u=null}if(n=u)Gr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,ku(this,n);else{this.i=!1,this.o=3,Tt(12),cr(this),Zs(this);break e}}this.U?(Yv(this,c,o),bu&&this.i&&c==3&&(Vv(this.V,this.W,"tick",this.fb),this.W.start())):(Gr(this.j,this.m,o,null),ku(this,o)),c==4&&cr(this),this.i&&!this.I&&(c==4?yy(this.l,this):(this.i=!1,Vi(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Tt(12)):(this.o=0,Tt(13)),cr(this),Zs(this)}}}catch{}finally{}};function Qv(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function Yv(t,e,n){let r=!0,s;for(;!t.I&&t.C<n.length;)if(s=iC(t,n),s==zo){e==4&&(t.o=4,Tt(14),r=!1),Gr(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Su){t.o=4,Tt(15),Gr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Gr(t.j,t.m,s,null),ku(t,s);Qv(t)&&s!=zo&&s!=Su&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Tt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),ah(e),e.L=!0,Tt(11))):(Gr(t.j,t.m,n,"[Invalid Chunked Response]"),cr(t),Zs(t))}V.fb=function(){if(this.g){var t=bn(this.g),e=this.g.ga();this.C<e.length&&(Va(this),Yv(this,t,e),this.i&&t!=4&&Vi(this))}};function iC(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?zo:(n=Number(e.substring(n,r)),isNaN(n)?Su:(r+=1,r+n>e.length?zo:(e=e.substr(r,n),t.C=r+n,e)))}V.cancel=function(){this.I=!0,cr(this)};function Vi(t){t.Y=Date.now()+t.P,Zv(t,t.P)}function Zv(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Bi(ct(t.eb,t),e)}function Va(t){t.B&&(te.clearTimeout(t.B),t.B=null)}V.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(nC(this.j,this.A),this.K!=2&&(yi(3),Tt(17)),cr(this),this.o=2,Zs(this)):Zv(this,this.Y-t)};function Zs(t){t.l.G==0||t.I||yy(t.l,t)}function cr(t){Va(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Gc(t.W),jv(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function ku(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Du(n.i,t))){if(n.I=t.N,!t.J&&Du(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Wo(n),Ha(n);else break e;oh(n),Tt(18)}}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&n.A==0&&!n.v&&(n.v=Bi(ct(n.ab,n),6e3));if(1>=iy(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else hr(n,11)}else if((t.J||n.g==t)&&Wo(n),!Vo(e))for(s=n.Ca.g.parse(e),e=0;e<s.length;e++){let u=s[e];if(n.U=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.J=u[1],n.la=u[2];const c=u[3];c!=null&&(n.ma=c,n.h.info("VER="+n.ma));const h=u[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const p=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var i=r.i;!i.g&&(Et(p,"spdy")||Et(p,"quic")||Et(p,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(th(i,i.h),i.h=null))}if(r.D){const g=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;g&&(r.sa=g,ze(r.F,r.D,g))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=wy(r,r.H?r.la:null,r.W),o.J){oy(r.i,o);var a=o,l=r.K;l&&a.setTimeout(l),a.B&&(Va(a),Vi(a)),r.g=o}else gy(r);0<n.l.length&&Ka(n)}else u[0]!="stop"&&u[0]!="close"||hr(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?hr(n,7):ih(n):u[0]!="noop"&&n.j&&n.j.wa(u),n.A=0)}}yi(4)}catch{}}function oC(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(yu(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function Jc(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(yu(t)||typeof t=="string")Cv(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(yu(t)||typeof t=="string"){n=[];for(var r=t.length,s=0;s<r;s++)n.push(s)}else for(s in n=[],r=0,t)n[r++]=s;r=oC(t),s=r.length;for(var i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}}function As(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof As)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}V=As.prototype;V.R=function(){eh(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};V.T=function(){return eh(this),this.g.concat()};function eh(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];wr(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var s={};for(n=e=0;e<t.g.length;)r=t.g[e],wr(s,r)||(t.g[n++]=r,s[r]=1),e++;t.g.length=n}}V.get=function(t,e){return wr(this.h,t)?this.h[t]:e};V.set=function(t,e){wr(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};V.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var s=n[r],i=this.get(s);t.call(e,i,s,this)}};function wr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var Jv=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function aC(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Er(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Er){this.g=e!==void 0?e:t.g,qo(this,t.j),this.s=t.s,Ho(this,t.i),Ko(this,t.m),this.l=t.l,e=t.h;var n=new bi;n.i=e.i,e.g&&(n.g=new As(e.g),n.h=e.h),xf(this,n),this.o=t.o}else t&&(n=String(t).match(Jv))?(this.g=!!e,qo(this,n[1]||"",!0),this.s=Js(n[2]||""),Ho(this,n[3]||"",!0),Ko(this,n[4]),this.l=Js(n[5]||"",!0),xf(this,n[6]||"",!0),this.o=Js(n[7]||"")):(this.g=!!e,this.h=new bi(null,this.g))}Er.prototype.toString=function(){var t=[],e=this.j;e&&t.push(js(e,Of,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(js(e,Of,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(js(n,n.charAt(0)=="/"?dC:hC,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",js(n,pC)),t.join("")};function An(t){return new Er(t)}function qo(t,e,n){t.j=n?Js(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ho(t,e,n){t.i=n?Js(e,!0):e}function Ko(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function xf(t,e,n){e instanceof bi?(t.h=e,mC(t.h,t.g)):(n||(e=js(e,fC)),t.h=new bi(e,t.g))}function ze(t,e,n){t.h.set(e,n)}function ja(t){return ze(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function lC(t){return t instanceof Er?An(t):new Er(t,void 0)}function uC(t,e,n,r){var s=new Er(null,void 0);return t&&qo(s,t),e&&Ho(s,e),n&&Ko(s,n),r&&(s.l=r),s}function Js(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function js(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,cC),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function cC(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Of=/[#\/\?@]/g,hC=/[#\?:]/g,dC=/[#\?]/g,fC=/[#\?@]/g,pC=/#/g;function bi(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Jn(t){t.g||(t.g=new As,t.h=0,t.i&&aC(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}V=bi.prototype;V.add=function(t,e){Jn(this),this.i=null,t=Ss(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function ey(t,e){Jn(t),e=Ss(t,e),wr(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,wr(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&eh(t)))}function ty(t,e){return Jn(t),e=Ss(t,e),wr(t.g.h,e)}V.forEach=function(t,e){Jn(this),this.g.forEach(function(n,r){Cv(n,function(s){t.call(e,s,r,this)},this)},this)};V.T=function(){Jn(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var s=t[r],i=0;i<s.length;i++)n.push(e[r]);return n};V.R=function(t){Jn(this);var e=[];if(typeof t=="string")ty(this,t)&&(e=Ef(e,this.g.get(Ss(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Ef(e,t[n])}return e};V.set=function(t,e){return Jn(this),this.i=null,t=Ss(this,t),ty(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};V.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function ny(t,e,n){ey(t,e),0<n.length&&(t.i=null,t.g.set(Ss(t,e),$c(n)),t.h+=n.length)}V.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],s=encodeURIComponent(String(r));r=this.R(r);for(var i=0;i<r.length;i++){var o=s;r[i]!==""&&(o+="="+encodeURIComponent(String(r[i]))),t.push(o)}}return this.i=t.join("&")};function Ss(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function mC(t,e){e&&!t.j&&(Jn(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(ey(this,r),ny(this,s,n))},t)),t.j=e}var gC=class{constructor(t,e){this.h=t,this.g=e}};function ry(t){this.l=t||vC,te.PerformanceNavigationTiming?(t=te.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(te.g&&te.g.Ea&&te.g.Ea()&&te.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var vC=10;function sy(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function iy(t){return t.h?1:t.g?t.g.size:0}function Du(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function th(t,e){t.g?t.g.add(e):t.h=e}function oy(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}ry.prototype.cancel=function(){if(this.i=ay(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function ay(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return $c(t.i)}function nh(){}nh.prototype.stringify=function(t){return te.JSON.stringify(t,void 0)};nh.prototype.parse=function(t){return te.JSON.parse(t,void 0)};function yC(){this.g=new nh}function bC(t,e,n){const r=n||"";try{Jc(t,function(s,i){let o=s;Fi(s)&&(o=Kc(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function _C(t,e){const n=new Ma;if(te.Image){const r=new Image;r.onload=oo(lo,n,r,"TestLoadImage: loaded",!0,e),r.onerror=oo(lo,n,r,"TestLoadImage: error",!1,e),r.onabort=oo(lo,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=oo(lo,n,r,"TestLoadImage: timeout",!1,e),te.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function lo(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function ji(t){this.l=t.$b||null,this.j=t.ib||!1}mt(ji,Qc);ji.prototype.g=function(){return new za(this.l,this.j)};ji.prototype.i=function(t){return function(){return t}}({});function za(t,e){rt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=rh,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}mt(za,rt);var rh=0;V=za.prototype;V.open=function(t,e){if(this.readyState!=rh)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,_i(this)};V.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||te).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};V.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,zi(this)),this.readyState=rh};V.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,_i(this)),this.g&&(this.readyState=3,_i(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof te.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ly(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function ly(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}V.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?zi(this):_i(this),this.readyState==3&&ly(this)}};V.Ua=function(t){this.g&&(this.response=this.responseText=t,zi(this))};V.Ta=function(t){this.g&&(this.response=t,zi(this))};V.ha=function(){this.g&&zi(this)};function zi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,_i(t)}V.setRequestHeader=function(t,e){this.v.append(t,e)};V.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};V.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function _i(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(za.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var wC=te.JSON.parse;function Ze(t){rt.call(this),this.headers=new As,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=uy,this.K=this.L=!1}mt(Ze,rt);var uy="",EC=/^https?$/i,IC=["POST","PUT"];V=Ze.prototype;V.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Au.g(),this.C=this.u?Rf(this.u):Rf(Au),this.g.onreadystatechange=ct(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Pf(this,i);return}t=n||"";const s=new As(this.headers);r&&Jc(r,function(i,o){s.set(o,i)}),r=N1(s.T()),n=te.FormData&&t instanceof te.FormData,!(0<=Sv(IC,e))||r||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{dy(this),0<this.B&&((this.K=TC(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ct(this.pa,this)):this.A=Xc(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Pf(this,i)}};function TC(t){return us&&$1()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function AC(t){return t.toLowerCase()=="content-type"}V.pa=function(){typeof Bc!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ht(this,"timeout"),this.abort(8))};function Pf(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,cy(t),qa(t)}function cy(t){t.D||(t.D=!0,ht(t,"complete"),ht(t,"error"))}V.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ht(this,"complete"),ht(this,"abort"),qa(this))};V.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),qa(this,!0)),Ze.Z.M.call(this)};V.Fa=function(){this.s||(this.F||this.v||this.l?hy(this):this.cb())};V.cb=function(){hy(this)};function hy(t){if(t.h&&typeof Bc!="undefined"&&(!t.C[1]||bn(t)!=4||t.ba()!=2)){if(t.v&&bn(t)==4)Xc(t.Fa,0,t);else if(ht(t,"readystatechange"),bn(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var s=String(t.H).match(Jv)[1]||null;if(!s&&te.self&&te.self.location){var i=te.self.location.protocol;s=i.substr(0,i.length-1)}r=!EC.test(s?s.toLowerCase():"")}n=r}if(n)ht(t,"complete"),ht(t,"success");else{t.m=6;try{var o=2<bn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",cy(t)}}finally{qa(t)}}}}function qa(t,e){if(t.g){dy(t);const n=t.g,r=t.C[0]?Uo:null;t.g=null,t.C=null,e||ht(t,"ready");try{n.onreadystatechange=r}catch{}}}function dy(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(te.clearTimeout(t.A),t.A=null)}function bn(t){return t.g?t.g.readyState:0}V.ba=function(){try{return 2<bn(this)?this.g.status:-1}catch{return-1}};V.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};V.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),wC(e)}};function Nf(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case uy:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}V.Da=function(){return this.m};V.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function SC(t){let e="";return Uc(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function sh(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=SC(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ze(t,e,n))}function Bs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function fy(t){this.za=0,this.l=[],this.h=new Ma,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Bs("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Bs("baseRetryDelayMs",5e3,t),this.$a=Bs("retryDelaySeedMs",1e4,t),this.Ya=Bs("forwardChannelMaxRetries",2,t),this.ra=Bs("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new ry(t&&t.concurrentRequestLimit),this.Ca=new yC,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}V=fy.prototype;V.ma=8;V.G=1;function ih(t){if(py(t),t.G==3){var e=t.V++,n=An(t.F);ze(n,"SID",t.J),ze(n,"RID",e),ze(n,"TYPE","terminate"),qi(t,n),e=new Ui(t,t.h,e,void 0),e.K=2,e.v=ja(An(n)),n=!1,te.navigator&&te.navigator.sendBeacon&&(n=te.navigator.sendBeacon(e.v.toString(),"")),!n&&te.Image&&(new Image().src=e.v,n=!0),n||(e.g=Ey(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Vi(e)}_y(t)}V.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function Ha(t){t.g&&(ah(t),t.g.cancel(),t.g=null)}function py(t){Ha(t),t.u&&(te.clearTimeout(t.u),t.u=null),Wo(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&te.clearTimeout(t.m),t.m=null)}function Nl(t,e){t.l.push(new gC(t.Za++,e)),t.G==3&&Ka(t)}function Ka(t){sy(t.i)||t.m||(t.m=!0,Wc(t.Ha,t),t.C=0)}function CC(t,e){return iy(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=Bi(ct(t.Ha,t,e),by(t,t.C)),t.C++,!0)}V.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new Ui(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=kv(i),Dv(i,this.P)):i=this.P),this.o===null&&(s.H=i),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=my(this,s,e),n=An(this.F),ze(n,"RID",t),ze(n,"CVER",22),this.D&&ze(n,"X-HTTP-Session-Id",this.D),qi(this,n),this.o&&i&&sh(n,this.o,i),th(this.i,s),this.Ra&&ze(n,"TYPE","init"),this.ja?(ze(n,"$req",e),ze(n,"SID","null"),s.$=!0,Cu(s,n,null)):Cu(s,n,e),this.G=2}}else this.G==3&&(t?Lf(this,t):this.l.length==0||sy(this.i)||Lf(this))};function Lf(t,e){var n;e?n=e.m:n=t.V++;const r=An(t.F);ze(r,"SID",t.J),ze(r,"RID",n),ze(r,"AID",t.U),qi(t,r),t.o&&t.s&&sh(r,t.o,t.s),n=new Ui(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=my(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),th(t.i,n),Cu(n,r,e)}function qi(t,e){t.j&&Jc({},function(n,r){ze(e,r,n)})}function my(t,e,n){n=Math.min(t.l.length,n);var r=t.j?ct(t.j.Oa,t.j,t):null;e:{var s=t.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let l=0;l<n;l++){let u=s[l].h;const c=s[l].g;if(u-=i,0>u)i=Math.max(0,s[l].h-100),a=!1;else try{bC(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function gy(t){t.g||t.u||(t.Y=1,Wc(t.Ga,t),t.A=0)}function oh(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=Bi(ct(t.Ga,t),by(t,t.A)),t.A++,!0)}V.Ga=function(){if(this.u=null,vy(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Bi(ct(this.bb,this),t)}};V.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Tt(10),Ha(this),vy(this))};function ah(t){t.B!=null&&(te.clearTimeout(t.B),t.B=null)}function vy(t){t.g=new Ui(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=An(t.oa);ze(e,"RID","rpc"),ze(e,"SID",t.J),ze(e,"CI",t.N?"0":"1"),ze(e,"AID",t.U),qi(t,e),ze(e,"TYPE","xmlhttp"),t.o&&t.s&&sh(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=ja(An(e)),n.s=null,n.U=!0,Xv(n,t)}V.ab=function(){this.v!=null&&(this.v=null,Ha(this),oh(this),Tt(19))};function Wo(t){t.v!=null&&(te.clearTimeout(t.v),t.v=null)}function yy(t,e){var n=null;if(t.g==e){Wo(t),ah(t),t.g=null;var r=2}else if(Du(t.i,e))n=e.D,oy(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;r=Ba(),ht(r,new Hv(r,n,e,s)),Ka(t)}else gy(t);else if(s=e.o,s==3||s==0&&0<t.I||!(r==1&&CC(t,e)||r==2&&oh(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:hr(t,5);break;case 4:hr(t,10);break;case 3:hr(t,6);break;default:hr(t,2)}}}function by(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function hr(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=ct(t.jb,t);n||(n=new Er("//www.google.com/images/cleardot.gif"),te.location&&te.location.protocol=="http"||qo(n,"https"),ja(n)),_C(n.toString(),r)}else Tt(2);t.G=0,t.j&&t.j.va(e),_y(t),py(t)}V.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Tt(2)):(this.h.info("Failed to ping google.com"),Tt(1))};function _y(t){t.G=0,t.I=-1,t.j&&((ay(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,$c(t.l),t.l.length=0),t.j.ua())}function wy(t,e,n){let r=lC(n);if(r.i!="")e&&Ho(r,e+"."+r.i),Ko(r,r.m);else{const s=te.location;r=uC(s.protocol,e?e+"."+s.hostname:s.hostname,+s.port,n)}return t.aa&&Uc(t.aa,function(s,i){ze(r,i,s)}),e=t.D,n=t.sa,e&&n&&ze(r,e,n),ze(r,"VER",t.ma),qi(t,r),r}function Ey(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Ze(new ji({ib:!0})):new Ze(t.qa),e.L=t.H,e}function Iy(){}V=Iy.prototype;V.xa=function(){};V.wa=function(){};V.va=function(){};V.ua=function(){};V.Oa=function(){};function Go(){if(us&&!(10<=Number(U1)))throw Error("Environmental error: no available transport.")}Go.prototype.g=function(t,e){return new Bt(t,e)};function Bt(t,e){rt.call(this),this.g=new fy(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Vo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Vo(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Cs(this)}mt(Bt,rt);Bt.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Wc(ct(t.hb,t,e))),Tt(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=wy(t,null,t.W),Ka(t)};Bt.prototype.close=function(){ih(this.g)};Bt.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,Nl(this.g,e)}else this.v?(e={},e.__data__=Kc(t),Nl(this.g,e)):Nl(this.g,t)};Bt.prototype.M=function(){this.g.j=null,delete this.j,ih(this.g),delete this.g,Bt.Z.M.call(this)};function Ty(t){Yc.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}mt(Ty,Yc);function Ay(){Zc.call(this),this.status=1}mt(Ay,Zc);function Cs(t){this.g=t}mt(Cs,Iy);Cs.prototype.xa=function(){ht(this.g,"a")};Cs.prototype.wa=function(t){ht(this.g,new Ty(t))};Cs.prototype.va=function(t){ht(this.g,new Ay(t))};Cs.prototype.ua=function(){ht(this.g,"b")};Go.prototype.createWebChannel=Go.prototype.g;Bt.prototype.send=Bt.prototype.u;Bt.prototype.open=Bt.prototype.m;Bt.prototype.close=Bt.prototype.close;$a.NO_ERROR=0;$a.TIMEOUT=8;$a.HTTP_ERROR=6;Kv.COMPLETE="complete";Wv.EventType=$i;$i.OPEN="a";$i.CLOSE="b";$i.ERROR="c";$i.MESSAGE="d";rt.prototype.listen=rt.prototype.N;Ze.prototype.listenOnce=Ze.prototype.O;Ze.prototype.getLastError=Ze.prototype.La;Ze.prototype.getLastErrorCode=Ze.prototype.Da;Ze.prototype.getStatus=Ze.prototype.ba;Ze.prototype.getResponseJson=Ze.prototype.Qa;Ze.prototype.getResponseText=Ze.prototype.ga;Ze.prototype.send=Ze.prototype.ea;var kC=function(){return new Go},DC=function(){return Ba()},Ll=$a,RC=Kv,xC=Lr,Ff={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},OC=ji,uo=Wv,PC=Ze;const Mf="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ct.UNAUTHENTICATED=new Ct(null),Ct.GOOGLE_CREDENTIALS=new Ct("google-credentials-uid"),Ct.FIRST_PARTY=new Ct("first-party-uid"),Ct.MOCK_USER=new Ct("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ks="9.6.11";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir=new Aa("@firebase/firestore");function Bf(){return Ir.logLevel}function K(t,...e){if(Ir.logLevel<=we.DEBUG){const n=e.map(lh);Ir.debug(`Firestore (${ks}): ${t}`,...n)}}function Gn(t,...e){if(Ir.logLevel<=we.ERROR){const n=e.map(lh);Ir.error(`Firestore (${ks}): ${t}`,...n)}}function $f(t,...e){if(Ir.logLevel<=we.WARN){const n=e.map(lh);Ir.warn(`Firestore (${ks}): ${t}`,...n)}}function lh(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(t="Unexpected state"){const e=`FIRESTORE (${ks}) INTERNAL ASSERTION FAILED: `+t;throw Gn(e),new Error(e)}function Me(t,e){t||se()}function le(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class J extends kn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class LC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ct.UNAUTHENTICATED))}shutdown(){}}class FC{constructor(e){this.t=e,this.currentUser=Ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new vr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new vr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{K("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(K("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new vr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(K("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Me(typeof r.accessToken=="string"),new NC(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Me(e===null||typeof e=="string"),new Ct(e)}}class MC{constructor(e,n,r){this.type="FirstParty",this.user=Ct.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const s=e.auth.getAuthHeaderValueForFirstParty([]);s&&this.headers.set("Authorization",s),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class BC{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new MC(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Ct.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class $C{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class UC{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const r=i=>{i.error!=null&&K("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.p;return this.p=i.token,K("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{K("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.g.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.g.getImmediate({optional:!0});i?s(i):K("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Me(typeof n.token=="string"),this.p=n.token,new $C(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.I(r),this.T=r=>n.writeSequenceNumber(r))}I(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VC(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */uh.A=-1;class Sy{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=VC(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Ee(t,e){return t<e?-1:t>e?1:0}function cs(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new J(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new J(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new J(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new J(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return _t.fromMillis(Date.now())}static fromDate(e){return _t.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new _t(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ee(this.nanoseconds,e.nanoseconds):Ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e){this.timestamp=e}static fromTimestamp(e){return new de(e)}static min(){return new de(new _t(0,0))}static max(){return new de(new _t(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ds(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Cy(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e,n,r){n===void 0?n=0:n>e.length&&se(),r===void 0?r=e.length-n:r>e.length-n&&se(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return wi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof wi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class qe extends wi{construct(e,n,r){return new qe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new J(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new qe(n)}static emptyPath(){return new qe([])}}const jC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class kt extends wi{construct(e,n,r){return new kt(e,n,r)}static isValidIdentifier(e){return jC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),kt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new kt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new J(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new J(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new J(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new J(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new kt(n)}static emptyPath(){return new kt([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e){this.fields=e,e.sort(kt.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return cs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new pt(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new pt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}pt.EMPTY_BYTE_STRING=new pt("");const zC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xn(t){if(Me(!!t),typeof t=="string"){let e=0;const n=zC.exec(t);if(Me(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Qe(t.seconds),nanos:Qe(t.nanos)}}function Qe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function hs(t){return typeof t=="string"?pt.fromBase64String(t):pt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ky(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Dy(t){const e=t.mapValue.fields.__previous_value__;return ky(e)?Dy(e):e}function Ei(t){const e=Xn(t.mapValue.fields.__local_write_time__.timestampValue);return new _t(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{constructor(e,n,r,s,i,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class ds{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ds("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ds&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rs(t){return t==null}function Xo(t){return t===0&&1/t==-1/0}function HC(t){return typeof t=="number"&&Number.isInteger(t)&&!Xo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.path=e}static fromPath(e){return new Y(qe.fromString(e))}static fromName(e){return new Y(qe.fromString(e).popFirst(5))}static empty(){return new Y(qe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&qe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return qe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Y(new qe(e.slice()))}}function Tr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ky(t)?4:KC(t)?9:10:se()}function dn(t,e){if(t===e)return!0;const n=Tr(t);if(n!==Tr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ei(t).isEqual(Ei(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=Xn(r.timestampValue),o=Xn(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return hs(r.bytesValue).isEqual(hs(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return Qe(r.geoPointValue.latitude)===Qe(s.geoPointValue.latitude)&&Qe(r.geoPointValue.longitude)===Qe(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return Qe(r.integerValue)===Qe(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=Qe(r.doubleValue),o=Qe(s.doubleValue);return i===o?Xo(i)===Xo(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return cs(t.arrayValue.values||[],e.arrayValue.values||[],dn);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(Uf(i)!==Uf(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!dn(i[a],o[a])))return!1;return!0}(t,e);default:return se()}}function Ii(t,e){return(t.values||[]).find(n=>dn(n,e))!==void 0}function fs(t,e){if(t===e)return 0;const n=Tr(t),r=Tr(e);if(n!==r)return Ee(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ee(t.booleanValue,e.booleanValue);case 2:return function(s,i){const o=Qe(s.integerValue||s.doubleValue),a=Qe(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Vf(t.timestampValue,e.timestampValue);case 4:return Vf(Ei(t),Ei(e));case 5:return Ee(t.stringValue,e.stringValue);case 6:return function(s,i){const o=hs(s),a=hs(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=Ee(o[l],a[l]);if(u!==0)return u}return Ee(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,i){const o=Ee(Qe(s.latitude),Qe(i.latitude));return o!==0?o:Ee(Qe(s.longitude),Qe(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=fs(o[l],a[l]);if(u)return u}return Ee(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,i){const o=s.fields||{},a=Object.keys(o),l=i.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=Ee(a[c],u[c]);if(h!==0)return h;const d=fs(o[a[c]],l[u[c]]);if(d!==0)return d}return Ee(a.length,u.length)}(t.mapValue,e.mapValue);default:throw se()}}function Vf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ee(t,e);const n=Xn(t),r=Xn(e),s=Ee(n.seconds,r.seconds);return s!==0?s:Ee(n.nanos,r.nanos)}function es(t){return xu(t)}function xu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const s=Xn(r);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?hs(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Y.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let s="[",i=!0;for(const o of r.values||[])i?i=!1:s+=",",s+=xu(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(r){const s=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const a of s)o?o=!1:i+=",",i+=`${a}:${xu(r.fields[a])}`;return i+"}"}(t.mapValue):se();var e,n}function Ou(t){return!!t&&"integerValue"in t}function ch(t){return!!t&&"arrayValue"in t}function jf(t){return!!t&&"nullValue"in t}function zf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function yo(t){return!!t&&"mapValue"in t}function ei(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ds(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ei(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ei(t.arrayValue.values[n]);return e}return Object.assign({},t)}function KC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e){this.value=e}static empty(){return new Qt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!yo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ei(n)}setAll(e){let n=kt.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=ei(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());yo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return dn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];yo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Ds(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Qt(ei(this.value))}}function Ry(t){const e=[];return Ds(t.fields,(n,r)=>{const s=new kt([n]);if(yo(r)){const i=Ry(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ru(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e,n,r,s,i,o){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.data=i,this.documentState=o}static newInvalidDocument(e){return new vt(e,0,de.min(),de.min(),Qt.empty(),0)}static newFoundDocument(e,n,r){return new vt(e,1,n,de.min(),r,0)}static newNoDocument(e,n){return new vt(e,2,n,de.min(),Qt.empty(),0)}static newUnknownDocument(e,n){return new vt(e,3,n,de.min(),Qt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Qt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Qt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof vt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new vt(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}function WC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=de.fromTimestamp(r===1e9?new _t(n+1,0):new _t(n,r));return new ps(s,Y.empty(),e)}function GC(t){return new ps(t.readTime,t.key,-1)}class ps{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ps(de.min(),Y.empty(),-1)}static max(){return new ps(de.max(),Y.empty(),-1)}}function XC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Y.comparator(t.documentKey,e.documentKey),n!==0?n:Ee(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.P=null}}function qf(t,e=null,n=[],r=[],s=null,i=null,o=null){return new QC(t,e,n,r,s,i,o)}function hh(t){const e=le(t);if(e.P===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(s=r).field.canonicalString()+s.op.toString()+es(s.value);var s}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Rs(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>es(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>es(r)).join(",")),e.P=n}return e.P}function YC(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${es(r.value)}`;var r}).join(", ")}]`),Rs(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>es(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>es(n)).join(",")),`Target(${e})`}function dh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<t.orderBy.length;s++)if(!ik(t.orderBy[s],e.orderBy[s]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],r=e.filters[s],n.op!==r.op||!n.field.isEqual(r.field)||!dn(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Kf(t.startAt,e.startAt)&&Kf(t.endAt,e.endAt)}function Pu(t){return Y.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class Dt extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.V(e,n,r):new ZC(e,n,r):n==="array-contains"?new tk(e,r):n==="in"?new nk(e,r):n==="not-in"?new rk(e,r):n==="array-contains-any"?new sk(e,r):new Dt(e,n,r)}static V(e,n,r){return n==="in"?new JC(e,r):new ek(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.v(fs(n,this.value)):n!==null&&Tr(this.value)===Tr(n)&&this.v(fs(n,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return se()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class ZC extends Dt{constructor(e,n,r){super(e,n,r),this.key=Y.fromName(r.referenceValue)}matches(e){const n=Y.comparator(e.key,this.key);return this.v(n)}}class JC extends Dt{constructor(e,n){super(e,"in",n),this.keys=xy("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class ek extends Dt{constructor(e,n){super(e,"not-in",n),this.keys=xy("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function xy(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Y.fromName(r.referenceValue))}class tk extends Dt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ch(n)&&Ii(n.arrayValue,this.value)}}class nk extends Dt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ii(this.value.arrayValue,n)}}class rk extends Dt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ii(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ii(this.value.arrayValue,n)}}class sk extends Dt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ch(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ii(this.value.arrayValue,r))}}class Qo{constructor(e,n){this.position=e,this.inclusive=n}}class ti{constructor(e,n="asc"){this.field=e,this.dir=n}}function ik(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Hf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=Y.comparator(Y.fromName(o.referenceValue),n.key):r=fs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Kf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!dn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.D=null,this.C=null,this.startAt,this.endAt}}function ok(t,e,n,r,s,i,o,a){return new Wa(t,e,n,r,s,i,o,a)}function fh(t){return new Wa(t)}function bo(t){return!Rs(t.limit)&&t.limitType==="F"}function Yo(t){return!Rs(t.limit)&&t.limitType==="L"}function ak(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function lk(t){for(const e of t.filters)if(e.S())return e.field;return null}function uk(t){return t.collectionGroup!==null}function Ti(t){const e=le(t);if(e.D===null){e.D=[];const n=lk(e),r=ak(e);if(n!==null&&r===null)n.isKeyField()||e.D.push(new ti(n)),e.D.push(new ti(kt.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.D.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new ti(kt.keyField(),i))}}}return e.D}function Ar(t){const e=le(t);if(!e.C)if(e.limitType==="F")e.C=qf(e.path,e.collectionGroup,Ti(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Ti(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new ti(i.field,o))}const r=e.endAt?new Qo(e.endAt.position,!e.endAt.inclusive):null,s=e.startAt?new Qo(e.startAt.position,!e.startAt.inclusive):null;e.C=qf(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e.C}function ck(t,e,n){return new Wa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ga(t,e){return dh(Ar(t),Ar(e))&&t.limitType===e.limitType}function Oy(t){return`${hh(Ar(t))}|lt:${t.limitType}`}function Nu(t){return`Query(target=${YC(Ar(t))}; limitType=${t.limitType})`}function ph(t,e){return e.isFoundDocument()&&function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):Y.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,r){for(const s of n.explicitOrderBy)if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(s,i,o){const a=Hf(s,i,o);return s.inclusive?a<=0:a<0}(n.startAt,Ti(n),r)||n.endAt&&!function(s,i,o){const a=Hf(s,i,o);return s.inclusive?a>=0:a>0}(n.endAt,Ti(n),r))}(t,e)}function hk(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Py(t){return(e,n)=>{let r=!1;for(const s of Ti(t)){const i=dk(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function dk(t,e,n){const r=t.field.isKeyField()?Y.comparator(e.key,n.key):function(s,i,o){const a=i.data.field(s),l=o.data.field(s);return a!==null&&l!==null?fs(a,l):se()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return se()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ny(t,e){if(t.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xo(e)?"-0":e}}function Ly(t){return{integerValue:""+t}}function fk(t,e){return HC(e)?Ly(e):Ny(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(){this._=void 0}}function pk(t,e,n){return t instanceof Zo?function(r,s){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&(i.fields.__previous_value__=s),{mapValue:i}}(n,e):t instanceof Ai?My(t,e):t instanceof Si?By(t,e):function(r,s){const i=Fy(r,s),o=Wf(i)+Wf(r.k);return Ou(i)&&Ou(r.k)?Ly(o):Ny(r.M,o)}(t,e)}function mk(t,e,n){return t instanceof Ai?My(t,e):t instanceof Si?By(t,e):n}function Fy(t,e){return t instanceof Jo?Ou(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Zo extends Xa{}class Ai extends Xa{constructor(e){super(),this.elements=e}}function My(t,e){const n=$y(e);for(const r of t.elements)n.some(s=>dn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Si extends Xa{constructor(e){super(),this.elements=e}}function By(t,e){let n=$y(e);for(const r of t.elements)n=n.filter(s=>!dn(s,r));return{arrayValue:{values:n}}}class Jo extends Xa{constructor(e,n){super(),this.M=e,this.k=n}}function Wf(t){return Qe(t.integerValue||t.doubleValue)}function $y(t){return ch(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function gk(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Ai&&r instanceof Ai||n instanceof Si&&r instanceof Si?cs(n.elements,r.elements,dn):n instanceof Jo&&r instanceof Jo?dn(n.k,r.k):n instanceof Zo&&r instanceof Zo}(t.transform,e.transform)}class vk{constructor(e,n){this.version=e,this.transformResults=n}}class ts{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ts}static exists(e){return new ts(void 0,e)}static updateTime(e){return new ts(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function _o(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Qa{}function yk(t,e,n){t instanceof Ya?function(r,s,i){const o=r.value.clone(),a=Qf(r.fieldTransforms,s,i.transformResults);o.setAll(a),s.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Hi?function(r,s,i){if(!_o(r.precondition,s))return void s.convertToUnknownDocument(i.version);const o=Qf(r.fieldTransforms,s,i.transformResults),a=s.data;a.setAll(Uy(r)),a.setAll(o),s.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(r,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Lu(t,e,n){t instanceof Ya?function(r,s,i){if(!_o(r.precondition,s))return;const o=r.value.clone(),a=Yf(r.fieldTransforms,i,s);o.setAll(a),s.convertToFoundDocument(Xf(s),o).setHasLocalMutations()}(t,e,n):t instanceof Hi?function(r,s,i){if(!_o(r.precondition,s))return;const o=Yf(r.fieldTransforms,i,s),a=s.data;a.setAll(Uy(r)),a.setAll(o),s.convertToFoundDocument(Xf(s),a).setHasLocalMutations()}(t,e,n):function(r,s){_o(r.precondition,s)&&s.convertToNoDocument(de.min())}(t,e)}function bk(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Fy(r.transform,s||null);i!=null&&(n==null&&(n=Qt.empty()),n.set(r.field,i))}return n||null}function Gf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&cs(n,r,(s,i)=>gk(s,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function Xf(t){return t.isFoundDocument()?t.version:de.min()}class Ya extends Qa{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}}class Hi extends Qa{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}}function Uy(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Qf(t,e,n){const r=new Map;Me(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,mk(o,a,n[s]))}return r}function Yf(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,pk(i,o,e))}return r}class _k extends Qa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class wk extends Qa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ek{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xe,me;function Ik(t){switch(t){default:return se();case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0}}function Vy(t){if(t===void 0)return Gn("GRPC error has no .code"),D.UNKNOWN;switch(t){case Xe.OK:return D.OK;case Xe.CANCELLED:return D.CANCELLED;case Xe.UNKNOWN:return D.UNKNOWN;case Xe.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case Xe.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case Xe.INTERNAL:return D.INTERNAL;case Xe.UNAVAILABLE:return D.UNAVAILABLE;case Xe.UNAUTHENTICATED:return D.UNAUTHENTICATED;case Xe.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case Xe.NOT_FOUND:return D.NOT_FOUND;case Xe.ALREADY_EXISTS:return D.ALREADY_EXISTS;case Xe.PERMISSION_DENIED:return D.PERMISSION_DENIED;case Xe.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case Xe.ABORTED:return D.ABORTED;case Xe.OUT_OF_RANGE:return D.OUT_OF_RANGE;case Xe.UNIMPLEMENTED:return D.UNIMPLEMENTED;case Xe.DATA_LOSS:return D.DATA_LOSS;default:return se()}}(me=Xe||(Xe={}))[me.OK=0]="OK",me[me.CANCELLED=1]="CANCELLED",me[me.UNKNOWN=2]="UNKNOWN",me[me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",me[me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",me[me.NOT_FOUND=5]="NOT_FOUND",me[me.ALREADY_EXISTS=6]="ALREADY_EXISTS",me[me.PERMISSION_DENIED=7]="PERMISSION_DENIED",me[me.UNAUTHENTICATED=16]="UNAUTHENTICATED",me[me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",me[me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",me[me.ABORTED=10]="ABORTED",me[me.OUT_OF_RANGE=11]="OUT_OF_RANGE",me[me.UNIMPLEMENTED=12]="UNIMPLEMENTED",me[me.INTERNAL=13]="INTERNAL",me[me.UNAVAILABLE=14]="UNAVAILABLE",me[me.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ds(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Cy(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,n){this.comparator=e,this.root=n||at.EMPTY}insert(e,n){return new st(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,at.BLACK,null,null))}remove(e){return new st(this.comparator,this.root.remove(e,this.comparator).copy(null,null,at.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new co(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new co(this.root,e,this.comparator,!1)}getReverseIterator(){return new co(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new co(this.root,e,this.comparator,!0)}}class co{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class at{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r!=null?r:at.RED,this.left=s!=null?s:at.EMPTY,this.right=i!=null?i:at.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new at(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,s!=null?s:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return at.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw se();const e=this.left.check();if(e!==this.right.check())throw se();return e+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw se()}get value(){throw se()}get color(){throw se()}get left(){throw se()}get right(){throw se()}copy(t,e,n,r,s){return this}insert(t,e,n){return new at(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.comparator=e,this.data=new st(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Zf(this.data.getIterator())}getIteratorFrom(e){return new Zf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof dt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new dt(this.comparator);return n.data=e,n}}class Zf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tk=new st(Y.comparator);function Sr(){return Tk}const Ak=new st(Y.comparator);function Fu(){return Ak}function Fl(){return new xs(t=>t.toString(),(t,e)=>t.isEqual(e))}const Sk=new st(Y.comparator),Ck=new dt(Y.comparator);function $e(...t){let e=Ck;for(const n of t)e=e.add(n);return e}const kk=new dt(Ee);function jy(){return kk}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,Ki.createSynthesizedTargetChangeForCurrentChange(e,n)),new Za(de.min(),r,jy(),Sr(),$e())}}class Ki{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Ki(pt.EMPTY_BYTE_STRING,n,$e(),$e(),$e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e,n,r,s){this.O=e,this.removedTargetIds=n,this.key=r,this.F=s}}class zy{constructor(e,n){this.targetId=e,this.$=n}}class qy{constructor(e,n,r=pt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Jf{constructor(){this.B=0,this.L=tp(),this.U=pt.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return this.B!==0}get j(){return this.K}W(e){e.approximateByteSize()>0&&(this.K=!0,this.U=e)}H(){let e=$e(),n=$e(),r=$e();return this.L.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:se()}}),new Ki(this.U,this.q,e,n,r)}J(){this.K=!1,this.L=tp()}Y(e,n){this.K=!0,this.L=this.L.insert(e,n)}X(e){this.K=!0,this.L=this.L.remove(e)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class Dk{constructor(e){this.nt=e,this.st=new Map,this.it=Sr(),this.rt=ep(),this.ot=new dt(Ee)}ut(e){for(const n of e.O)e.F&&e.F.isFoundDocument()?this.at(n,e.F):this.ct(n,e.key,e.F);for(const n of e.removedTargetIds)this.ct(n,e.key,e.F)}ht(e){this.forEachTarget(e,n=>{const r=this.lt(n);switch(e.state){case 0:this.ft(n)&&r.W(e.resumeToken);break;case 1:r.tt(),r.G||r.J(),r.W(e.resumeToken);break;case 2:r.tt(),r.G||this.removeTarget(n);break;case 3:this.ft(n)&&(r.et(),r.W(e.resumeToken));break;case 4:this.ft(n)&&(this.dt(n),r.W(e.resumeToken));break;default:se()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.st.forEach((r,s)=>{this.ft(s)&&n(s)})}_t(e){const n=e.targetId,r=e.$.count,s=this.wt(n);if(s){const i=s.target;if(Pu(i))if(r===0){const o=new Y(i.path);this.ct(n,o,vt.newNoDocument(o,de.min()))}else Me(r===1);else this.gt(n)!==r&&(this.dt(n),this.ot=this.ot.add(n))}}yt(e){const n=new Map;this.st.forEach((i,o)=>{const a=this.wt(o);if(a){if(i.current&&Pu(a.target)){const l=new Y(a.target.path);this.it.get(l)!==null||this.It(o,l)||this.ct(o,l,vt.newNoDocument(l,e))}i.j&&(n.set(o,i.H()),i.J())}});let r=$e();this.rt.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.wt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(i))}),this.it.forEach((i,o)=>o.setReadTime(e));const s=new Za(e,n,this.ot,this.it,r);return this.it=Sr(),this.rt=ep(),this.ot=new dt(Ee),s}at(e,n){if(!this.ft(e))return;const r=this.It(e,n.key)?2:0;this.lt(e).Y(n.key,r),this.it=this.it.insert(n.key,n),this.rt=this.rt.insert(n.key,this.Tt(n.key).add(e))}ct(e,n,r){if(!this.ft(e))return;const s=this.lt(e);this.It(e,n)?s.Y(n,1):s.X(n),this.rt=this.rt.insert(n,this.Tt(n).delete(e)),r&&(this.it=this.it.insert(n,r))}removeTarget(e){this.st.delete(e)}gt(e){const n=this.lt(e).H();return this.nt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Z(e){this.lt(e).Z()}lt(e){let n=this.st.get(e);return n||(n=new Jf,this.st.set(e,n)),n}Tt(e){let n=this.rt.get(e);return n||(n=new dt(Ee),this.rt=this.rt.insert(e,n)),n}ft(e){const n=this.wt(e)!==null;return n||K("WatchChangeAggregator","Detected inactive target",e),n}wt(e){const n=this.st.get(e);return n&&n.G?null:this.nt.Et(e)}dt(e){this.st.set(e,new Jf),this.nt.getRemoteKeysForTarget(e).forEach(n=>{this.ct(e,n,null)})}It(e,n){return this.nt.getRemoteKeysForTarget(e).has(n)}}function ep(){return new st(Y.comparator)}function tp(){return new st(Y.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rk=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),xk=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Ok{constructor(e,n){this.databaseId=e,this.N=n}}function ea(t,e){return t.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Hy(t,e){return t.N?e.toBase64():e.toUint8Array()}function Pk(t,e){return ea(t,e.toTimestamp())}function En(t){return Me(!!t),de.fromTimestamp(function(e){const n=Xn(e);return new _t(n.seconds,n.nanos)}(t))}function mh(t,e){return function(n){return new qe(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Ky(t){const e=qe.fromString(t);return Me(Xy(e)),e}function Mu(t,e){return mh(t.databaseId,e.path)}function Ml(t,e){const n=Ky(e);if(n.get(1)!==t.databaseId.projectId)throw new J(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new J(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Y(Wy(n))}function Bu(t,e){return mh(t.databaseId,e)}function Nk(t){const e=Ky(t);return e.length===4?qe.emptyPath():Wy(e)}function $u(t){return new qe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Wy(t){return Me(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function np(t,e,n){return{name:Mu(t,e),fields:n.value.mapValue.fields}}function Lk(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:se()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(l,u){return l.N?(Me(u===void 0||typeof u=="string"),pt.fromBase64String(u||"")):(Me(u===void 0||u instanceof Uint8Array),pt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?D.UNKNOWN:Vy(l.code);return new J(u,l.message||"")}(o);n=new qy(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ml(t,r.document.name),i=En(r.document.updateTime),o=new Qt({mapValue:{fields:r.document.fields}}),a=vt.newFoundDocument(s,i,o),l=r.targetIds||[],u=r.removedTargetIds||[];n=new wo(l,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ml(t,r.document),i=r.readTime?En(r.readTime):de.min(),o=vt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new wo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ml(t,r.document),i=r.removedTargetIds||[];n=new wo([],i,s,null)}else{if(!("filter"in e))return se();{e.filter;const r=e.filter;r.targetId;const s=r.count||0,i=new Ek(s),o=r.targetId;n=new zy(o,i)}}return n}function Fk(t,e){let n;if(e instanceof Ya)n={update:np(t,e.key,e.value)};else if(e instanceof _k)n={delete:Mu(t,e.key)};else if(e instanceof Hi)n={update:np(t,e.key,e.data),updateMask:Kk(e.fieldMask)};else{if(!(e instanceof wk))return se();n={verify:Mu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof Zo)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ai)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Si)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Jo)return{fieldPath:i.field.canonicalString(),increment:o.k};throw se()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:Pk(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:se()}(t,e.precondition)),n}function Mk(t,e){return t&&t.length>0?(Me(e!==void 0),t.map(n=>function(r,s){let i=r.updateTime?En(r.updateTime):En(s);return i.isEqual(de.min())&&(i=En(s)),new vk(i,r.transformResults||[])}(n,e))):[]}function Bk(t,e){return{documents:[Bu(t,e.path)]}}function $k(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Bu(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Bu(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(l){if(l.length===0)return;const u=l.map(c=>function(h){if(h.op==="=="){if(zf(h.value))return{unaryFilter:{field:zr(h.field),op:"IS_NAN"}};if(jf(h.value))return{unaryFilter:{field:zr(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(zf(h.value))return{unaryFilter:{field:zr(h.field),op:"IS_NOT_NAN"}};if(jf(h.value))return{unaryFilter:{field:zr(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:zr(h.field),op:zk(h.op),value:h.value}}}(c));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);s&&(n.structuredQuery.where=s);const i=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:zr(c.field),direction:jk(c.dir)}}(u))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(l,u){return l.N||Rs(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function Uk(t){let e=Nk(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Me(r===1);const c=n.from[0];c.allDescendants?s=c.collectionId:e=e.child(c.collectionId)}let i=[];n.where&&(i=Gy(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new ti(Xr(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,Rs(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,d=c.values||[];return new Qo(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new Qo(d,h)}(n.endAt)),ok(e,s,o,i,a,"F",l,u)}function Vk(t,e){const n=function(r,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return se()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Gy(t){return t?t.unaryFilter!==void 0?[Hk(t)]:t.fieldFilter!==void 0?[qk(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Gy(e)).reduce((e,n)=>e.concat(n)):se():[]}function jk(t){return Rk[t]}function zk(t){return xk[t]}function zr(t){return{fieldPath:t.canonicalString()}}function Xr(t){return kt.fromServerFormat(t.fieldPath)}function qk(t){return Dt.create(Xr(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return se()}}(t.fieldFilter.op),t.fieldFilter.value)}function Hk(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Xr(t.unaryFilter.field);return Dt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Xr(t.unaryFilter.field);return Dt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Xr(t.unaryFilter.field);return Dt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Xr(t.unaryFilter.field);return Dt.create(s,"!=",{nullValue:"NULL_VALUE"});default:return se()}}function Kk(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Xy(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Gk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&se(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(s=>s?L.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}}function Wi(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xk{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&yk(i,e,r[s])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&Lu(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&Lu(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const r=e.get(n.key),s=r;this.applyToLocalView(s),r.isValidDocument()||s.convertToNoDocument(de.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),$e())}isEqual(e){return this.batchId===e.batchId&&cs(this.mutations,e.mutations,(n,r)=>Gf(n,r))&&cs(this.baseMutations,e.baseMutations,(n,r)=>Gf(n,r))}}class gh{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Me(e.mutations.length===r.length);let s=Sk;const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new gh(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qk{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e,n,r,s,i=de.min(),o=de.min(),a=pt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new yr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new yr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new yr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yk{constructor(e){this.Jt=e}}function Zk(t){const e=Uk({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ck(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jk{constructor(){this.qe=new eD}addToCollectionParentIndex(e,n){return this.qe.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.qe.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getFieldIndex(e,n){return L.resolve(null)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class eD{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new dt(qe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new dt(qe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e){this.mn=e}next(){return this.mn+=2,this.mn}static gn(){return new ms(0)}static yn(){return new ms(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gi(t){if(t.code!==D.FAILED_PRECONDITION||t.message!==Wk)throw t;K("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tD{constructor(){this.changes=new xs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,vt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nD{constructor(e,n,r){this.ds=e,this.Bs=n,this.indexManager=r}Ls(e,n){return this.Bs.getAllMutationBatchesAffectingDocumentKey(e,n).next(r=>this.Us(e,n,r))}Us(e,n,r){return this.ds.getEntry(e,n).next(s=>{for(const i of r)i.applyToLocalView(s);return s})}qs(e,n){e.forEach((r,s)=>{for(const i of n)i.applyToLocalView(s)})}Ks(e,n){return this.ds.getEntries(e,n).next(r=>this.Gs(e,r).next(()=>r))}Gs(e,n){return this.Bs.getAllMutationBatchesAffectingDocumentKeys(e,n).next(r=>this.qs(n,r))}Qs(e,n,r){return function(s){return Y.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.js(e,n.path):uk(n)?this.Ws(e,n,r):this.zs(e,n,r)}js(e,n){return this.Ls(e,new Y(n)).next(r=>{let s=Fu();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}Ws(e,n,r){const s=n.collectionGroup;let i=Fu();return this.indexManager.getCollectionParents(e,s).next(o=>L.forEach(o,a=>{const l=function(u,c){return new Wa(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(s));return this.zs(e,l,r).next(u=>{u.forEach((c,h)=>{i=i.insert(c,h)})})}).next(()=>i))}zs(e,n,r){let s;return this.ds.getAllFromCollection(e,n.path,r).next(i=>(s=i,this.Bs.getAllMutationBatchesAffectingQuery(e,n))).next(i=>{for(const o of i)for(const a of o.mutations){const l=a.key;let u=s.get(l);u==null&&(u=vt.newInvalidDocument(l),s=s.insert(l,u)),Lu(a,u,o.localWriteTime),u.isFoundDocument()||(s=s.remove(l))}}).next(()=>(s.forEach((i,o)=>{ph(n,o)||(s=s.remove(i))}),s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Hs=r,this.Js=s}static Ys(e,n){let r=$e(),s=$e();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new vh(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rD{Xs(e){this.Zs=e}Qs(e,n,r,s){return function(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}(n)||r.isEqual(de.min())?this.ti(e,n):this.Zs.Ks(e,s).next(i=>{const o=this.ei(n,i);return(bo(n)||Yo(n))&&this.ni(n.limitType,o,s,r)?this.ti(e,n):(Bf()<=we.DEBUG&&K("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Nu(n)),this.Zs.Qs(e,n,WC(r,-1)).next(a=>(o.forEach(l=>{a=a.insert(l.key,l)}),a)))})}ei(e,n){let r=new dt(Py(e));return n.forEach((s,i)=>{ph(e,i)&&(r=r.add(i))}),r}ni(e,n,r,s){if(r.size!==n.size)return!0;const i=e==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ti(e,n){return Bf()<=we.DEBUG&&K("QueryEngine","Using full collection scan to execute query:",Nu(n)),this.Zs.Qs(e,n,ps.min())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sD{constructor(e,n,r,s){this.persistence=e,this.si=n,this.M=s,this.ii=new st(Ee),this.ri=new xs(i=>hh(i),dh),this.oi=new Map,this.ui=e.getRemoteDocumentCache(),this.fs=e.getTargetCache(),this._s=e.getBundleCache(),this.ai(r)}ai(e){this.indexManager=this.persistence.getIndexManager(e),this.Bs=this.persistence.getMutationQueue(e,this.indexManager),this.ci=new nD(this.ui,this.Bs,this.indexManager),this.ui.setIndexManager(this.indexManager),this.si.Xs(this.ci)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ii))}}function iD(t,e,n,r){return new sD(t,e,n,r)}async function Qy(t,e){const n=le(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.Bs.getAllMutationBatches(r).next(i=>(s=i,n.ai(e),n.Bs.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=$e();for(const u of s){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of i){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.ci.Ks(r,l).next(u=>({hi:u,removedBatchIds:o,addedBatchIds:a}))})})}function oD(t,e){const n=le(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.ui.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let d=L.resolve();return h.forEach(f=>{d=d.next(()=>u.getEntry(a,f)).next(p=>{const g=l.docVersions.get(f);Me(g!==null),p.version.compareTo(g)<0&&(c.applyToRemoteDocument(p,l),p.isValidDocument()&&(p.setReadTime(l.commitVersion),u.addEntry(p)))})}),d.next(()=>o.Bs.removeMutationBatch(a,c))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.Bs.performConsistencyCheck(r)).next(()=>n.ci.Ks(r,s))})}function Yy(t){const e=le(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.fs.getLastRemoteSnapshotVersion(n))}function aD(t,e){const n=le(t),r=e.snapshotVersion;let s=n.ii;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ui.newChangeBuffer({trackRemovals:!0});s=n.ii;const a=[];e.targetChanges.forEach((u,c)=>{const h=s.get(c);if(!h)return;a.push(n.fs.removeMatchingKeys(i,u.removedDocuments,c).next(()=>n.fs.addMatchingKeys(i,u.addedDocuments,c)));let d=h.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(c)?d=d.withResumeToken(pt.EMPTY_BYTE_STRING,de.min()).withLastLimboFreeSnapshotVersion(de.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,r)),s=s.insert(c,d),function(f,p,g){return f.resumeToken.approximateByteSize()===0||p.snapshotVersion.toMicroseconds()-f.snapshotVersion.toMicroseconds()>=3e8?!0:g.addedDocuments.size+g.modifiedDocuments.size+g.removedDocuments.size>0}(h,d,u)&&a.push(n.fs.updateTargetData(i,d))});let l=Sr();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(lD(i,o,e.documentUpdates).next(u=>{l=u})),!r.isEqual(de.min())){const u=n.fs.getLastRemoteSnapshotVersion(i).next(c=>n.fs.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return L.waitFor(a).next(()=>o.apply(i)).next(()=>n.ci.Gs(i,l)).next(()=>l)}).then(i=>(n.ii=s,i))}function lD(t,e,n){let r=$e();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let i=Sr();return n.forEach((o,a)=>{const l=s.get(o);a.isNoDocument()&&a.version.isEqual(de.min())?(e.removeEntry(o,a.readTime),i=i.insert(o,a)):!l.isValidDocument()||a.version.compareTo(l.version)>0||a.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(a),i=i.insert(o,a)):K("LocalStore","Ignoring outdated watch update for ",o,". Current version:",l.version," Watch version:",a.version)}),i})}function uD(t,e){const n=le(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.Bs.getNextMutationBatchAfterBatchId(r,e)))}function cD(t,e){const n=le(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.fs.getTargetData(r,e).next(i=>i?(s=i,L.resolve(s)):n.fs.allocateTargetId(r).next(o=>(s=new yr(e,o,0,r.currentSequenceNumber),n.fs.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ii.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ii=n.ii.insert(r.targetId,r),n.ri.set(e,r.targetId)),r})}async function Uu(t,e,n){const r=le(t),s=r.ii.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Wi(o))throw o;K("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ii=r.ii.remove(e),r.ri.delete(s.target)}function rp(t,e,n){const r=le(t);let s=de.min(),i=$e();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=le(a),h=c.ri.get(u);return h!==void 0?L.resolve(c.ii.get(h)):c.fs.getTargetData(l,u)}(r,o,Ar(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.fs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.si.Qs(o,e,n?s:de.min(),n?i:$e())).next(a=>(hD(r,hk(e),a),{documents:a,li:i})))}function hD(t,e,n){let r=de.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.oi.set(e,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dD{constructor(e){this.M=e,this.wi=new Map,this.mi=new Map}getBundleMetadata(e,n){return L.resolve(this.wi.get(n))}saveBundleMetadata(e,n){var r;return this.wi.set(n.id,{id:(r=n).id,version:r.version,createTime:En(r.createTime)}),L.resolve()}getNamedQuery(e,n){return L.resolve(this.mi.get(n))}saveNamedQuery(e,n){return this.mi.set(n.name,function(r){return{name:r.name,query:Zk(r.bundledQuery),readTime:En(r.readTime)}}(n)),L.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fD{constructor(){this.overlays=new st(Y.comparator),this.gi=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.Xt(e,n,i)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.gi.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.gi.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const s=Fl(),i=n.length+1,o=new Y(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return L.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new st((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=i.get(u.largestBatchId);c===null&&(c=Fl(),i=i.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Fl(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=s)););return L.resolve(a)}Xt(e,n,r){if(r===null)return;const s=this.overlays.get(r.key);if(s!==null){const o=this.gi.get(s.largestBatchId).delete(r.key);this.gi.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Qk(n,r));let i=this.gi.get(n);i===void 0&&(i=$e(),this.gi.set(n,i)),this.gi.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(){this.yi=new dt(et.pi),this.Ii=new dt(et.Ti)}isEmpty(){return this.yi.isEmpty()}addReference(e,n){const r=new et(e,n);this.yi=this.yi.add(r),this.Ii=this.Ii.add(r)}Ei(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ai(new et(e,n))}Ri(e,n){e.forEach(r=>this.removeReference(r,n))}Pi(e){const n=new Y(new qe([])),r=new et(n,e),s=new et(n,e+1),i=[];return this.Ii.forEachInRange([r,s],o=>{this.Ai(o),i.push(o.key)}),i}bi(){this.yi.forEach(e=>this.Ai(e))}Ai(e){this.yi=this.yi.delete(e),this.Ii=this.Ii.delete(e)}Vi(e){const n=new Y(new qe([])),r=new et(n,e),s=new et(n,e+1);let i=$e();return this.Ii.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new et(e,0),r=this.yi.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class et{constructor(e,n){this.key=e,this.vi=n}static pi(e,n){return Y.comparator(e.key,n.key)||Ee(e.vi,n.vi)}static Ti(e,n){return Ee(e.vi,n.vi)||Y.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.Bs=[],this.Si=1,this.Di=new dt(et.pi)}checkEmpty(e){return L.resolve(this.Bs.length===0)}addMutationBatch(e,n,r,s){const i=this.Si;this.Si++,this.Bs.length>0&&this.Bs[this.Bs.length-1];const o=new Xk(i,n,r,s);this.Bs.push(o);for(const a of s)this.Di=this.Di.add(new et(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.Ci(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.xi(r),i=s<0?0:s;return L.resolve(this.Bs.length>i?this.Bs[i]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.Bs.length===0?-1:this.Si-1)}getAllMutationBatches(e){return L.resolve(this.Bs.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new et(n,0),s=new et(n,Number.POSITIVE_INFINITY),i=[];return this.Di.forEachInRange([r,s],o=>{const a=this.Ci(o.vi);i.push(a)}),L.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new dt(Ee);return n.forEach(s=>{const i=new et(s,0),o=new et(s,Number.POSITIVE_INFINITY);this.Di.forEachInRange([i,o],a=>{r=r.add(a.vi)})}),L.resolve(this.Ni(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;Y.isDocumentKey(i)||(i=i.child(""));const o=new et(new Y(i),0);let a=new dt(Ee);return this.Di.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(l.vi)),!0)},o),L.resolve(this.Ni(a))}Ni(e){const n=[];return e.forEach(r=>{const s=this.Ci(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Me(this.ki(n.batchId,"removed")===0),this.Bs.shift();let r=this.Di;return L.forEach(n.mutations,s=>{const i=new et(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Di=r})}_n(e){}containsKey(e,n){const r=new et(n,0),s=this.Di.firstAfterOrEqual(r);return L.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.Bs.length,L.resolve()}ki(e,n){return this.xi(e)}xi(e){return this.Bs.length===0?0:e-this.Bs[0].batchId}Ci(e){const n=this.xi(e);return n<0||n>=this.Bs.length?null:this.Bs[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mD{constructor(e){this.Mi=e,this.docs=new st(Y.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mi(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():vt.newInvalidDocument(n))}getEntries(e,n){let r=Sr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():vt.newInvalidDocument(s))}),L.resolve(r)}getAllFromCollection(e,n,r){let s=Sr();const i=new Y(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||XC(GC(l),r)<=0||(s=s.insert(l.key,l.mutableCopy()))}return L.resolve(s)}getAllFromCollectionGroup(e,n,r,s){se()}Oi(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new gD(this)}getSize(e){return L.resolve(this.size)}}class gD extends tD{constructor(e){super(),this.Kn=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Kn.addEntry(e,s)):this.Kn.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.Kn.getEntry(e,n)}getAllFromCache(e,n){return this.Kn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vD{constructor(e){this.persistence=e,this.Fi=new xs(n=>hh(n),dh),this.lastRemoteSnapshotVersion=de.min(),this.highestTargetId=0,this.$i=0,this.Bi=new yh,this.targetCount=0,this.Li=ms.gn()}forEachTarget(e,n){return this.Fi.forEach((r,s)=>n(s)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.$i)}allocateTargetId(e){return this.highestTargetId=this.Li.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.$i&&(this.$i=n),L.resolve()}Tn(e){this.Fi.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Li=new ms(n),this.highestTargetId=n),e.sequenceNumber>this.$i&&(this.$i=e.sequenceNumber)}addTargetData(e,n){return this.Tn(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.Tn(n),L.resolve()}removeTargetData(e,n){return this.Fi.delete(n.target),this.Bi.Pi(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Fi.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fi.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),L.waitFor(i).next(()=>s)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.Fi.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this.Bi.Ei(n,r),L.resolve()}removeMatchingKeys(e,n,r){this.Bi.Ri(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),L.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Bi.Pi(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Bi.Vi(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this.Bi.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yD{constructor(e,n){this.Ui={},this.overlays={},this.es=new uh(0),this.ns=!1,this.ns=!0,this.referenceDelegate=e(this),this.fs=new vD(this),this.indexManager=new Jk,this.ds=function(r){return new mD(r)}(r=>this.referenceDelegate.qi(r)),this.M=new Yk(n),this._s=new dD(this.M)}start(){return Promise.resolve()}shutdown(){return this.ns=!1,Promise.resolve()}get started(){return this.ns}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new fD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Ui[e.toKey()];return r||(r=new pD(n,this.referenceDelegate),this.Ui[e.toKey()]=r),r}getTargetCache(){return this.fs}getRemoteDocumentCache(){return this.ds}getBundleCache(){return this._s}runTransaction(e,n,r){K("MemoryPersistence","Starting transaction:",e);const s=new bD(this.es.next());return this.referenceDelegate.Ki(),r(s).next(i=>this.referenceDelegate.Gi(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Qi(e,n){return L.or(Object.values(this.Ui).map(r=>()=>r.containsKey(e,n)))}}class bD extends Gk{constructor(e){super(),this.currentSequenceNumber=e}}class bh{constructor(e){this.persistence=e,this.ji=new yh,this.Wi=null}static zi(e){return new bh(e)}get Hi(){if(this.Wi)return this.Wi;throw se()}addReference(e,n,r){return this.ji.addReference(r,n),this.Hi.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.ji.removeReference(r,n),this.Hi.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.Hi.add(n.toString()),L.resolve()}removeTarget(e,n){this.ji.Pi(n.targetId).forEach(s=>this.Hi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Hi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ki(){this.Wi=new Set}Gi(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.Hi,r=>{const s=Y.fromPath(r);return this.Ji(e,s).next(i=>{i||n.removeEntry(s,de.min())})}).next(()=>(this.Wi=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ji(e,n).next(r=>{r?this.Hi.delete(n.toString()):this.Hi.add(n.toString())})}qi(e){return 0}Ji(e,n){return L.or([()=>L.resolve(this.ji.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Qi(e,n)])}}class sp{constructor(){this.activeTargetIds=jy()}Zi(e){this.activeTargetIds=this.activeTargetIds.add(e)}tr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class _D{constructor(){this.$r=new sp,this.Br={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.$r.Zi(e),this.Br[e]||"not-current"}updateQueryState(e,n,r){this.Br[e]=n}removeLocalQueryTarget(e){this.$r.tr(e)}isLocalQueryTarget(e){return this.$r.activeTargetIds.has(e)}clearQueryState(e){delete this.Br[e]}getAllActiveQueryTargets(){return this.$r.activeTargetIds}isActiveQueryTarget(e){return this.$r.activeTargetIds.has(e)}start(){return this.$r=new sp,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wD{Lr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(){this.Ur=()=>this.qr(),this.Kr=()=>this.Gr(),this.Qr=[],this.jr()}Lr(e){this.Qr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Kr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Kr)}qr(){K("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Qr)e(0)}Gr(){K("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Qr)e(1)}static vt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ED={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ID{constructor(e){this.Wr=e.Wr,this.zr=e.zr}Hr(e){this.Jr=e}Yr(e){this.Xr=e}onMessage(e){this.Zr=e}close(){this.zr()}send(e){this.Wr(e)}eo(){this.Jr()}no(e){this.Xr(e)}so(e){this.Zr(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TD extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.io=n+"://"+e.host,this.ro="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}oo(e,n,r,s,i){const o=this.uo(e,n);K("RestConnection","Sending: ",o,r);const a={};return this.ao(a,s,i),this.co(e,o,a,r).then(l=>(K("RestConnection","Received: ",l),l),l=>{throw $f("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}ho(e,n,r,s,i){return this.oo(e,n,r,s,i)}ao(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+ks,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}uo(e,n){const r=ED[e];return`${this.io}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,n,r,s){return new Promise((i,o)=>{const a=new PC;a.listenOnce(RC.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Ll.NO_ERROR:const u=a.getResponseJson();K("Connection","XHR received:",JSON.stringify(u)),i(u);break;case Ll.TIMEOUT:K("Connection",'RPC "'+e+'" timed out'),o(new J(D.DEADLINE_EXCEEDED,"Request time out"));break;case Ll.HTTP_ERROR:const c=a.getStatus();if(K("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(f){const p=f.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(p)>=0?p:D.UNKNOWN}(h.status);o(new J(d,h.message))}else o(new J(D.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new J(D.UNAVAILABLE,"Connection failed."));break;default:se()}}finally{K("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(s);a.send(n,"POST",l,r,15)})}lo(e,n,r){const s=[this.io,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=kC(),o=DC(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new OC({})),this.ao(a.initMessageHeaders,n,r),pg()||mg()||jI()||gg()||zI()||yc()||(a.httpHeadersOverwriteParam="$httpHeaders");const l=s.join("");K("Connection","Creating WebChannel: "+l,a);const u=i.createWebChannel(l,a);let c=!1,h=!1;const d=new ID({Wr:p=>{h?K("Connection","Not sending because WebChannel is closed:",p):(c||(K("Connection","Opening WebChannel transport."),u.open(),c=!0),K("Connection","WebChannel sending:",p),u.send(p))},zr:()=>u.close()}),f=(p,g,y)=>{p.listen(g,b=>{try{y(b)}catch(w){setTimeout(()=>{throw w},0)}})};return f(u,uo.EventType.OPEN,()=>{h||K("Connection","WebChannel transport opened.")}),f(u,uo.EventType.CLOSE,()=>{h||(h=!0,K("Connection","WebChannel transport closed"),d.no())}),f(u,uo.EventType.ERROR,p=>{h||(h=!0,$f("Connection","WebChannel transport errored:",p),d.no(new J(D.UNAVAILABLE,"The operation could not be completed")))}),f(u,uo.EventType.MESSAGE,p=>{var g;if(!h){const y=p.data[0];Me(!!y);const b=y,w=b.error||((g=b[0])===null||g===void 0?void 0:g.error);if(w){K("Connection","WebChannel received error:",w);const x=w.status;let M=function(P){const S=Xe[P];if(S!==void 0)return Vy(S)}(x),j=w.message;M===void 0&&(M=D.INTERNAL,j="Unknown error status: "+x+" with message "+w.message),h=!0,d.no(new J(M,j)),u.close()}else K("Connection","WebChannel received:",y),d.so(y)}}),f(o,xC.STAT_EVENT,p=>{p.stat===Ff.PROXY?K("Connection","Detected buffering proxy"):p.stat===Ff.NOPROXY&&K("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.eo()},0),d}}function Bl(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ja(t){return new Ok(t,!0)}class Zy{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Yn=e,this.timerId=n,this.fo=r,this._o=s,this.wo=i,this.mo=0,this.yo=null,this.po=Date.now(),this.reset()}reset(){this.mo=0}Io(){this.mo=this.wo}To(e){this.cancel();const n=Math.floor(this.mo+this.Eo()),r=Math.max(0,Date.now()-this.po),s=Math.max(0,n-r);s>0&&K("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.mo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.yo=this.Yn.enqueueAfterDelay(this.timerId,s,()=>(this.po=Date.now(),e())),this.mo*=this._o,this.mo<this.fo&&(this.mo=this.fo),this.mo>this.wo&&(this.mo=this.wo)}Ao(){this.yo!==null&&(this.yo.skipDelay(),this.yo=null)}cancel(){this.yo!==null&&(this.yo.cancel(),this.yo=null)}Eo(){return(Math.random()-.5)*this.mo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(e,n,r,s,i,o,a,l){this.Yn=e,this.Ro=r,this.Po=s,this.bo=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Vo=0,this.vo=null,this.So=null,this.stream=null,this.Do=new Zy(e,n)}Co(){return this.state===1||this.state===5||this.xo()}xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.No()}async stop(){this.Co()&&await this.close(0)}ko(){this.state=0,this.Do.reset()}Mo(){this.xo()&&this.vo===null&&(this.vo=this.Yn.enqueueAfterDelay(this.Ro,6e4,()=>this.Oo()))}Fo(e){this.$o(),this.stream.send(e)}async Oo(){if(this.xo())return this.close(0)}$o(){this.vo&&(this.vo.cancel(),this.vo=null)}Bo(){this.So&&(this.So.cancel(),this.So=null)}async close(e,n){this.$o(),this.Bo(),this.Do.cancel(),this.Vo++,e!==4?this.Do.reset():n&&n.code===D.RESOURCE_EXHAUSTED?(Gn(n.toString()),Gn("Using maximum backoff delay to prevent overloading the backend."),this.Do.Io()):n&&n.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Lo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Yr(n)}Lo(){}auth(){this.state=1;const e=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Vo===n&&this.qo(r,s)},r=>{e(()=>{const s=new J(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Ko(s)})})}qo(e,n){const r=this.Uo(this.Vo);this.stream=this.Go(e,n),this.stream.Hr(()=>{r(()=>(this.state=2,this.So=this.Yn.enqueueAfterDelay(this.Po,1e4,()=>(this.xo()&&(this.state=3),Promise.resolve())),this.listener.Hr()))}),this.stream.Yr(s=>{r(()=>this.Ko(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}No(){this.state=5,this.Do.To(async()=>{this.state=0,this.start()})}Ko(e){return K("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return n=>{this.Yn.enqueueAndForget(()=>this.Vo===e?n():(K("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class AD extends Jy{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.M=i}Go(e,n){return this.bo.lo("Listen",e,n)}onMessage(e){this.Do.reset();const n=Lk(this.M,e),r=function(s){if(!("targetChange"in s))return de.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?de.min():i.readTime?En(i.readTime):de.min()}(e);return this.listener.Qo(n,r)}jo(e){const n={};n.database=$u(this.M),n.addTarget=function(s,i){let o;const a=i.target;return o=Pu(a)?{documents:Bk(s,a)}:{query:$k(s,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Hy(s,i.resumeToken):i.snapshotVersion.compareTo(de.min())>0&&(o.readTime=ea(s,i.snapshotVersion.toTimestamp())),o}(this.M,e);const r=Vk(this.M,e);r&&(n.labels=r),this.Fo(n)}Wo(e){const n={};n.database=$u(this.M),n.removeTarget=e,this.Fo(n)}}class SD extends Jy{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.M=i,this.zo=!1}get Ho(){return this.zo}start(){this.zo=!1,this.lastStreamToken=void 0,super.start()}Lo(){this.zo&&this.Jo([])}Go(e,n){return this.bo.lo("Write",e,n)}onMessage(e){if(Me(!!e.streamToken),this.lastStreamToken=e.streamToken,this.zo){this.Do.reset();const n=Mk(e.writeResults,e.commitTime),r=En(e.commitTime);return this.listener.Yo(r,n)}return Me(!e.writeResults||e.writeResults.length===0),this.zo=!0,this.listener.Xo()}Zo(){const e={};e.database=$u(this.M),this.Fo(e)}Jo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Fk(this.M,r))};this.Fo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CD extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.bo=r,this.M=s,this.tu=!1}eu(){if(this.tu)throw new J(D.FAILED_PRECONDITION,"The client has already been terminated.")}oo(e,n,r){return this.eu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.bo.oo(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new J(D.UNKNOWN,s.toString())})}ho(e,n,r){return this.eu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.bo.ho(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new J(D.UNKNOWN,s.toString())})}terminate(){this.tu=!0}}class kD{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.nu=0,this.su=null,this.iu=!0}ru(){this.nu===0&&(this.ou("Unknown"),this.su=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.su=null,this.uu("Backend didn't respond within 10 seconds."),this.ou("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.ou("Unknown"):(this.nu++,this.nu>=1&&(this.cu(),this.uu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ou("Offline")))}set(e){this.cu(),this.nu=0,e==="Online"&&(this.iu=!1),this.ou(e)}ou(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}uu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.iu?(Gn(n),this.iu=!1):K("OnlineStateTracker",n)}cu(){this.su!==null&&(this.su.cancel(),this.su=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DD{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.hu=[],this.lu=new Map,this.fu=new Set,this.du=[],this._u=i,this._u.Lr(o=>{r.enqueueAndForget(async()=>{Fr(this)&&(K("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=le(a);l.fu.add(4),await Xi(l),l.wu.set("Unknown"),l.fu.delete(4),await el(l)}(this))})}),this.wu=new kD(r,s)}}async function el(t){if(Fr(t))for(const e of t.du)await e(!0)}async function Xi(t){for(const e of t.du)await e(!1)}function eb(t,e){const n=le(t);n.lu.has(e.targetId)||(n.lu.set(e.targetId,e),Eh(n)?wh(n):Os(n).xo()&&_h(n,e))}function tb(t,e){const n=le(t),r=Os(n);n.lu.delete(e),r.xo()&&nb(n,e),n.lu.size===0&&(r.xo()?r.Mo():Fr(n)&&n.wu.set("Unknown"))}function _h(t,e){t.mu.Z(e.targetId),Os(t).jo(e)}function nb(t,e){t.mu.Z(e),Os(t).Wo(e)}function wh(t){t.mu=new Dk({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.lu.get(e)||null}),Os(t).start(),t.wu.ru()}function Eh(t){return Fr(t)&&!Os(t).Co()&&t.lu.size>0}function Fr(t){return le(t).fu.size===0}function rb(t){t.mu=void 0}async function RD(t){t.lu.forEach((e,n)=>{_h(t,e)})}async function xD(t,e){rb(t),Eh(t)?(t.wu.au(e),wh(t)):t.wu.set("Unknown")}async function OD(t,e,n){if(t.wu.set("Online"),e instanceof qy&&e.state===2&&e.cause)try{await async function(r,s){const i=s.cause;for(const o of s.targetIds)r.lu.has(o)&&(await r.remoteSyncer.rejectListen(o,i),r.lu.delete(o),r.mu.removeTarget(o))}(t,e)}catch(r){K("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ta(t,r)}else if(e instanceof wo?t.mu.ut(e):e instanceof zy?t.mu._t(e):t.mu.ht(e),!n.isEqual(de.min()))try{const r=await Yy(t.localStore);n.compareTo(r)>=0&&await function(s,i){const o=s.mu.yt(i);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=s.lu.get(l);u&&s.lu.set(l,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const l=s.lu.get(a);if(!l)return;s.lu.set(a,l.withResumeToken(pt.EMPTY_BYTE_STRING,l.snapshotVersion)),nb(s,a);const u=new yr(l.target,a,1,l.sequenceNumber);_h(s,u)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){K("RemoteStore","Failed to raise snapshot:",r),await ta(t,r)}}async function ta(t,e,n){if(!Wi(e))throw e;t.fu.add(1),await Xi(t),t.wu.set("Offline"),n||(n=()=>Yy(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{K("RemoteStore","Retrying IndexedDB access"),await n(),t.fu.delete(1),await el(t)})}function sb(t,e){return e().catch(n=>ta(t,n,e))}async function tl(t){const e=le(t),n=Qn(e);let r=e.hu.length>0?e.hu[e.hu.length-1].batchId:-1;for(;PD(e);)try{const s=await uD(e.localStore,r);if(s===null){e.hu.length===0&&n.Mo();break}r=s.batchId,ND(e,s)}catch(s){await ta(e,s)}ib(e)&&ob(e)}function PD(t){return Fr(t)&&t.hu.length<10}function ND(t,e){t.hu.push(e);const n=Qn(t);n.xo()&&n.Ho&&n.Jo(e.mutations)}function ib(t){return Fr(t)&&!Qn(t).Co()&&t.hu.length>0}function ob(t){Qn(t).start()}async function LD(t){Qn(t).Zo()}async function FD(t){const e=Qn(t);for(const n of t.hu)e.Jo(n.mutations)}async function MD(t,e,n){const r=t.hu.shift(),s=gh.from(r,e,n);await sb(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await tl(t)}async function BD(t,e){e&&Qn(t).Ho&&await async function(n,r){if(s=r.code,Ik(s)&&s!==D.ABORTED){const i=n.hu.shift();Qn(n).ko(),await sb(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,r)),await tl(n)}var s}(t,e),ib(t)&&ob(t)}async function op(t,e){const n=le(t);n.asyncQueue.verifyOperationInProgress(),K("RemoteStore","RemoteStore received new credentials");const r=Fr(n);n.fu.add(3),await Xi(n),r&&n.wu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.fu.delete(3),await el(n)}async function $D(t,e){const n=le(t);e?(n.fu.delete(2),await el(n)):e||(n.fu.add(2),await Xi(n),n.wu.set("Unknown"))}function Os(t){return t.gu||(t.gu=function(e,n,r){const s=le(e);return s.eu(),new AD(n,s.bo,s.authCredentials,s.appCheckCredentials,s.M,r)}(t.datastore,t.asyncQueue,{Hr:RD.bind(null,t),Yr:xD.bind(null,t),Qo:OD.bind(null,t)}),t.du.push(async e=>{e?(t.gu.ko(),Eh(t)?wh(t):t.wu.set("Unknown")):(await t.gu.stop(),rb(t))})),t.gu}function Qn(t){return t.yu||(t.yu=function(e,n,r){const s=le(e);return s.eu(),new SD(n,s.bo,s.authCredentials,s.appCheckCredentials,s.M,r)}(t.datastore,t.asyncQueue,{Hr:LD.bind(null,t),Yr:BD.bind(null,t),Xo:FD.bind(null,t),Yo:MD.bind(null,t)}),t.du.push(async e=>{e?(t.yu.ko(),await tl(t)):(await t.yu.stop(),t.hu.length>0&&(K("RemoteStore",`Stopping write stream with ${t.hu.length} pending writes`),t.hu=[]))})),t.yu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new vr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Ih(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new J(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Th(t,e){if(Gn("AsyncQueue",`${e}: ${t}`),Wi(t))return new J(D.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e){this.comparator=e?(n,r)=>e(n,r)||Y.comparator(n.key,r.key):(n,r)=>Y.comparator(n.key,r.key),this.keyedMap=Fu(),this.sortedSet=new st(this.comparator)}static emptySet(e){return new ns(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ns)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ns;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(){this.pu=new st(Y.comparator)}track(e){const n=e.doc.key,r=this.pu.get(n);r?e.type!==0&&r.type===3?this.pu=this.pu.insert(n,e):e.type===3&&r.type!==1?this.pu=this.pu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.pu=this.pu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.pu=this.pu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.pu=this.pu.remove(n):e.type===1&&r.type===2?this.pu=this.pu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.pu=this.pu.insert(n,{type:2,doc:e.doc}):se():this.pu=this.pu.insert(n,e)}Iu(){const e=[];return this.pu.inorderTraversal((n,r)=>{e.push(r)}),e}}class gs{constructor(e,n,r,s,i,o,a,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l}static fromInitialDocuments(e,n,r,s){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new gs(e,n,ns.emptySet(n),i,r,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ga(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UD{constructor(){this.Tu=void 0,this.listeners=[]}}class VD{constructor(){this.queries=new xs(e=>Oy(e),Ga),this.onlineState="Unknown",this.Eu=new Set}}async function jD(t,e){const n=le(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new UD),s)try{i.Tu=await n.onListen(r)}catch(o){const a=Th(o,`Initialization of query '${Nu(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.Au(n.onlineState),i.Tu&&e.Ru(i.Tu)&&Ah(n)}async function zD(t,e){const n=le(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function qD(t,e){const n=le(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Ru(s)&&(r=!0);o.Tu=s}}r&&Ah(n)}function HD(t,e,n){const r=le(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function Ah(t){t.Eu.forEach(e=>{e.next()})}class KD{constructor(e,n,r){this.query=e,this.Pu=n,this.bu=!1,this.Vu=null,this.onlineState="Unknown",this.options=r||{}}Ru(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new gs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.bu?this.vu(e)&&(this.Pu.next(e),n=!0):this.Su(e,this.onlineState)&&(this.Du(e),n=!0),this.Vu=e,n}onError(e){this.Pu.error(e)}Au(e){this.onlineState=e;let n=!1;return this.Vu&&!this.bu&&this.Su(this.Vu,e)&&(this.Du(this.Vu),n=!0),n}Su(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Cu||!r)&&(!e.docs.isEmpty()||n==="Offline")}vu(e){if(e.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Du(e){e=gs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Pu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{constructor(e){this.key=e}}class lb{constructor(e){this.key=e}}class WD{constructor(e,n){this.query=e,this.$u=n,this.Bu=null,this.current=!1,this.Lu=$e(),this.mutatedKeys=$e(),this.Uu=Py(e),this.qu=new ns(this.Uu)}get Ku(){return this.$u}Gu(e,n){const r=n?n.Qu:new ap,s=n?n.qu:this.qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=bo(this.query)&&s.size===this.query.limit?s.last():null,u=Yo(this.query)&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((c,h)=>{const d=s.get(c),f=ph(this.query,h)?h:null,p=!!d&&this.mutatedKeys.has(d.key),g=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let y=!1;d&&f?d.data.isEqual(f.data)?p!==g&&(r.track({type:3,doc:f}),y=!0):this.ju(d,f)||(r.track({type:2,doc:f}),y=!0,(l&&this.Uu(f,l)>0||u&&this.Uu(f,u)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),y=!0):d&&!f&&(r.track({type:1,doc:d}),y=!0,(l||u)&&(a=!0)),y&&(f?(o=o.add(f),i=g?i.add(c):i.delete(c)):(o=o.delete(c),i=i.delete(c)))}),bo(this.query)||Yo(this.query))for(;o.size>this.query.limit;){const c=bo(this.query)?o.last():o.first();o=o.delete(c.key),i=i.delete(c.key),r.track({type:1,doc:c})}return{qu:o,Qu:r,ni:a,mutatedKeys:i}}ju(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.qu;this.qu=e.qu,this.mutatedKeys=e.mutatedKeys;const i=e.Qu.Iu();i.sort((u,c)=>function(h,d){const f=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return se()}};return f(h)-f(d)}(u.type,c.type)||this.Uu(u.doc,c.doc)),this.Wu(r);const o=n?this.zu():[],a=this.Lu.size===0&&this.current?1:0,l=a!==this.Bu;return this.Bu=a,i.length!==0||l?{snapshot:new gs(this.query,e.qu,s,i,e.mutatedKeys,a===0,l,!1),Hu:o}:{Hu:o}}Au(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({qu:this.qu,Qu:new ap,mutatedKeys:this.mutatedKeys,ni:!1},!1)):{Hu:[]}}Ju(e){return!this.$u.has(e)&&!!this.qu.has(e)&&!this.qu.get(e).hasLocalMutations}Wu(e){e&&(e.addedDocuments.forEach(n=>this.$u=this.$u.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.$u=this.$u.delete(n)),this.current=e.current)}zu(){if(!this.current)return[];const e=this.Lu;this.Lu=$e(),this.qu.forEach(r=>{this.Ju(r.key)&&(this.Lu=this.Lu.add(r.key))});const n=[];return e.forEach(r=>{this.Lu.has(r)||n.push(new lb(r))}),this.Lu.forEach(r=>{e.has(r)||n.push(new ab(r))}),n}Yu(e){this.$u=e.li,this.Lu=$e();const n=this.Gu(e.documents);return this.applyChanges(n,!0)}Xu(){return gs.fromInitialDocuments(this.query,this.qu,this.mutatedKeys,this.Bu===0)}}class GD{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class XD{constructor(e){this.key=e,this.Zu=!1}}class QD{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.ta={},this.ea=new xs(a=>Oy(a),Ga),this.na=new Map,this.sa=new Set,this.ia=new st(Y.comparator),this.ra=new Map,this.oa=new yh,this.ua={},this.aa=new Map,this.ca=ms.yn(),this.onlineState="Unknown",this.ha=void 0}get isPrimaryClient(){return this.ha===!0}}async function YD(t,e){const n=aR(t);let r,s;const i=n.ea.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Xu();else{const o=await cD(n.localStore,Ar(e));n.isPrimaryClient&&eb(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await ZD(n,e,r,a==="current")}return s}async function ZD(t,e,n,r){t.la=(c,h,d)=>async function(f,p,g,y){let b=p.view.Gu(g);b.ni&&(b=await rp(f.localStore,p.query,!1).then(({documents:M})=>p.view.Gu(M,b)));const w=y&&y.targetChanges.get(p.targetId),x=p.view.applyChanges(b,f.isPrimaryClient,w);return up(f,p.targetId,x.Hu),x.snapshot}(t,c,h,d);const s=await rp(t.localStore,e,!0),i=new WD(e,s.li),o=i.Gu(s.documents),a=Ki.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),l=i.applyChanges(o,t.isPrimaryClient,a);up(t,n,l.Hu);const u=new GD(e,n,i);return t.ea.set(e,u),t.na.has(n)?t.na.get(n).push(e):t.na.set(n,[e]),l.snapshot}async function JD(t,e){const n=le(t),r=n.ea.get(e),s=n.na.get(r.targetId);if(s.length>1)return n.na.set(r.targetId,s.filter(i=>!Ga(i,e))),void n.ea.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Uu(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),tb(n.remoteStore,r.targetId),Vu(n,r.targetId)}).catch(Gi)):(Vu(n,r.targetId),await Uu(n.localStore,r.targetId,!0))}async function eR(t,e,n){const r=lR(t);try{const s=await function(i,o){const a=le(i),l=_t.now(),u=o.reduce((h,d)=>h.add(d.key),$e());let c;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.ci.Ks(h,u).next(d=>{c=d;const f=[];for(const p of o){const g=bk(p,c.get(p.key));g!=null&&f.push(new Hi(p.key,g,Ry(g.value.mapValue),ts.exists(!0)))}return a.Bs.addMutationBatch(h,l,f,o)})).then(h=>(h.applyToLocalDocumentSet(c),{batchId:h.batchId,changes:c}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(i,o,a){let l=i.ua[i.currentUser.toKey()];l||(l=new st(Ee)),l=l.insert(o,a),i.ua[i.currentUser.toKey()]=l}(r,s.batchId,n),await Qi(r,s.changes),await tl(r.remoteStore)}catch(s){const i=Th(s,"Failed to persist write");n.reject(i)}}async function ub(t,e){const n=le(t);try{const r=await aD(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.ra.get(i);o&&(Me(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Zu=!0:s.modifiedDocuments.size>0?Me(o.Zu):s.removedDocuments.size>0&&(Me(o.Zu),o.Zu=!1))}),await Qi(n,r,e)}catch(r){await Gi(r)}}function lp(t,e,n){const r=le(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ea.forEach((i,o)=>{const a=o.view.Au(e);a.snapshot&&s.push(a.snapshot)}),function(i,o){const a=le(i);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.Au(o)&&(l=!0)}),l&&Ah(a)}(r.eventManager,e),s.length&&r.ta.Qo(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function tR(t,e,n){const r=le(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.ra.get(e),i=s&&s.key;if(i){let o=new st(Y.comparator);o=o.insert(i,vt.newNoDocument(i,de.min()));const a=$e().add(i),l=new Za(de.min(),new Map,new dt(Ee),o,a);await ub(r,l),r.ia=r.ia.remove(i),r.ra.delete(e),Sh(r)}else await Uu(r.localStore,e,!1).then(()=>Vu(r,e,n)).catch(Gi)}async function nR(t,e){const n=le(t),r=e.batch.batchId;try{const s=await oD(n.localStore,e);hb(n,r,null),cb(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Qi(n,s)}catch(s){await Gi(s)}}async function rR(t,e,n){const r=le(t);try{const s=await function(i,o){const a=le(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.Bs.lookupMutationBatch(l,o).next(c=>(Me(c!==null),u=c.keys(),a.Bs.removeMutationBatch(l,c))).next(()=>a.Bs.performConsistencyCheck(l)).next(()=>a.ci.Ks(l,u))})}(r.localStore,e);hb(r,e,n),cb(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Qi(r,s)}catch(s){await Gi(s)}}function cb(t,e){(t.aa.get(e)||[]).forEach(n=>{n.resolve()}),t.aa.delete(e)}function hb(t,e,n){const r=le(t);let s=r.ua[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.ua[r.currentUser.toKey()]=s}}function Vu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.na.get(e))t.ea.delete(r),n&&t.ta.fa(r,n);t.na.delete(e),t.isPrimaryClient&&t.oa.Pi(e).forEach(r=>{t.oa.containsKey(r)||db(t,r)})}function db(t,e){t.sa.delete(e.path.canonicalString());const n=t.ia.get(e);n!==null&&(tb(t.remoteStore,n),t.ia=t.ia.remove(e),t.ra.delete(n),Sh(t))}function up(t,e,n){for(const r of n)r instanceof ab?(t.oa.addReference(r.key,e),sR(t,r)):r instanceof lb?(K("SyncEngine","Document no longer in limbo: "+r.key),t.oa.removeReference(r.key,e),t.oa.containsKey(r.key)||db(t,r.key)):se()}function sR(t,e){const n=e.key,r=n.path.canonicalString();t.ia.get(n)||t.sa.has(r)||(K("SyncEngine","New document in limbo: "+n),t.sa.add(r),Sh(t))}function Sh(t){for(;t.sa.size>0&&t.ia.size<t.maxConcurrentLimboResolutions;){const e=t.sa.values().next().value;t.sa.delete(e);const n=new Y(qe.fromString(e)),r=t.ca.next();t.ra.set(r,new XD(n)),t.ia=t.ia.insert(n,r),eb(t.remoteStore,new yr(Ar(fh(n.path)),r,2,uh.A))}}async function Qi(t,e,n){const r=le(t),s=[],i=[],o=[];r.ea.isEmpty()||(r.ea.forEach((a,l)=>{o.push(r.la(l,e,n).then(u=>{if(u){r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u.fromCache?"not-current":"current"),s.push(u);const c=vh.Ys(l.targetId,u);i.push(c)}}))}),await Promise.all(o),r.ta.Qo(s),await async function(a,l){const u=le(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>L.forEach(l,h=>L.forEach(h.Hs,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>L.forEach(h.Js,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!Wi(c))throw c;K("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.ii.get(h),f=d.snapshotVersion,p=d.withLastLimboFreeSnapshotVersion(f);u.ii=u.ii.insert(h,p)}}}(r.localStore,i))}async function iR(t,e){const n=le(t);if(!n.currentUser.isEqual(e)){K("SyncEngine","User change. New user:",e.toKey());const r=await Qy(n.localStore,e);n.currentUser=e,function(s,i){s.aa.forEach(o=>{o.forEach(a=>{a.reject(new J(D.CANCELLED,i))})}),s.aa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Qi(n,r.hi)}}function oR(t,e){const n=le(t),r=n.ra.get(e);if(r&&r.Zu)return $e().add(r.key);{let s=$e();const i=n.na.get(e);if(!i)return s;for(const o of i){const a=n.ea.get(o);s=s.unionWith(a.view.Ku)}return s}}function aR(t){const e=le(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ub.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=oR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=tR.bind(null,e),e.ta.Qo=qD.bind(null,e.eventManager),e.ta.fa=HD.bind(null,e.eventManager),e}function lR(t){const e=le(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=nR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=rR.bind(null,e),e}class uR{constructor(){this.synchronizeTabs=!1}async initialize(e){this.M=Ja(e.databaseInfo.databaseId),this.sharedClientState=this._a(e),this.persistence=this.wa(e),await this.persistence.start(),this.gcScheduler=this.ma(e),this.localStore=this.ga(e)}ma(e){return null}ga(e){return iD(this.persistence,new rD,e.initialUser,this.M)}wa(e){return new yD(bh.zi,this.M)}_a(e){return new _D}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class cR{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>lp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=iR.bind(null,this.syncEngine),await $D(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new VD}createDatastore(e){const n=Ja(e.databaseInfo.databaseId),r=(s=e.databaseInfo,new TD(s));var s;return function(i,o,a,l){return new CD(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,s=e.asyncQueue,i=a=>lp(this.syncEngine,a,0),o=ip.vt()?new ip:new wD,new DD(n,r,s,i,o);var n,r,s,i,o}createSyncEngine(e,n){return function(r,s,i,o,a,l,u){const c=new QD(r,s,i,o,a,l);return u&&(c.ha=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=le(e);K("RemoteStore","RemoteStore shutting down."),n.fu.add(5),await Xi(n),n._u.shutdown(),n.wu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.pa(this.observer.next,e)}error(e){this.observer.error?this.pa(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Ia(){this.muted=!0}pa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dR{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Ct.UNAUTHENTICATED,this.clientId=Sy.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{K("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(K("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new J(D.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new vr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Th(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function fR(t,e){t.asyncQueue.verifyOperationInProgress(),K("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Qy(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function pR(t,e){t.asyncQueue.verifyOperationInProgress();const n=await mR(t);K("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>op(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>op(e.remoteStore,i)),t.onlineComponents=e}async function mR(t){return t.offlineComponents||(K("FirestoreClient","Using default OfflineComponentProvider"),await fR(t,new uR)),t.offlineComponents}async function fb(t){return t.onlineComponents||(K("FirestoreClient","Using default OnlineComponentProvider"),await pR(t,new cR)),t.onlineComponents}function gR(t){return fb(t).then(e=>e.syncEngine)}async function cp(t){const e=await fb(t),n=e.eventManager;return n.onListen=YD.bind(null,e.syncEngine),n.onUnlisten=JD.bind(null,e.syncEngine),n}const hp=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pb(t,e,n){if(!n)throw new J(D.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function vR(t,e,n,r){if(e===!0&&r===!0)throw new J(D.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function dp(t){if(!Y.isDocumentKey(t))throw new J(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function fp(t){if(Y.isDocumentKey(t))throw new J(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ch(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":se()}function ni(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new J(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ch(t);throw new J(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new J(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new J(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,vR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(e,n,r){this._authCredentials=n,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new pp({}),this._settingsFrozen=!1,e instanceof ds?this._databaseId=e:(this._app=e,this._databaseId=function(s){if(!Object.prototype.hasOwnProperty.apply(s.options,["projectId"]))throw new J(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ds(s.options.projectId)}(e))}get app(){if(!this._app)throw new J(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new J(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new pp(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new LC;switch(n.type){case"gapi":const r=n.client;return Me(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new BC(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new J(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=hp.get(e);n&&(K("ComponentProvider","Removing Datastore"),hp.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Hn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Nt(this.firestore,e,this._key)}}class nl{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new nl(this.firestore,e,this._query)}}class Hn extends nl{constructor(e,n,r){super(e,n,fh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Nt(this.firestore,null,new Y(e))}withConverter(e){return new Hn(this.firestore,e,this._path)}}function yR(t,e,...n){if(t=Mt(t),pb("collection","path",e),t instanceof kh){const r=qe.fromString(e,...n);return fp(r),new Hn(t,null,r)}{if(!(t instanceof Nt||t instanceof Hn))throw new J(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(qe.fromString(e,...n));return fp(r),new Hn(t.firestore,null,r)}}function mp(t,e,...n){if(t=Mt(t),arguments.length===1&&(e=Sy.R()),pb("doc","path",e),t instanceof kh){const r=qe.fromString(e,...n);return dp(r),new Nt(t,null,new Y(r))}{if(!(t instanceof Nt||t instanceof Hn))throw new J(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(qe.fromString(e,...n));return dp(r),new Nt(t.firestore,t instanceof Hn?t.converter:null,new Y(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bR{constructor(){this.ka=Promise.resolve(),this.Ma=[],this.Oa=!1,this.Fa=[],this.$a=null,this.Ba=!1,this.La=!1,this.Ua=[],this.Do=new Zy(this,"async_queue_retry"),this.qa=()=>{const n=Bl();n&&K("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Do.Ao()};const e=Bl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qa)}get isShuttingDown(){return this.Oa}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ka(),this.Ga(e)}enterRestrictedMode(e){if(!this.Oa){this.Oa=!0,this.La=e||!1;const n=Bl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qa)}}enqueue(e){if(this.Ka(),this.Oa)return new Promise(()=>{});const n=new vr;return this.Ga(()=>this.Oa&&this.La?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ma.push(e),this.Qa()))}async Qa(){if(this.Ma.length!==0){try{await this.Ma[0](),this.Ma.shift(),this.Do.reset()}catch(e){if(!Wi(e))throw e;K("AsyncQueue","Operation failed with retryable error: "+e)}this.Ma.length>0&&this.Do.To(()=>this.Qa())}}Ga(e){const n=this.ka.then(()=>(this.Ba=!0,e().catch(r=>{this.$a=r,this.Ba=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw Gn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ba=!1,r))));return this.ka=n,n}enqueueAfterDelay(e,n,r){this.Ka(),this.Ua.indexOf(e)>-1&&(n=0);const s=Ih.createAndSchedule(this,e,n,r,i=>this.ja(i));return this.Fa.push(s),s}Ka(){this.$a&&se()}verifyOperationInProgress(){}async Wa(){let e;do e=this.ka,await e;while(e!==this.ka)}za(e){for(const n of this.Fa)if(n.timerId===e)return!0;return!1}Ha(e){return this.Wa().then(()=>{this.Fa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Fa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Wa()})}Ja(e){this.Ua.push(e)}ja(e){const n=this.Fa.indexOf(e);this.Fa.splice(n,1)}}function gp(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const s of n)if(s in r&&typeof r[s]=="function")return!0;return!1}(t,["next","error","complete"])}class na extends kh{constructor(e,n,r){super(e,n,r),this.type="firestore",this._queue=new bR,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||gb(this),this._firestoreClient.terminate()}}function ju(t=_c()){return Pr(t,"firestore").getImmediate()}function mb(t){return t._firestoreClient||gb(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function gb(t){var e;const n=t._freezeSettings(),r=function(s,i,o,a){return new qC(s,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new dR(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new J(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new kt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new vs(pt.fromBase64String(e))}catch(n){throw new J(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new vs(pt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vb{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new J(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new J(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ee(this._lat,e._lat)||Ee(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _R=/^__.*__$/;class wR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Hi(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ya(e,this.data,n,this.fieldTransforms)}}function yb(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw se()}}class xh{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.M=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ya(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Xa(){return this.settings.Xa}Za(e){return new xh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}tc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Za({path:r,ec:!1});return s.nc(e),s}sc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Za({path:r,ec:!1});return s.Ya(),s}ic(e){return this.Za({path:void 0,ec:!0})}rc(e){return ra(e,this.settings.methodName,this.settings.oc||!1,this.path,this.settings.uc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ya(){if(this.path)for(let e=0;e<this.path.length;e++)this.nc(this.path.get(e))}nc(e){if(e.length===0)throw this.rc("Document fields must not be empty");if(yb(this.Xa)&&_R.test(e))throw this.rc('Document fields cannot begin and end with "__"')}}class ER{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.M=r||Ja(e)}ac(e,n,r,s=!1){return new xh({Xa:e,methodName:n,uc:r,path:kt.emptyPath(),ec:!1,oc:s},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function IR(t){const e=t._freezeSettings(),n=Ja(t._databaseId);return new ER(t._databaseId,!!e.ignoreUndefinedProperties,n)}function TR(t,e,n,r,s,i={}){const o=t.ac(i.merge||i.mergeFields?2:0,e,n,s);Eb("Data must be an object, but it was:",o,r);const a=_b(r,o);let l,u;if(i.merge)l=new Ru(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const c=[];for(const h of i.mergeFields){const d=AR(e,h,n);if(!o.contains(d))throw new J(D.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);CR(c,d)||c.push(d)}l=new Ru(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new wR(new Qt(a),l,u)}function bb(t,e){if(wb(t=Mt(t)))return Eb("Unsupported field value:",e,t),_b(t,e);if(t instanceof vb)return function(n,r){if(!yb(r.Xa))throw r.rc(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.rc(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ec&&e.Xa!==4)throw e.rc("Nested arrays are not supported");return function(n,r){const s=[];let i=0;for(const o of n){let a=bb(o,r.ic(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(t,e)}return function(n,r){if((n=Mt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return fk(r.M,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=_t.fromDate(n);return{timestampValue:ea(r.M,s)}}if(n instanceof _t){const s=new _t(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ea(r.M,s)}}if(n instanceof Rh)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof vs)return{bytesValue:Hy(r.M,n._byteString)};if(n instanceof Nt){const s=r.databaseId,i=n.firestore._databaseId;if(!i.isEqual(s))throw r.rc(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:mh(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.rc(`Unsupported field value: ${Ch(n)}`)}(t,e)}function _b(t,e){const n={};return Cy(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ds(t,(r,s)=>{const i=bb(s,e.tc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function wb(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof _t||t instanceof Rh||t instanceof vs||t instanceof Nt||t instanceof vb)}function Eb(t,e,n){if(!wb(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Ch(n);throw r==="an object"?e.rc(t+" a custom object"):e.rc(t+" "+r)}}function AR(t,e,n){if((e=Mt(e))instanceof Dh)return e._internalPath;if(typeof e=="string")return Ib(t,e);throw ra("Field path arguments must be of type string or ",t,!1,void 0,n)}const SR=new RegExp("[~\\*/\\[\\]]");function Ib(t,e,n){if(e.search(SR)>=0)throw ra(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Dh(...e.split("."))._internalPath}catch{throw ra(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ra(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new J(D.INVALID_ARGUMENT,a+t+l)}function CR(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Nt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new kR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ab("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class kR extends Tb{data(){return super.data()}}function Ab(t,e){return typeof e=="string"?Ib(t,e):e instanceof Dh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Sb extends Tb{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Eo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ab("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Eo extends Sb{data(e={}){return super.data(e)}}class DR{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new zs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Eo(this._firestore,this._userDataWriter,r.key,r,new zs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new J(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let i=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new Eo(r._firestore,r._userDataWriter,o.doc.key,o.doc,new zs(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:i++}))}{let i=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new Eo(r._firestore,r._userDataWriter,o.doc.key,o.doc,new zs(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:RR(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function RR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return se()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xR(t){if(Yo(t)&&t.explicitOrderBy.length===0)throw new J(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OR{convertValue(e,n="none"){switch(Tr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(hs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw se()}}convertObject(e,n){const r={};return Ds(e.fields,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new Rh(Qe(e.latitude),Qe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Dy(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ei(e));default:return null}}convertTimestamp(e){const n=Xn(e);return new _t(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=qe.fromString(e);Me(Xy(r));const s=new ds(r.get(1),r.get(3)),i=new Y(r.popFirst(5));return s.isEqual(n)||Gn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PR(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Cb extends OR{constructor(e){super(),this.firestore=e}convertBytes(e){return new vs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Nt(this.firestore,null,n)}}function NR(t,e,n){t=ni(t,Nt);const r=ni(t.firestore,na),s=PR(t.converter,e,n);return FR(r,[TR(IR(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,ts.none())])}function LR(t,...e){var n,r,s;t=Mt(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||gp(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(gp(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let l,u,c;if(t instanceof Nt)u=ni(t.firestore,na),c=fh(t._key.path),l={next:h=>{e[o]&&e[o](MR(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=ni(t,nl);u=ni(h.firestore,na),c=h._query;const d=new Cb(u);l={next:f=>{e[o]&&e[o](new DR(u,d,h,f))},error:e[o+1],complete:e[o+2]},xR(t._query)}return function(h,d,f,p){const g=new hR(p),y=new KD(d,g,f);return h.asyncQueue.enqueueAndForget(async()=>jD(await cp(h),y)),()=>{g.Ia(),h.asyncQueue.enqueueAndForget(async()=>zD(await cp(h),y))}}(mb(u),c,a,l)}function FR(t,e){return function(n,r){const s=new vr;return n.asyncQueue.enqueueAndForget(async()=>eR(await gR(n),r,s)),s.promise}(mb(t),e)}function MR(t,e,n){const r=n.docs.get(e._key),s=new Cb(t);return new Sb(t,s,e._key,r,new zs(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){ks=n})(Ri),cn(new Jt("firestore",(n,{options:r})=>{const s=n.getProvider("app").getImmediate(),i=new na(s,new FC(n.getProvider("auth-internal")),new UC(n.getProvider("app-check-internal")));return r=Object.assign({useFetchStreams:e},r),i._setSettings(r),i},"PUBLIC")),zt(Mf,"3.4.8",t),zt(Mf,"3.4.8","esm2017")})();const BR=vc("item",{state:()=>({itemList:[],slotTitleList:[]}),actions:{async addItem(t,e,n){const r=S1(),s=!1,i=gt($({},t),{id:r,shared:s});return this.itemList.push(i),this.saveData(e,n)},async removeItem(t,e,n){const r=this.itemList.findIndex(s=>s.id===t.id);if(r<0)throw new Error(`Can't find item [${t.id}]`);return this.itemList.splice(r,1),this.saveData(e,n)},async updateItem(t,e,n){return this.saveData(e,n)},async saveData(t,e){const n=ju(),r=mp(yR(n,t),e);return NR(r,{items:this.itemList,slotTitles:this.slotTitleList})},connect(t,e){const n=ju();LR(mp(n,t,e),r=>{var s,i,o,a;this.slotTitleList=(i=(s=r.data())==null?void 0:s.slotTitles)!=null?i:[],this.itemList=(a=(o=r.data())==null?void 0:o.items)!=null?a:[]})}},getters:{getList:t=>t.itemList,getSlotTitleList:t=>t.slotTitleList,getSlotList:t=>e=>t.itemList.filter(n=>n.slot===e)}});const $R={},UR={class:"divide-y"};function VR(t,e){return Se(),Je("ul",UR,[_a(t.$slots,"default",{},void 0,!0)])}var kb=Cn($R,[["render",VR],["__scopeId","data-v-3b882242"]]);const jR={},zR={class:"py-2"};function qR(t,e){return Se(),Je("li",zR,[_a(t.$slots,"default")])}var Db=Cn(jR,[["render",qR]]),HR=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,KR=/[\0-\x1F\x7F-\x9F]/,WR=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,GR=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,XR=function(t){var e={};e.src_Any=HR.source,e.src_Cc=KR.source,e.src_Z=WR.source,e.src_P=GR.source,e.src_ZPCc=[e.src_Z,e.src_P,e.src_Cc].join("|"),e.src_ZCc=[e.src_Z,e.src_Cc].join("|");var n="[><\uFF5C]";return e.src_pseudo_letter="(?:(?!"+n+"|"+e.src_ZPCc+")"+e.src_Any+")",e.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",e.src_auth="(?:(?:(?!"+e.src_ZCc+"|[@/\\[\\]()]).)+@)?",e.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",e.src_host_terminator="(?=$|"+n+"|"+e.src_ZPCc+")(?!-|_|:\\d|\\.-|\\.(?!$|"+e.src_ZPCc+"))",e.src_path="(?:[/?#](?:(?!"+e.src_ZCc+"|"+n+`|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!`+e.src_ZCc+"|\\]).)*\\]|\\((?:(?!"+e.src_ZCc+"|[)]).)*\\)|\\{(?:(?!"+e.src_ZCc+'|[}]).)*\\}|\\"(?:(?!'+e.src_ZCc+`|["]).)+\\"|\\'(?:(?!`+e.src_ZCc+"|[']).)+\\'|\\'(?="+e.src_pseudo_letter+"|[-]).|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!"+e.src_ZCc+"|[.]).|"+(t&&t["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+",(?!"+e.src_ZCc+").|;(?!"+e.src_ZCc+").|\\!+(?!"+e.src_ZCc+"|[!]).|\\?(?!"+e.src_ZCc+"|[?]).)+|\\/)?",e.src_email_name='[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*',e.src_xn="xn--[a-z0-9\\-]{1,59}",e.src_domain_root="(?:"+e.src_xn+"|"+e.src_pseudo_letter+"{1,63})",e.src_domain="(?:"+e.src_xn+"|(?:"+e.src_pseudo_letter+")|(?:"+e.src_pseudo_letter+"(?:-|"+e.src_pseudo_letter+"){0,61}"+e.src_pseudo_letter+"))",e.src_host="(?:(?:(?:(?:"+e.src_domain+")\\.)*"+e.src_domain+"))",e.tpl_host_fuzzy="(?:"+e.src_ip4+"|(?:(?:(?:"+e.src_domain+")\\.)+(?:%TLDS%)))",e.tpl_host_no_ip_fuzzy="(?:(?:(?:"+e.src_domain+")\\.)+(?:%TLDS%))",e.src_host_strict=e.src_host+e.src_host_terminator,e.tpl_host_fuzzy_strict=e.tpl_host_fuzzy+e.src_host_terminator,e.src_host_port_strict=e.src_host+e.src_port+e.src_host_terminator,e.tpl_host_port_fuzzy_strict=e.tpl_host_fuzzy+e.src_port+e.src_host_terminator,e.tpl_host_port_no_ip_fuzzy_strict=e.tpl_host_no_ip_fuzzy+e.src_port+e.src_host_terminator,e.tpl_host_fuzzy_test="localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+e.src_ZPCc+"|>|$))",e.tpl_email_fuzzy="(^|"+n+'|"|\\(|'+e.src_ZCc+")("+e.src_email_name+"@"+e.tpl_host_fuzzy_strict+")",e.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|"+e.src_ZPCc+"))((?![$+<=>^`|\uFF5C])"+e.tpl_host_port_fuzzy_strict+e.src_path+")",e.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|"+e.src_ZPCc+"))((?![$+<=>^`|\uFF5C])"+e.tpl_host_port_no_ip_fuzzy_strict+e.src_path+")",e};function zu(t){var e=Array.prototype.slice.call(arguments,1);return e.forEach(function(n){!n||Object.keys(n).forEach(function(r){t[r]=n[r]})}),t}function rl(t){return Object.prototype.toString.call(t)}function QR(t){return rl(t)==="[object String]"}function YR(t){return rl(t)==="[object Object]"}function ZR(t){return rl(t)==="[object RegExp]"}function vp(t){return rl(t)==="[object Function]"}function JR(t){return t.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}var Rb={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function ex(t){return Object.keys(t||{}).reduce(function(e,n){return e||Rb.hasOwnProperty(n)},!1)}var tx={"http:":{validate:function(t,e,n){var r=t.slice(e);return n.re.http||(n.re.http=new RegExp("^\\/\\/"+n.re.src_auth+n.re.src_host_port_strict+n.re.src_path,"i")),n.re.http.test(r)?r.match(n.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(t,e,n){var r=t.slice(e);return n.re.no_http||(n.re.no_http=new RegExp("^"+n.re.src_auth+"(?:localhost|(?:(?:"+n.re.src_domain+")\\.)+"+n.re.src_domain_root+")"+n.re.src_port+n.re.src_host_terminator+n.re.src_path,"i")),n.re.no_http.test(r)?e>=3&&t[e-3]===":"||e>=3&&t[e-3]==="/"?0:r.match(n.re.no_http)[0].length:0}},"mailto:":{validate:function(t,e,n){var r=t.slice(e);return n.re.mailto||(n.re.mailto=new RegExp("^"+n.re.src_email_name+"@"+n.re.src_host_strict,"i")),n.re.mailto.test(r)?r.match(n.re.mailto)[0].length:0}}},nx="a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",rx="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|\u0440\u0444".split("|");function sx(t){t.__index__=-1,t.__text_cache__=""}function ix(t){return function(e,n){var r=e.slice(n);return t.test(r)?r.match(t)[0].length:0}}function yp(){return function(t,e){e.normalize(t)}}function sa(t){var e=t.re=XR(t.__opts__),n=t.__tlds__.slice();t.onCompile(),t.__tlds_replaced__||n.push(nx),n.push(e.src_xn),e.src_tlds=n.join("|");function r(a){return a.replace("%TLDS%",e.src_tlds)}e.email_fuzzy=RegExp(r(e.tpl_email_fuzzy),"i"),e.link_fuzzy=RegExp(r(e.tpl_link_fuzzy),"i"),e.link_no_ip_fuzzy=RegExp(r(e.tpl_link_no_ip_fuzzy),"i"),e.host_fuzzy_test=RegExp(r(e.tpl_host_fuzzy_test),"i");var s=[];t.__compiled__={};function i(a,l){throw new Error('(LinkifyIt) Invalid schema "'+a+'": '+l)}Object.keys(t.__schemas__).forEach(function(a){var l=t.__schemas__[a];if(l!==null){var u={validate:null,link:null};if(t.__compiled__[a]=u,YR(l)){ZR(l.validate)?u.validate=ix(l.validate):vp(l.validate)?u.validate=l.validate:i(a,l),vp(l.normalize)?u.normalize=l.normalize:l.normalize?i(a,l):u.normalize=yp();return}if(QR(l)){s.push(a);return}i(a,l)}}),s.forEach(function(a){!t.__compiled__[t.__schemas__[a]]||(t.__compiled__[a].validate=t.__compiled__[t.__schemas__[a]].validate,t.__compiled__[a].normalize=t.__compiled__[t.__schemas__[a]].normalize)}),t.__compiled__[""]={validate:null,normalize:yp()};var o=Object.keys(t.__compiled__).filter(function(a){return a.length>0&&t.__compiled__[a]}).map(JR).join("|");t.re.schema_test=RegExp("(^|(?!_)(?:[><\uFF5C]|"+e.src_ZPCc+"))("+o+")","i"),t.re.schema_search=RegExp("(^|(?!_)(?:[><\uFF5C]|"+e.src_ZPCc+"))("+o+")","ig"),t.re.pretest=RegExp("("+t.re.schema_test.source+")|("+t.re.host_fuzzy_test.source+")|@","i"),sx(t)}function ox(t,e){var n=t.__index__,r=t.__last_index__,s=t.__text_cache__.slice(n,r);this.schema=t.__schema__.toLowerCase(),this.index=n+e,this.lastIndex=r+e,this.raw=s,this.text=s,this.url=s}function bp(t,e){var n=new ox(t,e);return t.__compiled__[n.schema].normalize(n,t),n}function Kt(t,e){if(!(this instanceof Kt))return new Kt(t,e);e||ex(t)&&(e=t,t={}),this.__opts__=zu({},Rb,e),this.__index__=-1,this.__last_index__=-1,this.__schema__="",this.__text_cache__="",this.__schemas__=zu({},tx,t),this.__compiled__={},this.__tlds__=rx,this.__tlds_replaced__=!1,this.re={},sa(this)}Kt.prototype.add=function(e,n){return this.__schemas__[e]=n,sa(this),this};Kt.prototype.set=function(e){return this.__opts__=zu(this.__opts__,e),this};Kt.prototype.test=function(e){if(this.__text_cache__=e,this.__index__=-1,!e.length)return!1;var n,r,s,i,o,a,l,u,c;if(this.re.schema_test.test(e)){for(l=this.re.schema_search,l.lastIndex=0;(n=l.exec(e))!==null;)if(i=this.testSchemaAt(e,n[2],l.lastIndex),i){this.__schema__=n[2],this.__index__=n.index+n[1].length,this.__last_index__=n.index+n[0].length+i;break}}return this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&(u=e.search(this.re.host_fuzzy_test),u>=0&&(this.__index__<0||u<this.__index__)&&(r=e.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))!==null&&(o=r.index+r[1].length,(this.__index__<0||o<this.__index__)&&(this.__schema__="",this.__index__=o,this.__last_index__=r.index+r[0].length))),this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&(c=e.indexOf("@"),c>=0&&(s=e.match(this.re.email_fuzzy))!==null&&(o=s.index+s[1].length,a=s.index+s[0].length,(this.__index__<0||o<this.__index__||o===this.__index__&&a>this.__last_index__)&&(this.__schema__="mailto:",this.__index__=o,this.__last_index__=a))),this.__index__>=0};Kt.prototype.pretest=function(e){return this.re.pretest.test(e)};Kt.prototype.testSchemaAt=function(e,n,r){return this.__compiled__[n.toLowerCase()]?this.__compiled__[n.toLowerCase()].validate(e,r,this):0};Kt.prototype.match=function(e){var n=0,r=[];this.__index__>=0&&this.__text_cache__===e&&(r.push(bp(this,n)),n=this.__last_index__);for(var s=n?e.slice(n):e;this.test(s);)r.push(bp(this,n)),s=s.slice(this.__last_index__),n+=this.__last_index__;return r.length?r:null};Kt.prototype.tlds=function(e,n){return e=Array.isArray(e)?e:[e],n?(this.__tlds__=this.__tlds__.concat(e).sort().filter(function(r,s,i){return r!==i[s-1]}).reverse(),sa(this),this):(this.__tlds__=e.slice(),this.__tlds_replaced__=!0,sa(this),this)};Kt.prototype.normalize=function(e){e.schema||(e.url="http://"+e.url),e.schema==="mailto:"&&!/^mailto:/i.test(e.url)&&(e.url="mailto:"+e.url)};Kt.prototype.onCompile=function(){};var ax=Kt;const lx={};function ux(t,e){return Se(),Je("button",ba({class:"text-white font-bold px-1 rounded transition-colors"},t.$attrs),[_a(t.$slots,"default")],16)}var _p=Cn(lx,[["render",ux]]);const cx={class:"flex justify-end"},hx=xr(" \u{1F5D1} "),dx=G({props:{item:{type:Object,default:null}},emits:["delete","update","save","toggle"],setup(t,{emit:e}){const n=t,r=ax(),s=a=>{var l;n.item.text=((l=i.value)==null?void 0:l.innerText)||"",e("update",n.item)},i=k(null),o=R(()=>{const a=r.match(n.item.text);return((a==null?void 0:a.reduce((l,u)=>l.replace(u.raw,`<a onclick="window.open('${u.url}', '_blank').focus()" href="${u.url}">${u.raw}</a>`),n.item.text))||n.item.text).replace(/\n/g,"<br/>")});return(a,l)=>(Se(),Je(lt,null,[(Se(),un(H_("p"),{onFocusout:s,contenteditable:"true",class:"prose prose-a:text-blue-600",innerHTML:_e(o),ref_key:"element",ref:i},null,8,["innerHTML"])),ye("div",cx,[ue(_p,{title:"Delete",onClick:l[0]||(l[0]=u=>e("delete",t.item))},{default:ot(()=>[hx]),_:1}),ue(_p,{onClick:l[1]||(l[1]=u=>e("toggle",t.item)),title:"Share"},{default:ot(()=>[xr(Ci(t.item.shared?"\u{1F645}\u200D\u2642\uFE0F":"\u{1F481}"),1)]),_:1})])],64))}});const fx={class:"block text-sm font-bold mb-2"},px=["type","placeholder"],mx=G({props:{label:{default:""},type:{default:"text"},modelValue:{default:""},placeholder:{default:""}},emits:["update:modelValue"],setup(t,{emit:e}){const r=ig(t,"modelValue",e);return(s,i)=>(Se(),Je("label",fx,[xr(Ci(t.label)+" ",1),ki(ye("textarea",{class:"input",type:t.type,placeholder:t.placeholder,"onUpdate:modelValue":i[0]||(i[0]=o=>Fe(r)?r.value=o:null)},null,8,px),[[Mm,_e(r)]])]))}});var gx=Cn(mx,[["__scopeId","data-v-63717520"]]);const vx={class:"mt-2 w-full"},yx=G({props:{slot:{type:Number,default:null}},emits:["save"],setup(t,{emit:e}){const n=t,r=k(""),s=()=>{e("save",r.value,n.slot),r.value=""};return(i,o)=>(Se(),Je("div",vx,[ue(gx,{modelValue:r.value,"onUpdate:modelValue":o[0]||(o[0]=a=>r.value=a),placeholder:`Enter things into ${t.slot}...`,onKeydown:Bm(pc(s,["exact","prevent"]),["enter"])},null,8,["modelValue","placeholder","onKeydown"])]))}});const bx=["placeholder"],_x=G({props:{modelValue:{default:""},slotno:{default:0},updateEvent:null},emits:["update:modelValue"],setup(t,{emit:e}){const r=ig(t,"modelValue",e);return(s,i)=>(Se(),Je("label",null,[xr(Ci(t.slotno)+": ",1),ki(ye("input",{class:"input",placeholder:`${t.slotno} title`,"onUpdate:modelValue":i[0]||(i[0]=o=>Fe(r)?r.value=o:null),onKeydown:i[1]||(i[1]=Bm(pc((...o)=>t.updateEvent&&t.updateEvent(...o),["prevent"]),["enter"])),onBlur:i[2]||(i[2]=(...o)=>t.updateEvent&&t.updateEvent(...o))},null,40,bx),[[Mm,_e(r)]])]))}});var wx=Cn(_x,[["__scopeId","data-v-684f2c5c"]]);const xb=t=>(o_("data-v-6a2c4950"),t=t(),a_(),t),Ex={class:"h-full grid grid-cols-5 gap-4 divide-x"},Ix=xb(()=>ye("div",{class:"px-4"},[ye("h2",{class:"text-2xl dark:text-white"},"Longer List"),ye("p",null,"coming soon...")],-1)),Tx={class:"px-4 mt-4 col-span-3"},Ax=xb(()=>ye("div",{class:"px-4"},[ye("h2",{class:"text-2xl dark:text-white"},"Script"),ye("p",null,"coming soon...")],-1)),Sx=G({setup(t){const e=mi(),n=BR(),r=k(!1),{user:s,isAuthenticated:i}=cg(e),o="todaysdate",a="smartseven";At(i,async u=>{u&&(await n.connect(a,o),r.value=!0)},{immediate:!0});const l={onClickSave(u,c){n.addItem({text:u,slot:c},a,o)},onUpdateSaveDoc(){n.saveData(a,o)},onClickDelete(u){n.removeItem(u,a,o)},onClickUpdate(u){n.updateItem(u,a,o)},onClickToggle(u){u.shared=!u.shared,n.updateItem(u,a,o)}};return(u,c)=>ki((Se(),Je("main",Ex,[Ix,ye("div",Tx,[(Se(!0),Je(lt,null,tu(Array.from({length:7},(h,d)=>7-d),h=>(Se(),Je("section",{key:h},[ue(wx,{modelValue:_e(n).getSlotTitleList[h],"onUpdate:modelValue":d=>_e(n).getSlotTitleList[h]=d,slotno:h,updateEvent:l.onUpdateSaveDoc},null,8,["modelValue","onUpdate:modelValue","slotno","updateEvent"]),ue(kb,null,{default:ot(()=>[(Se(!0),Je(lt,null,tu(_e(n).getSlotList(h),d=>(Se(),un(Db,{key:d.id},{default:ot(()=>[ue(dx,{item:d,onDelete:l.onClickDelete,onToggle:l.onClickToggle,onUpdate:l.onClickUpdate},null,8,["item","onDelete","onToggle","onUpdate"])]),_:2},1024))),128)),ue(yx,{onSave:l.onClickSave,slot:h},null,8,["onSave","slot"])]),_:2},1024)]))),128))]),Ax],512)),[[$m,r.value&&_e(i)]])}});var Cx=Cn(Sx,[["__scopeId","data-v-6a2c4950"]]);const kx={};function Dx(t,e){return Se(),Je("button",ba({class:"text-white font-bold py-2 px-4 rounded transition-colors"},t.$attrs),[_a(t.$slots,"default")],16)}var Rx=Cn(kx,[["render",Dx]]);const xx={class:"container h-screen flex justify-center items-center"},Ox={class:"p-8 max-w-6xl"},Px=ye("h1",{class:"font-bold text-indigo-800 dark:text-indigo-200 text-3xl text-center mb-8"},"Login",-1),Nx=ye("h2",{class:"font-bold text-2xl text-center dark:text-gray-50 mb-8"},"Daft Doris",-1),Lx=["src","alt"],Fx=G({setup(t){const e=k(null),{loginWithFirebase:n}=mi(),r=Ym(),s=[{name:"Google",provider:new gn,color:"btn-login-google",icon:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoGCBUTExcTFRMYGBcYGhwZFxkZGhcaGhcZGhcZGRoXFx8aHysjGhwoIRgZJDUkKCwuMjIyGSE3PDcxOysxMi4BCwsLDw4PHBERHTMoISgyMTs5Oi4xMzE0MTYxMTE0MjkxMzEyMS4xOTExMTExMTEzMTExOTEzMTEzMTEzMTExMf/AABEIAOAA4AMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQIHBAUGAwj/xAA9EAABAgMFBQcDAwMDBQEBAAABAAIRITEDEkFh8AQiUXGxBQYygZGh0QdCYhNSwRQjcpLC8UNTgqLhc0T/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAwQFBgEC/8QAMBEAAgECBAQDBwUBAAAAAAAAAAECAwQREiExBUFRoSJhsRMUMnGBkeEGM0LB0VL/2gAMAwEAAhEDEQA/ALdY26YlN7b0xyQ196R9knOuyHOaAk50RAVSYbsimW3ReFflJgvzPsgEGwN7Cqb96mCA6Ju4U9EP3KY8UA70ruNEmbtcU7sr2NUmb9cOCARaY3sKpvN6iV6d3CmabtymPFANroC6a/KTG3ZlMNiL2PwotN+R5yQA5pcYiik916QSc+7IJubdmPdADHXZFRa0tMTRNrb0zykhr70igB7b0xyTc6IuivwoudckOc1ItgL2PygEw3aoDZ3sKobv1w4JB07uFM0A371ME70ruNEn7lMeKd2V7GuSATN2uKRbE3sKps364cEF0Ddwp6oAeb0gm10BA1SeLkx7ptZHeNfhAJjbszySe0umENdekeck3OuyHugG9wIgKoYQ2Rr6pFl2YQ1t+Z5IAa0gxNEni94fhMOvbupIcbkggGXAiAqlZ7vi+Uy2G95+qTRfrggFAxjhXyTtN7w+eCL32+SHblMf4QDDhCGNPNJgu+L5XMd4O+Vhs5LWRtbT9rSLrT+Tv4ESuH7Y70bVtMQ60uM/YyLR5nxH1VapdQp6bvyNS04PcXCTwyx6v+kWZ2r27s9gY2lsxv4xi7/S2J9loNv+oViJWdlaPzMGD3n7Ku2sAwTVGd/J/CsDcpcAt4/uNyf2X+nYWv1Ctvs2dg/yc5x9gFhP787YJgWX+lx/3LnFG0oeSh97qv8AkXo8LtI6KC7s2zfqXtkYltkf/Fw6OWw2f6pWtLTZmH/Fzm9QVXQQrftZrmVpcNtZbwXoXB2X9StldK0Y+zPEgPA82z9l03ZPbFhtE7K3Y/IOF4c2mY9F88qTHlpiCQRQiII5QUkbiS31KdXgtCXwNp/dH0o8XvD8JlwhDGnmqU7vd+9q2eDXO/VZ+1/i8nVjziFZHdvvfsu1wg65af8AbfAEn8TR3lPJWIVoy02Zj3PDa9DxYYx6r+zorPd8XlilAxjhXyUhv1wSvfbhRTGcD97w/CYcAIGqHblMUXY73n6IBMF3xfKHNJMRRAN+RQXXd3U0A3mMm19EMcBI1Q5t2Y5IDL0ygIsBHipmh4J8NMpJh96VEF1yVcUA3EEQFUNl4veaV27vammG3p0QEQDGJp7QTdPw+cJIvR3fKPJa3vB2vZ7HZF7zGMmtHic79o1JeOSisWfUISnJRisWzI7U7RstnszaWrg0AVxJ4NxJVZd5e9lrtMWMJs7L9oO+/wDzOAyHutX232rabVaG0tT/AIMHhYOAz4lYaybi7lLwx0Xqdlw7g0KCU6usuyE1sE0IVA3iaEIQiBRtKFSUbShXoW5z4QhCvlQEIQgBMFJCHp3XdHv/AGljdstoJtLOgf8AewZ/vHOfRWtsW1Wdqxr7N4eHDdcJx8+K+b11v0z7YtLDamWQJNnaOg5kyIwk5vA0niFZpVmng9jD4hwynKLqU9GsX5MulkvF5RmkQYxFP4Uhv5QSvQ3fKPNXTmBun4faSGkAQNUEXJ1Rdvb2pIBMBHipnOaHxJlTJAdflTFO/dlVAD4Q3a5IZD7q58EXLs6pXb86YIAbGM6Z0Q/8fZF69u6kiNyVUBi9q7fZ7PZOtbQgBonxJ/aOJJkqe7c7UftVqbZ5PBjcGN4DPiVtO/fbn9TbGzaf7VmSB+b/ALn8hQeuK55ZF3cZpZY7LudnwbhyoU/azXifZDQhCoG8CEJEwQ9PRRLoLZdi9h2+1H+22DIgF5oIz6fxxXa9l9xLCzAdbE2jpREYAGBjA1PtRWKVtOpqloZV1xO3tnhKWL6LV/4itw6NATyBK9Bs1o4btk88hHCKujZOyrFgiyyY3k0RxxrifVZgdGVFbjw/q+xkz/UWvgp/d/g+cbXYbRoN6yeABOLTTjyXgWkVBC+lCbsqrB7Q7FsLUf3LBj+bRGfA1Cndq+TIocdWPjh9n+D53Qrc7Y+m1hagusHOsT+07zT6zHqVXfeHu5tGxn+7Z7sYB7ZsPnhyMCoZ0pQ3RqW9/Rr6Rlr0ej/Jp0IQAoy4MDWsFan037nGzu7VtDd8wNnZkeAVvv8Ay4DDGdF9OO5VyG07Q3ekbOzI8PB7x+7gMOdLCvfb5RVujR/lI5vifEs2NKk9Ob6+SG/8fOCBCE/F7xShczii7He84clbMEGflTNDoxlTKiI35UReu7upoBvh9tcuCGQ+6uaV25OuCdy9OiAiwmO9TND4jw0ynNMuvSQDclXFANwEJVyqtf2zbwZdPidL/wAceUaevBZ9y7vamud7Rt77y7Cg5Cnz5rL4tduhbvD4nov7LFtTzT12RyPandgGLrAw/AmR5ONOR9VzW0WLrNxY5pa4VBEDrNWVrWea8Ns2SztW3bRoIw4jMGo5Y4rl6N9KOk9V3Oot+Izp6T1XcrpC3navdt7IusyXt4fcPIV8vRaJ0qrTp1IzWMXibdG4p1ljB4h7k0HFdt3V7mOddtdoHBwZjDC9wj68sD6d934uG0WrP/zDhicYYw48eUrBAuzrFa1raprPP6I5zi/F5KTo0X83/SCws2taAAGwwAA9k2T8VM+KLsd7Ukyb0qYrTOXepF5Md2mSk+H21yQHXZJBl2dUA2Q+6uai0mO9TNMsvTomXXpIBPiPDTJQ2mxY9pa5rXBwgWkAgg1BGK9Absq4pBsN7U0PU8NUVn3o+nBLr+yEAGtm4wh/gThkfVZ3cbuJ+g8W20gOe07jKtaf3uNCeAwrwh3sL06QUr32+SiVCKliXZcSuJU/ZuWnXn9xWn4+cE4CH5e8UDczii793mpSiJk/F5RSJMZeH2gpHfygi9Dd8vVAD/xrkhsITrnVKFydUFl7e1JADCfupnxQ8n7aZJk3pUxQHXZVQA4ACLa+qGgHxV9EmsuzKTm35jlNAY+32xbZuJ4QHMyHz5LnNa1JbrvBb7rWjEx9B/8AVpda+FyHHa2euocku7NOzhhFvqLWssk9az6I1rPolrWXVYZcDWsssVj23YVntLxFpjeG82EZTN6MiIcY4BZOtZ54LddiWQaC8j8RSVC6E5TgIS8C0eF0ZVbiKWy1fyIqtaVGOaLwZsLGya1gAELoAHkIDopMn4vhFyd7CqbjfphxXdGK9ROJBgKJvEPDX1QHQF3H5Sa27M8pIBsAIiapMJMnU9EObemE3OvSHugE8kSbT1Te0ARFUNddkeax27XZtMTas5X2x6pgDIYI+Kvok0kmBovB+2WTpi1s/NzflN23WREP1Gf624ea9ys+cyPZ8vD8pkCEcf5Xg3bbNtbVh5Ob8qI2uyje/Vs+PjbHqmDGZGQyfi8sERMYYfwvB+2WTv8Aq2Yhxe35T/rrKEP1GcPE2HVMrGZHu+Xh88UACETVY7Nssm/9WzMeD2/KR2qyJvfq2fHxtj1TBnuJkMMfF8IcSDAUXl/WWb4AWjI/5N9oFewddEDqK8wPQeAJtr6oYAZur6JNbdmeUkObemEAmOLjA0Te67IJufekEmOuyPNAaXvBC+0fjH3OoLWnWv5wWd22P7nl/GuXmsHWsssVwfE5Zrqb8/Q2LdYU0LWsuqNaz6J61n0S1rLqs8nJMAiI0lHl8dV0vZ7NxoOAB8zM48VzlkJ+R5+E+66l29TBdL+n4azn8kZ969kIuMbuFFJ4u0QHSu40SYLtcV05QJNAIvGqiw3pFDmxN4U+E3m9Ic0AnuLTAUTe0NmENddECkxt2ZQHBfVztB7WWVi1xa195z4GF4NugNMMImMMZKt7g4a+ei7/AOsZjabOR+1/Vq4HWsuq37GKVFNc8TEvJN1WumBG4OA1/HVO4OGvnopa1n0RrWXVXCrmZC4OA1/HVO4OGvnopa1n0S1rLqvBmYrg4DX8dU7g4a+eilrWfRGtZdUPMzIXBwGv46o/THD21Pop61n0RrWXVBmZD9McBrVcVan0r7SfbWL7O0cXGyIukmLrrgYA8oe6q/Ws+i7j6Qk/rWrZeAH0cKcamaqX0FKi/L/S1aTaqrzLJYb0ih7i0wFE3m9Ic0MddkVgG4J7Lswhjb0zySY0tMTRN7b0wgNF24f7nlrWKwNazzwW07w+JpHCHnPUVq9ay6rg+Jxy3U15+psW7xpoWtZdU9az6I1rPolrWXVZ5OelgYO8j0Psupdu0xXKMdAg568+i6fY37oJxHSRXS/p6osZw+TM+9jqmet2V7GqTDfrgkWmN7Cqk83qLpygIugbop8pvF2Y5IaQBdNflJguzKAbW3hEpMdekUntLjEUUnuDpBAVv9YxC02cfjadW+y4PWs+i7z6wtIfs8f22nrFnuuC1rLqugsv2I/Uwrz95/QNay6p61n0RrWfRGtZdVbKwtay6p61n0RrWfRLWsuqHhLWsuqNaz6I1rPojWsuq8Aa1l1RrWfRGtZ9Ea1lnigDWsuq7f6RxFtan8IU4ub6clxGtZ5YKwfo9ZQ/XefxaDzjER8gq148KEvoWbRY1olhPF2Y5IY29MpMbdmUPaXGIoueN4GvvSKTnXJDnNSeQZNr6IYQPFX1QGu7esdwHgeq0etZ9F0+02Rc1wNCD/8AFzDhCXDXp1XIceo5a6nya7o07OeMXHoLWsuqetZ9Ea1n0S1rLqsIuBrWXVb/ALFtbzbpqNH+PVaFrSTAV94/PRYdv3lsNktA1zy5xIDmsncEYEvMYCE5V4wWlwurKlcKSWK2eHRlO8lTVNuTwO4vQN3CiZF2mPFRsbVrmgggxEQROMaEFNgh4vld0ZmOIw2O9j8JNdekeckOBJiKJvMfDX0QCc67IJubdmPdDCAIGqTARN1PVAa3vB2LZ7bZ3LSIgYtc2rTxHQhcaPpuSYDaf/T38SsR4Jm2nom4xkFYpXVWksIPQgqW9ObxktSurT6bES/qR/oPp4lJ301IEf6kf6PQ1VhsMPFX1SaCDE0Unv8AX/67EfuVHp3ZXln9NSf/AOkf6D5/ckPpuYw/qf8A0xwNVYjxHw/C8O0dsZY2T7R7roa2Ljy/le+/XH/XZD3Oj07lQd7uwW7E9ln+rfe5t4iEA1tJzNTH0Wj1rPosztnb37Tb2lu+rzIftaJNaOQ/krD1rLPFbNLPkWd68zHq5c7y7BrWWeKNazyRrWeWCNayzxUhGGtZZ4q1/pZsV3ZL5q95PkAAMON5VVZsLnBoBJJAgKnkOPAK8+xdiNjYWVkKMYAedXe8Vn8RnhBR6v0NCwhjNy6L1M1rr0jzkhzrsgm4g+GvohhAk6vqsU1xFl2dUAX50wQwH7qZofH7aZIAvXt3UloO2NnuPyMxrVF0DoQlXKqxO0dnvsIPiExj/wA8lm8VtPeLdpfEtUT0Kvs5YvY5yOtYdVjdqdoWWztvWr7pq1gm90f2t/3GAHFc52z3udNmztLatNo8b0aG4wybzdE5Ca5S1tC5xe5xc503OcSS7MkzP8rmqHDpS8VTRdOf4IbzjMY+Gjq+vI3vbXei1tYss/7TImTTvuH5OrD8RDzqdAGwlDWvRGtZ9Ea1l1WtTpxprLFYI56rXqVZZpvFnd/TfvQGQ2W3dL/ovNB+BPDgVZQN6VIL56I1rHou67m9+DZBtjtR3BJlrOIHC04j8lo29xh4ZbFy1u0llntyLMvQ3dTTIuzrgobPate0ODg6IiCCDHgQVJkfupmtA1E8Rht6aQfelRDgY7tMk3w+2uSARfdlVMtuzQyH3VzSaDHepmgGBenTBIOju6kh/wCNMl49o7ZZ2NmbS0e1jW1cTD/koD1e67yqSZQgqn+oHeYbU/8ARsj/AGWOiT/3XjEcWjD14I7598H7UDY2V5lj9xMn2mR/a38fXguV1rLqtezs3F+0qb8kZd3dJrJD6setZdUa1nlgjWs8ka1lnitMzQ1rLPFGtfCNazywQBGQxkNcM0B0n067L/X2ppIiyz33UIlQTrEwwONFb167LU1zvcXsj+m2YSN+0g9wIAc0Qkw4yrA0LjRdG0iE651XP3db2lR4bLRG7aUslNY7vUCLs64IDb06JMj91M0PB+2mSqlkd+9KiV65KuKb4fbXJDIfdXPggFdu72ppwvTok2MZ0zoh/wCNMkBV/wBS+wP0rQ7Swf23mFoBRr/3cj1XGa1n0V/7Zs7bWzdZvaHBwg4cY1VN97u77titIQJsneB2X7HZj3WXc0crzLZ9jGvLfJLPHZ9jSa1l1RrWfRGtZ9Ea1l1VMoBrWXVENax6I1rPojWsuq9PTN7C7d2jZDGytN2ps3TYc4YcxVd72V9RrF4Ddos3WTsXDfZHymPQqsNaz6Ja1l1ViFecNmWqdxOnsy+ez+3tmtQP0rezfyeAfQzWe2DZgxXzuWDhr56KTXuFHuHJzh/NOqsK8fNFqPEHzR9Cvc07xcG8yFqe0+9Ox2IItNps25B193INbE4L59cSaknmSUg0a1/ypHcPkiZ3b5ItLtr6pMaCzZbEvP77TdaMIhomfMhcRbdt221PP9Ral5d4KBrHTgGigjGHotLrWaIr5hcTjNST2K9WrKosGzbEa1oo1rPLBOztL7Q/Gj/8oSPmPeKWtZZ4rsKFWNWmprZlD5i1rLPFPWs8ka1nlgjWss8VYPkNayzXYfTjsD9a1/WtGm4wgtqLz5ECOVSBkDUhaXuv2I/a7UMaDdEC84Nb+4+hAGPkSLp2LZmWTG2bGhoaIAaxx81n3t1kjkju+xetLfM80tl3PaF2dYou3t7Ukmfl7odGMqZUWIbAXr8qYp37sqofD7a5cE2QhvVzQEQy7OqLt+dMEmEnxUzQ8keGmXFAO9e3dSTBuyqhwAERVDZ+L3kgFdhvecOaxe1dgs9qs3Wdo2LT6g4EHAhZQJjA0Q+Xh84TXjSawZ5KKksHsUv3q7uWmxPMd6yJ3X/7XcD1Wl1rPor+2rZmWjSx7Q4OEwZx8uKrbvT3GfZxfswLmY2Z8Tf8eIyCzK9s46x1XoY9zZyh4oar0OJ1rLqjWs+ib2kGBBB4GR/56Ja1l1VQonjrWXVGtZ9E9az6Ja1l1X0fQa1l1RrWfRGtZ9Ea1l1Q9NbrWXVPWs0a1mlrWSslsNayTQhDwyNgtg10/C6TuXHyM/VbB7SDA64Q/hadbPYbS+279zZVq2g9DL0Wzwm6yT9lLZ7fMiqR/kTjrXVbju33dtdreA1pDIwL3A3RmeP+I4ilRve6/ce0td/aL1m2UGwF51DGH28JiuEoqy9k2ZllZtYxoaGiDQMPk9Vq3N9GHhhq+vJFi3s5S8UtF3Zi9h9l2ex2Qs2CVXOPie7Fzjx9gAAJBZ12O95w5IZPxeUZIJMYCntBYzbbxZrJJLBDJvyoi9d3dTQ6Xh9pptAIiarw9IhtydcE7l6dEmEnxUzkh8R4aZIALr0kNdckeab2gTFUMAdM19EAgy7vamgi/MIa4kwNEPN3w/KAZdHd8vRDTdrigtAERVDN7xfCAV37vNN2/TBRiYwwp5KT93w+eKA0fb3drZ9qk9kH/vbIxz4rg+3O420WMXM/uty8Xpx9grYDRCONfNKznX4VepbQnrs/Iq1bSnU12fkfPe0WD7Mwe0thKYlyjqK89az6K/tu2Gytd20s2vGYBPkaj1Wh7T7h7I+bWuYfxMvn3VWVpNbNMpSsZr4Wn2Ke1rLqmda49FZFt9M2mbLcjIth/JWC76b2ppasoal3p4FG6FRciJ2tVcistayT1rNWE36X28Z21nhQuPP7KhZ2z/SsCBftEeIa0n0MQpvZT6FhUaj5FXRXtYWD3kBjSSSAICpMgBxM5DNXN2V9Otjs5uvWhB+4gDDgI4HHErouzey7Gx3bKyawUiGiJkKuqaDHBSRt5PfQkjaze+CKk7vfT7abeDnj9Nkol0QYGJkPEaCt3xVVjd3O6Wz7KBBl98ovcAQHAxvNH2z5mQnJdE+VPlMtEI4181PCjGOvMswt4x13fmA3Kzild+7CqbN7xeWCUTGGFPJSk43G/TBAdDd8vVD93w/KYaCImqAi0XJlBZe3tSQw3vF8Ic4gwFEAy69Ic0B92RQ8BsxVNjQRE1QEWsuzPsk5t6Y5TTY69Ioe67Ic0Ay68Lor8Iabsj7Ic0ARFflDBemUAg2BvYV9UOF+mHFAdE3cKIfu0xQDvSu40ySZuVx4J3ZXsapM3q4IAuTvYVTJvUw4pF07uFE3i7RAAdAXcflJrbszykm1sReNfhJhvSKAHNvTCbnXpD3Sc4tMBRN7bswgBrrsj7JNbdmU2NvTKTHFxgaIAc29Mcppl0Rdx+Enm7IJubAXhX5QA3drjwSDJ3sKpsF6qQdO7hRAD9+mHFO9K7jRD92mKd2V7GqAiwXK48EFsTewr6IZvVwQXQN3CiAbzekPdDXXRA1Q8XZhNrYi8aoCLG3ZnlJDmXpj3Qx16R5oe67IID//2Q=="}],i={async onClickLogin(o,a){await n(o,a),localStorage.setItem("provider",a),await r.push("/")}};return(o,a)=>(Se(),Je("div",xx,[ye("div",Ox,[Px,Nx,ye("button",{type:"button",ref_key:"btnRef",ref:e},null,512),ue(kb,null,{default:ot(()=>[(Se(),Je(lt,null,tu(s,(l,u)=>ue(Db,{key:u},{default:ot(()=>[ue(Rx,{class:_n(["btn-success flex items-center mx-auto w-full",[l.color]]),onClick:c=>i.onClickLogin(l.provider,l.name)},{default:ot(()=>[ye("img",{class:"rounded-full w-8 h-8 mr-4",src:l.icon,alt:l.name},null,8,Lx),xr(" Login with "+Ci(l.name),1)]),_:2},1032,["class","onClick"])]),_:2},1024)),64))]),_:1})])]))}});function Mx(){return{async beforeEnter(t,e,n){const r=mi(),{getPersistenceFirebaseUser:s}=mi(),{isAuthenticated:i}=cg(r);try{await s("Google")}catch{n("/auth/login")}i.value?n():n("/auth/login")}}}const Bx=[$({path:"/",name:"Home",component:A1,children:[{path:"",component:Cx,meta:{title:"Daft Doris"}}]},Mx()),{path:"/auth",name:"Auth",component:GE,children:[{path:"Login",component:Fx}]}],$x=jE({history:sE(),routes:Bx});var ys=Object.assign;function wp(t,e){Object.entries(e).forEach(([n,r])=>{t.style[n]=r})}const Ux={disappearEasing:"cubic-bezier(0.4, 0, 0.2, 1)",disappearDuration:".7s",appearEasing:"cubic-bezier(0.16, 1, 0.3, 1)",appearDuration:".8s",class:null,disabled:!1,center:!1,self:!1,noNested:!0,radius:null};function Ep(t){return ys(ys({},Ux),t)}const Ip=(t,e,n,r)=>{const s=t.getBoundingClientRect(),i=e.radius||function(u,c,h,d){const[f,p]=[[h,u],[d,c]].map(([g,y])=>g>y/2?g:y-g);return(f**2+p**2)**.5}(s.width,s.height,n,r),o=function(u,c){const h=document.createElement("div");return h.className=u.class||"",h.style.borderRadius="99999px",h.style.transition=`transform ${u.appearDuration} ${u.appearEasing}`,h.style.transformOrigin="center center",h.style.transform="scale(0)",h.style.position="absolute",h.style.width=h.style.height=2*c+"px",wp(h,u.circleStyle||{}),h}(e,i);(function(u,c,h,d){[u.style.left,u.style.top]=[c-d,h-d].map(f=>`${f}px`)})(o,n,r,i);const a=function(u){const c=document.createElement("div");return c.style.pointerEvents="none",c.style.position="absolute",c.style.overflow="hidden",c.style.borderRadius="inherit",c.style.transition=`opacity ${u.disappearDuration} ${u.disappearEasing}`,c.style.margin="0",c.style.padding="0",["left","top","right","bottom"].forEach(h=>{c.style[h]="0"}),wp(c,u.containerStyle||{}),c}(e);var l;return a.appendChild(o),t.appendChild(a),l=()=>{o.style.transform="scale(1)"},new Promise(u=>{requestAnimationFrame(()=>{requestAnimationFrame(()=>{u(),l&&l()})})}),{hide(){a.style.opacity="0",a.addEventListener("transitionend",u=>{u.target===a&&t.removeChild(a)})}}};function Ob(t,e=0){if(e>1e3)return function(...r){console.warn("[Ripple]",...r)}("noNested alghorithm error - max calls stack size exceeded"),null;if(function(r){return r.dataset.vRippleMark===""}(t))return t;const n=t.parentElement;return n?Ob(n,e+1):null}function Tp(t,e){return ys(ys({},t),e)}function Ap(t){var e,n,r,s,i,o;return ys(ys({},t.value),{self:(n=t.modifiers.self)!=null?n:(e=t.value)==null?void 0:e.self,center:(s=t.modifiers.center)!=null?s:(r=t.value)==null?void 0:r.center,noNested:(o=t.modifiers["no-nested"])!=null?o:(i=t.value)==null?void 0:i.noNested})}function Vx(t){const e=new WeakMap;return{mounted(n,r){const s=Ap(r),i=function(o,a){let l=Ep(a);const u=h=>l.center?function(d){const f=d.getBoundingClientRect();return[f.width/2,f.height/2]}(o):function(d,f){const p=d.getBoundingClientRect();return[f.clientX-p.x,f.clientY-p.y]}(o,h),c=h=>{if(l.disabled||l.self&&h.target!==o)return;if(l.noNested&&h.target&&h.target!==o){const y=Ob(h.target);if(y&&y!==o)return}let d=Ip(o,l,...u(h));const f=()=>{d==null||d.hide(),window.removeEventListener("mouseup",f),o.removeEventListener("mouseleave",g),o.removeEventListener("mouseenter",p)},p=y=>{d=Ip(o,l,...u(y))},g=()=>{d&&(d.hide(),d=null)};window.addEventListener("mouseup",f),o.addEventListener("mouseleave",g),o.addEventListener("mouseenter",p)};return function(h){h.dataset.vRippleMark=""}(o),getComputedStyle(o).position==="static"&&(o.style.position="relative"),o.addEventListener("mousedown",c),{updateOptions(h){l=Ep(h)},unbind(){o.removeEventListener("mousedown",c),function(h){delete h.dataset.vRippleMark}(o)}}}(n,Tp(t,s));e.set(n,i)},beforeUpdate(n,r){const s=e.get(n);if(s){const i=Ap(r),o=Tp(t,i);s.updateOptions(o)}},unmounted(n){const r=e.get(n);r&&(e.delete(n),r.unbind())}}}const jx=vc("loading",()=>{const t=k(!1),e=k(!1);function n(r,s=!0){t.value=r,e.value=s}return{value:t,transparent:e,setLoading:n}}),zx=ye("div",{class:"flex items-center justify-center space-x-2 animate-bounce"},[ye("div",{class:"w-4 h-4 bg-blue-400 rounded-full"}),ye("div",{class:"w-4 h-4 bg-green-400 rounded-full delay-300"}),ye("div",{class:"w-4 h-4 bg-black rounded-full delay-700"})],-1),qx=[zx],Hx=G({setup(t){const e=jx(),n=R(()=>e.value),r=R(()=>[(e.transparent,"bg-transparent")]);return(s,i)=>(Se(),un(ui,{name:"fade"},{default:ot(()=>[ki(ye("div",{class:_n(["w-screen h-screen fixed top-0 left-0 flex justify-center items-center z-50",[_e(r)]])},qx,2),[[$m,_e(n)===!0]])]),_:1}))}}),Kx=G({setup(t){return(e,n)=>{const r=cc("router-view");return Se(),Je(lt,null,[ue(Hx),ue(r)],64)}}});var Wx="firebase",Gx="9.6.11";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zt(Wx,Gx,"app");const Pb="@firebase/installations",Oh="0.5.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nb=1e4,Lb=`w:${Oh}`,Fb="FIS_v2",Xx="https://firebaseinstallations.googleapis.com/v1",Qx=60*60*1e3,Yx="installations",Zx="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jx={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Cr=new Or(Yx,Zx,Jx);function Mb(t){return t instanceof kn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bb({projectId:t}){return`${Xx}/projects/${t}/installations`}function $b(t){return{token:t.token,requestStatus:2,expiresIn:tO(t.expiresIn),creationTime:Date.now()}}async function Ub(t,e){const r=(await e.json()).error;return Cr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Vb({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function eO(t,{refreshToken:e}){const n=Vb(t);return n.append("Authorization",nO(e)),n}async function jb(t){const e=await t();return e.status>=500&&e.status<600?t():e}function tO(t){return Number(t.replace("s","000"))}function nO(t){return`${Fb} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rO({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Bb(t),s=Vb(t),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={fid:n,authVersion:Fb,appId:t.appId,sdkVersion:Lb},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await jb(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:$b(u.authToken)}}else throw await Ub("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zb(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sO(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iO=/^[cdef][\w-]{21}$/,qu="";function oO(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=aO(t);return iO.test(n)?n:qu}catch{return qu}}function aO(t){return sO(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sl(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qb=new Map;function Hb(t,e){const n=sl(t);Kb(n,e),lO(n,e)}function Kb(t,e){const n=qb.get(t);if(!!n)for(const r of n)r(e)}function lO(t,e){const n=uO();n&&n.postMessage({key:t,fid:e}),cO()}let dr=null;function uO(){return!dr&&"BroadcastChannel"in self&&(dr=new BroadcastChannel("[Firebase] FID Change"),dr.onmessage=t=>{Kb(t.data.key,t.data.fid)}),dr}function cO(){qb.size===0&&dr&&(dr.close(),dr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hO="firebase-installations-database",dO=1,kr="firebase-installations-store";let $l=null;function Ph(){return $l||($l=wg(hO,dO,(t,e)=>{switch(e){case 0:t.createObjectStore(kr)}})),$l}async function ia(t,e){const n=sl(t),s=(await Ph()).transaction(kr,"readwrite"),i=s.objectStore(kr),o=await i.get(n);return await i.put(e,n),await s.complete,(!o||o.fid!==e.fid)&&Hb(t,e.fid),e}async function Wb(t){const e=sl(t),r=(await Ph()).transaction(kr,"readwrite");await r.objectStore(kr).delete(e),await r.complete}async function il(t,e){const n=sl(t),s=(await Ph()).transaction(kr,"readwrite"),i=s.objectStore(kr),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.complete,a&&(!o||o.fid!==a.fid)&&Hb(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nh(t){let e;const n=await il(t.appConfig,r=>{const s=fO(r),i=pO(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===qu?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function fO(t){const e=t||{fid:oO(),registrationStatus:0};return Gb(e)}function pO(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Cr.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=mO(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:gO(t)}:{installationEntry:e}}async function mO(t,e){try{const n=await rO(t,e);return ia(t.appConfig,n)}catch(n){throw Mb(n)&&n.customData.serverCode===409?await Wb(t.appConfig):await ia(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function gO(t){let e=await Sp(t.appConfig);for(;e.registrationStatus===1;)await zb(100),e=await Sp(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Nh(t);return r||n}return e}function Sp(t){return il(t,e=>{if(!e)throw Cr.create("installation-not-found");return Gb(e)})}function Gb(t){return vO(t)?{fid:t.fid,registrationStatus:0}:t}function vO(t){return t.registrationStatus===1&&t.registrationTime+Nb<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yO({appConfig:t,heartbeatServiceProvider:e},n){const r=bO(t,n),s=eO(t,n),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={installation:{sdkVersion:Lb,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await jb(()=>fetch(r,a));if(l.ok){const u=await l.json();return $b(u)}else throw await Ub("Generate Auth Token",l)}function bO(t,{fid:e}){return`${Bb(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lh(t,e=!1){let n;const r=await il(t.appConfig,i=>{if(!Xb(i))throw Cr.create("not-registered");const o=i.authToken;if(!e&&EO(o))return i;if(o.requestStatus===1)return n=_O(t,e),i;{if(!navigator.onLine)throw Cr.create("app-offline");const a=TO(i);return n=wO(t,a),a}});return n?await n:r.authToken}async function _O(t,e){let n=await Cp(t.appConfig);for(;n.authToken.requestStatus===1;)await zb(100),n=await Cp(t.appConfig);const r=n.authToken;return r.requestStatus===0?Lh(t,e):r}function Cp(t){return il(t,e=>{if(!Xb(e))throw Cr.create("not-registered");const n=e.authToken;return AO(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function wO(t,e){try{const n=await yO(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await ia(t.appConfig,r),n}catch(n){if(Mb(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Wb(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await ia(t.appConfig,r)}throw n}}function Xb(t){return t!==void 0&&t.registrationStatus===2}function EO(t){return t.requestStatus===2&&!IO(t)}function IO(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Qx}function TO(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function AO(t){return t.requestStatus===1&&t.requestTime+Nb<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SO(t){const e=t,{installationEntry:n,registrationPromise:r}=await Nh(e);return r?r.catch(console.error):Lh(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CO(t,e=!1){const n=t;return await kO(n),(await Lh(n,e)).token}async function kO(t){const{registrationPromise:e}=await Nh(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DO(t){if(!t||!t.options)throw Ul("App Configuration");if(!t.name)throw Ul("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Ul(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Ul(t){return Cr.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qb="installations",RO="installations-internal",xO=t=>{const e=t.getProvider("app").getImmediate(),n=DO(e),r=Pr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},OO=t=>{const e=t.getProvider("app").getImmediate(),n=Pr(e,Qb).getImmediate();return{getId:()=>SO(n),getToken:s=>CO(n,s)}};function PO(){cn(new Jt(Qb,xO,"PUBLIC")),cn(new Jt(RO,OO,"PRIVATE"))}PO();zt(Pb,Oh);zt(Pb,Oh,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oa="analytics",NO="firebase_id",LO="origin",FO=60*1e3,MO="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Yb="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt=new Aa("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zb(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function BO(t,e){const n=document.createElement("script");n.src=`${Yb}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function $O(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function UO(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const l=(await Zb(n)).find(u=>u.measurementId===s);l&&await e[l.appId]}}catch(a){Lt.error(a)}t("config",s,i)}async function VO(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await Zb(n);for(const l of o){const u=a.find(h=>h.measurementId===l),c=u&&e[u.appId];if(c)i.push(c);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){Lt.error(i)}}function jO(t,e,n,r){async function s(i,o,a){try{i==="event"?await VO(t,e,n,o,a):i==="config"?await UO(t,e,n,r,o,a):t("set",o)}catch(l){Lt.error(l)}}return s}function zO(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=jO(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function qO(){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(Yb))return e;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HO={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},qt=new Or("analytics","Analytics",HO);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KO=30,WO=1e3;class GO{constructor(e={},n=WO){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Jb=new GO;function XO(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function QO(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:XO(r)},i=MO.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw qt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function YO(t,e=Jb,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw qt.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw qt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new eP;return setTimeout(async()=>{a.abort()},n!==void 0?n:FO),e0({appId:r,apiKey:s,measurementId:i},o,a,e)}async function e0(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=Jb){const{appId:i,measurementId:o}=t;try{await ZO(r,e)}catch(a){if(o)return Lt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${a.message}]`),{appId:i,measurementId:o};throw a}try{const a=await QO(t);return s.deleteThrottleMetadata(i),a}catch(a){if(!JO(a)){if(s.deleteThrottleMetadata(i),o)return Lt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${a.message}]`),{appId:i,measurementId:o};throw a}const l=Number(a.customData.httpStatus)===503?Wd(n,s.intervalMillis,KO):Wd(n,s.intervalMillis),u={throttleEndTimeMillis:Date.now()+l,backoffCount:n+1};return s.setThrottleMetadata(i,u),Lt.debug(`Calling attemptFetch again in ${l} millis`),e0(t,u,r,s)}}function ZO(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(qt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function JO(t){if(!(t instanceof kn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class eP{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tP(){if(vg())try{await yg()}catch(t){return Lt.warn(qt.create("indexeddb-unavailable",{errorInfo:t}).message),!1}else return Lt.warn(qt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function nP(t,e,n,r,s,i,o){var a;const l=YO(t);l.then(f=>{n[f.measurementId]=f.appId,t.options.measurementId&&f.measurementId!==t.options.measurementId&&Lt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${f.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(f=>Lt.error(f)),e.push(l);const u=tP().then(f=>{if(f)return r.getId()}),[c,h]=await Promise.all([l,u]);qO()||BO(i,c.measurementId),s("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[LO]="firebase",d.update=!0,h!=null&&(d[NO]=h),s("config",c.measurementId,d),c.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rP{constructor(e){this.app=e}_delete(){return delete ri[this.app.options.appId],Promise.resolve()}}let ri={},kp=[];const Dp={};let Vl="dataLayer",sP="gtag",Rp,t0,xp=!1;function iP(){const t=[];if(yc()&&t.push("This is a browser extension environment."),qI()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=qt.create("invalid-analytics-context",{errorInfo:e});Lt.warn(n.message)}}function oP(t,e,n){iP();const r=t.options.appId;if(!r)throw qt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Lt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw qt.create("no-api-key");if(ri[r]!=null)throw qt.create("already-exists",{id:r});if(!xp){$O(Vl);const{wrappedGtag:i,gtagCore:o}=zO(ri,kp,Dp,Vl,sP);t0=i,Rp=o,xp=!0}return ri[r]=nP(t,kp,Dp,e,Rp,Vl,n),new rP(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aP(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});t("event",n,o)}}function lP(t=_c()){t=Mt(t);const e=Pr(t,oa);return e.isInitialized()?e.getImmediate():uP(t)}function uP(t,e={}){const n=Pr(t,oa);if(n.isInitialized()){const s=n.getImmediate();if(hi(e,n.getOptions()))return s;throw qt.create("already-initialized")}return n.initialize({options:e})}function cP(t,e,n,r){t=Mt(t),aP(t0,ri[t.app.options.appId],e,n,r).catch(s=>Lt.error(s))}const Op="@firebase/analytics",Pp="0.7.8";function hP(){cn(new Jt(oa,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return oP(r,s,n)},"PUBLIC")),cn(new Jt("analytics-internal",t,"PRIVATE")),zt(Op,Pp),zt(Op,Pp,"esm2017");function t(e){try{const n=e.getProvider(oa).getImmediate();return{logEvent:(r,s,i)=>cP(n,r,s,i)}}catch(n){throw qt.create("interop-component-reg-failed",{reason:n})}}}hP();const dP={apiKey:"AIzaSyAXBQG6b0_AKCY63dbQlcecWNKmiLAKjiI",authDomain:"daftdoris-cns.firebaseapp.com",projectId:"daftdoris-cns",storageBucket:"daftdoris-cns.appspot.com",messagingSenderId:"785842200541",appId:"1:785842200541:web:8b34412472e7aa2feaa034",measurementId:"G-CCEL9G8W59"},fP=VT(dP);ju();lP(fP);Bw(Kx).directive("ripple",Vx({class:"bg-black opacity-30"})).use(PI()).use($x).mount("#app");
