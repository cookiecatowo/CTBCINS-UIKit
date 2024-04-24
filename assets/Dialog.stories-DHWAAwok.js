import{r as ee,w as B,c as E,k as te,e as o,u as s,o as b,d as u,j as h,n as se,a as A,x as D,g as n,t as y,v as F,f as ae}from"./vue.esm-bundler-DcUdeB67.js";import{a as ue,b as oe,c as re,d as ne,e as le,_ as ie}from"./DialogFooter-5m72NVS4.js";import{O as me,o as ce}from"./index-CYxz6zhG.js";import{X as pe}from"./x-CNIetJjP.js";import"./utils-CHtjtCvc.js";import"./createLucideIcon-BIa0ZYd1.js";const de=["src"],fe={name:"Dialog"},Q=Object.assign(fe,{props:{modelValue:{type:Boolean,default:!1},title:{type:String},description:{type:String},img:{type:String},size:{type:String,validator:function(e){return["sm","md","lg"].indexOf(e)!==-1}},width:{type:String},height:{type:String},force:{type:Boolean,default:!1},scroll:{type:Boolean,default:!1},padding:{type:String}},emits:["update:modelValue"],setup(e,{emit:R}){const t=e,r=ee(t.modelValue),W=R;B(()=>t.modelValue,a=>{r.value=a},{immediate:!0}),B(()=>r.value,a=>{W("update:modelValue",a)});const x=()=>{t.force||(r.value=!1)},Y=E(()=>{switch(t.size){case"sm":return"max-w-[513px] min-h-[241px]";case"md":return"max-w-[850px] min-h-[300px]";case"lg":return"max-w-[90%] h-[80%]";default:return t.size}}),Z=E(()=>({width:t.width,height:t.height,padding:t.padding}));return(a,be)=>(b(),te(s(ie),{open:r.value},{default:o(()=>[u(s(ce),null,{default:o(()=>[u(s(me),{class:"fixed inset-0 z-50 bg-[#000000]/50 backdrop-blur data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",onClick:x}),u(s(ue),{class:h(["py-10",[Y.value,{"pt-[100px] lg:pt-[120px]":!!e.img}]]),style:se(Z.value)},{default:o(()=>[!e.force&&(!e.img||e.img&&t.size!="sm")?(b(),A("div",{key:0,class:"absolute right-3 top-3 rounded-lg text-[#454545] hover:opacity-50",onClick:x},[u(s(pe),{class:"w-8 h-8"})])):D("",!0),e.img?(b(),A("img",{key:1,src:e.img,class:"absolute top-[-50px] left-1/2 -translate-x-1/2 max-h-[170px]"},null,8,de)):D("",!0),u(s(oe),{class:"flex flex-col grow justify-center"},{default:o(()=>[u(s(re),{class:"flex justify-center items-center text-22 lg:text-24 lg:font-semibold"},{default:o(()=>[n(a.$slots,"title",{},()=>[y(F(e.title),1)])]),_:3}),u(s(ne),{class:"text-lg font-medium leading-8 h-fit"},{default:o(()=>[n(a.$slots,"description",{},()=>[y(F(e.description),1)])]),_:3})]),_:3}),ae("div",{class:h({"overflow-y-auto grow":t.size=="lg"||e.scroll})},[n(a.$slots,"default")],2),u(s(le),{class:"h-fit"},{default:o(()=>[n(a.$slots,"footer")]),_:3})]),_:3},8,["class","style"])]),_:3})]),_:3},8,["open"]))}}),ge=Q;Q.__docgenInfo={exportName:"default",displayName:"Dialog",description:"",tags:{},props:[{name:"modelValue",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"title",type:{name:"string"}},{name:"description",type:{name:"string"}},{name:"img",type:{name:"string"}},{name:"size",type:{name:"string"},values:["sm","md","lg"]},{name:"width",type:{name:"string"}},{name:"height",type:{name:"string"}},{name:"force",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"scroll",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"padding",type:{name:"string"}}],events:[{name:"update:modelValue"}],slots:[{name:"title"},{name:"description"},{name:"default"},{name:"footer"}],sourceFiles:["D:/Program/VueJs/CTBCINS-UIKit/src/stories/Dialog.vue"]};const ye={title:"Example/Dialog",component:ge,argTypes:{title:{control:"text"},description:{control:"text"},size:{control:{type:"radio"},options:["sm","md","lg"]},width:{control:"text"},height:{control:"text"},force:{control:"boolean"}}},l={args:{title:"是否放棄修改的資料返回?",size:"sm",modelValue:!0},parameters:{slots:{footer:{template:"<button>確定</button>"}}}},i={args:{modelValue:!0,title:"修改成功",description:"將自動跳轉回保單管理頁面...",size:"sm"}},m={args:{modelValue:!0,title:"修改成功",description:"將自動跳轉回保單管理頁面...",size:"sm",img:"/testImg/dialog-check.png"}},c={args:{modelValue:!0,title:"是否放棄修改的資料返回?",size:"sm",force:!0},parameters:{slots:{footer:{template:"<button>確定</button>"}}}},p={args:{modelValue:!0,title:"自行前往刷卡授權",size:"md"},parameters:{slots:{description:{template:'<p class="font-normal break-all">請客戶至以下網址 (https://ecp.ctbcins.com/pymt/customer/search)<br>並於網頁中輸入身分證號碼與驗證碼進行繳費</p>'},footer:{template:'<button class="rounded-full border w-fit px-4">複製網址</button>'}}}},d={args:{modelValue:!0,title:"自行前往刷卡授權",size:"lg"},parameters:{slots:{default:{template:'<div class="font-normal break-all bg-border h-[1000px]">請客戶至以下網址 (https://ecp.ctbcins.com/pymt/customer/search)<br>並於網頁中輸入身分證號碼與驗證碼進行繳費</div>'},footer:{template:'<button class="rounded-full border w-fit px-4">複製網址</button>'}}}},f={args:{modelValue:!0,title:"修改成功",description:"將自動跳轉回保單管理頁面...",width:"500px",height:"500px"},parameters:{slots:{footer:{template:'<button class="rounded-full border w-fit px-4">確認</button>'}}}},g={args:{modelValue:!0,size:"sm"},parameters:{slots:{title:{template:'<H1 class="text-alert">自訂的標題</H1>'},description:{template:'<p class="text-sm">自訂的描述</p>'},default:{template:'<p class="text-sm">自訂的內容</p><p class="text-sm">自訂的內容</p><p class="text-sm">自訂的內容</p><p class="text-sm">自訂的內容</p><p class="text-sm">自訂的內容</p><p class="text-sm">自訂的內容</p>'},footer:{template:'<button class="rounded-full border w-fit px-4">自訂的footer</button>'}}}};var C,V,z;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    title: '是否放棄修改的資料返回?',
    size: 'sm',
    modelValue: true
  },
  parameters: {
    slots: {
      footer: {
        template: '<button>確定</button>'
      }
    }
  }
}`,...(z=(V=l.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var w,S,v;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    modelValue: true,
    title: '修改成功',
    description: '將自動跳轉回保單管理頁面...',
    size: 'sm'
  }
}`,...(v=(S=i.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var k,_,$;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    modelValue: true,
    title: '修改成功',
    description: '將自動跳轉回保單管理頁面...',
    size: 'sm',
    img: '/testImg/dialog-check.png'
  }
}`,...($=(_=m.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var N,I,O;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    modelValue: true,
    title: '是否放棄修改的資料返回?',
    size: 'sm',
    force: true
  },
  parameters: {
    slots: {
      footer: {
        template: '<button>確定</button>'
      }
    }
  }
}`,...(O=(I=c.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var j,H,P;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    modelValue: true,
    title: '自行前往刷卡授權',
    size: 'md'
  },
  parameters: {
    slots: {
      description: {
        template: '<p class="font-normal break-all">請客戶至以下網址 (https://ecp.ctbcins.com/pymt/customer/search)<br>並於網頁中輸入身分證號碼與驗證碼進行繳費</p>'
      },
      footer: {
        template: '<button class="rounded-full border w-fit px-4">複製網址</button>'
      }
    }
  }
}`,...(P=(H=p.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var T,L,M;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    modelValue: true,
    title: '自行前往刷卡授權',
    size: 'lg'
  },
  parameters: {
    slots: {
      default: {
        template: '<div class="font-normal break-all bg-border h-[1000px]">請客戶至以下網址 (https://ecp.ctbcins.com/pymt/customer/search)<br>並於網頁中輸入身分證號碼與驗證碼進行繳費</div>'
      },
      footer: {
        template: '<button class="rounded-full border w-fit px-4">複製網址</button>'
      }
    }
  }
}`,...(M=(L=d.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var J,K,U;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    modelValue: true,
    title: '修改成功',
    description: '將自動跳轉回保單管理頁面...',
    width: '500px',
    height: '500px'
  },
  parameters: {
    slots: {
      footer: {
        template: '<button class="rounded-full border w-fit px-4">確認</button>'
      }
    }
  }
}`,...(U=(K=f.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};var X,q,G;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    modelValue: true,
    size: 'sm'
  },
  parameters: {
    slots: {
      title: {
        template: '<H1 class="text-alert">自訂的標題</H1>'
      },
      description: {
        template: '<p class="text-sm">自訂的描述</p>'
      },
      default: {
        template: '<p class="text-sm">自訂的內容</p><p class="text-sm">自訂的內容</p><p class="text-sm">自訂的內容</p><p class="text-sm">自訂的內容</p><p class="text-sm">自訂的內容</p><p class="text-sm">自訂的內容</p>'
      },
      footer: {
        template: '<button class="rounded-full border w-fit px-4">自訂的footer</button>'
      }
    }
  }
}`,...(G=(q=g.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};const Fe=["Default","Description","Pictrue","Force","Medium","Large","CustomSize","Slot"];export{f as CustomSize,l as Default,i as Description,c as Force,d as Large,p as Medium,m as Pictrue,g as Slot,Fe as __namedExportsOrder,ye as default};
