var ab=Object.defineProperty,lb=Object.defineProperties;var ub=Object.getOwnPropertyDescriptors;var Qi=Object.getOwnPropertySymbols;var Uh=Object.prototype.hasOwnProperty,jh=Object.prototype.propertyIsEnumerable;var Vh=(t,e,n)=>e in t?ab(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,$=(t,e)=>{for(var n in e||(e={}))Uh.call(e,n)&&Vh(t,n,e[n]);if(Qi)for(var n of Qi(e))jh.call(e,n)&&Vh(t,n,e[n]);return t},gt=(t,e)=>lb(t,ub(e));var Xt=(t,e)=>{var n={};for(var r in t)Uh.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&Qi)for(var r of Qi(t))e.indexOf(r)<0&&jh.call(t,r)&&(n[r]=t[r]);return n};const cb=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}};cb();function Hu(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const hb="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",db=Hu(hb);function Lp(t){return!!t||t===""}function oa(t){if(te(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=We(r)?mb(r):oa(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(We(t))return t;if(Ye(t))return t}}const fb=/;(?![^(]*\))/g,pb=/:(.+)/;function mb(t){const e={};return t.split(fb).forEach(n=>{if(n){const r=n.split(pb);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function wn(t){let e="";if(We(t))e=t;else if(te(t))for(let n=0;n<t.length;n++){const r=wn(t[n]);r&&(e+=r+" ")}else if(Ye(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function Mp(t){if(!t)return null;let{class:e,style:n}=t;return e&&!We(e)&&(t.class=wn(e)),n&&(t.style=oa(n)),t}const aa=t=>We(t)?t:t==null?"":te(t)||Ye(t)&&(t.toString===Vp||!ce(t.toString))?JSON.stringify(t,Fp,2):String(t),Fp=(t,e)=>e&&e.__v_isRef?Fp(t,e.value):Qr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Bp(e)?{[`Set(${e.size})`]:[...e.values()]}:Ye(e)&&!te(e)&&!Up(e)?String(e):e,Ne={},Xr=[],Jt=()=>{},gb=()=>!1,vb=/^on[^a-z]/,la=t=>vb.test(t),Ku=t=>t.startsWith("onUpdate:"),ft=Object.assign,Wu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},yb=Object.prototype.hasOwnProperty,be=(t,e)=>yb.call(t,e),te=Array.isArray,Qr=t=>ua(t)==="[object Map]",Bp=t=>ua(t)==="[object Set]",ce=t=>typeof t=="function",We=t=>typeof t=="string",Gu=t=>typeof t=="symbol",Ye=t=>t!==null&&typeof t=="object",$p=t=>Ye(t)&&ce(t.then)&&ce(t.catch),Vp=Object.prototype.toString,ua=t=>Vp.call(t),bb=t=>ua(t).slice(8,-1),Up=t=>ua(t)==="[object Object]",Xu=t=>We(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,co=Hu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ca=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},_b=/-(\w)/g,un=ca(t=>t.replace(_b,(e,n)=>n?n.toUpperCase():"")),wb=/\B([A-Z])/g,Dr=ca(t=>t.replace(wb,"-$1").toLowerCase()),ha=ca(t=>t.charAt(0).toUpperCase()+t.slice(1)),ol=ca(t=>t?`on${ha(t)}`:""),ri=(t,e)=>!Object.is(t,e),ho=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Eo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Io=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let zh;const Eb=()=>zh||(zh=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Pt;class jp{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Pt&&(this.parent=Pt,this.index=(Pt.scopes||(Pt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Pt;try{return Pt=this,e()}finally{Pt=n}}}on(){Pt=this}off(){Pt=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function zp(t){return new jp(t)}function Ib(t,e=Pt){e&&e.active&&e.effects.push(t)}function Tb(){return Pt}function Ab(t){Pt&&Pt.cleanups.push(t)}const Qu=t=>{const e=new Set(t);return e.w=0,e.n=0,e},qp=t=>(t.w&Kn)>0,Hp=t=>(t.n&Kn)>0,Sb=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Kn},Cb=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];qp(s)&&!Hp(s)?s.delete(t):e[n++]=s,s.w&=~Kn,s.n&=~Kn}e.length=n}},Ul=new WeakMap;let Bs=0,Kn=1;const jl=30;let Qt;const fr=Symbol(""),zl=Symbol("");class Yu{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ib(this,r)}run(){if(!this.active)return this.fn();let e=Qt,n=zn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Qt,Qt=this,zn=!0,Kn=1<<++Bs,Bs<=jl?Sb(this):qh(this),this.fn()}finally{Bs<=jl&&Cb(this),Kn=1<<--Bs,Qt=this.parent,zn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Qt===this?this.deferStop=!0:this.active&&(qh(this),this.onStop&&this.onStop(),this.active=!1)}}function qh(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let zn=!0;const Kp=[];function ys(){Kp.push(zn),zn=!1}function bs(){const t=Kp.pop();zn=t===void 0?!0:t}function Ft(t,e,n){if(zn&&Qt){let r=Ul.get(t);r||Ul.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Qu()),Wp(s)}}function Wp(t,e){let n=!1;Bs<=jl?Hp(t)||(t.n|=Kn,n=!qp(t)):n=!t.has(Qt),n&&(t.add(Qt),Qt.deps.push(t))}function Tn(t,e,n,r,s,i){const o=Ul.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&te(t))o.forEach((l,u)=>{(u==="length"||u>=r)&&a.push(l)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":te(t)?Xu(n)&&a.push(o.get("length")):(a.push(o.get(fr)),Qr(t)&&a.push(o.get(zl)));break;case"delete":te(t)||(a.push(o.get(fr)),Qr(t)&&a.push(o.get(zl)));break;case"set":Qr(t)&&a.push(o.get(fr));break}if(a.length===1)a[0]&&ql(a[0]);else{const l=[];for(const u of a)u&&l.push(...u);ql(Qu(l))}}function ql(t,e){for(const n of te(t)?t:[...t])(n!==Qt||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const kb=Hu("__proto__,__v_isRef,__isVue"),Gp=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(Gu)),Db=Zu(),xb=Zu(!1,!0),Rb=Zu(!0),Hh=Ob();function Ob(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=oe(this);for(let i=0,o=this.length;i<o;i++)Ft(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(oe)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ys();const r=oe(this)[e].apply(this,n);return bs(),r}}),t}function Zu(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?Gb:Jp:e?Zp:Yp).get(r))return r;const o=te(r);if(!t&&o&&be(Hh,s))return Reflect.get(Hh,s,i);const a=Reflect.get(r,s,i);return(Gu(s)?Gp.has(s):kb(s))||(t||Ft(r,"get",s),e)?a:Me(a)?!o||!Xu(s)?a.value:a:Ye(a)?t?em(a):xr(a):a}}const Pb=Xp(),Nb=Xp(!0);function Xp(t=!1){return function(n,r,s,i){let o=n[r];if(si(o)&&Me(o)&&!Me(s))return!1;if(!t&&!si(s)&&(tm(s)||(s=oe(s),o=oe(o)),!te(n)&&Me(o)&&!Me(s)))return o.value=s,!0;const a=te(n)&&Xu(r)?Number(r)<n.length:be(n,r),l=Reflect.set(n,r,s,i);return n===oe(i)&&(a?ri(s,o)&&Tn(n,"set",r,s):Tn(n,"add",r,s)),l}}function Lb(t,e){const n=be(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Tn(t,"delete",e,void 0),r}function Mb(t,e){const n=Reflect.has(t,e);return(!Gu(e)||!Gp.has(e))&&Ft(t,"has",e),n}function Fb(t){return Ft(t,"iterate",te(t)?"length":fr),Reflect.ownKeys(t)}const Qp={get:Db,set:Pb,deleteProperty:Lb,has:Mb,ownKeys:Fb},Bb={get:Rb,set(t,e){return!0},deleteProperty(t,e){return!0}},$b=ft({},Qp,{get:xb,set:Nb}),Ju=t=>t,da=t=>Reflect.getPrototypeOf(t);function Yi(t,e,n=!1,r=!1){t=t.__v_raw;const s=oe(t),i=oe(e);e!==i&&!n&&Ft(s,"get",e),!n&&Ft(s,"get",i);const{has:o}=da(s),a=r?Ju:n?nc:ii;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Zi(t,e=!1){const n=this.__v_raw,r=oe(n),s=oe(t);return t!==s&&!e&&Ft(r,"has",t),!e&&Ft(r,"has",s),t===s?n.has(t):n.has(t)||n.has(s)}function Ji(t,e=!1){return t=t.__v_raw,!e&&Ft(oe(t),"iterate",fr),Reflect.get(t,"size",t)}function Kh(t){t=oe(t);const e=oe(this);return da(e).has.call(e,t)||(e.add(t),Tn(e,"add",t,t)),this}function Wh(t,e){e=oe(e);const n=oe(this),{has:r,get:s}=da(n);let i=r.call(n,t);i||(t=oe(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?ri(e,o)&&Tn(n,"set",t,e):Tn(n,"add",t,e),this}function Gh(t){const e=oe(this),{has:n,get:r}=da(e);let s=n.call(e,t);s||(t=oe(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Tn(e,"delete",t,void 0),i}function Xh(){const t=oe(this),e=t.size!==0,n=t.clear();return e&&Tn(t,"clear",void 0,void 0),n}function eo(t,e){return function(r,s){const i=this,o=i.__v_raw,a=oe(o),l=e?Ju:t?nc:ii;return!t&&Ft(a,"iterate",fr),o.forEach((u,c)=>r.call(s,l(u),l(c),i))}}function to(t,e,n){return function(...r){const s=this.__v_raw,i=oe(s),o=Qr(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),c=n?Ju:e?nc:ii;return!e&&Ft(i,"iterate",l?zl:fr),{next(){const{value:h,done:d}=u.next();return d?{value:h,done:d}:{value:a?[c(h[0]),c(h[1])]:c(h),done:d}},[Symbol.iterator](){return this}}}}function xn(t){return function(...e){return t==="delete"?!1:this}}function Vb(){const t={get(i){return Yi(this,i)},get size(){return Ji(this)},has:Zi,add:Kh,set:Wh,delete:Gh,clear:Xh,forEach:eo(!1,!1)},e={get(i){return Yi(this,i,!1,!0)},get size(){return Ji(this)},has:Zi,add:Kh,set:Wh,delete:Gh,clear:Xh,forEach:eo(!1,!0)},n={get(i){return Yi(this,i,!0)},get size(){return Ji(this,!0)},has(i){return Zi.call(this,i,!0)},add:xn("add"),set:xn("set"),delete:xn("delete"),clear:xn("clear"),forEach:eo(!0,!1)},r={get(i){return Yi(this,i,!0,!0)},get size(){return Ji(this,!0)},has(i){return Zi.call(this,i,!0)},add:xn("add"),set:xn("set"),delete:xn("delete"),clear:xn("clear"),forEach:eo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=to(i,!1,!1),n[i]=to(i,!0,!1),e[i]=to(i,!1,!0),r[i]=to(i,!0,!0)}),[t,n,e,r]}const[Ub,jb,zb,qb]=Vb();function ec(t,e){const n=e?t?qb:zb:t?jb:Ub;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(be(n,s)&&s in r?n:r,s,i)}const Hb={get:ec(!1,!1)},Kb={get:ec(!1,!0)},Wb={get:ec(!0,!1)},Yp=new WeakMap,Zp=new WeakMap,Jp=new WeakMap,Gb=new WeakMap;function Xb(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Qb(t){return t.__v_skip||!Object.isExtensible(t)?0:Xb(bb(t))}function xr(t){return si(t)?t:tc(t,!1,Qp,Hb,Yp)}function Yb(t){return tc(t,!1,$b,Kb,Zp)}function em(t){return tc(t,!0,Bb,Wb,Jp)}function tc(t,e,n,r,s){if(!Ye(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Qb(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function En(t){return si(t)?En(t.__v_raw):!!(t&&t.__v_isReactive)}function si(t){return!!(t&&t.__v_isReadonly)}function tm(t){return!!(t&&t.__v_isShallow)}function nm(t){return En(t)||si(t)}function oe(t){const e=t&&t.__v_raw;return e?oe(e):t}function ns(t){return Eo(t,"__v_skip",!0),t}const ii=t=>Ye(t)?xr(t):t,nc=t=>Ye(t)?em(t):t;function rm(t){zn&&Qt&&(t=oe(t),Wp(t.dep||(t.dep=Qu())))}function sm(t,e){t=oe(t),t.dep&&ql(t.dep)}function Me(t){return!!(t&&t.__v_isRef===!0)}function k(t){return om(t,!1)}function im(t){return om(t,!0)}function om(t,e){return Me(t)?t:new Zb(t,e)}class Zb{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:oe(e),this._value=n?e:ii(e)}get value(){return rm(this),this._value}set value(e){e=this.__v_isShallow?e:oe(e),ri(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:ii(e),sm(this))}}function pe(t){return Me(t)?t.value:t}const Jb={get:(t,e,n)=>pe(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Me(s)&&!Me(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function am(t){return En(t)?t:new Proxy(t,Jb)}function e_(t){const e=te(t)?new Array(t.length):{};for(const n in t)e[n]=lm(t,n);return e}class t_{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function lm(t,e,n){const r=t[e];return Me(r)?r:new t_(t,e,n)}class n_{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Yu(e,()=>{this._dirty||(this._dirty=!0,sm(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=oe(this);return rm(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function r_(t,e,n=!1){let r,s;const i=ce(t);return i?(r=t,s=Jt):(r=t.get,s=t.set),new n_(r,s,i||!s,n)}function qn(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){fa(i,e,n)}return s}function zt(t,e,n,r){if(ce(t)){const i=qn(t,e,n,r);return i&&$p(i)&&i.catch(o=>{fa(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(zt(t[i],e,n,r));return s}function fa(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const u=i.ec;if(u){for(let c=0;c<u.length;c++)if(u[c](t,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){qn(l,null,10,[t,o,a]);return}}s_(t,n,s,r)}function s_(t,e,n,r=!0){console.error(t)}let To=!1,Hl=!1;const Nt=[];let gn=0;const zs=[];let $s=null,zr=0;const qs=[];let Mn=null,qr=0;const um=Promise.resolve();let rc=null,Kl=null;function Te(t){const e=rc||um;return t?e.then(this?t.bind(this):t):e}function i_(t){let e=gn+1,n=Nt.length;for(;e<n;){const r=e+n>>>1;oi(Nt[r])<t?e=r+1:n=r}return e}function cm(t){(!Nt.length||!Nt.includes(t,To&&t.allowRecurse?gn+1:gn))&&t!==Kl&&(t.id==null?Nt.push(t):Nt.splice(i_(t.id),0,t),hm())}function hm(){!To&&!Hl&&(Hl=!0,rc=um.then(pm))}function o_(t){const e=Nt.indexOf(t);e>gn&&Nt.splice(e,1)}function dm(t,e,n,r){te(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),hm()}function a_(t){dm(t,$s,zs,zr)}function l_(t){dm(t,Mn,qs,qr)}function sc(t,e=null){if(zs.length){for(Kl=e,$s=[...new Set(zs)],zs.length=0,zr=0;zr<$s.length;zr++)$s[zr]();$s=null,zr=0,Kl=null,sc(t,e)}}function fm(t){if(qs.length){const e=[...new Set(qs)];if(qs.length=0,Mn){Mn.push(...e);return}for(Mn=e,Mn.sort((n,r)=>oi(n)-oi(r)),qr=0;qr<Mn.length;qr++)Mn[qr]();Mn=null,qr=0}}const oi=t=>t.id==null?1/0:t.id;function pm(t){Hl=!1,To=!0,sc(t),Nt.sort((n,r)=>oi(n)-oi(r));const e=Jt;try{for(gn=0;gn<Nt.length;gn++){const n=Nt[gn];n&&n.active!==!1&&qn(n,null,14)}}finally{gn=0,Nt.length=0,fm(),To=!1,rc=null,(Nt.length||zs.length||qs.length)&&pm(t)}}function u_(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ne;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const c=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[c]||Ne;d?s=n.map(f=>f.trim()):h&&(s=n.map(Io))}let a,l=r[a=ol(e)]||r[a=ol(un(e))];!l&&i&&(l=r[a=ol(Dr(e))]),l&&zt(l,t,6,s);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,zt(u,t,6,s)}}function mm(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!ce(t)){const l=u=>{const c=mm(u,e,!0);c&&(a=!0,ft(o,c))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(r.set(t,null),null):(te(i)?i.forEach(l=>o[l]=null):ft(o,i),r.set(t,o),o)}function pa(t,e){return!t||!la(e)?!1:(e=e.slice(2).replace(/Once$/,""),be(t,e[0].toLowerCase()+e.slice(1))||be(t,Dr(e))||be(t,e))}let yt=null,ma=null;function Ao(t){const e=yt;return yt=t,ma=t&&t.type.__scopeId||null,e}function gm(t){ma=t}function vm(){ma=null}function ot(t,e=yt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&ad(-1);const i=Ao(e),o=t(...s);return Ao(i),r._d&&ad(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function al(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:l,emit:u,render:c,renderCache:h,data:d,setupState:f,ctx:p,inheritAttrs:g}=t;let y,b;const w=Ao(t);try{if(n.shapeFlag&4){const F=s||r;y=on(c.call(F,F,h,i,f,d,p)),b=l}else{const F=e;y=on(F.length>1?F(i,{attrs:l,slots:a,emit:u}):F(i,null)),b=e.props?l:c_(l)}}catch(F){Ks.length=0,fa(F,t,1),y=ee(qt)}let R=y;if(b&&g!==!1){const F=Object.keys(b),{shapeFlag:j}=R;F.length&&j&7&&(o&&F.some(Ku)&&(b=h_(b,o)),R=Wn(R,b))}return n.dirs&&(R.dirs=R.dirs?R.dirs.concat(n.dirs):n.dirs),n.transition&&(R.transition=n.transition),y=R,Ao(w),y}const c_=t=>{let e;for(const n in t)(n==="class"||n==="style"||la(n))&&((e||(e={}))[n]=t[n]);return e},h_=(t,e)=>{const n={};for(const r in t)(!Ku(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function d_(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Qh(r,o,u):!!o;if(l&8){const c=e.dynamicProps;for(let h=0;h<c.length;h++){const d=c[h];if(o[d]!==r[d]&&!pa(u,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Qh(r,o,u):!0:!!o;return!1}function Qh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!pa(n,i))return!0}return!1}function f_({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const p_=t=>t.__isSuspense;function m_(t,e){e&&e.pendingBranch?te(t)?e.effects.push(...t):e.effects.push(t):l_(t)}function Ve(t,e){if(tt){let n=tt.provides;const r=tt.parent&&tt.parent.provides;r===n&&(n=tt.provides=Object.create(r)),n[t]=e}}function we(t,e,n=!1){const r=tt||yt;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ce(e)?e.call(r.proxy):e}}function Ke(t,e){return ic(t,null,e)}const Yh={};function bt(t,e,n){return ic(t,e,n)}function ic(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Ne){const a=tt;let l,u=!1,c=!1;if(Me(t)?(l=()=>t.value,u=tm(t)):En(t)?(l=()=>t,r=!0):te(t)?(c=!0,u=t.some(En),l=()=>t.map(b=>{if(Me(b))return b.value;if(En(b))return lr(b);if(ce(b))return qn(b,a,2)})):ce(t)?e?l=()=>qn(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),zt(t,a,3,[d])}:l=Jt,e&&r){const b=l;l=()=>lr(b())}let h,d=b=>{h=y.onStop=()=>{qn(b,a,4)}};if(ai)return d=Jt,e?n&&zt(e,a,3,[l(),c?[]:void 0,d]):l(),Jt;let f=c?[]:Yh;const p=()=>{if(!!y.active)if(e){const b=y.run();(r||u||(c?b.some((w,R)=>ri(w,f[R])):ri(b,f)))&&(h&&h(),zt(e,a,3,[b,f===Yh?void 0:f,d]),f=b)}else y.run()};p.allowRecurse=!!e;let g;s==="sync"?g=p:s==="post"?g=()=>Ct(p,a&&a.suspense):g=()=>{!a||a.isMounted?a_(p):p()};const y=new Yu(l,g);return e?n?p():f=y.run():s==="post"?Ct(y.run.bind(y),a&&a.suspense):y.run(),()=>{y.stop(),a&&a.scope&&Wu(a.scope.effects,y)}}function g_(t,e,n){const r=this.proxy,s=We(t)?t.includes(".")?ym(r,t):()=>r[t]:t.bind(r,r);let i;ce(e)?i=e:(i=e.handler,n=e);const o=tt;rs(this);const a=ic(s,i.bind(r),n);return o?rs(o):mr(),a}function ym(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function lr(t,e){if(!Ye(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Me(t))lr(t.value,e);else if(te(t))for(let n=0;n<t.length;n++)lr(t[n],e);else if(Bp(t)||Qr(t))t.forEach(n=>{lr(n,e)});else if(Up(t))for(const n in t)lr(t[n],e);return t}function v_(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return He(()=>{t.isMounted=!0}),Tm(()=>{t.isUnmounting=!0}),t}const jt=[Function,Array],y_={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:jt,onEnter:jt,onAfterEnter:jt,onEnterCancelled:jt,onBeforeLeave:jt,onLeave:jt,onAfterLeave:jt,onLeaveCancelled:jt,onBeforeAppear:jt,onAppear:jt,onAfterAppear:jt,onAppearCancelled:jt},setup(t,{slots:e}){const n=_s(),r=v_();let s;return()=>{const i=e.default&&wm(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const g of i)if(g.type!==qt){o=g;break}}const a=oe(t),{mode:l}=a;if(r.isLeaving)return ll(o);const u=Zh(o);if(!u)return ll(o);const c=Wl(u,a,r,n);Gl(u,c);const h=n.subTree,d=h&&Zh(h);let f=!1;const{getTransitionKey:p}=u.type;if(p){const g=p();s===void 0?s=g:g!==s&&(s=g,f=!0)}if(d&&d.type!==qt&&(!or(u,d)||f)){const g=Wl(d,a,r,n);if(Gl(d,g),l==="out-in")return r.isLeaving=!0,g.afterLeave=()=>{r.isLeaving=!1,n.update()},ll(o);l==="in-out"&&u.type!==qt&&(g.delayLeave=(y,b,w)=>{const R=_m(r,d);R[String(d.key)]=d,y._leaveCb=()=>{b(),y._leaveCb=void 0,delete c.delayedLeave},c.delayedLeave=w})}return o}}},bm=y_;function _m(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Wl(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:u,onEnterCancelled:c,onBeforeLeave:h,onLeave:d,onAfterLeave:f,onLeaveCancelled:p,onBeforeAppear:g,onAppear:y,onAfterAppear:b,onAppearCancelled:w}=e,R=String(t.key),F=_m(n,t),j=(S,le)=>{S&&zt(S,r,9,le)},P={mode:i,persisted:o,beforeEnter(S){let le=a;if(!n.isMounted)if(s)le=g||a;else return;S._leaveCb&&S._leaveCb(!0);const Z=F[R];Z&&or(t,Z)&&Z.el._leaveCb&&Z.el._leaveCb(),j(le,[S])},enter(S){let le=l,Z=u,ve=c;if(!n.isMounted)if(s)le=y||l,Z=b||u,ve=w||c;else return;let De=!1;const H=S._enterCb=Ae=>{De||(De=!0,Ae?j(ve,[S]):j(Z,[S]),P.delayedLeave&&P.delayedLeave(),S._enterCb=void 0)};le?(le(S,H),le.length<=1&&H()):H()},leave(S,le){const Z=String(t.key);if(S._enterCb&&S._enterCb(!0),n.isUnmounting)return le();j(h,[S]);let ve=!1;const De=S._leaveCb=H=>{ve||(ve=!0,le(),H?j(p,[S]):j(f,[S]),S._leaveCb=void 0,F[Z]===t&&delete F[Z])};F[Z]=t,d?(d(S,De),d.length<=1&&De()):De()},clone(S){return Wl(S,e,n,r)}};return P}function ll(t){if(ga(t))return t=Wn(t),t.children=null,t}function Zh(t){return ga(t)?t.children?t.children[0]:void 0:t}function Gl(t,e){t.shapeFlag&6&&t.component?Gl(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function wm(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===lt?(o.patchFlag&128&&s++,r=r.concat(wm(o.children,e,a))):(e||o.type!==qt)&&r.push(a!=null?Wn(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function G(t){return ce(t)?{setup:t,name:t.name}:t}const So=t=>!!t.type.__asyncLoader,ga=t=>t.type.__isKeepAlive;function b_(t,e){Em(t,"a",e)}function __(t,e){Em(t,"da",e)}function Em(t,e,n=tt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(va(e,r,n),n){let s=n.parent;for(;s&&s.parent;)ga(s.parent.vnode)&&w_(r,e,n,s),s=s.parent}}function w_(t,e,n,r){const s=va(e,t,r,!0);it(()=>{Wu(r[e],s)},n)}function va(t,e,n=tt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ys(),rs(n);const a=zt(e,n,t,o);return mr(),bs(),a});return r?s.unshift(i):s.push(i),i}}const Cn=t=>(e,n=tt)=>(!ai||t==="sp")&&va(t,e,n),Im=Cn("bm"),He=Cn("m"),E_=Cn("bu"),oc=Cn("u"),Tm=Cn("bum"),it=Cn("um"),I_=Cn("sp"),T_=Cn("rtg"),A_=Cn("rtc");function S_(t,e=tt){va("ec",t,e)}let Xl=!0;function C_(t){const e=Sm(t),n=t.proxy,r=t.ctx;Xl=!1,e.beforeCreate&&Jh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:u,created:c,beforeMount:h,mounted:d,beforeUpdate:f,updated:p,activated:g,deactivated:y,beforeDestroy:b,beforeUnmount:w,destroyed:R,unmounted:F,render:j,renderTracked:P,renderTriggered:S,errorCaptured:le,serverPrefetch:Z,expose:ve,inheritAttrs:De,components:H,directives:Ae,filters:Ce}=e;if(u&&k_(u,r,null,t.appContext.config.unwrapInjectedRef),o)for(const Se in o){const xe=o[Se];ce(xe)&&(r[Se]=xe.bind(n))}if(s){const Se=s.call(n,n);Ye(Se)&&(t.data=xr(Se))}if(Xl=!0,i)for(const Se in i){const xe=i[Se],Rt=ce(xe)?xe.bind(n,n):ce(xe.get)?xe.get.bind(n,n):Jt,Mr=!ce(xe)&&ce(xe.set)?xe.set.bind(n):Jt,pn=x({get:Rt,set:Mr});Object.defineProperty(r,Se,{enumerable:!0,configurable:!0,get:()=>pn.value,set:nn=>pn.value=nn})}if(a)for(const Se in a)Am(a[Se],r,n,Se);if(l){const Se=ce(l)?l.call(n):l;Reflect.ownKeys(Se).forEach(xe=>{Ve(xe,Se[xe])})}c&&Jh(c,t,"c");function Ue(Se,xe){te(xe)?xe.forEach(Rt=>Se(Rt.bind(n))):xe&&Se(xe.bind(n))}if(Ue(Im,h),Ue(He,d),Ue(E_,f),Ue(oc,p),Ue(b_,g),Ue(__,y),Ue(S_,le),Ue(A_,P),Ue(T_,S),Ue(Tm,w),Ue(it,F),Ue(I_,Z),te(ve))if(ve.length){const Se=t.exposed||(t.exposed={});ve.forEach(xe=>{Object.defineProperty(Se,xe,{get:()=>n[xe],set:Rt=>n[xe]=Rt})})}else t.exposed||(t.exposed={});j&&t.render===Jt&&(t.render=j),De!=null&&(t.inheritAttrs=De),H&&(t.components=H),Ae&&(t.directives=Ae)}function k_(t,e,n=Jt,r=!1){te(t)&&(t=Ql(t));for(const s in t){const i=t[s];let o;Ye(i)?"default"in i?o=we(i.from||s,i.default,!0):o=we(i.from||s):o=we(i),Me(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function Jh(t,e,n){zt(te(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Am(t,e,n,r){const s=r.includes(".")?ym(n,r):()=>n[r];if(We(t)){const i=e[t];ce(i)&&bt(s,i)}else if(ce(t))bt(s,t.bind(n));else if(Ye(t))if(te(t))t.forEach(i=>Am(i,e,n,r));else{const i=ce(t.handler)?t.handler.bind(n):e[t.handler];ce(i)&&bt(s,i,t)}}function Sm(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>Co(l,u,o,!0)),Co(l,e,o)),i.set(e,l),l}function Co(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Co(t,i,n,!0),s&&s.forEach(o=>Co(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=D_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const D_={data:ed,props:sr,emits:sr,methods:sr,computed:sr,beforeCreate:It,created:It,beforeMount:It,mounted:It,beforeUpdate:It,updated:It,beforeDestroy:It,beforeUnmount:It,destroyed:It,unmounted:It,activated:It,deactivated:It,errorCaptured:It,serverPrefetch:It,components:sr,directives:sr,watch:R_,provide:ed,inject:x_};function ed(t,e){return e?t?function(){return ft(ce(t)?t.call(this,this):t,ce(e)?e.call(this,this):e)}:e:t}function x_(t,e){return sr(Ql(t),Ql(e))}function Ql(t){if(te(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function It(t,e){return t?[...new Set([].concat(t,e))]:e}function sr(t,e){return t?ft(ft(Object.create(null),t),e):e}function R_(t,e){if(!t)return e;if(!e)return t;const n=ft(Object.create(null),t);for(const r in e)n[r]=It(t[r],e[r]);return n}function O_(t,e,n,r=!1){const s={},i={};Eo(i,ya,1),t.propsDefaults=Object.create(null),Cm(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Yb(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function P_(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=oe(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const c=t.vnode.dynamicProps;for(let h=0;h<c.length;h++){let d=c[h];if(pa(t.emitsOptions,d))continue;const f=e[d];if(l)if(be(i,d))f!==i[d]&&(i[d]=f,u=!0);else{const p=un(d);s[p]=Yl(l,a,p,f,t,!1)}else f!==i[d]&&(i[d]=f,u=!0)}}}else{Cm(t,e,s,i)&&(u=!0);let c;for(const h in a)(!e||!be(e,h)&&((c=Dr(h))===h||!be(e,c)))&&(l?n&&(n[h]!==void 0||n[c]!==void 0)&&(s[h]=Yl(l,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!be(e,h)&&!0)&&(delete i[h],u=!0)}u&&Tn(t,"set","$attrs")}function Cm(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(co(l))continue;const u=e[l];let c;s&&be(s,c=un(l))?!i||!i.includes(c)?n[c]=u:(a||(a={}))[c]=u:pa(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=oe(n),u=a||Ne;for(let c=0;c<i.length;c++){const h=i[c];n[h]=Yl(s,l,h,u[h],t,!be(u,h))}}return o}function Yl(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=be(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&ce(l)){const{propsDefaults:u}=s;n in u?r=u[n]:(rs(s),r=u[n]=l.call(null,e),mr())}else r=l}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Dr(n))&&(r=!0))}return r}function km(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!ce(t)){const c=h=>{l=!0;const[d,f]=km(h,e,!0);ft(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}if(!i&&!l)return r.set(t,Xr),Xr;if(te(i))for(let c=0;c<i.length;c++){const h=un(i[c]);td(h)&&(o[h]=Ne)}else if(i)for(const c in i){const h=un(c);if(td(h)){const d=i[c],f=o[h]=te(d)||ce(d)?{type:d}:d;if(f){const p=sd(Boolean,f.type),g=sd(String,f.type);f[0]=p>-1,f[1]=g<0||p<g,(p>-1||be(f,"default"))&&a.push(h)}}}const u=[o,a];return r.set(t,u),u}function td(t){return t[0]!=="$"}function nd(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function rd(t,e){return nd(t)===nd(e)}function sd(t,e){return te(e)?e.findIndex(n=>rd(n,t)):ce(e)&&rd(e,t)?0:-1}const Dm=t=>t[0]==="_"||t==="$stable",ac=t=>te(t)?t.map(on):[on(t)],N_=(t,e,n)=>{const r=ot((...s)=>ac(e(...s)),n);return r._c=!1,r},xm=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Dm(s))continue;const i=t[s];if(ce(i))e[s]=N_(s,i,r);else if(i!=null){const o=ac(i);e[s]=()=>o}}},Rm=(t,e)=>{const n=ac(e);t.slots.default=()=>n},L_=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=oe(e),Eo(e,"_",n)):xm(e,t.slots={})}else t.slots={},e&&Rm(t,e);Eo(t.slots,ya,1)},M_=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ne;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(ft(s,e),!n&&a===1&&delete s._):(i=!e.$stable,xm(e,s)),o=e}else e&&(Rm(t,e),o={default:1});if(i)for(const a in s)!Dm(a)&&!(a in o)&&delete s[a]};function Si(t,e){const n=yt;if(n===null)return t;const r=_a(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,l,u=Ne]=e[i];ce(o)&&(o={mounted:o,updated:o}),o.deep&&lr(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:l,modifiers:u})}return t}function er(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(ys(),zt(l,n,8,[t.el,a,t,e]),bs())}}function Om(){return{app:null,config:{isNativeTag:gb,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let F_=0;function B_(t,e){return function(r,s=null){ce(r)||(r=Object.assign({},r)),s!=null&&!Ye(s)&&(s=null);const i=Om(),o=new Set;let a=!1;const l=i.app={_uid:F_++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:lw,get config(){return i.config},set config(u){},use(u,...c){return o.has(u)||(u&&ce(u.install)?(o.add(u),u.install(l,...c)):ce(u)&&(o.add(u),u(l,...c))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,c){return c?(i.components[u]=c,l):i.components[u]},directive(u,c){return c?(i.directives[u]=c,l):i.directives[u]},mount(u,c,h){if(!a){const d=ee(r,s);return d.appContext=i,c&&e?e(d,u):t(d,u,h),a=!0,l._container=u,u.__vue_app__=l,_a(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(u,c){return i.provides[u]=c,l}};return l}}function Zl(t,e,n,r,s=!1){if(te(t)){t.forEach((d,f)=>Zl(d,e&&(te(e)?e[f]:e),n,r,s));return}if(So(r)&&!s)return;const i=r.shapeFlag&4?_a(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:l}=t,u=e&&e.r,c=a.refs===Ne?a.refs={}:a.refs,h=a.setupState;if(u!=null&&u!==l&&(We(u)?(c[u]=null,be(h,u)&&(h[u]=null)):Me(u)&&(u.value=null)),ce(l))qn(l,a,12,[o,c]);else{const d=We(l),f=Me(l);if(d||f){const p=()=>{if(t.f){const g=d?c[l]:l.value;s?te(g)&&Wu(g,i):te(g)?g.includes(i)||g.push(i):d?(c[l]=[i],be(h,l)&&(h[l]=c[l])):(l.value=[i],t.k&&(c[t.k]=l.value))}else d?(c[l]=o,be(h,l)&&(h[l]=o)):Me(l)&&(l.value=o,t.k&&(c[t.k]=o))};o?(p.id=-1,Ct(p,n)):p()}}}const Ct=m_;function $_(t){return V_(t)}function V_(t,e){const n=Eb();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:u,setElementText:c,parentNode:h,nextSibling:d,setScopeId:f=Jt,cloneNode:p,insertStaticContent:g}=t,y=(m,v,_,T=null,I=null,N=null,V=!1,O=null,M=!!v.dynamicChildren)=>{if(m===v)return;m&&!or(m,v)&&(T=W(m),Ut(m,I,N,!0),m=null),v.patchFlag===-2&&(M=!1,v.dynamicChildren=null);const{type:C,ref:X,shapeFlag:z}=v;switch(C){case dc:b(m,v,_,T);break;case qt:w(m,v,_,T);break;case ul:m==null&&R(v,_,T,V);break;case lt:Ae(m,v,_,T,I,N,V,O,M);break;default:z&1?P(m,v,_,T,I,N,V,O,M):z&6?Ce(m,v,_,T,I,N,V,O,M):(z&64||z&128)&&C.process(m,v,_,T,I,N,V,O,M,Le)}X!=null&&I&&Zl(X,m&&m.ref,N,v||m,!v)},b=(m,v,_,T)=>{if(m==null)r(v.el=a(v.children),_,T);else{const I=v.el=m.el;v.children!==m.children&&u(I,v.children)}},w=(m,v,_,T)=>{m==null?r(v.el=l(v.children||""),_,T):v.el=m.el},R=(m,v,_,T)=>{[m.el,m.anchor]=g(m.children,v,_,T,m.el,m.anchor)},F=({el:m,anchor:v},_,T)=>{let I;for(;m&&m!==v;)I=d(m),r(m,_,T),m=I;r(v,_,T)},j=({el:m,anchor:v})=>{let _;for(;m&&m!==v;)_=d(m),s(m),m=_;s(v)},P=(m,v,_,T,I,N,V,O,M)=>{V=V||v.type==="svg",m==null?S(v,_,T,I,N,V,O,M):ve(m,v,I,N,V,O,M)},S=(m,v,_,T,I,N,V,O)=>{let M,C;const{type:X,props:z,shapeFlag:Q,transition:re,patchFlag:_e,dirs:je}=m;if(m.el&&p!==void 0&&_e===-1)M=m.el=p(m.el);else{if(M=m.el=o(m.type,N,z&&z.is,z),Q&8?c(M,m.children):Q&16&&Z(m.children,M,null,T,I,N&&X!=="foreignObject",V,O),je&&er(m,null,T,"created"),z){for(const Be in z)Be!=="value"&&!co(Be)&&i(M,Be,null,z[Be],N,m.children,T,I,B);"value"in z&&i(M,"value",null,z.value),(C=z.onVnodeBeforeMount)&&sn(C,T,m)}le(M,m,m.scopeId,V,T)}je&&er(m,null,T,"beforeMount");const Oe=(!I||I&&!I.pendingBranch)&&re&&!re.persisted;Oe&&re.beforeEnter(M),r(M,v,_),((C=z&&z.onVnodeMounted)||Oe||je)&&Ct(()=>{C&&sn(C,T,m),Oe&&re.enter(M),je&&er(m,null,T,"mounted")},I)},le=(m,v,_,T,I)=>{if(_&&f(m,_),T)for(let N=0;N<T.length;N++)f(m,T[N]);if(I){let N=I.subTree;if(v===N){const V=I.vnode;le(m,V,V.scopeId,V.slotScopeIds,I.parent)}}},Z=(m,v,_,T,I,N,V,O,M=0)=>{for(let C=M;C<m.length;C++){const X=m[C]=O?Bn(m[C]):on(m[C]);y(null,X,v,_,T,I,N,V,O)}},ve=(m,v,_,T,I,N,V)=>{const O=v.el=m.el;let{patchFlag:M,dynamicChildren:C,dirs:X}=v;M|=m.patchFlag&16;const z=m.props||Ne,Q=v.props||Ne;let re;_&&tr(_,!1),(re=Q.onVnodeBeforeUpdate)&&sn(re,_,v,m),X&&er(v,m,_,"beforeUpdate"),_&&tr(_,!0);const _e=I&&v.type!=="foreignObject";if(C?De(m.dynamicChildren,C,O,_,T,_e,N):V||Rt(m,v,O,null,_,T,_e,N,!1),M>0){if(M&16)H(O,v,z,Q,_,T,I);else if(M&2&&z.class!==Q.class&&i(O,"class",null,Q.class,I),M&4&&i(O,"style",z.style,Q.style,I),M&8){const je=v.dynamicProps;for(let Oe=0;Oe<je.length;Oe++){const Be=je[Oe],Gt=z[Be],Fr=Q[Be];(Fr!==Gt||Be==="value")&&i(O,Be,Gt,Fr,I,m.children,_,T,B)}}M&1&&m.children!==v.children&&c(O,v.children)}else!V&&C==null&&H(O,v,z,Q,_,T,I);((re=Q.onVnodeUpdated)||X)&&Ct(()=>{re&&sn(re,_,v,m),X&&er(v,m,_,"updated")},T)},De=(m,v,_,T,I,N,V)=>{for(let O=0;O<v.length;O++){const M=m[O],C=v[O],X=M.el&&(M.type===lt||!or(M,C)||M.shapeFlag&70)?h(M.el):_;y(M,C,X,null,T,I,N,V,!0)}},H=(m,v,_,T,I,N,V)=>{if(_!==T){for(const O in T){if(co(O))continue;const M=T[O],C=_[O];M!==C&&O!=="value"&&i(m,O,C,M,V,v.children,I,N,B)}if(_!==Ne)for(const O in _)!co(O)&&!(O in T)&&i(m,O,_[O],null,V,v.children,I,N,B);"value"in T&&i(m,"value",_.value,T.value)}},Ae=(m,v,_,T,I,N,V,O,M)=>{const C=v.el=m?m.el:a(""),X=v.anchor=m?m.anchor:a("");let{patchFlag:z,dynamicChildren:Q,slotScopeIds:re}=v;re&&(O=O?O.concat(re):re),m==null?(r(C,_,T),r(X,_,T),Z(v.children,_,X,I,N,V,O,M)):z>0&&z&64&&Q&&m.dynamicChildren?(De(m.dynamicChildren,Q,_,I,N,V,O),(v.key!=null||I&&v===I.subTree)&&lc(m,v,!0)):Rt(m,v,_,X,I,N,V,O,M)},Ce=(m,v,_,T,I,N,V,O,M)=>{v.slotScopeIds=O,m==null?v.shapeFlag&512?I.ctx.activate(v,_,T,V,M):tn(v,_,T,I,N,V,M):Ue(m,v,M)},tn=(m,v,_,T,I,N,V)=>{const O=m.component=tw(m,T,I);if(ga(m)&&(O.ctx.renderer=Le),nw(O),O.asyncDep){if(I&&I.registerDep(O,Se),!m.el){const M=O.subTree=ee(qt);w(null,M,v,_)}return}Se(O,m,v,_,I,N,V)},Ue=(m,v,_)=>{const T=v.component=m.component;if(d_(m,v,_))if(T.asyncDep&&!T.asyncResolved){xe(T,v,_);return}else T.next=v,o_(T.update),T.update();else v.component=m.component,v.el=m.el,T.vnode=v},Se=(m,v,_,T,I,N,V)=>{const O=()=>{if(m.isMounted){let{next:X,bu:z,u:Q,parent:re,vnode:_e}=m,je=X,Oe;tr(m,!1),X?(X.el=_e.el,xe(m,X,V)):X=_e,z&&ho(z),(Oe=X.props&&X.props.onVnodeBeforeUpdate)&&sn(Oe,re,X,_e),tr(m,!0);const Be=al(m),Gt=m.subTree;m.subTree=Be,y(Gt,Be,h(Gt.el),W(Gt),m,I,N),X.el=Be.el,je===null&&f_(m,Be.el),Q&&Ct(Q,I),(Oe=X.props&&X.props.onVnodeUpdated)&&Ct(()=>sn(Oe,re,X,_e),I)}else{let X;const{el:z,props:Q}=v,{bm:re,m:_e,parent:je}=m,Oe=So(v);if(tr(m,!1),re&&ho(re),!Oe&&(X=Q&&Q.onVnodeBeforeMount)&&sn(X,je,v),tr(m,!0),z&&he){const Be=()=>{m.subTree=al(m),he(z,m.subTree,m,I,null)};Oe?v.type.__asyncLoader().then(()=>!m.isUnmounted&&Be()):Be()}else{const Be=m.subTree=al(m);y(null,Be,_,T,m,I,N),v.el=Be.el}if(_e&&Ct(_e,I),!Oe&&(X=Q&&Q.onVnodeMounted)){const Be=v;Ct(()=>sn(X,je,Be),I)}v.shapeFlag&256&&m.a&&Ct(m.a,I),m.isMounted=!0,v=_=T=null}},M=m.effect=new Yu(O,()=>cm(m.update),m.scope),C=m.update=M.run.bind(M);C.id=m.uid,tr(m,!0),C()},xe=(m,v,_)=>{v.component=m;const T=m.vnode.props;m.vnode=v,m.next=null,P_(m,v.props,T,_),M_(m,v.children,_),ys(),sc(void 0,m.update),bs()},Rt=(m,v,_,T,I,N,V,O,M=!1)=>{const C=m&&m.children,X=m?m.shapeFlag:0,z=v.children,{patchFlag:Q,shapeFlag:re}=v;if(Q>0){if(Q&128){pn(C,z,_,T,I,N,V,O,M);return}else if(Q&256){Mr(C,z,_,T,I,N,V,O,M);return}}re&8?(X&16&&B(C,I,N),z!==C&&c(_,z)):X&16?re&16?pn(C,z,_,T,I,N,V,O,M):B(C,I,N,!0):(X&8&&c(_,""),re&16&&Z(z,_,T,I,N,V,O,M))},Mr=(m,v,_,T,I,N,V,O,M)=>{m=m||Xr,v=v||Xr;const C=m.length,X=v.length,z=Math.min(C,X);let Q;for(Q=0;Q<z;Q++){const re=v[Q]=M?Bn(v[Q]):on(v[Q]);y(m[Q],re,_,null,I,N,V,O,M)}C>X?B(m,I,N,!0,!1,z):Z(v,_,T,I,N,V,O,M,z)},pn=(m,v,_,T,I,N,V,O,M)=>{let C=0;const X=v.length;let z=m.length-1,Q=X-1;for(;C<=z&&C<=Q;){const re=m[C],_e=v[C]=M?Bn(v[C]):on(v[C]);if(or(re,_e))y(re,_e,_,null,I,N,V,O,M);else break;C++}for(;C<=z&&C<=Q;){const re=m[z],_e=v[Q]=M?Bn(v[Q]):on(v[Q]);if(or(re,_e))y(re,_e,_,null,I,N,V,O,M);else break;z--,Q--}if(C>z){if(C<=Q){const re=Q+1,_e=re<X?v[re].el:T;for(;C<=Q;)y(null,v[C]=M?Bn(v[C]):on(v[C]),_,_e,I,N,V,O,M),C++}}else if(C>Q)for(;C<=z;)Ut(m[C],I,N,!0),C++;else{const re=C,_e=C,je=new Map;for(C=_e;C<=Q;C++){const Ot=v[C]=M?Bn(v[C]):on(v[C]);Ot.key!=null&&je.set(Ot.key,C)}let Oe,Be=0;const Gt=Q-_e+1;let Fr=!1,Fh=0;const Os=new Array(Gt);for(C=0;C<Gt;C++)Os[C]=0;for(C=re;C<=z;C++){const Ot=m[C];if(Be>=Gt){Ut(Ot,I,N,!0);continue}let rn;if(Ot.key!=null)rn=je.get(Ot.key);else for(Oe=_e;Oe<=Q;Oe++)if(Os[Oe-_e]===0&&or(Ot,v[Oe])){rn=Oe;break}rn===void 0?Ut(Ot,I,N,!0):(Os[rn-_e]=C+1,rn>=Fh?Fh=rn:Fr=!0,y(Ot,v[rn],_,null,I,N,V,O,M),Be++)}const Bh=Fr?U_(Os):Xr;for(Oe=Bh.length-1,C=Gt-1;C>=0;C--){const Ot=_e+C,rn=v[Ot],$h=Ot+1<X?v[Ot+1].el:T;Os[C]===0?y(null,rn,_,$h,I,N,V,O,M):Fr&&(Oe<0||C!==Bh[Oe]?nn(rn,_,$h,2):Oe--)}}},nn=(m,v,_,T,I=null)=>{const{el:N,type:V,transition:O,children:M,shapeFlag:C}=m;if(C&6){nn(m.component.subTree,v,_,T);return}if(C&128){m.suspense.move(v,_,T);return}if(C&64){V.move(m,v,_,Le);return}if(V===lt){r(N,v,_);for(let z=0;z<M.length;z++)nn(M[z],v,_,T);r(m.anchor,v,_);return}if(V===ul){F(m,v,_);return}if(T!==2&&C&1&&O)if(T===0)O.beforeEnter(N),r(N,v,_),Ct(()=>O.enter(N),I);else{const{leave:z,delayLeave:Q,afterLeave:re}=O,_e=()=>r(N,v,_),je=()=>{z(N,()=>{_e(),re&&re()})};Q?Q(N,_e,je):je()}else r(N,v,_)},Ut=(m,v,_,T=!1,I=!1)=>{const{type:N,props:V,ref:O,children:M,dynamicChildren:C,shapeFlag:X,patchFlag:z,dirs:Q}=m;if(O!=null&&Zl(O,null,_,m,!0),X&256){v.ctx.deactivate(m);return}const re=X&1&&Q,_e=!So(m);let je;if(_e&&(je=V&&V.onVnodeBeforeUnmount)&&sn(je,v,m),X&6)q(m.component,_,T);else{if(X&128){m.suspense.unmount(_,T);return}re&&er(m,null,v,"beforeUnmount"),X&64?m.type.remove(m,v,_,I,Le,T):C&&(N!==lt||z>0&&z&64)?B(C,v,_,!1,!0):(N===lt&&z&384||!I&&X&16)&&B(M,v,_),T&&il(m)}(_e&&(je=V&&V.onVnodeUnmounted)||re)&&Ct(()=>{je&&sn(je,v,m),re&&er(m,null,v,"unmounted")},_)},il=m=>{const{type:v,el:_,anchor:T,transition:I}=m;if(v===lt){E(_,T);return}if(v===ul){j(m);return}const N=()=>{s(_),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(m.shapeFlag&1&&I&&!I.persisted){const{leave:V,delayLeave:O}=I,M=()=>V(_,N);O?O(m.el,N,M):M()}else N()},E=(m,v)=>{let _;for(;m!==v;)_=d(m),s(m),m=_;s(v)},q=(m,v,_)=>{const{bum:T,scope:I,update:N,subTree:V,um:O}=m;T&&ho(T),I.stop(),N&&(N.active=!1,Ut(V,m,v,_)),O&&Ct(O,v),Ct(()=>{m.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},B=(m,v,_,T=!1,I=!1,N=0)=>{for(let V=N;V<m.length;V++)Ut(m[V],v,_,T,I)},W=m=>m.shapeFlag&6?W(m.component.subTree):m.shapeFlag&128?m.suspense.next():d(m.anchor||m.el),Re=(m,v,_)=>{m==null?v._vnode&&Ut(v._vnode,null,null,!0):y(v._vnode||null,m,v,null,null,null,_),fm(),v._vnode=m},Le={p:y,um:Ut,m:nn,r:il,mt:tn,mc:Z,pc:Rt,pbc:De,n:W,o:t};let fe,he;return e&&([fe,he]=e(Le)),{render:Re,hydrate:fe,createApp:B_(Re,fe)}}function tr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function lc(t,e,n=!1){const r=t.children,s=e.children;if(te(r)&&te(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Bn(s[i]),a.el=o.el),n||lc(o,a))}}function U_(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const j_=t=>t.__isTeleport,Hs=t=>t&&(t.disabled||t.disabled===""),id=t=>typeof SVGElement!="undefined"&&t instanceof SVGElement,Jl=(t,e)=>{const n=t&&t.to;return We(n)?e?e(n):null:n},z_={__isTeleport:!0,process(t,e,n,r,s,i,o,a,l,u){const{mc:c,pc:h,pbc:d,o:{insert:f,querySelector:p,createText:g,createComment:y}}=u,b=Hs(e.props);let{shapeFlag:w,children:R,dynamicChildren:F}=e;if(t==null){const j=e.el=g(""),P=e.anchor=g("");f(j,n,r),f(P,n,r);const S=e.target=Jl(e.props,p),le=e.targetAnchor=g("");S&&(f(le,S),o=o||id(S));const Z=(ve,De)=>{w&16&&c(R,ve,De,s,i,o,a,l)};b?Z(n,P):S&&Z(S,le)}else{e.el=t.el;const j=e.anchor=t.anchor,P=e.target=t.target,S=e.targetAnchor=t.targetAnchor,le=Hs(t.props),Z=le?n:P,ve=le?j:S;if(o=o||id(P),F?(d(t.dynamicChildren,F,Z,s,i,o,a),lc(t,e,!0)):l||h(t,e,Z,ve,s,i,o,a,!1),b)le||no(e,n,j,u,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const De=e.target=Jl(e.props,p);De&&no(e,De,null,u,0)}else le&&no(e,P,S,u,1)}},remove(t,e,n,r,{um:s,o:{remove:i}},o){const{shapeFlag:a,children:l,anchor:u,targetAnchor:c,target:h,props:d}=t;if(h&&i(c),(o||!Hs(d))&&(i(u),a&16))for(let f=0;f<l.length;f++){const p=l[f];s(p,e,n,!0,!!p.dynamicChildren)}},move:no,hydrate:q_};function no(t,e,n,{o:{insert:r},m:s},i=2){i===0&&r(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:u,props:c}=t,h=i===2;if(h&&r(o,e,n),(!h||Hs(c))&&l&16)for(let d=0;d<u.length;d++)s(u[d],e,n,2);h&&r(a,e,n)}function q_(t,e,n,r,s,i,{o:{nextSibling:o,parentNode:a,querySelector:l}},u){const c=e.target=Jl(e.props,l);if(c){const h=c._lpa||c.firstChild;e.shapeFlag&16&&(Hs(e.props)?(e.anchor=u(o(t),e,a(t),n,r,s,i),e.targetAnchor=h):(e.anchor=o(t),e.targetAnchor=u(h,e,c,n,r,s,i)),c._lpa=e.targetAnchor&&o(e.targetAnchor))}return e.anchor&&o(e.anchor)}const H_=z_,uc="components",K_="directives";function cc(t,e){return hc(uc,t,!0,e)||t}const Pm=Symbol();function W_(t){return We(t)?hc(uc,t,!1)||t:t||Pm}function G_(t){return hc(K_,t)}function hc(t,e,n=!0,r=!1){const s=yt||tt;if(s){const i=s.type;if(t===uc){const a=ow(i);if(a&&(a===e||a===un(e)||a===ha(un(e))))return i}const o=od(s[t]||i[t],e)||od(s.appContext[t],e);return!o&&r?i:o}}function od(t,e){return t&&(t[e]||t[un(e)]||t[ha(un(e))])}const lt=Symbol(void 0),dc=Symbol(void 0),qt=Symbol(void 0),ul=Symbol(void 0),Ks=[];let pr=null;function ge(t=!1){Ks.push(pr=t?null:[])}function X_(){Ks.pop(),pr=Ks[Ks.length-1]||null}let ko=1;function ad(t){ko+=t}function Nm(t){return t.dynamicChildren=ko>0?pr||Xr:null,X_(),ko>0&&pr&&pr.push(t),t}function Je(t,e,n,r,s,i){return Nm(me(t,e,n,r,s,i,!0))}function _t(t,e,n,r,s){return Nm(ee(t,e,n,r,s,!0))}function Do(t){return t?t.__v_isVNode===!0:!1}function or(t,e){return t.type===e.type&&t.key===e.key}const ya="__vInternal",Lm=({key:t})=>t!=null?t:null,fo=({ref:t,ref_key:e,ref_for:n})=>t!=null?We(t)||Me(t)||ce(t)?{i:yt,r:t,k:e,f:!!n}:t:null;function me(t,e=null,n=null,r=0,s=null,i=t===lt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Lm(e),ref:e&&fo(e),scopeId:ma,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(fc(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=We(n)?8:16),ko>0&&!o&&pr&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&pr.push(l),l}const ee=Q_;function Q_(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Pm)&&(t=qt),Do(t)){const a=Wn(t,e,!0);return n&&fc(a,n),a}if(aw(t)&&(t=t.__vccOpts),e){e=Mm(e);let{class:a,style:l}=e;a&&!We(a)&&(e.class=wn(a)),Ye(l)&&(nm(l)&&!te(l)&&(l=ft({},l)),e.style=oa(l))}const o=We(t)?1:p_(t)?128:j_(t)?64:Ye(t)?4:ce(t)?2:0;return me(t,e,n,r,s,o,i,!0)}function Mm(t){return t?nm(t)||ya in t?ft({},t):t:null}function Wn(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?pc(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Lm(a),ref:e&&e.ref?n&&s?te(s)?s.concat(fo(e)):[s,fo(e)]:fo(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==lt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Wn(t.ssContent),ssFallback:t.ssFallback&&Wn(t.ssFallback),el:t.el,anchor:t.anchor}}function Ci(t=" ",e=0){return ee(dc,null,t,e)}function Y_(t="",e=!1){return e?(ge(),_t(qt,null,t)):ee(qt,null,t)}function on(t){return t==null||typeof t=="boolean"?ee(qt):te(t)?ee(lt,null,t.slice()):typeof t=="object"?Bn(t):ee(dc,null,String(t))}function Bn(t){return t.el===null||t.memo?t:Wn(t)}function fc(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(te(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),fc(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(ya in e)?e._ctx=yt:s===3&&yt&&(yt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ce(e)?(e={default:e,_ctx:yt},n=32):(e=String(e),r&64?(n=16,e=[Ci(e)]):n=8);t.children=e,t.shapeFlag|=n}function pc(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=wn([e.class,r.class]));else if(s==="style")e.style=oa([e.style,r.style]);else if(la(s)){const i=e[s],o=r[s];o&&i!==o&&!(te(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function sn(t,e,n,r=null){zt(t,e,7,[n,r])}function eu(t,e,n,r){let s;const i=n&&n[r];if(te(t)||We(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Ye(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const u=o[a];s[a]=e(t[u],u,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}function ba(t,e,n={},r,s){if(yt.isCE||yt.parent&&So(yt.parent)&&yt.parent.isCE)return ee("slot",e==="default"?null:{name:e},r&&r());let i=t[e];i&&i._c&&(i._d=!1),ge();const o=i&&Fm(i(n)),a=_t(lt,{key:n.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function Fm(t){return t.some(e=>Do(e)?!(e.type===qt||e.type===lt&&!Fm(e.children)):!0)?t:null}const tu=t=>t?Bm(t)?_a(t)||t.proxy:tu(t.parent):null,xo=ft(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>tu(t.parent),$root:t=>tu(t.root),$emit:t=>t.emit,$options:t=>Sm(t),$forceUpdate:t=>()=>cm(t.update),$nextTick:t=>Te.bind(t.proxy),$watch:t=>g_.bind(t)}),Z_={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;let u;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(r!==Ne&&be(r,e))return o[e]=1,r[e];if(s!==Ne&&be(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&be(u,e))return o[e]=3,i[e];if(n!==Ne&&be(n,e))return o[e]=4,n[e];Xl&&(o[e]=0)}}const c=xo[e];let h,d;if(c)return e==="$attrs"&&Ft(t,"get",e),c(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ne&&be(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,be(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return s!==Ne&&be(s,e)?(s[e]=n,!0):r!==Ne&&be(r,e)?(r[e]=n,!0):be(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Ne&&be(t,o)||e!==Ne&&be(e,o)||(a=i[0])&&be(a,o)||be(r,o)||be(xo,o)||be(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:be(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},J_=Om();let ew=0;function tw(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||J_,i={uid:ew++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new jp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:km(r,s),emitsOptions:mm(r,s),emit:null,emitted:null,propsDefaults:Ne,inheritAttrs:r.inheritAttrs,ctx:Ne,data:Ne,props:Ne,attrs:Ne,slots:Ne,refs:Ne,setupState:Ne,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=u_.bind(null,i),t.ce&&t.ce(i),i}let tt=null;const _s=()=>tt||yt,rs=t=>{tt=t,t.scope.on()},mr=()=>{tt&&tt.scope.off(),tt=null};function Bm(t){return t.vnode.shapeFlag&4}let ai=!1;function nw(t,e=!1){ai=e;const{props:n,children:r}=t.vnode,s=Bm(t);O_(t,n,s,e),L_(t,r);const i=s?rw(t,e):void 0;return ai=!1,i}function rw(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ns(new Proxy(t.ctx,Z_));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?iw(t):null;rs(t),ys();const i=qn(r,t,0,[t.props,s]);if(bs(),mr(),$p(i)){if(i.then(mr,mr),e)return i.then(o=>{ld(t,o,e)}).catch(o=>{fa(o,t,0)});t.asyncDep=i}else ld(t,i,e)}else $m(t,e)}function ld(t,e,n){ce(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ye(e)&&(t.setupState=am(e)),$m(t,n)}let ud;function $m(t,e,n){const r=t.type;if(!t.render){if(!e&&ud&&!r.render){const s=r.template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,u=ft(ft({isCustomElement:i,delimiters:a},o),l);r.render=ud(s,u)}}t.render=r.render||Jt}rs(t),ys(),C_(t),bs(),mr()}function sw(t){return new Proxy(t.attrs,{get(e,n){return Ft(t,"get","$attrs"),e[n]}})}function iw(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=sw(t))},slots:t.slots,emit:t.emit,expose:e}}function _a(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(am(ns(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in xo)return xo[n](t)}}))}function ow(t){return ce(t)&&t.displayName||t.name}function aw(t){return ce(t)&&"__vccOpts"in t}const x=(t,e)=>r_(t,e,ai);function Zt(t,e,n){const r=arguments.length;return r===2?Ye(e)&&!te(e)?Do(e)?ee(t,null,[e]):ee(t,e):ee(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Do(n)&&(n=[n]),ee(t,e,n))}const lw="3.2.33",uw="http://www.w3.org/2000/svg",ar=typeof document!="undefined"?document:null,cd=ar&&ar.createElement("template"),cw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?ar.createElementNS(uw,t):ar.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>ar.createTextNode(t),createComment:t=>ar.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ar.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{cd.innerHTML=r?`<svg>${t}</svg>`:t;const a=cd.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function hw(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function dw(t,e,n){const r=t.style,s=We(n);if(n&&!s){for(const i in n)nu(r,i,n[i]);if(e&&!We(e))for(const i in e)n[i]==null&&nu(r,i,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const hd=/\s*!important$/;function nu(t,e,n){if(te(n))n.forEach(r=>nu(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=fw(t,e);hd.test(n)?t.setProperty(Dr(r),n.replace(hd,""),"important"):t[r]=n}}const dd=["Webkit","Moz","ms"],cl={};function fw(t,e){const n=cl[e];if(n)return n;let r=un(e);if(r!=="filter"&&r in t)return cl[e]=r;r=ha(r);for(let s=0;s<dd.length;s++){const i=dd[s]+r;if(i in t)return cl[e]=i}return e}const fd="http://www.w3.org/1999/xlink";function pw(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(fd,e.slice(6,e.length)):t.setAttributeNS(fd,e,n);else{const i=db(e);n==null||i&&!Lp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function mw(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n==null?"":n;(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Lp(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[Vm,gw]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=()=>performance.now());const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let ru=0;const vw=Promise.resolve(),yw=()=>{ru=0},bw=()=>ru||(vw.then(yw),ru=Vm());function Hr(t,e,n,r){t.addEventListener(e,n,r)}function _w(t,e,n,r){t.removeEventListener(e,n,r)}function ww(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=Ew(e);if(r){const u=i[e]=Iw(r,s);Hr(t,a,u,l)}else o&&(_w(t,a,o,l),i[e]=void 0)}}const pd=/(?:Once|Passive|Capture)$/;function Ew(t){let e;if(pd.test(t)){e={};let n;for(;n=t.match(pd);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Dr(t.slice(2)),e]}function Iw(t,e){const n=r=>{const s=r.timeStamp||Vm();(gw||s>=n.attached-1)&&zt(Tw(r,n.value),e,5,[r])};return n.value=t,n.attached=bw(),n}function Tw(t,e){if(te(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const md=/^on[a-z]/,Aw=(t,e,n,r,s=!1,i,o,a,l)=>{e==="class"?hw(t,r,s):e==="style"?dw(t,n,r):la(e)?Ku(e)||ww(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Sw(t,e,r,s))?mw(t,e,r,i,o,a,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),pw(t,e,r,s))};function Sw(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&md.test(e)&&ce(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||md.test(e)&&We(n)?!1:e in t}const Rn="transition",Ps="animation",li=(t,{slots:e})=>Zt(bm,Cw(t),e);li.displayName="Transition";const Um={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};li.props=ft({},bm.props,Um);const nr=(t,e=[])=>{te(t)?t.forEach(n=>n(...e)):t&&t(...e)},gd=t=>t?te(t)?t.some(e=>e.length>1):t.length>1:!1;function Cw(t){const e={};for(const H in t)H in Um||(e[H]=t[H]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:u=o,appearToClass:c=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=t,p=kw(s),g=p&&p[0],y=p&&p[1],{onBeforeEnter:b,onEnter:w,onEnterCancelled:R,onLeave:F,onLeaveCancelled:j,onBeforeAppear:P=b,onAppear:S=w,onAppearCancelled:le=R}=e,Z=(H,Ae,Ce)=>{Br(H,Ae?c:a),Br(H,Ae?u:o),Ce&&Ce()},ve=(H,Ae)=>{Br(H,f),Br(H,d),Ae&&Ae()},De=H=>(Ae,Ce)=>{const tn=H?S:w,Ue=()=>Z(Ae,H,Ce);nr(tn,[Ae,Ue]),vd(()=>{Br(Ae,H?l:i),On(Ae,H?c:a),gd(tn)||yd(Ae,r,g,Ue)})};return ft(e,{onBeforeEnter(H){nr(b,[H]),On(H,i),On(H,o)},onBeforeAppear(H){nr(P,[H]),On(H,l),On(H,u)},onEnter:De(!1),onAppear:De(!0),onLeave(H,Ae){const Ce=()=>ve(H,Ae);On(H,h),Rw(),On(H,d),vd(()=>{Br(H,h),On(H,f),gd(F)||yd(H,r,y,Ce)}),nr(F,[H,Ce])},onEnterCancelled(H){Z(H,!1),nr(R,[H])},onAppearCancelled(H){Z(H,!0),nr(le,[H])},onLeaveCancelled(H){ve(H),nr(j,[H])}})}function kw(t){if(t==null)return null;if(Ye(t))return[hl(t.enter),hl(t.leave)];{const e=hl(t);return[e,e]}}function hl(t){return Io(t)}function On(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function Br(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function vd(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Dw=0;function yd(t,e,n,r){const s=t._endId=++Dw,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:l}=xw(t,e);if(!o)return r();const u=o+"end";let c=0;const h=()=>{t.removeEventListener(u,d),i()},d=f=>{f.target===t&&++c>=l&&h()};setTimeout(()=>{c<l&&h()},a+1),t.addEventListener(u,d)}function xw(t,e){const n=window.getComputedStyle(t),r=p=>(n[p]||"").split(", "),s=r(Rn+"Delay"),i=r(Rn+"Duration"),o=bd(s,i),a=r(Ps+"Delay"),l=r(Ps+"Duration"),u=bd(a,l);let c=null,h=0,d=0;e===Rn?o>0&&(c=Rn,h=o,d=i.length):e===Ps?u>0&&(c=Ps,h=u,d=l.length):(h=Math.max(o,u),c=h>0?o>u?Rn:Ps:null,d=c?c===Rn?i.length:l.length:0);const f=c===Rn&&/\b(transform|all)(,|$)/.test(n[Rn+"Property"]);return{type:c,timeout:h,propCount:d,hasTransform:f}}function bd(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>_d(n)+_d(t[r])))}function _d(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function Rw(){return document.body.offsetHeight}const wd=t=>{const e=t.props["onUpdate:modelValue"];return te(e)?n=>ho(e,n):e};function Ow(t){t.target.composing=!0}function Ed(t){const e=t.target;e.composing&&(e.composing=!1,Pw(e,"input"))}function Pw(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const jm={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=wd(s);const i=r||s.props&&s.props.type==="number";Hr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n?a=a.trim():i&&(a=Io(a)),t._assign(a)}),n&&Hr(t,"change",()=>{t.value=t.value.trim()}),e||(Hr(t,"compositionstart",Ow),Hr(t,"compositionend",Ed),Hr(t,"change",Ed))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=wd(i),t.composing||document.activeElement===t&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Io(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},Nw=["ctrl","shift","alt","meta"],Lw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Nw.some(n=>t[`${n}Key`]&&!e.includes(n))},mc=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=Lw[e[s]];if(i&&i(n,e))return}return t(n,...r)},Mw={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},zm=(t,e)=>n=>{if(!("key"in n))return;const r=Dr(n.key);if(e.some(s=>s===r||Mw[s]===r))return t(n)},qm={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Ns(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Ns(t,!0),r.enter(t)):r.leave(t,()=>{Ns(t,!1)}):Ns(t,e))},beforeUnmount(t,{value:e}){Ns(t,e)}};function Ns(t,e){t.style.display=e?t._vod:"none"}const Fw=ft({patchProp:Aw},cw);let Id;function Bw(){return Id||(Id=$_(Fw))}const $w=(...t)=>{const e=Bw().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Vw(r);if(!s)return;const i=e._component;!ce(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Vw(t){return We(t)?document.querySelector(t):t}/*!
  * vue-router v4.0.14
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Hm=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",ws=t=>Hm?Symbol(t):"_vr_"+t,Uw=ws("rvlm"),Td=ws("rvd"),wa=ws("r"),gc=ws("rl"),su=ws("rvl"),Kr=typeof window!="undefined";function jw(t){return t.__esModule||Hm&&t[Symbol.toStringTag]==="Module"}const Pe=Object.assign;function dl(t,e){const n={};for(const r in e){const s=e[r];n[r]=Array.isArray(s)?s.map(t):t(s)}return n}const Ws=()=>{},zw=/\/$/,qw=t=>t.replace(zw,"");function fl(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("?"),l=e.indexOf("#",a>-1?a:0);return a>-1&&(r=e.slice(0,a),i=e.slice(a+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=Gw(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function Hw(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ad(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Kw(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&ss(e.matched[r],n.matched[s])&&Km(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ss(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Km(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Ww(t[n],e[n]))return!1;return!0}function Ww(t,e){return Array.isArray(t)?Sd(t,e):Array.isArray(e)?Sd(e,t):t===e}function Sd(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Gw(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],!(s===1||o==="."))if(o==="..")s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var ui;(function(t){t.pop="pop",t.push="push"})(ui||(ui={}));var Gs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Gs||(Gs={}));function Xw(t){if(!t)if(Kr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),qw(t)}const Qw=/^[^#]+#/;function Yw(t,e){return t.replace(Qw,"#")+e}function Zw(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ea=()=>({left:window.pageXOffset,top:window.pageYOffset});function Jw(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Zw(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Cd(t,e){return(history.state?history.state.position-e:-1)+t}const iu=new Map;function eE(t,e){iu.set(t,e)}function tE(t){const e=iu.get(t);return iu.delete(t),e}let nE=()=>location.protocol+"//"+location.host;function Wm(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),Ad(l,"")}return Ad(n,t)+r+s}function rE(t,e,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const f=Wm(t,location),p=n.value,g=e.value;let y=0;if(d){if(n.value=f,e.value=d,o&&o===p){o=null;return}y=g?d.position-g.position:0}else r(f);s.forEach(b=>{b(n.value,p,{delta:y,type:ui.pop,direction:y?y>0?Gs.forward:Gs.back:Gs.unknown})})};function l(){o=n.value}function u(d){s.push(d);const f=()=>{const p=s.indexOf(d);p>-1&&s.splice(p,1)};return i.push(f),f}function c(){const{history:d}=window;!d.state||d.replaceState(Pe({},d.state,{scroll:Ea()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",c),{pauseListeners:l,listen:u,destroy:h}}function kd(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ea():null}}function sE(t){const{history:e,location:n}=window,r={value:Wm(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,c){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:nE()+t+l;try{e[c?"replaceState":"pushState"](u,"",d),s.value=u}catch(f){console.error(f),n[c?"replace":"assign"](d)}}function o(l,u){const c=Pe({},e.state,kd(s.value.back,l,s.value.forward,!0),u,{position:s.value.position});i(l,c,!0),r.value=l}function a(l,u){const c=Pe({},s.value,e.state,{forward:l,scroll:Ea()});i(c.current,c,!0);const h=Pe({},kd(r.value,l,null),{position:c.position+1},u);i(l,h,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function iE(t){t=Xw(t);const e=sE(t),n=rE(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Pe({location:"",base:t,go:r,createHref:Yw.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function oE(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),iE(t)}function aE(t){return typeof t=="string"||t&&typeof t=="object"}function Gm(t){return typeof t=="string"||typeof t=="symbol"}const Pn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Xm=ws("nf");var Dd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Dd||(Dd={}));function is(t,e){return Pe(new Error,{type:t,[Xm]:!0},e)}function Nn(t,e){return t instanceof Error&&Xm in t&&(e==null||!!(t.type&e))}const xd="[^/]+?",lE={sensitive:!1,strict:!1,start:!0,end:!0},uE=/[.+*?^${}()[\]/\\]/g;function cE(t,e){const n=Pe({},lE,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const c=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let h=0;h<u.length;h++){const d=u[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(uE,"\\$&"),f+=40;else if(d.type===1){const{value:p,repeatable:g,optional:y,regexp:b}=d;i.push({name:p,repeatable:g,optional:y});const w=b||xd;if(w!==xd){f+=10;try{new RegExp(`(${w})`)}catch(F){throw new Error(`Invalid custom RegExp for param "${p}" (${w}): `+F.message)}}let R=g?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;h||(R=y&&u.length<2?`(?:/${R})`:"/"+R),y&&(R+="?"),s+=R,f+=20,y&&(f+=-8),g&&(f+=-20),w===".*"&&(f+=-50)}c.push(f)}r.push(c)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const c=u.match(o),h={};if(!c)return null;for(let d=1;d<c.length;d++){const f=c[d]||"",p=i[d-1];h[p.name]=f&&p.repeatable?f.split("/"):f}return h}function l(u){let c="",h=!1;for(const d of t){(!h||!c.endsWith("/"))&&(c+="/"),h=!1;for(const f of d)if(f.type===0)c+=f.value;else if(f.type===1){const{value:p,repeatable:g,optional:y}=f,b=p in u?u[p]:"";if(Array.isArray(b)&&!g)throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);const w=Array.isArray(b)?b.join("/"):b;if(!w)if(y)d.length<2&&(c.endsWith("/")?c=c.slice(0,-1):h=!0);else throw new Error(`Missing required param "${p}"`);c+=w}}return c}return{re:o,score:r,keys:i,parse:a,stringify:l}}function hE(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function dE(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=hE(r[n],s[n]);if(i)return i;n++}return s.length-r.length}const fE={type:0,value:""},pE=/[a-zA-Z0-9_]/;function mE(t){if(!t)return[[]];if(t==="/")return[[fE]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${u}": ${f}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,u="",c="";function h(){!u||(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function d(){u+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(u&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:l==="("?n=2:pE.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:n=3:c+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,c="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),s}function gE(t,e,n){const r=cE(mE(t.path),n),s=Pe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function vE(t,e){const n=[],r=new Map;e=Od({strict:!1,end:!0,sensitive:!1},e);function s(c){return r.get(c)}function i(c,h,d){const f=!d,p=bE(c);p.aliasOf=d&&d.record;const g=Od(e,c),y=[p];if("alias"in c){const R=typeof c.alias=="string"?[c.alias]:c.alias;for(const F of R)y.push(Pe({},p,{components:d?d.record.components:p.components,path:F,aliasOf:d?d.record:p}))}let b,w;for(const R of y){const{path:F}=R;if(h&&F[0]!=="/"){const j=h.record.path,P=j[j.length-1]==="/"?"":"/";R.path=h.record.path+(F&&P+F)}if(b=gE(R,h,g),d?d.alias.push(b):(w=w||b,w!==b&&w.alias.push(b),f&&c.name&&!Rd(b)&&o(c.name)),"children"in p){const j=p.children;for(let P=0;P<j.length;P++)i(j[P],b,d&&d.children[P])}d=d||b,l(b)}return w?()=>{o(w)}:Ws}function o(c){if(Gm(c)){const h=r.get(c);h&&(r.delete(c),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(c);h>-1&&(n.splice(h,1),c.record.name&&r.delete(c.record.name),c.children.forEach(o),c.alias.forEach(o))}}function a(){return n}function l(c){let h=0;for(;h<n.length&&dE(c,n[h])>=0&&(c.record.path!==n[h].record.path||!Qm(c,n[h]));)h++;n.splice(h,0,c),c.record.name&&!Rd(c)&&r.set(c.record.name,c)}function u(c,h){let d,f={},p,g;if("name"in c&&c.name){if(d=r.get(c.name),!d)throw is(1,{location:c});g=d.record.name,f=Pe(yE(h.params,d.keys.filter(w=>!w.optional).map(w=>w.name)),c.params),p=d.stringify(f)}else if("path"in c)p=c.path,d=n.find(w=>w.re.test(p)),d&&(f=d.parse(p),g=d.record.name);else{if(d=h.name?r.get(h.name):n.find(w=>w.re.test(h.path)),!d)throw is(1,{location:c,currentLocation:h});g=d.record.name,f=Pe({},h.params,c.params),p=d.stringify(f)}const y=[];let b=d;for(;b;)y.unshift(b.record),b=b.parent;return{name:g,path:p,params:f,matched:y,meta:wE(y)}}return t.forEach(c=>i(c)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function yE(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function bE(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:_E(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function _E(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function Rd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function wE(t){return t.reduce((e,n)=>Pe(e,n.meta),{})}function Od(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Qm(t,e){return e.children.some(n=>n===t||Qm(t,n))}const Ym=/#/g,EE=/&/g,IE=/\//g,TE=/=/g,AE=/\?/g,Zm=/\+/g,SE=/%5B/g,CE=/%5D/g,Jm=/%5E/g,kE=/%60/g,eg=/%7B/g,DE=/%7C/g,tg=/%7D/g,xE=/%20/g;function vc(t){return encodeURI(""+t).replace(DE,"|").replace(SE,"[").replace(CE,"]")}function RE(t){return vc(t).replace(eg,"{").replace(tg,"}").replace(Jm,"^")}function ou(t){return vc(t).replace(Zm,"%2B").replace(xE,"+").replace(Ym,"%23").replace(EE,"%26").replace(kE,"`").replace(eg,"{").replace(tg,"}").replace(Jm,"^")}function OE(t){return ou(t).replace(TE,"%3D")}function PE(t){return vc(t).replace(Ym,"%23").replace(AE,"%3F")}function NE(t){return t==null?"":PE(t).replace(IE,"%2F")}function Ro(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function LE(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Zm," "),o=i.indexOf("="),a=Ro(o<0?i:i.slice(0,o)),l=o<0?null:Ro(i.slice(o+1));if(a in e){let u=e[a];Array.isArray(u)||(u=e[a]=[u]),u.push(l)}else e[a]=l}return e}function Pd(t){let e="";for(let n in t){const r=t[n];if(n=OE(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(r)?r.map(i=>i&&ou(i)):[r&&ou(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function ME(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Array.isArray(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}function Ls(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function $n(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(is(4,{from:n,to:e})):h instanceof Error?a(h):aE(h)?a(is(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},u=t.call(r&&r.instances[s],e,n,l);let c=Promise.resolve(u);t.length<3&&(c=c.then(l)),c.catch(h=>a(h))})}function pl(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(FE(a)){const u=(a.__vccOpts||a)[e];u&&s.push($n(u,n,r,i,o))}else{let l=a();s.push(()=>l.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const c=jw(u)?u.default:u;i.components[o]=c;const d=(c.__vccOpts||c)[e];return d&&$n(d,n,r,i,o)()}))}}return s}function FE(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Nd(t){const e=we(wa),n=we(gc),r=x(()=>e.resolve(pe(t.to))),s=x(()=>{const{matched:l}=r.value,{length:u}=l,c=l[u-1],h=n.matched;if(!c||!h.length)return-1;const d=h.findIndex(ss.bind(null,c));if(d>-1)return d;const f=Ld(l[u-2]);return u>1&&Ld(c)===f&&h[h.length-1].path!==f?h.findIndex(ss.bind(null,l[u-2])):d}),i=x(()=>s.value>-1&&UE(n.params,r.value.params)),o=x(()=>s.value>-1&&s.value===n.matched.length-1&&Km(n.params,r.value.params));function a(l={}){return VE(l)?e[pe(t.replace)?"replace":"push"](pe(t.to)).catch(Ws):Promise.resolve()}return{route:r,href:x(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const BE=G({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Nd,setup(t,{slots:e}){const n=xr(Nd(t)),{options:r}=we(wa),s=x(()=>({[Md(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Md(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Zt("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),$E=BE;function VE(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function UE(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Array.isArray(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Ld(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Md=(t,e,n)=>t!=null?t:e!=null?e:n,jE=G({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const r=we(su),s=x(()=>t.route||r.value),i=we(Td,0),o=x(()=>s.value.matched[i]);Ve(Td,i+1),Ve(Uw,o),Ve(su,s);const a=k();return bt(()=>[a.value,o.value,t.name],([l,u,c],[h,d,f])=>{u&&(u.instances[c]=l,d&&d!==u&&l&&l===h&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),l&&u&&(!d||!ss(u,d)||!h)&&(u.enterCallbacks[c]||[]).forEach(p=>p(l))},{flush:"post"}),()=>{const l=s.value,u=o.value,c=u&&u.components[t.name],h=t.name;if(!c)return Fd(n.default,{Component:c,route:l});const d=u.props[t.name],f=d?d===!0?l.params:typeof d=="function"?d(l):d:null,g=Zt(c,Pe({},f,e,{onVnodeUnmounted:y=>{y.component.isUnmounted&&(u.instances[h]=null)},ref:a}));return Fd(n.default,{Component:g,route:l})||g}}});function Fd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const zE=jE;function qE(t){const e=vE(t.routes,t),n=t.parseQuery||LE,r=t.stringifyQuery||Pd,s=t.history,i=Ls(),o=Ls(),a=Ls(),l=im(Pn);let u=Pn;Kr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=dl.bind(null,E=>""+E),h=dl.bind(null,NE),d=dl.bind(null,Ro);function f(E,q){let B,W;return Gm(E)?(B=e.getRecordMatcher(E),W=q):W=E,e.addRoute(W,B)}function p(E){const q=e.getRecordMatcher(E);q&&e.removeRoute(q)}function g(){return e.getRoutes().map(E=>E.record)}function y(E){return!!e.getRecordMatcher(E)}function b(E,q){if(q=Pe({},q||l.value),typeof E=="string"){const he=fl(n,E,q.path),m=e.resolve({path:he.path},q),v=s.createHref(he.fullPath);return Pe(he,m,{params:d(m.params),hash:Ro(he.hash),redirectedFrom:void 0,href:v})}let B;if("path"in E)B=Pe({},E,{path:fl(n,E.path,q.path).path});else{const he=Pe({},E.params);for(const m in he)he[m]==null&&delete he[m];B=Pe({},E,{params:h(E.params)}),q.params=h(q.params)}const W=e.resolve(B,q),Re=E.hash||"";W.params=c(d(W.params));const Le=Hw(r,Pe({},E,{hash:RE(Re),path:W.path})),fe=s.createHref(Le);return Pe({fullPath:Le,hash:Re,query:r===Pd?ME(E.query):E.query||{}},W,{redirectedFrom:void 0,href:fe})}function w(E){return typeof E=="string"?fl(n,E,l.value.path):Pe({},E)}function R(E,q){if(u!==E)return is(8,{from:q,to:E})}function F(E){return S(E)}function j(E){return F(Pe(w(E),{replace:!0}))}function P(E){const q=E.matched[E.matched.length-1];if(q&&q.redirect){const{redirect:B}=q;let W=typeof B=="function"?B(E):B;return typeof W=="string"&&(W=W.includes("?")||W.includes("#")?W=w(W):{path:W},W.params={}),Pe({query:E.query,hash:E.hash,params:E.params},W)}}function S(E,q){const B=u=b(E),W=l.value,Re=E.state,Le=E.force,fe=E.replace===!0,he=P(B);if(he)return S(Pe(w(he),{state:Re,force:Le,replace:fe}),q||B);const m=B;m.redirectedFrom=q;let v;return!Le&&Kw(r,W,B)&&(v=is(16,{to:m,from:W}),Mr(W,W,!0,!1)),(v?Promise.resolve(v):Z(m,W)).catch(_=>Nn(_)?Nn(_,2)?_:Rt(_):Se(_,m,W)).then(_=>{if(_){if(Nn(_,2))return S(Pe(w(_.to),{state:Re,force:Le,replace:fe}),q||m)}else _=De(m,W,!0,fe,Re);return ve(m,W,_),_})}function le(E,q){const B=R(E,q);return B?Promise.reject(B):Promise.resolve()}function Z(E,q){let B;const[W,Re,Le]=HE(E,q);B=pl(W.reverse(),"beforeRouteLeave",E,q);for(const he of W)he.leaveGuards.forEach(m=>{B.push($n(m,E,q))});const fe=le.bind(null,E,q);return B.push(fe),$r(B).then(()=>{B=[];for(const he of i.list())B.push($n(he,E,q));return B.push(fe),$r(B)}).then(()=>{B=pl(Re,"beforeRouteUpdate",E,q);for(const he of Re)he.updateGuards.forEach(m=>{B.push($n(m,E,q))});return B.push(fe),$r(B)}).then(()=>{B=[];for(const he of E.matched)if(he.beforeEnter&&!q.matched.includes(he))if(Array.isArray(he.beforeEnter))for(const m of he.beforeEnter)B.push($n(m,E,q));else B.push($n(he.beforeEnter,E,q));return B.push(fe),$r(B)}).then(()=>(E.matched.forEach(he=>he.enterCallbacks={}),B=pl(Le,"beforeRouteEnter",E,q),B.push(fe),$r(B))).then(()=>{B=[];for(const he of o.list())B.push($n(he,E,q));return B.push(fe),$r(B)}).catch(he=>Nn(he,8)?he:Promise.reject(he))}function ve(E,q,B){for(const W of a.list())W(E,q,B)}function De(E,q,B,W,Re){const Le=R(E,q);if(Le)return Le;const fe=q===Pn,he=Kr?history.state:{};B&&(W||fe?s.replace(E.fullPath,Pe({scroll:fe&&he&&he.scroll},Re)):s.push(E.fullPath,Re)),l.value=E,Mr(E,q,B,fe),Rt()}let H;function Ae(){H=s.listen((E,q,B)=>{const W=b(E),Re=P(W);if(Re){S(Pe(Re,{replace:!0}),W).catch(Ws);return}u=W;const Le=l.value;Kr&&eE(Cd(Le.fullPath,B.delta),Ea()),Z(W,Le).catch(fe=>Nn(fe,12)?fe:Nn(fe,2)?(S(fe.to,W).then(he=>{Nn(he,20)&&!B.delta&&B.type===ui.pop&&s.go(-1,!1)}).catch(Ws),Promise.reject()):(B.delta&&s.go(-B.delta,!1),Se(fe,W,Le))).then(fe=>{fe=fe||De(W,Le,!1),fe&&(B.delta?s.go(-B.delta,!1):B.type===ui.pop&&Nn(fe,20)&&s.go(-1,!1)),ve(W,Le,fe)}).catch(Ws)})}let Ce=Ls(),tn=Ls(),Ue;function Se(E,q,B){Rt(E);const W=tn.list();return W.length?W.forEach(Re=>Re(E,q,B)):console.error(E),Promise.reject(E)}function xe(){return Ue&&l.value!==Pn?Promise.resolve():new Promise((E,q)=>{Ce.add([E,q])})}function Rt(E){return Ue||(Ue=!E,Ae(),Ce.list().forEach(([q,B])=>E?B(E):q()),Ce.reset()),E}function Mr(E,q,B,W){const{scrollBehavior:Re}=t;if(!Kr||!Re)return Promise.resolve();const Le=!B&&tE(Cd(E.fullPath,0))||(W||!B)&&history.state&&history.state.scroll||null;return Te().then(()=>Re(E,q,Le)).then(fe=>fe&&Jw(fe)).catch(fe=>Se(fe,E,q))}const pn=E=>s.go(E);let nn;const Ut=new Set;return{currentRoute:l,addRoute:f,removeRoute:p,hasRoute:y,getRoutes:g,resolve:b,options:t,push:F,replace:j,go:pn,back:()=>pn(-1),forward:()=>pn(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:tn.add,isReady:xe,install(E){const q=this;E.component("RouterLink",$E),E.component("RouterView",zE),E.config.globalProperties.$router=q,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>pe(l)}),Kr&&!nn&&l.value===Pn&&(nn=!0,F(s.location).catch(Re=>{}));const B={};for(const Re in Pn)B[Re]=x(()=>l.value[Re]);E.provide(wa,q),E.provide(gc,xr(B)),E.provide(su,l);const W=E.unmount;Ut.add(E),E.unmount=function(){Ut.delete(E),Ut.size<1&&(u=Pn,H&&H(),l.value=Pn,nn=!1,Ue=!1),W()}}}}function $r(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function HE(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>ss(u,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(u=>ss(u,l))||s.push(l))}return[n,r,s]}function ng(){return we(wa)}function KE(){return we(gc)}var fn=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n};const WE={},GE={class:"container mx-auto"};function XE(t,e){const n=cc("router-view");return ge(),Je("div",GE,[ee(n)])}var QE=fn(WE,[["render",XE]]),YE="/daftdoris.svg";function rg(t){return Tb()?(Ab(t),!0):!1}const sg=typeof window!="undefined",ZE=t=>typeof t=="string",ml=()=>{};function JE(t,e){function n(...r){t(()=>e.apply(this,r),{fn:e,thisArg:this,args:r})}return n}const ig=t=>t();function eI(t=ig){const e=k(!0);function n(){e.value=!1}function r(){e.value=!0}return{isActive:e,pause:n,resume:r,eventFilter:(...i)=>{e.value&&t(...i)}}}function tI(t,e=!0){_s()?Im(t):e?t():Te(t)}function nI(t,e=!0){_s()?He(t):e?t():Te(t)}function rI(t=!1){if(Me(t))return e=>(t.value=typeof e=="boolean"?e:!t.value,t.value);{const e=k(t);return[e,r=>(e.value=typeof r=="boolean"?r:!e.value,e.value)]}}var Bd=Object.getOwnPropertySymbols,sI=Object.prototype.hasOwnProperty,iI=Object.prototype.propertyIsEnumerable,oI=(t,e)=>{var n={};for(var r in t)sI.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&Bd)for(var r of Bd(t))e.indexOf(r)<0&&iI.call(t,r)&&(n[r]=t[r]);return n};function aI(t,e,n={}){const r=n,{eventFilter:s=ig}=r,i=oI(r,["eventFilter"]);return bt(t,JE(s,e),i)}var lI=Object.defineProperty,uI=Object.defineProperties,cI=Object.getOwnPropertyDescriptors,Oo=Object.getOwnPropertySymbols,og=Object.prototype.hasOwnProperty,ag=Object.prototype.propertyIsEnumerable,$d=(t,e,n)=>e in t?lI(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,hI=(t,e)=>{for(var n in e||(e={}))og.call(e,n)&&$d(t,n,e[n]);if(Oo)for(var n of Oo(e))ag.call(e,n)&&$d(t,n,e[n]);return t},dI=(t,e)=>uI(t,cI(e)),fI=(t,e)=>{var n={};for(var r in t)og.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&Oo)for(var r of Oo(t))e.indexOf(r)<0&&ag.call(t,r)&&(n[r]=t[r]);return n};function pI(t,e,n={}){const r=n,{eventFilter:s}=r,i=fI(r,["eventFilter"]),{eventFilter:o,pause:a,resume:l,isActive:u}=eI(s);return{stop:aI(t,e,dI(hI({},i),{eventFilter:o})),pause:a,resume:l,isActive:u}}function mI(t){var e;const n=pe(t);return(e=n==null?void 0:n.$el)!=null?e:n}const os=sg?window:void 0;function gI(...t){let e,n,r,s;if(ZE(t[0])?([n,r,s]=t,e=os):[e,n,r,s]=t,!e)return ml;let i=ml;const o=bt(()=>mI(e),l=>{i(),l&&(l.addEventListener(n,r,s),i=()=>{l.removeEventListener(n,r,s),i=ml})},{immediate:!0,flush:"post"}),a=()=>{o(),i()};return rg(a),a}function vI(t,e={}){const{window:n=os}=e;let r;const s=k(!1),i=()=>{!n||(r||(r=n.matchMedia(t)),s.value=r.matches)};return tI(()=>{i(),r&&("addEventListener"in r?r.addEventListener("change",i):r.addListener(i),rg(()=>{"removeEventListener"in r?r.removeEventListener("change",i):r.removeListener(i)}))}),s}const au=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},lu="__vueuse_ssr_handlers__";au[lu]=au[lu]||{};const yI=au[lu];function lg(t,e){return yI[t]||e}function bI(t){return t==null?"any":t instanceof Set?"set":t instanceof Map?"map":t instanceof Date?"date":typeof t=="boolean"?"boolean":typeof t=="string"?"string":typeof t=="object"||Array.isArray(t)?"object":Number.isNaN(t)?"any":"number"}const _I={boolean:{read:t=>t==="true",write:t=>String(t)},object:{read:t=>JSON.parse(t),write:t=>JSON.stringify(t)},number:{read:t=>Number.parseFloat(t),write:t=>String(t)},any:{read:t=>t,write:t=>String(t)},string:{read:t=>t,write:t=>String(t)},map:{read:t=>new Map(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t.entries()))},set:{read:t=>new Set(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t))},date:{read:t=>new Date(t),write:t=>t.toISOString()}};function wI(t,e,n,r={}){var s;const{flush:i="pre",deep:o=!0,listenToStorageChanges:a=!0,writeDefaults:l=!0,shallow:u,window:c=os,eventFilter:h,onError:d=P=>{console.error(P)}}=r,f=(u?im:k)(e);if(!n)try{n=lg("getDefaultStorage",()=>{var P;return(P=os)==null?void 0:P.localStorage})()}catch(P){d(P)}if(!n)return f;const p=pe(e),g=bI(p),y=(s=r.serializer)!=null?s:_I[g],{pause:b,resume:w}=pI(f,()=>R(f.value),{flush:i,deep:o,eventFilter:h});return c&&a&&gI(c,"storage",j),j(),f;function R(P){try{P==null?n.removeItem(t):n.setItem(t,y.write(P))}catch(S){d(S)}}function F(P){if(!(P&&P.key!==t)){b();try{const S=P?P.newValue:n.getItem(t);return S==null?(l&&p!==null&&n.setItem(t,y.write(p)),p):typeof S!="string"?S:y.read(S)}catch(S){d(S)}finally{w()}}}function j(P){P&&P.key!==t||(f.value=F(P))}}function ug(t){return vI("(prefers-color-scheme: dark)",t)}var EI=Object.defineProperty,Vd=Object.getOwnPropertySymbols,II=Object.prototype.hasOwnProperty,TI=Object.prototype.propertyIsEnumerable,Ud=(t,e,n)=>e in t?EI(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,AI=(t,e)=>{for(var n in e||(e={}))II.call(e,n)&&Ud(t,n,e[n]);if(Vd)for(var n of Vd(e))TI.call(e,n)&&Ud(t,n,e[n]);return t};function SI(t={}){const{selector:e="html",attribute:n="class",window:r=os,storage:s,storageKey:i="vueuse-color-scheme",listenToStorageChanges:o=!0,storageRef:a}=t,l=AI({auto:"",light:"light",dark:"dark"},t.modes||{}),u=ug({window:r}),c=x(()=>u.value?"dark":"light"),h=a||(i==null?k("auto"):wI(i,"auto",s,{window:r,listenToStorageChanges:o})),d=x({get(){return h.value==="auto"?c.value:h.value},set(y){h.value=y}}),f=lg("updateHTMLAttrs",(y,b,w)=>{const R=r==null?void 0:r.document.querySelector(y);if(!!R)if(b==="class"){const F=w.split(/\s/g);Object.values(l).flatMap(j=>(j||"").split(/\s/g)).filter(Boolean).forEach(j=>{F.includes(j)?R.classList.add(j):R.classList.remove(j)})}else R.setAttribute(b,w)});function p(y){var b;f(e,n,(b=l[y])!=null?b:y)}function g(y){t.onChanged?t.onChanged(y,p):p(y)}return bt(d,g,{flush:"post",immediate:!0}),nI(()=>g(d.value)),d}var CI=Object.defineProperty,kI=Object.defineProperties,DI=Object.getOwnPropertyDescriptors,jd=Object.getOwnPropertySymbols,xI=Object.prototype.hasOwnProperty,RI=Object.prototype.propertyIsEnumerable,zd=(t,e,n)=>e in t?CI(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,OI=(t,e)=>{for(var n in e||(e={}))xI.call(e,n)&&zd(t,n,e[n]);if(jd)for(var n of jd(e))RI.call(e,n)&&zd(t,n,e[n]);return t},PI=(t,e)=>kI(t,DI(e));function NI(t={}){const{valueDark:e="dark",valueLight:n="",window:r=os}=t,s=SI(PI(OI({},t),{onChanged:(a,l)=>{var u;t.onChanged?(u=t.onChanged)==null||u.call(t,a==="dark"):l(a)},modes:{dark:e,light:n}})),i=ug({window:r});return x({get(){return s.value==="dark"},set(a){a===i.value?s.value="auto":s.value=a?"dark":"light"}})}var qd,Hd;sg&&(window==null?void 0:window.navigator)&&((qd=window==null?void 0:window.navigator)==null?void 0:qd.platform)&&/iP(ad|hone|od)/.test((Hd=window==null?void 0:window.navigator)==null?void 0:Hd.platform);function cg(t,e,n,r={}){var s;const{passive:i=!1,eventName:o,deep:a=!1}=r,l=_s(),u=n||(l==null?void 0:l.emit)||((s=l==null?void 0:l.$emit)==null?void 0:s.bind(l));let c=o;if(e||(e="modelValue"),c=o||c||`update:${e}`,i){const h=k(t[e]);return bt(()=>t[e],d=>h.value=d),bt(h,d=>{(d!==t[e]||a)&&u(c,d)},{deep:a}),h}else return x({get(){return t[e]},set(h){u(c,h)}})}var LI=!1;/*!
  * pinia v2.0.13
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let hg;const Ia=t=>hg=t,dg=Symbol();function uu(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Xs;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Xs||(Xs={}));function MI(){const t=zp(!0),e=t.run(()=>k({}));let n=[],r=[];const s=ns({install(i){Ia(s),s._a=i,i.provide(dg,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!LI?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const fg=()=>{};function Kd(t,e,n,r=fg){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&_s()&&it(s),s}function Vr(t,...e){t.slice().forEach(n=>{n(...e)})}function cu(t,e){for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];uu(s)&&uu(r)&&t.hasOwnProperty(n)&&!Me(r)&&!En(r)?t[n]=cu(s,r):t[n]=r}return t}const FI=Symbol();function BI(t){return!uu(t)||!t.hasOwnProperty(FI)}const{assign:mn}=Object;function $I(t){return!!(Me(t)&&t.effect)}function VI(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let l;function u(){a||(n.state.value[t]=s?s():{});const c=e_(n.state.value[t]);return mn(c,i,Object.keys(o||{}).reduce((h,d)=>(h[d]=ns(x(()=>{Ia(n);const f=n._s.get(t);return o[d].call(f,f)})),h),{}))}return l=pg(t,u,e,n),l.$reset=function(){const h=s?s():{};this.$patch(d=>{mn(d,h)})},l}function pg(t,e,n={},r,s){let i;const o=n.state,a=mn({actions:{}},n),l={deep:!0};let u,c,h=ns([]),d=ns([]),f;const p=r.state.value[t];!o&&!p&&(r.state.value[t]={}),k({});function g(P){let S;u=c=!1,typeof P=="function"?(P(r.state.value[t]),S={type:Xs.patchFunction,storeId:t,events:f}):(cu(r.state.value[t],P),S={type:Xs.patchObject,payload:P,storeId:t,events:f}),Te().then(()=>{u=!0}),c=!0,Vr(h,S,r.state.value[t])}const y=fg;function b(){i.stop(),h=[],d=[],r._s.delete(t)}function w(P,S){return function(){Ia(r);const le=Array.from(arguments),Z=[],ve=[];function De(Ce){Z.push(Ce)}function H(Ce){ve.push(Ce)}Vr(d,{args:le,name:P,store:F,after:De,onError:H});let Ae;try{Ae=S.apply(this&&this.$id===t?this:F,le)}catch(Ce){throw Vr(ve,Ce),Ce}return Ae instanceof Promise?Ae.then(Ce=>(Vr(Z,Ce),Ce)).catch(Ce=>(Vr(ve,Ce),Promise.reject(Ce))):(Vr(Z,Ae),Ae)}}const R={_p:r,$id:t,$onAction:Kd.bind(null,d),$patch:g,$reset:y,$subscribe(P,S={}){const le=Kd(h,P,S.detached,()=>Z()),Z=i.run(()=>bt(()=>r.state.value[t],ve=>{(S.flush==="sync"?c:u)&&P({storeId:t,type:Xs.direct,events:f},ve)},mn({},l,S)));return le},$dispose:b},F=xr(mn({},R));r._s.set(t,F);const j=r._e.run(()=>(i=zp(),i.run(()=>e())));for(const P in j){const S=j[P];if(Me(S)&&!$I(S)||En(S))o||(p&&BI(S)&&(Me(S)?S.value=p[P]:cu(S,p[P])),r.state.value[t][P]=S);else if(typeof S=="function"){const le=w(P,S);j[P]=le,a.actions[P]=S}}return mn(F,j),mn(oe(F),j),Object.defineProperty(F,"$state",{get:()=>r.state.value[t],set:P=>{g(S=>{mn(S,P)})}}),r._p.forEach(P=>{mn(F,i.run(()=>P({store:F,app:r._a,pinia:r,options:a})))}),p&&o&&n.hydrate&&n.hydrate(F.$state,p),u=!0,c=!0,F}function yc(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,l){const u=_s();return a=a||u&&we(dg),a&&Ia(a),a=hg,a._s.has(r)||(i?pg(r,e,s,a):VI(r,s,a)),a._s.get(r)}return o.$id=r,o}function mg(t){{t=oe(t);const e={};for(const n in t){const r=t[n];(Me(r)||En(r))&&(e[n]=lm(t,n))}return e}}/**
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
 */const gg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},UI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},vg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,c=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;l||(f=64,o||(d=64)),r.push(n[c],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(gg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):UI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||h==null)throw Error();const d=i<<2|a>>4;if(r.push(d),u!==64){const f=a<<4&240|u>>2;if(r.push(f),h!==64){const p=u<<6&192|h;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},jI=function(t){const e=gg(t);return vg.encodeByteArray(e,!0)},yg=function(t){return jI(t).replace(/\./g,"")},zI=function(t){try{return vg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */class qI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function nt(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function bg(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(nt())}function bc(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function _g(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function HI(){return nt().indexOf("Electron/")>=0}function wg(){const t=nt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function KI(){return nt().indexOf("MSAppHost/")>=0}function Eg(){return typeof indexedDB=="object"}function Ig(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function WI(){return!(typeof navigator=="undefined"||!navigator.cookieEnabled)}/**
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
 */const GI="FirebaseError";class kn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=GI,Object.setPrototypeOf(this,kn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Rr.prototype.create)}}class Rr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?XI(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new kn(s,a,r)}}function XI(t,e){return t.replace(QI,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const QI=/\{\$([^}]+)}/g;function YI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ci(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Wd(i)&&Wd(o)){if(!ci(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Wd(t){return t!==null&&typeof t=="object"}/**
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
 */function ki(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ZI(t,e){const n=new JI(t,e);return n.subscribe.bind(n)}class JI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");eT(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=gl),s.error===void 0&&(s.error=gl),s.complete===void 0&&(s.complete=gl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function eT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function gl(){}/**
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
 */const tT=1e3,nT=2,rT=4*60*60*1e3,sT=.5;function Gd(t,e=tT,n=nT){const r=e*Math.pow(n,t),s=Math.round(sT*r*(Math.random()-.5)*2);return Math.min(rT,r+s)}/**
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
 */function Bt(t){return t&&t._delegate?t._delegate:t}/**
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
 */function Vs(t,e){return new Promise((n,r)=>{t.onsuccess=s=>{n(s.target.result)},t.onerror=s=>{var i;r(`${e}: ${(i=s.target.error)===null||i===void 0?void 0:i.message}`)}})}class Xd{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,n="readonly"){return new Tg(this._db.transaction.call(this._db,e,n))}createObjectStore(e,n){return new Ag(this._db.createObjectStore(e,n))}close(){this._db.close()}}class Tg{constructor(e){this._transaction=e,this.complete=new Promise((n,r)=>{this._transaction.oncomplete=function(){n()},this._transaction.onerror=()=>{r(this._transaction.error)},this._transaction.onabort=()=>{r(this._transaction.error)}})}objectStore(e){return new Ag(this._transaction.objectStore(e))}}class Ag{constructor(e){this._store=e}index(e){return new Qd(this._store.index(e))}createIndex(e,n,r){return new Qd(this._store.createIndex(e,n,r))}get(e){const n=this._store.get(e);return Vs(n,"Error reading from IndexedDB")}put(e,n){const r=this._store.put(e,n);return Vs(r,"Error writing to IndexedDB")}delete(e){const n=this._store.delete(e);return Vs(n,"Error deleting from IndexedDB")}clear(){const e=this._store.clear();return Vs(e,"Error clearing IndexedDB object store")}}class Qd{constructor(e){this._index=e}get(e){const n=this._index.get(e);return Vs(n,"Error reading from IndexedDB")}}function Sg(t,e,n){return new Promise((r,s)=>{try{const i=indexedDB.open(t,e);i.onsuccess=o=>{r(new Xd(o.target.result))},i.onerror=o=>{var a;s(`Error opening indexedDB: ${(a=o.target.error)===null||a===void 0?void 0:a.message}`)},i.onupgradeneeded=o=>{n(new Xd(i.result),o.oldVersion,o.newVersion,new Tg(i.transaction))}}catch(i){s(`Error opening indexedDB: ${i.message}`)}})}class en{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class iT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new qI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(aT(e))try{this.getOrInitializeService({instanceIdentifier:ir})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=ir){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ir){return this.instances.has(e)}getOptions(e=ir){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:oT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ir){return this.component?this.component.multipleInstances?e:ir:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function oT(t){return t===ir?void 0:t}function aT(t){return t.instantiationMode==="EAGER"}/**
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
 */class lT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new iT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ee||(Ee={}));const uT={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},cT=Ee.INFO,hT={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},dT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=hT[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ta{constructor(e){this.name=e,this._logLevel=cT,this._logHandler=dT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?uT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...e),this._logHandler(this,Ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...e),this._logHandler(this,Ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...e),this._logHandler(this,Ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...e),this._logHandler(this,Ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...e),this._logHandler(this,Ee.ERROR,...e)}}/**
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
 */class fT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(pT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function pT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const hu="@firebase/app",Yd="0.7.21";/**
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
 */const _c=new Ta("@firebase/app"),mT="@firebase/app-compat",gT="@firebase/analytics-compat",vT="@firebase/analytics",yT="@firebase/app-check-compat",bT="@firebase/app-check",_T="@firebase/auth",wT="@firebase/auth-compat",ET="@firebase/database",IT="@firebase/database-compat",TT="@firebase/functions",AT="@firebase/functions-compat",ST="@firebase/installations",CT="@firebase/installations-compat",kT="@firebase/messaging",DT="@firebase/messaging-compat",xT="@firebase/performance",RT="@firebase/performance-compat",OT="@firebase/remote-config",PT="@firebase/remote-config-compat",NT="@firebase/storage",LT="@firebase/storage-compat",MT="@firebase/firestore",FT="@firebase/firestore-compat",BT="firebase",$T="9.6.11";/**
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
 */const Cg="[DEFAULT]",VT={[hu]:"fire-core",[mT]:"fire-core-compat",[vT]:"fire-analytics",[gT]:"fire-analytics-compat",[bT]:"fire-app-check",[yT]:"fire-app-check-compat",[_T]:"fire-auth",[wT]:"fire-auth-compat",[ET]:"fire-rtdb",[IT]:"fire-rtdb-compat",[TT]:"fire-fn",[AT]:"fire-fn-compat",[ST]:"fire-iid",[CT]:"fire-iid-compat",[kT]:"fire-fcm",[DT]:"fire-fcm-compat",[xT]:"fire-perf",[RT]:"fire-perf-compat",[OT]:"fire-rc",[PT]:"fire-rc-compat",[NT]:"fire-gcs",[LT]:"fire-gcs-compat",[MT]:"fire-fst",[FT]:"fire-fst-compat","fire-js":"fire-js",[BT]:"fire-js-all"};/**
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
 */const Po=new Map,du=new Map;function UT(t,e){try{t.container.addComponent(e)}catch(n){_c.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function cn(t){const e=t.name;if(du.has(e))return _c.debug(`There were multiple attempts to register component ${e}.`),!1;du.set(e,t);for(const n of Po.values())UT(n,t);return!0}function Or(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const jT={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},br=new Rr("app","Firebase",jT);/**
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
 */class zT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new en("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw br.create("app-deleted",{appName:this._name})}}/**
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
 */const Di=$T;function qT(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Cg,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw br.create("bad-app-name",{appName:String(r)});const s=Po.get(r);if(s){if(ci(t,s.options)&&ci(n,s.config))return s;throw br.create("duplicate-app",{appName:r})}const i=new lT(r);for(const a of du.values())i.addComponent(a);const o=new zT(t,n,i);return Po.set(r,o),o}function wc(t=Cg){const e=Po.get(t);if(!e)throw br.create("no-app",{appName:t});return e}function Ht(t,e,n){var r;let s=(r=VT[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_c.warn(a.join(" "));return}cn(new en(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const HT="firebase-heartbeat-database",KT=1,hi="firebase-heartbeat-store";let vl=null;function kg(){return vl||(vl=Sg(HT,KT,(t,e)=>{switch(e){case 0:t.createObjectStore(hi)}}).catch(t=>{throw br.create("storage-open",{originalErrorMessage:t.message})})),vl}async function WT(t){try{return(await kg()).transaction(hi).objectStore(hi).get(Dg(t))}catch(e){throw br.create("storage-get",{originalErrorMessage:e.message})}}async function Zd(t,e){try{const r=(await kg()).transaction(hi,"readwrite");return await r.objectStore(hi).put(e,Dg(t)),r.complete}catch(n){throw br.create("storage-set",{originalErrorMessage:n.message})}}function Dg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const GT=1024,XT=30*24*60*60*1e3;class QT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ZT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Jd();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=XT}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Jd(),{heartbeatsToSend:n,unsentEntries:r}=YT(this._heartbeatsCache.heartbeats),s=yg(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Jd(){return new Date().toISOString().substring(0,10)}function YT(t,e=GT){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ef(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ef(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ZT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Eg()?Ig().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await WT(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Zd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Zd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ef(t){return yg(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function JT(t){cn(new en("platform-logger",e=>new fT(e),"PRIVATE")),cn(new en("heartbeat",e=>new QT(e),"PRIVATE")),Ht(hu,Yd,t),Ht(hu,Yd,"esm2017"),Ht("fire-js","")}JT("");/*! *****************************************************************************
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
***************************************************************************** */function Ec(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function xg(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const eA=xg,Rg=new Rr("auth","Firebase",xg());/**
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
 */const tf=new Ta("@firebase/auth");function po(t,...e){tf.logLevel<=Ee.ERROR&&tf.error(`Auth (${Di}): ${t}`,...e)}/**
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
 */function hn(t,...e){throw Ic(t,...e)}function an(t,...e){return Ic(t,...e)}function Og(t,e,n){const r=Object.assign(Object.assign({},eA()),{[e]:n});return new Rr("auth","Firebase",r).create(e,{appName:t.name})}function tA(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&hn(t,"argument-error"),Og(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ic(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Rg.create(t,...e)}function se(t,e,...n){if(!t)throw Ic(e,...n)}function yn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw po(e),new Error(e)}function An(t,e){t||yn(e)}/**
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
 */const nf=new Map;function bn(t){An(t instanceof Function,"Expected a class definition");let e=nf.get(t);return e?(An(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,nf.set(t,e),e)}/**
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
 */function nA(t,e){const n=Or(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(ci(i,e!=null?e:{}))return s;hn(s,"already-initialized")}return n.initialize({options:e})}function rA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(bn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function fu(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function sA(){return rf()==="http:"||rf()==="https:"}function rf(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function iA(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(sA()||bc()||"connection"in navigator)?navigator.onLine:!0}function oA(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class xi{constructor(e,n){this.shortDelay=e,this.longDelay=n,An(n>e,"Short delay should be less than long delay!"),this.isMobile=bg()||_g()}get(){return iA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Tc(t,e){An(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Pg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;yn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;yn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;yn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const aA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const lA=new xi(3e4,6e4);function uA(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Aa(t,e,n,r,s={}){return Ng(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=ki(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Pg.fetch()(Lg(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function Ng(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},aA),e);try{const s=new hA(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw yl(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw yl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw yl(t,"email-already-in-use",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Og(t,c,u);hn(t,c)}}catch(s){if(s instanceof kn)throw s;hn(t,"network-request-failed")}}async function cA(t,e,n,r,s={}){const i=await Aa(t,e,n,r,s);return"mfaPendingCredential"in i&&hn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Lg(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Tc(t.config,s):`${t.config.apiScheme}://${s}`}class hA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(an(this.auth,"network-request-failed")),lA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function yl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=an(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function dA(t,e){return Aa(t,"POST","/v1/accounts:delete",e)}async function fA(t,e){return Aa(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Qs(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function pA(t,e=!1){const n=Bt(t),r=await n.getIdToken(e),s=Ac(r);se(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Qs(bl(s.auth_time)),issuedAtTime:Qs(bl(s.iat)),expirationTime:Qs(bl(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function bl(t){return Number(t)*1e3}function Ac(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return po("JWT malformed, contained fewer than 3 sections"),null;try{const s=zI(n);return s?JSON.parse(s):(po("Failed to decode base64 JWT payload"),null)}catch(s){return po("Caught error parsing JWT payload as JSON",s),null}}function mA(t){const e=Ac(t);return se(e,"internal-error"),se(typeof e.exp!="undefined","internal-error"),se(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function di(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof kn&&gA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function gA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class vA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Mg{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qs(this.lastLoginAt),this.creationTime=Qs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function No(t){var e;const n=t.auth,r=await t.getIdToken(),s=await di(t,fA(n,{idToken:r}));se(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?_A(i.providerUserInfo):[],a=bA(t.providerData,o),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Mg(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function yA(t){const e=Bt(t);await No(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function bA(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function _A(t){return t.map(e=>{var{providerId:n}=e,r=Ec(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function wA(t,e){const n=await Ng(t,{},async()=>{const r=ki({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Lg(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Pg.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class fi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){se(e.idToken,"internal-error"),se(typeof e.idToken!="undefined","internal-error"),se(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):mA(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return se(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await wA(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new fi;return r&&(se(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(se(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(se(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fi,this.toJSON())}_performRefresh(){return yn("not implemented")}}/**
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
 */function Ln(t,e){se(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class gr{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Ec(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new vA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Mg(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await di(this,this.stsTokenManager.getToken(this.auth,e));return se(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return pA(this,e)}reload(){return yA(this)}_assign(e){this!==e&&(se(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new gr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){se(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await No(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await di(this,dA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,f=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,g=(a=n.tenantId)!==null&&a!==void 0?a:void 0,y=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,b=(u=n.createdAt)!==null&&u!==void 0?u:void 0,w=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:R,emailVerified:F,isAnonymous:j,providerData:P,stsTokenManager:S}=n;se(R&&S,e,"internal-error");const le=fi.fromJSON(this.name,S);se(typeof R=="string",e,"internal-error"),Ln(h,e.name),Ln(d,e.name),se(typeof F=="boolean",e,"internal-error"),se(typeof j=="boolean",e,"internal-error"),Ln(f,e.name),Ln(p,e.name),Ln(g,e.name),Ln(y,e.name),Ln(b,e.name),Ln(w,e.name);const Z=new gr({uid:R,auth:e,email:d,emailVerified:F,displayName:h,isAnonymous:j,photoURL:p,phoneNumber:f,tenantId:g,stsTokenManager:le,createdAt:b,lastLoginAt:w});return P&&Array.isArray(P)&&(Z.providerData=P.map(ve=>Object.assign({},ve))),y&&(Z._redirectEventId=y),Z}static async _fromIdTokenResponse(e,n,r=!1){const s=new fi;s.updateFromServerResponse(n);const i=new gr({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await No(i),i}}/**
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
 */class Fg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Fg.type="NONE";const sf=Fg;/**
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
 */function mo(t,e,n){return`firebase:${t}:${e}:${n}`}class Yr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=mo(this.userKey,s.apiKey,i),this.fullPersistenceKey=mo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?gr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Yr(bn(sf),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||bn(sf);const o=mo(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=gr._fromJSON(e,c);u!==i&&(a=h),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Yr(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Yr(i,e,r))}}/**
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
 */function of(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Vg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Bg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(jg(e))return"Blackberry";if(zg(e))return"Webos";if(Sc(e))return"Safari";if((e.includes("chrome/")||$g(e))&&!e.includes("edge/"))return"Chrome";if(Ug(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Bg(t=nt()){return/firefox\//i.test(t)}function Sc(t=nt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function $g(t=nt()){return/crios\//i.test(t)}function Vg(t=nt()){return/iemobile/i.test(t)}function Ug(t=nt()){return/android/i.test(t)}function jg(t=nt()){return/blackberry/i.test(t)}function zg(t=nt()){return/webos/i.test(t)}function Sa(t=nt()){return/iphone|ipad|ipod/i.test(t)}function EA(t=nt()){var e;return Sa(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function IA(){return wg()&&document.documentMode===10}function qg(t=nt()){return Sa(t)||Ug(t)||zg(t)||jg(t)||/windows phone/i.test(t)||Vg(t)}function TA(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Hg(t,e=[]){let n;switch(t){case"Browser":n=of(nt());break;case"Worker":n=`${of(nt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Di}/${r}`}/**
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
 */class AA{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new af(this),this.idTokenSubscription=new af(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Rg,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=bn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Yr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,i=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!s||s===i)&&(o==null?void 0:o.user)&&(r=o.user)}return r?r._redirectEventId?(se(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await No(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=oA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Bt(e):null;return n&&se(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&se(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(bn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Rr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&bn(e)||this._popupRedirectResolver;se(n,this,"argument-error"),this.redirectPersistenceManager=await Yr.create(this,[bn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return se(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return se(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Hg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Cc(t){return Bt(t)}class af{constructor(e){this.auth=e,this.observer=null,this.addObserver=ZI(n=>this.observer=n)}get next(){return se(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class Kg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return yn("not implemented")}_getIdTokenResponse(e){return yn("not implemented")}_linkToIdToken(e,n){return yn("not implemented")}_getReauthenticationResolver(e){return yn("not implemented")}}/**
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
 */async function Zr(t,e){return cA(t,"POST","/v1/accounts:signInWithIdp",uA(t,e))}/**
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
 */const SA="http://localhost";class _r extends Kg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new _r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):hn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Ec(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new _r(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Zr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Zr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Zr(e,n)}buildRequest(){const e={requestUri:SA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ki(n)}return e}}/**
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
 */class kc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ri extends kc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Vn extends Ri{constructor(){super("facebook.com")}static credential(e){return _r._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vn.credential(e.oauthAccessToken)}catch{return null}}}Vn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Vn.PROVIDER_ID="facebook.com";/**
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
 */class vn extends Ri{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return _r._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return vn.credential(n,r)}catch{return null}}}vn.GOOGLE_SIGN_IN_METHOD="google.com";vn.PROVIDER_ID="google.com";/**
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
 */class Un extends Ri{constructor(){super("github.com")}static credential(e){return _r._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Un.credential(e.oauthAccessToken)}catch{return null}}}Un.GITHUB_SIGN_IN_METHOD="github.com";Un.PROVIDER_ID="github.com";/**
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
 */class jn extends Ri{constructor(){super("twitter.com")}static credential(e,n){return _r._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return jn.credential(n,r)}catch{return null}}}jn.TWITTER_SIGN_IN_METHOD="twitter.com";jn.PROVIDER_ID="twitter.com";/**
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
 */class as{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await gr._fromIdTokenResponse(e,r,s),o=lf(r);return new as({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=lf(r);return new as({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function lf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Lo extends kn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Lo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Lo(e,n,r,s)}}function Wg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Lo._fromErrorAndOperation(t,i,e,r):i})}async function CA(t,e,n=!1){const r=await di(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return as._forOperation(t,"link",r)}/**
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
 */async function kA(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await di(t,Wg(r,s,e,t),n);se(i.idToken,r,"internal-error");const o=Ac(i.idToken);se(o,r,"internal-error");const{sub:a}=o;return se(t.uid===a,r,"user-mismatch"),as._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&hn(r,"user-mismatch"),i}}/**
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
 */async function DA(t,e,n=!1){const r="signIn",s=await Wg(t,r,e),i=await as._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function xA(t,e,n,r){return Bt(t).onAuthStateChanged(e,n,r)}const Mo="__sak";/**
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
 */class Gg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Mo,"1"),this.storage.removeItem(Mo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function RA(){const t=nt();return Sc(t)||Sa(t)}const OA=1e3,PA=10;class Xg extends Gg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=RA()&&TA(),this.fallbackToPolling=qg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);IA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,PA):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},OA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Xg.type="LOCAL";const NA=Xg;/**
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
 */class Qg extends Gg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Qg.type="SESSION";const Dc=Qg;/**
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
 */function LA(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ca{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ca(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),l=await LA(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ca.receivers=[];/**
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
 */function xc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class MA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const u=xc("",20);s.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(c),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ln(){return window}function FA(t){ln().location.href=t}/**
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
 */function Yg(){return typeof ln().WorkerGlobalScope!="undefined"&&typeof ln().importScripts=="function"}async function BA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function $A(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function VA(){return Yg()?self:null}/**
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
 */const Zg="firebaseLocalStorageDb",UA=1,Fo="firebaseLocalStorage",Jg="fbase_key";class Oi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ka(t,e){return t.transaction([Fo],e?"readwrite":"readonly").objectStore(Fo)}function jA(){const t=indexedDB.deleteDatabase(Zg);return new Oi(t).toPromise()}function pu(){const t=indexedDB.open(Zg,UA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Fo,{keyPath:Jg})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Fo)?e(r):(r.close(),await jA(),e(await pu()))})})}async function uf(t,e,n){const r=ka(t,!0).put({[Jg]:e,value:n});return new Oi(r).toPromise()}async function zA(t,e){const n=ka(t,!1).get(e),r=await new Oi(n).toPromise();return r===void 0?null:r.value}function cf(t,e){const n=ka(t,!0).delete(e);return new Oi(n).toPromise()}const qA=800,HA=3;class ev{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await pu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>HA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Yg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ca._getInstance(VA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await BA(),!this.activeServiceWorker)return;this.sender=new MA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||$A()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await pu();return await uf(e,Mo,"1"),await cf(e,Mo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>uf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>zA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>cf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ka(s,!1).getAll();return new Oi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ev.type="LOCAL";const KA=ev;/**
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
 */function WA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function GA(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=an("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",WA().appendChild(r)})}function XA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new xi(3e4,6e4);/**
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
 */function tv(t,e){return e?bn(e):(se(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Rc extends Kg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Zr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Zr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Zr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function QA(t){return DA(t.auth,new Rc(t),t.bypassAuthState)}function YA(t){const{auth:e,user:n}=t;return se(n,e,"internal-error"),kA(n,new Rc(t),t.bypassAuthState)}async function ZA(t){const{auth:e,user:n}=t;return se(n,e,"internal-error"),CA(n,new Rc(t),t.bypassAuthState)}/**
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
 */class nv{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return QA;case"linkViaPopup":case"linkViaRedirect":return ZA;case"reauthViaPopup":case"reauthViaRedirect":return YA;default:hn(this.auth,"internal-error")}}resolve(e){An(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){An(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const JA=new xi(2e3,1e4);async function eS(t,e,n){const r=Cc(t);tA(t,e,kc);const s=tv(r,n);return new ur(r,"signInViaPopup",e,s).executeNotNull()}class ur extends nv{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ur.currentPopupAction&&ur.currentPopupAction.cancel(),ur.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return se(e,this.auth,"internal-error"),e}async onExecution(){An(this.filter.length===1,"Popup operations only handle one event");const e=xc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(an(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(an(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ur.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(an(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,JA.get())};e()}}ur.currentPopupAction=null;/**
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
 */const tS="pendingRedirect",_l=new Map;class nS extends nv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=_l.get(this.auth._key());if(!e){try{const r=await rS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}_l.set(this.auth._key(),e)}return this.bypassAuthState||_l.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function rS(t,e){const n=iS(e),r=sS(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function sS(t){return bn(t._redirectPersistence)}function iS(t){return mo(tS,t.config.apiKey,t.name)}async function oS(t,e,n=!1){const r=Cc(t),s=tv(r,e),o=await new nS(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const aS=10*60*1e3;class lS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!uS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!rv(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(an(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=aS&&this.cachedEventUids.clear(),this.cachedEventUids.has(hf(e))}saveEventToCache(e){this.cachedEventUids.add(hf(e)),this.lastProcessedEventTime=Date.now()}}function hf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function rv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function uS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return rv(t);default:return!1}}/**
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
 */async function cS(t,e={}){return Aa(t,"GET","/v1/projects",e)}/**
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
 */const hS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,dS=/^https?/;async function fS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await cS(t);for(const n of e)try{if(pS(n))return}catch{}hn(t,"unauthorized-domain")}function pS(t){const e=fu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!dS.test(n))return!1;if(hS.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const mS=new xi(3e4,6e4);function df(){const t=ln().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function gS(t){return new Promise((e,n)=>{var r,s,i;function o(){df(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{df(),n(an(t,"network-request-failed"))},timeout:mS.get()})}if(!((s=(r=ln().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=ln().gapi)===null||i===void 0)&&i.load)o();else{const a=XA("iframefcb");return ln()[a]=()=>{gapi.load?o():n(an(t,"network-request-failed"))},GA(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw go=null,e})}let go=null;function vS(t){return go=go||gS(t),go}/**
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
 */const yS=new xi(5e3,15e3),bS="__/auth/iframe",_S="emulator/auth/iframe",wS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ES=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function IS(t){const e=t.config;se(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Tc(e,_S):`https://${t.config.authDomain}/${bS}`,r={apiKey:e.apiKey,appName:t.name,v:Di},s=ES.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ki(r).slice(1)}`}async function TS(t){const e=await vS(t),n=ln().gapi;return se(n,t,"internal-error"),e.open({where:document.body,url:IS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wS,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=an(t,"network-request-failed"),a=ln().setTimeout(()=>{i(o)},yS.get());function l(){ln().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const AS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},SS=500,CS=600,kS="_blank",DS="http://localhost";class ff{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function xS(t,e,n,r=SS,s=CS){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},AS),{width:r.toString(),height:s.toString(),top:i,left:o}),u=nt().toLowerCase();n&&(a=$g(u)?kS:n),Bg(u)&&(e=e||DS,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[f,p])=>`${d}${f}=${p},`,"");if(EA(u)&&a!=="_self")return RS(e||"",a),new ff(null);const h=window.open(e||"",a,c);se(h,t,"popup-blocked");try{h.focus()}catch{}return new ff(h)}function RS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const OS="__/auth/handler",PS="emulator/auth/handler";function pf(t,e,n,r,s,i){se(t.config.authDomain,t,"auth-domain-config-required"),se(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Di,eventId:s};if(e instanceof kc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",YI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(i||{}))o[l]=u}if(e instanceof Ri){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${NS(t)}?${ki(a).slice(1)}`}function NS({config:t}){return t.emulator?Tc(t,PS):`https://${t.authDomain}/${OS}`}/**
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
 */const wl="webStorageSupport";class LS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Dc,this._completeRedirectFn=oS}async _openPopup(e,n,r,s){var i;An((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=pf(e,n,r,fu(),s);return xS(e,o,xc())}async _openRedirect(e,n,r,s){return await this._originValidation(e),FA(pf(e,n,r,fu(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(An(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await TS(e),r=new lS(e);return n.register("authEvent",s=>(se(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(wl,{type:wl},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[wl];o!==void 0&&n(!!o),hn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=fS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return qg()||Sc()||Sa()}}const MS=LS;var mf="@firebase/auth",gf="0.19.12";/**
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
 */class FS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){se(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function BS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function $S(t){cn(new en("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,l)=>{se(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),se(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Hg(t)},c=new AA(a,l,u);return rA(c,n),c})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),cn(new en("auth-internal",e=>{const n=Cc(e.getProvider("auth").getImmediate());return(r=>new FS(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ht(mf,gf,BS(t)),Ht(mf,gf,"esm2017")}/**
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
 */function El(t=wc()){const e=Or(t,"auth");return e.isInitialized()?e.getImmediate():nA(t,{popupRedirectResolver:MS,persistence:[KA,NA,Dc]})}$S("Browser");const pi=yc("auth",()=>{const t=k(null),e=k(null),n=x(()=>t.value!==null);function r(a,l){var u,c,h;if(!a){t.value=null;return}a=a,t.value={userId:a.uid,profileImage:(u=a.photoURL)!=null?u:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbADKB5OER8mK9MCrkCBFJeXc2pZCGucLNxA&usqp=CAU",thumbnailImage:(c=a.photoURL)!=null?c:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbADKB5OER8mK9MCrkCBFJeXc2pZCGucLNxA&usqp=CAU",nickName:(h=a.displayName)!=null?h:"Anonymous"},l&&(e.value=l)}async function s(a,l){const u=El();await u.setPersistence(Dc);const c=await eS(u,a);r(c.user,l)}async function i(){r(null),await El().signOut(),localStorage.clear()}function o(a){return new Promise(l=>{const u=El();xA(u,c=>{c&&r(c,a),l(c!==null)})})}return{user:t,provider:e,isAuthenticated:n,getPersistenceFirebaseUser:o,logout:i,loginWithFirebase:s}});function Ge(t,e,...n){if(t in e){let s=e[t];return typeof s=="function"?s(...n):s}let r=new Error(`Tried to handle "${t}" but there is no handler defined. Only defined handlers are: ${Object.keys(e).map(s=>`"${s}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,Ge),r}function ae(r){var s=r,{visible:t=!0,features:e=0}=s,n=Xt(s,["visible","features"]);var i;if(t||e&2&&n.props.static)return Il(n);if(e&1){let o=(i=n.props.unmount)==null||i?0:1;return Ge(o,{[0](){return null},[1](){return Il(gt($({},n),{props:gt($({},n.props),{hidden:!0,style:{display:"none"}})}))}})}return Il(n)}function Il({props:t,attrs:e,slots:n,slot:r,name:s}){var i;let u=Yn(t,["unmount","static"]),{as:o}=u,a=Xt(u,["as"]),l=(i=n.default)==null?void 0:i.call(n,r);if(o==="template"){if(Object.keys(a).length>0||Object.keys(e).length>0){let[c,...h]=l!=null?l:[];if(!VS(c)||h.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${s} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(a).concat(Object.keys(e)).map(d=>`  - ${d}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(d=>`  - ${d}`).join(`
`)].join(`
`));return Wn(c,a)}return Array.isArray(l)&&l.length===1?l[0]:l}return Zt(o,a,l)}function Yn(t,e=[]){let n=Object.assign({},t);for(let r of e)r in n&&delete n[r];return n}function VS(t){return t==null?!1:typeof t.type=="string"||typeof t.type=="object"||typeof t.type=="function"}var US=0;function jS(){return++US}function ke(){return jS()}function zS(t){throw new Error("Unexpected object: "+t)}function Oc(t,e){let n=e.resolveItems();if(n.length<=0)return null;let r=e.resolveActiveIndex(),s=r!=null?r:-1,i=(()=>{switch(t.focus){case 0:return n.findIndex(o=>!e.resolveDisabled(o));case 1:{let o=n.slice().reverse().findIndex((a,l,u)=>s!==-1&&u.length-l-1>=s?!1:!e.resolveDisabled(a));return o===-1?o:n.length-1-o}case 2:return n.findIndex((o,a)=>a<=s?!1:!e.resolveDisabled(o));case 3:{let o=n.slice().reverse().findIndex(a=>!e.resolveDisabled(a));return o===-1?o:n.length-1-o}case 4:return n.findIndex(o=>e.resolveId(o)===t.id);case 5:return null;default:zS(t)}})();return i===-1?r:i}function A(t){return t==null||t.value==null?null:"$el"in t.value?t.value.$el:t.value}function Wt(t,e,n){typeof window!="undefined"&&Ke(r=>{window.addEventListener(t,e,n),r(()=>{window.removeEventListener(t,e,n)})})}var sv=Symbol("Context");function qS(){return Dn()!==null}function Dn(){return we(sv,null)}function Es(t){Ve(sv,t)}function vf(t,e){if(t)return t;let n=e!=null?e:"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function Pr(t,e){let n=k(vf(t.value.type,t.value.as));return He(()=>{n.value=vf(t.value.type,t.value.as)}),Ke(()=>{var r;n.value||!A(e)||A(e)instanceof HTMLButtonElement&&!((r=A(e))!=null&&r.hasAttribute("type"))&&(n.value="button")}),n}function Pc({container:t,accept:e,walk:n,enabled:r}){Ke(()=>{let s=t.value;if(!s||r!==void 0&&!r.value)return;let i=Object.assign(a=>e(a),{acceptNode:e}),o=document.createTreeWalker(s,NodeFilter.SHOW_ELEMENT,i,!1);for(;o.nextNode();)n(o.currentNode)})}var iv=Symbol("ComboboxContext");function Is(t){let e=we(iv,null);if(e===null){let n=new Error(`<${t} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Is),n}return e}G({name:"Combobox",emits:{"update:modelValue":t=>!0},props:{as:{type:[Object,String],default:"template"},disabled:{type:[Boolean],default:!1},modelValue:{type:[Object,String,Number,Boolean]}},setup(t,{slots:e,attrs:n,emit:r}){let s=k(1),i=k(null),o=k(null),a=k(null),l=k(null),u=k({static:!1,hold:!1}),c=k([]),h=k(null),d=x(()=>t.modelValue),f={comboboxState:s,value:d,inputRef:o,labelRef:i,buttonRef:a,optionsRef:l,disabled:x(()=>t.disabled),options:c,activeOptionIndex:h,inputPropsRef:k({displayValue:void 0}),optionsPropsRef:u,closeCombobox(){t.disabled||s.value!==1&&(s.value=1,h.value=null)},openCombobox(){t.disabled||s.value!==0&&(s.value=0)},goToOption(g,y){if(t.disabled||l.value&&!u.value.static&&s.value===1)return;let b=Oc(g===4?{focus:4,id:y}:{focus:g},{resolveItems:()=>c.value,resolveActiveIndex:()=>h.value,resolveId:w=>w.id,resolveDisabled:w=>w.dataRef.disabled});h.value!==b&&(h.value=b)},syncInputValue(){let g=f.value.value;if(!A(f.inputRef)||g===void 0)return;let y=f.inputPropsRef.value.displayValue;typeof y=="function"?f.inputRef.value.value=y(g):typeof g=="string"&&(f.inputRef.value.value=g)},selectOption(g){let y=c.value.find(w=>w.id===g);if(!y)return;let{dataRef:b}=y;r("update:modelValue",b.value),f.syncInputValue()},selectActiveOption(){if(h.value===null)return;let{dataRef:g}=c.value[h.value];r("update:modelValue",g.value),f.syncInputValue()},registerOption(g,y){var b,w;let R=h.value!==null?c.value[h.value]:null,F=Array.from((w=(b=l.value)==null?void 0:b.querySelectorAll('[id^="headlessui-combobox-option-"]'))!=null?w:[]).reduce((j,P,S)=>Object.assign(j,{[P.id]:S}),{});c.value=[...c.value,{id:g,dataRef:y}].sort((j,P)=>F[j.id]-F[P.id]),h.value=(()=>R===null?null:c.value.indexOf(R))()},unregisterOption(g){let y=c.value.slice(),b=h.value!==null?y[h.value]:null,w=y.findIndex(R=>R.id===g);w!==-1&&y.splice(w,1),c.value=y,h.value=(()=>w===h.value||b===null?null:y.indexOf(b))()}};Wt("mousedown",g=>{var y,b,w;let R=g.target;s.value===0&&(((y=A(o))==null?void 0:y.contains(R))||((b=A(a))==null?void 0:b.contains(R))||((w=A(l))==null?void 0:w.contains(R))||f.closeCombobox())}),bt([f.value,f.inputRef],()=>f.syncInputValue(),{immediate:!0}),Ve(iv,f),Es(x(()=>Ge(s.value,{[0]:0,[1]:1})));let p=x(()=>h.value===null?null:c.value[h.value].dataRef.value);return()=>{let g={open:s.value===0,disabled:t.disabled,activeIndex:h.value,activeOption:p.value};return ae({props:Yn(t,["modelValue","onUpdate:modelValue","disabled"]),slot:g,slots:e,attrs:n,name:"Combobox"})}}});G({name:"ComboboxLabel",props:{as:{type:[Object,String],default:"label"}},setup(t,{attrs:e,slots:n}){let r=Is("ComboboxLabel"),s=`headlessui-combobox-label-${ke()}`;function i(){var o;(o=A(r.inputRef))==null||o.focus({preventScroll:!0})}return()=>{let o={open:r.comboboxState.value===0,disabled:r.disabled.value},a={id:s,ref:r.labelRef,onClick:i};return ae({props:$($({},t),a),slot:o,attrs:e,slots:n,name:"ComboboxLabel"})}}});G({name:"ComboboxButton",props:{as:{type:[Object,String],default:"button"}},setup(t,{attrs:e,slots:n}){let r=Is("ComboboxButton"),s=`headlessui-combobox-button-${ke()}`;function i(l){r.disabled.value||(r.comboboxState.value===0?r.closeCombobox():(l.preventDefault(),r.openCombobox()),Te(()=>{var u;return(u=A(r.inputRef))==null?void 0:u.focus({preventScroll:!0})}))}function o(l){switch(l.key){case"ArrowDown":l.preventDefault(),l.stopPropagation(),r.comboboxState.value===1&&(r.openCombobox(),Te(()=>{r.value.value||r.goToOption(0)})),Te(()=>{var u;return(u=r.inputRef.value)==null?void 0:u.focus({preventScroll:!0})});return;case"ArrowUp":l.preventDefault(),l.stopPropagation(),r.comboboxState.value===1&&(r.openCombobox(),Te(()=>{r.value.value||r.goToOption(3)})),Te(()=>{var u;return(u=r.inputRef.value)==null?void 0:u.focus({preventScroll:!0})});return;case"Escape":l.preventDefault(),r.optionsRef.value&&!r.optionsPropsRef.value.static&&l.stopPropagation(),r.closeCombobox(),Te(()=>{var u;return(u=r.inputRef.value)==null?void 0:u.focus({preventScroll:!0})});return}}let a=Pr(x(()=>({as:t.as,type:e.type})),r.buttonRef);return()=>{var l,u;let c={open:r.comboboxState.value===0,disabled:r.disabled.value},h={ref:r.buttonRef,id:s,type:a.value,tabindex:"-1","aria-haspopup":!0,"aria-controls":(l=A(r.optionsRef))==null?void 0:l.id,"aria-expanded":r.disabled.value?void 0:r.comboboxState.value===0,"aria-labelledby":r.labelRef.value?[(u=A(r.labelRef))==null?void 0:u.id,s].join(" "):void 0,disabled:r.disabled.value===!0?!0:void 0,onKeydown:o,onClick:i};return ae({props:$($({},t),h),slot:c,attrs:e,slots:n,name:"ComboboxButton"})}}});G({name:"ComboboxInput",props:{as:{type:[Object,String],default:"input"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},displayValue:{type:Function}},emits:{change:t=>!0},setup(t,{emit:e,attrs:n,slots:r}){let s=Is("ComboboxInput"),i=`headlessui-combobox-input-${ke()}`;s.inputPropsRef=x(()=>t);function o(l){switch(l.key){case"Enter":l.preventDefault(),l.stopPropagation(),s.selectActiveOption(),s.closeCombobox();break;case"ArrowDown":return l.preventDefault(),l.stopPropagation(),Ge(s.comboboxState.value,{[0]:()=>s.goToOption(2),[1]:()=>{s.openCombobox(),Te(()=>{s.value.value||s.goToOption(0)})}});case"ArrowUp":return l.preventDefault(),l.stopPropagation(),Ge(s.comboboxState.value,{[0]:()=>s.goToOption(1),[1]:()=>{s.openCombobox(),Te(()=>{s.value.value||s.goToOption(3)})}});case"Home":case"PageUp":return l.preventDefault(),l.stopPropagation(),s.goToOption(0);case"End":case"PageDown":return l.preventDefault(),l.stopPropagation(),s.goToOption(3);case"Escape":l.preventDefault(),s.optionsRef.value&&!s.optionsPropsRef.value.static&&l.stopPropagation(),s.closeCombobox();break;case"Tab":s.selectActiveOption(),s.closeCombobox();break}}function a(l){s.openCombobox(),e("change",l)}return()=>{var l,u,c,h,d;let f={open:s.comboboxState.value===0},p={"aria-controls":(l=s.optionsRef.value)==null?void 0:l.id,"aria-expanded":s.disabled?void 0:s.comboboxState.value===0,"aria-activedescendant":s.activeOptionIndex.value===null||(u=s.options.value[s.activeOptionIndex.value])==null?void 0:u.id,"aria-labelledby":(d=(c=A(s.labelRef))==null?void 0:c.id)!=null?d:(h=A(s.buttonRef))==null?void 0:h.id,id:i,onKeydown:o,onChange:a,onInput:a,role:"combobox",type:"text",tabIndex:0,ref:s.inputRef},g=Yn(t,["displayValue"]);return ae({props:$($({},g),p),slot:f,attrs:n,slots:r,features:3,name:"ComboboxInput"})}}});G({name:"ComboboxOptions",props:{as:{type:[Object,String],default:"ul"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},hold:{type:[Boolean],default:!1}},setup(t,{attrs:e,slots:n}){let r=Is("ComboboxOptions"),s=`headlessui-combobox-options-${ke()}`;Ke(()=>{r.optionsPropsRef.value.static=t.static}),Ke(()=>{r.optionsPropsRef.value.hold=t.hold});let i=Dn(),o=x(()=>i!==null?i.value===0:r.comboboxState.value===0);return Pc({container:x(()=>A(r.optionsRef)),enabled:x(()=>r.comboboxState.value===0),accept(a){return a.getAttribute("role")==="option"?NodeFilter.FILTER_REJECT:a.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(a){a.setAttribute("role","none")}}),()=>{var a,l,u,c;let h={open:r.comboboxState.value===0},d={"aria-activedescendant":r.activeOptionIndex.value===null||(a=r.options.value[r.activeOptionIndex.value])==null?void 0:a.id,"aria-labelledby":(c=(l=A(r.labelRef))==null?void 0:l.id)!=null?c:(u=A(r.buttonRef))==null?void 0:u.id,id:s,ref:r.optionsRef,role:"listbox"},f=Yn(t,["hold"]);return ae({props:$($({},f),d),slot:h,attrs:e,slots:n,features:3,visible:o.value,name:"ComboboxOptions"})}}});G({name:"ComboboxOption",props:{as:{type:[Object,String],default:"li"},value:{type:[Object,String,Number,Boolean]},disabled:{type:Boolean,default:!1}},setup(t,{slots:e,attrs:n}){let r=Is("ComboboxOption"),s=`headlessui-combobox-option-${ke()}`,i=x(()=>r.activeOptionIndex.value!==null?r.options.value[r.activeOptionIndex.value].id===s:!1),o=x(()=>oe(r.value.value)===oe(t.value)),a=x(()=>({disabled:t.disabled,value:t.value}));He(()=>r.registerOption(s,a)),it(()=>r.unregisterOption(s)),He(()=>{bt([r.comboboxState,o],()=>{r.comboboxState.value===0&&(!o.value||r.goToOption(4,s))},{immediate:!0})}),Ke(()=>{r.comboboxState.value===0&&(!i.value||Te(()=>{var d,f;return(f=(d=document.getElementById(s))==null?void 0:d.scrollIntoView)==null?void 0:f.call(d,{block:"nearest"})}))});function l(d){if(t.disabled)return d.preventDefault();r.selectOption(s),r.closeCombobox(),Te(()=>{var f;return(f=A(r.inputRef))==null?void 0:f.focus({preventScroll:!0})})}function u(){if(t.disabled)return r.goToOption(5);r.goToOption(4,s)}function c(){t.disabled||i.value||r.goToOption(4,s)}function h(){t.disabled||!i.value||r.optionsPropsRef.value.hold||r.goToOption(5)}return()=>{let{disabled:d}=t,f={active:i.value,selected:o.value,disabled:d},p={id:s,role:"option",tabIndex:d===!0?void 0:-1,"aria-disabled":d===!0?!0:void 0,"aria-selected":o.value===!0?o.value:void 0,disabled:void 0,onClick:l,onFocus:u,onPointermove:c,onMousemove:c,onPointerleave:h,onMouseleave:h};return ae({props:$($({},t),p),slot:f,attrs:n,slots:e,name:"ComboboxOption"})}}});var mu=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(t=>`${t}:not([tabindex='-1'])`).join(",");function Bo(t=document.body){return t==null?[]:Array.from(t.querySelectorAll(mu))}function HS(t,e=0){return t===document.body?!1:Ge(e,{[0](){return t.matches(mu)},[1](){let n=t;for(;n!==null;){if(n.matches(mu))return!0;n=n.parentElement}return!1}})}function Ms(t){t==null||t.focus({preventScroll:!0})}function ut(t,e){let n=Array.isArray(t)?t.slice().sort((c,h)=>{let d=c.compareDocumentPosition(h);return d&Node.DOCUMENT_POSITION_FOLLOWING?-1:d&Node.DOCUMENT_POSITION_PRECEDING?1:0}):Bo(t),r=document.activeElement,s=(()=>{if(e&5)return 1;if(e&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),i=(()=>{if(e&1)return 0;if(e&2)return Math.max(0,n.indexOf(r))-1;if(e&4)return Math.max(0,n.indexOf(r))+1;if(e&8)return n.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),o=e&32?{preventScroll:!0}:{},a=0,l=n.length,u;do{if(a>=l||a+l<=0)return 0;let c=i+a;if(e&16)c=(c+l)%l;else{if(c<0)return 3;if(c>=l)return 1}u=n[c],u==null||u.focus(o),a+=s}while(u!==document.activeElement);return u.hasAttribute("tabindex")||u.setAttribute("tabindex","0"),2}function gu(t,e){for(let n of t)if(n.contains(e))return!0;return!1}function ov(t,e=k(!0),n=k({})){let r=k(typeof window!="undefined"?document.activeElement:null),s=k(null);function i(){if(!e.value||t.value.size!==1)return;let{initialFocus:a}=n.value,l=document.activeElement;if(a){if(a===l)return}else if(gu(t.value,l))return;if(r.value=l,a)Ms(a);else{let u=!1;for(let c of t.value)if(ut(c,1)===2){u=!0;break}u||console.warn("There are no focusable elements inside the <FocusTrap />")}s.value=document.activeElement}function o(){Ms(r.value),r.value=null,s.value=null}Ke(i),oc(()=>{e.value?i():o()}),it(o),Wt("keydown",a=>{if(!!e.value&&a.key==="Tab"&&!!document.activeElement&&t.value.size===1){a.preventDefault();for(let l of t.value)if(ut(l,(a.shiftKey?2:4)|16)===2){s.value=document.activeElement;break}}}),Wt("focus",a=>{if(!e.value||t.value.size!==1)return;let l=s.value;if(!l)return;let u=a.target;u&&u instanceof HTMLElement?gu(t.value,u)?(s.value=u,Ms(u)):(a.preventDefault(),a.stopPropagation(),Ms(l)):Ms(s.value)},!0)}var yf="body > *",Ur=new Set,Fn=new Map;function bf(t){t.setAttribute("aria-hidden","true"),t.inert=!0}function _f(t){let e=Fn.get(t);!e||(e["aria-hidden"]===null?t.removeAttribute("aria-hidden"):t.setAttribute("aria-hidden",e["aria-hidden"]),t.inert=e.inert)}function KS(t,e=k(!0)){Ke(n=>{if(!e.value||!t.value)return;let r=t.value;Ur.add(r);for(let s of Fn.keys())s.contains(r)&&(_f(s),Fn.delete(s));document.querySelectorAll(yf).forEach(s=>{if(s instanceof HTMLElement){for(let i of Ur)if(s.contains(i))return;Ur.size===1&&(Fn.set(s,{"aria-hidden":s.getAttribute("aria-hidden"),inert:s.inert}),bf(s))}}),n(()=>{if(Ur.delete(r),Ur.size>0)document.querySelectorAll(yf).forEach(s=>{if(s instanceof HTMLElement&&!Fn.has(s)){for(let i of Ur)if(s.contains(i))return;Fn.set(s,{"aria-hidden":s.getAttribute("aria-hidden"),inert:s.inert}),bf(s)}});else for(let s of Fn.keys())_f(s),Fn.delete(s)})})}var av=Symbol("StackContext");function lv(){return we(av,()=>{})}function WS(t){let e=lv();Ke(n=>{let r=t==null?void 0:t.value;!r||(e(0,r),n(()=>e(1,r)))})}function uv(t){let e=lv();function n(...r){t==null||t(...r),e(...r)}Ve(av,n)}var cv=Symbol("ForcePortalRootContext");function GS(){return we(cv,!1)}var wf=G({name:"ForcePortalRoot",props:{as:{type:[Object,String],default:"template"},force:{type:Boolean,default:!1}},setup(t,{slots:e,attrs:n}){return Ve(cv,t.force),()=>{let i=t,{force:r}=i,s=Xt(i,["force"]);return ae({props:s,slot:{},slots:e,attrs:n,name:"ForcePortalRoot"})}}});function XS(){let t=document.getElementById("headlessui-portal-root");if(t)return t;let e=document.createElement("div");return e.setAttribute("id","headlessui-portal-root"),document.body.appendChild(e)}var QS=G({name:"Portal",props:{as:{type:[Object,String],default:"div"}},setup(t,{slots:e,attrs:n}){let r=GS(),s=we(hv,null),i=k(r===!0||s===null?XS():s.resolveTarget());Ke(()=>{r||s!==null&&(i.value=s.resolveTarget())});let o=k(null);return WS(o),it(()=>{var a;let l=document.getElementById("headlessui-portal-root");!l||i.value===l&&i.value.children.length<=0&&((a=i.value.parentElement)==null||a.removeChild(i.value))}),uv(),()=>{if(i.value===null)return null;let a={ref:o};return Zt(H_,{to:i.value},ae({props:$($({},t),a),slot:{},attrs:n,slots:e,name:"Portal"}))}}}),hv=Symbol("PortalGroupContext"),YS=G({name:"PortalGroup",props:{as:{type:[Object,String],default:"template"},target:{type:Object,default:null}},setup(t,{attrs:e,slots:n}){let r=xr({resolveTarget(){return t.target}});return Ve(hv,r),()=>{let o=t,{target:s}=o,i=Xt(o,["target"]);return ae({props:i,slot:{},attrs:e,slots:n,name:"PortalGroup"})}}}),dv=Symbol("DescriptionContext");function ZS(){let t=we(dv,null);if(t===null)throw new Error("Missing parent");return t}function Da({slot:t=k({}),name:e="Description",props:n={}}={}){let r=k([]);function s(i){return r.value.push(i),()=>{let o=r.value.indexOf(i);o!==-1&&r.value.splice(o,1)}}return Ve(dv,{register:s,slot:t,name:e,props:n}),x(()=>r.value.length>0?r.value.join(" "):void 0)}G({name:"Description",props:{as:{type:[Object,String],default:"p"}},setup(t,{attrs:e,slots:n}){let r=ZS(),s=`headlessui-description-${ke()}`;return He(()=>it(r.register(s))),()=>{let{name:i="Description",slot:o=k({}),props:a={}}=r,l=t,u=gt($({},Object.entries(a).reduce((c,[h,d])=>Object.assign(c,{[h]:pe(d)}),{})),{id:s});return ae({props:$($({},l),u),slot:o.value,attrs:e,slots:n,name:i})}}});var fv=Symbol("DialogContext");function Nc(t){let e=we(fv,null);if(e===null){let n=new Error(`<${t} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Nc),n}return e}var ro="DC8F892D-2EBD-447C-A4C8-A03058436FF4";G({name:"Dialog",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},open:{type:[Boolean,String],default:ro},initialFocus:{type:Object,default:null}},emits:{close:t=>!0},setup(t,{emit:e,attrs:n,slots:r}){let s=k(new Set),i=Dn(),o=x(()=>t.open===ro&&i!==null?Ge(i.value,{[0]:!0,[1]:!1}):t.open);if(!(t.open!==ro||i!==null))throw new Error("You forgot to provide an `open` prop to the `Dialog`.");if(typeof o.value!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${o.value===ro?void 0:t.open}`);let a=x(()=>t.open?0:1),l=x(()=>i!==null?i.value===0:a.value===0),u=k(null),c=k(a.value===0);oc(()=>{c.value=a.value===0});let h=`headlessui-dialog-${ke()}`,d=x(()=>({initialFocus:t.initialFocus}));ov(s,c,d),KS(u,c),uv((b,w)=>Ge(b,{[0](){s.value.add(w)},[1](){s.value.delete(w)}}));let f=Da({name:"DialogDescription",slot:x(()=>({open:o.value}))}),p=k(null),g={titleId:p,dialogState:a,setTitleId(b){p.value!==b&&(p.value=b)},close(){e("close",!1)}};Ve(fv,g),Wt("mousedown",b=>{let w=b.target;a.value===0&&s.value.size===1&&(gu(s.value,w)||(g.close(),Te(()=>w==null?void 0:w.focus())))}),Wt("keydown",b=>{b.key==="Escape"&&a.value===0&&(s.value.size>1||(b.preventDefault(),b.stopPropagation(),g.close()))}),Ke(b=>{if(a.value!==0)return;let w=document.documentElement.style.overflow,R=document.documentElement.style.paddingRight,F=window.innerWidth-document.documentElement.clientWidth;document.documentElement.style.overflow="hidden",document.documentElement.style.paddingRight=`${F}px`,b(()=>{document.documentElement.style.overflow=w,document.documentElement.style.paddingRight=R})}),Ke(b=>{if(a.value!==0)return;let w=A(u);if(!w)return;let R=new IntersectionObserver(F=>{for(let j of F)j.boundingClientRect.x===0&&j.boundingClientRect.y===0&&j.boundingClientRect.width===0&&j.boundingClientRect.height===0&&g.close()});R.observe(w),b(()=>R.disconnect())});function y(b){b.stopPropagation()}return()=>{let b=gt($({},n),{ref:u,id:h,role:"dialog","aria-modal":a.value===0?!0:void 0,"aria-labelledby":p.value,"aria-describedby":f.value,onClick:y}),P=t,{open:w,initialFocus:R}=P,F=Xt(P,["open","initialFocus"]),j={open:a.value===0};return Zt(wf,{force:!0},()=>Zt(QS,()=>Zt(YS,{target:u.value},()=>Zt(wf,{force:!1},()=>ae({props:$($({},F),b),slot:j,attrs:n,slots:r,visible:l.value,features:3,name:"Dialog"})))))}}});G({name:"DialogOverlay",props:{as:{type:[Object,String],default:"div"}},setup(t,{attrs:e,slots:n}){let r=Nc("DialogOverlay"),s=`headlessui-dialog-overlay-${ke()}`;function i(o){o.target===o.currentTarget&&(o.preventDefault(),o.stopPropagation(),r.close())}return()=>ae({props:gt($({},t),{id:s,"aria-hidden":!0,onClick:i}),slot:{open:r.dialogState.value===0},attrs:e,slots:n,name:"DialogOverlay"})}});G({name:"DialogTitle",props:{as:{type:[Object,String],default:"h2"}},setup(t,{attrs:e,slots:n}){let r=Nc("DialogTitle"),s=`headlessui-dialog-title-${ke()}`;return He(()=>{r.setTitleId(s),it(()=>r.setTitleId(null))}),()=>ae({props:gt($({},t),{id:s}),slot:{open:r.dialogState.value===0},attrs:e,slots:n,name:"DialogTitle"})}});var pv=Symbol("DisclosureContext");function Lc(t){let e=we(pv,null);if(e===null){let n=new Error(`<${t} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Lc),n}return e}var mv=Symbol("DisclosurePanelContext");function JS(){return we(mv,null)}G({name:"Disclosure",props:{as:{type:[Object,String],default:"template"},defaultOpen:{type:[Boolean],default:!1}},setup(t,{slots:e,attrs:n}){let r=`headlessui-disclosure-button-${ke()}`,s=`headlessui-disclosure-panel-${ke()}`,i=k(t.defaultOpen?0:1),o=k(null),a=k(null),l={buttonId:r,panelId:s,disclosureState:i,panel:o,button:a,toggleDisclosure(){i.value=Ge(i.value,{[0]:1,[1]:0})},closeDisclosure(){i.value!==1&&(i.value=1)},close(u){l.closeDisclosure();let c=(()=>u?u instanceof HTMLElement?u:u.value instanceof HTMLElement?A(u):A(l.button):A(l.button))();c==null||c.focus()}};return Ve(pv,l),Es(x(()=>Ge(i.value,{[0]:0,[1]:1}))),()=>{let d=t,{defaultOpen:u}=d,c=Xt(d,["defaultOpen"]),h={open:i.value===0,close:l.close};return ae({props:c,slot:h,slots:e,attrs:n,name:"Disclosure"})}}});G({name:"DisclosureButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1}},setup(t,{attrs:e,slots:n}){let r=Lc("DisclosureButton"),s=JS(),i=s===null?!1:s===r.panelId,o=k(null);i||Ke(()=>{r.button.value=o.value});let a=Pr(x(()=>({as:t.as,type:e.type})),o);function l(){var h;t.disabled||(i?(r.toggleDisclosure(),(h=A(r.button))==null||h.focus()):r.toggleDisclosure())}function u(h){var d;if(!t.disabled)if(i)switch(h.key){case" ":case"Enter":h.preventDefault(),h.stopPropagation(),r.toggleDisclosure(),(d=A(r.button))==null||d.focus();break}else switch(h.key){case" ":case"Enter":h.preventDefault(),h.stopPropagation(),r.toggleDisclosure();break}}function c(h){switch(h.key){case" ":h.preventDefault();break}}return()=>{let h={open:r.disclosureState.value===0},d=i?{ref:o,type:a.value,onClick:l,onKeydown:u}:{id:r.buttonId,ref:o,type:a.value,"aria-expanded":t.disabled?void 0:r.disclosureState.value===0,"aria-controls":A(r.panel)?r.panelId:void 0,disabled:t.disabled?!0:void 0,onClick:l,onKeydown:u,onKeyup:c};return ae({props:$($({},t),d),slot:h,attrs:e,slots:n,name:"DisclosureButton"})}}});G({name:"DisclosurePanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},setup(t,{attrs:e,slots:n}){let r=Lc("DisclosurePanel");Ve(mv,r.panelId);let s=Dn(),i=x(()=>s!==null?s.value===0:r.disclosureState.value===0);return()=>{let o={open:r.disclosureState.value===0,close:r.close},a={id:r.panelId,ref:r.panel};return ae({props:$($({},t),a),slot:o,attrs:e,slots:n,features:3,visible:i.value,name:"DisclosurePanel"})}}});G({name:"FocusTrap",props:{as:{type:[Object,String],default:"div"},initialFocus:{type:Object,default:null}},setup(t,{attrs:e,slots:n}){let r=k(new Set),s=k(null),i=k(!0),o=x(()=>({initialFocus:t.initialFocus}));return He(()=>{!s.value||(r.value.add(s.value),ov(r,i,o))}),it(()=>{i.value=!1}),()=>{let a={},l={ref:s},h=t,{initialFocus:u}=h,c=Xt(h,["initialFocus"]);return ae({props:$($({},c),l),slot:a,attrs:e,slots:n,name:"FocusTrap"})}}});function e1(t){requestAnimationFrame(()=>requestAnimationFrame(t))}var gv=Symbol("ListboxContext");function Pi(t){let e=we(gv,null);if(e===null){let n=new Error(`<${t} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Pi),n}return e}G({name:"Listbox",emits:{"update:modelValue":t=>!0},props:{as:{type:[Object,String],default:"template"},disabled:{type:[Boolean],default:!1},horizontal:{type:[Boolean],default:!1},modelValue:{type:[Object,String,Number,Boolean]}},setup(t,{slots:e,attrs:n,emit:r}){let s=k(1),i=k(null),o=k(null),a=k(null),l=k([]),u=k(""),c=k(null),h=x(()=>t.modelValue),d={listboxState:s,value:h,orientation:x(()=>t.horizontal?"horizontal":"vertical"),labelRef:i,buttonRef:o,optionsRef:a,disabled:x(()=>t.disabled),options:l,searchQuery:u,activeOptionIndex:c,closeListbox(){t.disabled||s.value!==1&&(s.value=1,c.value=null)},openListbox(){t.disabled||s.value!==0&&(s.value=0)},goToOption(f,p){if(t.disabled||s.value===1)return;let g=Oc(f===4?{focus:4,id:p}:{focus:f},{resolveItems:()=>l.value,resolveActiveIndex:()=>c.value,resolveId:y=>y.id,resolveDisabled:y=>y.dataRef.disabled});u.value===""&&c.value===g||(u.value="",c.value=g)},search(f){if(t.disabled||s.value===1)return;let p=u.value!==""?0:1;u.value+=f.toLowerCase();let g=(c.value!==null?l.value.slice(c.value+p).concat(l.value.slice(0,c.value+p)):l.value).find(b=>b.dataRef.textValue.startsWith(u.value)&&!b.dataRef.disabled),y=g?l.value.indexOf(g):-1;y===-1||y===c.value||(c.value=y)},clearSearch(){t.disabled||s.value!==1&&u.value!==""&&(u.value="")},registerOption(f,p){var g,y;let b=Array.from((y=(g=a.value)==null?void 0:g.querySelectorAll('[id^="headlessui-listbox-option-"]'))!=null?y:[]).reduce((w,R,F)=>Object.assign(w,{[R.id]:F}),{});l.value=[...l.value,{id:f,dataRef:p}].sort((w,R)=>b[w.id]-b[R.id])},unregisterOption(f){let p=l.value.slice(),g=c.value!==null?p[c.value]:null,y=p.findIndex(b=>b.id===f);y!==-1&&p.splice(y,1),l.value=p,c.value=(()=>y===c.value||g===null?null:p.indexOf(g))()},select(f){t.disabled||r("update:modelValue",f)}};return Wt("mousedown",f=>{var p,g,y;let b=f.target,w=document.activeElement;s.value===0&&((p=A(o))!=null&&p.contains(b)||((g=A(a))!=null&&g.contains(b)||d.closeListbox(),!(w!==document.body&&(w==null?void 0:w.contains(b)))&&(f.defaultPrevented||(y=A(o))==null||y.focus({preventScroll:!0}))))}),Ve(gv,d),Es(x(()=>Ge(s.value,{[0]:0,[1]:1}))),()=>{let f={open:s.value===0,disabled:t.disabled};return ae({props:Yn(t,["modelValue","onUpdate:modelValue","disabled","horizontal"]),slot:f,slots:e,attrs:n,name:"Listbox"})}}});G({name:"ListboxLabel",props:{as:{type:[Object,String],default:"label"}},setup(t,{attrs:e,slots:n}){let r=Pi("ListboxLabel"),s=`headlessui-listbox-label-${ke()}`;function i(){var o;(o=A(r.buttonRef))==null||o.focus({preventScroll:!0})}return()=>{let o={open:r.listboxState.value===0,disabled:r.disabled.value},a={id:s,ref:r.labelRef,onClick:i};return ae({props:$($({},t),a),slot:o,attrs:e,slots:n,name:"ListboxLabel"})}}});G({name:"ListboxButton",props:{as:{type:[Object,String],default:"button"}},setup(t,{attrs:e,slots:n}){let r=Pi("ListboxButton"),s=`headlessui-listbox-button-${ke()}`;function i(u){switch(u.key){case" ":case"Enter":case"ArrowDown":u.preventDefault(),r.openListbox(),Te(()=>{var c;(c=A(r.optionsRef))==null||c.focus({preventScroll:!0}),r.value.value||r.goToOption(0)});break;case"ArrowUp":u.preventDefault(),r.openListbox(),Te(()=>{var c;(c=A(r.optionsRef))==null||c.focus({preventScroll:!0}),r.value.value||r.goToOption(3)});break}}function o(u){switch(u.key){case" ":u.preventDefault();break}}function a(u){r.disabled.value||(r.listboxState.value===0?(r.closeListbox(),Te(()=>{var c;return(c=A(r.buttonRef))==null?void 0:c.focus({preventScroll:!0})})):(u.preventDefault(),r.openListbox(),e1(()=>{var c;return(c=A(r.optionsRef))==null?void 0:c.focus({preventScroll:!0})})))}let l=Pr(x(()=>({as:t.as,type:e.type})),r.buttonRef);return()=>{var u,c;let h={open:r.listboxState.value===0,disabled:r.disabled.value},d={ref:r.buttonRef,id:s,type:l.value,"aria-haspopup":!0,"aria-controls":(u=A(r.optionsRef))==null?void 0:u.id,"aria-expanded":r.disabled.value?void 0:r.listboxState.value===0,"aria-labelledby":r.labelRef.value?[(c=A(r.labelRef))==null?void 0:c.id,s].join(" "):void 0,disabled:r.disabled.value===!0?!0:void 0,onKeydown:i,onKeyup:o,onClick:a};return ae({props:$($({},t),d),slot:h,attrs:e,slots:n,name:"ListboxButton"})}}});G({name:"ListboxOptions",props:{as:{type:[Object,String],default:"ul"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},setup(t,{attrs:e,slots:n}){let r=Pi("ListboxOptions"),s=`headlessui-listbox-options-${ke()}`,i=k(null);function o(u){switch(i.value&&clearTimeout(i.value),u.key){case" ":if(r.searchQuery.value!=="")return u.preventDefault(),u.stopPropagation(),r.search(u.key);case"Enter":if(u.preventDefault(),u.stopPropagation(),r.activeOptionIndex.value!==null){let{dataRef:c}=r.options.value[r.activeOptionIndex.value];r.select(c.value)}r.closeListbox(),Te(()=>{var c;return(c=A(r.buttonRef))==null?void 0:c.focus({preventScroll:!0})});break;case Ge(r.orientation.value,{vertical:"ArrowDown",horizontal:"ArrowRight"}):return u.preventDefault(),u.stopPropagation(),r.goToOption(2);case Ge(r.orientation.value,{vertical:"ArrowUp",horizontal:"ArrowLeft"}):return u.preventDefault(),u.stopPropagation(),r.goToOption(1);case"Home":case"PageUp":return u.preventDefault(),u.stopPropagation(),r.goToOption(0);case"End":case"PageDown":return u.preventDefault(),u.stopPropagation(),r.goToOption(3);case"Escape":u.preventDefault(),u.stopPropagation(),r.closeListbox(),Te(()=>{var c;return(c=A(r.buttonRef))==null?void 0:c.focus({preventScroll:!0})});break;case"Tab":u.preventDefault(),u.stopPropagation();break;default:u.key.length===1&&(r.search(u.key),i.value=setTimeout(()=>r.clearSearch(),350));break}}let a=Dn(),l=x(()=>a!==null?a.value===0:r.listboxState.value===0);return()=>{var u,c,h,d;let f={open:r.listboxState.value===0},p={"aria-activedescendant":r.activeOptionIndex.value===null||(u=r.options.value[r.activeOptionIndex.value])==null?void 0:u.id,"aria-labelledby":(d=(c=A(r.labelRef))==null?void 0:c.id)!=null?d:(h=A(r.buttonRef))==null?void 0:h.id,"aria-orientation":r.orientation.value,id:s,onKeydown:o,role:"listbox",tabIndex:0,ref:r.optionsRef};return ae({props:$($({},t),p),slot:f,attrs:e,slots:n,features:3,visible:l.value,name:"ListboxOptions"})}}});G({name:"ListboxOption",props:{as:{type:[Object,String],default:"li"},value:{type:[Object,String,Number,Boolean]},disabled:{type:Boolean,default:!1}},setup(t,{slots:e,attrs:n}){let r=Pi("ListboxOption"),s=`headlessui-listbox-option-${ke()}`,i=x(()=>r.activeOptionIndex.value!==null?r.options.value[r.activeOptionIndex.value].id===s:!1),o=x(()=>oe(r.value.value)===oe(t.value)),a=k({disabled:t.disabled,value:t.value,textValue:""});He(()=>{var d,f;let p=(f=(d=document.getElementById(s))==null?void 0:d.textContent)==null?void 0:f.toLowerCase().trim();p!==void 0&&(a.value.textValue=p)}),He(()=>r.registerOption(s,a)),it(()=>r.unregisterOption(s)),He(()=>{bt([r.listboxState,o],()=>{var d,f;r.listboxState.value===0&&(!o.value||(r.goToOption(4,s),(f=(d=document.getElementById(s))==null?void 0:d.focus)==null||f.call(d)))},{immediate:!0})}),Ke(()=>{r.listboxState.value===0&&(!i.value||Te(()=>{var d,f;return(f=(d=document.getElementById(s))==null?void 0:d.scrollIntoView)==null?void 0:f.call(d,{block:"nearest"})}))});function l(d){if(t.disabled)return d.preventDefault();r.select(t.value),r.closeListbox(),Te(()=>{var f;return(f=A(r.buttonRef))==null?void 0:f.focus({preventScroll:!0})})}function u(){if(t.disabled)return r.goToOption(5);r.goToOption(4,s)}function c(){t.disabled||i.value||r.goToOption(4,s)}function h(){t.disabled||!i.value||r.goToOption(5)}return()=>{let{disabled:d}=t,f={active:i.value,selected:o.value,disabled:d},p={id:s,role:"option",tabIndex:d===!0?void 0:-1,"aria-disabled":d===!0?!0:void 0,"aria-selected":o.value===!0?o.value:void 0,disabled:void 0,onClick:l,onFocus:u,onPointermove:c,onMousemove:c,onPointerleave:h,onMouseleave:h};return ae({props:$($({},t),p),slot:f,attrs:n,slots:e,name:"ListboxOption"})}}});function t1(t){requestAnimationFrame(()=>requestAnimationFrame(t))}var vv=Symbol("MenuContext");function xa(t){let e=we(vv,null);if(e===null){let n=new Error(`<${t} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,xa),n}return e}var n1=G({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(t,{slots:e,attrs:n}){let r=k(1),s=k(null),i=k(null),o=k([]),a=k(""),l=k(null),u={menuState:r,buttonRef:s,itemsRef:i,items:o,searchQuery:a,activeItemIndex:l,closeMenu:()=>{r.value=1,l.value=null},openMenu:()=>r.value=0,goToItem(c,h){let d=Oc(c===4?{focus:4,id:h}:{focus:c},{resolveItems:()=>o.value,resolveActiveIndex:()=>l.value,resolveId:f=>f.id,resolveDisabled:f=>f.dataRef.disabled});a.value===""&&l.value===d||(a.value="",l.value=d)},search(c){let h=a.value!==""?0:1;a.value+=c.toLowerCase();let d=(l.value!==null?o.value.slice(l.value+h).concat(o.value.slice(0,l.value+h)):o.value).find(p=>p.dataRef.textValue.startsWith(a.value)&&!p.dataRef.disabled),f=d?o.value.indexOf(d):-1;f===-1||f===l.value||(l.value=f)},clearSearch(){a.value=""},registerItem(c,h){var d,f;let p=Array.from((f=(d=i.value)==null?void 0:d.querySelectorAll('[id^="headlessui-menu-item-"]'))!=null?f:[]).reduce((g,y,b)=>Object.assign(g,{[y.id]:b}),{});o.value=[...o.value,{id:c,dataRef:h}].sort((g,y)=>p[g.id]-p[y.id])},unregisterItem(c){let h=o.value.slice(),d=l.value!==null?h[l.value]:null,f=h.findIndex(p=>p.id===c);f!==-1&&h.splice(f,1),o.value=h,l.value=(()=>f===l.value||d===null?null:h.indexOf(d))()}};return Wt("mousedown",c=>{var h,d,f;let p=c.target,g=document.activeElement;r.value===0&&((h=A(s))!=null&&h.contains(p)||((d=A(i))!=null&&d.contains(p)||u.closeMenu(),!(g!==document.body&&(g==null?void 0:g.contains(p)))&&(c.defaultPrevented||(f=A(s))==null||f.focus({preventScroll:!0}))))}),Ve(vv,u),Es(x(()=>Ge(r.value,{[0]:0,[1]:1}))),()=>{let c={open:r.value===0};return ae({props:t,slot:c,slots:e,attrs:n,name:"Menu"})}}}),r1=G({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"}},setup(t,{attrs:e,slots:n}){let r=xa("MenuButton"),s=`headlessui-menu-button-${ke()}`;function i(u){switch(u.key){case" ":case"Enter":case"ArrowDown":u.preventDefault(),u.stopPropagation(),r.openMenu(),Te(()=>{var c;(c=A(r.itemsRef))==null||c.focus({preventScroll:!0}),r.goToItem(0)});break;case"ArrowUp":u.preventDefault(),u.stopPropagation(),r.openMenu(),Te(()=>{var c;(c=A(r.itemsRef))==null||c.focus({preventScroll:!0}),r.goToItem(3)});break}}function o(u){switch(u.key){case" ":u.preventDefault();break}}function a(u){t.disabled||(r.menuState.value===0?(r.closeMenu(),Te(()=>{var c;return(c=A(r.buttonRef))==null?void 0:c.focus({preventScroll:!0})})):(u.preventDefault(),u.stopPropagation(),r.openMenu(),t1(()=>{var c;return(c=A(r.itemsRef))==null?void 0:c.focus({preventScroll:!0})})))}let l=Pr(x(()=>({as:t.as,type:e.type})),r.buttonRef);return()=>{var u;let c={open:r.menuState.value===0},h={ref:r.buttonRef,id:s,type:l.value,"aria-haspopup":!0,"aria-controls":(u=A(r.itemsRef))==null?void 0:u.id,"aria-expanded":t.disabled?void 0:r.menuState.value===0,onKeydown:i,onKeyup:o,onClick:a};return ae({props:$($({},t),h),slot:c,attrs:e,slots:n,name:"MenuButton"})}}}),s1=G({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},setup(t,{attrs:e,slots:n}){let r=xa("MenuItems"),s=`headlessui-menu-items-${ke()}`,i=k(null);Pc({container:x(()=>A(r.itemsRef)),enabled:x(()=>r.menuState.value===0),accept(c){return c.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:c.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(c){c.setAttribute("role","none")}});function o(c){var h;switch(i.value&&clearTimeout(i.value),c.key){case" ":if(r.searchQuery.value!=="")return c.preventDefault(),c.stopPropagation(),r.search(c.key);case"Enter":if(c.preventDefault(),c.stopPropagation(),r.activeItemIndex.value!==null){let{id:d}=r.items.value[r.activeItemIndex.value];(h=document.getElementById(d))==null||h.click()}r.closeMenu(),Te(()=>{var d;return(d=A(r.buttonRef))==null?void 0:d.focus({preventScroll:!0})});break;case"ArrowDown":return c.preventDefault(),c.stopPropagation(),r.goToItem(2);case"ArrowUp":return c.preventDefault(),c.stopPropagation(),r.goToItem(1);case"Home":case"PageUp":return c.preventDefault(),c.stopPropagation(),r.goToItem(0);case"End":case"PageDown":return c.preventDefault(),c.stopPropagation(),r.goToItem(3);case"Escape":c.preventDefault(),c.stopPropagation(),r.closeMenu(),Te(()=>{var d;return(d=A(r.buttonRef))==null?void 0:d.focus({preventScroll:!0})});break;case"Tab":c.preventDefault(),c.stopPropagation();break;default:c.key.length===1&&(r.search(c.key),i.value=setTimeout(()=>r.clearSearch(),350));break}}function a(c){switch(c.key){case" ":c.preventDefault();break}}let l=Dn(),u=x(()=>l!==null?l.value===0:r.menuState.value===0);return()=>{var c,h;let d={open:r.menuState.value===0},f={"aria-activedescendant":r.activeItemIndex.value===null||(c=r.items.value[r.activeItemIndex.value])==null?void 0:c.id,"aria-labelledby":(h=A(r.buttonRef))==null?void 0:h.id,id:s,onKeydown:o,onKeyup:a,role:"menu",tabIndex:0,ref:r.itemsRef};return ae({props:$($({},t),f),slot:d,attrs:e,slots:n,features:3,visible:u.value,name:"MenuItems"})}}}),Tl=G({name:"MenuItem",props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1}},setup(t,{slots:e,attrs:n}){let r=xa("MenuItem"),s=`headlessui-menu-item-${ke()}`,i=x(()=>r.activeItemIndex.value!==null?r.items.value[r.activeItemIndex.value].id===s:!1),o=k({disabled:t.disabled,textValue:""});He(()=>{var h,d;let f=(d=(h=document.getElementById(s))==null?void 0:h.textContent)==null?void 0:d.toLowerCase().trim();f!==void 0&&(o.value.textValue=f)}),He(()=>r.registerItem(s,o)),it(()=>r.unregisterItem(s)),Ke(()=>{r.menuState.value===0&&(!i.value||Te(()=>{var h,d;return(d=(h=document.getElementById(s))==null?void 0:h.scrollIntoView)==null?void 0:d.call(h,{block:"nearest"})}))});function a(h){if(t.disabled)return h.preventDefault();r.closeMenu(),Te(()=>{var d;return(d=A(r.buttonRef))==null?void 0:d.focus({preventScroll:!0})})}function l(){if(t.disabled)return r.goToItem(5);r.goToItem(4,s)}function u(){t.disabled||i.value||r.goToItem(4,s)}function c(){t.disabled||!i.value||r.goToItem(5)}return()=>{let{disabled:h}=t,d={active:i.value,disabled:h};return ae({props:gt($({},t),{id:s,role:"menuitem",tabIndex:h===!0?void 0:-1,"aria-disabled":h===!0?!0:void 0,onClick:a,onFocus:l,onPointermove:u,onMousemove:u,onPointerleave:c,onMouseleave:c}),slot:d,attrs:n,slots:e,name:"MenuItem"})}}}),yv=Symbol("PopoverContext");function Ra(t){let e=we(yv,null);if(e===null){let n=new Error(`<${t} /> is missing a parent <${o1.name} /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Ra),n}return e}var bv=Symbol("PopoverGroupContext");function _v(){return we(bv,null)}var wv=Symbol("PopoverPanelContext");function i1(){return we(wv,null)}var o1=G({name:"Popover",props:{as:{type:[Object,String],default:"div"}},setup(t,{slots:e,attrs:n}){let r=`headlessui-popover-button-${ke()}`,s=`headlessui-popover-panel-${ke()}`,i=k(1),o=k(null),a=k(null),l={popoverState:i,buttonId:r,panelId:s,panel:a,button:o,togglePopover(){i.value=Ge(i.value,{[0]:1,[1]:0})},closePopover(){i.value!==1&&(i.value=1)},close(f){l.closePopover();let p=(()=>f?f instanceof HTMLElement?f:f.value instanceof HTMLElement?A(f):A(l.button):A(l.button))();p==null||p.focus()}};Ve(yv,l),Es(x(()=>Ge(i.value,{[0]:0,[1]:1})));let u={buttonId:r,panelId:s,close(){l.closePopover()}},c=_v(),h=c==null?void 0:c.registerPopover;function d(){var f,p,g;return(g=c==null?void 0:c.isFocusWithinPopoverGroup())!=null?g:((f=A(o))==null?void 0:f.contains(document.activeElement))||((p=A(a))==null?void 0:p.contains(document.activeElement))}return Ke(()=>h==null?void 0:h(u)),Wt("focus",()=>{i.value===0&&(d()||!o||!a||l.closePopover())},!0),Wt("mousedown",f=>{var p,g,y;let b=f.target;i.value===0&&(((p=A(o))==null?void 0:p.contains(b))||((g=A(a))==null?void 0:g.contains(b))||(l.closePopover(),HS(b,1)||(f.preventDefault(),(y=A(o))==null||y.focus())))}),()=>{let f={open:i.value===0,close:l.close};return ae({props:t,slot:f,slots:e,attrs:n,name:"Popover"})}}});G({name:"PopoverButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1}},setup(t,{attrs:e,slots:n}){let r=Ra("PopoverButton"),s=_v(),i=s==null?void 0:s.closeOthers,o=i1(),a=o===null?!1:o===r.panelId,l=k(null),u=k(typeof window=="undefined"?null:document.activeElement);Wt("focus",()=>{u.value=l.value,l.value=document.activeElement},!0);let c=k(null);a||Ke(()=>{r.button.value=c.value});let h=Pr(x(()=>({as:t.as,type:e.type})),c);function d(g){var y,b,w,R;if(a){if(r.popoverState.value===1)return;switch(g.key){case" ":case"Enter":g.preventDefault(),g.stopPropagation(),r.closePopover(),(y=A(r.button))==null||y.focus();break}}else switch(g.key){case" ":case"Enter":g.preventDefault(),g.stopPropagation(),r.popoverState.value===1&&(i==null||i(r.buttonId)),r.togglePopover();break;case"Escape":if(r.popoverState.value!==0)return i==null?void 0:i(r.buttonId);if(!A(r.button)||!((b=A(r.button))!=null&&b.contains(document.activeElement)))return;g.preventDefault(),g.stopPropagation(),r.closePopover();break;case"Tab":if(r.popoverState.value!==0||!r.panel||!r.button)return;if(g.shiftKey){if(!u.value||((w=A(r.button))==null?void 0:w.contains(u.value))||((R=A(r.panel))==null?void 0:R.contains(u.value)))return;let F=Bo(),j=F.indexOf(u.value);if(F.indexOf(A(r.button))>j)return;g.preventDefault(),g.stopPropagation(),ut(A(r.panel),8)}else g.preventDefault(),g.stopPropagation(),ut(A(r.panel),1);break}}function f(g){var y,b;if(!a&&(g.key===" "&&g.preventDefault(),r.popoverState.value===0&&!!r.panel&&!!r.button))switch(g.key){case"Tab":if(!u.value||((y=A(r.button))==null?void 0:y.contains(u.value))||((b=A(r.panel))==null?void 0:b.contains(u.value)))return;let w=Bo(),R=w.indexOf(u.value);if(w.indexOf(A(r.button))>R)return;g.preventDefault(),g.stopPropagation(),ut(A(r.panel),8);break}}function p(){var g,y;t.disabled||(a?(r.closePopover(),(g=A(r.button))==null||g.focus()):(r.popoverState.value===1&&(i==null||i(r.buttonId)),(y=A(r.button))==null||y.focus(),r.togglePopover()))}return()=>{let g={open:r.popoverState.value===0},y=a?{ref:c,type:h.value,onKeydown:d,onClick:p}:{ref:c,id:r.buttonId,type:h.value,"aria-expanded":t.disabled?void 0:r.popoverState.value===0,"aria-controls":A(r.panel)?r.panelId:void 0,disabled:t.disabled?!0:void 0,onKeydown:d,onKeyup:f,onClick:p};return ae({props:$($({},t),y),slot:g,attrs:e,slots:n,name:"PopoverButton"})}}});G({name:"PopoverOverlay",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},setup(t,{attrs:e,slots:n}){let r=Ra("PopoverOverlay"),s=`headlessui-popover-overlay-${ke()}`,i=Dn(),o=x(()=>i!==null?i.value===0:r.popoverState.value===0);function a(){r.closePopover()}return()=>{let l={open:r.popoverState.value===0};return ae({props:gt($({},t),{id:s,"aria-hidden":!0,onClick:a}),slot:l,attrs:e,slots:n,features:3,visible:o.value,name:"PopoverOverlay"})}}});G({name:"PopoverPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},focus:{type:Boolean,default:!1}},setup(t,{attrs:e,slots:n}){let{focus:r}=t,s=Ra("PopoverPanel");Ve(wv,s.panelId),it(()=>{s.panel.value=null}),Ke(()=>{var l;if(!r||s.popoverState.value!==0||!s.panel)return;let u=document.activeElement;(l=A(s.panel))!=null&&l.contains(u)||ut(A(s.panel),1)}),Wt("keydown",l=>{var u,c;if(s.popoverState.value!==0||!A(s.panel)||l.key!=="Tab"||!document.activeElement||!((u=A(s.panel))!=null&&u.contains(document.activeElement)))return;l.preventDefault();let h=ut(A(s.panel),l.shiftKey?2:4);if(h===3)return(c=A(s.button))==null?void 0:c.focus();if(h===1){if(!A(s.button))return;let d=Bo(),f=d.indexOf(A(s.button)),p=d.splice(f+1).filter(g=>{var y;return!((y=A(s.panel))!=null&&y.contains(g))});ut(p,1)===0&&ut(document.body,1)}}),Wt("focus",()=>{var l;!r||s.popoverState.value===0&&(!A(s.panel)||((l=A(s.panel))==null?void 0:l.contains(document.activeElement))||s.closePopover())},!0);let i=Dn(),o=x(()=>i!==null?i.value===0:s.popoverState.value===0);function a(l){var u,c;switch(l.key){case"Escape":if(s.popoverState.value!==0||!A(s.panel)||!((u=A(s.panel))!=null&&u.contains(document.activeElement)))return;l.preventDefault(),l.stopPropagation(),s.closePopover(),(c=A(s.button))==null||c.focus();break}}return()=>{let l={open:s.popoverState.value===0,close:s.close},u={ref:s.panel,id:s.panelId,onKeydown:a};return ae({props:$($({},t),u),slot:l,attrs:e,slots:n,features:3,visible:o.value,name:"PopoverPanel"})}}});G({name:"PopoverGroup",props:{as:{type:[Object,String],default:"div"}},setup(t,{attrs:e,slots:n}){let r=k(null),s=k([]);function i(u){let c=s.value.indexOf(u);c!==-1&&s.value.splice(c,1)}function o(u){return s.value.push(u),()=>{i(u)}}function a(){var u;let c=document.activeElement;return(u=A(r))!=null&&u.contains(c)?!0:s.value.some(h=>{var d,f;return((d=document.getElementById(h.buttonId))==null?void 0:d.contains(c))||((f=document.getElementById(h.panelId))==null?void 0:f.contains(c))})}function l(u){for(let c of s.value)c.buttonId!==u&&c.close()}return Ve(bv,{registerPopover:o,unregisterPopover:i,isFocusWithinPopoverGroup:a,closeOthers:l}),()=>ae({props:gt($({},t),{ref:r}),slot:{},attrs:e,slots:n,name:"PopoverGroup"})}});var Ev=Symbol("LabelContext");function Iv(){let t=we(Ev,null);if(t===null){let e=new Error("You used a <Label /> component, but it is not inside a parent.");throw Error.captureStackTrace&&Error.captureStackTrace(e,Iv),e}return t}function Mc({slot:t={},name:e="Label",props:n={}}={}){let r=k([]);function s(i){return r.value.push(i),()=>{let o=r.value.indexOf(i);o!==-1&&r.value.splice(o,1)}}return Ve(Ev,{register:s,slot:t,name:e,props:n}),x(()=>r.value.length>0?r.value.join(" "):void 0)}G({name:"Label",props:{as:{type:[Object,String],default:"label"},passive:{type:[Boolean],default:!1}},setup(t,{slots:e,attrs:n}){let r=Iv(),s=`headlessui-label-${ke()}`;return He(()=>it(r.register(s))),()=>{let{name:i="Label",slot:o={},props:a={}}=r,d=t,{passive:l}=d,u=Xt(d,["passive"]),c=gt($({},Object.entries(a).reduce((f,[p,g])=>Object.assign(f,{[p]:pe(g)}),{})),{id:s}),h=$($({},u),c);return l&&delete h.onClick,ae({props:h,slot:o,attrs:n,slots:e,name:i})}}});var Tv=Symbol("RadioGroupContext");function Av(t){let e=we(Tv,null);if(e===null){let n=new Error(`<${t} /> is missing a parent <RadioGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Av),n}return e}G({name:"RadioGroup",emits:{"update:modelValue":t=>!0},props:{as:{type:[Object,String],default:"div"},disabled:{type:[Boolean],default:!1},modelValue:{type:[Object,String,Number,Boolean]}},setup(t,{emit:e,attrs:n,slots:r}){let s=k(null),i=k([]),o=Mc({name:"RadioGroupLabel"}),a=Da({name:"RadioGroupDescription"}),l=x(()=>t.modelValue),u={options:i,value:l,disabled:x(()=>t.disabled),firstOption:x(()=>i.value.find(d=>!d.propsRef.disabled)),containsCheckedOption:x(()=>i.value.some(d=>oe(d.propsRef.value)===oe(t.modelValue))),change(d){var f;if(t.disabled||l.value===d)return!1;let p=(f=i.value.find(g=>oe(g.propsRef.value)===oe(d)))==null?void 0:f.propsRef;return p!=null&&p.disabled?!1:(e("update:modelValue",d),!0)},registerOption(d){var f;let p=Array.from((f=s.value)==null?void 0:f.querySelectorAll('[id^="headlessui-radiogroup-option-"]')).reduce((g,y,b)=>Object.assign(g,{[y.id]:b}),{});i.value.push(d),i.value.sort((g,y)=>p[g.id]-p[y.id])},unregisterOption(d){let f=i.value.findIndex(p=>p.id===d);f!==-1&&i.value.splice(f,1)}};Ve(Tv,u),Pc({container:x(()=>A(s)),accept(d){return d.getAttribute("role")==="radio"?NodeFilter.FILTER_REJECT:d.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(d){d.setAttribute("role","none")}});function c(d){if(!s.value||!s.value.contains(d.target))return;let f=i.value.filter(p=>p.propsRef.disabled===!1).map(p=>p.element);switch(d.key){case"ArrowLeft":case"ArrowUp":if(d.preventDefault(),d.stopPropagation(),ut(f,18)===2){let p=i.value.find(g=>g.element===document.activeElement);p&&u.change(p.propsRef.value)}break;case"ArrowRight":case"ArrowDown":if(d.preventDefault(),d.stopPropagation(),ut(f,20)===2){let p=i.value.find(g=>g.element===document.activeElement);p&&u.change(p.propsRef.value)}break;case" ":{d.preventDefault(),d.stopPropagation();let p=i.value.find(g=>g.element===document.activeElement);p&&u.change(p.propsRef.value)}break}}let h=`headlessui-radiogroup-${ke()}`;return()=>{let y=t,{modelValue:d,disabled:f}=y,p=Xt(y,["modelValue","disabled"]),g={ref:s,id:h,role:"radiogroup","aria-labelledby":o.value,"aria-describedby":a.value,onKeydown:c};return ae({props:$($({},p),g),slot:{},attrs:n,slots:r,name:"RadioGroup"})}}});G({name:"RadioGroupOption",props:{as:{type:[Object,String],default:"div"},value:{type:[Object,String,Number,Boolean]},disabled:{type:Boolean,default:!1}},setup(t,{attrs:e,slots:n}){let r=Av("RadioGroupOption"),s=`headlessui-radiogroup-option-${ke()}`,i=Mc({name:"RadioGroupLabel"}),o=Da({name:"RadioGroupDescription"}),a=k(null),l=x(()=>({value:t.value,disabled:t.disabled})),u=k(1);He(()=>r.registerOption({id:s,element:a,propsRef:l})),it(()=>r.unregisterOption(s));let c=x(()=>{var b;return((b=r.firstOption.value)==null?void 0:b.id)===s}),h=x(()=>r.disabled.value||t.disabled),d=x(()=>oe(r.value.value)===oe(t.value)),f=x(()=>h.value?-1:d.value||!r.containsCheckedOption.value&&c.value?0:-1);function p(){var b;!r.change(t.value)||(u.value|=2,(b=a.value)==null||b.focus())}function g(){u.value|=2}function y(){u.value&=-3}return()=>{let b=Yn(t,["value","disabled"]),w={checked:d.value,disabled:h.value,active:Boolean(u.value&2)},R={id:s,ref:a,role:"radio","aria-checked":d.value?"true":"false","aria-labelledby":i.value,"aria-describedby":o.value,"aria-disabled":h.value?!0:void 0,tabIndex:f.value,onClick:h.value?void 0:p,onFocus:h.value?void 0:g,onBlur:h.value?void 0:y};return ae({props:$($({},b),R),slot:w,attrs:e,slots:n,name:"RadioGroupOption"})}}});var Sv=Symbol("GroupContext");G({name:"SwitchGroup",props:{as:{type:[Object,String],default:"template"}},setup(t,{slots:e,attrs:n}){let r=k(null),s=Mc({name:"SwitchLabel",props:{onClick(){!r.value||(r.value.click(),r.value.focus({preventScroll:!0}))}}}),i=Da({name:"SwitchDescription"});return Ve(Sv,{switchRef:r,labelledby:s,describedby:i}),()=>ae({props:t,slot:{},slots:e,attrs:n,name:"SwitchGroup"})}});G({name:"Switch",emits:{"update:modelValue":t=>!0},props:{as:{type:[Object,String],default:"button"},modelValue:{type:Boolean,default:!1}},setup(t,{emit:e,attrs:n,slots:r}){let s=we(Sv,null),i=`headlessui-switch-${ke()}`;function o(){e("update:modelValue",!t.modelValue)}let a=k(null),l=s===null?a:s.switchRef,u=Pr(x(()=>({as:t.as,type:n.type})),l);function c(f){f.preventDefault(),o()}function h(f){f.key!=="Tab"&&f.preventDefault(),f.key===" "&&o()}function d(f){f.preventDefault()}return()=>{let f={checked:t.modelValue},p={id:i,ref:l,role:"switch",type:u.value,tabIndex:0,"aria-checked":t.modelValue,"aria-labelledby":s==null?void 0:s.labelledby.value,"aria-describedby":s==null?void 0:s.describedby.value,onClick:c,onKeyup:h,onKeypress:d};return ae({props:$($({},t),p),slot:f,attrs:n,slots:r,name:"Switch"})}}});var Cv=Symbol("TabsContext");function Ni(t){let e=we(Cv,null);if(e===null){let n=new Error(`<${t} /> is missing a parent <TabGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Ni),n}return e}G({name:"TabGroup",emits:{change:t=>!0},props:{as:{type:[Object,String],default:"template"},selectedIndex:{type:[Number],default:null},defaultIndex:{type:[Number],default:0},vertical:{type:[Boolean],default:!1},manual:{type:[Boolean],default:!1}},setup(t,{slots:e,attrs:n,emit:r}){let s=k(null),i=k([]),o=k([]),a={selectedIndex:s,orientation:x(()=>t.vertical?"vertical":"horizontal"),activation:x(()=>t.manual?"manual":"auto"),tabs:i,panels:o,setSelectedIndex(l){s.value!==l&&(s.value=l,r("change",l))},registerTab(l){i.value.includes(l)||i.value.push(l)},unregisterTab(l){let u=i.value.indexOf(l);u!==-1&&i.value.splice(u,1)},registerPanel(l){o.value.includes(l)||o.value.push(l)},unregisterPanel(l){let u=o.value.indexOf(l);u!==-1&&o.value.splice(u,1)}};return Ve(Cv,a),Ke(()=>{var l;if(a.tabs.value.length<=0||t.selectedIndex===null&&s.value!==null)return;let u=a.tabs.value.map(d=>A(d)).filter(Boolean),c=u.filter(d=>!d.hasAttribute("disabled")),h=(l=t.selectedIndex)!=null?l:t.defaultIndex;if(h<0)s.value=u.indexOf(c[0]);else if(h>a.tabs.value.length)s.value=u.indexOf(c[c.length-1]);else{let d=u.slice(0,h),f=[...u.slice(h),...d].find(p=>c.includes(p));if(!f)return;s.value=u.indexOf(f)}}),()=>{let l={selectedIndex:s.value};return ae({props:Yn(t,["selectedIndex","defaultIndex","manual","vertical","onChange"]),slot:l,slots:e,attrs:n,name:"TabGroup"})}}});G({name:"TabList",props:{as:{type:[Object,String],default:"div"}},setup(t,{attrs:e,slots:n}){let r=Ni("TabList");return()=>{let s={selectedIndex:r.selectedIndex.value},i={role:"tablist","aria-orientation":r.orientation.value};return ae({props:$($({},t),i),slot:s,attrs:e,slots:n,name:"TabList"})}}});G({name:"Tab",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1}},setup(t,{attrs:e,slots:n}){let r=Ni("Tab"),s=`headlessui-tabs-tab-${ke()}`,i=k();He(()=>r.registerTab(i)),it(()=>r.unregisterTab(i));let o=x(()=>r.tabs.value.indexOf(i)),a=x(()=>o.value===r.selectedIndex.value);function l(d){let f=r.tabs.value.map(p=>A(p)).filter(Boolean);if(d.key===" "||d.key==="Enter"){d.preventDefault(),d.stopPropagation(),r.setSelectedIndex(o.value);return}switch(d.key){case"Home":case"PageUp":return d.preventDefault(),d.stopPropagation(),ut(f,1);case"End":case"PageDown":return d.preventDefault(),d.stopPropagation(),ut(f,8)}return Ge(r.orientation.value,{vertical(){if(d.key==="ArrowUp")return ut(f,18);if(d.key==="ArrowDown")return ut(f,20)},horizontal(){if(d.key==="ArrowLeft")return ut(f,18);if(d.key==="ArrowRight")return ut(f,20)}})}function u(){var d;(d=A(i))==null||d.focus()}function c(){var d;t.disabled||((d=A(i))==null||d.focus(),r.setSelectedIndex(o.value))}let h=Pr(x(()=>({as:t.as,type:e.type})),i);return()=>{var d,f;let p={selected:a.value},g={ref:i,onKeydown:l,onFocus:r.activation.value==="manual"?u:c,onClick:c,id:s,role:"tab",type:h.value,"aria-controls":(f=(d=r.panels.value[o.value])==null?void 0:d.value)==null?void 0:f.id,"aria-selected":a.value,tabIndex:a.value?0:-1,disabled:t.disabled?!0:void 0};return ae({props:$($({},t),g),slot:p,attrs:e,slots:n,name:"Tab"})}}});G({name:"TabPanels",props:{as:{type:[Object,String],default:"div"}},setup(t,{slots:e,attrs:n}){let r=Ni("TabPanels");return()=>{let s={selectedIndex:r.selectedIndex.value};return ae({props:t,slot:s,attrs:n,slots:e,name:"TabPanels"})}}});G({name:"TabPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},setup(t,{attrs:e,slots:n}){let r=Ni("TabPanel"),s=`headlessui-tabs-panel-${ke()}`,i=k();He(()=>r.registerPanel(i)),it(()=>r.unregisterPanel(i));let o=x(()=>r.panels.value.indexOf(i)),a=x(()=>o.value===r.selectedIndex.value);return()=>{var l,u;let c={selected:a.value},h={ref:i,id:s,role:"tabpanel","aria-labelledby":(u=(l=r.tabs.value[o.value])==null?void 0:l.value)==null?void 0:u.id,tabIndex:a.value?0:-1};return ae({props:$($({},t),h),slot:c,attrs:e,slots:n,features:3,visible:a.value,name:"TabPanel"})}}});function a1(t){let e={called:!1};return(...n)=>{if(!e.called)return e.called=!0,t(...n)}}function kv(){let t=[],e=[],n={enqueue(r){e.push(r)},requestAnimationFrame(...r){let s=requestAnimationFrame(...r);n.add(()=>cancelAnimationFrame(s))},nextFrame(...r){n.requestAnimationFrame(()=>{n.requestAnimationFrame(...r)})},setTimeout(...r){let s=setTimeout(...r);n.add(()=>clearTimeout(s))},add(r){t.push(r)},dispose(){for(let r of t.splice(0))r()},async workQueue(){for(let r of e.splice(0))await r()}};return n}function Al(t,...e){t&&e.length>0&&t.classList.add(...e)}function so(t,...e){t&&e.length>0&&t.classList.remove(...e)}function l1(t,e){let n=kv();if(!t)return n.dispose;let{transitionDuration:r,transitionDelay:s}=getComputedStyle(t),[i,o]=[r,s].map(a=>{let[l=0]=a.split(",").filter(Boolean).map(u=>u.includes("ms")?parseFloat(u):parseFloat(u)*1e3).sort((u,c)=>c-u);return l});return i!==0?n.setTimeout(()=>e("finished"),i+o):e("finished"),n.add(()=>e("cancelled")),n.dispose}function Ef(t,e,n,r,s,i){let o=kv(),a=i!==void 0?a1(i):()=>{};return so(t,...s),Al(t,...e,...n),o.nextFrame(()=>{so(t,...n),Al(t,...r),o.add(l1(t,l=>(so(t,...r,...e),Al(t,...s),a(l))))}),o.add(()=>so(t,...e,...n,...r,...s)),o.add(()=>a("cancelled")),o.dispose}function rr(t=""){return t.split(" ").filter(e=>e.trim().length>1)}var Fc=Symbol("TransitionContext");function u1(){return we(Fc,null)!==null}function c1(){let t=we(Fc,null);if(t===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return t}function h1(){let t=we(Bc,null);if(t===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return t}var Bc=Symbol("NestingContext");function Oa(t){return"children"in t?Oa(t.children):t.value.filter(({state:e})=>e==="visible").length>0}function Dv(t){let e=k([]),n=k(!1);He(()=>n.value=!0),it(()=>n.value=!1);function r(i,o=1){let a=e.value.findIndex(({id:l})=>l===i);a!==-1&&(Ge(o,{[0](){e.value.splice(a,1)},[1](){e.value[a].state="hidden"}}),!Oa(e)&&n.value&&(t==null||t()))}function s(i){let o=e.value.find(({id:a})=>a===i);return o?o.state!=="visible"&&(o.state="visible"):e.value.push({id:i,state:"visible"}),()=>r(i,0)}return{children:e,register:s,unregister:r}}var xv=1,d1=G({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(t,{emit:e,attrs:n,slots:r}){if(!u1()&&qS())return()=>Zt(p1,gt($({},t),{onBeforeEnter:()=>e("beforeEnter"),onAfterEnter:()=>e("afterEnter"),onBeforeLeave:()=>e("beforeLeave"),onAfterLeave:()=>e("afterLeave")}),r);let s=k(null),i=k("visible"),o=x(()=>t.unmount?0:1),{show:a,appear:l}=c1(),{register:u,unregister:c}=h1(),h={value:!0},d=ke(),f={value:!1},p=Dv(()=>{f.value||(i.value="hidden",c(d),e("afterLeave"))});He(()=>{let S=u(d);it(S)}),Ke(()=>{if(o.value===1&&!!d){if(a&&i.value!=="visible"){i.value="visible";return}Ge(i.value,{hidden:()=>c(d),visible:()=>u(d)})}});let g=rr(t.enter),y=rr(t.enterFrom),b=rr(t.enterTo),w=rr(t.entered),R=rr(t.leave),F=rr(t.leaveFrom),j=rr(t.leaveTo);He(()=>{Ke(()=>{if(i.value==="visible"){let S=A(s);if(S instanceof Comment&&S.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}})});function P(S){let le=h.value&&!l.value,Z=A(s);!Z||!(Z instanceof HTMLElement)||le||(f.value=!0,a.value&&e("beforeEnter"),a.value||e("beforeLeave"),S(a.value?Ef(Z,g,y,b,w,ve=>{f.value=!1,ve==="finished"&&e("afterEnter")}):Ef(Z,R,F,j,w,ve=>{f.value=!1,ve==="finished"&&(Oa(p)||(i.value="hidden",c(d),e("afterLeave")))})))}return He(()=>{bt([a,l],(S,le,Z)=>{P(Z),h.value=!1},{immediate:!0})}),Ve(Bc,p),Es(x(()=>Ge(i.value,{visible:0,hidden:1}))),()=>{let Se=t,{appear:S,show:le,enter:Z,enterFrom:ve,enterTo:De,entered:H,leave:Ae,leaveFrom:Ce,leaveTo:tn}=Se,Ue=Xt(Se,["appear","show","enter","enterFrom","enterTo","entered","leave","leaveFrom","leaveTo"]);return ae({props:gt($({},Ue),{ref:s}),slot:{},slots:r,attrs:n,features:xv,visible:i.value==="visible",name:"TransitionChild"})}}}),f1=d1,p1=G({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(t,{emit:e,attrs:n,slots:r}){let s=Dn(),i=x(()=>t.show===null&&s!==null?Ge(s.value,{[0]:!0,[1]:!1}):t.show);Ke(()=>{if(![!0,!1].includes(i.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let o=k(i.value?"visible":"hidden"),a=Dv(()=>{o.value="hidden"}),l={value:!0},u={show:i,appear:x(()=>t.appear||!l.value)};return He(()=>{Ke(()=>{l.value=!1,i.value?o.value="visible":Oa(a)||(o.value="hidden")})}),Ve(Bc,a),Ve(Fc,u),()=>{let c=Yn(t,["show","appear","unmount"]),h={unmount:t.unmount};return ae({props:gt($({},h),{as:"template"}),slot:{},slots:gt($({},r),{default:()=>[Zt(f1,$($($({onBeforeEnter:()=>e("beforeEnter"),onAfterEnter:()=>e("afterEnter"),onBeforeLeave:()=>e("beforeLeave"),onAfterLeave:()=>e("afterLeave")},n),h),c),r.default)]}),attrs:{},features:xv,visible:o.value==="visible",name:"Transition"})}}});function m1(t,e){return ge(),_t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[ee("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z"})])}function g1(t,e){return ge(),_t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[ee("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"})])}function v1(t,e){return ge(),_t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[ee("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19 9l-7 7-7-7"})])}function y1(t,e){return ge(),_t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[ee("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"})])}function b1(t,e){return ge(),_t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[ee("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})])}function _1(t,e){return ge(),_t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[ee("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})])}const w1=t=>(gm("data-v-4c1d1e91"),t=t(),vm(),t),E1={class:"mx-auto w-full flex justify-between"},I1=w1(()=>me("div",{class:"text-2xl font-bold flex items-center dark:text-gray-50 transition-colors"},[me("img",{src:YE,alt:"DaftDoris",class:"h-8 dark:invert"})],-1)),T1={class:"py-1"},A1={class:"flex items-center"},S1=["src"],C1=G({setup(t){const e=pi(),n=KE(),r=ng();x(()=>n.meta.title||"Home");const s=x(()=>e.user),i=x(()=>e.isAuthenticated),o=NI(),a=rI(o),l={async onClickProfile(){await e.logout(),await r.push("/auth/login")},onClickToggleDarkMode(){a()}};return(u,c)=>{var d;const h=G_("ripple");return pe(i)?(ge(),Je("header",Mp(pc({key:0},u.$attrs)),[me("div",E1,[I1,ee(pe(n1),{as:"div",class:"relative inline-block text-left"},{default:ot(()=>[me("div",null,[ee(pe(r1),{class:"inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"},{default:ot(()=>[Ci(aa(pe(n).params.podcastId||"smartseven")+" ",1),ee(pe(v1),{class:"-mr-1 ml-2 h-5 w-5","aria-hidden":"true"})]),_:1})]),ee(li,{"enter-active-class":"transition ease-out duration-100","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:ot(()=>[ee(pe(s1),{class:"origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"},{default:ot(()=>[me("div",T1,[ee(pe(Tl),null,{default:ot(({active:f})=>[me("a",{href:"#smartseven",class:wn([f?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"])},"Smart Seven \u{1F1EC}\u{1F1E7}",2)]),_:1}),ee(pe(Tl),null,{default:ot(({active:f})=>[me("a",{href:"#smartseven-ireland",class:wn([f?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"])},"Smart Seven Ireland \u{1F1EE}\u{1F1EA}",2)]),_:1}),ee(pe(Tl),null,{default:ot(({active:f})=>[me("a",{href:"#",class:wn([f?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"])},"Another podcast \u{1F916}",2)]),_:1})])]),_:1})]),_:1})]),_:1}),me("div",A1,[me("button",{type:"button",class:"round-btn mr-2 px-1 py-1",onClick:c[0]||(c[0]=mc((...f)=>l.onClickToggleDarkMode&&l.onClickToggleDarkMode(...f),["prevent","stop"]))},[ee(li,{mode:"out-in",name:"fade"},{default:ot(()=>[pe(o)?(ge(),_t(pe(b1),{key:0,class:"dark:text-white bg-transparent transition-colors"})):(ge(),_t(pe(_1),{key:1,class:"dark:text-white bg-transparent transition-colors"}))]),_:1})]),Si((ge(),Je("button",{type:"button",class:"round-btn",onClick:c[1]||(c[1]=(...f)=>l.onClickProfile&&l.onClickProfile(...f))},[me("img",{class:"rounded-full shadow-lg",alt:"profile image",src:(d=pe(s))==null?void 0:d.thumbnailImage},null,8,S1)])),[[h]])])])],16)):Y_("",!0)}}});var k1=fn(C1,[["__scopeId","data-v-4c1d1e91"]]);const D1={class:"relative w-full h-full"},x1={class:"mx-auto w-full h-full"},R1=G({setup(t){return(e,n)=>{const r=cc("router-view");return ge(),Je("div",D1,[ee(k1),me("main",x1,[ee(r)])])}}});let O1=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce((e,n)=>(n&=63,n<36?e+=n.toString(36):n<62?e+=(n-26).toString(36).toUpperCase():n>62?e+="-":e+="_",e),"");var P1=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},U,$c=$c||{},ne=P1||self;function $o(){}function vu(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Li(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function N1(t){return Object.prototype.hasOwnProperty.call(t,Sl)&&t[Sl]||(t[Sl]=++L1)}var Sl="closure_uid_"+(1e9*Math.random()>>>0),L1=0;function M1(t,e,n){return t.call.apply(t.bind,arguments)}function F1(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function ct(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ct=M1:ct=F1,ct.apply(null,arguments)}function io(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function mt(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function Zn(){this.s=this.s,this.o=this.o}var B1=0,$1={};Zn.prototype.s=!1;Zn.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),B1!=0)){var t=N1(this);delete $1[t]}};Zn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Rv=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Ov=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,s=typeof t=="string"?t.split(""):t;for(let i=0;i<r;i++)i in s&&e.call(n,s[i],i,t)};function V1(t){e:{var e=RC;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let s=0;s<n;s++)if(s in r&&e.call(void 0,r[s],s,t)){e=s;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function If(t){return Array.prototype.concat.apply([],arguments)}function Vc(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Vo(t){return/^[\s\xa0]*$/.test(t)}var Tf=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Tt(t,e){return t.indexOf(e)!=-1}function Cl(t,e){return t<e?-1:t>e?1:0}var At;e:{var Af=ne.navigator;if(Af){var Sf=Af.userAgent;if(Sf){At=Sf;break e}}At=""}function Uc(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Pv(t){const e={};for(const n in t)e[n]=t[n];return e}var Cf="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Nv(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<Cf.length;i++)n=Cf[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function jc(t){return jc[" "](t),t}jc[" "]=$o;function U1(t){var e=q1;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var j1=Tt(At,"Opera"),ls=Tt(At,"Trident")||Tt(At,"MSIE"),Lv=Tt(At,"Edge"),yu=Lv||ls,Mv=Tt(At,"Gecko")&&!(Tt(At.toLowerCase(),"webkit")&&!Tt(At,"Edge"))&&!(Tt(At,"Trident")||Tt(At,"MSIE"))&&!Tt(At,"Edge"),z1=Tt(At.toLowerCase(),"webkit")&&!Tt(At,"Edge");function Fv(){var t=ne.document;return t?t.documentMode:void 0}var Uo;e:{var kl="",Dl=function(){var t=At;if(Mv)return/rv:([^\);]+)(\)|;)/.exec(t);if(Lv)return/Edge\/([\d\.]+)/.exec(t);if(ls)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(z1)return/WebKit\/(\S+)/.exec(t);if(j1)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Dl&&(kl=Dl?Dl[1]:""),ls){var xl=Fv();if(xl!=null&&xl>parseFloat(kl)){Uo=String(xl);break e}}Uo=kl}var q1={};function H1(){return U1(function(){let t=0;const e=Tf(String(Uo)).split("."),n=Tf("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var s=e[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s[0].length==0&&i[0].length==0)break;t=Cl(s[1].length==0?0:parseInt(s[1],10),i[1].length==0?0:parseInt(i[1],10))||Cl(s[2].length==0,i[2].length==0)||Cl(s[2],i[2]),s=s[3],i=i[3]}while(t==0)}return 0<=t})}var bu;if(ne.document&&ls){var kf=Fv();bu=kf||parseInt(Uo,10)||void 0}else bu=void 0;var K1=bu,W1=function(){if(!ne.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ne.addEventListener("test",$o,e),ne.removeEventListener("test",$o,e)}catch{}return t}();function wt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}wt.prototype.h=function(){this.defaultPrevented=!0};function mi(t,e){if(wt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Mv){e:{try{jc(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:G1[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&mi.Z.h.call(this)}}mt(mi,wt);var G1={2:"touch",3:"pen",4:"mouse"};mi.prototype.h=function(){mi.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Mi="closure_listenable_"+(1e6*Math.random()|0),X1=0;function Q1(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=s,this.key=++X1,this.ca=this.fa=!1}function Pa(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Na(t){this.src=t,this.g={},this.h=0}Na.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=wu(t,e,r,s);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new Q1(e,this.src,i,!!r,s),e.fa=n,t.push(e)),e};function _u(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=Rv(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Pa(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function wu(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==r)return s}return-1}var zc="closure_lm_"+(1e6*Math.random()|0),Rl={};function Bv(t,e,n,r,s){if(r&&r.once)return Vv(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Bv(t,e[i],n,r,s);return null}return n=Kc(n),t&&t[Mi]?t.N(e,n,Li(r)?!!r.capture:!!r,s):$v(t,e,n,!1,r,s)}function $v(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=Li(s)?!!s.capture:!!s,a=Hc(t);if(a||(t[zc]=a=new Na(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=Y1(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)W1||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(jv(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Y1(){function t(n){return e.call(t.src,t.listener,n)}var e=Z1;return t}function Vv(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Vv(t,e[i],n,r,s);return null}return n=Kc(n),t&&t[Mi]?t.O(e,n,Li(r)?!!r.capture:!!r,s):$v(t,e,n,!0,r,s)}function Uv(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)Uv(t,e[i],n,r,s);else r=Li(r)?!!r.capture:!!r,n=Kc(n),t&&t[Mi]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=wu(i,n,r,s),-1<n&&(Pa(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Hc(t))&&(e=t.g[e.toString()],t=-1,e&&(t=wu(e,n,r,s)),(n=-1<t?e[t]:null)&&qc(n))}function qc(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[Mi])_u(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(jv(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Hc(e))?(_u(n,t),n.h==0&&(n.src=null,e[zc]=null)):Pa(t)}}}function jv(t){return t in Rl?Rl[t]:Rl[t]="on"+t}function Z1(t,e){if(t.ca)t=!0;else{e=new mi(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&qc(t),t=n.call(r,e)}return t}function Hc(t){return t=t[zc],t instanceof Na?t:null}var Ol="__closure_events_fn_"+(1e9*Math.random()>>>0);function Kc(t){return typeof t=="function"?t:(t[Ol]||(t[Ol]=function(e){return t.handleEvent(e)}),t[Ol])}function rt(){Zn.call(this),this.i=new Na(this),this.P=this,this.I=null}mt(rt,Zn);rt.prototype[Mi]=!0;rt.prototype.removeEventListener=function(t,e,n,r){Uv(this,t,e,n,r)};function ht(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new wt(e,t);else if(e instanceof wt)e.target=e.target||t;else{var s=e;e=new wt(r,t),Nv(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=oo(o,r,!0,e)&&s}if(o=e.g=t,s=oo(o,r,!0,e)&&s,s=oo(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=oo(o,r,!1,e)&&s}rt.prototype.M=function(){if(rt.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Pa(n[r]);delete t.g[e],t.h--}}this.I=null};rt.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};rt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function oo(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,l=o.ia||o.src;o.fa&&_u(t.i,o),s=a.call(l,r)!==!1&&s}}return s&&!r.defaultPrevented}var Wc=ne.JSON.stringify;function J1(){var t=qv;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class eC{constructor(){this.h=this.g=null}add(e,n){const r=zv.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var zv=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new tC,t=>t.reset());class tC{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function nC(t){ne.setTimeout(()=>{throw t},0)}function Gc(t,e){Eu||rC(),Iu||(Eu(),Iu=!0),qv.add(t,e)}var Eu;function rC(){var t=ne.Promise.resolve(void 0);Eu=function(){t.then(sC)}}var Iu=!1,qv=new eC;function sC(){for(var t;t=J1();){try{t.h.call(t.g)}catch(n){nC(n)}var e=zv;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Iu=!1}function La(t,e){rt.call(this),this.h=t||1,this.g=e||ne,this.j=ct(this.kb,this),this.l=Date.now()}mt(La,rt);U=La.prototype;U.da=!1;U.S=null;U.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),ht(this,"tick"),this.da&&(Xc(this),this.start()))}};U.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Xc(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}U.M=function(){La.Z.M.call(this),Xc(this),delete this.g};function Qc(t,e,n){if(typeof t=="function")n&&(t=ct(t,n));else if(t&&typeof t.handleEvent=="function")t=ct(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ne.setTimeout(t,e||0)}function Hv(t){t.g=Qc(()=>{t.g=null,t.i&&(t.i=!1,Hv(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class iC extends Zn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Hv(this)}M(){super.M(),this.g&&(ne.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gi(t){Zn.call(this),this.h=t,this.g={}}mt(gi,Zn);var Df=[];function Kv(t,e,n,r){Array.isArray(n)||(n&&(Df[0]=n.toString()),n=Df);for(var s=0;s<n.length;s++){var i=Bv(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Wv(t){Uc(t.g,function(e,n){this.g.hasOwnProperty(n)&&qc(e)},t),t.g={}}gi.prototype.M=function(){gi.Z.M.call(this),Wv(this)};gi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ma(){this.g=!0}Ma.prototype.Aa=function(){this.g=!1};function oC(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function aC(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Wr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+uC(t,n)+(r?" "+r:"")})}function lC(t,e){t.info(function(){return"TIMEOUT: "+e})}Ma.prototype.info=function(){};function uC(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Wc(n)}catch{return e}}var Nr={},xf=null;function Fa(){return xf=xf||new rt}Nr.Ma="serverreachability";function Gv(t){wt.call(this,Nr.Ma,t)}mt(Gv,wt);function vi(t){const e=Fa();ht(e,new Gv(e,t))}Nr.STAT_EVENT="statevent";function Xv(t,e){wt.call(this,Nr.STAT_EVENT,t),this.stat=e}mt(Xv,wt);function St(t){const e=Fa();ht(e,new Xv(e,t))}Nr.Na="timingevent";function Qv(t,e){wt.call(this,Nr.Na,t),this.size=e}mt(Qv,wt);function Fi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ne.setTimeout(function(){t()},e)}var Ba={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Yv={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Yc(){}Yc.prototype.h=null;function Rf(t){return t.h||(t.h=t.i())}function Zv(){}var Bi={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Zc(){wt.call(this,"d")}mt(Zc,wt);function Jc(){wt.call(this,"c")}mt(Jc,wt);var Tu;function $a(){}mt($a,Yc);$a.prototype.g=function(){return new XMLHttpRequest};$a.prototype.i=function(){return{}};Tu=new $a;function $i(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new gi(this),this.P=cC,t=yu?125:void 0,this.W=new La(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Jv}function Jv(){this.i=null,this.g="",this.h=!1}var cC=45e3,Au={},jo={};U=$i.prototype;U.setTimeout=function(t){this.P=t};function Su(t,e,n){t.K=1,t.v=Ua(Sn(e)),t.s=n,t.U=!0,ey(t,null)}function ey(t,e){t.F=Date.now(),Vi(t),t.A=Sn(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),ay(n.h,"t",r),t.C=0,n=t.l.H,t.h=new Jv,t.g=Cy(t.l,n?e:null,!t.s),0<t.O&&(t.L=new iC(ct(t.Ia,t,t.g),t.O)),Kv(t.V,t.g,"readystatechange",t.gb),e=t.H?Pv(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),vi(1),oC(t.j,t.u,t.A,t.m,t.X,t.s)}U.gb=function(t){t=t.target;const e=this.L;e&&_n(t)==3?e.l():this.Ia(t)};U.Ia=function(t){try{if(t==this.g)e:{const c=_n(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>c)&&(c!=3||yu||this.g&&(this.h.h||this.g.ga()||Lf(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?vi(3):vi(2)),Va(this);var n=this.g.ba();this.N=n;t:if(ty(this)){var r=Lf(this.g);t="";var s=r.length,i=_n(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){cr(this),Ys(this);var o="";break t}this.h.i=new ne.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,aC(this.j,this.u,this.A,this.m,this.X,c,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Vo(a)){var u=a;break t}}u=null}if(n=u)Wr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Cu(this,n);else{this.i=!1,this.o=3,St(12),cr(this),Ys(this);break e}}this.U?(ny(this,c,o),yu&&this.i&&c==3&&(Kv(this.V,this.W,"tick",this.fb),this.W.start())):(Wr(this.j,this.m,o,null),Cu(this,o)),c==4&&cr(this),this.i&&!this.I&&(c==4?Iy(this.l,this):(this.i=!1,Vi(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,St(12)):(this.o=0,St(13)),cr(this),Ys(this)}}}catch{}finally{}};function ty(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function ny(t,e,n){let r=!0,s;for(;!t.I&&t.C<n.length;)if(s=hC(t,n),s==jo){e==4&&(t.o=4,St(14),r=!1),Wr(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Au){t.o=4,St(15),Wr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Wr(t.j,t.m,s,null),Cu(t,s);ty(t)&&s!=jo&&s!=Au&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,St(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),lh(e),e.L=!0,St(11))):(Wr(t.j,t.m,n,"[Invalid Chunked Response]"),cr(t),Ys(t))}U.fb=function(){if(this.g){var t=_n(this.g),e=this.g.ga();this.C<e.length&&(Va(this),ny(this,t,e),this.i&&t!=4&&Vi(this))}};function hC(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?jo:(n=Number(e.substring(n,r)),isNaN(n)?Au:(r+=1,r+n>e.length?jo:(e=e.substr(r,n),t.C=r+n,e)))}U.cancel=function(){this.I=!0,cr(this)};function Vi(t){t.Y=Date.now()+t.P,ry(t,t.P)}function ry(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Fi(ct(t.eb,t),e)}function Va(t){t.B&&(ne.clearTimeout(t.B),t.B=null)}U.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(lC(this.j,this.A),this.K!=2&&(vi(3),St(17)),cr(this),this.o=2,Ys(this)):ry(this,this.Y-t)};function Ys(t){t.l.G==0||t.I||Iy(t.l,t)}function cr(t){Va(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Xc(t.W),Wv(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Cu(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||ku(n.i,t))){if(n.I=t.N,!t.J&&ku(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Ko(n),qa(n);else break e;ah(n),St(18)}}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&n.A==0&&!n.v&&(n.v=Fi(ct(n.ab,n),6e3));if(1>=cy(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else hr(n,11)}else if((t.J||n.g==t)&&Ko(n),!Vo(e))for(s=n.Ca.g.parse(e),e=0;e<s.length;e++){let u=s[e];if(n.U=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.J=u[1],n.la=u[2];const c=u[3];c!=null&&(n.ma=c,n.h.info("VER="+n.ma));const h=u[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const p=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var i=r.i;!i.g&&(Tt(p,"spdy")||Tt(p,"quic")||Tt(p,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(nh(i,i.h),i.h=null))}if(r.D){const g=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;g&&(r.sa=g,ze(r.F,r.D,g))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=Sy(r,r.H?r.la:null,r.W),o.J){hy(r.i,o);var a=o,l=r.K;l&&a.setTimeout(l),a.B&&(Va(a),Vi(a)),r.g=o}else wy(r);0<n.l.length&&Ha(n)}else u[0]!="stop"&&u[0]!="close"||hr(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?hr(n,7):oh(n):u[0]!="noop"&&n.j&&n.j.wa(u),n.A=0)}}vi(4)}catch{}}function dC(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(vu(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function eh(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(vu(t)||typeof t=="string")Ov(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(vu(t)||typeof t=="string"){n=[];for(var r=t.length,s=0;s<r;s++)n.push(s)}else for(s in n=[],r=0,t)n[r++]=s;r=dC(t),s=r.length;for(var i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}}function Ts(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Ts)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}U=Ts.prototype;U.R=function(){th(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};U.T=function(){return th(this),this.g.concat()};function th(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];wr(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var s={};for(n=e=0;e<t.g.length;)r=t.g[e],wr(s,r)||(t.g[n++]=r,s[r]=1),e++;t.g.length=n}}U.get=function(t,e){return wr(this.h,t)?this.h[t]:e};U.set=function(t,e){wr(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};U.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var s=n[r],i=this.get(s);t.call(e,i,s,this)}};function wr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var sy=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function fC(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Er(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Er){this.g=e!==void 0?e:t.g,zo(this,t.j),this.s=t.s,qo(this,t.i),Ho(this,t.m),this.l=t.l,e=t.h;var n=new yi;n.i=e.i,e.g&&(n.g=new Ts(e.g),n.h=e.h),Of(this,n),this.o=t.o}else t&&(n=String(t).match(sy))?(this.g=!!e,zo(this,n[1]||"",!0),this.s=Zs(n[2]||""),qo(this,n[3]||"",!0),Ho(this,n[4]),this.l=Zs(n[5]||"",!0),Of(this,n[6]||"",!0),this.o=Zs(n[7]||"")):(this.g=!!e,this.h=new yi(null,this.g))}Er.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Us(e,Pf,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Us(e,Pf,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(Us(n,n.charAt(0)=="/"?yC:vC,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Us(n,_C)),t.join("")};function Sn(t){return new Er(t)}function zo(t,e,n){t.j=n?Zs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function qo(t,e,n){t.i=n?Zs(e,!0):e}function Ho(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Of(t,e,n){e instanceof yi?(t.h=e,wC(t.h,t.g)):(n||(e=Us(e,bC)),t.h=new yi(e,t.g))}function ze(t,e,n){t.h.set(e,n)}function Ua(t){return ze(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function pC(t){return t instanceof Er?Sn(t):new Er(t,void 0)}function mC(t,e,n,r){var s=new Er(null,void 0);return t&&zo(s,t),e&&qo(s,e),n&&Ho(s,n),r&&(s.l=r),s}function Zs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Us(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,gC),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function gC(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Pf=/[#\/\?@]/g,vC=/[#\?:]/g,yC=/[#\?]/g,bC=/[#\?@]/g,_C=/#/g;function yi(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Jn(t){t.g||(t.g=new Ts,t.h=0,t.i&&fC(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}U=yi.prototype;U.add=function(t,e){Jn(this),this.i=null,t=As(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function iy(t,e){Jn(t),e=As(t,e),wr(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,wr(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&th(t)))}function oy(t,e){return Jn(t),e=As(t,e),wr(t.g.h,e)}U.forEach=function(t,e){Jn(this),this.g.forEach(function(n,r){Ov(n,function(s){t.call(e,s,r,this)},this)},this)};U.T=function(){Jn(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var s=t[r],i=0;i<s.length;i++)n.push(e[r]);return n};U.R=function(t){Jn(this);var e=[];if(typeof t=="string")oy(this,t)&&(e=If(e,this.g.get(As(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=If(e,t[n])}return e};U.set=function(t,e){return Jn(this),this.i=null,t=As(this,t),oy(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};U.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function ay(t,e,n){iy(t,e),0<n.length&&(t.i=null,t.g.set(As(t,e),Vc(n)),t.h+=n.length)}U.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],s=encodeURIComponent(String(r));r=this.R(r);for(var i=0;i<r.length;i++){var o=s;r[i]!==""&&(o+="="+encodeURIComponent(String(r[i]))),t.push(o)}}return this.i=t.join("&")};function As(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function wC(t,e){e&&!t.j&&(Jn(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(iy(this,r),ay(this,s,n))},t)),t.j=e}var EC=class{constructor(t,e){this.h=t,this.g=e}};function ly(t){this.l=t||IC,ne.PerformanceNavigationTiming?(t=ne.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ne.g&&ne.g.Ea&&ne.g.Ea()&&ne.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var IC=10;function uy(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function cy(t){return t.h?1:t.g?t.g.size:0}function ku(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function nh(t,e){t.g?t.g.add(e):t.h=e}function hy(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}ly.prototype.cancel=function(){if(this.i=dy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function dy(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Vc(t.i)}function rh(){}rh.prototype.stringify=function(t){return ne.JSON.stringify(t,void 0)};rh.prototype.parse=function(t){return ne.JSON.parse(t,void 0)};function TC(){this.g=new rh}function AC(t,e,n){const r=n||"";try{eh(t,function(s,i){let o=s;Li(s)&&(o=Wc(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function SC(t,e){const n=new Ma;if(ne.Image){const r=new Image;r.onload=io(ao,n,r,"TestLoadImage: loaded",!0,e),r.onerror=io(ao,n,r,"TestLoadImage: error",!1,e),r.onabort=io(ao,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=io(ao,n,r,"TestLoadImage: timeout",!1,e),ne.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function ao(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Ui(t){this.l=t.$b||null,this.j=t.ib||!1}mt(Ui,Yc);Ui.prototype.g=function(){return new ja(this.l,this.j)};Ui.prototype.i=function(t){return function(){return t}}({});function ja(t,e){rt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=sh,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}mt(ja,rt);var sh=0;U=ja.prototype;U.open=function(t,e){if(this.readyState!=sh)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,bi(this)};U.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||ne).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};U.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ji(this)),this.readyState=sh};U.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,bi(this)),this.g&&(this.readyState=3,bi(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof ne.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;fy(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function fy(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}U.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ji(this):bi(this),this.readyState==3&&fy(this)}};U.Ua=function(t){this.g&&(this.response=this.responseText=t,ji(this))};U.Ta=function(t){this.g&&(this.response=t,ji(this))};U.ha=function(){this.g&&ji(this)};function ji(t){t.readyState=4,t.l=null,t.j=null,t.A=null,bi(t)}U.setRequestHeader=function(t,e){this.v.append(t,e)};U.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};U.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function bi(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ja.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var CC=ne.JSON.parse;function Ze(t){rt.call(this),this.headers=new Ts,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=py,this.K=this.L=!1}mt(Ze,rt);var py="",kC=/^https?$/i,DC=["POST","PUT"];U=Ze.prototype;U.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Tu.g(),this.C=this.u?Rf(this.u):Rf(Tu),this.g.onreadystatechange=ct(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Nf(this,i);return}t=n||"";const s=new Ts(this.headers);r&&eh(r,function(i,o){s.set(o,i)}),r=V1(s.T()),n=ne.FormData&&t instanceof ne.FormData,!(0<=Rv(DC,e))||r||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{vy(this),0<this.B&&((this.K=xC(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ct(this.pa,this)):this.A=Qc(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Nf(this,i)}};function xC(t){return ls&&H1()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function RC(t){return t.toLowerCase()=="content-type"}U.pa=function(){typeof $c!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ht(this,"timeout"),this.abort(8))};function Nf(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,my(t),za(t)}function my(t){t.D||(t.D=!0,ht(t,"complete"),ht(t,"error"))}U.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ht(this,"complete"),ht(this,"abort"),za(this))};U.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),za(this,!0)),Ze.Z.M.call(this)};U.Fa=function(){this.s||(this.F||this.v||this.l?gy(this):this.cb())};U.cb=function(){gy(this)};function gy(t){if(t.h&&typeof $c!="undefined"&&(!t.C[1]||_n(t)!=4||t.ba()!=2)){if(t.v&&_n(t)==4)Qc(t.Fa,0,t);else if(ht(t,"readystatechange"),_n(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var s=String(t.H).match(sy)[1]||null;if(!s&&ne.self&&ne.self.location){var i=ne.self.location.protocol;s=i.substr(0,i.length-1)}r=!kC.test(s?s.toLowerCase():"")}n=r}if(n)ht(t,"complete"),ht(t,"success");else{t.m=6;try{var o=2<_n(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",my(t)}}finally{za(t)}}}}function za(t,e){if(t.g){vy(t);const n=t.g,r=t.C[0]?$o:null;t.g=null,t.C=null,e||ht(t,"ready");try{n.onreadystatechange=r}catch{}}}function vy(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(ne.clearTimeout(t.A),t.A=null)}function _n(t){return t.g?t.g.readyState:0}U.ba=function(){try{return 2<_n(this)?this.g.status:-1}catch{return-1}};U.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};U.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),CC(e)}};function Lf(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case py:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}U.Da=function(){return this.m};U.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function OC(t){let e="";return Uc(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function ih(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=OC(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ze(t,e,n))}function Fs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function yy(t){this.za=0,this.l=[],this.h=new Ma,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Fs("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Fs("baseRetryDelayMs",5e3,t),this.$a=Fs("retryDelaySeedMs",1e4,t),this.Ya=Fs("forwardChannelMaxRetries",2,t),this.ra=Fs("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new ly(t&&t.concurrentRequestLimit),this.Ca=new TC,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}U=yy.prototype;U.ma=8;U.G=1;function oh(t){if(by(t),t.G==3){var e=t.V++,n=Sn(t.F);ze(n,"SID",t.J),ze(n,"RID",e),ze(n,"TYPE","terminate"),zi(t,n),e=new $i(t,t.h,e,void 0),e.K=2,e.v=Ua(Sn(n)),n=!1,ne.navigator&&ne.navigator.sendBeacon&&(n=ne.navigator.sendBeacon(e.v.toString(),"")),!n&&ne.Image&&(new Image().src=e.v,n=!0),n||(e.g=Cy(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Vi(e)}Ay(t)}U.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function qa(t){t.g&&(lh(t),t.g.cancel(),t.g=null)}function by(t){qa(t),t.u&&(ne.clearTimeout(t.u),t.u=null),Ko(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&ne.clearTimeout(t.m),t.m=null)}function Pl(t,e){t.l.push(new EC(t.Za++,e)),t.G==3&&Ha(t)}function Ha(t){uy(t.i)||t.m||(t.m=!0,Gc(t.Ha,t),t.C=0)}function PC(t,e){return cy(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=Fi(ct(t.Ha,t,e),Ty(t,t.C)),t.C++,!0)}U.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new $i(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=Pv(i),Nv(i,this.P)):i=this.P),this.o===null&&(s.H=i),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=_y(this,s,e),n=Sn(this.F),ze(n,"RID",t),ze(n,"CVER",22),this.D&&ze(n,"X-HTTP-Session-Id",this.D),zi(this,n),this.o&&i&&ih(n,this.o,i),nh(this.i,s),this.Ra&&ze(n,"TYPE","init"),this.ja?(ze(n,"$req",e),ze(n,"SID","null"),s.$=!0,Su(s,n,null)):Su(s,n,e),this.G=2}}else this.G==3&&(t?Mf(this,t):this.l.length==0||uy(this.i)||Mf(this))};function Mf(t,e){var n;e?n=e.m:n=t.V++;const r=Sn(t.F);ze(r,"SID",t.J),ze(r,"RID",n),ze(r,"AID",t.U),zi(t,r),t.o&&t.s&&ih(r,t.o,t.s),n=new $i(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=_y(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),nh(t.i,n),Su(n,r,e)}function zi(t,e){t.j&&eh({},function(n,r){ze(e,r,n)})}function _y(t,e,n){n=Math.min(t.l.length,n);var r=t.j?ct(t.j.Oa,t.j,t):null;e:{var s=t.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let l=0;l<n;l++){let u=s[l].h;const c=s[l].g;if(u-=i,0>u)i=Math.max(0,s[l].h-100),a=!1;else try{AC(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function wy(t){t.g||t.u||(t.Y=1,Gc(t.Ga,t),t.A=0)}function ah(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=Fi(ct(t.Ga,t),Ty(t,t.A)),t.A++,!0)}U.Ga=function(){if(this.u=null,Ey(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Fi(ct(this.bb,this),t)}};U.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,St(10),qa(this),Ey(this))};function lh(t){t.B!=null&&(ne.clearTimeout(t.B),t.B=null)}function Ey(t){t.g=new $i(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=Sn(t.oa);ze(e,"RID","rpc"),ze(e,"SID",t.J),ze(e,"CI",t.N?"0":"1"),ze(e,"AID",t.U),zi(t,e),ze(e,"TYPE","xmlhttp"),t.o&&t.s&&ih(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Ua(Sn(e)),n.s=null,n.U=!0,ey(n,t)}U.ab=function(){this.v!=null&&(this.v=null,qa(this),ah(this),St(19))};function Ko(t){t.v!=null&&(ne.clearTimeout(t.v),t.v=null)}function Iy(t,e){var n=null;if(t.g==e){Ko(t),lh(t),t.g=null;var r=2}else if(ku(t.i,e))n=e.D,hy(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;r=Fa(),ht(r,new Qv(r,n,e,s)),Ha(t)}else wy(t);else if(s=e.o,s==3||s==0&&0<t.I||!(r==1&&PC(t,e)||r==2&&ah(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:hr(t,5);break;case 4:hr(t,10);break;case 3:hr(t,6);break;default:hr(t,2)}}}function Ty(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function hr(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=ct(t.jb,t);n||(n=new Er("//www.google.com/images/cleardot.gif"),ne.location&&ne.location.protocol=="http"||zo(n,"https"),Ua(n)),SC(n.toString(),r)}else St(2);t.G=0,t.j&&t.j.va(e),Ay(t),by(t)}U.jb=function(t){t?(this.h.info("Successfully pinged google.com"),St(2)):(this.h.info("Failed to ping google.com"),St(1))};function Ay(t){t.G=0,t.I=-1,t.j&&((dy(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Vc(t.l),t.l.length=0),t.j.ua())}function Sy(t,e,n){let r=pC(n);if(r.i!="")e&&qo(r,e+"."+r.i),Ho(r,r.m);else{const s=ne.location;r=mC(s.protocol,e?e+"."+s.hostname:s.hostname,+s.port,n)}return t.aa&&Uc(t.aa,function(s,i){ze(r,i,s)}),e=t.D,n=t.sa,e&&n&&ze(r,e,n),ze(r,"VER",t.ma),zi(t,r),r}function Cy(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Ze(new Ui({ib:!0})):new Ze(t.qa),e.L=t.H,e}function ky(){}U=ky.prototype;U.xa=function(){};U.wa=function(){};U.va=function(){};U.ua=function(){};U.Oa=function(){};function Wo(){if(ls&&!(10<=Number(K1)))throw Error("Environmental error: no available transport.")}Wo.prototype.g=function(t,e){return new $t(t,e)};function $t(t,e){rt.call(this),this.g=new yy(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Vo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Vo(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ss(this)}mt($t,rt);$t.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Gc(ct(t.hb,t,e))),St(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Sy(t,null,t.W),Ha(t)};$t.prototype.close=function(){oh(this.g)};$t.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,Pl(this.g,e)}else this.v?(e={},e.__data__=Wc(t),Pl(this.g,e)):Pl(this.g,t)};$t.prototype.M=function(){this.g.j=null,delete this.j,oh(this.g),delete this.g,$t.Z.M.call(this)};function Dy(t){Zc.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}mt(Dy,Zc);function xy(){Jc.call(this),this.status=1}mt(xy,Jc);function Ss(t){this.g=t}mt(Ss,ky);Ss.prototype.xa=function(){ht(this.g,"a")};Ss.prototype.wa=function(t){ht(this.g,new Dy(t))};Ss.prototype.va=function(t){ht(this.g,new xy(t))};Ss.prototype.ua=function(){ht(this.g,"b")};Wo.prototype.createWebChannel=Wo.prototype.g;$t.prototype.send=$t.prototype.u;$t.prototype.open=$t.prototype.m;$t.prototype.close=$t.prototype.close;Ba.NO_ERROR=0;Ba.TIMEOUT=8;Ba.HTTP_ERROR=6;Yv.COMPLETE="complete";Zv.EventType=Bi;Bi.OPEN="a";Bi.CLOSE="b";Bi.ERROR="c";Bi.MESSAGE="d";rt.prototype.listen=rt.prototype.N;Ze.prototype.listenOnce=Ze.prototype.O;Ze.prototype.getLastError=Ze.prototype.La;Ze.prototype.getLastErrorCode=Ze.prototype.Da;Ze.prototype.getStatus=Ze.prototype.ba;Ze.prototype.getResponseJson=Ze.prototype.Qa;Ze.prototype.getResponseText=Ze.prototype.ga;Ze.prototype.send=Ze.prototype.ea;var NC=function(){return new Wo},LC=function(){return Fa()},Nl=Ba,MC=Yv,FC=Nr,Ff={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},BC=Ui,lo=Zv,$C=Ze;const Bf="@firebase/firestore";/**
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
 */class kt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}kt.UNAUTHENTICATED=new kt(null),kt.GOOGLE_CREDENTIALS=new kt("google-credentials-uid"),kt.FIRST_PARTY=new kt("first-party-uid"),kt.MOCK_USER=new kt("mock-user");/**
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
 */let Cs="9.6.11";/**
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
 */const Ir=new Ta("@firebase/firestore");function $f(){return Ir.logLevel}function K(t,...e){if(Ir.logLevel<=Ee.DEBUG){const n=e.map(uh);Ir.debug(`Firestore (${Cs}): ${t}`,...n)}}function Gn(t,...e){if(Ir.logLevel<=Ee.ERROR){const n=e.map(uh);Ir.error(`Firestore (${Cs}): ${t}`,...n)}}function Vf(t,...e){if(Ir.logLevel<=Ee.WARN){const n=e.map(uh);Ir.warn(`Firestore (${Cs}): ${t}`,...n)}}function uh(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function ie(t="Unexpected state"){const e=`FIRESTORE (${Cs}) INTERNAL ASSERTION FAILED: `+t;throw Gn(e),new Error(e)}function Fe(t,e){t||ie()}function ue(t,e){return t}/**
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
 */class VC{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class UC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(kt.UNAUTHENTICATED))}shutdown(){}}class jC{constructor(e){this.t=e,this.currentUser=kt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new vr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new vr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{K("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(K("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new vr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(K("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Fe(typeof r.accessToken=="string"),new VC(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Fe(e===null||typeof e=="string"),new kt(e)}}class zC{constructor(e,n,r){this.type="FirstParty",this.user=kt.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const s=e.auth.getAuthHeaderValueForFirstParty([]);s&&this.headers.set("Authorization",s),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class qC{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new zC(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(kt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class HC{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class KC{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const r=i=>{i.error!=null&&K("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.p;return this.p=i.token,K("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{K("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.g.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.g.getImmediate({optional:!0});i?s(i):K("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Fe(typeof n.token=="string"),this.p=n.token,new HC(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */class ch{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.I(r),this.T=r=>n.writeSequenceNumber(r))}I(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}/**
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
 */function WC(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */ch.A=-1;class Ry{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=WC(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Ie(t,e){return t<e?-1:t>e?1:0}function us(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class Et{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new J(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new J(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new J(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new J(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Et.fromMillis(Date.now())}static fromDate(e){return Et.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Et(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ie(this.nanoseconds,e.nanoseconds):Ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class de{constructor(e){this.timestamp=e}static fromTimestamp(e){return new de(e)}static min(){return new de(new Et(0,0))}static max(){return new de(new Et(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */function Uf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ks(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Oy(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class _i{constructor(e,n,r){n===void 0?n=0:n>e.length&&ie(),r===void 0?r=e.length-n:r>e.length-n&&ie(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return _i.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof _i?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class qe extends _i{construct(e,n,r){return new qe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new J(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new qe(n)}static emptyPath(){return new qe([])}}const GC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Dt extends _i{construct(e,n,r){return new Dt(e,n,r)}static isValidIdentifier(e){return GC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Dt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Dt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new J(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new J(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new J(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new J(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Dt(n)}static emptyPath(){return new Dt([])}}/**
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
 */class Du{constructor(e){this.fields=e,e.sort(Dt.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return us(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class pt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new pt(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new pt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}pt.EMPTY_BYTE_STRING=new pt("");const XC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xn(t){if(Fe(!!t),typeof t=="string"){let e=0;const n=XC.exec(t);if(Fe(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Qe(t.seconds),nanos:Qe(t.nanos)}}function Qe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function cs(t){return typeof t=="string"?pt.fromBase64String(t):pt.fromUint8Array(t)}/**
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
 */function Py(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ny(t){const e=t.mapValue.fields.__previous_value__;return Py(e)?Ny(e):e}function wi(t){const e=Xn(t.mapValue.fields.__local_write_time__.timestampValue);return new Et(e.seconds,e.nanos)}/**
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
 */class QC{constructor(e,n,r,s,i,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class hs{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new hs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof hs&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function Ds(t){return t==null}function Go(t){return t===0&&1/t==-1/0}function YC(t){return typeof t=="number"&&Number.isInteger(t)&&!Go(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class Y{constructor(e){this.path=e}static fromPath(e){return new Y(qe.fromString(e))}static fromName(e){return new Y(qe.fromString(e).popFirst(5))}static empty(){return new Y(qe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&qe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return qe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Y(new qe(e.slice()))}}function Tr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Py(t)?4:ZC(t)?9:10:ie()}function dn(t,e){if(t===e)return!0;const n=Tr(t);if(n!==Tr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return wi(t).isEqual(wi(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=Xn(r.timestampValue),o=Xn(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return cs(r.bytesValue).isEqual(cs(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return Qe(r.geoPointValue.latitude)===Qe(s.geoPointValue.latitude)&&Qe(r.geoPointValue.longitude)===Qe(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return Qe(r.integerValue)===Qe(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=Qe(r.doubleValue),o=Qe(s.doubleValue);return i===o?Go(i)===Go(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return us(t.arrayValue.values||[],e.arrayValue.values||[],dn);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(Uf(i)!==Uf(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!dn(i[a],o[a])))return!1;return!0}(t,e);default:return ie()}}function Ei(t,e){return(t.values||[]).find(n=>dn(n,e))!==void 0}function ds(t,e){if(t===e)return 0;const n=Tr(t),r=Tr(e);if(n!==r)return Ie(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ie(t.booleanValue,e.booleanValue);case 2:return function(s,i){const o=Qe(s.integerValue||s.doubleValue),a=Qe(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return jf(t.timestampValue,e.timestampValue);case 4:return jf(wi(t),wi(e));case 5:return Ie(t.stringValue,e.stringValue);case 6:return function(s,i){const o=cs(s),a=cs(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=Ie(o[l],a[l]);if(u!==0)return u}return Ie(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,i){const o=Ie(Qe(s.latitude),Qe(i.latitude));return o!==0?o:Ie(Qe(s.longitude),Qe(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=ds(o[l],a[l]);if(u)return u}return Ie(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,i){const o=s.fields||{},a=Object.keys(o),l=i.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=Ie(a[c],u[c]);if(h!==0)return h;const d=ds(o[a[c]],l[u[c]]);if(d!==0)return d}return Ie(a.length,u.length)}(t.mapValue,e.mapValue);default:throw ie()}}function jf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ie(t,e);const n=Xn(t),r=Xn(e),s=Ie(n.seconds,r.seconds);return s!==0?s:Ie(n.nanos,r.nanos)}function Jr(t){return xu(t)}function xu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const s=Xn(r);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?cs(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Y.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let s="[",i=!0;for(const o of r.values||[])i?i=!1:s+=",",s+=xu(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(r){const s=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const a of s)o?o=!1:i+=",",i+=`${a}:${xu(r.fields[a])}`;return i+"}"}(t.mapValue):ie();var e,n}function Ru(t){return!!t&&"integerValue"in t}function hh(t){return!!t&&"arrayValue"in t}function zf(t){return!!t&&"nullValue"in t}function qf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function vo(t){return!!t&&"mapValue"in t}function Js(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ks(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Js(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Js(t.arrayValue.values[n]);return e}return Object.assign({},t)}function ZC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Yt{constructor(e){this.value=e}static empty(){return new Yt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!vo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Js(n)}setAll(e){let n=Dt.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Js(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());vo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return dn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];vo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ks(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Yt(Js(this.value))}}function Ly(t){const e=[];return ks(t.fields,(n,r)=>{const s=new Dt([n]);if(vo(r)){const i=Ly(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Du(e)}/**
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
 */class vt{constructor(e,n,r,s,i,o){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.data=i,this.documentState=o}static newInvalidDocument(e){return new vt(e,0,de.min(),de.min(),Yt.empty(),0)}static newFoundDocument(e,n,r){return new vt(e,1,n,de.min(),r,0)}static newNoDocument(e,n){return new vt(e,2,n,de.min(),Yt.empty(),0)}static newUnknownDocument(e,n){return new vt(e,3,n,de.min(),Yt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Yt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Yt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof vt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new vt(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}function JC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=de.fromTimestamp(r===1e9?new Et(n+1,0):new Et(n,r));return new fs(s,Y.empty(),e)}function ek(t){return new fs(t.readTime,t.key,-1)}class fs{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new fs(de.min(),Y.empty(),-1)}static max(){return new fs(de.max(),Y.empty(),-1)}}function tk(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Y.comparator(t.documentKey,e.documentKey),n!==0?n:Ie(t.largestBatchId,e.largestBatchId))}/**
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
 */class nk{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.P=null}}function Hf(t,e=null,n=[],r=[],s=null,i=null,o=null){return new nk(t,e,n,r,s,i,o)}function dh(t){const e=ue(t);if(e.P===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(s=r).field.canonicalString()+s.op.toString()+Jr(s.value);var s}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Ds(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Jr(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Jr(r)).join(",")),e.P=n}return e.P}function rk(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${Jr(r.value)}`;var r}).join(", ")}]`),Ds(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Jr(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Jr(n)).join(",")),`Target(${e})`}function fh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<t.orderBy.length;s++)if(!hk(t.orderBy[s],e.orderBy[s]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],r=e.filters[s],n.op!==r.op||!n.field.isEqual(r.field)||!dn(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Wf(t.startAt,e.startAt)&&Wf(t.endAt,e.endAt)}function Ou(t){return Y.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class xt extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.V(e,n,r):new sk(e,n,r):n==="array-contains"?new ak(e,r):n==="in"?new lk(e,r):n==="not-in"?new uk(e,r):n==="array-contains-any"?new ck(e,r):new xt(e,n,r)}static V(e,n,r){return n==="in"?new ik(e,r):new ok(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.v(ds(n,this.value)):n!==null&&Tr(this.value)===Tr(n)&&this.v(ds(n,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ie()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class sk extends xt{constructor(e,n,r){super(e,n,r),this.key=Y.fromName(r.referenceValue)}matches(e){const n=Y.comparator(e.key,this.key);return this.v(n)}}class ik extends xt{constructor(e,n){super(e,"in",n),this.keys=My("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class ok extends xt{constructor(e,n){super(e,"not-in",n),this.keys=My("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function My(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Y.fromName(r.referenceValue))}class ak extends xt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return hh(n)&&Ei(n.arrayValue,this.value)}}class lk extends xt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ei(this.value.arrayValue,n)}}class uk extends xt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ei(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ei(this.value.arrayValue,n)}}class ck extends xt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!hh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ei(this.value.arrayValue,r))}}class Xo{constructor(e,n){this.position=e,this.inclusive=n}}class ei{constructor(e,n="asc"){this.field=e,this.dir=n}}function hk(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Kf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=Y.comparator(Y.fromName(o.referenceValue),n.key):r=ds(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Wf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!dn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ka{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.D=null,this.C=null,this.startAt,this.endAt}}function dk(t,e,n,r,s,i,o,a){return new Ka(t,e,n,r,s,i,o,a)}function ph(t){return new Ka(t)}function yo(t){return!Ds(t.limit)&&t.limitType==="F"}function Qo(t){return!Ds(t.limit)&&t.limitType==="L"}function fk(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function pk(t){for(const e of t.filters)if(e.S())return e.field;return null}function mk(t){return t.collectionGroup!==null}function Ii(t){const e=ue(t);if(e.D===null){e.D=[];const n=pk(e),r=fk(e);if(n!==null&&r===null)n.isKeyField()||e.D.push(new ei(n)),e.D.push(new ei(Dt.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.D.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new ei(Dt.keyField(),i))}}}return e.D}function Ar(t){const e=ue(t);if(!e.C)if(e.limitType==="F")e.C=Hf(e.path,e.collectionGroup,Ii(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Ii(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new ei(i.field,o))}const r=e.endAt?new Xo(e.endAt.position,!e.endAt.inclusive):null,s=e.startAt?new Xo(e.startAt.position,!e.startAt.inclusive):null;e.C=Hf(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e.C}function gk(t,e,n){return new Ka(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Wa(t,e){return fh(Ar(t),Ar(e))&&t.limitType===e.limitType}function Fy(t){return`${dh(Ar(t))}|lt:${t.limitType}`}function Pu(t){return`Query(target=${rk(Ar(t))}; limitType=${t.limitType})`}function mh(t,e){return e.isFoundDocument()&&function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):Y.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,r){for(const s of n.explicitOrderBy)if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(s,i,o){const a=Kf(s,i,o);return s.inclusive?a<=0:a<0}(n.startAt,Ii(n),r)||n.endAt&&!function(s,i,o){const a=Kf(s,i,o);return s.inclusive?a>=0:a>0}(n.endAt,Ii(n),r))}(t,e)}function vk(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function By(t){return(e,n)=>{let r=!1;for(const s of Ii(t)){const i=yk(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function yk(t,e,n){const r=t.field.isKeyField()?Y.comparator(e.key,n.key):function(s,i,o){const a=i.data.field(s),l=o.data.field(s);return a!==null&&l!==null?ds(a,l):ie()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ie()}}/**
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
 */function $y(t,e){if(t.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Go(e)?"-0":e}}function Vy(t){return{integerValue:""+t}}function bk(t,e){return YC(e)?Vy(e):$y(t,e)}/**
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
 */class Ga{constructor(){this._=void 0}}function _k(t,e,n){return t instanceof Yo?function(r,s){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&(i.fields.__previous_value__=s),{mapValue:i}}(n,e):t instanceof Ti?jy(t,e):t instanceof Ai?zy(t,e):function(r,s){const i=Uy(r,s),o=Gf(i)+Gf(r.k);return Ru(i)&&Ru(r.k)?Vy(o):$y(r.M,o)}(t,e)}function wk(t,e,n){return t instanceof Ti?jy(t,e):t instanceof Ai?zy(t,e):n}function Uy(t,e){return t instanceof Zo?Ru(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Yo extends Ga{}class Ti extends Ga{constructor(e){super(),this.elements=e}}function jy(t,e){const n=qy(e);for(const r of t.elements)n.some(s=>dn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Ai extends Ga{constructor(e){super(),this.elements=e}}function zy(t,e){let n=qy(e);for(const r of t.elements)n=n.filter(s=>!dn(s,r));return{arrayValue:{values:n}}}class Zo extends Ga{constructor(e,n){super(),this.M=e,this.k=n}}function Gf(t){return Qe(t.integerValue||t.doubleValue)}function qy(t){return hh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Ek(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Ti&&r instanceof Ti||n instanceof Ai&&r instanceof Ai?us(n.elements,r.elements,dn):n instanceof Zo&&r instanceof Zo?dn(n.k,r.k):n instanceof Yo&&r instanceof Yo}(t.transform,e.transform)}class Ik{constructor(e,n){this.version=e,this.transformResults=n}}class es{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new es}static exists(e){return new es(void 0,e)}static updateTime(e){return new es(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function bo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Xa{}function Tk(t,e,n){t instanceof Qa?function(r,s,i){const o=r.value.clone(),a=Yf(r.fieldTransforms,s,i.transformResults);o.setAll(a),s.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof qi?function(r,s,i){if(!bo(r.precondition,s))return void s.convertToUnknownDocument(i.version);const o=Yf(r.fieldTransforms,s,i.transformResults),a=s.data;a.setAll(Hy(r)),a.setAll(o),s.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(r,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Nu(t,e,n){t instanceof Qa?function(r,s,i){if(!bo(r.precondition,s))return;const o=r.value.clone(),a=Zf(r.fieldTransforms,i,s);o.setAll(a),s.convertToFoundDocument(Qf(s),o).setHasLocalMutations()}(t,e,n):t instanceof qi?function(r,s,i){if(!bo(r.precondition,s))return;const o=Zf(r.fieldTransforms,i,s),a=s.data;a.setAll(Hy(r)),a.setAll(o),s.convertToFoundDocument(Qf(s),a).setHasLocalMutations()}(t,e,n):function(r,s){bo(r.precondition,s)&&s.convertToNoDocument(de.min())}(t,e)}function Ak(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Uy(r.transform,s||null);i!=null&&(n==null&&(n=Yt.empty()),n.set(r.field,i))}return n||null}function Xf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&us(n,r,(s,i)=>Ek(s,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function Qf(t){return t.isFoundDocument()?t.version:de.min()}class Qa extends Xa{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}}class qi extends Xa{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}}function Hy(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Yf(t,e,n){const r=new Map;Fe(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,wk(o,a,n[s]))}return r}function Zf(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,_k(i,o,e))}return r}class Sk extends Xa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class Ck extends Xa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
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
 */class kk{constructor(e){this.count=e}}/**
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
 */var Xe,ye;function Dk(t){switch(t){default:return ie();case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0}}function Ky(t){if(t===void 0)return Gn("GRPC error has no .code"),D.UNKNOWN;switch(t){case Xe.OK:return D.OK;case Xe.CANCELLED:return D.CANCELLED;case Xe.UNKNOWN:return D.UNKNOWN;case Xe.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case Xe.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case Xe.INTERNAL:return D.INTERNAL;case Xe.UNAVAILABLE:return D.UNAVAILABLE;case Xe.UNAUTHENTICATED:return D.UNAUTHENTICATED;case Xe.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case Xe.NOT_FOUND:return D.NOT_FOUND;case Xe.ALREADY_EXISTS:return D.ALREADY_EXISTS;case Xe.PERMISSION_DENIED:return D.PERMISSION_DENIED;case Xe.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case Xe.ABORTED:return D.ABORTED;case Xe.OUT_OF_RANGE:return D.OUT_OF_RANGE;case Xe.UNIMPLEMENTED:return D.UNIMPLEMENTED;case Xe.DATA_LOSS:return D.DATA_LOSS;default:return ie()}}(ye=Xe||(Xe={}))[ye.OK=0]="OK",ye[ye.CANCELLED=1]="CANCELLED",ye[ye.UNKNOWN=2]="UNKNOWN",ye[ye.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ye[ye.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ye[ye.NOT_FOUND=5]="NOT_FOUND",ye[ye.ALREADY_EXISTS=6]="ALREADY_EXISTS",ye[ye.PERMISSION_DENIED=7]="PERMISSION_DENIED",ye[ye.UNAUTHENTICATED=16]="UNAUTHENTICATED",ye[ye.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ye[ye.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ye[ye.ABORTED=10]="ABORTED",ye[ye.OUT_OF_RANGE=11]="OUT_OF_RANGE",ye[ye.UNIMPLEMENTED=12]="UNIMPLEMENTED",ye[ye.INTERNAL=13]="INTERNAL",ye[ye.UNAVAILABLE=14]="UNAVAILABLE",ye[ye.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class xs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ks(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Oy(this.inner)}size(){return this.innerSize}}/**
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
 */class st{constructor(e,n){this.comparator=e,this.root=n||at.EMPTY}insert(e,n){return new st(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,at.BLACK,null,null))}remove(e){return new st(this.comparator,this.root.remove(e,this.comparator).copy(null,null,at.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new uo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new uo(this.root,e,this.comparator,!1)}getReverseIterator(){return new uo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new uo(this.root,e,this.comparator,!0)}}class uo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class at{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r!=null?r:at.RED,this.left=s!=null?s:at.EMPTY,this.right=i!=null?i:at.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new at(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,s!=null?s:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return at.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ie();const e=this.left.check();if(e!==this.right.check())throw ie();return e+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw ie()}get value(){throw ie()}get color(){throw ie()}get left(){throw ie()}get right(){throw ie()}copy(t,e,n,r,s){return this}insert(t,e,n){return new at(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class dt{constructor(e){this.comparator=e,this.data=new st(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Jf(this.data.getIterator())}getIteratorFrom(e){return new Jf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof dt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new dt(this.comparator);return n.data=e,n}}class Jf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */const xk=new st(Y.comparator);function Sr(){return xk}const Rk=new st(Y.comparator);function Lu(){return Rk}function Ll(){return new xs(t=>t.toString(),(t,e)=>t.isEqual(e))}const Ok=new st(Y.comparator),Pk=new dt(Y.comparator);function $e(...t){let e=Pk;for(const n of t)e=e.add(n);return e}const Nk=new dt(Ie);function Wy(){return Nk}/**
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
 */class Ya{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,Hi.createSynthesizedTargetChangeForCurrentChange(e,n)),new Ya(de.min(),r,Wy(),Sr(),$e())}}class Hi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Hi(pt.EMPTY_BYTE_STRING,n,$e(),$e(),$e())}}/**
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
 */class _o{constructor(e,n,r,s){this.O=e,this.removedTargetIds=n,this.key=r,this.F=s}}class Gy{constructor(e,n){this.targetId=e,this.$=n}}class Xy{constructor(e,n,r=pt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class ep{constructor(){this.B=0,this.L=np(),this.U=pt.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return this.B!==0}get j(){return this.K}W(e){e.approximateByteSize()>0&&(this.K=!0,this.U=e)}H(){let e=$e(),n=$e(),r=$e();return this.L.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ie()}}),new Hi(this.U,this.q,e,n,r)}J(){this.K=!1,this.L=np()}Y(e,n){this.K=!0,this.L=this.L.insert(e,n)}X(e){this.K=!0,this.L=this.L.remove(e)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class Lk{constructor(e){this.nt=e,this.st=new Map,this.it=Sr(),this.rt=tp(),this.ot=new dt(Ie)}ut(e){for(const n of e.O)e.F&&e.F.isFoundDocument()?this.at(n,e.F):this.ct(n,e.key,e.F);for(const n of e.removedTargetIds)this.ct(n,e.key,e.F)}ht(e){this.forEachTarget(e,n=>{const r=this.lt(n);switch(e.state){case 0:this.ft(n)&&r.W(e.resumeToken);break;case 1:r.tt(),r.G||r.J(),r.W(e.resumeToken);break;case 2:r.tt(),r.G||this.removeTarget(n);break;case 3:this.ft(n)&&(r.et(),r.W(e.resumeToken));break;case 4:this.ft(n)&&(this.dt(n),r.W(e.resumeToken));break;default:ie()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.st.forEach((r,s)=>{this.ft(s)&&n(s)})}_t(e){const n=e.targetId,r=e.$.count,s=this.wt(n);if(s){const i=s.target;if(Ou(i))if(r===0){const o=new Y(i.path);this.ct(n,o,vt.newNoDocument(o,de.min()))}else Fe(r===1);else this.gt(n)!==r&&(this.dt(n),this.ot=this.ot.add(n))}}yt(e){const n=new Map;this.st.forEach((i,o)=>{const a=this.wt(o);if(a){if(i.current&&Ou(a.target)){const l=new Y(a.target.path);this.it.get(l)!==null||this.It(o,l)||this.ct(o,l,vt.newNoDocument(l,e))}i.j&&(n.set(o,i.H()),i.J())}});let r=$e();this.rt.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.wt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(i))}),this.it.forEach((i,o)=>o.setReadTime(e));const s=new Ya(e,n,this.ot,this.it,r);return this.it=Sr(),this.rt=tp(),this.ot=new dt(Ie),s}at(e,n){if(!this.ft(e))return;const r=this.It(e,n.key)?2:0;this.lt(e).Y(n.key,r),this.it=this.it.insert(n.key,n),this.rt=this.rt.insert(n.key,this.Tt(n.key).add(e))}ct(e,n,r){if(!this.ft(e))return;const s=this.lt(e);this.It(e,n)?s.Y(n,1):s.X(n),this.rt=this.rt.insert(n,this.Tt(n).delete(e)),r&&(this.it=this.it.insert(n,r))}removeTarget(e){this.st.delete(e)}gt(e){const n=this.lt(e).H();return this.nt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Z(e){this.lt(e).Z()}lt(e){let n=this.st.get(e);return n||(n=new ep,this.st.set(e,n)),n}Tt(e){let n=this.rt.get(e);return n||(n=new dt(Ie),this.rt=this.rt.insert(e,n)),n}ft(e){const n=this.wt(e)!==null;return n||K("WatchChangeAggregator","Detected inactive target",e),n}wt(e){const n=this.st.get(e);return n&&n.G?null:this.nt.Et(e)}dt(e){this.st.set(e,new ep),this.nt.getRemoteKeysForTarget(e).forEach(n=>{this.ct(e,n,null)})}It(e,n){return this.nt.getRemoteKeysForTarget(e).has(n)}}function tp(){return new st(Y.comparator)}function np(){return new st(Y.comparator)}/**
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
 */const Mk=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Fk=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Bk{constructor(e,n){this.databaseId=e,this.N=n}}function Jo(t,e){return t.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Qy(t,e){return t.N?e.toBase64():e.toUint8Array()}function $k(t,e){return Jo(t,e.toTimestamp())}function In(t){return Fe(!!t),de.fromTimestamp(function(e){const n=Xn(e);return new Et(n.seconds,n.nanos)}(t))}function gh(t,e){return function(n){return new qe(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Yy(t){const e=qe.fromString(t);return Fe(e0(e)),e}function Mu(t,e){return gh(t.databaseId,e.path)}function Ml(t,e){const n=Yy(e);if(n.get(1)!==t.databaseId.projectId)throw new J(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new J(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Y(Zy(n))}function Fu(t,e){return gh(t.databaseId,e)}function Vk(t){const e=Yy(t);return e.length===4?qe.emptyPath():Zy(e)}function Bu(t){return new qe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Zy(t){return Fe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function rp(t,e,n){return{name:Mu(t,e),fields:n.value.mapValue.fields}}function Uk(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:ie()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(l,u){return l.N?(Fe(u===void 0||typeof u=="string"),pt.fromBase64String(u||"")):(Fe(u===void 0||u instanceof Uint8Array),pt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?D.UNKNOWN:Ky(l.code);return new J(u,l.message||"")}(o);n=new Xy(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ml(t,r.document.name),i=In(r.document.updateTime),o=new Yt({mapValue:{fields:r.document.fields}}),a=vt.newFoundDocument(s,i,o),l=r.targetIds||[],u=r.removedTargetIds||[];n=new _o(l,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ml(t,r.document),i=r.readTime?In(r.readTime):de.min(),o=vt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new _o([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ml(t,r.document),i=r.removedTargetIds||[];n=new _o([],i,s,null)}else{if(!("filter"in e))return ie();{e.filter;const r=e.filter;r.targetId;const s=r.count||0,i=new kk(s),o=r.targetId;n=new Gy(o,i)}}return n}function jk(t,e){let n;if(e instanceof Qa)n={update:rp(t,e.key,e.value)};else if(e instanceof Sk)n={delete:Mu(t,e.key)};else if(e instanceof qi)n={update:rp(t,e.key,e.data),updateMask:Zk(e.fieldMask)};else{if(!(e instanceof Ck))return ie();n={verify:Mu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof Yo)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ti)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ai)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Zo)return{fieldPath:i.field.canonicalString(),increment:o.k};throw ie()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:$k(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ie()}(t,e.precondition)),n}function zk(t,e){return t&&t.length>0?(Fe(e!==void 0),t.map(n=>function(r,s){let i=r.updateTime?In(r.updateTime):In(s);return i.isEqual(de.min())&&(i=In(s)),new Ik(i,r.transformResults||[])}(n,e))):[]}function qk(t,e){return{documents:[Fu(t,e.path)]}}function Hk(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Fu(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Fu(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(l){if(l.length===0)return;const u=l.map(c=>function(h){if(h.op==="=="){if(qf(h.value))return{unaryFilter:{field:jr(h.field),op:"IS_NAN"}};if(zf(h.value))return{unaryFilter:{field:jr(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(qf(h.value))return{unaryFilter:{field:jr(h.field),op:"IS_NOT_NAN"}};if(zf(h.value))return{unaryFilter:{field:jr(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:jr(h.field),op:Xk(h.op),value:h.value}}}(c));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);s&&(n.structuredQuery.where=s);const i=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:jr(c.field),direction:Gk(c.dir)}}(u))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(l,u){return l.N||Ds(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function Kk(t){let e=Vk(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Fe(r===1);const c=n.from[0];c.allDescendants?s=c.collectionId:e=e.child(c.collectionId)}let i=[];n.where&&(i=Jy(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new ei(Gr(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,Ds(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,d=c.values||[];return new Xo(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new Xo(d,h)}(n.endAt)),dk(e,s,o,i,a,"F",l,u)}function Wk(t,e){const n=function(r,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return ie()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Jy(t){return t?t.unaryFilter!==void 0?[Yk(t)]:t.fieldFilter!==void 0?[Qk(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Jy(e)).reduce((e,n)=>e.concat(n)):ie():[]}function Gk(t){return Mk[t]}function Xk(t){return Fk[t]}function jr(t){return{fieldPath:t.canonicalString()}}function Gr(t){return Dt.fromServerFormat(t.fieldPath)}function Qk(t){return xt.create(Gr(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ie()}}(t.fieldFilter.op),t.fieldFilter.value)}function Yk(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Gr(t.unaryFilter.field);return xt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Gr(t.unaryFilter.field);return xt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Gr(t.unaryFilter.field);return xt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Gr(t.unaryFilter.field);return xt.create(s,"!=",{nullValue:"NULL_VALUE"});default:return ie()}}function Zk(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function e0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */const Jk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class eD{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ie(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(s=>s?L.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}}function Ki(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class tD{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Tk(i,e,r[s])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&Nu(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&Nu(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const r=e.get(n.key),s=r;this.applyToLocalView(s),r.isValidDocument()||s.convertToNoDocument(de.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),$e())}isEqual(e){return this.batchId===e.batchId&&us(this.mutations,e.mutations,(n,r)=>Xf(n,r))&&us(this.baseMutations,e.baseMutations,(n,r)=>Xf(n,r))}}class vh{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Fe(e.mutations.length===r.length);let s=Ok;const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new vh(e,n,r,s)}}/**
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
 */class nD{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class rD{constructor(e){this.Jt=e}}function sD(t){const e=Kk({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?gk(e,e.limit,"L"):e}/**
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
 */class iD{constructor(){this.qe=new oD}addToCollectionParentIndex(e,n){return this.qe.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.qe.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getFieldIndex(e,n){return L.resolve(null)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class oD{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new dt(qe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new dt(qe.comparator)).toArray()}}/**
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
 */class ps{constructor(e){this.mn=e}next(){return this.mn+=2,this.mn}static gn(){return new ps(0)}static yn(){return new ps(-1)}}/**
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
 */async function Wi(t){if(t.code!==D.FAILED_PRECONDITION||t.message!==Jk)throw t;K("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class aD{constructor(){this.changes=new xs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,vt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class lD{constructor(e,n,r){this.ds=e,this.Bs=n,this.indexManager=r}Ls(e,n){return this.Bs.getAllMutationBatchesAffectingDocumentKey(e,n).next(r=>this.Us(e,n,r))}Us(e,n,r){return this.ds.getEntry(e,n).next(s=>{for(const i of r)i.applyToLocalView(s);return s})}qs(e,n){e.forEach((r,s)=>{for(const i of n)i.applyToLocalView(s)})}Ks(e,n){return this.ds.getEntries(e,n).next(r=>this.Gs(e,r).next(()=>r))}Gs(e,n){return this.Bs.getAllMutationBatchesAffectingDocumentKeys(e,n).next(r=>this.qs(n,r))}Qs(e,n,r){return function(s){return Y.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.js(e,n.path):mk(n)?this.Ws(e,n,r):this.zs(e,n,r)}js(e,n){return this.Ls(e,new Y(n)).next(r=>{let s=Lu();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}Ws(e,n,r){const s=n.collectionGroup;let i=Lu();return this.indexManager.getCollectionParents(e,s).next(o=>L.forEach(o,a=>{const l=function(u,c){return new Ka(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(s));return this.zs(e,l,r).next(u=>{u.forEach((c,h)=>{i=i.insert(c,h)})})}).next(()=>i))}zs(e,n,r){let s;return this.ds.getAllFromCollection(e,n.path,r).next(i=>(s=i,this.Bs.getAllMutationBatchesAffectingQuery(e,n))).next(i=>{for(const o of i)for(const a of o.mutations){const l=a.key;let u=s.get(l);u==null&&(u=vt.newInvalidDocument(l),s=s.insert(l,u)),Nu(a,u,o.localWriteTime),u.isFoundDocument()||(s=s.remove(l))}}).next(()=>(s.forEach((i,o)=>{mh(n,o)||(s=s.remove(i))}),s))}}/**
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
 */class yh{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Hs=r,this.Js=s}static Ys(e,n){let r=$e(),s=$e();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new yh(e,n.fromCache,r,s)}}/**
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
 */class uD{Xs(e){this.Zs=e}Qs(e,n,r,s){return function(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}(n)||r.isEqual(de.min())?this.ti(e,n):this.Zs.Ks(e,s).next(i=>{const o=this.ei(n,i);return(yo(n)||Qo(n))&&this.ni(n.limitType,o,s,r)?this.ti(e,n):($f()<=Ee.DEBUG&&K("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Pu(n)),this.Zs.Qs(e,n,JC(r,-1)).next(a=>(o.forEach(l=>{a=a.insert(l.key,l)}),a)))})}ei(e,n){let r=new dt(By(e));return n.forEach((s,i)=>{mh(e,i)&&(r=r.add(i))}),r}ni(e,n,r,s){if(r.size!==n.size)return!0;const i=e==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ti(e,n){return $f()<=Ee.DEBUG&&K("QueryEngine","Using full collection scan to execute query:",Pu(n)),this.Zs.Qs(e,n,fs.min())}}/**
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
 */class cD{constructor(e,n,r,s){this.persistence=e,this.si=n,this.M=s,this.ii=new st(Ie),this.ri=new xs(i=>dh(i),fh),this.oi=new Map,this.ui=e.getRemoteDocumentCache(),this.fs=e.getTargetCache(),this._s=e.getBundleCache(),this.ai(r)}ai(e){this.indexManager=this.persistence.getIndexManager(e),this.Bs=this.persistence.getMutationQueue(e,this.indexManager),this.ci=new lD(this.ui,this.Bs,this.indexManager),this.ui.setIndexManager(this.indexManager),this.si.Xs(this.ci)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ii))}}function hD(t,e,n,r){return new cD(t,e,n,r)}async function t0(t,e){const n=ue(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.Bs.getAllMutationBatches(r).next(i=>(s=i,n.ai(e),n.Bs.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=$e();for(const u of s){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of i){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.ci.Ks(r,l).next(u=>({hi:u,removedBatchIds:o,addedBatchIds:a}))})})}function dD(t,e){const n=ue(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.ui.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let d=L.resolve();return h.forEach(f=>{d=d.next(()=>u.getEntry(a,f)).next(p=>{const g=l.docVersions.get(f);Fe(g!==null),p.version.compareTo(g)<0&&(c.applyToRemoteDocument(p,l),p.isValidDocument()&&(p.setReadTime(l.commitVersion),u.addEntry(p)))})}),d.next(()=>o.Bs.removeMutationBatch(a,c))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.Bs.performConsistencyCheck(r)).next(()=>n.ci.Ks(r,s))})}function n0(t){const e=ue(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.fs.getLastRemoteSnapshotVersion(n))}function fD(t,e){const n=ue(t),r=e.snapshotVersion;let s=n.ii;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ui.newChangeBuffer({trackRemovals:!0});s=n.ii;const a=[];e.targetChanges.forEach((u,c)=>{const h=s.get(c);if(!h)return;a.push(n.fs.removeMatchingKeys(i,u.removedDocuments,c).next(()=>n.fs.addMatchingKeys(i,u.addedDocuments,c)));let d=h.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(c)?d=d.withResumeToken(pt.EMPTY_BYTE_STRING,de.min()).withLastLimboFreeSnapshotVersion(de.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,r)),s=s.insert(c,d),function(f,p,g){return f.resumeToken.approximateByteSize()===0||p.snapshotVersion.toMicroseconds()-f.snapshotVersion.toMicroseconds()>=3e8?!0:g.addedDocuments.size+g.modifiedDocuments.size+g.removedDocuments.size>0}(h,d,u)&&a.push(n.fs.updateTargetData(i,d))});let l=Sr();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(pD(i,o,e.documentUpdates).next(u=>{l=u})),!r.isEqual(de.min())){const u=n.fs.getLastRemoteSnapshotVersion(i).next(c=>n.fs.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return L.waitFor(a).next(()=>o.apply(i)).next(()=>n.ci.Gs(i,l)).next(()=>l)}).then(i=>(n.ii=s,i))}function pD(t,e,n){let r=$e();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let i=Sr();return n.forEach((o,a)=>{const l=s.get(o);a.isNoDocument()&&a.version.isEqual(de.min())?(e.removeEntry(o,a.readTime),i=i.insert(o,a)):!l.isValidDocument()||a.version.compareTo(l.version)>0||a.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(a),i=i.insert(o,a)):K("LocalStore","Ignoring outdated watch update for ",o,". Current version:",l.version," Watch version:",a.version)}),i})}function mD(t,e){const n=ue(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.Bs.getNextMutationBatchAfterBatchId(r,e)))}function gD(t,e){const n=ue(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.fs.getTargetData(r,e).next(i=>i?(s=i,L.resolve(s)):n.fs.allocateTargetId(r).next(o=>(s=new yr(e,o,0,r.currentSequenceNumber),n.fs.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ii.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ii=n.ii.insert(r.targetId,r),n.ri.set(e,r.targetId)),r})}async function $u(t,e,n){const r=ue(t),s=r.ii.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ki(o))throw o;K("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ii=r.ii.remove(e),r.ri.delete(s.target)}function sp(t,e,n){const r=ue(t);let s=de.min(),i=$e();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=ue(a),h=c.ri.get(u);return h!==void 0?L.resolve(c.ii.get(h)):c.fs.getTargetData(l,u)}(r,o,Ar(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.fs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.si.Qs(o,e,n?s:de.min(),n?i:$e())).next(a=>(vD(r,vk(e),a),{documents:a,li:i})))}function vD(t,e,n){let r=de.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.oi.set(e,r)}/**
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
 */class yD{constructor(e){this.M=e,this.wi=new Map,this.mi=new Map}getBundleMetadata(e,n){return L.resolve(this.wi.get(n))}saveBundleMetadata(e,n){var r;return this.wi.set(n.id,{id:(r=n).id,version:r.version,createTime:In(r.createTime)}),L.resolve()}getNamedQuery(e,n){return L.resolve(this.mi.get(n))}saveNamedQuery(e,n){return this.mi.set(n.name,function(r){return{name:r.name,query:sD(r.bundledQuery),readTime:In(r.readTime)}}(n)),L.resolve()}}/**
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
 */class bD{constructor(){this.overlays=new st(Y.comparator),this.gi=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.Xt(e,n,i)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.gi.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.gi.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const s=Ll(),i=n.length+1,o=new Y(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return L.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new st((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=i.get(u.largestBatchId);c===null&&(c=Ll(),i=i.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Ll(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=s)););return L.resolve(a)}Xt(e,n,r){if(r===null)return;const s=this.overlays.get(r.key);if(s!==null){const o=this.gi.get(s.largestBatchId).delete(r.key);this.gi.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new nD(n,r));let i=this.gi.get(n);i===void 0&&(i=$e(),this.gi.set(n,i)),this.gi.set(n,i.add(r.key))}}/**
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
 */class bh{constructor(){this.yi=new dt(et.pi),this.Ii=new dt(et.Ti)}isEmpty(){return this.yi.isEmpty()}addReference(e,n){const r=new et(e,n);this.yi=this.yi.add(r),this.Ii=this.Ii.add(r)}Ei(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ai(new et(e,n))}Ri(e,n){e.forEach(r=>this.removeReference(r,n))}Pi(e){const n=new Y(new qe([])),r=new et(n,e),s=new et(n,e+1),i=[];return this.Ii.forEachInRange([r,s],o=>{this.Ai(o),i.push(o.key)}),i}bi(){this.yi.forEach(e=>this.Ai(e))}Ai(e){this.yi=this.yi.delete(e),this.Ii=this.Ii.delete(e)}Vi(e){const n=new Y(new qe([])),r=new et(n,e),s=new et(n,e+1);let i=$e();return this.Ii.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new et(e,0),r=this.yi.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class et{constructor(e,n){this.key=e,this.vi=n}static pi(e,n){return Y.comparator(e.key,n.key)||Ie(e.vi,n.vi)}static Ti(e,n){return Ie(e.vi,n.vi)||Y.comparator(e.key,n.key)}}/**
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
 */class _D{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.Bs=[],this.Si=1,this.Di=new dt(et.pi)}checkEmpty(e){return L.resolve(this.Bs.length===0)}addMutationBatch(e,n,r,s){const i=this.Si;this.Si++,this.Bs.length>0&&this.Bs[this.Bs.length-1];const o=new tD(i,n,r,s);this.Bs.push(o);for(const a of s)this.Di=this.Di.add(new et(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.Ci(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.xi(r),i=s<0?0:s;return L.resolve(this.Bs.length>i?this.Bs[i]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.Bs.length===0?-1:this.Si-1)}getAllMutationBatches(e){return L.resolve(this.Bs.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new et(n,0),s=new et(n,Number.POSITIVE_INFINITY),i=[];return this.Di.forEachInRange([r,s],o=>{const a=this.Ci(o.vi);i.push(a)}),L.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new dt(Ie);return n.forEach(s=>{const i=new et(s,0),o=new et(s,Number.POSITIVE_INFINITY);this.Di.forEachInRange([i,o],a=>{r=r.add(a.vi)})}),L.resolve(this.Ni(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;Y.isDocumentKey(i)||(i=i.child(""));const o=new et(new Y(i),0);let a=new dt(Ie);return this.Di.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(l.vi)),!0)},o),L.resolve(this.Ni(a))}Ni(e){const n=[];return e.forEach(r=>{const s=this.Ci(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Fe(this.ki(n.batchId,"removed")===0),this.Bs.shift();let r=this.Di;return L.forEach(n.mutations,s=>{const i=new et(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Di=r})}_n(e){}containsKey(e,n){const r=new et(n,0),s=this.Di.firstAfterOrEqual(r);return L.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.Bs.length,L.resolve()}ki(e,n){return this.xi(e)}xi(e){return this.Bs.length===0?0:e-this.Bs[0].batchId}Ci(e){const n=this.xi(e);return n<0||n>=this.Bs.length?null:this.Bs[n]}}/**
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
 */class wD{constructor(e){this.Mi=e,this.docs=new st(Y.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mi(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():vt.newInvalidDocument(n))}getEntries(e,n){let r=Sr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():vt.newInvalidDocument(s))}),L.resolve(r)}getAllFromCollection(e,n,r){let s=Sr();const i=new Y(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||tk(ek(l),r)<=0||(s=s.insert(l.key,l.mutableCopy()))}return L.resolve(s)}getAllFromCollectionGroup(e,n,r,s){ie()}Oi(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new ED(this)}getSize(e){return L.resolve(this.size)}}class ED extends aD{constructor(e){super(),this.Kn=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Kn.addEntry(e,s)):this.Kn.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.Kn.getEntry(e,n)}getAllFromCache(e,n){return this.Kn.getEntries(e,n)}}/**
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
 */class ID{constructor(e){this.persistence=e,this.Fi=new xs(n=>dh(n),fh),this.lastRemoteSnapshotVersion=de.min(),this.highestTargetId=0,this.$i=0,this.Bi=new bh,this.targetCount=0,this.Li=ps.gn()}forEachTarget(e,n){return this.Fi.forEach((r,s)=>n(s)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.$i)}allocateTargetId(e){return this.highestTargetId=this.Li.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.$i&&(this.$i=n),L.resolve()}Tn(e){this.Fi.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Li=new ps(n),this.highestTargetId=n),e.sequenceNumber>this.$i&&(this.$i=e.sequenceNumber)}addTargetData(e,n){return this.Tn(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.Tn(n),L.resolve()}removeTargetData(e,n){return this.Fi.delete(n.target),this.Bi.Pi(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Fi.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fi.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),L.waitFor(i).next(()=>s)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.Fi.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this.Bi.Ei(n,r),L.resolve()}removeMatchingKeys(e,n,r){this.Bi.Ri(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),L.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Bi.Pi(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Bi.Vi(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this.Bi.containsKey(n))}}/**
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
 */class TD{constructor(e,n){this.Ui={},this.overlays={},this.es=new ch(0),this.ns=!1,this.ns=!0,this.referenceDelegate=e(this),this.fs=new ID(this),this.indexManager=new iD,this.ds=function(r){return new wD(r)}(r=>this.referenceDelegate.qi(r)),this.M=new rD(n),this._s=new yD(this.M)}start(){return Promise.resolve()}shutdown(){return this.ns=!1,Promise.resolve()}get started(){return this.ns}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new bD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Ui[e.toKey()];return r||(r=new _D(n,this.referenceDelegate),this.Ui[e.toKey()]=r),r}getTargetCache(){return this.fs}getRemoteDocumentCache(){return this.ds}getBundleCache(){return this._s}runTransaction(e,n,r){K("MemoryPersistence","Starting transaction:",e);const s=new AD(this.es.next());return this.referenceDelegate.Ki(),r(s).next(i=>this.referenceDelegate.Gi(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Qi(e,n){return L.or(Object.values(this.Ui).map(r=>()=>r.containsKey(e,n)))}}class AD extends eD{constructor(e){super(),this.currentSequenceNumber=e}}class _h{constructor(e){this.persistence=e,this.ji=new bh,this.Wi=null}static zi(e){return new _h(e)}get Hi(){if(this.Wi)return this.Wi;throw ie()}addReference(e,n,r){return this.ji.addReference(r,n),this.Hi.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.ji.removeReference(r,n),this.Hi.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.Hi.add(n.toString()),L.resolve()}removeTarget(e,n){this.ji.Pi(n.targetId).forEach(s=>this.Hi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Hi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ki(){this.Wi=new Set}Gi(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.Hi,r=>{const s=Y.fromPath(r);return this.Ji(e,s).next(i=>{i||n.removeEntry(s,de.min())})}).next(()=>(this.Wi=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ji(e,n).next(r=>{r?this.Hi.delete(n.toString()):this.Hi.add(n.toString())})}qi(e){return 0}Ji(e,n){return L.or([()=>L.resolve(this.ji.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Qi(e,n)])}}class ip{constructor(){this.activeTargetIds=Wy()}Zi(e){this.activeTargetIds=this.activeTargetIds.add(e)}tr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class SD{constructor(){this.$r=new ip,this.Br={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.$r.Zi(e),this.Br[e]||"not-current"}updateQueryState(e,n,r){this.Br[e]=n}removeLocalQueryTarget(e){this.$r.tr(e)}isLocalQueryTarget(e){return this.$r.activeTargetIds.has(e)}clearQueryState(e){delete this.Br[e]}getAllActiveQueryTargets(){return this.$r.activeTargetIds}isActiveQueryTarget(e){return this.$r.activeTargetIds.has(e)}start(){return this.$r=new ip,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class CD{Lr(e){}shutdown(){}}/**
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
 */class op{constructor(){this.Ur=()=>this.qr(),this.Kr=()=>this.Gr(),this.Qr=[],this.jr()}Lr(e){this.Qr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Kr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Kr)}qr(){K("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Qr)e(0)}Gr(){K("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Qr)e(1)}static vt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const kD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class DD{constructor(e){this.Wr=e.Wr,this.zr=e.zr}Hr(e){this.Jr=e}Yr(e){this.Xr=e}onMessage(e){this.Zr=e}close(){this.zr()}send(e){this.Wr(e)}eo(){this.Jr()}no(e){this.Xr(e)}so(e){this.Zr(e)}}/**
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
 */class xD extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.io=n+"://"+e.host,this.ro="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}oo(e,n,r,s,i){const o=this.uo(e,n);K("RestConnection","Sending: ",o,r);const a={};return this.ao(a,s,i),this.co(e,o,a,r).then(l=>(K("RestConnection","Received: ",l),l),l=>{throw Vf("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}ho(e,n,r,s,i){return this.oo(e,n,r,s,i)}ao(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Cs,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}uo(e,n){const r=kD[e];return`${this.io}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,n,r,s){return new Promise((i,o)=>{const a=new $C;a.listenOnce(MC.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Nl.NO_ERROR:const u=a.getResponseJson();K("Connection","XHR received:",JSON.stringify(u)),i(u);break;case Nl.TIMEOUT:K("Connection",'RPC "'+e+'" timed out'),o(new J(D.DEADLINE_EXCEEDED,"Request time out"));break;case Nl.HTTP_ERROR:const c=a.getStatus();if(K("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(f){const p=f.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(p)>=0?p:D.UNKNOWN}(h.status);o(new J(d,h.message))}else o(new J(D.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new J(D.UNAVAILABLE,"Connection failed."));break;default:ie()}}finally{K("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(s);a.send(n,"POST",l,r,15)})}lo(e,n,r){const s=[this.io,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=NC(),o=LC(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new BC({})),this.ao(a.initMessageHeaders,n,r),bg()||_g()||HI()||wg()||KI()||bc()||(a.httpHeadersOverwriteParam="$httpHeaders");const l=s.join("");K("Connection","Creating WebChannel: "+l,a);const u=i.createWebChannel(l,a);let c=!1,h=!1;const d=new DD({Wr:p=>{h?K("Connection","Not sending because WebChannel is closed:",p):(c||(K("Connection","Opening WebChannel transport."),u.open(),c=!0),K("Connection","WebChannel sending:",p),u.send(p))},zr:()=>u.close()}),f=(p,g,y)=>{p.listen(g,b=>{try{y(b)}catch(w){setTimeout(()=>{throw w},0)}})};return f(u,lo.EventType.OPEN,()=>{h||K("Connection","WebChannel transport opened.")}),f(u,lo.EventType.CLOSE,()=>{h||(h=!0,K("Connection","WebChannel transport closed"),d.no())}),f(u,lo.EventType.ERROR,p=>{h||(h=!0,Vf("Connection","WebChannel transport errored:",p),d.no(new J(D.UNAVAILABLE,"The operation could not be completed")))}),f(u,lo.EventType.MESSAGE,p=>{var g;if(!h){const y=p.data[0];Fe(!!y);const b=y,w=b.error||((g=b[0])===null||g===void 0?void 0:g.error);if(w){K("Connection","WebChannel received error:",w);const R=w.status;let F=function(P){const S=Xe[P];if(S!==void 0)return Ky(S)}(R),j=w.message;F===void 0&&(F=D.INTERNAL,j="Unknown error status: "+R+" with message "+w.message),h=!0,d.no(new J(F,j)),u.close()}else K("Connection","WebChannel received:",y),d.so(y)}}),f(o,FC.STAT_EVENT,p=>{p.stat===Ff.PROXY?K("Connection","Detected buffering proxy"):p.stat===Ff.NOPROXY&&K("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.eo()},0),d}}function Fl(){return typeof document!="undefined"?document:null}/**
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
 */function Za(t){return new Bk(t,!0)}class r0{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Yn=e,this.timerId=n,this.fo=r,this._o=s,this.wo=i,this.mo=0,this.yo=null,this.po=Date.now(),this.reset()}reset(){this.mo=0}Io(){this.mo=this.wo}To(e){this.cancel();const n=Math.floor(this.mo+this.Eo()),r=Math.max(0,Date.now()-this.po),s=Math.max(0,n-r);s>0&&K("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.mo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.yo=this.Yn.enqueueAfterDelay(this.timerId,s,()=>(this.po=Date.now(),e())),this.mo*=this._o,this.mo<this.fo&&(this.mo=this.fo),this.mo>this.wo&&(this.mo=this.wo)}Ao(){this.yo!==null&&(this.yo.skipDelay(),this.yo=null)}cancel(){this.yo!==null&&(this.yo.cancel(),this.yo=null)}Eo(){return(Math.random()-.5)*this.mo}}/**
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
 */class s0{constructor(e,n,r,s,i,o,a,l){this.Yn=e,this.Ro=r,this.Po=s,this.bo=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Vo=0,this.vo=null,this.So=null,this.stream=null,this.Do=new r0(e,n)}Co(){return this.state===1||this.state===5||this.xo()}xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.No()}async stop(){this.Co()&&await this.close(0)}ko(){this.state=0,this.Do.reset()}Mo(){this.xo()&&this.vo===null&&(this.vo=this.Yn.enqueueAfterDelay(this.Ro,6e4,()=>this.Oo()))}Fo(e){this.$o(),this.stream.send(e)}async Oo(){if(this.xo())return this.close(0)}$o(){this.vo&&(this.vo.cancel(),this.vo=null)}Bo(){this.So&&(this.So.cancel(),this.So=null)}async close(e,n){this.$o(),this.Bo(),this.Do.cancel(),this.Vo++,e!==4?this.Do.reset():n&&n.code===D.RESOURCE_EXHAUSTED?(Gn(n.toString()),Gn("Using maximum backoff delay to prevent overloading the backend."),this.Do.Io()):n&&n.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Lo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Yr(n)}Lo(){}auth(){this.state=1;const e=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Vo===n&&this.qo(r,s)},r=>{e(()=>{const s=new J(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Ko(s)})})}qo(e,n){const r=this.Uo(this.Vo);this.stream=this.Go(e,n),this.stream.Hr(()=>{r(()=>(this.state=2,this.So=this.Yn.enqueueAfterDelay(this.Po,1e4,()=>(this.xo()&&(this.state=3),Promise.resolve())),this.listener.Hr()))}),this.stream.Yr(s=>{r(()=>this.Ko(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}No(){this.state=5,this.Do.To(async()=>{this.state=0,this.start()})}Ko(e){return K("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return n=>{this.Yn.enqueueAndForget(()=>this.Vo===e?n():(K("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class RD extends s0{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.M=i}Go(e,n){return this.bo.lo("Listen",e,n)}onMessage(e){this.Do.reset();const n=Uk(this.M,e),r=function(s){if(!("targetChange"in s))return de.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?de.min():i.readTime?In(i.readTime):de.min()}(e);return this.listener.Qo(n,r)}jo(e){const n={};n.database=Bu(this.M),n.addTarget=function(s,i){let o;const a=i.target;return o=Ou(a)?{documents:qk(s,a)}:{query:Hk(s,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Qy(s,i.resumeToken):i.snapshotVersion.compareTo(de.min())>0&&(o.readTime=Jo(s,i.snapshotVersion.toTimestamp())),o}(this.M,e);const r=Wk(this.M,e);r&&(n.labels=r),this.Fo(n)}Wo(e){const n={};n.database=Bu(this.M),n.removeTarget=e,this.Fo(n)}}class OD extends s0{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.M=i,this.zo=!1}get Ho(){return this.zo}start(){this.zo=!1,this.lastStreamToken=void 0,super.start()}Lo(){this.zo&&this.Jo([])}Go(e,n){return this.bo.lo("Write",e,n)}onMessage(e){if(Fe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.zo){this.Do.reset();const n=zk(e.writeResults,e.commitTime),r=In(e.commitTime);return this.listener.Yo(r,n)}return Fe(!e.writeResults||e.writeResults.length===0),this.zo=!0,this.listener.Xo()}Zo(){const e={};e.database=Bu(this.M),this.Fo(e)}Jo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>jk(this.M,r))};this.Fo(n)}}/**
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
 */class PD extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.bo=r,this.M=s,this.tu=!1}eu(){if(this.tu)throw new J(D.FAILED_PRECONDITION,"The client has already been terminated.")}oo(e,n,r){return this.eu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.bo.oo(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new J(D.UNKNOWN,s.toString())})}ho(e,n,r){return this.eu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.bo.ho(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new J(D.UNKNOWN,s.toString())})}terminate(){this.tu=!0}}class ND{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.nu=0,this.su=null,this.iu=!0}ru(){this.nu===0&&(this.ou("Unknown"),this.su=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.su=null,this.uu("Backend didn't respond within 10 seconds."),this.ou("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.ou("Unknown"):(this.nu++,this.nu>=1&&(this.cu(),this.uu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ou("Offline")))}set(e){this.cu(),this.nu=0,e==="Online"&&(this.iu=!1),this.ou(e)}ou(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}uu(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */class LD{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.hu=[],this.lu=new Map,this.fu=new Set,this.du=[],this._u=i,this._u.Lr(o=>{r.enqueueAndForget(async()=>{Lr(this)&&(K("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=ue(a);l.fu.add(4),await Gi(l),l.wu.set("Unknown"),l.fu.delete(4),await Ja(l)}(this))})}),this.wu=new ND(r,s)}}async function Ja(t){if(Lr(t))for(const e of t.du)await e(!0)}async function Gi(t){for(const e of t.du)await e(!1)}function i0(t,e){const n=ue(t);n.lu.has(e.targetId)||(n.lu.set(e.targetId,e),Ih(n)?Eh(n):Rs(n).xo()&&wh(n,e))}function o0(t,e){const n=ue(t),r=Rs(n);n.lu.delete(e),r.xo()&&a0(n,e),n.lu.size===0&&(r.xo()?r.Mo():Lr(n)&&n.wu.set("Unknown"))}function wh(t,e){t.mu.Z(e.targetId),Rs(t).jo(e)}function a0(t,e){t.mu.Z(e),Rs(t).Wo(e)}function Eh(t){t.mu=new Lk({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.lu.get(e)||null}),Rs(t).start(),t.wu.ru()}function Ih(t){return Lr(t)&&!Rs(t).Co()&&t.lu.size>0}function Lr(t){return ue(t).fu.size===0}function l0(t){t.mu=void 0}async function MD(t){t.lu.forEach((e,n)=>{wh(t,e)})}async function FD(t,e){l0(t),Ih(t)?(t.wu.au(e),Eh(t)):t.wu.set("Unknown")}async function BD(t,e,n){if(t.wu.set("Online"),e instanceof Xy&&e.state===2&&e.cause)try{await async function(r,s){const i=s.cause;for(const o of s.targetIds)r.lu.has(o)&&(await r.remoteSyncer.rejectListen(o,i),r.lu.delete(o),r.mu.removeTarget(o))}(t,e)}catch(r){K("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ea(t,r)}else if(e instanceof _o?t.mu.ut(e):e instanceof Gy?t.mu._t(e):t.mu.ht(e),!n.isEqual(de.min()))try{const r=await n0(t.localStore);n.compareTo(r)>=0&&await function(s,i){const o=s.mu.yt(i);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=s.lu.get(l);u&&s.lu.set(l,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const l=s.lu.get(a);if(!l)return;s.lu.set(a,l.withResumeToken(pt.EMPTY_BYTE_STRING,l.snapshotVersion)),a0(s,a);const u=new yr(l.target,a,1,l.sequenceNumber);wh(s,u)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){K("RemoteStore","Failed to raise snapshot:",r),await ea(t,r)}}async function ea(t,e,n){if(!Ki(e))throw e;t.fu.add(1),await Gi(t),t.wu.set("Offline"),n||(n=()=>n0(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{K("RemoteStore","Retrying IndexedDB access"),await n(),t.fu.delete(1),await Ja(t)})}function u0(t,e){return e().catch(n=>ea(t,n,e))}async function el(t){const e=ue(t),n=Qn(e);let r=e.hu.length>0?e.hu[e.hu.length-1].batchId:-1;for(;$D(e);)try{const s=await mD(e.localStore,r);if(s===null){e.hu.length===0&&n.Mo();break}r=s.batchId,VD(e,s)}catch(s){await ea(e,s)}c0(e)&&h0(e)}function $D(t){return Lr(t)&&t.hu.length<10}function VD(t,e){t.hu.push(e);const n=Qn(t);n.xo()&&n.Ho&&n.Jo(e.mutations)}function c0(t){return Lr(t)&&!Qn(t).Co()&&t.hu.length>0}function h0(t){Qn(t).start()}async function UD(t){Qn(t).Zo()}async function jD(t){const e=Qn(t);for(const n of t.hu)e.Jo(n.mutations)}async function zD(t,e,n){const r=t.hu.shift(),s=vh.from(r,e,n);await u0(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await el(t)}async function qD(t,e){e&&Qn(t).Ho&&await async function(n,r){if(s=r.code,Dk(s)&&s!==D.ABORTED){const i=n.hu.shift();Qn(n).ko(),await u0(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,r)),await el(n)}var s}(t,e),c0(t)&&h0(t)}async function ap(t,e){const n=ue(t);n.asyncQueue.verifyOperationInProgress(),K("RemoteStore","RemoteStore received new credentials");const r=Lr(n);n.fu.add(3),await Gi(n),r&&n.wu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.fu.delete(3),await Ja(n)}async function HD(t,e){const n=ue(t);e?(n.fu.delete(2),await Ja(n)):e||(n.fu.add(2),await Gi(n),n.wu.set("Unknown"))}function Rs(t){return t.gu||(t.gu=function(e,n,r){const s=ue(e);return s.eu(),new RD(n,s.bo,s.authCredentials,s.appCheckCredentials,s.M,r)}(t.datastore,t.asyncQueue,{Hr:MD.bind(null,t),Yr:FD.bind(null,t),Qo:BD.bind(null,t)}),t.du.push(async e=>{e?(t.gu.ko(),Ih(t)?Eh(t):t.wu.set("Unknown")):(await t.gu.stop(),l0(t))})),t.gu}function Qn(t){return t.yu||(t.yu=function(e,n,r){const s=ue(e);return s.eu(),new OD(n,s.bo,s.authCredentials,s.appCheckCredentials,s.M,r)}(t.datastore,t.asyncQueue,{Hr:UD.bind(null,t),Yr:qD.bind(null,t),Xo:jD.bind(null,t),Yo:zD.bind(null,t)}),t.du.push(async e=>{e?(t.yu.ko(),await el(t)):(await t.yu.stop(),t.hu.length>0&&(K("RemoteStore",`Stopping write stream with ${t.hu.length} pending writes`),t.hu=[]))})),t.yu}/**
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
 */class Th{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new vr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Th(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new J(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ah(t,e){if(Gn("AsyncQueue",`${e}: ${t}`),Ki(t))return new J(D.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ts{constructor(e){this.comparator=e?(n,r)=>e(n,r)||Y.comparator(n.key,r.key):(n,r)=>Y.comparator(n.key,r.key),this.keyedMap=Lu(),this.sortedSet=new st(this.comparator)}static emptySet(e){return new ts(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ts)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ts;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class lp{constructor(){this.pu=new st(Y.comparator)}track(e){const n=e.doc.key,r=this.pu.get(n);r?e.type!==0&&r.type===3?this.pu=this.pu.insert(n,e):e.type===3&&r.type!==1?this.pu=this.pu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.pu=this.pu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.pu=this.pu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.pu=this.pu.remove(n):e.type===1&&r.type===2?this.pu=this.pu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.pu=this.pu.insert(n,{type:2,doc:e.doc}):ie():this.pu=this.pu.insert(n,e)}Iu(){const e=[];return this.pu.inorderTraversal((n,r)=>{e.push(r)}),e}}class ms{constructor(e,n,r,s,i,o,a,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l}static fromInitialDocuments(e,n,r,s){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new ms(e,n,ts.emptySet(n),i,r,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Wa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class KD{constructor(){this.Tu=void 0,this.listeners=[]}}class WD{constructor(){this.queries=new xs(e=>Fy(e),Wa),this.onlineState="Unknown",this.Eu=new Set}}async function GD(t,e){const n=ue(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new KD),s)try{i.Tu=await n.onListen(r)}catch(o){const a=Ah(o,`Initialization of query '${Pu(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.Au(n.onlineState),i.Tu&&e.Ru(i.Tu)&&Sh(n)}async function XD(t,e){const n=ue(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function QD(t,e){const n=ue(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Ru(s)&&(r=!0);o.Tu=s}}r&&Sh(n)}function YD(t,e,n){const r=ue(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function Sh(t){t.Eu.forEach(e=>{e.next()})}class ZD{constructor(e,n,r){this.query=e,this.Pu=n,this.bu=!1,this.Vu=null,this.onlineState="Unknown",this.options=r||{}}Ru(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ms(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.bu?this.vu(e)&&(this.Pu.next(e),n=!0):this.Su(e,this.onlineState)&&(this.Du(e),n=!0),this.Vu=e,n}onError(e){this.Pu.error(e)}Au(e){this.onlineState=e;let n=!1;return this.Vu&&!this.bu&&this.Su(this.Vu,e)&&(this.Du(this.Vu),n=!0),n}Su(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Cu||!r)&&(!e.docs.isEmpty()||n==="Offline")}vu(e){if(e.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Du(e){e=ms.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Pu.next(e)}}/**
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
 */class d0{constructor(e){this.key=e}}class f0{constructor(e){this.key=e}}class JD{constructor(e,n){this.query=e,this.$u=n,this.Bu=null,this.current=!1,this.Lu=$e(),this.mutatedKeys=$e(),this.Uu=By(e),this.qu=new ts(this.Uu)}get Ku(){return this.$u}Gu(e,n){const r=n?n.Qu:new lp,s=n?n.qu:this.qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=yo(this.query)&&s.size===this.query.limit?s.last():null,u=Qo(this.query)&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((c,h)=>{const d=s.get(c),f=mh(this.query,h)?h:null,p=!!d&&this.mutatedKeys.has(d.key),g=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let y=!1;d&&f?d.data.isEqual(f.data)?p!==g&&(r.track({type:3,doc:f}),y=!0):this.ju(d,f)||(r.track({type:2,doc:f}),y=!0,(l&&this.Uu(f,l)>0||u&&this.Uu(f,u)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),y=!0):d&&!f&&(r.track({type:1,doc:d}),y=!0,(l||u)&&(a=!0)),y&&(f?(o=o.add(f),i=g?i.add(c):i.delete(c)):(o=o.delete(c),i=i.delete(c)))}),yo(this.query)||Qo(this.query))for(;o.size>this.query.limit;){const c=yo(this.query)?o.last():o.first();o=o.delete(c.key),i=i.delete(c.key),r.track({type:1,doc:c})}return{qu:o,Qu:r,ni:a,mutatedKeys:i}}ju(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.qu;this.qu=e.qu,this.mutatedKeys=e.mutatedKeys;const i=e.Qu.Iu();i.sort((u,c)=>function(h,d){const f=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ie()}};return f(h)-f(d)}(u.type,c.type)||this.Uu(u.doc,c.doc)),this.Wu(r);const o=n?this.zu():[],a=this.Lu.size===0&&this.current?1:0,l=a!==this.Bu;return this.Bu=a,i.length!==0||l?{snapshot:new ms(this.query,e.qu,s,i,e.mutatedKeys,a===0,l,!1),Hu:o}:{Hu:o}}Au(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({qu:this.qu,Qu:new lp,mutatedKeys:this.mutatedKeys,ni:!1},!1)):{Hu:[]}}Ju(e){return!this.$u.has(e)&&!!this.qu.has(e)&&!this.qu.get(e).hasLocalMutations}Wu(e){e&&(e.addedDocuments.forEach(n=>this.$u=this.$u.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.$u=this.$u.delete(n)),this.current=e.current)}zu(){if(!this.current)return[];const e=this.Lu;this.Lu=$e(),this.qu.forEach(r=>{this.Ju(r.key)&&(this.Lu=this.Lu.add(r.key))});const n=[];return e.forEach(r=>{this.Lu.has(r)||n.push(new f0(r))}),this.Lu.forEach(r=>{e.has(r)||n.push(new d0(r))}),n}Yu(e){this.$u=e.li,this.Lu=$e();const n=this.Gu(e.documents);return this.applyChanges(n,!0)}Xu(){return ms.fromInitialDocuments(this.query,this.qu,this.mutatedKeys,this.Bu===0)}}class ex{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class tx{constructor(e){this.key=e,this.Zu=!1}}class nx{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.ta={},this.ea=new xs(a=>Fy(a),Wa),this.na=new Map,this.sa=new Set,this.ia=new st(Y.comparator),this.ra=new Map,this.oa=new bh,this.ua={},this.aa=new Map,this.ca=ps.yn(),this.onlineState="Unknown",this.ha=void 0}get isPrimaryClient(){return this.ha===!0}}async function rx(t,e){const n=fx(t);let r,s;const i=n.ea.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Xu();else{const o=await gD(n.localStore,Ar(e));n.isPrimaryClient&&i0(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await sx(n,e,r,a==="current")}return s}async function sx(t,e,n,r){t.la=(c,h,d)=>async function(f,p,g,y){let b=p.view.Gu(g);b.ni&&(b=await sp(f.localStore,p.query,!1).then(({documents:F})=>p.view.Gu(F,b)));const w=y&&y.targetChanges.get(p.targetId),R=p.view.applyChanges(b,f.isPrimaryClient,w);return cp(f,p.targetId,R.Hu),R.snapshot}(t,c,h,d);const s=await sp(t.localStore,e,!0),i=new JD(e,s.li),o=i.Gu(s.documents),a=Hi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),l=i.applyChanges(o,t.isPrimaryClient,a);cp(t,n,l.Hu);const u=new ex(e,n,i);return t.ea.set(e,u),t.na.has(n)?t.na.get(n).push(e):t.na.set(n,[e]),l.snapshot}async function ix(t,e){const n=ue(t),r=n.ea.get(e),s=n.na.get(r.targetId);if(s.length>1)return n.na.set(r.targetId,s.filter(i=>!Wa(i,e))),void n.ea.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await $u(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),o0(n.remoteStore,r.targetId),Vu(n,r.targetId)}).catch(Wi)):(Vu(n,r.targetId),await $u(n.localStore,r.targetId,!0))}async function ox(t,e,n){const r=px(t);try{const s=await function(i,o){const a=ue(i),l=Et.now(),u=o.reduce((h,d)=>h.add(d.key),$e());let c;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.ci.Ks(h,u).next(d=>{c=d;const f=[];for(const p of o){const g=Ak(p,c.get(p.key));g!=null&&f.push(new qi(p.key,g,Ly(g.value.mapValue),es.exists(!0)))}return a.Bs.addMutationBatch(h,l,f,o)})).then(h=>(h.applyToLocalDocumentSet(c),{batchId:h.batchId,changes:c}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(i,o,a){let l=i.ua[i.currentUser.toKey()];l||(l=new st(Ie)),l=l.insert(o,a),i.ua[i.currentUser.toKey()]=l}(r,s.batchId,n),await Xi(r,s.changes),await el(r.remoteStore)}catch(s){const i=Ah(s,"Failed to persist write");n.reject(i)}}async function p0(t,e){const n=ue(t);try{const r=await fD(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.ra.get(i);o&&(Fe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Zu=!0:s.modifiedDocuments.size>0?Fe(o.Zu):s.removedDocuments.size>0&&(Fe(o.Zu),o.Zu=!1))}),await Xi(n,r,e)}catch(r){await Wi(r)}}function up(t,e,n){const r=ue(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ea.forEach((i,o)=>{const a=o.view.Au(e);a.snapshot&&s.push(a.snapshot)}),function(i,o){const a=ue(i);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.Au(o)&&(l=!0)}),l&&Sh(a)}(r.eventManager,e),s.length&&r.ta.Qo(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function ax(t,e,n){const r=ue(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.ra.get(e),i=s&&s.key;if(i){let o=new st(Y.comparator);o=o.insert(i,vt.newNoDocument(i,de.min()));const a=$e().add(i),l=new Ya(de.min(),new Map,new dt(Ie),o,a);await p0(r,l),r.ia=r.ia.remove(i),r.ra.delete(e),Ch(r)}else await $u(r.localStore,e,!1).then(()=>Vu(r,e,n)).catch(Wi)}async function lx(t,e){const n=ue(t),r=e.batch.batchId;try{const s=await dD(n.localStore,e);g0(n,r,null),m0(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Xi(n,s)}catch(s){await Wi(s)}}async function ux(t,e,n){const r=ue(t);try{const s=await function(i,o){const a=ue(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.Bs.lookupMutationBatch(l,o).next(c=>(Fe(c!==null),u=c.keys(),a.Bs.removeMutationBatch(l,c))).next(()=>a.Bs.performConsistencyCheck(l)).next(()=>a.ci.Ks(l,u))})}(r.localStore,e);g0(r,e,n),m0(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Xi(r,s)}catch(s){await Wi(s)}}function m0(t,e){(t.aa.get(e)||[]).forEach(n=>{n.resolve()}),t.aa.delete(e)}function g0(t,e,n){const r=ue(t);let s=r.ua[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.ua[r.currentUser.toKey()]=s}}function Vu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.na.get(e))t.ea.delete(r),n&&t.ta.fa(r,n);t.na.delete(e),t.isPrimaryClient&&t.oa.Pi(e).forEach(r=>{t.oa.containsKey(r)||v0(t,r)})}function v0(t,e){t.sa.delete(e.path.canonicalString());const n=t.ia.get(e);n!==null&&(o0(t.remoteStore,n),t.ia=t.ia.remove(e),t.ra.delete(n),Ch(t))}function cp(t,e,n){for(const r of n)r instanceof d0?(t.oa.addReference(r.key,e),cx(t,r)):r instanceof f0?(K("SyncEngine","Document no longer in limbo: "+r.key),t.oa.removeReference(r.key,e),t.oa.containsKey(r.key)||v0(t,r.key)):ie()}function cx(t,e){const n=e.key,r=n.path.canonicalString();t.ia.get(n)||t.sa.has(r)||(K("SyncEngine","New document in limbo: "+n),t.sa.add(r),Ch(t))}function Ch(t){for(;t.sa.size>0&&t.ia.size<t.maxConcurrentLimboResolutions;){const e=t.sa.values().next().value;t.sa.delete(e);const n=new Y(qe.fromString(e)),r=t.ca.next();t.ra.set(r,new tx(n)),t.ia=t.ia.insert(n,r),i0(t.remoteStore,new yr(Ar(ph(n.path)),r,2,ch.A))}}async function Xi(t,e,n){const r=ue(t),s=[],i=[],o=[];r.ea.isEmpty()||(r.ea.forEach((a,l)=>{o.push(r.la(l,e,n).then(u=>{if(u){r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u.fromCache?"not-current":"current"),s.push(u);const c=yh.Ys(l.targetId,u);i.push(c)}}))}),await Promise.all(o),r.ta.Qo(s),await async function(a,l){const u=ue(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>L.forEach(l,h=>L.forEach(h.Hs,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>L.forEach(h.Js,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!Ki(c))throw c;K("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.ii.get(h),f=d.snapshotVersion,p=d.withLastLimboFreeSnapshotVersion(f);u.ii=u.ii.insert(h,p)}}}(r.localStore,i))}async function hx(t,e){const n=ue(t);if(!n.currentUser.isEqual(e)){K("SyncEngine","User change. New user:",e.toKey());const r=await t0(n.localStore,e);n.currentUser=e,function(s,i){s.aa.forEach(o=>{o.forEach(a=>{a.reject(new J(D.CANCELLED,i))})}),s.aa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Xi(n,r.hi)}}function dx(t,e){const n=ue(t),r=n.ra.get(e);if(r&&r.Zu)return $e().add(r.key);{let s=$e();const i=n.na.get(e);if(!i)return s;for(const o of i){const a=n.ea.get(o);s=s.unionWith(a.view.Ku)}return s}}function fx(t){const e=ue(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=p0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=dx.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ax.bind(null,e),e.ta.Qo=QD.bind(null,e.eventManager),e.ta.fa=YD.bind(null,e.eventManager),e}function px(t){const e=ue(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=lx.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ux.bind(null,e),e}class mx{constructor(){this.synchronizeTabs=!1}async initialize(e){this.M=Za(e.databaseInfo.databaseId),this.sharedClientState=this._a(e),this.persistence=this.wa(e),await this.persistence.start(),this.gcScheduler=this.ma(e),this.localStore=this.ga(e)}ma(e){return null}ga(e){return hD(this.persistence,new uD,e.initialUser,this.M)}wa(e){return new TD(_h.zi,this.M)}_a(e){return new SD}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class gx{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>up(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=hx.bind(null,this.syncEngine),await HD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new WD}createDatastore(e){const n=Za(e.databaseInfo.databaseId),r=(s=e.databaseInfo,new xD(s));var s;return function(i,o,a,l){return new PD(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,s=e.asyncQueue,i=a=>up(this.syncEngine,a,0),o=op.vt()?new op:new CD,new LD(n,r,s,i,o);var n,r,s,i,o}createSyncEngine(e,n){return function(r,s,i,o,a,l,u){const c=new nx(r,s,i,o,a,l);return u&&(c.ha=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ue(e);K("RemoteStore","RemoteStore shutting down."),n.fu.add(5),await Gi(n),n._u.shutdown(),n.wu.set("Unknown")}(this.remoteStore)}}/**
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
 */class vx{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.pa(this.observer.next,e)}error(e){this.observer.error?this.pa(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Ia(){this.muted=!0}pa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class yx{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=kt.UNAUTHENTICATED,this.clientId=Ry.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{K("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(K("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new J(D.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new vr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Ah(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function bx(t,e){t.asyncQueue.verifyOperationInProgress(),K("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await t0(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function _x(t,e){t.asyncQueue.verifyOperationInProgress();const n=await wx(t);K("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>ap(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>ap(e.remoteStore,i)),t.onlineComponents=e}async function wx(t){return t.offlineComponents||(K("FirestoreClient","Using default OfflineComponentProvider"),await bx(t,new mx)),t.offlineComponents}async function y0(t){return t.onlineComponents||(K("FirestoreClient","Using default OnlineComponentProvider"),await _x(t,new gx)),t.onlineComponents}function Ex(t){return y0(t).then(e=>e.syncEngine)}async function hp(t){const e=await y0(t),n=e.eventManager;return n.onListen=rx.bind(null,e.syncEngine),n.onUnlisten=ix.bind(null,e.syncEngine),n}const dp=new Map;/**
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
 */function b0(t,e,n){if(!n)throw new J(D.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Ix(t,e,n,r){if(e===!0&&r===!0)throw new J(D.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function fp(t){if(!Y.isDocumentKey(t))throw new J(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function pp(t){if(Y.isDocumentKey(t))throw new J(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function kh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ie()}function ti(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new J(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=kh(t);throw new J(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class mp{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new J(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new J(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Ix("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Dh{constructor(e,n,r){this._authCredentials=n,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new mp({}),this._settingsFrozen=!1,e instanceof hs?this._databaseId=e:(this._app=e,this._databaseId=function(s){if(!Object.prototype.hasOwnProperty.apply(s.options,["projectId"]))throw new J(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new hs(s.options.projectId)}(e))}get app(){if(!this._app)throw new J(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new J(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new mp(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new UC;switch(n.type){case"gapi":const r=n.client;return Fe(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new qC(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new J(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=dp.get(e);n&&(K("ComponentProvider","Removing Datastore"),dp.delete(e),n.terminate())}(this),Promise.resolve()}}/**
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
 */class Lt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Hn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Lt(this.firestore,e,this._key)}}class tl{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new tl(this.firestore,e,this._query)}}class Hn extends tl{constructor(e,n,r){super(e,n,ph(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Lt(this.firestore,null,new Y(e))}withConverter(e){return new Hn(this.firestore,e,this._path)}}function Tx(t,e,...n){if(t=Bt(t),b0("collection","path",e),t instanceof Dh){const r=qe.fromString(e,...n);return pp(r),new Hn(t,null,r)}{if(!(t instanceof Lt||t instanceof Hn))throw new J(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(qe.fromString(e,...n));return pp(r),new Hn(t.firestore,null,r)}}function gp(t,e,...n){if(t=Bt(t),arguments.length===1&&(e=Ry.R()),b0("doc","path",e),t instanceof Dh){const r=qe.fromString(e,...n);return fp(r),new Lt(t,null,new Y(r))}{if(!(t instanceof Lt||t instanceof Hn))throw new J(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(qe.fromString(e,...n));return fp(r),new Lt(t.firestore,t instanceof Hn?t.converter:null,new Y(r))}}/**
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
 */class Ax{constructor(){this.ka=Promise.resolve(),this.Ma=[],this.Oa=!1,this.Fa=[],this.$a=null,this.Ba=!1,this.La=!1,this.Ua=[],this.Do=new r0(this,"async_queue_retry"),this.qa=()=>{const n=Fl();n&&K("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Do.Ao()};const e=Fl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qa)}get isShuttingDown(){return this.Oa}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ka(),this.Ga(e)}enterRestrictedMode(e){if(!this.Oa){this.Oa=!0,this.La=e||!1;const n=Fl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qa)}}enqueue(e){if(this.Ka(),this.Oa)return new Promise(()=>{});const n=new vr;return this.Ga(()=>this.Oa&&this.La?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ma.push(e),this.Qa()))}async Qa(){if(this.Ma.length!==0){try{await this.Ma[0](),this.Ma.shift(),this.Do.reset()}catch(e){if(!Ki(e))throw e;K("AsyncQueue","Operation failed with retryable error: "+e)}this.Ma.length>0&&this.Do.To(()=>this.Qa())}}Ga(e){const n=this.ka.then(()=>(this.Ba=!0,e().catch(r=>{this.$a=r,this.Ba=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw Gn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ba=!1,r))));return this.ka=n,n}enqueueAfterDelay(e,n,r){this.Ka(),this.Ua.indexOf(e)>-1&&(n=0);const s=Th.createAndSchedule(this,e,n,r,i=>this.ja(i));return this.Fa.push(s),s}Ka(){this.$a&&ie()}verifyOperationInProgress(){}async Wa(){let e;do e=this.ka,await e;while(e!==this.ka)}za(e){for(const n of this.Fa)if(n.timerId===e)return!0;return!1}Ha(e){return this.Wa().then(()=>{this.Fa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Fa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Wa()})}Ja(e){this.Ua.push(e)}ja(e){const n=this.Fa.indexOf(e);this.Fa.splice(n,1)}}function vp(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const s of n)if(s in r&&typeof r[s]=="function")return!0;return!1}(t,["next","error","complete"])}class ta extends Dh{constructor(e,n,r){super(e,n,r),this.type="firestore",this._queue=new Ax,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||w0(this),this._firestoreClient.terminate()}}function Uu(t=wc()){return Or(t,"firestore").getImmediate()}function _0(t){return t._firestoreClient||w0(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function w0(t){var e;const n=t._freezeSettings(),r=function(s,i,o,a){return new QC(s,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new yx(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
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
 */class xh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new J(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Dt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class gs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new gs(pt.fromBase64String(e))}catch(n){throw new J(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new gs(pt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class E0{constructor(e){this._methodName=e}}/**
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
 */class Rh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new J(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new J(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ie(this._lat,e._lat)||Ie(this._long,e._long)}}/**
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
 */const Sx=/^__.*__$/;class Cx{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new qi(e,this.data,this.fieldMask,n,this.fieldTransforms):new Qa(e,this.data,n,this.fieldTransforms)}}function I0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ie()}}class Oh{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.M=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ya(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Xa(){return this.settings.Xa}Za(e){return new Oh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}tc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Za({path:r,ec:!1});return s.nc(e),s}sc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Za({path:r,ec:!1});return s.Ya(),s}ic(e){return this.Za({path:void 0,ec:!0})}rc(e){return na(e,this.settings.methodName,this.settings.oc||!1,this.path,this.settings.uc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ya(){if(this.path)for(let e=0;e<this.path.length;e++)this.nc(this.path.get(e))}nc(e){if(e.length===0)throw this.rc("Document fields must not be empty");if(I0(this.Xa)&&Sx.test(e))throw this.rc('Document fields cannot begin and end with "__"')}}class kx{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.M=r||Za(e)}ac(e,n,r,s=!1){return new Oh({Xa:e,methodName:n,uc:r,path:Dt.emptyPath(),ec:!1,oc:s},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function Dx(t){const e=t._freezeSettings(),n=Za(t._databaseId);return new kx(t._databaseId,!!e.ignoreUndefinedProperties,n)}function xx(t,e,n,r,s,i={}){const o=t.ac(i.merge||i.mergeFields?2:0,e,n,s);C0("Data must be an object, but it was:",o,r);const a=A0(r,o);let l,u;if(i.merge)l=new Du(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const c=[];for(const h of i.mergeFields){const d=Rx(e,h,n);if(!o.contains(d))throw new J(D.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Px(c,d)||c.push(d)}l=new Du(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new Cx(new Yt(a),l,u)}function T0(t,e){if(S0(t=Bt(t)))return C0("Unsupported field value:",e,t),A0(t,e);if(t instanceof E0)return function(n,r){if(!I0(r.Xa))throw r.rc(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.rc(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ec&&e.Xa!==4)throw e.rc("Nested arrays are not supported");return function(n,r){const s=[];let i=0;for(const o of n){let a=T0(o,r.ic(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(t,e)}return function(n,r){if((n=Bt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return bk(r.M,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=Et.fromDate(n);return{timestampValue:Jo(r.M,s)}}if(n instanceof Et){const s=new Et(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Jo(r.M,s)}}if(n instanceof Rh)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof gs)return{bytesValue:Qy(r.M,n._byteString)};if(n instanceof Lt){const s=r.databaseId,i=n.firestore._databaseId;if(!i.isEqual(s))throw r.rc(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:gh(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.rc(`Unsupported field value: ${kh(n)}`)}(t,e)}function A0(t,e){const n={};return Oy(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ks(t,(r,s)=>{const i=T0(s,e.tc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function S0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Et||t instanceof Rh||t instanceof gs||t instanceof Lt||t instanceof E0)}function C0(t,e,n){if(!S0(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=kh(n);throw r==="an object"?e.rc(t+" a custom object"):e.rc(t+" "+r)}}function Rx(t,e,n){if((e=Bt(e))instanceof xh)return e._internalPath;if(typeof e=="string")return k0(t,e);throw na("Field path arguments must be of type string or ",t,!1,void 0,n)}const Ox=new RegExp("[~\\*/\\[\\]]");function k0(t,e,n){if(e.search(Ox)>=0)throw na(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new xh(...e.split("."))._internalPath}catch{throw na(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function na(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new J(D.INVALID_ARGUMENT,a+t+l)}function Px(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class D0{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Lt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Nx(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(x0("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Nx extends D0{data(){return super.data()}}function x0(t,e){return typeof e=="string"?k0(t,e):e instanceof xh?e._internalPath:e._delegate._internalPath}/**
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
 */class js{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class R0 extends D0{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new wo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(x0("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class wo extends R0{data(e={}){return super.data(e)}}class Lx{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new js(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new wo(this._firestore,this._userDataWriter,r.key,r,new js(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new J(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let i=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new wo(r._firestore,r._userDataWriter,o.doc.key,o.doc,new js(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:i++}))}{let i=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new wo(r._firestore,r._userDataWriter,o.doc.key,o.doc,new js(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:Mx(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Mx(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ie()}}/**
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
 */function Fx(t){if(Qo(t)&&t.explicitOrderBy.length===0)throw new J(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
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
 */class Bx{convertValue(e,n="none"){switch(Tr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(cs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ie()}}convertObject(e,n){const r={};return ks(e.fields,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new Rh(Qe(e.latitude),Qe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Ny(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(wi(e));default:return null}}convertTimestamp(e){const n=Xn(e);return new Et(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=qe.fromString(e);Fe(e0(r));const s=new hs(r.get(1),r.get(3)),i=new Y(r.popFirst(5));return s.isEqual(n)||Gn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function $x(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class O0 extends Bx{constructor(e){super(),this.firestore=e}convertBytes(e){return new gs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Lt(this.firestore,null,n)}}function Vx(t,e,n){t=ti(t,Lt);const r=ti(t.firestore,ta),s=$x(t.converter,e,n);return jx(r,[xx(Dx(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,es.none())])}function Ux(t,...e){var n,r,s;t=Bt(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||vp(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(vp(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let l,u,c;if(t instanceof Lt)u=ti(t.firestore,ta),c=ph(t._key.path),l={next:h=>{e[o]&&e[o](zx(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=ti(t,tl);u=ti(h.firestore,ta),c=h._query;const d=new O0(u);l={next:f=>{e[o]&&e[o](new Lx(u,d,h,f))},error:e[o+1],complete:e[o+2]},Fx(t._query)}return function(h,d,f,p){const g=new vx(p),y=new ZD(d,g,f);return h.asyncQueue.enqueueAndForget(async()=>GD(await hp(h),y)),()=>{g.Ia(),h.asyncQueue.enqueueAndForget(async()=>XD(await hp(h),y))}}(_0(u),c,a,l)}function jx(t,e){return function(n,r){const s=new vr;return n.asyncQueue.enqueueAndForget(async()=>ox(await Ex(n),r,s)),s.promise}(_0(t),e)}function zx(t,e,n){const r=n.docs.get(e._key),s=new O0(t);return new R0(t,s,e._key,r,new js(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Cs=n})(Di),cn(new en("firestore",(n,{options:r})=>{const s=n.getProvider("app").getImmediate(),i=new ta(s,new jC(n.getProvider("auth-internal")),new KC(n.getProvider("app-check-internal")));return r=Object.assign({useFetchStreams:e},r),i._setSettings(r),i},"PUBLIC")),Ht(Bf,"3.4.8",t),Ht(Bf,"3.4.8","esm2017")})();const qx=yc("item",{state:()=>({itemList:[],slotTitleList:[]}),actions:{async addItem(t,e,n){const r=O1(),s=!1,i=gt($({},t),{id:r,shared:s});return this.itemList.push(i),this.saveData(e,n)},async removeItem(t,e,n){const r=this.itemList.findIndex(s=>s.id===t.id);if(r<0)throw new Error(`Can't find item [${t.id}]`);return this.itemList.splice(r,1),this.saveData(e,n)},async updateItem(t,e,n){return this.saveData(e,n)},async saveData(t,e){const n=Uu(),r=gp(Tx(n,t),e);return Vx(r,{items:this.itemList,slotTitles:this.slotTitleList})},connect(t,e){const n=Uu();Ux(gp(n,t,e),r=>{var s,i,o,a;this.slotTitleList=(i=(s=r.data())==null?void 0:s.slotTitles)!=null?i:[],this.itemList=(a=(o=r.data())==null?void 0:o.items)!=null?a:[]})}},getters:{getList:t=>t.itemList,getSlotTitleList:t=>t.slotTitleList,getSlotList:t=>e=>t.itemList.filter(n=>n.slot===e)}});const Hx={},Kx={class:"divide-y"};function Wx(t,e){return ge(),Je("ul",Kx,[ba(t.$slots,"default",{},void 0,!0)])}var P0=fn(Hx,[["render",Wx],["__scopeId","data-v-3b882242"]]);const Gx={},Xx={class:"py-2"};function Qx(t,e){return ge(),Je("li",Xx,[ba(t.$slots,"default")])}var N0=fn(Gx,[["render",Qx]]),Yx=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,Zx=/[\0-\x1F\x7F-\x9F]/,Jx=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,eR=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,tR=function(t){var e={};t=t||{},e.src_Any=Yx.source,e.src_Cc=Zx.source,e.src_Z=Jx.source,e.src_P=eR.source,e.src_ZPCc=[e.src_Z,e.src_P,e.src_Cc].join("|"),e.src_ZCc=[e.src_Z,e.src_Cc].join("|");var n="[><\uFF5C]";return e.src_pseudo_letter="(?:(?!"+n+"|"+e.src_ZPCc+")"+e.src_Any+")",e.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",e.src_auth="(?:(?:(?!"+e.src_ZCc+"|[@/\\[\\]()]).)+@)?",e.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",e.src_host_terminator="(?=$|"+n+"|"+e.src_ZPCc+")(?!"+(t["---"]?"-(?!--)|":"-|")+"_|:\\d|\\.-|\\.(?!$|"+e.src_ZPCc+"))",e.src_path="(?:[/?#](?:(?!"+e.src_ZCc+"|"+n+`|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!`+e.src_ZCc+"|\\]).)*\\]|\\((?:(?!"+e.src_ZCc+"|[)]).)*\\)|\\{(?:(?!"+e.src_ZCc+'|[}]).)*\\}|\\"(?:(?!'+e.src_ZCc+`|["]).)+\\"|\\'(?:(?!`+e.src_ZCc+"|[']).)+\\'|\\'(?="+e.src_pseudo_letter+"|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!"+e.src_ZCc+"|[.]|$)|"+(t["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+",(?!"+e.src_ZCc+"|$)|;(?!"+e.src_ZCc+"|$)|\\!+(?!"+e.src_ZCc+"|[!]|$)|\\?(?!"+e.src_ZCc+"|[?]|$))+|\\/)?",e.src_email_name='[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*',e.src_xn="xn--[a-z0-9\\-]{1,59}",e.src_domain_root="(?:"+e.src_xn+"|"+e.src_pseudo_letter+"{1,63})",e.src_domain="(?:"+e.src_xn+"|(?:"+e.src_pseudo_letter+")|(?:"+e.src_pseudo_letter+"(?:-|"+e.src_pseudo_letter+"){0,61}"+e.src_pseudo_letter+"))",e.src_host="(?:(?:(?:(?:"+e.src_domain+")\\.)*"+e.src_domain+"))",e.tpl_host_fuzzy="(?:"+e.src_ip4+"|(?:(?:(?:"+e.src_domain+")\\.)+(?:%TLDS%)))",e.tpl_host_no_ip_fuzzy="(?:(?:(?:"+e.src_domain+")\\.)+(?:%TLDS%))",e.src_host_strict=e.src_host+e.src_host_terminator,e.tpl_host_fuzzy_strict=e.tpl_host_fuzzy+e.src_host_terminator,e.src_host_port_strict=e.src_host+e.src_port+e.src_host_terminator,e.tpl_host_port_fuzzy_strict=e.tpl_host_fuzzy+e.src_port+e.src_host_terminator,e.tpl_host_port_no_ip_fuzzy_strict=e.tpl_host_no_ip_fuzzy+e.src_port+e.src_host_terminator,e.tpl_host_fuzzy_test="localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+e.src_ZPCc+"|>|$))",e.tpl_email_fuzzy="(^|"+n+'|"|\\(|'+e.src_ZCc+")("+e.src_email_name+"@"+e.tpl_host_fuzzy_strict+")",e.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|"+e.src_ZPCc+"))((?![$+<=>^`|\uFF5C])"+e.tpl_host_port_fuzzy_strict+e.src_path+")",e.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|"+e.src_ZPCc+"))((?![$+<=>^`|\uFF5C])"+e.tpl_host_port_no_ip_fuzzy_strict+e.src_path+")",e};function ju(t){var e=Array.prototype.slice.call(arguments,1);return e.forEach(function(n){!n||Object.keys(n).forEach(function(r){t[r]=n[r]})}),t}function nl(t){return Object.prototype.toString.call(t)}function nR(t){return nl(t)==="[object String]"}function rR(t){return nl(t)==="[object Object]"}function sR(t){return nl(t)==="[object RegExp]"}function yp(t){return nl(t)==="[object Function]"}function iR(t){return t.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}var L0={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function oR(t){return Object.keys(t||{}).reduce(function(e,n){return e||L0.hasOwnProperty(n)},!1)}var aR={"http:":{validate:function(t,e,n){var r=t.slice(e);return n.re.http||(n.re.http=new RegExp("^\\/\\/"+n.re.src_auth+n.re.src_host_port_strict+n.re.src_path,"i")),n.re.http.test(r)?r.match(n.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(t,e,n){var r=t.slice(e);return n.re.no_http||(n.re.no_http=new RegExp("^"+n.re.src_auth+"(?:localhost|(?:(?:"+n.re.src_domain+")\\.)+"+n.re.src_domain_root+")"+n.re.src_port+n.re.src_host_terminator+n.re.src_path,"i")),n.re.no_http.test(r)?e>=3&&t[e-3]===":"||e>=3&&t[e-3]==="/"?0:r.match(n.re.no_http)[0].length:0}},"mailto:":{validate:function(t,e,n){var r=t.slice(e);return n.re.mailto||(n.re.mailto=new RegExp("^"+n.re.src_email_name+"@"+n.re.src_host_strict,"i")),n.re.mailto.test(r)?r.match(n.re.mailto)[0].length:0}}},lR="a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",uR="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|\u0440\u0444".split("|");function cR(t){t.__index__=-1,t.__text_cache__=""}function hR(t){return function(e,n){var r=e.slice(n);return t.test(r)?r.match(t)[0].length:0}}function bp(){return function(t,e){e.normalize(t)}}function ra(t){var e=t.re=tR(t.__opts__),n=t.__tlds__.slice();t.onCompile(),t.__tlds_replaced__||n.push(lR),n.push(e.src_xn),e.src_tlds=n.join("|");function r(a){return a.replace("%TLDS%",e.src_tlds)}e.email_fuzzy=RegExp(r(e.tpl_email_fuzzy),"i"),e.link_fuzzy=RegExp(r(e.tpl_link_fuzzy),"i"),e.link_no_ip_fuzzy=RegExp(r(e.tpl_link_no_ip_fuzzy),"i"),e.host_fuzzy_test=RegExp(r(e.tpl_host_fuzzy_test),"i");var s=[];t.__compiled__={};function i(a,l){throw new Error('(LinkifyIt) Invalid schema "'+a+'": '+l)}Object.keys(t.__schemas__).forEach(function(a){var l=t.__schemas__[a];if(l!==null){var u={validate:null,link:null};if(t.__compiled__[a]=u,rR(l)){sR(l.validate)?u.validate=hR(l.validate):yp(l.validate)?u.validate=l.validate:i(a,l),yp(l.normalize)?u.normalize=l.normalize:l.normalize?i(a,l):u.normalize=bp();return}if(nR(l)){s.push(a);return}i(a,l)}}),s.forEach(function(a){!t.__compiled__[t.__schemas__[a]]||(t.__compiled__[a].validate=t.__compiled__[t.__schemas__[a]].validate,t.__compiled__[a].normalize=t.__compiled__[t.__schemas__[a]].normalize)}),t.__compiled__[""]={validate:null,normalize:bp()};var o=Object.keys(t.__compiled__).filter(function(a){return a.length>0&&t.__compiled__[a]}).map(iR).join("|");t.re.schema_test=RegExp("(^|(?!_)(?:[><\uFF5C]|"+e.src_ZPCc+"))("+o+")","i"),t.re.schema_search=RegExp("(^|(?!_)(?:[><\uFF5C]|"+e.src_ZPCc+"))("+o+")","ig"),t.re.schema_at_start=RegExp("^"+t.re.schema_search.source,"i"),t.re.pretest=RegExp("("+t.re.schema_test.source+")|("+t.re.host_fuzzy_test.source+")|@","i"),cR(t)}function dR(t,e){var n=t.__index__,r=t.__last_index__,s=t.__text_cache__.slice(n,r);this.schema=t.__schema__.toLowerCase(),this.index=n+e,this.lastIndex=r+e,this.raw=s,this.text=s,this.url=s}function zu(t,e){var n=new dR(t,e);return t.__compiled__[n.schema].normalize(n,t),n}function Vt(t,e){if(!(this instanceof Vt))return new Vt(t,e);e||oR(t)&&(e=t,t={}),this.__opts__=ju({},L0,e),this.__index__=-1,this.__last_index__=-1,this.__schema__="",this.__text_cache__="",this.__schemas__=ju({},aR,t),this.__compiled__={},this.__tlds__=uR,this.__tlds_replaced__=!1,this.re={},ra(this)}Vt.prototype.add=function(e,n){return this.__schemas__[e]=n,ra(this),this};Vt.prototype.set=function(e){return this.__opts__=ju(this.__opts__,e),this};Vt.prototype.test=function(e){if(this.__text_cache__=e,this.__index__=-1,!e.length)return!1;var n,r,s,i,o,a,l,u,c;if(this.re.schema_test.test(e)){for(l=this.re.schema_search,l.lastIndex=0;(n=l.exec(e))!==null;)if(i=this.testSchemaAt(e,n[2],l.lastIndex),i){this.__schema__=n[2],this.__index__=n.index+n[1].length,this.__last_index__=n.index+n[0].length+i;break}}return this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&(u=e.search(this.re.host_fuzzy_test),u>=0&&(this.__index__<0||u<this.__index__)&&(r=e.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))!==null&&(o=r.index+r[1].length,(this.__index__<0||o<this.__index__)&&(this.__schema__="",this.__index__=o,this.__last_index__=r.index+r[0].length))),this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&(c=e.indexOf("@"),c>=0&&(s=e.match(this.re.email_fuzzy))!==null&&(o=s.index+s[1].length,a=s.index+s[0].length,(this.__index__<0||o<this.__index__||o===this.__index__&&a>this.__last_index__)&&(this.__schema__="mailto:",this.__index__=o,this.__last_index__=a))),this.__index__>=0};Vt.prototype.pretest=function(e){return this.re.pretest.test(e)};Vt.prototype.testSchemaAt=function(e,n,r){return this.__compiled__[n.toLowerCase()]?this.__compiled__[n.toLowerCase()].validate(e,r,this):0};Vt.prototype.match=function(e){var n=0,r=[];this.__index__>=0&&this.__text_cache__===e&&(r.push(zu(this,n)),n=this.__last_index__);for(var s=n?e.slice(n):e;this.test(s);)r.push(zu(this,n)),s=s.slice(this.__last_index__),n+=this.__last_index__;return r.length?r:null};Vt.prototype.matchAtStart=function(e){if(this.__text_cache__=e,this.__index__=-1,!e.length)return null;var n=this.re.schema_at_start.exec(e);if(!n)return null;var r=this.testSchemaAt(e,n[2],n[0].length);return r&&(this.__schema__=n[2],this.__index__=n.index+n[1].length,this.__last_index__=n.index+n[0].length+r),zu(this,0)};Vt.prototype.tlds=function(e,n){return e=Array.isArray(e)?e:[e],n?(this.__tlds__=this.__tlds__.concat(e).sort().filter(function(r,s,i){return r!==i[s-1]}).reverse(),ra(this),this):(this.__tlds__=e.slice(),this.__tlds_replaced__=!0,ra(this),this)};Vt.prototype.normalize=function(e){e.schema||(e.url="http://"+e.url),e.schema==="mailto:"&&!/^mailto:/i.test(e.url)&&(e.url="mailto:"+e.url)};Vt.prototype.onCompile=function(){};var fR=Vt;const pR={};function mR(t,e){return ge(),Je("button",Mp(Mm(t.$attrs)),[ba(t.$slots,"default")],16)}var _p=fn(pR,[["render",mR]]);function gR(t,e){return ge(),_t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[ee("path",{d:"M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"})])}const vR={class:"flex justify-end"},yR=G({props:{item:{type:Object,default:null}},emits:["delete","update","save","toggle","dragged"],setup(t,{emit:e}){const n=t,r=fR(),s=l=>{var u;n.item.text=((u=i.value)==null?void 0:u.innerText)||"",e("update",n.item)},i=k(null),o=l=>{e("dragged",l.clientX,l.clientY,n.item)},a=x(()=>{const l=r.match(n.item.text);return((l==null?void 0:l.reduce((u,c)=>u.replace(c.raw,`<a onclick="window.open('${c.url}', '_blank').focus()" href="${c.url}">${c.raw}</a>`),n.item.text))||n.item.text).replace(/\n/g,"<br/>")});return(l,u)=>(ge(),Je(lt,null,[(ge(),_t(W_("p"),{onFocusout:s,contenteditable:"true",class:"prose prose-a:text-blue-600",innerHTML:pe(a),ref_key:"element",ref:i},null,8,["innerHTML"])),me("div",vR,[me("div",{class:"handle",draggable:"true",onDragend:o},[ee(pe(y1))],32),ee(_p,{title:"Delete",onClick:u[0]||(u[0]=c=>e("delete",t.item))},{default:ot(()=>[ee(pe(m1),{class:"dark:text-white bg-transparent transition-colors"})]),_:1}),ee(_p,{onClick:u[1]||(u[1]=c=>e("toggle",t.item)),title:"Share"},{default:ot(()=>[t.item.shared?(ge(),_t(pe(gR),{key:0})):(ge(),_t(pe(g1),{key:1}))]),_:1})])],64))}});var bR=fn(yR,[["__scopeId","data-v-78ca9de8"]]);const _R={class:"block text-sm font-bold mb-2"},wR=["type","placeholder"],ER=G({props:{label:{default:""},type:{default:"text"},modelValue:{default:""},placeholder:{default:""}},emits:["update:modelValue"],setup(t,{emit:e}){const r=cg(t,"modelValue",e);return(s,i)=>(ge(),Je("label",_R,[Ci(aa(t.label)+" ",1),Si(me("textarea",{class:"input",type:t.type,placeholder:t.placeholder,"onUpdate:modelValue":i[0]||(i[0]=o=>Me(r)?r.value=o:null)},null,8,wR),[[jm,pe(r)]])]))}});var IR=fn(ER,[["__scopeId","data-v-48c56649"]]);const TR={class:"mt-2 w-full"},AR=G({props:{slot:{type:Number,default:null}},emits:["save"],setup(t,{emit:e}){const n=t,r=k(""),s=()=>{e("save",r.value,n.slot),r.value=""};return(i,o)=>(ge(),Je("div",TR,[ee(IR,{modelValue:r.value,"onUpdate:modelValue":o[0]||(o[0]=a=>r.value=a),placeholder:`Enter things into ${t.slot}...`,onKeydown:zm(mc(s,["exact","prevent"]),["enter"])},null,8,["modelValue","placeholder","onKeydown"])]))}});const SR=["placeholder"],CR=G({props:{modelValue:{default:""},slotno:{default:0},updateEvent:null},emits:["update:modelValue"],setup(t,{emit:e}){const r=cg(t,"modelValue",e);return(s,i)=>(ge(),Je("label",null,[Ci(aa(t.slotno)+": ",1),Si(me("input",{class:"input",placeholder:`${t.slotno} title`,"onUpdate:modelValue":i[0]||(i[0]=o=>Me(r)?r.value=o:null),onKeydown:i[1]||(i[1]=zm(mc((...o)=>t.updateEvent&&t.updateEvent(...o),["prevent"]),["enter"])),onBlur:i[2]||(i[2]=(...o)=>t.updateEvent&&t.updateEvent(...o))},null,40,SR),[[jm,pe(r)]])]))}});var kR=fn(CR,[["__scopeId","data-v-7a414e39"]]);const M0=t=>(gm("data-v-b87ac820"),t=t(),vm(),t),DR={class:"h-full grid grid-cols-5 gap-4 divide-x"},xR=M0(()=>me("div",{class:"px-4"},[me("h2",{class:"text-2xl dark:text-white"},"Longer List"),me("p",null,"coming soon...")],-1)),RR={class:"px-4 mt-4 col-span-3"},OR=["slotno"],PR=M0(()=>me("div",{class:"px-4"},[me("h2",{class:"text-2xl dark:text-white"},"Script"),me("p",null,"coming soon...")],-1)),NR=G({props:{podcastId:{type:String,default:"smartseven"}},setup(t){const e=t,n=pi(),r=qx(),s=k(!1),{user:i,isAuthenticated:o}=mg(n),a=window.location.host==="localhost:3000"?"todaysdate2":"todaysdate",l=(h,d,f)=>{var g,y,b;const p=parseInt((b=(y=(g=document.elementFromPoint(h,d))==null?void 0:g.closest("section"))==null?void 0:y.attributes.slotno)==null?void 0:b.value);p&&(f.slot=p,r.saveData(e.podcastId,a))},u=()=>{s.value&&r.connect(e.podcastId,a)};bt(o,async h=>{h&&(s.value=!0,u())},{immediate:!0}),bt(()=>e.podcastId,u,{immediate:!0});const c={onClickSave(h,d){r.addItem({text:h,slot:d},e.podcastId,a)},onUpdateSaveDoc(){r.saveData(e.podcastId,a)},onClickDelete(h){r.removeItem(h,e.podcastId,a)},onClickUpdate(h){r.updateItem(h,e.podcastId,a)},onClickToggle(h){h.shared=!h.shared,r.updateItem(h,e.podcastId,a)}};return(h,d)=>Si((ge(),Je("main",DR,[xR,me("div",RR,[(ge(!0),Je(lt,null,eu(Array.from({length:7},(f,p)=>7-p),f=>(ge(),Je("section",{key:f,slotno:f},[ee(kR,{modelValue:pe(r).getSlotTitleList[f],"onUpdate:modelValue":p=>pe(r).getSlotTitleList[f]=p,slotno:f,updateEvent:c.onUpdateSaveDoc},null,8,["modelValue","onUpdate:modelValue","slotno","updateEvent"]),ee(AR,{onSave:c.onClickSave,slot:f},null,8,["onSave","slot"]),ee(P0,null,{default:ot(()=>[(ge(!0),Je(lt,null,eu(pe(r).getSlotList(f),p=>(ge(),_t(N0,{key:p.id},{default:ot(()=>[ee(bR,{item:p,onDelete:c.onClickDelete,onToggle:c.onClickToggle,onUpdate:c.onClickUpdate,onDragged:l},null,8,["item","onDelete","onToggle","onUpdate"])]),_:2},1024))),128))]),_:2},1024)],8,OR))),128))]),PR],512)),[[qm,s.value&&pe(o)]])}});var wp=fn(NR,[["__scopeId","data-v-b87ac820"]]);const LR={};function MR(t,e){return ge(),Je("button",pc({class:"text-white font-bold py-2 px-4 rounded transition-colors"},t.$attrs),[ba(t.$slots,"default")],16)}var FR=fn(LR,[["render",MR]]);const BR={class:"container h-screen flex justify-center items-center"},$R={class:"p-8 max-w-6xl"},VR=me("h1",{class:"font-bold text-indigo-800 dark:text-indigo-200 text-3xl text-center mb-8"},"Login",-1),UR=me("h2",{class:"font-bold text-2xl text-center dark:text-gray-50 mb-8"},"Daft Doris",-1),jR=["src","alt"],zR=G({setup(t){const e=k(null),{loginWithFirebase:n}=pi(),r=ng(),s=[{name:"Google",provider:new vn,color:"btn-login-google",icon:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoGCBUTExcTFRMYGBcYGhwZFxkZGhcaGhcZGhcZGRoXFx8aHysjGhwoIRgZJDUkKCwuMjIyGSE3PDcxOysxMi4BCwsLDw4PHBERHTMoISgyMTs5Oi4xMzE0MTYxMTE0MjkxMzEyMS4xOTExMTExMTEzMTExOTEzMTEzMTEzMTExMf/AABEIAOAA4AMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQIHBAUGAwj/xAA9EAABAgMFBQcDAwMDBQEBAAABAAIRITEDEkFh8AQiUXGxBQYygZGh0QdCYhNSwRQjcpLC8UNTgqLhc0T/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAwQFBgEC/8QAMBEAAgECBAQDBwUBAAAAAAAAAAECAwQREiExBUFRoSJhsRMUMnGBkeEGM0LB0VL/2gAMAwEAAhEDEQA/ALdY26YlN7b0xyQ196R9knOuyHOaAk50RAVSYbsimW3ReFflJgvzPsgEGwN7Cqb96mCA6Ju4U9EP3KY8UA70ruNEmbtcU7sr2NUmb9cOCARaY3sKpvN6iV6d3CmabtymPFANroC6a/KTG3ZlMNiL2PwotN+R5yQA5pcYiik916QSc+7IJubdmPdADHXZFRa0tMTRNrb0zykhr70igB7b0xyTc6IuivwoudckOc1ItgL2PygEw3aoDZ3sKobv1w4JB07uFM0A371ME70ruNEn7lMeKd2V7GuSATN2uKRbE3sKps364cEF0Ddwp6oAeb0gm10BA1SeLkx7ptZHeNfhAJjbszySe0umENdekeck3OuyHugG9wIgKoYQ2Rr6pFl2YQ1t+Z5IAa0gxNEni94fhMOvbupIcbkggGXAiAqlZ7vi+Uy2G95+qTRfrggFAxjhXyTtN7w+eCL32+SHblMf4QDDhCGNPNJgu+L5XMd4O+Vhs5LWRtbT9rSLrT+Tv4ESuH7Y70bVtMQ60uM/YyLR5nxH1VapdQp6bvyNS04PcXCTwyx6v+kWZ2r27s9gY2lsxv4xi7/S2J9loNv+oViJWdlaPzMGD3n7Ku2sAwTVGd/J/CsDcpcAt4/uNyf2X+nYWv1Ctvs2dg/yc5x9gFhP787YJgWX+lx/3LnFG0oeSh97qv8AkXo8LtI6KC7s2zfqXtkYltkf/Fw6OWw2f6pWtLTZmH/Fzm9QVXQQrftZrmVpcNtZbwXoXB2X9StldK0Y+zPEgPA82z9l03ZPbFhtE7K3Y/IOF4c2mY9F88qTHlpiCQRQiII5QUkbiS31KdXgtCXwNp/dH0o8XvD8JlwhDGnmqU7vd+9q2eDXO/VZ+1/i8nVjziFZHdvvfsu1wg65af8AbfAEn8TR3lPJWIVoy02Zj3PDa9DxYYx6r+zorPd8XlilAxjhXyUhv1wSvfbhRTGcD97w/CYcAIGqHblMUXY73n6IBMF3xfKHNJMRRAN+RQXXd3U0A3mMm19EMcBI1Q5t2Y5IDL0ygIsBHipmh4J8NMpJh96VEF1yVcUA3EEQFUNl4veaV27vammG3p0QEQDGJp7QTdPw+cJIvR3fKPJa3vB2vZ7HZF7zGMmtHic79o1JeOSisWfUISnJRisWzI7U7RstnszaWrg0AVxJ4NxJVZd5e9lrtMWMJs7L9oO+/wDzOAyHutX232rabVaG0tT/AIMHhYOAz4lYaybi7lLwx0Xqdlw7g0KCU6usuyE1sE0IVA3iaEIQiBRtKFSUbShXoW5z4QhCvlQEIQgBMFJCHp3XdHv/AGljdstoJtLOgf8AewZ/vHOfRWtsW1Wdqxr7N4eHDdcJx8+K+b11v0z7YtLDamWQJNnaOg5kyIwk5vA0niFZpVmng9jD4hwynKLqU9GsX5MulkvF5RmkQYxFP4Uhv5QSvQ3fKPNXTmBun4faSGkAQNUEXJ1Rdvb2pIBMBHipnOaHxJlTJAdflTFO/dlVAD4Q3a5IZD7q58EXLs6pXb86YIAbGM6Z0Q/8fZF69u6kiNyVUBi9q7fZ7PZOtbQgBonxJ/aOJJkqe7c7UftVqbZ5PBjcGN4DPiVtO/fbn9TbGzaf7VmSB+b/ALn8hQeuK55ZF3cZpZY7LudnwbhyoU/azXifZDQhCoG8CEJEwQ9PRRLoLZdi9h2+1H+22DIgF5oIz6fxxXa9l9xLCzAdbE2jpREYAGBjA1PtRWKVtOpqloZV1xO3tnhKWL6LV/4itw6NATyBK9Bs1o4btk88hHCKujZOyrFgiyyY3k0RxxrifVZgdGVFbjw/q+xkz/UWvgp/d/g+cbXYbRoN6yeABOLTTjyXgWkVBC+lCbsqrB7Q7FsLUf3LBj+bRGfA1Cndq+TIocdWPjh9n+D53Qrc7Y+m1hagusHOsT+07zT6zHqVXfeHu5tGxn+7Z7sYB7ZsPnhyMCoZ0pQ3RqW9/Rr6Rlr0ej/Jp0IQAoy4MDWsFan037nGzu7VtDd8wNnZkeAVvv8Ay4DDGdF9OO5VyG07Q3ekbOzI8PB7x+7gMOdLCvfb5RVujR/lI5vifEs2NKk9Ob6+SG/8fOCBCE/F7xShczii7He84clbMEGflTNDoxlTKiI35UReu7upoBvh9tcuCGQ+6uaV25OuCdy9OiAiwmO9TND4jw0ynNMuvSQDclXFANwEJVyqtf2zbwZdPidL/wAceUaevBZ9y7vamud7Rt77y7Cg5Cnz5rL4tduhbvD4nov7LFtTzT12RyPandgGLrAw/AmR5ONOR9VzW0WLrNxY5pa4VBEDrNWVrWea8Ns2SztW3bRoIw4jMGo5Y4rl6N9KOk9V3Oot+Izp6T1XcrpC3navdt7IusyXt4fcPIV8vRaJ0qrTp1IzWMXibdG4p1ljB4h7k0HFdt3V7mOddtdoHBwZjDC9wj68sD6d934uG0WrP/zDhicYYw48eUrBAuzrFa1raprPP6I5zi/F5KTo0X83/SCws2taAAGwwAA9k2T8VM+KLsd7Ukyb0qYrTOXepF5Md2mSk+H21yQHXZJBl2dUA2Q+6uai0mO9TNMsvTomXXpIBPiPDTJQ2mxY9pa5rXBwgWkAgg1BGK9Absq4pBsN7U0PU8NUVn3o+nBLr+yEAGtm4wh/gThkfVZ3cbuJ+g8W20gOe07jKtaf3uNCeAwrwh3sL06QUr32+SiVCKliXZcSuJU/ZuWnXn9xWn4+cE4CH5e8UDczii793mpSiJk/F5RSJMZeH2gpHfygi9Dd8vVAD/xrkhsITrnVKFydUFl7e1JADCfupnxQ8n7aZJk3pUxQHXZVQA4ACLa+qGgHxV9EmsuzKTm35jlNAY+32xbZuJ4QHMyHz5LnNa1JbrvBb7rWjEx9B/8AVpda+FyHHa2euocku7NOzhhFvqLWssk9az6I1rPolrWXVYZcDWsssVj23YVntLxFpjeG82EZTN6MiIcY4BZOtZ54LddiWQaC8j8RSVC6E5TgIS8C0eF0ZVbiKWy1fyIqtaVGOaLwZsLGya1gAELoAHkIDopMn4vhFyd7CqbjfphxXdGK9ROJBgKJvEPDX1QHQF3H5Sa27M8pIBsAIiapMJMnU9EObemE3OvSHugE8kSbT1Te0ARFUNddkeax27XZtMTas5X2x6pgDIYI+Kvok0kmBovB+2WTpi1s/NzflN23WREP1Gf624ea9ys+cyPZ8vD8pkCEcf5Xg3bbNtbVh5Ob8qI2uyje/Vs+PjbHqmDGZGQyfi8sERMYYfwvB+2WTv8Aq2Yhxe35T/rrKEP1GcPE2HVMrGZHu+Xh88UACETVY7Nssm/9WzMeD2/KR2qyJvfq2fHxtj1TBnuJkMMfF8IcSDAUXl/WWb4AWjI/5N9oFewddEDqK8wPQeAJtr6oYAZur6JNbdmeUkObemEAmOLjA0Te67IJufekEmOuyPNAaXvBC+0fjH3OoLWnWv5wWd22P7nl/GuXmsHWsssVwfE5Zrqb8/Q2LdYU0LWsuqNaz6J61n0S1rLqs8nJMAiI0lHl8dV0vZ7NxoOAB8zM48VzlkJ+R5+E+66l29TBdL+n4azn8kZ969kIuMbuFFJ4u0QHSu40SYLtcV05QJNAIvGqiw3pFDmxN4U+E3m9Ic0AnuLTAUTe0NmENddECkxt2ZQHBfVztB7WWVi1xa195z4GF4NugNMMImMMZKt7g4a+ei7/AOsZjabOR+1/Vq4HWsuq37GKVFNc8TEvJN1WumBG4OA1/HVO4OGvnopa1n0RrWXVXCrmZC4OA1/HVO4OGvnopa1n0S1rLqvBmYrg4DX8dU7g4a+eilrWfRGtZdUPMzIXBwGv46o/THD21Pop61n0RrWXVBmZD9McBrVcVan0r7SfbWL7O0cXGyIukmLrrgYA8oe6q/Ws+i7j6Qk/rWrZeAH0cKcamaqX0FKi/L/S1aTaqrzLJYb0ih7i0wFE3m9Ic0MddkVgG4J7Lswhjb0zySY0tMTRN7b0wgNF24f7nlrWKwNazzwW07w+JpHCHnPUVq9ay6rg+Jxy3U15+psW7xpoWtZdU9az6I1rPolrWXVZ5OelgYO8j0Psupdu0xXKMdAg568+i6fY37oJxHSRXS/p6osZw+TM+9jqmet2V7GqTDfrgkWmN7Cqk83qLpygIugbop8pvF2Y5IaQBdNflJguzKAbW3hEpMdekUntLjEUUnuDpBAVv9YxC02cfjadW+y4PWs+i7z6wtIfs8f22nrFnuuC1rLqugsv2I/Uwrz95/QNay6p61n0RrWfRGtZdVbKwtay6p61n0RrWfRLWsuqHhLWsuqNaz6I1rPojWsuq8Aa1l1RrWfRGtZ9Ea1lnigDWsuq7f6RxFtan8IU4ub6clxGtZ5YKwfo9ZQ/XefxaDzjER8gq148KEvoWbRY1olhPF2Y5IY29MpMbdmUPaXGIoueN4GvvSKTnXJDnNSeQZNr6IYQPFX1QGu7esdwHgeq0etZ9F0+02Rc1wNCD/8AFzDhCXDXp1XIceo5a6nya7o07OeMXHoLWsuqetZ9Ea1n0S1rLqsIuBrWXVb/ALFtbzbpqNH+PVaFrSTAV94/PRYdv3lsNktA1zy5xIDmsncEYEvMYCE5V4wWlwurKlcKSWK2eHRlO8lTVNuTwO4vQN3CiZF2mPFRsbVrmgggxEQROMaEFNgh4vld0ZmOIw2O9j8JNdekeckOBJiKJvMfDX0QCc67IJubdmPdDCAIGqTARN1PVAa3vB2LZ7bZ3LSIgYtc2rTxHQhcaPpuSYDaf/T38SsR4Jm2nom4xkFYpXVWksIPQgqW9ObxktSurT6bES/qR/oPp4lJ301IEf6kf6PQ1VhsMPFX1SaCDE0Unv8AX/67EfuVHp3ZXln9NSf/AOkf6D5/ckPpuYw/qf8A0xwNVYjxHw/C8O0dsZY2T7R7roa2Ljy/le+/XH/XZD3Oj07lQd7uwW7E9ln+rfe5t4iEA1tJzNTH0Wj1rPosztnb37Tb2lu+rzIftaJNaOQ/krD1rLPFbNLPkWd68zHq5c7y7BrWWeKNazyRrWeWCNayzxUhGGtZZ4q1/pZsV3ZL5q95PkAAMON5VVZsLnBoBJJAgKnkOPAK8+xdiNjYWVkKMYAedXe8Vn8RnhBR6v0NCwhjNy6L1M1rr0jzkhzrsgm4g+GvohhAk6vqsU1xFl2dUAX50wQwH7qZofH7aZIAvXt3UloO2NnuPyMxrVF0DoQlXKqxO0dnvsIPiExj/wA8lm8VtPeLdpfEtUT0Kvs5YvY5yOtYdVjdqdoWWztvWr7pq1gm90f2t/3GAHFc52z3udNmztLatNo8b0aG4wybzdE5Ca5S1tC5xe5xc503OcSS7MkzP8rmqHDpS8VTRdOf4IbzjMY+Gjq+vI3vbXei1tYss/7TImTTvuH5OrD8RDzqdAGwlDWvRGtZ9Ea1l1WtTpxprLFYI56rXqVZZpvFnd/TfvQGQ2W3dL/ovNB+BPDgVZQN6VIL56I1rHou67m9+DZBtjtR3BJlrOIHC04j8lo29xh4ZbFy1u0llntyLMvQ3dTTIuzrgobPate0ODg6IiCCDHgQVJkfupmtA1E8Rht6aQfelRDgY7tMk3w+2uSARfdlVMtuzQyH3VzSaDHepmgGBenTBIOju6kh/wCNMl49o7ZZ2NmbS0e1jW1cTD/koD1e67yqSZQgqn+oHeYbU/8ARsj/AGWOiT/3XjEcWjD14I7598H7UDY2V5lj9xMn2mR/a38fXguV1rLqtezs3F+0qb8kZd3dJrJD6setZdUa1nlgjWs8ka1lnitMzQ1rLPFGtfCNazywQBGQxkNcM0B0n067L/X2ppIiyz33UIlQTrEwwONFb167LU1zvcXsj+m2YSN+0g9wIAc0Qkw4yrA0LjRdG0iE651XP3db2lR4bLRG7aUslNY7vUCLs64IDb06JMj91M0PB+2mSqlkd+9KiV65KuKb4fbXJDIfdXPggFdu72ppwvTok2MZ0zoh/wCNMkBV/wBS+wP0rQ7Swf23mFoBRr/3cj1XGa1n0V/7Zs7bWzdZvaHBwg4cY1VN97u77titIQJsneB2X7HZj3WXc0crzLZ9jGvLfJLPHZ9jSa1l1RrWfRGtZ9Ea1l1VMoBrWXVENax6I1rPojWsuq9PTN7C7d2jZDGytN2ps3TYc4YcxVd72V9RrF4Ddos3WTsXDfZHymPQqsNaz6Ja1l1ViFecNmWqdxOnsy+ez+3tmtQP0rezfyeAfQzWe2DZgxXzuWDhr56KTXuFHuHJzh/NOqsK8fNFqPEHzR9Cvc07xcG8yFqe0+9Ox2IItNps25B193INbE4L59cSaknmSUg0a1/ypHcPkiZ3b5ItLtr6pMaCzZbEvP77TdaMIhomfMhcRbdt221PP9Ral5d4KBrHTgGigjGHotLrWaIr5hcTjNST2K9WrKosGzbEa1oo1rPLBOztL7Q/Gj/8oSPmPeKWtZZ4rsKFWNWmprZlD5i1rLPFPWs8ka1nlgjWss8VYPkNayzXYfTjsD9a1/WtGm4wgtqLz5ECOVSBkDUhaXuv2I/a7UMaDdEC84Nb+4+hAGPkSLp2LZmWTG2bGhoaIAaxx81n3t1kjkju+xetLfM80tl3PaF2dYou3t7Ukmfl7odGMqZUWIbAXr8qYp37sqofD7a5cE2QhvVzQEQy7OqLt+dMEmEnxUzQ8keGmXFAO9e3dSTBuyqhwAERVDZ+L3kgFdhvecOaxe1dgs9qs3Wdo2LT6g4EHAhZQJjA0Q+Xh84TXjSawZ5KKksHsUv3q7uWmxPMd6yJ3X/7XcD1Wl1rPor+2rZmWjSx7Q4OEwZx8uKrbvT3GfZxfswLmY2Z8Tf8eIyCzK9s46x1XoY9zZyh4oar0OJ1rLqjWs+ib2kGBBB4GR/56Ja1l1VQonjrWXVGtZ9E9az6Ja1l1X0fQa1l1RrWfRGtZ9Ea1l1Q9NbrWXVPWs0a1mlrWSslsNayTQhDwyNgtg10/C6TuXHyM/VbB7SDA64Q/hadbPYbS+279zZVq2g9DL0Wzwm6yT9lLZ7fMiqR/kTjrXVbju33dtdreA1pDIwL3A3RmeP+I4ilRve6/ce0td/aL1m2UGwF51DGH28JiuEoqy9k2ZllZtYxoaGiDQMPk9Vq3N9GHhhq+vJFi3s5S8UtF3Zi9h9l2ex2Qs2CVXOPie7Fzjx9gAAJBZ12O95w5IZPxeUZIJMYCntBYzbbxZrJJLBDJvyoi9d3dTQ6Xh9pptAIiarw9IhtydcE7l6dEmEnxUzkh8R4aZIALr0kNdckeab2gTFUMAdM19EAgy7vamgi/MIa4kwNEPN3w/KAZdHd8vRDTdrigtAERVDN7xfCAV37vNN2/TBRiYwwp5KT93w+eKA0fb3drZ9qk9kH/vbIxz4rg+3O420WMXM/uty8Xpx9grYDRCONfNKznX4VepbQnrs/Iq1bSnU12fkfPe0WD7Mwe0thKYlyjqK89az6K/tu2Gytd20s2vGYBPkaj1Wh7T7h7I+bWuYfxMvn3VWVpNbNMpSsZr4Wn2Ke1rLqmda49FZFt9M2mbLcjIth/JWC76b2ppasoal3p4FG6FRciJ2tVcistayT1rNWE36X28Z21nhQuPP7KhZ2z/SsCBftEeIa0n0MQpvZT6FhUaj5FXRXtYWD3kBjSSSAICpMgBxM5DNXN2V9Otjs5uvWhB+4gDDgI4HHErouzey7Gx3bKyawUiGiJkKuqaDHBSRt5PfQkjaze+CKk7vfT7abeDnj9Nkol0QYGJkPEaCt3xVVjd3O6Wz7KBBl98ovcAQHAxvNH2z5mQnJdE+VPlMtEI4181PCjGOvMswt4x13fmA3Kzild+7CqbN7xeWCUTGGFPJSk43G/TBAdDd8vVD93w/KYaCImqAi0XJlBZe3tSQw3vF8Ic4gwFEAy69Ic0B92RQ8BsxVNjQRE1QEWsuzPsk5t6Y5TTY69Ioe67Ic0Ay68Lor8Iabsj7Ic0ARFflDBemUAg2BvYV9UOF+mHFAdE3cKIfu0xQDvSu40ySZuVx4J3ZXsapM3q4IAuTvYVTJvUw4pF07uFE3i7RAAdAXcflJrbszykm1sReNfhJhvSKAHNvTCbnXpD3Sc4tMBRN7bswgBrrsj7JNbdmU2NvTKTHFxgaIAc29Mcppl0Rdx+Enm7IJubAXhX5QA3drjwSDJ3sKpsF6qQdO7hRAD9+mHFO9K7jRD92mKd2V7GqAiwXK48EFsTewr6IZvVwQXQN3CiAbzekPdDXXRA1Q8XZhNrYi8aoCLG3ZnlJDmXpj3Qx16R5oe67IID//2Q=="}],i={async onClickLogin(o,a){await n(o,a),localStorage.setItem("provider",a),await r.push("/")}};return(o,a)=>(ge(),Je("div",BR,[me("div",$R,[VR,UR,me("button",{type:"button",ref_key:"btnRef",ref:e},null,512),ee(P0,null,{default:ot(()=>[(ge(),Je(lt,null,eu(s,(l,u)=>ee(N0,{key:u},{default:ot(()=>[ee(FR,{class:wn(["btn-success flex items-center mx-auto w-full",[l.color]]),onClick:c=>i.onClickLogin(l.provider,l.name)},{default:ot(()=>[me("img",{class:"rounded-full w-8 h-8 mr-4",src:l.icon,alt:l.name},null,8,jR),Ci(" Login with "+aa(l.name),1)]),_:2},1032,["class","onClick"])]),_:2},1024)),64))]),_:1})])]))}});function qR(){return{async beforeEnter(t,e,n){const r=pi(),{getPersistenceFirebaseUser:s}=pi(),{isAuthenticated:i}=mg(r);try{await s("Google")}catch{n("/auth/login")}i.value?n():n("/auth/login")}}}const HR=[$({path:"/",name:"Home",component:R1,children:[{path:"",component:wp,meta:{title:"Daft Doris"}},{path:":podcastId",component:wp,meta:{title:"Daft Doris"},props:!0}]},qR()),{path:"/auth",name:"Auth",component:QE,children:[{path:"Login",component:zR}]}],KR=qE({history:oE(),routes:HR});var vs=Object.assign;function Ep(t,e){Object.entries(e).forEach(([n,r])=>{t.style[n]=r})}const WR={disappearEasing:"cubic-bezier(0.4, 0, 0.2, 1)",disappearDuration:".7s",appearEasing:"cubic-bezier(0.16, 1, 0.3, 1)",appearDuration:".8s",class:null,disabled:!1,center:!1,self:!1,noNested:!0,radius:null};function Ip(t){return vs(vs({},WR),t)}const Tp=(t,e,n,r)=>{const s=t.getBoundingClientRect(),i=e.radius||function(u,c,h,d){const[f,p]=[[h,u],[d,c]].map(([g,y])=>g>y/2?g:y-g);return(f**2+p**2)**.5}(s.width,s.height,n,r),o=function(u,c){const h=document.createElement("div");return h.className=u.class||"",h.style.borderRadius="99999px",h.style.transition=`transform ${u.appearDuration} ${u.appearEasing}`,h.style.transformOrigin="center center",h.style.transform="scale(0)",h.style.position="absolute",h.style.width=h.style.height=2*c+"px",Ep(h,u.circleStyle||{}),h}(e,i);(function(u,c,h,d){[u.style.left,u.style.top]=[c-d,h-d].map(f=>`${f}px`)})(o,n,r,i);const a=function(u){const c=document.createElement("div");return c.style.pointerEvents="none",c.style.position="absolute",c.style.overflow="hidden",c.style.borderRadius="inherit",c.style.transition=`opacity ${u.disappearDuration} ${u.disappearEasing}`,c.style.margin="0",c.style.padding="0",["left","top","right","bottom"].forEach(h=>{c.style[h]="0"}),Ep(c,u.containerStyle||{}),c}(e);var l;return a.appendChild(o),t.appendChild(a),l=()=>{o.style.transform="scale(1)"},new Promise(u=>{requestAnimationFrame(()=>{requestAnimationFrame(()=>{u(),l&&l()})})}),{hide(){a.style.opacity="0",a.addEventListener("transitionend",u=>{u.target===a&&t.removeChild(a)})}}};function F0(t,e=0){if(e>1e3)return function(...r){console.warn("[Ripple]",...r)}("noNested alghorithm error - max calls stack size exceeded"),null;if(function(r){return r.dataset.vRippleMark===""}(t))return t;const n=t.parentElement;return n?F0(n,e+1):null}function Ap(t,e){return vs(vs({},t),e)}function Sp(t){var e,n,r,s,i,o;return vs(vs({},t.value),{self:(n=t.modifiers.self)!=null?n:(e=t.value)==null?void 0:e.self,center:(s=t.modifiers.center)!=null?s:(r=t.value)==null?void 0:r.center,noNested:(o=t.modifiers["no-nested"])!=null?o:(i=t.value)==null?void 0:i.noNested})}function GR(t){const e=new WeakMap;return{mounted(n,r){const s=Sp(r),i=function(o,a){let l=Ip(a);const u=h=>l.center?function(d){const f=d.getBoundingClientRect();return[f.width/2,f.height/2]}(o):function(d,f){const p=d.getBoundingClientRect();return[f.clientX-p.x,f.clientY-p.y]}(o,h),c=h=>{if(l.disabled||l.self&&h.target!==o)return;if(l.noNested&&h.target&&h.target!==o){const y=F0(h.target);if(y&&y!==o)return}let d=Tp(o,l,...u(h));const f=()=>{d==null||d.hide(),window.removeEventListener("mouseup",f),o.removeEventListener("mouseleave",g),o.removeEventListener("mouseenter",p)},p=y=>{d=Tp(o,l,...u(y))},g=()=>{d&&(d.hide(),d=null)};window.addEventListener("mouseup",f),o.addEventListener("mouseleave",g),o.addEventListener("mouseenter",p)};return function(h){h.dataset.vRippleMark=""}(o),getComputedStyle(o).position==="static"&&(o.style.position="relative"),o.addEventListener("mousedown",c),{updateOptions(h){l=Ip(h)},unbind(){o.removeEventListener("mousedown",c),function(h){delete h.dataset.vRippleMark}(o)}}}(n,Ap(t,s));e.set(n,i)},beforeUpdate(n,r){const s=e.get(n);if(s){const i=Sp(r),o=Ap(t,i);s.updateOptions(o)}},unmounted(n){const r=e.get(n);r&&(e.delete(n),r.unbind())}}}const XR=yc("loading",()=>{const t=k(!1),e=k(!1);function n(r,s=!0){t.value=r,e.value=s}return{value:t,transparent:e,setLoading:n}}),QR=me("div",{class:"flex items-center justify-center space-x-2 animate-bounce"},[me("div",{class:"w-4 h-4 bg-blue-400 rounded-full"}),me("div",{class:"w-4 h-4 bg-green-400 rounded-full delay-300"}),me("div",{class:"w-4 h-4 bg-black rounded-full delay-700"})],-1),YR=[QR],ZR=G({setup(t){const e=XR(),n=x(()=>e.value),r=x(()=>[(e.transparent,"bg-transparent")]);return(s,i)=>(ge(),_t(li,{name:"fade"},{default:ot(()=>[Si(me("div",{class:wn(["w-screen h-screen fixed top-0 left-0 flex justify-center items-center z-50",[pe(r)]])},YR,2),[[qm,pe(n)===!0]])]),_:1}))}}),JR=G({setup(t){return(e,n)=>{const r=cc("router-view");return ge(),Je(lt,null,[ee(ZR),ee(r)],64)}}});var eO="firebase",tO="9.6.11";/**
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
 */Ht(eO,tO,"app");const B0="@firebase/installations",Ph="0.5.8";/**
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
 */const $0=1e4,V0=`w:${Ph}`,U0="FIS_v2",nO="https://firebaseinstallations.googleapis.com/v1",rO=60*60*1e3,sO="installations",iO="Installations";/**
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
 */const oO={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Cr=new Rr(sO,iO,oO);function j0(t){return t instanceof kn&&t.code.includes("request-failed")}/**
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
 */function z0({projectId:t}){return`${nO}/projects/${t}/installations`}function q0(t){return{token:t.token,requestStatus:2,expiresIn:lO(t.expiresIn),creationTime:Date.now()}}async function H0(t,e){const r=(await e.json()).error;return Cr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function K0({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function aO(t,{refreshToken:e}){const n=K0(t);return n.append("Authorization",uO(e)),n}async function W0(t){const e=await t();return e.status>=500&&e.status<600?t():e}function lO(t){return Number(t.replace("s","000"))}function uO(t){return`${U0} ${t}`}/**
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
 */async function cO({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=z0(t),s=K0(t),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={fid:n,authVersion:U0,appId:t.appId,sdkVersion:V0},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await W0(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:q0(u.authToken)}}else throw await H0("Create Installation",l)}/**
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
 */function G0(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function hO(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const dO=/^[cdef][\w-]{21}$/,qu="";function fO(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=pO(t);return dO.test(n)?n:qu}catch{return qu}}function pO(t){return hO(t).substr(0,22)}/**
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
 */function rl(t){return`${t.appName}!${t.appId}`}/**
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
 */const X0=new Map;function Q0(t,e){const n=rl(t);Y0(n,e),mO(n,e)}function Y0(t,e){const n=X0.get(t);if(!!n)for(const r of n)r(e)}function mO(t,e){const n=gO();n&&n.postMessage({key:t,fid:e}),vO()}let dr=null;function gO(){return!dr&&"BroadcastChannel"in self&&(dr=new BroadcastChannel("[Firebase] FID Change"),dr.onmessage=t=>{Y0(t.data.key,t.data.fid)}),dr}function vO(){X0.size===0&&dr&&(dr.close(),dr=null)}/**
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
 */const yO="firebase-installations-database",bO=1,kr="firebase-installations-store";let Bl=null;function Nh(){return Bl||(Bl=Sg(yO,bO,(t,e)=>{switch(e){case 0:t.createObjectStore(kr)}})),Bl}async function sa(t,e){const n=rl(t),s=(await Nh()).transaction(kr,"readwrite"),i=s.objectStore(kr),o=await i.get(n);return await i.put(e,n),await s.complete,(!o||o.fid!==e.fid)&&Q0(t,e.fid),e}async function Z0(t){const e=rl(t),r=(await Nh()).transaction(kr,"readwrite");await r.objectStore(kr).delete(e),await r.complete}async function sl(t,e){const n=rl(t),s=(await Nh()).transaction(kr,"readwrite"),i=s.objectStore(kr),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.complete,a&&(!o||o.fid!==a.fid)&&Q0(t,a.fid),a}/**
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
 */async function Lh(t){let e;const n=await sl(t.appConfig,r=>{const s=_O(r),i=wO(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===qu?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function _O(t){const e=t||{fid:fO(),registrationStatus:0};return J0(e)}function wO(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Cr.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=EO(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:IO(t)}:{installationEntry:e}}async function EO(t,e){try{const n=await cO(t,e);return sa(t.appConfig,n)}catch(n){throw j0(n)&&n.customData.serverCode===409?await Z0(t.appConfig):await sa(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function IO(t){let e=await Cp(t.appConfig);for(;e.registrationStatus===1;)await G0(100),e=await Cp(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Lh(t);return r||n}return e}function Cp(t){return sl(t,e=>{if(!e)throw Cr.create("installation-not-found");return J0(e)})}function J0(t){return TO(t)?{fid:t.fid,registrationStatus:0}:t}function TO(t){return t.registrationStatus===1&&t.registrationTime+$0<Date.now()}/**
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
 */async function AO({appConfig:t,heartbeatServiceProvider:e},n){const r=SO(t,n),s=aO(t,n),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={installation:{sdkVersion:V0,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await W0(()=>fetch(r,a));if(l.ok){const u=await l.json();return q0(u)}else throw await H0("Generate Auth Token",l)}function SO(t,{fid:e}){return`${z0(t)}/${e}/authTokens:generate`}/**
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
 */async function Mh(t,e=!1){let n;const r=await sl(t.appConfig,i=>{if(!eb(i))throw Cr.create("not-registered");const o=i.authToken;if(!e&&DO(o))return i;if(o.requestStatus===1)return n=CO(t,e),i;{if(!navigator.onLine)throw Cr.create("app-offline");const a=RO(i);return n=kO(t,a),a}});return n?await n:r.authToken}async function CO(t,e){let n=await kp(t.appConfig);for(;n.authToken.requestStatus===1;)await G0(100),n=await kp(t.appConfig);const r=n.authToken;return r.requestStatus===0?Mh(t,e):r}function kp(t){return sl(t,e=>{if(!eb(e))throw Cr.create("not-registered");const n=e.authToken;return OO(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function kO(t,e){try{const n=await AO(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await sa(t.appConfig,r),n}catch(n){if(j0(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Z0(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await sa(t.appConfig,r)}throw n}}function eb(t){return t!==void 0&&t.registrationStatus===2}function DO(t){return t.requestStatus===2&&!xO(t)}function xO(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+rO}function RO(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function OO(t){return t.requestStatus===1&&t.requestTime+$0<Date.now()}/**
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
 */async function PO(t){const e=t,{installationEntry:n,registrationPromise:r}=await Lh(e);return r?r.catch(console.error):Mh(e).catch(console.error),n.fid}/**
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
 */async function NO(t,e=!1){const n=t;return await LO(n),(await Mh(n,e)).token}async function LO(t){const{registrationPromise:e}=await Lh(t);e&&await e}/**
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
 */function MO(t){if(!t||!t.options)throw $l("App Configuration");if(!t.name)throw $l("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw $l(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function $l(t){return Cr.create("missing-app-config-values",{valueName:t})}/**
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
 */const tb="installations",FO="installations-internal",BO=t=>{const e=t.getProvider("app").getImmediate(),n=MO(e),r=Or(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},$O=t=>{const e=t.getProvider("app").getImmediate(),n=Or(e,tb).getImmediate();return{getId:()=>PO(n),getToken:s=>NO(n,s)}};function VO(){cn(new en(tb,BO,"PUBLIC")),cn(new en(FO,$O,"PRIVATE"))}VO();Ht(B0,Ph);Ht(B0,Ph,"esm2017");/**
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
 */const ia="analytics",UO="firebase_id",jO="origin",zO=60*1e3,qO="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",nb="https://www.googletagmanager.com/gtag/js";/**
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
 */const Mt=new Ta("@firebase/analytics");/**
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
 */function rb(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function HO(t,e){const n=document.createElement("script");n.src=`${nb}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function KO(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function WO(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const l=(await rb(n)).find(u=>u.measurementId===s);l&&await e[l.appId]}}catch(a){Mt.error(a)}t("config",s,i)}async function GO(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await rb(n);for(const l of o){const u=a.find(h=>h.measurementId===l),c=u&&e[u.appId];if(c)i.push(c);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){Mt.error(i)}}function XO(t,e,n,r){async function s(i,o,a){try{i==="event"?await GO(t,e,n,o,a):i==="config"?await WO(t,e,n,r,o,a):t("set",o)}catch(l){Mt.error(l)}}return s}function QO(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=XO(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function YO(){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(nb))return e;return null}/**
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
 */const ZO={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},Kt=new Rr("analytics","Analytics",ZO);/**
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
 */const JO=30,eP=1e3;class tP{constructor(e={},n=eP){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const sb=new tP;function nP(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function rP(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:nP(r)},i=qO.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw Kt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function sP(t,e=sb,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw Kt.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Kt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new aP;return setTimeout(async()=>{a.abort()},n!==void 0?n:zO),ib({appId:r,apiKey:s,measurementId:i},o,a,e)}async function ib(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=sb){const{appId:i,measurementId:o}=t;try{await iP(r,e)}catch(a){if(o)return Mt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${a.message}]`),{appId:i,measurementId:o};throw a}try{const a=await rP(t);return s.deleteThrottleMetadata(i),a}catch(a){if(!oP(a)){if(s.deleteThrottleMetadata(i),o)return Mt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${a.message}]`),{appId:i,measurementId:o};throw a}const l=Number(a.customData.httpStatus)===503?Gd(n,s.intervalMillis,JO):Gd(n,s.intervalMillis),u={throttleEndTimeMillis:Date.now()+l,backoffCount:n+1};return s.setThrottleMetadata(i,u),Mt.debug(`Calling attemptFetch again in ${l} millis`),ib(t,u,r,s)}}function iP(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(Kt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function oP(t){if(!(t instanceof kn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class aP{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}/**
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
 */async function lP(){if(Eg())try{await Ig()}catch(t){return Mt.warn(Kt.create("indexeddb-unavailable",{errorInfo:t}).message),!1}else return Mt.warn(Kt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function uP(t,e,n,r,s,i,o){var a;const l=sP(t);l.then(f=>{n[f.measurementId]=f.appId,t.options.measurementId&&f.measurementId!==t.options.measurementId&&Mt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${f.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(f=>Mt.error(f)),e.push(l);const u=lP().then(f=>{if(f)return r.getId()}),[c,h]=await Promise.all([l,u]);YO()||HO(i,c.measurementId),s("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[jO]="firebase",d.update=!0,h!=null&&(d[UO]=h),s("config",c.measurementId,d),c.measurementId}/**
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
 */class cP{constructor(e){this.app=e}_delete(){return delete ni[this.app.options.appId],Promise.resolve()}}let ni={},Dp=[];const xp={};let Vl="dataLayer",hP="gtag",Rp,ob,Op=!1;function dP(){const t=[];if(bc()&&t.push("This is a browser extension environment."),WI()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Kt.create("invalid-analytics-context",{errorInfo:e});Mt.warn(n.message)}}function fP(t,e,n){dP();const r=t.options.appId;if(!r)throw Kt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Mt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Kt.create("no-api-key");if(ni[r]!=null)throw Kt.create("already-exists",{id:r});if(!Op){KO(Vl);const{wrappedGtag:i,gtagCore:o}=QO(ni,Dp,xp,Vl,hP);ob=i,Rp=o,Op=!0}return ni[r]=uP(t,Dp,xp,e,Rp,Vl,n),new cP(t)}/**
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
 */async function pP(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});t("event",n,o)}}function mP(t=wc()){t=Bt(t);const e=Or(t,ia);return e.isInitialized()?e.getImmediate():gP(t)}function gP(t,e={}){const n=Or(t,ia);if(n.isInitialized()){const s=n.getImmediate();if(ci(e,n.getOptions()))return s;throw Kt.create("already-initialized")}return n.initialize({options:e})}function vP(t,e,n,r){t=Bt(t),pP(ob,ni[t.app.options.appId],e,n,r).catch(s=>Mt.error(s))}const Pp="@firebase/analytics",Np="0.7.8";function yP(){cn(new en(ia,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return fP(r,s,n)},"PUBLIC")),cn(new en("analytics-internal",t,"PRIVATE")),Ht(Pp,Np),Ht(Pp,Np,"esm2017");function t(e){try{const n=e.getProvider(ia).getImmediate();return{logEvent:(r,s,i)=>vP(n,r,s,i)}}catch(n){throw Kt.create("interop-component-reg-failed",{reason:n})}}}yP();const bP={apiKey:"AIzaSyAXBQG6b0_AKCY63dbQlcecWNKmiLAKjiI",authDomain:"daftdoris-cns.firebaseapp.com",projectId:"daftdoris-cns",storageBucket:"daftdoris-cns.appspot.com",messagingSenderId:"785842200541",appId:"1:785842200541:web:8b34412472e7aa2feaa034",measurementId:"G-CCEL9G8W59"},_P=qT(bP);Uu();mP(_P);$w(JR).directive("ripple",GR({class:"bg-black opacity-30"})).use(MI()).use(KR).mount("#app");
