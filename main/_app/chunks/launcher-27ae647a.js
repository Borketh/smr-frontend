import{b2 as r,R as s,az as l}from"./vendor-3e0baac1.js";const i=s(null),n=s(!1),t=s(!1),p=()=>{new Promise(()=>{const o=r("http://localhost:33642",{transports:["websocket"]});o.on("connect",()=>{n.set(!0),t.set(!0)}),o.on("disconnect",()=>{t.set(!1)})}).catch(console.error)},c=(o,e)=>{new Promise(()=>{l(i).protocolCheck(o,()=>{n.set(!1),e&&e()})}).catch(console.error)},a="https://smm.ficsit.app/",m=()=>{c("smmanager://ping",()=>{window.open(a,"_blank")})},u=o=>{c("smmanager://install?modID="+o,()=>{window.open(a,"_blank")})};p();export{i as c,n as h,u as i,m as p};
//# sourceMappingURL=launcher-27ae647a.js.map
