var gameRockPaperScissors2;(()=>{"use strict";var e,r,t,n,o,a,i,s,u,l,c,f={482:(e,r,t)=>{var n={"./App":()=>t.e(860).then((()=>()=>t(860)))},o=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),a=(e,r)=>{if(t.S){var n="default",o=t.S[n];if(o&&o!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[n]=e,t.I(n,r)}};t.d(r,{get:()=>o,init:()=>a})}},p={};function d(e){var r=p[e];if(void 0!==r)return r.exports;var t=p[e]={id:e,exports:{}};return f[e](t,t.exports,d),t.exports}d.m=f,d.c=p,d.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return d.d(r,{a:r}),r},d.d=(e,r)=>{for(var t in r)d.o(r,t)&&!d.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},d.f={},d.e=e=>Promise.all(Object.keys(d.f).reduce(((r,t)=>(d.f[t](e,r),r)),[])),d.u=e=>e+"."+{98:"c09e96d62fd01920284c",393:"868f0fb1579220af6576",860:"a1a0beba152ba95da2c6"}[e]+".js",d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="game-rockpaperscissors2:",d.l=(t,n,o,a)=>{if(e[t])e[t].push(n);else{var i,s;if(void 0!==o)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var c=u[l];if(c.getAttribute("src")==t||c.getAttribute("data-webpack")==r+o){i=c;break}}i||(s=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,d.nc&&i.setAttribute("nonce",d.nc),i.setAttribute("data-webpack",r+o),i.src=t),e[t]=[n];var f=(r,n)=>{i.onerror=i.onload=null,clearTimeout(p);var o=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(n))),r)return r(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),s&&document.head.appendChild(i)}},d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{d.S={};var e={},r={};d.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];d.o(d.S,t)||(d.S[t]={});var a=d.S[t],i="game-rockpaperscissors2",s=(e,r,t,n)=>{var o=a[e]=a[e]||{},s=o[r];(!s||!s.loaded&&(!n!=!s.eager?n:i>s.from))&&(o[r]={get:t,from:i,eager:!!n})},u=[];return"default"===t&&(s("single-spa-vue","2.5.1",(()=>d.e(98).then((()=>()=>d(98))))),s("vue","3.2.33",(()=>d.e(393).then((()=>()=>d(393)))))),e[t]=u.length?Promise.all(u).then((()=>e[t]=1)):1}}})(),(()=>{var e;d.g.importScripts&&(e=d.g.location+"");var r=d.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),d.p=e})(),t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var o=e[n],a=(typeof o)[0];if(n>=r.length)return"u"==a;var i=r[n],s=(typeof i)[0];if(a!=s)return"o"==a&&"n"==s||"s"==s||"u"==a;if("o"!=a&&"u"!=a&&o!=i)return o<i;n++}},o=(e,r)=>{if(0 in e){r=t(r);var n=e[0],a=n<0;a&&(n=-n-1);for(var i=0,s=1,u=!0;;s++,i++){var l,c,f=s<e.length?(typeof e[s])[0]:"";if(i>=r.length||"o"==(c=(typeof(l=r[i]))[0]))return!u||("u"==f?s>n&&!a:""==f!=a);if("u"==c){if(!u||"u"!=f)return!1}else if(u)if(f==c)if(s<=n){if(l!=e[s])return!1}else{if(a?l>e[s]:l<e[s])return!1;l!=e[s]&&(u=!1)}else if("s"!=f&&"n"!=f){if(a||s<=n)return!1;u=!1,s--}else{if(s<=n||c<f!=a)return!1;u=!1}else"s"!=f&&"n"!=f&&(u=!1,s--)}}var p=[],d=p.pop.bind(p);for(i=1;i<e.length;i++){var h=e[i];p.push(1==h?d()|d():2==h?d()&d():h?o(h,r):!d())}return!!d()},a=(e,r,t)=>{var a=e[r];return(r=Object.keys(a).reduce(((e,r)=>!o(t,r)||e&&!n(e,r)?e:r),0))&&a[r]},i=e=>(e.loaded=1,e.get()),s=(e=>function(r,t,n,o){var a=d.I(r);return a&&a.then?a.then(e.bind(e,r,d.S[r],t,n,o)):e(0,d.S[r],t,n,o)})(((e,r,t,n,o)=>{var s=r&&d.o(r,t)&&a(r,t,n);return s?i(s):o()})),u={},l={604:()=>s("default","single-spa-vue",[1,2,1,0],(()=>d.e(98).then((()=>()=>d(98))))),655:()=>s("default","vue",[1,3,2,31],(()=>d.e(393).then((()=>()=>d(393)))))},c={860:[604,655]},d.f.consumes=(e,r)=>{d.o(c,e)&&c[e].forEach((e=>{if(d.o(u,e))return r.push(u[e]);var t=r=>{u[e]=0,d.m[e]=t=>{delete d.c[e],t.exports=r()}},n=r=>{delete u[e],d.m[e]=t=>{throw delete d.c[e],r}};try{var o=l[e]();o.then?r.push(u[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}))},(()=>{var e={76:0};d.f.j=(r,t)=>{var n=d.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else{var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var a=d.p+d.u(r),i=new Error;d.l(a,(t=>{if(d.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,o,[a,i,s]=t,u=0;if(a.some((r=>0!==e[r]))){for(n in i)d.o(i,n)&&(d.m[n]=i[n]);s&&s(d)}for(r&&r(t);u<a.length;u++)o=a[u],d.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=self.webpackChunkgame_rockpaperscissors2=self.webpackChunkgame_rockpaperscissors2||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var h=d(482);gameRockPaperScissors2=h})();