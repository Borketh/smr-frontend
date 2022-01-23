import{S as x,i as ee,s as te,a6 as T,a7 as q,a8 as M,t as E,q as I,aa as A,ba as re,T as oe,ai as ne,V as N,d as F,e as y,W as P,aT as se,h as _,j as z,f as j,g as S,X as C,k as U,m as v,l as w,C as H,aj as ae,J as B,aC as J,aD as W,aB as L,bb as ie,B as X,R as O,az as le,Y as R,$ as D,Z as Y}from"../../../chunks/vendor-3e0baac1.js";import{p as ce}from"../../../chunks/routing-689f9c1f.js";import{T as fe}from"../../../chunks/Toast-a8ec85f8.js";import{g as ue}from"../../../chunks/navigation-d7362a67.js";import{V as de}from"../../../chunks/VersionForm-9a7b9041.js";import{x as me,C as pe,y as _e,z as he,F as be}from"../../../chunks/graphql-b763070c.js";import{b as ke}from"../../../chunks/paths-396f020f.js";import{M as ge}from"../../../chunks/MetaDescriptors-f7ef5770.js";import"../../../chunks/singletons-d19c42e4.js";import"../../../chunks/forms-7ab15406.js";import"../../../chunks/jszip-650ad10c.js";import"../../../chunks/extras-7497b851.js";import"../../../chunks/uplugin-a4e09df3.js";import"../../../chunks/api-82c76902.js";import"../../../chunks/user-12e23a01.js";import"../../../chunks/forms-3ac04b20.js";import"../../../chunks/markdown-e391b8a1.js";import"../../../chunks/formatting-24701f16.js";import"../../../chunks/stores-7dc89ead.js";const ve=async(i,e,r,t,n)=>{const a=1e7,o=Math.ceil(i.size/a),u=new Array(o).fill(0).map((m,f)=>f).reverse(),l=(m,f,g)=>n.uploadVersionPart({modId:e,versionId:g,part:f,file:m}),k=10;let h=0,d=0;const $=m=>{if(h>=k||!u.length)return;const f=u.pop(),g=f*a,b=i.slice(g,g+a);return h+=1,Promise.all([l(b,f+1,m).then(()=>(h-=1,t.set({total:o,uploaded:o-u.length-h}),$(m))).catch(s=>{if(console.error("Upload failed:",s),h-=1,u.push(f),d+=1,d<5)return $(m);throw new Error("Failed uploading after 5 attempts")}),$(m)])};return n.createVersion({modId:e}).then(async m=>(t.set({total:o,uploaded:0}),await $(m.data.createVersion),m.data.createVersion)).then(m=>(console.log("Finalizing",{versionID:m}),n.finalizeCreateVersion({modId:e,versionId:m,version:r}).then(()=>new Promise((f,g)=>{let b=0;const s=setInterval(()=>{if(b==60)return clearInterval(s),g(new Error("Timed out waiting for mod processing"));n.checkVersionUploadState.reexecute({requestPolicy:"network-only"}),b++},1e4);n.checkVersionUploadState.variables.versionId=m;const p=n.checkVersionUploadState.subscribe(c=>{if(!c.fetching){if(c.error){clearInterval(s),g(new Error(c.error.message)),setTimeout(p);return}!c.data||!c.data.checkVersionUploadState||!c.data.checkVersionUploadState.version||!c.data.checkVersionUploadState.version.id||(p(),clearInterval(s),f(c.data.checkVersionUploadState))}})})))).catch(m=>{throw console.error(m),m})};function Z(i){let e,r;return e=new ge({props:{description:"Creating a new version of mod "+i[1].data.mod.name,title:"New version of mod "+i[1].data.mod.name}}),{c(){T(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,n){M(e,t,n),r=!0},p(t,n){const a={};n&2&&(a.description="Creating a new version of mod "+t[1].data.mod.name),n&2&&(a.title="New version of mod "+t[1].data.mod.name),e.$set(a)},i(t){r||(E(e.$$.fragment,t),r=!0)},o(t){I(e.$$.fragment,t),r=!1},d(t){A(e,t)}}}function $e(i){let e=i[1].data.mod.name+"",r;return{c(){r=P(e)},l(t){r=C(t,e)},m(t,n){w(t,r,n)},p(t,n){n&2&&e!==(e=t[1].data.mod.name+"")&&R(r,e)},d(t){t&&_(r)}}}function we(i){let e;return{c(){e=P("...")},l(r){e=C(r,"...")},m(r,t){w(r,e,t)},p:D,d(r){r&&_(e)}}}function Ve(i){let e,r,t,n;e=new de({props:{onSubmit:i[8],modReference:i[1].data.mod.mod_reference}});let a=i[3]&&K(i);return{c(){T(e.$$.fragment),r=F(),a&&a.c(),t=N()},l(o){q(e.$$.fragment,o),r=z(o),a&&a.l(o),t=N()},m(o,u){M(e,o,u),w(o,r,u),a&&a.m(o,u),w(o,t,u),n=!0},p(o,u){const l={};u&2&&(l.modReference=o[1].data.mod.mod_reference),e.$set(l),o[3]?a?a.p(o,u):(a=K(o),a.c(),a.m(t.parentNode,t)):a&&(a.d(1),a=null)},i(o){n||(E(e.$$.fragment,o),n=!0)},o(o){I(e.$$.fragment,o),n=!1},d(o){A(e,o),o&&_(r),a&&a.d(o),o&&_(t)}}}function ye(i){let e,r,t=i[1].error.message+"",n;return{c(){e=y("p"),r=P("Oh no... "),n=P(t)},l(a){e=j(a,"P",{});var o=S(e);r=C(o,"Oh no... "),n=C(o,t),o.forEach(_)},m(a,o){w(a,e,o),v(e,r),v(e,n)},p(a,o){o&2&&t!==(t=a[1].error.message+"")&&R(n,t)},i:D,o:D,d(a){a&&_(e)}}}function je(i){let e,r;return{c(){e=y("p"),r=P("Loading...")},l(t){e=j(t,"P",{});var n=S(e);r=C(n,"Loading..."),n.forEach(_)},m(t,n){w(t,e,n),v(e,r)},p:D,i:D,o:D,d(t){t&&_(e)}}}function K(i){let e,r,t,n,a,o,u,l,k=i[4].toFixed(0)+"",h,d,$,m,f;return{c(){e=y("div"),r=y("div"),t=y("div"),n=y("span"),a=P(i[3]),o=F(),u=y("div"),l=y("span"),h=P(k),d=P("%"),$=F(),m=y("div"),f=y("div"),this.h()},l(g){e=j(g,"DIV",{class:!0});var b=S(e);r=j(b,"DIV",{class:!0});var s=S(r);t=j(s,"DIV",{});var p=S(t);n=j(p,"SPAN",{class:!0});var c=S(n);a=C(c,i[3]),c.forEach(_),p.forEach(_),o=z(s),u=j(s,"DIV",{class:!0});var V=S(u);l=j(V,"SPAN",{class:!0});var Q=S(l);h=C(Q,k),d=C(Q,"%"),Q.forEach(_),V.forEach(_),s.forEach(_),$=z(b),m=j(b,"DIV",{class:!0});var G=S(m);f=j(G,"DIV",{style:!0,class:!0}),S(f).forEach(_),G.forEach(_),b.forEach(_),this.h()},h(){U(n,"class","text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-yellow-600"),U(l,"class","text-xs font-semibold inline-block text-white"),U(u,"class","text-right"),U(r,"class","flex mb-2 items-center justify-between"),Y(f,"width",i[4].toFixed(0)+"%"),U(f,"class","shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-600"),U(m,"class","overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-600"),U(e,"class","relative pt-4")},m(g,b){w(g,e,b),v(e,r),v(r,t),v(t,n),v(n,a),v(r,o),v(r,u),v(u,l),v(l,h),v(l,d),v(e,$),v(e,m),v(m,f)},p(g,b){b&8&&R(a,g[3]),b&16&&k!==(k=g[4].toFixed(0)+"")&&R(h,k),b&16&&Y(f,"width",g[4].toFixed(0)+"%")},d(g){g&&_(e)}}}function Se(i){let e,r,t,n;const a=[je,ye,Ve],o=[];function u(l,k){return l[1].fetching?0:l[1].error?1:2}return e=u(i),r=o[e]=a[e](i),{c(){r.c(),t=N()},l(l){r.l(l),t=N()},m(l,k){o[e].m(l,k),w(l,t,k),n=!0},p(l,k){let h=e;e=u(l),e===h?o[e].p(l,k):(X(),I(o[h],1,1,()=>{o[h]=null}),H(),r=o[e],r?r.p(l,k):(r=o[e]=a[e](l),r.c()),E(r,1),r.m(t.parentNode,t))},i(l){n||(E(r),n=!0)},o(l){I(r),n=!1},d(l){o[e].d(l),l&&_(t)}}}function Ee(i){let e,r;return e=new ie({props:{$$slots:{default:[Se]},$$scope:{ctx:i}}}),{c(){T(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,n){M(e,t,n),r=!0},p(t,n){const a={};n&65562&&(a.$$scope={dirty:n,ctx:t}),e.$set(a)},i(t){r||(E(e.$$.fragment,t),r=!0)},o(t){I(e.$$.fragment,t),r=!1},d(t){A(e,t)}}}function Pe(i){let e,r;return{c(){e=y("span"),r=P(i[2])},l(t){e=j(t,"SPAN",{});var n=S(e);r=C(n,i[2]),n.forEach(_)},m(t,n){w(t,e,n),v(e,r)},p(t,n){n&4&&R(r,t[2])},d(t){t&&_(e)}}}function Ce(i){let e,r,t,n,a,o,u,l,k,h,d=!i[1].fetching&&!i[1].error&&i[1].data.mod&&Z(i);function $(s,p){if(s[1].fetching)return we;if(!s[1].error)return $e}let m=$(i),f=m&&m(i);o=new re({props:{$$slots:{default:[Ee]},$$scope:{ctx:i}}});function g(s){i[10](s)}let b={$$slots:{default:[Pe]},$$scope:{ctx:i}};return i[0]!==void 0&&(b.running=i[0]),l=new fe({props:b}),oe.push(()=>ne(l,"running",g)),{c(){d&&d.c(),e=N(),r=F(),t=y("h1"),n=P(`New Version for
  `),f&&f.c(),a=F(),T(o.$$.fragment),u=F(),T(l.$$.fragment),this.h()},l(s){const p=se('[data-svelte="svelte-qrqlce"]',document.head);d&&d.l(p),e=N(),p.forEach(_),r=z(s),t=j(s,"H1",{class:!0});var c=S(t);n=C(c,`New Version for
  `),f&&f.l(c),c.forEach(_),a=z(s),q(o.$$.fragment,s),u=z(s),q(l.$$.fragment,s),this.h()},h(){U(t,"class","text-4xl my-4 font-bold")},m(s,p){d&&d.m(document.head,null),v(document.head,e),w(s,r,p),w(s,t,p),v(t,n),f&&f.m(t,null),w(s,a,p),M(o,s,p),w(s,u,p),M(l,s,p),h=!0},p(s,[p]){!s[1].fetching&&!s[1].error&&s[1].data.mod?d?(d.p(s,p),p&2&&E(d,1)):(d=Z(s),d.c(),E(d,1),d.m(e.parentNode,e)):d&&(X(),I(d,1,1,()=>{d=null}),H()),m===(m=$(s))&&f?f.p(s,p):(f&&f.d(1),f=m&&m(s),f&&(f.c(),f.m(t,null)));const c={};p&65562&&(c.$$scope={dirty:p,ctx:s}),o.$set(c);const V={};p&65540&&(V.$$scope={dirty:p,ctx:s}),!k&&p&1&&(k=!0,V.running=s[0],ae(()=>k=!1)),l.$set(V)},i(s){h||(E(d),E(o.$$.fragment,s),E(l.$$.fragment,s),h=!0)},o(s){I(d),I(o.$$.fragment,s),I(l.$$.fragment,s),h=!1},d(s){d&&d.d(s),_(e),s&&_(r),s&&_(t),f&&f.d(),s&&_(a),A(o,s),s&&_(u),A(l,s)}}}const Ye=ce();function Ie(i,e,r){let t,n,a,{modId:o}=e;const u=O("");B(i,u,c=>r(3,n=c));const l=O(0);B(i,l,c=>r(4,a=c));const k=O();k.subscribe(c=>{c&&(c.uploaded===c.total?(u.set("Processing..."),l.set(100)):(u.set(`Uploading: ${c.uploaded}/${c.total}`),l.set(c.uploaded/c.total*100)))});let h="",d=!1;const $=J(me,{mod:o});B(i,$,c=>r(1,t=c)),W($);const m=L({query:_e}),f=L({query:he}),g=L({query:be}),b=J(pe,{versionId:void 0,modId:void 0},{pause:!0});W(b);const s=async c=>ve(c.file,le($).data.mod.id,{changelog:c.changelog,stability:c.stability},k,{createVersion:m,uploadVersionPart:f,finalizeCreateVersion:g,checkVersionUploadState:b}).then(V=>{console.log({success:V}),ue(ke+"/mod/"+o+"/version/"+V.version.id)}).catch(V=>{console.error(V),r(2,h="Error creating version: "+V.message),r(0,d=!0),u.set("")});function p(c){d=c,r(0,d)}return i.$$set=c=>{"modId"in c&&r(9,o=c.modId)},i.$$.update=()=>{i.$$.dirty&2&&t.data&&(b.variables.modId=t.data.mod.id),i.$$.dirty&1&&(d||r(2,h=""))},[d,t,h,n,a,u,l,$,s,o,p]}class Ze extends x{constructor(e){super();ee(this,e,Ie,Ce,te,{modId:9})}}export{Ze as default,Ye as load};
//# sourceMappingURL=new-version.svelte-95a7f632.js.map
