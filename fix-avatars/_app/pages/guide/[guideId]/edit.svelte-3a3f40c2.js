import{S as t,i as e,s,j as a,m as r,o as n,x as i,u as o,v as d,J as u,K as c,l as m,k as g,e as p,t as f,$ as l,d as $,n as h,c as k,a as j,g as E,b as G,R as v,f as b,w as x,L as w,N as I,M as y,Q as N,O as S,r as L,h as M,X as O}from"../../../chunks/vendor-ae42b6a0.js";import{p as P}from"../../../chunks/routing-1d144003.js";import{r as T,E as q}from"../../../chunks/graphql-53becde4.js";import{T as V}from"../../../chunks/Toast-1d0b041d.js";import{g as _}from"../../../chunks/navigation-51f4a605.js";import{G as z}from"../../../chunks/GuideForm-56718714.js";import{b as A}from"../../../chunks/paths-6758d194.js";import{M as D}from"../../../chunks/MetaDescriptors-acbf38a9.js";import"../../../chunks/singletons-12a22614.js";import"../../../chunks/forms-8d025218.js";import"../../../chunks/markdown-70c7c4d4.js";import"../../../chunks/stores-fc868ea7.js";function F(t){let e,s;return e=new D({props:{description:"Editing guide '"+t[2].data.getGuide.short_description+"'",title:"Edit guide '"+t[2].data.getGuide.name+"'"}}),{c(){a(e.$$.fragment)},l(t){r(e.$$.fragment,t)},m(t,a){n(e,t,a),s=!0},p(t,s){const a={};4&s&&(a.description="Editing guide '"+t[2].data.getGuide.short_description+"'"),4&s&&(a.title="Edit guide '"+t[2].data.getGuide.name+"'"),e.$set(a)},i(t){s||(i(e.$$.fragment,t),s=!0)},o(t){o(e.$$.fragment,t),s=!1},d(t){d(e,t)}}}function H(t){let e,s;return e=new z({props:{onSubmit:t[4],initialValues:t[2].data.getGuide,submitText:"Save"}}),{c(){a(e.$$.fragment)},l(t){r(e.$$.fragment,t)},m(t,a){n(e,t,a),s=!0},p(t,s){const a={};4&s&&(a.initialValues=t[2].data.getGuide),e.$set(a)},i(t){s||(i(e.$$.fragment,t),s=!0)},o(t){o(e.$$.fragment,t),s=!1},d(t){d(e,t)}}}function J(t){let e,s,a,r=t[2].error.message+"";return{c(){e=p("p"),s=f("Oh no... "),a=f(r)},l(t){e=k(t,"P",{});var n=j(e);s=E(n,"Oh no... "),a=E(n,r),n.forEach($)},m(t,r){b(t,e,r),v(e,s),v(e,a)},p(t,e){4&e&&r!==(r=t[2].error.message+"")&&M(a,r)},i:O,o:O,d(t){t&&$(e)}}}function K(t){let e,s;return{c(){e=p("p"),s=f("Loading...")},l(t){e=k(t,"P",{});var a=j(e);s=E(a,"Loading..."),a.forEach($)},m(t,a){b(t,e,a),v(e,s)},p:O,i:O,o:O,d(t){t&&$(e)}}}function Q(t){let e,s;return{c(){e=p("span"),s=f(t[1])},l(a){e=k(a,"SPAN",{});var r=j(e);s=E(r,t[1]),r.forEach($)},m(t,a){b(t,e,a),v(e,s)},p(t,e){2&e&&M(s,t[1])},d(t){t&&$(e)}}}function R(t){let e,s,I,y,N,S,M,O,P,T,q,_=!t[2].fetching&&!t[2].error&&t[2].data.getGuide&&F(t);const z=[K,J,H],A=[];function D(t,e){return t[2].fetching?0:t[2].error?1:2}function R(e){t[6](e)}S=D(t),M=A[S]=z[S](t);let X={$$slots:{default:[Q]},$$scope:{ctx:t}};return void 0!==t[0]&&(X.running=t[0]),P=new V({props:X}),u.push((()=>c(P,"running",R))),{c(){_&&_.c(),e=m(),s=g(),I=p("h1"),y=f("Edit Guide"),N=g(),M.c(),O=g(),a(P.$$.fragment),this.h()},l(t){const a=l('[data-svelte="svelte-2z35li"]',document.head);_&&_.l(a),e=m(),a.forEach($),s=h(t),I=k(t,"H1",{class:!0});var n=j(I);y=E(n,"Edit Guide"),n.forEach($),N=h(t),M.l(t),O=h(t),r(P.$$.fragment,t),this.h()},h(){G(I,"class","text-4xl my-4 font-bold")},m(t,a){_&&_.m(document.head,null),v(document.head,e),b(t,s,a),b(t,I,a),v(I,y),b(t,N,a),A[S].m(t,a),b(t,O,a),n(P,t,a),q=!0},p(t,[s]){t[2].fetching||t[2].error||!t[2].data.getGuide?_&&(L(),o(_,1,1,(()=>{_=null})),x()):_?(_.p(t,s),4&s&&i(_,1)):(_=F(t),_.c(),i(_,1),_.m(e.parentNode,e));let a=S;S=D(t),S===a?A[S].p(t,s):(L(),o(A[a],1,1,(()=>{A[a]=null})),x(),M=A[S],M?M.p(t,s):(M=A[S]=z[S](t),M.c()),i(M,1),M.m(O.parentNode,O));const r={};258&s&&(r.$$scope={dirty:s,ctx:t}),!T&&1&s&&(T=!0,r.running=t[0],w((()=>T=!1))),P.$set(r)},i(t){q||(i(_),i(M),i(P.$$.fragment,t),q=!0)},o(t){o(_),o(M),o(P.$$.fragment,t),q=!1},d(t){_&&_.d(t),$(e),t&&$(s),t&&$(I),t&&$(N),A[S].d(t),t&&$(O),d(P,t)}}}const X=P();function B(t,e,s){let a,{guideId:r}=e,n="",i=!1;const o=I(T,{guide:r});y(t,o,(t=>s(2,a=t)));const d=N({query:q});return S(o),t.$$set=t=>{"guideId"in t&&s(5,r=t.guideId)},t.$$.update=()=>{1&t.$$.dirty&&(i||s(1,n=""))},[i,n,a,o,t=>{d({guideId:r,guide:t}).then((t=>{t.error?(console.error(t.error.message),s(1,n="Error editing guide: "+t.error.message),s(0,i=!0)):_(A+"/guide/"+t.data.updateGuide.id)}))},r,function(t){i=t,s(0,i)}]}class C extends t{constructor(t){super(),e(this,t,B,R,s,{guideId:5})}}export{C as default,X as load};
//# sourceMappingURL=edit.svelte-3a3f40c2.js.map
