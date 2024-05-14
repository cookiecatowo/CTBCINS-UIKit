import{k as I,w as c,c as f,g as O,j as s,u as e,y as E,o as g,l as a,e as v,z as F,a as $,x as j,v as H,r as T}from"./vue.esm-bundler-C3HUlvCY.js";import{f as J,_ as K}from"./DialogFooter-DzUZ3Iiv.js";import{O as M,I as P,k as U,o as X}from"./index-afhknXpz.js";import{X as q}from"./x-B2ctsR4a.js";import"./utils-CHtjtCvc.js";import"./createLucideIcon-BrbXVS4p.js";const A={name:"DialogScroll"},h=Object.assign(A,{props:{modelValue:{type:Boolean,default:!1},force:{type:Boolean,default:!1},padding:{type:String},margin:{type:String}},emits:["update:modelValue","close"],setup(i,{emit:w}){const t=i,l=I(t.modelValue),p=w;c(()=>t.modelValue,o=>{l.value=o},{immediate:!0}),c(()=>l.value,o=>{p("update:modelValue",o)});const u=()=>{t.force||(l.value=!1),p("close")},B=f(()=>({padding:t.padding})),N=f(()=>({padding:t.margin}));return(o,m)=>{const z=E("VisuallyHidden");return g(),O(e(K),{open:l.value},{default:s(()=>[a(e(X),null,{default:s(()=>[a(e(M),{class:"fixed inset-0 z-50 px-4 lg:pl-[170px] lg:pr-8 py-16 grid place-items-center overflow-y-auto bg-[#000000]/50 backdrop-blur data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",style:v(N.value),onClick:u},{default:s(()=>[a(e(J),{class:"w-full h-fit p-16",onClick:m[0]||(m[0]=F(()=>{},["stop"])),style:v(B.value)},{default:s(()=>[a(z,{asChild:""},{default:s(()=>[a(e(P)),a(e(U))]),_:1}),i.force?j("",!0):(g(),$("div",{key:0,class:"absolute right-3 top-3 rounded-lg text-[#454545] hover:opacity-50",onClick:u},[a(e(q),{class:"w-8 h-8"})])),H("div",null,[T(o.$slots,"default")])]),_:3},8,["style"])]),_:3},8,["style"])]),_:3})]),_:3},8,["open"])}}}),G=h;h.__docgenInfo={exportName:"default",displayName:"DialogScroll",description:"",tags:{},props:[{name:"modelValue",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"force",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"padding",type:{name:"string"}},{name:"margin",type:{name:"string"}}],events:[{name:"update:modelValue"},{name:"close"}],slots:[{name:"default"}],sourceFiles:["D:/Program/VueJs/CTBCINS-UIKit/src/stories/DialogScroll.vue"]};const ee={title:"Example/DialogScroll",component:G,argTypes:{force:{control:"boolean"}}},r={args:{modelValue:!0},parameters:{slots:{default:{template:'<div v-for="n in 50">{{n}}</div>'}}}},n={args:{modelValue:!0,force:!0},parameters:{slots:{default:{template:'<div v-for="n in 50">{{n}}</div>'}}}},d={args:{modelValue:!0,padding:"200px 100px 50px 25px",margin:"200px 100px 50px 25px"},parameters:{slots:{default:{template:'<div v-for="n in 50" class="bg-outer-frame">{{n}}</div>'}}}};var x,y,V;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(V=(y=r.parameters)==null?void 0:y.docs)==null?void 0:V.source}}};var _,S,k;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(k=(S=n.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var C,b,D;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    modelValue: true,
    padding: '200px 100px 50px 25px',
    margin: '200px 100px 50px 25px'
  },
  parameters: {
    slots: {
      default: {
        template: '<div v-for="n in 50" class="bg-outer-frame">{{n}}</div>'
      }
    }
  }
}`,...(D=(b=d.parameters)==null?void 0:b.docs)==null?void 0:D.source}}};const ae=["Default","Force","CustomSize"];export{d as CustomSize,r as Default,n as Force,ae as __namedExportsOrder,ee as default};
