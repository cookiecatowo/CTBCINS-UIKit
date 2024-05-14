import{R as x,a as d,v as t,u as p,r as l,x as c,n as y,o as u}from"./vue.esm-bundler-C3HUlvCY.js";const T={class:"my-6"},S={key:0,class:"h-[85px] text-base lg:text-lg text-white rounded-tableCard border"},v={class:"text-sm lg:text-base"},N={key:0},k={colspan:"50",class:"table-cell"},V={class:"w-full h-full flex justify-center items-center"},w={name:"Table"},$=Object.assign(w,{props:{collapse:{type:Boolean,default:!1}},setup(C){const n=x();return(o,j)=>(u(),d("div",T,[t("table",{class:y(["gap-x-2 w-full data-table",C.collapse?"data-table-collapse":"data-table-separate"])},[p(n).header?(u(),d("thead",S,[l(o.$slots,"header")])):c("",!0),t("tbody",v,[l(o.$slots,"default"),p(n).footer?(u(),d("tr",N,[t("td",k,[t("div",V,[l(o.$slots,"footer")])])])):c("",!0)])],2)]))}}),I=$;$.__docgenInfo={exportName:"default",displayName:"Table",description:"",tags:{},props:[{name:"collapse",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"header"},{name:"default"},{name:"footer"}],sourceFiles:["D:/Program/VueJs/CTBCINS-UIKit/src/stories/Table.vue"]};const z={title:"Example/Table",component:I,tags:["autodocs"],argTypes:{},parameters:{docs:{description:{component:"自定義表格，請使用slot header. default. footer插入對應欄位，若需要顯示錯誤訊息，請再tr上新增err class，並在tr後加入帶有err class的文字。"}}}},e={args:{},parameters:{slots:{header:{template:"<th>序號</th><th>被保險人</th><th>保費</th>"},default:{template:"<tr><td>01</td><td>AAA</td><td>$1,000</td></tr><tr><td>02</td><td>BBB</td><td>$1,999</td></tr>"},footer:{template:"總保費 $2,999 元"}}}},a={args:{},parameters:{slots:{header:{template:"<th>序號</th><th>被保險人</th><th>保費</th>"}}}},s={args:{},parameters:{slots:{header:{template:"<th>序號</th><th>被保險人</th><th>保費</th>"},default:{template:'<tr class="err"><td>01</td><td>AAA</td><td>$1,000</td></tr><p class="err">請點擊編輯按鈕新增受益人與投保方案</p>'},footer:{template:"總保費 $2,999 元"}}}},r={args:{collapse:!0},parameters:{slots:{header:{template:"<th>序號</th><th>被保險人</th><th>保費</th>"},default:{template:"<tr><td>01</td><td>AAA</td><td>$1,000</td></tr><tr><td>02</td><td>BBB</td><td>$1,999</td></tr>"}}}};var h,m,B;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(B=(m=e.parameters)==null?void 0:m.docs)==null?void 0:B.source}}};var A,f,i;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {},
  parameters: {
    slots: {
      header: {
        template: '<th>序號</th><th>被保險人</th><th>保費</th>'
      }
    }
  }
}`,...(i=(f=a.parameters)==null?void 0:f.docs)==null?void 0:i.source}}};var D,g,E;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {},
  parameters: {
    slots: {
      header: {
        template: '<th>序號</th><th>被保險人</th><th>保費</th>'
      },
      default: {
        template: '<tr class="err"><td>01</td><td>AAA</td><td>$1,000</td></tr><p class="err">請點擊編輯按鈕新增受益人與投保方案</p>'
      },
      footer: {
        template: '總保費 $2,999 元'
      }
    }
  }
}`,...(E=(g=s.parameters)==null?void 0:g.docs)==null?void 0:E.source}}};var F,_,b;r.parameters={...r.parameters,docs:{...(F=r.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(b=(_=r.parameters)==null?void 0:_.docs)==null?void 0:b.source}}};const J=["Default","Empty","Error","Collapse"];export{r as Collapse,e as Default,a as Empty,s as Error,J as __namedExportsOrder,z as default};
