import{c as i,a as w,f as g,n as l,v as u,j as _,o as W}from"./vue.esm-bundler-DcUdeB67.js";const A={name:"SubTitle"},b=Object.assign(A,{props:{title:{type:String},eng:{type:String},fontsize:{type:String},weight:{type:String},engFontsize:{type:String},engWeight:{type:String},engPosition:{type:String,default:"right"}},setup(a){const e=a,B=i(()=>({fontWeight:e.weight,fontSize:e.fontsize})),C=i(()=>({fontWeight:e.engWeight,fontSize:e.engFontsize})),v=i(()=>{switch(e.engPosition){case"top":return"flex-col-reverse";case"bottom":return"flex-col";default:return"items-end"}});return(N,I)=>(W(),w("div",null,[g("div",{class:_(["flex gap-2 flex-wrap w-fit",v.value])},[g("span",{class:"text-black shrink-0 text-22 lg:text-24 leading-none lg:leading-none",style:l(B.value)},u(a.title),5),g("span",{class:"text-[#A4A4A4] text-sm lg:text-base leading-none lg:leading-none",style:l(C.value)},u(a.eng),5)],2)]))}}),k=b;b.__docgenInfo={exportName:"default",displayName:"SubTitle",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"eng",type:{name:"string"}},{name:"fontsize",type:{name:"string"}},{name:"weight",type:{name:"string"}},{name:"engFontsize",type:{name:"string"}},{name:"engWeight",type:{name:"string"}},{name:"engPosition",type:{name:"string"},defaultValue:{func:!1,value:"'right'"}}],sourceFiles:["D:/Program/VueJs/CTBCINS-UIKit/src/stories/SubTitle.vue"]};const j={title:"Example/SubTitle",component:k,tags:["autodocs"],argTypes:{title:{control:"text"},eng:{control:"text"},engPosition:{control:{type:"radio"},options:["right","bottom","top"]},fontsize:{control:"text"},weight:{control:"text"},engFontsize:{control:"text"},engWeight:{control:"text"}}},t={args:{title:"投保方案"}},n={args:{title:"要保人資料輸入",eng:"STEP 01"}},s={args:{title:"要保人資料輸入",eng:"STEP 01",engPosition:"top"}},o={args:{title:"要保人資料輸入",eng:"STEP 01",engPosition:"bottom"}},r={args:{title:"投保方案",eng:"STEP 01",fontsize:"36px",weight:"900",engFontsize:"24px",engWeight:"700"}};var c,p,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    title: '投保方案'
  }
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var d,S,f;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    title: '要保人資料輸入',
    eng: 'STEP 01'
  }
}`,...(f=(S=n.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var x,y,h;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    title: '要保人資料輸入',
    eng: 'STEP 01',
    engPosition: 'top'
  }
}`,...(h=(y=s.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var z,T,P;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    title: '要保人資料輸入',
    eng: 'STEP 01',
    engPosition: 'bottom'
  }
}`,...(P=(T=o.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};var E,F,D;r.parameters={...r.parameters,docs:{...(E=r.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    title: '投保方案',
    eng: 'STEP 01',
    fontsize: '36px',
    weight: '900',
    engFontsize: '24px',
    engWeight: '700'
  }
}`,...(D=(F=r.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};const O=["Default","English","Top","Bottom","CustomSize"];export{o as Bottom,r as CustomSize,t as Default,n as English,s as Top,O as __namedExportsOrder,j as default};
