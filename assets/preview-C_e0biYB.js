import"./index-DH5ua8nC.js";import"./_commonjsHelpers-Cpj98o6Y.js";const{useParameter:c,addons:d,useEffect:l,useMemo:b}=__STORYBOOK_MODULE_PREVIEW_API__;var A=Object.defineProperty,R=(e,t)=>{for(var r in t)A(e,r,{get:t[r],enumerable:!0})},p={};R(p,{initializeThemeState:()=>_,pluckThemeFromContext:()=>i,useThemeParameters:()=>n});var T="themes",S=`storybook/${T}`,D="theme",M={},O={REGISTER_THEMES:`${S}/REGISTER_THEMES`};function i({globals:e}){return e[D]||""}function n(){return c(T,M)}function _(e,t){d.getChannel().emit(O.REGISTER_THEMES,{defaultTheme:t,themes:e})}var f="html",v="data-theme",P=({themes:e,defaultTheme:t,parentSelector:r=f,attributeName:a=v})=>(_(Object.keys(e),t),(s,h)=>{let{themeOverride:E}=n(),o=i(h);return l(()=>{let m=document.querySelector(r),u=E||o||t;m&&m.setAttribute(a,e[u])},[E,o,r,a]),s()});const k={parameters:{controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}}}},y=[P({themes:{light:"",dark:"dark"},defaultTheme:"light",dataAttribute:"data-theme"})];export{y as decorators,k as default};
