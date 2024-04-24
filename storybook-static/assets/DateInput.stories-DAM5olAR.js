import{r as E,w as v,a as n,f as i,v as h,x as c,j as V,d as A,u as X,k as Z,o as u}from"./vue.esm-bundler-DcUdeB67.js";import{_}from"./Input-fjww198a.js";import{D as ee}from"./DatePicker-BRleggc9.js";import{T as te}from"./Tooltip-Drkud6tJ.js";import{f as ae}from"./index-J0_2x6-B.js";import"./index-B7eDUBVh.js";import"./index-BheKWQQi.js";import"./utils-CHtjtCvc.js";import"./index-CYxz6zhG.js";import"./createLucideIcon-BIa0ZYd1.js";import"./PopoverContent-BPtjAuAX.js";import"./Drawer-BN3q2xnJ.js";const le={class:"flex flex-col gap-y-2"},se={class:"flex flex-col gap-y-4"},re={class:"inline items-end break-all"},ue={key:0,class:"text-lg font-semibold"},oe={key:1,class:"text-sm font-normal ml-1 mb-[2px]"},ne={class:"absolute end-0 inset-y-0 flex items-center justify-center px-3 gap-x-2"},ie={key:0,class:"text-xs text-alert"},ce={name:"DateInput"},q=Object.assign(ce,{props:{modelValue:{type:String},minDate:{type:[Date,Object,String]},maxDate:{type:[Date,Object,String]},title:{type:String},subtitle:{type:String,default:""},placeholder:{type:String,default:"請輸入..."},disabled:{type:Boolean,default:!1},errMsg:{type:String,default:""},tooltip:{type:String,default:""},tSize:{type:String,default:""}},emits:["update:modelValue","focus","blur"],setup(e,{emit:G}){const S=e,b=G,o=E(!1),H=()=>{o.value=!0,b("focus")},L=()=>{o.value=!1,l.value=Q(r.value),l.value||(r.value=""),b("blur")},r=E(""),l=E(S.modelValue),Q=t=>{let a=t==null?void 0:t.replace(/\//g,"-");const s=a.split("-");if(s.length===3){const F=s[0],D=parseInt(s[1]).toString().padStart(2,"0"),x=parseInt(s[2]).toString().padStart(2,"0");return`${F}-${D}-${x}`}else if(a.length===8){const F=a.substr(0,4),D=a.substr(4,2),x=a.substr(6,2);return`${F}-${D}-${x}`}else return""},W=t=>t;return v(()=>S.modelValue,t=>{l.value=t},{immediate:!0}),v(()=>l.value,t=>{t instanceof Date&&(l.value=W(ae(t,"yyyy-MM-dd"))),r.value=l.value?l.value.replace(/-/g,""):"",b("update:modelValue",t)},{immediate:!0}),(t,a)=>(u(),n("div",le,[i("div",se,[i("div",re,[e.title?(u(),n("span",ue,h(e.title),1)):c("",!0),e.subtitle?(u(),n("span",oe,h(e.subtitle),1)):c("",!0)]),i("div",{class:V(["relative w-full items-center",{focus:o.value}])},[A(X(_),{modelValue:r.value,"onUpdate:modelValue":a[0]||(a[0]=s=>r.value=s),placeholder:e.placeholder,disabled:e.disabled,class:V(["pr-12",{"pr-20":!!e.tooltip,"border-alert":!!e.errMsg&&!o.value}]),onFocus:H,onBlur:L},null,8,["modelValue","placeholder","disabled","class"]),i("span",ne,[A(ee,{modelValue:l.value,"onUpdate:modelValue":a[1]||(a[1]=s=>l.value=s),disabled:e.disabled,"min-date":e.minDate,"max-date":e.maxDate},null,8,["modelValue","disabled","min-date","max-date"]),e.tooltip?(u(),Z(te,{key:0,content:e.tooltip,size:e.tSize},null,8,["content","size"])):c("",!0)])],2)]),e.errMsg?(u(),n("span",ie,h(e.errMsg),1)):c("",!0)]))}}),de=q;q.__docgenInfo={exportName:"default",displayName:"DateInput",description:"",tags:{},props:[{name:"modelValue",type:{name:"string"}},{name:"minDate",type:{name:"date|object|string"}},{name:"maxDate",type:{name:"date|object|string"}},{name:"title",type:{name:"string"}},{name:"subtitle",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:"'請輸入...'"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"errMsg",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"tooltip",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"tSize",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],events:[{name:"update:modelValue"},{name:"focus"},{name:"blur"}],sourceFiles:["D:/Program/VueJs/CTBCINS-UIKit/src/stories/DateInput.vue"]};const ve={title:"Example/DateInput",component:de,tags:["autodocs"],argTypes:{modelValue:{control:"date"},title:{control:"text"},subtitle:{control:"text"},placeholder:{control:"text"},errMsg:{control:"text"},tooltip:{control:"text"},tSize:{control:{type:"radio"},options:["lg","md","sm","xs"]}}},d={args:{title:"出生年月日",placeholder:"請輸入出生年月日",modelValue:"2021/01/02"}},m={args:{title:"出生年月日",subtitle:"(YYYYMMDD)",placeholder:"請輸入出生年月日"}},p={args:{title:"起程時間",placeholder:"請輸入起程時間",minDate:Date.now(),maxDate:"2024/12/31"}},f={args:{title:"出生年月日",placeholder:"請輸入出生年月日",errMsg:"出生年月日為必填項目"}},g={args:{title:"出生年月日",placeholder:"請輸入出生年月日",disabled:!0}},y={args:{title:"出生年月日",placeholder:"請輸入出生年月日",tooltip:"請輸入出生年月日"}};var B,M,C;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    title: '出生年月日',
    placeholder: '請輸入出生年月日',
    modelValue: '2021/01/02'
  }
}`,...(C=(M=d.parameters)==null?void 0:M.docs)==null?void 0:C.source}}};var I,k,T;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    title: '出生年月日',
    subtitle: '(YYYYMMDD)',
    placeholder: '請輸入出生年月日'
  }
}`,...(T=(k=m.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var Y,$,j;p.parameters={...p.parameters,docs:{...(Y=p.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    title: '起程時間',
    placeholder: '請輸入起程時間',
    minDate: Date.now(),
    maxDate: '2024/12/31'
  }
}`,...(j=($=p.parameters)==null?void 0:$.docs)==null?void 0:j.source}}};var z,N,w;f.parameters={...f.parameters,docs:{...(z=f.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    title: '出生年月日',
    placeholder: '請輸入出生年月日',
    errMsg: '出生年月日為必填項目'
  }
}`,...(w=(N=f.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var O,U,P;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    title: '出生年月日',
    placeholder: '請輸入出生年月日',
    disabled: true
  }
}`,...(P=(U=g.parameters)==null?void 0:U.docs)==null?void 0:P.source}}};var R,J,K;y.parameters={...y.parameters,docs:{...(R=y.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    title: '出生年月日',
    placeholder: '請輸入出生年月日',
    tooltip: '請輸入出生年月日'
  }
}`,...(K=(J=y.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const Ve=["Default","SubTitle","Range","Error","Disabled","Tooltip"];export{d as Default,g as Disabled,f as Error,p as Range,m as SubTitle,y as Tooltip,Ve as __namedExportsOrder,ve as default};
