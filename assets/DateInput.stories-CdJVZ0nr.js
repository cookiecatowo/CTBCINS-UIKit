import{k as D,w as V,a as i,v,t as x,x as c,n as A,l as S,u as _,g as ee,o as s}from"./vue.esm-bundler-C3HUlvCY.js";import{_ as te}from"./Input-7UpNND5I.js";import{D as ae}from"./DatePicker-BoaGxg-e.js";import{T as le}from"./Tooltip-H3ptpWJa.js";import{f as ue}from"./index-J0_2x6-B.js";import"./index-B7eDUBVh.js";import"./index-74akxO0Z.js";import"./utils-CHtjtCvc.js";import"./index-afhknXpz.js";import"./createLucideIcon-BrbXVS4p.js";import"./PopoverContent-CvsjyzjP.js";import"./Drawer-CHxGyPdo.js";const re={class:"flex flex-col gap-y-2"},se={class:"flex flex-col gap-y-4"},oe={key:0,class:"inline items-end break-all"},ne={key:0,class:"text-lg font-semibold"},ie={key:1,class:"text-sm font-normal ml-1 mb-[2px]"},ce={class:"absolute end-0 inset-y-0 flex items-center justify-center px-3 gap-x-2"},de={key:0,class:"text-xs text-alert break-all"},me={name:"DateInput"},L=Object.assign(me,{props:{modelValue:{type:String},minDate:{type:[Date,Object,String]},maxDate:{type:[Date,Object,String]},title:{type:String},subtitle:{type:String,default:""},placeholder:{type:String,default:"請輸入..."},disabled:{type:Boolean,default:!1},err:{type:Boolean,default:!1},errMsg:{type:String,default:""},tooltip:{type:String,default:""},tSize:{type:String,default:""}},emits:["update:modelValue","focus","blur"],setup(e,{emit:Q}){const h=e,E=Q,d=D(!1),W=()=>{d.value=!0,E("focus")},X=()=>{d.value=!1,l.value?(a.value=Z(l.value),a.value?l.value=l.value.replace(/\//g,"").replace(/-/g,""):l.value=""):a.value="",E("blur")},l=D(""),a=D(h.modelValue),Z=u=>{let t=u==null?void 0:u.replace(/\//g,"").replace(/-/g,"");if(t.length===8){const r=t.substr(0,4),o=t.substr(4,2),n=t.substr(6,2);return`${r}-${o}-${n}`}else if(t.length===7){const r=Number(t.substr(0,3))+1911,o=t.substr(3,2),n=t.substr(5,2);return`${r}-${o}-${n}`}else if(t.length===6){const r=Number(t.substr(0,2))+1911,o=t.substr(2,2),n=t.substr(4,2);return`${r}-${o}-${n}`}else return""};return V(()=>h.modelValue,u=>{a.value=u},{immediate:!0}),V(()=>a.value,u=>{u instanceof Date&&(a.value=ue(u,"yyyy-MM-dd"),l.value=a.value.replace(/-/g,"")),a.value&&!l.value&&(l.value=a.value.replace(/-/g,"")),E("update:modelValue",u)},{immediate:!0}),(u,t)=>(s(),i("div",re,[v("div",se,[e.title||e.subtitle?(s(),i("div",oe,[e.title?(s(),i("span",ne,x(e.title),1)):c("",!0),e.subtitle?(s(),i("span",ie,x(e.subtitle),1)):c("",!0)])):c("",!0),v("div",{class:A(["relative w-full items-center",{focus:d.value}])},[S(_(te),{modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=r=>l.value=r),placeholder:e.placeholder,disabled:e.disabled,class:A(["pr-12",{"pr-20":!!e.tooltip,"border-alert":(!!e.errMsg||!!e.err)&&!d.value}]),onFocus:W,onBlur:X},null,8,["modelValue","placeholder","disabled","class"]),v("span",ce,[S(ae,{modelValue:a.value,"onUpdate:modelValue":t[1]||(t[1]=r=>a.value=r),disabled:e.disabled,"min-date":e.minDate,"max-date":e.maxDate},null,8,["modelValue","disabled","min-date","max-date"]),e.tooltip?(s(),ee(le,{key:0,content:e.tooltip,size:e.tSize},null,8,["content","size"])):c("",!0)])],2)]),e.errMsg?(s(),i("span",de,x(e.errMsg),1)):c("",!0)]))}}),pe=L;L.__docgenInfo={exportName:"default",displayName:"DateInput",description:"",tags:{},props:[{name:"modelValue",type:{name:"string"}},{name:"minDate",type:{name:"date|object|string"}},{name:"maxDate",type:{name:"date|object|string"}},{name:"title",type:{name:"string"}},{name:"subtitle",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:"'請輸入...'"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"err",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"errMsg",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"tooltip",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"tSize",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],events:[{name:"update:modelValue"},{name:"focus"},{name:"blur"}],sourceFiles:["D:/Program/VueJs/CTBCINS-UIKit/src/stories/DateInput.vue"]};const Se={title:"Example/DateInput",component:pe,tags:["autodocs"],argTypes:{modelValue:{control:"date"},title:{control:"text"},subtitle:{control:"text"},placeholder:{control:"text"},errMsg:{control:"text"},tooltip:{control:"text"},tSize:{control:{type:"radio"},options:["lg","md","sm","xs"]}}},m={args:{title:"出生年月日",placeholder:"請輸入出生年月日",modelValue:"2021/01/02"}},p={args:{title:"出生年月日",subtitle:"(YYYYMMDD)",placeholder:"請輸入出生年月日"}},f={args:{title:"起程時間",placeholder:"請輸入起程時間",minDate:Date.now(),maxDate:"2024/12/31"}},g={args:{title:"出生年月日",placeholder:"請輸入出生年月日",err:!0}},b={args:{title:"出生年月日",placeholder:"請輸入出生年月日",errMsg:"出生年月日為必填項目"}},y={args:{title:"出生年月日",placeholder:"請輸入出生年月日",disabled:!0}},F={args:{title:"出生年月日",placeholder:"請輸入出生年月日",tooltip:"請輸入出生年月日"}};var B,M,C;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    title: '出生年月日',
    placeholder: '請輸入出生年月日',
    modelValue: '2021/01/02'
  }
}`,...(C=(M=m.parameters)==null?void 0:M.docs)==null?void 0:C.source}}};var k,$,I;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    title: '出生年月日',
    subtitle: '(YYYYMMDD)',
    placeholder: '請輸入出生年月日'
  }
}`,...(I=($=p.parameters)==null?void 0:$.docs)==null?void 0:I.source}}};var N,T,Y;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    title: '起程時間',
    placeholder: '請輸入起程時間',
    minDate: Date.now(),
    maxDate: '2024/12/31'
  }
}`,...(Y=(T=f.parameters)==null?void 0:T.docs)==null?void 0:Y.source}}};var z,j,w;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    title: '出生年月日',
    placeholder: '請輸入出生年月日',
    err: true
  }
}`,...(w=(j=g.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var O,U,P;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    title: '出生年月日',
    placeholder: '請輸入出生年月日',
    errMsg: '出生年月日為必填項目'
  }
}`,...(P=(U=b.parameters)==null?void 0:U.docs)==null?void 0:P.source}}};var R,J,K;y.parameters={...y.parameters,docs:{...(R=y.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    title: '出生年月日',
    placeholder: '請輸入出生年月日',
    disabled: true
  }
}`,...(K=(J=y.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var q,G,H;F.parameters={...F.parameters,docs:{...(q=F.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    title: '出生年月日',
    placeholder: '請輸入出生年月日',
    tooltip: '請輸入出生年月日'
  }
}`,...(H=(G=F.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};const Be=["Default","SubTitle","Range","Error","ErrorMsg","Disabled","Tooltip"];export{m as Default,y as Disabled,g as Error,b as ErrorMsg,f as Range,p as SubTitle,F as Tooltip,Be as __namedExportsOrder,Se as default};
