import{k as C,w as B,a as i,v as F,t as A,x as c,n as I,l as k,u as ne,g as oe,o}from"./vue.esm-bundler-C3HUlvCY.js";import{_ as ue}from"./Input-7UpNND5I.js";import{D as ie}from"./DatePicker-CCKuncH1.js";import{T as ce}from"./Tooltip-H3ptpWJa.js";import{f as E}from"./index-J0_2x6-B.js";import"./index-B7eDUBVh.js";import"./index-74akxO0Z.js";import"./utils-CHtjtCvc.js";import"./index-afhknXpz.js";import"./createLucideIcon-BrbXVS4p.js";import"./PopoverContent-CvsjyzjP.js";import"./Drawer-CHxGyPdo.js";const de={class:"flex flex-col gap-y-2"},me={class:"flex flex-col gap-y-4"},pe={key:0,class:"inline items-end break-all"},Ye={key:0,class:"text-lg font-semibold"},De={key:1,class:"text-sm font-normal ml-1 mb-[2px]"},ge={class:"absolute end-0 inset-y-0 flex items-center justify-center px-3 gap-x-2"},fe={key:0,class:"text-xs text-alert break-all"},Me={name:"DateRangeInput"},te=Object.assign(Me,{props:{modelValue:{type:[Object,String]},minDate:{type:[Date,Object,String]},maxDate:{type:[Date,Object,String]},title:{type:String},subtitle:{type:String,default:""},placeholder:{type:String,default:"請輸入..."},disabled:{type:Boolean,default:!1},err:{type:Boolean,default:!1},errMsg:{type:String,default:""},tooltip:{type:String,default:""},tSize:{type:String,default:""}},emits:["update:modelValue","focus","blur"],setup(e,{emit:ae}){const $=e,y=ae,d=C(!1),se=()=>{d.value=!0,y("focus")},re=()=>{d.value=!1,s.value=le(u.value),s.value||(u.value=""),y("blur")},u=C(""),s=C($.modelValue),le=a=>{let r=a==null?void 0:a.replace(/\//g,"-");const t=r.split("-");if(t.length===6){const b=t[0],h=parseInt(t[1]).toString().padStart(2,"0"),x=parseInt(t[2]).toString().padStart(2,"0"),S=t[3],V=parseInt(t[4]).toString().padStart(2,"0"),v=parseInt(t[5]).toString().padStart(2,"0"),l=`${b}-${h}-${x}`,n=`${S}-${V}-${v}`;return Date.parse(l)>Date.parse(n)?{start:n,end:l}:{start:l,end:n}}else if(t.length==2&&r.length===17){const b=t[0].substr(0,4),h=t[0].substr(4,2),x=t[0].substr(6,2),S=t[1].substr(0,4),V=t[1].substr(4,2),v=t[1].substr(6,2),l=`${b}-${h}-${x}`,n=`${S}-${V}-${v}`;return Date.parse(l)>Date.parse(n)?{start:n,end:l}:{start:l,end:n}}else return""};return B(()=>$.modelValue,a=>{a&&(s.value=a)},{immediate:!0}),B(()=>s.value,a=>{a&&(a.start instanceof Date&&(s.value.start=E(a.start,"yyyy-MM-dd")),a.end instanceof Date&&(s.value.end=E(a.end,"yyyy-MM-dd")),u.value=s.value.start?s.value.start.replace(/-/g,"")+"-"+s.value.end.replace(/-/g,""):""),y("update:modelValue",a)},{immediate:!0}),(a,r)=>(o(),i("div",de,[F("div",me,[e.title||e.subtitle?(o(),i("div",pe,[e.title?(o(),i("span",Ye,A(e.title),1)):c("",!0),e.subtitle?(o(),i("span",De,A(e.subtitle),1)):c("",!0)])):c("",!0),F("div",{class:I(["relative w-full items-center",{focus:d.value}])},[k(ne(ue),{modelValue:u.value,"onUpdate:modelValue":r[0]||(r[0]=t=>u.value=t),placeholder:e.placeholder,disabled:e.disabled,class:I(["pr-12",{"pr-20":!!e.tooltip,"border-alert":(!!e.errMsg||!!e.err)&&!d.value}]),onFocus:se,onBlur:re},null,8,["modelValue","placeholder","disabled","class"]),F("span",ge,[k(ie,{modelValue:s.value,"onUpdate:modelValue":r[1]||(r[1]=t=>s.value=t),disabled:e.disabled,"min-date":e.minDate,"max-date":e.maxDate,range:""},null,8,["modelValue","disabled","min-date","max-date"]),e.tooltip?(o(),oe(ce,{key:0,content:e.tooltip,size:e.tSize},null,8,["content","size"])):c("",!0)])],2)]),e.errMsg?(o(),i("span",fe,A(e.errMsg),1)):c("",!0)]))}}),ye=te;te.__docgenInfo={exportName:"default",displayName:"DateRangeInput",description:"",tags:{},props:[{name:"modelValue",type:{name:"object|string"}},{name:"minDate",type:{name:"date|object|string"}},{name:"maxDate",type:{name:"date|object|string"}},{name:"title",type:{name:"string"}},{name:"subtitle",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:"'請輸入...'"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"err",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"errMsg",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"tooltip",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"tSize",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],events:[{name:"update:modelValue"},{name:"focus"},{name:"blur"}],sourceFiles:["D:/Program/VueJs/CTBCINS-UIKit/src/stories/DateRangeInput.vue"]};const ke={title:"Example/DateRangeInput",component:ye,tags:["autodocs"],argTypes:{modelValue:{control:"string"},title:{control:"text"},subtitle:{control:"text"},placeholder:{control:"text"},errMsg:{control:"text"},tooltip:{control:"text"},tSize:{control:{type:"radio"},options:["lg","md","sm","xs"]}}},m={args:{title:"旅遊期間",placeholder:"YYYYMMDD-YYYYMMDD",modelValue:{start:"2021/01/02",end:"2021/01/15"}}},p={args:{title:"旅遊期間",subtitle:"(YYYYMMDD-YYYYMMDD)",placeholder:"請輸入旅遊期間"}},Y={args:{title:"旅遊期間",placeholder:"請輸入旅遊期間",minDate:Date.now(),maxDate:"2024/12/31"}},D={args:{title:"旅遊期間",placeholder:"YYYYMMDD-YYYYMMDD",err:!0}},g={args:{title:"旅遊期間",placeholder:"YYYYMMDD-YYYYMMDD",errMsg:"旅遊期間為必填項目"}},f={args:{title:"旅遊期間",placeholder:"YYYYMMDD-YYYYMMDD",disabled:!0}},M={args:{title:"旅遊期間",placeholder:"YYYYMMDD-YYYYMMDD",tooltip:"請輸入旅遊期間"}};var j,R,T;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    title: '旅遊期間',
    placeholder: 'YYYYMMDD-YYYYMMDD',
    modelValue: {
      start: '2021/01/02',
      end: '2021/01/15'
    }
  }
}`,...(T=(R=m.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var z,N,w;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    title: '旅遊期間',
    subtitle: '(YYYYMMDD-YYYYMMDD)',
    placeholder: '請輸入旅遊期間'
  }
}`,...(w=(N=p.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var O,U,P;Y.parameters={...Y.parameters,docs:{...(O=Y.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    title: '旅遊期間',
    placeholder: '請輸入旅遊期間',
    minDate: Date.now(),
    maxDate: '2024/12/31'
  }
}`,...(P=(U=Y.parameters)==null?void 0:U.docs)==null?void 0:P.source}}};var J,K,q;D.parameters={...D.parameters,docs:{...(J=D.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    title: '旅遊期間',
    placeholder: 'YYYYMMDD-YYYYMMDD',
    err: true
  }
}`,...(q=(K=D.parameters)==null?void 0:K.docs)==null?void 0:q.source}}};var G,H,L;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    title: '旅遊期間',
    placeholder: 'YYYYMMDD-YYYYMMDD',
    errMsg: '旅遊期間為必填項目'
  }
}`,...(L=(H=g.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var Q,W,X;f.parameters={...f.parameters,docs:{...(Q=f.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    title: '旅遊期間',
    placeholder: 'YYYYMMDD-YYYYMMDD',
    disabled: true
  }
}`,...(X=(W=f.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Z,_,ee;M.parameters={...M.parameters,docs:{...(Z=M.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    title: '旅遊期間',
    placeholder: 'YYYYMMDD-YYYYMMDD',
    tooltip: '請輸入旅遊期間'
  }
}`,...(ee=(_=M.parameters)==null?void 0:_.docs)==null?void 0:ee.source}}};const Ee=["Default","SubTitle","Range","Error","ErrorMsg","Disabled","Tooltip"];export{m as Default,f as Disabled,D as Error,g as ErrorMsg,Y as Range,p as SubTitle,M as Tooltip,Ee as __namedExportsOrder,ke as default};
