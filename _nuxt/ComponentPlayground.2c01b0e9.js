import{u as m}from"./asyncData.903aef48.js";import{M as c,I as p,d as i,a9 as u,r as l,N as n,k as d}from"./entry.64513ef1.js";import f from"./Ellipsis.edc67ffe.js";import _ from"./ComponentPlaygroundData.8b3de38d.js";import"./TabsHeader.b5571d8f.js";import"./ComponentPlaygroundProps.660790ce.js";import"./ProseH4.5426837b.js";import"./ProseCodeInline.fa9bfa4b.js";import"./Badge.11f293a1.js";import"./MDCSlot.a1249fe3.js";import"./slot.ea92ee9e.js";import"./ProseP.58414ffb.js";import"./index.6853a1ab.js";import"./ComponentPlaygroundSlots.vue.0f51e4d2.js";import"./ComponentPlaygroundTokens.vue.63d5b933.js";async function y(o){const t=c(o);{const{data:e}=await m(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>e.value)}}const g=i({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>u(o.component)),e=l({...o.props}),r=await y(o.component);return{as:t,formProps:e,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((e,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");e[s]=a}return e},{});return n("div",{class:"component-playground"},[n("div",{class:"component-playground-wrapper"},[n(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),n(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),n(_,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":e=>o.formProps=e})])}});const V=d(g,[["__scopeId","data-v-2515e4cc"]]);export{V as default};