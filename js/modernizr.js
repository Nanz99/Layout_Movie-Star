window.Modernizr=function(r,d,i){function n(e){g.cssText=e}function a(e,t){return typeof e===t}function o(e,t){return!!~(""+e).indexOf(t)}function c(e,t){for(var n in e){var r=e[n];if(!o(r,"-")&&g[r]!==i)return"pfx"!=t||r}return!1}function s(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),o=(e+" "+w.join(r+" ")+r).split(" ");return a(t,"string")||a(t,"undefined")?c(o,t):function(e,t,n){for(var r in e){var o=t[e[r]];if(o!==i)return!1===n?e[r]:a(o,"function")?o.bind(n||t):o}return!1}(o=(e+" "+S.join(r+" ")+r).split(" "),t,n)}function l(e,t,n,r){var o,a,i,c,s=d.createElement("div"),l=d.body,u=l||d.createElement("body");if(parseInt(n,10))for(;n--;)(i=d.createElement("div")).id=r?r[n]:h+(n+1),s.appendChild(i);return o=["&#173;",'<style id="s',h,'">',e,"</style>"].join(""),s.id=h,(l?s:u).innerHTML+=o,u.appendChild(s),l||(u.style.background="",u.style.overflow="hidden",c=m.style.overflow,m.style.overflow="hidden",m.appendChild(u)),a=t(s,e),l?s.parentNode.removeChild(s):(u.parentNode.removeChild(u),m.style.overflow=c),!!a}var e,u,f,p={},m=d.documentElement,h="modernizr",t=d.createElement(h),g=t.style,v=d.createElement("input"),y=":)",b={}.toString,E=" -webkit- -moz- -o- -ms- ".split(" "),x="Webkit Moz O ms",w=x.split(" "),S=x.toLowerCase().split(" "),C="http://www.w3.org/2000/svg",T={},k={},j={},M=[],N=M.slice,$=(f={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"},function(e,t){t=t||d.createElement(f[e]||"div");var n=(e="on"+e)in t;return n||(t.setAttribute||(t=d.createElement("div")),t.setAttribute&&t.removeAttribute&&(t.setAttribute(e,""),n=a(t[e],"function"),a(t[e],"undefined")||(t[e]=i),t.removeAttribute(e))),t=null,n}),P={}.hasOwnProperty;for(var L in u=a(P,"undefined")||a(P.call,"undefined")?function(e,t){return t in e&&a(e.constructor.prototype[t],"undefined")}:function(e,t){return P.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(r){var o=this;if("function"!=typeof o)throw new TypeError;var a=N.call(arguments,1),i=function(){if(this instanceof i){function e(){}e.prototype=o.prototype;var t=new e,n=o.apply(t,a.concat(N.call(arguments)));return Object(n)===n?n:t}return o.apply(r,a.concat(N.call(arguments)))};return i}),T.flexbox=function(){return s("flexWrap")},T.canvas=function(){var e=d.createElement("canvas");return!!e.getContext&&!!e.getContext("2d")},T.canvastext=function(){return!!p.canvas&&!!a(d.createElement("canvas").getContext("2d").fillText,"function")},T.webgl=function(){return!!r.WebGLRenderingContext},T.touch=function(){var t;return"ontouchstart"in r||r.DocumentTouch&&d instanceof DocumentTouch?t=!0:l(["@media (",E.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){t=9===e.offsetTop}),t},T.geolocation=function(){return"geolocation"in navigator},T.postmessage=function(){return!!r.postMessage},T.websqldatabase=function(){return!!r.openDatabase},T.indexedDB=function(){return!!s("indexedDB",r)},T.hashchange=function(){return $("hashchange",r)&&(d.documentMode===i||7<d.documentMode)},T.history=function(){return!!r.history&&!!history.pushState},T.draganddrop=function(){var e=d.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},T.websockets=function(){return"WebSocket"in r||"MozWebSocket"in r},T.rgba=function(){return n("background-color:rgba(150,255,150,.5)"),o(g.backgroundColor,"rgba")},T.hsla=function(){return n("background-color:hsla(120,40%,100%,.5)"),o(g.backgroundColor,"rgba")||o(g.backgroundColor,"hsla")},T.multiplebgs=function(){return n("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(g.background)},T.backgroundsize=function(){return s("backgroundSize")},T.borderimage=function(){return s("borderImage")},T.borderradius=function(){return s("borderRadius")},T.boxshadow=function(){return s("boxShadow")},T.textshadow=function(){return""===d.createElement("div").style.textShadow},T.opacity=function(){return function(e,t){n(E.join(e+";")+(t||""))}("opacity:.55"),/^0.55$/.test(g.opacity)},T.cssanimations=function(){return s("animationName")},T.csscolumns=function(){return s("columnCount")},T.cssgradients=function(){var e="background-image:";return n((e+"-webkit- ".split(" ").join("gradient(linear,left top,right bottom,from(#9f9),to(white));"+e)+E.join("linear-gradient(left top,#9f9, white);"+e)).slice(0,-e.length)),o(g.backgroundImage,"gradient")},T.cssreflections=function(){return s("boxReflect")},T.csstransforms=function(){return!!s("transform")},T.csstransforms3d=function(){var n=!!s("perspective");return n&&"webkitPerspective"in m.style&&l("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(e,t){n=9===e.offsetLeft&&3===e.offsetHeight}),n},T.csstransitions=function(){return s("transition")},T.fontface=function(){var a;return l('@font-face {font-family:"font";src:url("https://")}',function(e,t){var n=d.getElementById("smodernizr"),r=n.sheet||n.styleSheet,o=r?r.cssRules&&r.cssRules[0]?r.cssRules[0].cssText:r.cssText||"":"";a=/src/i.test(o)&&0===o.indexOf(t.split(" ")[0])}),a},T.generatedcontent=function(){var t;return l(["#",h,"{font:0/0 a}#",h,':after{content:"',y,'";visibility:hidden;font:3px/1 a}'].join(""),function(e){t=3<=e.offsetHeight}),t},T.video=function(){var e=d.createElement("video"),t=!1;try{(t=!!e.canPlayType)&&((t=new Boolean(t)).ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),t.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),t.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(e){}return t},T.audio=function(){var e=d.createElement("audio"),t=!1;try{(t=!!e.canPlayType)&&((t=new Boolean(t)).ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),t.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),t.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),t.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(e){}return t},T.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(e){return!1}},T.sessionstorage=function(){try{return sessionStorage.setItem(h,h),sessionStorage.removeItem(h),!0}catch(e){return!1}},T.webworkers=function(){return!!r.Worker},T.applicationcache=function(){return!!r.applicationCache},T.svg=function(){return!!d.createElementNS&&!!d.createElementNS(C,"svg").createSVGRect},T.inlinesvg=function(){var e=d.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==C},T.smil=function(){return!!d.createElementNS&&/SVGAnimate/.test(b.call(d.createElementNS(C,"animate")))},T.svgclippaths=function(){return!!d.createElementNS&&/SVGClipPath/.test(b.call(d.createElementNS(C,"clipPath")))},T)u(T,L)&&(e=L.toLowerCase(),p[e]=T[L](),M.push((p[e]?"":"no-")+e));return p.input||(p.input=function(e){for(var t=0,n=e.length;t<n;t++)j[e[t]]=e[t]in v;return j.list&&(j.list=!!d.createElement("datalist")&&!!r.HTMLDataListElement),j}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),p.inputtypes=function(e){for(var t,n,r,o=0,a=e.length;o<a;o++)v.setAttribute("type",n=e[o]),(t="text"!==v.type)&&(v.value=y,v.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(n)&&v.style.WebkitAppearance!==i?(m.appendChild(v),t=(r=d.defaultView).getComputedStyle&&"textfield"!==r.getComputedStyle(v,null).WebkitAppearance&&0!==v.offsetHeight,m.removeChild(v)):/^(search|tel)$/.test(n)||(t=/^(url|email)$/.test(n)?v.checkValidity&&!1===v.checkValidity():v.value!=y)),k[e[o]]=!!t;return k}("search tel url email datetime date month week time datetime-local number range color".split(" "))),p.addTest=function(e,t){if("object"==typeof e)for(var n in e)u(e,n)&&p.addTest(n,e[n]);else{if(e=e.toLowerCase(),p[e]!==i)return p;t="function"==typeof t?t():t,m.className+=" "+(t?"":"no-")+e,p[e]=t}return p},n(""),t=v=null,function(e,i){function c(){var e=m.elements;return"string"==typeof e?e.split(" "):e}function s(e){var t=p[e[d]];return t||(t={},f++,e[d]=f,p[f]=t),t}function r(e,t,n){return t=t||i,l?t.createElement(e):(r=(n=n||s(t)).cache[e]?n.cache[e].cloneNode():u.test(e)?(n.cache[e]=n.createElem(e)).cloneNode():n.createElem(e)).canHaveChildren&&!a.test(e)?n.frag.appendChild(r):r;var r}function t(e){var t=s(e=e||i);return!m.shivCSS||n||t.hasCSS||(t.hasCSS=!!function(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}(e,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),l||function(t,n){n.cache||(n.cache={},n.createElem=t.createElement,n.createFrag=t.createDocumentFragment,n.frag=n.createFrag()),t.createElement=function(e){return m.shivMethods?r(e,t,n):n.createElem(e)},t.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+c().join().replace(/\w+/g,function(e){return n.createElem(e),n.frag.createElement(e),'c("'+e+'")'})+");return n}")(m,n.frag)}(e,t),e}var n,l,o=e.html5||{},a=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,u=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,d="_html5shiv",f=0,p={};!function(){try{var e=i.createElement("a");e.innerHTML="<xyz></xyz>",n="hidden"in e,l=1==e.childNodes.length||function(){i.createElement("a");var e=i.createDocumentFragment();return void 0===e.cloneNode||void 0===e.createDocumentFragment||void 0===e.createElement}()}catch(e){l=n=!0}}();var m={elements:o.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:!1!==o.shivCSS,supportsUnknownElements:l,shivMethods:!1!==o.shivMethods,type:"default",shivDocument:t,createElement:r,createDocumentFragment:function(e,t){if(e=e||i,l)return e.createDocumentFragment();for(var n=(t=t||s(e)).frag.cloneNode(),r=0,o=c(),a=o.length;r<a;r++)n.createElement(o[r]);return n}};e.html5=m,t(i)}(this,d),p._version="2.6.2",p._prefixes=E,p._domPrefixes=S,p._cssomPrefixes=w,p.mq=function(e){var t,n=r.matchMedia||r.msMatchMedia;return n?n(e).matches:(l("@media "+e+" { #"+h+" { position: absolute; } }",function(e){t="absolute"==(r.getComputedStyle?getComputedStyle(e,null):e.currentStyle).position}),t)},p.hasEvent=$,p.testProp=function(e){return c([e])},p.testAllProps=s,p.testStyles=l,p.prefixed=function(e,t,n){return t?s(e,t,n):s(e,"pfx")},m.className=m.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+" js "+M.join(" "),p}(this,this.document),function(e,f){function d(e){return"[object Function]"==o.call(e)}function p(e){return"string"==typeof e}function m(){}function h(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function g(){var e=E.shift();x=1,e?e.t?y(function(){("c"==e.t?v.injectCss:v.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),g()):x=0}function t(e,t,n,r,o){return x=0,t=t||"j",p(e)?function(n,r,e,t,o,a,i){function c(e){if(!l&&h(s.readyState)&&(d.r=l=1,x||g(),s.onload=s.onreadystatechange=null,e))for(var t in"img"!=n&&y(function(){S.removeChild(s)},50),T[r])T[r].hasOwnProperty(t)&&T[r][t].onload()}i=i||v.errorTimeout;var s=f.createElement(n),l=0,u=0,d={t:e,s:r,e:o,a:a,x:i};1===T[r]&&(u=1,T[r]=[]),"object"==n?s.data=r:(s.src=r,s.type=n),s.width=s.height="0",s.onerror=s.onload=s.onreadystatechange=function(){c.call(this,u)},E.splice(t,0,d),"img"!=n&&(u||2===T[r]?(S.insertBefore(s,w?null:b),y(c,i)):T[r].push(s))}("c"==t?s:i,e,t,this.i++,n,r,o):(E.splice(this.i++,0,e),1==E.length&&g()),this}function c(){var e=v;return e.loader={load:t,i:0},e}var n,v,r=f.documentElement,y=e.setTimeout,b=f.getElementsByTagName("script")[0],o={}.toString,E=[],x=0,a="MozAppearance"in r.style,w=a&&!!f.createRange().compareNode,S=w?r:b.parentNode,i=(r=e.opera&&"[object Opera]"==o.call(e.opera),r=!!f.attachEvent&&!r,a?"object":r?"script":"img"),s=r?"script":i,l=Array.isArray||function(e){return"[object Array]"==o.call(e)},C=[],T={},k={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}};(v=function(e){function u(e,t,n,r,o){var a=function(e){e=e.split("!");var t,n,r,o=C.length,a=e.pop(),i=e.length;for(a={url:a,origUrl:a,prefixes:e},n=0;n<i;n++)r=e[n].split("="),(t=k[r.shift()])&&(a=t(a,r));for(n=0;n<o;n++)a=C[n](a);return a}(e),i=a.autoCallback;a.url.split(".").pop().split("?").shift(),a.bypass||(t=t&&(d(t)?t:t[e]||t[r]||t[e.split("/").pop().split("?")[0]]),a.instead?a.instead(e,t,n,r,o):(T[a.url]?a.noexec=!0:T[a.url]=1,n.load(a.url,a.forceCSS||!a.forceJS&&"css"==a.url.split(".").pop().split("?").shift()?"c":void 0,a.noexec,a.attrs,a.timeout),(d(t)||d(i))&&n.load(function(){c(),t&&t(a.origUrl,o,r),i&&i(a.origUrl,o,r),T[a.url]=2})))}function t(e,t){function n(n,e){if(n){if(p(n))e||(c=function(){var e=[].slice.call(arguments);s.apply(this,e),l()}),u(n,c,t,0,a);else if(Object(n)===n)for(o in r=function(){var e,t=0;for(e in n)n.hasOwnProperty(e)&&t++;return t}(),n)n.hasOwnProperty(o)&&(e||--r||(d(c)?c=function(){var e=[].slice.call(arguments);s.apply(this,e),l()}:c[o]=function(t){return function(){var e=[].slice.call(arguments);t&&t.apply(this,e),l()}}(s[o])),u(n[o],c,t,o,a))}else e||l()}var r,o,a=!!e.test,i=e.load||e.both,c=e.callback||m,s=c,l=e.complete||m;n(a?e.yep:e.nope,!!i),i&&n(i)}var n,r,o=this.yepnope.loader;if(p(e))u(e,0,o,0);else if(l(e))for(n=0;n<e.length;n++)p(r=e[n])?u(r,0,o,0):l(r)?v(r):Object(r)===r&&t(r,o);else Object(e)===e&&t(e,o)}).addPrefix=function(e,t){k[e]=t},v.addFilter=function(e){C.push(e)},v.errorTimeout=1e4,null==f.readyState&&f.addEventListener&&(f.readyState="loading",f.addEventListener("DOMContentLoaded",n=function(){f.removeEventListener("DOMContentLoaded",n,0),f.readyState="complete"},0)),e.yepnope=c(),e.yepnope.executeStack=g,e.yepnope.injectJs=function(e,t,n,r,o,a){var i,c,s=f.createElement("script");r=r||v.errorTimeout;for(c in s.src=e,n)s.setAttribute(c,n[c]);t=a?g:t||m,s.onreadystatechange=s.onload=function(){!i&&h(s.readyState)&&(i=1,t(),s.onload=s.onreadystatechange=null)},y(function(){i||t(i=1)},r),o?s.onload():b.parentNode.insertBefore(s,b)},e.yepnope.injectCss=function(e,t,n,r,o,a){var i;r=f.createElement("link"),t=a?g:t||m;for(i in r.href=e,r.rel="stylesheet",r.type="text/css",n)r.setAttribute(i,n[i]);o||(b.parentNode.insertBefore(r,b),y(t,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},window.matchMedia=window.matchMedia||function(e){var t,n=e.documentElement,r=n.firstElementChild||n.firstChild,o=e.createElement("body"),a=e.createElement("div");return a.id="mq-test-1",a.style.cssText="position:absolute;top:-100em",o.style.background="none",o.appendChild(a),function(e){return a.innerHTML='&shy;<style media="'+e+'"> #mq-test-1 { width: 42px; }</style>',n.insertBefore(o,r),t=42==a.offsetWidth,n.removeChild(o),{matches:t,media:e}}}(document),function(c){if(c.respond={},respond.update=function(){},respond.mediaQueriesSupported=c.matchMedia&&c.matchMedia("only all").matches,!respond.mediaQueriesSupported){function e(){for(var e,t,n,r,o=T,a=o.length,i=0;i<a;i++)t=(e=o[i]).href,n=e.media,r=e.rel&&"stylesheet"===e.rel.toLowerCase(),t&&r&&!s[t]&&(e.styleSheet&&e.styleSheet.rawCssText?(f(e.styleSheet.rawCssText,t,n),s[t]=!0):(/^([a-zA-Z:]*\/\/)/.test(t)||l)&&t.replace(RegExp.$1,"").split("/")[0]!==c.location.host||u.push({href:t,media:n}));d()}function h(){var e,t=b.createElement("div"),n=b.body,r=!1;return t.style.cssText="position:absolute;font-size:1em;width:1em",n||((n=r=b.createElement("body")).style.background="none"),n.appendChild(t),E.insertBefore(n,E.firstChild),e=t.offsetWidth,r?E.removeChild(n):n.removeChild(t),e=y=parseFloat(e)}var g,v,y,b=c.document,E=b.documentElement,x=[],w=[],S=[],s={},C=b.getElementsByTagName("head")[0]||E,l=b.getElementsByTagName("base")[0],T=C.getElementsByTagName("link"),u=[],d=function(){if(u.length){var t=u.shift();n(t.href,function(e){f(e,t.href,t.media),s[t.href]=!0,d()})}},f=function(e,t,n){function r(e){return e.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,"$1"+t+"$2$3")}var o,a,i,c,s,l=e.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi),u=l&&l.length||0,d=!u&&n,f=0;for((t=t.substring(0,t.lastIndexOf("/"))).length&&(t+="/"),d&&(u=1);f<u;f++)for(o=0,d?(a=n,w.push(r(e))):(a=l[f].match(/@media *([^\{]+)\{([\S\s]+?)$/)&&RegExp.$1,w.push(RegExp.$2&&r(RegExp.$2))),s=(c=a.split(",")).length;o<s;o++)i=c[o],x.push({media:i.split("(")[0].match(/(only\s+)?([a-zA-Z]+)\s?/)&&RegExp.$2||"all",rules:w.length-1,hasquery:-1<i.indexOf("("),minw:i.match(/\(min\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:i.match(/\(max\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||"")});k()},k=function(e){var t="clientWidth",n=E[t],r="CSS1Compat"===b.compatMode&&n||b.body[t]||n,o={},a=T[T.length-1],i=(new Date).getTime();if(e&&g&&i-g<30)return clearTimeout(v),void(v=setTimeout(k,30));for(var c in g=i,x){var s=x[c],l=s.minw,u=s.maxw,d=null===l,f=null===u;l=l&&parseFloat(l)*(-1<l.indexOf("em")?y||h():1),u=u&&parseFloat(u)*(-1<u.indexOf("em")?y||h():1),s.hasquery&&(d&&f||!(d||l<=r)||!(f||r<=u))||(o[s.media]||(o[s.media]=[]),o[s.media].push(w[s.rules]))}for(var c in S)S[c]&&S[c].parentNode===C&&C.removeChild(S[c]);for(var c in o){var p=b.createElement("style"),m=o[c].join("\n");p.type="text/css",p.media=c,C.insertBefore(p,a.nextSibling),p.styleSheet?p.styleSheet.cssText=m:p.appendChild(b.createTextNode(m)),S.push(p)}},n=function(e,t){var n=r();n&&(n.open("GET",e,!0),n.onreadystatechange=function(){4!=n.readyState||200!=n.status&&304!=n.status||t(n.responseText)},4!=n.readyState&&n.send(null))},r=function(){var t=!1;try{t=new XMLHttpRequest}catch(e){t=new ActiveXObject("Microsoft.XMLHTTP")}return function(){return t}}();e(),respond.update=e,c.addEventListener?c.addEventListener("resize",t,!1):c.attachEvent&&c.attachEvent("onresize",t)}function t(){k(!0)}}(this);