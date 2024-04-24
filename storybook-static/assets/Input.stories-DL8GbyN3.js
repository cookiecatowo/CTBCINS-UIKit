import{o as t,a as u,f as l,r as w,c as D,v as y,x as a,j as F,d as _,u as x,k as h}from"./vue.esm-bundler-DcUdeB67.js";import{_ as ee}from"./Input-fjww198a.js";import{T as te}from"./Tooltip-Drkud6tJ.js";import{f as S}from"./index-B7eDUBVh.js";import"./index-BheKWQQi.js";import"./utils-CHtjtCvc.js";import"./index-CYxz6zhG.js";function ae(e,g){return t(),u("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[l("path",{"fill-rule":"evenodd",d:"M3.28 2.22a.75.75 0 0 0-1.06 1.06l14.5 14.5a.75.75 0 1 0 1.06-1.06l-1.745-1.745a10.029 10.029 0 0 0 3.3-4.38 1.651 1.651 0 0 0 0-1.185A10.004 10.004 0 0 0 9.999 3a9.956 9.956 0 0 0-4.744 1.194L3.28 2.22ZM7.752 6.69l1.092 1.092a2.5 2.5 0 0 1 3.374 3.373l1.091 1.092a4 4 0 0 0-5.557-5.557Z","clip-rule":"evenodd"}),l("path",{d:"m10.748 13.93 2.523 2.523a9.987 9.987 0 0 1-3.27.547c-4.258 0-7.894-2.66-9.337-6.41a1.651 1.651 0 0 1 0-1.186A10.007 10.007 0 0 1 2.839 6.02L6.07 9.252a4 4 0 0 0 4.678 4.678Z"})])}function ue(e,g){return t(),u("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[l("path",{d:"M10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"}),l("path",{"fill-rule":"evenodd",d:"M.664 10.59a1.651 1.651 0 0 1 0-1.186A10.004 10.004 0 0 1 10 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0 1 10 17c-4.257 0-7.893-2.66-9.336-6.41ZM14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z","clip-rule":"evenodd"})])}const le={class:"flex flex-col gap-y-2"},re={class:"flex flex-col gap-y-4"},se={class:"inline items-end break-all"},oe={key:0,class:"text-lg font-semibold"},ne={key:1,class:"text-sm font-normal ml-1 mb-[2px]"},ce={key:0,class:"absolute end-0 inset-y-0 flex items-center justify-center px-3 gap-x-2"},ie={key:0,class:"text-xs text-alert"},de={name:"Input"},R=Object.assign(de,{props:{modelValue:{type:[String,Number]},title:{type:String},subtitle:{type:String,default:""},placeholder:{type:String,default:"請輸入..."},disabled:{type:Boolean,default:!1},errMsg:{type:String,default:""},tooltip:{type:String,default:""},tSize:{type:String,default:""},password:{type:Boolean,default:!1},number:{type:Boolean,default:!1}},emits:["update:modelValue","focus","blur"],setup(e,{emit:g}){const B=e,b=g,o=w(!1),s=w(!0),E=D({get(){return B.modelValue},set(A){b("update:modelValue",A)}}),W=()=>{o.value=!0,b("focus")},X=()=>{o.value=!1,b("blur")},Y=D(()=>B.password&&s.value?"password":B.number?"number":"text");return(A,r)=>(t(),u("div",le,[l("div",re,[l("div",se,[e.title?(t(),u("span",oe,y(e.title),1)):a("",!0),e.subtitle?(t(),u("span",ne,y(e.subtitle),1)):a("",!0)]),l("div",{class:F(["relative w-full items-center",{focus:o.value}])},[_(x(ee),{modelValue:E.value,"onUpdate:modelValue":r[0]||(r[0]=v=>E.value=v),placeholder:e.placeholder,disabled:e.disabled,type:Y.value,class:F({"pr-10":!!e.tooltip||!!e.password,"pr-20":!!e.tooltip&&!!e.password,"border-alert":!!e.errMsg&&!o.value}),onFocus:W,onBlur:X},null,8,["modelValue","placeholder","disabled","type","class"]),e.tooltip||e.password?(t(),u("span",ce,[e.password&&!s.value?(t(),h(x(ue),{key:0,class:"w-6 h-6 text-tooltip cursor-pointer",onClick:r[1]||(r[1]=v=>s.value=!0)})):a("",!0),e.password&&s.value?(t(),h(x(ae),{key:1,class:"w-6 h-6 text-tooltip cursor-pointer",onClick:r[2]||(r[2]=v=>s.value=!1)})):a("",!0),e.tooltip?(t(),h(te,{key:2,content:e.tooltip,size:e.tSize},null,8,["content","size"])):a("",!0)])):a("",!0)],2)]),e.errMsg?(t(),u("span",ie,y(e.errMsg),1)):a("",!0)]))}}),pe=R;R.__docgenInfo={exportName:"default",displayName:"Input",description:"",tags:{},props:[{name:"modelValue",type:{name:"string|number"}},{name:"title",type:{name:"string"}},{name:"subtitle",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:"'請輸入...'"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"errMsg",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"tooltip",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"tSize",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"password",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"number",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"focus"},{name:"blur"}],sourceFiles:["D:/Program/VueJs/CTBCINS-UIKit/src/stories/Input.vue"]};const xe={title:"Example/Input",component:pe,tags:["autodocs"],argTypes:{modelValue:{control:"text"},title:{control:"text"},subtitle:{control:"text"},placeholder:{control:"text"},errMsg:{control:"text"},tooltip:{control:"text"},tSize:{control:{type:"radio"},options:["lg","md","sm","xs"]}},args:{focus:S(),blur:S()}},n={args:{title:"身分證號/統編",placeholder:"請輸入身分證號/統編"}},c={args:{title:"市內電話",subtitle:"(市話、手機與信箱擇一填寫即可)",placeholder:"請輸入市內電話"}},i={args:{title:"密碼",placeholder:"請輸入密碼",password:!0}},d={args:{title:"天數",placeholder:"請輸入天數",number:!0}},p={args:{title:"身分證號/統編",placeholder:"請輸入身分證號/統編",disabled:!0}},m={args:{title:"身分證號/統編",placeholder:"請輸入身分證號/統編",errMsg:"請輸入正確的身分證號/統編"}},f={args:{title:"身分證號/統編",placeholder:"請輸入身分證號/統編",tooltip:"身分證號/統編",tSize:"xs"}};var V,C,k;n.parameters={...n.parameters,docs:{...(V=n.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    title: '身分證號/統編',
    placeholder: '請輸入身分證號/統編'
  }
}`,...(k=(C=n.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var M,N,z;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    title: '市內電話',
    subtitle: '(市話、手機與信箱擇一填寫即可)',
    placeholder: '請輸入市內電話'
  }
}`,...(z=(N=c.parameters)==null?void 0:N.docs)==null?void 0:z.source}}};var I,T,Z;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    title: '密碼',
    placeholder: '請輸入密碼',
    password: true
  }
}`,...(Z=(T=i.parameters)==null?void 0:T.docs)==null?void 0:Z.source}}};var $,j,P;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    title: '天數',
    placeholder: '請輸入天數',
    number: true
  }
}`,...(P=(j=d.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};var L,O,U;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    title: '身分證號/統編',
    placeholder: '請輸入身分證號/統編',
    disabled: true
  }
}`,...(U=(O=p.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};var H,J,K;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    title: '身分證號/統編',
    placeholder: '請輸入身分證號/統編',
    errMsg: '請輸入正確的身分證號/統編'
  }
}`,...(K=(J=m.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var q,G,Q;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    title: '身分證號/統編',
    placeholder: '請輸入身分證號/統編',
    tooltip: '身分證號/統編',
    tSize: 'xs'
  }
}`,...(Q=(G=f.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};const he=["Default","SubTitle","Password","Number","Disabled","Error","Tooltip"];export{n as Default,p as Disabled,m as Error,d as Number,i as Password,c as SubTitle,f as Tooltip,he as __namedExportsOrder,xe as default};
