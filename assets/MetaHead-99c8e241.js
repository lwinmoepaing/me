import{u as i,c as t,M as e,m as a,T as c}from"./entry-client-d7257c1d.js";function g(n){const o=i();let r=o.pathname;return typeof window<"u"&&(r=window?.location?.origin+o.pathname),[t(e,{name:"twitter:site",content:"@github"}),t(e,{name:"twitter:card",content:"summary_large_image"}),t(e,{name:"twitter:title",get content(){return n.title||""}}),t(e,{name:"twitter:description",get content(){return n.body||""}}),t(e,{property:"og:url",content:r}),t(e,{property:"og:type",content:"article"}),t(e,{property:"og:title",get content(){return n.title||""}}),t(e,{property:"og:description",get content(){return n.body||""}}),t(e,{property:"og:image",content:"http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg"}),t(c,{get children(){return[a(()=>n.title||"")," | Lwin Moe Paing "]}})]}export{g as M};
