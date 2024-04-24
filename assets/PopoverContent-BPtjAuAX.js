import{s as l,o as p,k as u,e as n,g as c,N as f,O as g,u as e,c as P,d as v,m as y}from"./vue.esm-bundler-DcUdeB67.js";import{C as _,T as B,a as C,M as h,I}from"./index-CYxz6zhG.js";import{c as N}from"./utils-CHtjtCvc.js";const O=l({__name:"Popover",props:{defaultOpen:{type:Boolean},open:{type:Boolean},modal:{type:Boolean}},emits:["update:open"],setup(o,{emit:t}){const d=_(o,t);return(i,s)=>(p(),u(e(B),f(g(e(d))),{default:n(()=>[c(i.$slots,"default")]),_:3},16))}});O.__docgenInfo={exportName:"default",displayName:"Popover",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["D:/Program/VueJs/CTBCINS-UIKit/src/components/ui/popover/Popover.vue"]};const b=l({__name:"PopoverTrigger",props:{asChild:{type:Boolean},as:{}},setup(o){const t=o;return(a,r)=>(p(),u(e(C),f(g(t)),{default:n(()=>[c(a.$slots,"default")]),_:3},16))}});b.__docgenInfo={exportName:"default",displayName:"PopoverTrigger",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["D:/Program/VueJs/CTBCINS-UIKit/src/components/ui/popover/PopoverTrigger.vue"]};const w=l({inheritAttrs:!1,__name:"PopoverContent",props:{forceMount:{type:Boolean},trapFocus:{type:Boolean},side:{},sideOffset:{default:4},align:{default:"center"},alignOffset:{},avoidCollisions:{type:Boolean},collisionBoundary:{},collisionPadding:{},arrowPadding:{},sticky:{},hideWhenDetached:{type:Boolean},updatePositionStrategy:{},prioritizePosition:{type:Boolean},asChild:{type:Boolean},as:{},disableOutsidePointerEvents:{type:Boolean},class:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(o,{emit:t}){const a=o,r=t,d=P(()=>{const{class:s,...m}=a;return m}),i=_(d,r);return(s,m)=>(p(),u(e(I),null,{default:n(()=>[v(e(h),y({...e(i),...s.$attrs},{class:e(N)("z-50 w-72 rounded-lg border border-slate-200 bg-white p-4 text-slate-950 shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",a.class)}),{default:n(()=>[c(s.$slots,"default")]),_:3},16,["class"])]),_:3}))}});w.__docgenInfo={exportName:"default",displayName:"PopoverContent",description:"",tags:{},props:[{name:"align",defaultValue:{func:!1,value:"'center'"}},{name:"sideOffset",defaultValue:{func:!1,value:"4"}}],slots:[{name:"default"}],sourceFiles:["D:/Program/VueJs/CTBCINS-UIKit/src/components/ui/popover/PopoverContent.vue"]};export{b as _,w as a,O as b};
