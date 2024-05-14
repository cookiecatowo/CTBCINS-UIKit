import{o as t,a as u,v as l,R as ne,k as w,c as C,t as F,x as a,n as V,l as ie,u as s,r as ce,g as A}from"./vue.esm-bundler-C3HUlvCY.js";import{_ as de}from"./Input-7UpNND5I.js";import{T as me}from"./Tooltip-H3ptpWJa.js";import{f as k}from"./index-B7eDUBVh.js";import"./index-74akxO0Z.js";import"./utils-CHtjtCvc.js";import"./index-afhknXpz.js";function pe(e,b){return t(),u("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[l("path",{"fill-rule":"evenodd",d:"M3.28 2.22a.75.75 0 0 0-1.06 1.06l14.5 14.5a.75.75 0 1 0 1.06-1.06l-1.745-1.745a10.029 10.029 0 0 0 3.3-4.38 1.651 1.651 0 0 0 0-1.185A10.004 10.004 0 0 0 9.999 3a9.956 9.956 0 0 0-4.744 1.194L3.28 2.22ZM7.752 6.69l1.092 1.092a2.5 2.5 0 0 1 3.374 3.373l1.091 1.092a4 4 0 0 0-5.557-5.557Z","clip-rule":"evenodd"}),l("path",{d:"m10.748 13.93 2.523 2.523a9.987 9.987 0 0 1-3.27.547c-4.258 0-7.894-2.66-9.337-6.41a1.651 1.651 0 0 1 0-1.186A10.007 10.007 0 0 1 2.839 6.02L6.07 9.252a4 4 0 0 0 4.678 4.678Z"})])}function fe(e,b){return t(),u("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[l("path",{d:"M10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"}),l("path",{"fill-rule":"evenodd",d:"M.664 10.59a1.651 1.651 0 0 1 0-1.186A10.004 10.004 0 0 1 10 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0 1 10 17c-4.257 0-7.893-2.66-9.336-6.41ZM14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z","clip-rule":"evenodd"})])}const ge={class:"flex flex-col gap-y-2"},Be={class:"flex flex-col gap-y-4"},xe={key:0,class:"inline items-end break-all"},be={key:0,class:"text-lg font-semibold"},ye={key:1,class:"text-sm font-normal ml-1 mb-[2px]"},ve={key:0,class:"absolute end-0 inset-y-0 flex items-center justify-center px-3 gap-x-2"},he={key:0,class:"text-xs text-alert break-all"},Ee={name:"Input"},re=Object.assign(Ee,{props:{modelValue:{type:[String,Number]},title:{type:String},subtitle:{type:String,default:""},placeholder:{type:String,default:"請輸入..."},disabled:{type:Boolean,default:!1},err:{type:Boolean,default:!1},errMsg:{type:String,default:""},tooltip:{type:String,default:""},tSize:{type:String,default:""},password:{type:Boolean,default:!1},number:{type:Boolean,default:!1},min:{type:[Number,String]},max:{type:[Number,String]}},emits:["update:modelValue","focus","blur"],setup(e,{emit:b}){const y=e,v=ne(),h=b,n=w(!1),o=w(!0),D=C({get(){return y.modelValue},set(E){h("update:modelValue",E)}}),se=()=>{n.value=!0,h("focus")},le=()=>{n.value=!1,h("blur")},oe=C(()=>y.password&&o.value?"password":y.number?"number":"text");return(E,r)=>(t(),u("div",ge,[l("div",Be,[e.title||e.subtitle?(t(),u("div",xe,[e.title?(t(),u("span",be,F(e.title),1)):a("",!0),e.subtitle?(t(),u("span",ye,F(e.subtitle),1)):a("",!0)])):a("",!0),l("div",{class:V(["relative w-full items-center",{focus:n.value}])},[ie(s(de),{modelValue:D.value,"onUpdate:modelValue":r[0]||(r[0]=S=>D.value=S),placeholder:e.placeholder,disabled:e.disabled,type:oe.value,min:e.min,max:e.max,class:V({"pr-10":!!e.tooltip||!!e.password||!!s(v).suffix,"pr-20":!!e.tooltip&&!!e.password||!!e.tooltip&&!!s(v).suffix,"border-alert":(!!e.errMsg||!!e.err)&&!n.value}),onFocus:se,onBlur:le},null,8,["modelValue","placeholder","disabled","type","min","max","class"]),e.tooltip||e.password||s(v).suffix?(t(),u("span",ve,[ce(E.$slots,"suffix"),e.password&&!o.value?(t(),A(s(fe),{key:0,class:"w-6 h-6 text-tooltip cursor-pointer",onClick:r[1]||(r[1]=S=>o.value=!0)})):a("",!0),e.password&&o.value?(t(),A(s(pe),{key:1,class:"w-6 h-6 text-tooltip cursor-pointer",onClick:r[2]||(r[2]=S=>o.value=!1)})):a("",!0),e.tooltip?(t(),A(me,{key:2,content:e.tooltip,size:e.tSize},null,8,["content","size"])):a("",!0)])):a("",!0)],2)]),e.errMsg?(t(),u("span",he,F(e.errMsg),1)):a("",!0)]))}}),Se=re;re.__docgenInfo={exportName:"default",displayName:"Input",description:"",tags:{},props:[{name:"modelValue",type:{name:"string|number"}},{name:"title",type:{name:"string"}},{name:"subtitle",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:"'請輸入...'"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"err",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"errMsg",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"tooltip",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"tSize",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"password",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"number",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"min",type:{name:"number|string"}},{name:"max",type:{name:"number|string"}}],events:[{name:"update:modelValue"},{name:"focus"},{name:"blur"}],slots:[{name:"suffix"}],sourceFiles:["D:/Program/VueJs/CTBCINS-UIKit/src/stories/Input.vue"]};const Me={title:"Example/Input",component:Se,tags:["autodocs"],argTypes:{modelValue:{control:"text"},title:{control:"text"},subtitle:{control:"text"},placeholder:{control:"text"},errMsg:{control:"text"},tooltip:{control:"text"},tSize:{control:{type:"radio"},options:["lg","md","sm","xs"]}},args:{focus:k(),blur:k()}},i={args:{title:"身分證號/統編",placeholder:"請輸入身分證號/統編"}},c={args:{title:"市內電話",subtitle:"(市話、手機與信箱擇一填寫即可)",placeholder:"請輸入市內電話"}},d={args:{title:"密碼",placeholder:"請輸入密碼",password:!0}},m={args:{title:"天數",placeholder:"請輸入天數",number:!0,min:1,max:10}},p={args:{title:"身分證號/統編",placeholder:"請輸入身分證號/統編",disabled:!0}},f={args:{title:"身分證號/統編",placeholder:"請輸入身分證號/統編",err:!0}},g={args:{title:"身分證號/統編",placeholder:"請輸入身分證號/統編",errMsg:"請輸入正確的身分證號/統編"}},B={args:{title:"身分證號/統編",placeholder:"請輸入身分證號/統編",tooltip:"身分證號/統編",tSize:"xs"}},x={args:{title:"請輸入比例",placeholder:"請輸入比例",tSize:"xs"},parameters:{slots:{suffix:{template:"%"}}}};var M,N,z;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    title: '身分證號/統編',
    placeholder: '請輸入身分證號/統編'
  }
}`,...(z=(N=i.parameters)==null?void 0:N.docs)==null?void 0:z.source}}};var I,T,$;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    title: '市內電話',
    subtitle: '(市話、手機與信箱擇一填寫即可)',
    placeholder: '請輸入市內電話'
  }
}`,...($=(T=c.parameters)==null?void 0:T.docs)==null?void 0:$.source}}};var Z,P,j;d.parameters={...d.parameters,docs:{...(Z=d.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    title: '密碼',
    placeholder: '請輸入密碼',
    password: true
  }
}`,...(j=(P=d.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var L,O,U;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    title: '天數',
    placeholder: '請輸入天數',
    number: true,
    min: 1,
    max: 10
  }
}`,...(U=(O=m.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};var H,J,K;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    title: '身分證號/統編',
    placeholder: '請輸入身分證號/統編',
    disabled: true
  }
}`,...(K=(J=p.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var R,q,G;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    title: '身分證號/統編',
    placeholder: '請輸入身分證號/統編',
    err: true
  }
}`,...(G=(q=f.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var Q,W,X;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    title: '身分證號/統編',
    placeholder: '請輸入身分證號/統編',
    errMsg: '請輸入正確的身分證號/統編'
  }
}`,...(X=(W=g.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,_,ee;B.parameters={...B.parameters,docs:{...(Y=B.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    title: '身分證號/統編',
    placeholder: '請輸入身分證號/統編',
    tooltip: '身分證號/統編',
    tSize: 'xs'
  }
}`,...(ee=(_=B.parameters)==null?void 0:_.docs)==null?void 0:ee.source}}};var te,ae,ue;x.parameters={...x.parameters,docs:{...(te=x.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    title: '請輸入比例',
    placeholder: '請輸入比例',
    tSize: 'xs'
  },
  parameters: {
    slots: {
      suffix: {
        template: '%'
      }
    }
  }
}`,...(ue=(ae=x.parameters)==null?void 0:ae.docs)==null?void 0:ue.source}}};const Ne=["Default","SubTitle","Password","Number","Disabled","Error","ErrorMsg","Tooltip","Suffix"];export{i as Default,p as Disabled,f as Error,g as ErrorMsg,m as Number,d as Password,c as SubTitle,x as Suffix,B as Tooltip,Ne as __namedExportsOrder,Me as default};
