import{u as m}from"./BEX5UcW_.js";import{M as c,I as p,d as i,aa as l,r as u,N as e,l as d}from"./BpYbA-Gp.js";import f from"./BpfVM3bm.js";import y from"./BmzQ3iL1.js";import"./DUhMfTC5.js";import"./Bl4GqGuA.js";import"./CcCyR3DG.js";import"./Ci2sO7aH.js";import"./erKYJZMG.js";import"./65JxLprJ.js";import"./BTe7uZ93.js";import"./DSoWa1hk.js";import"./BbwIVUAg.js";import"./7uItSOlS.js";import"./FtQ0Dgel.js";async function g(o){const t=c(o);{const{data:n}=await m(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const h=i({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>l(o.component)),n=u({...o.props}),r=await g(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(y,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}}),V=d(h,[["__scopeId","data-v-70771212"]]);export{V as default};