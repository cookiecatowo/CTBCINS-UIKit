import{o as b,a as v,v as x,c as S,g as k,j as T,e as A,u as l,r as D,l as w,f as E,t as N}from"./vue.esm-bundler-C3HUlvCY.js";import{_ as F}from"./Card-CNZO8G4j.js";import{f as V}from"./index-B7eDUBVh.js";import"./utils-CHtjtCvc.js";function j(a,o){return b(),v("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[x("path",{"fill-rule":"evenodd",d:"M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z","clip-rule":"evenodd"})])}const I={class:"flex items-center gap-x-2"},O={name:"TableBtn"},B=Object.assign(O,{props:{label:{type:String},color:{type:String}},emits:["click"],setup(a,{emit:o}){const s=a,_=S(()=>({color:s.color,borderColor:s.color})),C=o,h=()=>{C("click")};return(y,z)=>(b(),k(l(F),{class:"w-full h-full border border-primary text-primary text-lg lg:text-xl border-dashed rounded-tableCard p-6 flex justify-center items-center cursor-pointer",style:A(_.value),onClick:h},{default:T(()=>[D(y.$slots,"default",{},()=>[x("div",I,[w(l(j),{class:"h-5 lg:h-6"}),E(" "+N(a.label),1)])])]),_:3},8,["style"]))}}),$=B;B.__docgenInfo={exportName:"default",displayName:"TableBtn",description:"",tags:{},props:[{name:"label",type:{name:"string"}},{name:"color",type:{name:"string"}}],events:[{name:"click"}],slots:[{name:"default"}],sourceFiles:["D:/Program/VueJs/CTBCINS-UIKit/src/stories/TableBtn.vue"]};const P={title:"Example/TableBtn",component:$,tags:["autodocs"],argTypes:{label:{control:"text"},color:{control:"text"}},args:{onClick:V()}},e={args:{label:"新增被保險人"}},t={parameters:{slots:{default:{template:"Slot Content."}}}},r={args:{label:"新增被保險人",color:"#F26868"}};var n,c,u;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: '新增被保險人'
  }
}`,...(u=(c=e.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var i,m,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  parameters: {
    slots: {
      default: {
        template: 'Slot Content.'
      }
    }
  }
}`,...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var p,f,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: '新增被保險人',
    color: '#F26868'
  }
}`,...(g=(f=r.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const U=["Default","Slot","CustomColor"];export{r as CustomColor,e as Default,t as Slot,U as __namedExportsOrder,P as default};
