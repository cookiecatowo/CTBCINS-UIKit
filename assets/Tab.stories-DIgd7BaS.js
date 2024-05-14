import{f as G}from"./index-B7eDUBVh.js";import{o as r,g as i,j as o,r as c,K as H,L as Q,u as a,c as y,m as _,k as W,v as X,l as Y,a as h,N as V,e as Z,x,f as ee,t as ae,M as T}from"./vue.esm-bundler-C3HUlvCY.js";import{C as te,P as se,g as le,$ as ne,S as re,D as ue}from"./index-afhknXpz.js";import{c as C}from"./utils-CHtjtCvc.js";const J={__name:"Tabs",props:{defaultValue:{type:String,required:!1},orientation:{type:String,required:!1},dir:{type:String,required:!1},activationMode:{type:String,required:!1},modelValue:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["update:modelValue"],setup(t,{emit:s}){const e=te(t,s);return(d,D)=>(r(),i(a(se),H(Q(a(e))),{default:o(()=>[c(d.$slots,"default")]),_:3},16))}};J.__docgenInfo={exportName:"default",displayName:"Tabs",description:"",tags:{},props:[{name:"defaultValue",type:{name:"string"},required:!1},{name:"orientation",type:{name:"string"},required:!1},{name:"dir",type:{name:"string"},required:!1},{name:"activationMode",type:{name:"string"},required:!1},{name:"modelValue",type:{name:"string"},required:!1},{name:"asChild",type:{name:"boolean"},required:!1},{name:"as",type:{name:"null"},required:!1}],events:[{name:"update:modelValue"}],slots:[{name:"default"}],sourceFiles:["D:/Program/VueJs/CTBCINS-UIKit/src/components/ui/tabs/Tabs.vue"]};const L={__name:"TabsTrigger",props:{value:{type:String,required:!0},disabled:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1}},setup(t){const s=t,u=y(()=>{const{class:e,...d}=s;return d}),l=le(u);return(e,d)=>(r(),i(a(ne),_(a(l),{class:a(C)("inline-flex items-center justify-center whitespace-nowrap rounded-full bg-locking text-black font-medium data-[state=active]:bg-primary data-[state=active]:text-white",s.class)}),{default:o(()=>[c(e.$slots,"default")]),_:3},16,["class"]))}};L.__docgenInfo={exportName:"default",displayName:"TabsTrigger",description:"",tags:{},props:[{name:"value",type:{name:"string"},required:!0},{name:"disabled",type:{name:"boolean"},required:!1},{name:"asChild",type:{name:"boolean"},required:!1},{name:"as",type:{name:"null"},required:!1},{name:"class",type:{name:"null"},required:!1}],slots:[{name:"default"}],sourceFiles:["D:/Program/VueJs/CTBCINS-UIKit/src/components/ui/tabs/TabsTrigger.vue"]};const z={__name:"TabsList",props:{loop:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1}},setup(t){const s=t,u=y(()=>{const{class:l,...e}=s;return e});return(l,e)=>(r(),i(a(re),_(u.value,{class:a(C)("inline-flex h-fit w-fit items-center justify-center rounded-full bg-locking",s.class)}),{default:o(()=>[c(l.$slots,"default")]),_:3},16,["class"]))}};z.__docgenInfo={exportName:"default",displayName:"TabsList",description:"",tags:{},props:[{name:"loop",type:{name:"boolean"},required:!1},{name:"asChild",type:{name:"boolean"},required:!1},{name:"as",type:{name:"null"},required:!1},{name:"class",type:{name:"null"},required:!1}],slots:[{name:"default"}],sourceFiles:["D:/Program/VueJs/CTBCINS-UIKit/src/components/ui/tabs/TabsList.vue"]};const O={__name:"TabsContent",props:{value:{type:String,required:!0},forceMount:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1}},setup(t){const s=t,u=y(()=>{const{class:l,...e}=s;return e});return(l,e)=>(r(),i(a(ue),_({class:a(C)("mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 transition-all",s.class)},u.value),{default:o(()=>[c(l.$slots,"default")]),_:3},16,["class"]))}};O.__docgenInfo={exportName:"default",displayName:"TabsContent",description:"",tags:{},props:[{name:"value",type:{name:"string"},required:!0},{name:"forceMount",type:{name:"boolean"},required:!1},{name:"asChild",type:{name:"boolean"},required:!1},{name:"as",type:{name:"null"},required:!1},{name:"class",type:{name:"null"},required:!1}],slots:[{name:"default"}],sourceFiles:["D:/Program/VueJs/CTBCINS-UIKit/src/components/ui/tabs/TabsContent.vue"]};const oe={class:"flex justify-center w-full"},ie=["src"],de={name:"Tab"},R=Object.assign(de,{props:{modelValue:{type:String},list:{type:Array},width:{type:String},height:{type:String},content:{type:Boolean,default:!1}},emits:["click","update:modelValue"],setup(t,{emit:s}){const u=t,l=s,e=W(""),d=y(()=>({width:u.width,height:u.height})),D=v=>{l("click",v)};return(v,q)=>(r(),i(a(J),{modelValue:e.value,"onUpdate:modelValue":q[0]||(q[0]=n=>e.value=n)},{default:o(()=>[X("div",oe,[Y(a(z),null,{default:o(()=>[(r(!0),h(T,null,V(t.list,n=>(r(),i(a(L),{class:"text-sm h-[42px] w-[176px] lg:text-xl lg:h-[81px] lg:w-[353px] transition-all",style:Z(d.value),value:n.value,onClick:me=>D(n.value)},{default:o(()=>[n.img?(r(),h("img",{key:0,src:n.img,class:"h-[60px] mb-4 lg:h-[110px] lg:mb-6"},null,8,ie)):x("",!0),ee(" "+ae(n.label),1)]),_:2},1032,["style","value","onClick"]))),256))]),_:1})]),t.content?(r(!0),h(T,{key:0},V(t.list,n=>(r(),i(a(O),{value:n.value},{default:o(()=>[c(v.$slots,"s_"+n.value)]),_:2},1032,["value"]))),256)):x("",!0)]),_:3},8,["modelValue"]))}}),ce=R;R.__docgenInfo={exportName:"default",displayName:"Tab",description:"",tags:{},props:[{name:"modelValue",type:{name:"string"}},{name:"list",type:{name:"array"}},{name:"width",type:{name:"string"}},{name:"height",type:{name:"string"}},{name:"content",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"click"},{name:"update:modelValue"}],slots:[{name:"'s_' + item.value",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["D:/Program/VueJs/CTBCINS-UIKit/src/stories/Tab.vue"]};const ye={title:"Example/Tab",component:ce,tags:["autodocs"],argTypes:{modelValue:{control:"text"},list:{control:"array"},width:{control:"text"},height:{control:"text"},content:{control:"boolean"}},args:{onClick:G()}},m={args:{modelValue:"01",list:[{value:"01",label:"基本資料異動"},{value:"02",label:"保額或人數異動"}]}},p={args:{modelValue:"02",list:[{value:"01",label:"基本資料異動",img:"/testImg/tab1.png"},{value:"02",label:"保額或人數異動",img:"/testImg/tab2.png"}]}},f={args:{modelValue:"02",list:[{value:"01",label:"基本資料異動"},{value:"02",label:"保額或人數異動"}],content:!0},parameters:{slots:{s_01:{template:"<h1> 基本資料異動 </h1>"},s_02:{template:"<h1> 保額或人數異動 </h1>"}}}},g={args:{modelValue:"01",list:[{value:"01",label:"基本資料異動"},{value:"02",label:"保額或人數異動"}],width:"200px",height:"100px"}},b={args:{modelValue:"01",list:[{value:"01",label:"基本資料異動"},{value:"02",label:"保額或人數異動"},{value:"03",label:"保期異動"}]}};var S,B,F;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    modelValue: '01',
    list: [{
      value: '01',
      label: '基本資料異動'
    }, {
      value: '02',
      label: '保額或人數異動'
    }]
  }
}`,...(F=(B=m.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var N,I,k;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    modelValue: '02',
    list: [{
      value: '01',
      label: '基本資料異動',
      img: '/testImg/tab1.png'
    }, {
      value: '02',
      label: '保額或人數異動',
      img: '/testImg/tab2.png'
    }]
  }
}`,...(k=(I=p.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var w,P,A;f.parameters={...f.parameters,docs:{...(w=f.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    modelValue: '02',
    list: [{
      value: '01',
      label: '基本資料異動'
    }, {
      value: '02',
      label: '保額或人數異動'
    }],
    content: true
  },
  parameters: {
    slots: {
      s_01: {
        template: \`<h1> 基本資料異動 </h1>\`
      },
      s_02: {
        template: \`<h1> 保額或人數異動 </h1>\`
      }
    }
  }
}`,...(A=(P=f.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var $,E,M;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    modelValue: '01',
    list: [{
      value: '01',
      label: '基本資料異動'
    }, {
      value: '02',
      label: '保額或人數異動'
    }],
    width: '200px',
    height: '100px'
  }
}`,...(M=(E=g.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var K,U,j;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    modelValue: '01',
    list: [{
      value: '01',
      label: '基本資料異動'
    }, {
      value: '02',
      label: '保額或人數異動'
    }, {
      value: '03',
      label: '保期異動'
    }]
  }
}`,...(j=(U=b.parameters)==null?void 0:U.docs)==null?void 0:j.source}}};const ve=["Default","Picture","Content","CustomSize","Multi"];export{f as Content,g as CustomSize,m as Default,b as Multi,p as Picture,ve as __namedExportsOrder,ye as default};
