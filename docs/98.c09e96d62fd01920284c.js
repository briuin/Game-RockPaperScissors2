"use strict";(self.webpackChunkgame_rockpaperscissors2=self.webpackChunkgame_rockpaperscissors2||[]).push([[98],{98:(e,n,t)=>{t.r(n),t.d(n,{default:()=>m});var r,o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t.g?t.g:"undefined"!=typeof self?self:{};function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}(function(e,n){var t;t=o,e.exports=function(e){if(e.CSS&&e.CSS.escape)return e.CSS.escape;var n=function(e){if(0==arguments.length)throw new TypeError("`CSS.escape` requires an argument.");for(var n,t=String(e),r=t.length,o=-1,a="",i=t.charCodeAt(0);++o<r;)0!=(n=t.charCodeAt(o))?a+=n>=1&&n<=31||127==n||0==o&&n>=48&&n<=57||1==o&&n>=48&&n<=57&&45==i?"\\"+n.toString(16)+" ":0==o&&1==r&&45==n||!(n>=128||45==n||95==n||n>=48&&n<=57||n>=65&&n<=90||n>=97&&n<=122)?"\\"+t.charAt(o):t.charAt(o):a+="�";return a};return e.CSS||(e.CSS={}),e.CSS.escape=n,n}(t)})(r={path:void 0,exports:{},require:function(e,n){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==n&&r.path)}},r.exports),r.exports;var u={appOptions:null,template:null,Vue:null,createApp:null,handleInstance:null};function c(e){return e.loadRootComponent?e.loadRootComponent().then((function(n){return e.rootComponent=n})):Promise.resolve()}function l(e,n,t){var r={};return Promise.resolve().then((function(){return function(e,n){return"function"==typeof e.appOptions?e.appOptions(n):Promise.resolve(i({},e.appOptions))}(e,t).then((function(o){var a;if(t.domElement&&!o.el&&(o.el=t.domElement),o.el)if("string"==typeof o.el){if(!(a=document.querySelector(o.el)))throw Error("If appOptions.el is provided to single-spa-vue, the dom element must exist in the dom. Was provided as ".concat(o.el))}else(a=o.el).id||(a.id="single-spa-application:".concat(t.name)),o.el="#".concat(CSS.escape(a.id));else{var p="single-spa-application:".concat(t.name);o.el="#".concat(CSS.escape(p)),(a=document.getElementById(p))||((a=document.createElement("div")).id=p,document.body.appendChild(a))}if(e.replaceMode||(o.el=o.el+" .single-spa-container"),!a.querySelector(".single-spa-container")){var s=document.createElement("div");s.className="single-spa-container",a.appendChild(s)}if(r.domEl=a,o.render||o.template||!e.rootComponent||(o.render=function(n){return n(e.rootComponent)}),o.data||(o.data={}),o.data=function(){return i(i({},o.data),t)},e.createApp){if(r.vueInstance=e.createApp(o),e.handleInstance)return Promise.resolve(e.handleInstance(r.vueInstance,t)).then((function(){return r.root=r.vueInstance.mount(o.el),n[t.name]=r,r.vueInstance}));r.root=r.vueInstance.mount(o.el)}else if(r.vueInstance=new e.Vue(o),r.vueInstance.bind&&(r.vueInstance=r.vueInstance.bind(r.vueInstance)),e.handleInstance)return Promise.resolve(e.handleInstance(r.vueInstance,t)).then((function(){return n[t.name]=r,r.vueInstance}));return n[t.name]=r,r.vueInstance}))}))}function f(e,n,t){return Promise.resolve().then((function(){var r=n[t.name],o=i(i({},e.appOptions.data||{}),t),a=r.root||r.vueInstance;for(var p in o)a[p]=o[p]}))}function d(e,n,t){return Promise.resolve().then((function(){var r=n[t.name];e.createApp?r.vueInstance.unmount(r.domEl):(r.vueInstance.$destroy(),r.vueInstance.$el.innerHTML=""),delete r.vueInstance,r.domEl&&(r.domEl.innerHTML="",delete r.domEl)}))}const m=function(e){if("object"!==s(e))throw new Error("single-spa-vue requires a configuration object");var n=i(i({},u),e);if(!n.Vue&&!n.createApp)throw Error("single-spa-vue must be passed opts.Vue or opts.createApp");if(!n.appOptions)throw Error("single-spa-vue must be passed opts.appOptions");if(n.appOptions.el&&"string"!=typeof n.appOptions.el&&!(n.appOptions.el instanceof HTMLElement))throw Error("single-spa-vue: appOptions.el must be a string CSS selector, an HTMLElement, or not provided at all. Was given ".concat(s(n.appOptions.el)));n.createApp=n.createApp||n.Vue&&n.Vue.createApp;var t={};return{bootstrap:c.bind(null,n,t),mount:l.bind(null,n,t),unmount:d.bind(null,n,t),update:f.bind(null,n,t)}}}}]);