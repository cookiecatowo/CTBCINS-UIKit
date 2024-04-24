import{f as H}from"./index-B7eDUBVh.js";import{s as Q,a as R,g as Y,j as Z,n as ee,c as m,o as re,t as se,v as te}from"./vue.esm-bundler-DcUdeB67.js";import{_ as ae}from"./_plugin-vue_export-helper-DlAUqK2U.js";const K=Q({name:"Button",props:{label:{type:String,required:!0},outline:{type:Boolean,default:!1},size:{type:String,validator:function(e){return["sm","md","lg"].indexOf(e)!==-1}},color:{type:String},width:{type:String},height:{type:String},disabled:{type:Boolean,default:!1}},emits:["click"],setup(e,{emit:r}){const p=m(()=>({"bg-primary text-white border-none hover:brightness-[0.85] disabled:hover:brightness-100":!e.outline,"border-[#037E80] text-[#037E80] bg-transparent hover:bg-black hover:bg-opacity-[0.15]":e.outline})),g=m(()=>e.outline?{borderColor:e.color,color:e.color,width:e.width,height:e.height}:{backgroundColor:e.color,width:e.width,height:e.height}),b=m(()=>{switch(e.size){case"sm":return"text-base h-[38px] w-[85px] border";case"md":return"text-base h-[38px] w-[137px] border";case"lg":return"text-base lg:text-lg h-[38px] w-[137px] lg:h-[56px] lg:w-[212px] border lg:border-2";default:return"text-base min-h-[38px] min-w-[85px] border"}});return{classes:p,style:g,size:b,onClick:()=>{r("click")}}}}),oe=["disabled"];function ne(e,r,p,g,b,U){return re(),R("button",{type:"button",class:Z([[e.classes,e.size],"py-0 px-4 tracking-wider rounded-full flex items-center justify-center gap-x-2 cursor-pointer disabled:bg-btnDisabled disabled:border-none disabled:text-btnDisabledText disabled:cursor-default"]),onClick:r[0]||(r[0]=(...G)=>e.onClick&&e.onClick(...G)),style:ee(e.style),disabled:e.disabled},[Y(e.$slots,"default",{},()=>[se(te(e.label),1)])],14,oe)}const le=ae(K,[["render",ne]]);K.__docgenInfo={displayName:"Button",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!0},{name:"outline",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",type:{name:"string"},values:["sm","md","lg"]},{name:"color",type:{name:"string"}},{name:"width",type:{name:"string"}},{name:"height",type:{name:"string"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"click"}],slots:[{name:"default"}],sourceFiles:["D:/Program/VueJs/CTBCINS-UIKit/src/stories/Button.vue"]};const de={title:"Example/Button",component:le,tags:["autodocs"],argTypes:{size:{control:{type:"radio"},options:["sm","md","lg","none"]},color:{control:"color"},width:{control:"text"},height:{control:"text"}},args:{onClick:H()},parameters:{docs:{description:{component:"Another description, overriding the comments"}}}},s={args:{size:"md",label:"重新整理"}},t={args:{size:"md",outline:!0,label:"儲存紀錄"}},a={args:{size:"sm",label:"修改"}},o={args:{size:"md",label:"重新整理"}},n={args:{size:"lg",label:"下一步"}},l={args:{size:"lg",label:"上一步",outline:!0}},i={args:{size:"lg",label:"提交審核",disabled:!0}},u={args:{size:"md",color:"#474747",label:"查看全部"}},c={args:{label:"確認",width:"500px",height:"100px"}},d={args:{size:"md",label:"刪除資料"},parameters:{slots:{default:{template:"刪除資料<p>X</p>"}}}};var h,f,z;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    size: 'md',
    label: '重新整理'
  }
}`,...(z=(f=s.parameters)==null?void 0:f.docs)==null?void 0:z.source}}};var y,x,C;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: 'md',
    outline: true,
    label: '儲存紀錄'
  }
}`,...(C=(x=t.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var S,B,w;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    label: '修改'
  }
}`,...(w=(B=a.parameters)==null?void 0:B.docs)==null?void 0:w.source}}};var E,k,v;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    size: 'md',
    label: '重新整理'
  }
}`,...(v=(k=o.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var D,A,O;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    label: '下一步'
  }
}`,...(O=(A=n.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};var _,$,L;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    label: '上一步',
    outline: true
  }
}`,...(L=($=l.parameters)==null?void 0:$.docs)==null?void 0:L.source}}};var N,T,V;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    label: '提交審核',
    disabled: true
  }
}`,...(V=(T=i.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var I,P,j;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    size: 'md',
    color: '#474747',
    label: '查看全部'
  }
}`,...(j=(P=u.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var q,F,M;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: '確認',
    width: '500px',
    height: '100px'
  }
}`,...(M=(F=c.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var W,X,J;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    size: 'md',
    label: '刪除資料'
  },
  parameters: {
    slots: {
      default: {
        template: \`刪除資料<p>X</p>\`
      }
    }
  }
}`,...(J=(X=d.parameters)==null?void 0:X.docs)==null?void 0:J.source}}};const me=["Primary","Outline","Small","Medium","Large","LargeOutline","Disabled","CustomizeColor","CustomizeWidth","CustomizeContent"];export{u as CustomizeColor,d as CustomizeContent,c as CustomizeWidth,i as Disabled,n as Large,l as LargeOutline,o as Medium,t as Outline,s as Primary,a as Small,me as __namedExportsOrder,de as default};
