import{S as Tt,i as wt,s as xt,A as W,a as L,e as b,b as ft,C as Lt,D as Y,f as d,g as I,c as V,d as D,F as R,G as T,H as X,j as S,I as h,m as C,t as k,l as ct,J as Z,K as It,L as St,P as $t,u as Et,M as bt,N as Vt,O as Q,k as ut,q as yt,r as Ct,Q as ht,R as Mt,T as O,U as A,V as P,W as _t}from"../chunks/vendor.6XGvI_6f.js";import{G as Bt,D as Nt}from"../chunks/graphql.XSrPrpK2.js";import{M as Ot}from"../chunks/MetaDescriptors.1jIQqh3N.js";import{p as dt}from"../chunks/formatting.G9yDJMit.js";function mt(l,t,e){const s=l.slice();return s[15]=t[e],s}function vt(l){let t,e,s,o;function f(a){l[7](a)}let c={showFirstLastButtons:!0,showPreviousNextButtons:!0,controlVariant:"variant-filled-surface"};return l[4]!==void 0&&(c.settings=l[4]),e=new $t({props:c}),Et.push(()=>bt(e,"settings",f)),e.$on("page",l[8]),e.$on("amount",l[9]),{c(){t=b("div"),W(e.$$.fragment)},l(a){t=V(a,"DIV",{});var r=D(t);Y(e.$$.fragment,r),r.forEach(d)},m(a,r){S(a,t,r),X(e,t,null),o=!0},p(a,r){const u={};!s&&r&16&&(s=!0,u.settings=a[4],Vt(()=>s=!1)),e.$set(u)},i(a){o||(C(e.$$.fragment,a),o=!0)},o(a){k(e.$$.fragment,a),o=!1},d(a){a&&d(t),Z(e)}}}function At(l){let t,e,s="<tr><th>Version</th> <th>Stability</th> <th>Satisfactory Version</th> <th>Bootstrap Version</th> <th>Release Date</th> <th></th></tr>",o,f,c=ht(l[3].data.getSMLVersions.sml_versions),a=[];for(let r=0;r<c.length;r+=1)a[r]=pt(mt(l,c,r));return{c(){t=b("table"),e=b("thead"),e.innerHTML=s,o=L(),f=b("tbody");for(let r=0;r<a.length;r+=1)a[r].c();this.h()},l(r){t=V(r,"TABLE",{class:!0});var u=D(t);e=V(u,"THEAD",{"data-svelte-h":!0}),R(e)!=="svelte-1yalwxx"&&(e.innerHTML=s),o=I(u),f=V(u,"TBODY",{});var i=D(f);for(let p=0;p<a.length;p+=1)a[p].l(i);i.forEach(d),u.forEach(d),this.h()},h(){T(t,"class","table table-hover max-w-full")},m(r,u){S(r,t,u),h(t,e),h(t,o),h(t,f);for(let i=0;i<a.length;i+=1)a[i]&&a[i].m(f,null)},p(r,u){if(u&72){c=ht(r[3].data.getSMLVersions.sml_versions);let i;for(i=0;i<c.length;i+=1){const p=mt(r,c,i);a[i]?a[i].p(p,u):(a[i]=pt(p),a[i].c(),a[i].m(f,null))}for(;i<a.length;i+=1)a[i].d(1);a.length=c.length}},d(r){r&&d(t),Mt(a,r)}}}function jt(l){let t,e,s=l[3].error.message+"",o;return{c(){t=b("section"),e=O("Oh no... "),o=O(s),this.h()},l(f){t=V(f,"SECTION",{class:!0});var c=D(t);e=A(c,"Oh no... "),o=A(c,s),c.forEach(d),this.h()},h(){T(t,"class","p-4")},m(f,c){S(f,t,c),h(t,e),h(t,o)},p(f,c){c&8&&s!==(s=f[3].error.message+"")&&P(o,s)},d(f){f&&d(t)}}}function kt(l){let t,e="Loading...";return{c(){t=b("section"),t.textContent=e,this.h()},l(s){t=V(s,"SECTION",{class:!0,"data-svelte-h":!0}),R(t)!=="svelte-1e06hs8"&&(t.textContent=e),this.h()},h(){T(t,"class","p-4")},m(s,o){S(s,t,o)},p:yt,d(s){s&&d(t)}}}function pt(l){let t,e,s=l[15].version+"",o,f,c,a=l[15].stability+"",r,u,i,p=l[15].satisfactory_version+"",m,M,w,y=l[15].bootstrap_version+"",v,n,g,x=dt(l[15].created_at)+"",$,z,q,_,B,tt="Delete",G,N,U,F,J,K,et;function Dt(){return l[10](l[15])}return{c(){t=b("tr"),e=b("td"),o=O(s),f=L(),c=b("td"),r=O(a),u=L(),i=b("td"),m=O(p),M=L(),w=b("td"),v=O(y),n=L(),g=b("td"),$=O(x),z=L(),q=b("td"),_=b("div"),B=b("button"),B.textContent=tt,G=L(),N=b("a"),U=O("Edit"),J=L(),this.h()},l(j){t=V(j,"TR",{});var E=D(t);e=V(E,"TD",{});var st=D(e);o=A(st,s),st.forEach(d),f=I(E),c=V(E,"TD",{});var rt=D(c);r=A(rt,a),rt.forEach(d),u=I(E),i=V(E,"TD",{});var lt=D(i);m=A(lt,p),lt.forEach(d),M=I(E),w=V(E,"TD",{});var at=D(w);v=A(at,y),at.forEach(d),n=I(E),g=V(E,"TD",{});var it=D(g);$=A(it,x),it.forEach(d),z=I(E),q=V(E,"TD",{class:!0});var nt=D(q);_=V(nt,"DIV",{class:!0});var H=D(_);B=V(H,"BUTTON",{class:!0,"data-svelte-h":!0}),R(B)!=="svelte-8pcwqq"&&(B.textContent=tt),G=I(H),N=V(H,"A",{class:!0,href:!0});var ot=D(N);U=A(ot,"Edit"),ot.forEach(d),H.forEach(d),nt.forEach(d),J=I(E),E.forEach(d),this.h()},h(){T(B,"class","variant-ghost-primary btn btn-sm"),T(N,"class","variant-ghost-primary btn btn-sm"),T(N,"href",F=Q+"/admin/sml-versions/"+l[15].id+"/edit"),T(_,"class","grid grid-flow-col gap-4"),T(q,"class","!p-2.5")},m(j,E){S(j,t,E),h(t,e),h(e,o),h(t,f),h(t,c),h(c,r),h(t,u),h(t,i),h(i,m),h(t,M),h(t,w),h(w,v),h(t,n),h(t,g),h(g,$),h(t,z),h(t,q),h(q,_),h(_,B),h(_,G),h(_,N),h(N,U),h(t,J),K||(et=_t(B,"click",Dt),K=!0)},p(j,E){l=j,E&8&&s!==(s=l[15].version+"")&&P(o,s),E&8&&a!==(a=l[15].stability+"")&&P(r,a),E&8&&p!==(p=l[15].satisfactory_version+"")&&P(m,p),E&8&&y!==(y=l[15].bootstrap_version+"")&&P(v,y),E&8&&x!==(x=dt(l[15].created_at)+"")&&P($,x),E&8&&F!==(F=Q+"/admin/sml-versions/"+l[15].id+"/edit")&&T(N,"href",F)},d(j){j&&d(t),K=!1,et()}}}function gt(l){let t,e,s,o,f;function c(r){l[11](r)}let a={showFirstLastButtons:!0,showPreviousNextButtons:!0,controlVariant:"variant-filled-surface"};return l[4]!==void 0&&(a.settings=l[4]),s=new $t({props:a}),Et.push(()=>bt(s,"settings",c)),s.$on("page",l[12]),s.$on("amount",l[13]),{c(){t=b("div"),e=b("div"),W(s.$$.fragment),this.h()},l(r){t=V(r,"DIV",{class:!0});var u=D(t);e=V(u,"DIV",{});var i=D(e);Y(s.$$.fragment,i),i.forEach(d),u.forEach(d),this.h()},h(){T(t,"class","ml-auto mt-5 flex justify-end")},m(r,u){S(r,t,u),h(t,e),X(s,e,null),f=!0},p(r,u){const i={};!o&&u&16&&(o=!0,i.settings=r[4],Vt(()=>o=!1)),s.$set(i)},i(r){f||(C(s.$$.fragment,r),f=!0)},o(r){k(s.$$.fragment,r),f=!1},d(r){r&&d(t),Z(s)}}}function qt(l){let t,e,s,o,f="New SML Version",c,a,r,u,i,p;t=new Ot({props:{description:"SML Versions",title:"Admin: SML Versions"}});let m=l[2]&&vt(l);function M(n,g){return n[3].fetching?kt:n[3].error?jt:At}let w=M(l),y=w(l),v=l[2]&&gt(l);return{c(){W(t.$$.fragment),e=L(),s=b("div"),o=b("a"),o.textContent=f,c=L(),m&&m.c(),a=L(),r=b("div"),y.c(),u=L(),v&&v.c(),i=ft(),this.h()},l(n){const g=Lt("svelte-1iwjzfb",document.head);Y(t.$$.fragment,g),g.forEach(d),e=I(n),s=V(n,"DIV",{class:!0});var x=D(s);o=V(x,"A",{class:!0,href:!0,"data-svelte-h":!0}),R(o)!=="svelte-knuo64"&&(o.textContent=f),c=I(x),m&&m.l(x),x.forEach(d),a=I(n),r=V(n,"DIV",{class:!0});var $=D(r);y.l($),$.forEach(d),u=I(n),v&&v.l(n),i=ft(),this.h()},h(){T(o,"class","variant-ghost-primary btn"),T(o,"href",Q+"/admin/sml-versions/new"),T(s,"class","mb-5 ml-auto flex justify-between"),T(r,"class","card")},m(n,g){X(t,document.head,null),S(n,e,g),S(n,s,g),h(s,o),h(s,c),m&&m.m(s,null),S(n,a,g),S(n,r,g),y.m(r,null),S(n,u,g),v&&v.m(n,g),S(n,i,g),p=!0},p(n,[g]){n[2]?m?(m.p(n,g),g&4&&C(m,1)):(m=vt(n),m.c(),C(m,1),m.m(s,null)):m&&(ut(),k(m,1,1,()=>{m=null}),ct()),w===(w=M(n))&&y?y.p(n,g):(y.d(1),y=w(n),y&&(y.c(),y.m(r,null))),n[2]?v?(v.p(n,g),g&4&&C(v,1)):(v=gt(n),v.c(),C(v,1),v.m(i.parentNode,i)):v&&(ut(),k(v,1,1,()=>{v=null}),ct())},i(n){p||(C(t.$$.fragment,n),C(m),C(v),p=!0)},o(n){k(t.$$.fragment,n),k(m),k(v),p=!1},d(n){n&&(d(e),d(s),d(a),d(r),d(u),d(i)),Z(t),m&&m.d(),y.d(),v&&v.d(n)}}}function Pt(l,t,e){let s,o,f,c,a=yt,r=()=>(a(),a=Ct(s,$=>e(3,c=$)),s);l.$$.on_destroy.push(()=>a());const u=It();let i=20,p=0;const m=$=>{u.mutation(Nt,{smlVersionID:$}).toPromise().then(()=>{s.pause(),s.resume()})};function M($){f=$,e(4,f),e(1,p),e(0,i),e(2,o),e(3,c)}const w=$=>e(1,p=$.detail),y=$=>e(0,i=$.detail),v=$=>m($.id);function n($){f=$,e(4,f),e(1,p),e(0,i),e(2,o),e(3,c)}const g=$=>e(1,p=$.detail),x=$=>e(0,i=$.detail);return l.$$.update=()=>{l.$$.dirty&3&&r(e(5,s=St({query:Bt,client:u,variables:{filter:{offset:p*i,limit:i}}}))),l.$$.dirty&8&&e(2,o=c?.data?.getSMLVersions?.count),l.$$.dirty&7&&e(4,f={page:p,limit:i,size:o,amounts:[5,10,20,50,100]})},[i,p,o,c,f,s,m,M,w,y,v,n,g,x]}class Gt extends Tt{constructor(t){super(),wt(this,t,Pt,qt,xt,{})}}export{Gt as component};
//# sourceMappingURL=4.JslZWHz7.js.map
