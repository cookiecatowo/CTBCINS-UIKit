import{o as c,a as b,v as S,c as N,g as D,j as f,l as u,T as I,u as l,r as A,m as T,k as j,w as g,n as E,t as P,x as F}from"./vue.esm-bundler-C3HUlvCY.js";import{C as J,a as K,b as L}from"./index-afhknXpz.js";import{c as O}from"./utils-CHtjtCvc.js";function U(e,r){return c(),b("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[S("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m4.5 12.75 6 6 9-13.5"})])}const w={__name:"Checkbox",props:{defaultChecked:{type:Boolean,required:!1},checked:{type:[Boolean,String],required:!1},disabled:{type:Boolean,required:!1},required:{type:Boolean,required:!1},name:{type:String,required:!1},value:{type:String,required:!1},id:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1}},emits:["update:checked"],setup(e,{emit:r}){const a=e,s=r,i=N(()=>{const{class:t,...p}=a;return p}),m=J(i,s);return(t,p)=>(c(),D(l(L),T(l(m),{class:l(O)("peer h-5 w-5 shrink-0 rounded-full border disabled:cursor-not-allowed disabled:bg-light-gray",a.class)}),{default:f(()=>[u(I,{name:"bounce"},{default:f(()=>[u(l(K),{class:"flex h-full w-full items-center justify-center text-white"},{default:f(()=>[A(t.$slots,"default",{},()=>[u(l(U),{class:"h-4 w-4",style:{"stroke-width":"3"}})])]),_:3})]),_:3})]),_:3},16,["class"]))}};w.__docgenInfo={exportName:"default",displayName:"Checkbox",description:"",tags:{},props:[{name:"defaultChecked",type:{name:"boolean"},required:!1},{name:"checked",type:{name:"boolean|string"},required:!1},{name:"disabled",type:{name:"boolean"},required:!1},{name:"required",type:{name:"boolean"},required:!1},{name:"name",type:{name:"string"},required:!1},{name:"value",type:{name:"string"},required:!1},{name:"id",type:{name:"string"},required:!1},{name:"asChild",type:{name:"boolean"},required:!1},{name:"as",type:{name:"null"},required:!1},{name:"class",type:{name:"null"},required:!1}],events:[{name:"update:checked"}],slots:[{name:"default"}],sourceFiles:["D:/Program/VueJs/CTBCINS-UIKit/src/components/ui/checkbox/Checkbox.vue"]};const Y={class:"flex gap-2 items-center"},$={key:0,class:"text-base break-all"},z={name:"Checkbox"},B=Object.assign(z,{props:{modelValue:{type:Boolean},disabled:{type:Boolean,default:!1},label:{type:String},list:{type:Array,default(){return[!0,!1]}}},emits:["update:modelValue"],setup(e,{emit:r}){const a=e,s=j(!1),i=r;g(()=>a.modelValue,t=>{s.value=t},{immediate:!0}),g(()=>s.value,t=>{i("update:modelValue",t)});const m=()=>{a.disabled||(s.value=s.value==a.list[0]?a.list[1]:a.list[0])};return(t,p)=>(c(),b("div",Y,[u(l(w),{checked:s.value==e.list[0],disabled:e.disabled,onClick:m,class:E(s.value==e.list[0]?"border-primary bg-primary":"border-outer-frame bg-white")},null,8,["checked","disabled","class"]),e.label?(c(),b("span",$,P(e.label),1)):F("",!0)]))}}),G=B;B.__docgenInfo={exportName:"default",displayName:"Checkbox",description:"",tags:{},props:[{name:"modelValue",type:{name:"boolean"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"label",type:{name:"string"}},{name:"list",type:{name:"array"},defaultValue:{func:!1,value:"[true, false]"}}],events:[{name:"update:modelValue"}],sourceFiles:["D:/Program/VueJs/CTBCINS-UIKit/src/stories/Checkbox.vue"]};const R={title:"Example/Checkbox",component:G,tags:["autodocs"],argTypes:{modelValue:{control:"boolean"},disabled:{control:"text"},label:{control:"text"}}},o={args:{modelValue:!0,label:"通訊地址同要保人"}},n={args:{modelValue:!1,disabled:!0}},d={args:{modelValue:!1,list:["Y","N"]}};var h,y,k;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    modelValue: true,
    label: '通訊地址同要保人'
  }
}`,...(k=(y=o.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var C,x,q;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    modelValue: false,
    disabled: true
  }
}`,...(q=(x=n.parameters)==null?void 0:x.docs)==null?void 0:q.source}}};var V,_,v;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    modelValue: false,
    list: ['Y', 'N']
  }
}`,...(v=(_=d.parameters)==null?void 0:_.docs)==null?void 0:v.source}}};const W=["Default","disabled","CusetomList"];export{d as CusetomList,o as Default,W as __namedExportsOrder,R as default,n as disabled};