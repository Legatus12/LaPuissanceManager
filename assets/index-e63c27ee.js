(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function Dc(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function Oc(t){if(W(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=xe(s)?Wm(s):Oc(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(xe(t))return t;if(Ee(t))return t}}const Km=/;(?![^(]*\))/g,zm=/:([^]+)/,Gm=/\/\*.*?\*\//gs;function Wm(t){const e={};return t.replace(Gm,"").split(Km).forEach(n=>{if(n){const s=n.split(zm);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Pc(t){let e="";if(xe(t))e=t;else if(W(t))for(let n=0;n<t.length;n++){const s=Pc(t[n]);s&&(e+=s+" ")}else if(Ee(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Qm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ym=Dc(Qm);function bf(t){return!!t||t===""}const It=t=>xe(t)?t:t==null?"":W(t)||Ee(t)&&(t.toString===kf||!Z(t.toString))?JSON.stringify(t,Sf,2):String(t),Sf=(t,e)=>e&&e.__v_isRef?Sf(t,e.value):fs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:Cf(e)?{[`Set(${e.size})`]:[...e.values()]}:Ee(e)&&!W(e)&&!Rf(e)?String(e):e,ve={},hs=[],Ct=()=>{},Xm=()=>!1,Jm=/^on[^a-z]/,co=t=>Jm.test(t),xc=t=>t.startsWith("onUpdate:"),Je=Object.assign,Mc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Zm=Object.prototype.hasOwnProperty,oe=(t,e)=>Zm.call(t,e),W=Array.isArray,fs=t=>uo(t)==="[object Map]",Cf=t=>uo(t)==="[object Set]",Z=t=>typeof t=="function",xe=t=>typeof t=="string",Lc=t=>typeof t=="symbol",Ee=t=>t!==null&&typeof t=="object",Af=t=>Ee(t)&&Z(t.then)&&Z(t.catch),kf=Object.prototype.toString,uo=t=>kf.call(t),ey=t=>uo(t).slice(8,-1),Rf=t=>uo(t)==="[object Object]",Uc=t=>xe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,_i=Dc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),lo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ty=/-(\w)/g,Es=lo(t=>t.replace(ty,(e,n)=>n?n.toUpperCase():"")),ny=/\B([A-Z])/g,Ls=lo(t=>t.replace(ny,"-$1").toLowerCase()),Nf=lo(t=>t.charAt(0).toUpperCase()+t.slice(1)),ca=lo(t=>t?`on${Nf(t)}`:""),fr=(t,e)=>!Object.is(t,e),Ei=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},xi=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},La=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let fl;const sy=()=>fl||(fl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Et;class ry{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Et,!e&&Et&&(this.index=(Et.scopes||(Et.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Et;try{return Et=this,e()}finally{Et=n}}}on(){Et=this}off(){Et=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function iy(t,e=Et){e&&e.active&&e.effects.push(t)}function oy(){return Et}const Fc=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Df=t=>(t.w&En)>0,Of=t=>(t.n&En)>0,ay=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=En},cy=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];Df(r)&&!Of(r)?r.delete(t):e[n++]=r,r.w&=~En,r.n&=~En}e.length=n}},Ua=new WeakMap;let Ys=0,En=1;const Fa=30;let Tt;const Vn=Symbol(""),$a=Symbol("");class $c{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,iy(this,s)}run(){if(!this.active)return this.fn();let e=Tt,n=pn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Tt,Tt=this,pn=!0,En=1<<++Ys,Ys<=Fa?ay(this):dl(this),this.fn()}finally{Ys<=Fa&&cy(this),En=1<<--Ys,Tt=this.parent,pn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Tt===this?this.deferStop=!0:this.active&&(dl(this),this.onStop&&this.onStop(),this.active=!1)}}function dl(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let pn=!0;const Pf=[];function Us(){Pf.push(pn),pn=!1}function Fs(){const t=Pf.pop();pn=t===void 0?!0:t}function ot(t,e,n){if(pn&&Tt){let s=Ua.get(t);s||Ua.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=Fc()),xf(r)}}function xf(t,e){let n=!1;Ys<=Fa?Of(t)||(t.n|=En,n=!Df(t)):n=!t.has(Tt),n&&(t.add(Tt),Tt.deps.push(t))}function Yt(t,e,n,s,r,i){const o=Ua.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&W(t)){const c=Number(s);o.forEach((u,l)=>{(l==="length"||l>=c)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":W(t)?Uc(n)&&a.push(o.get("length")):(a.push(o.get(Vn)),fs(t)&&a.push(o.get($a)));break;case"delete":W(t)||(a.push(o.get(Vn)),fs(t)&&a.push(o.get($a)));break;case"set":fs(t)&&a.push(o.get(Vn));break}if(a.length===1)a[0]&&Va(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);Va(Fc(c))}}function Va(t,e){const n=W(t)?t:[...t];for(const s of n)s.computed&&pl(s);for(const s of n)s.computed||pl(s)}function pl(t,e){(t!==Tt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const uy=Dc("__proto__,__v_isRef,__isVue"),Mf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Lc)),ly=Vc(),hy=Vc(!1,!0),fy=Vc(!0),gl=dy();function dy(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ae(this);for(let i=0,o=this.length;i<o;i++)ot(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(ae)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Us();const s=ae(this)[e].apply(this,n);return Fs(),s}}),t}function py(t){const e=ae(this);return ot(e,"has",t),e.hasOwnProperty(t)}function Vc(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?Ny:Vf:e?$f:Ff).get(s))return s;const o=W(s);if(!t){if(o&&oe(gl,r))return Reflect.get(gl,r,i);if(r==="hasOwnProperty")return py}const a=Reflect.get(s,r,i);return(Lc(r)?Mf.has(r):uy(r))||(t||ot(s,"get",r),e)?a:Qe(a)?o&&Uc(r)?a:a.value:Ee(a)?t?Bf(a):xr(a):a}}const gy=Lf(),my=Lf(!0);function Lf(t=!1){return function(n,s,r,i){let o=n[s];if(Is(o)&&Qe(o)&&!Qe(r))return!1;if(!t&&(!Mi(r)&&!Is(r)&&(o=ae(o),r=ae(r)),!W(n)&&Qe(o)&&!Qe(r)))return o.value=r,!0;const a=W(n)&&Uc(s)?Number(s)<n.length:oe(n,s),c=Reflect.set(n,s,r,i);return n===ae(i)&&(a?fr(r,o)&&Yt(n,"set",s,r):Yt(n,"add",s,r)),c}}function yy(t,e){const n=oe(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Yt(t,"delete",e,void 0),s}function vy(t,e){const n=Reflect.has(t,e);return(!Lc(e)||!Mf.has(e))&&ot(t,"has",e),n}function wy(t){return ot(t,"iterate",W(t)?"length":Vn),Reflect.ownKeys(t)}const Uf={get:ly,set:gy,deleteProperty:yy,has:vy,ownKeys:wy},_y={get:fy,set(t,e){return!0},deleteProperty(t,e){return!0}},Ey=Je({},Uf,{get:hy,set:my}),Bc=t=>t,ho=t=>Reflect.getPrototypeOf(t);function oi(t,e,n=!1,s=!1){t=t.__v_raw;const r=ae(t),i=ae(e);n||(e!==i&&ot(r,"get",e),ot(r,"get",i));const{has:o}=ho(r),a=s?Bc:n?Hc:dr;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function ai(t,e=!1){const n=this.__v_raw,s=ae(n),r=ae(t);return e||(t!==r&&ot(s,"has",t),ot(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function ci(t,e=!1){return t=t.__v_raw,!e&&ot(ae(t),"iterate",Vn),Reflect.get(t,"size",t)}function ml(t){t=ae(t);const e=ae(this);return ho(e).has.call(e,t)||(e.add(t),Yt(e,"add",t,t)),this}function yl(t,e){e=ae(e);const n=ae(this),{has:s,get:r}=ho(n);let i=s.call(n,t);i||(t=ae(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?fr(e,o)&&Yt(n,"set",t,e):Yt(n,"add",t,e),this}function vl(t){const e=ae(this),{has:n,get:s}=ho(e);let r=n.call(e,t);r||(t=ae(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&Yt(e,"delete",t,void 0),i}function wl(){const t=ae(this),e=t.size!==0,n=t.clear();return e&&Yt(t,"clear",void 0,void 0),n}function ui(t,e){return function(s,r){const i=this,o=i.__v_raw,a=ae(o),c=e?Bc:t?Hc:dr;return!t&&ot(a,"iterate",Vn),o.forEach((u,l)=>s.call(r,c(u),c(l),i))}}function li(t,e,n){return function(...s){const r=this.__v_raw,i=ae(r),o=fs(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=r[t](...s),l=n?Bc:e?Hc:dr;return!e&&ot(i,"iterate",c?$a:Vn),{next(){const{value:h,done:f}=u.next();return f?{value:h,done:f}:{value:a?[l(h[0]),l(h[1])]:l(h),done:f}},[Symbol.iterator](){return this}}}}function rn(t){return function(...e){return t==="delete"?!1:this}}function Iy(){const t={get(i){return oi(this,i)},get size(){return ci(this)},has:ai,add:ml,set:yl,delete:vl,clear:wl,forEach:ui(!1,!1)},e={get(i){return oi(this,i,!1,!0)},get size(){return ci(this)},has:ai,add:ml,set:yl,delete:vl,clear:wl,forEach:ui(!1,!0)},n={get(i){return oi(this,i,!0)},get size(){return ci(this,!0)},has(i){return ai.call(this,i,!0)},add:rn("add"),set:rn("set"),delete:rn("delete"),clear:rn("clear"),forEach:ui(!0,!1)},s={get(i){return oi(this,i,!0,!0)},get size(){return ci(this,!0)},has(i){return ai.call(this,i,!0)},add:rn("add"),set:rn("set"),delete:rn("delete"),clear:rn("clear"),forEach:ui(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=li(i,!1,!1),n[i]=li(i,!0,!1),e[i]=li(i,!1,!0),s[i]=li(i,!0,!0)}),[t,n,e,s]}const[Ty,by,Sy,Cy]=Iy();function jc(t,e){const n=e?t?Cy:Sy:t?by:Ty;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(oe(n,r)&&r in s?n:s,r,i)}const Ay={get:jc(!1,!1)},ky={get:jc(!1,!0)},Ry={get:jc(!0,!1)},Ff=new WeakMap,$f=new WeakMap,Vf=new WeakMap,Ny=new WeakMap;function Dy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Oy(t){return t.__v_skip||!Object.isExtensible(t)?0:Dy(ey(t))}function xr(t){return Is(t)?t:qc(t,!1,Uf,Ay,Ff)}function Py(t){return qc(t,!1,Ey,ky,$f)}function Bf(t){return qc(t,!0,_y,Ry,Vf)}function qc(t,e,n,s,r){if(!Ee(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=Oy(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function ds(t){return Is(t)?ds(t.__v_raw):!!(t&&t.__v_isReactive)}function Is(t){return!!(t&&t.__v_isReadonly)}function Mi(t){return!!(t&&t.__v_isShallow)}function jf(t){return ds(t)||Is(t)}function ae(t){const e=t&&t.__v_raw;return e?ae(e):t}function qf(t){return xi(t,"__v_skip",!0),t}const dr=t=>Ee(t)?xr(t):t,Hc=t=>Ee(t)?Bf(t):t;function Hf(t){pn&&Tt&&(t=ae(t),xf(t.dep||(t.dep=Fc())))}function Kf(t,e){t=ae(t);const n=t.dep;n&&Va(n)}function Qe(t){return!!(t&&t.__v_isRef===!0)}function Mr(t){return zf(t,!1)}function xy(t){return zf(t,!0)}function zf(t,e){return Qe(t)?t:new My(t,e)}class My{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ae(e),this._value=n?e:dr(e)}get value(){return Hf(this),this._value}set value(e){const n=this.__v_isShallow||Mi(e)||Is(e);e=n?e:ae(e),fr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:dr(e),Kf(this))}}function gt(t){return Qe(t)?t.value:t}const Ly={get:(t,e,n)=>gt(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Qe(r)&&!Qe(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Gf(t){return ds(t)?t:new Proxy(t,Ly)}var Wf;class Uy{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Wf]=!1,this._dirty=!0,this.effect=new $c(e,()=>{this._dirty||(this._dirty=!0,Kf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=ae(this);return Hf(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Wf="__v_isReadonly";function Fy(t,e,n=!1){let s,r;const i=Z(t);return i?(s=t,r=Ct):(s=t.get,r=t.set),new Uy(s,r,i||!r,n)}function gn(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){fo(i,e,n)}return r}function mt(t,e,n,s){if(Z(t)){const i=gn(t,e,n,s);return i&&Af(i)&&i.catch(o=>{fo(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(mt(t[i],e,n,s));return r}function fo(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const u=i.ec;if(u){for(let l=0;l<u.length;l++)if(u[l](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){gn(c,null,10,[t,o,a]);return}}$y(t,n,r,s)}function $y(t,e,n,s=!0){console.error(t)}let pr=!1,Ba=!1;const Ge=[];let xt=0;const ps=[];let qt=null,Pn=0;const Qf=Promise.resolve();let Kc=null;function Yf(t){const e=Kc||Qf;return t?e.then(this?t.bind(this):t):e}function Vy(t){let e=xt+1,n=Ge.length;for(;e<n;){const s=e+n>>>1;gr(Ge[s])<t?e=s+1:n=s}return e}function zc(t){(!Ge.length||!Ge.includes(t,pr&&t.allowRecurse?xt+1:xt))&&(t.id==null?Ge.push(t):Ge.splice(Vy(t.id),0,t),Xf())}function Xf(){!pr&&!Ba&&(Ba=!0,Kc=Qf.then(Zf))}function By(t){const e=Ge.indexOf(t);e>xt&&Ge.splice(e,1)}function jy(t){W(t)?ps.push(...t):(!qt||!qt.includes(t,t.allowRecurse?Pn+1:Pn))&&ps.push(t),Xf()}function _l(t,e=pr?xt+1:0){for(;e<Ge.length;e++){const n=Ge[e];n&&n.pre&&(Ge.splice(e,1),e--,n())}}function Jf(t){if(ps.length){const e=[...new Set(ps)];if(ps.length=0,qt){qt.push(...e);return}for(qt=e,qt.sort((n,s)=>gr(n)-gr(s)),Pn=0;Pn<qt.length;Pn++)qt[Pn]();qt=null,Pn=0}}const gr=t=>t.id==null?1/0:t.id,qy=(t,e)=>{const n=gr(t)-gr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Zf(t){Ba=!1,pr=!0,Ge.sort(qy);const e=Ct;try{for(xt=0;xt<Ge.length;xt++){const n=Ge[xt];n&&n.active!==!1&&gn(n,null,14)}}finally{xt=0,Ge.length=0,Jf(),pr=!1,Kc=null,(Ge.length||ps.length)&&Zf()}}function Hy(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ve;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const l=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[l]||ve;f&&(r=n.map(g=>xe(g)?g.trim():g)),h&&(r=n.map(La))}let a,c=s[a=ca(e)]||s[a=ca(Es(e))];!c&&i&&(c=s[a=ca(Ls(e))]),c&&mt(c,t,6,r);const u=s[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,mt(u,t,6,r)}}function ed(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!Z(t)){const c=u=>{const l=ed(u,e,!0);l&&(a=!0,Je(o,l))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Ee(t)&&s.set(t,null),null):(W(i)?i.forEach(c=>o[c]=null):Je(o,i),Ee(t)&&s.set(t,o),o)}function po(t,e){return!t||!co(e)?!1:(e=e.slice(2).replace(/Once$/,""),oe(t,e[0].toLowerCase()+e.slice(1))||oe(t,Ls(e))||oe(t,e))}let dt=null,go=null;function Li(t){const e=dt;return dt=t,go=t&&t.type.__scopeId||null,e}function Gc(t){go=t}function Wc(){go=null}function Ky(t,e=dt,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Rl(-1);const i=Li(e);let o;try{o=t(...r)}finally{Li(i),s._d&&Rl(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function ua(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:u,render:l,renderCache:h,data:f,setupState:g,ctx:v,inheritAttrs:y}=t;let C,k;const x=Li(t);try{if(n.shapeFlag&4){const Q=r||s;C=Pt(l.call(Q,Q,h,i,g,f,v)),k=c}else{const Q=e;C=Pt(Q.length>1?Q(i,{attrs:c,slots:a,emit:u}):Q(i,null)),k=e.props?c:zy(c)}}catch(Q){rr.length=0,fo(Q,t,1),C=pt(Gt)}let O=C;if(k&&y!==!1){const Q=Object.keys(k),{shapeFlag:re}=O;Q.length&&re&7&&(o&&Q.some(xc)&&(k=Gy(k,o)),O=In(O,k))}return n.dirs&&(O=In(O),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&(O.transition=n.transition),C=O,Li(x),C}const zy=t=>{let e;for(const n in t)(n==="class"||n==="style"||co(n))&&((e||(e={}))[n]=t[n]);return e},Gy=(t,e)=>{const n={};for(const s in t)(!xc(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Wy(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?El(s,o,u):!!o;if(c&8){const l=e.dynamicProps;for(let h=0;h<l.length;h++){const f=l[h];if(o[f]!==s[f]&&!po(u,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?El(s,o,u):!0:!!o;return!1}function El(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!po(n,i))return!0}return!1}function Qy({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Yy=t=>t.__isSuspense;function Xy(t,e){e&&e.pendingBranch?W(t)?e.effects.push(...t):e.effects.push(t):jy(t)}function Ii(t,e){if(Re){let n=Re.provides;const s=Re.parent&&Re.parent.provides;s===n&&(n=Re.provides=Object.create(s)),n[t]=e}}function At(t,e,n=!1){const s=Re||dt;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Z(e)?e.call(s.proxy):e}}const hi={};function Ti(t,e,n){return td(t,e,n)}function td(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=ve){const a=oy()===(Re==null?void 0:Re.scope)?Re:null;let c,u=!1,l=!1;if(Qe(t)?(c=()=>t.value,u=Mi(t)):ds(t)?(c=()=>t,s=!0):W(t)?(l=!0,u=t.some(O=>ds(O)||Mi(O)),c=()=>t.map(O=>{if(Qe(O))return O.value;if(ds(O))return Ln(O);if(Z(O))return gn(O,a,2)})):Z(t)?e?c=()=>gn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),mt(t,a,3,[f])}:c=Ct,e&&s){const O=c;c=()=>Ln(O())}let h,f=O=>{h=k.onStop=()=>{gn(O,a,4)}},g;if(yr)if(f=Ct,e?n&&mt(e,a,3,[c(),l?[]:void 0,f]):c(),r==="sync"){const O=Gv();g=O.__watcherHandles||(O.__watcherHandles=[])}else return Ct;let v=l?new Array(t.length).fill(hi):hi;const y=()=>{if(k.active)if(e){const O=k.run();(s||u||(l?O.some((Q,re)=>fr(Q,v[re])):fr(O,v)))&&(h&&h(),mt(e,a,3,[O,v===hi?void 0:l&&v[0]===hi?[]:v,f]),v=O)}else k.run()};y.allowRecurse=!!e;let C;r==="sync"?C=y:r==="post"?C=()=>rt(y,a&&a.suspense):(y.pre=!0,a&&(y.id=a.uid),C=()=>zc(y));const k=new $c(c,C);e?n?y():v=k.run():r==="post"?rt(k.run.bind(k),a&&a.suspense):k.run();const x=()=>{k.stop(),a&&a.scope&&Mc(a.scope.effects,k)};return g&&g.push(x),x}function Jy(t,e,n){const s=this.proxy,r=xe(t)?t.includes(".")?nd(s,t):()=>s[t]:t.bind(s,s);let i;Z(e)?i=e:(i=e.handler,n=e);const o=Re;Ts(this);const a=td(r,i.bind(s),n);return o?Ts(o):Bn(),a}function nd(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Ln(t,e){if(!Ee(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Qe(t))Ln(t.value,e);else if(W(t))for(let n=0;n<t.length;n++)Ln(t[n],e);else if(Cf(t)||fs(t))t.forEach(n=>{Ln(n,e)});else if(Rf(t))for(const n in t)Ln(t[n],e);return t}function Zy(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Lr(()=>{t.isMounted=!0}),ad(()=>{t.isUnmounting=!0}),t}const lt=[Function,Array],ev={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:lt,onEnter:lt,onAfterEnter:lt,onEnterCancelled:lt,onBeforeLeave:lt,onLeave:lt,onAfterLeave:lt,onLeaveCancelled:lt,onBeforeAppear:lt,onAppear:lt,onAfterAppear:lt,onAppearCancelled:lt},setup(t,{slots:e}){const n=Vv(),s=Zy();let r;return()=>{const i=e.default&&rd(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const y of i)if(y.type!==Gt){o=y;break}}const a=ae(t),{mode:c}=a;if(s.isLeaving)return la(o);const u=Il(o);if(!u)return la(o);const l=ja(u,a,s,n);qa(u,l);const h=n.subTree,f=h&&Il(h);let g=!1;const{getTransitionKey:v}=u.type;if(v){const y=v();r===void 0?r=y:y!==r&&(r=y,g=!0)}if(f&&f.type!==Gt&&(!xn(u,f)||g)){const y=ja(f,a,s,n);if(qa(f,y),c==="out-in")return s.isLeaving=!0,y.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},la(o);c==="in-out"&&u.type!==Gt&&(y.delayLeave=(C,k,x)=>{const O=sd(s,f);O[String(f.key)]=f,C._leaveCb=()=>{k(),C._leaveCb=void 0,delete l.delayedLeave},l.delayedLeave=x})}return o}}},tv=ev;function sd(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function ja(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:l,onBeforeLeave:h,onLeave:f,onAfterLeave:g,onLeaveCancelled:v,onBeforeAppear:y,onAppear:C,onAfterAppear:k,onAppearCancelled:x}=e,O=String(t.key),Q=sd(n,t),re=(Y,ye)=>{Y&&mt(Y,s,9,ye)},Ie=(Y,ye)=>{const de=ye[1];re(Y,ye),W(Y)?Y.every(je=>je.length<=1)&&de():Y.length<=1&&de()},De={mode:i,persisted:o,beforeEnter(Y){let ye=a;if(!n.isMounted)if(r)ye=y||a;else return;Y._leaveCb&&Y._leaveCb(!0);const de=Q[O];de&&xn(t,de)&&de.el._leaveCb&&de.el._leaveCb(),re(ye,[Y])},enter(Y){let ye=c,de=u,je=l;if(!n.isMounted)if(r)ye=C||c,de=k||u,je=x||l;else return;let qe=!1;const yt=Y._enterCb=Bt=>{qe||(qe=!0,Bt?re(je,[Y]):re(de,[Y]),De.delayedLeave&&De.delayedLeave(),Y._enterCb=void 0)};ye?Ie(ye,[Y,yt]):yt()},leave(Y,ye){const de=String(t.key);if(Y._enterCb&&Y._enterCb(!0),n.isUnmounting)return ye();re(h,[Y]);let je=!1;const qe=Y._leaveCb=yt=>{je||(je=!0,ye(),yt?re(v,[Y]):re(g,[Y]),Y._leaveCb=void 0,Q[de]===t&&delete Q[de])};Q[de]=t,f?Ie(f,[Y,qe]):qe()},clone(Y){return ja(Y,e,n,s)}};return De}function la(t){if(mo(t))return t=In(t),t.children=null,t}function Il(t){return mo(t)?t.children?t.children[0]:void 0:t}function qa(t,e){t.shapeFlag&6&&t.component?qa(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function rd(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===ht?(o.patchFlag&128&&r++,s=s.concat(rd(o.children,e,a))):(e||o.type!==Gt)&&s.push(a!=null?In(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function id(t){return Z(t)?{setup:t,name:t.name}:t}const bi=t=>!!t.type.__asyncLoader,mo=t=>t.type.__isKeepAlive;function nv(t,e){od(t,"a",e)}function sv(t,e){od(t,"da",e)}function od(t,e,n=Re){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(yo(e,s,n),n){let r=n.parent;for(;r&&r.parent;)mo(r.parent.vnode)&&rv(s,e,n,r),r=r.parent}}function rv(t,e,n,s){const r=yo(e,t,s,!0);cd(()=>{Mc(s[e],r)},n)}function yo(t,e,n=Re,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Us(),Ts(n);const a=mt(e,n,t,o);return Bn(),Fs(),a});return s?r.unshift(i):r.push(i),i}}const nn=t=>(e,n=Re)=>(!yr||t==="sp")&&yo(t,(...s)=>e(...s),n),iv=nn("bm"),Lr=nn("m"),ov=nn("bu"),av=nn("u"),ad=nn("bum"),cd=nn("um"),cv=nn("sp"),uv=nn("rtg"),lv=nn("rtc");function hv(t,e=Re){yo("ec",t,e)}function fv(t,e){const n=dt;if(n===null)return t;const s=_o(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,u=ve]=e[i];o&&(Z(o)&&(o={mounted:o,updated:o}),o.deep&&Ln(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:u}))}return t}function Rn(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(Us(),mt(c,n,8,[t.el,a,t,e]),Fs())}}const dv=Symbol();function ud(t,e,n,s){let r;const i=n&&n[s];if(W(t)||xe(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(Ee(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const u=o[a];r[a]=e(t[u],u,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}const Ha=t=>t?_d(t)?_o(t)||t.proxy:Ha(t.parent):null,sr=Je(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ha(t.parent),$root:t=>Ha(t.root),$emit:t=>t.emit,$options:t=>Qc(t),$forceUpdate:t=>t.f||(t.f=()=>zc(t.update)),$nextTick:t=>t.n||(t.n=Yf.bind(t.proxy)),$watch:t=>Jy.bind(t)}),ha=(t,e)=>t!==ve&&!t.__isScriptSetup&&oe(t,e),pv={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(ha(s,e))return o[e]=1,s[e];if(r!==ve&&oe(r,e))return o[e]=2,r[e];if((u=t.propsOptions[0])&&oe(u,e))return o[e]=3,i[e];if(n!==ve&&oe(n,e))return o[e]=4,n[e];Ka&&(o[e]=0)}}const l=sr[e];let h,f;if(l)return e==="$attrs"&&ot(t,"get",e),l(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ve&&oe(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,oe(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return ha(r,e)?(r[e]=n,!0):s!==ve&&oe(s,e)?(s[e]=n,!0):oe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==ve&&oe(t,o)||ha(e,o)||(a=i[0])&&oe(a,o)||oe(s,o)||oe(sr,o)||oe(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:oe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Ka=!0;function gv(t){const e=Qc(t),n=t.proxy,s=t.ctx;Ka=!1,e.beforeCreate&&Tl(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:h,mounted:f,beforeUpdate:g,updated:v,activated:y,deactivated:C,beforeDestroy:k,beforeUnmount:x,destroyed:O,unmounted:Q,render:re,renderTracked:Ie,renderTriggered:De,errorCaptured:Y,serverPrefetch:ye,expose:de,inheritAttrs:je,components:qe,directives:yt,filters:Bt}=e;if(u&&mv(u,s,null,t.appContext.config.unwrapInjectedRef),o)for(const pe in o){const he=o[pe];Z(he)&&(s[pe]=he.bind(n))}if(r){const pe=r.call(n,n);Ee(pe)&&(t.data=xr(pe))}if(Ka=!0,i)for(const pe in i){const he=i[pe],vt=Z(he)?he.bind(n,n):Z(he.get)?he.get.bind(n,n):Ct,kn=!Z(he)&&Z(he.set)?he.set.bind(n):Ct,wt=ft({get:vt,set:kn});Object.defineProperty(s,pe,{enumerable:!0,configurable:!0,get:()=>wt.value,set:st=>wt.value=st})}if(a)for(const pe in a)ld(a[pe],s,n,pe);if(c){const pe=Z(c)?c.call(n):c;Reflect.ownKeys(pe).forEach(he=>{Ii(he,pe[he])})}l&&Tl(l,t,"c");function Se(pe,he){W(he)?he.forEach(vt=>pe(vt.bind(n))):he&&pe(he.bind(n))}if(Se(iv,h),Se(Lr,f),Se(ov,g),Se(av,v),Se(nv,y),Se(sv,C),Se(hv,Y),Se(lv,Ie),Se(uv,De),Se(ad,x),Se(cd,Q),Se(cv,ye),W(de))if(de.length){const pe=t.exposed||(t.exposed={});de.forEach(he=>{Object.defineProperty(pe,he,{get:()=>n[he],set:vt=>n[he]=vt})})}else t.exposed||(t.exposed={});re&&t.render===Ct&&(t.render=re),je!=null&&(t.inheritAttrs=je),qe&&(t.components=qe),yt&&(t.directives=yt)}function mv(t,e,n=Ct,s=!1){W(t)&&(t=za(t));for(const r in t){const i=t[r];let o;Ee(i)?"default"in i?o=At(i.from||r,i.default,!0):o=At(i.from||r):o=At(i),Qe(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Tl(t,e,n){mt(W(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function ld(t,e,n,s){const r=s.includes(".")?nd(n,s):()=>n[s];if(xe(t)){const i=e[t];Z(i)&&Ti(r,i)}else if(Z(t))Ti(r,t.bind(n));else if(Ee(t))if(W(t))t.forEach(i=>ld(i,e,n,s));else{const i=Z(t.handler)?t.handler.bind(n):e[t.handler];Z(i)&&Ti(r,i,t)}}function Qc(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(u=>Ui(c,u,o,!0)),Ui(c,e,o)),Ee(e)&&i.set(e,c),c}function Ui(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Ui(t,i,n,!0),r&&r.forEach(o=>Ui(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=yv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const yv={data:bl,props:Dn,emits:Dn,methods:Dn,computed:Dn,beforeCreate:tt,created:tt,beforeMount:tt,mounted:tt,beforeUpdate:tt,updated:tt,beforeDestroy:tt,beforeUnmount:tt,destroyed:tt,unmounted:tt,activated:tt,deactivated:tt,errorCaptured:tt,serverPrefetch:tt,components:Dn,directives:Dn,watch:wv,provide:bl,inject:vv};function bl(t,e){return e?t?function(){return Je(Z(t)?t.call(this,this):t,Z(e)?e.call(this,this):e)}:e:t}function vv(t,e){return Dn(za(t),za(e))}function za(t){if(W(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function tt(t,e){return t?[...new Set([].concat(t,e))]:e}function Dn(t,e){return t?Je(Je(Object.create(null),t),e):e}function wv(t,e){if(!t)return e;if(!e)return t;const n=Je(Object.create(null),t);for(const s in e)n[s]=tt(t[s],e[s]);return n}function _v(t,e,n,s=!1){const r={},i={};xi(i,wo,1),t.propsDefaults=Object.create(null),hd(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Py(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function Ev(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=ae(r),[c]=t.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const l=t.vnode.dynamicProps;for(let h=0;h<l.length;h++){let f=l[h];if(po(t.emitsOptions,f))continue;const g=e[f];if(c)if(oe(i,f))g!==i[f]&&(i[f]=g,u=!0);else{const v=Es(f);r[v]=Ga(c,a,v,g,t,!1)}else g!==i[f]&&(i[f]=g,u=!0)}}}else{hd(t,e,r,i)&&(u=!0);let l;for(const h in a)(!e||!oe(e,h)&&((l=Ls(h))===h||!oe(e,l)))&&(c?n&&(n[h]!==void 0||n[l]!==void 0)&&(r[h]=Ga(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!oe(e,h))&&(delete i[h],u=!0)}u&&Yt(t,"set","$attrs")}function hd(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(_i(c))continue;const u=e[c];let l;r&&oe(r,l=Es(c))?!i||!i.includes(l)?n[l]=u:(a||(a={}))[l]=u:po(t.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,o=!0)}if(i){const c=ae(n),u=a||ve;for(let l=0;l<i.length;l++){const h=i[l];n[h]=Ga(r,c,h,u[h],t,!oe(u,h))}}return o}function Ga(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=oe(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&Z(c)){const{propsDefaults:u}=r;n in u?s=u[n]:(Ts(r),s=u[n]=c.call(null,e),Bn())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Ls(n))&&(s=!0))}return s}function fd(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!Z(t)){const l=h=>{c=!0;const[f,g]=fd(h,e,!0);Je(o,f),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}if(!i&&!c)return Ee(t)&&s.set(t,hs),hs;if(W(i))for(let l=0;l<i.length;l++){const h=Es(i[l]);Sl(h)&&(o[h]=ve)}else if(i)for(const l in i){const h=Es(l);if(Sl(h)){const f=i[l],g=o[h]=W(f)||Z(f)?{type:f}:Object.assign({},f);if(g){const v=kl(Boolean,g.type),y=kl(String,g.type);g[0]=v>-1,g[1]=y<0||v<y,(v>-1||oe(g,"default"))&&a.push(h)}}}const u=[o,a];return Ee(t)&&s.set(t,u),u}function Sl(t){return t[0]!=="$"}function Cl(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Al(t,e){return Cl(t)===Cl(e)}function kl(t,e){return W(e)?e.findIndex(n=>Al(n,t)):Z(e)&&Al(e,t)?0:-1}const dd=t=>t[0]==="_"||t==="$stable",Yc=t=>W(t)?t.map(Pt):[Pt(t)],Iv=(t,e,n)=>{if(e._n)return e;const s=Ky((...r)=>Yc(e(...r)),n);return s._c=!1,s},pd=(t,e,n)=>{const s=t._ctx;for(const r in t){if(dd(r))continue;const i=t[r];if(Z(i))e[r]=Iv(r,i,s);else if(i!=null){const o=Yc(i);e[r]=()=>o}}},gd=(t,e)=>{const n=Yc(e);t.slots.default=()=>n},Tv=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ae(e),xi(e,"_",n)):pd(e,t.slots={})}else t.slots={},e&&gd(t,e);xi(t.slots,wo,1)},bv=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=ve;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Je(r,e),!n&&a===1&&delete r._):(i=!e.$stable,pd(e,r)),o=e}else e&&(gd(t,e),o={default:1});if(i)for(const a in r)!dd(a)&&!(a in o)&&delete r[a]};function md(){return{app:null,config:{isNativeTag:Xm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Sv=0;function Cv(t,e){return function(s,r=null){Z(s)||(s=Object.assign({},s)),r!=null&&!Ee(r)&&(r=null);const i=md(),o=new Set;let a=!1;const c=i.app={_uid:Sv++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Wv,get config(){return i.config},set config(u){},use(u,...l){return o.has(u)||(u&&Z(u.install)?(o.add(u),u.install(c,...l)):Z(u)&&(o.add(u),u(c,...l))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,l){return l?(i.components[u]=l,c):i.components[u]},directive(u,l){return l?(i.directives[u]=l,c):i.directives[u]},mount(u,l,h){if(!a){const f=pt(s,r);return f.appContext=i,l&&e?e(f,u):t(f,u,h),a=!0,c._container=u,u.__vue_app__=c,_o(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,l){return i.provides[u]=l,c}};return c}}function Wa(t,e,n,s,r=!1){if(W(t)){t.forEach((f,g)=>Wa(f,e&&(W(e)?e[g]:e),n,s,r));return}if(bi(s)&&!r)return;const i=s.shapeFlag&4?_o(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,u=e&&e.r,l=a.refs===ve?a.refs={}:a.refs,h=a.setupState;if(u!=null&&u!==c&&(xe(u)?(l[u]=null,oe(h,u)&&(h[u]=null)):Qe(u)&&(u.value=null)),Z(c))gn(c,a,12,[o,l]);else{const f=xe(c),g=Qe(c);if(f||g){const v=()=>{if(t.f){const y=f?oe(h,c)?h[c]:l[c]:c.value;r?W(y)&&Mc(y,i):W(y)?y.includes(i)||y.push(i):f?(l[c]=[i],oe(h,c)&&(h[c]=l[c])):(c.value=[i],t.k&&(l[t.k]=c.value))}else f?(l[c]=o,oe(h,c)&&(h[c]=o)):g&&(c.value=o,t.k&&(l[t.k]=o))};o?(v.id=-1,rt(v,n)):v()}}}const rt=Xy;function Av(t){return kv(t)}function kv(t,e){const n=sy();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:h,nextSibling:f,setScopeId:g=Ct,insertStaticContent:v}=t,y=(d,p,m,w=null,I=null,A=null,D=!1,S=null,R=!!p.dynamicChildren)=>{if(d===p)return;d&&!xn(d,p)&&(w=N(d),st(d,I,A,!0),d=null),p.patchFlag===-2&&(R=!1,p.dynamicChildren=null);const{type:T,ref:B,shapeFlag:L}=p;switch(T){case vo:C(d,p,m,w);break;case Gt:k(d,p,m,w);break;case fa:d==null&&x(p,m,w,D);break;case ht:qe(d,p,m,w,I,A,D,S,R);break;default:L&1?re(d,p,m,w,I,A,D,S,R):L&6?yt(d,p,m,w,I,A,D,S,R):(L&64||L&128)&&T.process(d,p,m,w,I,A,D,S,R,ie)}B!=null&&I&&Wa(B,d&&d.ref,A,p||d,!p)},C=(d,p,m,w)=>{if(d==null)s(p.el=a(p.children),m,w);else{const I=p.el=d.el;p.children!==d.children&&u(I,p.children)}},k=(d,p,m,w)=>{d==null?s(p.el=c(p.children||""),m,w):p.el=d.el},x=(d,p,m,w)=>{[d.el,d.anchor]=v(d.children,p,m,w,d.el,d.anchor)},O=({el:d,anchor:p},m,w)=>{let I;for(;d&&d!==p;)I=f(d),s(d,m,w),d=I;s(p,m,w)},Q=({el:d,anchor:p})=>{let m;for(;d&&d!==p;)m=f(d),r(d),d=m;r(p)},re=(d,p,m,w,I,A,D,S,R)=>{D=D||p.type==="svg",d==null?Ie(p,m,w,I,A,D,S,R):ye(d,p,I,A,D,S,R)},Ie=(d,p,m,w,I,A,D,S)=>{let R,T;const{type:B,props:L,shapeFlag:j,transition:G,dirs:te}=d;if(R=d.el=o(d.type,A,L&&L.is,L),j&8?l(R,d.children):j&16&&Y(d.children,R,null,w,I,A&&B!=="foreignObject",D,S),te&&Rn(d,null,w,"created"),De(R,d,d.scopeId,D,w),L){for(const fe in L)fe!=="value"&&!_i(fe)&&i(R,fe,null,L[fe],A,d.children,w,I,P);"value"in L&&i(R,"value",null,L.value),(T=L.onVnodeBeforeMount)&&Ot(T,w,d)}te&&Rn(d,null,w,"beforeMount");const ge=(!I||I&&!I.pendingBranch)&&G&&!G.persisted;ge&&G.beforeEnter(R),s(R,p,m),((T=L&&L.onVnodeMounted)||ge||te)&&rt(()=>{T&&Ot(T,w,d),ge&&G.enter(R),te&&Rn(d,null,w,"mounted")},I)},De=(d,p,m,w,I)=>{if(m&&g(d,m),w)for(let A=0;A<w.length;A++)g(d,w[A]);if(I){let A=I.subTree;if(p===A){const D=I.vnode;De(d,D,D.scopeId,D.slotScopeIds,I.parent)}}},Y=(d,p,m,w,I,A,D,S,R=0)=>{for(let T=R;T<d.length;T++){const B=d[T]=S?cn(d[T]):Pt(d[T]);y(null,B,p,m,w,I,A,D,S)}},ye=(d,p,m,w,I,A,D)=>{const S=p.el=d.el;let{patchFlag:R,dynamicChildren:T,dirs:B}=p;R|=d.patchFlag&16;const L=d.props||ve,j=p.props||ve;let G;m&&Nn(m,!1),(G=j.onVnodeBeforeUpdate)&&Ot(G,m,p,d),B&&Rn(p,d,m,"beforeUpdate"),m&&Nn(m,!0);const te=I&&p.type!=="foreignObject";if(T?de(d.dynamicChildren,T,S,m,w,te,A):D||he(d,p,S,null,m,w,te,A,!1),R>0){if(R&16)je(S,p,L,j,m,w,I);else if(R&2&&L.class!==j.class&&i(S,"class",null,j.class,I),R&4&&i(S,"style",L.style,j.style,I),R&8){const ge=p.dynamicProps;for(let fe=0;fe<ge.length;fe++){const Ce=ge[fe],_t=L[Ce],ss=j[Ce];(ss!==_t||Ce==="value")&&i(S,Ce,_t,ss,I,d.children,m,w,P)}}R&1&&d.children!==p.children&&l(S,p.children)}else!D&&T==null&&je(S,p,L,j,m,w,I);((G=j.onVnodeUpdated)||B)&&rt(()=>{G&&Ot(G,m,p,d),B&&Rn(p,d,m,"updated")},w)},de=(d,p,m,w,I,A,D)=>{for(let S=0;S<p.length;S++){const R=d[S],T=p[S],B=R.el&&(R.type===ht||!xn(R,T)||R.shapeFlag&70)?h(R.el):m;y(R,T,B,null,w,I,A,D,!0)}},je=(d,p,m,w,I,A,D)=>{if(m!==w){if(m!==ve)for(const S in m)!_i(S)&&!(S in w)&&i(d,S,m[S],null,D,p.children,I,A,P);for(const S in w){if(_i(S))continue;const R=w[S],T=m[S];R!==T&&S!=="value"&&i(d,S,T,R,D,p.children,I,A,P)}"value"in w&&i(d,"value",m.value,w.value)}},qe=(d,p,m,w,I,A,D,S,R)=>{const T=p.el=d?d.el:a(""),B=p.anchor=d?d.anchor:a("");let{patchFlag:L,dynamicChildren:j,slotScopeIds:G}=p;G&&(S=S?S.concat(G):G),d==null?(s(T,m,w),s(B,m,w),Y(p.children,m,B,I,A,D,S,R)):L>0&&L&64&&j&&d.dynamicChildren?(de(d.dynamicChildren,j,m,I,A,D,S),(p.key!=null||I&&p===I.subTree)&&yd(d,p,!0)):he(d,p,m,B,I,A,D,S,R)},yt=(d,p,m,w,I,A,D,S,R)=>{p.slotScopeIds=S,d==null?p.shapeFlag&512?I.ctx.activate(p,m,w,D,R):Bt(p,m,w,I,A,D,R):zs(d,p,R)},Bt=(d,p,m,w,I,A,D)=>{const S=d.component=$v(d,w,I);if(mo(d)&&(S.ctx.renderer=ie),Bv(S),S.asyncDep){if(I&&I.registerDep(S,Se),!d.el){const R=S.subTree=pt(Gt);k(null,R,p,m)}return}Se(S,d,p,m,I,A,D)},zs=(d,p,m)=>{const w=p.component=d.component;if(Wy(d,p,m))if(w.asyncDep&&!w.asyncResolved){pe(w,p,m);return}else w.next=p,By(w.update),w.update();else p.el=d.el,w.vnode=p},Se=(d,p,m,w,I,A,D)=>{const S=()=>{if(d.isMounted){let{next:B,bu:L,u:j,parent:G,vnode:te}=d,ge=B,fe;Nn(d,!1),B?(B.el=te.el,pe(d,B,D)):B=te,L&&Ei(L),(fe=B.props&&B.props.onVnodeBeforeUpdate)&&Ot(fe,G,B,te),Nn(d,!0);const Ce=ua(d),_t=d.subTree;d.subTree=Ce,y(_t,Ce,h(_t.el),N(_t),d,I,A),B.el=Ce.el,ge===null&&Qy(d,Ce.el),j&&rt(j,I),(fe=B.props&&B.props.onVnodeUpdated)&&rt(()=>Ot(fe,G,B,te),I)}else{let B;const{el:L,props:j}=p,{bm:G,m:te,parent:ge}=d,fe=bi(p);if(Nn(d,!1),G&&Ei(G),!fe&&(B=j&&j.onVnodeBeforeMount)&&Ot(B,ge,p),Nn(d,!0),L&&ee){const Ce=()=>{d.subTree=ua(d),ee(L,d.subTree,d,I,null)};fe?p.type.__asyncLoader().then(()=>!d.isUnmounted&&Ce()):Ce()}else{const Ce=d.subTree=ua(d);y(null,Ce,m,w,d,I,A),p.el=Ce.el}if(te&&rt(te,I),!fe&&(B=j&&j.onVnodeMounted)){const Ce=p;rt(()=>Ot(B,ge,Ce),I)}(p.shapeFlag&256||ge&&bi(ge.vnode)&&ge.vnode.shapeFlag&256)&&d.a&&rt(d.a,I),d.isMounted=!0,p=m=w=null}},R=d.effect=new $c(S,()=>zc(T),d.scope),T=d.update=()=>R.run();T.id=d.uid,Nn(d,!0),T()},pe=(d,p,m)=>{p.component=d;const w=d.vnode.props;d.vnode=p,d.next=null,Ev(d,p.props,w,m),bv(d,p.children,m),Us(),_l(),Fs()},he=(d,p,m,w,I,A,D,S,R=!1)=>{const T=d&&d.children,B=d?d.shapeFlag:0,L=p.children,{patchFlag:j,shapeFlag:G}=p;if(j>0){if(j&128){kn(T,L,m,w,I,A,D,S,R);return}else if(j&256){vt(T,L,m,w,I,A,D,S,R);return}}G&8?(B&16&&P(T,I,A),L!==T&&l(m,L)):B&16?G&16?kn(T,L,m,w,I,A,D,S,R):P(T,I,A,!0):(B&8&&l(m,""),G&16&&Y(L,m,w,I,A,D,S,R))},vt=(d,p,m,w,I,A,D,S,R)=>{d=d||hs,p=p||hs;const T=d.length,B=p.length,L=Math.min(T,B);let j;for(j=0;j<L;j++){const G=p[j]=R?cn(p[j]):Pt(p[j]);y(d[j],G,m,null,I,A,D,S,R)}T>B?P(d,I,A,!0,!1,L):Y(p,m,w,I,A,D,S,R,L)},kn=(d,p,m,w,I,A,D,S,R)=>{let T=0;const B=p.length;let L=d.length-1,j=B-1;for(;T<=L&&T<=j;){const G=d[T],te=p[T]=R?cn(p[T]):Pt(p[T]);if(xn(G,te))y(G,te,m,null,I,A,D,S,R);else break;T++}for(;T<=L&&T<=j;){const G=d[L],te=p[j]=R?cn(p[j]):Pt(p[j]);if(xn(G,te))y(G,te,m,null,I,A,D,S,R);else break;L--,j--}if(T>L){if(T<=j){const G=j+1,te=G<B?p[G].el:w;for(;T<=j;)y(null,p[T]=R?cn(p[T]):Pt(p[T]),m,te,I,A,D,S,R),T++}}else if(T>j)for(;T<=L;)st(d[T],I,A,!0),T++;else{const G=T,te=T,ge=new Map;for(T=te;T<=j;T++){const at=p[T]=R?cn(p[T]):Pt(p[T]);at.key!=null&&ge.set(at.key,T)}let fe,Ce=0;const _t=j-te+1;let ss=!1,ul=0;const Gs=new Array(_t);for(T=0;T<_t;T++)Gs[T]=0;for(T=G;T<=L;T++){const at=d[T];if(Ce>=_t){st(at,I,A,!0);continue}let Dt;if(at.key!=null)Dt=ge.get(at.key);else for(fe=te;fe<=j;fe++)if(Gs[fe-te]===0&&xn(at,p[fe])){Dt=fe;break}Dt===void 0?st(at,I,A,!0):(Gs[Dt-te]=T+1,Dt>=ul?ul=Dt:ss=!0,y(at,p[Dt],m,null,I,A,D,S,R),Ce++)}const ll=ss?Rv(Gs):hs;for(fe=ll.length-1,T=_t-1;T>=0;T--){const at=te+T,Dt=p[at],hl=at+1<B?p[at+1].el:w;Gs[T]===0?y(null,Dt,m,hl,I,A,D,S,R):ss&&(fe<0||T!==ll[fe]?wt(Dt,m,hl,2):fe--)}}},wt=(d,p,m,w,I=null)=>{const{el:A,type:D,transition:S,children:R,shapeFlag:T}=d;if(T&6){wt(d.component.subTree,p,m,w);return}if(T&128){d.suspense.move(p,m,w);return}if(T&64){D.move(d,p,m,ie);return}if(D===ht){s(A,p,m);for(let L=0;L<R.length;L++)wt(R[L],p,m,w);s(d.anchor,p,m);return}if(D===fa){O(d,p,m);return}if(w!==2&&T&1&&S)if(w===0)S.beforeEnter(A),s(A,p,m),rt(()=>S.enter(A),I);else{const{leave:L,delayLeave:j,afterLeave:G}=S,te=()=>s(A,p,m),ge=()=>{L(A,()=>{te(),G&&G()})};j?j(A,te,ge):ge()}else s(A,p,m)},st=(d,p,m,w=!1,I=!1)=>{const{type:A,props:D,ref:S,children:R,dynamicChildren:T,shapeFlag:B,patchFlag:L,dirs:j}=d;if(S!=null&&Wa(S,null,m,d,!0),B&256){p.ctx.deactivate(d);return}const G=B&1&&j,te=!bi(d);let ge;if(te&&(ge=D&&D.onVnodeBeforeUnmount)&&Ot(ge,p,d),B&6)_(d.component,m,w);else{if(B&128){d.suspense.unmount(m,w);return}G&&Rn(d,null,p,"beforeUnmount"),B&64?d.type.remove(d,p,m,I,ie,w):T&&(A!==ht||L>0&&L&64)?P(T,p,m,!1,!0):(A===ht&&L&384||!I&&B&16)&&P(R,p,m),w&&ns(d)}(te&&(ge=D&&D.onVnodeUnmounted)||G)&&rt(()=>{ge&&Ot(ge,p,d),G&&Rn(d,null,p,"unmounted")},m)},ns=d=>{const{type:p,el:m,anchor:w,transition:I}=d;if(p===ht){ii(m,w);return}if(p===fa){Q(d);return}const A=()=>{r(m),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(d.shapeFlag&1&&I&&!I.persisted){const{leave:D,delayLeave:S}=I,R=()=>D(m,A);S?S(d.el,A,R):R()}else A()},ii=(d,p)=>{let m;for(;d!==p;)m=f(d),r(d),d=m;r(p)},_=(d,p,m)=>{const{bum:w,scope:I,update:A,subTree:D,um:S}=d;w&&Ei(w),I.stop(),A&&(A.active=!1,st(D,d,p,m)),S&&rt(S,p),rt(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},P=(d,p,m,w=!1,I=!1,A=0)=>{for(let D=A;D<d.length;D++)st(d[D],p,m,w,I)},N=d=>d.shapeFlag&6?N(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),$=(d,p,m)=>{d==null?p._vnode&&st(p._vnode,null,null,!0):y(p._vnode||null,d,p,null,null,null,m),_l(),Jf(),p._vnode=d},ie={p:y,um:st,m:wt,r:ns,mt:Bt,mc:Y,pc:he,pbc:de,n:N,o:t};let Te,ee;return e&&([Te,ee]=e(ie)),{render:$,hydrate:Te,createApp:Cv($,Te)}}function Nn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function yd(t,e,n=!1){const s=t.children,r=e.children;if(W(s)&&W(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=cn(r[i]),a.el=o.el),n||yd(o,a)),a.type===vo&&(a.el=o.el)}}function Rv(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const u=t[s];if(u!==0){if(r=n[n.length-1],t[r]<u){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Nv=t=>t.__isTeleport,ht=Symbol(void 0),vo=Symbol(void 0),Gt=Symbol(void 0),fa=Symbol(void 0),rr=[];let bt=null;function Wt(t=!1){rr.push(bt=t?null:[])}function Dv(){rr.pop(),bt=rr[rr.length-1]||null}let mr=1;function Rl(t){mr+=t}function vd(t){return t.dynamicChildren=mr>0?bt||hs:null,Dv(),mr>0&&bt&&bt.push(t),t}function mn(t,e,n,s,r,i){return vd(q(t,e,n,s,r,i,!0))}function Ov(t,e,n,s,r){return vd(pt(t,e,n,s,r,!0))}function Qa(t){return t?t.__v_isVNode===!0:!1}function xn(t,e){return t.type===e.type&&t.key===e.key}const wo="__vInternal",wd=({key:t})=>t??null,Si=({ref:t,ref_key:e,ref_for:n})=>t!=null?xe(t)||Qe(t)||Z(t)?{i:dt,r:t,k:e,f:!!n}:t:null;function q(t,e=null,n=null,s=0,r=null,i=t===ht?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&wd(e),ref:e&&Si(e),scopeId:go,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:dt};return a?(Xc(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=xe(n)?8:16),mr>0&&!o&&bt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&bt.push(c),c}const pt=Pv;function Pv(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===dv)&&(t=Gt),Qa(t)){const a=In(t,e,!0);return n&&Xc(a,n),mr>0&&!i&&bt&&(a.shapeFlag&6?bt[bt.indexOf(t)]=a:bt.push(a)),a.patchFlag|=-2,a}if(Kv(t)&&(t=t.__vccOpts),e){e=xv(e);let{class:a,style:c}=e;a&&!xe(a)&&(e.class=Pc(a)),Ee(c)&&(jf(c)&&!W(c)&&(c=Je({},c)),e.style=Oc(c))}const o=xe(t)?1:Yy(t)?128:Nv(t)?64:Ee(t)?4:Z(t)?2:0;return q(t,e,n,s,r,o,i,!0)}function xv(t){return t?jf(t)||wo in t?Je({},t):t:null}function In(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?Lv(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&wd(a),ref:e&&e.ref?n&&r?W(r)?r.concat(Si(e)):[r,Si(e)]:Si(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ht?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&In(t.ssContent),ssFallback:t.ssFallback&&In(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Mv(t=" ",e=0){return pt(vo,null,t,e)}function Pt(t){return t==null||typeof t=="boolean"?pt(Gt):W(t)?pt(ht,null,t.slice()):typeof t=="object"?cn(t):pt(vo,null,String(t))}function cn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:In(t)}function Xc(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(W(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Xc(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(wo in e)?e._ctx=dt:r===3&&dt&&(dt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Z(e)?(e={default:e,_ctx:dt},n=32):(e=String(e),s&64?(n=16,e=[Mv(e)]):n=8);t.children=e,t.shapeFlag|=n}function Lv(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Pc([e.class,s.class]));else if(r==="style")e.style=Oc([e.style,s.style]);else if(co(r)){const i=e[r],o=s[r];o&&i!==o&&!(W(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Ot(t,e,n,s=null){mt(t,e,7,[n,s])}const Uv=md();let Fv=0;function $v(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||Uv,i={uid:Fv++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new ry(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:fd(s,r),emitsOptions:ed(s,r),emit:null,emitted:null,propsDefaults:ve,inheritAttrs:s.inheritAttrs,ctx:ve,data:ve,props:ve,attrs:ve,slots:ve,refs:ve,setupState:ve,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Hy.bind(null,i),t.ce&&t.ce(i),i}let Re=null;const Vv=()=>Re||dt,Ts=t=>{Re=t,t.scope.on()},Bn=()=>{Re&&Re.scope.off(),Re=null};function _d(t){return t.vnode.shapeFlag&4}let yr=!1;function Bv(t,e=!1){yr=e;const{props:n,children:s}=t.vnode,r=_d(t);_v(t,n,r,e),Tv(t,s);const i=r?jv(t,e):void 0;return yr=!1,i}function jv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=qf(new Proxy(t.ctx,pv));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?Hv(t):null;Ts(t),Us();const i=gn(s,t,0,[t.props,r]);if(Fs(),Bn(),Af(i)){if(i.then(Bn,Bn),e)return i.then(o=>{Nl(t,o,e)}).catch(o=>{fo(o,t,0)});t.asyncDep=i}else Nl(t,i,e)}else Ed(t,e)}function Nl(t,e,n){Z(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ee(e)&&(t.setupState=Gf(e)),Ed(t,n)}let Dl;function Ed(t,e,n){const s=t.type;if(!t.render){if(!e&&Dl&&!s.render){const r=s.template||Qc(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,u=Je(Je({isCustomElement:i,delimiters:a},o),c);s.render=Dl(r,u)}}t.render=s.render||Ct}Ts(t),Us(),gv(t),Fs(),Bn()}function qv(t){return new Proxy(t.attrs,{get(e,n){return ot(t,"get","$attrs"),e[n]}})}function Hv(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=qv(t))},slots:t.slots,emit:t.emit,expose:e}}function _o(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Gf(qf(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in sr)return sr[n](t)},has(e,n){return n in e||n in sr}}))}function Kv(t){return Z(t)&&"__vccOpts"in t}const ft=(t,e)=>Fy(t,e,yr);function Id(t,e,n){const s=arguments.length;return s===2?Ee(e)&&!W(e)?Qa(e)?pt(t,null,[e]):pt(t,e):pt(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Qa(n)&&(n=[n]),pt(t,e,n))}const zv=Symbol(""),Gv=()=>At(zv),Wv="3.2.47",Qv="http://www.w3.org/2000/svg",Mn=typeof document<"u"?document:null,Ol=Mn&&Mn.createElement("template"),Yv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?Mn.createElementNS(Qv,t):Mn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Mn.createTextNode(t),createComment:t=>Mn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Mn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Ol.innerHTML=s?`<svg>${t}</svg>`:t;const a=Ol.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Xv(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Jv(t,e,n){const s=t.style,r=xe(n);if(n&&!r){if(e&&!xe(e))for(const i in e)n[i]==null&&Ya(s,i,"");for(const i in n)Ya(s,i,n[i])}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const Pl=/\s*!important$/;function Ya(t,e,n){if(W(n))n.forEach(s=>Ya(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Zv(t,e);Pl.test(n)?t.setProperty(Ls(s),n.replace(Pl,""),"important"):t[s]=n}}const xl=["Webkit","Moz","ms"],da={};function Zv(t,e){const n=da[e];if(n)return n;let s=Es(e);if(s!=="filter"&&s in t)return da[e]=s;s=Nf(s);for(let r=0;r<xl.length;r++){const i=xl[r]+s;if(i in t)return da[e]=i}return e}const Ml="http://www.w3.org/1999/xlink";function ew(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Ml,e.slice(6,e.length)):t.setAttributeNS(Ml,e,n);else{const i=Ym(e);n==null||i&&!bf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function tw(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=bf(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function is(t,e,n,s){t.addEventListener(e,n,s)}function nw(t,e,n,s){t.removeEventListener(e,n,s)}function sw(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=rw(e);if(s){const u=i[e]=aw(s,r);is(t,a,u,c)}else o&&(nw(t,a,o,c),i[e]=void 0)}}const Ll=/(?:Once|Passive|Capture)$/;function rw(t){let e;if(Ll.test(t)){e={};let s;for(;s=t.match(Ll);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ls(t.slice(2)),e]}let pa=0;const iw=Promise.resolve(),ow=()=>pa||(iw.then(()=>pa=0),pa=Date.now());function aw(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;mt(cw(s,n.value),e,5,[s])};return n.value=t,n.attached=ow(),n}function cw(t,e){if(W(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Ul=/^on[a-z]/,uw=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?Xv(t,s,r):e==="style"?Jv(t,n,s):co(e)?xc(e)||sw(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):lw(t,e,s,r))?tw(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),ew(t,e,s,r))};function lw(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Ul.test(e)&&Z(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Ul.test(e)&&xe(n)?!1:e in t}const hw={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};tv.props;const Fl=t=>{const e=t.props["onUpdate:modelValue"]||!1;return W(e)?n=>Ei(e,n):e};function fw(t){t.target.composing=!0}function $l(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const dw={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=Fl(r);const i=s||r.props&&r.props.type==="number";is(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=La(a)),t._assign(a)}),n&&is(t,"change",()=>{t.value=t.value.trim()}),e||(is(t,"compositionstart",fw),is(t,"compositionend",$l),is(t,"change",$l))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=Fl(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&La(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},pw=Je({patchProp:uw},Yv);let Vl;function gw(){return Vl||(Vl=Av(pw))}const mw=(...t)=>{const e=gw().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=yw(s);if(!r)return;const i=e._component;!Z(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function yw(t){return xe(t)?document.querySelector(t):t}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const os=typeof window<"u";function vw(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const le=Object.assign;function ga(t,e){const n={};for(const s in e){const r=e[s];n[s]=kt(r)?r.map(t):t(r)}return n}const ir=()=>{},kt=Array.isArray,ww=/\/$/,_w=t=>t.replace(ww,"");function ma(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=bw(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function Ew(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Bl(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Iw(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&bs(e.matched[s],n.matched[r])&&Td(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function bs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Td(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Tw(t[n],e[n]))return!1;return!0}function Tw(t,e){return kt(t)?jl(t,e):kt(e)?jl(e,t):t===e}function jl(t,e){return kt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function bw(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var vr;(function(t){t.pop="pop",t.push="push"})(vr||(vr={}));var or;(function(t){t.back="back",t.forward="forward",t.unknown=""})(or||(or={}));function Sw(t){if(!t)if(os){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),_w(t)}const Cw=/^[^#]+#/;function Aw(t,e){return t.replace(Cw,"#")+e}function kw(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Eo=()=>({left:window.pageXOffset,top:window.pageYOffset});function Rw(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=kw(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function ql(t,e){return(history.state?history.state.position-e:-1)+t}const Xa=new Map;function Nw(t,e){Xa.set(t,e)}function Dw(t){const e=Xa.get(t);return Xa.delete(t),e}let Ow=()=>location.protocol+"//"+location.host;function bd(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),Bl(c,"")}return Bl(n,t)+s+r}function Pw(t,e,n,s){let r=[],i=[],o=null;const a=({state:f})=>{const g=bd(t,location),v=n.value,y=e.value;let C=0;if(f){if(n.value=g,e.value=f,o&&o===v){o=null;return}C=y?f.position-y.position:0}else s(g);r.forEach(k=>{k(n.value,v,{delta:C,type:vr.pop,direction:C?C>0?or.forward:or.back:or.unknown})})};function c(){o=n.value}function u(f){r.push(f);const g=()=>{const v=r.indexOf(f);v>-1&&r.splice(v,1)};return i.push(g),g}function l(){const{history:f}=window;f.state&&f.replaceState(le({},f.state,{scroll:Eo()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:h}}function Hl(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?Eo():null}}function xw(t){const{history:e,location:n}=window,s={value:bd(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,l){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:Ow()+t+c;try{e[l?"replaceState":"pushState"](u,"",f),r.value=u}catch(g){console.error(g),n[l?"replace":"assign"](f)}}function o(c,u){const l=le({},e.state,Hl(r.value.back,c,r.value.forward,!0),u,{position:r.value.position});i(c,l,!0),s.value=c}function a(c,u){const l=le({},r.value,e.state,{forward:c,scroll:Eo()});i(l.current,l,!0);const h=le({},Hl(s.value,c,null),{position:l.position+1},u);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function Mw(t){t=Sw(t);const e=xw(t),n=Pw(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=le({location:"",base:t,go:s,createHref:Aw.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function Lw(t){return typeof t=="string"||t&&typeof t=="object"}function Sd(t){return typeof t=="string"||typeof t=="symbol"}const on={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Cd=Symbol("");var Kl;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Kl||(Kl={}));function Ss(t,e){return le(new Error,{type:t,[Cd]:!0},e)}function jt(t,e){return t instanceof Error&&Cd in t&&(e==null||!!(t.type&e))}const zl="[^/]+?",Uw={sensitive:!1,strict:!1,start:!0,end:!0},Fw=/[.+*?^${}()[\]/\\]/g;function $w(t,e){const n=le({},Uw,e),s=[];let r=n.start?"^":"";const i=[];for(const u of t){const l=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let h=0;h<u.length;h++){const f=u[h];let g=40+(n.sensitive?.25:0);if(f.type===0)h||(r+="/"),r+=f.value.replace(Fw,"\\$&"),g+=40;else if(f.type===1){const{value:v,repeatable:y,optional:C,regexp:k}=f;i.push({name:v,repeatable:y,optional:C});const x=k||zl;if(x!==zl){g+=10;try{new RegExp(`(${x})`)}catch(Q){throw new Error(`Invalid custom RegExp for param "${v}" (${x}): `+Q.message)}}let O=y?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;h||(O=C&&u.length<2?`(?:/${O})`:"/"+O),C&&(O+="?"),r+=O,g+=20,C&&(g+=-8),y&&(g+=-20),x===".*"&&(g+=-50)}l.push(g)}s.push(l)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(u){const l=u.match(o),h={};if(!l)return null;for(let f=1;f<l.length;f++){const g=l[f]||"",v=i[f-1];h[v.name]=g&&v.repeatable?g.split("/"):g}return h}function c(u){let l="",h=!1;for(const f of t){(!h||!l.endsWith("/"))&&(l+="/"),h=!1;for(const g of f)if(g.type===0)l+=g.value;else if(g.type===1){const{value:v,repeatable:y,optional:C}=g,k=v in u?u[v]:"";if(kt(k)&&!y)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const x=kt(k)?k.join("/"):k;if(!x)if(C)f.length<2&&(l.endsWith("/")?l=l.slice(0,-1):h=!0);else throw new Error(`Missing required param "${v}"`);l+=x}}return l||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function Vw(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Bw(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=Vw(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(Gl(s))return 1;if(Gl(r))return-1}return r.length-s.length}function Gl(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const jw={type:0,value:""},qw=/[a-zA-Z0-9_]/;function Hw(t){if(!t)return[[]];if(t==="/")return[[jw]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,u="",l="";function h(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function f(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(u&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:c==="("?n=2:qw.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:n=3:l+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),r}function Kw(t,e,n){const s=$w(Hw(t.path),n),r=le(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function zw(t,e){const n=[],s=new Map;e=Yl({strict:!1,end:!0,sensitive:!1},e);function r(l){return s.get(l)}function i(l,h,f){const g=!f,v=Gw(l);v.aliasOf=f&&f.record;const y=Yl(e,l),C=[v];if("alias"in l){const O=typeof l.alias=="string"?[l.alias]:l.alias;for(const Q of O)C.push(le({},v,{components:f?f.record.components:v.components,path:Q,aliasOf:f?f.record:v}))}let k,x;for(const O of C){const{path:Q}=O;if(h&&Q[0]!=="/"){const re=h.record.path,Ie=re[re.length-1]==="/"?"":"/";O.path=h.record.path+(Q&&Ie+Q)}if(k=Kw(O,h,y),f?f.alias.push(k):(x=x||k,x!==k&&x.alias.push(k),g&&l.name&&!Ql(k)&&o(l.name)),v.children){const re=v.children;for(let Ie=0;Ie<re.length;Ie++)i(re[Ie],k,f&&f.children[Ie])}f=f||k,(k.record.components&&Object.keys(k.record.components).length||k.record.name||k.record.redirect)&&c(k)}return x?()=>{o(x)}:ir}function o(l){if(Sd(l)){const h=s.get(l);h&&(s.delete(l),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(l);h>-1&&(n.splice(h,1),l.record.name&&s.delete(l.record.name),l.children.forEach(o),l.alias.forEach(o))}}function a(){return n}function c(l){let h=0;for(;h<n.length&&Bw(l,n[h])>=0&&(l.record.path!==n[h].record.path||!Ad(l,n[h]));)h++;n.splice(h,0,l),l.record.name&&!Ql(l)&&s.set(l.record.name,l)}function u(l,h){let f,g={},v,y;if("name"in l&&l.name){if(f=s.get(l.name),!f)throw Ss(1,{location:l});y=f.record.name,g=le(Wl(h.params,f.keys.filter(x=>!x.optional).map(x=>x.name)),l.params&&Wl(l.params,f.keys.map(x=>x.name))),v=f.stringify(g)}else if("path"in l)v=l.path,f=n.find(x=>x.re.test(v)),f&&(g=f.parse(v),y=f.record.name);else{if(f=h.name?s.get(h.name):n.find(x=>x.re.test(h.path)),!f)throw Ss(1,{location:l,currentLocation:h});y=f.record.name,g=le({},h.params,l.params),v=f.stringify(g)}const C=[];let k=f;for(;k;)C.unshift(k.record),k=k.parent;return{name:y,path:v,params:g,matched:C,meta:Qw(C)}}return t.forEach(l=>i(l)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function Wl(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function Gw(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Ww(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Ww(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Ql(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Qw(t){return t.reduce((e,n)=>le(e,n.meta),{})}function Yl(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Ad(t,e){return e.children.some(n=>n===t||Ad(t,n))}const kd=/#/g,Yw=/&/g,Xw=/\//g,Jw=/=/g,Zw=/\?/g,Rd=/\+/g,e_=/%5B/g,t_=/%5D/g,Nd=/%5E/g,n_=/%60/g,Dd=/%7B/g,s_=/%7C/g,Od=/%7D/g,r_=/%20/g;function Jc(t){return encodeURI(""+t).replace(s_,"|").replace(e_,"[").replace(t_,"]")}function i_(t){return Jc(t).replace(Dd,"{").replace(Od,"}").replace(Nd,"^")}function Ja(t){return Jc(t).replace(Rd,"%2B").replace(r_,"+").replace(kd,"%23").replace(Yw,"%26").replace(n_,"`").replace(Dd,"{").replace(Od,"}").replace(Nd,"^")}function o_(t){return Ja(t).replace(Jw,"%3D")}function a_(t){return Jc(t).replace(kd,"%23").replace(Zw,"%3F")}function c_(t){return t==null?"":a_(t).replace(Xw,"%2F")}function Fi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function u_(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(Rd," "),o=i.indexOf("="),a=Fi(o<0?i:i.slice(0,o)),c=o<0?null:Fi(i.slice(o+1));if(a in e){let u=e[a];kt(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function Xl(t){let e="";for(let n in t){const s=t[n];if(n=o_(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(kt(s)?s.map(i=>i&&Ja(i)):[s&&Ja(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function l_(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=kt(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const h_=Symbol(""),Jl=Symbol(""),Io=Symbol(""),Zc=Symbol(""),Za=Symbol("");function Ws(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function un(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Ss(4,{from:n,to:e})):h instanceof Error?a(h):Lw(h)?a(Ss(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},u=t.call(s&&s.instances[r],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch(h=>a(h))})}function ya(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(f_(a)){const u=(a.__vccOpts||a)[e];u&&r.push(un(u,n,s,i,o))}else{let c=a();r.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const l=vw(u)?u.default:u;i.components[o]=l;const f=(l.__vccOpts||l)[e];return f&&un(f,n,s,i,o)()}))}}return r}function f_(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Zl(t){const e=At(Io),n=At(Zc),s=ft(()=>e.resolve(gt(t.to))),r=ft(()=>{const{matched:c}=s.value,{length:u}=c,l=c[u-1],h=n.matched;if(!l||!h.length)return-1;const f=h.findIndex(bs.bind(null,l));if(f>-1)return f;const g=eh(c[u-2]);return u>1&&eh(l)===g&&h[h.length-1].path!==g?h.findIndex(bs.bind(null,c[u-2])):f}),i=ft(()=>r.value>-1&&m_(n.params,s.value.params)),o=ft(()=>r.value>-1&&r.value===n.matched.length-1&&Td(n.params,s.value.params));function a(c={}){return g_(c)?e[gt(t.replace)?"replace":"push"](gt(t.to)).catch(ir):Promise.resolve()}return{route:s,href:ft(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const d_=id({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Zl,setup(t,{slots:e}){const n=xr(Zl(t)),{options:s}=At(Io),r=ft(()=>({[th(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[th(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Id("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),p_=d_;function g_(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function m_(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!kt(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function eh(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const th=(t,e,n)=>t??e??n,y_=id({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=At(Za),r=ft(()=>t.route||s.value),i=At(Jl,0),o=ft(()=>{let u=gt(i);const{matched:l}=r.value;let h;for(;(h=l[u])&&!h.components;)u++;return u}),a=ft(()=>r.value.matched[o.value]);Ii(Jl,ft(()=>o.value+1)),Ii(h_,a),Ii(Za,r);const c=Mr();return Ti(()=>[c.value,a.value,t.name],([u,l,h],[f,g,v])=>{l&&(l.instances[h]=u,g&&g!==l&&u&&u===f&&(l.leaveGuards.size||(l.leaveGuards=g.leaveGuards),l.updateGuards.size||(l.updateGuards=g.updateGuards))),u&&l&&(!g||!bs(l,g)||!f)&&(l.enterCallbacks[h]||[]).forEach(y=>y(u))},{flush:"post"}),()=>{const u=r.value,l=t.name,h=a.value,f=h&&h.components[l];if(!f)return nh(n.default,{Component:f,route:u});const g=h.props[l],v=g?g===!0?u.params:typeof g=="function"?g(u):g:null,C=Id(f,le({},v,e,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(h.instances[l]=null)},ref:c}));return nh(n.default,{Component:C,route:u})||C}}});function nh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Pd=y_;function v_(t){const e=zw(t.routes,t),n=t.parseQuery||u_,s=t.stringifyQuery||Xl,r=t.history,i=Ws(),o=Ws(),a=Ws(),c=xy(on);let u=on;os&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=ga.bind(null,_=>""+_),h=ga.bind(null,c_),f=ga.bind(null,Fi);function g(_,P){let N,$;return Sd(_)?(N=e.getRecordMatcher(_),$=P):$=_,e.addRoute($,N)}function v(_){const P=e.getRecordMatcher(_);P&&e.removeRoute(P)}function y(){return e.getRoutes().map(_=>_.record)}function C(_){return!!e.getRecordMatcher(_)}function k(_,P){if(P=le({},P||c.value),typeof _=="string"){const d=ma(n,_,P.path),p=e.resolve({path:d.path},P),m=r.createHref(d.fullPath);return le(d,p,{params:f(p.params),hash:Fi(d.hash),redirectedFrom:void 0,href:m})}let N;if("path"in _)N=le({},_,{path:ma(n,_.path,P.path).path});else{const d=le({},_.params);for(const p in d)d[p]==null&&delete d[p];N=le({},_,{params:h(_.params)}),P.params=h(P.params)}const $=e.resolve(N,P),ie=_.hash||"";$.params=l(f($.params));const Te=Ew(s,le({},_,{hash:i_(ie),path:$.path})),ee=r.createHref(Te);return le({fullPath:Te,hash:ie,query:s===Xl?l_(_.query):_.query||{}},$,{redirectedFrom:void 0,href:ee})}function x(_){return typeof _=="string"?ma(n,_,c.value.path):le({},_)}function O(_,P){if(u!==_)return Ss(8,{from:P,to:_})}function Q(_){return De(_)}function re(_){return Q(le(x(_),{replace:!0}))}function Ie(_){const P=_.matched[_.matched.length-1];if(P&&P.redirect){const{redirect:N}=P;let $=typeof N=="function"?N(_):N;return typeof $=="string"&&($=$.includes("?")||$.includes("#")?$=x($):{path:$},$.params={}),le({query:_.query,hash:_.hash,params:"path"in $?{}:_.params},$)}}function De(_,P){const N=u=k(_),$=c.value,ie=_.state,Te=_.force,ee=_.replace===!0,d=Ie(N);if(d)return De(le(x(d),{state:typeof d=="object"?le({},ie,d.state):ie,force:Te,replace:ee}),P||N);const p=N;p.redirectedFrom=P;let m;return!Te&&Iw(s,$,N)&&(m=Ss(16,{to:p,from:$}),kn($,$,!0,!1)),(m?Promise.resolve(m):ye(p,$)).catch(w=>jt(w)?jt(w,2)?w:vt(w):pe(w,p,$)).then(w=>{if(w){if(jt(w,2))return De(le({replace:ee},x(w.to),{state:typeof w.to=="object"?le({},ie,w.to.state):ie,force:Te}),P||p)}else w=je(p,$,!0,ee,ie);return de(p,$,w),w})}function Y(_,P){const N=O(_,P);return N?Promise.reject(N):Promise.resolve()}function ye(_,P){let N;const[$,ie,Te]=w_(_,P);N=ya($.reverse(),"beforeRouteLeave",_,P);for(const d of $)d.leaveGuards.forEach(p=>{N.push(un(p,_,P))});const ee=Y.bind(null,_,P);return N.push(ee),rs(N).then(()=>{N=[];for(const d of i.list())N.push(un(d,_,P));return N.push(ee),rs(N)}).then(()=>{N=ya(ie,"beforeRouteUpdate",_,P);for(const d of ie)d.updateGuards.forEach(p=>{N.push(un(p,_,P))});return N.push(ee),rs(N)}).then(()=>{N=[];for(const d of _.matched)if(d.beforeEnter&&!P.matched.includes(d))if(kt(d.beforeEnter))for(const p of d.beforeEnter)N.push(un(p,_,P));else N.push(un(d.beforeEnter,_,P));return N.push(ee),rs(N)}).then(()=>(_.matched.forEach(d=>d.enterCallbacks={}),N=ya(Te,"beforeRouteEnter",_,P),N.push(ee),rs(N))).then(()=>{N=[];for(const d of o.list())N.push(un(d,_,P));return N.push(ee),rs(N)}).catch(d=>jt(d,8)?d:Promise.reject(d))}function de(_,P,N){for(const $ of a.list())$(_,P,N)}function je(_,P,N,$,ie){const Te=O(_,P);if(Te)return Te;const ee=P===on,d=os?history.state:{};N&&($||ee?r.replace(_.fullPath,le({scroll:ee&&d&&d.scroll},ie)):r.push(_.fullPath,ie)),c.value=_,kn(_,P,N,ee),vt()}let qe;function yt(){qe||(qe=r.listen((_,P,N)=>{if(!ii.listening)return;const $=k(_),ie=Ie($);if(ie){De(le(ie,{replace:!0}),$).catch(ir);return}u=$;const Te=c.value;os&&Nw(ql(Te.fullPath,N.delta),Eo()),ye($,Te).catch(ee=>jt(ee,12)?ee:jt(ee,2)?(De(ee.to,$).then(d=>{jt(d,20)&&!N.delta&&N.type===vr.pop&&r.go(-1,!1)}).catch(ir),Promise.reject()):(N.delta&&r.go(-N.delta,!1),pe(ee,$,Te))).then(ee=>{ee=ee||je($,Te,!1),ee&&(N.delta&&!jt(ee,8)?r.go(-N.delta,!1):N.type===vr.pop&&jt(ee,20)&&r.go(-1,!1)),de($,Te,ee)}).catch(ir)}))}let Bt=Ws(),zs=Ws(),Se;function pe(_,P,N){vt(_);const $=zs.list();return $.length?$.forEach(ie=>ie(_,P,N)):console.error(_),Promise.reject(_)}function he(){return Se&&c.value!==on?Promise.resolve():new Promise((_,P)=>{Bt.add([_,P])})}function vt(_){return Se||(Se=!_,yt(),Bt.list().forEach(([P,N])=>_?N(_):P()),Bt.reset()),_}function kn(_,P,N,$){const{scrollBehavior:ie}=t;if(!os||!ie)return Promise.resolve();const Te=!N&&Dw(ql(_.fullPath,0))||($||!N)&&history.state&&history.state.scroll||null;return Yf().then(()=>ie(_,P,Te)).then(ee=>ee&&Rw(ee)).catch(ee=>pe(ee,_,P))}const wt=_=>r.go(_);let st;const ns=new Set,ii={currentRoute:c,listening:!0,addRoute:g,removeRoute:v,hasRoute:C,getRoutes:y,resolve:k,options:t,push:Q,replace:re,go:wt,back:()=>wt(-1),forward:()=>wt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:zs.add,isReady:he,install(_){const P=this;_.component("RouterLink",p_),_.component("RouterView",Pd),_.config.globalProperties.$router=P,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>gt(c)}),os&&!st&&c.value===on&&(st=!0,Q(r.location).catch(ie=>{}));const N={};for(const ie in on)N[ie]=ft(()=>c.value[ie]);_.provide(Io,P),_.provide(Zc,xr(N)),_.provide(Za,c);const $=_.unmount;ns.add(_),_.unmount=function(){ns.delete(_),ns.size<1&&(u=on,qe&&qe(),qe=null,c.value=on,st=!1,Se=!1),$()}}};return ii}function rs(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function w_(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>bs(u,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>bs(u,c))||r.push(c))}return[n,s,r]}function To(){return At(Io)}function xd(){return At(Zc)}const __={__name:"App",setup(t){return(e,n)=>(Wt(),Ov(gt(Pd)))}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Md=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},E_=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ld={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,u=c?t[r+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|u>>6,g=u&63;c||(g=64,o||(f=64)),s.push(n[l],n[h],n[f],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Md(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):E_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const u=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||u==null||h==null)throw new I_;const f=i<<2|a>>4;if(s.push(f),u!==64){const g=a<<4&240|u>>2;if(s.push(g),h!==64){const v=u<<6&192|h;s.push(v)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class I_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const T_=function(t){const e=Md(t);return Ld.encodeByteArray(e,!0)},$i=function(t){return T_(t).replace(/\./g,"")},Ud=function(t){try{return Ld.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function b_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const S_=()=>b_().__FIREBASE_DEFAULTS__,C_=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},A_=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ud(t[1]);return e&&JSON.parse(e)},eu=()=>{try{return S_()||C_()||A_()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Fd=t=>{var e,n;return(n=(e=eu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},k_=t=>{const e=Fd(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},R_=()=>{var t;return(t=eu())===null||t===void 0?void 0:t.config},$d=t=>{var e;return(e=eu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function D_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[$i(JSON.stringify(n)),$i(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function O_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ze())}function P_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function x_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function M_(){const t=Ze();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function L_(){try{return typeof indexedDB=="object"}catch{return!1}}function U_(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F_="FirebaseError";class sn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=F_,Object.setPrototypeOf(this,sn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ur.prototype.create)}}class Ur{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?$_(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new sn(r,a,s)}}function $_(t,e){return t.replace(V_,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const V_=/\{\$([^}]+)}/g;function B_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Vi(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(sh(i)&&sh(o)){if(!Vi(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function sh(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Xs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Js(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function j_(t,e){const n=new q_(t,e);return n.subscribe.bind(n)}class q_{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");H_(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=va),r.error===void 0&&(r.error=va),r.complete===void 0&&(r.complete=va);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function H_(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function va(){}/**
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
 */function Ve(t){return t&&t._delegate?t._delegate:t}class zn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const On="[DEFAULT]";/**
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
 */class K_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new N_;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(G_(e))try{this.getOrInitializeService({instanceIdentifier:On})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=On){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=On){return this.instances.has(e)}getOptions(e=On){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:z_(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=On){return this.component?this.component.multipleInstances?e:On:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function z_(t){return t===On?void 0:t}function G_(t){return t.instantiationMode==="EAGER"}/**
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
 */class W_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new K_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ce||(ce={}));const Q_={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},Y_=ce.INFO,X_={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},J_=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=X_[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class tu{constructor(e){this.name=e,this._logLevel=Y_,this._logHandler=J_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Q_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const Z_=(t,e)=>e.some(n=>t instanceof n);let rh,ih;function eE(){return rh||(rh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tE(){return ih||(ih=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Vd=new WeakMap,ec=new WeakMap,Bd=new WeakMap,wa=new WeakMap,nu=new WeakMap;function nE(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(yn(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Vd.set(n,t)}).catch(()=>{}),nu.set(e,t),e}function sE(t){if(ec.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ec.set(t,e)}let tc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ec.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Bd.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return yn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function rE(t){tc=t(tc)}function iE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(_a(this),e,...n);return Bd.set(s,e.sort?e.sort():[e]),yn(s)}:tE().includes(t)?function(...e){return t.apply(_a(this),e),yn(Vd.get(this))}:function(...e){return yn(t.apply(_a(this),e))}}function oE(t){return typeof t=="function"?iE(t):(t instanceof IDBTransaction&&sE(t),Z_(t,eE())?new Proxy(t,tc):t)}function yn(t){if(t instanceof IDBRequest)return nE(t);if(wa.has(t))return wa.get(t);const e=oE(t);return e!==t&&(wa.set(t,e),nu.set(e,t)),e}const _a=t=>nu.get(t);function aE(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=yn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(yn(o.result),c.oldVersion,c.newVersion,yn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const cE=["get","getKey","getAll","getAllKeys","count"],uE=["put","add","delete","clear"],Ea=new Map;function oh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ea.get(e))return Ea.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=uE.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||cE.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&c.done]))[0]};return Ea.set(e,i),i}rE(t=>({...t,get:(e,n,s)=>oh(e,n)||t.get(e,n,s),has:(e,n)=>!!oh(e,n)||t.has(e,n)}));/**
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
 */class lE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(hE(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function hE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const nc="@firebase/app",ah="0.9.5";/**
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
 */const Gn=new tu("@firebase/app"),fE="@firebase/app-compat",dE="@firebase/analytics-compat",pE="@firebase/analytics",gE="@firebase/app-check-compat",mE="@firebase/app-check",yE="@firebase/auth",vE="@firebase/auth-compat",wE="@firebase/database",_E="@firebase/database-compat",EE="@firebase/functions",IE="@firebase/functions-compat",TE="@firebase/installations",bE="@firebase/installations-compat",SE="@firebase/messaging",CE="@firebase/messaging-compat",AE="@firebase/performance",kE="@firebase/performance-compat",RE="@firebase/remote-config",NE="@firebase/remote-config-compat",DE="@firebase/storage",OE="@firebase/storage-compat",PE="@firebase/firestore",xE="@firebase/firestore-compat",ME="firebase",LE="9.18.0";/**
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
 */const sc="[DEFAULT]",UE={[nc]:"fire-core",[fE]:"fire-core-compat",[pE]:"fire-analytics",[dE]:"fire-analytics-compat",[mE]:"fire-app-check",[gE]:"fire-app-check-compat",[yE]:"fire-auth",[vE]:"fire-auth-compat",[wE]:"fire-rtdb",[_E]:"fire-rtdb-compat",[EE]:"fire-fn",[IE]:"fire-fn-compat",[TE]:"fire-iid",[bE]:"fire-iid-compat",[SE]:"fire-fcm",[CE]:"fire-fcm-compat",[AE]:"fire-perf",[kE]:"fire-perf-compat",[RE]:"fire-rc",[NE]:"fire-rc-compat",[DE]:"fire-gcs",[OE]:"fire-gcs-compat",[PE]:"fire-fst",[xE]:"fire-fst-compat","fire-js":"fire-js",[ME]:"fire-js-all"};/**
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
 */const Bi=new Map,rc=new Map;function FE(t,e){try{t.container.addComponent(e)}catch(n){Gn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Cs(t){const e=t.name;if(rc.has(e))return Gn.debug(`There were multiple attempts to register component ${e}.`),!1;rc.set(e,t);for(const n of Bi.values())FE(n,t);return!0}function su(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const $E={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},vn=new Ur("app","Firebase",$E);/**
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
 */class VE{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new zn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vn.create("app-deleted",{appName:this._name})}}/**
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
 */const $r=LE;function jd(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:sc,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw vn.create("bad-app-name",{appName:String(r)});if(n||(n=R_()),!n)throw vn.create("no-options");const i=Bi.get(r);if(i){if(Vi(n,i.options)&&Vi(s,i.config))return i;throw vn.create("duplicate-app",{appName:r})}const o=new W_(r);for(const c of rc.values())o.addComponent(c);const a=new VE(n,s,o);return Bi.set(r,a),a}function qd(t=sc){const e=Bi.get(t);if(!e&&t===sc)return jd();if(!e)throw vn.create("no-app",{appName:t});return e}function wn(t,e,n){var s;let r=(s=UE[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Gn.warn(a.join(" "));return}Cs(new zn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const BE="firebase-heartbeat-database",jE=1,wr="firebase-heartbeat-store";let Ia=null;function Hd(){return Ia||(Ia=aE(BE,jE,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(wr)}}}).catch(t=>{throw vn.create("idb-open",{originalErrorMessage:t.message})})),Ia}async function qE(t){try{return(await Hd()).transaction(wr).objectStore(wr).get(Kd(t))}catch(e){if(e instanceof sn)Gn.warn(e.message);else{const n=vn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Gn.warn(n.message)}}}async function ch(t,e){try{const s=(await Hd()).transaction(wr,"readwrite");return await s.objectStore(wr).put(e,Kd(t)),s.done}catch(n){if(n instanceof sn)Gn.warn(n.message);else{const s=vn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Gn.warn(s.message)}}}function Kd(t){return`${t.name}!${t.options.appId}`}/**
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
 */const HE=1024,KE=30*24*60*60*1e3;class zE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new WE(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=uh();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=KE}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=uh(),{heartbeatsToSend:n,unsentEntries:s}=GE(this._heartbeatsCache.heartbeats),r=$i(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function uh(){return new Date().toISOString().substring(0,10)}function GE(t,e=HE){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),lh(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),lh(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class WE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return L_()?U_().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await qE(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return ch(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return ch(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function lh(t){return $i(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function QE(t){Cs(new zn("platform-logger",e=>new lE(e),"PRIVATE")),Cs(new zn("heartbeat",e=>new zE(e),"PRIVATE")),wn(nc,ah,t),wn(nc,ah,"esm2017"),wn("fire-js","")}QE("");function ru(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function zd(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const YE=zd,Gd=new Ur("auth","Firebase",zd());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hh=new tu("@firebase/auth");function Ci(t,...e){hh.logLevel<=ce.ERROR&&hh.error(`Auth (${$r}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(t,...e){throw iu(t,...e)}function Lt(t,...e){return iu(t,...e)}function XE(t,e,n){const s=Object.assign(Object.assign({},YE()),{[e]:n});return new Ur("auth","Firebase",s).create(e,{appName:t.name})}function iu(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Gd.create(t,...e)}function H(t,e,...n){if(!t)throw iu(e,...n)}function Ht(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ci(e),new Error(e)}function Xt(t,e){t||Ht(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fh=new Map;function Kt(t){Xt(t instanceof Function,"Expected a class definition");let e=fh.get(t);return e?(Xt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,fh.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JE(t,e){const n=su(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Vi(i,e??{}))return r;Rt(r,"already-initialized")}return n.initialize({options:e})}function ZE(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Kt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ic(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function e0(){return dh()==="http:"||dh()==="https:"}function dh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(e0()||P_()||"connection"in navigator)?navigator.onLine:!0}function n0(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e,n){this.shortDelay=e,this.longDelay=n,Xt(n>e,"Short delay should be less than long delay!"),this.isMobile=O_()||x_()}get(){return t0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ou(t,e){Xt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ht("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ht("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ht("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r0=new Vr(3e4,6e4);function bo(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Br(t,e,n,s,r={}){return Qd(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Fr(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Wd.fetch()(Yd(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Qd(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},s0),e);try{const r=new i0(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw fi(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw fi(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw fi(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw fi(t,"user-disabled",o);const l=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw XE(t,l,u);Rt(t,l)}}catch(r){if(r instanceof sn)throw r;Rt(t,"internal-error",{message:String(r)})}}async function So(t,e,n,s,r={}){const i=await Br(t,e,n,s,r);return"mfaPendingCredential"in i&&Rt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Yd(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?ou(t.config,r):`${t.config.apiScheme}://${r}`}class i0{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Lt(this.auth,"network-request-failed")),r0.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function fi(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Lt(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o0(t,e){return Br(t,"POST","/v1/accounts:delete",e)}async function a0(t,e){return Br(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function c0(t,e=!1){const n=Ve(t),s=await n.getIdToken(e),r=au(s);H(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:ar(Ta(r.auth_time)),issuedAtTime:ar(Ta(r.iat)),expirationTime:ar(Ta(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ta(t){return Number(t)*1e3}function au(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Ci("JWT malformed, contained fewer than 3 sections"),null;try{const r=Ud(n);return r?JSON.parse(r):(Ci("Failed to decode base64 JWT payload"),null)}catch(r){return Ci("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function u0(t){const e=au(t);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _r(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof sn&&l0(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function l0({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ar(this.lastLoginAt),this.creationTime=ar(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ji(t){var e;const n=t.auth,s=await t.getIdToken(),r=await _r(t,a0(n,{idToken:s}));H(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?p0(i.providerUserInfo):[],a=d0(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Xd(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function f0(t){const e=Ve(t);await ji(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function d0(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function p0(t){return t.map(e=>{var{providerId:n}=e,s=ru(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function g0(t,e){const n=await Qd(t,{},async()=>{const s=Fr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=Yd(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Wd.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):u0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return H(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await g0(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new Er;return s&&(H(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(H(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(H(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Er,this.toJSON())}_performRefresh(){return Ht("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(t,e){H(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class jn{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=ru(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new h0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Xd(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await _r(this,this.stsTokenManager.getToken(this.auth,e));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return c0(this,e)}reload(){return f0(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new jn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await ji(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await _r(this,o0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,u,l;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,C=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,k=(u=n.createdAt)!==null&&u!==void 0?u:void 0,x=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:O,emailVerified:Q,isAnonymous:re,providerData:Ie,stsTokenManager:De}=n;H(O&&De,e,"internal-error");const Y=Er.fromJSON(this.name,De);H(typeof O=="string",e,"internal-error"),an(h,e.name),an(f,e.name),H(typeof Q=="boolean",e,"internal-error"),H(typeof re=="boolean",e,"internal-error"),an(g,e.name),an(v,e.name),an(y,e.name),an(C,e.name),an(k,e.name),an(x,e.name);const ye=new jn({uid:O,auth:e,email:f,emailVerified:Q,displayName:h,isAnonymous:re,photoURL:v,phoneNumber:g,tenantId:y,stsTokenManager:Y,createdAt:k,lastLoginAt:x});return Ie&&Array.isArray(Ie)&&(ye.providerData=Ie.map(de=>Object.assign({},de))),C&&(ye._redirectEventId=C),ye}static async _fromIdTokenResponse(e,n,s=!1){const r=new Er;r.updateFromServerResponse(n);const i=new jn({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await ji(i),i}}/**
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
 */class Jd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Jd.type="NONE";const ph=Jd;/**
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
 */function Ai(t,e,n){return`firebase:${t}:${e}:${n}`}class gs{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Ai(this.userKey,r.apiKey,i),this.fullPersistenceKey=Ai("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?jn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new gs(Kt(ph),e,s);const r=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||Kt(ph);const o=Ai(s,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const h=jn._fromJSON(e,l);u!==i&&(a=h),i=u;break}}catch{}const c=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new gs(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new gs(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(tp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Zd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(sp(e))return"Blackberry";if(rp(e))return"Webos";if(cu(e))return"Safari";if((e.includes("chrome/")||ep(e))&&!e.includes("edge/"))return"Chrome";if(np(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Zd(t=Ze()){return/firefox\//i.test(t)}function cu(t=Ze()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ep(t=Ze()){return/crios\//i.test(t)}function tp(t=Ze()){return/iemobile/i.test(t)}function np(t=Ze()){return/android/i.test(t)}function sp(t=Ze()){return/blackberry/i.test(t)}function rp(t=Ze()){return/webos/i.test(t)}function Co(t=Ze()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function m0(t=Ze()){var e;return Co(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function y0(){return M_()&&document.documentMode===10}function ip(t=Ze()){return Co(t)||np(t)||rp(t)||sp(t)||/windows phone/i.test(t)||tp(t)}function v0(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function op(t,e=[]){let n;switch(t){case"Browser":n=gh(Ze());break;case"Worker":n=`${gh(Ze())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${$r}/${s}`}/**
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
 */class w0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new mh(this),this.idTokenSubscription=new mh(this),this.beforeStateQueue=new w0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Gd,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Kt(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await gs.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ji(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=n0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ve(e):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Kt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ur("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Kt(e)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await gs.create(this,[Kt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return H(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=op(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Ao(t){return Ve(t)}class mh{constructor(e){this.auth=e,this.observer=null,this.addObserver=j_(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function E0(t,e,n){const s=Ao(t);H(s._canInitEmulator,s,"emulator-config-failed"),H(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=ap(e),{host:o,port:a}=I0(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||T0()}function ap(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function I0(t){const e=ap(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:yh(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:yh(o)}}}function yh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function T0(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ht("not implemented")}_getIdTokenResponse(e){return Ht("not implemented")}_linkToIdToken(e,n){return Ht("not implemented")}_getReauthenticationResolver(e){return Ht("not implemented")}}async function b0(t,e){return Br(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function S0(t,e){return So(t,"POST","/v1/accounts:signInWithPassword",bo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C0(t,e){return So(t,"POST","/v1/accounts:signInWithEmailLink",bo(t,e))}async function A0(t,e){return So(t,"POST","/v1/accounts:signInWithEmailLink",bo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir extends uu{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Ir(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Ir(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return S0(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return C0(e,{email:this._email,oobCode:this._password});default:Rt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return b0(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return A0(e,{idToken:n,email:this._email,oobCode:this._password});default:Rt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ms(t,e){return So(t,"POST","/v1/accounts:signInWithIdp",bo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k0="http://localhost";class Wn extends uu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Wn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Rt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=ru(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Wn(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ms(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,ms(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ms(e,n)}buildRequest(){const e={requestUri:k0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Fr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R0(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function N0(t){const e=Xs(Js(t)).link,n=e?Xs(Js(e)).deep_link_id:null,s=Xs(Js(t)).deep_link_id;return(s?Xs(Js(s)).link:null)||s||n||e||t}class lu{constructor(e){var n,s,r,i,o,a;const c=Xs(Js(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,l=(s=c.oobCode)!==null&&s!==void 0?s:null,h=R0((r=c.mode)!==null&&r!==void 0?r:null);H(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=N0(e);try{return new lu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(){this.providerId=$s.PROVIDER_ID}static credential(e,n){return Ir._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=lu.parseLink(n);return H(s,"argument-error"),Ir._fromEmailAndCode(e,s.code,s.tenantId)}}$s.PROVIDER_ID="password";$s.EMAIL_PASSWORD_SIGN_IN_METHOD="password";$s.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class jr extends cp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln extends jr{constructor(){super("facebook.com")}static credential(e){return Wn._fromParams({providerId:ln.PROVIDER_ID,signInMethod:ln.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ln.credentialFromTaggedObject(e)}static credentialFromError(e){return ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ln.credential(e.oauthAccessToken)}catch{return null}}}ln.FACEBOOK_SIGN_IN_METHOD="facebook.com";ln.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn extends jr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Wn._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return hn.credential(n,s)}catch{return null}}}hn.GOOGLE_SIGN_IN_METHOD="google.com";hn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn extends jr{constructor(){super("github.com")}static credential(e){return Wn._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fn.credential(e.oauthAccessToken)}catch{return null}}}fn.GITHUB_SIGN_IN_METHOD="github.com";fn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn extends jr{constructor(){super("twitter.com")}static credential(e,n){return Wn._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return dn.credential(n,s)}catch{return null}}}dn.TWITTER_SIGN_IN_METHOD="twitter.com";dn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await jn._fromIdTokenResponse(e,s,r),o=vh(s);return new As({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=vh(s);return new As({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function vh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi extends sn{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,qi.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new qi(e,n,s,r)}}function up(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?qi._fromErrorAndOperation(t,i,e,s):i})}async function D0(t,e,n=!1){const s=await _r(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return As._forOperation(t,"link",s)}/**
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
 */async function O0(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await _r(t,up(s,r,e,t),n);H(i.idToken,s,"internal-error");const o=au(i.idToken);H(o,s,"internal-error");const{sub:a}=o;return H(t.uid===a,s,"user-mismatch"),As._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Rt(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lp(t,e,n=!1){const s="signIn",r=await up(t,s,e),i=await As._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function P0(t,e){return lp(Ao(t),e)}function x0(t,e,n){return P0(Ve(t),$s.credential(e,n))}function M0(t,e,n,s){return Ve(t).onIdTokenChanged(e,n,s)}function L0(t,e,n){return Ve(t).beforeAuthStateChanged(e,n)}const Hi="__sak";/**
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
 */class hp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Hi,"1"),this.storage.removeItem(Hi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U0(){const t=Ze();return cu(t)||Co(t)}const F0=1e3,$0=10;class fp extends hp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=U0()&&v0(),this.fallbackToPolling=ip(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);y0()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,$0):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},F0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}fp.type="LOCAL";const V0=fp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp extends hp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}dp.type="SESSION";const pp=dp;/**
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
 */function B0(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ko{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new ko(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await B0(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ko.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hu(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class j0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=hu("",20);r.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const f=h;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(l),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(){return window}function q0(t){Ut().location.href=t}/**
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
 */function gp(){return typeof Ut().WorkerGlobalScope<"u"&&typeof Ut().importScripts=="function"}async function H0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function K0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function z0(){return gp()?self:null}/**
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
 */const mp="firebaseLocalStorageDb",G0=1,Ki="firebaseLocalStorage",yp="fbase_key";class qr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ro(t,e){return t.transaction([Ki],e?"readwrite":"readonly").objectStore(Ki)}function W0(){const t=indexedDB.deleteDatabase(mp);return new qr(t).toPromise()}function oc(){const t=indexedDB.open(mp,G0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Ki,{keyPath:yp})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Ki)?e(s):(s.close(),await W0(),e(await oc()))})})}async function wh(t,e,n){const s=Ro(t,!0).put({[yp]:e,value:n});return new qr(s).toPromise()}async function Q0(t,e){const n=Ro(t,!1).get(e),s=await new qr(n).toPromise();return s===void 0?null:s.value}function _h(t,e){const n=Ro(t,!0).delete(e);return new qr(n).toPromise()}const Y0=800,X0=3;class vp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await oc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>X0)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ko._getInstance(z0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await H0(),!this.activeServiceWorker)return;this.sender=new j0(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||K0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await oc();return await wh(e,Hi,"1"),await _h(e,Hi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>wh(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Q0(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>_h(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Ro(r,!1).getAll();return new qr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Y0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}vp.type="LOCAL";const J0=vp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z0(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function eI(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Lt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",Z0().appendChild(s)})}function tI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Vr(3e4,6e4);/**
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
 */function nI(t,e){return e?Kt(e):(H(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class fu extends uu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ms(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ms(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ms(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function sI(t){return lp(t.auth,new fu(t),t.bypassAuthState)}function rI(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),O0(n,new fu(t),t.bypassAuthState)}async function iI(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),D0(n,new fu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return sI;case"linkViaPopup":case"linkViaRedirect":return iI;case"reauthViaPopup":case"reauthViaRedirect":return rI;default:Rt(this.auth,"internal-error")}}resolve(e){Xt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Xt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oI=new Vr(2e3,1e4);class us extends wp{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,us.currentPopupAction&&us.currentPopupAction.cancel(),us.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){Xt(this.filter.length===1,"Popup operations only handle one event");const e=hu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Lt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Lt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,us.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Lt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,oI.get())};e()}}us.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aI="pendingRedirect",ki=new Map;class cI extends wp{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=ki.get(this.auth._key());if(!e){try{const s=await uI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}ki.set(this.auth._key(),e)}return this.bypassAuthState||ki.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function uI(t,e){const n=fI(e),s=hI(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function lI(t,e){ki.set(t._key(),e)}function hI(t){return Kt(t._redirectPersistence)}function fI(t){return Ai(aI,t.config.apiKey,t.name)}async function dI(t,e,n=!1){const s=Ao(t),r=nI(s,e),o=await new cI(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pI=10*60*1e3;class gI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!mI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!_p(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Lt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=pI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Eh(e))}saveEventToCache(e){this.cachedEventUids.add(Eh(e)),this.lastProcessedEventTime=Date.now()}}function Eh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function _p({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function mI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return _p(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yI(t,e={}){return Br(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wI=/^https?/;async function _I(t){if(t.config.emulator)return;const{authorizedDomains:e}=await yI(t);for(const n of e)try{if(EI(n))return}catch{}Rt(t,"unauthorized-domain")}function EI(t){const e=ic(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!wI.test(n))return!1;if(vI.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const II=new Vr(3e4,6e4);function Ih(){const t=Ut().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function TI(t){return new Promise((e,n)=>{var s,r,i;function o(){Ih(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ih(),n(Lt(t,"network-request-failed"))},timeout:II.get()})}if(!((r=(s=Ut().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Ut().gapi)===null||i===void 0)&&i.load)o();else{const a=tI("iframefcb");return Ut()[a]=()=>{gapi.load?o():n(Lt(t,"network-request-failed"))},eI(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Ri=null,e})}let Ri=null;function bI(t){return Ri=Ri||TI(t),Ri}/**
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
 */const SI=new Vr(5e3,15e3),CI="__/auth/iframe",AI="emulator/auth/iframe",kI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},RI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function NI(t){const e=t.config;H(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ou(e,AI):`https://${t.config.authDomain}/${CI}`,s={apiKey:e.apiKey,appName:t.name,v:$r},r=RI.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Fr(s).slice(1)}`}async function DI(t){const e=await bI(t),n=Ut().gapi;return H(n,t,"internal-error"),e.open({where:document.body,url:NI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:kI,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Lt(t,"network-request-failed"),a=Ut().setTimeout(()=>{i(o)},SI.get());function c(){Ut().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const OI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},PI=500,xI=600,MI="_blank",LI="http://localhost";class Th{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function UI(t,e,n,s=PI,r=xI){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},OI),{width:s.toString(),height:r.toString(),top:i,left:o}),u=Ze().toLowerCase();n&&(a=ep(u)?MI:n),Zd(u)&&(e=e||LI,c.scrollbars="yes");const l=Object.entries(c).reduce((f,[g,v])=>`${f}${g}=${v},`,"");if(m0(u)&&a!=="_self")return FI(e||"",a),new Th(null);const h=window.open(e||"",a,l);H(h,t,"popup-blocked");try{h.focus()}catch{}return new Th(h)}function FI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const $I="__/auth/handler",VI="emulator/auth/handler";function bh(t,e,n,s,r,i){H(t.config.authDomain,t,"auth-domain-config-required"),H(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:$r,eventId:r};if(e instanceof cp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",B_(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(i||{}))o[c]=u}if(e instanceof jr){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${BI(t)}?${Fr(a).slice(1)}`}function BI({config:t}){return t.emulator?ou(t,VI):`https://${t.authDomain}/${$I}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ba="webStorageSupport";class jI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=pp,this._completeRedirectFn=dI,this._overrideRedirectResult=lI}async _openPopup(e,n,s,r){var i;Xt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=bh(e,n,s,ic(),r);return UI(e,o,hu())}async _openRedirect(e,n,s,r){return await this._originValidation(e),q0(bh(e,n,s,ic(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(Xt(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await DI(e),s=new gI(e);return n.register("authEvent",r=>(H(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ba,{type:ba},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[ba];o!==void 0&&n(!!o),Rt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=_I(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ip()||cu()||Co()}}const qI=jI;var Sh="@firebase/auth",Ch="0.21.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function zI(t){Cs(new zn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{H(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),H(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:op(t)},l=new _0(a,c,u);return ZE(l,n),l})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Cs(new zn("auth-internal",e=>{const n=Ao(e.getProvider("auth").getImmediate());return(s=>new HI(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),wn(Sh,Ch,KI(t)),wn(Sh,Ch,"esm2017")}/**
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
 */const GI=5*60,WI=$d("authIdTokenMaxAge")||GI;let Ah=null;const QI=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>WI)return;const r=n==null?void 0:n.token;Ah!==r&&(Ah=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Ep(t=qd()){const e=su(t,"auth");if(e.isInitialized())return e.getImmediate();const n=JE(t,{popupRedirectResolver:qI,persistence:[J0,V0,pp]}),s=$d("authTokenSyncURL");if(s){const i=QI(s);L0(n,i,()=>i(n.currentUser)),M0(n,o=>i(o))}const r=Fd("auth");return r&&E0(n,`http://${r}`),n}zI("Browser");const No=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},YI={class:"page"},XI={class:"main"},JI={__name:"Auth",setup(t){const e=To(),n=Mr(""),s=()=>{x0(Ep(),"lapuissancefc@gmail.com",n.value).then(()=>e.push({name:"squad"})).catch(r=>console.log(r))};return(r,i)=>(Wt(),mn("div",YI,[q("div",XI,[fv(q("input",{type:"password","onUpdate:modelValue":i[0]||(i[0]=o=>n.value=o),placeholder:"password"},null,512),[[dw,n.value]]),q("button",{onClick:i[1]||(i[1]=o=>s())},"log in")])]))}},ZI=No(JI,[["__scopeId","data-v-57c6f155"]]);var eT="firebase",tT="9.18.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wn(eT,tT,"app");var nT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},U,du=du||{},z=nT||self;function zi(){}function Do(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Hr(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function sT(t){return Object.prototype.hasOwnProperty.call(t,Sa)&&t[Sa]||(t[Sa]=++rT)}var Sa="closure_uid_"+(1e9*Math.random()>>>0),rT=0;function iT(t,e,n){return t.call.apply(t.bind,arguments)}function oT(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function Ye(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ye=iT:Ye=oT,Ye.apply(null,arguments)}function di(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Be(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Cn(){this.s=this.s,this.o=this.o}var aT=0;Cn.prototype.s=!1;Cn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),aT!=0)&&sT(this)};Cn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ip=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function pu(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function kh(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Do(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function Xe(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Xe.prototype.h=function(){this.defaultPrevented=!0};var cT=function(){if(!z.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{z.addEventListener("test",zi,e),z.removeEventListener("test",zi,e)}catch{}return t}();function Gi(t){return/^[\s\xa0]*$/.test(t)}var Rh=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ca(t,e){return t<e?-1:t>e?1:0}function Oo(){var t=z.navigator;return t&&(t=t.userAgent)?t:""}function Mt(t){return Oo().indexOf(t)!=-1}function gu(t){return gu[" "](t),t}gu[" "]=zi;function uT(t){var e=fT;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var lT=Mt("Opera"),ks=Mt("Trident")||Mt("MSIE"),Tp=Mt("Edge"),ac=Tp||ks,bp=Mt("Gecko")&&!(Oo().toLowerCase().indexOf("webkit")!=-1&&!Mt("Edge"))&&!(Mt("Trident")||Mt("MSIE"))&&!Mt("Edge"),hT=Oo().toLowerCase().indexOf("webkit")!=-1&&!Mt("Edge");function Sp(){var t=z.document;return t?t.documentMode:void 0}var Wi;e:{var Aa="",ka=function(){var t=Oo();if(bp)return/rv:([^\);]+)(\)|;)/.exec(t);if(Tp)return/Edge\/([\d\.]+)/.exec(t);if(ks)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(hT)return/WebKit\/(\S+)/.exec(t);if(lT)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(ka&&(Aa=ka?ka[1]:""),ks){var Ra=Sp();if(Ra!=null&&Ra>parseFloat(Aa)){Wi=String(Ra);break e}}Wi=Aa}var fT={};function dT(){return uT(function(){let t=0;const e=Rh(String(Wi)).split("."),n=Rh("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=Ca(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Ca(r[2].length==0,i[2].length==0)||Ca(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var cc;if(z.document&&ks){var Nh=Sp();cc=Nh||parseInt(Wi,10)||void 0}else cc=void 0;var pT=cc;function Tr(t,e){if(Xe.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(bp){e:{try{gu(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:gT[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Tr.X.h.call(this)}}Be(Tr,Xe);var gT={2:"touch",3:"pen",4:"mouse"};Tr.prototype.h=function(){Tr.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Kr="closure_listenable_"+(1e6*Math.random()|0),mT=0;function yT(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++mT,this.ba=this.ea=!1}function Po(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function mu(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Cp(t){const e={};for(const n in t)e[n]=t[n];return e}const Dh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ap(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<Dh.length;i++)n=Dh[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function xo(t){this.src=t,this.g={},this.h=0}xo.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=lc(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new yT(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function uc(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=Ip(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Po(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function lc(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var yu="closure_lm_"+(1e6*Math.random()|0),Na={};function kp(t,e,n,s,r){if(s&&s.once)return Np(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)kp(t,e[i],n,s,r);return null}return n=_u(n),t&&t[Kr]?t.N(e,n,Hr(s)?!!s.capture:!!s,r):Rp(t,e,n,!1,s,r)}function Rp(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=Hr(r)?!!r.capture:!!r,a=wu(t);if(a||(t[yu]=a=new xo(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=vT(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)cT||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(Op(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function vT(){function t(n){return e.call(t.src,t.listener,n)}const e=wT;return t}function Np(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Np(t,e[i],n,s,r);return null}return n=_u(n),t&&t[Kr]?t.O(e,n,Hr(s)?!!s.capture:!!s,r):Rp(t,e,n,!0,s,r)}function Dp(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Dp(t,e[i],n,s,r);else s=Hr(s)?!!s.capture:!!s,n=_u(n),t&&t[Kr]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=lc(i,n,s,r),-1<n&&(Po(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=wu(t))&&(e=t.g[e.toString()],t=-1,e&&(t=lc(e,n,s,r)),(n=-1<t?e[t]:null)&&vu(n))}function vu(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Kr])uc(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Op(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=wu(e))?(uc(n,t),n.h==0&&(n.src=null,e[yu]=null)):Po(t)}}}function Op(t){return t in Na?Na[t]:Na[t]="on"+t}function wT(t,e){if(t.ba)t=!0;else{e=new Tr(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&vu(t),t=n.call(s,e)}return t}function wu(t){return t=t[yu],t instanceof xo?t:null}var Da="__closure_events_fn_"+(1e9*Math.random()>>>0);function _u(t){return typeof t=="function"?t:(t[Da]||(t[Da]=function(e){return t.handleEvent(e)}),t[Da])}function Ue(){Cn.call(this),this.i=new xo(this),this.P=this,this.I=null}Be(Ue,Cn);Ue.prototype[Kr]=!0;Ue.prototype.removeEventListener=function(t,e,n,s){Dp(this,t,e,n,s)};function $e(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Xe(e,t);else if(e instanceof Xe)e.target=e.target||t;else{var r=e;e=new Xe(s,t),Ap(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=pi(o,s,!0,e)&&r}if(o=e.g=t,r=pi(o,s,!0,e)&&r,r=pi(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=pi(o,s,!1,e)&&r}Ue.prototype.M=function(){if(Ue.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Po(n[s]);delete t.g[e],t.h--}}this.I=null};Ue.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Ue.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function pi(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&uc(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var Eu=z.JSON.stringify;function _T(){var t=Mp;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class ET{constructor(){this.h=this.g=null}add(e,n){const s=Pp.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Pp=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new IT,t=>t.reset());class IT{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function TT(t){z.setTimeout(()=>{throw t},0)}function xp(t,e){hc||bT(),fc||(hc(),fc=!0),Mp.add(t,e)}var hc;function bT(){var t=z.Promise.resolve(void 0);hc=function(){t.then(ST)}}var fc=!1,Mp=new ET;function ST(){for(var t;t=_T();){try{t.h.call(t.g)}catch(n){TT(n)}var e=Pp;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}fc=!1}function Mo(t,e){Ue.call(this),this.h=t||1,this.g=e||z,this.j=Ye(this.lb,this),this.l=Date.now()}Be(Mo,Ue);U=Mo.prototype;U.ca=!1;U.R=null;U.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),$e(this,"tick"),this.ca&&(Iu(this),this.start()))}};U.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Iu(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}U.M=function(){Mo.X.M.call(this),Iu(this),delete this.g};function Tu(t,e,n){if(typeof t=="function")n&&(t=Ye(t,n));else if(t&&typeof t.handleEvent=="function")t=Ye(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:z.setTimeout(t,e||0)}function Lp(t){t.g=Tu(()=>{t.g=null,t.i&&(t.i=!1,Lp(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class CT extends Cn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Lp(this)}M(){super.M(),this.g&&(z.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function br(t){Cn.call(this),this.h=t,this.g={}}Be(br,Cn);var Oh=[];function Up(t,e,n,s){Array.isArray(n)||(n&&(Oh[0]=n.toString()),n=Oh);for(var r=0;r<n.length;r++){var i=kp(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Fp(t){mu(t.g,function(e,n){this.g.hasOwnProperty(n)&&vu(e)},t),t.g={}}br.prototype.M=function(){br.X.M.call(this),Fp(this)};br.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Lo(){this.g=!0}Lo.prototype.Aa=function(){this.g=!1};function AT(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function kT(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function ls(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+NT(t,n)+(s?" "+s:"")})}function RT(t,e){t.info(function(){return"TIMEOUT: "+e})}Lo.prototype.info=function(){};function NT(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Eu(n)}catch{return e}}var Xn={},Ph=null;function Uo(){return Ph=Ph||new Ue}Xn.Pa="serverreachability";function $p(t){Xe.call(this,Xn.Pa,t)}Be($p,Xe);function Sr(t){const e=Uo();$e(e,new $p(e))}Xn.STAT_EVENT="statevent";function Vp(t,e){Xe.call(this,Xn.STAT_EVENT,t),this.stat=e}Be(Vp,Xe);function nt(t){const e=Uo();$e(e,new Vp(e,t))}Xn.Qa="timingevent";function Bp(t,e){Xe.call(this,Xn.Qa,t),this.size=e}Be(Bp,Xe);function zr(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return z.setTimeout(function(){t()},e)}var Fo={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},jp={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function bu(){}bu.prototype.h=null;function xh(t){return t.h||(t.h=t.i())}function qp(){}var Gr={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Su(){Xe.call(this,"d")}Be(Su,Xe);function Cu(){Xe.call(this,"c")}Be(Cu,Xe);var dc;function $o(){}Be($o,bu);$o.prototype.g=function(){return new XMLHttpRequest};$o.prototype.i=function(){return{}};dc=new $o;function Wr(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new br(this),this.O=DT,t=ac?125:void 0,this.T=new Mo(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Hp}function Hp(){this.i=null,this.g="",this.h=!1}var DT=45e3,pc={},Qi={};U=Wr.prototype;U.setTimeout=function(t){this.O=t};function gc(t,e,n){t.K=1,t.v=Bo(Jt(e)),t.s=n,t.P=!0,Kp(t,null)}function Kp(t,e){t.F=Date.now(),Qr(t),t.A=Jt(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Zp(n.i,"t",s),t.C=0,n=t.l.H,t.h=new Hp,t.g=_g(t.l,n?e:null,!t.s),0<t.N&&(t.L=new CT(Ye(t.La,t,t.g),t.N)),Up(t.S,t.g,"readystatechange",t.ib),e=t.H?Cp(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Sr(),AT(t.j,t.u,t.A,t.m,t.U,t.s)}U.ib=function(t){t=t.target;const e=this.L;e&&zt(t)==3?e.l():this.La(t)};U.La=function(t){try{if(t==this.g)e:{const l=zt(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>l)&&(l!=3||ac||this.g&&(this.h.h||this.g.fa()||Fh(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?Sr(3):Sr(2)),Vo(this);var n=this.g.aa();this.Y=n;t:if(zp(this)){var s=Fh(this.g);t="";var r=s.length,i=zt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Un(this),cr(this);var o="";break t}this.h.i=new z.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,kT(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Gi(a)){var u=a;break t}}u=null}if(n=u)ls(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,mc(this,n);else{this.i=!1,this.o=3,nt(12),Un(this),cr(this);break e}}this.P?(Gp(this,l,o),ac&&this.i&&l==3&&(Up(this.S,this.T,"tick",this.hb),this.T.start())):(ls(this.j,this.m,o,null),mc(this,o)),l==4&&Un(this),this.i&&!this.I&&(l==4?mg(this.l,this):(this.i=!1,Qr(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,nt(12)):(this.o=0,nt(13)),Un(this),cr(this)}}}catch{}finally{}};function zp(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Gp(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=OT(t,n),r==Qi){e==4&&(t.o=4,nt(14),s=!1),ls(t.j,t.m,null,"[Incomplete Response]");break}else if(r==pc){t.o=4,nt(15),ls(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else ls(t.j,t.m,r,null),mc(t,r);zp(t)&&r!=Qi&&r!=pc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,nt(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Pu(e),e.K=!0,nt(11))):(ls(t.j,t.m,n,"[Invalid Chunked Response]"),Un(t),cr(t))}U.hb=function(){if(this.g){var t=zt(this.g),e=this.g.fa();this.C<e.length&&(Vo(this),Gp(this,t,e),this.i&&t!=4&&Qr(this))}};function OT(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Qi:(n=Number(e.substring(n,s)),isNaN(n)?pc:(s+=1,s+n>e.length?Qi:(e=e.substr(s,n),t.C=s+n,e)))}U.cancel=function(){this.I=!0,Un(this)};function Qr(t){t.V=Date.now()+t.O,Wp(t,t.O)}function Wp(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=zr(Ye(t.gb,t),e)}function Vo(t){t.B&&(z.clearTimeout(t.B),t.B=null)}U.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(RT(this.j,this.A),this.K!=2&&(Sr(),nt(17)),Un(this),this.o=2,cr(this)):Wp(this,this.V-t)};function cr(t){t.l.G==0||t.I||mg(t.l,t)}function Un(t){Vo(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Iu(t.T),Fp(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function mc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||yc(n.h,t))){if(!t.J&&yc(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Ji(n),Ho(n);else break e;Ou(n),nt(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=zr(Ye(n.cb,n),6e3));if(1>=ng(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Fn(n,11)}else if((t.J||n.g==t)&&Ji(n),!Gi(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let u=r[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const l=u[3];l!=null&&(n.ma=l,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const v=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var i=s.h;i.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Au(i,i.h),i.h=null))}if(s.D){const y=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(s.za=y,_e(s.F,s.D,y))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=wg(s,s.H?s.ka:null,s.V),o.J){sg(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(Vo(a),Qr(a)),s.g=o}else pg(s);0<n.i.length&&Ko(n)}else u[0]!="stop"&&u[0]!="close"||Fn(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Fn(n,7):Du(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}Sr(4)}catch{}}function PT(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Do(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function xT(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Do(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Qp(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Do(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=xT(t),s=PT(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var Yp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function MT(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function qn(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof qn){this.h=e!==void 0?e:t.h,Yi(this,t.j),this.s=t.s,this.g=t.g,Xi(this,t.m),this.l=t.l,e=t.i;var n=new Cr;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Mh(this,n),this.o=t.o}else t&&(n=String(t).match(Yp))?(this.h=!!e,Yi(this,n[1]||"",!0),this.s=Zs(n[2]||""),this.g=Zs(n[3]||"",!0),Xi(this,n[4]),this.l=Zs(n[5]||"",!0),Mh(this,n[6]||"",!0),this.o=Zs(n[7]||"")):(this.h=!!e,this.i=new Cr(null,this.h))}qn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(er(e,Lh,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(er(e,Lh,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(er(n,n.charAt(0)=="/"?FT:UT,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",er(n,VT)),t.join("")};function Jt(t){return new qn(t)}function Yi(t,e,n){t.j=n?Zs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Xi(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Mh(t,e,n){e instanceof Cr?(t.i=e,BT(t.i,t.h)):(n||(e=er(e,$T)),t.i=new Cr(e,t.h))}function _e(t,e,n){t.i.set(e,n)}function Bo(t){return _e(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Zs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function er(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,LT),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function LT(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Lh=/[#\/\?@]/g,UT=/[#\?:]/g,FT=/[#\?]/g,$T=/[#\?@]/g,VT=/#/g;function Cr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function An(t){t.g||(t.g=new Map,t.h=0,t.i&&MT(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}U=Cr.prototype;U.add=function(t,e){An(this),this.i=null,t=Vs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Xp(t,e){An(t),e=Vs(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Jp(t,e){return An(t),e=Vs(t,e),t.g.has(e)}U.forEach=function(t,e){An(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};U.oa=function(){An(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};U.W=function(t){An(this);let e=[];if(typeof t=="string")Jp(this,t)&&(e=e.concat(this.g.get(Vs(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};U.set=function(t,e){return An(this),this.i=null,t=Vs(this,t),Jp(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};U.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Zp(t,e,n){Xp(t,e),0<n.length&&(t.i=null,t.g.set(Vs(t,e),pu(n)),t.h+=n.length)}U.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function Vs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function BT(t,e){e&&!t.j&&(An(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Xp(this,s),Zp(this,r,n))},t)),t.j=e}var jT=class{constructor(e,n){this.h=e,this.g=n}};function eg(t){this.l=t||qT,z.PerformanceNavigationTiming?(t=z.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(z.g&&z.g.Ga&&z.g.Ga()&&z.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var qT=10;function tg(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function ng(t){return t.h?1:t.g?t.g.size:0}function yc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Au(t,e){t.g?t.g.add(e):t.h=e}function sg(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}eg.prototype.cancel=function(){if(this.i=rg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function rg(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return pu(t.i)}function ku(){}ku.prototype.stringify=function(t){return z.JSON.stringify(t,void 0)};ku.prototype.parse=function(t){return z.JSON.parse(t,void 0)};function HT(){this.g=new ku}function KT(t,e,n){const s=n||"";try{Qp(t,function(r,i){let o=r;Hr(r)&&(o=Eu(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function zT(t,e){const n=new Lo;if(z.Image){const s=new Image;s.onload=di(gi,n,s,"TestLoadImage: loaded",!0,e),s.onerror=di(gi,n,s,"TestLoadImage: error",!1,e),s.onabort=di(gi,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=di(gi,n,s,"TestLoadImage: timeout",!1,e),z.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function gi(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Yr(t){this.l=t.ac||null,this.j=t.jb||!1}Be(Yr,bu);Yr.prototype.g=function(){return new jo(this.l,this.j)};Yr.prototype.i=function(t){return function(){return t}}({});function jo(t,e){Ue.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Ru,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Be(jo,Ue);var Ru=0;U=jo.prototype;U.open=function(t,e){if(this.readyState!=Ru)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ar(this)};U.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||z).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};U.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Xr(this)),this.readyState=Ru};U.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ar(this)),this.g&&(this.readyState=3,Ar(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof z.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ig(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function ig(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}U.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Xr(this):Ar(this),this.readyState==3&&ig(this)}};U.Va=function(t){this.g&&(this.response=this.responseText=t,Xr(this))};U.Ua=function(t){this.g&&(this.response=t,Xr(this))};U.ga=function(){this.g&&Xr(this)};function Xr(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ar(t)}U.setRequestHeader=function(t,e){this.v.append(t,e)};U.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};U.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ar(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(jo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var GT=z.JSON.parse;function be(t){Ue.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=og,this.K=this.L=!1}Be(be,Ue);var og="",WT=/^https?$/i,QT=["POST","PUT"];U=be.prototype;U.Ka=function(t){this.L=t};U.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():dc.g(),this.C=this.u?xh(this.u):xh(dc),this.g.onreadystatechange=Ye(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Uh(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=z.FormData&&t instanceof z.FormData,!(0<=Ip(QT,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{ug(this),0<this.B&&((this.K=YT(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ye(this.qa,this)):this.A=Tu(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Uh(this,i)}};function YT(t){return ks&&dT()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}U.qa=function(){typeof du<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,$e(this,"timeout"),this.abort(8))};function Uh(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,ag(t),qo(t)}function ag(t){t.D||(t.D=!0,$e(t,"complete"),$e(t,"error"))}U.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,$e(this,"complete"),$e(this,"abort"),qo(this))};U.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),qo(this,!0)),be.X.M.call(this)};U.Ha=function(){this.s||(this.F||this.v||this.l?cg(this):this.fb())};U.fb=function(){cg(this)};function cg(t){if(t.h&&typeof du<"u"&&(!t.C[1]||zt(t)!=4||t.aa()!=2)){if(t.v&&zt(t)==4)Tu(t.Ha,0,t);else if($e(t,"readystatechange"),zt(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(Yp)[1]||null;if(!r&&z.self&&z.self.location){var i=z.self.location.protocol;r=i.substr(0,i.length-1)}s=!WT.test(r?r.toLowerCase():"")}n=s}if(n)$e(t,"complete"),$e(t,"success");else{t.m=6;try{var o=2<zt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",ag(t)}}finally{qo(t)}}}}function qo(t,e){if(t.g){ug(t);const n=t.g,s=t.C[0]?zi:null;t.g=null,t.C=null,e||$e(t,"ready");try{n.onreadystatechange=s}catch{}}}function ug(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(z.clearTimeout(t.A),t.A=null)}function zt(t){return t.g?t.g.readyState:0}U.aa=function(){try{return 2<zt(this)?this.g.status:-1}catch{return-1}};U.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};U.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),GT(e)}};function Fh(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case og:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}U.Ea=function(){return this.m};U.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function lg(t){let e="";return mu(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Nu(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=lg(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):_e(t,e,n))}function Qs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function hg(t){this.Ca=0,this.i=[],this.j=new Lo,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Qs("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Qs("baseRetryDelayMs",5e3,t),this.bb=Qs("retryDelaySeedMs",1e4,t),this.$a=Qs("forwardChannelMaxRetries",2,t),this.ta=Qs("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new eg(t&&t.concurrentRequestLimit),this.Fa=new HT,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}U=hg.prototype;U.ma=8;U.G=1;function Du(t){if(fg(t),t.G==3){var e=t.U++,n=Jt(t.F);_e(n,"SID",t.I),_e(n,"RID",e),_e(n,"TYPE","terminate"),Jr(t,n),e=new Wr(t,t.j,e,void 0),e.K=2,e.v=Bo(Jt(n)),n=!1,z.navigator&&z.navigator.sendBeacon&&(n=z.navigator.sendBeacon(e.v.toString(),"")),!n&&z.Image&&(new Image().src=e.v,n=!0),n||(e.g=_g(e.l,null),e.g.da(e.v)),e.F=Date.now(),Qr(e)}vg(t)}function Ho(t){t.g&&(Pu(t),t.g.cancel(),t.g=null)}function fg(t){Ho(t),t.u&&(z.clearTimeout(t.u),t.u=null),Ji(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&z.clearTimeout(t.m),t.m=null)}function Ko(t){tg(t.h)||t.m||(t.m=!0,xp(t.Ja,t),t.C=0)}function XT(t,e){return ng(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=zr(Ye(t.Ja,t,e),yg(t,t.C)),t.C++,!0)}U.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new Wr(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=Cp(i),Ap(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=dg(this,r,e),n=Jt(this.F),_e(n,"RID",t),_e(n,"CVER",22),this.D&&_e(n,"X-HTTP-Session-Id",this.D),Jr(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(lg(i)))+"&"+e:this.o&&Nu(n,this.o,i)),Au(this.h,r),this.Ya&&_e(n,"TYPE","init"),this.O?(_e(n,"$req",e),_e(n,"SID","null"),r.Z=!0,gc(r,n,null)):gc(r,n,e),this.G=2}}else this.G==3&&(t?$h(this,t):this.i.length==0||tg(this.h)||$h(this))};function $h(t,e){var n;e?n=e.m:n=t.U++;const s=Jt(t.F);_e(s,"SID",t.I),_e(s,"RID",n),_e(s,"AID",t.T),Jr(t,s),t.o&&t.s&&Nu(s,t.o,t.s),n=new Wr(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=dg(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Au(t.h,n),gc(n,s,e)}function Jr(t,e){t.ia&&mu(t.ia,function(n,s){_e(e,s,n)}),t.l&&Qp({},function(n,s){_e(e,s,n)})}function dg(t,e,n){n=Math.min(t.i.length,n);var s=t.l?Ye(t.l.Ra,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=r[c].h;const l=r[c].g;if(u-=i,0>u)i=Math.max(0,r[c].h-100),a=!1;else try{KT(l,o,"req"+u+"_")}catch{s&&s(l)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function pg(t){t.g||t.u||(t.Z=1,xp(t.Ia,t),t.A=0)}function Ou(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=zr(Ye(t.Ia,t),yg(t,t.A)),t.A++,!0)}U.Ia=function(){if(this.u=null,gg(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=zr(Ye(this.eb,this),t)}};U.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,nt(10),Ho(this),gg(this))};function Pu(t){t.B!=null&&(z.clearTimeout(t.B),t.B=null)}function gg(t){t.g=new Wr(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Jt(t.sa);_e(e,"RID","rpc"),_e(e,"SID",t.I),_e(e,"CI",t.L?"0":"1"),_e(e,"AID",t.T),_e(e,"TYPE","xmlhttp"),Jr(t,e),t.o&&t.s&&Nu(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Bo(Jt(e)),n.s=null,n.P=!0,Kp(n,t)}U.cb=function(){this.v!=null&&(this.v=null,Ho(this),Ou(this),nt(19))};function Ji(t){t.v!=null&&(z.clearTimeout(t.v),t.v=null)}function mg(t,e){var n=null;if(t.g==e){Ji(t),Pu(t),t.g=null;var s=2}else if(yc(t.h,e))n=e.D,sg(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=Uo(),$e(s,new Bp(s,n)),Ko(t)}else pg(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&XT(t,e)||s==2&&Ou(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:Fn(t,5);break;case 4:Fn(t,10);break;case 3:Fn(t,6);break;default:Fn(t,2)}}}function yg(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Fn(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=Ye(t.kb,t);n||(n=new qn("//www.google.com/images/cleardot.gif"),z.location&&z.location.protocol=="http"||Yi(n,"https"),Bo(n)),zT(n.toString(),s)}else nt(2);t.G=0,t.l&&t.l.va(e),vg(t),fg(t)}U.kb=function(t){t?(this.j.info("Successfully pinged google.com"),nt(2)):(this.j.info("Failed to ping google.com"),nt(1))};function vg(t){if(t.G=0,t.la=[],t.l){const e=rg(t.h);(e.length!=0||t.i.length!=0)&&(kh(t.la,e),kh(t.la,t.i),t.h.i.length=0,pu(t.i),t.i.length=0),t.l.ua()}}function wg(t,e,n){var s=n instanceof qn?Jt(n):new qn(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Xi(s,s.m);else{var r=z.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new qn(null,void 0);s&&Yi(i,s),e&&(i.g=e),r&&Xi(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&_e(s,n,e),_e(s,"VER",t.ma),Jr(t,s),s}function _g(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new be(new Yr({jb:!0})):new be(t.ra),e.Ka(t.H),e}function Eg(){}U=Eg.prototype;U.xa=function(){};U.wa=function(){};U.va=function(){};U.ua=function(){};U.Ra=function(){};function Zi(){if(ks&&!(10<=Number(pT)))throw Error("Environmental error: no available transport.")}Zi.prototype.g=function(t,e){return new ut(t,e)};function ut(t,e){Ue.call(this),this.g=new hg(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Gi(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Gi(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Bs(this)}Be(ut,Ue);ut.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;nt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=wg(t,null,t.V),Ko(t)};ut.prototype.close=function(){Du(this.g)};ut.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Eu(t),t=n);e.i.push(new jT(e.ab++,t)),e.G==3&&Ko(e)};ut.prototype.M=function(){this.g.l=null,delete this.j,Du(this.g),delete this.g,ut.X.M.call(this)};function Ig(t){Su.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Be(Ig,Su);function Tg(){Cu.call(this),this.status=1}Be(Tg,Cu);function Bs(t){this.g=t}Be(Bs,Eg);Bs.prototype.xa=function(){$e(this.g,"a")};Bs.prototype.wa=function(t){$e(this.g,new Ig(t))};Bs.prototype.va=function(t){$e(this.g,new Tg)};Bs.prototype.ua=function(){$e(this.g,"b")};Zi.prototype.createWebChannel=Zi.prototype.g;ut.prototype.send=ut.prototype.u;ut.prototype.open=ut.prototype.m;ut.prototype.close=ut.prototype.close;Fo.NO_ERROR=0;Fo.TIMEOUT=8;Fo.HTTP_ERROR=6;jp.COMPLETE="complete";qp.EventType=Gr;Gr.OPEN="a";Gr.CLOSE="b";Gr.ERROR="c";Gr.MESSAGE="d";Ue.prototype.listen=Ue.prototype.N;be.prototype.listenOnce=be.prototype.O;be.prototype.getLastError=be.prototype.Oa;be.prototype.getLastErrorCode=be.prototype.Ea;be.prototype.getStatus=be.prototype.aa;be.prototype.getResponseJson=be.prototype.Sa;be.prototype.getResponseText=be.prototype.fa;be.prototype.send=be.prototype.da;be.prototype.setWithCredentials=be.prototype.Ka;var JT=function(){return new Zi},ZT=function(){return Uo()},Oa=Fo,eb=jp,tb=Xn,Vh={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},nb=Yr,mi=qp,sb=be;const Bh="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ke.UNAUTHENTICATED=new Ke(null),Ke.GOOGLE_CREDENTIALS=new Ke("google-credentials-uid"),Ke.FIRST_PARTY=new Ke("first-party-uid"),Ke.MOCK_USER=new Ke("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let js="9.18.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn=new tu("@firebase/firestore");function jh(){return Qn.logLevel}function F(t,...e){if(Qn.logLevel<=ce.DEBUG){const n=e.map(xu);Qn.debug(`Firestore (${js}): ${t}`,...n)}}function Zt(t,...e){if(Qn.logLevel<=ce.ERROR){const n=e.map(xu);Qn.error(`Firestore (${js}): ${t}`,...n)}}function vc(t,...e){if(Qn.logLevel<=ce.WARN){const n=e.map(xu);Qn.warn(`Firestore (${js}): ${t}`,...n)}}function xu(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function K(t="Unexpected state"){const e=`FIRESTORE (${js}) INTERNAL ASSERTION FAILED: `+t;throw Zt(e),new Error(e)}function me(t,e){t||K()}function J(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends sn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class rb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ke.UNAUTHENTICATED))}shutdown(){}}class ib{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class ob{constructor(e){this.t=e,this.currentUser=Ke.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Hn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Hn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Hn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(me(typeof s.accessToken=="string"),new bg(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return me(e===null||typeof e=="string"),new Ke(e)}}class ab{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=Ke.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(me(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class cb{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new ab(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Ke.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ub{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class lb{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=i=>{i.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,F("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(me(typeof n.token=="string"),this.A=n.token,new ub(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=hb(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function ue(t,e){return t<e?-1:t>e?1:0}function Rs(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new M(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new M(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new M(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new M(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Oe.fromMillis(Date.now())}static fromDate(e){return Oe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Oe(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.timestamp=e}static fromTimestamp(e){return new X(e)}static min(){return new X(new Oe(0,0))}static max(){return new X(new Oe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e,n,s){n===void 0?n=0:n>e.length&&K(),s===void 0?s=e.length-n:s>e.length-n&&K(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return kr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof kr?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class we extends kr{construct(e,n,s){return new we(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new M(E.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new we(n)}static emptyPath(){return new we([])}}const fb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class We extends kr{construct(e,n,s){return new We(e,n,s)}static isValidIdentifier(e){return fb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),We.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new We(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new M(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new M(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new M(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new M(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new We(n)}static emptyPath(){return new We([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.path=e}static fromPath(e){return new V(we.fromString(e))}static fromName(e){return new V(we.fromString(e).popFirst(5))}static empty(){return new V(we.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&we.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return we.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new V(new we(e.slice()))}}function db(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=X.fromTimestamp(s===1e9?new Oe(n+1,0):new Oe(n,s));return new Tn(r,V.empty(),e)}function pb(t){return new Tn(t.readTime,t.key,-1)}class Tn{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Tn(X.min(),V.empty(),-1)}static max(){return new Tn(X.max(),V.empty(),-1)}}function gb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=V.comparator(t.documentKey,e.documentKey),n!==0?n:ue(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class yb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zr(t){if(t.code!==E.FAILED_PRECONDITION||t.message!==mb)throw t;F("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new b((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof b?n:b.resolve(n)}catch(n){return b.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):b.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):b.reject(n)}static resolve(e){return new b((n,s)=>{n(e)})}static reject(e){return new b((n,s)=>{s(e)})}static waitFor(e){return new b((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=b.resolve(!1);for(const s of e)n=n.next(r=>r?b.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new b((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(l=>{o[u]=l,++a,a===i&&s(o)},l=>r(l))}})}static doWhile(e,n){return new b((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function ei(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Mu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}Mu.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vb{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Rr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Rr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Rr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qh(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Jn(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Cg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zo(t){return t==null}function eo(t){return t===0&&1/t==-1/0}function wb(t){return typeof t=="number"&&Number.isInteger(t)&&!eo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _b extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(r){throw r instanceof DOMException?new _b("Invalid base64 string: "+r):r}}(e);return new et(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new et(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}et.EMPTY_BYTE_STRING=new et("");const Eb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function bn(t){if(me(!!t),typeof t=="string"){let e=0;const n=Eb.exec(t);if(me(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ke(t.seconds),nanos:ke(t.nanos)}}function ke(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ns(t){return typeof t=="string"?et.fromBase64String(t):et.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ag(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function kg(t){const e=t.mapValue.fields.__previous_value__;return Ag(e)?kg(e):e}function Nr(t){const e=bn(t.mapValue.fields.__local_write_time__.timestampValue);return new Oe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Yn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ag(t)?4:Ib(t)?9007199254740991:10:K()}function $t(t,e){if(t===e)return!0;const n=Yn(t);if(n!==Yn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Nr(t).isEqual(Nr(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=bn(s.timestampValue),o=bn(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return Ns(s.bytesValue).isEqual(Ns(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return ke(s.geoPointValue.latitude)===ke(r.geoPointValue.latitude)&&ke(s.geoPointValue.longitude)===ke(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return ke(s.integerValue)===ke(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=ke(s.doubleValue),o=ke(r.doubleValue);return i===o?eo(i)===eo(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Rs(t.arrayValue.values||[],e.arrayValue.values||[],$t);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(qh(i)!==qh(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!$t(i[a],o[a])))return!1;return!0}(t,e);default:return K()}}function Dr(t,e){return(t.values||[]).find(n=>$t(n,e))!==void 0}function Ds(t,e){if(t===e)return 0;const n=Yn(t),s=Yn(e);if(n!==s)return ue(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ue(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=ke(r.integerValue||r.doubleValue),a=ke(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Hh(t.timestampValue,e.timestampValue);case 4:return Hh(Nr(t),Nr(e));case 5:return ue(t.stringValue,e.stringValue);case 6:return function(r,i){const o=Ns(r),a=Ns(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=ue(o[c],a[c]);if(u!==0)return u}return ue(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=ue(ke(r.latitude),ke(i.latitude));return o!==0?o:ue(ke(r.longitude),ke(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=Ds(o[c],a[c]);if(u)return u}return ue(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===yi.mapValue&&i===yi.mapValue)return 0;if(r===yi.mapValue)return 1;if(i===yi.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=ue(a[l],u[l]);if(h!==0)return h;const f=Ds(o[a[l]],c[u[l]]);if(f!==0)return f}return ue(a.length,u.length)}(t.mapValue,e.mapValue);default:throw K()}}function Hh(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ue(t,e);const n=bn(t),s=bn(e),r=ue(n.seconds,s.seconds);return r!==0?r:ue(n.nanos,s.nanos)}function Os(t){return wc(t)}function wc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=bn(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ns(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,V.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=wc(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${wc(s.fields[a])}`;return i+"}"}(t.mapValue):K();var e,n}function Kh(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function _c(t){return!!t&&"integerValue"in t}function Lu(t){return!!t&&"arrayValue"in t}function zh(t){return!!t&&"nullValue"in t}function Gh(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ni(t){return!!t&&"mapValue"in t}function ur(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Jn(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=ur(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ur(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Ib(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class to{constructor(e,n){this.position=e,this.inclusive=n}}function Wh(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=V.comparator(V.fromName(o.referenceValue),n.key):s=Ds(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Qh(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!$t(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Rg{}class Ne extends Rg{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new bb(e,n,s):n==="array-contains"?new Ab(e,s):n==="in"?new kb(e,s):n==="not-in"?new Rb(e,s):n==="array-contains-any"?new Nb(e,s):new Ne(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new Sb(e,s):new Cb(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ds(n,this.value)):n!==null&&Yn(this.value)===Yn(n)&&this.matchesComparison(Ds(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Nt extends Rg{constructor(e,n){super(),this.filters=e,this.op=n,this.ft=null}static create(e,n){return new Nt(e,n)}matches(e){return Ng(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ft!==null||(this.ft=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ft}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.dt(n=>n.isInequality());return e!==null?e.field:null}dt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Ng(t){return t.op==="and"}function Dg(t){return Tb(t)&&Ng(t)}function Tb(t){for(const e of t.filters)if(e instanceof Nt)return!1;return!0}function Ec(t){if(t instanceof Ne)return t.field.canonicalString()+t.op.toString()+Os(t.value);if(Dg(t))return t.filters.map(e=>Ec(e)).join(",");{const e=t.filters.map(n=>Ec(n)).join(",");return`${t.op}(${e})`}}function Og(t,e){return t instanceof Ne?function(n,s){return s instanceof Ne&&n.op===s.op&&n.field.isEqual(s.field)&&$t(n.value,s.value)}(t,e):t instanceof Nt?function(n,s){return s instanceof Nt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&Og(i,s.filters[o]),!0):!1}(t,e):void K()}function Pg(t){return t instanceof Ne?function(e){return`${e.field.canonicalString()} ${e.op} ${Os(e.value)}`}(t):t instanceof Nt?function(e){return e.op.toString()+" {"+e.getFilters().map(Pg).join(" ,")+"}"}(t):"Filter"}class bb extends Ne{constructor(e,n,s){super(e,n,s),this.key=V.fromName(s.referenceValue)}matches(e){const n=V.comparator(e.key,this.key);return this.matchesComparison(n)}}class Sb extends Ne{constructor(e,n){super(e,"in",n),this.keys=xg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Cb extends Ne{constructor(e,n){super(e,"not-in",n),this.keys=xg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function xg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>V.fromName(s.referenceValue))}class Ab extends Ne{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Lu(n)&&Dr(n.arrayValue,this.value)}}class kb extends Ne{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Dr(this.value.arrayValue,n)}}class Rb extends Ne{constructor(e,n){super(e,"not-in",n)}matches(e){if(Dr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Dr(this.value.arrayValue,n)}}class Nb extends Ne{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Lu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Dr(this.value.arrayValue,s))}}/**
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
 */class ys{constructor(e,n="asc"){this.field=e,this.dir=n}}function Db(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,n){this.comparator=e,this.root=n||Fe.EMPTY}insert(e,n){return new Me(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Fe.BLACK,null,null))}remove(e){return new Me(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Fe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new vi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new vi(this.root,e,this.comparator,!1)}getReverseIterator(){return new vi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new vi(this.root,e,this.comparator,!0)}}class vi{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Fe{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??Fe.RED,this.left=r??Fe.EMPTY,this.right=i??Fe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Fe(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Fe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Fe.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}}Fe.EMPTY=null,Fe.RED=!0,Fe.BLACK=!1;Fe.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Fe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e){this.comparator=e,this.data=new Me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Yh(this.data.getIterator())}getIteratorFrom(e){return new Yh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Pe)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Pe(this.comparator);return n.data=e,n}}class Yh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.fields=e,e.sort(We.comparator)}static empty(){return new St([])}unionWith(e){let n=new Pe(We.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new St(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Rs(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.value=e}static empty(){return new ct({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Ni(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ur(n)}setAll(e){let n=We.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=ur(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Ni(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return $t(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Ni(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){Jn(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new ct(ur(this.value))}}function Mg(t){const e=[];return Jn(t.fields,(n,s)=>{const r=new We([n]);if(Ni(s)){const i=Mg(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new St(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ze(e,0,X.min(),X.min(),X.min(),ct.empty(),0)}static newFoundDocument(e,n,s,r){return new ze(e,1,n,X.min(),s,r,0)}static newNoDocument(e,n){return new ze(e,2,n,X.min(),X.min(),ct.empty(),0)}static newUnknownDocument(e,n){return new ze(e,3,n,X.min(),X.min(),ct.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ct.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ze&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ze(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ob{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this._t=null}}function Xh(t,e=null,n=[],s=[],r=null,i=null,o=null){return new Ob(t,e,n,s,r,i,o)}function Uu(t){const e=J(t);if(e._t===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Ec(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),zo(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Os(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Os(s)).join(",")),e._t=n}return e._t}function Fu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Db(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Og(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Qh(t.startAt,e.startAt)&&Qh(t.endAt,e.endAt)}function Ic(t){return V.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this.gt=null,this.startAt,this.endAt}}function Pb(t,e,n,s,r,i,o,a){return new qs(t,e,n,s,r,i,o,a)}function $u(t){return new qs(t)}function Jh(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Vu(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Go(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Lg(t){return t.collectionGroup!==null}function vs(t){const e=J(t);if(e.wt===null){e.wt=[];const n=Go(e),s=Vu(e);if(n!==null&&s===null)n.isKeyField()||e.wt.push(new ys(n)),e.wt.push(new ys(We.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.wt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new ys(We.keyField(),i))}}}return e.wt}function en(t){const e=J(t);if(!e.gt)if(e.limitType==="F")e.gt=Xh(e.path,e.collectionGroup,vs(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of vs(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new ys(i.field,o))}const s=e.endAt?new to(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new to(e.startAt.position,e.startAt.inclusive):null;e.gt=Xh(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.gt}function Tc(t,e){e.getFirstInequalityField(),Go(t);const n=t.filters.concat([e]);return new qs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function bc(t,e,n){return new qs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Wo(t,e){return Fu(en(t),en(e))&&t.limitType===e.limitType}function Ug(t){return`${Uu(en(t))}|lt:${t.limitType}`}function Sc(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Pg(s)).join(", ")}]`),zo(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Os(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Os(s)).join(",")),`Target(${n})`}(en(t))}; limitType=${t.limitType})`}function Qo(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):V.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of vs(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Wh(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,vs(n),s)||n.endAt&&!function(r,i,o){const a=Wh(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,vs(n),s))}(t,e)}function xb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Fg(t){return(e,n)=>{let s=!1;for(const r of vs(t)){const i=Mb(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function Mb(t,e,n){const s=t.field.isKeyField()?V.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Ds(a,c):K()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return K()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $g(t,e){if(t.yt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:eo(e)?"-0":e}}function Vg(t){return{integerValue:""+t}}function Lb(t,e){return wb(e)?Vg(e):$g(t,e)}/**
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
 */class Yo{constructor(){this._=void 0}}function Ub(t,e,n){return t instanceof no?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof Or?jg(t,e):t instanceof Pr?qg(t,e):function(s,r){const i=Bg(s,r),o=Zh(i)+Zh(s.It);return _c(i)&&_c(s.It)?Vg(o):$g(s.Tt,o)}(t,e)}function Fb(t,e,n){return t instanceof Or?jg(t,e):t instanceof Pr?qg(t,e):n}function Bg(t,e){return t instanceof so?_c(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class no extends Yo{}class Or extends Yo{constructor(e){super(),this.elements=e}}function jg(t,e){const n=Hg(e);for(const s of t.elements)n.some(r=>$t(r,s))||n.push(s);return{arrayValue:{values:n}}}class Pr extends Yo{constructor(e){super(),this.elements=e}}function qg(t,e){let n=Hg(e);for(const s of t.elements)n=n.filter(r=>!$t(r,s));return{arrayValue:{values:n}}}class so extends Yo{constructor(e,n){super(),this.Tt=e,this.It=n}}function Zh(t){return ke(t.integerValue||t.doubleValue)}function Hg(t){return Lu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function $b(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Or&&s instanceof Or||n instanceof Pr&&s instanceof Pr?Rs(n.elements,s.elements,$t):n instanceof so&&s instanceof so?$t(n.It,s.It):n instanceof no&&s instanceof no}(t.transform,e.transform)}class Vb{constructor(e,n){this.version=e,this.transformResults=n}}class Qt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Qt}static exists(e){return new Qt(void 0,e)}static updateTime(e){return new Qt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Di(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Xo{}function Kg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Gg(t.key,Qt.none()):new Jo(t.key,t.data,Qt.none());{const n=t.data,s=ct.empty();let r=new Pe(We.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Zn(t.key,s,new St(r.toArray()),Qt.none())}}function Bb(t,e,n){t instanceof Jo?function(s,r,i){const o=s.value.clone(),a=tf(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Zn?function(s,r,i){if(!Di(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=tf(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(zg(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function lr(t,e,n,s){return t instanceof Jo?function(r,i,o,a){if(!Di(r.precondition,i))return o;const c=r.value.clone(),u=nf(r.fieldTransforms,a,i);return c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof Zn?function(r,i,o,a){if(!Di(r.precondition,i))return o;const c=nf(r.fieldTransforms,a,i),u=i.data;return u.setAll(zg(r)),u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(l=>l.field))}(t,e,n,s):function(r,i,o){return Di(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function jb(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=Bg(s.transform,r||null);i!=null&&(n===null&&(n=ct.empty()),n.set(s.field,i))}return n||null}function ef(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Rs(n,s,(r,i)=>$b(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Jo extends Xo{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Zn extends Xo{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function zg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function tf(t,e,n){const s=new Map;me(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,Fb(o,a,n[r]))}return s}function nf(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,Ub(i,o,e))}return s}class Gg extends Xo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class qb extends Xo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hb{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ae,se;function Kb(t){switch(t){default:return K();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function Wg(t){if(t===void 0)return Zt("GRPC error has no .code"),E.UNKNOWN;switch(t){case Ae.OK:return E.OK;case Ae.CANCELLED:return E.CANCELLED;case Ae.UNKNOWN:return E.UNKNOWN;case Ae.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case Ae.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case Ae.INTERNAL:return E.INTERNAL;case Ae.UNAVAILABLE:return E.UNAVAILABLE;case Ae.UNAUTHENTICATED:return E.UNAUTHENTICATED;case Ae.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case Ae.NOT_FOUND:return E.NOT_FOUND;case Ae.ALREADY_EXISTS:return E.ALREADY_EXISTS;case Ae.PERMISSION_DENIED:return E.PERMISSION_DENIED;case Ae.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case Ae.ABORTED:return E.ABORTED;case Ae.OUT_OF_RANGE:return E.OUT_OF_RANGE;case Ae.UNIMPLEMENTED:return E.UNIMPLEMENTED;case Ae.DATA_LOSS:return E.DATA_LOSS;default:return K()}}(se=Ae||(Ae={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Jn(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Cg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zb=new Me(V.comparator);function tn(){return zb}const Qg=new Me(V.comparator);function tr(...t){let e=Qg;for(const n of t)e=e.insert(n.key,n);return e}function Yg(t){let e=Qg;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function $n(){return hr()}function Xg(){return hr()}function hr(){return new Hs(t=>t.toString(),(t,e)=>t.isEqual(e))}const Gb=new Me(V.comparator),Wb=new Pe(V.comparator);function ne(...t){let e=Wb;for(const n of t)e=e.add(n);return e}const Qb=new Pe(ue);function Jg(){return Qb}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,ti.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Zo(X.min(),r,Jg(),tn(),ne())}}class ti{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new ti(s,n,ne(),ne(),ne())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e,n,s,r){this.Et=e,this.removedTargetIds=n,this.key=s,this.At=r}}class Zg{constructor(e,n){this.targetId=e,this.Rt=n}}class em{constructor(e,n,s=et.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class sf{constructor(){this.Pt=0,this.vt=of(),this.bt=et.EMPTY_BYTE_STRING,this.Vt=!1,this.St=!0}get current(){return this.Vt}get resumeToken(){return this.bt}get Dt(){return this.Pt!==0}get Ct(){return this.St}xt(e){e.approximateByteSize()>0&&(this.St=!0,this.bt=e)}Nt(){let e=ne(),n=ne(),s=ne();return this.vt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:K()}}),new ti(this.bt,this.Vt,e,n,s)}kt(){this.St=!1,this.vt=of()}$t(e,n){this.St=!0,this.vt=this.vt.insert(e,n)}Mt(e){this.St=!0,this.vt=this.vt.remove(e)}Ot(){this.Pt+=1}Ft(){this.Pt-=1}Bt(){this.St=!0,this.Vt=!0}}class Yb{constructor(e){this.Lt=e,this.qt=new Map,this.Ut=tn(),this.Kt=rf(),this.Gt=new Pe(ue)}Qt(e){for(const n of e.Et)e.At&&e.At.isFoundDocument()?this.jt(n,e.At):this.zt(n,e.key,e.At);for(const n of e.removedTargetIds)this.zt(n,e.key,e.At)}Wt(e){this.forEachTarget(e,n=>{const s=this.Ht(n);switch(e.state){case 0:this.Jt(n)&&s.xt(e.resumeToken);break;case 1:s.Ft(),s.Dt||s.kt(),s.xt(e.resumeToken);break;case 2:s.Ft(),s.Dt||this.removeTarget(n);break;case 3:this.Jt(n)&&(s.Bt(),s.xt(e.resumeToken));break;case 4:this.Jt(n)&&(this.Yt(n),s.xt(e.resumeToken));break;default:K()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qt.forEach((s,r)=>{this.Jt(r)&&n(r)})}Zt(e){const n=e.targetId,s=e.Rt.count,r=this.Xt(n);if(r){const i=r.target;if(Ic(i))if(s===0){const o=new V(i.path);this.zt(n,o,ze.newNoDocument(o,X.min()))}else me(s===1);else this.te(n)!==s&&(this.Yt(n),this.Gt=this.Gt.add(n))}}ee(e){const n=new Map;this.qt.forEach((i,o)=>{const a=this.Xt(o);if(a){if(i.current&&Ic(a.target)){const c=new V(a.target.path);this.Ut.get(c)!==null||this.ne(o,c)||this.zt(o,c,ze.newNoDocument(c,e))}i.Ct&&(n.set(o,i.Nt()),i.kt())}});let s=ne();this.Kt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Xt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Ut.forEach((i,o)=>o.setReadTime(e));const r=new Zo(e,n,this.Gt,this.Ut,s);return this.Ut=tn(),this.Kt=rf(),this.Gt=new Pe(ue),r}jt(e,n){if(!this.Jt(e))return;const s=this.ne(e,n.key)?2:0;this.Ht(e).$t(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.Kt=this.Kt.insert(n.key,this.se(n.key).add(e))}zt(e,n,s){if(!this.Jt(e))return;const r=this.Ht(e);this.ne(e,n)?r.$t(n,1):r.Mt(n),this.Kt=this.Kt.insert(n,this.se(n).delete(e)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(e){this.qt.delete(e)}te(e){const n=this.Ht(e).Nt();return this.Lt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Ht(e).Ot()}Ht(e){let n=this.qt.get(e);return n||(n=new sf,this.qt.set(e,n)),n}se(e){let n=this.Kt.get(e);return n||(n=new Pe(ue),this.Kt=this.Kt.insert(e,n)),n}Jt(e){const n=this.Xt(e)!==null;return n||F("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.qt.get(e);return n&&n.Dt?null:this.Lt.ie(e)}Yt(e){this.qt.set(e,new sf),this.Lt.getRemoteKeysForTarget(e).forEach(n=>{this.zt(e,n,null)})}ne(e,n){return this.Lt.getRemoteKeysForTarget(e).has(n)}}function rf(){return new Me(V.comparator)}function of(){return new Me(V.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xb=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Jb=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Zb=(()=>({and:"AND",or:"OR"}))();class eS{constructor(e,n){this.databaseId=e,this.yt=n}}function ro(t,e){return t.yt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function tm(t,e){return t.yt?e.toBase64():e.toUint8Array()}function tS(t,e){return ro(t,e.toTimestamp())}function Ft(t){return me(!!t),X.fromTimestamp(function(e){const n=bn(e);return new Oe(n.seconds,n.nanos)}(t))}function Bu(t,e){return function(n){return new we(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function nm(t){const e=we.fromString(t);return me(om(e)),e}function Cc(t,e){return Bu(t.databaseId,e.path)}function Pa(t,e){const n=nm(e);if(n.get(1)!==t.databaseId.projectId)throw new M(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new M(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new V(sm(n))}function Ac(t,e){return Bu(t.databaseId,e)}function nS(t){const e=nm(t);return e.length===4?we.emptyPath():sm(e)}function kc(t){return new we(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function sm(t){return me(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function af(t,e,n){return{name:Cc(t,e),fields:n.value.mapValue.fields}}function sS(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:K()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,u){return c.yt?(me(u===void 0||typeof u=="string"),et.fromBase64String(u||"")):(me(u===void 0||u instanceof Uint8Array),et.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?E.UNKNOWN:Wg(c.code);return new M(u,c.message||"")}(o);n=new em(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Pa(t,s.document.name),i=Ft(s.document.updateTime),o=s.document.createTime?Ft(s.document.createTime):X.min(),a=new ct({mapValue:{fields:s.document.fields}}),c=ze.newFoundDocument(r,i,o,a),u=s.targetIds||[],l=s.removedTargetIds||[];n=new Oi(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Pa(t,s.document),i=s.readTime?Ft(s.readTime):X.min(),o=ze.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Oi([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Pa(t,s.document),i=s.removedTargetIds||[];n=new Oi([],i,r,null)}else{if(!("filter"in e))return K();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new Hb(r),o=s.targetId;n=new Zg(o,i)}}return n}function rS(t,e){let n;if(e instanceof Jo)n={update:af(t,e.key,e.value)};else if(e instanceof Gg)n={delete:Cc(t,e.key)};else if(e instanceof Zn)n={update:af(t,e.key,e.data),updateMask:dS(e.fieldMask)};else{if(!(e instanceof qb))return K();n={verify:Cc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof no)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Or)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Pr)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof so)return{fieldPath:i.field.canonicalString(),increment:o.It};throw K()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:tS(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:K()}(t,e.precondition)),n}function iS(t,e){return t&&t.length>0?(me(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?Ft(s.updateTime):Ft(r);return i.isEqual(X.min())&&(i=Ft(r)),new Vb(i,s.transformResults||[])}(n,e))):[]}function oS(t,e){return{documents:[Ac(t,e.path)]}}function aS(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Ac(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ac(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return im(Nt.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:as(l.field),direction:lS(l.dir)}}(u))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,u){return c.yt||zo(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function cS(t){let e=nS(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){me(s===1);const l=n.from[0];l.allDescendants?r=l.collectionId:e=e.child(l.collectionId)}let i=[];n.where&&(i=function(l){const h=rm(l);return h instanceof Nt&&Dg(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new ys(cs(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,zo(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(l){const h=!!l.before,f=l.values||[];return new to(f,h)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const h=!l.before,f=l.values||[];return new to(f,h)}(n.endAt)),Pb(e,r,o,i,a,"F",c,u)}function uS(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return K()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function rm(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=cs(e.unaryFilter.field);return Ne.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=cs(e.unaryFilter.field);return Ne.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=cs(e.unaryFilter.field);return Ne.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=cs(e.unaryFilter.field);return Ne.create(i,"!=",{nullValue:"NULL_VALUE"});default:return K()}}(t):t.fieldFilter!==void 0?function(e){return Ne.create(cs(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Nt.create(e.compositeFilter.filters.map(n=>rm(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return K()}}(e.compositeFilter.op))}(t):K()}function lS(t){return Xb[t]}function hS(t){return Jb[t]}function fS(t){return Zb[t]}function as(t){return{fieldPath:t.canonicalString()}}function cs(t){return We.fromServerFormat(t.fieldPath)}function im(t){return t instanceof Ne?function(e){if(e.op==="=="){if(Gh(e.value))return{unaryFilter:{field:as(e.field),op:"IS_NAN"}};if(zh(e.value))return{unaryFilter:{field:as(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Gh(e.value))return{unaryFilter:{field:as(e.field),op:"IS_NOT_NAN"}};if(zh(e.value))return{unaryFilter:{field:as(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:as(e.field),op:hS(e.op),value:e.value}}}(t):t instanceof Nt?function(e){const n=e.getFilters().map(s=>im(s));return n.length===1?n[0]:{compositeFilter:{op:fS(e.op),filters:n}}}(t):K()}function dS(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function om(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pS{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&Bb(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=lr(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=lr(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Xg();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=Kg(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(X.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ne())}isEqual(e){return this.batchId===e.batchId&&Rs(this.mutations,e.mutations,(n,s)=>ef(n,s))&&Rs(this.baseMutations,e.baseMutations,(n,s)=>ef(n,s))}}class ju{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){me(e.mutations.length===s.length);let r=Gb;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new ju(e,n,s,r)}}/**
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
 */class gS{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Kn{constructor(e,n,s,r,i=X.min(),o=X.min(),a=et.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Kn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Kn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Kn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{constructor(e){this.oe=e}}function yS(t){const e=cS({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?bc(e,e.limit,"L"):e}/**
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
 */class vS{constructor(){this.Ze=new wS}addToCollectionParentIndex(e,n){return this.Ze.add(n),b.resolve()}getCollectionParents(e,n){return b.resolve(this.Ze.getEntries(n))}addFieldIndex(e,n){return b.resolve()}deleteFieldIndex(e,n){return b.resolve()}getDocumentsMatchingTarget(e,n){return b.resolve(null)}getIndexType(e,n){return b.resolve(0)}getFieldIndexes(e,n){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,n){return b.resolve(Tn.min())}getMinOffsetFromCollectionGroup(e,n){return b.resolve(Tn.min())}updateCollectionGroup(e,n,s){return b.resolve()}updateIndexEntries(e,n){return b.resolve()}}class wS{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new Pe(we.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Pe(we.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Vn(){return new Ps(0)}static Sn(){return new Ps(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _S{constructor(){this.changes=new Hs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ze.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?b.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ES{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&lr(s.mutation,r,St.empty(),Oe.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,ne()).next(()=>s))}getLocalViewOfDocuments(e,n,s=ne()){const r=$n();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=tr();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=$n();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,ne()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=tn();const o=hr(),a=hr();return n.forEach((c,u)=>{const l=s.get(u.key);r.has(u.key)&&(l===void 0||l.mutation instanceof Zn)?i=i.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),lr(l.mutation,u,l.mutation.getFieldMask(),Oe.now())):o.set(u.key,St.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new ES(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=hr();let r=new Me((o,a)=>o-a),i=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=s.get(c)||St.empty();l=a.applyToLocalView(u,l),s.set(c,l);const h=(r.get(a.batchId)||ne()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=Xg();l.forEach(f=>{if(!i.has(f)){const g=Kg(n.get(f),s.get(f));g!==null&&h.set(f,g),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return b.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return V.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Lg(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):b.resolve($n());let a=-1,c=i;return o.next(u=>b.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?b.resolve():this.remoteDocumentCache.getEntry(e,l).next(f=>{c=c.insert(l,f)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,ne())).next(l=>({batchId:a,changes:Yg(l)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new V(n)).next(s=>{let r=tr();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=tr();return this.indexManager.getCollectionParents(e,r).next(o=>b.forEach(o,a=>{const c=function(u,l){return new qs(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(u=>{u.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r))).next(i=>{r.forEach((a,c)=>{const u=c.getKey();i.get(u)===null&&(i=i.insert(u,ze.newInvalidDocument(u)))});let o=tr();return i.forEach((a,c)=>{const u=r.get(a);u!==void 0&&lr(u.mutation,c,St.empty(),Oe.now()),Qo(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TS{constructor(e){this.Tt=e,this.es=new Map,this.ns=new Map}getBundleMetadata(e,n){return b.resolve(this.es.get(n))}saveBundleMetadata(e,n){var s;return this.es.set(n.id,{id:(s=n).id,version:s.version,createTime:Ft(s.createTime)}),b.resolve()}getNamedQuery(e,n){return b.resolve(this.ns.get(n))}saveNamedQuery(e,n){return this.ns.set(n.name,function(s){return{name:s.name,query:yS(s.bundledQuery),readTime:Ft(s.readTime)}}(n)),b.resolve()}}/**
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
 */class bS{constructor(){this.overlays=new Me(V.comparator),this.ss=new Map}getOverlay(e,n){return b.resolve(this.overlays.get(n))}getOverlays(e,n){const s=$n();return b.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.ce(e,n,i)}),b.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.ss.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.ss.delete(s)),b.resolve()}getOverlaysForCollection(e,n,s){const r=$n(),i=n.length+1,o=new V(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return b.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Me((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let l=i.get(u.largestBatchId);l===null&&(l=$n(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=$n(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=r)););return b.resolve(a)}ce(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.ss.get(r.largestBatchId).delete(s.key);this.ss.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new gS(n,s));let i=this.ss.get(n);i===void 0&&(i=ne(),this.ss.set(n,i)),this.ss.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(){this.rs=new Pe(Le.os),this.us=new Pe(Le.cs)}isEmpty(){return this.rs.isEmpty()}addReference(e,n){const s=new Le(e,n);this.rs=this.rs.add(s),this.us=this.us.add(s)}hs(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.ls(new Le(e,n))}fs(e,n){e.forEach(s=>this.removeReference(s,n))}ds(e){const n=new V(new we([])),s=new Le(n,e),r=new Le(n,e+1),i=[];return this.us.forEachInRange([s,r],o=>{this.ls(o),i.push(o.key)}),i}_s(){this.rs.forEach(e=>this.ls(e))}ls(e){this.rs=this.rs.delete(e),this.us=this.us.delete(e)}ws(e){const n=new V(new we([])),s=new Le(n,e),r=new Le(n,e+1);let i=ne();return this.us.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Le(e,0),s=this.rs.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Le{constructor(e,n){this.key=e,this.gs=n}static os(e,n){return V.comparator(e.key,n.key)||ue(e.gs,n.gs)}static cs(e,n){return ue(e.gs,n.gs)||V.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SS{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ys=1,this.ps=new Pe(Le.os)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ys;this.ys++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new pS(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.ps=this.ps.add(new Le(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,n){return b.resolve(this.Is(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.Ts(s),i=r<0?0:r;return b.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.ys-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Le(n,0),r=new Le(n,Number.POSITIVE_INFINITY),i=[];return this.ps.forEachInRange([s,r],o=>{const a=this.Is(o.gs);i.push(a)}),b.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Pe(ue);return n.forEach(r=>{const i=new Le(r,0),o=new Le(r,Number.POSITIVE_INFINITY);this.ps.forEachInRange([i,o],a=>{s=s.add(a.gs)})}),b.resolve(this.Es(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;V.isDocumentKey(i)||(i=i.child(""));const o=new Le(new V(i),0);let a=new Pe(ue);return this.ps.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c.gs)),!0)},o),b.resolve(this.Es(a))}Es(e){const n=[];return e.forEach(s=>{const r=this.Is(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){me(this.As(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.ps;return b.forEach(n.mutations,r=>{const i=new Le(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.ps=s})}Pn(e){}containsKey(e,n){const s=new Le(n,0),r=this.ps.firstAfterOrEqual(s);return b.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}As(e,n){return this.Ts(e)}Ts(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Is(e){const n=this.Ts(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CS{constructor(e){this.Rs=e,this.docs=new Me(V.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Rs(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return b.resolve(s?s.document.mutableCopy():ze.newInvalidDocument(n))}getEntries(e,n){let s=tn();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():ze.newInvalidDocument(r))}),b.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=tn();const o=n.path,a=new V(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||gb(pb(l),s)<=0||(r.has(l.key)||Qo(n,l))&&(i=i.insert(l.key,l.mutableCopy()))}return b.resolve(i)}getAllFromCollectionGroup(e,n,s,r){K()}Ps(e,n){return b.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new AS(this)}getSize(e){return b.resolve(this.size)}}class AS extends _S{constructor(e){super(),this.Xn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Xn.addEntry(e,r)):this.Xn.removeEntry(s)}),b.waitFor(n)}getFromCache(e,n){return this.Xn.getEntry(e,n)}getAllFromCache(e,n){return this.Xn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kS{constructor(e){this.persistence=e,this.vs=new Hs(n=>Uu(n),Fu),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.bs=0,this.Vs=new qu,this.targetCount=0,this.Ss=Ps.Vn()}forEachTarget(e,n){return this.vs.forEach((s,r)=>n(r)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.Ss.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),b.resolve()}xn(e){this.vs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ss=new Ps(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.xn(n),this.targetCount+=1,b.resolve()}updateTargetData(e,n){return this.xn(n),b.resolve()}removeTargetData(e,n){return this.vs.delete(n.target),this.Vs.ds(n.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.vs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.vs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),b.waitFor(i).next(()=>r)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,n){const s=this.vs.get(n)||null;return b.resolve(s)}addMatchingKeys(e,n,s){return this.Vs.hs(n,s),b.resolve()}removeMatchingKeys(e,n,s){this.Vs.fs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),b.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Vs.ds(n),b.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Vs.ws(n);return b.resolve(s)}containsKey(e,n){return b.resolve(this.Vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS{constructor(e,n){this.Ds={},this.overlays={},this.Cs=new Mu(0),this.xs=!1,this.xs=!0,this.referenceDelegate=e(this),this.Ns=new kS(this),this.indexManager=new vS,this.remoteDocumentCache=function(s){return new CS(s)}(s=>this.referenceDelegate.ks(s)),this.Tt=new mS(n),this.$s=new TS(this.Tt)}start(){return Promise.resolve()}shutdown(){return this.xs=!1,Promise.resolve()}get started(){return this.xs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new bS,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ds[e.toKey()];return s||(s=new SS(n,this.referenceDelegate),this.Ds[e.toKey()]=s),s}getTargetCache(){return this.Ns}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$s}runTransaction(e,n,s){F("MemoryPersistence","Starting transaction:",e);const r=new NS(this.Cs.next());return this.referenceDelegate.Ms(),s(r).next(i=>this.referenceDelegate.Os(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Fs(e,n){return b.or(Object.values(this.Ds).map(s=>()=>s.containsKey(e,n)))}}class NS extends yb{constructor(e){super(),this.currentSequenceNumber=e}}class Hu{constructor(e){this.persistence=e,this.Bs=new qu,this.Ls=null}static qs(e){return new Hu(e)}get Us(){if(this.Ls)return this.Ls;throw K()}addReference(e,n,s){return this.Bs.addReference(s,n),this.Us.delete(s.toString()),b.resolve()}removeReference(e,n,s){return this.Bs.removeReference(s,n),this.Us.add(s.toString()),b.resolve()}markPotentiallyOrphaned(e,n){return this.Us.add(n.toString()),b.resolve()}removeTarget(e,n){this.Bs.ds(n.targetId).forEach(r=>this.Us.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Us.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Ms(){this.Ls=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.Us,s=>{const r=V.fromPath(s);return this.Ks(e,r).next(i=>{i||n.removeEntry(r,X.min())})}).next(()=>(this.Ls=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ks(e,n).next(s=>{s?this.Us.delete(n.toString()):this.Us.add(n.toString())})}ks(e){return 0}Ks(e,n){return b.or([()=>b.resolve(this.Bs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Fs(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Ci=s,this.xi=r}static Ni(e,n){let s=ne(),r=ne();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Ku(e,n.fromCache,s,r)}}/**
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
 */class DS{constructor(){this.ki=!1}initialize(e,n){this.$i=e,this.indexManager=n,this.ki=!0}getDocumentsMatchingQuery(e,n,s,r){return this.Mi(e,n).next(i=>i||this.Oi(e,n,r,s)).next(i=>i||this.Fi(e,n))}Mi(e,n){if(Jh(n))return b.resolve(null);let s=en(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=bc(n,null,"F"),s=en(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=ne(...i);return this.$i.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const u=this.Bi(n,a);return this.Li(n,u,o,c.readTime)?this.Mi(e,bc(n,null,"F")):this.qi(e,u,n,c)}))})))}Oi(e,n,s,r){return Jh(n)||r.isEqual(X.min())?this.Fi(e,n):this.$i.getDocuments(e,s).next(i=>{const o=this.Bi(n,i);return this.Li(n,o,s,r)?this.Fi(e,n):(jh()<=ce.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Sc(n)),this.qi(e,o,n,db(r,-1)))})}Bi(e,n){let s=new Pe(Fg(e));return n.forEach((r,i)=>{Qo(e,i)&&(s=s.add(i))}),s}Li(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Fi(e,n){return jh()<=ce.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",Sc(n)),this.$i.getDocumentsMatchingQuery(e,n,Tn.min())}qi(e,n,s,r){return this.$i.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OS{constructor(e,n,s,r){this.persistence=e,this.Ui=n,this.Tt=r,this.Ki=new Me(ue),this.Gi=new Hs(i=>Uu(i),Fu),this.Qi=new Map,this.ji=e.getRemoteDocumentCache(),this.Ns=e.getTargetCache(),this.$s=e.getBundleCache(),this.zi(s)}zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new IS(this.ji,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ji.setIndexManager(this.indexManager),this.Ui.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ki))}}function PS(t,e,n,s){return new OS(t,e,n,s)}async function am(t,e){const n=J(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.zi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=ne();for(const u of r){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(s,c).next(u=>({Wi:u,removedBatchIds:o,addedBatchIds:a}))})})}function xS(t,e){const n=J(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.ji.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let f=b.resolve();return h.forEach(g=>{f=f.next(()=>u.getEntry(a,g)).next(v=>{const y=c.docVersions.get(g);me(y!==null),v.version.compareTo(y)<0&&(l.applyToRemoteDocument(v,c),v.isValidDocument()&&(v.setReadTime(c.commitVersion),u.addEntry(v)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=ne();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function cm(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ns.getLastRemoteSnapshotVersion(n))}function MS(t,e){const n=J(t),s=e.snapshotVersion;let r=n.Ki;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ji.newChangeBuffer({trackRemovals:!0});r=n.Ki;const a=[];e.targetChanges.forEach((l,h)=>{const f=r.get(h);if(!f)return;a.push(n.Ns.removeMatchingKeys(i,l.removedDocuments,h).next(()=>n.Ns.addMatchingKeys(i,l.addedDocuments,h)));let g=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?g=g.withResumeToken(et.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):l.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(l.resumeToken,s)),r=r.insert(h,g),function(v,y,C){return v.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:C.addedDocuments.size+C.modifiedDocuments.size+C.removedDocuments.size>0}(f,g,l)&&a.push(n.Ns.updateTargetData(i,g))});let c=tn(),u=ne();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(LS(i,o,e.documentUpdates).next(l=>{c=l.Hi,u=l.Ji})),!s.isEqual(X.min())){const l=n.Ns.getLastRemoteSnapshotVersion(i).next(h=>n.Ns.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(l)}return b.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.Ki=r,i))}function LS(t,e,n){let s=ne(),r=ne();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=tn();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(X.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):F("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Hi:o,Ji:r}})}function US(t,e){const n=J(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function FS(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Ns.getTargetData(s,e).next(i=>i?(r=i,b.resolve(r)):n.Ns.allocateTargetId(s).next(o=>(r=new Kn(e,o,0,s.currentSequenceNumber),n.Ns.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ki.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ki=n.Ki.insert(s.targetId,s),n.Gi.set(e,s.targetId)),s})}async function Rc(t,e,n){const s=J(t),r=s.Ki.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!ei(o))throw o;F("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ki=s.Ki.remove(e),s.Gi.delete(r.target)}function cf(t,e,n){const s=J(t);let r=X.min(),i=ne();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=J(a),h=l.Gi.get(u);return h!==void 0?b.resolve(l.Ki.get(h)):l.Ns.getTargetData(c,u)}(s,o,en(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Ns.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Ui.getDocumentsMatchingQuery(o,e,n?r:X.min(),n?i:ne())).next(a=>($S(s,xb(e),a),{documents:a,Yi:i})))}function $S(t,e,n){let s=t.Qi.get(e)||X.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Qi.set(e,s)}class uf{constructor(){this.activeTargetIds=Jg()}sr(e){this.activeTargetIds=this.activeTargetIds.add(e)}ir(e){this.activeTargetIds=this.activeTargetIds.delete(e)}nr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class VS{constructor(){this.Ur=new uf,this.Kr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Ur.sr(e),this.Kr[e]||"not-current"}updateQueryState(e,n,s){this.Kr[e]=n}removeLocalQueryTarget(e){this.Ur.ir(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.Kr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new uf,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class BS{Gr(e){}shutdown(){}}/**
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
 */class lf{constructor(){this.Qr=()=>this.jr(),this.zr=()=>this.Wr(),this.Hr=[],this.Jr()}Gr(e){this.Hr.push(e)}shutdown(){window.removeEventListener("online",this.Qr),window.removeEventListener("offline",this.zr)}Jr(){window.addEventListener("online",this.Qr),window.addEventListener("offline",this.zr)}jr(){F("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Hr)e(0)}Wr(){F("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Hr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wi=null;function xa(){return wi===null?wi=268435456+Math.round(2147483648*Math.random()):wi++,"0x"+wi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qS{constructor(e){this.Yr=e.Yr,this.Zr=e.Zr}Xr(e){this.eo=e}no(e){this.so=e}onMessage(e){this.io=e}close(){this.Zr()}send(e){this.Yr(e)}ro(){this.eo()}oo(e){this.so(e)}uo(e){this.io(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const He="WebChannelConnection";class HS extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.co=n+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get ho(){return!1}lo(e,n,s,r,i){const o=xa(),a=this.fo(e,n);F("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const c={};return this._o(c,r,i),this.wo(e,a,c,s).then(u=>(F("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw vc("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",s),u})}mo(e,n,s,r,i,o){return this.lo(e,n,s,r,i)}_o(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+js,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}fo(e,n){const s=jS[e];return`${this.co}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}wo(e,n,s,r){const i=xa();return new Promise((o,a)=>{const c=new sb;c.setWithCredentials(!0),c.listenOnce(eb.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Oa.NO_ERROR:const l=c.getResponseJson();F(He,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(l)),o(l);break;case Oa.TIMEOUT:F(He,`RPC '${e}' ${i} timed out`),a(new M(E.DEADLINE_EXCEEDED,"Request time out"));break;case Oa.HTTP_ERROR:const h=c.getStatus();if(F(He,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const g=f==null?void 0:f.error;if(g&&g.status&&g.message){const v=function(y){const C=y.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(C)>=0?C:E.UNKNOWN}(g.status);a(new M(v,g.message))}else a(new M(E.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new M(E.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{F(He,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(r);F(He,`RPC '${e}' ${i} sending request:`,r),c.send(n,"POST",u,s,15)})}yo(e,n,s){const r=xa(),i=[this.co,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=JT(),a=ZT(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new nb({})),this._o(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const u=i.join("");F(He,`Creating RPC '${e}' stream ${r}: ${u}`,c);const l=o.createWebChannel(u,c);let h=!1,f=!1;const g=new qS({Yr:y=>{f?F(He,`Not sending because RPC '${e}' stream ${r} is closed:`,y):(h||(F(He,`Opening RPC '${e}' stream ${r} transport.`),l.open(),h=!0),F(He,`RPC '${e}' stream ${r} sending:`,y),l.send(y))},Zr:()=>l.close()}),v=(y,C,k)=>{y.listen(C,x=>{try{k(x)}catch(O){setTimeout(()=>{throw O},0)}})};return v(l,mi.EventType.OPEN,()=>{f||F(He,`RPC '${e}' stream ${r} transport opened.`)}),v(l,mi.EventType.CLOSE,()=>{f||(f=!0,F(He,`RPC '${e}' stream ${r} transport closed`),g.oo())}),v(l,mi.EventType.ERROR,y=>{f||(f=!0,vc(He,`RPC '${e}' stream ${r} transport errored:`,y),g.oo(new M(E.UNAVAILABLE,"The operation could not be completed")))}),v(l,mi.EventType.MESSAGE,y=>{var C;if(!f){const k=y.data[0];me(!!k);const x=k,O=x.error||((C=x[0])===null||C===void 0?void 0:C.error);if(O){F(He,`RPC '${e}' stream ${r} received error:`,O);const Q=O.status;let re=function(De){const Y=Ae[De];if(Y!==void 0)return Wg(Y)}(Q),Ie=O.message;re===void 0&&(re=E.INTERNAL,Ie="Unknown error status: "+Q+" with message "+O.message),f=!0,g.oo(new M(re,Ie)),l.close()}else F(He,`RPC '${e}' stream ${r} received:`,k),g.uo(k)}}),v(a,tb.STAT_EVENT,y=>{y.stat===Vh.PROXY?F(He,`RPC '${e}' stream ${r} detected buffering proxy`):y.stat===Vh.NOPROXY&&F(He,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{g.ro()},0),g}}function Ma(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ea(t){return new eS(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Ys=e,this.timerId=n,this.po=s,this.Io=r,this.To=i,this.Eo=0,this.Ao=null,this.Ro=Date.now(),this.reset()}reset(){this.Eo=0}Po(){this.Eo=this.To}vo(e){this.cancel();const n=Math.floor(this.Eo+this.bo()),s=Math.max(0,Date.now()-this.Ro),r=Math.max(0,n-s);r>0&&F("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Eo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Ao=this.Ys.enqueueAfterDelay(this.timerId,r,()=>(this.Ro=Date.now(),e())),this.Eo*=this.Io,this.Eo<this.po&&(this.Eo=this.po),this.Eo>this.To&&(this.Eo=this.To)}Vo(){this.Ao!==null&&(this.Ao.skipDelay(),this.Ao=null)}cancel(){this.Ao!==null&&(this.Ao.cancel(),this.Ao=null)}bo(){return(Math.random()-.5)*this.Eo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(e,n,s,r,i,o,a,c){this.Ys=e,this.So=s,this.Do=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Co=0,this.xo=null,this.No=null,this.stream=null,this.ko=new um(e,n)}$o(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.$o()&&await this.close(0)}Fo(){this.state=0,this.ko.reset()}Bo(){this.Mo()&&this.xo===null&&(this.xo=this.Ys.enqueueAfterDelay(this.So,6e4,()=>this.Lo()))}qo(e){this.Uo(),this.stream.send(e)}async Lo(){if(this.Mo())return this.close(0)}Uo(){this.xo&&(this.xo.cancel(),this.xo=null)}Ko(){this.No&&(this.No.cancel(),this.No=null)}async close(e,n){this.Uo(),this.Ko(),this.ko.cancel(),this.Co++,e!==4?this.ko.reset():n&&n.code===E.RESOURCE_EXHAUSTED?(Zt(n.toString()),Zt("Using maximum backoff delay to prevent overloading the backend."),this.ko.Po()):n&&n.code===E.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Go(),this.stream.close(),this.stream=null),this.state=e,await this.listener.no(n)}Go(){}auth(){this.state=1;const e=this.Qo(this.Co),n=this.Co;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Co===n&&this.jo(s,r)},s=>{e(()=>{const r=new M(E.UNKNOWN,"Fetching auth token failed: "+s.message);return this.zo(r)})})}jo(e,n){const s=this.Qo(this.Co);this.stream=this.Wo(e,n),this.stream.Xr(()=>{s(()=>(this.state=2,this.No=this.Ys.enqueueAfterDelay(this.Do,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.no(r=>{s(()=>this.zo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Oo(){this.state=5,this.ko.vo(async()=>{this.state=0,this.start()})}zo(e){return F("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Qo(e){return n=>{this.Ys.enqueueAndForget(()=>this.Co===e?n():(F("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class KS extends lm{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.Tt=i}Wo(e,n){return this.connection.yo("Listen",e,n)}onMessage(e){this.ko.reset();const n=sS(this.Tt,e),s=function(r){if(!("targetChange"in r))return X.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?X.min():i.readTime?Ft(i.readTime):X.min()}(e);return this.listener.Ho(n,s)}Jo(e){const n={};n.database=kc(this.Tt),n.addTarget=function(r,i){let o;const a=i.target;return o=Ic(a)?{documents:oS(r,a)}:{query:aS(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=tm(r,i.resumeToken):i.snapshotVersion.compareTo(X.min())>0&&(o.readTime=ro(r,i.snapshotVersion.toTimestamp())),o}(this.Tt,e);const s=uS(this.Tt,e);s&&(n.labels=s),this.qo(n)}Yo(e){const n={};n.database=kc(this.Tt),n.removeTarget=e,this.qo(n)}}class zS extends lm{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.Tt=i,this.Zo=!1}get Xo(){return this.Zo}start(){this.Zo=!1,this.lastStreamToken=void 0,super.start()}Go(){this.Zo&&this.tu([])}Wo(e,n){return this.connection.yo("Write",e,n)}onMessage(e){if(me(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Zo){this.ko.reset();const n=iS(e.writeResults,e.commitTime),s=Ft(e.commitTime);return this.listener.eu(s,n)}return me(!e.writeResults||e.writeResults.length===0),this.Zo=!0,this.listener.nu()}su(){const e={};e.database=kc(this.Tt),this.qo(e)}tu(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>rS(this.Tt,s))};this.qo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GS extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.Tt=r,this.iu=!1}ru(){if(this.iu)throw new M(E.FAILED_PRECONDITION,"The client has already been terminated.")}lo(e,n,s){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.lo(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new M(E.UNKNOWN,r.toString())})}mo(e,n,s,r){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.mo(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new M(E.UNKNOWN,i.toString())})}terminate(){this.iu=!0}}class WS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ou=0,this.uu=null,this.cu=!0}au(){this.ou===0&&(this.hu("Unknown"),this.uu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.uu=null,this.lu("Backend didn't respond within 10 seconds."),this.hu("Offline"),Promise.resolve())))}fu(e){this.state==="Online"?this.hu("Unknown"):(this.ou++,this.ou>=1&&(this.du(),this.lu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.hu("Offline")))}set(e){this.du(),this.ou=0,e==="Online"&&(this.cu=!1),this.hu(e)}hu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}lu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.cu?(Zt(n),this.cu=!1):F("OnlineStateTracker",n)}du(){this.uu!==null&&(this.uu.cancel(),this.uu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QS{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this._u=[],this.wu=new Map,this.mu=new Set,this.gu=[],this.yu=i,this.yu.Gr(o=>{s.enqueueAndForget(async()=>{es(this)&&(F("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=J(a);c.mu.add(4),await ni(c),c.pu.set("Unknown"),c.mu.delete(4),await ta(c)}(this))})}),this.pu=new WS(s,r)}}async function ta(t){if(es(t))for(const e of t.gu)await e(!0)}async function ni(t){for(const e of t.gu)await e(!1)}function hm(t,e){const n=J(t);n.wu.has(e.targetId)||(n.wu.set(e.targetId,e),Wu(n)?Gu(n):Ks(n).Mo()&&zu(n,e))}function fm(t,e){const n=J(t),s=Ks(n);n.wu.delete(e),s.Mo()&&dm(n,e),n.wu.size===0&&(s.Mo()?s.Bo():es(n)&&n.pu.set("Unknown"))}function zu(t,e){t.Iu.Ot(e.targetId),Ks(t).Jo(e)}function dm(t,e){t.Iu.Ot(e),Ks(t).Yo(e)}function Gu(t){t.Iu=new Yb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ie:e=>t.wu.get(e)||null}),Ks(t).start(),t.pu.au()}function Wu(t){return es(t)&&!Ks(t).$o()&&t.wu.size>0}function es(t){return J(t).mu.size===0}function pm(t){t.Iu=void 0}async function YS(t){t.wu.forEach((e,n)=>{zu(t,e)})}async function XS(t,e){pm(t),Wu(t)?(t.pu.fu(e),Gu(t)):t.pu.set("Unknown")}async function JS(t,e,n){if(t.pu.set("Online"),e instanceof em&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.wu.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.wu.delete(o),s.Iu.removeTarget(o))}(t,e)}catch(s){F("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await io(t,s)}else if(e instanceof Oi?t.Iu.Qt(e):e instanceof Zg?t.Iu.Zt(e):t.Iu.Wt(e),!n.isEqual(X.min()))try{const s=await cm(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.Iu.ee(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=r.wu.get(c);u&&r.wu.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.wu.get(a);if(!c)return;r.wu.set(a,c.withResumeToken(et.EMPTY_BYTE_STRING,c.snapshotVersion)),dm(r,a);const u=new Kn(c.target,a,1,c.sequenceNumber);zu(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){F("RemoteStore","Failed to raise snapshot:",s),await io(t,s)}}async function io(t,e,n){if(!ei(e))throw e;t.mu.add(1),await ni(t),t.pu.set("Offline"),n||(n=()=>cm(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{F("RemoteStore","Retrying IndexedDB access"),await n(),t.mu.delete(1),await ta(t)})}function gm(t,e){return e().catch(n=>io(t,n,e))}async function na(t){const e=J(t),n=Sn(e);let s=e._u.length>0?e._u[e._u.length-1].batchId:-1;for(;ZS(e);)try{const r=await US(e.localStore,s);if(r===null){e._u.length===0&&n.Bo();break}s=r.batchId,eC(e,r)}catch(r){await io(e,r)}mm(e)&&ym(e)}function ZS(t){return es(t)&&t._u.length<10}function eC(t,e){t._u.push(e);const n=Sn(t);n.Mo()&&n.Xo&&n.tu(e.mutations)}function mm(t){return es(t)&&!Sn(t).$o()&&t._u.length>0}function ym(t){Sn(t).start()}async function tC(t){Sn(t).su()}async function nC(t){const e=Sn(t);for(const n of t._u)e.tu(n.mutations)}async function sC(t,e,n){const s=t._u.shift(),r=ju.from(s,e,n);await gm(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await na(t)}async function rC(t,e){e&&Sn(t).Xo&&await async function(n,s){if(r=s.code,Kb(r)&&r!==E.ABORTED){const i=n._u.shift();Sn(n).Fo(),await gm(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await na(n)}var r}(t,e),mm(t)&&ym(t)}async function hf(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),F("RemoteStore","RemoteStore received new credentials");const s=es(n);n.mu.add(3),await ni(n),s&&n.pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.mu.delete(3),await ta(n)}async function iC(t,e){const n=J(t);e?(n.mu.delete(2),await ta(n)):e||(n.mu.add(2),await ni(n),n.pu.set("Unknown"))}function Ks(t){return t.Tu||(t.Tu=function(e,n,s){const r=J(e);return r.ru(),new KS(n,r.connection,r.authCredentials,r.appCheckCredentials,r.Tt,s)}(t.datastore,t.asyncQueue,{Xr:YS.bind(null,t),no:XS.bind(null,t),Ho:JS.bind(null,t)}),t.gu.push(async e=>{e?(t.Tu.Fo(),Wu(t)?Gu(t):t.pu.set("Unknown")):(await t.Tu.stop(),pm(t))})),t.Tu}function Sn(t){return t.Eu||(t.Eu=function(e,n,s){const r=J(e);return r.ru(),new zS(n,r.connection,r.authCredentials,r.appCheckCredentials,r.Tt,s)}(t.datastore,t.asyncQueue,{Xr:tC.bind(null,t),no:rC.bind(null,t),nu:nC.bind(null,t),eu:sC.bind(null,t)}),t.gu.push(async e=>{e?(t.Eu.Fo(),await na(t)):(await t.Eu.stop(),t._u.length>0&&(F("RemoteStore",`Stopping write stream with ${t._u.length} pending writes`),t._u=[]))})),t.Eu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Hn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Qu(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Yu(t,e){if(Zt("AsyncQueue",`${e}: ${t}`),ei(t))return new M(E.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e){this.comparator=e?(n,s)=>e(n,s)||V.comparator(n.key,s.key):(n,s)=>V.comparator(n.key,s.key),this.keyedMap=tr(),this.sortedSet=new Me(this.comparator)}static emptySet(e){return new ws(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ws)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new ws;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(){this.Au=new Me(V.comparator)}track(e){const n=e.doc.key,s=this.Au.get(n);s?e.type!==0&&s.type===3?this.Au=this.Au.insert(n,e):e.type===3&&s.type!==1?this.Au=this.Au.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Au=this.Au.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Au=this.Au.remove(n):e.type===1&&s.type===2?this.Au=this.Au.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):K():this.Au=this.Au.insert(n,e)}Ru(){const e=[];return this.Au.inorderTraversal((n,s)=>{e.push(s)}),e}}class xs{constructor(e,n,s,r,i,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new xs(e,n,ws.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Wo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC{constructor(){this.Pu=void 0,this.listeners=[]}}class aC{constructor(){this.queries=new Hs(e=>Ug(e),Wo),this.onlineState="Unknown",this.vu=new Set}}async function cC(t,e){const n=J(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new oC),r)try{i.Pu=await n.onListen(s)}catch(o){const a=Yu(o,`Initialization of query '${Sc(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.bu(n.onlineState),i.Pu&&e.Vu(i.Pu)&&Xu(n)}async function uC(t,e){const n=J(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function lC(t,e){const n=J(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Vu(r)&&(s=!0);o.Pu=r}}s&&Xu(n)}function hC(t,e,n){const s=J(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Xu(t){t.vu.forEach(e=>{e.next()})}class fC{constructor(e,n,s){this.query=e,this.Su=n,this.Du=!1,this.Cu=null,this.onlineState="Unknown",this.options=s||{}}Vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new xs(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Du?this.xu(e)&&(this.Su.next(e),n=!0):this.Nu(e,this.onlineState)&&(this.ku(e),n=!0),this.Cu=e,n}onError(e){this.Su.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Cu&&!this.Du&&this.Nu(this.Cu,e)&&(this.ku(this.Cu),n=!0),n}Nu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.$u||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}xu(e){if(e.docChanges.length>0)return!0;const n=this.Cu&&this.Cu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ku(e){e=xs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Du=!0,this.Su.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(e){this.key=e}}class wm{constructor(e){this.key=e}}class dC{constructor(e,n){this.query=e,this.Ku=n,this.Gu=null,this.hasCachedResults=!1,this.current=!1,this.Qu=ne(),this.mutatedKeys=ne(),this.ju=Fg(e),this.zu=new ws(this.ju)}get Wu(){return this.Ku}Hu(e,n){const s=n?n.Ju:new ff,r=n?n.zu:this.zu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((l,h)=>{const f=r.get(l),g=Qo(this.query,h)?h:null,v=!!f&&this.mutatedKeys.has(f.key),y=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let C=!1;f&&g?f.data.isEqual(g.data)?v!==y&&(s.track({type:3,doc:g}),C=!0):this.Yu(f,g)||(s.track({type:2,doc:g}),C=!0,(c&&this.ju(g,c)>0||u&&this.ju(g,u)<0)&&(a=!0)):!f&&g?(s.track({type:0,doc:g}),C=!0):f&&!g&&(s.track({type:1,doc:f}),C=!0,(c||u)&&(a=!0)),C&&(g?(o=o.add(g),i=y?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),s.track({type:1,doc:l})}return{zu:o,Ju:s,Li:a,mutatedKeys:i}}Yu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.zu;this.zu=e.zu,this.mutatedKeys=e.mutatedKeys;const i=e.Ju.Ru();i.sort((u,l)=>function(h,f){const g=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return g(h)-g(f)}(u.type,l.type)||this.ju(u.doc,l.doc)),this.Zu(s);const o=n?this.Xu():[],a=this.Qu.size===0&&this.current?1:0,c=a!==this.Gu;return this.Gu=a,i.length!==0||c?{snapshot:new xs(this.query,e.zu,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),tc:o}:{tc:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({zu:this.zu,Ju:new ff,mutatedKeys:this.mutatedKeys,Li:!1},!1)):{tc:[]}}ec(e){return!this.Ku.has(e)&&!!this.zu.has(e)&&!this.zu.get(e).hasLocalMutations}Zu(e){e&&(e.addedDocuments.forEach(n=>this.Ku=this.Ku.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ku=this.Ku.delete(n)),this.current=e.current)}Xu(){if(!this.current)return[];const e=this.Qu;this.Qu=ne(),this.zu.forEach(s=>{this.ec(s.key)&&(this.Qu=this.Qu.add(s.key))});const n=[];return e.forEach(s=>{this.Qu.has(s)||n.push(new wm(s))}),this.Qu.forEach(s=>{e.has(s)||n.push(new vm(s))}),n}nc(e){this.Ku=e.Yi,this.Qu=ne();const n=this.Hu(e.documents);return this.applyChanges(n,!0)}sc(){return xs.fromInitialDocuments(this.query,this.zu,this.mutatedKeys,this.Gu===0,this.hasCachedResults)}}class pC{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class gC{constructor(e){this.key=e,this.ic=!1}}class mC{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.rc={},this.oc=new Hs(a=>Ug(a),Wo),this.uc=new Map,this.cc=new Set,this.ac=new Me(V.comparator),this.hc=new Map,this.lc=new qu,this.fc={},this.dc=new Map,this._c=Ps.Sn(),this.onlineState="Unknown",this.wc=void 0}get isPrimaryClient(){return this.wc===!0}}async function yC(t,e){const n=AC(t);let s,r;const i=n.oc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.sc();else{const o=await FS(n.localStore,en(e));n.isPrimaryClient&&hm(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await vC(n,e,s,a==="current",o.resumeToken)}return r}async function vC(t,e,n,s,r){t.mc=(h,f,g)=>async function(v,y,C,k){let x=y.view.Hu(C);x.Li&&(x=await cf(v.localStore,y.query,!1).then(({documents:re})=>y.view.Hu(re,x)));const O=k&&k.targetChanges.get(y.targetId),Q=y.view.applyChanges(x,v.isPrimaryClient,O);return pf(v,y.targetId,Q.tc),Q.snapshot}(t,h,f,g);const i=await cf(t.localStore,e,!0),o=new dC(e,i.Yi),a=o.Hu(i.documents),c=ti.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),u=o.applyChanges(a,t.isPrimaryClient,c);pf(t,n,u.tc);const l=new pC(e,n,o);return t.oc.set(e,l),t.uc.has(n)?t.uc.get(n).push(e):t.uc.set(n,[e]),u.snapshot}async function wC(t,e){const n=J(t),s=n.oc.get(e),r=n.uc.get(s.targetId);if(r.length>1)return n.uc.set(s.targetId,r.filter(i=>!Wo(i,e))),void n.oc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Rc(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),fm(n.remoteStore,s.targetId),Nc(n,s.targetId)}).catch(Zr)):(Nc(n,s.targetId),await Rc(n.localStore,s.targetId,!0))}async function _C(t,e,n){const s=kC(t);try{const r=await function(i,o){const a=J(i),c=Oe.now(),u=o.reduce((f,g)=>f.add(g.key),ne());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let g=tn(),v=ne();return a.ji.getEntries(f,u).next(y=>{g=y,g.forEach((C,k)=>{k.isValidDocument()||(v=v.add(C))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,g)).next(y=>{l=y;const C=[];for(const k of o){const x=jb(k,l.get(k.key).overlayedDocument);x!=null&&C.push(new Zn(k.key,x,Mg(x.value.mapValue),Qt.exists(!0)))}return a.mutationQueue.addMutationBatch(f,c,C,o)}).next(y=>{h=y;const C=y.applyToLocalDocumentSet(l,v);return a.documentOverlayCache.saveOverlays(f,y.batchId,C)})}).then(()=>({batchId:h.batchId,changes:Yg(l)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.fc[i.currentUser.toKey()];c||(c=new Me(ue)),c=c.insert(o,a),i.fc[i.currentUser.toKey()]=c}(s,r.batchId,n),await si(s,r.changes),await na(s.remoteStore)}catch(r){const i=Yu(r,"Failed to persist write");n.reject(i)}}async function _m(t,e){const n=J(t);try{const s=await MS(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.hc.get(i);o&&(me(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.ic=!0:r.modifiedDocuments.size>0?me(o.ic):r.removedDocuments.size>0&&(me(o.ic),o.ic=!1))}),await si(n,s,e)}catch(s){await Zr(s)}}function df(t,e,n){const s=J(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.oc.forEach((i,o)=>{const a=o.view.bu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=J(i);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.bu(o)&&(c=!0)}),c&&Xu(a)}(s.eventManager,e),r.length&&s.rc.Ho(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function EC(t,e,n){const s=J(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.hc.get(e),i=r&&r.key;if(i){let o=new Me(V.comparator);o=o.insert(i,ze.newNoDocument(i,X.min()));const a=ne().add(i),c=new Zo(X.min(),new Map,new Pe(ue),o,a);await _m(s,c),s.ac=s.ac.remove(i),s.hc.delete(e),Ju(s)}else await Rc(s.localStore,e,!1).then(()=>Nc(s,e,n)).catch(Zr)}async function IC(t,e){const n=J(t),s=e.batch.batchId;try{const r=await xS(n.localStore,e);Im(n,s,null),Em(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await si(n,r)}catch(r){await Zr(r)}}async function TC(t,e,n){const s=J(t);try{const r=await function(i,o){const a=J(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(me(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(s.localStore,e);Im(s,e,n),Em(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await si(s,r)}catch(r){await Zr(r)}}function Em(t,e){(t.dc.get(e)||[]).forEach(n=>{n.resolve()}),t.dc.delete(e)}function Im(t,e,n){const s=J(t);let r=s.fc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.fc[s.currentUser.toKey()]=r}}function Nc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.uc.get(e))t.oc.delete(s),n&&t.rc.gc(s,n);t.uc.delete(e),t.isPrimaryClient&&t.lc.ds(e).forEach(s=>{t.lc.containsKey(s)||Tm(t,s)})}function Tm(t,e){t.cc.delete(e.path.canonicalString());const n=t.ac.get(e);n!==null&&(fm(t.remoteStore,n),t.ac=t.ac.remove(e),t.hc.delete(n),Ju(t))}function pf(t,e,n){for(const s of n)s instanceof vm?(t.lc.addReference(s.key,e),bC(t,s)):s instanceof wm?(F("SyncEngine","Document no longer in limbo: "+s.key),t.lc.removeReference(s.key,e),t.lc.containsKey(s.key)||Tm(t,s.key)):K()}function bC(t,e){const n=e.key,s=n.path.canonicalString();t.ac.get(n)||t.cc.has(s)||(F("SyncEngine","New document in limbo: "+n),t.cc.add(s),Ju(t))}function Ju(t){for(;t.cc.size>0&&t.ac.size<t.maxConcurrentLimboResolutions;){const e=t.cc.values().next().value;t.cc.delete(e);const n=new V(we.fromString(e)),s=t._c.next();t.hc.set(s,new gC(n)),t.ac=t.ac.insert(n,s),hm(t.remoteStore,new Kn(en($u(n.path)),s,2,Mu.at))}}async function si(t,e,n){const s=J(t),r=[],i=[],o=[];s.oc.isEmpty()||(s.oc.forEach((a,c)=>{o.push(s.mc(c,e,n).then(u=>{if((u||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){r.push(u);const l=Ku.Ni(c.targetId,u);i.push(l)}}))}),await Promise.all(o),s.rc.Ho(r),await async function(a,c){const u=J(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>b.forEach(c,h=>b.forEach(h.Ci,f=>u.persistence.referenceDelegate.addReference(l,h.targetId,f)).next(()=>b.forEach(h.xi,f=>u.persistence.referenceDelegate.removeReference(l,h.targetId,f)))))}catch(l){if(!ei(l))throw l;F("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const f=u.Ki.get(h),g=f.snapshotVersion,v=f.withLastLimboFreeSnapshotVersion(g);u.Ki=u.Ki.insert(h,v)}}}(s.localStore,i))}async function SC(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){F("SyncEngine","User change. New user:",e.toKey());const s=await am(n.localStore,e);n.currentUser=e,function(r,i){r.dc.forEach(o=>{o.forEach(a=>{a.reject(new M(E.CANCELLED,i))})}),r.dc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await si(n,s.Wi)}}function CC(t,e){const n=J(t),s=n.hc.get(e);if(s&&s.ic)return ne().add(s.key);{let r=ne();const i=n.uc.get(e);if(!i)return r;for(const o of i){const a=n.oc.get(o);r=r.unionWith(a.view.Wu)}return r}}function AC(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=_m.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=CC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=EC.bind(null,e),e.rc.Ho=lC.bind(null,e.eventManager),e.rc.gc=hC.bind(null,e.eventManager),e}function kC(t){const e=J(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=IC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=TC.bind(null,e),e}class RC{constructor(){this.synchronizeTabs=!1}async initialize(e){this.Tt=ea(e.databaseInfo.databaseId),this.sharedClientState=this.Ic(e),this.persistence=this.Tc(e),await this.persistence.start(),this.localStore=this.Ec(e),this.gcScheduler=this.Ac(e,this.localStore),this.indexBackfillerScheduler=this.Rc(e,this.localStore)}Ac(e,n){return null}Rc(e,n){return null}Ec(e){return PS(this.persistence,new DS,e.initialUser,this.Tt)}Tc(e){return new RS(Hu.qs,this.Tt)}Ic(e){return new VS}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class NC{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>df(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=SC.bind(null,this.syncEngine),await iC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new aC}createDatastore(e){const n=ea(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new HS(r));var r;return function(i,o,a,c){return new GS(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>df(this.syncEngine,a,0),o=lf.C()?new lf:new BS,new QS(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,u){const l=new mC(s,r,i,o,a,c);return u&&(l.wc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=J(e);F("RemoteStore","RemoteStore shutting down."),n.mu.add(5),await ni(n),n.yu.shutdown(),n.pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class DC{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.vc(this.observer.next,e)}error(e){this.observer.error?this.vc(this.observer.error,e):Zt("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OC{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Ke.UNAUTHENTICATED,this.clientId=Sg.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{F("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(F("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new M(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Hn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Yu(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function PC(t,e){t.asyncQueue.verifyOperationInProgress(),F("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await am(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function xC(t,e){t.asyncQueue.verifyOperationInProgress();const n=await MC(t);F("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>hf(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>hf(e.remoteStore,i)),t.onlineComponents=e}async function MC(t){return t.offlineComponents||(F("FirestoreClient","Using default OfflineComponentProvider"),await PC(t,new RC)),t.offlineComponents}async function bm(t){return t.onlineComponents||(F("FirestoreClient","Using default OnlineComponentProvider"),await xC(t,new NC)),t.onlineComponents}function LC(t){return bm(t).then(e=>e.syncEngine)}async function gf(t){const e=await bm(t),n=e.eventManager;return n.onListen=yC.bind(null,e.syncEngine),n.onUnlisten=wC.bind(null,e.syncEngine),n}const mf=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sm(t,e,n){if(!n)throw new M(E.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function UC(t,e,n,s){if(e===!0&&s===!0)throw new M(E.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function yf(t){if(!V.isDocumentKey(t))throw new M(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function vf(t){if(V.isDocumentKey(t))throw new M(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function sa(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K()}function _s(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new M(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=sa(t);throw new M(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new M(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new M(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,UC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new M(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new M(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wf(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new rb;switch(n.type){case"gapi":const s=n.client;return new cb(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new M(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=mf.get(e);n&&(F("ComponentProvider","Removing Datastore"),mf.delete(e),n.terminate())}(this),Promise.resolve()}}function FC(t,e,n,s={}){var r;const i=(t=_s(t,ra))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&vc("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Ke.MOCK_USER;else{o=D_(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new M(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Ke(c)}t._authCredentials=new ib(new bg(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _n(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new it(this.firestore,e,this._key)}}class ts{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new ts(this.firestore,e,this._query)}}class _n extends ts{constructor(e,n,s){super(e,n,$u(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new it(this.firestore,null,new V(e))}withConverter(e){return new _n(this.firestore,e,this._path)}}function Cm(t,e,...n){if(t=Ve(t),Sm("collection","path",e),t instanceof ra){const s=we.fromString(e,...n);return vf(s),new _n(t,null,s)}{if(!(t instanceof it||t instanceof _n))throw new M(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(we.fromString(e,...n));return vf(s),new _n(t.firestore,null,s)}}function Am(t,e,...n){if(t=Ve(t),arguments.length===1&&(e=Sg.R()),Sm("doc","path",e),t instanceof ra){const s=we.fromString(e,...n);return yf(s),new it(t,null,new V(s))}{if(!(t instanceof it||t instanceof _n))throw new M(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(we.fromString(e,...n));return yf(s),new it(t.firestore,t instanceof _n?t.converter:null,new V(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $C{constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new um(this,"async_queue_retry"),this.Hc=()=>{const n=Ma();n&&F("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ko.Vo()};const e=Ma();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const n=Ma();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Jc(),this.Kc)return new Promise(()=>{});const n=new Hn;return this.Yc(()=>this.Kc&&this.zc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Uc.push(e),this.Zc()))}async Zc(){if(this.Uc.length!==0){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(e){if(!ei(e))throw e;F("AsyncQueue","Operation failed with retryable error: "+e)}this.Uc.length>0&&this.ko.vo(()=>this.Zc())}}Yc(e){const n=this.qc.then(()=>(this.jc=!0,e().catch(s=>{this.Qc=s,this.jc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw Zt("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.jc=!1,s))));return this.qc=n,n}enqueueAfterDelay(e,n,s){this.Jc(),this.Wc.indexOf(e)>-1&&(n=0);const r=Qu.createAndSchedule(this,e,n,s,i=>this.Xc(i));return this.Gc.push(r),r}Jc(){this.Qc&&K()}verifyOperationInProgress(){}async ta(){let e;do e=this.qc,await e;while(e!==this.qc)}ea(e){for(const n of this.Gc)if(n.timerId===e)return!0;return!1}na(e){return this.ta().then(()=>{this.Gc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Gc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ta()})}sa(e){this.Wc.push(e)}Xc(e){const n=this.Gc.indexOf(e);this.Gc.splice(n,1)}}function _f(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(t,["next","error","complete"])}class oo extends ra{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new $C,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Rm(this),this._firestoreClient.terminate()}}function VC(t,e){const n=typeof t=="object"?t:qd(),s=typeof t=="string"?t:e||"(default)",r=su(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=k_("firestore");i&&FC(r,...i)}return r}function km(t){return t._firestoreClient||Rm(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Rm(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new vb(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new OC(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ms(et.fromBase64String(e))}catch(n){throw new M(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ms(et.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new M(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new We(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new M(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new M(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BC=/^__.*__$/;class Nm{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Zn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Dm(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class tl{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.Tt=s,this.ignoreUndefinedProperties=r,i===void 0&&this.ia(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ra(){return this.settings.ra}oa(e){return new tl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.Tt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ua(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.oa({path:s,ca:!1});return r.aa(e),r}ha(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.oa({path:s,ca:!1});return r.ia(),r}la(e){return this.oa({path:void 0,ca:!0})}fa(e){return ao(e,this.settings.methodName,this.settings.da||!1,this.path,this.settings._a)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ia(){if(this.path)for(let e=0;e<this.path.length;e++)this.aa(this.path.get(e))}aa(e){if(e.length===0)throw this.fa("Document fields must not be empty");if(Dm(this.ra)&&BC.test(e))throw this.fa('Document fields cannot begin and end with "__"')}}class jC{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.Tt=s||ea(e)}wa(e,n,s,r=!1){return new tl({ra:e,methodName:n,_a:s,path:We.emptyPath(),ca:!1,da:r},this.databaseId,this.Tt,this.ignoreUndefinedProperties)}}function Om(t){const e=t._freezeSettings(),n=ea(t._databaseId);return new jC(t._databaseId,!!e.ignoreUndefinedProperties,n)}class oa extends Zu{_toFieldTransform(e){if(e.ra!==2)throw e.ra===1?e.fa(`${this._methodName}() can only appear at the top level of your update data`):e.fa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof oa}}function qC(t,e,n,s){const r=t.wa(1,e,n);xm("Data must be an object, but it was:",r,s);const i=[],o=ct.empty();Jn(s,(c,u)=>{const l=nl(e,c,n);u=Ve(u);const h=r.ha(l);if(u instanceof oa)i.push(l);else{const f=ri(u,h);f!=null&&(i.push(l),o.set(l,f))}});const a=new St(i);return new Nm(o,a,r.fieldTransforms)}function HC(t,e,n,s,r,i){const o=t.wa(1,e,n),a=[Ef(e,s,n)],c=[r];if(i.length%2!=0)throw new M(E.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(Ef(e,i[f])),c.push(i[f+1]);const u=[],l=ct.empty();for(let f=a.length-1;f>=0;--f)if(!WC(u,a[f])){const g=a[f];let v=c[f];v=Ve(v);const y=o.ha(g);if(v instanceof oa)u.push(g);else{const C=ri(v,y);C!=null&&(u.push(g),l.set(g,C))}}const h=new St(u);return new Nm(l,h,o.fieldTransforms)}function KC(t,e,n,s=!1){return ri(n,t.wa(s?4:3,e))}function ri(t,e){if(Pm(t=Ve(t)))return xm("Unsupported field value:",e,t),zC(t,e);if(t instanceof Zu)return function(n,s){if(!Dm(s.ra))throw s.fa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.fa(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ca&&e.ra!==4)throw e.fa("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=ri(o,s.la(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=Ve(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Lb(s.Tt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Oe.fromDate(n);return{timestampValue:ro(s.Tt,r)}}if(n instanceof Oe){const r=new Oe(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ro(s.Tt,r)}}if(n instanceof el)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ms)return{bytesValue:tm(s.Tt,n._byteString)};if(n instanceof it){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.fa(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Bu(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.fa(`Unsupported field value: ${sa(n)}`)}(t,e)}function zC(t,e){const n={};return Cg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Jn(t,(s,r)=>{const i=ri(r,e.ua(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Pm(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Oe||t instanceof el||t instanceof Ms||t instanceof it||t instanceof Zu)}function xm(t,e,n){if(!Pm(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=sa(n);throw s==="an object"?e.fa(t+" a custom object"):e.fa(t+" "+s)}}function Ef(t,e,n){if((e=Ve(e))instanceof ia)return e._internalPath;if(typeof e=="string")return nl(t,e);throw ao("Field path arguments must be of type string or ",t,!1,void 0,n)}const GC=new RegExp("[~\\*/\\[\\]]");function nl(t,e,n){if(e.search(GC)>=0)throw ao(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ia(...e.split("."))._internalPath}catch{throw ao(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ao(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new M(E.INVALID_ARGUMENT,a+t+c)}function WC(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new it(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new QC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(sl("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class QC extends Mm{data(){return super.data()}}function sl(t,e){return typeof e=="string"?nl(t,e):e instanceof ia?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YC(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new M(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class rl{}class Lm extends rl{}function XC(t,e,...n){let s=[];e instanceof rl&&s.push(e),s=s.concat(n),function(r){const i=r.filter(a=>a instanceof ol).length,o=r.filter(a=>a instanceof il).length;if(i>1||i>0&&o>0)throw new M(E.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class il extends Lm{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new il(e,n,s)}_apply(e){const n=this._parse(e);return Um(e._query,n),new ts(e.firestore,e.converter,Tc(e._query,n))}_parse(e){const n=Om(e.firestore);return function(r,i,o,a,c,u,l){let h;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new M(E.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Tf(l,u);const f=[];for(const g of l)f.push(If(a,r,g));h={arrayValue:{values:f}}}else h=If(a,r,l)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Tf(l,u),h=KC(o,i,l,u==="in"||u==="not-in");return Ne.create(c,u,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class ol extends rl{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new ol(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:Nt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)Um(i,a),i=Tc(i,a)}(e._query,n),new ts(e.firestore,e.converter,Tc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class al extends Lm{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new al(e,n)}_apply(e){const n=function(s,r,i){if(s.startAt!==null)throw new M(E.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new M(E.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new ys(r,i);return function(a,c){if(Vu(a)===null){const u=Go(a);u!==null&&Fm(a,u,c.field)}}(s,o),o}(e._query,this._field,this._direction);return new ts(e.firestore,e.converter,function(s,r){const i=s.explicitOrderBy.concat([r]);return new qs(s.path,s.collectionGroup,i,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function JC(t,e="asc"){const n=e,s=sl("orderBy",t);return al._create(s,n)}function If(t,e,n){if(typeof(n=Ve(n))=="string"){if(n==="")throw new M(E.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Lg(e)&&n.indexOf("/")!==-1)throw new M(E.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(we.fromString(n));if(!V.isDocumentKey(s))throw new M(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Kh(t,new V(s))}if(n instanceof it)return Kh(t,n._key);throw new M(E.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${sa(n)}.`)}function Tf(t,e){if(!Array.isArray(t)||t.length===0)throw new M(E.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Um(t,e){if(e.isInequality()){const s=Go(t),r=e.field;if(s!==null&&!s.isEqual(r))throw new M(E.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=Vu(t);i!==null&&Fm(t,r,i)}const n=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new M(E.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new M(E.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Fm(t,e,n){if(!n.isEqual(e))throw new M(E.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class ZC{convertValue(e,n="none"){switch(Yn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ns(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw K()}}convertObject(e,n){const s={};return Jn(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new el(ke(e.latitude),ke(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=kg(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Nr(e));default:return null}}convertTimestamp(e){const n=bn(e);return new Oe(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=we.fromString(e);me(om(s));const r=new Rr(s.get(1),s.get(3)),i=new V(s.popFirst(5));return r.isEqual(n)||Zt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class $m extends Mm{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Pi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(sl("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Pi extends $m{data(e={}){return super.data(e)}}class eA{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new nr(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Pi(this._firestore,this._userDataWriter,s.key,s,new nr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new M(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new Pi(s._firestore,s._userDataWriter,o.doc.key,o.doc,new nr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Pi(s._firestore,s._userDataWriter,o.doc.key,o.doc,new nr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:tA(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function tA(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}class Vm extends ZC{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ms(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new it(this.firestore,null,n)}}function nA(t,e,n,...s){t=_s(t,it);const r=_s(t.firestore,oo),i=Om(r);let o;return o=typeof(e=Ve(e))=="string"||e instanceof ia?HC(i,"updateDoc",t._key,e,n,s):qC(i,"updateDoc",t._key,e),sA(r,[o.toMutation(t._key,Qt.exists(!0))])}function cl(t,...e){var n,s,r;t=Ve(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||_f(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(_f(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let c,u,l;if(t instanceof it)u=_s(t.firestore,oo),l=$u(t._key.path),c={next:h=>{e[o]&&e[o](rA(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=_s(t,ts);u=_s(h.firestore,oo),l=h._query;const f=new Vm(u);c={next:g=>{e[o]&&e[o](new eA(u,f,h,g))},error:e[o+1],complete:e[o+2]},YC(t._query)}return function(h,f,g,v){const y=new DC(v),C=new fC(f,y,g);return h.asyncQueue.enqueueAndForget(async()=>cC(await gf(h),C)),()=>{y.bc(),h.asyncQueue.enqueueAndForget(async()=>uC(await gf(h),C))}}(km(u),l,a,c)}function sA(t,e){return function(n,s){const r=new Hn;return n.asyncQueue.enqueueAndForget(async()=>_C(await LC(n),s,r)),r.promise}(km(t),e)}function rA(t,e,n){const s=n.docs.get(e._key),r=new Vm(t);return new $m(t,r,e._key,s,new nr(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){js=n})($r),Cs(new zn("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new oo(new ob(n.getProvider("auth-internal")),new lb(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new M(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Rr(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),wn(Bh,"3.9.0",t),wn(Bh,"3.9.0","esm2017")})();jd({apiKey:"AIzaSyAWOmRueaO-gurRxbbhG6EMSWwSXSdLgT4",authDomain:"la-puissance-firebase.firebaseapp.com",projectId:"la-puissance-firebase",storageBucket:"la-puissance-firebase.appspot.com",messagingSenderId:"140227962175",appId:"1:140227962175:web:c31fdba4adfa886b3f9f8a",measurementId:"G-378CN8566R"});const aa=VC(),iA=t=>cl(XC(Cm(aa,"/squad"),JC("number")),t),oA=(t,e)=>cl(Cm(aa,`/squad/${t}/stats`),e),aA=(t,e,n)=>cl(Am(aa,`squad/${t}/stats/${e}`),n),cA=(t,e,n)=>nA(Am(aa,`squad/${t}/stats`,e),n);const Bm=t=>(Gc("data-v-8e0b7eaf"),t=t(),Wc(),t),uA={class:"page"},lA=Bm(()=>q("h1",{class:"title"},"Stats Manager",-1)),hA=Bm(()=>q("br",null,null,-1)),fA={class:"player-container"},dA=["onClick"],pA={class:"text-[#f1121f] font-bold"},gA={__name:"Squad",setup(t){const e=To(),n=Mr([]);return Lr(()=>iA(s=>s.forEach(r=>n.value.push({...r.data(),id:r.id})))),(s,r)=>(Wt(),mn("div",uA,[lA,hA,q("div",fA,[(Wt(!0),mn(ht,null,ud(n.value,i=>(Wt(),mn("div",{class:"player",onClick:o=>gt(e).push({name:"player",params:{id:i.id}})},[q("p",pA,It(i.number),1),q("p",null,It(i.nickname),1)],8,dA))),256))])]))}},mA=No(gA,[["__scopeId","data-v-8e0b7eaf"]]);const jm=t=>(Gc("data-v-bb6099b9"),t=t(),Wc(),t),yA={class:"page"},vA=jm(()=>q("h1",null,"player_id:",-1)),wA=jm(()=>q("br",null,null,-1)),_A={class:"season-container"},EA=["onClick"],IA={__name:"Player",setup(t){const e=To(),n=xd(),s=Mr([]);return Lr(()=>oA(n.params.id,r=>r.forEach(i=>s.value.push({...i.data(),id:i.id})))),(r,i)=>(Wt(),mn("div",yA,[vA,q("h2",null,It(gt(n).params.id),1),wA,q("div",_A,[(Wt(!0),mn(ht,null,ud(s.value,o=>(Wt(),mn("p",{class:"season",onClick:a=>gt(e).push({name:"season",params:{id:gt(n).params.id},query:{season:o.id}})},It(o.id),9,EA))),256))])]))}},TA=No(IA,[["__scopeId","data-v-bb6099b9"]]);const Vt=t=>(Gc("data-v-9797501b"),t=t(),Wc(),t),bA={class:"page"},SA=Vt(()=>q("h1",null,"season_id:",-1)),CA=Vt(()=>q("br",null,null,-1)),AA={class:"stats-container"},kA={class:"stat"},RA=Vt(()=>q("span",null,"PJ",-1)),NA={class:"stat"},DA=Vt(()=>q("span",null,"MVP",-1)),OA=Vt(()=>q("br",null,null,-1)),PA={class:"stat"},xA=Vt(()=>q("span",null,"G",-1)),MA={class:"stat"},LA=Vt(()=>q("span",null,"A",-1)),UA=Vt(()=>q("br",null,null,-1)),FA={class:"stat"},$A=Vt(()=>q("span",null,"TA",-1)),VA={class:"stat"},BA=Vt(()=>q("span",null,"TR",-1)),jA={__name:"Season",setup(t){To();const e=xd(),n=Mr({}),s=r=>cA(e.params.id,e.query.season,r);return Lr(()=>aA(e.params.id,e.query.season,r=>n.value=r.data())),(r,i)=>(Wt(),mn("div",bA,[SA,q("h2",null,It(gt(e).query.season),1),CA,q("div",AA,[q("div",kA,[RA,q("button",{onClick:i[0]||(i[0]=o=>s({gp:n.value.gp+1}))},"+"),q("p",null,It(n.value.gp),1),q("button",{onClick:i[1]||(i[1]=o=>n.value.gp>0?s({gp:n.value.gp-1}):0)},"-")]),q("div",NA,[DA,q("button",{onClick:i[2]||(i[2]=o=>s({mvp:n.value.mvp+1}))},"+"),q("p",null,It(n.value.mvp),1),q("button",{onClick:i[3]||(i[3]=o=>n.value.mvp>0?s({mvp:n.value.mvp-1}):0)},"-")]),OA,q("div",PA,[xA,q("button",{onClick:i[4]||(i[4]=o=>s({g:n.value.g+1}))},"+"),q("p",null,It(n.value.g),1),q("button",{onClick:i[5]||(i[5]=o=>n.value.g>0?s({g:n.value.g-1}):0)},"-")]),q("div",MA,[LA,q("button",{onClick:i[6]||(i[6]=o=>s({a:n.value.a+1}))},"+"),q("p",null,It(n.value.a),1),q("button",{onClick:i[7]||(i[7]=o=>n.value.a>0?s({a:n.value.a-1}):0)},"-")]),UA,q("div",FA,[$A,q("button",{onClick:i[8]||(i[8]=o=>s({yc:n.value.yc+1}))},"+"),q("p",null,It(n.value.yc),1),q("button",{onClick:i[9]||(i[9]=o=>n.value.yc>0?s({yc:n.value.yc-1}):0)},"-")]),q("div",VA,[BA,q("button",{onClick:i[10]||(i[10]=o=>s({rc:n.value.rc+1}))},"+"),q("p",null,It(n.value.rc),1),q("button",{onClick:i[11]||(i[11]=o=>n.value.rc>0?s({rc:n.value.rc-1}):0)},"-")])])]))}},qA=No(jA,[["__scopeId","data-v-9797501b"]]),qm=v_({history:Mw("/"),routes:[{path:"/",name:"auth",component:ZI},{path:"/squad",name:"squad",component:mA,meta:{requiresAuth:!0}},{path:"/player/:id",name:"player",component:TA,meta:{requiresAuth:!0}},{path:"/player/:id",name:"season",component:qA,meta:{requiresAuth:!0}}]});qm.beforeEach((t,e,n)=>{t.matched.some(s=>s.meta.requiresAuth)?Ep().currentUser?n():n("/"):n()});const Hm=mw(__);Hm.use(qm);Hm.mount("#app");
