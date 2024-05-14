import{c as G,a as l,v as b,t as p,x as u,n as g,l as E,j as H,u as Q,o as a,S as R,U as W}from"./vue.esm-bundler-C3HUlvCY.js";import{T as X}from"./Tooltip-H3ptpWJa.js";import{C as Y}from"./vue-select.es-vDj14aZc.js";import{_ as Z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-afhknXpz.js";import"./utils-CHtjtCvc.js";const _=e=>(R("data-v-3228f600"),e=e(),W(),e),ee={class:"flex flex-col gap-y-2"},le={class:"flex flex-col gap-y-4"},ae={key:0,class:"inline items-end break-all"},ue={key:0,class:"text-lg font-semibold"},te={key:1,class:"text-sm font-normal ml-1 mb-[2px]"},ne={class:"relative w-full items-center"},se=_(()=>b("span",{class:"text-sm"},"暫無資料",-1)),re={key:0,class:"absolute end-0 inset-y-0 flex items-center justify-center px-3 gap-x-2"},oe={key:0,class:"text-xs text-alert break-all"},ie={name:"Select"},K=Object.assign(ie,{props:{modelValue:{type:[String,Number]},list:{type:Array},title:{type:String},subtitle:{type:String,default:""},placeholder:{type:String,default:"請選擇..."},disabled:{type:Boolean,default:!1},err:{type:Boolean,default:!1},errMsg:{type:String,default:""},tooltip:{type:String,default:""},tSize:{type:String,default:""}},emits:["update:modelValue","input"],setup(e,{emit:P}){const $=e,A=P,v=G({get(){return $.modelValue},set(t){A("update:modelValue",t)}}),q=t=>{A("input",t)};return(t,f)=>(a(),l("div",ee,[b("div",le,[e.title||e.subtitle?(a(),l("div",ae,[e.title?(a(),l("span",ue,p(e.title),1)):u("",!0),e.subtitle?(a(),l("span",te,p(e.subtitle),1)):u("",!0)])):u("",!0),b("div",ne,[b("div",{class:g(["border rounded-lg",[e.errMsg||e.err?"border-alert":"border-outer-frame",e.disabled?"bg-[#f8f8f8]":"bg-white"]])},[E(Q(Y),{modelValue:v.value,"onUpdate:modelValue":f[0]||(f[0]=m=>v.value=m),options:e.list,placeholder:e.placeholder,label:"label",reduce:m=>m.value,clearable:!1,disabled:e.disabled,searchable:!1,"onOption:selected":q,class:g(["",{"pr-12":!!e.tooltip,"text-outer-frame":!v.value}])},{"no-options":H(()=>[se]),_:1},8,["modelValue","options","placeholder","reduce","disabled","class"])],2),e.tooltip?(a(),l("span",re,[E(X,{content:e.tooltip,size:e.tSize},null,8,["content","size"])])):u("",!0)])]),e.errMsg?(a(),l("span",oe,p(e.errMsg),1)):u("",!0)]))}}),ce=Z(K,[["__scopeId","data-v-3228f600"]]);K.__docgenInfo={exportName:"default",displayName:"Select",description:"",tags:{},props:[{name:"modelValue",type:{name:"string|number"}},{name:"list",type:{name:"array"}},{name:"title",type:{name:"string"}},{name:"subtitle",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:"'請選擇...'"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"err",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"errMsg",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"tooltip",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"tSize",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],events:[{name:"update:modelValue"},{name:"input"}],sourceFiles:["D:/Program/VueJs/CTBCINS-UIKit/src/stories/Select.vue"]};const fe={title:"Example/Select",component:ce,tags:["autodocs"],argTypes:{modelValue:{control:"text"},list:{control:"array"},title:{control:"text"},subtitle:{control:"text"},placeholder:{control:"text"},errMsg:{control:"text"},tooltip:{control:"text"},tSize:{control:{type:"radio"},options:["lg","md","sm","xs"]}}},n={args:{title:"交通工具",list:[{label:"汽車",value:"01"},{label:"火車",value:"02"},{label:"飛機",value:"03"},{label:"輪船",value:"04"}],placeholder:"請選擇交通工具"}},s={args:{title:"旅遊目的",subtitle:"(選填)",list:[{label:"觀光",value:"01"},{label:"出差",value:"02"},{label:"留學",value:"03"}],placeholder:"請選擇旅遊目的"}},r={args:{title:"交通工具",list:[{label:"汽車",value:"01"},{label:"火車",value:"02"},{label:"飛機",value:"03"},{label:"輪船",value:"04"}],placeholder:"請選擇交通工具",disabled:!0}},o={args:{title:"交通工具",list:[{label:"汽車",value:"01"},{label:"火車",value:"02"},{label:"飛機",value:"03"},{label:"輪船",value:"04"}],placeholder:"請選擇交通工具",err:!0}},i={args:{title:"交通工具",list:[{label:"汽車",value:"01"},{label:"火車",value:"02"},{label:"飛機",value:"03"},{label:"輪船",value:"04"}],placeholder:"請選擇交通工具",errMsg:"交通工具為必填選項"}},c={args:{title:"交通工具",list:[{label:"汽車",value:"01"},{label:"火車",value:"02"},{label:"飛機",value:"03"},{label:"輪船",value:"04"}],placeholder:"請選擇交通工具",tooltip:"交通工具",tSize:"xs"}},d={args:{title:"交通工具",list:[{label:"汽車",value:"01"},{label:"火車",value:"02"},{label:"飛機",value:"03"},{label:"輪船",value:"04"},{label:"汽車",value:"05"},{label:"火車",value:"06"},{label:"飛機",value:"07"},{label:"輪船",value:"08"},{label:"汽車",value:"09"},{label:"火車",value:"10"},{label:"飛機",value:"11"},{label:"輪船",value:"12"},{label:"汽車",value:"13"},{label:"火車",value:"14"},{label:"飛機",value:"15"},{label:"輪船",value:"16"},{label:"汽車",value:"17"},{label:"火車",value:"18"},{label:"飛機",value:"19"},{label:"輪船",value:"20"}],placeholder:"請選擇交通工具"}};var C,D,B;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    title: '交通工具',
    list: [{
      label: '汽車',
      value: '01'
    }, {
      label: '火車',
      value: '02'
    }, {
      label: '飛機',
      value: '03'
    }, {
      label: '輪船',
      value: '04'
    }],
    placeholder: '請選擇交通工具'
  }
}`,...(B=(D=n.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};var y,S,h;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    title: '旅遊目的',
    subtitle: '(選填)',
    list: [{
      label: '觀光',
      value: '01'
    }, {
      label: '出差',
      value: '02'
    }, {
      label: '留學',
      value: '03'
    }],
    placeholder: '請選擇旅遊目的'
  }
}`,...(h=(S=s.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var x,F,V;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    title: '交通工具',
    list: [{
      label: '汽車',
      value: '01'
    }, {
      label: '火車',
      value: '02'
    }, {
      label: '飛機',
      value: '03'
    }, {
      label: '輪船',
      value: '04'
    }],
    placeholder: '請選擇交通工具',
    disabled: true
  }
}`,...(V=(F=r.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};var M,k,z;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    title: '交通工具',
    list: [{
      label: '汽車',
      value: '01'
    }, {
      label: '火車',
      value: '02'
    }, {
      label: '飛機',
      value: '03'
    }, {
      label: '輪船',
      value: '04'
    }],
    placeholder: '請選擇交通工具',
    err: true
  }
}`,...(z=(k=o.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var T,I,N;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    title: '交通工具',
    list: [{
      label: '汽車',
      value: '01'
    }, {
      label: '火車',
      value: '02'
    }, {
      label: '飛機',
      value: '03'
    }, {
      label: '輪船',
      value: '04'
    }],
    placeholder: '請選擇交通工具',
    errMsg: '交通工具為必填選項'
  }
}`,...(N=(I=i.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var w,L,j;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    title: '交通工具',
    list: [{
      label: '汽車',
      value: '01'
    }, {
      label: '火車',
      value: '02'
    }, {
      label: '飛機',
      value: '03'
    }, {
      label: '輪船',
      value: '04'
    }],
    placeholder: '請選擇交通工具',
    tooltip: '交通工具',
    tSize: 'xs'
  }
}`,...(j=(L=c.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var O,U,J;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    title: '交通工具',
    list: [{
      label: '汽車',
      value: '01'
    }, {
      label: '火車',
      value: '02'
    }, {
      label: '飛機',
      value: '03'
    }, {
      label: '輪船',
      value: '04'
    }, {
      label: '汽車',
      value: '05'
    }, {
      label: '火車',
      value: '06'
    }, {
      label: '飛機',
      value: '07'
    }, {
      label: '輪船',
      value: '08'
    }, {
      label: '汽車',
      value: '09'
    }, {
      label: '火車',
      value: '10'
    }, {
      label: '飛機',
      value: '11'
    }, {
      label: '輪船',
      value: '12'
    }, {
      label: '汽車',
      value: '13'
    }, {
      label: '火車',
      value: '14'
    }, {
      label: '飛機',
      value: '15'
    }, {
      label: '輪船',
      value: '16'
    }, {
      label: '汽車',
      value: '17'
    }, {
      label: '火車',
      value: '18'
    }, {
      label: '飛機',
      value: '19'
    }, {
      label: '輪船',
      value: '20'
    }],
    placeholder: '請選擇交通工具'
  }
}`,...(J=(U=d.parameters)==null?void 0:U.docs)==null?void 0:J.source}}};const ge=["Default","SubTitle","Disabled","Error","ErrorMsg","Tooltip","LongList"];export{n as Default,r as Disabled,o as Error,i as ErrorMsg,d as LongList,s as SubTitle,c as Tooltip,ge as __namedExportsOrder,fe as default};
