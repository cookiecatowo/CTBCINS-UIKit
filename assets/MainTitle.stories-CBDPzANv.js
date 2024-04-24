import{c as p,o as i,k as m,m as q,u as o,a as E,f as g,v as f,n as x,x as y}from"./vue.esm-bundler-DcUdeB67.js";import{v as N}from"./index-CYxz6zhG.js";import{c as P}from"./utils-CHtjtCvc.js";const d={__name:"Separator",props:{orientation:{type:String,required:!1},decorative:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1}},setup(t){const e=t,l=p(()=>{const{class:c,...u}=e;return u});return(c,u)=>(i(),m(o(N),q(l.value,{class:o(P)("shrink-0 bg-[#A4A4A4] dark:bg-slate-800",e.orientation==="vertical"?"w-px h-full":"h-px w-full",e.class)}),null,16,["class"]))}};d.__docgenInfo={exportName:"default",displayName:"Separator",description:"",tags:{},props:[{name:"orientation",type:{name:"string"},required:!1},{name:"decorative",type:{name:"boolean"},required:!1},{name:"asChild",type:{name:"boolean"},required:!1},{name:"as",type:{name:"null"},required:!1},{name:"class",type:{name:"null"},required:!1}],sourceFiles:["D:/Program/VueJs/CTBCINS-UIKit/src/components/ui/separator/Separator.vue"]};const W={class:"flex justify-center items-center"},A={name:"MainTitle"},C=Object.assign(A,{props:{title:{type:String},eng:{type:String},divider:{type:Boolean,default:!1},fontsize:{type:String},weight:{type:String},engFontsize:{type:String},engWeight:{type:String}},setup(t){const e=t,l=p(()=>({fontWeight:e.weight,fontSize:e.fontsize})),c=p(()=>({fontWeight:e.engWeight,fontSize:e.engFontsize}));return(u,M)=>(i(),E("div",null,[g("span",{class:"flex flex-col items-center text-[#A4A4A4] mb-1 text-xs lg:text-lg font-semobold",style:x(c.value)},f(t.eng),5),g("div",W,[t.divider?(i(),m(o(d),{key:0,class:"shrink max-w-[61px] lg:max-w-[164px]"})):y("",!0),g("span",{class:"text-black shrink-0 px-6 text-24 font-semibold lg:text-32 lg:font-medium",style:x(l.value)},f(t.title),5),t.divider?(i(),m(o(d),{key:1,class:"shrink max-w-[61px] lg:max-w-[164px]"})):y("",!0)])]))}}),I=C;C.__docgenInfo={exportName:"default",displayName:"MainTitle",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"eng",type:{name:"string"}},{name:"divider",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"fontsize",type:{name:"string"}},{name:"weight",type:{name:"string"}},{name:"engFontsize",type:{name:"string"}},{name:"engWeight",type:{name:"string"}}],sourceFiles:["D:/Program/VueJs/CTBCINS-UIKit/src/stories/MainTitle.vue"]};const K={title:"Example/MainTitle",component:I,tags:["autodocs"],argTypes:{title:{control:"text"},eng:{control:"text"},divider:{control:"boolean"},fontsize:{control:"text"},weight:{control:"text"},engFontsize:{control:"text"},engWeight:{control:"text"}}},n={args:{title:"投保方案"}},a={args:{title:"投保方案",divider:!0}},s={args:{title:"要保人資料輸入",eng:"STEP 01",divider:!0}},r={args:{title:"投保方案",eng:"STEP 01",fontsize:"36px",weight:"900",engFontsize:"24px",engWeight:"700"}};var h,S,v;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    title: '投保方案'
  }
}`,...(v=(S=n.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var z,_,D;a.parameters={...a.parameters,docs:{...(z=a.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    title: '投保方案',
    divider: true
  }
}`,...(D=(_=a.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var B,F,T;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    title: '要保人資料輸入',
    eng: 'STEP 01',
    divider: true
  }
}`,...(T=(F=s.parameters)==null?void 0:F.docs)==null?void 0:T.source}}};var k,w,b;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    title: '投保方案',
    eng: 'STEP 01',
    fontsize: '36px',
    weight: '900',
    engFontsize: '24px',
    engWeight: '700'
  }
}`,...(b=(w=r.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};const O=["Default","Divider","English","CustomSize"];export{r as CustomSize,n as Default,a as Divider,s as English,O as __namedExportsOrder,K as default};
