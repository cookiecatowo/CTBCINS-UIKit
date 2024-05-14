import{d as r,o as i,g as p,j as u,r as c,K as C,L as y,u as t,a as x,n as P,c as f,m as _}from"./vue.esm-bundler-C3HUlvCY.js";import{C as I,i as F,e as v,u as $,g as h,I as w,k as S,A as T}from"./index-afhknXpz.js";import{c as g}from"./utils-CHtjtCvc.js";const K=r({__name:"Dialog",props:{open:{type:Boolean},defaultOpen:{type:Boolean},modal:{type:Boolean}},emits:["update:open"],setup(o,{emit:e}){const n=I(o,e);return(l,m)=>(i(),p(t(F),C(y(t(n))),{default:u(()=>[c(l.$slots,"default")]),_:3},16))}});K.__docgenInfo={exportName:"default",displayName:"Dialog",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["D:/Program/VueJs/CTBCINS-UIKit/src/components/ui/dialog/Dialog.vue"]};const O=r({__name:"DialogClose",props:{asChild:{type:Boolean},as:{}},setup(o){const e=o;return(s,a)=>(i(),p(t(v),C(y(e)),{default:u(()=>[c(s.$slots,"default")]),_:3},16))}});O.__docgenInfo={exportName:"default",displayName:"DialogClose",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["D:/Program/VueJs/CTBCINS-UIKit/src/components/ui/dialog/DialogClose.vue"]};const J=r({__name:"DialogTrigger",props:{asChild:{type:Boolean},as:{}},setup(o){const e=o;return(s,a)=>(i(),p(t($),C(y(e)),{default:u(()=>[c(s.$slots,"default")]),_:3},16))}});J.__docgenInfo={exportName:"default",displayName:"DialogTrigger",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["D:/Program/VueJs/CTBCINS-UIKit/src/components/ui/dialog/DialogTrigger.vue"]};const U=r({__name:"DialogHeader",props:{class:{}},setup(o){const e=o;return(s,a)=>(i(),x("div",{class:P(t(g)("flex flex-col gap-2 text-center w-full",e.class))},[c(s.$slots,"default")],2))}});U.__docgenInfo={exportName:"default",displayName:"DialogHeader",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}}],slots:[{name:"default"}],sourceFiles:["D:/Program/VueJs/CTBCINS-UIKit/src/components/ui/dialog/DialogHeader.vue"]};const V=r({__name:"DialogTitle",props:{asChild:{type:Boolean},as:{},class:{}},setup(o){const e=o,s=f(()=>{const{class:n,...l}=e;return l}),a=h(s);return(n,l)=>(i(),p(t(w),_(t(a),{class:t(g)(" font-mudium leading-none tracking-tight",e.class)}),{default:u(()=>[c(n.$slots,"default")]),_:3},16,["class"]))}});V.__docgenInfo={exportName:"default",displayName:"DialogTitle",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["D:/Program/VueJs/CTBCINS-UIKit/src/components/ui/dialog/DialogTitle.vue"]};const k=r({__name:"DialogDescription",props:{asChild:{type:Boolean},as:{},class:{}},setup(o){const e=o,s=f(()=>{const{class:n,...l}=e;return l}),a=h(s);return(n,l)=>(i(),p(t(S),_(t(a),{class:t(g)("flex justify-center text-black",e.class)}),{default:u(()=>[c(n.$slots,"default")]),_:3},16,["class"]))}});k.__docgenInfo={exportName:"default",displayName:"DialogDescription",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["D:/Program/VueJs/CTBCINS-UIKit/src/components/ui/dialog/DialogDescription.vue"]};const A=r({__name:"DialogContent",props:{forceMount:{type:Boolean},trapFocus:{type:Boolean},disableOutsidePointerEvents:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(o,{emit:e}){const s=o,a=e,n=f(()=>{const{class:m,...d}=s;return d}),l=I(n,a);return(m,d)=>(i(),p(t(T),_(t(l),{class:t(g)("fixed left-1/2 top-1/2 z-50 grid w-[90%] rounded-[20px] -translate-x-1/2 -translate-y-1/2 gap-2 bg-white p-6 duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] dark:bg-slate-950",s.class)}),{default:u(()=>[c(m.$slots,"default")]),_:3},16,["class"]))}});A.__docgenInfo={exportName:"default",displayName:"DialogContent",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["D:/Program/VueJs/CTBCINS-UIKit/src/components/ui/dialog/DialogContent.vue"]};const b=r({__name:"DialogScrollContent",props:{forceMount:{type:Boolean},trapFocus:{type:Boolean},disableOutsidePointerEvents:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(o,{emit:e}){const s=o,a=e,n=f(()=>{const{class:m,...d}=s;return d}),l=I(n,a);return(m,d)=>(i(),p(t(T),_({class:t(g)("relative z-50 grid rounded-[20px] bg-white duration-200",s.class)},t(l),{onPointerDownOutside:d[0]||(d[0]=B=>{const D=B.detail.originalEvent,N=D.target;(D.offsetX>N.clientWidth||D.offsetY>N.clientHeight)&&B.preventDefault()})}),{default:u(()=>[c(m.$slots,"default")]),_:3},16,["class"]))}});b.__docgenInfo={exportName:"default",displayName:"DialogScrollContent",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["D:/Program/VueJs/CTBCINS-UIKit/src/components/ui/dialog/DialogScrollContent.vue"]};const z=r({__name:"DialogFooter",props:{class:{}},setup(o){const e=o;return(s,a)=>(i(),x("div",{class:P(t(g)("flex justify-center items-end",e.class))},[c(s.$slots,"default")],2))}});z.__docgenInfo={exportName:"default",displayName:"DialogFooter",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}}],slots:[{name:"default"}],sourceFiles:["D:/Program/VueJs/CTBCINS-UIKit/src/components/ui/dialog/DialogFooter.vue"]};export{K as _,A as a,U as b,V as c,k as d,z as e,b as f};