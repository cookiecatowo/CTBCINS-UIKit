import{R as W,k as q,w as F,c as C,a as n,v as i,M as b,N as G,n as l,u as A,r as B,x as E,o as s,e as H,l as Q,j as X,f,t as x}from"./vue.esm-bundler-C3HUlvCY.js";import{_ as Y}from"./Label-abx64zYe.js";import{f as Z}from"./index-B7eDUBVh.js";import"./index-afhknXpz.js";import"./utils-CHtjtCvc.js";const uu=["onClick"],eu=["src"],tu={key:0,class:"lg:hidden pb-12"},au={key:0,class:"hidden lg:block pt-4"},lu={name:"RadioCard"},J=Object.assign(lu,{props:{modelValue:{type:[String,Boolean,Number]},list:{type:Array},direction:{type:String,default:"left",validator:function(o){return["left","top"].indexOf(o)!==-1}},disabled:{type:Boolean,default:!1},width:{type:String},height:{type:String}},emits:["update:modelValue","click"],setup(o,{emit:K}){const u=o,D=W(),v=K,a=q(u.modelValue);F(()=>u.modelValue,t=>{a.value=t},{immediate:!0}),F(()=>a.value,t=>{v("update:modelValue",t)});const L=(t,r)=>{!r&&!u.disabled&&(a.value=t,v("click",t))},M=C(()=>{switch(u.direction||"left"){case"left":return"h-[135px] lg:grid grid-cols-5 ";case"top":return"min-h-[180px] flex flex-col items-center pt-[60px] lg:px-12"}}),P=C(()=>({width:u.width,height:u.height})),U=(t,r)=>t?"outline outline-primary outline-4 radio-card-scale-active bg-white":u.disabled||r?"outline outline-outer-frame outline-2 bg-light-gray text-outer-frame cursor-not-allowed":"outline outline-outer-frame outline-2 bg-white cursor-pointer";return(t,r)=>(s(),n("div",{class:l(["items-center",{"mt-4 lg:mt-10":u.direction=="top"}])},[i("div",{class:l(["flex gap-6 lg:gap-y-8",[u.direction=="top"?"":"flex-col lg:flex-row flex-wrap"]])},[(s(!0),n(b,null,G(o.list,e=>(s(),n(b,null,[i("div",{class:l(["rounded-[20px] p-5 flex w-full lg:w-[453px] transition-all",[U(a.value==e.value,e.disabled),M.value]]),style:H(P.value),onClick:iu=>L(e.value,e.disabled)},[i("div",{class:l(["col-span-2 relative flex justify-center items-center",{"pr-4 lg:pr-6":u.direction=="left"}])},[i("img",{src:e.img,class:l(["lg:max-h-[132px] lg:max-w-[130px] w-fit h-fit",[u.direction=="left"?"lg:absolute lg:bottom-0 max-w-[110px] max-h-[110px]":"absolute bottom-4 lg:bottom-2 max-w-[80px] max-h-[80px]",a.value!=e.value&&(u.disabled||e.disabled)?"grayscale":""]])},null,10,eu)],2),i("div",{class:l(["col-span-3 flex flex-col justify-center gap-y-2 text-sm lg:text-base font-normal",{"items-center":u.direction=="top"}])},[Q(A(Y),{class:"text-lg lg:text-xl font-semibold"},{default:X(()=>[f(x(e.label),1)]),_:2},1024),B(t.$slots,"s_"+e.value,{},()=>[f(x(e.description),1)])],2)],14,uu),a.value==e.value&&A(D)["c_"+e.value]?(s(),n("div",tu,[B(t.$slots,"c_"+e.value)])):E("",!0)],64))),256))],2),A(D)["c_"+a.value]?(s(),n("div",au,[B(t.$slots,"c_"+a.value)])):E("",!0)],2))}}),nu=J;J.__docgenInfo={exportName:"default",displayName:"RadioCard",description:"",tags:{},props:[{name:"modelValue",type:{name:"string|boolean|number"}},{name:"list",type:{name:"array"}},{name:"direction",type:{name:"string"},defaultValue:{func:!1,value:"'left'"},values:["left","top"]},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"width",type:{name:"string"}},{name:"height",type:{name:"string"}}],events:[{name:"update:modelValue"},{name:"click"}],slots:[{name:"'s_'+ item.value",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"'c_'+ item.value",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"'c_'+ radio",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["D:/Program/VueJs/CTBCINS-UIKit/src/stories/RadioCard.vue"]};const mu={title:"Example/RadioCard",component:nu,tags:["autodocs"],argTypes:{modelValue:{control:"text"},list:{control:"array"},disabled:{control:"boolean"},direction:{control:{type:"radio"},options:["left","top"]},column:{control:"boolean"},radioWidth:{control:"text"}},args:{onClick:Z()},parameters:{docs:{description:{component:"含有標題、內文、與圖片的選擇框，可以使用slot制定內文(名稱為s___加上物件的value)，或是作為頁籤功能，使用slot制定頁籤內容(名稱為c_加上物件的value)。"}}}},d={args:{modelValue:"01",list:[{value:"01",label:"國內外基本型",img:"/testImg/radio1.png",description:"身故/失能險、傷害醫療險"},{value:"02",label:"海外加值型",img:"/testImg/radio2.png",description:"身故/失能險、傷害醫療險、海外突發疾病"},{value:"03",label:"歐洲申根加值型",img:"/testImg/radio3.png",description:"身故/失能險、傷害醫療險、海外突發疾病"}]}},c={args:{modelValue:"01",list:[{value:"01",label:"Excel 上傳",img:"/testImg/radio4.png",description:"批次上傳適合多位被保險人進行投保，上傳文件僅限於此網站提供的 Excel 模板。"},{value:"02",label:"投保輸入",img:"/testImg/radio5.png",description:"除了個別輸入被保險人資訊外，也提供影像辨識功能，此功能可帶入多位被保險人資訊。"}],direction:"top"}},m={args:{modelValue:"01",list:[{value:"01",label:"國內外基本型",img:"/testImg/radio1.png",description:"身故/失能險、傷害醫療險"},{value:"02",label:"海外加值型",img:"/testImg/radio2.png",description:"身故/失能險、傷害醫療險、海外突發疾病"},{value:"03",label:"歐洲申根加值型",img:"/testImg/radio3.png",description:"身故/失能險、傷害醫療險、海外突發疾病"}],disabled:!0}},p={args:{modelValue:"01",list:[{value:"01",label:"Excel 上傳",img:"/testImg/radio4.png",description:"批次上傳適合多位被保險人進行投保，上傳文件僅限於此網站提供的 Excel 模板。"},{value:"02",label:"投保輸入",img:"/testImg/radio5.png",description:"除了個別輸入被保險人資訊外，也提供影像辨識功能，此功能可帶入多位被保險人資訊。"}],direction:"top"},parameters:{slots:{s_01:{template:"<div><li>限要/被保險人本人信用卡進行付款</li><li>請於生效日前1~2個工作日前完成繳納</li></div>"},s_02:{template:"<div><li>法人機關團體、未持有信用卡之要/被保險人適用</li><li> 請於生效日前2~3個工作日前完成繳納</li></div>"}}}},g={args:{modelValue:"01",list:[{value:"01",label:"國內外基本型",img:"/testImg/radio1.png",description:"身故/失能險、傷害醫療險"},{value:"02",label:"海外加值型",img:"/testImg/radio2.png",description:"身故/失能險、傷害醫療險、海外突發疾病"},{value:"03",label:"歐洲申根加值型",img:"/testImg/radio3.png",description:"身故/失能險、傷害醫療險、海外突發疾病"}]},parameters:{slots:{c_01:{template:"<div>國內外基本型</div>"},c_02:{template:"<div>海外加值型</div>"},c_03:{template:"<div>歐洲申根加值型</div>"}}}};var _,h,y;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(y=(h=d.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var I,V,w;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(w=(V=c.parameters)==null?void 0:V.docs)==null?void 0:w.source}}};var S,k,N;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(N=(k=m.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};var R,T,$;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...($=(T=p.parameters)==null?void 0:T.docs)==null?void 0:$.source}}};var j,O,z;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
  },
  parameters: {
    slots: {
      c_01: {
        template: '<div>國內外基本型</div>'
      },
      c_02: {
        template: '<div>海外加值型</div>'
      },
      c_03: {
        template: '<div>歐洲申根加值型</div>'
      }
    }
  }
}`,...(z=(O=g.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};const pu=["Default","DirectionTop","Disabled","Slot","SlotContent"];export{d as Default,c as DirectionTop,m as Disabled,p as Slot,g as SlotContent,pu as __namedExportsOrder,mu as default};
