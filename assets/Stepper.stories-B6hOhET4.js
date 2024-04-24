import{o as e,a as t,f as y,F as r,J as _,d as S,e as k,k as p,u as c,v,x as w}from"./vue.esm-bundler-DcUdeB67.js";import{_ as F}from"./Label-C3_X6Y2E.js";import"./index-CYxz6zhG.js";import"./utils-CHtjtCvc.js";function o(s,D){return e(),t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[y("path",{"fill-rule":"evenodd",d:"m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z","clip-rule":"evenodd"})])}const b={class:"flex justify-between items-start px-4 lg:px-20 py-3 lg:py-8 bg-white rounded-2xl"},E=["src"],N=["src"],z={class:"text-xs lg:text-base font-medium text-center max-w-[120px] lg:max-w-[170px]"},T={key:0,class:"relative flex flex-grow steps"},V={name:"Stepper"},A=Object.assign(V,{props:{list:{type:String},step:{type:Number},stepImg:{type:String},selectImg:{type:String}},setup(s){return(D,J)=>(e(),t("div",b,[(e(!0),t(r,null,_(s.list,(B,m)=>(e(),t(r,null,[S(c(F),{class:"relative flex flex-col justify-center items-center gap-2 steps"},{default:k(()=>[s.step==m+1?(e(),t(r,{key:0},[s.selectImg?(e(),t("img",{key:0,src:s.selectImg,class:"h-8 lg:h-12 z-10"},null,8,E)):(e(),p(c(o),{key:1,class:"h-8 lg:h-12 text-red z-10"}))],64)):(e(),t(r,{key:1},[s.stepImg?(e(),t("img",{key:0,src:s.stepImg,class:"h-6 lg:h-10 mb-2 z-10"},null,8,N)):(e(),p(c(o),{key:1,class:"h-6 lg:h-10 text-[#c7c7c7] mb-2 z-10"}))],64)),y("span",z,v(B),1)]),_:2},1024),m<s.list.length-1?(e(),t("div",T)):w("",!0)],64))),256))]))}}),j=A;A.__docgenInfo={exportName:"default",displayName:"Stepper",description:"",tags:{},props:[{name:"list",type:{name:"string"}},{name:"step",type:{name:"number"}},{name:"stepImg",type:{name:"string"}},{name:"selectImg",type:{name:"string"}}],sourceFiles:["D:/Program/VueJs/CTBCINS-UIKit/src/stories/Stepper.vue"]};const M={title:"Example/Stepper",component:j,tags:["autodocs"],argTypes:{list:{control:"array"},step:{control:"number"},stepImg:{control:"text"},selectImg:{control:"text"}}},a={args:{list:["要保人資料","旅遊資訊","被保險人資料","投保完成"],step:1}},n={args:{list:["要保人資料","旅遊資訊","被保險人資料","投保完成"],step:1,stepImg:"/testImg/stepImg.png",selectImg:"/testImg/stepImg2.png"}},u={args:{list:["資料上傳","被保險人資料","投保完成"],step:1,stepImg:"/testImg/stepImg.png",selectImg:"/testImg/stepImg2.png"}};var l,g,i;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    list: ['要保人資料', '旅遊資訊', '被保險人資料', '投保完成'],
    step: 1
  }
}`,...(i=(g=a.parameters)==null?void 0:g.docs)==null?void 0:i.source}}};var d,I,x;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    list: ['要保人資料', '旅遊資訊', '被保險人資料', '投保完成'],
    step: 1,
    stepImg: '/testImg/stepImg.png',
    selectImg: '/testImg/stepImg2.png'
  }
}`,...(x=(I=n.parameters)==null?void 0:I.docs)==null?void 0:x.source}}};var C,f,h;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    list: ['資料上傳', '被保險人資料', '投保完成'],
    step: 1,
    stepImg: '/testImg/stepImg.png',
    selectImg: '/testImg/stepImg2.png'
  }
}`,...(h=(f=u.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const P=["Default","CustomImg","ThreeStep"];export{n as CustomImg,a as Default,u as ThreeStep,P as __namedExportsOrder,M as default};
