!function(){var e="DUphNbATDNWyak+JPT0MyDQkYVCkhyO1c9kYbA3vysw=",n=[location.origin+location.pathname+"../web2img.png",location.origin+location.pathname+"../../web2img.png",location.origin+location.pathname+"web2img.png"],t=120;function r(e){return e.split("?")[0].replace(/[^/]+$/,"")}self.document?function(){var o=document.documentElement;function a(e){var n=document.getElementsByTagName("noscript");n.length>0&&(e=n[0].innerHTML),o.innerHTML=e}var i=document.currentScript.src,c=navigator.serviceWorker;if(c){var s=r(i),u=function(e){var n=e.data,t=new Image;t.onload=function(){clearInterval(r);var e=document.createElement("canvas");e.width=t.width,e.height=t.height;var o=e.getContext("2d");o.drawImage(t,0,0);var a=o.getImageData(0,0,t.width,t.height).data.buffer;2===n.privacy?parent.postMessage(a,"*",[a]):p(a)},t.onerror=function(){clearInterval(r),2===n.privacy?parent.postMessage("","*"):p()},1===n.privacy&&(t.referrerPolicy="no-referrer"),t.crossOrigin=1,t.src=n.url;var r=setTimeout((function(){console.log("[web2img] timeout:",n.url),t.onerror(),t.onerror=t.onload=null,t.src=""}),n.timeout)},h=document.createElement("iframe");h.src="data:text/html,<script>onmessage="+u+"<\/script>",h.style.display="none",h.onload=d,o.appendChild(h);var l=h.contentWindow;self.onmessage=function(e){e.source===l&&p(e.data)}}else a("Service Worker is not supported");function f(n,r){var o=[];if(!c.controller){var u=c.register(i,{scope:'./'})["catch"]((function(e){a(e.message)}));o.push(u)}var h=JSON.stringify({hash:e,time:Date.now()}),l=new Response(h);o.push(r.put(s+".cache-info",l));var f=function(e){var n=e.indexOf(13),r=e.subarray(0,n),o=(new TextDecoder).decode(r),a=JSON.parse(o),i=n+1;for(var c in a){var s=a[c],u=/\.html$/.test(c)?5:t;s["cache-control"]="max-age="+u;var h=+s["content-length"],l=e.subarray(i,i+h);a[c]=new Response(l,{headers:s}),i+=h}return a}(n);for(var p in f)l=f[p],o.push(r.put(s+p,l));Promise.all(o).then((function(){location.reload()}))}function p(n){n?crypto.subtle.digest("SHA-256",n).then((function(t){var r=new Uint8Array(t),o=btoa(String.fromCharCode.apply(null,r));if(e!==o)return console.warn("[web2img] bad hash. exp:",e,"but got:",o),void d();var a,i,c,s=(a=new Uint32Array(n),i=new Uint8Array(3*a.length),c=0,a.forEach((function(e){i[c++]=e,i[c++]=e>>8,i[c++]=e>>16})),i);caches["delete"](".web2img").then((function(){caches.open(".web2img").then((function(e){f(s,e)}))}))})):d()}function d(){var e=n.shift();if(e){var t={url:e,privacy:2,timeout:1e4};l.postMessage(t,"*")}else a("failed to load resources")}}():function(){var e,n=location.href.split("?")[0],t=r(n),o=1;function a(e){return caches.open(".web2img").then((function(n){return n.match(e)}))}function i(){a(t+".cache-info").then((function(t){t&&t.json().then((function(t){var r,o;Date.now()-t.time<12e4||("cache"in Request.prototype?(r=n,o={cache:"no-cache"}):r=n+"?t="+Date.now(),fetch(r,o).then((function(n){n.text().then((function(n){-1===n.indexOf(t.hash)&&(e=r,console.log("[web2img] new version found"))}))})))}))}))}function c(r){return caches.has(".web2img").then((function(o){if(o||(e=n),e&&"navigate"===r.mode){var i=new Response("<script src="+e+"><\/script>",{headers:{"content-type":"text/html"}});return e="",console.log("[web2img] updating"),i}return c=r.url,a(s=new URL(c).pathname.replace(/\/{2,}/g,"/").replace(/\/$/,"/index.html")).then((function(e){return e||a(t+"404.html").then((function(e){return e||new Response("file not found: "+s,{status:404})}))}));var c,s}))}setInterval(i,12e4),onfetch=function(e){o&&(o=0,i());console.log(e.request.url,n);var r=e.request;0===r.url.indexOf(t)&&0!==r.url.indexOf(n)&&e.respondWith(c(r))},oninstall=function(){skipWaiting()}}()}();
