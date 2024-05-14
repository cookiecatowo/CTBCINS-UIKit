import{o as e,a as t,v as h,M as r,N as _,l as S,j as v,g as p,u as c,t as w,x as k}from"./vue.esm-bundler-C3HUlvCY.js";import{_ as F}from"./Label-abx64zYe.js";import"./index-afhknXpz.js";import"./utils-CHtjtCvc.js";function l(s,D){return e(),t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[h("path",{"fill-rule":"evenodd",d:"m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z","clip-rule":"evenodd"})])}const b={class:"flex justify-between items-start px-4 lg:px-20 py-3 lg:py-8 bg-white rounded-2xl"},E=["src"],N=["src"],j={class:"text-xs lg:text-base font-medium text-center max-w-[120px] lg:max-w-[170px]"},z={key:0,class:"relative flex flex-grow steps"},T={name:"Stepper"},A=Object.assign(T,{props:{list:{type:Array},step:{type:[Number,String]},stepImg:{type:String},selectImg:{type:String}},setup(s){return(D,M)=>(e(),t("div",b,[(e(!0),t(r,null,_(s.list,(B,m)=>(e(),t(r,null,[S(c(F),{class:"relative flex flex-col justify-center items-center gap-2 steps"},{default:v(()=>[s.step==m+1?(e(),t(r,{key:0},[s.selectImg?(e(),t("img",{key:0,src:s.selectImg,class:"h-8 lg:h-12 z-10"},null,8,E)):(e(),p(c(l),{key:1,class:"h-8 lg:h-12 text-red z-10"}))],64)):(e(),t(r,{key:1},[s.stepImg?(e(),t("img",{key:0,src:s.stepImg,class:"h-6 lg:h-10 mb-2 z-10"},null,8,N)):(e(),p(c(l),{key:1,class:"h-6 lg:h-10 text-[#c7c7c7] mb-2 z-10"}))],64)),h("span",j,w(B),1)]),_:2},1024),m<s.list.length-1?(e(),t("div",z)):k("",!0)],64))),256))]))}}),V=A;A.__docgenInfo={exportName:"default",displayName:"Stepper",description:"",tags:{},props:[{name:"list",type:{name:"array"}},{name:"step",type:{name:"number|string"}},{name:"stepImg",type:{name:"string"}},{name:"selectImg",type:{name:"string"}}],sourceFiles:["D:/Program/VueJs/CTBCINS-UIKit/src/stories/Stepper.vue"]};const L={title:"Example/Stepper",component:V,tags:["autodocs"],argTypes:{list:{control:"array"},step:{control:"number"},stepImg:{control:"text"},selectImg:{control:"text"}}},a={args:{list:["要保人資料","旅遊資訊","被保險人資料","投保完成"],step:1}},n={args:{list:["要保人資料","旅遊資訊","被保險人資料","投保完成"],step:1,stepImg:"/testImg/stepImg.png",selectImg:"/testImg/stepImg2.png"}},u={args:{list:["資料上傳","被保險人資料","投保完成"],step:1,stepImg:"/testImg/stepImg.png",selectImg:"/testImg/stepImg2.png"}};var o,g,i;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(x=(I=n.parameters)==null?void 0:I.docs)==null?void 0:x.source}}};var C,y,f;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    list: ['資料上傳', '被保險人資料', '投保完成'],
    step: 1,
    stepImg: '/testImg/stepImg.png',
    selectImg: '/testImg/stepImg2.png'
  }
}`,...(f=(y=u.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const P=["Default","CustomImg","ThreeStep"];export{n as CustomImg,a as Default,u as ThreeStep,P as __namedExportsOrder,L as default};
