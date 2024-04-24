import{c as E,k as S,e as k,n as T,u as B,o as h,f as F,v as N}from"./vue.esm-bundler-DcUdeB67.js";import{_ as v}from"./Label-C3_X6Y2E.js";import"./index-CYxz6zhG.js";import"./utils-CHtjtCvc.js";const I={class:"text-sm text-white font-medium tracking-widest"},P={name:"Tag"},w=Object.assign(P,{props:{label:{type:String},color:{type:String}},setup(t){const c=t,D=E(()=>{switch(c.color||"primary"){case"primary":return{backgroundColor:"#037E80"};case"red":return{backgroundColor:"#F46F6F"};case"yellow":return{backgroundColor:"#EFA45B"};default:return{backgroundColor:c.color}}});return(L,O)=>(h(),S(B(v),{class:"flex justify-center items-center h-[33px] min-w-[93px] w-fit rounded-full px-3",style:T(D.value)},{default:k(()=>[F("span",I,N(t.label),1)]),_:1},8,["style"]))}}),j=w;w.__docgenInfo={exportName:"default",displayName:"Tag",description:"",tags:{},props:[{name:"label",type:{name:"string"}},{name:"color",type:{name:"string"}}],sourceFiles:["D:/Program/VueJs/CTBCINS-UIKit/src/stories/Tag.vue"]};const J={title:"Example/Tag",component:j,tags:["autodocs"],argTypes:{label:{control:"text"},color:{control:"text"}}},e={args:{label:"活動"}},r={args:{label:"系統",color:"red"}},o={args:{label:"重要通知",color:"yellow"}},a={args:{label:"其他",color:"#A4A4A4"}},s={args:{label:"重要通知重要通知重要通知重要通知"}};var l,n,u;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: '活動'
  }
}`,...(u=(n=e.parameters)==null?void 0:n.docs)==null?void 0:u.source}}};var m,p,i;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: '系統',
    color: 'red'
  }
}`,...(i=(p=r.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var d,g,b;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: '重要通知',
    color: 'yellow'
  }
}`,...(b=(g=o.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var y,f,C;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: '其他',
    color: '#A4A4A4'
  }
}`,...(C=(f=a.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var _,x,A;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: '重要通知重要通知重要通知重要通知'
  }
}`,...(A=(x=s.parameters)==null?void 0:x.docs)==null?void 0:A.source}}};const K=["Primary","Red","Yellow","CustomColor","Long"];export{a as CustomColor,s as Long,e as Primary,r as Red,o as Yellow,K as __namedExportsOrder,J as default};
