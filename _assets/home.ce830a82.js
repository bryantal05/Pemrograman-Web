let e=document.createElement("style");e.innerHTML=".header,.search{display:flex;margin:50px 0 0;flex-direction:row;justify-content:center}.title{font-size:60px;font-style:bold;margin-top:20px;color:#4c4c4c}.intro{font-size:30px;font-style:bold;color:#4c4c4c}.input{height:30px;border:1px solid #323232;color:#4c4c4c}.input:hover{border:1px solid #6d9581}.btn{background-color:#558268;border:1px solid #323232;height:30px;font-size:12px;color:#000;border-radius:5%}.btn:hover{color:wheat}.suaraa{width:70%;height:30px}.suara{margin:50px 0;text-align:center}.judul{text-align:center;font-size:70px;color:#705725}.bismillah{text-align:center;font-size:50px;margin-top:10px;margin-bottom:40px;color:#4c4c4c}.ayat{color:#4c4c4c;list-style:none;margin:0 100px 30px}.ayat:nth-child(odd){text-align:right;font-size:40px}.ayat:nth-child(even){text-align:left;font-size:15px;color:#747474}@media screen and (max-width:400px){.ayat:nth-child(odd){font-size:20px;margin-bottom:20px;margin-right:10px}.ayat:nth-child(even){font-size:10px;margin:20px}.ayat{margin:0}}",document.head.appendChild(e);import{c as t,a as n,b as r,w as a,d as o,v as i,t as s,e as u,F as c,r as l,f,g as d,h as p,o as h}from"./index.7cf1a33a.js";import{_ as m}from"./profilkecik.37bf323a.js";var v,g=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}},y=Object.prototype.toString,b=(v=Object.create(null),function(e){var t=y.call(e);return v[t]||(v[t]=t.slice(8,-1).toLowerCase())});function E(e){return e=e.toLowerCase(),function(t){return b(t)===e}}function w(e){return Array.isArray(e)}function x(e){return void 0===e}var O=E("ArrayBuffer");function R(e){return null!==e&&"object"==typeof e}function A(e){if("object"!==b(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}var S=E("Date"),_=E("File"),j=E("Blob"),k=E("FileList");function T(e){return"[object Function]"===y.call(e)}var C=E("URLSearchParams");function N(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),w(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.call(null,e[a],a,e)}var P,B=(P="undefined"!=typeof Uint8Array&&Object.getPrototypeOf(Uint8Array),function(e){return P&&e instanceof P}),D={isArray:w,isArrayBuffer:O,isBuffer:function(e){return null!==e&&!x(e)&&null!==e.constructor&&!x(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){var t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||y.call(e)===t||T(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&O(e.buffer)},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:R,isPlainObject:A,isUndefined:x,isDate:S,isFile:_,isBlob:j,isFunction:T,isStream:function(e){return R(e)&&T(e.pipe)},isURLSearchParams:C,isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:N,merge:function e(){var t={};function n(n,r){A(t[r])&&A(n)?t[r]=e(t[r],n):A(n)?t[r]=e({},n):w(n)?t[r]=n.slice():t[r]=n}for(var r=0,a=arguments.length;r<a;r++)N(arguments[r],n);return t},extend:function(e,t,n){return N(t,(function(t,r){e[r]=n&&"function"==typeof t?g(t,n):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e},inherits:function(e,t,n,r){e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,n&&Object.assign(e.prototype,n)},toFlatObject:function(e,t,n){var r,a,o,i={};t=t||{};do{for(a=(r=Object.getOwnPropertyNames(e)).length;a-- >0;)i[o=r[a]]||(t[o]=e[o],i[o]=!0);e=Object.getPrototypeOf(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:b,kindOfTest:E,endsWith:function(e,t,n){e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;var r=e.indexOf(t,n);return-1!==r&&r===n},toArray:function(e){if(!e)return null;var t=e.length;if(x(t))return null;for(var n=new Array(t);t-- >0;)n[t]=e[t];return n},isTypedArray:B,isFileList:k};function U(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var L=function(e,t,n){if(!t)return e;var r;if(n)r=n(t);else if(D.isURLSearchParams(t))r=t.toString();else{var a=[];D.forEach(t,(function(e,t){null!=e&&(D.isArray(e)?t+="[]":e=[e],D.forEach(e,(function(e){D.isDate(e)?e=e.toISOString():D.isObject(e)&&(e=JSON.stringify(e)),a.push(U(t)+"="+U(e))})))})),r=a.join("&")}if(r){var o=e.indexOf("#");-1!==o&&(e=e.slice(0,o)),e+=(-1===e.indexOf("?")?"?":"&")+r}return e};function F(){this.handlers=[]}F.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},F.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},F.prototype.forEach=function(e){D.forEach(this.handlers,(function(t){null!==t&&e(t)}))};var q=F,M=function(e,t){D.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))};function z(e,t,n,r,a){Error.call(this),this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),a&&(this.response=a)}D.inherits(z,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var I=z.prototype,H={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach((function(e){H[e]={value:e}})),Object.defineProperties(z,H),Object.defineProperty(I,"isAxiosError",{value:!0}),z.from=function(e,t,n,r,a,o){var i=Object.create(I);return D.toFlatObject(e,i,(function(e){return e!==Error.prototype})),z.call(i,e.message,t,n,r,a),i.name=e.name,o&&Object.assign(i,o),i};var J=z,W={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1};var V=function(e,t){t=t||new FormData;var n=[];function r(e){return null===e?"":D.isDate(e)?e.toISOString():D.isArrayBuffer(e)||D.isTypedArray(e)?"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}return function e(a,o){if(D.isPlainObject(a)||D.isArray(a)){if(-1!==n.indexOf(a))throw Error("Circular reference detected in "+o);n.push(a),D.forEach(a,(function(n,a){if(!D.isUndefined(n)){var i,s=o?o+"."+a:a;if(n&&!o&&"object"==typeof n)if(D.endsWith(a,"{}"))n=JSON.stringify(n);else if(D.endsWith(a,"[]")&&(i=D.toArray(n)))return void i.forEach((function(e){!D.isUndefined(e)&&t.append(s,r(e))}));e(n,s)}})),n.pop()}else t.append(o,r(a))}(e),t},Q=D.isStandardBrowserEnv()?{write:function(e,t,n,r,a,o){var i=[];i.push(e+"="+encodeURIComponent(t)),D.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),D.isString(r)&&i.push("path="+r),D.isString(a)&&i.push("domain="+a),!0===o&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},X=function(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t},$=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],K=D.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function r(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=r(window.location.href),function(t){var n=D.isString(t)?r(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0};function Y(e){J.call(this,null==e?"canceled":e,J.ERR_CANCELED),this.name="CanceledError"}D.inherits(Y,J,{__CANCEL__:!0});var G=Y,Z=function(e){return new Promise((function(t,n){var r,a=e.data,o=e.headers,i=e.responseType;function s(){e.cancelToken&&e.cancelToken.unsubscribe(r),e.signal&&e.signal.removeEventListener("abort",r)}D.isFormData(a)&&D.isStandardBrowserEnv()&&delete o["Content-Type"];var u=new XMLHttpRequest;if(e.auth){var c=e.auth.username||"",l=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(c+":"+l)}var f=X(e.baseURL,e.url);function d(){if(u){var r,a,o,c,l,f="getAllResponseHeaders"in u?(r=u.getAllResponseHeaders(),l={},r?(D.forEach(r.split("\n"),(function(e){if(c=e.indexOf(":"),a=D.trim(e.substr(0,c)).toLowerCase(),o=D.trim(e.substr(c+1)),a){if(l[a]&&$.indexOf(a)>=0)return;l[a]="set-cookie"===a?(l[a]?l[a]:[]).concat([o]):l[a]?l[a]+", "+o:o}})),l):l):null;!function(e,t,n){var r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new J("Request failed with status code "+n.status,[J.ERR_BAD_REQUEST,J.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}((function(e){t(e),s()}),(function(e){n(e),s()}),{data:i&&"text"!==i&&"json"!==i?u.response:u.responseText,status:u.status,statusText:u.statusText,headers:f,config:e,request:u}),u=null}}if(u.open(e.method.toUpperCase(),L(f,e.params,e.paramsSerializer),!0),u.timeout=e.timeout,"onloadend"in u?u.onloadend=d:u.onreadystatechange=function(){u&&4===u.readyState&&(0!==u.status||u.responseURL&&0===u.responseURL.indexOf("file:"))&&setTimeout(d)},u.onabort=function(){u&&(n(new J("Request aborted",J.ECONNABORTED,e,u)),u=null)},u.onerror=function(){n(new J("Network Error",J.ERR_NETWORK,e,u,u)),u=null},u.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",r=e.transitional||W;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new J(t,r.clarifyTimeoutError?J.ETIMEDOUT:J.ECONNABORTED,e,u)),u=null},D.isStandardBrowserEnv()){var p=(e.withCredentials||K(f))&&e.xsrfCookieName?Q.read(e.xsrfCookieName):void 0;p&&(o[e.xsrfHeaderName]=p)}"setRequestHeader"in u&&D.forEach(o,(function(e,t){void 0===a&&"content-type"===t.toLowerCase()?delete o[t]:u.setRequestHeader(t,e)})),D.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),i&&"json"!==i&&(u.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&u.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&u.upload&&u.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(r=function(e){u&&(n(!e||e&&e.type?new G:e),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(r),e.signal&&(e.signal.aborted?r():e.signal.addEventListener("abort",r))),a||(a=null);var h,m=(h=/^([-+\w]{1,25})(:?\/\/|:)/.exec(f))&&h[1]||"";m&&-1===["http","https","file"].indexOf(m)?n(new J("Unsupported protocol "+m+":",J.ERR_BAD_REQUEST,e)):u.send(a)}))},ee={"Content-Type":"application/x-www-form-urlencoded"};function te(e,t){!D.isUndefined(e)&&D.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var ne,re={transitional:W,adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(ne=Z),ne),transformRequest:[function(e,t){if(M(t,"Accept"),M(t,"Content-Type"),D.isFormData(e)||D.isArrayBuffer(e)||D.isBuffer(e)||D.isStream(e)||D.isFile(e)||D.isBlob(e))return e;if(D.isArrayBufferView(e))return e.buffer;if(D.isURLSearchParams(e))return te(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var n,r=D.isObject(e),a=t&&t["Content-Type"];if((n=D.isFileList(e))||r&&"multipart/form-data"===a){var o=this.env&&this.env.FormData;return V(n?{"files[]":e}:e,o&&new o)}return r||"application/json"===a?(te(t,"application/json"),function(e,t,n){if(D.isString(e))try{return(t||JSON.parse)(e),D.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||re.transitional,n=t&&t.silentJSONParsing,r=t&&t.forcedJSONParsing,a=!n&&"json"===this.responseType;if(a||r&&D.isString(e)&&e.length)try{return JSON.parse(e)}catch(e){if(a){if("SyntaxError"===e.name)throw J.from(e,J.ERR_BAD_RESPONSE,this,null,this.response);throw e}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:null},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};D.forEach(["delete","get","head"],(function(e){re.headers[e]={}})),D.forEach(["post","put","patch"],(function(e){re.headers[e]=D.merge(ee)}));var ae=re,oe=function(e,t,n){var r=this||ae;return D.forEach(n,(function(n){e=n.call(r,e,t)})),e},ie=function(e){return!(!e||!e.__CANCEL__)};function se(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new G}var ue=function(e){return se(e),e.headers=e.headers||{},e.data=oe.call(e,e.data,e.headers,e.transformRequest),e.headers=D.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),D.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||ae.adapter)(e).then((function(t){return se(e),t.data=oe.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return ie(t)||(se(e),t&&t.response&&(t.response.data=oe.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))},ce=function(e,t){t=t||{};var n={};function r(e,t){return D.isPlainObject(e)&&D.isPlainObject(t)?D.merge(e,t):D.isPlainObject(t)?D.merge({},t):D.isArray(t)?t.slice():t}function a(n){return D.isUndefined(t[n])?D.isUndefined(e[n])?void 0:r(void 0,e[n]):r(e[n],t[n])}function o(e){if(!D.isUndefined(t[e]))return r(void 0,t[e])}function i(n){return D.isUndefined(t[n])?D.isUndefined(e[n])?void 0:r(void 0,e[n]):r(void 0,t[n])}function s(n){return n in t?r(e[n],t[n]):n in e?r(void 0,e[n]):void 0}var u={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:s};return D.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=u[e]||a,r=t(e);D.isUndefined(r)&&t!==s||(n[e]=r)})),n},le="0.27.2",fe=le,de={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){de[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));var pe={};de.transitional=function(e,t,n){function r(e,t){return"[Axios v"+fe+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return function(n,a,o){if(!1===e)throw new J(r(a," has been removed"+(t?" in "+t:"")),J.ERR_DEPRECATED);return t&&!pe[a]&&(pe[a]=!0,console.warn(r(a," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,a,o)}};var he={assertOptions:function(e,t,n){if("object"!=typeof e)throw new J("options must be an object",J.ERR_BAD_OPTION_VALUE);for(var r=Object.keys(e),a=r.length;a-- >0;){var o=r[a],i=t[o];if(i){var s=e[o],u=void 0===s||i(s,o,e);if(!0!==u)throw new J("option "+o+" must be "+u,J.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new J("Unknown option "+o,J.ERR_BAD_OPTION)}},validators:de},me=he.validators;function ve(e){this.defaults=e,this.interceptors={request:new q,response:new q}}ve.prototype.request=function(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},(t=ce(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var n=t.transitional;void 0!==n&&he.assertOptions(n,{silentJSONParsing:me.transitional(me.boolean),forcedJSONParsing:me.transitional(me.boolean),clarifyTimeoutError:me.transitional(me.boolean)},!1);var r=[],a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,r.unshift(e.fulfilled,e.rejected))}));var o,i=[];if(this.interceptors.response.forEach((function(e){i.push(e.fulfilled,e.rejected)})),!a){var s=[ue,void 0];for(Array.prototype.unshift.apply(s,r),s=s.concat(i),o=Promise.resolve(t);s.length;)o=o.then(s.shift(),s.shift());return o}for(var u=t;r.length;){var c=r.shift(),l=r.shift();try{u=c(u)}catch(e){l(e);break}}try{o=ue(u)}catch(e){return Promise.reject(e)}for(;i.length;)o=o.then(i.shift(),i.shift());return o},ve.prototype.getUri=function(e){e=ce(this.defaults,e);var t=X(e.baseURL,e.url);return L(t,e.params,e.paramsSerializer)},D.forEach(["delete","get","head","options"],(function(e){ve.prototype[e]=function(t,n){return this.request(ce(n||{},{method:e,url:t,data:(n||{}).data}))}})),D.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,a){return this.request(ce(a||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}ve.prototype[e]=t(),ve.prototype[e+"Form"]=t(!0)}));var ge=ve;function ye(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;this.promise.then((function(e){if(n._listeners){var t,r=n._listeners.length;for(t=0;t<r;t++)n._listeners[t](e);n._listeners=null}})),this.promise.then=function(e){var t,r=new Promise((function(e){n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e){n.reason||(n.reason=new G(e),t(n.reason))}))}ye.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},ye.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},ye.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},ye.source=function(){var e;return{token:new ye((function(t){e=t})),cancel:e}};var be=ye;var Ee=function e(t){var n=new ge(t),r=g(ge.prototype.request,n);return D.extend(r,ge.prototype,n),D.extend(r,n),r.create=function(n){return e(ce(t,n))},r}(ae);Ee.Axios=ge,Ee.CanceledError=G,Ee.CancelToken=be,Ee.isCancel=ie,Ee.VERSION=le,Ee.toFormData=V,Ee.AxiosError=J,Ee.Cancel=Ee.CanceledError,Ee.all=function(e){return Promise.all(e)},Ee.spread=function(e){return function(t){return e.apply(null,t)}},Ee.isAxiosError=function(e){return D.isObject(e)&&!0===e.isAxiosError};var we=Ee,xe=Ee;we.default=xe;var Oe=we,Re={data:()=>({ayah:[],audio:null,namaSurah:null,inputnomor:""}),methods:{async submit(){let e=this.inputnomor,t=`https://api.quran.com/api/v4/quran/verses/uthmani?chapter_number=${e}`,n="https://api.quran.com/api/v4/quran/translations/134?chapter_number="+e;if(e<=0||e>114)alert("nomor surah yang dimasukkan salah!");else{const r=Oe.get(t),a=Oe.get(n),o=Oe.get("https://api.quran.com/api/v4/chapters?language=en"),i=Oe.get("https://api.quran.com/api/v4/chapter_recitations/2?language=en");Oe.all([r,a,o,i]).then(Oe.spread(((...t)=>{const n=t[0],r=t[1],a=t[2],o=t[3],i=n.data.verses,s=r.data.translations;this.ayah=((e,t)=>{const n=[];for(let r=0;r<e.length+t.length;r++)r%2==0?n.push(e[r/2]):n.push(t[(r-1)/2]);return n})(i,s),this.audio=o.data.audio_files[e-1],this.namaSurah=a.data.chapters[e-1]})))}}}};const Ae={class:"navbar navbar-expand-lg navbar-light shadow-sm mb-3",style:{"background-color":"#558268"}},Se={class:"container-fluid"},_e=n("a",{class:"navbar-brand",href:"#"},[n("img",{src:m,alt:"",width:"35",height:"35",class:"rounded-circle"}),f(" bryant ali ")],-1),je=n("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[n("span",{class:"navbar-toggler-icon"})],-1),ke={class:"collapse navbar-collapse",id:"navbarNavAltMarkup"},Te={class:"navbar-nav ms-auto"},Ce={class:"nav-item"},Ne=f("Home"),Pe={class:"nav-item"},Be=f("About Me"),De={class:"nav-item"},Ue=f("Contact Me"),Le=d('<section class="header"><div class="display-5 text-center fw-bolder"><p class="title">Al-Qur&#39;an mu</p><div class="display-6 text-center fs-6"><p class="intro fs-6">Website ini merupakan Website yang akan menampilkan bacaan Al-Qur&#39;an, mulai dari info surah, terjemahan hingga audionya.</p></div></div></section>',1),Fe={class:"search"},qe={class:"container my-5"},Me={class:"row justify-content-center"},ze={class:"col-12"},Ie={class:"card rounded shadow"},He={class:"card-header display-5 text-center fw-bolder"},Je={key:0,class:"judul"},We={key:1,class:"judul fs-1"},Ve={key:2,class:"judul fs-6 text-start fw-normal"},Qe={key:3,class:"judul fs-6 text-start fw-normal"},Xe={key:4,class:"judul fs-6 text-start fw-normal"},$e={key:5},Ke={controls:"",class:"suaraa"},Ye=["src"],Ge=f(" Browser Anda tidak mendukung elemen audio. "),Ze=n("div",{class:"bismillah"},null,-1),et=n("footer",{class:"text-dark text-center",style:{"background-color":"#558268"}},[n("p",null,[f("Created by "),n("a",{href:"https://www.instagram.com/p/CTM0kWmFHxD/?igshid=YmMyMTA2M2Y=",class:"text-dark fw-bold"},"Bryant Favian Ali")])],-1);Re.render=function(e,f,d,m,v,g){const y=p("router-link");return h(),t(c,null,[n("nav",Ae,[n("div",Se,[_e,je,n("div",ke,[n("ul",Te,[n("li",Ce,[r(y,{to:{name:"page.home"},class:"nav-link active","aria-current":"page",href:"#Home"},{default:a((()=>[Ne])),_:1},8,["to"])]),n("li",Pe,[r(y,{to:{name:"page.about"},class:"nav-link",href:"#about"},{default:a((()=>[Be])),_:1},8,["to"])]),n("li",De,[r(y,{to:{name:"page.contact"},class:"nav-link",href:"#contact"},{default:a((()=>[Ue])),_:1},8,["to"])])])])])]),Le,n("section",Fe,[o(n("input",{type:"number","onUpdate:modelValue":f[0]||(f[0]=e=>v.inputnomor=e),class:"input",placeholder:"Masukkan urutan surah"},null,512),[[i,v.inputnomor]]),n("button",{class:"btn btn-primary",onClick:f[1]||(f[1]=(...e)=>g.submit&&g.submit(...e)),type:"submit"},"Cari")]),n("section",qe,[n("div",Me,[n("div",ze,[n("div",Ie,[n("div",He,[v.namaSurah?(h(),t("p",Je,s(v.namaSurah.name_simple),1)):u("",!0),v.namaSurah?(h(),t("p",We,s(v.namaSurah.name_arabic),1)):u("",!0),v.namaSurah?(h(),t("p",Ve,"Jumlah Ayat : "+s(v.namaSurah.verses_count),1)):u("",!0),v.namaSurah?(h(),t("p",Qe,"Diturunkan di : "+s(v.namaSurah.revelation_place),1)):u("",!0),v.namaSurah?(h(),t("p",Xe,"Surah ke : "+s(v.namaSurah.revelation_order)+" diturunkan",1)):u("",!0),v.audio?(h(),t("p",$e,[n("audio",Ke,[n("source",{src:v.audio.audio_url,type:"audio/mpeg"},null,8,Ye),Ge])])):u("",!0)]),Ze,(h(!0),t(c,null,l(v.ayah,(e=>(h(),t("div",{class:"ayat",key:e.id},s(e.text_uthmani)+" "+s(e.text),1)))),128))])])])]),et],64)};export{Re as default};
