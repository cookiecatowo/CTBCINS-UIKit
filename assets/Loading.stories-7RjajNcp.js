import{r as y,w as i,k,e as I,o as n,a as d,f as e}from"./vue.esm-bundler-DcUdeB67.js";import{O as B}from"./Overlay-Okwp4Q1c.js";import{f as C}from"./index-B7eDUBVh.js";import"./DialogFooter-5m72NVS4.js";import"./index-CYxz6zhG.js";import"./utils-CHtjtCvc.js";const L={key:0,class:"loading relative w-fit h-fit rounded-full overflow-hidden"},w=["src"],N={key:1,class:"lds-ring z-[100]"},O=e("div",null,null,-1),S=e("div",null,null,-1),b=e("div",null,null,-1),D=e("div",null,null,-1),E=[O,S,b,D],T={name:"Loading"},V=Object.assign(T,{props:{modelValue:{type:Boolean,default:!1},img:{type:String}},emits:["update:modelValue"],setup(l,{emit:v}){const r=l,o=y(r.modelValue),h=v;return i(()=>r.modelValue,a=>{o.value=a},{immediate:!0}),i(()=>o.value,a=>{h("update:modelValue",a)}),(a,m)=>(n(),k(B,{modelValue:o.value,"onUpdate:modelValue":m[0]||(m[0]=x=>o.value=x)},{default:I(()=>[l.img?(n(),d("div",L,[e("img",{src:l.img,class:"max-h-[100px] lg:max-h-[150px]"},null,8,w)])):(n(),d("div",N,E))]),_:1},8,["modelValue"]))}}),U=V;V.__docgenInfo={exportName:"default",displayName:"Loading",description:"",tags:{},props:[{name:"modelValue",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"img",type:{name:"string"}}],events:[{name:"update:modelValue"}],sourceFiles:["D:/Program/VueJs/CTBCINS-UIKit/src/stories/Loading.vue"]};const q={title:"Example/Loading",component:U,argTypes:{modelValue:{control:"boolean"},img:{control:"text"}},args:{onClick:C()}},t={args:{modelValue:!0}},s={args:{modelValue:!0,img:"/testImg/icon.png"}};var u,c,p;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    modelValue: true
  }
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var g,f,_;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    modelValue: true,
    img: '/testImg/icon.png'
  }
}`,...(_=(f=s.parameters)==null?void 0:f.docs)==null?void 0:_.source}}};const A=["Default","CoustomImg"];export{s as CoustomImg,t as Default,A as __namedExportsOrder,q as default};
