import{S as O,i as Q,s as R,as as T,j as G,m as k,o as C,x as D,u as A,v as S,at as U,aV as Y,e as w,k as B,c as E,a as I,d as m,n as H,b as d,aW as J,f as q,V as _,aX as Z,ag as K,t as L,g as N,h as W,ae as y}from"./vendor-1349e522.js";import{a as ee,b as P}from"./paths-6758d194.js";import{g as te}from"./navigation-51f4a605.js";function se(n){let t;return{c(){t=L("visibility")},l(s){t=N(s,"visibility")},m(s,e){q(s,t,e)},d(s){s&&m(t)}}}function ae(n){let t,s,e,a=n[0].name+"",r,g,p,u,v,c,h=n[0].views+"",V,j,l,i=n[0].short_description+"",b,f;return c=new K({props:{class:"material-icons align-middle text-sm",$$slots:{default:[se]},$$scope:{ctx:n}}}),{c(){t=w("div"),s=w("a"),e=w("span"),r=L(a),p=B(),u=w("h5"),v=w("span"),G(c.$$.fragment),V=L(h),j=B(),l=w("div"),b=L(i),this.h()},l(o){t=E(o,"DIV",{class:!0});var $=I(t);s=E($,"A",{href:!0});var x=I(s);e=E(x,"SPAN",{class:!0});var X=I(e);r=N(X,a),X.forEach(m),x.forEach(m),p=H($),u=E($,"H5",{class:!0});var z=I(u);v=E(z,"SPAN",{});var M=I(v);k(c.$$.fragment,M),V=N(M,h),M.forEach(m),z.forEach(m),$.forEach(m),j=H(o),l=E(o,"DIV",{});var F=I(l);b=N(F,i),F.forEach(m),this.h()},h(){d(e,"class","text-xl text-gray-50"),d(s,"href",g=""+(P+"/guide/"+n[0].id+"/")),d(u,"class","text-sm m-0"),d(t,"class","mb-2")},m(o,$){q(o,t,$),_(t,s),_(s,e),_(e,r),_(t,p),_(t,u),_(u,v),C(c,v,null),_(v,V),q(o,j,$),q(o,l,$),_(l,b),f=!0},p(o,$){(!f||$&1)&&a!==(a=o[0].name+"")&&W(r,a),(!f||$&1&&g!==(g=""+(P+"/guide/"+o[0].id+"/")))&&d(s,"href",g);const x={};$&8&&(x.$$scope={dirty:$,ctx:o}),c.$set(x),(!f||$&1)&&h!==(h=o[0].views+"")&&W(V,h),(!f||$&1)&&i!==(i=o[0].short_description+"")&&W(b,i)},i(o){f||(D(c.$$.fragment,o),f=!0)},o(o){A(c.$$.fragment,o),f=!1},d(o){o&&m(t),S(c),o&&m(j),o&&m(l)}}}function ne(n){let t;return{c(){t=L("info")},l(s){t=N(s,"info")},m(s,e){q(s,t,e)},d(s){s&&m(t)}}}function le(n){let t,s;return t=new K({props:{class:"material-icons",$$slots:{default:[ne]},$$scope:{ctx:n}}}),{c(){G(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,a){C(t,e,a),s=!0},p(e,a){const r={};a&8&&(r.$$scope={dirty:a,ctx:e}),t.$set(r)},i(e){s||(D(t.$$.fragment,e),s=!0)},o(e){A(t.$$.fragment,e),s=!1},d(e){S(t,e)}}}function re(n){let t,s;return t=new y({props:{href:""+(P+"/guide/"+n[0].id+"/"),"aria-label":"Go to guide page",title:"Go to guide page",$$slots:{default:[le]},$$scope:{ctx:n}}}),{c(){G(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,a){C(t,e,a),s=!0},p(e,a){const r={};a&1&&(r.href=""+(P+"/guide/"+e[0].id+"/")),a&8&&(r.$$scope={dirty:a,ctx:e}),t.$set(r)},i(e){s||(D(t.$$.fragment,e),s=!0)},o(e){A(t.$$.fragment,e),s=!1},d(e){S(t,e)}}}function oe(n){let t,s,e,a,r,g,p,u,v,c,h,V,j;return u=new U({props:{class:"flex flex-col pb-0",$$slots:{default:[ae]},$$scope:{ctx:n}}}),c=new Y({props:{class:"self-end",$$slots:{default:[re]},$$scope:{ctx:n}}}),{c(){t=w("div"),s=w("div"),e=w("img"),g=B(),p=w("div"),G(u.$$.fragment),v=B(),G(c.$$.fragment),this.h()},l(l){t=E(l,"DIV",{class:!0});var i=I(t);s=E(i,"DIV",{class:!0});var b=I(s);e=E(b,"IMG",{crossorigin:!0,src:!0,alt:!0,class:!0}),b.forEach(m),g=H(i),p=E(i,"DIV",{class:!0});var f=I(p);k(u.$$.fragment,f),v=H(f),k(c.$$.fragment,f),f.forEach(m),i.forEach(m),this.h()},h(){d(e,"crossorigin","anonymous"),J(e.src,a=n[1])||d(e,"src",a),d(e,"alt",r=""+(n[0].name+" Logo")),d(e,"class","logo max-w-full max-h-full svelte-16fsik6"),d(s,"class","cursor-pointer card-image-container"),d(p,"class","w-full flex flex-col justify-between"),d(t,"class","grid grid-max-auto sm:grid-cols-2 grid-cols-1 justify-items-center svelte-16fsik6")},m(l,i){q(l,t,i),_(t,s),_(s,e),_(t,g),_(t,p),C(u,p,null),_(p,v),C(c,p,null),h=!0,V||(j=Z(s,"click",n[2]),V=!0)},p(l,i){(!h||i&2&&!J(e.src,a=l[1]))&&d(e,"src",a),(!h||i&1&&r!==(r=""+(l[0].name+" Logo")))&&d(e,"alt",r);const b={};i&9&&(b.$$scope={dirty:i,ctx:l}),u.$set(b);const f={};i&9&&(f.$$scope={dirty:i,ctx:l}),c.$set(f)},i(l){h||(D(u.$$.fragment,l),D(c.$$.fragment,l),h=!0)},o(l){A(u.$$.fragment,l),A(c.$$.fragment,l),h=!1},d(l){l&&m(t),S(u),S(c),V=!1,j()}}}function ie(n){let t,s;return t=new T({props:{class:"h-full",$$slots:{default:[oe]},$$scope:{ctx:n}}}),{c(){G(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,a){C(t,e,a),s=!0},p(e,[a]){const r={};a&11&&(r.$$scope={dirty:a,ctx:e}),t.$set(r)},i(e){s||(D(t.$$.fragment,e),s=!0)},o(e){A(t.$$.fragment,e),s=!1},d(e){S(t,e)}}}function ce(n,t,s){let{guide:e}=t,{logo:a=ee+"/images/no_image.png"}=t;const r=()=>te(P+`/guide/${e.id}/`);return n.$$set=g=>{"guide"in g&&s(0,e=g.guide),"logo"in g&&s(1,a=g.logo)},[e,a,r]}class me extends O{constructor(t){super();Q(this,t,ce,ie,R,{guide:0,logo:1})}}export{me as G};
//# sourceMappingURL=GuideCard-38dcaf61.js.map