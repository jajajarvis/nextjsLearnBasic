(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{RNiq:function(e,t,n){"use strict";n.r(t);var r=n("MX0m"),i=n.n(r),o=n("q1tI"),a=n.n(o),u=n("nOHt"),c=n("miPH"),s=n.n(c);function f(){return"undefined"===typeof document||"undefined"===typeof document.visibilityState||"hidden"!==document.visibilityState}function d(){return"undefined"===typeof navigator.onLine||navigator.onLine}const l=new Map;function p(e){return l.get(e)}function h(e,t){return l.set(e,t)}const v={},g={},y={},w={},m={};const b="undefined"!==typeof window&&navigator.connection&&-1!==["slow-2g","2g"].indexOf(navigator.connection.effectiveType),O={onLoadingSlow:()=>{},onSuccess:()=>{},onError:()=>{},onErrorRetry:function(e,t,n,r,i){if(!f())return;const o=Math.min(i.retryCount||0,8),a=~~((Math.random()+.5)*(1<<o))*n.errorRetryInterval;setTimeout(r,a,i)},errorRetryInterval:1e3*(b?10:5),focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:1e3*(b?5:3),refreshInterval:0,revalidateOnFocus:!0,revalidateOnReconnect:!0,refreshWhenHidden:!1,refreshWhenOffline:!1,shouldRetryOnError:!0,suspense:!1,compare:s.a};let j=!1;if("undefined"!==typeof window&&window.addEventListener&&!j){const e=()=>{if(f()&&d())for(let e in y)y[e][0]&&y[e][0]()};window.addEventListener("visibilitychange",e,!1),window.addEventListener("focus",e,!1),j=!0}var x=O;const E=new WeakMap;let R=0;const T=Object(o.createContext)({});T.displayName="SWRConfigContext";var I=T;const L="undefined"===typeof window,S=L?o.useEffect:o.useLayoutEffect,C=e=>e?"err@"+e:"",V=e=>{let t=null;if("function"===typeof e)try{e=e()}catch(n){e=""}return Array.isArray(e)?(t=e,e=function(e){if(!e.length)return"";let t="arg";for(let n=0;n<e.length;++n){let r;null===e[n]||"object"!==typeof e[n]?r="string"===typeof e[n]?'"'+e[n]+'"':String(e[n]):E.has(e[n])?r=E.get(e[n]):(r=R,E.set(e[n],R++)),t+="@"+r}return t}(e)):e=String(e||""),[e,t]},q=(e,t,n)=>{const r=w[e];if(e&&r)for(let i=0;i<r.length;++i)r[i](!1,t,n)};I.Provider;var D=function(...e){let t,n,r={};e.length>=1&&(t=e[0]),e.length>2?(n=e[1],r=e[2]):"function"===typeof e[1]?n=e[1]:"object"===typeof e[1]&&(r=e[1]);const[i,a]=V(t),u=C(i);r=Object.assign({},x,Object(o.useContext)(I),r),"undefined"===typeof n&&(n=r.fetcher);const c=p(i)||r.initialData,s=p(u),l=Object(o.useRef)({data:!1,error:!1,isValidating:!1}),b=Object(o.useRef)({data:c,error:s,isValidating:!1}),O=Object(o.useState)(null)[1];let j=Object(o.useCallback)(e=>{let t=!1;for(let n in e)b.current[n]=e[n],l.current[n]&&(t=!0);(t||r.suspense)&&O({})},[]);const E=Object(o.useRef)(!1),R=Object(o.useRef)(i),T=Object(o.useCallback)(async(e={})=>{if(!i||!n)return!1;if(E.current)return!1;e=Object.assign({dedupe:!1},e);let t=!0,o="undefined"!==typeof v[i]&&e.dedupe;try{let e,c;if(j({isValidating:!0}),o?(c=g[i],e=await v[i]):(v[i]&&(m[i]=Date.now()-1),r.loadingTimeout&&!p(i)&&setTimeout(()=>{t&&r.onLoadingSlow(i,r)},r.loadingTimeout),v[i]=null!==a?n(...a):n(i),g[i]=c=Date.now(),e=await v[i],setTimeout(()=>{delete v[i],delete g[i]},r.dedupingInterval),r.onSuccess(e,i,r)),m[i]&&c<=m[i])return j({isValidating:!1}),!1;h(i,e),h(u,void 0),R.current=i;const s={isValidating:!1};"undefined"!==typeof b.current.error&&(s.error=void 0),r.compare(b.current.data,e)||(s.data=e),j(s),o||q(i,e,void 0)}catch(c){if(delete v[i],delete g[i],h(u,c),R.current=i,b.current.error!==c&&(j({isValidating:!1,error:c}),o||q(i,void 0,c)),r.onError(c,i,r),r.shouldRetryOnError){const t=(e.retryCount||0)+1;r.onErrorRetry(c,i,r,T,Object.assign({dedupe:!0},e,{retryCount:t}))}}return t=!1,!0},[i]);if(S(()=>{if(!i)return;E.current=!1;const e=b.current.data,t=p(i)||r.initialData;R.current===i&&r.compare(e,t)||(j({data:t}),R.current=i);const n=()=>T({dedupe:!0});let o;r.initialData||("undefined"!==typeof t&&!L&&window.requestIdleCallback?window.requestIdleCallback(n):n()),r.revalidateOnFocus&&(o=function(e,t){let n=!1;return(...r)=>{n||(n=!0,e(...r),setTimeout(()=>n=!1,t))}}(n,r.focusThrottleInterval),y[i]?y[i].push(o):y[i]=[o]);const a=(e=!0,t,o,a=!0)=>{const u={};let c=!1;return"undefined"===typeof t||r.compare(b.current.data,t)||(u.data=t,c=!0),b.current.error!==o&&(u.error=o,c=!0),c&&j(u),R.current=i,!!e&&(a?n():T())};w[i]?w[i].push(a):w[i]=[a];let u=null;return"undefined"!==typeof addEventListener&&r.revalidateOnReconnect&&(u=addEventListener("online",n)),()=>{if(j=()=>null,E.current=!0,o&&y[i]){const e=y[i],t=e.indexOf(o);t>=0&&(e[t]=e[e.length-1],e.pop())}if(w[i]){const e=w[i],t=e.indexOf(a);t>=0&&(e[t]=e[e.length-1],e.pop())}"undefined"!==typeof removeEventListener&&null!==u&&removeEventListener("online",u)}},[i,T]),S(()=>{let e=null;const t=async()=>{b.current.error||!r.refreshWhenHidden&&!f()||r.refreshWhenOffline||!d()||await T({dedupe:!0}),r.refreshInterval&&(e=setTimeout(t,r.refreshInterval))};return r.refreshInterval&&(e=setTimeout(t,r.refreshInterval)),()=>{e&&clearTimeout(e)}},[r.refreshInterval,r.refreshWhenHidden,r.refreshWhenOffline,T]),r.suspense){if(L)throw new Error("Suspense on server side is not yet supported!");let e=p(i),t=p(u);if("undefined"===typeof e&&"undefined"===typeof t){if(v[i]||T(),v[i]&&"function"===typeof v[i].then)throw v[i];e=v[i]}if("undefined"===typeof e&&t)throw t;return{error:t,data:e,revalidate:T,isValidating:b.current.isValidating}}return Object(o.useMemo)(()=>{const e={revalidate:T};return Object.defineProperties(e,{error:{get:function(){return l.current.error=!0,R.current===i?b.current.error:s}},data:{get:function(){return l.current.data=!0,R.current===i?b.current.data:c}},isValidating:{get:function(){return l.current.isValidating=!0,b.current.isValidating}}}),e},[T])};new Map;var k=D;n.d(t,"default",(function(){return M}));var N=a.a.createElement;function W(e){return fetch(e).then((function(e){return e.json()}))}function M(){var e=Object(u.useRouter)().query,t=k("/api/randomQuote".concat(e.author?"?author="+e.author:""),W),n=t.data,r=t.error,o=null===n||void 0===n?void 0:n.author,a=null===n||void 0===n?void 0:n.quote;return n||(a="Loading..."),r&&(a="Faild to fetch the quote."),N("main",{className:"jsx-1717259907 center"},N("div",{className:"jsx-1717259907 quote"},a),o&&N("span",{className:"jsx-1717259907 author"},"- ",o),N(i.a,{id:"1717259907"},["main.jsx-1717259907{width:90%;max-width:900px;margin:300px auto;text-align:center;}",".quote.jsx-1717259907{font-family:cursive;color:#e243de;font-size:24px;padding-bottom:10px;}",".author.jsx-1717259907{font-family:sans-serif;color:#559834;font-size:20px;}"]))}},miPH:function(e,t,n){"use strict";var r=Array.isArray,i=Object.keys,o=Object.prototype.hasOwnProperty;e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var a,u,c,s=r(t),f=r(n);if(s&&f){if((u=t.length)!=n.length)return!1;for(a=u;0!==a--;)if(!e(t[a],n[a]))return!1;return!0}if(s!=f)return!1;var d=t instanceof Date,l=n instanceof Date;if(d!=l)return!1;if(d&&l)return t.getTime()==n.getTime();var p=t instanceof RegExp,h=n instanceof RegExp;if(p!=h)return!1;if(p&&h)return t.toString()==n.toString();var v=i(t);if((u=v.length)!==i(n).length)return!1;for(a=u;0!==a--;)if(!o.call(n,v[a]))return!1;for(a=u;0!==a--;)if(!e(t[c=v[a]],n[c]))return!1;return!0}return t!==t&&n!==n}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",1,2,0,12]]]);