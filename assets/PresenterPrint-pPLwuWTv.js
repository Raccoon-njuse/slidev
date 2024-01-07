import{d as _,u as d,a as h,c as m,b as p,r as u,e as a,f as t,t as s,g as l,F as g,h as f,n as v,i as x,o as n,j as y,k as b,l as k,m as N,_ as P}from"./index-G4SdlfB7.js";import{N as w}from"./NoteDisplay-YSV_DRUt.js";const V={class:"m-4"},D={class:"mb-10"},L={class:"text-4xl font-bold mt-2"},S={class:"opacity-50"},T={class:"text-lg"},z={class:"font-bold flex gap-2"},B={class:"opacity-50"},H=t("div",{class:"flex-auto"},null,-1),j={key:0,class:"border-gray-400/50 mb-8"},C=_({__name:"PresenterPrint",setup(F){d(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),h({title:`Notes - ${m.title}`});const c=p(()=>u.map(o=>{var r;return(r=o.meta)==null?void 0:r.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,r)=>(n(),a("div",{id:"page-root",style:v(l(x))},[t("div",V,[t("div",D,[t("h1",L,s(l(m).title),1),t("div",S,s(new Date().toLocaleString()),1)]),(n(!0),a(g,null,f(c.value,(e,i)=>(n(),a("div",{key:i,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",T,[t("div",z,[t("div",B,s(e==null?void 0:e.no)+"/"+s(l(y)),1),b(" "+s(e==null?void 0:e.title)+" ",1),H])]),k(w,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),i<c.value.length-1?(n(),a("hr",j)):N("v-if",!0)]))),128))])],4))}}),E=P(C,[["__file","/Users/raccoon/Desktop/shengchangzhong/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{E as default};
