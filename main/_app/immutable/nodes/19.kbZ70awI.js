import{L as vt,S as Ze,i as et,s as tt,a2 as at,e as m,a as y,c as g,d as V,g as x,f as u,G as w,j as M,I as s,m as B,k as Je,t as F,l as Ke,a3 as $t,A as ue,D as he,H as me,J as ge,q as S,a4 as Vt,a5 as wt,T as b,F as ne,U as E,V as R,a6 as bt,r as Et,b as Le,C as yt,Z as st,K as xt,X as It,ae as Nt,Y as lt,O as _e,W as Xe,a1 as Tt,Q as nt,a8 as St,ar as Dt,R as kt}from"../chunks/vendor.6XGvI_6f.js";import{t as At,s as Mt,H as Ot}from"../chunks/graphql.XSrPrpK2.js";import{l as Pt}from"../chunks/gql.WZvlfNZ8.js";import{m as ot}from"../chunks/markdown.718Aqr4B.js";import{A as Lt}from"../chunks/AnnouncementRow.SBFR-n5c.js";import{p as it,a as ct,b as ft,c as dt}from"../chunks/formatting.G9yDJMit.js";import{M as _t}from"../chunks/MetaDescriptors.1jIQqh3N.js";import{A as Ye}from"../chunks/api.yOy6Pjbt.js";import{u as Ct}from"../chunks/user.4zgJI8vt.js";import{i as Rt}from"../chunks/launcher.wK3Qc33c.js";import{V as Ht,a as Bt}from"../chunks/VersionDependenciesGrid.UoeWIbsV.js";import{P as zt}from"../chunks/Page404.JqwazWjO.js";const Gt=async({params:a,parent:e})=>({...a,...await Pt({version:vt({query:At,client:(await e()).client,variables:{version:a.versionId}})})}),$r=Object.freeze(Object.defineProperty({__proto__:null,load:Gt},Symbol.toStringTag,{value:"Module"}));function ut(a){let e,l,t;return l=new Lt({props:{importance:Mt.Warning,message:"This version has not yet been approved by the virus scanner and is hidden until this process is complete. If this message isn't gone in the next few minutes, ask for manual approval on the Discord."}}),{c(){e=m("div"),ue(l.$$.fragment),this.h()},l(r){e=g(r,"DIV",{class:!0});var n=V(e);he(l.$$.fragment,n),n.forEach(u),this.h()},h(){w(e,"class","p-4")},m(r,n){M(r,e,n),me(l,e,null),t=!0},i(r){t||(B(l.$$.fragment,r),t=!0)},o(r){F(l.$$.fragment,r),t=!1},d(r){r&&u(e),ge(l)}}}function Ut(a){return{c:S,l:S,m:S,p:S,d:S}}function jt(a){let e,l,t=a[2]+"";return{c(){e=m("p"),l=new Vt(!1),this.h()},l(r){e=g(r,"P",{});var n=V(e);l=wt(n,!1),n.forEach(u),this.h()},h(){l.a=null},m(r,n){M(r,e,n),l.m(t,e)},p(r,n){n&1&&t!==(t=r[2]+"")&&l.p(t)},d(r){r&&u(e)}}}function qt(a){return{c:S,l:S,m:S,p:S,d:S}}function Qt(a){let e,l,t,r,n,d,i,c=!a[1]&&ut(),h={ctx:a,current:null,token:null,hasCatch:!1,pending:qt,then:jt,catch:Ut,value:2};return at(d=ot(a[0]),h),{c(){e=m("div"),c&&c.c(),l=y(),t=m("div"),r=m("section"),n=m("div"),h.block.c(),this.h()},l(f){e=g(f,"DIV",{});var o=V(e);c&&c.l(o),l=x(o),t=g(o,"DIV",{class:!0});var v=V(t);r=g(v,"SECTION",{});var p=V(r);n=g(p,"DIV",{class:!0});var D=V(n);h.block.l(D),D.forEach(u),p.forEach(u),v.forEach(u),o.forEach(u),this.h()},h(){w(n,"class","markdown-content break-words"),w(t,"class","card h-fit p-4")},m(f,o){M(f,e,o),c&&c.m(e,null),s(e,l),s(e,t),s(t,r),s(r,n),h.block.m(n,h.anchor=null),h.mount=()=>n,h.anchor=null,i=!0},p(f,[o]){a=f,a[1]?c&&(Je(),F(c,1,1,()=>{c=null}),Ke()):c?o&2&&B(c,1):(c=ut(),c.c(),B(c,1),c.m(e,l)),h.ctx=a,o&1&&d!==(d=ot(a[0]))&&at(d,h)||$t(h,a,o)},i(f){i||(B(c),i=!0)},o(f){F(c),i=!1},d(f){f&&u(e),c&&c.d(),h.block.d(),h.token=null,h=null}}}function Wt(a,e,l){let{changelog:t}=e,{approved:r}=e;return a.$$set=n=>{"changelog"in n&&l(0,t=n.changelog),"approved"in n&&l(1,r=n.approved)},[t,r]}class Ft extends Ze{constructor(e){super(),et(this,e,Wt,Qt,tt,{changelog:0,approved:1})}}function Jt(a){let e,l,t,r,n="Info",d,i,c,h=a[2]("entry.created-at")+"",f,o,v,p=it(a[0].created_at)+"",D,U,_,P,I,te=a[2]("downloads")+"",K,pe,oe,z=ct(a[0].downloads)+"",j,ie,G,C,X,J,re=a[2]("version")+"",q,Z,ce,se=a[0].sml_version+"",T,ve,le,k,$,N=a[2]("stability")+"",Q,Y,H,W=a[0].stability+"",ae,ee,Ce,fe,$e,we=a[2]("size")+"",xe,Re,He,be=ft(a[0].size)+"",Ie,Be,ze,de,Ve,Ee=a[2]("hash")+"",Ne,Ge,Ue,ye=a[0].hash+"",Te;return{c(){e=m("div"),l=m("section"),t=m("div"),r=m("h3"),r.textContent=n,d=y(),i=m("span"),c=m("strong"),f=b(h),o=b(":"),v=y(),D=b(p),U=m("br"),_=y(),P=m("span"),I=m("strong"),K=b(te),pe=b(":"),oe=y(),j=b(z),ie=m("br"),G=y(),C=m("span"),X=m("strong"),J=b("SML "),q=b(re),Z=b(":"),ce=y(),T=b(se),ve=m("br"),le=y(),k=m("span"),$=m("strong"),Q=b(N),Y=b(":"),H=y(),ae=b(W),ee=m("br"),Ce=y(),fe=m("span"),$e=m("strong"),xe=b(we),Re=b(":"),He=y(),Ie=b(be),Be=m("br"),ze=y(),de=m("span"),Ve=m("strong"),Ne=b(Ee),Ge=b(":"),Ue=y(),Te=b(ye),this.h()},l(O){e=g(O,"DIV",{class:!0});var L=V(e);l=g(L,"SECTION",{});var rt=V(l);t=g(rt,"DIV",{class:!0});var A=V(t);r=g(A,"H3",{class:!0,"data-svelte-h":!0}),ne(r)!=="svelte-1p1x4o5"&&(r.textContent=n),d=x(A),i=g(A,"SPAN",{});var Se=V(i);c=g(Se,"STRONG",{});var je=V(c);f=E(je,h),o=E(je,":"),je.forEach(u),v=x(Se),D=E(Se,p),Se.forEach(u),U=g(A,"BR",{}),_=x(A),P=g(A,"SPAN",{});var De=V(P);I=g(De,"STRONG",{});var qe=V(I);K=E(qe,te),pe=E(qe,":"),qe.forEach(u),oe=x(De),j=E(De,z),De.forEach(u),ie=g(A,"BR",{}),G=x(A),C=g(A,"SPAN",{});var ke=V(C);X=g(ke,"STRONG",{});var Ae=V(X);J=E(Ae,"SML "),q=E(Ae,re),Z=E(Ae,":"),Ae.forEach(u),ce=x(ke),T=E(ke,se),ke.forEach(u),ve=g(A,"BR",{}),le=x(A),k=g(A,"SPAN",{});var Me=V(k);$=g(Me,"STRONG",{});var Qe=V($);Q=E(Qe,N),Y=E(Qe,":"),Qe.forEach(u),H=x(Me),ae=E(Me,W),Me.forEach(u),ee=g(A,"BR",{}),Ce=x(A),fe=g(A,"SPAN",{});var Oe=V(fe);$e=g(Oe,"STRONG",{});var We=V($e);xe=E(We,we),Re=E(We,":"),We.forEach(u),He=x(Oe),Ie=E(Oe,be),Oe.forEach(u),Be=g(A,"BR",{}),ze=x(A),de=g(A,"SPAN",{});var Pe=V(de);Ve=g(Pe,"STRONG",{});var Fe=V(Ve);Ne=E(Fe,Ee),Ge=E(Fe,":"),Fe.forEach(u),Ue=x(Pe),Te=E(Pe,ye),Pe.forEach(u),A.forEach(u),rt.forEach(u),L.forEach(u),this.h()},h(){w(r,"class","my-4 text-2xl font-bold"),w(t,"class","break-words text-lg"),w(e,"class","card p-4")},m(O,L){M(O,e,L),s(e,l),s(l,t),s(t,r),s(t,d),s(t,i),s(i,c),s(c,f),s(c,o),s(i,v),s(i,D),s(t,U),s(t,_),s(t,P),s(P,I),s(I,K),s(I,pe),s(P,oe),s(P,j),s(t,ie),s(t,G),s(t,C),s(C,X),s(X,J),s(X,q),s(X,Z),s(C,ce),s(C,T),s(t,ve),s(t,le),s(t,k),s(k,$),s($,Q),s($,Y),s(k,H),s(k,ae),s(t,ee),s(t,Ce),s(t,fe),s(fe,$e),s($e,xe),s($e,Re),s(fe,He),s(fe,Ie),s(t,Be),s(t,ze),s(t,de),s(de,Ve),s(Ve,Ne),s(Ve,Ge),s(de,Ue),s(de,Te)},p(O,[L]){L&4&&h!==(h=O[2]("entry.created-at")+"")&&R(f,h),L&1&&p!==(p=it(O[0].created_at)+"")&&R(D,p),L&4&&te!==(te=O[2]("downloads")+"")&&R(K,te),L&1&&z!==(z=ct(O[0].downloads)+"")&&R(j,z),L&4&&re!==(re=O[2]("version")+"")&&R(q,re),L&1&&se!==(se=O[0].sml_version+"")&&R(T,se),L&4&&N!==(N=O[2]("stability")+"")&&R(Q,N),L&1&&W!==(W=O[0].stability+"")&&R(ae,W),L&4&&we!==(we=O[2]("size")+"")&&R(xe,we),L&1&&be!==(be=ft(O[0].size)+"")&&R(Ie,be),L&4&&Ee!==(Ee=O[2]("hash")+"")&&R(Ne,Ee),L&1&&ye!==(ye=O[0].hash+"")&&R(Te,ye)},i:S,o:S,d(O){O&&u(e)}}}function Kt(a,e,l){let t,r=S,n=()=>(r(),r=Et(i,c=>l(2,t=c)),i);a.$$.on_destroy.push(()=>r());let{version:d}=e;const{t:i}=bt();return n(),a.$$set=c=>{"version"in c&&l(0,d=c.version)},[d,i,t]}class Xt extends Ze{constructor(e){super(),et(this,e,Kt,Jt,tt,{version:0,t:1})}get t(){return this.$$.ctx[1]}}function ht(a,e,l){const t=a.slice();return t[15]=e[l],t}function mt(a){let e,l;return e=new _t({props:{description:"Information for mod version "+a[0].data.getVersion.mod.name+" "+a[0].data.getVersion.version,title:"Mod version "+a[0].data.getVersion.mod.name+" "+a[0].data.getVersion.version}}),{c(){ue(e.$$.fragment)},l(t){he(e.$$.fragment,t)},m(t,r){me(e,t,r),l=!0},p(t,r){const n={};r&1&&(n.description="Information for mod version "+t[0].data.getVersion.mod.name+" "+t[0].data.getVersion.version),r&1&&(n.title="Mod version "+t[0].data.getVersion.mod.name+" "+t[0].data.getVersion.version),e.$set(n)},i(t){l||(B(e.$$.fragment,t),l=!0)},o(t){F(e.$$.fragment,t),l=!1},d(t){ge(e,t)}}}function Yt(a){let e,l;return e=new zt({}),{c(){ue(e.$$.fragment)},l(t){he(e.$$.fragment,t)},m(t,r){me(e,t,r),l=!0},p:S,i(t){l||(B(e.$$.fragment,t),l=!0)},o(t){F(e.$$.fragment,t),l=!1},d(t){ge(e,t)}}}function Zt(a){let e,l,t,r=a[0].data.getVersion.mod.name+"",n,d,i=a[0].data.getVersion.version+"",c,h,f,o,v,p,D='<span class="material-icons">download</span> <span>Install</span>',U,_,P,I="extension",te,K,pe="Back to Mod",oe,z,j,ie,G,C,X,J,re,q,Z,ce,se,T=a[1]&&gt(a);function ve($,N){return $[0].data.getVersion.targets.length!=0?ar:rr}let le=ve(a),k=le(a);return j=new Ft({props:{changelog:a[0].data.getVersion.changelog,approved:a[0].data.getVersion.approved}}),C=new Xt({props:{version:a[0].data.getVersion}}),J=new Ht({props:{targets:a[0].data.getVersion.targets}}),q=new Bt({props:{dependencies:a[0].data.getVersion.dependencies}}),{c(){e=m("div"),l=m("div"),t=m("h1"),n=b(r),d=b(`
        Version `),c=b(i),h=y(),f=m("div"),T&&T.c(),o=y(),k.c(),v=y(),p=m("button"),p.innerHTML=D,U=y(),_=m("a"),P=m("span"),P.textContent=I,te=y(),K=m("span"),K.textContent=pe,oe=y(),z=m("div"),ue(j.$$.fragment),ie=y(),G=m("div"),ue(C.$$.fragment),X=y(),ue(J.$$.fragment),re=y(),ue(q.$$.fragment),this.h()},l($){e=g($,"DIV",{class:!0});var N=V(e);l=g(N,"DIV",{class:!0});var Q=V(l);t=g(Q,"H1",{class:!0});var Y=V(t);n=E(Y,r),d=E(Y,`
        Version `),c=E(Y,i),Y.forEach(u),h=x(Q),f=g(Q,"DIV",{class:!0});var H=V(f);T&&T.l(H),o=x(H),k.l(H),v=x(H),p=g(H,"BUTTON",{class:!0,title:!0,"data-svelte-h":!0}),ne(p)!=="svelte-l1aktc"&&(p.innerHTML=D),U=x(H),_=g(H,"A",{class:!0,href:!0,title:!0});var W=V(_);P=g(W,"SPAN",{class:!0,"data-svelte-h":!0}),ne(P)!=="svelte-y4psqu"&&(P.textContent=I),te=x(W),K=g(W,"SPAN",{"data-svelte-h":!0}),ne(K)!=="svelte-1tvol36"&&(K.textContent=pe),W.forEach(u),H.forEach(u),Q.forEach(u),oe=x(N),z=g(N,"DIV",{class:!0});var ae=V(z);he(j.$$.fragment,ae),ie=x(ae),G=g(ae,"DIV",{class:!0});var ee=V(G);he(C.$$.fragment,ee),X=x(ee),he(J.$$.fragment,ee),re=x(ee),he(q.$$.fragment,ee),ee.forEach(u),ae.forEach(u),N.forEach(u),this.h()},h(){w(t,"class","text-4xl font-bold"),w(p,"class","variant-ghost-primary btn"),w(p,"title","Install via Satisfactory Mod Manager"),w(P,"class","material-icons"),w(_,"class","variant-ghost-primary btn"),w(_,"href",_e+"/mod/"+a[2]),w(_,"title","View the description page for this mod"),w(f,"class","grid grid-flow-col gap-4"),w(l,"class","flex h-auto flex-wrap items-center justify-between"),w(G,"class","grid auto-rows-min grid-cols-1 gap-8"),w(z,"class","grid-auto-max grid auto-cols-fr gap-4"),w(e,"class","grid gap-6 xlx:grid-flow-row")},m($,N){M($,e,N),s(e,l),s(l,t),s(t,n),s(t,d),s(t,c),s(l,h),s(l,f),T&&T.m(f,null),s(f,o),k.m(f,null),s(f,v),s(f,p),s(f,U),s(f,_),s(_,P),s(_,te),s(_,K),s(e,oe),s(e,z),me(j,z,null),s(z,ie),s(z,G),me(C,G,null),s(G,X),me(J,G,null),s(G,re),me(q,G,null),Z=!0,ce||(se=Xe(p,"click",a[11]),ce=!0)},p($,N){(!Z||N&1)&&r!==(r=$[0].data.getVersion.mod.name+"")&&R(n,r),(!Z||N&1)&&i!==(i=$[0].data.getVersion.version+"")&&R(c,i),$[1]?T?T.p($,N):(T=gt($),T.c(),T.m(f,o)):T&&(T.d(1),T=null),le===(le=ve($))&&k?k.p($,N):(k.d(1),k=le($),k&&(k.c(),k.m(f,v)));const Q={};N&1&&(Q.changelog=$[0].data.getVersion.changelog),N&1&&(Q.approved=$[0].data.getVersion.approved),j.$set(Q);const Y={};N&1&&(Y.version=$[0].data.getVersion),C.$set(Y);const H={};N&1&&(H.targets=$[0].data.getVersion.targets),J.$set(H);const W={};N&1&&(W.dependencies=$[0].data.getVersion.dependencies),q.$set(W)},i($){Z||(B(j.$$.fragment,$),B(C.$$.fragment,$),B(J.$$.fragment,$),B(q.$$.fragment,$),Z=!0)},o($){F(j.$$.fragment,$),F(C.$$.fragment,$),F(J.$$.fragment,$),F(q.$$.fragment,$),Z=!1},d($){$&&u(e),T&&T.d(),k.d(),ge(j),ge(C),ge(J),ge(q),ce=!1,se()}}}function er(a){let e,l,t=a[0].error.message+"",r;return{c(){e=m("p"),l=b("Oh no... "),r=b(t)},l(n){e=g(n,"P",{});var d=V(e);l=E(d,"Oh no... "),r=E(d,t),d.forEach(u)},m(n,d){M(n,e,d),s(e,l),s(e,r)},p(n,d){d&1&&t!==(t=n[0].error.message+"")&&R(r,t)},i:S,o:S,d(n){n&&u(e)}}}function tr(a){let e,l="Loading...";return{c(){e=m("p"),e.textContent=l},l(t){e=g(t,"P",{"data-svelte-h":!0}),ne(e)!=="svelte-qdsr2u"&&(e.textContent=l)},m(t,r){M(t,e,r)},p:S,i:S,o:S,d(t){t&&u(e)}}}function gt(a){let e,l=`<span class="material-icons pr-2">edit_document</span>
            Edit`,t,r,n=`<span class="material-icons pr-2">delete</span>
            Delete`,d,i;return{c(){e=m("button"),e.innerHTML=l,t=y(),r=m("button"),r.innerHTML=n,this.h()},l(c){e=g(c,"BUTTON",{class:!0,"data-svelte-h":!0}),ne(e)!=="svelte-1ef722b"&&(e.innerHTML=l),t=x(c),r=g(c,"BUTTON",{class:!0,"data-svelte-h":!0}),ne(r)!=="svelte-1tg2z3n"&&(r.innerHTML=n),this.h()},h(){w(e,"class","variant-ghost-primary btn"),w(r,"class","variant-ghost-primary btn")},m(c,h){M(c,e,h),M(c,t,h),M(c,r,h),d||(i=[Xe(e,"click",a[9]),Xe(r,"click",a[10])],d=!0)},p:S,d(c){c&&(u(e),u(t),u(r)),d=!1,Tt(i)}}}function rr(a){let e,l,t,r,n;return{c(){e=m("a"),l=b("View"),t=y(),r=m("a"),n=b("Download"),this.h()},l(d){e=g(d,"A",{class:!0,href:!0});var i=V(e);l=E(i,"View"),i.forEach(u),t=x(d),r=g(d,"A",{class:!0,href:!0});var c=V(r);n=E(c,"Download"),c.forEach(u),this.h()},h(){w(e,"class","variant-ghost-primary btn"),w(e,"href",_e+"/mod/"+a[2]+"/version/"+a[3]),w(r,"class","variant-ghost-primary btn"),w(r,"href",Ye+"/mod/"+a[2]+"/versions/"+a[3]+"/download")},m(d,i){M(d,e,i),s(e,l),M(d,t,i),M(d,r,i),s(r,n)},p:S,d(d){d&&(u(e),u(t),u(r))}}}function ar(a){let e,l='<span>Download...</span> <span class="material-icons" style="margin: 0;">arrow_drop_down</span>',t,r,n,d,i,c,h=nt(a[0].data.getVersion.targets),f=[];for(let o=0;o<h.length;o+=1)f[o]=pt(ht(a,h,o));return{c(){e=m("button"),e.innerHTML=l,t=y(),r=m("div"),n=m("nav"),d=m("ul");for(let o=0;o<f.length;o+=1)f[o].c();this.h()},l(o){e=g(o,"BUTTON",{class:!0,title:!0,"data-svelte-h":!0}),ne(e)!=="svelte-vdo5bu"&&(e.innerHTML=l),t=x(o),r=g(o,"DIV",{class:!0,"data-popup":!0});var v=V(r);n=g(v,"NAV",{class:!0});var p=V(n);d=g(p,"UL",{});var D=V(d);for(let U=0;U<f.length;U+=1)f[U].l(D);D.forEach(u),p.forEach(u),v.forEach(u),this.h()},h(){w(e,"class","variant-ghost-primary btn"),w(e,"title","Download a specific release target of this mod"),w(n,"class","list-nav"),w(r,"class","card z-10 w-72 shadow-xl"),w(r,"data-popup","versionArchDropdown")},m(o,v){M(o,e,v),M(o,t,v),M(o,r,v),s(r,n),s(n,d);for(let p=0;p<f.length;p+=1)f[p]&&f[p].m(d,null);i||(c=St(Dt.call(null,e,{event:"focus-click",target:"versionArchDropdown",placement:"bottom",closeQuery:"a"})),i=!0)},p(o,v){if(v&13){h=nt(o[0].data.getVersion.targets);let p;for(p=0;p<h.length;p+=1){const D=ht(o,h,p);f[p]?f[p].p(D,v):(f[p]=pt(D),f[p].c(),f[p].m(d,null))}for(;p<f.length;p+=1)f[p].d(1);f.length=h.length}},d(o){o&&(u(e),u(t),u(r)),kt(f,o),i=!1,c()}}}function pt(a){let e,l,t,r,n=dt(a[15].targetName)+"",d,i,c;return{c(){e=m("li"),l=m("a"),t=m("span"),r=b("Download "),d=b(n),c=y(),this.h()},l(h){e=g(h,"LI",{});var f=V(e);l=g(f,"A",{class:!0,href:!0});var o=V(l);t=g(o,"SPAN",{});var v=V(t);r=E(v,"Download "),d=E(v,n),v.forEach(u),o.forEach(u),c=x(f),f.forEach(u),this.h()},h(){w(l,"class","w-full"),w(l,"href",i=Ye+"/mod/"+a[2]+"/versions/"+a[3]+"/"+a[15].targetName+"/download")},m(h,f){M(h,e,f),s(e,l),s(l,t),s(t,r),s(t,d),s(e,c)},p(h,f){f&1&&n!==(n=dt(h[15].targetName)+"")&&R(d,n),f&1&&i!==(i=Ye+"/mod/"+h[2]+"/versions/"+h[3]+"/"+h[15].targetName+"/download")&&w(l,"href",i)},d(h){h&&u(e)}}}function sr(a){let e,l,t,r,n,d,i=!a[0].fetching&&!a[0].error&&a[0].data.getVersion&&mt(a);const c=[tr,er,Zt,Yt],h=[];function f(o,v){return o[0].fetching?0:o[0].error?1:o[0].data.getVersion?2:3}return t=f(a),r=h[t]=c[t](a),{c(){i&&i.c(),e=Le(),l=y(),r.c(),n=Le()},l(o){const v=yt("svelte-7zfw29",document.head);i&&i.l(v),e=Le(),v.forEach(u),l=x(o),r.l(o),n=Le()},m(o,v){i&&i.m(document.head,null),s(document.head,e),M(o,l,v),h[t].m(o,v),M(o,n,v),d=!0},p(o,[v]){!o[0].fetching&&!o[0].error&&o[0].data.getVersion?i?(i.p(o,v),v&1&&B(i,1)):(i=mt(o),i.c(),B(i,1),i.m(e.parentNode,e)):i&&(Je(),F(i,1,1,()=>{i=null}),Ke());let p=t;t=f(o),t===p?h[t].p(o,v):(Je(),F(h[p],1,1,()=>{h[p]=null}),Ke(),r=h[t],r?r.p(o,v):(r=h[t]=c[t](o),r.c()),B(r,1),r.m(n.parentNode,n))},i(o){d||(B(i),B(r),d=!0)},o(o){F(i),F(r),d=!1},d(o){o&&(u(l),u(n)),i&&i.d(o),u(e),h[t].d(o)}}}function lr(a,e,l){let t,r,n;st(a,Ct,I=>l(8,r=I));let{data:d}=e;const{modId:i,versionId:c,version:h}=d;st(a,h,I=>l(0,n=I));const f=xt(),o=It(),v=()=>{f.mutation(Ot,{versionId:c}).toPromise().then(I=>{I.error?(console.error(I.error.message),o.trigger({message:"Error deleting version: "+I.error.message,background:"variant-filled-error",autohide:!1})):(o.trigger({message:"Version deleted",background:"variant-filled-success",timeout:5e3}),lt(_e+"/mod/"+i))})},p={type:"confirm",title:"Delete Version?",body:"Are you sure you wish to delete this version?",response:I=>{I&&v()}},D=Nt(),U=()=>lt(_e+"/mod/"+i+"/version/"+c+"/edit"),_=()=>D.trigger(p),P=()=>Rt(n.data.getVersion.mod.mod_reference);return a.$$set=I=>{"data"in I&&l(7,d=I.data)},a.$$.update=()=>{a.$$.dirty&257&&l(1,t=r?.roles?.deleteContent||n?.data?.getVersion.mod?.authors?.findIndex(I=>I.user_id==r?.id)>=0)},[n,t,i,c,h,p,D,d,r,U,_,P]}class Vr extends Ze{constructor(e){super(),et(this,e,lr,sr,tt,{data:7})}}export{Vr as component,$r as universal};
//# sourceMappingURL=19.kbZ70awI.js.map
