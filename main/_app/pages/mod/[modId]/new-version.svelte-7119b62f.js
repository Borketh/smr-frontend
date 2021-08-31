import{S as e,i as t,s as r,X as o,J as a,K as n,l as s,k as c,e as i,t as d,j as l,$ as u,d as f,n as h,c as m,a as p,g,m as v,b as w,R as $,f as x,o as b,u as V,w as k,x as y,L as I,v as E,M as j,N as S,O as P,Q as M,r as N,C as U,h as F,aH as D}from"../../../chunks/vendor-ecacde99.js";import{p as q}from"../../../chunks/routing-1d144003.js";import{T as z}from"../../../chunks/Toast-1c3d573d.js";import{g as A}from"../../../chunks/navigation-51f4a605.js";import{V as C}from"../../../chunks/VersionForm-dfc34acd.js";import{x as R,C as T,y as _,z as L,F as O}from"../../../chunks/graphql-7c12eb8b.js";import{b as H}from"../../../chunks/paths-6758d194.js";import"../../../chunks/singletons-12a22614.js";import"../../../chunks/uplugin-25072ff1.js";import"../../../chunks/api-82c76902.js";import"../../../chunks/user-bb5babe5.js";import"../../../chunks/forms-8d025218.js";import"../../../chunks/markdown-58cc1c31.js";function J(e){return document.title="New Version: "+e[2].data.getMod.name+" - SMR",{c:o,l:o,m:o,d:o}}function K(e){let t,r=e[2].data.getMod.name+"";return{c(){t=d(r)},l(e){t=g(e,r)},m(e,r){x(e,t,r)},p(e,o){4&o&&r!==(r=e[2].data.getMod.name+"")&&F(t,r)},d(e){e&&f(t)}}}function Q(e){let t;return{c(){t=d("...")},l(e){t=g(e,"...")},m(e,r){x(e,t,r)},p:o,d(e){e&&f(t)}}}function X(e){let t,r,o,a;t=new C({props:{onSubmit:e[8],modReference:e[2].data.getMod.mod_reference}});let n=e[3]&&W(e);return{c(){l(t.$$.fragment),r=c(),n&&n.c(),o=s()},l(e){v(t.$$.fragment,e),r=h(e),n&&n.l(e),o=s()},m(e,s){b(t,e,s),x(e,r,s),n&&n.m(e,s),x(e,o,s),a=!0},p(e,r){const a={};4&r&&(a.modReference=e[2].data.getMod.mod_reference),t.$set(a),e[3]?n?n.p(e,r):(n=W(e),n.c(),n.m(o.parentNode,o)):n&&(n.d(1),n=null)},i(e){a||(y(t.$$.fragment,e),a=!0)},o(e){V(t.$$.fragment,e),a=!1},d(e){E(t,e),e&&f(r),n&&n.d(e),e&&f(o)}}}function B(e){let t,r,a,n=e[2].error.message+"";return{c(){t=i("p"),r=d("Oh no... "),a=d(n)},l(e){t=m(e,"P",{});var o=p(t);r=g(o,"Oh no... "),a=g(o,n),o.forEach(f)},m(e,o){x(e,t,o),$(t,r),$(t,a)},p(e,t){4&t&&n!==(n=e[2].error.message+"")&&F(a,n)},i:o,o:o,d(e){e&&f(t)}}}function G(e){let t,r;return{c(){t=i("p"),r=d("Loading...")},l(e){t=m(e,"P",{});var o=p(t);r=g(o,"Loading..."),o.forEach(f)},m(e,o){x(e,t,o),$(t,r)},p:o,i:o,o:o,d(e){e&&f(t)}}}function W(e){let t,r,o,a,n,s,l,u,v,b,V,k,y,I=e[4].toFixed(0)+"";return{c(){t=i("div"),r=i("div"),o=i("div"),a=i("span"),n=d(e[3]),s=c(),l=i("div"),u=i("span"),v=d(I),b=d("%"),V=c(),k=i("div"),y=i("div"),this.h()},l(c){t=m(c,"DIV",{class:!0});var i=p(t);r=m(i,"DIV",{class:!0});var d=p(r);o=m(d,"DIV",{});var w=p(o);a=m(w,"SPAN",{class:!0});var $=p(a);n=g($,e[3]),$.forEach(f),w.forEach(f),s=h(d),l=m(d,"DIV",{class:!0});var x=p(l);u=m(x,"SPAN",{class:!0});var E=p(u);v=g(E,I),b=g(E,"%"),E.forEach(f),x.forEach(f),d.forEach(f),V=h(i),k=m(i,"DIV",{class:!0});var j=p(k);y=m(j,"DIV",{style:!0,class:!0}),p(y).forEach(f),j.forEach(f),i.forEach(f),this.h()},h(){w(a,"class","text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-yellow-600"),w(u,"class","text-xs font-semibold inline-block text-white"),w(l,"class","text-right"),w(r,"class","flex mb-2 items-center justify-between"),D(y,"width",e[4].toFixed(0)+"%"),w(y,"class","shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-600"),w(k,"class","overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-600"),w(t,"class","relative pt-4")},m(e,c){x(e,t,c),$(t,r),$(r,o),$(o,a),$(a,n),$(r,s),$(r,l),$(l,u),$(u,v),$(u,b),$(t,V),$(t,k),$(k,y)},p(e,t){8&t&&F(n,e[3]),16&t&&I!==(I=e[4].toFixed(0)+"")&&F(v,I),16&t&&D(y,"width",e[4].toFixed(0)+"%")},d(e){e&&f(t)}}}function Y(e){let t,r;return{c(){t=i("span"),r=d(e[1])},l(o){t=m(o,"SPAN",{});var a=p(t);r=g(a,e[1]),a.forEach(f)},m(e,o){x(e,t,o),$(t,r)},p(e,t){2&t&&F(r,e[1])},d(e){e&&f(t)}}}function Z(e){let t,r,o,j,S,P,M,U,F,D,q,A=!e[2].fetching&&!e[2].error&&e[2].data.getMod&&J(e);function C(e,t){return e[2].fetching?Q:e[2].error?void 0:K}let R=C(e),T=R&&R(e);const _=[G,B,X],L=[];function O(e,t){return e[2].fetching?0:e[2].error?1:2}function H(t){e[10](t)}P=O(e),M=L[P]=_[P](e);let W={$$slots:{default:[Y]},$$scope:{ctx:e}};return void 0!==e[0]&&(W.running=e[0]),F=new z({props:W}),a.push((()=>n(F,"running",H))),{c(){A&&A.c(),t=s(),r=c(),o=i("h1"),j=d("New Version for\n  "),T&&T.c(),S=c(),M.c(),U=c(),l(F.$$.fragment),this.h()},l(e){const a=u('[data-svelte="svelte-agg4pr"]',document.head);A&&A.l(a),t=s(),a.forEach(f),r=h(e),o=m(e,"H1",{class:!0});var n=p(o);j=g(n,"New Version for\n  "),T&&T.l(n),n.forEach(f),S=h(e),M.l(e),U=h(e),v(F.$$.fragment,e),this.h()},h(){w(o,"class","text-4xl my-4 font-bold")},m(e,a){A&&A.m(document.head,null),$(document.head,t),x(e,r,a),x(e,o,a),$(o,j),T&&T.m(o,null),x(e,S,a),L[P].m(e,a),x(e,U,a),b(F,e,a),q=!0},p(e,[r]){e[2].fetching||e[2].error||!e[2].data.getMod?A&&(A.d(1),A=null):A||(A=J(e),A.c(),A.m(t.parentNode,t)),R===(R=C(e))&&T?T.p(e,r):(T&&T.d(1),T=R&&R(e),T&&(T.c(),T.m(o,null)));let a=P;P=O(e),P===a?L[P].p(e,r):(N(),V(L[a],1,1,(()=>{L[a]=null})),k(),M=L[P],M?M.p(e,r):(M=L[P]=_[P](e),M.c()),y(M,1),M.m(U.parentNode,U));const n={};131074&r&&(n.$$scope={dirty:r,ctx:e}),!D&&1&r&&(D=!0,n.running=e[0],I((()=>D=!1))),F.$set(n)},i(e){q||(y(M),y(F.$$.fragment,e),q=!0)},o(e){V(M),V(F.$$.fragment,e),q=!1},d(e){A&&A.d(e),f(t),e&&f(r),e&&f(o),T&&T.d(),e&&f(S),L[P].d(e),e&&f(U),E(F,e)}}}const ee=q();function te(e,t,r){let o,a,n;var s=this&&this.__awaiter||function(e,t,r,o){return new(r||(r=Promise))((function(a,n){function s(e){try{i(o.next(e))}catch(t){n(t)}}function c(e){try{i(o.throw(e))}catch(t){n(t)}}function i(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,c)}i((o=o.apply(e,t||[])).next())}))};let{modId:c}=t;const i=U("");j(e,i,(e=>r(3,a=e)));const d=U(0);j(e,d,(e=>r(4,n=e)));const l=U();l.subscribe((e=>{e&&(e.uploaded===e.total?(i.set("Processing..."),d.set(100)):(i.set(`Uploading: ${e.uploaded}/${e.total}`),d.set(e.uploaded/e.total*100)))}));let u="",f=!1;const h=S(R,{mod:c});j(e,h,(e=>r(2,o=e))),P(h);const m=M({query:_}),p=M({query:L}),g=M({query:O}),v=S(T,{versionId:void 0,modId:c},{pause:!0});P(v);return e.$$set=e=>{"modId"in e&&r(9,c=e.modId)},e.$$.update=()=>{1&e.$$.dirty&&(f||r(1,u=""))},[f,u,o,a,n,i,d,h,e=>s(void 0,void 0,void 0,(function*(){return(async(e,t,r,o,a)=>{const n=1e7,s=Math.ceil(e.size/n),c=new Array(s).fill(0).map(((e,t)=>t)).reverse(),i=(e,r,o)=>a.uploadVersionPart({modId:t,versionId:o,part:r,file:e});let d=0,l=0;const u=t=>{if(d>=10)return;if(!c.length)return;const r=c.pop(),a=r*n,f=e.slice(a,a+n);return d+=1,Promise.all([i(f,r+1,t).then((()=>(d-=1,o.set({total:s,uploaded:s-c.length-d}),u(t)))).catch((e=>{if(console.error("Upload failed:",e),d-=1,c.push(r),l+=1,l<5)return u(t);throw new Error("Failed uploading after 5 attempts")})),u(t)])};return a.createVersion({modId:t}).then((async e=>(o.set({total:s,uploaded:0}),await u(e.data.createVersion),e.data.createVersion))).then((e=>(console.log("Finalizing",{versionID:e}),a.finalizeCreateVersion({modId:t,versionId:e,version:r}).then((()=>new Promise(((t,r)=>{let o=0;const n=setInterval((()=>{if(60==o)return clearInterval(n),r(new Error("Timed out waiting for mod processing"));a.checkVersionUploadState.reexecute({requestPolicy:"network-only"}),o++}),1e4);a.checkVersionUploadState.variables.versionId=e;const s=a.checkVersionUploadState.subscribe((e=>{if(!e.fetching)return e.error?(clearInterval(n),r(new Error(e.error.message)),void setTimeout(s)):void(e.data&&e.data.checkVersionUploadState&&e.data.checkVersionUploadState.version&&e.data.checkVersionUploadState.version.id&&(s(),clearInterval(n),t(e.data.checkVersionUploadState)))}))}))))))).catch((e=>{throw console.error(e),e}))})(e.file,c,{changelog:e.changelog,stability:e.stability},l,{createVersion:m,uploadVersionPart:p,finalizeCreateVersion:g,checkVersionUploadState:v}).then((e=>{console.log({success:e}),A(H+"/mod/"+c+"/version/"+e.version.id)})).catch((e=>{console.error(e),r(1,u="Error creating version: "+e.message),r(0,f=!0),i.set("")}))})),c,function(e){f=e,r(0,f)}]}class re extends e{constructor(e){super(),t(this,e,te,Z,r,{modId:9})}}export{re as default,ee as load};
//# sourceMappingURL=new-version.svelte-7119b62f.js.map