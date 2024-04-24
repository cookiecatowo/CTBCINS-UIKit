import{r as O,w as A,c as B,a as p,f as o,F as $,J as z,j as a,o as m,n as J,d as K,e as L,t as D,v as F,u as P,g as U}from"./vue.esm-bundler-DcUdeB67.js";import{_ as W}from"./Label-C3_X6Y2E.js";import{f as q}from"./index-B7eDUBVh.js";import"./index-CYxz6zhG.js";import"./utils-CHtjtCvc.js";const G=["onClick"],H=["src"],M={name:"RadioCard"},S=Object.assign(M,{props:{modelValue:{type:[String,Boolean,Number]},list:{type:Array},direction:{type:String,default:"left",validator:function(i){return["left","top"].indexOf(i)!==-1}},disabled:{type:Boolean,default:!1},width:{type:String},height:{type:String}},emits:["update:modelValue","click"],setup(i,{emit:k}){const u=i,g=k,l=O(u.modelValue);A(()=>u.modelValue,e=>{l.value=e},{immediate:!0}),A(()=>l.value,e=>{g("update:modelValue",e)});const N=(e,n)=>{!n&&!u.disabled&&(l.value=e,g("click",e))},R=B(()=>{switch(u.direction||"left"){case"left":return"h-[135px] lg:grid grid-cols-5 ";case"top":return"min-h-[180px] flex flex-col items-center pt-[60px] lg:px-12"}}),T=B(()=>({width:u.width,height:u.height})),j=(e,n)=>e?"outline outline-primary outline-4 radio-card-scale-active bg-white":u.disabled||n?"outline outline-border outline-2 bg-inputDisabled text-textDisabled cursor-not-allowed":"outline outline-border outline-2 bg-white cursor-pointer";return(e,n)=>(m(),p("div",{class:a(["items-center",{"mt-4 lg:mt-10":u.direction=="top"}])},[o("div",{class:a(["flex gap-6 lg:gap-y-8",[u.direction=="top"?"":"flex-col lg:flex-row flex-wrap"]])},[(m(!0),p($,null,z(i.list,t=>(m(),p("div",{class:a(["rounded-[20px] p-5 flex w-full lg:w-[453px] transition-all",[j(l.value==t.value,t.disabled),R.value]]),style:J(T.value),onClick:X=>N(t.value,t.disabled)},[o("div",{class:a(["col-span-2 relative flex justify-center items-center",{"pr-4 lg:pr-6":u.direction=="left"}])},[o("img",{src:t.img,class:a(["lg:max-h-[132px] lg:max-w-[130px] w-fit h-fit",[u.direction=="left"?"lg:absolute lg:bottom-0 max-w-[110px] max-h-[110px]":"absolute bottom-4 lg:bottom-2 max-w-[80px] max-h-[80px]",l.value!=t.value&&(u.disabled||t.disabled)?"grayscale":""]])},null,10,H)],2),o("div",{class:a(["col-span-3 flex flex-col justify-center gap-y-2 text-sm lg:text-base font-normal",{"items-center":u.direction=="top"}])},[K(P(W),{class:"text-lg lg:text-xl font-semibold"},{default:L(()=>[D(F(t.label),1)]),_:2},1024),U(e.$slots,"s_"+t.value,{},()=>[D(F(t.description),1)])],2)],14,G))),256))],2)],2))}}),Q=S;S.__docgenInfo={exportName:"default",displayName:"RadioCard",description:"",tags:{},props:[{name:"modelValue",type:{name:"string|boolean|number"}},{name:"list",type:{name:"array"}},{name:"direction",type:{name:"string"},defaultValue:{func:!1,value:"'left'"},values:["left","top"]},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"width",type:{name:"string"}},{name:"height",type:{name:"string"}}],events:[{name:"update:modelValue"},{name:"click"}],slots:[{name:"'s_'+ item.value",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["D:/Program/VueJs/CTBCINS-UIKit/src/stories/RadioCard.vue"]};const au={title:"Example/RadioCard",component:Q,tags:["autodocs"],argTypes:{modelValue:{control:"text"},list:{control:"array"},disabled:{control:"boolean"},direction:{control:{type:"radio"},options:["left","top"]},column:{control:"boolean"},radioWidth:{control:"text"}},args:{onClick:q()}},s={args:{modelValue:"01",list:[{value:"01",label:"國內外基本型",img:"/testImg/radio1.png",description:"身故/失能險、傷害醫療險"},{value:"02",label:"海外加值型",img:"/testImg/radio2.png",description:"身故/失能險、傷害醫療險、海外突發疾病"},{value:"03",label:"歐洲申根加值型",img:"/testImg/radio3.png",description:"身故/失能險、傷害醫療險、海外突發疾病"}]}},r={args:{modelValue:"01",list:[{value:"01",label:"Excel 上傳",img:"/testImg/radio4.png",description:"批次上傳適合多位被保險人進行投保，上傳文件僅限於此網站提供的 Excel 模板。"},{value:"02",label:"投保輸入",img:"/testImg/radio5.png",description:"除了個別輸入被保險人資訊外，也提供影像辨識功能，此功能可帶入多位被保險人資訊。"}],direction:"top"}},d={args:{modelValue:"01",list:[{value:"01",label:"國內外基本型",img:"/testImg/radio1.png",description:"身故/失能險、傷害醫療險"},{value:"02",label:"海外加值型",img:"/testImg/radio2.png",description:"身故/失能險、傷害醫療險、海外突發疾病"},{value:"03",label:"歐洲申根加值型",img:"/testImg/radio3.png",description:"身故/失能險、傷害醫療險、海外突發疾病"}],disabled:!0}},c={args:{modelValue:"01",list:[{value:"01",label:"Excel 上傳",img:"/testImg/radio4.png",description:"批次上傳適合多位被保險人進行投保，上傳文件僅限於此網站提供的 Excel 模板。"},{value:"02",label:"投保輸入",img:"/testImg/radio5.png",description:"除了個別輸入被保險人資訊外，也提供影像辨識功能，此功能可帶入多位被保險人資訊。"}],direction:"top"},parameters:{slots:{s_01:{template:"<div><li>限要/被保險人本人信用卡進行付款</li><li>請於生效日前1~2個工作日前完成繳納</li></div>"},s_02:{template:"<div><li>法人機關團體、未持有信用卡之要/被保險人適用</li><li> 請於生效日前2~3個工作日前完成繳納</li></div>"}}}};var C,E,f;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    modelValue: '01',
    list: [{
      value: '01',
      label: '國內外基本型',
      img: '/testImg/radio1.png',
      description: '身故/失能險、傷害醫療險'
    }, {
      value: '02',
      label: '海外加值型',
      img: '/testImg/radio2.png',
      description: '身故/失能險、傷害醫療險、海外突發疾病'
    }, {
      value: '03',
      label: '歐洲申根加值型',
      img: '/testImg/radio3.png',
      description: '身故/失能險、傷害醫療險、海外突發疾病'
    }]
  }
}`,...(f=(E=s.parameters)==null?void 0:E.docs)==null?void 0:f.source}}};var b,v,x;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    modelValue: '01',
    list: [{
      value: '01',
      label: 'Excel 上傳',
      img: '/testImg/radio4.png',
      description: '批次上傳適合多位被保險人進行投保，上傳文件僅限於此網站提供的 Excel 模板。'
    }, {
      value: '02',
      label: '投保輸入',
      img: '/testImg/radio5.png',
      description: '除了個別輸入被保險人資訊外，也提供影像辨識功能，此功能可帶入多位被保險人資訊。'
    }],
    direction: 'top'
  }
}`,...(x=(v=r.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var y,h,_;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    modelValue: '01',
    list: [{
      value: '01',
      label: '國內外基本型',
      img: '/testImg/radio1.png',
      description: '身故/失能險、傷害醫療險'
    }, {
      value: '02',
      label: '海外加值型',
      img: '/testImg/radio2.png',
      description: '身故/失能險、傷害醫療險、海外突發疾病'
    }, {
      value: '03',
      label: '歐洲申根加值型',
      img: '/testImg/radio3.png',
      description: '身故/失能險、傷害醫療險、海外突發疾病'
    }],
    disabled: true
  }
}`,...(_=(h=d.parameters)==null?void 0:h.docs)==null?void 0:_.source}}};var I,V,w;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    modelValue: '01',
    list: [{
      value: '01',
      label: 'Excel 上傳',
      img: '/testImg/radio4.png',
      description: '批次上傳適合多位被保險人進行投保，上傳文件僅限於此網站提供的 Excel 模板。'
    }, {
      value: '02',
      label: '投保輸入',
      img: '/testImg/radio5.png',
      description: '除了個別輸入被保險人資訊外，也提供影像辨識功能，此功能可帶入多位被保險人資訊。'
    }],
    direction: 'top'
  },
  parameters: {
    slots: {
      s_01: {
        template: '<div><li>限要/被保險人本人信用卡進行付款</li><li>請於生效日前1~2個工作日前完成繳納</li></div>'
      },
      s_02: {
        template: '<div><li>法人機關團體、未持有信用卡之要/被保險人適用</li><li> 請於生效日前2~3個工作日前完成繳納</li></div>'
      }
    }
  }
}`,...(w=(V=c.parameters)==null?void 0:V.docs)==null?void 0:w.source}}};const lu=["Default","DirectionTop","Disabled","Slot"];export{s as Default,r as DirectionTop,d as Disabled,c as Slot,lu as __namedExportsOrder,au as default};
