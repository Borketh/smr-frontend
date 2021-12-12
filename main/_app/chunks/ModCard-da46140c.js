import{S as te,i as se,s as ae,as as le,j as D,m as S,o as M,x as w,u as E,v as N,at as ne,aV as oe,e as b,k as B,c as k,a as I,d as u,n as H,b as p,aW as Z,f as j,V as _,aX as re,ag as U,t as G,g as P,h as Q,ae as x,l as y,r as ie,w as fe}from"./vendor-1349e522.js";import{a as ce,b as F}from"./paths-6758d194.js";import{g as $e}from"./navigation-51f4a605.js";function ue(l){let e;return{c(){e=G("visibility")},l(s){e=P(s,"visibility")},m(s,t){j(s,e,t)},d(s){s&&u(e)}}}function me(l){let e;return{c(){e=G("download")},l(s){e=P(s,"download")},m(s,t){j(s,e,t)},d(s){s&&u(e)}}}function de(l){let e,s,t,o=l[0].name+"",a,n,r,$,V,d,g=l[0].views+"",C,L,f,c,h=l[0].downloads+"",v,J,q,W=l[0].short_description+"",K,A;return d=new U({props:{class:"material-icons align-middle text-sm",$$slots:{default:[ue]},$$scope:{ctx:l}}}),c=new U({props:{class:"material-icons align-middle text-sm",$$slots:{default:[me]},$$scope:{ctx:l}}}),{c(){e=b("div"),s=b("a"),t=b("span"),a=G(o),r=B(),$=b("h5"),V=b("span"),D(d.$$.fragment),C=G(g),L=B(),f=b("span"),D(c.$$.fragment),v=G(h),J=B(),q=b("div"),K=G(W),this.h()},l(i){e=k(i,"DIV",{class:!0});var m=I(e);s=k(m,"A",{href:!0});var X=I(s);t=k(X,"SPAN",{class:!0});var z=I(t);a=P(z,o),z.forEach(u),X.forEach(u),r=H(m),$=k(m,"H5",{class:!0});var O=I($);V=k(O,"SPAN",{});var R=I(V);S(d.$$.fragment,R),C=P(R,g),R.forEach(u),L=H(O),f=k(O,"SPAN",{});var T=I(f);S(c.$$.fragment,T),v=P(T,h),T.forEach(u),O.forEach(u),m.forEach(u),J=H(i),q=k(i,"DIV",{class:!0});var Y=I(q);K=P(Y,W),Y.forEach(u),this.h()},h(){p(t,"class","text-xl text-gray-50 break-words"),p(s,"href",n=""+(F+"/mod/"+l[0].id+"/")),p($,"class","text-sm m-0"),p(e,"class","mb-2"),p(q,"class","break-words")},m(i,m){j(i,e,m),_(e,s),_(s,t),_(t,a),_(e,r),_(e,$),_($,V),M(d,V,null),_(V,C),_($,L),_($,f),M(c,f,null),_(f,v),j(i,J,m),j(i,q,m),_(q,K),A=!0},p(i,m){(!A||m&1)&&o!==(o=i[0].name+"")&&Q(a,o),(!A||m&1&&n!==(n=""+(F+"/mod/"+i[0].id+"/")))&&p(s,"href",n);const X={};m&16&&(X.$$scope={dirty:m,ctx:i}),d.$set(X),(!A||m&1)&&g!==(g=i[0].views+"")&&Q(C,g);const z={};m&16&&(z.$$scope={dirty:m,ctx:i}),c.$set(z),(!A||m&1)&&h!==(h=i[0].downloads+"")&&Q(v,h),(!A||m&1)&&W!==(W=i[0].short_description+"")&&Q(K,W)},i(i){A||(w(d.$$.fragment,i),w(c.$$.fragment,i),A=!0)},o(i){E(d.$$.fragment,i),E(c.$$.fragment,i),A=!1},d(i){i&&u(e),N(d),N(c),i&&u(J),i&&u(q)}}}function _e(l){let e;return{c(){e=G("info")},l(s){e=P(s,"info")},m(s,t){j(s,e,t)},d(s){s&&u(e)}}}function pe(l){let e,s;return e=new U({props:{class:"material-icons",$$slots:{default:[_e]},$$scope:{ctx:l}}}),{c(){D(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,o){M(e,t,o),s=!0},p(t,o){const a={};o&16&&(a.$$scope={dirty:o,ctx:t}),e.$set(a)},i(t){s||(w(e.$$.fragment,t),s=!0)},o(t){E(e.$$.fragment,t),s=!1},d(t){N(e,t)}}}function ee(l){let e,s;return e=new x({props:{class:"material-icons",title:"Install",$$slots:{default:[ge]},$$scope:{ctx:l}}}),{c(){D(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,o){M(e,t,o),s=!0},i(t){s||(w(e.$$.fragment,t),s=!0)},o(t){E(e.$$.fragment,t),s=!1},d(t){N(e,t)}}}function ge(l){let e;return{c(){e=G("download")},l(s){e=P(s,"download")},m(s,t){j(s,e,t)},d(s){s&&u(e)}}}function ve(l){let e,s,t,o;e=new x({props:{href:""+(F+"/mod/"+l[0].id+"/"),"aria-label":"Go to mod page",title:"Go to mod page",$$slots:{default:[pe]},$$scope:{ctx:l}}});let a=l[1]&&ee(l);return{c(){D(e.$$.fragment),s=B(),a&&a.c(),t=y()},l(n){S(e.$$.fragment,n),s=H(n),a&&a.l(n),t=y()},m(n,r){M(e,n,r),j(n,s,r),a&&a.m(n,r),j(n,t,r),o=!0},p(n,r){const $={};r&1&&($.href=""+(F+"/mod/"+n[0].id+"/")),r&16&&($.$$scope={dirty:r,ctx:n}),e.$set($),n[1]?a?r&2&&w(a,1):(a=ee(n),a.c(),w(a,1),a.m(t.parentNode,t)):a&&(ie(),E(a,1,1,()=>{a=null}),fe())},i(n){o||(w(e.$$.fragment,n),w(a),o=!0)},o(n){E(e.$$.fragment,n),E(a),o=!1},d(n){N(e,n),n&&u(s),a&&a.d(n),n&&u(t)}}}function he(l){let e,s,t,o,a,n,r,$,V,d,g,C,L;return $=new ne({props:{class:"flex flex-col pb-0",$$slots:{default:[de]},$$scope:{ctx:l}}}),d=new oe({props:{class:"self-end",$$slots:{default:[ve]},$$scope:{ctx:l}}}),{c(){e=b("div"),s=b("div"),t=b("img"),n=B(),r=b("div"),D($.$$.fragment),V=B(),D(d.$$.fragment),this.h()},l(f){e=k(f,"DIV",{class:!0});var c=I(e);s=k(c,"DIV",{class:!0});var h=I(s);t=k(h,"IMG",{crossorigin:!0,src:!0,alt:!0,class:!0}),h.forEach(u),n=H(c),r=k(c,"DIV",{class:!0});var v=I(r);S($.$$.fragment,v),V=H(v),S(d.$$.fragment,v),v.forEach(u),c.forEach(u),this.h()},h(){p(t,"crossorigin","anonymous"),Z(t.src,o=l[2])||p(t,"src",o),p(t,"alt",a=""+(l[0].name+" Logo")),p(t,"class","logo max-w-full max-h-full svelte-16fsik6"),p(s,"class","cursor-pointer card-image-container"),p(r,"class","w-full flex flex-col justify-between"),p(e,"class","grid grid-max-auto sm:grid-cols-2 grid-cols-1 justify-items-center svelte-16fsik6")},m(f,c){j(f,e,c),_(e,s),_(s,t),_(e,n),_(e,r),M($,r,null),_(r,V),M(d,r,null),g=!0,C||(L=re(s,"click",l[3]),C=!0)},p(f,c){(!g||c&4&&!Z(t.src,o=f[2]))&&p(t,"src",o),(!g||c&1&&a!==(a=""+(f[0].name+" Logo")))&&p(t,"alt",a);const h={};c&17&&(h.$$scope={dirty:c,ctx:f}),$.$set(h);const v={};c&19&&(v.$$scope={dirty:c,ctx:f}),d.$set(v)},i(f){g||(w($.$$.fragment,f),w(d.$$.fragment,f),g=!0)},o(f){E($.$$.fragment,f),E(d.$$.fragment,f),g=!1},d(f){f&&u(e),N($),N(d),C=!1,L()}}}function we(l){let e,s;return e=new le({props:{class:"h-full",$$slots:{default:[he]},$$scope:{ctx:l}}}),{c(){D(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,o){M(e,t,o),s=!0},p(t,[o]){const a={};o&23&&(a.$$scope={dirty:o,ctx:t}),e.$set(a)},i(t){s||(w(e.$$.fragment,t),s=!0)},o(t){E(e.$$.fragment,t),s=!1},d(t){N(e,t)}}}function be(l,e,s){let t,o,{mod:a}=e;const n=()=>$e(F+`/mod/${a.id}/`);return l.$$set=r=>{"mod"in r&&s(0,a=r.mod)},l.$$.update=()=>{l.$$.dirty&1&&s(2,t=a.logo||ce+"/images/no_image.png"),l.$$.dirty&1&&s(1,o="latestVersions"in a?a.latestVersions.alpha||a.latestVersions.beta||a.latestVersions.release:!1)},[a,o,t,n]}class Ie extends te{constructor(e){super();se(this,e,be,we,ae,{mod:0})}}export{Ie as M};
//# sourceMappingURL=ModCard-da46140c.js.map