var l0=Object.defineProperty,u0=Object.defineProperties;var c0=Object.getOwnPropertyDescriptors;var to=Object.getOwnPropertySymbols;var Hh=Object.prototype.hasOwnProperty,Kh=Object.prototype.propertyIsEnumerable;var qh=(t,e,n)=>e in t?l0(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,$=(t,e)=>{for(var n in e||(e={}))Hh.call(e,n)&&qh(t,n,e[n]);if(to)for(var n of to(e))Kh.call(e,n)&&qh(t,n,e[n]);return t},mt=(t,e)=>u0(t,c0(e));var Gt=(t,e)=>{var n={};for(var r in t)Hh.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&to)for(var r of to(t))e.indexOf(r)<0&&Kh.call(t,r)&&(n[r]=t[r]);return n};const h0=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}};h0();function Qu(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const d0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",f0=Qu(d0);function jp(t){return!!t||t===""}function ha(t){if(Y(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ge(r)?m0(r):ha(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(Ge(t))return t;if(We(t))return t}}const p0=/;(?![^(]*\))/g,g0=/:(.+)/;function m0(t){const e={};return t.split(p0).forEach(n=>{if(n){const r=n.split(g0);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function wn(t){let e="";if(Ge(t))e=t;else if(Y(t))for(let n=0;n<t.length;n++){const r=wn(t[n]);r&&(e+=r+" ")}else if(We(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function v0(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Ge(e)&&(t.class=wn(e)),n&&(t.style=ha(n)),t}function y0(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=wr(t[r],e[r]);return n}function wr(t,e){if(t===e)return!0;let n=Wh(t),r=Wh(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Y(t),r=Y(e),n||r)return n&&r?y0(t,e):!1;if(n=We(t),r=We(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!wr(t[o],e[o]))return!1}}return String(t)===String(e)}function Yu(t,e){return t.findIndex(n=>wr(n,e))}const Oi=t=>Ge(t)?t:t==null?"":Y(t)||We(t)&&(t.toString===Hp||!ue(t.toString))?JSON.stringify(t,zp,2):String(t),zp=(t,e)=>e&&e.__v_isRef?zp(t,e.value):Zr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:ws(e)?{[`Set(${e.size})`]:[...e.values()]}:We(e)&&!Y(e)&&!Kp(e)?String(e):e,Ne={},Yr=[],Zt=()=>{},b0=()=>!1,_0=/^on[^a-z]/,da=t=>_0.test(t),Zu=t=>t.startsWith("onUpdate:"),ft=Object.assign,Ju=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},w0=Object.prototype.hasOwnProperty,me=(t,e)=>w0.call(t,e),Y=Array.isArray,Zr=t=>fa(t)==="[object Map]",ws=t=>fa(t)==="[object Set]",Wh=t=>t instanceof Date,ue=t=>typeof t=="function",Ge=t=>typeof t=="string",ec=t=>typeof t=="symbol",We=t=>t!==null&&typeof t=="object",qp=t=>We(t)&&ue(t.then)&&ue(t.catch),Hp=Object.prototype.toString,fa=t=>Hp.call(t),E0=t=>fa(t).slice(8,-1),Kp=t=>fa(t)==="[object Object]",tc=t=>Ge(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,vo=Qu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),pa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},I0=/-(\w)/g,ln=pa(t=>t.replace(I0,(e,n)=>n?n.toUpperCase():"")),T0=/\B([A-Z])/g,Or=pa(t=>t.replace(T0,"-$1").toLowerCase()),ga=pa(t=>t.charAt(0).toUpperCase()+t.slice(1)),dl=pa(t=>t?`on${ga(t)}`:""),li=(t,e)=>!Object.is(t,e),yo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ko=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ui=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Gh;const A0=()=>Gh||(Gh=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Ot;class Wp{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Ot&&(this.parent=Ot,this.index=(Ot.scopes||(Ot.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Ot;try{return Ot=this,e()}finally{Ot=n}}}on(){Ot=this}off(){Ot=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function Gp(t){return new Wp(t)}function S0(t,e=Ot){e&&e.active&&e.effects.push(t)}function C0(){return Ot}function k0(t){Ot&&Ot.cleanups.push(t)}const nc=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Xp=t=>(t.w&Kn)>0,Qp=t=>(t.n&Kn)>0,D0=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Kn},R0=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Xp(s)&&!Qp(s)?s.delete(t):e[n++]=s,s.w&=~Kn,s.n&=~Kn}e.length=n}},Wl=new WeakMap;let zs=0,Kn=1;const Gl=30;let Xt;const gr=Symbol(""),Xl=Symbol("");class rc{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,S0(this,r)}run(){if(!this.active)return this.fn();let e=Xt,n=zn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Xt,Xt=this,zn=!0,Kn=1<<++zs,zs<=Gl?D0(this):Xh(this),this.fn()}finally{zs<=Gl&&R0(this),Kn=1<<--zs,Xt=this.parent,zn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Xt===this?this.deferStop=!0:this.active&&(Xh(this),this.onStop&&this.onStop(),this.active=!1)}}function Xh(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let zn=!0;const Yp=[];function Es(){Yp.push(zn),zn=!1}function Is(){const t=Yp.pop();zn=t===void 0?!0:t}function Mt(t,e,n){if(zn&&Xt){let r=Wl.get(t);r||Wl.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=nc()),Zp(s)}}function Zp(t,e){let n=!1;zs<=Gl?Qp(t)||(t.n|=Kn,n=!Xp(t)):n=!t.has(Xt),n&&(t.add(Xt),Xt.deps.push(t))}function Tn(t,e,n,r,s,i){const o=Wl.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&Y(t))o.forEach((l,u)=>{(u==="length"||u>=r)&&a.push(l)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":Y(t)?tc(n)&&a.push(o.get("length")):(a.push(o.get(gr)),Zr(t)&&a.push(o.get(Xl)));break;case"delete":Y(t)||(a.push(o.get(gr)),Zr(t)&&a.push(o.get(Xl)));break;case"set":Zr(t)&&a.push(o.get(gr));break}if(a.length===1)a[0]&&Ql(a[0]);else{const l=[];for(const u of a)u&&l.push(...u);Ql(nc(l))}}function Ql(t,e){for(const n of Y(t)?t:[...t])(n!==Xt||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const x0=Qu("__proto__,__v_isRef,__isVue"),Jp=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(ec)),O0=sc(),P0=sc(!1,!0),N0=sc(!0),Qh=L0();function L0(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=ie(this);for(let i=0,o=this.length;i<o;i++)Mt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(ie)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Es();const r=ie(this)[e].apply(this,n);return Is(),r}}),t}function sc(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?Y0:sg:e?rg:ng).get(r))return r;const o=Y(r);if(!t&&o&&me(Qh,s))return Reflect.get(Qh,s,i);const a=Reflect.get(r,s,i);return(ec(s)?Jp.has(s):x0(s))||(t||Mt(r,"get",s),e)?a:Be(a)?!o||!tc(s)?a.value:a:We(a)?t?ig(a):Pr(a):a}}const M0=eg(),F0=eg(!0);function eg(t=!1){return function(n,r,s,i){let o=n[r];if(ci(o)&&Be(o)&&!Be(s))return!1;if(!t&&!ci(s)&&(og(s)||(s=ie(s),o=ie(o)),!Y(n)&&Be(o)&&!Be(s)))return o.value=s,!0;const a=Y(n)&&tc(r)?Number(r)<n.length:me(n,r),l=Reflect.set(n,r,s,i);return n===ie(i)&&(a?li(s,o)&&Tn(n,"set",r,s):Tn(n,"add",r,s)),l}}function B0(t,e){const n=me(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Tn(t,"delete",e,void 0),r}function $0(t,e){const n=Reflect.has(t,e);return(!ec(e)||!Jp.has(e))&&Mt(t,"has",e),n}function U0(t){return Mt(t,"iterate",Y(t)?"length":gr),Reflect.ownKeys(t)}const tg={get:O0,set:M0,deleteProperty:B0,has:$0,ownKeys:U0},V0={get:N0,set(t,e){return!0},deleteProperty(t,e){return!0}},j0=ft({},tg,{get:P0,set:F0}),ic=t=>t,ma=t=>Reflect.getPrototypeOf(t);function no(t,e,n=!1,r=!1){t=t.__v_raw;const s=ie(t),i=ie(e);e!==i&&!n&&Mt(s,"get",e),!n&&Mt(s,"get",i);const{has:o}=ma(s),a=r?ic:n?lc:hi;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function ro(t,e=!1){const n=this.__v_raw,r=ie(n),s=ie(t);return t!==s&&!e&&Mt(r,"has",t),!e&&Mt(r,"has",s),t===s?n.has(t):n.has(t)||n.has(s)}function so(t,e=!1){return t=t.__v_raw,!e&&Mt(ie(t),"iterate",gr),Reflect.get(t,"size",t)}function Yh(t){t=ie(t);const e=ie(this);return ma(e).has.call(e,t)||(e.add(t),Tn(e,"add",t,t)),this}function Zh(t,e){e=ie(e);const n=ie(this),{has:r,get:s}=ma(n);let i=r.call(n,t);i||(t=ie(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?li(e,o)&&Tn(n,"set",t,e):Tn(n,"add",t,e),this}function Jh(t){const e=ie(this),{has:n,get:r}=ma(e);let s=n.call(e,t);s||(t=ie(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Tn(e,"delete",t,void 0),i}function ed(){const t=ie(this),e=t.size!==0,n=t.clear();return e&&Tn(t,"clear",void 0,void 0),n}function io(t,e){return function(r,s){const i=this,o=i.__v_raw,a=ie(o),l=e?ic:t?lc:hi;return!t&&Mt(a,"iterate",gr),o.forEach((u,c)=>r.call(s,l(u),l(c),i))}}function oo(t,e,n){return function(...r){const s=this.__v_raw,i=ie(s),o=Zr(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),c=n?ic:e?lc:hi;return!e&&Mt(i,"iterate",l?Xl:gr),{next(){const{value:h,done:d}=u.next();return d?{value:h,done:d}:{value:a?[c(h[0]),c(h[1])]:c(h),done:d}},[Symbol.iterator](){return this}}}}function Rn(t){return function(...e){return t==="delete"?!1:this}}function z0(){const t={get(i){return no(this,i)},get size(){return so(this)},has:ro,add:Yh,set:Zh,delete:Jh,clear:ed,forEach:io(!1,!1)},e={get(i){return no(this,i,!1,!0)},get size(){return so(this)},has:ro,add:Yh,set:Zh,delete:Jh,clear:ed,forEach:io(!1,!0)},n={get(i){return no(this,i,!0)},get size(){return so(this,!0)},has(i){return ro.call(this,i,!0)},add:Rn("add"),set:Rn("set"),delete:Rn("delete"),clear:Rn("clear"),forEach:io(!0,!1)},r={get(i){return no(this,i,!0,!0)},get size(){return so(this,!0)},has(i){return ro.call(this,i,!0)},add:Rn("add"),set:Rn("set"),delete:Rn("delete"),clear:Rn("clear"),forEach:io(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=oo(i,!1,!1),n[i]=oo(i,!0,!1),e[i]=oo(i,!1,!0),r[i]=oo(i,!0,!0)}),[t,n,e,r]}const[q0,H0,K0,W0]=z0();function oc(t,e){const n=e?t?W0:K0:t?H0:q0;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(me(n,s)&&s in r?n:r,s,i)}const G0={get:oc(!1,!1)},X0={get:oc(!1,!0)},Q0={get:oc(!0,!1)},ng=new WeakMap,rg=new WeakMap,sg=new WeakMap,Y0=new WeakMap;function Z0(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function J0(t){return t.__v_skip||!Object.isExtensible(t)?0:Z0(E0(t))}function Pr(t){return ci(t)?t:ac(t,!1,tg,G0,ng)}function e_(t){return ac(t,!1,j0,X0,rg)}function ig(t){return ac(t,!0,V0,Q0,sg)}function ac(t,e,n,r,s){if(!We(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=J0(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function En(t){return ci(t)?En(t.__v_raw):!!(t&&t.__v_isReactive)}function ci(t){return!!(t&&t.__v_isReadonly)}function og(t){return!!(t&&t.__v_isShallow)}function ag(t){return En(t)||ci(t)}function ie(t){const e=t&&t.__v_raw;return e?ie(e):t}function ss(t){return ko(t,"__v_skip",!0),t}const hi=t=>We(t)?Pr(t):t,lc=t=>We(t)?ig(t):t;function lg(t){zn&&Xt&&(t=ie(t),Zp(t.dep||(t.dep=nc())))}function ug(t,e){t=ie(t),t.dep&&Ql(t.dep)}function Be(t){return!!(t&&t.__v_isRef===!0)}function k(t){return hg(t,!1)}function cg(t){return hg(t,!0)}function hg(t,e){return Be(t)?t:new t_(t,e)}class t_{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ie(e),this._value=n?e:hi(e)}get value(){return lg(this),this._value}set value(e){e=this.__v_isShallow?e:ie(e),li(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:hi(e),ug(this))}}function Se(t){return Be(t)?t.value:t}const n_={get:(t,e,n)=>Se(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Be(s)&&!Be(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function dg(t){return En(t)?t:new Proxy(t,n_)}function r_(t){const e=Y(t)?new Array(t.length):{};for(const n in t)e[n]=fg(t,n);return e}class s_{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function fg(t,e,n){const r=t[e];return Be(r)?r:new s_(t,e,n)}class i_{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new rc(e,()=>{this._dirty||(this._dirty=!0,ug(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=ie(this);return lg(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function o_(t,e,n=!1){let r,s;const i=ue(t);return i?(r=t,s=Zt):(r=t.get,s=t.set),new i_(r,s,i||!s,n)}function qn(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){va(i,e,n)}return s}function Vt(t,e,n,r){if(ue(t)){const i=qn(t,e,n,r);return i&&qp(i)&&i.catch(o=>{va(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Vt(t[i],e,n,r));return s}function va(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const u=i.ec;if(u){for(let c=0;c<u.length;c++)if(u[c](t,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){qn(l,null,10,[t,o,a]);return}}a_(t,n,s,r)}function a_(t,e,n,r=!0){console.error(t)}let Do=!1,Yl=!1;const Pt=[];let gn=0;const Gs=[];let qs=null,Kr=0;const Xs=[];let Mn=null,Wr=0;const pg=Promise.resolve();let uc=null,Zl=null;function Ee(t){const e=uc||pg;return t?e.then(this?t.bind(this):t):e}function l_(t){let e=gn+1,n=Pt.length;for(;e<n;){const r=e+n>>>1;di(Pt[r])<t?e=r+1:n=r}return e}function gg(t){(!Pt.length||!Pt.includes(t,Do&&t.allowRecurse?gn+1:gn))&&t!==Zl&&(t.id==null?Pt.push(t):Pt.splice(l_(t.id),0,t),mg())}function mg(){!Do&&!Yl&&(Yl=!0,uc=pg.then(bg))}function u_(t){const e=Pt.indexOf(t);e>gn&&Pt.splice(e,1)}function vg(t,e,n,r){Y(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),mg()}function c_(t){vg(t,qs,Gs,Kr)}function h_(t){vg(t,Mn,Xs,Wr)}function cc(t,e=null){if(Gs.length){for(Zl=e,qs=[...new Set(Gs)],Gs.length=0,Kr=0;Kr<qs.length;Kr++)qs[Kr]();qs=null,Kr=0,Zl=null,cc(t,e)}}function yg(t){if(Xs.length){const e=[...new Set(Xs)];if(Xs.length=0,Mn){Mn.push(...e);return}for(Mn=e,Mn.sort((n,r)=>di(n)-di(r)),Wr=0;Wr<Mn.length;Wr++)Mn[Wr]();Mn=null,Wr=0}}const di=t=>t.id==null?1/0:t.id;function bg(t){Yl=!1,Do=!0,cc(t),Pt.sort((n,r)=>di(n)-di(r));const e=Zt;try{for(gn=0;gn<Pt.length;gn++){const n=Pt[gn];n&&n.active!==!1&&qn(n,null,14)}}finally{gn=0,Pt.length=0,yg(),Do=!1,uc=null,(Pt.length||Gs.length||Xs.length)&&bg(t)}}function d_(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ne;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const c=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[c]||Ne;d?s=n.map(f=>f.trim()):h&&(s=n.map(ui))}let a,l=r[a=dl(e)]||r[a=dl(ln(e))];!l&&i&&(l=r[a=dl(Or(e))]),l&&Vt(l,t,6,s);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Vt(u,t,6,s)}}function _g(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!ue(t)){const l=u=>{const c=_g(u,e,!0);c&&(a=!0,ft(o,c))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(r.set(t,null),null):(Y(i)?i.forEach(l=>o[l]=null):ft(o,i),r.set(t,o),o)}function ya(t,e){return!t||!da(e)?!1:(e=e.slice(2).replace(/Once$/,""),me(t,e[0].toLowerCase()+e.slice(1))||me(t,Or(e))||me(t,e))}let yt=null,ba=null;function Ro(t){const e=yt;return yt=t,ba=t&&t.type.__scopeId||null,e}function f_(t){ba=t}function p_(){ba=null}function ot(t,e=yt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&dd(-1);const i=Ro(e),o=t(...s);return Ro(i),r._d&&dd(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function fl(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:l,emit:u,render:c,renderCache:h,data:d,setupState:f,ctx:p,inheritAttrs:m}=t;let y,b;const w=Ro(t);try{if(n.shapeFlag&4){const F=s||r;y=sn(c.call(F,F,h,i,f,d,p)),b=l}else{const F=e;y=sn(F.length>1?F(i,{attrs:l,slots:a,emit:u}):F(i,null)),b=e.props?l:g_(l)}}catch(F){Ys.length=0,va(F,t,1),y=he(jt)}let x=y;if(b&&m!==!1){const F=Object.keys(b),{shapeFlag:j}=x;F.length&&j&7&&(o&&F.some(Zu)&&(b=m_(b,o)),x=Wn(x,b))}return n.dirs&&(x.dirs=x.dirs?x.dirs.concat(n.dirs):n.dirs),n.transition&&(x.transition=n.transition),y=x,Ro(w),y}const g_=t=>{let e;for(const n in t)(n==="class"||n==="style"||da(n))&&((e||(e={}))[n]=t[n]);return e},m_=(t,e)=>{const n={};for(const r in t)(!Zu(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function v_(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?td(r,o,u):!!o;if(l&8){const c=e.dynamicProps;for(let h=0;h<c.length;h++){const d=c[h];if(o[d]!==r[d]&&!ya(u,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?td(r,o,u):!0:!!o;return!1}function td(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!ya(n,i))return!0}return!1}function y_({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const b_=t=>t.__isSuspense;function __(t,e){e&&e.pendingBranch?Y(t)?e.effects.push(...t):e.effects.push(t):h_(t)}function Ue(t,e){if(et){let n=et.provides;const r=et.parent&&et.parent.provides;r===n&&(n=et.provides=Object.create(r)),n[t]=e}}function be(t,e,n=!1){const r=et||yt;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ue(e)?e.call(r.proxy):e}}function Ke(t,e){return hc(t,null,e)}const nd={};function At(t,e,n){return hc(t,e,n)}function hc(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Ne){const a=et;let l,u=!1,c=!1;if(Be(t)?(l=()=>t.value,u=og(t)):En(t)?(l=()=>t,r=!0):Y(t)?(c=!0,u=t.some(En),l=()=>t.map(b=>{if(Be(b))return b.value;if(En(b))return cr(b);if(ue(b))return qn(b,a,2)})):ue(t)?e?l=()=>qn(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),Vt(t,a,3,[d])}:l=Zt,e&&r){const b=l;l=()=>cr(b())}let h,d=b=>{h=y.onStop=()=>{qn(b,a,4)}};if(fi)return d=Zt,e?n&&Vt(e,a,3,[l(),c?[]:void 0,d]):l(),Zt;let f=c?[]:nd;const p=()=>{if(!!y.active)if(e){const b=y.run();(r||u||(c?b.some((w,x)=>li(w,f[x])):li(b,f)))&&(h&&h(),Vt(e,a,3,[b,f===nd?void 0:f,d]),f=b)}else y.run()};p.allowRecurse=!!e;let m;s==="sync"?m=p:s==="post"?m=()=>St(p,a&&a.suspense):m=()=>{!a||a.isMounted?c_(p):p()};const y=new rc(l,m);return e?n?p():f=y.run():s==="post"?St(y.run.bind(y),a&&a.suspense):y.run(),()=>{y.stop(),a&&a.scope&&Ju(a.scope.effects,y)}}function w_(t,e,n){const r=this.proxy,s=Ge(t)?t.includes(".")?wg(r,t):()=>r[t]:t.bind(r,r);let i;ue(e)?i=e:(i=e.handler,n=e);const o=et;is(this);const a=hc(s,i.bind(r),n);return o?is(o):vr(),a}function wg(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function cr(t,e){if(!We(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Be(t))cr(t.value,e);else if(Y(t))for(let n=0;n<t.length;n++)cr(t[n],e);else if(ws(t)||Zr(t))t.forEach(n=>{cr(n,e)});else if(Kp(t))for(const n in t)cr(t[n],e);return t}function E_(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return He(()=>{t.isMounted=!0}),Cg(()=>{t.isUnmounting=!0}),t}const Ut=[Function,Array],I_={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ut,onEnter:Ut,onAfterEnter:Ut,onEnterCancelled:Ut,onBeforeLeave:Ut,onLeave:Ut,onAfterLeave:Ut,onLeaveCancelled:Ut,onBeforeAppear:Ut,onAppear:Ut,onAfterAppear:Ut,onAppearCancelled:Ut},setup(t,{slots:e}){const n=As(),r=E_();let s;return()=>{const i=e.default&&Tg(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const m of i)if(m.type!==jt){o=m;break}}const a=ie(t),{mode:l}=a;if(r.isLeaving)return pl(o);const u=rd(o);if(!u)return pl(o);const c=Jl(u,a,r,n);eu(u,c);const h=n.subTree,d=h&&rd(h);let f=!1;const{getTransitionKey:p}=u.type;if(p){const m=p();s===void 0?s=m:m!==s&&(s=m,f=!0)}if(d&&d.type!==jt&&(!lr(u,d)||f)){const m=Jl(d,a,r,n);if(eu(d,m),l==="out-in")return r.isLeaving=!0,m.afterLeave=()=>{r.isLeaving=!1,n.update()},pl(o);l==="in-out"&&u.type!==jt&&(m.delayLeave=(y,b,w)=>{const x=Ig(r,d);x[String(d.key)]=d,y._leaveCb=()=>{b(),y._leaveCb=void 0,delete c.delayedLeave},c.delayedLeave=w})}return o}}},Eg=I_;function Ig(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Jl(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:u,onEnterCancelled:c,onBeforeLeave:h,onLeave:d,onAfterLeave:f,onLeaveCancelled:p,onBeforeAppear:m,onAppear:y,onAfterAppear:b,onAppearCancelled:w}=e,x=String(t.key),F=Ig(n,t),j=(S,ae)=>{S&&Vt(S,r,9,ae)},P={mode:i,persisted:o,beforeEnter(S){let ae=a;if(!n.isMounted)if(s)ae=m||a;else return;S._leaveCb&&S._leaveCb(!0);const J=F[x];J&&lr(t,J)&&J.el._leaveCb&&J.el._leaveCb(),j(ae,[S])},enter(S){let ae=l,J=u,pe=c;if(!n.isMounted)if(s)ae=y||l,J=b||u,pe=w||c;else return;let De=!1;const H=S._enterCb=Ie=>{De||(De=!0,Ie?j(pe,[S]):j(J,[S]),P.delayedLeave&&P.delayedLeave(),S._enterCb=void 0)};ae?(ae(S,H),ae.length<=1&&H()):H()},leave(S,ae){const J=String(t.key);if(S._enterCb&&S._enterCb(!0),n.isUnmounting)return ae();j(h,[S]);let pe=!1;const De=S._leaveCb=H=>{pe||(pe=!0,ae(),H?j(p,[S]):j(f,[S]),S._leaveCb=void 0,F[J]===t&&delete F[J])};F[J]=t,d?(d(S,De),d.length<=1&&De()):De()},clone(S){return Jl(S,e,n,r)}};return P}function pl(t){if(_a(t))return t=Wn(t),t.children=null,t}function rd(t){return _a(t)?t.children?t.children[0]:void 0:t}function eu(t,e){t.shapeFlag&6&&t.component?eu(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Tg(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===lt?(o.patchFlag&128&&s++,r=r.concat(Tg(o.children,e,a))):(e||o.type!==jt)&&r.push(a!=null?Wn(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function G(t){return ue(t)?{setup:t,name:t.name}:t}const xo=t=>!!t.type.__asyncLoader,_a=t=>t.type.__isKeepAlive;function T_(t,e){Ag(t,"a",e)}function A_(t,e){Ag(t,"da",e)}function Ag(t,e,n=et){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(wa(e,r,n),n){let s=n.parent;for(;s&&s.parent;)_a(s.parent.vnode)&&S_(r,e,n,s),s=s.parent}}function S_(t,e,n,r){const s=wa(e,t,r,!0);it(()=>{Ju(r[e],s)},n)}function wa(t,e,n=et,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Es(),is(n);const a=Vt(e,n,t,o);return vr(),Is(),a});return r?s.unshift(i):s.push(i),i}}const Cn=t=>(e,n=et)=>(!fi||t==="sp")&&wa(t,e,n),Sg=Cn("bm"),He=Cn("m"),C_=Cn("bu"),dc=Cn("u"),Cg=Cn("bum"),it=Cn("um"),k_=Cn("sp"),D_=Cn("rtg"),R_=Cn("rtc");function x_(t,e=et){wa("ec",t,e)}let tu=!0;function O_(t){const e=Dg(t),n=t.proxy,r=t.ctx;tu=!1,e.beforeCreate&&sd(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:u,created:c,beforeMount:h,mounted:d,beforeUpdate:f,updated:p,activated:m,deactivated:y,beforeDestroy:b,beforeUnmount:w,destroyed:x,unmounted:F,render:j,renderTracked:P,renderTriggered:S,errorCaptured:ae,serverPrefetch:J,expose:pe,inheritAttrs:De,components:H,directives:Ie,filters:Ae}=e;if(u&&P_(u,r,null,t.appContext.config.unwrapInjectedRef),o)for(const Te in o){const Re=o[Te];ue(Re)&&(r[Te]=Re.bind(n))}if(s){const Te=s.call(n,n);We(Te)&&(t.data=Pr(Te))}if(tu=!0,i)for(const Te in i){const Re=i[Te],Rt=ue(Re)?Re.bind(n,n):ue(Re.get)?Re.get.bind(n,n):Zt,$r=!ue(Re)&&ue(Re.set)?Re.set.bind(n):Zt,fn=R({get:Rt,set:$r});Object.defineProperty(r,Te,{enumerable:!0,configurable:!0,get:()=>fn.value,set:tn=>fn.value=tn})}if(a)for(const Te in a)kg(a[Te],r,n,Te);if(l){const Te=ue(l)?l.call(n):l;Reflect.ownKeys(Te).forEach(Re=>{Ue(Re,Te[Re])})}c&&sd(c,t,"c");function Ve(Te,Re){Y(Re)?Re.forEach(Rt=>Te(Rt.bind(n))):Re&&Te(Re.bind(n))}if(Ve(Sg,h),Ve(He,d),Ve(C_,f),Ve(dc,p),Ve(T_,m),Ve(A_,y),Ve(x_,ae),Ve(R_,P),Ve(D_,S),Ve(Cg,w),Ve(it,F),Ve(k_,J),Y(pe))if(pe.length){const Te=t.exposed||(t.exposed={});pe.forEach(Re=>{Object.defineProperty(Te,Re,{get:()=>n[Re],set:Rt=>n[Re]=Rt})})}else t.exposed||(t.exposed={});j&&t.render===Zt&&(t.render=j),De!=null&&(t.inheritAttrs=De),H&&(t.components=H),Ie&&(t.directives=Ie)}function P_(t,e,n=Zt,r=!1){Y(t)&&(t=nu(t));for(const s in t){const i=t[s];let o;We(i)?"default"in i?o=be(i.from||s,i.default,!0):o=be(i.from||s):o=be(i),Be(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function sd(t,e,n){Vt(Y(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function kg(t,e,n,r){const s=r.includes(".")?wg(n,r):()=>n[r];if(Ge(t)){const i=e[t];ue(i)&&At(s,i)}else if(ue(t))At(s,t.bind(n));else if(We(t))if(Y(t))t.forEach(i=>kg(i,e,n,r));else{const i=ue(t.handler)?t.handler.bind(n):e[t.handler];ue(i)&&At(s,i,t)}}function Dg(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>Oo(l,u,o,!0)),Oo(l,e,o)),i.set(e,l),l}function Oo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Oo(t,i,n,!0),s&&s.forEach(o=>Oo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=N_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const N_={data:id,props:or,emits:or,methods:or,computed:or,beforeCreate:wt,created:wt,beforeMount:wt,mounted:wt,beforeUpdate:wt,updated:wt,beforeDestroy:wt,beforeUnmount:wt,destroyed:wt,unmounted:wt,activated:wt,deactivated:wt,errorCaptured:wt,serverPrefetch:wt,components:or,directives:or,watch:M_,provide:id,inject:L_};function id(t,e){return e?t?function(){return ft(ue(t)?t.call(this,this):t,ue(e)?e.call(this,this):e)}:e:t}function L_(t,e){return or(nu(t),nu(e))}function nu(t){if(Y(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function wt(t,e){return t?[...new Set([].concat(t,e))]:e}function or(t,e){return t?ft(ft(Object.create(null),t),e):e}function M_(t,e){if(!t)return e;if(!e)return t;const n=ft(Object.create(null),t);for(const r in e)n[r]=wt(t[r],e[r]);return n}function F_(t,e,n,r=!1){const s={},i={};ko(i,Ia,1),t.propsDefaults=Object.create(null),Rg(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:e_(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function B_(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=ie(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const c=t.vnode.dynamicProps;for(let h=0;h<c.length;h++){let d=c[h];if(ya(t.emitsOptions,d))continue;const f=e[d];if(l)if(me(i,d))f!==i[d]&&(i[d]=f,u=!0);else{const p=ln(d);s[p]=ru(l,a,p,f,t,!1)}else f!==i[d]&&(i[d]=f,u=!0)}}}else{Rg(t,e,s,i)&&(u=!0);let c;for(const h in a)(!e||!me(e,h)&&((c=Or(h))===h||!me(e,c)))&&(l?n&&(n[h]!==void 0||n[c]!==void 0)&&(s[h]=ru(l,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!me(e,h)&&!0)&&(delete i[h],u=!0)}u&&Tn(t,"set","$attrs")}function Rg(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(vo(l))continue;const u=e[l];let c;s&&me(s,c=ln(l))?!i||!i.includes(c)?n[c]=u:(a||(a={}))[c]=u:ya(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=ie(n),u=a||Ne;for(let c=0;c<i.length;c++){const h=i[c];n[h]=ru(s,l,h,u[h],t,!me(u,h))}}return o}function ru(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=me(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&ue(l)){const{propsDefaults:u}=s;n in u?r=u[n]:(is(s),r=u[n]=l.call(null,e),vr())}else r=l}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Or(n))&&(r=!0))}return r}function xg(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!ue(t)){const c=h=>{l=!0;const[d,f]=xg(h,e,!0);ft(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}if(!i&&!l)return r.set(t,Yr),Yr;if(Y(i))for(let c=0;c<i.length;c++){const h=ln(i[c]);od(h)&&(o[h]=Ne)}else if(i)for(const c in i){const h=ln(c);if(od(h)){const d=i[c],f=o[h]=Y(d)||ue(d)?{type:d}:d;if(f){const p=ud(Boolean,f.type),m=ud(String,f.type);f[0]=p>-1,f[1]=m<0||p<m,(p>-1||me(f,"default"))&&a.push(h)}}}const u=[o,a];return r.set(t,u),u}function od(t){return t[0]!=="$"}function ad(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function ld(t,e){return ad(t)===ad(e)}function ud(t,e){return Y(e)?e.findIndex(n=>ld(n,t)):ue(e)&&ld(e,t)?0:-1}const Og=t=>t[0]==="_"||t==="$stable",fc=t=>Y(t)?t.map(sn):[sn(t)],$_=(t,e,n)=>{const r=ot((...s)=>fc(e(...s)),n);return r._c=!1,r},Pg=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Og(s))continue;const i=t[s];if(ue(i))e[s]=$_(s,i,r);else if(i!=null){const o=fc(i);e[s]=()=>o}}},Ng=(t,e)=>{const n=fc(e);t.slots.default=()=>n},U_=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ie(e),ko(e,"_",n)):Pg(e,t.slots={})}else t.slots={},e&&Ng(t,e);ko(t.slots,Ia,1)},V_=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ne;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(ft(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Pg(e,s)),o=e}else e&&(Ng(t,e),o={default:1});if(i)for(const a in s)!Og(a)&&!(a in o)&&delete s[a]};function Ea(t,e){const n=yt;if(n===null)return t;const r=Sa(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,l,u=Ne]=e[i];ue(o)&&(o={mounted:o,updated:o}),o.deep&&cr(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:l,modifiers:u})}return t}function nr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(Es(),Vt(l,n,8,[t.el,a,t,e]),Is())}}function Lg(){return{app:null,config:{isNativeTag:b0,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let j_=0;function z_(t,e){return function(r,s=null){ue(r)||(r=Object.assign({},r)),s!=null&&!We(s)&&(s=null);const i=Lg(),o=new Set;let a=!1;const l=i.app={_uid:j_++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:pw,get config(){return i.config},set config(u){},use(u,...c){return o.has(u)||(u&&ue(u.install)?(o.add(u),u.install(l,...c)):ue(u)&&(o.add(u),u(l,...c))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,c){return c?(i.components[u]=c,l):i.components[u]},directive(u,c){return c?(i.directives[u]=c,l):i.directives[u]},mount(u,c,h){if(!a){const d=he(r,s);return d.appContext=i,c&&e?e(d,u):t(d,u,h),a=!0,l._container=u,u.__vue_app__=l,Sa(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(u,c){return i.provides[u]=c,l}};return l}}function su(t,e,n,r,s=!1){if(Y(t)){t.forEach((d,f)=>su(d,e&&(Y(e)?e[f]:e),n,r,s));return}if(xo(r)&&!s)return;const i=r.shapeFlag&4?Sa(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:l}=t,u=e&&e.r,c=a.refs===Ne?a.refs={}:a.refs,h=a.setupState;if(u!=null&&u!==l&&(Ge(u)?(c[u]=null,me(h,u)&&(h[u]=null)):Be(u)&&(u.value=null)),ue(l))qn(l,a,12,[o,c]);else{const d=Ge(l),f=Be(l);if(d||f){const p=()=>{if(t.f){const m=d?c[l]:l.value;s?Y(m)&&Ju(m,i):Y(m)?m.includes(i)||m.push(i):d?(c[l]=[i],me(h,l)&&(h[l]=c[l])):(l.value=[i],t.k&&(c[t.k]=l.value))}else d?(c[l]=o,me(h,l)&&(h[l]=o)):Be(l)&&(l.value=o,t.k&&(c[t.k]=o))};o?(p.id=-1,St(p,n)):p()}}}const St=__;function q_(t){return H_(t)}function H_(t,e){const n=A0();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:u,setElementText:c,parentNode:h,nextSibling:d,setScopeId:f=Zt,cloneNode:p,insertStaticContent:m}=t,y=(g,v,_,T=null,I=null,N=null,U=!1,O=null,M=!!v.dynamicChildren)=>{if(g===v)return;g&&!lr(g,v)&&(T=W(g),$t(g,I,N,!0),g=null),v.patchFlag===-2&&(M=!1,v.dynamicChildren=null);const{type:C,ref:X,shapeFlag:z}=v;switch(C){case yc:b(g,v,_,T);break;case jt:w(g,v,_,T);break;case gl:g==null&&x(v,_,T,U);break;case lt:Ie(g,v,_,T,I,N,U,O,M);break;default:z&1?P(g,v,_,T,I,N,U,O,M):z&6?Ae(g,v,_,T,I,N,U,O,M):(z&64||z&128)&&C.process(g,v,_,T,I,N,U,O,M,Le)}X!=null&&I&&su(X,g&&g.ref,N,v||g,!v)},b=(g,v,_,T)=>{if(g==null)r(v.el=a(v.children),_,T);else{const I=v.el=g.el;v.children!==g.children&&u(I,v.children)}},w=(g,v,_,T)=>{g==null?r(v.el=l(v.children||""),_,T):v.el=g.el},x=(g,v,_,T)=>{[g.el,g.anchor]=m(g.children,v,_,T,g.el,g.anchor)},F=({el:g,anchor:v},_,T)=>{let I;for(;g&&g!==v;)I=d(g),r(g,_,T),g=I;r(v,_,T)},j=({el:g,anchor:v})=>{let _;for(;g&&g!==v;)_=d(g),s(g),g=_;s(v)},P=(g,v,_,T,I,N,U,O,M)=>{U=U||v.type==="svg",g==null?S(v,_,T,I,N,U,O,M):pe(g,v,I,N,U,O,M)},S=(g,v,_,T,I,N,U,O)=>{let M,C;const{type:X,props:z,shapeFlag:Q,transition:ne,patchFlag:ve,dirs:je}=g;if(g.el&&p!==void 0&&ve===-1)M=g.el=p(g.el);else{if(M=g.el=o(g.type,N,z&&z.is,z),Q&8?c(M,g.children):Q&16&&J(g.children,M,null,T,I,N&&X!=="foreignObject",U,O),je&&nr(g,null,T,"created"),z){for(const Fe in z)Fe!=="value"&&!vo(Fe)&&i(M,Fe,null,z[Fe],N,g.children,T,I,B);"value"in z&&i(M,"value",null,z.value),(C=z.onVnodeBeforeMount)&&rn(C,T,g)}ae(M,g,g.scopeId,U,T)}je&&nr(g,null,T,"beforeMount");const Oe=(!I||I&&!I.pendingBranch)&&ne&&!ne.persisted;Oe&&ne.beforeEnter(M),r(M,v,_),((C=z&&z.onVnodeMounted)||Oe||je)&&St(()=>{C&&rn(C,T,g),Oe&&ne.enter(M),je&&nr(g,null,T,"mounted")},I)},ae=(g,v,_,T,I)=>{if(_&&f(g,_),T)for(let N=0;N<T.length;N++)f(g,T[N]);if(I){let N=I.subTree;if(v===N){const U=I.vnode;ae(g,U,U.scopeId,U.slotScopeIds,I.parent)}}},J=(g,v,_,T,I,N,U,O,M=0)=>{for(let C=M;C<g.length;C++){const X=g[C]=O?Bn(g[C]):sn(g[C]);y(null,X,v,_,T,I,N,U,O)}},pe=(g,v,_,T,I,N,U)=>{const O=v.el=g.el;let{patchFlag:M,dynamicChildren:C,dirs:X}=v;M|=g.patchFlag&16;const z=g.props||Ne,Q=v.props||Ne;let ne;_&&rr(_,!1),(ne=Q.onVnodeBeforeUpdate)&&rn(ne,_,v,g),X&&nr(v,g,_,"beforeUpdate"),_&&rr(_,!0);const ve=I&&v.type!=="foreignObject";if(C?De(g.dynamicChildren,C,O,_,T,ve,N):U||Rt(g,v,O,null,_,T,ve,N,!1),M>0){if(M&16)H(O,v,z,Q,_,T,I);else if(M&2&&z.class!==Q.class&&i(O,"class",null,Q.class,I),M&4&&i(O,"style",z.style,Q.style,I),M&8){const je=v.dynamicProps;for(let Oe=0;Oe<je.length;Oe++){const Fe=je[Oe],Wt=z[Fe],Ur=Q[Fe];(Ur!==Wt||Fe==="value")&&i(O,Fe,Wt,Ur,I,g.children,_,T,B)}}M&1&&g.children!==v.children&&c(O,v.children)}else!U&&C==null&&H(O,v,z,Q,_,T,I);((ne=Q.onVnodeUpdated)||X)&&St(()=>{ne&&rn(ne,_,v,g),X&&nr(v,g,_,"updated")},T)},De=(g,v,_,T,I,N,U)=>{for(let O=0;O<v.length;O++){const M=g[O],C=v[O],X=M.el&&(M.type===lt||!lr(M,C)||M.shapeFlag&70)?h(M.el):_;y(M,C,X,null,T,I,N,U,!0)}},H=(g,v,_,T,I,N,U)=>{if(_!==T){for(const O in T){if(vo(O))continue;const M=T[O],C=_[O];M!==C&&O!=="value"&&i(g,O,C,M,U,v.children,I,N,B)}if(_!==Ne)for(const O in _)!vo(O)&&!(O in T)&&i(g,O,_[O],null,U,v.children,I,N,B);"value"in T&&i(g,"value",_.value,T.value)}},Ie=(g,v,_,T,I,N,U,O,M)=>{const C=v.el=g?g.el:a(""),X=v.anchor=g?g.anchor:a("");let{patchFlag:z,dynamicChildren:Q,slotScopeIds:ne}=v;ne&&(O=O?O.concat(ne):ne),g==null?(r(C,_,T),r(X,_,T),J(v.children,_,X,I,N,U,O,M)):z>0&&z&64&&Q&&g.dynamicChildren?(De(g.dynamicChildren,Q,_,I,N,U,O),(v.key!=null||I&&v===I.subTree)&&pc(g,v,!0)):Rt(g,v,_,X,I,N,U,O,M)},Ae=(g,v,_,T,I,N,U,O,M)=>{v.slotScopeIds=O,g==null?v.shapeFlag&512?I.ctx.activate(v,_,T,U,M):en(v,_,T,I,N,U,M):Ve(g,v,M)},en=(g,v,_,T,I,N,U)=>{const O=g.component=aw(g,T,I);if(_a(g)&&(O.ctx.renderer=Le),lw(O),O.asyncDep){if(I&&I.registerDep(O,Te),!g.el){const M=O.subTree=he(jt);w(null,M,v,_)}return}Te(O,g,v,_,I,N,U)},Ve=(g,v,_)=>{const T=v.component=g.component;if(v_(g,v,_))if(T.asyncDep&&!T.asyncResolved){Re(T,v,_);return}else T.next=v,u_(T.update),T.update();else v.component=g.component,v.el=g.el,T.vnode=v},Te=(g,v,_,T,I,N,U)=>{const O=()=>{if(g.isMounted){let{next:X,bu:z,u:Q,parent:ne,vnode:ve}=g,je=X,Oe;rr(g,!1),X?(X.el=ve.el,Re(g,X,U)):X=ve,z&&yo(z),(Oe=X.props&&X.props.onVnodeBeforeUpdate)&&rn(Oe,ne,X,ve),rr(g,!0);const Fe=fl(g),Wt=g.subTree;g.subTree=Fe,y(Wt,Fe,h(Wt.el),W(Wt),g,I,N),X.el=Fe.el,je===null&&y_(g,Fe.el),Q&&St(Q,I),(Oe=X.props&&X.props.onVnodeUpdated)&&St(()=>rn(Oe,ne,X,ve),I)}else{let X;const{el:z,props:Q}=v,{bm:ne,m:ve,parent:je}=g,Oe=xo(v);if(rr(g,!1),ne&&yo(ne),!Oe&&(X=Q&&Q.onVnodeBeforeMount)&&rn(X,je,v),rr(g,!0),z&&ce){const Fe=()=>{g.subTree=fl(g),ce(z,g.subTree,g,I,null)};Oe?v.type.__asyncLoader().then(()=>!g.isUnmounted&&Fe()):Fe()}else{const Fe=g.subTree=fl(g);y(null,Fe,_,T,g,I,N),v.el=Fe.el}if(ve&&St(ve,I),!Oe&&(X=Q&&Q.onVnodeMounted)){const Fe=v;St(()=>rn(X,je,Fe),I)}v.shapeFlag&256&&g.a&&St(g.a,I),g.isMounted=!0,v=_=T=null}},M=g.effect=new rc(O,()=>gg(g.update),g.scope),C=g.update=M.run.bind(M);C.id=g.uid,rr(g,!0),C()},Re=(g,v,_)=>{v.component=g;const T=g.vnode.props;g.vnode=v,g.next=null,B_(g,v.props,T,_),V_(g,v.children,_),Es(),cc(void 0,g.update),Is()},Rt=(g,v,_,T,I,N,U,O,M=!1)=>{const C=g&&g.children,X=g?g.shapeFlag:0,z=v.children,{patchFlag:Q,shapeFlag:ne}=v;if(Q>0){if(Q&128){fn(C,z,_,T,I,N,U,O,M);return}else if(Q&256){$r(C,z,_,T,I,N,U,O,M);return}}ne&8?(X&16&&B(C,I,N),z!==C&&c(_,z)):X&16?ne&16?fn(C,z,_,T,I,N,U,O,M):B(C,I,N,!0):(X&8&&c(_,""),ne&16&&J(z,_,T,I,N,U,O,M))},$r=(g,v,_,T,I,N,U,O,M)=>{g=g||Yr,v=v||Yr;const C=g.length,X=v.length,z=Math.min(C,X);let Q;for(Q=0;Q<z;Q++){const ne=v[Q]=M?Bn(v[Q]):sn(v[Q]);y(g[Q],ne,_,null,I,N,U,O,M)}C>X?B(g,I,N,!0,!1,z):J(v,_,T,I,N,U,O,M,z)},fn=(g,v,_,T,I,N,U,O,M)=>{let C=0;const X=v.length;let z=g.length-1,Q=X-1;for(;C<=z&&C<=Q;){const ne=g[C],ve=v[C]=M?Bn(v[C]):sn(v[C]);if(lr(ne,ve))y(ne,ve,_,null,I,N,U,O,M);else break;C++}for(;C<=z&&C<=Q;){const ne=g[z],ve=v[Q]=M?Bn(v[Q]):sn(v[Q]);if(lr(ne,ve))y(ne,ve,_,null,I,N,U,O,M);else break;z--,Q--}if(C>z){if(C<=Q){const ne=Q+1,ve=ne<X?v[ne].el:T;for(;C<=Q;)y(null,v[C]=M?Bn(v[C]):sn(v[C]),_,ve,I,N,U,O,M),C++}}else if(C>Q)for(;C<=z;)$t(g[C],I,N,!0),C++;else{const ne=C,ve=C,je=new Map;for(C=ve;C<=Q;C++){const xt=v[C]=M?Bn(v[C]):sn(v[C]);xt.key!=null&&je.set(xt.key,C)}let Oe,Fe=0;const Wt=Q-ve+1;let Ur=!1,Vh=0;const Fs=new Array(Wt);for(C=0;C<Wt;C++)Fs[C]=0;for(C=ne;C<=z;C++){const xt=g[C];if(Fe>=Wt){$t(xt,I,N,!0);continue}let nn;if(xt.key!=null)nn=je.get(xt.key);else for(Oe=ve;Oe<=Q;Oe++)if(Fs[Oe-ve]===0&&lr(xt,v[Oe])){nn=Oe;break}nn===void 0?$t(xt,I,N,!0):(Fs[nn-ve]=C+1,nn>=Vh?Vh=nn:Ur=!0,y(xt,v[nn],_,null,I,N,U,O,M),Fe++)}const jh=Ur?K_(Fs):Yr;for(Oe=jh.length-1,C=Wt-1;C>=0;C--){const xt=ve+C,nn=v[xt],zh=xt+1<X?v[xt+1].el:T;Fs[C]===0?y(null,nn,_,zh,I,N,U,O,M):Ur&&(Oe<0||C!==jh[Oe]?tn(nn,_,zh,2):Oe--)}}},tn=(g,v,_,T,I=null)=>{const{el:N,type:U,transition:O,children:M,shapeFlag:C}=g;if(C&6){tn(g.component.subTree,v,_,T);return}if(C&128){g.suspense.move(v,_,T);return}if(C&64){U.move(g,v,_,Le);return}if(U===lt){r(N,v,_);for(let z=0;z<M.length;z++)tn(M[z],v,_,T);r(g.anchor,v,_);return}if(U===gl){F(g,v,_);return}if(T!==2&&C&1&&O)if(T===0)O.beforeEnter(N),r(N,v,_),St(()=>O.enter(N),I);else{const{leave:z,delayLeave:Q,afterLeave:ne}=O,ve=()=>r(N,v,_),je=()=>{z(N,()=>{ve(),ne&&ne()})};Q?Q(N,ve,je):je()}else r(N,v,_)},$t=(g,v,_,T=!1,I=!1)=>{const{type:N,props:U,ref:O,children:M,dynamicChildren:C,shapeFlag:X,patchFlag:z,dirs:Q}=g;if(O!=null&&su(O,null,_,g,!0),X&256){v.ctx.deactivate(g);return}const ne=X&1&&Q,ve=!xo(g);let je;if(ve&&(je=U&&U.onVnodeBeforeUnmount)&&rn(je,v,g),X&6)q(g.component,_,T);else{if(X&128){g.suspense.unmount(_,T);return}ne&&nr(g,null,v,"beforeUnmount"),X&64?g.type.remove(g,v,_,I,Le,T):C&&(N!==lt||z>0&&z&64)?B(C,v,_,!1,!0):(N===lt&&z&384||!I&&X&16)&&B(M,v,_),T&&hl(g)}(ve&&(je=U&&U.onVnodeUnmounted)||ne)&&St(()=>{je&&rn(je,v,g),ne&&nr(g,null,v,"unmounted")},_)},hl=g=>{const{type:v,el:_,anchor:T,transition:I}=g;if(v===lt){E(_,T);return}if(v===gl){j(g);return}const N=()=>{s(_),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(g.shapeFlag&1&&I&&!I.persisted){const{leave:U,delayLeave:O}=I,M=()=>U(_,N);O?O(g.el,N,M):M()}else N()},E=(g,v)=>{let _;for(;g!==v;)_=d(g),s(g),g=_;s(v)},q=(g,v,_)=>{const{bum:T,scope:I,update:N,subTree:U,um:O}=g;T&&yo(T),I.stop(),N&&(N.active=!1,$t(U,g,v,_)),O&&St(O,v),St(()=>{g.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},B=(g,v,_,T=!1,I=!1,N=0)=>{for(let U=N;U<g.length;U++)$t(g[U],v,_,T,I)},W=g=>g.shapeFlag&6?W(g.component.subTree):g.shapeFlag&128?g.suspense.next():d(g.anchor||g.el),xe=(g,v,_)=>{g==null?v._vnode&&$t(v._vnode,null,null,!0):y(v._vnode||null,g,v,null,null,null,_),yg(),v._vnode=g},Le={p:y,um:$t,m:tn,r:hl,mt:en,mc:J,pc:Rt,pbc:De,n:W,o:t};let fe,ce;return e&&([fe,ce]=e(Le)),{render:xe,hydrate:fe,createApp:z_(xe,fe)}}function rr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function pc(t,e,n=!1){const r=t.children,s=e.children;if(Y(r)&&Y(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Bn(s[i]),a.el=o.el),n||pc(o,a))}}function K_(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const W_=t=>t.__isTeleport,Qs=t=>t&&(t.disabled||t.disabled===""),cd=t=>typeof SVGElement!="undefined"&&t instanceof SVGElement,iu=(t,e)=>{const n=t&&t.to;return Ge(n)?e?e(n):null:n},G_={__isTeleport:!0,process(t,e,n,r,s,i,o,a,l,u){const{mc:c,pc:h,pbc:d,o:{insert:f,querySelector:p,createText:m,createComment:y}}=u,b=Qs(e.props);let{shapeFlag:w,children:x,dynamicChildren:F}=e;if(t==null){const j=e.el=m(""),P=e.anchor=m("");f(j,n,r),f(P,n,r);const S=e.target=iu(e.props,p),ae=e.targetAnchor=m("");S&&(f(ae,S),o=o||cd(S));const J=(pe,De)=>{w&16&&c(x,pe,De,s,i,o,a,l)};b?J(n,P):S&&J(S,ae)}else{e.el=t.el;const j=e.anchor=t.anchor,P=e.target=t.target,S=e.targetAnchor=t.targetAnchor,ae=Qs(t.props),J=ae?n:P,pe=ae?j:S;if(o=o||cd(P),F?(d(t.dynamicChildren,F,J,s,i,o,a),pc(t,e,!0)):l||h(t,e,J,pe,s,i,o,a,!1),b)ae||ao(e,n,j,u,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const De=e.target=iu(e.props,p);De&&ao(e,De,null,u,0)}else ae&&ao(e,P,S,u,1)}},remove(t,e,n,r,{um:s,o:{remove:i}},o){const{shapeFlag:a,children:l,anchor:u,targetAnchor:c,target:h,props:d}=t;if(h&&i(c),(o||!Qs(d))&&(i(u),a&16))for(let f=0;f<l.length;f++){const p=l[f];s(p,e,n,!0,!!p.dynamicChildren)}},move:ao,hydrate:X_};function ao(t,e,n,{o:{insert:r},m:s},i=2){i===0&&r(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:u,props:c}=t,h=i===2;if(h&&r(o,e,n),(!h||Qs(c))&&l&16)for(let d=0;d<u.length;d++)s(u[d],e,n,2);h&&r(a,e,n)}function X_(t,e,n,r,s,i,{o:{nextSibling:o,parentNode:a,querySelector:l}},u){const c=e.target=iu(e.props,l);if(c){const h=c._lpa||c.firstChild;e.shapeFlag&16&&(Qs(e.props)?(e.anchor=u(o(t),e,a(t),n,r,s,i),e.targetAnchor=h):(e.anchor=o(t),e.targetAnchor=u(h,e,c,n,r,s,i)),c._lpa=e.targetAnchor&&o(e.targetAnchor))}return e.anchor&&o(e.anchor)}const Q_=G_,gc="components",Y_="directives";function mc(t,e){return vc(gc,t,!0,e)||t}const Mg=Symbol();function Z_(t){return Ge(t)?vc(gc,t,!1)||t:t||Mg}function J_(t){return vc(Y_,t)}function vc(t,e,n=!0,r=!1){const s=yt||et;if(s){const i=s.type;if(t===gc){const a=dw(i);if(a&&(a===e||a===ln(e)||a===ga(ln(e))))return i}const o=hd(s[t]||i[t],e)||hd(s.appContext[t],e);return!o&&r?i:o}}function hd(t,e){return t&&(t[e]||t[ln(e)]||t[ga(ln(e))])}const lt=Symbol(void 0),yc=Symbol(void 0),jt=Symbol(void 0),gl=Symbol(void 0),Ys=[];let mr=null;function Ce(t=!1){Ys.push(mr=t?null:[])}function ew(){Ys.pop(),mr=Ys[Ys.length-1]||null}let Po=1;function dd(t){Po+=t}function Fg(t){return t.dynamicChildren=Po>0?mr||Yr:null,ew(),Po>0&&mr&&mr.push(t),t}function tt(t,e,n,r,s,i){return Fg(ye(t,e,n,r,s,i,!0))}function un(t,e,n,r,s){return Fg(he(t,e,n,r,s,!0))}function No(t){return t?t.__v_isVNode===!0:!1}function lr(t,e){return t.type===e.type&&t.key===e.key}const Ia="__vInternal",Bg=({key:t})=>t!=null?t:null,bo=({ref:t,ref_key:e,ref_for:n})=>t!=null?Ge(t)||Be(t)||ue(t)?{i:yt,r:t,k:e,f:!!n}:t:null;function ye(t,e=null,n=null,r=0,s=null,i=t===lt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Bg(e),ref:e&&bo(e),scopeId:ba,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(bc(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Ge(n)?8:16),Po>0&&!o&&mr&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&mr.push(l),l}const he=tw;function tw(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Mg)&&(t=jt),No(t)){const a=Wn(t,e,!0);return n&&bc(a,n),a}if(fw(t)&&(t=t.__vccOpts),e){e=nw(e);let{class:a,style:l}=e;a&&!Ge(a)&&(e.class=wn(a)),We(l)&&(ag(l)&&!Y(l)&&(l=ft({},l)),e.style=ha(l))}const o=Ge(t)?1:b_(t)?128:W_(t)?64:We(t)?4:ue(t)?2:0;return ye(t,e,n,r,s,o,i,!0)}function nw(t){return t?ag(t)||Ia in t?ft({},t):t:null}function Wn(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?Ta(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Bg(a),ref:e&&e.ref?n&&s?Y(s)?s.concat(bo(e)):[s,bo(e)]:bo(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==lt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Wn(t.ssContent),ssFallback:t.ssFallback&&Wn(t.ssFallback),el:t.el,anchor:t.anchor}}function Ts(t=" ",e=0){return he(yc,null,t,e)}function rw(t="",e=!1){return e?(Ce(),un(jt,null,t)):he(jt,null,t)}function sn(t){return t==null||typeof t=="boolean"?he(jt):Y(t)?he(lt,null,t.slice()):typeof t=="object"?Bn(t):he(yc,null,String(t))}function Bn(t){return t.el===null||t.memo?t:Wn(t)}function bc(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(Y(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),bc(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Ia in e)?e._ctx=yt:s===3&&yt&&(yt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ue(e)?(e={default:e,_ctx:yt},n=32):(e=String(e),r&64?(n=16,e=[Ts(e)]):n=8);t.children=e,t.shapeFlag|=n}function Ta(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=wn([e.class,r.class]));else if(s==="style")e.style=ha([e.style,r.style]);else if(da(s)){const i=e[s],o=r[s];o&&i!==o&&!(Y(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function rn(t,e,n,r=null){Vt(t,e,7,[n,r])}function ou(t,e,n,r){let s;const i=n&&n[r];if(Y(t)||Ge(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(We(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const u=o[a];s[a]=e(t[u],u,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}function Aa(t,e,n={},r,s){if(yt.isCE||yt.parent&&xo(yt.parent)&&yt.parent.isCE)return he("slot",e==="default"?null:{name:e},r&&r());let i=t[e];i&&i._c&&(i._d=!1),Ce();const o=i&&$g(i(n)),a=un(lt,{key:n.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function $g(t){return t.some(e=>No(e)?!(e.type===jt||e.type===lt&&!$g(e.children)):!0)?t:null}const au=t=>t?Ug(t)?Sa(t)||t.proxy:au(t.parent):null,Lo=ft(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>au(t.parent),$root:t=>au(t.root),$emit:t=>t.emit,$options:t=>Dg(t),$forceUpdate:t=>()=>gg(t.update),$nextTick:t=>Ee.bind(t.proxy),$watch:t=>w_.bind(t)}),sw={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;let u;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(r!==Ne&&me(r,e))return o[e]=1,r[e];if(s!==Ne&&me(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&me(u,e))return o[e]=3,i[e];if(n!==Ne&&me(n,e))return o[e]=4,n[e];tu&&(o[e]=0)}}const c=Lo[e];let h,d;if(c)return e==="$attrs"&&Mt(t,"get",e),c(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ne&&me(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,me(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return s!==Ne&&me(s,e)?(s[e]=n,!0):r!==Ne&&me(r,e)?(r[e]=n,!0):me(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Ne&&me(t,o)||e!==Ne&&me(e,o)||(a=i[0])&&me(a,o)||me(r,o)||me(Lo,o)||me(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:me(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},iw=Lg();let ow=0;function aw(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||iw,i={uid:ow++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Wp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:xg(r,s),emitsOptions:_g(r,s),emit:null,emitted:null,propsDefaults:Ne,inheritAttrs:r.inheritAttrs,ctx:Ne,data:Ne,props:Ne,attrs:Ne,slots:Ne,refs:Ne,setupState:Ne,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=d_.bind(null,i),t.ce&&t.ce(i),i}let et=null;const As=()=>et||yt,is=t=>{et=t,t.scope.on()},vr=()=>{et&&et.scope.off(),et=null};function Ug(t){return t.vnode.shapeFlag&4}let fi=!1;function lw(t,e=!1){fi=e;const{props:n,children:r}=t.vnode,s=Ug(t);F_(t,n,s,e),U_(t,r);const i=s?uw(t,e):void 0;return fi=!1,i}function uw(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ss(new Proxy(t.ctx,sw));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?hw(t):null;is(t),Es();const i=qn(r,t,0,[t.props,s]);if(Is(),vr(),qp(i)){if(i.then(vr,vr),e)return i.then(o=>{fd(t,o,e)}).catch(o=>{va(o,t,0)});t.asyncDep=i}else fd(t,i,e)}else Vg(t,e)}function fd(t,e,n){ue(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:We(e)&&(t.setupState=dg(e)),Vg(t,n)}let pd;function Vg(t,e,n){const r=t.type;if(!t.render){if(!e&&pd&&!r.render){const s=r.template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,u=ft(ft({isCustomElement:i,delimiters:a},o),l);r.render=pd(s,u)}}t.render=r.render||Zt}is(t),Es(),O_(t),Is(),vr()}function cw(t){return new Proxy(t.attrs,{get(e,n){return Mt(t,"get","$attrs"),e[n]}})}function hw(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=cw(t))},slots:t.slots,emit:t.emit,expose:e}}function Sa(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(dg(ss(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Lo)return Lo[n](t)}}))}function dw(t){return ue(t)&&t.displayName||t.name}function fw(t){return ue(t)&&"__vccOpts"in t}const R=(t,e)=>o_(t,e,fi);function Yt(t,e,n){const r=arguments.length;return r===2?We(e)&&!Y(e)?No(e)?he(t,null,[e]):he(t,e):he(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&No(n)&&(n=[n]),he(t,e,n))}const pw="3.2.33",gw="http://www.w3.org/2000/svg",ur=typeof document!="undefined"?document:null,gd=ur&&ur.createElement("template"),mw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?ur.createElementNS(gw,t):ur.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>ur.createTextNode(t),createComment:t=>ur.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ur.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{gd.innerHTML=r?`<svg>${t}</svg>`:t;const a=gd.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function vw(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function yw(t,e,n){const r=t.style,s=Ge(n);if(n&&!s){for(const i in n)lu(r,i,n[i]);if(e&&!Ge(e))for(const i in e)n[i]==null&&lu(r,i,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const md=/\s*!important$/;function lu(t,e,n){if(Y(n))n.forEach(r=>lu(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=bw(t,e);md.test(n)?t.setProperty(Or(r),n.replace(md,""),"important"):t[r]=n}}const vd=["Webkit","Moz","ms"],ml={};function bw(t,e){const n=ml[e];if(n)return n;let r=ln(e);if(r!=="filter"&&r in t)return ml[e]=r;r=ga(r);for(let s=0;s<vd.length;s++){const i=vd[s]+r;if(i in t)return ml[e]=i}return e}const yd="http://www.w3.org/1999/xlink";function _w(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(yd,e.slice(6,e.length)):t.setAttributeNS(yd,e,n);else{const i=f0(e);n==null||i&&!jp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function ww(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n==null?"":n;(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=jp(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[jg,Ew]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=()=>performance.now());const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let uu=0;const Iw=Promise.resolve(),Tw=()=>{uu=0},Aw=()=>uu||(Iw.then(Tw),uu=jg());function mn(t,e,n,r){t.addEventListener(e,n,r)}function Sw(t,e,n,r){t.removeEventListener(e,n,r)}function Cw(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=kw(e);if(r){const u=i[e]=Dw(r,s);mn(t,a,u,l)}else o&&(Sw(t,a,o,l),i[e]=void 0)}}const bd=/(?:Once|Passive|Capture)$/;function kw(t){let e;if(bd.test(t)){e={};let n;for(;n=t.match(bd);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Or(t.slice(2)),e]}function Dw(t,e){const n=r=>{const s=r.timeStamp||jg();(Ew||s>=n.attached-1)&&Vt(Rw(r,n.value),e,5,[r])};return n.value=t,n.attached=Aw(),n}function Rw(t,e){if(Y(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const _d=/^on[a-z]/,xw=(t,e,n,r,s=!1,i,o,a,l)=>{e==="class"?vw(t,r,s):e==="style"?yw(t,n,r):da(e)?Zu(e)||Cw(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ow(t,e,r,s))?ww(t,e,r,i,o,a,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),_w(t,e,r,s))};function Ow(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&_d.test(e)&&ue(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||_d.test(e)&&Ge(n)?!1:e in t}const xn="transition",Bs="animation",pi=(t,{slots:e})=>Yt(Eg,Pw(t),e);pi.displayName="Transition";const zg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};pi.props=ft({},Eg.props,zg);const sr=(t,e=[])=>{Y(t)?t.forEach(n=>n(...e)):t&&t(...e)},wd=t=>t?Y(t)?t.some(e=>e.length>1):t.length>1:!1;function Pw(t){const e={};for(const H in t)H in zg||(e[H]=t[H]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:u=o,appearToClass:c=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=t,p=Nw(s),m=p&&p[0],y=p&&p[1],{onBeforeEnter:b,onEnter:w,onEnterCancelled:x,onLeave:F,onLeaveCancelled:j,onBeforeAppear:P=b,onAppear:S=w,onAppearCancelled:ae=x}=e,J=(H,Ie,Ae)=>{Vr(H,Ie?c:a),Vr(H,Ie?u:o),Ae&&Ae()},pe=(H,Ie)=>{Vr(H,f),Vr(H,d),Ie&&Ie()},De=H=>(Ie,Ae)=>{const en=H?S:w,Ve=()=>J(Ie,H,Ae);sr(en,[Ie,Ve]),Ed(()=>{Vr(Ie,H?l:i),On(Ie,H?c:a),wd(en)||Id(Ie,r,m,Ve)})};return ft(e,{onBeforeEnter(H){sr(b,[H]),On(H,i),On(H,o)},onBeforeAppear(H){sr(P,[H]),On(H,l),On(H,u)},onEnter:De(!1),onAppear:De(!0),onLeave(H,Ie){const Ae=()=>pe(H,Ie);On(H,h),Fw(),On(H,d),Ed(()=>{Vr(H,h),On(H,f),wd(F)||Id(H,r,y,Ae)}),sr(F,[H,Ae])},onEnterCancelled(H){J(H,!1),sr(x,[H])},onAppearCancelled(H){J(H,!0),sr(ae,[H])},onLeaveCancelled(H){pe(H),sr(j,[H])}})}function Nw(t){if(t==null)return null;if(We(t))return[vl(t.enter),vl(t.leave)];{const e=vl(t);return[e,e]}}function vl(t){return ui(t)}function On(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function Vr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Ed(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Lw=0;function Id(t,e,n,r){const s=t._endId=++Lw,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:l}=Mw(t,e);if(!o)return r();const u=o+"end";let c=0;const h=()=>{t.removeEventListener(u,d),i()},d=f=>{f.target===t&&++c>=l&&h()};setTimeout(()=>{c<l&&h()},a+1),t.addEventListener(u,d)}function Mw(t,e){const n=window.getComputedStyle(t),r=p=>(n[p]||"").split(", "),s=r(xn+"Delay"),i=r(xn+"Duration"),o=Td(s,i),a=r(Bs+"Delay"),l=r(Bs+"Duration"),u=Td(a,l);let c=null,h=0,d=0;e===xn?o>0&&(c=xn,h=o,d=i.length):e===Bs?u>0&&(c=Bs,h=u,d=l.length):(h=Math.max(o,u),c=h>0?o>u?xn:Bs:null,d=c?c===xn?i.length:l.length:0);const f=c===xn&&/\b(transform|all)(,|$)/.test(n[xn+"Property"]);return{type:c,timeout:h,propCount:d,hasTransform:f}}function Td(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Ad(n)+Ad(t[r])))}function Ad(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function Fw(){return document.body.offsetHeight}const Gn=t=>{const e=t.props["onUpdate:modelValue"];return Y(e)?n=>yo(e,n):e};function Bw(t){t.target.composing=!0}function Sd(t){const e=t.target;e.composing&&(e.composing=!1,$w(e,"input"))}function $w(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const Cd={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Gn(s);const i=r||s.props&&s.props.type==="number";mn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n?a=a.trim():i&&(a=ui(a)),t._assign(a)}),n&&mn(t,"change",()=>{t.value=t.value.trim()}),e||(mn(t,"compositionstart",Bw),mn(t,"compositionend",Sd),mn(t,"change",Sd))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Gn(i),t.composing||document.activeElement===t&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&ui(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},Uw={deep:!0,created(t,e,n){t._assign=Gn(n),mn(t,"change",()=>{const r=t._modelValue,s=os(t),i=t.checked,o=t._assign;if(Y(r)){const a=Yu(r,s),l=a!==-1;if(i&&!l)o(r.concat(s));else if(!i&&l){const u=[...r];u.splice(a,1),o(u)}}else if(ws(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(qg(t,i))})},mounted:kd,beforeUpdate(t,e,n){t._assign=Gn(n),kd(t,e,n)}};function kd(t,{value:e,oldValue:n},r){t._modelValue=e,Y(e)?t.checked=Yu(e,r.props.value)>-1:ws(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=wr(e,qg(t,!0)))}const Vw={created(t,{value:e},n){t.checked=wr(e,n.props.value),t._assign=Gn(n),mn(t,"change",()=>{t._assign(os(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t._assign=Gn(r),e!==n&&(t.checked=wr(e,r.props.value))}},jw={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=ws(e);mn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?ui(os(o)):os(o));t._assign(t.multiple?s?new Set(i):i:i[0])}),t._assign=Gn(r)},mounted(t,{value:e}){Dd(t,e)},beforeUpdate(t,e,n){t._assign=Gn(n)},updated(t,{value:e}){Dd(t,e)}};function Dd(t,e){const n=t.multiple;if(!(n&&!Y(e)&&!ws(e))){for(let r=0,s=t.options.length;r<s;r++){const i=t.options[r],o=os(i);if(n)Y(e)?i.selected=Yu(e,o)>-1:i.selected=e.has(o);else if(wr(os(i),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function os(t){return"_value"in t?t._value:t.value}function qg(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const zw={created(t,e,n){lo(t,e,n,null,"created")},mounted(t,e,n){lo(t,e,n,null,"mounted")},beforeUpdate(t,e,n,r){lo(t,e,n,r,"beforeUpdate")},updated(t,e,n,r){lo(t,e,n,r,"updated")}};function lo(t,e,n,r,s){let i;switch(t.tagName){case"SELECT":i=jw;break;case"TEXTAREA":i=Cd;break;default:switch(n.props&&n.props.type){case"checkbox":i=Uw;break;case"radio":i=Vw;break;default:i=Cd}}const o=i[s];o&&o(t,e,n,r)}const qw=["ctrl","shift","alt","meta"],Hw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>qw.some(n=>t[`${n}Key`]&&!e.includes(n))},Hg=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=Hw[e[s]];if(i&&i(n,e))return}return t(n,...r)},Kw={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Ww=(t,e)=>n=>{if(!("key"in n))return;const r=Or(n.key);if(e.some(s=>s===r||Kw[s]===r))return t(n)},Kg={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):$s(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),$s(t,!0),r.enter(t)):r.leave(t,()=>{$s(t,!1)}):$s(t,e))},beforeUnmount(t,{value:e}){$s(t,e)}};function $s(t,e){t.style.display=e?t._vod:"none"}const Gw=ft({patchProp:xw},mw);let Rd;function Xw(){return Rd||(Rd=q_(Gw))}const Qw=(...t)=>{const e=Xw().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Yw(r);if(!s)return;const i=e._component;!ue(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Yw(t){return Ge(t)?document.querySelector(t):t}/*!
  * vue-router v4.0.14
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Wg=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Ss=t=>Wg?Symbol(t):"_vr_"+t,Zw=Ss("rvlm"),xd=Ss("rvd"),Ca=Ss("r"),_c=Ss("rl"),cu=Ss("rvl"),Gr=typeof window!="undefined";function Jw(t){return t.__esModule||Wg&&t[Symbol.toStringTag]==="Module"}const Pe=Object.assign;function yl(t,e){const n={};for(const r in e){const s=e[r];n[r]=Array.isArray(s)?s.map(t):t(s)}return n}const Zs=()=>{},eE=/\/$/,tE=t=>t.replace(eE,"");function bl(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("?"),l=e.indexOf("#",a>-1?a:0);return a>-1&&(r=e.slice(0,a),i=e.slice(a+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=iE(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function nE(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Od(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function rE(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&as(e.matched[r],n.matched[s])&&Gg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function as(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Gg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!sE(t[n],e[n]))return!1;return!0}function sE(t,e){return Array.isArray(t)?Pd(t,e):Array.isArray(e)?Pd(e,t):t===e}function Pd(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function iE(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],!(s===1||o==="."))if(o==="..")s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var gi;(function(t){t.pop="pop",t.push="push"})(gi||(gi={}));var Js;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Js||(Js={}));function oE(t){if(!t)if(Gr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),tE(t)}const aE=/^[^#]+#/;function lE(t,e){return t.replace(aE,"#")+e}function uE(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const ka=()=>({left:window.pageXOffset,top:window.pageYOffset});function cE(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=uE(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Nd(t,e){return(history.state?history.state.position-e:-1)+t}const hu=new Map;function hE(t,e){hu.set(t,e)}function dE(t){const e=hu.get(t);return hu.delete(t),e}let fE=()=>location.protocol+"//"+location.host;function Xg(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),Od(l,"")}return Od(n,t)+r+s}function pE(t,e,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const f=Xg(t,location),p=n.value,m=e.value;let y=0;if(d){if(n.value=f,e.value=d,o&&o===p){o=null;return}y=m?d.position-m.position:0}else r(f);s.forEach(b=>{b(n.value,p,{delta:y,type:gi.pop,direction:y?y>0?Js.forward:Js.back:Js.unknown})})};function l(){o=n.value}function u(d){s.push(d);const f=()=>{const p=s.indexOf(d);p>-1&&s.splice(p,1)};return i.push(f),f}function c(){const{history:d}=window;!d.state||d.replaceState(Pe({},d.state,{scroll:ka()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",c),{pauseListeners:l,listen:u,destroy:h}}function Ld(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?ka():null}}function gE(t){const{history:e,location:n}=window,r={value:Xg(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,c){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:fE()+t+l;try{e[c?"replaceState":"pushState"](u,"",d),s.value=u}catch(f){console.error(f),n[c?"replace":"assign"](d)}}function o(l,u){const c=Pe({},e.state,Ld(s.value.back,l,s.value.forward,!0),u,{position:s.value.position});i(l,c,!0),r.value=l}function a(l,u){const c=Pe({},s.value,e.state,{forward:l,scroll:ka()});i(c.current,c,!0);const h=Pe({},Ld(r.value,l,null),{position:c.position+1},u);i(l,h,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function mE(t){t=oE(t);const e=gE(t),n=pE(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Pe({location:"",base:t,go:r,createHref:lE.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function vE(t){return typeof t=="string"||t&&typeof t=="object"}function Qg(t){return typeof t=="string"||typeof t=="symbol"}const Pn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Yg=Ss("nf");var Md;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Md||(Md={}));function ls(t,e){return Pe(new Error,{type:t,[Yg]:!0},e)}function Nn(t,e){return t instanceof Error&&Yg in t&&(e==null||!!(t.type&e))}const Fd="[^/]+?",yE={sensitive:!1,strict:!1,start:!0,end:!0},bE=/[.+*?^${}()[\]/\\]/g;function _E(t,e){const n=Pe({},yE,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const c=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let h=0;h<u.length;h++){const d=u[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(bE,"\\$&"),f+=40;else if(d.type===1){const{value:p,repeatable:m,optional:y,regexp:b}=d;i.push({name:p,repeatable:m,optional:y});const w=b||Fd;if(w!==Fd){f+=10;try{new RegExp(`(${w})`)}catch(F){throw new Error(`Invalid custom RegExp for param "${p}" (${w}): `+F.message)}}let x=m?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;h||(x=y&&u.length<2?`(?:/${x})`:"/"+x),y&&(x+="?"),s+=x,f+=20,y&&(f+=-8),m&&(f+=-20),w===".*"&&(f+=-50)}c.push(f)}r.push(c)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const c=u.match(o),h={};if(!c)return null;for(let d=1;d<c.length;d++){const f=c[d]||"",p=i[d-1];h[p.name]=f&&p.repeatable?f.split("/"):f}return h}function l(u){let c="",h=!1;for(const d of t){(!h||!c.endsWith("/"))&&(c+="/"),h=!1;for(const f of d)if(f.type===0)c+=f.value;else if(f.type===1){const{value:p,repeatable:m,optional:y}=f,b=p in u?u[p]:"";if(Array.isArray(b)&&!m)throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);const w=Array.isArray(b)?b.join("/"):b;if(!w)if(y)d.length<2&&(c.endsWith("/")?c=c.slice(0,-1):h=!0);else throw new Error(`Missing required param "${p}"`);c+=w}}return c}return{re:o,score:r,keys:i,parse:a,stringify:l}}function wE(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function EE(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=wE(r[n],s[n]);if(i)return i;n++}return s.length-r.length}const IE={type:0,value:""},TE=/[a-zA-Z0-9_]/;function AE(t){if(!t)return[[]];if(t==="/")return[[IE]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${u}": ${f}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,u="",c="";function h(){!u||(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function d(){u+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(u&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:l==="("?n=2:TE.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:n=3:c+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,c="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),s}function SE(t,e,n){const r=_E(AE(t.path),n),s=Pe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function CE(t,e){const n=[],r=new Map;e=$d({strict:!1,end:!0,sensitive:!1},e);function s(c){return r.get(c)}function i(c,h,d){const f=!d,p=DE(c);p.aliasOf=d&&d.record;const m=$d(e,c),y=[p];if("alias"in c){const x=typeof c.alias=="string"?[c.alias]:c.alias;for(const F of x)y.push(Pe({},p,{components:d?d.record.components:p.components,path:F,aliasOf:d?d.record:p}))}let b,w;for(const x of y){const{path:F}=x;if(h&&F[0]!=="/"){const j=h.record.path,P=j[j.length-1]==="/"?"":"/";x.path=h.record.path+(F&&P+F)}if(b=SE(x,h,m),d?d.alias.push(b):(w=w||b,w!==b&&w.alias.push(b),f&&c.name&&!Bd(b)&&o(c.name)),"children"in p){const j=p.children;for(let P=0;P<j.length;P++)i(j[P],b,d&&d.children[P])}d=d||b,l(b)}return w?()=>{o(w)}:Zs}function o(c){if(Qg(c)){const h=r.get(c);h&&(r.delete(c),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(c);h>-1&&(n.splice(h,1),c.record.name&&r.delete(c.record.name),c.children.forEach(o),c.alias.forEach(o))}}function a(){return n}function l(c){let h=0;for(;h<n.length&&EE(c,n[h])>=0&&(c.record.path!==n[h].record.path||!Zg(c,n[h]));)h++;n.splice(h,0,c),c.record.name&&!Bd(c)&&r.set(c.record.name,c)}function u(c,h){let d,f={},p,m;if("name"in c&&c.name){if(d=r.get(c.name),!d)throw ls(1,{location:c});m=d.record.name,f=Pe(kE(h.params,d.keys.filter(w=>!w.optional).map(w=>w.name)),c.params),p=d.stringify(f)}else if("path"in c)p=c.path,d=n.find(w=>w.re.test(p)),d&&(f=d.parse(p),m=d.record.name);else{if(d=h.name?r.get(h.name):n.find(w=>w.re.test(h.path)),!d)throw ls(1,{location:c,currentLocation:h});m=d.record.name,f=Pe({},h.params,c.params),p=d.stringify(f)}const y=[];let b=d;for(;b;)y.unshift(b.record),b=b.parent;return{name:m,path:p,params:f,matched:y,meta:xE(y)}}return t.forEach(c=>i(c)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function kE(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function DE(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:RE(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function RE(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function Bd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function xE(t){return t.reduce((e,n)=>Pe(e,n.meta),{})}function $d(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Zg(t,e){return e.children.some(n=>n===t||Zg(t,n))}const Jg=/#/g,OE=/&/g,PE=/\//g,NE=/=/g,LE=/\?/g,em=/\+/g,ME=/%5B/g,FE=/%5D/g,tm=/%5E/g,BE=/%60/g,nm=/%7B/g,$E=/%7C/g,rm=/%7D/g,UE=/%20/g;function wc(t){return encodeURI(""+t).replace($E,"|").replace(ME,"[").replace(FE,"]")}function VE(t){return wc(t).replace(nm,"{").replace(rm,"}").replace(tm,"^")}function du(t){return wc(t).replace(em,"%2B").replace(UE,"+").replace(Jg,"%23").replace(OE,"%26").replace(BE,"`").replace(nm,"{").replace(rm,"}").replace(tm,"^")}function jE(t){return du(t).replace(NE,"%3D")}function zE(t){return wc(t).replace(Jg,"%23").replace(LE,"%3F")}function qE(t){return t==null?"":zE(t).replace(PE,"%2F")}function Mo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function HE(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(em," "),o=i.indexOf("="),a=Mo(o<0?i:i.slice(0,o)),l=o<0?null:Mo(i.slice(o+1));if(a in e){let u=e[a];Array.isArray(u)||(u=e[a]=[u]),u.push(l)}else e[a]=l}return e}function Ud(t){let e="";for(let n in t){const r=t[n];if(n=jE(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(r)?r.map(i=>i&&du(i)):[r&&du(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function KE(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Array.isArray(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}function Us(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function $n(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(ls(4,{from:n,to:e})):h instanceof Error?a(h):vE(h)?a(ls(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},u=t.call(r&&r.instances[s],e,n,l);let c=Promise.resolve(u);t.length<3&&(c=c.then(l)),c.catch(h=>a(h))})}function _l(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(WE(a)){const u=(a.__vccOpts||a)[e];u&&s.push($n(u,n,r,i,o))}else{let l=a();s.push(()=>l.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const c=Jw(u)?u.default:u;i.components[o]=c;const d=(c.__vccOpts||c)[e];return d&&$n(d,n,r,i,o)()}))}}return s}function WE(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Vd(t){const e=be(Ca),n=be(_c),r=R(()=>e.resolve(Se(t.to))),s=R(()=>{const{matched:l}=r.value,{length:u}=l,c=l[u-1],h=n.matched;if(!c||!h.length)return-1;const d=h.findIndex(as.bind(null,c));if(d>-1)return d;const f=jd(l[u-2]);return u>1&&jd(c)===f&&h[h.length-1].path!==f?h.findIndex(as.bind(null,l[u-2])):d}),i=R(()=>s.value>-1&&YE(n.params,r.value.params)),o=R(()=>s.value>-1&&s.value===n.matched.length-1&&Gg(n.params,r.value.params));function a(l={}){return QE(l)?e[Se(t.replace)?"replace":"push"](Se(t.to)).catch(Zs):Promise.resolve()}return{route:r,href:R(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const GE=G({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Vd,setup(t,{slots:e}){const n=Pr(Vd(t)),{options:r}=be(Ca),s=R(()=>({[zd(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[zd(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Yt("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),XE=GE;function QE(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function YE(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Array.isArray(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function jd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const zd=(t,e,n)=>t!=null?t:e!=null?e:n,ZE=G({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const r=be(cu),s=R(()=>t.route||r.value),i=be(xd,0),o=R(()=>s.value.matched[i]);Ue(xd,i+1),Ue(Zw,o),Ue(cu,s);const a=k();return At(()=>[a.value,o.value,t.name],([l,u,c],[h,d,f])=>{u&&(u.instances[c]=l,d&&d!==u&&l&&l===h&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),l&&u&&(!d||!as(u,d)||!h)&&(u.enterCallbacks[c]||[]).forEach(p=>p(l))},{flush:"post"}),()=>{const l=s.value,u=o.value,c=u&&u.components[t.name],h=t.name;if(!c)return qd(n.default,{Component:c,route:l});const d=u.props[t.name],f=d?d===!0?l.params:typeof d=="function"?d(l):d:null,m=Yt(c,Pe({},f,e,{onVnodeUnmounted:y=>{y.component.isUnmounted&&(u.instances[h]=null)},ref:a}));return qd(n.default,{Component:m,route:l})||m}}});function qd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const JE=ZE;function eI(t){const e=CE(t.routes,t),n=t.parseQuery||HE,r=t.stringifyQuery||Ud,s=t.history,i=Us(),o=Us(),a=Us(),l=cg(Pn);let u=Pn;Gr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=yl.bind(null,E=>""+E),h=yl.bind(null,qE),d=yl.bind(null,Mo);function f(E,q){let B,W;return Qg(E)?(B=e.getRecordMatcher(E),W=q):W=E,e.addRoute(W,B)}function p(E){const q=e.getRecordMatcher(E);q&&e.removeRoute(q)}function m(){return e.getRoutes().map(E=>E.record)}function y(E){return!!e.getRecordMatcher(E)}function b(E,q){if(q=Pe({},q||l.value),typeof E=="string"){const ce=bl(n,E,q.path),g=e.resolve({path:ce.path},q),v=s.createHref(ce.fullPath);return Pe(ce,g,{params:d(g.params),hash:Mo(ce.hash),redirectedFrom:void 0,href:v})}let B;if("path"in E)B=Pe({},E,{path:bl(n,E.path,q.path).path});else{const ce=Pe({},E.params);for(const g in ce)ce[g]==null&&delete ce[g];B=Pe({},E,{params:h(E.params)}),q.params=h(q.params)}const W=e.resolve(B,q),xe=E.hash||"";W.params=c(d(W.params));const Le=nE(r,Pe({},E,{hash:VE(xe),path:W.path})),fe=s.createHref(Le);return Pe({fullPath:Le,hash:xe,query:r===Ud?KE(E.query):E.query||{}},W,{redirectedFrom:void 0,href:fe})}function w(E){return typeof E=="string"?bl(n,E,l.value.path):Pe({},E)}function x(E,q){if(u!==E)return ls(8,{from:q,to:E})}function F(E){return S(E)}function j(E){return F(Pe(w(E),{replace:!0}))}function P(E){const q=E.matched[E.matched.length-1];if(q&&q.redirect){const{redirect:B}=q;let W=typeof B=="function"?B(E):B;return typeof W=="string"&&(W=W.includes("?")||W.includes("#")?W=w(W):{path:W},W.params={}),Pe({query:E.query,hash:E.hash,params:E.params},W)}}function S(E,q){const B=u=b(E),W=l.value,xe=E.state,Le=E.force,fe=E.replace===!0,ce=P(B);if(ce)return S(Pe(w(ce),{state:xe,force:Le,replace:fe}),q||B);const g=B;g.redirectedFrom=q;let v;return!Le&&rE(r,W,B)&&(v=ls(16,{to:g,from:W}),$r(W,W,!0,!1)),(v?Promise.resolve(v):J(g,W)).catch(_=>Nn(_)?Nn(_,2)?_:Rt(_):Te(_,g,W)).then(_=>{if(_){if(Nn(_,2))return S(Pe(w(_.to),{state:xe,force:Le,replace:fe}),q||g)}else _=De(g,W,!0,fe,xe);return pe(g,W,_),_})}function ae(E,q){const B=x(E,q);return B?Promise.reject(B):Promise.resolve()}function J(E,q){let B;const[W,xe,Le]=tI(E,q);B=_l(W.reverse(),"beforeRouteLeave",E,q);for(const ce of W)ce.leaveGuards.forEach(g=>{B.push($n(g,E,q))});const fe=ae.bind(null,E,q);return B.push(fe),jr(B).then(()=>{B=[];for(const ce of i.list())B.push($n(ce,E,q));return B.push(fe),jr(B)}).then(()=>{B=_l(xe,"beforeRouteUpdate",E,q);for(const ce of xe)ce.updateGuards.forEach(g=>{B.push($n(g,E,q))});return B.push(fe),jr(B)}).then(()=>{B=[];for(const ce of E.matched)if(ce.beforeEnter&&!q.matched.includes(ce))if(Array.isArray(ce.beforeEnter))for(const g of ce.beforeEnter)B.push($n(g,E,q));else B.push($n(ce.beforeEnter,E,q));return B.push(fe),jr(B)}).then(()=>(E.matched.forEach(ce=>ce.enterCallbacks={}),B=_l(Le,"beforeRouteEnter",E,q),B.push(fe),jr(B))).then(()=>{B=[];for(const ce of o.list())B.push($n(ce,E,q));return B.push(fe),jr(B)}).catch(ce=>Nn(ce,8)?ce:Promise.reject(ce))}function pe(E,q,B){for(const W of a.list())W(E,q,B)}function De(E,q,B,W,xe){const Le=x(E,q);if(Le)return Le;const fe=q===Pn,ce=Gr?history.state:{};B&&(W||fe?s.replace(E.fullPath,Pe({scroll:fe&&ce&&ce.scroll},xe)):s.push(E.fullPath,xe)),l.value=E,$r(E,q,B,fe),Rt()}let H;function Ie(){H=s.listen((E,q,B)=>{const W=b(E),xe=P(W);if(xe){S(Pe(xe,{replace:!0}),W).catch(Zs);return}u=W;const Le=l.value;Gr&&hE(Nd(Le.fullPath,B.delta),ka()),J(W,Le).catch(fe=>Nn(fe,12)?fe:Nn(fe,2)?(S(fe.to,W).then(ce=>{Nn(ce,20)&&!B.delta&&B.type===gi.pop&&s.go(-1,!1)}).catch(Zs),Promise.reject()):(B.delta&&s.go(-B.delta,!1),Te(fe,W,Le))).then(fe=>{fe=fe||De(W,Le,!1),fe&&(B.delta?s.go(-B.delta,!1):B.type===gi.pop&&Nn(fe,20)&&s.go(-1,!1)),pe(W,Le,fe)}).catch(Zs)})}let Ae=Us(),en=Us(),Ve;function Te(E,q,B){Rt(E);const W=en.list();return W.length?W.forEach(xe=>xe(E,q,B)):console.error(E),Promise.reject(E)}function Re(){return Ve&&l.value!==Pn?Promise.resolve():new Promise((E,q)=>{Ae.add([E,q])})}function Rt(E){return Ve||(Ve=!E,Ie(),Ae.list().forEach(([q,B])=>E?B(E):q()),Ae.reset()),E}function $r(E,q,B,W){const{scrollBehavior:xe}=t;if(!Gr||!xe)return Promise.resolve();const Le=!B&&dE(Nd(E.fullPath,0))||(W||!B)&&history.state&&history.state.scroll||null;return Ee().then(()=>xe(E,q,Le)).then(fe=>fe&&cE(fe)).catch(fe=>Te(fe,E,q))}const fn=E=>s.go(E);let tn;const $t=new Set;return{currentRoute:l,addRoute:f,removeRoute:p,hasRoute:y,getRoutes:m,resolve:b,options:t,push:F,replace:j,go:fn,back:()=>fn(-1),forward:()=>fn(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:en.add,isReady:Re,install(E){const q=this;E.component("RouterLink",XE),E.component("RouterView",JE),E.config.globalProperties.$router=q,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>Se(l)}),Gr&&!tn&&l.value===Pn&&(tn=!0,F(s.location).catch(xe=>{}));const B={};for(const xe in Pn)B[xe]=R(()=>l.value[xe]);E.provide(Ca,q),E.provide(_c,Pr(B)),E.provide(cu,l);const W=E.unmount;$t.add(E),E.unmount=function(){$t.delete(E),$t.size<1&&(u=Pn,H&&H(),l.value=Pn,tn=!1,Ve=!1),W()}}}}function jr(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function tI(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>as(u,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(u=>as(u,l))||s.push(l))}return[n,r,s]}function sm(){return be(Ca)}function nI(){return be(_c)}var Zn=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n};const rI={},sI={class:"container mx-auto"};function iI(t,e){const n=mc("router-view");return Ce(),tt("div",sI,[he(n)])}var oI=Zn(rI,[["render",iI]]);function im(t){return C0()?(k0(t),!0):!1}const om=typeof window!="undefined",aI=t=>typeof t=="string",wl=()=>{};function lI(t,e){function n(...r){t(()=>e.apply(this,r),{fn:e,thisArg:this,args:r})}return n}const am=t=>t();function uI(t=am){const e=k(!0);function n(){e.value=!1}function r(){e.value=!0}return{isActive:e,pause:n,resume:r,eventFilter:(...i)=>{e.value&&t(...i)}}}function cI(t,e=!0){As()?Sg(t):e?t():Ee(t)}function hI(t,e=!0){As()?He(t):e?t():Ee(t)}function dI(t=!1){if(Be(t))return e=>(t.value=typeof e=="boolean"?e:!t.value,t.value);{const e=k(t);return[e,r=>(e.value=typeof r=="boolean"?r:!e.value,e.value)]}}var Hd=Object.getOwnPropertySymbols,fI=Object.prototype.hasOwnProperty,pI=Object.prototype.propertyIsEnumerable,gI=(t,e)=>{var n={};for(var r in t)fI.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&Hd)for(var r of Hd(t))e.indexOf(r)<0&&pI.call(t,r)&&(n[r]=t[r]);return n};function mI(t,e,n={}){const r=n,{eventFilter:s=am}=r,i=gI(r,["eventFilter"]);return At(t,lI(s,e),i)}var vI=Object.defineProperty,yI=Object.defineProperties,bI=Object.getOwnPropertyDescriptors,Fo=Object.getOwnPropertySymbols,lm=Object.prototype.hasOwnProperty,um=Object.prototype.propertyIsEnumerable,Kd=(t,e,n)=>e in t?vI(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,_I=(t,e)=>{for(var n in e||(e={}))lm.call(e,n)&&Kd(t,n,e[n]);if(Fo)for(var n of Fo(e))um.call(e,n)&&Kd(t,n,e[n]);return t},wI=(t,e)=>yI(t,bI(e)),EI=(t,e)=>{var n={};for(var r in t)lm.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&Fo)for(var r of Fo(t))e.indexOf(r)<0&&um.call(t,r)&&(n[r]=t[r]);return n};function II(t,e,n={}){const r=n,{eventFilter:s}=r,i=EI(r,["eventFilter"]),{eventFilter:o,pause:a,resume:l,isActive:u}=uI(s);return{stop:mI(t,e,wI(_I({},i),{eventFilter:o})),pause:a,resume:l,isActive:u}}function TI(t){var e;const n=Se(t);return(e=n==null?void 0:n.$el)!=null?e:n}const us=om?window:void 0;function AI(...t){let e,n,r,s;if(aI(t[0])?([n,r,s]=t,e=us):[e,n,r,s]=t,!e)return wl;let i=wl;const o=At(()=>TI(e),l=>{i(),l&&(l.addEventListener(n,r,s),i=()=>{l.removeEventListener(n,r,s),i=wl})},{immediate:!0,flush:"post"}),a=()=>{o(),i()};return im(a),a}function SI(t,e={}){const{window:n=us}=e;let r;const s=k(!1),i=()=>{!n||(r||(r=n.matchMedia(t)),s.value=r.matches)};return cI(()=>{i(),r&&("addEventListener"in r?r.addEventListener("change",i):r.addListener(i),im(()=>{"removeEventListener"in r?r.removeEventListener("change",i):r.removeListener(i)}))}),s}const fu=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},pu="__vueuse_ssr_handlers__";fu[pu]=fu[pu]||{};const CI=fu[pu];function cm(t,e){return CI[t]||e}function kI(t){return t==null?"any":t instanceof Set?"set":t instanceof Map?"map":t instanceof Date?"date":typeof t=="boolean"?"boolean":typeof t=="string"?"string":typeof t=="object"||Array.isArray(t)?"object":Number.isNaN(t)?"any":"number"}const DI={boolean:{read:t=>t==="true",write:t=>String(t)},object:{read:t=>JSON.parse(t),write:t=>JSON.stringify(t)},number:{read:t=>Number.parseFloat(t),write:t=>String(t)},any:{read:t=>t,write:t=>String(t)},string:{read:t=>t,write:t=>String(t)},map:{read:t=>new Map(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t.entries()))},set:{read:t=>new Set(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t))},date:{read:t=>new Date(t),write:t=>t.toISOString()}};function RI(t,e,n,r={}){var s;const{flush:i="pre",deep:o=!0,listenToStorageChanges:a=!0,writeDefaults:l=!0,shallow:u,window:c=us,eventFilter:h,onError:d=P=>{console.error(P)}}=r,f=(u?cg:k)(e);if(!n)try{n=cm("getDefaultStorage",()=>{var P;return(P=us)==null?void 0:P.localStorage})()}catch(P){d(P)}if(!n)return f;const p=Se(e),m=kI(p),y=(s=r.serializer)!=null?s:DI[m],{pause:b,resume:w}=II(f,()=>x(f.value),{flush:i,deep:o,eventFilter:h});return c&&a&&AI(c,"storage",j),j(),f;function x(P){try{P==null?n.removeItem(t):n.setItem(t,y.write(P))}catch(S){d(S)}}function F(P){if(!(P&&P.key!==t)){b();try{const S=P?P.newValue:n.getItem(t);return S==null?(l&&p!==null&&n.setItem(t,y.write(p)),p):typeof S!="string"?S:y.read(S)}catch(S){d(S)}finally{w()}}}function j(P){P&&P.key!==t||(f.value=F(P))}}function hm(t){return SI("(prefers-color-scheme: dark)",t)}var xI=Object.defineProperty,Wd=Object.getOwnPropertySymbols,OI=Object.prototype.hasOwnProperty,PI=Object.prototype.propertyIsEnumerable,Gd=(t,e,n)=>e in t?xI(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,NI=(t,e)=>{for(var n in e||(e={}))OI.call(e,n)&&Gd(t,n,e[n]);if(Wd)for(var n of Wd(e))PI.call(e,n)&&Gd(t,n,e[n]);return t};function LI(t={}){const{selector:e="html",attribute:n="class",window:r=us,storage:s,storageKey:i="vueuse-color-scheme",listenToStorageChanges:o=!0,storageRef:a}=t,l=NI({auto:"",light:"light",dark:"dark"},t.modes||{}),u=hm({window:r}),c=R(()=>u.value?"dark":"light"),h=a||(i==null?k("auto"):RI(i,"auto",s,{window:r,listenToStorageChanges:o})),d=R({get(){return h.value==="auto"?c.value:h.value},set(y){h.value=y}}),f=cm("updateHTMLAttrs",(y,b,w)=>{const x=r==null?void 0:r.document.querySelector(y);if(!!x)if(b==="class"){const F=w.split(/\s/g);Object.values(l).flatMap(j=>(j||"").split(/\s/g)).filter(Boolean).forEach(j=>{F.includes(j)?x.classList.add(j):x.classList.remove(j)})}else x.setAttribute(b,w)});function p(y){var b;f(e,n,(b=l[y])!=null?b:y)}function m(y){t.onChanged?t.onChanged(y,p):p(y)}return At(d,m,{flush:"post",immediate:!0}),hI(()=>m(d.value)),d}var MI=Object.defineProperty,FI=Object.defineProperties,BI=Object.getOwnPropertyDescriptors,Xd=Object.getOwnPropertySymbols,$I=Object.prototype.hasOwnProperty,UI=Object.prototype.propertyIsEnumerable,Qd=(t,e,n)=>e in t?MI(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,VI=(t,e)=>{for(var n in e||(e={}))$I.call(e,n)&&Qd(t,n,e[n]);if(Xd)for(var n of Xd(e))UI.call(e,n)&&Qd(t,n,e[n]);return t},jI=(t,e)=>FI(t,BI(e));function zI(t={}){const{valueDark:e="dark",valueLight:n="",window:r=us}=t,s=LI(jI(VI({},t),{onChanged:(a,l)=>{var u;t.onChanged?(u=t.onChanged)==null||u.call(t,a==="dark"):l(a)},modes:{dark:e,light:n}})),i=hm({window:r});return R({get(){return s.value==="dark"},set(a){a===i.value?s.value="auto":s.value=a?"dark":"light"}})}var Yd,Zd;om&&(window==null?void 0:window.navigator)&&((Yd=window==null?void 0:window.navigator)==null?void 0:Yd.platform)&&/iP(ad|hone|od)/.test((Zd=window==null?void 0:window.navigator)==null?void 0:Zd.platform);function qI(t,e,n,r={}){var s;const{passive:i=!1,eventName:o,deep:a=!1}=r,l=As(),u=n||(l==null?void 0:l.emit)||((s=l==null?void 0:l.$emit)==null?void 0:s.bind(l));let c=o;if(e||(e="modelValue"),c=o||c||`update:${e}`,i){const h=k(t[e]);return At(()=>t[e],d=>h.value=d),At(h,d=>{(d!==t[e]||a)&&u(c,d)},{deep:a}),h}else return R({get(){return t[e]},set(h){u(c,h)}})}var HI=!1;/*!
  * pinia v2.0.13
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let dm;const Da=t=>dm=t,fm=Symbol();function gu(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var ei;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(ei||(ei={}));function KI(){const t=Gp(!0),e=t.run(()=>k({}));let n=[],r=[];const s=ss({install(i){Da(s),s._a=i,i.provide(fm,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!HI?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const pm=()=>{};function Jd(t,e,n,r=pm){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&As()&&it(s),s}function zr(t,...e){t.slice().forEach(n=>{n(...e)})}function mu(t,e){for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];gu(s)&&gu(r)&&t.hasOwnProperty(n)&&!Be(r)&&!En(r)?t[n]=mu(s,r):t[n]=r}return t}const WI=Symbol();function GI(t){return!gu(t)||!t.hasOwnProperty(WI)}const{assign:pn}=Object;function XI(t){return!!(Be(t)&&t.effect)}function QI(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let l;function u(){a||(n.state.value[t]=s?s():{});const c=r_(n.state.value[t]);return pn(c,i,Object.keys(o||{}).reduce((h,d)=>(h[d]=ss(R(()=>{Da(n);const f=n._s.get(t);return o[d].call(f,f)})),h),{}))}return l=gm(t,u,e,n),l.$reset=function(){const h=s?s():{};this.$patch(d=>{pn(d,h)})},l}function gm(t,e,n={},r,s){let i;const o=n.state,a=pn({actions:{}},n),l={deep:!0};let u,c,h=ss([]),d=ss([]),f;const p=r.state.value[t];!o&&!p&&(r.state.value[t]={}),k({});function m(P){let S;u=c=!1,typeof P=="function"?(P(r.state.value[t]),S={type:ei.patchFunction,storeId:t,events:f}):(mu(r.state.value[t],P),S={type:ei.patchObject,payload:P,storeId:t,events:f}),Ee().then(()=>{u=!0}),c=!0,zr(h,S,r.state.value[t])}const y=pm;function b(){i.stop(),h=[],d=[],r._s.delete(t)}function w(P,S){return function(){Da(r);const ae=Array.from(arguments),J=[],pe=[];function De(Ae){J.push(Ae)}function H(Ae){pe.push(Ae)}zr(d,{args:ae,name:P,store:F,after:De,onError:H});let Ie;try{Ie=S.apply(this&&this.$id===t?this:F,ae)}catch(Ae){throw zr(pe,Ae),Ae}return Ie instanceof Promise?Ie.then(Ae=>(zr(J,Ae),Ae)).catch(Ae=>(zr(pe,Ae),Promise.reject(Ae))):(zr(J,Ie),Ie)}}const x={_p:r,$id:t,$onAction:Jd.bind(null,d),$patch:m,$reset:y,$subscribe(P,S={}){const ae=Jd(h,P,S.detached,()=>J()),J=i.run(()=>At(()=>r.state.value[t],pe=>{(S.flush==="sync"?c:u)&&P({storeId:t,type:ei.direct,events:f},pe)},pn({},l,S)));return ae},$dispose:b},F=Pr(pn({},x));r._s.set(t,F);const j=r._e.run(()=>(i=Gp(),i.run(()=>e())));for(const P in j){const S=j[P];if(Be(S)&&!XI(S)||En(S))o||(p&&GI(S)&&(Be(S)?S.value=p[P]:mu(S,p[P])),r.state.value[t][P]=S);else if(typeof S=="function"){const ae=w(P,S);j[P]=ae,a.actions[P]=S}}return pn(F,j),pn(ie(F),j),Object.defineProperty(F,"$state",{get:()=>r.state.value[t],set:P=>{m(S=>{pn(S,P)})}}),r._p.forEach(P=>{pn(F,i.run(()=>P({store:F,app:r._a,pinia:r,options:a})))}),p&&o&&n.hydrate&&n.hydrate(F.$state,p),u=!0,c=!0,F}function Ec(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,l){const u=As();return a=a||u&&be(fm),a&&Da(a),a=dm,a._s.has(r)||(i?gm(r,e,s,a):QI(r,s,a)),a._s.get(r)}return o.$id=r,o}function mm(t){{t=ie(t);const e={};for(const n in t){const r=t[n];(Be(r)||En(r))&&(e[n]=fg(t,n))}return e}}/**
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
 */const vm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},YI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},ym={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,c=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;l||(f=64,o||(d=64)),r.push(n[c],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(vm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):YI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||h==null)throw Error();const d=i<<2|a>>4;if(r.push(d),u!==64){const f=a<<4&240|u>>2;if(r.push(f),h!==64){const p=u<<6&192|h;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},ZI=function(t){const e=vm(t);return ym.encodeByteArray(e,!0)},bm=function(t){return ZI(t).replace(/\./g,"")},JI=function(t){try{return ym.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */class eT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function nt(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _m(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(nt())}function Ic(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function wm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function tT(){return nt().indexOf("Electron/")>=0}function Em(){const t=nt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function nT(){return nt().indexOf("MSAppHost/")>=0}function Im(){return typeof indexedDB=="object"}function Tm(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function rT(){return!(typeof navigator=="undefined"||!navigator.cookieEnabled)}/**
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
 */const sT="FirebaseError";class kn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=sT,Object.setPrototypeOf(this,kn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Nr.prototype.create)}}class Nr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?iT(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new kn(s,a,r)}}function iT(t,e){return t.replace(oT,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const oT=/\{\$([^}]+)}/g;function aT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function mi(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(ef(i)&&ef(o)){if(!mi(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ef(t){return t!==null&&typeof t=="object"}/**
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
 */function Pi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function lT(t,e){const n=new uT(t,e);return n.subscribe.bind(n)}class uT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");cT(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=El),s.error===void 0&&(s.error=El),s.complete===void 0&&(s.complete=El);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function cT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function El(){}/**
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
 */const hT=1e3,dT=2,fT=4*60*60*1e3,pT=.5;function tf(t,e=hT,n=dT){const r=e*Math.pow(n,t),s=Math.round(pT*r*(Math.random()-.5)*2);return Math.min(fT,r+s)}/**
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
 */function Ft(t){return t&&t._delegate?t._delegate:t}/**
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
 */function Hs(t,e){return new Promise((n,r)=>{t.onsuccess=s=>{n(s.target.result)},t.onerror=s=>{var i;r(`${e}: ${(i=s.target.error)===null||i===void 0?void 0:i.message}`)}})}class nf{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,n="readonly"){return new Am(this._db.transaction.call(this._db,e,n))}createObjectStore(e,n){return new Sm(this._db.createObjectStore(e,n))}close(){this._db.close()}}class Am{constructor(e){this._transaction=e,this.complete=new Promise((n,r)=>{this._transaction.oncomplete=function(){n()},this._transaction.onerror=()=>{r(this._transaction.error)},this._transaction.onabort=()=>{r(this._transaction.error)}})}objectStore(e){return new Sm(this._transaction.objectStore(e))}}class Sm{constructor(e){this._store=e}index(e){return new rf(this._store.index(e))}createIndex(e,n,r){return new rf(this._store.createIndex(e,n,r))}get(e){const n=this._store.get(e);return Hs(n,"Error reading from IndexedDB")}put(e,n){const r=this._store.put(e,n);return Hs(r,"Error writing to IndexedDB")}delete(e){const n=this._store.delete(e);return Hs(n,"Error deleting from IndexedDB")}clear(){const e=this._store.clear();return Hs(e,"Error clearing IndexedDB object store")}}class rf{constructor(e){this._index=e}get(e){const n=this._index.get(e);return Hs(n,"Error reading from IndexedDB")}}function Cm(t,e,n){return new Promise((r,s)=>{try{const i=indexedDB.open(t,e);i.onsuccess=o=>{r(new nf(o.target.result))},i.onerror=o=>{var a;s(`Error opening indexedDB: ${(a=o.target.error)===null||a===void 0?void 0:a.message}`)},i.onupgradeneeded=o=>{n(new nf(i.result),o.oldVersion,o.newVersion,new Am(i.transaction))}}catch(i){s(`Error opening indexedDB: ${i.message}`)}})}class Jt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ar="[DEFAULT]";/**
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
 */class gT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new eT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(vT(e))try{this.getOrInitializeService({instanceIdentifier:ar})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=ar){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ar){return this.instances.has(e)}getOptions(e=ar){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:mT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ar){return this.component?this.component.multipleInstances?e:ar:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function mT(t){return t===ar?void 0:t}function vT(t){return t.instantiationMode==="EAGER"}/**
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
 */class yT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new gT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var _e;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(_e||(_e={}));const bT={debug:_e.DEBUG,verbose:_e.VERBOSE,info:_e.INFO,warn:_e.WARN,error:_e.ERROR,silent:_e.SILENT},_T=_e.INFO,wT={[_e.DEBUG]:"log",[_e.VERBOSE]:"log",[_e.INFO]:"info",[_e.WARN]:"warn",[_e.ERROR]:"error"},ET=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=wT[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ra{constructor(e){this.name=e,this._logLevel=_T,this._logHandler=ET,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in _e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?bT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,_e.DEBUG,...e),this._logHandler(this,_e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,_e.VERBOSE,...e),this._logHandler(this,_e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,_e.INFO,...e),this._logHandler(this,_e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,_e.WARN,...e),this._logHandler(this,_e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,_e.ERROR,...e),this._logHandler(this,_e.ERROR,...e)}}/**
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
 */class IT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(TT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function TT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vu="@firebase/app",sf="0.7.21";/**
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
 */const Tc=new Ra("@firebase/app"),AT="@firebase/app-compat",ST="@firebase/analytics-compat",CT="@firebase/analytics",kT="@firebase/app-check-compat",DT="@firebase/app-check",RT="@firebase/auth",xT="@firebase/auth-compat",OT="@firebase/database",PT="@firebase/database-compat",NT="@firebase/functions",LT="@firebase/functions-compat",MT="@firebase/installations",FT="@firebase/installations-compat",BT="@firebase/messaging",$T="@firebase/messaging-compat",UT="@firebase/performance",VT="@firebase/performance-compat",jT="@firebase/remote-config",zT="@firebase/remote-config-compat",qT="@firebase/storage",HT="@firebase/storage-compat",KT="@firebase/firestore",WT="@firebase/firestore-compat",GT="firebase",XT="9.6.11";/**
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
 */const km="[DEFAULT]",QT={[vu]:"fire-core",[AT]:"fire-core-compat",[CT]:"fire-analytics",[ST]:"fire-analytics-compat",[DT]:"fire-app-check",[kT]:"fire-app-check-compat",[RT]:"fire-auth",[xT]:"fire-auth-compat",[OT]:"fire-rtdb",[PT]:"fire-rtdb-compat",[NT]:"fire-fn",[LT]:"fire-fn-compat",[MT]:"fire-iid",[FT]:"fire-iid-compat",[BT]:"fire-fcm",[$T]:"fire-fcm-compat",[UT]:"fire-perf",[VT]:"fire-perf-compat",[jT]:"fire-rc",[zT]:"fire-rc-compat",[qT]:"fire-gcs",[HT]:"fire-gcs-compat",[KT]:"fire-fst",[WT]:"fire-fst-compat","fire-js":"fire-js",[GT]:"fire-js-all"};/**
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
 */const Bo=new Map,yu=new Map;function YT(t,e){try{t.container.addComponent(e)}catch(n){Tc.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function cn(t){const e=t.name;if(yu.has(e))return Tc.debug(`There were multiple attempts to register component ${e}.`),!1;yu.set(e,t);for(const n of Bo.values())YT(n,t);return!0}function Lr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const ZT={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Er=new Nr("app","Firebase",ZT);/**
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
 */class JT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Jt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Er.create("app-deleted",{appName:this._name})}}/**
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
 */const Ni=XT;function eA(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:km,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw Er.create("bad-app-name",{appName:String(r)});const s=Bo.get(r);if(s){if(mi(t,s.options)&&mi(n,s.config))return s;throw Er.create("duplicate-app",{appName:r})}const i=new yT(r);for(const a of yu.values())i.addComponent(a);const o=new JT(t,n,i);return Bo.set(r,o),o}function Ac(t=km){const e=Bo.get(t);if(!e)throw Er.create("no-app",{appName:t});return e}function zt(t,e,n){var r;let s=(r=QT[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Tc.warn(a.join(" "));return}cn(new Jt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const tA="firebase-heartbeat-database",nA=1,vi="firebase-heartbeat-store";let Il=null;function Dm(){return Il||(Il=Cm(tA,nA,(t,e)=>{switch(e){case 0:t.createObjectStore(vi)}}).catch(t=>{throw Er.create("storage-open",{originalErrorMessage:t.message})})),Il}async function rA(t){try{return(await Dm()).transaction(vi).objectStore(vi).get(Rm(t))}catch(e){throw Er.create("storage-get",{originalErrorMessage:e.message})}}async function of(t,e){try{const r=(await Dm()).transaction(vi,"readwrite");return await r.objectStore(vi).put(e,Rm(t)),r.complete}catch(n){throw Er.create("storage-set",{originalErrorMessage:n.message})}}function Rm(t){return`${t.name}!${t.options.appId}`}/**
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
 */const sA=1024,iA=30*24*60*60*1e3;class oA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new lA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=af();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=iA}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=af(),{heartbeatsToSend:n,unsentEntries:r}=aA(this._heartbeatsCache.heartbeats),s=bm(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function af(){return new Date().toISOString().substring(0,10)}function aA(t,e=sA){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),lf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),lf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class lA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Im()?Tm().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await rA(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return of(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return of(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function lf(t){return bm(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function uA(t){cn(new Jt("platform-logger",e=>new IT(e),"PRIVATE")),cn(new Jt("heartbeat",e=>new oA(e),"PRIVATE")),zt(vu,sf,t),zt(vu,sf,"esm2017"),zt("fire-js","")}uA("");/*! *****************************************************************************
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
***************************************************************************** */function Sc(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function xm(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const cA=xm,Om=new Nr("auth","Firebase",xm());/**
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
 */const uf=new Ra("@firebase/auth");function _o(t,...e){uf.logLevel<=_e.ERROR&&uf.error(`Auth (${Ni}): ${t}`,...e)}/**
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
 */function hn(t,...e){throw Cc(t,...e)}function on(t,...e){return Cc(t,...e)}function Pm(t,e,n){const r=Object.assign(Object.assign({},cA()),{[e]:n});return new Nr("auth","Firebase",r).create(e,{appName:t.name})}function hA(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&hn(t,"argument-error"),Pm(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Cc(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Om.create(t,...e)}function re(t,e,...n){if(!t)throw Cc(e,...n)}function yn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw _o(e),new Error(e)}function An(t,e){t||yn(e)}/**
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
 */const cf=new Map;function bn(t){An(t instanceof Function,"Expected a class definition");let e=cf.get(t);return e?(An(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,cf.set(t,e),e)}/**
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
 */function dA(t,e){const n=Lr(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(mi(i,e!=null?e:{}))return s;hn(s,"already-initialized")}return n.initialize({options:e})}function fA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(bn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function bu(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function pA(){return hf()==="http:"||hf()==="https:"}function hf(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function gA(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(pA()||Ic()||"connection"in navigator)?navigator.onLine:!0}function mA(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Li{constructor(e,n){this.shortDelay=e,this.longDelay=n,An(n>e,"Short delay should be less than long delay!"),this.isMobile=_m()||wm()}get(){return gA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function kc(t,e){An(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Nm{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;yn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;yn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;yn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const vA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const yA=new Li(3e4,6e4);function bA(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function xa(t,e,n,r,s={}){return Lm(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Pi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Nm.fetch()(Mm(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function Lm(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},vA),e);try{const s=new wA(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Tl(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Tl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Tl(t,"email-already-in-use",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Pm(t,c,u);hn(t,c)}}catch(s){if(s instanceof kn)throw s;hn(t,"network-request-failed")}}async function _A(t,e,n,r,s={}){const i=await xa(t,e,n,r,s);return"mfaPendingCredential"in i&&hn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Mm(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?kc(t.config,s):`${t.config.apiScheme}://${s}`}class wA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(on(this.auth,"network-request-failed")),yA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Tl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=on(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function EA(t,e){return xa(t,"POST","/v1/accounts:delete",e)}async function IA(t,e){return xa(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ti(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function TA(t,e=!1){const n=Ft(t),r=await n.getIdToken(e),s=Dc(r);re(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ti(Al(s.auth_time)),issuedAtTime:ti(Al(s.iat)),expirationTime:ti(Al(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Al(t){return Number(t)*1e3}function Dc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return _o("JWT malformed, contained fewer than 3 sections"),null;try{const s=JI(n);return s?JSON.parse(s):(_o("Failed to decode base64 JWT payload"),null)}catch(s){return _o("Caught error parsing JWT payload as JSON",s),null}}function AA(t){const e=Dc(t);return re(e,"internal-error"),re(typeof e.exp!="undefined","internal-error"),re(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function yi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof kn&&SA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function SA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class CA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Fm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ti(this.lastLoginAt),this.creationTime=ti(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function $o(t){var e;const n=t.auth,r=await t.getIdToken(),s=await yi(t,IA(n,{idToken:r}));re(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?RA(i.providerUserInfo):[],a=DA(t.providerData,o),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Fm(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function kA(t){const e=Ft(t);await $o(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function DA(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function RA(t){return t.map(e=>{var{providerId:n}=e,r=Sc(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function xA(t,e){const n=await Lm(t,{},async()=>{const r=Pi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Mm(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Nm.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class bi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){re(e.idToken,"internal-error"),re(typeof e.idToken!="undefined","internal-error"),re(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):AA(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return re(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await xA(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new bi;return r&&(re(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(re(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(re(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new bi,this.toJSON())}_performRefresh(){return yn("not implemented")}}/**
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
 */function Ln(t,e){re(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class yr{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Sc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new CA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Fm(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await yi(this,this.stsTokenManager.getToken(this.auth,e));return re(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return TA(this,e)}reload(){return kA(this)}_assign(e){this!==e&&(re(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new yr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){re(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await $o(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await yi(this,EA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,f=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,m=(a=n.tenantId)!==null&&a!==void 0?a:void 0,y=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,b=(u=n.createdAt)!==null&&u!==void 0?u:void 0,w=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:x,emailVerified:F,isAnonymous:j,providerData:P,stsTokenManager:S}=n;re(x&&S,e,"internal-error");const ae=bi.fromJSON(this.name,S);re(typeof x=="string",e,"internal-error"),Ln(h,e.name),Ln(d,e.name),re(typeof F=="boolean",e,"internal-error"),re(typeof j=="boolean",e,"internal-error"),Ln(f,e.name),Ln(p,e.name),Ln(m,e.name),Ln(y,e.name),Ln(b,e.name),Ln(w,e.name);const J=new yr({uid:x,auth:e,email:d,emailVerified:F,displayName:h,isAnonymous:j,photoURL:p,phoneNumber:f,tenantId:m,stsTokenManager:ae,createdAt:b,lastLoginAt:w});return P&&Array.isArray(P)&&(J.providerData=P.map(pe=>Object.assign({},pe))),y&&(J._redirectEventId=y),J}static async _fromIdTokenResponse(e,n,r=!1){const s=new bi;s.updateFromServerResponse(n);const i=new yr({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await $o(i),i}}/**
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
 */class Bm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Bm.type="NONE";const df=Bm;/**
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
 */function wo(t,e,n){return`firebase:${t}:${e}:${n}`}class Jr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=wo(this.userKey,s.apiKey,i),this.fullPersistenceKey=wo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?yr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Jr(bn(df),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||bn(df);const o=wo(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=yr._fromJSON(e,c);u!==i&&(a=h),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Jr(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Jr(i,e,r))}}/**
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
 */function ff(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Vm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($m(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(zm(e))return"Blackberry";if(qm(e))return"Webos";if(Rc(e))return"Safari";if((e.includes("chrome/")||Um(e))&&!e.includes("edge/"))return"Chrome";if(jm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function $m(t=nt()){return/firefox\//i.test(t)}function Rc(t=nt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Um(t=nt()){return/crios\//i.test(t)}function Vm(t=nt()){return/iemobile/i.test(t)}function jm(t=nt()){return/android/i.test(t)}function zm(t=nt()){return/blackberry/i.test(t)}function qm(t=nt()){return/webos/i.test(t)}function Oa(t=nt()){return/iphone|ipad|ipod/i.test(t)}function OA(t=nt()){var e;return Oa(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function PA(){return Em()&&document.documentMode===10}function Hm(t=nt()){return Oa(t)||jm(t)||qm(t)||zm(t)||/windows phone/i.test(t)||Vm(t)}function NA(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Km(t,e=[]){let n;switch(t){case"Browser":n=ff(nt());break;case"Worker":n=`${ff(nt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ni}/${r}`}/**
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
 */class LA{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pf(this),this.idTokenSubscription=new pf(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Om,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=bn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Jr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,i=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!s||s===i)&&(o==null?void 0:o.user)&&(r=o.user)}return r?r._redirectEventId?(re(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await $o(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=mA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ft(e):null;return n&&re(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&re(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(bn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Nr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&bn(e)||this._popupRedirectResolver;re(n,this,"argument-error"),this.redirectPersistenceManager=await Jr.create(this,[bn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return re(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return re(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Km(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function xc(t){return Ft(t)}class pf{constructor(e){this.auth=e,this.observer=null,this.addObserver=lT(n=>this.observer=n)}get next(){return re(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class Wm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return yn("not implemented")}_getIdTokenResponse(e){return yn("not implemented")}_linkToIdToken(e,n){return yn("not implemented")}_getReauthenticationResolver(e){return yn("not implemented")}}/**
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
 */async function es(t,e){return _A(t,"POST","/v1/accounts:signInWithIdp",bA(t,e))}/**
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
 */const MA="http://localhost";class Ir extends Wm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ir(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):hn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Sc(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Ir(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return es(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,es(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,es(e,n)}buildRequest(){const e={requestUri:MA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Pi(n)}return e}}/**
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
 */class Oc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Mi extends Oc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Un extends Mi{constructor(){super("facebook.com")}static credential(e){return Ir._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Un.credential(e.oauthAccessToken)}catch{return null}}}Un.FACEBOOK_SIGN_IN_METHOD="facebook.com";Un.PROVIDER_ID="facebook.com";/**
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
 */class vn extends Mi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ir._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return vn.credential(n,r)}catch{return null}}}vn.GOOGLE_SIGN_IN_METHOD="google.com";vn.PROVIDER_ID="google.com";/**
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
 */class Vn extends Mi{constructor(){super("github.com")}static credential(e){return Ir._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vn.credential(e.oauthAccessToken)}catch{return null}}}Vn.GITHUB_SIGN_IN_METHOD="github.com";Vn.PROVIDER_ID="github.com";/**
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
 */class jn extends Mi{constructor(){super("twitter.com")}static credential(e,n){return Ir._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return jn.credential(n,r)}catch{return null}}}jn.TWITTER_SIGN_IN_METHOD="twitter.com";jn.PROVIDER_ID="twitter.com";/**
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
 */class cs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await yr._fromIdTokenResponse(e,r,s),o=gf(r);return new cs({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=gf(r);return new cs({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function gf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Uo extends kn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Uo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Uo(e,n,r,s)}}function Gm(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Uo._fromErrorAndOperation(t,i,e,r):i})}async function FA(t,e,n=!1){const r=await yi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return cs._forOperation(t,"link",r)}/**
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
 */async function BA(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await yi(t,Gm(r,s,e,t),n);re(i.idToken,r,"internal-error");const o=Dc(i.idToken);re(o,r,"internal-error");const{sub:a}=o;return re(t.uid===a,r,"user-mismatch"),cs._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&hn(r,"user-mismatch"),i}}/**
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
 */async function $A(t,e,n=!1){const r="signIn",s=await Gm(t,r,e),i=await cs._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function UA(t,e,n,r){return Ft(t).onAuthStateChanged(e,n,r)}const Vo="__sak";/**
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
 */class Xm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Vo,"1"),this.storage.removeItem(Vo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function VA(){const t=nt();return Rc(t)||Oa(t)}const jA=1e3,zA=10;class Qm extends Xm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=VA()&&NA(),this.fallbackToPolling=Hm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);PA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,zA):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},jA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Qm.type="LOCAL";const qA=Qm;/**
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
 */class Ym extends Xm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ym.type="SESSION";const Pc=Ym;/**
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
 */function HA(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Pa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Pa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),l=await HA(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Pa.receivers=[];/**
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
 */function Nc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class KA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const u=Nc("",20);s.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(c),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function an(){return window}function WA(t){an().location.href=t}/**
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
 */function Zm(){return typeof an().WorkerGlobalScope!="undefined"&&typeof an().importScripts=="function"}async function GA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function XA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function QA(){return Zm()?self:null}/**
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
 */const Jm="firebaseLocalStorageDb",YA=1,jo="firebaseLocalStorage",ev="fbase_key";class Fi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Na(t,e){return t.transaction([jo],e?"readwrite":"readonly").objectStore(jo)}function ZA(){const t=indexedDB.deleteDatabase(Jm);return new Fi(t).toPromise()}function _u(){const t=indexedDB.open(Jm,YA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(jo,{keyPath:ev})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(jo)?e(r):(r.close(),await ZA(),e(await _u()))})})}async function mf(t,e,n){const r=Na(t,!0).put({[ev]:e,value:n});return new Fi(r).toPromise()}async function JA(t,e){const n=Na(t,!1).get(e),r=await new Fi(n).toPromise();return r===void 0?null:r.value}function vf(t,e){const n=Na(t,!0).delete(e);return new Fi(n).toPromise()}const eS=800,tS=3;class tv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _u(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>tS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Zm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pa._getInstance(QA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await GA(),!this.activeServiceWorker)return;this.sender=new KA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||XA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await _u();return await mf(e,Vo,"1"),await vf(e,Vo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>mf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>JA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>vf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Na(s,!1).getAll();return new Fi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),eS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}tv.type="LOCAL";const nS=tv;/**
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
 */function rS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function sS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=on("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",rS().appendChild(r)})}function iS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Li(3e4,6e4);/**
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
 */function nv(t,e){return e?bn(e):(re(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Lc extends Wm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return es(e,this._buildIdpRequest())}_linkToIdToken(e,n){return es(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return es(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function oS(t){return $A(t.auth,new Lc(t),t.bypassAuthState)}function aS(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),BA(n,new Lc(t),t.bypassAuthState)}async function lS(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),FA(n,new Lc(t),t.bypassAuthState)}/**
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
 */class rv{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return oS;case"linkViaPopup":case"linkViaRedirect":return lS;case"reauthViaPopup":case"reauthViaRedirect":return aS;default:hn(this.auth,"internal-error")}}resolve(e){An(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){An(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const uS=new Li(2e3,1e4);async function cS(t,e,n){const r=xc(t);hA(t,e,Oc);const s=nv(r,n);return new hr(r,"signInViaPopup",e,s).executeNotNull()}class hr extends rv{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,hr.currentPopupAction&&hr.currentPopupAction.cancel(),hr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return re(e,this.auth,"internal-error"),e}async onExecution(){An(this.filter.length===1,"Popup operations only handle one event");const e=Nc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(on(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(on(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,hr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(on(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,uS.get())};e()}}hr.currentPopupAction=null;/**
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
 */const hS="pendingRedirect",Sl=new Map;class dS extends rv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Sl.get(this.auth._key());if(!e){try{const r=await fS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Sl.set(this.auth._key(),e)}return this.bypassAuthState||Sl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function fS(t,e){const n=gS(e),r=pS(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function pS(t){return bn(t._redirectPersistence)}function gS(t){return wo(hS,t.config.apiKey,t.name)}async function mS(t,e,n=!1){const r=xc(t),s=nv(r,e),o=await new dS(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const vS=10*60*1e3;class yS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!bS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!sv(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(on(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=vS&&this.cachedEventUids.clear(),this.cachedEventUids.has(yf(e))}saveEventToCache(e){this.cachedEventUids.add(yf(e)),this.lastProcessedEventTime=Date.now()}}function yf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function sv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function bS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return sv(t);default:return!1}}/**
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
 */async function _S(t,e={}){return xa(t,"GET","/v1/projects",e)}/**
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
 */const wS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ES=/^https?/;async function IS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await _S(t);for(const n of e)try{if(TS(n))return}catch{}hn(t,"unauthorized-domain")}function TS(t){const e=bu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!ES.test(n))return!1;if(wS.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const AS=new Li(3e4,6e4);function bf(){const t=an().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function SS(t){return new Promise((e,n)=>{var r,s,i;function o(){bf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{bf(),n(on(t,"network-request-failed"))},timeout:AS.get()})}if(!((s=(r=an().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=an().gapi)===null||i===void 0)&&i.load)o();else{const a=iS("iframefcb");return an()[a]=()=>{gapi.load?o():n(on(t,"network-request-failed"))},sS(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Eo=null,e})}let Eo=null;function CS(t){return Eo=Eo||SS(t),Eo}/**
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
 */const kS=new Li(5e3,15e3),DS="__/auth/iframe",RS="emulator/auth/iframe",xS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},OS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function PS(t){const e=t.config;re(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?kc(e,RS):`https://${t.config.authDomain}/${DS}`,r={apiKey:e.apiKey,appName:t.name,v:Ni},s=OS.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Pi(r).slice(1)}`}async function NS(t){const e=await CS(t),n=an().gapi;return re(n,t,"internal-error"),e.open({where:document.body,url:PS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:xS,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=on(t,"network-request-failed"),a=an().setTimeout(()=>{i(o)},kS.get());function l(){an().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const LS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},MS=500,FS=600,BS="_blank",$S="http://localhost";class _f{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function US(t,e,n,r=MS,s=FS){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},LS),{width:r.toString(),height:s.toString(),top:i,left:o}),u=nt().toLowerCase();n&&(a=Um(u)?BS:n),$m(u)&&(e=e||$S,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[f,p])=>`${d}${f}=${p},`,"");if(OA(u)&&a!=="_self")return VS(e||"",a),new _f(null);const h=window.open(e||"",a,c);re(h,t,"popup-blocked");try{h.focus()}catch{}return new _f(h)}function VS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const jS="__/auth/handler",zS="emulator/auth/handler";function wf(t,e,n,r,s,i){re(t.config.authDomain,t,"auth-domain-config-required"),re(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ni,eventId:s};if(e instanceof Oc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",aT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(i||{}))o[l]=u}if(e instanceof Mi){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${qS(t)}?${Pi(a).slice(1)}`}function qS({config:t}){return t.emulator?kc(t,zS):`https://${t.authDomain}/${jS}`}/**
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
 */const Cl="webStorageSupport";class HS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Pc,this._completeRedirectFn=mS}async _openPopup(e,n,r,s){var i;An((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=wf(e,n,r,bu(),s);return US(e,o,Nc())}async _openRedirect(e,n,r,s){return await this._originValidation(e),WA(wf(e,n,r,bu(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(An(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await NS(e),r=new yS(e);return n.register("authEvent",s=>(re(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Cl,{type:Cl},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Cl];o!==void 0&&n(!!o),hn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=IS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Hm()||Rc()||Oa()}}const KS=HS;var Ef="@firebase/auth",If="0.19.12";/**
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
 */class WS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){re(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function GS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function XS(t){cn(new Jt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,l)=>{re(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),re(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Km(t)},c=new LA(a,l,u);return fA(c,n),c})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),cn(new Jt("auth-internal",e=>{const n=xc(e.getProvider("auth").getImmediate());return(r=>new WS(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),zt(Ef,If,GS(t)),zt(Ef,If,"esm2017")}/**
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
 */function kl(t=Ac()){const e=Lr(t,"auth");return e.isInitialized()?e.getImmediate():dA(t,{popupRedirectResolver:KS,persistence:[nS,qA,Pc]})}XS("Browser");const _i=Ec("auth",()=>{const t=k(null),e=k(null),n=R(()=>t.value!==null);function r(a,l){var u,c,h;if(!a){t.value=null;return}a=a,t.value={userId:a.uid,profileImage:(u=a.photoURL)!=null?u:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbADKB5OER8mK9MCrkCBFJeXc2pZCGucLNxA&usqp=CAU",thumbnailImage:(c=a.photoURL)!=null?c:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbADKB5OER8mK9MCrkCBFJeXc2pZCGucLNxA&usqp=CAU",nickName:(h=a.displayName)!=null?h:"Anonymous"},l&&(e.value=l)}async function s(a,l){const u=kl();await u.setPersistence(Pc);const c=await cS(u,a);r(c.user,l)}async function i(){r(null),await kl().signOut(),localStorage.clear()}function o(a){return new Promise(l=>{const u=kl();UA(u,c=>{c&&r(c,a),l(c!==null)})})}return{user:t,provider:e,isAuthenticated:n,getPersistenceFirebaseUser:o,logout:i,loginWithFirebase:s}});function Xe(t,e,...n){if(t in e){let s=e[t];return typeof s=="function"?s(...n):s}let r=new Error(`Tried to handle "${t}" but there is no handler defined. Only defined handlers are: ${Object.keys(e).map(s=>`"${s}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,Xe),r}function oe(r){var s=r,{visible:t=!0,features:e=0}=s,n=Gt(s,["visible","features"]);var i;if(t||e&2&&n.props.static)return Dl(n);if(e&1){let o=(i=n.props.unmount)==null||i?0:1;return Xe(o,{[0](){return null},[1](){return Dl(mt($({},n),{props:mt($({},n.props),{hidden:!0,style:{display:"none"}})}))}})}return Dl(n)}function Dl({props:t,attrs:e,slots:n,slot:r,name:s}){var i;let u=Jn(t,["unmount","static"]),{as:o}=u,a=Gt(u,["as"]),l=(i=n.default)==null?void 0:i.call(n,r);if(o==="template"){if(Object.keys(a).length>0||Object.keys(e).length>0){let[c,...h]=l!=null?l:[];if(!QS(c)||h.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${s} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(a).concat(Object.keys(e)).map(d=>`  - ${d}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(d=>`  - ${d}`).join(`
`)].join(`
`));return Wn(c,a)}return Array.isArray(l)&&l.length===1?l[0]:l}return Yt(o,a,l)}function Jn(t,e=[]){let n=Object.assign({},t);for(let r of e)r in n&&delete n[r];return n}function QS(t){return t==null?!1:typeof t.type=="string"||typeof t.type=="object"||typeof t.type=="function"}var YS=0;function ZS(){return++YS}function ke(){return ZS()}function JS(t){throw new Error("Unexpected object: "+t)}function Mc(t,e){let n=e.resolveItems();if(n.length<=0)return null;let r=e.resolveActiveIndex(),s=r!=null?r:-1,i=(()=>{switch(t.focus){case 0:return n.findIndex(o=>!e.resolveDisabled(o));case 1:{let o=n.slice().reverse().findIndex((a,l,u)=>s!==-1&&u.length-l-1>=s?!1:!e.resolveDisabled(a));return o===-1?o:n.length-1-o}case 2:return n.findIndex((o,a)=>a<=s?!1:!e.resolveDisabled(o));case 3:{let o=n.slice().reverse().findIndex(a=>!e.resolveDisabled(a));return o===-1?o:n.length-1-o}case 4:return n.findIndex(o=>e.resolveId(o)===t.id);case 5:return null;default:JS(t)}})();return i===-1?r:i}function A(t){return t==null||t.value==null?null:"$el"in t.value?t.value.$el:t.value}function Ht(t,e,n){typeof window!="undefined"&&Ke(r=>{window.addEventListener(t,e,n),r(()=>{window.removeEventListener(t,e,n)})})}var iv=Symbol("Context");function e1(){return Dn()!==null}function Dn(){return be(iv,null)}function Cs(t){Ue(iv,t)}function Tf(t,e){if(t)return t;let n=e!=null?e:"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function Mr(t,e){let n=k(Tf(t.value.type,t.value.as));return He(()=>{n.value=Tf(t.value.type,t.value.as)}),Ke(()=>{var r;n.value||!A(e)||A(e)instanceof HTMLButtonElement&&!((r=A(e))!=null&&r.hasAttribute("type"))&&(n.value="button")}),n}function Fc({container:t,accept:e,walk:n,enabled:r}){Ke(()=>{let s=t.value;if(!s||r!==void 0&&!r.value)return;let i=Object.assign(a=>e(a),{acceptNode:e}),o=document.createTreeWalker(s,NodeFilter.SHOW_ELEMENT,i,!1);for(;o.nextNode();)n(o.currentNode)})}var ov=Symbol("ComboboxContext");function ks(t){let e=be(ov,null);if(e===null){let n=new Error(`<${t} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,ks),n}return e}G({name:"Combobox",emits:{"update:modelValue":t=>!0},props:{as:{type:[Object,String],default:"template"},disabled:{type:[Boolean],default:!1},modelValue:{type:[Object,String,Number,Boolean]}},setup(t,{slots:e,attrs:n,emit:r}){let s=k(1),i=k(null),o=k(null),a=k(null),l=k(null),u=k({static:!1,hold:!1}),c=k([]),h=k(null),d=R(()=>t.modelValue),f={comboboxState:s,value:d,inputRef:o,labelRef:i,buttonRef:a,optionsRef:l,disabled:R(()=>t.disabled),options:c,activeOptionIndex:h,inputPropsRef:k({displayValue:void 0}),optionsPropsRef:u,closeCombobox(){t.disabled||s.value!==1&&(s.value=1,h.value=null)},openCombobox(){t.disabled||s.value!==0&&(s.value=0)},goToOption(m,y){if(t.disabled||l.value&&!u.value.static&&s.value===1)return;let b=Mc(m===4?{focus:4,id:y}:{focus:m},{resolveItems:()=>c.value,resolveActiveIndex:()=>h.value,resolveId:w=>w.id,resolveDisabled:w=>w.dataRef.disabled});h.value!==b&&(h.value=b)},syncInputValue(){let m=f.value.value;if(!A(f.inputRef)||m===void 0)return;let y=f.inputPropsRef.value.displayValue;typeof y=="function"?f.inputRef.value.value=y(m):typeof m=="string"&&(f.inputRef.value.value=m)},selectOption(m){let y=c.value.find(w=>w.id===m);if(!y)return;let{dataRef:b}=y;r("update:modelValue",b.value),f.syncInputValue()},selectActiveOption(){if(h.value===null)return;let{dataRef:m}=c.value[h.value];r("update:modelValue",m.value),f.syncInputValue()},registerOption(m,y){var b,w;let x=h.value!==null?c.value[h.value]:null,F=Array.from((w=(b=l.value)==null?void 0:b.querySelectorAll('[id^="headlessui-combobox-option-"]'))!=null?w:[]).reduce((j,P,S)=>Object.assign(j,{[P.id]:S}),{});c.value=[...c.value,{id:m,dataRef:y}].sort((j,P)=>F[j.id]-F[P.id]),h.value=(()=>x===null?null:c.value.indexOf(x))()},unregisterOption(m){let y=c.value.slice(),b=h.value!==null?y[h.value]:null,w=y.findIndex(x=>x.id===m);w!==-1&&y.splice(w,1),c.value=y,h.value=(()=>w===h.value||b===null?null:y.indexOf(b))()}};Ht("mousedown",m=>{var y,b,w;let x=m.target;s.value===0&&(((y=A(o))==null?void 0:y.contains(x))||((b=A(a))==null?void 0:b.contains(x))||((w=A(l))==null?void 0:w.contains(x))||f.closeCombobox())}),At([f.value,f.inputRef],()=>f.syncInputValue(),{immediate:!0}),Ue(ov,f),Cs(R(()=>Xe(s.value,{[0]:0,[1]:1})));let p=R(()=>h.value===null?null:c.value[h.value].dataRef.value);return()=>{let m={open:s.value===0,disabled:t.disabled,activeIndex:h.value,activeOption:p.value};return oe({props:Jn(t,["modelValue","onUpdate:modelValue","disabled"]),slot:m,slots:e,attrs:n,name:"Combobox"})}}});G({name:"ComboboxLabel",props:{as:{type:[Object,String],default:"label"}},setup(t,{attrs:e,slots:n}){let r=ks("ComboboxLabel"),s=`headlessui-combobox-label-${ke()}`;function i(){var o;(o=A(r.inputRef))==null||o.focus({preventScroll:!0})}return()=>{let o={open:r.comboboxState.value===0,disabled:r.disabled.value},a={id:s,ref:r.labelRef,onClick:i};return oe({props:$($({},t),a),slot:o,attrs:e,slots:n,name:"ComboboxLabel"})}}});G({name:"ComboboxButton",props:{as:{type:[Object,String],default:"button"}},setup(t,{attrs:e,slots:n}){let r=ks("ComboboxButton"),s=`headlessui-combobox-button-${ke()}`;function i(l){r.disabled.value||(r.comboboxState.value===0?r.closeCombobox():(l.preventDefault(),r.openCombobox()),Ee(()=>{var u;return(u=A(r.inputRef))==null?void 0:u.focus({preventScroll:!0})}))}function o(l){switch(l.key){case"ArrowDown":l.preventDefault(),l.stopPropagation(),r.comboboxState.value===1&&(r.openCombobox(),Ee(()=>{r.value.value||r.goToOption(0)})),Ee(()=>{var u;return(u=r.inputRef.value)==null?void 0:u.focus({preventScroll:!0})});return;case"ArrowUp":l.preventDefault(),l.stopPropagation(),r.comboboxState.value===1&&(r.openCombobox(),Ee(()=>{r.value.value||r.goToOption(3)})),Ee(()=>{var u;return(u=r.inputRef.value)==null?void 0:u.focus({preventScroll:!0})});return;case"Escape":l.preventDefault(),r.optionsRef.value&&!r.optionsPropsRef.value.static&&l.stopPropagation(),r.closeCombobox(),Ee(()=>{var u;return(u=r.inputRef.value)==null?void 0:u.focus({preventScroll:!0})});return}}let a=Mr(R(()=>({as:t.as,type:e.type})),r.buttonRef);return()=>{var l,u;let c={open:r.comboboxState.value===0,disabled:r.disabled.value},h={ref:r.buttonRef,id:s,type:a.value,tabindex:"-1","aria-haspopup":!0,"aria-controls":(l=A(r.optionsRef))==null?void 0:l.id,"aria-expanded":r.disabled.value?void 0:r.comboboxState.value===0,"aria-labelledby":r.labelRef.value?[(u=A(r.labelRef))==null?void 0:u.id,s].join(" "):void 0,disabled:r.disabled.value===!0?!0:void 0,onKeydown:o,onClick:i};return oe({props:$($({},t),h),slot:c,attrs:e,slots:n,name:"ComboboxButton"})}}});G({name:"ComboboxInput",props:{as:{type:[Object,String],default:"input"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},displayValue:{type:Function}},emits:{change:t=>!0},setup(t,{emit:e,attrs:n,slots:r}){let s=ks("ComboboxInput"),i=`headlessui-combobox-input-${ke()}`;s.inputPropsRef=R(()=>t);function o(l){switch(l.key){case"Enter":l.preventDefault(),l.stopPropagation(),s.selectActiveOption(),s.closeCombobox();break;case"ArrowDown":return l.preventDefault(),l.stopPropagation(),Xe(s.comboboxState.value,{[0]:()=>s.goToOption(2),[1]:()=>{s.openCombobox(),Ee(()=>{s.value.value||s.goToOption(0)})}});case"ArrowUp":return l.preventDefault(),l.stopPropagation(),Xe(s.comboboxState.value,{[0]:()=>s.goToOption(1),[1]:()=>{s.openCombobox(),Ee(()=>{s.value.value||s.goToOption(3)})}});case"Home":case"PageUp":return l.preventDefault(),l.stopPropagation(),s.goToOption(0);case"End":case"PageDown":return l.preventDefault(),l.stopPropagation(),s.goToOption(3);case"Escape":l.preventDefault(),s.optionsRef.value&&!s.optionsPropsRef.value.static&&l.stopPropagation(),s.closeCombobox();break;case"Tab":s.selectActiveOption(),s.closeCombobox();break}}function a(l){s.openCombobox(),e("change",l)}return()=>{var l,u,c,h,d;let f={open:s.comboboxState.value===0},p={"aria-controls":(l=s.optionsRef.value)==null?void 0:l.id,"aria-expanded":s.disabled?void 0:s.comboboxState.value===0,"aria-activedescendant":s.activeOptionIndex.value===null||(u=s.options.value[s.activeOptionIndex.value])==null?void 0:u.id,"aria-labelledby":(d=(c=A(s.labelRef))==null?void 0:c.id)!=null?d:(h=A(s.buttonRef))==null?void 0:h.id,id:i,onKeydown:o,onChange:a,onInput:a,role:"combobox",type:"text",tabIndex:0,ref:s.inputRef},m=Jn(t,["displayValue"]);return oe({props:$($({},m),p),slot:f,attrs:n,slots:r,features:3,name:"ComboboxInput"})}}});G({name:"ComboboxOptions",props:{as:{type:[Object,String],default:"ul"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},hold:{type:[Boolean],default:!1}},setup(t,{attrs:e,slots:n}){let r=ks("ComboboxOptions"),s=`headlessui-combobox-options-${ke()}`;Ke(()=>{r.optionsPropsRef.value.static=t.static}),Ke(()=>{r.optionsPropsRef.value.hold=t.hold});let i=Dn(),o=R(()=>i!==null?i.value===0:r.comboboxState.value===0);return Fc({container:R(()=>A(r.optionsRef)),enabled:R(()=>r.comboboxState.value===0),accept(a){return a.getAttribute("role")==="option"?NodeFilter.FILTER_REJECT:a.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(a){a.setAttribute("role","none")}}),()=>{var a,l,u,c;let h={open:r.comboboxState.value===0},d={"aria-activedescendant":r.activeOptionIndex.value===null||(a=r.options.value[r.activeOptionIndex.value])==null?void 0:a.id,"aria-labelledby":(c=(l=A(r.labelRef))==null?void 0:l.id)!=null?c:(u=A(r.buttonRef))==null?void 0:u.id,id:s,ref:r.optionsRef,role:"listbox"},f=Jn(t,["hold"]);return oe({props:$($({},f),d),slot:h,attrs:e,slots:n,features:3,visible:o.value,name:"ComboboxOptions"})}}});G({name:"ComboboxOption",props:{as:{type:[Object,String],default:"li"},value:{type:[Object,String,Number,Boolean]},disabled:{type:Boolean,default:!1}},setup(t,{slots:e,attrs:n}){let r=ks("ComboboxOption"),s=`headlessui-combobox-option-${ke()}`,i=R(()=>r.activeOptionIndex.value!==null?r.options.value[r.activeOptionIndex.value].id===s:!1),o=R(()=>ie(r.value.value)===ie(t.value)),a=R(()=>({disabled:t.disabled,value:t.value}));He(()=>r.registerOption(s,a)),it(()=>r.unregisterOption(s)),He(()=>{At([r.comboboxState,o],()=>{r.comboboxState.value===0&&(!o.value||r.goToOption(4,s))},{immediate:!0})}),Ke(()=>{r.comboboxState.value===0&&(!i.value||Ee(()=>{var d,f;return(f=(d=document.getElementById(s))==null?void 0:d.scrollIntoView)==null?void 0:f.call(d,{block:"nearest"})}))});function l(d){if(t.disabled)return d.preventDefault();r.selectOption(s),r.closeCombobox(),Ee(()=>{var f;return(f=A(r.inputRef))==null?void 0:f.focus({preventScroll:!0})})}function u(){if(t.disabled)return r.goToOption(5);r.goToOption(4,s)}function c(){t.disabled||i.value||r.goToOption(4,s)}function h(){t.disabled||!i.value||r.optionsPropsRef.value.hold||r.goToOption(5)}return()=>{let{disabled:d}=t,f={active:i.value,selected:o.value,disabled:d},p={id:s,role:"option",tabIndex:d===!0?void 0:-1,"aria-disabled":d===!0?!0:void 0,"aria-selected":o.value===!0?o.value:void 0,disabled:void 0,onClick:l,onFocus:u,onPointermove:c,onMousemove:c,onPointerleave:h,onMouseleave:h};return oe({props:$($({},t),p),slot:f,attrs:n,slots:e,name:"ComboboxOption"})}}});var wu=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(t=>`${t}:not([tabindex='-1'])`).join(",");function zo(t=document.body){return t==null?[]:Array.from(t.querySelectorAll(wu))}function t1(t,e=0){return t===document.body?!1:Xe(e,{[0](){return t.matches(wu)},[1](){let n=t;for(;n!==null;){if(n.matches(wu))return!0;n=n.parentElement}return!1}})}function Vs(t){t==null||t.focus({preventScroll:!0})}function ut(t,e){let n=Array.isArray(t)?t.slice().sort((c,h)=>{let d=c.compareDocumentPosition(h);return d&Node.DOCUMENT_POSITION_FOLLOWING?-1:d&Node.DOCUMENT_POSITION_PRECEDING?1:0}):zo(t),r=document.activeElement,s=(()=>{if(e&5)return 1;if(e&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),i=(()=>{if(e&1)return 0;if(e&2)return Math.max(0,n.indexOf(r))-1;if(e&4)return Math.max(0,n.indexOf(r))+1;if(e&8)return n.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),o=e&32?{preventScroll:!0}:{},a=0,l=n.length,u;do{if(a>=l||a+l<=0)return 0;let c=i+a;if(e&16)c=(c+l)%l;else{if(c<0)return 3;if(c>=l)return 1}u=n[c],u==null||u.focus(o),a+=s}while(u!==document.activeElement);return u.hasAttribute("tabindex")||u.setAttribute("tabindex","0"),2}function Eu(t,e){for(let n of t)if(n.contains(e))return!0;return!1}function av(t,e=k(!0),n=k({})){let r=k(typeof window!="undefined"?document.activeElement:null),s=k(null);function i(){if(!e.value||t.value.size!==1)return;let{initialFocus:a}=n.value,l=document.activeElement;if(a){if(a===l)return}else if(Eu(t.value,l))return;if(r.value=l,a)Vs(a);else{let u=!1;for(let c of t.value)if(ut(c,1)===2){u=!0;break}u||console.warn("There are no focusable elements inside the <FocusTrap />")}s.value=document.activeElement}function o(){Vs(r.value),r.value=null,s.value=null}Ke(i),dc(()=>{e.value?i():o()}),it(o),Ht("keydown",a=>{if(!!e.value&&a.key==="Tab"&&!!document.activeElement&&t.value.size===1){a.preventDefault();for(let l of t.value)if(ut(l,(a.shiftKey?2:4)|16)===2){s.value=document.activeElement;break}}}),Ht("focus",a=>{if(!e.value||t.value.size!==1)return;let l=s.value;if(!l)return;let u=a.target;u&&u instanceof HTMLElement?Eu(t.value,u)?(s.value=u,Vs(u)):(a.preventDefault(),a.stopPropagation(),Vs(l)):Vs(s.value)},!0)}var Af="body > *",qr=new Set,Fn=new Map;function Sf(t){t.setAttribute("aria-hidden","true"),t.inert=!0}function Cf(t){let e=Fn.get(t);!e||(e["aria-hidden"]===null?t.removeAttribute("aria-hidden"):t.setAttribute("aria-hidden",e["aria-hidden"]),t.inert=e.inert)}function n1(t,e=k(!0)){Ke(n=>{if(!e.value||!t.value)return;let r=t.value;qr.add(r);for(let s of Fn.keys())s.contains(r)&&(Cf(s),Fn.delete(s));document.querySelectorAll(Af).forEach(s=>{if(s instanceof HTMLElement){for(let i of qr)if(s.contains(i))return;qr.size===1&&(Fn.set(s,{"aria-hidden":s.getAttribute("aria-hidden"),inert:s.inert}),Sf(s))}}),n(()=>{if(qr.delete(r),qr.size>0)document.querySelectorAll(Af).forEach(s=>{if(s instanceof HTMLElement&&!Fn.has(s)){for(let i of qr)if(s.contains(i))return;Fn.set(s,{"aria-hidden":s.getAttribute("aria-hidden"),inert:s.inert}),Sf(s)}});else for(let s of Fn.keys())Cf(s),Fn.delete(s)})})}var lv=Symbol("StackContext");function uv(){return be(lv,()=>{})}function r1(t){let e=uv();Ke(n=>{let r=t==null?void 0:t.value;!r||(e(0,r),n(()=>e(1,r)))})}function cv(t){let e=uv();function n(...r){t==null||t(...r),e(...r)}Ue(lv,n)}var hv=Symbol("ForcePortalRootContext");function s1(){return be(hv,!1)}var kf=G({name:"ForcePortalRoot",props:{as:{type:[Object,String],default:"template"},force:{type:Boolean,default:!1}},setup(t,{slots:e,attrs:n}){return Ue(hv,t.force),()=>{let i=t,{force:r}=i,s=Gt(i,["force"]);return oe({props:s,slot:{},slots:e,attrs:n,name:"ForcePortalRoot"})}}});function i1(){let t=document.getElementById("headlessui-portal-root");if(t)return t;let e=document.createElement("div");return e.setAttribute("id","headlessui-portal-root"),document.body.appendChild(e)}var o1=G({name:"Portal",props:{as:{type:[Object,String],default:"div"}},setup(t,{slots:e,attrs:n}){let r=s1(),s=be(dv,null),i=k(r===!0||s===null?i1():s.resolveTarget());Ke(()=>{r||s!==null&&(i.value=s.resolveTarget())});let o=k(null);return r1(o),it(()=>{var a;let l=document.getElementById("headlessui-portal-root");!l||i.value===l&&i.value.children.length<=0&&((a=i.value.parentElement)==null||a.removeChild(i.value))}),cv(),()=>{if(i.value===null)return null;let a={ref:o};return Yt(Q_,{to:i.value},oe({props:$($({},t),a),slot:{},attrs:n,slots:e,name:"Portal"}))}}}),dv=Symbol("PortalGroupContext"),a1=G({name:"PortalGroup",props:{as:{type:[Object,String],default:"template"},target:{type:Object,default:null}},setup(t,{attrs:e,slots:n}){let r=Pr({resolveTarget(){return t.target}});return Ue(dv,r),()=>{let o=t,{target:s}=o,i=Gt(o,["target"]);return oe({props:i,slot:{},attrs:e,slots:n,name:"PortalGroup"})}}}),fv=Symbol("DescriptionContext");function l1(){let t=be(fv,null);if(t===null)throw new Error("Missing parent");return t}function La({slot:t=k({}),name:e="Description",props:n={}}={}){let r=k([]);function s(i){return r.value.push(i),()=>{let o=r.value.indexOf(i);o!==-1&&r.value.splice(o,1)}}return Ue(fv,{register:s,slot:t,name:e,props:n}),R(()=>r.value.length>0?r.value.join(" "):void 0)}G({name:"Description",props:{as:{type:[Object,String],default:"p"}},setup(t,{attrs:e,slots:n}){let r=l1(),s=`headlessui-description-${ke()}`;return He(()=>it(r.register(s))),()=>{let{name:i="Description",slot:o=k({}),props:a={}}=r,l=t,u=mt($({},Object.entries(a).reduce((c,[h,d])=>Object.assign(c,{[h]:Se(d)}),{})),{id:s});return oe({props:$($({},l),u),slot:o.value,attrs:e,slots:n,name:i})}}});var pv=Symbol("DialogContext");function Bc(t){let e=be(pv,null);if(e===null){let n=new Error(`<${t} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Bc),n}return e}var uo="DC8F892D-2EBD-447C-A4C8-A03058436FF4";G({name:"Dialog",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},open:{type:[Boolean,String],default:uo},initialFocus:{type:Object,default:null}},emits:{close:t=>!0},setup(t,{emit:e,attrs:n,slots:r}){let s=k(new Set),i=Dn(),o=R(()=>t.open===uo&&i!==null?Xe(i.value,{[0]:!0,[1]:!1}):t.open);if(!(t.open!==uo||i!==null))throw new Error("You forgot to provide an `open` prop to the `Dialog`.");if(typeof o.value!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${o.value===uo?void 0:t.open}`);let a=R(()=>t.open?0:1),l=R(()=>i!==null?i.value===0:a.value===0),u=k(null),c=k(a.value===0);dc(()=>{c.value=a.value===0});let h=`headlessui-dialog-${ke()}`,d=R(()=>({initialFocus:t.initialFocus}));av(s,c,d),n1(u,c),cv((b,w)=>Xe(b,{[0](){s.value.add(w)},[1](){s.value.delete(w)}}));let f=La({name:"DialogDescription",slot:R(()=>({open:o.value}))}),p=k(null),m={titleId:p,dialogState:a,setTitleId(b){p.value!==b&&(p.value=b)},close(){e("close",!1)}};Ue(pv,m),Ht("mousedown",b=>{let w=b.target;a.value===0&&s.value.size===1&&(Eu(s.value,w)||(m.close(),Ee(()=>w==null?void 0:w.focus())))}),Ht("keydown",b=>{b.key==="Escape"&&a.value===0&&(s.value.size>1||(b.preventDefault(),b.stopPropagation(),m.close()))}),Ke(b=>{if(a.value!==0)return;let w=document.documentElement.style.overflow,x=document.documentElement.style.paddingRight,F=window.innerWidth-document.documentElement.clientWidth;document.documentElement.style.overflow="hidden",document.documentElement.style.paddingRight=`${F}px`,b(()=>{document.documentElement.style.overflow=w,document.documentElement.style.paddingRight=x})}),Ke(b=>{if(a.value!==0)return;let w=A(u);if(!w)return;let x=new IntersectionObserver(F=>{for(let j of F)j.boundingClientRect.x===0&&j.boundingClientRect.y===0&&j.boundingClientRect.width===0&&j.boundingClientRect.height===0&&m.close()});x.observe(w),b(()=>x.disconnect())});function y(b){b.stopPropagation()}return()=>{let b=mt($({},n),{ref:u,id:h,role:"dialog","aria-modal":a.value===0?!0:void 0,"aria-labelledby":p.value,"aria-describedby":f.value,onClick:y}),P=t,{open:w,initialFocus:x}=P,F=Gt(P,["open","initialFocus"]),j={open:a.value===0};return Yt(kf,{force:!0},()=>Yt(o1,()=>Yt(a1,{target:u.value},()=>Yt(kf,{force:!1},()=>oe({props:$($({},F),b),slot:j,attrs:n,slots:r,visible:l.value,features:3,name:"Dialog"})))))}}});G({name:"DialogOverlay",props:{as:{type:[Object,String],default:"div"}},setup(t,{attrs:e,slots:n}){let r=Bc("DialogOverlay"),s=`headlessui-dialog-overlay-${ke()}`;function i(o){o.target===o.currentTarget&&(o.preventDefault(),o.stopPropagation(),r.close())}return()=>oe({props:mt($({},t),{id:s,"aria-hidden":!0,onClick:i}),slot:{open:r.dialogState.value===0},attrs:e,slots:n,name:"DialogOverlay"})}});G({name:"DialogTitle",props:{as:{type:[Object,String],default:"h2"}},setup(t,{attrs:e,slots:n}){let r=Bc("DialogTitle"),s=`headlessui-dialog-title-${ke()}`;return He(()=>{r.setTitleId(s),it(()=>r.setTitleId(null))}),()=>oe({props:mt($({},t),{id:s}),slot:{open:r.dialogState.value===0},attrs:e,slots:n,name:"DialogTitle"})}});var gv=Symbol("DisclosureContext");function $c(t){let e=be(gv,null);if(e===null){let n=new Error(`<${t} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,$c),n}return e}var mv=Symbol("DisclosurePanelContext");function u1(){return be(mv,null)}G({name:"Disclosure",props:{as:{type:[Object,String],default:"template"},defaultOpen:{type:[Boolean],default:!1}},setup(t,{slots:e,attrs:n}){let r=`headlessui-disclosure-button-${ke()}`,s=`headlessui-disclosure-panel-${ke()}`,i=k(t.defaultOpen?0:1),o=k(null),a=k(null),l={buttonId:r,panelId:s,disclosureState:i,panel:o,button:a,toggleDisclosure(){i.value=Xe(i.value,{[0]:1,[1]:0})},closeDisclosure(){i.value!==1&&(i.value=1)},close(u){l.closeDisclosure();let c=(()=>u?u instanceof HTMLElement?u:u.value instanceof HTMLElement?A(u):A(l.button):A(l.button))();c==null||c.focus()}};return Ue(gv,l),Cs(R(()=>Xe(i.value,{[0]:0,[1]:1}))),()=>{let d=t,{defaultOpen:u}=d,c=Gt(d,["defaultOpen"]),h={open:i.value===0,close:l.close};return oe({props:c,slot:h,slots:e,attrs:n,name:"Disclosure"})}}});G({name:"DisclosureButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1}},setup(t,{attrs:e,slots:n}){let r=$c("DisclosureButton"),s=u1(),i=s===null?!1:s===r.panelId,o=k(null);i||Ke(()=>{r.button.value=o.value});let a=Mr(R(()=>({as:t.as,type:e.type})),o);function l(){var h;t.disabled||(i?(r.toggleDisclosure(),(h=A(r.button))==null||h.focus()):r.toggleDisclosure())}function u(h){var d;if(!t.disabled)if(i)switch(h.key){case" ":case"Enter":h.preventDefault(),h.stopPropagation(),r.toggleDisclosure(),(d=A(r.button))==null||d.focus();break}else switch(h.key){case" ":case"Enter":h.preventDefault(),h.stopPropagation(),r.toggleDisclosure();break}}function c(h){switch(h.key){case" ":h.preventDefault();break}}return()=>{let h={open:r.disclosureState.value===0},d=i?{ref:o,type:a.value,onClick:l,onKeydown:u}:{id:r.buttonId,ref:o,type:a.value,"aria-expanded":t.disabled?void 0:r.disclosureState.value===0,"aria-controls":A(r.panel)?r.panelId:void 0,disabled:t.disabled?!0:void 0,onClick:l,onKeydown:u,onKeyup:c};return oe({props:$($({},t),d),slot:h,attrs:e,slots:n,name:"DisclosureButton"})}}});G({name:"DisclosurePanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},setup(t,{attrs:e,slots:n}){let r=$c("DisclosurePanel");Ue(mv,r.panelId);let s=Dn(),i=R(()=>s!==null?s.value===0:r.disclosureState.value===0);return()=>{let o={open:r.disclosureState.value===0,close:r.close},a={id:r.panelId,ref:r.panel};return oe({props:$($({},t),a),slot:o,attrs:e,slots:n,features:3,visible:i.value,name:"DisclosurePanel"})}}});G({name:"FocusTrap",props:{as:{type:[Object,String],default:"div"},initialFocus:{type:Object,default:null}},setup(t,{attrs:e,slots:n}){let r=k(new Set),s=k(null),i=k(!0),o=R(()=>({initialFocus:t.initialFocus}));return He(()=>{!s.value||(r.value.add(s.value),av(r,i,o))}),it(()=>{i.value=!1}),()=>{let a={},l={ref:s},h=t,{initialFocus:u}=h,c=Gt(h,["initialFocus"]);return oe({props:$($({},c),l),slot:a,attrs:e,slots:n,name:"FocusTrap"})}}});function c1(t){requestAnimationFrame(()=>requestAnimationFrame(t))}var vv=Symbol("ListboxContext");function Bi(t){let e=be(vv,null);if(e===null){let n=new Error(`<${t} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Bi),n}return e}G({name:"Listbox",emits:{"update:modelValue":t=>!0},props:{as:{type:[Object,String],default:"template"},disabled:{type:[Boolean],default:!1},horizontal:{type:[Boolean],default:!1},modelValue:{type:[Object,String,Number,Boolean]}},setup(t,{slots:e,attrs:n,emit:r}){let s=k(1),i=k(null),o=k(null),a=k(null),l=k([]),u=k(""),c=k(null),h=R(()=>t.modelValue),d={listboxState:s,value:h,orientation:R(()=>t.horizontal?"horizontal":"vertical"),labelRef:i,buttonRef:o,optionsRef:a,disabled:R(()=>t.disabled),options:l,searchQuery:u,activeOptionIndex:c,closeListbox(){t.disabled||s.value!==1&&(s.value=1,c.value=null)},openListbox(){t.disabled||s.value!==0&&(s.value=0)},goToOption(f,p){if(t.disabled||s.value===1)return;let m=Mc(f===4?{focus:4,id:p}:{focus:f},{resolveItems:()=>l.value,resolveActiveIndex:()=>c.value,resolveId:y=>y.id,resolveDisabled:y=>y.dataRef.disabled});u.value===""&&c.value===m||(u.value="",c.value=m)},search(f){if(t.disabled||s.value===1)return;let p=u.value!==""?0:1;u.value+=f.toLowerCase();let m=(c.value!==null?l.value.slice(c.value+p).concat(l.value.slice(0,c.value+p)):l.value).find(b=>b.dataRef.textValue.startsWith(u.value)&&!b.dataRef.disabled),y=m?l.value.indexOf(m):-1;y===-1||y===c.value||(c.value=y)},clearSearch(){t.disabled||s.value!==1&&u.value!==""&&(u.value="")},registerOption(f,p){var m,y;let b=Array.from((y=(m=a.value)==null?void 0:m.querySelectorAll('[id^="headlessui-listbox-option-"]'))!=null?y:[]).reduce((w,x,F)=>Object.assign(w,{[x.id]:F}),{});l.value=[...l.value,{id:f,dataRef:p}].sort((w,x)=>b[w.id]-b[x.id])},unregisterOption(f){let p=l.value.slice(),m=c.value!==null?p[c.value]:null,y=p.findIndex(b=>b.id===f);y!==-1&&p.splice(y,1),l.value=p,c.value=(()=>y===c.value||m===null?null:p.indexOf(m))()},select(f){t.disabled||r("update:modelValue",f)}};return Ht("mousedown",f=>{var p,m,y;let b=f.target,w=document.activeElement;s.value===0&&((p=A(o))!=null&&p.contains(b)||((m=A(a))!=null&&m.contains(b)||d.closeListbox(),!(w!==document.body&&(w==null?void 0:w.contains(b)))&&(f.defaultPrevented||(y=A(o))==null||y.focus({preventScroll:!0}))))}),Ue(vv,d),Cs(R(()=>Xe(s.value,{[0]:0,[1]:1}))),()=>{let f={open:s.value===0,disabled:t.disabled};return oe({props:Jn(t,["modelValue","onUpdate:modelValue","disabled","horizontal"]),slot:f,slots:e,attrs:n,name:"Listbox"})}}});G({name:"ListboxLabel",props:{as:{type:[Object,String],default:"label"}},setup(t,{attrs:e,slots:n}){let r=Bi("ListboxLabel"),s=`headlessui-listbox-label-${ke()}`;function i(){var o;(o=A(r.buttonRef))==null||o.focus({preventScroll:!0})}return()=>{let o={open:r.listboxState.value===0,disabled:r.disabled.value},a={id:s,ref:r.labelRef,onClick:i};return oe({props:$($({},t),a),slot:o,attrs:e,slots:n,name:"ListboxLabel"})}}});G({name:"ListboxButton",props:{as:{type:[Object,String],default:"button"}},setup(t,{attrs:e,slots:n}){let r=Bi("ListboxButton"),s=`headlessui-listbox-button-${ke()}`;function i(u){switch(u.key){case" ":case"Enter":case"ArrowDown":u.preventDefault(),r.openListbox(),Ee(()=>{var c;(c=A(r.optionsRef))==null||c.focus({preventScroll:!0}),r.value.value||r.goToOption(0)});break;case"ArrowUp":u.preventDefault(),r.openListbox(),Ee(()=>{var c;(c=A(r.optionsRef))==null||c.focus({preventScroll:!0}),r.value.value||r.goToOption(3)});break}}function o(u){switch(u.key){case" ":u.preventDefault();break}}function a(u){r.disabled.value||(r.listboxState.value===0?(r.closeListbox(),Ee(()=>{var c;return(c=A(r.buttonRef))==null?void 0:c.focus({preventScroll:!0})})):(u.preventDefault(),r.openListbox(),c1(()=>{var c;return(c=A(r.optionsRef))==null?void 0:c.focus({preventScroll:!0})})))}let l=Mr(R(()=>({as:t.as,type:e.type})),r.buttonRef);return()=>{var u,c;let h={open:r.listboxState.value===0,disabled:r.disabled.value},d={ref:r.buttonRef,id:s,type:l.value,"aria-haspopup":!0,"aria-controls":(u=A(r.optionsRef))==null?void 0:u.id,"aria-expanded":r.disabled.value?void 0:r.listboxState.value===0,"aria-labelledby":r.labelRef.value?[(c=A(r.labelRef))==null?void 0:c.id,s].join(" "):void 0,disabled:r.disabled.value===!0?!0:void 0,onKeydown:i,onKeyup:o,onClick:a};return oe({props:$($({},t),d),slot:h,attrs:e,slots:n,name:"ListboxButton"})}}});G({name:"ListboxOptions",props:{as:{type:[Object,String],default:"ul"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},setup(t,{attrs:e,slots:n}){let r=Bi("ListboxOptions"),s=`headlessui-listbox-options-${ke()}`,i=k(null);function o(u){switch(i.value&&clearTimeout(i.value),u.key){case" ":if(r.searchQuery.value!=="")return u.preventDefault(),u.stopPropagation(),r.search(u.key);case"Enter":if(u.preventDefault(),u.stopPropagation(),r.activeOptionIndex.value!==null){let{dataRef:c}=r.options.value[r.activeOptionIndex.value];r.select(c.value)}r.closeListbox(),Ee(()=>{var c;return(c=A(r.buttonRef))==null?void 0:c.focus({preventScroll:!0})});break;case Xe(r.orientation.value,{vertical:"ArrowDown",horizontal:"ArrowRight"}):return u.preventDefault(),u.stopPropagation(),r.goToOption(2);case Xe(r.orientation.value,{vertical:"ArrowUp",horizontal:"ArrowLeft"}):return u.preventDefault(),u.stopPropagation(),r.goToOption(1);case"Home":case"PageUp":return u.preventDefault(),u.stopPropagation(),r.goToOption(0);case"End":case"PageDown":return u.preventDefault(),u.stopPropagation(),r.goToOption(3);case"Escape":u.preventDefault(),u.stopPropagation(),r.closeListbox(),Ee(()=>{var c;return(c=A(r.buttonRef))==null?void 0:c.focus({preventScroll:!0})});break;case"Tab":u.preventDefault(),u.stopPropagation();break;default:u.key.length===1&&(r.search(u.key),i.value=setTimeout(()=>r.clearSearch(),350));break}}let a=Dn(),l=R(()=>a!==null?a.value===0:r.listboxState.value===0);return()=>{var u,c,h,d;let f={open:r.listboxState.value===0},p={"aria-activedescendant":r.activeOptionIndex.value===null||(u=r.options.value[r.activeOptionIndex.value])==null?void 0:u.id,"aria-labelledby":(d=(c=A(r.labelRef))==null?void 0:c.id)!=null?d:(h=A(r.buttonRef))==null?void 0:h.id,"aria-orientation":r.orientation.value,id:s,onKeydown:o,role:"listbox",tabIndex:0,ref:r.optionsRef};return oe({props:$($({},t),p),slot:f,attrs:e,slots:n,features:3,visible:l.value,name:"ListboxOptions"})}}});G({name:"ListboxOption",props:{as:{type:[Object,String],default:"li"},value:{type:[Object,String,Number,Boolean]},disabled:{type:Boolean,default:!1}},setup(t,{slots:e,attrs:n}){let r=Bi("ListboxOption"),s=`headlessui-listbox-option-${ke()}`,i=R(()=>r.activeOptionIndex.value!==null?r.options.value[r.activeOptionIndex.value].id===s:!1),o=R(()=>ie(r.value.value)===ie(t.value)),a=k({disabled:t.disabled,value:t.value,textValue:""});He(()=>{var d,f;let p=(f=(d=document.getElementById(s))==null?void 0:d.textContent)==null?void 0:f.toLowerCase().trim();p!==void 0&&(a.value.textValue=p)}),He(()=>r.registerOption(s,a)),it(()=>r.unregisterOption(s)),He(()=>{At([r.listboxState,o],()=>{var d,f;r.listboxState.value===0&&(!o.value||(r.goToOption(4,s),(f=(d=document.getElementById(s))==null?void 0:d.focus)==null||f.call(d)))},{immediate:!0})}),Ke(()=>{r.listboxState.value===0&&(!i.value||Ee(()=>{var d,f;return(f=(d=document.getElementById(s))==null?void 0:d.scrollIntoView)==null?void 0:f.call(d,{block:"nearest"})}))});function l(d){if(t.disabled)return d.preventDefault();r.select(t.value),r.closeListbox(),Ee(()=>{var f;return(f=A(r.buttonRef))==null?void 0:f.focus({preventScroll:!0})})}function u(){if(t.disabled)return r.goToOption(5);r.goToOption(4,s)}function c(){t.disabled||i.value||r.goToOption(4,s)}function h(){t.disabled||!i.value||r.goToOption(5)}return()=>{let{disabled:d}=t,f={active:i.value,selected:o.value,disabled:d},p={id:s,role:"option",tabIndex:d===!0?void 0:-1,"aria-disabled":d===!0?!0:void 0,"aria-selected":o.value===!0?o.value:void 0,disabled:void 0,onClick:l,onFocus:u,onPointermove:c,onMousemove:c,onPointerleave:h,onMouseleave:h};return oe({props:$($({},t),p),slot:f,attrs:n,slots:e,name:"ListboxOption"})}}});function h1(t){requestAnimationFrame(()=>requestAnimationFrame(t))}var yv=Symbol("MenuContext");function Ma(t){let e=be(yv,null);if(e===null){let n=new Error(`<${t} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Ma),n}return e}var d1=G({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(t,{slots:e,attrs:n}){let r=k(1),s=k(null),i=k(null),o=k([]),a=k(""),l=k(null),u={menuState:r,buttonRef:s,itemsRef:i,items:o,searchQuery:a,activeItemIndex:l,closeMenu:()=>{r.value=1,l.value=null},openMenu:()=>r.value=0,goToItem(c,h){let d=Mc(c===4?{focus:4,id:h}:{focus:c},{resolveItems:()=>o.value,resolveActiveIndex:()=>l.value,resolveId:f=>f.id,resolveDisabled:f=>f.dataRef.disabled});a.value===""&&l.value===d||(a.value="",l.value=d)},search(c){let h=a.value!==""?0:1;a.value+=c.toLowerCase();let d=(l.value!==null?o.value.slice(l.value+h).concat(o.value.slice(0,l.value+h)):o.value).find(p=>p.dataRef.textValue.startsWith(a.value)&&!p.dataRef.disabled),f=d?o.value.indexOf(d):-1;f===-1||f===l.value||(l.value=f)},clearSearch(){a.value=""},registerItem(c,h){var d,f;let p=Array.from((f=(d=i.value)==null?void 0:d.querySelectorAll('[id^="headlessui-menu-item-"]'))!=null?f:[]).reduce((m,y,b)=>Object.assign(m,{[y.id]:b}),{});o.value=[...o.value,{id:c,dataRef:h}].sort((m,y)=>p[m.id]-p[y.id])},unregisterItem(c){let h=o.value.slice(),d=l.value!==null?h[l.value]:null,f=h.findIndex(p=>p.id===c);f!==-1&&h.splice(f,1),o.value=h,l.value=(()=>f===l.value||d===null?null:h.indexOf(d))()}};return Ht("mousedown",c=>{var h,d,f;let p=c.target,m=document.activeElement;r.value===0&&((h=A(s))!=null&&h.contains(p)||((d=A(i))!=null&&d.contains(p)||u.closeMenu(),!(m!==document.body&&(m==null?void 0:m.contains(p)))&&(c.defaultPrevented||(f=A(s))==null||f.focus({preventScroll:!0}))))}),Ue(yv,u),Cs(R(()=>Xe(r.value,{[0]:0,[1]:1}))),()=>{let c={open:r.value===0};return oe({props:t,slot:c,slots:e,attrs:n,name:"Menu"})}}}),f1=G({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"}},setup(t,{attrs:e,slots:n}){let r=Ma("MenuButton"),s=`headlessui-menu-button-${ke()}`;function i(u){switch(u.key){case" ":case"Enter":case"ArrowDown":u.preventDefault(),u.stopPropagation(),r.openMenu(),Ee(()=>{var c;(c=A(r.itemsRef))==null||c.focus({preventScroll:!0}),r.goToItem(0)});break;case"ArrowUp":u.preventDefault(),u.stopPropagation(),r.openMenu(),Ee(()=>{var c;(c=A(r.itemsRef))==null||c.focus({preventScroll:!0}),r.goToItem(3)});break}}function o(u){switch(u.key){case" ":u.preventDefault();break}}function a(u){t.disabled||(r.menuState.value===0?(r.closeMenu(),Ee(()=>{var c;return(c=A(r.buttonRef))==null?void 0:c.focus({preventScroll:!0})})):(u.preventDefault(),u.stopPropagation(),r.openMenu(),h1(()=>{var c;return(c=A(r.itemsRef))==null?void 0:c.focus({preventScroll:!0})})))}let l=Mr(R(()=>({as:t.as,type:e.type})),r.buttonRef);return()=>{var u;let c={open:r.menuState.value===0},h={ref:r.buttonRef,id:s,type:l.value,"aria-haspopup":!0,"aria-controls":(u=A(r.itemsRef))==null?void 0:u.id,"aria-expanded":t.disabled?void 0:r.menuState.value===0,onKeydown:i,onKeyup:o,onClick:a};return oe({props:$($({},t),h),slot:c,attrs:e,slots:n,name:"MenuButton"})}}}),p1=G({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},setup(t,{attrs:e,slots:n}){let r=Ma("MenuItems"),s=`headlessui-menu-items-${ke()}`,i=k(null);Fc({container:R(()=>A(r.itemsRef)),enabled:R(()=>r.menuState.value===0),accept(c){return c.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:c.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(c){c.setAttribute("role","none")}});function o(c){var h;switch(i.value&&clearTimeout(i.value),c.key){case" ":if(r.searchQuery.value!=="")return c.preventDefault(),c.stopPropagation(),r.search(c.key);case"Enter":if(c.preventDefault(),c.stopPropagation(),r.activeItemIndex.value!==null){let{id:d}=r.items.value[r.activeItemIndex.value];(h=document.getElementById(d))==null||h.click()}r.closeMenu(),Ee(()=>{var d;return(d=A(r.buttonRef))==null?void 0:d.focus({preventScroll:!0})});break;case"ArrowDown":return c.preventDefault(),c.stopPropagation(),r.goToItem(2);case"ArrowUp":return c.preventDefault(),c.stopPropagation(),r.goToItem(1);case"Home":case"PageUp":return c.preventDefault(),c.stopPropagation(),r.goToItem(0);case"End":case"PageDown":return c.preventDefault(),c.stopPropagation(),r.goToItem(3);case"Escape":c.preventDefault(),c.stopPropagation(),r.closeMenu(),Ee(()=>{var d;return(d=A(r.buttonRef))==null?void 0:d.focus({preventScroll:!0})});break;case"Tab":c.preventDefault(),c.stopPropagation();break;default:c.key.length===1&&(r.search(c.key),i.value=setTimeout(()=>r.clearSearch(),350));break}}function a(c){switch(c.key){case" ":c.preventDefault();break}}let l=Dn(),u=R(()=>l!==null?l.value===0:r.menuState.value===0);return()=>{var c,h;let d={open:r.menuState.value===0},f={"aria-activedescendant":r.activeItemIndex.value===null||(c=r.items.value[r.activeItemIndex.value])==null?void 0:c.id,"aria-labelledby":(h=A(r.buttonRef))==null?void 0:h.id,id:s,onKeydown:o,onKeyup:a,role:"menu",tabIndex:0,ref:r.itemsRef};return oe({props:$($({},t),f),slot:d,attrs:e,slots:n,features:3,visible:u.value,name:"MenuItems"})}}}),Rl=G({name:"MenuItem",props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1}},setup(t,{slots:e,attrs:n}){let r=Ma("MenuItem"),s=`headlessui-menu-item-${ke()}`,i=R(()=>r.activeItemIndex.value!==null?r.items.value[r.activeItemIndex.value].id===s:!1),o=k({disabled:t.disabled,textValue:""});He(()=>{var h,d;let f=(d=(h=document.getElementById(s))==null?void 0:h.textContent)==null?void 0:d.toLowerCase().trim();f!==void 0&&(o.value.textValue=f)}),He(()=>r.registerItem(s,o)),it(()=>r.unregisterItem(s)),Ke(()=>{r.menuState.value===0&&(!i.value||Ee(()=>{var h,d;return(d=(h=document.getElementById(s))==null?void 0:h.scrollIntoView)==null?void 0:d.call(h,{block:"nearest"})}))});function a(h){if(t.disabled)return h.preventDefault();r.closeMenu(),Ee(()=>{var d;return(d=A(r.buttonRef))==null?void 0:d.focus({preventScroll:!0})})}function l(){if(t.disabled)return r.goToItem(5);r.goToItem(4,s)}function u(){t.disabled||i.value||r.goToItem(4,s)}function c(){t.disabled||!i.value||r.goToItem(5)}return()=>{let{disabled:h}=t,d={active:i.value,disabled:h};return oe({props:mt($({},t),{id:s,role:"menuitem",tabIndex:h===!0?void 0:-1,"aria-disabled":h===!0?!0:void 0,onClick:a,onFocus:l,onPointermove:u,onMousemove:u,onPointerleave:c,onMouseleave:c}),slot:d,attrs:n,slots:e,name:"MenuItem"})}}}),bv=Symbol("PopoverContext");function Fa(t){let e=be(bv,null);if(e===null){let n=new Error(`<${t} /> is missing a parent <${m1.name} /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Fa),n}return e}var _v=Symbol("PopoverGroupContext");function wv(){return be(_v,null)}var Ev=Symbol("PopoverPanelContext");function g1(){return be(Ev,null)}var m1=G({name:"Popover",props:{as:{type:[Object,String],default:"div"}},setup(t,{slots:e,attrs:n}){let r=`headlessui-popover-button-${ke()}`,s=`headlessui-popover-panel-${ke()}`,i=k(1),o=k(null),a=k(null),l={popoverState:i,buttonId:r,panelId:s,panel:a,button:o,togglePopover(){i.value=Xe(i.value,{[0]:1,[1]:0})},closePopover(){i.value!==1&&(i.value=1)},close(f){l.closePopover();let p=(()=>f?f instanceof HTMLElement?f:f.value instanceof HTMLElement?A(f):A(l.button):A(l.button))();p==null||p.focus()}};Ue(bv,l),Cs(R(()=>Xe(i.value,{[0]:0,[1]:1})));let u={buttonId:r,panelId:s,close(){l.closePopover()}},c=wv(),h=c==null?void 0:c.registerPopover;function d(){var f,p,m;return(m=c==null?void 0:c.isFocusWithinPopoverGroup())!=null?m:((f=A(o))==null?void 0:f.contains(document.activeElement))||((p=A(a))==null?void 0:p.contains(document.activeElement))}return Ke(()=>h==null?void 0:h(u)),Ht("focus",()=>{i.value===0&&(d()||!o||!a||l.closePopover())},!0),Ht("mousedown",f=>{var p,m,y;let b=f.target;i.value===0&&(((p=A(o))==null?void 0:p.contains(b))||((m=A(a))==null?void 0:m.contains(b))||(l.closePopover(),t1(b,1)||(f.preventDefault(),(y=A(o))==null||y.focus())))}),()=>{let f={open:i.value===0,close:l.close};return oe({props:t,slot:f,slots:e,attrs:n,name:"Popover"})}}});G({name:"PopoverButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1}},setup(t,{attrs:e,slots:n}){let r=Fa("PopoverButton"),s=wv(),i=s==null?void 0:s.closeOthers,o=g1(),a=o===null?!1:o===r.panelId,l=k(null),u=k(typeof window=="undefined"?null:document.activeElement);Ht("focus",()=>{u.value=l.value,l.value=document.activeElement},!0);let c=k(null);a||Ke(()=>{r.button.value=c.value});let h=Mr(R(()=>({as:t.as,type:e.type})),c);function d(m){var y,b,w,x;if(a){if(r.popoverState.value===1)return;switch(m.key){case" ":case"Enter":m.preventDefault(),m.stopPropagation(),r.closePopover(),(y=A(r.button))==null||y.focus();break}}else switch(m.key){case" ":case"Enter":m.preventDefault(),m.stopPropagation(),r.popoverState.value===1&&(i==null||i(r.buttonId)),r.togglePopover();break;case"Escape":if(r.popoverState.value!==0)return i==null?void 0:i(r.buttonId);if(!A(r.button)||!((b=A(r.button))!=null&&b.contains(document.activeElement)))return;m.preventDefault(),m.stopPropagation(),r.closePopover();break;case"Tab":if(r.popoverState.value!==0||!r.panel||!r.button)return;if(m.shiftKey){if(!u.value||((w=A(r.button))==null?void 0:w.contains(u.value))||((x=A(r.panel))==null?void 0:x.contains(u.value)))return;let F=zo(),j=F.indexOf(u.value);if(F.indexOf(A(r.button))>j)return;m.preventDefault(),m.stopPropagation(),ut(A(r.panel),8)}else m.preventDefault(),m.stopPropagation(),ut(A(r.panel),1);break}}function f(m){var y,b;if(!a&&(m.key===" "&&m.preventDefault(),r.popoverState.value===0&&!!r.panel&&!!r.button))switch(m.key){case"Tab":if(!u.value||((y=A(r.button))==null?void 0:y.contains(u.value))||((b=A(r.panel))==null?void 0:b.contains(u.value)))return;let w=zo(),x=w.indexOf(u.value);if(w.indexOf(A(r.button))>x)return;m.preventDefault(),m.stopPropagation(),ut(A(r.panel),8);break}}function p(){var m,y;t.disabled||(a?(r.closePopover(),(m=A(r.button))==null||m.focus()):(r.popoverState.value===1&&(i==null||i(r.buttonId)),(y=A(r.button))==null||y.focus(),r.togglePopover()))}return()=>{let m={open:r.popoverState.value===0},y=a?{ref:c,type:h.value,onKeydown:d,onClick:p}:{ref:c,id:r.buttonId,type:h.value,"aria-expanded":t.disabled?void 0:r.popoverState.value===0,"aria-controls":A(r.panel)?r.panelId:void 0,disabled:t.disabled?!0:void 0,onKeydown:d,onKeyup:f,onClick:p};return oe({props:$($({},t),y),slot:m,attrs:e,slots:n,name:"PopoverButton"})}}});G({name:"PopoverOverlay",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},setup(t,{attrs:e,slots:n}){let r=Fa("PopoverOverlay"),s=`headlessui-popover-overlay-${ke()}`,i=Dn(),o=R(()=>i!==null?i.value===0:r.popoverState.value===0);function a(){r.closePopover()}return()=>{let l={open:r.popoverState.value===0};return oe({props:mt($({},t),{id:s,"aria-hidden":!0,onClick:a}),slot:l,attrs:e,slots:n,features:3,visible:o.value,name:"PopoverOverlay"})}}});G({name:"PopoverPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},focus:{type:Boolean,default:!1}},setup(t,{attrs:e,slots:n}){let{focus:r}=t,s=Fa("PopoverPanel");Ue(Ev,s.panelId),it(()=>{s.panel.value=null}),Ke(()=>{var l;if(!r||s.popoverState.value!==0||!s.panel)return;let u=document.activeElement;(l=A(s.panel))!=null&&l.contains(u)||ut(A(s.panel),1)}),Ht("keydown",l=>{var u,c;if(s.popoverState.value!==0||!A(s.panel)||l.key!=="Tab"||!document.activeElement||!((u=A(s.panel))!=null&&u.contains(document.activeElement)))return;l.preventDefault();let h=ut(A(s.panel),l.shiftKey?2:4);if(h===3)return(c=A(s.button))==null?void 0:c.focus();if(h===1){if(!A(s.button))return;let d=zo(),f=d.indexOf(A(s.button)),p=d.splice(f+1).filter(m=>{var y;return!((y=A(s.panel))!=null&&y.contains(m))});ut(p,1)===0&&ut(document.body,1)}}),Ht("focus",()=>{var l;!r||s.popoverState.value===0&&(!A(s.panel)||((l=A(s.panel))==null?void 0:l.contains(document.activeElement))||s.closePopover())},!0);let i=Dn(),o=R(()=>i!==null?i.value===0:s.popoverState.value===0);function a(l){var u,c;switch(l.key){case"Escape":if(s.popoverState.value!==0||!A(s.panel)||!((u=A(s.panel))!=null&&u.contains(document.activeElement)))return;l.preventDefault(),l.stopPropagation(),s.closePopover(),(c=A(s.button))==null||c.focus();break}}return()=>{let l={open:s.popoverState.value===0,close:s.close},u={ref:s.panel,id:s.panelId,onKeydown:a};return oe({props:$($({},t),u),slot:l,attrs:e,slots:n,features:3,visible:o.value,name:"PopoverPanel"})}}});G({name:"PopoverGroup",props:{as:{type:[Object,String],default:"div"}},setup(t,{attrs:e,slots:n}){let r=k(null),s=k([]);function i(u){let c=s.value.indexOf(u);c!==-1&&s.value.splice(c,1)}function o(u){return s.value.push(u),()=>{i(u)}}function a(){var u;let c=document.activeElement;return(u=A(r))!=null&&u.contains(c)?!0:s.value.some(h=>{var d,f;return((d=document.getElementById(h.buttonId))==null?void 0:d.contains(c))||((f=document.getElementById(h.panelId))==null?void 0:f.contains(c))})}function l(u){for(let c of s.value)c.buttonId!==u&&c.close()}return Ue(_v,{registerPopover:o,unregisterPopover:i,isFocusWithinPopoverGroup:a,closeOthers:l}),()=>oe({props:mt($({},t),{ref:r}),slot:{},attrs:e,slots:n,name:"PopoverGroup"})}});var Iv=Symbol("LabelContext");function Tv(){let t=be(Iv,null);if(t===null){let e=new Error("You used a <Label /> component, but it is not inside a parent.");throw Error.captureStackTrace&&Error.captureStackTrace(e,Tv),e}return t}function Uc({slot:t={},name:e="Label",props:n={}}={}){let r=k([]);function s(i){return r.value.push(i),()=>{let o=r.value.indexOf(i);o!==-1&&r.value.splice(o,1)}}return Ue(Iv,{register:s,slot:t,name:e,props:n}),R(()=>r.value.length>0?r.value.join(" "):void 0)}G({name:"Label",props:{as:{type:[Object,String],default:"label"},passive:{type:[Boolean],default:!1}},setup(t,{slots:e,attrs:n}){let r=Tv(),s=`headlessui-label-${ke()}`;return He(()=>it(r.register(s))),()=>{let{name:i="Label",slot:o={},props:a={}}=r,d=t,{passive:l}=d,u=Gt(d,["passive"]),c=mt($({},Object.entries(a).reduce((f,[p,m])=>Object.assign(f,{[p]:Se(m)}),{})),{id:s}),h=$($({},u),c);return l&&delete h.onClick,oe({props:h,slot:o,attrs:n,slots:e,name:i})}}});var Av=Symbol("RadioGroupContext");function Sv(t){let e=be(Av,null);if(e===null){let n=new Error(`<${t} /> is missing a parent <RadioGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Sv),n}return e}G({name:"RadioGroup",emits:{"update:modelValue":t=>!0},props:{as:{type:[Object,String],default:"div"},disabled:{type:[Boolean],default:!1},modelValue:{type:[Object,String,Number,Boolean]}},setup(t,{emit:e,attrs:n,slots:r}){let s=k(null),i=k([]),o=Uc({name:"RadioGroupLabel"}),a=La({name:"RadioGroupDescription"}),l=R(()=>t.modelValue),u={options:i,value:l,disabled:R(()=>t.disabled),firstOption:R(()=>i.value.find(d=>!d.propsRef.disabled)),containsCheckedOption:R(()=>i.value.some(d=>ie(d.propsRef.value)===ie(t.modelValue))),change(d){var f;if(t.disabled||l.value===d)return!1;let p=(f=i.value.find(m=>ie(m.propsRef.value)===ie(d)))==null?void 0:f.propsRef;return p!=null&&p.disabled?!1:(e("update:modelValue",d),!0)},registerOption(d){var f;let p=Array.from((f=s.value)==null?void 0:f.querySelectorAll('[id^="headlessui-radiogroup-option-"]')).reduce((m,y,b)=>Object.assign(m,{[y.id]:b}),{});i.value.push(d),i.value.sort((m,y)=>p[m.id]-p[y.id])},unregisterOption(d){let f=i.value.findIndex(p=>p.id===d);f!==-1&&i.value.splice(f,1)}};Ue(Av,u),Fc({container:R(()=>A(s)),accept(d){return d.getAttribute("role")==="radio"?NodeFilter.FILTER_REJECT:d.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(d){d.setAttribute("role","none")}});function c(d){if(!s.value||!s.value.contains(d.target))return;let f=i.value.filter(p=>p.propsRef.disabled===!1).map(p=>p.element);switch(d.key){case"ArrowLeft":case"ArrowUp":if(d.preventDefault(),d.stopPropagation(),ut(f,18)===2){let p=i.value.find(m=>m.element===document.activeElement);p&&u.change(p.propsRef.value)}break;case"ArrowRight":case"ArrowDown":if(d.preventDefault(),d.stopPropagation(),ut(f,20)===2){let p=i.value.find(m=>m.element===document.activeElement);p&&u.change(p.propsRef.value)}break;case" ":{d.preventDefault(),d.stopPropagation();let p=i.value.find(m=>m.element===document.activeElement);p&&u.change(p.propsRef.value)}break}}let h=`headlessui-radiogroup-${ke()}`;return()=>{let y=t,{modelValue:d,disabled:f}=y,p=Gt(y,["modelValue","disabled"]),m={ref:s,id:h,role:"radiogroup","aria-labelledby":o.value,"aria-describedby":a.value,onKeydown:c};return oe({props:$($({},p),m),slot:{},attrs:n,slots:r,name:"RadioGroup"})}}});G({name:"RadioGroupOption",props:{as:{type:[Object,String],default:"div"},value:{type:[Object,String,Number,Boolean]},disabled:{type:Boolean,default:!1}},setup(t,{attrs:e,slots:n}){let r=Sv("RadioGroupOption"),s=`headlessui-radiogroup-option-${ke()}`,i=Uc({name:"RadioGroupLabel"}),o=La({name:"RadioGroupDescription"}),a=k(null),l=R(()=>({value:t.value,disabled:t.disabled})),u=k(1);He(()=>r.registerOption({id:s,element:a,propsRef:l})),it(()=>r.unregisterOption(s));let c=R(()=>{var b;return((b=r.firstOption.value)==null?void 0:b.id)===s}),h=R(()=>r.disabled.value||t.disabled),d=R(()=>ie(r.value.value)===ie(t.value)),f=R(()=>h.value?-1:d.value||!r.containsCheckedOption.value&&c.value?0:-1);function p(){var b;!r.change(t.value)||(u.value|=2,(b=a.value)==null||b.focus())}function m(){u.value|=2}function y(){u.value&=-3}return()=>{let b=Jn(t,["value","disabled"]),w={checked:d.value,disabled:h.value,active:Boolean(u.value&2)},x={id:s,ref:a,role:"radio","aria-checked":d.value?"true":"false","aria-labelledby":i.value,"aria-describedby":o.value,"aria-disabled":h.value?!0:void 0,tabIndex:f.value,onClick:h.value?void 0:p,onFocus:h.value?void 0:m,onBlur:h.value?void 0:y};return oe({props:$($({},b),x),slot:w,attrs:e,slots:n,name:"RadioGroupOption"})}}});var Cv=Symbol("GroupContext");G({name:"SwitchGroup",props:{as:{type:[Object,String],default:"template"}},setup(t,{slots:e,attrs:n}){let r=k(null),s=Uc({name:"SwitchLabel",props:{onClick(){!r.value||(r.value.click(),r.value.focus({preventScroll:!0}))}}}),i=La({name:"SwitchDescription"});return Ue(Cv,{switchRef:r,labelledby:s,describedby:i}),()=>oe({props:t,slot:{},slots:e,attrs:n,name:"SwitchGroup"})}});G({name:"Switch",emits:{"update:modelValue":t=>!0},props:{as:{type:[Object,String],default:"button"},modelValue:{type:Boolean,default:!1}},setup(t,{emit:e,attrs:n,slots:r}){let s=be(Cv,null),i=`headlessui-switch-${ke()}`;function o(){e("update:modelValue",!t.modelValue)}let a=k(null),l=s===null?a:s.switchRef,u=Mr(R(()=>({as:t.as,type:n.type})),l);function c(f){f.preventDefault(),o()}function h(f){f.key!=="Tab"&&f.preventDefault(),f.key===" "&&o()}function d(f){f.preventDefault()}return()=>{let f={checked:t.modelValue},p={id:i,ref:l,role:"switch",type:u.value,tabIndex:0,"aria-checked":t.modelValue,"aria-labelledby":s==null?void 0:s.labelledby.value,"aria-describedby":s==null?void 0:s.describedby.value,onClick:c,onKeyup:h,onKeypress:d};return oe({props:$($({},t),p),slot:f,attrs:n,slots:r,name:"Switch"})}}});var kv=Symbol("TabsContext");function $i(t){let e=be(kv,null);if(e===null){let n=new Error(`<${t} /> is missing a parent <TabGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,$i),n}return e}G({name:"TabGroup",emits:{change:t=>!0},props:{as:{type:[Object,String],default:"template"},selectedIndex:{type:[Number],default:null},defaultIndex:{type:[Number],default:0},vertical:{type:[Boolean],default:!1},manual:{type:[Boolean],default:!1}},setup(t,{slots:e,attrs:n,emit:r}){let s=k(null),i=k([]),o=k([]),a={selectedIndex:s,orientation:R(()=>t.vertical?"vertical":"horizontal"),activation:R(()=>t.manual?"manual":"auto"),tabs:i,panels:o,setSelectedIndex(l){s.value!==l&&(s.value=l,r("change",l))},registerTab(l){i.value.includes(l)||i.value.push(l)},unregisterTab(l){let u=i.value.indexOf(l);u!==-1&&i.value.splice(u,1)},registerPanel(l){o.value.includes(l)||o.value.push(l)},unregisterPanel(l){let u=o.value.indexOf(l);u!==-1&&o.value.splice(u,1)}};return Ue(kv,a),Ke(()=>{var l;if(a.tabs.value.length<=0||t.selectedIndex===null&&s.value!==null)return;let u=a.tabs.value.map(d=>A(d)).filter(Boolean),c=u.filter(d=>!d.hasAttribute("disabled")),h=(l=t.selectedIndex)!=null?l:t.defaultIndex;if(h<0)s.value=u.indexOf(c[0]);else if(h>a.tabs.value.length)s.value=u.indexOf(c[c.length-1]);else{let d=u.slice(0,h),f=[...u.slice(h),...d].find(p=>c.includes(p));if(!f)return;s.value=u.indexOf(f)}}),()=>{let l={selectedIndex:s.value};return oe({props:Jn(t,["selectedIndex","defaultIndex","manual","vertical","onChange"]),slot:l,slots:e,attrs:n,name:"TabGroup"})}}});G({name:"TabList",props:{as:{type:[Object,String],default:"div"}},setup(t,{attrs:e,slots:n}){let r=$i("TabList");return()=>{let s={selectedIndex:r.selectedIndex.value},i={role:"tablist","aria-orientation":r.orientation.value};return oe({props:$($({},t),i),slot:s,attrs:e,slots:n,name:"TabList"})}}});G({name:"Tab",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1}},setup(t,{attrs:e,slots:n}){let r=$i("Tab"),s=`headlessui-tabs-tab-${ke()}`,i=k();He(()=>r.registerTab(i)),it(()=>r.unregisterTab(i));let o=R(()=>r.tabs.value.indexOf(i)),a=R(()=>o.value===r.selectedIndex.value);function l(d){let f=r.tabs.value.map(p=>A(p)).filter(Boolean);if(d.key===" "||d.key==="Enter"){d.preventDefault(),d.stopPropagation(),r.setSelectedIndex(o.value);return}switch(d.key){case"Home":case"PageUp":return d.preventDefault(),d.stopPropagation(),ut(f,1);case"End":case"PageDown":return d.preventDefault(),d.stopPropagation(),ut(f,8)}return Xe(r.orientation.value,{vertical(){if(d.key==="ArrowUp")return ut(f,18);if(d.key==="ArrowDown")return ut(f,20)},horizontal(){if(d.key==="ArrowLeft")return ut(f,18);if(d.key==="ArrowRight")return ut(f,20)}})}function u(){var d;(d=A(i))==null||d.focus()}function c(){var d;t.disabled||((d=A(i))==null||d.focus(),r.setSelectedIndex(o.value))}let h=Mr(R(()=>({as:t.as,type:e.type})),i);return()=>{var d,f;let p={selected:a.value},m={ref:i,onKeydown:l,onFocus:r.activation.value==="manual"?u:c,onClick:c,id:s,role:"tab",type:h.value,"aria-controls":(f=(d=r.panels.value[o.value])==null?void 0:d.value)==null?void 0:f.id,"aria-selected":a.value,tabIndex:a.value?0:-1,disabled:t.disabled?!0:void 0};return oe({props:$($({},t),m),slot:p,attrs:e,slots:n,name:"Tab"})}}});G({name:"TabPanels",props:{as:{type:[Object,String],default:"div"}},setup(t,{slots:e,attrs:n}){let r=$i("TabPanels");return()=>{let s={selectedIndex:r.selectedIndex.value};return oe({props:t,slot:s,attrs:n,slots:e,name:"TabPanels"})}}});G({name:"TabPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},setup(t,{attrs:e,slots:n}){let r=$i("TabPanel"),s=`headlessui-tabs-panel-${ke()}`,i=k();He(()=>r.registerPanel(i)),it(()=>r.unregisterPanel(i));let o=R(()=>r.panels.value.indexOf(i)),a=R(()=>o.value===r.selectedIndex.value);return()=>{var l,u;let c={selected:a.value},h={ref:i,id:s,role:"tabpanel","aria-labelledby":(u=(l=r.tabs.value[o.value])==null?void 0:l.value)==null?void 0:u.id,tabIndex:a.value?0:-1};return oe({props:$($({},t),h),slot:c,attrs:e,slots:n,features:3,visible:a.value,name:"TabPanel"})}}});function v1(t){let e={called:!1};return(...n)=>{if(!e.called)return e.called=!0,t(...n)}}function Dv(){let t=[],e=[],n={enqueue(r){e.push(r)},requestAnimationFrame(...r){let s=requestAnimationFrame(...r);n.add(()=>cancelAnimationFrame(s))},nextFrame(...r){n.requestAnimationFrame(()=>{n.requestAnimationFrame(...r)})},setTimeout(...r){let s=setTimeout(...r);n.add(()=>clearTimeout(s))},add(r){t.push(r)},dispose(){for(let r of t.splice(0))r()},async workQueue(){for(let r of e.splice(0))await r()}};return n}function xl(t,...e){t&&e.length>0&&t.classList.add(...e)}function co(t,...e){t&&e.length>0&&t.classList.remove(...e)}function y1(t,e){let n=Dv();if(!t)return n.dispose;let{transitionDuration:r,transitionDelay:s}=getComputedStyle(t),[i,o]=[r,s].map(a=>{let[l=0]=a.split(",").filter(Boolean).map(u=>u.includes("ms")?parseFloat(u):parseFloat(u)*1e3).sort((u,c)=>c-u);return l});return i!==0?n.setTimeout(()=>e("finished"),i+o):e("finished"),n.add(()=>e("cancelled")),n.dispose}function Df(t,e,n,r,s,i){let o=Dv(),a=i!==void 0?v1(i):()=>{};return co(t,...s),xl(t,...e,...n),o.nextFrame(()=>{co(t,...n),xl(t,...r),o.add(y1(t,l=>(co(t,...r,...e),xl(t,...s),a(l))))}),o.add(()=>co(t,...e,...n,...r,...s)),o.add(()=>a("cancelled")),o.dispose}function ir(t=""){return t.split(" ").filter(e=>e.trim().length>1)}var Vc=Symbol("TransitionContext");function b1(){return be(Vc,null)!==null}function _1(){let t=be(Vc,null);if(t===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return t}function w1(){let t=be(jc,null);if(t===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return t}var jc=Symbol("NestingContext");function Ba(t){return"children"in t?Ba(t.children):t.value.filter(({state:e})=>e==="visible").length>0}function Rv(t){let e=k([]),n=k(!1);He(()=>n.value=!0),it(()=>n.value=!1);function r(i,o=1){let a=e.value.findIndex(({id:l})=>l===i);a!==-1&&(Xe(o,{[0](){e.value.splice(a,1)},[1](){e.value[a].state="hidden"}}),!Ba(e)&&n.value&&(t==null||t()))}function s(i){let o=e.value.find(({id:a})=>a===i);return o?o.state!=="visible"&&(o.state="visible"):e.value.push({id:i,state:"visible"}),()=>r(i,0)}return{children:e,register:s,unregister:r}}var xv=1,E1=G({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(t,{emit:e,attrs:n,slots:r}){if(!b1()&&e1())return()=>Yt(T1,mt($({},t),{onBeforeEnter:()=>e("beforeEnter"),onAfterEnter:()=>e("afterEnter"),onBeforeLeave:()=>e("beforeLeave"),onAfterLeave:()=>e("afterLeave")}),r);let s=k(null),i=k("visible"),o=R(()=>t.unmount?0:1),{show:a,appear:l}=_1(),{register:u,unregister:c}=w1(),h={value:!0},d=ke(),f={value:!1},p=Rv(()=>{f.value||(i.value="hidden",c(d),e("afterLeave"))});He(()=>{let S=u(d);it(S)}),Ke(()=>{if(o.value===1&&!!d){if(a&&i.value!=="visible"){i.value="visible";return}Xe(i.value,{hidden:()=>c(d),visible:()=>u(d)})}});let m=ir(t.enter),y=ir(t.enterFrom),b=ir(t.enterTo),w=ir(t.entered),x=ir(t.leave),F=ir(t.leaveFrom),j=ir(t.leaveTo);He(()=>{Ke(()=>{if(i.value==="visible"){let S=A(s);if(S instanceof Comment&&S.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}})});function P(S){let ae=h.value&&!l.value,J=A(s);!J||!(J instanceof HTMLElement)||ae||(f.value=!0,a.value&&e("beforeEnter"),a.value||e("beforeLeave"),S(a.value?Df(J,m,y,b,w,pe=>{f.value=!1,pe==="finished"&&e("afterEnter")}):Df(J,x,F,j,w,pe=>{f.value=!1,pe==="finished"&&(Ba(p)||(i.value="hidden",c(d),e("afterLeave")))})))}return He(()=>{At([a,l],(S,ae,J)=>{P(J),h.value=!1},{immediate:!0})}),Ue(jc,p),Cs(R(()=>Xe(i.value,{visible:0,hidden:1}))),()=>{let Te=t,{appear:S,show:ae,enter:J,enterFrom:pe,enterTo:De,entered:H,leave:Ie,leaveFrom:Ae,leaveTo:en}=Te,Ve=Gt(Te,["appear","show","enter","enterFrom","enterTo","entered","leave","leaveFrom","leaveTo"]);return oe({props:mt($({},Ve),{ref:s}),slot:{},slots:r,attrs:n,features:xv,visible:i.value==="visible",name:"TransitionChild"})}}}),I1=E1,T1=G({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(t,{emit:e,attrs:n,slots:r}){let s=Dn(),i=R(()=>t.show===null&&s!==null?Xe(s.value,{[0]:!0,[1]:!1}):t.show);Ke(()=>{if(![!0,!1].includes(i.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let o=k(i.value?"visible":"hidden"),a=Rv(()=>{o.value="hidden"}),l={value:!0},u={show:i,appear:R(()=>t.appear||!l.value)};return He(()=>{Ke(()=>{l.value=!1,i.value?o.value="visible":Ba(a)||(o.value="hidden")})}),Ue(jc,a),Ue(Vc,u),()=>{let c=Jn(t,["show","appear","unmount"]),h={unmount:t.unmount};return oe({props:mt($({},h),{as:"template"}),slot:{},slots:mt($({},r),{default:()=>[Yt(I1,$($($({onBeforeEnter:()=>e("beforeEnter"),onAfterEnter:()=>e("afterEnter"),onBeforeLeave:()=>e("beforeLeave"),onAfterLeave:()=>e("afterLeave")},n),h),c),r.default)]}),attrs:{},features:xv,visible:o.value==="visible",name:"Transition"})}}});function A1(t,e){return Ce(),un("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[he("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19 9l-7 7-7-7"})])}function S1(t,e){return Ce(),un("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[he("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})])}function C1(t,e){return Ce(),un("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[he("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})])}const k1={class:"mx-auto w-full flex justify-between"},D1={class:"text-2xl font-bold flex items-center dark:text-gray-50 transition-colors"},R1=Ts(" Smart Seven \u{1F1EC}\u{1F1E7} "),x1={class:"py-1"},O1={class:"flex items-center"},P1=["src"],N1=G({setup(t){const e=_i(),n=nI(),r=sm(),s=R(()=>n.meta.title||"Home"),i=R(()=>e.user),o=R(()=>e.isAuthenticated),a=zI(),l=dI(a),u={async onClickProfile(){await e.logout(),await r.push("/auth/login")},onClickToggleDarkMode(){l()}};return(c,h)=>{var f;const d=J_("ripple");return Se(o)?(Ce(),tt("header",v0(Ta({key:0},c.$attrs)),[ye("div",k1,[ye("div",D1,Oi(Se(s)),1),he(Se(d1),{as:"div",class:"relative inline-block text-left"},{default:ot(()=>[ye("div",null,[he(Se(f1),{class:"inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"},{default:ot(()=>[R1,he(Se(A1),{class:"-mr-1 ml-2 h-5 w-5","aria-hidden":"true"})]),_:1})]),he(pi,{"enter-active-class":"transition ease-out duration-100","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:ot(()=>[he(Se(p1),{class:"origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"},{default:ot(()=>[ye("div",x1,[he(Se(Rl),null,{default:ot(({active:p})=>[ye("a",{href:"#",class:wn([p?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"])},"Smart Seven \u{1F1EC}\u{1F1E7}",2)]),_:1}),he(Se(Rl),null,{default:ot(({active:p})=>[ye("a",{href:"#",class:wn([p?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"])},"Smart Seven Ireland \u{1F1EE}\u{1F1EA}",2)]),_:1}),he(Se(Rl),null,{default:ot(({active:p})=>[ye("a",{href:"#",class:wn([p?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"])},"Another podcast \u{1F916}",2)]),_:1})])]),_:1})]),_:1})]),_:1}),ye("div",O1,[ye("button",{type:"button",class:"round-btn mr-2 px-1 py-1",onClick:h[0]||(h[0]=Hg((...p)=>u.onClickToggleDarkMode&&u.onClickToggleDarkMode(...p),["prevent","stop"]))},[he(pi,{mode:"out-in",name:"fade"},{default:ot(()=>[Se(a)?(Ce(),un(Se(S1),{key:0,class:"dark:text-white bg-transparent transition-colors"})):(Ce(),un(Se(C1),{key:1,class:"dark:text-white bg-transparent transition-colors"}))]),_:1})]),Ea((Ce(),tt("button",{type:"button",class:"round-btn",onClick:h[1]||(h[1]=(...p)=>u.onClickProfile&&u.onClickProfile(...p))},[ye("img",{class:"rounded-full shadow-lg",alt:"profile image",src:(f=Se(i))==null?void 0:f.thumbnailImage},null,8,P1)])),[[d]])])])],16)):rw("",!0)}}});var L1=Zn(N1,[["__scopeId","data-v-55995b9d"]]);const M1={class:"relative w-full h-full"},F1={class:"mx-auto w-full h-full"},B1=G({setup(t){return(e,n)=>{const r=mc("router-view");return Ce(),tt("div",M1,[he(L1),ye("main",F1,[he(r)])])}}});let $1=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce((e,n)=>(n&=63,n<36?e+=n.toString(36):n<62?e+=(n-26).toString(36).toUpperCase():n>62?e+="-":e+="_",e),"");var U1=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},V,zc=zc||{},te=U1||self;function qo(){}function Iu(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ui(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function V1(t){return Object.prototype.hasOwnProperty.call(t,Ol)&&t[Ol]||(t[Ol]=++j1)}var Ol="closure_uid_"+(1e9*Math.random()>>>0),j1=0;function z1(t,e,n){return t.call.apply(t.bind,arguments)}function q1(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function ct(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ct=z1:ct=q1,ct.apply(null,arguments)}function ho(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function gt(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function er(){this.s=this.s,this.o=this.o}var H1=0,K1={};er.prototype.s=!1;er.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),H1!=0)){var t=V1(this);delete K1[t]}};er.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ov=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Pv=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,s=typeof t=="string"?t.split(""):t;for(let i=0;i<r;i++)i in s&&e.call(n,s[i],i,t)};function W1(t){e:{var e=BC;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let s=0;s<n;s++)if(s in r&&e.call(void 0,r[s],s,t)){e=s;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function Rf(t){return Array.prototype.concat.apply([],arguments)}function qc(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Ho(t){return/^[\s\xa0]*$/.test(t)}var xf=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Et(t,e){return t.indexOf(e)!=-1}function Pl(t,e){return t<e?-1:t>e?1:0}var It;e:{var Of=te.navigator;if(Of){var Pf=Of.userAgent;if(Pf){It=Pf;break e}}It=""}function Hc(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Nv(t){const e={};for(const n in t)e[n]=t[n];return e}var Nf="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Lv(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<Nf.length;i++)n=Nf[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Kc(t){return Kc[" "](t),t}Kc[" "]=qo;function G1(t){var e=Y1;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var X1=Et(It,"Opera"),hs=Et(It,"Trident")||Et(It,"MSIE"),Mv=Et(It,"Edge"),Tu=Mv||hs,Fv=Et(It,"Gecko")&&!(Et(It.toLowerCase(),"webkit")&&!Et(It,"Edge"))&&!(Et(It,"Trident")||Et(It,"MSIE"))&&!Et(It,"Edge"),Q1=Et(It.toLowerCase(),"webkit")&&!Et(It,"Edge");function Bv(){var t=te.document;return t?t.documentMode:void 0}var Ko;e:{var Nl="",Ll=function(){var t=It;if(Fv)return/rv:([^\);]+)(\)|;)/.exec(t);if(Mv)return/Edge\/([\d\.]+)/.exec(t);if(hs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Q1)return/WebKit\/(\S+)/.exec(t);if(X1)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ll&&(Nl=Ll?Ll[1]:""),hs){var Ml=Bv();if(Ml!=null&&Ml>parseFloat(Nl)){Ko=String(Ml);break e}}Ko=Nl}var Y1={};function Z1(){return G1(function(){let t=0;const e=xf(String(Ko)).split("."),n=xf("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var s=e[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s[0].length==0&&i[0].length==0)break;t=Pl(s[1].length==0?0:parseInt(s[1],10),i[1].length==0?0:parseInt(i[1],10))||Pl(s[2].length==0,i[2].length==0)||Pl(s[2],i[2]),s=s[3],i=i[3]}while(t==0)}return 0<=t})}var Au;if(te.document&&hs){var Lf=Bv();Au=Lf||parseInt(Ko,10)||void 0}else Au=void 0;var J1=Au,eC=function(){if(!te.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{te.addEventListener("test",qo,e),te.removeEventListener("test",qo,e)}catch{}return t}();function bt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}bt.prototype.h=function(){this.defaultPrevented=!0};function wi(t,e){if(bt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Fv){e:{try{Kc(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:tC[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&wi.Z.h.call(this)}}gt(wi,bt);var tC={2:"touch",3:"pen",4:"mouse"};wi.prototype.h=function(){wi.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Vi="closure_listenable_"+(1e6*Math.random()|0),nC=0;function rC(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=s,this.key=++nC,this.ca=this.fa=!1}function $a(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Ua(t){this.src=t,this.g={},this.h=0}Ua.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Cu(t,e,r,s);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new rC(e,this.src,i,!!r,s),e.fa=n,t.push(e)),e};function Su(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=Ov(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&($a(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Cu(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==r)return s}return-1}var Wc="closure_lm_"+(1e6*Math.random()|0),Fl={};function $v(t,e,n,r,s){if(r&&r.once)return Vv(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)$v(t,e[i],n,r,s);return null}return n=Qc(n),t&&t[Vi]?t.N(e,n,Ui(r)?!!r.capture:!!r,s):Uv(t,e,n,!1,r,s)}function Uv(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=Ui(s)?!!s.capture:!!s,a=Xc(t);if(a||(t[Wc]=a=new Ua(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=sC(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)eC||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(zv(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function sC(){function t(n){return e.call(t.src,t.listener,n)}var e=iC;return t}function Vv(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Vv(t,e[i],n,r,s);return null}return n=Qc(n),t&&t[Vi]?t.O(e,n,Ui(r)?!!r.capture:!!r,s):Uv(t,e,n,!0,r,s)}function jv(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)jv(t,e[i],n,r,s);else r=Ui(r)?!!r.capture:!!r,n=Qc(n),t&&t[Vi]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Cu(i,n,r,s),-1<n&&($a(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Xc(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Cu(e,n,r,s)),(n=-1<t?e[t]:null)&&Gc(n))}function Gc(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[Vi])Su(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(zv(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Xc(e))?(Su(n,t),n.h==0&&(n.src=null,e[Wc]=null)):$a(t)}}}function zv(t){return t in Fl?Fl[t]:Fl[t]="on"+t}function iC(t,e){if(t.ca)t=!0;else{e=new wi(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&Gc(t),t=n.call(r,e)}return t}function Xc(t){return t=t[Wc],t instanceof Ua?t:null}var Bl="__closure_events_fn_"+(1e9*Math.random()>>>0);function Qc(t){return typeof t=="function"?t:(t[Bl]||(t[Bl]=function(e){return t.handleEvent(e)}),t[Bl])}function rt(){er.call(this),this.i=new Ua(this),this.P=this,this.I=null}gt(rt,er);rt.prototype[Vi]=!0;rt.prototype.removeEventListener=function(t,e,n,r){jv(this,t,e,n,r)};function ht(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new bt(e,t);else if(e instanceof bt)e.target=e.target||t;else{var s=e;e=new bt(r,t),Lv(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=fo(o,r,!0,e)&&s}if(o=e.g=t,s=fo(o,r,!0,e)&&s,s=fo(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=fo(o,r,!1,e)&&s}rt.prototype.M=function(){if(rt.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)$a(n[r]);delete t.g[e],t.h--}}this.I=null};rt.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};rt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function fo(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,l=o.ia||o.src;o.fa&&Su(t.i,o),s=a.call(l,r)!==!1&&s}}return s&&!r.defaultPrevented}var Yc=te.JSON.stringify;function oC(){var t=Hv;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class aC{constructor(){this.h=this.g=null}add(e,n){const r=qv.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var qv=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new lC,t=>t.reset());class lC{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function uC(t){te.setTimeout(()=>{throw t},0)}function Zc(t,e){ku||cC(),Du||(ku(),Du=!0),Hv.add(t,e)}var ku;function cC(){var t=te.Promise.resolve(void 0);ku=function(){t.then(hC)}}var Du=!1,Hv=new aC;function hC(){for(var t;t=oC();){try{t.h.call(t.g)}catch(n){uC(n)}var e=qv;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Du=!1}function Va(t,e){rt.call(this),this.h=t||1,this.g=e||te,this.j=ct(this.kb,this),this.l=Date.now()}gt(Va,rt);V=Va.prototype;V.da=!1;V.S=null;V.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),ht(this,"tick"),this.da&&(Jc(this),this.start()))}};V.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Jc(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}V.M=function(){Va.Z.M.call(this),Jc(this),delete this.g};function eh(t,e,n){if(typeof t=="function")n&&(t=ct(t,n));else if(t&&typeof t.handleEvent=="function")t=ct(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:te.setTimeout(t,e||0)}function Kv(t){t.g=eh(()=>{t.g=null,t.i&&(t.i=!1,Kv(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class dC extends er{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Kv(this)}M(){super.M(),this.g&&(te.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ei(t){er.call(this),this.h=t,this.g={}}gt(Ei,er);var Mf=[];function Wv(t,e,n,r){Array.isArray(n)||(n&&(Mf[0]=n.toString()),n=Mf);for(var s=0;s<n.length;s++){var i=$v(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Gv(t){Hc(t.g,function(e,n){this.g.hasOwnProperty(n)&&Gc(e)},t),t.g={}}Ei.prototype.M=function(){Ei.Z.M.call(this),Gv(this)};Ei.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ja(){this.g=!0}ja.prototype.Aa=function(){this.g=!1};function fC(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function pC(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Xr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+mC(t,n)+(r?" "+r:"")})}function gC(t,e){t.info(function(){return"TIMEOUT: "+e})}ja.prototype.info=function(){};function mC(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Yc(n)}catch{return e}}var Fr={},Ff=null;function za(){return Ff=Ff||new rt}Fr.Ma="serverreachability";function Xv(t){bt.call(this,Fr.Ma,t)}gt(Xv,bt);function Ii(t){const e=za();ht(e,new Xv(e,t))}Fr.STAT_EVENT="statevent";function Qv(t,e){bt.call(this,Fr.STAT_EVENT,t),this.stat=e}gt(Qv,bt);function Tt(t){const e=za();ht(e,new Qv(e,t))}Fr.Na="timingevent";function Yv(t,e){bt.call(this,Fr.Na,t),this.size=e}gt(Yv,bt);function ji(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return te.setTimeout(function(){t()},e)}var qa={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Zv={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function th(){}th.prototype.h=null;function Bf(t){return t.h||(t.h=t.i())}function Jv(){}var zi={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function nh(){bt.call(this,"d")}gt(nh,bt);function rh(){bt.call(this,"c")}gt(rh,bt);var Ru;function Ha(){}gt(Ha,th);Ha.prototype.g=function(){return new XMLHttpRequest};Ha.prototype.i=function(){return{}};Ru=new Ha;function qi(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new Ei(this),this.P=vC,t=Tu?125:void 0,this.W=new Va(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new ey}function ey(){this.i=null,this.g="",this.h=!1}var vC=45e3,xu={},Wo={};V=qi.prototype;V.setTimeout=function(t){this.P=t};function Ou(t,e,n){t.K=1,t.v=Wa(Sn(e)),t.s=n,t.U=!0,ty(t,null)}function ty(t,e){t.F=Date.now(),Hi(t),t.A=Sn(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),ly(n.h,"t",r),t.C=0,n=t.l.H,t.h=new ey,t.g=ky(t.l,n?e:null,!t.s),0<t.O&&(t.L=new dC(ct(t.Ia,t,t.g),t.O)),Wv(t.V,t.g,"readystatechange",t.gb),e=t.H?Nv(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Ii(1),fC(t.j,t.u,t.A,t.m,t.X,t.s)}V.gb=function(t){t=t.target;const e=this.L;e&&_n(t)==3?e.l():this.Ia(t)};V.Ia=function(t){try{if(t==this.g)e:{const c=_n(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>c)&&(c!=3||Tu||this.g&&(this.h.h||this.g.ga()||jf(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?Ii(3):Ii(2)),Ka(this);var n=this.g.ba();this.N=n;t:if(ny(this)){var r=jf(this.g);t="";var s=r.length,i=_n(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){dr(this),ni(this);var o="";break t}this.h.i=new te.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,pC(this.j,this.u,this.A,this.m,this.X,c,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ho(a)){var u=a;break t}}u=null}if(n=u)Xr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Pu(this,n);else{this.i=!1,this.o=3,Tt(12),dr(this),ni(this);break e}}this.U?(ry(this,c,o),Tu&&this.i&&c==3&&(Wv(this.V,this.W,"tick",this.fb),this.W.start())):(Xr(this.j,this.m,o,null),Pu(this,o)),c==4&&dr(this),this.i&&!this.I&&(c==4?Ty(this.l,this):(this.i=!1,Hi(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Tt(12)):(this.o=0,Tt(13)),dr(this),ni(this)}}}catch{}finally{}};function ny(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function ry(t,e,n){let r=!0,s;for(;!t.I&&t.C<n.length;)if(s=yC(t,n),s==Wo){e==4&&(t.o=4,Tt(14),r=!1),Xr(t.j,t.m,null,"[Incomplete Response]");break}else if(s==xu){t.o=4,Tt(15),Xr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Xr(t.j,t.m,s,null),Pu(t,s);ny(t)&&s!=Wo&&s!=xu&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Tt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),dh(e),e.L=!0,Tt(11))):(Xr(t.j,t.m,n,"[Invalid Chunked Response]"),dr(t),ni(t))}V.fb=function(){if(this.g){var t=_n(this.g),e=this.g.ga();this.C<e.length&&(Ka(this),ry(this,t,e),this.i&&t!=4&&Hi(this))}};function yC(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Wo:(n=Number(e.substring(n,r)),isNaN(n)?xu:(r+=1,r+n>e.length?Wo:(e=e.substr(r,n),t.C=r+n,e)))}V.cancel=function(){this.I=!0,dr(this)};function Hi(t){t.Y=Date.now()+t.P,sy(t,t.P)}function sy(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ji(ct(t.eb,t),e)}function Ka(t){t.B&&(te.clearTimeout(t.B),t.B=null)}V.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(gC(this.j,this.A),this.K!=2&&(Ii(3),Tt(17)),dr(this),this.o=2,ni(this)):sy(this,this.Y-t)};function ni(t){t.l.G==0||t.I||Ty(t.l,t)}function dr(t){Ka(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Jc(t.W),Gv(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Pu(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Nu(n.i,t))){if(n.I=t.N,!t.J&&Nu(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Yo(n),Qa(n);else break e;hh(n),Tt(18)}}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&n.A==0&&!n.v&&(n.v=ji(ct(n.ab,n),6e3));if(1>=hy(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else fr(n,11)}else if((t.J||n.g==t)&&Yo(n),!Ho(e))for(s=n.Ca.g.parse(e),e=0;e<s.length;e++){let u=s[e];if(n.U=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.J=u[1],n.la=u[2];const c=u[3];c!=null&&(n.ma=c,n.h.info("VER="+n.ma));const h=u[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const p=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var i=r.i;!i.g&&(Et(p,"spdy")||Et(p,"quic")||Et(p,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(oh(i,i.h),i.h=null))}if(r.D){const m=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;m&&(r.sa=m,ze(r.F,r.D,m))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=Cy(r,r.H?r.la:null,r.W),o.J){dy(r.i,o);var a=o,l=r.K;l&&a.setTimeout(l),a.B&&(Ka(a),Hi(a)),r.g=o}else Ey(r);0<n.l.length&&Ya(n)}else u[0]!="stop"&&u[0]!="close"||fr(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?fr(n,7):ch(n):u[0]!="noop"&&n.j&&n.j.wa(u),n.A=0)}}Ii(4)}catch{}}function bC(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(Iu(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function sh(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Iu(t)||typeof t=="string")Pv(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(Iu(t)||typeof t=="string"){n=[];for(var r=t.length,s=0;s<r;s++)n.push(s)}else for(s in n=[],r=0,t)n[r++]=s;r=bC(t),s=r.length;for(var i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}}function Ds(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Ds)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}V=Ds.prototype;V.R=function(){ih(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};V.T=function(){return ih(this),this.g.concat()};function ih(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];Tr(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var s={};for(n=e=0;e<t.g.length;)r=t.g[e],Tr(s,r)||(t.g[n++]=r,s[r]=1),e++;t.g.length=n}}V.get=function(t,e){return Tr(this.h,t)?this.h[t]:e};V.set=function(t,e){Tr(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};V.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var s=n[r],i=this.get(s);t.call(e,i,s,this)}};function Tr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var iy=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function _C(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Ar(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Ar){this.g=e!==void 0?e:t.g,Go(this,t.j),this.s=t.s,Xo(this,t.i),Qo(this,t.m),this.l=t.l,e=t.h;var n=new Ti;n.i=e.i,e.g&&(n.g=new Ds(e.g),n.h=e.h),$f(this,n),this.o=t.o}else t&&(n=String(t).match(iy))?(this.g=!!e,Go(this,n[1]||"",!0),this.s=ri(n[2]||""),Xo(this,n[3]||"",!0),Qo(this,n[4]),this.l=ri(n[5]||"",!0),$f(this,n[6]||"",!0),this.o=ri(n[7]||"")):(this.g=!!e,this.h=new Ti(null,this.g))}Ar.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ks(e,Uf,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ks(e,Uf,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(Ks(n,n.charAt(0)=="/"?AC:TC,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ks(n,CC)),t.join("")};function Sn(t){return new Ar(t)}function Go(t,e,n){t.j=n?ri(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Xo(t,e,n){t.i=n?ri(e,!0):e}function Qo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function $f(t,e,n){e instanceof Ti?(t.h=e,kC(t.h,t.g)):(n||(e=Ks(e,SC)),t.h=new Ti(e,t.g))}function ze(t,e,n){t.h.set(e,n)}function Wa(t){return ze(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function wC(t){return t instanceof Ar?Sn(t):new Ar(t,void 0)}function EC(t,e,n,r){var s=new Ar(null,void 0);return t&&Go(s,t),e&&Xo(s,e),n&&Qo(s,n),r&&(s.l=r),s}function ri(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ks(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,IC),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function IC(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Uf=/[#\/\?@]/g,TC=/[#\?:]/g,AC=/[#\?]/g,SC=/[#\?@]/g,CC=/#/g;function Ti(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function tr(t){t.g||(t.g=new Ds,t.h=0,t.i&&_C(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}V=Ti.prototype;V.add=function(t,e){tr(this),this.i=null,t=Rs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function oy(t,e){tr(t),e=Rs(t,e),Tr(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Tr(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&ih(t)))}function ay(t,e){return tr(t),e=Rs(t,e),Tr(t.g.h,e)}V.forEach=function(t,e){tr(this),this.g.forEach(function(n,r){Pv(n,function(s){t.call(e,s,r,this)},this)},this)};V.T=function(){tr(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var s=t[r],i=0;i<s.length;i++)n.push(e[r]);return n};V.R=function(t){tr(this);var e=[];if(typeof t=="string")ay(this,t)&&(e=Rf(e,this.g.get(Rs(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Rf(e,t[n])}return e};V.set=function(t,e){return tr(this),this.i=null,t=Rs(this,t),ay(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};V.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function ly(t,e,n){oy(t,e),0<n.length&&(t.i=null,t.g.set(Rs(t,e),qc(n)),t.h+=n.length)}V.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],s=encodeURIComponent(String(r));r=this.R(r);for(var i=0;i<r.length;i++){var o=s;r[i]!==""&&(o+="="+encodeURIComponent(String(r[i]))),t.push(o)}}return this.i=t.join("&")};function Rs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function kC(t,e){e&&!t.j&&(tr(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(oy(this,r),ly(this,s,n))},t)),t.j=e}var DC=class{constructor(t,e){this.h=t,this.g=e}};function uy(t){this.l=t||RC,te.PerformanceNavigationTiming?(t=te.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(te.g&&te.g.Ea&&te.g.Ea()&&te.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var RC=10;function cy(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function hy(t){return t.h?1:t.g?t.g.size:0}function Nu(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function oh(t,e){t.g?t.g.add(e):t.h=e}function dy(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}uy.prototype.cancel=function(){if(this.i=fy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function fy(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return qc(t.i)}function ah(){}ah.prototype.stringify=function(t){return te.JSON.stringify(t,void 0)};ah.prototype.parse=function(t){return te.JSON.parse(t,void 0)};function xC(){this.g=new ah}function OC(t,e,n){const r=n||"";try{sh(t,function(s,i){let o=s;Ui(s)&&(o=Yc(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function PC(t,e){const n=new ja;if(te.Image){const r=new Image;r.onload=ho(po,n,r,"TestLoadImage: loaded",!0,e),r.onerror=ho(po,n,r,"TestLoadImage: error",!1,e),r.onabort=ho(po,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=ho(po,n,r,"TestLoadImage: timeout",!1,e),te.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function po(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Ki(t){this.l=t.$b||null,this.j=t.ib||!1}gt(Ki,th);Ki.prototype.g=function(){return new Ga(this.l,this.j)};Ki.prototype.i=function(t){return function(){return t}}({});function Ga(t,e){rt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=lh,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}gt(Ga,rt);var lh=0;V=Ga.prototype;V.open=function(t,e){if(this.readyState!=lh)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ai(this)};V.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||te).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};V.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Wi(this)),this.readyState=lh};V.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ai(this)),this.g&&(this.readyState=3,Ai(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof te.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;py(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function py(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}V.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Wi(this):Ai(this),this.readyState==3&&py(this)}};V.Ua=function(t){this.g&&(this.response=this.responseText=t,Wi(this))};V.Ta=function(t){this.g&&(this.response=t,Wi(this))};V.ha=function(){this.g&&Wi(this)};function Wi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ai(t)}V.setRequestHeader=function(t,e){this.v.append(t,e)};V.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};V.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ai(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ga.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var NC=te.JSON.parse;function Ze(t){rt.call(this),this.headers=new Ds,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=gy,this.K=this.L=!1}gt(Ze,rt);var gy="",LC=/^https?$/i,MC=["POST","PUT"];V=Ze.prototype;V.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Ru.g(),this.C=this.u?Bf(this.u):Bf(Ru),this.g.onreadystatechange=ct(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Vf(this,i);return}t=n||"";const s=new Ds(this.headers);r&&sh(r,function(i,o){s.set(o,i)}),r=W1(s.T()),n=te.FormData&&t instanceof te.FormData,!(0<=Ov(MC,e))||r||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{yy(this),0<this.B&&((this.K=FC(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ct(this.pa,this)):this.A=eh(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Vf(this,i)}};function FC(t){return hs&&Z1()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function BC(t){return t.toLowerCase()=="content-type"}V.pa=function(){typeof zc!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ht(this,"timeout"),this.abort(8))};function Vf(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,my(t),Xa(t)}function my(t){t.D||(t.D=!0,ht(t,"complete"),ht(t,"error"))}V.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ht(this,"complete"),ht(this,"abort"),Xa(this))};V.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Xa(this,!0)),Ze.Z.M.call(this)};V.Fa=function(){this.s||(this.F||this.v||this.l?vy(this):this.cb())};V.cb=function(){vy(this)};function vy(t){if(t.h&&typeof zc!="undefined"&&(!t.C[1]||_n(t)!=4||t.ba()!=2)){if(t.v&&_n(t)==4)eh(t.Fa,0,t);else if(ht(t,"readystatechange"),_n(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var s=String(t.H).match(iy)[1]||null;if(!s&&te.self&&te.self.location){var i=te.self.location.protocol;s=i.substr(0,i.length-1)}r=!LC.test(s?s.toLowerCase():"")}n=r}if(n)ht(t,"complete"),ht(t,"success");else{t.m=6;try{var o=2<_n(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",my(t)}}finally{Xa(t)}}}}function Xa(t,e){if(t.g){yy(t);const n=t.g,r=t.C[0]?qo:null;t.g=null,t.C=null,e||ht(t,"ready");try{n.onreadystatechange=r}catch{}}}function yy(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(te.clearTimeout(t.A),t.A=null)}function _n(t){return t.g?t.g.readyState:0}V.ba=function(){try{return 2<_n(this)?this.g.status:-1}catch{return-1}};V.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};V.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),NC(e)}};function jf(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case gy:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}V.Da=function(){return this.m};V.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function $C(t){let e="";return Hc(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function uh(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=$C(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ze(t,e,n))}function js(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function by(t){this.za=0,this.l=[],this.h=new ja,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=js("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=js("baseRetryDelayMs",5e3,t),this.$a=js("retryDelaySeedMs",1e4,t),this.Ya=js("forwardChannelMaxRetries",2,t),this.ra=js("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new uy(t&&t.concurrentRequestLimit),this.Ca=new xC,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}V=by.prototype;V.ma=8;V.G=1;function ch(t){if(_y(t),t.G==3){var e=t.V++,n=Sn(t.F);ze(n,"SID",t.J),ze(n,"RID",e),ze(n,"TYPE","terminate"),Gi(t,n),e=new qi(t,t.h,e,void 0),e.K=2,e.v=Wa(Sn(n)),n=!1,te.navigator&&te.navigator.sendBeacon&&(n=te.navigator.sendBeacon(e.v.toString(),"")),!n&&te.Image&&(new Image().src=e.v,n=!0),n||(e.g=ky(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Hi(e)}Sy(t)}V.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function Qa(t){t.g&&(dh(t),t.g.cancel(),t.g=null)}function _y(t){Qa(t),t.u&&(te.clearTimeout(t.u),t.u=null),Yo(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&te.clearTimeout(t.m),t.m=null)}function $l(t,e){t.l.push(new DC(t.Za++,e)),t.G==3&&Ya(t)}function Ya(t){cy(t.i)||t.m||(t.m=!0,Zc(t.Ha,t),t.C=0)}function UC(t,e){return hy(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=ji(ct(t.Ha,t,e),Ay(t,t.C)),t.C++,!0)}V.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new qi(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=Nv(i),Lv(i,this.P)):i=this.P),this.o===null&&(s.H=i),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=wy(this,s,e),n=Sn(this.F),ze(n,"RID",t),ze(n,"CVER",22),this.D&&ze(n,"X-HTTP-Session-Id",this.D),Gi(this,n),this.o&&i&&uh(n,this.o,i),oh(this.i,s),this.Ra&&ze(n,"TYPE","init"),this.ja?(ze(n,"$req",e),ze(n,"SID","null"),s.$=!0,Ou(s,n,null)):Ou(s,n,e),this.G=2}}else this.G==3&&(t?zf(this,t):this.l.length==0||cy(this.i)||zf(this))};function zf(t,e){var n;e?n=e.m:n=t.V++;const r=Sn(t.F);ze(r,"SID",t.J),ze(r,"RID",n),ze(r,"AID",t.U),Gi(t,r),t.o&&t.s&&uh(r,t.o,t.s),n=new qi(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=wy(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),oh(t.i,n),Ou(n,r,e)}function Gi(t,e){t.j&&sh({},function(n,r){ze(e,r,n)})}function wy(t,e,n){n=Math.min(t.l.length,n);var r=t.j?ct(t.j.Oa,t.j,t):null;e:{var s=t.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let l=0;l<n;l++){let u=s[l].h;const c=s[l].g;if(u-=i,0>u)i=Math.max(0,s[l].h-100),a=!1;else try{OC(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function Ey(t){t.g||t.u||(t.Y=1,Zc(t.Ga,t),t.A=0)}function hh(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=ji(ct(t.Ga,t),Ay(t,t.A)),t.A++,!0)}V.Ga=function(){if(this.u=null,Iy(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=ji(ct(this.bb,this),t)}};V.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Tt(10),Qa(this),Iy(this))};function dh(t){t.B!=null&&(te.clearTimeout(t.B),t.B=null)}function Iy(t){t.g=new qi(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=Sn(t.oa);ze(e,"RID","rpc"),ze(e,"SID",t.J),ze(e,"CI",t.N?"0":"1"),ze(e,"AID",t.U),Gi(t,e),ze(e,"TYPE","xmlhttp"),t.o&&t.s&&uh(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Wa(Sn(e)),n.s=null,n.U=!0,ty(n,t)}V.ab=function(){this.v!=null&&(this.v=null,Qa(this),hh(this),Tt(19))};function Yo(t){t.v!=null&&(te.clearTimeout(t.v),t.v=null)}function Ty(t,e){var n=null;if(t.g==e){Yo(t),dh(t),t.g=null;var r=2}else if(Nu(t.i,e))n=e.D,dy(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;r=za(),ht(r,new Yv(r,n,e,s)),Ya(t)}else Ey(t);else if(s=e.o,s==3||s==0&&0<t.I||!(r==1&&UC(t,e)||r==2&&hh(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:fr(t,5);break;case 4:fr(t,10);break;case 3:fr(t,6);break;default:fr(t,2)}}}function Ay(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function fr(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=ct(t.jb,t);n||(n=new Ar("//www.google.com/images/cleardot.gif"),te.location&&te.location.protocol=="http"||Go(n,"https"),Wa(n)),PC(n.toString(),r)}else Tt(2);t.G=0,t.j&&t.j.va(e),Sy(t),_y(t)}V.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Tt(2)):(this.h.info("Failed to ping google.com"),Tt(1))};function Sy(t){t.G=0,t.I=-1,t.j&&((fy(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,qc(t.l),t.l.length=0),t.j.ua())}function Cy(t,e,n){let r=wC(n);if(r.i!="")e&&Xo(r,e+"."+r.i),Qo(r,r.m);else{const s=te.location;r=EC(s.protocol,e?e+"."+s.hostname:s.hostname,+s.port,n)}return t.aa&&Hc(t.aa,function(s,i){ze(r,i,s)}),e=t.D,n=t.sa,e&&n&&ze(r,e,n),ze(r,"VER",t.ma),Gi(t,r),r}function ky(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Ze(new Ki({ib:!0})):new Ze(t.qa),e.L=t.H,e}function Dy(){}V=Dy.prototype;V.xa=function(){};V.wa=function(){};V.va=function(){};V.ua=function(){};V.Oa=function(){};function Zo(){if(hs&&!(10<=Number(J1)))throw Error("Environmental error: no available transport.")}Zo.prototype.g=function(t,e){return new Bt(t,e)};function Bt(t,e){rt.call(this),this.g=new by(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Ho(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ho(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new xs(this)}gt(Bt,rt);Bt.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Zc(ct(t.hb,t,e))),Tt(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Cy(t,null,t.W),Ya(t)};Bt.prototype.close=function(){ch(this.g)};Bt.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,$l(this.g,e)}else this.v?(e={},e.__data__=Yc(t),$l(this.g,e)):$l(this.g,t)};Bt.prototype.M=function(){this.g.j=null,delete this.j,ch(this.g),delete this.g,Bt.Z.M.call(this)};function Ry(t){nh.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}gt(Ry,nh);function xy(){rh.call(this),this.status=1}gt(xy,rh);function xs(t){this.g=t}gt(xs,Dy);xs.prototype.xa=function(){ht(this.g,"a")};xs.prototype.wa=function(t){ht(this.g,new Ry(t))};xs.prototype.va=function(t){ht(this.g,new xy(t))};xs.prototype.ua=function(){ht(this.g,"b")};Zo.prototype.createWebChannel=Zo.prototype.g;Bt.prototype.send=Bt.prototype.u;Bt.prototype.open=Bt.prototype.m;Bt.prototype.close=Bt.prototype.close;qa.NO_ERROR=0;qa.TIMEOUT=8;qa.HTTP_ERROR=6;Zv.COMPLETE="complete";Jv.EventType=zi;zi.OPEN="a";zi.CLOSE="b";zi.ERROR="c";zi.MESSAGE="d";rt.prototype.listen=rt.prototype.N;Ze.prototype.listenOnce=Ze.prototype.O;Ze.prototype.getLastError=Ze.prototype.La;Ze.prototype.getLastErrorCode=Ze.prototype.Da;Ze.prototype.getStatus=Ze.prototype.ba;Ze.prototype.getResponseJson=Ze.prototype.Qa;Ze.prototype.getResponseText=Ze.prototype.ga;Ze.prototype.send=Ze.prototype.ea;var VC=function(){return new Zo},jC=function(){return za()},Ul=qa,zC=Zv,qC=Fr,qf={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},HC=Ki,go=Jv,KC=Ze;const Hf="@firebase/firestore";/**
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
 */let Os="9.6.11";/**
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
 */const Sr=new Ra("@firebase/firestore");function Kf(){return Sr.logLevel}function K(t,...e){if(Sr.logLevel<=_e.DEBUG){const n=e.map(fh);Sr.debug(`Firestore (${Os}): ${t}`,...n)}}function Xn(t,...e){if(Sr.logLevel<=_e.ERROR){const n=e.map(fh);Sr.error(`Firestore (${Os}): ${t}`,...n)}}function Wf(t,...e){if(Sr.logLevel<=_e.WARN){const n=e.map(fh);Sr.warn(`Firestore (${Os}): ${t}`,...n)}}function fh(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function se(t="Unexpected state"){const e=`FIRESTORE (${Os}) INTERNAL ASSERTION FAILED: `+t;throw Xn(e),new Error(e)}function Me(t,e){t||se()}function le(t,e){return t}/**
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
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ee extends kn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class br{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class WC{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class GC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ct.UNAUTHENTICATED))}shutdown(){}}class XC{constructor(e){this.t=e,this.currentUser=Ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new br;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new br,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{K("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(K("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new br)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(K("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Me(typeof r.accessToken=="string"),new WC(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Me(e===null||typeof e=="string"),new Ct(e)}}class QC{constructor(e,n,r){this.type="FirstParty",this.user=Ct.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const s=e.auth.getAuthHeaderValueForFirstParty([]);s&&this.headers.set("Authorization",s),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class YC{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new QC(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Ct.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ZC{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class JC{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const r=i=>{i.error!=null&&K("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.p;return this.p=i.token,K("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{K("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.g.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.g.getImmediate({optional:!0});i?s(i):K("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Me(typeof n.token=="string"),this.p=n.token,new ZC(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */class ph{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.I(r),this.T=r=>n.writeSequenceNumber(r))}I(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}/**
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
 */function ek(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */ph.A=-1;class Oy{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=ek(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function we(t,e){return t<e?-1:t>e?1:0}function ds(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class _t{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ee(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ee(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ee(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ee(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return _t.fromMillis(Date.now())}static fromDate(e){return _t.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new _t(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?we(this.nanoseconds,e.nanoseconds):we(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */function Gf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ps(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Py(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Si{constructor(e,n,r){n===void 0?n=0:n>e.length&&se(),r===void 0?r=e.length-n:r>e.length-n&&se(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Si.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Si?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class qe extends Si{construct(e,n,r){return new qe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ee(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new qe(n)}static emptyPath(){return new qe([])}}const tk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class kt extends Si{construct(e,n,r){return new kt(e,n,r)}static isValidIdentifier(e){return tk.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),kt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new kt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ee(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new ee(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new ee(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new ee(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new kt(n)}static emptyPath(){return new kt([])}}/**
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
 */class Lu{constructor(e){this.fields=e,e.sort(kt.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ds(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class pt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new pt(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new pt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return we(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}pt.EMPTY_BYTE_STRING=new pt("");const nk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Qn(t){if(Me(!!t),typeof t=="string"){let e=0;const n=nk.exec(t);if(Me(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ye(t.seconds),nanos:Ye(t.nanos)}}function Ye(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function fs(t){return typeof t=="string"?pt.fromBase64String(t):pt.fromUint8Array(t)}/**
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
 */function Ny(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ly(t){const e=t.mapValue.fields.__previous_value__;return Ny(e)?Ly(e):e}function Ci(t){const e=Qn(t.mapValue.fields.__local_write_time__.timestampValue);return new _t(e.seconds,e.nanos)}/**
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
 */class rk{constructor(e,n,r,s,i,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class ps{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ps("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ps&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function Ns(t){return t==null}function Jo(t){return t===0&&1/t==-1/0}function sk(t){return typeof t=="number"&&Number.isInteger(t)&&!Jo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class Z{constructor(e){this.path=e}static fromPath(e){return new Z(qe.fromString(e))}static fromName(e){return new Z(qe.fromString(e).popFirst(5))}static empty(){return new Z(qe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&qe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return qe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Z(new qe(e.slice()))}}function Cr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ny(t)?4:ik(t)?9:10:se()}function dn(t,e){if(t===e)return!0;const n=Cr(t);if(n!==Cr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ci(t).isEqual(Ci(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=Qn(r.timestampValue),o=Qn(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return fs(r.bytesValue).isEqual(fs(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return Ye(r.geoPointValue.latitude)===Ye(s.geoPointValue.latitude)&&Ye(r.geoPointValue.longitude)===Ye(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return Ye(r.integerValue)===Ye(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=Ye(r.doubleValue),o=Ye(s.doubleValue);return i===o?Jo(i)===Jo(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return ds(t.arrayValue.values||[],e.arrayValue.values||[],dn);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(Gf(i)!==Gf(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!dn(i[a],o[a])))return!1;return!0}(t,e);default:return se()}}function ki(t,e){return(t.values||[]).find(n=>dn(n,e))!==void 0}function gs(t,e){if(t===e)return 0;const n=Cr(t),r=Cr(e);if(n!==r)return we(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return we(t.booleanValue,e.booleanValue);case 2:return function(s,i){const o=Ye(s.integerValue||s.doubleValue),a=Ye(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Xf(t.timestampValue,e.timestampValue);case 4:return Xf(Ci(t),Ci(e));case 5:return we(t.stringValue,e.stringValue);case 6:return function(s,i){const o=fs(s),a=fs(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=we(o[l],a[l]);if(u!==0)return u}return we(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,i){const o=we(Ye(s.latitude),Ye(i.latitude));return o!==0?o:we(Ye(s.longitude),Ye(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=gs(o[l],a[l]);if(u)return u}return we(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,i){const o=s.fields||{},a=Object.keys(o),l=i.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=we(a[c],u[c]);if(h!==0)return h;const d=gs(o[a[c]],l[u[c]]);if(d!==0)return d}return we(a.length,u.length)}(t.mapValue,e.mapValue);default:throw se()}}function Xf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return we(t,e);const n=Qn(t),r=Qn(e),s=we(n.seconds,r.seconds);return s!==0?s:we(n.nanos,r.nanos)}function ts(t){return Mu(t)}function Mu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const s=Qn(r);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?fs(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Z.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let s="[",i=!0;for(const o of r.values||[])i?i=!1:s+=",",s+=Mu(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(r){const s=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const a of s)o?o=!1:i+=",",i+=`${a}:${Mu(r.fields[a])}`;return i+"}"}(t.mapValue):se();var e,n}function Fu(t){return!!t&&"integerValue"in t}function gh(t){return!!t&&"arrayValue"in t}function Qf(t){return!!t&&"nullValue"in t}function Yf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Io(t){return!!t&&"mapValue"in t}function si(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ps(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=si(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=si(t.arrayValue.values[n]);return e}return Object.assign({},t)}function ik(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Qt{constructor(e){this.value=e}static empty(){return new Qt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Io(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=si(n)}setAll(e){let n=kt.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=si(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Io(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return dn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Io(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Ps(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Qt(si(this.value))}}function My(t){const e=[];return Ps(t.fields,(n,r)=>{const s=new kt([n]);if(Io(r)){const i=My(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Lu(e)}/**
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
 */class vt{constructor(e,n,r,s,i,o){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.data=i,this.documentState=o}static newInvalidDocument(e){return new vt(e,0,de.min(),de.min(),Qt.empty(),0)}static newFoundDocument(e,n,r){return new vt(e,1,n,de.min(),r,0)}static newNoDocument(e,n){return new vt(e,2,n,de.min(),Qt.empty(),0)}static newUnknownDocument(e,n){return new vt(e,3,n,de.min(),Qt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Qt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Qt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof vt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new vt(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}function ok(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=de.fromTimestamp(r===1e9?new _t(n+1,0):new _t(n,r));return new ms(s,Z.empty(),e)}function ak(t){return new ms(t.readTime,t.key,-1)}class ms{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ms(de.min(),Z.empty(),-1)}static max(){return new ms(de.max(),Z.empty(),-1)}}function lk(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Z.comparator(t.documentKey,e.documentKey),n!==0?n:we(t.largestBatchId,e.largestBatchId))}/**
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
 */class uk{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.P=null}}function Zf(t,e=null,n=[],r=[],s=null,i=null,o=null){return new uk(t,e,n,r,s,i,o)}function mh(t){const e=le(t);if(e.P===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(s=r).field.canonicalString()+s.op.toString()+ts(s.value);var s}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Ns(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ts(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ts(r)).join(",")),e.P=n}return e.P}function ck(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${ts(r.value)}`;var r}).join(", ")}]`),Ns(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>ts(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>ts(n)).join(",")),`Target(${e})`}function vh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<t.orderBy.length;s++)if(!yk(t.orderBy[s],e.orderBy[s]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],r=e.filters[s],n.op!==r.op||!n.field.isEqual(r.field)||!dn(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ep(t.startAt,e.startAt)&&ep(t.endAt,e.endAt)}function Bu(t){return Z.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class Dt extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.V(e,n,r):new hk(e,n,r):n==="array-contains"?new pk(e,r):n==="in"?new gk(e,r):n==="not-in"?new mk(e,r):n==="array-contains-any"?new vk(e,r):new Dt(e,n,r)}static V(e,n,r){return n==="in"?new dk(e,r):new fk(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.v(gs(n,this.value)):n!==null&&Cr(this.value)===Cr(n)&&this.v(gs(n,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return se()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class hk extends Dt{constructor(e,n,r){super(e,n,r),this.key=Z.fromName(r.referenceValue)}matches(e){const n=Z.comparator(e.key,this.key);return this.v(n)}}class dk extends Dt{constructor(e,n){super(e,"in",n),this.keys=Fy("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class fk extends Dt{constructor(e,n){super(e,"not-in",n),this.keys=Fy("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Fy(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Z.fromName(r.referenceValue))}class pk extends Dt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return gh(n)&&ki(n.arrayValue,this.value)}}class gk extends Dt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ki(this.value.arrayValue,n)}}class mk extends Dt{constructor(e,n){super(e,"not-in",n)}matches(e){if(ki(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ki(this.value.arrayValue,n)}}class vk extends Dt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!gh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ki(this.value.arrayValue,r))}}class ea{constructor(e,n){this.position=e,this.inclusive=n}}class ii{constructor(e,n="asc"){this.field=e,this.dir=n}}function yk(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Jf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=Z.comparator(Z.fromName(o.referenceValue),n.key):r=gs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function ep(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!dn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Za{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.D=null,this.C=null,this.startAt,this.endAt}}function bk(t,e,n,r,s,i,o,a){return new Za(t,e,n,r,s,i,o,a)}function yh(t){return new Za(t)}function To(t){return!Ns(t.limit)&&t.limitType==="F"}function ta(t){return!Ns(t.limit)&&t.limitType==="L"}function _k(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function wk(t){for(const e of t.filters)if(e.S())return e.field;return null}function Ek(t){return t.collectionGroup!==null}function Di(t){const e=le(t);if(e.D===null){e.D=[];const n=wk(e),r=_k(e);if(n!==null&&r===null)n.isKeyField()||e.D.push(new ii(n)),e.D.push(new ii(kt.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.D.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new ii(kt.keyField(),i))}}}return e.D}function kr(t){const e=le(t);if(!e.C)if(e.limitType==="F")e.C=Zf(e.path,e.collectionGroup,Di(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Di(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new ii(i.field,o))}const r=e.endAt?new ea(e.endAt.position,!e.endAt.inclusive):null,s=e.startAt?new ea(e.startAt.position,!e.startAt.inclusive):null;e.C=Zf(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e.C}function Ik(t,e,n){return new Za(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ja(t,e){return vh(kr(t),kr(e))&&t.limitType===e.limitType}function By(t){return`${mh(kr(t))}|lt:${t.limitType}`}function $u(t){return`Query(target=${ck(kr(t))}; limitType=${t.limitType})`}function bh(t,e){return e.isFoundDocument()&&function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):Z.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,r){for(const s of n.explicitOrderBy)if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(s,i,o){const a=Jf(s,i,o);return s.inclusive?a<=0:a<0}(n.startAt,Di(n),r)||n.endAt&&!function(s,i,o){const a=Jf(s,i,o);return s.inclusive?a>=0:a>0}(n.endAt,Di(n),r))}(t,e)}function Tk(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function $y(t){return(e,n)=>{let r=!1;for(const s of Di(t)){const i=Ak(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Ak(t,e,n){const r=t.field.isKeyField()?Z.comparator(e.key,n.key):function(s,i,o){const a=i.data.field(s),l=o.data.field(s);return a!==null&&l!==null?gs(a,l):se()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return se()}}/**
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
 */function Uy(t,e){if(t.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Jo(e)?"-0":e}}function Vy(t){return{integerValue:""+t}}function Sk(t,e){return sk(e)?Vy(e):Uy(t,e)}/**
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
 */class el{constructor(){this._=void 0}}function Ck(t,e,n){return t instanceof na?function(r,s){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&(i.fields.__previous_value__=s),{mapValue:i}}(n,e):t instanceof Ri?zy(t,e):t instanceof xi?qy(t,e):function(r,s){const i=jy(r,s),o=tp(i)+tp(r.k);return Fu(i)&&Fu(r.k)?Vy(o):Uy(r.M,o)}(t,e)}function kk(t,e,n){return t instanceof Ri?zy(t,e):t instanceof xi?qy(t,e):n}function jy(t,e){return t instanceof ra?Fu(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class na extends el{}class Ri extends el{constructor(e){super(),this.elements=e}}function zy(t,e){const n=Hy(e);for(const r of t.elements)n.some(s=>dn(s,r))||n.push(r);return{arrayValue:{values:n}}}class xi extends el{constructor(e){super(),this.elements=e}}function qy(t,e){let n=Hy(e);for(const r of t.elements)n=n.filter(s=>!dn(s,r));return{arrayValue:{values:n}}}class ra extends el{constructor(e,n){super(),this.M=e,this.k=n}}function tp(t){return Ye(t.integerValue||t.doubleValue)}function Hy(t){return gh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Dk(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Ri&&r instanceof Ri||n instanceof xi&&r instanceof xi?ds(n.elements,r.elements,dn):n instanceof ra&&r instanceof ra?dn(n.k,r.k):n instanceof na&&r instanceof na}(t.transform,e.transform)}class Rk{constructor(e,n){this.version=e,this.transformResults=n}}class ns{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ns}static exists(e){return new ns(void 0,e)}static updateTime(e){return new ns(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ao(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class tl{}function xk(t,e,n){t instanceof nl?function(r,s,i){const o=r.value.clone(),a=sp(r.fieldTransforms,s,i.transformResults);o.setAll(a),s.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Xi?function(r,s,i){if(!Ao(r.precondition,s))return void s.convertToUnknownDocument(i.version);const o=sp(r.fieldTransforms,s,i.transformResults),a=s.data;a.setAll(Ky(r)),a.setAll(o),s.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(r,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Uu(t,e,n){t instanceof nl?function(r,s,i){if(!Ao(r.precondition,s))return;const o=r.value.clone(),a=ip(r.fieldTransforms,i,s);o.setAll(a),s.convertToFoundDocument(rp(s),o).setHasLocalMutations()}(t,e,n):t instanceof Xi?function(r,s,i){if(!Ao(r.precondition,s))return;const o=ip(r.fieldTransforms,i,s),a=s.data;a.setAll(Ky(r)),a.setAll(o),s.convertToFoundDocument(rp(s),a).setHasLocalMutations()}(t,e,n):function(r,s){Ao(r.precondition,s)&&s.convertToNoDocument(de.min())}(t,e)}function Ok(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=jy(r.transform,s||null);i!=null&&(n==null&&(n=Qt.empty()),n.set(r.field,i))}return n||null}function np(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&ds(n,r,(s,i)=>Dk(s,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function rp(t){return t.isFoundDocument()?t.version:de.min()}class nl extends tl{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}}class Xi extends tl{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}}function Ky(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function sp(t,e,n){const r=new Map;Me(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,kk(o,a,n[s]))}return r}function ip(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,Ck(i,o,e))}return r}class Pk extends tl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class Nk extends tl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
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
 */class Lk{constructor(e){this.count=e}}/**
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
 */var Qe,ge;function Mk(t){switch(t){default:return se();case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0}}function Wy(t){if(t===void 0)return Xn("GRPC error has no .code"),D.UNKNOWN;switch(t){case Qe.OK:return D.OK;case Qe.CANCELLED:return D.CANCELLED;case Qe.UNKNOWN:return D.UNKNOWN;case Qe.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case Qe.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case Qe.INTERNAL:return D.INTERNAL;case Qe.UNAVAILABLE:return D.UNAVAILABLE;case Qe.UNAUTHENTICATED:return D.UNAUTHENTICATED;case Qe.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case Qe.NOT_FOUND:return D.NOT_FOUND;case Qe.ALREADY_EXISTS:return D.ALREADY_EXISTS;case Qe.PERMISSION_DENIED:return D.PERMISSION_DENIED;case Qe.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case Qe.ABORTED:return D.ABORTED;case Qe.OUT_OF_RANGE:return D.OUT_OF_RANGE;case Qe.UNIMPLEMENTED:return D.UNIMPLEMENTED;case Qe.DATA_LOSS:return D.DATA_LOSS;default:return se()}}(ge=Qe||(Qe={}))[ge.OK=0]="OK",ge[ge.CANCELLED=1]="CANCELLED",ge[ge.UNKNOWN=2]="UNKNOWN",ge[ge.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ge[ge.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ge[ge.NOT_FOUND=5]="NOT_FOUND",ge[ge.ALREADY_EXISTS=6]="ALREADY_EXISTS",ge[ge.PERMISSION_DENIED=7]="PERMISSION_DENIED",ge[ge.UNAUTHENTICATED=16]="UNAUTHENTICATED",ge[ge.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ge[ge.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ge[ge.ABORTED=10]="ABORTED",ge[ge.OUT_OF_RANGE=11]="OUT_OF_RANGE",ge[ge.UNIMPLEMENTED=12]="UNIMPLEMENTED",ge[ge.INTERNAL=13]="INTERNAL",ge[ge.UNAVAILABLE=14]="UNAVAILABLE",ge[ge.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Ls{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ps(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Py(this.inner)}size(){return this.innerSize}}/**
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
 */class st{constructor(e,n){this.comparator=e,this.root=n||at.EMPTY}insert(e,n){return new st(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,at.BLACK,null,null))}remove(e){return new st(this.comparator,this.root.remove(e,this.comparator).copy(null,null,at.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new mo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new mo(this.root,e,this.comparator,!1)}getReverseIterator(){return new mo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new mo(this.root,e,this.comparator,!0)}}class mo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class at{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r!=null?r:at.RED,this.left=s!=null?s:at.EMPTY,this.right=i!=null?i:at.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new at(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,s!=null?s:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return at.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw se();const e=this.left.check();if(e!==this.right.check())throw se();return e+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw se()}get value(){throw se()}get color(){throw se()}get left(){throw se()}get right(){throw se()}copy(t,e,n,r,s){return this}insert(t,e,n){return new at(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class dt{constructor(e){this.comparator=e,this.data=new st(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new op(this.data.getIterator())}getIteratorFrom(e){return new op(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof dt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new dt(this.comparator);return n.data=e,n}}class op{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */const Fk=new st(Z.comparator);function Dr(){return Fk}const Bk=new st(Z.comparator);function Vu(){return Bk}function Vl(){return new Ls(t=>t.toString(),(t,e)=>t.isEqual(e))}const $k=new st(Z.comparator),Uk=new dt(Z.comparator);function $e(...t){let e=Uk;for(const n of t)e=e.add(n);return e}const Vk=new dt(we);function Gy(){return Vk}/**
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
 */class rl{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,Qi.createSynthesizedTargetChangeForCurrentChange(e,n)),new rl(de.min(),r,Gy(),Dr(),$e())}}class Qi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Qi(pt.EMPTY_BYTE_STRING,n,$e(),$e(),$e())}}/**
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
 */class So{constructor(e,n,r,s){this.O=e,this.removedTargetIds=n,this.key=r,this.F=s}}class Xy{constructor(e,n){this.targetId=e,this.$=n}}class Qy{constructor(e,n,r=pt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class ap{constructor(){this.B=0,this.L=up(),this.U=pt.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return this.B!==0}get j(){return this.K}W(e){e.approximateByteSize()>0&&(this.K=!0,this.U=e)}H(){let e=$e(),n=$e(),r=$e();return this.L.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:se()}}),new Qi(this.U,this.q,e,n,r)}J(){this.K=!1,this.L=up()}Y(e,n){this.K=!0,this.L=this.L.insert(e,n)}X(e){this.K=!0,this.L=this.L.remove(e)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class jk{constructor(e){this.nt=e,this.st=new Map,this.it=Dr(),this.rt=lp(),this.ot=new dt(we)}ut(e){for(const n of e.O)e.F&&e.F.isFoundDocument()?this.at(n,e.F):this.ct(n,e.key,e.F);for(const n of e.removedTargetIds)this.ct(n,e.key,e.F)}ht(e){this.forEachTarget(e,n=>{const r=this.lt(n);switch(e.state){case 0:this.ft(n)&&r.W(e.resumeToken);break;case 1:r.tt(),r.G||r.J(),r.W(e.resumeToken);break;case 2:r.tt(),r.G||this.removeTarget(n);break;case 3:this.ft(n)&&(r.et(),r.W(e.resumeToken));break;case 4:this.ft(n)&&(this.dt(n),r.W(e.resumeToken));break;default:se()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.st.forEach((r,s)=>{this.ft(s)&&n(s)})}_t(e){const n=e.targetId,r=e.$.count,s=this.wt(n);if(s){const i=s.target;if(Bu(i))if(r===0){const o=new Z(i.path);this.ct(n,o,vt.newNoDocument(o,de.min()))}else Me(r===1);else this.gt(n)!==r&&(this.dt(n),this.ot=this.ot.add(n))}}yt(e){const n=new Map;this.st.forEach((i,o)=>{const a=this.wt(o);if(a){if(i.current&&Bu(a.target)){const l=new Z(a.target.path);this.it.get(l)!==null||this.It(o,l)||this.ct(o,l,vt.newNoDocument(l,e))}i.j&&(n.set(o,i.H()),i.J())}});let r=$e();this.rt.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.wt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(i))}),this.it.forEach((i,o)=>o.setReadTime(e));const s=new rl(e,n,this.ot,this.it,r);return this.it=Dr(),this.rt=lp(),this.ot=new dt(we),s}at(e,n){if(!this.ft(e))return;const r=this.It(e,n.key)?2:0;this.lt(e).Y(n.key,r),this.it=this.it.insert(n.key,n),this.rt=this.rt.insert(n.key,this.Tt(n.key).add(e))}ct(e,n,r){if(!this.ft(e))return;const s=this.lt(e);this.It(e,n)?s.Y(n,1):s.X(n),this.rt=this.rt.insert(n,this.Tt(n).delete(e)),r&&(this.it=this.it.insert(n,r))}removeTarget(e){this.st.delete(e)}gt(e){const n=this.lt(e).H();return this.nt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Z(e){this.lt(e).Z()}lt(e){let n=this.st.get(e);return n||(n=new ap,this.st.set(e,n)),n}Tt(e){let n=this.rt.get(e);return n||(n=new dt(we),this.rt=this.rt.insert(e,n)),n}ft(e){const n=this.wt(e)!==null;return n||K("WatchChangeAggregator","Detected inactive target",e),n}wt(e){const n=this.st.get(e);return n&&n.G?null:this.nt.Et(e)}dt(e){this.st.set(e,new ap),this.nt.getRemoteKeysForTarget(e).forEach(n=>{this.ct(e,n,null)})}It(e,n){return this.nt.getRemoteKeysForTarget(e).has(n)}}function lp(){return new st(Z.comparator)}function up(){return new st(Z.comparator)}/**
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
 */const zk=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),qk=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Hk{constructor(e,n){this.databaseId=e,this.N=n}}function sa(t,e){return t.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Yy(t,e){return t.N?e.toBase64():e.toUint8Array()}function Kk(t,e){return sa(t,e.toTimestamp())}function In(t){return Me(!!t),de.fromTimestamp(function(e){const n=Qn(e);return new _t(n.seconds,n.nanos)}(t))}function _h(t,e){return function(n){return new qe(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Zy(t){const e=qe.fromString(t);return Me(tb(e)),e}function ju(t,e){return _h(t.databaseId,e.path)}function jl(t,e){const n=Zy(e);if(n.get(1)!==t.databaseId.projectId)throw new ee(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ee(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Z(Jy(n))}function zu(t,e){return _h(t.databaseId,e)}function Wk(t){const e=Zy(t);return e.length===4?qe.emptyPath():Jy(e)}function qu(t){return new qe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Jy(t){return Me(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function cp(t,e,n){return{name:ju(t,e),fields:n.value.mapValue.fields}}function Gk(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:se()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(l,u){return l.N?(Me(u===void 0||typeof u=="string"),pt.fromBase64String(u||"")):(Me(u===void 0||u instanceof Uint8Array),pt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?D.UNKNOWN:Wy(l.code);return new ee(u,l.message||"")}(o);n=new Qy(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=jl(t,r.document.name),i=In(r.document.updateTime),o=new Qt({mapValue:{fields:r.document.fields}}),a=vt.newFoundDocument(s,i,o),l=r.targetIds||[],u=r.removedTargetIds||[];n=new So(l,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=jl(t,r.document),i=r.readTime?In(r.readTime):de.min(),o=vt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new So([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=jl(t,r.document),i=r.removedTargetIds||[];n=new So([],i,s,null)}else{if(!("filter"in e))return se();{e.filter;const r=e.filter;r.targetId;const s=r.count||0,i=new Lk(s),o=r.targetId;n=new Xy(o,i)}}return n}function Xk(t,e){let n;if(e instanceof nl)n={update:cp(t,e.key,e.value)};else if(e instanceof Pk)n={delete:ju(t,e.key)};else if(e instanceof Xi)n={update:cp(t,e.key,e.data),updateMask:iD(e.fieldMask)};else{if(!(e instanceof Nk))return se();n={verify:ju(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof na)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ri)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof xi)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ra)return{fieldPath:i.field.canonicalString(),increment:o.k};throw se()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:Kk(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:se()}(t,e.precondition)),n}function Qk(t,e){return t&&t.length>0?(Me(e!==void 0),t.map(n=>function(r,s){let i=r.updateTime?In(r.updateTime):In(s);return i.isEqual(de.min())&&(i=In(s)),new Rk(i,r.transformResults||[])}(n,e))):[]}function Yk(t,e){return{documents:[zu(t,e.path)]}}function Zk(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=zu(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=zu(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(l){if(l.length===0)return;const u=l.map(c=>function(h){if(h.op==="=="){if(Yf(h.value))return{unaryFilter:{field:Hr(h.field),op:"IS_NAN"}};if(Qf(h.value))return{unaryFilter:{field:Hr(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Yf(h.value))return{unaryFilter:{field:Hr(h.field),op:"IS_NOT_NAN"}};if(Qf(h.value))return{unaryFilter:{field:Hr(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Hr(h.field),op:nD(h.op),value:h.value}}}(c));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);s&&(n.structuredQuery.where=s);const i=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:Hr(c.field),direction:tD(c.dir)}}(u))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(l,u){return l.N||Ns(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function Jk(t){let e=Wk(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Me(r===1);const c=n.from[0];c.allDescendants?s=c.collectionId:e=e.child(c.collectionId)}let i=[];n.where&&(i=eb(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new ii(Qr(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,Ns(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,d=c.values||[];return new ea(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new ea(d,h)}(n.endAt)),bk(e,s,o,i,a,"F",l,u)}function eD(t,e){const n=function(r,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return se()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function eb(t){return t?t.unaryFilter!==void 0?[sD(t)]:t.fieldFilter!==void 0?[rD(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>eb(e)).reduce((e,n)=>e.concat(n)):se():[]}function tD(t){return zk[t]}function nD(t){return qk[t]}function Hr(t){return{fieldPath:t.canonicalString()}}function Qr(t){return kt.fromServerFormat(t.fieldPath)}function rD(t){return Dt.create(Qr(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return se()}}(t.fieldFilter.op),t.fieldFilter.value)}function sD(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Qr(t.unaryFilter.field);return Dt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Qr(t.unaryFilter.field);return Dt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Qr(t.unaryFilter.field);return Dt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Qr(t.unaryFilter.field);return Dt.create(s,"!=",{nullValue:"NULL_VALUE"});default:return se()}}function iD(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function tb(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */const oD="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class aD{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&se(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(s=>s?L.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}}function Yi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class lD{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&xk(i,e,r[s])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&Uu(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&Uu(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const r=e.get(n.key),s=r;this.applyToLocalView(s),r.isValidDocument()||s.convertToNoDocument(de.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),$e())}isEqual(e){return this.batchId===e.batchId&&ds(this.mutations,e.mutations,(n,r)=>np(n,r))&&ds(this.baseMutations,e.baseMutations,(n,r)=>np(n,r))}}class wh{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Me(e.mutations.length===r.length);let s=$k;const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new wh(e,n,r,s)}}/**
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
 */class uD{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class _r{constructor(e,n,r,s,i=de.min(),o=de.min(),a=pt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new _r(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new _r(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new _r(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class cD{constructor(e){this.Jt=e}}function hD(t){const e=Jk({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ik(e,e.limit,"L"):e}/**
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
 */class dD{constructor(){this.qe=new fD}addToCollectionParentIndex(e,n){return this.qe.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.qe.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getFieldIndex(e,n){return L.resolve(null)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class fD{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new dt(qe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new dt(qe.comparator)).toArray()}}/**
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
 */class vs{constructor(e){this.mn=e}next(){return this.mn+=2,this.mn}static gn(){return new vs(0)}static yn(){return new vs(-1)}}/**
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
 */async function Zi(t){if(t.code!==D.FAILED_PRECONDITION||t.message!==oD)throw t;K("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class pD{constructor(){this.changes=new Ls(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,vt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class gD{constructor(e,n,r){this.ds=e,this.Bs=n,this.indexManager=r}Ls(e,n){return this.Bs.getAllMutationBatchesAffectingDocumentKey(e,n).next(r=>this.Us(e,n,r))}Us(e,n,r){return this.ds.getEntry(e,n).next(s=>{for(const i of r)i.applyToLocalView(s);return s})}qs(e,n){e.forEach((r,s)=>{for(const i of n)i.applyToLocalView(s)})}Ks(e,n){return this.ds.getEntries(e,n).next(r=>this.Gs(e,r).next(()=>r))}Gs(e,n){return this.Bs.getAllMutationBatchesAffectingDocumentKeys(e,n).next(r=>this.qs(n,r))}Qs(e,n,r){return function(s){return Z.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.js(e,n.path):Ek(n)?this.Ws(e,n,r):this.zs(e,n,r)}js(e,n){return this.Ls(e,new Z(n)).next(r=>{let s=Vu();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}Ws(e,n,r){const s=n.collectionGroup;let i=Vu();return this.indexManager.getCollectionParents(e,s).next(o=>L.forEach(o,a=>{const l=function(u,c){return new Za(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(s));return this.zs(e,l,r).next(u=>{u.forEach((c,h)=>{i=i.insert(c,h)})})}).next(()=>i))}zs(e,n,r){let s;return this.ds.getAllFromCollection(e,n.path,r).next(i=>(s=i,this.Bs.getAllMutationBatchesAffectingQuery(e,n))).next(i=>{for(const o of i)for(const a of o.mutations){const l=a.key;let u=s.get(l);u==null&&(u=vt.newInvalidDocument(l),s=s.insert(l,u)),Uu(a,u,o.localWriteTime),u.isFoundDocument()||(s=s.remove(l))}}).next(()=>(s.forEach((i,o)=>{bh(n,o)||(s=s.remove(i))}),s))}}/**
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
 */class Eh{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Hs=r,this.Js=s}static Ys(e,n){let r=$e(),s=$e();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Eh(e,n.fromCache,r,s)}}/**
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
 */class mD{Xs(e){this.Zs=e}Qs(e,n,r,s){return function(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}(n)||r.isEqual(de.min())?this.ti(e,n):this.Zs.Ks(e,s).next(i=>{const o=this.ei(n,i);return(To(n)||ta(n))&&this.ni(n.limitType,o,s,r)?this.ti(e,n):(Kf()<=_e.DEBUG&&K("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),$u(n)),this.Zs.Qs(e,n,ok(r,-1)).next(a=>(o.forEach(l=>{a=a.insert(l.key,l)}),a)))})}ei(e,n){let r=new dt($y(e));return n.forEach((s,i)=>{bh(e,i)&&(r=r.add(i))}),r}ni(e,n,r,s){if(r.size!==n.size)return!0;const i=e==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ti(e,n){return Kf()<=_e.DEBUG&&K("QueryEngine","Using full collection scan to execute query:",$u(n)),this.Zs.Qs(e,n,ms.min())}}/**
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
 */class vD{constructor(e,n,r,s){this.persistence=e,this.si=n,this.M=s,this.ii=new st(we),this.ri=new Ls(i=>mh(i),vh),this.oi=new Map,this.ui=e.getRemoteDocumentCache(),this.fs=e.getTargetCache(),this._s=e.getBundleCache(),this.ai(r)}ai(e){this.indexManager=this.persistence.getIndexManager(e),this.Bs=this.persistence.getMutationQueue(e,this.indexManager),this.ci=new gD(this.ui,this.Bs,this.indexManager),this.ui.setIndexManager(this.indexManager),this.si.Xs(this.ci)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ii))}}function yD(t,e,n,r){return new vD(t,e,n,r)}async function nb(t,e){const n=le(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.Bs.getAllMutationBatches(r).next(i=>(s=i,n.ai(e),n.Bs.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=$e();for(const u of s){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of i){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.ci.Ks(r,l).next(u=>({hi:u,removedBatchIds:o,addedBatchIds:a}))})})}function bD(t,e){const n=le(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.ui.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let d=L.resolve();return h.forEach(f=>{d=d.next(()=>u.getEntry(a,f)).next(p=>{const m=l.docVersions.get(f);Me(m!==null),p.version.compareTo(m)<0&&(c.applyToRemoteDocument(p,l),p.isValidDocument()&&(p.setReadTime(l.commitVersion),u.addEntry(p)))})}),d.next(()=>o.Bs.removeMutationBatch(a,c))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.Bs.performConsistencyCheck(r)).next(()=>n.ci.Ks(r,s))})}function rb(t){const e=le(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.fs.getLastRemoteSnapshotVersion(n))}function _D(t,e){const n=le(t),r=e.snapshotVersion;let s=n.ii;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ui.newChangeBuffer({trackRemovals:!0});s=n.ii;const a=[];e.targetChanges.forEach((u,c)=>{const h=s.get(c);if(!h)return;a.push(n.fs.removeMatchingKeys(i,u.removedDocuments,c).next(()=>n.fs.addMatchingKeys(i,u.addedDocuments,c)));let d=h.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(c)?d=d.withResumeToken(pt.EMPTY_BYTE_STRING,de.min()).withLastLimboFreeSnapshotVersion(de.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,r)),s=s.insert(c,d),function(f,p,m){return f.resumeToken.approximateByteSize()===0||p.snapshotVersion.toMicroseconds()-f.snapshotVersion.toMicroseconds()>=3e8?!0:m.addedDocuments.size+m.modifiedDocuments.size+m.removedDocuments.size>0}(h,d,u)&&a.push(n.fs.updateTargetData(i,d))});let l=Dr();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(wD(i,o,e.documentUpdates).next(u=>{l=u})),!r.isEqual(de.min())){const u=n.fs.getLastRemoteSnapshotVersion(i).next(c=>n.fs.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return L.waitFor(a).next(()=>o.apply(i)).next(()=>n.ci.Gs(i,l)).next(()=>l)}).then(i=>(n.ii=s,i))}function wD(t,e,n){let r=$e();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let i=Dr();return n.forEach((o,a)=>{const l=s.get(o);a.isNoDocument()&&a.version.isEqual(de.min())?(e.removeEntry(o,a.readTime),i=i.insert(o,a)):!l.isValidDocument()||a.version.compareTo(l.version)>0||a.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(a),i=i.insert(o,a)):K("LocalStore","Ignoring outdated watch update for ",o,". Current version:",l.version," Watch version:",a.version)}),i})}function ED(t,e){const n=le(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.Bs.getNextMutationBatchAfterBatchId(r,e)))}function ID(t,e){const n=le(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.fs.getTargetData(r,e).next(i=>i?(s=i,L.resolve(s)):n.fs.allocateTargetId(r).next(o=>(s=new _r(e,o,0,r.currentSequenceNumber),n.fs.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ii.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ii=n.ii.insert(r.targetId,r),n.ri.set(e,r.targetId)),r})}async function Hu(t,e,n){const r=le(t),s=r.ii.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Yi(o))throw o;K("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ii=r.ii.remove(e),r.ri.delete(s.target)}function hp(t,e,n){const r=le(t);let s=de.min(),i=$e();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=le(a),h=c.ri.get(u);return h!==void 0?L.resolve(c.ii.get(h)):c.fs.getTargetData(l,u)}(r,o,kr(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.fs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.si.Qs(o,e,n?s:de.min(),n?i:$e())).next(a=>(TD(r,Tk(e),a),{documents:a,li:i})))}function TD(t,e,n){let r=de.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.oi.set(e,r)}/**
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
 */class AD{constructor(e){this.M=e,this.wi=new Map,this.mi=new Map}getBundleMetadata(e,n){return L.resolve(this.wi.get(n))}saveBundleMetadata(e,n){var r;return this.wi.set(n.id,{id:(r=n).id,version:r.version,createTime:In(r.createTime)}),L.resolve()}getNamedQuery(e,n){return L.resolve(this.mi.get(n))}saveNamedQuery(e,n){return this.mi.set(n.name,function(r){return{name:r.name,query:hD(r.bundledQuery),readTime:In(r.readTime)}}(n)),L.resolve()}}/**
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
 */class SD{constructor(){this.overlays=new st(Z.comparator),this.gi=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.Xt(e,n,i)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.gi.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.gi.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const s=Vl(),i=n.length+1,o=new Z(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return L.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new st((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=i.get(u.largestBatchId);c===null&&(c=Vl(),i=i.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Vl(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=s)););return L.resolve(a)}Xt(e,n,r){if(r===null)return;const s=this.overlays.get(r.key);if(s!==null){const o=this.gi.get(s.largestBatchId).delete(r.key);this.gi.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new uD(n,r));let i=this.gi.get(n);i===void 0&&(i=$e(),this.gi.set(n,i)),this.gi.set(n,i.add(r.key))}}/**
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
 */class Ih{constructor(){this.yi=new dt(Je.pi),this.Ii=new dt(Je.Ti)}isEmpty(){return this.yi.isEmpty()}addReference(e,n){const r=new Je(e,n);this.yi=this.yi.add(r),this.Ii=this.Ii.add(r)}Ei(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ai(new Je(e,n))}Ri(e,n){e.forEach(r=>this.removeReference(r,n))}Pi(e){const n=new Z(new qe([])),r=new Je(n,e),s=new Je(n,e+1),i=[];return this.Ii.forEachInRange([r,s],o=>{this.Ai(o),i.push(o.key)}),i}bi(){this.yi.forEach(e=>this.Ai(e))}Ai(e){this.yi=this.yi.delete(e),this.Ii=this.Ii.delete(e)}Vi(e){const n=new Z(new qe([])),r=new Je(n,e),s=new Je(n,e+1);let i=$e();return this.Ii.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Je(e,0),r=this.yi.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Je{constructor(e,n){this.key=e,this.vi=n}static pi(e,n){return Z.comparator(e.key,n.key)||we(e.vi,n.vi)}static Ti(e,n){return we(e.vi,n.vi)||Z.comparator(e.key,n.key)}}/**
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
 */class CD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.Bs=[],this.Si=1,this.Di=new dt(Je.pi)}checkEmpty(e){return L.resolve(this.Bs.length===0)}addMutationBatch(e,n,r,s){const i=this.Si;this.Si++,this.Bs.length>0&&this.Bs[this.Bs.length-1];const o=new lD(i,n,r,s);this.Bs.push(o);for(const a of s)this.Di=this.Di.add(new Je(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.Ci(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.xi(r),i=s<0?0:s;return L.resolve(this.Bs.length>i?this.Bs[i]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.Bs.length===0?-1:this.Si-1)}getAllMutationBatches(e){return L.resolve(this.Bs.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Je(n,0),s=new Je(n,Number.POSITIVE_INFINITY),i=[];return this.Di.forEachInRange([r,s],o=>{const a=this.Ci(o.vi);i.push(a)}),L.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new dt(we);return n.forEach(s=>{const i=new Je(s,0),o=new Je(s,Number.POSITIVE_INFINITY);this.Di.forEachInRange([i,o],a=>{r=r.add(a.vi)})}),L.resolve(this.Ni(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;Z.isDocumentKey(i)||(i=i.child(""));const o=new Je(new Z(i),0);let a=new dt(we);return this.Di.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(l.vi)),!0)},o),L.resolve(this.Ni(a))}Ni(e){const n=[];return e.forEach(r=>{const s=this.Ci(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Me(this.ki(n.batchId,"removed")===0),this.Bs.shift();let r=this.Di;return L.forEach(n.mutations,s=>{const i=new Je(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Di=r})}_n(e){}containsKey(e,n){const r=new Je(n,0),s=this.Di.firstAfterOrEqual(r);return L.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.Bs.length,L.resolve()}ki(e,n){return this.xi(e)}xi(e){return this.Bs.length===0?0:e-this.Bs[0].batchId}Ci(e){const n=this.xi(e);return n<0||n>=this.Bs.length?null:this.Bs[n]}}/**
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
 */class kD{constructor(e){this.Mi=e,this.docs=new st(Z.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mi(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():vt.newInvalidDocument(n))}getEntries(e,n){let r=Dr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():vt.newInvalidDocument(s))}),L.resolve(r)}getAllFromCollection(e,n,r){let s=Dr();const i=new Z(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||lk(ak(l),r)<=0||(s=s.insert(l.key,l.mutableCopy()))}return L.resolve(s)}getAllFromCollectionGroup(e,n,r,s){se()}Oi(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new DD(this)}getSize(e){return L.resolve(this.size)}}class DD extends pD{constructor(e){super(),this.Kn=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Kn.addEntry(e,s)):this.Kn.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.Kn.getEntry(e,n)}getAllFromCache(e,n){return this.Kn.getEntries(e,n)}}/**
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
 */class RD{constructor(e){this.persistence=e,this.Fi=new Ls(n=>mh(n),vh),this.lastRemoteSnapshotVersion=de.min(),this.highestTargetId=0,this.$i=0,this.Bi=new Ih,this.targetCount=0,this.Li=vs.gn()}forEachTarget(e,n){return this.Fi.forEach((r,s)=>n(s)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.$i)}allocateTargetId(e){return this.highestTargetId=this.Li.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.$i&&(this.$i=n),L.resolve()}Tn(e){this.Fi.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Li=new vs(n),this.highestTargetId=n),e.sequenceNumber>this.$i&&(this.$i=e.sequenceNumber)}addTargetData(e,n){return this.Tn(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.Tn(n),L.resolve()}removeTargetData(e,n){return this.Fi.delete(n.target),this.Bi.Pi(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Fi.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fi.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),L.waitFor(i).next(()=>s)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.Fi.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this.Bi.Ei(n,r),L.resolve()}removeMatchingKeys(e,n,r){this.Bi.Ri(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),L.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Bi.Pi(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Bi.Vi(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this.Bi.containsKey(n))}}/**
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
 */class xD{constructor(e,n){this.Ui={},this.overlays={},this.es=new ph(0),this.ns=!1,this.ns=!0,this.referenceDelegate=e(this),this.fs=new RD(this),this.indexManager=new dD,this.ds=function(r){return new kD(r)}(r=>this.referenceDelegate.qi(r)),this.M=new cD(n),this._s=new AD(this.M)}start(){return Promise.resolve()}shutdown(){return this.ns=!1,Promise.resolve()}get started(){return this.ns}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new SD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Ui[e.toKey()];return r||(r=new CD(n,this.referenceDelegate),this.Ui[e.toKey()]=r),r}getTargetCache(){return this.fs}getRemoteDocumentCache(){return this.ds}getBundleCache(){return this._s}runTransaction(e,n,r){K("MemoryPersistence","Starting transaction:",e);const s=new OD(this.es.next());return this.referenceDelegate.Ki(),r(s).next(i=>this.referenceDelegate.Gi(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Qi(e,n){return L.or(Object.values(this.Ui).map(r=>()=>r.containsKey(e,n)))}}class OD extends aD{constructor(e){super(),this.currentSequenceNumber=e}}class Th{constructor(e){this.persistence=e,this.ji=new Ih,this.Wi=null}static zi(e){return new Th(e)}get Hi(){if(this.Wi)return this.Wi;throw se()}addReference(e,n,r){return this.ji.addReference(r,n),this.Hi.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.ji.removeReference(r,n),this.Hi.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.Hi.add(n.toString()),L.resolve()}removeTarget(e,n){this.ji.Pi(n.targetId).forEach(s=>this.Hi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Hi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ki(){this.Wi=new Set}Gi(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.Hi,r=>{const s=Z.fromPath(r);return this.Ji(e,s).next(i=>{i||n.removeEntry(s,de.min())})}).next(()=>(this.Wi=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ji(e,n).next(r=>{r?this.Hi.delete(n.toString()):this.Hi.add(n.toString())})}qi(e){return 0}Ji(e,n){return L.or([()=>L.resolve(this.ji.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Qi(e,n)])}}class dp{constructor(){this.activeTargetIds=Gy()}Zi(e){this.activeTargetIds=this.activeTargetIds.add(e)}tr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class PD{constructor(){this.$r=new dp,this.Br={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.$r.Zi(e),this.Br[e]||"not-current"}updateQueryState(e,n,r){this.Br[e]=n}removeLocalQueryTarget(e){this.$r.tr(e)}isLocalQueryTarget(e){return this.$r.activeTargetIds.has(e)}clearQueryState(e){delete this.Br[e]}getAllActiveQueryTargets(){return this.$r.activeTargetIds}isActiveQueryTarget(e){return this.$r.activeTargetIds.has(e)}start(){return this.$r=new dp,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class ND{Lr(e){}shutdown(){}}/**
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
 */class fp{constructor(){this.Ur=()=>this.qr(),this.Kr=()=>this.Gr(),this.Qr=[],this.jr()}Lr(e){this.Qr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Kr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Kr)}qr(){K("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Qr)e(0)}Gr(){K("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Qr)e(1)}static vt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const LD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class MD{constructor(e){this.Wr=e.Wr,this.zr=e.zr}Hr(e){this.Jr=e}Yr(e){this.Xr=e}onMessage(e){this.Zr=e}close(){this.zr()}send(e){this.Wr(e)}eo(){this.Jr()}no(e){this.Xr(e)}so(e){this.Zr(e)}}/**
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
 */class FD extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.io=n+"://"+e.host,this.ro="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}oo(e,n,r,s,i){const o=this.uo(e,n);K("RestConnection","Sending: ",o,r);const a={};return this.ao(a,s,i),this.co(e,o,a,r).then(l=>(K("RestConnection","Received: ",l),l),l=>{throw Wf("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}ho(e,n,r,s,i){return this.oo(e,n,r,s,i)}ao(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Os,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}uo(e,n){const r=LD[e];return`${this.io}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,n,r,s){return new Promise((i,o)=>{const a=new KC;a.listenOnce(zC.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Ul.NO_ERROR:const u=a.getResponseJson();K("Connection","XHR received:",JSON.stringify(u)),i(u);break;case Ul.TIMEOUT:K("Connection",'RPC "'+e+'" timed out'),o(new ee(D.DEADLINE_EXCEEDED,"Request time out"));break;case Ul.HTTP_ERROR:const c=a.getStatus();if(K("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(f){const p=f.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(p)>=0?p:D.UNKNOWN}(h.status);o(new ee(d,h.message))}else o(new ee(D.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new ee(D.UNAVAILABLE,"Connection failed."));break;default:se()}}finally{K("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(s);a.send(n,"POST",l,r,15)})}lo(e,n,r){const s=[this.io,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=VC(),o=jC(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new HC({})),this.ao(a.initMessageHeaders,n,r),_m()||wm()||tT()||Em()||nT()||Ic()||(a.httpHeadersOverwriteParam="$httpHeaders");const l=s.join("");K("Connection","Creating WebChannel: "+l,a);const u=i.createWebChannel(l,a);let c=!1,h=!1;const d=new MD({Wr:p=>{h?K("Connection","Not sending because WebChannel is closed:",p):(c||(K("Connection","Opening WebChannel transport."),u.open(),c=!0),K("Connection","WebChannel sending:",p),u.send(p))},zr:()=>u.close()}),f=(p,m,y)=>{p.listen(m,b=>{try{y(b)}catch(w){setTimeout(()=>{throw w},0)}})};return f(u,go.EventType.OPEN,()=>{h||K("Connection","WebChannel transport opened.")}),f(u,go.EventType.CLOSE,()=>{h||(h=!0,K("Connection","WebChannel transport closed"),d.no())}),f(u,go.EventType.ERROR,p=>{h||(h=!0,Wf("Connection","WebChannel transport errored:",p),d.no(new ee(D.UNAVAILABLE,"The operation could not be completed")))}),f(u,go.EventType.MESSAGE,p=>{var m;if(!h){const y=p.data[0];Me(!!y);const b=y,w=b.error||((m=b[0])===null||m===void 0?void 0:m.error);if(w){K("Connection","WebChannel received error:",w);const x=w.status;let F=function(P){const S=Qe[P];if(S!==void 0)return Wy(S)}(x),j=w.message;F===void 0&&(F=D.INTERNAL,j="Unknown error status: "+x+" with message "+w.message),h=!0,d.no(new ee(F,j)),u.close()}else K("Connection","WebChannel received:",y),d.so(y)}}),f(o,qC.STAT_EVENT,p=>{p.stat===qf.PROXY?K("Connection","Detected buffering proxy"):p.stat===qf.NOPROXY&&K("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.eo()},0),d}}function zl(){return typeof document!="undefined"?document:null}/**
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
 */function sl(t){return new Hk(t,!0)}class sb{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Yn=e,this.timerId=n,this.fo=r,this._o=s,this.wo=i,this.mo=0,this.yo=null,this.po=Date.now(),this.reset()}reset(){this.mo=0}Io(){this.mo=this.wo}To(e){this.cancel();const n=Math.floor(this.mo+this.Eo()),r=Math.max(0,Date.now()-this.po),s=Math.max(0,n-r);s>0&&K("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.mo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.yo=this.Yn.enqueueAfterDelay(this.timerId,s,()=>(this.po=Date.now(),e())),this.mo*=this._o,this.mo<this.fo&&(this.mo=this.fo),this.mo>this.wo&&(this.mo=this.wo)}Ao(){this.yo!==null&&(this.yo.skipDelay(),this.yo=null)}cancel(){this.yo!==null&&(this.yo.cancel(),this.yo=null)}Eo(){return(Math.random()-.5)*this.mo}}/**
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
 */class ib{constructor(e,n,r,s,i,o,a,l){this.Yn=e,this.Ro=r,this.Po=s,this.bo=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Vo=0,this.vo=null,this.So=null,this.stream=null,this.Do=new sb(e,n)}Co(){return this.state===1||this.state===5||this.xo()}xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.No()}async stop(){this.Co()&&await this.close(0)}ko(){this.state=0,this.Do.reset()}Mo(){this.xo()&&this.vo===null&&(this.vo=this.Yn.enqueueAfterDelay(this.Ro,6e4,()=>this.Oo()))}Fo(e){this.$o(),this.stream.send(e)}async Oo(){if(this.xo())return this.close(0)}$o(){this.vo&&(this.vo.cancel(),this.vo=null)}Bo(){this.So&&(this.So.cancel(),this.So=null)}async close(e,n){this.$o(),this.Bo(),this.Do.cancel(),this.Vo++,e!==4?this.Do.reset():n&&n.code===D.RESOURCE_EXHAUSTED?(Xn(n.toString()),Xn("Using maximum backoff delay to prevent overloading the backend."),this.Do.Io()):n&&n.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Lo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Yr(n)}Lo(){}auth(){this.state=1;const e=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Vo===n&&this.qo(r,s)},r=>{e(()=>{const s=new ee(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Ko(s)})})}qo(e,n){const r=this.Uo(this.Vo);this.stream=this.Go(e,n),this.stream.Hr(()=>{r(()=>(this.state=2,this.So=this.Yn.enqueueAfterDelay(this.Po,1e4,()=>(this.xo()&&(this.state=3),Promise.resolve())),this.listener.Hr()))}),this.stream.Yr(s=>{r(()=>this.Ko(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}No(){this.state=5,this.Do.To(async()=>{this.state=0,this.start()})}Ko(e){return K("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return n=>{this.Yn.enqueueAndForget(()=>this.Vo===e?n():(K("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class BD extends ib{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.M=i}Go(e,n){return this.bo.lo("Listen",e,n)}onMessage(e){this.Do.reset();const n=Gk(this.M,e),r=function(s){if(!("targetChange"in s))return de.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?de.min():i.readTime?In(i.readTime):de.min()}(e);return this.listener.Qo(n,r)}jo(e){const n={};n.database=qu(this.M),n.addTarget=function(s,i){let o;const a=i.target;return o=Bu(a)?{documents:Yk(s,a)}:{query:Zk(s,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Yy(s,i.resumeToken):i.snapshotVersion.compareTo(de.min())>0&&(o.readTime=sa(s,i.snapshotVersion.toTimestamp())),o}(this.M,e);const r=eD(this.M,e);r&&(n.labels=r),this.Fo(n)}Wo(e){const n={};n.database=qu(this.M),n.removeTarget=e,this.Fo(n)}}class $D extends ib{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.M=i,this.zo=!1}get Ho(){return this.zo}start(){this.zo=!1,this.lastStreamToken=void 0,super.start()}Lo(){this.zo&&this.Jo([])}Go(e,n){return this.bo.lo("Write",e,n)}onMessage(e){if(Me(!!e.streamToken),this.lastStreamToken=e.streamToken,this.zo){this.Do.reset();const n=Qk(e.writeResults,e.commitTime),r=In(e.commitTime);return this.listener.Yo(r,n)}return Me(!e.writeResults||e.writeResults.length===0),this.zo=!0,this.listener.Xo()}Zo(){const e={};e.database=qu(this.M),this.Fo(e)}Jo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Xk(this.M,r))};this.Fo(n)}}/**
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
 */class UD extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.bo=r,this.M=s,this.tu=!1}eu(){if(this.tu)throw new ee(D.FAILED_PRECONDITION,"The client has already been terminated.")}oo(e,n,r){return this.eu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.bo.oo(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new ee(D.UNKNOWN,s.toString())})}ho(e,n,r){return this.eu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.bo.ho(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new ee(D.UNKNOWN,s.toString())})}terminate(){this.tu=!0}}class VD{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.nu=0,this.su=null,this.iu=!0}ru(){this.nu===0&&(this.ou("Unknown"),this.su=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.su=null,this.uu("Backend didn't respond within 10 seconds."),this.ou("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.ou("Unknown"):(this.nu++,this.nu>=1&&(this.cu(),this.uu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ou("Offline")))}set(e){this.cu(),this.nu=0,e==="Online"&&(this.iu=!1),this.ou(e)}ou(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}uu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.iu?(Xn(n),this.iu=!1):K("OnlineStateTracker",n)}cu(){this.su!==null&&(this.su.cancel(),this.su=null)}}/**
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
 */class jD{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.hu=[],this.lu=new Map,this.fu=new Set,this.du=[],this._u=i,this._u.Lr(o=>{r.enqueueAndForget(async()=>{Br(this)&&(K("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=le(a);l.fu.add(4),await Ji(l),l.wu.set("Unknown"),l.fu.delete(4),await il(l)}(this))})}),this.wu=new VD(r,s)}}async function il(t){if(Br(t))for(const e of t.du)await e(!0)}async function Ji(t){for(const e of t.du)await e(!1)}function ob(t,e){const n=le(t);n.lu.has(e.targetId)||(n.lu.set(e.targetId,e),Ch(n)?Sh(n):Ms(n).xo()&&Ah(n,e))}function ab(t,e){const n=le(t),r=Ms(n);n.lu.delete(e),r.xo()&&lb(n,e),n.lu.size===0&&(r.xo()?r.Mo():Br(n)&&n.wu.set("Unknown"))}function Ah(t,e){t.mu.Z(e.targetId),Ms(t).jo(e)}function lb(t,e){t.mu.Z(e),Ms(t).Wo(e)}function Sh(t){t.mu=new jk({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.lu.get(e)||null}),Ms(t).start(),t.wu.ru()}function Ch(t){return Br(t)&&!Ms(t).Co()&&t.lu.size>0}function Br(t){return le(t).fu.size===0}function ub(t){t.mu=void 0}async function zD(t){t.lu.forEach((e,n)=>{Ah(t,e)})}async function qD(t,e){ub(t),Ch(t)?(t.wu.au(e),Sh(t)):t.wu.set("Unknown")}async function HD(t,e,n){if(t.wu.set("Online"),e instanceof Qy&&e.state===2&&e.cause)try{await async function(r,s){const i=s.cause;for(const o of s.targetIds)r.lu.has(o)&&(await r.remoteSyncer.rejectListen(o,i),r.lu.delete(o),r.mu.removeTarget(o))}(t,e)}catch(r){K("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ia(t,r)}else if(e instanceof So?t.mu.ut(e):e instanceof Xy?t.mu._t(e):t.mu.ht(e),!n.isEqual(de.min()))try{const r=await rb(t.localStore);n.compareTo(r)>=0&&await function(s,i){const o=s.mu.yt(i);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=s.lu.get(l);u&&s.lu.set(l,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const l=s.lu.get(a);if(!l)return;s.lu.set(a,l.withResumeToken(pt.EMPTY_BYTE_STRING,l.snapshotVersion)),lb(s,a);const u=new _r(l.target,a,1,l.sequenceNumber);Ah(s,u)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){K("RemoteStore","Failed to raise snapshot:",r),await ia(t,r)}}async function ia(t,e,n){if(!Yi(e))throw e;t.fu.add(1),await Ji(t),t.wu.set("Offline"),n||(n=()=>rb(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{K("RemoteStore","Retrying IndexedDB access"),await n(),t.fu.delete(1),await il(t)})}function cb(t,e){return e().catch(n=>ia(t,n,e))}async function ol(t){const e=le(t),n=Yn(e);let r=e.hu.length>0?e.hu[e.hu.length-1].batchId:-1;for(;KD(e);)try{const s=await ED(e.localStore,r);if(s===null){e.hu.length===0&&n.Mo();break}r=s.batchId,WD(e,s)}catch(s){await ia(e,s)}hb(e)&&db(e)}function KD(t){return Br(t)&&t.hu.length<10}function WD(t,e){t.hu.push(e);const n=Yn(t);n.xo()&&n.Ho&&n.Jo(e.mutations)}function hb(t){return Br(t)&&!Yn(t).Co()&&t.hu.length>0}function db(t){Yn(t).start()}async function GD(t){Yn(t).Zo()}async function XD(t){const e=Yn(t);for(const n of t.hu)e.Jo(n.mutations)}async function QD(t,e,n){const r=t.hu.shift(),s=wh.from(r,e,n);await cb(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await ol(t)}async function YD(t,e){e&&Yn(t).Ho&&await async function(n,r){if(s=r.code,Mk(s)&&s!==D.ABORTED){const i=n.hu.shift();Yn(n).ko(),await cb(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,r)),await ol(n)}var s}(t,e),hb(t)&&db(t)}async function pp(t,e){const n=le(t);n.asyncQueue.verifyOperationInProgress(),K("RemoteStore","RemoteStore received new credentials");const r=Br(n);n.fu.add(3),await Ji(n),r&&n.wu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.fu.delete(3),await il(n)}async function ZD(t,e){const n=le(t);e?(n.fu.delete(2),await il(n)):e||(n.fu.add(2),await Ji(n),n.wu.set("Unknown"))}function Ms(t){return t.gu||(t.gu=function(e,n,r){const s=le(e);return s.eu(),new BD(n,s.bo,s.authCredentials,s.appCheckCredentials,s.M,r)}(t.datastore,t.asyncQueue,{Hr:zD.bind(null,t),Yr:qD.bind(null,t),Qo:HD.bind(null,t)}),t.du.push(async e=>{e?(t.gu.ko(),Ch(t)?Sh(t):t.wu.set("Unknown")):(await t.gu.stop(),ub(t))})),t.gu}function Yn(t){return t.yu||(t.yu=function(e,n,r){const s=le(e);return s.eu(),new $D(n,s.bo,s.authCredentials,s.appCheckCredentials,s.M,r)}(t.datastore,t.asyncQueue,{Hr:GD.bind(null,t),Yr:YD.bind(null,t),Xo:XD.bind(null,t),Yo:QD.bind(null,t)}),t.du.push(async e=>{e?(t.yu.ko(),await ol(t)):(await t.yu.stop(),t.hu.length>0&&(K("RemoteStore",`Stopping write stream with ${t.hu.length} pending writes`),t.hu=[]))})),t.yu}/**
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
 */class kh{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new br,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new kh(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ee(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Dh(t,e){if(Xn("AsyncQueue",`${e}: ${t}`),Yi(t))return new ee(D.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class rs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||Z.comparator(n.key,r.key):(n,r)=>Z.comparator(n.key,r.key),this.keyedMap=Vu(),this.sortedSet=new st(this.comparator)}static emptySet(e){return new rs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof rs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new rs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class gp{constructor(){this.pu=new st(Z.comparator)}track(e){const n=e.doc.key,r=this.pu.get(n);r?e.type!==0&&r.type===3?this.pu=this.pu.insert(n,e):e.type===3&&r.type!==1?this.pu=this.pu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.pu=this.pu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.pu=this.pu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.pu=this.pu.remove(n):e.type===1&&r.type===2?this.pu=this.pu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.pu=this.pu.insert(n,{type:2,doc:e.doc}):se():this.pu=this.pu.insert(n,e)}Iu(){const e=[];return this.pu.inorderTraversal((n,r)=>{e.push(r)}),e}}class ys{constructor(e,n,r,s,i,o,a,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l}static fromInitialDocuments(e,n,r,s){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new ys(e,n,rs.emptySet(n),i,r,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ja(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class JD{constructor(){this.Tu=void 0,this.listeners=[]}}class eR{constructor(){this.queries=new Ls(e=>By(e),Ja),this.onlineState="Unknown",this.Eu=new Set}}async function tR(t,e){const n=le(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new JD),s)try{i.Tu=await n.onListen(r)}catch(o){const a=Dh(o,`Initialization of query '${$u(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.Au(n.onlineState),i.Tu&&e.Ru(i.Tu)&&Rh(n)}async function nR(t,e){const n=le(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function rR(t,e){const n=le(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Ru(s)&&(r=!0);o.Tu=s}}r&&Rh(n)}function sR(t,e,n){const r=le(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function Rh(t){t.Eu.forEach(e=>{e.next()})}class iR{constructor(e,n,r){this.query=e,this.Pu=n,this.bu=!1,this.Vu=null,this.onlineState="Unknown",this.options=r||{}}Ru(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ys(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.bu?this.vu(e)&&(this.Pu.next(e),n=!0):this.Su(e,this.onlineState)&&(this.Du(e),n=!0),this.Vu=e,n}onError(e){this.Pu.error(e)}Au(e){this.onlineState=e;let n=!1;return this.Vu&&!this.bu&&this.Su(this.Vu,e)&&(this.Du(this.Vu),n=!0),n}Su(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Cu||!r)&&(!e.docs.isEmpty()||n==="Offline")}vu(e){if(e.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Du(e){e=ys.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Pu.next(e)}}/**
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
 */class fb{constructor(e){this.key=e}}class pb{constructor(e){this.key=e}}class oR{constructor(e,n){this.query=e,this.$u=n,this.Bu=null,this.current=!1,this.Lu=$e(),this.mutatedKeys=$e(),this.Uu=$y(e),this.qu=new rs(this.Uu)}get Ku(){return this.$u}Gu(e,n){const r=n?n.Qu:new gp,s=n?n.qu:this.qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=To(this.query)&&s.size===this.query.limit?s.last():null,u=ta(this.query)&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((c,h)=>{const d=s.get(c),f=bh(this.query,h)?h:null,p=!!d&&this.mutatedKeys.has(d.key),m=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let y=!1;d&&f?d.data.isEqual(f.data)?p!==m&&(r.track({type:3,doc:f}),y=!0):this.ju(d,f)||(r.track({type:2,doc:f}),y=!0,(l&&this.Uu(f,l)>0||u&&this.Uu(f,u)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),y=!0):d&&!f&&(r.track({type:1,doc:d}),y=!0,(l||u)&&(a=!0)),y&&(f?(o=o.add(f),i=m?i.add(c):i.delete(c)):(o=o.delete(c),i=i.delete(c)))}),To(this.query)||ta(this.query))for(;o.size>this.query.limit;){const c=To(this.query)?o.last():o.first();o=o.delete(c.key),i=i.delete(c.key),r.track({type:1,doc:c})}return{qu:o,Qu:r,ni:a,mutatedKeys:i}}ju(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.qu;this.qu=e.qu,this.mutatedKeys=e.mutatedKeys;const i=e.Qu.Iu();i.sort((u,c)=>function(h,d){const f=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return se()}};return f(h)-f(d)}(u.type,c.type)||this.Uu(u.doc,c.doc)),this.Wu(r);const o=n?this.zu():[],a=this.Lu.size===0&&this.current?1:0,l=a!==this.Bu;return this.Bu=a,i.length!==0||l?{snapshot:new ys(this.query,e.qu,s,i,e.mutatedKeys,a===0,l,!1),Hu:o}:{Hu:o}}Au(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({qu:this.qu,Qu:new gp,mutatedKeys:this.mutatedKeys,ni:!1},!1)):{Hu:[]}}Ju(e){return!this.$u.has(e)&&!!this.qu.has(e)&&!this.qu.get(e).hasLocalMutations}Wu(e){e&&(e.addedDocuments.forEach(n=>this.$u=this.$u.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.$u=this.$u.delete(n)),this.current=e.current)}zu(){if(!this.current)return[];const e=this.Lu;this.Lu=$e(),this.qu.forEach(r=>{this.Ju(r.key)&&(this.Lu=this.Lu.add(r.key))});const n=[];return e.forEach(r=>{this.Lu.has(r)||n.push(new pb(r))}),this.Lu.forEach(r=>{e.has(r)||n.push(new fb(r))}),n}Yu(e){this.$u=e.li,this.Lu=$e();const n=this.Gu(e.documents);return this.applyChanges(n,!0)}Xu(){return ys.fromInitialDocuments(this.query,this.qu,this.mutatedKeys,this.Bu===0)}}class aR{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class lR{constructor(e){this.key=e,this.Zu=!1}}class uR{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.ta={},this.ea=new Ls(a=>By(a),Ja),this.na=new Map,this.sa=new Set,this.ia=new st(Z.comparator),this.ra=new Map,this.oa=new Ih,this.ua={},this.aa=new Map,this.ca=vs.yn(),this.onlineState="Unknown",this.ha=void 0}get isPrimaryClient(){return this.ha===!0}}async function cR(t,e){const n=_R(t);let r,s;const i=n.ea.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Xu();else{const o=await ID(n.localStore,kr(e));n.isPrimaryClient&&ob(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await hR(n,e,r,a==="current")}return s}async function hR(t,e,n,r){t.la=(c,h,d)=>async function(f,p,m,y){let b=p.view.Gu(m);b.ni&&(b=await hp(f.localStore,p.query,!1).then(({documents:F})=>p.view.Gu(F,b)));const w=y&&y.targetChanges.get(p.targetId),x=p.view.applyChanges(b,f.isPrimaryClient,w);return vp(f,p.targetId,x.Hu),x.snapshot}(t,c,h,d);const s=await hp(t.localStore,e,!0),i=new oR(e,s.li),o=i.Gu(s.documents),a=Qi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),l=i.applyChanges(o,t.isPrimaryClient,a);vp(t,n,l.Hu);const u=new aR(e,n,i);return t.ea.set(e,u),t.na.has(n)?t.na.get(n).push(e):t.na.set(n,[e]),l.snapshot}async function dR(t,e){const n=le(t),r=n.ea.get(e),s=n.na.get(r.targetId);if(s.length>1)return n.na.set(r.targetId,s.filter(i=>!Ja(i,e))),void n.ea.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Hu(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),ab(n.remoteStore,r.targetId),Ku(n,r.targetId)}).catch(Zi)):(Ku(n,r.targetId),await Hu(n.localStore,r.targetId,!0))}async function fR(t,e,n){const r=wR(t);try{const s=await function(i,o){const a=le(i),l=_t.now(),u=o.reduce((h,d)=>h.add(d.key),$e());let c;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.ci.Ks(h,u).next(d=>{c=d;const f=[];for(const p of o){const m=Ok(p,c.get(p.key));m!=null&&f.push(new Xi(p.key,m,My(m.value.mapValue),ns.exists(!0)))}return a.Bs.addMutationBatch(h,l,f,o)})).then(h=>(h.applyToLocalDocumentSet(c),{batchId:h.batchId,changes:c}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(i,o,a){let l=i.ua[i.currentUser.toKey()];l||(l=new st(we)),l=l.insert(o,a),i.ua[i.currentUser.toKey()]=l}(r,s.batchId,n),await eo(r,s.changes),await ol(r.remoteStore)}catch(s){const i=Dh(s,"Failed to persist write");n.reject(i)}}async function gb(t,e){const n=le(t);try{const r=await _D(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.ra.get(i);o&&(Me(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Zu=!0:s.modifiedDocuments.size>0?Me(o.Zu):s.removedDocuments.size>0&&(Me(o.Zu),o.Zu=!1))}),await eo(n,r,e)}catch(r){await Zi(r)}}function mp(t,e,n){const r=le(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ea.forEach((i,o)=>{const a=o.view.Au(e);a.snapshot&&s.push(a.snapshot)}),function(i,o){const a=le(i);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.Au(o)&&(l=!0)}),l&&Rh(a)}(r.eventManager,e),s.length&&r.ta.Qo(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function pR(t,e,n){const r=le(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.ra.get(e),i=s&&s.key;if(i){let o=new st(Z.comparator);o=o.insert(i,vt.newNoDocument(i,de.min()));const a=$e().add(i),l=new rl(de.min(),new Map,new dt(we),o,a);await gb(r,l),r.ia=r.ia.remove(i),r.ra.delete(e),xh(r)}else await Hu(r.localStore,e,!1).then(()=>Ku(r,e,n)).catch(Zi)}async function gR(t,e){const n=le(t),r=e.batch.batchId;try{const s=await bD(n.localStore,e);vb(n,r,null),mb(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await eo(n,s)}catch(s){await Zi(s)}}async function mR(t,e,n){const r=le(t);try{const s=await function(i,o){const a=le(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.Bs.lookupMutationBatch(l,o).next(c=>(Me(c!==null),u=c.keys(),a.Bs.removeMutationBatch(l,c))).next(()=>a.Bs.performConsistencyCheck(l)).next(()=>a.ci.Ks(l,u))})}(r.localStore,e);vb(r,e,n),mb(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await eo(r,s)}catch(s){await Zi(s)}}function mb(t,e){(t.aa.get(e)||[]).forEach(n=>{n.resolve()}),t.aa.delete(e)}function vb(t,e,n){const r=le(t);let s=r.ua[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.ua[r.currentUser.toKey()]=s}}function Ku(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.na.get(e))t.ea.delete(r),n&&t.ta.fa(r,n);t.na.delete(e),t.isPrimaryClient&&t.oa.Pi(e).forEach(r=>{t.oa.containsKey(r)||yb(t,r)})}function yb(t,e){t.sa.delete(e.path.canonicalString());const n=t.ia.get(e);n!==null&&(ab(t.remoteStore,n),t.ia=t.ia.remove(e),t.ra.delete(n),xh(t))}function vp(t,e,n){for(const r of n)r instanceof fb?(t.oa.addReference(r.key,e),vR(t,r)):r instanceof pb?(K("SyncEngine","Document no longer in limbo: "+r.key),t.oa.removeReference(r.key,e),t.oa.containsKey(r.key)||yb(t,r.key)):se()}function vR(t,e){const n=e.key,r=n.path.canonicalString();t.ia.get(n)||t.sa.has(r)||(K("SyncEngine","New document in limbo: "+n),t.sa.add(r),xh(t))}function xh(t){for(;t.sa.size>0&&t.ia.size<t.maxConcurrentLimboResolutions;){const e=t.sa.values().next().value;t.sa.delete(e);const n=new Z(qe.fromString(e)),r=t.ca.next();t.ra.set(r,new lR(n)),t.ia=t.ia.insert(n,r),ob(t.remoteStore,new _r(kr(yh(n.path)),r,2,ph.A))}}async function eo(t,e,n){const r=le(t),s=[],i=[],o=[];r.ea.isEmpty()||(r.ea.forEach((a,l)=>{o.push(r.la(l,e,n).then(u=>{if(u){r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u.fromCache?"not-current":"current"),s.push(u);const c=Eh.Ys(l.targetId,u);i.push(c)}}))}),await Promise.all(o),r.ta.Qo(s),await async function(a,l){const u=le(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>L.forEach(l,h=>L.forEach(h.Hs,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>L.forEach(h.Js,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!Yi(c))throw c;K("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.ii.get(h),f=d.snapshotVersion,p=d.withLastLimboFreeSnapshotVersion(f);u.ii=u.ii.insert(h,p)}}}(r.localStore,i))}async function yR(t,e){const n=le(t);if(!n.currentUser.isEqual(e)){K("SyncEngine","User change. New user:",e.toKey());const r=await nb(n.localStore,e);n.currentUser=e,function(s,i){s.aa.forEach(o=>{o.forEach(a=>{a.reject(new ee(D.CANCELLED,i))})}),s.aa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await eo(n,r.hi)}}function bR(t,e){const n=le(t),r=n.ra.get(e);if(r&&r.Zu)return $e().add(r.key);{let s=$e();const i=n.na.get(e);if(!i)return s;for(const o of i){const a=n.ea.get(o);s=s.unionWith(a.view.Ku)}return s}}function _R(t){const e=le(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=gb.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=bR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=pR.bind(null,e),e.ta.Qo=rR.bind(null,e.eventManager),e.ta.fa=sR.bind(null,e.eventManager),e}function wR(t){const e=le(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=gR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=mR.bind(null,e),e}class ER{constructor(){this.synchronizeTabs=!1}async initialize(e){this.M=sl(e.databaseInfo.databaseId),this.sharedClientState=this._a(e),this.persistence=this.wa(e),await this.persistence.start(),this.gcScheduler=this.ma(e),this.localStore=this.ga(e)}ma(e){return null}ga(e){return yD(this.persistence,new mD,e.initialUser,this.M)}wa(e){return new xD(Th.zi,this.M)}_a(e){return new PD}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class IR{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>mp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=yR.bind(null,this.syncEngine),await ZD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new eR}createDatastore(e){const n=sl(e.databaseInfo.databaseId),r=(s=e.databaseInfo,new FD(s));var s;return function(i,o,a,l){return new UD(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,s=e.asyncQueue,i=a=>mp(this.syncEngine,a,0),o=fp.vt()?new fp:new ND,new jD(n,r,s,i,o);var n,r,s,i,o}createSyncEngine(e,n){return function(r,s,i,o,a,l,u){const c=new uR(r,s,i,o,a,l);return u&&(c.ha=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=le(e);K("RemoteStore","RemoteStore shutting down."),n.fu.add(5),await Ji(n),n._u.shutdown(),n.wu.set("Unknown")}(this.remoteStore)}}/**
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
 */class TR{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.pa(this.observer.next,e)}error(e){this.observer.error?this.pa(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Ia(){this.muted=!0}pa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class AR{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Ct.UNAUTHENTICATED,this.clientId=Oy.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{K("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(K("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ee(D.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new br;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Dh(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function SR(t,e){t.asyncQueue.verifyOperationInProgress(),K("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await nb(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function CR(t,e){t.asyncQueue.verifyOperationInProgress();const n=await kR(t);K("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>pp(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>pp(e.remoteStore,i)),t.onlineComponents=e}async function kR(t){return t.offlineComponents||(K("FirestoreClient","Using default OfflineComponentProvider"),await SR(t,new ER)),t.offlineComponents}async function bb(t){return t.onlineComponents||(K("FirestoreClient","Using default OnlineComponentProvider"),await CR(t,new IR)),t.onlineComponents}function DR(t){return bb(t).then(e=>e.syncEngine)}async function yp(t){const e=await bb(t),n=e.eventManager;return n.onListen=cR.bind(null,e.syncEngine),n.onUnlisten=dR.bind(null,e.syncEngine),n}const bp=new Map;/**
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
 */function _b(t,e,n){if(!n)throw new ee(D.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function RR(t,e,n,r){if(e===!0&&r===!0)throw new ee(D.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function _p(t){if(!Z.isDocumentKey(t))throw new ee(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function wp(t){if(Z.isDocumentKey(t))throw new ee(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Oh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":se()}function oi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ee(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Oh(t);throw new ee(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Ep{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new ee(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ee(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,RR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Ph{constructor(e,n,r){this._authCredentials=n,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ep({}),this._settingsFrozen=!1,e instanceof ps?this._databaseId=e:(this._app=e,this._databaseId=function(s){if(!Object.prototype.hasOwnProperty.apply(s.options,["projectId"]))throw new ee(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ps(s.options.projectId)}(e))}get app(){if(!this._app)throw new ee(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new ee(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ep(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new GC;switch(n.type){case"gapi":const r=n.client;return Me(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new YC(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new ee(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=bp.get(e);n&&(K("ComponentProvider","Removing Datastore"),bp.delete(e),n.terminate())}(this),Promise.resolve()}}/**
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
 */class Nt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Hn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Nt(this.firestore,e,this._key)}}class al{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new al(this.firestore,e,this._query)}}class Hn extends al{constructor(e,n,r){super(e,n,yh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Nt(this.firestore,null,new Z(e))}withConverter(e){return new Hn(this.firestore,e,this._path)}}function xR(t,e,...n){if(t=Ft(t),_b("collection","path",e),t instanceof Ph){const r=qe.fromString(e,...n);return wp(r),new Hn(t,null,r)}{if(!(t instanceof Nt||t instanceof Hn))throw new ee(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(qe.fromString(e,...n));return wp(r),new Hn(t.firestore,null,r)}}function Ip(t,e,...n){if(t=Ft(t),arguments.length===1&&(e=Oy.R()),_b("doc","path",e),t instanceof Ph){const r=qe.fromString(e,...n);return _p(r),new Nt(t,null,new Z(r))}{if(!(t instanceof Nt||t instanceof Hn))throw new ee(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(qe.fromString(e,...n));return _p(r),new Nt(t.firestore,t instanceof Hn?t.converter:null,new Z(r))}}/**
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
 */class OR{constructor(){this.ka=Promise.resolve(),this.Ma=[],this.Oa=!1,this.Fa=[],this.$a=null,this.Ba=!1,this.La=!1,this.Ua=[],this.Do=new sb(this,"async_queue_retry"),this.qa=()=>{const n=zl();n&&K("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Do.Ao()};const e=zl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qa)}get isShuttingDown(){return this.Oa}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ka(),this.Ga(e)}enterRestrictedMode(e){if(!this.Oa){this.Oa=!0,this.La=e||!1;const n=zl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qa)}}enqueue(e){if(this.Ka(),this.Oa)return new Promise(()=>{});const n=new br;return this.Ga(()=>this.Oa&&this.La?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ma.push(e),this.Qa()))}async Qa(){if(this.Ma.length!==0){try{await this.Ma[0](),this.Ma.shift(),this.Do.reset()}catch(e){if(!Yi(e))throw e;K("AsyncQueue","Operation failed with retryable error: "+e)}this.Ma.length>0&&this.Do.To(()=>this.Qa())}}Ga(e){const n=this.ka.then(()=>(this.Ba=!0,e().catch(r=>{this.$a=r,this.Ba=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw Xn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ba=!1,r))));return this.ka=n,n}enqueueAfterDelay(e,n,r){this.Ka(),this.Ua.indexOf(e)>-1&&(n=0);const s=kh.createAndSchedule(this,e,n,r,i=>this.ja(i));return this.Fa.push(s),s}Ka(){this.$a&&se()}verifyOperationInProgress(){}async Wa(){let e;do e=this.ka,await e;while(e!==this.ka)}za(e){for(const n of this.Fa)if(n.timerId===e)return!0;return!1}Ha(e){return this.Wa().then(()=>{this.Fa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Fa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Wa()})}Ja(e){this.Ua.push(e)}ja(e){const n=this.Fa.indexOf(e);this.Fa.splice(n,1)}}function Tp(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const s of n)if(s in r&&typeof r[s]=="function")return!0;return!1}(t,["next","error","complete"])}class oa extends Ph{constructor(e,n,r){super(e,n,r),this.type="firestore",this._queue=new OR,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Eb(this),this._firestoreClient.terminate()}}function Wu(t=Ac()){return Lr(t,"firestore").getImmediate()}function wb(t){return t._firestoreClient||Eb(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Eb(t){var e;const n=t._freezeSettings(),r=function(s,i,o,a){return new rk(s,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new AR(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
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
 */class Nh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ee(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new kt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class bs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new bs(pt.fromBase64String(e))}catch(n){throw new ee(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new bs(pt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Ib{constructor(e){this._methodName=e}}/**
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
 */class Lh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ee(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ee(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return we(this._lat,e._lat)||we(this._long,e._long)}}/**
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
 */const PR=/^__.*__$/;class NR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Xi(e,this.data,this.fieldMask,n,this.fieldTransforms):new nl(e,this.data,n,this.fieldTransforms)}}function Tb(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw se()}}class Mh{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.M=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ya(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Xa(){return this.settings.Xa}Za(e){return new Mh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}tc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Za({path:r,ec:!1});return s.nc(e),s}sc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Za({path:r,ec:!1});return s.Ya(),s}ic(e){return this.Za({path:void 0,ec:!0})}rc(e){return aa(e,this.settings.methodName,this.settings.oc||!1,this.path,this.settings.uc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ya(){if(this.path)for(let e=0;e<this.path.length;e++)this.nc(this.path.get(e))}nc(e){if(e.length===0)throw this.rc("Document fields must not be empty");if(Tb(this.Xa)&&PR.test(e))throw this.rc('Document fields cannot begin and end with "__"')}}class LR{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.M=r||sl(e)}ac(e,n,r,s=!1){return new Mh({Xa:e,methodName:n,uc:r,path:kt.emptyPath(),ec:!1,oc:s},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function MR(t){const e=t._freezeSettings(),n=sl(t._databaseId);return new LR(t._databaseId,!!e.ignoreUndefinedProperties,n)}function FR(t,e,n,r,s,i={}){const o=t.ac(i.merge||i.mergeFields?2:0,e,n,s);kb("Data must be an object, but it was:",o,r);const a=Sb(r,o);let l,u;if(i.merge)l=new Lu(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const c=[];for(const h of i.mergeFields){const d=BR(e,h,n);if(!o.contains(d))throw new ee(D.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);UR(c,d)||c.push(d)}l=new Lu(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new NR(new Qt(a),l,u)}function Ab(t,e){if(Cb(t=Ft(t)))return kb("Unsupported field value:",e,t),Sb(t,e);if(t instanceof Ib)return function(n,r){if(!Tb(r.Xa))throw r.rc(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.rc(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ec&&e.Xa!==4)throw e.rc("Nested arrays are not supported");return function(n,r){const s=[];let i=0;for(const o of n){let a=Ab(o,r.ic(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(t,e)}return function(n,r){if((n=Ft(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Sk(r.M,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=_t.fromDate(n);return{timestampValue:sa(r.M,s)}}if(n instanceof _t){const s=new _t(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:sa(r.M,s)}}if(n instanceof Lh)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof bs)return{bytesValue:Yy(r.M,n._byteString)};if(n instanceof Nt){const s=r.databaseId,i=n.firestore._databaseId;if(!i.isEqual(s))throw r.rc(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:_h(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.rc(`Unsupported field value: ${Oh(n)}`)}(t,e)}function Sb(t,e){const n={};return Py(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ps(t,(r,s)=>{const i=Ab(s,e.tc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Cb(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof _t||t instanceof Lh||t instanceof bs||t instanceof Nt||t instanceof Ib)}function kb(t,e,n){if(!Cb(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Oh(n);throw r==="an object"?e.rc(t+" a custom object"):e.rc(t+" "+r)}}function BR(t,e,n){if((e=Ft(e))instanceof Nh)return e._internalPath;if(typeof e=="string")return Db(t,e);throw aa("Field path arguments must be of type string or ",t,!1,void 0,n)}const $R=new RegExp("[~\\*/\\[\\]]");function Db(t,e,n){if(e.search($R)>=0)throw aa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Nh(...e.split("."))._internalPath}catch{throw aa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function aa(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new ee(D.INVALID_ARGUMENT,a+t+l)}function UR(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Rb{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Nt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new VR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(xb("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class VR extends Rb{data(){return super.data()}}function xb(t,e){return typeof e=="string"?Db(t,e):e instanceof Nh?e._internalPath:e._delegate._internalPath}/**
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
 */class Ws{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ob extends Rb{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Co(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(xb("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Co extends Ob{data(e={}){return super.data(e)}}class jR{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ws(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Co(this._firestore,this._userDataWriter,r.key,r,new Ws(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ee(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let i=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new Co(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Ws(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:i++}))}{let i=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new Co(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Ws(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:zR(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function zR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return se()}}/**
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
 */function qR(t){if(ta(t)&&t.explicitOrderBy.length===0)throw new ee(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
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
 */class HR{convertValue(e,n="none"){switch(Cr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ye(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(fs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw se()}}convertObject(e,n){const r={};return Ps(e.fields,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new Lh(Ye(e.latitude),Ye(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Ly(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ci(e));default:return null}}convertTimestamp(e){const n=Qn(e);return new _t(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=qe.fromString(e);Me(tb(r));const s=new ps(r.get(1),r.get(3)),i=new Z(r.popFirst(5));return s.isEqual(n)||Xn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function KR(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Pb extends HR{constructor(e){super(),this.firestore=e}convertBytes(e){return new bs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Nt(this.firestore,null,n)}}function WR(t,e,n){t=oi(t,Nt);const r=oi(t.firestore,oa),s=KR(t.converter,e,n);return XR(r,[FR(MR(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,ns.none())])}function GR(t,...e){var n,r,s;t=Ft(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Tp(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Tp(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let l,u,c;if(t instanceof Nt)u=oi(t.firestore,oa),c=yh(t._key.path),l={next:h=>{e[o]&&e[o](QR(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=oi(t,al);u=oi(h.firestore,oa),c=h._query;const d=new Pb(u);l={next:f=>{e[o]&&e[o](new jR(u,d,h,f))},error:e[o+1],complete:e[o+2]},qR(t._query)}return function(h,d,f,p){const m=new TR(p),y=new iR(d,m,f);return h.asyncQueue.enqueueAndForget(async()=>tR(await yp(h),y)),()=>{m.Ia(),h.asyncQueue.enqueueAndForget(async()=>nR(await yp(h),y))}}(wb(u),c,a,l)}function XR(t,e){return function(n,r){const s=new br;return n.asyncQueue.enqueueAndForget(async()=>fR(await DR(n),r,s)),s.promise}(wb(t),e)}function QR(t,e,n){const r=n.docs.get(e._key),s=new Pb(t);return new Ob(t,s,e._key,r,new Ws(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Os=n})(Ni),cn(new Jt("firestore",(n,{options:r})=>{const s=n.getProvider("app").getImmediate(),i=new oa(s,new XC(n.getProvider("auth-internal")),new JC(n.getProvider("app-check-internal")));return r=Object.assign({useFetchStreams:e},r),i._setSettings(r),i},"PUBLIC")),zt(Hf,"3.4.8",t),zt(Hf,"3.4.8","esm2017")})();const YR=Ec("item",{state:()=>({itemList:[]}),actions:{async addItem(t,e,n){const r=$1(),s=!1,i=mt($({},t),{id:r,shared:s});return this.itemList.push(i),this.saveData(e,n)},async removeItem(t,e,n){const r=this.itemList.findIndex(s=>s.id===t.id);if(r<0)throw new Error(`Can't find item [${t.id}]`);return this.itemList.splice(r,1),this.saveData(e,n)},async updateItem(t,e,n){return this.saveData(e,n)},async saveData(t,e){const n=Wu(),r=Ip(xR(n,t),e);return WR(r,{items:this.itemList})},connect(t,e){const n=Wu();GR(Ip(n,t,e),r=>{var s,i;this.itemList=(i=(s=r.data())==null?void 0:s.items)!=null?i:[]})}},getters:{getList:t=>t.itemList,getSlotList:t=>e=>t.itemList.filter(n=>n.slot===e)}});const ZR={},JR={class:"divide-y"};function ex(t,e){return Ce(),tt("ul",JR,[Aa(t.$slots,"default",{},void 0,!0)])}var Nb=Zn(ZR,[["render",ex],["__scopeId","data-v-3b882242"]]);const tx={},nx={class:"py-2"};function rx(t,e){return Ce(),tt("li",nx,[Aa(t.$slots,"default")])}var Lb=Zn(tx,[["render",rx]]),sx=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,ix=/[\0-\x1F\x7F-\x9F]/,ox=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,ax=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,lx=function(t){var e={};e.src_Any=sx.source,e.src_Cc=ix.source,e.src_Z=ox.source,e.src_P=ax.source,e.src_ZPCc=[e.src_Z,e.src_P,e.src_Cc].join("|"),e.src_ZCc=[e.src_Z,e.src_Cc].join("|");var n="[><\uFF5C]";return e.src_pseudo_letter="(?:(?!"+n+"|"+e.src_ZPCc+")"+e.src_Any+")",e.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",e.src_auth="(?:(?:(?!"+e.src_ZCc+"|[@/\\[\\]()]).)+@)?",e.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",e.src_host_terminator="(?=$|"+n+"|"+e.src_ZPCc+")(?!-|_|:\\d|\\.-|\\.(?!$|"+e.src_ZPCc+"))",e.src_path="(?:[/?#](?:(?!"+e.src_ZCc+"|"+n+`|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!`+e.src_ZCc+"|\\]).)*\\]|\\((?:(?!"+e.src_ZCc+"|[)]).)*\\)|\\{(?:(?!"+e.src_ZCc+'|[}]).)*\\}|\\"(?:(?!'+e.src_ZCc+`|["]).)+\\"|\\'(?:(?!`+e.src_ZCc+"|[']).)+\\'|\\'(?="+e.src_pseudo_letter+"|[-]).|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!"+e.src_ZCc+"|[.]).|"+(t&&t["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+",(?!"+e.src_ZCc+").|;(?!"+e.src_ZCc+").|\\!+(?!"+e.src_ZCc+"|[!]).|\\?(?!"+e.src_ZCc+"|[?]).)+|\\/)?",e.src_email_name='[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*',e.src_xn="xn--[a-z0-9\\-]{1,59}",e.src_domain_root="(?:"+e.src_xn+"|"+e.src_pseudo_letter+"{1,63})",e.src_domain="(?:"+e.src_xn+"|(?:"+e.src_pseudo_letter+")|(?:"+e.src_pseudo_letter+"(?:-|"+e.src_pseudo_letter+"){0,61}"+e.src_pseudo_letter+"))",e.src_host="(?:(?:(?:(?:"+e.src_domain+")\\.)*"+e.src_domain+"))",e.tpl_host_fuzzy="(?:"+e.src_ip4+"|(?:(?:(?:"+e.src_domain+")\\.)+(?:%TLDS%)))",e.tpl_host_no_ip_fuzzy="(?:(?:(?:"+e.src_domain+")\\.)+(?:%TLDS%))",e.src_host_strict=e.src_host+e.src_host_terminator,e.tpl_host_fuzzy_strict=e.tpl_host_fuzzy+e.src_host_terminator,e.src_host_port_strict=e.src_host+e.src_port+e.src_host_terminator,e.tpl_host_port_fuzzy_strict=e.tpl_host_fuzzy+e.src_port+e.src_host_terminator,e.tpl_host_port_no_ip_fuzzy_strict=e.tpl_host_no_ip_fuzzy+e.src_port+e.src_host_terminator,e.tpl_host_fuzzy_test="localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+e.src_ZPCc+"|>|$))",e.tpl_email_fuzzy="(^|"+n+'|"|\\(|'+e.src_ZCc+")("+e.src_email_name+"@"+e.tpl_host_fuzzy_strict+")",e.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|"+e.src_ZPCc+"))((?![$+<=>^`|\uFF5C])"+e.tpl_host_port_fuzzy_strict+e.src_path+")",e.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|"+e.src_ZPCc+"))((?![$+<=>^`|\uFF5C])"+e.tpl_host_port_no_ip_fuzzy_strict+e.src_path+")",e};function Gu(t){var e=Array.prototype.slice.call(arguments,1);return e.forEach(function(n){!n||Object.keys(n).forEach(function(r){t[r]=n[r]})}),t}function ll(t){return Object.prototype.toString.call(t)}function ux(t){return ll(t)==="[object String]"}function cx(t){return ll(t)==="[object Object]"}function hx(t){return ll(t)==="[object RegExp]"}function Ap(t){return ll(t)==="[object Function]"}function dx(t){return t.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}var Mb={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function fx(t){return Object.keys(t||{}).reduce(function(e,n){return e||Mb.hasOwnProperty(n)},!1)}var px={"http:":{validate:function(t,e,n){var r=t.slice(e);return n.re.http||(n.re.http=new RegExp("^\\/\\/"+n.re.src_auth+n.re.src_host_port_strict+n.re.src_path,"i")),n.re.http.test(r)?r.match(n.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(t,e,n){var r=t.slice(e);return n.re.no_http||(n.re.no_http=new RegExp("^"+n.re.src_auth+"(?:localhost|(?:(?:"+n.re.src_domain+")\\.)+"+n.re.src_domain_root+")"+n.re.src_port+n.re.src_host_terminator+n.re.src_path,"i")),n.re.no_http.test(r)?e>=3&&t[e-3]===":"||e>=3&&t[e-3]==="/"?0:r.match(n.re.no_http)[0].length:0}},"mailto:":{validate:function(t,e,n){var r=t.slice(e);return n.re.mailto||(n.re.mailto=new RegExp("^"+n.re.src_email_name+"@"+n.re.src_host_strict,"i")),n.re.mailto.test(r)?r.match(n.re.mailto)[0].length:0}}},gx="a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",mx="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|\u0440\u0444".split("|");function vx(t){t.__index__=-1,t.__text_cache__=""}function yx(t){return function(e,n){var r=e.slice(n);return t.test(r)?r.match(t)[0].length:0}}function Sp(){return function(t,e){e.normalize(t)}}function la(t){var e=t.re=lx(t.__opts__),n=t.__tlds__.slice();t.onCompile(),t.__tlds_replaced__||n.push(gx),n.push(e.src_xn),e.src_tlds=n.join("|");function r(a){return a.replace("%TLDS%",e.src_tlds)}e.email_fuzzy=RegExp(r(e.tpl_email_fuzzy),"i"),e.link_fuzzy=RegExp(r(e.tpl_link_fuzzy),"i"),e.link_no_ip_fuzzy=RegExp(r(e.tpl_link_no_ip_fuzzy),"i"),e.host_fuzzy_test=RegExp(r(e.tpl_host_fuzzy_test),"i");var s=[];t.__compiled__={};function i(a,l){throw new Error('(LinkifyIt) Invalid schema "'+a+'": '+l)}Object.keys(t.__schemas__).forEach(function(a){var l=t.__schemas__[a];if(l!==null){var u={validate:null,link:null};if(t.__compiled__[a]=u,cx(l)){hx(l.validate)?u.validate=yx(l.validate):Ap(l.validate)?u.validate=l.validate:i(a,l),Ap(l.normalize)?u.normalize=l.normalize:l.normalize?i(a,l):u.normalize=Sp();return}if(ux(l)){s.push(a);return}i(a,l)}}),s.forEach(function(a){!t.__compiled__[t.__schemas__[a]]||(t.__compiled__[a].validate=t.__compiled__[t.__schemas__[a]].validate,t.__compiled__[a].normalize=t.__compiled__[t.__schemas__[a]].normalize)}),t.__compiled__[""]={validate:null,normalize:Sp()};var o=Object.keys(t.__compiled__).filter(function(a){return a.length>0&&t.__compiled__[a]}).map(dx).join("|");t.re.schema_test=RegExp("(^|(?!_)(?:[><\uFF5C]|"+e.src_ZPCc+"))("+o+")","i"),t.re.schema_search=RegExp("(^|(?!_)(?:[><\uFF5C]|"+e.src_ZPCc+"))("+o+")","ig"),t.re.pretest=RegExp("("+t.re.schema_test.source+")|("+t.re.host_fuzzy_test.source+")|@","i"),vx(t)}function bx(t,e){var n=t.__index__,r=t.__last_index__,s=t.__text_cache__.slice(n,r);this.schema=t.__schema__.toLowerCase(),this.index=n+e,this.lastIndex=r+e,this.raw=s,this.text=s,this.url=s}function Cp(t,e){var n=new bx(t,e);return t.__compiled__[n.schema].normalize(n,t),n}function Kt(t,e){if(!(this instanceof Kt))return new Kt(t,e);e||fx(t)&&(e=t,t={}),this.__opts__=Gu({},Mb,e),this.__index__=-1,this.__last_index__=-1,this.__schema__="",this.__text_cache__="",this.__schemas__=Gu({},px,t),this.__compiled__={},this.__tlds__=mx,this.__tlds_replaced__=!1,this.re={},la(this)}Kt.prototype.add=function(e,n){return this.__schemas__[e]=n,la(this),this};Kt.prototype.set=function(e){return this.__opts__=Gu(this.__opts__,e),this};Kt.prototype.test=function(e){if(this.__text_cache__=e,this.__index__=-1,!e.length)return!1;var n,r,s,i,o,a,l,u,c;if(this.re.schema_test.test(e)){for(l=this.re.schema_search,l.lastIndex=0;(n=l.exec(e))!==null;)if(i=this.testSchemaAt(e,n[2],l.lastIndex),i){this.__schema__=n[2],this.__index__=n.index+n[1].length,this.__last_index__=n.index+n[0].length+i;break}}return this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&(u=e.search(this.re.host_fuzzy_test),u>=0&&(this.__index__<0||u<this.__index__)&&(r=e.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))!==null&&(o=r.index+r[1].length,(this.__index__<0||o<this.__index__)&&(this.__schema__="",this.__index__=o,this.__last_index__=r.index+r[0].length))),this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&(c=e.indexOf("@"),c>=0&&(s=e.match(this.re.email_fuzzy))!==null&&(o=s.index+s[1].length,a=s.index+s[0].length,(this.__index__<0||o<this.__index__||o===this.__index__&&a>this.__last_index__)&&(this.__schema__="mailto:",this.__index__=o,this.__last_index__=a))),this.__index__>=0};Kt.prototype.pretest=function(e){return this.re.pretest.test(e)};Kt.prototype.testSchemaAt=function(e,n,r){return this.__compiled__[n.toLowerCase()]?this.__compiled__[n.toLowerCase()].validate(e,r,this):0};Kt.prototype.match=function(e){var n=0,r=[];this.__index__>=0&&this.__text_cache__===e&&(r.push(Cp(this,n)),n=this.__last_index__);for(var s=n?e.slice(n):e;this.test(s);)r.push(Cp(this,n)),s=s.slice(this.__last_index__),n+=this.__last_index__;return r.length?r:null};Kt.prototype.tlds=function(e,n){return e=Array.isArray(e)?e:[e],n?(this.__tlds__=this.__tlds__.concat(e).sort().filter(function(r,s,i){return r!==i[s-1]}).reverse(),la(this),this):(this.__tlds__=e.slice(),this.__tlds_replaced__=!0,la(this),this)};Kt.prototype.normalize=function(e){e.schema||(e.url="http://"+e.url),e.schema==="mailto:"&&!/^mailto:/i.test(e.url)&&(e.url="mailto:"+e.url)};Kt.prototype.onCompile=function(){};var _x=Kt;const wx={};function Ex(t,e){return Ce(),tt("button",Ta({class:"text-white font-bold px-1 rounded transition-colors"},t.$attrs),[Aa(t.$slots,"default")],16)}var kp=Zn(wx,[["render",Ex]]);const Ix={class:"flex justify-end"},Tx=Ts(" \u{1F5D1} "),Ax=G({props:{item:{type:Object,default:null}},emits:["delete","update","save","toggle"],setup(t,{emit:e}){const n=t,r=_x(),s=a=>{var l;n.item.text=((l=i.value)==null?void 0:l.innerText)||"",e("update",n.item)},i=k(null),o=R(()=>{const a=r.match(n.item.text);return((a==null?void 0:a.reduce((l,u)=>l.replace(u.raw,`<a onclick="window.open('${u.url}', '_blank').focus()" href="${u.url}">${u.raw}</a>`),n.item.text))||n.item.text).replace(/\n/g,"<br/>")});return(a,l)=>(Ce(),tt(lt,null,[(Ce(),un(Z_("p"),{onFocusout:s,contenteditable:"true",class:"prose prose-a:text-blue-600",innerHTML:Se(o),ref_key:"element",ref:i},null,8,["innerHTML"])),ye("div",Ix,[he(kp,{title:"Delete",onClick:l[0]||(l[0]=u=>e("delete",t.item))},{default:ot(()=>[Tx]),_:1}),he(kp,{onClick:l[1]||(l[1]=u=>e("toggle",t.item)),title:"Share"},{default:ot(()=>[Ts(Oi(t.item.shared?"\u{1F645}\u200D\u2642\uFE0F":"\u{1F481}"),1)]),_:1})])],64))}});const Sx={class:"block text-sm font-bold mb-2"},Cx=["type","placeholder"],kx=G({props:{label:{default:""},type:{default:"text"},modelValue:{default:""},placeholder:{default:""}},emits:["update:modelValue"],setup(t,{emit:e}){const r=qI(t,"modelValue",e);return(s,i)=>(Ce(),tt("label",Sx,[Ts(Oi(t.label)+" ",1),Ea(ye("input",{class:"input",type:t.type,placeholder:t.placeholder,"onUpdate:modelValue":i[0]||(i[0]=o=>Be(r)?r.value=o:null)},null,8,Cx),[[zw,Se(r)]])]))}});var Dx=Zn(kx,[["__scopeId","data-v-45e2b80c"]]);const Rx={class:"mt-2 w-full"},xx=G({props:{slot:{type:Number,default:null}},emits:["save"],setup(t,{emit:e}){const n=t,r=k(""),s=()=>{e("save",r.value,n.slot),r.value=""};return(i,o)=>(Ce(),tt("div",Rx,[he(Dx,{modelValue:r.value,"onUpdate:modelValue":o[0]||(o[0]=a=>r.value=a),placeholder:`Enter things into ${t.slot}...`,onKeydown:Ww(Hg(s,["prevent"]),["enter"])},null,8,["modelValue","placeholder","onKeydown"])]))}});const Fb=t=>(f_("data-v-634f43a0"),t=t(),p_(),t),Ox={class:"h-full grid grid-cols-5 gap-4 divide-x"},Px=Fb(()=>ye("div",{class:"px-4"},[ye("h2",{class:"text-2xl dark:text-white"},"Longer List"),ye("p",null,"coming soon...")],-1)),Nx={class:"px-4 mt-4 col-span-3"},Lx={class:"text-5xl dark:text-white"},Mx=Fb(()=>ye("div",{class:"px-4"},[ye("h2",{class:"text-2xl dark:text-white"},"Script"),ye("p",null,"coming soon...")],-1)),Fx=G({setup(t){const e=_i(),n=YR(),r=k(!1),{user:s,isAuthenticated:i}=mm(e),o="todaysdate",a="smartseven";At(i,async u=>{u&&(await n.connect(a,o),r.value=!0)},{immediate:!0});const l={onClickSave(u,c){n.addItem({text:u,slot:c},a,o)},onClickDelete(u){n.removeItem(u,a,o)},onClickUpdate(u){n.updateItem(u,a,o)},onClickToggle(u){u.shared=!u.shared,n.updateItem(u,a,o)}};return(u,c)=>Ea((Ce(),tt("main",Ox,[Px,ye("div",Nx,[(Ce(!0),tt(lt,null,ou(Array.from({length:7},(h,d)=>7-d),h=>(Ce(),tt("section",{key:h},[ye("h2",Lx,Oi(h),1),he(Nb,null,{default:ot(()=>[(Ce(!0),tt(lt,null,ou(Se(n).getSlotList(h),d=>(Ce(),un(Lb,{key:d.id},{default:ot(()=>[he(Ax,{item:d,onDelete:l.onClickDelete,onToggle:l.onClickToggle,onUpdate:l.onClickUpdate},null,8,["item","onDelete","onToggle","onUpdate"])]),_:2},1024))),128)),he(xx,{onSave:l.onClickSave,slot:h},null,8,["onSave","slot"])]),_:2},1024)]))),128))]),Mx],512)),[[Kg,r.value&&Se(i)]])}});var Bx=Zn(Fx,[["__scopeId","data-v-634f43a0"]]);const $x={};function Ux(t,e){return Ce(),tt("button",Ta({class:"text-white font-bold py-2 px-4 rounded transition-colors"},t.$attrs),[Aa(t.$slots,"default")],16)}var Vx=Zn($x,[["render",Ux]]);const jx={class:"container h-screen flex justify-center items-center"},zx={class:"p-8 max-w-6xl"},qx=ye("h1",{class:"font-bold text-indigo-800 dark:text-indigo-200 text-3xl text-center mb-8"},"Login",-1),Hx=ye("h2",{class:"font-bold text-2xl text-center dark:text-gray-50 mb-8"},"Daft Doris",-1),Kx=["src","alt"],Wx=G({setup(t){const e=k(null),{loginWithFirebase:n}=_i(),r=sm(),s=[{name:"Google",provider:new vn,color:"btn-login-google",icon:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoGCBUTExcTFRMYGBcYGhwZFxkZGhcaGhcZGhcZGRoXFx8aHysjGhwoIRgZJDUkKCwuMjIyGSE3PDcxOysxMi4BCwsLDw4PHBERHTMoISgyMTs5Oi4xMzE0MTYxMTE0MjkxMzEyMS4xOTExMTExMTEzMTExOTEzMTEzMTEzMTExMf/AABEIAOAA4AMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQIHBAUGAwj/xAA9EAABAgMFBQcDAwMDBQEBAAABAAIRITEDEkFh8AQiUXGxBQYygZGh0QdCYhNSwRQjcpLC8UNTgqLhc0T/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAwQFBgEC/8QAMBEAAgECBAQDBwUBAAAAAAAAAAECAwQREiExBUFRoSJhsRMUMnGBkeEGM0LB0VL/2gAMAwEAAhEDEQA/ALdY26YlN7b0xyQ196R9knOuyHOaAk50RAVSYbsimW3ReFflJgvzPsgEGwN7Cqb96mCA6Ju4U9EP3KY8UA70ruNEmbtcU7sr2NUmb9cOCARaY3sKpvN6iV6d3CmabtymPFANroC6a/KTG3ZlMNiL2PwotN+R5yQA5pcYiik916QSc+7IJubdmPdADHXZFRa0tMTRNrb0zykhr70igB7b0xyTc6IuivwoudckOc1ItgL2PygEw3aoDZ3sKobv1w4JB07uFM0A371ME70ruNEn7lMeKd2V7GuSATN2uKRbE3sKps364cEF0Ddwp6oAeb0gm10BA1SeLkx7ptZHeNfhAJjbszySe0umENdekeck3OuyHugG9wIgKoYQ2Rr6pFl2YQ1t+Z5IAa0gxNEni94fhMOvbupIcbkggGXAiAqlZ7vi+Uy2G95+qTRfrggFAxjhXyTtN7w+eCL32+SHblMf4QDDhCGNPNJgu+L5XMd4O+Vhs5LWRtbT9rSLrT+Tv4ESuH7Y70bVtMQ60uM/YyLR5nxH1VapdQp6bvyNS04PcXCTwyx6v+kWZ2r27s9gY2lsxv4xi7/S2J9loNv+oViJWdlaPzMGD3n7Ku2sAwTVGd/J/CsDcpcAt4/uNyf2X+nYWv1Ctvs2dg/yc5x9gFhP787YJgWX+lx/3LnFG0oeSh97qv8AkXo8LtI6KC7s2zfqXtkYltkf/Fw6OWw2f6pWtLTZmH/Fzm9QVXQQrftZrmVpcNtZbwXoXB2X9StldK0Y+zPEgPA82z9l03ZPbFhtE7K3Y/IOF4c2mY9F88qTHlpiCQRQiII5QUkbiS31KdXgtCXwNp/dH0o8XvD8JlwhDGnmqU7vd+9q2eDXO/VZ+1/i8nVjziFZHdvvfsu1wg65af8AbfAEn8TR3lPJWIVoy02Zj3PDa9DxYYx6r+zorPd8XlilAxjhXyUhv1wSvfbhRTGcD97w/CYcAIGqHblMUXY73n6IBMF3xfKHNJMRRAN+RQXXd3U0A3mMm19EMcBI1Q5t2Y5IDL0ygIsBHipmh4J8NMpJh96VEF1yVcUA3EEQFUNl4veaV27vammG3p0QEQDGJp7QTdPw+cJIvR3fKPJa3vB2vZ7HZF7zGMmtHic79o1JeOSisWfUISnJRisWzI7U7RstnszaWrg0AVxJ4NxJVZd5e9lrtMWMJs7L9oO+/wDzOAyHutX232rabVaG0tT/AIMHhYOAz4lYaybi7lLwx0Xqdlw7g0KCU6usuyE1sE0IVA3iaEIQiBRtKFSUbShXoW5z4QhCvlQEIQgBMFJCHp3XdHv/AGljdstoJtLOgf8AewZ/vHOfRWtsW1Wdqxr7N4eHDdcJx8+K+b11v0z7YtLDamWQJNnaOg5kyIwk5vA0niFZpVmng9jD4hwynKLqU9GsX5MulkvF5RmkQYxFP4Uhv5QSvQ3fKPNXTmBun4faSGkAQNUEXJ1Rdvb2pIBMBHipnOaHxJlTJAdflTFO/dlVAD4Q3a5IZD7q58EXLs6pXb86YIAbGM6Z0Q/8fZF69u6kiNyVUBi9q7fZ7PZOtbQgBonxJ/aOJJkqe7c7UftVqbZ5PBjcGN4DPiVtO/fbn9TbGzaf7VmSB+b/ALn8hQeuK55ZF3cZpZY7LudnwbhyoU/azXifZDQhCoG8CEJEwQ9PRRLoLZdi9h2+1H+22DIgF5oIz6fxxXa9l9xLCzAdbE2jpREYAGBjA1PtRWKVtOpqloZV1xO3tnhKWL6LV/4itw6NATyBK9Bs1o4btk88hHCKujZOyrFgiyyY3k0RxxrifVZgdGVFbjw/q+xkz/UWvgp/d/g+cbXYbRoN6yeABOLTTjyXgWkVBC+lCbsqrB7Q7FsLUf3LBj+bRGfA1Cndq+TIocdWPjh9n+D53Qrc7Y+m1hagusHOsT+07zT6zHqVXfeHu5tGxn+7Z7sYB7ZsPnhyMCoZ0pQ3RqW9/Rr6Rlr0ej/Jp0IQAoy4MDWsFan037nGzu7VtDd8wNnZkeAVvv8Ay4DDGdF9OO5VyG07Q3ekbOzI8PB7x+7gMOdLCvfb5RVujR/lI5vifEs2NKk9Ob6+SG/8fOCBCE/F7xShczii7He84clbMEGflTNDoxlTKiI35UReu7upoBvh9tcuCGQ+6uaV25OuCdy9OiAiwmO9TND4jw0ynNMuvSQDclXFANwEJVyqtf2zbwZdPidL/wAceUaevBZ9y7vamud7Rt77y7Cg5Cnz5rL4tduhbvD4nov7LFtTzT12RyPandgGLrAw/AmR5ONOR9VzW0WLrNxY5pa4VBEDrNWVrWea8Ns2SztW3bRoIw4jMGo5Y4rl6N9KOk9V3Oot+Izp6T1XcrpC3navdt7IusyXt4fcPIV8vRaJ0qrTp1IzWMXibdG4p1ljB4h7k0HFdt3V7mOddtdoHBwZjDC9wj68sD6d934uG0WrP/zDhicYYw48eUrBAuzrFa1raprPP6I5zi/F5KTo0X83/SCws2taAAGwwAA9k2T8VM+KLsd7Ukyb0qYrTOXepF5Md2mSk+H21yQHXZJBl2dUA2Q+6uai0mO9TNMsvTomXXpIBPiPDTJQ2mxY9pa5rXBwgWkAgg1BGK9Absq4pBsN7U0PU8NUVn3o+nBLr+yEAGtm4wh/gThkfVZ3cbuJ+g8W20gOe07jKtaf3uNCeAwrwh3sL06QUr32+SiVCKliXZcSuJU/ZuWnXn9xWn4+cE4CH5e8UDczii793mpSiJk/F5RSJMZeH2gpHfygi9Dd8vVAD/xrkhsITrnVKFydUFl7e1JADCfupnxQ8n7aZJk3pUxQHXZVQA4ACLa+qGgHxV9EmsuzKTm35jlNAY+32xbZuJ4QHMyHz5LnNa1JbrvBb7rWjEx9B/8AVpda+FyHHa2euocku7NOzhhFvqLWssk9az6I1rPolrWXVYZcDWsssVj23YVntLxFpjeG82EZTN6MiIcY4BZOtZ54LddiWQaC8j8RSVC6E5TgIS8C0eF0ZVbiKWy1fyIqtaVGOaLwZsLGya1gAELoAHkIDopMn4vhFyd7CqbjfphxXdGK9ROJBgKJvEPDX1QHQF3H5Sa27M8pIBsAIiapMJMnU9EObemE3OvSHugE8kSbT1Te0ARFUNddkeax27XZtMTas5X2x6pgDIYI+Kvok0kmBovB+2WTpi1s/NzflN23WREP1Gf624ea9ys+cyPZ8vD8pkCEcf5Xg3bbNtbVh5Ob8qI2uyje/Vs+PjbHqmDGZGQyfi8sERMYYfwvB+2WTv8Aq2Yhxe35T/rrKEP1GcPE2HVMrGZHu+Xh88UACETVY7Nssm/9WzMeD2/KR2qyJvfq2fHxtj1TBnuJkMMfF8IcSDAUXl/WWb4AWjI/5N9oFewddEDqK8wPQeAJtr6oYAZur6JNbdmeUkObemEAmOLjA0Te67IJufekEmOuyPNAaXvBC+0fjH3OoLWnWv5wWd22P7nl/GuXmsHWsssVwfE5Zrqb8/Q2LdYU0LWsuqNaz6J61n0S1rLqs8nJMAiI0lHl8dV0vZ7NxoOAB8zM48VzlkJ+R5+E+66l29TBdL+n4azn8kZ969kIuMbuFFJ4u0QHSu40SYLtcV05QJNAIvGqiw3pFDmxN4U+E3m9Ic0AnuLTAUTe0NmENddECkxt2ZQHBfVztB7WWVi1xa195z4GF4NugNMMImMMZKt7g4a+ei7/AOsZjabOR+1/Vq4HWsuq37GKVFNc8TEvJN1WumBG4OA1/HVO4OGvnopa1n0RrWXVXCrmZC4OA1/HVO4OGvnopa1n0S1rLqvBmYrg4DX8dU7g4a+eilrWfRGtZdUPMzIXBwGv46o/THD21Pop61n0RrWXVBmZD9McBrVcVan0r7SfbWL7O0cXGyIukmLrrgYA8oe6q/Ws+i7j6Qk/rWrZeAH0cKcamaqX0FKi/L/S1aTaqrzLJYb0ih7i0wFE3m9Ic0MddkVgG4J7Lswhjb0zySY0tMTRN7b0wgNF24f7nlrWKwNazzwW07w+JpHCHnPUVq9ay6rg+Jxy3U15+psW7xpoWtZdU9az6I1rPolrWXVZ5OelgYO8j0Psupdu0xXKMdAg568+i6fY37oJxHSRXS/p6osZw+TM+9jqmet2V7GqTDfrgkWmN7Cqk83qLpygIugbop8pvF2Y5IaQBdNflJguzKAbW3hEpMdekUntLjEUUnuDpBAVv9YxC02cfjadW+y4PWs+i7z6wtIfs8f22nrFnuuC1rLqugsv2I/Uwrz95/QNay6p61n0RrWfRGtZdVbKwtay6p61n0RrWfRLWsuqHhLWsuqNaz6I1rPojWsuq8Aa1l1RrWfRGtZ9Ea1lnigDWsuq7f6RxFtan8IU4ub6clxGtZ5YKwfo9ZQ/XefxaDzjER8gq148KEvoWbRY1olhPF2Y5IY29MpMbdmUPaXGIoueN4GvvSKTnXJDnNSeQZNr6IYQPFX1QGu7esdwHgeq0etZ9F0+02Rc1wNCD/8AFzDhCXDXp1XIceo5a6nya7o07OeMXHoLWsuqetZ9Ea1n0S1rLqsIuBrWXVb/ALFtbzbpqNH+PVaFrSTAV94/PRYdv3lsNktA1zy5xIDmsncEYEvMYCE5V4wWlwurKlcKSWK2eHRlO8lTVNuTwO4vQN3CiZF2mPFRsbVrmgggxEQROMaEFNgh4vld0ZmOIw2O9j8JNdekeckOBJiKJvMfDX0QCc67IJubdmPdDCAIGqTARN1PVAa3vB2LZ7bZ3LSIgYtc2rTxHQhcaPpuSYDaf/T38SsR4Jm2nom4xkFYpXVWksIPQgqW9ObxktSurT6bES/qR/oPp4lJ301IEf6kf6PQ1VhsMPFX1SaCDE0Unv8AX/67EfuVHp3ZXln9NSf/AOkf6D5/ckPpuYw/qf8A0xwNVYjxHw/C8O0dsZY2T7R7roa2Ljy/le+/XH/XZD3Oj07lQd7uwW7E9ln+rfe5t4iEA1tJzNTH0Wj1rPosztnb37Tb2lu+rzIftaJNaOQ/krD1rLPFbNLPkWd68zHq5c7y7BrWWeKNazyRrWeWCNayzxUhGGtZZ4q1/pZsV3ZL5q95PkAAMON5VVZsLnBoBJJAgKnkOPAK8+xdiNjYWVkKMYAedXe8Vn8RnhBR6v0NCwhjNy6L1M1rr0jzkhzrsgm4g+GvohhAk6vqsU1xFl2dUAX50wQwH7qZofH7aZIAvXt3UloO2NnuPyMxrVF0DoQlXKqxO0dnvsIPiExj/wA8lm8VtPeLdpfEtUT0Kvs5YvY5yOtYdVjdqdoWWztvWr7pq1gm90f2t/3GAHFc52z3udNmztLatNo8b0aG4wybzdE5Ca5S1tC5xe5xc503OcSS7MkzP8rmqHDpS8VTRdOf4IbzjMY+Gjq+vI3vbXei1tYss/7TImTTvuH5OrD8RDzqdAGwlDWvRGtZ9Ea1l1WtTpxprLFYI56rXqVZZpvFnd/TfvQGQ2W3dL/ovNB+BPDgVZQN6VIL56I1rHou67m9+DZBtjtR3BJlrOIHC04j8lo29xh4ZbFy1u0llntyLMvQ3dTTIuzrgobPate0ODg6IiCCDHgQVJkfupmtA1E8Rht6aQfelRDgY7tMk3w+2uSARfdlVMtuzQyH3VzSaDHepmgGBenTBIOju6kh/wCNMl49o7ZZ2NmbS0e1jW1cTD/koD1e67yqSZQgqn+oHeYbU/8ARsj/AGWOiT/3XjEcWjD14I7598H7UDY2V5lj9xMn2mR/a38fXguV1rLqtezs3F+0qb8kZd3dJrJD6setZdUa1nlgjWs8ka1lnitMzQ1rLPFGtfCNazywQBGQxkNcM0B0n067L/X2ppIiyz33UIlQTrEwwONFb167LU1zvcXsj+m2YSN+0g9wIAc0Qkw4yrA0LjRdG0iE651XP3db2lR4bLRG7aUslNY7vUCLs64IDb06JMj91M0PB+2mSqlkd+9KiV65KuKb4fbXJDIfdXPggFdu72ppwvTok2MZ0zoh/wCNMkBV/wBS+wP0rQ7Swf23mFoBRr/3cj1XGa1n0V/7Zs7bWzdZvaHBwg4cY1VN97u77titIQJsneB2X7HZj3WXc0crzLZ9jGvLfJLPHZ9jSa1l1RrWfRGtZ9Ea1l1VMoBrWXVENax6I1rPojWsuq9PTN7C7d2jZDGytN2ps3TYc4YcxVd72V9RrF4Ddos3WTsXDfZHymPQqsNaz6Ja1l1ViFecNmWqdxOnsy+ez+3tmtQP0rezfyeAfQzWe2DZgxXzuWDhr56KTXuFHuHJzh/NOqsK8fNFqPEHzR9Cvc07xcG8yFqe0+9Ox2IItNps25B193INbE4L59cSaknmSUg0a1/ypHcPkiZ3b5ItLtr6pMaCzZbEvP77TdaMIhomfMhcRbdt221PP9Ral5d4KBrHTgGigjGHotLrWaIr5hcTjNST2K9WrKosGzbEa1oo1rPLBOztL7Q/Gj/8oSPmPeKWtZZ4rsKFWNWmprZlD5i1rLPFPWs8ka1nlgjWss8VYPkNayzXYfTjsD9a1/WtGm4wgtqLz5ECOVSBkDUhaXuv2I/a7UMaDdEC84Nb+4+hAGPkSLp2LZmWTG2bGhoaIAaxx81n3t1kjkju+xetLfM80tl3PaF2dYou3t7Ukmfl7odGMqZUWIbAXr8qYp37sqofD7a5cE2QhvVzQEQy7OqLt+dMEmEnxUzQ8keGmXFAO9e3dSTBuyqhwAERVDZ+L3kgFdhvecOaxe1dgs9qs3Wdo2LT6g4EHAhZQJjA0Q+Xh84TXjSawZ5KKksHsUv3q7uWmxPMd6yJ3X/7XcD1Wl1rPor+2rZmWjSx7Q4OEwZx8uKrbvT3GfZxfswLmY2Z8Tf8eIyCzK9s46x1XoY9zZyh4oar0OJ1rLqjWs+ib2kGBBB4GR/56Ja1l1VQonjrWXVGtZ9E9az6Ja1l1X0fQa1l1RrWfRGtZ9Ea1l1Q9NbrWXVPWs0a1mlrWSslsNayTQhDwyNgtg10/C6TuXHyM/VbB7SDA64Q/hadbPYbS+279zZVq2g9DL0Wzwm6yT9lLZ7fMiqR/kTjrXVbju33dtdreA1pDIwL3A3RmeP+I4ilRve6/ce0td/aL1m2UGwF51DGH28JiuEoqy9k2ZllZtYxoaGiDQMPk9Vq3N9GHhhq+vJFi3s5S8UtF3Zi9h9l2ex2Qs2CVXOPie7Fzjx9gAAJBZ12O95w5IZPxeUZIJMYCntBYzbbxZrJJLBDJvyoi9d3dTQ6Xh9pptAIiarw9IhtydcE7l6dEmEnxUzkh8R4aZIALr0kNdckeab2gTFUMAdM19EAgy7vamgi/MIa4kwNEPN3w/KAZdHd8vRDTdrigtAERVDN7xfCAV37vNN2/TBRiYwwp5KT93w+eKA0fb3drZ9qk9kH/vbIxz4rg+3O420WMXM/uty8Xpx9grYDRCONfNKznX4VepbQnrs/Iq1bSnU12fkfPe0WD7Mwe0thKYlyjqK89az6K/tu2Gytd20s2vGYBPkaj1Wh7T7h7I+bWuYfxMvn3VWVpNbNMpSsZr4Wn2Ke1rLqmda49FZFt9M2mbLcjIth/JWC76b2ppasoal3p4FG6FRciJ2tVcistayT1rNWE36X28Z21nhQuPP7KhZ2z/SsCBftEeIa0n0MQpvZT6FhUaj5FXRXtYWD3kBjSSSAICpMgBxM5DNXN2V9Otjs5uvWhB+4gDDgI4HHErouzey7Gx3bKyawUiGiJkKuqaDHBSRt5PfQkjaze+CKk7vfT7abeDnj9Nkol0QYGJkPEaCt3xVVjd3O6Wz7KBBl98ovcAQHAxvNH2z5mQnJdE+VPlMtEI4181PCjGOvMswt4x13fmA3Kzild+7CqbN7xeWCUTGGFPJSk43G/TBAdDd8vVD93w/KYaCImqAi0XJlBZe3tSQw3vF8Ic4gwFEAy69Ic0B92RQ8BsxVNjQRE1QEWsuzPsk5t6Y5TTY69Ioe67Ic0Ay68Lor8Iabsj7Ic0ARFflDBemUAg2BvYV9UOF+mHFAdE3cKIfu0xQDvSu40ySZuVx4J3ZXsapM3q4IAuTvYVTJvUw4pF07uFE3i7RAAdAXcflJrbszykm1sReNfhJhvSKAHNvTCbnXpD3Sc4tMBRN7bswgBrrsj7JNbdmU2NvTKTHFxgaIAc29Mcppl0Rdx+Enm7IJubAXhX5QA3drjwSDJ3sKpsF6qQdO7hRAD9+mHFO9K7jRD92mKd2V7GqAiwXK48EFsTewr6IZvVwQXQN3CiAbzekPdDXXRA1Q8XZhNrYi8aoCLG3ZnlJDmXpj3Qx16R5oe67IID//2Q=="}],i={async onClickLogin(o,a){await n(o,a),localStorage.setItem("provider",a),await r.push("/")}};return(o,a)=>(Ce(),tt("div",jx,[ye("div",zx,[qx,Hx,ye("button",{type:"button",ref_key:"btnRef",ref:e},null,512),he(Nb,null,{default:ot(()=>[(Ce(),tt(lt,null,ou(s,(l,u)=>he(Lb,{key:u},{default:ot(()=>[he(Vx,{class:wn(["btn-success flex items-center mx-auto w-full",[l.color]]),onClick:c=>i.onClickLogin(l.provider,l.name)},{default:ot(()=>[ye("img",{class:"rounded-full w-8 h-8 mr-4",src:l.icon,alt:l.name},null,8,Kx),Ts(" Login with "+Oi(l.name),1)]),_:2},1032,["class","onClick"])]),_:2},1024)),64))]),_:1})])]))}});function Gx(){return{async beforeEnter(t,e,n){const r=_i(),{getPersistenceFirebaseUser:s}=_i(),{isAuthenticated:i}=mm(r);try{await s("Google")}catch{n("/auth/login")}i.value?n():n("/auth/login")}}}const Xx=[$({path:"/",name:"Home",component:B1,children:[{path:"",component:Bx,meta:{title:"Daft Doris"}}]},Gx()),{path:"/auth",name:"Auth",component:oI,children:[{path:"Login",component:Wx}]}],Qx=eI({history:mE(),routes:Xx});var _s=Object.assign;function Dp(t,e){Object.entries(e).forEach(([n,r])=>{t.style[n]=r})}const Yx={disappearEasing:"cubic-bezier(0.4, 0, 0.2, 1)",disappearDuration:".7s",appearEasing:"cubic-bezier(0.16, 1, 0.3, 1)",appearDuration:".8s",class:null,disabled:!1,center:!1,self:!1,noNested:!0,radius:null};function Rp(t){return _s(_s({},Yx),t)}const xp=(t,e,n,r)=>{const s=t.getBoundingClientRect(),i=e.radius||function(u,c,h,d){const[f,p]=[[h,u],[d,c]].map(([m,y])=>m>y/2?m:y-m);return(f**2+p**2)**.5}(s.width,s.height,n,r),o=function(u,c){const h=document.createElement("div");return h.className=u.class||"",h.style.borderRadius="99999px",h.style.transition=`transform ${u.appearDuration} ${u.appearEasing}`,h.style.transformOrigin="center center",h.style.transform="scale(0)",h.style.position="absolute",h.style.width=h.style.height=2*c+"px",Dp(h,u.circleStyle||{}),h}(e,i);(function(u,c,h,d){[u.style.left,u.style.top]=[c-d,h-d].map(f=>`${f}px`)})(o,n,r,i);const a=function(u){const c=document.createElement("div");return c.style.pointerEvents="none",c.style.position="absolute",c.style.overflow="hidden",c.style.borderRadius="inherit",c.style.transition=`opacity ${u.disappearDuration} ${u.disappearEasing}`,c.style.margin="0",c.style.padding="0",["left","top","right","bottom"].forEach(h=>{c.style[h]="0"}),Dp(c,u.containerStyle||{}),c}(e);var l;return a.appendChild(o),t.appendChild(a),l=()=>{o.style.transform="scale(1)"},new Promise(u=>{requestAnimationFrame(()=>{requestAnimationFrame(()=>{u(),l&&l()})})}),{hide(){a.style.opacity="0",a.addEventListener("transitionend",u=>{u.target===a&&t.removeChild(a)})}}};function Bb(t,e=0){if(e>1e3)return function(...r){console.warn("[Ripple]",...r)}("noNested alghorithm error - max calls stack size exceeded"),null;if(function(r){return r.dataset.vRippleMark===""}(t))return t;const n=t.parentElement;return n?Bb(n,e+1):null}function Op(t,e){return _s(_s({},t),e)}function Pp(t){var e,n,r,s,i,o;return _s(_s({},t.value),{self:(n=t.modifiers.self)!=null?n:(e=t.value)==null?void 0:e.self,center:(s=t.modifiers.center)!=null?s:(r=t.value)==null?void 0:r.center,noNested:(o=t.modifiers["no-nested"])!=null?o:(i=t.value)==null?void 0:i.noNested})}function Zx(t){const e=new WeakMap;return{mounted(n,r){const s=Pp(r),i=function(o,a){let l=Rp(a);const u=h=>l.center?function(d){const f=d.getBoundingClientRect();return[f.width/2,f.height/2]}(o):function(d,f){const p=d.getBoundingClientRect();return[f.clientX-p.x,f.clientY-p.y]}(o,h),c=h=>{if(l.disabled||l.self&&h.target!==o)return;if(l.noNested&&h.target&&h.target!==o){const y=Bb(h.target);if(y&&y!==o)return}let d=xp(o,l,...u(h));const f=()=>{d==null||d.hide(),window.removeEventListener("mouseup",f),o.removeEventListener("mouseleave",m),o.removeEventListener("mouseenter",p)},p=y=>{d=xp(o,l,...u(y))},m=()=>{d&&(d.hide(),d=null)};window.addEventListener("mouseup",f),o.addEventListener("mouseleave",m),o.addEventListener("mouseenter",p)};return function(h){h.dataset.vRippleMark=""}(o),getComputedStyle(o).position==="static"&&(o.style.position="relative"),o.addEventListener("mousedown",c),{updateOptions(h){l=Rp(h)},unbind(){o.removeEventListener("mousedown",c),function(h){delete h.dataset.vRippleMark}(o)}}}(n,Op(t,s));e.set(n,i)},beforeUpdate(n,r){const s=e.get(n);if(s){const i=Pp(r),o=Op(t,i);s.updateOptions(o)}},unmounted(n){const r=e.get(n);r&&(e.delete(n),r.unbind())}}}const Jx=Ec("loading",()=>{const t=k(!1),e=k(!1);function n(r,s=!0){t.value=r,e.value=s}return{value:t,transparent:e,setLoading:n}}),eO=ye("div",{class:"flex items-center justify-center space-x-2 animate-bounce"},[ye("div",{class:"w-4 h-4 bg-blue-400 rounded-full"}),ye("div",{class:"w-4 h-4 bg-green-400 rounded-full delay-300"}),ye("div",{class:"w-4 h-4 bg-black rounded-full delay-700"})],-1),tO=[eO],nO=G({setup(t){const e=Jx(),n=R(()=>e.value),r=R(()=>[(e.transparent,"bg-transparent")]);return(s,i)=>(Ce(),un(pi,{name:"fade"},{default:ot(()=>[Ea(ye("div",{class:wn(["w-screen h-screen fixed top-0 left-0 flex justify-center items-center z-50",[Se(r)]])},tO,2),[[Kg,Se(n)===!0]])]),_:1}))}}),rO=G({setup(t){return(e,n)=>{const r=mc("router-view");return Ce(),tt(lt,null,[he(nO),he(r)],64)}}});var sO="firebase",iO="9.6.11";/**
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
 */zt(sO,iO,"app");const $b="@firebase/installations",Fh="0.5.8";/**
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
 */const Ub=1e4,Vb=`w:${Fh}`,jb="FIS_v2",oO="https://firebaseinstallations.googleapis.com/v1",aO=60*60*1e3,lO="installations",uO="Installations";/**
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
 */const cO={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Rr=new Nr(lO,uO,cO);function zb(t){return t instanceof kn&&t.code.includes("request-failed")}/**
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
 */function qb({projectId:t}){return`${oO}/projects/${t}/installations`}function Hb(t){return{token:t.token,requestStatus:2,expiresIn:dO(t.expiresIn),creationTime:Date.now()}}async function Kb(t,e){const r=(await e.json()).error;return Rr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Wb({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function hO(t,{refreshToken:e}){const n=Wb(t);return n.append("Authorization",fO(e)),n}async function Gb(t){const e=await t();return e.status>=500&&e.status<600?t():e}function dO(t){return Number(t.replace("s","000"))}function fO(t){return`${jb} ${t}`}/**
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
 */async function pO({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=qb(t),s=Wb(t),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={fid:n,authVersion:jb,appId:t.appId,sdkVersion:Vb},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await Gb(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Hb(u.authToken)}}else throw await Kb("Create Installation",l)}/**
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
 */function Xb(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function gO(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const mO=/^[cdef][\w-]{21}$/,Xu="";function vO(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=yO(t);return mO.test(n)?n:Xu}catch{return Xu}}function yO(t){return gO(t).substr(0,22)}/**
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
 */function ul(t){return`${t.appName}!${t.appId}`}/**
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
 */const Qb=new Map;function Yb(t,e){const n=ul(t);Zb(n,e),bO(n,e)}function Zb(t,e){const n=Qb.get(t);if(!!n)for(const r of n)r(e)}function bO(t,e){const n=_O();n&&n.postMessage({key:t,fid:e}),wO()}let pr=null;function _O(){return!pr&&"BroadcastChannel"in self&&(pr=new BroadcastChannel("[Firebase] FID Change"),pr.onmessage=t=>{Zb(t.data.key,t.data.fid)}),pr}function wO(){Qb.size===0&&pr&&(pr.close(),pr=null)}/**
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
 */const EO="firebase-installations-database",IO=1,xr="firebase-installations-store";let ql=null;function Bh(){return ql||(ql=Cm(EO,IO,(t,e)=>{switch(e){case 0:t.createObjectStore(xr)}})),ql}async function ua(t,e){const n=ul(t),s=(await Bh()).transaction(xr,"readwrite"),i=s.objectStore(xr),o=await i.get(n);return await i.put(e,n),await s.complete,(!o||o.fid!==e.fid)&&Yb(t,e.fid),e}async function Jb(t){const e=ul(t),r=(await Bh()).transaction(xr,"readwrite");await r.objectStore(xr).delete(e),await r.complete}async function cl(t,e){const n=ul(t),s=(await Bh()).transaction(xr,"readwrite"),i=s.objectStore(xr),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.complete,a&&(!o||o.fid!==a.fid)&&Yb(t,a.fid),a}/**
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
 */async function $h(t){let e;const n=await cl(t.appConfig,r=>{const s=TO(r),i=AO(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===Xu?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function TO(t){const e=t||{fid:vO(),registrationStatus:0};return e0(e)}function AO(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Rr.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=SO(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:CO(t)}:{installationEntry:e}}async function SO(t,e){try{const n=await pO(t,e);return ua(t.appConfig,n)}catch(n){throw zb(n)&&n.customData.serverCode===409?await Jb(t.appConfig):await ua(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function CO(t){let e=await Np(t.appConfig);for(;e.registrationStatus===1;)await Xb(100),e=await Np(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await $h(t);return r||n}return e}function Np(t){return cl(t,e=>{if(!e)throw Rr.create("installation-not-found");return e0(e)})}function e0(t){return kO(t)?{fid:t.fid,registrationStatus:0}:t}function kO(t){return t.registrationStatus===1&&t.registrationTime+Ub<Date.now()}/**
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
 */async function DO({appConfig:t,heartbeatServiceProvider:e},n){const r=RO(t,n),s=hO(t,n),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={installation:{sdkVersion:Vb,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await Gb(()=>fetch(r,a));if(l.ok){const u=await l.json();return Hb(u)}else throw await Kb("Generate Auth Token",l)}function RO(t,{fid:e}){return`${qb(t)}/${e}/authTokens:generate`}/**
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
 */async function Uh(t,e=!1){let n;const r=await cl(t.appConfig,i=>{if(!t0(i))throw Rr.create("not-registered");const o=i.authToken;if(!e&&PO(o))return i;if(o.requestStatus===1)return n=xO(t,e),i;{if(!navigator.onLine)throw Rr.create("app-offline");const a=LO(i);return n=OO(t,a),a}});return n?await n:r.authToken}async function xO(t,e){let n=await Lp(t.appConfig);for(;n.authToken.requestStatus===1;)await Xb(100),n=await Lp(t.appConfig);const r=n.authToken;return r.requestStatus===0?Uh(t,e):r}function Lp(t){return cl(t,e=>{if(!t0(e))throw Rr.create("not-registered");const n=e.authToken;return MO(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function OO(t,e){try{const n=await DO(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await ua(t.appConfig,r),n}catch(n){if(zb(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Jb(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await ua(t.appConfig,r)}throw n}}function t0(t){return t!==void 0&&t.registrationStatus===2}function PO(t){return t.requestStatus===2&&!NO(t)}function NO(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+aO}function LO(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function MO(t){return t.requestStatus===1&&t.requestTime+Ub<Date.now()}/**
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
 */async function FO(t){const e=t,{installationEntry:n,registrationPromise:r}=await $h(e);return r?r.catch(console.error):Uh(e).catch(console.error),n.fid}/**
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
 */async function BO(t,e=!1){const n=t;return await $O(n),(await Uh(n,e)).token}async function $O(t){const{registrationPromise:e}=await $h(t);e&&await e}/**
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
 */function UO(t){if(!t||!t.options)throw Hl("App Configuration");if(!t.name)throw Hl("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Hl(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Hl(t){return Rr.create("missing-app-config-values",{valueName:t})}/**
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
 */const n0="installations",VO="installations-internal",jO=t=>{const e=t.getProvider("app").getImmediate(),n=UO(e),r=Lr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},zO=t=>{const e=t.getProvider("app").getImmediate(),n=Lr(e,n0).getImmediate();return{getId:()=>FO(n),getToken:s=>BO(n,s)}};function qO(){cn(new Jt(n0,jO,"PUBLIC")),cn(new Jt(VO,zO,"PRIVATE"))}qO();zt($b,Fh);zt($b,Fh,"esm2017");/**
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
 */const ca="analytics",HO="firebase_id",KO="origin",WO=60*1e3,GO="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",r0="https://www.googletagmanager.com/gtag/js";/**
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
 */const Lt=new Ra("@firebase/analytics");/**
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
 */function s0(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function XO(t,e){const n=document.createElement("script");n.src=`${r0}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function QO(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function YO(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const l=(await s0(n)).find(u=>u.measurementId===s);l&&await e[l.appId]}}catch(a){Lt.error(a)}t("config",s,i)}async function ZO(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await s0(n);for(const l of o){const u=a.find(h=>h.measurementId===l),c=u&&e[u.appId];if(c)i.push(c);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){Lt.error(i)}}function JO(t,e,n,r){async function s(i,o,a){try{i==="event"?await ZO(t,e,n,o,a):i==="config"?await YO(t,e,n,r,o,a):t("set",o)}catch(l){Lt.error(l)}}return s}function eP(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=JO(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function tP(){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(r0))return e;return null}/**
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
 */const nP={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},qt=new Nr("analytics","Analytics",nP);/**
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
 */const rP=30,sP=1e3;class iP{constructor(e={},n=sP){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const i0=new iP;function oP(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function aP(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:oP(r)},i=GO.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw qt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function lP(t,e=i0,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw qt.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw qt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new hP;return setTimeout(async()=>{a.abort()},n!==void 0?n:WO),o0({appId:r,apiKey:s,measurementId:i},o,a,e)}async function o0(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=i0){const{appId:i,measurementId:o}=t;try{await uP(r,e)}catch(a){if(o)return Lt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${a.message}]`),{appId:i,measurementId:o};throw a}try{const a=await aP(t);return s.deleteThrottleMetadata(i),a}catch(a){if(!cP(a)){if(s.deleteThrottleMetadata(i),o)return Lt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${a.message}]`),{appId:i,measurementId:o};throw a}const l=Number(a.customData.httpStatus)===503?tf(n,s.intervalMillis,rP):tf(n,s.intervalMillis),u={throttleEndTimeMillis:Date.now()+l,backoffCount:n+1};return s.setThrottleMetadata(i,u),Lt.debug(`Calling attemptFetch again in ${l} millis`),o0(t,u,r,s)}}function uP(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(qt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function cP(t){if(!(t instanceof kn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class hP{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}/**
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
 */async function dP(){if(Im())try{await Tm()}catch(t){return Lt.warn(qt.create("indexeddb-unavailable",{errorInfo:t}).message),!1}else return Lt.warn(qt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function fP(t,e,n,r,s,i,o){var a;const l=lP(t);l.then(f=>{n[f.measurementId]=f.appId,t.options.measurementId&&f.measurementId!==t.options.measurementId&&Lt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${f.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(f=>Lt.error(f)),e.push(l);const u=dP().then(f=>{if(f)return r.getId()}),[c,h]=await Promise.all([l,u]);tP()||XO(i,c.measurementId),s("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[KO]="firebase",d.update=!0,h!=null&&(d[HO]=h),s("config",c.measurementId,d),c.measurementId}/**
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
 */class pP{constructor(e){this.app=e}_delete(){return delete ai[this.app.options.appId],Promise.resolve()}}let ai={},Mp=[];const Fp={};let Kl="dataLayer",gP="gtag",Bp,a0,$p=!1;function mP(){const t=[];if(Ic()&&t.push("This is a browser extension environment."),rT()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=qt.create("invalid-analytics-context",{errorInfo:e});Lt.warn(n.message)}}function vP(t,e,n){mP();const r=t.options.appId;if(!r)throw qt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Lt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw qt.create("no-api-key");if(ai[r]!=null)throw qt.create("already-exists",{id:r});if(!$p){QO(Kl);const{wrappedGtag:i,gtagCore:o}=eP(ai,Mp,Fp,Kl,gP);a0=i,Bp=o,$p=!0}return ai[r]=fP(t,Mp,Fp,e,Bp,Kl,n),new pP(t)}/**
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
 */async function yP(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});t("event",n,o)}}function bP(t=Ac()){t=Ft(t);const e=Lr(t,ca);return e.isInitialized()?e.getImmediate():_P(t)}function _P(t,e={}){const n=Lr(t,ca);if(n.isInitialized()){const s=n.getImmediate();if(mi(e,n.getOptions()))return s;throw qt.create("already-initialized")}return n.initialize({options:e})}function wP(t,e,n,r){t=Ft(t),yP(a0,ai[t.app.options.appId],e,n,r).catch(s=>Lt.error(s))}const Up="@firebase/analytics",Vp="0.7.8";function EP(){cn(new Jt(ca,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return vP(r,s,n)},"PUBLIC")),cn(new Jt("analytics-internal",t,"PRIVATE")),zt(Up,Vp),zt(Up,Vp,"esm2017");function t(e){try{const n=e.getProvider(ca).getImmediate();return{logEvent:(r,s,i)=>wP(n,r,s,i)}}catch(n){throw qt.create("interop-component-reg-failed",{reason:n})}}}EP();const IP={apiKey:"AIzaSyAXBQG6b0_AKCY63dbQlcecWNKmiLAKjiI",authDomain:"daftdoris-cns.firebaseapp.com",projectId:"daftdoris-cns",storageBucket:"daftdoris-cns.appspot.com",messagingSenderId:"785842200541",appId:"1:785842200541:web:8b34412472e7aa2feaa034",measurementId:"G-CCEL9G8W59"},TP=eA(IP);Wu();bP(TP);Qw(rO).directive("ripple",Zx({class:"bg-black opacity-30"})).use(KI()).use(Qx).mount("#app");
