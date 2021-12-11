import{S as L,i as q,s as H,as as U,j as I,m as T,o as j,x as S,u as E,v as x,at as W,aV as O,e as b,k as A,c as y,a as w,d as h,n as C,b as v,aW as N,f as D,V as k,aX as Q,t as V,g as z,h as M,ae as J,ag as Y,X as Z,a0 as tt,w as et,az as ot,r as at}from"../../chunks/vendor-1349e522.js";import{a as st}from"../../chunks/paths-6758d194.js";import{g as rt}from"../../chunks/navigation-51f4a605.js";import{M as nt}from"../../chunks/MetaDescriptors-f7c013cb.js";import"../../chunks/singletons-12a22614.js";import"../../chunks/stores-6d06ecdd.js";function it(n){let e,o,t,s=n[0].name+"",f,g,$,u,r,_=n[0].author+"",a,c,i,l=n[0].description+"",d;return{c(){e=b("div"),o=b("a"),t=b("span"),f=V(s),$=A(),u=b("h5"),r=b("span"),a=V(_),c=A(),i=b("div"),d=V(l),this.h()},l(m){e=y(m,"DIV",{class:!0});var p=w(e);o=y(p,"A",{href:!0});var G=w(o);t=y(G,"SPAN",{class:!0});var P=w(t);f=z(P,s),P.forEach(h),G.forEach(h),$=C(p),u=y(p,"H5",{class:!0});var R=w(u);r=y(R,"SPAN",{});var X=w(r);a=z(X,_),X.forEach(h),R.forEach(h),p.forEach(h),c=C(m),i=y(m,"DIV",{});var B=w(i);d=z(B,l),B.forEach(h),this.h()},h(){v(t,"class","text-xl text-gray-50 break-words"),v(o,"href",g=n[0].link),v(u,"class","text-sm m-0"),v(e,"class","mb-2")},m(m,p){D(m,e,p),k(e,o),k(o,t),k(t,f),k(e,$),k(e,u),k(u,r),k(r,a),D(m,c,p),D(m,i,p),k(i,d)},p(m,p){p&1&&s!==(s=m[0].name+"")&&M(f,s),p&1&&g!==(g=m[0].link)&&v(o,"href",g),p&1&&_!==(_=m[0].author+"")&&M(a,_),p&1&&l!==(l=m[0].description+"")&&M(d,l)},d(m){m&&h(e),m&&h(c),m&&h(i)}}}function lt(n){let e;return{c(){e=V("info")},l(o){e=z(o,"info")},m(o,t){D(o,e,t)},d(o){o&&h(e)}}}function ct(n){let e,o;return e=new Y({props:{class:"material-icons",$$slots:{default:[lt]},$$scope:{ctx:n}}}),{c(){I(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,s){j(e,t,s),o=!0},p(t,s){const f={};s&8&&(f.$$scope={dirty:s,ctx:t}),e.$set(f)},i(t){o||(S(e.$$.fragment,t),o=!0)},o(t){E(e.$$.fragment,t),o=!1},d(t){x(e,t)}}}function ft(n){let e,o;return e=new J({props:{href:n[0].link,"aria-label":"Go to tool page",title:"Go to tool page",$$slots:{default:[ct]},$$scope:{ctx:n}}}),{c(){I(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,s){j(e,t,s),o=!0},p(t,s){const f={};s&1&&(f.href=t[0].link),s&8&&(f.$$scope={dirty:s,ctx:t}),e.$set(f)},i(t){o||(S(e.$$.fragment,t),o=!0)},o(t){E(e.$$.fragment,t),o=!1},d(t){x(e,t)}}}function ut(n){let e,o,t,s,f,g,$,u,r,_,a,c,i;return u=new W({props:{class:"flex flex-col pb-0",$$slots:{default:[it]},$$scope:{ctx:n}}}),_=new O({props:{class:"self-end",$$slots:{default:[ft]},$$scope:{ctx:n}}}),{c(){e=b("div"),o=b("div"),t=b("img"),g=A(),$=b("div"),I(u.$$.fragment),r=A(),I(_.$$.fragment),this.h()},l(l){e=y(l,"DIV",{class:!0});var d=w(e);o=y(d,"DIV",{class:!0});var m=w(o);t=y(m,"IMG",{crossorigin:!0,src:!0,alt:!0,class:!0}),m.forEach(h),g=C(d),$=y(d,"DIV",{class:!0});var p=w($);T(u.$$.fragment,p),r=C(p),T(_.$$.fragment,p),p.forEach(h),d.forEach(h),this.h()},h(){v(t,"crossorigin","anonymous"),N(t.src,s=n[1])||v(t,"src",s),v(t,"alt",f=""+(n[0].name+" Logo")),v(t,"class","logo max-w-full max-h-full"),v(o,"class","cursor-pointer card-image-container"),v($,"class","w-full flex flex-col justify-between"),v(e,"class","grid sm:grid-cols-2 grid-cols-1 justify-items-center")},m(l,d){D(l,e,d),k(e,o),k(o,t),k(e,g),k(e,$),j(u,$,null),k($,r),j(_,$,null),a=!0,c||(i=Q(o,"click",n[2]),c=!0)},p(l,d){(!a||d&2&&!N(t.src,s=l[1]))&&v(t,"src",s),(!a||d&1&&f!==(f=""+(l[0].name+" Logo")))&&v(t,"alt",f);const m={};d&9&&(m.$$scope={dirty:d,ctx:l}),u.$set(m);const p={};d&9&&(p.$$scope={dirty:d,ctx:l}),_.$set(p)},i(l){a||(S(u.$$.fragment,l),S(_.$$.fragment,l),a=!0)},o(l){E(u.$$.fragment,l),E(_.$$.fragment,l),a=!1},d(l){l&&h(e),x(u),x(_),c=!1,i()}}}function dt(n){let e,o;return e=new U({props:{class:"h-full",$$slots:{default:[ut]},$$scope:{ctx:n}}}),{c(){I(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,s){j(e,t,s),o=!0},p(t,[s]){const f={};s&11&&(f.$$scope={dirty:s,ctx:t}),e.$set(f)},i(t){o||(S(e.$$.fragment,t),o=!0)},o(t){E(e.$$.fragment,t),o=!1},d(t){x(e,t)}}}function mt(n,e,o){let t,{tool:s}=e;const f=()=>rt(s.link);return n.$$set=g=>{"tool"in g&&o(0,s=g.tool)},n.$$.update=()=>{n.$$.dirty&1&&o(1,t=s.logo||st+"/images/no_image.png")},[s,t,f]}class pt extends L{constructor(e){super();q(this,e,mt,dt,H,{tool:0})}}function F(n,e,o){const t=n.slice();return t[1]=e[o],t}function K(n){let e,o;return e=new pt({props:{tool:n[1]}}),{c(){I(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,s){j(e,t,s),o=!0},p:Z,i(t){o||(S(e.$$.fragment,t),o=!0)},o(t){E(e.$$.fragment,t),o=!1},d(t){x(e,t)}}}function ht(n){let e,o,t,s,f,g,$;e=new nt({props:{description:"A collection of useful tools for Satisfactory, such as recipe calculators and save editors",title:"Tools"}});let u=n[0],r=[];for(let a=0;a<u.length;a+=1)r[a]=K(F(n,u,a));const _=a=>E(r[a],1,1,()=>{r[a]=null});return{c(){I(e.$$.fragment),o=A(),t=b("h1"),s=V("Tools"),f=A(),g=b("div");for(let a=0;a<r.length;a+=1)r[a].c();this.h()},l(a){const c=tt('[data-svelte="svelte-f11w9o"]',document.head);T(e.$$.fragment,c),c.forEach(h),o=C(a),t=y(a,"H1",{class:!0});var i=w(t);s=z(i,"Tools"),i.forEach(h),f=C(a),g=y(a,"DIV",{class:!0});var l=w(g);for(let d=0;d<r.length;d+=1)r[d].l(l);l.forEach(h),this.h()},h(){document.title="Tools - SMR",v(t,"class","text-4xl my-4 font-bold"),v(g,"class","grid 3xl:grid-cols-3 2xl:grid-cols-2 grid-cols-1 gap-4")},m(a,c){j(e,document.head,null),D(a,o,c),D(a,t,c),k(t,s),D(a,f,c),D(a,g,c);for(let i=0;i<r.length;i+=1)r[i].m(g,null);$=!0},p(a,[c]){if(c&1){u=a[0];let i;for(i=0;i<u.length;i+=1){const l=F(a,u,i);r[i]?(r[i].p(l,c),S(r[i],1)):(r[i]=K(l),r[i].c(),S(r[i],1),r[i].m(g,null))}for(at(),i=u.length;i<r.length;i+=1)_(i);et()}},i(a){if(!$){S(e.$$.fragment,a);for(let c=0;c<u.length;c+=1)S(r[c]);$=!0}},o(a){E(e.$$.fragment,a),r=r.filter(Boolean);for(let c=0;c<r.length;c+=1)E(r[c]);$=!1},d(a){x(e),a&&h(o),a&&h(t),a&&h(f),a&&h(g),ot(r,a)}}}function gt(n){return[[{name:"Save Editor",author:"Goz3rr",logo:"https://cdn.jsdelivr.net/gh/Goz3rr/SatisfactorySaveEditor@6958101e3f2c0e50ba92df798ebefe4e6bdd4eb5/Reference%20Materials/SatisfactorySaveEditorLogo.png",description:"A work in progress save editor for Satisfactory. Consists of both a save parser and an application for viewing and editing the parsed data.",link:"https://github.com/Goz3rr/SatisfactorySaveEditor"},{name:"Satisfactory Tools",author:"greeny",logo:"https://i.imgur.com/WQEHo26.png",description:"A collection of powerful tools for planning and building the perfect base. Calculate your production or consumption, browse items, buildings, and schematics and share your builds with others!",link:"https://www.satisfactorytools.com/"},{name:"Recipe Calculator",author:"KirkMcDonald",logo:"",description:"Recipe calculator using sankey diagrams.",link:"https://kirkmcdonald.github.io/satisfactory-calculator/calc.html"},{name:"Map",author:"Cornik and S4XXX",logo:"",description:"Satisfactory map based on in-game coordinates.",link:"https://www.satisfactorymap.com/"},{name:"SatisGraphtory",author:"tehalexf and thinkaliker",logo:"https://cdn.jsdelivr.net/gh/rhocode/rhocode.github.io@4713b4887e8821f1482de7af4ae32fb6a4b2bcaf/img/satoolsfactory_icons/dot.png",description:"This is a factory planner/optimizer/analyzer tool for factories old and new! Simulate resource chains, factory layouts, and more!",link:"https://satisgraphtory.com/"},{name:"Satisfactory Calculator",author:"Anthor",logo:"",description:"Collection of tools for Satisfactory (Production planner, Interactive map, Recipes, etc)",link:"https://satisfactory-calculator.com/"},{name:"Savegame Tool",author:"SillyBits",logo:"",description:"Allows for numerous options regarding satisfactory savegames, e.g. searching and erasing damaged entities",link:"https://github.com/SillyBits/satisfactory-savegame-tool-ng"},{name:"Satisfactory UI Kit",author:"Deantendo",logo:"",description:"A UI kit for Satisfactory mods",link:"https://github.com/deantendo/sfuikit"},{name:"Ficsit.info",author:"Nevir",logo:"https://github.com/ficsit/ficsit.info/blob/master/web/assets/site-icons/maskable-512.png?raw=true",description:"Production line optimization tool, and game info database",link:"https://ficsit.info/"},{name:"Daniel's Satisfactory Tools",author:"DanielTheProgrammer",logo:"https://i.imgur.com/Ogt0r9k.png",description:"Visualize production chains, and browse items and recipes!",link:"https://daniel2013.github.io/satisfactory/"},{name:"Satisfactory Toolbox",author:"Lucek",logo:"",description:'Factory tool collection, with main tool called "factory planner" with detailed, realtime stats for production and consumption, overclocking and much more.',link:"https://toolbox.satisfactory.lucek.io/"}]]}class wt extends L{constructor(e){super();q(this,e,gt,ht,H,{})}}export{wt as default};
//# sourceMappingURL=index.svelte-27f31d99.js.map