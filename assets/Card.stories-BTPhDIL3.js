import{c as D,g as b,j as F,e as h,u as E,o as k,r as w}from"./vue.esm-bundler-C3HUlvCY.js";import{_ as B}from"./Card-CNZO8G4j.js";import"./utils-CHtjtCvc.js";const I={name:"Card"},f=Object.assign(I,{props:{padding:{type:String},margin:{type:String},color:{type:String}},setup(S){const o=S,_=D(()=>({padding:o.padding,margin:o.margin,backgroundColor:o.color}));return(y,P)=>(k(),b(E(B),{class:"w-full h-full border border-[#D9D9D9] rounded-card px-4 py-8 lg:px-12 lg:py-14 bg-white",style:h(_.value)},{default:F(()=>[w(y.$slots,"default")]),_:3},8,["style"]))}}),N=f;f.__docgenInfo={exportName:"default",displayName:"Card",description:"",tags:{},props:[{name:"padding",type:{name:"string"}},{name:"margin",type:{name:"string"}},{name:"color",type:{name:"string"}}],slots:[{name:"default"}],sourceFiles:["D:/Program/VueJs/CTBCINS-UIKit/src/stories/Card.vue"]};const O={title:"Example/Card",component:N,tags:["autodocs"],argTypes:{padding:{control:"text"},margin:{control:"text"},color:{control:"text"}}},e={parameters:{slots:{default:{template:"Slot Content."}}}},t={args:{padding:"200px 100px 50px 25px"},parameters:{slots:{default:{template:"Slot Content."}}}},a={args:{margin:"200px 100px 50px 25px"},parameters:{slots:{default:{template:"Slot Content."}}}},r={args:{color:"#E9F8F8"},parameters:{slots:{default:{template:"Slot Content."}}}};var s,n,p;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  parameters: {
    slots: {
      default: {
        template: 'Slot Content.'
      }
    }
  }
}`,...(p=(n=e.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var l,m,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    padding: '200px 100px 50px 25px'
  },
  parameters: {
    slots: {
      default: {
        template: 'Slot Content.'
      }
    }
  }
}`,...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var c,u,i;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    margin: '200px 100px 50px 25px'
  },
  parameters: {
    slots: {
      default: {
        template: 'Slot Content.'
      }
    }
  }
}`,...(i=(u=a.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};var g,x,C;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    color: '#E9F8F8'
  },
  parameters: {
    slots: {
      default: {
        template: 'Slot Content.'
      }
    }
  }
}`,...(C=(x=r.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};const T=["Default","CustomPadding","CustomMargin","CustomColor"];export{r as CustomColor,a as CustomMargin,t as CustomPadding,e as Default,T as __namedExportsOrder,O as default};
