import{u as v}from"./asyncData.OJhyUAp3.js";import{m as f,aD as g,a9 as m,aa as c,ab as d,ac as l,_ as h,ad as _,ae as C,d as y,aC as w,H as P,q as $,U as N,ag as D,M as r,D as T}from"./entry.6rBJs85l.js";const j=async e=>{const{content:t}=f().public;typeof(e==null?void 0:e.params)!="function"&&(e=g(e));const a=e.params(),s=t.experimental.stripQueryParameters?m(`/navigation/${`${c(a)}.${t.integrity}`}/${d(a)}.json`):m(`/navigation/${c(a)}.${t.integrity}.json`);if(l())return(await h(()=>import("./client-db.K8cj5pzy.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(o=>o.generateNavigation))(a);const n=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:_(a),previewToken:C().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n},E=y({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=w(e),a=P(()=>{var n;return typeof((n=t.value)==null?void 0:n.params)=="function"?t.value.params():t.value});if(!a.value&&$("dd-navigation").value){const{navigation:n}=N();return{navigation:n}}const{data:s}=await v(`content-navigation-${c(a.value)}`,()=>j(a.value));return{navigation:s}},render(e){const t=D(),{navigation:a}=e,s=o=>r(T,{to:o._path},()=>o.title),n=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),n(i.children,u+1)]):r("li",null,s(i)))),p=o=>n(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):p(a)}}),L=E;export{L as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./client-db.K8cj5pzy.js","./entry.6rBJs85l.js","./entry.yqTKp5hu.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
