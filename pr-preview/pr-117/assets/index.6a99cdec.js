var i_=Object.defineProperty,o_=Object.defineProperties;var a_=Object.getOwnPropertyDescriptors;var Ni=Object.getOwnPropertySymbols;var hh=Object.prototype.hasOwnProperty,fh=Object.prototype.propertyIsEnumerable;var lh=(t,e,n)=>e in t?i_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Kt=(t,e)=>{for(var n in e||(e={}))hh.call(e,n)&&lh(t,n,e[n]);if(Ni)for(var n of Ni(e))fh.call(e,n)&&lh(t,n,e[n]);return t},ys=(t,e)=>o_(t,a_(e));var Va=(t,e)=>{var n={};for(var r in t)hh.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&Ni)for(var r of Ni(t))e.indexOf(r)<0&&fh.call(t,r)&&(n[r]=t[r]);return n};const c_=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}};c_();function Iu(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const u_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",l_=Iu(u_);function tp(t){return!!t||t===""}function Uo(t){if(G(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ve(r)?d_(r):Uo(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(Ve(t))return t;if($e(t))return t}}const h_=/;(?![^(]*\))/g,f_=/:(.+)/;function d_(t){const e={};return t.split(h_).forEach(n=>{if(n){const r=n.split(f_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function hn(t){let e="";if(Ve(t))e=t;else if(G(t))for(let n=0;n<t.length;n++){const r=hn(t[n]);r&&(e+=r+" ")}else if($e(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function np(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Ve(e)&&(t.class=hn(e)),n&&(t.style=Uo(n)),t}const Bo=t=>Ve(t)?t:t==null?"":G(t)||$e(t)&&(t.toString===op||!te(t.toString))?JSON.stringify(t,rp,2):String(t),rp=(t,e)=>e&&e.__v_isRef?rp(t,e.value):Or(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:sp(e)?{[`Set(${e.size})`]:[...e.values()]}:$e(e)&&!G(e)&&!ap(e)?String(e):e,Ie={},xr=[],jt=()=>{},p_=()=>!1,g_=/^on[^a-z]/,Vo=t=>g_.test(t),Tu=t=>t.startsWith("onUpdate:"),nt=Object.assign,Au=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},m_=Object.prototype.hasOwnProperty,ue=(t,e)=>m_.call(t,e),G=Array.isArray,Or=t=>$o(t)==="[object Map]",sp=t=>$o(t)==="[object Set]",te=t=>typeof t=="function",Ve=t=>typeof t=="string",Su=t=>typeof t=="symbol",$e=t=>t!==null&&typeof t=="object",ip=t=>$e(t)&&te(t.then)&&te(t.catch),op=Object.prototype.toString,$o=t=>op.call(t),y_=t=>$o(t).slice(8,-1),ap=t=>$o(t)==="[object Object]",Cu=t=>Ve(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ji=Iu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),jo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},v_=/-(\w)/g,Yt=jo(t=>t.replace(v_,(e,n)=>n?n.toUpperCase():"")),__=/\B([A-Z])/g,gr=jo(t=>t.replace(__,"-$1").toLowerCase()),zo=jo(t=>t.charAt(0).toUpperCase()+t.slice(1)),$a=jo(t=>t?`on${zo(t)}`:""),Vs=(t,e)=>!Object.is(t,e),zi=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ji=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},eo=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let dh;const w_=()=>dh||(dh=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Et;class cp{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Et&&(this.parent=Et,this.index=(Et.scopes||(Et.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Et;try{return Et=this,e()}finally{Et=n}}}on(){Et=this}off(){Et=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function up(t){return new cp(t)}function E_(t,e=Et){e&&e.active&&e.effects.push(t)}function b_(){return Et}function I_(t){Et&&Et.cleanups.push(t)}const ku=t=>{const e=new Set(t);return e.w=0,e.n=0,e},lp=t=>(t.w&Pn)>0,hp=t=>(t.n&Pn)>0,T_=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Pn},A_=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];lp(s)&&!hp(s)?s.delete(t):e[n++]=s,s.w&=~Pn,s.n&=~Pn}e.length=n}},Ec=new WeakMap;let bs=0,Pn=1;const bc=30;let Vt;const Jn=Symbol(""),Ic=Symbol("");class Du{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,E_(this,r)}run(){if(!this.active)return this.fn();let e=Vt,n=Nn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Vt,Vt=this,Nn=!0,Pn=1<<++bs,bs<=bc?T_(this):ph(this),this.fn()}finally{bs<=bc&&A_(this),Pn=1<<--bs,Vt=this.parent,Nn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Vt===this?this.deferStop=!0:this.active&&(ph(this),this.onStop&&this.onStop(),this.active=!1)}}function ph(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Nn=!0;const fp=[];function rs(){fp.push(Nn),Nn=!1}function ss(){const t=fp.pop();Nn=t===void 0?!0:t}function Ct(t,e,n){if(Nn&&Vt){let r=Ec.get(t);r||Ec.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=ku()),dp(s)}}function dp(t,e){let n=!1;bs<=bc?hp(t)||(t.n|=Pn,n=!lp(t)):n=!t.has(Vt),n&&(t.add(Vt),Vt.deps.push(t))}function pn(t,e,n,r,s,i){const o=Ec.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&G(t))o.forEach((c,u)=>{(u==="length"||u>=r)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":G(t)?Cu(n)&&a.push(o.get("length")):(a.push(o.get(Jn)),Or(t)&&a.push(o.get(Ic)));break;case"delete":G(t)||(a.push(o.get(Jn)),Or(t)&&a.push(o.get(Ic)));break;case"set":Or(t)&&a.push(o.get(Jn));break}if(a.length===1)a[0]&&Tc(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);Tc(ku(c))}}function Tc(t,e){for(const n of G(t)?t:[...t])(n!==Vt||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const S_=Iu("__proto__,__v_isRef,__isVue"),pp=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(Su)),C_=Ru(),k_=Ru(!1,!0),D_=Ru(!0),gh=R_();function R_(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=fe(this);for(let i=0,o=this.length;i<o;i++)Ct(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(fe)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){rs();const r=fe(this)[e].apply(this,n);return ss(),r}}),t}function Ru(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?K_:_p:e?vp:yp).get(r))return r;const o=G(r);if(!t&&o&&ue(gh,s))return Reflect.get(gh,s,i);const a=Reflect.get(r,s,i);return(Su(s)?pp.has(s):S_(s))||(t||Ct(r,"get",s),e)?a:Ce(a)?!o||!Cu(s)?a.value:a:$e(a)?t?wp(a):is(a):a}}const N_=gp(),x_=gp(!0);function gp(t=!1){return function(n,r,s,i){let o=n[r];if($s(o)&&Ce(o)&&!Ce(s))return!1;if(!t&&!$s(s)&&(Ep(s)||(s=fe(s),o=fe(o)),!G(n)&&Ce(o)&&!Ce(s)))return o.value=s,!0;const a=G(n)&&Cu(r)?Number(r)<n.length:ue(n,r),c=Reflect.set(n,r,s,i);return n===fe(i)&&(a?Vs(s,o)&&pn(n,"set",r,s):pn(n,"add",r,s)),c}}function O_(t,e){const n=ue(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&pn(t,"delete",e,void 0),r}function P_(t,e){const n=Reflect.has(t,e);return(!Su(e)||!pp.has(e))&&Ct(t,"has",e),n}function M_(t){return Ct(t,"iterate",G(t)?"length":Jn),Reflect.ownKeys(t)}const mp={get:C_,set:N_,deleteProperty:O_,has:P_,ownKeys:M_},L_={get:D_,set(t,e){return!0},deleteProperty(t,e){return!0}},F_=nt({},mp,{get:k_,set:x_}),Nu=t=>t,Ho=t=>Reflect.getPrototypeOf(t);function xi(t,e,n=!1,r=!1){t=t.__v_raw;const s=fe(t),i=fe(e);e!==i&&!n&&Ct(s,"get",e),!n&&Ct(s,"get",i);const{has:o}=Ho(s),a=r?Nu:n?Pu:js;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Oi(t,e=!1){const n=this.__v_raw,r=fe(n),s=fe(t);return t!==s&&!e&&Ct(r,"has",t),!e&&Ct(r,"has",s),t===s?n.has(t):n.has(t)||n.has(s)}function Pi(t,e=!1){return t=t.__v_raw,!e&&Ct(fe(t),"iterate",Jn),Reflect.get(t,"size",t)}function mh(t){t=fe(t);const e=fe(this);return Ho(e).has.call(e,t)||(e.add(t),pn(e,"add",t,t)),this}function yh(t,e){e=fe(e);const n=fe(this),{has:r,get:s}=Ho(n);let i=r.call(n,t);i||(t=fe(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Vs(e,o)&&pn(n,"set",t,e):pn(n,"add",t,e),this}function vh(t){const e=fe(this),{has:n,get:r}=Ho(e);let s=n.call(e,t);s||(t=fe(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&pn(e,"delete",t,void 0),i}function _h(){const t=fe(this),e=t.size!==0,n=t.clear();return e&&pn(t,"clear",void 0,void 0),n}function Mi(t,e){return function(r,s){const i=this,o=i.__v_raw,a=fe(o),c=e?Nu:t?Pu:js;return!t&&Ct(a,"iterate",Jn),o.forEach((u,l)=>r.call(s,c(u),c(l),i))}}function Li(t,e,n){return function(...r){const s=this.__v_raw,i=fe(s),o=Or(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),l=n?Nu:e?Pu:js;return!e&&Ct(i,"iterate",c?Ic:Jn),{next(){const{value:h,done:f}=u.next();return f?{value:h,done:f}:{value:a?[l(h[0]),l(h[1])]:l(h),done:f}},[Symbol.iterator](){return this}}}}function _n(t){return function(...e){return t==="delete"?!1:this}}function U_(){const t={get(i){return xi(this,i)},get size(){return Pi(this)},has:Oi,add:mh,set:yh,delete:vh,clear:_h,forEach:Mi(!1,!1)},e={get(i){return xi(this,i,!1,!0)},get size(){return Pi(this)},has:Oi,add:mh,set:yh,delete:vh,clear:_h,forEach:Mi(!1,!0)},n={get(i){return xi(this,i,!0)},get size(){return Pi(this,!0)},has(i){return Oi.call(this,i,!0)},add:_n("add"),set:_n("set"),delete:_n("delete"),clear:_n("clear"),forEach:Mi(!0,!1)},r={get(i){return xi(this,i,!0,!0)},get size(){return Pi(this,!0)},has(i){return Oi.call(this,i,!0)},add:_n("add"),set:_n("set"),delete:_n("delete"),clear:_n("clear"),forEach:Mi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Li(i,!1,!1),n[i]=Li(i,!0,!1),e[i]=Li(i,!1,!0),r[i]=Li(i,!0,!0)}),[t,n,e,r]}const[B_,V_,$_,j_]=U_();function xu(t,e){const n=e?t?j_:$_:t?V_:B_;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ue(n,s)&&s in r?n:r,s,i)}const z_={get:xu(!1,!1)},H_={get:xu(!1,!0)},q_={get:xu(!0,!1)},yp=new WeakMap,vp=new WeakMap,_p=new WeakMap,K_=new WeakMap;function W_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function G_(t){return t.__v_skip||!Object.isExtensible(t)?0:W_(y_(t))}function is(t){return $s(t)?t:Ou(t,!1,mp,z_,yp)}function X_(t){return Ou(t,!1,F_,H_,vp)}function wp(t){return Ou(t,!0,L_,q_,_p)}function Ou(t,e,n,r,s){if(!$e(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=G_(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function fn(t){return $s(t)?fn(t.__v_raw):!!(t&&t.__v_isReactive)}function $s(t){return!!(t&&t.__v_isReadonly)}function Ep(t){return!!(t&&t.__v_isShallow)}function bp(t){return fn(t)||$s(t)}function fe(t){const e=t&&t.__v_raw;return e?fe(e):t}function Vr(t){return Ji(t,"__v_skip",!0),t}const js=t=>$e(t)?is(t):t,Pu=t=>$e(t)?wp(t):t;function Ip(t){Nn&&Vt&&(t=fe(t),dp(t.dep||(t.dep=ku())))}function Tp(t,e){t=fe(t),t.dep&&Tc(t.dep)}function Ce(t){return!!(t&&t.__v_isRef===!0)}function Te(t){return Sp(t,!1)}function Ap(t){return Sp(t,!0)}function Sp(t,e){return Ce(t)?t:new Q_(t,e)}class Q_{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:fe(e),this._value=n?e:js(e)}get value(){return Ip(this),this._value}set value(e){e=this.__v_isShallow?e:fe(e),Vs(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:js(e),Tp(this))}}function he(t){return Ce(t)?t.value:t}const Y_={get:(t,e,n)=>he(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ce(s)&&!Ce(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Cp(t){return fn(t)?t:new Proxy(t,Y_)}function Z_(t){const e=G(t)?new Array(t.length):{};for(const n in t)e[n]=kp(t,n);return e}class J_{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function kp(t,e,n){const r=t[e];return Ce(r)?r:new J_(t,e,n)}class ew{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Du(e,()=>{this._dirty||(this._dirty=!0,Tp(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=fe(this);return Ip(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function tw(t,e,n=!1){let r,s;const i=te(t);return i?(r=t,s=jt):(r=t.get,s=t.set),new ew(r,s,i||!s,n)}function xn(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){qo(i,e,n)}return s}function Ot(t,e,n,r){if(te(t)){const i=xn(t,e,n,r);return i&&ip(i)&&i.catch(o=>{qo(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Ot(t[i],e,n,r));return s}function qo(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const u=i.ec;if(u){for(let l=0;l<u.length;l++)if(u[l](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){xn(c,null,10,[t,o,a]);return}}nw(t,n,s,r)}function nw(t,e,n,r=!0){console.error(t)}let to=!1,Ac=!1;const bt=[];let on=0;const Cs=[];let Is=null,Sr=0;const ks=[];let An=null,Cr=0;const Dp=Promise.resolve();let Mu=null,Sc=null;function Pt(t){const e=Mu||Dp;return t?e.then(this?t.bind(this):t):e}function rw(t){let e=on+1,n=bt.length;for(;e<n;){const r=e+n>>>1;zs(bt[r])<t?e=r+1:n=r}return e}function Rp(t){(!bt.length||!bt.includes(t,to&&t.allowRecurse?on+1:on))&&t!==Sc&&(t.id==null?bt.push(t):bt.splice(rw(t.id),0,t),Np())}function Np(){!to&&!Ac&&(Ac=!0,Mu=Dp.then(Pp))}function sw(t){const e=bt.indexOf(t);e>on&&bt.splice(e,1)}function xp(t,e,n,r){G(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),Np()}function iw(t){xp(t,Is,Cs,Sr)}function ow(t){xp(t,An,ks,Cr)}function Lu(t,e=null){if(Cs.length){for(Sc=e,Is=[...new Set(Cs)],Cs.length=0,Sr=0;Sr<Is.length;Sr++)Is[Sr]();Is=null,Sr=0,Sc=null,Lu(t,e)}}function Op(t){if(ks.length){const e=[...new Set(ks)];if(ks.length=0,An){An.push(...e);return}for(An=e,An.sort((n,r)=>zs(n)-zs(r)),Cr=0;Cr<An.length;Cr++)An[Cr]();An=null,Cr=0}}const zs=t=>t.id==null?1/0:t.id;function Pp(t){Ac=!1,to=!0,Lu(t),bt.sort((n,r)=>zs(n)-zs(r));const e=jt;try{for(on=0;on<bt.length;on++){const n=bt[on];n&&n.active!==!1&&xn(n,null,14)}}finally{on=0,bt.length=0,Op(),to=!1,Mu=null,(bt.length||Cs.length||ks.length)&&Pp(t)}}function aw(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ie;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const l=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=r[l]||Ie;f?s=n.map(d=>d.trim()):h&&(s=n.map(eo))}let a,c=r[a=$a(e)]||r[a=$a(Yt(e))];!c&&i&&(c=r[a=$a(gr(e))]),c&&Ot(c,t,6,s);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ot(u,t,6,s)}}function Mp(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!te(t)){const c=u=>{const l=Mp(u,e,!0);l&&(a=!0,nt(o,l))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(r.set(t,null),null):(G(i)?i.forEach(c=>o[c]=null):nt(o,i),r.set(t,o),o)}function Ko(t,e){return!t||!Vo(e)?!1:(e=e.slice(2).replace(/Once$/,""),ue(t,e[0].toLowerCase()+e.slice(1))||ue(t,gr(e))||ue(t,e))}let ot=null,Wo=null;function no(t){const e=ot;return ot=t,Wo=t&&t.type.__scopeId||null,e}function Lp(t){Wo=t}function Fp(){Wo=null}function Qe(t,e=ot,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Rh(-1);const i=no(e),o=t(...s);return no(i),r._d&&Rh(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function ja(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:u,render:l,renderCache:h,data:f,setupState:d,ctx:g,inheritAttrs:v}=t;let _,T;const O=no(t);try{if(n.shapeFlag&4){const F=s||r;_=Gt(l.call(F,F,h,i,d,f,g)),T=c}else{const F=e;_=Gt(F.length>1?F(i,{attrs:c,slots:a,emit:u}):F(i,null)),T=e.props?c:cw(c)}}catch(F){Ds.length=0,qo(F,t,1),_=W(Lt)}let j=_;if(T&&v!==!1){const F=Object.keys(T),{shapeFlag:Q}=j;F.length&&Q&7&&(o&&F.some(Tu)&&(T=uw(T,o)),j=Mn(j,T))}return n.dirs&&(j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&(j.transition=n.transition),_=j,no(O),_}const cw=t=>{let e;for(const n in t)(n==="class"||n==="style"||Vo(n))&&((e||(e={}))[n]=t[n]);return e},uw=(t,e)=>{const n={};for(const r in t)(!Tu(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function lw(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?wh(r,o,u):!!o;if(c&8){const l=e.dynamicProps;for(let h=0;h<l.length;h++){const f=l[h];if(o[f]!==r[f]&&!Ko(u,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?wh(r,o,u):!0:!!o;return!1}function wh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Ko(n,i))return!0}return!1}function hw({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const fw=t=>t.__isSuspense;function dw(t,e){e&&e.pendingBranch?G(t)?e.effects.push(...t):e.effects.push(t):ow(t)}function Pr(t,e){if(qe){let n=qe.provides;const r=qe.parent&&qe.parent.provides;r===n&&(n=qe.provides=Object.create(r)),n[t]=e}}function Tt(t,e,n=!1){const r=qe||ot;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&te(e)?e.call(r.proxy):e}}function Go(t,e){return Fu(t,null,e)}const Eh={};function Mt(t,e,n){return Fu(t,e,n)}function Fu(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Ie){const a=qe;let c,u=!1,l=!1;if(Ce(t)?(c=()=>t.value,u=Ep(t)):fn(t)?(c=()=>t,r=!0):G(t)?(l=!0,u=t.some(fn),c=()=>t.map(T=>{if(Ce(T))return T.value;if(fn(T))return Gn(T);if(te(T))return xn(T,a,2)})):te(t)?e?c=()=>xn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),Ot(t,a,3,[f])}:c=jt,e&&r){const T=c;c=()=>Gn(T())}let h,f=T=>{h=_.onStop=()=>{xn(T,a,4)}};if(Hs)return f=jt,e?n&&Ot(e,a,3,[c(),l?[]:void 0,f]):c(),jt;let d=l?[]:Eh;const g=()=>{if(!!_.active)if(e){const T=_.run();(r||u||(l?T.some((O,j)=>Vs(O,d[j])):Vs(T,d)))&&(h&&h(),Ot(e,a,3,[T,d===Eh?void 0:d,f]),d=T)}else _.run()};g.allowRecurse=!!e;let v;s==="sync"?v=g:s==="post"?v=()=>gt(g,a&&a.suspense):v=()=>{!a||a.isMounted?iw(g):g()};const _=new Du(c,v);return e?n?g():d=_.run():s==="post"?gt(_.run.bind(_),a&&a.suspense):_.run(),()=>{_.stop(),a&&a.scope&&Au(a.scope.effects,_)}}function pw(t,e,n){const r=this.proxy,s=Ve(t)?t.includes(".")?Up(r,t):()=>r[t]:t.bind(r,r);let i;te(e)?i=e:(i=e.handler,n=e);const o=qe;jr(this);const a=Fu(s,i.bind(r),n);return o?jr(o):tr(),a}function Up(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Gn(t,e){if(!$e(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ce(t))Gn(t.value,e);else if(G(t))for(let n=0;n<t.length;n++)Gn(t[n],e);else if(sp(t)||Or(t))t.forEach(n=>{Gn(n,e)});else if(ap(t))for(const n in t)Gn(t[n],e);return t}function gw(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return $r(()=>{t.isMounted=!0}),Hp(()=>{t.isUnmounting=!0}),t}const xt=[Function,Array],mw={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:xt,onEnter:xt,onAfterEnter:xt,onEnterCancelled:xt,onBeforeLeave:xt,onLeave:xt,onAfterLeave:xt,onLeaveCancelled:xt,onBeforeAppear:xt,onAppear:xt,onAfterAppear:xt,onAppearCancelled:xt},setup(t,{slots:e}){const n=os(),r=gw();let s;return()=>{const i=e.default&&$p(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const v of i)if(v.type!==Lt){o=v;break}}const a=fe(t),{mode:c}=a;if(r.isLeaving)return za(o);const u=bh(o);if(!u)return za(o);const l=Cc(u,a,r,n);kc(u,l);const h=n.subTree,f=h&&bh(h);let d=!1;const{getTransitionKey:g}=u.type;if(g){const v=g();s===void 0?s=v:v!==s&&(s=v,d=!0)}if(f&&f.type!==Lt&&(!Kn(u,f)||d)){const v=Cc(f,a,r,n);if(kc(f,v),c==="out-in")return r.isLeaving=!0,v.afterLeave=()=>{r.isLeaving=!1,n.update()},za(o);c==="in-out"&&u.type!==Lt&&(v.delayLeave=(_,T,O)=>{const j=Vp(r,f);j[String(f.key)]=f,_._leaveCb=()=>{T(),_._leaveCb=void 0,delete l.delayedLeave},l.delayedLeave=O})}return o}}},Bp=mw;function Vp(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Cc(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:l,onBeforeLeave:h,onLeave:f,onAfterLeave:d,onLeaveCancelled:g,onBeforeAppear:v,onAppear:_,onAfterAppear:T,onAppearCancelled:O}=e,j=String(t.key),F=Vp(n,t),Q=(N,pe)=>{N&&Ot(N,r,9,pe)},P={mode:i,persisted:o,beforeEnter(N){let pe=a;if(!n.isMounted)if(s)pe=v||a;else return;N._leaveCb&&N._leaveCb(!0);const ie=F[j];ie&&Kn(t,ie)&&ie.el._leaveCb&&ie.el._leaveCb(),Q(pe,[N])},enter(N){let pe=c,ie=u,De=l;if(!n.isMounted)if(s)pe=_||c,ie=T||u,De=O||l;else return;let Le=!1;const B=N._enterCb=ye=>{Le||(Le=!0,ye?Q(De,[N]):Q(ie,[N]),P.delayedLeave&&P.delayedLeave(),N._enterCb=void 0)};pe?(pe(N,B),pe.length<=1&&B()):B()},leave(N,pe){const ie=String(t.key);if(N._enterCb&&N._enterCb(!0),n.isUnmounting)return pe();Q(h,[N]);let De=!1;const Le=N._leaveCb=B=>{De||(De=!0,pe(),B?Q(g,[N]):Q(d,[N]),N._leaveCb=void 0,F[ie]===t&&delete F[ie])};F[ie]=t,f?(f(N,Le),f.length<=1&&Le()):Le()},clone(N){return Cc(N,e,n,r)}};return P}function za(t){if(Xo(t))return t=Mn(t),t.children=null,t}function bh(t){return Xo(t)?t.children?t.children[0]:void 0:t}function kc(t,e){t.shapeFlag&6&&t.component?kc(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function $p(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Ze?(o.patchFlag&128&&s++,r=r.concat($p(o.children,e,a))):(e||o.type!==Lt)&&r.push(a!=null?Mn(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function lt(t){return te(t)?{setup:t,name:t.name}:t}const ro=t=>!!t.type.__asyncLoader,Xo=t=>t.type.__isKeepAlive;function yw(t,e){jp(t,"a",e)}function vw(t,e){jp(t,"da",e)}function jp(t,e,n=qe){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Qo(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Xo(s.parent.vnode)&&_w(r,e,n,s),s=s.parent}}function _w(t,e,n,r){const s=Qo(e,t,r,!0);Yo(()=>{Au(r[e],s)},n)}function Qo(t,e,n=qe,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;rs(),jr(n);const a=Ot(e,n,t,o);return tr(),ss(),a});return r?s.unshift(i):s.push(i),i}}const yn=t=>(e,n=qe)=>(!Hs||t==="sp")&&Qo(t,e,n),zp=yn("bm"),$r=yn("m"),ww=yn("bu"),Ew=yn("u"),Hp=yn("bum"),Yo=yn("um"),bw=yn("sp"),Iw=yn("rtg"),Tw=yn("rtc");function Aw(t,e=qe){Qo("ec",t,e)}let Dc=!0;function Sw(t){const e=Kp(t),n=t.proxy,r=t.ctx;Dc=!1,e.beforeCreate&&Ih(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:h,mounted:f,beforeUpdate:d,updated:g,activated:v,deactivated:_,beforeDestroy:T,beforeUnmount:O,destroyed:j,unmounted:F,render:Q,renderTracked:P,renderTriggered:N,errorCaptured:pe,serverPrefetch:ie,expose:De,inheritAttrs:Le,components:B,directives:ye,filters:ve}=e;if(u&&Cw(u,r,null,t.appContext.config.unwrapInjectedRef),o)for(const Ae in o){const _e=o[Ae];te(_e)&&(r[Ae]=_e.bind(n))}if(s){const Ae=s.call(n,n);$e(Ae)&&(t.data=is(Ae))}if(Dc=!0,i)for(const Ae in i){const _e=i[Ae],_t=te(_e)?_e.bind(n,n):te(_e.get)?_e.get.bind(n,n):jt,wr=!te(_e)&&te(_e.set)?_e.set.bind(n):jt,rn=me({get:_t,set:wr});Object.defineProperty(r,Ae,{enumerable:!0,configurable:!0,get:()=>rn.value,set:Ht=>rn.value=Ht})}if(a)for(const Ae in a)qp(a[Ae],r,n,Ae);if(c){const Ae=te(c)?c.call(n):c;Reflect.ownKeys(Ae).forEach(_e=>{Pr(_e,Ae[_e])})}l&&Ih(l,t,"c");function Me(Ae,_e){G(_e)?_e.forEach(_t=>Ae(_t.bind(n))):_e&&Ae(_e.bind(n))}if(Me(zp,h),Me($r,f),Me(ww,d),Me(Ew,g),Me(yw,v),Me(vw,_),Me(Aw,pe),Me(Tw,P),Me(Iw,N),Me(Hp,O),Me(Yo,F),Me(bw,ie),G(De))if(De.length){const Ae=t.exposed||(t.exposed={});De.forEach(_e=>{Object.defineProperty(Ae,_e,{get:()=>n[_e],set:_t=>n[_e]=_t})})}else t.exposed||(t.exposed={});Q&&t.render===jt&&(t.render=Q),Le!=null&&(t.inheritAttrs=Le),B&&(t.components=B),ye&&(t.directives=ye)}function Cw(t,e,n=jt,r=!1){G(t)&&(t=Rc(t));for(const s in t){const i=t[s];let o;$e(i)?"default"in i?o=Tt(i.from||s,i.default,!0):o=Tt(i.from||s):o=Tt(i),Ce(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function Ih(t,e,n){Ot(G(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function qp(t,e,n,r){const s=r.includes(".")?Up(n,r):()=>n[r];if(Ve(t)){const i=e[t];te(i)&&Mt(s,i)}else if(te(t))Mt(s,t.bind(n));else if($e(t))if(G(t))t.forEach(i=>qp(i,e,n,r));else{const i=te(t.handler)?t.handler.bind(n):e[t.handler];te(i)&&Mt(s,i,t)}}function Kp(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>so(c,u,o,!0)),so(c,e,o)),i.set(e,c),c}function so(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&so(t,i,n,!0),s&&s.forEach(o=>so(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=kw[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const kw={data:Th,props:Hn,emits:Hn,methods:Hn,computed:Hn,beforeCreate:ht,created:ht,beforeMount:ht,mounted:ht,beforeUpdate:ht,updated:ht,beforeDestroy:ht,beforeUnmount:ht,destroyed:ht,unmounted:ht,activated:ht,deactivated:ht,errorCaptured:ht,serverPrefetch:ht,components:Hn,directives:Hn,watch:Rw,provide:Th,inject:Dw};function Th(t,e){return e?t?function(){return nt(te(t)?t.call(this,this):t,te(e)?e.call(this,this):e)}:e:t}function Dw(t,e){return Hn(Rc(t),Rc(e))}function Rc(t){if(G(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ht(t,e){return t?[...new Set([].concat(t,e))]:e}function Hn(t,e){return t?nt(nt(Object.create(null),t),e):e}function Rw(t,e){if(!t)return e;if(!e)return t;const n=nt(Object.create(null),t);for(const r in e)n[r]=ht(t[r],e[r]);return n}function Nw(t,e,n,r=!1){const s={},i={};Ji(i,Zo,1),t.propsDefaults=Object.create(null),Wp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:X_(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function xw(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=fe(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const l=t.vnode.dynamicProps;for(let h=0;h<l.length;h++){let f=l[h];if(Ko(t.emitsOptions,f))continue;const d=e[f];if(c)if(ue(i,f))d!==i[f]&&(i[f]=d,u=!0);else{const g=Yt(f);s[g]=Nc(c,a,g,d,t,!1)}else d!==i[f]&&(i[f]=d,u=!0)}}}else{Wp(t,e,s,i)&&(u=!0);let l;for(const h in a)(!e||!ue(e,h)&&((l=gr(h))===h||!ue(e,l)))&&(c?n&&(n[h]!==void 0||n[l]!==void 0)&&(s[h]=Nc(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!ue(e,h)&&!0)&&(delete i[h],u=!0)}u&&pn(t,"set","$attrs")}function Wp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(ji(c))continue;const u=e[c];let l;s&&ue(s,l=Yt(c))?!i||!i.includes(l)?n[l]=u:(a||(a={}))[l]=u:Ko(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=fe(n),u=a||Ie;for(let l=0;l<i.length;l++){const h=i[l];n[h]=Nc(s,c,h,u[h],t,!ue(u,h))}}return o}function Nc(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=ue(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&te(c)){const{propsDefaults:u}=s;n in u?r=u[n]:(jr(s),r=u[n]=c.call(null,e),tr())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===gr(n))&&(r=!0))}return r}function Gp(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!te(t)){const l=h=>{c=!0;const[f,d]=Gp(h,e,!0);nt(o,f),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}if(!i&&!c)return r.set(t,xr),xr;if(G(i))for(let l=0;l<i.length;l++){const h=Yt(i[l]);Ah(h)&&(o[h]=Ie)}else if(i)for(const l in i){const h=Yt(l);if(Ah(h)){const f=i[l],d=o[h]=G(f)||te(f)?{type:f}:f;if(d){const g=kh(Boolean,d.type),v=kh(String,d.type);d[0]=g>-1,d[1]=v<0||g<v,(g>-1||ue(d,"default"))&&a.push(h)}}}const u=[o,a];return r.set(t,u),u}function Ah(t){return t[0]!=="$"}function Sh(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Ch(t,e){return Sh(t)===Sh(e)}function kh(t,e){return G(e)?e.findIndex(n=>Ch(n,t)):te(e)&&Ch(e,t)?0:-1}const Xp=t=>t[0]==="_"||t==="$stable",Uu=t=>G(t)?t.map(Gt):[Gt(t)],Ow=(t,e,n)=>{const r=Qe((...s)=>Uu(e(...s)),n);return r._c=!1,r},Qp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Xp(s))continue;const i=t[s];if(te(i))e[s]=Ow(s,i,r);else if(i!=null){const o=Uu(i);e[s]=()=>o}}},Yp=(t,e)=>{const n=Uu(e);t.slots.default=()=>n},Pw=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=fe(e),Ji(e,"_",n)):Qp(e,t.slots={})}else t.slots={},e&&Yp(t,e);Ji(t.slots,Zo,1)},Mw=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ie;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(nt(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Qp(e,s)),o=e}else e&&(Yp(t,e),o={default:1});if(i)for(const a in s)!Xp(a)&&!(a in o)&&delete s[a]};function ui(t,e){const n=ot;if(n===null)return t;const r=ea(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,u=Ie]=e[i];te(o)&&(o={mounted:o,updated:o}),o.deep&&Gn(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:u})}return t}function $n(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(rs(),Ot(c,n,8,[t.el,a,t,e]),ss())}}function Zp(){return{app:null,config:{isNativeTag:p_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Lw=0;function Fw(t,e){return function(r,s=null){te(r)||(r=Object.assign({},r)),s!=null&&!$e(s)&&(s=null);const i=Zp(),o=new Set;let a=!1;const c=i.app={_uid:Lw++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:s0,get config(){return i.config},set config(u){},use(u,...l){return o.has(u)||(u&&te(u.install)?(o.add(u),u.install(c,...l)):te(u)&&(o.add(u),u(c,...l))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,l){return l?(i.components[u]=l,c):i.components[u]},directive(u,l){return l?(i.directives[u]=l,c):i.directives[u]},mount(u,l,h){if(!a){const f=W(r,s);return f.appContext=i,l&&e?e(f,u):t(f,u,h),a=!0,c._container=u,u.__vue_app__=c,ea(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,l){return i.provides[u]=l,c}};return c}}function xc(t,e,n,r,s=!1){if(G(t)){t.forEach((f,d)=>xc(f,e&&(G(e)?e[d]:e),n,r,s));return}if(ro(r)&&!s)return;const i=r.shapeFlag&4?ea(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,u=e&&e.r,l=a.refs===Ie?a.refs={}:a.refs,h=a.setupState;if(u!=null&&u!==c&&(Ve(u)?(l[u]=null,ue(h,u)&&(h[u]=null)):Ce(u)&&(u.value=null)),te(c))xn(c,a,12,[o,l]);else{const f=Ve(c),d=Ce(c);if(f||d){const g=()=>{if(t.f){const v=f?l[c]:c.value;s?G(v)&&Au(v,i):G(v)?v.includes(i)||v.push(i):f?(l[c]=[i],ue(h,c)&&(h[c]=l[c])):(c.value=[i],t.k&&(l[t.k]=c.value))}else f?(l[c]=o,ue(h,c)&&(h[c]=o)):Ce(c)&&(c.value=o,t.k&&(l[t.k]=o))};o?(g.id=-1,gt(g,n)):g()}}}const gt=dw;function Uw(t){return Bw(t)}function Bw(t,e){const n=w_();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:h,nextSibling:f,setScopeId:d=jt,cloneNode:g,insertStaticContent:v}=t,_=(p,m,y,b=null,E=null,C=null,x=!1,S=null,D=!!m.dynamicChildren)=>{if(p===m)return;p&&!Kn(p,m)&&(b=$(p),Nt(p,E,C,!0),p=null),m.patchFlag===-2&&(D=!1,m.dynamicChildren=null);const{type:I,ref:z,shapeFlag:L}=m;switch(I){case ju:T(p,m,y,b);break;case Lt:O(p,m,y,b);break;case Ha:p==null&&j(m,y,b,x);break;case Ze:ye(p,m,y,b,E,C,x,S,D);break;default:L&1?P(p,m,y,b,E,C,x,S,D):L&6?ve(p,m,y,b,E,C,x,S,D):(L&64||L&128)&&I.process(p,m,y,b,E,C,x,S,D,Se)}z!=null&&E&&xc(z,p&&p.ref,C,m||p,!m)},T=(p,m,y,b)=>{if(p==null)r(m.el=a(m.children),y,b);else{const E=m.el=p.el;m.children!==p.children&&u(E,m.children)}},O=(p,m,y,b)=>{p==null?r(m.el=c(m.children||""),y,b):m.el=p.el},j=(p,m,y,b)=>{[p.el,p.anchor]=v(p.children,m,y,b,p.el,p.anchor)},F=({el:p,anchor:m},y,b)=>{let E;for(;p&&p!==m;)E=f(p),r(p,y,b),p=E;r(m,y,b)},Q=({el:p,anchor:m})=>{let y;for(;p&&p!==m;)y=f(p),s(p),p=y;s(m)},P=(p,m,y,b,E,C,x,S,D)=>{x=x||m.type==="svg",p==null?N(m,y,b,E,C,x,S,D):De(p,m,E,C,x,S,D)},N=(p,m,y,b,E,C,x,S)=>{let D,I;const{type:z,props:L,shapeFlag:H,transition:Y,patchFlag:le,dirs:xe}=p;if(p.el&&g!==void 0&&le===-1)D=p.el=g(p.el);else{if(D=p.el=o(p.type,C,L&&L.is,L),H&8?l(D,p.children):H&16&&ie(p.children,D,null,b,E,C&&z!=="foreignObject",x,S),xe&&$n(p,null,b,"created"),L){for(const Re in L)Re!=="value"&&!ji(Re)&&i(D,Re,null,L[Re],C,p.children,b,E,R);"value"in L&&i(D,"value",null,L.value),(I=L.onVnodeBeforeMount)&&Wt(I,b,p)}pe(D,p,p.scopeId,x,b)}xe&&$n(p,null,b,"beforeMount");const Ee=(!E||E&&!E.pendingBranch)&&Y&&!Y.persisted;Ee&&Y.beforeEnter(D),r(D,m,y),((I=L&&L.onVnodeMounted)||Ee||xe)&&gt(()=>{I&&Wt(I,b,p),Ee&&Y.enter(D),xe&&$n(p,null,b,"mounted")},E)},pe=(p,m,y,b,E)=>{if(y&&d(p,y),b)for(let C=0;C<b.length;C++)d(p,b[C]);if(E){let C=E.subTree;if(m===C){const x=E.vnode;pe(p,x,x.scopeId,x.slotScopeIds,E.parent)}}},ie=(p,m,y,b,E,C,x,S,D=0)=>{for(let I=D;I<p.length;I++){const z=p[I]=S?Sn(p[I]):Gt(p[I]);_(null,z,m,y,b,E,C,x,S)}},De=(p,m,y,b,E,C,x)=>{const S=m.el=p.el;let{patchFlag:D,dynamicChildren:I,dirs:z}=m;D|=p.patchFlag&16;const L=p.props||Ie,H=m.props||Ie;let Y;y&&jn(y,!1),(Y=H.onVnodeBeforeUpdate)&&Wt(Y,y,m,p),z&&$n(m,p,y,"beforeUpdate"),y&&jn(y,!0);const le=E&&m.type!=="foreignObject";if(I?Le(p.dynamicChildren,I,S,y,b,le,C):x||_t(p,m,S,null,y,b,le,C,!1),D>0){if(D&16)B(S,m,L,H,y,b,E);else if(D&2&&L.class!==H.class&&i(S,"class",null,H.class,E),D&4&&i(S,"style",L.style,H.style,E),D&8){const xe=m.dynamicProps;for(let Ee=0;Ee<xe.length;Ee++){const Re=xe[Ee],Bt=L[Re],Er=H[Re];(Er!==Bt||Re==="value")&&i(S,Re,Bt,Er,E,p.children,y,b,R)}}D&1&&p.children!==m.children&&l(S,m.children)}else!x&&I==null&&B(S,m,L,H,y,b,E);((Y=H.onVnodeUpdated)||z)&&gt(()=>{Y&&Wt(Y,y,m,p),z&&$n(m,p,y,"updated")},b)},Le=(p,m,y,b,E,C,x)=>{for(let S=0;S<m.length;S++){const D=p[S],I=m[S],z=D.el&&(D.type===Ze||!Kn(D,I)||D.shapeFlag&70)?h(D.el):y;_(D,I,z,null,b,E,C,x,!0)}},B=(p,m,y,b,E,C,x)=>{if(y!==b){for(const S in b){if(ji(S))continue;const D=b[S],I=y[S];D!==I&&S!=="value"&&i(p,S,I,D,x,m.children,E,C,R)}if(y!==Ie)for(const S in y)!ji(S)&&!(S in b)&&i(p,S,y[S],null,x,m.children,E,C,R);"value"in b&&i(p,"value",y.value,b.value)}},ye=(p,m,y,b,E,C,x,S,D)=>{const I=m.el=p?p.el:a(""),z=m.anchor=p?p.anchor:a("");let{patchFlag:L,dynamicChildren:H,slotScopeIds:Y}=m;Y&&(S=S?S.concat(Y):Y),p==null?(r(I,y,b),r(z,y,b),ie(m.children,y,z,E,C,x,S,D)):L>0&&L&64&&H&&p.dynamicChildren?(Le(p.dynamicChildren,H,y,E,C,x,S),(m.key!=null||E&&m===E.subTree)&&Jp(p,m,!0)):_t(p,m,y,z,E,C,x,S,D)},ve=(p,m,y,b,E,C,x,S,D)=>{m.slotScopeIds=S,p==null?m.shapeFlag&512?E.ctx.activate(m,y,b,x,D):nn(m,y,b,E,C,x,D):Me(p,m,D)},nn=(p,m,y,b,E,C,x)=>{const S=p.component=Yw(p,b,E);if(Xo(p)&&(S.ctx.renderer=Se),Zw(S),S.asyncDep){if(E&&E.registerDep(S,Ae),!p.el){const D=S.subTree=W(Lt);O(null,D,m,y)}return}Ae(S,p,m,y,E,C,x)},Me=(p,m,y)=>{const b=m.component=p.component;if(lw(p,m,y))if(b.asyncDep&&!b.asyncResolved){_e(b,m,y);return}else b.next=m,sw(b.update),b.update();else m.component=p.component,m.el=p.el,b.vnode=m},Ae=(p,m,y,b,E,C,x)=>{const S=()=>{if(p.isMounted){let{next:z,bu:L,u:H,parent:Y,vnode:le}=p,xe=z,Ee;jn(p,!1),z?(z.el=le.el,_e(p,z,x)):z=le,L&&zi(L),(Ee=z.props&&z.props.onVnodeBeforeUpdate)&&Wt(Ee,Y,z,le),jn(p,!0);const Re=ja(p),Bt=p.subTree;p.subTree=Re,_(Bt,Re,h(Bt.el),$(Bt),p,E,C),z.el=Re.el,xe===null&&hw(p,Re.el),H&&gt(H,E),(Ee=z.props&&z.props.onVnodeUpdated)&&gt(()=>Wt(Ee,Y,z,le),E)}else{let z;const{el:L,props:H}=m,{bm:Y,m:le,parent:xe}=p,Ee=ro(m);if(jn(p,!1),Y&&zi(Y),!Ee&&(z=H&&H.onVnodeBeforeMount)&&Wt(z,xe,m),jn(p,!0),L&&ne){const Re=()=>{p.subTree=ja(p),ne(L,p.subTree,p,E,null)};Ee?m.type.__asyncLoader().then(()=>!p.isUnmounted&&Re()):Re()}else{const Re=p.subTree=ja(p);_(null,Re,y,b,p,E,C),m.el=Re.el}if(le&&gt(le,E),!Ee&&(z=H&&H.onVnodeMounted)){const Re=m;gt(()=>Wt(z,xe,Re),E)}m.shapeFlag&256&&p.a&&gt(p.a,E),p.isMounted=!0,m=y=b=null}},D=p.effect=new Du(S,()=>Rp(p.update),p.scope),I=p.update=D.run.bind(D);I.id=p.uid,jn(p,!0),I()},_e=(p,m,y)=>{m.component=p;const b=p.vnode.props;p.vnode=m,p.next=null,xw(p,m.props,b,y),Mw(p,m.children,y),rs(),Lu(void 0,p.update),ss()},_t=(p,m,y,b,E,C,x,S,D=!1)=>{const I=p&&p.children,z=p?p.shapeFlag:0,L=m.children,{patchFlag:H,shapeFlag:Y}=m;if(H>0){if(H&128){rn(I,L,y,b,E,C,x,S,D);return}else if(H&256){wr(I,L,y,b,E,C,x,S,D);return}}Y&8?(z&16&&R(I,E,C),L!==I&&l(y,L)):z&16?Y&16?rn(I,L,y,b,E,C,x,S,D):R(I,E,C,!0):(z&8&&l(y,""),Y&16&&ie(L,y,b,E,C,x,S,D))},wr=(p,m,y,b,E,C,x,S,D)=>{p=p||xr,m=m||xr;const I=p.length,z=m.length,L=Math.min(I,z);let H;for(H=0;H<L;H++){const Y=m[H]=D?Sn(m[H]):Gt(m[H]);_(p[H],Y,y,null,E,C,x,S,D)}I>z?R(p,E,C,!0,!1,L):ie(m,y,b,E,C,x,S,D,L)},rn=(p,m,y,b,E,C,x,S,D)=>{let I=0;const z=m.length;let L=p.length-1,H=z-1;for(;I<=L&&I<=H;){const Y=p[I],le=m[I]=D?Sn(m[I]):Gt(m[I]);if(Kn(Y,le))_(Y,le,y,null,E,C,x,S,D);else break;I++}for(;I<=L&&I<=H;){const Y=p[L],le=m[H]=D?Sn(m[H]):Gt(m[H]);if(Kn(Y,le))_(Y,le,y,null,E,C,x,S,D);else break;L--,H--}if(I>L){if(I<=H){const Y=H+1,le=Y<z?m[Y].el:b;for(;I<=H;)_(null,m[I]=D?Sn(m[I]):Gt(m[I]),y,le,E,C,x,S,D),I++}}else if(I>H)for(;I<=L;)Nt(p[I],E,C,!0),I++;else{const Y=I,le=I,xe=new Map;for(I=le;I<=H;I++){const wt=m[I]=D?Sn(m[I]):Gt(m[I]);wt.key!=null&&xe.set(wt.key,I)}let Ee,Re=0;const Bt=H-le+1;let Er=!1,ah=0;const ms=new Array(Bt);for(I=0;I<Bt;I++)ms[I]=0;for(I=Y;I<=L;I++){const wt=p[I];if(Re>=Bt){Nt(wt,E,C,!0);continue}let qt;if(wt.key!=null)qt=xe.get(wt.key);else for(Ee=le;Ee<=H;Ee++)if(ms[Ee-le]===0&&Kn(wt,m[Ee])){qt=Ee;break}qt===void 0?Nt(wt,E,C,!0):(ms[qt-le]=I+1,qt>=ah?ah=qt:Er=!0,_(wt,m[qt],y,null,E,C,x,S,D),Re++)}const ch=Er?Vw(ms):xr;for(Ee=ch.length-1,I=Bt-1;I>=0;I--){const wt=le+I,qt=m[wt],uh=wt+1<z?m[wt+1].el:b;ms[I]===0?_(null,qt,y,uh,E,C,x,S,D):Er&&(Ee<0||I!==ch[Ee]?Ht(qt,y,uh,2):Ee--)}}},Ht=(p,m,y,b,E=null)=>{const{el:C,type:x,transition:S,children:D,shapeFlag:I}=p;if(I&6){Ht(p.component.subTree,m,y,b);return}if(I&128){p.suspense.move(m,y,b);return}if(I&64){x.move(p,m,y,Se);return}if(x===Ze){r(C,m,y);for(let L=0;L<D.length;L++)Ht(D[L],m,y,b);r(p.anchor,m,y);return}if(x===Ha){F(p,m,y);return}if(b!==2&&I&1&&S)if(b===0)S.beforeEnter(C),r(C,m,y),gt(()=>S.enter(C),E);else{const{leave:L,delayLeave:H,afterLeave:Y}=S,le=()=>r(C,m,y),xe=()=>{L(C,()=>{le(),Y&&Y()})};H?H(C,le,xe):xe()}else r(C,m,y)},Nt=(p,m,y,b=!1,E=!1)=>{const{type:C,props:x,ref:S,children:D,dynamicChildren:I,shapeFlag:z,patchFlag:L,dirs:H}=p;if(S!=null&&xc(S,null,y,p,!0),z&256){m.ctx.deactivate(p);return}const Y=z&1&&H,le=!ro(p);let xe;if(le&&(xe=x&&x.onVnodeBeforeUnmount)&&Wt(xe,m,p),z&6)U(p.component,y,b);else{if(z&128){p.suspense.unmount(y,b);return}Y&&$n(p,null,m,"beforeUnmount"),z&64?p.type.remove(p,m,y,E,Se,b):I&&(C!==Ze||L>0&&L&64)?R(I,m,y,!1,!0):(C===Ze&&L&384||!E&&z&16)&&R(D,m,y),b&&Ba(p)}(le&&(xe=x&&x.onVnodeUnmounted)||Y)&&gt(()=>{xe&&Wt(xe,m,p),Y&&$n(p,null,m,"unmounted")},y)},Ba=p=>{const{type:m,el:y,anchor:b,transition:E}=p;if(m===Ze){w(y,b);return}if(m===Ha){Q(p);return}const C=()=>{s(y),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(p.shapeFlag&1&&E&&!E.persisted){const{leave:x,delayLeave:S}=E,D=()=>x(y,C);S?S(p.el,C,D):D()}else C()},w=(p,m)=>{let y;for(;p!==m;)y=f(p),s(p),p=y;s(m)},U=(p,m,y)=>{const{bum:b,scope:E,update:C,subTree:x,um:S}=p;b&&zi(b),E.stop(),C&&(C.active=!1,Nt(x,p,m,y)),S&&gt(S,m),gt(()=>{p.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},R=(p,m,y,b=!1,E=!1,C=0)=>{for(let x=C;x<p.length;x++)Nt(p[x],m,y,b,E)},$=p=>p.shapeFlag&6?$(p.component.subTree):p.shapeFlag&128?p.suspense.next():f(p.anchor||p.el),we=(p,m,y)=>{p==null?m._vnode&&Nt(m._vnode,null,null,!0):_(m._vnode||null,p,m,null,null,null,y),Op(),m._vnode=p},Se={p:_,um:Nt,m:Ht,r:Ba,mt:nn,mc:ie,pc:_t,pbc:Le,n:$,o:t};let se,ne;return e&&([se,ne]=e(Se)),{render:we,hydrate:se,createApp:Fw(we,se)}}function jn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Jp(t,e,n=!1){const r=t.children,s=e.children;if(G(r)&&G(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Sn(s[i]),a.el=o.el),n||Jp(o,a))}}function Vw(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const $w=t=>t.__isTeleport,Bu="components",jw="directives";function Vu(t,e){return $u(Bu,t,!0,e)||t}const eg=Symbol();function zw(t){return Ve(t)?$u(Bu,t,!1)||t:t||eg}function Hw(t){return $u(jw,t)}function $u(t,e,n=!0,r=!1){const s=ot||qe;if(s){const i=s.type;if(t===Bu){const a=n0(i);if(a&&(a===e||a===Yt(e)||a===zo(Yt(e))))return i}const o=Dh(s[t]||i[t],e)||Dh(s.appContext[t],e);return!o&&r?i:o}}function Dh(t,e){return t&&(t[e]||t[Yt(e)]||t[zo(Yt(e))])}const Ze=Symbol(void 0),ju=Symbol(void 0),Lt=Symbol(void 0),Ha=Symbol(void 0),Ds=[];let er=null;function ae(t=!1){Ds.push(er=t?null:[])}function qw(){Ds.pop(),er=Ds[Ds.length-1]||null}let io=1;function Rh(t){io+=t}function tg(t){return t.dynamicChildren=io>0?er||xr:null,qw(),io>0&&er&&er.push(t),t}function ze(t,e,n,r,s,i){return tg(oe(t,e,n,r,s,i,!0))}function at(t,e,n,r,s){return tg(W(t,e,n,r,s,!0))}function oo(t){return t?t.__v_isVNode===!0:!1}function Kn(t,e){return t.type===e.type&&t.key===e.key}const Zo="__vInternal",ng=({key:t})=>t!=null?t:null,Hi=({ref:t,ref_key:e,ref_for:n})=>t!=null?Ve(t)||Ce(t)||te(t)?{i:ot,r:t,k:e,f:!!n}:t:null;function oe(t,e=null,n=null,r=0,s=null,i=t===Ze?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ng(e),ref:e&&Hi(e),scopeId:Wo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(zu(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ve(n)?8:16),io>0&&!o&&er&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&er.push(c),c}const W=Kw;function Kw(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===eg)&&(t=Lt),oo(t)){const a=Mn(t,e,!0);return n&&zu(a,n),a}if(r0(t)&&(t=t.__vccOpts),e){e=rg(e);let{class:a,style:c}=e;a&&!Ve(a)&&(e.class=hn(a)),$e(c)&&(bp(c)&&!G(c)&&(c=nt({},c)),e.style=Uo(c))}const o=Ve(t)?1:fw(t)?128:$w(t)?64:$e(t)?4:te(t)?2:0;return oe(t,e,n,r,s,o,i,!0)}function rg(t){return t?bp(t)||Zo in t?nt({},t):t:null}function Mn(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?Hu(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&ng(a),ref:e&&e.ref?n&&s?G(s)?s.concat(Hi(e)):[s,Hi(e)]:Hi(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ze?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Mn(t.ssContent),ssFallback:t.ssFallback&&Mn(t.ssFallback),el:t.el,anchor:t.anchor}}function li(t=" ",e=0){return W(ju,null,t,e)}function Ww(t="",e=!1){return e?(ae(),at(Lt,null,t)):W(Lt,null,t)}function Gt(t){return t==null||typeof t=="boolean"?W(Lt):G(t)?W(Ze,null,t.slice()):typeof t=="object"?Sn(t):W(ju,null,String(t))}function Sn(t){return t.el===null||t.memo?t:Mn(t)}function zu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(G(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),zu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Zo in e)?e._ctx=ot:s===3&&ot&&(ot.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else te(e)?(e={default:e,_ctx:ot},n=32):(e=String(e),r&64?(n=16,e=[li(e)]):n=8);t.children=e,t.shapeFlag|=n}function Hu(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=hn([e.class,r.class]));else if(s==="style")e.style=Uo([e.style,r.style]);else if(Vo(s)){const i=e[s],o=r[s];o&&i!==o&&!(G(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Wt(t,e,n,r=null){Ot(t,e,7,[n,r])}function Oc(t,e,n,r){let s;const i=n&&n[r];if(G(t)||Ve(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if($e(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const u=o[a];s[a]=e(t[u],u,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}function Jo(t,e,n={},r,s){if(ot.isCE||ot.parent&&ro(ot.parent)&&ot.parent.isCE)return W("slot",e==="default"?null:{name:e},r&&r());let i=t[e];i&&i._c&&(i._d=!1),ae();const o=i&&sg(i(n)),a=at(Ze,{key:n.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function sg(t){return t.some(e=>oo(e)?!(e.type===Lt||e.type===Ze&&!sg(e.children)):!0)?t:null}const Pc=t=>t?ig(t)?ea(t)||t.proxy:Pc(t.parent):null,ao=nt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Pc(t.parent),$root:t=>Pc(t.root),$emit:t=>t.emit,$options:t=>Kp(t),$forceUpdate:t=>()=>Rp(t.update),$nextTick:t=>Pt.bind(t.proxy),$watch:t=>pw.bind(t)}),Gw={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(r!==Ie&&ue(r,e))return o[e]=1,r[e];if(s!==Ie&&ue(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&ue(u,e))return o[e]=3,i[e];if(n!==Ie&&ue(n,e))return o[e]=4,n[e];Dc&&(o[e]=0)}}const l=ao[e];let h,f;if(l)return e==="$attrs"&&Ct(t,"get",e),l(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ie&&ue(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,ue(f,e))return f[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return s!==Ie&&ue(s,e)?(s[e]=n,!0):r!==Ie&&ue(r,e)?(r[e]=n,!0):ue(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Ie&&ue(t,o)||e!==Ie&&ue(e,o)||(a=i[0])&&ue(a,o)||ue(r,o)||ue(ao,o)||ue(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ue(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},Xw=Zp();let Qw=0;function Yw(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Xw,i={uid:Qw++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new cp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Gp(r,s),emitsOptions:Mp(r,s),emit:null,emitted:null,propsDefaults:Ie,inheritAttrs:r.inheritAttrs,ctx:Ie,data:Ie,props:Ie,attrs:Ie,slots:Ie,refs:Ie,setupState:Ie,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=aw.bind(null,i),t.ce&&t.ce(i),i}let qe=null;const os=()=>qe||ot,jr=t=>{qe=t,t.scope.on()},tr=()=>{qe&&qe.scope.off(),qe=null};function ig(t){return t.vnode.shapeFlag&4}let Hs=!1;function Zw(t,e=!1){Hs=e;const{props:n,children:r}=t.vnode,s=ig(t);Nw(t,n,s,e),Pw(t,r);const i=s?Jw(t,e):void 0;return Hs=!1,i}function Jw(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Vr(new Proxy(t.ctx,Gw));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?t0(t):null;jr(t),rs();const i=xn(r,t,0,[t.props,s]);if(ss(),tr(),ip(i)){if(i.then(tr,tr),e)return i.then(o=>{Nh(t,o,e)}).catch(o=>{qo(o,t,0)});t.asyncDep=i}else Nh(t,i,e)}else og(t,e)}function Nh(t,e,n){te(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:$e(e)&&(t.setupState=Cp(e)),og(t,n)}let xh;function og(t,e,n){const r=t.type;if(!t.render){if(!e&&xh&&!r.render){const s=r.template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,u=nt(nt({isCustomElement:i,delimiters:a},o),c);r.render=xh(s,u)}}t.render=r.render||jt}jr(t),rs(),Sw(t),ss(),tr()}function e0(t){return new Proxy(t.attrs,{get(e,n){return Ct(t,"get","$attrs"),e[n]}})}function t0(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=e0(t))},slots:t.slots,emit:t.emit,expose:e}}function ea(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Cp(Vr(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ao)return ao[n](t)}}))}function n0(t){return te(t)&&t.displayName||t.name}function r0(t){return te(t)&&"__vccOpts"in t}const me=(t,e)=>tw(t,e,Hs);function ta(t,e,n){const r=arguments.length;return r===2?$e(e)&&!G(e)?oo(e)?W(t,null,[e]):W(t,e):W(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&oo(n)&&(n=[n]),W(t,e,n))}const s0="3.2.33",i0="http://www.w3.org/2000/svg",Wn=typeof document!="undefined"?document:null,Oh=Wn&&Wn.createElement("template"),o0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Wn.createElementNS(i0,t):Wn.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Wn.createTextNode(t),createComment:t=>Wn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Wn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Oh.innerHTML=r?`<svg>${t}</svg>`:t;const a=Oh.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function a0(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function c0(t,e,n){const r=t.style,s=Ve(n);if(n&&!s){for(const i in n)Mc(r,i,n[i]);if(e&&!Ve(e))for(const i in e)n[i]==null&&Mc(r,i,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const Ph=/\s*!important$/;function Mc(t,e,n){if(G(n))n.forEach(r=>Mc(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=u0(t,e);Ph.test(n)?t.setProperty(gr(r),n.replace(Ph,""),"important"):t[r]=n}}const Mh=["Webkit","Moz","ms"],qa={};function u0(t,e){const n=qa[e];if(n)return n;let r=Yt(e);if(r!=="filter"&&r in t)return qa[e]=r;r=zo(r);for(let s=0;s<Mh.length;s++){const i=Mh[s]+r;if(i in t)return qa[e]=i}return e}const Lh="http://www.w3.org/1999/xlink";function l0(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Lh,e.slice(6,e.length)):t.setAttributeNS(Lh,e,n);else{const i=l_(e);n==null||i&&!tp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function h0(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=tp(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[ag,f0]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=()=>performance.now());const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let Lc=0;const d0=Promise.resolve(),p0=()=>{Lc=0},g0=()=>Lc||(d0.then(p0),Lc=ag());function kr(t,e,n,r){t.addEventListener(e,n,r)}function m0(t,e,n,r){t.removeEventListener(e,n,r)}function y0(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=v0(e);if(r){const u=i[e]=_0(r,s);kr(t,a,u,c)}else o&&(m0(t,a,o,c),i[e]=void 0)}}const Fh=/(?:Once|Passive|Capture)$/;function v0(t){let e;if(Fh.test(t)){e={};let n;for(;n=t.match(Fh);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[gr(t.slice(2)),e]}function _0(t,e){const n=r=>{const s=r.timeStamp||ag();(f0||s>=n.attached-1)&&Ot(w0(r,n.value),e,5,[r])};return n.value=t,n.attached=g0(),n}function w0(t,e){if(G(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Uh=/^on[a-z]/,E0=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?a0(t,r,s):e==="style"?c0(t,n,r):Vo(e)?Tu(e)||y0(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):b0(t,e,r,s))?h0(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),l0(t,e,r,s))};function b0(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Uh.test(e)&&te(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Uh.test(e)&&Ve(n)?!1:e in t}const wn="transition",vs="animation",qs=(t,{slots:e})=>ta(Bp,I0(t),e);qs.displayName="Transition";const cg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};qs.props=nt({},Bp.props,cg);const zn=(t,e=[])=>{G(t)?t.forEach(n=>n(...e)):t&&t(...e)},Bh=t=>t?G(t)?t.some(e=>e.length>1):t.length>1:!1;function I0(t){const e={};for(const B in t)B in cg||(e[B]=t[B]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:u=o,appearToClass:l=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:d=`${n}-leave-to`}=t,g=T0(s),v=g&&g[0],_=g&&g[1],{onBeforeEnter:T,onEnter:O,onEnterCancelled:j,onLeave:F,onLeaveCancelled:Q,onBeforeAppear:P=T,onAppear:N=O,onAppearCancelled:pe=j}=e,ie=(B,ye,ve)=>{br(B,ye?l:a),br(B,ye?u:o),ve&&ve()},De=(B,ye)=>{br(B,d),br(B,f),ye&&ye()},Le=B=>(ye,ve)=>{const nn=B?N:O,Me=()=>ie(ye,B,ve);zn(nn,[ye,Me]),Vh(()=>{br(ye,B?c:i),En(ye,B?l:a),Bh(nn)||$h(ye,r,v,Me)})};return nt(e,{onBeforeEnter(B){zn(T,[B]),En(B,i),En(B,o)},onBeforeAppear(B){zn(P,[B]),En(B,c),En(B,u)},onEnter:Le(!1),onAppear:Le(!0),onLeave(B,ye){const ve=()=>De(B,ye);En(B,h),C0(),En(B,f),Vh(()=>{br(B,h),En(B,d),Bh(F)||$h(B,r,_,ve)}),zn(F,[B,ve])},onEnterCancelled(B){ie(B,!1),zn(j,[B])},onAppearCancelled(B){ie(B,!0),zn(pe,[B])},onLeaveCancelled(B){De(B),zn(Q,[B])}})}function T0(t){if(t==null)return null;if($e(t))return[Ka(t.enter),Ka(t.leave)];{const e=Ka(t);return[e,e]}}function Ka(t){return eo(t)}function En(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function br(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Vh(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let A0=0;function $h(t,e,n,r){const s=t._endId=++A0,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=S0(t,e);if(!o)return r();const u=o+"end";let l=0;const h=()=>{t.removeEventListener(u,f),i()},f=d=>{d.target===t&&++l>=c&&h()};setTimeout(()=>{l<c&&h()},a+1),t.addEventListener(u,f)}function S0(t,e){const n=window.getComputedStyle(t),r=g=>(n[g]||"").split(", "),s=r(wn+"Delay"),i=r(wn+"Duration"),o=jh(s,i),a=r(vs+"Delay"),c=r(vs+"Duration"),u=jh(a,c);let l=null,h=0,f=0;e===wn?o>0&&(l=wn,h=o,f=i.length):e===vs?u>0&&(l=vs,h=u,f=c.length):(h=Math.max(o,u),l=h>0?o>u?wn:vs:null,f=l?l===wn?i.length:c.length:0);const d=l===wn&&/\b(transform|all)(,|$)/.test(n[wn+"Property"]);return{type:l,timeout:h,propCount:f,hasTransform:d}}function jh(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>zh(n)+zh(t[r])))}function zh(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function C0(){return document.body.offsetHeight}const Hh=t=>{const e=t.props["onUpdate:modelValue"];return G(e)?n=>zi(e,n):e};function k0(t){t.target.composing=!0}function qh(t){const e=t.target;e.composing&&(e.composing=!1,D0(e,"input"))}function D0(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const ug={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Hh(s);const i=r||s.props&&s.props.type==="number";kr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n?a=a.trim():i&&(a=eo(a)),t._assign(a)}),n&&kr(t,"change",()=>{t.value=t.value.trim()}),e||(kr(t,"compositionstart",k0),kr(t,"compositionend",qh),kr(t,"change",qh))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Hh(i),t.composing||document.activeElement===t&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&eo(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},R0=["ctrl","shift","alt","meta"],N0={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>R0.some(n=>t[`${n}Key`]&&!e.includes(n))},qu=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=N0[e[s]];if(i&&i(n,e))return}return t(n,...r)},x0={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},lg=(t,e)=>n=>{if(!("key"in n))return;const r=gr(n.key);if(e.some(s=>s===r||x0[s]===r))return t(n)},hg={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):_s(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),_s(t,!0),r.enter(t)):r.leave(t,()=>{_s(t,!1)}):_s(t,e))},beforeUnmount(t,{value:e}){_s(t,e)}};function _s(t,e){t.style.display=e?t._vod:"none"}const O0=nt({patchProp:E0},o0);let Kh;function P0(){return Kh||(Kh=Uw(O0))}const M0=(...t)=>{const e=P0().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=L0(r);if(!s)return;const i=e._component;!te(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function L0(t){return Ve(t)?document.querySelector(t):t}/*!
  * vue-router v4.0.14
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const fg=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",as=t=>fg?Symbol(t):"_vr_"+t,F0=as("rvlm"),Wh=as("rvd"),na=as("r"),Ku=as("rl"),Fc=as("rvl"),Dr=typeof window!="undefined";function U0(t){return t.__esModule||fg&&t[Symbol.toStringTag]==="Module"}const be=Object.assign;function Wa(t,e){const n={};for(const r in e){const s=e[r];n[r]=Array.isArray(s)?s.map(t):t(s)}return n}const Rs=()=>{},B0=/\/$/,V0=t=>t.replace(B0,"");function Ga(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(r=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=H0(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function $0(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Gh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function j0(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&zr(e.matched[r],n.matched[s])&&dg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function zr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function dg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!z0(t[n],e[n]))return!1;return!0}function z0(t,e){return Array.isArray(t)?Xh(t,e):Array.isArray(e)?Xh(e,t):t===e}function Xh(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function H0(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],!(s===1||o==="."))if(o==="..")s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var Ks;(function(t){t.pop="pop",t.push="push"})(Ks||(Ks={}));var Ns;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ns||(Ns={}));function q0(t){if(!t)if(Dr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),V0(t)}const K0=/^[^#]+#/;function W0(t,e){return t.replace(K0,"#")+e}function G0(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const ra=()=>({left:window.pageXOffset,top:window.pageYOffset});function X0(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=G0(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Qh(t,e){return(history.state?history.state.position-e:-1)+t}const Uc=new Map;function Q0(t,e){Uc.set(t,e)}function Y0(t){const e=Uc.get(t);return Uc.delete(t),e}let Z0=()=>location.protocol+"//"+location.host;function pg(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Gh(c,"")}return Gh(n,t)+r+s}function J0(t,e,n,r){let s=[],i=[],o=null;const a=({state:f})=>{const d=pg(t,location),g=n.value,v=e.value;let _=0;if(f){if(n.value=d,e.value=f,o&&o===g){o=null;return}_=v?f.position-v.position:0}else r(d);s.forEach(T=>{T(n.value,g,{delta:_,type:Ks.pop,direction:_?_>0?Ns.forward:Ns.back:Ns.unknown})})};function c(){o=n.value}function u(f){s.push(f);const d=()=>{const g=s.indexOf(f);g>-1&&s.splice(g,1)};return i.push(d),d}function l(){const{history:f}=window;!f.state||f.replaceState(be({},f.state,{scroll:ra()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:h}}function Yh(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?ra():null}}function eE(t){const{history:e,location:n}=window,r={value:pg(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,l){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:Z0()+t+c;try{e[l?"replaceState":"pushState"](u,"",f),s.value=u}catch(d){console.error(d),n[l?"replace":"assign"](f)}}function o(c,u){const l=be({},e.state,Yh(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,l,!0),r.value=c}function a(c,u){const l=be({},s.value,e.state,{forward:c,scroll:ra()});i(l.current,l,!0);const h=be({},Yh(r.value,c,null),{position:l.position+1},u);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function tE(t){t=q0(t);const e=eE(t),n=J0(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=be({location:"",base:t,go:r,createHref:W0.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function nE(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),tE(t)}function rE(t){return typeof t=="string"||t&&typeof t=="object"}function gg(t){return typeof t=="string"||typeof t=="symbol"}const bn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},mg=as("nf");var Zh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Zh||(Zh={}));function Hr(t,e){return be(new Error,{type:t,[mg]:!0},e)}function In(t,e){return t instanceof Error&&mg in t&&(e==null||!!(t.type&e))}const Jh="[^/]+?",sE={sensitive:!1,strict:!1,start:!0,end:!0},iE=/[.+*?^${}()[\]/\\]/g;function oE(t,e){const n=be({},sE,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const l=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let h=0;h<u.length;h++){const f=u[h];let d=40+(n.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(iE,"\\$&"),d+=40;else if(f.type===1){const{value:g,repeatable:v,optional:_,regexp:T}=f;i.push({name:g,repeatable:v,optional:_});const O=T||Jh;if(O!==Jh){d+=10;try{new RegExp(`(${O})`)}catch(F){throw new Error(`Invalid custom RegExp for param "${g}" (${O}): `+F.message)}}let j=v?`((?:${O})(?:/(?:${O}))*)`:`(${O})`;h||(j=_&&u.length<2?`(?:/${j})`:"/"+j),_&&(j+="?"),s+=j,d+=20,_&&(d+=-8),v&&(d+=-20),O===".*"&&(d+=-50)}l.push(d)}r.push(l)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const l=u.match(o),h={};if(!l)return null;for(let f=1;f<l.length;f++){const d=l[f]||"",g=i[f-1];h[g.name]=d&&g.repeatable?d.split("/"):d}return h}function c(u){let l="",h=!1;for(const f of t){(!h||!l.endsWith("/"))&&(l+="/"),h=!1;for(const d of f)if(d.type===0)l+=d.value;else if(d.type===1){const{value:g,repeatable:v,optional:_}=d,T=g in u?u[g]:"";if(Array.isArray(T)&&!v)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const O=Array.isArray(T)?T.join("/"):T;if(!O)if(_)f.length<2&&(l.endsWith("/")?l=l.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);l+=O}}return l}return{re:o,score:r,keys:i,parse:a,stringify:c}}function aE(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function cE(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=aE(r[n],s[n]);if(i)return i;n++}return s.length-r.length}const uE={type:0,value:""},lE=/[a-zA-Z0-9_]/;function hE(t){if(!t)return[[]];if(t==="/")return[[uE]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(d){throw new Error(`ERR (${n})/"${u}": ${d}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,u="",l="";function h(){!u||(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function f(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:c==="("?n=2:lE.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:n=3:l+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),s}function fE(t,e,n){const r=oE(hE(t.path),n),s=be(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function dE(t,e){const n=[],r=new Map;e=tf({strict:!1,end:!0,sensitive:!1},e);function s(l){return r.get(l)}function i(l,h,f){const d=!f,g=gE(l);g.aliasOf=f&&f.record;const v=tf(e,l),_=[g];if("alias"in l){const j=typeof l.alias=="string"?[l.alias]:l.alias;for(const F of j)_.push(be({},g,{components:f?f.record.components:g.components,path:F,aliasOf:f?f.record:g}))}let T,O;for(const j of _){const{path:F}=j;if(h&&F[0]!=="/"){const Q=h.record.path,P=Q[Q.length-1]==="/"?"":"/";j.path=h.record.path+(F&&P+F)}if(T=fE(j,h,v),f?f.alias.push(T):(O=O||T,O!==T&&O.alias.push(T),d&&l.name&&!ef(T)&&o(l.name)),"children"in g){const Q=g.children;for(let P=0;P<Q.length;P++)i(Q[P],T,f&&f.children[P])}f=f||T,c(T)}return O?()=>{o(O)}:Rs}function o(l){if(gg(l)){const h=r.get(l);h&&(r.delete(l),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(l);h>-1&&(n.splice(h,1),l.record.name&&r.delete(l.record.name),l.children.forEach(o),l.alias.forEach(o))}}function a(){return n}function c(l){let h=0;for(;h<n.length&&cE(l,n[h])>=0&&(l.record.path!==n[h].record.path||!yg(l,n[h]));)h++;n.splice(h,0,l),l.record.name&&!ef(l)&&r.set(l.record.name,l)}function u(l,h){let f,d={},g,v;if("name"in l&&l.name){if(f=r.get(l.name),!f)throw Hr(1,{location:l});v=f.record.name,d=be(pE(h.params,f.keys.filter(O=>!O.optional).map(O=>O.name)),l.params),g=f.stringify(d)}else if("path"in l)g=l.path,f=n.find(O=>O.re.test(g)),f&&(d=f.parse(g),v=f.record.name);else{if(f=h.name?r.get(h.name):n.find(O=>O.re.test(h.path)),!f)throw Hr(1,{location:l,currentLocation:h});v=f.record.name,d=be({},h.params,l.params),g=f.stringify(d)}const _=[];let T=f;for(;T;)_.unshift(T.record),T=T.parent;return{name:v,path:g,params:d,matched:_,meta:yE(_)}}return t.forEach(l=>i(l)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function pE(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function gE(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:mE(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function mE(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function ef(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function yE(t){return t.reduce((e,n)=>be(e,n.meta),{})}function tf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function yg(t,e){return e.children.some(n=>n===t||yg(t,n))}const vg=/#/g,vE=/&/g,_E=/\//g,wE=/=/g,EE=/\?/g,_g=/\+/g,bE=/%5B/g,IE=/%5D/g,wg=/%5E/g,TE=/%60/g,Eg=/%7B/g,AE=/%7C/g,bg=/%7D/g,SE=/%20/g;function Wu(t){return encodeURI(""+t).replace(AE,"|").replace(bE,"[").replace(IE,"]")}function CE(t){return Wu(t).replace(Eg,"{").replace(bg,"}").replace(wg,"^")}function Bc(t){return Wu(t).replace(_g,"%2B").replace(SE,"+").replace(vg,"%23").replace(vE,"%26").replace(TE,"`").replace(Eg,"{").replace(bg,"}").replace(wg,"^")}function kE(t){return Bc(t).replace(wE,"%3D")}function DE(t){return Wu(t).replace(vg,"%23").replace(EE,"%3F")}function RE(t){return t==null?"":DE(t).replace(_E,"%2F")}function co(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function NE(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(_g," "),o=i.indexOf("="),a=co(o<0?i:i.slice(0,o)),c=o<0?null:co(i.slice(o+1));if(a in e){let u=e[a];Array.isArray(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function nf(t){let e="";for(let n in t){const r=t[n];if(n=kE(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(r)?r.map(i=>i&&Bc(i)):[r&&Bc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function xE(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Array.isArray(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}function ws(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Cn(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Hr(4,{from:n,to:e})):h instanceof Error?a(h):rE(h)?a(Hr(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},u=t.call(r&&r.instances[s],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch(h=>a(h))})}function Xa(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(OE(a)){const u=(a.__vccOpts||a)[e];u&&s.push(Cn(u,n,r,i,o))}else{let c=a();s.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const l=U0(u)?u.default:u;i.components[o]=l;const f=(l.__vccOpts||l)[e];return f&&Cn(f,n,r,i,o)()}))}}return s}function OE(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function rf(t){const e=Tt(na),n=Tt(Ku),r=me(()=>e.resolve(he(t.to))),s=me(()=>{const{matched:c}=r.value,{length:u}=c,l=c[u-1],h=n.matched;if(!l||!h.length)return-1;const f=h.findIndex(zr.bind(null,l));if(f>-1)return f;const d=sf(c[u-2]);return u>1&&sf(l)===d&&h[h.length-1].path!==d?h.findIndex(zr.bind(null,c[u-2])):f}),i=me(()=>s.value>-1&&FE(n.params,r.value.params)),o=me(()=>s.value>-1&&s.value===n.matched.length-1&&dg(n.params,r.value.params));function a(c={}){return LE(c)?e[he(t.replace)?"replace":"push"](he(t.to)).catch(Rs):Promise.resolve()}return{route:r,href:me(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const PE=lt({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:rf,setup(t,{slots:e}){const n=is(rf(t)),{options:r}=Tt(na),s=me(()=>({[of(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[of(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:ta("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),ME=PE;function LE(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function FE(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Array.isArray(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function sf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const of=(t,e,n)=>t!=null?t:e!=null?e:n,UE=lt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const r=Tt(Fc),s=me(()=>t.route||r.value),i=Tt(Wh,0),o=me(()=>s.value.matched[i]);Pr(Wh,i+1),Pr(F0,o),Pr(Fc,s);const a=Te();return Mt(()=>[a.value,o.value,t.name],([c,u,l],[h,f,d])=>{u&&(u.instances[l]=c,f&&f!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),c&&u&&(!f||!zr(u,f)||!h)&&(u.enterCallbacks[l]||[]).forEach(g=>g(c))},{flush:"post"}),()=>{const c=s.value,u=o.value,l=u&&u.components[t.name],h=t.name;if(!l)return af(n.default,{Component:l,route:c});const f=u.props[t.name],d=f?f===!0?c.params:typeof f=="function"?f(c):f:null,v=ta(l,be({},d,e,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(u.instances[h]=null)},ref:a}));return af(n.default,{Component:v,route:c})||v}}});function af(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const BE=UE;function VE(t){const e=dE(t.routes,t),n=t.parseQuery||NE,r=t.stringifyQuery||nf,s=t.history,i=ws(),o=ws(),a=ws(),c=Ap(bn);let u=bn;Dr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=Wa.bind(null,w=>""+w),h=Wa.bind(null,RE),f=Wa.bind(null,co);function d(w,U){let R,$;return gg(w)?(R=e.getRecordMatcher(w),$=U):$=w,e.addRoute($,R)}function g(w){const U=e.getRecordMatcher(w);U&&e.removeRoute(U)}function v(){return e.getRoutes().map(w=>w.record)}function _(w){return!!e.getRecordMatcher(w)}function T(w,U){if(U=be({},U||c.value),typeof w=="string"){const ne=Ga(n,w,U.path),p=e.resolve({path:ne.path},U),m=s.createHref(ne.fullPath);return be(ne,p,{params:f(p.params),hash:co(ne.hash),redirectedFrom:void 0,href:m})}let R;if("path"in w)R=be({},w,{path:Ga(n,w.path,U.path).path});else{const ne=be({},w.params);for(const p in ne)ne[p]==null&&delete ne[p];R=be({},w,{params:h(w.params)}),U.params=h(U.params)}const $=e.resolve(R,U),we=w.hash||"";$.params=l(f($.params));const Se=$0(r,be({},w,{hash:CE(we),path:$.path})),se=s.createHref(Se);return be({fullPath:Se,hash:we,query:r===nf?xE(w.query):w.query||{}},$,{redirectedFrom:void 0,href:se})}function O(w){return typeof w=="string"?Ga(n,w,c.value.path):be({},w)}function j(w,U){if(u!==w)return Hr(8,{from:U,to:w})}function F(w){return N(w)}function Q(w){return F(be(O(w),{replace:!0}))}function P(w){const U=w.matched[w.matched.length-1];if(U&&U.redirect){const{redirect:R}=U;let $=typeof R=="function"?R(w):R;return typeof $=="string"&&($=$.includes("?")||$.includes("#")?$=O($):{path:$},$.params={}),be({query:w.query,hash:w.hash,params:w.params},$)}}function N(w,U){const R=u=T(w),$=c.value,we=w.state,Se=w.force,se=w.replace===!0,ne=P(R);if(ne)return N(be(O(ne),{state:we,force:Se,replace:se}),U||R);const p=R;p.redirectedFrom=U;let m;return!Se&&j0(r,$,R)&&(m=Hr(16,{to:p,from:$}),wr($,$,!0,!1)),(m?Promise.resolve(m):ie(p,$)).catch(y=>In(y)?In(y,2)?y:_t(y):Ae(y,p,$)).then(y=>{if(y){if(In(y,2))return N(be(O(y.to),{state:we,force:Se,replace:se}),U||p)}else y=Le(p,$,!0,se,we);return De(p,$,y),y})}function pe(w,U){const R=j(w,U);return R?Promise.reject(R):Promise.resolve()}function ie(w,U){let R;const[$,we,Se]=$E(w,U);R=Xa($.reverse(),"beforeRouteLeave",w,U);for(const ne of $)ne.leaveGuards.forEach(p=>{R.push(Cn(p,w,U))});const se=pe.bind(null,w,U);return R.push(se),Ir(R).then(()=>{R=[];for(const ne of i.list())R.push(Cn(ne,w,U));return R.push(se),Ir(R)}).then(()=>{R=Xa(we,"beforeRouteUpdate",w,U);for(const ne of we)ne.updateGuards.forEach(p=>{R.push(Cn(p,w,U))});return R.push(se),Ir(R)}).then(()=>{R=[];for(const ne of w.matched)if(ne.beforeEnter&&!U.matched.includes(ne))if(Array.isArray(ne.beforeEnter))for(const p of ne.beforeEnter)R.push(Cn(p,w,U));else R.push(Cn(ne.beforeEnter,w,U));return R.push(se),Ir(R)}).then(()=>(w.matched.forEach(ne=>ne.enterCallbacks={}),R=Xa(Se,"beforeRouteEnter",w,U),R.push(se),Ir(R))).then(()=>{R=[];for(const ne of o.list())R.push(Cn(ne,w,U));return R.push(se),Ir(R)}).catch(ne=>In(ne,8)?ne:Promise.reject(ne))}function De(w,U,R){for(const $ of a.list())$(w,U,R)}function Le(w,U,R,$,we){const Se=j(w,U);if(Se)return Se;const se=U===bn,ne=Dr?history.state:{};R&&($||se?s.replace(w.fullPath,be({scroll:se&&ne&&ne.scroll},we)):s.push(w.fullPath,we)),c.value=w,wr(w,U,R,se),_t()}let B;function ye(){B=s.listen((w,U,R)=>{const $=T(w),we=P($);if(we){N(be(we,{replace:!0}),$).catch(Rs);return}u=$;const Se=c.value;Dr&&Q0(Qh(Se.fullPath,R.delta),ra()),ie($,Se).catch(se=>In(se,12)?se:In(se,2)?(N(se.to,$).then(ne=>{In(ne,20)&&!R.delta&&R.type===Ks.pop&&s.go(-1,!1)}).catch(Rs),Promise.reject()):(R.delta&&s.go(-R.delta,!1),Ae(se,$,Se))).then(se=>{se=se||Le($,Se,!1),se&&(R.delta?s.go(-R.delta,!1):R.type===Ks.pop&&In(se,20)&&s.go(-1,!1)),De($,Se,se)}).catch(Rs)})}let ve=ws(),nn=ws(),Me;function Ae(w,U,R){_t(w);const $=nn.list();return $.length?$.forEach(we=>we(w,U,R)):console.error(w),Promise.reject(w)}function _e(){return Me&&c.value!==bn?Promise.resolve():new Promise((w,U)=>{ve.add([w,U])})}function _t(w){return Me||(Me=!w,ye(),ve.list().forEach(([U,R])=>w?R(w):U()),ve.reset()),w}function wr(w,U,R,$){const{scrollBehavior:we}=t;if(!Dr||!we)return Promise.resolve();const Se=!R&&Y0(Qh(w.fullPath,0))||($||!R)&&history.state&&history.state.scroll||null;return Pt().then(()=>we(w,U,Se)).then(se=>se&&X0(se)).catch(se=>Ae(se,w,U))}const rn=w=>s.go(w);let Ht;const Nt=new Set;return{currentRoute:c,addRoute:d,removeRoute:g,hasRoute:_,getRoutes:v,resolve:T,options:t,push:F,replace:Q,go:rn,back:()=>rn(-1),forward:()=>rn(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:nn.add,isReady:_e,install(w){const U=this;w.component("RouterLink",ME),w.component("RouterView",BE),w.config.globalProperties.$router=U,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>he(c)}),Dr&&!Ht&&c.value===bn&&(Ht=!0,F(s.location).catch(we=>{}));const R={};for(const we in bn)R[we]=me(()=>c.value[we]);w.provide(na,U),w.provide(Ku,is(R)),w.provide(Fc,c);const $=w.unmount;Nt.add(w),w.unmount=function(){Nt.delete(w),Nt.size<1&&(u=bn,B&&B(),c.value=bn,Ht=!1,Me=!1),$()}}}}function Ir(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function $E(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>zr(u,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>zr(u,c))||s.push(c))}return[n,r,s]}function Ig(){return Tt(na)}function jE(){return Tt(Ku)}var tn=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n};const zE={},HE={class:"container mx-auto"};function qE(t,e){const n=Vu("router-view");return ae(),ze("div",HE,[W(n)])}var KE=tn(zE,[["render",qE]]),WE="/daftdoris.svg";function Tg(t){return b_()?(I_(t),!0):!1}const Ag=typeof window!="undefined",GE=t=>typeof t=="string",Qa=()=>{};function XE(t,e){function n(...r){t(()=>e.apply(this,r),{fn:e,thisArg:this,args:r})}return n}const Sg=t=>t();function QE(t=Sg){const e=Te(!0);function n(){e.value=!1}function r(){e.value=!0}return{isActive:e,pause:n,resume:r,eventFilter:(...i)=>{e.value&&t(...i)}}}function YE(t,e=!0){os()?zp(t):e?t():Pt(t)}function ZE(t,e=!0){os()?$r(t):e?t():Pt(t)}function JE(t=!1){if(Ce(t))return e=>(t.value=typeof e=="boolean"?e:!t.value,t.value);{const e=Te(t);return[e,r=>(e.value=typeof r=="boolean"?r:!e.value,e.value)]}}var cf=Object.getOwnPropertySymbols,eb=Object.prototype.hasOwnProperty,tb=Object.prototype.propertyIsEnumerable,nb=(t,e)=>{var n={};for(var r in t)eb.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&cf)for(var r of cf(t))e.indexOf(r)<0&&tb.call(t,r)&&(n[r]=t[r]);return n};function rb(t,e,n={}){const r=n,{eventFilter:s=Sg}=r,i=nb(r,["eventFilter"]);return Mt(t,XE(s,e),i)}var sb=Object.defineProperty,ib=Object.defineProperties,ob=Object.getOwnPropertyDescriptors,uo=Object.getOwnPropertySymbols,Cg=Object.prototype.hasOwnProperty,kg=Object.prototype.propertyIsEnumerable,uf=(t,e,n)=>e in t?sb(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,ab=(t,e)=>{for(var n in e||(e={}))Cg.call(e,n)&&uf(t,n,e[n]);if(uo)for(var n of uo(e))kg.call(e,n)&&uf(t,n,e[n]);return t},cb=(t,e)=>ib(t,ob(e)),ub=(t,e)=>{var n={};for(var r in t)Cg.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&uo)for(var r of uo(t))e.indexOf(r)<0&&kg.call(t,r)&&(n[r]=t[r]);return n};function lb(t,e,n={}){const r=n,{eventFilter:s}=r,i=ub(r,["eventFilter"]),{eventFilter:o,pause:a,resume:c,isActive:u}=QE(s);return{stop:rb(t,e,cb(ab({},i),{eventFilter:o})),pause:a,resume:c,isActive:u}}function hb(t){var e;const n=he(t);return(e=n==null?void 0:n.$el)!=null?e:n}const qr=Ag?window:void 0;function fb(...t){let e,n,r,s;if(GE(t[0])?([n,r,s]=t,e=qr):[e,n,r,s]=t,!e)return Qa;let i=Qa;const o=Mt(()=>hb(e),c=>{i(),c&&(c.addEventListener(n,r,s),i=()=>{c.removeEventListener(n,r,s),i=Qa})},{immediate:!0,flush:"post"}),a=()=>{o(),i()};return Tg(a),a}function db(t,e={}){const{window:n=qr}=e;let r;const s=Te(!1),i=()=>{!n||(r||(r=n.matchMedia(t)),s.value=r.matches)};return YE(()=>{i(),r&&("addEventListener"in r?r.addEventListener("change",i):r.addListener(i),Tg(()=>{"removeEventListener"in r?r.removeEventListener("change",i):r.removeListener(i)}))}),s}const Vc=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},$c="__vueuse_ssr_handlers__";Vc[$c]=Vc[$c]||{};const pb=Vc[$c];function Dg(t,e){return pb[t]||e}function gb(t){return t==null?"any":t instanceof Set?"set":t instanceof Map?"map":t instanceof Date?"date":typeof t=="boolean"?"boolean":typeof t=="string"?"string":typeof t=="object"||Array.isArray(t)?"object":Number.isNaN(t)?"any":"number"}const mb={boolean:{read:t=>t==="true",write:t=>String(t)},object:{read:t=>JSON.parse(t),write:t=>JSON.stringify(t)},number:{read:t=>Number.parseFloat(t),write:t=>String(t)},any:{read:t=>t,write:t=>String(t)},string:{read:t=>t,write:t=>String(t)},map:{read:t=>new Map(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t.entries()))},set:{read:t=>new Set(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t))},date:{read:t=>new Date(t),write:t=>t.toISOString()}};function yb(t,e,n,r={}){var s;const{flush:i="pre",deep:o=!0,listenToStorageChanges:a=!0,writeDefaults:c=!0,shallow:u,window:l=qr,eventFilter:h,onError:f=P=>{console.error(P)}}=r,d=(u?Ap:Te)(e);if(!n)try{n=Dg("getDefaultStorage",()=>{var P;return(P=qr)==null?void 0:P.localStorage})()}catch(P){f(P)}if(!n)return d;const g=he(e),v=gb(g),_=(s=r.serializer)!=null?s:mb[v],{pause:T,resume:O}=lb(d,()=>j(d.value),{flush:i,deep:o,eventFilter:h});return l&&a&&fb(l,"storage",Q),Q(),d;function j(P){try{P==null?n.removeItem(t):n.setItem(t,_.write(P))}catch(N){f(N)}}function F(P){if(!(P&&P.key!==t)){T();try{const N=P?P.newValue:n.getItem(t);return N==null?(c&&g!==null&&n.setItem(t,_.write(g)),g):typeof N!="string"?N:_.read(N)}catch(N){f(N)}finally{O()}}}function Q(P){P&&P.key!==t||(d.value=F(P))}}function Rg(t){return db("(prefers-color-scheme: dark)",t)}var vb=Object.defineProperty,lf=Object.getOwnPropertySymbols,_b=Object.prototype.hasOwnProperty,wb=Object.prototype.propertyIsEnumerable,hf=(t,e,n)=>e in t?vb(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Eb=(t,e)=>{for(var n in e||(e={}))_b.call(e,n)&&hf(t,n,e[n]);if(lf)for(var n of lf(e))wb.call(e,n)&&hf(t,n,e[n]);return t};function bb(t={}){const{selector:e="html",attribute:n="class",window:r=qr,storage:s,storageKey:i="vueuse-color-scheme",listenToStorageChanges:o=!0,storageRef:a}=t,c=Eb({auto:"",light:"light",dark:"dark"},t.modes||{}),u=Rg({window:r}),l=me(()=>u.value?"dark":"light"),h=a||(i==null?Te("auto"):yb(i,"auto",s,{window:r,listenToStorageChanges:o})),f=me({get(){return h.value==="auto"?l.value:h.value},set(_){h.value=_}}),d=Dg("updateHTMLAttrs",(_,T,O)=>{const j=r==null?void 0:r.document.querySelector(_);if(!!j)if(T==="class"){const F=O.split(/\s/g);Object.values(c).flatMap(Q=>(Q||"").split(/\s/g)).filter(Boolean).forEach(Q=>{F.includes(Q)?j.classList.add(Q):j.classList.remove(Q)})}else j.setAttribute(T,O)});function g(_){var T;d(e,n,(T=c[_])!=null?T:_)}function v(_){t.onChanged?t.onChanged(_,g):g(_)}return Mt(f,v,{flush:"post",immediate:!0}),ZE(()=>v(f.value)),f}var Ib=Object.defineProperty,Tb=Object.defineProperties,Ab=Object.getOwnPropertyDescriptors,ff=Object.getOwnPropertySymbols,Sb=Object.prototype.hasOwnProperty,Cb=Object.prototype.propertyIsEnumerable,df=(t,e,n)=>e in t?Ib(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,kb=(t,e)=>{for(var n in e||(e={}))Sb.call(e,n)&&df(t,n,e[n]);if(ff)for(var n of ff(e))Cb.call(e,n)&&df(t,n,e[n]);return t},Db=(t,e)=>Tb(t,Ab(e));function Rb(t={}){const{valueDark:e="dark",valueLight:n="",window:r=qr}=t,s=bb(Db(kb({},t),{onChanged:(a,c)=>{var u;t.onChanged?(u=t.onChanged)==null||u.call(t,a==="dark"):c(a)},modes:{dark:e,light:n}})),i=Rg({window:r});return me({get(){return s.value==="dark"},set(a){a===i.value?s.value="auto":s.value=a?"dark":"light"}})}var pf,gf;Ag&&(window==null?void 0:window.navigator)&&((pf=window==null?void 0:window.navigator)==null?void 0:pf.platform)&&/iP(ad|hone|od)/.test((gf=window==null?void 0:window.navigator)==null?void 0:gf.platform);function Ng(t,e,n,r={}){var s;const{passive:i=!1,eventName:o,deep:a=!1}=r,c=os(),u=n||(c==null?void 0:c.emit)||((s=c==null?void 0:c.$emit)==null?void 0:s.bind(c));let l=o;if(e||(e="modelValue"),l=o||l||`update:${e}`,i){const h=Te(t[e]);return Mt(()=>t[e],f=>h.value=f),Mt(h,f=>{(f!==t[e]||a)&&u(l,f)},{deep:a}),h}else return me({get(){return t[e]},set(h){u(l,h)}})}var Nb=!1;/*!
  * pinia v2.0.13
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let xg;const sa=t=>xg=t,Og=Symbol();function jc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var xs;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(xs||(xs={}));function xb(){const t=up(!0),e=t.run(()=>Te({}));let n=[],r=[];const s=Vr({install(i){sa(s),s._a=i,i.provide(Og,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!Nb?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Pg=()=>{};function mf(t,e,n,r=Pg){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&os()&&Yo(s),s}function Tr(t,...e){t.slice().forEach(n=>{n(...e)})}function zc(t,e){for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];jc(s)&&jc(r)&&t.hasOwnProperty(n)&&!Ce(r)&&!fn(r)?t[n]=zc(s,r):t[n]=r}return t}const Ob=Symbol();function Pb(t){return!jc(t)||!t.hasOwnProperty(Ob)}const{assign:sn}=Object;function Mb(t){return!!(Ce(t)&&t.effect)}function Lb(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function u(){a||(n.state.value[t]=s?s():{});const l=Z_(n.state.value[t]);return sn(l,i,Object.keys(o||{}).reduce((h,f)=>(h[f]=Vr(me(()=>{sa(n);const d=n._s.get(t);return o[f].call(d,d)})),h),{}))}return c=Mg(t,u,e,n),c.$reset=function(){const h=s?s():{};this.$patch(f=>{sn(f,h)})},c}function Mg(t,e,n={},r,s){let i;const o=n.state,a=sn({actions:{}},n),c={deep:!0};let u,l,h=Vr([]),f=Vr([]),d;const g=r.state.value[t];!o&&!g&&(r.state.value[t]={}),Te({});function v(P){let N;u=l=!1,typeof P=="function"?(P(r.state.value[t]),N={type:xs.patchFunction,storeId:t,events:d}):(zc(r.state.value[t],P),N={type:xs.patchObject,payload:P,storeId:t,events:d}),Pt().then(()=>{u=!0}),l=!0,Tr(h,N,r.state.value[t])}const _=Pg;function T(){i.stop(),h=[],f=[],r._s.delete(t)}function O(P,N){return function(){sa(r);const pe=Array.from(arguments),ie=[],De=[];function Le(ve){ie.push(ve)}function B(ve){De.push(ve)}Tr(f,{args:pe,name:P,store:F,after:Le,onError:B});let ye;try{ye=N.apply(this&&this.$id===t?this:F,pe)}catch(ve){throw Tr(De,ve),ve}return ye instanceof Promise?ye.then(ve=>(Tr(ie,ve),ve)).catch(ve=>(Tr(De,ve),Promise.reject(ve))):(Tr(ie,ye),ye)}}const j={_p:r,$id:t,$onAction:mf.bind(null,f),$patch:v,$reset:_,$subscribe(P,N={}){const pe=mf(h,P,N.detached,()=>ie()),ie=i.run(()=>Mt(()=>r.state.value[t],De=>{(N.flush==="sync"?l:u)&&P({storeId:t,type:xs.direct,events:d},De)},sn({},c,N)));return pe},$dispose:T},F=is(sn({},j));r._s.set(t,F);const Q=r._e.run(()=>(i=up(),i.run(()=>e())));for(const P in Q){const N=Q[P];if(Ce(N)&&!Mb(N)||fn(N))o||(g&&Pb(N)&&(Ce(N)?N.value=g[P]:zc(N,g[P])),r.state.value[t][P]=N);else if(typeof N=="function"){const pe=O(P,N);Q[P]=pe,a.actions[P]=N}}return sn(F,Q),sn(fe(F),Q),Object.defineProperty(F,"$state",{get:()=>r.state.value[t],set:P=>{v(N=>{sn(N,P)})}}),r._p.forEach(P=>{sn(F,i.run(()=>P({store:F,app:r._a,pinia:r,options:a})))}),g&&o&&n.hydrate&&n.hydrate(F.$state,g),u=!0,l=!0,F}function Gu(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,c){const u=os();return a=a||u&&Tt(Og),a&&sa(a),a=xg,a._s.has(r)||(i?Mg(r,e,s,a):Lb(r,s,a)),a._s.get(r)}return o.$id=r,o}function Lg(t){{t=fe(t);const e={};for(const n in t){const r=t[n];(Ce(r)||fn(r))&&(e[n]=kp(t,n))}return e}}/**
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
 */const Fg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Fb=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ug={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|u>>6,d=u&63;c||(d=64,o||(f=64)),r.push(n[l],n[h],n[f],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Fg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Fb(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||h==null)throw Error();const f=i<<2|a>>4;if(r.push(f),u!==64){const d=a<<4&240|u>>2;if(r.push(d),h!==64){const g=u<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Ub=function(t){const e=Fg(t);return Ug.encodeByteArray(e,!0)},Bg=function(t){return Ub(t).replace(/\./g,"")},Bb=function(t){try{return Ug.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */class Vb{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Ke(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Vg(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ke())}function Xu(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function $g(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $b(){return Ke().indexOf("Electron/")>=0}function jg(){const t=Ke();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function jb(){return Ke().indexOf("MSAppHost/")>=0}function zg(){return typeof indexedDB=="object"}function Hg(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function zb(){return!(typeof navigator=="undefined"||!navigator.cookieEnabled)}/**
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
 */const Hb="FirebaseError";class vn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Hb,Object.setPrototypeOf(this,vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,mr.prototype.create)}}class mr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?qb(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new vn(s,a,r)}}function qb(t,e){return t.replace(Kb,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Kb=/\{\$([^}]+)}/g;function Wb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ws(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(yf(i)&&yf(o)){if(!Ws(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function yf(t){return t!==null&&typeof t=="object"}/**
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
 */function hi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Gb(t,e){const n=new Xb(t,e);return n.subscribe.bind(n)}class Xb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Qb(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Ya),s.error===void 0&&(s.error=Ya),s.complete===void 0&&(s.complete=Ya);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Qb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ya(){}/**
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
 */const Yb=1e3,Zb=2,Jb=4*60*60*1e3,eI=.5;function vf(t,e=Yb,n=Zb){const r=e*Math.pow(n,t),s=Math.round(eI*r*(Math.random()-.5)*2);return Math.min(Jb,r+s)}/**
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
 */function Ts(t,e){return new Promise((n,r)=>{t.onsuccess=s=>{n(s.target.result)},t.onerror=s=>{var i;r(`${e}: ${(i=s.target.error)===null||i===void 0?void 0:i.message}`)}})}class _f{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,n="readonly"){return new qg(this._db.transaction.call(this._db,e,n))}createObjectStore(e,n){return new Kg(this._db.createObjectStore(e,n))}close(){this._db.close()}}class qg{constructor(e){this._transaction=e,this.complete=new Promise((n,r)=>{this._transaction.oncomplete=function(){n()},this._transaction.onerror=()=>{r(this._transaction.error)},this._transaction.onabort=()=>{r(this._transaction.error)}})}objectStore(e){return new Kg(this._transaction.objectStore(e))}}class Kg{constructor(e){this._store=e}index(e){return new wf(this._store.index(e))}createIndex(e,n,r){return new wf(this._store.createIndex(e,n,r))}get(e){const n=this._store.get(e);return Ts(n,"Error reading from IndexedDB")}put(e,n){const r=this._store.put(e,n);return Ts(r,"Error writing to IndexedDB")}delete(e){const n=this._store.delete(e);return Ts(n,"Error deleting from IndexedDB")}clear(){const e=this._store.clear();return Ts(e,"Error clearing IndexedDB object store")}}class wf{constructor(e){this._index=e}get(e){const n=this._index.get(e);return Ts(n,"Error reading from IndexedDB")}}function Wg(t,e,n){return new Promise((r,s)=>{try{const i=indexedDB.open(t,e);i.onsuccess=o=>{r(new _f(o.target.result))},i.onerror=o=>{var a;s(`Error opening indexedDB: ${(a=o.target.error)===null||a===void 0?void 0:a.message}`)},i.onupgradeneeded=o=>{n(new _f(i.result),o.oldVersion,o.newVersion,new qg(i.transaction))}}catch(i){s(`Error opening indexedDB: ${i.message}`)}})}class zt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class tI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Vb;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(rI(e))try{this.getOrInitializeService({instanceIdentifier:qn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=qn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qn){return this.instances.has(e)}getOptions(e=qn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:nI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=qn){return this.component?this.component.multipleInstances?e:qn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function nI(t){return t===qn?void 0:t}function rI(t){return t.instantiationMode==="EAGER"}/**
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
 */class sI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new tI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var de;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(de||(de={}));const iI={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},oI=de.INFO,aI={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},cI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=aI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ia{constructor(e){this.name=e,this._logLevel=oI,this._logHandler=cI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?iI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}/**
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
 */class uI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(lI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function lI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Hc="@firebase/app",Ef="0.7.21";/**
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
 */const Qu=new ia("@firebase/app"),hI="@firebase/app-compat",fI="@firebase/analytics-compat",dI="@firebase/analytics",pI="@firebase/app-check-compat",gI="@firebase/app-check",mI="@firebase/auth",yI="@firebase/auth-compat",vI="@firebase/database",_I="@firebase/database-compat",wI="@firebase/functions",EI="@firebase/functions-compat",bI="@firebase/installations",II="@firebase/installations-compat",TI="@firebase/messaging",AI="@firebase/messaging-compat",SI="@firebase/performance",CI="@firebase/performance-compat",kI="@firebase/remote-config",DI="@firebase/remote-config-compat",RI="@firebase/storage",NI="@firebase/storage-compat",xI="@firebase/firestore",OI="@firebase/firestore-compat",PI="firebase",MI="9.6.11";/**
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
 */const Gg="[DEFAULT]",LI={[Hc]:"fire-core",[hI]:"fire-core-compat",[dI]:"fire-analytics",[fI]:"fire-analytics-compat",[gI]:"fire-app-check",[pI]:"fire-app-check-compat",[mI]:"fire-auth",[yI]:"fire-auth-compat",[vI]:"fire-rtdb",[_I]:"fire-rtdb-compat",[wI]:"fire-fn",[EI]:"fire-fn-compat",[bI]:"fire-iid",[II]:"fire-iid-compat",[TI]:"fire-fcm",[AI]:"fire-fcm-compat",[SI]:"fire-perf",[CI]:"fire-perf-compat",[kI]:"fire-rc",[DI]:"fire-rc-compat",[RI]:"fire-gcs",[NI]:"fire-gcs-compat",[xI]:"fire-fst",[OI]:"fire-fst-compat","fire-js":"fire-js",[PI]:"fire-js-all"};/**
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
 */const lo=new Map,qc=new Map;function FI(t,e){try{t.container.addComponent(e)}catch(n){Qu.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Zt(t){const e=t.name;if(qc.has(e))return Qu.debug(`There were multiple attempts to register component ${e}.`),!1;qc.set(e,t);for(const n of lo.values())FI(n,t);return!0}function yr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const UI={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},ir=new mr("app","Firebase",UI);/**
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
 */class BI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new zt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ir.create("app-deleted",{appName:this._name})}}/**
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
 */const fi=MI;function VI(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Gg,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw ir.create("bad-app-name",{appName:String(r)});const s=lo.get(r);if(s){if(Ws(t,s.options)&&Ws(n,s.config))return s;throw ir.create("duplicate-app",{appName:r})}const i=new sI(r);for(const a of qc.values())i.addComponent(a);const o=new BI(t,n,i);return lo.set(r,o),o}function Yu(t=Gg){const e=lo.get(t);if(!e)throw ir.create("no-app",{appName:t});return e}function Ft(t,e,n){var r;let s=(r=LI[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Qu.warn(a.join(" "));return}Zt(new zt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const $I="firebase-heartbeat-database",jI=1,Gs="firebase-heartbeat-store";let Za=null;function Xg(){return Za||(Za=Wg($I,jI,(t,e)=>{switch(e){case 0:t.createObjectStore(Gs)}}).catch(t=>{throw ir.create("storage-open",{originalErrorMessage:t.message})})),Za}async function zI(t){try{return(await Xg()).transaction(Gs).objectStore(Gs).get(Qg(t))}catch(e){throw ir.create("storage-get",{originalErrorMessage:e.message})}}async function bf(t,e){try{const r=(await Xg()).transaction(Gs,"readwrite");return await r.objectStore(Gs).put(e,Qg(t)),r.complete}catch(n){throw ir.create("storage-set",{originalErrorMessage:n.message})}}function Qg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const HI=1024,qI=30*24*60*60*1e3;class KI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new GI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=If();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=qI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=If(),{heartbeatsToSend:n,unsentEntries:r}=WI(this._heartbeatsCache.heartbeats),s=Bg(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function If(){return new Date().toISOString().substring(0,10)}function WI(t,e=HI){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Tf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Tf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class GI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zg()?Hg().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await zI(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return bf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return bf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Tf(t){return Bg(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function XI(t){Zt(new zt("platform-logger",e=>new uI(e),"PRIVATE")),Zt(new zt("heartbeat",e=>new KI(e),"PRIVATE")),Ft(Hc,Ef,t),Ft(Hc,Ef,"esm2017"),Ft("fire-js","")}XI("");function Zu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Yg(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const QI=Yg,Zg=new mr("auth","Firebase",Yg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Af=new ia("@firebase/auth");function qi(t,...e){Af.logLevel<=de.ERROR&&Af.error(`Auth (${fi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(t,...e){throw Ju(t,...e)}function Xt(t,...e){return Ju(t,...e)}function Jg(t,e,n){const r=Object.assign(Object.assign({},QI()),{[e]:n});return new mr("auth","Firebase",r).create(e,{appName:t.name})}function YI(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Jt(t,"argument-error"),Jg(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ju(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Zg.create(t,...e)}function Z(t,e,...n){if(!t)throw Ju(e,...n)}function cn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw qi(e),new Error(e)}function gn(t,e){t||cn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sf=new Map;function un(t){gn(t instanceof Function,"Expected a class definition");let e=Sf.get(t);return e?(gn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Sf.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZI(t,e){const n=yr(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Ws(i,e!=null?e:{}))return s;Jt(s,"already-initialized")}return n.initialize({options:e})}function JI(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(un);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kc(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function eT(){return Cf()==="http:"||Cf()==="https:"}function Cf(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tT(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(eT()||Xu()||"connection"in navigator)?navigator.onLine:!0}function nT(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e,n){this.shortDelay=e,this.longDelay=n,gn(n>e,"Short delay should be less than long delay!"),this.isMobile=Vg()||$g()}get(){return tT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function el(t,e){gn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const rT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sT=new di(3e4,6e4);function iT(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function oa(t,e,n,r,s={}){return tm(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=hi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),em.fetch()(nm(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function tm(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},rT),e);try{const s=new aT(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ja(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ja(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ja(t,"email-already-in-use",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Jg(t,l,u);Jt(t,l)}}catch(s){if(s instanceof vn)throw s;Jt(t,"network-request-failed")}}async function oT(t,e,n,r,s={}){const i=await oa(t,e,n,r,s);return"mfaPendingCredential"in i&&Jt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function nm(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?el(t.config,s):`${t.config.apiScheme}://${s}`}class aT{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Xt(this.auth,"network-request-failed")),sT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ja(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Xt(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cT(t,e){return oa(t,"POST","/v1/accounts:delete",e)}async function uT(t,e){return oa(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Os(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function lT(t,e=!1){const n=kt(t),r=await n.getIdToken(e),s=tl(r);Z(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Os(ec(s.auth_time)),issuedAtTime:Os(ec(s.iat)),expirationTime:Os(ec(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ec(t){return Number(t)*1e3}function tl(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return qi("JWT malformed, contained fewer than 3 sections"),null;try{const s=Bb(n);return s?JSON.parse(s):(qi("Failed to decode base64 JWT payload"),null)}catch(s){return qi("Caught error parsing JWT payload as JSON",s),null}}function hT(t){const e=tl(t);return Z(e,"internal-error"),Z(typeof e.exp!="undefined","internal-error"),Z(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof vn&&fT(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function fT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Os(this.lastLoginAt),this.creationTime=Os(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ho(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Xs(t,uT(n,{idToken:r}));Z(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?mT(i.providerUserInfo):[],a=gT(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new rm(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function pT(t){const e=kt(t);await ho(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function gT(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function mT(t){return t.map(e=>{var{providerId:n}=e,r=Zu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yT(t,e){const n=await tm(t,{},async()=>{const r=hi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=nm(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",em.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Z(e.idToken,"internal-error"),Z(typeof e.idToken!="undefined","internal-error"),Z(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):hT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Z(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await yT(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Qs;return r&&(Z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(Z(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(Z(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Qs,this.toJSON())}_performRefresh(){return cn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(t,e){Z(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class nr{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Zu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new dT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new rm(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Xs(this,this.stsTokenManager.getToken(this.auth,e));return Z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return lT(this,e)}reload(){return pT(this)}_assign(e){this!==e&&(Z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new nr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){Z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ho(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Xs(this,cT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,u,l;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,d=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,T=(u=n.createdAt)!==null&&u!==void 0?u:void 0,O=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:j,emailVerified:F,isAnonymous:Q,providerData:P,stsTokenManager:N}=n;Z(j&&N,e,"internal-error");const pe=Qs.fromJSON(this.name,N);Z(typeof j=="string",e,"internal-error"),Tn(h,e.name),Tn(f,e.name),Z(typeof F=="boolean",e,"internal-error"),Z(typeof Q=="boolean",e,"internal-error"),Tn(d,e.name),Tn(g,e.name),Tn(v,e.name),Tn(_,e.name),Tn(T,e.name),Tn(O,e.name);const ie=new nr({uid:j,auth:e,email:f,emailVerified:F,displayName:h,isAnonymous:Q,photoURL:g,phoneNumber:d,tenantId:v,stsTokenManager:pe,createdAt:T,lastLoginAt:O});return P&&Array.isArray(P)&&(ie.providerData=P.map(De=>Object.assign({},De))),_&&(ie._redirectEventId=_),ie}static async _fromIdTokenResponse(e,n,r=!1){const s=new Qs;s.updateFromServerResponse(n);const i=new nr({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ho(i),i}}/**
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
 */class sm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}sm.type="NONE";const kf=sm;/**
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
 */function Ki(t,e,n){return`firebase:${t}:${e}:${n}`}class Mr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ki(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ki("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?nr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Mr(un(kf),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||un(kf);const o=Ki(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const h=nr._fromJSON(e,l);u!==i&&(a=h),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Mr(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Mr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Df(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(am(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(im(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(um(e))return"Blackberry";if(lm(e))return"Webos";if(nl(e))return"Safari";if((e.includes("chrome/")||om(e))&&!e.includes("edge/"))return"Chrome";if(cm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function im(t=Ke()){return/firefox\//i.test(t)}function nl(t=Ke()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function om(t=Ke()){return/crios\//i.test(t)}function am(t=Ke()){return/iemobile/i.test(t)}function cm(t=Ke()){return/android/i.test(t)}function um(t=Ke()){return/blackberry/i.test(t)}function lm(t=Ke()){return/webos/i.test(t)}function aa(t=Ke()){return/iphone|ipad|ipod/i.test(t)}function vT(t=Ke()){var e;return aa(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function _T(){return jg()&&document.documentMode===10}function hm(t=Ke()){return aa(t)||cm(t)||lm(t)||um(t)||/windows phone/i.test(t)||am(t)}function wT(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fm(t,e=[]){let n;switch(t){case"Browser":n=Df(Ke());break;case"Worker":n=`${Df(Ke())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${fi}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Rf(this),this.idTokenSubscription=new Rf(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Zg,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=un(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Mr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,i=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!s||s===i)&&(o==null?void 0:o.user)&&(r=o.user)}return r?r._redirectEventId?(Z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ho(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=nT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?kt(e):null;return n&&Z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&Z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(un(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new mr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&un(e)||this._popupRedirectResolver;Z(n,this,"argument-error"),this.redirectPersistenceManager=await Mr.create(this,[un(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return Z(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function rl(t){return kt(t)}class Rf{constructor(e){this.auth=e,this.observer=null,this.addObserver=Gb(n=>this.observer=n)}get next(){return Z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function Lr(t,e){return oT(t,"POST","/v1/accounts:signInWithIdp",iT(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bT="http://localhost";class or extends dm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new or(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Jt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Zu(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new or(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Lr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Lr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Lr(e,n)}buildRequest(){const e={requestUri:bT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=hi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class pi extends sl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn extends pi{constructor(){super("facebook.com")}static credential(e){return or._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kn.credential(e.oauthAccessToken)}catch{return null}}}kn.FACEBOOK_SIGN_IN_METHOD="facebook.com";kn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an extends pi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return or._fromParams({providerId:an.PROVIDER_ID,signInMethod:an.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return an.credentialFromTaggedObject(e)}static credentialFromError(e){return an.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return an.credential(n,r)}catch{return null}}}an.GOOGLE_SIGN_IN_METHOD="google.com";an.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn extends pi{constructor(){super("github.com")}static credential(e){return or._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Dn.credential(e.oauthAccessToken)}catch{return null}}}Dn.GITHUB_SIGN_IN_METHOD="github.com";Dn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn extends pi{constructor(){super("twitter.com")}static credential(e,n){return or._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Rn.credentialFromTaggedObject(e)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Rn.credential(n,r)}catch{return null}}}Rn.TWITTER_SIGN_IN_METHOD="twitter.com";Rn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await nr._fromIdTokenResponse(e,r,s),o=Nf(r);return new Kr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Nf(r);return new Kr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Nf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo extends vn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,fo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new fo(e,n,r,s)}}function pm(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?fo._fromErrorAndOperation(t,i,e,r):i})}async function IT(t,e,n=!1){const r=await Xs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Kr._forOperation(t,"link",r)}/**
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
 */async function TT(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Xs(t,pm(r,s,e,t),n);Z(i.idToken,r,"internal-error");const o=tl(i.idToken);Z(o,r,"internal-error");const{sub:a}=o;return Z(t.uid===a,r,"user-mismatch"),Kr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Jt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AT(t,e,n=!1){const r="signIn",s=await pm(t,r,e),i=await Kr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function ST(t,e,n,r){return kt(t).onAuthStateChanged(e,n,r)}const po="__sak";/**
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
 */class gm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(po,"1"),this.storage.removeItem(po),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CT(){const t=Ke();return nl(t)||aa(t)}const kT=1e3,DT=10;class mm extends gm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=CT()&&wT(),this.fallbackToPolling=hm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);_T()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,DT):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},kT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}mm.type="LOCAL";const RT=mm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym extends gm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ym.type="SESSION";const il=ym;/**
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
 */function NT(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ca{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ca(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await NT(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ca.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ol(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class xT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=ol("",20);s.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(l),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(){return window}function OT(t){Qt().location.href=t}/**
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
 */function vm(){return typeof Qt().WorkerGlobalScope!="undefined"&&typeof Qt().importScripts=="function"}async function PT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function MT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function LT(){return vm()?self:null}/**
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
 */const _m="firebaseLocalStorageDb",FT=1,go="firebaseLocalStorage",wm="fbase_key";class gi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ua(t,e){return t.transaction([go],e?"readwrite":"readonly").objectStore(go)}function UT(){const t=indexedDB.deleteDatabase(_m);return new gi(t).toPromise()}function Wc(){const t=indexedDB.open(_m,FT);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(go,{keyPath:wm})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(go)?e(r):(r.close(),await UT(),e(await Wc()))})})}async function xf(t,e,n){const r=ua(t,!0).put({[wm]:e,value:n});return new gi(r).toPromise()}async function BT(t,e){const n=ua(t,!1).get(e),r=await new gi(n).toPromise();return r===void 0?null:r.value}function Of(t,e){const n=ua(t,!0).delete(e);return new gi(n).toPromise()}const VT=800,$T=3;class Em{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Wc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>$T)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return vm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ca._getInstance(LT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await PT(),!this.activeServiceWorker)return;this.sender=new xT(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||MT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Wc();return await xf(e,po,"1"),await Of(e,po),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>xf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>BT(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Of(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ua(s,!1).getAll();return new gi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),VT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Em.type="LOCAL";const jT=Em;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zT(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function HT(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Xt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",zT().appendChild(r)})}function qT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new di(3e4,6e4);/**
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
 */function bm(t,e){return e?un(e):(Z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class al extends dm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Lr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Lr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Lr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function KT(t){return AT(t.auth,new al(t),t.bypassAuthState)}function WT(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),TT(n,new al(t),t.bypassAuthState)}async function GT(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),IT(n,new al(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return KT;case"linkViaPopup":case"linkViaRedirect":return GT;case"reauthViaPopup":case"reauthViaRedirect":return WT;default:Jt(this.auth,"internal-error")}}resolve(e){gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XT=new di(2e3,1e4);async function QT(t,e,n){const r=rl(t);YI(t,e,sl);const s=bm(r,n);return new Xn(r,"signInViaPopup",e,s).executeNotNull()}class Xn extends Im{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Xn.currentPopupAction&&Xn.currentPopupAction.cancel(),Xn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Z(e,this.auth,"internal-error"),e}async onExecution(){gn(this.filter.length===1,"Popup operations only handle one event");const e=ol();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Xt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Xt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,XT.get())};e()}}Xn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YT="pendingRedirect",tc=new Map;class ZT extends Im{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=tc.get(this.auth._key());if(!e){try{const r=await JT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}tc.set(this.auth._key(),e)}return this.bypassAuthState||tc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function JT(t,e){const n=tA(e),r=eA(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function eA(t){return un(t._redirectPersistence)}function tA(t){return Ki(YT,t.config.apiKey,t.name)}async function nA(t,e,n=!1){const r=rl(t),s=bm(r,e),o=await new ZT(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rA=10*60*1e3;class sA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!iA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Tm(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Xt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=rA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Pf(e))}saveEventToCache(e){this.cachedEventUids.add(Pf(e)),this.lastProcessedEventTime=Date.now()}}function Pf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Tm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function iA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Tm(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oA(t,e={}){return oa(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,cA=/^https?/;async function uA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await oA(t);for(const n of e)try{if(lA(n))return}catch{}Jt(t,"unauthorized-domain")}function lA(t){const e=Kc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!cA.test(n))return!1;if(aA.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const hA=new di(3e4,6e4);function Mf(){const t=Qt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function fA(t){return new Promise((e,n)=>{var r,s,i;function o(){Mf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Mf(),n(Xt(t,"network-request-failed"))},timeout:hA.get()})}if(!((s=(r=Qt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Qt().gapi)===null||i===void 0)&&i.load)o();else{const a=qT("iframefcb");return Qt()[a]=()=>{gapi.load?o():n(Xt(t,"network-request-failed"))},HT(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Wi=null,e})}let Wi=null;function dA(t){return Wi=Wi||fA(t),Wi}/**
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
 */const pA=new di(5e3,15e3),gA="__/auth/iframe",mA="emulator/auth/iframe",yA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},vA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _A(t){const e=t.config;Z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?el(e,mA):`https://${t.config.authDomain}/${gA}`,r={apiKey:e.apiKey,appName:t.name,v:fi},s=vA.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${hi(r).slice(1)}`}async function wA(t){const e=await dA(t),n=Qt().gapi;return Z(n,t,"internal-error"),e.open({where:document.body,url:_A(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:yA,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Xt(t,"network-request-failed"),a=Qt().setTimeout(()=>{i(o)},pA.get());function c(){Qt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const EA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},bA=500,IA=600,TA="_blank",AA="http://localhost";class Lf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function SA(t,e,n,r=bA,s=IA){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},EA),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Ke().toLowerCase();n&&(a=om(u)?TA:n),im(u)&&(e=e||AA,c.scrollbars="yes");const l=Object.entries(c).reduce((f,[d,g])=>`${f}${d}=${g},`,"");if(vT(u)&&a!=="_self")return CA(e||"",a),new Lf(null);const h=window.open(e||"",a,l);Z(h,t,"popup-blocked");try{h.focus()}catch{}return new Lf(h)}function CA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const kA="__/auth/handler",DA="emulator/auth/handler";function Ff(t,e,n,r,s,i){Z(t.config.authDomain,t,"auth-domain-config-required"),Z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:fi,eventId:s};if(e instanceof sl){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Wb(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(i||{}))o[c]=u}if(e instanceof pi){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${RA(t)}?${hi(a).slice(1)}`}function RA({config:t}){return t.emulator?el(t,DA):`https://${t.authDomain}/${kA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nc="webStorageSupport";class NA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=il,this._completeRedirectFn=nA}async _openPopup(e,n,r,s){var i;gn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Ff(e,n,r,Kc(),s);return SA(e,o,ol())}async _openRedirect(e,n,r,s){return await this._originValidation(e),OT(Ff(e,n,r,Kc(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(gn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await wA(e),r=new sA(e);return n.register("authEvent",s=>(Z(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(nc,{type:nc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[nc];o!==void 0&&n(!!o),Jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=uA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return hm()||nl()||aa()}}const xA=NA;var Uf="@firebase/auth",Bf="0.19.12";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function MA(t){Zt(new zt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{Z(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),Z(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fm(t)},l=new ET(a,c,u);return JI(l,n),l})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Zt(new zt("auth-internal",e=>{const n=rl(e.getProvider("auth").getImmediate());return(r=>new OA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ft(Uf,Bf,PA(t)),Ft(Uf,Bf,"esm2017")}/**
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
 */function rc(t=Yu()){const e=yr(t,"auth");return e.isInitialized()?e.getImmediate():ZI(t,{popupRedirectResolver:xA,persistence:[jT,RT,il]})}MA("Browser");const Ys=Gu("auth",()=>{const t=Te(null),e=Te(null),n=me(()=>t.value!==null);function r(a,c){var u,l,h;if(!a){t.value=null;return}a=a,t.value={userId:a.uid,profileImage:(u=a.photoURL)!=null?u:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbADKB5OER8mK9MCrkCBFJeXc2pZCGucLNxA&usqp=CAU",thumbnailImage:(l=a.photoURL)!=null?l:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbADKB5OER8mK9MCrkCBFJeXc2pZCGucLNxA&usqp=CAU",nickName:(h=a.displayName)!=null?h:"Anonymous"},c&&(e.value=c)}async function s(a,c){const u=rc();await u.setPersistence(il);const l=await QT(u,a);r(l.user,c)}async function i(){r(null),await rc().signOut(),localStorage.clear()}function o(a){return new Promise(c=>{const u=rc();ST(u,l=>{l&&r(l,a),c(l!==null)})})}return{user:t,provider:e,isAuthenticated:n,getPersistenceFirebaseUser:o,logout:i,loginWithFirebase:s}});function la(t,e,...n){if(t in e){let s=e[t];return typeof s=="function"?s(...n):s}let r=new Error(`Tried to handle "${t}" but there is no handler defined. Only defined handlers are: ${Object.keys(e).map(s=>`"${s}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,la),r}var Gc=(t=>(t[t.None=0]="None",t[t.RenderStrategy=1]="RenderStrategy",t[t.Static=2]="Static",t))(Gc||{}),LA=(t=>(t[t.Unmount=0]="Unmount",t[t.Hidden=1]="Hidden",t))(LA||{});function ha(r){var s=r,{visible:t=!0,features:e=0}=s,n=Va(s,["visible","features"]);var i;if(t||e&2&&n.props.static)return sc(n);if(e&1){let o=(i=n.props.unmount)==null||i?0:1;return la(o,{[0](){return null},[1](){return sc(ys(Kt({},n),{props:ys(Kt({},n.props),{hidden:!0,style:{display:"none"}})}))}})}return sc(n)}function sc({props:t,attrs:e,slots:n,slot:r,name:s}){var i;let u=FA(t,["unmount","static"]),{as:o}=u,a=Va(u,["as"]),c=(i=n.default)==null?void 0:i.call(n,r);if(o==="template"){if(Object.keys(a).length>0||Object.keys(e).length>0){let[l,...h]=c!=null?c:[];if(!UA(l)||h.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${s} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(a).concat(Object.keys(e)).map(f=>`  - ${f}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(f=>`  - ${f}`).join(`
`)].join(`
`));return Mn(l,a)}return Array.isArray(c)&&c.length===1?c[0]:c}return ta(o,a,c)}function FA(t,e=[]){let n=Object.assign({},t);for(let r of e)r in n&&delete n[r];return n}function UA(t){return t==null?!1:typeof t.type=="string"||typeof t.type=="object"||typeof t.type=="function"}let BA=0;function VA(){return++BA}function cl(){return VA()}var Xe=(t=>(t.Space=" ",t.Enter="Enter",t.Escape="Escape",t.Backspace="Backspace",t.Delete="Delete",t.ArrowLeft="ArrowLeft",t.ArrowUp="ArrowUp",t.ArrowRight="ArrowRight",t.ArrowDown="ArrowDown",t.Home="Home",t.End="End",t.PageUp="PageUp",t.PageDown="PageDown",t.Tab="Tab",t))(Xe||{});function $A(t){throw new Error("Unexpected object: "+t)}var It=(t=>(t[t.First=0]="First",t[t.Previous=1]="Previous",t[t.Next=2]="Next",t[t.Last=3]="Last",t[t.Specific=4]="Specific",t[t.Nothing=5]="Nothing",t))(It||{});function jA(t,e){let n=e.resolveItems();if(n.length<=0)return null;let r=e.resolveActiveIndex(),s=r!=null?r:-1,i=(()=>{switch(t.focus){case 0:return n.findIndex(o=>!e.resolveDisabled(o));case 1:{let o=n.slice().reverse().findIndex((a,c,u)=>s!==-1&&u.length-c-1>=s?!1:!e.resolveDisabled(a));return o===-1?o:n.length-1-o}case 2:return n.findIndex((o,a)=>a<=s?!1:!e.resolveDisabled(o));case 3:{let o=n.slice().reverse().findIndex(a=>!e.resolveDisabled(a));return o===-1?o:n.length-1-o}case 4:return n.findIndex(o=>e.resolveId(o)===t.id);case 5:return null;default:$A(t)}})();return i===-1?r:i}function Be(t){return t==null||t.value==null?null:"$el"in t.value?t.value.$el:t.value}let Am=Symbol("Context");var mo=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(mo||{});function zA(){return Tt(Am,null)}function HA(t){Pr(Am,t)}function Vf(t,e){if(t)return t;let n=e!=null?e:"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function qA(t,e){let n=Te(Vf(t.value.type,t.value.as));return $r(()=>{n.value=Vf(t.value.type,t.value.as)}),Go(()=>{var r;n.value||!Be(e)||Be(e)instanceof HTMLButtonElement&&!((r=Be(e))!=null&&r.hasAttribute("type"))&&(n.value="button")}),n}function Sm(t){if(typeof window=="undefined")return null;if(t instanceof Node)return t.ownerDocument;if(t!=null&&t.hasOwnProperty("value")){let e=Be(t);if(e)return e.ownerDocument}return document}function KA({container:t,accept:e,walk:n,enabled:r}){Go(()=>{let s=t.value;if(!s||r!==void 0&&!r.value)return;let i=Sm(t);if(!i)return;let o=Object.assign(c=>e(c),{acceptNode:e}),a=i.createTreeWalker(s,NodeFilter.SHOW_ELEMENT,o,!1);for(;a.nextNode();)n(a.currentNode)})}let $f=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(t=>`${t}:not([tabindex='-1'])`).join(",");var WA=(t=>(t[t.First=1]="First",t[t.Previous=2]="Previous",t[t.Next=4]="Next",t[t.Last=8]="Last",t[t.WrapAround=16]="WrapAround",t[t.NoScroll=32]="NoScroll",t))(WA||{}),GA=(t=>(t[t.Error=0]="Error",t[t.Overflow=1]="Overflow",t[t.Success=2]="Success",t[t.Underflow=3]="Underflow",t))(GA||{}),XA=(t=>(t[t.Previous=-1]="Previous",t[t.Next=1]="Next",t))(XA||{}),Cm=(t=>(t[t.Strict=0]="Strict",t[t.Loose=1]="Loose",t))(Cm||{});function QA(t,e=0){var n;return t===((n=Sm(t))==null?void 0:n.body)?!1:la(e,{[0](){return t.matches($f)},[1](){let r=t;for(;r!==null;){if(r.matches($f))return!0;r=r.parentElement}return!1}})}function YA(t,e=n=>n){return t.slice().sort((n,r)=>{let s=e(n),i=e(r);if(s===null||i===null)return 0;let o=s.compareDocumentPosition(i);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function jf(t,e,n){typeof window!="undefined"&&Go(r=>{window.addEventListener(t,e,n),r(()=>window.removeEventListener(t,e,n))})}function ZA(t){typeof queueMicrotask=="function"?queueMicrotask(t):Promise.resolve().then(t).catch(e=>setTimeout(()=>{throw e}))}var JA=(t=>(t[t.None=1]="None",t[t.IgnoreScrollbars=2]="IgnoreScrollbars",t))(JA||{});function eS(t,e,n=1){let r=!1;function s(i){if(r)return;r=!0,ZA(()=>{r=!1});let o=i.target;if(!o.ownerDocument.documentElement.contains(o))return;let a=function c(u){return typeof u=="function"?c(u()):Array.isArray(u)||u instanceof Set?u:[u]}(t);if((n&2)===2){let c=20,u=o.ownerDocument.documentElement;if(i.clientX>u.clientWidth-c||i.clientX<c||i.clientY>u.clientHeight-c||i.clientY<c)return}for(let c of a){if(c===null)continue;let u=c instanceof HTMLElement?c:Be(c);if(u!=null&&u.contains(o))return}e(i,o)}jf("pointerdown",s),jf("mousedown",s)}var tS=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(tS||{}),nS=(t=>(t[t.Pointer=0]="Pointer",t[t.Other=1]="Other",t))(nS||{});function rS(t){requestAnimationFrame(()=>requestAnimationFrame(t))}let km=Symbol("MenuContext");function fa(t){let e=Tt(km,null);if(e===null){let n=new Error(`<${t} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,fa),n}return e}let sS=lt({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(t,{slots:e,attrs:n}){let r=Te(1),s=Te(null),i=Te(null),o=Te([]),a=Te(""),c=Te(null),u=Te(1);function l(f=d=>d){let d=c.value!==null?o.value[c.value]:null,g=YA(f(o.value.slice()),_=>Be(_.dataRef.domRef)),v=d?g.indexOf(d):null;return v===-1&&(v=null),{items:g,activeItemIndex:v}}let h={menuState:r,buttonRef:s,itemsRef:i,items:o,searchQuery:a,activeItemIndex:c,activationTrigger:u,closeMenu:()=>{r.value=1,c.value=null},openMenu:()=>r.value=0,goToItem(f,d,g){let v=l(),_=jA(f===It.Specific?{focus:It.Specific,id:d}:{focus:f},{resolveItems:()=>v.items,resolveActiveIndex:()=>v.activeItemIndex,resolveId:T=>T.id,resolveDisabled:T=>T.dataRef.disabled});a.value="",c.value=_,u.value=g!=null?g:1,o.value=v.items},search(f){let d=a.value!==""?0:1;a.value+=f.toLowerCase();let g=(c.value!==null?o.value.slice(c.value+d).concat(o.value.slice(0,c.value+d)):o.value).find(_=>_.dataRef.textValue.startsWith(a.value)&&!_.dataRef.disabled),v=g?o.value.indexOf(g):-1;v===-1||v===c.value||(c.value=v,u.value=1)},clearSearch(){a.value=""},registerItem(f,d){let g=l(v=>[...v,{id:f,dataRef:d}]);o.value=g.items,c.value=g.activeItemIndex,u.value=1},unregisterItem(f){let d=l(g=>{let v=g.findIndex(_=>_.id===f);return v!==-1&&g.splice(v,1),g});o.value=d.items,c.value=d.activeItemIndex,u.value=1}};return eS([s,i],(f,d)=>{var g;r.value===0&&(h.closeMenu(),QA(d,Cm.Loose)||(f.preventDefault(),(g=Be(s))==null||g.focus()))}),Pr(km,h),HA(me(()=>la(r.value,{[0]:mo.Open,[1]:mo.Closed}))),()=>{let f={open:r.value===0};return ha({props:t,slot:f,slots:e,attrs:n,name:"Menu"})}}}),iS=lt({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"}},setup(t,{attrs:e,slots:n,expose:r}){let s=fa("MenuButton"),i=`headlessui-menu-button-${cl()}`;r({el:s.buttonRef,$el:s.buttonRef});function o(l){switch(l.key){case Xe.Space:case Xe.Enter:case Xe.ArrowDown:l.preventDefault(),l.stopPropagation(),s.openMenu(),Pt(()=>{var h;(h=Be(s.itemsRef))==null||h.focus({preventScroll:!0}),s.goToItem(It.First)});break;case Xe.ArrowUp:l.preventDefault(),l.stopPropagation(),s.openMenu(),Pt(()=>{var h;(h=Be(s.itemsRef))==null||h.focus({preventScroll:!0}),s.goToItem(It.Last)});break}}function a(l){switch(l.key){case Xe.Space:l.preventDefault();break}}function c(l){t.disabled||(s.menuState.value===0?(s.closeMenu(),Pt(()=>{var h;return(h=Be(s.buttonRef))==null?void 0:h.focus({preventScroll:!0})})):(l.preventDefault(),l.stopPropagation(),s.openMenu(),rS(()=>{var h;return(h=Be(s.itemsRef))==null?void 0:h.focus({preventScroll:!0})})))}let u=qA(me(()=>({as:t.as,type:e.type})),s.buttonRef);return()=>{var l;let h={open:s.menuState.value===0},f={ref:s.buttonRef,id:i,type:u.value,"aria-haspopup":!0,"aria-controls":(l=Be(s.itemsRef))==null?void 0:l.id,"aria-expanded":t.disabled?void 0:s.menuState.value===0,onKeydown:o,onKeyup:a,onClick:c};return ha({props:Kt(Kt({},t),f),slot:h,attrs:e,slots:n,name:"MenuButton"})}}}),oS=lt({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},setup(t,{attrs:e,slots:n,expose:r}){let s=fa("MenuItems"),i=`headlessui-menu-items-${cl()}`,o=Te(null);r({el:s.itemsRef,$el:s.itemsRef}),KA({container:me(()=>Be(s.itemsRef)),enabled:me(()=>s.menuState.value===0),accept(h){return h.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:h.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(h){h.setAttribute("role","none")}});function a(h){var f;switch(o.value&&clearTimeout(o.value),h.key){case Xe.Space:if(s.searchQuery.value!=="")return h.preventDefault(),h.stopPropagation(),s.search(h.key);case Xe.Enter:if(h.preventDefault(),h.stopPropagation(),s.activeItemIndex.value!==null){let d=s.items.value[s.activeItemIndex.value];(f=Be(d.dataRef.domRef))==null||f.click()}s.closeMenu(),Pt(()=>{var d;return(d=Be(s.buttonRef))==null?void 0:d.focus({preventScroll:!0})});break;case Xe.ArrowDown:return h.preventDefault(),h.stopPropagation(),s.goToItem(It.Next);case Xe.ArrowUp:return h.preventDefault(),h.stopPropagation(),s.goToItem(It.Previous);case Xe.Home:case Xe.PageUp:return h.preventDefault(),h.stopPropagation(),s.goToItem(It.First);case Xe.End:case Xe.PageDown:return h.preventDefault(),h.stopPropagation(),s.goToItem(It.Last);case Xe.Escape:h.preventDefault(),h.stopPropagation(),s.closeMenu(),Pt(()=>{var d;return(d=Be(s.buttonRef))==null?void 0:d.focus({preventScroll:!0})});break;case Xe.Tab:h.preventDefault(),h.stopPropagation();break;default:h.key.length===1&&(s.search(h.key),o.value=setTimeout(()=>s.clearSearch(),350));break}}function c(h){switch(h.key){case Xe.Space:h.preventDefault();break}}let u=zA(),l=me(()=>u!==null?u.value===mo.Open:s.menuState.value===0);return()=>{var h,f;let d={open:s.menuState.value===0},g={"aria-activedescendant":s.activeItemIndex.value===null||(h=s.items.value[s.activeItemIndex.value])==null?void 0:h.id,"aria-labelledby":(f=Be(s.buttonRef))==null?void 0:f.id,id:i,onKeydown:a,onKeyup:c,role:"menu",tabIndex:0,ref:s.itemsRef};return ha({props:Kt(Kt({},t),g),slot:d,attrs:e,slots:n,features:Gc.RenderStrategy|Gc.Static,visible:l.value,name:"MenuItems"})}}}),ic=lt({name:"MenuItem",props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1}},setup(t,{slots:e,attrs:n,expose:r}){let s=fa("MenuItem"),i=`headlessui-menu-item-${cl()}`,o=Te(null);r({el:o,$el:o});let a=me(()=>s.activeItemIndex.value!==null?s.items.value[s.activeItemIndex.value].id===i:!1),c=me(()=>({disabled:t.disabled,textValue:"",domRef:o}));$r(()=>{var d,g;let v=(g=(d=Be(o))==null?void 0:d.textContent)==null?void 0:g.toLowerCase().trim();v!==void 0&&(c.value.textValue=v)}),$r(()=>s.registerItem(i,c)),Yo(()=>s.unregisterItem(i)),Go(()=>{s.menuState.value===0&&(!a.value||s.activationTrigger.value!==0&&Pt(()=>{var d,g;return(g=(d=Be(o))==null?void 0:d.scrollIntoView)==null?void 0:g.call(d,{block:"nearest"})}))});function u(d){if(t.disabled)return d.preventDefault();s.closeMenu(),Pt(()=>{var g;return(g=Be(s.buttonRef))==null?void 0:g.focus({preventScroll:!0})})}function l(){if(t.disabled)return s.goToItem(It.Nothing);s.goToItem(It.Specific,i)}function h(){t.disabled||a.value||s.goToItem(It.Specific,i,0)}function f(){t.disabled||!a.value||s.goToItem(It.Nothing)}return()=>{let{disabled:d}=t,g={active:a.value,disabled:d};return ha({props:ys(Kt({},t),{id:i,ref:o,role:"menuitem",tabIndex:d===!0?void 0:-1,"aria-disabled":d===!0?!0:void 0,onClick:u,onFocus:l,onPointermove:h,onMousemove:h,onPointerleave:f,onMouseleave:f}),slot:g,attrs:n,slots:e,name:"MenuItem"})}}});function aS(t,e){return ae(),at("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[W("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z"})])}function cS(t,e){return ae(),at("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[W("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"})])}function uS(t,e){return ae(),at("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[W("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19 9l-7 7-7-7"})])}function lS(t,e){return ae(),at("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[W("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"})])}function hS(t,e){return ae(),at("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[W("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})])}function fS(t,e){return ae(),at("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[W("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})])}const dS=t=>(Lp("data-v-4c1d1e91"),t=t(),Fp(),t),pS={class:"mx-auto w-full flex justify-between"},gS=dS(()=>oe("div",{class:"text-2xl font-bold flex items-center dark:text-gray-50 transition-colors"},[oe("img",{src:WE,alt:"DaftDoris",class:"h-8 dark:invert"})],-1)),mS={class:"py-1"},yS={class:"flex items-center"},vS=["src"],_S=lt({setup(t){const e=Ys(),n=jE(),r=Ig();me(()=>n.meta.title||"Home");const s=me(()=>e.user),i=me(()=>e.isAuthenticated),o=Rb(),a=JE(o),c={async onClickProfile(){await e.logout(),await r.push("/auth/login")},onClickToggleDarkMode(){a()}};return(u,l)=>{var f;const h=Hw("ripple");return he(i)?(ae(),ze("header",np(Hu({key:0},u.$attrs)),[oe("div",pS,[gS,W(he(sS),{as:"div",class:"relative inline-block text-left"},{default:Qe(()=>[oe("div",null,[W(he(iS),{class:"inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"},{default:Qe(()=>[li(Bo(he(n).params.podcastId||"smartseven")+" ",1),W(he(uS),{class:"-mr-1 ml-2 h-5 w-5","aria-hidden":"true"})]),_:1})]),W(qs,{"enter-active-class":"transition ease-out duration-100","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:Qe(()=>[W(he(oS),{class:"origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"},{default:Qe(()=>[oe("div",mS,[W(he(ic),null,{default:Qe(({active:d})=>[oe("a",{href:"#smartseven",class:hn([d?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"])},"Smart Seven \u{1F1EC}\u{1F1E7}",2)]),_:1}),W(he(ic),null,{default:Qe(({active:d})=>[oe("a",{href:"#smartseven-ireland",class:hn([d?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"])},"Smart Seven Ireland \u{1F1EE}\u{1F1EA}",2)]),_:1}),W(he(ic),null,{default:Qe(({active:d})=>[oe("a",{href:"#",class:hn([d?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"])},"Another podcast \u{1F916}",2)]),_:1})])]),_:1})]),_:1})]),_:1}),oe("div",yS,[oe("button",{type:"button",class:"round-btn mr-2 px-1 py-1",onClick:l[0]||(l[0]=qu((...d)=>c.onClickToggleDarkMode&&c.onClickToggleDarkMode(...d),["prevent","stop"]))},[W(qs,{mode:"out-in",name:"fade"},{default:Qe(()=>[he(o)?(ae(),at(he(hS),{key:0,class:"dark:text-white bg-transparent transition-colors"})):(ae(),at(he(fS),{key:1,class:"dark:text-white bg-transparent transition-colors"}))]),_:1})]),ui((ae(),ze("button",{type:"button",class:"round-btn",onClick:l[1]||(l[1]=(...d)=>c.onClickProfile&&c.onClickProfile(...d))},[oe("img",{class:"rounded-full shadow-lg",alt:"profile image",src:(f=he(s))==null?void 0:f.thumbnailImage},null,8,vS)])),[[h]])])])],16)):Ww("",!0)}}});var wS=tn(_S,[["__scopeId","data-v-4c1d1e91"]]);const ES={class:"relative w-full h-full"},bS={class:"mx-auto w-full h-full"},IS=lt({setup(t){return(e,n)=>{const r=Vu("router-view");return ae(),ze("div",ES,[W(wS),oe("main",bS,[W(r)])])}}});let TS=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce((e,n)=>(n&=63,n<36?e+=n.toString(36):n<62?e+=(n-26).toString(36).toUpperCase():n>62?e+="-":e+="_",e),"");var AS=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},M,ul=ul||{},X=AS||self;function yo(){}function Xc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function mi(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function SS(t){return Object.prototype.hasOwnProperty.call(t,oc)&&t[oc]||(t[oc]=++CS)}var oc="closure_uid_"+(1e9*Math.random()>>>0),CS=0;function kS(t,e,n){return t.call.apply(t.bind,arguments)}function DS(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function Je(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Je=kS:Je=DS,Je.apply(null,arguments)}function Fi(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function st(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function Bn(){this.s=this.s,this.o=this.o}var RS=0,NS={};Bn.prototype.s=!1;Bn.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),RS!=0)){var t=SS(this);delete NS[t]}};Bn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Dm=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Rm=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,s=typeof t=="string"?t.split(""):t;for(let i=0;i<r;i++)i in s&&e.call(n,s[i],i,t)};function xS(t){e:{var e=IC;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let s=0;s<n;s++)if(s in r&&e.call(void 0,r[s],s,t)){e=s;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function zf(t){return Array.prototype.concat.apply([],arguments)}function ll(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function vo(t){return/^[\s\xa0]*$/.test(t)}var Hf=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function ft(t,e){return t.indexOf(e)!=-1}function ac(t,e){return t<e?-1:t>e?1:0}var dt;e:{var qf=X.navigator;if(qf){var Kf=qf.userAgent;if(Kf){dt=Kf;break e}}dt=""}function hl(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Nm(t){const e={};for(const n in t)e[n]=t[n];return e}var Wf="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function xm(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<Wf.length;i++)n=Wf[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function fl(t){return fl[" "](t),t}fl[" "]=yo;function OS(t){var e=LS;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var PS=ft(dt,"Opera"),Wr=ft(dt,"Trident")||ft(dt,"MSIE"),Om=ft(dt,"Edge"),Qc=Om||Wr,Pm=ft(dt,"Gecko")&&!(ft(dt.toLowerCase(),"webkit")&&!ft(dt,"Edge"))&&!(ft(dt,"Trident")||ft(dt,"MSIE"))&&!ft(dt,"Edge"),MS=ft(dt.toLowerCase(),"webkit")&&!ft(dt,"Edge");function Mm(){var t=X.document;return t?t.documentMode:void 0}var _o;e:{var cc="",uc=function(){var t=dt;if(Pm)return/rv:([^\);]+)(\)|;)/.exec(t);if(Om)return/Edge\/([\d\.]+)/.exec(t);if(Wr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(MS)return/WebKit\/(\S+)/.exec(t);if(PS)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(uc&&(cc=uc?uc[1]:""),Wr){var lc=Mm();if(lc!=null&&lc>parseFloat(cc)){_o=String(lc);break e}}_o=cc}var LS={};function FS(){return OS(function(){let t=0;const e=Hf(String(_o)).split("."),n=Hf("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var s=e[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s[0].length==0&&i[0].length==0)break;t=ac(s[1].length==0?0:parseInt(s[1],10),i[1].length==0?0:parseInt(i[1],10))||ac(s[2].length==0,i[2].length==0)||ac(s[2],i[2]),s=s[3],i=i[3]}while(t==0)}return 0<=t})}var Yc;if(X.document&&Wr){var Gf=Mm();Yc=Gf||parseInt(_o,10)||void 0}else Yc=void 0;var US=Yc,BS=function(){if(!X.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{X.addEventListener("test",yo,e),X.removeEventListener("test",yo,e)}catch{}return t}();function ct(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ct.prototype.h=function(){this.defaultPrevented=!0};function Zs(t,e){if(ct.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Pm){e:{try{fl(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:VS[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Zs.Z.h.call(this)}}st(Zs,ct);var VS={2:"touch",3:"pen",4:"mouse"};Zs.prototype.h=function(){Zs.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var yi="closure_listenable_"+(1e6*Math.random()|0),$S=0;function jS(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=s,this.key=++$S,this.ca=this.fa=!1}function da(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function pa(t){this.src=t,this.g={},this.h=0}pa.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Jc(t,e,r,s);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new jS(e,this.src,i,!!r,s),e.fa=n,t.push(e)),e};function Zc(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=Dm(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(da(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Jc(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==r)return s}return-1}var dl="closure_lm_"+(1e6*Math.random()|0),hc={};function Lm(t,e,n,r,s){if(r&&r.once)return Um(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Lm(t,e[i],n,r,s);return null}return n=ml(n),t&&t[yi]?t.N(e,n,mi(r)?!!r.capture:!!r,s):Fm(t,e,n,!1,r,s)}function Fm(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=mi(s)?!!s.capture:!!s,a=gl(t);if(a||(t[dl]=a=new pa(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=zS(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)BS||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(Vm(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function zS(){function t(n){return e.call(t.src,t.listener,n)}var e=HS;return t}function Um(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Um(t,e[i],n,r,s);return null}return n=ml(n),t&&t[yi]?t.O(e,n,mi(r)?!!r.capture:!!r,s):Fm(t,e,n,!0,r,s)}function Bm(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)Bm(t,e[i],n,r,s);else r=mi(r)?!!r.capture:!!r,n=ml(n),t&&t[yi]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Jc(i,n,r,s),-1<n&&(da(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=gl(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Jc(e,n,r,s)),(n=-1<t?e[t]:null)&&pl(n))}function pl(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[yi])Zc(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Vm(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=gl(e))?(Zc(n,t),n.h==0&&(n.src=null,e[dl]=null)):da(t)}}}function Vm(t){return t in hc?hc[t]:hc[t]="on"+t}function HS(t,e){if(t.ca)t=!0;else{e=new Zs(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&pl(t),t=n.call(r,e)}return t}function gl(t){return t=t[dl],t instanceof pa?t:null}var fc="__closure_events_fn_"+(1e9*Math.random()>>>0);function ml(t){return typeof t=="function"?t:(t[fc]||(t[fc]=function(e){return t.handleEvent(e)}),t[fc])}function We(){Bn.call(this),this.i=new pa(this),this.P=this,this.I=null}st(We,Bn);We.prototype[yi]=!0;We.prototype.removeEventListener=function(t,e,n,r){Bm(this,t,e,n,r)};function et(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new ct(e,t);else if(e instanceof ct)e.target=e.target||t;else{var s=e;e=new ct(r,t),xm(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Ui(o,r,!0,e)&&s}if(o=e.g=t,s=Ui(o,r,!0,e)&&s,s=Ui(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Ui(o,r,!1,e)&&s}We.prototype.M=function(){if(We.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)da(n[r]);delete t.g[e],t.h--}}this.I=null};We.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};We.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Ui(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&Zc(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var yl=X.JSON.stringify;function qS(){var t=jm;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class KS{constructor(){this.h=this.g=null}add(e,n){const r=$m.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var $m=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new WS,t=>t.reset());class WS{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function GS(t){X.setTimeout(()=>{throw t},0)}function vl(t,e){eu||XS(),tu||(eu(),tu=!0),jm.add(t,e)}var eu;function XS(){var t=X.Promise.resolve(void 0);eu=function(){t.then(QS)}}var tu=!1,jm=new KS;function QS(){for(var t;t=qS();){try{t.h.call(t.g)}catch(n){GS(n)}var e=$m;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}tu=!1}function ga(t,e){We.call(this),this.h=t||1,this.g=e||X,this.j=Je(this.kb,this),this.l=Date.now()}st(ga,We);M=ga.prototype;M.da=!1;M.S=null;M.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),et(this,"tick"),this.da&&(_l(this),this.start()))}};M.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function _l(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}M.M=function(){ga.Z.M.call(this),_l(this),delete this.g};function wl(t,e,n){if(typeof t=="function")n&&(t=Je(t,n));else if(t&&typeof t.handleEvent=="function")t=Je(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:X.setTimeout(t,e||0)}function zm(t){t.g=wl(()=>{t.g=null,t.i&&(t.i=!1,zm(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class YS extends Bn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:zm(this)}M(){super.M(),this.g&&(X.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Js(t){Bn.call(this),this.h=t,this.g={}}st(Js,Bn);var Xf=[];function Hm(t,e,n,r){Array.isArray(n)||(n&&(Xf[0]=n.toString()),n=Xf);for(var s=0;s<n.length;s++){var i=Lm(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function qm(t){hl(t.g,function(e,n){this.g.hasOwnProperty(n)&&pl(e)},t),t.g={}}Js.prototype.M=function(){Js.Z.M.call(this),qm(this)};Js.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ma(){this.g=!0}ma.prototype.Aa=function(){this.g=!1};function ZS(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function JS(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Rr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+tC(t,n)+(r?" "+r:"")})}function eC(t,e){t.info(function(){return"TIMEOUT: "+e})}ma.prototype.info=function(){};function tC(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return yl(n)}catch{return e}}var vr={},Qf=null;function ya(){return Qf=Qf||new We}vr.Ma="serverreachability";function Km(t){ct.call(this,vr.Ma,t)}st(Km,ct);function ei(t){const e=ya();et(e,new Km(e,t))}vr.STAT_EVENT="statevent";function Wm(t,e){ct.call(this,vr.STAT_EVENT,t),this.stat=e}st(Wm,ct);function pt(t){const e=ya();et(e,new Wm(e,t))}vr.Na="timingevent";function Gm(t,e){ct.call(this,vr.Na,t),this.size=e}st(Gm,ct);function vi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return X.setTimeout(function(){t()},e)}var va={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Xm={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function El(){}El.prototype.h=null;function Yf(t){return t.h||(t.h=t.i())}function Qm(){}var _i={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function bl(){ct.call(this,"d")}st(bl,ct);function Il(){ct.call(this,"c")}st(Il,ct);var nu;function _a(){}st(_a,El);_a.prototype.g=function(){return new XMLHttpRequest};_a.prototype.i=function(){return{}};nu=new _a;function wi(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new Js(this),this.P=nC,t=Qc?125:void 0,this.W=new ga(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Ym}function Ym(){this.i=null,this.g="",this.h=!1}var nC=45e3,ru={},wo={};M=wi.prototype;M.setTimeout=function(t){this.P=t};function su(t,e,n){t.K=1,t.v=Ea(mn(e)),t.s=n,t.U=!0,Zm(t,null)}function Zm(t,e){t.F=Date.now(),Ei(t),t.A=mn(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),iy(n.h,"t",r),t.C=0,n=t.l.H,t.h=new Ym,t.g=Ay(t.l,n?e:null,!t.s),0<t.O&&(t.L=new YS(Je(t.Ia,t,t.g),t.O)),Hm(t.V,t.g,"readystatechange",t.gb),e=t.H?Nm(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),ei(1),ZS(t.j,t.u,t.A,t.m,t.X,t.s)}M.gb=function(t){t=t.target;const e=this.L;e&&ln(t)==3?e.l():this.Ia(t)};M.Ia=function(t){try{if(t==this.g)e:{const l=ln(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>l)&&(l!=3||Qc||this.g&&(this.h.h||this.g.ga()||td(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?ei(3):ei(2)),wa(this);var n=this.g.ba();this.N=n;t:if(Jm(this)){var r=td(this.g);t="";var s=r.length,i=ln(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Qn(this),Ps(this);var o="";break t}this.h.i=new X.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,JS(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!vo(a)){var u=a;break t}}u=null}if(n=u)Rr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,iu(this,n);else{this.i=!1,this.o=3,pt(12),Qn(this),Ps(this);break e}}this.U?(ey(this,l,o),Qc&&this.i&&l==3&&(Hm(this.V,this.W,"tick",this.fb),this.W.start())):(Rr(this.j,this.m,o,null),iu(this,o)),l==4&&Qn(this),this.i&&!this.I&&(l==4?Ey(this.l,this):(this.i=!1,Ei(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,pt(12)):(this.o=0,pt(13)),Qn(this),Ps(this)}}}catch{}finally{}};function Jm(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function ey(t,e,n){let r=!0,s;for(;!t.I&&t.C<n.length;)if(s=rC(t,n),s==wo){e==4&&(t.o=4,pt(14),r=!1),Rr(t.j,t.m,null,"[Incomplete Response]");break}else if(s==ru){t.o=4,pt(15),Rr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Rr(t.j,t.m,s,null),iu(t,s);Jm(t)&&s!=wo&&s!=ru&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,pt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),xl(e),e.L=!0,pt(11))):(Rr(t.j,t.m,n,"[Invalid Chunked Response]"),Qn(t),Ps(t))}M.fb=function(){if(this.g){var t=ln(this.g),e=this.g.ga();this.C<e.length&&(wa(this),ey(this,t,e),this.i&&t!=4&&Ei(this))}};function rC(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?wo:(n=Number(e.substring(n,r)),isNaN(n)?ru:(r+=1,r+n>e.length?wo:(e=e.substr(r,n),t.C=r+n,e)))}M.cancel=function(){this.I=!0,Qn(this)};function Ei(t){t.Y=Date.now()+t.P,ty(t,t.P)}function ty(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=vi(Je(t.eb,t),e)}function wa(t){t.B&&(X.clearTimeout(t.B),t.B=null)}M.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(eC(this.j,this.A),this.K!=2&&(ei(3),pt(17)),Qn(this),this.o=2,Ps(this)):ty(this,this.Y-t)};function Ps(t){t.l.G==0||t.I||Ey(t.l,t)}function Qn(t){wa(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,_l(t.W),qm(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function iu(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||ou(n.i,t))){if(n.I=t.N,!t.J&&ou(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)To(n),Ta(n);else break e;Nl(n),pt(18)}}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&n.A==0&&!n.v&&(n.v=vi(Je(n.ab,n),6e3));if(1>=cy(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Yn(n,11)}else if((t.J||n.g==t)&&To(n),!vo(e))for(s=n.Ca.g.parse(e),e=0;e<s.length;e++){let u=s[e];if(n.U=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.J=u[1],n.la=u[2];const l=u[3];l!=null&&(n.ma=l,n.h.info("VER="+n.ma));const h=u[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const d=t.g;if(d){const g=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var i=r.i;!i.g&&(ft(g,"spdy")||ft(g,"quic")||ft(g,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(Sl(i,i.h),i.h=null))}if(r.D){const v=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.sa=v,Oe(r.F,r.D,v))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=Ty(r,r.H?r.la:null,r.W),o.J){uy(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(wa(a),Ei(a)),r.g=o}else _y(r);0<n.l.length&&Aa(n)}else u[0]!="stop"&&u[0]!="close"||Yn(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Yn(n,7):Rl(n):u[0]!="noop"&&n.j&&n.j.wa(u),n.A=0)}}ei(4)}catch{}}function sC(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(Xc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function Tl(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Xc(t)||typeof t=="string")Rm(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(Xc(t)||typeof t=="string"){n=[];for(var r=t.length,s=0;s<r;s++)n.push(s)}else for(s in n=[],r=0,t)n[r++]=s;r=sC(t),s=r.length;for(var i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}}function cs(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof cs)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}M=cs.prototype;M.R=function(){Al(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};M.T=function(){return Al(this),this.g.concat()};function Al(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];ar(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var s={};for(n=e=0;e<t.g.length;)r=t.g[e],ar(s,r)||(t.g[n++]=r,s[r]=1),e++;t.g.length=n}}M.get=function(t,e){return ar(this.h,t)?this.h[t]:e};M.set=function(t,e){ar(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};M.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var s=n[r],i=this.get(s);t.call(e,i,s,this)}};function ar(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var ny=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function iC(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function cr(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof cr){this.g=e!==void 0?e:t.g,Eo(this,t.j),this.s=t.s,bo(this,t.i),Io(this,t.m),this.l=t.l,e=t.h;var n=new ti;n.i=e.i,e.g&&(n.g=new cs(e.g),n.h=e.h),Zf(this,n),this.o=t.o}else t&&(n=String(t).match(ny))?(this.g=!!e,Eo(this,n[1]||"",!0),this.s=Ms(n[2]||""),bo(this,n[3]||"",!0),Io(this,n[4]),this.l=Ms(n[5]||"",!0),Zf(this,n[6]||"",!0),this.o=Ms(n[7]||"")):(this.g=!!e,this.h=new ti(null,this.g))}cr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(As(e,Jf,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(As(e,Jf,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(As(n,n.charAt(0)=="/"?lC:uC,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",As(n,fC)),t.join("")};function mn(t){return new cr(t)}function Eo(t,e,n){t.j=n?Ms(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function bo(t,e,n){t.i=n?Ms(e,!0):e}function Io(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Zf(t,e,n){e instanceof ti?(t.h=e,dC(t.h,t.g)):(n||(e=As(e,hC)),t.h=new ti(e,t.g))}function Oe(t,e,n){t.h.set(e,n)}function Ea(t){return Oe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function oC(t){return t instanceof cr?mn(t):new cr(t,void 0)}function aC(t,e,n,r){var s=new cr(null,void 0);return t&&Eo(s,t),e&&bo(s,e),n&&Io(s,n),r&&(s.l=r),s}function Ms(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function As(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,cC),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function cC(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Jf=/[#\/\?@]/g,uC=/[#\?:]/g,lC=/[#\?]/g,hC=/[#\?@]/g,fC=/#/g;function ti(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Vn(t){t.g||(t.g=new cs,t.h=0,t.i&&iC(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}M=ti.prototype;M.add=function(t,e){Vn(this),this.i=null,t=us(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function ry(t,e){Vn(t),e=us(t,e),ar(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,ar(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Al(t)))}function sy(t,e){return Vn(t),e=us(t,e),ar(t.g.h,e)}M.forEach=function(t,e){Vn(this),this.g.forEach(function(n,r){Rm(n,function(s){t.call(e,s,r,this)},this)},this)};M.T=function(){Vn(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var s=t[r],i=0;i<s.length;i++)n.push(e[r]);return n};M.R=function(t){Vn(this);var e=[];if(typeof t=="string")sy(this,t)&&(e=zf(e,this.g.get(us(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=zf(e,t[n])}return e};M.set=function(t,e){return Vn(this),this.i=null,t=us(this,t),sy(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};M.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function iy(t,e,n){ry(t,e),0<n.length&&(t.i=null,t.g.set(us(t,e),ll(n)),t.h+=n.length)}M.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],s=encodeURIComponent(String(r));r=this.R(r);for(var i=0;i<r.length;i++){var o=s;r[i]!==""&&(o+="="+encodeURIComponent(String(r[i]))),t.push(o)}}return this.i=t.join("&")};function us(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function dC(t,e){e&&!t.j&&(Vn(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(ry(this,r),iy(this,s,n))},t)),t.j=e}var pC=class{constructor(t,e){this.h=t,this.g=e}};function oy(t){this.l=t||gC,X.PerformanceNavigationTiming?(t=X.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(X.g&&X.g.Ea&&X.g.Ea()&&X.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var gC=10;function ay(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function cy(t){return t.h?1:t.g?t.g.size:0}function ou(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Sl(t,e){t.g?t.g.add(e):t.h=e}function uy(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}oy.prototype.cancel=function(){if(this.i=ly(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function ly(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return ll(t.i)}function Cl(){}Cl.prototype.stringify=function(t){return X.JSON.stringify(t,void 0)};Cl.prototype.parse=function(t){return X.JSON.parse(t,void 0)};function mC(){this.g=new Cl}function yC(t,e,n){const r=n||"";try{Tl(t,function(s,i){let o=s;mi(s)&&(o=yl(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function vC(t,e){const n=new ma;if(X.Image){const r=new Image;r.onload=Fi(Bi,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Fi(Bi,n,r,"TestLoadImage: error",!1,e),r.onabort=Fi(Bi,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Fi(Bi,n,r,"TestLoadImage: timeout",!1,e),X.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Bi(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function bi(t){this.l=t.$b||null,this.j=t.ib||!1}st(bi,El);bi.prototype.g=function(){return new ba(this.l,this.j)};bi.prototype.i=function(t){return function(){return t}}({});function ba(t,e){We.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=kl,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}st(ba,We);var kl=0;M=ba.prototype;M.open=function(t,e){if(this.readyState!=kl)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ni(this)};M.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||X).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};M.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ii(this)),this.readyState=kl};M.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ni(this)),this.g&&(this.readyState=3,ni(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof X.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;hy(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function hy(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}M.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ii(this):ni(this),this.readyState==3&&hy(this)}};M.Ua=function(t){this.g&&(this.response=this.responseText=t,Ii(this))};M.Ta=function(t){this.g&&(this.response=t,Ii(this))};M.ha=function(){this.g&&Ii(this)};function Ii(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ni(t)}M.setRequestHeader=function(t,e){this.v.append(t,e)};M.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};M.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ni(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ba.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var _C=X.JSON.parse;function je(t){We.call(this),this.headers=new cs,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=fy,this.K=this.L=!1}st(je,We);var fy="",wC=/^https?$/i,EC=["POST","PUT"];M=je.prototype;M.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():nu.g(),this.C=this.u?Yf(this.u):Yf(nu),this.g.onreadystatechange=Je(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){ed(this,i);return}t=n||"";const s=new cs(this.headers);r&&Tl(r,function(i,o){s.set(o,i)}),r=xS(s.T()),n=X.FormData&&t instanceof X.FormData,!(0<=Dm(EC,e))||r||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{gy(this),0<this.B&&((this.K=bC(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Je(this.pa,this)):this.A=wl(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){ed(this,i)}};function bC(t){return Wr&&FS()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function IC(t){return t.toLowerCase()=="content-type"}M.pa=function(){typeof ul!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,et(this,"timeout"),this.abort(8))};function ed(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,dy(t),Ia(t)}function dy(t){t.D||(t.D=!0,et(t,"complete"),et(t,"error"))}M.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,et(this,"complete"),et(this,"abort"),Ia(this))};M.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ia(this,!0)),je.Z.M.call(this)};M.Fa=function(){this.s||(this.F||this.v||this.l?py(this):this.cb())};M.cb=function(){py(this)};function py(t){if(t.h&&typeof ul!="undefined"&&(!t.C[1]||ln(t)!=4||t.ba()!=2)){if(t.v&&ln(t)==4)wl(t.Fa,0,t);else if(et(t,"readystatechange"),ln(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var s=String(t.H).match(ny)[1]||null;if(!s&&X.self&&X.self.location){var i=X.self.location.protocol;s=i.substr(0,i.length-1)}r=!wC.test(s?s.toLowerCase():"")}n=r}if(n)et(t,"complete"),et(t,"success");else{t.m=6;try{var o=2<ln(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",dy(t)}}finally{Ia(t)}}}}function Ia(t,e){if(t.g){gy(t);const n=t.g,r=t.C[0]?yo:null;t.g=null,t.C=null,e||et(t,"ready");try{n.onreadystatechange=r}catch{}}}function gy(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(X.clearTimeout(t.A),t.A=null)}function ln(t){return t.g?t.g.readyState:0}M.ba=function(){try{return 2<ln(this)?this.g.status:-1}catch{return-1}};M.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};M.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),_C(e)}};function td(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case fy:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}M.Da=function(){return this.m};M.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function TC(t){let e="";return hl(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Dl(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=TC(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Oe(t,e,n))}function Es(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function my(t){this.za=0,this.l=[],this.h=new ma,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Es("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Es("baseRetryDelayMs",5e3,t),this.$a=Es("retryDelaySeedMs",1e4,t),this.Ya=Es("forwardChannelMaxRetries",2,t),this.ra=Es("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new oy(t&&t.concurrentRequestLimit),this.Ca=new mC,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}M=my.prototype;M.ma=8;M.G=1;function Rl(t){if(yy(t),t.G==3){var e=t.V++,n=mn(t.F);Oe(n,"SID",t.J),Oe(n,"RID",e),Oe(n,"TYPE","terminate"),Ti(t,n),e=new wi(t,t.h,e,void 0),e.K=2,e.v=Ea(mn(n)),n=!1,X.navigator&&X.navigator.sendBeacon&&(n=X.navigator.sendBeacon(e.v.toString(),"")),!n&&X.Image&&(new Image().src=e.v,n=!0),n||(e.g=Ay(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Ei(e)}Iy(t)}M.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function Ta(t){t.g&&(xl(t),t.g.cancel(),t.g=null)}function yy(t){Ta(t),t.u&&(X.clearTimeout(t.u),t.u=null),To(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&X.clearTimeout(t.m),t.m=null)}function dc(t,e){t.l.push(new pC(t.Za++,e)),t.G==3&&Aa(t)}function Aa(t){ay(t.i)||t.m||(t.m=!0,vl(t.Ha,t),t.C=0)}function AC(t,e){return cy(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=vi(Je(t.Ha,t,e),by(t,t.C)),t.C++,!0)}M.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new wi(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=Nm(i),xm(i,this.P)):i=this.P),this.o===null&&(s.H=i),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=vy(this,s,e),n=mn(this.F),Oe(n,"RID",t),Oe(n,"CVER",22),this.D&&Oe(n,"X-HTTP-Session-Id",this.D),Ti(this,n),this.o&&i&&Dl(n,this.o,i),Sl(this.i,s),this.Ra&&Oe(n,"TYPE","init"),this.ja?(Oe(n,"$req",e),Oe(n,"SID","null"),s.$=!0,su(s,n,null)):su(s,n,e),this.G=2}}else this.G==3&&(t?nd(this,t):this.l.length==0||ay(this.i)||nd(this))};function nd(t,e){var n;e?n=e.m:n=t.V++;const r=mn(t.F);Oe(r,"SID",t.J),Oe(r,"RID",n),Oe(r,"AID",t.U),Ti(t,r),t.o&&t.s&&Dl(r,t.o,t.s),n=new wi(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=vy(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Sl(t.i,n),su(n,r,e)}function Ti(t,e){t.j&&Tl({},function(n,r){Oe(e,r,n)})}function vy(t,e,n){n=Math.min(t.l.length,n);var r=t.j?Je(t.j.Oa,t.j,t):null;e:{var s=t.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=s[c].h;const l=s[c].g;if(u-=i,0>u)i=Math.max(0,s[c].h-100),a=!1;else try{yC(l,o,"req"+u+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function _y(t){t.g||t.u||(t.Y=1,vl(t.Ga,t),t.A=0)}function Nl(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=vi(Je(t.Ga,t),by(t,t.A)),t.A++,!0)}M.Ga=function(){if(this.u=null,wy(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=vi(Je(this.bb,this),t)}};M.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,pt(10),Ta(this),wy(this))};function xl(t){t.B!=null&&(X.clearTimeout(t.B),t.B=null)}function wy(t){t.g=new wi(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=mn(t.oa);Oe(e,"RID","rpc"),Oe(e,"SID",t.J),Oe(e,"CI",t.N?"0":"1"),Oe(e,"AID",t.U),Ti(t,e),Oe(e,"TYPE","xmlhttp"),t.o&&t.s&&Dl(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Ea(mn(e)),n.s=null,n.U=!0,Zm(n,t)}M.ab=function(){this.v!=null&&(this.v=null,Ta(this),Nl(this),pt(19))};function To(t){t.v!=null&&(X.clearTimeout(t.v),t.v=null)}function Ey(t,e){var n=null;if(t.g==e){To(t),xl(t),t.g=null;var r=2}else if(ou(t.i,e))n=e.D,uy(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;r=ya(),et(r,new Gm(r,n,e,s)),Aa(t)}else _y(t);else if(s=e.o,s==3||s==0&&0<t.I||!(r==1&&AC(t,e)||r==2&&Nl(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:Yn(t,5);break;case 4:Yn(t,10);break;case 3:Yn(t,6);break;default:Yn(t,2)}}}function by(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Yn(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=Je(t.jb,t);n||(n=new cr("//www.google.com/images/cleardot.gif"),X.location&&X.location.protocol=="http"||Eo(n,"https"),Ea(n)),vC(n.toString(),r)}else pt(2);t.G=0,t.j&&t.j.va(e),Iy(t),yy(t)}M.jb=function(t){t?(this.h.info("Successfully pinged google.com"),pt(2)):(this.h.info("Failed to ping google.com"),pt(1))};function Iy(t){t.G=0,t.I=-1,t.j&&((ly(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,ll(t.l),t.l.length=0),t.j.ua())}function Ty(t,e,n){let r=oC(n);if(r.i!="")e&&bo(r,e+"."+r.i),Io(r,r.m);else{const s=X.location;r=aC(s.protocol,e?e+"."+s.hostname:s.hostname,+s.port,n)}return t.aa&&hl(t.aa,function(s,i){Oe(r,i,s)}),e=t.D,n=t.sa,e&&n&&Oe(r,e,n),Oe(r,"VER",t.ma),Ti(t,r),r}function Ay(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new je(new bi({ib:!0})):new je(t.qa),e.L=t.H,e}function Sy(){}M=Sy.prototype;M.xa=function(){};M.wa=function(){};M.va=function(){};M.ua=function(){};M.Oa=function(){};function Ao(){if(Wr&&!(10<=Number(US)))throw Error("Environmental error: no available transport.")}Ao.prototype.g=function(t,e){return new Dt(t,e)};function Dt(t,e){We.call(this),this.g=new my(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!vo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!vo(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ls(this)}st(Dt,We);Dt.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),vl(Je(t.hb,t,e))),pt(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Ty(t,null,t.W),Aa(t)};Dt.prototype.close=function(){Rl(this.g)};Dt.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,dc(this.g,e)}else this.v?(e={},e.__data__=yl(t),dc(this.g,e)):dc(this.g,t)};Dt.prototype.M=function(){this.g.j=null,delete this.j,Rl(this.g),delete this.g,Dt.Z.M.call(this)};function Cy(t){bl.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}st(Cy,bl);function ky(){Il.call(this),this.status=1}st(ky,Il);function ls(t){this.g=t}st(ls,Sy);ls.prototype.xa=function(){et(this.g,"a")};ls.prototype.wa=function(t){et(this.g,new Cy(t))};ls.prototype.va=function(t){et(this.g,new ky(t))};ls.prototype.ua=function(){et(this.g,"b")};Ao.prototype.createWebChannel=Ao.prototype.g;Dt.prototype.send=Dt.prototype.u;Dt.prototype.open=Dt.prototype.m;Dt.prototype.close=Dt.prototype.close;va.NO_ERROR=0;va.TIMEOUT=8;va.HTTP_ERROR=6;Xm.COMPLETE="complete";Qm.EventType=_i;_i.OPEN="a";_i.CLOSE="b";_i.ERROR="c";_i.MESSAGE="d";We.prototype.listen=We.prototype.N;je.prototype.listenOnce=je.prototype.O;je.prototype.getLastError=je.prototype.La;je.prototype.getLastErrorCode=je.prototype.Da;je.prototype.getStatus=je.prototype.ba;je.prototype.getResponseJson=je.prototype.Qa;je.prototype.getResponseText=je.prototype.ga;je.prototype.send=je.prototype.ea;var SC=function(){return new Ao},CC=function(){return ya()},pc=va,kC=Xm,DC=vr,rd={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},RC=bi,Vi=Qm,NC=je;const sd="@firebase/firestore";/**
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
 */let hs="9.6.11";/**
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
 */const ur=new ia("@firebase/firestore");function id(){return ur.logLevel}function V(t,...e){if(ur.logLevel<=de.DEBUG){const n=e.map(Ol);ur.debug(`Firestore (${hs}): ${t}`,...n)}}function Ln(t,...e){if(ur.logLevel<=de.ERROR){const n=e.map(Ol);ur.error(`Firestore (${hs}): ${t}`,...n)}}function od(t,...e){if(ur.logLevel<=de.WARN){const n=e.map(Ol);ur.warn(`Firestore (${hs}): ${t}`,...n)}}function Ol(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function J(t="Unexpected state"){const e=`FIRESTORE (${hs}) INTERNAL ASSERTION FAILED: `+t;throw Ln(e),new Error(e)}function ke(t,e){t||J()}function ee(t,e){return t}/**
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
 */const A={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends vn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class rr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class xC{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class OC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(mt.UNAUTHENTICATED))}shutdown(){}}class PC{constructor(e){this.t=e,this.currentUser=mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new rr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new rr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new rr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ke(typeof r.accessToken=="string"),new xC(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ke(e===null||typeof e=="string"),new mt(e)}}class MC{constructor(e,n,r){this.type="FirstParty",this.user=mt.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const s=e.auth.getAuthHeaderValueForFirstParty([]);s&&this.headers.set("Authorization",s),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class LC{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new MC(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(mt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class FC{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class UC{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const r=i=>{i.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.p;return this.p=i.token,V("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.g.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.g.getImmediate({optional:!0});i?s(i):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ke(typeof n.token=="string"),this.p=n.token,new FC(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */class Pl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.I(r),this.T=r=>n.writeSequenceNumber(r))}I(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BC(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */Pl.A=-1;class Dy{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=BC(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ge(t,e){return t<e?-1:t>e?1:0}function Gr(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class ut{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new K(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new K(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new K(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ut.fromMillis(Date.now())}static fromDate(e){return ut.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ut(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ge(this.nanoseconds,e.nanoseconds):ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class re{constructor(e){this.timestamp=e}static fromTimestamp(e){return new re(e)}static min(){return new re(new ut(0,0))}static max(){return new re(new ut(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */function ad(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function fs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ry(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class ri{constructor(e,n,r){n===void 0?n=0:n>e.length&&J(),r===void 0?r=e.length-n:r>e.length-n&&J(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ri.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ri?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Pe extends ri{construct(e,n,r){return new Pe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new K(A.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Pe(n)}static emptyPath(){return new Pe([])}}const VC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class yt extends ri{construct(e,n,r){return new yt(e,n,r)}static isValidIdentifier(e){return VC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),yt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new yt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new K(A.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new K(A.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new K(A.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new K(A.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new yt(n)}static emptyPath(){return new yt([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(e){this.fields=e,e.sort(yt.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Gr(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new rt(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new rt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}rt.EMPTY_BYTE_STRING=new rt("");const $C=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Fn(t){if(ke(!!t),typeof t=="string"){let e=0;const n=$C.exec(t);if(ke(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ue(t.seconds),nanos:Ue(t.nanos)}}function Ue(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Xr(t){return typeof t=="string"?rt.fromBase64String(t):rt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ny(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function xy(t){const e=t.mapValue.fields.__previous_value__;return Ny(e)?xy(e):e}function si(t){const e=Fn(t.mapValue.fields.__local_write_time__.timestampValue);return new ut(e.seconds,e.nanos)}/**
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
 */class jC{constructor(e,n,r,s,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Qr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Qr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Qr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function ds(t){return t==null}function So(t){return t===0&&1/t==-1/0}function zC(t){return typeof t=="number"&&Number.isInteger(t)&&!So(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(Pe.fromString(e))}static fromName(e){return new q(Pe.fromString(e).popFirst(5))}static empty(){return new q(Pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Pe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new Pe(e.slice()))}}function lr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ny(t)?4:HC(t)?9:10:J()}function en(t,e){if(t===e)return!0;const n=lr(t);if(n!==lr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return si(t).isEqual(si(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=Fn(r.timestampValue),o=Fn(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return Xr(r.bytesValue).isEqual(Xr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return Ue(r.geoPointValue.latitude)===Ue(s.geoPointValue.latitude)&&Ue(r.geoPointValue.longitude)===Ue(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return Ue(r.integerValue)===Ue(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=Ue(r.doubleValue),o=Ue(s.doubleValue);return i===o?So(i)===So(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Gr(t.arrayValue.values||[],e.arrayValue.values||[],en);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(ad(i)!==ad(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!en(i[a],o[a])))return!1;return!0}(t,e);default:return J()}}function ii(t,e){return(t.values||[]).find(n=>en(n,e))!==void 0}function Yr(t,e){if(t===e)return 0;const n=lr(t),r=lr(e);if(n!==r)return ge(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ge(t.booleanValue,e.booleanValue);case 2:return function(s,i){const o=Ue(s.integerValue||s.doubleValue),a=Ue(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return cd(t.timestampValue,e.timestampValue);case 4:return cd(si(t),si(e));case 5:return ge(t.stringValue,e.stringValue);case 6:return function(s,i){const o=Xr(s),a=Xr(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=ge(o[c],a[c]);if(u!==0)return u}return ge(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,i){const o=ge(Ue(s.latitude),Ue(i.latitude));return o!==0?o:ge(Ue(s.longitude),Ue(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=Yr(o[c],a[c]);if(u)return u}return ge(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,i){const o=s.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=ge(a[l],u[l]);if(h!==0)return h;const f=Yr(o[a[l]],c[u[l]]);if(f!==0)return f}return ge(a.length,u.length)}(t.mapValue,e.mapValue);default:throw J()}}function cd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ge(t,e);const n=Fn(t),r=Fn(e),s=ge(n.seconds,r.seconds);return s!==0?s:ge(n.nanos,r.nanos)}function Fr(t){return cu(t)}function cu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const s=Fn(r);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Xr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,q.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let s="[",i=!0;for(const o of r.values||[])i?i=!1:s+=",",s+=cu(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(r){const s=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const a of s)o?o=!1:i+=",",i+=`${a}:${cu(r.fields[a])}`;return i+"}"}(t.mapValue):J();var e,n}function uu(t){return!!t&&"integerValue"in t}function Ml(t){return!!t&&"arrayValue"in t}function ud(t){return!!t&&"nullValue"in t}function ld(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Gi(t){return!!t&&"mapValue"in t}function Ls(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return fs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ls(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ls(t.arrayValue.values[n]);return e}return Object.assign({},t)}function HC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class $t{constructor(e){this.value=e}static empty(){return new $t({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Gi(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ls(n)}setAll(e){let n=yt.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Ls(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Gi(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return en(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Gi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){fs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new $t(Ls(this.value))}}function Oy(t){const e=[];return fs(t.fields,(n,r)=>{const s=new yt([n]);if(Gi(r)){const i=Oy(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new au(e)}/**
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
 */class it{constructor(e,n,r,s,i,o){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.data=i,this.documentState=o}static newInvalidDocument(e){return new it(e,0,re.min(),re.min(),$t.empty(),0)}static newFoundDocument(e,n,r){return new it(e,1,n,re.min(),r,0)}static newNoDocument(e,n){return new it(e,2,n,re.min(),$t.empty(),0)}static newUnknownDocument(e,n){return new it(e,3,n,re.min(),$t.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=$t.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=$t.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof it&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new it(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}function qC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=re.fromTimestamp(r===1e9?new ut(n+1,0):new ut(n,r));return new Zr(s,q.empty(),e)}function KC(t){return new Zr(t.readTime,t.key,-1)}class Zr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Zr(re.min(),q.empty(),-1)}static max(){return new Zr(re.max(),q.empty(),-1)}}function WC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:ge(t.largestBatchId,e.largestBatchId))}/**
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
 */class GC{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.P=null}}function hd(t,e=null,n=[],r=[],s=null,i=null,o=null){return new GC(t,e,n,r,s,i,o)}function Ll(t){const e=ee(t);if(e.P===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(s=r).field.canonicalString()+s.op.toString()+Fr(s.value);var s}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),ds(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Fr(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Fr(r)).join(",")),e.P=n}return e.P}function XC(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${Fr(r.value)}`;var r}).join(", ")}]`),ds(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Fr(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Fr(n)).join(",")),`Target(${e})`}function Fl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<t.orderBy.length;s++)if(!r1(t.orderBy[s],e.orderBy[s]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],r=e.filters[s],n.op!==r.op||!n.field.isEqual(r.field)||!en(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!dd(t.startAt,e.startAt)&&dd(t.endAt,e.endAt)}function lu(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class vt extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.V(e,n,r):new QC(e,n,r):n==="array-contains"?new JC(e,r):n==="in"?new e1(e,r):n==="not-in"?new t1(e,r):n==="array-contains-any"?new n1(e,r):new vt(e,n,r)}static V(e,n,r){return n==="in"?new YC(e,r):new ZC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.v(Yr(n,this.value)):n!==null&&lr(this.value)===lr(n)&&this.v(Yr(n,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class QC extends vt{constructor(e,n,r){super(e,n,r),this.key=q.fromName(r.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.v(n)}}class YC extends vt{constructor(e,n){super(e,"in",n),this.keys=Py("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class ZC extends vt{constructor(e,n){super(e,"not-in",n),this.keys=Py("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Py(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>q.fromName(r.referenceValue))}class JC extends vt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ml(n)&&ii(n.arrayValue,this.value)}}class e1 extends vt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ii(this.value.arrayValue,n)}}class t1 extends vt{constructor(e,n){super(e,"not-in",n)}matches(e){if(ii(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ii(this.value.arrayValue,n)}}class n1 extends vt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ml(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ii(this.value.arrayValue,r))}}class Co{constructor(e,n){this.position=e,this.inclusive=n}}class Fs{constructor(e,n="asc"){this.field=e,this.dir=n}}function r1(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function fd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=q.comparator(q.fromName(o.referenceValue),n.key):r=Yr(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function dd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!en(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Sa{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.D=null,this.C=null,this.startAt,this.endAt}}function s1(t,e,n,r,s,i,o,a){return new Sa(t,e,n,r,s,i,o,a)}function Ul(t){return new Sa(t)}function Xi(t){return!ds(t.limit)&&t.limitType==="F"}function ko(t){return!ds(t.limit)&&t.limitType==="L"}function i1(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function o1(t){for(const e of t.filters)if(e.S())return e.field;return null}function a1(t){return t.collectionGroup!==null}function oi(t){const e=ee(t);if(e.D===null){e.D=[];const n=o1(e),r=i1(e);if(n!==null&&r===null)n.isKeyField()||e.D.push(new Fs(n)),e.D.push(new Fs(yt.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.D.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new Fs(yt.keyField(),i))}}}return e.D}function hr(t){const e=ee(t);if(!e.C)if(e.limitType==="F")e.C=hd(e.path,e.collectionGroup,oi(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of oi(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Fs(i.field,o))}const r=e.endAt?new Co(e.endAt.position,!e.endAt.inclusive):null,s=e.startAt?new Co(e.startAt.position,!e.startAt.inclusive):null;e.C=hd(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e.C}function c1(t,e,n){return new Sa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ca(t,e){return Fl(hr(t),hr(e))&&t.limitType===e.limitType}function My(t){return`${Ll(hr(t))}|lt:${t.limitType}`}function hu(t){return`Query(target=${XC(hr(t))}; limitType=${t.limitType})`}function Bl(t,e){return e.isFoundDocument()&&function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):q.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,r){for(const s of n.explicitOrderBy)if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(s,i,o){const a=fd(s,i,o);return s.inclusive?a<=0:a<0}(n.startAt,oi(n),r)||n.endAt&&!function(s,i,o){const a=fd(s,i,o);return s.inclusive?a>=0:a>0}(n.endAt,oi(n),r))}(t,e)}function u1(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Ly(t){return(e,n)=>{let r=!1;for(const s of oi(t)){const i=l1(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function l1(t,e,n){const r=t.field.isKeyField()?q.comparator(e.key,n.key):function(s,i,o){const a=i.data.field(s),c=o.data.field(s);return a!==null&&c!==null?Yr(a,c):J()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return J()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fy(t,e){if(t.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:So(e)?"-0":e}}function Uy(t){return{integerValue:""+t}}function h1(t,e){return zC(e)?Uy(e):Fy(t,e)}/**
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
 */class ka{constructor(){this._=void 0}}function f1(t,e,n){return t instanceof Do?function(r,s){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&(i.fields.__previous_value__=s),{mapValue:i}}(n,e):t instanceof ai?Vy(t,e):t instanceof ci?$y(t,e):function(r,s){const i=By(r,s),o=pd(i)+pd(r.k);return uu(i)&&uu(r.k)?Uy(o):Fy(r.M,o)}(t,e)}function d1(t,e,n){return t instanceof ai?Vy(t,e):t instanceof ci?$y(t,e):n}function By(t,e){return t instanceof Ro?uu(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Do extends ka{}class ai extends ka{constructor(e){super(),this.elements=e}}function Vy(t,e){const n=jy(e);for(const r of t.elements)n.some(s=>en(s,r))||n.push(r);return{arrayValue:{values:n}}}class ci extends ka{constructor(e){super(),this.elements=e}}function $y(t,e){let n=jy(e);for(const r of t.elements)n=n.filter(s=>!en(s,r));return{arrayValue:{values:n}}}class Ro extends ka{constructor(e,n){super(),this.M=e,this.k=n}}function pd(t){return Ue(t.integerValue||t.doubleValue)}function jy(t){return Ml(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function p1(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof ai&&r instanceof ai||n instanceof ci&&r instanceof ci?Gr(n.elements,r.elements,en):n instanceof Ro&&r instanceof Ro?en(n.k,r.k):n instanceof Do&&r instanceof Do}(t.transform,e.transform)}class g1{constructor(e,n){this.version=e,this.transformResults=n}}class Ur{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ur}static exists(e){return new Ur(void 0,e)}static updateTime(e){return new Ur(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Qi(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Da{}function m1(t,e,n){t instanceof Ra?function(r,s,i){const o=r.value.clone(),a=yd(r.fieldTransforms,s,i.transformResults);o.setAll(a),s.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Ai?function(r,s,i){if(!Qi(r.precondition,s))return void s.convertToUnknownDocument(i.version);const o=yd(r.fieldTransforms,s,i.transformResults),a=s.data;a.setAll(zy(r)),a.setAll(o),s.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(r,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function fu(t,e,n){t instanceof Ra?function(r,s,i){if(!Qi(r.precondition,s))return;const o=r.value.clone(),a=vd(r.fieldTransforms,i,s);o.setAll(a),s.convertToFoundDocument(md(s),o).setHasLocalMutations()}(t,e,n):t instanceof Ai?function(r,s,i){if(!Qi(r.precondition,s))return;const o=vd(r.fieldTransforms,i,s),a=s.data;a.setAll(zy(r)),a.setAll(o),s.convertToFoundDocument(md(s),a).setHasLocalMutations()}(t,e,n):function(r,s){Qi(r.precondition,s)&&s.convertToNoDocument(re.min())}(t,e)}function y1(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=By(r.transform,s||null);i!=null&&(n==null&&(n=$t.empty()),n.set(r.field,i))}return n||null}function gd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Gr(n,r,(s,i)=>p1(s,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function md(t){return t.isFoundDocument()?t.version:re.min()}class Ra extends Da{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}}class Ai extends Da{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}}function zy(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function yd(t,e,n){const r=new Map;ke(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,d1(o,a,n[s]))}return r}function vd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,f1(i,o,e))}return r}class v1 extends Da{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class _1 extends Da{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
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
 */class w1{constructor(e){this.count=e}}/**
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
 */var Fe,ce;function E1(t){switch(t){default:return J();case A.CANCELLED:case A.UNKNOWN:case A.DEADLINE_EXCEEDED:case A.RESOURCE_EXHAUSTED:case A.INTERNAL:case A.UNAVAILABLE:case A.UNAUTHENTICATED:return!1;case A.INVALID_ARGUMENT:case A.NOT_FOUND:case A.ALREADY_EXISTS:case A.PERMISSION_DENIED:case A.FAILED_PRECONDITION:case A.ABORTED:case A.OUT_OF_RANGE:case A.UNIMPLEMENTED:case A.DATA_LOSS:return!0}}function Hy(t){if(t===void 0)return Ln("GRPC error has no .code"),A.UNKNOWN;switch(t){case Fe.OK:return A.OK;case Fe.CANCELLED:return A.CANCELLED;case Fe.UNKNOWN:return A.UNKNOWN;case Fe.DEADLINE_EXCEEDED:return A.DEADLINE_EXCEEDED;case Fe.RESOURCE_EXHAUSTED:return A.RESOURCE_EXHAUSTED;case Fe.INTERNAL:return A.INTERNAL;case Fe.UNAVAILABLE:return A.UNAVAILABLE;case Fe.UNAUTHENTICATED:return A.UNAUTHENTICATED;case Fe.INVALID_ARGUMENT:return A.INVALID_ARGUMENT;case Fe.NOT_FOUND:return A.NOT_FOUND;case Fe.ALREADY_EXISTS:return A.ALREADY_EXISTS;case Fe.PERMISSION_DENIED:return A.PERMISSION_DENIED;case Fe.FAILED_PRECONDITION:return A.FAILED_PRECONDITION;case Fe.ABORTED:return A.ABORTED;case Fe.OUT_OF_RANGE:return A.OUT_OF_RANGE;case Fe.UNIMPLEMENTED:return A.UNIMPLEMENTED;case Fe.DATA_LOSS:return A.DATA_LOSS;default:return J()}}(ce=Fe||(Fe={}))[ce.OK=0]="OK",ce[ce.CANCELLED=1]="CANCELLED",ce[ce.UNKNOWN=2]="UNKNOWN",ce[ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ce[ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ce[ce.NOT_FOUND=5]="NOT_FOUND",ce[ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",ce[ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",ce[ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",ce[ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ce[ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ce[ce.ABORTED=10]="ABORTED",ce[ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",ce[ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",ce[ce.INTERNAL=13]="INTERNAL",ce[ce.UNAVAILABLE=14]="UNAVAILABLE",ce[ce.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class ps{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){fs(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Ry(this.inner)}size(){return this.innerSize}}/**
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
 */class Ge{constructor(e,n){this.comparator=e,this.root=n||Ye.EMPTY}insert(e,n){return new Ge(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ye.BLACK,null,null))}remove(e){return new Ge(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ye.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new $i(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new $i(this.root,e,this.comparator,!1)}getReverseIterator(){return new $i(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new $i(this.root,e,this.comparator,!0)}}class $i{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ye{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r!=null?r:Ye.RED,this.left=s!=null?s:Ye.EMPTY,this.right=i!=null?i:Ye.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Ye(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,s!=null?s:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ye.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ye.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw J();const e=this.left.check();if(e!==this.right.check())throw J();return e+(this.isRed()?0:1)}}Ye.EMPTY=null,Ye.RED=!0,Ye.BLACK=!1;Ye.EMPTY=new class{constructor(){this.size=0}get key(){throw J()}get value(){throw J()}get color(){throw J()}get left(){throw J()}get right(){throw J()}copy(t,e,n,r,s){return this}insert(t,e,n){return new Ye(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class tt{constructor(e){this.comparator=e,this.data=new Ge(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new _d(this.data.getIterator())}getIteratorFrom(e){return new _d(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof tt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new tt(this.comparator);return n.data=e,n}}class _d{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */const b1=new Ge(q.comparator);function fr(){return b1}const I1=new Ge(q.comparator);function du(){return I1}function gc(){return new ps(t=>t.toString(),(t,e)=>t.isEqual(e))}const T1=new Ge(q.comparator),A1=new tt(q.comparator);function Ne(...t){let e=A1;for(const n of t)e=e.add(n);return e}const S1=new tt(ge);function qy(){return S1}/**
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
 */class Na{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,Si.createSynthesizedTargetChangeForCurrentChange(e,n)),new Na(re.min(),r,qy(),fr(),Ne())}}class Si{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Si(rt.EMPTY_BYTE_STRING,n,Ne(),Ne(),Ne())}}/**
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
 */class Yi{constructor(e,n,r,s){this.O=e,this.removedTargetIds=n,this.key=r,this.F=s}}class Ky{constructor(e,n){this.targetId=e,this.$=n}}class Wy{constructor(e,n,r=rt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class wd{constructor(){this.B=0,this.L=bd(),this.U=rt.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return this.B!==0}get j(){return this.K}W(e){e.approximateByteSize()>0&&(this.K=!0,this.U=e)}H(){let e=Ne(),n=Ne(),r=Ne();return this.L.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:J()}}),new Si(this.U,this.q,e,n,r)}J(){this.K=!1,this.L=bd()}Y(e,n){this.K=!0,this.L=this.L.insert(e,n)}X(e){this.K=!0,this.L=this.L.remove(e)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class C1{constructor(e){this.nt=e,this.st=new Map,this.it=fr(),this.rt=Ed(),this.ot=new tt(ge)}ut(e){for(const n of e.O)e.F&&e.F.isFoundDocument()?this.at(n,e.F):this.ct(n,e.key,e.F);for(const n of e.removedTargetIds)this.ct(n,e.key,e.F)}ht(e){this.forEachTarget(e,n=>{const r=this.lt(n);switch(e.state){case 0:this.ft(n)&&r.W(e.resumeToken);break;case 1:r.tt(),r.G||r.J(),r.W(e.resumeToken);break;case 2:r.tt(),r.G||this.removeTarget(n);break;case 3:this.ft(n)&&(r.et(),r.W(e.resumeToken));break;case 4:this.ft(n)&&(this.dt(n),r.W(e.resumeToken));break;default:J()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.st.forEach((r,s)=>{this.ft(s)&&n(s)})}_t(e){const n=e.targetId,r=e.$.count,s=this.wt(n);if(s){const i=s.target;if(lu(i))if(r===0){const o=new q(i.path);this.ct(n,o,it.newNoDocument(o,re.min()))}else ke(r===1);else this.gt(n)!==r&&(this.dt(n),this.ot=this.ot.add(n))}}yt(e){const n=new Map;this.st.forEach((i,o)=>{const a=this.wt(o);if(a){if(i.current&&lu(a.target)){const c=new q(a.target.path);this.it.get(c)!==null||this.It(o,c)||this.ct(o,c,it.newNoDocument(c,e))}i.j&&(n.set(o,i.H()),i.J())}});let r=Ne();this.rt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.wt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(i))}),this.it.forEach((i,o)=>o.setReadTime(e));const s=new Na(e,n,this.ot,this.it,r);return this.it=fr(),this.rt=Ed(),this.ot=new tt(ge),s}at(e,n){if(!this.ft(e))return;const r=this.It(e,n.key)?2:0;this.lt(e).Y(n.key,r),this.it=this.it.insert(n.key,n),this.rt=this.rt.insert(n.key,this.Tt(n.key).add(e))}ct(e,n,r){if(!this.ft(e))return;const s=this.lt(e);this.It(e,n)?s.Y(n,1):s.X(n),this.rt=this.rt.insert(n,this.Tt(n).delete(e)),r&&(this.it=this.it.insert(n,r))}removeTarget(e){this.st.delete(e)}gt(e){const n=this.lt(e).H();return this.nt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Z(e){this.lt(e).Z()}lt(e){let n=this.st.get(e);return n||(n=new wd,this.st.set(e,n)),n}Tt(e){let n=this.rt.get(e);return n||(n=new tt(ge),this.rt=this.rt.insert(e,n)),n}ft(e){const n=this.wt(e)!==null;return n||V("WatchChangeAggregator","Detected inactive target",e),n}wt(e){const n=this.st.get(e);return n&&n.G?null:this.nt.Et(e)}dt(e){this.st.set(e,new wd),this.nt.getRemoteKeysForTarget(e).forEach(n=>{this.ct(e,n,null)})}It(e,n){return this.nt.getRemoteKeysForTarget(e).has(n)}}function Ed(){return new Ge(q.comparator)}function bd(){return new Ge(q.comparator)}/**
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
 */const k1=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),D1=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class R1{constructor(e,n){this.databaseId=e,this.N=n}}function No(t,e){return t.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Gy(t,e){return t.N?e.toBase64():e.toUint8Array()}function N1(t,e){return No(t,e.toTimestamp())}function dn(t){return ke(!!t),re.fromTimestamp(function(e){const n=Fn(e);return new ut(n.seconds,n.nanos)}(t))}function Vl(t,e){return function(n){return new Pe(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Xy(t){const e=Pe.fromString(t);return ke(Zy(e)),e}function pu(t,e){return Vl(t.databaseId,e.path)}function mc(t,e){const n=Xy(e);if(n.get(1)!==t.databaseId.projectId)throw new K(A.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new K(A.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(Qy(n))}function gu(t,e){return Vl(t.databaseId,e)}function x1(t){const e=Xy(t);return e.length===4?Pe.emptyPath():Qy(e)}function mu(t){return new Pe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Qy(t){return ke(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Id(t,e,n){return{name:pu(t,e),fields:n.value.mapValue.fields}}function O1(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:J()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,u){return c.N?(ke(u===void 0||typeof u=="string"),rt.fromBase64String(u||"")):(ke(u===void 0||u instanceof Uint8Array),rt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?A.UNKNOWN:Hy(c.code);return new K(u,c.message||"")}(o);n=new Wy(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=mc(t,r.document.name),i=dn(r.document.updateTime),o=new $t({mapValue:{fields:r.document.fields}}),a=it.newFoundDocument(s,i,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new Yi(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=mc(t,r.document),i=r.readTime?dn(r.readTime):re.min(),o=it.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Yi([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=mc(t,r.document),i=r.removedTargetIds||[];n=new Yi([],i,s,null)}else{if(!("filter"in e))return J();{e.filter;const r=e.filter;r.targetId;const s=r.count||0,i=new w1(s),o=r.targetId;n=new Ky(o,i)}}return n}function P1(t,e){let n;if(e instanceof Ra)n={update:Id(t,e.key,e.value)};else if(e instanceof v1)n={delete:pu(t,e.key)};else if(e instanceof Ai)n={update:Id(t,e.key,e.data),updateMask:H1(e.fieldMask)};else{if(!(e instanceof _1))return J();n={verify:pu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof Do)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ai)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ci)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Ro)return{fieldPath:i.field.canonicalString(),increment:o.k};throw J()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:N1(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:J()}(t,e.precondition)),n}function M1(t,e){return t&&t.length>0?(ke(e!==void 0),t.map(n=>function(r,s){let i=r.updateTime?dn(r.updateTime):dn(s);return i.isEqual(re.min())&&(i=dn(s)),new g1(i,r.transformResults||[])}(n,e))):[]}function L1(t,e){return{documents:[gu(t,e.path)]}}function F1(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=gu(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=gu(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length===0)return;const u=c.map(l=>function(h){if(h.op==="=="){if(ld(h.value))return{unaryFilter:{field:Ar(h.field),op:"IS_NAN"}};if(ud(h.value))return{unaryFilter:{field:Ar(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(ld(h.value))return{unaryFilter:{field:Ar(h.field),op:"IS_NOT_NAN"}};if(ud(h.value))return{unaryFilter:{field:Ar(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ar(h.field),op:$1(h.op),value:h.value}}}(l));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:Ar(l.field),direction:V1(l.dir)}}(u))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,u){return c.N||ds(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function U1(t){let e=x1(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ke(r===1);const l=n.from[0];l.allDescendants?s=l.collectionId:e=e.child(l.collectionId)}let i=[];n.where&&(i=Yy(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new Fs(Nr(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,ds(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(l){const h=!!l.before,f=l.values||[];return new Co(f,h)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const h=!l.before,f=l.values||[];return new Co(f,h)}(n.endAt)),s1(e,s,o,i,a,"F",c,u)}function B1(t,e){const n=function(r,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return J()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Yy(t){return t?t.unaryFilter!==void 0?[z1(t)]:t.fieldFilter!==void 0?[j1(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Yy(e)).reduce((e,n)=>e.concat(n)):J():[]}function V1(t){return k1[t]}function $1(t){return D1[t]}function Ar(t){return{fieldPath:t.canonicalString()}}function Nr(t){return yt.fromServerFormat(t.fieldPath)}function j1(t){return vt.create(Nr(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return J()}}(t.fieldFilter.op),t.fieldFilter.value)}function z1(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Nr(t.unaryFilter.field);return vt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Nr(t.unaryFilter.field);return vt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Nr(t.unaryFilter.field);return vt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Nr(t.unaryFilter.field);return vt.create(s,"!=",{nullValue:"NULL_VALUE"});default:return J()}}function H1(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Zy(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class K1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&J(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new k((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof k?n:k.resolve(n)}catch(n){return k.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):k.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):k.reject(n)}static resolve(e){return new k((n,r)=>{n(e)})}static reject(e){return new k((n,r)=>{r(e)})}static waitFor(e){return new k((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=k.resolve(!1);for(const r of e)n=n.next(s=>s?k.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}}function Ci(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class W1{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&m1(i,e,r[s])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&fu(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&fu(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const r=e.get(n.key),s=r;this.applyToLocalView(s),r.isValidDocument()||s.convertToNoDocument(re.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ne())}isEqual(e){return this.batchId===e.batchId&&Gr(this.mutations,e.mutations,(n,r)=>gd(n,r))&&Gr(this.baseMutations,e.baseMutations,(n,r)=>gd(n,r))}}class $l{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ke(e.mutations.length===r.length);let s=T1;const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new $l(e,n,r,s)}}/**
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
 */class G1{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class sr{constructor(e,n,r,s,i=re.min(),o=re.min(),a=rt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new sr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new sr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new sr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class X1{constructor(e){this.Jt=e}}function Q1(t){const e=U1({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?c1(e,e.limit,"L"):e}/**
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
 */class Y1{constructor(){this.qe=new Z1}addToCollectionParentIndex(e,n){return this.qe.add(n),k.resolve()}getCollectionParents(e,n){return k.resolve(this.qe.getEntries(n))}addFieldIndex(e,n){return k.resolve()}deleteFieldIndex(e,n){return k.resolve()}getDocumentsMatchingTarget(e,n){return k.resolve(null)}getFieldIndex(e,n){return k.resolve(null)}getFieldIndexes(e,n){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}updateCollectionGroup(e,n,r){return k.resolve()}updateIndexEntries(e,n){return k.resolve()}}class Z1{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new tt(Pe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new tt(Pe.comparator)).toArray()}}/**
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
 */class Jr{constructor(e){this.mn=e}next(){return this.mn+=2,this.mn}static gn(){return new Jr(0)}static yn(){return new Jr(-1)}}/**
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
 */async function ki(t){if(t.code!==A.FAILED_PRECONDITION||t.message!==q1)throw t;V("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class J1{constructor(){this.changes=new ps(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,it.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?k.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class ek{constructor(e,n,r){this.ds=e,this.Bs=n,this.indexManager=r}Ls(e,n){return this.Bs.getAllMutationBatchesAffectingDocumentKey(e,n).next(r=>this.Us(e,n,r))}Us(e,n,r){return this.ds.getEntry(e,n).next(s=>{for(const i of r)i.applyToLocalView(s);return s})}qs(e,n){e.forEach((r,s)=>{for(const i of n)i.applyToLocalView(s)})}Ks(e,n){return this.ds.getEntries(e,n).next(r=>this.Gs(e,r).next(()=>r))}Gs(e,n){return this.Bs.getAllMutationBatchesAffectingDocumentKeys(e,n).next(r=>this.qs(n,r))}Qs(e,n,r){return function(s){return q.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.js(e,n.path):a1(n)?this.Ws(e,n,r):this.zs(e,n,r)}js(e,n){return this.Ls(e,new q(n)).next(r=>{let s=du();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}Ws(e,n,r){const s=n.collectionGroup;let i=du();return this.indexManager.getCollectionParents(e,s).next(o=>k.forEach(o,a=>{const c=function(u,l){return new Sa(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(s));return this.zs(e,c,r).next(u=>{u.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}zs(e,n,r){let s;return this.ds.getAllFromCollection(e,n.path,r).next(i=>(s=i,this.Bs.getAllMutationBatchesAffectingQuery(e,n))).next(i=>{for(const o of i)for(const a of o.mutations){const c=a.key;let u=s.get(c);u==null&&(u=it.newInvalidDocument(c),s=s.insert(c,u)),fu(a,u,o.localWriteTime),u.isFoundDocument()||(s=s.remove(c))}}).next(()=>(s.forEach((i,o)=>{Bl(n,o)||(s=s.remove(i))}),s))}}/**
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
 */class jl{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Hs=r,this.Js=s}static Ys(e,n){let r=Ne(),s=Ne();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new jl(e,n.fromCache,r,s)}}/**
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
 */class tk{Xs(e){this.Zs=e}Qs(e,n,r,s){return function(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}(n)||r.isEqual(re.min())?this.ti(e,n):this.Zs.Ks(e,s).next(i=>{const o=this.ei(n,i);return(Xi(n)||ko(n))&&this.ni(n.limitType,o,s,r)?this.ti(e,n):(id()<=de.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),hu(n)),this.Zs.Qs(e,n,qC(r,-1)).next(a=>(o.forEach(c=>{a=a.insert(c.key,c)}),a)))})}ei(e,n){let r=new tt(Ly(e));return n.forEach((s,i)=>{Bl(e,i)&&(r=r.add(i))}),r}ni(e,n,r,s){if(r.size!==n.size)return!0;const i=e==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ti(e,n){return id()<=de.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",hu(n)),this.Zs.Qs(e,n,Zr.min())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nk{constructor(e,n,r,s){this.persistence=e,this.si=n,this.M=s,this.ii=new Ge(ge),this.ri=new ps(i=>Ll(i),Fl),this.oi=new Map,this.ui=e.getRemoteDocumentCache(),this.fs=e.getTargetCache(),this._s=e.getBundleCache(),this.ai(r)}ai(e){this.indexManager=this.persistence.getIndexManager(e),this.Bs=this.persistence.getMutationQueue(e,this.indexManager),this.ci=new ek(this.ui,this.Bs,this.indexManager),this.ui.setIndexManager(this.indexManager),this.si.Xs(this.ci)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ii))}}function rk(t,e,n,r){return new nk(t,e,n,r)}async function Jy(t,e){const n=ee(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.Bs.getAllMutationBatches(r).next(i=>(s=i,n.ai(e),n.Bs.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=Ne();for(const u of s){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.ci.Ks(r,c).next(u=>({hi:u,removedBatchIds:o,addedBatchIds:a}))})})}function sk(t,e){const n=ee(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.ui.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let f=k.resolve();return h.forEach(d=>{f=f.next(()=>u.getEntry(a,d)).next(g=>{const v=c.docVersions.get(d);ke(v!==null),g.version.compareTo(v)<0&&(l.applyToRemoteDocument(g,c),g.isValidDocument()&&(g.setReadTime(c.commitVersion),u.addEntry(g)))})}),f.next(()=>o.Bs.removeMutationBatch(a,l))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.Bs.performConsistencyCheck(r)).next(()=>n.ci.Ks(r,s))})}function ev(t){const e=ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.fs.getLastRemoteSnapshotVersion(n))}function ik(t,e){const n=ee(t),r=e.snapshotVersion;let s=n.ii;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ui.newChangeBuffer({trackRemovals:!0});s=n.ii;const a=[];e.targetChanges.forEach((u,l)=>{const h=s.get(l);if(!h)return;a.push(n.fs.removeMatchingKeys(i,u.removedDocuments,l).next(()=>n.fs.addMatchingKeys(i,u.addedDocuments,l)));let f=h.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(l)?f=f.withResumeToken(rt.EMPTY_BYTE_STRING,re.min()).withLastLimboFreeSnapshotVersion(re.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,r)),s=s.insert(l,f),function(d,g,v){return d.resumeToken.approximateByteSize()===0||g.snapshotVersion.toMicroseconds()-d.snapshotVersion.toMicroseconds()>=3e8?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(h,f,u)&&a.push(n.fs.updateTargetData(i,f))});let c=fr();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(ok(i,o,e.documentUpdates).next(u=>{c=u})),!r.isEqual(re.min())){const u=n.fs.getLastRemoteSnapshotVersion(i).next(l=>n.fs.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return k.waitFor(a).next(()=>o.apply(i)).next(()=>n.ci.Gs(i,c)).next(()=>c)}).then(i=>(n.ii=s,i))}function ok(t,e,n){let r=Ne();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let i=fr();return n.forEach((o,a)=>{const c=s.get(o);a.isNoDocument()&&a.version.isEqual(re.min())?(e.removeEntry(o,a.readTime),i=i.insert(o,a)):!c.isValidDocument()||a.version.compareTo(c.version)>0||a.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(a),i=i.insert(o,a)):V("LocalStore","Ignoring outdated watch update for ",o,". Current version:",c.version," Watch version:",a.version)}),i})}function ak(t,e){const n=ee(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.Bs.getNextMutationBatchAfterBatchId(r,e)))}function ck(t,e){const n=ee(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.fs.getTargetData(r,e).next(i=>i?(s=i,k.resolve(s)):n.fs.allocateTargetId(r).next(o=>(s=new sr(e,o,0,r.currentSequenceNumber),n.fs.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ii.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ii=n.ii.insert(r.targetId,r),n.ri.set(e,r.targetId)),r})}async function yu(t,e,n){const r=ee(t),s=r.ii.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ci(o))throw o;V("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ii=r.ii.remove(e),r.ri.delete(s.target)}function Td(t,e,n){const r=ee(t);let s=re.min(),i=Ne();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=ee(a),h=l.ri.get(u);return h!==void 0?k.resolve(l.ii.get(h)):l.fs.getTargetData(c,u)}(r,o,hr(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.fs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.si.Qs(o,e,n?s:re.min(),n?i:Ne())).next(a=>(uk(r,u1(e),a),{documents:a,li:i})))}function uk(t,e,n){let r=re.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.oi.set(e,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lk{constructor(e){this.M=e,this.wi=new Map,this.mi=new Map}getBundleMetadata(e,n){return k.resolve(this.wi.get(n))}saveBundleMetadata(e,n){var r;return this.wi.set(n.id,{id:(r=n).id,version:r.version,createTime:dn(r.createTime)}),k.resolve()}getNamedQuery(e,n){return k.resolve(this.mi.get(n))}saveNamedQuery(e,n){return this.mi.set(n.name,function(r){return{name:r.name,query:Q1(r.bundledQuery),readTime:dn(r.readTime)}}(n)),k.resolve()}}/**
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
 */class hk{constructor(){this.overlays=new Ge(q.comparator),this.gi=new Map}getOverlay(e,n){return k.resolve(this.overlays.get(n))}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.Xt(e,n,i)}),k.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.gi.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.gi.delete(r)),k.resolve()}getOverlaysForCollection(e,n,r){const s=gc(),i=n.length+1,o=new q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return k.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ge((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let l=i.get(u.largestBatchId);l===null&&(l=gc(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=gc(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=s)););return k.resolve(a)}Xt(e,n,r){if(r===null)return;const s=this.overlays.get(r.key);if(s!==null){const o=this.gi.get(s.largestBatchId).delete(r.key);this.gi.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new G1(n,r));let i=this.gi.get(n);i===void 0&&(i=Ne(),this.gi.set(n,i)),this.gi.set(n,i.add(r.key))}}/**
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
 */class zl{constructor(){this.yi=new tt(He.pi),this.Ii=new tt(He.Ti)}isEmpty(){return this.yi.isEmpty()}addReference(e,n){const r=new He(e,n);this.yi=this.yi.add(r),this.Ii=this.Ii.add(r)}Ei(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ai(new He(e,n))}Ri(e,n){e.forEach(r=>this.removeReference(r,n))}Pi(e){const n=new q(new Pe([])),r=new He(n,e),s=new He(n,e+1),i=[];return this.Ii.forEachInRange([r,s],o=>{this.Ai(o),i.push(o.key)}),i}bi(){this.yi.forEach(e=>this.Ai(e))}Ai(e){this.yi=this.yi.delete(e),this.Ii=this.Ii.delete(e)}Vi(e){const n=new q(new Pe([])),r=new He(n,e),s=new He(n,e+1);let i=Ne();return this.Ii.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new He(e,0),r=this.yi.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class He{constructor(e,n){this.key=e,this.vi=n}static pi(e,n){return q.comparator(e.key,n.key)||ge(e.vi,n.vi)}static Ti(e,n){return ge(e.vi,n.vi)||q.comparator(e.key,n.key)}}/**
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
 */class fk{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.Bs=[],this.Si=1,this.Di=new tt(He.pi)}checkEmpty(e){return k.resolve(this.Bs.length===0)}addMutationBatch(e,n,r,s){const i=this.Si;this.Si++,this.Bs.length>0&&this.Bs[this.Bs.length-1];const o=new W1(i,n,r,s);this.Bs.push(o);for(const a of s)this.Di=this.Di.add(new He(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return k.resolve(o)}lookupMutationBatch(e,n){return k.resolve(this.Ci(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.xi(r),i=s<0?0:s;return k.resolve(this.Bs.length>i?this.Bs[i]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.Bs.length===0?-1:this.Si-1)}getAllMutationBatches(e){return k.resolve(this.Bs.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new He(n,0),s=new He(n,Number.POSITIVE_INFINITY),i=[];return this.Di.forEachInRange([r,s],o=>{const a=this.Ci(o.vi);i.push(a)}),k.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new tt(ge);return n.forEach(s=>{const i=new He(s,0),o=new He(s,Number.POSITIVE_INFINITY);this.Di.forEachInRange([i,o],a=>{r=r.add(a.vi)})}),k.resolve(this.Ni(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;q.isDocumentKey(i)||(i=i.child(""));const o=new He(new q(i),0);let a=new tt(ge);return this.Di.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(c.vi)),!0)},o),k.resolve(this.Ni(a))}Ni(e){const n=[];return e.forEach(r=>{const s=this.Ci(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ke(this.ki(n.batchId,"removed")===0),this.Bs.shift();let r=this.Di;return k.forEach(n.mutations,s=>{const i=new He(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Di=r})}_n(e){}containsKey(e,n){const r=new He(n,0),s=this.Di.firstAfterOrEqual(r);return k.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.Bs.length,k.resolve()}ki(e,n){return this.xi(e)}xi(e){return this.Bs.length===0?0:e-this.Bs[0].batchId}Ci(e){const n=this.xi(e);return n<0||n>=this.Bs.length?null:this.Bs[n]}}/**
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
 */class dk{constructor(e){this.Mi=e,this.docs=new Ge(q.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mi(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return k.resolve(r?r.document.mutableCopy():it.newInvalidDocument(n))}getEntries(e,n){let r=fr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():it.newInvalidDocument(s))}),k.resolve(r)}getAllFromCollection(e,n,r){let s=fr();const i=new q(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||WC(KC(c),r)<=0||(s=s.insert(c.key,c.mutableCopy()))}return k.resolve(s)}getAllFromCollectionGroup(e,n,r,s){J()}Oi(e,n){return k.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new pk(this)}getSize(e){return k.resolve(this.size)}}class pk extends J1{constructor(e){super(),this.Kn=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Kn.addEntry(e,s)):this.Kn.removeEntry(r)}),k.waitFor(n)}getFromCache(e,n){return this.Kn.getEntry(e,n)}getAllFromCache(e,n){return this.Kn.getEntries(e,n)}}/**
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
 */class gk{constructor(e){this.persistence=e,this.Fi=new ps(n=>Ll(n),Fl),this.lastRemoteSnapshotVersion=re.min(),this.highestTargetId=0,this.$i=0,this.Bi=new zl,this.targetCount=0,this.Li=Jr.gn()}forEachTarget(e,n){return this.Fi.forEach((r,s)=>n(s)),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.$i)}allocateTargetId(e){return this.highestTargetId=this.Li.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.$i&&(this.$i=n),k.resolve()}Tn(e){this.Fi.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Li=new Jr(n),this.highestTargetId=n),e.sequenceNumber>this.$i&&(this.$i=e.sequenceNumber)}addTargetData(e,n){return this.Tn(n),this.targetCount+=1,k.resolve()}updateTargetData(e,n){return this.Tn(n),k.resolve()}removeTargetData(e,n){return this.Fi.delete(n.target),this.Bi.Pi(n.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Fi.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fi.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),k.waitFor(i).next(()=>s)}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,n){const r=this.Fi.get(n)||null;return k.resolve(r)}addMatchingKeys(e,n,r){return this.Bi.Ei(n,r),k.resolve()}removeMatchingKeys(e,n,r){this.Bi.Ri(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),k.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Bi.Pi(n),k.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Bi.Vi(n);return k.resolve(r)}containsKey(e,n){return k.resolve(this.Bi.containsKey(n))}}/**
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
 */class mk{constructor(e,n){this.Ui={},this.overlays={},this.es=new Pl(0),this.ns=!1,this.ns=!0,this.referenceDelegate=e(this),this.fs=new gk(this),this.indexManager=new Y1,this.ds=function(r){return new dk(r)}(r=>this.referenceDelegate.qi(r)),this.M=new X1(n),this._s=new lk(this.M)}start(){return Promise.resolve()}shutdown(){return this.ns=!1,Promise.resolve()}get started(){return this.ns}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new hk,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Ui[e.toKey()];return r||(r=new fk(n,this.referenceDelegate),this.Ui[e.toKey()]=r),r}getTargetCache(){return this.fs}getRemoteDocumentCache(){return this.ds}getBundleCache(){return this._s}runTransaction(e,n,r){V("MemoryPersistence","Starting transaction:",e);const s=new yk(this.es.next());return this.referenceDelegate.Ki(),r(s).next(i=>this.referenceDelegate.Gi(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Qi(e,n){return k.or(Object.values(this.Ui).map(r=>()=>r.containsKey(e,n)))}}class yk extends K1{constructor(e){super(),this.currentSequenceNumber=e}}class Hl{constructor(e){this.persistence=e,this.ji=new zl,this.Wi=null}static zi(e){return new Hl(e)}get Hi(){if(this.Wi)return this.Wi;throw J()}addReference(e,n,r){return this.ji.addReference(r,n),this.Hi.delete(r.toString()),k.resolve()}removeReference(e,n,r){return this.ji.removeReference(r,n),this.Hi.add(r.toString()),k.resolve()}markPotentiallyOrphaned(e,n){return this.Hi.add(n.toString()),k.resolve()}removeTarget(e,n){this.ji.Pi(n.targetId).forEach(s=>this.Hi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Hi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ki(){this.Wi=new Set}Gi(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.Hi,r=>{const s=q.fromPath(r);return this.Ji(e,s).next(i=>{i||n.removeEntry(s,re.min())})}).next(()=>(this.Wi=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ji(e,n).next(r=>{r?this.Hi.delete(n.toString()):this.Hi.add(n.toString())})}qi(e){return 0}Ji(e,n){return k.or([()=>k.resolve(this.ji.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Qi(e,n)])}}class Ad{constructor(){this.activeTargetIds=qy()}Zi(e){this.activeTargetIds=this.activeTargetIds.add(e)}tr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class vk{constructor(){this.$r=new Ad,this.Br={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.$r.Zi(e),this.Br[e]||"not-current"}updateQueryState(e,n,r){this.Br[e]=n}removeLocalQueryTarget(e){this.$r.tr(e)}isLocalQueryTarget(e){return this.$r.activeTargetIds.has(e)}clearQueryState(e){delete this.Br[e]}getAllActiveQueryTargets(){return this.$r.activeTargetIds}isActiveQueryTarget(e){return this.$r.activeTargetIds.has(e)}start(){return this.$r=new Ad,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class _k{Lr(e){}shutdown(){}}/**
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
 */class Sd{constructor(){this.Ur=()=>this.qr(),this.Kr=()=>this.Gr(),this.Qr=[],this.jr()}Lr(e){this.Qr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Kr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Kr)}qr(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Qr)e(0)}Gr(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Qr)e(1)}static vt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class Ek{constructor(e){this.Wr=e.Wr,this.zr=e.zr}Hr(e){this.Jr=e}Yr(e){this.Xr=e}onMessage(e){this.Zr=e}close(){this.zr()}send(e){this.Wr(e)}eo(){this.Jr()}no(e){this.Xr(e)}so(e){this.Zr(e)}}/**
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
 */class bk extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.io=n+"://"+e.host,this.ro="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}oo(e,n,r,s,i){const o=this.uo(e,n);V("RestConnection","Sending: ",o,r);const a={};return this.ao(a,s,i),this.co(e,o,a,r).then(c=>(V("RestConnection","Received: ",c),c),c=>{throw od("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",r),c})}ho(e,n,r,s,i){return this.oo(e,n,r,s,i)}ao(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+hs,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}uo(e,n){const r=wk[e];return`${this.io}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,n,r,s){return new Promise((i,o)=>{const a=new NC;a.listenOnce(kC.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case pc.NO_ERROR:const u=a.getResponseJson();V("Connection","XHR received:",JSON.stringify(u)),i(u);break;case pc.TIMEOUT:V("Connection",'RPC "'+e+'" timed out'),o(new K(A.DEADLINE_EXCEEDED,"Request time out"));break;case pc.HTTP_ERROR:const l=a.getStatus();if(V("Connection",'RPC "'+e+'" failed with status:',l,"response text:",a.getResponseText()),l>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const f=function(d){const g=d.toLowerCase().replace(/_/g,"-");return Object.values(A).indexOf(g)>=0?g:A.UNKNOWN}(h.status);o(new K(f,h.message))}else o(new K(A.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new K(A.UNAVAILABLE,"Connection failed."));break;default:J()}}finally{V("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(s);a.send(n,"POST",c,r,15)})}lo(e,n,r){const s=[this.io,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=SC(),o=CC(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new RC({})),this.ao(a.initMessageHeaders,n,r),Vg()||$g()||$b()||jg()||jb()||Xu()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=s.join("");V("Connection","Creating WebChannel: "+c,a);const u=i.createWebChannel(c,a);let l=!1,h=!1;const f=new Ek({Wr:g=>{h?V("Connection","Not sending because WebChannel is closed:",g):(l||(V("Connection","Opening WebChannel transport."),u.open(),l=!0),V("Connection","WebChannel sending:",g),u.send(g))},zr:()=>u.close()}),d=(g,v,_)=>{g.listen(v,T=>{try{_(T)}catch(O){setTimeout(()=>{throw O},0)}})};return d(u,Vi.EventType.OPEN,()=>{h||V("Connection","WebChannel transport opened.")}),d(u,Vi.EventType.CLOSE,()=>{h||(h=!0,V("Connection","WebChannel transport closed"),f.no())}),d(u,Vi.EventType.ERROR,g=>{h||(h=!0,od("Connection","WebChannel transport errored:",g),f.no(new K(A.UNAVAILABLE,"The operation could not be completed")))}),d(u,Vi.EventType.MESSAGE,g=>{var v;if(!h){const _=g.data[0];ke(!!_);const T=_,O=T.error||((v=T[0])===null||v===void 0?void 0:v.error);if(O){V("Connection","WebChannel received error:",O);const j=O.status;let F=function(P){const N=Fe[P];if(N!==void 0)return Hy(N)}(j),Q=O.message;F===void 0&&(F=A.INTERNAL,Q="Unknown error status: "+j+" with message "+O.message),h=!0,f.no(new K(F,Q)),u.close()}else V("Connection","WebChannel received:",_),f.so(_)}}),d(o,DC.STAT_EVENT,g=>{g.stat===rd.PROXY?V("Connection","Detected buffering proxy"):g.stat===rd.NOPROXY&&V("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.eo()},0),f}}function yc(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xa(t){return new R1(t,!0)}class tv{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Yn=e,this.timerId=n,this.fo=r,this._o=s,this.wo=i,this.mo=0,this.yo=null,this.po=Date.now(),this.reset()}reset(){this.mo=0}Io(){this.mo=this.wo}To(e){this.cancel();const n=Math.floor(this.mo+this.Eo()),r=Math.max(0,Date.now()-this.po),s=Math.max(0,n-r);s>0&&V("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.mo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.yo=this.Yn.enqueueAfterDelay(this.timerId,s,()=>(this.po=Date.now(),e())),this.mo*=this._o,this.mo<this.fo&&(this.mo=this.fo),this.mo>this.wo&&(this.mo=this.wo)}Ao(){this.yo!==null&&(this.yo.skipDelay(),this.yo=null)}cancel(){this.yo!==null&&(this.yo.cancel(),this.yo=null)}Eo(){return(Math.random()-.5)*this.mo}}/**
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
 */class nv{constructor(e,n,r,s,i,o,a,c){this.Yn=e,this.Ro=r,this.Po=s,this.bo=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Vo=0,this.vo=null,this.So=null,this.stream=null,this.Do=new tv(e,n)}Co(){return this.state===1||this.state===5||this.xo()}xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.No()}async stop(){this.Co()&&await this.close(0)}ko(){this.state=0,this.Do.reset()}Mo(){this.xo()&&this.vo===null&&(this.vo=this.Yn.enqueueAfterDelay(this.Ro,6e4,()=>this.Oo()))}Fo(e){this.$o(),this.stream.send(e)}async Oo(){if(this.xo())return this.close(0)}$o(){this.vo&&(this.vo.cancel(),this.vo=null)}Bo(){this.So&&(this.So.cancel(),this.So=null)}async close(e,n){this.$o(),this.Bo(),this.Do.cancel(),this.Vo++,e!==4?this.Do.reset():n&&n.code===A.RESOURCE_EXHAUSTED?(Ln(n.toString()),Ln("Using maximum backoff delay to prevent overloading the backend."),this.Do.Io()):n&&n.code===A.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Lo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Yr(n)}Lo(){}auth(){this.state=1;const e=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Vo===n&&this.qo(r,s)},r=>{e(()=>{const s=new K(A.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Ko(s)})})}qo(e,n){const r=this.Uo(this.Vo);this.stream=this.Go(e,n),this.stream.Hr(()=>{r(()=>(this.state=2,this.So=this.Yn.enqueueAfterDelay(this.Po,1e4,()=>(this.xo()&&(this.state=3),Promise.resolve())),this.listener.Hr()))}),this.stream.Yr(s=>{r(()=>this.Ko(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}No(){this.state=5,this.Do.To(async()=>{this.state=0,this.start()})}Ko(e){return V("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return n=>{this.Yn.enqueueAndForget(()=>this.Vo===e?n():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ik extends nv{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.M=i}Go(e,n){return this.bo.lo("Listen",e,n)}onMessage(e){this.Do.reset();const n=O1(this.M,e),r=function(s){if(!("targetChange"in s))return re.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?re.min():i.readTime?dn(i.readTime):re.min()}(e);return this.listener.Qo(n,r)}jo(e){const n={};n.database=mu(this.M),n.addTarget=function(s,i){let o;const a=i.target;return o=lu(a)?{documents:L1(s,a)}:{query:F1(s,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Gy(s,i.resumeToken):i.snapshotVersion.compareTo(re.min())>0&&(o.readTime=No(s,i.snapshotVersion.toTimestamp())),o}(this.M,e);const r=B1(this.M,e);r&&(n.labels=r),this.Fo(n)}Wo(e){const n={};n.database=mu(this.M),n.removeTarget=e,this.Fo(n)}}class Tk extends nv{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.M=i,this.zo=!1}get Ho(){return this.zo}start(){this.zo=!1,this.lastStreamToken=void 0,super.start()}Lo(){this.zo&&this.Jo([])}Go(e,n){return this.bo.lo("Write",e,n)}onMessage(e){if(ke(!!e.streamToken),this.lastStreamToken=e.streamToken,this.zo){this.Do.reset();const n=M1(e.writeResults,e.commitTime),r=dn(e.commitTime);return this.listener.Yo(r,n)}return ke(!e.writeResults||e.writeResults.length===0),this.zo=!0,this.listener.Xo()}Zo(){const e={};e.database=mu(this.M),this.Fo(e)}Jo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>P1(this.M,r))};this.Fo(n)}}/**
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
 */class Ak extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.bo=r,this.M=s,this.tu=!1}eu(){if(this.tu)throw new K(A.FAILED_PRECONDITION,"The client has already been terminated.")}oo(e,n,r){return this.eu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.bo.oo(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new K(A.UNKNOWN,s.toString())})}ho(e,n,r){return this.eu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.bo.ho(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new K(A.UNKNOWN,s.toString())})}terminate(){this.tu=!0}}class Sk{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.nu=0,this.su=null,this.iu=!0}ru(){this.nu===0&&(this.ou("Unknown"),this.su=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.su=null,this.uu("Backend didn't respond within 10 seconds."),this.ou("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.ou("Unknown"):(this.nu++,this.nu>=1&&(this.cu(),this.uu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ou("Offline")))}set(e){this.cu(),this.nu=0,e==="Online"&&(this.iu=!1),this.ou(e)}ou(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}uu(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */class Ck{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.hu=[],this.lu=new Map,this.fu=new Set,this.du=[],this._u=i,this._u.Lr(o=>{r.enqueueAndForget(async()=>{_r(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=ee(a);c.fu.add(4),await Di(c),c.wu.set("Unknown"),c.fu.delete(4),await Oa(c)}(this))})}),this.wu=new Sk(r,s)}}async function Oa(t){if(_r(t))for(const e of t.du)await e(!0)}async function Di(t){for(const e of t.du)await e(!1)}function rv(t,e){const n=ee(t);n.lu.has(e.targetId)||(n.lu.set(e.targetId,e),Wl(n)?Kl(n):gs(n).xo()&&ql(n,e))}function sv(t,e){const n=ee(t),r=gs(n);n.lu.delete(e),r.xo()&&iv(n,e),n.lu.size===0&&(r.xo()?r.Mo():_r(n)&&n.wu.set("Unknown"))}function ql(t,e){t.mu.Z(e.targetId),gs(t).jo(e)}function iv(t,e){t.mu.Z(e),gs(t).Wo(e)}function Kl(t){t.mu=new C1({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.lu.get(e)||null}),gs(t).start(),t.wu.ru()}function Wl(t){return _r(t)&&!gs(t).Co()&&t.lu.size>0}function _r(t){return ee(t).fu.size===0}function ov(t){t.mu=void 0}async function kk(t){t.lu.forEach((e,n)=>{ql(t,e)})}async function Dk(t,e){ov(t),Wl(t)?(t.wu.au(e),Kl(t)):t.wu.set("Unknown")}async function Rk(t,e,n){if(t.wu.set("Online"),e instanceof Wy&&e.state===2&&e.cause)try{await async function(r,s){const i=s.cause;for(const o of s.targetIds)r.lu.has(o)&&(await r.remoteSyncer.rejectListen(o,i),r.lu.delete(o),r.mu.removeTarget(o))}(t,e)}catch(r){V("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await xo(t,r)}else if(e instanceof Yi?t.mu.ut(e):e instanceof Ky?t.mu._t(e):t.mu.ht(e),!n.isEqual(re.min()))try{const r=await ev(t.localStore);n.compareTo(r)>=0&&await function(s,i){const o=s.mu.yt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=s.lu.get(c);u&&s.lu.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=s.lu.get(a);if(!c)return;s.lu.set(a,c.withResumeToken(rt.EMPTY_BYTE_STRING,c.snapshotVersion)),iv(s,a);const u=new sr(c.target,a,1,c.sequenceNumber);ql(s,u)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){V("RemoteStore","Failed to raise snapshot:",r),await xo(t,r)}}async function xo(t,e,n){if(!Ci(e))throw e;t.fu.add(1),await Di(t),t.wu.set("Offline"),n||(n=()=>ev(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await n(),t.fu.delete(1),await Oa(t)})}function av(t,e){return e().catch(n=>xo(t,n,e))}async function Pa(t){const e=ee(t),n=Un(e);let r=e.hu.length>0?e.hu[e.hu.length-1].batchId:-1;for(;Nk(e);)try{const s=await ak(e.localStore,r);if(s===null){e.hu.length===0&&n.Mo();break}r=s.batchId,xk(e,s)}catch(s){await xo(e,s)}cv(e)&&uv(e)}function Nk(t){return _r(t)&&t.hu.length<10}function xk(t,e){t.hu.push(e);const n=Un(t);n.xo()&&n.Ho&&n.Jo(e.mutations)}function cv(t){return _r(t)&&!Un(t).Co()&&t.hu.length>0}function uv(t){Un(t).start()}async function Ok(t){Un(t).Zo()}async function Pk(t){const e=Un(t);for(const n of t.hu)e.Jo(n.mutations)}async function Mk(t,e,n){const r=t.hu.shift(),s=$l.from(r,e,n);await av(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Pa(t)}async function Lk(t,e){e&&Un(t).Ho&&await async function(n,r){if(s=r.code,E1(s)&&s!==A.ABORTED){const i=n.hu.shift();Un(n).ko(),await av(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,r)),await Pa(n)}var s}(t,e),cv(t)&&uv(t)}async function Cd(t,e){const n=ee(t);n.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");const r=_r(n);n.fu.add(3),await Di(n),r&&n.wu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.fu.delete(3),await Oa(n)}async function Fk(t,e){const n=ee(t);e?(n.fu.delete(2),await Oa(n)):e||(n.fu.add(2),await Di(n),n.wu.set("Unknown"))}function gs(t){return t.gu||(t.gu=function(e,n,r){const s=ee(e);return s.eu(),new Ik(n,s.bo,s.authCredentials,s.appCheckCredentials,s.M,r)}(t.datastore,t.asyncQueue,{Hr:kk.bind(null,t),Yr:Dk.bind(null,t),Qo:Rk.bind(null,t)}),t.du.push(async e=>{e?(t.gu.ko(),Wl(t)?Kl(t):t.wu.set("Unknown")):(await t.gu.stop(),ov(t))})),t.gu}function Un(t){return t.yu||(t.yu=function(e,n,r){const s=ee(e);return s.eu(),new Tk(n,s.bo,s.authCredentials,s.appCheckCredentials,s.M,r)}(t.datastore,t.asyncQueue,{Hr:Ok.bind(null,t),Yr:Lk.bind(null,t),Xo:Pk.bind(null,t),Yo:Mk.bind(null,t)}),t.du.push(async e=>{e?(t.yu.ko(),await Pa(t)):(await t.yu.stop(),t.hu.length>0&&(V("RemoteStore",`Stopping write stream with ${t.hu.length} pending writes`),t.hu=[]))})),t.yu}/**
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
 */class Gl{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new rr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Gl(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(A.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Xl(t,e){if(Ln("AsyncQueue",`${e}: ${t}`),Ci(t))return new K(A.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Br{constructor(e){this.comparator=e?(n,r)=>e(n,r)||q.comparator(n.key,r.key):(n,r)=>q.comparator(n.key,r.key),this.keyedMap=du(),this.sortedSet=new Ge(this.comparator)}static emptySet(e){return new Br(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Br)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Br;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class kd{constructor(){this.pu=new Ge(q.comparator)}track(e){const n=e.doc.key,r=this.pu.get(n);r?e.type!==0&&r.type===3?this.pu=this.pu.insert(n,e):e.type===3&&r.type!==1?this.pu=this.pu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.pu=this.pu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.pu=this.pu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.pu=this.pu.remove(n):e.type===1&&r.type===2?this.pu=this.pu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.pu=this.pu.insert(n,{type:2,doc:e.doc}):J():this.pu=this.pu.insert(n,e)}Iu(){const e=[];return this.pu.inorderTraversal((n,r)=>{e.push(r)}),e}}class es{constructor(e,n,r,s,i,o,a,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,r,s){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new es(e,n,Br.emptySet(n),i,r,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ca(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class Uk{constructor(){this.Tu=void 0,this.listeners=[]}}class Bk{constructor(){this.queries=new ps(e=>My(e),Ca),this.onlineState="Unknown",this.Eu=new Set}}async function Vk(t,e){const n=ee(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new Uk),s)try{i.Tu=await n.onListen(r)}catch(o){const a=Xl(o,`Initialization of query '${hu(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.Au(n.onlineState),i.Tu&&e.Ru(i.Tu)&&Ql(n)}async function $k(t,e){const n=ee(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function jk(t,e){const n=ee(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Ru(s)&&(r=!0);o.Tu=s}}r&&Ql(n)}function zk(t,e,n){const r=ee(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function Ql(t){t.Eu.forEach(e=>{e.next()})}class Hk{constructor(e,n,r){this.query=e,this.Pu=n,this.bu=!1,this.Vu=null,this.onlineState="Unknown",this.options=r||{}}Ru(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new es(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.bu?this.vu(e)&&(this.Pu.next(e),n=!0):this.Su(e,this.onlineState)&&(this.Du(e),n=!0),this.Vu=e,n}onError(e){this.Pu.error(e)}Au(e){this.onlineState=e;let n=!1;return this.Vu&&!this.bu&&this.Su(this.Vu,e)&&(this.Du(this.Vu),n=!0),n}Su(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Cu||!r)&&(!e.docs.isEmpty()||n==="Offline")}vu(e){if(e.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Du(e){e=es.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Pu.next(e)}}/**
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
 */class lv{constructor(e){this.key=e}}class hv{constructor(e){this.key=e}}class qk{constructor(e,n){this.query=e,this.$u=n,this.Bu=null,this.current=!1,this.Lu=Ne(),this.mutatedKeys=Ne(),this.Uu=Ly(e),this.qu=new Br(this.Uu)}get Ku(){return this.$u}Gu(e,n){const r=n?n.Qu:new kd,s=n?n.qu:this.qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=Xi(this.query)&&s.size===this.query.limit?s.last():null,u=ko(this.query)&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((l,h)=>{const f=s.get(l),d=Bl(this.query,h)?h:null,g=!!f&&this.mutatedKeys.has(f.key),v=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let _=!1;f&&d?f.data.isEqual(d.data)?g!==v&&(r.track({type:3,doc:d}),_=!0):this.ju(f,d)||(r.track({type:2,doc:d}),_=!0,(c&&this.Uu(d,c)>0||u&&this.Uu(d,u)<0)&&(a=!0)):!f&&d?(r.track({type:0,doc:d}),_=!0):f&&!d&&(r.track({type:1,doc:f}),_=!0,(c||u)&&(a=!0)),_&&(d?(o=o.add(d),i=v?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),Xi(this.query)||ko(this.query))for(;o.size>this.query.limit;){const l=Xi(this.query)?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),r.track({type:1,doc:l})}return{qu:o,Qu:r,ni:a,mutatedKeys:i}}ju(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.qu;this.qu=e.qu,this.mutatedKeys=e.mutatedKeys;const i=e.Qu.Iu();i.sort((u,l)=>function(h,f){const d=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return J()}};return d(h)-d(f)}(u.type,l.type)||this.Uu(u.doc,l.doc)),this.Wu(r);const o=n?this.zu():[],a=this.Lu.size===0&&this.current?1:0,c=a!==this.Bu;return this.Bu=a,i.length!==0||c?{snapshot:new es(this.query,e.qu,s,i,e.mutatedKeys,a===0,c,!1),Hu:o}:{Hu:o}}Au(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({qu:this.qu,Qu:new kd,mutatedKeys:this.mutatedKeys,ni:!1},!1)):{Hu:[]}}Ju(e){return!this.$u.has(e)&&!!this.qu.has(e)&&!this.qu.get(e).hasLocalMutations}Wu(e){e&&(e.addedDocuments.forEach(n=>this.$u=this.$u.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.$u=this.$u.delete(n)),this.current=e.current)}zu(){if(!this.current)return[];const e=this.Lu;this.Lu=Ne(),this.qu.forEach(r=>{this.Ju(r.key)&&(this.Lu=this.Lu.add(r.key))});const n=[];return e.forEach(r=>{this.Lu.has(r)||n.push(new hv(r))}),this.Lu.forEach(r=>{e.has(r)||n.push(new lv(r))}),n}Yu(e){this.$u=e.li,this.Lu=Ne();const n=this.Gu(e.documents);return this.applyChanges(n,!0)}Xu(){return es.fromInitialDocuments(this.query,this.qu,this.mutatedKeys,this.Bu===0)}}class Kk{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Wk{constructor(e){this.key=e,this.Zu=!1}}class Gk{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.ta={},this.ea=new ps(a=>My(a),Ca),this.na=new Map,this.sa=new Set,this.ia=new Ge(q.comparator),this.ra=new Map,this.oa=new zl,this.ua={},this.aa=new Map,this.ca=Jr.yn(),this.onlineState="Unknown",this.ha=void 0}get isPrimaryClient(){return this.ha===!0}}async function Xk(t,e){const n=iD(t);let r,s;const i=n.ea.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Xu();else{const o=await ck(n.localStore,hr(e));n.isPrimaryClient&&rv(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await Qk(n,e,r,a==="current")}return s}async function Qk(t,e,n,r){t.la=(l,h,f)=>async function(d,g,v,_){let T=g.view.Gu(v);T.ni&&(T=await Td(d.localStore,g.query,!1).then(({documents:F})=>g.view.Gu(F,T)));const O=_&&_.targetChanges.get(g.targetId),j=g.view.applyChanges(T,d.isPrimaryClient,O);return Rd(d,g.targetId,j.Hu),j.snapshot}(t,l,h,f);const s=await Td(t.localStore,e,!0),i=new qk(e,s.li),o=i.Gu(s.documents),a=Si.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),c=i.applyChanges(o,t.isPrimaryClient,a);Rd(t,n,c.Hu);const u=new Kk(e,n,i);return t.ea.set(e,u),t.na.has(n)?t.na.get(n).push(e):t.na.set(n,[e]),c.snapshot}async function Yk(t,e){const n=ee(t),r=n.ea.get(e),s=n.na.get(r.targetId);if(s.length>1)return n.na.set(r.targetId,s.filter(i=>!Ca(i,e))),void n.ea.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await yu(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),sv(n.remoteStore,r.targetId),vu(n,r.targetId)}).catch(ki)):(vu(n,r.targetId),await yu(n.localStore,r.targetId,!0))}async function Zk(t,e,n){const r=oD(t);try{const s=await function(i,o){const a=ee(i),c=ut.now(),u=o.reduce((h,f)=>h.add(f.key),Ne());let l;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.ci.Ks(h,u).next(f=>{l=f;const d=[];for(const g of o){const v=y1(g,l.get(g.key));v!=null&&d.push(new Ai(g.key,v,Oy(v.value.mapValue),Ur.exists(!0)))}return a.Bs.addMutationBatch(h,c,d,o)})).then(h=>(h.applyToLocalDocumentSet(l),{batchId:h.batchId,changes:l}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(i,o,a){let c=i.ua[i.currentUser.toKey()];c||(c=new Ge(ge)),c=c.insert(o,a),i.ua[i.currentUser.toKey()]=c}(r,s.batchId,n),await Ri(r,s.changes),await Pa(r.remoteStore)}catch(s){const i=Xl(s,"Failed to persist write");n.reject(i)}}async function fv(t,e){const n=ee(t);try{const r=await ik(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.ra.get(i);o&&(ke(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Zu=!0:s.modifiedDocuments.size>0?ke(o.Zu):s.removedDocuments.size>0&&(ke(o.Zu),o.Zu=!1))}),await Ri(n,r,e)}catch(r){await ki(r)}}function Dd(t,e,n){const r=ee(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ea.forEach((i,o)=>{const a=o.view.Au(e);a.snapshot&&s.push(a.snapshot)}),function(i,o){const a=ee(i);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.Au(o)&&(c=!0)}),c&&Ql(a)}(r.eventManager,e),s.length&&r.ta.Qo(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Jk(t,e,n){const r=ee(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.ra.get(e),i=s&&s.key;if(i){let o=new Ge(q.comparator);o=o.insert(i,it.newNoDocument(i,re.min()));const a=Ne().add(i),c=new Na(re.min(),new Map,new tt(ge),o,a);await fv(r,c),r.ia=r.ia.remove(i),r.ra.delete(e),Yl(r)}else await yu(r.localStore,e,!1).then(()=>vu(r,e,n)).catch(ki)}async function eD(t,e){const n=ee(t),r=e.batch.batchId;try{const s=await sk(n.localStore,e);pv(n,r,null),dv(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ri(n,s)}catch(s){await ki(s)}}async function tD(t,e,n){const r=ee(t);try{const s=await function(i,o){const a=ee(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.Bs.lookupMutationBatch(c,o).next(l=>(ke(l!==null),u=l.keys(),a.Bs.removeMutationBatch(c,l))).next(()=>a.Bs.performConsistencyCheck(c)).next(()=>a.ci.Ks(c,u))})}(r.localStore,e);pv(r,e,n),dv(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ri(r,s)}catch(s){await ki(s)}}function dv(t,e){(t.aa.get(e)||[]).forEach(n=>{n.resolve()}),t.aa.delete(e)}function pv(t,e,n){const r=ee(t);let s=r.ua[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.ua[r.currentUser.toKey()]=s}}function vu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.na.get(e))t.ea.delete(r),n&&t.ta.fa(r,n);t.na.delete(e),t.isPrimaryClient&&t.oa.Pi(e).forEach(r=>{t.oa.containsKey(r)||gv(t,r)})}function gv(t,e){t.sa.delete(e.path.canonicalString());const n=t.ia.get(e);n!==null&&(sv(t.remoteStore,n),t.ia=t.ia.remove(e),t.ra.delete(n),Yl(t))}function Rd(t,e,n){for(const r of n)r instanceof lv?(t.oa.addReference(r.key,e),nD(t,r)):r instanceof hv?(V("SyncEngine","Document no longer in limbo: "+r.key),t.oa.removeReference(r.key,e),t.oa.containsKey(r.key)||gv(t,r.key)):J()}function nD(t,e){const n=e.key,r=n.path.canonicalString();t.ia.get(n)||t.sa.has(r)||(V("SyncEngine","New document in limbo: "+n),t.sa.add(r),Yl(t))}function Yl(t){for(;t.sa.size>0&&t.ia.size<t.maxConcurrentLimboResolutions;){const e=t.sa.values().next().value;t.sa.delete(e);const n=new q(Pe.fromString(e)),r=t.ca.next();t.ra.set(r,new Wk(n)),t.ia=t.ia.insert(n,r),rv(t.remoteStore,new sr(hr(Ul(n.path)),r,2,Pl.A))}}async function Ri(t,e,n){const r=ee(t),s=[],i=[],o=[];r.ea.isEmpty()||(r.ea.forEach((a,c)=>{o.push(r.la(c,e,n).then(u=>{if(u){r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u.fromCache?"not-current":"current"),s.push(u);const l=jl.Ys(c.targetId,u);i.push(l)}}))}),await Promise.all(o),r.ta.Qo(s),await async function(a,c){const u=ee(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>k.forEach(c,h=>k.forEach(h.Hs,f=>u.persistence.referenceDelegate.addReference(l,h.targetId,f)).next(()=>k.forEach(h.Js,f=>u.persistence.referenceDelegate.removeReference(l,h.targetId,f)))))}catch(l){if(!Ci(l))throw l;V("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const f=u.ii.get(h),d=f.snapshotVersion,g=f.withLastLimboFreeSnapshotVersion(d);u.ii=u.ii.insert(h,g)}}}(r.localStore,i))}async function rD(t,e){const n=ee(t);if(!n.currentUser.isEqual(e)){V("SyncEngine","User change. New user:",e.toKey());const r=await Jy(n.localStore,e);n.currentUser=e,function(s,i){s.aa.forEach(o=>{o.forEach(a=>{a.reject(new K(A.CANCELLED,i))})}),s.aa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ri(n,r.hi)}}function sD(t,e){const n=ee(t),r=n.ra.get(e);if(r&&r.Zu)return Ne().add(r.key);{let s=Ne();const i=n.na.get(e);if(!i)return s;for(const o of i){const a=n.ea.get(o);s=s.unionWith(a.view.Ku)}return s}}function iD(t){const e=ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=fv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=sD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Jk.bind(null,e),e.ta.Qo=jk.bind(null,e.eventManager),e.ta.fa=zk.bind(null,e.eventManager),e}function oD(t){const e=ee(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=eD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=tD.bind(null,e),e}class aD{constructor(){this.synchronizeTabs=!1}async initialize(e){this.M=xa(e.databaseInfo.databaseId),this.sharedClientState=this._a(e),this.persistence=this.wa(e),await this.persistence.start(),this.gcScheduler=this.ma(e),this.localStore=this.ga(e)}ma(e){return null}ga(e){return rk(this.persistence,new tk,e.initialUser,this.M)}wa(e){return new mk(Hl.zi,this.M)}_a(e){return new vk}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class cD{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Dd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=rD.bind(null,this.syncEngine),await Fk(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Bk}createDatastore(e){const n=xa(e.databaseInfo.databaseId),r=(s=e.databaseInfo,new bk(s));var s;return function(i,o,a,c){return new Ak(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,s=e.asyncQueue,i=a=>Dd(this.syncEngine,a,0),o=Sd.vt()?new Sd:new _k,new Ck(n,r,s,i,o);var n,r,s,i,o}createSyncEngine(e,n){return function(r,s,i,o,a,c,u){const l=new Gk(r,s,i,o,a,c);return u&&(l.ha=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ee(e);V("RemoteStore","RemoteStore shutting down."),n.fu.add(5),await Di(n),n._u.shutdown(),n.wu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class uD{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.pa(this.observer.next,e)}error(e){this.observer.error?this.pa(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Ia(){this.muted=!0}pa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class lD{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=mt.UNAUTHENTICATED,this.clientId=Dy.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{V("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(V("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new K(A.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new rr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Xl(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function hD(t,e){t.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Jy(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function fD(t,e){t.asyncQueue.verifyOperationInProgress();const n=await dD(t);V("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>Cd(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>Cd(e.remoteStore,i)),t.onlineComponents=e}async function dD(t){return t.offlineComponents||(V("FirestoreClient","Using default OfflineComponentProvider"),await hD(t,new aD)),t.offlineComponents}async function mv(t){return t.onlineComponents||(V("FirestoreClient","Using default OnlineComponentProvider"),await fD(t,new cD)),t.onlineComponents}function pD(t){return mv(t).then(e=>e.syncEngine)}async function Nd(t){const e=await mv(t),n=e.eventManager;return n.onListen=Xk.bind(null,e.syncEngine),n.onUnlisten=Yk.bind(null,e.syncEngine),n}const xd=new Map;/**
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
 */function yv(t,e,n){if(!n)throw new K(A.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function gD(t,e,n,r){if(e===!0&&r===!0)throw new K(A.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Od(t){if(!q.isDocumentKey(t))throw new K(A.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Pd(t){if(q.isDocumentKey(t))throw new K(A.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Zl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":J()}function Us(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new K(A.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Zl(t);throw new K(A.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new K(A.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new K(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,gD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(e,n,r){this._authCredentials=n,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Md({}),this._settingsFrozen=!1,e instanceof Qr?this._databaseId=e:(this._app=e,this._databaseId=function(s){if(!Object.prototype.hasOwnProperty.apply(s.options,["projectId"]))throw new K(A.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Qr(s.options.projectId)}(e))}get app(){if(!this._app)throw new K(A.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new K(A.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Md(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new OC;switch(n.type){case"gapi":const r=n.client;return ke(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new LC(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new K(A.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=xd.get(e);n&&(V("ComponentProvider","Removing Datastore"),xd.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new On(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new At(this.firestore,e,this._key)}}class Ma{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ma(this.firestore,e,this._query)}}class On extends Ma{constructor(e,n,r){super(e,n,Ul(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new At(this.firestore,null,new q(e))}withConverter(e){return new On(this.firestore,e,this._path)}}function mD(t,e,...n){if(t=kt(t),yv("collection","path",e),t instanceof Jl){const r=Pe.fromString(e,...n);return Pd(r),new On(t,null,r)}{if(!(t instanceof At||t instanceof On))throw new K(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Pe.fromString(e,...n));return Pd(r),new On(t.firestore,null,r)}}function Ld(t,e,...n){if(t=kt(t),arguments.length===1&&(e=Dy.R()),yv("doc","path",e),t instanceof Jl){const r=Pe.fromString(e,...n);return Od(r),new At(t,null,new q(r))}{if(!(t instanceof At||t instanceof On))throw new K(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Pe.fromString(e,...n));return Od(r),new At(t.firestore,t instanceof On?t.converter:null,new q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yD{constructor(){this.ka=Promise.resolve(),this.Ma=[],this.Oa=!1,this.Fa=[],this.$a=null,this.Ba=!1,this.La=!1,this.Ua=[],this.Do=new tv(this,"async_queue_retry"),this.qa=()=>{const n=yc();n&&V("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Do.Ao()};const e=yc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qa)}get isShuttingDown(){return this.Oa}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ka(),this.Ga(e)}enterRestrictedMode(e){if(!this.Oa){this.Oa=!0,this.La=e||!1;const n=yc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qa)}}enqueue(e){if(this.Ka(),this.Oa)return new Promise(()=>{});const n=new rr;return this.Ga(()=>this.Oa&&this.La?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ma.push(e),this.Qa()))}async Qa(){if(this.Ma.length!==0){try{await this.Ma[0](),this.Ma.shift(),this.Do.reset()}catch(e){if(!Ci(e))throw e;V("AsyncQueue","Operation failed with retryable error: "+e)}this.Ma.length>0&&this.Do.To(()=>this.Qa())}}Ga(e){const n=this.ka.then(()=>(this.Ba=!0,e().catch(r=>{this.$a=r,this.Ba=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw Ln("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ba=!1,r))));return this.ka=n,n}enqueueAfterDelay(e,n,r){this.Ka(),this.Ua.indexOf(e)>-1&&(n=0);const s=Gl.createAndSchedule(this,e,n,r,i=>this.ja(i));return this.Fa.push(s),s}Ka(){this.$a&&J()}verifyOperationInProgress(){}async Wa(){let e;do e=this.ka,await e;while(e!==this.ka)}za(e){for(const n of this.Fa)if(n.timerId===e)return!0;return!1}Ha(e){return this.Wa().then(()=>{this.Fa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Fa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Wa()})}Ja(e){this.Ua.push(e)}ja(e){const n=this.Fa.indexOf(e);this.Fa.splice(n,1)}}function Fd(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const s of n)if(s in r&&typeof r[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Oo extends Jl{constructor(e,n,r){super(e,n,r),this.type="firestore",this._queue=new yD,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||_v(this),this._firestoreClient.terminate()}}function _u(t=Yu()){return yr(t,"firestore").getImmediate()}function vv(t){return t._firestoreClient||_v(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function _v(t){var e;const n=t._freezeSettings(),r=function(s,i,o,a){return new jC(s,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new lD(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class eh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new K(A.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new yt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ts(rt.fromBase64String(e))}catch(n){throw new K(A.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ts(rt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class th{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new K(A.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new K(A.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ge(this._lat,e._lat)||ge(this._long,e._long)}}/**
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
 */const vD=/^__.*__$/;class _D{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ai(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ra(e,this.data,n,this.fieldTransforms)}}function Ev(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw J()}}class nh{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.M=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ya(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Xa(){return this.settings.Xa}Za(e){return new nh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}tc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Za({path:r,ec:!1});return s.nc(e),s}sc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Za({path:r,ec:!1});return s.Ya(),s}ic(e){return this.Za({path:void 0,ec:!0})}rc(e){return Po(e,this.settings.methodName,this.settings.oc||!1,this.path,this.settings.uc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ya(){if(this.path)for(let e=0;e<this.path.length;e++)this.nc(this.path.get(e))}nc(e){if(e.length===0)throw this.rc("Document fields must not be empty");if(Ev(this.Xa)&&vD.test(e))throw this.rc('Document fields cannot begin and end with "__"')}}class wD{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.M=r||xa(e)}ac(e,n,r,s=!1){return new nh({Xa:e,methodName:n,uc:r,path:yt.emptyPath(),ec:!1,oc:s},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function ED(t){const e=t._freezeSettings(),n=xa(t._databaseId);return new wD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function bD(t,e,n,r,s,i={}){const o=t.ac(i.merge||i.mergeFields?2:0,e,n,s);Av("Data must be an object, but it was:",o,r);const a=Iv(r,o);let c,u;if(i.merge)c=new au(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const f=ID(e,h,n);if(!o.contains(f))throw new K(A.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);AD(l,f)||l.push(f)}c=new au(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new _D(new $t(a),c,u)}function bv(t,e){if(Tv(t=kt(t)))return Av("Unsupported field value:",e,t),Iv(t,e);if(t instanceof wv)return function(n,r){if(!Ev(r.Xa))throw r.rc(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.rc(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ec&&e.Xa!==4)throw e.rc("Nested arrays are not supported");return function(n,r){const s=[];let i=0;for(const o of n){let a=bv(o,r.ic(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(t,e)}return function(n,r){if((n=kt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return h1(r.M,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=ut.fromDate(n);return{timestampValue:No(r.M,s)}}if(n instanceof ut){const s=new ut(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:No(r.M,s)}}if(n instanceof th)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ts)return{bytesValue:Gy(r.M,n._byteString)};if(n instanceof At){const s=r.databaseId,i=n.firestore._databaseId;if(!i.isEqual(s))throw r.rc(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Vl(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.rc(`Unsupported field value: ${Zl(n)}`)}(t,e)}function Iv(t,e){const n={};return Ry(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):fs(t,(r,s)=>{const i=bv(s,e.tc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Tv(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ut||t instanceof th||t instanceof ts||t instanceof At||t instanceof wv)}function Av(t,e,n){if(!Tv(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Zl(n);throw r==="an object"?e.rc(t+" a custom object"):e.rc(t+" "+r)}}function ID(t,e,n){if((e=kt(e))instanceof eh)return e._internalPath;if(typeof e=="string")return Sv(t,e);throw Po("Field path arguments must be of type string or ",t,!1,void 0,n)}const TD=new RegExp("[~\\*/\\[\\]]");function Sv(t,e,n){if(e.search(TD)>=0)throw Po(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new eh(...e.split("."))._internalPath}catch{throw Po(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Po(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new K(A.INVALID_ARGUMENT,a+t+c)}function AD(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new At(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new SD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(kv("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class SD extends Cv{data(){return super.data()}}function kv(t,e){return typeof e=="string"?Sv(t,e):e instanceof eh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Dv extends Cv{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Zi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(kv("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Zi extends Dv{data(e={}){return super.data(e)}}class CD{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ss(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Zi(this._firestore,this._userDataWriter,r.key,r,new Ss(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new K(A.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let i=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new Zi(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Ss(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:i++}))}{let i=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new Zi(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Ss(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:kD(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function kD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return J()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DD(t){if(ko(t)&&t.explicitOrderBy.length===0)throw new K(A.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RD{convertValue(e,n="none"){switch(lr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ue(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Xr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw J()}}convertObject(e,n){const r={};return fs(e.fields,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new th(Ue(e.latitude),Ue(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=xy(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(si(e));default:return null}}convertTimestamp(e){const n=Fn(e);return new ut(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Pe.fromString(e);ke(Zy(r));const s=new Qr(r.get(1),r.get(3)),i=new q(r.popFirst(5));return s.isEqual(n)||Ln(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ND(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Rv extends RD{constructor(e){super(),this.firestore=e}convertBytes(e){return new ts(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new At(this.firestore,null,n)}}function xD(t,e,n){t=Us(t,At);const r=Us(t.firestore,Oo),s=ND(t.converter,e,n);return PD(r,[bD(ED(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Ur.none())])}function OD(t,...e){var n,r,s;t=kt(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Fd(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Fd(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,u,l;if(t instanceof At)u=Us(t.firestore,Oo),l=Ul(t._key.path),c={next:h=>{e[o]&&e[o](MD(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Us(t,Ma);u=Us(h.firestore,Oo),l=h._query;const f=new Rv(u);c={next:d=>{e[o]&&e[o](new CD(u,f,h,d))},error:e[o+1],complete:e[o+2]},DD(t._query)}return function(h,f,d,g){const v=new uD(g),_=new Hk(f,v,d);return h.asyncQueue.enqueueAndForget(async()=>Vk(await Nd(h),_)),()=>{v.Ia(),h.asyncQueue.enqueueAndForget(async()=>$k(await Nd(h),_))}}(vv(u),l,a,c)}function PD(t,e){return function(n,r){const s=new rr;return n.asyncQueue.enqueueAndForget(async()=>Zk(await pD(n),r,s)),s.promise}(vv(t),e)}function MD(t,e,n){const r=n.docs.get(e._key),s=new Rv(t);return new Dv(t,s,e._key,r,new Ss(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){hs=n})(fi),Zt(new zt("firestore",(n,{options:r})=>{const s=n.getProvider("app").getImmediate(),i=new Oo(s,new PC(n.getProvider("auth-internal")),new UC(n.getProvider("app-check-internal")));return r=Object.assign({useFetchStreams:e},r),i._setSettings(r),i},"PUBLIC")),Ft(sd,"3.4.8",t),Ft(sd,"3.4.8","esm2017")})();const LD=Gu("item",{state:()=>({itemList:[],slotTitleList:[]}),actions:{async addItem(t,e,n){const r=TS(),s=!1,i=ys(Kt({},t),{id:r,shared:s});return this.itemList.push(i),this.saveData(e,n)},async removeItem(t,e,n){const r=this.itemList.findIndex(s=>s.id===t.id);if(r<0)throw new Error(`Can't find item [${t.id}]`);return this.itemList.splice(r,1),this.saveData(e,n)},async updateItem(t,e,n){return this.saveData(e,n)},async saveData(t,e){const n=_u(),r=Ld(mD(n,t),e);return xD(r,{items:this.itemList,slotTitles:this.slotTitleList})},connect(t,e){const n=_u();OD(Ld(n,t,e),r=>{var s,i,o,a;this.slotTitleList=(i=(s=r.data())==null?void 0:s.slotTitles)!=null?i:[],this.itemList=(a=(o=r.data())==null?void 0:o.items)!=null?a:[]})}},getters:{getList:t=>t.itemList,getSlotTitleList:t=>t.slotTitleList,getSlotList:t=>e=>t.itemList.filter(n=>n.slot===e)}});const FD={},UD={class:"divide-y"};function BD(t,e){return ae(),ze("ul",UD,[Jo(t.$slots,"default",{},void 0,!0)])}var Nv=tn(FD,[["render",BD],["__scopeId","data-v-3b882242"]]);const VD={},$D={class:"py-2"};function jD(t,e){return ae(),ze("li",$D,[Jo(t.$slots,"default")])}var xv=tn(VD,[["render",jD]]),zD=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,HD=/[\0-\x1F\x7F-\x9F]/,qD=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,KD=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,WD=function(t){var e={};t=t||{},e.src_Any=zD.source,e.src_Cc=HD.source,e.src_Z=qD.source,e.src_P=KD.source,e.src_ZPCc=[e.src_Z,e.src_P,e.src_Cc].join("|"),e.src_ZCc=[e.src_Z,e.src_Cc].join("|");var n="[><\uFF5C]";return e.src_pseudo_letter="(?:(?!"+n+"|"+e.src_ZPCc+")"+e.src_Any+")",e.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",e.src_auth="(?:(?:(?!"+e.src_ZCc+"|[@/\\[\\]()]).)+@)?",e.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",e.src_host_terminator="(?=$|"+n+"|"+e.src_ZPCc+")(?!"+(t["---"]?"-(?!--)|":"-|")+"_|:\\d|\\.-|\\.(?!$|"+e.src_ZPCc+"))",e.src_path="(?:[/?#](?:(?!"+e.src_ZCc+"|"+n+`|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!`+e.src_ZCc+"|\\]).)*\\]|\\((?:(?!"+e.src_ZCc+"|[)]).)*\\)|\\{(?:(?!"+e.src_ZCc+'|[}]).)*\\}|\\"(?:(?!'+e.src_ZCc+`|["]).)+\\"|\\'(?:(?!`+e.src_ZCc+"|[']).)+\\'|\\'(?="+e.src_pseudo_letter+"|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!"+e.src_ZCc+"|[.]|$)|"+(t["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+",(?!"+e.src_ZCc+"|$)|;(?!"+e.src_ZCc+"|$)|\\!+(?!"+e.src_ZCc+"|[!]|$)|\\?(?!"+e.src_ZCc+"|[?]|$))+|\\/)?",e.src_email_name='[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*',e.src_xn="xn--[a-z0-9\\-]{1,59}",e.src_domain_root="(?:"+e.src_xn+"|"+e.src_pseudo_letter+"{1,63})",e.src_domain="(?:"+e.src_xn+"|(?:"+e.src_pseudo_letter+")|(?:"+e.src_pseudo_letter+"(?:-|"+e.src_pseudo_letter+"){0,61}"+e.src_pseudo_letter+"))",e.src_host="(?:(?:(?:(?:"+e.src_domain+")\\.)*"+e.src_domain+"))",e.tpl_host_fuzzy="(?:"+e.src_ip4+"|(?:(?:(?:"+e.src_domain+")\\.)+(?:%TLDS%)))",e.tpl_host_no_ip_fuzzy="(?:(?:(?:"+e.src_domain+")\\.)+(?:%TLDS%))",e.src_host_strict=e.src_host+e.src_host_terminator,e.tpl_host_fuzzy_strict=e.tpl_host_fuzzy+e.src_host_terminator,e.src_host_port_strict=e.src_host+e.src_port+e.src_host_terminator,e.tpl_host_port_fuzzy_strict=e.tpl_host_fuzzy+e.src_port+e.src_host_terminator,e.tpl_host_port_no_ip_fuzzy_strict=e.tpl_host_no_ip_fuzzy+e.src_port+e.src_host_terminator,e.tpl_host_fuzzy_test="localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+e.src_ZPCc+"|>|$))",e.tpl_email_fuzzy="(^|"+n+'|"|\\(|'+e.src_ZCc+")("+e.src_email_name+"@"+e.tpl_host_fuzzy_strict+")",e.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|"+e.src_ZPCc+"))((?![$+<=>^`|\uFF5C])"+e.tpl_host_port_fuzzy_strict+e.src_path+")",e.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|"+e.src_ZPCc+"))((?![$+<=>^`|\uFF5C])"+e.tpl_host_port_no_ip_fuzzy_strict+e.src_path+")",e};function wu(t){var e=Array.prototype.slice.call(arguments,1);return e.forEach(function(n){!n||Object.keys(n).forEach(function(r){t[r]=n[r]})}),t}function La(t){return Object.prototype.toString.call(t)}function GD(t){return La(t)==="[object String]"}function XD(t){return La(t)==="[object Object]"}function QD(t){return La(t)==="[object RegExp]"}function Ud(t){return La(t)==="[object Function]"}function YD(t){return t.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}var Ov={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function ZD(t){return Object.keys(t||{}).reduce(function(e,n){return e||Ov.hasOwnProperty(n)},!1)}var JD={"http:":{validate:function(t,e,n){var r=t.slice(e);return n.re.http||(n.re.http=new RegExp("^\\/\\/"+n.re.src_auth+n.re.src_host_port_strict+n.re.src_path,"i")),n.re.http.test(r)?r.match(n.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(t,e,n){var r=t.slice(e);return n.re.no_http||(n.re.no_http=new RegExp("^"+n.re.src_auth+"(?:localhost|(?:(?:"+n.re.src_domain+")\\.)+"+n.re.src_domain_root+")"+n.re.src_port+n.re.src_host_terminator+n.re.src_path,"i")),n.re.no_http.test(r)?e>=3&&t[e-3]===":"||e>=3&&t[e-3]==="/"?0:r.match(n.re.no_http)[0].length:0}},"mailto:":{validate:function(t,e,n){var r=t.slice(e);return n.re.mailto||(n.re.mailto=new RegExp("^"+n.re.src_email_name+"@"+n.re.src_host_strict,"i")),n.re.mailto.test(r)?r.match(n.re.mailto)[0].length:0}}},eR="a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",tR="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|\u0440\u0444".split("|");function nR(t){t.__index__=-1,t.__text_cache__=""}function rR(t){return function(e,n){var r=e.slice(n);return t.test(r)?r.match(t)[0].length:0}}function Bd(){return function(t,e){e.normalize(t)}}function Mo(t){var e=t.re=WD(t.__opts__),n=t.__tlds__.slice();t.onCompile(),t.__tlds_replaced__||n.push(eR),n.push(e.src_xn),e.src_tlds=n.join("|");function r(a){return a.replace("%TLDS%",e.src_tlds)}e.email_fuzzy=RegExp(r(e.tpl_email_fuzzy),"i"),e.link_fuzzy=RegExp(r(e.tpl_link_fuzzy),"i"),e.link_no_ip_fuzzy=RegExp(r(e.tpl_link_no_ip_fuzzy),"i"),e.host_fuzzy_test=RegExp(r(e.tpl_host_fuzzy_test),"i");var s=[];t.__compiled__={};function i(a,c){throw new Error('(LinkifyIt) Invalid schema "'+a+'": '+c)}Object.keys(t.__schemas__).forEach(function(a){var c=t.__schemas__[a];if(c!==null){var u={validate:null,link:null};if(t.__compiled__[a]=u,XD(c)){QD(c.validate)?u.validate=rR(c.validate):Ud(c.validate)?u.validate=c.validate:i(a,c),Ud(c.normalize)?u.normalize=c.normalize:c.normalize?i(a,c):u.normalize=Bd();return}if(GD(c)){s.push(a);return}i(a,c)}}),s.forEach(function(a){!t.__compiled__[t.__schemas__[a]]||(t.__compiled__[a].validate=t.__compiled__[t.__schemas__[a]].validate,t.__compiled__[a].normalize=t.__compiled__[t.__schemas__[a]].normalize)}),t.__compiled__[""]={validate:null,normalize:Bd()};var o=Object.keys(t.__compiled__).filter(function(a){return a.length>0&&t.__compiled__[a]}).map(YD).join("|");t.re.schema_test=RegExp("(^|(?!_)(?:[><\uFF5C]|"+e.src_ZPCc+"))("+o+")","i"),t.re.schema_search=RegExp("(^|(?!_)(?:[><\uFF5C]|"+e.src_ZPCc+"))("+o+")","ig"),t.re.schema_at_start=RegExp("^"+t.re.schema_search.source,"i"),t.re.pretest=RegExp("("+t.re.schema_test.source+")|("+t.re.host_fuzzy_test.source+")|@","i"),nR(t)}function sR(t,e){var n=t.__index__,r=t.__last_index__,s=t.__text_cache__.slice(n,r);this.schema=t.__schema__.toLowerCase(),this.index=n+e,this.lastIndex=r+e,this.raw=s,this.text=s,this.url=s}function Eu(t,e){var n=new sR(t,e);return t.__compiled__[n.schema].normalize(n,t),n}function Rt(t,e){if(!(this instanceof Rt))return new Rt(t,e);e||ZD(t)&&(e=t,t={}),this.__opts__=wu({},Ov,e),this.__index__=-1,this.__last_index__=-1,this.__schema__="",this.__text_cache__="",this.__schemas__=wu({},JD,t),this.__compiled__={},this.__tlds__=tR,this.__tlds_replaced__=!1,this.re={},Mo(this)}Rt.prototype.add=function(e,n){return this.__schemas__[e]=n,Mo(this),this};Rt.prototype.set=function(e){return this.__opts__=wu(this.__opts__,e),this};Rt.prototype.test=function(e){if(this.__text_cache__=e,this.__index__=-1,!e.length)return!1;var n,r,s,i,o,a,c,u,l;if(this.re.schema_test.test(e)){for(c=this.re.schema_search,c.lastIndex=0;(n=c.exec(e))!==null;)if(i=this.testSchemaAt(e,n[2],c.lastIndex),i){this.__schema__=n[2],this.__index__=n.index+n[1].length,this.__last_index__=n.index+n[0].length+i;break}}return this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&(u=e.search(this.re.host_fuzzy_test),u>=0&&(this.__index__<0||u<this.__index__)&&(r=e.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))!==null&&(o=r.index+r[1].length,(this.__index__<0||o<this.__index__)&&(this.__schema__="",this.__index__=o,this.__last_index__=r.index+r[0].length))),this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&(l=e.indexOf("@"),l>=0&&(s=e.match(this.re.email_fuzzy))!==null&&(o=s.index+s[1].length,a=s.index+s[0].length,(this.__index__<0||o<this.__index__||o===this.__index__&&a>this.__last_index__)&&(this.__schema__="mailto:",this.__index__=o,this.__last_index__=a))),this.__index__>=0};Rt.prototype.pretest=function(e){return this.re.pretest.test(e)};Rt.prototype.testSchemaAt=function(e,n,r){return this.__compiled__[n.toLowerCase()]?this.__compiled__[n.toLowerCase()].validate(e,r,this):0};Rt.prototype.match=function(e){var n=0,r=[];this.__index__>=0&&this.__text_cache__===e&&(r.push(Eu(this,n)),n=this.__last_index__);for(var s=n?e.slice(n):e;this.test(s);)r.push(Eu(this,n)),s=s.slice(this.__last_index__),n+=this.__last_index__;return r.length?r:null};Rt.prototype.matchAtStart=function(e){if(this.__text_cache__=e,this.__index__=-1,!e.length)return null;var n=this.re.schema_at_start.exec(e);if(!n)return null;var r=this.testSchemaAt(e,n[2],n[0].length);return r&&(this.__schema__=n[2],this.__index__=n.index+n[1].length,this.__last_index__=n.index+n[0].length+r),Eu(this,0)};Rt.prototype.tlds=function(e,n){return e=Array.isArray(e)?e:[e],n?(this.__tlds__=this.__tlds__.concat(e).sort().filter(function(r,s,i){return r!==i[s-1]}).reverse(),Mo(this),this):(this.__tlds__=e.slice(),this.__tlds_replaced__=!0,Mo(this),this)};Rt.prototype.normalize=function(e){e.schema||(e.url="http://"+e.url),e.schema==="mailto:"&&!/^mailto:/i.test(e.url)&&(e.url="mailto:"+e.url)};Rt.prototype.onCompile=function(){};var iR=Rt;const oR={};function aR(t,e){return ae(),ze("button",np(rg(t.$attrs)),[Jo(t.$slots,"default")],16)}var Vd=tn(oR,[["render",aR]]);function cR(t,e){return ae(),at("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[W("path",{d:"M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"})])}const uR={class:"flex justify-end"},lR=lt({props:{item:{type:Object,default:null}},emits:["delete","update","save","toggle","dragged"],setup(t,{emit:e}){const n=t,r=iR(),s=c=>{var u;n.item.text=((u=i.value)==null?void 0:u.innerText)||"",e("update",n.item)},i=Te(null),o=c=>{e("dragged",c.clientX,c.clientY,n.item)},a=me(()=>{const c=r.match(n.item.text);return((c==null?void 0:c.reduce((u,l)=>u.replace(l.raw,`<a onclick="window.open('${l.url}', '_blank').focus()" href="${l.url}">${l.raw}</a>`),n.item.text))||n.item.text).replace(/\n/g,"<br/>")});return(c,u)=>(ae(),ze(Ze,null,[(ae(),at(zw("p"),{onFocusout:s,contenteditable:"true",class:"prose prose-a:text-blue-600",innerHTML:he(a),ref_key:"element",ref:i},null,8,["innerHTML"])),oe("div",uR,[oe("div",{class:"handle",draggable:"true",onDragend:o},[W(he(lS))],32),W(Vd,{title:"Delete",onClick:u[0]||(u[0]=l=>e("delete",t.item))},{default:Qe(()=>[W(he(aS),{class:"dark:text-white bg-transparent transition-colors"})]),_:1}),W(Vd,{onClick:u[1]||(u[1]=l=>e("toggle",t.item)),title:"Share"},{default:Qe(()=>[t.item.shared?(ae(),at(he(cR),{key:0})):(ae(),at(he(cS),{key:1}))]),_:1})])],64))}});var hR=tn(lR,[["__scopeId","data-v-78ca9de8"]]);const fR={class:"block text-sm font-bold mb-2"},dR=["type","placeholder"],pR=lt({props:{label:{default:""},type:{default:"text"},modelValue:{default:""},placeholder:{default:""}},emits:["update:modelValue"],setup(t,{emit:e}){const r=Ng(t,"modelValue",e);return(s,i)=>(ae(),ze("label",fR,[li(Bo(t.label)+" ",1),ui(oe("textarea",{class:"input",type:t.type,placeholder:t.placeholder,"onUpdate:modelValue":i[0]||(i[0]=o=>Ce(r)?r.value=o:null)},null,8,dR),[[ug,he(r)]])]))}});var gR=tn(pR,[["__scopeId","data-v-48c56649"]]);const mR={class:"mt-2 w-full"},yR=lt({props:{slot:{type:Number,default:null}},emits:["save"],setup(t,{emit:e}){const n=t,r=Te(""),s=()=>{e("save",r.value,n.slot),r.value=""};return(i,o)=>(ae(),ze("div",mR,[W(gR,{modelValue:r.value,"onUpdate:modelValue":o[0]||(o[0]=a=>r.value=a),placeholder:`Enter things into ${t.slot}...`,onKeydown:lg(qu(s,["exact","prevent"]),["enter"])},null,8,["modelValue","placeholder","onKeydown"])]))}});const vR=["placeholder"],_R=lt({props:{modelValue:{default:""},slotno:{default:0},updateEvent:null},emits:["update:modelValue"],setup(t,{emit:e}){const r=Ng(t,"modelValue",e);return(s,i)=>(ae(),ze("label",null,[li(Bo(t.slotno)+": ",1),ui(oe("input",{class:"input",placeholder:`${t.slotno} title`,"onUpdate:modelValue":i[0]||(i[0]=o=>Ce(r)?r.value=o:null),onKeydown:i[1]||(i[1]=lg(qu((...o)=>t.updateEvent&&t.updateEvent(...o),["prevent"]),["enter"])),onBlur:i[2]||(i[2]=(...o)=>t.updateEvent&&t.updateEvent(...o))},null,40,vR),[[ug,he(r)]])]))}});var wR=tn(_R,[["__scopeId","data-v-7a414e39"]]);const Pv=t=>(Lp("data-v-b87ac820"),t=t(),Fp(),t),ER={class:"h-full grid grid-cols-5 gap-4 divide-x"},bR=Pv(()=>oe("div",{class:"px-4"},[oe("h2",{class:"text-2xl dark:text-white"},"Longer List"),oe("p",null,"coming soon...")],-1)),IR={class:"px-4 mt-4 col-span-3"},TR=["slotno"],AR=Pv(()=>oe("div",{class:"px-4"},[oe("h2",{class:"text-2xl dark:text-white"},"Script"),oe("p",null,"coming soon...")],-1)),SR=lt({props:{podcastId:{type:String,default:"smartseven"}},setup(t){const e=t,n=Ys(),r=LD(),s=Te(!1),{user:i,isAuthenticated:o}=Lg(n),a=window.location.host==="localhost:3000"?"todaysdate2":"todaysdate",c=(h,f,d)=>{var v,_,T;const g=parseInt((T=(_=(v=document.elementFromPoint(h,f))==null?void 0:v.closest("section"))==null?void 0:_.attributes.slotno)==null?void 0:T.value);g&&(d.slot=g,r.saveData(e.podcastId,a))},u=()=>{s.value&&r.connect(e.podcastId,a)};Mt(o,async h=>{h&&(s.value=!0,u())},{immediate:!0}),Mt(()=>e.podcastId,u,{immediate:!0});const l={onClickSave(h,f){r.addItem({text:h,slot:f},e.podcastId,a)},onUpdateSaveDoc(){r.saveData(e.podcastId,a)},onClickDelete(h){r.removeItem(h,e.podcastId,a)},onClickUpdate(h){r.updateItem(h,e.podcastId,a)},onClickToggle(h){h.shared=!h.shared,r.updateItem(h,e.podcastId,a)}};return(h,f)=>ui((ae(),ze("main",ER,[bR,oe("div",IR,[(ae(!0),ze(Ze,null,Oc(Array.from({length:7},(d,g)=>7-g),d=>(ae(),ze("section",{key:d,slotno:d},[W(wR,{modelValue:he(r).getSlotTitleList[d],"onUpdate:modelValue":g=>he(r).getSlotTitleList[d]=g,slotno:d,updateEvent:l.onUpdateSaveDoc},null,8,["modelValue","onUpdate:modelValue","slotno","updateEvent"]),W(yR,{onSave:l.onClickSave,slot:d},null,8,["onSave","slot"]),W(Nv,null,{default:Qe(()=>[(ae(!0),ze(Ze,null,Oc(he(r).getSlotList(d),g=>(ae(),at(xv,{key:g.id},{default:Qe(()=>[W(hR,{item:g,onDelete:l.onClickDelete,onToggle:l.onClickToggle,onUpdate:l.onClickUpdate,onDragged:c},null,8,["item","onDelete","onToggle","onUpdate"])]),_:2},1024))),128))]),_:2},1024)],8,TR))),128))]),AR],512)),[[hg,s.value&&he(o)]])}});var $d=tn(SR,[["__scopeId","data-v-b87ac820"]]);const CR={};function kR(t,e){return ae(),ze("button",Hu({class:"text-white font-bold py-2 px-4 rounded transition-colors"},t.$attrs),[Jo(t.$slots,"default")],16)}var DR=tn(CR,[["render",kR]]);const RR={class:"container h-screen flex justify-center items-center"},NR={class:"p-8 max-w-6xl"},xR=oe("h1",{class:"font-bold text-indigo-800 dark:text-indigo-200 text-3xl text-center mb-8"},"Login",-1),OR=oe("h2",{class:"font-bold text-2xl text-center dark:text-gray-50 mb-8"},"Daft Doris",-1),PR=["src","alt"],MR=lt({setup(t){const e=Te(null),{loginWithFirebase:n}=Ys(),r=Ig(),s=[{name:"Google",provider:new an,color:"btn-login-google",icon:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoGCBUTExcTFRMYGBcYGhwZFxkZGhcaGhcZGhcZGRoXFx8aHysjGhwoIRgZJDUkKCwuMjIyGSE3PDcxOysxMi4BCwsLDw4PHBERHTMoISgyMTs5Oi4xMzE0MTYxMTE0MjkxMzEyMS4xOTExMTExMTEzMTExOTEzMTEzMTEzMTExMf/AABEIAOAA4AMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQIHBAUGAwj/xAA9EAABAgMFBQcDAwMDBQEBAAABAAIRITEDEkFh8AQiUXGxBQYygZGh0QdCYhNSwRQjcpLC8UNTgqLhc0T/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAwQFBgEC/8QAMBEAAgECBAQDBwUBAAAAAAAAAAECAwQREiExBUFRoSJhsRMUMnGBkeEGM0LB0VL/2gAMAwEAAhEDEQA/ALdY26YlN7b0xyQ196R9knOuyHOaAk50RAVSYbsimW3ReFflJgvzPsgEGwN7Cqb96mCA6Ju4U9EP3KY8UA70ruNEmbtcU7sr2NUmb9cOCARaY3sKpvN6iV6d3CmabtymPFANroC6a/KTG3ZlMNiL2PwotN+R5yQA5pcYiik916QSc+7IJubdmPdADHXZFRa0tMTRNrb0zykhr70igB7b0xyTc6IuivwoudckOc1ItgL2PygEw3aoDZ3sKobv1w4JB07uFM0A371ME70ruNEn7lMeKd2V7GuSATN2uKRbE3sKps364cEF0Ddwp6oAeb0gm10BA1SeLkx7ptZHeNfhAJjbszySe0umENdekeck3OuyHugG9wIgKoYQ2Rr6pFl2YQ1t+Z5IAa0gxNEni94fhMOvbupIcbkggGXAiAqlZ7vi+Uy2G95+qTRfrggFAxjhXyTtN7w+eCL32+SHblMf4QDDhCGNPNJgu+L5XMd4O+Vhs5LWRtbT9rSLrT+Tv4ESuH7Y70bVtMQ60uM/YyLR5nxH1VapdQp6bvyNS04PcXCTwyx6v+kWZ2r27s9gY2lsxv4xi7/S2J9loNv+oViJWdlaPzMGD3n7Ku2sAwTVGd/J/CsDcpcAt4/uNyf2X+nYWv1Ctvs2dg/yc5x9gFhP787YJgWX+lx/3LnFG0oeSh97qv8AkXo8LtI6KC7s2zfqXtkYltkf/Fw6OWw2f6pWtLTZmH/Fzm9QVXQQrftZrmVpcNtZbwXoXB2X9StldK0Y+zPEgPA82z9l03ZPbFhtE7K3Y/IOF4c2mY9F88qTHlpiCQRQiII5QUkbiS31KdXgtCXwNp/dH0o8XvD8JlwhDGnmqU7vd+9q2eDXO/VZ+1/i8nVjziFZHdvvfsu1wg65af8AbfAEn8TR3lPJWIVoy02Zj3PDa9DxYYx6r+zorPd8XlilAxjhXyUhv1wSvfbhRTGcD97w/CYcAIGqHblMUXY73n6IBMF3xfKHNJMRRAN+RQXXd3U0A3mMm19EMcBI1Q5t2Y5IDL0ygIsBHipmh4J8NMpJh96VEF1yVcUA3EEQFUNl4veaV27vammG3p0QEQDGJp7QTdPw+cJIvR3fKPJa3vB2vZ7HZF7zGMmtHic79o1JeOSisWfUISnJRisWzI7U7RstnszaWrg0AVxJ4NxJVZd5e9lrtMWMJs7L9oO+/wDzOAyHutX232rabVaG0tT/AIMHhYOAz4lYaybi7lLwx0Xqdlw7g0KCU6usuyE1sE0IVA3iaEIQiBRtKFSUbShXoW5z4QhCvlQEIQgBMFJCHp3XdHv/AGljdstoJtLOgf8AewZ/vHOfRWtsW1Wdqxr7N4eHDdcJx8+K+b11v0z7YtLDamWQJNnaOg5kyIwk5vA0niFZpVmng9jD4hwynKLqU9GsX5MulkvF5RmkQYxFP4Uhv5QSvQ3fKPNXTmBun4faSGkAQNUEXJ1Rdvb2pIBMBHipnOaHxJlTJAdflTFO/dlVAD4Q3a5IZD7q58EXLs6pXb86YIAbGM6Z0Q/8fZF69u6kiNyVUBi9q7fZ7PZOtbQgBonxJ/aOJJkqe7c7UftVqbZ5PBjcGN4DPiVtO/fbn9TbGzaf7VmSB+b/ALn8hQeuK55ZF3cZpZY7LudnwbhyoU/azXifZDQhCoG8CEJEwQ9PRRLoLZdi9h2+1H+22DIgF5oIz6fxxXa9l9xLCzAdbE2jpREYAGBjA1PtRWKVtOpqloZV1xO3tnhKWL6LV/4itw6NATyBK9Bs1o4btk88hHCKujZOyrFgiyyY3k0RxxrifVZgdGVFbjw/q+xkz/UWvgp/d/g+cbXYbRoN6yeABOLTTjyXgWkVBC+lCbsqrB7Q7FsLUf3LBj+bRGfA1Cndq+TIocdWPjh9n+D53Qrc7Y+m1hagusHOsT+07zT6zHqVXfeHu5tGxn+7Z7sYB7ZsPnhyMCoZ0pQ3RqW9/Rr6Rlr0ej/Jp0IQAoy4MDWsFan037nGzu7VtDd8wNnZkeAVvv8Ay4DDGdF9OO5VyG07Q3ekbOzI8PB7x+7gMOdLCvfb5RVujR/lI5vifEs2NKk9Ob6+SG/8fOCBCE/F7xShczii7He84clbMEGflTNDoxlTKiI35UReu7upoBvh9tcuCGQ+6uaV25OuCdy9OiAiwmO9TND4jw0ynNMuvSQDclXFANwEJVyqtf2zbwZdPidL/wAceUaevBZ9y7vamud7Rt77y7Cg5Cnz5rL4tduhbvD4nov7LFtTzT12RyPandgGLrAw/AmR5ONOR9VzW0WLrNxY5pa4VBEDrNWVrWea8Ns2SztW3bRoIw4jMGo5Y4rl6N9KOk9V3Oot+Izp6T1XcrpC3navdt7IusyXt4fcPIV8vRaJ0qrTp1IzWMXibdG4p1ljB4h7k0HFdt3V7mOddtdoHBwZjDC9wj68sD6d934uG0WrP/zDhicYYw48eUrBAuzrFa1raprPP6I5zi/F5KTo0X83/SCws2taAAGwwAA9k2T8VM+KLsd7Ukyb0qYrTOXepF5Md2mSk+H21yQHXZJBl2dUA2Q+6uai0mO9TNMsvTomXXpIBPiPDTJQ2mxY9pa5rXBwgWkAgg1BGK9Absq4pBsN7U0PU8NUVn3o+nBLr+yEAGtm4wh/gThkfVZ3cbuJ+g8W20gOe07jKtaf3uNCeAwrwh3sL06QUr32+SiVCKliXZcSuJU/ZuWnXn9xWn4+cE4CH5e8UDczii793mpSiJk/F5RSJMZeH2gpHfygi9Dd8vVAD/xrkhsITrnVKFydUFl7e1JADCfupnxQ8n7aZJk3pUxQHXZVQA4ACLa+qGgHxV9EmsuzKTm35jlNAY+32xbZuJ4QHMyHz5LnNa1JbrvBb7rWjEx9B/8AVpda+FyHHa2euocku7NOzhhFvqLWssk9az6I1rPolrWXVYZcDWsssVj23YVntLxFpjeG82EZTN6MiIcY4BZOtZ54LddiWQaC8j8RSVC6E5TgIS8C0eF0ZVbiKWy1fyIqtaVGOaLwZsLGya1gAELoAHkIDopMn4vhFyd7CqbjfphxXdGK9ROJBgKJvEPDX1QHQF3H5Sa27M8pIBsAIiapMJMnU9EObemE3OvSHugE8kSbT1Te0ARFUNddkeax27XZtMTas5X2x6pgDIYI+Kvok0kmBovB+2WTpi1s/NzflN23WREP1Gf624ea9ys+cyPZ8vD8pkCEcf5Xg3bbNtbVh5Ob8qI2uyje/Vs+PjbHqmDGZGQyfi8sERMYYfwvB+2WTv8Aq2Yhxe35T/rrKEP1GcPE2HVMrGZHu+Xh88UACETVY7Nssm/9WzMeD2/KR2qyJvfq2fHxtj1TBnuJkMMfF8IcSDAUXl/WWb4AWjI/5N9oFewddEDqK8wPQeAJtr6oYAZur6JNbdmeUkObemEAmOLjA0Te67IJufekEmOuyPNAaXvBC+0fjH3OoLWnWv5wWd22P7nl/GuXmsHWsssVwfE5Zrqb8/Q2LdYU0LWsuqNaz6J61n0S1rLqs8nJMAiI0lHl8dV0vZ7NxoOAB8zM48VzlkJ+R5+E+66l29TBdL+n4azn8kZ969kIuMbuFFJ4u0QHSu40SYLtcV05QJNAIvGqiw3pFDmxN4U+E3m9Ic0AnuLTAUTe0NmENddECkxt2ZQHBfVztB7WWVi1xa195z4GF4NugNMMImMMZKt7g4a+ei7/AOsZjabOR+1/Vq4HWsuq37GKVFNc8TEvJN1WumBG4OA1/HVO4OGvnopa1n0RrWXVXCrmZC4OA1/HVO4OGvnopa1n0S1rLqvBmYrg4DX8dU7g4a+eilrWfRGtZdUPMzIXBwGv46o/THD21Pop61n0RrWXVBmZD9McBrVcVan0r7SfbWL7O0cXGyIukmLrrgYA8oe6q/Ws+i7j6Qk/rWrZeAH0cKcamaqX0FKi/L/S1aTaqrzLJYb0ih7i0wFE3m9Ic0MddkVgG4J7Lswhjb0zySY0tMTRN7b0wgNF24f7nlrWKwNazzwW07w+JpHCHnPUVq9ay6rg+Jxy3U15+psW7xpoWtZdU9az6I1rPolrWXVZ5OelgYO8j0Psupdu0xXKMdAg568+i6fY37oJxHSRXS/p6osZw+TM+9jqmet2V7GqTDfrgkWmN7Cqk83qLpygIugbop8pvF2Y5IaQBdNflJguzKAbW3hEpMdekUntLjEUUnuDpBAVv9YxC02cfjadW+y4PWs+i7z6wtIfs8f22nrFnuuC1rLqugsv2I/Uwrz95/QNay6p61n0RrWfRGtZdVbKwtay6p61n0RrWfRLWsuqHhLWsuqNaz6I1rPojWsuq8Aa1l1RrWfRGtZ9Ea1lnigDWsuq7f6RxFtan8IU4ub6clxGtZ5YKwfo9ZQ/XefxaDzjER8gq148KEvoWbRY1olhPF2Y5IY29MpMbdmUPaXGIoueN4GvvSKTnXJDnNSeQZNr6IYQPFX1QGu7esdwHgeq0etZ9F0+02Rc1wNCD/8AFzDhCXDXp1XIceo5a6nya7o07OeMXHoLWsuqetZ9Ea1n0S1rLqsIuBrWXVb/ALFtbzbpqNH+PVaFrSTAV94/PRYdv3lsNktA1zy5xIDmsncEYEvMYCE5V4wWlwurKlcKSWK2eHRlO8lTVNuTwO4vQN3CiZF2mPFRsbVrmgggxEQROMaEFNgh4vld0ZmOIw2O9j8JNdekeckOBJiKJvMfDX0QCc67IJubdmPdDCAIGqTARN1PVAa3vB2LZ7bZ3LSIgYtc2rTxHQhcaPpuSYDaf/T38SsR4Jm2nom4xkFYpXVWksIPQgqW9ObxktSurT6bES/qR/oPp4lJ301IEf6kf6PQ1VhsMPFX1SaCDE0Unv8AX/67EfuVHp3ZXln9NSf/AOkf6D5/ckPpuYw/qf8A0xwNVYjxHw/C8O0dsZY2T7R7roa2Ljy/le+/XH/XZD3Oj07lQd7uwW7E9ln+rfe5t4iEA1tJzNTH0Wj1rPosztnb37Tb2lu+rzIftaJNaOQ/krD1rLPFbNLPkWd68zHq5c7y7BrWWeKNazyRrWeWCNayzxUhGGtZZ4q1/pZsV3ZL5q95PkAAMON5VVZsLnBoBJJAgKnkOPAK8+xdiNjYWVkKMYAedXe8Vn8RnhBR6v0NCwhjNy6L1M1rr0jzkhzrsgm4g+GvohhAk6vqsU1xFl2dUAX50wQwH7qZofH7aZIAvXt3UloO2NnuPyMxrVF0DoQlXKqxO0dnvsIPiExj/wA8lm8VtPeLdpfEtUT0Kvs5YvY5yOtYdVjdqdoWWztvWr7pq1gm90f2t/3GAHFc52z3udNmztLatNo8b0aG4wybzdE5Ca5S1tC5xe5xc503OcSS7MkzP8rmqHDpS8VTRdOf4IbzjMY+Gjq+vI3vbXei1tYss/7TImTTvuH5OrD8RDzqdAGwlDWvRGtZ9Ea1l1WtTpxprLFYI56rXqVZZpvFnd/TfvQGQ2W3dL/ovNB+BPDgVZQN6VIL56I1rHou67m9+DZBtjtR3BJlrOIHC04j8lo29xh4ZbFy1u0llntyLMvQ3dTTIuzrgobPate0ODg6IiCCDHgQVJkfupmtA1E8Rht6aQfelRDgY7tMk3w+2uSARfdlVMtuzQyH3VzSaDHepmgGBenTBIOju6kh/wCNMl49o7ZZ2NmbS0e1jW1cTD/koD1e67yqSZQgqn+oHeYbU/8ARsj/AGWOiT/3XjEcWjD14I7598H7UDY2V5lj9xMn2mR/a38fXguV1rLqtezs3F+0qb8kZd3dJrJD6setZdUa1nlgjWs8ka1lnitMzQ1rLPFGtfCNazywQBGQxkNcM0B0n067L/X2ppIiyz33UIlQTrEwwONFb167LU1zvcXsj+m2YSN+0g9wIAc0Qkw4yrA0LjRdG0iE651XP3db2lR4bLRG7aUslNY7vUCLs64IDb06JMj91M0PB+2mSqlkd+9KiV65KuKb4fbXJDIfdXPggFdu72ppwvTok2MZ0zoh/wCNMkBV/wBS+wP0rQ7Swf23mFoBRr/3cj1XGa1n0V/7Zs7bWzdZvaHBwg4cY1VN97u77titIQJsneB2X7HZj3WXc0crzLZ9jGvLfJLPHZ9jSa1l1RrWfRGtZ9Ea1l1VMoBrWXVENax6I1rPojWsuq9PTN7C7d2jZDGytN2ps3TYc4YcxVd72V9RrF4Ddos3WTsXDfZHymPQqsNaz6Ja1l1ViFecNmWqdxOnsy+ez+3tmtQP0rezfyeAfQzWe2DZgxXzuWDhr56KTXuFHuHJzh/NOqsK8fNFqPEHzR9Cvc07xcG8yFqe0+9Ox2IItNps25B193INbE4L59cSaknmSUg0a1/ypHcPkiZ3b5ItLtr6pMaCzZbEvP77TdaMIhomfMhcRbdt221PP9Ral5d4KBrHTgGigjGHotLrWaIr5hcTjNST2K9WrKosGzbEa1oo1rPLBOztL7Q/Gj/8oSPmPeKWtZZ4rsKFWNWmprZlD5i1rLPFPWs8ka1nlgjWss8VYPkNayzXYfTjsD9a1/WtGm4wgtqLz5ECOVSBkDUhaXuv2I/a7UMaDdEC84Nb+4+hAGPkSLp2LZmWTG2bGhoaIAaxx81n3t1kjkju+xetLfM80tl3PaF2dYou3t7Ukmfl7odGMqZUWIbAXr8qYp37sqofD7a5cE2QhvVzQEQy7OqLt+dMEmEnxUzQ8keGmXFAO9e3dSTBuyqhwAERVDZ+L3kgFdhvecOaxe1dgs9qs3Wdo2LT6g4EHAhZQJjA0Q+Xh84TXjSawZ5KKksHsUv3q7uWmxPMd6yJ3X/7XcD1Wl1rPor+2rZmWjSx7Q4OEwZx8uKrbvT3GfZxfswLmY2Z8Tf8eIyCzK9s46x1XoY9zZyh4oar0OJ1rLqjWs+ib2kGBBB4GR/56Ja1l1VQonjrWXVGtZ9E9az6Ja1l1X0fQa1l1RrWfRGtZ9Ea1l1Q9NbrWXVPWs0a1mlrWSslsNayTQhDwyNgtg10/C6TuXHyM/VbB7SDA64Q/hadbPYbS+279zZVq2g9DL0Wzwm6yT9lLZ7fMiqR/kTjrXVbju33dtdreA1pDIwL3A3RmeP+I4ilRve6/ce0td/aL1m2UGwF51DGH28JiuEoqy9k2ZllZtYxoaGiDQMPk9Vq3N9GHhhq+vJFi3s5S8UtF3Zi9h9l2ex2Qs2CVXOPie7Fzjx9gAAJBZ12O95w5IZPxeUZIJMYCntBYzbbxZrJJLBDJvyoi9d3dTQ6Xh9pptAIiarw9IhtydcE7l6dEmEnxUzkh8R4aZIALr0kNdckeab2gTFUMAdM19EAgy7vamgi/MIa4kwNEPN3w/KAZdHd8vRDTdrigtAERVDN7xfCAV37vNN2/TBRiYwwp5KT93w+eKA0fb3drZ9qk9kH/vbIxz4rg+3O420WMXM/uty8Xpx9grYDRCONfNKznX4VepbQnrs/Iq1bSnU12fkfPe0WD7Mwe0thKYlyjqK89az6K/tu2Gytd20s2vGYBPkaj1Wh7T7h7I+bWuYfxMvn3VWVpNbNMpSsZr4Wn2Ke1rLqmda49FZFt9M2mbLcjIth/JWC76b2ppasoal3p4FG6FRciJ2tVcistayT1rNWE36X28Z21nhQuPP7KhZ2z/SsCBftEeIa0n0MQpvZT6FhUaj5FXRXtYWD3kBjSSSAICpMgBxM5DNXN2V9Otjs5uvWhB+4gDDgI4HHErouzey7Gx3bKyawUiGiJkKuqaDHBSRt5PfQkjaze+CKk7vfT7abeDnj9Nkol0QYGJkPEaCt3xVVjd3O6Wz7KBBl98ovcAQHAxvNH2z5mQnJdE+VPlMtEI4181PCjGOvMswt4x13fmA3Kzild+7CqbN7xeWCUTGGFPJSk43G/TBAdDd8vVD93w/KYaCImqAi0XJlBZe3tSQw3vF8Ic4gwFEAy69Ic0B92RQ8BsxVNjQRE1QEWsuzPsk5t6Y5TTY69Ioe67Ic0Ay68Lor8Iabsj7Ic0ARFflDBemUAg2BvYV9UOF+mHFAdE3cKIfu0xQDvSu40ySZuVx4J3ZXsapM3q4IAuTvYVTJvUw4pF07uFE3i7RAAdAXcflJrbszykm1sReNfhJhvSKAHNvTCbnXpD3Sc4tMBRN7bswgBrrsj7JNbdmU2NvTKTHFxgaIAc29Mcppl0Rdx+Enm7IJubAXhX5QA3drjwSDJ3sKpsF6qQdO7hRAD9+mHFO9K7jRD92mKd2V7GqAiwXK48EFsTewr6IZvVwQXQN3CiAbzekPdDXXRA1Q8XZhNrYi8aoCLG3ZnlJDmXpj3Qx16R5oe67IID//2Q=="}],i={async onClickLogin(o,a){await n(o,a),localStorage.setItem("provider",a),await r.push("/")}};return(o,a)=>(ae(),ze("div",RR,[oe("div",NR,[xR,OR,oe("button",{type:"button",ref_key:"btnRef",ref:e},null,512),W(Nv,null,{default:Qe(()=>[(ae(),ze(Ze,null,Oc(s,(c,u)=>W(xv,{key:u},{default:Qe(()=>[W(DR,{class:hn(["btn-success flex items-center mx-auto w-full",[c.color]]),onClick:l=>i.onClickLogin(c.provider,c.name)},{default:Qe(()=>[oe("img",{class:"rounded-full w-8 h-8 mr-4",src:c.icon,alt:c.name},null,8,PR),li(" Login with "+Bo(c.name),1)]),_:2},1032,["class","onClick"])]),_:2},1024)),64))]),_:1})])]))}});function LR(){return{async beforeEnter(t,e,n){const r=Ys(),{getPersistenceFirebaseUser:s}=Ys(),{isAuthenticated:i}=Lg(r);try{await s("Google")}catch{n("/auth/login")}i.value?n():n("/auth/login")}}}const FR=[Kt({path:"/",name:"Home",component:IS,children:[{path:"",component:$d,meta:{title:"Daft Doris"}},{path:":podcastId",component:$d,meta:{title:"Daft Doris"},props:!0}]},LR()),{path:"/auth",name:"Auth",component:KE,children:[{path:"Login",component:MR}]}],UR=VE({history:nE(),routes:FR});var ns=Object.assign;function jd(t,e){Object.entries(e).forEach(([n,r])=>{t.style[n]=r})}const BR={disappearEasing:"cubic-bezier(0.4, 0, 0.2, 1)",disappearDuration:".7s",appearEasing:"cubic-bezier(0.16, 1, 0.3, 1)",appearDuration:".8s",class:null,disabled:!1,center:!1,self:!1,noNested:!0,radius:null};function zd(t){return ns(ns({},BR),t)}const Hd=(t,e,n,r)=>{const s=t.getBoundingClientRect(),i=e.radius||function(u,l,h,f){const[d,g]=[[h,u],[f,l]].map(([v,_])=>v>_/2?v:_-v);return(d**2+g**2)**.5}(s.width,s.height,n,r),o=function(u,l){const h=document.createElement("div");return h.className=u.class||"",h.style.borderRadius="99999px",h.style.transition=`transform ${u.appearDuration} ${u.appearEasing}`,h.style.transformOrigin="center center",h.style.transform="scale(0)",h.style.position="absolute",h.style.width=h.style.height=2*l+"px",jd(h,u.circleStyle||{}),h}(e,i);(function(u,l,h,f){[u.style.left,u.style.top]=[l-f,h-f].map(d=>`${d}px`)})(o,n,r,i);const a=function(u){const l=document.createElement("div");return l.style.pointerEvents="none",l.style.position="absolute",l.style.overflow="hidden",l.style.borderRadius="inherit",l.style.transition=`opacity ${u.disappearDuration} ${u.disappearEasing}`,l.style.margin="0",l.style.padding="0",["left","top","right","bottom"].forEach(h=>{l.style[h]="0"}),jd(l,u.containerStyle||{}),l}(e);var c;return a.appendChild(o),t.appendChild(a),c=()=>{o.style.transform="scale(1)"},new Promise(u=>{requestAnimationFrame(()=>{requestAnimationFrame(()=>{u(),c&&c()})})}),{hide(){a.style.opacity="0",a.addEventListener("transitionend",u=>{u.target===a&&t.removeChild(a)})}}};function Mv(t,e=0){if(e>1e3)return function(...r){console.warn("[Ripple]",...r)}("noNested alghorithm error - max calls stack size exceeded"),null;if(function(r){return r.dataset.vRippleMark===""}(t))return t;const n=t.parentElement;return n?Mv(n,e+1):null}function qd(t,e){return ns(ns({},t),e)}function Kd(t){var e,n,r,s,i,o;return ns(ns({},t.value),{self:(n=t.modifiers.self)!=null?n:(e=t.value)==null?void 0:e.self,center:(s=t.modifiers.center)!=null?s:(r=t.value)==null?void 0:r.center,noNested:(o=t.modifiers["no-nested"])!=null?o:(i=t.value)==null?void 0:i.noNested})}function VR(t){const e=new WeakMap;return{mounted(n,r){const s=Kd(r),i=function(o,a){let c=zd(a);const u=h=>c.center?function(f){const d=f.getBoundingClientRect();return[d.width/2,d.height/2]}(o):function(f,d){const g=f.getBoundingClientRect();return[d.clientX-g.x,d.clientY-g.y]}(o,h),l=h=>{if(c.disabled||c.self&&h.target!==o)return;if(c.noNested&&h.target&&h.target!==o){const _=Mv(h.target);if(_&&_!==o)return}let f=Hd(o,c,...u(h));const d=()=>{f==null||f.hide(),window.removeEventListener("mouseup",d),o.removeEventListener("mouseleave",v),o.removeEventListener("mouseenter",g)},g=_=>{f=Hd(o,c,...u(_))},v=()=>{f&&(f.hide(),f=null)};window.addEventListener("mouseup",d),o.addEventListener("mouseleave",v),o.addEventListener("mouseenter",g)};return function(h){h.dataset.vRippleMark=""}(o),getComputedStyle(o).position==="static"&&(o.style.position="relative"),o.addEventListener("mousedown",l),{updateOptions(h){c=zd(h)},unbind(){o.removeEventListener("mousedown",l),function(h){delete h.dataset.vRippleMark}(o)}}}(n,qd(t,s));e.set(n,i)},beforeUpdate(n,r){const s=e.get(n);if(s){const i=Kd(r),o=qd(t,i);s.updateOptions(o)}},unmounted(n){const r=e.get(n);r&&(e.delete(n),r.unbind())}}}const $R=Gu("loading",()=>{const t=Te(!1),e=Te(!1);function n(r,s=!0){t.value=r,e.value=s}return{value:t,transparent:e,setLoading:n}}),jR=oe("div",{class:"flex items-center justify-center space-x-2 animate-bounce"},[oe("div",{class:"w-4 h-4 bg-blue-400 rounded-full"}),oe("div",{class:"w-4 h-4 bg-green-400 rounded-full delay-300"}),oe("div",{class:"w-4 h-4 bg-black rounded-full delay-700"})],-1),zR=[jR],HR=lt({setup(t){const e=$R(),n=me(()=>e.value),r=me(()=>[(e.transparent,"bg-transparent")]);return(s,i)=>(ae(),at(qs,{name:"fade"},{default:Qe(()=>[ui(oe("div",{class:hn(["w-screen h-screen fixed top-0 left-0 flex justify-center items-center z-50",[he(r)]])},zR,2),[[hg,he(n)===!0]])]),_:1}))}}),qR=lt({setup(t){return(e,n)=>{const r=Vu("router-view");return ae(),ze(Ze,null,[W(HR),W(r)],64)}}});var KR="firebase",WR="9.6.11";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ft(KR,WR,"app");const Lv="@firebase/installations",rh="0.5.8";/**
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
 */const Fv=1e4,Uv=`w:${rh}`,Bv="FIS_v2",GR="https://firebaseinstallations.googleapis.com/v1",XR=60*60*1e3,QR="installations",YR="Installations";/**
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
 */const ZR={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},dr=new mr(QR,YR,ZR);function Vv(t){return t instanceof vn&&t.code.includes("request-failed")}/**
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
 */function $v({projectId:t}){return`${GR}/projects/${t}/installations`}function jv(t){return{token:t.token,requestStatus:2,expiresIn:eN(t.expiresIn),creationTime:Date.now()}}async function zv(t,e){const r=(await e.json()).error;return dr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Hv({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function JR(t,{refreshToken:e}){const n=Hv(t);return n.append("Authorization",tN(e)),n}async function qv(t){const e=await t();return e.status>=500&&e.status<600?t():e}function eN(t){return Number(t.replace("s","000"))}function tN(t){return`${Bv} ${t}`}/**
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
 */async function nN({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=$v(t),s=Hv(t),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={fid:n,authVersion:Bv,appId:t.appId,sdkVersion:Uv},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await qv(()=>fetch(r,a));if(c.ok){const u=await c.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:jv(u.authToken)}}else throw await zv("Create Installation",c)}/**
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
 */function Kv(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function rN(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const sN=/^[cdef][\w-]{21}$/,bu="";function iN(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=oN(t);return sN.test(n)?n:bu}catch{return bu}}function oN(t){return rN(t).substr(0,22)}/**
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
 */function Fa(t){return`${t.appName}!${t.appId}`}/**
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
 */const Wv=new Map;function Gv(t,e){const n=Fa(t);Xv(n,e),aN(n,e)}function Xv(t,e){const n=Wv.get(t);if(!!n)for(const r of n)r(e)}function aN(t,e){const n=cN();n&&n.postMessage({key:t,fid:e}),uN()}let Zn=null;function cN(){return!Zn&&"BroadcastChannel"in self&&(Zn=new BroadcastChannel("[Firebase] FID Change"),Zn.onmessage=t=>{Xv(t.data.key,t.data.fid)}),Zn}function uN(){Wv.size===0&&Zn&&(Zn.close(),Zn=null)}/**
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
 */const lN="firebase-installations-database",hN=1,pr="firebase-installations-store";let vc=null;function sh(){return vc||(vc=Wg(lN,hN,(t,e)=>{switch(e){case 0:t.createObjectStore(pr)}})),vc}async function Lo(t,e){const n=Fa(t),s=(await sh()).transaction(pr,"readwrite"),i=s.objectStore(pr),o=await i.get(n);return await i.put(e,n),await s.complete,(!o||o.fid!==e.fid)&&Gv(t,e.fid),e}async function Qv(t){const e=Fa(t),r=(await sh()).transaction(pr,"readwrite");await r.objectStore(pr).delete(e),await r.complete}async function Ua(t,e){const n=Fa(t),s=(await sh()).transaction(pr,"readwrite"),i=s.objectStore(pr),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.complete,a&&(!o||o.fid!==a.fid)&&Gv(t,a.fid),a}/**
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
 */async function ih(t){let e;const n=await Ua(t.appConfig,r=>{const s=fN(r),i=dN(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===bu?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function fN(t){const e=t||{fid:iN(),registrationStatus:0};return Yv(e)}function dN(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(dr.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=pN(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:gN(t)}:{installationEntry:e}}async function pN(t,e){try{const n=await nN(t,e);return Lo(t.appConfig,n)}catch(n){throw Vv(n)&&n.customData.serverCode===409?await Qv(t.appConfig):await Lo(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function gN(t){let e=await Wd(t.appConfig);for(;e.registrationStatus===1;)await Kv(100),e=await Wd(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await ih(t);return r||n}return e}function Wd(t){return Ua(t,e=>{if(!e)throw dr.create("installation-not-found");return Yv(e)})}function Yv(t){return mN(t)?{fid:t.fid,registrationStatus:0}:t}function mN(t){return t.registrationStatus===1&&t.registrationTime+Fv<Date.now()}/**
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
 */async function yN({appConfig:t,heartbeatServiceProvider:e},n){const r=vN(t,n),s=JR(t,n),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={installation:{sdkVersion:Uv,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await qv(()=>fetch(r,a));if(c.ok){const u=await c.json();return jv(u)}else throw await zv("Generate Auth Token",c)}function vN(t,{fid:e}){return`${$v(t)}/${e}/authTokens:generate`}/**
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
 */async function oh(t,e=!1){let n;const r=await Ua(t.appConfig,i=>{if(!Zv(i))throw dr.create("not-registered");const o=i.authToken;if(!e&&EN(o))return i;if(o.requestStatus===1)return n=_N(t,e),i;{if(!navigator.onLine)throw dr.create("app-offline");const a=IN(i);return n=wN(t,a),a}});return n?await n:r.authToken}async function _N(t,e){let n=await Gd(t.appConfig);for(;n.authToken.requestStatus===1;)await Kv(100),n=await Gd(t.appConfig);const r=n.authToken;return r.requestStatus===0?oh(t,e):r}function Gd(t){return Ua(t,e=>{if(!Zv(e))throw dr.create("not-registered");const n=e.authToken;return TN(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function wN(t,e){try{const n=await yN(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Lo(t.appConfig,r),n}catch(n){if(Vv(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Qv(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Lo(t.appConfig,r)}throw n}}function Zv(t){return t!==void 0&&t.registrationStatus===2}function EN(t){return t.requestStatus===2&&!bN(t)}function bN(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+XR}function IN(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function TN(t){return t.requestStatus===1&&t.requestTime+Fv<Date.now()}/**
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
 */async function AN(t){const e=t,{installationEntry:n,registrationPromise:r}=await ih(e);return r?r.catch(console.error):oh(e).catch(console.error),n.fid}/**
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
 */async function SN(t,e=!1){const n=t;return await CN(n),(await oh(n,e)).token}async function CN(t){const{registrationPromise:e}=await ih(t);e&&await e}/**
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
 */function kN(t){if(!t||!t.options)throw _c("App Configuration");if(!t.name)throw _c("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw _c(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function _c(t){return dr.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jv="installations",DN="installations-internal",RN=t=>{const e=t.getProvider("app").getImmediate(),n=kN(e),r=yr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},NN=t=>{const e=t.getProvider("app").getImmediate(),n=yr(e,Jv).getImmediate();return{getId:()=>AN(n),getToken:s=>SN(n,s)}};function xN(){Zt(new zt(Jv,RN,"PUBLIC")),Zt(new zt(DN,NN,"PRIVATE"))}xN();Ft(Lv,rh);Ft(Lv,rh,"esm2017");/**
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
 */const Fo="analytics",ON="firebase_id",PN="origin",MN=60*1e3,LN="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",e_="https://www.googletagmanager.com/gtag/js";/**
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
 */const St=new ia("@firebase/analytics");/**
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
 */function t_(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function FN(t,e){const n=document.createElement("script");n.src=`${e_}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function UN(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function BN(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const c=(await t_(n)).find(u=>u.measurementId===s);c&&await e[c.appId]}}catch(a){St.error(a)}t("config",s,i)}async function VN(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await t_(n);for(const c of o){const u=a.find(h=>h.measurementId===c),l=u&&e[u.appId];if(l)i.push(l);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){St.error(i)}}function $N(t,e,n,r){async function s(i,o,a){try{i==="event"?await VN(t,e,n,o,a):i==="config"?await BN(t,e,n,r,o,a):t("set",o)}catch(c){St.error(c)}}return s}function jN(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=$N(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function zN(){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(e_))return e;return null}/**
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
 */const HN={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},Ut=new mr("analytics","Analytics",HN);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qN=30,KN=1e3;class WN{constructor(e={},n=KN){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const n_=new WN;function GN(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function XN(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:GN(r)},i=LN.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw Ut.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function QN(t,e=n_,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw Ut.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Ut.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new JN;return setTimeout(async()=>{a.abort()},n!==void 0?n:MN),r_({appId:r,apiKey:s,measurementId:i},o,a,e)}async function r_(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=n_){const{appId:i,measurementId:o}=t;try{await YN(r,e)}catch(a){if(o)return St.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${a.message}]`),{appId:i,measurementId:o};throw a}try{const a=await XN(t);return s.deleteThrottleMetadata(i),a}catch(a){if(!ZN(a)){if(s.deleteThrottleMetadata(i),o)return St.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${a.message}]`),{appId:i,measurementId:o};throw a}const c=Number(a.customData.httpStatus)===503?vf(n,s.intervalMillis,qN):vf(n,s.intervalMillis),u={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return s.setThrottleMetadata(i,u),St.debug(`Calling attemptFetch again in ${c} millis`),r_(t,u,r,s)}}function YN(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(Ut.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function ZN(t){if(!(t instanceof vn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class JN{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ex(){if(zg())try{await Hg()}catch(t){return St.warn(Ut.create("indexeddb-unavailable",{errorInfo:t}).message),!1}else return St.warn(Ut.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function tx(t,e,n,r,s,i,o){var a;const c=QN(t);c.then(d=>{n[d.measurementId]=d.appId,t.options.measurementId&&d.measurementId!==t.options.measurementId&&St.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${d.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(d=>St.error(d)),e.push(c);const u=ex().then(d=>{if(d)return r.getId()}),[l,h]=await Promise.all([c,u]);zN()||FN(i,l.measurementId),s("js",new Date);const f=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return f[PN]="firebase",f.update=!0,h!=null&&(f[ON]=h),s("config",l.measurementId,f),l.measurementId}/**
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
 */class nx{constructor(e){this.app=e}_delete(){return delete Bs[this.app.options.appId],Promise.resolve()}}let Bs={},Xd=[];const Qd={};let wc="dataLayer",rx="gtag",Yd,s_,Zd=!1;function sx(){const t=[];if(Xu()&&t.push("This is a browser extension environment."),zb()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Ut.create("invalid-analytics-context",{errorInfo:e});St.warn(n.message)}}function ix(t,e,n){sx();const r=t.options.appId;if(!r)throw Ut.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)St.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ut.create("no-api-key");if(Bs[r]!=null)throw Ut.create("already-exists",{id:r});if(!Zd){UN(wc);const{wrappedGtag:i,gtagCore:o}=jN(Bs,Xd,Qd,wc,rx);s_=i,Yd=o,Zd=!0}return Bs[r]=tx(t,Xd,Qd,e,Yd,wc,n),new nx(t)}/**
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
 */async function ox(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});t("event",n,o)}}function ax(t=Yu()){t=kt(t);const e=yr(t,Fo);return e.isInitialized()?e.getImmediate():cx(t)}function cx(t,e={}){const n=yr(t,Fo);if(n.isInitialized()){const s=n.getImmediate();if(Ws(e,n.getOptions()))return s;throw Ut.create("already-initialized")}return n.initialize({options:e})}function ux(t,e,n,r){t=kt(t),ox(s_,Bs[t.app.options.appId],e,n,r).catch(s=>St.error(s))}const Jd="@firebase/analytics",ep="0.7.8";function lx(){Zt(new zt(Fo,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return ix(r,s,n)},"PUBLIC")),Zt(new zt("analytics-internal",t,"PRIVATE")),Ft(Jd,ep),Ft(Jd,ep,"esm2017");function t(e){try{const n=e.getProvider(Fo).getImmediate();return{logEvent:(r,s,i)=>ux(n,r,s,i)}}catch(n){throw Ut.create("interop-component-reg-failed",{reason:n})}}}lx();const hx={apiKey:"AIzaSyAXBQG6b0_AKCY63dbQlcecWNKmiLAKjiI",authDomain:"daftdoris-cns.firebaseapp.com",projectId:"daftdoris-cns",storageBucket:"daftdoris-cns.appspot.com",messagingSenderId:"785842200541",appId:"1:785842200541:web:8b34412472e7aa2feaa034",measurementId:"G-CCEL9G8W59"},fx=VI(hx);_u();ax(fx);M0(qR).directive("ripple",VR({class:"bg-black opacity-30"})).use(xb()).use(UR).mount("#app");
