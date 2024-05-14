import{k as me,w as C,c as F,g as V,j as u,u as s,o,l as r,n as v,e as ce,a as z,x as h,r as l,f as D,t as y,v as pe}from"./vue.esm-bundler-C3HUlvCY.js";import{B as de}from"./Button-D5T75OZ2.js";import{a as ge,b as fe,c as xe,d as Be,e as be,_ as Ee}from"./DialogFooter-DzUZ3Iiv.js";import{O as he,o as De}from"./index-afhknXpz.js";import{X as ye}from"./x-B2ctsR4a.js";import{f as Ae}from"./index-B7eDUBVh.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./utils-CHtjtCvc.js";import"./createLucideIcon-BrbXVS4p.js";const Ce=["src"],Fe={name:"Dialog"},re=Object.assign(Fe,{props:{modelValue:{type:Boolean,default:!1},title:{type:String},description:{type:String},img:{type:String},size:{type:String,validator:function(e){return["sm","md","lg"].indexOf(e)!==-1}},width:{type:String},height:{type:String},force:{type:Boolean,default:!1},scroll:{type:Boolean,default:!1},padding:{type:String},btnText:{type:String,default:"確定"}},emits:["update:modelValue","btnClick"],setup(e,{emit:ne}){const t=e,n=me(t.modelValue),A=ne;C(()=>t.modelValue,a=>{n.value=a},{immediate:!0}),C(()=>n.value,a=>{A("update:modelValue",a)});const E=()=>{t.force||(n.value=!1)},oe=()=>{A("btnClick"),E()},le=F(()=>{switch(t.size){case"sm":return"max-w-[513px] min-h-[278px] lg:min-h-[340px] items-end";case"md":return"max-w-[850px] min-h-[300px]";case"md-ver":return"max-w-[700px] h-[80%]";case"lg":return"max-w-[90%] h-[80%]";default:return t.size}}),ie=F(()=>({width:t.width,height:t.height,padding:t.padding}));return(a,ve)=>(o(),V(s(Ee),{open:n.value},{default:u(()=>[r(s(De),null,{default:u(()=>[r(s(he),{class:"fixed inset-0 z-50 bg-[#000000]/50 backdrop-blur data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",onClick:E}),r(s(ge),{class:v(["py-10",[le.value,{"pt-[100px] lg:pt-[120px]":!!e.img}]]),style:ce(ie.value)},{default:u(()=>[!e.force&&(!e.img||e.img&&t.size!="sm")?(o(),z("div",{key:0,class:"absolute right-3 top-3 rounded-lg text-[#454545] hover:opacity-50",onClick:E},[r(s(ye),{class:"w-8 h-8"})])):h("",!0),e.img?(o(),z("img",{key:1,src:e.img,class:"absolute top-[-50px] left-1/2 -translate-x-1/2 h-[140px] lg:h-[170px]"},null,8,Ce)):h("",!0),r(s(fe),{class:"flex flex-col grow justify-center"},{default:u(()=>[r(s(xe),{class:"flex justify-center items-center text-22 lg:text-28 lg:font-semibold"},{default:u(()=>[l(a.$slots,"title",{},()=>[D(y(e.title),1)])]),_:3}),r(s(Be),{class:"text-lg font-medium leading-8 h-fit"},{default:u(()=>[l(a.$slots,"description",{},()=>[D(y(e.description),1)])]),_:3})]),_:3}),pe("div",{class:v({"overflow-y-auto grow":t.size=="lg"||t.size=="md-ver"||e.scroll})},[l(a.$slots,"default")],2),r(s(be),{class:"h-fit"},{default:u(()=>[l(a.$slots,"footer",{},()=>[e.btnText?(o(),V(de,{key:0,size:"lg",onClick:oe},{default:u(()=>[D(y(e.btnText),1)]),_:1})):h("",!0)])]),_:3})]),_:3},8,["class","style"])]),_:3})]),_:3},8,["open"]))}}),Ve=re;re.__docgenInfo={exportName:"default",displayName:"Dialog",description:"",tags:{},props:[{name:"modelValue",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"title",type:{name:"string"}},{name:"description",type:{name:"string"}},{name:"img",type:{name:"string"}},{name:"size",type:{name:"string"},values:["sm","md","lg"]},{name:"width",type:{name:"string"}},{name:"height",type:{name:"string"}},{name:"force",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"scroll",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"padding",type:{name:"string"}},{name:"btnText",type:{name:"string"},defaultValue:{func:!1,value:"'確定'"}}],events:[{name:"update:modelValue"},{name:"btnClick"}],slots:[{name:"title"},{name:"description"},{name:"default"},{name:"footer"}],sourceFiles:["D:/Program/VueJs/CTBCINS-UIKit/src/stories/Dialog.vue"]};const Oe={title:"Example/Dialog",component:Ve,argTypes:{title:{control:"text"},description:{control:"text"},size:{control:{type:"radio"},options:["sm","md","lg"]},width:{control:"text"},height:{control:"text"},force:{control:"boolean"}},args:{onClick:Ae()}},i={args:{title:"是否放棄修改的資料返回?",size:"sm",modelValue:!0}},m={args:{modelValue:!0,title:"修改成功",description:"將自動跳轉回保單管理頁面...",size:"sm"}},c={args:{modelValue:!0,title:"修改成功",description:"將自動跳轉回保單管理頁面...",btnText:"取消返回",size:"sm"}},p={args:{modelValue:!0,title:"修改成功",size:"sm",img:"/testImg/dialog-check.png"}},d={args:{modelValue:!0,title:"是否放棄修改的資料返回?",size:"sm",force:!0}},g={args:{modelValue:!0,title:"自行前往刷卡授權",size:"md",btnText:"複製網址"},parameters:{slots:{description:{template:'<p class="font-normal break-all">請客戶至以下網址 (https://ecp.ctbcins.com/pymt/customer/search)<br>並於網頁中輸入身分證號碼與驗證碼進行繳費</p>'}}}},f={args:{modelValue:!0,size:"md-ver",scroll:!0,img:"/testImg/dialog-list.png"},parameters:{slots:{default:{template:'<div class="grid"><div v-for="n in 50">{{n}}</div></div>'}}}},x={args:{modelValue:!0,title:"自行前往刷卡授權",size:"lg"},parameters:{slots:{default:{template:'<div class="font-normal break-all bg-outer-frame h-[1000px]">請客戶至以下網址 (https://ecp.ctbcins.com/pymt/customer/search)<br>並於網頁中輸入身分證號碼與驗證碼進行繳費</div>'},footer:{template:'<button class="rounded-full border w-fit px-4">複製網址</button>'}}}},B={args:{modelValue:!0,title:"修改成功",description:"將自動跳轉回保單管理頁面...",width:"500px",height:"500px"},parameters:{slots:{footer:{template:'<button class="rounded-full border w-fit px-4">確認</button>'}}}},b={args:{modelValue:!0,size:"sm"},parameters:{slots:{title:{template:'<H1 class="text-alert">自訂的標題</H1>'},description:{template:'<p class="text-sm">自訂的描述</p>'},default:{template:'<p class="text-sm">自訂的內容</p><p class="text-sm">自訂的內容</p><p class="text-sm">自訂的內容</p><p class="text-sm">自訂的內容</p><p class="text-sm">自訂的內容</p><p class="text-sm">自訂的內容</p>'},footer:{template:'<button class="rounded-full border w-fit px-4">自訂的footer</button>'}}}};var S,w,k;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    title: '是否放棄修改的資料返回?',
    size: 'sm',
    modelValue: true
  }
}`,...(k=(w=i.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var T,_,$;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    modelValue: true,
    title: '修改成功',
    description: '將自動跳轉回保單管理頁面...',
    size: 'sm'
  }
}`,...($=(_=m.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var I,N,O;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    modelValue: true,
    title: '修改成功',
    description: '將自動跳轉回保單管理頁面...',
    btnText: '取消返回',
    size: 'sm'
  }
}`,...(O=(N=c.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var j,H,M;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    modelValue: true,
    title: '修改成功',
    size: 'sm',
    img: '/testImg/dialog-check.png'
  }
}`,...(M=(H=p.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var P,L,J;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    modelValue: true,
    title: '是否放棄修改的資料返回?',
    size: 'sm',
    force: true
  }
}`,...(J=(L=d.parameters)==null?void 0:L.docs)==null?void 0:J.source}}};var K,U,X;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    modelValue: true,
    title: '自行前往刷卡授權',
    size: 'md',
    btnText: '複製網址'
  },
  parameters: {
    slots: {
      description: {
        template: '<p class="font-normal break-all">請客戶至以下網址 (https://ecp.ctbcins.com/pymt/customer/search)<br>並於網頁中輸入身分證號碼與驗證碼進行繳費</p>'
      }
    }
  }
}`,...(X=(U=g.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var q,G,Q;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    modelValue: true,
    size: 'md-ver',
    scroll: true,
    img: '/testImg/dialog-list.png'
  },
  parameters: {
    slots: {
      default: {
        template: '<div class="grid"><div v-for="n in 50">{{n}}</div></div>'
      }
    }
  }
}`,...(Q=(G=f.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};var R,W,Y;x.parameters={...x.parameters,docs:{...(R=x.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    modelValue: true,
    title: '自行前往刷卡授權',
    size: 'lg'
  },
  parameters: {
    slots: {
      default: {
        template: '<div class="font-normal break-all bg-outer-frame h-[1000px]">請客戶至以下網址 (https://ecp.ctbcins.com/pymt/customer/search)<br>並於網頁中輸入身分證號碼與驗證碼進行繳費</div>'
      },
      footer: {
        template: '<button class="rounded-full border w-fit px-4">複製網址</button>'
      }
    }
  }
}`,...(Y=(W=x.parameters)==null?void 0:W.docs)==null?void 0:Y.source}}};var Z,ee,te;B.parameters={...B.parameters,docs:{...(Z=B.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(te=(ee=B.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var se,ae,ue;b.parameters={...b.parameters,docs:{...(se=b.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ue=(ae=b.parameters)==null?void 0:ae.docs)==null?void 0:ue.source}}};const je=["Default","Description","BtnText","Pictrue","Force","Medium","MediumVerticle","Large","CustomSize","Slot"];export{c as BtnText,B as CustomSize,i as Default,m as Description,d as Force,x as Large,g as Medium,f as MediumVerticle,p as Pictrue,b as Slot,je as __namedExportsOrder,Oe as default};
