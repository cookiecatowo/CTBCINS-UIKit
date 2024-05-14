import{A as Q,V as W,u as b,o as a,a as u,C as X,n as y,k as h,c as D,v,t as B,x as s,l as F,e as Y}from"./vue.esm-bundler-C3HUlvCY.js";import{u as Z}from"./index-74akxO0Z.js";import{c as ee}from"./utils-CHtjtCvc.js";import{T as te}from"./Tooltip-H3ptpWJa.js";import{f as S}from"./index-B7eDUBVh.js";import"./index-afhknXpz.js";const R={__name:"Textarea",props:{class:{type:null,required:!1},defaultValue:{type:[String,Number],required:!1},modelValue:{type:[String,Number],required:!1}},emits:["update:modelValue"],setup(e,{emit:f}){const l=e,t=Z(l,"modelValue",f,{passive:!0,defaultValue:l.defaultValue});return(g,o)=>Q((a(),u("textarea",{"onUpdate:modelValue":o[0]||(o[0]=x=>X(t)?t.value=x:null),class:y(b(ee)("flex w-full rounded-lg border border-outer-frame p-4 text-base placeholder:text-outer-frame disabled:cursor-not-allowed disabled:text-outer-frame disabled:bg-light-gray focus:outline-none",l.class))},null,2)),[[W,b(t)]])}};R.__docgenInfo={exportName:"default",displayName:"Textarea",description:"",tags:{},props:[{name:"class",type:{name:"null"},required:!1},{name:"defaultValue",type:{name:"string|number"},required:!1},{name:"modelValue",type:{name:"string|number"},required:!1}],events:[{name:"update:modelValue"}],sourceFiles:["D:/Program/VueJs/CTBCINS-UIKit/src/components/ui/textarea/Textarea.vue"]};const ae={class:"flex flex-col gap-y-2"},ue={class:"flex flex-col gap-y-4"},le={key:0,class:"inline items-end break-all"},se={key:0,class:"text-lg font-semibold"},re={key:1,class:"text-sm font-normal ml-1 mb-[2px]"},oe={key:0,class:"absolute end-0 top-4 inset-y-0 flex items-start justify-center px-3 gap-x-2"},ne={key:0,class:"text-xs text-alert break-all"},ie={name:"Textarea"},_=Object.assign(ie,{props:{modelValue:{type:[String,Number]},title:{type:String},subtitle:{type:String,default:""},placeholder:{type:String,default:"請輸入..."},disabled:{type:Boolean,default:!1},errMsg:{type:String,default:""},tooltip:{type:String,default:""},tSize:{type:String,default:""},minHeight:{type:String,default:"170px"}},emits:["update:modelValue","focus","blur"],setup(e,{emit:f}){const l=e,r=f,t=h(!1);h(!0);const g=D({get(){return l.modelValue},set(E){r("update:modelValue",E)}}),o=()=>{t.value=!0,r("focus")},x=()=>{t.value=!1,r("blur")},G=D(()=>({minHeight:l.minHeight}));return(E,V)=>(a(),u("div",ae,[v("div",ue,[e.title||e.subtitle?(a(),u("div",le,[e.title?(a(),u("span",se,B(e.title),1)):s("",!0),e.subtitle?(a(),u("span",re,B(e.subtitle),1)):s("",!0)])):s("",!0),v("div",{class:y(["relative w-full items-center",{focus:t.value}])},[F(b(R),{modelValue:g.value,"onUpdate:modelValue":V[0]||(V[0]=L=>g.value=L),placeholder:e.placeholder,disabled:e.disabled,style:Y(G.value),class:y({"pr-10":!!e.tooltip,"border-alert":!!e.errMsg&&!t.value}),onFocus:o,onBlur:x},null,8,["modelValue","placeholder","disabled","style","class"]),e.tooltip?(a(),u("span",oe,[F(te,{content:e.tooltip,size:e.tSize},null,8,["content","size"])])):s("",!0)],2)]),e.errMsg?(a(),u("span",ne,B(e.errMsg),1)):s("",!0)]))}}),ce=_;_.__docgenInfo={exportName:"default",displayName:"Textarea",description:"",tags:{},props:[{name:"modelValue",type:{name:"string|number"}},{name:"title",type:{name:"string"}},{name:"subtitle",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:"'請輸入...'"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"errMsg",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"tooltip",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"tSize",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"minHeight",type:{name:"string"},defaultValue:{func:!1,value:"'170px'"}}],events:[{name:"update:modelValue"},{name:"focus"},{name:"blur"}],sourceFiles:["D:/Program/VueJs/CTBCINS-UIKit/src/stories/Textarea.vue"]};const Be={title:"Example/Textarea",component:ce,tags:["autodocs"],argTypes:{modelValue:{control:"text"},title:{control:"text"},subtitle:{control:"text"},placeholder:{control:"text"},errMsg:{control:"text"},tooltip:{control:"text"},tSize:{control:{type:"radio"},options:["lg","md","sm","xs"]}},args:{focus:S(),blur:S()}},n={args:{title:"身分證號/統編",placeholder:"請輸入身分證號/統編"}},i={args:{title:"市內電話",subtitle:"(市話、手機與信箱擇一填寫即可)",placeholder:"請輸入市內電話"}},c={args:{title:"身分證號/統編",placeholder:"請輸入身分證號/統編",disabled:!0}},d={args:{title:"身分證號/統編",placeholder:"請輸入身分證號/統編",errMsg:"請輸入正確的身分證號/統編"}},m={args:{title:"身分證號/統編",placeholder:"請輸入身分證號/統編",tooltip:"身分證號/統編",tSize:"xs"}},p={args:{title:"身分證號/統編",placeholder:"請輸入身分證號/統編",minHeight:"100px"}};var A,T,C;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    title: '身分證號/統編',
    placeholder: '請輸入身分證號/統編'
  }
}`,...(C=(T=n.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var N,M,k;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    title: '市內電話',
    subtitle: '(市話、手機與信箱擇一填寫即可)',
    placeholder: '請輸入市內電話'
  }
}`,...(k=(M=i.parameters)==null?void 0:M.docs)==null?void 0:k.source}}};var z,H,q;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    title: '身分證號/統編',
    placeholder: '請輸入身分證號/統編',
    disabled: true
  }
}`,...(q=(H=c.parameters)==null?void 0:H.docs)==null?void 0:q.source}}};var I,w,U;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    title: '身分證號/統編',
    placeholder: '請輸入身分證號/統編',
    errMsg: '請輸入正確的身分證號/統編'
  }
}`,...(U=(w=d.parameters)==null?void 0:w.docs)==null?void 0:U.source}}};var j,J,K;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    title: '身分證號/統編',
    placeholder: '請輸入身分證號/統編',
    tooltip: '身分證號/統編',
    tSize: 'xs'
  }
}`,...(K=(J=m.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var O,P,$;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    title: '身分證號/統編',
    placeholder: '請輸入身分證號/統編',
    minHeight: '100px'
  }
}`,...($=(P=p.parameters)==null?void 0:P.docs)==null?void 0:$.source}}};const be=["Default","SubTitle","Disabled","Error","Tooltip","CustomHeight"];export{p as CustomHeight,n as Default,c as Disabled,d as Error,i as SubTitle,m as Tooltip,be as __namedExportsOrder,Be as default};
