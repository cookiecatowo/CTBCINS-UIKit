import{o as e,a,f as c,k as d,e as m,u as s,d as v,J as P,F as g,j as $,g as N,v as Z,x as h}from"./vue.esm-bundler-DcUdeB67.js";import{_ as j,a as D,b as V}from"./PopoverContent-BPtjAuAX.js";import{f as I}from"./index-B7eDUBVh.js";import"./index-CYxz6zhG.js";import"./utils-CHtjtCvc.js";function J(r,t){return e(),a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[c("path",{"fill-rule":"evenodd",d:"M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm8.25 5.25a.75.75 0 0 1 .75-.75h8.25a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75Z","clip-rule":"evenodd"})])}function O(r,t){return e(),a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[c("path",{"fill-rule":"evenodd",d:"M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z","clip-rule":"evenodd"})])}function T(r,t){return e(),a("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[c("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18 18 6M6 6l12 12"})])}const X={key:0,class:"bg-white h-9 w-9 rounded-full hamburger flex items-center justify-center"},z=["onClick"],K={name:"PopMenu"},S=Object.assign(K,{props:{list:{type:Array},hamburger:{type:Boolean,default:!1}},emits:["click"],setup(r,{emit:t}){const F=t,H=p=>{F("click",p)};return(p,U)=>(e(),d(s(V),null,{default:m(()=>[v(s(j),{"as-child":""},{default:m(()=>[r.hamburger?(e(),a("div",X,[v(s(J),{class:"w-5 stroke-2 text-primary"})])):(e(),d(s(O),{key:1,class:"text-label h-9 w-9 cursor-pointer"}))]),_:1}),v(s(D),{class:"w-[180px] grid p-0 rounded-lg divide-y m-2 shadow"},{default:m(()=>[(e(!0),a(g,null,P(r.list,n=>(e(),a(g,null,[n.hide?h("",!0):(e(),a("div",{key:0,class:$(["hover:bg-inputDisabled w-full min-h-[60px] flex justify-between items-center p-3 cursor-pointer",[n.delete?"text-red":""]]),onClick:q=>H(n.value)},[N(p.$slots,"s_"+n.value,{},()=>[c("span",null,Z(n.label),1),n.delete?(e(),d(s(T),{key:0,class:"h-5 w-5 shrink-0"})):h("",!0)])],10,z))],64))),256))]),_:3})]),_:3}))}}),L=S;S.__docgenInfo={exportName:"default",displayName:"PopMenu",description:"",tags:{},props:[{name:"list",type:{name:"array"}},{name:"hamburger",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"click"}],slots:[{name:"'s_'+item.value",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["D:/Program/VueJs/CTBCINS-UIKit/src/stories/PopMenu.vue"]};const ee={title:"Example/PopMenu",component:L,tags:["autodocs"],argTypes:{list:{control:"array"},hamburger:{control:"boolean"}},args:{onClick:I()}},l={args:{list:[{value:"01",label:"修改"},{value:"02",label:"檢視"},{value:"03",label:"刪除資料",delete:!0}]}},u={args:{list:[{value:"01",label:"修改"},{value:"02",label:"檢視"},{value:"03",label:"刪除資料",delete:!0}],hamburger:!0}},o={args:{list:[{value:"01",label:"修改",hide:!0},{value:"02",label:"檢視"},{value:"03",label:"刪除資料",hide:!0}]}},i={args:{list:[{value:"01"},{value:"02"},{value:"03",delete:!0}]},parameters:{slots:{s_01:{template:"<span>修改</span><span>+</span>"},s_02:{template:"<span>檢視</span><span>*</span>"},s_03:{template:"<span>刪除</span><span>X</span>"}}}};var f,b,_;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    list: [{
      value: '01',
      label: '修改'
    }, {
      value: '02',
      label: '檢視'
    }, {
      value: '03',
      label: '刪除資料',
      delete: true
    }]
  }
}`,...(_=(b=l.parameters)==null?void 0:b.docs)==null?void 0:_.source}}};var w,x,k;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    list: [{
      value: '01',
      label: '修改'
    }, {
      value: '02',
      label: '檢視'
    }, {
      value: '03',
      label: '刪除資料',
      delete: true
    }],
    hamburger: true
  }
}`,...(k=(x=u.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var y,C,A;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    list: [{
      value: '01',
      label: '修改',
      hide: true
    }, {
      value: '02',
      label: '檢視'
    }, {
      value: '03',
      label: '刪除資料',
      hide: true
    }]
  }
}`,...(A=(C=o.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};var E,M,B;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    list: [{
      value: '01'
    }, {
      value: '02'
    }, {
      value: '03',
      delete: true
    }]
  },
  parameters: {
    slots: {
      s_01: {
        template: '<span>修改</span><span>+</span>'
      },
      s_02: {
        template: '<span>檢視</span><span>*</span>'
      },
      s_03: {
        template: '<span>刪除</span><span>X</span>'
      }
    }
  }
}`,...(B=(M=i.parameters)==null?void 0:M.docs)==null?void 0:B.source}}};const ae=["Default","Hamburger","Hide","Slot"];export{l as Default,u as Hamburger,o as Hide,i as Slot,ae as __namedExportsOrder,ee as default};
