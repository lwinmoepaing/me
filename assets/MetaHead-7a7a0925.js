import{u as a,c as t,M as e,m as c,T as g}from"./entry-client-d9725dab.js";function m(n){const o=a();let i=o.pathname,r="/";return typeof window<"u"&&(i=window?.location?.origin+o.pathname,r=window?.location?.origin),[t(e,{name:"twitter:site",content:"@github"}),t(e,{name:"twitter:card",content:"summary_large_image"}),t(e,{name:"twitter:title",get content(){return n.title||""}}),t(e,{name:"twitter:description",get content(){return n.body||""}}),t(e,{property:"og:url",content:i}),t(e,{property:"og:type",content:"article"}),t(e,{property:"og:title",get content(){return n.title||""}}),t(e,{property:"og:description",get content(){return n.body||""}}),t(e,{property:"og:image",content:`${r}/images/og_facebook_lmp.jpg`}),t(g,{get children(){return[c(()=>n.title||"")," | Lwin Moe Paing "]}})]}export{m as M};