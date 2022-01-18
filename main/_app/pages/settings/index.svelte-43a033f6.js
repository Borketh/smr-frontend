import{S as te,i as se,s as ae,az as re,M as x,N as G,w as M,k as N,e as k,t as F,ab as ne,x as U,d as c,m as I,c as S,a as w,h as z,b,y as V,g as E,X as _,O as J,q as y,o as T,B as C,P as oe,Q as ie,aY as le,b5 as ue,b6 as fe,aZ as ce,aF as me,Z as R,b1 as pe,b2 as de,b3 as $e,aA as _e,l as K,n as ge,p as he,j as Z,a$ as W,a_ as be,Y as ve,b0 as ke}from"../../chunks/vendor-3f5cbc3a.js";import{U as Se}from"../../chunks/graphql-a19cc583.js";import{T as we}from"../../chunks/Toast-c4472768.js";import{g as Ee}from"../../chunks/navigation-ca50617e.js";import{t as je}from"../../chunks/forms-b4347bf1.js";import{a as ye}from"../../chunks/user-124feed5.js";import{b as Te}from"../../chunks/paths-396f020f.js";import{M as Ae}from"../../chunks/MetaDescriptors-40e2f494.js";import"../../chunks/singletons-4fc5a6de.js";import"../../chunks/stores-c07fe9fa.js";function Pe(o){let e,t,s,a,i,f,m,n,p,g,h,$,r,d,l,A,j,D,O,Y,H;p=new W({props:{for:"avatar",$$slots:{default:[De,({messages:u})=>({10:u}),({messages:u})=>u?1024:0]},$$scope:{ctx:o}}});function ee(u){o[7](u)}let Q={label:"Username",required:!0};return o[5].username!==void 0&&(Q.value=o[5].username),$=new be({props:Q}),x.push(()=>G($,"value",ee)),l=new W({props:{for:"username",$$slots:{default:[Me,({messages:u})=>({10:u}),({messages:u})=>u?1024:0]},$$scope:{ctx:o}}}),D=new ve({props:{type:"submit",variant:"outlined",$$slots:{default:[Ne]},$$scope:{ctx:o}}}),{c(){e=k("form"),t=k("div"),s=k("div"),a=k("label"),i=F("Avatar:"),f=N(),m=k("input"),n=N(),M(p.$$.fragment),g=N(),h=k("div"),M($.$$.fragment),d=N(),M(l.$$.fragment),A=N(),j=k("div"),M(D.$$.fragment),this.h()},l(u){e=S(u,"FORM",{});var v=w(e);t=S(v,"DIV",{class:!0});var P=w(t);s=S(P,"DIV",{class:!0});var q=w(s);a=S(q,"LABEL",{for:!0});var L=w(a);i=z(L,"Avatar:"),L.forEach(c),f=I(q),m=S(q,"INPUT",{id:!0,class:!0,name:!0,type:!0,accept:!0,placeholder:!0}),n=I(q),U(p.$$.fragment,q),q.forEach(c),g=I(P),h=S(P,"DIV",{class:!0});var B=w(h);U($.$$.fragment,B),d=I(B),U(l.$$.fragment,B),B.forEach(c),A=I(P),j=S(P,"DIV",{});var X=w(j);U(D.$$.fragment,X),X.forEach(c),P.forEach(c),v.forEach(c),this.h()},h(){b(a,"for","avatar"),b(m,"id","avatar"),b(m,"class","base-input"),b(m,"name","avatar"),b(m,"type","file"),b(m,"accept","image/png,image/jpeg,image/gif"),b(m,"placeholder","Avatar"),b(s,"class","grid grid-flow-row gap-2"),b(h,"class","grid grid-flow-row gap-2"),b(t,"class","grid grid-flow-row gap-6")},m(u,v){E(u,e,v),_(e,t),_(t,s),_(s,a),_(a,i),_(s,f),_(s,m),_(s,n),V(p,s,null),_(t,g),_(t,h),V($,h,null),_(h,d),V(l,h,null),_(t,A),_(t,j),V(D,j,null),O=!0,Y||(H=ke(o[4].call(null,e)),Y=!0)},p(u,v){const P={};v&3072&&(P.$$scope={dirty:v,ctx:u}),p.$set(P);const q={};!r&&v&32&&(r=!0,q.value=u[5].username,J(()=>r=!1)),$.$set(q);const L={};v&3072&&(L.$$scope={dirty:v,ctx:u}),l.$set(L);const B={};v&2048&&(B.$$scope={dirty:v,ctx:u}),D.$set(B)},i(u){O||(y(p.$$.fragment,u),y($.$$.fragment,u),y(l.$$.fragment,u),y(D.$$.fragment,u),O=!0)},o(u){T(p.$$.fragment,u),T($.$$.fragment,u),T(l.$$.fragment,u),T(D.$$.fragment,u),O=!1},d(u){u&&c(e),C(p),C($),C(l),C(D),Y=!1,H()}}}function qe(o){let e,t;return{c(){e=k("p"),t=F("Please log in")},l(s){e=S(s,"P",{});var a=w(e);t=z(a,"Please log in"),a.forEach(c)},m(s,a){E(s,e,a),_(e,t)},p:R,i:R,o:R,d(s){s&&c(e)}}}function De(o){let e,t=(o[10]||"")+"",s;return{c(){e=k("span"),s=F(t),this.h()},l(a){e=S(a,"SPAN",{class:!0});var i=w(e);s=z(i,t),i.forEach(c),this.h()},h(){b(e,"class","validation-message")},m(a,i){E(a,e,i),_(e,s)},p(a,i){i&1024&&t!==(t=(a[10]||"")+"")&&Z(s,t)},d(a){a&&c(e)}}}function Me(o){let e,t=(o[10]||"")+"",s;return{c(){e=k("span"),s=F(t),this.h()},l(a){e=S(a,"SPAN",{class:!0});var i=w(e);s=z(i,t),i.forEach(c),this.h()},h(){b(e,"class","validation-message")},m(a,i){E(a,e,i),_(e,s)},p(a,i){i&1024&&t!==(t=(a[10]||"")+"")&&Z(s,t)},d(a){a&&c(e)}}}function Ne(o){let e;return{c(){e=F("Save")},l(t){e=z(t,"Save")},m(t,s){E(t,e,s)},d(t){t&&c(e)}}}function Ue(o){let e,t,s,a;const i=[qe,Pe],f=[];function m(n,p){return n[2]===null?0:1}return e=m(o),t=f[e]=i[e](o),{c(){t.c(),s=K()},l(n){t.l(n),s=K()},m(n,p){f[e].m(n,p),E(n,s,p),a=!0},p(n,p){let g=e;e=m(n),e===g?f[e].p(n,p):(ge(),T(f[g],1,1,()=>{f[g]=null}),he(),t=f[e],t?t.p(n,p):(t=f[e]=i[e](n),t.c()),y(t,1),t.m(s.parentNode,s))},i(n){a||(y(t),a=!0)},o(n){T(t),a=!1},d(n){f[e].d(n),n&&c(s)}}}function Ie(o){let e,t;return e=new me({props:{$$slots:{default:[Ue]},$$scope:{ctx:o}}}),{c(){M(e.$$.fragment)},l(s){U(e.$$.fragment,s)},m(s,a){V(e,s,a),t=!0},p(s,a){const i={};a&2084&&(i.$$scope={dirty:a,ctx:s}),e.$set(i)},i(s){t||(y(e.$$.fragment,s),t=!0)},o(s){T(e.$$.fragment,s),t=!1},d(s){C(e,s)}}}function Ve(o){let e,t;return{c(){e=k("span"),t=F(o[3])},l(s){e=S(s,"SPAN",{});var a=w(e);t=z(a,o[3]),a.forEach(c)},m(s,a){E(s,e,a),_(e,t)},p(s,a){a&8&&Z(t,s[3])},d(s){s&&c(e)}}}function Ce(o){let e,t,s,a,i,f,m,n,p,g;e=new Ae({props:{description:"Change your user settings",title:"Settings"}}),f=new re({props:{$$slots:{default:[Ie]},$$scope:{ctx:o}}});function h(r){o[8](r)}let $={$$slots:{default:[Ve]},$$scope:{ctx:o}};return o[0]!==void 0&&($.running=o[0]),n=new we({props:$}),x.push(()=>G(n,"running",h)),{c(){M(e.$$.fragment),t=N(),s=k("h1"),a=F("Settings"),i=N(),M(f.$$.fragment),m=N(),M(n.$$.fragment),this.h()},l(r){const d=ne('[data-svelte="svelte-1ae5i2c"]',document.head);U(e.$$.fragment,d),d.forEach(c),t=I(r),s=S(r,"H1",{class:!0});var l=w(s);a=z(l,"Settings"),l.forEach(c),i=I(r),U(f.$$.fragment,r),m=I(r),U(n.$$.fragment,r),this.h()},h(){b(s,"class","text-4xl my-4 font-bold")},m(r,d){V(e,document.head,null),E(r,t,d),E(r,s,d),_(s,a),E(r,i,d),V(f,r,d),E(r,m,d),V(n,r,d),g=!0},p(r,[d]){const l={};d&2084&&(l.$$scope={dirty:d,ctx:r}),f.$set(l);const A={};d&2056&&(A.$$scope={dirty:d,ctx:r}),!p&&d&1&&(p=!0,A.running=r[0],J(()=>p=!1)),n.$set(A)},i(r){g||(y(e.$$.fragment,r),y(f.$$.fragment,r),y(n.$$.fragment,r),g=!0)},o(r){T(e.$$.fragment,r),T(f.$$.fragment,r),T(n.$$.fragment,r),g=!1},d(r){C(e),r&&c(t),r&&c(s),r&&c(i),C(f,r),r&&c(m),C(n,r)}}}function Be(o,e,t){let s,a,i=R,f=()=>(i(),i=_e($,l=>t(5,a=l)),$);oe(o,ye,l=>t(2,s=l)),o.$$.on_destroy.push(()=>i());let m="",n=!1;const p=ie({query:Se}),g=le({avatar:ue(fe().refine(l=>"name"in l&&"size"in l&&"type"in l)),username:ce().min(3).max(32)});let h,$;function r(l){o.$$.not_equal(a.username,l)&&(a.username=l,$.set(a))}function d(l){n=l,t(0,n),t(2,s)}return o.$$.update=()=>{if(o.$$.dirty&4&&s){const l=pe({initialValues:{username:s.username},extend:[de,$e],validateSchema:g,onSubmit:A=>{p({user:je(A,g),userId:s.id}).then(j=>{j.error?(console.error(j.error.message),t(3,m="Error editing guide: "+j.error.message),t(0,n=!0)):Ee(Te+"/user/"+j.data.updateUser.id)})}});t(4,h=l.form),f(t(1,$=l.data))}o.$$.dirty&1&&(n||t(3,m=""))},[n,$,s,m,h,a,g,r,d]}class xe extends te{constructor(e){super();se(this,e,Be,Ce,ae,{userSchema:6})}get userSchema(){return this.$$.ctx[6]}}export{xe as default};
//# sourceMappingURL=index.svelte-43a033f6.js.map