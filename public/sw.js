if(!self.define){let e,s={};const n=(n,t)=>(n=new URL(n+".js",t).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(t,c)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let a={};const r=e=>n(e,i),o={module:{uri:i},exports:a,require:r};s[i]=Promise.all(t.map((e=>o[e]||r(e)))).then((e=>(c(...e),a)))}}define(["./workbox-22294e6b"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/server/middleware-manifest.json",revision:"C6myASrD6V1yUt_xjncqI"},{url:"/_next/static/C6myASrD6V1yUt_xjncqI/_buildManifest.js",revision:"C6myASrD6V1yUt_xjncqI"},{url:"/_next/static/C6myASrD6V1yUt_xjncqI/_middlewareManifest.js",revision:"C6myASrD6V1yUt_xjncqI"},{url:"/_next/static/C6myASrD6V1yUt_xjncqI/_ssgManifest.js",revision:"C6myASrD6V1yUt_xjncqI"},{url:"/_next/static/chunks/0b7b90cd.26a3995d0dc7cc17.js",revision:"C6myASrD6V1yUt_xjncqI"},{url:"/_next/static/chunks/163.4cc8736ca3200f83.js",revision:"C6myASrD6V1yUt_xjncqI"},{url:"/_next/static/chunks/651.e7ad805f32a091cd.js",revision:"C6myASrD6V1yUt_xjncqI"},{url:"/_next/static/chunks/framework-8957c350a55da097.js",revision:"C6myASrD6V1yUt_xjncqI"},{url:"/_next/static/chunks/main-94d71cd4840cb956.js",revision:"C6myASrD6V1yUt_xjncqI"},{url:"/_next/static/chunks/pages/%5Bslug%5D-a8b621779a10ca6b.js",revision:"C6myASrD6V1yUt_xjncqI"},{url:"/_next/static/chunks/pages/_app-561f4e21cd5c69f8.js",revision:"C6myASrD6V1yUt_xjncqI"},{url:"/_next/static/chunks/pages/_error-1f95674706ce531a.js",revision:"C6myASrD6V1yUt_xjncqI"},{url:"/_next/static/chunks/pages/index-c600b990423804cc.js",revision:"C6myASrD6V1yUt_xjncqI"},{url:"/_next/static/chunks/pages/places/%5Bslug%5D-c05cb97d2cdf88f3.js",revision:"C6myASrD6V1yUt_xjncqI"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"C6myASrD6V1yUt_xjncqI"},{url:"/_next/static/chunks/webpack-e53852e0734446df.js",revision:"C6myASrD6V1yUt_xjncqI"},{url:"/img/icon-192.png",revision:"d27169d080684ebb57b8387d05c4b444"},{url:"/img/icon-512.png",revision:"f1d74b43a3832183202483a40d9e9d84"},{url:"/manifest.json",revision:"8eb77f9c70ca940376fa9f17cf6b8420"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:t})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));