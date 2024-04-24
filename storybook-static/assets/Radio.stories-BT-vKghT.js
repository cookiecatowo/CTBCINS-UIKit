import{c as D,o as a,k as L,e as B,g as ee,m as H,u as l,f as V,j as h,a as s,v as c,x as p,d as f,F as ae,J as le,n as te,t as ue}from"./vue.esm-bundler-DcUdeB67.js";import{_ as ne}from"./Label-C3_X6Y2E.js";import{T as re}from"./Tooltip-Drkud6tJ.js";import{C as se,W as oe,g as ie,j as de}from"./index-CYxz6zhG.js";import{c as Q}from"./utils-CHtjtCvc.js";import{f as me}from"./index-B7eDUBVh.js";const X={__name:"RadioGroup",props:{modelValue:{type:[String,Boolean,Number],required:!1},defaultValue:{type:[String,Boolean,Number],required:!1},disabled:{type:Boolean,required:!1},name:{type:String,required:!1},required:{type:Boolean,required:!1},orientation:{type:String,required:!1},dir:{type:String,required:!1},loop:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const u=e,o=t,n=D(()=>{const{class:m,...r}=u;return r}),i=se(n,o);return(m,r)=>(a(),L(l(oe),H({class:l(Q)("",u.class)},l(i)),{default:B(()=>[ee(m.$slots,"default")]),_:3},16,["class"]))}};X.__docgenInfo={exportName:"default",displayName:"RadioGroup",description:"",tags:{},props:[{name:"modelValue",type:{name:"string|boolean|number"},required:!1},{name:"defaultValue",type:{name:"string|boolean|number"},required:!1},{name:"disabled",type:{name:"boolean"},required:!1},{name:"name",type:{name:"string"},required:!1},{name:"required",type:{name:"boolean"},required:!1},{name:"orientation",type:{name:"string"},required:!1},{name:"dir",type:{name:"string"},required:!1},{name:"loop",type:{name:"boolean"},required:!1},{name:"asChild",type:{name:"boolean"},required:!1},{name:"as",type:{name:"null"},required:!1},{name:"class",type:{name:"null"},required:!1}],events:[{name:"update:modelValue"}],slots:[{name:"default"}],sourceFiles:["D:/Program/VueJs/CTBCINS-UIKit/src/components/ui/radio-group/RadioGroup.vue"]};const Y={__name:"RadioGroupItem",props:{id:{type:String,required:!1},value:{type:[String,Boolean,Number],required:!1},checked:{type:Boolean,required:!1},disabled:{type:Boolean,required:!1},required:{type:Boolean,required:!1},name:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1}},setup(e){const t=e,u=D(()=>{const{class:n,...i}=t;return i}),o=ie(u);return(n,i)=>(a(),L(l(de),H(l(o),{class:[l(Q)("aspect-square h-[21px] w-[21px] rounded-full border text-black disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:border-slate-50 dark:text-slate-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",t.class),t.checked?"bg-primary border-primary":"border-[#929292]"]}),{default:B(()=>[V("div",{class:h(["flex items-center justify-center w-full h-full relative radio-content",[t.checked?"after:bg-white radio-scale-active":"after:bg-[#D4D4D4]"]])},null,2)]),_:1},16,["class"]))}};Y.__docgenInfo={exportName:"default",displayName:"RadioGroupItem",description:"",tags:{},props:[{name:"id",type:{name:"string"},required:!1},{name:"value",type:{name:"string|boolean|number"},required:!1},{name:"checked",type:{name:"boolean"},required:!1},{name:"disabled",type:{name:"boolean"},required:!1},{name:"required",type:{name:"boolean"},required:!1},{name:"name",type:{name:"string"},required:!1},{name:"asChild",type:{name:"boolean"},required:!1},{name:"as",type:{name:"null"},required:!1},{name:"class",type:{name:"null"},required:!1}],sourceFiles:["D:/Program/VueJs/CTBCINS-UIKit/src/components/ui/radio-group/RadioGroupItem.vue"]};const ce={class:"flex flex-col gap-y-2"},pe={class:"flex flex-col gap-y-4"},fe={class:"inline items-end break-all"},be={key:0,class:"text-lg font-semibold"},ve={key:1,class:"text-sm font-normal ml-1 mb-[2px]"},ge={class:"relative w-full items-center"},ye={key:0,class:"absolute right-0 top-0 flex items-center justify-center px-3 gap-x-2"},Ae={key:0,class:"text-xs text-alert"},xe={name:"Radio"},Z=Object.assign(xe,{props:{modelValue:{type:[String,Boolean,Number]},list:{type:Array},title:{type:String},subtitle:{type:String,default:""},disabled:{type:Boolean,default:!1},errMsg:{type:String,default:""},tooltip:{type:String,default:""},tSize:{type:String,default:""},column:{type:Boolean,default:!1},radioWidth:{type:String}},emits:["update:modelValue","click"],setup(e,{emit:t}){const u=e,o=t,n=D({get(){return u.modelValue},set(r){o("update:modelValue",r)}}),i=r=>{o("click",r)},m=D(()=>({width:u.radioWidth}));return(r,S)=>(a(),s("div",ce,[V("div",pe,[V("div",fe,[e.title?(a(),s("span",be,c(e.title),1)):p("",!0),e.subtitle?(a(),s("span",ve,c(e.subtitle),1)):p("",!0)]),V("div",ge,[f(l(X),{modelValue:n.value,"onUpdate:modelValue":S[0]||(S[0]=d=>n.value=d),class:h(["flex gap-4 flex-wrap",{"pr-12":!!e.tooltip,"flex-col":e.column}])},{default:B(()=>[(a(!0),s(ae,null,le(e.list,d=>(a(),s("div",{class:h(["flex items-center space-x-2",{grow:!e.radioWidth}]),style:te(m.value)},[f(l(Y),{value:d.value,checked:n.value==d.value,onClick:Ve=>i(d.value)},null,8,["value","checked","onClick"]),f(l(ne),{class:"text-base font-normal"},{default:B(()=>[ue(c(d.label),1)]),_:2},1024)],6))),256))]),_:1},8,["modelValue","class"]),e.tooltip?(a(),s("span",ye,[f(re,{content:e.tooltip,size:e.tSize},null,8,["content","size"])])):p("",!0)])]),e.errMsg?(a(),s("span",Ae,c(e.errMsg),1)):p("",!0)]))}}),qe=Z;Z.__docgenInfo={exportName:"default",displayName:"Radio",description:"",tags:{},props:[{name:"modelValue",type:{name:"string|boolean|number"}},{name:"list",type:{name:"array"}},{name:"title",type:{name:"string"}},{name:"subtitle",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"errMsg",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"tooltip",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"tSize",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"column",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"radioWidth",type:{name:"string"}}],events:[{name:"update:modelValue"},{name:"click"}],sourceFiles:["D:/Program/VueJs/CTBCINS-UIKit/src/stories/Radio.vue"]};const Ce={title:"Example/Radio",component:qe,tags:["autodocs"],argTypes:{modelValue:{control:"text"},list:{control:"array"},title:{control:"text"},subtitle:{control:"text"},errMsg:{control:"text"},tooltip:{control:"text"},tSize:{control:{type:"radio"},options:["lg","md","sm","xs"]},column:{control:"boolean"},radioWidth:{control:"text"}},args:{onClick:me()}},b={args:{title:"是否為高風險職業?",modelValue:"true",list:[{value:"true",label:"是"},{value:"false",label:"否"}]}},v={args:{title:"是否為高風險職業?",subtitle:"(非必填)",modelValue:"false",list:[{value:"true",label:"是"},{value:"false",label:"否"}]}},g={args:{title:"是否為高風險職業?",modelValue:"false",list:[{value:"true",label:"是"},{value:"false",label:"否"}],column:!0}},y={args:{title:"性別",modelValue:"01",list:[{value:"01",label:"男"},{value:"02",label:"女"},{value:"03",label:"不便透漏"}],radioWidth:"150px"}},A={args:{title:"是否為高風險職業?",modelValue:"true",list:[{value:"true",label:"是"},{value:"false",label:"否"}],errMsg:"不符合投保條件!"}},x={args:{title:"是否為高風險職業?",modelValue:"",list:[{value:"true",label:"是"},{value:"false",label:"否"}],tooltip:"是否為高風險職業是否為高風險職業是否為高風險職業是否為高風險職業是否為高風險職業是否為高風險職業"}},q={args:{title:"是否為高風險職業?",list:[{value:"01",label:"01"},{value:"02",label:"02"},{value:"03",label:"03"},{value:"04",label:"04"},{value:"05",label:"05"},{value:"06",label:"06"},{value:"07",label:"07"},{value:"08",label:"08"},{value:"09",label:"09"},{value:"10",label:"10"},{value:"11",label:"11"},{value:"12",label:"12"},{value:"13",label:"13"},{value:"14",label:"14"},{value:"15",label:"15"},{value:"16",label:"16"},{value:"17",label:"17"},{value:"18",label:"18"},{value:"19",label:"19"},{value:"20",label:"20"}],radioWidth:"80px",tooltip:"請選擇"}};var F,k,C;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(C=(k=b.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var _,N,W;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(w=(R=g.parameters)==null?void 0:R.docs)==null?void 0:w.source}}};var T,M,E;y.parameters={...y.parameters,docs:{...(T=y.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(E=(M=y.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};var z,P,j;A.parameters={...A.parameters,docs:{...(z=A.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(j=(P=A.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var G,$,J;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(J=($=x.parameters)==null?void 0:$.docs)==null?void 0:J.source}}};var U,K,O;q.parameters={...q.parameters,docs:{...(U=q.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
