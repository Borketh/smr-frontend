import{S as O,i as A,s as H,a6 as G,a7 as j,a8 as E,t as _,q as g,aa as T,ba as J,T as W,ai as X,V as v,d as P,e as C,W as q,aT as Y,h as l,j as y,f as D,g as I,X as S,k as z,m as b,l as $,C as V,aj as K,aC as Q,J as R,aB as U,aD as Z,bb as x,B,Y as F,$ as w}from"../../../chunks/vendor-3e0baac1.js";import{p as ee}from"../../../chunks/routing-689f9c1f.js";import{s as te,E as se}from"../../../chunks/graphql-b763070c.js";import{T as re}from"../../../chunks/Toast-a8ec85f8.js";import{g as ne}from"../../../chunks/navigation-d7362a67.js";import{G as ae}from"../../../chunks/GuideForm-713e4880.js";import{b as oe}from"../../../chunks/paths-396f020f.js";import{M as ie}from"../../../chunks/MetaDescriptors-f7ef5770.js";import"../../../chunks/singletons-d19c42e4.js";import"../../../chunks/forms-7ab15406.js";import"../../../chunks/forms-3ac04b20.js";import"../../../chunks/markdown-e391b8a1.js";import"../../../chunks/extras-7497b851.js";import"../../../chunks/stores-7dc89ead.js";function L(a){let t,s;return t=new ie({props:{description:"Editing guide '"+a[2].data.getGuide.short_description+"'",title:"Edit guide '"+a[2].data.getGuide.name+"'"}}),{c(){G(t.$$.fragment)},l(e){j(t.$$.fragment,e)},m(e,r){E(t,e,r),s=!0},p(e,r){const i={};r&4&&(i.description="Editing guide '"+e[2].data.getGuide.short_description+"'"),r&4&&(i.title="Edit guide '"+e[2].data.getGuide.name+"'"),t.$set(i)},i(e){s||(_(t.$$.fragment,e),s=!0)},o(e){g(t.$$.fragment,e),s=!1},d(e){T(t,e)}}}function ue(a){let t,s;return t=new ae({props:{onSubmit:a[4],initialValues:a[2].data.getGuide,submitText:"Save"}}),{c(){G(t.$$.fragment)},l(e){j(t.$$.fragment,e)},m(e,r){E(t,e,r),s=!0},p(e,r){const i={};r&4&&(i.initialValues=e[2].data.getGuide),t.$set(i)},i(e){s||(_(t.$$.fragment,e),s=!0)},o(e){g(t.$$.fragment,e),s=!1},d(e){T(t,e)}}}function fe(a){let t,s,e=a[2].error.message+"",r;return{c(){t=C("p"),s=q("Oh no... "),r=q(e)},l(i){t=D(i,"P",{});var o=I(t);s=S(o,"Oh no... "),r=S(o,e),o.forEach(l)},m(i,o){$(i,t,o),b(t,s),b(t,r)},p(i,o){o&4&&e!==(e=i[2].error.message+"")&&F(r,e)},i:w,o:w,d(i){i&&l(t)}}}function ce(a){let t,s;return{c(){t=C("p"),s=q("Loading...")},l(e){t=D(e,"P",{});var r=I(t);s=S(r,"Loading..."),r.forEach(l)},m(e,r){$(e,t,r),b(t,s)},p:w,i:w,o:w,d(e){e&&l(t)}}}function le(a){let t,s,e,r;const i=[ce,fe,ue],o=[];function m(u,d){return u[2].fetching?0:u[2].error?1:2}return t=m(a),s=o[t]=i[t](a),{c(){s.c(),e=v()},l(u){s.l(u),e=v()},m(u,d){o[t].m(u,d),$(u,e,d),r=!0},p(u,d){let p=t;t=m(u),t===p?o[t].p(u,d):(B(),g(o[p],1,1,()=>{o[p]=null}),V(),s=o[t],s?s.p(u,d):(s=o[t]=i[t](u),s.c()),_(s,1),s.m(e.parentNode,e))},i(u){r||(_(s),r=!0)},o(u){g(s),r=!1},d(u){o[t].d(u),u&&l(e)}}}function de(a){let t,s;return t=new x({props:{$$slots:{default:[le]},$$scope:{ctx:a}}}),{c(){G(t.$$.fragment)},l(e){j(t.$$.fragment,e)},m(e,r){E(t,e,r),s=!0},p(e,r){const i={};r&260&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){s||(_(t.$$.fragment,e),s=!0)},o(e){g(t.$$.fragment,e),s=!1},d(e){T(t,e)}}}function me(a){let t,s;return{c(){t=C("span"),s=q(a[1])},l(e){t=D(e,"SPAN",{});var r=I(t);s=S(r,a[1]),r.forEach(l)},m(e,r){$(e,t,r),b(t,s)},p(e,r){r&2&&F(s,e[1])},d(e){e&&l(t)}}}function pe(a){let t,s,e,r,i,o,m,u,d,p,f=!a[2].fetching&&!a[2].error&&a[2].data.getGuide&&L(a);o=new J({props:{$$slots:{default:[de]},$$scope:{ctx:a}}});function h(n){a[6](n)}let N={$$slots:{default:[me]},$$scope:{ctx:a}};return a[0]!==void 0&&(N.running=a[0]),u=new re({props:N}),W.push(()=>X(u,"running",h)),{c(){f&&f.c(),t=v(),s=P(),e=C("h1"),r=q("Edit Guide"),i=P(),G(o.$$.fragment),m=P(),G(u.$$.fragment),this.h()},l(n){const c=Y('[data-svelte="svelte-1e0nmq8"]',document.head);f&&f.l(c),t=v(),c.forEach(l),s=y(n),e=D(n,"H1",{class:!0});var k=I(e);r=S(k,"Edit Guide"),k.forEach(l),i=y(n),j(o.$$.fragment,n),m=y(n),j(u.$$.fragment,n),this.h()},h(){z(e,"class","text-4xl my-4 font-bold")},m(n,c){f&&f.m(document.head,null),b(document.head,t),$(n,s,c),$(n,e,c),b(e,r),$(n,i,c),E(o,n,c),$(n,m,c),E(u,n,c),p=!0},p(n,[c]){!n[2].fetching&&!n[2].error&&n[2].data.getGuide?f?(f.p(n,c),c&4&&_(f,1)):(f=L(n),f.c(),_(f,1),f.m(t.parentNode,t)):f&&(B(),g(f,1,1,()=>{f=null}),V());const k={};c&260&&(k.$$scope={dirty:c,ctx:n}),o.$set(k);const M={};c&258&&(M.$$scope={dirty:c,ctx:n}),!d&&c&1&&(d=!0,M.running=n[0],K(()=>d=!1)),u.$set(M)},i(n){p||(_(f),_(o.$$.fragment,n),_(u.$$.fragment,n),p=!0)},o(n){g(f),g(o.$$.fragment,n),g(u.$$.fragment,n),p=!1},d(n){f&&f.d(n),l(t),n&&l(s),n&&l(e),n&&l(i),T(o,n),n&&l(m),T(u,n)}}}const De=ee();function _e(a,t,s){let e,{guideId:r}=t,i="",o=!1;const m=Q(te,{guide:r});R(a,m,f=>s(2,e=f));const u=U({query:se}),d=f=>{u({guideId:r,guide:f}).then(h=>{h.error?(console.error(h.error.message),s(1,i="Error editing guide: "+h.error.message),s(0,o=!0)):ne(oe+"/guide/"+h.data.updateGuide.id)})};Z(m);function p(f){o=f,s(0,o)}return a.$$set=f=>{"guideId"in f&&s(5,r=f.guideId)},a.$$.update=()=>{a.$$.dirty&1&&(o||s(1,i=""))},[o,i,e,m,d,r,p]}class Ie extends O{constructor(t){super();A(this,t,_e,pe,H,{guideId:5})}}export{Ie as default,De as load};
//# sourceMappingURL=edit.svelte-27f311b6.js.map
