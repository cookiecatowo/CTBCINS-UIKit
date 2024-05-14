import{c as V,o as a,g as L,j as h,r as ee,m as H,u as l,v as D,n as B,a as u,t as p,x as m,l as f,M as ae,N as le,e as te,f as ue}from"./vue.esm-bundler-C3HUlvCY.js";import{_ as ne}from"./Label-abx64zYe.js";import{T as re}from"./Tooltip-H3ptpWJa.js";import{C as se,W as oe,g as ie,j as de}from"./index-afhknXpz.js";import{c as Q}from"./utils-CHtjtCvc.js";import{f as me}from"./index-B7eDUBVh.js";const X={__name:"RadioGroup",props:{modelValue:{type:[String,Boolean,Number],required:!1},defaultValue:{type:[String,Boolean,Number],required:!1},disabled:{type:Boolean,required:!1},name:{type:String,required:!1},required:{type:Boolean,required:!1},orientation:{type:String,required:!1},dir:{type:String,required:!1},loop:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const n=e,o=t,r=V(()=>{const{class:c,...s}=n;return s}),i=se(r,o);return(c,s)=>(a(),L(l(oe),H({class:l(Q)("",n.class)},l(i)),{default:h(()=>[ee(c.$slots,"default")]),_:3},16,["class"]))}};X.__docgenInfo={exportName:"default",displayName:"RadioGroup",description:"",tags:{},props:[{name:"modelValue",type:{name:"string|boolean|number"},required:!1},{name:"defaultValue",type:{name:"string|boolean|number"},required:!1},{name:"disabled",type:{name:"boolean"},required:!1},{name:"name",type:{name:"string"},required:!1},{name:"required",type:{name:"boolean"},required:!1},{name:"orientation",type:{name:"string"},required:!1},{name:"dir",type:{name:"string"},required:!1},{name:"loop",type:{name:"boolean"},required:!1},{name:"asChild",type:{name:"boolean"},required:!1},{name:"as",type:{name:"null"},required:!1},{name:"class",type:{name:"null"},required:!1}],events:[{name:"update:modelValue"}],slots:[{name:"default"}],sourceFiles:["D:/Program/VueJs/CTBCINS-UIKit/src/components/ui/radio-group/RadioGroup.vue"]};const Y={__name:"RadioGroupItem",props:{id:{type:String,required:!1},value:{type:[String,Boolean,Number],required:!1},checked:{type:Boolean,required:!1},disabled:{type:Boolean,required:!1},required:{type:Boolean,required:!1},name:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1}},setup(e){const t=e,n=V(()=>{const{class:r,...i}=t;return i}),o=ie(n);return(r,i)=>(a(),L(l(de),H(l(o),{class:[l(Q)("aspect-square h-[21px] w-[21px] rounded-full border text-black disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:border-slate-50 dark:text-slate-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",t.class),t.checked?"bg-primary border-primary":"border-[#929292]"]}),{default:h(()=>[D("div",{class:B(["flex items-center justify-center w-full h-full relative radio-content",[t.checked?"after:bg-white radio-scale-active":"after:bg-[#D4D4D4]"]])},null,2)]),_:1},16,["class"]))}};Y.__docgenInfo={exportName:"default",displayName:"RadioGroupItem",description:"",tags:{},props:[{name:"id",type:{name:"string"},required:!1},{name:"value",type:{name:"string|boolean|number"},required:!1},{name:"checked",type:{name:"boolean"},required:!1},{name:"disabled",type:{name:"boolean"},required:!1},{name:"required",type:{name:"boolean"},required:!1},{name:"name",type:{name:"string"},required:!1},{name:"asChild",type:{name:"boolean"},required:!1},{name:"as",type:{name:"null"},required:!1},{name:"class",type:{name:"null"},required:!1}],sourceFiles:["D:/Program/VueJs/CTBCINS-UIKit/src/components/ui/radio-group/RadioGroupItem.vue"]};const ce={class:"flex flex-col gap-y-2"},pe={class:"flex flex-col gap-y-4"},fe={key:0,class:"inline items-end break-all"},be={key:0,class:"text-lg font-semibold"},ve={key:1,class:"text-sm font-normal ml-1 mb-[2px]"},ge={class:"relative w-full items-center"},ye={key:0,class:"absolute right-0 top-0 flex items-center justify-center px-3 gap-x-2 min-h-[52px]"},Ae={key:0,class:"text-xs text-alert break-all"},xe={name:"Radio"},Z=Object.assign(xe,{props:{modelValue:{type:[String,Boolean,Number]},list:{type:Array},title:{type:String},subtitle:{type:String,default:""},disabled:{type:Boolean,default:!1},errMsg:{type:String,default:""},tooltip:{type:String,default:""},tSize:{type:String,default:""},column:{type:Boolean,default:!1},radioWidth:{type:String}},emits:["update:modelValue","click"],setup(e,{emit:t}){const n=e,o=t,r=V({get(){return n.modelValue},set(s){o("update:modelValue",s)}}),i=s=>{o("click",s)},c=V(()=>({width:n.radioWidth}));return(s,S)=>(a(),u("div",ce,[D("div",pe,[e.title||e.subtitle?(a(),u("div",fe,[e.title?(a(),u("span",be,p(e.title),1)):m("",!0),e.subtitle?(a(),u("span",ve,p(e.subtitle),1)):m("",!0)])):m("",!0),D("div",ge,[f(l(X),{modelValue:r.value,"onUpdate:modelValue":S[0]||(S[0]=d=>r.value=d),class:B(["flex gap-4 flex-wrap min-h-[52px] pr-12",{"flex-col":e.column}])},{default:h(()=>[(a(!0),u(ae,null,le(e.list,d=>(a(),u("div",{class:B(["flex items-center space-x-2",{grow:!e.radioWidth}]),style:te(c.value)},[f(l(Y),{value:d.value,checked:r.value==d.value,onClick:Ve=>i(d.value)},null,8,["value","checked","onClick"]),f(l(ne),{class:"text-base font-normal"},{default:h(()=>[ue(p(d.label),1)]),_:2},1024)],6))),256))]),_:1},8,["modelValue","class"]),e.tooltip?(a(),u("span",ye,[f(re,{content:e.tooltip,size:e.tSize},null,8,["content","size"])])):m("",!0)])]),e.errMsg?(a(),u("span",Ae,p(e.errMsg),1)):m("",!0)]))}}),qe=Z;Z.__docgenInfo={exportName:"default",displayName:"Radio",description:"",tags:{},props:[{name:"modelValue",type:{name:"string|boolean|number"}},{name:"list",type:{name:"array"}},{name:"title",type:{name:"string"}},{name:"subtitle",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"errMsg",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"tooltip",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"tSize",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"column",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"radioWidth",type:{name:"string"}}],events:[{name:"update:modelValue"},{name:"click"}],sourceFiles:["D:/Program/VueJs/CTBCINS-UIKit/src/stories/Radio.vue"]};const Ce={title:"Example/Radio",component:qe,tags:["autodocs"],argTypes:{modelValue:{control:"text"},list:{control:"array"},title:{control:"text"},subtitle:{control:"text"},errMsg:{control:"text"},tooltip:{control:"text"},tSize:{control:{type:"radio"},options:["lg","md","sm","xs"]},column:{control:"boolean"},radioWidth:{control:"text"}},args:{onClick:me()}},b={args:{title:"是否為高風險職業?",modelValue:"true",list:[{value:"true",label:"是"},{value:"false",label:"否"}]}},v={args:{title:"是否為高風險職業?",subtitle:"(非必填)",modelValue:"false",list:[{value:"true",label:"是"},{value:"false",label:"否"}]}},g={args:{title:"是否為高風險職業?",modelValue:"false",list:[{value:"true",label:"是"},{value:"false",label:"否"}],column:!0}},y={args:{title:"性別",modelValue:"01",list:[{value:"01",label:"男"},{value:"02",label:"女"},{value:"03",label:"不便透漏"}],radioWidth:"150px"}},A={args:{title:"是否為高風險職業?",modelValue:"true",list:[{value:"true",label:"是"},{value:"false",label:"否"}],errMsg:"不符合投保條件!"}},x={args:{title:"是否為高風險職業?",modelValue:"",list:[{value:"true",label:"是"},{value:"false",label:"否"}],tooltip:"是否為高風險職業是否為高風險職業是否為高風險職業是否為高風險職業是否為高風險職業是否為高風險職業"}},q={args:{title:"是否為高風險職業?",list:[{value:"01",label:"01"},{value:"02",label:"02"},{value:"03",label:"03"},{value:"04",label:"04"},{value:"05",label:"05"},{value:"06",label:"06"},{value:"07",label:"07"},{value:"08",label:"08"},{value:"09",label:"09"},{value:"10",label:"10"},{value:"11",label:"11"},{value:"12",label:"12"},{value:"13",label:"13"},{value:"14",label:"14"},{value:"15",label:"15"},{value:"16",label:"16"},{value:"17",label:"17"},{value:"18",label:"18"},{value:"19",label:"19"},{value:"20",label:"20"}],radioWidth:"80px",tooltip:"請選擇"}};var k,F,C;b.parameters={...b.parameters,docs:{...(k=b.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    title: '是否為高風險職業?',
    modelValue: 'true',
    list: [{
      value: 'true',
      label: '是'
    }, {
      value: 'false',
      label: '否'
    }]
  }
}`,...(C=(F=b.parameters)==null?void 0:F.docs)==null?void 0:C.source}}};var _,N,W;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    title: '是否為高風險職業?',
    subtitle: '(非必填)',
    modelValue: 'false',
    list: [{
      value: 'true',
      label: '是'
    }, {
      value: 'false',
      label: '否'
    }]
  }
}`,...(W=(N=v.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};var I,R,w;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    title: '是否為高風險職業?',
    modelValue: 'false',
    list: [{
      value: 'true',
      label: '是'
    }, {
      value: 'false',
      label: '否'
    }],
    column: true
  }
}`,...(w=(R=g.parameters)==null?void 0:R.docs)==null?void 0:w.source}}};var M,T,E;y.parameters={...y.parameters,docs:{...(M=y.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    title: '性別',
    modelValue: '01',
    list: [{
      value: '01',
      label: '男'
    }, {
      value: '02',
      label: '女'
    }, {
      value: '03',
      label: '不便透漏'
    }],
    radioWidth: '150px'
  }
}`,...(E=(T=y.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var z,P,j;A.parameters={...A.parameters,docs:{...(z=A.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    title: '是否為高風險職業?',
    modelValue: 'true',
    list: [{
      value: 'true',
      label: '是'
    }, {
      value: 'false',
      label: '否'
    }],
    errMsg: '不符合投保條件!'
  }
}`,...(j=(P=A.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var G,$,U;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    title: '是否為高風險職業?',
    modelValue: '',
    list: [{
      value: 'true',
      label: '是'
    }, {
      value: 'false',
      label: '否'
    }],
    tooltip: '是否為高風險職業是否為高風險職業是否為高風險職業是否為高風險職業是否為高風險職業是否為高風險職業'
  }
}`,...(U=($=x.parameters)==null?void 0:$.docs)==null?void 0:U.source}}};var J,K,O;q.parameters={...q.parameters,docs:{...(J=q.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    title: '是否為高風險職業?',
    list: [{
      value: '01',
      label: '01'
    }, {
      value: '02',
      label: '02'
    }, {
      value: '03',
      label: '03'
    }, {
      value: '04',
      label: '04'
    }, {
      value: '05',
      label: '05'
    }, {
      value: '06',
      label: '06'
    }, {
      value: '07',
      label: '07'
    }, {
      value: '08',
      label: '08'
    }, {
      value: '09',
      label: '09'
    }, {
      value: '10',
      label: '10'
    }, {
      value: '11',
      label: '11'
    }, {
      value: '12',
      label: '12'
    }, {
      value: '13',
      label: '13'
    }, {
      value: '14',
      label: '14'
    }, {
      value: '15',
      label: '15'
    }, {
      value: '16',
      label: '16'
    }, {
      value: '17',
      label: '17'
    }, {
      value: '18',
      label: '18'
    }, {
      value: '19',
      label: '19'
    }, {
      value: '20',
      label: '20'
    }],
    radioWidth: '80px',
    tooltip: '請選擇'
  }
}`,...(O=(K=q.parameters)==null?void 0:K.docs)==null?void 0:O.source}}};const _e=["Default","SubTitle","Column","CustomWidth","Error","Tooltip","Multi"];export{g as Column,y as CustomWidth,b as Default,A as Error,q as Multi,v as SubTitle,x as Tooltip,_e as __namedExportsOrder,Ce as default};
