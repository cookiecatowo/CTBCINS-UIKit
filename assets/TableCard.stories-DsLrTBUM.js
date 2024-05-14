import{R as V,c as t,g as j,j as M,e as a,u as p,o as m,a as g,r as c,x as u,v as O}from"./vue.esm-bundler-C3HUlvCY.js";import{_ as z}from"./Card-CNZO8G4j.js";import"./utils-CHtjtCvc.js";const J={name:"TableCard"},k=Object.assign(J,{props:{padding:{type:String},margin:{type:String},color:{type:String},headerPadding:{type:String},footerPadding:{type:String}},setup(E){const e=E,i=V(),N=t(()=>({padding:e.padding})),w=t(()=>({padding:e.headerPadding})),$=t(()=>({padding:e.footerPadding})),I=t(()=>({margin:e.margin,backgroundColor:e.color}));return(d,R)=>(m(),j(p(z),{class:"w-full h-full border border-[#D9D9D9] rounded-tableCard bg-white",style:a(I.value)},{default:M(()=>[p(i).header?(m(),g("div",{key:0,class:"bg-[#3B3B3B] text-white p-4 lg:px-12 tablecard-header",style:a(w.value)},[c(d.$slots,"header")],4)):u("",!0),O("div",{class:"p-4 lg:p-12",style:a(N.value)},[c(d.$slots,"default")],4),p(i).footer?(m(),g("div",{key:1,class:"p-4 lg:px-12 tablecard-footer border-t border-[#D9D9D9]",style:a($.value)},[c(d.$slots,"footer")],4)):u("",!0)]),_:3},8,["style"]))}}),K=k;k.__docgenInfo={exportName:"default",displayName:"TableCard",description:"",tags:{},props:[{name:"padding",type:{name:"string"}},{name:"margin",type:{name:"string"}},{name:"color",type:{name:"string"}},{name:"headerPadding",type:{name:"string"}},{name:"footerPadding",type:{name:"string"}}],slots:[{name:"header"},{name:"default"},{name:"footer"}],sourceFiles:["D:/Program/VueJs/CTBCINS-UIKit/src/stories/TableCard.vue"]};const G={title:"Example/TableCard",component:K,tags:["autodocs"],argTypes:{padding:{control:"text"},margin:{control:"text"},color:{control:"text"},headerPadding:{control:"text"},footerPadding:{control:"text"}}},r={parameters:{slots:{header:{template:"Slot Header."},default:{template:"Slot Content."},footer:{template:"Slot Footer."}}}},o={parameters:{slots:{default:{template:"Slot Content."}}}},n={args:{padding:"200px 100px 50px 25px",headerPadding:"50px 25px 10px 5px",footerPadding:"50px 25px 10px 5px"},parameters:{slots:{header:{template:"Slot Header."},default:{template:"Slot Content."},footer:{template:"Slot Footer."}}}},s={args:{margin:"200px 100px 50px 25px"},parameters:{slots:{header:{template:"Slot Header."},default:{template:"Slot Content."},footer:{template:"Slot Footer."}}}},l={args:{color:"#E9F8F8"},parameters:{slots:{header:{template:"Slot Header."},default:{template:"Slot Content."},footer:{template:"Slot Footer."}}}};var f,x,S;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  parameters: {
    slots: {
      header: {
        template: 'Slot Header.'
      },
      default: {
        template: 'Slot Content.'
      },
      footer: {
        template: 'Slot Footer.'
      }
    }
  }
}`,...(S=(x=r.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var C,h,y;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  parameters: {
    slots: {
      default: {
        template: 'Slot Content.'
      }
    }
  }
}`,...(y=(h=o.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var b,P,_;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    padding: '200px 100px 50px 25px',
    headerPadding: '50px 25px 10px 5px',
    footerPadding: '50px 25px 10px 5px'
  },
  parameters: {
    slots: {
      header: {
        template: 'Slot Header.'
      },
      default: {
        template: 'Slot Content.'
      },
      footer: {
        template: 'Slot Footer.'
      }
    }
  }
}`,...(_=(P=n.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var F,H,v;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    margin: '200px 100px 50px 25px'
  },
  parameters: {
    slots: {
      header: {
        template: 'Slot Header.'
      },
      default: {
        template: 'Slot Content.'
      },
      footer: {
        template: 'Slot Footer.'
      }
    }
  }
}`,...(v=(H=s.parameters)==null?void 0:H.docs)==null?void 0:v.source}}};var D,B,T;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    color: '#E9F8F8'
  },
  parameters: {
    slots: {
      header: {
        template: 'Slot Header.'
      },
      default: {
        template: 'Slot Content.'
      },
      footer: {
        template: 'Slot Footer.'
      }
    }
  }
}`,...(T=(B=l.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};const L=["Default","Hide","CustomPadding","CustomMargin","CustomColor"];export{l as CustomColor,s as CustomMargin,n as CustomPadding,r as Default,o as Hide,L as __namedExportsOrder,G as default};
