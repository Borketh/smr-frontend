import{S as t,i as s,s as a,e as c,t as e,k as l,c as r,a as n,g as o,d as h,n as u,b as i,f as d,R as p,W as v,X as m,Y as f,h as g,l as b,ac as T}from"./vendor-717a693c.js";function N(t){let s,a,g,b,T,N,P;return{c(){s=c("button"),a=e("«"),g=l(),b=c("button"),T=e("<"),this.h()},l(t){s=r(t,"BUTTON",{class:!0});var c=n(s);a=o(c,"«"),c.forEach(h),g=u(t),b=r(t,"BUTTON",{class:!0});var e=n(b);T=o(e,"<"),e.forEach(h),this.h()},h(){i(s,"class","page-button svelte-1otchvh"),i(b,"class","page-button svelte-1otchvh")},m(c,e){d(c,s,e),p(s,a),d(c,g,e),d(c,b,e),p(b,T),N||(P=[v(s,"click",t[4]),v(b,"click",t[5])],N=!0)},p:m,d(t){t&&h(s),t&&h(g),t&&h(b),N=!1,f(P)}}}function P(t){let s,a;return{c(){s=c("div"),a=e("..."),this.h()},l(t){s=r(t,"DIV",{class:!0});var c=n(s);a=o(c,"..."),c.forEach(h),this.h()},h(){i(s,"class","py-1 px-4 inline-block")},m(t,c){d(t,s,c),p(s,a)},d(t){t&&h(s)}}}function k(t){let s,a,l,u,m=t[3]-1+"";return{c(){s=c("button"),a=e(m),this.h()},l(t){s=r(t,"BUTTON",{class:!0});var c=n(s);a=o(c,m),c.forEach(h),this.h()},h(){i(s,"class","page-button svelte-1otchvh")},m(c,e){d(c,s,e),p(s,a),l||(u=v(s,"click",t[6]),l=!0)},p(t,s){8&s&&m!==(m=t[3]-1+"")&&g(a,m)},d(t){t&&h(s),l=!1,u()}}}function E(t){let s,a,l,u,m=t[3]+1+"";return{c(){s=c("button"),a=e(m),this.h()},l(t){s=r(t,"BUTTON",{class:!0});var c=n(s);a=o(c,m),c.forEach(h),this.h()},h(){i(s,"class","page-button svelte-1otchvh")},m(c,e){d(c,s,e),p(s,a),l||(u=v(s,"click",t[7]),l=!0)},p(t,s){8&s&&m!==(m=t[3]+1+"")&&g(a,m)},d(t){t&&h(s),l=!1,u()}}}function B(t){let s,a;return{c(){s=c("div"),a=e("..."),this.h()},l(t){s=r(t,"DIV",{class:!0});var c=n(s);a=o(c,"..."),c.forEach(h),this.h()},h(){i(s,"class","py-1 px-2 inline-block")},m(t,c){d(t,s,c),p(s,a)},d(t){t&&h(s)}}}function O(t){let s,a,g,b,T,N,P;return{c(){s=c("button"),a=e(">"),g=l(),b=c("button"),T=e("»"),this.h()},l(t){s=r(t,"BUTTON",{class:!0});var c=n(s);a=o(c,">"),c.forEach(h),g=u(t),b=r(t,"BUTTON",{class:!0});var e=n(b);T=o(e,"»"),e.forEach(h),this.h()},h(){i(s,"class","page-button svelte-1otchvh"),i(b,"class","page-button svelte-1otchvh")},m(c,e){d(c,s,e),p(s,a),d(c,g,e),d(c,b,e),p(b,T),N||(P=[v(s,"click",t[8]),v(b,"click",t[9])],N=!0)},p:m,d(t){t&&h(s),t&&h(g),t&&h(b),N=!1,f(P)}}}function U(t){let s,a,v,f,T,U,x,y,$,D=t[3]>t[0]&&N(t),I=t[3]>t[0]+1&&P(),V=t[3]>t[0]&&k(t),j=t[3]<t[1]&&E(t),R=t[3]<t[1]-1&&B(),S=t[3]<t[1]&&O(t);return{c(){D&&D.c(),s=l(),I&&I.c(),a=l(),V&&V.c(),v=l(),f=c("button"),T=e(t[3]),U=l(),j&&j.c(),x=l(),R&&R.c(),y=l(),S&&S.c(),$=b(),this.h()},l(c){D&&D.l(c),s=u(c),I&&I.l(c),a=u(c),V&&V.l(c),v=u(c),f=r(c,"BUTTON",{class:!0});var e=n(f);T=o(e,t[3]),e.forEach(h),U=u(c),j&&j.l(c),x=u(c),R&&R.l(c),y=u(c),S&&S.l(c),$=b(),this.h()},h(){i(f,"class","py-1 px-4 rounded border border-gray-50 mr-2 cursor-default")},m(t,c){D&&D.m(t,c),d(t,s,c),I&&I.m(t,c),d(t,a,c),V&&V.m(t,c),d(t,v,c),d(t,f,c),p(f,T),d(t,U,c),j&&j.m(t,c),d(t,x,c),R&&R.m(t,c),d(t,y,c),S&&S.m(t,c),d(t,$,c)},p(t,[c]){t[3]>t[0]?D?D.p(t,c):(D=N(t),D.c(),D.m(s.parentNode,s)):D&&(D.d(1),D=null),t[3]>t[0]+1?I||(I=P(),I.c(),I.m(a.parentNode,a)):I&&(I.d(1),I=null),t[3]>t[0]?V?V.p(t,c):(V=k(t),V.c(),V.m(v.parentNode,v)):V&&(V.d(1),V=null),8&c&&g(T,t[3]),t[3]<t[1]?j?j.p(t,c):(j=E(t),j.c(),j.m(x.parentNode,x)):j&&(j.d(1),j=null),t[3]<t[1]-1?R||(R=B(),R.c(),R.m(y.parentNode,y)):R&&(R.d(1),R=null),t[3]<t[1]?S?S.p(t,c):(S=O(t),S.c(),S.m($.parentNode,$)):S&&(S.d(1),S=null)},i:m,o:m,d(t){D&&D.d(t),t&&h(s),I&&I.d(t),t&&h(a),V&&V.d(t),t&&h(v),t&&h(f),t&&h(U),j&&j.d(t),t&&h(x),R&&R.d(t),t&&h(y),S&&S.d(t),t&&h($)}}}function x(t,s,a){let c,e=m,l=()=>(e(),e=T(o,(t=>a(3,c=t))),o);t.$$.on_destroy.push((()=>e()));let{startPage:r=1}=s,{totalPages:n}=s,{currentPage:o}=s;l();return t.$$set=t=>{"startPage"in t&&a(0,r=t.startPage),"totalPages"in t&&a(1,n=t.totalPages),"currentPage"in t&&l(a(2,o=t.currentPage))},[r,n,o,c,()=>o.set(r),()=>o.set(c-1),()=>o.set(c-1),()=>o.set(c+1),()=>o.set(c+1),()=>o.set(n)]}class y extends t{constructor(t){super(),s(this,t,x,U,a,{startPage:0,totalPages:1,currentPage:2})}}export{y as P};
//# sourceMappingURL=PageControls-bebdb22a.js.map