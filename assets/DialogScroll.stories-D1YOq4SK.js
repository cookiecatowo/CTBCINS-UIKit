import{r as z,w as m,c,k as O,e as r,u as t,o as f,d as s,n as g,y as E,a as F,x as I,f as $,g as T}from"./vue.esm-bundler-DcUdeB67.js";import{f as j,_ as J}from"./DialogFooter-5m72NVS4.js";import{O as K,o as M}from"./index-CYxz6zhG.js";import{X as P}from"./x-CNIetJjP.js";import"./utils-CHtjtCvc.js";import"./createLucideIcon-BIa0ZYd1.js";const U={name:"DialogScroll"},D=Object.assign(U,{props:{modelValue:{type:Boolean,default:!1},force:{type:Boolean,default:!1},padding:{type:String},margin:{type:String}},emits:["update:modelValue"],setup(i,{emit:w}){const a=i,o=z(a.modelValue),B=w;m(()=>a.modelValue,e=>{o.value=e},{immediate:!0}),m(()=>o.value,e=>{B("update:modelValue",e)});const p=()=>{a.force||(o.value=!1)},h=c(()=>({padding:a.padding})),N=c(()=>({padding:a.margin}));return(e,u)=>(f(),O(t(J),{open:o.value},{default:r(()=>[s(t(M),null,{default:r(()=>[s(t(K),{class:"fixed inset-0 z-50 px-4 lg:px-8 py-16 grid place-items-center overflow-y-auto bg-[#000000]/50 backdrop-blur data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",style:g(N.value),onClick:p},{default:r(()=>[s(t(j),{class:"w-full h-fit p-16",onClick:u[0]||(u[0]=E(()=>{},["stop"])),style:g(h.value)},{default:r(()=>[!i.force&&!e.img?(f(),F("div",{key:0,class:"absolute right-3 top-3 rounded-lg text-[#454545] hover:opacity-50",onClick:p},[s(t(P),{class:"w-8 h-8"})])):I("",!0),$("div",null,[T(e.$slots,"default")])]),_:3},8,["style"])]),_:3},8,["style"])]),_:3})]),_:3},8,["open"]))}}),X=D;D.__docgenInfo={exportName:"default",displayName:"DialogScroll",description:"",tags:{},props:[{name:"modelValue",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"force",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"padding",type:{name:"string"}},{name:"margin",type:{name:"string"}}],events:[{name:"update:modelValue"}],slots:[{name:"default"}],sourceFiles:["D:/Program/VueJs/CTBCINS-UIKit/src/stories/DialogScroll.vue"]};const R={title:"Example/DialogScroll",component:X,argTypes:{force:{control:"boolean"}}},n={args:{modelValue:!0},parameters:{slots:{default:{template:'<div v-for="n in 50">{{n}}</div>'}}}},l={args:{modelValue:!0,force:!0},parameters:{slots:{default:{template:'<div v-for="n in 50">{{n}}</div>'}}}},d={args:{modelValue:!0,padding:"200px 100px 50px 25px",margin:"200px 100px 50px 25px"},parameters:{slots:{default:{template:'<div v-for="n in 50" class="bg-border">{{n}}</div>'}}}};var v,x,y;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    modelValue: true
  },
  parameters: {
    slots: {
      default: {
        template: '<div v-for="n in 50">{{n}}</div>'
      }
    }
  }
}`,...(y=(x=n.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var V,S,_;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    modelValue: true,
    force: true
  },
  parameters: {
    slots: {
      default: {
        template: '<div v-for="n in 50">{{n}}</div>'
      }
    }
  }
}`,...(_=(S=l.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var b,k,C;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    modelValue: true,
    padding: '200px 100px 50px 25px',
    margin: '200px 100px 50px 25px'
  },
  parameters: {
    slots: {
      default: {
        template: '<div v-for="n in 50" class="bg-border">{{n}}</div>'
      }
    }
  }
}`,...(C=(k=d.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};const W=["Default","Force","CustomSize"];export{d as CustomSize,n as Default,l as Force,W as __namedExportsOrder,R as default};
