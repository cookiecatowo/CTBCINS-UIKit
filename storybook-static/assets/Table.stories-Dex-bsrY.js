import{K as F,a as o,f as t,u,g as d,x as c,j as $,o as l}from"./vue.esm-bundler-DcUdeB67.js";const E={class:"my-6"},x={key:0,class:"h-[85px] text-base lg:text-lg text-white rounded-tableCard border"},y={class:"text-sm lg:text-base"},C={key:0},T={colspan:"50",class:"table-cell"},S={class:"w-full h-full flex justify-center items-center"},N={name:"Table"},b=Object.assign(N,{props:{collapse:{type:Boolean,default:!1}},setup(D){const n=F();return(r,v)=>(l(),o("div",E,[t("table",{class:$(["gap-x-2 w-full data-table",D.collapse?"data-table-collapse":"data-table-separate"])},[u(n).header?(l(),o("thead",x,[d(r.$slots,"header")])):c("",!0),t("tbody",y,[d(r.$slots,"default"),u(n).footer?(l(),o("tr",C,[t("td",T,[t("div",S,[d(r.$slots,"footer")])])])):c("",!0)])],2)]))}}),k=b;b.__docgenInfo={exportName:"default",displayName:"Table",description:"",tags:{},props:[{name:"collapse",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"header"},{name:"default"},{name:"footer"}],sourceFiles:["D:/Program/VueJs/CTBCINS-UIKit/src/stories/Table.vue"]};const j={title:"Example/Table",component:k,tags:["autodocs"],argTypes:{}},e={args:{},parameters:{slots:{header:{template:"<th>序號</th><th>被保險人</th><th>保費</th>"},default:{template:"<tr><td>01</td><td>AAA</td><td>$1,000</td></tr><tr><td>02</td><td>BBB</td><td>$1,999</td></tr>"},footer:{template:"總保費 $2,999 元"}}}},a={args:{},parameters:{slots:{header:{template:"<th>序號</th><th>被保險人</th><th>保費</th>"}}}},s={args:{collapse:!0},parameters:{slots:{header:{template:"<th>序號</th><th>被保險人</th><th>保費</th>"},default:{template:"<tr><td>01</td><td>AAA</td><td>$1,000</td></tr><tr><td>02</td><td>BBB</td><td>$1,999</td></tr>"}}}};var p,h,m;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {},
  parameters: {
    slots: {
      header: {
        template: '<th>序號</th><th>被保險人</th><th>保費</th>'
      },
      default: {
        template: '<tr><td>01</td><td>AAA</td><td>$1,000</td></tr><tr><td>02</td><td>BBB</td><td>$1,999</td></tr>'
      },
      footer: {
        template: '總保費 $2,999 元'
      }
    }
  }
}`,...(m=(h=e.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var f,B,i;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {},
  parameters: {
    slots: {
      header: {
        template: '<th>序號</th><th>被保險人</th><th>保費</th>'
      }
    }
  }
}`,...(i=(B=a.parameters)==null?void 0:B.docs)==null?void 0:i.source}}};var A,_,g;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    collapse: true
  },
  parameters: {
    slots: {
      header: {
        template: '<th>序號</th><th>被保險人</th><th>保費</th>'
      },
      default: {
        template: '<tr><td>01</td><td>AAA</td><td>$1,000</td></tr><tr><td>02</td><td>BBB</td><td>$1,999</td></tr>'
      }
    }
  }
}`,...(g=(_=s.parameters)==null?void 0:_.docs)==null?void 0:g.source}}};const w=["Default","Empty","Collapse"];export{s as Collapse,e as Default,a as Empty,w as __namedExportsOrder,j as default};
