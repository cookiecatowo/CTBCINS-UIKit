import{c as q,a,v as n,t as s,x as u,n as h,l as S,j as g,u as H,o as t,S as Q,U as R}from"./vue.esm-bundler-C3HUlvCY.js";import{T as X}from"./Tooltip-H3ptpWJa.js";import{C as Y}from"./vue-select.es-vDj14aZc.js";import{_ as Z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-afhknXpz.js";import"./utils-CHtjtCvc.js";const ee=e=>(Q("data-v-c6983dfb"),e=e(),R(),e),le={class:"flex flex-col gap-y-2"},ae={class:"flex flex-col gap-y-4"},te={key:0,class:"inline items-end break-all"},ue={key:0,class:"text-lg font-semibold"},ne={key:1,class:"text-sm font-normal ml-1 mb-[2px]"},se={class:"relative w-full items-center"},re=ee(()=>n("span",{class:"text-sm"},"暫無資料",-1)),oe={class:"flex gap-x-2"},ie={key:0},ce={key:1},de={class:"flex gap-x-2"},be={key:0},pe={key:1},me={key:0,class:"absolute end-0 inset-y-0 flex items-center justify-center px-3 gap-x-2"},Be={key:0,class:"text-xs text-alert break-all"},ve={name:"SelectInput"},j=Object.assign(ve,{props:{modelValue:{type:String},list:{type:Array},title:{type:String},subtitle:{type:String,default:""},placeholder:{type:String,default:"請選擇..."},disabled:{type:Boolean,default:!1},err:{type:Boolean,default:!1},errMsg:{type:String,default:""},tooltip:{type:String,default:""},tSize:{type:String,default:""},showLabel:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:O}){const _=e,K=O,f=q({get(){return _.modelValue},set(r){K("update:modelValue",r)}}),$=(r,o)=>r.filter(l=>{if((l.value.toLowerCase()+l.label).includes(o.toLowerCase()))return!0});return(r,o)=>(t(),a("div",le,[n("div",ae,[e.title||e.subtitle?(t(),a("div",te,[e.title?(t(),a("span",ue,s(e.title),1)):u("",!0),e.subtitle?(t(),a("span",ne,s(e.subtitle),1)):u("",!0)])):u("",!0),n("div",se,[n("div",{class:h(["border rounded-lg",[e.errMsg||e.err?"border-alert":"border-outer-frame",e.disabled?"bg-[#f8f8f8]":"bg-white"]])},[S(H(Y),{modelValue:f.value,"onUpdate:modelValue":o[0]||(o[0]=l=>f.value=l),options:e.list,placeholder:e.placeholder,label:"label",reduce:l=>l.value,clearable:!1,disabled:e.disabled,filter:$,class:h(["",{"pr-12":!!e.tooltip,"text-outer-frame":!f.value||e.disabled}])},{"no-options":g(()=>[re]),"selected-option":g(({value:l,label:i})=>[n("div",oe,[e.showLabel?(t(),a("span",ie,s(l),1)):u("",!0),e.showLabel?(t(),a("span",ce,"-")):u("",!0),n("span",null,s(i),1)])]),option:g(({value:l,label:i})=>[n("div",de,[e.showLabel?(t(),a("span",be,s(l),1)):u("",!0),e.showLabel?(t(),a("span",pe,"-")):u("",!0),n("span",null,s(i),1)])]),_:1},8,["modelValue","options","placeholder","reduce","disabled","class"])],2),e.tooltip?(t(),a("span",me,[S(X,{content:e.tooltip,size:e.tSize},null,8,["content","size"])])):u("",!0)])]),e.errMsg?(t(),a("span",Be,s(e.errMsg),1)):u("",!0)]))}}),fe=Z(j,[["__scopeId","data-v-c6983dfb"]]);j.__docgenInfo={exportName:"default",displayName:"SelectInput",description:"",tags:{},props:[{name:"modelValue",type:{name:"string"}},{name:"list",type:{name:"array"}},{name:"title",type:{name:"string"}},{name:"subtitle",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:"'請選擇...'"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"err",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"errMsg",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"tooltip",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"tSize",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"showLabel",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["D:/Program/VueJs/CTBCINS-UIKit/src/stories/SelectInput.vue"]};const Fe={title:"Example/SelectInput",component:fe,tags:["autodocs"],argTypes:{modelValue:{control:"text"},list:{control:"array"},title:{control:"text"},subtitle:{control:"text"},placeholder:{control:"text"},errMsg:{control:"text"},tooltip:{control:"text"},tSize:{control:{type:"radio"},options:["lg","md","sm","xs"]}}},c={args:{title:"旅遊國家",list:[{label:"台灣",value:"TW"},{label:"美國",value:"US"},{label:"日本",value:"JP"},{label:"英國",value:"GB"}],placeholder:"請選擇或輸入國家"}},d={args:{title:"旅遊國家",subtitle:"(選填)",list:[{label:"台灣",value:"TW"},{label:"美國",value:"US"},{label:"日本",value:"JP"},{label:"英國",value:"GB"}],placeholder:"請選擇或輸入國家"}},b={args:{modelValue:"TW",title:"旅遊國家",list:[{label:"台灣",value:"TW"},{label:"美國",value:"US"},{label:"日本",value:"JP"},{label:"英國",value:"GB"}],placeholder:"請選擇或輸入國家",disabled:!0}},p={args:{title:"旅遊國家",list:[{label:"台灣",value:"TW"},{label:"美國",value:"US"},{label:"日本",value:"JP"},{label:"英國",value:"GB"}],placeholder:"請選擇或輸入國家",err:!0}},m={args:{title:"旅遊國家",list:[{label:"台灣",value:"TW"},{label:"美國",value:"US"},{label:"日本",value:"JP"},{label:"英國",value:"GB"}],placeholder:"請選擇或輸入國家",errMsg:"旅遊國家為必填選項"}},B={args:{title:"旅遊國家",list:[{label:"台灣",value:"TW"},{label:"美國",value:"US"},{label:"日本",value:"JP"},{label:"英國",value:"GB"}],placeholder:"請選擇或輸入國家",tooltip:"旅遊國家",tSize:"xs"}},v={args:{title:"旅遊國家",list:[{label:"台灣",value:"TW"},{label:"美國",value:"US"},{label:"日本",value:"JP"},{label:"英國",value:"GB"}],placeholder:"請選擇或輸入國家",showLabel:!0}};var y,C,x;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    title: '旅遊國家',
    list: [{
      label: '台灣',
      value: 'TW'
    }, {
      label: '美國',
      value: 'US'
    }, {
      label: '日本',
      value: 'JP'
    }, {
      label: '英國',
      value: 'GB'
    }],
    placeholder: '請選擇或輸入國家'
  }
}`,...(x=(C=c.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var F,V,T;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    title: '旅遊國家',
    subtitle: '(選填)',
    list: [{
      label: '台灣',
      value: 'TW'
    }, {
      label: '美國',
      value: 'US'
    }, {
      label: '日本',
      value: 'JP'
    }, {
      label: '英國',
      value: 'GB'
    }],
    placeholder: '請選擇或輸入國家'
  }
}`,...(T=(V=d.parameters)==null?void 0:V.docs)==null?void 0:T.source}}};var E,A,U;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    modelValue: 'TW',
    title: '旅遊國家',
    list: [{
      label: '台灣',
      value: 'TW'
    }, {
      label: '美國',
      value: 'US'
    }, {
      label: '日本',
      value: 'JP'
    }, {
      label: '英國',
      value: 'GB'
    }],
    placeholder: '請選擇或輸入國家',
    disabled: true
  }
}`,...(U=(A=b.parameters)==null?void 0:A.docs)==null?void 0:U.source}}};var w,W,k;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    title: '旅遊國家',
    list: [{
      label: '台灣',
      value: 'TW'
    }, {
      label: '美國',
      value: 'US'
    }, {
      label: '日本',
      value: 'JP'
    }, {
      label: '英國',
      value: 'GB'
    }],
    placeholder: '請選擇或輸入國家',
    err: true
  }
}`,...(k=(W=p.parameters)==null?void 0:W.docs)==null?void 0:k.source}}};var J,P,G;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    title: '旅遊國家',
    list: [{
      label: '台灣',
      value: 'TW'
    }, {
      label: '美國',
      value: 'US'
    }, {
      label: '日本',
      value: 'JP'
    }, {
      label: '英國',
      value: 'GB'
    }],
    placeholder: '請選擇或輸入國家',
    errMsg: '旅遊國家為必填選項'
  }
}`,...(G=(P=m.parameters)==null?void 0:P.docs)==null?void 0:G.source}}};var I,L,M;B.parameters={...B.parameters,docs:{...(I=B.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    title: '旅遊國家',
    list: [{
      label: '台灣',
      value: 'TW'
    }, {
      label: '美國',
      value: 'US'
    }, {
      label: '日本',
      value: 'JP'
    }, {
      label: '英國',
      value: 'GB'
    }],
    placeholder: '請選擇或輸入國家',
    tooltip: '旅遊國家',
    tSize: 'xs'
  }
}`,...(M=(L=B.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var z,D,N;v.parameters={...v.parameters,docs:{...(z=v.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    title: '旅遊國家',
    list: [{
      label: '台灣',
      value: 'TW'
    }, {
      label: '美國',
      value: 'US'
    }, {
      label: '日本',
      value: 'JP'
    }, {
      label: '英國',
      value: 'GB'
    }],
    placeholder: '請選擇或輸入國家',
    showLabel: true
  }
}`,...(N=(D=v.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};const Ve=["Default","SubTitle","Disabled","Error","ErrorMsg","Tooltip","showLabel"];export{c as Default,b as Disabled,p as Error,m as ErrorMsg,d as SubTitle,B as Tooltip,Ve as __namedExportsOrder,Fe as default,v as showLabel};
