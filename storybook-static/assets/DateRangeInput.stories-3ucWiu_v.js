import{r as C,w as $,a as c,f as d,v as F,x as m,j as I,d as B,u as ae,k as se,o as u}from"./vue.esm-bundler-DcUdeB67.js";import{_ as re}from"./Input-fjww198a.js";import{D as ne}from"./DatePicker-BRleggc9.js";import{T as le}from"./Tooltip-Drkud6tJ.js";import{f as k}from"./index-J0_2x6-B.js";import"./index-B7eDUBVh.js";import"./index-BheKWQQi.js";import"./utils-CHtjtCvc.js";import"./index-CYxz6zhG.js";import"./createLucideIcon-BIa0ZYd1.js";import"./PopoverContent-BPtjAuAX.js";import"./Drawer-BN3q2xnJ.js";const oe={class:"flex flex-col gap-y-2"},ue={class:"flex flex-col gap-y-4"},ie={class:"inline items-end break-all"},ce={key:0,class:"text-lg font-semibold"},de={key:1,class:"text-sm font-normal ml-1 mb-[2px]"},me={class:"absolute end-0 inset-y-0 flex items-center justify-center px-3 gap-x-2"},pe={key:0,class:"text-xs text-alert"},Ye={name:"DateRangeInput"},X=Object.assign(Ye,{props:{modelValue:{type:String},minDate:{type:[Date,Object,String]},maxDate:{type:[Date,Object,String]},title:{type:String},subtitle:{type:String,default:""},placeholder:{type:String,default:"請輸入..."},disabled:{type:Boolean,default:!1},errMsg:{type:String,default:""},tooltip:{type:String,default:""},tSize:{type:String,default:""}},emits:["update:modelValue","focus","blur"],setup(t,{emit:Z}){const A=t,y=Z,i=C(!1),_=()=>{i.value=!0,y("focus")},ee=()=>{i.value=!1,s.value=te(o.value),s.value||(o.value=""),y("blur")},o=C(""),s=C(A.modelValue),te=a=>{let r=a==null?void 0:a.replace(/\//g,"-");const e=r.split("-");if(e.length===6){const b=e[0],x=parseInt(e[1]).toString().padStart(2,"0"),S=parseInt(e[2]).toString().padStart(2,"0"),h=e[3],V=parseInt(e[4]).toString().padStart(2,"0"),v=parseInt(e[5]).toString().padStart(2,"0"),n=`${b}-${x}-${S}`,l=`${h}-${V}-${v}`;return Date.parse(n)>Date.parse(l)?{start:l,end:n}:{start:n,end:l}}else if(e.length==2&&r.length===17){const b=e[0].substr(0,4),x=e[0].substr(4,2),S=e[0].substr(6,2),h=e[1].substr(0,4),V=e[1].substr(4,2),v=e[1].substr(6,2),n=`${b}-${x}-${S}`,l=`${h}-${V}-${v}`;return Date.parse(n)>Date.parse(l)?{start:l,end:n}:{start:n,end:l}}else return""};return $(()=>A.modelValue,a=>{a&&(s.value=a)},{immediate:!0}),$(()=>s.value,a=>{a&&(a.start instanceof Date&&(s.value.start=k(a.start,"yyyy-MM-dd")),a.end instanceof Date&&(s.value.end=k(a.end,"yyyy-MM-dd")),o.value=s.value.start?s.value.start.replace(/-/g,"")+"-"+s.value.end.replace(/-/g,""):"",y("update:modelValue",a))},{immediate:!0}),(a,r)=>(u(),c("div",oe,[d("div",ue,[d("div",ie,[t.title?(u(),c("span",ce,F(t.title),1)):m("",!0),t.subtitle?(u(),c("span",de,F(t.subtitle),1)):m("",!0)]),d("div",{class:I(["relative w-full items-center",{focus:i.value}])},[B(ae(re),{modelValue:o.value,"onUpdate:modelValue":r[0]||(r[0]=e=>o.value=e),placeholder:t.placeholder,disabled:t.disabled,class:I(["pr-12",{"pr-20":!!t.tooltip,"border-alert":!!t.errMsg&&!i.value}]),onFocus:_,onBlur:ee},null,8,["modelValue","placeholder","disabled","class"]),d("span",me,[B(ne,{modelValue:s.value,"onUpdate:modelValue":r[1]||(r[1]=e=>s.value=e),disabled:t.disabled,"min-date":t.minDate,"max-date":t.maxDate,range:""},null,8,["modelValue","disabled","min-date","max-date"]),t.tooltip?(u(),se(le,{key:0,content:t.tooltip,size:t.tSize},null,8,["content","size"])):m("",!0)])],2)]),t.errMsg?(u(),c("span",pe,F(t.errMsg),1)):m("",!0)]))}}),De=X;X.__docgenInfo={exportName:"default",displayName:"DateRangeInput",description:"",tags:{},props:[{name:"modelValue",type:{name:"string"}},{name:"minDate",type:{name:"date|object|string"}},{name:"maxDate",type:{name:"date|object|string"}},{name:"title",type:{name:"string"}},{name:"subtitle",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:"'請輸入...'"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"errMsg",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"tooltip",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"tSize",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],events:[{name:"update:modelValue"},{name:"focus"},{name:"blur"}],sourceFiles:["D:/Program/VueJs/CTBCINS-UIKit/src/stories/DateRangeInput.vue"]};const Ae={title:"Example/DateRangeInput",component:De,tags:["autodocs"],argTypes:{modelValue:{control:"date"},title:{control:"text"},subtitle:{control:"text"},placeholder:{control:"text"},errMsg:{control:"text"},tooltip:{control:"text"},tSize:{control:{type:"radio"},options:["lg","md","sm","xs"]}}},p={args:{title:"旅遊期間",placeholder:"YYYYMMDD-YYYYMMDD",modelValue:{start:"2021/01/02",end:"2021/01/15"}}},Y={args:{title:"旅遊期間",subtitle:"(YYYYMMDD-YYYYMMDD)",placeholder:"請輸入旅遊期間"}},D={args:{title:"旅遊期間",placeholder:"請輸入旅遊期間",minDate:Date.now(),maxDate:"2024/12/31"}},g={args:{title:"旅遊期間",placeholder:"YYYYMMDD-YYYYMMDD",errMsg:"旅遊期間為必填項目"}},f={args:{title:"旅遊期間",placeholder:"YYYYMMDD-YYYYMMDD",disabled:!0}},M={args:{title:"旅遊期間",placeholder:"YYYYMMDD-YYYYMMDD",tooltip:"請輸入旅遊期間"}};var R,T,j;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    title: '旅遊期間',
    placeholder: 'YYYYMMDD-YYYYMMDD',
    modelValue: {
      start: '2021/01/02',
      end: '2021/01/15'
    }
  }
}`,...(j=(T=p.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var z,E,N;Y.parameters={...Y.parameters,docs:{...(z=Y.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    title: '旅遊期間',
    subtitle: '(YYYYMMDD-YYYYMMDD)',
    placeholder: '請輸入旅遊期間'
  }
}`,...(N=(E=Y.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var w,O,U;D.parameters={...D.parameters,docs:{...(w=D.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    title: '旅遊期間',
    placeholder: '請輸入旅遊期間',
    minDate: Date.now(),
    maxDate: '2024/12/31'
  }
}`,...(U=(O=D.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};var P,J,K;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    title: '旅遊期間',
    placeholder: 'YYYYMMDD-YYYYMMDD',
    errMsg: '旅遊期間為必填項目'
  }
}`,...(K=(J=g.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var q,G,H;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    title: '旅遊期間',
    placeholder: 'YYYYMMDD-YYYYMMDD',
    disabled: true
  }
}`,...(H=(G=f.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var L,Q,W;M.parameters={...M.parameters,docs:{...(L=M.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    title: '旅遊期間',
    placeholder: 'YYYYMMDD-YYYYMMDD',
    tooltip: '請輸入旅遊期間'
  }
}`,...(W=(Q=M.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};const $e=["Default","SubTitle","Range","Error","Disabled","Tooltip"];export{p as Default,f as Disabled,g as Error,D as Range,Y as SubTitle,M as Tooltip,$e as __namedExportsOrder,Ae as default};
