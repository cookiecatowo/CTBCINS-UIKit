import{s as i,o as r,k as d,e as o,g as p,N as F,O as w,u as e,c as b,d as c,j as I,m as v,f as E,a as _,v as h,x as C,t as T,F as de,J as ie}from"./vue.esm-bundler-DcUdeB67.js";import{T as pe}from"./Tooltip-Drkud6tJ.js";import{C as Z,J as me,p as fe,g as N,f as be,Q as ge,c as ve,t as _e,e as he,s as Ce,h as ye,m as ee,n as Se,r as xe,w as Ae,x as Be,y as De}from"./index-CYxz6zhG.js";import{c as f}from"./utils-CHtjtCvc.js";import{c as P}from"./createLucideIcon-BIa0ZYd1.js";/**
 * @license lucide-vue-next v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ee=P("CheckIcon",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-vue-next v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=P("ChevronDownIcon",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-vue-next v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ie=P("ChevronUpIcon",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]),ae=i({__name:"Select",props:{open:{type:Boolean},defaultOpen:{type:Boolean},defaultValue:{},modelValue:{},dir:{},name:{},autocomplete:{},disabled:{type:Boolean},required:{type:Boolean}},emits:["update:modelValue","update:open"],setup(l,{emit:a}){const t=Z(l,a);return(u,m)=>(r(),d(e(me),F(w(e(t))),{default:o(()=>[p(u.$slots,"default")]),_:3},16))}});ae.__docgenInfo={exportName:"default",displayName:"Select",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["D:/Program/VueJs/CTBCINS-UIKit/src/components/ui/select/Select.vue"]};const te=i({__name:"SelectValue",props:{placeholder:{},asChild:{type:Boolean},as:{}},setup(l){const a=l;return(s,n)=>(r(),d(e(fe),F(w(a)),{default:o(()=>[p(s.$slots,"default")]),_:3},16))}});te.__docgenInfo={exportName:"default",displayName:"SelectValue",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["D:/Program/VueJs/CTBCINS-UIKit/src/components/ui/select/SelectValue.vue"]};const se=i({__name:"SelectTrigger",props:{disabled:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},setup(l){const a=l,s=b(()=>{const{class:t,...u}=a;return u}),n=N(s);return(t,u)=>(r(),d(e(ge),v(e(n),{class:e(f)("flex h-[52px] w-full items-center justify-between rounded-lg border border-border bg-background px-3 py-2 text-base placeholder:text-textDisabled disabled:cursor-not-allowed disabled:text-textDisabled disabled:bg-inputDisabled focus:outline-none [&>span]:line-clamp-1",a.class)}),{default:o(()=>[p(t.$slots,"default"),c(e(be),{"as-child":""},{default:o(()=>[c(e(le),{class:I(["w-4 h-4 text-black text-base",{"text-textDisabled":e(n).disabled}])},null,8,["class"])]),_:1})]),_:3},16,["class"]))}});se.__docgenInfo={exportName:"default",displayName:"SelectTrigger",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["D:/Program/VueJs/CTBCINS-UIKit/src/components/ui/select/SelectTrigger.vue"]};const ne=i({inheritAttrs:!1,__name:"SelectContent",props:{forceMount:{type:Boolean},position:{default:"popper"},side:{},sideOffset:{},align:{},alignOffset:{},avoidCollisions:{type:Boolean},collisionBoundary:{},collisionPadding:{},arrowPadding:{},sticky:{},hideWhenDetached:{type:Boolean},updatePositionStrategy:{},prioritizePosition:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},emits:["closeAutoFocus","escapeKeyDown","pointerDownOutside"],setup(l,{emit:a}){const s=l,n=a,t=b(()=>{const{class:m,...g}=s;return g}),u=Z(t,n);return(m,g)=>(r(),d(e(he),null,{default:o(()=>[c(e(_e),v({...e(u),...m.$attrs},{class:e(f)("relative z-50 max-h-96 min-w-32 overflow-hidden rounded-lg border bg-white text-black shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",m.position==="popper"&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",s.class)}),{default:o(()=>[c(e(ue)),c(e(ve),{class:I(e(f)("p-1",m.position==="popper"&&"h-[--radix-select-trigger-height] w-full min-w-[--radix-select-trigger-width]"))},{default:o(()=>[p(m.$slots,"default")]),_:3},8,["class"]),c(e(re))]),_:3},16,["class"])]),_:3}))}});ne.__docgenInfo={exportName:"default",displayName:"SelectContent",description:"",tags:{},props:[{name:"position",defaultValue:{func:!1,value:"'popper'"}}],slots:[{name:"default"}],sourceFiles:["D:/Program/VueJs/CTBCINS-UIKit/src/components/ui/select/SelectContent.vue"]};const oe=i({__name:"SelectGroup",props:{asChild:{type:Boolean},as:{},class:{}},setup(l){const a=l,s=b(()=>{const{class:n,...t}=a;return t});return(n,t)=>(r(),d(e(Ce),v({class:e(f)("p-1 w-full",a.class)},s.value),{default:o(()=>[p(n.$slots,"default")]),_:3},16,["class"]))}});oe.__docgenInfo={exportName:"default",displayName:"SelectGroup",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["D:/Program/VueJs/CTBCINS-UIKit/src/components/ui/select/SelectGroup.vue"]};const Ne={class:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center"},V=i({__name:"SelectItem",props:{value:{},disabled:{type:Boolean},textValue:{},asChild:{type:Boolean},as:{},class:{}},setup(l){const a=l,s=b(()=>{const{class:t,...u}=a;return u}),n=N(s);return(t,u)=>(r(),d(e(Se),v(e(n),{class:e(f)("relative flex w-full cursor-default select-none items-center rounded-lg py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-[#F0F0F0] focus:text-black data-[disabled]:pointer-events-none data-[disabled]:opacity-50",a.class)}),{default:o(()=>[E("span",Ne,[c(e(ye),null,{default:o(()=>[c(e(Ee),{class:"h-4 w-4"})]),_:1})]),c(e(ee),null,{default:o(()=>[p(t.$slots,"default")]),_:3})]),_:3},16,["class"]))}});V.__docgenInfo={exportName:"default",displayName:"SelectItem",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["D:/Program/VueJs/CTBCINS-UIKit/src/components/ui/select/SelectItem.vue"]};const Ve=i({__name:"SelectItemText",props:{asChild:{type:Boolean},as:{}},setup(l){const a=l;return(s,n)=>(r(),d(e(ee),F(w(a)),{default:o(()=>[p(s.$slots,"default")]),_:3},16))}});Ve.__docgenInfo={exportName:"default",displayName:"SelectItemText",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["D:/Program/VueJs/CTBCINS-UIKit/src/components/ui/select/SelectItemText.vue"]};const Fe=i({__name:"SelectLabel",props:{for:{},asChild:{type:Boolean},as:{},class:{}},setup(l){const a=l;return(s,n)=>(r(),d(e(xe),{class:I(e(f)("py-1.5 pl-8 pr-2 text-sm font-semibold",a.class))},{default:o(()=>[p(s.$slots,"default")]),_:3},8,["class"]))}});Fe.__docgenInfo={exportName:"default",displayName:"SelectLabel",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["D:/Program/VueJs/CTBCINS-UIKit/src/components/ui/select/SelectLabel.vue"]};const we=i({__name:"SelectSeparator",props:{asChild:{type:Boolean},as:{},class:{}},setup(l){const a=l,s=b(()=>{const{class:n,...t}=a;return t});return(n,t)=>(r(),d(e(Ae),v(s.value,{class:e(f)("-mx-1 my-1 h-px bg-black",a.class)}),null,16,["class"]))}});we.__docgenInfo={exportName:"default",displayName:"SelectSeparator",description:"",tags:{},sourceFiles:["D:/Program/VueJs/CTBCINS-UIKit/src/components/ui/select/SelectSeparator.vue"]};const ue=i({__name:"SelectScrollUpButton",props:{asChild:{type:Boolean},as:{},class:{}},setup(l){const a=l,s=b(()=>{const{class:t,...u}=a;return u}),n=N(s);return(t,u)=>(r(),d(e(Be),v(e(n),{class:e(f)("flex cursor-default items-center justify-center py-1",a.class)}),{default:o(()=>[p(t.$slots,"default",{},()=>[c(e(Ie),{class:"h-4 w-4"})])]),_:3},16,["class"]))}});ue.__docgenInfo={exportName:"default",displayName:"SelectScrollUpButton",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["D:/Program/VueJs/CTBCINS-UIKit/src/components/ui/select/SelectScrollUpButton.vue"]};const re=i({__name:"SelectScrollDownButton",props:{asChild:{type:Boolean},as:{},class:{}},setup(l){const a=l,s=b(()=>{const{class:t,...u}=a;return u}),n=N(s);return(t,u)=>(r(),d(e(De),v(e(n),{class:e(f)("flex cursor-default items-center justify-center py-1",a.class)}),{default:o(()=>[p(t.$slots,"default",{},()=>[c(e(le),{class:"h-4 w-4"})])]),_:3},16,["class"]))}});re.__docgenInfo={exportName:"default",displayName:"SelectScrollDownButton",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["D:/Program/VueJs/CTBCINS-UIKit/src/components/ui/select/SelectScrollDownButton.vue"]};const Pe={class:"flex flex-col gap-y-2"},Te={class:"flex flex-col gap-y-4"},$e={class:"inline items-end break-all"},ke={key:0,class:"text-lg font-semibold"},Ue={key:1,class:"text-sm font-normal ml-1 mb-[2px]"},ze={class:"relative w-full items-center"},Je={key:0,class:"absolute end-0 inset-y-0 flex items-center justify-center px-3 gap-x-2"},Ke={key:0,class:"text-xs text-alert"},Me={name:"Select"},ce=Object.assign(Me,{props:{modelValue:{type:String},list:{type:Array},title:{type:String},subtitle:{type:String,default:""},placeholder:{type:String,default:"請選擇..."},disabled:{type:Boolean,default:!1},errMsg:{type:String,default:""},tooltip:{type:String,default:""},tSize:{type:String,default:""}},emits:["update:modelValue"],setup(l,{emit:a}){const s=l,n=a,t=b({get(){return s.modelValue},set(u){n("update:modelValue",u)}});return(u,m)=>(r(),_("div",Pe,[E("div",Te,[E("div",$e,[l.title?(r(),_("span",ke,h(l.title),1)):C("",!0),l.subtitle?(r(),_("span",Ue,h(l.subtitle),1)):C("",!0)]),E("div",ze,[c(e(ae),{modelValue:t.value,"onUpdate:modelValue":m[0]||(m[0]=g=>t.value=g)},{default:o(()=>[c(e(se),{disabled:l.disabled,class:I({"pr-12":!!l.tooltip,"border-alert":!!l.errMsg,"text-textDisabled":!t.value})},{default:o(()=>[c(e(te),{placeholder:l.placeholder},null,8,["placeholder"])]),_:1},8,["disabled","class"]),c(e(ne),null,{default:o(()=>[c(e(oe),null,{default:o(()=>[c(e(V),{class:"text-textDisabled",value:null,disabled:""},{default:o(()=>[T(h(l.placeholder),1)]),_:1}),(r(!0),_(de,null,ie(l.list,g=>(r(),d(e(V),{value:g.value},{default:o(()=>[T(h(g.label),1)]),_:2},1032,["value"]))),256))]),_:1})]),_:1})]),_:1},8,["modelValue"]),l.tooltip?(r(),_("span",Je,[c(pe,{content:l.tooltip,size:l.tSize},null,8,["content","size"])])):C("",!0)])]),l.errMsg?(r(),_("span",Ke,h(l.errMsg),1)):C("",!0)]))}}),Le=ce;ce.__docgenInfo={exportName:"default",displayName:"Select",description:"",tags:{},props:[{name:"modelValue",type:{name:"string"}},{name:"list",type:{name:"array"}},{name:"title",type:{name:"string"}},{name:"subtitle",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:"'請選擇...'"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"errMsg",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"tooltip",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"tSize",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],events:[{name:"update:modelValue"}],sourceFiles:["D:/Program/VueJs/CTBCINS-UIKit/src/stories/Select.vue"]};const Re={title:"Example/Select",component:Le,tags:["autodocs"],argTypes:{modelValue:{control:"text"},list:{control:"array"},title:{control:"text"},subtitle:{control:"text"},placeholder:{control:"text"},errMsg:{control:"text"},tooltip:{control:"text"},tSize:{control:{type:"radio"},options:["lg","md","sm","xs"]}}},y={args:{title:"交通工具",list:[{label:"汽車",value:"01"},{label:"火車",value:"02"},{label:"飛機",value:"03"},{label:"輪船",value:"04"}],placeholder:"請選擇交通工具"}},S={args:{title:"旅遊目的",subtitle:"(選填)",list:[{label:"觀光",value:"01"},{label:"出差",value:"02"},{label:"留學",value:"03"}],placeholder:"請選擇旅遊目的"}},x={args:{title:"交通工具",list:[{label:"汽車",value:"01"},{label:"火車",value:"02"},{label:"飛機",value:"03"},{label:"輪船",value:"04"}],placeholder:"請選擇交通工具",disabled:!0}},A={args:{title:"交通工具",list:[{label:"汽車",value:"01"},{label:"火車",value:"02"},{label:"飛機",value:"03"},{label:"輪船",value:"04"}],placeholder:"請選擇交通工具",errMsg:"交通工具為必填選項"}},B={args:{title:"交通工具",list:[{label:"汽車",value:"01"},{label:"火車",value:"02"},{label:"飛機",value:"03"},{label:"輪船",value:"04"}],placeholder:"請選擇交通工具",tooltip:"交通工具",tSize:"xs"}},D={args:{title:"交通工具",list:[{label:"汽車",value:"01"},{label:"火車",value:"02"},{label:"飛機",value:"03"},{label:"輪船",value:"04"},{label:"汽車",value:"05"},{label:"火車",value:"06"},{label:"飛機",value:"07"},{label:"輪船",value:"08"},{label:"汽車",value:"09"},{label:"火車",value:"10"},{label:"飛機",value:"11"},{label:"輪船",value:"12"},{label:"汽車",value:"13"},{label:"火車",value:"14"},{label:"飛機",value:"15"},{label:"輪船",value:"16"},{label:"汽車",value:"17"},{label:"火車",value:"18"},{label:"飛機",value:"19"},{label:"輪船",value:"20"}],placeholder:"請選擇交通工具"}};var $,k,U;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    title: '交通工具',
    list: [{
      label: '汽車',
      value: '01'
    }, {
      label: '火車',
      value: '02'
    }, {
      label: '飛機',
      value: '03'
    }, {
      label: '輪船',
      value: '04'
    }],
    placeholder: '請選擇交通工具'
  }
}`,...(U=(k=y.parameters)==null?void 0:k.docs)==null?void 0:U.source}}};var z,J,K;S.parameters={...S.parameters,docs:{...(z=S.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    title: '旅遊目的',
    subtitle: '(選填)',
    list: [{
      label: '觀光',
      value: '01'
    }, {
      label: '出差',
      value: '02'
    }, {
      label: '留學',
      value: '03'
    }],
    placeholder: '請選擇旅遊目的'
  }
}`,...(K=(J=S.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var M,L,j;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    title: '交通工具',
    list: [{
      label: '汽車',
      value: '01'
    }, {
      label: '火車',
      value: '02'
    }, {
      label: '飛機',
      value: '03'
    }, {
      label: '輪船',
      value: '04'
    }],
    placeholder: '請選擇交通工具',
    disabled: true
  }
}`,...(j=(L=x.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var O,G,q;A.parameters={...A.parameters,docs:{...(O=A.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    title: '交通工具',
    list: [{
      label: '汽車',
      value: '01'
    }, {
      label: '火車',
      value: '02'
    }, {
      label: '飛機',
      value: '03'
    }, {
      label: '輪船',
      value: '04'
    }],
    placeholder: '請選擇交通工具',
    errMsg: '交通工具為必填選項'
  }
}`,...(q=(G=A.parameters)==null?void 0:G.docs)==null?void 0:q.source}}};var Q,R,W;B.parameters={...B.parameters,docs:{...(Q=B.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    title: '交通工具',
    list: [{
      label: '汽車',
      value: '01'
    }, {
      label: '火車',
      value: '02'
    }, {
      label: '飛機',
      value: '03'
    }, {
      label: '輪船',
      value: '04'
    }],
    placeholder: '請選擇交通工具',
    tooltip: '交通工具',
    tSize: 'xs'
  }
}`,...(W=(R=B.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var H,X,Y;D.parameters={...D.parameters,docs:{...(H=D.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    title: '交通工具',
    list: [{
      label: '汽車',
      value: '01'
    }, {
      label: '火車',
      value: '02'
    }, {
      label: '飛機',
      value: '03'
    }, {
      label: '輪船',
      value: '04'
    }, {
      label: '汽車',
      value: '05'
    }, {
      label: '火車',
      value: '06'
    }, {
      label: '飛機',
      value: '07'
    }, {
      label: '輪船',
      value: '08'
    }, {
      label: '汽車',
      value: '09'
    }, {
      label: '火車',
      value: '10'
    }, {
      label: '飛機',
      value: '11'
    }, {
      label: '輪船',
      value: '12'
    }, {
      label: '汽車',
      value: '13'
    }, {
      label: '火車',
      value: '14'
    }, {
      label: '飛機',
      value: '15'
    }, {
      label: '輪船',
      value: '16'
    }, {
      label: '汽車',
      value: '17'
    }, {
      label: '火車',
      value: '18'
    }, {
      label: '飛機',
      value: '19'
    }, {
      label: '輪船',
      value: '20'
    }],
    placeholder: '請選擇交通工具'
  }
}`,...(Y=(X=D.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const We=["Default","SubTitle","Disabled","Error","Tooltip","LongList"];export{y as Default,x as Disabled,A as Error,D as LongList,S as SubTitle,B as Tooltip,We as __namedExportsOrder,Re as default};
