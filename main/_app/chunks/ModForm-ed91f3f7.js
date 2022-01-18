import{aY as Ke,aZ as fe,b5 as Ze,b6 as ht,b7 as vt,S as Qe,i as xe,s as et,l as Ve,g as q,Z as F,d as u,R as bt,P as tt,T as wt,aL as kt,e as p,t as R,c as $,a as b,h as B,b as g,X as o,k as V,m as I,j as J,a_ as ce,M as de,N as _e,a$ as me,aR as st,w as N,x as U,y as L,q as w,o as D,B as M,n as Ie,p as Ae,O as ge,a3 as Et,Y as ze,b0 as Dt,aS as St,b1 as Vt,b2 as It,b3 as At,b8 as Pt,an as at}from"./vendor-3f5cbc3a.js";import{t as qt}from"./forms-b4347bf1.js";import{m as nt}from"./markdown-5ff4796f.js";import{h as Tt}from"./graphql-a19cc583.js";import{a as lt}from"./paths-396f020f.js";const rt=Ke({name:fe().min(3).max(32),mod_reference:fe().min(3).max(32).regex(/^([a-zA-Z][a-zA-Z0-9_]*)$/).refine(async()=>!0),short_description:fe().min(16).max(128),full_description:Ze(fe()),logo:Ze(ht().refine(n=>"name"in n&&"size"in n&&"type"in n)),source_url:fe().url().optional().or(vt("")),authors:Ze(Ke({role:fe(),user_id:fe()}).array())});function Nt(n){let e,t;return{c(){e=p("p"),t=R("Unknown User ID"),this.h()},l(s){e=$(s,"P",{class:!0});var a=b(e);t=B(a,"Unknown User ID"),a.forEach(u),this.h()},h(){g(e,"class","mr-2 whitespace-nowrap")},m(s,a){q(s,e,a),o(e,t)},p:F,d(s){s&&u(e)}}}function Ut(n){let e,t,s,a,l,f,S=n[0].data.getUser.username+"",m;return{c(){e=p("div"),t=p("div"),a=V(),l=p("div"),f=p("span"),m=R(S),this.h()},l(k){e=$(k,"DIV",{class:!0});var i=b(e);t=$(i,"DIV",{class:!0,style:!0}),b(t).forEach(u),a=I(i),l=$(i,"DIV",{class:!0});var h=b(l);f=$(h,"SPAN",{class:!0});var c=b(f);m=B(c,S),c.forEach(u),h.forEach(u),i.forEach(u),this.h()},h(){g(t,"class","rounded-full bg-cover w-7 h-7"),g(t,"style",s=`background-image: url("${n[0].data.getUser.avatar||lt+"/images/no_image.png"}")`),g(f,"class","text-yellow-500"),g(l,"class","grid grid-flow-row"),g(e,"class","grid grid-flow-col auto-cols-max gap-x-2 mr-2")},m(k,i){q(k,e,i),o(e,t),o(e,a),o(e,l),o(l,f),o(f,m)},p(k,i){i&1&&s!==(s=`background-image: url("${k[0].data.getUser.avatar||lt+"/images/no_image.png"}")`)&&g(t,"style",s),i&1&&S!==(S=k[0].data.getUser.username+"")&&J(m,S)},d(k){k&&u(e)}}}function Lt(n){let e,t,s=n[0].error.message+"",a;return{c(){e=p("p"),t=R("Oh no... "),a=R(s),this.h()},l(l){e=$(l,"P",{class:!0});var f=b(e);t=B(f,"Oh no... "),a=B(f,s),f.forEach(u),this.h()},h(){g(e,"class","mr-2")},m(l,f){q(l,e,f),o(e,t),o(e,a)},p(l,f){f&1&&s!==(s=l[0].error.message+"")&&J(a,s)},d(l){l&&u(e)}}}function Mt(n){let e,t;return{c(){e=p("p"),t=R("Loading..."),this.h()},l(s){e=$(s,"P",{class:!0});var a=b(e);t=B(a,"Loading..."),a.forEach(u),this.h()},h(){g(e,"class","mr-2")},m(s,a){q(s,e,a),o(e,t)},p:F,d(s){s&&u(e)}}}function jt(n){let e;function t(l,f){return l[0].fetching?Mt:l[0].error?Lt:l[0].data.getUser?Ut:Nt}let s=t(n),a=s(n);return{c(){a.c(),e=Ve()},l(l){a.l(l),e=Ve()},m(l,f){a.m(l,f),q(l,e,f)},p(l,[f]){s===(s=t(l))&&a?a.p(l,f):(a.d(1),a=s(l),a&&(a.c(),a.m(e.parentNode,e)))},i:F,o:F,d(l){a.d(l),l&&u(e)}}}function Rt(n,e,t){let s,{id:a}=e;const l=bt(Tt,{user:a});return tt(n,l,f=>t(0,s=f)),wt(l),n.$$set=f=>{"id"in f&&t(2,a=f.id)},n.$$.update=()=>{n.$$.dirty&5&&(kt(l,s.variables.user=a,s),s.reexecute())},[s,l,a]}class Bt extends Qe{constructor(e){super();xe(this,e,Rt,jt,et,{id:2})}}function it(n,e,t){const s=n.slice();return s[17]=e[t],s[18]=e,s[19]=t,s}function Ft(n){let e,t=(n[20]||"")+"",s;return{c(){e=p("span"),s=R(t),this.h()},l(a){e=$(a,"SPAN",{class:!0});var l=b(e);s=B(l,t),l.forEach(u),this.h()},h(){g(e,"class","validation-message")},m(a,l){q(a,e,l),o(e,s)},p(a,l){l&1048576&&t!==(t=(a[20]||"")+"")&&J(s,t)},d(a){a&&u(e)}}}function ot(n){let e;return{c(){e=R(`Warning! You will not be able to change this after creating the mod! Please ensure this is a unique modifier
            that closely matches the name of your mod!`)},l(t){e=B(t,`Warning! You will not be able to change this after creating the mod! Please ensure this is a unique modifier
            that closely matches the name of your mod!`)},m(t,s){q(t,e,s)},d(t){t&&u(e)}}}function Ht(n){let e,t=!n[1]&&ot();return{c(){t&&t.c(),e=Ve()},l(s){t&&t.l(s),e=Ve()},m(s,a){t&&t.m(s,a),q(s,e,a)},p(s,a){s[1]?t&&(t.d(1),t=null):t||(t=ot(),t.c(),t.m(e.parentNode,e))},d(s){t&&t.d(s),s&&u(e)}}}function Ot(n){let e,t;return e=new Pt({props:{persistent:!n[1],slot:"helper",$$slots:{default:[Ht]},$$scope:{ctx:n}}}),{c(){N(e.$$.fragment)},l(s){U(e.$$.fragment,s)},m(s,a){L(e,s,a),t=!0},p(s,a){const l={};a&2&&(l.persistent=!s[1]),a&4194306&&(l.$$scope={dirty:a,ctx:s}),e.$set(l)},i(s){t||(w(e.$$.fragment,s),t=!0)},o(s){D(e.$$.fragment,s),t=!1},d(s){M(e,s)}}}function Yt(n){let e,t=(n[20]||"")+"",s;return{c(){e=p("span"),s=R(t),this.h()},l(a){e=$(a,"SPAN",{class:!0});var l=b(e);s=B(l,t),l.forEach(u),this.h()},h(){g(e,"class","validation-message")},m(a,l){q(a,e,l),o(e,s)},p(a,l){l&1048576&&t!==(t=(a[20]||"")+"")&&J(s,t)},d(a){a&&u(e)}}}function Zt(n){let e,t=(n[20]||"")+"",s;return{c(){e=p("span"),s=R(t),this.h()},l(a){e=$(a,"SPAN",{class:!0});var l=b(e);s=B(l,t),l.forEach(u),this.h()},h(){g(e,"class","validation-message")},m(a,l){q(a,e,l),o(e,s)},p(a,l){l&1048576&&t!==(t=(a[20]||"")+"")&&J(s,t)},d(a){a&&u(e)}}}function zt(n){let e,t=(n[20]||"")+"",s;return{c(){e=p("span"),s=R(t),this.h()},l(a){e=$(a,"SPAN",{class:!0});var l=b(e);s=B(l,t),l.forEach(u),this.h()},h(){g(e,"class","validation-message")},m(a,l){q(a,e,l),o(e,s)},p(a,l){l&1048576&&t!==(t=(a[20]||"")+"")&&J(s,t)},d(a){a&&u(e)}}}function Ct(n){return{c:F,l:F,m:F,p:F,d:F}}function Wt(n){let e,t=n[21]+"";return{c(){e=p("div"),this.h()},l(s){e=$(s,"DIV",{class:!0});var a=b(e);a.forEach(u),this.h()},h(){g(e,"class","markdown-content right svelte-k92wki")},m(s,a){q(s,e,a),e.innerHTML=t},p(s,a){a&8&&t!==(t=s[21]+"")&&(e.innerHTML=t)},d(s){s&&u(e)}}}function Gt(n){return{c:F,l:F,m:F,p:F,d:F}}function Xt(n){let e,t=(n[20]||"")+"",s;return{c(){e=p("span"),s=R(t),this.h()},l(a){e=$(a,"SPAN",{class:!0});var l=b(e);s=B(l,t),l.forEach(u),this.h()},h(){g(e,"class","validation-message")},m(a,l){q(a,e,l),o(e,s)},p(a,l){l&1048576&&t!==(t=(a[20]||"")+"")&&J(s,t)},d(a){a&&u(e)}}}function yt(n){let e,t=(n[20]||"")+"",s;return{c(){e=p("span"),s=R(t),this.h()},l(a){e=$(a,"SPAN",{class:!0});var l=b(e);s=B(l,t),l.forEach(u),this.h()},h(){g(e,"class","validation-message")},m(a,l){q(a,e,l),o(e,s)},p(a,l){l&1048576&&t!==(t=(a[20]||"")+"")&&J(s,t)},d(a){a&&u(e)}}}function ft(n){let e,t,s,a,l,f,S,m;f=new ze({props:{type:"button",$$slots:{default:[Kt]},$$scope:{ctx:n}}}),f.$on("click",n[6]);let k=n[2].authors,i=[];for(let c=0;c<k.length;c+=1)i[c]=dt(it(n,k,c));const h=c=>D(i[c],1,1,()=>{i[c]=null});return{c(){e=p("div"),t=p("div"),s=p("h4"),a=R("Authors"),l=V(),N(f.$$.fragment),S=V();for(let c=0;c<i.length;c+=1)i[c].c();this.h()},l(c){e=$(c,"DIV",{class:!0});var d=b(e);t=$(d,"DIV",{class:!0});var A=b(t);s=$(A,"H4",{class:!0});var E=b(s);a=B(E,"Authors"),E.forEach(u),l=I(A),U(f.$$.fragment,A),A.forEach(u),S=I(d);for(let j=0;j<i.length;j+=1)i[j].l(d);d.forEach(u),this.h()},h(){g(s,"class","mr-4"),g(t,"class","flex items-baseline"),g(e,"class","grid grid-flow-row gap-2")},m(c,d){q(c,e,d),o(e,t),o(t,s),o(s,a),o(t,l),L(f,t,null),o(e,S);for(let A=0;A<i.length;A+=1)i[A].m(e,null);m=!0},p(c,d){const A={};if(d&4194304&&(A.$$scope={dirty:d,ctx:c}),f.$set(A),d&132){k=c[2].authors;let E;for(E=0;E<k.length;E+=1){const j=it(c,k,E);i[E]?(i[E].p(j,d),w(i[E],1)):(i[E]=dt(j),i[E].c(),w(i[E],1),i[E].m(e,null))}for(Ie(),E=k.length;E<i.length;E+=1)h(E);Ae()}},i(c){if(!m){w(f.$$.fragment,c);for(let d=0;d<k.length;d+=1)w(i[d]);m=!0}},o(c){D(f.$$.fragment,c),i=i.filter(Boolean);for(let d=0;d<i.length;d+=1)D(i[d]);m=!1},d(c){c&&u(e),M(f),Et(i,c)}}}function Jt(n){let e;return{c(){e=R("Add")},l(t){e=B(t,"Add")},m(t,s){q(t,e,s)},d(t){t&&u(e)}}}function Kt(n){let e,t;return e=new at({props:{$$slots:{default:[Jt]},$$scope:{ctx:n}}}),{c(){N(e.$$.fragment)},l(s){U(e.$$.fragment,s)},m(s,a){L(e,s,a),t=!0},p(s,a){const l={};a&4194304&&(l.$$scope={dirty:a,ctx:s}),e.$set(l)},i(s){t||(w(e.$$.fragment,s),t=!0)},o(s){D(e.$$.fragment,s),t=!1},d(s){M(e,s)}}}function ut(n){let e,t;return e=new Bt({props:{id:n[2].authors[n[19]].user_id}}),{c(){N(e.$$.fragment)},l(s){U(e.$$.fragment,s)},m(s,a){L(e,s,a),t=!0},p(s,a){const l={};a&4&&(l.id=s[2].authors[s[19]].user_id),e.$set(l)},i(s){t||(w(e.$$.fragment,s),t=!0)},o(s){D(e.$$.fragment,s),t=!1},d(s){M(e,s)}}}function ct(n){let e,t;function s(){return n[16](n[19])}return e=new ze({props:{type:"button",variant:"raised",$$slots:{default:[xt]},$$scope:{ctx:n}}}),e.$on("click",s),{c(){N(e.$$.fragment)},l(a){U(e.$$.fragment,a)},m(a,l){L(e,a,l),t=!0},p(a,l){n=a;const f={};l&4194304&&(f.$$scope={dirty:l,ctx:n}),e.$set(f)},i(a){t||(w(e.$$.fragment,a),t=!0)},o(a){D(e.$$.fragment,a),t=!1},d(a){M(e,a)}}}function Qt(n){let e;return{c(){e=R("Remove")},l(t){e=B(t,"Remove")},m(t,s){q(t,e,s)},d(t){t&&u(e)}}}function xt(n){let e,t;return e=new at({props:{$$slots:{default:[Qt]},$$scope:{ctx:n}}}),{c(){N(e.$$.fragment)},l(s){U(e.$$.fragment,s)},m(s,a){L(e,s,a),t=!0},p(s,a){const l={};a&4194304&&(l.$$scope={dirty:a,ctx:s}),e.$set(l)},i(s){t||(w(e.$$.fragment,s),t=!0)},o(s){D(e.$$.fragment,s),t=!1},d(s){M(e,s)}}}function dt(n){let e,t,s,a,l,f,S,m=n[2].authors[n[19]].user_id&&ut(n);function k(c){n[15](c,n[19])}let i={label:"User ID",class:"mr-4 w-full",disabled:n[17].role==="creator"};n[2].authors[n[19]].user_id!==void 0&&(i.value=n[2].authors[n[19]].user_id),s=new ce({props:i}),de.push(()=>_e(s,"value",k));let h=n[17].role!=="creator"&&ct(n);return{c(){e=p("div"),m&&m.c(),t=V(),N(s.$$.fragment),l=V(),h&&h.c(),f=V(),this.h()},l(c){e=$(c,"DIV",{class:!0});var d=b(e);m&&m.l(d),t=I(d),U(s.$$.fragment,d),l=I(d),h&&h.l(d),f=I(d),d.forEach(u),this.h()},h(){g(e,"class","flex items-baseline")},m(c,d){q(c,e,d),m&&m.m(e,null),o(e,t),L(s,e,null),o(e,l),h&&h.m(e,null),o(e,f),S=!0},p(c,d){n=c,n[2].authors[n[19]].user_id?m?(m.p(n,d),d&4&&w(m,1)):(m=ut(n),m.c(),w(m,1),m.m(e,t)):m&&(Ie(),D(m,1,1,()=>{m=null}),Ae());const A={};d&4&&(A.disabled=n[17].role==="creator"),!a&&d&4&&(a=!0,A.value=n[2].authors[n[19]].user_id,ge(()=>a=!1)),s.$set(A),n[17].role!=="creator"?h?(h.p(n,d),d&4&&w(h,1)):(h=ct(n),h.c(),w(h,1),h.m(e,f)):h&&(Ie(),D(h,1,1,()=>{h=null}),Ae())},i(c){S||(w(m),w(s.$$.fragment,c),w(h),S=!0)},o(c){D(m),D(s.$$.fragment,c),D(h),S=!1},d(c){c&&u(e),m&&m.d(),M(s),h&&h.d()}}}function es(n){let e;return{c(){e=R(n[0])},l(t){e=B(t,n[0])},m(t,s){q(t,e,s)},p(t,s){s&1&&J(e,t[0])},d(t){t&&u(e)}}}function ts(n){let e,t,s,a,l,f,S,m,k,i,h,c,d,A,E,j,pe,$e,Y,_,O,K,z,Pe,qe,Q,Te,C,he,Ne,Ue,Ee,Le,Z,ue,Me,je,W,Re,x,Be,ee,G,Fe,He,te,Oe,De,ve,se,Se,Ye,Ce;function _t(r){n[10](r)}let We={label:"Name",required:!0};n[2].name!==void 0&&(We.value=n[2].name),a=new ce({props:We}),de.push(()=>_e(a,"value",_t)),S=new me({props:{for:"name",$$slots:{default:[Ft,({messages:r})=>({20:r}),({messages:r})=>r?1048576:0]},$$scope:{ctx:n}}});function mt(r){n[11](r)}let Ge={label:"Mod Reference",required:!0,disabled:n[1],$$slots:{helper:[Ot]},$$scope:{ctx:n}};n[2].mod_reference!==void 0&&(Ge.value=n[2].mod_reference),i=new ce({props:Ge}),de.push(()=>_e(i,"value",mt)),d=new me({props:{for:"mod_reference",$$slots:{default:[Yt,({messages:r})=>({20:r}),({messages:r})=>r?1048576:0]},$$scope:{ctx:n}}});function gt(r){n[12](r)}let Xe={label:"Short Description",required:!0};n[2].short_description!==void 0&&(Xe.value=n[2].short_description),j=new ce({props:Xe}),de.push(()=>_e(j,"value",gt)),Y=new me({props:{for:"short_description",$$slots:{default:[Zt,({messages:r})=>({20:r}),({messages:r})=>r?1048576:0]},$$scope:{ctx:n}}});function pt(r){n[13](r)}let ye={textarea:!0,class:"vertical-textarea",label:"Full Description",required:!0,input$rows:10};n[2].full_description!==void 0&&(ye.value=n[2].full_description),z=new ce({props:ye}),de.push(()=>_e(z,"value",pt)),Q=new me({props:{for:"full_description",$$slots:{default:[zt,({messages:r})=>({20:r}),({messages:r})=>r?1048576:0]},$$scope:{ctx:n}}});let H={ctx:n,current:null,token:null,hasCatch:!1,pending:Gt,then:Wt,catch:Ct,value:21};st(Ee=nt(n[3]),H),x=new me({props:{for:"logo",$$slots:{default:[Xt,({messages:r})=>({20:r}),({messages:r})=>r?1048576:0]},$$scope:{ctx:n}}});function $t(r){n[14](r)}let Je={label:"Source URL"};n[2].source_url!==void 0&&(Je.value=n[2].source_url),G=new ce({props:Je}),de.push(()=>_e(G,"value",$t)),te=new me({props:{for:"source_url",$$slots:{default:[yt,({messages:r})=>({20:r}),({messages:r})=>r?1048576:0]},$$scope:{ctx:n}}});let P=n[1]&&ft(n);return se=new ze({props:{variant:"outlined",type:"submit",$$slots:{default:[es]},$$scope:{ctx:n}}}),{c(){e=p("form"),t=p("div"),s=p("div"),N(a.$$.fragment),f=V(),N(S.$$.fragment),m=V(),k=p("div"),N(i.$$.fragment),c=V(),N(d.$$.fragment),A=V(),E=p("div"),N(j.$$.fragment),$e=V(),N(Y.$$.fragment),_=V(),O=p("div"),K=p("div"),N(z.$$.fragment),qe=V(),N(Q.$$.fragment),Te=V(),C=p("div"),he=p("span"),Ne=R("Preview:"),Ue=V(),H.block.c(),Le=V(),Z=p("div"),ue=p("label"),Me=R("Logo:"),je=V(),W=p("input"),Re=V(),N(x.$$.fragment),Be=V(),ee=p("div"),N(G.$$.fragment),He=V(),N(te.$$.fragment),Oe=V(),P&&P.c(),De=V(),ve=p("div"),N(se.$$.fragment),this.h()},l(r){e=$(r,"FORM",{});var v=b(e);t=$(v,"DIV",{class:!0});var T=b(t);s=$(T,"DIV",{class:!0});var ae=b(s);U(a.$$.fragment,ae),f=I(ae),U(S.$$.fragment,ae),ae.forEach(u),m=I(T),k=$(T,"DIV",{class:!0});var X=b(k);U(i.$$.fragment,X),c=I(X),U(d.$$.fragment,X),X.forEach(u),A=I(T),E=$(T,"DIV",{class:!0});var ne=b(E);U(j.$$.fragment,ne),$e=I(ne),U(Y.$$.fragment,ne),ne.forEach(u),_=I(T),O=$(T,"DIV",{class:!0});var le=b(O);K=$(le,"DIV",{class:!0});var re=b(K);U(z.$$.fragment,re),qe=I(re),U(Q.$$.fragment,re),re.forEach(u),Te=I(le),C=$(le,"DIV",{class:!0});var ie=b(C);he=$(ie,"SPAN",{});var be=b(he);Ne=B(be,"Preview:"),be.forEach(u),Ue=I(ie),H.block.l(ie),ie.forEach(u),le.forEach(u),Le=I(T),Z=$(T,"DIV",{class:!0});var y=b(Z);ue=$(y,"LABEL",{for:!0});var we=b(ue);Me=B(we,"Logo:"),we.forEach(u),je=I(y),W=$(y,"INPUT",{id:!0,class:!0,name:!0,type:!0,accept:!0,placeholder:!0}),Re=I(y),U(x.$$.fragment,y),y.forEach(u),Be=I(T),ee=$(T,"DIV",{class:!0});var oe=b(ee);U(G.$$.fragment,oe),He=I(oe),U(te.$$.fragment,oe),oe.forEach(u),Oe=I(T),P&&P.l(T),De=I(T),ve=$(T,"DIV",{});var ke=b(ve);U(se.$$.fragment,ke),ke.forEach(u),T.forEach(u),v.forEach(u),this.h()},h(){g(s,"class","grid grid-flow-row gap-2"),g(k,"class","grid grid-flow-row gap-2"),g(E,"class","grid grid-flow-row gap-2"),g(K,"class","grid grid-flow-row gap-2 auto-rows-max"),g(C,"class","grid grid-flow-row gap-2 auto-rows-max"),g(O,"class","grid gap-6 split svelte-k92wki"),g(ue,"for","logo"),g(W,"id","logo"),g(W,"class","base-input"),g(W,"name","logo"),g(W,"type","file"),g(W,"accept","image/png,image/jpeg,image/gif"),g(W,"placeholder","Logo"),g(Z,"class","grid grid-flow-row gap-2"),g(ee,"class","grid grid-flow-row gap-2"),g(t,"class","grid grid-flow-row gap-6")},m(r,v){q(r,e,v),o(e,t),o(t,s),L(a,s,null),o(s,f),L(S,s,null),o(t,m),o(t,k),L(i,k,null),o(k,c),L(d,k,null),o(t,A),o(t,E),L(j,E,null),o(E,$e),L(Y,E,null),o(t,_),o(t,O),o(O,K),L(z,K,null),o(K,qe),L(Q,K,null),o(O,Te),o(O,C),o(C,he),o(he,Ne),o(C,Ue),H.block.m(C,H.anchor=null),H.mount=()=>C,H.anchor=null,o(t,Le),o(t,Z),o(Z,ue),o(ue,Me),o(Z,je),o(Z,W),o(Z,Re),L(x,Z,null),o(t,Be),o(t,ee),L(G,ee,null),o(ee,He),L(te,ee,null),o(t,Oe),P&&P.m(t,null),o(t,De),o(t,ve),L(se,ve,null),Se=!0,Ye||(Ce=Dt(n[4].call(null,e)),Ye=!0)},p(r,[v]){n=r;const T={};!l&&v&4&&(l=!0,T.value=n[2].name,ge(()=>l=!1)),a.$set(T);const ae={};v&5242880&&(ae.$$scope={dirty:v,ctx:n}),S.$set(ae);const X={};v&2&&(X.disabled=n[1]),v&4194306&&(X.$$scope={dirty:v,ctx:n}),!h&&v&4&&(h=!0,X.value=n[2].mod_reference,ge(()=>h=!1)),i.$set(X);const ne={};v&5242880&&(ne.$$scope={dirty:v,ctx:n}),d.$set(ne);const le={};!pe&&v&4&&(pe=!0,le.value=n[2].short_description,ge(()=>pe=!1)),j.$set(le);const re={};v&5242880&&(re.$$scope={dirty:v,ctx:n}),Y.$set(re);const ie={};!Pe&&v&4&&(Pe=!0,ie.value=n[2].full_description,ge(()=>Pe=!1)),z.$set(ie);const be={};v&5242880&&(be.$$scope={dirty:v,ctx:n}),Q.$set(be),H.ctx=n,v&8&&Ee!==(Ee=nt(n[3]))&&st(Ee,H)||St(H,n,v);const y={};v&5242880&&(y.$$scope={dirty:v,ctx:n}),x.$set(y);const we={};!Fe&&v&4&&(Fe=!0,we.value=n[2].source_url,ge(()=>Fe=!1)),G.$set(we);const oe={};v&5242880&&(oe.$$scope={dirty:v,ctx:n}),te.$set(oe),n[1]?P?(P.p(n,v),v&2&&w(P,1)):(P=ft(n),P.c(),w(P,1),P.m(t,De)):P&&(Ie(),D(P,1,1,()=>{P=null}),Ae());const ke={};v&4194305&&(ke.$$scope={dirty:v,ctx:n}),se.$set(ke)},i(r){Se||(w(a.$$.fragment,r),w(S.$$.fragment,r),w(i.$$.fragment,r),w(d.$$.fragment,r),w(j.$$.fragment,r),w(Y.$$.fragment,r),w(z.$$.fragment,r),w(Q.$$.fragment,r),w(x.$$.fragment,r),w(G.$$.fragment,r),w(te.$$.fragment,r),w(P),w(se.$$.fragment,r),Se=!0)},o(r){D(a.$$.fragment,r),D(S.$$.fragment,r),D(i.$$.fragment,r),D(d.$$.fragment,r),D(j.$$.fragment,r),D(Y.$$.fragment,r),D(z.$$.fragment,r),D(Q.$$.fragment,r),D(x.$$.fragment,r),D(G.$$.fragment,r),D(te.$$.fragment,r),D(P),D(se.$$.fragment,r),Se=!1},d(r){r&&u(e),M(a),M(S),M(i),M(d),M(j),M(Y),M(z),M(Q),H.block.d(),H.token=null,H=null,M(x),M(G),M(te),P&&P.d(),M(se),Ye=!1,Ce()}}}function ss(n,e,t){let s,a,{onSubmit:l}=e,{initialValues:f={full_description:"",mod_reference:"",name:"",short_description:"",source_url:""}}=e,{submitText:S="Create"}=e,{editing:m=!1}=e;const{form:k,data:i}=Vt({initialValues:f,extend:[It,At],validateSchema:rt,onSubmit:_=>l(qt(_,rt))});tt(n,i,_=>t(2,a=_));const h=()=>{a.authors.push({role:"editor",user_id:""}),i.set(a)},c=_=>{a.authors.splice(_,1),i.set(a)};function d(_){n.$$.not_equal(a.name,_)&&(a.name=_,i.set(a))}function A(_){n.$$.not_equal(a.mod_reference,_)&&(a.mod_reference=_,i.set(a))}function E(_){n.$$.not_equal(a.short_description,_)&&(a.short_description=_,i.set(a))}function j(_){n.$$.not_equal(a.full_description,_)&&(a.full_description=_,i.set(a))}function pe(_){n.$$.not_equal(a.source_url,_)&&(a.source_url=_,i.set(a))}function $e(_,O){n.$$.not_equal(a.authors[O].user_id,_)&&(a.authors[O].user_id=_,i.set(a))}const Y=_=>c(_);return n.$$set=_=>{"onSubmit"in _&&t(8,l=_.onSubmit),"initialValues"in _&&t(9,f=_.initialValues),"submitText"in _&&t(0,S=_.submitText),"editing"in _&&t(1,m=_.editing)},n.$$.update=()=>{n.$$.dirty&4&&t(3,s=a.full_description||"")},[S,m,a,s,k,i,h,c,l,f,d,A,E,j,pe,$e,Y]}class os extends Qe{constructor(e){super();xe(this,e,ss,ts,et,{onSubmit:8,initialValues:9,submitText:0,editing:1})}}export{os as M};
//# sourceMappingURL=ModForm-ed91f3f7.js.map