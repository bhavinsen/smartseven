var a_=Object.defineProperty,c_=Object.defineProperties;var l_=Object.getOwnPropertyDescriptors;var Oi=Object.getOwnPropertySymbols;var ph=Object.prototype.hasOwnProperty,gh=Object.prototype.propertyIsEnumerable;var dh=(t,e,n)=>e in t?a_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,$t=(t,e)=>{for(var n in e||(e={}))ph.call(e,n)&&dh(t,n,e[n]);if(Oi)for(var n of Oi(e))gh.call(e,n)&&dh(t,n,e[n]);return t},_s=(t,e)=>c_(t,l_(e));var Ha=(t,e)=>{var n={};for(var r in t)ph.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&Oi)for(var r of Oi(t))e.indexOf(r)<0&&gh.call(t,r)&&(n[r]=t[r]);return n};const u_=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}};u_();function Al(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const h_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",f_=Al(h_);function np(t){return!!t||t===""}function jo(t){if(W(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=je(r)?g_(r):jo(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(je(t))return t;if(ze(t))return t}}const d_=/;(?![^(]*\))/g,p_=/:(.+)/;function g_(t){const e={};return t.split(d_).forEach(n=>{if(n){const r=n.split(p_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function mr(t){let e="";if(je(t))e=t;else if(W(t))for(let n=0;n<t.length;n++){const r=mr(t[n]);r&&(e+=r+" ")}else if(ze(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function rp(t){if(!t)return null;let{class:e,style:n}=t;return e&&!je(e)&&(t.class=mr(e)),n&&(t.style=jo(n)),t}const Rn=t=>je(t)?t:t==null?"":W(t)||ze(t)&&(t.toString===ap||!ne(t.toString))?JSON.stringify(t,sp,2):String(t),sp=(t,e)=>e&&e.__v_isRef?sp(t,e.value):Mr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:ip(e)?{[`Set(${e.size})`]:[...e.values()]}:ze(e)&&!W(e)&&!cp(e)?String(e):e,Ie={},Pr=[],Ht=()=>{},m_=()=>!1,y_=/^on[^a-z]/,zo=t=>y_.test(t),Sl=t=>t.startsWith("onUpdate:"),nt=Object.assign,Cl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},v_=Object.prototype.hasOwnProperty,le=(t,e)=>v_.call(t,e),W=Array.isArray,Mr=t=>Ho(t)==="[object Map]",ip=t=>Ho(t)==="[object Set]",ne=t=>typeof t=="function",je=t=>typeof t=="string",kl=t=>typeof t=="symbol",ze=t=>t!==null&&typeof t=="object",op=t=>ze(t)&&ne(t.then)&&ne(t.catch),ap=Object.prototype.toString,Ho=t=>ap.call(t),__=t=>Ho(t).slice(8,-1),cp=t=>Ho(t)==="[object Object]",Dl=t=>je(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Hi=Al(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),qo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},w_=/-(\w)/g,Zt=qo(t=>t.replace(w_,(e,n)=>n?n.toUpperCase():"")),E_=/\B([A-Z])/g,yr=qo(t=>t.replace(E_,"-$1").toLowerCase()),Ko=qo(t=>t.charAt(0).toUpperCase()+t.slice(1)),qa=qo(t=>t?`on${Ko(t)}`:""),js=(t,e)=>!Object.is(t,e),qi=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},to=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},no=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let mh;const b_=()=>mh||(mh=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Et;class lp{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Et&&(this.parent=Et,this.index=(Et.scopes||(Et.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Et;try{return Et=this,e()}finally{Et=n}}}on(){Et=this}off(){Et=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function up(t){return new lp(t)}function I_(t,e=Et){e&&e.active&&e.effects.push(t)}function T_(){return Et}function A_(t){Et&&Et.cleanups.push(t)}const Rl=t=>{const e=new Set(t);return e.w=0,e.n=0,e},hp=t=>(t.w&Pn)>0,fp=t=>(t.n&Pn)>0,S_=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Pn},C_=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];hp(s)&&!fp(s)?s.delete(t):e[n++]=s,s.w&=~Pn,s.n&=~Pn}e.length=n}},Tc=new WeakMap;let Ts=0,Pn=1;const Ac=30;let jt;const Jn=Symbol(""),Sc=Symbol("");class Nl{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,I_(this,r)}run(){if(!this.active)return this.fn();let e=jt,n=Nn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=jt,jt=this,Nn=!0,Pn=1<<++Ts,Ts<=Ac?S_(this):yh(this),this.fn()}finally{Ts<=Ac&&C_(this),Pn=1<<--Ts,jt=this.parent,Nn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){jt===this?this.deferStop=!0:this.active&&(yh(this),this.onStop&&this.onStop(),this.active=!1)}}function yh(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Nn=!0;const dp=[];function is(){dp.push(Nn),Nn=!1}function os(){const t=dp.pop();Nn=t===void 0?!0:t}function Ct(t,e,n){if(Nn&&jt){let r=Tc.get(t);r||Tc.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Rl()),pp(s)}}function pp(t,e){let n=!1;Ts<=Ac?fp(t)||(t.n|=Pn,n=!hp(t)):n=!t.has(jt),n&&(t.add(jt),jt.deps.push(t))}function dn(t,e,n,r,s,i){const o=Tc.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&W(t))o.forEach((c,l)=>{(l==="length"||l>=r)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":W(t)?Dl(n)&&a.push(o.get("length")):(a.push(o.get(Jn)),Mr(t)&&a.push(o.get(Sc)));break;case"delete":W(t)||(a.push(o.get(Jn)),Mr(t)&&a.push(o.get(Sc)));break;case"set":Mr(t)&&a.push(o.get(Jn));break}if(a.length===1)a[0]&&Cc(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Cc(Rl(c))}}function Cc(t,e){for(const n of W(t)?t:[...t])(n!==jt||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const k_=Al("__proto__,__v_isRef,__isVue"),gp=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(kl)),D_=xl(),R_=xl(!1,!0),N_=xl(!0),vh=x_();function x_(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=fe(this);for(let i=0,o=this.length;i<o;i++)Ct(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(fe)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){is();const r=fe(this)[e].apply(this,n);return os(),r}}),t}function xl(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?G_:wp:e?_p:vp).get(r))return r;const o=W(r);if(!t&&o&&le(vh,s))return Reflect.get(vh,s,i);const a=Reflect.get(r,s,i);return(kl(s)?gp.has(s):k_(s))||(t||Ct(r,"get",s),e)?a:ke(a)?!o||!Dl(s)?a.value:a:ze(a)?t?Ep(a):as(a):a}}const O_=mp(),P_=mp(!0);function mp(t=!1){return function(n,r,s,i){let o=n[r];if(zs(o)&&ke(o)&&!ke(s))return!1;if(!t&&!zs(s)&&(bp(s)||(s=fe(s),o=fe(o)),!W(n)&&ke(o)&&!ke(s)))return o.value=s,!0;const a=W(n)&&Dl(r)?Number(r)<n.length:le(n,r),c=Reflect.set(n,r,s,i);return n===fe(i)&&(a?js(s,o)&&dn(n,"set",r,s):dn(n,"add",r,s)),c}}function M_(t,e){const n=le(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&dn(t,"delete",e,void 0),r}function L_(t,e){const n=Reflect.has(t,e);return(!kl(e)||!gp.has(e))&&Ct(t,"has",e),n}function F_(t){return Ct(t,"iterate",W(t)?"length":Jn),Reflect.ownKeys(t)}const yp={get:D_,set:O_,deleteProperty:M_,has:L_,ownKeys:F_},U_={get:N_,set(t,e){return!0},deleteProperty(t,e){return!0}},B_=nt({},yp,{get:R_,set:P_}),Ol=t=>t,Wo=t=>Reflect.getPrototypeOf(t);function Pi(t,e,n=!1,r=!1){t=t.__v_raw;const s=fe(t),i=fe(e);e!==i&&!n&&Ct(s,"get",e),!n&&Ct(s,"get",i);const{has:o}=Wo(s),a=r?Ol:n?Ll:Hs;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Mi(t,e=!1){const n=this.__v_raw,r=fe(n),s=fe(t);return t!==s&&!e&&Ct(r,"has",t),!e&&Ct(r,"has",s),t===s?n.has(t):n.has(t)||n.has(s)}function Li(t,e=!1){return t=t.__v_raw,!e&&Ct(fe(t),"iterate",Jn),Reflect.get(t,"size",t)}function _h(t){t=fe(t);const e=fe(this);return Wo(e).has.call(e,t)||(e.add(t),dn(e,"add",t,t)),this}function wh(t,e){e=fe(e);const n=fe(this),{has:r,get:s}=Wo(n);let i=r.call(n,t);i||(t=fe(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?js(e,o)&&dn(n,"set",t,e):dn(n,"add",t,e),this}function Eh(t){const e=fe(this),{has:n,get:r}=Wo(e);let s=n.call(e,t);s||(t=fe(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&dn(e,"delete",t,void 0),i}function bh(){const t=fe(this),e=t.size!==0,n=t.clear();return e&&dn(t,"clear",void 0,void 0),n}function Fi(t,e){return function(r,s){const i=this,o=i.__v_raw,a=fe(o),c=e?Ol:t?Ll:Hs;return!t&&Ct(a,"iterate",Jn),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function Ui(t,e,n){return function(...r){const s=this.__v_raw,i=fe(s),o=Mr(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?Ol:e?Ll:Hs;return!e&&Ct(i,"iterate",c?Sc:Jn),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function vn(t){return function(...e){return t==="delete"?!1:this}}function V_(){const t={get(i){return Pi(this,i)},get size(){return Li(this)},has:Mi,add:_h,set:wh,delete:Eh,clear:bh,forEach:Fi(!1,!1)},e={get(i){return Pi(this,i,!1,!0)},get size(){return Li(this)},has:Mi,add:_h,set:wh,delete:Eh,clear:bh,forEach:Fi(!1,!0)},n={get(i){return Pi(this,i,!0)},get size(){return Li(this,!0)},has(i){return Mi.call(this,i,!0)},add:vn("add"),set:vn("set"),delete:vn("delete"),clear:vn("clear"),forEach:Fi(!0,!1)},r={get(i){return Pi(this,i,!0,!0)},get size(){return Li(this,!0)},has(i){return Mi.call(this,i,!0)},add:vn("add"),set:vn("set"),delete:vn("delete"),clear:vn("clear"),forEach:Fi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Ui(i,!1,!1),n[i]=Ui(i,!0,!1),e[i]=Ui(i,!1,!0),r[i]=Ui(i,!0,!0)}),[t,n,e,r]}const[$_,j_,z_,H_]=V_();function Pl(t,e){const n=e?t?H_:z_:t?j_:$_;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(le(n,s)&&s in r?n:r,s,i)}const q_={get:Pl(!1,!1)},K_={get:Pl(!1,!0)},W_={get:Pl(!0,!1)},vp=new WeakMap,_p=new WeakMap,wp=new WeakMap,G_=new WeakMap;function X_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Q_(t){return t.__v_skip||!Object.isExtensible(t)?0:X_(__(t))}function as(t){return zs(t)?t:Ml(t,!1,yp,q_,vp)}function Y_(t){return Ml(t,!1,B_,K_,_p)}function Ep(t){return Ml(t,!0,U_,W_,wp)}function Ml(t,e,n,r,s){if(!ze(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Q_(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function hn(t){return zs(t)?hn(t.__v_raw):!!(t&&t.__v_isReactive)}function zs(t){return!!(t&&t.__v_isReadonly)}function bp(t){return!!(t&&t.__v_isShallow)}function Ip(t){return hn(t)||zs(t)}function fe(t){const e=t&&t.__v_raw;return e?fe(e):t}function jr(t){return to(t,"__v_skip",!0),t}const Hs=t=>ze(t)?as(t):t,Ll=t=>ze(t)?Ep(t):t;function Tp(t){Nn&&jt&&(t=fe(t),pp(t.dep||(t.dep=Rl())))}function Ap(t,e){t=fe(t),t.dep&&Cc(t.dep)}function ke(t){return!!(t&&t.__v_isRef===!0)}function Te(t){return Cp(t,!1)}function Sp(t){return Cp(t,!0)}function Cp(t,e){return ke(t)?t:new Z_(t,e)}class Z_{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:fe(e),this._value=n?e:Hs(e)}get value(){return Tp(this),this._value}set value(e){e=this.__v_isShallow?e:fe(e),js(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:Hs(e),Ap(this))}}function ue(t){return ke(t)?t.value:t}const J_={get:(t,e,n)=>ue(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ke(s)&&!ke(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function kp(t){return hn(t)?t:new Proxy(t,J_)}function ew(t){const e=W(t)?new Array(t.length):{};for(const n in t)e[n]=Dp(t,n);return e}class tw{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function Dp(t,e,n){const r=t[e];return ke(r)?r:new tw(t,e,n)}class nw{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Nl(e,()=>{this._dirty||(this._dirty=!0,Ap(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=fe(this);return Tp(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function rw(t,e,n=!1){let r,s;const i=ne(t);return i?(r=t,s=Ht):(r=t.get,s=t.set),new nw(r,s,i||!s,n)}function xn(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Go(i,e,n)}return s}function Ot(t,e,n,r){if(ne(t)){const i=xn(t,e,n,r);return i&&op(i)&&i.catch(o=>{Go(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Ot(t[i],e,n,r));return s}function Go(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){xn(c,null,10,[t,o,a]);return}}sw(t,n,s,r)}function sw(t,e,n,r=!0){console.error(t)}let ro=!1,kc=!1;const bt=[];let on=0;const Ds=[];let As=null,kr=0;const Rs=[];let Tn=null,Dr=0;const Rp=Promise.resolve();let Fl=null,Dc=null;function Pt(t){const e=Fl||Rp;return t?e.then(this?t.bind(this):t):e}function iw(t){let e=on+1,n=bt.length;for(;e<n;){const r=e+n>>>1;qs(bt[r])<t?e=r+1:n=r}return e}function Np(t){(!bt.length||!bt.includes(t,ro&&t.allowRecurse?on+1:on))&&t!==Dc&&(t.id==null?bt.push(t):bt.splice(iw(t.id),0,t),xp())}function xp(){!ro&&!kc&&(kc=!0,Fl=Rp.then(Mp))}function ow(t){const e=bt.indexOf(t);e>on&&bt.splice(e,1)}function Op(t,e,n,r){W(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),xp()}function aw(t){Op(t,As,Ds,kr)}function cw(t){Op(t,Tn,Rs,Dr)}function Ul(t,e=null){if(Ds.length){for(Dc=e,As=[...new Set(Ds)],Ds.length=0,kr=0;kr<As.length;kr++)As[kr]();As=null,kr=0,Dc=null,Ul(t,e)}}function Pp(t){if(Rs.length){const e=[...new Set(Rs)];if(Rs.length=0,Tn){Tn.push(...e);return}for(Tn=e,Tn.sort((n,r)=>qs(n)-qs(r)),Dr=0;Dr<Tn.length;Dr++)Tn[Dr]();Tn=null,Dr=0}}const qs=t=>t.id==null?1/0:t.id;function Mp(t){kc=!1,ro=!0,Ul(t),bt.sort((n,r)=>qs(n)-qs(r));const e=Ht;try{for(on=0;on<bt.length;on++){const n=bt[on];n&&n.active!==!1&&xn(n,null,14)}}finally{on=0,bt.length=0,Pp(),ro=!1,Fl=null,(bt.length||Ds.length||Rs.length)&&Mp(t)}}function lw(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ie;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=r[u]||Ie;f?s=n.map(d=>d.trim()):h&&(s=n.map(no))}let a,c=r[a=qa(e)]||r[a=qa(Zt(e))];!c&&i&&(c=r[a=qa(yr(e))]),c&&Ot(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ot(l,t,6,s)}}function Lp(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!ne(t)){const c=l=>{const u=Lp(l,e,!0);u&&(a=!0,nt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(r.set(t,null),null):(W(i)?i.forEach(c=>o[c]=null):nt(o,i),r.set(t,o),o)}function Xo(t,e){return!t||!zo(e)?!1:(e=e.slice(2).replace(/Once$/,""),le(t,e[0].toLowerCase()+e.slice(1))||le(t,yr(e))||le(t,e))}let at=null,Qo=null;function so(t){const e=at;return at=t,Qo=t&&t.type.__scopeId||null,e}function Bl(t){Qo=t}function Vl(){Qo=null}function ht(t,e=at,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Oh(-1);const i=so(e),o=t(...s);return so(i),r._d&&Oh(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Ka(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:d,ctx:g,inheritAttrs:v}=t;let _,T;const O=so(t);try{if(n.shapeFlag&4){const F=s||r;_=Xt(u.call(F,F,h,i,d,f,g)),T=c}else{const F=e;_=Xt(F.length>1?F(i,{attrs:c,slots:a,emit:l}):F(i,null)),T=e.props?c:uw(c)}}catch(F){Ns.length=0,Go(F,t,1),_=X(Lt)}let j=_;if(T&&v!==!1){const F=Object.keys(T),{shapeFlag:Y}=j;F.length&&Y&7&&(o&&F.some(Sl)&&(T=hw(T,o)),j=Mn(j,T))}return n.dirs&&(j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&(j.transition=n.transition),_=j,so(O),_}const uw=t=>{let e;for(const n in t)(n==="class"||n==="style"||zo(n))&&((e||(e={}))[n]=t[n]);return e},hw=(t,e)=>{const n={};for(const r in t)(!Sl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function fw(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Ih(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==r[f]&&!Xo(l,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Ih(r,o,l):!0:!!o;return!1}function Ih(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Xo(n,i))return!0}return!1}function dw({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const pw=t=>t.__isSuspense;function gw(t,e){e&&e.pendingBranch?W(t)?e.effects.push(...t):e.effects.push(t):cw(t)}function Lr(t,e){if(Ke){let n=Ke.provides;const r=Ke.parent&&Ke.parent.provides;r===n&&(n=Ke.provides=Object.create(r)),n[t]=e}}function Tt(t,e,n=!1){const r=Ke||at;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ne(e)?e.call(r.proxy):e}}function Yo(t,e){return $l(t,null,e)}const Th={};function Mt(t,e,n){return $l(t,e,n)}function $l(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Ie){const a=Ke;let c,l=!1,u=!1;if(ke(t)?(c=()=>t.value,l=bp(t)):hn(t)?(c=()=>t,r=!0):W(t)?(u=!0,l=t.some(hn),c=()=>t.map(T=>{if(ke(T))return T.value;if(hn(T))return Gn(T);if(ne(T))return xn(T,a,2)})):ne(t)?e?c=()=>xn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),Ot(t,a,3,[f])}:c=Ht,e&&r){const T=c;c=()=>Gn(T())}let h,f=T=>{h=_.onStop=()=>{xn(T,a,4)}};if(Ks)return f=Ht,e?n&&Ot(e,a,3,[c(),u?[]:void 0,f]):c(),Ht;let d=u?[]:Th;const g=()=>{if(!!_.active)if(e){const T=_.run();(r||l||(u?T.some((O,j)=>js(O,d[j])):js(T,d)))&&(h&&h(),Ot(e,a,3,[T,d===Th?void 0:d,f]),d=T)}else _.run()};g.allowRecurse=!!e;let v;s==="sync"?v=g:s==="post"?v=()=>gt(g,a&&a.suspense):v=()=>{!a||a.isMounted?aw(g):g()};const _=new Nl(c,v);return e?n?g():d=_.run():s==="post"?gt(_.run.bind(_),a&&a.suspense):_.run(),()=>{_.stop(),a&&a.scope&&Cl(a.scope.effects,_)}}function mw(t,e,n){const r=this.proxy,s=je(t)?t.includes(".")?Fp(r,t):()=>r[t]:t.bind(r,r);let i;ne(e)?i=e:(i=e.handler,n=e);const o=Ke;Hr(this);const a=$l(s,i.bind(r),n);return o?Hr(o):nr(),a}function Fp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Gn(t,e){if(!ze(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ke(t))Gn(t.value,e);else if(W(t))for(let n=0;n<t.length;n++)Gn(t[n],e);else if(ip(t)||Mr(t))t.forEach(n=>{Gn(n,e)});else if(cp(t))for(const n in t)Gn(t[n],e);return t}function yw(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return zr(()=>{t.isMounted=!0}),zp(()=>{t.isUnmounting=!0}),t}const xt=[Function,Array],vw={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:xt,onEnter:xt,onAfterEnter:xt,onEnterCancelled:xt,onBeforeLeave:xt,onLeave:xt,onAfterLeave:xt,onLeaveCancelled:xt,onBeforeAppear:xt,onAppear:xt,onAfterAppear:xt,onAppearCancelled:xt},setup(t,{slots:e}){const n=cs(),r=yw();let s;return()=>{const i=e.default&&Vp(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const v of i)if(v.type!==Lt){o=v;break}}const a=fe(t),{mode:c}=a;if(r.isLeaving)return Wa(o);const l=Ah(o);if(!l)return Wa(o);const u=Rc(l,a,r,n);Nc(l,u);const h=n.subTree,f=h&&Ah(h);let d=!1;const{getTransitionKey:g}=l.type;if(g){const v=g();s===void 0?s=v:v!==s&&(s=v,d=!0)}if(f&&f.type!==Lt&&(!Kn(l,f)||d)){const v=Rc(f,a,r,n);if(Nc(f,v),c==="out-in")return r.isLeaving=!0,v.afterLeave=()=>{r.isLeaving=!1,n.update()},Wa(o);c==="in-out"&&l.type!==Lt&&(v.delayLeave=(_,T,O)=>{const j=Bp(r,f);j[String(f.key)]=f,_._leaveCb=()=>{T(),_._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=O})}return o}}},Up=vw;function Bp(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Rc(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:d,onLeaveCancelled:g,onBeforeAppear:v,onAppear:_,onAfterAppear:T,onAppearCancelled:O}=e,j=String(t.key),F=Bp(n,t),Y=(N,pe)=>{N&&Ot(N,r,9,pe)},P={mode:i,persisted:o,beforeEnter(N){let pe=a;if(!n.isMounted)if(s)pe=v||a;else return;N._leaveCb&&N._leaveCb(!0);const oe=F[j];oe&&Kn(t,oe)&&oe.el._leaveCb&&oe.el._leaveCb(),Y(pe,[N])},enter(N){let pe=c,oe=l,Re=u;if(!n.isMounted)if(s)pe=_||c,oe=T||l,Re=O||u;else return;let Fe=!1;const B=N._enterCb=ye=>{Fe||(Fe=!0,ye?Y(Re,[N]):Y(oe,[N]),P.delayedLeave&&P.delayedLeave(),N._enterCb=void 0)};pe?(pe(N,B),pe.length<=1&&B()):B()},leave(N,pe){const oe=String(t.key);if(N._enterCb&&N._enterCb(!0),n.isUnmounting)return pe();Y(h,[N]);let Re=!1;const Fe=N._leaveCb=B=>{Re||(Re=!0,pe(),B?Y(g,[N]):Y(d,[N]),N._leaveCb=void 0,F[oe]===t&&delete F[oe])};F[oe]=t,f?(f(N,Fe),f.length<=1&&Fe()):Fe()},clone(N){return Rc(N,e,n,r)}};return P}function Wa(t){if(Zo(t))return t=Mn(t),t.children=null,t}function Ah(t){return Zo(t)?t.children?t.children[0]:void 0:t}function Nc(t,e){t.shapeFlag&6&&t.component?Nc(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Vp(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Ve?(o.patchFlag&128&&s++,r=r.concat(Vp(o.children,e,a))):(e||o.type!==Lt)&&r.push(a!=null?Mn(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function st(t){return ne(t)?{setup:t,name:t.name}:t}const io=t=>!!t.type.__asyncLoader,Zo=t=>t.type.__isKeepAlive;function _w(t,e){$p(t,"a",e)}function ww(t,e){$p(t,"da",e)}function $p(t,e,n=Ke){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Jo(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Zo(s.parent.vnode)&&Ew(r,e,n,s),s=s.parent}}function Ew(t,e,n,r){const s=Jo(e,t,r,!0);ea(()=>{Cl(r[e],s)},n)}function Jo(t,e,n=Ke,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;is(),Hr(n);const a=Ot(e,n,t,o);return nr(),os(),a});return r?s.unshift(i):s.push(i),i}}const mn=t=>(e,n=Ke)=>(!Ks||t==="sp")&&Jo(t,e,n),jp=mn("bm"),zr=mn("m"),bw=mn("bu"),Iw=mn("u"),zp=mn("bum"),ea=mn("um"),Tw=mn("sp"),Aw=mn("rtg"),Sw=mn("rtc");function Cw(t,e=Ke){Jo("ec",t,e)}let xc=!0;function kw(t){const e=qp(t),n=t.proxy,r=t.ctx;xc=!1,e.beforeCreate&&Sh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:g,activated:v,deactivated:_,beforeDestroy:T,beforeUnmount:O,destroyed:j,unmounted:F,render:Y,renderTracked:P,renderTriggered:N,errorCaptured:pe,serverPrefetch:oe,expose:Re,inheritAttrs:Fe,components:B,directives:ye,filters:ve}=e;if(l&&Dw(l,r,null,t.appContext.config.unwrapInjectedRef),o)for(const Se in o){const _e=o[Se];ne(_e)&&(r[Se]=_e.bind(n))}if(s){const Se=s.call(n,n);ze(Se)&&(t.data=as(Se))}if(xc=!0,i)for(const Se in i){const _e=i[Se],_t=ne(_e)?_e.bind(n,n):ne(_e.get)?_e.get.bind(n,n):Ht,br=!ne(_e)&&ne(_e.set)?_e.set.bind(n):Ht,rn=me({get:_t,set:br});Object.defineProperty(r,Se,{enumerable:!0,configurable:!0,get:()=>rn.value,set:Kt=>rn.value=Kt})}if(a)for(const Se in a)Hp(a[Se],r,n,Se);if(c){const Se=ne(c)?c.call(n):c;Reflect.ownKeys(Se).forEach(_e=>{Lr(_e,Se[_e])})}u&&Sh(u,t,"c");function Le(Se,_e){W(_e)?_e.forEach(_t=>Se(_t.bind(n))):_e&&Se(_e.bind(n))}if(Le(jp,h),Le(zr,f),Le(bw,d),Le(Iw,g),Le(_w,v),Le(ww,_),Le(Cw,pe),Le(Sw,P),Le(Aw,N),Le(zp,O),Le(ea,F),Le(Tw,oe),W(Re))if(Re.length){const Se=t.exposed||(t.exposed={});Re.forEach(_e=>{Object.defineProperty(Se,_e,{get:()=>n[_e],set:_t=>n[_e]=_t})})}else t.exposed||(t.exposed={});Y&&t.render===Ht&&(t.render=Y),Fe!=null&&(t.inheritAttrs=Fe),B&&(t.components=B),ye&&(t.directives=ye)}function Dw(t,e,n=Ht,r=!1){W(t)&&(t=Oc(t));for(const s in t){const i=t[s];let o;ze(i)?"default"in i?o=Tt(i.from||s,i.default,!0):o=Tt(i.from||s):o=Tt(i),ke(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function Sh(t,e,n){Ot(W(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Hp(t,e,n,r){const s=r.includes(".")?Fp(n,r):()=>n[r];if(je(t)){const i=e[t];ne(i)&&Mt(s,i)}else if(ne(t))Mt(s,t.bind(n));else if(ze(t))if(W(t))t.forEach(i=>Hp(i,e,n,r));else{const i=ne(t.handler)?t.handler.bind(n):e[t.handler];ne(i)&&Mt(s,i,t)}}function qp(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>oo(c,l,o,!0)),oo(c,e,o)),i.set(e,c),c}function oo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&oo(t,i,n,!0),s&&s.forEach(o=>oo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Rw[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Rw={data:Ch,props:Hn,emits:Hn,methods:Hn,computed:Hn,beforeCreate:ut,created:ut,beforeMount:ut,mounted:ut,beforeUpdate:ut,updated:ut,beforeDestroy:ut,beforeUnmount:ut,destroyed:ut,unmounted:ut,activated:ut,deactivated:ut,errorCaptured:ut,serverPrefetch:ut,components:Hn,directives:Hn,watch:xw,provide:Ch,inject:Nw};function Ch(t,e){return e?t?function(){return nt(ne(t)?t.call(this,this):t,ne(e)?e.call(this,this):e)}:e:t}function Nw(t,e){return Hn(Oc(t),Oc(e))}function Oc(t){if(W(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ut(t,e){return t?[...new Set([].concat(t,e))]:e}function Hn(t,e){return t?nt(nt(Object.create(null),t),e):e}function xw(t,e){if(!t)return e;if(!e)return t;const n=nt(Object.create(null),t);for(const r in e)n[r]=ut(t[r],e[r]);return n}function Ow(t,e,n,r=!1){const s={},i={};to(i,ta,1),t.propsDefaults=Object.create(null),Kp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Y_(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Pw(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=fe(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Xo(t.emitsOptions,f))continue;const d=e[f];if(c)if(le(i,f))d!==i[f]&&(i[f]=d,l=!0);else{const g=Zt(f);s[g]=Pc(c,a,g,d,t,!1)}else d!==i[f]&&(i[f]=d,l=!0)}}}else{Kp(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!le(e,h)&&((u=yr(h))===h||!le(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Pc(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!le(e,h)&&!0)&&(delete i[h],l=!0)}l&&dn(t,"set","$attrs")}function Kp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Hi(c))continue;const l=e[c];let u;s&&le(s,u=Zt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Xo(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=fe(n),l=a||Ie;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Pc(s,c,h,l[h],t,!le(l,h))}}return o}function Pc(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=le(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&ne(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(Hr(s),r=l[n]=c.call(null,e),nr())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===yr(n))&&(r=!0))}return r}function Wp(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!ne(t)){const u=h=>{c=!0;const[f,d]=Wp(h,e,!0);nt(o,f),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return r.set(t,Pr),Pr;if(W(i))for(let u=0;u<i.length;u++){const h=Zt(i[u]);kh(h)&&(o[h]=Ie)}else if(i)for(const u in i){const h=Zt(u);if(kh(h)){const f=i[u],d=o[h]=W(f)||ne(f)?{type:f}:f;if(d){const g=Nh(Boolean,d.type),v=Nh(String,d.type);d[0]=g>-1,d[1]=v<0||g<v,(g>-1||le(d,"default"))&&a.push(h)}}}const l=[o,a];return r.set(t,l),l}function kh(t){return t[0]!=="$"}function Dh(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Rh(t,e){return Dh(t)===Dh(e)}function Nh(t,e){return W(e)?e.findIndex(n=>Rh(n,t)):ne(e)&&Rh(e,t)?0:-1}const Gp=t=>t[0]==="_"||t==="$stable",jl=t=>W(t)?t.map(Xt):[Xt(t)],Mw=(t,e,n)=>{const r=ht((...s)=>jl(e(...s)),n);return r._c=!1,r},Xp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Gp(s))continue;const i=t[s];if(ne(i))e[s]=Mw(s,i,r);else if(i!=null){const o=jl(i);e[s]=()=>o}}},Qp=(t,e)=>{const n=jl(e);t.slots.default=()=>n},Lw=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=fe(e),to(e,"_",n)):Xp(e,t.slots={})}else t.slots={},e&&Qp(t,e);to(t.slots,ta,1)},Fw=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ie;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(nt(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Xp(e,s)),o=e}else e&&(Qp(t,e),o={default:1});if(i)for(const a in s)!Gp(a)&&!(a in o)&&delete s[a]};function hi(t,e){const n=at;if(n===null)return t;const r=ra(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=Ie]=e[i];ne(o)&&(o={mounted:o,updated:o}),o.deep&&Gn(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l})}return t}function $n(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(is(),Ot(c,n,8,[t.el,a,t,e]),os())}}function Yp(){return{app:null,config:{isNativeTag:m_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Uw=0;function Bw(t,e){return function(r,s=null){ne(r)||(r=Object.assign({},r)),s!=null&&!ze(s)&&(s=null);const i=Yp(),o=new Set;let a=!1;const c=i.app={_uid:Uw++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:i0,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&ne(l.install)?(o.add(l),l.install(c,...u)):ne(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const f=X(r,s);return f.appContext=i,u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,ra(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function Mc(t,e,n,r,s=!1){if(W(t)){t.forEach((f,d)=>Mc(f,e&&(W(e)?e[d]:e),n,r,s));return}if(io(r)&&!s)return;const i=r.shapeFlag&4?ra(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Ie?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(je(l)?(u[l]=null,le(h,l)&&(h[l]=null)):ke(l)&&(l.value=null)),ne(c))xn(c,a,12,[o,u]);else{const f=je(c),d=ke(c);if(f||d){const g=()=>{if(t.f){const v=f?u[c]:c.value;s?W(v)&&Cl(v,i):W(v)?v.includes(i)||v.push(i):f?(u[c]=[i],le(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,le(h,c)&&(h[c]=o)):ke(c)&&(c.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,gt(g,n)):g()}}}const gt=gw;function Vw(t){return $w(t)}function $w(t,e){const n=b_();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=Ht,cloneNode:g,insertStaticContent:v}=t,_=(p,m,y,b=null,E=null,C=null,x=!1,S=null,D=!!m.dynamicChildren)=>{if(p===m)return;p&&!Kn(p,m)&&(b=$(p),Nt(p,E,C,!0),p=null),m.patchFlag===-2&&(D=!1,m.dynamicChildren=null);const{type:I,ref:z,shapeFlag:L}=m;switch(I){case Kl:T(p,m,y,b);break;case Lt:O(p,m,y,b);break;case Ga:p==null&&j(m,y,b,x);break;case Ve:ye(p,m,y,b,E,C,x,S,D);break;default:L&1?P(p,m,y,b,E,C,x,S,D):L&6?ve(p,m,y,b,E,C,x,S,D):(L&64||L&128)&&I.process(p,m,y,b,E,C,x,S,D,Ce)}z!=null&&E&&Mc(z,p&&p.ref,C,m||p,!m)},T=(p,m,y,b)=>{if(p==null)r(m.el=a(m.children),y,b);else{const E=m.el=p.el;m.children!==p.children&&l(E,m.children)}},O=(p,m,y,b)=>{p==null?r(m.el=c(m.children||""),y,b):m.el=p.el},j=(p,m,y,b)=>{[p.el,p.anchor]=v(p.children,m,y,b,p.el,p.anchor)},F=({el:p,anchor:m},y,b)=>{let E;for(;p&&p!==m;)E=f(p),r(p,y,b),p=E;r(m,y,b)},Y=({el:p,anchor:m})=>{let y;for(;p&&p!==m;)y=f(p),s(p),p=y;s(m)},P=(p,m,y,b,E,C,x,S,D)=>{x=x||m.type==="svg",p==null?N(m,y,b,E,C,x,S,D):Re(p,m,E,C,x,S,D)},N=(p,m,y,b,E,C,x,S)=>{let D,I;const{type:z,props:L,shapeFlag:H,transition:Z,patchFlag:he,dirs:Oe}=p;if(p.el&&g!==void 0&&he===-1)D=p.el=g(p.el);else{if(D=p.el=o(p.type,C,L&&L.is,L),H&8?u(D,p.children):H&16&&oe(p.children,D,null,b,E,C&&z!=="foreignObject",x,S),Oe&&$n(p,null,b,"created"),L){for(const Ne in L)Ne!=="value"&&!Hi(Ne)&&i(D,Ne,null,L[Ne],C,p.children,b,E,R);"value"in L&&i(D,"value",null,L.value),(I=L.onVnodeBeforeMount)&&Gt(I,b,p)}pe(D,p,p.scopeId,x,b)}Oe&&$n(p,null,b,"beforeMount");const Ee=(!E||E&&!E.pendingBranch)&&Z&&!Z.persisted;Ee&&Z.beforeEnter(D),r(D,m,y),((I=L&&L.onVnodeMounted)||Ee||Oe)&&gt(()=>{I&&Gt(I,b,p),Ee&&Z.enter(D),Oe&&$n(p,null,b,"mounted")},E)},pe=(p,m,y,b,E)=>{if(y&&d(p,y),b)for(let C=0;C<b.length;C++)d(p,b[C]);if(E){let C=E.subTree;if(m===C){const x=E.vnode;pe(p,x,x.scopeId,x.slotScopeIds,E.parent)}}},oe=(p,m,y,b,E,C,x,S,D=0)=>{for(let I=D;I<p.length;I++){const z=p[I]=S?An(p[I]):Xt(p[I]);_(null,z,m,y,b,E,C,x,S)}},Re=(p,m,y,b,E,C,x)=>{const S=m.el=p.el;let{patchFlag:D,dynamicChildren:I,dirs:z}=m;D|=p.patchFlag&16;const L=p.props||Ie,H=m.props||Ie;let Z;y&&jn(y,!1),(Z=H.onVnodeBeforeUpdate)&&Gt(Z,y,m,p),z&&$n(m,p,y,"beforeUpdate"),y&&jn(y,!0);const he=E&&m.type!=="foreignObject";if(I?Fe(p.dynamicChildren,I,S,y,b,he,C):x||_t(p,m,S,null,y,b,he,C,!1),D>0){if(D&16)B(S,m,L,H,y,b,E);else if(D&2&&L.class!==H.class&&i(S,"class",null,H.class,E),D&4&&i(S,"style",L.style,H.style,E),D&8){const Oe=m.dynamicProps;for(let Ee=0;Ee<Oe.length;Ee++){const Ne=Oe[Ee],Vt=L[Ne],Ir=H[Ne];(Ir!==Vt||Ne==="value")&&i(S,Ne,Vt,Ir,E,p.children,y,b,R)}}D&1&&p.children!==m.children&&u(S,m.children)}else!x&&I==null&&B(S,m,L,H,y,b,E);((Z=H.onVnodeUpdated)||z)&&gt(()=>{Z&&Gt(Z,y,m,p),z&&$n(m,p,y,"updated")},b)},Fe=(p,m,y,b,E,C,x)=>{for(let S=0;S<m.length;S++){const D=p[S],I=m[S],z=D.el&&(D.type===Ve||!Kn(D,I)||D.shapeFlag&70)?h(D.el):y;_(D,I,z,null,b,E,C,x,!0)}},B=(p,m,y,b,E,C,x)=>{if(y!==b){for(const S in b){if(Hi(S))continue;const D=b[S],I=y[S];D!==I&&S!=="value"&&i(p,S,I,D,x,m.children,E,C,R)}if(y!==Ie)for(const S in y)!Hi(S)&&!(S in b)&&i(p,S,y[S],null,x,m.children,E,C,R);"value"in b&&i(p,"value",y.value,b.value)}},ye=(p,m,y,b,E,C,x,S,D)=>{const I=m.el=p?p.el:a(""),z=m.anchor=p?p.anchor:a("");let{patchFlag:L,dynamicChildren:H,slotScopeIds:Z}=m;Z&&(S=S?S.concat(Z):Z),p==null?(r(I,y,b),r(z,y,b),oe(m.children,y,z,E,C,x,S,D)):L>0&&L&64&&H&&p.dynamicChildren?(Fe(p.dynamicChildren,H,y,E,C,x,S),(m.key!=null||E&&m===E.subTree)&&Zp(p,m,!0)):_t(p,m,y,z,E,C,x,S,D)},ve=(p,m,y,b,E,C,x,S,D)=>{m.slotScopeIds=S,p==null?m.shapeFlag&512?E.ctx.activate(m,y,b,x,D):nn(m,y,b,E,C,x,D):Le(p,m,D)},nn=(p,m,y,b,E,C,x)=>{const S=p.component=Zw(p,b,E);if(Zo(p)&&(S.ctx.renderer=Ce),Jw(S),S.asyncDep){if(E&&E.registerDep(S,Se),!p.el){const D=S.subTree=X(Lt);O(null,D,m,y)}return}Se(S,p,m,y,E,C,x)},Le=(p,m,y)=>{const b=m.component=p.component;if(fw(p,m,y))if(b.asyncDep&&!b.asyncResolved){_e(b,m,y);return}else b.next=m,ow(b.update),b.update();else m.component=p.component,m.el=p.el,b.vnode=m},Se=(p,m,y,b,E,C,x)=>{const S=()=>{if(p.isMounted){let{next:z,bu:L,u:H,parent:Z,vnode:he}=p,Oe=z,Ee;jn(p,!1),z?(z.el=he.el,_e(p,z,x)):z=he,L&&qi(L),(Ee=z.props&&z.props.onVnodeBeforeUpdate)&&Gt(Ee,Z,z,he),jn(p,!0);const Ne=Ka(p),Vt=p.subTree;p.subTree=Ne,_(Vt,Ne,h(Vt.el),$(Vt),p,E,C),z.el=Ne.el,Oe===null&&dw(p,Ne.el),H&&gt(H,E),(Ee=z.props&&z.props.onVnodeUpdated)&&gt(()=>Gt(Ee,Z,z,he),E)}else{let z;const{el:L,props:H}=m,{bm:Z,m:he,parent:Oe}=p,Ee=io(m);if(jn(p,!1),Z&&qi(Z),!Ee&&(z=H&&H.onVnodeBeforeMount)&&Gt(z,Oe,m),jn(p,!0),L&&re){const Ne=()=>{p.subTree=Ka(p),re(L,p.subTree,p,E,null)};Ee?m.type.__asyncLoader().then(()=>!p.isUnmounted&&Ne()):Ne()}else{const Ne=p.subTree=Ka(p);_(null,Ne,y,b,p,E,C),m.el=Ne.el}if(he&&gt(he,E),!Ee&&(z=H&&H.onVnodeMounted)){const Ne=m;gt(()=>Gt(z,Oe,Ne),E)}m.shapeFlag&256&&p.a&&gt(p.a,E),p.isMounted=!0,m=y=b=null}},D=p.effect=new Nl(S,()=>Np(p.update),p.scope),I=p.update=D.run.bind(D);I.id=p.uid,jn(p,!0),I()},_e=(p,m,y)=>{m.component=p;const b=p.vnode.props;p.vnode=m,p.next=null,Pw(p,m.props,b,y),Fw(p,m.children,y),is(),Ul(void 0,p.update),os()},_t=(p,m,y,b,E,C,x,S,D=!1)=>{const I=p&&p.children,z=p?p.shapeFlag:0,L=m.children,{patchFlag:H,shapeFlag:Z}=m;if(H>0){if(H&128){rn(I,L,y,b,E,C,x,S,D);return}else if(H&256){br(I,L,y,b,E,C,x,S,D);return}}Z&8?(z&16&&R(I,E,C),L!==I&&u(y,L)):z&16?Z&16?rn(I,L,y,b,E,C,x,S,D):R(I,E,C,!0):(z&8&&u(y,""),Z&16&&oe(L,y,b,E,C,x,S,D))},br=(p,m,y,b,E,C,x,S,D)=>{p=p||Pr,m=m||Pr;const I=p.length,z=m.length,L=Math.min(I,z);let H;for(H=0;H<L;H++){const Z=m[H]=D?An(m[H]):Xt(m[H]);_(p[H],Z,y,null,E,C,x,S,D)}I>z?R(p,E,C,!0,!1,L):oe(m,y,b,E,C,x,S,D,L)},rn=(p,m,y,b,E,C,x,S,D)=>{let I=0;const z=m.length;let L=p.length-1,H=z-1;for(;I<=L&&I<=H;){const Z=p[I],he=m[I]=D?An(m[I]):Xt(m[I]);if(Kn(Z,he))_(Z,he,y,null,E,C,x,S,D);else break;I++}for(;I<=L&&I<=H;){const Z=p[L],he=m[H]=D?An(m[H]):Xt(m[H]);if(Kn(Z,he))_(Z,he,y,null,E,C,x,S,D);else break;L--,H--}if(I>L){if(I<=H){const Z=H+1,he=Z<z?m[Z].el:b;for(;I<=H;)_(null,m[I]=D?An(m[I]):Xt(m[I]),y,he,E,C,x,S,D),I++}}else if(I>H)for(;I<=L;)Nt(p[I],E,C,!0),I++;else{const Z=I,he=I,Oe=new Map;for(I=he;I<=H;I++){const wt=m[I]=D?An(m[I]):Xt(m[I]);wt.key!=null&&Oe.set(wt.key,I)}let Ee,Ne=0;const Vt=H-he+1;let Ir=!1,uh=0;const vs=new Array(Vt);for(I=0;I<Vt;I++)vs[I]=0;for(I=Z;I<=L;I++){const wt=p[I];if(Ne>=Vt){Nt(wt,E,C,!0);continue}let Wt;if(wt.key!=null)Wt=Oe.get(wt.key);else for(Ee=he;Ee<=H;Ee++)if(vs[Ee-he]===0&&Kn(wt,m[Ee])){Wt=Ee;break}Wt===void 0?Nt(wt,E,C,!0):(vs[Wt-he]=I+1,Wt>=uh?uh=Wt:Ir=!0,_(wt,m[Wt],y,null,E,C,x,S,D),Ne++)}const hh=Ir?jw(vs):Pr;for(Ee=hh.length-1,I=Vt-1;I>=0;I--){const wt=he+I,Wt=m[wt],fh=wt+1<z?m[wt+1].el:b;vs[I]===0?_(null,Wt,y,fh,E,C,x,S,D):Ir&&(Ee<0||I!==hh[Ee]?Kt(Wt,y,fh,2):Ee--)}}},Kt=(p,m,y,b,E=null)=>{const{el:C,type:x,transition:S,children:D,shapeFlag:I}=p;if(I&6){Kt(p.component.subTree,m,y,b);return}if(I&128){p.suspense.move(m,y,b);return}if(I&64){x.move(p,m,y,Ce);return}if(x===Ve){r(C,m,y);for(let L=0;L<D.length;L++)Kt(D[L],m,y,b);r(p.anchor,m,y);return}if(x===Ga){F(p,m,y);return}if(b!==2&&I&1&&S)if(b===0)S.beforeEnter(C),r(C,m,y),gt(()=>S.enter(C),E);else{const{leave:L,delayLeave:H,afterLeave:Z}=S,he=()=>r(C,m,y),Oe=()=>{L(C,()=>{he(),Z&&Z()})};H?H(C,he,Oe):Oe()}else r(C,m,y)},Nt=(p,m,y,b=!1,E=!1)=>{const{type:C,props:x,ref:S,children:D,dynamicChildren:I,shapeFlag:z,patchFlag:L,dirs:H}=p;if(S!=null&&Mc(S,null,y,p,!0),z&256){m.ctx.deactivate(p);return}const Z=z&1&&H,he=!io(p);let Oe;if(he&&(Oe=x&&x.onVnodeBeforeUnmount)&&Gt(Oe,m,p),z&6)U(p.component,y,b);else{if(z&128){p.suspense.unmount(y,b);return}Z&&$n(p,null,m,"beforeUnmount"),z&64?p.type.remove(p,m,y,E,Ce,b):I&&(C!==Ve||L>0&&L&64)?R(I,m,y,!1,!0):(C===Ve&&L&384||!E&&z&16)&&R(D,m,y),b&&za(p)}(he&&(Oe=x&&x.onVnodeUnmounted)||Z)&&gt(()=>{Oe&&Gt(Oe,m,p),Z&&$n(p,null,m,"unmounted")},y)},za=p=>{const{type:m,el:y,anchor:b,transition:E}=p;if(m===Ve){w(y,b);return}if(m===Ga){Y(p);return}const C=()=>{s(y),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(p.shapeFlag&1&&E&&!E.persisted){const{leave:x,delayLeave:S}=E,D=()=>x(y,C);S?S(p.el,C,D):D()}else C()},w=(p,m)=>{let y;for(;p!==m;)y=f(p),s(p),p=y;s(m)},U=(p,m,y)=>{const{bum:b,scope:E,update:C,subTree:x,um:S}=p;b&&qi(b),E.stop(),C&&(C.active=!1,Nt(x,p,m,y)),S&&gt(S,m),gt(()=>{p.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},R=(p,m,y,b=!1,E=!1,C=0)=>{for(let x=C;x<p.length;x++)Nt(p[x],m,y,b,E)},$=p=>p.shapeFlag&6?$(p.component.subTree):p.shapeFlag&128?p.suspense.next():f(p.anchor||p.el),we=(p,m,y)=>{p==null?m._vnode&&Nt(m._vnode,null,null,!0):_(m._vnode||null,p,m,null,null,null,y),Pp(),m._vnode=p},Ce={p:_,um:Nt,m:Kt,r:za,mt:nn,mc:oe,pc:_t,pbc:Fe,n:$,o:t};let ie,re;return e&&([ie,re]=e(Ce)),{render:we,hydrate:ie,createApp:Bw(we,ie)}}function jn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Zp(t,e,n=!1){const r=t.children,s=e.children;if(W(r)&&W(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=An(s[i]),a.el=o.el),n||Zp(o,a))}}function jw(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const zw=t=>t.__isTeleport,zl="components",Hw="directives";function Hl(t,e){return ql(zl,t,!0,e)||t}const Jp=Symbol();function eg(t){return je(t)?ql(zl,t,!1)||t:t||Jp}function qw(t){return ql(Hw,t)}function ql(t,e,n=!0,r=!1){const s=at||Ke;if(s){const i=s.type;if(t===zl){const a=r0(i);if(a&&(a===e||a===Zt(e)||a===Ko(Zt(e))))return i}const o=xh(s[t]||i[t],e)||xh(s.appContext[t],e);return!o&&r?i:o}}function xh(t,e){return t&&(t[e]||t[Zt(e)]||t[Ko(Zt(e))])}const Ve=Symbol(void 0),Kl=Symbol(void 0),Lt=Symbol(void 0),Ga=Symbol(void 0),Ns=[];let er=null;function G(t=!1){Ns.push(er=t?null:[])}function Kw(){Ns.pop(),er=Ns[Ns.length-1]||null}let ao=1;function Oh(t){ao+=t}function tg(t){return t.dynamicChildren=ao>0?er||Pr:null,Kw(),ao>0&&er&&er.push(t),t}function Ae(t,e,n,r,s,i){return tg(ae(t,e,n,r,s,i,!0))}function We(t,e,n,r,s){return tg(X(t,e,n,r,s,!0))}function co(t){return t?t.__v_isVNode===!0:!1}function Kn(t,e){return t.type===e.type&&t.key===e.key}const ta="__vInternal",ng=({key:t})=>t!=null?t:null,Ki=({ref:t,ref_key:e,ref_for:n})=>t!=null?je(t)||ke(t)||ne(t)?{i:at,r:t,k:e,f:!!n}:t:null;function ae(t,e=null,n=null,r=0,s=null,i=t===Ve?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ng(e),ref:e&&Ki(e),scopeId:Qo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(Wl(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=je(n)?8:16),ao>0&&!o&&er&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&er.push(c),c}const X=Ww;function Ww(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Jp)&&(t=Lt),co(t)){const a=Mn(t,e,!0);return n&&Wl(a,n),a}if(s0(t)&&(t=t.__vccOpts),e){e=rg(e);let{class:a,style:c}=e;a&&!je(a)&&(e.class=mr(a)),ze(c)&&(Ip(c)&&!W(c)&&(c=nt({},c)),e.style=jo(c))}const o=je(t)?1:pw(t)?128:zw(t)?64:ze(t)?4:ne(t)?2:0;return ae(t,e,n,r,s,o,i,!0)}function rg(t){return t?Ip(t)||ta in t?nt({},t):t:null}function Mn(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?Gl(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&ng(a),ref:e&&e.ref?n&&s?W(s)?s.concat(Ki(e)):[s,Ki(e)]:Ki(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ve?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Mn(t.ssContent),ssFallback:t.ssFallback&&Mn(t.ssFallback),el:t.el,anchor:t.anchor}}function fi(t=" ",e=0){return X(Kl,null,t,e)}function Gw(t="",e=!1){return e?(G(),We(Lt,null,t)):X(Lt,null,t)}function Xt(t){return t==null||typeof t=="boolean"?X(Lt):W(t)?X(Ve,null,t.slice()):typeof t=="object"?An(t):X(Kl,null,String(t))}function An(t){return t.el===null||t.memo?t:Mn(t)}function Wl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(W(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Wl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(ta in e)?e._ctx=at:s===3&&at&&(at.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ne(e)?(e={default:e,_ctx:at},n=32):(e=String(e),r&64?(n=16,e=[fi(e)]):n=8);t.children=e,t.shapeFlag|=n}function Gl(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=mr([e.class,r.class]));else if(s==="style")e.style=jo([e.style,r.style]);else if(zo(s)){const i=e[s],o=r[s];o&&i!==o&&!(W(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Gt(t,e,n,r=null){Ot(t,e,7,[n,r])}function tr(t,e,n,r){let s;const i=n&&n[r];if(W(t)||je(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(ze(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}function na(t,e,n={},r,s){if(at.isCE||at.parent&&io(at.parent)&&at.parent.isCE)return X("slot",e==="default"?null:{name:e},r&&r());let i=t[e];i&&i._c&&(i._d=!1),G();const o=i&&sg(i(n)),a=We(Ve,{key:n.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function sg(t){return t.some(e=>co(e)?!(e.type===Lt||e.type===Ve&&!sg(e.children)):!0)?t:null}const Lc=t=>t?ig(t)?ra(t)||t.proxy:Lc(t.parent):null,lo=nt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Lc(t.parent),$root:t=>Lc(t.root),$emit:t=>t.emit,$options:t=>qp(t),$forceUpdate:t=>()=>Np(t.update),$nextTick:t=>Pt.bind(t.proxy),$watch:t=>mw.bind(t)}),Xw={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(r!==Ie&&le(r,e))return o[e]=1,r[e];if(s!==Ie&&le(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&le(l,e))return o[e]=3,i[e];if(n!==Ie&&le(n,e))return o[e]=4,n[e];xc&&(o[e]=0)}}const u=lo[e];let h,f;if(u)return e==="$attrs"&&Ct(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ie&&le(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,le(f,e))return f[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return s!==Ie&&le(s,e)?(s[e]=n,!0):r!==Ie&&le(r,e)?(r[e]=n,!0):le(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Ie&&le(t,o)||e!==Ie&&le(e,o)||(a=i[0])&&le(a,o)||le(r,o)||le(lo,o)||le(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:le(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},Qw=Yp();let Yw=0;function Zw(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Qw,i={uid:Yw++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new lp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Wp(r,s),emitsOptions:Lp(r,s),emit:null,emitted:null,propsDefaults:Ie,inheritAttrs:r.inheritAttrs,ctx:Ie,data:Ie,props:Ie,attrs:Ie,slots:Ie,refs:Ie,setupState:Ie,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=lw.bind(null,i),t.ce&&t.ce(i),i}let Ke=null;const cs=()=>Ke||at,Hr=t=>{Ke=t,t.scope.on()},nr=()=>{Ke&&Ke.scope.off(),Ke=null};function ig(t){return t.vnode.shapeFlag&4}let Ks=!1;function Jw(t,e=!1){Ks=e;const{props:n,children:r}=t.vnode,s=ig(t);Ow(t,n,s,e),Lw(t,r);const i=s?e0(t,e):void 0;return Ks=!1,i}function e0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=jr(new Proxy(t.ctx,Xw));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?n0(t):null;Hr(t),is();const i=xn(r,t,0,[t.props,s]);if(os(),nr(),op(i)){if(i.then(nr,nr),e)return i.then(o=>{Ph(t,o,e)}).catch(o=>{Go(o,t,0)});t.asyncDep=i}else Ph(t,i,e)}else og(t,e)}function Ph(t,e,n){ne(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ze(e)&&(t.setupState=kp(e)),og(t,n)}let Mh;function og(t,e,n){const r=t.type;if(!t.render){if(!e&&Mh&&!r.render){const s=r.template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=nt(nt({isCustomElement:i,delimiters:a},o),c);r.render=Mh(s,l)}}t.render=r.render||Ht}Hr(t),is(),kw(t),os(),nr()}function t0(t){return new Proxy(t.attrs,{get(e,n){return Ct(t,"get","$attrs"),e[n]}})}function n0(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=t0(t))},slots:t.slots,emit:t.emit,expose:e}}function ra(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(kp(jr(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in lo)return lo[n](t)}}))}function r0(t){return ne(t)&&t.displayName||t.name}function s0(t){return ne(t)&&"__vccOpts"in t}const me=(t,e)=>rw(t,e,Ks);function sa(t,e,n){const r=arguments.length;return r===2?ze(e)&&!W(e)?co(e)?X(t,null,[e]):X(t,e):X(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&co(n)&&(n=[n]),X(t,e,n))}const i0="3.2.33",o0="http://www.w3.org/2000/svg",Wn=typeof document!="undefined"?document:null,Lh=Wn&&Wn.createElement("template"),a0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Wn.createElementNS(o0,t):Wn.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Wn.createTextNode(t),createComment:t=>Wn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Wn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Lh.innerHTML=r?`<svg>${t}</svg>`:t;const a=Lh.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function c0(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function l0(t,e,n){const r=t.style,s=je(n);if(n&&!s){for(const i in n)Fc(r,i,n[i]);if(e&&!je(e))for(const i in e)n[i]==null&&Fc(r,i,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const Fh=/\s*!important$/;function Fc(t,e,n){if(W(n))n.forEach(r=>Fc(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=u0(t,e);Fh.test(n)?t.setProperty(yr(r),n.replace(Fh,""),"important"):t[r]=n}}const Uh=["Webkit","Moz","ms"],Xa={};function u0(t,e){const n=Xa[e];if(n)return n;let r=Zt(e);if(r!=="filter"&&r in t)return Xa[e]=r;r=Ko(r);for(let s=0;s<Uh.length;s++){const i=Uh[s]+r;if(i in t)return Xa[e]=i}return e}const Bh="http://www.w3.org/1999/xlink";function h0(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Bh,e.slice(6,e.length)):t.setAttributeNS(Bh,e,n);else{const i=f_(e);n==null||i&&!np(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function f0(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=np(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[ag,d0]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=()=>performance.now());const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let Uc=0;const p0=Promise.resolve(),g0=()=>{Uc=0},m0=()=>Uc||(p0.then(g0),Uc=ag());function Rr(t,e,n,r){t.addEventListener(e,n,r)}function y0(t,e,n,r){t.removeEventListener(e,n,r)}function v0(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=_0(e);if(r){const l=i[e]=w0(r,s);Rr(t,a,l,c)}else o&&(y0(t,a,o,c),i[e]=void 0)}}const Vh=/(?:Once|Passive|Capture)$/;function _0(t){let e;if(Vh.test(t)){e={};let n;for(;n=t.match(Vh);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[yr(t.slice(2)),e]}function w0(t,e){const n=r=>{const s=r.timeStamp||ag();(d0||s>=n.attached-1)&&Ot(E0(r,n.value),e,5,[r])};return n.value=t,n.attached=m0(),n}function E0(t,e){if(W(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const $h=/^on[a-z]/,b0=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?c0(t,r,s):e==="style"?l0(t,n,r):zo(e)?Sl(e)||v0(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):I0(t,e,r,s))?f0(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),h0(t,e,r,s))};function I0(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&$h.test(e)&&ne(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||$h.test(e)&&je(n)?!1:e in t}const _n="transition",ws="animation",Ws=(t,{slots:e})=>sa(Up,T0(t),e);Ws.displayName="Transition";const cg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Ws.props=nt({},Up.props,cg);const zn=(t,e=[])=>{W(t)?t.forEach(n=>n(...e)):t&&t(...e)},jh=t=>t?W(t)?t.some(e=>e.length>1):t.length>1:!1;function T0(t){const e={};for(const B in t)B in cg||(e[B]=t[B]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:d=`${n}-leave-to`}=t,g=A0(s),v=g&&g[0],_=g&&g[1],{onBeforeEnter:T,onEnter:O,onEnterCancelled:j,onLeave:F,onLeaveCancelled:Y,onBeforeAppear:P=T,onAppear:N=O,onAppearCancelled:pe=j}=e,oe=(B,ye,ve)=>{Tr(B,ye?u:a),Tr(B,ye?l:o),ve&&ve()},Re=(B,ye)=>{Tr(B,d),Tr(B,f),ye&&ye()},Fe=B=>(ye,ve)=>{const nn=B?N:O,Le=()=>oe(ye,B,ve);zn(nn,[ye,Le]),zh(()=>{Tr(ye,B?c:i),wn(ye,B?u:a),jh(nn)||Hh(ye,r,v,Le)})};return nt(e,{onBeforeEnter(B){zn(T,[B]),wn(B,i),wn(B,o)},onBeforeAppear(B){zn(P,[B]),wn(B,c),wn(B,l)},onEnter:Fe(!1),onAppear:Fe(!0),onLeave(B,ye){const ve=()=>Re(B,ye);wn(B,h),k0(),wn(B,f),zh(()=>{Tr(B,h),wn(B,d),jh(F)||Hh(B,r,_,ve)}),zn(F,[B,ve])},onEnterCancelled(B){oe(B,!1),zn(j,[B])},onAppearCancelled(B){oe(B,!0),zn(pe,[B])},onLeaveCancelled(B){Re(B),zn(Y,[B])}})}function A0(t){if(t==null)return null;if(ze(t))return[Qa(t.enter),Qa(t.leave)];{const e=Qa(t);return[e,e]}}function Qa(t){return no(t)}function wn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function Tr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function zh(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let S0=0;function Hh(t,e,n,r){const s=t._endId=++S0,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=C0(t,e);if(!o)return r();const l=o+"end";let u=0;const h=()=>{t.removeEventListener(l,f),i()},f=d=>{d.target===t&&++u>=c&&h()};setTimeout(()=>{u<c&&h()},a+1),t.addEventListener(l,f)}function C0(t,e){const n=window.getComputedStyle(t),r=g=>(n[g]||"").split(", "),s=r(_n+"Delay"),i=r(_n+"Duration"),o=qh(s,i),a=r(ws+"Delay"),c=r(ws+"Duration"),l=qh(a,c);let u=null,h=0,f=0;e===_n?o>0&&(u=_n,h=o,f=i.length):e===ws?l>0&&(u=ws,h=l,f=c.length):(h=Math.max(o,l),u=h>0?o>l?_n:ws:null,f=u?u===_n?i.length:c.length:0);const d=u===_n&&/\b(transform|all)(,|$)/.test(n[_n+"Property"]);return{type:u,timeout:h,propCount:f,hasTransform:d}}function qh(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Kh(n)+Kh(t[r])))}function Kh(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function k0(){return document.body.offsetHeight}const Wh=t=>{const e=t.props["onUpdate:modelValue"];return W(e)?n=>qi(e,n):e};function D0(t){t.target.composing=!0}function Gh(t){const e=t.target;e.composing&&(e.composing=!1,R0(e,"input"))}function R0(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const lg={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Wh(s);const i=r||s.props&&s.props.type==="number";Rr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n?a=a.trim():i&&(a=no(a)),t._assign(a)}),n&&Rr(t,"change",()=>{t.value=t.value.trim()}),e||(Rr(t,"compositionstart",D0),Rr(t,"compositionend",Gh),Rr(t,"change",Gh))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Wh(i),t.composing||document.activeElement===t&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&no(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},N0=["ctrl","shift","alt","meta"],x0={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>N0.some(n=>t[`${n}Key`]&&!e.includes(n))},Xl=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=x0[e[s]];if(i&&i(n,e))return}return t(n,...r)},O0={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},ug=(t,e)=>n=>{if(!("key"in n))return;const r=yr(n.key);if(e.some(s=>s===r||O0[s]===r))return t(n)},hg={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Es(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Es(t,!0),r.enter(t)):r.leave(t,()=>{Es(t,!1)}):Es(t,e))},beforeUnmount(t,{value:e}){Es(t,e)}};function Es(t,e){t.style.display=e?t._vod:"none"}const P0=nt({patchProp:b0},a0);let Xh;function M0(){return Xh||(Xh=Vw(P0))}const L0=(...t)=>{const e=M0().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=F0(r);if(!s)return;const i=e._component;!ne(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function F0(t){return je(t)?document.querySelector(t):t}/*!
  * vue-router v4.0.14
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const fg=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",ls=t=>fg?Symbol(t):"_vr_"+t,U0=ls("rvlm"),Qh=ls("rvd"),ia=ls("r"),Ql=ls("rl"),Bc=ls("rvl"),Nr=typeof window!="undefined";function B0(t){return t.__esModule||fg&&t[Symbol.toStringTag]==="Module"}const be=Object.assign;function Ya(t,e){const n={};for(const r in e){const s=e[r];n[r]=Array.isArray(s)?s.map(t):t(s)}return n}const xs=()=>{},V0=/\/$/,$0=t=>t.replace(V0,"");function Za(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(r=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=q0(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function j0(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Yh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function z0(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&qr(e.matched[r],n.matched[s])&&dg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function qr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function dg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!H0(t[n],e[n]))return!1;return!0}function H0(t,e){return Array.isArray(t)?Zh(t,e):Array.isArray(e)?Zh(e,t):t===e}function Zh(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function q0(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],!(s===1||o==="."))if(o==="..")s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var Gs;(function(t){t.pop="pop",t.push="push"})(Gs||(Gs={}));var Os;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Os||(Os={}));function K0(t){if(!t)if(Nr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),$0(t)}const W0=/^[^#]+#/;function G0(t,e){return t.replace(W0,"#")+e}function X0(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const oa=()=>({left:window.pageXOffset,top:window.pageYOffset});function Q0(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=X0(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Jh(t,e){return(history.state?history.state.position-e:-1)+t}const Vc=new Map;function Y0(t,e){Vc.set(t,e)}function Z0(t){const e=Vc.get(t);return Vc.delete(t),e}let J0=()=>location.protocol+"//"+location.host;function pg(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Yh(c,"")}return Yh(n,t)+r+s}function eE(t,e,n,r){let s=[],i=[],o=null;const a=({state:f})=>{const d=pg(t,location),g=n.value,v=e.value;let _=0;if(f){if(n.value=d,e.value=f,o&&o===g){o=null;return}_=v?f.position-v.position:0}else r(d);s.forEach(T=>{T(n.value,g,{delta:_,type:Gs.pop,direction:_?_>0?Os.forward:Os.back:Os.unknown})})};function c(){o=n.value}function l(f){s.push(f);const d=()=>{const g=s.indexOf(f);g>-1&&s.splice(g,1)};return i.push(d),d}function u(){const{history:f}=window;!f.state||f.replaceState(be({},f.state,{scroll:oa()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function ef(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?oa():null}}function tE(t){const{history:e,location:n}=window,r={value:pg(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:J0()+t+c;try{e[u?"replaceState":"pushState"](l,"",f),s.value=l}catch(d){console.error(d),n[u?"replace":"assign"](f)}}function o(c,l){const u=be({},e.state,ef(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=be({},s.value,e.state,{forward:c,scroll:oa()});i(u.current,u,!0);const h=be({},ef(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function nE(t){t=K0(t);const e=tE(t),n=eE(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=be({location:"",base:t,go:r,createHref:G0.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function rE(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),nE(t)}function sE(t){return typeof t=="string"||t&&typeof t=="object"}function gg(t){return typeof t=="string"||typeof t=="symbol"}const En={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},mg=ls("nf");var tf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(tf||(tf={}));function Kr(t,e){return be(new Error,{type:t,[mg]:!0},e)}function bn(t,e){return t instanceof Error&&mg in t&&(e==null||!!(t.type&e))}const nf="[^/]+?",iE={sensitive:!1,strict:!1,start:!0,end:!0},oE=/[.+*?^${}()[\]/\\]/g;function aE(t,e){const n=be({},iE,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const f=l[h];let d=40+(n.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(oE,"\\$&"),d+=40;else if(f.type===1){const{value:g,repeatable:v,optional:_,regexp:T}=f;i.push({name:g,repeatable:v,optional:_});const O=T||nf;if(O!==nf){d+=10;try{new RegExp(`(${O})`)}catch(F){throw new Error(`Invalid custom RegExp for param "${g}" (${O}): `+F.message)}}let j=v?`((?:${O})(?:/(?:${O}))*)`:`(${O})`;h||(j=_&&l.length<2?`(?:/${j})`:"/"+j),_&&(j+="?"),s+=j,d+=20,_&&(d+=-8),v&&(d+=-20),O===".*"&&(d+=-50)}u.push(d)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",g=i[f-1];h[g.name]=d&&g.repeatable?d.split("/"):d}return h}function c(l){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:g,repeatable:v,optional:_}=d,T=g in l?l[g]:"";if(Array.isArray(T)&&!v)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const O=Array.isArray(T)?T.join("/"):T;if(!O)if(_)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=O}}return u}return{re:o,score:r,keys:i,parse:a,stringify:c}}function cE(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function lE(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=cE(r[n],s[n]);if(i)return i;n++}return s.length-r.length}const uE={type:0,value:""},hE=/[a-zA-Z0-9_]/;function fE(t){if(!t)return[[]];if(t==="/")return[[uE]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(d){throw new Error(`ERR (${n})/"${l}": ${d}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:c==="("?n=2:hE.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function dE(t,e,n){const r=aE(fE(t.path),n),s=be(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function pE(t,e){const n=[],r=new Map;e=sf({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,f){const d=!f,g=mE(u);g.aliasOf=f&&f.record;const v=sf(e,u),_=[g];if("alias"in u){const j=typeof u.alias=="string"?[u.alias]:u.alias;for(const F of j)_.push(be({},g,{components:f?f.record.components:g.components,path:F,aliasOf:f?f.record:g}))}let T,O;for(const j of _){const{path:F}=j;if(h&&F[0]!=="/"){const Y=h.record.path,P=Y[Y.length-1]==="/"?"":"/";j.path=h.record.path+(F&&P+F)}if(T=dE(j,h,v),f?f.alias.push(T):(O=O||T,O!==T&&O.alias.push(T),d&&u.name&&!rf(T)&&o(u.name)),"children"in g){const Y=g.children;for(let P=0;P<Y.length;P++)i(Y[P],T,f&&f.children[P])}f=f||T,c(T)}return O?()=>{o(O)}:xs}function o(u){if(gg(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&lE(u,n[h])>=0&&(u.record.path!==n[h].record.path||!yg(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!rf(u)&&r.set(u.record.name,u)}function l(u,h){let f,d={},g,v;if("name"in u&&u.name){if(f=r.get(u.name),!f)throw Kr(1,{location:u});v=f.record.name,d=be(gE(h.params,f.keys.filter(O=>!O.optional).map(O=>O.name)),u.params),g=f.stringify(d)}else if("path"in u)g=u.path,f=n.find(O=>O.re.test(g)),f&&(d=f.parse(g),v=f.record.name);else{if(f=h.name?r.get(h.name):n.find(O=>O.re.test(h.path)),!f)throw Kr(1,{location:u,currentLocation:h});v=f.record.name,d=be({},h.params,u.params),g=f.stringify(d)}const _=[];let T=f;for(;T;)_.unshift(T.record),T=T.parent;return{name:v,path:g,params:d,matched:_,meta:vE(_)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function gE(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function mE(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:yE(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function yE(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function rf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function vE(t){return t.reduce((e,n)=>be(e,n.meta),{})}function sf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function yg(t,e){return e.children.some(n=>n===t||yg(t,n))}const vg=/#/g,_E=/&/g,wE=/\//g,EE=/=/g,bE=/\?/g,_g=/\+/g,IE=/%5B/g,TE=/%5D/g,wg=/%5E/g,AE=/%60/g,Eg=/%7B/g,SE=/%7C/g,bg=/%7D/g,CE=/%20/g;function Yl(t){return encodeURI(""+t).replace(SE,"|").replace(IE,"[").replace(TE,"]")}function kE(t){return Yl(t).replace(Eg,"{").replace(bg,"}").replace(wg,"^")}function $c(t){return Yl(t).replace(_g,"%2B").replace(CE,"+").replace(vg,"%23").replace(_E,"%26").replace(AE,"`").replace(Eg,"{").replace(bg,"}").replace(wg,"^")}function DE(t){return $c(t).replace(EE,"%3D")}function RE(t){return Yl(t).replace(vg,"%23").replace(bE,"%3F")}function NE(t){return t==null?"":RE(t).replace(wE,"%2F")}function uo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function xE(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(_g," "),o=i.indexOf("="),a=uo(o<0?i:i.slice(0,o)),c=o<0?null:uo(i.slice(o+1));if(a in e){let l=e[a];Array.isArray(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function of(t){let e="";for(let n in t){const r=t[n];if(n=DE(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(r)?r.map(i=>i&&$c(i)):[r&&$c(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function OE(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Array.isArray(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}function bs(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Sn(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Kr(4,{from:n,to:e})):h instanceof Error?a(h):sE(h)?a(Kr(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Ja(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(PE(a)){const l=(a.__vccOpts||a)[e];l&&s.push(Sn(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=B0(l)?l.default:l;i.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&Sn(f,n,r,i,o)()}))}}return s}function PE(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function af(t){const e=Tt(ia),n=Tt(Ql),r=me(()=>e.resolve(ue(t.to))),s=me(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(qr.bind(null,u));if(f>-1)return f;const d=cf(c[l-2]);return l>1&&cf(u)===d&&h[h.length-1].path!==d?h.findIndex(qr.bind(null,c[l-2])):f}),i=me(()=>s.value>-1&&UE(n.params,r.value.params)),o=me(()=>s.value>-1&&s.value===n.matched.length-1&&dg(n.params,r.value.params));function a(c={}){return FE(c)?e[ue(t.replace)?"replace":"push"](ue(t.to)).catch(xs):Promise.resolve()}return{route:r,href:me(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const ME=st({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:af,setup(t,{slots:e}){const n=as(af(t)),{options:r}=Tt(ia),s=me(()=>({[lf(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[lf(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:sa("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),LE=ME;function FE(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function UE(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Array.isArray(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function cf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const lf=(t,e,n)=>t!=null?t:e!=null?e:n,BE=st({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const r=Tt(Bc),s=me(()=>t.route||r.value),i=Tt(Qh,0),o=me(()=>s.value.matched[i]);Lr(Qh,i+1),Lr(U0,o),Lr(Bc,s);const a=Te();return Mt(()=>[a.value,o.value,t.name],([c,l,u],[h,f,d])=>{l&&(l.instances[u]=c,f&&f!==l&&c&&c===h&&(l.leaveGuards.size||(l.leaveGuards=f.leaveGuards),l.updateGuards.size||(l.updateGuards=f.updateGuards))),c&&l&&(!f||!qr(l,f)||!h)&&(l.enterCallbacks[u]||[]).forEach(g=>g(c))},{flush:"post"}),()=>{const c=s.value,l=o.value,u=l&&l.components[t.name],h=t.name;if(!u)return uf(n.default,{Component:u,route:c});const f=l.props[t.name],d=f?f===!0?c.params:typeof f=="function"?f(c):f:null,v=sa(u,be({},d,e,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(l.instances[h]=null)},ref:a}));return uf(n.default,{Component:v,route:c})||v}}});function uf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const VE=BE;function $E(t){const e=pE(t.routes,t),n=t.parseQuery||xE,r=t.stringifyQuery||of,s=t.history,i=bs(),o=bs(),a=bs(),c=Sp(En);let l=En;Nr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ya.bind(null,w=>""+w),h=Ya.bind(null,NE),f=Ya.bind(null,uo);function d(w,U){let R,$;return gg(w)?(R=e.getRecordMatcher(w),$=U):$=w,e.addRoute($,R)}function g(w){const U=e.getRecordMatcher(w);U&&e.removeRoute(U)}function v(){return e.getRoutes().map(w=>w.record)}function _(w){return!!e.getRecordMatcher(w)}function T(w,U){if(U=be({},U||c.value),typeof w=="string"){const re=Za(n,w,U.path),p=e.resolve({path:re.path},U),m=s.createHref(re.fullPath);return be(re,p,{params:f(p.params),hash:uo(re.hash),redirectedFrom:void 0,href:m})}let R;if("path"in w)R=be({},w,{path:Za(n,w.path,U.path).path});else{const re=be({},w.params);for(const p in re)re[p]==null&&delete re[p];R=be({},w,{params:h(w.params)}),U.params=h(U.params)}const $=e.resolve(R,U),we=w.hash||"";$.params=u(f($.params));const Ce=j0(r,be({},w,{hash:kE(we),path:$.path})),ie=s.createHref(Ce);return be({fullPath:Ce,hash:we,query:r===of?OE(w.query):w.query||{}},$,{redirectedFrom:void 0,href:ie})}function O(w){return typeof w=="string"?Za(n,w,c.value.path):be({},w)}function j(w,U){if(l!==w)return Kr(8,{from:U,to:w})}function F(w){return N(w)}function Y(w){return F(be(O(w),{replace:!0}))}function P(w){const U=w.matched[w.matched.length-1];if(U&&U.redirect){const{redirect:R}=U;let $=typeof R=="function"?R(w):R;return typeof $=="string"&&($=$.includes("?")||$.includes("#")?$=O($):{path:$},$.params={}),be({query:w.query,hash:w.hash,params:w.params},$)}}function N(w,U){const R=l=T(w),$=c.value,we=w.state,Ce=w.force,ie=w.replace===!0,re=P(R);if(re)return N(be(O(re),{state:we,force:Ce,replace:ie}),U||R);const p=R;p.redirectedFrom=U;let m;return!Ce&&z0(r,$,R)&&(m=Kr(16,{to:p,from:$}),br($,$,!0,!1)),(m?Promise.resolve(m):oe(p,$)).catch(y=>bn(y)?bn(y,2)?y:_t(y):Se(y,p,$)).then(y=>{if(y){if(bn(y,2))return N(be(O(y.to),{state:we,force:Ce,replace:ie}),U||p)}else y=Fe(p,$,!0,ie,we);return Re(p,$,y),y})}function pe(w,U){const R=j(w,U);return R?Promise.reject(R):Promise.resolve()}function oe(w,U){let R;const[$,we,Ce]=jE(w,U);R=Ja($.reverse(),"beforeRouteLeave",w,U);for(const re of $)re.leaveGuards.forEach(p=>{R.push(Sn(p,w,U))});const ie=pe.bind(null,w,U);return R.push(ie),Ar(R).then(()=>{R=[];for(const re of i.list())R.push(Sn(re,w,U));return R.push(ie),Ar(R)}).then(()=>{R=Ja(we,"beforeRouteUpdate",w,U);for(const re of we)re.updateGuards.forEach(p=>{R.push(Sn(p,w,U))});return R.push(ie),Ar(R)}).then(()=>{R=[];for(const re of w.matched)if(re.beforeEnter&&!U.matched.includes(re))if(Array.isArray(re.beforeEnter))for(const p of re.beforeEnter)R.push(Sn(p,w,U));else R.push(Sn(re.beforeEnter,w,U));return R.push(ie),Ar(R)}).then(()=>(w.matched.forEach(re=>re.enterCallbacks={}),R=Ja(Ce,"beforeRouteEnter",w,U),R.push(ie),Ar(R))).then(()=>{R=[];for(const re of o.list())R.push(Sn(re,w,U));return R.push(ie),Ar(R)}).catch(re=>bn(re,8)?re:Promise.reject(re))}function Re(w,U,R){for(const $ of a.list())$(w,U,R)}function Fe(w,U,R,$,we){const Ce=j(w,U);if(Ce)return Ce;const ie=U===En,re=Nr?history.state:{};R&&($||ie?s.replace(w.fullPath,be({scroll:ie&&re&&re.scroll},we)):s.push(w.fullPath,we)),c.value=w,br(w,U,R,ie),_t()}let B;function ye(){B=s.listen((w,U,R)=>{const $=T(w),we=P($);if(we){N(be(we,{replace:!0}),$).catch(xs);return}l=$;const Ce=c.value;Nr&&Y0(Jh(Ce.fullPath,R.delta),oa()),oe($,Ce).catch(ie=>bn(ie,12)?ie:bn(ie,2)?(N(ie.to,$).then(re=>{bn(re,20)&&!R.delta&&R.type===Gs.pop&&s.go(-1,!1)}).catch(xs),Promise.reject()):(R.delta&&s.go(-R.delta,!1),Se(ie,$,Ce))).then(ie=>{ie=ie||Fe($,Ce,!1),ie&&(R.delta?s.go(-R.delta,!1):R.type===Gs.pop&&bn(ie,20)&&s.go(-1,!1)),Re($,Ce,ie)}).catch(xs)})}let ve=bs(),nn=bs(),Le;function Se(w,U,R){_t(w);const $=nn.list();return $.length?$.forEach(we=>we(w,U,R)):console.error(w),Promise.reject(w)}function _e(){return Le&&c.value!==En?Promise.resolve():new Promise((w,U)=>{ve.add([w,U])})}function _t(w){return Le||(Le=!w,ye(),ve.list().forEach(([U,R])=>w?R(w):U()),ve.reset()),w}function br(w,U,R,$){const{scrollBehavior:we}=t;if(!Nr||!we)return Promise.resolve();const Ce=!R&&Z0(Jh(w.fullPath,0))||($||!R)&&history.state&&history.state.scroll||null;return Pt().then(()=>we(w,U,Ce)).then(ie=>ie&&Q0(ie)).catch(ie=>Se(ie,w,U))}const rn=w=>s.go(w);let Kt;const Nt=new Set;return{currentRoute:c,addRoute:d,removeRoute:g,hasRoute:_,getRoutes:v,resolve:T,options:t,push:F,replace:Y,go:rn,back:()=>rn(-1),forward:()=>rn(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:nn.add,isReady:_e,install(w){const U=this;w.component("RouterLink",LE),w.component("RouterView",VE),w.config.globalProperties.$router=U,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>ue(c)}),Nr&&!Kt&&c.value===En&&(Kt=!0,F(s.location).catch(we=>{}));const R={};for(const we in En)R[we]=me(()=>c.value[we]);w.provide(ia,U),w.provide(Ql,as(R)),w.provide(Bc,c);const $=w.unmount;Nt.add(w),w.unmount=function(){Nt.delete(w),Nt.size<1&&(l=En,B&&B(),c.value=En,Kt=!1,Le=!1),$()}}}}function Ar(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function jE(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>qr(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>qr(l,c))||s.push(c))}return[n,r,s]}function Ig(){return Tt(ia)}function zE(){return Tt(Ql)}var Bt=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n};const HE={},qE={class:"container mx-auto"};function KE(t,e){const n=Hl("router-view");return G(),Ae("div",qE,[X(n)])}var WE=Bt(HE,[["render",KE]]),GE="/daftdoris.svg";function Tg(t){return T_()?(A_(t),!0):!1}const Ag=typeof window!="undefined",XE=t=>typeof t=="string",ec=()=>{};function QE(t,e){function n(...r){t(()=>e.apply(this,r),{fn:e,thisArg:this,args:r})}return n}const Sg=t=>t();function YE(t=Sg){const e=Te(!0);function n(){e.value=!1}function r(){e.value=!0}return{isActive:e,pause:n,resume:r,eventFilter:(...i)=>{e.value&&t(...i)}}}function ZE(t,e=!0){cs()?jp(t):e?t():Pt(t)}function JE(t,e=!0){cs()?zr(t):e?t():Pt(t)}function eb(t=!1){if(ke(t))return e=>(t.value=typeof e=="boolean"?e:!t.value,t.value);{const e=Te(t);return[e,r=>(e.value=typeof r=="boolean"?r:!e.value,e.value)]}}var hf=Object.getOwnPropertySymbols,tb=Object.prototype.hasOwnProperty,nb=Object.prototype.propertyIsEnumerable,rb=(t,e)=>{var n={};for(var r in t)tb.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&hf)for(var r of hf(t))e.indexOf(r)<0&&nb.call(t,r)&&(n[r]=t[r]);return n};function sb(t,e,n={}){const r=n,{eventFilter:s=Sg}=r,i=rb(r,["eventFilter"]);return Mt(t,QE(s,e),i)}var ib=Object.defineProperty,ob=Object.defineProperties,ab=Object.getOwnPropertyDescriptors,ho=Object.getOwnPropertySymbols,Cg=Object.prototype.hasOwnProperty,kg=Object.prototype.propertyIsEnumerable,ff=(t,e,n)=>e in t?ib(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,cb=(t,e)=>{for(var n in e||(e={}))Cg.call(e,n)&&ff(t,n,e[n]);if(ho)for(var n of ho(e))kg.call(e,n)&&ff(t,n,e[n]);return t},lb=(t,e)=>ob(t,ab(e)),ub=(t,e)=>{var n={};for(var r in t)Cg.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&ho)for(var r of ho(t))e.indexOf(r)<0&&kg.call(t,r)&&(n[r]=t[r]);return n};function hb(t,e,n={}){const r=n,{eventFilter:s}=r,i=ub(r,["eventFilter"]),{eventFilter:o,pause:a,resume:c,isActive:l}=YE(s);return{stop:sb(t,e,lb(cb({},i),{eventFilter:o})),pause:a,resume:c,isActive:l}}function fb(t){var e;const n=ue(t);return(e=n==null?void 0:n.$el)!=null?e:n}const Wr=Ag?window:void 0;function db(...t){let e,n,r,s;if(XE(t[0])?([n,r,s]=t,e=Wr):[e,n,r,s]=t,!e)return ec;let i=ec;const o=Mt(()=>fb(e),c=>{i(),c&&(c.addEventListener(n,r,s),i=()=>{c.removeEventListener(n,r,s),i=ec})},{immediate:!0,flush:"post"}),a=()=>{o(),i()};return Tg(a),a}function pb(t,e={}){const{window:n=Wr}=e;let r;const s=Te(!1),i=()=>{!n||(r||(r=n.matchMedia(t)),s.value=r.matches)};return ZE(()=>{i(),r&&("addEventListener"in r?r.addEventListener("change",i):r.addListener(i),Tg(()=>{"removeEventListener"in r?r.removeEventListener("change",i):r.removeListener(i)}))}),s}const jc=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},zc="__vueuse_ssr_handlers__";jc[zc]=jc[zc]||{};const gb=jc[zc];function Dg(t,e){return gb[t]||e}function mb(t){return t==null?"any":t instanceof Set?"set":t instanceof Map?"map":t instanceof Date?"date":typeof t=="boolean"?"boolean":typeof t=="string"?"string":typeof t=="object"||Array.isArray(t)?"object":Number.isNaN(t)?"any":"number"}const yb={boolean:{read:t=>t==="true",write:t=>String(t)},object:{read:t=>JSON.parse(t),write:t=>JSON.stringify(t)},number:{read:t=>Number.parseFloat(t),write:t=>String(t)},any:{read:t=>t,write:t=>String(t)},string:{read:t=>t,write:t=>String(t)},map:{read:t=>new Map(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t.entries()))},set:{read:t=>new Set(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t))},date:{read:t=>new Date(t),write:t=>t.toISOString()}};function vb(t,e,n,r={}){var s;const{flush:i="pre",deep:o=!0,listenToStorageChanges:a=!0,writeDefaults:c=!0,shallow:l,window:u=Wr,eventFilter:h,onError:f=P=>{console.error(P)}}=r,d=(l?Sp:Te)(e);if(!n)try{n=Dg("getDefaultStorage",()=>{var P;return(P=Wr)==null?void 0:P.localStorage})()}catch(P){f(P)}if(!n)return d;const g=ue(e),v=mb(g),_=(s=r.serializer)!=null?s:yb[v],{pause:T,resume:O}=hb(d,()=>j(d.value),{flush:i,deep:o,eventFilter:h});return u&&a&&db(u,"storage",Y),Y(),d;function j(P){try{P==null?n.removeItem(t):n.setItem(t,_.write(P))}catch(N){f(N)}}function F(P){if(!(P&&P.key!==t)){T();try{const N=P?P.newValue:n.getItem(t);return N==null?(c&&g!==null&&n.setItem(t,_.write(g)),g):typeof N!="string"?N:_.read(N)}catch(N){f(N)}finally{O()}}}function Y(P){P&&P.key!==t||(d.value=F(P))}}function Rg(t){return pb("(prefers-color-scheme: dark)",t)}var _b=Object.defineProperty,df=Object.getOwnPropertySymbols,wb=Object.prototype.hasOwnProperty,Eb=Object.prototype.propertyIsEnumerable,pf=(t,e,n)=>e in t?_b(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,bb=(t,e)=>{for(var n in e||(e={}))wb.call(e,n)&&pf(t,n,e[n]);if(df)for(var n of df(e))Eb.call(e,n)&&pf(t,n,e[n]);return t};function Ib(t={}){const{selector:e="html",attribute:n="class",window:r=Wr,storage:s,storageKey:i="vueuse-color-scheme",listenToStorageChanges:o=!0,storageRef:a}=t,c=bb({auto:"",light:"light",dark:"dark"},t.modes||{}),l=Rg({window:r}),u=me(()=>l.value?"dark":"light"),h=a||(i==null?Te("auto"):vb(i,"auto",s,{window:r,listenToStorageChanges:o})),f=me({get(){return h.value==="auto"?u.value:h.value},set(_){h.value=_}}),d=Dg("updateHTMLAttrs",(_,T,O)=>{const j=r==null?void 0:r.document.querySelector(_);if(!!j)if(T==="class"){const F=O.split(/\s/g);Object.values(c).flatMap(Y=>(Y||"").split(/\s/g)).filter(Boolean).forEach(Y=>{F.includes(Y)?j.classList.add(Y):j.classList.remove(Y)})}else j.setAttribute(T,O)});function g(_){var T;d(e,n,(T=c[_])!=null?T:_)}function v(_){t.onChanged?t.onChanged(_,g):g(_)}return Mt(f,v,{flush:"post",immediate:!0}),JE(()=>v(f.value)),f}var Tb=Object.defineProperty,Ab=Object.defineProperties,Sb=Object.getOwnPropertyDescriptors,gf=Object.getOwnPropertySymbols,Cb=Object.prototype.hasOwnProperty,kb=Object.prototype.propertyIsEnumerable,mf=(t,e,n)=>e in t?Tb(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Db=(t,e)=>{for(var n in e||(e={}))Cb.call(e,n)&&mf(t,n,e[n]);if(gf)for(var n of gf(e))kb.call(e,n)&&mf(t,n,e[n]);return t},Rb=(t,e)=>Ab(t,Sb(e));function Nb(t={}){const{valueDark:e="dark",valueLight:n="",window:r=Wr}=t,s=Ib(Rb(Db({},t),{onChanged:(a,c)=>{var l;t.onChanged?(l=t.onChanged)==null||l.call(t,a==="dark"):c(a)},modes:{dark:e,light:n}})),i=Rg({window:r});return me({get(){return s.value==="dark"},set(a){a===i.value?s.value="auto":s.value=a?"dark":"light"}})}var yf,vf;Ag&&(window==null?void 0:window.navigator)&&((yf=window==null?void 0:window.navigator)==null?void 0:yf.platform)&&/iP(ad|hone|od)/.test((vf=window==null?void 0:window.navigator)==null?void 0:vf.platform);function Ng(t,e,n,r={}){var s;const{passive:i=!1,eventName:o,deep:a=!1}=r,c=cs(),l=n||(c==null?void 0:c.emit)||((s=c==null?void 0:c.$emit)==null?void 0:s.bind(c));let u=o;if(e||(e="modelValue"),u=o||u||`update:${e}`,i){const h=Te(t[e]);return Mt(()=>t[e],f=>h.value=f),Mt(h,f=>{(f!==t[e]||a)&&l(u,f)},{deep:a}),h}else return me({get(){return t[e]},set(h){l(u,h)}})}var xb=!1;/*!
  * pinia v2.0.13
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let xg;const aa=t=>xg=t,Og=Symbol();function Hc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Ps;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Ps||(Ps={}));function Ob(){const t=up(!0),e=t.run(()=>Te({}));let n=[],r=[];const s=jr({install(i){aa(s),s._a=i,i.provide(Og,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!xb?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Pg=()=>{};function _f(t,e,n,r=Pg){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&cs()&&ea(s),s}function Sr(t,...e){t.slice().forEach(n=>{n(...e)})}function qc(t,e){for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Hc(s)&&Hc(r)&&t.hasOwnProperty(n)&&!ke(r)&&!hn(r)?t[n]=qc(s,r):t[n]=r}return t}const Pb=Symbol();function Mb(t){return!Hc(t)||!t.hasOwnProperty(Pb)}const{assign:sn}=Object;function Lb(t){return!!(ke(t)&&t.effect)}function Fb(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=s?s():{});const u=ew(n.state.value[t]);return sn(u,i,Object.keys(o||{}).reduce((h,f)=>(h[f]=jr(me(()=>{aa(n);const d=n._s.get(t);return o[f].call(d,d)})),h),{}))}return c=Mg(t,l,e,n),c.$reset=function(){const h=s?s():{};this.$patch(f=>{sn(f,h)})},c}function Mg(t,e,n={},r,s){let i;const o=n.state,a=sn({actions:{}},n),c={deep:!0};let l,u,h=jr([]),f=jr([]),d;const g=r.state.value[t];!o&&!g&&(r.state.value[t]={}),Te({});function v(P){let N;l=u=!1,typeof P=="function"?(P(r.state.value[t]),N={type:Ps.patchFunction,storeId:t,events:d}):(qc(r.state.value[t],P),N={type:Ps.patchObject,payload:P,storeId:t,events:d}),Pt().then(()=>{l=!0}),u=!0,Sr(h,N,r.state.value[t])}const _=Pg;function T(){i.stop(),h=[],f=[],r._s.delete(t)}function O(P,N){return function(){aa(r);const pe=Array.from(arguments),oe=[],Re=[];function Fe(ve){oe.push(ve)}function B(ve){Re.push(ve)}Sr(f,{args:pe,name:P,store:F,after:Fe,onError:B});let ye;try{ye=N.apply(this&&this.$id===t?this:F,pe)}catch(ve){throw Sr(Re,ve),ve}return ye instanceof Promise?ye.then(ve=>(Sr(oe,ve),ve)).catch(ve=>(Sr(Re,ve),Promise.reject(ve))):(Sr(oe,ye),ye)}}const j={_p:r,$id:t,$onAction:_f.bind(null,f),$patch:v,$reset:_,$subscribe(P,N={}){const pe=_f(h,P,N.detached,()=>oe()),oe=i.run(()=>Mt(()=>r.state.value[t],Re=>{(N.flush==="sync"?u:l)&&P({storeId:t,type:Ps.direct,events:d},Re)},sn({},c,N)));return pe},$dispose:T},F=as(sn({},j));r._s.set(t,F);const Y=r._e.run(()=>(i=up(),i.run(()=>e())));for(const P in Y){const N=Y[P];if(ke(N)&&!Lb(N)||hn(N))o||(g&&Mb(N)&&(ke(N)?N.value=g[P]:qc(N,g[P])),r.state.value[t][P]=N);else if(typeof N=="function"){const pe=O(P,N);Y[P]=pe,a.actions[P]=N}}return sn(F,Y),sn(fe(F),Y),Object.defineProperty(F,"$state",{get:()=>r.state.value[t],set:P=>{v(N=>{sn(N,P)})}}),r._p.forEach(P=>{sn(F,i.run(()=>P({store:F,app:r._a,pinia:r,options:a})))}),g&&o&&n.hydrate&&n.hydrate(F.$state,g),l=!0,u=!0,F}function ca(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,c){const l=cs();return a=a||l&&Tt(Og),a&&aa(a),a=xg,a._s.has(r)||(i?Mg(r,e,s,a):Fb(r,s,a)),a._s.get(r)}return o.$id=r,o}function Lg(t){{t=fe(t);const e={};for(const n in t){const r=t[n];(ke(r)||hn(r))&&(e[n]=Dp(t,n))}return e}}/**
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
 */const Fg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Ub=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ug={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,d=l&63;c||(d=64,o||(f=64)),r.push(n[u],n[h],n[f],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Fg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ub(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw Error();const f=i<<2|a>>4;if(r.push(f),l!==64){const d=a<<4&240|l>>2;if(r.push(d),h!==64){const g=l<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Bb=function(t){const e=Fg(t);return Ug.encodeByteArray(e,!0)},Bg=function(t){return Bb(t).replace(/\./g,"")},Vb=function(t){try{return Ug.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */class $b{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Ge(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Vg(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ge())}function Zl(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function $g(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function jb(){return Ge().indexOf("Electron/")>=0}function jg(){const t=Ge();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function zb(){return Ge().indexOf("MSAppHost/")>=0}function zg(){return typeof indexedDB=="object"}function Hg(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function Hb(){return!(typeof navigator=="undefined"||!navigator.cookieEnabled)}/**
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
 */const qb="FirebaseError";class yn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=qb,Object.setPrototypeOf(this,yn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vr.prototype.create)}}class vr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Kb(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new yn(s,a,r)}}function Kb(t,e){return t.replace(Wb,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Wb=/\{\$([^}]+)}/g;function Gb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Xs(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(wf(i)&&wf(o)){if(!Xs(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function wf(t){return t!==null&&typeof t=="object"}/**
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
 */function di(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Xb(t,e){const n=new Qb(t,e);return n.subscribe.bind(n)}class Qb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Yb(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=tc),s.error===void 0&&(s.error=tc),s.complete===void 0&&(s.complete=tc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Yb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function tc(){}/**
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
 */const Zb=1e3,Jb=2,eI=4*60*60*1e3,tI=.5;function Ef(t,e=Zb,n=Jb){const r=e*Math.pow(n,t),s=Math.round(tI*r*(Math.random()-.5)*2);return Math.min(eI,r+s)}/**
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
 */function kt(t){return t&&t._delegate?t._delegate:t}/**
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
 */function Ss(t,e){return new Promise((n,r)=>{t.onsuccess=s=>{n(s.target.result)},t.onerror=s=>{var i;r(`${e}: ${(i=s.target.error)===null||i===void 0?void 0:i.message}`)}})}class bf{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,n="readonly"){return new qg(this._db.transaction.call(this._db,e,n))}createObjectStore(e,n){return new Kg(this._db.createObjectStore(e,n))}close(){this._db.close()}}class qg{constructor(e){this._transaction=e,this.complete=new Promise((n,r)=>{this._transaction.oncomplete=function(){n()},this._transaction.onerror=()=>{r(this._transaction.error)},this._transaction.onabort=()=>{r(this._transaction.error)}})}objectStore(e){return new Kg(this._transaction.objectStore(e))}}class Kg{constructor(e){this._store=e}index(e){return new If(this._store.index(e))}createIndex(e,n,r){return new If(this._store.createIndex(e,n,r))}get(e){const n=this._store.get(e);return Ss(n,"Error reading from IndexedDB")}put(e,n){const r=this._store.put(e,n);return Ss(r,"Error writing to IndexedDB")}delete(e){const n=this._store.delete(e);return Ss(n,"Error deleting from IndexedDB")}clear(){const e=this._store.clear();return Ss(e,"Error clearing IndexedDB object store")}}class If{constructor(e){this._index=e}get(e){const n=this._index.get(e);return Ss(n,"Error reading from IndexedDB")}}function Wg(t,e,n){return new Promise((r,s)=>{try{const i=indexedDB.open(t,e);i.onsuccess=o=>{r(new bf(o.target.result))},i.onerror=o=>{var a;s(`Error opening indexedDB: ${(a=o.target.error)===null||a===void 0?void 0:a.message}`)},i.onupgradeneeded=o=>{n(new bf(i.result),o.oldVersion,o.newVersion,new qg(i.transaction))}}catch(i){s(`Error opening indexedDB: ${i.message}`)}})}class qt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const qn="[DEFAULT]";/**
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
 */class nI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new $b;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(sI(e))try{this.getOrInitializeService({instanceIdentifier:qn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=qn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qn){return this.instances.has(e)}getOptions(e=qn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:rI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=qn){return this.component?this.component.multipleInstances?e:qn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rI(t){return t===qn?void 0:t}function sI(t){return t.instantiationMode==="EAGER"}/**
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
 */class iI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new nI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var de;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(de||(de={}));const oI={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},aI=de.INFO,cI={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},lI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=cI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class la{constructor(e){this.name=e,this._logLevel=aI,this._logHandler=lI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?oI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}/**
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
 */class uI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(hI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function hI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Kc="@firebase/app",Tf="0.7.22";/**
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
 */const Jl=new la("@firebase/app"),fI="@firebase/app-compat",dI="@firebase/analytics-compat",pI="@firebase/analytics",gI="@firebase/app-check-compat",mI="@firebase/app-check",yI="@firebase/auth",vI="@firebase/auth-compat",_I="@firebase/database",wI="@firebase/database-compat",EI="@firebase/functions",bI="@firebase/functions-compat",II="@firebase/installations",TI="@firebase/installations-compat",AI="@firebase/messaging",SI="@firebase/messaging-compat",CI="@firebase/performance",kI="@firebase/performance-compat",DI="@firebase/remote-config",RI="@firebase/remote-config-compat",NI="@firebase/storage",xI="@firebase/storage-compat",OI="@firebase/firestore",PI="@firebase/firestore-compat",MI="firebase",LI="9.7.0";/**
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
 */const Gg="[DEFAULT]",FI={[Kc]:"fire-core",[fI]:"fire-core-compat",[pI]:"fire-analytics",[dI]:"fire-analytics-compat",[mI]:"fire-app-check",[gI]:"fire-app-check-compat",[yI]:"fire-auth",[vI]:"fire-auth-compat",[_I]:"fire-rtdb",[wI]:"fire-rtdb-compat",[EI]:"fire-fn",[bI]:"fire-fn-compat",[II]:"fire-iid",[TI]:"fire-iid-compat",[AI]:"fire-fcm",[SI]:"fire-fcm-compat",[CI]:"fire-perf",[kI]:"fire-perf-compat",[DI]:"fire-rc",[RI]:"fire-rc-compat",[NI]:"fire-gcs",[xI]:"fire-gcs-compat",[OI]:"fire-fst",[PI]:"fire-fst-compat","fire-js":"fire-js",[MI]:"fire-js-all"};/**
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
 */const fo=new Map,Wc=new Map;function UI(t,e){try{t.container.addComponent(e)}catch(n){Jl.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Jt(t){const e=t.name;if(Wc.has(e))return Jl.debug(`There were multiple attempts to register component ${e}.`),!1;Wc.set(e,t);for(const n of fo.values())UI(n,t);return!0}function _r(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const BI={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},or=new vr("app","Firebase",BI);/**
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
 */class VI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new qt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw or.create("app-deleted",{appName:this._name})}}/**
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
 */const pi=LI;function $I(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Gg,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw or.create("bad-app-name",{appName:String(r)});const s=fo.get(r);if(s){if(Xs(t,s.options)&&Xs(n,s.config))return s;throw or.create("duplicate-app",{appName:r})}const i=new iI(r);for(const a of Wc.values())i.addComponent(a);const o=new VI(t,n,i);return fo.set(r,o),o}function eu(t=Gg){const e=fo.get(t);if(!e)throw or.create("no-app",{appName:t});return e}function Ft(t,e,n){var r;let s=(r=FI[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Jl.warn(a.join(" "));return}Jt(new qt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const jI="firebase-heartbeat-database",zI=1,Qs="firebase-heartbeat-store";let nc=null;function Xg(){return nc||(nc=Wg(jI,zI,(t,e)=>{switch(e){case 0:t.createObjectStore(Qs)}}).catch(t=>{throw or.create("storage-open",{originalErrorMessage:t.message})})),nc}async function HI(t){try{return(await Xg()).transaction(Qs).objectStore(Qs).get(Qg(t))}catch(e){throw or.create("storage-get",{originalErrorMessage:e.message})}}async function Af(t,e){try{const r=(await Xg()).transaction(Qs,"readwrite");return await r.objectStore(Qs).put(e,Qg(t)),r.complete}catch(n){throw or.create("storage-set",{originalErrorMessage:n.message})}}function Qg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const qI=1024,KI=30*24*60*60*1e3;class WI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new XI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Sf();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=KI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Sf(),{heartbeatsToSend:n,unsentEntries:r}=GI(this._heartbeatsCache.heartbeats),s=Bg(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Sf(){return new Date().toISOString().substring(0,10)}function GI(t,e=qI){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Cf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Cf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class XI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zg()?Hg().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await HI(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Af(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Af(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Cf(t){return Bg(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function QI(t){Jt(new qt("platform-logger",e=>new uI(e),"PRIVATE")),Jt(new qt("heartbeat",e=>new WI(e),"PRIVATE")),Ft(Kc,Tf,t),Ft(Kc,Tf,"esm2017"),Ft("fire-js","")}QI("");function tu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Yg(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const YI=Yg,Zg=new vr("auth","Firebase",Yg());/**
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
 */const kf=new la("@firebase/auth");function Wi(t,...e){kf.logLevel<=de.ERROR&&kf.error(`Auth (${pi}): ${t}`,...e)}/**
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
 */function en(t,...e){throw nu(t,...e)}function Qt(t,...e){return nu(t,...e)}function Jg(t,e,n){const r=Object.assign(Object.assign({},YI()),{[e]:n});return new vr("auth","Firebase",r).create(e,{appName:t.name})}function ZI(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&en(t,"argument-error"),Jg(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function nu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Zg.create(t,...e)}function J(t,e,...n){if(!t)throw nu(e,...n)}function cn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Wi(e),new Error(e)}function pn(t,e){t||cn(e)}/**
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
 */const Df=new Map;function ln(t){pn(t instanceof Function,"Expected a class definition");let e=Df.get(t);return e?(pn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Df.set(t,e),e)}/**
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
 */function JI(t,e){const n=_r(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Xs(i,e!=null?e:{}))return s;en(s,"already-initialized")}return n.initialize({options:e})}function eT(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ln);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Gc(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function tT(){return Rf()==="http:"||Rf()==="https:"}function Rf(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function nT(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(tT()||Zl()||"connection"in navigator)?navigator.onLine:!0}function rT(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class gi{constructor(e,n){this.shortDelay=e,this.longDelay=n,pn(n>e,"Short delay should be less than long delay!"),this.isMobile=Vg()||$g()}get(){return nT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ru(t,e){pn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class em{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;cn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;cn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;cn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const sT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const iT=new gi(3e4,6e4);function oT(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ua(t,e,n,r,s={}){return tm(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=di(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),em.fetch()(nm(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function tm(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},sT),e);try{const s=new cT(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw rc(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw rc(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw rc(t,"email-already-in-use",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Jg(t,u,l);en(t,u)}}catch(s){if(s instanceof yn)throw s;en(t,"network-request-failed")}}async function aT(t,e,n,r,s={}){const i=await ua(t,e,n,r,s);return"mfaPendingCredential"in i&&en(t,"multi-factor-auth-required",{_serverResponse:i}),i}function nm(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?ru(t.config,s):`${t.config.apiScheme}://${s}`}class cT{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Qt(this.auth,"network-request-failed")),iT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function rc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Qt(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function lT(t,e){return ua(t,"POST","/v1/accounts:delete",e)}async function uT(t,e){return ua(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ms(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function hT(t,e=!1){const n=kt(t),r=await n.getIdToken(e),s=su(r);J(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ms(sc(s.auth_time)),issuedAtTime:Ms(sc(s.iat)),expirationTime:Ms(sc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function sc(t){return Number(t)*1e3}function su(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Wi("JWT malformed, contained fewer than 3 sections"),null;try{const s=Vb(n);return s?JSON.parse(s):(Wi("Failed to decode base64 JWT payload"),null)}catch(s){return Wi("Caught error parsing JWT payload as JSON",s),null}}function fT(t){const e=su(t);return J(e,"internal-error"),J(typeof e.exp!="undefined","internal-error"),J(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ys(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof yn&&dT(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function dT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class pT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class rm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ms(this.lastLoginAt),this.creationTime=Ms(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function po(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Ys(t,uT(n,{idToken:r}));J(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?yT(i.providerUserInfo):[],a=mT(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new rm(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function gT(t){const e=kt(t);await po(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function mT(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function yT(t){return t.map(e=>{var{providerId:n}=e,r=tu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function vT(t,e){const n=await tm(t,{},async()=>{const r=di({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=nm(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",em.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Zs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken!="undefined","internal-error"),J(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):fT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return J(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await vT(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Zs;return r&&(J(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(J(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(J(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Zs,this.toJSON())}_performRefresh(){return cn("not implemented")}}/**
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
 */function In(t,e){J(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class rr{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=tu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new pT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new rm(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ys(this,this.stsTokenManager.getToken(this.auth,e));return J(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return hT(this,e)}reload(){return gT(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new rr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await po(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ys(this,lT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,d=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,T=(l=n.createdAt)!==null&&l!==void 0?l:void 0,O=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:j,emailVerified:F,isAnonymous:Y,providerData:P,stsTokenManager:N}=n;J(j&&N,e,"internal-error");const pe=Zs.fromJSON(this.name,N);J(typeof j=="string",e,"internal-error"),In(h,e.name),In(f,e.name),J(typeof F=="boolean",e,"internal-error"),J(typeof Y=="boolean",e,"internal-error"),In(d,e.name),In(g,e.name),In(v,e.name),In(_,e.name),In(T,e.name),In(O,e.name);const oe=new rr({uid:j,auth:e,email:f,emailVerified:F,displayName:h,isAnonymous:Y,photoURL:g,phoneNumber:d,tenantId:v,stsTokenManager:pe,createdAt:T,lastLoginAt:O});return P&&Array.isArray(P)&&(oe.providerData=P.map(Re=>Object.assign({},Re))),_&&(oe._redirectEventId=_),oe}static async _fromIdTokenResponse(e,n,r=!1){const s=new Zs;s.updateFromServerResponse(n);const i=new rr({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await po(i),i}}/**
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
 */class sm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}sm.type="NONE";const Nf=sm;/**
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
 */function Gi(t,e,n){return`firebase:${t}:${e}:${n}`}class Fr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Gi(this.userKey,s.apiKey,i),this.fullPersistenceKey=Gi("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?rr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Fr(ln(Nf),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||ln(Nf);const o=Gi(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=rr._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Fr(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Fr(i,e,r))}}/**
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
 */function xf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(am(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(im(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(lm(e))return"Blackberry";if(um(e))return"Webos";if(iu(e))return"Safari";if((e.includes("chrome/")||om(e))&&!e.includes("edge/"))return"Chrome";if(cm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function im(t=Ge()){return/firefox\//i.test(t)}function iu(t=Ge()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function om(t=Ge()){return/crios\//i.test(t)}function am(t=Ge()){return/iemobile/i.test(t)}function cm(t=Ge()){return/android/i.test(t)}function lm(t=Ge()){return/blackberry/i.test(t)}function um(t=Ge()){return/webos/i.test(t)}function ha(t=Ge()){return/iphone|ipad|ipod/i.test(t)}function _T(t=Ge()){var e;return ha(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function wT(){return jg()&&document.documentMode===10}function hm(t=Ge()){return ha(t)||cm(t)||um(t)||lm(t)||/windows phone/i.test(t)||am(t)}function ET(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function fm(t,e=[]){let n;switch(t){case"Browser":n=xf(Ge());break;case"Worker":n=`${xf(Ge())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${pi}/${r}`}/**
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
 */class bT{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Of(this),this.idTokenSubscription=new Of(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Zg,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ln(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Fr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,i=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!s||s===i)&&(o==null?void 0:o.user)&&(r=o.user)}return r?r._redirectEventId?(J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await po(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=rT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?kt(e):null;return n&&J(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ln(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new vr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ln(e)||this._popupRedirectResolver;J(n,this,"argument-error"),this.redirectPersistenceManager=await Fr.create(this,[ln(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return J(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function ou(t){return kt(t)}class Of{constructor(e){this.auth=e,this.observer=null,this.addObserver=Xb(n=>this.observer=n)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class dm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return cn("not implemented")}_getIdTokenResponse(e){return cn("not implemented")}_linkToIdToken(e,n){return cn("not implemented")}_getReauthenticationResolver(e){return cn("not implemented")}}/**
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
 */async function Ur(t,e){return aT(t,"POST","/v1/accounts:signInWithIdp",oT(t,e))}/**
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
 */const IT="http://localhost";class ar extends dm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ar(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):en("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=tu(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new ar(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ur(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ur(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ur(e,n)}buildRequest(){const e={requestUri:IT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=di(n)}return e}}/**
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
 */class au{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class mi extends au{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Cn extends mi{constructor(){super("facebook.com")}static credential(e){return ar._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cn.credential(e.oauthAccessToken)}catch{return null}}}Cn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Cn.PROVIDER_ID="facebook.com";/**
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
 */class an extends mi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ar._fromParams({providerId:an.PROVIDER_ID,signInMethod:an.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return an.credentialFromTaggedObject(e)}static credentialFromError(e){return an.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return an.credential(n,r)}catch{return null}}}an.GOOGLE_SIGN_IN_METHOD="google.com";an.PROVIDER_ID="google.com";/**
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
 */class kn extends mi{constructor(){super("github.com")}static credential(e){return ar._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kn.credential(e.oauthAccessToken)}catch{return null}}}kn.GITHUB_SIGN_IN_METHOD="github.com";kn.PROVIDER_ID="github.com";/**
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
 */class Dn extends mi{constructor(){super("twitter.com")}static credential(e,n){return ar._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Dn.credential(n,r)}catch{return null}}}Dn.TWITTER_SIGN_IN_METHOD="twitter.com";Dn.PROVIDER_ID="twitter.com";/**
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
 */class Gr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await rr._fromIdTokenResponse(e,r,s),o=Pf(r);return new Gr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Pf(r);return new Gr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Pf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class go extends yn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,go.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new go(e,n,r,s)}}function pm(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?go._fromErrorAndOperation(t,i,e,r):i})}async function TT(t,e,n=!1){const r=await Ys(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Gr._forOperation(t,"link",r)}/**
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
 */async function AT(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Ys(t,pm(r,s,e,t),n);J(i.idToken,r,"internal-error");const o=su(i.idToken);J(o,r,"internal-error");const{sub:a}=o;return J(t.uid===a,r,"user-mismatch"),Gr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&en(r,"user-mismatch"),i}}/**
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
 */async function ST(t,e,n=!1){const r="signIn",s=await pm(t,r,e),i=await Gr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function CT(t,e,n,r){return kt(t).onAuthStateChanged(e,n,r)}const mo="__sak";/**
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
 */class gm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(mo,"1"),this.storage.removeItem(mo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function kT(){const t=Ge();return iu(t)||ha(t)}const DT=1e3,RT=10;class mm extends gm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=kT()&&ET(),this.fallbackToPolling=hm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);wT()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,RT):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},DT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}mm.type="LOCAL";const NT=mm;/**
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
 */class ym extends gm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ym.type="SESSION";const cu=ym;/**
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
 */function xT(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class fa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new fa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await xT(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}fa.receivers=[];/**
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
 */function lu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class OT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=lu("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Yt(){return window}function PT(t){Yt().location.href=t}/**
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
 */function vm(){return typeof Yt().WorkerGlobalScope!="undefined"&&typeof Yt().importScripts=="function"}async function MT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function LT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function FT(){return vm()?self:null}/**
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
 */const _m="firebaseLocalStorageDb",UT=1,yo="firebaseLocalStorage",wm="fbase_key";class yi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function da(t,e){return t.transaction([yo],e?"readwrite":"readonly").objectStore(yo)}function BT(){const t=indexedDB.deleteDatabase(_m);return new yi(t).toPromise()}function Xc(){const t=indexedDB.open(_m,UT);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(yo,{keyPath:wm})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(yo)?e(r):(r.close(),await BT(),e(await Xc()))})})}async function Mf(t,e,n){const r=da(t,!0).put({[wm]:e,value:n});return new yi(r).toPromise()}async function VT(t,e){const n=da(t,!1).get(e),r=await new yi(n).toPromise();return r===void 0?null:r.value}function Lf(t,e){const n=da(t,!0).delete(e);return new yi(n).toPromise()}const $T=800,jT=3;class Em{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Xc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>jT)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return vm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=fa._getInstance(FT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await MT(),!this.activeServiceWorker)return;this.sender=new OT(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||LT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Xc();return await Mf(e,mo,"1"),await Lf(e,mo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Mf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>VT(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Lf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=da(s,!1).getAll();return new yi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$T)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Em.type="LOCAL";const zT=Em;/**
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
 */function HT(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function qT(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Qt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",HT().appendChild(r)})}function KT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new gi(3e4,6e4);/**
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
 */function bm(t,e){return e?ln(e):(J(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class uu extends dm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ur(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ur(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ur(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function WT(t){return ST(t.auth,new uu(t),t.bypassAuthState)}function GT(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),AT(n,new uu(t),t.bypassAuthState)}async function XT(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),TT(n,new uu(t),t.bypassAuthState)}/**
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
 */class Im{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return WT;case"linkViaPopup":case"linkViaRedirect":return XT;case"reauthViaPopup":case"reauthViaRedirect":return GT;default:en(this.auth,"internal-error")}}resolve(e){pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const QT=new gi(2e3,1e4);async function YT(t,e,n){const r=ou(t);ZI(t,e,au);const s=bm(r,n);return new Xn(r,"signInViaPopup",e,s).executeNotNull()}class Xn extends Im{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Xn.currentPopupAction&&Xn.currentPopupAction.cancel(),Xn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){pn(this.filter.length===1,"Popup operations only handle one event");const e=lu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Qt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Qt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,QT.get())};e()}}Xn.currentPopupAction=null;/**
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
 */const ZT="pendingRedirect",ic=new Map;class JT extends Im{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ic.get(this.auth._key());if(!e){try{const r=await eA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ic.set(this.auth._key(),e)}return this.bypassAuthState||ic.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function eA(t,e){const n=nA(e),r=tA(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function tA(t){return ln(t._redirectPersistence)}function nA(t){return Gi(ZT,t.config.apiKey,t.name)}async function rA(t,e,n=!1){const r=ou(t),s=bm(r,e),o=await new JT(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const sA=10*60*1e3;class iA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!oA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Tm(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Qt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=sA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ff(e))}saveEventToCache(e){this.cachedEventUids.add(Ff(e)),this.lastProcessedEventTime=Date.now()}}function Ff(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Tm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function oA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Tm(t);default:return!1}}/**
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
 */async function aA(t,e={}){return ua(t,"GET","/v1/projects",e)}/**
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
 */const cA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,lA=/^https?/;async function uA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await aA(t);for(const n of e)try{if(hA(n))return}catch{}en(t,"unauthorized-domain")}function hA(t){const e=Gc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!lA.test(n))return!1;if(cA.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const fA=new gi(3e4,6e4);function Uf(){const t=Yt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function dA(t){return new Promise((e,n)=>{var r,s,i;function o(){Uf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Uf(),n(Qt(t,"network-request-failed"))},timeout:fA.get()})}if(!((s=(r=Yt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Yt().gapi)===null||i===void 0)&&i.load)o();else{const a=KT("iframefcb");return Yt()[a]=()=>{gapi.load?o():n(Qt(t,"network-request-failed"))},qT(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Xi=null,e})}let Xi=null;function pA(t){return Xi=Xi||dA(t),Xi}/**
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
 */const gA=new gi(5e3,15e3),mA="__/auth/iframe",yA="emulator/auth/iframe",vA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_A=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function wA(t){const e=t.config;J(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ru(e,yA):`https://${t.config.authDomain}/${mA}`,r={apiKey:e.apiKey,appName:t.name,v:pi},s=_A.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${di(r).slice(1)}`}async function EA(t){const e=await pA(t),n=Yt().gapi;return J(n,t,"internal-error"),e.open({where:document.body,url:wA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vA,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Qt(t,"network-request-failed"),a=Yt().setTimeout(()=>{i(o)},gA.get());function c(){Yt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const bA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},IA=500,TA=600,AA="_blank",SA="http://localhost";class Bf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function CA(t,e,n,r=IA,s=TA){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},bA),{width:r.toString(),height:s.toString(),top:i,left:o}),l=Ge().toLowerCase();n&&(a=om(l)?AA:n),im(l)&&(e=e||SA,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[d,g])=>`${f}${d}=${g},`,"");if(_T(l)&&a!=="_self")return kA(e||"",a),new Bf(null);const h=window.open(e||"",a,u);J(h,t,"popup-blocked");try{h.focus()}catch{}return new Bf(h)}function kA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const DA="__/auth/handler",RA="emulator/auth/handler";function Vf(t,e,n,r,s,i){J(t.config.authDomain,t,"auth-domain-config-required"),J(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:pi,eventId:s};if(e instanceof au){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Gb(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof mi){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${NA(t)}?${di(a).slice(1)}`}function NA({config:t}){return t.emulator?ru(t,RA):`https://${t.authDomain}/${DA}`}/**
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
 */const oc="webStorageSupport";class xA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cu,this._completeRedirectFn=rA}async _openPopup(e,n,r,s){var i;pn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Vf(e,n,r,Gc(),s);return CA(e,o,lu())}async _openRedirect(e,n,r,s){return await this._originValidation(e),PT(Vf(e,n,r,Gc(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(pn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await EA(e),r=new iA(e);return n.register("authEvent",s=>(J(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(oc,{type:oc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[oc];o!==void 0&&n(!!o),en(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=uA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return hm()||iu()||ha()}}const OA=xA;var $f="@firebase/auth",jf="0.19.12";/**
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
 */class PA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function MA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function LA(t){Jt(new qt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{J(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),J(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fm(t)},u=new bT(a,c,l);return eT(u,n),u})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Jt(new qt("auth-internal",e=>{const n=ou(e.getProvider("auth").getImmediate());return(r=>new PA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ft($f,jf,MA(t)),Ft($f,jf,"esm2017")}/**
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
 */function ac(t=eu()){const e=_r(t,"auth");return e.isInitialized()?e.getImmediate():JI(t,{popupRedirectResolver:OA,persistence:[zT,NT,cu]})}LA("Browser");const Js=ca("auth",()=>{const t=Te(null),e=Te(null),n=me(()=>t.value!==null);function r(a,c){var l,u,h;if(!a){t.value=null;return}a=a,t.value={userId:a.uid,profileImage:(l=a.photoURL)!=null?l:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbADKB5OER8mK9MCrkCBFJeXc2pZCGucLNxA&usqp=CAU",thumbnailImage:(u=a.photoURL)!=null?u:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbADKB5OER8mK9MCrkCBFJeXc2pZCGucLNxA&usqp=CAU",nickName:(h=a.displayName)!=null?h:"Anonymous"},c&&(e.value=c)}async function s(a,c){const l=ac();await l.setPersistence(cu);const u=await YT(l,a);r(u.user,c)}async function i(){r(null),await ac().signOut(),localStorage.clear()}function o(a){return new Promise(c=>{const l=ac();CT(l,u=>{u&&r(u,a),c(u!==null)})})}return{user:t,provider:e,isAuthenticated:n,getPersistenceFirebaseUser:o,logout:i,loginWithFirebase:s}});function pa(t,e,...n){if(t in e){let s=e[t];return typeof s=="function"?s(...n):s}let r=new Error(`Tried to handle "${t}" but there is no handler defined. Only defined handlers are: ${Object.keys(e).map(s=>`"${s}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,pa),r}var Qc=(t=>(t[t.None=0]="None",t[t.RenderStrategy=1]="RenderStrategy",t[t.Static=2]="Static",t))(Qc||{}),FA=(t=>(t[t.Unmount=0]="Unmount",t[t.Hidden=1]="Hidden",t))(FA||{});function ga(r){var s=r,{visible:t=!0,features:e=0}=s,n=Ha(s,["visible","features"]);var i;if(t||e&2&&n.props.static)return cc(n);if(e&1){let o=(i=n.props.unmount)==null||i?0:1;return pa(o,{[0](){return null},[1](){return cc(_s($t({},n),{props:_s($t({},n.props),{hidden:!0,style:{display:"none"}})}))}})}return cc(n)}function cc({props:t,attrs:e,slots:n,slot:r,name:s}){var i;let l=UA(t,["unmount","static"]),{as:o}=l,a=Ha(l,["as"]),c=(i=n.default)==null?void 0:i.call(n,r);if(o==="template"){if(Object.keys(a).length>0||Object.keys(e).length>0){let[u,...h]=c!=null?c:[];if(!BA(u)||h.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${s} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(a).concat(Object.keys(e)).map(f=>`  - ${f}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(f=>`  - ${f}`).join(`
`)].join(`
`));return Mn(u,a)}return Array.isArray(c)&&c.length===1?c[0]:c}return sa(o,a,c)}function UA(t,e=[]){let n=Object.assign({},t);for(let r of e)r in n&&delete n[r];return n}function BA(t){return t==null?!1:typeof t.type=="string"||typeof t.type=="object"||typeof t.type=="function"}let VA=0;function $A(){return++VA}function hu(){return $A()}var Ye=(t=>(t.Space=" ",t.Enter="Enter",t.Escape="Escape",t.Backspace="Backspace",t.Delete="Delete",t.ArrowLeft="ArrowLeft",t.ArrowUp="ArrowUp",t.ArrowRight="ArrowRight",t.ArrowDown="ArrowDown",t.Home="Home",t.End="End",t.PageUp="PageUp",t.PageDown="PageDown",t.Tab="Tab",t))(Ye||{});function jA(t){throw new Error("Unexpected object: "+t)}var It=(t=>(t[t.First=0]="First",t[t.Previous=1]="Previous",t[t.Next=2]="Next",t[t.Last=3]="Last",t[t.Specific=4]="Specific",t[t.Nothing=5]="Nothing",t))(It||{});function zA(t,e){let n=e.resolveItems();if(n.length<=0)return null;let r=e.resolveActiveIndex(),s=r!=null?r:-1,i=(()=>{switch(t.focus){case 0:return n.findIndex(o=>!e.resolveDisabled(o));case 1:{let o=n.slice().reverse().findIndex((a,c,l)=>s!==-1&&l.length-c-1>=s?!1:!e.resolveDisabled(a));return o===-1?o:n.length-1-o}case 2:return n.findIndex((o,a)=>a<=s?!1:!e.resolveDisabled(o));case 3:{let o=n.slice().reverse().findIndex(a=>!e.resolveDisabled(a));return o===-1?o:n.length-1-o}case 4:return n.findIndex(o=>e.resolveId(o)===t.id);case 5:return null;default:jA(t)}})();return i===-1?r:i}function $e(t){return t==null||t.value==null?null:"$el"in t.value?t.value.$el:t.value}let Am=Symbol("Context");var vo=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(vo||{});function HA(){return Tt(Am,null)}function qA(t){Lr(Am,t)}function zf(t,e){if(t)return t;let n=e!=null?e:"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function KA(t,e){let n=Te(zf(t.value.type,t.value.as));return zr(()=>{n.value=zf(t.value.type,t.value.as)}),Yo(()=>{var r;n.value||!$e(e)||$e(e)instanceof HTMLButtonElement&&!((r=$e(e))!=null&&r.hasAttribute("type"))&&(n.value="button")}),n}function Sm(t){if(typeof window=="undefined")return null;if(t instanceof Node)return t.ownerDocument;if(t!=null&&t.hasOwnProperty("value")){let e=$e(t);if(e)return e.ownerDocument}return document}function WA({container:t,accept:e,walk:n,enabled:r}){Yo(()=>{let s=t.value;if(!s||r!==void 0&&!r.value)return;let i=Sm(t);if(!i)return;let o=Object.assign(c=>e(c),{acceptNode:e}),a=i.createTreeWalker(s,NodeFilter.SHOW_ELEMENT,o,!1);for(;a.nextNode();)n(a.currentNode)})}let Hf=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(t=>`${t}:not([tabindex='-1'])`).join(",");var GA=(t=>(t[t.First=1]="First",t[t.Previous=2]="Previous",t[t.Next=4]="Next",t[t.Last=8]="Last",t[t.WrapAround=16]="WrapAround",t[t.NoScroll=32]="NoScroll",t))(GA||{}),XA=(t=>(t[t.Error=0]="Error",t[t.Overflow=1]="Overflow",t[t.Success=2]="Success",t[t.Underflow=3]="Underflow",t))(XA||{}),QA=(t=>(t[t.Previous=-1]="Previous",t[t.Next=1]="Next",t))(QA||{}),Cm=(t=>(t[t.Strict=0]="Strict",t[t.Loose=1]="Loose",t))(Cm||{});function YA(t,e=0){var n;return t===((n=Sm(t))==null?void 0:n.body)?!1:pa(e,{[0](){return t.matches(Hf)},[1](){let r=t;for(;r!==null;){if(r.matches(Hf))return!0;r=r.parentElement}return!1}})}function ZA(t,e=n=>n){return t.slice().sort((n,r)=>{let s=e(n),i=e(r);if(s===null||i===null)return 0;let o=s.compareDocumentPosition(i);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function qf(t,e,n){typeof window!="undefined"&&Yo(r=>{window.addEventListener(t,e,n),r(()=>window.removeEventListener(t,e,n))})}function JA(t){typeof queueMicrotask=="function"?queueMicrotask(t):Promise.resolve().then(t).catch(e=>setTimeout(()=>{throw e}))}var eS=(t=>(t[t.None=1]="None",t[t.IgnoreScrollbars=2]="IgnoreScrollbars",t))(eS||{});function tS(t,e,n=1){let r=!1;function s(i){if(r)return;r=!0,JA(()=>{r=!1});let o=i.target;if(!o.ownerDocument.documentElement.contains(o))return;let a=function c(l){return typeof l=="function"?c(l()):Array.isArray(l)||l instanceof Set?l:[l]}(t);if((n&2)===2){let c=20,l=o.ownerDocument.documentElement;if(i.clientX>l.clientWidth-c||i.clientX<c||i.clientY>l.clientHeight-c||i.clientY<c)return}for(let c of a){if(c===null)continue;let l=c instanceof HTMLElement?c:$e(c);if(l!=null&&l.contains(o))return}e(i,o)}qf("pointerdown",s),qf("mousedown",s)}var nS=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(nS||{}),rS=(t=>(t[t.Pointer=0]="Pointer",t[t.Other=1]="Other",t))(rS||{});function sS(t){requestAnimationFrame(()=>requestAnimationFrame(t))}let km=Symbol("MenuContext");function ma(t){let e=Tt(km,null);if(e===null){let n=new Error(`<${t} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,ma),n}return e}let iS=st({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(t,{slots:e,attrs:n}){let r=Te(1),s=Te(null),i=Te(null),o=Te([]),a=Te(""),c=Te(null),l=Te(1);function u(f=d=>d){let d=c.value!==null?o.value[c.value]:null,g=ZA(f(o.value.slice()),_=>$e(_.dataRef.domRef)),v=d?g.indexOf(d):null;return v===-1&&(v=null),{items:g,activeItemIndex:v}}let h={menuState:r,buttonRef:s,itemsRef:i,items:o,searchQuery:a,activeItemIndex:c,activationTrigger:l,closeMenu:()=>{r.value=1,c.value=null},openMenu:()=>r.value=0,goToItem(f,d,g){let v=u(),_=zA(f===It.Specific?{focus:It.Specific,id:d}:{focus:f},{resolveItems:()=>v.items,resolveActiveIndex:()=>v.activeItemIndex,resolveId:T=>T.id,resolveDisabled:T=>T.dataRef.disabled});a.value="",c.value=_,l.value=g!=null?g:1,o.value=v.items},search(f){let d=a.value!==""?0:1;a.value+=f.toLowerCase();let g=(c.value!==null?o.value.slice(c.value+d).concat(o.value.slice(0,c.value+d)):o.value).find(_=>_.dataRef.textValue.startsWith(a.value)&&!_.dataRef.disabled),v=g?o.value.indexOf(g):-1;v===-1||v===c.value||(c.value=v,l.value=1)},clearSearch(){a.value=""},registerItem(f,d){let g=u(v=>[...v,{id:f,dataRef:d}]);o.value=g.items,c.value=g.activeItemIndex,l.value=1},unregisterItem(f){let d=u(g=>{let v=g.findIndex(_=>_.id===f);return v!==-1&&g.splice(v,1),g});o.value=d.items,c.value=d.activeItemIndex,l.value=1}};return tS([s,i],(f,d)=>{var g;r.value===0&&(h.closeMenu(),YA(d,Cm.Loose)||(f.preventDefault(),(g=$e(s))==null||g.focus()))}),Lr(km,h),qA(me(()=>pa(r.value,{[0]:vo.Open,[1]:vo.Closed}))),()=>{let f={open:r.value===0};return ga({props:t,slot:f,slots:e,attrs:n,name:"Menu"})}}}),oS=st({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"}},setup(t,{attrs:e,slots:n,expose:r}){let s=ma("MenuButton"),i=`headlessui-menu-button-${hu()}`;r({el:s.buttonRef,$el:s.buttonRef});function o(u){switch(u.key){case Ye.Space:case Ye.Enter:case Ye.ArrowDown:u.preventDefault(),u.stopPropagation(),s.openMenu(),Pt(()=>{var h;(h=$e(s.itemsRef))==null||h.focus({preventScroll:!0}),s.goToItem(It.First)});break;case Ye.ArrowUp:u.preventDefault(),u.stopPropagation(),s.openMenu(),Pt(()=>{var h;(h=$e(s.itemsRef))==null||h.focus({preventScroll:!0}),s.goToItem(It.Last)});break}}function a(u){switch(u.key){case Ye.Space:u.preventDefault();break}}function c(u){t.disabled||(s.menuState.value===0?(s.closeMenu(),Pt(()=>{var h;return(h=$e(s.buttonRef))==null?void 0:h.focus({preventScroll:!0})})):(u.preventDefault(),u.stopPropagation(),s.openMenu(),sS(()=>{var h;return(h=$e(s.itemsRef))==null?void 0:h.focus({preventScroll:!0})})))}let l=KA(me(()=>({as:t.as,type:e.type})),s.buttonRef);return()=>{var u;let h={open:s.menuState.value===0},f={ref:s.buttonRef,id:i,type:l.value,"aria-haspopup":!0,"aria-controls":(u=$e(s.itemsRef))==null?void 0:u.id,"aria-expanded":t.disabled?void 0:s.menuState.value===0,onKeydown:o,onKeyup:a,onClick:c};return ga({props:$t($t({},t),f),slot:h,attrs:e,slots:n,name:"MenuButton"})}}}),aS=st({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},setup(t,{attrs:e,slots:n,expose:r}){let s=ma("MenuItems"),i=`headlessui-menu-items-${hu()}`,o=Te(null);r({el:s.itemsRef,$el:s.itemsRef}),WA({container:me(()=>$e(s.itemsRef)),enabled:me(()=>s.menuState.value===0),accept(h){return h.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:h.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(h){h.setAttribute("role","none")}});function a(h){var f;switch(o.value&&clearTimeout(o.value),h.key){case Ye.Space:if(s.searchQuery.value!=="")return h.preventDefault(),h.stopPropagation(),s.search(h.key);case Ye.Enter:if(h.preventDefault(),h.stopPropagation(),s.activeItemIndex.value!==null){let d=s.items.value[s.activeItemIndex.value];(f=$e(d.dataRef.domRef))==null||f.click()}s.closeMenu(),Pt(()=>{var d;return(d=$e(s.buttonRef))==null?void 0:d.focus({preventScroll:!0})});break;case Ye.ArrowDown:return h.preventDefault(),h.stopPropagation(),s.goToItem(It.Next);case Ye.ArrowUp:return h.preventDefault(),h.stopPropagation(),s.goToItem(It.Previous);case Ye.Home:case Ye.PageUp:return h.preventDefault(),h.stopPropagation(),s.goToItem(It.First);case Ye.End:case Ye.PageDown:return h.preventDefault(),h.stopPropagation(),s.goToItem(It.Last);case Ye.Escape:h.preventDefault(),h.stopPropagation(),s.closeMenu(),Pt(()=>{var d;return(d=$e(s.buttonRef))==null?void 0:d.focus({preventScroll:!0})});break;case Ye.Tab:h.preventDefault(),h.stopPropagation();break;default:h.key.length===1&&(s.search(h.key),o.value=setTimeout(()=>s.clearSearch(),350));break}}function c(h){switch(h.key){case Ye.Space:h.preventDefault();break}}let l=HA(),u=me(()=>l!==null?l.value===vo.Open:s.menuState.value===0);return()=>{var h,f;let d={open:s.menuState.value===0},g={"aria-activedescendant":s.activeItemIndex.value===null||(h=s.items.value[s.activeItemIndex.value])==null?void 0:h.id,"aria-labelledby":(f=$e(s.buttonRef))==null?void 0:f.id,id:i,onKeydown:a,onKeyup:c,role:"menu",tabIndex:0,ref:s.itemsRef};return ga({props:$t($t({},t),g),slot:d,attrs:e,slots:n,features:Qc.RenderStrategy|Qc.Static,visible:u.value,name:"MenuItems"})}}}),cS=st({name:"MenuItem",props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1}},setup(t,{slots:e,attrs:n,expose:r}){let s=ma("MenuItem"),i=`headlessui-menu-item-${hu()}`,o=Te(null);r({el:o,$el:o});let a=me(()=>s.activeItemIndex.value!==null?s.items.value[s.activeItemIndex.value].id===i:!1),c=me(()=>({disabled:t.disabled,textValue:"",domRef:o}));zr(()=>{var d,g;let v=(g=(d=$e(o))==null?void 0:d.textContent)==null?void 0:g.toLowerCase().trim();v!==void 0&&(c.value.textValue=v)}),zr(()=>s.registerItem(i,c)),ea(()=>s.unregisterItem(i)),Yo(()=>{s.menuState.value===0&&(!a.value||s.activationTrigger.value!==0&&Pt(()=>{var d,g;return(g=(d=$e(o))==null?void 0:d.scrollIntoView)==null?void 0:g.call(d,{block:"nearest"})}))});function l(d){if(t.disabled)return d.preventDefault();s.closeMenu(),Pt(()=>{var g;return(g=$e(s.buttonRef))==null?void 0:g.focus({preventScroll:!0})})}function u(){if(t.disabled)return s.goToItem(It.Nothing);s.goToItem(It.Specific,i)}function h(){t.disabled||a.value||s.goToItem(It.Specific,i,0)}function f(){t.disabled||!a.value||s.goToItem(It.Nothing)}return()=>{let{disabled:d}=t,g={active:a.value,disabled:d};return ga({props:_s($t({},t),{id:i,ref:o,role:"menuitem",tabIndex:d===!0?void 0:-1,"aria-disabled":d===!0?!0:void 0,onClick:l,onFocus:u,onPointermove:h,onMousemove:h,onPointerleave:f,onMouseleave:f}),slot:g,attrs:n,slots:e,name:"MenuItem"})}}});function lS(t,e){return G(),We("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[X("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z"})])}function uS(t,e){return G(),We("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[X("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"})])}function hS(t,e){return G(),We("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[X("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19 9l-7 7-7-7"})])}function fS(t,e){return G(),We("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[X("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"})])}function dS(t,e){return G(),We("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[X("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})])}function pS(t,e){return G(),We("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[X("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})])}const _o=[{id:"smartseven",name:"old smartseven"},{id:"smart7",name:"The Smart 7: UK"},{id:"smart7ireland",name:"The Smart 7: Ireland"},{id:"smart7germany",name:"The Smart 7: Germany"},{id:"heart7",name:"The Heat 7"},{id:"tsn7us",name:"TSN7: US"},{id:"tsn7uk",name:"TSN7: UK"},{id:"tsn7aus",name:"TSN7: AUS"},{id:"blipblip",name:"Blip Blip!"},{id:"dev",name:"dev sandbox"}];const gS=t=>(Bl("data-v-14333d0e"),t=t(),Vl(),t),mS={class:"mx-auto w-full flex justify-between"},yS=gS(()=>ae("div",{class:"text-2xl font-bold flex items-center dark:text-gray-50 transition-colors"},[ae("img",{src:GE,alt:"DaftDoris",class:"h-8 dark:invert"})],-1)),vS={class:"py-1"},_S=["href"],wS={class:"flex items-center"},ES=["src"],bS=st({setup(t){const e=Js(),n=zE(),r=Ig();me(()=>n.meta.title||"Home");const s=me(()=>e.user),i=me(()=>e.isAuthenticated),o=Nb(),a=eb(o),c={async onClickProfile(){await e.logout(),await r.push("/auth/login")},onClickToggleDarkMode(){a()}};return(l,u)=>{var f;const h=qw("ripple");return ue(i)?(G(),Ae("header",rp(Gl({key:0},l.$attrs)),[ae("div",mS,[yS,X(ue(iS),{as:"div",class:"relative inline-block text-left"},{default:ht(()=>[ae("div",null,[X(ue(oS),{class:"inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"},{default:ht(()=>{var d;return[fi(Rn(((d=ue(_o).filter(g=>g.id===ue(n).params.podcastId)[0])==null?void 0:d.name)||"select a podcast")+" ",1),X(ue(hS),{class:"-mr-1 ml-2 h-5 w-5","aria-hidden":"true"})]}),_:1})]),X(Ws,{"enter-active-class":"transition ease-out duration-100","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:ht(()=>[X(ue(aS),{class:"origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"},{default:ht(()=>[ae("div",vS,[(G(!0),Ae(Ve,null,tr(ue(_o),d=>(G(),We(ue(cS),{key:d.id},{default:ht(({active:g})=>[ae("a",{href:`#${d.id}`,class:mr([g?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"])},Rn(d.name),11,_S)]),_:2},1024))),128))])]),_:1})]),_:1})]),_:1}),ae("div",wS,[ae("button",{type:"button",class:"round-btn mr-2 px-1 py-1",onClick:u[0]||(u[0]=Xl((...d)=>c.onClickToggleDarkMode&&c.onClickToggleDarkMode(...d),["prevent","stop"]))},[X(Ws,{mode:"out-in",name:"fade"},{default:ht(()=>[ue(o)?(G(),We(ue(dS),{key:0,class:"dark:text-white bg-transparent transition-colors"})):(G(),We(ue(pS),{key:1,class:"dark:text-white bg-transparent transition-colors"}))]),_:1})]),hi((G(),Ae("button",{type:"button",class:"round-btn",onClick:u[1]||(u[1]=(...d)=>c.onClickProfile&&c.onClickProfile(...d))},[ae("img",{class:"rounded-full shadow-lg",alt:"profile image",src:(f=ue(s))==null?void 0:f.thumbnailImage},null,8,ES)])),[[h]])])])],16)):Gw("",!0)}}});var IS=Bt(bS,[["__scopeId","data-v-14333d0e"]]);const TS={class:"relative w-full h-full"},AS={class:"mx-auto w-full h-full"},SS=st({setup(t){return(e,n)=>{const r=Hl("router-view");return G(),Ae("div",TS,[X(IS),ae("main",AS,[X(r)])])}}});let CS=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce((e,n)=>(n&=63,n<36?e+=n.toString(36):n<62?e+=(n-26).toString(36).toUpperCase():n>62?e+="-":e+="_",e),"");var kS=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},M,fu=fu||{},Q=kS||self;function wo(){}function Yc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function vi(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function DS(t){return Object.prototype.hasOwnProperty.call(t,lc)&&t[lc]||(t[lc]=++RS)}var lc="closure_uid_"+(1e9*Math.random()>>>0),RS=0;function NS(t,e,n){return t.call.apply(t.bind,arguments)}function xS(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function Je(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Je=NS:Je=xS,Je.apply(null,arguments)}function Bi(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function it(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function Bn(){this.s=this.s,this.o=this.o}var OS=0,PS={};Bn.prototype.s=!1;Bn.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),OS!=0)){var t=DS(this);delete PS[t]}};Bn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Dm=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Rm=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,s=typeof t=="string"?t.split(""):t;for(let i=0;i<r;i++)i in s&&e.call(n,s[i],i,t)};function MS(t){e:{var e=SC;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let s=0;s<n;s++)if(s in r&&e.call(void 0,r[s],s,t)){e=s;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function Kf(t){return Array.prototype.concat.apply([],arguments)}function du(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Eo(t){return/^[\s\xa0]*$/.test(t)}var Wf=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function ft(t,e){return t.indexOf(e)!=-1}function uc(t,e){return t<e?-1:t>e?1:0}var dt;e:{var Gf=Q.navigator;if(Gf){var Xf=Gf.userAgent;if(Xf){dt=Xf;break e}}dt=""}function pu(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Nm(t){const e={};for(const n in t)e[n]=t[n];return e}var Qf="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function xm(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<Qf.length;i++)n=Qf[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function gu(t){return gu[" "](t),t}gu[" "]=wo;function LS(t){var e=BS;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var FS=ft(dt,"Opera"),Xr=ft(dt,"Trident")||ft(dt,"MSIE"),Om=ft(dt,"Edge"),Zc=Om||Xr,Pm=ft(dt,"Gecko")&&!(ft(dt.toLowerCase(),"webkit")&&!ft(dt,"Edge"))&&!(ft(dt,"Trident")||ft(dt,"MSIE"))&&!ft(dt,"Edge"),US=ft(dt.toLowerCase(),"webkit")&&!ft(dt,"Edge");function Mm(){var t=Q.document;return t?t.documentMode:void 0}var bo;e:{var hc="",fc=function(){var t=dt;if(Pm)return/rv:([^\);]+)(\)|;)/.exec(t);if(Om)return/Edge\/([\d\.]+)/.exec(t);if(Xr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(US)return/WebKit\/(\S+)/.exec(t);if(FS)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(fc&&(hc=fc?fc[1]:""),Xr){var dc=Mm();if(dc!=null&&dc>parseFloat(hc)){bo=String(dc);break e}}bo=hc}var BS={};function VS(){return LS(function(){let t=0;const e=Wf(String(bo)).split("."),n=Wf("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var s=e[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s[0].length==0&&i[0].length==0)break;t=uc(s[1].length==0?0:parseInt(s[1],10),i[1].length==0?0:parseInt(i[1],10))||uc(s[2].length==0,i[2].length==0)||uc(s[2],i[2]),s=s[3],i=i[3]}while(t==0)}return 0<=t})}var Jc;if(Q.document&&Xr){var Yf=Mm();Jc=Yf||parseInt(bo,10)||void 0}else Jc=void 0;var $S=Jc,jS=function(){if(!Q.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Q.addEventListener("test",wo,e),Q.removeEventListener("test",wo,e)}catch{}return t}();function ct(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ct.prototype.h=function(){this.defaultPrevented=!0};function ei(t,e){if(ct.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Pm){e:{try{gu(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:zS[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ei.Z.h.call(this)}}it(ei,ct);var zS={2:"touch",3:"pen",4:"mouse"};ei.prototype.h=function(){ei.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var _i="closure_listenable_"+(1e6*Math.random()|0),HS=0;function qS(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=s,this.key=++HS,this.ca=this.fa=!1}function ya(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function va(t){this.src=t,this.g={},this.h=0}va.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=tl(t,e,r,s);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new qS(e,this.src,i,!!r,s),e.fa=n,t.push(e)),e};function el(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=Dm(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(ya(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function tl(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==r)return s}return-1}var mu="closure_lm_"+(1e6*Math.random()|0),pc={};function Lm(t,e,n,r,s){if(r&&r.once)return Um(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Lm(t,e[i],n,r,s);return null}return n=_u(n),t&&t[_i]?t.N(e,n,vi(r)?!!r.capture:!!r,s):Fm(t,e,n,!1,r,s)}function Fm(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=vi(s)?!!s.capture:!!s,a=vu(t);if(a||(t[mu]=a=new va(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=KS(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)jS||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(Vm(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function KS(){function t(n){return e.call(t.src,t.listener,n)}var e=WS;return t}function Um(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Um(t,e[i],n,r,s);return null}return n=_u(n),t&&t[_i]?t.O(e,n,vi(r)?!!r.capture:!!r,s):Fm(t,e,n,!0,r,s)}function Bm(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)Bm(t,e[i],n,r,s);else r=vi(r)?!!r.capture:!!r,n=_u(n),t&&t[_i]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=tl(i,n,r,s),-1<n&&(ya(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=vu(t))&&(e=t.g[e.toString()],t=-1,e&&(t=tl(e,n,r,s)),(n=-1<t?e[t]:null)&&yu(n))}function yu(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[_i])el(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Vm(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=vu(e))?(el(n,t),n.h==0&&(n.src=null,e[mu]=null)):ya(t)}}}function Vm(t){return t in pc?pc[t]:pc[t]="on"+t}function WS(t,e){if(t.ca)t=!0;else{e=new ei(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&yu(t),t=n.call(r,e)}return t}function vu(t){return t=t[mu],t instanceof va?t:null}var gc="__closure_events_fn_"+(1e9*Math.random()>>>0);function _u(t){return typeof t=="function"?t:(t[gc]||(t[gc]=function(e){return t.handleEvent(e)}),t[gc])}function Xe(){Bn.call(this),this.i=new va(this),this.P=this,this.I=null}it(Xe,Bn);Xe.prototype[_i]=!0;Xe.prototype.removeEventListener=function(t,e,n,r){Bm(this,t,e,n,r)};function et(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new ct(e,t);else if(e instanceof ct)e.target=e.target||t;else{var s=e;e=new ct(r,t),xm(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Vi(o,r,!0,e)&&s}if(o=e.g=t,s=Vi(o,r,!0,e)&&s,s=Vi(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Vi(o,r,!1,e)&&s}Xe.prototype.M=function(){if(Xe.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ya(n[r]);delete t.g[e],t.h--}}this.I=null};Xe.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Xe.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Vi(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&el(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var wu=Q.JSON.stringify;function GS(){var t=jm;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class XS{constructor(){this.h=this.g=null}add(e,n){const r=$m.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var $m=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new QS,t=>t.reset());class QS{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function YS(t){Q.setTimeout(()=>{throw t},0)}function Eu(t,e){nl||ZS(),rl||(nl(),rl=!0),jm.add(t,e)}var nl;function ZS(){var t=Q.Promise.resolve(void 0);nl=function(){t.then(JS)}}var rl=!1,jm=new XS;function JS(){for(var t;t=GS();){try{t.h.call(t.g)}catch(n){YS(n)}var e=$m;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}rl=!1}function _a(t,e){Xe.call(this),this.h=t||1,this.g=e||Q,this.j=Je(this.kb,this),this.l=Date.now()}it(_a,Xe);M=_a.prototype;M.da=!1;M.S=null;M.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),et(this,"tick"),this.da&&(bu(this),this.start()))}};M.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function bu(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}M.M=function(){_a.Z.M.call(this),bu(this),delete this.g};function Iu(t,e,n){if(typeof t=="function")n&&(t=Je(t,n));else if(t&&typeof t.handleEvent=="function")t=Je(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Q.setTimeout(t,e||0)}function zm(t){t.g=Iu(()=>{t.g=null,t.i&&(t.i=!1,zm(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class eC extends Bn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:zm(this)}M(){super.M(),this.g&&(Q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ti(t){Bn.call(this),this.h=t,this.g={}}it(ti,Bn);var Zf=[];function Hm(t,e,n,r){Array.isArray(n)||(n&&(Zf[0]=n.toString()),n=Zf);for(var s=0;s<n.length;s++){var i=Lm(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function qm(t){pu(t.g,function(e,n){this.g.hasOwnProperty(n)&&yu(e)},t),t.g={}}ti.prototype.M=function(){ti.Z.M.call(this),qm(this)};ti.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function wa(){this.g=!0}wa.prototype.Aa=function(){this.g=!1};function tC(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function nC(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function xr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+sC(t,n)+(r?" "+r:"")})}function rC(t,e){t.info(function(){return"TIMEOUT: "+e})}wa.prototype.info=function(){};function sC(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return wu(n)}catch{return e}}var wr={},Jf=null;function Ea(){return Jf=Jf||new Xe}wr.Ma="serverreachability";function Km(t){ct.call(this,wr.Ma,t)}it(Km,ct);function ni(t){const e=Ea();et(e,new Km(e,t))}wr.STAT_EVENT="statevent";function Wm(t,e){ct.call(this,wr.STAT_EVENT,t),this.stat=e}it(Wm,ct);function pt(t){const e=Ea();et(e,new Wm(e,t))}wr.Na="timingevent";function Gm(t,e){ct.call(this,wr.Na,t),this.size=e}it(Gm,ct);function wi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Q.setTimeout(function(){t()},e)}var ba={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Xm={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Tu(){}Tu.prototype.h=null;function ed(t){return t.h||(t.h=t.i())}function Qm(){}var Ei={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Au(){ct.call(this,"d")}it(Au,ct);function Su(){ct.call(this,"c")}it(Su,ct);var sl;function Ia(){}it(Ia,Tu);Ia.prototype.g=function(){return new XMLHttpRequest};Ia.prototype.i=function(){return{}};sl=new Ia;function bi(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new ti(this),this.P=iC,t=Zc?125:void 0,this.W=new _a(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Ym}function Ym(){this.i=null,this.g="",this.h=!1}var iC=45e3,il={},Io={};M=bi.prototype;M.setTimeout=function(t){this.P=t};function ol(t,e,n){t.K=1,t.v=Aa(gn(e)),t.s=n,t.U=!0,Zm(t,null)}function Zm(t,e){t.F=Date.now(),Ii(t),t.A=gn(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),iy(n.h,"t",r),t.C=0,n=t.l.H,t.h=new Ym,t.g=Ay(t.l,n?e:null,!t.s),0<t.O&&(t.L=new eC(Je(t.Ia,t,t.g),t.O)),Hm(t.V,t.g,"readystatechange",t.gb),e=t.H?Nm(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),ni(1),tC(t.j,t.u,t.A,t.m,t.X,t.s)}M.gb=function(t){t=t.target;const e=this.L;e&&un(t)==3?e.l():this.Ia(t)};M.Ia=function(t){try{if(t==this.g)e:{const u=un(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>u)&&(u!=3||Zc||this.g&&(this.h.h||this.g.ga()||sd(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?ni(3):ni(2)),Ta(this);var n=this.g.ba();this.N=n;t:if(Jm(this)){var r=sd(this.g);t="";var s=r.length,i=un(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Qn(this),Ls(this);var o="";break t}this.h.i=new Q.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,nC(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Eo(a)){var l=a;break t}}l=null}if(n=l)xr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,al(this,n);else{this.i=!1,this.o=3,pt(12),Qn(this),Ls(this);break e}}this.U?(ey(this,u,o),Zc&&this.i&&u==3&&(Hm(this.V,this.W,"tick",this.fb),this.W.start())):(xr(this.j,this.m,o,null),al(this,o)),u==4&&Qn(this),this.i&&!this.I&&(u==4?Ey(this.l,this):(this.i=!1,Ii(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,pt(12)):(this.o=0,pt(13)),Qn(this),Ls(this)}}}catch{}finally{}};function Jm(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function ey(t,e,n){let r=!0,s;for(;!t.I&&t.C<n.length;)if(s=oC(t,n),s==Io){e==4&&(t.o=4,pt(14),r=!1),xr(t.j,t.m,null,"[Incomplete Response]");break}else if(s==il){t.o=4,pt(15),xr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else xr(t.j,t.m,s,null),al(t,s);Jm(t)&&s!=Io&&s!=il&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,pt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Mu(e),e.L=!0,pt(11))):(xr(t.j,t.m,n,"[Invalid Chunked Response]"),Qn(t),Ls(t))}M.fb=function(){if(this.g){var t=un(this.g),e=this.g.ga();this.C<e.length&&(Ta(this),ey(this,t,e),this.i&&t!=4&&Ii(this))}};function oC(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Io:(n=Number(e.substring(n,r)),isNaN(n)?il:(r+=1,r+n>e.length?Io:(e=e.substr(r,n),t.C=r+n,e)))}M.cancel=function(){this.I=!0,Qn(this)};function Ii(t){t.Y=Date.now()+t.P,ty(t,t.P)}function ty(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=wi(Je(t.eb,t),e)}function Ta(t){t.B&&(Q.clearTimeout(t.B),t.B=null)}M.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(rC(this.j,this.A),this.K!=2&&(ni(3),pt(17)),Qn(this),this.o=2,Ls(this)):ty(this,this.Y-t)};function Ls(t){t.l.G==0||t.I||Ey(t.l,t)}function Qn(t){Ta(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,bu(t.W),qm(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function al(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||cl(n.i,t))){if(n.I=t.N,!t.J&&cl(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Co(n),ka(n);else break e;Pu(n),pt(18)}}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&n.A==0&&!n.v&&(n.v=wi(Je(n.ab,n),6e3));if(1>=cy(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Yn(n,11)}else if((t.J||n.g==t)&&Co(n),!Eo(e))for(s=n.Ca.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.U=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.J=l[1],n.la=l[2];const u=l[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const h=l[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const d=t.g;if(d){const g=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var i=r.i;!i.g&&(ft(g,"spdy")||ft(g,"quic")||ft(g,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(Du(i,i.h),i.h=null))}if(r.D){const v=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.sa=v,Pe(r.F,r.D,v))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=Ty(r,r.H?r.la:null,r.W),o.J){ly(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(Ta(a),Ii(a)),r.g=o}else _y(r);0<n.l.length&&Da(n)}else l[0]!="stop"&&l[0]!="close"||Yn(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Yn(n,7):Ou(n):l[0]!="noop"&&n.j&&n.j.wa(l),n.A=0)}}ni(4)}catch{}}function aC(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(Yc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function Cu(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Yc(t)||typeof t=="string")Rm(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(Yc(t)||typeof t=="string"){n=[];for(var r=t.length,s=0;s<r;s++)n.push(s)}else for(s in n=[],r=0,t)n[r++]=s;r=aC(t),s=r.length;for(var i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}}function us(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof us)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}M=us.prototype;M.R=function(){ku(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};M.T=function(){return ku(this),this.g.concat()};function ku(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];cr(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var s={};for(n=e=0;e<t.g.length;)r=t.g[e],cr(s,r)||(t.g[n++]=r,s[r]=1),e++;t.g.length=n}}M.get=function(t,e){return cr(this.h,t)?this.h[t]:e};M.set=function(t,e){cr(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};M.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var s=n[r],i=this.get(s);t.call(e,i,s,this)}};function cr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var ny=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function cC(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function lr(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof lr){this.g=e!==void 0?e:t.g,To(this,t.j),this.s=t.s,Ao(this,t.i),So(this,t.m),this.l=t.l,e=t.h;var n=new ri;n.i=e.i,e.g&&(n.g=new us(e.g),n.h=e.h),td(this,n),this.o=t.o}else t&&(n=String(t).match(ny))?(this.g=!!e,To(this,n[1]||"",!0),this.s=Fs(n[2]||""),Ao(this,n[3]||"",!0),So(this,n[4]),this.l=Fs(n[5]||"",!0),td(this,n[6]||"",!0),this.o=Fs(n[7]||"")):(this.g=!!e,this.h=new ri(null,this.g))}lr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Cs(e,nd,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Cs(e,nd,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(Cs(n,n.charAt(0)=="/"?dC:fC,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Cs(n,gC)),t.join("")};function gn(t){return new lr(t)}function To(t,e,n){t.j=n?Fs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ao(t,e,n){t.i=n?Fs(e,!0):e}function So(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function td(t,e,n){e instanceof ri?(t.h=e,mC(t.h,t.g)):(n||(e=Cs(e,pC)),t.h=new ri(e,t.g))}function Pe(t,e,n){t.h.set(e,n)}function Aa(t){return Pe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function lC(t){return t instanceof lr?gn(t):new lr(t,void 0)}function uC(t,e,n,r){var s=new lr(null,void 0);return t&&To(s,t),e&&Ao(s,e),n&&So(s,n),r&&(s.l=r),s}function Fs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Cs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,hC),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function hC(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var nd=/[#\/\?@]/g,fC=/[#\?:]/g,dC=/[#\?]/g,pC=/[#\?@]/g,gC=/#/g;function ri(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Vn(t){t.g||(t.g=new us,t.h=0,t.i&&cC(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}M=ri.prototype;M.add=function(t,e){Vn(this),this.i=null,t=hs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function ry(t,e){Vn(t),e=hs(t,e),cr(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,cr(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&ku(t)))}function sy(t,e){return Vn(t),e=hs(t,e),cr(t.g.h,e)}M.forEach=function(t,e){Vn(this),this.g.forEach(function(n,r){Rm(n,function(s){t.call(e,s,r,this)},this)},this)};M.T=function(){Vn(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var s=t[r],i=0;i<s.length;i++)n.push(e[r]);return n};M.R=function(t){Vn(this);var e=[];if(typeof t=="string")sy(this,t)&&(e=Kf(e,this.g.get(hs(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Kf(e,t[n])}return e};M.set=function(t,e){return Vn(this),this.i=null,t=hs(this,t),sy(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};M.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function iy(t,e,n){ry(t,e),0<n.length&&(t.i=null,t.g.set(hs(t,e),du(n)),t.h+=n.length)}M.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],s=encodeURIComponent(String(r));r=this.R(r);for(var i=0;i<r.length;i++){var o=s;r[i]!==""&&(o+="="+encodeURIComponent(String(r[i]))),t.push(o)}}return this.i=t.join("&")};function hs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function mC(t,e){e&&!t.j&&(Vn(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(ry(this,r),iy(this,s,n))},t)),t.j=e}var yC=class{constructor(t,e){this.h=t,this.g=e}};function oy(t){this.l=t||vC,Q.PerformanceNavigationTiming?(t=Q.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Q.g&&Q.g.Ea&&Q.g.Ea()&&Q.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var vC=10;function ay(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function cy(t){return t.h?1:t.g?t.g.size:0}function cl(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Du(t,e){t.g?t.g.add(e):t.h=e}function ly(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}oy.prototype.cancel=function(){if(this.i=uy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function uy(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return du(t.i)}function Ru(){}Ru.prototype.stringify=function(t){return Q.JSON.stringify(t,void 0)};Ru.prototype.parse=function(t){return Q.JSON.parse(t,void 0)};function _C(){this.g=new Ru}function wC(t,e,n){const r=n||"";try{Cu(t,function(s,i){let o=s;vi(s)&&(o=wu(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function EC(t,e){const n=new wa;if(Q.Image){const r=new Image;r.onload=Bi($i,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Bi($i,n,r,"TestLoadImage: error",!1,e),r.onabort=Bi($i,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Bi($i,n,r,"TestLoadImage: timeout",!1,e),Q.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function $i(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Ti(t){this.l=t.$b||null,this.j=t.ib||!1}it(Ti,Tu);Ti.prototype.g=function(){return new Sa(this.l,this.j)};Ti.prototype.i=function(t){return function(){return t}}({});function Sa(t,e){Xe.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Nu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}it(Sa,Xe);var Nu=0;M=Sa.prototype;M.open=function(t,e){if(this.readyState!=Nu)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,si(this)};M.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Q).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};M.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ai(this)),this.readyState=Nu};M.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,si(this)),this.g&&(this.readyState=3,si(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof Q.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;hy(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function hy(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}M.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ai(this):si(this),this.readyState==3&&hy(this)}};M.Ua=function(t){this.g&&(this.response=this.responseText=t,Ai(this))};M.Ta=function(t){this.g&&(this.response=t,Ai(this))};M.ha=function(){this.g&&Ai(this)};function Ai(t){t.readyState=4,t.l=null,t.j=null,t.A=null,si(t)}M.setRequestHeader=function(t,e){this.v.append(t,e)};M.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};M.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function si(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Sa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var bC=Q.JSON.parse;function He(t){Xe.call(this),this.headers=new us,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=fy,this.K=this.L=!1}it(He,Xe);var fy="",IC=/^https?$/i,TC=["POST","PUT"];M=He.prototype;M.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():sl.g(),this.C=this.u?ed(this.u):ed(sl),this.g.onreadystatechange=Je(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){rd(this,i);return}t=n||"";const s=new us(this.headers);r&&Cu(r,function(i,o){s.set(o,i)}),r=MS(s.T()),n=Q.FormData&&t instanceof Q.FormData,!(0<=Dm(TC,e))||r||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{gy(this),0<this.B&&((this.K=AC(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Je(this.pa,this)):this.A=Iu(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){rd(this,i)}};function AC(t){return Xr&&VS()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function SC(t){return t.toLowerCase()=="content-type"}M.pa=function(){typeof fu!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,et(this,"timeout"),this.abort(8))};function rd(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,dy(t),Ca(t)}function dy(t){t.D||(t.D=!0,et(t,"complete"),et(t,"error"))}M.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,et(this,"complete"),et(this,"abort"),Ca(this))};M.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ca(this,!0)),He.Z.M.call(this)};M.Fa=function(){this.s||(this.F||this.v||this.l?py(this):this.cb())};M.cb=function(){py(this)};function py(t){if(t.h&&typeof fu!="undefined"&&(!t.C[1]||un(t)!=4||t.ba()!=2)){if(t.v&&un(t)==4)Iu(t.Fa,0,t);else if(et(t,"readystatechange"),un(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var s=String(t.H).match(ny)[1]||null;if(!s&&Q.self&&Q.self.location){var i=Q.self.location.protocol;s=i.substr(0,i.length-1)}r=!IC.test(s?s.toLowerCase():"")}n=r}if(n)et(t,"complete"),et(t,"success");else{t.m=6;try{var o=2<un(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",dy(t)}}finally{Ca(t)}}}}function Ca(t,e){if(t.g){gy(t);const n=t.g,r=t.C[0]?wo:null;t.g=null,t.C=null,e||et(t,"ready");try{n.onreadystatechange=r}catch{}}}function gy(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Q.clearTimeout(t.A),t.A=null)}function un(t){return t.g?t.g.readyState:0}M.ba=function(){try{return 2<un(this)?this.g.status:-1}catch{return-1}};M.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};M.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),bC(e)}};function sd(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case fy:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}M.Da=function(){return this.m};M.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function CC(t){let e="";return pu(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function xu(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=CC(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Pe(t,e,n))}function Is(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function my(t){this.za=0,this.l=[],this.h=new wa,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Is("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Is("baseRetryDelayMs",5e3,t),this.$a=Is("retryDelaySeedMs",1e4,t),this.Ya=Is("forwardChannelMaxRetries",2,t),this.ra=Is("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new oy(t&&t.concurrentRequestLimit),this.Ca=new _C,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}M=my.prototype;M.ma=8;M.G=1;function Ou(t){if(yy(t),t.G==3){var e=t.V++,n=gn(t.F);Pe(n,"SID",t.J),Pe(n,"RID",e),Pe(n,"TYPE","terminate"),Si(t,n),e=new bi(t,t.h,e,void 0),e.K=2,e.v=Aa(gn(n)),n=!1,Q.navigator&&Q.navigator.sendBeacon&&(n=Q.navigator.sendBeacon(e.v.toString(),"")),!n&&Q.Image&&(new Image().src=e.v,n=!0),n||(e.g=Ay(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Ii(e)}Iy(t)}M.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function ka(t){t.g&&(Mu(t),t.g.cancel(),t.g=null)}function yy(t){ka(t),t.u&&(Q.clearTimeout(t.u),t.u=null),Co(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&Q.clearTimeout(t.m),t.m=null)}function mc(t,e){t.l.push(new yC(t.Za++,e)),t.G==3&&Da(t)}function Da(t){ay(t.i)||t.m||(t.m=!0,Eu(t.Ha,t),t.C=0)}function kC(t,e){return cy(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=wi(Je(t.Ha,t,e),by(t,t.C)),t.C++,!0)}M.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new bi(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=Nm(i),xm(i,this.P)):i=this.P),this.o===null&&(s.H=i),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=vy(this,s,e),n=gn(this.F),Pe(n,"RID",t),Pe(n,"CVER",22),this.D&&Pe(n,"X-HTTP-Session-Id",this.D),Si(this,n),this.o&&i&&xu(n,this.o,i),Du(this.i,s),this.Ra&&Pe(n,"TYPE","init"),this.ja?(Pe(n,"$req",e),Pe(n,"SID","null"),s.$=!0,ol(s,n,null)):ol(s,n,e),this.G=2}}else this.G==3&&(t?id(this,t):this.l.length==0||ay(this.i)||id(this))};function id(t,e){var n;e?n=e.m:n=t.V++;const r=gn(t.F);Pe(r,"SID",t.J),Pe(r,"RID",n),Pe(r,"AID",t.U),Si(t,r),t.o&&t.s&&xu(r,t.o,t.s),n=new bi(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=vy(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Du(t.i,n),ol(n,r,e)}function Si(t,e){t.j&&Cu({},function(n,r){Pe(e,r,n)})}function vy(t,e,n){n=Math.min(t.l.length,n);var r=t.j?Je(t.j.Oa,t.j,t):null;e:{var s=t.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].h;const u=s[c].g;if(l-=i,0>l)i=Math.max(0,s[c].h-100),a=!1;else try{wC(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function _y(t){t.g||t.u||(t.Y=1,Eu(t.Ga,t),t.A=0)}function Pu(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=wi(Je(t.Ga,t),by(t,t.A)),t.A++,!0)}M.Ga=function(){if(this.u=null,wy(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=wi(Je(this.bb,this),t)}};M.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,pt(10),ka(this),wy(this))};function Mu(t){t.B!=null&&(Q.clearTimeout(t.B),t.B=null)}function wy(t){t.g=new bi(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=gn(t.oa);Pe(e,"RID","rpc"),Pe(e,"SID",t.J),Pe(e,"CI",t.N?"0":"1"),Pe(e,"AID",t.U),Si(t,e),Pe(e,"TYPE","xmlhttp"),t.o&&t.s&&xu(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Aa(gn(e)),n.s=null,n.U=!0,Zm(n,t)}M.ab=function(){this.v!=null&&(this.v=null,ka(this),Pu(this),pt(19))};function Co(t){t.v!=null&&(Q.clearTimeout(t.v),t.v=null)}function Ey(t,e){var n=null;if(t.g==e){Co(t),Mu(t),t.g=null;var r=2}else if(cl(t.i,e))n=e.D,ly(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;r=Ea(),et(r,new Gm(r,n,e,s)),Da(t)}else _y(t);else if(s=e.o,s==3||s==0&&0<t.I||!(r==1&&kC(t,e)||r==2&&Pu(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:Yn(t,5);break;case 4:Yn(t,10);break;case 3:Yn(t,6);break;default:Yn(t,2)}}}function by(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Yn(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=Je(t.jb,t);n||(n=new lr("//www.google.com/images/cleardot.gif"),Q.location&&Q.location.protocol=="http"||To(n,"https"),Aa(n)),EC(n.toString(),r)}else pt(2);t.G=0,t.j&&t.j.va(e),Iy(t),yy(t)}M.jb=function(t){t?(this.h.info("Successfully pinged google.com"),pt(2)):(this.h.info("Failed to ping google.com"),pt(1))};function Iy(t){t.G=0,t.I=-1,t.j&&((uy(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,du(t.l),t.l.length=0),t.j.ua())}function Ty(t,e,n){let r=lC(n);if(r.i!="")e&&Ao(r,e+"."+r.i),So(r,r.m);else{const s=Q.location;r=uC(s.protocol,e?e+"."+s.hostname:s.hostname,+s.port,n)}return t.aa&&pu(t.aa,function(s,i){Pe(r,i,s)}),e=t.D,n=t.sa,e&&n&&Pe(r,e,n),Pe(r,"VER",t.ma),Si(t,r),r}function Ay(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new He(new Ti({ib:!0})):new He(t.qa),e.L=t.H,e}function Sy(){}M=Sy.prototype;M.xa=function(){};M.wa=function(){};M.va=function(){};M.ua=function(){};M.Oa=function(){};function ko(){if(Xr&&!(10<=Number($S)))throw Error("Environmental error: no available transport.")}ko.prototype.g=function(t,e){return new Dt(t,e)};function Dt(t,e){Xe.call(this),this.g=new my(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Eo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Eo(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new fs(this)}it(Dt,Xe);Dt.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Eu(Je(t.hb,t,e))),pt(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Ty(t,null,t.W),Da(t)};Dt.prototype.close=function(){Ou(this.g)};Dt.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,mc(this.g,e)}else this.v?(e={},e.__data__=wu(t),mc(this.g,e)):mc(this.g,t)};Dt.prototype.M=function(){this.g.j=null,delete this.j,Ou(this.g),delete this.g,Dt.Z.M.call(this)};function Cy(t){Au.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}it(Cy,Au);function ky(){Su.call(this),this.status=1}it(ky,Su);function fs(t){this.g=t}it(fs,Sy);fs.prototype.xa=function(){et(this.g,"a")};fs.prototype.wa=function(t){et(this.g,new Cy(t))};fs.prototype.va=function(t){et(this.g,new ky(t))};fs.prototype.ua=function(){et(this.g,"b")};ko.prototype.createWebChannel=ko.prototype.g;Dt.prototype.send=Dt.prototype.u;Dt.prototype.open=Dt.prototype.m;Dt.prototype.close=Dt.prototype.close;ba.NO_ERROR=0;ba.TIMEOUT=8;ba.HTTP_ERROR=6;Xm.COMPLETE="complete";Qm.EventType=Ei;Ei.OPEN="a";Ei.CLOSE="b";Ei.ERROR="c";Ei.MESSAGE="d";Xe.prototype.listen=Xe.prototype.N;He.prototype.listenOnce=He.prototype.O;He.prototype.getLastError=He.prototype.La;He.prototype.getLastErrorCode=He.prototype.Da;He.prototype.getStatus=He.prototype.ba;He.prototype.getResponseJson=He.prototype.Qa;He.prototype.getResponseText=He.prototype.ga;He.prototype.send=He.prototype.ea;var DC=function(){return new ko},RC=function(){return Ea()},yc=ba,NC=Xm,xC=wr,od={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},OC=Ti,ji=Qm,PC=He;const ad="@firebase/firestore";/**
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
 */class mt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}mt.UNAUTHENTICATED=new mt(null),mt.GOOGLE_CREDENTIALS=new mt("google-credentials-uid"),mt.FIRST_PARTY=new mt("first-party-uid"),mt.MOCK_USER=new mt("mock-user");/**
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
 */let ds="9.6.11";/**
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
 */const ur=new la("@firebase/firestore");function cd(){return ur.logLevel}function V(t,...e){if(ur.logLevel<=de.DEBUG){const n=e.map(Lu);ur.debug(`Firestore (${ds}): ${t}`,...n)}}function Ln(t,...e){if(ur.logLevel<=de.ERROR){const n=e.map(Lu);ur.error(`Firestore (${ds}): ${t}`,...n)}}function ld(t,...e){if(ur.logLevel<=de.WARN){const n=e.map(Lu);ur.warn(`Firestore (${ds}): ${t}`,...n)}}function Lu(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function ee(t="Unexpected state"){const e=`FIRESTORE (${ds}) INTERNAL ASSERTION FAILED: `+t;throw Ln(e),new Error(e)}function De(t,e){t||ee()}function te(t,e){return t}/**
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
 */const A={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends yn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class sr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class MC{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class LC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(mt.UNAUTHENTICATED))}shutdown(){}}class FC{constructor(e){this.t=e,this.currentUser=mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new sr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new sr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new sr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(De(typeof r.accessToken=="string"),new MC(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return De(e===null||typeof e=="string"),new mt(e)}}class UC{constructor(e,n,r){this.type="FirstParty",this.user=mt.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const s=e.auth.getAuthHeaderValueForFirstParty([]);s&&this.headers.set("Authorization",s),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class BC{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new UC(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(mt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class VC{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class $C{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const r=i=>{i.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.p;return this.p=i.token,V("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.g.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.g.getImmediate({optional:!0});i?s(i):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(De(typeof n.token=="string"),this.p=n.token,new VC(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */class Fu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.I(r),this.T=r=>n.writeSequenceNumber(r))}I(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}/**
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
 */function jC(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */Fu.A=-1;class Dy{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=jC(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ge(t,e){return t<e?-1:t>e?1:0}function Qr(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class lt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new K(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new K(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new K(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return lt.fromMillis(Date.now())}static fromDate(e){return lt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new lt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ge(this.nanoseconds,e.nanoseconds):ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class se{constructor(e){this.timestamp=e}static fromTimestamp(e){return new se(e)}static min(){return new se(new lt(0,0))}static max(){return new se(new lt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */function ud(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ps(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ry(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class ii{constructor(e,n,r){n===void 0?n=0:n>e.length&&ee(),r===void 0?r=e.length-n:r>e.length-n&&ee(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ii.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ii?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Me extends ii{construct(e,n,r){return new Me(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new K(A.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Me(n)}static emptyPath(){return new Me([])}}const zC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class yt extends ii{construct(e,n,r){return new yt(e,n,r)}static isValidIdentifier(e){return zC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),yt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new yt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new K(A.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new K(A.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new K(A.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new K(A.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new yt(n)}static emptyPath(){return new yt([])}}/**
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
 */class ll{constructor(e){this.fields=e,e.sort(yt.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Qr(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class rt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new rt(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new rt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}rt.EMPTY_BYTE_STRING=new rt("");const HC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Fn(t){if(De(!!t),typeof t=="string"){let e=0;const n=HC.exec(t);if(De(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Be(t.seconds),nanos:Be(t.nanos)}}function Be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Yr(t){return typeof t=="string"?rt.fromBase64String(t):rt.fromUint8Array(t)}/**
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
 */function Ny(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function xy(t){const e=t.mapValue.fields.__previous_value__;return Ny(e)?xy(e):e}function oi(t){const e=Fn(t.mapValue.fields.__local_write_time__.timestampValue);return new lt(e.seconds,e.nanos)}/**
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
 */class qC{constructor(e,n,r,s,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Zr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Zr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Zr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function gs(t){return t==null}function Do(t){return t===0&&1/t==-1/0}function KC(t){return typeof t=="number"&&Number.isInteger(t)&&!Do(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(Me.fromString(e))}static fromName(e){return new q(Me.fromString(e).popFirst(5))}static empty(){return new q(Me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Me.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Me.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new Me(e.slice()))}}function hr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ny(t)?4:WC(t)?9:10:ee()}function tn(t,e){if(t===e)return!0;const n=hr(t);if(n!==hr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return oi(t).isEqual(oi(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=Fn(r.timestampValue),o=Fn(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return Yr(r.bytesValue).isEqual(Yr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return Be(r.geoPointValue.latitude)===Be(s.geoPointValue.latitude)&&Be(r.geoPointValue.longitude)===Be(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return Be(r.integerValue)===Be(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=Be(r.doubleValue),o=Be(s.doubleValue);return i===o?Do(i)===Do(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Qr(t.arrayValue.values||[],e.arrayValue.values||[],tn);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(ud(i)!==ud(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!tn(i[a],o[a])))return!1;return!0}(t,e);default:return ee()}}function ai(t,e){return(t.values||[]).find(n=>tn(n,e))!==void 0}function Jr(t,e){if(t===e)return 0;const n=hr(t),r=hr(e);if(n!==r)return ge(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ge(t.booleanValue,e.booleanValue);case 2:return function(s,i){const o=Be(s.integerValue||s.doubleValue),a=Be(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return hd(t.timestampValue,e.timestampValue);case 4:return hd(oi(t),oi(e));case 5:return ge(t.stringValue,e.stringValue);case 6:return function(s,i){const o=Yr(s),a=Yr(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=ge(o[c],a[c]);if(l!==0)return l}return ge(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,i){const o=ge(Be(s.latitude),Be(i.latitude));return o!==0?o:ge(Be(s.longitude),Be(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Jr(o[c],a[c]);if(l)return l}return ge(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,i){const o=s.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=ge(a[u],l[u]);if(h!==0)return h;const f=Jr(o[a[u]],c[l[u]]);if(f!==0)return f}return ge(a.length,l.length)}(t.mapValue,e.mapValue);default:throw ee()}}function hd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ge(t,e);const n=Fn(t),r=Fn(e),s=ge(n.seconds,r.seconds);return s!==0?s:ge(n.nanos,r.nanos)}function Br(t){return ul(t)}function ul(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const s=Fn(r);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Yr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,q.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let s="[",i=!0;for(const o of r.values||[])i?i=!1:s+=",",s+=ul(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(r){const s=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const a of s)o?o=!1:i+=",",i+=`${a}:${ul(r.fields[a])}`;return i+"}"}(t.mapValue):ee();var e,n}function hl(t){return!!t&&"integerValue"in t}function Uu(t){return!!t&&"arrayValue"in t}function fd(t){return!!t&&"nullValue"in t}function dd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Qi(t){return!!t&&"mapValue"in t}function Us(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ps(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Us(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Us(t.arrayValue.values[n]);return e}return Object.assign({},t)}function WC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class zt{constructor(e){this.value=e}static empty(){return new zt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Qi(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Us(n)}setAll(e){let n=yt.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Us(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Qi(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return tn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Qi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ps(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new zt(Us(this.value))}}function Oy(t){const e=[];return ps(t.fields,(n,r)=>{const s=new yt([n]);if(Qi(r)){const i=Oy(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new ll(e)}/**
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
 */class ot{constructor(e,n,r,s,i,o){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.data=i,this.documentState=o}static newInvalidDocument(e){return new ot(e,0,se.min(),se.min(),zt.empty(),0)}static newFoundDocument(e,n,r){return new ot(e,1,n,se.min(),r,0)}static newNoDocument(e,n){return new ot(e,2,n,se.min(),zt.empty(),0)}static newUnknownDocument(e,n){return new ot(e,3,n,se.min(),zt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=zt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=zt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ot&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ot(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}function GC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=se.fromTimestamp(r===1e9?new lt(n+1,0):new lt(n,r));return new es(s,q.empty(),e)}function XC(t){return new es(t.readTime,t.key,-1)}class es{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new es(se.min(),q.empty(),-1)}static max(){return new es(se.max(),q.empty(),-1)}}function QC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:ge(t.largestBatchId,e.largestBatchId))}/**
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
 */class YC{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.P=null}}function pd(t,e=null,n=[],r=[],s=null,i=null,o=null){return new YC(t,e,n,r,s,i,o)}function Bu(t){const e=te(t);if(e.P===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(s=r).field.canonicalString()+s.op.toString()+Br(s.value);var s}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),gs(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Br(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Br(r)).join(",")),e.P=n}return e.P}function ZC(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${Br(r.value)}`;var r}).join(", ")}]`),gs(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Br(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Br(n)).join(",")),`Target(${e})`}function Vu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<t.orderBy.length;s++)if(!o1(t.orderBy[s],e.orderBy[s]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],r=e.filters[s],n.op!==r.op||!n.field.isEqual(r.field)||!tn(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!md(t.startAt,e.startAt)&&md(t.endAt,e.endAt)}function fl(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class vt extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.V(e,n,r):new JC(e,n,r):n==="array-contains"?new n1(e,r):n==="in"?new r1(e,r):n==="not-in"?new s1(e,r):n==="array-contains-any"?new i1(e,r):new vt(e,n,r)}static V(e,n,r){return n==="in"?new e1(e,r):new t1(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.v(Jr(n,this.value)):n!==null&&hr(this.value)===hr(n)&&this.v(Jr(n,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class JC extends vt{constructor(e,n,r){super(e,n,r),this.key=q.fromName(r.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.v(n)}}class e1 extends vt{constructor(e,n){super(e,"in",n),this.keys=Py("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class t1 extends vt{constructor(e,n){super(e,"not-in",n),this.keys=Py("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Py(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>q.fromName(r.referenceValue))}class n1 extends vt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Uu(n)&&ai(n.arrayValue,this.value)}}class r1 extends vt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ai(this.value.arrayValue,n)}}class s1 extends vt{constructor(e,n){super(e,"not-in",n)}matches(e){if(ai(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ai(this.value.arrayValue,n)}}class i1 extends vt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Uu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ai(this.value.arrayValue,r))}}class Ro{constructor(e,n){this.position=e,this.inclusive=n}}class Bs{constructor(e,n="asc"){this.field=e,this.dir=n}}function o1(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function gd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=q.comparator(q.fromName(o.referenceValue),n.key):r=Jr(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function md(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!tn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ra{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.D=null,this.C=null,this.startAt,this.endAt}}function a1(t,e,n,r,s,i,o,a){return new Ra(t,e,n,r,s,i,o,a)}function $u(t){return new Ra(t)}function Yi(t){return!gs(t.limit)&&t.limitType==="F"}function No(t){return!gs(t.limit)&&t.limitType==="L"}function c1(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function l1(t){for(const e of t.filters)if(e.S())return e.field;return null}function u1(t){return t.collectionGroup!==null}function ci(t){const e=te(t);if(e.D===null){e.D=[];const n=l1(e),r=c1(e);if(n!==null&&r===null)n.isKeyField()||e.D.push(new Bs(n)),e.D.push(new Bs(yt.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.D.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new Bs(yt.keyField(),i))}}}return e.D}function fr(t){const e=te(t);if(!e.C)if(e.limitType==="F")e.C=pd(e.path,e.collectionGroup,ci(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of ci(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Bs(i.field,o))}const r=e.endAt?new Ro(e.endAt.position,!e.endAt.inclusive):null,s=e.startAt?new Ro(e.startAt.position,!e.startAt.inclusive):null;e.C=pd(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e.C}function h1(t,e,n){return new Ra(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Na(t,e){return Vu(fr(t),fr(e))&&t.limitType===e.limitType}function My(t){return`${Bu(fr(t))}|lt:${t.limitType}`}function dl(t){return`Query(target=${ZC(fr(t))}; limitType=${t.limitType})`}function ju(t,e){return e.isFoundDocument()&&function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):q.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,r){for(const s of n.explicitOrderBy)if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(s,i,o){const a=gd(s,i,o);return s.inclusive?a<=0:a<0}(n.startAt,ci(n),r)||n.endAt&&!function(s,i,o){const a=gd(s,i,o);return s.inclusive?a>=0:a>0}(n.endAt,ci(n),r))}(t,e)}function f1(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Ly(t){return(e,n)=>{let r=!1;for(const s of ci(t)){const i=d1(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function d1(t,e,n){const r=t.field.isKeyField()?q.comparator(e.key,n.key):function(s,i,o){const a=i.data.field(s),c=o.data.field(s);return a!==null&&c!==null?Jr(a,c):ee()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ee()}}/**
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
 */function Fy(t,e){if(t.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Do(e)?"-0":e}}function Uy(t){return{integerValue:""+t}}function p1(t,e){return KC(e)?Uy(e):Fy(t,e)}/**
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
 */class xa{constructor(){this._=void 0}}function g1(t,e,n){return t instanceof xo?function(r,s){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&(i.fields.__previous_value__=s),{mapValue:i}}(n,e):t instanceof li?Vy(t,e):t instanceof ui?$y(t,e):function(r,s){const i=By(r,s),o=yd(i)+yd(r.k);return hl(i)&&hl(r.k)?Uy(o):Fy(r.M,o)}(t,e)}function m1(t,e,n){return t instanceof li?Vy(t,e):t instanceof ui?$y(t,e):n}function By(t,e){return t instanceof Oo?hl(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class xo extends xa{}class li extends xa{constructor(e){super(),this.elements=e}}function Vy(t,e){const n=jy(e);for(const r of t.elements)n.some(s=>tn(s,r))||n.push(r);return{arrayValue:{values:n}}}class ui extends xa{constructor(e){super(),this.elements=e}}function $y(t,e){let n=jy(e);for(const r of t.elements)n=n.filter(s=>!tn(s,r));return{arrayValue:{values:n}}}class Oo extends xa{constructor(e,n){super(),this.M=e,this.k=n}}function yd(t){return Be(t.integerValue||t.doubleValue)}function jy(t){return Uu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function y1(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof li&&r instanceof li||n instanceof ui&&r instanceof ui?Qr(n.elements,r.elements,tn):n instanceof Oo&&r instanceof Oo?tn(n.k,r.k):n instanceof xo&&r instanceof xo}(t.transform,e.transform)}class v1{constructor(e,n){this.version=e,this.transformResults=n}}class Vr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Vr}static exists(e){return new Vr(void 0,e)}static updateTime(e){return new Vr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Zi(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Oa{}function _1(t,e,n){t instanceof Pa?function(r,s,i){const o=r.value.clone(),a=wd(r.fieldTransforms,s,i.transformResults);o.setAll(a),s.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Ci?function(r,s,i){if(!Zi(r.precondition,s))return void s.convertToUnknownDocument(i.version);const o=wd(r.fieldTransforms,s,i.transformResults),a=s.data;a.setAll(zy(r)),a.setAll(o),s.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(r,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function pl(t,e,n){t instanceof Pa?function(r,s,i){if(!Zi(r.precondition,s))return;const o=r.value.clone(),a=Ed(r.fieldTransforms,i,s);o.setAll(a),s.convertToFoundDocument(_d(s),o).setHasLocalMutations()}(t,e,n):t instanceof Ci?function(r,s,i){if(!Zi(r.precondition,s))return;const o=Ed(r.fieldTransforms,i,s),a=s.data;a.setAll(zy(r)),a.setAll(o),s.convertToFoundDocument(_d(s),a).setHasLocalMutations()}(t,e,n):function(r,s){Zi(r.precondition,s)&&s.convertToNoDocument(se.min())}(t,e)}function w1(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=By(r.transform,s||null);i!=null&&(n==null&&(n=zt.empty()),n.set(r.field,i))}return n||null}function vd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Qr(n,r,(s,i)=>y1(s,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function _d(t){return t.isFoundDocument()?t.version:se.min()}class Pa extends Oa{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}}class Ci extends Oa{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}}function zy(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function wd(t,e,n){const r=new Map;De(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,m1(o,a,n[s]))}return r}function Ed(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,g1(i,o,e))}return r}class E1 extends Oa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class b1 extends Oa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
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
 */class I1{constructor(e){this.count=e}}/**
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
 */var Ue,ce;function T1(t){switch(t){default:return ee();case A.CANCELLED:case A.UNKNOWN:case A.DEADLINE_EXCEEDED:case A.RESOURCE_EXHAUSTED:case A.INTERNAL:case A.UNAVAILABLE:case A.UNAUTHENTICATED:return!1;case A.INVALID_ARGUMENT:case A.NOT_FOUND:case A.ALREADY_EXISTS:case A.PERMISSION_DENIED:case A.FAILED_PRECONDITION:case A.ABORTED:case A.OUT_OF_RANGE:case A.UNIMPLEMENTED:case A.DATA_LOSS:return!0}}function Hy(t){if(t===void 0)return Ln("GRPC error has no .code"),A.UNKNOWN;switch(t){case Ue.OK:return A.OK;case Ue.CANCELLED:return A.CANCELLED;case Ue.UNKNOWN:return A.UNKNOWN;case Ue.DEADLINE_EXCEEDED:return A.DEADLINE_EXCEEDED;case Ue.RESOURCE_EXHAUSTED:return A.RESOURCE_EXHAUSTED;case Ue.INTERNAL:return A.INTERNAL;case Ue.UNAVAILABLE:return A.UNAVAILABLE;case Ue.UNAUTHENTICATED:return A.UNAUTHENTICATED;case Ue.INVALID_ARGUMENT:return A.INVALID_ARGUMENT;case Ue.NOT_FOUND:return A.NOT_FOUND;case Ue.ALREADY_EXISTS:return A.ALREADY_EXISTS;case Ue.PERMISSION_DENIED:return A.PERMISSION_DENIED;case Ue.FAILED_PRECONDITION:return A.FAILED_PRECONDITION;case Ue.ABORTED:return A.ABORTED;case Ue.OUT_OF_RANGE:return A.OUT_OF_RANGE;case Ue.UNIMPLEMENTED:return A.UNIMPLEMENTED;case Ue.DATA_LOSS:return A.DATA_LOSS;default:return ee()}}(ce=Ue||(Ue={}))[ce.OK=0]="OK",ce[ce.CANCELLED=1]="CANCELLED",ce[ce.UNKNOWN=2]="UNKNOWN",ce[ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ce[ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ce[ce.NOT_FOUND=5]="NOT_FOUND",ce[ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",ce[ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",ce[ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",ce[ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ce[ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ce[ce.ABORTED=10]="ABORTED",ce[ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",ce[ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",ce[ce.INTERNAL=13]="INTERNAL",ce[ce.UNAVAILABLE=14]="UNAVAILABLE",ce[ce.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class ms{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ps(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Ry(this.inner)}size(){return this.innerSize}}/**
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
 */class Qe{constructor(e,n){this.comparator=e,this.root=n||Ze.EMPTY}insert(e,n){return new Qe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ze.BLACK,null,null))}remove(e){return new Qe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ze.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new zi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new zi(this.root,e,this.comparator,!1)}getReverseIterator(){return new zi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new zi(this.root,e,this.comparator,!0)}}class zi{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ze{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r!=null?r:Ze.RED,this.left=s!=null?s:Ze.EMPTY,this.right=i!=null?i:Ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Ze(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,s!=null?s:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ze.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ee();const e=this.left.check();if(e!==this.right.check())throw ee();return e+(this.isRed()?0:1)}}Ze.EMPTY=null,Ze.RED=!0,Ze.BLACK=!1;Ze.EMPTY=new class{constructor(){this.size=0}get key(){throw ee()}get value(){throw ee()}get color(){throw ee()}get left(){throw ee()}get right(){throw ee()}copy(t,e,n,r,s){return this}insert(t,e,n){return new Ze(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class tt{constructor(e){this.comparator=e,this.data=new Qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new bd(this.data.getIterator())}getIteratorFrom(e){return new bd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof tt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new tt(this.comparator);return n.data=e,n}}class bd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */const A1=new Qe(q.comparator);function dr(){return A1}const S1=new Qe(q.comparator);function gl(){return S1}function vc(){return new ms(t=>t.toString(),(t,e)=>t.isEqual(e))}const C1=new Qe(q.comparator),k1=new tt(q.comparator);function xe(...t){let e=k1;for(const n of t)e=e.add(n);return e}const D1=new tt(ge);function qy(){return D1}/**
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
 */class Ma{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,ki.createSynthesizedTargetChangeForCurrentChange(e,n)),new Ma(se.min(),r,qy(),dr(),xe())}}class ki{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n){return new ki(rt.EMPTY_BYTE_STRING,n,xe(),xe(),xe())}}/**
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
 */class Ji{constructor(e,n,r,s){this.O=e,this.removedTargetIds=n,this.key=r,this.F=s}}class Ky{constructor(e,n){this.targetId=e,this.$=n}}class Wy{constructor(e,n,r=rt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Id{constructor(){this.B=0,this.L=Ad(),this.U=rt.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return this.B!==0}get j(){return this.K}W(e){e.approximateByteSize()>0&&(this.K=!0,this.U=e)}H(){let e=xe(),n=xe(),r=xe();return this.L.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ee()}}),new ki(this.U,this.q,e,n,r)}J(){this.K=!1,this.L=Ad()}Y(e,n){this.K=!0,this.L=this.L.insert(e,n)}X(e){this.K=!0,this.L=this.L.remove(e)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class R1{constructor(e){this.nt=e,this.st=new Map,this.it=dr(),this.rt=Td(),this.ot=new tt(ge)}ut(e){for(const n of e.O)e.F&&e.F.isFoundDocument()?this.at(n,e.F):this.ct(n,e.key,e.F);for(const n of e.removedTargetIds)this.ct(n,e.key,e.F)}ht(e){this.forEachTarget(e,n=>{const r=this.lt(n);switch(e.state){case 0:this.ft(n)&&r.W(e.resumeToken);break;case 1:r.tt(),r.G||r.J(),r.W(e.resumeToken);break;case 2:r.tt(),r.G||this.removeTarget(n);break;case 3:this.ft(n)&&(r.et(),r.W(e.resumeToken));break;case 4:this.ft(n)&&(this.dt(n),r.W(e.resumeToken));break;default:ee()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.st.forEach((r,s)=>{this.ft(s)&&n(s)})}_t(e){const n=e.targetId,r=e.$.count,s=this.wt(n);if(s){const i=s.target;if(fl(i))if(r===0){const o=new q(i.path);this.ct(n,o,ot.newNoDocument(o,se.min()))}else De(r===1);else this.gt(n)!==r&&(this.dt(n),this.ot=this.ot.add(n))}}yt(e){const n=new Map;this.st.forEach((i,o)=>{const a=this.wt(o);if(a){if(i.current&&fl(a.target)){const c=new q(a.target.path);this.it.get(c)!==null||this.It(o,c)||this.ct(o,c,ot.newNoDocument(c,e))}i.j&&(n.set(o,i.H()),i.J())}});let r=xe();this.rt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.wt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(r=r.add(i))}),this.it.forEach((i,o)=>o.setReadTime(e));const s=new Ma(e,n,this.ot,this.it,r);return this.it=dr(),this.rt=Td(),this.ot=new tt(ge),s}at(e,n){if(!this.ft(e))return;const r=this.It(e,n.key)?2:0;this.lt(e).Y(n.key,r),this.it=this.it.insert(n.key,n),this.rt=this.rt.insert(n.key,this.Tt(n.key).add(e))}ct(e,n,r){if(!this.ft(e))return;const s=this.lt(e);this.It(e,n)?s.Y(n,1):s.X(n),this.rt=this.rt.insert(n,this.Tt(n).delete(e)),r&&(this.it=this.it.insert(n,r))}removeTarget(e){this.st.delete(e)}gt(e){const n=this.lt(e).H();return this.nt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Z(e){this.lt(e).Z()}lt(e){let n=this.st.get(e);return n||(n=new Id,this.st.set(e,n)),n}Tt(e){let n=this.rt.get(e);return n||(n=new tt(ge),this.rt=this.rt.insert(e,n)),n}ft(e){const n=this.wt(e)!==null;return n||V("WatchChangeAggregator","Detected inactive target",e),n}wt(e){const n=this.st.get(e);return n&&n.G?null:this.nt.Et(e)}dt(e){this.st.set(e,new Id),this.nt.getRemoteKeysForTarget(e).forEach(n=>{this.ct(e,n,null)})}It(e,n){return this.nt.getRemoteKeysForTarget(e).has(n)}}function Td(){return new Qe(q.comparator)}function Ad(){return new Qe(q.comparator)}/**
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
 */const N1=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),x1=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class O1{constructor(e,n){this.databaseId=e,this.N=n}}function Po(t,e){return t.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Gy(t,e){return t.N?e.toBase64():e.toUint8Array()}function P1(t,e){return Po(t,e.toTimestamp())}function fn(t){return De(!!t),se.fromTimestamp(function(e){const n=Fn(e);return new lt(n.seconds,n.nanos)}(t))}function zu(t,e){return function(n){return new Me(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Xy(t){const e=Me.fromString(t);return De(Zy(e)),e}function ml(t,e){return zu(t.databaseId,e.path)}function _c(t,e){const n=Xy(e);if(n.get(1)!==t.databaseId.projectId)throw new K(A.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new K(A.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(Qy(n))}function yl(t,e){return zu(t.databaseId,e)}function M1(t){const e=Xy(t);return e.length===4?Me.emptyPath():Qy(e)}function vl(t){return new Me(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Qy(t){return De(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Sd(t,e,n){return{name:ml(t,e),fields:n.value.mapValue.fields}}function L1(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ee()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,l){return c.N?(De(l===void 0||typeof l=="string"),rt.fromBase64String(l||"")):(De(l===void 0||l instanceof Uint8Array),rt.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?A.UNKNOWN:Hy(c.code);return new K(l,c.message||"")}(o);n=new Wy(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=_c(t,r.document.name),i=fn(r.document.updateTime),o=new zt({mapValue:{fields:r.document.fields}}),a=ot.newFoundDocument(s,i,o),c=r.targetIds||[],l=r.removedTargetIds||[];n=new Ji(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=_c(t,r.document),i=r.readTime?fn(r.readTime):se.min(),o=ot.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Ji([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=_c(t,r.document),i=r.removedTargetIds||[];n=new Ji([],i,s,null)}else{if(!("filter"in e))return ee();{e.filter;const r=e.filter;r.targetId;const s=r.count||0,i=new I1(s),o=r.targetId;n=new Ky(o,i)}}return n}function F1(t,e){let n;if(e instanceof Pa)n={update:Sd(t,e.key,e.value)};else if(e instanceof E1)n={delete:ml(t,e.key)};else if(e instanceof Ci)n={update:Sd(t,e.key,e.data),updateMask:W1(e.fieldMask)};else{if(!(e instanceof b1))return ee();n={verify:ml(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof xo)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof li)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ui)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Oo)return{fieldPath:i.field.canonicalString(),increment:o.k};throw ee()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:P1(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ee()}(t,e.precondition)),n}function U1(t,e){return t&&t.length>0?(De(e!==void 0),t.map(n=>function(r,s){let i=r.updateTime?fn(r.updateTime):fn(s);return i.isEqual(se.min())&&(i=fn(s)),new v1(i,r.transformResults||[])}(n,e))):[]}function B1(t,e){return{documents:[yl(t,e.path)]}}function V1(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=yl(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=yl(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length===0)return;const l=c.map(u=>function(h){if(h.op==="=="){if(dd(h.value))return{unaryFilter:{field:Cr(h.field),op:"IS_NAN"}};if(fd(h.value))return{unaryFilter:{field:Cr(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(dd(h.value))return{unaryFilter:{field:Cr(h.field),op:"IS_NOT_NAN"}};if(fd(h.value))return{unaryFilter:{field:Cr(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Cr(h.field),op:H1(h.op),value:h.value}}}(u));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Cr(u.field),direction:z1(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.N||gs(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function $1(t){let e=M1(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){De(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=Yy(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Bs(Or(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,gs(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,f=u.values||[];return new Ro(f,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,f=u.values||[];return new Ro(f,h)}(n.endAt)),a1(e,s,o,i,a,"F",c,l)}function j1(t,e){const n=function(r,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return ee()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Yy(t){return t?t.unaryFilter!==void 0?[K1(t)]:t.fieldFilter!==void 0?[q1(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Yy(e)).reduce((e,n)=>e.concat(n)):ee():[]}function z1(t){return N1[t]}function H1(t){return x1[t]}function Cr(t){return{fieldPath:t.canonicalString()}}function Or(t){return yt.fromServerFormat(t.fieldPath)}function q1(t){return vt.create(Or(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ee()}}(t.fieldFilter.op),t.fieldFilter.value)}function K1(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Or(t.unaryFilter.field);return vt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Or(t.unaryFilter.field);return vt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Or(t.unaryFilter.field);return vt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Or(t.unaryFilter.field);return vt.create(s,"!=",{nullValue:"NULL_VALUE"});default:return ee()}}function W1(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Zy(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */const G1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class X1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ee(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new k((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof k?n:k.resolve(n)}catch(n){return k.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):k.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):k.reject(n)}static resolve(e){return new k((n,r)=>{n(e)})}static reject(e){return new k((n,r)=>{r(e)})}static waitFor(e){return new k((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=k.resolve(!1);for(const r of e)n=n.next(s=>s?k.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}}function Di(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Q1{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&_1(i,e,r[s])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&pl(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&pl(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const r=e.get(n.key),s=r;this.applyToLocalView(s),r.isValidDocument()||s.convertToNoDocument(se.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),xe())}isEqual(e){return this.batchId===e.batchId&&Qr(this.mutations,e.mutations,(n,r)=>vd(n,r))&&Qr(this.baseMutations,e.baseMutations,(n,r)=>vd(n,r))}}class Hu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){De(e.mutations.length===r.length);let s=C1;const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Hu(e,n,r,s)}}/**
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
 */class Y1{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class ir{constructor(e,n,r,s,i=se.min(),o=se.min(),a=rt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new ir(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new ir(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new ir(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class Z1{constructor(e){this.Jt=e}}function J1(t){const e=$1({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?h1(e,e.limit,"L"):e}/**
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
 */class ek{constructor(){this.qe=new tk}addToCollectionParentIndex(e,n){return this.qe.add(n),k.resolve()}getCollectionParents(e,n){return k.resolve(this.qe.getEntries(n))}addFieldIndex(e,n){return k.resolve()}deleteFieldIndex(e,n){return k.resolve()}getDocumentsMatchingTarget(e,n){return k.resolve(null)}getFieldIndex(e,n){return k.resolve(null)}getFieldIndexes(e,n){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}updateCollectionGroup(e,n,r){return k.resolve()}updateIndexEntries(e,n){return k.resolve()}}class tk{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new tt(Me.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new tt(Me.comparator)).toArray()}}/**
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
 */class ts{constructor(e){this.mn=e}next(){return this.mn+=2,this.mn}static gn(){return new ts(0)}static yn(){return new ts(-1)}}/**
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
 */async function Ri(t){if(t.code!==A.FAILED_PRECONDITION||t.message!==G1)throw t;V("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class nk{constructor(){this.changes=new ms(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ot.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?k.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class rk{constructor(e,n,r){this.ds=e,this.Bs=n,this.indexManager=r}Ls(e,n){return this.Bs.getAllMutationBatchesAffectingDocumentKey(e,n).next(r=>this.Us(e,n,r))}Us(e,n,r){return this.ds.getEntry(e,n).next(s=>{for(const i of r)i.applyToLocalView(s);return s})}qs(e,n){e.forEach((r,s)=>{for(const i of n)i.applyToLocalView(s)})}Ks(e,n){return this.ds.getEntries(e,n).next(r=>this.Gs(e,r).next(()=>r))}Gs(e,n){return this.Bs.getAllMutationBatchesAffectingDocumentKeys(e,n).next(r=>this.qs(n,r))}Qs(e,n,r){return function(s){return q.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.js(e,n.path):u1(n)?this.Ws(e,n,r):this.zs(e,n,r)}js(e,n){return this.Ls(e,new q(n)).next(r=>{let s=gl();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}Ws(e,n,r){const s=n.collectionGroup;let i=gl();return this.indexManager.getCollectionParents(e,s).next(o=>k.forEach(o,a=>{const c=function(l,u){return new Ra(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(s));return this.zs(e,c,r).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}zs(e,n,r){let s;return this.ds.getAllFromCollection(e,n.path,r).next(i=>(s=i,this.Bs.getAllMutationBatchesAffectingQuery(e,n))).next(i=>{for(const o of i)for(const a of o.mutations){const c=a.key;let l=s.get(c);l==null&&(l=ot.newInvalidDocument(c),s=s.insert(c,l)),pl(a,l,o.localWriteTime),l.isFoundDocument()||(s=s.remove(c))}}).next(()=>(s.forEach((i,o)=>{ju(n,o)||(s=s.remove(i))}),s))}}/**
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
 */class qu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Hs=r,this.Js=s}static Ys(e,n){let r=xe(),s=xe();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new qu(e,n.fromCache,r,s)}}/**
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
 */class sk{Xs(e){this.Zs=e}Qs(e,n,r,s){return function(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}(n)||r.isEqual(se.min())?this.ti(e,n):this.Zs.Ks(e,s).next(i=>{const o=this.ei(n,i);return(Yi(n)||No(n))&&this.ni(n.limitType,o,s,r)?this.ti(e,n):(cd()<=de.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),dl(n)),this.Zs.Qs(e,n,GC(r,-1)).next(a=>(o.forEach(c=>{a=a.insert(c.key,c)}),a)))})}ei(e,n){let r=new tt(Ly(e));return n.forEach((s,i)=>{ju(e,i)&&(r=r.add(i))}),r}ni(e,n,r,s){if(r.size!==n.size)return!0;const i=e==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ti(e,n){return cd()<=de.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",dl(n)),this.Zs.Qs(e,n,es.min())}}/**
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
 */class ik{constructor(e,n,r,s){this.persistence=e,this.si=n,this.M=s,this.ii=new Qe(ge),this.ri=new ms(i=>Bu(i),Vu),this.oi=new Map,this.ui=e.getRemoteDocumentCache(),this.fs=e.getTargetCache(),this._s=e.getBundleCache(),this.ai(r)}ai(e){this.indexManager=this.persistence.getIndexManager(e),this.Bs=this.persistence.getMutationQueue(e,this.indexManager),this.ci=new rk(this.ui,this.Bs,this.indexManager),this.ui.setIndexManager(this.indexManager),this.si.Xs(this.ci)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ii))}}function ok(t,e,n,r){return new ik(t,e,n,r)}async function Jy(t,e){const n=te(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.Bs.getAllMutationBatches(r).next(i=>(s=i,n.ai(e),n.Bs.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=xe();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.ci.Ks(r,c).next(l=>({hi:l,removedBatchIds:o,addedBatchIds:a}))})})}function ak(t,e){const n=te(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.ui.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let f=k.resolve();return h.forEach(d=>{f=f.next(()=>l.getEntry(a,d)).next(g=>{const v=c.docVersions.get(d);De(v!==null),g.version.compareTo(v)<0&&(u.applyToRemoteDocument(g,c),g.isValidDocument()&&(g.setReadTime(c.commitVersion),l.addEntry(g)))})}),f.next(()=>o.Bs.removeMutationBatch(a,u))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.Bs.performConsistencyCheck(r)).next(()=>n.ci.Ks(r,s))})}function ev(t){const e=te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.fs.getLastRemoteSnapshotVersion(n))}function ck(t,e){const n=te(t),r=e.snapshotVersion;let s=n.ii;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ui.newChangeBuffer({trackRemovals:!0});s=n.ii;const a=[];e.targetChanges.forEach((l,u)=>{const h=s.get(u);if(!h)return;a.push(n.fs.removeMatchingKeys(i,l.removedDocuments,u).next(()=>n.fs.addMatchingKeys(i,l.addedDocuments,u)));let f=h.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(u)?f=f.withResumeToken(rt.EMPTY_BYTE_STRING,se.min()).withLastLimboFreeSnapshotVersion(se.min()):l.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(l.resumeToken,r)),s=s.insert(u,f),function(d,g,v){return d.resumeToken.approximateByteSize()===0||g.snapshotVersion.toMicroseconds()-d.snapshotVersion.toMicroseconds()>=3e8?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(h,f,l)&&a.push(n.fs.updateTargetData(i,f))});let c=dr();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(lk(i,o,e.documentUpdates).next(l=>{c=l})),!r.isEqual(se.min())){const l=n.fs.getLastRemoteSnapshotVersion(i).next(u=>n.fs.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(l)}return k.waitFor(a).next(()=>o.apply(i)).next(()=>n.ci.Gs(i,c)).next(()=>c)}).then(i=>(n.ii=s,i))}function lk(t,e,n){let r=xe();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let i=dr();return n.forEach((o,a)=>{const c=s.get(o);a.isNoDocument()&&a.version.isEqual(se.min())?(e.removeEntry(o,a.readTime),i=i.insert(o,a)):!c.isValidDocument()||a.version.compareTo(c.version)>0||a.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(a),i=i.insert(o,a)):V("LocalStore","Ignoring outdated watch update for ",o,". Current version:",c.version," Watch version:",a.version)}),i})}function uk(t,e){const n=te(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.Bs.getNextMutationBatchAfterBatchId(r,e)))}function hk(t,e){const n=te(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.fs.getTargetData(r,e).next(i=>i?(s=i,k.resolve(s)):n.fs.allocateTargetId(r).next(o=>(s=new ir(e,o,0,r.currentSequenceNumber),n.fs.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ii.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ii=n.ii.insert(r.targetId,r),n.ri.set(e,r.targetId)),r})}async function _l(t,e,n){const r=te(t),s=r.ii.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Di(o))throw o;V("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ii=r.ii.remove(e),r.ri.delete(s.target)}function Cd(t,e,n){const r=te(t);let s=se.min(),i=xe();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=te(a),h=u.ri.get(l);return h!==void 0?k.resolve(u.ii.get(h)):u.fs.getTargetData(c,l)}(r,o,fr(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.fs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.si.Qs(o,e,n?s:se.min(),n?i:xe())).next(a=>(fk(r,f1(e),a),{documents:a,li:i})))}function fk(t,e,n){let r=se.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.oi.set(e,r)}/**
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
 */class dk{constructor(e){this.M=e,this.wi=new Map,this.mi=new Map}getBundleMetadata(e,n){return k.resolve(this.wi.get(n))}saveBundleMetadata(e,n){var r;return this.wi.set(n.id,{id:(r=n).id,version:r.version,createTime:fn(r.createTime)}),k.resolve()}getNamedQuery(e,n){return k.resolve(this.mi.get(n))}saveNamedQuery(e,n){return this.mi.set(n.name,function(r){return{name:r.name,query:J1(r.bundledQuery),readTime:fn(r.readTime)}}(n)),k.resolve()}}/**
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
 */class pk{constructor(){this.overlays=new Qe(q.comparator),this.gi=new Map}getOverlay(e,n){return k.resolve(this.overlays.get(n))}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.Xt(e,n,i)}),k.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.gi.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.gi.delete(r)),k.resolve()}getOverlaysForCollection(e,n,r){const s=vc(),i=n.length+1,o=new q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return k.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Qe((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=vc(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=vc(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return k.resolve(a)}Xt(e,n,r){if(r===null)return;const s=this.overlays.get(r.key);if(s!==null){const o=this.gi.get(s.largestBatchId).delete(r.key);this.gi.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Y1(n,r));let i=this.gi.get(n);i===void 0&&(i=xe(),this.gi.set(n,i)),this.gi.set(n,i.add(r.key))}}/**
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
 */class Ku{constructor(){this.yi=new tt(qe.pi),this.Ii=new tt(qe.Ti)}isEmpty(){return this.yi.isEmpty()}addReference(e,n){const r=new qe(e,n);this.yi=this.yi.add(r),this.Ii=this.Ii.add(r)}Ei(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ai(new qe(e,n))}Ri(e,n){e.forEach(r=>this.removeReference(r,n))}Pi(e){const n=new q(new Me([])),r=new qe(n,e),s=new qe(n,e+1),i=[];return this.Ii.forEachInRange([r,s],o=>{this.Ai(o),i.push(o.key)}),i}bi(){this.yi.forEach(e=>this.Ai(e))}Ai(e){this.yi=this.yi.delete(e),this.Ii=this.Ii.delete(e)}Vi(e){const n=new q(new Me([])),r=new qe(n,e),s=new qe(n,e+1);let i=xe();return this.Ii.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new qe(e,0),r=this.yi.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class qe{constructor(e,n){this.key=e,this.vi=n}static pi(e,n){return q.comparator(e.key,n.key)||ge(e.vi,n.vi)}static Ti(e,n){return ge(e.vi,n.vi)||q.comparator(e.key,n.key)}}/**
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
 */class gk{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.Bs=[],this.Si=1,this.Di=new tt(qe.pi)}checkEmpty(e){return k.resolve(this.Bs.length===0)}addMutationBatch(e,n,r,s){const i=this.Si;this.Si++,this.Bs.length>0&&this.Bs[this.Bs.length-1];const o=new Q1(i,n,r,s);this.Bs.push(o);for(const a of s)this.Di=this.Di.add(new qe(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return k.resolve(o)}lookupMutationBatch(e,n){return k.resolve(this.Ci(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.xi(r),i=s<0?0:s;return k.resolve(this.Bs.length>i?this.Bs[i]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.Bs.length===0?-1:this.Si-1)}getAllMutationBatches(e){return k.resolve(this.Bs.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new qe(n,0),s=new qe(n,Number.POSITIVE_INFINITY),i=[];return this.Di.forEachInRange([r,s],o=>{const a=this.Ci(o.vi);i.push(a)}),k.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new tt(ge);return n.forEach(s=>{const i=new qe(s,0),o=new qe(s,Number.POSITIVE_INFINITY);this.Di.forEachInRange([i,o],a=>{r=r.add(a.vi)})}),k.resolve(this.Ni(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;q.isDocumentKey(i)||(i=i.child(""));const o=new qe(new q(i),0);let a=new tt(ge);return this.Di.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.vi)),!0)},o),k.resolve(this.Ni(a))}Ni(e){const n=[];return e.forEach(r=>{const s=this.Ci(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){De(this.ki(n.batchId,"removed")===0),this.Bs.shift();let r=this.Di;return k.forEach(n.mutations,s=>{const i=new qe(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Di=r})}_n(e){}containsKey(e,n){const r=new qe(n,0),s=this.Di.firstAfterOrEqual(r);return k.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.Bs.length,k.resolve()}ki(e,n){return this.xi(e)}xi(e){return this.Bs.length===0?0:e-this.Bs[0].batchId}Ci(e){const n=this.xi(e);return n<0||n>=this.Bs.length?null:this.Bs[n]}}/**
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
 */class mk{constructor(e){this.Mi=e,this.docs=new Qe(q.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mi(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return k.resolve(r?r.document.mutableCopy():ot.newInvalidDocument(n))}getEntries(e,n){let r=dr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ot.newInvalidDocument(s))}),k.resolve(r)}getAllFromCollection(e,n,r){let s=dr();const i=new q(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||QC(XC(c),r)<=0||(s=s.insert(c.key,c.mutableCopy()))}return k.resolve(s)}getAllFromCollectionGroup(e,n,r,s){ee()}Oi(e,n){return k.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new yk(this)}getSize(e){return k.resolve(this.size)}}class yk extends nk{constructor(e){super(),this.Kn=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Kn.addEntry(e,s)):this.Kn.removeEntry(r)}),k.waitFor(n)}getFromCache(e,n){return this.Kn.getEntry(e,n)}getAllFromCache(e,n){return this.Kn.getEntries(e,n)}}/**
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
 */class vk{constructor(e){this.persistence=e,this.Fi=new ms(n=>Bu(n),Vu),this.lastRemoteSnapshotVersion=se.min(),this.highestTargetId=0,this.$i=0,this.Bi=new Ku,this.targetCount=0,this.Li=ts.gn()}forEachTarget(e,n){return this.Fi.forEach((r,s)=>n(s)),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.$i)}allocateTargetId(e){return this.highestTargetId=this.Li.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.$i&&(this.$i=n),k.resolve()}Tn(e){this.Fi.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Li=new ts(n),this.highestTargetId=n),e.sequenceNumber>this.$i&&(this.$i=e.sequenceNumber)}addTargetData(e,n){return this.Tn(n),this.targetCount+=1,k.resolve()}updateTargetData(e,n){return this.Tn(n),k.resolve()}removeTargetData(e,n){return this.Fi.delete(n.target),this.Bi.Pi(n.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Fi.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fi.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),k.waitFor(i).next(()=>s)}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,n){const r=this.Fi.get(n)||null;return k.resolve(r)}addMatchingKeys(e,n,r){return this.Bi.Ei(n,r),k.resolve()}removeMatchingKeys(e,n,r){this.Bi.Ri(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),k.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Bi.Pi(n),k.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Bi.Vi(n);return k.resolve(r)}containsKey(e,n){return k.resolve(this.Bi.containsKey(n))}}/**
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
 */class _k{constructor(e,n){this.Ui={},this.overlays={},this.es=new Fu(0),this.ns=!1,this.ns=!0,this.referenceDelegate=e(this),this.fs=new vk(this),this.indexManager=new ek,this.ds=function(r){return new mk(r)}(r=>this.referenceDelegate.qi(r)),this.M=new Z1(n),this._s=new dk(this.M)}start(){return Promise.resolve()}shutdown(){return this.ns=!1,Promise.resolve()}get started(){return this.ns}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new pk,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Ui[e.toKey()];return r||(r=new gk(n,this.referenceDelegate),this.Ui[e.toKey()]=r),r}getTargetCache(){return this.fs}getRemoteDocumentCache(){return this.ds}getBundleCache(){return this._s}runTransaction(e,n,r){V("MemoryPersistence","Starting transaction:",e);const s=new wk(this.es.next());return this.referenceDelegate.Ki(),r(s).next(i=>this.referenceDelegate.Gi(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Qi(e,n){return k.or(Object.values(this.Ui).map(r=>()=>r.containsKey(e,n)))}}class wk extends X1{constructor(e){super(),this.currentSequenceNumber=e}}class Wu{constructor(e){this.persistence=e,this.ji=new Ku,this.Wi=null}static zi(e){return new Wu(e)}get Hi(){if(this.Wi)return this.Wi;throw ee()}addReference(e,n,r){return this.ji.addReference(r,n),this.Hi.delete(r.toString()),k.resolve()}removeReference(e,n,r){return this.ji.removeReference(r,n),this.Hi.add(r.toString()),k.resolve()}markPotentiallyOrphaned(e,n){return this.Hi.add(n.toString()),k.resolve()}removeTarget(e,n){this.ji.Pi(n.targetId).forEach(s=>this.Hi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Hi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ki(){this.Wi=new Set}Gi(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.Hi,r=>{const s=q.fromPath(r);return this.Ji(e,s).next(i=>{i||n.removeEntry(s,se.min())})}).next(()=>(this.Wi=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ji(e,n).next(r=>{r?this.Hi.delete(n.toString()):this.Hi.add(n.toString())})}qi(e){return 0}Ji(e,n){return k.or([()=>k.resolve(this.ji.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Qi(e,n)])}}class kd{constructor(){this.activeTargetIds=qy()}Zi(e){this.activeTargetIds=this.activeTargetIds.add(e)}tr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ek{constructor(){this.$r=new kd,this.Br={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.$r.Zi(e),this.Br[e]||"not-current"}updateQueryState(e,n,r){this.Br[e]=n}removeLocalQueryTarget(e){this.$r.tr(e)}isLocalQueryTarget(e){return this.$r.activeTargetIds.has(e)}clearQueryState(e){delete this.Br[e]}getAllActiveQueryTargets(){return this.$r.activeTargetIds}isActiveQueryTarget(e){return this.$r.activeTargetIds.has(e)}start(){return this.$r=new kd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class bk{Lr(e){}shutdown(){}}/**
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
 */class Dd{constructor(){this.Ur=()=>this.qr(),this.Kr=()=>this.Gr(),this.Qr=[],this.jr()}Lr(e){this.Qr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Kr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Kr)}qr(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Qr)e(0)}Gr(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Qr)e(1)}static vt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const Ik={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class Tk{constructor(e){this.Wr=e.Wr,this.zr=e.zr}Hr(e){this.Jr=e}Yr(e){this.Xr=e}onMessage(e){this.Zr=e}close(){this.zr()}send(e){this.Wr(e)}eo(){this.Jr()}no(e){this.Xr(e)}so(e){this.Zr(e)}}/**
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
 */class Ak extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.io=n+"://"+e.host,this.ro="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}oo(e,n,r,s,i){const o=this.uo(e,n);V("RestConnection","Sending: ",o,r);const a={};return this.ao(a,s,i),this.co(e,o,a,r).then(c=>(V("RestConnection","Received: ",c),c),c=>{throw ld("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",r),c})}ho(e,n,r,s,i){return this.oo(e,n,r,s,i)}ao(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+ds,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}uo(e,n){const r=Ik[e];return`${this.io}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,n,r,s){return new Promise((i,o)=>{const a=new PC;a.listenOnce(NC.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case yc.NO_ERROR:const l=a.getResponseJson();V("Connection","XHR received:",JSON.stringify(l)),i(l);break;case yc.TIMEOUT:V("Connection",'RPC "'+e+'" timed out'),o(new K(A.DEADLINE_EXCEEDED,"Request time out"));break;case yc.HTTP_ERROR:const u=a.getStatus();if(V("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const f=function(d){const g=d.toLowerCase().replace(/_/g,"-");return Object.values(A).indexOf(g)>=0?g:A.UNKNOWN}(h.status);o(new K(f,h.message))}else o(new K(A.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new K(A.UNAVAILABLE,"Connection failed."));break;default:ee()}}finally{V("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(s);a.send(n,"POST",c,r,15)})}lo(e,n,r){const s=[this.io,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=DC(),o=RC(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new OC({})),this.ao(a.initMessageHeaders,n,r),Vg()||$g()||jb()||jg()||zb()||Zl()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=s.join("");V("Connection","Creating WebChannel: "+c,a);const l=i.createWebChannel(c,a);let u=!1,h=!1;const f=new Tk({Wr:g=>{h?V("Connection","Not sending because WebChannel is closed:",g):(u||(V("Connection","Opening WebChannel transport."),l.open(),u=!0),V("Connection","WebChannel sending:",g),l.send(g))},zr:()=>l.close()}),d=(g,v,_)=>{g.listen(v,T=>{try{_(T)}catch(O){setTimeout(()=>{throw O},0)}})};return d(l,ji.EventType.OPEN,()=>{h||V("Connection","WebChannel transport opened.")}),d(l,ji.EventType.CLOSE,()=>{h||(h=!0,V("Connection","WebChannel transport closed"),f.no())}),d(l,ji.EventType.ERROR,g=>{h||(h=!0,ld("Connection","WebChannel transport errored:",g),f.no(new K(A.UNAVAILABLE,"The operation could not be completed")))}),d(l,ji.EventType.MESSAGE,g=>{var v;if(!h){const _=g.data[0];De(!!_);const T=_,O=T.error||((v=T[0])===null||v===void 0?void 0:v.error);if(O){V("Connection","WebChannel received error:",O);const j=O.status;let F=function(P){const N=Ue[P];if(N!==void 0)return Hy(N)}(j),Y=O.message;F===void 0&&(F=A.INTERNAL,Y="Unknown error status: "+j+" with message "+O.message),h=!0,f.no(new K(F,Y)),l.close()}else V("Connection","WebChannel received:",_),f.so(_)}}),d(o,xC.STAT_EVENT,g=>{g.stat===od.PROXY?V("Connection","Detected buffering proxy"):g.stat===od.NOPROXY&&V("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.eo()},0),f}}function wc(){return typeof document!="undefined"?document:null}/**
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
 */function La(t){return new O1(t,!0)}class tv{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Yn=e,this.timerId=n,this.fo=r,this._o=s,this.wo=i,this.mo=0,this.yo=null,this.po=Date.now(),this.reset()}reset(){this.mo=0}Io(){this.mo=this.wo}To(e){this.cancel();const n=Math.floor(this.mo+this.Eo()),r=Math.max(0,Date.now()-this.po),s=Math.max(0,n-r);s>0&&V("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.mo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.yo=this.Yn.enqueueAfterDelay(this.timerId,s,()=>(this.po=Date.now(),e())),this.mo*=this._o,this.mo<this.fo&&(this.mo=this.fo),this.mo>this.wo&&(this.mo=this.wo)}Ao(){this.yo!==null&&(this.yo.skipDelay(),this.yo=null)}cancel(){this.yo!==null&&(this.yo.cancel(),this.yo=null)}Eo(){return(Math.random()-.5)*this.mo}}/**
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
 */class nv{constructor(e,n,r,s,i,o,a,c){this.Yn=e,this.Ro=r,this.Po=s,this.bo=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Vo=0,this.vo=null,this.So=null,this.stream=null,this.Do=new tv(e,n)}Co(){return this.state===1||this.state===5||this.xo()}xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.No()}async stop(){this.Co()&&await this.close(0)}ko(){this.state=0,this.Do.reset()}Mo(){this.xo()&&this.vo===null&&(this.vo=this.Yn.enqueueAfterDelay(this.Ro,6e4,()=>this.Oo()))}Fo(e){this.$o(),this.stream.send(e)}async Oo(){if(this.xo())return this.close(0)}$o(){this.vo&&(this.vo.cancel(),this.vo=null)}Bo(){this.So&&(this.So.cancel(),this.So=null)}async close(e,n){this.$o(),this.Bo(),this.Do.cancel(),this.Vo++,e!==4?this.Do.reset():n&&n.code===A.RESOURCE_EXHAUSTED?(Ln(n.toString()),Ln("Using maximum backoff delay to prevent overloading the backend."),this.Do.Io()):n&&n.code===A.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Lo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Yr(n)}Lo(){}auth(){this.state=1;const e=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Vo===n&&this.qo(r,s)},r=>{e(()=>{const s=new K(A.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Ko(s)})})}qo(e,n){const r=this.Uo(this.Vo);this.stream=this.Go(e,n),this.stream.Hr(()=>{r(()=>(this.state=2,this.So=this.Yn.enqueueAfterDelay(this.Po,1e4,()=>(this.xo()&&(this.state=3),Promise.resolve())),this.listener.Hr()))}),this.stream.Yr(s=>{r(()=>this.Ko(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}No(){this.state=5,this.Do.To(async()=>{this.state=0,this.start()})}Ko(e){return V("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return n=>{this.Yn.enqueueAndForget(()=>this.Vo===e?n():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Sk extends nv{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.M=i}Go(e,n){return this.bo.lo("Listen",e,n)}onMessage(e){this.Do.reset();const n=L1(this.M,e),r=function(s){if(!("targetChange"in s))return se.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?se.min():i.readTime?fn(i.readTime):se.min()}(e);return this.listener.Qo(n,r)}jo(e){const n={};n.database=vl(this.M),n.addTarget=function(s,i){let o;const a=i.target;return o=fl(a)?{documents:B1(s,a)}:{query:V1(s,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Gy(s,i.resumeToken):i.snapshotVersion.compareTo(se.min())>0&&(o.readTime=Po(s,i.snapshotVersion.toTimestamp())),o}(this.M,e);const r=j1(this.M,e);r&&(n.labels=r),this.Fo(n)}Wo(e){const n={};n.database=vl(this.M),n.removeTarget=e,this.Fo(n)}}class Ck extends nv{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.M=i,this.zo=!1}get Ho(){return this.zo}start(){this.zo=!1,this.lastStreamToken=void 0,super.start()}Lo(){this.zo&&this.Jo([])}Go(e,n){return this.bo.lo("Write",e,n)}onMessage(e){if(De(!!e.streamToken),this.lastStreamToken=e.streamToken,this.zo){this.Do.reset();const n=U1(e.writeResults,e.commitTime),r=fn(e.commitTime);return this.listener.Yo(r,n)}return De(!e.writeResults||e.writeResults.length===0),this.zo=!0,this.listener.Xo()}Zo(){const e={};e.database=vl(this.M),this.Fo(e)}Jo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>F1(this.M,r))};this.Fo(n)}}/**
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
 */class kk extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.bo=r,this.M=s,this.tu=!1}eu(){if(this.tu)throw new K(A.FAILED_PRECONDITION,"The client has already been terminated.")}oo(e,n,r){return this.eu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.bo.oo(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new K(A.UNKNOWN,s.toString())})}ho(e,n,r){return this.eu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.bo.ho(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new K(A.UNKNOWN,s.toString())})}terminate(){this.tu=!0}}class Dk{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.nu=0,this.su=null,this.iu=!0}ru(){this.nu===0&&(this.ou("Unknown"),this.su=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.su=null,this.uu("Backend didn't respond within 10 seconds."),this.ou("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.ou("Unknown"):(this.nu++,this.nu>=1&&(this.cu(),this.uu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ou("Offline")))}set(e){this.cu(),this.nu=0,e==="Online"&&(this.iu=!1),this.ou(e)}ou(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}uu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.iu?(Ln(n),this.iu=!1):V("OnlineStateTracker",n)}cu(){this.su!==null&&(this.su.cancel(),this.su=null)}}/**
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
 */class Rk{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.hu=[],this.lu=new Map,this.fu=new Set,this.du=[],this._u=i,this._u.Lr(o=>{r.enqueueAndForget(async()=>{Er(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=te(a);c.fu.add(4),await Ni(c),c.wu.set("Unknown"),c.fu.delete(4),await Fa(c)}(this))})}),this.wu=new Dk(r,s)}}async function Fa(t){if(Er(t))for(const e of t.du)await e(!0)}async function Ni(t){for(const e of t.du)await e(!1)}function rv(t,e){const n=te(t);n.lu.has(e.targetId)||(n.lu.set(e.targetId,e),Qu(n)?Xu(n):ys(n).xo()&&Gu(n,e))}function sv(t,e){const n=te(t),r=ys(n);n.lu.delete(e),r.xo()&&iv(n,e),n.lu.size===0&&(r.xo()?r.Mo():Er(n)&&n.wu.set("Unknown"))}function Gu(t,e){t.mu.Z(e.targetId),ys(t).jo(e)}function iv(t,e){t.mu.Z(e),ys(t).Wo(e)}function Xu(t){t.mu=new R1({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.lu.get(e)||null}),ys(t).start(),t.wu.ru()}function Qu(t){return Er(t)&&!ys(t).Co()&&t.lu.size>0}function Er(t){return te(t).fu.size===0}function ov(t){t.mu=void 0}async function Nk(t){t.lu.forEach((e,n)=>{Gu(t,e)})}async function xk(t,e){ov(t),Qu(t)?(t.wu.au(e),Xu(t)):t.wu.set("Unknown")}async function Ok(t,e,n){if(t.wu.set("Online"),e instanceof Wy&&e.state===2&&e.cause)try{await async function(r,s){const i=s.cause;for(const o of s.targetIds)r.lu.has(o)&&(await r.remoteSyncer.rejectListen(o,i),r.lu.delete(o),r.mu.removeTarget(o))}(t,e)}catch(r){V("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Mo(t,r)}else if(e instanceof Ji?t.mu.ut(e):e instanceof Ky?t.mu._t(e):t.mu.ht(e),!n.isEqual(se.min()))try{const r=await ev(t.localStore);n.compareTo(r)>=0&&await function(s,i){const o=s.mu.yt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=s.lu.get(c);l&&s.lu.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=s.lu.get(a);if(!c)return;s.lu.set(a,c.withResumeToken(rt.EMPTY_BYTE_STRING,c.snapshotVersion)),iv(s,a);const l=new ir(c.target,a,1,c.sequenceNumber);Gu(s,l)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){V("RemoteStore","Failed to raise snapshot:",r),await Mo(t,r)}}async function Mo(t,e,n){if(!Di(e))throw e;t.fu.add(1),await Ni(t),t.wu.set("Offline"),n||(n=()=>ev(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await n(),t.fu.delete(1),await Fa(t)})}function av(t,e){return e().catch(n=>Mo(t,n,e))}async function Ua(t){const e=te(t),n=Un(e);let r=e.hu.length>0?e.hu[e.hu.length-1].batchId:-1;for(;Pk(e);)try{const s=await uk(e.localStore,r);if(s===null){e.hu.length===0&&n.Mo();break}r=s.batchId,Mk(e,s)}catch(s){await Mo(e,s)}cv(e)&&lv(e)}function Pk(t){return Er(t)&&t.hu.length<10}function Mk(t,e){t.hu.push(e);const n=Un(t);n.xo()&&n.Ho&&n.Jo(e.mutations)}function cv(t){return Er(t)&&!Un(t).Co()&&t.hu.length>0}function lv(t){Un(t).start()}async function Lk(t){Un(t).Zo()}async function Fk(t){const e=Un(t);for(const n of t.hu)e.Jo(n.mutations)}async function Uk(t,e,n){const r=t.hu.shift(),s=Hu.from(r,e,n);await av(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ua(t)}async function Bk(t,e){e&&Un(t).Ho&&await async function(n,r){if(s=r.code,T1(s)&&s!==A.ABORTED){const i=n.hu.shift();Un(n).ko(),await av(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,r)),await Ua(n)}var s}(t,e),cv(t)&&lv(t)}async function Rd(t,e){const n=te(t);n.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");const r=Er(n);n.fu.add(3),await Ni(n),r&&n.wu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.fu.delete(3),await Fa(n)}async function Vk(t,e){const n=te(t);e?(n.fu.delete(2),await Fa(n)):e||(n.fu.add(2),await Ni(n),n.wu.set("Unknown"))}function ys(t){return t.gu||(t.gu=function(e,n,r){const s=te(e);return s.eu(),new Sk(n,s.bo,s.authCredentials,s.appCheckCredentials,s.M,r)}(t.datastore,t.asyncQueue,{Hr:Nk.bind(null,t),Yr:xk.bind(null,t),Qo:Ok.bind(null,t)}),t.du.push(async e=>{e?(t.gu.ko(),Qu(t)?Xu(t):t.wu.set("Unknown")):(await t.gu.stop(),ov(t))})),t.gu}function Un(t){return t.yu||(t.yu=function(e,n,r){const s=te(e);return s.eu(),new Ck(n,s.bo,s.authCredentials,s.appCheckCredentials,s.M,r)}(t.datastore,t.asyncQueue,{Hr:Lk.bind(null,t),Yr:Bk.bind(null,t),Xo:Fk.bind(null,t),Yo:Uk.bind(null,t)}),t.du.push(async e=>{e?(t.yu.ko(),await Ua(t)):(await t.yu.stop(),t.hu.length>0&&(V("RemoteStore",`Stopping write stream with ${t.hu.length} pending writes`),t.hu=[]))})),t.yu}/**
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
 */class Yu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new sr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Yu(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(A.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Zu(t,e){if(Ln("AsyncQueue",`${e}: ${t}`),Di(t))return new K(A.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class $r{constructor(e){this.comparator=e?(n,r)=>e(n,r)||q.comparator(n.key,r.key):(n,r)=>q.comparator(n.key,r.key),this.keyedMap=gl(),this.sortedSet=new Qe(this.comparator)}static emptySet(e){return new $r(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof $r)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new $r;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Nd{constructor(){this.pu=new Qe(q.comparator)}track(e){const n=e.doc.key,r=this.pu.get(n);r?e.type!==0&&r.type===3?this.pu=this.pu.insert(n,e):e.type===3&&r.type!==1?this.pu=this.pu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.pu=this.pu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.pu=this.pu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.pu=this.pu.remove(n):e.type===1&&r.type===2?this.pu=this.pu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.pu=this.pu.insert(n,{type:2,doc:e.doc}):ee():this.pu=this.pu.insert(n,e)}Iu(){const e=[];return this.pu.inorderTraversal((n,r)=>{e.push(r)}),e}}class ns{constructor(e,n,r,s,i,o,a,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,r,s){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new ns(e,n,$r.emptySet(n),i,r,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Na(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class $k{constructor(){this.Tu=void 0,this.listeners=[]}}class jk{constructor(){this.queries=new ms(e=>My(e),Na),this.onlineState="Unknown",this.Eu=new Set}}async function zk(t,e){const n=te(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new $k),s)try{i.Tu=await n.onListen(r)}catch(o){const a=Zu(o,`Initialization of query '${dl(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.Au(n.onlineState),i.Tu&&e.Ru(i.Tu)&&Ju(n)}async function Hk(t,e){const n=te(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function qk(t,e){const n=te(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Ru(s)&&(r=!0);o.Tu=s}}r&&Ju(n)}function Kk(t,e,n){const r=te(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function Ju(t){t.Eu.forEach(e=>{e.next()})}class Wk{constructor(e,n,r){this.query=e,this.Pu=n,this.bu=!1,this.Vu=null,this.onlineState="Unknown",this.options=r||{}}Ru(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ns(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.bu?this.vu(e)&&(this.Pu.next(e),n=!0):this.Su(e,this.onlineState)&&(this.Du(e),n=!0),this.Vu=e,n}onError(e){this.Pu.error(e)}Au(e){this.onlineState=e;let n=!1;return this.Vu&&!this.bu&&this.Su(this.Vu,e)&&(this.Du(this.Vu),n=!0),n}Su(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Cu||!r)&&(!e.docs.isEmpty()||n==="Offline")}vu(e){if(e.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Du(e){e=ns.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Pu.next(e)}}/**
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
 */class uv{constructor(e){this.key=e}}class hv{constructor(e){this.key=e}}class Gk{constructor(e,n){this.query=e,this.$u=n,this.Bu=null,this.current=!1,this.Lu=xe(),this.mutatedKeys=xe(),this.Uu=Ly(e),this.qu=new $r(this.Uu)}get Ku(){return this.$u}Gu(e,n){const r=n?n.Qu:new Nd,s=n?n.qu:this.qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=Yi(this.query)&&s.size===this.query.limit?s.last():null,l=No(this.query)&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const f=s.get(u),d=ju(this.query,h)?h:null,g=!!f&&this.mutatedKeys.has(f.key),v=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let _=!1;f&&d?f.data.isEqual(d.data)?g!==v&&(r.track({type:3,doc:d}),_=!0):this.ju(f,d)||(r.track({type:2,doc:d}),_=!0,(c&&this.Uu(d,c)>0||l&&this.Uu(d,l)<0)&&(a=!0)):!f&&d?(r.track({type:0,doc:d}),_=!0):f&&!d&&(r.track({type:1,doc:f}),_=!0,(c||l)&&(a=!0)),_&&(d?(o=o.add(d),i=v?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),Yi(this.query)||No(this.query))for(;o.size>this.query.limit;){const u=Yi(this.query)?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{qu:o,Qu:r,ni:a,mutatedKeys:i}}ju(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.qu;this.qu=e.qu,this.mutatedKeys=e.mutatedKeys;const i=e.Qu.Iu();i.sort((l,u)=>function(h,f){const d=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee()}};return d(h)-d(f)}(l.type,u.type)||this.Uu(l.doc,u.doc)),this.Wu(r);const o=n?this.zu():[],a=this.Lu.size===0&&this.current?1:0,c=a!==this.Bu;return this.Bu=a,i.length!==0||c?{snapshot:new ns(this.query,e.qu,s,i,e.mutatedKeys,a===0,c,!1),Hu:o}:{Hu:o}}Au(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({qu:this.qu,Qu:new Nd,mutatedKeys:this.mutatedKeys,ni:!1},!1)):{Hu:[]}}Ju(e){return!this.$u.has(e)&&!!this.qu.has(e)&&!this.qu.get(e).hasLocalMutations}Wu(e){e&&(e.addedDocuments.forEach(n=>this.$u=this.$u.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.$u=this.$u.delete(n)),this.current=e.current)}zu(){if(!this.current)return[];const e=this.Lu;this.Lu=xe(),this.qu.forEach(r=>{this.Ju(r.key)&&(this.Lu=this.Lu.add(r.key))});const n=[];return e.forEach(r=>{this.Lu.has(r)||n.push(new hv(r))}),this.Lu.forEach(r=>{e.has(r)||n.push(new uv(r))}),n}Yu(e){this.$u=e.li,this.Lu=xe();const n=this.Gu(e.documents);return this.applyChanges(n,!0)}Xu(){return ns.fromInitialDocuments(this.query,this.qu,this.mutatedKeys,this.Bu===0)}}class Xk{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Qk{constructor(e){this.key=e,this.Zu=!1}}class Yk{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.ta={},this.ea=new ms(a=>My(a),Na),this.na=new Map,this.sa=new Set,this.ia=new Qe(q.comparator),this.ra=new Map,this.oa=new Ku,this.ua={},this.aa=new Map,this.ca=ts.yn(),this.onlineState="Unknown",this.ha=void 0}get isPrimaryClient(){return this.ha===!0}}async function Zk(t,e){const n=cD(t);let r,s;const i=n.ea.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Xu();else{const o=await hk(n.localStore,fr(e));n.isPrimaryClient&&rv(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await Jk(n,e,r,a==="current")}return s}async function Jk(t,e,n,r){t.la=(u,h,f)=>async function(d,g,v,_){let T=g.view.Gu(v);T.ni&&(T=await Cd(d.localStore,g.query,!1).then(({documents:F})=>g.view.Gu(F,T)));const O=_&&_.targetChanges.get(g.targetId),j=g.view.applyChanges(T,d.isPrimaryClient,O);return Od(d,g.targetId,j.Hu),j.snapshot}(t,u,h,f);const s=await Cd(t.localStore,e,!0),i=new Gk(e,s.li),o=i.Gu(s.documents),a=ki.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),c=i.applyChanges(o,t.isPrimaryClient,a);Od(t,n,c.Hu);const l=new Xk(e,n,i);return t.ea.set(e,l),t.na.has(n)?t.na.get(n).push(e):t.na.set(n,[e]),c.snapshot}async function eD(t,e){const n=te(t),r=n.ea.get(e),s=n.na.get(r.targetId);if(s.length>1)return n.na.set(r.targetId,s.filter(i=>!Na(i,e))),void n.ea.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await _l(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),sv(n.remoteStore,r.targetId),wl(n,r.targetId)}).catch(Ri)):(wl(n,r.targetId),await _l(n.localStore,r.targetId,!0))}async function tD(t,e,n){const r=lD(t);try{const s=await function(i,o){const a=te(i),c=lt.now(),l=o.reduce((h,f)=>h.add(f.key),xe());let u;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.ci.Ks(h,l).next(f=>{u=f;const d=[];for(const g of o){const v=w1(g,u.get(g.key));v!=null&&d.push(new Ci(g.key,v,Oy(v.value.mapValue),Vr.exists(!0)))}return a.Bs.addMutationBatch(h,c,d,o)})).then(h=>(h.applyToLocalDocumentSet(u),{batchId:h.batchId,changes:u}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(i,o,a){let c=i.ua[i.currentUser.toKey()];c||(c=new Qe(ge)),c=c.insert(o,a),i.ua[i.currentUser.toKey()]=c}(r,s.batchId,n),await xi(r,s.changes),await Ua(r.remoteStore)}catch(s){const i=Zu(s,"Failed to persist write");n.reject(i)}}async function fv(t,e){const n=te(t);try{const r=await ck(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.ra.get(i);o&&(De(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Zu=!0:s.modifiedDocuments.size>0?De(o.Zu):s.removedDocuments.size>0&&(De(o.Zu),o.Zu=!1))}),await xi(n,r,e)}catch(r){await Ri(r)}}function xd(t,e,n){const r=te(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ea.forEach((i,o)=>{const a=o.view.Au(e);a.snapshot&&s.push(a.snapshot)}),function(i,o){const a=te(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Au(o)&&(c=!0)}),c&&Ju(a)}(r.eventManager,e),s.length&&r.ta.Qo(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function nD(t,e,n){const r=te(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.ra.get(e),i=s&&s.key;if(i){let o=new Qe(q.comparator);o=o.insert(i,ot.newNoDocument(i,se.min()));const a=xe().add(i),c=new Ma(se.min(),new Map,new tt(ge),o,a);await fv(r,c),r.ia=r.ia.remove(i),r.ra.delete(e),eh(r)}else await _l(r.localStore,e,!1).then(()=>wl(r,e,n)).catch(Ri)}async function rD(t,e){const n=te(t),r=e.batch.batchId;try{const s=await ak(n.localStore,e);pv(n,r,null),dv(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await xi(n,s)}catch(s){await Ri(s)}}async function sD(t,e,n){const r=te(t);try{const s=await function(i,o){const a=te(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.Bs.lookupMutationBatch(c,o).next(u=>(De(u!==null),l=u.keys(),a.Bs.removeMutationBatch(c,u))).next(()=>a.Bs.performConsistencyCheck(c)).next(()=>a.ci.Ks(c,l))})}(r.localStore,e);pv(r,e,n),dv(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await xi(r,s)}catch(s){await Ri(s)}}function dv(t,e){(t.aa.get(e)||[]).forEach(n=>{n.resolve()}),t.aa.delete(e)}function pv(t,e,n){const r=te(t);let s=r.ua[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.ua[r.currentUser.toKey()]=s}}function wl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.na.get(e))t.ea.delete(r),n&&t.ta.fa(r,n);t.na.delete(e),t.isPrimaryClient&&t.oa.Pi(e).forEach(r=>{t.oa.containsKey(r)||gv(t,r)})}function gv(t,e){t.sa.delete(e.path.canonicalString());const n=t.ia.get(e);n!==null&&(sv(t.remoteStore,n),t.ia=t.ia.remove(e),t.ra.delete(n),eh(t))}function Od(t,e,n){for(const r of n)r instanceof uv?(t.oa.addReference(r.key,e),iD(t,r)):r instanceof hv?(V("SyncEngine","Document no longer in limbo: "+r.key),t.oa.removeReference(r.key,e),t.oa.containsKey(r.key)||gv(t,r.key)):ee()}function iD(t,e){const n=e.key,r=n.path.canonicalString();t.ia.get(n)||t.sa.has(r)||(V("SyncEngine","New document in limbo: "+n),t.sa.add(r),eh(t))}function eh(t){for(;t.sa.size>0&&t.ia.size<t.maxConcurrentLimboResolutions;){const e=t.sa.values().next().value;t.sa.delete(e);const n=new q(Me.fromString(e)),r=t.ca.next();t.ra.set(r,new Qk(n)),t.ia=t.ia.insert(n,r),rv(t.remoteStore,new ir(fr($u(n.path)),r,2,Fu.A))}}async function xi(t,e,n){const r=te(t),s=[],i=[],o=[];r.ea.isEmpty()||(r.ea.forEach((a,c)=>{o.push(r.la(c,e,n).then(l=>{if(l){r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l.fromCache?"not-current":"current"),s.push(l);const u=qu.Ys(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.ta.Qo(s),await async function(a,c){const l=te(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>k.forEach(c,h=>k.forEach(h.Hs,f=>l.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>k.forEach(h.Js,f=>l.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!Di(u))throw u;V("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const f=l.ii.get(h),d=f.snapshotVersion,g=f.withLastLimboFreeSnapshotVersion(d);l.ii=l.ii.insert(h,g)}}}(r.localStore,i))}async function oD(t,e){const n=te(t);if(!n.currentUser.isEqual(e)){V("SyncEngine","User change. New user:",e.toKey());const r=await Jy(n.localStore,e);n.currentUser=e,function(s,i){s.aa.forEach(o=>{o.forEach(a=>{a.reject(new K(A.CANCELLED,i))})}),s.aa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await xi(n,r.hi)}}function aD(t,e){const n=te(t),r=n.ra.get(e);if(r&&r.Zu)return xe().add(r.key);{let s=xe();const i=n.na.get(e);if(!i)return s;for(const o of i){const a=n.ea.get(o);s=s.unionWith(a.view.Ku)}return s}}function cD(t){const e=te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=fv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=aD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=nD.bind(null,e),e.ta.Qo=qk.bind(null,e.eventManager),e.ta.fa=Kk.bind(null,e.eventManager),e}function lD(t){const e=te(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=rD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=sD.bind(null,e),e}class uD{constructor(){this.synchronizeTabs=!1}async initialize(e){this.M=La(e.databaseInfo.databaseId),this.sharedClientState=this._a(e),this.persistence=this.wa(e),await this.persistence.start(),this.gcScheduler=this.ma(e),this.localStore=this.ga(e)}ma(e){return null}ga(e){return ok(this.persistence,new sk,e.initialUser,this.M)}wa(e){return new _k(Wu.zi,this.M)}_a(e){return new Ek}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class hD{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>xd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=oD.bind(null,this.syncEngine),await Vk(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new jk}createDatastore(e){const n=La(e.databaseInfo.databaseId),r=(s=e.databaseInfo,new Ak(s));var s;return function(i,o,a,c){return new kk(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,s=e.asyncQueue,i=a=>xd(this.syncEngine,a,0),o=Dd.vt()?new Dd:new bk,new Rk(n,r,s,i,o);var n,r,s,i,o}createSyncEngine(e,n){return function(r,s,i,o,a,c,l){const u=new Yk(r,s,i,o,a,c);return l&&(u.ha=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=te(e);V("RemoteStore","RemoteStore shutting down."),n.fu.add(5),await Ni(n),n._u.shutdown(),n.wu.set("Unknown")}(this.remoteStore)}}/**
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
 */class fD{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.pa(this.observer.next,e)}error(e){this.observer.error?this.pa(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Ia(){this.muted=!0}pa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class dD{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=mt.UNAUTHENTICATED,this.clientId=Dy.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{V("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(V("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new K(A.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new sr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Zu(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function pD(t,e){t.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Jy(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function gD(t,e){t.asyncQueue.verifyOperationInProgress();const n=await mD(t);V("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>Rd(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>Rd(e.remoteStore,i)),t.onlineComponents=e}async function mD(t){return t.offlineComponents||(V("FirestoreClient","Using default OfflineComponentProvider"),await pD(t,new uD)),t.offlineComponents}async function mv(t){return t.onlineComponents||(V("FirestoreClient","Using default OnlineComponentProvider"),await gD(t,new hD)),t.onlineComponents}function yD(t){return mv(t).then(e=>e.syncEngine)}async function Pd(t){const e=await mv(t),n=e.eventManager;return n.onListen=Zk.bind(null,e.syncEngine),n.onUnlisten=eD.bind(null,e.syncEngine),n}const Md=new Map;/**
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
 */function yv(t,e,n){if(!n)throw new K(A.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function vD(t,e,n,r){if(e===!0&&r===!0)throw new K(A.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ld(t){if(!q.isDocumentKey(t))throw new K(A.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Fd(t){if(q.isDocumentKey(t))throw new K(A.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function th(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ee()}function Vs(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new K(A.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=th(t);throw new K(A.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Ud{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new K(A.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new K(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,vD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class nh{constructor(e,n,r){this._authCredentials=n,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ud({}),this._settingsFrozen=!1,e instanceof Zr?this._databaseId=e:(this._app=e,this._databaseId=function(s){if(!Object.prototype.hasOwnProperty.apply(s.options,["projectId"]))throw new K(A.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Zr(s.options.projectId)}(e))}get app(){if(!this._app)throw new K(A.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new K(A.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ud(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new LC;switch(n.type){case"gapi":const r=n.client;return De(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new BC(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new K(A.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Md.get(e);n&&(V("ComponentProvider","Removing Datastore"),Md.delete(e),n.terminate())}(this),Promise.resolve()}}/**
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
 */class At{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new On(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new At(this.firestore,e,this._key)}}class Ba{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ba(this.firestore,e,this._query)}}class On extends Ba{constructor(e,n,r){super(e,n,$u(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new At(this.firestore,null,new q(e))}withConverter(e){return new On(this.firestore,e,this._path)}}function _D(t,e,...n){if(t=kt(t),yv("collection","path",e),t instanceof nh){const r=Me.fromString(e,...n);return Fd(r),new On(t,null,r)}{if(!(t instanceof At||t instanceof On))throw new K(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Me.fromString(e,...n));return Fd(r),new On(t.firestore,null,r)}}function El(t,e,...n){if(t=kt(t),arguments.length===1&&(e=Dy.R()),yv("doc","path",e),t instanceof nh){const r=Me.fromString(e,...n);return Ld(r),new At(t,null,new q(r))}{if(!(t instanceof At||t instanceof On))throw new K(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Me.fromString(e,...n));return Ld(r),new At(t.firestore,t instanceof On?t.converter:null,new q(r))}}/**
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
 */class wD{constructor(){this.ka=Promise.resolve(),this.Ma=[],this.Oa=!1,this.Fa=[],this.$a=null,this.Ba=!1,this.La=!1,this.Ua=[],this.Do=new tv(this,"async_queue_retry"),this.qa=()=>{const n=wc();n&&V("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Do.Ao()};const e=wc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qa)}get isShuttingDown(){return this.Oa}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ka(),this.Ga(e)}enterRestrictedMode(e){if(!this.Oa){this.Oa=!0,this.La=e||!1;const n=wc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qa)}}enqueue(e){if(this.Ka(),this.Oa)return new Promise(()=>{});const n=new sr;return this.Ga(()=>this.Oa&&this.La?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ma.push(e),this.Qa()))}async Qa(){if(this.Ma.length!==0){try{await this.Ma[0](),this.Ma.shift(),this.Do.reset()}catch(e){if(!Di(e))throw e;V("AsyncQueue","Operation failed with retryable error: "+e)}this.Ma.length>0&&this.Do.To(()=>this.Qa())}}Ga(e){const n=this.ka.then(()=>(this.Ba=!0,e().catch(r=>{this.$a=r,this.Ba=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw Ln("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ba=!1,r))));return this.ka=n,n}enqueueAfterDelay(e,n,r){this.Ka(),this.Ua.indexOf(e)>-1&&(n=0);const s=Yu.createAndSchedule(this,e,n,r,i=>this.ja(i));return this.Fa.push(s),s}Ka(){this.$a&&ee()}verifyOperationInProgress(){}async Wa(){let e;do e=this.ka,await e;while(e!==this.ka)}za(e){for(const n of this.Fa)if(n.timerId===e)return!0;return!1}Ha(e){return this.Wa().then(()=>{this.Fa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Fa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Wa()})}Ja(e){this.Ua.push(e)}ja(e){const n=this.Fa.indexOf(e);this.Fa.splice(n,1)}}function Bd(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const s of n)if(s in r&&typeof r[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Lo extends nh{constructor(e,n,r){super(e,n,r),this.type="firestore",this._queue=new wD,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||_v(this),this._firestoreClient.terminate()}}function Fo(t=eu()){return _r(t,"firestore").getImmediate()}function vv(t){return t._firestoreClient||_v(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function _v(t){var e;const n=t._freezeSettings(),r=function(s,i,o,a){return new qC(s,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new dD(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
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
 */class rh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new K(A.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new yt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class rs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new rs(rt.fromBase64String(e))}catch(n){throw new K(A.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new rs(rt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class wv{constructor(e){this._methodName=e}}/**
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
 */class sh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new K(A.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new K(A.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ge(this._lat,e._lat)||ge(this._long,e._long)}}/**
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
 */const ED=/^__.*__$/;class bD{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ci(e,this.data,this.fieldMask,n,this.fieldTransforms):new Pa(e,this.data,n,this.fieldTransforms)}}function Ev(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee()}}class ih{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.M=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ya(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Xa(){return this.settings.Xa}Za(e){return new ih(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}tc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Za({path:r,ec:!1});return s.nc(e),s}sc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Za({path:r,ec:!1});return s.Ya(),s}ic(e){return this.Za({path:void 0,ec:!0})}rc(e){return Uo(e,this.settings.methodName,this.settings.oc||!1,this.path,this.settings.uc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ya(){if(this.path)for(let e=0;e<this.path.length;e++)this.nc(this.path.get(e))}nc(e){if(e.length===0)throw this.rc("Document fields must not be empty");if(Ev(this.Xa)&&ED.test(e))throw this.rc('Document fields cannot begin and end with "__"')}}class ID{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.M=r||La(e)}ac(e,n,r,s=!1){return new ih({Xa:e,methodName:n,uc:r,path:yt.emptyPath(),ec:!1,oc:s},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function TD(t){const e=t._freezeSettings(),n=La(t._databaseId);return new ID(t._databaseId,!!e.ignoreUndefinedProperties,n)}function AD(t,e,n,r,s,i={}){const o=t.ac(i.merge||i.mergeFields?2:0,e,n,s);Av("Data must be an object, but it was:",o,r);const a=Iv(r,o);let c,l;if(i.merge)c=new ll(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=SD(e,h,n);if(!o.contains(f))throw new K(A.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);kD(u,f)||u.push(f)}c=new ll(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new bD(new zt(a),c,l)}function bv(t,e){if(Tv(t=kt(t)))return Av("Unsupported field value:",e,t),Iv(t,e);if(t instanceof wv)return function(n,r){if(!Ev(r.Xa))throw r.rc(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.rc(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ec&&e.Xa!==4)throw e.rc("Nested arrays are not supported");return function(n,r){const s=[];let i=0;for(const o of n){let a=bv(o,r.ic(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(t,e)}return function(n,r){if((n=kt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return p1(r.M,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=lt.fromDate(n);return{timestampValue:Po(r.M,s)}}if(n instanceof lt){const s=new lt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Po(r.M,s)}}if(n instanceof sh)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof rs)return{bytesValue:Gy(r.M,n._byteString)};if(n instanceof At){const s=r.databaseId,i=n.firestore._databaseId;if(!i.isEqual(s))throw r.rc(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:zu(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.rc(`Unsupported field value: ${th(n)}`)}(t,e)}function Iv(t,e){const n={};return Ry(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ps(t,(r,s)=>{const i=bv(s,e.tc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Tv(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof lt||t instanceof sh||t instanceof rs||t instanceof At||t instanceof wv)}function Av(t,e,n){if(!Tv(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=th(n);throw r==="an object"?e.rc(t+" a custom object"):e.rc(t+" "+r)}}function SD(t,e,n){if((e=kt(e))instanceof rh)return e._internalPath;if(typeof e=="string")return Sv(t,e);throw Uo("Field path arguments must be of type string or ",t,!1,void 0,n)}const CD=new RegExp("[~\\*/\\[\\]]");function Sv(t,e,n){if(e.search(CD)>=0)throw Uo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new rh(...e.split("."))._internalPath}catch{throw Uo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Uo(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new K(A.INVALID_ARGUMENT,a+t+c)}function kD(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Cv{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new At(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new DD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(kv("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class DD extends Cv{data(){return super.data()}}function kv(t,e){return typeof e=="string"?Sv(t,e):e instanceof rh?e._internalPath:e._delegate._internalPath}/**
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
 */class ks{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Dv extends Cv{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new eo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(kv("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class eo extends Dv{data(e={}){return super.data(e)}}class RD{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ks(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new eo(this._firestore,this._userDataWriter,r.key,r,new ks(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new K(A.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let i=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new eo(r._firestore,r._userDataWriter,o.doc.key,o.doc,new ks(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:i++}))}{let i=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new eo(r._firestore,r._userDataWriter,o.doc.key,o.doc,new ks(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:ND(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function ND(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee()}}/**
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
 */function xD(t){if(No(t)&&t.explicitOrderBy.length===0)throw new K(A.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
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
 */class OD{convertValue(e,n="none"){switch(hr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Yr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ee()}}convertObject(e,n){const r={};return ps(e.fields,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new sh(Be(e.latitude),Be(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=xy(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(oi(e));default:return null}}convertTimestamp(e){const n=Fn(e);return new lt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Me.fromString(e);De(Zy(r));const s=new Zr(r.get(1),r.get(3)),i=new q(r.popFirst(5));return s.isEqual(n)||Ln(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function PD(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Rv extends OD{constructor(e){super(),this.firestore=e}convertBytes(e){return new rs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new At(this.firestore,null,n)}}function MD(t,e,n){t=Vs(t,At);const r=Vs(t.firestore,Lo),s=PD(t.converter,e,n);return LD(r,[AD(TD(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Vr.none())])}function Nv(t,...e){var n,r,s;t=kt(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Bd(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Bd(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,l,u;if(t instanceof At)l=Vs(t.firestore,Lo),u=$u(t._key.path),c={next:h=>{e[o]&&e[o](FD(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Vs(t,Ba);l=Vs(h.firestore,Lo),u=h._query;const f=new Rv(l);c={next:d=>{e[o]&&e[o](new RD(l,f,h,d))},error:e[o+1],complete:e[o+2]},xD(t._query)}return function(h,f,d,g){const v=new fD(g),_=new Wk(f,v,d);return h.asyncQueue.enqueueAndForget(async()=>zk(await Pd(h),_)),()=>{v.Ia(),h.asyncQueue.enqueueAndForget(async()=>Hk(await Pd(h),_))}}(vv(l),u,a,c)}function LD(t,e){return function(n,r){const s=new sr;return n.asyncQueue.enqueueAndForget(async()=>tD(await yD(n),r,s)),s.promise}(vv(t),e)}function FD(t,e,n){const r=n.docs.get(e._key),s=new Rv(t);return new Dv(t,s,e._key,r,new ks(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){ds=n})(pi),Jt(new qt("firestore",(n,{options:r})=>{const s=n.getProvider("app").getImmediate(),i=new Lo(s,new FC(n.getProvider("auth-internal")),new $C(n.getProvider("app-check-internal")));return r=Object.assign({useFetchStreams:e},r),i._setSettings(r),i},"PUBLIC")),Ft(ad,"3.4.8",t),Ft(ad,"3.4.8","esm2017")})();const UD=ca("item",{state:()=>({itemList:[],slotTitleList:[]}),actions:{async addItem(t,e,n){const r=CS(),s=!1,i=_s($t({},t),{id:r,shared:s});return this.itemList.push(i),this.saveData(e,n)},async removeItem(t,e,n){const r=this.itemList.findIndex(s=>s.id===t.id);if(r<0)throw new Error(`Can't find item [${t.id}]`);return this.itemList.splice(r,1),this.saveData(e,n)},async updateItem(t,e,n){return this.saveData(e,n)},async saveData(t,e){const n=Fo(),r=El(_D(n,t),e);return MD(r,{items:this.itemList,slotTitles:this.slotTitleList})},connect(t,e){const n=Fo();Nv(El(n,t,e),r=>{var s,i,o,a;this.slotTitleList=(i=(s=r.data())==null?void 0:s.slotTitles)!=null?i:[],this.itemList=(a=(o=r.data())==null?void 0:o.items)!=null?a:[]})}},getters:{getList:t=>t.itemList,getSlotTitleList:t=>t.slotTitleList,getSlotList:t=>e=>t.itemList.filter(n=>n.slot===e)}});const BD={},VD={class:"divide-y"};function $D(t,e){return G(),Ae("ul",VD,[na(t.$slots,"default",{},void 0,!0)])}var xv=Bt(BD,[["render",$D],["__scopeId","data-v-3b882242"]]);const jD={},zD={class:"py-2"};function HD(t,e){return G(),Ae("li",zD,[na(t.$slots,"default")])}var Ov=Bt(jD,[["render",HD]]);const qD=ca("longListItems",{state:()=>({itemLongList:_o.map(t=>({id:t.id,name:t.name,slotTitles:[],items:[]}))}),actions:{connect(t){const e=Fo();_o.forEach((n,r)=>Nv(El(e,n.id,t),s=>{var i,o,a,c;this.itemLongList[r]=$t({slotTitles:(o=(i=s.data())==null?void 0:i.slotTitles)!=null?o:[],items:(c=(a=s.data())==null?void 0:a.items)!=null?c:[]},n)}))}},getters:{getLongList:t=>t.itemLongList}});var KD=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,WD=/[\0-\x1F\x7F-\x9F]/,GD=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,XD=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,QD=function(t){var e={};t=t||{},e.src_Any=KD.source,e.src_Cc=WD.source,e.src_Z=GD.source,e.src_P=XD.source,e.src_ZPCc=[e.src_Z,e.src_P,e.src_Cc].join("|"),e.src_ZCc=[e.src_Z,e.src_Cc].join("|");var n="[><\uFF5C]";return e.src_pseudo_letter="(?:(?!"+n+"|"+e.src_ZPCc+")"+e.src_Any+")",e.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",e.src_auth="(?:(?:(?!"+e.src_ZCc+"|[@/\\[\\]()]).)+@)?",e.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",e.src_host_terminator="(?=$|"+n+"|"+e.src_ZPCc+")(?!"+(t["---"]?"-(?!--)|":"-|")+"_|:\\d|\\.-|\\.(?!$|"+e.src_ZPCc+"))",e.src_path="(?:[/?#](?:(?!"+e.src_ZCc+"|"+n+`|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!`+e.src_ZCc+"|\\]).)*\\]|\\((?:(?!"+e.src_ZCc+"|[)]).)*\\)|\\{(?:(?!"+e.src_ZCc+'|[}]).)*\\}|\\"(?:(?!'+e.src_ZCc+`|["]).)+\\"|\\'(?:(?!`+e.src_ZCc+"|[']).)+\\'|\\'(?="+e.src_pseudo_letter+"|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!"+e.src_ZCc+"|[.]|$)|"+(t["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+",(?!"+e.src_ZCc+"|$)|;(?!"+e.src_ZCc+"|$)|\\!+(?!"+e.src_ZCc+"|[!]|$)|\\?(?!"+e.src_ZCc+"|[?]|$))+|\\/)?",e.src_email_name='[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*',e.src_xn="xn--[a-z0-9\\-]{1,59}",e.src_domain_root="(?:"+e.src_xn+"|"+e.src_pseudo_letter+"{1,63})",e.src_domain="(?:"+e.src_xn+"|(?:"+e.src_pseudo_letter+")|(?:"+e.src_pseudo_letter+"(?:-|"+e.src_pseudo_letter+"){0,61}"+e.src_pseudo_letter+"))",e.src_host="(?:(?:(?:(?:"+e.src_domain+")\\.)*"+e.src_domain+"))",e.tpl_host_fuzzy="(?:"+e.src_ip4+"|(?:(?:(?:"+e.src_domain+")\\.)+(?:%TLDS%)))",e.tpl_host_no_ip_fuzzy="(?:(?:(?:"+e.src_domain+")\\.)+(?:%TLDS%))",e.src_host_strict=e.src_host+e.src_host_terminator,e.tpl_host_fuzzy_strict=e.tpl_host_fuzzy+e.src_host_terminator,e.src_host_port_strict=e.src_host+e.src_port+e.src_host_terminator,e.tpl_host_port_fuzzy_strict=e.tpl_host_fuzzy+e.src_port+e.src_host_terminator,e.tpl_host_port_no_ip_fuzzy_strict=e.tpl_host_no_ip_fuzzy+e.src_port+e.src_host_terminator,e.tpl_host_fuzzy_test="localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+e.src_ZPCc+"|>|$))",e.tpl_email_fuzzy="(^|"+n+'|"|\\(|'+e.src_ZCc+")("+e.src_email_name+"@"+e.tpl_host_fuzzy_strict+")",e.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|"+e.src_ZPCc+"))((?![$+<=>^`|\uFF5C])"+e.tpl_host_port_fuzzy_strict+e.src_path+")",e.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|"+e.src_ZPCc+"))((?![$+<=>^`|\uFF5C])"+e.tpl_host_port_no_ip_fuzzy_strict+e.src_path+")",e};function bl(t){var e=Array.prototype.slice.call(arguments,1);return e.forEach(function(n){!n||Object.keys(n).forEach(function(r){t[r]=n[r]})}),t}function Va(t){return Object.prototype.toString.call(t)}function YD(t){return Va(t)==="[object String]"}function ZD(t){return Va(t)==="[object Object]"}function JD(t){return Va(t)==="[object RegExp]"}function Vd(t){return Va(t)==="[object Function]"}function eR(t){return t.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}var Pv={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function tR(t){return Object.keys(t||{}).reduce(function(e,n){return e||Pv.hasOwnProperty(n)},!1)}var nR={"http:":{validate:function(t,e,n){var r=t.slice(e);return n.re.http||(n.re.http=new RegExp("^\\/\\/"+n.re.src_auth+n.re.src_host_port_strict+n.re.src_path,"i")),n.re.http.test(r)?r.match(n.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(t,e,n){var r=t.slice(e);return n.re.no_http||(n.re.no_http=new RegExp("^"+n.re.src_auth+"(?:localhost|(?:(?:"+n.re.src_domain+")\\.)+"+n.re.src_domain_root+")"+n.re.src_port+n.re.src_host_terminator+n.re.src_path,"i")),n.re.no_http.test(r)?e>=3&&t[e-3]===":"||e>=3&&t[e-3]==="/"?0:r.match(n.re.no_http)[0].length:0}},"mailto:":{validate:function(t,e,n){var r=t.slice(e);return n.re.mailto||(n.re.mailto=new RegExp("^"+n.re.src_email_name+"@"+n.re.src_host_strict,"i")),n.re.mailto.test(r)?r.match(n.re.mailto)[0].length:0}}},rR="a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",sR="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|\u0440\u0444".split("|");function iR(t){t.__index__=-1,t.__text_cache__=""}function oR(t){return function(e,n){var r=e.slice(n);return t.test(r)?r.match(t)[0].length:0}}function $d(){return function(t,e){e.normalize(t)}}function Bo(t){var e=t.re=QD(t.__opts__),n=t.__tlds__.slice();t.onCompile(),t.__tlds_replaced__||n.push(rR),n.push(e.src_xn),e.src_tlds=n.join("|");function r(a){return a.replace("%TLDS%",e.src_tlds)}e.email_fuzzy=RegExp(r(e.tpl_email_fuzzy),"i"),e.link_fuzzy=RegExp(r(e.tpl_link_fuzzy),"i"),e.link_no_ip_fuzzy=RegExp(r(e.tpl_link_no_ip_fuzzy),"i"),e.host_fuzzy_test=RegExp(r(e.tpl_host_fuzzy_test),"i");var s=[];t.__compiled__={};function i(a,c){throw new Error('(LinkifyIt) Invalid schema "'+a+'": '+c)}Object.keys(t.__schemas__).forEach(function(a){var c=t.__schemas__[a];if(c!==null){var l={validate:null,link:null};if(t.__compiled__[a]=l,ZD(c)){JD(c.validate)?l.validate=oR(c.validate):Vd(c.validate)?l.validate=c.validate:i(a,c),Vd(c.normalize)?l.normalize=c.normalize:c.normalize?i(a,c):l.normalize=$d();return}if(YD(c)){s.push(a);return}i(a,c)}}),s.forEach(function(a){!t.__compiled__[t.__schemas__[a]]||(t.__compiled__[a].validate=t.__compiled__[t.__schemas__[a]].validate,t.__compiled__[a].normalize=t.__compiled__[t.__schemas__[a]].normalize)}),t.__compiled__[""]={validate:null,normalize:$d()};var o=Object.keys(t.__compiled__).filter(function(a){return a.length>0&&t.__compiled__[a]}).map(eR).join("|");t.re.schema_test=RegExp("(^|(?!_)(?:[><\uFF5C]|"+e.src_ZPCc+"))("+o+")","i"),t.re.schema_search=RegExp("(^|(?!_)(?:[><\uFF5C]|"+e.src_ZPCc+"))("+o+")","ig"),t.re.schema_at_start=RegExp("^"+t.re.schema_search.source,"i"),t.re.pretest=RegExp("("+t.re.schema_test.source+")|("+t.re.host_fuzzy_test.source+")|@","i"),iR(t)}function aR(t,e){var n=t.__index__,r=t.__last_index__,s=t.__text_cache__.slice(n,r);this.schema=t.__schema__.toLowerCase(),this.index=n+e,this.lastIndex=r+e,this.raw=s,this.text=s,this.url=s}function Il(t,e){var n=new aR(t,e);return t.__compiled__[n.schema].normalize(n,t),n}function Rt(t,e){if(!(this instanceof Rt))return new Rt(t,e);e||tR(t)&&(e=t,t={}),this.__opts__=bl({},Pv,e),this.__index__=-1,this.__last_index__=-1,this.__schema__="",this.__text_cache__="",this.__schemas__=bl({},nR,t),this.__compiled__={},this.__tlds__=sR,this.__tlds_replaced__=!1,this.re={},Bo(this)}Rt.prototype.add=function(e,n){return this.__schemas__[e]=n,Bo(this),this};Rt.prototype.set=function(e){return this.__opts__=bl(this.__opts__,e),this};Rt.prototype.test=function(e){if(this.__text_cache__=e,this.__index__=-1,!e.length)return!1;var n,r,s,i,o,a,c,l,u;if(this.re.schema_test.test(e)){for(c=this.re.schema_search,c.lastIndex=0;(n=c.exec(e))!==null;)if(i=this.testSchemaAt(e,n[2],c.lastIndex),i){this.__schema__=n[2],this.__index__=n.index+n[1].length,this.__last_index__=n.index+n[0].length+i;break}}return this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&(l=e.search(this.re.host_fuzzy_test),l>=0&&(this.__index__<0||l<this.__index__)&&(r=e.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))!==null&&(o=r.index+r[1].length,(this.__index__<0||o<this.__index__)&&(this.__schema__="",this.__index__=o,this.__last_index__=r.index+r[0].length))),this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&(u=e.indexOf("@"),u>=0&&(s=e.match(this.re.email_fuzzy))!==null&&(o=s.index+s[1].length,a=s.index+s[0].length,(this.__index__<0||o<this.__index__||o===this.__index__&&a>this.__last_index__)&&(this.__schema__="mailto:",this.__index__=o,this.__last_index__=a))),this.__index__>=0};Rt.prototype.pretest=function(e){return this.re.pretest.test(e)};Rt.prototype.testSchemaAt=function(e,n,r){return this.__compiled__[n.toLowerCase()]?this.__compiled__[n.toLowerCase()].validate(e,r,this):0};Rt.prototype.match=function(e){var n=0,r=[];this.__index__>=0&&this.__text_cache__===e&&(r.push(Il(this,n)),n=this.__last_index__);for(var s=n?e.slice(n):e;this.test(s);)r.push(Il(this,n)),s=s.slice(this.__last_index__),n+=this.__last_index__;return r.length?r:null};Rt.prototype.matchAtStart=function(e){if(this.__text_cache__=e,this.__index__=-1,!e.length)return null;var n=this.re.schema_at_start.exec(e);if(!n)return null;var r=this.testSchemaAt(e,n[2],n[0].length);return r&&(this.__schema__=n[2],this.__index__=n.index+n[1].length,this.__last_index__=n.index+n[0].length+r),Il(this,0)};Rt.prototype.tlds=function(e,n){return e=Array.isArray(e)?e:[e],n?(this.__tlds__=this.__tlds__.concat(e).sort().filter(function(r,s,i){return r!==i[s-1]}).reverse(),Bo(this),this):(this.__tlds__=e.slice(),this.__tlds_replaced__=!0,Bo(this),this)};Rt.prototype.normalize=function(e){e.schema||(e.url="http://"+e.url),e.schema==="mailto:"&&!/^mailto:/i.test(e.url)&&(e.url="mailto:"+e.url)};Rt.prototype.onCompile=function(){};var Mv=Rt;const cR=st({props:{podcastId:{type:String,default:"smartseven"},docname:{type:String,default:"todaysdate"}},setup(t){const e=t,n=qD();n.connect(e.docname);const r=Mv(),s=i=>{const o=r.match(i);return((o==null?void 0:o.reduce((a,c)=>a.replace(c.raw,`<a href="${c.url}">${c.raw}</a>`),i))||i).replace(/\n/g,"<br/>")};return(i,o)=>(G(!0),Ae(Ve,null,tr(ue(n).getLongList,a=>(G(),Ae("div",{class:"podcast",key:a.id},[ae("h3",null,Rn(a.name),1),(G(!0),Ae(Ve,null,tr(Array.from({length:7},(c,l)=>7-l),c=>(G(),Ae("div",{key:c},[ae("h4",null,Rn(c)+": "+Rn(a.slotTitles[c]),1),ae("ul",null,[(G(!0),Ae(Ve,null,tr(a.items.filter(l=>l.slot===c),l=>(G(),Ae("li",{key:l.id},[(G(),We(eg("p"),{innerHTML:s(l.text)},null,8,["innerHTML"]))]))),128))])]))),128))]))),128))}});var lR=Bt(cR,[["__scopeId","data-v-98d10f78"]]);const uR={};function hR(t,e){return G(),Ae("button",rp(rg(t.$attrs)),[na(t.$slots,"default")],16)}var jd=Bt(uR,[["render",hR]]);function fR(t,e){return G(),We("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[X("path",{d:"M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"})])}const dR={class:"flex justify-end"},pR=st({props:{item:{type:Object,default:null}},emits:["delete","update","save","toggle","dragged"],setup(t,{emit:e}){const n=t,r=Mv(),s=c=>{var l;n.item.text=((l=i.value)==null?void 0:l.innerText)||"",e("update",n.item)},i=Te(null),o=c=>{e("dragged",c.clientX,c.clientY,n.item)},a=me(()=>{const c=r.match(n.item.text);return((c==null?void 0:c.reduce((l,u)=>l.replace(u.raw,`<a onclick="window.open('${u.url}', '_blank').focus()" href="${u.url}">${u.raw}</a>`),n.item.text))||n.item.text).replace(/\n/g,"<br/>")});return(c,l)=>(G(),Ae("div",{class:"handle flex justify-between items-center",draggable:"true",onDragend:o},[(G(),We(eg("p"),{onFocusout:s,contenteditable:"true",class:"prose prose-a:text-blue-600 grow",innerHTML:ue(a),ref_key:"element",ref:i},null,8,["innerHTML"])),ae("div",dR,[X(ue(fS)),X(jd,{title:"Delete",onClick:l[0]||(l[0]=u=>e("delete",t.item))},{default:ht(()=>[X(ue(lS),{class:"dark:text-white bg-transparent transition-colors"})]),_:1}),X(jd,{onClick:l[1]||(l[1]=u=>e("toggle",t.item)),title:"Share"},{default:ht(()=>[t.item.shared?(G(),We(ue(fR),{key:0})):(G(),We(ue(uS),{key:1}))]),_:1})])],32))}});var gR=Bt(pR,[["__scopeId","data-v-06c60fe8"]]);const mR={class:"block text-sm font-bold mb-2"},yR=["type","placeholder"],vR=st({props:{label:{default:""},type:{default:"text"},modelValue:{default:""},placeholder:{default:""}},emits:["update:modelValue"],setup(t,{emit:e}){const r=Ng(t,"modelValue",e);return(s,i)=>(G(),Ae("label",mR,[fi(Rn(t.label)+" ",1),hi(ae("textarea",{class:"input",type:t.type,placeholder:t.placeholder,"onUpdate:modelValue":i[0]||(i[0]=o=>ke(r)?r.value=o:null)},null,8,yR),[[lg,ue(r)]])]))}});var _R=Bt(vR,[["__scopeId","data-v-48c56649"]]);const wR={class:"mt-2 w-full"},ER=st({props:{slot:{type:Number,default:null}},emits:["save"],setup(t,{emit:e}){const n=t,r=Te(""),s=()=>{e("save",r.value,n.slot),r.value=""};return(i,o)=>(G(),Ae("div",wR,[X(_R,{modelValue:r.value,"onUpdate:modelValue":o[0]||(o[0]=a=>r.value=a),placeholder:`Enter things into ${t.slot}...`,onKeydown:ug(Xl(s,["exact","prevent"]),["enter"])},null,8,["modelValue","placeholder","onKeydown"])]))}});const bR=["placeholder"],IR=st({props:{modelValue:{default:""},slotno:{default:0},updateEvent:null},emits:["update:modelValue"],setup(t,{emit:e}){const r=Ng(t,"modelValue",e);return(s,i)=>(G(),Ae("label",null,[fi(Rn(t.slotno)+": ",1),hi(ae("input",{class:"input",placeholder:`${t.slotno} title`,"onUpdate:modelValue":i[0]||(i[0]=o=>ke(r)?r.value=o:null),onKeydown:i[1]||(i[1]=ug(Xl((...o)=>t.updateEvent&&t.updateEvent(...o),["prevent"]),["enter"])),onBlur:i[2]||(i[2]=(...o)=>t.updateEvent&&t.updateEvent(...o))},null,40,bR),[[lg,ue(r)]])]))}});var TR=Bt(IR,[["__scopeId","data-v-79505596"]]);const Lv=t=>(Bl("data-v-0ef72c26"),t=t(),Vl(),t),AR={class:"h-full grid grid-cols-5 gap-4 divide-x"},SR={class:"px-4"},CR=Lv(()=>ae("h2",{class:"text-2xl dark:text-white"},"Longer List",-1)),kR={class:"px-4 mt-4 col-span-3"},DR=["slotno"],RR=Lv(()=>ae("div",{class:"px-4"},[ae("h2",{class:"text-2xl dark:text-white"},"Script"),ae("p",null,"coming soon...")],-1)),NR=st({props:{podcastId:{type:String,default:"smartseven"}},setup(t){const e=t,n=Js(),r=UD(),s=Te(!1),{user:i,isAuthenticated:o}=Lg(n),a="todaysdate",c=(h,f,d)=>{var v,_,T;const g=parseInt((T=(_=(v=document.elementFromPoint(h,f))==null?void 0:v.closest("section"))==null?void 0:_.attributes.slotno)==null?void 0:T.value);g&&(d.slot=g,r.saveData(e.podcastId,a))},l=()=>{s.value&&r.connect(e.podcastId,a)};Mt(o,async h=>{h&&(s.value=!0,l())},{immediate:!0}),Mt(()=>e.podcastId,l,{immediate:!0});const u={onClickSave(h,f){r.addItem({text:h,slot:f},e.podcastId,a)},onUpdateSaveDoc(){r.saveData(e.podcastId,a)},onClickDelete(h){window.confirm("Are you sure?")&&r.removeItem(h,e.podcastId,a)},onClickUpdate(h){r.updateItem(h,e.podcastId,a)},onClickToggle(h){h.shared=!h.shared,r.updateItem(h,e.podcastId,a)}};return(h,f)=>hi((G(),Ae("main",AR,[ae("div",SR,[CR,X(lR,{podcastId:t.podcastId,docname:a},null,8,["podcastId"])]),ae("div",kR,[(G(!0),Ae(Ve,null,tr(Array.from({length:7},(d,g)=>7-g),d=>(G(),Ae("section",{key:d,slotno:d},[X(TR,{modelValue:ue(r).getSlotTitleList[d],"onUpdate:modelValue":g=>ue(r).getSlotTitleList[d]=g,slotno:d,updateEvent:u.onUpdateSaveDoc},null,8,["modelValue","onUpdate:modelValue","slotno","updateEvent"]),X(ER,{onSave:u.onClickSave,slot:d},null,8,["onSave","slot"]),X(xv,null,{default:ht(()=>[(G(!0),Ae(Ve,null,tr(ue(r).getSlotList(d),g=>(G(),We(Ov,{key:g.id},{default:ht(()=>[X(gR,{item:g,onDelete:u.onClickDelete,onToggle:u.onClickToggle,onUpdate:u.onClickUpdate,onDragged:c},null,8,["item","onDelete","onToggle","onUpdate"])]),_:2},1024))),128))]),_:2},1024)],8,DR))),128))]),RR],512)),[[hg,s.value&&ue(o)]])}});var xR=Bt(NR,[["__scopeId","data-v-0ef72c26"]]);const OR={},PR=t=>(Bl("data-v-a3440342"),t=t(),Vl(),t),MR=PR(()=>ae("h2",null,"\u2B06\uFE0F select a podcast \u2B06\uFE0F",-1)),LR=[MR];function FR(t,e){return G(),Ae("main",null,LR)}var UR=Bt(OR,[["render",FR],["__scopeId","data-v-a3440342"]]);const BR={};function VR(t,e){return G(),Ae("button",Gl({class:"text-white font-bold py-2 px-4 rounded transition-colors"},t.$attrs),[na(t.$slots,"default")],16)}var $R=Bt(BR,[["render",VR]]);const jR={class:"container h-screen flex justify-center items-center"},zR={class:"p-8 max-w-6xl"},HR=ae("h1",{class:"font-bold text-indigo-800 dark:text-indigo-200 text-3xl text-center mb-8"},"Login",-1),qR=ae("h2",{class:"font-bold text-2xl text-center dark:text-gray-50 mb-8"},"Daft Doris",-1),KR=["src","alt"],WR=st({setup(t){const e=Te(null),{loginWithFirebase:n}=Js(),r=Ig(),s=[{name:"Google",provider:new an,color:"btn-login-google",icon:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoGCBUTExcTFRMYGBcYGhwZFxkZGhcaGhcZGhcZGRoXFx8aHysjGhwoIRgZJDUkKCwuMjIyGSE3PDcxOysxMi4BCwsLDw4PHBERHTMoISgyMTs5Oi4xMzE0MTYxMTE0MjkxMzEyMS4xOTExMTExMTEzMTExOTEzMTEzMTEzMTExMf/AABEIAOAA4AMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQIHBAUGAwj/xAA9EAABAgMFBQcDAwMDBQEBAAABAAIRITEDEkFh8AQiUXGxBQYygZGh0QdCYhNSwRQjcpLC8UNTgqLhc0T/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAwQFBgEC/8QAMBEAAgECBAQDBwUBAAAAAAAAAAECAwQREiExBUFRoSJhsRMUMnGBkeEGM0LB0VL/2gAMAwEAAhEDEQA/ALdY26YlN7b0xyQ196R9knOuyHOaAk50RAVSYbsimW3ReFflJgvzPsgEGwN7Cqb96mCA6Ju4U9EP3KY8UA70ruNEmbtcU7sr2NUmb9cOCARaY3sKpvN6iV6d3CmabtymPFANroC6a/KTG3ZlMNiL2PwotN+R5yQA5pcYiik916QSc+7IJubdmPdADHXZFRa0tMTRNrb0zykhr70igB7b0xyTc6IuivwoudckOc1ItgL2PygEw3aoDZ3sKobv1w4JB07uFM0A371ME70ruNEn7lMeKd2V7GuSATN2uKRbE3sKps364cEF0Ddwp6oAeb0gm10BA1SeLkx7ptZHeNfhAJjbszySe0umENdekeck3OuyHugG9wIgKoYQ2Rr6pFl2YQ1t+Z5IAa0gxNEni94fhMOvbupIcbkggGXAiAqlZ7vi+Uy2G95+qTRfrggFAxjhXyTtN7w+eCL32+SHblMf4QDDhCGNPNJgu+L5XMd4O+Vhs5LWRtbT9rSLrT+Tv4ESuH7Y70bVtMQ60uM/YyLR5nxH1VapdQp6bvyNS04PcXCTwyx6v+kWZ2r27s9gY2lsxv4xi7/S2J9loNv+oViJWdlaPzMGD3n7Ku2sAwTVGd/J/CsDcpcAt4/uNyf2X+nYWv1Ctvs2dg/yc5x9gFhP787YJgWX+lx/3LnFG0oeSh97qv8AkXo8LtI6KC7s2zfqXtkYltkf/Fw6OWw2f6pWtLTZmH/Fzm9QVXQQrftZrmVpcNtZbwXoXB2X9StldK0Y+zPEgPA82z9l03ZPbFhtE7K3Y/IOF4c2mY9F88qTHlpiCQRQiII5QUkbiS31KdXgtCXwNp/dH0o8XvD8JlwhDGnmqU7vd+9q2eDXO/VZ+1/i8nVjziFZHdvvfsu1wg65af8AbfAEn8TR3lPJWIVoy02Zj3PDa9DxYYx6r+zorPd8XlilAxjhXyUhv1wSvfbhRTGcD97w/CYcAIGqHblMUXY73n6IBMF3xfKHNJMRRAN+RQXXd3U0A3mMm19EMcBI1Q5t2Y5IDL0ygIsBHipmh4J8NMpJh96VEF1yVcUA3EEQFUNl4veaV27vammG3p0QEQDGJp7QTdPw+cJIvR3fKPJa3vB2vZ7HZF7zGMmtHic79o1JeOSisWfUISnJRisWzI7U7RstnszaWrg0AVxJ4NxJVZd5e9lrtMWMJs7L9oO+/wDzOAyHutX232rabVaG0tT/AIMHhYOAz4lYaybi7lLwx0Xqdlw7g0KCU6usuyE1sE0IVA3iaEIQiBRtKFSUbShXoW5z4QhCvlQEIQgBMFJCHp3XdHv/AGljdstoJtLOgf8AewZ/vHOfRWtsW1Wdqxr7N4eHDdcJx8+K+b11v0z7YtLDamWQJNnaOg5kyIwk5vA0niFZpVmng9jD4hwynKLqU9GsX5MulkvF5RmkQYxFP4Uhv5QSvQ3fKPNXTmBun4faSGkAQNUEXJ1Rdvb2pIBMBHipnOaHxJlTJAdflTFO/dlVAD4Q3a5IZD7q58EXLs6pXb86YIAbGM6Z0Q/8fZF69u6kiNyVUBi9q7fZ7PZOtbQgBonxJ/aOJJkqe7c7UftVqbZ5PBjcGN4DPiVtO/fbn9TbGzaf7VmSB+b/ALn8hQeuK55ZF3cZpZY7LudnwbhyoU/azXifZDQhCoG8CEJEwQ9PRRLoLZdi9h2+1H+22DIgF5oIz6fxxXa9l9xLCzAdbE2jpREYAGBjA1PtRWKVtOpqloZV1xO3tnhKWL6LV/4itw6NATyBK9Bs1o4btk88hHCKujZOyrFgiyyY3k0RxxrifVZgdGVFbjw/q+xkz/UWvgp/d/g+cbXYbRoN6yeABOLTTjyXgWkVBC+lCbsqrB7Q7FsLUf3LBj+bRGfA1Cndq+TIocdWPjh9n+D53Qrc7Y+m1hagusHOsT+07zT6zHqVXfeHu5tGxn+7Z7sYB7ZsPnhyMCoZ0pQ3RqW9/Rr6Rlr0ej/Jp0IQAoy4MDWsFan037nGzu7VtDd8wNnZkeAVvv8Ay4DDGdF9OO5VyG07Q3ekbOzI8PB7x+7gMOdLCvfb5RVujR/lI5vifEs2NKk9Ob6+SG/8fOCBCE/F7xShczii7He84clbMEGflTNDoxlTKiI35UReu7upoBvh9tcuCGQ+6uaV25OuCdy9OiAiwmO9TND4jw0ynNMuvSQDclXFANwEJVyqtf2zbwZdPidL/wAceUaevBZ9y7vamud7Rt77y7Cg5Cnz5rL4tduhbvD4nov7LFtTzT12RyPandgGLrAw/AmR5ONOR9VzW0WLrNxY5pa4VBEDrNWVrWea8Ns2SztW3bRoIw4jMGo5Y4rl6N9KOk9V3Oot+Izp6T1XcrpC3navdt7IusyXt4fcPIV8vRaJ0qrTp1IzWMXibdG4p1ljB4h7k0HFdt3V7mOddtdoHBwZjDC9wj68sD6d934uG0WrP/zDhicYYw48eUrBAuzrFa1raprPP6I5zi/F5KTo0X83/SCws2taAAGwwAA9k2T8VM+KLsd7Ukyb0qYrTOXepF5Md2mSk+H21yQHXZJBl2dUA2Q+6uai0mO9TNMsvTomXXpIBPiPDTJQ2mxY9pa5rXBwgWkAgg1BGK9Absq4pBsN7U0PU8NUVn3o+nBLr+yEAGtm4wh/gThkfVZ3cbuJ+g8W20gOe07jKtaf3uNCeAwrwh3sL06QUr32+SiVCKliXZcSuJU/ZuWnXn9xWn4+cE4CH5e8UDczii793mpSiJk/F5RSJMZeH2gpHfygi9Dd8vVAD/xrkhsITrnVKFydUFl7e1JADCfupnxQ8n7aZJk3pUxQHXZVQA4ACLa+qGgHxV9EmsuzKTm35jlNAY+32xbZuJ4QHMyHz5LnNa1JbrvBb7rWjEx9B/8AVpda+FyHHa2euocku7NOzhhFvqLWssk9az6I1rPolrWXVYZcDWsssVj23YVntLxFpjeG82EZTN6MiIcY4BZOtZ54LddiWQaC8j8RSVC6E5TgIS8C0eF0ZVbiKWy1fyIqtaVGOaLwZsLGya1gAELoAHkIDopMn4vhFyd7CqbjfphxXdGK9ROJBgKJvEPDX1QHQF3H5Sa27M8pIBsAIiapMJMnU9EObemE3OvSHugE8kSbT1Te0ARFUNddkeax27XZtMTas5X2x6pgDIYI+Kvok0kmBovB+2WTpi1s/NzflN23WREP1Gf624ea9ys+cyPZ8vD8pkCEcf5Xg3bbNtbVh5Ob8qI2uyje/Vs+PjbHqmDGZGQyfi8sERMYYfwvB+2WTv8Aq2Yhxe35T/rrKEP1GcPE2HVMrGZHu+Xh88UACETVY7Nssm/9WzMeD2/KR2qyJvfq2fHxtj1TBnuJkMMfF8IcSDAUXl/WWb4AWjI/5N9oFewddEDqK8wPQeAJtr6oYAZur6JNbdmeUkObemEAmOLjA0Te67IJufekEmOuyPNAaXvBC+0fjH3OoLWnWv5wWd22P7nl/GuXmsHWsssVwfE5Zrqb8/Q2LdYU0LWsuqNaz6J61n0S1rLqs8nJMAiI0lHl8dV0vZ7NxoOAB8zM48VzlkJ+R5+E+66l29TBdL+n4azn8kZ969kIuMbuFFJ4u0QHSu40SYLtcV05QJNAIvGqiw3pFDmxN4U+E3m9Ic0AnuLTAUTe0NmENddECkxt2ZQHBfVztB7WWVi1xa195z4GF4NugNMMImMMZKt7g4a+ei7/AOsZjabOR+1/Vq4HWsuq37GKVFNc8TEvJN1WumBG4OA1/HVO4OGvnopa1n0RrWXVXCrmZC4OA1/HVO4OGvnopa1n0S1rLqvBmYrg4DX8dU7g4a+eilrWfRGtZdUPMzIXBwGv46o/THD21Pop61n0RrWXVBmZD9McBrVcVan0r7SfbWL7O0cXGyIukmLrrgYA8oe6q/Ws+i7j6Qk/rWrZeAH0cKcamaqX0FKi/L/S1aTaqrzLJYb0ih7i0wFE3m9Ic0MddkVgG4J7Lswhjb0zySY0tMTRN7b0wgNF24f7nlrWKwNazzwW07w+JpHCHnPUVq9ay6rg+Jxy3U15+psW7xpoWtZdU9az6I1rPolrWXVZ5OelgYO8j0Psupdu0xXKMdAg568+i6fY37oJxHSRXS/p6osZw+TM+9jqmet2V7GqTDfrgkWmN7Cqk83qLpygIugbop8pvF2Y5IaQBdNflJguzKAbW3hEpMdekUntLjEUUnuDpBAVv9YxC02cfjadW+y4PWs+i7z6wtIfs8f22nrFnuuC1rLqugsv2I/Uwrz95/QNay6p61n0RrWfRGtZdVbKwtay6p61n0RrWfRLWsuqHhLWsuqNaz6I1rPojWsuq8Aa1l1RrWfRGtZ9Ea1lnigDWsuq7f6RxFtan8IU4ub6clxGtZ5YKwfo9ZQ/XefxaDzjER8gq148KEvoWbRY1olhPF2Y5IY29MpMbdmUPaXGIoueN4GvvSKTnXJDnNSeQZNr6IYQPFX1QGu7esdwHgeq0etZ9F0+02Rc1wNCD/8AFzDhCXDXp1XIceo5a6nya7o07OeMXHoLWsuqetZ9Ea1n0S1rLqsIuBrWXVb/ALFtbzbpqNH+PVaFrSTAV94/PRYdv3lsNktA1zy5xIDmsncEYEvMYCE5V4wWlwurKlcKSWK2eHRlO8lTVNuTwO4vQN3CiZF2mPFRsbVrmgggxEQROMaEFNgh4vld0ZmOIw2O9j8JNdekeckOBJiKJvMfDX0QCc67IJubdmPdDCAIGqTARN1PVAa3vB2LZ7bZ3LSIgYtc2rTxHQhcaPpuSYDaf/T38SsR4Jm2nom4xkFYpXVWksIPQgqW9ObxktSurT6bES/qR/oPp4lJ301IEf6kf6PQ1VhsMPFX1SaCDE0Unv8AX/67EfuVHp3ZXln9NSf/AOkf6D5/ckPpuYw/qf8A0xwNVYjxHw/C8O0dsZY2T7R7roa2Ljy/le+/XH/XZD3Oj07lQd7uwW7E9ln+rfe5t4iEA1tJzNTH0Wj1rPosztnb37Tb2lu+rzIftaJNaOQ/krD1rLPFbNLPkWd68zHq5c7y7BrWWeKNazyRrWeWCNayzxUhGGtZZ4q1/pZsV3ZL5q95PkAAMON5VVZsLnBoBJJAgKnkOPAK8+xdiNjYWVkKMYAedXe8Vn8RnhBR6v0NCwhjNy6L1M1rr0jzkhzrsgm4g+GvohhAk6vqsU1xFl2dUAX50wQwH7qZofH7aZIAvXt3UloO2NnuPyMxrVF0DoQlXKqxO0dnvsIPiExj/wA8lm8VtPeLdpfEtUT0Kvs5YvY5yOtYdVjdqdoWWztvWr7pq1gm90f2t/3GAHFc52z3udNmztLatNo8b0aG4wybzdE5Ca5S1tC5xe5xc503OcSS7MkzP8rmqHDpS8VTRdOf4IbzjMY+Gjq+vI3vbXei1tYss/7TImTTvuH5OrD8RDzqdAGwlDWvRGtZ9Ea1l1WtTpxprLFYI56rXqVZZpvFnd/TfvQGQ2W3dL/ovNB+BPDgVZQN6VIL56I1rHou67m9+DZBtjtR3BJlrOIHC04j8lo29xh4ZbFy1u0llntyLMvQ3dTTIuzrgobPate0ODg6IiCCDHgQVJkfupmtA1E8Rht6aQfelRDgY7tMk3w+2uSARfdlVMtuzQyH3VzSaDHepmgGBenTBIOju6kh/wCNMl49o7ZZ2NmbS0e1jW1cTD/koD1e67yqSZQgqn+oHeYbU/8ARsj/AGWOiT/3XjEcWjD14I7598H7UDY2V5lj9xMn2mR/a38fXguV1rLqtezs3F+0qb8kZd3dJrJD6setZdUa1nlgjWs8ka1lnitMzQ1rLPFGtfCNazywQBGQxkNcM0B0n067L/X2ppIiyz33UIlQTrEwwONFb167LU1zvcXsj+m2YSN+0g9wIAc0Qkw4yrA0LjRdG0iE651XP3db2lR4bLRG7aUslNY7vUCLs64IDb06JMj91M0PB+2mSqlkd+9KiV65KuKb4fbXJDIfdXPggFdu72ppwvTok2MZ0zoh/wCNMkBV/wBS+wP0rQ7Swf23mFoBRr/3cj1XGa1n0V/7Zs7bWzdZvaHBwg4cY1VN97u77titIQJsneB2X7HZj3WXc0crzLZ9jGvLfJLPHZ9jSa1l1RrWfRGtZ9Ea1l1VMoBrWXVENax6I1rPojWsuq9PTN7C7d2jZDGytN2ps3TYc4YcxVd72V9RrF4Ddos3WTsXDfZHymPQqsNaz6Ja1l1ViFecNmWqdxOnsy+ez+3tmtQP0rezfyeAfQzWe2DZgxXzuWDhr56KTXuFHuHJzh/NOqsK8fNFqPEHzR9Cvc07xcG8yFqe0+9Ox2IItNps25B193INbE4L59cSaknmSUg0a1/ypHcPkiZ3b5ItLtr6pMaCzZbEvP77TdaMIhomfMhcRbdt221PP9Ral5d4KBrHTgGigjGHotLrWaIr5hcTjNST2K9WrKosGzbEa1oo1rPLBOztL7Q/Gj/8oSPmPeKWtZZ4rsKFWNWmprZlD5i1rLPFPWs8ka1nlgjWss8VYPkNayzXYfTjsD9a1/WtGm4wgtqLz5ECOVSBkDUhaXuv2I/a7UMaDdEC84Nb+4+hAGPkSLp2LZmWTG2bGhoaIAaxx81n3t1kjkju+xetLfM80tl3PaF2dYou3t7Ukmfl7odGMqZUWIbAXr8qYp37sqofD7a5cE2QhvVzQEQy7OqLt+dMEmEnxUzQ8keGmXFAO9e3dSTBuyqhwAERVDZ+L3kgFdhvecOaxe1dgs9qs3Wdo2LT6g4EHAhZQJjA0Q+Xh84TXjSawZ5KKksHsUv3q7uWmxPMd6yJ3X/7XcD1Wl1rPor+2rZmWjSx7Q4OEwZx8uKrbvT3GfZxfswLmY2Z8Tf8eIyCzK9s46x1XoY9zZyh4oar0OJ1rLqjWs+ib2kGBBB4GR/56Ja1l1VQonjrWXVGtZ9E9az6Ja1l1X0fQa1l1RrWfRGtZ9Ea1l1Q9NbrWXVPWs0a1mlrWSslsNayTQhDwyNgtg10/C6TuXHyM/VbB7SDA64Q/hadbPYbS+279zZVq2g9DL0Wzwm6yT9lLZ7fMiqR/kTjrXVbju33dtdreA1pDIwL3A3RmeP+I4ilRve6/ce0td/aL1m2UGwF51DGH28JiuEoqy9k2ZllZtYxoaGiDQMPk9Vq3N9GHhhq+vJFi3s5S8UtF3Zi9h9l2ex2Qs2CVXOPie7Fzjx9gAAJBZ12O95w5IZPxeUZIJMYCntBYzbbxZrJJLBDJvyoi9d3dTQ6Xh9pptAIiarw9IhtydcE7l6dEmEnxUzkh8R4aZIALr0kNdckeab2gTFUMAdM19EAgy7vamgi/MIa4kwNEPN3w/KAZdHd8vRDTdrigtAERVDN7xfCAV37vNN2/TBRiYwwp5KT93w+eKA0fb3drZ9qk9kH/vbIxz4rg+3O420WMXM/uty8Xpx9grYDRCONfNKznX4VepbQnrs/Iq1bSnU12fkfPe0WD7Mwe0thKYlyjqK89az6K/tu2Gytd20s2vGYBPkaj1Wh7T7h7I+bWuYfxMvn3VWVpNbNMpSsZr4Wn2Ke1rLqmda49FZFt9M2mbLcjIth/JWC76b2ppasoal3p4FG6FRciJ2tVcistayT1rNWE36X28Z21nhQuPP7KhZ2z/SsCBftEeIa0n0MQpvZT6FhUaj5FXRXtYWD3kBjSSSAICpMgBxM5DNXN2V9Otjs5uvWhB+4gDDgI4HHErouzey7Gx3bKyawUiGiJkKuqaDHBSRt5PfQkjaze+CKk7vfT7abeDnj9Nkol0QYGJkPEaCt3xVVjd3O6Wz7KBBl98ovcAQHAxvNH2z5mQnJdE+VPlMtEI4181PCjGOvMswt4x13fmA3Kzild+7CqbN7xeWCUTGGFPJSk43G/TBAdDd8vVD93w/KYaCImqAi0XJlBZe3tSQw3vF8Ic4gwFEAy69Ic0B92RQ8BsxVNjQRE1QEWsuzPsk5t6Y5TTY69Ioe67Ic0Ay68Lor8Iabsj7Ic0ARFflDBemUAg2BvYV9UOF+mHFAdE3cKIfu0xQDvSu40ySZuVx4J3ZXsapM3q4IAuTvYVTJvUw4pF07uFE3i7RAAdAXcflJrbszykm1sReNfhJhvSKAHNvTCbnXpD3Sc4tMBRN7bswgBrrsj7JNbdmU2NvTKTHFxgaIAc29Mcppl0Rdx+Enm7IJubAXhX5QA3drjwSDJ3sKpsF6qQdO7hRAD9+mHFO9K7jRD92mKd2V7GqAiwXK48EFsTewr6IZvVwQXQN3CiAbzekPdDXXRA1Q8XZhNrYi8aoCLG3ZnlJDmXpj3Qx16R5oe67IID//2Q=="}],i={async onClickLogin(o,a){await n(o,a),localStorage.setItem("provider",a),await r.push("/")}};return(o,a)=>(G(),Ae("div",jR,[ae("div",zR,[HR,qR,ae("button",{type:"button",ref_key:"btnRef",ref:e},null,512),X(xv,null,{default:ht(()=>[(G(),Ae(Ve,null,tr(s,(c,l)=>X(Ov,{key:l},{default:ht(()=>[X($R,{class:mr(["btn-success flex items-center mx-auto w-full",[c.color]]),onClick:u=>i.onClickLogin(c.provider,c.name)},{default:ht(()=>[ae("img",{class:"rounded-full w-8 h-8 mr-4",src:c.icon,alt:c.name},null,8,KR),fi(" Login with "+Rn(c.name),1)]),_:2},1032,["class","onClick"])]),_:2},1024)),64))]),_:1})])]))}});function GR(){return{async beforeEnter(t,e,n){const r=Js(),{getPersistenceFirebaseUser:s}=Js(),{isAuthenticated:i}=Lg(r);try{await s("Google")}catch{n("/auth/login")}i.value?n():n("/auth/login")}}}const XR=[$t({path:"/",name:"Home",component:SS,children:[{path:"",component:UR,meta:{title:"Daft Doris"}},{path:":podcastId",component:xR,meta:{title:"Daft Doris"},props:!0}]},GR()),{path:"/auth",name:"Auth",component:WE,children:[{path:"Login",component:WR}]}],QR=$E({history:rE(),routes:XR});var ss=Object.assign;function zd(t,e){Object.entries(e).forEach(([n,r])=>{t.style[n]=r})}const YR={disappearEasing:"cubic-bezier(0.4, 0, 0.2, 1)",disappearDuration:".7s",appearEasing:"cubic-bezier(0.16, 1, 0.3, 1)",appearDuration:".8s",class:null,disabled:!1,center:!1,self:!1,noNested:!0,radius:null};function Hd(t){return ss(ss({},YR),t)}const qd=(t,e,n,r)=>{const s=t.getBoundingClientRect(),i=e.radius||function(l,u,h,f){const[d,g]=[[h,l],[f,u]].map(([v,_])=>v>_/2?v:_-v);return(d**2+g**2)**.5}(s.width,s.height,n,r),o=function(l,u){const h=document.createElement("div");return h.className=l.class||"",h.style.borderRadius="99999px",h.style.transition=`transform ${l.appearDuration} ${l.appearEasing}`,h.style.transformOrigin="center center",h.style.transform="scale(0)",h.style.position="absolute",h.style.width=h.style.height=2*u+"px",zd(h,l.circleStyle||{}),h}(e,i);(function(l,u,h,f){[l.style.left,l.style.top]=[u-f,h-f].map(d=>`${d}px`)})(o,n,r,i);const a=function(l){const u=document.createElement("div");return u.style.pointerEvents="none",u.style.position="absolute",u.style.overflow="hidden",u.style.borderRadius="inherit",u.style.transition=`opacity ${l.disappearDuration} ${l.disappearEasing}`,u.style.margin="0",u.style.padding="0",["left","top","right","bottom"].forEach(h=>{u.style[h]="0"}),zd(u,l.containerStyle||{}),u}(e);var c;return a.appendChild(o),t.appendChild(a),c=()=>{o.style.transform="scale(1)"},new Promise(l=>{requestAnimationFrame(()=>{requestAnimationFrame(()=>{l(),c&&c()})})}),{hide(){a.style.opacity="0",a.addEventListener("transitionend",l=>{l.target===a&&t.removeChild(a)})}}};function Fv(t,e=0){if(e>1e3)return function(...r){console.warn("[Ripple]",...r)}("noNested alghorithm error - max calls stack size exceeded"),null;if(function(r){return r.dataset.vRippleMark===""}(t))return t;const n=t.parentElement;return n?Fv(n,e+1):null}function Kd(t,e){return ss(ss({},t),e)}function Wd(t){var e,n,r,s,i,o;return ss(ss({},t.value),{self:(n=t.modifiers.self)!=null?n:(e=t.value)==null?void 0:e.self,center:(s=t.modifiers.center)!=null?s:(r=t.value)==null?void 0:r.center,noNested:(o=t.modifiers["no-nested"])!=null?o:(i=t.value)==null?void 0:i.noNested})}function ZR(t){const e=new WeakMap;return{mounted(n,r){const s=Wd(r),i=function(o,a){let c=Hd(a);const l=h=>c.center?function(f){const d=f.getBoundingClientRect();return[d.width/2,d.height/2]}(o):function(f,d){const g=f.getBoundingClientRect();return[d.clientX-g.x,d.clientY-g.y]}(o,h),u=h=>{if(c.disabled||c.self&&h.target!==o)return;if(c.noNested&&h.target&&h.target!==o){const _=Fv(h.target);if(_&&_!==o)return}let f=qd(o,c,...l(h));const d=()=>{f==null||f.hide(),window.removeEventListener("mouseup",d),o.removeEventListener("mouseleave",v),o.removeEventListener("mouseenter",g)},g=_=>{f=qd(o,c,...l(_))},v=()=>{f&&(f.hide(),f=null)};window.addEventListener("mouseup",d),o.addEventListener("mouseleave",v),o.addEventListener("mouseenter",g)};return function(h){h.dataset.vRippleMark=""}(o),getComputedStyle(o).position==="static"&&(o.style.position="relative"),o.addEventListener("mousedown",u),{updateOptions(h){c=Hd(h)},unbind(){o.removeEventListener("mousedown",u),function(h){delete h.dataset.vRippleMark}(o)}}}(n,Kd(t,s));e.set(n,i)},beforeUpdate(n,r){const s=e.get(n);if(s){const i=Wd(r),o=Kd(t,i);s.updateOptions(o)}},unmounted(n){const r=e.get(n);r&&(e.delete(n),r.unbind())}}}const JR=ca("loading",()=>{const t=Te(!1),e=Te(!1);function n(r,s=!0){t.value=r,e.value=s}return{value:t,transparent:e,setLoading:n}}),eN=ae("div",{class:"flex items-center justify-center space-x-2 animate-bounce"},[ae("div",{class:"w-4 h-4 bg-blue-400 rounded-full"}),ae("div",{class:"w-4 h-4 bg-green-400 rounded-full delay-300"}),ae("div",{class:"w-4 h-4 bg-black rounded-full delay-700"})],-1),tN=[eN],nN=st({setup(t){const e=JR(),n=me(()=>e.value),r=me(()=>[(e.transparent,"bg-transparent")]);return(s,i)=>(G(),We(Ws,{name:"fade"},{default:ht(()=>[hi(ae("div",{class:mr(["w-screen h-screen fixed top-0 left-0 flex justify-center items-center z-50",[ue(r)]])},tN,2),[[hg,ue(n)===!0]])]),_:1}))}}),rN=st({setup(t){return(e,n)=>{const r=Hl("router-view");return G(),Ae(Ve,null,[X(nN),X(r)],64)}}});var sN="firebase",iN="9.7.0";/**
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
 */Ft(sN,iN,"app");const Uv="@firebase/installations",oh="0.5.8";/**
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
 */const Bv=1e4,Vv=`w:${oh}`,$v="FIS_v2",oN="https://firebaseinstallations.googleapis.com/v1",aN=60*60*1e3,cN="installations",lN="Installations";/**
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
 */const uN={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},pr=new vr(cN,lN,uN);function jv(t){return t instanceof yn&&t.code.includes("request-failed")}/**
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
 */function zv({projectId:t}){return`${oN}/projects/${t}/installations`}function Hv(t){return{token:t.token,requestStatus:2,expiresIn:fN(t.expiresIn),creationTime:Date.now()}}async function qv(t,e){const r=(await e.json()).error;return pr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Kv({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function hN(t,{refreshToken:e}){const n=Kv(t);return n.append("Authorization",dN(e)),n}async function Wv(t){const e=await t();return e.status>=500&&e.status<600?t():e}function fN(t){return Number(t.replace("s","000"))}function dN(t){return`${$v} ${t}`}/**
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
 */async function pN({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=zv(t),s=Kv(t),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={fid:n,authVersion:$v,appId:t.appId,sdkVersion:Vv},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await Wv(()=>fetch(r,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:Hv(l.authToken)}}else throw await qv("Create Installation",c)}/**
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
 */function Gv(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function gN(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const mN=/^[cdef][\w-]{21}$/,Tl="";function yN(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=vN(t);return mN.test(n)?n:Tl}catch{return Tl}}function vN(t){return gN(t).substr(0,22)}/**
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
 */function $a(t){return`${t.appName}!${t.appId}`}/**
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
 */const Xv=new Map;function Qv(t,e){const n=$a(t);Yv(n,e),_N(n,e)}function Yv(t,e){const n=Xv.get(t);if(!!n)for(const r of n)r(e)}function _N(t,e){const n=wN();n&&n.postMessage({key:t,fid:e}),EN()}let Zn=null;function wN(){return!Zn&&"BroadcastChannel"in self&&(Zn=new BroadcastChannel("[Firebase] FID Change"),Zn.onmessage=t=>{Yv(t.data.key,t.data.fid)}),Zn}function EN(){Xv.size===0&&Zn&&(Zn.close(),Zn=null)}/**
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
 */const bN="firebase-installations-database",IN=1,gr="firebase-installations-store";let Ec=null;function ah(){return Ec||(Ec=Wg(bN,IN,(t,e)=>{switch(e){case 0:t.createObjectStore(gr)}})),Ec}async function Vo(t,e){const n=$a(t),s=(await ah()).transaction(gr,"readwrite"),i=s.objectStore(gr),o=await i.get(n);return await i.put(e,n),await s.complete,(!o||o.fid!==e.fid)&&Qv(t,e.fid),e}async function Zv(t){const e=$a(t),r=(await ah()).transaction(gr,"readwrite");await r.objectStore(gr).delete(e),await r.complete}async function ja(t,e){const n=$a(t),s=(await ah()).transaction(gr,"readwrite"),i=s.objectStore(gr),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.complete,a&&(!o||o.fid!==a.fid)&&Qv(t,a.fid),a}/**
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
 */async function ch(t){let e;const n=await ja(t.appConfig,r=>{const s=TN(r),i=AN(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===Tl?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function TN(t){const e=t||{fid:yN(),registrationStatus:0};return Jv(e)}function AN(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(pr.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=SN(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:CN(t)}:{installationEntry:e}}async function SN(t,e){try{const n=await pN(t,e);return Vo(t.appConfig,n)}catch(n){throw jv(n)&&n.customData.serverCode===409?await Zv(t.appConfig):await Vo(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function CN(t){let e=await Gd(t.appConfig);for(;e.registrationStatus===1;)await Gv(100),e=await Gd(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await ch(t);return r||n}return e}function Gd(t){return ja(t,e=>{if(!e)throw pr.create("installation-not-found");return Jv(e)})}function Jv(t){return kN(t)?{fid:t.fid,registrationStatus:0}:t}function kN(t){return t.registrationStatus===1&&t.registrationTime+Bv<Date.now()}/**
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
 */async function DN({appConfig:t,heartbeatServiceProvider:e},n){const r=RN(t,n),s=hN(t,n),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={installation:{sdkVersion:Vv,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await Wv(()=>fetch(r,a));if(c.ok){const l=await c.json();return Hv(l)}else throw await qv("Generate Auth Token",c)}function RN(t,{fid:e}){return`${zv(t)}/${e}/authTokens:generate`}/**
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
 */async function lh(t,e=!1){let n;const r=await ja(t.appConfig,i=>{if(!e_(i))throw pr.create("not-registered");const o=i.authToken;if(!e&&ON(o))return i;if(o.requestStatus===1)return n=NN(t,e),i;{if(!navigator.onLine)throw pr.create("app-offline");const a=MN(i);return n=xN(t,a),a}});return n?await n:r.authToken}async function NN(t,e){let n=await Xd(t.appConfig);for(;n.authToken.requestStatus===1;)await Gv(100),n=await Xd(t.appConfig);const r=n.authToken;return r.requestStatus===0?lh(t,e):r}function Xd(t){return ja(t,e=>{if(!e_(e))throw pr.create("not-registered");const n=e.authToken;return LN(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function xN(t,e){try{const n=await DN(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Vo(t.appConfig,r),n}catch(n){if(jv(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Zv(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Vo(t.appConfig,r)}throw n}}function e_(t){return t!==void 0&&t.registrationStatus===2}function ON(t){return t.requestStatus===2&&!PN(t)}function PN(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+aN}function MN(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function LN(t){return t.requestStatus===1&&t.requestTime+Bv<Date.now()}/**
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
 */async function FN(t){const e=t,{installationEntry:n,registrationPromise:r}=await ch(e);return r?r.catch(console.error):lh(e).catch(console.error),n.fid}/**
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
 */async function UN(t,e=!1){const n=t;return await BN(n),(await lh(n,e)).token}async function BN(t){const{registrationPromise:e}=await ch(t);e&&await e}/**
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
 */function VN(t){if(!t||!t.options)throw bc("App Configuration");if(!t.name)throw bc("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw bc(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function bc(t){return pr.create("missing-app-config-values",{valueName:t})}/**
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
 */const t_="installations",$N="installations-internal",jN=t=>{const e=t.getProvider("app").getImmediate(),n=VN(e),r=_r(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},zN=t=>{const e=t.getProvider("app").getImmediate(),n=_r(e,t_).getImmediate();return{getId:()=>FN(n),getToken:s=>UN(n,s)}};function HN(){Jt(new qt(t_,jN,"PUBLIC")),Jt(new qt($N,zN,"PRIVATE"))}HN();Ft(Uv,oh);Ft(Uv,oh,"esm2017");/**
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
 */const $o="analytics",qN="firebase_id",KN="origin",WN=60*1e3,GN="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",n_="https://www.googletagmanager.com/gtag/js";/**
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
 */const St=new la("@firebase/analytics");/**
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
 */function r_(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function XN(t,e){const n=document.createElement("script");n.src=`${n_}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function QN(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function YN(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const c=(await r_(n)).find(l=>l.measurementId===s);c&&await e[c.appId]}}catch(a){St.error(a)}t("config",s,i)}async function ZN(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await r_(n);for(const c of o){const l=a.find(h=>h.measurementId===c),u=l&&e[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){St.error(i)}}function JN(t,e,n,r){async function s(i,o,a){try{i==="event"?await ZN(t,e,n,o,a):i==="config"?await YN(t,e,n,r,o,a):t("set",o)}catch(c){St.error(c)}}return s}function ex(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=JN(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function tx(){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(n_))return e;return null}/**
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
 */const nx={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},Ut=new vr("analytics","Analytics",nx);/**
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
 */const rx=30,sx=1e3;class ix{constructor(e={},n=sx){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const s_=new ix;function ox(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function ax(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:ox(r)},i=GN.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw Ut.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function cx(t,e=s_,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw Ut.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Ut.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new hx;return setTimeout(async()=>{a.abort()},n!==void 0?n:WN),i_({appId:r,apiKey:s,measurementId:i},o,a,e)}async function i_(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=s_){const{appId:i,measurementId:o}=t;try{await lx(r,e)}catch(a){if(o)return St.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${a.message}]`),{appId:i,measurementId:o};throw a}try{const a=await ax(t);return s.deleteThrottleMetadata(i),a}catch(a){if(!ux(a)){if(s.deleteThrottleMetadata(i),o)return St.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${a.message}]`),{appId:i,measurementId:o};throw a}const c=Number(a.customData.httpStatus)===503?Ef(n,s.intervalMillis,rx):Ef(n,s.intervalMillis),l={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return s.setThrottleMetadata(i,l),St.debug(`Calling attemptFetch again in ${c} millis`),i_(t,l,r,s)}}function lx(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(Ut.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function ux(t){if(!(t instanceof yn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class hx{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}/**
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
 */async function fx(){if(zg())try{await Hg()}catch(t){return St.warn(Ut.create("indexeddb-unavailable",{errorInfo:t}).message),!1}else return St.warn(Ut.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function dx(t,e,n,r,s,i,o){var a;const c=cx(t);c.then(d=>{n[d.measurementId]=d.appId,t.options.measurementId&&d.measurementId!==t.options.measurementId&&St.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${d.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(d=>St.error(d)),e.push(c);const l=fx().then(d=>{if(d)return r.getId()}),[u,h]=await Promise.all([c,l]);tx()||XN(i,u.measurementId),s("js",new Date);const f=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return f[KN]="firebase",f.update=!0,h!=null&&(f[qN]=h),s("config",u.measurementId,f),u.measurementId}/**
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
 */class px{constructor(e){this.app=e}_delete(){return delete $s[this.app.options.appId],Promise.resolve()}}let $s={},Qd=[];const Yd={};let Ic="dataLayer",gx="gtag",Zd,o_,Jd=!1;function mx(){const t=[];if(Zl()&&t.push("This is a browser extension environment."),Hb()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Ut.create("invalid-analytics-context",{errorInfo:e});St.warn(n.message)}}function yx(t,e,n){mx();const r=t.options.appId;if(!r)throw Ut.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)St.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ut.create("no-api-key");if($s[r]!=null)throw Ut.create("already-exists",{id:r});if(!Jd){QN(Ic);const{wrappedGtag:i,gtagCore:o}=ex($s,Qd,Yd,Ic,gx);o_=i,Zd=o,Jd=!0}return $s[r]=dx(t,Qd,Yd,e,Zd,Ic,n),new px(t)}/**
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
 */async function vx(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});t("event",n,o)}}function _x(t=eu()){t=kt(t);const e=_r(t,$o);return e.isInitialized()?e.getImmediate():wx(t)}function wx(t,e={}){const n=_r(t,$o);if(n.isInitialized()){const s=n.getImmediate();if(Xs(e,n.getOptions()))return s;throw Ut.create("already-initialized")}return n.initialize({options:e})}function Ex(t,e,n,r){t=kt(t),vx(o_,$s[t.app.options.appId],e,n,r).catch(s=>St.error(s))}const ep="@firebase/analytics",tp="0.7.8";function bx(){Jt(new qt($o,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return yx(r,s,n)},"PUBLIC")),Jt(new qt("analytics-internal",t,"PRIVATE")),Ft(ep,tp),Ft(ep,tp,"esm2017");function t(e){try{const n=e.getProvider($o).getImmediate();return{logEvent:(r,s,i)=>Ex(n,r,s,i)}}catch(n){throw Ut.create("interop-component-reg-failed",{reason:n})}}}bx();const Ix={apiKey:"AIzaSyAXBQG6b0_AKCY63dbQlcecWNKmiLAKjiI",authDomain:"daftdoris-cns.firebaseapp.com",projectId:"daftdoris-cns",storageBucket:"daftdoris-cns.appspot.com",messagingSenderId:"785842200541",appId:"1:785842200541:web:8b34412472e7aa2feaa034",measurementId:"G-CCEL9G8W59"},Tx=$I(Ix);Fo();_x(Tx);L0(rN).directive("ripple",ZR({class:"bg-black opacity-30"})).use(Ob()).use(QR).mount("#app");
