import{a as r,v as E,t as d,x as s,r as F,o as t}from"./vue.esm-bundler-C3HUlvCY.js";import"./index-B7eDUBVh.js";const B={class:"flex flex-col gap-y-2"},S={class:"flex flex-col gap-y-4"},y={key:0,class:"inline items-end break-all"},D={key:0,class:"text-lg font-semibold"},I={key:1,class:"text-sm font-normal ml-1 mb-[2px]"},_={key:0,class:"text-xs text-alert break-all"},k={name:"FormFrame"},b=Object.assign(k,{props:{title:{type:String},subtitle:{type:String,default:""},errMsg:{type:String,default:""}},setup(e){return(x,h)=>(t(),r("div",B,[E("div",S,[e.title||e.subtitle?(t(),r("div",y,[e.title?(t(),r("span",D,d(e.title),1)):s("",!0),e.subtitle?(t(),r("span",I,d(e.subtitle),1)):s("",!0)])):s("",!0),F(x.$slots,"default")]),e.errMsg?(t(),r("span",_,d(e.errMsg),1)):s("",!0)]))}}),A=b;b.__docgenInfo={exportName:"default",displayName:"FormFrame",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"subtitle",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"errMsg",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"default"}],sourceFiles:["D:/Program/VueJs/CTBCINS-UIKit/src/stories/FormFrame.vue"]};const N={title:"Example/FormFrame",component:A,tags:["autodocs"],argTypes:{title:{control:"text"},subtitle:{control:"text"},errMsg:{control:"text"}},parameters:{docs:{description:{component:"這是一個針對組合表單欄位所制定的表單元件框架，僅包含標題、副標題與錯誤訊息，可自行將Input.Select.DateInput等使用slot方式插入，達到組合表單元件的效果。<br>以下針對組合欄位展示範例。"}}}},a={args:{title:"身分證號/統編"},parameters:{slots:{default:{template:'<div class="grid grid-cols-2"><div class="border border-outer-frame rounded-lg">InputExample</div><div class="border border-outer-frame rounded-lg">SelectExample</div></div>'}}}},l={args:{title:"市內電話",subtitle:"(市話、手機與信箱擇一填寫即可)"},parameters:{slots:{default:{template:'<div class="grid grid-cols-2"><div class="border border-outer-frame rounded-lg">InputExample</div><div class="border border-outer-frame rounded-lg">SelectExample</div></div>'}}}},o={args:{title:"身分證號/統編",errMsg:"請輸入正確的身分證號/統編"},parameters:{slots:{default:{template:'<div class="grid grid-cols-2"><div class="border border-outer-frame rounded-lg">InputExample</div><div class="border border-outer-frame rounded-lg">SelectExample</div></div>'}}}};var u,n,i;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    title: '身分證號/統編'
  },
  parameters: {
    slots: {
      default: {
        template: '<div class="grid grid-cols-2"><div class="border border-outer-frame rounded-lg">InputExample</div><div class="border border-outer-frame rounded-lg">SelectExample</div></div>'
      }
    }
  }
}`,...(i=(n=a.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var c,m,p;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    title: '市內電話',
    subtitle: '(市話、手機與信箱擇一填寫即可)'
  },
  parameters: {
    slots: {
      default: {
        template: '<div class="grid grid-cols-2"><div class="border border-outer-frame rounded-lg">InputExample</div><div class="border border-outer-frame rounded-lg">SelectExample</div></div>'
      }
    }
  }
}`,...(p=(m=l.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var g,v,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    title: '身分證號/統編',
    errMsg: '請輸入正確的身分證號/統編'
  },
  parameters: {
    slots: {
      default: {
        template: '<div class="grid grid-cols-2"><div class="border border-outer-frame rounded-lg">InputExample</div><div class="border border-outer-frame rounded-lg">SelectExample</div></div>'
      }
    }
  }
}`,...(f=(v=o.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};const V=["Default","SubTitle","Error"];export{a as Default,o as Error,l as SubTitle,V as __namedExportsOrder,N as default};
