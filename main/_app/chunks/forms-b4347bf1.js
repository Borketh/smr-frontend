import{b4 as s}from"./vendor-3f5cbc3a.js";const i=(o,a)=>Object.fromEntries(Object.entries(o).map(t=>{if(Object.keys(a.shape).indexOf(t[0])>=0){let e=t[1];if(typeof e=="object"){let r=a.shape[t[0]];if(r instanceof s&&(r=r.unwrap()),Array.isArray(e)){const f=r.element;for(let n=0;n<e.length;n++)e[n]=i(e[n],f)}else e=i(e,r)}return[t[0],e]}}).filter(t=>!!t));export{i as t};
//# sourceMappingURL=forms-b4347bf1.js.map