if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let c={};const l=e=>i(e,r),a={module:{uri:r},exports:c,require:l};s[r]=Promise.all(n.map((e=>a[e]||l(e)))).then((e=>(o(...e),c)))}}define(["./workbox-4de3aa5f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/catch-22-experience-516d4df9.js",revision:null},{url:"assets/entry-client-6524239d.css",revision:null},{url:"assets/entry-client-cd8c4c7c.js",revision:null},{url:"assets/index-24658ba3.js",revision:null},{url:"assets/index-8f4d6711.js",revision:null},{url:"assets/index-b7ea3ce8.js",revision:null},{url:"assets/index-d17a46ba.js",revision:null},{url:"assets/index-e9725378.js",revision:null},{url:"assets/index-fddb1e96.js",revision:null},{url:"assets/MetaHead-007eae12.js",revision:null},{url:"assets/one-0f4ba946.js",revision:null},{url:"assets/workbox-window.prod.es5-a7b12eab.js",revision:null},{url:"clicky.mp3",revision:"c3d2fc536218cca6a92337fd6c2bb169"},{url:"favicon.ico",revision:"4fdee31751991038136c743458aa0940"},{url:"google0962776df775cf70.html",revision:"0a781e0155f961564ff908bcb88201e7"},{url:"images/blogs/what-is-linter.jpeg",revision:"75b803efc95ccbe0a32f7e418a17ac1a"},{url:"images/books/html_css.jpg",revision:"169c3e2016e162f03ad9d840c35f02d5"},{url:"images/logo/icon-192x192.png",revision:"4bc970781aec457abb499644bba06388"},{url:"images/logo/icon-256x256.png",revision:"ce1266100e312a0f347be545e6952140"},{url:"images/logo/icon-384x384.png",revision:"e3f5860253c941d9ee7c0f6817381a93"},{url:"images/logo/icon-512x512.png",revision:"989db63857bdc39dbd0c148de0bf695c"},{url:"images/mask.svg",revision:"1e75521e83eceeac4bc82633a207c484"},{url:"images/og_facebook_lmp.jpg",revision:"8ae0776714a6c2cd2c99a5b26e97c437"},{url:"manifest.json",revision:"c96e9c388d7c4f5e4d9488b4bb8fd43c"},{url:"manifest.webmanifest",revision:"5f01591e08fb700b874d658cddba2743"},{url:"robots.txt",revision:"f77c87f977e0fcce05a6df46c885a129"},{url:"ssr-manifest.json",revision:"0f0ccd60bfb7334314a9da3815e2ef78"},{url:"robots.txt",revision:"f77c87f977e0fcce05a6df46c885a129"},{url:"./images/logo/icon-192x192.png",revision:"4bc970781aec457abb499644bba06388"},{url:"./images/logo/icon-256x256.png",revision:"ce1266100e312a0f347be545e6952140"},{url:"./images/logo/icon-384x384.png",revision:"e3f5860253c941d9ee7c0f6817381a93"},{url:"./images/logo/icon-512x512.png",revision:"989db63857bdc39dbd0c148de0bf695c"},{url:"google0962776df775cf70.html",revision:"0a781e0155f961564ff908bcb88201e7"},{url:"manifest.webmanifest",revision:"5f01591e08fb700b874d658cddba2743"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
