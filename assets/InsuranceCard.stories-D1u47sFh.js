import{c as E,a as k,l as o,j as l,e as T,u as c,v as n,o as j,f as g,t as m}from"./vue.esm-bundler-C3HUlvCY.js";import{_ as N}from"./Card-CNZO8G4j.js";import{_ as d}from"./Label-abx64zYe.js";import{f as V}from"./index-B7eDUBVh.js";import"./utils-CHtjtCvc.js";import"./index-afhknXpz.js";const z={class:"relative w-full lg:w-fit h-fit mt-4 lg:mt-0 cursor-pointer"},L={class:"text-white flex flex-col lg:justify-center items-center lg:items-start lg:gap-y-2 p-4 lg:p-0 lg:pl-8 w-full lg:w-fit lg:min-w-[181px] lg:max-w-[210px] mt-12 lg:mt-0"},O={class:"hidden lg:flex items-center justify-center min-w-[140px]"},$=["src"],J={class:"absolute flex lg:hidden -top-10 w-full items-center justify-center"},K=["src"],P={name:"InsuranceCard"},b=Object.assign(P,{props:{label:{type:String},eng:{type:String},color:{type:String},img:{type:String},width:{type:String},height:{type:String},shadow:{type:String}},emits:["click"],setup(e,{emit:F}){const i=e,S=E(()=>({background:i.color,boxShadow:"0px 14px 23px 0px "+i.shadow})),B=F,D=()=>{B("click")};return(q,G)=>(j(),k("div",z,[o(c(N),{class:"relative flex justify-between min-h-[164px] lg:min-h-0 lg:w-[350px] lg:h-[146px] lg:hover:w-[402px] lg:hover:h-[168px] rounded-[20px] tracking-wider card-hover overflow-hidden",style:T(S.value),onClick:D},{default:l(()=>[n("div",L,[o(c(d),{class:"text-lg lg:text-24 font-semibold shrink-0 text-center lg:text-left"},{default:l(()=>[g(m(e.label),1)]),_:1}),o(c(d),{class:"text-sm lg:text-base font-normal text-center lg:text-left"},{default:l(()=>[g(m(e.eng),1)]),_:1})]),n("div",O,[n("img",{src:e.img,class:"py-2 pr-2 max-w-full max-h-full z-[2]"},null,8,$)])]),_:1},8,["style"]),n("div",J,[n("img",{src:e.img,class:"py-2 pr-2 max-h-[110px] z-[2]"},null,8,K)])]))}}),U=b;b.__docgenInfo={exportName:"default",displayName:"InsuranceCard",description:"",tags:{},props:[{name:"label",type:{name:"string"}},{name:"eng",type:{name:"string"}},{name:"color",type:{name:"string"}},{name:"img",type:{name:"string"}},{name:"width",type:{name:"string"}},{name:"height",type:{name:"string"}},{name:"shadow",type:{name:"string"}}],events:[{name:"click"}],sourceFiles:["D:/Program/VueJs/CTBCINS-UIKit/src/stories/InsuranceCard.vue"]};const Y={title:"Example/InsuranceCard",component:U,tags:["autodocs"],argTypes:{label:{control:"text"},eng:{control:"text"},color:{control:"text"},shadow:{control:"text"},img:{control:"text"}},args:{onClick:V()}},t={args:{label:"旅遊平安險",eng:"Travel Insurance",img:"/testImg/insurance1.png",color:"linear-gradient(99.32deg, #40AF72 1.35%, #41AFA8 98.74%)",shadow:"#41B09870"}},r={args:{label:"車險",eng:"Car Insurance",img:"/testImg/insurance2.png",color:"linear-gradient(97.46deg, #D49595 5.39%, #D07154 86.93%)",shadow:"#4560A869"}},a={args:{label:"旅行業責任險",eng:"Travel Agency Liability Insurance",img:"/testImg/insurance3.png",color:"linear-gradient(274.64deg, #EA924F 32.67%, #F2B566 96.56%)",shadow:"#E9A7576E"}},s={args:{label:"住宅火災保險",eng:"Fire Insurance",img:"/testImg/insurance4.png",color:"linear-gradient(274.16deg, #636BDE 18.96%, #5CA2F3 98.08%)",shadow:"#6992D061"}};var u,p,x;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: '旅遊平安險',
    eng: 'Travel Insurance',
    img: '/testImg/insurance1.png',
    color: 'linear-gradient(99.32deg, #40AF72 1.35%, #41AFA8 98.74%)',
    shadow: '#41B09870'
  }
}`,...(x=(p=t.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var h,f,y;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: '車險',
    eng: 'Car Insurance',
    img: '/testImg/insurance2.png',
    color: 'linear-gradient(97.46deg, #D49595 5.39%, #D07154 86.93%)',
    shadow: '#4560A869'
  }
}`,...(y=(f=r.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var w,A,_;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: '旅行業責任險',
    eng: 'Travel Agency Liability Insurance',
    img: '/testImg/insurance3.png',
    color: 'linear-gradient(274.64deg, #EA924F 32.67%, #F2B566 96.56%)',
    shadow: '#E9A7576E'
  }
}`,...(_=(A=a.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};var I,C,v;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: '住宅火災保險',
    eng: 'Fire Insurance',
    img: '/testImg/insurance4.png',
    color: 'linear-gradient(274.16deg, #636BDE 18.96%, #5CA2F3 98.08%)',
    shadow: '#6992D061'
  }
}`,...(v=(C=s.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};const Z=["Travel","Car","TravelAgency","Fire"];export{r as Car,s as Fire,t as Travel,a as TravelAgency,Z as __namedExportsOrder,Y as default};
