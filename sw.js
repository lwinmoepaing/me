if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let l={};const a=e=>i(e,o),t={module:{uri:o},exports:l,require:a};s[o]=Promise.all(n.map((e=>t[e]||a(e)))).then((e=>(r(...e),l)))}}define(["./workbox-4de3aa5f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/catch-22-experience-9ef64153.js",revision:null},{url:"assets/entry-client-589a561d.js",revision:null},{url:"assets/entry-client-8489d04d.css",revision:null},{url:"assets/index-740d4550.js",revision:null},{url:"assets/index-880d82c5.js",revision:null},{url:"assets/index-903cc1ee.js",revision:null},{url:"assets/index-c8b6fcab.js",revision:null},{url:"assets/index-cd5f4a78.js",revision:null},{url:"assets/index-f820b32d.js",revision:null},{url:"assets/MetaHead-d7e97c71.js",revision:null},{url:"assets/one-f4feae21.js",revision:null},{url:"assets/workbox-window.prod.es5-a7b12eab.js",revision:null},{url:"images/og_facebook_lmp.jpg",revision:"8ae0776714a6c2cd2c99a5b26e97c437"},{url:"favicon.ico",revision:"4fdee31751991038136c743458aa0940"},{url:"manifest.json",revision:"5e597400b9f0a0c0f16d28f4e6416f30"},{url:"manifest.webmanifest",revision:"59b8883affa8445749f276a109447e4f"},{url:"ssr-manifest.json",revision:"8abd0fe50a6455632de282a310e3dc5e"},{url:"images/logo/icon-192x192.png",revision:"4bc970781aec457abb499644bba06388"},{url:"images/logo/icon-256x256.png",revision:"ce1266100e312a0f347be545e6952140"},{url:"images/logo/icon-384x384.png",revision:"e3f5860253c941d9ee7c0f6817381a93"},{url:"images/logo/icon-512x512.png",revision:"989db63857bdc39dbd0c148de0bf695c"},{url:"manifest.webmanifest",revision:"59b8883affa8445749f276a109447e4f"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
