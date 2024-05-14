import{f as P}from"./index-B7eDUBVh.js";import{c as i,a as T,v as u,n as c,t as j,e as q,o as W}from"./vue.esm-bundler-C3HUlvCY.js";const J=["disabled"],K=["src"],U={name:"Button3D"},v=Object.assign(U,{props:{label:{type:String,required:!0},img:{type:String},outline:{type:Boolean,default:!1},color:{type:String},size:{type:String},width:{type:String},height:{type:String},shadow:{type:String},disabled:{type:Boolean,default:!1}},emits:["click"],setup(t,{emit:_}){const e=t,F=_,A=i(()=>({"bg-primary text-white ":!e.outline,"bg-white text-black":e.outline})),N=i(()=>{switch(e.size){case"sm":return"h-[44px] text-base border gap-x-2";case"lg":return"w-[233px] lg:w-[390px] h-[59px] lg:h-[98px] text-base lg:text-28 border-2  gap-x-4 tracking-wider";default:return"w-[233px] lg:w-[390px] h-[59px] lg:h-[98px] text-base lg:text-28 border-2  gap-x-4"}}),O=i(()=>({backgroundColor:e.color,width:e.width,height:e.height,boxShadow:"6px 4px 14.6px 0px "+e.shadow})),V=()=>{F("click")};return(H,L)=>(W(),T("button",{type:"button",class:c([[A.value,N.value],"py-0 px-4 rounded-full border-outer-frame flex items-center justify-center cursor-pointer disabled:bg-locking disabled:text-btnDisabledText disabled:cursor-default hover:brightness-[0.85] disabled:hover:brightness-100"]),onClick:V,style:q(O.value),disabled:t.disabled},[u("img",{src:t.img,class:c(["h-full w-auto",[e.size=="sm"?"py-2":"py-2 lg:py-4",t.disabled?"grayscale":""]])},null,10,K),u("span",null,j(t.label),1)],14,J))}}),G=v;v.__docgenInfo={exportName:"default",displayName:"Button3D",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!0},{name:"img",type:{name:"string"}},{name:"outline",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"color",type:{name:"string"}},{name:"size",type:{name:"string"}},{name:"width",type:{name:"string"}},{name:"height",type:{name:"string"}},{name:"shadow",type:{name:"string"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"click"}],sourceFiles:["D:/Program/VueJs/CTBCINS-UIKit/src/stories/Button3D.vue"]};const R={title:"Example/Button3D",component:G,tags:["autodocs"],argTypes:{color:{control:"color"},width:{control:"text"},height:{control:"text"},size:{control:{type:"radio"},options:["sm","lg"]}},args:{onClick:P()}},s={args:{label:"選擇 Excel 上傳",img:"/testImg/3dBtn1.png"}},a={args:{outline:!0,label:"影像辨識",img:"/testImg/3dBtn2.png"}},r={args:{label:"影像辨識",disabled:!0,img:"/testImg/3dBtn2.png"}},n={args:{label:"選擇常用要保人",outline:!0,size:"sm",shadow:"#4964CE24",img:"/testImg/3dBtn1.png"}},o={args:{color:"#474747",label:"查看全部",img:"/testImg/3dBtn1.png"}},l={args:{label:"確認",width:"200px",height:"70px",img:"/testImg/3dBtn1.png"}};var g,m,d;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: '選擇 Excel 上傳',
    img: '/testImg/3dBtn1.png'
  }
}`,...(d=(m=s.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var p,b,h;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    outline: true,
    label: '影像辨識',
    img: '/testImg/3dBtn2.png'
  }
}`,...(h=(b=a.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var x,y,B;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: '影像辨識',
    disabled: true,
    img: '/testImg/3dBtn2.png'
  }
}`,...(B=(y=r.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};var f,w,C;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: '選擇常用要保人',
    outline: true,
    size: 'sm',
    shadow: '#4964CE24',
    img: '/testImg/3dBtn1.png'
  }
}`,...(C=(w=n.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var S,I,z;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    color: '#474747',
    label: '查看全部',
    img: '/testImg/3dBtn1.png'
  }
}`,...(z=(I=o.parameters)==null?void 0:I.docs)==null?void 0:z.source}}};var D,k,E;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: '確認',
    width: '200px',
    height: '70px',
    img: '/testImg/3dBtn1.png'
  }
}`,...(E=(k=l.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};const X=["Primary","Outline","Disabled","Small","CustomizeColor","CustomizeWidth"];export{o as CustomizeColor,l as CustomizeWidth,r as Disabled,a as Outline,s as Primary,n as Small,X as __namedExportsOrder,R as default};
