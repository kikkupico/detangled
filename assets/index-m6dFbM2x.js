(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const f of s)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&o(h)}).observe(document,{childList:!0,subtree:!0});function r(s){const f={};return s.integrity&&(f.integrity=s.integrity),s.referrerPolicy&&(f.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?f.credentials="include":s.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function o(s){if(s.ep)return;s.ep=!0;const f=r(s);fetch(s.href,f)}})();function Wp(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Us={exports:{}},Ea={};var qm;function R0(){if(qm)return Ea;qm=1;var t=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function r(o,s,f){var h=null;if(f!==void 0&&(h=""+f),s.key!==void 0&&(h=""+s.key),"key"in s){f={};for(var d in s)d!=="key"&&(f[d]=s[d])}else f=s;return s=f.ref,{$$typeof:t,type:o,key:h,ref:s!==void 0?s:null,props:f}}return Ea.Fragment=a,Ea.jsx=r,Ea.jsxs=r,Ea}var Im;function L0(){return Im||(Im=1,Us.exports=R0()),Us.exports}var P=L0(),Gs={exports:{}},ge={};var Ym;function B0(){if(Ym)return ge;Ym=1;var t=Symbol.for("react.transitional.element"),a=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),y=Symbol.for("react.activity"),S=Symbol.iterator;function _(A){return A===null||typeof A!="object"?null:(A=S&&A[S]||A["@@iterator"],typeof A=="function"?A:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,Y={};function B(A,U,w){this.props=A,this.context=U,this.refs=Y,this.updater=w||j}B.prototype.isReactComponent={},B.prototype.setState=function(A,U){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,U,"setState")},B.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function V(){}V.prototype=B.prototype;function k(A,U,w){this.props=A,this.context=U,this.refs=Y,this.updater=w||j}var Q=k.prototype=new V;Q.constructor=k,L(Q,B.prototype),Q.isPureReactComponent=!0;var ee=Array.isArray;function R(){}var K={H:null,A:null,T:null,S:null},ie=Object.prototype.hasOwnProperty;function oe(A,U,w){var $=w.ref;return{$$typeof:t,type:A,key:U,ref:$!==void 0?$:null,props:w}}function pe(A,U){return oe(A.type,U,A.props)}function ne(A){return typeof A=="object"&&A!==null&&A.$$typeof===t}function W(A){var U={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(w){return U[w]})}var Se=/\/+/g;function le(A,U){return typeof A=="object"&&A!==null&&A.key!=null?W(""+A.key):U.toString(36)}function F(A){switch(A.status){case"fulfilled":return A.value;case"rejected":throw A.reason;default:switch(typeof A.status=="string"?A.then(R,R):(A.status="pending",A.then(function(U){A.status==="pending"&&(A.status="fulfilled",A.value=U)},function(U){A.status==="pending"&&(A.status="rejected",A.reason=U)})),A.status){case"fulfilled":return A.value;case"rejected":throw A.reason}}throw A}function M(A,U,w,$,he){var se=typeof A;(se==="undefined"||se==="boolean")&&(A=null);var Ae=!1;if(A===null)Ae=!0;else switch(se){case"bigint":case"string":case"number":Ae=!0;break;case"object":switch(A.$$typeof){case t:case a:Ae=!0;break;case b:return Ae=A._init,M(Ae(A._payload),U,w,$,he)}}if(Ae)return he=he(A),Ae=$===""?"."+le(A,0):$,ee(he)?(w="",Ae!=null&&(w=Ae.replace(Se,"$&/")+"/"),M(he,U,w,"",function(Xn){return Xn})):he!=null&&(ne(he)&&(he=pe(he,w+(he.key==null||A&&A.key===he.key?"":(""+he.key).replace(Se,"$&/")+"/")+Ae)),U.push(he)),1;Ae=0;var Qe=$===""?".":$+":";if(ee(A))for(var Be=0;Be<A.length;Be++)$=A[Be],se=Qe+le($,Be),Ae+=M($,U,w,se,he);else if(Be=_(A),typeof Be=="function")for(A=Be.call(A),Be=0;!($=A.next()).done;)$=$.value,se=Qe+le($,Be++),Ae+=M($,U,w,se,he);else if(se==="object"){if(typeof A.then=="function")return M(F(A),U,w,$,he);throw U=String(A),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.")}return Ae}function X(A,U,w){if(A==null)return A;var $=[],he=0;return M(A,$,"","",function(se){return U.call(w,se,he++)}),$}function ae(A){if(A._status===-1){var U=A._result;U=U(),U.then(function(w){(A._status===0||A._status===-1)&&(A._status=1,A._result=w)},function(w){(A._status===0||A._status===-1)&&(A._status=2,A._result=w)}),A._status===-1&&(A._status=0,A._result=U)}if(A._status===1)return A._result.default;throw A._result}var be=typeof reportError=="function"?reportError:function(A){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var U=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof A=="object"&&A!==null&&typeof A.message=="string"?String(A.message):String(A),error:A});if(!window.dispatchEvent(U))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",A);return}console.error(A)},x={map:X,forEach:function(A,U,w){X(A,function(){U.apply(this,arguments)},w)},count:function(A){var U=0;return X(A,function(){U++}),U},toArray:function(A){return X(A,function(U){return U})||[]},only:function(A){if(!ne(A))throw Error("React.Children.only expected to receive a single React element child.");return A}};return ge.Activity=y,ge.Children=x,ge.Component=B,ge.Fragment=r,ge.Profiler=s,ge.PureComponent=k,ge.StrictMode=o,ge.Suspense=g,ge.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=K,ge.__COMPILER_RUNTIME={__proto__:null,c:function(A){return K.H.useMemoCache(A)}},ge.cache=function(A){return function(){return A.apply(null,arguments)}},ge.cacheSignal=function(){return null},ge.cloneElement=function(A,U,w){if(A==null)throw Error("The argument must be a React element, but you passed "+A+".");var $=L({},A.props),he=A.key;if(U!=null)for(se in U.key!==void 0&&(he=""+U.key),U)!ie.call(U,se)||se==="key"||se==="__self"||se==="__source"||se==="ref"&&U.ref===void 0||($[se]=U[se]);var se=arguments.length-2;if(se===1)$.children=w;else if(1<se){for(var Ae=Array(se),Qe=0;Qe<se;Qe++)Ae[Qe]=arguments[Qe+2];$.children=Ae}return oe(A.type,he,$)},ge.createContext=function(A){return A={$$typeof:h,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null},A.Provider=A,A.Consumer={$$typeof:f,_context:A},A},ge.createElement=function(A,U,w){var $,he={},se=null;if(U!=null)for($ in U.key!==void 0&&(se=""+U.key),U)ie.call(U,$)&&$!=="key"&&$!=="__self"&&$!=="__source"&&(he[$]=U[$]);var Ae=arguments.length-2;if(Ae===1)he.children=w;else if(1<Ae){for(var Qe=Array(Ae),Be=0;Be<Ae;Be++)Qe[Be]=arguments[Be+2];he.children=Qe}if(A&&A.defaultProps)for($ in Ae=A.defaultProps,Ae)he[$]===void 0&&(he[$]=Ae[$]);return oe(A,se,he)},ge.createRef=function(){return{current:null}},ge.forwardRef=function(A){return{$$typeof:d,render:A}},ge.isValidElement=ne,ge.lazy=function(A){return{$$typeof:b,_payload:{_status:-1,_result:A},_init:ae}},ge.memo=function(A,U){return{$$typeof:p,type:A,compare:U===void 0?null:U}},ge.startTransition=function(A){var U=K.T,w={};K.T=w;try{var $=A(),he=K.S;he!==null&&he(w,$),typeof $=="object"&&$!==null&&typeof $.then=="function"&&$.then(R,be)}catch(se){be(se)}finally{U!==null&&w.types!==null&&(U.types=w.types),K.T=U}},ge.unstable_useCacheRefresh=function(){return K.H.useCacheRefresh()},ge.use=function(A){return K.H.use(A)},ge.useActionState=function(A,U,w){return K.H.useActionState(A,U,w)},ge.useCallback=function(A,U){return K.H.useCallback(A,U)},ge.useContext=function(A){return K.H.useContext(A)},ge.useDebugValue=function(){},ge.useDeferredValue=function(A,U){return K.H.useDeferredValue(A,U)},ge.useEffect=function(A,U){return K.H.useEffect(A,U)},ge.useEffectEvent=function(A){return K.H.useEffectEvent(A)},ge.useId=function(){return K.H.useId()},ge.useImperativeHandle=function(A,U,w){return K.H.useImperativeHandle(A,U,w)},ge.useInsertionEffect=function(A,U){return K.H.useInsertionEffect(A,U)},ge.useLayoutEffect=function(A,U){return K.H.useLayoutEffect(A,U)},ge.useMemo=function(A,U){return K.H.useMemo(A,U)},ge.useOptimistic=function(A,U){return K.H.useOptimistic(A,U)},ge.useReducer=function(A,U,w){return K.H.useReducer(A,U,w)},ge.useRef=function(A){return K.H.useRef(A)},ge.useState=function(A){return K.H.useState(A)},ge.useSyncExternalStore=function(A,U,w){return K.H.useSyncExternalStore(A,U,w)},ge.useTransition=function(){return K.H.useTransition()},ge.version="19.2.4",ge}var Fm;function xc(){return Fm||(Fm=1,Gs.exports=B0()),Gs.exports}var Me=xc(),qs={exports:{}},ka={},Is={exports:{}},Ys={};var Vm;function H0(){return Vm||(Vm=1,(function(t){function a(M,X){var ae=M.length;M.push(X);e:for(;0<ae;){var be=ae-1>>>1,x=M[be];if(0<s(x,X))M[be]=X,M[ae]=x,ae=be;else break e}}function r(M){return M.length===0?null:M[0]}function o(M){if(M.length===0)return null;var X=M[0],ae=M.pop();if(ae!==X){M[0]=ae;e:for(var be=0,x=M.length,A=x>>>1;be<A;){var U=2*(be+1)-1,w=M[U],$=U+1,he=M[$];if(0>s(w,ae))$<x&&0>s(he,w)?(M[be]=he,M[$]=ae,be=$):(M[be]=w,M[U]=ae,be=U);else if($<x&&0>s(he,ae))M[be]=he,M[$]=ae,be=$;else break e}}return X}function s(M,X){var ae=M.sortIndex-X.sortIndex;return ae!==0?ae:M.id-X.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;t.unstable_now=function(){return f.now()}}else{var h=Date,d=h.now();t.unstable_now=function(){return h.now()-d}}var g=[],p=[],b=1,y=null,S=3,_=!1,j=!1,L=!1,Y=!1,B=typeof setTimeout=="function"?setTimeout:null,V=typeof clearTimeout=="function"?clearTimeout:null,k=typeof setImmediate<"u"?setImmediate:null;function Q(M){for(var X=r(p);X!==null;){if(X.callback===null)o(p);else if(X.startTime<=M)o(p),X.sortIndex=X.expirationTime,a(g,X);else break;X=r(p)}}function ee(M){if(L=!1,Q(M),!j)if(r(g)!==null)j=!0,R||(R=!0,W());else{var X=r(p);X!==null&&F(ee,X.startTime-M)}}var R=!1,K=-1,ie=5,oe=-1;function pe(){return Y?!0:!(t.unstable_now()-oe<ie)}function ne(){if(Y=!1,R){var M=t.unstable_now();oe=M;var X=!0;try{e:{j=!1,L&&(L=!1,V(K),K=-1),_=!0;var ae=S;try{n:{for(Q(M),y=r(g);y!==null&&!(y.expirationTime>M&&pe());){var be=y.callback;if(typeof be=="function"){y.callback=null,S=y.priorityLevel;var x=be(y.expirationTime<=M);if(M=t.unstable_now(),typeof x=="function"){y.callback=x,Q(M),X=!0;break n}y===r(g)&&o(g),Q(M)}else o(g);y=r(g)}if(y!==null)X=!0;else{var A=r(p);A!==null&&F(ee,A.startTime-M),X=!1}}break e}finally{y=null,S=ae,_=!1}X=void 0}}finally{X?W():R=!1}}}var W;if(typeof k=="function")W=function(){k(ne)};else if(typeof MessageChannel<"u"){var Se=new MessageChannel,le=Se.port2;Se.port1.onmessage=ne,W=function(){le.postMessage(null)}}else W=function(){B(ne,0)};function F(M,X){K=B(function(){M(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(M){M.callback=null},t.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ie=0<M?Math.floor(1e3/M):5},t.unstable_getCurrentPriorityLevel=function(){return S},t.unstable_next=function(M){switch(S){case 1:case 2:case 3:var X=3;break;default:X=S}var ae=S;S=X;try{return M()}finally{S=ae}},t.unstable_requestPaint=function(){Y=!0},t.unstable_runWithPriority=function(M,X){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var ae=S;S=M;try{return X()}finally{S=ae}},t.unstable_scheduleCallback=function(M,X,ae){var be=t.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?be+ae:be):ae=be,M){case 1:var x=-1;break;case 2:x=250;break;case 5:x=1073741823;break;case 4:x=1e4;break;default:x=5e3}return x=ae+x,M={id:b++,callback:X,priorityLevel:M,startTime:ae,expirationTime:x,sortIndex:-1},ae>be?(M.sortIndex=ae,a(p,M),r(g)===null&&M===r(p)&&(L?(V(K),K=-1):L=!0,F(ee,ae-be))):(M.sortIndex=x,a(g,M),j||_||(j=!0,R||(R=!0,W()))),M},t.unstable_shouldYield=pe,t.unstable_wrapCallback=function(M){var X=S;return function(){var ae=S;S=X;try{return M.apply(this,arguments)}finally{S=ae}}}})(Ys)),Ys}var Xm;function U0(){return Xm||(Xm=1,Is.exports=H0()),Is.exports}var Fs={exports:{}},yn={};var Qm;function G0(){if(Qm)return yn;Qm=1;var t=xc();function a(g){var p="https://react.dev/errors/"+g;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)p+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+g+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var o={d:{f:r,r:function(){throw Error(a(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},s=Symbol.for("react.portal");function f(g,p,b){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:y==null?null:""+y,children:g,containerInfo:p,implementation:b}}var h=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(g,p){if(g==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return yn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,yn.createPortal=function(g,p){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(a(299));return f(g,p,null,b)},yn.flushSync=function(g){var p=h.T,b=o.p;try{if(h.T=null,o.p=2,g)return g()}finally{h.T=p,o.p=b,o.d.f()}},yn.preconnect=function(g,p){typeof g=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,o.d.C(g,p))},yn.prefetchDNS=function(g){typeof g=="string"&&o.d.D(g)},yn.preinit=function(g,p){if(typeof g=="string"&&p&&typeof p.as=="string"){var b=p.as,y=d(b,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,_=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;b==="style"?o.d.S(g,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:y,integrity:S,fetchPriority:_}):b==="script"&&o.d.X(g,{crossOrigin:y,integrity:S,fetchPriority:_,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},yn.preinitModule=function(g,p){if(typeof g=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var b=d(p.as,p.crossOrigin);o.d.M(g,{crossOrigin:b,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&o.d.M(g)},yn.preload=function(g,p){if(typeof g=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var b=p.as,y=d(b,p.crossOrigin);o.d.L(g,b,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},yn.preloadModule=function(g,p){if(typeof g=="string")if(p){var b=d(p.as,p.crossOrigin);o.d.m(g,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:b,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else o.d.m(g)},yn.requestFormReset=function(g){o.d.r(g)},yn.unstable_batchedUpdates=function(g,p){return g(p)},yn.useFormState=function(g,p,b){return h.H.useFormState(g,p,b)},yn.useFormStatus=function(){return h.H.useHostTransitionStatus()},yn.version="19.2.4",yn}var Km;function q0(){if(Km)return Fs.exports;Km=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(a){console.error(a)}}return t(),Fs.exports=G0(),Fs.exports}var Zm;function I0(){if(Zm)return ka;Zm=1;var t=U0(),a=xc(),r=q0();function o(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)n+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var n=e,i=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(i=n.return),e=n.return;while(e)}return n.tag===3?i:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function g(e){if(f(e)!==e)throw Error(o(188))}function p(e){var n=e.alternate;if(!n){if(n=f(e),n===null)throw Error(o(188));return n!==e?null:e}for(var i=e,l=n;;){var u=i.return;if(u===null)break;var c=u.alternate;if(c===null){if(l=u.return,l!==null){i=l;continue}break}if(u.child===c.child){for(c=u.child;c;){if(c===i)return g(u),e;if(c===l)return g(u),n;c=c.sibling}throw Error(o(188))}if(i.return!==l.return)i=u,l=c;else{for(var m=!1,v=u.child;v;){if(v===i){m=!0,i=u,l=c;break}if(v===l){m=!0,l=u,i=c;break}v=v.sibling}if(!m){for(v=c.child;v;){if(v===i){m=!0,i=c,l=u;break}if(v===l){m=!0,l=c,i=u;break}v=v.sibling}if(!m)throw Error(o(189))}}if(i.alternate!==l)throw Error(o(190))}if(i.tag!==3)throw Error(o(188));return i.stateNode.current===i?e:n}function b(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=b(e),n!==null)return n;e=e.sibling}return null}var y=Object.assign,S=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),j=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),V=Symbol.for("react.consumer"),k=Symbol.for("react.context"),Q=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),R=Symbol.for("react.suspense_list"),K=Symbol.for("react.memo"),ie=Symbol.for("react.lazy"),oe=Symbol.for("react.activity"),pe=Symbol.for("react.memo_cache_sentinel"),ne=Symbol.iterator;function W(e){return e===null||typeof e!="object"?null:(e=ne&&e[ne]||e["@@iterator"],typeof e=="function"?e:null)}var Se=Symbol.for("react.client.reference");function le(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Se?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case L:return"Fragment";case B:return"Profiler";case Y:return"StrictMode";case ee:return"Suspense";case R:return"SuspenseList";case oe:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case j:return"Portal";case k:return e.displayName||"Context";case V:return(e._context.displayName||"Context")+".Consumer";case Q:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case K:return n=e.displayName||null,n!==null?n:le(e.type)||"Memo";case ie:n=e._payload,e=e._init;try{return le(e(n))}catch{}}return null}var F=Array.isArray,M=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae={pending:!1,data:null,method:null,action:null},be=[],x=-1;function A(e){return{current:e}}function U(e){0>x||(e.current=be[x],be[x]=null,x--)}function w(e,n){x++,be[x]=e.current,e.current=n}var $=A(null),he=A(null),se=A(null),Ae=A(null);function Qe(e,n){switch(w(se,n),w(he,e),w($,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?cm(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=cm(n),e=fm(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}U($),w($,e)}function Be(){U($),U(he),U(se)}function Xn(e){e.memoizedState!==null&&w(Ae,e);var n=$.current,i=fm(n,e.type);n!==i&&(w(he,e),w($,i))}function gt(e){he.current===e&&(U($),U(he)),Ae.current===e&&(U(Ae),wa._currentValue=ae)}var zl,Ya;function yt(e){if(zl===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);zl=n&&n[1]||"",Ya=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+zl+e+Ya}var zi=!1;function Oi(e,n){if(!e||zi)return"";zi=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(n){var I=function(){throw Error()};if(Object.defineProperty(I.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(I,[])}catch(O){var z=O}Reflect.construct(e,[],I)}else{try{I.call()}catch(O){z=O}e.call(I.prototype)}}else{try{throw Error()}catch(O){z=O}(I=e())&&typeof I.catch=="function"&&I.catch(function(){})}}catch(O){if(O&&z&&typeof O.stack=="string")return[O.stack,z.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=l.DetermineComponentFrameRoot(),m=c[0],v=c[1];if(m&&v){var T=m.split(`
`),D=v.split(`
`);for(u=l=0;l<T.length&&!T[l].includes("DetermineComponentFrameRoot");)l++;for(;u<D.length&&!D[u].includes("DetermineComponentFrameRoot");)u++;if(l===T.length||u===D.length)for(l=T.length-1,u=D.length-1;1<=l&&0<=u&&T[l]!==D[u];)u--;for(;1<=l&&0<=u;l--,u--)if(T[l]!==D[u]){if(l!==1||u!==1)do if(l--,u--,0>u||T[l]!==D[u]){var H=`
`+T[l].replace(" at new "," at ");return e.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",e.displayName)),H}while(1<=l&&0<=u);break}}}finally{zi=!1,Error.prepareStackTrace=i}return(i=e?e.displayName||e.name:"")?yt(i):""}function Fa(e,n){switch(e.tag){case 26:case 27:case 5:return yt(e.type);case 16:return yt("Lazy");case 13:return e.child!==n&&n!==null?yt("Suspense Fallback"):yt("Suspense");case 19:return yt("SuspenseList");case 0:case 15:return Oi(e.type,!1);case 11:return Oi(e.type.render,!1);case 1:return Oi(e.type,!0);case 31:return yt("Activity");default:return""}}function Va(e){try{var n="",i=null;do n+=Fa(e,i),i=e,e=e.return;while(e);return n}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Ri=Object.prototype.hasOwnProperty,Li=t.unstable_scheduleCallback,Ol=t.unstable_cancelCallback,To=t.unstable_shouldYield,Ao=t.unstable_requestPaint,_n=t.unstable_now,Eo=t.unstable_getCurrentPriorityLevel,G=t.unstable_ImmediatePriority,J=t.unstable_UserBlockingPriority,de=t.unstable_NormalPriority,we=t.unstable_LowPriority,Oe=t.unstable_IdlePriority,Ln=t.log,bt=t.unstable_setDisableYieldValue,Sn=null,rn=null;function Tn(e){if(typeof Ln=="function"&&bt(e),rn&&typeof rn.setStrictMode=="function")try{rn.setStrictMode(Sn,e)}catch{}}var qe=Math.clz32?Math.clz32:Sy,Ht=Math.log,lt=Math.LN2;function Sy(e){return e>>>=0,e===0?32:31-(Ht(e)/lt|0)|0}var Xa=256,Qa=262144,Ka=4194304;function di(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Za(e,n,i){var l=e.pendingLanes;if(l===0)return 0;var u=0,c=e.suspendedLanes,m=e.pingedLanes;e=e.warmLanes;var v=l&134217727;return v!==0?(l=v&~c,l!==0?u=di(l):(m&=v,m!==0?u=di(m):i||(i=v&~e,i!==0&&(u=di(i))))):(v=l&~c,v!==0?u=di(v):m!==0?u=di(m):i||(i=l&~e,i!==0&&(u=di(i)))),u===0?0:n!==0&&n!==u&&(n&c)===0&&(c=u&-u,i=n&-n,c>=i||c===32&&(i&4194048)!==0)?n:u}function Rl(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function wy(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fc(){var e=Ka;return Ka<<=1,(Ka&62914560)===0&&(Ka=4194304),e}function ko(e){for(var n=[],i=0;31>i;i++)n.push(e);return n}function Ll(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function xy(e,n,i,l,u,c){var m=e.pendingLanes;e.pendingLanes=i,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=i,e.entangledLanes&=i,e.errorRecoveryDisabledLanes&=i,e.shellSuspendCounter=0;var v=e.entanglements,T=e.expirationTimes,D=e.hiddenUpdates;for(i=m&~i;0<i;){var H=31-qe(i),I=1<<H;v[H]=0,T[H]=-1;var z=D[H];if(z!==null)for(D[H]=null,H=0;H<z.length;H++){var O=z[H];O!==null&&(O.lane&=-536870913)}i&=~I}l!==0&&Vc(e,l,0),c!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=c&~(m&~n))}function Vc(e,n,i){e.pendingLanes|=n,e.suspendedLanes&=~n;var l=31-qe(n);e.entangledLanes|=n,e.entanglements[l]=e.entanglements[l]|1073741824|i&261930}function Xc(e,n){var i=e.entangledLanes|=n;for(e=e.entanglements;i;){var l=31-qe(i),u=1<<l;u&n|e[l]&n&&(e[l]|=n),i&=~u}}function Qc(e,n){var i=n&-n;return i=(i&42)!==0?1:Co(i),(i&(e.suspendedLanes|n))!==0?0:i}function Co(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Mo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Kc(){var e=X.p;return e!==0?e:(e=window.event,e===void 0?32:Om(e.type))}function Zc(e,n){var i=X.p;try{return X.p=e,n()}finally{X.p=i}}var Ut=Math.random().toString(36).slice(2),fn="__reactFiber$"+Ut,An="__reactProps$"+Ut,Bi="__reactContainer$"+Ut,No="__reactEvents$"+Ut,Ty="__reactListeners$"+Ut,Ay="__reactHandles$"+Ut,Jc="__reactResources$"+Ut,Bl="__reactMarker$"+Ut;function Do(e){delete e[fn],delete e[An],delete e[No],delete e[Ty],delete e[Ay]}function Hi(e){var n=e[fn];if(n)return n;for(var i=e.parentNode;i;){if(n=i[Bi]||i[fn]){if(i=n.alternate,n.child!==null||i!==null&&i.child!==null)for(e=bm(e);e!==null;){if(i=e[fn])return i;e=bm(e)}return n}e=i,i=e.parentNode}return null}function Ui(e){if(e=e[fn]||e[Bi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Hl(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(o(33))}function Gi(e){var n=e[Jc];return n||(n=e[Jc]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function sn(e){e[Bl]=!0}var Wc=new Set,Pc={};function mi(e,n){qi(e,n),qi(e+"Capture",n)}function qi(e,n){for(Pc[e]=n,e=0;e<n.length;e++)Wc.add(n[e])}var Ey=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$c={},ef={};function ky(e){return Ri.call(ef,e)?!0:Ri.call($c,e)?!1:Ey.test(e)?ef[e]=!0:($c[e]=!0,!1)}function Ja(e,n,i){if(ky(n))if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var l=n.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+i)}}function Wa(e,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+i)}}function vt(e,n,i,l){if(l===null)e.removeAttribute(i);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttributeNS(n,i,""+l)}}function Qn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function nf(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Cy(e,n,i){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var u=l.get,c=l.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(m){i=""+m,c.call(this,m)}}),Object.defineProperty(e,n,{enumerable:l.enumerable}),{getValue:function(){return i},setValue:function(m){i=""+m},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function jo(e){if(!e._valueTracker){var n=nf(e)?"checked":"value";e._valueTracker=Cy(e,n,""+e[n])}}function tf(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var i=n.getValue(),l="";return e&&(l=nf(e)?e.checked?"true":"false":e.value),e=l,e!==i?(n.setValue(e),!0):!1}function Pa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var My=/[\n"\\]/g;function Kn(e){return e.replace(My,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function zo(e,n,i,l,u,c,m,v){e.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.type=m:e.removeAttribute("type"),n!=null?m==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Qn(n)):e.value!==""+Qn(n)&&(e.value=""+Qn(n)):m!=="submit"&&m!=="reset"||e.removeAttribute("value"),n!=null?Oo(e,m,Qn(n)):i!=null?Oo(e,m,Qn(i)):l!=null&&e.removeAttribute("value"),u==null&&c!=null&&(e.defaultChecked=!!c),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.name=""+Qn(v):e.removeAttribute("name")}function lf(e,n,i,l,u,c,m,v){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),n!=null||i!=null){if(!(c!=="submit"&&c!=="reset"||n!=null)){jo(e);return}i=i!=null?""+Qn(i):"",n=n!=null?""+Qn(n):i,v||n===e.value||(e.value=n),e.defaultValue=n}l=l??u,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=v?e.checked:!!l,e.defaultChecked=!!l,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.name=m),jo(e)}function Oo(e,n,i){n==="number"&&Pa(e.ownerDocument)===e||e.defaultValue===""+i||(e.defaultValue=""+i)}function Ii(e,n,i,l){if(e=e.options,n){n={};for(var u=0;u<i.length;u++)n["$"+i[u]]=!0;for(i=0;i<e.length;i++)u=n.hasOwnProperty("$"+e[i].value),e[i].selected!==u&&(e[i].selected=u),u&&l&&(e[i].defaultSelected=!0)}else{for(i=""+Qn(i),n=null,u=0;u<e.length;u++){if(e[u].value===i){e[u].selected=!0,l&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function af(e,n,i){if(n!=null&&(n=""+Qn(n),n!==e.value&&(e.value=n),i==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=i!=null?""+Qn(i):""}function rf(e,n,i,l){if(n==null){if(l!=null){if(i!=null)throw Error(o(92));if(F(l)){if(1<l.length)throw Error(o(93));l=l[0]}i=l}i==null&&(i=""),n=i}i=Qn(n),e.defaultValue=i,l=e.textContent,l===i&&l!==""&&l!==null&&(e.value=l),jo(e)}function Yi(e,n){if(n){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=n;return}}e.textContent=n}var Ny=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function of(e,n,i){var l=n.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?l?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":l?e.setProperty(n,i):typeof i!="number"||i===0||Ny.has(n)?n==="float"?e.cssFloat=i:e[n]=(""+i).trim():e[n]=i+"px"}function uf(e,n,i){if(n!=null&&typeof n!="object")throw Error(o(62));if(e=e.style,i!=null){for(var l in i)!i.hasOwnProperty(l)||n!=null&&n.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var u in n)l=n[u],n.hasOwnProperty(u)&&i[u]!==l&&of(e,u,l)}else for(var c in n)n.hasOwnProperty(c)&&of(e,c,n[c])}function Ro(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),jy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function $a(e){return jy.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function _t(){}var Lo=null;function Bo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fi=null,Vi=null;function sf(e){var n=Ui(e);if(n&&(e=n.stateNode)){var i=e[An]||null;e:switch(e=n.stateNode,n.type){case"input":if(zo(e,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),n=i.name,i.type==="radio"&&n!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+Kn(""+n)+'"][type="radio"]'),n=0;n<i.length;n++){var l=i[n];if(l!==e&&l.form===e.form){var u=l[An]||null;if(!u)throw Error(o(90));zo(l,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<i.length;n++)l=i[n],l.form===e.form&&tf(l)}break e;case"textarea":af(e,i.value,i.defaultValue);break e;case"select":n=i.value,n!=null&&Ii(e,!!i.multiple,n,!1)}}}var Ho=!1;function cf(e,n,i){if(Ho)return e(n,i);Ho=!0;try{var l=e(n);return l}finally{if(Ho=!1,(Fi!==null||Vi!==null)&&(Gr(),Fi&&(n=Fi,e=Vi,Vi=Fi=null,sf(n),e)))for(n=0;n<e.length;n++)sf(e[n])}}function Ul(e,n){var i=e.stateNode;if(i===null)return null;var l=i[An]||null;if(l===null)return null;i=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(o(231,n,typeof i));return i}var St=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Uo=!1;if(St)try{var Gl={};Object.defineProperty(Gl,"passive",{get:function(){Uo=!0}}),window.addEventListener("test",Gl,Gl),window.removeEventListener("test",Gl,Gl)}catch{Uo=!1}var Gt=null,Go=null,er=null;function ff(){if(er)return er;var e,n=Go,i=n.length,l,u="value"in Gt?Gt.value:Gt.textContent,c=u.length;for(e=0;e<i&&n[e]===u[e];e++);var m=i-e;for(l=1;l<=m&&n[i-l]===u[c-l];l++);return er=u.slice(e,1<l?1-l:void 0)}function nr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function tr(){return!0}function hf(){return!1}function En(e){function n(i,l,u,c,m){this._reactName=i,this._targetInst=u,this.type=l,this.nativeEvent=c,this.target=m,this.currentTarget=null;for(var v in e)e.hasOwnProperty(v)&&(i=e[v],this[v]=i?i(c):c[v]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?tr:hf,this.isPropagationStopped=hf,this}return y(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=tr)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=tr)},persist:function(){},isPersistent:tr}),n}var pi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ir=En(pi),ql=y({},pi,{view:0,detail:0}),zy=En(ql),qo,Io,Il,lr=y({},ql,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Il&&(Il&&e.type==="mousemove"?(qo=e.screenX-Il.screenX,Io=e.screenY-Il.screenY):Io=qo=0,Il=e),qo)},movementY:function(e){return"movementY"in e?e.movementY:Io}}),df=En(lr),Oy=y({},lr,{dataTransfer:0}),Ry=En(Oy),Ly=y({},ql,{relatedTarget:0}),Yo=En(Ly),By=y({},pi,{animationName:0,elapsedTime:0,pseudoElement:0}),Hy=En(By),Uy=y({},pi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Gy=En(Uy),qy=y({},pi,{data:0}),mf=En(qy),Iy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vy(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Fy[e])?!!n[e]:!1}function Fo(){return Vy}var Xy=y({},ql,{key:function(e){if(e.key){var n=Iy[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=nr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Yy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fo,charCode:function(e){return e.type==="keypress"?nr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?nr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Qy=En(Xy),Ky=y({},lr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pf=En(Ky),Zy=y({},ql,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fo}),Jy=En(Zy),Wy=y({},pi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Py=En(Wy),$y=y({},lr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),eb=En($y),nb=y({},pi,{newState:0,oldState:0}),tb=En(nb),ib=[9,13,27,32],Vo=St&&"CompositionEvent"in window,Yl=null;St&&"documentMode"in document&&(Yl=document.documentMode);var lb=St&&"TextEvent"in window&&!Yl,gf=St&&(!Vo||Yl&&8<Yl&&11>=Yl),yf=" ",bf=!1;function vf(e,n){switch(e){case"keyup":return ib.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _f(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xi=!1;function ab(e,n){switch(e){case"compositionend":return _f(n);case"keypress":return n.which!==32?null:(bf=!0,yf);case"textInput":return e=n.data,e===yf&&bf?null:e;default:return null}}function rb(e,n){if(Xi)return e==="compositionend"||!Vo&&vf(e,n)?(e=ff(),er=Go=Gt=null,Xi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return gf&&n.locale!=="ko"?null:n.data;default:return null}}var ob={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sf(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!ob[e.type]:n==="textarea"}function wf(e,n,i,l){Fi?Vi?Vi.push(l):Vi=[l]:Fi=l,n=Qr(n,"onChange"),0<n.length&&(i=new ir("onChange","change",null,i,l),e.push({event:i,listeners:n}))}var Fl=null,Vl=null;function ub(e){lm(e,0)}function ar(e){var n=Hl(e);if(tf(n))return e}function xf(e,n){if(e==="change")return n}var Tf=!1;if(St){var Xo;if(St){var Qo="oninput"in document;if(!Qo){var Af=document.createElement("div");Af.setAttribute("oninput","return;"),Qo=typeof Af.oninput=="function"}Xo=Qo}else Xo=!1;Tf=Xo&&(!document.documentMode||9<document.documentMode)}function Ef(){Fl&&(Fl.detachEvent("onpropertychange",kf),Vl=Fl=null)}function kf(e){if(e.propertyName==="value"&&ar(Vl)){var n=[];wf(n,Vl,e,Bo(e)),cf(ub,n)}}function sb(e,n,i){e==="focusin"?(Ef(),Fl=n,Vl=i,Fl.attachEvent("onpropertychange",kf)):e==="focusout"&&Ef()}function cb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ar(Vl)}function fb(e,n){if(e==="click")return ar(n)}function hb(e,n){if(e==="input"||e==="change")return ar(n)}function db(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Bn=typeof Object.is=="function"?Object.is:db;function Xl(e,n){if(Bn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var i=Object.keys(e),l=Object.keys(n);if(i.length!==l.length)return!1;for(l=0;l<i.length;l++){var u=i[l];if(!Ri.call(n,u)||!Bn(e[u],n[u]))return!1}return!0}function Cf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Mf(e,n){var i=Cf(e);e=0;for(var l;i;){if(i.nodeType===3){if(l=e+i.textContent.length,e<=n&&l>=n)return{node:i,offset:n-e};e=l}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=Cf(i)}}function Nf(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Nf(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Df(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Pa(e.document);n instanceof e.HTMLIFrameElement;){try{var i=typeof n.contentWindow.location.href=="string"}catch{i=!1}if(i)e=n.contentWindow;else break;n=Pa(e.document)}return n}function Ko(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var mb=St&&"documentMode"in document&&11>=document.documentMode,Qi=null,Zo=null,Ql=null,Jo=!1;function jf(e,n,i){var l=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Jo||Qi==null||Qi!==Pa(l)||(l=Qi,"selectionStart"in l&&Ko(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Ql&&Xl(Ql,l)||(Ql=l,l=Qr(Zo,"onSelect"),0<l.length&&(n=new ir("onSelect","select",null,n,i),e.push({event:n,listeners:l}),n.target=Qi)))}function gi(e,n){var i={};return i[e.toLowerCase()]=n.toLowerCase(),i["Webkit"+e]="webkit"+n,i["Moz"+e]="moz"+n,i}var Ki={animationend:gi("Animation","AnimationEnd"),animationiteration:gi("Animation","AnimationIteration"),animationstart:gi("Animation","AnimationStart"),transitionrun:gi("Transition","TransitionRun"),transitionstart:gi("Transition","TransitionStart"),transitioncancel:gi("Transition","TransitionCancel"),transitionend:gi("Transition","TransitionEnd")},Wo={},zf={};St&&(zf=document.createElement("div").style,"AnimationEvent"in window||(delete Ki.animationend.animation,delete Ki.animationiteration.animation,delete Ki.animationstart.animation),"TransitionEvent"in window||delete Ki.transitionend.transition);function yi(e){if(Wo[e])return Wo[e];if(!Ki[e])return e;var n=Ki[e],i;for(i in n)if(n.hasOwnProperty(i)&&i in zf)return Wo[e]=n[i];return e}var Of=yi("animationend"),Rf=yi("animationiteration"),Lf=yi("animationstart"),pb=yi("transitionrun"),gb=yi("transitionstart"),yb=yi("transitioncancel"),Bf=yi("transitionend"),Hf=new Map,Po="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Po.push("scrollEnd");function at(e,n){Hf.set(e,n),mi(n,[e])}var rr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Zn=[],Zi=0,$o=0;function or(){for(var e=Zi,n=$o=Zi=0;n<e;){var i=Zn[n];Zn[n++]=null;var l=Zn[n];Zn[n++]=null;var u=Zn[n];Zn[n++]=null;var c=Zn[n];if(Zn[n++]=null,l!==null&&u!==null){var m=l.pending;m===null?u.next=u:(u.next=m.next,m.next=u),l.pending=u}c!==0&&Uf(i,u,c)}}function ur(e,n,i,l){Zn[Zi++]=e,Zn[Zi++]=n,Zn[Zi++]=i,Zn[Zi++]=l,$o|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function eu(e,n,i,l){return ur(e,n,i,l),sr(e)}function bi(e,n){return ur(e,null,null,n),sr(e)}function Uf(e,n,i){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i);for(var u=!1,c=e.return;c!==null;)c.childLanes|=i,l=c.alternate,l!==null&&(l.childLanes|=i),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(u=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,u&&n!==null&&(u=31-qe(i),e=c.hiddenUpdates,l=e[u],l===null?e[u]=[n]:l.push(n),n.lane=i|536870912),c):null}function sr(e){if(50<pa)throw pa=0,ss=null,Error(o(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Ji={};function bb(e,n,i,l){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Hn(e,n,i,l){return new bb(e,n,i,l)}function nu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function wt(e,n){var i=e.alternate;return i===null?(i=Hn(e.tag,n,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=n,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&65011712,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,n=e.dependencies,i.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i.refCleanup=e.refCleanup,i}function Gf(e,n){e.flags&=65011714;var i=e.alternate;return i===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=i.childLanes,e.lanes=i.lanes,e.child=i.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=i.memoizedProps,e.memoizedState=i.memoizedState,e.updateQueue=i.updateQueue,e.type=i.type,n=i.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function cr(e,n,i,l,u,c){var m=0;if(l=e,typeof e=="function")nu(e)&&(m=1);else if(typeof e=="string")m=x0(e,i,$.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case oe:return e=Hn(31,i,n,u),e.elementType=oe,e.lanes=c,e;case L:return vi(i.children,u,c,n);case Y:m=8,u|=24;break;case B:return e=Hn(12,i,n,u|2),e.elementType=B,e.lanes=c,e;case ee:return e=Hn(13,i,n,u),e.elementType=ee,e.lanes=c,e;case R:return e=Hn(19,i,n,u),e.elementType=R,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case k:m=10;break e;case V:m=9;break e;case Q:m=11;break e;case K:m=14;break e;case ie:m=16,l=null;break e}m=29,i=Error(o(130,e===null?"null":typeof e,"")),l=null}return n=Hn(m,i,n,u),n.elementType=e,n.type=l,n.lanes=c,n}function vi(e,n,i,l){return e=Hn(7,e,l,n),e.lanes=i,e}function tu(e,n,i){return e=Hn(6,e,null,n),e.lanes=i,e}function qf(e){var n=Hn(18,null,null,0);return n.stateNode=e,n}function iu(e,n,i){return n=Hn(4,e.children!==null?e.children:[],e.key,n),n.lanes=i,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var If=new WeakMap;function Jn(e,n){if(typeof e=="object"&&e!==null){var i=If.get(e);return i!==void 0?i:(n={value:e,source:n,stack:Va(n)},If.set(e,n),n)}return{value:e,source:n,stack:Va(n)}}var Wi=[],Pi=0,fr=null,Kl=0,Wn=[],Pn=0,qt=null,ut=1,st="";function xt(e,n){Wi[Pi++]=Kl,Wi[Pi++]=fr,fr=e,Kl=n}function Yf(e,n,i){Wn[Pn++]=ut,Wn[Pn++]=st,Wn[Pn++]=qt,qt=e;var l=ut;e=st;var u=32-qe(l)-1;l&=~(1<<u),i+=1;var c=32-qe(n)+u;if(30<c){var m=u-u%5;c=(l&(1<<m)-1).toString(32),l>>=m,u-=m,ut=1<<32-qe(n)+u|i<<u|l,st=c+e}else ut=1<<c|i<<u|l,st=e}function lu(e){e.return!==null&&(xt(e,1),Yf(e,1,0))}function au(e){for(;e===fr;)fr=Wi[--Pi],Wi[Pi]=null,Kl=Wi[--Pi],Wi[Pi]=null;for(;e===qt;)qt=Wn[--Pn],Wn[Pn]=null,st=Wn[--Pn],Wn[Pn]=null,ut=Wn[--Pn],Wn[Pn]=null}function Ff(e,n){Wn[Pn++]=ut,Wn[Pn++]=st,Wn[Pn++]=qt,ut=n.id,st=n.overflow,qt=e}var hn=null,Ve=null,Ce=!1,It=null,$n=!1,ru=Error(o(519));function Yt(e){var n=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Zl(Jn(n,e)),ru}function Vf(e){var n=e.stateNode,i=e.type,l=e.memoizedProps;switch(n[fn]=e,n[An]=l,i){case"dialog":Te("cancel",n),Te("close",n);break;case"iframe":case"object":case"embed":Te("load",n);break;case"video":case"audio":for(i=0;i<ya.length;i++)Te(ya[i],n);break;case"source":Te("error",n);break;case"img":case"image":case"link":Te("error",n),Te("load",n);break;case"details":Te("toggle",n);break;case"input":Te("invalid",n),lf(n,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Te("invalid",n);break;case"textarea":Te("invalid",n),rf(n,l.value,l.defaultValue,l.children)}i=l.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||n.textContent===""+i||l.suppressHydrationWarning===!0||um(n.textContent,i)?(l.popover!=null&&(Te("beforetoggle",n),Te("toggle",n)),l.onScroll!=null&&Te("scroll",n),l.onScrollEnd!=null&&Te("scrollend",n),l.onClick!=null&&(n.onclick=_t),n=!0):n=!1,n||Yt(e,!0)}function Xf(e){for(hn=e.return;hn;)switch(hn.tag){case 5:case 31:case 13:$n=!1;return;case 27:case 3:$n=!0;return;default:hn=hn.return}}function $i(e){if(e!==hn)return!1;if(!Ce)return Xf(e),Ce=!0,!1;var n=e.tag,i;if((i=n!==3&&n!==27)&&((i=n===5)&&(i=e.type,i=!(i!=="form"&&i!=="button")||Ts(e.type,e.memoizedProps)),i=!i),i&&Ve&&Yt(e),Xf(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Ve=ym(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Ve=ym(e)}else n===27?(n=Ve,ii(e.type)?(e=Ms,Ms=null,Ve=e):Ve=n):Ve=hn?nt(e.stateNode.nextSibling):null;return!0}function _i(){Ve=hn=null,Ce=!1}function ou(){var e=It;return e!==null&&(Nn===null?Nn=e:Nn.push.apply(Nn,e),It=null),e}function Zl(e){It===null?It=[e]:It.push(e)}var uu=A(null),Si=null,Tt=null;function Ft(e,n,i){w(uu,n._currentValue),n._currentValue=i}function At(e){e._currentValue=uu.current,U(uu)}function su(e,n,i){for(;e!==null;){var l=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),e===i)break;e=e.return}}function cu(e,n,i,l){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var c=u.dependencies;if(c!==null){var m=u.child;c=c.firstContext;e:for(;c!==null;){var v=c;c=u;for(var T=0;T<n.length;T++)if(v.context===n[T]){c.lanes|=i,v=c.alternate,v!==null&&(v.lanes|=i),su(c.return,i,e),l||(m=null);break e}c=v.next}}else if(u.tag===18){if(m=u.return,m===null)throw Error(o(341));m.lanes|=i,c=m.alternate,c!==null&&(c.lanes|=i),su(m,i,e),m=null}else m=u.child;if(m!==null)m.return=u;else for(m=u;m!==null;){if(m===e){m=null;break}if(u=m.sibling,u!==null){u.return=m.return,m=u;break}m=m.return}u=m}}function el(e,n,i,l){e=null;for(var u=n,c=!1;u!==null;){if(!c){if((u.flags&524288)!==0)c=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var m=u.alternate;if(m===null)throw Error(o(387));if(m=m.memoizedProps,m!==null){var v=u.type;Bn(u.pendingProps.value,m.value)||(e!==null?e.push(v):e=[v])}}else if(u===Ae.current){if(m=u.alternate,m===null)throw Error(o(387));m.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(wa):e=[wa])}u=u.return}e!==null&&cu(n,e,i,l),n.flags|=262144}function hr(e){for(e=e.firstContext;e!==null;){if(!Bn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function wi(e){Si=e,Tt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function dn(e){return Qf(Si,e)}function dr(e,n){return Si===null&&wi(e),Qf(e,n)}function Qf(e,n){var i=n._currentValue;if(n={context:n,memoizedValue:i,next:null},Tt===null){if(e===null)throw Error(o(308));Tt=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Tt=Tt.next=n;return i}var vb=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(i,l){e.push(l)}};this.abort=function(){n.aborted=!0,e.forEach(function(i){return i()})}},_b=t.unstable_scheduleCallback,Sb=t.unstable_NormalPriority,$e={$$typeof:k,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function fu(){return{controller:new vb,data:new Map,refCount:0}}function Jl(e){e.refCount--,e.refCount===0&&_b(Sb,function(){e.controller.abort()})}var Wl=null,hu=0,nl=0,tl=null;function wb(e,n){if(Wl===null){var i=Wl=[];hu=0,nl=ps(),tl={status:"pending",value:void 0,then:function(l){i.push(l)}}}return hu++,n.then(Kf,Kf),n}function Kf(){if(--hu===0&&Wl!==null){tl!==null&&(tl.status="fulfilled");var e=Wl;Wl=null,nl=0,tl=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function xb(e,n){var i=[],l={status:"pending",value:null,reason:null,then:function(u){i.push(u)}};return e.then(function(){l.status="fulfilled",l.value=n;for(var u=0;u<i.length;u++)(0,i[u])(n)},function(u){for(l.status="rejected",l.reason=u,u=0;u<i.length;u++)(0,i[u])(void 0)}),l}var Zf=M.S;M.S=function(e,n){jd=_n(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&wb(e,n),Zf!==null&&Zf(e,n)};var xi=A(null);function du(){var e=xi.current;return e!==null?e:Ie.pooledCache}function mr(e,n){n===null?w(xi,xi.current):w(xi,n.pool)}function Jf(){var e=du();return e===null?null:{parent:$e._currentValue,pool:e}}var il=Error(o(460)),mu=Error(o(474)),pr=Error(o(542)),gr={then:function(){}};function Wf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Pf(e,n,i){switch(i=e[i],i===void 0?e.push(n):i!==n&&(n.then(_t,_t),n=i),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,eh(e),e;default:if(typeof n.status=="string")n.then(_t,_t);else{if(e=Ie,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=n,e.status="pending",e.then(function(l){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=l}},function(l){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=l}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,eh(e),e}throw Ai=n,il}}function Ti(e){try{var n=e._init;return n(e._payload)}catch(i){throw i!==null&&typeof i=="object"&&typeof i.then=="function"?(Ai=i,il):i}}var Ai=null;function $f(){if(Ai===null)throw Error(o(459));var e=Ai;return Ai=null,e}function eh(e){if(e===il||e===pr)throw Error(o(483))}var ll=null,Pl=0;function yr(e){var n=Pl;return Pl+=1,ll===null&&(ll=[]),Pf(ll,e,n)}function $l(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function br(e,n){throw n.$$typeof===S?Error(o(525)):(e=Object.prototype.toString.call(n),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function nh(e){function n(C,E){if(e){var N=C.deletions;N===null?(C.deletions=[E],C.flags|=16):N.push(E)}}function i(C,E){if(!e)return null;for(;E!==null;)n(C,E),E=E.sibling;return null}function l(C){for(var E=new Map;C!==null;)C.key!==null?E.set(C.key,C):E.set(C.index,C),C=C.sibling;return E}function u(C,E){return C=wt(C,E),C.index=0,C.sibling=null,C}function c(C,E,N){return C.index=N,e?(N=C.alternate,N!==null?(N=N.index,N<E?(C.flags|=67108866,E):N):(C.flags|=67108866,E)):(C.flags|=1048576,E)}function m(C){return e&&C.alternate===null&&(C.flags|=67108866),C}function v(C,E,N,q){return E===null||E.tag!==6?(E=tu(N,C.mode,q),E.return=C,E):(E=u(E,N),E.return=C,E)}function T(C,E,N,q){var ce=N.type;return ce===L?H(C,E,N.props.children,q,N.key):E!==null&&(E.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===ie&&Ti(ce)===E.type)?(E=u(E,N.props),$l(E,N),E.return=C,E):(E=cr(N.type,N.key,N.props,null,C.mode,q),$l(E,N),E.return=C,E)}function D(C,E,N,q){return E===null||E.tag!==4||E.stateNode.containerInfo!==N.containerInfo||E.stateNode.implementation!==N.implementation?(E=iu(N,C.mode,q),E.return=C,E):(E=u(E,N.children||[]),E.return=C,E)}function H(C,E,N,q,ce){return E===null||E.tag!==7?(E=vi(N,C.mode,q,ce),E.return=C,E):(E=u(E,N),E.return=C,E)}function I(C,E,N){if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return E=tu(""+E,C.mode,N),E.return=C,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case _:return N=cr(E.type,E.key,E.props,null,C.mode,N),$l(N,E),N.return=C,N;case j:return E=iu(E,C.mode,N),E.return=C,E;case ie:return E=Ti(E),I(C,E,N)}if(F(E)||W(E))return E=vi(E,C.mode,N,null),E.return=C,E;if(typeof E.then=="function")return I(C,yr(E),N);if(E.$$typeof===k)return I(C,dr(C,E),N);br(C,E)}return null}function z(C,E,N,q){var ce=E!==null?E.key:null;if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return ce!==null?null:v(C,E,""+N,q);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case _:return N.key===ce?T(C,E,N,q):null;case j:return N.key===ce?D(C,E,N,q):null;case ie:return N=Ti(N),z(C,E,N,q)}if(F(N)||W(N))return ce!==null?null:H(C,E,N,q,null);if(typeof N.then=="function")return z(C,E,yr(N),q);if(N.$$typeof===k)return z(C,E,dr(C,N),q);br(C,N)}return null}function O(C,E,N,q,ce){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return C=C.get(N)||null,v(E,C,""+q,ce);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case _:return C=C.get(q.key===null?N:q.key)||null,T(E,C,q,ce);case j:return C=C.get(q.key===null?N:q.key)||null,D(E,C,q,ce);case ie:return q=Ti(q),O(C,E,N,q,ce)}if(F(q)||W(q))return C=C.get(N)||null,H(E,C,q,ce,null);if(typeof q.then=="function")return O(C,E,N,yr(q),ce);if(q.$$typeof===k)return O(C,E,N,dr(E,q),ce);br(E,q)}return null}function te(C,E,N,q){for(var ce=null,Ne=null,re=E,ve=E=0,ke=null;re!==null&&ve<N.length;ve++){re.index>ve?(ke=re,re=null):ke=re.sibling;var De=z(C,re,N[ve],q);if(De===null){re===null&&(re=ke);break}e&&re&&De.alternate===null&&n(C,re),E=c(De,E,ve),Ne===null?ce=De:Ne.sibling=De,Ne=De,re=ke}if(ve===N.length)return i(C,re),Ce&&xt(C,ve),ce;if(re===null){for(;ve<N.length;ve++)re=I(C,N[ve],q),re!==null&&(E=c(re,E,ve),Ne===null?ce=re:Ne.sibling=re,Ne=re);return Ce&&xt(C,ve),ce}for(re=l(re);ve<N.length;ve++)ke=O(re,C,ve,N[ve],q),ke!==null&&(e&&ke.alternate!==null&&re.delete(ke.key===null?ve:ke.key),E=c(ke,E,ve),Ne===null?ce=ke:Ne.sibling=ke,Ne=ke);return e&&re.forEach(function(ui){return n(C,ui)}),Ce&&xt(C,ve),ce}function fe(C,E,N,q){if(N==null)throw Error(o(151));for(var ce=null,Ne=null,re=E,ve=E=0,ke=null,De=N.next();re!==null&&!De.done;ve++,De=N.next()){re.index>ve?(ke=re,re=null):ke=re.sibling;var ui=z(C,re,De.value,q);if(ui===null){re===null&&(re=ke);break}e&&re&&ui.alternate===null&&n(C,re),E=c(ui,E,ve),Ne===null?ce=ui:Ne.sibling=ui,Ne=ui,re=ke}if(De.done)return i(C,re),Ce&&xt(C,ve),ce;if(re===null){for(;!De.done;ve++,De=N.next())De=I(C,De.value,q),De!==null&&(E=c(De,E,ve),Ne===null?ce=De:Ne.sibling=De,Ne=De);return Ce&&xt(C,ve),ce}for(re=l(re);!De.done;ve++,De=N.next())De=O(re,C,ve,De.value,q),De!==null&&(e&&De.alternate!==null&&re.delete(De.key===null?ve:De.key),E=c(De,E,ve),Ne===null?ce=De:Ne.sibling=De,Ne=De);return e&&re.forEach(function(O0){return n(C,O0)}),Ce&&xt(C,ve),ce}function Ge(C,E,N,q){if(typeof N=="object"&&N!==null&&N.type===L&&N.key===null&&(N=N.props.children),typeof N=="object"&&N!==null){switch(N.$$typeof){case _:e:{for(var ce=N.key;E!==null;){if(E.key===ce){if(ce=N.type,ce===L){if(E.tag===7){i(C,E.sibling),q=u(E,N.props.children),q.return=C,C=q;break e}}else if(E.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===ie&&Ti(ce)===E.type){i(C,E.sibling),q=u(E,N.props),$l(q,N),q.return=C,C=q;break e}i(C,E);break}else n(C,E);E=E.sibling}N.type===L?(q=vi(N.props.children,C.mode,q,N.key),q.return=C,C=q):(q=cr(N.type,N.key,N.props,null,C.mode,q),$l(q,N),q.return=C,C=q)}return m(C);case j:e:{for(ce=N.key;E!==null;){if(E.key===ce)if(E.tag===4&&E.stateNode.containerInfo===N.containerInfo&&E.stateNode.implementation===N.implementation){i(C,E.sibling),q=u(E,N.children||[]),q.return=C,C=q;break e}else{i(C,E);break}else n(C,E);E=E.sibling}q=iu(N,C.mode,q),q.return=C,C=q}return m(C);case ie:return N=Ti(N),Ge(C,E,N,q)}if(F(N))return te(C,E,N,q);if(W(N)){if(ce=W(N),typeof ce!="function")throw Error(o(150));return N=ce.call(N),fe(C,E,N,q)}if(typeof N.then=="function")return Ge(C,E,yr(N),q);if(N.$$typeof===k)return Ge(C,E,dr(C,N),q);br(C,N)}return typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint"?(N=""+N,E!==null&&E.tag===6?(i(C,E.sibling),q=u(E,N),q.return=C,C=q):(i(C,E),q=tu(N,C.mode,q),q.return=C,C=q),m(C)):i(C,E)}return function(C,E,N,q){try{Pl=0;var ce=Ge(C,E,N,q);return ll=null,ce}catch(re){if(re===il||re===pr)throw re;var Ne=Hn(29,re,null,C.mode);return Ne.lanes=q,Ne.return=C,Ne}}}var Ei=nh(!0),th=nh(!1),Vt=!1;function pu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function gu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Xt(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Qt(e,n,i){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(je&2)!==0){var u=l.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),l.pending=n,n=sr(e),Uf(e,null,i),n}return ur(e,l,n,i),sr(e)}function ea(e,n,i){if(n=n.updateQueue,n!==null&&(n=n.shared,(i&4194048)!==0)){var l=n.lanes;l&=e.pendingLanes,i|=l,n.lanes=i,Xc(e,i)}}function yu(e,n){var i=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,i===l)){var u=null,c=null;if(i=i.firstBaseUpdate,i!==null){do{var m={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};c===null?u=c=m:c=c.next=m,i=i.next}while(i!==null);c===null?u=c=n:c=c.next=n}else u=c=n;i={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:c,shared:l.shared,callbacks:l.callbacks},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=n:e.next=n,i.lastBaseUpdate=n}var bu=!1;function na(){if(bu){var e=tl;if(e!==null)throw e}}function ta(e,n,i,l){bu=!1;var u=e.updateQueue;Vt=!1;var c=u.firstBaseUpdate,m=u.lastBaseUpdate,v=u.shared.pending;if(v!==null){u.shared.pending=null;var T=v,D=T.next;T.next=null,m===null?c=D:m.next=D,m=T;var H=e.alternate;H!==null&&(H=H.updateQueue,v=H.lastBaseUpdate,v!==m&&(v===null?H.firstBaseUpdate=D:v.next=D,H.lastBaseUpdate=T))}if(c!==null){var I=u.baseState;m=0,H=D=T=null,v=c;do{var z=v.lane&-536870913,O=z!==v.lane;if(O?(Ee&z)===z:(l&z)===z){z!==0&&z===nl&&(bu=!0),H!==null&&(H=H.next={lane:0,tag:v.tag,payload:v.payload,callback:null,next:null});e:{var te=e,fe=v;z=n;var Ge=i;switch(fe.tag){case 1:if(te=fe.payload,typeof te=="function"){I=te.call(Ge,I,z);break e}I=te;break e;case 3:te.flags=te.flags&-65537|128;case 0:if(te=fe.payload,z=typeof te=="function"?te.call(Ge,I,z):te,z==null)break e;I=y({},I,z);break e;case 2:Vt=!0}}z=v.callback,z!==null&&(e.flags|=64,O&&(e.flags|=8192),O=u.callbacks,O===null?u.callbacks=[z]:O.push(z))}else O={lane:z,tag:v.tag,payload:v.payload,callback:v.callback,next:null},H===null?(D=H=O,T=I):H=H.next=O,m|=z;if(v=v.next,v===null){if(v=u.shared.pending,v===null)break;O=v,v=O.next,O.next=null,u.lastBaseUpdate=O,u.shared.pending=null}}while(!0);H===null&&(T=I),u.baseState=T,u.firstBaseUpdate=D,u.lastBaseUpdate=H,c===null&&(u.shared.lanes=0),Pt|=m,e.lanes=m,e.memoizedState=I}}function ih(e,n){if(typeof e!="function")throw Error(o(191,e));e.call(n)}function lh(e,n){var i=e.callbacks;if(i!==null)for(e.callbacks=null,e=0;e<i.length;e++)ih(i[e],n)}var al=A(null),vr=A(0);function ah(e,n){e=Ot,w(vr,e),w(al,n),Ot=e|n.baseLanes}function vu(){w(vr,Ot),w(al,al.current)}function _u(){Ot=vr.current,U(al),U(vr)}var Un=A(null),et=null;function Kt(e){var n=e.alternate;w(We,We.current&1),w(Un,e),et===null&&(n===null||al.current!==null||n.memoizedState!==null)&&(et=e)}function Su(e){w(We,We.current),w(Un,e),et===null&&(et=e)}function rh(e){e.tag===22?(w(We,We.current),w(Un,e),et===null&&(et=e)):Zt()}function Zt(){w(We,We.current),w(Un,Un.current)}function Gn(e){U(Un),et===e&&(et=null),U(We)}var We=A(0);function _r(e){for(var n=e;n!==null;){if(n.tag===13){var i=n.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||ks(i)||Cs(i)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Et=0,ye=null,He=null,en=null,Sr=!1,rl=!1,ki=!1,wr=0,ia=0,ol=null,Tb=0;function Ze(){throw Error(o(321))}function wu(e,n){if(n===null)return!1;for(var i=0;i<n.length&&i<e.length;i++)if(!Bn(e[i],n[i]))return!1;return!0}function xu(e,n,i,l,u,c){return Et=c,ye=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,M.H=e===null||e.memoizedState===null?Yh:Hu,ki=!1,c=i(l,u),ki=!1,rl&&(c=uh(n,i,l,u)),oh(e),c}function oh(e){M.H=ra;var n=He!==null&&He.next!==null;if(Et=0,en=He=ye=null,Sr=!1,ia=0,ol=null,n)throw Error(o(300));e===null||nn||(e=e.dependencies,e!==null&&hr(e)&&(nn=!0))}function uh(e,n,i,l){ye=e;var u=0;do{if(rl&&(ol=null),ia=0,rl=!1,25<=u)throw Error(o(301));if(u+=1,en=He=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}M.H=Fh,c=n(i,l)}while(rl);return c}function Ab(){var e=M.H,n=e.useState()[0];return n=typeof n.then=="function"?la(n):n,e=e.useState()[0],(He!==null?He.memoizedState:null)!==e&&(ye.flags|=1024),n}function Tu(){var e=wr!==0;return wr=0,e}function Au(e,n,i){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i}function Eu(e){if(Sr){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Sr=!1}Et=0,en=He=ye=null,rl=!1,ia=wr=0,ol=null}function wn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return en===null?ye.memoizedState=en=e:en=en.next=e,en}function Pe(){if(He===null){var e=ye.alternate;e=e!==null?e.memoizedState:null}else e=He.next;var n=en===null?ye.memoizedState:en.next;if(n!==null)en=n,He=e;else{if(e===null)throw ye.alternate===null?Error(o(467)):Error(o(310));He=e,e={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},en===null?ye.memoizedState=en=e:en=en.next=e}return en}function xr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function la(e){var n=ia;return ia+=1,ol===null&&(ol=[]),e=Pf(ol,e,n),n=ye,(en===null?n.memoizedState:en.next)===null&&(n=n.alternate,M.H=n===null||n.memoizedState===null?Yh:Hu),e}function Tr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return la(e);if(e.$$typeof===k)return dn(e)}throw Error(o(438,String(e)))}function ku(e){var n=null,i=ye.updateQueue;if(i!==null&&(n=i.memoCache),n==null){var l=ye.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(n={data:l.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),i===null&&(i=xr(),ye.updateQueue=i),i.memoCache=n,i=n.data[n.index],i===void 0)for(i=n.data[n.index]=Array(e),l=0;l<e;l++)i[l]=pe;return n.index++,i}function kt(e,n){return typeof n=="function"?n(e):n}function Ar(e){var n=Pe();return Cu(n,He,e)}function Cu(e,n,i){var l=e.queue;if(l===null)throw Error(o(311));l.lastRenderedReducer=i;var u=e.baseQueue,c=l.pending;if(c!==null){if(u!==null){var m=u.next;u.next=c.next,c.next=m}n.baseQueue=u=c,l.pending=null}if(c=e.baseState,u===null)e.memoizedState=c;else{n=u.next;var v=m=null,T=null,D=n,H=!1;do{var I=D.lane&-536870913;if(I!==D.lane?(Ee&I)===I:(Et&I)===I){var z=D.revertLane;if(z===0)T!==null&&(T=T.next={lane:0,revertLane:0,gesture:null,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null}),I===nl&&(H=!0);else if((Et&z)===z){D=D.next,z===nl&&(H=!0);continue}else I={lane:0,revertLane:D.revertLane,gesture:null,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},T===null?(v=T=I,m=c):T=T.next=I,ye.lanes|=z,Pt|=z;I=D.action,ki&&i(c,I),c=D.hasEagerState?D.eagerState:i(c,I)}else z={lane:I,revertLane:D.revertLane,gesture:D.gesture,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},T===null?(v=T=z,m=c):T=T.next=z,ye.lanes|=I,Pt|=I;D=D.next}while(D!==null&&D!==n);if(T===null?m=c:T.next=v,!Bn(c,e.memoizedState)&&(nn=!0,H&&(i=tl,i!==null)))throw i;e.memoizedState=c,e.baseState=m,e.baseQueue=T,l.lastRenderedState=c}return u===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Mu(e){var n=Pe(),i=n.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=e;var l=i.dispatch,u=i.pending,c=n.memoizedState;if(u!==null){i.pending=null;var m=u=u.next;do c=e(c,m.action),m=m.next;while(m!==u);Bn(c,n.memoizedState)||(nn=!0),n.memoizedState=c,n.baseQueue===null&&(n.baseState=c),i.lastRenderedState=c}return[c,l]}function sh(e,n,i){var l=ye,u=Pe(),c=Ce;if(c){if(i===void 0)throw Error(o(407));i=i()}else i=n();var m=!Bn((He||u).memoizedState,i);if(m&&(u.memoizedState=i,nn=!0),u=u.queue,ju(hh.bind(null,l,u,e),[e]),u.getSnapshot!==n||m||en!==null&&en.memoizedState.tag&1){if(l.flags|=2048,ul(9,{destroy:void 0},fh.bind(null,l,u,i,n),null),Ie===null)throw Error(o(349));c||(Et&127)!==0||ch(l,n,i)}return i}function ch(e,n,i){e.flags|=16384,e={getSnapshot:n,value:i},n=ye.updateQueue,n===null?(n=xr(),ye.updateQueue=n,n.stores=[e]):(i=n.stores,i===null?n.stores=[e]:i.push(e))}function fh(e,n,i,l){n.value=i,n.getSnapshot=l,dh(n)&&mh(e)}function hh(e,n,i){return i(function(){dh(n)&&mh(e)})}function dh(e){var n=e.getSnapshot;e=e.value;try{var i=n();return!Bn(e,i)}catch{return!0}}function mh(e){var n=bi(e,2);n!==null&&Dn(n,e,2)}function Nu(e){var n=wn();if(typeof e=="function"){var i=e;if(e=i(),ki){Tn(!0);try{i()}finally{Tn(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:kt,lastRenderedState:e},n}function ph(e,n,i,l){return e.baseState=i,Cu(e,He,typeof l=="function"?l:kt)}function Eb(e,n,i,l,u){if(Cr(e))throw Error(o(485));if(e=n.action,e!==null){var c={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){c.listeners.push(m)}};M.T!==null?i(!0):c.isTransition=!1,l(c),i=n.pending,i===null?(c.next=n.pending=c,gh(n,c)):(c.next=i.next,n.pending=i.next=c)}}function gh(e,n){var i=n.action,l=n.payload,u=e.state;if(n.isTransition){var c=M.T,m={};M.T=m;try{var v=i(u,l),T=M.S;T!==null&&T(m,v),yh(e,n,v)}catch(D){Du(e,n,D)}finally{c!==null&&m.types!==null&&(c.types=m.types),M.T=c}}else try{c=i(u,l),yh(e,n,c)}catch(D){Du(e,n,D)}}function yh(e,n,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(l){bh(e,n,l)},function(l){return Du(e,n,l)}):bh(e,n,i)}function bh(e,n,i){n.status="fulfilled",n.value=i,vh(n),e.state=i,n=e.pending,n!==null&&(i=n.next,i===n?e.pending=null:(i=i.next,n.next=i,gh(e,i)))}function Du(e,n,i){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do n.status="rejected",n.reason=i,vh(n),n=n.next;while(n!==l)}e.action=null}function vh(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function _h(e,n){return n}function Sh(e,n){if(Ce){var i=Ie.formState;if(i!==null){e:{var l=ye;if(Ce){if(Ve){n:{for(var u=Ve,c=$n;u.nodeType!==8;){if(!c){u=null;break n}if(u=nt(u.nextSibling),u===null){u=null;break n}}c=u.data,u=c==="F!"||c==="F"?u:null}if(u){Ve=nt(u.nextSibling),l=u.data==="F!";break e}}Yt(l)}l=!1}l&&(n=i[0])}}return i=wn(),i.memoizedState=i.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_h,lastRenderedState:n},i.queue=l,i=Gh.bind(null,ye,l),l.dispatch=i,l=Nu(!1),c=Bu.bind(null,ye,!1,l.queue),l=wn(),u={state:n,dispatch:null,action:e,pending:null},l.queue=u,i=Eb.bind(null,ye,u,c,i),u.dispatch=i,l.memoizedState=e,[n,i,!1]}function wh(e){var n=Pe();return xh(n,He,e)}function xh(e,n,i){if(n=Cu(e,n,_h)[0],e=Ar(kt)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var l=la(n)}catch(m){throw m===il?pr:m}else l=n;n=Pe();var u=n.queue,c=u.dispatch;return i!==n.memoizedState&&(ye.flags|=2048,ul(9,{destroy:void 0},kb.bind(null,u,i),null)),[l,c,e]}function kb(e,n){e.action=n}function Th(e){var n=Pe(),i=He;if(i!==null)return xh(n,i,e);Pe(),n=n.memoizedState,i=Pe();var l=i.queue.dispatch;return i.memoizedState=e,[n,l,!1]}function ul(e,n,i,l){return e={tag:e,create:i,deps:l,inst:n,next:null},n=ye.updateQueue,n===null&&(n=xr(),ye.updateQueue=n),i=n.lastEffect,i===null?n.lastEffect=e.next=e:(l=i.next,i.next=e,e.next=l,n.lastEffect=e),e}function Ah(){return Pe().memoizedState}function Er(e,n,i,l){var u=wn();ye.flags|=e,u.memoizedState=ul(1|n,{destroy:void 0},i,l===void 0?null:l)}function kr(e,n,i,l){var u=Pe();l=l===void 0?null:l;var c=u.memoizedState.inst;He!==null&&l!==null&&wu(l,He.memoizedState.deps)?u.memoizedState=ul(n,c,i,l):(ye.flags|=e,u.memoizedState=ul(1|n,c,i,l))}function Eh(e,n){Er(8390656,8,e,n)}function ju(e,n){kr(2048,8,e,n)}function Cb(e){ye.flags|=4;var n=ye.updateQueue;if(n===null)n=xr(),ye.updateQueue=n,n.events=[e];else{var i=n.events;i===null?n.events=[e]:i.push(e)}}function kh(e){var n=Pe().memoizedState;return Cb({ref:n,nextImpl:e}),function(){if((je&2)!==0)throw Error(o(440));return n.impl.apply(void 0,arguments)}}function Ch(e,n){return kr(4,2,e,n)}function Mh(e,n){return kr(4,4,e,n)}function Nh(e,n){if(typeof n=="function"){e=e();var i=n(e);return function(){typeof i=="function"?i():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Dh(e,n,i){i=i!=null?i.concat([e]):null,kr(4,4,Nh.bind(null,n,e),i)}function zu(){}function jh(e,n){var i=Pe();n=n===void 0?null:n;var l=i.memoizedState;return n!==null&&wu(n,l[1])?l[0]:(i.memoizedState=[e,n],e)}function zh(e,n){var i=Pe();n=n===void 0?null:n;var l=i.memoizedState;if(n!==null&&wu(n,l[1]))return l[0];if(l=e(),ki){Tn(!0);try{e()}finally{Tn(!1)}}return i.memoizedState=[l,n],l}function Ou(e,n,i){return i===void 0||(Et&1073741824)!==0&&(Ee&261930)===0?e.memoizedState=n:(e.memoizedState=i,e=Od(),ye.lanes|=e,Pt|=e,i)}function Oh(e,n,i,l){return Bn(i,n)?i:al.current!==null?(e=Ou(e,i,l),Bn(e,n)||(nn=!0),e):(Et&42)===0||(Et&1073741824)!==0&&(Ee&261930)===0?(nn=!0,e.memoizedState=i):(e=Od(),ye.lanes|=e,Pt|=e,n)}function Rh(e,n,i,l,u){var c=X.p;X.p=c!==0&&8>c?c:8;var m=M.T,v={};M.T=v,Bu(e,!1,n,i);try{var T=u(),D=M.S;if(D!==null&&D(v,T),T!==null&&typeof T=="object"&&typeof T.then=="function"){var H=xb(T,l);aa(e,n,H,Yn(e))}else aa(e,n,l,Yn(e))}catch(I){aa(e,n,{then:function(){},status:"rejected",reason:I},Yn())}finally{X.p=c,m!==null&&v.types!==null&&(m.types=v.types),M.T=m}}function Mb(){}function Ru(e,n,i,l){if(e.tag!==5)throw Error(o(476));var u=Lh(e).queue;Rh(e,u,n,ae,i===null?Mb:function(){return Bh(e),i(l)})}function Lh(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ae,baseState:ae,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:kt,lastRenderedState:ae},next:null};var i={};return n.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:kt,lastRenderedState:i},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Bh(e){var n=Lh(e);n.next===null&&(n=e.alternate.memoizedState),aa(e,n.next.queue,{},Yn())}function Lu(){return dn(wa)}function Hh(){return Pe().memoizedState}function Uh(){return Pe().memoizedState}function Nb(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var i=Yn();e=Xt(i);var l=Qt(n,e,i);l!==null&&(Dn(l,n,i),ea(l,n,i)),n={cache:fu()},e.payload=n;return}n=n.return}}function Db(e,n,i){var l=Yn();i={lane:l,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Cr(e)?qh(n,i):(i=eu(e,n,i,l),i!==null&&(Dn(i,e,l),Ih(i,n,l)))}function Gh(e,n,i){var l=Yn();aa(e,n,i,l)}function aa(e,n,i,l){var u={lane:l,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null};if(Cr(e))qh(n,u);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=n.lastRenderedReducer,c!==null))try{var m=n.lastRenderedState,v=c(m,i);if(u.hasEagerState=!0,u.eagerState=v,Bn(v,m))return ur(e,n,u,0),Ie===null&&or(),!1}catch{}if(i=eu(e,n,u,l),i!==null)return Dn(i,e,l),Ih(i,n,l),!0}return!1}function Bu(e,n,i,l){if(l={lane:2,revertLane:ps(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Cr(e)){if(n)throw Error(o(479))}else n=eu(e,i,l,2),n!==null&&Dn(n,e,2)}function Cr(e){var n=e.alternate;return e===ye||n!==null&&n===ye}function qh(e,n){rl=Sr=!0;var i=e.pending;i===null?n.next=n:(n.next=i.next,i.next=n),e.pending=n}function Ih(e,n,i){if((i&4194048)!==0){var l=n.lanes;l&=e.pendingLanes,i|=l,n.lanes=i,Xc(e,i)}}var ra={readContext:dn,use:Tr,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useLayoutEffect:Ze,useInsertionEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useSyncExternalStore:Ze,useId:Ze,useHostTransitionStatus:Ze,useFormState:Ze,useActionState:Ze,useOptimistic:Ze,useMemoCache:Ze,useCacheRefresh:Ze};ra.useEffectEvent=Ze;var Yh={readContext:dn,use:Tr,useCallback:function(e,n){return wn().memoizedState=[e,n===void 0?null:n],e},useContext:dn,useEffect:Eh,useImperativeHandle:function(e,n,i){i=i!=null?i.concat([e]):null,Er(4194308,4,Nh.bind(null,n,e),i)},useLayoutEffect:function(e,n){return Er(4194308,4,e,n)},useInsertionEffect:function(e,n){Er(4,2,e,n)},useMemo:function(e,n){var i=wn();n=n===void 0?null:n;var l=e();if(ki){Tn(!0);try{e()}finally{Tn(!1)}}return i.memoizedState=[l,n],l},useReducer:function(e,n,i){var l=wn();if(i!==void 0){var u=i(n);if(ki){Tn(!0);try{i(n)}finally{Tn(!1)}}}else u=n;return l.memoizedState=l.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},l.queue=e,e=e.dispatch=Db.bind(null,ye,e),[l.memoizedState,e]},useRef:function(e){var n=wn();return e={current:e},n.memoizedState=e},useState:function(e){e=Nu(e);var n=e.queue,i=Gh.bind(null,ye,n);return n.dispatch=i,[e.memoizedState,i]},useDebugValue:zu,useDeferredValue:function(e,n){var i=wn();return Ou(i,e,n)},useTransition:function(){var e=Nu(!1);return e=Rh.bind(null,ye,e.queue,!0,!1),wn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,i){var l=ye,u=wn();if(Ce){if(i===void 0)throw Error(o(407));i=i()}else{if(i=n(),Ie===null)throw Error(o(349));(Ee&127)!==0||ch(l,n,i)}u.memoizedState=i;var c={value:i,getSnapshot:n};return u.queue=c,Eh(hh.bind(null,l,c,e),[e]),l.flags|=2048,ul(9,{destroy:void 0},fh.bind(null,l,c,i,n),null),i},useId:function(){var e=wn(),n=Ie.identifierPrefix;if(Ce){var i=st,l=ut;i=(l&~(1<<32-qe(l)-1)).toString(32)+i,n="_"+n+"R_"+i,i=wr++,0<i&&(n+="H"+i.toString(32)),n+="_"}else i=Tb++,n="_"+n+"r_"+i.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Lu,useFormState:Sh,useActionState:Sh,useOptimistic:function(e){var n=wn();n.memoizedState=n.baseState=e;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=i,n=Bu.bind(null,ye,!0,i),i.dispatch=n,[e,n]},useMemoCache:ku,useCacheRefresh:function(){return wn().memoizedState=Nb.bind(null,ye)},useEffectEvent:function(e){var n=wn(),i={impl:e};return n.memoizedState=i,function(){if((je&2)!==0)throw Error(o(440));return i.impl.apply(void 0,arguments)}}},Hu={readContext:dn,use:Tr,useCallback:jh,useContext:dn,useEffect:ju,useImperativeHandle:Dh,useInsertionEffect:Ch,useLayoutEffect:Mh,useMemo:zh,useReducer:Ar,useRef:Ah,useState:function(){return Ar(kt)},useDebugValue:zu,useDeferredValue:function(e,n){var i=Pe();return Oh(i,He.memoizedState,e,n)},useTransition:function(){var e=Ar(kt)[0],n=Pe().memoizedState;return[typeof e=="boolean"?e:la(e),n]},useSyncExternalStore:sh,useId:Hh,useHostTransitionStatus:Lu,useFormState:wh,useActionState:wh,useOptimistic:function(e,n){var i=Pe();return ph(i,He,e,n)},useMemoCache:ku,useCacheRefresh:Uh};Hu.useEffectEvent=kh;var Fh={readContext:dn,use:Tr,useCallback:jh,useContext:dn,useEffect:ju,useImperativeHandle:Dh,useInsertionEffect:Ch,useLayoutEffect:Mh,useMemo:zh,useReducer:Mu,useRef:Ah,useState:function(){return Mu(kt)},useDebugValue:zu,useDeferredValue:function(e,n){var i=Pe();return He===null?Ou(i,e,n):Oh(i,He.memoizedState,e,n)},useTransition:function(){var e=Mu(kt)[0],n=Pe().memoizedState;return[typeof e=="boolean"?e:la(e),n]},useSyncExternalStore:sh,useId:Hh,useHostTransitionStatus:Lu,useFormState:Th,useActionState:Th,useOptimistic:function(e,n){var i=Pe();return He!==null?ph(i,He,e,n):(i.baseState=e,[e,i.queue.dispatch])},useMemoCache:ku,useCacheRefresh:Uh};Fh.useEffectEvent=kh;function Uu(e,n,i,l){n=e.memoizedState,i=i(l,n),i=i==null?n:y({},n,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var Gu={enqueueSetState:function(e,n,i){e=e._reactInternals;var l=Yn(),u=Xt(l);u.payload=n,i!=null&&(u.callback=i),n=Qt(e,u,l),n!==null&&(Dn(n,e,l),ea(n,e,l))},enqueueReplaceState:function(e,n,i){e=e._reactInternals;var l=Yn(),u=Xt(l);u.tag=1,u.payload=n,i!=null&&(u.callback=i),n=Qt(e,u,l),n!==null&&(Dn(n,e,l),ea(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var i=Yn(),l=Xt(i);l.tag=2,n!=null&&(l.callback=n),n=Qt(e,l,i),n!==null&&(Dn(n,e,i),ea(n,e,i))}};function Vh(e,n,i,l,u,c,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,c,m):n.prototype&&n.prototype.isPureReactComponent?!Xl(i,l)||!Xl(u,c):!0}function Xh(e,n,i,l){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(i,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(i,l),n.state!==e&&Gu.enqueueReplaceState(n,n.state,null)}function Ci(e,n){var i=n;if("ref"in n){i={};for(var l in n)l!=="ref"&&(i[l]=n[l])}if(e=e.defaultProps){i===n&&(i=y({},i));for(var u in e)i[u]===void 0&&(i[u]=e[u])}return i}function Qh(e){rr(e)}function Kh(e){console.error(e)}function Zh(e){rr(e)}function Mr(e,n){try{var i=e.onUncaughtError;i(n.value,{componentStack:n.stack})}catch(l){setTimeout(function(){throw l})}}function Jh(e,n,i){try{var l=e.onCaughtError;l(i.value,{componentStack:i.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function qu(e,n,i){return i=Xt(i),i.tag=3,i.payload={element:null},i.callback=function(){Mr(e,n)},i}function Wh(e){return e=Xt(e),e.tag=3,e}function Ph(e,n,i,l){var u=i.type.getDerivedStateFromError;if(typeof u=="function"){var c=l.value;e.payload=function(){return u(c)},e.callback=function(){Jh(n,i,l)}}var m=i.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(e.callback=function(){Jh(n,i,l),typeof u!="function"&&($t===null?$t=new Set([this]):$t.add(this));var v=l.stack;this.componentDidCatch(l.value,{componentStack:v!==null?v:""})})}function jb(e,n,i,l,u){if(i.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(n=i.alternate,n!==null&&el(n,i,u,!0),i=Un.current,i!==null){switch(i.tag){case 31:case 13:return et===null?qr():i.alternate===null&&Je===0&&(Je=3),i.flags&=-257,i.flags|=65536,i.lanes=u,l===gr?i.flags|=16384:(n=i.updateQueue,n===null?i.updateQueue=new Set([l]):n.add(l),hs(e,l,u)),!1;case 22:return i.flags|=65536,l===gr?i.flags|=16384:(n=i.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([l])},i.updateQueue=n):(i=n.retryQueue,i===null?n.retryQueue=new Set([l]):i.add(l)),hs(e,l,u)),!1}throw Error(o(435,i.tag))}return hs(e,l,u),qr(),!1}if(Ce)return n=Un.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,l!==ru&&(e=Error(o(422),{cause:l}),Zl(Jn(e,i)))):(l!==ru&&(n=Error(o(423),{cause:l}),Zl(Jn(n,i))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,l=Jn(l,i),u=qu(e.stateNode,l,u),yu(e,u),Je!==4&&(Je=2)),!1;var c=Error(o(520),{cause:l});if(c=Jn(c,i),ma===null?ma=[c]:ma.push(c),Je!==4&&(Je=2),n===null)return!0;l=Jn(l,i),i=n;do{switch(i.tag){case 3:return i.flags|=65536,e=u&-u,i.lanes|=e,e=qu(i.stateNode,l,e),yu(i,e),!1;case 1:if(n=i.type,c=i.stateNode,(i.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&($t===null||!$t.has(c))))return i.flags|=65536,u&=-u,i.lanes|=u,u=Wh(u),Ph(u,e,i,l),yu(i,u),!1}i=i.return}while(i!==null);return!1}var Iu=Error(o(461)),nn=!1;function mn(e,n,i,l){n.child=e===null?th(n,null,i,l):Ei(n,e.child,i,l)}function $h(e,n,i,l,u){i=i.render;var c=n.ref;if("ref"in l){var m={};for(var v in l)v!=="ref"&&(m[v]=l[v])}else m=l;return wi(n),l=xu(e,n,i,m,c,u),v=Tu(),e!==null&&!nn?(Au(e,n,u),Ct(e,n,u)):(Ce&&v&&lu(n),n.flags|=1,mn(e,n,l,u),n.child)}function ed(e,n,i,l,u){if(e===null){var c=i.type;return typeof c=="function"&&!nu(c)&&c.defaultProps===void 0&&i.compare===null?(n.tag=15,n.type=c,nd(e,n,c,l,u)):(e=cr(i.type,null,l,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(c=e.child,!Ju(e,u)){var m=c.memoizedProps;if(i=i.compare,i=i!==null?i:Xl,i(m,l)&&e.ref===n.ref)return Ct(e,n,u)}return n.flags|=1,e=wt(c,l),e.ref=n.ref,e.return=n,n.child=e}function nd(e,n,i,l,u){if(e!==null){var c=e.memoizedProps;if(Xl(c,l)&&e.ref===n.ref)if(nn=!1,n.pendingProps=l=c,Ju(e,u))(e.flags&131072)!==0&&(nn=!0);else return n.lanes=e.lanes,Ct(e,n,u)}return Yu(e,n,i,l,u)}function td(e,n,i,l){var u=l.children,c=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((n.flags&128)!==0){if(c=c!==null?c.baseLanes|i:i,e!==null){for(l=n.child=e.child,u=0;l!==null;)u=u|l.lanes|l.childLanes,l=l.sibling;l=u&~c}else l=0,n.child=null;return id(e,n,c,i,l)}if((i&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&mr(n,c!==null?c.cachePool:null),c!==null?ah(n,c):vu(),rh(n);else return l=n.lanes=536870912,id(e,n,c!==null?c.baseLanes|i:i,i,l)}else c!==null?(mr(n,c.cachePool),ah(n,c),Zt(),n.memoizedState=null):(e!==null&&mr(n,null),vu(),Zt());return mn(e,n,u,i),n.child}function oa(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function id(e,n,i,l,u){var c=du();return c=c===null?null:{parent:$e._currentValue,pool:c},n.memoizedState={baseLanes:i,cachePool:c},e!==null&&mr(n,null),vu(),rh(n),e!==null&&el(e,n,l,!0),n.childLanes=u,null}function Nr(e,n){return n=jr({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function ld(e,n,i){return Ei(n,e.child,null,i),e=Nr(n,n.pendingProps),e.flags|=2,Gn(n),n.memoizedState=null,e}function zb(e,n,i){var l=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ce){if(l.mode==="hidden")return e=Nr(n,l),n.lanes=536870912,oa(null,e);if(Su(n),(e=Ve)?(e=gm(e,$n),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:qt!==null?{id:ut,overflow:st}:null,retryLane:536870912,hydrationErrors:null},i=qf(e),i.return=n,n.child=i,hn=n,Ve=null)):e=null,e===null)throw Yt(n);return n.lanes=536870912,null}return Nr(n,l)}var c=e.memoizedState;if(c!==null){var m=c.dehydrated;if(Su(n),u)if(n.flags&256)n.flags&=-257,n=ld(e,n,i);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(o(558));else if(nn||el(e,n,i,!1),u=(i&e.childLanes)!==0,nn||u){if(l=Ie,l!==null&&(m=Qc(l,i),m!==0&&m!==c.retryLane))throw c.retryLane=m,bi(e,m),Dn(l,e,m),Iu;qr(),n=ld(e,n,i)}else e=c.treeContext,Ve=nt(m.nextSibling),hn=n,Ce=!0,It=null,$n=!1,e!==null&&Ff(n,e),n=Nr(n,l),n.flags|=4096;return n}return e=wt(e.child,{mode:l.mode,children:l.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Dr(e,n){var i=n.ref;if(i===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(o(284));(e===null||e.ref!==i)&&(n.flags|=4194816)}}function Yu(e,n,i,l,u){return wi(n),i=xu(e,n,i,l,void 0,u),l=Tu(),e!==null&&!nn?(Au(e,n,u),Ct(e,n,u)):(Ce&&l&&lu(n),n.flags|=1,mn(e,n,i,u),n.child)}function ad(e,n,i,l,u,c){return wi(n),n.updateQueue=null,i=uh(n,l,i,u),oh(e),l=Tu(),e!==null&&!nn?(Au(e,n,c),Ct(e,n,c)):(Ce&&l&&lu(n),n.flags|=1,mn(e,n,i,c),n.child)}function rd(e,n,i,l,u){if(wi(n),n.stateNode===null){var c=Ji,m=i.contextType;typeof m=="object"&&m!==null&&(c=dn(m)),c=new i(l,c),n.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=Gu,n.stateNode=c,c._reactInternals=n,c=n.stateNode,c.props=l,c.state=n.memoizedState,c.refs={},pu(n),m=i.contextType,c.context=typeof m=="object"&&m!==null?dn(m):Ji,c.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(Uu(n,i,m,l),c.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(m=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),m!==c.state&&Gu.enqueueReplaceState(c,c.state,null),ta(n,l,c,u),na(),c.state=n.memoizedState),typeof c.componentDidMount=="function"&&(n.flags|=4194308),l=!0}else if(e===null){c=n.stateNode;var v=n.memoizedProps,T=Ci(i,v);c.props=T;var D=c.context,H=i.contextType;m=Ji,typeof H=="object"&&H!==null&&(m=dn(H));var I=i.getDerivedStateFromProps;H=typeof I=="function"||typeof c.getSnapshotBeforeUpdate=="function",v=n.pendingProps!==v,H||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(v||D!==m)&&Xh(n,c,l,m),Vt=!1;var z=n.memoizedState;c.state=z,ta(n,l,c,u),na(),D=n.memoizedState,v||z!==D||Vt?(typeof I=="function"&&(Uu(n,i,I,l),D=n.memoizedState),(T=Vt||Vh(n,i,T,l,z,D,m))?(H||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(n.flags|=4194308)):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=D),c.props=l,c.state=D,c.context=m,l=T):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{c=n.stateNode,gu(e,n),m=n.memoizedProps,H=Ci(i,m),c.props=H,I=n.pendingProps,z=c.context,D=i.contextType,T=Ji,typeof D=="object"&&D!==null&&(T=dn(D)),v=i.getDerivedStateFromProps,(D=typeof v=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(m!==I||z!==T)&&Xh(n,c,l,T),Vt=!1,z=n.memoizedState,c.state=z,ta(n,l,c,u),na();var O=n.memoizedState;m!==I||z!==O||Vt||e!==null&&e.dependencies!==null&&hr(e.dependencies)?(typeof v=="function"&&(Uu(n,i,v,l),O=n.memoizedState),(H=Vt||Vh(n,i,H,l,z,O,T)||e!==null&&e.dependencies!==null&&hr(e.dependencies))?(D||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(l,O,T),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(l,O,T)),typeof c.componentDidUpdate=="function"&&(n.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof c.componentDidUpdate!="function"||m===e.memoizedProps&&z===e.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&z===e.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=O),c.props=l,c.state=O,c.context=T,l=H):(typeof c.componentDidUpdate!="function"||m===e.memoizedProps&&z===e.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&z===e.memoizedState||(n.flags|=1024),l=!1)}return c=l,Dr(e,n),l=(n.flags&128)!==0,c||l?(c=n.stateNode,i=l&&typeof i.getDerivedStateFromError!="function"?null:c.render(),n.flags|=1,e!==null&&l?(n.child=Ei(n,e.child,null,u),n.child=Ei(n,null,i,u)):mn(e,n,i,u),n.memoizedState=c.state,e=n.child):e=Ct(e,n,u),e}function od(e,n,i,l){return _i(),n.flags|=256,mn(e,n,i,l),n.child}var Fu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Vu(e){return{baseLanes:e,cachePool:Jf()}}function Xu(e,n,i){return e=e!==null?e.childLanes&~i:0,n&&(e|=In),e}function ud(e,n,i){var l=n.pendingProps,u=!1,c=(n.flags&128)!==0,m;if((m=c)||(m=e!==null&&e.memoizedState===null?!1:(We.current&2)!==0),m&&(u=!0,n.flags&=-129),m=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ce){if(u?Kt(n):Zt(),(e=Ve)?(e=gm(e,$n),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:qt!==null?{id:ut,overflow:st}:null,retryLane:536870912,hydrationErrors:null},i=qf(e),i.return=n,n.child=i,hn=n,Ve=null)):e=null,e===null)throw Yt(n);return Cs(e)?n.lanes=32:n.lanes=536870912,null}var v=l.children;return l=l.fallback,u?(Zt(),u=n.mode,v=jr({mode:"hidden",children:v},u),l=vi(l,u,i,null),v.return=n,l.return=n,v.sibling=l,n.child=v,l=n.child,l.memoizedState=Vu(i),l.childLanes=Xu(e,m,i),n.memoizedState=Fu,oa(null,l)):(Kt(n),Qu(n,v))}var T=e.memoizedState;if(T!==null&&(v=T.dehydrated,v!==null)){if(c)n.flags&256?(Kt(n),n.flags&=-257,n=Ku(e,n,i)):n.memoizedState!==null?(Zt(),n.child=e.child,n.flags|=128,n=null):(Zt(),v=l.fallback,u=n.mode,l=jr({mode:"visible",children:l.children},u),v=vi(v,u,i,null),v.flags|=2,l.return=n,v.return=n,l.sibling=v,n.child=l,Ei(n,e.child,null,i),l=n.child,l.memoizedState=Vu(i),l.childLanes=Xu(e,m,i),n.memoizedState=Fu,n=oa(null,l));else if(Kt(n),Cs(v)){if(m=v.nextSibling&&v.nextSibling.dataset,m)var D=m.dgst;m=D,l=Error(o(419)),l.stack="",l.digest=m,Zl({value:l,source:null,stack:null}),n=Ku(e,n,i)}else if(nn||el(e,n,i,!1),m=(i&e.childLanes)!==0,nn||m){if(m=Ie,m!==null&&(l=Qc(m,i),l!==0&&l!==T.retryLane))throw T.retryLane=l,bi(e,l),Dn(m,e,l),Iu;ks(v)||qr(),n=Ku(e,n,i)}else ks(v)?(n.flags|=192,n.child=e.child,n=null):(e=T.treeContext,Ve=nt(v.nextSibling),hn=n,Ce=!0,It=null,$n=!1,e!==null&&Ff(n,e),n=Qu(n,l.children),n.flags|=4096);return n}return u?(Zt(),v=l.fallback,u=n.mode,T=e.child,D=T.sibling,l=wt(T,{mode:"hidden",children:l.children}),l.subtreeFlags=T.subtreeFlags&65011712,D!==null?v=wt(D,v):(v=vi(v,u,i,null),v.flags|=2),v.return=n,l.return=n,l.sibling=v,n.child=l,oa(null,l),l=n.child,v=e.child.memoizedState,v===null?v=Vu(i):(u=v.cachePool,u!==null?(T=$e._currentValue,u=u.parent!==T?{parent:T,pool:T}:u):u=Jf(),v={baseLanes:v.baseLanes|i,cachePool:u}),l.memoizedState=v,l.childLanes=Xu(e,m,i),n.memoizedState=Fu,oa(e.child,l)):(Kt(n),i=e.child,e=i.sibling,i=wt(i,{mode:"visible",children:l.children}),i.return=n,i.sibling=null,e!==null&&(m=n.deletions,m===null?(n.deletions=[e],n.flags|=16):m.push(e)),n.child=i,n.memoizedState=null,i)}function Qu(e,n){return n=jr({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function jr(e,n){return e=Hn(22,e,null,n),e.lanes=0,e}function Ku(e,n,i){return Ei(n,e.child,null,i),e=Qu(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function sd(e,n,i){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n),su(e.return,n,i)}function Zu(e,n,i,l,u,c){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:i,tailMode:u,treeForkCount:c}:(m.isBackwards=n,m.rendering=null,m.renderingStartTime=0,m.last=l,m.tail=i,m.tailMode=u,m.treeForkCount=c)}function cd(e,n,i){var l=n.pendingProps,u=l.revealOrder,c=l.tail;l=l.children;var m=We.current,v=(m&2)!==0;if(v?(m=m&1|2,n.flags|=128):m&=1,w(We,m),mn(e,n,l,i),l=Ce?Kl:0,!v&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&sd(e,i,n);else if(e.tag===19)sd(e,i,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(i=n.child,u=null;i!==null;)e=i.alternate,e!==null&&_r(e)===null&&(u=i),i=i.sibling;i=u,i===null?(u=n.child,n.child=null):(u=i.sibling,i.sibling=null),Zu(n,!1,u,i,c,l);break;case"backwards":case"unstable_legacy-backwards":for(i=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&_r(e)===null){n.child=u;break}e=u.sibling,u.sibling=i,i=u,u=e}Zu(n,!0,i,null,c,l);break;case"together":Zu(n,!1,null,null,void 0,l);break;default:n.memoizedState=null}return n.child}function Ct(e,n,i){if(e!==null&&(n.dependencies=e.dependencies),Pt|=n.lanes,(i&n.childLanes)===0)if(e!==null){if(el(e,n,i,!1),(i&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(o(153));if(n.child!==null){for(e=n.child,i=wt(e,e.pendingProps),n.child=i,i.return=n;e.sibling!==null;)e=e.sibling,i=i.sibling=wt(e,e.pendingProps),i.return=n;i.sibling=null}return n.child}function Ju(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&hr(e)))}function Ob(e,n,i){switch(n.tag){case 3:Qe(n,n.stateNode.containerInfo),Ft(n,$e,e.memoizedState.cache),_i();break;case 27:case 5:Xn(n);break;case 4:Qe(n,n.stateNode.containerInfo);break;case 10:Ft(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Su(n),null;break;case 13:var l=n.memoizedState;if(l!==null)return l.dehydrated!==null?(Kt(n),n.flags|=128,null):(i&n.child.childLanes)!==0?ud(e,n,i):(Kt(n),e=Ct(e,n,i),e!==null?e.sibling:null);Kt(n);break;case 19:var u=(e.flags&128)!==0;if(l=(i&n.childLanes)!==0,l||(el(e,n,i,!1),l=(i&n.childLanes)!==0),u){if(l)return cd(e,n,i);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),w(We,We.current),l)break;return null;case 22:return n.lanes=0,td(e,n,i,n.pendingProps);case 24:Ft(n,$e,e.memoizedState.cache)}return Ct(e,n,i)}function fd(e,n,i){if(e!==null)if(e.memoizedProps!==n.pendingProps)nn=!0;else{if(!Ju(e,i)&&(n.flags&128)===0)return nn=!1,Ob(e,n,i);nn=(e.flags&131072)!==0}else nn=!1,Ce&&(n.flags&1048576)!==0&&Yf(n,Kl,n.index);switch(n.lanes=0,n.tag){case 16:e:{var l=n.pendingProps;if(e=Ti(n.elementType),n.type=e,typeof e=="function")nu(e)?(l=Ci(e,l),n.tag=1,n=rd(null,n,e,l,i)):(n.tag=0,n=Yu(null,n,e,l,i));else{if(e!=null){var u=e.$$typeof;if(u===Q){n.tag=11,n=$h(null,n,e,l,i);break e}else if(u===K){n.tag=14,n=ed(null,n,e,l,i);break e}}throw n=le(e)||e,Error(o(306,n,""))}}return n;case 0:return Yu(e,n,n.type,n.pendingProps,i);case 1:return l=n.type,u=Ci(l,n.pendingProps),rd(e,n,l,u,i);case 3:e:{if(Qe(n,n.stateNode.containerInfo),e===null)throw Error(o(387));l=n.pendingProps;var c=n.memoizedState;u=c.element,gu(e,n),ta(n,l,null,i);var m=n.memoizedState;if(l=m.cache,Ft(n,$e,l),l!==c.cache&&cu(n,[$e],i,!0),na(),l=m.element,c.isDehydrated)if(c={element:l,isDehydrated:!1,cache:m.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=od(e,n,l,i);break e}else if(l!==u){u=Jn(Error(o(424)),n),Zl(u),n=od(e,n,l,i);break e}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ve=nt(e.firstChild),hn=n,Ce=!0,It=null,$n=!0,i=th(n,null,l,i),n.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(_i(),l===u){n=Ct(e,n,i);break e}mn(e,n,l,i)}n=n.child}return n;case 26:return Dr(e,n),e===null?(i=wm(n.type,null,n.pendingProps,null))?n.memoizedState=i:Ce||(i=n.type,e=n.pendingProps,l=Kr(se.current).createElement(i),l[fn]=n,l[An]=e,pn(l,i,e),sn(l),n.stateNode=l):n.memoizedState=wm(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Xn(n),e===null&&Ce&&(l=n.stateNode=vm(n.type,n.pendingProps,se.current),hn=n,$n=!0,u=Ve,ii(n.type)?(Ms=u,Ve=nt(l.firstChild)):Ve=u),mn(e,n,n.pendingProps.children,i),Dr(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ce&&((u=l=Ve)&&(l=c0(l,n.type,n.pendingProps,$n),l!==null?(n.stateNode=l,hn=n,Ve=nt(l.firstChild),$n=!1,u=!0):u=!1),u||Yt(n)),Xn(n),u=n.type,c=n.pendingProps,m=e!==null?e.memoizedProps:null,l=c.children,Ts(u,c)?l=null:m!==null&&Ts(u,m)&&(n.flags|=32),n.memoizedState!==null&&(u=xu(e,n,Ab,null,null,i),wa._currentValue=u),Dr(e,n),mn(e,n,l,i),n.child;case 6:return e===null&&Ce&&((e=i=Ve)&&(i=f0(i,n.pendingProps,$n),i!==null?(n.stateNode=i,hn=n,Ve=null,e=!0):e=!1),e||Yt(n)),null;case 13:return ud(e,n,i);case 4:return Qe(n,n.stateNode.containerInfo),l=n.pendingProps,e===null?n.child=Ei(n,null,l,i):mn(e,n,l,i),n.child;case 11:return $h(e,n,n.type,n.pendingProps,i);case 7:return mn(e,n,n.pendingProps,i),n.child;case 8:return mn(e,n,n.pendingProps.children,i),n.child;case 12:return mn(e,n,n.pendingProps.children,i),n.child;case 10:return l=n.pendingProps,Ft(n,n.type,l.value),mn(e,n,l.children,i),n.child;case 9:return u=n.type._context,l=n.pendingProps.children,wi(n),u=dn(u),l=l(u),n.flags|=1,mn(e,n,l,i),n.child;case 14:return ed(e,n,n.type,n.pendingProps,i);case 15:return nd(e,n,n.type,n.pendingProps,i);case 19:return cd(e,n,i);case 31:return zb(e,n,i);case 22:return td(e,n,i,n.pendingProps);case 24:return wi(n),l=dn($e),e===null?(u=du(),u===null&&(u=Ie,c=fu(),u.pooledCache=c,c.refCount++,c!==null&&(u.pooledCacheLanes|=i),u=c),n.memoizedState={parent:l,cache:u},pu(n),Ft(n,$e,u)):((e.lanes&i)!==0&&(gu(e,n),ta(n,null,null,i),na()),u=e.memoizedState,c=n.memoizedState,u.parent!==l?(u={parent:l,cache:l},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ft(n,$e,l)):(l=c.cache,Ft(n,$e,l),l!==u.cache&&cu(n,[$e],i,!0))),mn(e,n,n.pendingProps.children,i),n.child;case 29:throw n.pendingProps}throw Error(o(156,n.tag))}function Mt(e){e.flags|=4}function Wu(e,n,i,l,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(Hd())e.flags|=8192;else throw Ai=gr,mu}else e.flags&=-16777217}function hd(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!km(n))if(Hd())e.flags|=8192;else throw Ai=gr,mu}function zr(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Fc():536870912,e.lanes|=n,hl|=n)}function ua(e,n){if(!Ce)switch(e.tailMode){case"hidden":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var l=null;i!==null;)i.alternate!==null&&(l=i),i=i.sibling;l===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Xe(e){var n=e.alternate!==null&&e.alternate.child===e.child,i=0,l=0;if(n)for(var u=e.child;u!==null;)i|=u.lanes|u.childLanes,l|=u.subtreeFlags&65011712,l|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)i|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=l,e.childLanes=i,n}function Rb(e,n,i){var l=n.pendingProps;switch(au(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(n),null;case 1:return Xe(n),null;case 3:return i=n.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),At($e),Be(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&($i(n)?Mt(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,ou())),Xe(n),null;case 26:var u=n.type,c=n.memoizedState;return e===null?(Mt(n),c!==null?(Xe(n),hd(n,c)):(Xe(n),Wu(n,u,null,l,i))):c?c!==e.memoizedState?(Mt(n),Xe(n),hd(n,c)):(Xe(n),n.flags&=-16777217):(e=e.memoizedProps,e!==l&&Mt(n),Xe(n),Wu(n,u,e,l,i)),null;case 27:if(gt(n),i=se.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==l&&Mt(n);else{if(!l){if(n.stateNode===null)throw Error(o(166));return Xe(n),null}e=$.current,$i(n)?Vf(n):(e=vm(u,l,i),n.stateNode=e,Mt(n))}return Xe(n),null;case 5:if(gt(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==l&&Mt(n);else{if(!l){if(n.stateNode===null)throw Error(o(166));return Xe(n),null}if(c=$.current,$i(n))Vf(n);else{var m=Kr(se.current);switch(c){case 1:c=m.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:c=m.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":c=m.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":c=m.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":c=m.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof l.is=="string"?m.createElement("select",{is:l.is}):m.createElement("select"),l.multiple?c.multiple=!0:l.size&&(c.size=l.size);break;default:c=typeof l.is=="string"?m.createElement(u,{is:l.is}):m.createElement(u)}}c[fn]=n,c[An]=l;e:for(m=n.child;m!==null;){if(m.tag===5||m.tag===6)c.appendChild(m.stateNode);else if(m.tag!==4&&m.tag!==27&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===n)break e;for(;m.sibling===null;){if(m.return===null||m.return===n)break e;m=m.return}m.sibling.return=m.return,m=m.sibling}n.stateNode=c;e:switch(pn(c,u,l),u){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Mt(n)}}return Xe(n),Wu(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,i),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==l&&Mt(n);else{if(typeof l!="string"&&n.stateNode===null)throw Error(o(166));if(e=se.current,$i(n)){if(e=n.stateNode,i=n.memoizedProps,l=null,u=hn,u!==null)switch(u.tag){case 27:case 5:l=u.memoizedProps}e[fn]=n,e=!!(e.nodeValue===i||l!==null&&l.suppressHydrationWarning===!0||um(e.nodeValue,i)),e||Yt(n,!0)}else e=Kr(e).createTextNode(l),e[fn]=n,n.stateNode=e}return Xe(n),null;case 31:if(i=n.memoizedState,e===null||e.memoizedState!==null){if(l=$i(n),i!==null){if(e===null){if(!l)throw Error(o(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(557));e[fn]=n}else _i(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Xe(n),e=!1}else i=ou(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),e=!0;if(!e)return n.flags&256?(Gn(n),n):(Gn(n),null);if((n.flags&128)!==0)throw Error(o(558))}return Xe(n),null;case 13:if(l=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=$i(n),l!==null&&l.dehydrated!==null){if(e===null){if(!u)throw Error(o(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(o(317));u[fn]=n}else _i(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Xe(n),u=!1}else u=ou(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Gn(n),n):(Gn(n),null)}return Gn(n),(n.flags&128)!==0?(n.lanes=i,n):(i=l!==null,e=e!==null&&e.memoizedState!==null,i&&(l=n.child,u=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(u=l.alternate.memoizedState.cachePool.pool),c=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(c=l.memoizedState.cachePool.pool),c!==u&&(l.flags|=2048)),i!==e&&i&&(n.child.flags|=8192),zr(n,n.updateQueue),Xe(n),null);case 4:return Be(),e===null&&vs(n.stateNode.containerInfo),Xe(n),null;case 10:return At(n.type),Xe(n),null;case 19:if(U(We),l=n.memoizedState,l===null)return Xe(n),null;if(u=(n.flags&128)!==0,c=l.rendering,c===null)if(u)ua(l,!1);else{if(Je!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(c=_r(e),c!==null){for(n.flags|=128,ua(l,!1),e=c.updateQueue,n.updateQueue=e,zr(n,e),n.subtreeFlags=0,e=i,i=n.child;i!==null;)Gf(i,e),i=i.sibling;return w(We,We.current&1|2),Ce&&xt(n,l.treeForkCount),n.child}e=e.sibling}l.tail!==null&&_n()>Hr&&(n.flags|=128,u=!0,ua(l,!1),n.lanes=4194304)}else{if(!u)if(e=_r(c),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,zr(n,e),ua(l,!0),l.tail===null&&l.tailMode==="hidden"&&!c.alternate&&!Ce)return Xe(n),null}else 2*_n()-l.renderingStartTime>Hr&&i!==536870912&&(n.flags|=128,u=!0,ua(l,!1),n.lanes=4194304);l.isBackwards?(c.sibling=n.child,n.child=c):(e=l.last,e!==null?e.sibling=c:n.child=c,l.last=c)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=_n(),e.sibling=null,i=We.current,w(We,u?i&1|2:i&1),Ce&&xt(n,l.treeForkCount),e):(Xe(n),null);case 22:case 23:return Gn(n),_u(),l=n.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(n.flags|=8192):l&&(n.flags|=8192),l?(i&536870912)!==0&&(n.flags&128)===0&&(Xe(n),n.subtreeFlags&6&&(n.flags|=8192)):Xe(n),i=n.updateQueue,i!==null&&zr(n,i.retryQueue),i=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==i&&(n.flags|=2048),e!==null&&U(xi),null;case 24:return i=null,e!==null&&(i=e.memoizedState.cache),n.memoizedState.cache!==i&&(n.flags|=2048),At($e),Xe(n),null;case 25:return null;case 30:return null}throw Error(o(156,n.tag))}function Lb(e,n){switch(au(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return At($e),Be(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return gt(n),null;case 31:if(n.memoizedState!==null){if(Gn(n),n.alternate===null)throw Error(o(340));_i()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Gn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(o(340));_i()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return U(We),null;case 4:return Be(),null;case 10:return At(n.type),null;case 22:case 23:return Gn(n),_u(),e!==null&&U(xi),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return At($e),null;case 25:return null;default:return null}}function dd(e,n){switch(au(n),n.tag){case 3:At($e),Be();break;case 26:case 27:case 5:gt(n);break;case 4:Be();break;case 31:n.memoizedState!==null&&Gn(n);break;case 13:Gn(n);break;case 19:U(We);break;case 10:At(n.type);break;case 22:case 23:Gn(n),_u(),e!==null&&U(xi);break;case 24:At($e)}}function sa(e,n){try{var i=n.updateQueue,l=i!==null?i.lastEffect:null;if(l!==null){var u=l.next;i=u;do{if((i.tag&e)===e){l=void 0;var c=i.create,m=i.inst;l=c(),m.destroy=l}i=i.next}while(i!==u)}}catch(v){Le(n,n.return,v)}}function Jt(e,n,i){try{var l=n.updateQueue,u=l!==null?l.lastEffect:null;if(u!==null){var c=u.next;l=c;do{if((l.tag&e)===e){var m=l.inst,v=m.destroy;if(v!==void 0){m.destroy=void 0,u=n;var T=i,D=v;try{D()}catch(H){Le(u,T,H)}}}l=l.next}while(l!==c)}}catch(H){Le(n,n.return,H)}}function md(e){var n=e.updateQueue;if(n!==null){var i=e.stateNode;try{lh(n,i)}catch(l){Le(e,e.return,l)}}}function pd(e,n,i){i.props=Ci(e.type,e.memoizedProps),i.state=e.memoizedState;try{i.componentWillUnmount()}catch(l){Le(e,n,l)}}function ca(e,n){try{var i=e.ref;if(i!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof i=="function"?e.refCleanup=i(l):i.current=l}}catch(u){Le(e,n,u)}}function ct(e,n){var i=e.ref,l=e.refCleanup;if(i!==null)if(typeof l=="function")try{l()}catch(u){Le(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(u){Le(e,n,u)}else i.current=null}function gd(e){var n=e.type,i=e.memoizedProps,l=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":i.autoFocus&&l.focus();break e;case"img":i.src?l.src=i.src:i.srcSet&&(l.srcset=i.srcSet)}}catch(u){Le(e,e.return,u)}}function Pu(e,n,i){try{var l=e.stateNode;l0(l,e.type,i,n),l[An]=n}catch(u){Le(e,e.return,u)}}function yd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ii(e.type)||e.tag===4}function $u(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||yd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ii(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function es(e,n,i){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(e,n):(n=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,n.appendChild(e),i=i._reactRootContainer,i!=null||n.onclick!==null||(n.onclick=_t));else if(l!==4&&(l===27&&ii(e.type)&&(i=e.stateNode,n=null),e=e.child,e!==null))for(es(e,n,i),e=e.sibling;e!==null;)es(e,n,i),e=e.sibling}function Or(e,n,i){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?i.insertBefore(e,n):i.appendChild(e);else if(l!==4&&(l===27&&ii(e.type)&&(i=e.stateNode),e=e.child,e!==null))for(Or(e,n,i),e=e.sibling;e!==null;)Or(e,n,i),e=e.sibling}function bd(e){var n=e.stateNode,i=e.memoizedProps;try{for(var l=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);pn(n,l,i),n[fn]=e,n[An]=i}catch(c){Le(e,e.return,c)}}var Nt=!1,tn=!1,ns=!1,vd=typeof WeakSet=="function"?WeakSet:Set,cn=null;function Bb(e,n){if(e=e.containerInfo,ws=no,e=Df(e),Ko(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var l=i.getSelection&&i.getSelection();if(l&&l.rangeCount!==0){i=l.anchorNode;var u=l.anchorOffset,c=l.focusNode;l=l.focusOffset;try{i.nodeType,c.nodeType}catch{i=null;break e}var m=0,v=-1,T=-1,D=0,H=0,I=e,z=null;n:for(;;){for(var O;I!==i||u!==0&&I.nodeType!==3||(v=m+u),I!==c||l!==0&&I.nodeType!==3||(T=m+l),I.nodeType===3&&(m+=I.nodeValue.length),(O=I.firstChild)!==null;)z=I,I=O;for(;;){if(I===e)break n;if(z===i&&++D===u&&(v=m),z===c&&++H===l&&(T=m),(O=I.nextSibling)!==null)break;I=z,z=I.parentNode}I=O}i=v===-1||T===-1?null:{start:v,end:T}}else i=null}i=i||{start:0,end:0}}else i=null;for(xs={focusedElem:e,selectionRange:i},no=!1,cn=n;cn!==null;)if(n=cn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,cn=e;else for(;cn!==null;){switch(n=cn,c=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(i=0;i<e.length;i++)u=e[i],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,i=n,u=c.memoizedProps,c=c.memoizedState,l=i.stateNode;try{var te=Ci(i.type,u);e=l.getSnapshotBeforeUpdate(te,c),l.__reactInternalSnapshotBeforeUpdate=e}catch(fe){Le(i,i.return,fe)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,i=e.nodeType,i===9)Es(e);else if(i===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Es(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=n.sibling,e!==null){e.return=n.return,cn=e;break}cn=n.return}}function _d(e,n,i){var l=i.flags;switch(i.tag){case 0:case 11:case 15:jt(e,i),l&4&&sa(5,i);break;case 1:if(jt(e,i),l&4)if(e=i.stateNode,n===null)try{e.componentDidMount()}catch(m){Le(i,i.return,m)}else{var u=Ci(i.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(m){Le(i,i.return,m)}}l&64&&md(i),l&512&&ca(i,i.return);break;case 3:if(jt(e,i),l&64&&(e=i.updateQueue,e!==null)){if(n=null,i.child!==null)switch(i.child.tag){case 27:case 5:n=i.child.stateNode;break;case 1:n=i.child.stateNode}try{lh(e,n)}catch(m){Le(i,i.return,m)}}break;case 27:n===null&&l&4&&bd(i);case 26:case 5:jt(e,i),n===null&&l&4&&gd(i),l&512&&ca(i,i.return);break;case 12:jt(e,i);break;case 31:jt(e,i),l&4&&xd(e,i);break;case 13:jt(e,i),l&4&&Td(e,i),l&64&&(e=i.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(i=Xb.bind(null,i),h0(e,i))));break;case 22:if(l=i.memoizedState!==null||Nt,!l){n=n!==null&&n.memoizedState!==null||tn,u=Nt;var c=tn;Nt=l,(tn=n)&&!c?zt(e,i,(i.subtreeFlags&8772)!==0):jt(e,i),Nt=u,tn=c}break;case 30:break;default:jt(e,i)}}function Sd(e){var n=e.alternate;n!==null&&(e.alternate=null,Sd(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Do(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ke=null,kn=!1;function Dt(e,n,i){for(i=i.child;i!==null;)wd(e,n,i),i=i.sibling}function wd(e,n,i){if(rn&&typeof rn.onCommitFiberUnmount=="function")try{rn.onCommitFiberUnmount(Sn,i)}catch{}switch(i.tag){case 26:tn||ct(i,n),Dt(e,n,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:tn||ct(i,n);var l=Ke,u=kn;ii(i.type)&&(Ke=i.stateNode,kn=!1),Dt(e,n,i),va(i.stateNode),Ke=l,kn=u;break;case 5:tn||ct(i,n);case 6:if(l=Ke,u=kn,Ke=null,Dt(e,n,i),Ke=l,kn=u,Ke!==null)if(kn)try{(Ke.nodeType===9?Ke.body:Ke.nodeName==="HTML"?Ke.ownerDocument.body:Ke).removeChild(i.stateNode)}catch(c){Le(i,n,c)}else try{Ke.removeChild(i.stateNode)}catch(c){Le(i,n,c)}break;case 18:Ke!==null&&(kn?(e=Ke,mm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,i.stateNode),_l(e)):mm(Ke,i.stateNode));break;case 4:l=Ke,u=kn,Ke=i.stateNode.containerInfo,kn=!0,Dt(e,n,i),Ke=l,kn=u;break;case 0:case 11:case 14:case 15:Jt(2,i,n),tn||Jt(4,i,n),Dt(e,n,i);break;case 1:tn||(ct(i,n),l=i.stateNode,typeof l.componentWillUnmount=="function"&&pd(i,n,l)),Dt(e,n,i);break;case 21:Dt(e,n,i);break;case 22:tn=(l=tn)||i.memoizedState!==null,Dt(e,n,i),tn=l;break;default:Dt(e,n,i)}}function xd(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{_l(e)}catch(i){Le(n,n.return,i)}}}function Td(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{_l(e)}catch(i){Le(n,n.return,i)}}function Hb(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new vd),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new vd),n;default:throw Error(o(435,e.tag))}}function Rr(e,n){var i=Hb(e);n.forEach(function(l){if(!i.has(l)){i.add(l);var u=Qb.bind(null,e,l);l.then(u,u)}})}function Cn(e,n){var i=n.deletions;if(i!==null)for(var l=0;l<i.length;l++){var u=i[l],c=e,m=n,v=m;e:for(;v!==null;){switch(v.tag){case 27:if(ii(v.type)){Ke=v.stateNode,kn=!1;break e}break;case 5:Ke=v.stateNode,kn=!1;break e;case 3:case 4:Ke=v.stateNode.containerInfo,kn=!0;break e}v=v.return}if(Ke===null)throw Error(o(160));wd(c,m,u),Ke=null,kn=!1,c=u.alternate,c!==null&&(c.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Ad(n,e),n=n.sibling}var rt=null;function Ad(e,n){var i=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Cn(n,e),Mn(e),l&4&&(Jt(3,e,e.return),sa(3,e),Jt(5,e,e.return));break;case 1:Cn(n,e),Mn(e),l&512&&(tn||i===null||ct(i,i.return)),l&64&&Nt&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(i=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=i===null?l:i.concat(l))));break;case 26:var u=rt;if(Cn(n,e),Mn(e),l&512&&(tn||i===null||ct(i,i.return)),l&4){var c=i!==null?i.memoizedState:null;if(l=e.memoizedState,i===null)if(l===null)if(e.stateNode===null){e:{l=e.type,i=e.memoizedProps,u=u.ownerDocument||u;n:switch(l){case"title":c=u.getElementsByTagName("title")[0],(!c||c[Bl]||c[fn]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=u.createElement(l),u.head.insertBefore(c,u.querySelector("head > title"))),pn(c,l,i),c[fn]=e,sn(c),l=c;break e;case"link":var m=Am("link","href",u).get(l+(i.href||""));if(m){for(var v=0;v<m.length;v++)if(c=m[v],c.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&c.getAttribute("rel")===(i.rel==null?null:i.rel)&&c.getAttribute("title")===(i.title==null?null:i.title)&&c.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){m.splice(v,1);break n}}c=u.createElement(l),pn(c,l,i),u.head.appendChild(c);break;case"meta":if(m=Am("meta","content",u).get(l+(i.content||""))){for(v=0;v<m.length;v++)if(c=m[v],c.getAttribute("content")===(i.content==null?null:""+i.content)&&c.getAttribute("name")===(i.name==null?null:i.name)&&c.getAttribute("property")===(i.property==null?null:i.property)&&c.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&c.getAttribute("charset")===(i.charSet==null?null:i.charSet)){m.splice(v,1);break n}}c=u.createElement(l),pn(c,l,i),u.head.appendChild(c);break;default:throw Error(o(468,l))}c[fn]=e,sn(c),l=c}e.stateNode=l}else Em(u,e.type,e.stateNode);else e.stateNode=Tm(u,l,e.memoizedProps);else c!==l?(c===null?i.stateNode!==null&&(i=i.stateNode,i.parentNode.removeChild(i)):c.count--,l===null?Em(u,e.type,e.stateNode):Tm(u,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Pu(e,e.memoizedProps,i.memoizedProps)}break;case 27:Cn(n,e),Mn(e),l&512&&(tn||i===null||ct(i,i.return)),i!==null&&l&4&&Pu(e,e.memoizedProps,i.memoizedProps);break;case 5:if(Cn(n,e),Mn(e),l&512&&(tn||i===null||ct(i,i.return)),e.flags&32){u=e.stateNode;try{Yi(u,"")}catch(te){Le(e,e.return,te)}}l&4&&e.stateNode!=null&&(u=e.memoizedProps,Pu(e,u,i!==null?i.memoizedProps:u)),l&1024&&(ns=!0);break;case 6:if(Cn(n,e),Mn(e),l&4){if(e.stateNode===null)throw Error(o(162));l=e.memoizedProps,i=e.stateNode;try{i.nodeValue=l}catch(te){Le(e,e.return,te)}}break;case 3:if(Wr=null,u=rt,rt=Zr(n.containerInfo),Cn(n,e),rt=u,Mn(e),l&4&&i!==null&&i.memoizedState.isDehydrated)try{_l(n.containerInfo)}catch(te){Le(e,e.return,te)}ns&&(ns=!1,Ed(e));break;case 4:l=rt,rt=Zr(e.stateNode.containerInfo),Cn(n,e),Mn(e),rt=l;break;case 12:Cn(n,e),Mn(e);break;case 31:Cn(n,e),Mn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Rr(e,l)));break;case 13:Cn(n,e),Mn(e),e.child.flags&8192&&e.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(Br=_n()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Rr(e,l)));break;case 22:u=e.memoizedState!==null;var T=i!==null&&i.memoizedState!==null,D=Nt,H=tn;if(Nt=D||u,tn=H||T,Cn(n,e),tn=H,Nt=D,Mn(e),l&8192)e:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(i===null||T||Nt||tn||Mi(e)),i=null,n=e;;){if(n.tag===5||n.tag===26){if(i===null){T=i=n;try{if(c=T.stateNode,u)m=c.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none";else{v=T.stateNode;var I=T.memoizedProps.style,z=I!=null&&I.hasOwnProperty("display")?I.display:null;v.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(te){Le(T,T.return,te)}}}else if(n.tag===6){if(i===null){T=n;try{T.stateNode.nodeValue=u?"":T.memoizedProps}catch(te){Le(T,T.return,te)}}}else if(n.tag===18){if(i===null){T=n;try{var O=T.stateNode;u?pm(O,!0):pm(T.stateNode,!1)}catch(te){Le(T,T.return,te)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;i===n&&(i=null),n=n.return}i===n&&(i=null),n.sibling.return=n.return,n=n.sibling}l&4&&(l=e.updateQueue,l!==null&&(i=l.retryQueue,i!==null&&(l.retryQueue=null,Rr(e,i))));break;case 19:Cn(n,e),Mn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Rr(e,l)));break;case 30:break;case 21:break;default:Cn(n,e),Mn(e)}}function Mn(e){var n=e.flags;if(n&2){try{for(var i,l=e.return;l!==null;){if(yd(l)){i=l;break}l=l.return}if(i==null)throw Error(o(160));switch(i.tag){case 27:var u=i.stateNode,c=$u(e);Or(e,c,u);break;case 5:var m=i.stateNode;i.flags&32&&(Yi(m,""),i.flags&=-33);var v=$u(e);Or(e,v,m);break;case 3:case 4:var T=i.stateNode.containerInfo,D=$u(e);es(e,D,T);break;default:throw Error(o(161))}}catch(H){Le(e,e.return,H)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Ed(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Ed(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function jt(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)_d(e,n.alternate,n),n=n.sibling}function Mi(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Jt(4,n,n.return),Mi(n);break;case 1:ct(n,n.return);var i=n.stateNode;typeof i.componentWillUnmount=="function"&&pd(n,n.return,i),Mi(n);break;case 27:va(n.stateNode);case 26:case 5:ct(n,n.return),Mi(n);break;case 22:n.memoizedState===null&&Mi(n);break;case 30:Mi(n);break;default:Mi(n)}e=e.sibling}}function zt(e,n,i){for(i=i&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var l=n.alternate,u=e,c=n,m=c.flags;switch(c.tag){case 0:case 11:case 15:zt(u,c,i),sa(4,c);break;case 1:if(zt(u,c,i),l=c,u=l.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(D){Le(l,l.return,D)}if(l=c,u=l.updateQueue,u!==null){var v=l.stateNode;try{var T=u.shared.hiddenCallbacks;if(T!==null)for(u.shared.hiddenCallbacks=null,u=0;u<T.length;u++)ih(T[u],v)}catch(D){Le(l,l.return,D)}}i&&m&64&&md(c),ca(c,c.return);break;case 27:bd(c);case 26:case 5:zt(u,c,i),i&&l===null&&m&4&&gd(c),ca(c,c.return);break;case 12:zt(u,c,i);break;case 31:zt(u,c,i),i&&m&4&&xd(u,c);break;case 13:zt(u,c,i),i&&m&4&&Td(u,c);break;case 22:c.memoizedState===null&&zt(u,c,i),ca(c,c.return);break;case 30:break;default:zt(u,c,i)}n=n.sibling}}function ts(e,n){var i=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==i&&(e!=null&&e.refCount++,i!=null&&Jl(i))}function is(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Jl(e))}function ot(e,n,i,l){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)kd(e,n,i,l),n=n.sibling}function kd(e,n,i,l){var u=n.flags;switch(n.tag){case 0:case 11:case 15:ot(e,n,i,l),u&2048&&sa(9,n);break;case 1:ot(e,n,i,l);break;case 3:ot(e,n,i,l),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Jl(e)));break;case 12:if(u&2048){ot(e,n,i,l),e=n.stateNode;try{var c=n.memoizedProps,m=c.id,v=c.onPostCommit;typeof v=="function"&&v(m,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(T){Le(n,n.return,T)}}else ot(e,n,i,l);break;case 31:ot(e,n,i,l);break;case 13:ot(e,n,i,l);break;case 23:break;case 22:c=n.stateNode,m=n.alternate,n.memoizedState!==null?c._visibility&2?ot(e,n,i,l):fa(e,n):c._visibility&2?ot(e,n,i,l):(c._visibility|=2,sl(e,n,i,l,(n.subtreeFlags&10256)!==0||!1)),u&2048&&ts(m,n);break;case 24:ot(e,n,i,l),u&2048&&is(n.alternate,n);break;default:ot(e,n,i,l)}}function sl(e,n,i,l,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var c=e,m=n,v=i,T=l,D=m.flags;switch(m.tag){case 0:case 11:case 15:sl(c,m,v,T,u),sa(8,m);break;case 23:break;case 22:var H=m.stateNode;m.memoizedState!==null?H._visibility&2?sl(c,m,v,T,u):fa(c,m):(H._visibility|=2,sl(c,m,v,T,u)),u&&D&2048&&ts(m.alternate,m);break;case 24:sl(c,m,v,T,u),u&&D&2048&&is(m.alternate,m);break;default:sl(c,m,v,T,u)}n=n.sibling}}function fa(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var i=e,l=n,u=l.flags;switch(l.tag){case 22:fa(i,l),u&2048&&ts(l.alternate,l);break;case 24:fa(i,l),u&2048&&is(l.alternate,l);break;default:fa(i,l)}n=n.sibling}}var ha=8192;function cl(e,n,i){if(e.subtreeFlags&ha)for(e=e.child;e!==null;)Cd(e,n,i),e=e.sibling}function Cd(e,n,i){switch(e.tag){case 26:cl(e,n,i),e.flags&ha&&e.memoizedState!==null&&T0(i,rt,e.memoizedState,e.memoizedProps);break;case 5:cl(e,n,i);break;case 3:case 4:var l=rt;rt=Zr(e.stateNode.containerInfo),cl(e,n,i),rt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=ha,ha=16777216,cl(e,n,i),ha=l):cl(e,n,i));break;default:cl(e,n,i)}}function Md(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function da(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var i=0;i<n.length;i++){var l=n[i];cn=l,Dd(l,e)}Md(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Nd(e),e=e.sibling}function Nd(e){switch(e.tag){case 0:case 11:case 15:da(e),e.flags&2048&&Jt(9,e,e.return);break;case 3:da(e);break;case 12:da(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Lr(e)):da(e);break;default:da(e)}}function Lr(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var i=0;i<n.length;i++){var l=n[i];cn=l,Dd(l,e)}Md(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Jt(8,n,n.return),Lr(n);break;case 22:i=n.stateNode,i._visibility&2&&(i._visibility&=-3,Lr(n));break;default:Lr(n)}e=e.sibling}}function Dd(e,n){for(;cn!==null;){var i=cn;switch(i.tag){case 0:case 11:case 15:Jt(8,i,n);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var l=i.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Jl(i.memoizedState.cache)}if(l=i.child,l!==null)l.return=i,cn=l;else e:for(i=e;cn!==null;){l=cn;var u=l.sibling,c=l.return;if(Sd(l),l===i){cn=null;break e}if(u!==null){u.return=c,cn=u;break e}cn=c}}}var Ub={getCacheForType:function(e){var n=dn($e),i=n.data.get(e);return i===void 0&&(i=e(),n.data.set(e,i)),i},cacheSignal:function(){return dn($e).controller.signal}},Gb=typeof WeakMap=="function"?WeakMap:Map,je=0,Ie=null,xe=null,Ee=0,Re=0,qn=null,Wt=!1,fl=!1,ls=!1,Ot=0,Je=0,Pt=0,Ni=0,as=0,In=0,hl=0,ma=null,Nn=null,rs=!1,Br=0,jd=0,Hr=1/0,Ur=null,$t=null,on=0,ei=null,dl=null,Rt=0,os=0,us=null,zd=null,pa=0,ss=null;function Yn(){return(je&2)!==0&&Ee!==0?Ee&-Ee:M.T!==null?ps():Kc()}function Od(){if(In===0)if((Ee&536870912)===0||Ce){var e=Qa;Qa<<=1,(Qa&3932160)===0&&(Qa=262144),In=e}else In=536870912;return e=Un.current,e!==null&&(e.flags|=32),In}function Dn(e,n,i){(e===Ie&&(Re===2||Re===9)||e.cancelPendingCommit!==null)&&(ml(e,0),ni(e,Ee,In,!1)),Ll(e,i),((je&2)===0||e!==Ie)&&(e===Ie&&((je&2)===0&&(Ni|=i),Je===4&&ni(e,Ee,In,!1)),ft(e))}function Rd(e,n,i){if((je&6)!==0)throw Error(o(327));var l=!i&&(n&127)===0&&(n&e.expiredLanes)===0||Rl(e,n),u=l?Yb(e,n):fs(e,n,!0),c=l;do{if(u===0){fl&&!l&&ni(e,n,0,!1);break}else{if(i=e.current.alternate,c&&!qb(i)){u=fs(e,n,!1),c=!1;continue}if(u===2){if(c=n,e.errorRecoveryDisabledLanes&c)var m=0;else m=e.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){n=m;e:{var v=e;u=ma;var T=v.current.memoizedState.isDehydrated;if(T&&(ml(v,m).flags|=256),m=fs(v,m,!1),m!==2){if(ls&&!T){v.errorRecoveryDisabledLanes|=c,Ni|=c,u=4;break e}c=Nn,Nn=u,c!==null&&(Nn===null?Nn=c:Nn.push.apply(Nn,c))}u=m}if(c=!1,u!==2)continue}}if(u===1){ml(e,0),ni(e,n,0,!0);break}e:{switch(l=e,c=u,c){case 0:case 1:throw Error(o(345));case 4:if((n&4194048)!==n)break;case 6:ni(l,n,In,!Wt);break e;case 2:Nn=null;break;case 3:case 5:break;default:throw Error(o(329))}if((n&62914560)===n&&(u=Br+300-_n(),10<u)){if(ni(l,n,In,!Wt),Za(l,0,!0)!==0)break e;Rt=n,l.timeoutHandle=hm(Ld.bind(null,l,i,Nn,Ur,rs,n,In,Ni,hl,Wt,c,"Throttled",-0,0),u);break e}Ld(l,i,Nn,Ur,rs,n,In,Ni,hl,Wt,c,null,-0,0)}}break}while(!0);ft(e)}function Ld(e,n,i,l,u,c,m,v,T,D,H,I,z,O){if(e.timeoutHandle=-1,I=n.subtreeFlags,I&8192||(I&16785408)===16785408){I={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:_t},Cd(n,c,I);var te=(c&62914560)===c?Br-_n():(c&4194048)===c?jd-_n():0;if(te=A0(I,te),te!==null){Rt=c,e.cancelPendingCommit=te(Fd.bind(null,e,n,c,i,l,u,m,v,T,H,I,null,z,O)),ni(e,c,m,!D);return}}Fd(e,n,c,i,l,u,m,v,T)}function qb(e){for(var n=e;;){var i=n.tag;if((i===0||i===11||i===15)&&n.flags&16384&&(i=n.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var l=0;l<i.length;l++){var u=i[l],c=u.getSnapshot;u=u.value;try{if(!Bn(c(),u))return!1}catch{return!1}}if(i=n.child,n.subtreeFlags&16384&&i!==null)i.return=n,n=i;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ni(e,n,i,l){n&=~as,n&=~Ni,e.suspendedLanes|=n,e.pingedLanes&=~n,l&&(e.warmLanes|=n),l=e.expirationTimes;for(var u=n;0<u;){var c=31-qe(u),m=1<<c;l[c]=-1,u&=~m}i!==0&&Vc(e,i,n)}function Gr(){return(je&6)===0?(ga(0),!1):!0}function cs(){if(xe!==null){if(Re===0)var e=xe.return;else e=xe,Tt=Si=null,Eu(e),ll=null,Pl=0,e=xe;for(;e!==null;)dd(e.alternate,e),e=e.return;xe=null}}function ml(e,n){var i=e.timeoutHandle;i!==-1&&(e.timeoutHandle=-1,o0(i)),i=e.cancelPendingCommit,i!==null&&(e.cancelPendingCommit=null,i()),Rt=0,cs(),Ie=e,xe=i=wt(e.current,null),Ee=n,Re=0,qn=null,Wt=!1,fl=Rl(e,n),ls=!1,hl=In=as=Ni=Pt=Je=0,Nn=ma=null,rs=!1,(n&8)!==0&&(n|=n&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=n;0<l;){var u=31-qe(l),c=1<<u;n|=e[u],l&=~c}return Ot=n,or(),i}function Bd(e,n){ye=null,M.H=ra,n===il||n===pr?(n=$f(),Re=3):n===mu?(n=$f(),Re=4):Re=n===Iu?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,qn=n,xe===null&&(Je=1,Mr(e,Jn(n,e.current)))}function Hd(){var e=Un.current;return e===null?!0:(Ee&4194048)===Ee?et===null:(Ee&62914560)===Ee||(Ee&536870912)!==0?e===et:!1}function Ud(){var e=M.H;return M.H=ra,e===null?ra:e}function Gd(){var e=M.A;return M.A=Ub,e}function qr(){Je=4,Wt||(Ee&4194048)!==Ee&&Un.current!==null||(fl=!0),(Pt&134217727)===0&&(Ni&134217727)===0||Ie===null||ni(Ie,Ee,In,!1)}function fs(e,n,i){var l=je;je|=2;var u=Ud(),c=Gd();(Ie!==e||Ee!==n)&&(Ur=null,ml(e,n)),n=!1;var m=Je;e:do try{if(Re!==0&&xe!==null){var v=xe,T=qn;switch(Re){case 8:cs(),m=6;break e;case 3:case 2:case 9:case 6:Un.current===null&&(n=!0);var D=Re;if(Re=0,qn=null,pl(e,v,T,D),i&&fl){m=0;break e}break;default:D=Re,Re=0,qn=null,pl(e,v,T,D)}}Ib(),m=Je;break}catch(H){Bd(e,H)}while(!0);return n&&e.shellSuspendCounter++,Tt=Si=null,je=l,M.H=u,M.A=c,xe===null&&(Ie=null,Ee=0,or()),m}function Ib(){for(;xe!==null;)qd(xe)}function Yb(e,n){var i=je;je|=2;var l=Ud(),u=Gd();Ie!==e||Ee!==n?(Ur=null,Hr=_n()+500,ml(e,n)):fl=Rl(e,n);e:do try{if(Re!==0&&xe!==null){n=xe;var c=qn;n:switch(Re){case 1:Re=0,qn=null,pl(e,n,c,1);break;case 2:case 9:if(Wf(c)){Re=0,qn=null,Id(n);break}n=function(){Re!==2&&Re!==9||Ie!==e||(Re=7),ft(e)},c.then(n,n);break e;case 3:Re=7;break e;case 4:Re=5;break e;case 7:Wf(c)?(Re=0,qn=null,Id(n)):(Re=0,qn=null,pl(e,n,c,7));break;case 5:var m=null;switch(xe.tag){case 26:m=xe.memoizedState;case 5:case 27:var v=xe;if(m?km(m):v.stateNode.complete){Re=0,qn=null;var T=v.sibling;if(T!==null)xe=T;else{var D=v.return;D!==null?(xe=D,Ir(D)):xe=null}break n}}Re=0,qn=null,pl(e,n,c,5);break;case 6:Re=0,qn=null,pl(e,n,c,6);break;case 8:cs(),Je=6;break e;default:throw Error(o(462))}}Fb();break}catch(H){Bd(e,H)}while(!0);return Tt=Si=null,M.H=l,M.A=u,je=i,xe!==null?0:(Ie=null,Ee=0,or(),Je)}function Fb(){for(;xe!==null&&!To();)qd(xe)}function qd(e){var n=fd(e.alternate,e,Ot);e.memoizedProps=e.pendingProps,n===null?Ir(e):xe=n}function Id(e){var n=e,i=n.alternate;switch(n.tag){case 15:case 0:n=ad(i,n,n.pendingProps,n.type,void 0,Ee);break;case 11:n=ad(i,n,n.pendingProps,n.type.render,n.ref,Ee);break;case 5:Eu(n);default:dd(i,n),n=xe=Gf(n,Ot),n=fd(i,n,Ot)}e.memoizedProps=e.pendingProps,n===null?Ir(e):xe=n}function pl(e,n,i,l){Tt=Si=null,Eu(n),ll=null,Pl=0;var u=n.return;try{if(jb(e,u,n,i,Ee)){Je=1,Mr(e,Jn(i,e.current)),xe=null;return}}catch(c){if(u!==null)throw xe=u,c;Je=1,Mr(e,Jn(i,e.current)),xe=null;return}n.flags&32768?(Ce||l===1?e=!0:fl||(Ee&536870912)!==0?e=!1:(Wt=e=!0,(l===2||l===9||l===3||l===6)&&(l=Un.current,l!==null&&l.tag===13&&(l.flags|=16384))),Yd(n,e)):Ir(n)}function Ir(e){var n=e;do{if((n.flags&32768)!==0){Yd(n,Wt);return}e=n.return;var i=Rb(n.alternate,n,Ot);if(i!==null){xe=i;return}if(n=n.sibling,n!==null){xe=n;return}xe=n=e}while(n!==null);Je===0&&(Je=5)}function Yd(e,n){do{var i=Lb(e.alternate,e);if(i!==null){i.flags&=32767,xe=i;return}if(i=e.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!n&&(e=e.sibling,e!==null)){xe=e;return}xe=e=i}while(e!==null);Je=6,xe=null}function Fd(e,n,i,l,u,c,m,v,T){e.cancelPendingCommit=null;do Yr();while(on!==0);if((je&6)!==0)throw Error(o(327));if(n!==null){if(n===e.current)throw Error(o(177));if(c=n.lanes|n.childLanes,c|=$o,xy(e,i,c,m,v,T),e===Ie&&(xe=Ie=null,Ee=0),dl=n,ei=e,Rt=i,os=c,us=u,zd=l,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Kb(de,function(){return Zd(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||l){l=M.T,M.T=null,u=X.p,X.p=2,m=je,je|=4;try{Bb(e,n,i)}finally{je=m,X.p=u,M.T=l}}on=1,Vd(),Xd(),Qd()}}function Vd(){if(on===1){on=0;var e=ei,n=dl,i=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||i){i=M.T,M.T=null;var l=X.p;X.p=2;var u=je;je|=4;try{Ad(n,e);var c=xs,m=Df(e.containerInfo),v=c.focusedElem,T=c.selectionRange;if(m!==v&&v&&v.ownerDocument&&Nf(v.ownerDocument.documentElement,v)){if(T!==null&&Ko(v)){var D=T.start,H=T.end;if(H===void 0&&(H=D),"selectionStart"in v)v.selectionStart=D,v.selectionEnd=Math.min(H,v.value.length);else{var I=v.ownerDocument||document,z=I&&I.defaultView||window;if(z.getSelection){var O=z.getSelection(),te=v.textContent.length,fe=Math.min(T.start,te),Ge=T.end===void 0?fe:Math.min(T.end,te);!O.extend&&fe>Ge&&(m=Ge,Ge=fe,fe=m);var C=Mf(v,fe),E=Mf(v,Ge);if(C&&E&&(O.rangeCount!==1||O.anchorNode!==C.node||O.anchorOffset!==C.offset||O.focusNode!==E.node||O.focusOffset!==E.offset)){var N=I.createRange();N.setStart(C.node,C.offset),O.removeAllRanges(),fe>Ge?(O.addRange(N),O.extend(E.node,E.offset)):(N.setEnd(E.node,E.offset),O.addRange(N))}}}}for(I=[],O=v;O=O.parentNode;)O.nodeType===1&&I.push({element:O,left:O.scrollLeft,top:O.scrollTop});for(typeof v.focus=="function"&&v.focus(),v=0;v<I.length;v++){var q=I[v];q.element.scrollLeft=q.left,q.element.scrollTop=q.top}}no=!!ws,xs=ws=null}finally{je=u,X.p=l,M.T=i}}e.current=n,on=2}}function Xd(){if(on===2){on=0;var e=ei,n=dl,i=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||i){i=M.T,M.T=null;var l=X.p;X.p=2;var u=je;je|=4;try{_d(e,n.alternate,n)}finally{je=u,X.p=l,M.T=i}}on=3}}function Qd(){if(on===4||on===3){on=0,Ao();var e=ei,n=dl,i=Rt,l=zd;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?on=5:(on=0,dl=ei=null,Kd(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&($t=null),Mo(i),n=n.stateNode,rn&&typeof rn.onCommitFiberRoot=="function")try{rn.onCommitFiberRoot(Sn,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=M.T,u=X.p,X.p=2,M.T=null;try{for(var c=e.onRecoverableError,m=0;m<l.length;m++){var v=l[m];c(v.value,{componentStack:v.stack})}}finally{M.T=n,X.p=u}}(Rt&3)!==0&&Yr(),ft(e),u=e.pendingLanes,(i&261930)!==0&&(u&42)!==0?e===ss?pa++:(pa=0,ss=e):pa=0,ga(0)}}function Kd(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Jl(n)))}function Yr(){return Vd(),Xd(),Qd(),Zd()}function Zd(){if(on!==5)return!1;var e=ei,n=os;os=0;var i=Mo(Rt),l=M.T,u=X.p;try{X.p=32>i?32:i,M.T=null,i=us,us=null;var c=ei,m=Rt;if(on=0,dl=ei=null,Rt=0,(je&6)!==0)throw Error(o(331));var v=je;if(je|=4,Nd(c.current),kd(c,c.current,m,i),je=v,ga(0,!1),rn&&typeof rn.onPostCommitFiberRoot=="function")try{rn.onPostCommitFiberRoot(Sn,c)}catch{}return!0}finally{X.p=u,M.T=l,Kd(e,n)}}function Jd(e,n,i){n=Jn(i,n),n=qu(e.stateNode,n,2),e=Qt(e,n,2),e!==null&&(Ll(e,2),ft(e))}function Le(e,n,i){if(e.tag===3)Jd(e,e,i);else for(;n!==null;){if(n.tag===3){Jd(n,e,i);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&($t===null||!$t.has(l))){e=Jn(i,e),i=Wh(2),l=Qt(n,i,2),l!==null&&(Ph(i,l,n,e),Ll(l,2),ft(l));break}}n=n.return}}function hs(e,n,i){var l=e.pingCache;if(l===null){l=e.pingCache=new Gb;var u=new Set;l.set(n,u)}else u=l.get(n),u===void 0&&(u=new Set,l.set(n,u));u.has(i)||(ls=!0,u.add(i),e=Vb.bind(null,e,n,i),n.then(e,e))}function Vb(e,n,i){var l=e.pingCache;l!==null&&l.delete(n),e.pingedLanes|=e.suspendedLanes&i,e.warmLanes&=~i,Ie===e&&(Ee&i)===i&&(Je===4||Je===3&&(Ee&62914560)===Ee&&300>_n()-Br?(je&2)===0&&ml(e,0):as|=i,hl===Ee&&(hl=0)),ft(e)}function Wd(e,n){n===0&&(n=Fc()),e=bi(e,n),e!==null&&(Ll(e,n),ft(e))}function Xb(e){var n=e.memoizedState,i=0;n!==null&&(i=n.retryLane),Wd(e,i)}function Qb(e,n){var i=0;switch(e.tag){case 31:case 13:var l=e.stateNode,u=e.memoizedState;u!==null&&(i=u.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(o(314))}l!==null&&l.delete(n),Wd(e,i)}function Kb(e,n){return Li(e,n)}var Fr=null,gl=null,ds=!1,Vr=!1,ms=!1,ti=0;function ft(e){e!==gl&&e.next===null&&(gl===null?Fr=gl=e:gl=gl.next=e),Vr=!0,ds||(ds=!0,Jb())}function ga(e,n){if(!ms&&Vr){ms=!0;do for(var i=!1,l=Fr;l!==null;){if(e!==0){var u=l.pendingLanes;if(u===0)var c=0;else{var m=l.suspendedLanes,v=l.pingedLanes;c=(1<<31-qe(42|e)+1)-1,c&=u&~(m&~v),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(i=!0,nm(l,c))}else c=Ee,c=Za(l,l===Ie?c:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(c&3)===0||Rl(l,c)||(i=!0,nm(l,c));l=l.next}while(i);ms=!1}}function Zb(){Pd()}function Pd(){Vr=ds=!1;var e=0;ti!==0&&r0()&&(e=ti);for(var n=_n(),i=null,l=Fr;l!==null;){var u=l.next,c=$d(l,n);c===0?(l.next=null,i===null?Fr=u:i.next=u,u===null&&(gl=i)):(i=l,(e!==0||(c&3)!==0)&&(Vr=!0)),l=u}on!==0&&on!==5||ga(e),ti!==0&&(ti=0)}function $d(e,n){for(var i=e.suspendedLanes,l=e.pingedLanes,u=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var m=31-qe(c),v=1<<m,T=u[m];T===-1?((v&i)===0||(v&l)!==0)&&(u[m]=wy(v,n)):T<=n&&(e.expiredLanes|=v),c&=~v}if(n=Ie,i=Ee,i=Za(e,e===n?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,i===0||e===n&&(Re===2||Re===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Ol(l),e.callbackNode=null,e.callbackPriority=0;if((i&3)===0||Rl(e,i)){if(n=i&-i,n===e.callbackPriority)return n;switch(l!==null&&Ol(l),Mo(i)){case 2:case 8:i=J;break;case 32:i=de;break;case 268435456:i=Oe;break;default:i=de}return l=em.bind(null,e),i=Li(i,l),e.callbackPriority=n,e.callbackNode=i,n}return l!==null&&l!==null&&Ol(l),e.callbackPriority=2,e.callbackNode=null,2}function em(e,n){if(on!==0&&on!==5)return e.callbackNode=null,e.callbackPriority=0,null;var i=e.callbackNode;if(Yr()&&e.callbackNode!==i)return null;var l=Ee;return l=Za(e,e===Ie?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Rd(e,l,n),$d(e,_n()),e.callbackNode!=null&&e.callbackNode===i?em.bind(null,e):null)}function nm(e,n){if(Yr())return null;Rd(e,n,!0)}function Jb(){u0(function(){(je&6)!==0?Li(G,Zb):Pd()})}function ps(){if(ti===0){var e=nl;e===0&&(e=Xa,Xa<<=1,(Xa&261888)===0&&(Xa=256)),ti=e}return ti}function tm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:$a(""+e)}function im(e,n){var i=n.ownerDocument.createElement("input");return i.name=n.name,i.value=n.value,e.id&&i.setAttribute("form",e.id),n.parentNode.insertBefore(i,n),e=new FormData(e),i.parentNode.removeChild(i),e}function Wb(e,n,i,l,u){if(n==="submit"&&i&&i.stateNode===u){var c=tm((u[An]||null).action),m=l.submitter;m&&(n=(n=m[An]||null)?tm(n.formAction):m.getAttribute("formAction"),n!==null&&(c=n,m=null));var v=new ir("action","action",null,l,u);e.push({event:v,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ti!==0){var T=m?im(u,m):new FormData(u);Ru(i,{pending:!0,data:T,method:u.method,action:c},null,T)}}else typeof c=="function"&&(v.preventDefault(),T=m?im(u,m):new FormData(u),Ru(i,{pending:!0,data:T,method:u.method,action:c},c,T))},currentTarget:u}]})}}for(var gs=0;gs<Po.length;gs++){var ys=Po[gs],Pb=ys.toLowerCase(),$b=ys[0].toUpperCase()+ys.slice(1);at(Pb,"on"+$b)}at(Of,"onAnimationEnd"),at(Rf,"onAnimationIteration"),at(Lf,"onAnimationStart"),at("dblclick","onDoubleClick"),at("focusin","onFocus"),at("focusout","onBlur"),at(pb,"onTransitionRun"),at(gb,"onTransitionStart"),at(yb,"onTransitionCancel"),at(Bf,"onTransitionEnd"),qi("onMouseEnter",["mouseout","mouseover"]),qi("onMouseLeave",["mouseout","mouseover"]),qi("onPointerEnter",["pointerout","pointerover"]),qi("onPointerLeave",["pointerout","pointerover"]),mi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),mi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),mi("onBeforeInput",["compositionend","keypress","textInput","paste"]),mi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),mi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),mi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ya="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),e0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ya));function lm(e,n){n=(n&4)!==0;for(var i=0;i<e.length;i++){var l=e[i],u=l.event;l=l.listeners;e:{var c=void 0;if(n)for(var m=l.length-1;0<=m;m--){var v=l[m],T=v.instance,D=v.currentTarget;if(v=v.listener,T!==c&&u.isPropagationStopped())break e;c=v,u.currentTarget=D;try{c(u)}catch(H){rr(H)}u.currentTarget=null,c=T}else for(m=0;m<l.length;m++){if(v=l[m],T=v.instance,D=v.currentTarget,v=v.listener,T!==c&&u.isPropagationStopped())break e;c=v,u.currentTarget=D;try{c(u)}catch(H){rr(H)}u.currentTarget=null,c=T}}}}function Te(e,n){var i=n[No];i===void 0&&(i=n[No]=new Set);var l=e+"__bubble";i.has(l)||(am(n,e,2,!1),i.add(l))}function bs(e,n,i){var l=0;n&&(l|=4),am(i,e,l,n)}var Xr="_reactListening"+Math.random().toString(36).slice(2);function vs(e){if(!e[Xr]){e[Xr]=!0,Wc.forEach(function(i){i!=="selectionchange"&&(e0.has(i)||bs(i,!1,e),bs(i,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Xr]||(n[Xr]=!0,bs("selectionchange",!1,n))}}function am(e,n,i,l){switch(Om(n)){case 2:var u=C0;break;case 8:u=M0;break;default:u=Os}i=u.bind(null,n,i,e),u=void 0,!Uo||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),l?u!==void 0?e.addEventListener(n,i,{capture:!0,passive:u}):e.addEventListener(n,i,!0):u!==void 0?e.addEventListener(n,i,{passive:u}):e.addEventListener(n,i,!1)}function _s(e,n,i,l,u){var c=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var m=l.tag;if(m===3||m===4){var v=l.stateNode.containerInfo;if(v===u)break;if(m===4)for(m=l.return;m!==null;){var T=m.tag;if((T===3||T===4)&&m.stateNode.containerInfo===u)return;m=m.return}for(;v!==null;){if(m=Hi(v),m===null)return;if(T=m.tag,T===5||T===6||T===26||T===27){l=c=m;continue e}v=v.parentNode}}l=l.return}cf(function(){var D=c,H=Bo(i),I=[];e:{var z=Hf.get(e);if(z!==void 0){var O=ir,te=e;switch(e){case"keypress":if(nr(i)===0)break e;case"keydown":case"keyup":O=Qy;break;case"focusin":te="focus",O=Yo;break;case"focusout":te="blur",O=Yo;break;case"beforeblur":case"afterblur":O=Yo;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":O=df;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":O=Ry;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":O=Jy;break;case Of:case Rf:case Lf:O=Hy;break;case Bf:O=Py;break;case"scroll":case"scrollend":O=zy;break;case"wheel":O=eb;break;case"copy":case"cut":case"paste":O=Gy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":O=pf;break;case"toggle":case"beforetoggle":O=tb}var fe=(n&4)!==0,Ge=!fe&&(e==="scroll"||e==="scrollend"),C=fe?z!==null?z+"Capture":null:z;fe=[];for(var E=D,N;E!==null;){var q=E;if(N=q.stateNode,q=q.tag,q!==5&&q!==26&&q!==27||N===null||C===null||(q=Ul(E,C),q!=null&&fe.push(ba(E,q,N))),Ge)break;E=E.return}0<fe.length&&(z=new O(z,te,null,i,H),I.push({event:z,listeners:fe}))}}if((n&7)===0){e:{if(z=e==="mouseover"||e==="pointerover",O=e==="mouseout"||e==="pointerout",z&&i!==Lo&&(te=i.relatedTarget||i.fromElement)&&(Hi(te)||te[Bi]))break e;if((O||z)&&(z=H.window===H?H:(z=H.ownerDocument)?z.defaultView||z.parentWindow:window,O?(te=i.relatedTarget||i.toElement,O=D,te=te?Hi(te):null,te!==null&&(Ge=f(te),fe=te.tag,te!==Ge||fe!==5&&fe!==27&&fe!==6)&&(te=null)):(O=null,te=D),O!==te)){if(fe=df,q="onMouseLeave",C="onMouseEnter",E="mouse",(e==="pointerout"||e==="pointerover")&&(fe=pf,q="onPointerLeave",C="onPointerEnter",E="pointer"),Ge=O==null?z:Hl(O),N=te==null?z:Hl(te),z=new fe(q,E+"leave",O,i,H),z.target=Ge,z.relatedTarget=N,q=null,Hi(H)===D&&(fe=new fe(C,E+"enter",te,i,H),fe.target=N,fe.relatedTarget=Ge,q=fe),Ge=q,O&&te)n:{for(fe=n0,C=O,E=te,N=0,q=C;q;q=fe(q))N++;q=0;for(var ce=E;ce;ce=fe(ce))q++;for(;0<N-q;)C=fe(C),N--;for(;0<q-N;)E=fe(E),q--;for(;N--;){if(C===E||E!==null&&C===E.alternate){fe=C;break n}C=fe(C),E=fe(E)}fe=null}else fe=null;O!==null&&rm(I,z,O,fe,!1),te!==null&&Ge!==null&&rm(I,Ge,te,fe,!0)}}e:{if(z=D?Hl(D):window,O=z.nodeName&&z.nodeName.toLowerCase(),O==="select"||O==="input"&&z.type==="file")var Ne=xf;else if(Sf(z))if(Tf)Ne=hb;else{Ne=cb;var re=sb}else O=z.nodeName,!O||O.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?D&&Ro(D.elementType)&&(Ne=xf):Ne=fb;if(Ne&&(Ne=Ne(e,D))){wf(I,Ne,i,H);break e}re&&re(e,z,D),e==="focusout"&&D&&z.type==="number"&&D.memoizedProps.value!=null&&Oo(z,"number",z.value)}switch(re=D?Hl(D):window,e){case"focusin":(Sf(re)||re.contentEditable==="true")&&(Qi=re,Zo=D,Ql=null);break;case"focusout":Ql=Zo=Qi=null;break;case"mousedown":Jo=!0;break;case"contextmenu":case"mouseup":case"dragend":Jo=!1,jf(I,i,H);break;case"selectionchange":if(mb)break;case"keydown":case"keyup":jf(I,i,H)}var ve;if(Vo)e:{switch(e){case"compositionstart":var ke="onCompositionStart";break e;case"compositionend":ke="onCompositionEnd";break e;case"compositionupdate":ke="onCompositionUpdate";break e}ke=void 0}else Xi?vf(e,i)&&(ke="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(ke="onCompositionStart");ke&&(gf&&i.locale!=="ko"&&(Xi||ke!=="onCompositionStart"?ke==="onCompositionEnd"&&Xi&&(ve=ff()):(Gt=H,Go="value"in Gt?Gt.value:Gt.textContent,Xi=!0)),re=Qr(D,ke),0<re.length&&(ke=new mf(ke,e,null,i,H),I.push({event:ke,listeners:re}),ve?ke.data=ve:(ve=_f(i),ve!==null&&(ke.data=ve)))),(ve=lb?ab(e,i):rb(e,i))&&(ke=Qr(D,"onBeforeInput"),0<ke.length&&(re=new mf("onBeforeInput","beforeinput",null,i,H),I.push({event:re,listeners:ke}),re.data=ve)),Wb(I,e,D,i,H)}lm(I,n)})}function ba(e,n,i){return{instance:e,listener:n,currentTarget:i}}function Qr(e,n){for(var i=n+"Capture",l=[];e!==null;){var u=e,c=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||c===null||(u=Ul(e,i),u!=null&&l.unshift(ba(e,u,c)),u=Ul(e,n),u!=null&&l.push(ba(e,u,c))),e.tag===3)return l;e=e.return}return[]}function n0(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function rm(e,n,i,l,u){for(var c=n._reactName,m=[];i!==null&&i!==l;){var v=i,T=v.alternate,D=v.stateNode;if(v=v.tag,T!==null&&T===l)break;v!==5&&v!==26&&v!==27||D===null||(T=D,u?(D=Ul(i,c),D!=null&&m.unshift(ba(i,D,T))):u||(D=Ul(i,c),D!=null&&m.push(ba(i,D,T)))),i=i.return}m.length!==0&&e.push({event:n,listeners:m})}var t0=/\r\n?/g,i0=/\u0000|\uFFFD/g;function om(e){return(typeof e=="string"?e:""+e).replace(t0,`
`).replace(i0,"")}function um(e,n){return n=om(n),om(e)===n}function Ue(e,n,i,l,u,c){switch(i){case"children":typeof l=="string"?n==="body"||n==="textarea"&&l===""||Yi(e,l):(typeof l=="number"||typeof l=="bigint")&&n!=="body"&&Yi(e,""+l);break;case"className":Wa(e,"class",l);break;case"tabIndex":Wa(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Wa(e,i,l);break;case"style":uf(e,l,c);break;case"data":if(n!=="object"){Wa(e,"data",l);break}case"src":case"href":if(l===""&&(n!=="a"||i!=="href")){e.removeAttribute(i);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(i);break}l=$a(""+l),e.setAttribute(i,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(i==="formAction"?(n!=="input"&&Ue(e,n,"name",u.name,u,null),Ue(e,n,"formEncType",u.formEncType,u,null),Ue(e,n,"formMethod",u.formMethod,u,null),Ue(e,n,"formTarget",u.formTarget,u,null)):(Ue(e,n,"encType",u.encType,u,null),Ue(e,n,"method",u.method,u,null),Ue(e,n,"target",u.target,u,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(i);break}l=$a(""+l),e.setAttribute(i,l);break;case"onClick":l!=null&&(e.onclick=_t);break;case"onScroll":l!=null&&Te("scroll",e);break;case"onScrollEnd":l!=null&&Te("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(i=l.__html,i!=null){if(u.children!=null)throw Error(o(60));e.innerHTML=i}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}i=$a(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(i,""+l):e.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(i,""):e.removeAttribute(i);break;case"capture":case"download":l===!0?e.setAttribute(i,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(i,l):e.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(i,l):e.removeAttribute(i);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(i):e.setAttribute(i,l);break;case"popover":Te("beforetoggle",e),Te("toggle",e),Ja(e,"popover",l);break;case"xlinkActuate":vt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":vt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":vt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":vt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":vt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":vt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":vt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":vt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":vt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Ja(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(i=Dy.get(i)||i,Ja(e,i,l))}}function Ss(e,n,i,l,u,c){switch(i){case"style":uf(e,l,c);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(i=l.__html,i!=null){if(u.children!=null)throw Error(o(60));e.innerHTML=i}}break;case"children":typeof l=="string"?Yi(e,l):(typeof l=="number"||typeof l=="bigint")&&Yi(e,""+l);break;case"onScroll":l!=null&&Te("scroll",e);break;case"onScrollEnd":l!=null&&Te("scrollend",e);break;case"onClick":l!=null&&(e.onclick=_t);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Pc.hasOwnProperty(i))e:{if(i[0]==="o"&&i[1]==="n"&&(u=i.endsWith("Capture"),n=i.slice(2,u?i.length-7:void 0),c=e[An]||null,c=c!=null?c[i]:null,typeof c=="function"&&e.removeEventListener(n,c,u),typeof l=="function")){typeof c!="function"&&c!==null&&(i in e?e[i]=null:e.hasAttribute(i)&&e.removeAttribute(i)),e.addEventListener(n,l,u);break e}i in e?e[i]=l:l===!0?e.setAttribute(i,""):Ja(e,i,l)}}}function pn(e,n,i){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Te("error",e),Te("load",e);var l=!1,u=!1,c;for(c in i)if(i.hasOwnProperty(c)){var m=i[c];if(m!=null)switch(c){case"src":l=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,n));default:Ue(e,n,c,m,i,null)}}u&&Ue(e,n,"srcSet",i.srcSet,i,null),l&&Ue(e,n,"src",i.src,i,null);return;case"input":Te("invalid",e);var v=c=m=u=null,T=null,D=null;for(l in i)if(i.hasOwnProperty(l)){var H=i[l];if(H!=null)switch(l){case"name":u=H;break;case"type":m=H;break;case"checked":T=H;break;case"defaultChecked":D=H;break;case"value":c=H;break;case"defaultValue":v=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(o(137,n));break;default:Ue(e,n,l,H,i,null)}}lf(e,c,v,T,D,m,u,!1);return;case"select":Te("invalid",e),l=m=c=null;for(u in i)if(i.hasOwnProperty(u)&&(v=i[u],v!=null))switch(u){case"value":c=v;break;case"defaultValue":m=v;break;case"multiple":l=v;default:Ue(e,n,u,v,i,null)}n=c,i=m,e.multiple=!!l,n!=null?Ii(e,!!l,n,!1):i!=null&&Ii(e,!!l,i,!0);return;case"textarea":Te("invalid",e),c=u=l=null;for(m in i)if(i.hasOwnProperty(m)&&(v=i[m],v!=null))switch(m){case"value":l=v;break;case"defaultValue":u=v;break;case"children":c=v;break;case"dangerouslySetInnerHTML":if(v!=null)throw Error(o(91));break;default:Ue(e,n,m,v,i,null)}rf(e,l,u,c);return;case"option":for(T in i)i.hasOwnProperty(T)&&(l=i[T],l!=null)&&(T==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":Ue(e,n,T,l,i,null));return;case"dialog":Te("beforetoggle",e),Te("toggle",e),Te("cancel",e),Te("close",e);break;case"iframe":case"object":Te("load",e);break;case"video":case"audio":for(l=0;l<ya.length;l++)Te(ya[l],e);break;case"image":Te("error",e),Te("load",e);break;case"details":Te("toggle",e);break;case"embed":case"source":case"link":Te("error",e),Te("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(D in i)if(i.hasOwnProperty(D)&&(l=i[D],l!=null))switch(D){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,n));default:Ue(e,n,D,l,i,null)}return;default:if(Ro(n)){for(H in i)i.hasOwnProperty(H)&&(l=i[H],l!==void 0&&Ss(e,n,H,l,i,void 0));return}}for(v in i)i.hasOwnProperty(v)&&(l=i[v],l!=null&&Ue(e,n,v,l,i,null))}function l0(e,n,i,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,c=null,m=null,v=null,T=null,D=null,H=null;for(O in i){var I=i[O];if(i.hasOwnProperty(O)&&I!=null)switch(O){case"checked":break;case"value":break;case"defaultValue":T=I;default:l.hasOwnProperty(O)||Ue(e,n,O,null,l,I)}}for(var z in l){var O=l[z];if(I=i[z],l.hasOwnProperty(z)&&(O!=null||I!=null))switch(z){case"type":c=O;break;case"name":u=O;break;case"checked":D=O;break;case"defaultChecked":H=O;break;case"value":m=O;break;case"defaultValue":v=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(o(137,n));break;default:O!==I&&Ue(e,n,z,O,l,I)}}zo(e,m,v,T,D,H,c,u);return;case"select":O=m=v=z=null;for(c in i)if(T=i[c],i.hasOwnProperty(c)&&T!=null)switch(c){case"value":break;case"multiple":O=T;default:l.hasOwnProperty(c)||Ue(e,n,c,null,l,T)}for(u in l)if(c=l[u],T=i[u],l.hasOwnProperty(u)&&(c!=null||T!=null))switch(u){case"value":z=c;break;case"defaultValue":v=c;break;case"multiple":m=c;default:c!==T&&Ue(e,n,u,c,l,T)}n=v,i=m,l=O,z!=null?Ii(e,!!i,z,!1):!!l!=!!i&&(n!=null?Ii(e,!!i,n,!0):Ii(e,!!i,i?[]:"",!1));return;case"textarea":O=z=null;for(v in i)if(u=i[v],i.hasOwnProperty(v)&&u!=null&&!l.hasOwnProperty(v))switch(v){case"value":break;case"children":break;default:Ue(e,n,v,null,l,u)}for(m in l)if(u=l[m],c=i[m],l.hasOwnProperty(m)&&(u!=null||c!=null))switch(m){case"value":z=u;break;case"defaultValue":O=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(o(91));break;default:u!==c&&Ue(e,n,m,u,l,c)}af(e,z,O);return;case"option":for(var te in i)z=i[te],i.hasOwnProperty(te)&&z!=null&&!l.hasOwnProperty(te)&&(te==="selected"?e.selected=!1:Ue(e,n,te,null,l,z));for(T in l)z=l[T],O=i[T],l.hasOwnProperty(T)&&z!==O&&(z!=null||O!=null)&&(T==="selected"?e.selected=z&&typeof z!="function"&&typeof z!="symbol":Ue(e,n,T,z,l,O));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var fe in i)z=i[fe],i.hasOwnProperty(fe)&&z!=null&&!l.hasOwnProperty(fe)&&Ue(e,n,fe,null,l,z);for(D in l)if(z=l[D],O=i[D],l.hasOwnProperty(D)&&z!==O&&(z!=null||O!=null))switch(D){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(o(137,n));break;default:Ue(e,n,D,z,l,O)}return;default:if(Ro(n)){for(var Ge in i)z=i[Ge],i.hasOwnProperty(Ge)&&z!==void 0&&!l.hasOwnProperty(Ge)&&Ss(e,n,Ge,void 0,l,z);for(H in l)z=l[H],O=i[H],!l.hasOwnProperty(H)||z===O||z===void 0&&O===void 0||Ss(e,n,H,z,l,O);return}}for(var C in i)z=i[C],i.hasOwnProperty(C)&&z!=null&&!l.hasOwnProperty(C)&&Ue(e,n,C,null,l,z);for(I in l)z=l[I],O=i[I],!l.hasOwnProperty(I)||z===O||z==null&&O==null||Ue(e,n,I,z,l,O)}function sm(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function a0(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,i=performance.getEntriesByType("resource"),l=0;l<i.length;l++){var u=i[l],c=u.transferSize,m=u.initiatorType,v=u.duration;if(c&&v&&sm(m)){for(m=0,v=u.responseEnd,l+=1;l<i.length;l++){var T=i[l],D=T.startTime;if(D>v)break;var H=T.transferSize,I=T.initiatorType;H&&sm(I)&&(T=T.responseEnd,m+=H*(T<v?1:(v-D)/(T-D)))}if(--l,n+=8*(c+m)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var ws=null,xs=null;function Kr(e){return e.nodeType===9?e:e.ownerDocument}function cm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function fm(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Ts(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var As=null;function r0(){var e=window.event;return e&&e.type==="popstate"?e===As?!1:(As=e,!0):(As=null,!1)}var hm=typeof setTimeout=="function"?setTimeout:void 0,o0=typeof clearTimeout=="function"?clearTimeout:void 0,dm=typeof Promise=="function"?Promise:void 0,u0=typeof queueMicrotask=="function"?queueMicrotask:typeof dm<"u"?function(e){return dm.resolve(null).then(e).catch(s0)}:hm;function s0(e){setTimeout(function(){throw e})}function ii(e){return e==="head"}function mm(e,n){var i=n,l=0;do{var u=i.nextSibling;if(e.removeChild(i),u&&u.nodeType===8)if(i=u.data,i==="/$"||i==="/&"){if(l===0){e.removeChild(u),_l(n);return}l--}else if(i==="$"||i==="$?"||i==="$~"||i==="$!"||i==="&")l++;else if(i==="html")va(e.ownerDocument.documentElement);else if(i==="head"){i=e.ownerDocument.head,va(i);for(var c=i.firstChild;c;){var m=c.nextSibling,v=c.nodeName;c[Bl]||v==="SCRIPT"||v==="STYLE"||v==="LINK"&&c.rel.toLowerCase()==="stylesheet"||i.removeChild(c),c=m}}else i==="body"&&va(e.ownerDocument.body);i=u}while(i);_l(n)}function pm(e,n){var i=e;e=0;do{var l=i.nextSibling;if(i.nodeType===1?n?(i._stashedDisplay=i.style.display,i.style.display="none"):(i.style.display=i._stashedDisplay||"",i.getAttribute("style")===""&&i.removeAttribute("style")):i.nodeType===3&&(n?(i._stashedText=i.nodeValue,i.nodeValue=""):i.nodeValue=i._stashedText||""),l&&l.nodeType===8)if(i=l.data,i==="/$"){if(e===0)break;e--}else i!=="$"&&i!=="$?"&&i!=="$~"&&i!=="$!"||e++;i=l}while(i)}function Es(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var i=n;switch(n=n.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":Es(i),Do(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}e.removeChild(i)}}function c0(e,n,i,l){for(;e.nodeType===1;){var u=i;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Bl])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var c=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=nt(e.nextSibling),e===null)break}return null}function f0(e,n,i){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=nt(e.nextSibling),e===null))return null;return e}function gm(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=nt(e.nextSibling),e===null))return null;return e}function ks(e){return e.data==="$?"||e.data==="$~"}function Cs(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function h0(e,n){var i=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||i.readyState!=="loading")n();else{var l=function(){n(),i.removeEventListener("DOMContentLoaded",l)};i.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function nt(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Ms=null;function ym(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"||i==="/&"){if(n===0)return nt(e.nextSibling);n--}else i!=="$"&&i!=="$!"&&i!=="$?"&&i!=="$~"&&i!=="&"||n++}e=e.nextSibling}return null}function bm(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"){if(n===0)return e;n--}else i!=="/$"&&i!=="/&"||n++}e=e.previousSibling}return null}function vm(e,n,i){switch(n=Kr(i),e){case"html":if(e=n.documentElement,!e)throw Error(o(452));return e;case"head":if(e=n.head,!e)throw Error(o(453));return e;case"body":if(e=n.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function va(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Do(e)}var tt=new Map,_m=new Set;function Zr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Lt=X.d;X.d={f:d0,r:m0,D:p0,C:g0,L:y0,m:b0,X:_0,S:v0,M:S0};function d0(){var e=Lt.f(),n=Gr();return e||n}function m0(e){var n=Ui(e);n!==null&&n.tag===5&&n.type==="form"?Bh(n):Lt.r(e)}var yl=typeof document>"u"?null:document;function Sm(e,n,i){var l=yl;if(l&&typeof n=="string"&&n){var u=Kn(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof i=="string"&&(u+='[crossorigin="'+i+'"]'),_m.has(u)||(_m.add(u),e={rel:e,crossOrigin:i,href:n},l.querySelector(u)===null&&(n=l.createElement("link"),pn(n,"link",e),sn(n),l.head.appendChild(n)))}}function p0(e){Lt.D(e),Sm("dns-prefetch",e,null)}function g0(e,n){Lt.C(e,n),Sm("preconnect",e,n)}function y0(e,n,i){Lt.L(e,n,i);var l=yl;if(l&&e&&n){var u='link[rel="preload"][as="'+Kn(n)+'"]';n==="image"&&i&&i.imageSrcSet?(u+='[imagesrcset="'+Kn(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(u+='[imagesizes="'+Kn(i.imageSizes)+'"]')):u+='[href="'+Kn(e)+'"]';var c=u;switch(n){case"style":c=bl(e);break;case"script":c=vl(e)}tt.has(c)||(e=y({rel:"preload",href:n==="image"&&i&&i.imageSrcSet?void 0:e,as:n},i),tt.set(c,e),l.querySelector(u)!==null||n==="style"&&l.querySelector(_a(c))||n==="script"&&l.querySelector(Sa(c))||(n=l.createElement("link"),pn(n,"link",e),sn(n),l.head.appendChild(n)))}}function b0(e,n){Lt.m(e,n);var i=yl;if(i&&e){var l=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Kn(l)+'"][href="'+Kn(e)+'"]',c=u;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=vl(e)}if(!tt.has(c)&&(e=y({rel:"modulepreload",href:e},n),tt.set(c,e),i.querySelector(u)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(Sa(c)))return}l=i.createElement("link"),pn(l,"link",e),sn(l),i.head.appendChild(l)}}}function v0(e,n,i){Lt.S(e,n,i);var l=yl;if(l&&e){var u=Gi(l).hoistableStyles,c=bl(e);n=n||"default";var m=u.get(c);if(!m){var v={loading:0,preload:null};if(m=l.querySelector(_a(c)))v.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":n},i),(i=tt.get(c))&&Ns(e,i);var T=m=l.createElement("link");sn(T),pn(T,"link",e),T._p=new Promise(function(D,H){T.onload=D,T.onerror=H}),T.addEventListener("load",function(){v.loading|=1}),T.addEventListener("error",function(){v.loading|=2}),v.loading|=4,Jr(m,n,l)}m={type:"stylesheet",instance:m,count:1,state:v},u.set(c,m)}}}function _0(e,n){Lt.X(e,n);var i=yl;if(i&&e){var l=Gi(i).hoistableScripts,u=vl(e),c=l.get(u);c||(c=i.querySelector(Sa(u)),c||(e=y({src:e,async:!0},n),(n=tt.get(u))&&Ds(e,n),c=i.createElement("script"),sn(c),pn(c,"link",e),i.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},l.set(u,c))}}function S0(e,n){Lt.M(e,n);var i=yl;if(i&&e){var l=Gi(i).hoistableScripts,u=vl(e),c=l.get(u);c||(c=i.querySelector(Sa(u)),c||(e=y({src:e,async:!0,type:"module"},n),(n=tt.get(u))&&Ds(e,n),c=i.createElement("script"),sn(c),pn(c,"link",e),i.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},l.set(u,c))}}function wm(e,n,i,l){var u=(u=se.current)?Zr(u):null;if(!u)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(n=bl(i.href),i=Gi(u).hoistableStyles,l=i.get(n),l||(l={type:"style",instance:null,count:0,state:null},i.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){e=bl(i.href);var c=Gi(u).hoistableStyles,m=c.get(e);if(m||(u=u.ownerDocument||u,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,m),(c=u.querySelector(_a(e)))&&!c._p&&(m.instance=c,m.state.loading=5),tt.has(e)||(i={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},tt.set(e,i),c||w0(u,e,i,m.state))),n&&l===null)throw Error(o(528,""));return m}if(n&&l!==null)throw Error(o(529,""));return null;case"script":return n=i.async,i=i.src,typeof i=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=vl(i),i=Gi(u).hoistableScripts,l=i.get(n),l||(l={type:"script",instance:null,count:0,state:null},i.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function bl(e){return'href="'+Kn(e)+'"'}function _a(e){return'link[rel="stylesheet"]['+e+"]"}function xm(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function w0(e,n,i,l){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?l.loading=1:(n=e.createElement("link"),l.preload=n,n.addEventListener("load",function(){return l.loading|=1}),n.addEventListener("error",function(){return l.loading|=2}),pn(n,"link",i),sn(n),e.head.appendChild(n))}function vl(e){return'[src="'+Kn(e)+'"]'}function Sa(e){return"script[async]"+e}function Tm(e,n,i){if(n.count++,n.instance===null)switch(n.type){case"style":var l=e.querySelector('style[data-href~="'+Kn(i.href)+'"]');if(l)return n.instance=l,sn(l),l;var u=y({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),sn(l),pn(l,"style",u),Jr(l,i.precedence,e),n.instance=l;case"stylesheet":u=bl(i.href);var c=e.querySelector(_a(u));if(c)return n.state.loading|=4,n.instance=c,sn(c),c;l=xm(i),(u=tt.get(u))&&Ns(l,u),c=(e.ownerDocument||e).createElement("link"),sn(c);var m=c;return m._p=new Promise(function(v,T){m.onload=v,m.onerror=T}),pn(c,"link",l),n.state.loading|=4,Jr(c,i.precedence,e),n.instance=c;case"script":return c=vl(i.src),(u=e.querySelector(Sa(c)))?(n.instance=u,sn(u),u):(l=i,(u=tt.get(c))&&(l=y({},i),Ds(l,u)),e=e.ownerDocument||e,u=e.createElement("script"),sn(u),pn(u,"link",l),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(o(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(l=n.instance,n.state.loading|=4,Jr(l,i.precedence,e));return n.instance}function Jr(e,n,i){for(var l=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=l.length?l[l.length-1]:null,c=u,m=0;m<l.length;m++){var v=l[m];if(v.dataset.precedence===n)c=v;else if(c!==u)break}c?c.parentNode.insertBefore(e,c.nextSibling):(n=i.nodeType===9?i.head:i,n.insertBefore(e,n.firstChild))}function Ns(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Ds(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Wr=null;function Am(e,n,i){if(Wr===null){var l=new Map,u=Wr=new Map;u.set(i,l)}else u=Wr,l=u.get(i),l||(l=new Map,u.set(i,l));if(l.has(e))return l;for(l.set(e,null),i=i.getElementsByTagName(e),u=0;u<i.length;u++){var c=i[u];if(!(c[Bl]||c[fn]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var m=c.getAttribute(n)||"";m=e+m;var v=l.get(m);v?v.push(c):l.set(m,[c])}}return l}function Em(e,n,i){e=e.ownerDocument||e,e.head.insertBefore(i,n==="title"?e.querySelector("head > title"):null)}function x0(e,n,i){if(i===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function km(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function T0(e,n,i,l){if(i.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var u=bl(l.href),c=n.querySelector(_a(u));if(c){n=c._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Pr.bind(e),n.then(e,e)),i.state.loading|=4,i.instance=c,sn(c);return}c=n.ownerDocument||n,l=xm(l),(u=tt.get(u))&&Ns(l,u),c=c.createElement("link"),sn(c);var m=c;m._p=new Promise(function(v,T){m.onload=v,m.onerror=T}),pn(c,"link",l),i.instance=c}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(i,n),(n=i.state.preload)&&(i.state.loading&3)===0&&(e.count++,i=Pr.bind(e),n.addEventListener("load",i),n.addEventListener("error",i))}}var js=0;function A0(e,n){return e.stylesheets&&e.count===0&&eo(e,e.stylesheets),0<e.count||0<e.imgCount?function(i){var l=setTimeout(function(){if(e.stylesheets&&eo(e,e.stylesheets),e.unsuspend){var c=e.unsuspend;e.unsuspend=null,c()}},6e4+n);0<e.imgBytes&&js===0&&(js=62500*a0());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&eo(e,e.stylesheets),e.unsuspend)){var c=e.unsuspend;e.unsuspend=null,c()}},(e.imgBytes>js?50:800)+n);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(u)}}:null}function Pr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)eo(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var $r=null;function eo(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,$r=new Map,n.forEach(E0,e),$r=null,Pr.call(e))}function E0(e,n){if(!(n.state.loading&4)){var i=$r.get(e);if(i)var l=i.get(null);else{i=new Map,$r.set(e,i);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<u.length;c++){var m=u[c];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(i.set(m.dataset.precedence,m),l=m)}l&&i.set(null,l)}u=n.instance,m=u.getAttribute("data-precedence"),c=i.get(m)||l,c===l&&i.set(null,u),i.set(m,u),this.count++,l=Pr.bind(this),u.addEventListener("load",l),u.addEventListener("error",l),c?c.parentNode.insertBefore(u,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var wa={$$typeof:k,Provider:null,Consumer:null,_currentValue:ae,_currentValue2:ae,_threadCount:0};function k0(e,n,i,l,u,c,m,v,T){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ko(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ko(0),this.hiddenUpdates=ko(null),this.identifierPrefix=l,this.onUncaughtError=u,this.onCaughtError=c,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function Cm(e,n,i,l,u,c,m,v,T,D,H,I){return e=new k0(e,n,i,m,T,D,H,I,v),n=1,c===!0&&(n|=24),c=Hn(3,null,null,n),e.current=c,c.stateNode=e,n=fu(),n.refCount++,e.pooledCache=n,n.refCount++,c.memoizedState={element:l,isDehydrated:i,cache:n},pu(c),e}function Mm(e){return e?(e=Ji,e):Ji}function Nm(e,n,i,l,u,c){u=Mm(u),l.context===null?l.context=u:l.pendingContext=u,l=Xt(n),l.payload={element:i},c=c===void 0?null:c,c!==null&&(l.callback=c),i=Qt(e,l,n),i!==null&&(Dn(i,e,n),ea(i,e,n))}function Dm(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<n?i:n}}function zs(e,n){Dm(e,n),(e=e.alternate)&&Dm(e,n)}function jm(e){if(e.tag===13||e.tag===31){var n=bi(e,67108864);n!==null&&Dn(n,e,67108864),zs(e,67108864)}}function zm(e){if(e.tag===13||e.tag===31){var n=Yn();n=Co(n);var i=bi(e,n);i!==null&&Dn(i,e,n),zs(e,n)}}var no=!0;function C0(e,n,i,l){var u=M.T;M.T=null;var c=X.p;try{X.p=2,Os(e,n,i,l)}finally{X.p=c,M.T=u}}function M0(e,n,i,l){var u=M.T;M.T=null;var c=X.p;try{X.p=8,Os(e,n,i,l)}finally{X.p=c,M.T=u}}function Os(e,n,i,l){if(no){var u=Rs(l);if(u===null)_s(e,n,l,to,i),Rm(e,l);else if(D0(u,e,n,i,l))l.stopPropagation();else if(Rm(e,l),n&4&&-1<N0.indexOf(e)){for(;u!==null;){var c=Ui(u);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var m=di(c.pendingLanes);if(m!==0){var v=c;for(v.pendingLanes|=2,v.entangledLanes|=2;m;){var T=1<<31-qe(m);v.entanglements[1]|=T,m&=~T}ft(c),(je&6)===0&&(Hr=_n()+500,ga(0))}}break;case 31:case 13:v=bi(c,2),v!==null&&Dn(v,c,2),Gr(),zs(c,2)}if(c=Rs(l),c===null&&_s(e,n,l,to,i),c===u)break;u=c}u!==null&&l.stopPropagation()}else _s(e,n,l,null,i)}}function Rs(e){return e=Bo(e),Ls(e)}var to=null;function Ls(e){if(to=null,e=Hi(e),e!==null){var n=f(e);if(n===null)e=null;else{var i=n.tag;if(i===13){if(e=h(n),e!==null)return e;e=null}else if(i===31){if(e=d(n),e!==null)return e;e=null}else if(i===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return to=e,null}function Om(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Eo()){case G:return 2;case J:return 8;case de:case we:return 32;case Oe:return 268435456;default:return 32}default:return 32}}var Bs=!1,li=null,ai=null,ri=null,xa=new Map,Ta=new Map,oi=[],N0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Rm(e,n){switch(e){case"focusin":case"focusout":li=null;break;case"dragenter":case"dragleave":ai=null;break;case"mouseover":case"mouseout":ri=null;break;case"pointerover":case"pointerout":xa.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ta.delete(n.pointerId)}}function Aa(e,n,i,l,u,c){return e===null||e.nativeEvent!==c?(e={blockedOn:n,domEventName:i,eventSystemFlags:l,nativeEvent:c,targetContainers:[u]},n!==null&&(n=Ui(n),n!==null&&jm(n)),e):(e.eventSystemFlags|=l,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function D0(e,n,i,l,u){switch(n){case"focusin":return li=Aa(li,e,n,i,l,u),!0;case"dragenter":return ai=Aa(ai,e,n,i,l,u),!0;case"mouseover":return ri=Aa(ri,e,n,i,l,u),!0;case"pointerover":var c=u.pointerId;return xa.set(c,Aa(xa.get(c)||null,e,n,i,l,u)),!0;case"gotpointercapture":return c=u.pointerId,Ta.set(c,Aa(Ta.get(c)||null,e,n,i,l,u)),!0}return!1}function Lm(e){var n=Hi(e.target);if(n!==null){var i=f(n);if(i!==null){if(n=i.tag,n===13){if(n=h(i),n!==null){e.blockedOn=n,Zc(e.priority,function(){zm(i)});return}}else if(n===31){if(n=d(i),n!==null){e.blockedOn=n,Zc(e.priority,function(){zm(i)});return}}else if(n===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function io(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var i=Rs(e.nativeEvent);if(i===null){i=e.nativeEvent;var l=new i.constructor(i.type,i);Lo=l,i.target.dispatchEvent(l),Lo=null}else return n=Ui(i),n!==null&&jm(n),e.blockedOn=i,!1;n.shift()}return!0}function Bm(e,n,i){io(e)&&i.delete(n)}function j0(){Bs=!1,li!==null&&io(li)&&(li=null),ai!==null&&io(ai)&&(ai=null),ri!==null&&io(ri)&&(ri=null),xa.forEach(Bm),Ta.forEach(Bm)}function lo(e,n){e.blockedOn===n&&(e.blockedOn=null,Bs||(Bs=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,j0)))}var ao=null;function Hm(e){ao!==e&&(ao=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){ao===e&&(ao=null);for(var n=0;n<e.length;n+=3){var i=e[n],l=e[n+1],u=e[n+2];if(typeof l!="function"){if(Ls(l||i)===null)continue;break}var c=Ui(i);c!==null&&(e.splice(n,3),n-=3,Ru(c,{pending:!0,data:u,method:i.method,action:l},l,u))}}))}function _l(e){function n(T){return lo(T,e)}li!==null&&lo(li,e),ai!==null&&lo(ai,e),ri!==null&&lo(ri,e),xa.forEach(n),Ta.forEach(n);for(var i=0;i<oi.length;i++){var l=oi[i];l.blockedOn===e&&(l.blockedOn=null)}for(;0<oi.length&&(i=oi[0],i.blockedOn===null);)Lm(i),i.blockedOn===null&&oi.shift();if(i=(e.ownerDocument||e).$$reactFormReplay,i!=null)for(l=0;l<i.length;l+=3){var u=i[l],c=i[l+1],m=u[An]||null;if(typeof c=="function")m||Hm(i);else if(m){var v=null;if(c&&c.hasAttribute("formAction")){if(u=c,m=c[An]||null)v=m.formAction;else if(Ls(u)!==null)continue}else v=m.action;typeof v=="function"?i[l+1]=v:(i.splice(l,3),l-=3),Hm(i)}}}function Um(){function e(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(m){return u=m})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),l||setTimeout(i,20)}function i(){if(!l&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(i,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Hs(e){this._internalRoot=e}ro.prototype.render=Hs.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(o(409));var i=n.current,l=Yn();Nm(i,l,e,n,null,null)},ro.prototype.unmount=Hs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Nm(e.current,2,null,e,null,null),Gr(),n[Bi]=null}};function ro(e){this._internalRoot=e}ro.prototype.unstable_scheduleHydration=function(e){if(e){var n=Kc();e={blockedOn:null,target:e,priority:n};for(var i=0;i<oi.length&&n!==0&&n<oi[i].priority;i++);oi.splice(i,0,e),i===0&&Lm(e)}};var Gm=a.version;if(Gm!=="19.2.4")throw Error(o(527,Gm,"19.2.4"));X.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=p(n),e=e!==null?b(e):null,e=e===null?null:e.stateNode,e};var z0={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:M,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var oo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!oo.isDisabled&&oo.supportsFiber)try{Sn=oo.inject(z0),rn=oo}catch{}}return ka.createRoot=function(e,n){if(!s(e))throw Error(o(299));var i=!1,l="",u=Qh,c=Kh,m=Zh;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(c=n.onCaughtError),n.onRecoverableError!==void 0&&(m=n.onRecoverableError)),n=Cm(e,1,!1,null,null,i,l,null,u,c,m,Um),e[Bi]=n.current,vs(e),new Hs(n)},ka.hydrateRoot=function(e,n,i){if(!s(e))throw Error(o(299));var l=!1,u="",c=Qh,m=Kh,v=Zh,T=null;return i!=null&&(i.unstable_strictMode===!0&&(l=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onUncaughtError!==void 0&&(c=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(v=i.onRecoverableError),i.formState!==void 0&&(T=i.formState)),n=Cm(e,1,!0,n,i??null,l,u,T,c,m,v,Um),n.context=Mm(null),i=n.current,l=Yn(),l=Co(l),u=Xt(l),u.callback=null,Qt(i,u,l),i=l,n.current.lanes=i,Ll(n,i),ft(n),e[Bi]=n.current,vs(e),new ro(n)},ka.version="19.2.4",ka}var Jm;function Y0(){if(Jm)return qs.exports;Jm=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(a){console.error(a)}}return t(),qs.exports=I0(),qs.exports}var F0=Y0();const V0=`meta:
  title: "The LeetCode Skill Tree (50 Problems)"
  description: |
    A comprehensive roadmap of 50 essential LeetCode problems.
    This complex graph illustrates how advanced algorithms and data structures
    are built upon foundational concepts. By following the paths, you can see
    how mastering Two Sum and Binary Search eventually leads to solving
    complex problems like Trapping Rain Water and Minimum Window Substring.
    Difficulty is indicated by 🟢 (Easy), 🟡 (Medium), and 🔴 (Hard).
  start: [contains_duplicate, best_time_to_buy, valid_palindrome, valid_parentheses, binary_search, reverse_linked_list, merge_two_sorted_lists, invert_binary_tree]

nodes:
  contains_duplicate:
    title: "Contains Duplicate"
    short_title: "Contains Duplicate"
    emoji: "🟢"
    content: |
      **[LeetCode](https://leetcode.com/problems/contains-duplicate/)**

      The absolute foundation.

      **New Concepts:**
      - Array iteration
      - Hash Sets for O(1) lookups
    parents: []

  valid_anagram:
    title: "Valid Anagram"
    short_title: "Valid Anagram"
    emoji: "🟢"
    content: |
      **[LeetCode](https://leetcode.com/problems/valid-anagram/)**

      Builds on the O(1) lookup concept by tracking frequencies instead of just existence.

      **New Concepts:**
      - Frequency counting
      - Hash Maps
    parents: [contains_duplicate]

  two_sum:
    title: "Two Sum"
    short_title: "Two Sum"
    emoji: "🟢"
    content: |
      **[LeetCode](https://leetcode.com/problems/two-sum/)**

      Takes the Hash Map lookup concept and applies it to math and indices.

      **New Concepts:**
      - One-pass arithmetic complements
    parents: [contains_duplicate]

  group_anagrams:
    title: "Group Anagrams"
    short_title: "Group Anagrams"
    emoji: "🟡"
    content: |
      **[LeetCode](https://leetcode.com/problems/group-anagrams/)**

      Combines frequency counting with complex Hash Map usage where values are lists.

      **New Concepts:**
      - String sorting as keys
      - Grouping
    parents: [valid_anagram, two_sum]

  top_k_frequent_elements:
    title: "Top K Frequent Elements"
    short_title: "Top K Frequent Elements"
    emoji: "🟡"
    content: |
      **[LeetCode](https://leetcode.com/problems/top-k-frequent-elements/)**

      Extends grouping by requiring sorting by frequency.

      **New Concepts:**
      - Bucket Sort
      - Priority Queues (Heaps)
    parents: [group_anagrams]

  best_time_to_buy:
    title: "Best Time to Buy & Sell Stock"
    short_title: "Best Time to Buy & Sell Stock"
    emoji: "🟢"
    content: |
      **[LeetCode](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)**

      Foundation of sliding window and state tracking.

      **New Concepts:**
      - Two Pointers (Slow/Fast)
      - Tracking minimums
    parents: []

  longest_consecutive_sequence:
    title: "Longest Consecutive Seq"
    short_title: "Longest Consecutive Seq"
    emoji: "🟡"
    content: |
      **[LeetCode](https://leetcode.com/problems/longest-consecutive-sequence/)**

      Applies O(1) lookups to find boundaries of sequences.

      **New Concepts:**
      - Intelligent sequence building
      - O(n) limits
    parents: [two_sum]

  valid_palindrome:
    title: "Valid Palindrome"
    short_title: "Valid Palindrome"
    emoji: "🟢"
    content: |
      **[LeetCode](https://leetcode.com/problems/valid-palindrome/)**

      Foundation of bidirectional pointer traversal.

      **New Concepts:**
      - Two Pointers (Left/Right)
      - String filtering
    parents: []

  two_sum_ii:
    title: "Two Sum II"
    short_title: "Two Sum II"
    emoji: "🟡"
    content: |
      **[LeetCode](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)**

      Replaces the Hash Map of Two Sum with the bidirectional pointers of Valid Palindrome.

      **New Concepts:**
      - Exploiting sorted arrays with pointers
    parents: [two_sum, valid_palindrome]

  three_sum:
    title: "3Sum"
    short_title: "3Sum"
    emoji: "🟡"
    content: |
      **[LeetCode](https://leetcode.com/problems/3sum/)**

      Applies Two Sum II iteratively while managing complex duplicate state.

      **New Concepts:**
      - Reducing 3D problems to 2D
      - Avoiding duplicates
    parents: [two_sum_ii]

  container_with_most_water:
    title: "Container With Most Water"
    short_title: "Container With Most Water"
    emoji: "🟡"
    content: |
      **[LeetCode](https://leetcode.com/problems/container-with-most-water/)**

      Applies bidirectional pointers to maximize a geometric area.

      **New Concepts:**
      - Greedy pointer movement
      - Area calculation
    parents: [two_sum_ii]

  trapping_rain_water:
    title: "Trapping Rain Water"
    short_title: "Trapping Rain Water"
    emoji: "🔴"
    content: |
      **[LeetCode](https://leetcode.com/problems/trapping-rain-water/)**

      The ultimate evolution of the geometric pointer movement, requiring tracking bounds on both sides.

      **New Concepts:**
      - Prefix max arrays
      - Advanced two-pointer state
    parents: [container_with_most_water]

  longest_substring_without_repeating:
    title: "Longest Substring No Repeats"
    short_title: "Longest Substring No Repeats"
    emoji: "🟡"
    content: |
      **[LeetCode](https://leetcode.com/problems/longest-substring-without-repeating-characters/)**

      Combines frequency counting with two pointers moving in the same direction.

      **New Concepts:**
      - Sliding Window
      - Dynamic window resizing
    parents: [valid_anagram, valid_palindrome]

  longest_repeating_character_replacement:
    title: "Longest Repeating Char Replacement"
    short_title: "Longest Repeating Char Replacement"
    emoji: "🟡"
    content: |
      **[LeetCode](https://leetcode.com/problems/longest-repeating-character-replacement/)**

      Adds a math constraint (k changes) to the sliding window.

      **New Concepts:**
      - Max frequency tracking within a window
    parents: [longest_substring_without_repeating]

  minimum_window_substring:
    title: "Minimum Window Substring"
    short_title: "Minimum Window Substring"
    emoji: "🔴"
    content: |
      **[LeetCode](https://leetcode.com/problems/minimum-window-substring/)**

      The pinnacle of sliding window, requiring matching complex frequency states dynamically.

      **New Concepts:**
      - Multiple frequency maps
      - 'Have' vs 'Need' tracking
    parents: [longest_repeating_character_replacement, group_anagrams]

  valid_parentheses:
    title: "Valid Parentheses"
    short_title: "Valid Parentheses"
    emoji: "🟢"
    content: |
      **[LeetCode](https://leetcode.com/problems/valid-parentheses/)**

      The foundation of state-based parsing.

      **New Concepts:**
      - LIFO (Last-In-First-Out)
      - Stacks
    parents: []

  min_stack:
    title: "Min Stack"
    short_title: "Min Stack"
    emoji: "🟡"
    content: |
      **[LeetCode](https://leetcode.com/problems/min-stack/)**

      Builds on stack mechanics by tracking minimums at every level.

      **New Concepts:**
      - Parallel state tracking
      - Design
    parents: [valid_parentheses]

  evaluate_reverse_polish_notation:
    title: "Evaluate RPN"
    short_title: "Evaluate RPN"
    emoji: "🟡"
    content: |
      **[LeetCode](https://leetcode.com/problems/evaluate-reverse-polish-notation/)**

      Applies LIFO mechanics to evaluate expressions.

      **New Concepts:**
      - Mathematical parsing with stacks
    parents: [min_stack]

  daily_temperatures:
    title: "Daily Temperatures"
    short_title: "Daily Temperatures"
    emoji: "🟡"
    content: |
      **[LeetCode](https://leetcode.com/problems/daily-temperatures/)**

      Evolves the stack into a 'Monotonic Stack' that tracks decreasing values for next-greater elements.

      **New Concepts:**
      - Monotonic Decreasing Stack
    parents: [evaluate_reverse_polish_notation]

  largest_rectangle_in_histogram:
    title: "Largest Rectangle in Histogram"
    short_title: "Largest Rectangle in Histogram"
    emoji: "🔴"
    content: |
      **[LeetCode](https://leetcode.com/problems/largest-rectangle-in-histogram/)**

      The ultimate monotonic stack problem, calculating geometric bounds dynamically.

      **New Concepts:**
      - Monotonic Increasing Stack
      - Boundary calculation
    parents: [daily_temperatures]

  binary_search:
    title: "Binary Search"
    short_title: "Binary Search"
    emoji: "🟢"
    content: |
      **[LeetCode](https://leetcode.com/problems/binary-search/)**

      Foundation of searching sorted spaces.

      **New Concepts:**
      - Divide and Conquer
      - Logarithmic time
    parents: []

  search_a_2d_matrix:
    title: "Search a 2D Matrix"
    short_title: "Search a 2D Matrix"
    emoji: "🟡"
    content: |
      **[LeetCode](https://leetcode.com/problems/search-a-2d-matrix/)**

      Extends binary search from a line to a grid.

      **New Concepts:**
      - Coordinate mapping (1D to 2D)
    parents: [binary_search]

  find_minimum_in_rotated_sorted_array:
    title: "Find Min in Rotated Array"
    short_title: "Find Min in Rotated Array"
    emoji: "🟡"
    content: |
      **[LeetCode](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/)**

      Adapts binary search for spaces that are only partially sorted.

      **New Concepts:**
      - Identifying sorted halves
    parents: [binary_search]

  search_in_rotated_sorted_array:
    title: "Search in Rotated Array"
    short_title: "Search in Rotated Array"
    emoji: "🟡"
    content: |
      **[LeetCode](https://leetcode.com/problems/search-in-rotated-sorted-array/)**

      Combines coordinate manipulation with partial-sort logic.

      **New Concepts:**
      - Target localization in broken sorted spaces
    parents: [search_a_2d_matrix, find_minimum_in_rotated_sorted_array]

  median_of_two_sorted_arrays:
    title: "Median of Two Sorted Arrays"
    short_title: "Median of Two Sorted Arrays"
    emoji: "🔴"
    content: |
      **[LeetCode](https://leetcode.com/problems/median-of-two-sorted-arrays/)**

      The hardest binary search concept: searching a partition instead of an element.

      **New Concepts:**
      - Binary searching abstract boundaries
    parents: [search_in_rotated_sorted_array]

  reverse_linked_list:
    title: "Reverse Linked List"
    short_title: "Reverse Linked List"
    emoji: "🟢"
    content: |
      **[LeetCode](https://leetcode.com/problems/reverse-linked-list/)**

      Foundation of linked structures.

      **New Concepts:**
      - Pointers
      - Node manipulation
    parents: []

  merge_two_sorted_lists:
    title: "Merge Two Sorted Lists"
    short_title: "Merge Two Sorted Lists"
    emoji: "🟢"
    content: |
      **[LeetCode](https://leetcode.com/problems/merge-two-sorted-lists/)**

      Foundation of list merging.

      **New Concepts:**
      - Dummy nodes
      - Splicing lists
    parents: []

  linked_list_cycle:
    title: "Linked List Cycle"
    short_title: "Linked List Cycle"
    emoji: "🟢"
    content: |
      **[LeetCode](https://leetcode.com/problems/linked-list-cycle/)**

      Brings the two-pointer concept into linked list spaces.

      **New Concepts:**
      - Floyd's Tortoise and Hare
    parents: [valid_palindrome]

  reorder_list:
    title: "Reorder List"
    short_title: "Reorder List"
    emoji: "🟡"
    content: |
      **[LeetCode](https://leetcode.com/problems/reorder-list/)**

      A pure test combining reversal, merging, and fast/slow pointers.

      **New Concepts:**
      - Finding midpoints
      - Alternating splices
    parents: [reverse_linked_list, merge_two_sorted_lists]

  remove_nth_node_from_end:
    title: "Remove Nth Node"
    short_title: "Remove Nth Node"
    emoji: "🟡"
    content: |
      **[LeetCode](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)**

      Applies a 'gap' to two pointers to find trailing nodes.

      **New Concepts:**
      - Delayed pointers
    parents: [reverse_linked_list]

  copy_list_with_random_pointer:
    title: "Copy List with Random Pointer"
    short_title: "Copy List with Random Pointer"
    emoji: "🟡"
    content: |
      **[LeetCode](https://leetcode.com/problems/copy-list-with-random-pointer/)**

      Combines linked list traversal with Hash Map mapping.

      **New Concepts:**
      - Mapping old nodes to new nodes
    parents: [two_sum]

  add_two_numbers:
    title: "Add Two Numbers"
    short_title: "Add Two Numbers"
    emoji: "🟡"
    content: |
      **[LeetCode](https://leetcode.com/problems/add-two-numbers/)**

      Applies arithmetic while traversing nodes.

      **New Concepts:**
      - Carry math across nodes
    parents: [reverse_linked_list]

  merge_k_sorted_lists:
    title: "Merge k Sorted Lists"
    short_title: "Merge k Sorted Lists"
    emoji: "🔴"
    content: |
      **[LeetCode](https://leetcode.com/problems/merge-k-sorted-lists/)**

      Combines list merging with priority queue sorting for efficiency.

      **New Concepts:**
      - Min-Heaps applied to linked nodes
    parents: [merge_two_sorted_lists, top_k_frequent_elements]

  invert_binary_tree:
    title: "Invert Binary Tree"
    short_title: "Invert Binary Tree"
    emoji: "🟢"
    content: |
      **[LeetCode](https://leetcode.com/problems/invert-binary-tree/)**

      Foundation of modifying tree structures.

      **New Concepts:**
      - Recursion
      - Tree Traversal (DFS)
    parents: []

  maximum_depth_of_binary_tree:
    title: "Max Depth of Binary Tree"
    short_title: "Max Depth of Binary Tree"
    emoji: "🟢"
    content: |
      **[LeetCode](https://leetcode.com/problems/maximum-depth-of-binary-tree/)**

      Extends traversal by passing values up the call stack.

      **New Concepts:**
      - Bottom-up recursion
      - State returning
    parents: [invert_binary_tree]

  diameter_of_binary_tree:
    title: "Diameter of Binary Tree"
    short_title: "Diameter of Binary Tree"
    emoji: "🟢"
    content: |
      **[LeetCode](https://leetcode.com/problems/diameter-of-binary-tree/)**

      Calculates local values while updating a global maximum.

      **New Concepts:**
      - Global state updating during DFS
    parents: [maximum_depth_of_binary_tree]

  balanced_binary_tree:
    title: "Balanced Binary Tree"
    short_title: "Balanced Binary Tree"
    emoji: "🟢"
    content: |
      **[LeetCode](https://leetcode.com/problems/balanced-binary-tree/)**

      Uses the depth logic to strictly validate tree balance.

      **New Concepts:**
      - Early termination
      - Returning multiple states
    parents: [maximum_depth_of_binary_tree]

  same_tree:
    title: "Same Tree"
    short_title: "Same Tree"
    emoji: "🟢"
    content: |
      **[LeetCode](https://leetcode.com/problems/same-tree/)**

      Synchronizes DFS across multiple structures.

      **New Concepts:**
      - Parallel traversal of two trees
    parents: [invert_binary_tree]

  subtree_of_another_tree:
    title: "Subtree of Another Tree"
    short_title: "Subtree of Another Tree"
    emoji: "🟢"
    content: |
      **[LeetCode](https://leetcode.com/problems/subtree-of-another-tree/)**

      Uses 'Same Tree' as a helper function across every node.

      **New Concepts:**
      - Nested tree traversal
    parents: [same_tree]

  lowest_common_ancestor_bst:
    title: "LCA of a BST"
    short_title: "LCA of a BST"
    emoji: "🟡"
    content: |
      **[LeetCode](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/)**

      Combines Tree traversal with Binary Search logic.

      **New Concepts:**
      - Exploiting BST properties
    parents: [invert_binary_tree, binary_search]

  validate_binary_search_tree:
    title: "Validate BST"
    short_title: "Validate BST"
    emoji: "🟡"
    content: |
      **[LeetCode](https://leetcode.com/problems/validate-binary-search-tree/)**

      Extends BST properties to enforce strict upper/lower bounds.

      **New Concepts:**
      - Boundary tracking (Min/Max limits)
    parents: [lowest_common_ancestor_bst]

  kth_smallest_element_in_bst:
    title: "Kth Smallest Element in BST"
    short_title: "Kth Smallest Element in BST"
    emoji: "🟡"
    content: |
      **[LeetCode](https://leetcode.com/problems/kth-smallest-element-in-a-bst/)**

      Uses the fact that In-Order traversal of a BST yields a sorted array.

      **New Concepts:**
      - In-order traversal properties
    parents: [validate_binary_search_tree]

  construct_binary_tree:
    title: "Construct Tree from Preorder/Inorder"
    short_title: "Construct Tree from Preorder/Inorder"
    emoji: "🟡"
    content: |
      **[LeetCode](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)**

      Deconstructs traversal outputs back into a tree structure.

      **New Concepts:**
      - Array splitting
      - Array to Tree mapping
    parents: [validate_binary_search_tree]

  binary_tree_maximum_path_sum:
    title: "Binary Tree Max Path Sum"
    short_title: "Binary Tree Max Path Sum"
    emoji: "🔴"
    content: |
      **[LeetCode](https://leetcode.com/problems/binary-tree-maximum-path-sum/)**

      The ultimate evolution of 'Diameter', tracking complex path sums.

      **New Concepts:**
      - Path splitting
      - Negative value rejection
    parents: [diameter_of_binary_tree]

  serialize_and_deserialize:
    title: "Serialize and Deserialize Tree"
    short_title: "Serialize and Deserialize Tree"
    emoji: "🔴"
    content: |
      **[LeetCode](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/)**

      Combines tree construction with string manipulation.

      **New Concepts:**
      - String processing
      - Pre-order building
    parents: [construct_binary_tree]

  number_of_islands:
    title: "Number of Islands"
    short_title: "Number of Islands"
    emoji: "🟡"
    content: |
      **[LeetCode](https://leetcode.com/problems/number-of-islands/)**

      Applies Tree DFS to a 2D matrix (Graph).

      **New Concepts:**
      - Grid boundaries
      - Graph DFS
    parents: [invert_binary_tree]

  clone_graph:
    title: "Clone Graph"
    short_title: "Clone Graph"
    emoji: "🟡"
    content: |
      **[LeetCode](https://leetcode.com/problems/clone-graph/)**

      Combines Node mapping (from Linked Lists) with Graph traversal.

      **New Concepts:**
      - Adjacency lists
      - State mapping
    parents: [number_of_islands, copy_list_with_random_pointer]

  max_area_of_island:
    title: "Max Area of Island"
    short_title: "Max Area of Island"
    emoji: "🟡"
    content: |
      **[LeetCode](https://leetcode.com/problems/max-area-of-island/)**

      Applies 'Max Depth' counting logic to 'Number of Islands'.

      **New Concepts:**
      - Area accumulation in graphs
    parents: [number_of_islands]

  pacific_atlantic_water_flow:
    title: "Pacific Atlantic Water Flow"
    short_title: "Pacific Atlantic Water Flow"
    emoji: "🟡"
    content: |
      **[LeetCode](https://leetcode.com/problems/pacific-atlantic-water-flow/)**

      Traverses from the ocean boundaries inwards.

      **New Concepts:**
      - Reverse traversal
      - Matrix intersections
    parents: [max_area_of_island]

  word_ladder:
    title: "Word Ladder"
    short_title: "Word Ladder"
    emoji: "🔴"
    content: |
      **[LeetCode](https://leetcode.com/problems/word-ladder/)**

      Transitions from DFS to BFS for shortest path discovery.

      **New Concepts:**
      - Breadth-First Search (BFS)
      - Shortest Path
    parents: [number_of_islands]
`,X0=`meta:
  title: "The Web of Programming Languages"
  description: |
    A wide and deep exploration of how modern programming
    languages evolved from the earliest machine codes. This
    graph illustrates the massive branching factor of the
    software world, showing how different philosophies
    (imperative, functional, object-oriented) created
    entirely different lineages of technology.
  start: [assembly]

nodes:
  assembly:
    title: "Assembly & Machine Code"
    short_title: "Assembly"
    emoji: "🔢"
    content: |
      In the beginning, there was the hardware.
      Programmers wrote in binary or mnemonic
      Assembly code, tied directly to a specific
      CPU architecture.

      It was fast, but it was unreadable and
      impossible to port between machines.

      ![Assembly](https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Table_of_x86_Registers_v2.svg/400px-Table_of_x86_Registers_v2.svg.png)
    parents: []

  fortran:
    title: "FORTRAN (1957)"
    short_title: "FORTRAN"
    emoji: "🧪"
    content: |
      The first high-level language, designed
      specifically for scientific and
      engineering calculations.

      It introduced the concept of the
      "Compiler," allowing humans to write
      formulas instead of memory addresses.
    parents: [assembly]

  lisp:
    title: "LISP (1958)"
    short_title: "LISP"
    emoji: "🌿"
    content: |
      While FORTRAN focused on numbers, John
      McCarthy's LISP focused on symbols and
      lists.

      It founded the **Functional Programming**
      lineage, introducing recursion, garbage
      collection, and the idea that "code is
      data."
    parents: [assembly]

  algol:
    title: "ALGOL 60"
    short_title: "ALGOL"
    emoji: "📐"
    content: |
      The "Universal" language that defined
      the block-structured syntax we still
      use today (\`begin/end\`, \`if/then/else\`).

      Almost every modern imperative language
      is a "descendant of ALGOL."
    parents: [fortran]

  c_lang:
    title: "C (1972)"
    short_title: "C"
    emoji: "🏎️"
    content: |
      Developed at Bell Labs to write the
      UNIX operating system.

      C combined the power of Assembly with
      the structure of ALGOL. It became the
      "portable assembly" of the world.
    parents: [algol]

  smalltalk:
    title: "Smalltalk (1972)"
    short_title: "Smalltalk"
    emoji: "💬"
    content: |
      While C was perfecting the imperative
      style, Smalltalk was perfecting
      **Object-Oriented Programming (OOP)**.

      Everything was an object, and objects
      communicated via messages. It inspired
      the GUI and modern IDEs.
    parents: [lisp, algol]

  cpp:
    title: "C++ (1985)"
    short_title: "C++"
    emoji: "🏗️"
    content: |
      Bjarne Stroustrup wanted to add
      Smalltalk-style objects to the
      efficiency of C.

      The result was a massive, complex
      language that powered the desktop
      software revolution of the 90s.
    parents: [c_lang, smalltalk]

  python:
    title: "Python (1991)"
    short_title: "Python"
    emoji: "🐍"
    content: |
      Guido van Rossum designed Python to
      be readable and "fun."

      It inherited from C (for its core)
      and ABC (for its syntax), becoming the
      dominant language for data science and
      automation.
    parents: [c_lang]

  java:
    title: "Java (1995)"
    short_title: "Java"
    emoji: "☕"
    content: |
      "Write Once, Run Anywhere."

      Java simplified C++ by removing
      manual memory management (pointers)
      and running on a Virtual Machine (JVM).
      It conquered the enterprise world.
    parents: [cpp]

  javascript:
    title: "JavaScript (1995)"
    short_title: "JS"
    emoji: "🕸️"
    content: |
      Created in 10 days for the Netscape
      browser.

      Despite its name, it has more in
      common with LISP and Self than Java.
      It is now the most widely used
      language in the world.
    parents: [c_lang, lisp]

  haskell:
    title: "Haskell (1990)"
    short_title: "Haskell"
    emoji: "λ"
    content: |
      A purely functional language named
      after Haskell Curry.

      It introduced advanced type systems
      (Monads!) and lazy evaluation,
      pushing the boundaries of how we
      reason about programs.
    parents: [lisp]

  rust:
    title: "Rust (2010)"
    short_title: "Rust"
    emoji: "🦀"
    content: |
      The modern successor to C++.

      It uses a "Borrow Checker" to provide
      memory safety without a garbage
      collector, merging functional concepts
      with low-level performance.
    parents: [cpp, haskell]
`,Q0=`meta:
  title: "The Life and Death of Stars"
  description: |
    A graph that begins linearly as all stars form from
    gas clouds, but then branches wildly based on a
    single variable: Mass. This illustrates how a
    shared starting point can lead to vastly different
    outcomes—from a quiet white dwarf to a reality-warping
    black hole.
  start: [nebula]

nodes:
  nebula:
    title: "Stellar Nursery"
    short_title: "Nebula"
    emoji: "☁️"
    content: |
      Giant Molecular Clouds (Nebulas) of
      hydrogen and dust collapse under
      gravity.

      This phase is universal. Every star
      begins as a cold, dark cloud
      starting to spin and heat up.

      ![Nebula](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Eagle_nebula_pillars.jpg/300px-Eagle_nebula_pillars.jpg)
    parents: []

  protostar:
    title: "Protostar"
    short_title: "Protostar"
    emoji: "🌟"
    content: |
      The core temperature reaches
      millions of degrees. Friction and
      pressure create a glowing sphere.

      It's not yet a star, but it's
      gathering mass and preparing for
      fusion.
    parents: [nebula]

  main_sequence:
    title: "Main Sequence"
    short_title: "Main Seq"
    emoji: "☀️"
    content: |
      Nuclear fusion begins. Hydrogen
      fuses into Helium, releasing
      immense energy.

      The star is in a state of
      **Hydrostatic Equilibrium**—gravity
      pulls in, and radiation pressure
      pushes out.

      ![The Sun](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg/300px-The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg)
    parents: [protostar]

  low_mass_branch:
    title: "Branch: Low Mass Stars"
    short_title: "Low Mass"
    emoji: "🕯️"
    content: |
      Stars like our Sun (< 8 solar masses).
      They burn their fuel slowly over
      billions of years.

      When the hydrogen runs out, the
      core collapses and the outer layers
      expand.
    parents: [main_sequence]

  high_mass_branch:
    title: "Branch: High Mass Stars"
    short_title: "High Mass"
    emoji: "🔥"
    content: |
      Stars (> 8 solar masses). They burn
      furious and fast, exhausting their
      fuel in just millions of years.

      They are the "rock stars" of the
      cosmos—live fast, die young.
    parents: [main_sequence]

  red_giant:
    title: "Red Giant"
    short_title: "Red Giant"
    emoji: "🔴"
    content: |
      The star expands to 100x its
      original size. It starts fusing
      Helium into Carbon.

      Eventually, it sheds its outer
      layers into space.
    parents: [low_mass_branch]

  white_dwarf:
    title: "White Dwarf"
    short_title: "White Dwarf"
    emoji: "💎"
    content: |
      The tiny, dense, glowing core that
      remains. No more fusion occurs.

      It will slowly cool over trillions
      of years until it becomes a cold
      Black Dwarf.
    parents: [red_giant]

  supernova:
    title: "Supernova"
    short_title: "Supernova"
    emoji: "💥"
    content: |
      The core collapses so violently
      that it rebounds in a massive
      explosion, outshining an entire
      galaxy.

      This explosion creates all the
      heavy elements (Gold, Iron) in
      the universe.

      ![Supernova](https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Crab_Nebula.jpg/300px-Crab_Nebula.jpg)
    parents: [high_mass_branch]

  neutron_star:
    title: "Neutron Star"
    short_title: "Neutron"
    emoji: "🧲"
    content: |
      If the remaining core is between
      1.4 and 3 solar masses, it
      becomes a city-sized ball of
      pure neutrons.

      One teaspoon of this material
      would weigh a billion tons.
    parents: [supernova]

  black_hole:
    title: "Black Hole"
    short_title: "Black Hole"
    emoji: "🕳️"
    content: |
      If the core is > 3 solar masses,
      not even neutron degeneracy
      can stop the collapse.

      Gravity becomes so strong that
      even light cannot escape. Space
      and time are warped into a
      singularity.

      ![Black Hole](https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Black_hole_-_M87.jpg/300px-Black_hole_-_M87.jpg)
    parents: [supernova]
`,K0=`meta:
  title: "The Broad Street Pump"
  description: |
    The 1854 Soho Cholera outbreak was a turning point in medical
    history. At a time when the "Miasma Theory" of bad air dominated
    science, Dr. John Snow used data visualization and shoe-leather
    epidemiology to prove that the disease was water-borne. This
    example illustrates a classic conflict between an established
    but wrong scientific dogma and a new, evidence-based hypothesis
    that initially seemed absurd to the authorities.
  start: [outbreak]

nodes:
  outbreak:
    title: "The Soho Outbreak"
    short_title: "Outbreak"
    emoji: "☣️"
    content: |
      In late August 1854, a terrifying outbreak of Cholera
      hits the Soho district of London. In a single week,
      over **10% of the population** in a small radius dies.

      The symptoms are violent and rapid—perfectly healthy
      people collapse and die within 12 to 48 hours. The
      local community is paralyzed by fear as families
      are wiped out in their sleep.

      ![Ghost Map](https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Snow-cholera-map-1.jpg/400px-Snow-cholera-map-1.jpg)
    parents: []

  miasma_theory:
    title: "Miasma Theory"
    short_title: "Miasma"
    emoji: "💨"
    content: |
      The scientific establishment, led by William Farr,
      believes in **Miasma**. They argue that Cholera is
      caused by "bad air" or "effluvia" rising from
      rotting organic matter and sewage.

      Soho is crowded and smells terrible, which seems
      to support the theory. Officials tell citizens to
      burn incense and open windows to "let the miasma out."
    parents: [outbreak]

  sewer_dead_end:
    title: "Dead End: Sewer Cleaning"
    short_title: "Sewer Error"
    emoji: "⛔"
    content: |
      In an attempt to "clean the air," the Board of
      Health orders the local sewers to be flushed
      directly into the River Thames.

      **The Catastrophe:** This "cleansing" actually
      pushed concentrated cholera bacteria directly into
      the river from which many water companies drew
      their supply. Instead of stopping the miasma,
      they poisoned the city's drinking water even further.
    parents: [miasma_theory]

  snow_hypothesis:
    title: "Snow's Hypothesis"
    short_title: "Water-borne"
    emoji: "📓"
    content: |
      Dr. John Snow, a local physician, has long
      doubted Miasma. He notes that Cholera affects the
      gut, not the lungs—suggesting it must be
      ingested rather than inhaled.

      He begins a door-to-door investigation of the
      victims' families, asking one simple question:
      "Where did you get your water?"
    parents: [outbreak]

  ghost_map:
    title: "The Ghost Map"
    short_title: "Mapping"
    emoji: "🗺️"
    content: |
      Snow creates a revolutionary map. He marks each
      death as a black bar at the address where the
      victim lived.

      The visual data is shocking: a massive cluster of
      bars surrounds the **Broad Street water pump**.
      The further you move from that specific pump,
      the fewer deaths you find.
    parents: [snow_hypothesis]

  anomaly_divergence:
    title: "Divergent Anomalies"
    short_title: "Anomalies"
    emoji: "❓"
    content: |
      Two strange "anomalies" initially seem to
      contradict Snow's map:

      1. **The Brewery:** A brewery right next to
         the pump had **zero** deaths among its 70 workers.
      2. **The Hampstead Widow:** A woman living miles
         away in a "clean" neighborhood died of Cholera.
    parents: [ghost_map]

  anomaly_explained:
    title: "Anomalies Explained"
    short_title: "Solved"
    emoji: "✅"
    content: |
      Snow investigates further and finds the "exceptions"
      are his strongest proof:

      - **The Brewery:** The workers were allowed
        free beer, so they rarely drank water. The
        beer-making process involved boiling the
        water, which killed the bacteria.
      - **The Widow:** She used to live in Soho and
        liked the "sweet" taste of the Broad Street
        well. She had a bottle of it delivered to
        her home in Hampstead every day.
    parents: [anomaly_divergence]

  convergence:
    title: "Action & Proof"
    short_title: "Convergence"
    emoji: "💧"
    content: |
      Snow presents his map and the anomaly data to
      the St. James Parish Board. While they are
      still skeptical of his "germs," the evidence
      of the pump's involvement is undeniable.

      They agree to a simple experiment: **Remove
      the pump handle.** Within days, the local
      outbreak grinds to a halt.
    parents: [anomaly_explained, sewer_dead_end]

  legacy:
    title: "Birth of Epidemiology"
    short_title: "Legacy"
    emoji: "🌱"
    content: |
      Snow's work founded the field of modern
      epidemiology. It proved that mapping and
      data-tracking could solve medical mysteries.

      Decades later, Robert Koch would identify
      *Vibrio cholerae* under a microscope, finally
      providing the biological proof for what
      John Snow saw on his map in 1854.
    parents: [convergence]
`,Z0=`meta:
  title: "The Quest for the Sky"
  description: |
    The invention of the airplane was not just about adding an engine
    to a glider. It required a fundamental shift in how inventors
    viewed "control." This graph follows the non-linear path from
    failed attempts at mimicking bird flight to the Wright Brothers'
    revolutionary realization that a plane should be unstable but
    controllable—just like a bicycle.
  start: [ornithopter]

nodes:
  ornithopter:
    title: "Mimicking Birds"
    short_title: "Ornithopter"
    emoji: "🦢"
    content: |
      For centuries, humans looked at birds and
      assumed the secret to flight was **flapping**.

      Early inventors built "Ornithopters"—machines
      with mechanical wings powered by human muscle
      or early steam engines. They believed that if
      they could just flap fast enough, they would
      achieve lift.
    parents: []

  dead_end_flapping:
    title: "Dead End: Flapping"
    short_title: "Failure"
    emoji: "⛔"
    content: |
      Ornithopters failed for two reasons:
      1. **Biomechanics:** Human muscles are too
         weak to lift our body weight via flapping.
      2. **Structural Stress:** The mechanical
         stresses of rapidly flapping large wings
         caused every prototype to shake itself apart.

      By the late 1800s, serious inventors realized
      flapping was a dead end for human-scale flight.
    parents: [ornithopter]

  divergence_gliding:
    title: "Divergence: Gliding"
    short_title: "Gliders"
    emoji: "🪂"
    content: |
      Otto Lilienthal, the "Glider King," realizes
      we should separate **lift** from **propulsion**.

      He builds fixed-wing gliders and makes
      thousands of flights from a man-made hill.
      He proves that curved (cambered) wings
      produce the most lift. However, he lacks
      a way to turn or control the glider's roll.
    parents: [ornithopter]

  power_problem:
    title: "The Power Problem"
    short_title: "Engines"
    emoji: "⚙️"
    content: |
      While some sought flight through gliders, the
      industrial revolution was independently solving
      the problem of **propulsion**.

      However, in 1900, engines were still monsters
      of cast iron designed for factories and
      heavy automobiles.

      - Steam engines: High power but far too heavy
        due to boilers and water.
      - Early gas engines: Promising, but heavy and
        notoriously unreliable.
    parents: []

  control_problem:
    title: "The Control Problem"
    short_title: "Control"
    emoji: "🕹️"
    content: |
      Most inventors (like Samuel Langley) tried
      to build "inherently stable" planes—ships
      of the air that would stay level on their own.

      The Wright Brothers, being bicycle mechanics,
      had a different insight: A bicycle is
      **unstable**, but the rider controls it
      through constant tiny adjustments. They
      decided a plane should be the same.
    parents: [divergence_gliding]

  wing_warping:
    title: "Wing Warping"
    short_title: "Warping"
    emoji: "✈️"
    content: |
      Wilbur Wright observes buzzards twisting
      their wingtips to bank into turns. He
      realizes they need a way to change the
      shape of the wing mid-flight.

      They develop **"Wing Warping"**—a system
      of pulleys that twists the fabric wings
      to provide 3-axis control (pitch, roll,
      and yaw). This is the "Aha!" moment
      of aeronautical engineering.
    parents: [control_problem]

  custom_engine:
    title: "The Aluminum Engine"
    short_title: "Custom Engine"
    emoji: "🔥"
    content: |
      Unable to buy a lightweight engine, the
      Wrights and their mechanic Charlie Taylor
      build their own in their bike shop.

      They use a revolutionary **aluminum block**
      to keep the weight down to 180 lbs while
      still producing 12 horsepower.
    parents: [power_problem]

  convergence:
    title: "Kitty Hawk (1903)"
    short_title: "Success"
    emoji: "🏁"
    content: |
      On December 17, 1903, the pieces converge:
      - The **Lift** from their wind-tunnel data.
      - The **Power** from the aluminum engine.
      - The **Control** from wing-warping and
        the rear rudder.

      Orville Wright makes the first flight:
      12 seconds, 120 feet. By the fourth
      flight that day, Wilbur flies for
      59 seconds. The age of aviation is born.

      ![First Flight](https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/First_flight2.jpg/400px-First_flight2.jpg)
    parents: [wing_warping, custom_engine]
`,J0=`meta:
  title: "The Birth of the Internet"
  description: |
    Four independent threads—military command networks,
    academic computing, telecommunications research, and
    counterculture hacker ethics—wove together over
    decades to create the internet. This graph shows how
    innovations from completely separate worlds repeatedly
    cross-pollinated, converged at critical moments like
    TCP/IP and the World Wide Web, and then diverged again
    into the modern internet we know today.
  start: [arpanet, unix, packet_switching, hacker_ethics]

nodes:
  arpanet:
    title: "ARPANET (1969)"
    short_title: "ARPANET"
    emoji: "🎖️"
    content: |
      The U.S. Department of Defense funds a network
      to connect research universities. The goal:
      a communications system with **no single point
      of failure** that could survive a nuclear strike.

      The first message sent over ARPANET was "LO"—
      the system crashed before completing "LOGIN."
    parents: []

  unix:
    title: "Unix (1969)"
    short_title: "Unix"
    emoji: "🖥️"
    content: |
      Ken Thompson and Dennis Ritchie at Bell Labs
      build Unix—an operating system designed to be
      **portable, modular, and shareable**.

      Unlike mainframe OSes, Unix was written in C
      and could run on different hardware. Bell Labs
      distributed the source code to universities,
      planting seeds everywhere.
    parents: []

  packet_switching:
    title: "Packet Switching (1960s)"
    short_title: "Packets"
    emoji: "📡"
    content: |
      Paul Baran (RAND) and Donald Davies (NPL)
      independently invent the same idea: instead
      of dedicating a circuit to each call, **break
      data into packets** and route them independently.

      The telephone companies dismiss the idea as
      absurd. It works anyway.
    parents: []

  hacker_ethics:
    title: "Hacker Ethics (1960s)"
    short_title: "Hackers"
    emoji: "✊"
    content: |
      At MIT's Tech Model Railroad Club, a culture
      emerges: information should be **free**, access
      to computers should be **unlimited**, and
      authority should be **distrusted**.

      These values will shape every layer of the
      internet, from open protocols to open source.
    parents: []

  tcp_ip:
    title: "TCP/IP (1974-1983)"
    short_title: "TCP/IP"
    emoji: "🔗"
    content: |
      ### The First Great Convergence

      Vint Cerf and Bob Kahn combine military
      networking (ARPANET) with telecom theory
      (packet switching) to create TCP/IP—a
      universal protocol that lets **any network
      talk to any other network**.

      On January 1, 1983 ("Flag Day"), ARPANET
      switches to TCP/IP. The internet is born.
    parents: [arpanet, packet_switching]

  bsd_unix:
    title: "BSD Unix (1977-1983)"
    short_title: "BSD"
    emoji: "😈"
    content: |
      UC Berkeley takes AT&T's Unix and adds
      networking code funded by DARPA—including
      the **BSD socket API**, which becomes the
      standard way every program talks to the
      internet.

      Military money + academic OS = the
      networking stack we still use today.
    parents: [unix, arpanet]

  usenet:
    title: "Usenet (1980)"
    short_title: "Usenet"
    emoji: "📰"
    content: |
      Two Duke grad students create a system for
      Unix machines to exchange messages over
      phone lines. Usenet becomes the first
      large-scale **public discussion forum**—
      unmoderated, decentralized, and chaotic.

      It proves that people will use networks
      for conversation, not just computation.
    parents: [unix, hacker_ethics]

  dns:
    title: "DNS (1983)"
    short_title: "DNS"
    emoji: "📖"
    content: |
      The internet is growing too fast for a
      single hosts.txt file. Paul Mockapetris
      invents the **Domain Name System**—a
      distributed database that maps human-readable
      names to IP addresses.

      It's the internet's phone book, and it
      runs on the principle that no single
      authority should control all names.
    parents: [tcp_ip]

  gnu_project:
    title: "GNU Project (1983)"
    short_title: "GNU"
    emoji: "🦬"
    content: |
      Richard Stallman, frustrated that software
      is becoming proprietary, launches GNU—a
      project to build a **completely free**
      operating system.

      He writes the GPL license: you can use,
      modify, and share the code, but you must
      pass those freedoms along. Hacker ethics
      become legally enforceable.
    parents: [hacker_ethics, unix]

  email:
    title: "Email Goes Mainstream (1980s)"
    short_title: "Email"
    emoji: "📧"
    content: |
      Email predates the internet—it started as
      messages between users on the same mainframe.
      But with TCP/IP and DNS, it becomes the
      internet's **killer app**.

      By 1989, email is the reason most
      organizations connect to the internet.
    parents: [tcp_ip, dns]

  www:
    title: "The World Wide Web (1991)"
    short_title: "WWW"
    emoji: "🌐"
    content: |
      ### The Second Great Convergence

      Tim Berners-Lee at CERN combines DNS
      (addressable names), TCP/IP (universal
      transport), and the hacker ethos of open
      standards to create HTML, HTTP, and URLs.

      He makes a fateful choice: **no patent,
      no license, no fee.** The web is free.
    parents: [dns, hacker_ethics]

  linux:
    title: "Linux (1991)"
    short_title: "Linux"
    emoji: "🐧"
    content: |
      Linus Torvalds, a Finnish student, posts
      to Usenet: "I'm doing a (free) operating
      system (just a hobby)."

      He combines GNU's free tools with his own
      kernel. Distributed via Usenet and FTP,
      developed by volunteers worldwide, Linux
      becomes the OS that **runs the internet**.
    parents: [gnu_project, usenet]

  browsers:
    title: "The Browser Wars (1993-1998)"
    short_title: "Browsers"
    emoji: "🧭"
    content: |
      Mosaic (1993) adds **images** to the web,
      making it visual. Netscape makes it fast
      and adds JavaScript. Microsoft bundles
      Internet Explorer with Windows.

      The browser wars are brutal, but they
      drive innovation at breakneck speed.
      The web goes from text to multimedia
      in five years.
    parents: [www]

  dotcom:
    title: "The Dot-Com Boom (1995-2000)"
    short_title: "Dot-Com"
    emoji: "💰"
    content: |
      Venture capital floods into anything with
      a ".com" in its name. Amazon, eBay, Google,
      and thousands of forgotten startups race to
      commercialize the web.

      The bubble pops in 2000, but the
      infrastructure it built—fiber optic cables,
      data centers, payment systems—survives.
    parents: [browsers, email]

  open_source:
    title: "Open Source Movement (1998)"
    short_title: "Open Source"
    emoji: "🔓"
    content: |
      Netscape releases its browser source code.
      Eric Raymond and others rebrand "free
      software" as **"open source"**—same
      freedoms, friendlier to business.

      Apache, MySQL, PHP, and Linux form the
      "LAMP stack" that powers most of the
      early web. Free software runs the
      commercial internet.
    parents: [linux, browsers]

  social_web:
    title: "The Social Web (2004-2010)"
    short_title: "Social"
    emoji: "👥"
    content: |
      Facebook, Twitter, YouTube, and Reddit
      fulfill Usenet's original promise at
      massive scale. User-generated content
      replaces editorial content.

      The internet shifts from "pages you read"
      to "feeds you scroll." The attention
      economy is born.
    parents: [dotcom, open_source]

  cloud:
    title: "The Cloud (2006+)"
    short_title: "Cloud"
    emoji: "☁️"
    content: |
      Amazon rents out its excess server capacity
      as AWS. The entire dot-com infrastructure
      becomes available **on demand** to anyone
      with a credit card.

      Linux runs nearly every cloud server.
      Open source runs nearly every service.
      The hacker dream of universal access
      is realized—as a subscription.
    parents: [dotcom, linux]

  modern_internet:
    title: "The Modern Internet"
    short_title: "Today"
    emoji: "🌍"
    content: |
      ### The Third Convergence

      Social networks, cloud computing, and
      open source merge into the always-on,
      mobile-first internet of today.

      Every layer still carries its origins:
      military resilience in the protocols,
      academic openness in the standards,
      telecom engineering in the infrastructure,
      and hacker ethics in the culture—even
      as all four are under constant tension.
    parents: [social_web, cloud]
`,W0=`meta:
  title: "Unraveling DNA"
  description: |
    The discovery of DNA's structure was not one eureka
    moment—it was four independent threads of research
    (genetics, biochemistry, X-ray crystallography, and
    bacteriology) that converged over decades. This graph
    traces how each thread contributed essential pieces,
    how they came together in Watson and Crick's 1953
    model, and how the discovery diverged into the
    technologies that define modern biology.
  start: [mendel, nuclein, xray_origins, griffith]

nodes:
  mendel:
    title: "Mendel's Peas (1866)"
    short_title: "Mendel"
    emoji: "🌱"
    content: |
      Gregor Mendel, an Augustinian friar, crosses
      thousands of pea plants and discovers that
      traits are inherited in **discrete units**
      (later called genes) that follow mathematical
      ratios.

      His work is published, ignored for 35 years,
      then rediscovered in 1900. The concept of a
      "unit of heredity" is born—but nobody knows
      what it's made of.
    parents: []

  nuclein:
    title: "Nuclein (1869)"
    short_title: "Nuclein"
    emoji: "🧪"
    content: |
      Friedrich Miescher isolates a strange,
      phosphorus-rich substance from the nuclei
      of white blood cells in used surgical
      bandages. He calls it **"nuclein."**

      It's clearly important—it's in every cell
      nucleus—but nobody knows what it does.
      For decades, proteins are assumed to carry
      heredity because they're more complex.
    parents: []

  xray_origins:
    title: "X-ray Crystallography (1912)"
    short_title: "X-rays"
    emoji: "💎"
    content: |
      Max von Laue discovers that X-rays scatter
      off crystal lattices in patterns that reveal
      atomic structure. William and Lawrence Bragg
      turn this into a practical technique.

      It's a tool for physicists and chemists—
      nobody is thinking about biology yet. But
      this technique will eventually crack open
      the secret of life.
    parents: []

  griffith:
    title: "Griffith's Experiment (1928)"
    short_title: "Griffith"
    emoji: "🦠"
    content: |
      Frederick Griffith discovers something
      bizarre: dead bacteria can **transform**
      living bacteria, passing on new traits.
      He calls it the "transforming principle."

      Something in the dead cells carries
      hereditary information and can be absorbed
      by living cells. But what is it?
    parents: []

  chromosome_theory:
    title: "Chromosomes Carry Genes (1910s-30s)"
    short_title: "Chromosomes"
    emoji: "🪰"
    content: |
      Thomas Hunt Morgan's fruit fly lab at
      Columbia proves that Mendel's "units of
      heredity" are physically located on
      **chromosomes**—long structures visible
      under a microscope.

      Chromosomes are made of protein and DNA.
      Most scientists bet on protein as the
      hereditary molecule. They're wrong.
    parents: [mendel]

  avery:
    title: "Avery's Bombshell (1944)"
    short_title: "Avery"
    emoji: "💣"
    content: |
      Oswald Avery, Colin MacLeod, and Maclyn
      McCarty repeat Griffith's experiment with
      ruthless precision. They systematically
      destroy each component of the dead bacteria
      to find the "transforming principle."

      Destroy the protein? Transformation still
      works. Destroy the RNA? Still works.
      Destroy the **DNA**? Transformation stops.

      **DNA is the molecule of heredity.** The
      scientific establishment resists this
      conclusion for nearly a decade.
    parents: [griffith, nuclein]

  chargaff:
    title: "Chargaff's Rules (1950)"
    short_title: "Chargaff"
    emoji: "📊"
    content: |
      Erwin Chargaff, convinced by Avery's work,
      analyzes DNA from dozens of species. He
      finds a strange pattern: the amount of
      adenine (A) always equals thymine (T), and
      guanine (G) always equals cytosine (C).

      **A=T, G=C.** Nobody knows why.

      This is the crucial clue—it means the
      bases pair up. But Chargaff himself never
      figures out the structure.
    parents: [avery]

  hershey_chase:
    title: "Hershey-Chase (1952)"
    short_title: "Blender"
    emoji: "🔬"
    content: |
      Alfred Hershey and Martha Chase use
      radioactive labels to track what happens
      when viruses infect bacteria. The viral
      **DNA** enters the cell; the viral
      **protein** stays outside.

      This finally convinces the holdouts:
      DNA, not protein, carries genetic
      information. The race to solve its
      structure begins in earnest.
    parents: [avery, chromosome_theory]

  photo51:
    title: "Photo 51 (1952)"
    short_title: "Photo 51"
    emoji: "📸"
    content: |
      Rosalind Franklin at King's College London
      produces the clearest X-ray diffraction
      image of DNA ever taken. The X-shaped
      pattern reveals that DNA is a **helix**
      with specific, measurable dimensions.

      Franklin is methodical—she wants more
      data before publishing. Her colleague
      Maurice Wilkins shows the photo to
      James Watson without her knowledge.
    parents: [xray_origins, avery]

  model_building:
    title: "Watson & Crick Build Models (1952-53)"
    short_title: "Models"
    emoji: "🏗️"
    content: |
      James Watson and Francis Crick at Cambridge
      take a different approach: instead of pure
      experiment, they build **physical models**
      of possible DNA structures using metal
      plates and clamps.

      Their first attempt (a triple helix) is
      embarrassingly wrong. Franklin points out
      the errors. They go back to the drawing
      board.
    parents: [hershey_chase, chargaff]

  double_helix:
    title: "The Double Helix (1953)"
    short_title: "Double Helix"
    emoji: "🧬"
    content: |
      ### The Great Convergence

      Watson and Crick combine everything:
      - **Chargaff's rules** (A=T, G=C) explain
        base pairing across two strands
      - **Photo 51** gives the helix dimensions
      - **Model building** reveals how the pieces
        physically fit

      On February 28, 1953, they walk into the
      Eagle pub and announce they have "found
      the secret of life." Their model is
      published in *Nature* on April 25, 1953.
    parents: [model_building, photo51]

  genetic_code:
    title: "Cracking the Code (1961-66)"
    short_title: "The Code"
    emoji: "📝"
    content: |
      DNA's structure is solved, but how does it
      actually **encode** information? Marshall
      Nirenberg and Har Gobind Khorana crack the
      genetic code: three-letter "codons" of
      DNA bases map to specific amino acids.

      64 codons, 20 amino acids. The code is
      universal—the same in bacteria, oak trees,
      and humans. Life runs on one language.
    parents: [double_helix]

  recombinant_dna:
    title: "Genetic Engineering (1973)"
    short_title: "Engineering"
    emoji: "✂️"
    content: |
      Stanley Cohen and Herbert Boyer cut DNA
      from one organism and paste it into another
      using restriction enzymes—molecular scissors.

      The first genetically engineered organism is
      a bacterium carrying a frog gene. Within a
      decade, engineered bacteria are producing
      human insulin, saving millions of diabetics
      from relying on pig pancreases.
    parents: [genetic_code]

  pcr:
    title: "PCR (1983)"
    short_title: "PCR"
    emoji: "🔁"
    content: |
      Kary Mullis invents the **Polymerase Chain
      Reaction**—a way to make billions of copies
      of a specific DNA sequence from a tiny sample.

      PCR transforms every field it touches:
      forensics (DNA from a single hair),
      medicine (detecting viruses), archaeology
      (sequencing ancient DNA). It makes the
      invisible visible.
    parents: [genetic_code]

  dna_forensics:
    title: "DNA Forensics (1984)"
    short_title: "Forensics"
    emoji: "🔍"
    content: |
      Alec Jeffreys discovers that certain DNA
      regions vary wildly between individuals—
      a genetic fingerprint. In 1986, DNA evidence
      first exonerates an innocent suspect and then
      identifies the real killer in a murder case.

      The same molecule Miescher scraped from
      bandages in 1869 is now solving crimes.
    parents: [pcr]

  human_genome:
    title: "Human Genome Project (2003)"
    short_title: "Genome"
    emoji: "📖"
    content: |
      A 13-year, $3 billion international effort
      sequences all 3.2 billion base pairs of
      human DNA. The result: humans have only
      ~20,000 genes—fewer than a grape.

      The real surprise is how much DNA **doesn't**
      code for proteins. The "junk DNA" turns out
      to be regulatory—switches that control when
      and where genes activate.
    parents: [pcr, recombinant_dna]

  crispr:
    title: "CRISPR (2012)"
    short_title: "CRISPR"
    emoji: "🎯"
    content: |
      Jennifer Doudna and Emmanuelle Charpentier
      adapt a bacterial immune system into a
      precision gene-editing tool. CRISPR can
      find a specific sequence in 3 billion base
      pairs and cut it like a word processor's
      find-and-replace.

      From Mendel's peas to editing human embryos
      in 146 years. The double helix that Watson
      and Crick built from wire and tin plates is
      now something we can rewrite at will.
    parents: [human_genome]
`,P0=`meta:
  title: "Jack the Ripper: The Whitechapel Murders"
  description: |
    In the autumn of 1888, five women were murdered in
    London's Whitechapel district. The killer was never
    caught. Over 130 years later, the case remains one
    of history's most analyzed unsolved crimes. This
    graph follows the original investigation threads—
    forensic evidence, witness testimony, police suspects,
    and the infamous Ripper letters—through their many
    dead ends and false leads. Navigate the evidence and
    see why the case has never been closed.
  start: [canonical_five, whitechapel, ripper_letters]

nodes:
  canonical_five:
    title: "The Canonical Five (1888)"
    short_title: "Murders"
    emoji: "🗡️"
    content: |
      Between August 31 and November 9, 1888, five
      women are murdered in Whitechapel: Mary Ann
      Nichols, Annie Chapman, Elizabeth Stride,
      Catherine Eddowes, and Mary Jane Kelly.

      The killings escalate in brutality. The victims
      share a pattern—all are impoverished women in
      their 40s (except Kelly, 25), all killed in the
      early morning hours, all found with specific
      mutilations suggesting anatomical knowledge.

      Scotland Yard assigns Inspector Frederick
      Abberline to lead the investigation.
    parents: []

  whitechapel:
    title: "Victorian Whitechapel"
    short_title: "Whitechapel"
    emoji: "🏚️"
    content: |
      ### Why This Case Was Almost Unsolvable

      Whitechapel in 1888 is a labyrinth: 233 common
      lodging houses, 62 brothels, and thousands of
      people sleeping rough every night. The streets
      are unlit, overcrowded, and interconnected by
      narrow alleys and courtyards.

      There are no fingerprints (the technique won't
      be used in England until 1902), no blood typing,
      no CCTV. Police don't even carry cameras.
      Detection relies entirely on witnesses and
      informants—in a neighborhood that deeply
      distrusts the police.
    parents: []

  ripper_letters:
    title: "The Ripper Letters"
    short_title: "Letters"
    emoji: "✉️"
    content: |
      Over 700 letters are sent to police and
      newspapers claiming to be from the killer.
      Most are obvious hoaxes. Three stand out:

      1. **"Dear Boss"** (Sept 27) — coins the
         name "Jack the Ripper"
      2. **"Saucy Jacky"** postcard (Oct 1)
      3. **"From Hell"** letter (Oct 16) — sent
         to vigilance committee chairman George
         Lusk with half a preserved human kidney

      Are any of them real? The answer determines
      entire lines of investigation.
    parents: []

  autopsy_evidence:
    title: "The Autopsy Evidence"
    short_title: "Autopsies"
    emoji: "🔬"
    content: |
      The post-mortems reveal a pattern: throats cut
      left to right (suggesting a right-handed killer),
      abdominal mutilations, and in some cases organs
      **removed with apparent anatomical precision**.

      Dr. Thomas Bond and Dr. George Phillips disagree
      sharply. Phillips believes the killer has
      **surgical skill**. Bond insists the cuts show
      no particular expertise—just "the hand of
      someone accustomed to using a knife."

      This single disagreement splits the investigation
      into two incompatible suspect profiles.
    parents: [canonical_five]

  surgical_skill:
    title: "The Surgical Skill Debate"
    short_title: "Surgeon?"
    emoji: "⚕️"
    content: |
      If Phillips is right and the killer has medical
      training, the suspect pool narrows dramatically.
      Police begin investigating **doctors, surgeons,
      and medical students** in the Whitechapel area.

      But if Bond is right, the killer could be a
      **butcher, slaughterman, or hunter**—trades
      common in the East End. The suspect pool
      expands to thousands.

      Both lines are pursued simultaneously,
      spreading the investigation thin.
    parents: [autopsy_evidence]

  witness_sightings:
    title: "Contradictory Witnesses"
    short_title: "Witnesses"
    emoji: "👁️"
    content: |
      Multiple witnesses report seeing the victims
      with men shortly before the murders. The
      descriptions are maddeningly contradictory:

      - **Elizabeth Long** (Chapman): "Over 40,
        dark complexion, shabby-genteel, foreign"
      - **Israel Schwartz** (Stride): "About 30,
        5'5", fair complexion, broad shoulders"
      - **Joseph Lawende** (Eddowes): "About 30,
        5'7", fair, medium build, sailor appearance"

      Are these the same man? Are any of them the
      killer? Or did the witnesses see someone else
      entirely?
    parents: [canonical_five, whitechapel]

  dear_boss_hoax:
    title: "\\"Dear Boss\\" — Probably a Hoax"
    short_title: "Hoax?"
    emoji: "❌"
    content: |
      ### Dead End

      In 1913, journalist Tom Bulling is identified
      as the likely author of the "Dear Boss" letter
      and the "Saucy Jacky" postcard. Chief Inspector
      John Littlechild later confirms police suspicion
      that both were written by a journalist to
      generate stories.

      The name "Jack the Ripper"—the most famous
      criminal alias in history—was almost certainly
      invented by a newspaperman. The real killer
      never named himself.
    parents: [ripper_letters]

  from_hell_kidney:
    title: "The \\"From Hell\\" Kidney"
    short_title: "Kidney"
    emoji: "📦"
    content: |
      The kidney sent with the "From Hell" letter
      is examined by Dr. Thomas Openshaw at the
      London Hospital. He declares it a **left human
      kidney, preserved in spirits**, with signs of
      Bright's disease—consistent with Catherine
      Eddowes' medical history.

      But other doctors disagree. Any medical student
      could obtain a kidney. The preservation method
      is common. And the letter itself is written in
      a deliberately crude hand that could be
      disguised. It remains the most debated piece
      of evidence in the case.
    parents: [ripper_letters, autopsy_evidence]

  suspect_druitt:
    title: "Montague Druitt — DEAD END"
    short_title: "Druitt"
    emoji: "❌"
    content: |
      ### Dead End: The Gentleman Cricketer

      Montague John Druitt, a barrister and school
      teacher, is found drowned in the Thames on
      December 31, 1888—seven weeks after the last
      murder. Assistant Chief Constable Melville
      Macnaghten names him as a prime suspect.

      **Why it fails:** Druitt was in Dorset playing
      cricket on the day of at least one murder. He
      had no medical training. Macnaghten's memo
      contains basic factual errors (calling him a
      doctor). The case against him rests entirely
      on the coincidence of his death following
      the murders.
    parents: [surgical_skill, witness_sightings]

  suspect_kosminski:
    title: "Aaron Kosminski — Inconclusive"
    short_title: "Kosminski"
    emoji: "❓"
    content: |
      ### Partial Dead End

      Aaron Kosminski, a Polish Jewish immigrant
      and hairdresser, is named by Macnaghten and
      later by Assistant Commissioner Robert
      Anderson, who claims a witness **positively
      identified** Kosminski but refused to testify
      against a fellow Jew.

      In 2014, Russell Edwards claims mitochondrial
      DNA from a shawl links Kosminski to Catherine
      Eddowes. But the shawl's chain of custody is
      unverified, mtDNA is shared by millions, and
      the analysis has been criticized for
      **contamination and methodological errors**.

      Neither proven nor fully eliminated.
    parents: [witness_sightings, surgical_skill]

  suspect_tumblety:
    title: "Francis Tumblety — DEAD END"
    short_title: "Tumblety"
    emoji: "❌"
    content: |
      ### Dead End: The Quack Doctor

      Francis Tumblety, an Irish-American "herb
      doctor" and known misogynist, was arrested
      in London on November 7, 1888 on charges
      of gross indecency. He posted bail and
      **fled to France, then New York**. Scotland
      Yard sent Inspector Andrews to track him.

      **Why it fails:** Tumblety was 56, tall, and
      flamboyant—matching none of the witness
      descriptions. His arrest was for an unrelated
      crime. And a "herb doctor" is not a surgeon.
      The pursuit fizzled out in America.
    parents: [surgical_skill, from_hell_kidney]

  suspect_prince:
    title: "Prince Albert Victor — DEAD END"
    short_title: "Prince"
    emoji: "❌"
    content: |
      ### Dead End: The Royal Conspiracy

      The most sensational theory: Queen Victoria's
      grandson, Prince Albert Victor ("Eddy"),
      committed the murders—or they were committed
      to cover up his secret Catholic marriage to
      a shopgirl. Physician Sir William Gull
      supposedly carried out the killings with
      Masonic ritual significance.

      **Why it fails:** Prince Eddy's whereabouts
      are documented in the Court Circular for
      every murder date. He was at Balmoral,
      Sandringham, or military events—never in
      London. The theory, popularized in Stephen
      Knight's 1976 book, has been thoroughly
      debunked by royal records.
    parents: [witness_sightings, from_hell_kidney]

  suspect_jill:
    title: "\\"Jill the Ripper\\" — DEAD END"
    short_title: "Jill?"
    emoji: "❌"
    content: |
      ### Dead End: The Female Killer Theory

      Inspector Abberline himself briefly considered
      the possibility that the killer was a **woman**
      —a midwife whose bloody clothing wouldn't
      attract suspicion.

      **Why it fails:** Every witness who saw the
      victims with a companion described a **man**.
      The physical violence required significant
      upper body strength. No female suspects were
      ever seriously investigated. The theory
      explains the lack of blood-stained men
      fleeing the scenes, but nothing else.
    parents: [witness_sightings, whitechapel]

  geographic_profiling:
    title: "Geographic Profiling (Modern)"
    short_title: "Profiling"
    emoji: "🗺️"
    content: |
      In the 2000s, researchers apply modern
      **geographic profiling** to the murder sites.
      The technique analyzes spatial patterns to
      estimate where a serial offender likely lives.

      The result: the killer almost certainly lived
      within a few hundred meters of **Flower and
      Dean Street**—the heart of Whitechapel's
      lodging house district.

      This is consistent with Kosminski (who lived
      nearby) and inconsistent with Druitt, Tumblety,
      and Prince Albert Victor.
    parents: [canonical_five, suspect_kosminski]

  warren_commission:
    title: "Why It Was Never Solved"
    short_title: "Unsolved"
    emoji: "🔒"
    content: |
      The investigation collapsed under its own
      weight. Key failures:

      - **Commissioner Charles Warren** resigned
        during the murders over political disputes
      - **Police rivalry**: City Police and Met
        Police investigated the Eddowes and Stride
        murders separately, barely sharing evidence
      - **Media circus**: 700+ hoax letters consumed
        investigative resources
      - **No forensic tools**: Fingerprinting,
        blood typing, and crime scene photography
        were years away

      The files were sealed, partially destroyed,
      and what survives is incomplete. Key witness
      statements are missing entirely.
    parents: [suspect_druitt, suspect_tumblety, suspect_prince, dear_boss_hoax]

  still_unsolved:
    title: "136 Years and Counting"
    short_title: "Cold Case"
    emoji: "🧊"
    content: |
      Over a century of investigation has produced
      **more than 100 named suspects** and thousands
      of books, papers, and documentaries. The field
      has its own name: **Ripperology**.

      The honest answer: we will probably never know.
      The forensic evidence is too degraded, the
      witness testimony too contradictory, the
      documentary record too incomplete.

      Every thread in this graph leads to a dead end,
      an inconclusive result, or a debunked theory.
      That's not a failure of the graph—it's an
      accurate representation of the case. Sometimes
      the evidence doesn't converge. Sometimes
      there is no satisfying final node.
    parents: [warren_commission, suspect_kosminski, geographic_profiling, suspect_jill]
`,$0=`meta:
  title: "World War II (1939-1945)"
  description: |
    A comprehensive timeline of the deadliest conflict in human history. 
    Tracing the roots from the end of WWI, the rise of totalitarian regimes, 
    major theaters of war, to the dawn of the nuclear age and the Cold War.
  start: [treaty_versailles, great_depression, japanese_militarism]

nodes:
  treaty_versailles:
    title: "Treaty of Versailles (1919)"
    short_title: "Versailles"
    emoji: "📜"
    content: |
      ![Treaty of Versailles](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Treaty_of_Versailles%2C_English_version.jpg/400px-Treaty_of_Versailles%2C_English_version.jpg)

      The peace treaty that ended World War I. It imposed heavy reparations, territorial losses, and the "War Guilt Clause" on Germany, creating deep resentment.
    parents: []

  weimar_republic:
    title: "The Weimar Republic (1919-1933)"
    short_title: "Weimar"
    emoji: "🇩🇪"
    content: "Germany's democratic government established after WWI. Burdened by Versailles reparations and political extremism, it struggled to maintain stability."
    parents: [treaty_versailles]

  great_depression:
    title: "The Great Depression (1929)"
    short_title: "Depression"
    emoji: "📉"
    content: |
      ![Migrant Mother](https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Lange-MigrantMother02.jpg/400px-Lange-MigrantMother02.jpg)
      
      A severe worldwide economic depression. The financial turmoil destabilized governments globally and made extremist ideologies more appealing.
    parents: []

  rise_of_mussolini:
    title: "Rise of Benito Mussolini"
    short_title: "Mussolini"
    emoji: "🦅"
    content: |
      ![Benito Mussolini](https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Benito_Mussolini_Color.jpg/400px-Benito_Mussolini_Color.jpg)
      
      Mussolini founded the National Fascist Party in Italy, promising to restore Roman glory and exploiting post-WWI unrest.
    parents: [treaty_versailles]

  march_on_rome:
    title: "March on Rome (1922)"
    short_title: "Rome"
    emoji: "👞"
    content: "Fascist Blackshirts marched on Rome, intimidating King Victor Emmanuel III into appointing Mussolini as Prime Minister."
    parents: [rise_of_mussolini]

  rise_of_hitler:
    title: "Rise of Adolf Hitler"
    short_title: "Hitler"
    emoji: "卐"
    content: "An Austrian-born veteran of WWI who transformed the German Workers' Party into the Nazi Party."
    parents: [weimar_republic]

  beer_hall_putsch:
    title: "Beer Hall Putsch (1923)"
    short_title: "Putsch"
    emoji: "🍺"
    content: "Hitler's failed attempt to seize power in Munich. While in jail, he dictated 'Mein Kampf'."
    parents: [rise_of_hitler]

  hitler_chancellor:
    title: "Hitler Becomes Chancellor (1933)"
    short_title: "Chancellor"
    emoji: "👔"
    content: |
      ![Adolf Hitler](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Hitler_portrait_crop.jpg/400px-Hitler_portrait_crop.jpg)
      
      Amidst economic crisis, the Nazi Party grew. Conservative elites convinced President Hindenburg to appoint Hitler.
    parents: [beer_hall_putsch, great_depression]

  reichstag_fire:
    title: "Reichstag Fire (1933)"
    short_title: "Reichstag"
    emoji: "🔥"
    content: "The German parliament building was set ablaze. Hitler blamed communists to suspend civil liberties."
    parents: [hitler_chancellor]

  enabling_act:
    title: "The Enabling Act (1933)"
    short_title: "Dictatorship"
    emoji: "📜"
    content: "Formalized Hitler's absolute dictatorial power, allowing laws to bypass the Reichstag."
    parents: [reichstag_fire]

  night_of_long_knives:
    title: "Night of the Long Knives (1934)"
    short_title: "Purge"
    emoji: "🗡️"
    content: "Hitler purged the SA (paramilitary) leadership to consolidate power and win the army's support."
    parents: [enabling_act]

  nuremberg_laws:
    title: "Nuremberg Laws (1935)"
    short_title: "Racist Laws"
    emoji: "⚖️"
    content: "Antisemitic laws enacted in Nazi Germany, stripping Jews of citizenship and forbidding intermarriage."
    parents: [enabling_act]

  kristallnacht:
    title: "Kristallnacht (1938)"
    short_title: "Broken Glass"
    emoji: "🪟"
    content: "A violent pogrom against Jews across Germany, resulting in destroyed businesses, burned synagogues, and mass arrests."
    parents: [nuremberg_laws]

  remilitarization_rhineland:
    title: "Remilitarization of the Rhineland (1936)"
    short_title: "Rhineland"
    emoji: "🪖"
    content: "Violating the Treaty of Versailles, Hitler ordered German troops into the demilitarized Rhineland."
    parents: [enabling_act]

  spanish_civil_war:
    title: "Spanish Civil War (1936-1939)"
    short_title: "Spain"
    emoji: "🇪🇸"
    content: |
      ![Guernica Ruins](https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Ruins_of_Guernica_%281937%29.jpg/400px-Ruins_of_Guernica_%281937%29.jpg)
      
      A proxy war where Nazi Germany and Fascist Italy supported Franco's Nationalists.
    parents: [march_on_rome, remilitarization_rhineland]

  japanese_militarism:
    title: "Rise of Japanese Militarism"
    short_title: "Japan"
    emoji: "🇯🇵"
    content: |
      ![Japanese troops in Manchuria](https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Japanese_troops_entering_Mukden.jpg/400px-Japanese_troops_entering_Mukden.jpg)
      
      Military leaders pushed for imperial expansion to secure raw materials and 'living space' in Asia.
    parents: [great_depression]

  invasion_of_manchuria:
    title: "Invasion of Manchuria (1931)"
    short_title: "Manchuria"
    emoji: "🗺️"
    content: "Japan invaded Manchuria, establishing the puppet state of Manchukuo. The League of Nations failed to act."
    parents: [japanese_militarism]

  second_sino_japanese_war:
    title: "Second Sino-Japanese War (1937)"
    short_title: "Sino-Japanese"
    emoji: "⚔️"
    content: "Full-scale war between China and Japan, becoming a major Asian theater of WWII."
    parents: [invasion_of_manchuria]

  nanjing_massacre:
    title: "Nanjing Massacre (1937)"
    short_title: "Nanjing"
    emoji: "🩸"
    content: "Mass murder and rape committed by Imperial Japanese troops against the residents of Nanjing."
    parents: [second_sino_japanese_war]

  anschluss:
    title: "Anschluss (1938)"
    short_title: "Anschluss"
    emoji: "🇦🇹"
    content: "The annexation of Austria into Nazi Germany, met with appeasement from the international community."
    parents: [remilitarization_rhineland]

  munich_agreement:
    title: "Munich Agreement (1938)"
    short_title: "Munich"
    emoji: "🤝"
    content: "Britain and France let Germany annex the Sudetenland in exchange for a promise of peace."
    parents: [anschluss]

  invasion_of_czechoslovakia:
    title: "Invasion of Czechoslovakia (1939)"
    short_title: "Czech Fall"
    emoji: "🇨🇿"
    content: "Hitler violated the Munich Agreement by occupying the rest of Czechoslovakia."
    parents: [munich_agreement]

  molotov_ribbentrop_pact:
    title: "Molotov-Ribbentrop Pact (1939)"
    short_title: "Nazi-Soviet Pact"
    emoji: "📜"
    content: "A non-aggression pact between Germany and the USSR, secretly dividing Eastern Europe."
    parents: [invasion_of_czechoslovakia]

  invasion_of_poland:
    title: "Invasion of Poland (1939)"
    short_title: "Poland"
    emoji: "🇵🇱"
    content: |
      ![German forces border barrier](https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Polish_border_barrier_1939.jpg/400px-Polish_border_barrier_1939.jpg)
      
      September 1, 1939: Germany invaded Poland using Blitzkrieg tactics. The official start of WWII.
    parents: [molotov_ribbentrop_pact]

  uk_france_declare_war:
    title: "UK and France Declare War"
    short_title: "War Declared"
    emoji: "🇬🇧"
    content: "Ending appeasement, Britain and France declared war on Germany on September 3, 1939."
    parents: [invasion_of_poland]

  winter_war:
    title: "The Winter War (1939-1940)"
    short_title: "Winter War"
    emoji: "🇫🇮"
    content: "The USSR invaded Finland. The fierce Finnish resistance exposed Red Army weaknesses."
    parents: [molotov_ribbentrop_pact]

  phoney_war:
    title: "The Phoney War (1939-1940)"
    short_title: "Phoney War"
    emoji: "⏳"
    content: "An eight-month period with little major ground fighting on the Western Front."
    parents: [uk_france_declare_war]

  invasion_denmark_norway:
    title: "Invasion of Denmark & Norway"
    short_title: "Scandinavia"
    emoji: "🇩🇰"
    content: "Germany invaded to secure iron ore routes and naval bases."
    parents: [phoney_war]

  maginot_line:
    title: "The Maginot Line"
    short_title: "Maginot"
    emoji: "🧱"
    content: "A massive line of concrete fortifications built by France. Germany simply bypassed it through the Ardennes."
    parents: [phoney_war]

  invasion_france_low_countries:
    title: "Invasion of France & Low Countries"
    short_title: "Fall Gelb"
    emoji: "🇫🇷"
    content: "May 1940: Germany launched a Blitzkrieg through the Ardennes, catching Allied forces off guard."
    parents: [maginot_line]

  dunkirk_evacuation:
    title: "Evacuation of Dunkirk"
    short_title: "Dunkirk"
    emoji: "🚢"
    content: "Operation Dynamo rescued over 330,000 trapped Allied soldiers from the beaches of Dunkirk."
    parents: [invasion_france_low_countries]

  fall_of_france:
    title: "Fall of France (1940)"
    short_title: "France Falls"
    emoji: "🏳️"
    content: |
      ![Hitler in Paris](https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Adolf_Hitler_in_Paris_1940.jpg/400px-Adolf_Hitler_in_Paris_1940.jpg)
      
      France surrendered on June 22, 1940, leaving Britain alone against Nazi Germany.
    parents: [dunkirk_evacuation]

  vichy_france:
    title: "Vichy France"
    short_title: "Vichy"
    emoji: "🤝"
    content: "A collaborationist French state established under Marshal Pétain."
    parents: [fall_of_france]

  battle_of_britain:
    title: "Battle of Britain (1940)"
    short_title: "Britain"
    emoji: "🛩️"
    content: "The RAF defended the UK against the Luftwaffe. The first major campaign fought entirely by air."
    parents: [fall_of_france]

  the_blitz:
    title: "The Blitz"
    short_title: "Blitz"
    emoji: "💥"
    content: "A German bombing campaign against the UK aiming to break civilian morale."
    parents: [battle_of_britain]

  enigma_code:
    title: "Cracking the Enigma"
    short_title: "Enigma"
    emoji: "📠"
    content: "Allied codebreakers at Bletchley Park, notably Alan Turing, cracked German ciphers, providing vital intelligence."
    parents: [battle_of_britain]

  tripartite_pact:
    title: "Tripartite Pact (1940)"
    short_title: "Axis Powers"
    emoji: "🤝"
    content: "Germany, Italy, and Japan formed the Axis Powers."
    parents: [the_blitz, second_sino_japanese_war]

  north_african_campaign:
    title: "North African Campaign"
    short_title: "North Africa"
    emoji: "🏜️"
    content: "Battles in the desert between Allied forces and Rommel's Afrika Korps."
    parents: [fall_of_france, tripartite_pact]

  invasion_balkans:
    title: "Invasion of the Balkans (1941)"
    short_title: "Balkans"
    emoji: "🇬🇷"
    content: "Germany invaded Yugoslavia and Greece to secure its southern flank before attacking the USSR."
    parents: [tripartite_pact]

  operation_barbarossa:
    title: "Operation Barbarossa (1941)"
    short_title: "Barbarossa"
    emoji: "⚔️"
    content: "June 1941: The massive German invasion of the Soviet Union, breaking the non-aggression pact."
    parents: [invasion_balkans, molotov_ribbentrop_pact]

  battle_of_kiev:
    title: "Battle of Kiev (1941)"
    short_title: "Kiev"
    emoji: "🇺🇦"
    content: "A massive encirclement of Soviet troops, resulting in over 600,000 casualties and POWs."
    parents: [operation_barbarossa]

  siege_of_leningrad:
    title: "Siege of Leningrad"
    short_title: "Leningrad"
    emoji: "❄️"
    content: "An 872-day blockade of the city. Over a million civilians died of starvation and bombardment."
    parents: [operation_barbarossa]

  battle_of_moscow:
    title: "Battle of Moscow (1941-1942)"
    short_title: "Moscow"
    emoji: "🏰"
    content: |
      ![Soviet troops near Moscow](https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Soviet_offensive_Moscow_December_1941.jpg/400px-Soviet_offensive_Moscow_December_1941.jpg)
      
      The Soviet defense halted the German advance, marking Hitler's first major strategic defeat.
    parents: [battle_of_kiev]

  holocaust_begins:
    title: "The Holocaust"
    short_title: "Holocaust"
    emoji: "✡️"
    content: "The systematic, industrial-scale genocide of 6 million Jews and millions of others by the Nazi regime."
    parents: [operation_barbarossa, kristallnacht]

  warsaw_ghetto_uprising:
    title: "Warsaw Ghetto Uprising (1943)"
    short_title: "Ghetto Uprising"
    emoji: "🔥"
    content: "Jewish resistance in the Warsaw Ghetto fought against deportation to extermination camps."
    parents: [holocaust_begins]

  lend_lease:
    title: "Lend-Lease Act"
    short_title: "Lend-Lease"
    emoji: "📦"
    content: "The US supplied food, oil, and materiel to the Allies before and during its formal entry into the war."
    parents: [the_blitz]

  pearl_harbor:
    title: "Attack on Pearl Harbor (1941)"
    short_title: "Pearl Harbor"
    emoji: "💣"
    content: |
      ![USS Shaw exploding](https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/USS_Shaw_explodes_in_Pearl_Harbor.jpg/400px-USS_Shaw_explodes_in_Pearl_Harbor.jpg)
      
      A surprise military strike by Japan on the US naval base in Hawaii.
    parents: [japanese_militarism, lend_lease]

  us_enters_war:
    title: "United States Enters WWII"
    short_title: "US Entry"
    emoji: "🇺🇸"
    content: "Following Pearl Harbor, the US declared war on Japan. Germany then declared war on the US."
    parents: [pearl_harbor]

  fall_of_philippines:
    title: "Fall of the Philippines"
    short_title: "Philippines"
    emoji: "🇵🇭"
    content: "Japan rapidly captured the US-held Philippines."
    parents: [pearl_harbor]

  bataan_death_march:
    title: "Bataan Death March"
    short_title: "Bataan"
    emoji: "💀"
    content: "The brutal forcible transfer of US and Filipino POWs by the Japanese Army."
    parents: [fall_of_philippines]

  doolittle_raid:
    title: "Doolittle Raid (1942)"
    short_title: "Doolittle"
    emoji: "🛩️"
    content: "The first US air raid to strike the Japanese home islands, providing a major morale boost."
    parents: [us_enters_war]

  battle_of_coral_sea:
    title: "Battle of the Coral Sea (1942)"
    short_title: "Coral Sea"
    emoji: "🌊"
    content: "The first naval battle where aircraft carriers engaged each other without ships directly firing."
    parents: [us_enters_war]

  battle_of_midway:
    title: "Battle of Midway (1942)"
    short_title: "Midway"
    emoji: "🎯"
    content: "US codebreakers intercepted Japanese plans, allowing the US Navy to sink four aircraft carriers. The turning point of the Pacific War."
    parents: [battle_of_coral_sea, doolittle_raid]

  battle_of_guadalcanal:
    title: "Guadalcanal Campaign (1942-43)"
    short_title: "Guadalcanal"
    emoji: "🌴"
    content: "Six months of bitter jungle warfare marking the US transition to the strategic offensive in the Pacific."
    parents: [battle_of_midway]

  battle_of_stalingrad:
    title: "Battle of Stalingrad (1942-43)"
    short_title: "Stalingrad"
    emoji: "🏭"
    content: |
      ![Stalingrad ruins](https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/RIA_Novosti_archive_image_124118_S._Strunnikov.jpg/400px-RIA_Novosti_archive_image_124118_S._Strunnikov.jpg)
      
      The bloodiest battle in warfare history. The destruction of the German 6th Army was the turning point on the Eastern Front.
    parents: [battle_of_moscow]

  battle_of_el_alamein:
    title: "Battle of El Alamein (1942)"
    short_title: "El Alamein"
    emoji: "🐪"
    content: "British forces decisively defeated Rommel in Egypt, a turning point in North Africa."
    parents: [north_african_campaign]

  operation_torch:
    title: "Operation Torch (1942)"
    short_title: "Torch"
    emoji: "🔥"
    content: "The Anglo-American invasion of French North Africa to clear Axis forces."
    parents: [battle_of_el_alamein, us_enters_war]

  casablanca_conference:
    title: "Casablanca Conference (1943)"
    short_title: "Casablanca"
    emoji: "🤝"
    content: "Allies agreed to demand 'unconditional surrender' from the Axis powers."
    parents: [operation_torch]

  invasion_of_sicily:
    title: "Invasion of Sicily (1943)"
    short_title: "Sicily"
    emoji: "🍋"
    content: "Initiated the Italian Campaign, taking Sicily from Axis control."
    parents: [operation_torch]

  fall_of_mussolini:
    title: "Fall of Mussolini"
    short_title: "Mussolini Falls"
    emoji: "📉"
    content: "Mussolini was deposed and Italy signed an armistice with the Allies."
    parents: [invasion_of_sicily]

  battle_of_kursk:
    title: "Battle of Kursk (1943)"
    short_title: "Kursk"
    emoji: "🚜"
    content: "The largest tank battle in history. The Soviets halted the German offensive and seized the initiative."
    parents: [battle_of_stalingrad]

  tehran_conference:
    title: "Tehran Conference (1943)"
    short_title: "Tehran"
    emoji: "🇮🇷"
    content: "The 'Big Three' coordinated strategy, committing to open a second front in Western Europe."
    parents: [casablanca_conference, battle_of_kursk]

  battle_of_the_atlantic:
    title: "Battle of the Atlantic"
    short_title: "Atlantic"
    emoji: "⛴️"
    content: "The long fight to keep supply lines to Britain open against German U-boats."
    parents: [us_enters_war, enigma_code]

  strategic_bombing:
    title: "Strategic Bombing Campaign"
    short_title: "Bombing"
    emoji: "✈️"
    content: "Massive Allied air raids on German cities and industry to destroy the war economy."
    parents: [battle_of_the_atlantic]

  d_day:
    title: "D-Day: Invasion of Normandy (1944)"
    short_title: "D-Day"
    emoji: "🏖️"
    content: |
      ![Into the Jaws of Death](https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Into_the_Jaws_of_Death_23-0455M_edit.jpg/400px-Into_the_Jaws_of_Death_23-0455M_edit.jpg)
      
      June 6, 1944: Operation Overlord. The largest amphibious invasion in history opened the Western Front.
    parents: [tehran_conference, battle_of_the_atlantic]

  operation_valkyrie:
    title: "July 20 Plot (1944)"
    short_title: "Valkyrie"
    emoji: "💣"
    content: "A failed assassination attempt on Hitler by German military officers."
    parents: [d_day, battle_of_kursk]

  operation_bagration:
    title: "Operation Bagration (1944)"
    short_title: "Bagration"
    emoji: "🗺️"
    content: "A massive Soviet offensive that annihilated the German Army Group Centre."
    parents: [battle_of_kursk, d_day]

  warsaw_uprising:
    title: "Warsaw Uprising (1944)"
    short_title: "Warsaw"
    emoji: "🇵🇱"
    content: "Polish resistance fought to liberate Warsaw. Soviet forces halted, allowing the Germans to crush it."
    parents: [operation_bagration]

  liberation_of_paris:
    title: "Liberation of Paris (1944)"
    short_title: "Paris Freed"
    emoji: "🇫🇷"
    content: "Allied forces and the French Resistance liberated Paris."
    parents: [d_day]

  operation_market_garden:
    title: "Operation Market Garden (1944)"
    short_title: "Market Garden"
    emoji: "🪂"
    content: "An ambitious but ultimately failed Allied airborne operation in the Netherlands."
    parents: [liberation_of_paris]

  battle_of_the_bulge:
    title: "Battle of the Bulge (1944-45)"
    short_title: "The Bulge"
    emoji: "🌲"
    content: "Hitler's last major offensive on the Western Front, catching the Allies by surprise but failing."
    parents: [operation_market_garden]

  yalta_conference:
    title: "Yalta Conference (1945)"
    short_title: "Yalta"
    emoji: "🤝"
    content: "The Big Three discussed postwar reorganization, laying groundwork for the Cold War."
    parents: [battle_of_the_bulge, operation_bagration]

  firebombing_tokyo:
    title: "Firebombing of Tokyo (1945)"
    short_title: "Tokyo Bombing"
    emoji: "🔥"
    content: "Devastating US B-29 incendiary raids on Japanese cities, causing massive casualties."
    parents: [battle_of_guadalcanal]

  battle_of_iwo_jima:
    title: "Battle of Iwo Jima (1945)"
    short_title: "Iwo Jima"
    emoji: "🌋"
    content: |
      ![Raising the Flag](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/WW2_Iwo_Jima_flag_raising.jpg/400px-WW2_Iwo_Jima_flag_raising.jpg)
      
      Fierce battle to capture the island for use by B-29 bombers.
    parents: [firebombing_tokyo]

  battle_of_okinawa:
    title: "Battle of Okinawa (1945)"
    short_title: "Okinawa"
    emoji: "🏝️"
    content: "The largest amphibious assault in the Pacific Theater, with unprecedented casualties."
    parents: [battle_of_iwo_jima]

  kamikaze:
    title: "Kamikaze Attacks"
    short_title: "Kamikaze"
    emoji: "🛩️"
    content: "Desperate Japanese suicide plane attacks against Allied naval vessels."
    parents: [battle_of_okinawa]

  battle_of_berlin:
    title: "Battle of Berlin (1945)"
    short_title: "Berlin"
    emoji: "🚩"
    content: |
      ![Raising flag over Reichstag](https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Reichstag_flag_original.jpg/400px-Reichstag_flag_original.jpg)
      
      The Red Army captured the German capital in vicious urban combat.
    parents: [yalta_conference]

  hitler_suicide:
    title: "Death of Adolf Hitler"
    short_title: "Hitler's Death"
    emoji: "💀"
    content: "Hitler committed suicide in the Führerbunker as Soviet troops closed in."
    parents: [battle_of_berlin]

  ve_day:
    title: "Victory in Europe Day (1945)"
    short_title: "V-E Day"
    emoji: "✌️"
    content: "May 8, 1945: The formal acceptance of Nazi Germany's unconditional surrender."
    parents: [hitler_suicide]

  potsdam_conference:
    title: "Potsdam Conference (1945)"
    short_title: "Potsdam"
    emoji: "🇩🇪"
    content: "Finalized the division of Germany and issued an ultimatum to Japan."
    parents: [ve_day]

  manhattan_project:
    title: "The Manhattan Project"
    short_title: "Manhattan"
    emoji: "🧪"
    content: "A secret US project that produced the first nuclear weapons."
    parents: [us_enters_war]

  atomic_bombings:
    title: "Atomic Bombings (1945)"
    short_title: "Atomic Bombs"
    emoji: "🍄"
    content: |
      ![Atomic cloud over Nagasaki](https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Atomic_bombing_of_Japan.jpg/400px-Atomic_bombing_of_Japan.jpg)
      
      The US dropped atomic bombs on Hiroshima and Nagasaki, causing unprecedented destruction.
    parents: [manhattan_project, potsdam_conference, kamikaze]

  soviet_invasion_manchuria:
    title: "Soviet Invasion of Manchuria"
    short_title: "Manchuria"
    emoji: "🐻"
    content: "The USSR declared war on Japan and rapidly overwhelmed forces in Manchuria."
    parents: [potsdam_conference]

  vj_day:
    title: "Victory over Japan Day (1945)"
    short_title: "V-J Day"
    emoji: "🎊"
    content: |
      ![V-J Day in Times Square](https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/V-J_Day_in_Times_Square_%28crop%29.jpg/400px-V-J_Day_in_Times_Square_%28crop%29.jpg)
      
      September 2, 1945: Japan formally surrendered, ending World War II.
    parents: [atomic_bombings, soviet_invasion_manchuria]

  united_nations_formed:
    title: "United Nations Formed (1945)"
    short_title: "UN"
    emoji: "🇺🇳"
    content: "Created to replace the League of Nations and maintain international peace."
    parents: [vj_day]

  nuremberg_trials:
    title: "Nuremberg Trials"
    short_title: "Nuremberg"
    emoji: "⚖️"
    content: "Military tribunals to prosecute prominent leaders of Nazi Germany."
    parents: [ve_day, united_nations_formed]

  division_of_germany:
    title: "Division of Germany"
    short_title: "Divided Germany"
    emoji: "🧱"
    content: "Germany and Berlin were divided into Allied occupation zones, splitting the country."
    parents: [potsdam_conference]

  marshall_plan:
    title: "Marshall Plan"
    short_title: "Marshall Plan"
    emoji: "💵"
    content: "US initiative to provide massive economic aid to rebuild Western European economies."
    parents: [division_of_germany]

  cold_war_begins:
    title: "The Cold War Begins"
    short_title: "Cold War"
    emoji: "🧊"
    content: "Tension between the US and USSR emerged, defining geopolitics for a half-century."
    parents: [united_nations_formed, marshall_plan]`,ev=`meta:
  title: "The Evolution of Language Models"
  description: |
    From early statistical methods and recurrent networks to the 
    breakthrough of Transformers and the rise of Generative AI. 
    This graph traces the research milestones that led to GPT-4 
    and explores the future of Artificial General Intelligence.
  start: [turing_test, shannon_entropy, ngram_models]

nodes:
  # --- THE FOUNDATIONS ---
  turing_test:
    title: "The Turing Test (1950)"
    short_title: "Turing Test"
    emoji: "🤖"
    content: |
      ![Alan Turing](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Alan_Turing_Aged_16.jpg/400px-Alan_Turing_Aged_16.jpg)
      
      ### The Imitation Game
      In 1950, **Alan Turing** published "Computing Machinery and Intelligence," a paper that would define the goal of AI for the next 70 years. He replaced the question "Can machines think?" with a practical test:
      
      > "A machine could be said to 'think' if it could fool an interrogator into believing it was human through a text-based conversation."
      
      This shifted the focus from the *internal mystery* of consciousness to the *external behavior* of language, setting the stage for all future NLP research.
    parents: []

  shannon_entropy:
    title: "Shannon's Information Theory (1948)"
    short_title: "Information Theory"
    emoji: "📊"
    content: |
      ### The Mathematics of Language
      Claude Shannon, working at Bell Labs, published "A Mathematical Theory of Communication." This wasn't just about radio wires; it was the birth of **Information Theory**.
      
      Shannon introduced the concept of **Entropy**—a measure of uncertainty. In language, he realized that words are predictable:
      - If I say "The cat sat on the...", you already know the next word is likely "mat".
      - He used this to calculate the "information content" of English, providing the mathematical foundation for predicting sequences.
    parents: []

  ngram_models:
    title: "N-gram Models"
    short_title: "N-grams"
    emoji: "🔢"
    content: |
      ### Probabilistic Counting
      Before deep learning, we used **N-grams**. These are simple statistical models that look at the last *n* words to predict the next one.
      
      *   **Unigrams:** Look at words in isolation.
      - **Bigrams:** Look at pairs (e.g., "San" -> "Francisco").
      *   **Trigrams:** Look at triplets.
      
      **Limitations:** They have no "long-term memory." A trigram model doesn't know what happened four words ago, making them brittle and incapable of maintaining coherent logic over a paragraph.
    parents: [shannon_entropy]

  chomsky_hierarchy:
    title: "Chomsky Hierarchy (1956)"
    short_title: "Chomsky"
    emoji: "🗣️"
    content: |
      ### The Structure of Thought
      Noam Chomsky revolutionized linguistics by arguing that language is not just a sequence of sounds, but a **hierarchical structure** governed by deep rules.
      
      He defined four levels of grammars:
      1.  **Regular:** Simple patterns (Finite State Automata).
      2.  **Context-Free:** Nested structures (like computer code or math).
      3.  **Context-Sensitive:** Rules that depend on surrounding words.
      4.  **Recursively Enumerable:** The most complex (Turing complete).
      
      This proved that human language is far more complex than simple N-grams could ever capture, necessitating the move toward more sophisticated models.
    parents: []

  # --- EARLY NLP ---
  eliza:
    title: "ELIZA (1966)"
    short_title: "ELIZA"
    emoji: "👩‍⚕️"
    content: |
      ### The First Illusion of Intelligence
      Developed by Joseph Weizenbaum at MIT, **ELIZA** was the world's first famous chatbot. Its most famous script, *DOCTOR*, simulated a Rogerian psychotherapist.
      
      **How it worked:**
      - It used simple **pattern matching**. 
      - If you said "My mother hates me," ELIZA looked for the keyword "mother" and replied with "Tell me more about your family."
      
      Despite its simplicity, people became deeply emotionally involved with ELIZA, a phenomenon now called the **"ELIZA Effect"**—our tendency to anthropomorphize machines.
    parents: [turing_test]

  hidden_markov_models:
    title: "Hidden Markov Models (HMMs)"
    short_title: "HMMs"
    emoji: "🎲"
    content: |
      ### State-Based Prediction
      HMMs became the gold standard for speech recognition and early NLP from the 1980s until the mid-2010s.
      
      **The "Hidden" Part:**
      They assume that there is an underlying set of "hidden" states (like grammatical categories) that generate the "observed" symbols (words).
      
      *   Used by IBM for early machine translation.
      *   Powered the first versions of Siri and Dragon NaturallySpeaking.
      *   Eventually surpassed by neural networks because HMMs struggle with context.
    parents: [ngram_models]

  rule_based_systems:
    title: "Rule-Based NLP"
    short_title: "Rules"
    emoji: "📜"
    content: |
      ### Expert Systems
      During the "AI Summers" of the 70s and 80s, the dominant approach was **GOFAI** (Good Old Fashioned AI). Linguists would manually write thousands of "If-Then" rules.
      
      **The Problem:**
      - Language is too messy. 
      *   "Time flies like an arrow; fruit flies like a banana."
      - Rule-based systems couldn't handle the puns, slang, or evolution of language without being constantly updated by humans.
    parents: [chomsky_hierarchy]

  # --- THE NEURAL TURN ---
  perceptron:
    title: "The Perceptron (1958)"
    short_title: "Perceptron"
    emoji: "🧠"
    content: |
      ### The Biological Inspiration
      Frank Rosenblatt created the **Perceptron**, the first computer that could learn from data. It was modeled after a single biological neuron.
      
      > "The embryo of an electronic computer that [the Navy] expects will be able to walk, talk, see, write, reproduce itself and be conscious of its existence." — *The New York Times, 1958*
      
      Hyperbole aside, the Perceptron was limited to "linear" problems. It couldn't even learn the XOR function, leading to the first "AI Winter."
    parents: []

  backpropagation:
    title: "Backpropagation (1986)"
    short_title: "Backprop"
    emoji: "🔄"
    content: |
      ### Learning from Mistakes
      The breakthrough that ended the first AI Winter. While others had explored it, **Geoffrey Hinton** and his colleagues popularized **Backpropagation**.
      
      It's the engine of all modern AI:
      1.  The model makes a guess.
      2.  We calculate the **error** (loss).
      3.  We "backward" that error through the network to see which neurons were responsible.
      4.  We slightly adjust the weights to reduce the error next time.
      
      This allowed us to train "deep" networks with multiple layers.
    parents: [perceptron]

  rnns:
    title: "Recurrent Neural Networks (RNNs)"
    short_title: "RNNs"
    emoji: "🔁"
    content: |
      ### Networks with a Loop
      Standard neural networks process data in one "shot." But language is a sequence. **RNNs** introduced a loop that allowed information to persist.
      
      **The Core Idea:**
      The output for word *n* depends on the current input AND the hidden state from word *n-1*. 
      
      Suddenly, networks could "read" sentences word-by-word, maintaining a internal state of what they had seen so far.
    parents: [backpropagation]

  vanishing_gradient:
    title: "Vanishing Gradient Problem"
    short_title: "Vanishing Gradient"
    emoji: "📉"
    content: |
      ### Short-Term Memory
      As RNNs tried to process longer sentences, they hit a mathematical wall. 
      
      During training, the "learning signal" (gradient) is multiplied by itself over and over. If that signal is slightly less than 1, it rapidly shrinks to zero (vanishes).
      
      **Result:** The model would "forget" the beginning of a sentence by the time it reached the end. It couldn't link a subject at the start to a verb at the end.
    parents: [rnns]

  lstm:
    title: "Long Short-Term Memory (1997)"
    short_title: "LSTM"
    emoji: "💾"
    content: |
      ### The Silicon Memory Cell
      Sepp Hochreiter and Jürgen Schmidhuber solved the vanishing gradient problem with the **LSTM**. 
      
      Instead of a simple loop, they added a **"Constant Error Carousel"**—a memory cell protected by three gates:
      - **Forget Gate:** What should we discard?
      - **Input Gate:** What should we remember?
      - **Output Gate:** What should we say now?
      
      LSTMs powered Google Translate and Siri for nearly a decade.
    parents: [vanishing_gradient]

  gru:
    title: "Gated Recurrent Units (GRU)"
    short_title: "GRU"
    emoji: "⚡"
    content: |
      ### Streamlined Recurrence
      Introduced by Kyunghyun Cho in 2014, the **GRU** is a "modernized" LSTM. It merges the forget and input gates into a single "update gate."
      
      - **Faster to train** due to fewer parameters.
      *   **Comparable performance** to LSTMs on most tasks.
      - **Efficiency:** Made it possible to train larger recurrent models with less compute.
    parents: [vanishing_gradient]

  # --- WORD EMBEDDINGS ---
  vector_space_models:
    title: "Vector Space Models"
    short_title: "Vectors"
    emoji: "📐"
    content: |
      ### Meaning as Geometry
      In this approach, words are not just IDs; they are points in a high-dimensional space.
      
      If "Coffee" and "Tea" appear in similar contexts, they should be geographically close together in the model's "mind." This allows the model to understand synonyms and semantic relationships mathematically.
    parents: [shannon_entropy]

  word2vec:
    title: "Word2Vec (2013)"
    short_title: "Word2Vec"
    emoji: "🅰️"
    content: |
      ### Linguistic Algebra
      Tomas Mikolov at Google released **Word2Vec**, proving that simple neural networks could learn incredibly rich "word embeddings."
      
      He famously showed that the model learned relational logic:
      > **Vector("King") - Vector("Man") + Vector("Woman") ≈ Vector("Queen")**
      
      This shifted NLP from "string manipulation" to "vector geometry," a massive leap in how computers represent meaning.
    parents: [vector_space_models, backpropagation]

  glove:
    title: "GloVe (2014)"
    short_title: "GloVe"
    emoji: "🥊"
    content: |
      ### Global Context
      Stanford researchers argued that Word2Vec was too local (it only looked at immediate neighbors). They created **GloVe** (Global Vectors).
      
      **The Innovation:**
      It looks at the *entire dataset* and builds a giant co-occurrence matrix. It captures both the local context and the global statistics of the language, leading to more stable and accurate word representations.
    parents: [word2vec]

  # --- THE ATTENTION REVOLUTION ---
  seq2seq:
    title: "Seq2Seq Models (2014)"
    short_title: "Seq2Seq"
    emoji: "🔀"
    content: |
      ### Encoder-Decoder Architecture
      **Seq2Seq** (Sequence-to-Sequence) allowed models to take a sequence of one length (e.g., a French sentence) and produce a sequence of a different length (e.g., an English sentence).
      
      1.  **Encoder:** Compresses the whole input into a single "thought vector."
      2.  **Decoder:** Unpacks that vector into the new language.
      
      **The Flaw:** Trying to squeeze a 50-word sentence into one fixed-size vector created a "bottleneck."
    parents: [lstm]

  attention_mechanism:
    title: "Attention Mechanism (2014)"
    short_title: "Attention"
    emoji: "🔍"
    content: |
      ### Solving the Bottleneck
      Dzmitry Bahdanau proposed a brilliant fix: what if the decoder could "look back" at the encoder's original words?
      
      Instead of one "thought vector," the model creates a unique connection to every word in the input. While translating "Chat," the model "pays attention" to the word "Cat" in the source sentence.
      
      This was the first time a model could effectively handle very long sentences.
    parents: [seq2seq]

  transformer_architecture:
    title: "The Transformer (2017)"
    short_title: "Transformer"
    emoji: "🤖"
    content: |
      ![Attention is All You Need](https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Transformer_Architecture.png/400px-Transformer_Architecture.png)
      
      ### Attention is All You Need
      A team at Google Research published the most influential AI paper of the decade. They realized they didn't need RNNs or LSTMs at all. 
      
      **The Breakthrough:**
      By using *only* attention (Self-Attention), they could process all words in a sentence **simultaneously** (parallelization). This allowed models to be trained on vastly more data than ever before.
      
      The Transformer is the "T" in GPT.
    parents: [attention_mechanism]

  self_attention:
    title: "Self-Attention"
    short_title: "Self-Attention"
    emoji: "🪞"
    content: |
      ### The Contextual Mirror
      Self-attention is how a model understands the role of a word based on its neighbors.
      
      Consider the word **"Bank"**:
      - "The robber went to the **bank**."
      - "The fisherman sat on the **bank**."
      
      Self-attention allows the model to look at "robber" or "fisherman" to instantly disambiguate the meaning of "bank," creating a dynamic, context-aware representation.
    parents: [transformer_architecture]

  positional_encoding:
    title: "Positional Encoding"
    short_title: "Position"
    emoji: "📍"
    content: |
      ### Lost in Space
      Because Transformers process all words at once, they have no inherent sense of "first," "second," or "last." 
      
      To fix this, researchers added **Positional Encodings**—a set of mathematical waves (sines and cosines) added to the word vectors. These waves give each word a unique "signature" based on its position, allowing the model to understand the sequence while still processing it in parallel.
    parents: [transformer_architecture]

  # --- THE RISE OF PRE-TRAINING ---
  pretraining_fine_tuning:
    title: "Pre-training & Fine-tuning"
    short_title: "Transfer Learning"
    emoji: "🏋️"
    content: |
      ### The Two-Step Dance
      The modern AI workflow was born:
      1.  **Pre-training:** Train a giant model on "the whole internet" to learn the *structure* of language (very expensive).
      2.  **Fine-tuning:** Take that "pre-trained" model and train it on a small, specific dataset (like medical records) to make it an expert (very cheap).
      
      This allows a single base model to be used for thousands of different apps.
    parents: [transformer_architecture]

  bert:
    title: "BERT (2018)"
    short_title: "BERT"
    emoji: "🐝"
    content: |
      ### The Universal Encoder
      Google's **BERT** changed how we use language models for search. 
      
      **The Cloze Task:**
      BERT was trained by "masking" random words in a sentence and forcing the model to guess them. 
      > "The [MASK] sat on the mat."
      
      Because BERT looks at context from both left and right simultaneously, it became the undisputed king of understanding language (NLU) for years.
    parents: [pretraining_fine_tuning]

  elmo:
    title: "ELMo (2018)"
    short_title: "ELMo"
    emoji: "🔴"
    content: |
      ### Deep Context
      Before BERT, **ELMo** (Embeddings from Language Models) showed that "deep" representations were the future.
      
      It used two LSTMs (one forward, one backward) to look at words. It proved that the lower layers of a network learn **syntax** (grammar), while the higher layers learn **semantics** (meaning).
    parents: [lstm, pretraining_fine_tuning]

  roberta:
    title: "RoBERTa (2019)"
    short_title: "RoBERTa"
    emoji: "🤖"
    content: |
      ### Scaling Up BERT
      Meta researchers realized BERT was "under-trained." By removing some of BERT's training tasks and training on **10x more data** for longer, they created **RoBERTa**.
      
      It proved a core tenet of modern AI: **Data quality and training time often matter more than architectural tweaks.**
    parents: [bert]

  # --- THE GPT LINEAGE ---
  gpt1:
    title: "GPT-1 (2018)"
    short_title: "GPT-1"
    emoji: "☝️"
    content: |
      ### The Generative Path
      While Google focused on "understanding" (BERT), OpenAI focused on **"generation."**
      
      **GPT-1** was a "decoder-only" Transformer. It was trained to do one thing: predict the next word. OpenAI realized that by learning to predict the next word on a large scale, the model accidentally learned how to perform tasks like sentiment analysis and summarization.
    parents: [transformer_architecture]

  gpt2:
    title: "GPT-2 (2019)"
    short_title: "GPT-2"
    emoji: "✌️"
    content: |
      ### Zero-Shot Capabilities
      With 1.5 billion parameters, **GPT-2** was a massive leap. It could write coherent news articles and stories from a simple prompt.
      
      **Zero-Shot Learning:**
      OpenAI showed that GPT-2 could solve tasks it was never specifically trained for (like translation) just by "reading" enough of it on the internet. This was the first hint that **Scale** was the secret sauce.
    parents: [gpt1]

  scaling_laws:
    title: "Scaling Laws (2020)"
    short_title: "Scaling"
    emoji: "📈"
    content: |
      ### The Predictability of Intelligence
      OpenAI researchers published a paper showing that as you increase three things—**Compute, Data, and Parameters**—the model's performance improves in a predictable mathematical "power law."
      
      This gave the industry the confidence to spend hundreds of millions of dollars on massive clusters, knowing that larger models *would* be smarter.
    parents: [gpt2]

  gpt3:
    title: "GPT-3 (2020)"
    short_title: "GPT-3"
    emoji: "🤟"
    content: |
      ### The World's Keyboard
      At 175 billion parameters, **GPT-3** was 100x larger than GPT-2. It was the first model that felt truly "creative."
      
      **Emergent Abilities:**
      Suddenly, the model could:
      - Write functional Python code.
      - Solve math word problems.
      - Mimic specific writing styles.
      
      It was no longer just a "next-word predictor"; it was a **reasoning engine**.
    parents: [scaling_laws]

  # --- ALIGNMENT & INSTRUCTION ---
  rlhf:
    title: "RLHF (2020+)"
    short_title: "RLHF"
    emoji: "🤝"
    content: |
      ### Training with Human Values
      Raw LLMs are "base models"—they just predict what comes next. If you ask "How do I steal a car?", a base model might provide a list of instructions because that's what follows logically in a sequence.
      
      **RLHF** (Reinforcement Learning from Human Feedback) involves humans ranking the model's responses. This "fine-tunes" the model to be helpful, honest, and harmless.
    parents: [gpt3]

  instruct_gpt:
    title: "InstructGPT (2022)"
    short_title: "InstructGPT"
    emoji: "📝"
    content: |
      ### Learning to Follow Orders
      Before InstructGPT, you had to "trick" GPT-3 into doing what you wanted with complex prompts. 
      
      **InstructGPT** was specifically trained (using RLHF) to follow direct commands. This made the model significantly more useful for average users who just wanted to ask "Summarize this meeting" or "Write a poem about cheese."
    parents: [rlhf]

  chatgpt:
    title: "ChatGPT (Nov 2022)"
    short_title: "ChatGPT"
    emoji: "💬"
    content: |
      ### The iPhone Moment of AI
      ChatGPT was not a new "intelligence"—it was a new **interface**. By wrapping a fine-tuned GPT-3.5 model in a simple chat UI, OpenAI made AI accessible to the world.
      
      It reached 100 million users in just two months, the fastest growth in the history of consumer applications. It proved that the "Conversational Interface" was the future of computing.
    parents: [instruct_gpt]

  gpt4:
    title: "GPT-4 (2023)"
    short_title: "GPT-4"
    emoji: "💥"
    content: |
      ### The Frontier Model
      **GPT-4** was a massive leap in "robustness." It passed the Bar Exam in the 90th percentile and could reason through complex, multi-step logical problems.
      
      **Key Upgrades:**
      - **Multimodality:** It can "see" images and understand them.
      - **Reliability:** Significantly fewer "hallucinations" than GPT-3.
      - **Safety:** More advanced guardrails and alignment.
    parents: [chatgpt]

  # --- MODERN ARCHITECTURES ---
  multimodality:
    title: "Multimodality"
    short_title: "Multimodal"
    emoji: "🖼️"
    content: |
      ### Beyond Text
      The next frontier is models that don't just "read," but "see" and "hear."
      
      **Unified Latent Space:**
      Modern multimodal models (like GPT-4V or Gemini) represent images and text in the same mathematical space. This allows you to show the model a picture of your fridge and ask, "What can I cook for dinner?"
    parents: [gpt4]

  mixture_of_experts:
    title: "Mixture of Experts (MoE)"
    short_title: "MoE"
    emoji: "🧩"
    content: |
      ### Brain Specialization
      Instead of one giant "dense" brain, an **MoE** model consists of many small "experts." 
      
      When you ask a math question, only the "math expert" neurons fire. This allows for models with **trillions of parameters** that are still incredibly fast and efficient to run, because they only use a fraction of their brain for any single request.
    parents: [gpt4]

  retrieval_augmented_generation:
    title: "RAG"
    short_title: "RAG"
    emoji: "📚"
    content: |
      ### An Open-Book Exam
      LLMs are "frozen" in time when their training ends. **RAG** allows them to look at new data.
      
      **The Workflow:**
      1.  User asks a question.
      2.  The system searches a private database (like your company's PDFs).
      3.  The system feeds the relevant text to the LLM.
      4.  The LLM answers the question using that specific context.
      
      This reduces "hallucinations" and gives models "perfect memory" of specific documents.
    parents: [chatgpt]

  # --- LLM ECOSYSTEM ---
  llama:
    title: "LLaMA (2023)"
    short_title: "LLaMA"
    emoji: "🦙"
    content: |
      ### The Open Source Revolution
      Meta's release of the **LLaMA** weights was a "leaked" turning point. It proved that a relatively small, efficient model could rival GPT-3 if trained correctly.
      
      It spawned a massive community of developers who "quantized" the model to run on laptops and phones, breaking Big Tech's monopoly on high-end AI.
    parents: [scaling_laws, roberta]

  mistral:
    title: "Mistral & Mixtral"
    short_title: "Mistral"
    emoji: "🌬️"
    content: |
      ### European Excellence
      French startup Mistral AI released models that punch far above their weight. 
      
      **Mixtral 8x7B** used a Mixture of Experts architecture to outperform Llama-2-70B while being significantly faster. It became the gold standard for high-performance open-source AI.
    parents: [mixture_of_experts, llama]

  claude:
    title: "Claude (Anthropic)"
    short_title: "Claude"
    emoji: "🎨"
    content: |
      ### Constitutional AI
      Anthropic (founded by former OpenAI leaders) created **Claude**. 
      
      They use a unique alignment method where the model is given a "Constitution" (a set of ethical principles) and learns to supervise itself. Claude is known for being "more human" in its writing and having a massive context window (200k+ tokens).
    parents: [rlhf]

  gemini:
    title: "Gemini (Google)"
    short_title: "Gemini"
    emoji: "♊"
    content: |
      ### Native Multimodality
      Google's **Gemini** was built from the ground up to be multimodal (not just text with an image-addon). 
      
      **The 1M Token Context:**
      Gemini 1.5 Pro introduced the ability to "read" an entire hour of video or a million lines of code in a single prompt, opening up entirely new use cases for AI analysis.
    parents: [multimodality]

  # --- HARDWARE & COMPUTE ---
  gpus_and_tpus:
    title: "GPUs & TPUs"
    short_title: "Compute"
    emoji: "🔌"
    content: |
      ![NVIDIA H100](https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/NVIDIA_H100_Tensor_Core_GPU.png/400px-NVIDIA_H100_Tensor_Core_GPU.png)
      
      ### The Silicon Foundation
      AI doesn't run on "logic"; it runs on **matrix multiplication**. 
      - **GPUs (NVIDIA):** Originally for video games, they are perfect for doing thousands of simple math problems at once.
      - **TPUs (Google):** Custom-built silicon designed specifically for the math of neural networks.
      
      The "AI Arms Race" is effectively a race to buy enough H100 chips.
    parents: [transformer_architecture]

  cuda:
    title: "CUDA (2007)"
    short_title: "CUDA"
    emoji: "💻"
    content: |
      ### Speaking to the Metal
      NVIDIA's **CUDA** is the software "bridge" that allows programmers to run general code on a GPU. 
      
      Without CUDA, AI researchers couldn't easily use the massive power of graphics cards. It is NVIDIA's most powerful "moat," as almost all AI software (PyTorch, TensorFlow) is optimized for it.
    parents: [gpus_and_tpus]

  # --- ETHICS & SOCIETY ---
  hallucinations:
    title: "Hallucinations"
    short_title: "Hallucinations"
    emoji: "😵"
    content: |
      ### Confident Bullshit
      The biggest weakness of LLMs. Because they are "probabilistic," they don't have a "fact database." They simply guess the next most likely word.
      
      If the most "likely" word sequence is a lie, the model will state it with total confidence. Solving this requires **grounding** the model in external facts (RAG).
    parents: [gpt3]

  bias_and_fairness:
    title: "Bias & Fairness"
    short_title: "Bias"
    emoji: "⚖️"
    content: |
      ### The Mirror of the Web
      LLMs are trained on the internet. Therefore, they inherit every stereotype, prejudice, and bias found on the internet.
      
      Researchers struggle to "de-bias" models without making them overly cautious or "lobotomized." It is a constant tug-of-war between safety and utility.
    parents: [pretraining_fine_tuning]

  alignment_problem:
    title: "The Alignment Problem"
    short_title: "Alignment"
    emoji: "🎯"
    content: |
      ### The Midas Touch
      If you ask a super-intelligent AI to "End all cancer," and it decides to kill every human (thus ending all cancer), it has followed your order but not your **intent**.
      
      **Alignment** is the field of ensuring AI goals perfectly match human values, even as the models become smarter than us.
    parents: [rlhf]

  ai_safety:
    title: "AI Safety"
    short_title: "Safety"
    emoji: "🛡️"
    content: |
      ### Existential Risk
      A field of research focused on preventing catastrophic outcomes. 
      
      Topics include:
      - **Power-Seeking:** Preventing models from trying to gain control over resources.
      - **Deception:** Ensuring models don't "hide" their true capabilities from researchers.
      - **Robustness:** Ensuring models don't fail in dangerous ways when they encounter new situations.
    parents: [alignment_problem]

  # --- FUTURE DIRECTIONS ---
  agents:
    title: "AI Agents"
    short_title: "Agents"
    emoji: "🤖"
    content: |
      ### From Chat to Action
      The shift from "AI you talk to" to "AI that does work." 
      
      An agent can:
      1.  Browse the web to find a flight.
      2.  Check your calendar.
      3.  Use your credit card to book the ticket.
      4.  Email you the confirmation.
      
      This requires long-term planning and the ability to use external tools.
    parents: [chatgpt, rag]

  long_context:
    title: "Long Context Windows"
    short_title: "Long Context"
    emoji: "📜"
    content: |
      ### Perfect Working Memory
      Early models could only "remember" a few pages of text. Modern models can hold **millions of tokens**.
      
      This changes the fundamental "UX" of AI. You don't just "chat" with the model; you feed it your entire company's codebase or every legal case from the last 50 years and ask it to find a needle in the haystack.
    parents: [transformer_architecture, gemini]

  interpretability:
    title: "Mechanistic Interpretability"
    short_title: "Interpretability"
    emoji: "🔬"
    content: |
      ### Opening the Black Box
      We know how to *build* these models, but we don't really know how they *work*.
      
      **Mechanistic Interpretability** is like "neuroscience for AI." Researchers look at individual neurons to see which ones detect "cities," "coding bugs," or "deceptive behavior."
    parents: [transformer_architecture]

  efficient_inference:
    title: "Efficient Inference"
    short_title: "Efficiency"
    emoji: "📉"
    content: |
      ### AI Everywhere
      To make AI useful, it needs to run on your phone, not just in a $1B data center.
      
      **Techniques:**
      - **Quantization:** Reducing the precision of numbers (e.g., from 16-bit to 4-bit) with minimal loss in intelligence.
      - **Distillation:** Using a "teacher" model (GPT-4) to train a small "student" model.
    parents: [mixture_of_experts]

  neuro_symbolic_ai:
    title: "Neuro-Symbolic AI"
    short_title: "Neuro-Symbolic"
    emoji: "🧠"
    content: |
      ### Logic + Learning
      Neural networks are great at **intuition** but bad at **formal logic** (like math). 
      
      Neuro-symbolic AI tries to combine the "system 1" (fast, intuitive) neural approach with "system 2" (slow, logical) symbolic rules. This could lead to models that can both "hallucinate" creative stories and "verify" mathematical proofs.
    parents: [rule_based_systems, gpt4]

  synthetic_data:
    title: "Synthetic Data"
    short_title: "Synthetic Data"
    emoji: "🧪"
    content: |
      ### Self-Improving Models
      We are running out of high-quality human text. The solution? Use current models to write textbooks, code, and logical puzzles to train the *next* generation of models.
      
      This creates a "flywheel" effect, but risks "model collapse" if the synthetic data isn't high enough quality.
    parents: [gpt4]

  world_models:
    title: "World Models"
    short_title: "World Models"
    emoji: "🌎"
    content: |
      ### Understanding Physics
      Current LLMs only understand the world through "tokens." 
      
      A **World Model** (like Sora or JEPA) tries to learn the underlying laws of physics—how things move, fall, and interact in 3D space. This is a critical step toward robots that can navigate the physical world.
    parents: [multimodality]

  agi:
    title: "AGI (Artificial General Intelligence)"
    short_title: "AGI"
    emoji: "🌌"
    content: |
      ### The Final Frontier
      **AGI** is the hypothetical point where a machine can learn any task a human can.
      
      It is the "North Star" for companies like OpenAI and DeepMind. Whether it arrives in 5 years or 50, its impact would be the most significant event in human technological history.
    parents: [gpt4, agents, world_models]

  # --- KEY FIGURES ---
  geoffrey_hinton:
    title: "Geoffrey Hinton"
    short_title: "Hinton"
    emoji: "👨‍🏫"
    content: |
      ### The Godfather
      Hinton spent 30 years working on "Neural Networks" when the rest of the AI community thought they were a dead end. 
      
      He won the Turing Award in 2018. In 2023, he left Google to speak freely about the **existential risks** he now believes AI poses to humanity.
    parents: [backpropagation]

  yann_lecun:
    title: "Yann LeCun"
    short_title: "LeCun"
    emoji: "👨‍💻"
    content: |
      ### Chief AI Scientist at Meta
      LeCun pioneered **Convolutional Neural Networks** (CNNs) for vision. 
      
      He is currently a vocal skeptic of the idea that LLMs alone will lead to AGI, arguing instead for "World Models" that learn like a human child through observation, not just reading text.
    parents: [backpropagation]

  yoshua_bengio:
    title: "Yoshua Bengio"
    short_title: "Bengio"
    emoji: "👨‍🔬"
    content: |
      ### The Theorist
      Based in Montreal, Bengio completed the "trio" of deep learning pioneers. 
      
      His work on "Neural Probabilistic Language Models" in the early 2000s directly paved the way for the word embeddings and sequence models we use today.
    parents: [backpropagation]

  ilya_sutskever:
    title: "Ilya Sutskever"
    short_title: "Sutskever"
    emoji: "👁️"
    content: |
      ### The Visionary
      A student of Hinton, Sutskever co-founded OpenAI. He was one of the first to truly believe that **Scaling** would lead to intelligence.
      
      He is often credited with the "religious" conviction at OpenAI that they could actually build AGI, a belief that drove the development of GPT-3 and GPT-4.
    parents: [scaling_laws, gpt1]

  sam_altman:
    title: "Sam Altman"
    short_title: "Altman"
    emoji: "💼"
    content: |
      ### The Strategist
      As the CEO of OpenAI, Altman transformed it from a small research lab into a global powerhouse. 
      
      He orchestrated the massive $10B+ partnership with Microsoft and became the public face of the AI revolution, testifying before Congress and traveling the world to discuss AI governance.
    parents: [chatgpt]

  demis_hassabis:
    title: "Demis Hassabis"
    short_title: "Hassabis"
    emoji: "♟️"
    content: |
      ### The Grandmaster
      A child chess prodigy and game designer, Hassabis co-founded **DeepMind**. 
      
      His philosophy is "Solve intelligence, then use that to solve everything else." DeepMind's achievements include AlphaGo (beating the world champion) and AlphaFold (solving the protein folding problem).
    parents: [gemini]

  # --- MISC NODES FOR DENSITY ---
  dropout:
    title: "Dropout (2014)"
    short_title: "Dropout"
    emoji: "💧"
    content: |
      ### Preventing Rote Memorization
      Neural networks are so powerful they often "overfit"—they just memorize the training data rather than learning the concepts.
      
      **Dropout** randomly "kills" a percentage of neurons during training. This forces the remaining neurons to learn more robust, general features, making the model perform much better on new, unseen data.
    parents: [backpropagation]

  adam_optimizer:
    title: "Adam Optimizer (2014)"
    short_title: "Adam"
    emoji: "🏎️"
    content: |
      ### Adaptive Momentum
      Training a model is like navigating a mountain range in the dark. **Adam** is the most popular "GPS" for this journey.
      
      It calculates a unique "learning rate" for every single weight in the network, allowing the model to learn quickly on clear paths and slow down on tricky, steep terrain.
    parents: [backpropagation]

  layer_normalization:
    title: "Layer Normalization"
    short_title: "LayerNorm"
    emoji: "⚖️"
    content: |
      ### Stabilizing the Signal
      Deep networks have a problem where the numbers can "explode" or "die" as they pass through layers.
      
      **LayerNorm** re-scales the activations in each layer to have a mean of 0 and a variance of 1. It is a critical "stability" tweak that makes training deep Transformers possible.
    parents: [transformer_architecture]

  byte_pair_encoding:
    title: "Byte Pair Encoding (BPE)"
    short_title: "BPE"
    emoji: "✂️"
    content: |
      ### The Vocabulary Fix
      How do you turn text into numbers? 
      - By character? Too slow.
      - By word? Too many words (millions).
      
      **BPE** splits text into "sub-words" (tokens). 
      > "Hugging" -> "Hug" + "ging"
      
      This allows a model with a small vocabulary (e.g., 50k tokens) to represent *any* possible word in any language.
    parents: [gpt1]

  hallucination_mitigation:
    title: "Hallucination Mitigation"
    short_title: "Mitigation"
    emoji: "🩹"
    content: |
      ### Verifying the Output
      Strategies to make AI more honest:
      - **Self-Correction:** Asking the model to "Check your work."
      - **Citing Sources:** Forcing the model to link to a real URL.
      - **Grounding:** Comparing the output against a trusted database.
    parents: [hallucinations, rag]

  open_source_ai:
    title: "Open Source AI"
    short_title: "Open Source"
    emoji: "🔓"
    content: |
      ### Democratizing Intelligence
      A movement to ensure that AI isn't just controlled by three giant companies in Silicon Valley. 
      
      Communities like **Hugging Face** allow researchers to share models, datasets, and demos. This accelerates research and provides "transparency" into how these models are built.
    parents: [llama]

  constitutional_ai:
    title: "Constitutional AI"
    short_title: "Constitutional"
    emoji: "📜"
    content: |
      ### Scalable Oversight
      As models get smarter, it becomes impossible for humans to review every response. 
      
      **Constitutional AI** uses a "critic" model to check a "student" model. If the student violates the constitution, the critic provides feedback. It is a way of "scaling safety" using AI to watch AI.
    parents: [claude, alignment_problem]

  superalignment:
    title: "Superalignment"
    short_title: "Superalignment"
    emoji: "🎯"
    content: |
      ### Beyond Human Control
      The goal of **Superalignment** is to solve the problem of "Superintelligence" before it arrives. 
      
      How do we control something that is 1,000x smarter than us? It is one of the most difficult and important technical challenges in human history.
    parents: [ai_safety, agi]

  data_bottleneck:
    title: "The Data Bottleneck"
    short_title: "Data Wall"
    emoji: "🧱"
    content: |
      ### Running Out of Internet
      We have already used most of the high-quality text on the public internet (books, Wikipedia, Reddit). 
      
      To keep scaling, models need new sources of data:
      - **Video:** Learning from the physical world.
      - **Synthetic Data:** High-quality text generated by models.
      - **Private Data:** Partnering with companies to use their internal archives.
    parents: [scaling_laws, synthetic_data]

  scaling_beyond_text:
    title: "Scaling Beyond Text"
    short_title: "Beyond Text"
    emoji: "🎥"
    content: |
      ### Tokenizing Everything
      The future is "General World Simulators." 
      
      Models like **Sora** show that the same "Predict the next token" logic used for text can be used for pixels. By predicting the "next patch" of a video, the model learns about gravity, reflections, and the permanence of objects.
    parents: [multimodality, world_models]
`,Tl=[{name:"CS: The LeetCode Skill Tree",yaml:V0},{name:"Tech: Programming Family Tree",yaml:X0},{name:"Science: Stellar Evolution",yaml:Q0},{name:"Science: Cholera (1854)",yaml:K0},{name:"History: The First Flight",yaml:Z0},{name:"History: Birth of the Internet",yaml:J0},{name:"Science: Unraveling DNA",yaml:W0},{name:"Mystery: Jack the Ripper",yaml:P0},{name:"History: World War II",yaml:$0},{name:"AI: Evolution of LLMs",yaml:ev}];function nv({onLoad:t}){const[a,r]=Me.useState(""),[o,s]=Me.useState("");function f(){if(!a.trim()){s("Please paste some YAML content");return}s(""),t(a)}return P.jsxs("div",{className:"home",children:[P.jsx("img",{src:"/logo.jpg",alt:"detangled",className:"home-logo"}),P.jsx("p",{className:"home-subtitle",children:"Explore structured knowledge as a graph"}),P.jsx("textarea",{className:"home-textarea",placeholder:"Paste your YAML here...",value:a,onChange:h=>{r(h.target.value),s("")}}),o&&P.jsx("p",{className:"home-error",children:o}),P.jsx("button",{className:"home-btn primary",onClick:f,children:"Visualise"}),P.jsxs("div",{className:"home-examples",children:[P.jsx("p",{className:"home-examples-label",children:"Or try an example:"}),Tl.map(h=>P.jsx("button",{className:"home-btn example",onClick:()=>t(h.yaml),children:h.name},h.name))]})]})}function tv(t,a){const r={};return(t[t.length-1]===""?[...t,""]:t).join((r.padRight?" ":"")+","+(r.padLeft===!1?"":" ")).trim()}const iv=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,lv=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,av={};function Wm(t,a){return(av.jsx?lv:iv).test(t)}const rv=/[ \t\n\f\r]/g;function ov(t){return typeof t=="object"?t.type==="text"?Pm(t.value):!1:Pm(t)}function Pm(t){return t.replace(rv,"")===""}let qa=class{constructor(a,r,o){this.normal=r,this.property=a,o&&(this.space=o)}};qa.prototype.normal={};qa.prototype.property={};qa.prototype.space=void 0;function Pp(t,a){const r={},o={};for(const s of t)Object.assign(r,s.property),Object.assign(o,s.normal);return new qa(r,o,a)}function uc(t){return t.toLowerCase()}class Rn{constructor(a,r){this.attribute=r,this.property=a}}Rn.prototype.attribute="";Rn.prototype.booleanish=!1;Rn.prototype.boolean=!1;Rn.prototype.commaOrSpaceSeparated=!1;Rn.prototype.commaSeparated=!1;Rn.prototype.defined=!1;Rn.prototype.mustUseProperty=!1;Rn.prototype.number=!1;Rn.prototype.overloadedBoolean=!1;Rn.prototype.property="";Rn.prototype.spaceSeparated=!1;Rn.prototype.space=void 0;let uv=0;const _e=ji(),ln=ji(),sc=ji(),Z=ji(),Ye=ji(),Cl=ji(),Fn=ji();function ji(){return 2**++uv}const cc=Object.freeze(Object.defineProperty({__proto__:null,boolean:_e,booleanish:ln,commaOrSpaceSeparated:Fn,commaSeparated:Cl,number:Z,overloadedBoolean:sc,spaceSeparated:Ye},Symbol.toStringTag,{value:"Module"})),Vs=Object.keys(cc);class Tc extends Rn{constructor(a,r,o,s){let f=-1;if(super(a,r),$m(this,"space",s),typeof o=="number")for(;++f<Vs.length;){const h=Vs[f];$m(this,Vs[f],(o&cc[h])===cc[h])}}}Tc.prototype.defined=!0;function $m(t,a,r){r&&(t[a]=r)}function Dl(t){const a={},r={};for(const[o,s]of Object.entries(t.properties)){const f=new Tc(o,t.transform(t.attributes||{},o),s,t.space);t.mustUseProperty&&t.mustUseProperty.includes(o)&&(f.mustUseProperty=!0),a[o]=f,r[uc(o)]=o,r[uc(f.attribute)]=o}return new qa(a,r,t.space)}const $p=Dl({properties:{ariaActiveDescendant:null,ariaAtomic:ln,ariaAutoComplete:null,ariaBusy:ln,ariaChecked:ln,ariaColCount:Z,ariaColIndex:Z,ariaColSpan:Z,ariaControls:Ye,ariaCurrent:null,ariaDescribedBy:Ye,ariaDetails:null,ariaDisabled:ln,ariaDropEffect:Ye,ariaErrorMessage:null,ariaExpanded:ln,ariaFlowTo:Ye,ariaGrabbed:ln,ariaHasPopup:null,ariaHidden:ln,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Ye,ariaLevel:Z,ariaLive:null,ariaModal:ln,ariaMultiLine:ln,ariaMultiSelectable:ln,ariaOrientation:null,ariaOwns:Ye,ariaPlaceholder:null,ariaPosInSet:Z,ariaPressed:ln,ariaReadOnly:ln,ariaRelevant:null,ariaRequired:ln,ariaRoleDescription:Ye,ariaRowCount:Z,ariaRowIndex:Z,ariaRowSpan:Z,ariaSelected:ln,ariaSetSize:Z,ariaSort:null,ariaValueMax:Z,ariaValueMin:Z,ariaValueNow:Z,ariaValueText:null,role:null},transform(t,a){return a==="role"?a:"aria-"+a.slice(4).toLowerCase()}});function eg(t,a){return a in t?t[a]:a}function ng(t,a){return eg(t,a.toLowerCase())}const sv=Dl({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Cl,acceptCharset:Ye,accessKey:Ye,action:null,allow:null,allowFullScreen:_e,allowPaymentRequest:_e,allowUserMedia:_e,alt:null,as:null,async:_e,autoCapitalize:null,autoComplete:Ye,autoFocus:_e,autoPlay:_e,blocking:Ye,capture:null,charSet:null,checked:_e,cite:null,className:Ye,cols:Z,colSpan:null,content:null,contentEditable:ln,controls:_e,controlsList:Ye,coords:Z|Cl,crossOrigin:null,data:null,dateTime:null,decoding:null,default:_e,defer:_e,dir:null,dirName:null,disabled:_e,download:sc,draggable:ln,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:_e,formTarget:null,headers:Ye,height:Z,hidden:sc,high:Z,href:null,hrefLang:null,htmlFor:Ye,httpEquiv:Ye,id:null,imageSizes:null,imageSrcSet:null,inert:_e,inputMode:null,integrity:null,is:null,isMap:_e,itemId:null,itemProp:Ye,itemRef:Ye,itemScope:_e,itemType:Ye,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:_e,low:Z,manifest:null,max:null,maxLength:Z,media:null,method:null,min:null,minLength:Z,multiple:_e,muted:_e,name:null,nonce:null,noModule:_e,noValidate:_e,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:_e,optimum:Z,pattern:null,ping:Ye,placeholder:null,playsInline:_e,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:_e,referrerPolicy:null,rel:Ye,required:_e,reversed:_e,rows:Z,rowSpan:Z,sandbox:Ye,scope:null,scoped:_e,seamless:_e,selected:_e,shadowRootClonable:_e,shadowRootDelegatesFocus:_e,shadowRootMode:null,shape:null,size:Z,sizes:null,slot:null,span:Z,spellCheck:ln,src:null,srcDoc:null,srcLang:null,srcSet:null,start:Z,step:null,style:null,tabIndex:Z,target:null,title:null,translate:null,type:null,typeMustMatch:_e,useMap:null,value:ln,width:Z,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:Ye,axis:null,background:null,bgColor:null,border:Z,borderColor:null,bottomMargin:Z,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:_e,declare:_e,event:null,face:null,frame:null,frameBorder:null,hSpace:Z,leftMargin:Z,link:null,longDesc:null,lowSrc:null,marginHeight:Z,marginWidth:Z,noResize:_e,noHref:_e,noShade:_e,noWrap:_e,object:null,profile:null,prompt:null,rev:null,rightMargin:Z,rules:null,scheme:null,scrolling:ln,standby:null,summary:null,text:null,topMargin:Z,valueType:null,version:null,vAlign:null,vLink:null,vSpace:Z,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:_e,disableRemotePlayback:_e,prefix:null,property:null,results:Z,security:null,unselectable:null},space:"html",transform:ng}),cv=Dl({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:Fn,accentHeight:Z,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:Z,amplitude:Z,arabicForm:null,ascent:Z,attributeName:null,attributeType:null,azimuth:Z,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:Z,by:null,calcMode:null,capHeight:Z,className:Ye,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:Z,diffuseConstant:Z,direction:null,display:null,dur:null,divisor:Z,dominantBaseline:null,download:_e,dx:null,dy:null,edgeMode:null,editable:null,elevation:Z,enableBackground:null,end:null,event:null,exponent:Z,externalResourcesRequired:null,fill:null,fillOpacity:Z,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Cl,g2:Cl,glyphName:Cl,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:Z,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:Z,horizOriginX:Z,horizOriginY:Z,id:null,ideographic:Z,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:Z,k:Z,k1:Z,k2:Z,k3:Z,k4:Z,kernelMatrix:Fn,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:Z,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:Z,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:Z,overlineThickness:Z,paintOrder:null,panose1:null,path:null,pathLength:Z,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Ye,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:Z,pointsAtY:Z,pointsAtZ:Z,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Fn,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Fn,rev:Fn,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Fn,requiredFeatures:Fn,requiredFonts:Fn,requiredFormats:Fn,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:Z,specularExponent:Z,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:Z,strikethroughThickness:Z,string:null,stroke:null,strokeDashArray:Fn,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:Z,strokeOpacity:Z,strokeWidth:null,style:null,surfaceScale:Z,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Fn,tabIndex:Z,tableValues:null,target:null,targetX:Z,targetY:Z,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Fn,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:Z,underlineThickness:Z,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:Z,values:null,vAlphabetic:Z,vMathematical:Z,vectorEffect:null,vHanging:Z,vIdeographic:Z,version:null,vertAdvY:Z,vertOriginX:Z,vertOriginY:Z,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:Z,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:eg}),tg=Dl({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(t,a){return"xlink:"+a.slice(5).toLowerCase()}}),ig=Dl({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:ng}),lg=Dl({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(t,a){return"xml:"+a.slice(3).toLowerCase()}}),fv={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},hv=/[A-Z]/g,ep=/-[a-z]/g,dv=/^data[-\w.:]+$/i;function mv(t,a){const r=uc(a);let o=a,s=Rn;if(r in t.normal)return t.property[t.normal[r]];if(r.length>4&&r.slice(0,4)==="data"&&dv.test(a)){if(a.charAt(4)==="-"){const f=a.slice(5).replace(ep,gv);o="data"+f.charAt(0).toUpperCase()+f.slice(1)}else{const f=a.slice(4);if(!ep.test(f)){let h=f.replace(hv,pv);h.charAt(0)!=="-"&&(h="-"+h),a="data"+h}}s=Tc}return new s(o,a)}function pv(t){return"-"+t.toLowerCase()}function gv(t){return t.charAt(1).toUpperCase()}const yv=Pp([$p,sv,tg,ig,lg],"html"),Ac=Pp([$p,cv,tg,ig,lg],"svg");function bv(t){return t.join(" ").trim()}var Sl={},Xs,np;function vv(){if(np)return Xs;np=1;var t=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,a=/\n/g,r=/^\s*/,o=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,s=/^:\s*/,f=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,h=/^[;\s]*/,d=/^\s+|\s+$/g,g=`
`,p="/",b="*",y="",S="comment",_="declaration";function j(Y,B){if(typeof Y!="string")throw new TypeError("First argument must be a string");if(!Y)return[];B=B||{};var V=1,k=1;function Q(le){var F=le.match(a);F&&(V+=F.length);var M=le.lastIndexOf(g);k=~M?le.length-M:k+le.length}function ee(){var le={line:V,column:k};return function(F){return F.position=new R(le),oe(),F}}function R(le){this.start=le,this.end={line:V,column:k},this.source=B.source}R.prototype.content=Y;function K(le){var F=new Error(B.source+":"+V+":"+k+": "+le);if(F.reason=le,F.filename=B.source,F.line=V,F.column=k,F.source=Y,!B.silent)throw F}function ie(le){var F=le.exec(Y);if(F){var M=F[0];return Q(M),Y=Y.slice(M.length),F}}function oe(){ie(r)}function pe(le){var F;for(le=le||[];F=ne();)F!==!1&&le.push(F);return le}function ne(){var le=ee();if(!(p!=Y.charAt(0)||b!=Y.charAt(1))){for(var F=2;y!=Y.charAt(F)&&(b!=Y.charAt(F)||p!=Y.charAt(F+1));)++F;if(F+=2,y===Y.charAt(F-1))return K("End of comment missing");var M=Y.slice(2,F-2);return k+=2,Q(M),Y=Y.slice(F),k+=2,le({type:S,comment:M})}}function W(){var le=ee(),F=ie(o);if(F){if(ne(),!ie(s))return K("property missing ':'");var M=ie(f),X=le({type:_,property:L(F[0].replace(t,y)),value:M?L(M[0].replace(t,y)):y});return ie(h),X}}function Se(){var le=[];pe(le);for(var F;F=W();)F!==!1&&(le.push(F),pe(le));return le}return oe(),Se()}function L(Y){return Y?Y.replace(d,y):y}return Xs=j,Xs}var tp;function _v(){if(tp)return Sl;tp=1;var t=Sl&&Sl.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(Sl,"__esModule",{value:!0}),Sl.default=r;const a=t(vv());function r(o,s){let f=null;if(!o||typeof o!="string")return f;const h=(0,a.default)(o),d=typeof s=="function";return h.forEach(g=>{if(g.type!=="declaration")return;const{property:p,value:b}=g;d?s(p,b,g):b&&(f=f||{},f[p]=b)}),f}return Sl}var Ca={},ip;function Sv(){if(ip)return Ca;ip=1,Object.defineProperty(Ca,"__esModule",{value:!0}),Ca.camelCase=void 0;var t=/^--[a-zA-Z0-9_-]+$/,a=/-([a-z])/g,r=/^[^-]+$/,o=/^-(webkit|moz|ms|o|khtml)-/,s=/^-(ms)-/,f=function(p){return!p||r.test(p)||t.test(p)},h=function(p,b){return b.toUpperCase()},d=function(p,b){return"".concat(b,"-")},g=function(p,b){return b===void 0&&(b={}),f(p)?p:(p=p.toLowerCase(),b.reactCompat?p=p.replace(s,d):p=p.replace(o,d),p.replace(a,h))};return Ca.camelCase=g,Ca}var Ma,lp;function wv(){if(lp)return Ma;lp=1;var t=Ma&&Ma.__importDefault||function(s){return s&&s.__esModule?s:{default:s}},a=t(_v()),r=Sv();function o(s,f){var h={};return!s||typeof s!="string"||(0,a.default)(s,function(d,g){d&&g&&(h[(0,r.camelCase)(d,f)]=g)}),h}return o.default=o,Ma=o,Ma}var xv=wv();const Tv=Wp(xv),ag=rg("end"),Ec=rg("start");function rg(t){return a;function a(r){const o=r&&r.position&&r.position[t]||{};if(typeof o.line=="number"&&o.line>0&&typeof o.column=="number"&&o.column>0)return{line:o.line,column:o.column,offset:typeof o.offset=="number"&&o.offset>-1?o.offset:void 0}}}function Av(t){const a=Ec(t),r=ag(t);if(a&&r)return{start:a,end:r}}function za(t){return!t||typeof t!="object"?"":"position"in t||"type"in t?ap(t.position):"start"in t||"end"in t?ap(t):"line"in t||"column"in t?fc(t):""}function fc(t){return rp(t&&t.line)+":"+rp(t&&t.column)}function ap(t){return fc(t&&t.start)+"-"+fc(t&&t.end)}function rp(t){return t&&typeof t=="number"?t:1}class bn extends Error{constructor(a,r,o){super(),typeof r=="string"&&(o=r,r=void 0);let s="",f={},h=!1;if(r&&("line"in r&&"column"in r?f={place:r}:"start"in r&&"end"in r?f={place:r}:"type"in r?f={ancestors:[r],place:r.position}:f={...r}),typeof a=="string"?s=a:!f.cause&&a&&(h=!0,s=a.message,f.cause=a),!f.ruleId&&!f.source&&typeof o=="string"){const g=o.indexOf(":");g===-1?f.ruleId=o:(f.source=o.slice(0,g),f.ruleId=o.slice(g+1))}if(!f.place&&f.ancestors&&f.ancestors){const g=f.ancestors[f.ancestors.length-1];g&&(f.place=g.position)}const d=f.place&&"start"in f.place?f.place.start:f.place;this.ancestors=f.ancestors||void 0,this.cause=f.cause||void 0,this.column=d?d.column:void 0,this.fatal=void 0,this.file="",this.message=s,this.line=d?d.line:void 0,this.name=za(f.place)||"1:1",this.place=f.place||void 0,this.reason=this.message,this.ruleId=f.ruleId||void 0,this.source=f.source||void 0,this.stack=h&&f.cause&&typeof f.cause.stack=="string"?f.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}bn.prototype.file="";bn.prototype.name="";bn.prototype.reason="";bn.prototype.message="";bn.prototype.stack="";bn.prototype.column=void 0;bn.prototype.line=void 0;bn.prototype.ancestors=void 0;bn.prototype.cause=void 0;bn.prototype.fatal=void 0;bn.prototype.place=void 0;bn.prototype.ruleId=void 0;bn.prototype.source=void 0;const kc={}.hasOwnProperty,Ev=new Map,kv=/[A-Z]/g,Cv=new Set(["table","tbody","thead","tfoot","tr"]),Mv=new Set(["td","th"]),og="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function Nv(t,a){if(!a||a.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const r=a.filePath||void 0;let o;if(a.development){if(typeof a.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");o=Hv(r,a.jsxDEV)}else{if(typeof a.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof a.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");o=Bv(r,a.jsx,a.jsxs)}const s={Fragment:a.Fragment,ancestors:[],components:a.components||{},create:o,elementAttributeNameCase:a.elementAttributeNameCase||"react",evaluater:a.createEvaluater?a.createEvaluater():void 0,filePath:r,ignoreInvalidStyle:a.ignoreInvalidStyle||!1,passKeys:a.passKeys!==!1,passNode:a.passNode||!1,schema:a.space==="svg"?Ac:yv,stylePropertyNameCase:a.stylePropertyNameCase||"dom",tableCellAlignToStyle:a.tableCellAlignToStyle!==!1},f=ug(s,t,void 0);return f&&typeof f!="string"?f:s.create(t,s.Fragment,{children:f||void 0},void 0)}function ug(t,a,r){if(a.type==="element")return Dv(t,a,r);if(a.type==="mdxFlowExpression"||a.type==="mdxTextExpression")return jv(t,a);if(a.type==="mdxJsxFlowElement"||a.type==="mdxJsxTextElement")return Ov(t,a,r);if(a.type==="mdxjsEsm")return zv(t,a);if(a.type==="root")return Rv(t,a,r);if(a.type==="text")return Lv(t,a)}function Dv(t,a,r){const o=t.schema;let s=o;a.tagName.toLowerCase()==="svg"&&o.space==="html"&&(s=Ac,t.schema=s),t.ancestors.push(a);const f=cg(t,a.tagName,!1),h=Uv(t,a);let d=Mc(t,a);return Cv.has(a.tagName)&&(d=d.filter(function(g){return typeof g=="string"?!ov(g):!0})),sg(t,h,f,a),Cc(h,d),t.ancestors.pop(),t.schema=o,t.create(a,f,h,r)}function jv(t,a){if(a.data&&a.data.estree&&t.evaluater){const o=a.data.estree.body[0];return o.type,t.evaluater.evaluateExpression(o.expression)}La(t,a.position)}function zv(t,a){if(a.data&&a.data.estree&&t.evaluater)return t.evaluater.evaluateProgram(a.data.estree);La(t,a.position)}function Ov(t,a,r){const o=t.schema;let s=o;a.name==="svg"&&o.space==="html"&&(s=Ac,t.schema=s),t.ancestors.push(a);const f=a.name===null?t.Fragment:cg(t,a.name,!0),h=Gv(t,a),d=Mc(t,a);return sg(t,h,f,a),Cc(h,d),t.ancestors.pop(),t.schema=o,t.create(a,f,h,r)}function Rv(t,a,r){const o={};return Cc(o,Mc(t,a)),t.create(a,t.Fragment,o,r)}function Lv(t,a){return a.value}function sg(t,a,r,o){typeof r!="string"&&r!==t.Fragment&&t.passNode&&(a.node=o)}function Cc(t,a){if(a.length>0){const r=a.length>1?a:a[0];r&&(t.children=r)}}function Bv(t,a,r){return o;function o(s,f,h,d){const p=Array.isArray(h.children)?r:a;return d?p(f,h,d):p(f,h)}}function Hv(t,a){return r;function r(o,s,f,h){const d=Array.isArray(f.children),g=Ec(o);return a(s,f,h,d,{columnNumber:g?g.column-1:void 0,fileName:t,lineNumber:g?g.line:void 0},void 0)}}function Uv(t,a){const r={};let o,s;for(s in a.properties)if(s!=="children"&&kc.call(a.properties,s)){const f=qv(t,s,a.properties[s]);if(f){const[h,d]=f;t.tableCellAlignToStyle&&h==="align"&&typeof d=="string"&&Mv.has(a.tagName)?o=d:r[h]=d}}if(o){const f=r.style||(r.style={});f[t.stylePropertyNameCase==="css"?"text-align":"textAlign"]=o}return r}function Gv(t,a){const r={};for(const o of a.attributes)if(o.type==="mdxJsxExpressionAttribute")if(o.data&&o.data.estree&&t.evaluater){const f=o.data.estree.body[0];f.type;const h=f.expression;h.type;const d=h.properties[0];d.type,Object.assign(r,t.evaluater.evaluateExpression(d.argument))}else La(t,a.position);else{const s=o.name;let f;if(o.value&&typeof o.value=="object")if(o.value.data&&o.value.data.estree&&t.evaluater){const d=o.value.data.estree.body[0];d.type,f=t.evaluater.evaluateExpression(d.expression)}else La(t,a.position);else f=o.value===null?!0:o.value;r[s]=f}return r}function Mc(t,a){const r=[];let o=-1;const s=t.passKeys?new Map:Ev;for(;++o<a.children.length;){const f=a.children[o];let h;if(t.passKeys){const g=f.type==="element"?f.tagName:f.type==="mdxJsxFlowElement"||f.type==="mdxJsxTextElement"?f.name:void 0;if(g){const p=s.get(g)||0;h=g+"-"+p,s.set(g,p+1)}}const d=ug(t,f,h);d!==void 0&&r.push(d)}return r}function qv(t,a,r){const o=mv(t.schema,a);if(!(r==null||typeof r=="number"&&Number.isNaN(r))){if(Array.isArray(r)&&(r=o.commaSeparated?tv(r):bv(r)),o.property==="style"){let s=typeof r=="object"?r:Iv(t,String(r));return t.stylePropertyNameCase==="css"&&(s=Yv(s)),["style",s]}return[t.elementAttributeNameCase==="react"&&o.space?fv[o.property]||o.property:o.attribute,r]}}function Iv(t,a){try{return Tv(a,{reactCompat:!0})}catch(r){if(t.ignoreInvalidStyle)return{};const o=r,s=new bn("Cannot parse `style` attribute",{ancestors:t.ancestors,cause:o,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw s.file=t.filePath||void 0,s.url=og+"#cannot-parse-style-attribute",s}}function cg(t,a,r){let o;if(!r)o={type:"Literal",value:a};else if(a.includes(".")){const s=a.split(".");let f=-1,h;for(;++f<s.length;){const d=Wm(s[f])?{type:"Identifier",name:s[f]}:{type:"Literal",value:s[f]};h=h?{type:"MemberExpression",object:h,property:d,computed:!!(f&&d.type==="Literal"),optional:!1}:d}o=h}else o=Wm(a)&&!/^[a-z]/.test(a)?{type:"Identifier",name:a}:{type:"Literal",value:a};if(o.type==="Literal"){const s=o.value;return kc.call(t.components,s)?t.components[s]:s}if(t.evaluater)return t.evaluater.evaluateExpression(o);La(t)}function La(t,a){const r=new bn("Cannot handle MDX estrees without `createEvaluater`",{ancestors:t.ancestors,place:a,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw r.file=t.filePath||void 0,r.url=og+"#cannot-handle-mdx-estrees-without-createevaluater",r}function Yv(t){const a={};let r;for(r in t)kc.call(t,r)&&(a[Fv(r)]=t[r]);return a}function Fv(t){let a=t.replace(kv,Vv);return a.slice(0,3)==="ms-"&&(a="-"+a),a}function Vv(t){return"-"+t.toLowerCase()}const Qs={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},Xv={};function Qv(t,a){const r=Xv,o=typeof r.includeImageAlt=="boolean"?r.includeImageAlt:!0,s=typeof r.includeHtml=="boolean"?r.includeHtml:!0;return fg(t,o,s)}function fg(t,a,r){if(Kv(t)){if("value"in t)return t.type==="html"&&!r?"":t.value;if(a&&"alt"in t&&t.alt)return t.alt;if("children"in t)return op(t.children,a,r)}return Array.isArray(t)?op(t,a,r):""}function op(t,a,r){const o=[];let s=-1;for(;++s<t.length;)o[s]=fg(t[s],a,r);return o.join("")}function Kv(t){return!!(t&&typeof t=="object")}const up=document.createElement("i");function Nc(t){const a="&"+t+";";up.innerHTML=a;const r=up.textContent;return r.charCodeAt(r.length-1)===59&&t!=="semi"||r===a?!1:r}function pt(t,a,r,o){const s=t.length;let f=0,h;if(a<0?a=-a>s?0:s+a:a=a>s?s:a,r=r>0?r:0,o.length<1e4)h=Array.from(o),h.unshift(a,r),t.splice(...h);else for(r&&t.splice(a,r);f<o.length;)h=o.slice(f,f+1e4),h.unshift(a,0),t.splice(...h),f+=1e4,a+=1e4}function it(t,a){return t.length>0?(pt(t,t.length,0,a),t):a}const sp={}.hasOwnProperty;function Zv(t){const a={};let r=-1;for(;++r<t.length;)Jv(a,t[r]);return a}function Jv(t,a){let r;for(r in a){const s=(sp.call(t,r)?t[r]:void 0)||(t[r]={}),f=a[r];let h;if(f)for(h in f){sp.call(s,h)||(s[h]=[]);const d=f[h];Wv(s[h],Array.isArray(d)?d:d?[d]:[])}}}function Wv(t,a){let r=-1;const o=[];for(;++r<a.length;)(a[r].add==="after"?t:o).push(a[r]);pt(t,0,0,o)}function hg(t,a){const r=Number.parseInt(t,a);return r<9||r===11||r>13&&r<32||r>126&&r<160||r>55295&&r<57344||r>64975&&r<65008||(r&65535)===65535||(r&65535)===65534||r>1114111?"�":String.fromCodePoint(r)}function Ml(t){return t.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const dt=hi(/[A-Za-z]/),Vn=hi(/[\dA-Za-z]/),Pv=hi(/[#-'*+\--9=?A-Z^-~]/);function hc(t){return t!==null&&(t<32||t===127)}const dc=hi(/\d/),$v=hi(/[\dA-Fa-f]/),e1=hi(/[!-/:-@[-`{-~]/);function me(t){return t!==null&&t<-2}function On(t){return t!==null&&(t<0||t===32)}function ze(t){return t===-2||t===-1||t===32}const n1=hi(new RegExp("\\p{P}|\\p{S}","u")),t1=hi(/\s/);function hi(t){return a;function a(r){return r!==null&&r>-1&&t.test(String.fromCharCode(r))}}function jl(t){const a=[];let r=-1,o=0,s=0;for(;++r<t.length;){const f=t.charCodeAt(r);let h="";if(f===37&&Vn(t.charCodeAt(r+1))&&Vn(t.charCodeAt(r+2)))s=2;else if(f<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(f))||(h=String.fromCharCode(f));else if(f>55295&&f<57344){const d=t.charCodeAt(r+1);f<56320&&d>56319&&d<57344?(h=String.fromCharCode(f,d),s=1):h="�"}else h=String.fromCharCode(f);h&&(a.push(t.slice(o,r),encodeURIComponent(h)),o=r+s+1,h=""),s&&(r+=s,s=0)}return a.join("")+t.slice(o)}function Fe(t,a,r,o){const s=o?o-1:Number.POSITIVE_INFINITY;let f=0;return h;function h(g){return ze(g)?(t.enter(r),d(g)):a(g)}function d(g){return ze(g)&&f++<s?(t.consume(g),d):(t.exit(r),a(g))}}const i1={tokenize:l1};function l1(t){const a=t.attempt(this.parser.constructs.contentInitial,o,s);let r;return a;function o(d){if(d===null){t.consume(d);return}return t.enter("lineEnding"),t.consume(d),t.exit("lineEnding"),Fe(t,a,"linePrefix")}function s(d){return t.enter("paragraph"),f(d)}function f(d){const g=t.enter("chunkText",{contentType:"text",previous:r});return r&&(r.next=g),r=g,h(d)}function h(d){if(d===null){t.exit("chunkText"),t.exit("paragraph"),t.consume(d);return}return me(d)?(t.consume(d),t.exit("chunkText"),f):(t.consume(d),h)}}const a1={tokenize:r1},cp={tokenize:o1};function r1(t){const a=this,r=[];let o=0,s,f,h;return d;function d(k){if(o<r.length){const Q=r[o];return a.containerState=Q[1],t.attempt(Q[0].continuation,g,p)(k)}return p(k)}function g(k){if(o++,a.containerState._closeFlow){a.containerState._closeFlow=void 0,s&&V();const Q=a.events.length;let ee=Q,R;for(;ee--;)if(a.events[ee][0]==="exit"&&a.events[ee][1].type==="chunkFlow"){R=a.events[ee][1].end;break}B(o);let K=Q;for(;K<a.events.length;)a.events[K][1].end={...R},K++;return pt(a.events,ee+1,0,a.events.slice(Q)),a.events.length=K,p(k)}return d(k)}function p(k){if(o===r.length){if(!s)return S(k);if(s.currentConstruct&&s.currentConstruct.concrete)return j(k);a.interrupt=!!(s.currentConstruct&&!s._gfmTableDynamicInterruptHack)}return a.containerState={},t.check(cp,b,y)(k)}function b(k){return s&&V(),B(o),S(k)}function y(k){return a.parser.lazy[a.now().line]=o!==r.length,h=a.now().offset,j(k)}function S(k){return a.containerState={},t.attempt(cp,_,j)(k)}function _(k){return o++,r.push([a.currentConstruct,a.containerState]),S(k)}function j(k){if(k===null){s&&V(),B(0),t.consume(k);return}return s=s||a.parser.flow(a.now()),t.enter("chunkFlow",{_tokenizer:s,contentType:"flow",previous:f}),L(k)}function L(k){if(k===null){Y(t.exit("chunkFlow"),!0),B(0),t.consume(k);return}return me(k)?(t.consume(k),Y(t.exit("chunkFlow")),o=0,a.interrupt=void 0,d):(t.consume(k),L)}function Y(k,Q){const ee=a.sliceStream(k);if(Q&&ee.push(null),k.previous=f,f&&(f.next=k),f=k,s.defineSkip(k.start),s.write(ee),a.parser.lazy[k.start.line]){let R=s.events.length;for(;R--;)if(s.events[R][1].start.offset<h&&(!s.events[R][1].end||s.events[R][1].end.offset>h))return;const K=a.events.length;let ie=K,oe,pe;for(;ie--;)if(a.events[ie][0]==="exit"&&a.events[ie][1].type==="chunkFlow"){if(oe){pe=a.events[ie][1].end;break}oe=!0}for(B(o),R=K;R<a.events.length;)a.events[R][1].end={...pe},R++;pt(a.events,ie+1,0,a.events.slice(K)),a.events.length=R}}function B(k){let Q=r.length;for(;Q-- >k;){const ee=r[Q];a.containerState=ee[1],ee[0].exit.call(a,t)}r.length=k}function V(){s.write([null]),f=void 0,s=void 0,a.containerState._closeFlow=void 0}}function o1(t,a,r){return Fe(t,t.attempt(this.parser.constructs.document,a,r),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function fp(t){if(t===null||On(t)||t1(t))return 1;if(n1(t))return 2}function Dc(t,a,r){const o=[];let s=-1;for(;++s<t.length;){const f=t[s].resolveAll;f&&!o.includes(f)&&(a=f(a,r),o.push(f))}return a}const mc={name:"attention",resolveAll:u1,tokenize:s1};function u1(t,a){let r=-1,o,s,f,h,d,g,p,b;for(;++r<t.length;)if(t[r][0]==="enter"&&t[r][1].type==="attentionSequence"&&t[r][1]._close){for(o=r;o--;)if(t[o][0]==="exit"&&t[o][1].type==="attentionSequence"&&t[o][1]._open&&a.sliceSerialize(t[o][1]).charCodeAt(0)===a.sliceSerialize(t[r][1]).charCodeAt(0)){if((t[o][1]._close||t[r][1]._open)&&(t[r][1].end.offset-t[r][1].start.offset)%3&&!((t[o][1].end.offset-t[o][1].start.offset+t[r][1].end.offset-t[r][1].start.offset)%3))continue;g=t[o][1].end.offset-t[o][1].start.offset>1&&t[r][1].end.offset-t[r][1].start.offset>1?2:1;const y={...t[o][1].end},S={...t[r][1].start};hp(y,-g),hp(S,g),h={type:g>1?"strongSequence":"emphasisSequence",start:y,end:{...t[o][1].end}},d={type:g>1?"strongSequence":"emphasisSequence",start:{...t[r][1].start},end:S},f={type:g>1?"strongText":"emphasisText",start:{...t[o][1].end},end:{...t[r][1].start}},s={type:g>1?"strong":"emphasis",start:{...h.start},end:{...d.end}},t[o][1].end={...h.start},t[r][1].start={...d.end},p=[],t[o][1].end.offset-t[o][1].start.offset&&(p=it(p,[["enter",t[o][1],a],["exit",t[o][1],a]])),p=it(p,[["enter",s,a],["enter",h,a],["exit",h,a],["enter",f,a]]),p=it(p,Dc(a.parser.constructs.insideSpan.null,t.slice(o+1,r),a)),p=it(p,[["exit",f,a],["enter",d,a],["exit",d,a],["exit",s,a]]),t[r][1].end.offset-t[r][1].start.offset?(b=2,p=it(p,[["enter",t[r][1],a],["exit",t[r][1],a]])):b=0,pt(t,o-1,r-o+3,p),r=o+p.length-b-2;break}}for(r=-1;++r<t.length;)t[r][1].type==="attentionSequence"&&(t[r][1].type="data");return t}function s1(t,a){const r=this.parser.constructs.attentionMarkers.null,o=this.previous,s=fp(o);let f;return h;function h(g){return f=g,t.enter("attentionSequence"),d(g)}function d(g){if(g===f)return t.consume(g),d;const p=t.exit("attentionSequence"),b=fp(g),y=!b||b===2&&s||r.includes(g),S=!s||s===2&&b||r.includes(o);return p._open=!!(f===42?y:y&&(s||!S)),p._close=!!(f===42?S:S&&(b||!y)),a(g)}}function hp(t,a){t.column+=a,t.offset+=a,t._bufferIndex+=a}const c1={name:"autolink",tokenize:f1};function f1(t,a,r){let o=0;return s;function s(_){return t.enter("autolink"),t.enter("autolinkMarker"),t.consume(_),t.exit("autolinkMarker"),t.enter("autolinkProtocol"),f}function f(_){return dt(_)?(t.consume(_),h):_===64?r(_):p(_)}function h(_){return _===43||_===45||_===46||Vn(_)?(o=1,d(_)):p(_)}function d(_){return _===58?(t.consume(_),o=0,g):(_===43||_===45||_===46||Vn(_))&&o++<32?(t.consume(_),d):(o=0,p(_))}function g(_){return _===62?(t.exit("autolinkProtocol"),t.enter("autolinkMarker"),t.consume(_),t.exit("autolinkMarker"),t.exit("autolink"),a):_===null||_===32||_===60||hc(_)?r(_):(t.consume(_),g)}function p(_){return _===64?(t.consume(_),b):Pv(_)?(t.consume(_),p):r(_)}function b(_){return Vn(_)?y(_):r(_)}function y(_){return _===46?(t.consume(_),o=0,b):_===62?(t.exit("autolinkProtocol").type="autolinkEmail",t.enter("autolinkMarker"),t.consume(_),t.exit("autolinkMarker"),t.exit("autolink"),a):S(_)}function S(_){if((_===45||Vn(_))&&o++<63){const j=_===45?S:y;return t.consume(_),j}return r(_)}}const _o={partial:!0,tokenize:h1};function h1(t,a,r){return o;function o(f){return ze(f)?Fe(t,s,"linePrefix")(f):s(f)}function s(f){return f===null||me(f)?a(f):r(f)}}const dg={continuation:{tokenize:m1},exit:p1,name:"blockQuote",tokenize:d1};function d1(t,a,r){const o=this;return s;function s(h){if(h===62){const d=o.containerState;return d.open||(t.enter("blockQuote",{_container:!0}),d.open=!0),t.enter("blockQuotePrefix"),t.enter("blockQuoteMarker"),t.consume(h),t.exit("blockQuoteMarker"),f}return r(h)}function f(h){return ze(h)?(t.enter("blockQuotePrefixWhitespace"),t.consume(h),t.exit("blockQuotePrefixWhitespace"),t.exit("blockQuotePrefix"),a):(t.exit("blockQuotePrefix"),a(h))}}function m1(t,a,r){const o=this;return s;function s(h){return ze(h)?Fe(t,f,"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(h):f(h)}function f(h){return t.attempt(dg,a,r)(h)}}function p1(t){t.exit("blockQuote")}const mg={name:"characterEscape",tokenize:g1};function g1(t,a,r){return o;function o(f){return t.enter("characterEscape"),t.enter("escapeMarker"),t.consume(f),t.exit("escapeMarker"),s}function s(f){return e1(f)?(t.enter("characterEscapeValue"),t.consume(f),t.exit("characterEscapeValue"),t.exit("characterEscape"),a):r(f)}}const pg={name:"characterReference",tokenize:y1};function y1(t,a,r){const o=this;let s=0,f,h;return d;function d(y){return t.enter("characterReference"),t.enter("characterReferenceMarker"),t.consume(y),t.exit("characterReferenceMarker"),g}function g(y){return y===35?(t.enter("characterReferenceMarkerNumeric"),t.consume(y),t.exit("characterReferenceMarkerNumeric"),p):(t.enter("characterReferenceValue"),f=31,h=Vn,b(y))}function p(y){return y===88||y===120?(t.enter("characterReferenceMarkerHexadecimal"),t.consume(y),t.exit("characterReferenceMarkerHexadecimal"),t.enter("characterReferenceValue"),f=6,h=$v,b):(t.enter("characterReferenceValue"),f=7,h=dc,b(y))}function b(y){if(y===59&&s){const S=t.exit("characterReferenceValue");return h===Vn&&!Nc(o.sliceSerialize(S))?r(y):(t.enter("characterReferenceMarker"),t.consume(y),t.exit("characterReferenceMarker"),t.exit("characterReference"),a)}return h(y)&&s++<f?(t.consume(y),b):r(y)}}const dp={partial:!0,tokenize:v1},mp={concrete:!0,name:"codeFenced",tokenize:b1};function b1(t,a,r){const o=this,s={partial:!0,tokenize:ee};let f=0,h=0,d;return g;function g(R){return p(R)}function p(R){const K=o.events[o.events.length-1];return f=K&&K[1].type==="linePrefix"?K[2].sliceSerialize(K[1],!0).length:0,d=R,t.enter("codeFenced"),t.enter("codeFencedFence"),t.enter("codeFencedFenceSequence"),b(R)}function b(R){return R===d?(h++,t.consume(R),b):h<3?r(R):(t.exit("codeFencedFenceSequence"),ze(R)?Fe(t,y,"whitespace")(R):y(R))}function y(R){return R===null||me(R)?(t.exit("codeFencedFence"),o.interrupt?a(R):t.check(dp,L,Q)(R)):(t.enter("codeFencedFenceInfo"),t.enter("chunkString",{contentType:"string"}),S(R))}function S(R){return R===null||me(R)?(t.exit("chunkString"),t.exit("codeFencedFenceInfo"),y(R)):ze(R)?(t.exit("chunkString"),t.exit("codeFencedFenceInfo"),Fe(t,_,"whitespace")(R)):R===96&&R===d?r(R):(t.consume(R),S)}function _(R){return R===null||me(R)?y(R):(t.enter("codeFencedFenceMeta"),t.enter("chunkString",{contentType:"string"}),j(R))}function j(R){return R===null||me(R)?(t.exit("chunkString"),t.exit("codeFencedFenceMeta"),y(R)):R===96&&R===d?r(R):(t.consume(R),j)}function L(R){return t.attempt(s,Q,Y)(R)}function Y(R){return t.enter("lineEnding"),t.consume(R),t.exit("lineEnding"),B}function B(R){return f>0&&ze(R)?Fe(t,V,"linePrefix",f+1)(R):V(R)}function V(R){return R===null||me(R)?t.check(dp,L,Q)(R):(t.enter("codeFlowValue"),k(R))}function k(R){return R===null||me(R)?(t.exit("codeFlowValue"),V(R)):(t.consume(R),k)}function Q(R){return t.exit("codeFenced"),a(R)}function ee(R,K,ie){let oe=0;return pe;function pe(F){return R.enter("lineEnding"),R.consume(F),R.exit("lineEnding"),ne}function ne(F){return R.enter("codeFencedFence"),ze(F)?Fe(R,W,"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(F):W(F)}function W(F){return F===d?(R.enter("codeFencedFenceSequence"),Se(F)):ie(F)}function Se(F){return F===d?(oe++,R.consume(F),Se):oe>=h?(R.exit("codeFencedFenceSequence"),ze(F)?Fe(R,le,"whitespace")(F):le(F)):ie(F)}function le(F){return F===null||me(F)?(R.exit("codeFencedFence"),K(F)):ie(F)}}}function v1(t,a,r){const o=this;return s;function s(h){return h===null?r(h):(t.enter("lineEnding"),t.consume(h),t.exit("lineEnding"),f)}function f(h){return o.parser.lazy[o.now().line]?r(h):a(h)}}const Ks={name:"codeIndented",tokenize:S1},_1={partial:!0,tokenize:w1};function S1(t,a,r){const o=this;return s;function s(p){return t.enter("codeIndented"),Fe(t,f,"linePrefix",5)(p)}function f(p){const b=o.events[o.events.length-1];return b&&b[1].type==="linePrefix"&&b[2].sliceSerialize(b[1],!0).length>=4?h(p):r(p)}function h(p){return p===null?g(p):me(p)?t.attempt(_1,h,g)(p):(t.enter("codeFlowValue"),d(p))}function d(p){return p===null||me(p)?(t.exit("codeFlowValue"),h(p)):(t.consume(p),d)}function g(p){return t.exit("codeIndented"),a(p)}}function w1(t,a,r){const o=this;return s;function s(h){return o.parser.lazy[o.now().line]?r(h):me(h)?(t.enter("lineEnding"),t.consume(h),t.exit("lineEnding"),s):Fe(t,f,"linePrefix",5)(h)}function f(h){const d=o.events[o.events.length-1];return d&&d[1].type==="linePrefix"&&d[2].sliceSerialize(d[1],!0).length>=4?a(h):me(h)?s(h):r(h)}}const x1={name:"codeText",previous:A1,resolve:T1,tokenize:E1};function T1(t){let a=t.length-4,r=3,o,s;if((t[r][1].type==="lineEnding"||t[r][1].type==="space")&&(t[a][1].type==="lineEnding"||t[a][1].type==="space")){for(o=r;++o<a;)if(t[o][1].type==="codeTextData"){t[r][1].type="codeTextPadding",t[a][1].type="codeTextPadding",r+=2,a-=2;break}}for(o=r-1,a++;++o<=a;)s===void 0?o!==a&&t[o][1].type!=="lineEnding"&&(s=o):(o===a||t[o][1].type==="lineEnding")&&(t[s][1].type="codeTextData",o!==s+2&&(t[s][1].end=t[o-1][1].end,t.splice(s+2,o-s-2),a-=o-s-2,o=s+2),s=void 0);return t}function A1(t){return t!==96||this.events[this.events.length-1][1].type==="characterEscape"}function E1(t,a,r){let o=0,s,f;return h;function h(y){return t.enter("codeText"),t.enter("codeTextSequence"),d(y)}function d(y){return y===96?(t.consume(y),o++,d):(t.exit("codeTextSequence"),g(y))}function g(y){return y===null?r(y):y===32?(t.enter("space"),t.consume(y),t.exit("space"),g):y===96?(f=t.enter("codeTextSequence"),s=0,b(y)):me(y)?(t.enter("lineEnding"),t.consume(y),t.exit("lineEnding"),g):(t.enter("codeTextData"),p(y))}function p(y){return y===null||y===32||y===96||me(y)?(t.exit("codeTextData"),g(y)):(t.consume(y),p)}function b(y){return y===96?(t.consume(y),s++,b):s===o?(t.exit("codeTextSequence"),t.exit("codeText"),a(y)):(f.type="codeTextData",p(y))}}class k1{constructor(a){this.left=a?[...a]:[],this.right=[]}get(a){if(a<0||a>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+a+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return a<this.left.length?this.left[a]:this.right[this.right.length-a+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(a,r){const o=r??Number.POSITIVE_INFINITY;return o<this.left.length?this.left.slice(a,o):a>this.left.length?this.right.slice(this.right.length-o+this.left.length,this.right.length-a+this.left.length).reverse():this.left.slice(a).concat(this.right.slice(this.right.length-o+this.left.length).reverse())}splice(a,r,o){const s=r||0;this.setCursor(Math.trunc(a));const f=this.right.splice(this.right.length-s,Number.POSITIVE_INFINITY);return o&&Na(this.left,o),f.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(a){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(a)}pushMany(a){this.setCursor(Number.POSITIVE_INFINITY),Na(this.left,a)}unshift(a){this.setCursor(0),this.right.push(a)}unshiftMany(a){this.setCursor(0),Na(this.right,a.reverse())}setCursor(a){if(!(a===this.left.length||a>this.left.length&&this.right.length===0||a<0&&this.left.length===0))if(a<this.left.length){const r=this.left.splice(a,Number.POSITIVE_INFINITY);Na(this.right,r.reverse())}else{const r=this.right.splice(this.left.length+this.right.length-a,Number.POSITIVE_INFINITY);Na(this.left,r.reverse())}}}function Na(t,a){let r=0;if(a.length<1e4)t.push(...a);else for(;r<a.length;)t.push(...a.slice(r,r+1e4)),r+=1e4}function gg(t){const a={};let r=-1,o,s,f,h,d,g,p;const b=new k1(t);for(;++r<b.length;){for(;r in a;)r=a[r];if(o=b.get(r),r&&o[1].type==="chunkFlow"&&b.get(r-1)[1].type==="listItemPrefix"&&(g=o[1]._tokenizer.events,f=0,f<g.length&&g[f][1].type==="lineEndingBlank"&&(f+=2),f<g.length&&g[f][1].type==="content"))for(;++f<g.length&&g[f][1].type!=="content";)g[f][1].type==="chunkText"&&(g[f][1]._isInFirstContentOfListItem=!0,f++);if(o[0]==="enter")o[1].contentType&&(Object.assign(a,C1(b,r)),r=a[r],p=!0);else if(o[1]._container){for(f=r,s=void 0;f--;)if(h=b.get(f),h[1].type==="lineEnding"||h[1].type==="lineEndingBlank")h[0]==="enter"&&(s&&(b.get(s)[1].type="lineEndingBlank"),h[1].type="lineEnding",s=f);else if(!(h[1].type==="linePrefix"||h[1].type==="listItemIndent"))break;s&&(o[1].end={...b.get(s)[1].start},d=b.slice(s,r),d.unshift(o),b.splice(s,r-s+1,d))}}return pt(t,0,Number.POSITIVE_INFINITY,b.slice(0)),!p}function C1(t,a){const r=t.get(a)[1],o=t.get(a)[2];let s=a-1;const f=[];let h=r._tokenizer;h||(h=o.parser[r.contentType](r.start),r._contentTypeTextTrailing&&(h._contentTypeTextTrailing=!0));const d=h.events,g=[],p={};let b,y,S=-1,_=r,j=0,L=0;const Y=[L];for(;_;){for(;t.get(++s)[1]!==_;);f.push(s),_._tokenizer||(b=o.sliceStream(_),_.next||b.push(null),y&&h.defineSkip(_.start),_._isInFirstContentOfListItem&&(h._gfmTasklistFirstContentOfListItem=!0),h.write(b),_._isInFirstContentOfListItem&&(h._gfmTasklistFirstContentOfListItem=void 0)),y=_,_=_.next}for(_=r;++S<d.length;)d[S][0]==="exit"&&d[S-1][0]==="enter"&&d[S][1].type===d[S-1][1].type&&d[S][1].start.line!==d[S][1].end.line&&(L=S+1,Y.push(L),_._tokenizer=void 0,_.previous=void 0,_=_.next);for(h.events=[],_?(_._tokenizer=void 0,_.previous=void 0):Y.pop(),S=Y.length;S--;){const B=d.slice(Y[S],Y[S+1]),V=f.pop();g.push([V,V+B.length-1]),t.splice(V,2,B)}for(g.reverse(),S=-1;++S<g.length;)p[j+g[S][0]]=j+g[S][1],j+=g[S][1]-g[S][0]-1;return p}const M1={resolve:D1,tokenize:j1},N1={partial:!0,tokenize:z1};function D1(t){return gg(t),t}function j1(t,a){let r;return o;function o(d){return t.enter("content"),r=t.enter("chunkContent",{contentType:"content"}),s(d)}function s(d){return d===null?f(d):me(d)?t.check(N1,h,f)(d):(t.consume(d),s)}function f(d){return t.exit("chunkContent"),t.exit("content"),a(d)}function h(d){return t.consume(d),t.exit("chunkContent"),r.next=t.enter("chunkContent",{contentType:"content",previous:r}),r=r.next,s}}function z1(t,a,r){const o=this;return s;function s(h){return t.exit("chunkContent"),t.enter("lineEnding"),t.consume(h),t.exit("lineEnding"),Fe(t,f,"linePrefix")}function f(h){if(h===null||me(h))return r(h);const d=o.events[o.events.length-1];return!o.parser.constructs.disable.null.includes("codeIndented")&&d&&d[1].type==="linePrefix"&&d[2].sliceSerialize(d[1],!0).length>=4?a(h):t.interrupt(o.parser.constructs.flow,r,a)(h)}}function yg(t,a,r,o,s,f,h,d,g){const p=g||Number.POSITIVE_INFINITY;let b=0;return y;function y(B){return B===60?(t.enter(o),t.enter(s),t.enter(f),t.consume(B),t.exit(f),S):B===null||B===32||B===41||hc(B)?r(B):(t.enter(o),t.enter(h),t.enter(d),t.enter("chunkString",{contentType:"string"}),L(B))}function S(B){return B===62?(t.enter(f),t.consume(B),t.exit(f),t.exit(s),t.exit(o),a):(t.enter(d),t.enter("chunkString",{contentType:"string"}),_(B))}function _(B){return B===62?(t.exit("chunkString"),t.exit(d),S(B)):B===null||B===60||me(B)?r(B):(t.consume(B),B===92?j:_)}function j(B){return B===60||B===62||B===92?(t.consume(B),_):_(B)}function L(B){return!b&&(B===null||B===41||On(B))?(t.exit("chunkString"),t.exit(d),t.exit(h),t.exit(o),a(B)):b<p&&B===40?(t.consume(B),b++,L):B===41?(t.consume(B),b--,L):B===null||B===32||B===40||hc(B)?r(B):(t.consume(B),B===92?Y:L)}function Y(B){return B===40||B===41||B===92?(t.consume(B),L):L(B)}}function bg(t,a,r,o,s,f){const h=this;let d=0,g;return p;function p(_){return t.enter(o),t.enter(s),t.consume(_),t.exit(s),t.enter(f),b}function b(_){return d>999||_===null||_===91||_===93&&!g||_===94&&!d&&"_hiddenFootnoteSupport"in h.parser.constructs?r(_):_===93?(t.exit(f),t.enter(s),t.consume(_),t.exit(s),t.exit(o),a):me(_)?(t.enter("lineEnding"),t.consume(_),t.exit("lineEnding"),b):(t.enter("chunkString",{contentType:"string"}),y(_))}function y(_){return _===null||_===91||_===93||me(_)||d++>999?(t.exit("chunkString"),b(_)):(t.consume(_),g||(g=!ze(_)),_===92?S:y)}function S(_){return _===91||_===92||_===93?(t.consume(_),d++,y):y(_)}}function vg(t,a,r,o,s,f){let h;return d;function d(S){return S===34||S===39||S===40?(t.enter(o),t.enter(s),t.consume(S),t.exit(s),h=S===40?41:S,g):r(S)}function g(S){return S===h?(t.enter(s),t.consume(S),t.exit(s),t.exit(o),a):(t.enter(f),p(S))}function p(S){return S===h?(t.exit(f),g(h)):S===null?r(S):me(S)?(t.enter("lineEnding"),t.consume(S),t.exit("lineEnding"),Fe(t,p,"linePrefix")):(t.enter("chunkString",{contentType:"string"}),b(S))}function b(S){return S===h||S===null||me(S)?(t.exit("chunkString"),p(S)):(t.consume(S),S===92?y:b)}function y(S){return S===h||S===92?(t.consume(S),b):b(S)}}function Oa(t,a){let r;return o;function o(s){return me(s)?(t.enter("lineEnding"),t.consume(s),t.exit("lineEnding"),r=!0,o):ze(s)?Fe(t,o,r?"linePrefix":"lineSuffix")(s):a(s)}}const O1={name:"definition",tokenize:L1},R1={partial:!0,tokenize:B1};function L1(t,a,r){const o=this;let s;return f;function f(_){return t.enter("definition"),h(_)}function h(_){return bg.call(o,t,d,r,"definitionLabel","definitionLabelMarker","definitionLabelString")(_)}function d(_){return s=Ml(o.sliceSerialize(o.events[o.events.length-1][1]).slice(1,-1)),_===58?(t.enter("definitionMarker"),t.consume(_),t.exit("definitionMarker"),g):r(_)}function g(_){return On(_)?Oa(t,p)(_):p(_)}function p(_){return yg(t,b,r,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(_)}function b(_){return t.attempt(R1,y,y)(_)}function y(_){return ze(_)?Fe(t,S,"whitespace")(_):S(_)}function S(_){return _===null||me(_)?(t.exit("definition"),o.parser.defined.push(s),a(_)):r(_)}}function B1(t,a,r){return o;function o(d){return On(d)?Oa(t,s)(d):r(d)}function s(d){return vg(t,f,r,"definitionTitle","definitionTitleMarker","definitionTitleString")(d)}function f(d){return ze(d)?Fe(t,h,"whitespace")(d):h(d)}function h(d){return d===null||me(d)?a(d):r(d)}}const H1={name:"hardBreakEscape",tokenize:U1};function U1(t,a,r){return o;function o(f){return t.enter("hardBreakEscape"),t.consume(f),s}function s(f){return me(f)?(t.exit("hardBreakEscape"),a(f)):r(f)}}const G1={name:"headingAtx",resolve:q1,tokenize:I1};function q1(t,a){let r=t.length-2,o=3,s,f;return t[o][1].type==="whitespace"&&(o+=2),r-2>o&&t[r][1].type==="whitespace"&&(r-=2),t[r][1].type==="atxHeadingSequence"&&(o===r-1||r-4>o&&t[r-2][1].type==="whitespace")&&(r-=o+1===r?2:4),r>o&&(s={type:"atxHeadingText",start:t[o][1].start,end:t[r][1].end},f={type:"chunkText",start:t[o][1].start,end:t[r][1].end,contentType:"text"},pt(t,o,r-o+1,[["enter",s,a],["enter",f,a],["exit",f,a],["exit",s,a]])),t}function I1(t,a,r){let o=0;return s;function s(b){return t.enter("atxHeading"),f(b)}function f(b){return t.enter("atxHeadingSequence"),h(b)}function h(b){return b===35&&o++<6?(t.consume(b),h):b===null||On(b)?(t.exit("atxHeadingSequence"),d(b)):r(b)}function d(b){return b===35?(t.enter("atxHeadingSequence"),g(b)):b===null||me(b)?(t.exit("atxHeading"),a(b)):ze(b)?Fe(t,d,"whitespace")(b):(t.enter("atxHeadingText"),p(b))}function g(b){return b===35?(t.consume(b),g):(t.exit("atxHeadingSequence"),d(b))}function p(b){return b===null||b===35||On(b)?(t.exit("atxHeadingText"),d(b)):(t.consume(b),p)}}const Y1=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],pp=["pre","script","style","textarea"],F1={concrete:!0,name:"htmlFlow",resolveTo:Q1,tokenize:K1},V1={partial:!0,tokenize:J1},X1={partial:!0,tokenize:Z1};function Q1(t){let a=t.length;for(;a--&&!(t[a][0]==="enter"&&t[a][1].type==="htmlFlow"););return a>1&&t[a-2][1].type==="linePrefix"&&(t[a][1].start=t[a-2][1].start,t[a+1][1].start=t[a-2][1].start,t.splice(a-2,2)),t}function K1(t,a,r){const o=this;let s,f,h,d,g;return p;function p(w){return b(w)}function b(w){return t.enter("htmlFlow"),t.enter("htmlFlowData"),t.consume(w),y}function y(w){return w===33?(t.consume(w),S):w===47?(t.consume(w),f=!0,L):w===63?(t.consume(w),s=3,o.interrupt?a:x):dt(w)?(t.consume(w),h=String.fromCharCode(w),Y):r(w)}function S(w){return w===45?(t.consume(w),s=2,_):w===91?(t.consume(w),s=5,d=0,j):dt(w)?(t.consume(w),s=4,o.interrupt?a:x):r(w)}function _(w){return w===45?(t.consume(w),o.interrupt?a:x):r(w)}function j(w){const $="CDATA[";return w===$.charCodeAt(d++)?(t.consume(w),d===$.length?o.interrupt?a:W:j):r(w)}function L(w){return dt(w)?(t.consume(w),h=String.fromCharCode(w),Y):r(w)}function Y(w){if(w===null||w===47||w===62||On(w)){const $=w===47,he=h.toLowerCase();return!$&&!f&&pp.includes(he)?(s=1,o.interrupt?a(w):W(w)):Y1.includes(h.toLowerCase())?(s=6,$?(t.consume(w),B):o.interrupt?a(w):W(w)):(s=7,o.interrupt&&!o.parser.lazy[o.now().line]?r(w):f?V(w):k(w))}return w===45||Vn(w)?(t.consume(w),h+=String.fromCharCode(w),Y):r(w)}function B(w){return w===62?(t.consume(w),o.interrupt?a:W):r(w)}function V(w){return ze(w)?(t.consume(w),V):pe(w)}function k(w){return w===47?(t.consume(w),pe):w===58||w===95||dt(w)?(t.consume(w),Q):ze(w)?(t.consume(w),k):pe(w)}function Q(w){return w===45||w===46||w===58||w===95||Vn(w)?(t.consume(w),Q):ee(w)}function ee(w){return w===61?(t.consume(w),R):ze(w)?(t.consume(w),ee):k(w)}function R(w){return w===null||w===60||w===61||w===62||w===96?r(w):w===34||w===39?(t.consume(w),g=w,K):ze(w)?(t.consume(w),R):ie(w)}function K(w){return w===g?(t.consume(w),g=null,oe):w===null||me(w)?r(w):(t.consume(w),K)}function ie(w){return w===null||w===34||w===39||w===47||w===60||w===61||w===62||w===96||On(w)?ee(w):(t.consume(w),ie)}function oe(w){return w===47||w===62||ze(w)?k(w):r(w)}function pe(w){return w===62?(t.consume(w),ne):r(w)}function ne(w){return w===null||me(w)?W(w):ze(w)?(t.consume(w),ne):r(w)}function W(w){return w===45&&s===2?(t.consume(w),M):w===60&&s===1?(t.consume(w),X):w===62&&s===4?(t.consume(w),A):w===63&&s===3?(t.consume(w),x):w===93&&s===5?(t.consume(w),be):me(w)&&(s===6||s===7)?(t.exit("htmlFlowData"),t.check(V1,U,Se)(w)):w===null||me(w)?(t.exit("htmlFlowData"),Se(w)):(t.consume(w),W)}function Se(w){return t.check(X1,le,U)(w)}function le(w){return t.enter("lineEnding"),t.consume(w),t.exit("lineEnding"),F}function F(w){return w===null||me(w)?Se(w):(t.enter("htmlFlowData"),W(w))}function M(w){return w===45?(t.consume(w),x):W(w)}function X(w){return w===47?(t.consume(w),h="",ae):W(w)}function ae(w){if(w===62){const $=h.toLowerCase();return pp.includes($)?(t.consume(w),A):W(w)}return dt(w)&&h.length<8?(t.consume(w),h+=String.fromCharCode(w),ae):W(w)}function be(w){return w===93?(t.consume(w),x):W(w)}function x(w){return w===62?(t.consume(w),A):w===45&&s===2?(t.consume(w),x):W(w)}function A(w){return w===null||me(w)?(t.exit("htmlFlowData"),U(w)):(t.consume(w),A)}function U(w){return t.exit("htmlFlow"),a(w)}}function Z1(t,a,r){const o=this;return s;function s(h){return me(h)?(t.enter("lineEnding"),t.consume(h),t.exit("lineEnding"),f):r(h)}function f(h){return o.parser.lazy[o.now().line]?r(h):a(h)}}function J1(t,a,r){return o;function o(s){return t.enter("lineEnding"),t.consume(s),t.exit("lineEnding"),t.attempt(_o,a,r)}}const W1={name:"htmlText",tokenize:P1};function P1(t,a,r){const o=this;let s,f,h;return d;function d(x){return t.enter("htmlText"),t.enter("htmlTextData"),t.consume(x),g}function g(x){return x===33?(t.consume(x),p):x===47?(t.consume(x),ee):x===63?(t.consume(x),k):dt(x)?(t.consume(x),ie):r(x)}function p(x){return x===45?(t.consume(x),b):x===91?(t.consume(x),f=0,j):dt(x)?(t.consume(x),V):r(x)}function b(x){return x===45?(t.consume(x),_):r(x)}function y(x){return x===null?r(x):x===45?(t.consume(x),S):me(x)?(h=y,X(x)):(t.consume(x),y)}function S(x){return x===45?(t.consume(x),_):y(x)}function _(x){return x===62?M(x):x===45?S(x):y(x)}function j(x){const A="CDATA[";return x===A.charCodeAt(f++)?(t.consume(x),f===A.length?L:j):r(x)}function L(x){return x===null?r(x):x===93?(t.consume(x),Y):me(x)?(h=L,X(x)):(t.consume(x),L)}function Y(x){return x===93?(t.consume(x),B):L(x)}function B(x){return x===62?M(x):x===93?(t.consume(x),B):L(x)}function V(x){return x===null||x===62?M(x):me(x)?(h=V,X(x)):(t.consume(x),V)}function k(x){return x===null?r(x):x===63?(t.consume(x),Q):me(x)?(h=k,X(x)):(t.consume(x),k)}function Q(x){return x===62?M(x):k(x)}function ee(x){return dt(x)?(t.consume(x),R):r(x)}function R(x){return x===45||Vn(x)?(t.consume(x),R):K(x)}function K(x){return me(x)?(h=K,X(x)):ze(x)?(t.consume(x),K):M(x)}function ie(x){return x===45||Vn(x)?(t.consume(x),ie):x===47||x===62||On(x)?oe(x):r(x)}function oe(x){return x===47?(t.consume(x),M):x===58||x===95||dt(x)?(t.consume(x),pe):me(x)?(h=oe,X(x)):ze(x)?(t.consume(x),oe):M(x)}function pe(x){return x===45||x===46||x===58||x===95||Vn(x)?(t.consume(x),pe):ne(x)}function ne(x){return x===61?(t.consume(x),W):me(x)?(h=ne,X(x)):ze(x)?(t.consume(x),ne):oe(x)}function W(x){return x===null||x===60||x===61||x===62||x===96?r(x):x===34||x===39?(t.consume(x),s=x,Se):me(x)?(h=W,X(x)):ze(x)?(t.consume(x),W):(t.consume(x),le)}function Se(x){return x===s?(t.consume(x),s=void 0,F):x===null?r(x):me(x)?(h=Se,X(x)):(t.consume(x),Se)}function le(x){return x===null||x===34||x===39||x===60||x===61||x===96?r(x):x===47||x===62||On(x)?oe(x):(t.consume(x),le)}function F(x){return x===47||x===62||On(x)?oe(x):r(x)}function M(x){return x===62?(t.consume(x),t.exit("htmlTextData"),t.exit("htmlText"),a):r(x)}function X(x){return t.exit("htmlTextData"),t.enter("lineEnding"),t.consume(x),t.exit("lineEnding"),ae}function ae(x){return ze(x)?Fe(t,be,"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(x):be(x)}function be(x){return t.enter("htmlTextData"),h(x)}}const jc={name:"labelEnd",resolveAll:t_,resolveTo:i_,tokenize:l_},$1={tokenize:a_},e_={tokenize:r_},n_={tokenize:o_};function t_(t){let a=-1;const r=[];for(;++a<t.length;){const o=t[a][1];if(r.push(t[a]),o.type==="labelImage"||o.type==="labelLink"||o.type==="labelEnd"){const s=o.type==="labelImage"?4:2;o.type="data",a+=s}}return t.length!==r.length&&pt(t,0,t.length,r),t}function i_(t,a){let r=t.length,o=0,s,f,h,d;for(;r--;)if(s=t[r][1],f){if(s.type==="link"||s.type==="labelLink"&&s._inactive)break;t[r][0]==="enter"&&s.type==="labelLink"&&(s._inactive=!0)}else if(h){if(t[r][0]==="enter"&&(s.type==="labelImage"||s.type==="labelLink")&&!s._balanced&&(f=r,s.type!=="labelLink")){o=2;break}}else s.type==="labelEnd"&&(h=r);const g={type:t[f][1].type==="labelLink"?"link":"image",start:{...t[f][1].start},end:{...t[t.length-1][1].end}},p={type:"label",start:{...t[f][1].start},end:{...t[h][1].end}},b={type:"labelText",start:{...t[f+o+2][1].end},end:{...t[h-2][1].start}};return d=[["enter",g,a],["enter",p,a]],d=it(d,t.slice(f+1,f+o+3)),d=it(d,[["enter",b,a]]),d=it(d,Dc(a.parser.constructs.insideSpan.null,t.slice(f+o+4,h-3),a)),d=it(d,[["exit",b,a],t[h-2],t[h-1],["exit",p,a]]),d=it(d,t.slice(h+1)),d=it(d,[["exit",g,a]]),pt(t,f,t.length,d),t}function l_(t,a,r){const o=this;let s=o.events.length,f,h;for(;s--;)if((o.events[s][1].type==="labelImage"||o.events[s][1].type==="labelLink")&&!o.events[s][1]._balanced){f=o.events[s][1];break}return d;function d(S){return f?f._inactive?y(S):(h=o.parser.defined.includes(Ml(o.sliceSerialize({start:f.end,end:o.now()}))),t.enter("labelEnd"),t.enter("labelMarker"),t.consume(S),t.exit("labelMarker"),t.exit("labelEnd"),g):r(S)}function g(S){return S===40?t.attempt($1,b,h?b:y)(S):S===91?t.attempt(e_,b,h?p:y)(S):h?b(S):y(S)}function p(S){return t.attempt(n_,b,y)(S)}function b(S){return a(S)}function y(S){return f._balanced=!0,r(S)}}function a_(t,a,r){return o;function o(y){return t.enter("resource"),t.enter("resourceMarker"),t.consume(y),t.exit("resourceMarker"),s}function s(y){return On(y)?Oa(t,f)(y):f(y)}function f(y){return y===41?b(y):yg(t,h,d,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(y)}function h(y){return On(y)?Oa(t,g)(y):b(y)}function d(y){return r(y)}function g(y){return y===34||y===39||y===40?vg(t,p,r,"resourceTitle","resourceTitleMarker","resourceTitleString")(y):b(y)}function p(y){return On(y)?Oa(t,b)(y):b(y)}function b(y){return y===41?(t.enter("resourceMarker"),t.consume(y),t.exit("resourceMarker"),t.exit("resource"),a):r(y)}}function r_(t,a,r){const o=this;return s;function s(d){return bg.call(o,t,f,h,"reference","referenceMarker","referenceString")(d)}function f(d){return o.parser.defined.includes(Ml(o.sliceSerialize(o.events[o.events.length-1][1]).slice(1,-1)))?a(d):r(d)}function h(d){return r(d)}}function o_(t,a,r){return o;function o(f){return t.enter("reference"),t.enter("referenceMarker"),t.consume(f),t.exit("referenceMarker"),s}function s(f){return f===93?(t.enter("referenceMarker"),t.consume(f),t.exit("referenceMarker"),t.exit("reference"),a):r(f)}}const u_={name:"labelStartImage",resolveAll:jc.resolveAll,tokenize:s_};function s_(t,a,r){const o=this;return s;function s(d){return t.enter("labelImage"),t.enter("labelImageMarker"),t.consume(d),t.exit("labelImageMarker"),f}function f(d){return d===91?(t.enter("labelMarker"),t.consume(d),t.exit("labelMarker"),t.exit("labelImage"),h):r(d)}function h(d){return d===94&&"_hiddenFootnoteSupport"in o.parser.constructs?r(d):a(d)}}const c_={name:"labelStartLink",resolveAll:jc.resolveAll,tokenize:f_};function f_(t,a,r){const o=this;return s;function s(h){return t.enter("labelLink"),t.enter("labelMarker"),t.consume(h),t.exit("labelMarker"),t.exit("labelLink"),f}function f(h){return h===94&&"_hiddenFootnoteSupport"in o.parser.constructs?r(h):a(h)}}const Zs={name:"lineEnding",tokenize:h_};function h_(t,a){return r;function r(o){return t.enter("lineEnding"),t.consume(o),t.exit("lineEnding"),Fe(t,a,"linePrefix")}}const fo={name:"thematicBreak",tokenize:d_};function d_(t,a,r){let o=0,s;return f;function f(p){return t.enter("thematicBreak"),h(p)}function h(p){return s=p,d(p)}function d(p){return p===s?(t.enter("thematicBreakSequence"),g(p)):o>=3&&(p===null||me(p))?(t.exit("thematicBreak"),a(p)):r(p)}function g(p){return p===s?(t.consume(p),o++,g):(t.exit("thematicBreakSequence"),ze(p)?Fe(t,d,"whitespace")(p):d(p))}}const jn={continuation:{tokenize:y_},exit:v_,name:"list",tokenize:g_},m_={partial:!0,tokenize:__},p_={partial:!0,tokenize:b_};function g_(t,a,r){const o=this,s=o.events[o.events.length-1];let f=s&&s[1].type==="linePrefix"?s[2].sliceSerialize(s[1],!0).length:0,h=0;return d;function d(_){const j=o.containerState.type||(_===42||_===43||_===45?"listUnordered":"listOrdered");if(j==="listUnordered"?!o.containerState.marker||_===o.containerState.marker:dc(_)){if(o.containerState.type||(o.containerState.type=j,t.enter(j,{_container:!0})),j==="listUnordered")return t.enter("listItemPrefix"),_===42||_===45?t.check(fo,r,p)(_):p(_);if(!o.interrupt||_===49)return t.enter("listItemPrefix"),t.enter("listItemValue"),g(_)}return r(_)}function g(_){return dc(_)&&++h<10?(t.consume(_),g):(!o.interrupt||h<2)&&(o.containerState.marker?_===o.containerState.marker:_===41||_===46)?(t.exit("listItemValue"),p(_)):r(_)}function p(_){return t.enter("listItemMarker"),t.consume(_),t.exit("listItemMarker"),o.containerState.marker=o.containerState.marker||_,t.check(_o,o.interrupt?r:b,t.attempt(m_,S,y))}function b(_){return o.containerState.initialBlankLine=!0,f++,S(_)}function y(_){return ze(_)?(t.enter("listItemPrefixWhitespace"),t.consume(_),t.exit("listItemPrefixWhitespace"),S):r(_)}function S(_){return o.containerState.size=f+o.sliceSerialize(t.exit("listItemPrefix"),!0).length,a(_)}}function y_(t,a,r){const o=this;return o.containerState._closeFlow=void 0,t.check(_o,s,f);function s(d){return o.containerState.furtherBlankLines=o.containerState.furtherBlankLines||o.containerState.initialBlankLine,Fe(t,a,"listItemIndent",o.containerState.size+1)(d)}function f(d){return o.containerState.furtherBlankLines||!ze(d)?(o.containerState.furtherBlankLines=void 0,o.containerState.initialBlankLine=void 0,h(d)):(o.containerState.furtherBlankLines=void 0,o.containerState.initialBlankLine=void 0,t.attempt(p_,a,h)(d))}function h(d){return o.containerState._closeFlow=!0,o.interrupt=void 0,Fe(t,t.attempt(jn,a,r),"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(d)}}function b_(t,a,r){const o=this;return Fe(t,s,"listItemIndent",o.containerState.size+1);function s(f){const h=o.events[o.events.length-1];return h&&h[1].type==="listItemIndent"&&h[2].sliceSerialize(h[1],!0).length===o.containerState.size?a(f):r(f)}}function v_(t){t.exit(this.containerState.type)}function __(t,a,r){const o=this;return Fe(t,s,"listItemPrefixWhitespace",o.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function s(f){const h=o.events[o.events.length-1];return!ze(f)&&h&&h[1].type==="listItemPrefixWhitespace"?a(f):r(f)}}const gp={name:"setextUnderline",resolveTo:S_,tokenize:w_};function S_(t,a){let r=t.length,o,s,f;for(;r--;)if(t[r][0]==="enter"){if(t[r][1].type==="content"){o=r;break}t[r][1].type==="paragraph"&&(s=r)}else t[r][1].type==="content"&&t.splice(r,1),!f&&t[r][1].type==="definition"&&(f=r);const h={type:"setextHeading",start:{...t[o][1].start},end:{...t[t.length-1][1].end}};return t[s][1].type="setextHeadingText",f?(t.splice(s,0,["enter",h,a]),t.splice(f+1,0,["exit",t[o][1],a]),t[o][1].end={...t[f][1].end}):t[o][1]=h,t.push(["exit",h,a]),t}function w_(t,a,r){const o=this;let s;return f;function f(p){let b=o.events.length,y;for(;b--;)if(o.events[b][1].type!=="lineEnding"&&o.events[b][1].type!=="linePrefix"&&o.events[b][1].type!=="content"){y=o.events[b][1].type==="paragraph";break}return!o.parser.lazy[o.now().line]&&(o.interrupt||y)?(t.enter("setextHeadingLine"),s=p,h(p)):r(p)}function h(p){return t.enter("setextHeadingLineSequence"),d(p)}function d(p){return p===s?(t.consume(p),d):(t.exit("setextHeadingLineSequence"),ze(p)?Fe(t,g,"lineSuffix")(p):g(p))}function g(p){return p===null||me(p)?(t.exit("setextHeadingLine"),a(p)):r(p)}}const x_={tokenize:T_};function T_(t){const a=this,r=t.attempt(_o,o,t.attempt(this.parser.constructs.flowInitial,s,Fe(t,t.attempt(this.parser.constructs.flow,s,t.attempt(M1,s)),"linePrefix")));return r;function o(f){if(f===null){t.consume(f);return}return t.enter("lineEndingBlank"),t.consume(f),t.exit("lineEndingBlank"),a.currentConstruct=void 0,r}function s(f){if(f===null){t.consume(f);return}return t.enter("lineEnding"),t.consume(f),t.exit("lineEnding"),a.currentConstruct=void 0,r}}const A_={resolveAll:Sg()},E_=_g("string"),k_=_g("text");function _g(t){return{resolveAll:Sg(t==="text"?C_:void 0),tokenize:a};function a(r){const o=this,s=this.parser.constructs[t],f=r.attempt(s,h,d);return h;function h(b){return p(b)?f(b):d(b)}function d(b){if(b===null){r.consume(b);return}return r.enter("data"),r.consume(b),g}function g(b){return p(b)?(r.exit("data"),f(b)):(r.consume(b),g)}function p(b){if(b===null)return!0;const y=s[b];let S=-1;if(y)for(;++S<y.length;){const _=y[S];if(!_.previous||_.previous.call(o,o.previous))return!0}return!1}}}function Sg(t){return a;function a(r,o){let s=-1,f;for(;++s<=r.length;)f===void 0?r[s]&&r[s][1].type==="data"&&(f=s,s++):(!r[s]||r[s][1].type!=="data")&&(s!==f+2&&(r[f][1].end=r[s-1][1].end,r.splice(f+2,s-f-2),s=f+2),f=void 0);return t?t(r,o):r}}function C_(t,a){let r=0;for(;++r<=t.length;)if((r===t.length||t[r][1].type==="lineEnding")&&t[r-1][1].type==="data"){const o=t[r-1][1],s=a.sliceStream(o);let f=s.length,h=-1,d=0,g;for(;f--;){const p=s[f];if(typeof p=="string"){for(h=p.length;p.charCodeAt(h-1)===32;)d++,h--;if(h)break;h=-1}else if(p===-2)g=!0,d++;else if(p!==-1){f++;break}}if(a._contentTypeTextTrailing&&r===t.length&&(d=0),d){const p={type:r===t.length||g||d<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:f?h:o.start._bufferIndex+h,_index:o.start._index+f,line:o.end.line,column:o.end.column-d,offset:o.end.offset-d},end:{...o.end}};o.end={...p.start},o.start.offset===o.end.offset?Object.assign(o,p):(t.splice(r,0,["enter",p,a],["exit",p,a]),r+=2)}r++}return t}const M_={42:jn,43:jn,45:jn,48:jn,49:jn,50:jn,51:jn,52:jn,53:jn,54:jn,55:jn,56:jn,57:jn,62:dg},N_={91:O1},D_={[-2]:Ks,[-1]:Ks,32:Ks},j_={35:G1,42:fo,45:[gp,fo],60:F1,61:gp,95:fo,96:mp,126:mp},z_={38:pg,92:mg},O_={[-5]:Zs,[-4]:Zs,[-3]:Zs,33:u_,38:pg,42:mc,60:[c1,W1],91:c_,92:[H1,mg],93:jc,95:mc,96:x1},R_={null:[mc,A_]},L_={null:[42,95]},B_={null:[]},H_=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:L_,contentInitial:N_,disable:B_,document:M_,flow:j_,flowInitial:D_,insideSpan:R_,string:z_,text:O_},Symbol.toStringTag,{value:"Module"}));function U_(t,a,r){let o={_bufferIndex:-1,_index:0,line:r&&r.line||1,column:r&&r.column||1,offset:r&&r.offset||0};const s={},f=[];let h=[],d=[];const g={attempt:K(ee),check:K(R),consume:V,enter:k,exit:Q,interrupt:K(R,{interrupt:!0})},p={code:null,containerState:{},defineSkip:L,events:[],now:j,parser:t,previous:null,sliceSerialize:S,sliceStream:_,write:y};let b=a.tokenize.call(p,g);return a.resolveAll&&f.push(a),p;function y(ne){return h=it(h,ne),Y(),h[h.length-1]!==null?[]:(ie(a,0),p.events=Dc(f,p.events,p),p.events)}function S(ne,W){return q_(_(ne),W)}function _(ne){return G_(h,ne)}function j(){const{_bufferIndex:ne,_index:W,line:Se,column:le,offset:F}=o;return{_bufferIndex:ne,_index:W,line:Se,column:le,offset:F}}function L(ne){s[ne.line]=ne.column,pe()}function Y(){let ne;for(;o._index<h.length;){const W=h[o._index];if(typeof W=="string")for(ne=o._index,o._bufferIndex<0&&(o._bufferIndex=0);o._index===ne&&o._bufferIndex<W.length;)B(W.charCodeAt(o._bufferIndex));else B(W)}}function B(ne){b=b(ne)}function V(ne){me(ne)?(o.line++,o.column=1,o.offset+=ne===-3?2:1,pe()):ne!==-1&&(o.column++,o.offset++),o._bufferIndex<0?o._index++:(o._bufferIndex++,o._bufferIndex===h[o._index].length&&(o._bufferIndex=-1,o._index++)),p.previous=ne}function k(ne,W){const Se=W||{};return Se.type=ne,Se.start=j(),p.events.push(["enter",Se,p]),d.push(Se),Se}function Q(ne){const W=d.pop();return W.end=j(),p.events.push(["exit",W,p]),W}function ee(ne,W){ie(ne,W.from)}function R(ne,W){W.restore()}function K(ne,W){return Se;function Se(le,F,M){let X,ae,be,x;return Array.isArray(le)?U(le):"tokenize"in le?U([le]):A(le);function A(se){return Ae;function Ae(Qe){const Be=Qe!==null&&se[Qe],Xn=Qe!==null&&se.null,gt=[...Array.isArray(Be)?Be:Be?[Be]:[],...Array.isArray(Xn)?Xn:Xn?[Xn]:[]];return U(gt)(Qe)}}function U(se){return X=se,ae=0,se.length===0?M:w(se[ae])}function w(se){return Ae;function Ae(Qe){return x=oe(),be=se,se.partial||(p.currentConstruct=se),se.name&&p.parser.constructs.disable.null.includes(se.name)?he():se.tokenize.call(W?Object.assign(Object.create(p),W):p,g,$,he)(Qe)}}function $(se){return ne(be,x),F}function he(se){return x.restore(),++ae<X.length?w(X[ae]):M}}}function ie(ne,W){ne.resolveAll&&!f.includes(ne)&&f.push(ne),ne.resolve&&pt(p.events,W,p.events.length-W,ne.resolve(p.events.slice(W),p)),ne.resolveTo&&(p.events=ne.resolveTo(p.events,p))}function oe(){const ne=j(),W=p.previous,Se=p.currentConstruct,le=p.events.length,F=Array.from(d);return{from:le,restore:M};function M(){o=ne,p.previous=W,p.currentConstruct=Se,p.events.length=le,d=F,pe()}}function pe(){o.line in s&&o.column<2&&(o.column=s[o.line],o.offset+=s[o.line]-1)}}function G_(t,a){const r=a.start._index,o=a.start._bufferIndex,s=a.end._index,f=a.end._bufferIndex;let h;if(r===s)h=[t[r].slice(o,f)];else{if(h=t.slice(r,s),o>-1){const d=h[0];typeof d=="string"?h[0]=d.slice(o):h.shift()}f>0&&h.push(t[s].slice(0,f))}return h}function q_(t,a){let r=-1;const o=[];let s;for(;++r<t.length;){const f=t[r];let h;if(typeof f=="string")h=f;else switch(f){case-5:{h="\r";break}case-4:{h=`
`;break}case-3:{h=`\r
`;break}case-2:{h=a?" ":"	";break}case-1:{if(!a&&s)continue;h=" ";break}default:h=String.fromCharCode(f)}s=f===-2,o.push(h)}return o.join("")}function I_(t){const o={constructs:Zv([H_,...(t||{}).extensions||[]]),content:s(i1),defined:[],document:s(a1),flow:s(x_),lazy:{},string:s(E_),text:s(k_)};return o;function s(f){return h;function h(d){return U_(o,f,d)}}}function Y_(t){for(;!gg(t););return t}const yp=/[\0\t\n\r]/g;function F_(){let t=1,a="",r=!0,o;return s;function s(f,h,d){const g=[];let p,b,y,S,_;for(f=a+(typeof f=="string"?f.toString():new TextDecoder(h||void 0).decode(f)),y=0,a="",r&&(f.charCodeAt(0)===65279&&y++,r=void 0);y<f.length;){if(yp.lastIndex=y,p=yp.exec(f),S=p&&p.index!==void 0?p.index:f.length,_=f.charCodeAt(S),!p){a=f.slice(y);break}if(_===10&&y===S&&o)g.push(-3),o=void 0;else switch(o&&(g.push(-5),o=void 0),y<S&&(g.push(f.slice(y,S)),t+=S-y),_){case 0:{g.push(65533),t++;break}case 9:{for(b=Math.ceil(t/4)*4,g.push(-2);t++<b;)g.push(-1);break}case 10:{g.push(-4),t=1;break}default:o=!0,t=1}y=S+1}return d&&(o&&g.push(-5),a&&g.push(a),g.push(null)),g}}const V_=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function X_(t){return t.replace(V_,Q_)}function Q_(t,a,r){if(a)return a;if(r.charCodeAt(0)===35){const s=r.charCodeAt(1),f=s===120||s===88;return hg(r.slice(f?2:1),f?16:10)}return Nc(r)||t}const wg={}.hasOwnProperty;function K_(t,a,r){return a&&typeof a=="object"&&(r=a,a=void 0),Z_(r)(Y_(I_(r).document().write(F_()(t,a,!0))))}function Z_(t){const a={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:f(Ri),autolinkProtocol:oe,autolinkEmail:oe,atxHeading:f(zi),blockQuote:f(Xn),characterEscape:oe,characterReference:oe,codeFenced:f(gt),codeFencedFenceInfo:h,codeFencedFenceMeta:h,codeIndented:f(gt,h),codeText:f(zl,h),codeTextData:oe,data:oe,codeFlowValue:oe,definition:f(Ya),definitionDestinationString:h,definitionLabelString:h,definitionTitleString:h,emphasis:f(yt),hardBreakEscape:f(Oi),hardBreakTrailing:f(Oi),htmlFlow:f(Fa,h),htmlFlowData:oe,htmlText:f(Fa,h),htmlTextData:oe,image:f(Va),label:h,link:f(Ri),listItem:f(Ol),listItemValue:S,listOrdered:f(Li,y),listUnordered:f(Li),paragraph:f(To),reference:w,referenceString:h,resourceDestinationString:h,resourceTitleString:h,setextHeading:f(zi),strong:f(Ao),thematicBreak:f(Eo)},exit:{atxHeading:g(),atxHeadingSequence:ee,autolink:g(),autolinkEmail:Be,autolinkProtocol:Qe,blockQuote:g(),characterEscapeValue:pe,characterReferenceMarkerHexadecimal:he,characterReferenceMarkerNumeric:he,characterReferenceValue:se,characterReference:Ae,codeFenced:g(Y),codeFencedFence:L,codeFencedFenceInfo:_,codeFencedFenceMeta:j,codeFlowValue:pe,codeIndented:g(B),codeText:g(F),codeTextData:pe,data:pe,definition:g(),definitionDestinationString:Q,definitionLabelString:V,definitionTitleString:k,emphasis:g(),hardBreakEscape:g(W),hardBreakTrailing:g(W),htmlFlow:g(Se),htmlFlowData:pe,htmlText:g(le),htmlTextData:pe,image:g(X),label:be,labelText:ae,lineEnding:ne,link:g(M),listItem:g(),listOrdered:g(),listUnordered:g(),paragraph:g(),referenceString:$,resourceDestinationString:x,resourceTitleString:A,resource:U,setextHeading:g(ie),setextHeadingLineSequence:K,setextHeadingText:R,strong:g(),thematicBreak:g()}};xg(a,(t||{}).mdastExtensions||[]);const r={};return o;function o(G){let J={type:"root",children:[]};const de={stack:[J],tokenStack:[],config:a,enter:d,exit:p,buffer:h,resume:b,data:r},we=[];let Oe=-1;for(;++Oe<G.length;)if(G[Oe][1].type==="listOrdered"||G[Oe][1].type==="listUnordered")if(G[Oe][0]==="enter")we.push(Oe);else{const Ln=we.pop();Oe=s(G,Ln,Oe)}for(Oe=-1;++Oe<G.length;){const Ln=a[G[Oe][0]];wg.call(Ln,G[Oe][1].type)&&Ln[G[Oe][1].type].call(Object.assign({sliceSerialize:G[Oe][2].sliceSerialize},de),G[Oe][1])}if(de.tokenStack.length>0){const Ln=de.tokenStack[de.tokenStack.length-1];(Ln[1]||bp).call(de,void 0,Ln[0])}for(J.position={start:si(G.length>0?G[0][1].start:{line:1,column:1,offset:0}),end:si(G.length>0?G[G.length-2][1].end:{line:1,column:1,offset:0})},Oe=-1;++Oe<a.transforms.length;)J=a.transforms[Oe](J)||J;return J}function s(G,J,de){let we=J-1,Oe=-1,Ln=!1,bt,Sn,rn,Tn;for(;++we<=de;){const qe=G[we];switch(qe[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{qe[0]==="enter"?Oe++:Oe--,Tn=void 0;break}case"lineEndingBlank":{qe[0]==="enter"&&(bt&&!Tn&&!Oe&&!rn&&(rn=we),Tn=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:Tn=void 0}if(!Oe&&qe[0]==="enter"&&qe[1].type==="listItemPrefix"||Oe===-1&&qe[0]==="exit"&&(qe[1].type==="listUnordered"||qe[1].type==="listOrdered")){if(bt){let Ht=we;for(Sn=void 0;Ht--;){const lt=G[Ht];if(lt[1].type==="lineEnding"||lt[1].type==="lineEndingBlank"){if(lt[0]==="exit")continue;Sn&&(G[Sn][1].type="lineEndingBlank",Ln=!0),lt[1].type="lineEnding",Sn=Ht}else if(!(lt[1].type==="linePrefix"||lt[1].type==="blockQuotePrefix"||lt[1].type==="blockQuotePrefixWhitespace"||lt[1].type==="blockQuoteMarker"||lt[1].type==="listItemIndent"))break}rn&&(!Sn||rn<Sn)&&(bt._spread=!0),bt.end=Object.assign({},Sn?G[Sn][1].start:qe[1].end),G.splice(Sn||we,0,["exit",bt,qe[2]]),we++,de++}if(qe[1].type==="listItemPrefix"){const Ht={type:"listItem",_spread:!1,start:Object.assign({},qe[1].start),end:void 0};bt=Ht,G.splice(we,0,["enter",Ht,qe[2]]),we++,de++,rn=void 0,Tn=!0}}}return G[J][1]._spread=Ln,de}function f(G,J){return de;function de(we){d.call(this,G(we),we),J&&J.call(this,we)}}function h(){this.stack.push({type:"fragment",children:[]})}function d(G,J,de){this.stack[this.stack.length-1].children.push(G),this.stack.push(G),this.tokenStack.push([J,de||void 0]),G.position={start:si(J.start),end:void 0}}function g(G){return J;function J(de){G&&G.call(this,de),p.call(this,de)}}function p(G,J){const de=this.stack.pop(),we=this.tokenStack.pop();if(we)we[0].type!==G.type&&(J?J.call(this,G,we[0]):(we[1]||bp).call(this,G,we[0]));else throw new Error("Cannot close `"+G.type+"` ("+za({start:G.start,end:G.end})+"): it’s not open");de.position.end=si(G.end)}function b(){return Qv(this.stack.pop())}function y(){this.data.expectingFirstListItemValue=!0}function S(G){if(this.data.expectingFirstListItemValue){const J=this.stack[this.stack.length-2];J.start=Number.parseInt(this.sliceSerialize(G),10),this.data.expectingFirstListItemValue=void 0}}function _(){const G=this.resume(),J=this.stack[this.stack.length-1];J.lang=G}function j(){const G=this.resume(),J=this.stack[this.stack.length-1];J.meta=G}function L(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function Y(){const G=this.resume(),J=this.stack[this.stack.length-1];J.value=G.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function B(){const G=this.resume(),J=this.stack[this.stack.length-1];J.value=G.replace(/(\r?\n|\r)$/g,"")}function V(G){const J=this.resume(),de=this.stack[this.stack.length-1];de.label=J,de.identifier=Ml(this.sliceSerialize(G)).toLowerCase()}function k(){const G=this.resume(),J=this.stack[this.stack.length-1];J.title=G}function Q(){const G=this.resume(),J=this.stack[this.stack.length-1];J.url=G}function ee(G){const J=this.stack[this.stack.length-1];if(!J.depth){const de=this.sliceSerialize(G).length;J.depth=de}}function R(){this.data.setextHeadingSlurpLineEnding=!0}function K(G){const J=this.stack[this.stack.length-1];J.depth=this.sliceSerialize(G).codePointAt(0)===61?1:2}function ie(){this.data.setextHeadingSlurpLineEnding=void 0}function oe(G){const de=this.stack[this.stack.length-1].children;let we=de[de.length-1];(!we||we.type!=="text")&&(we=_n(),we.position={start:si(G.start),end:void 0},de.push(we)),this.stack.push(we)}function pe(G){const J=this.stack.pop();J.value+=this.sliceSerialize(G),J.position.end=si(G.end)}function ne(G){const J=this.stack[this.stack.length-1];if(this.data.atHardBreak){const de=J.children[J.children.length-1];de.position.end=si(G.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&a.canContainEols.includes(J.type)&&(oe.call(this,G),pe.call(this,G))}function W(){this.data.atHardBreak=!0}function Se(){const G=this.resume(),J=this.stack[this.stack.length-1];J.value=G}function le(){const G=this.resume(),J=this.stack[this.stack.length-1];J.value=G}function F(){const G=this.resume(),J=this.stack[this.stack.length-1];J.value=G}function M(){const G=this.stack[this.stack.length-1];if(this.data.inReference){const J=this.data.referenceType||"shortcut";G.type+="Reference",G.referenceType=J,delete G.url,delete G.title}else delete G.identifier,delete G.label;this.data.referenceType=void 0}function X(){const G=this.stack[this.stack.length-1];if(this.data.inReference){const J=this.data.referenceType||"shortcut";G.type+="Reference",G.referenceType=J,delete G.url,delete G.title}else delete G.identifier,delete G.label;this.data.referenceType=void 0}function ae(G){const J=this.sliceSerialize(G),de=this.stack[this.stack.length-2];de.label=X_(J),de.identifier=Ml(J).toLowerCase()}function be(){const G=this.stack[this.stack.length-1],J=this.resume(),de=this.stack[this.stack.length-1];if(this.data.inReference=!0,de.type==="link"){const we=G.children;de.children=we}else de.alt=J}function x(){const G=this.resume(),J=this.stack[this.stack.length-1];J.url=G}function A(){const G=this.resume(),J=this.stack[this.stack.length-1];J.title=G}function U(){this.data.inReference=void 0}function w(){this.data.referenceType="collapsed"}function $(G){const J=this.resume(),de=this.stack[this.stack.length-1];de.label=J,de.identifier=Ml(this.sliceSerialize(G)).toLowerCase(),this.data.referenceType="full"}function he(G){this.data.characterReferenceType=G.type}function se(G){const J=this.sliceSerialize(G),de=this.data.characterReferenceType;let we;de?(we=hg(J,de==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):we=Nc(J);const Oe=this.stack[this.stack.length-1];Oe.value+=we}function Ae(G){const J=this.stack.pop();J.position.end=si(G.end)}function Qe(G){pe.call(this,G);const J=this.stack[this.stack.length-1];J.url=this.sliceSerialize(G)}function Be(G){pe.call(this,G);const J=this.stack[this.stack.length-1];J.url="mailto:"+this.sliceSerialize(G)}function Xn(){return{type:"blockquote",children:[]}}function gt(){return{type:"code",lang:null,meta:null,value:""}}function zl(){return{type:"inlineCode",value:""}}function Ya(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function yt(){return{type:"emphasis",children:[]}}function zi(){return{type:"heading",depth:0,children:[]}}function Oi(){return{type:"break"}}function Fa(){return{type:"html",value:""}}function Va(){return{type:"image",title:null,url:"",alt:null}}function Ri(){return{type:"link",title:null,url:"",children:[]}}function Li(G){return{type:"list",ordered:G.type==="listOrdered",start:null,spread:G._spread,children:[]}}function Ol(G){return{type:"listItem",spread:G._spread,checked:null,children:[]}}function To(){return{type:"paragraph",children:[]}}function Ao(){return{type:"strong",children:[]}}function _n(){return{type:"text",value:""}}function Eo(){return{type:"thematicBreak"}}}function si(t){return{line:t.line,column:t.column,offset:t.offset}}function xg(t,a){let r=-1;for(;++r<a.length;){const o=a[r];Array.isArray(o)?xg(t,o):J_(t,o)}}function J_(t,a){let r;for(r in a)if(wg.call(a,r))switch(r){case"canContainEols":{const o=a[r];o&&t[r].push(...o);break}case"transforms":{const o=a[r];o&&t[r].push(...o);break}case"enter":case"exit":{const o=a[r];o&&Object.assign(t[r],o);break}}}function bp(t,a){throw t?new Error("Cannot close `"+t.type+"` ("+za({start:t.start,end:t.end})+"): a different token (`"+a.type+"`, "+za({start:a.start,end:a.end})+") is open"):new Error("Cannot close document, a token (`"+a.type+"`, "+za({start:a.start,end:a.end})+") is still open")}function W_(t){const a=this;a.parser=r;function r(o){return K_(o,{...a.data("settings"),...t,extensions:a.data("micromarkExtensions")||[],mdastExtensions:a.data("fromMarkdownExtensions")||[]})}}function P_(t,a){const r={type:"element",tagName:"blockquote",properties:{},children:t.wrap(t.all(a),!0)};return t.patch(a,r),t.applyData(a,r)}function $_(t,a){const r={type:"element",tagName:"br",properties:{},children:[]};return t.patch(a,r),[t.applyData(a,r),{type:"text",value:`
`}]}function eS(t,a){const r=a.value?a.value+`
`:"",o={},s=a.lang?a.lang.split(/\s+/):[];s.length>0&&(o.className=["language-"+s[0]]);let f={type:"element",tagName:"code",properties:o,children:[{type:"text",value:r}]};return a.meta&&(f.data={meta:a.meta}),t.patch(a,f),f=t.applyData(a,f),f={type:"element",tagName:"pre",properties:{},children:[f]},t.patch(a,f),f}function nS(t,a){const r={type:"element",tagName:"del",properties:{},children:t.all(a)};return t.patch(a,r),t.applyData(a,r)}function tS(t,a){const r={type:"element",tagName:"em",properties:{},children:t.all(a)};return t.patch(a,r),t.applyData(a,r)}function iS(t,a){const r=typeof t.options.clobberPrefix=="string"?t.options.clobberPrefix:"user-content-",o=String(a.identifier).toUpperCase(),s=jl(o.toLowerCase()),f=t.footnoteOrder.indexOf(o);let h,d=t.footnoteCounts.get(o);d===void 0?(d=0,t.footnoteOrder.push(o),h=t.footnoteOrder.length):h=f+1,d+=1,t.footnoteCounts.set(o,d);const g={type:"element",tagName:"a",properties:{href:"#"+r+"fn-"+s,id:r+"fnref-"+s+(d>1?"-"+d:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(h)}]};t.patch(a,g);const p={type:"element",tagName:"sup",properties:{},children:[g]};return t.patch(a,p),t.applyData(a,p)}function lS(t,a){const r={type:"element",tagName:"h"+a.depth,properties:{},children:t.all(a)};return t.patch(a,r),t.applyData(a,r)}function aS(t,a){if(t.options.allowDangerousHtml){const r={type:"raw",value:a.value};return t.patch(a,r),t.applyData(a,r)}}function Tg(t,a){const r=a.referenceType;let o="]";if(r==="collapsed"?o+="[]":r==="full"&&(o+="["+(a.label||a.identifier)+"]"),a.type==="imageReference")return[{type:"text",value:"!["+a.alt+o}];const s=t.all(a),f=s[0];f&&f.type==="text"?f.value="["+f.value:s.unshift({type:"text",value:"["});const h=s[s.length-1];return h&&h.type==="text"?h.value+=o:s.push({type:"text",value:o}),s}function rS(t,a){const r=String(a.identifier).toUpperCase(),o=t.definitionById.get(r);if(!o)return Tg(t,a);const s={src:jl(o.url||""),alt:a.alt};o.title!==null&&o.title!==void 0&&(s.title=o.title);const f={type:"element",tagName:"img",properties:s,children:[]};return t.patch(a,f),t.applyData(a,f)}function oS(t,a){const r={src:jl(a.url)};a.alt!==null&&a.alt!==void 0&&(r.alt=a.alt),a.title!==null&&a.title!==void 0&&(r.title=a.title);const o={type:"element",tagName:"img",properties:r,children:[]};return t.patch(a,o),t.applyData(a,o)}function uS(t,a){const r={type:"text",value:a.value.replace(/\r?\n|\r/g," ")};t.patch(a,r);const o={type:"element",tagName:"code",properties:{},children:[r]};return t.patch(a,o),t.applyData(a,o)}function sS(t,a){const r=String(a.identifier).toUpperCase(),o=t.definitionById.get(r);if(!o)return Tg(t,a);const s={href:jl(o.url||"")};o.title!==null&&o.title!==void 0&&(s.title=o.title);const f={type:"element",tagName:"a",properties:s,children:t.all(a)};return t.patch(a,f),t.applyData(a,f)}function cS(t,a){const r={href:jl(a.url)};a.title!==null&&a.title!==void 0&&(r.title=a.title);const o={type:"element",tagName:"a",properties:r,children:t.all(a)};return t.patch(a,o),t.applyData(a,o)}function fS(t,a,r){const o=t.all(a),s=r?hS(r):Ag(a),f={},h=[];if(typeof a.checked=="boolean"){const b=o[0];let y;b&&b.type==="element"&&b.tagName==="p"?y=b:(y={type:"element",tagName:"p",properties:{},children:[]},o.unshift(y)),y.children.length>0&&y.children.unshift({type:"text",value:" "}),y.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:a.checked,disabled:!0},children:[]}),f.className=["task-list-item"]}let d=-1;for(;++d<o.length;){const b=o[d];(s||d!==0||b.type!=="element"||b.tagName!=="p")&&h.push({type:"text",value:`
`}),b.type==="element"&&b.tagName==="p"&&!s?h.push(...b.children):h.push(b)}const g=o[o.length-1];g&&(s||g.type!=="element"||g.tagName!=="p")&&h.push({type:"text",value:`
`});const p={type:"element",tagName:"li",properties:f,children:h};return t.patch(a,p),t.applyData(a,p)}function hS(t){let a=!1;if(t.type==="list"){a=t.spread||!1;const r=t.children;let o=-1;for(;!a&&++o<r.length;)a=Ag(r[o])}return a}function Ag(t){const a=t.spread;return a??t.children.length>1}function dS(t,a){const r={},o=t.all(a);let s=-1;for(typeof a.start=="number"&&a.start!==1&&(r.start=a.start);++s<o.length;){const h=o[s];if(h.type==="element"&&h.tagName==="li"&&h.properties&&Array.isArray(h.properties.className)&&h.properties.className.includes("task-list-item")){r.className=["contains-task-list"];break}}const f={type:"element",tagName:a.ordered?"ol":"ul",properties:r,children:t.wrap(o,!0)};return t.patch(a,f),t.applyData(a,f)}function mS(t,a){const r={type:"element",tagName:"p",properties:{},children:t.all(a)};return t.patch(a,r),t.applyData(a,r)}function pS(t,a){const r={type:"root",children:t.wrap(t.all(a))};return t.patch(a,r),t.applyData(a,r)}function gS(t,a){const r={type:"element",tagName:"strong",properties:{},children:t.all(a)};return t.patch(a,r),t.applyData(a,r)}function yS(t,a){const r=t.all(a),o=r.shift(),s=[];if(o){const h={type:"element",tagName:"thead",properties:{},children:t.wrap([o],!0)};t.patch(a.children[0],h),s.push(h)}if(r.length>0){const h={type:"element",tagName:"tbody",properties:{},children:t.wrap(r,!0)},d=Ec(a.children[1]),g=ag(a.children[a.children.length-1]);d&&g&&(h.position={start:d,end:g}),s.push(h)}const f={type:"element",tagName:"table",properties:{},children:t.wrap(s,!0)};return t.patch(a,f),t.applyData(a,f)}function bS(t,a,r){const o=r?r.children:void 0,f=(o?o.indexOf(a):1)===0?"th":"td",h=r&&r.type==="table"?r.align:void 0,d=h?h.length:a.children.length;let g=-1;const p=[];for(;++g<d;){const y=a.children[g],S={},_=h?h[g]:void 0;_&&(S.align=_);let j={type:"element",tagName:f,properties:S,children:[]};y&&(j.children=t.all(y),t.patch(y,j),j=t.applyData(y,j)),p.push(j)}const b={type:"element",tagName:"tr",properties:{},children:t.wrap(p,!0)};return t.patch(a,b),t.applyData(a,b)}function vS(t,a){const r={type:"element",tagName:"td",properties:{},children:t.all(a)};return t.patch(a,r),t.applyData(a,r)}const vp=9,_p=32;function _S(t){const a=String(t),r=/\r?\n|\r/g;let o=r.exec(a),s=0;const f=[];for(;o;)f.push(Sp(a.slice(s,o.index),s>0,!0),o[0]),s=o.index+o[0].length,o=r.exec(a);return f.push(Sp(a.slice(s),s>0,!1)),f.join("")}function Sp(t,a,r){let o=0,s=t.length;if(a){let f=t.codePointAt(o);for(;f===vp||f===_p;)o++,f=t.codePointAt(o)}if(r){let f=t.codePointAt(s-1);for(;f===vp||f===_p;)s--,f=t.codePointAt(s-1)}return s>o?t.slice(o,s):""}function SS(t,a){const r={type:"text",value:_S(String(a.value))};return t.patch(a,r),t.applyData(a,r)}function wS(t,a){const r={type:"element",tagName:"hr",properties:{},children:[]};return t.patch(a,r),t.applyData(a,r)}const xS={blockquote:P_,break:$_,code:eS,delete:nS,emphasis:tS,footnoteReference:iS,heading:lS,html:aS,imageReference:rS,image:oS,inlineCode:uS,linkReference:sS,link:cS,listItem:fS,list:dS,paragraph:mS,root:pS,strong:gS,table:yS,tableCell:vS,tableRow:bS,text:SS,thematicBreak:wS,toml:uo,yaml:uo,definition:uo,footnoteDefinition:uo};function uo(){}const Eg=-1,So=0,Ra=1,ho=2,zc=3,Oc=4,Rc=5,Lc=6,kg=7,Cg=8,wp=typeof self=="object"?self:globalThis,TS=(t,a)=>{const r=(s,f)=>(t.set(f,s),s),o=s=>{if(t.has(s))return t.get(s);const[f,h]=a[s];switch(f){case So:case Eg:return r(h,s);case Ra:{const d=r([],s);for(const g of h)d.push(o(g));return d}case ho:{const d=r({},s);for(const[g,p]of h)d[o(g)]=o(p);return d}case zc:return r(new Date(h),s);case Oc:{const{source:d,flags:g}=h;return r(new RegExp(d,g),s)}case Rc:{const d=r(new Map,s);for(const[g,p]of h)d.set(o(g),o(p));return d}case Lc:{const d=r(new Set,s);for(const g of h)d.add(o(g));return d}case kg:{const{name:d,message:g}=h;return r(new wp[d](g),s)}case Cg:return r(BigInt(h),s);case"BigInt":return r(Object(BigInt(h)),s);case"ArrayBuffer":return r(new Uint8Array(h).buffer,h);case"DataView":{const{buffer:d}=new Uint8Array(h);return r(new DataView(d),h)}}return r(new wp[f](h),s)};return o},xp=t=>TS(new Map,t)(0),wl="",{toString:AS}={},{keys:ES}=Object,Da=t=>{const a=typeof t;if(a!=="object"||!t)return[So,a];const r=AS.call(t).slice(8,-1);switch(r){case"Array":return[Ra,wl];case"Object":return[ho,wl];case"Date":return[zc,wl];case"RegExp":return[Oc,wl];case"Map":return[Rc,wl];case"Set":return[Lc,wl];case"DataView":return[Ra,r]}return r.includes("Array")?[Ra,r]:r.includes("Error")?[kg,r]:[ho,r]},so=([t,a])=>t===So&&(a==="function"||a==="symbol"),kS=(t,a,r,o)=>{const s=(h,d)=>{const g=o.push(h)-1;return r.set(d,g),g},f=h=>{if(r.has(h))return r.get(h);let[d,g]=Da(h);switch(d){case So:{let b=h;switch(g){case"bigint":d=Cg,b=h.toString();break;case"function":case"symbol":if(t)throw new TypeError("unable to serialize "+g);b=null;break;case"undefined":return s([Eg],h)}return s([d,b],h)}case Ra:{if(g){let S=h;return g==="DataView"?S=new Uint8Array(h.buffer):g==="ArrayBuffer"&&(S=new Uint8Array(h)),s([g,[...S]],h)}const b=[],y=s([d,b],h);for(const S of h)b.push(f(S));return y}case ho:{if(g)switch(g){case"BigInt":return s([g,h.toString()],h);case"Boolean":case"Number":case"String":return s([g,h.valueOf()],h)}if(a&&"toJSON"in h)return f(h.toJSON());const b=[],y=s([d,b],h);for(const S of ES(h))(t||!so(Da(h[S])))&&b.push([f(S),f(h[S])]);return y}case zc:return s([d,h.toISOString()],h);case Oc:{const{source:b,flags:y}=h;return s([d,{source:b,flags:y}],h)}case Rc:{const b=[],y=s([d,b],h);for(const[S,_]of h)(t||!(so(Da(S))||so(Da(_))))&&b.push([f(S),f(_)]);return y}case Lc:{const b=[],y=s([d,b],h);for(const S of h)(t||!so(Da(S)))&&b.push(f(S));return y}}const{message:p}=h;return s([d,{name:g,message:p}],h)};return f},Tp=(t,{json:a,lossy:r}={})=>{const o=[];return kS(!(a||r),!!a,new Map,o)(t),o},mo=typeof structuredClone=="function"?(t,a)=>a&&("json"in a||"lossy"in a)?xp(Tp(t,a)):structuredClone(t):(t,a)=>xp(Tp(t,a));function CS(t,a){const r=[{type:"text",value:"↩"}];return a>1&&r.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(a)}]}),r}function MS(t,a){return"Back to reference "+(t+1)+(a>1?"-"+a:"")}function NS(t){const a=typeof t.options.clobberPrefix=="string"?t.options.clobberPrefix:"user-content-",r=t.options.footnoteBackContent||CS,o=t.options.footnoteBackLabel||MS,s=t.options.footnoteLabel||"Footnotes",f=t.options.footnoteLabelTagName||"h2",h=t.options.footnoteLabelProperties||{className:["sr-only"]},d=[];let g=-1;for(;++g<t.footnoteOrder.length;){const p=t.footnoteById.get(t.footnoteOrder[g]);if(!p)continue;const b=t.all(p),y=String(p.identifier).toUpperCase(),S=jl(y.toLowerCase());let _=0;const j=[],L=t.footnoteCounts.get(y);for(;L!==void 0&&++_<=L;){j.length>0&&j.push({type:"text",value:" "});let V=typeof r=="string"?r:r(g,_);typeof V=="string"&&(V={type:"text",value:V}),j.push({type:"element",tagName:"a",properties:{href:"#"+a+"fnref-"+S+(_>1?"-"+_:""),dataFootnoteBackref:"",ariaLabel:typeof o=="string"?o:o(g,_),className:["data-footnote-backref"]},children:Array.isArray(V)?V:[V]})}const Y=b[b.length-1];if(Y&&Y.type==="element"&&Y.tagName==="p"){const V=Y.children[Y.children.length-1];V&&V.type==="text"?V.value+=" ":Y.children.push({type:"text",value:" "}),Y.children.push(...j)}else b.push(...j);const B={type:"element",tagName:"li",properties:{id:a+"fn-"+S},children:t.wrap(b,!0)};t.patch(p,B),d.push(B)}if(d.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:f,properties:{...mo(h),id:"footnote-label"},children:[{type:"text",value:s}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:t.wrap(d,!0)},{type:"text",value:`
`}]}}const Mg=(function(t){if(t==null)return OS;if(typeof t=="function")return wo(t);if(typeof t=="object")return Array.isArray(t)?DS(t):jS(t);if(typeof t=="string")return zS(t);throw new Error("Expected function, string, or object as test")});function DS(t){const a=[];let r=-1;for(;++r<t.length;)a[r]=Mg(t[r]);return wo(o);function o(...s){let f=-1;for(;++f<a.length;)if(a[f].apply(this,s))return!0;return!1}}function jS(t){const a=t;return wo(r);function r(o){const s=o;let f;for(f in t)if(s[f]!==a[f])return!1;return!0}}function zS(t){return wo(a);function a(r){return r&&r.type===t}}function wo(t){return a;function a(r,o,s){return!!(RS(r)&&t.call(this,r,typeof o=="number"?o:void 0,s||void 0))}}function OS(){return!0}function RS(t){return t!==null&&typeof t=="object"&&"type"in t}const Ng=[],LS=!0,Ap=!1,BS="skip";function HS(t,a,r,o){let s;typeof a=="function"&&typeof r!="function"?(o=r,r=a):s=a;const f=Mg(s),h=o?-1:1;d(t,void 0,[])();function d(g,p,b){const y=g&&typeof g=="object"?g:{};if(typeof y.type=="string"){const _=typeof y.tagName=="string"?y.tagName:typeof y.name=="string"?y.name:void 0;Object.defineProperty(S,"name",{value:"node ("+(g.type+(_?"<"+_+">":""))+")"})}return S;function S(){let _=Ng,j,L,Y;if((!a||f(g,p,b[b.length-1]||void 0))&&(_=US(r(g,b)),_[0]===Ap))return _;if("children"in g&&g.children){const B=g;if(B.children&&_[0]!==BS)for(L=(o?B.children.length:-1)+h,Y=b.concat(B);L>-1&&L<B.children.length;){const V=B.children[L];if(j=d(V,L,Y)(),j[0]===Ap)return j;L=typeof j[1]=="number"?j[1]:L+h}}return _}}}function US(t){return Array.isArray(t)?t:typeof t=="number"?[LS,t]:t==null?Ng:[t]}function Dg(t,a,r,o){let s,f,h;typeof a=="function"&&typeof r!="function"?(f=void 0,h=a,s=r):(f=a,h=r,s=o),HS(t,f,d,s);function d(g,p){const b=p[p.length-1],y=b?b.children.indexOf(g):void 0;return h(g,y,b)}}const pc={}.hasOwnProperty,GS={};function qS(t,a){const r=a||GS,o=new Map,s=new Map,f=new Map,h={...xS,...r.handlers},d={all:p,applyData:YS,definitionById:o,footnoteById:s,footnoteCounts:f,footnoteOrder:[],handlers:h,one:g,options:r,patch:IS,wrap:VS};return Dg(t,function(b){if(b.type==="definition"||b.type==="footnoteDefinition"){const y=b.type==="definition"?o:s,S=String(b.identifier).toUpperCase();y.has(S)||y.set(S,b)}}),d;function g(b,y){const S=b.type,_=d.handlers[S];if(pc.call(d.handlers,S)&&_)return _(d,b,y);if(d.options.passThrough&&d.options.passThrough.includes(S)){if("children"in b){const{children:L,...Y}=b,B=mo(Y);return B.children=d.all(b),B}return mo(b)}return(d.options.unknownHandler||FS)(d,b,y)}function p(b){const y=[];if("children"in b){const S=b.children;let _=-1;for(;++_<S.length;){const j=d.one(S[_],b);if(j){if(_&&S[_-1].type==="break"&&(!Array.isArray(j)&&j.type==="text"&&(j.value=Ep(j.value)),!Array.isArray(j)&&j.type==="element")){const L=j.children[0];L&&L.type==="text"&&(L.value=Ep(L.value))}Array.isArray(j)?y.push(...j):y.push(j)}}}return y}}function IS(t,a){t.position&&(a.position=Av(t))}function YS(t,a){let r=a;if(t&&t.data){const o=t.data.hName,s=t.data.hChildren,f=t.data.hProperties;if(typeof o=="string")if(r.type==="element")r.tagName=o;else{const h="children"in r?r.children:[r];r={type:"element",tagName:o,properties:{},children:h}}r.type==="element"&&f&&Object.assign(r.properties,mo(f)),"children"in r&&r.children&&s!==null&&s!==void 0&&(r.children=s)}return r}function FS(t,a){const r=a.data||{},o="value"in a&&!(pc.call(r,"hProperties")||pc.call(r,"hChildren"))?{type:"text",value:a.value}:{type:"element",tagName:"div",properties:{},children:t.all(a)};return t.patch(a,o),t.applyData(a,o)}function VS(t,a){const r=[];let o=-1;for(a&&r.push({type:"text",value:`
`});++o<t.length;)o&&r.push({type:"text",value:`
`}),r.push(t[o]);return a&&t.length>0&&r.push({type:"text",value:`
`}),r}function Ep(t){let a=0,r=t.charCodeAt(a);for(;r===9||r===32;)a++,r=t.charCodeAt(a);return t.slice(a)}function kp(t,a){const r=qS(t,a),o=r.one(t,void 0),s=NS(r),f=Array.isArray(o)?{type:"root",children:o}:o||{type:"root",children:[]};return s&&f.children.push({type:"text",value:`
`},s),f}function XS(t,a){return t&&"run"in t?async function(r,o){const s=kp(r,{file:o,...a});await t.run(s,o)}:function(r,o){return kp(r,{file:o,...t||a})}}function Cp(t){if(t)throw t}var Js,Mp;function QS(){if(Mp)return Js;Mp=1;var t=Object.prototype.hasOwnProperty,a=Object.prototype.toString,r=Object.defineProperty,o=Object.getOwnPropertyDescriptor,s=function(p){return typeof Array.isArray=="function"?Array.isArray(p):a.call(p)==="[object Array]"},f=function(p){if(!p||a.call(p)!=="[object Object]")return!1;var b=t.call(p,"constructor"),y=p.constructor&&p.constructor.prototype&&t.call(p.constructor.prototype,"isPrototypeOf");if(p.constructor&&!b&&!y)return!1;var S;for(S in p);return typeof S>"u"||t.call(p,S)},h=function(p,b){r&&b.name==="__proto__"?r(p,b.name,{enumerable:!0,configurable:!0,value:b.newValue,writable:!0}):p[b.name]=b.newValue},d=function(p,b){if(b==="__proto__")if(t.call(p,b)){if(o)return o(p,b).value}else return;return p[b]};return Js=function g(){var p,b,y,S,_,j,L=arguments[0],Y=1,B=arguments.length,V=!1;for(typeof L=="boolean"&&(V=L,L=arguments[1]||{},Y=2),(L==null||typeof L!="object"&&typeof L!="function")&&(L={});Y<B;++Y)if(p=arguments[Y],p!=null)for(b in p)y=d(L,b),S=d(p,b),L!==S&&(V&&S&&(f(S)||(_=s(S)))?(_?(_=!1,j=y&&s(y)?y:[]):j=y&&f(y)?y:{},h(L,{name:b,newValue:g(V,j,S)})):typeof S<"u"&&h(L,{name:b,newValue:S}));return L},Js}var KS=QS();const Ws=Wp(KS);function gc(t){if(typeof t!="object"||t===null)return!1;const a=Object.getPrototypeOf(t);return(a===null||a===Object.prototype||Object.getPrototypeOf(a)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)}function ZS(){const t=[],a={run:r,use:o};return a;function r(...s){let f=-1;const h=s.pop();if(typeof h!="function")throw new TypeError("Expected function as last argument, not "+h);d(null,...s);function d(g,...p){const b=t[++f];let y=-1;if(g){h(g);return}for(;++y<s.length;)(p[y]===null||p[y]===void 0)&&(p[y]=s[y]);s=p,b?JS(b,d)(...p):h(null,...p)}}function o(s){if(typeof s!="function")throw new TypeError("Expected `middelware` to be a function, not "+s);return t.push(s),a}}function JS(t,a){let r;return o;function o(...h){const d=t.length>h.length;let g;d&&h.push(s);try{g=t.apply(this,h)}catch(p){const b=p;if(d&&r)throw b;return s(b)}d||(g&&g.then&&typeof g.then=="function"?g.then(f,s):g instanceof Error?s(g):f(g))}function s(h,...d){r||(r=!0,a(h,...d))}function f(h){s(null,h)}}const ht={basename:WS,dirname:PS,extname:$S,join:ew,sep:"/"};function WS(t,a){if(a!==void 0&&typeof a!="string")throw new TypeError('"ext" argument must be a string');Ia(t);let r=0,o=-1,s=t.length,f;if(a===void 0||a.length===0||a.length>t.length){for(;s--;)if(t.codePointAt(s)===47){if(f){r=s+1;break}}else o<0&&(f=!0,o=s+1);return o<0?"":t.slice(r,o)}if(a===t)return"";let h=-1,d=a.length-1;for(;s--;)if(t.codePointAt(s)===47){if(f){r=s+1;break}}else h<0&&(f=!0,h=s+1),d>-1&&(t.codePointAt(s)===a.codePointAt(d--)?d<0&&(o=s):(d=-1,o=h));return r===o?o=h:o<0&&(o=t.length),t.slice(r,o)}function PS(t){if(Ia(t),t.length===0)return".";let a=-1,r=t.length,o;for(;--r;)if(t.codePointAt(r)===47){if(o){a=r;break}}else o||(o=!0);return a<0?t.codePointAt(0)===47?"/":".":a===1&&t.codePointAt(0)===47?"//":t.slice(0,a)}function $S(t){Ia(t);let a=t.length,r=-1,o=0,s=-1,f=0,h;for(;a--;){const d=t.codePointAt(a);if(d===47){if(h){o=a+1;break}continue}r<0&&(h=!0,r=a+1),d===46?s<0?s=a:f!==1&&(f=1):s>-1&&(f=-1)}return s<0||r<0||f===0||f===1&&s===r-1&&s===o+1?"":t.slice(s,r)}function ew(...t){let a=-1,r;for(;++a<t.length;)Ia(t[a]),t[a]&&(r=r===void 0?t[a]:r+"/"+t[a]);return r===void 0?".":nw(r)}function nw(t){Ia(t);const a=t.codePointAt(0)===47;let r=tw(t,!a);return r.length===0&&!a&&(r="."),r.length>0&&t.codePointAt(t.length-1)===47&&(r+="/"),a?"/"+r:r}function tw(t,a){let r="",o=0,s=-1,f=0,h=-1,d,g;for(;++h<=t.length;){if(h<t.length)d=t.codePointAt(h);else{if(d===47)break;d=47}if(d===47){if(!(s===h-1||f===1))if(s!==h-1&&f===2){if(r.length<2||o!==2||r.codePointAt(r.length-1)!==46||r.codePointAt(r.length-2)!==46){if(r.length>2){if(g=r.lastIndexOf("/"),g!==r.length-1){g<0?(r="",o=0):(r=r.slice(0,g),o=r.length-1-r.lastIndexOf("/")),s=h,f=0;continue}}else if(r.length>0){r="",o=0,s=h,f=0;continue}}a&&(r=r.length>0?r+"/..":"..",o=2)}else r.length>0?r+="/"+t.slice(s+1,h):r=t.slice(s+1,h),o=h-s-1;s=h,f=0}else d===46&&f>-1?f++:f=-1}return r}function Ia(t){if(typeof t!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(t))}const iw={cwd:lw};function lw(){return"/"}function yc(t){return!!(t!==null&&typeof t=="object"&&"href"in t&&t.href&&"protocol"in t&&t.protocol&&t.auth===void 0)}function aw(t){if(typeof t=="string")t=new URL(t);else if(!yc(t)){const a=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+t+"`");throw a.code="ERR_INVALID_ARG_TYPE",a}if(t.protocol!=="file:"){const a=new TypeError("The URL must be of scheme file");throw a.code="ERR_INVALID_URL_SCHEME",a}return rw(t)}function rw(t){if(t.hostname!==""){const o=new TypeError('File URL host must be "localhost" or empty on darwin');throw o.code="ERR_INVALID_FILE_URL_HOST",o}const a=t.pathname;let r=-1;for(;++r<a.length;)if(a.codePointAt(r)===37&&a.codePointAt(r+1)===50){const o=a.codePointAt(r+2);if(o===70||o===102){const s=new TypeError("File URL path must not include encoded / characters");throw s.code="ERR_INVALID_FILE_URL_PATH",s}}return decodeURIComponent(a)}const Ps=["history","path","basename","stem","extname","dirname"];class jg{constructor(a){let r;a?yc(a)?r={path:a}:typeof a=="string"||ow(a)?r={value:a}:r=a:r={},this.cwd="cwd"in r?"":iw.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let o=-1;for(;++o<Ps.length;){const f=Ps[o];f in r&&r[f]!==void 0&&r[f]!==null&&(this[f]=f==="history"?[...r[f]]:r[f])}let s;for(s in r)Ps.includes(s)||(this[s]=r[s])}get basename(){return typeof this.path=="string"?ht.basename(this.path):void 0}set basename(a){ec(a,"basename"),$s(a,"basename"),this.path=ht.join(this.dirname||"",a)}get dirname(){return typeof this.path=="string"?ht.dirname(this.path):void 0}set dirname(a){Np(this.basename,"dirname"),this.path=ht.join(a||"",this.basename)}get extname(){return typeof this.path=="string"?ht.extname(this.path):void 0}set extname(a){if($s(a,"extname"),Np(this.dirname,"extname"),a){if(a.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(a.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=ht.join(this.dirname,this.stem+(a||""))}get path(){return this.history[this.history.length-1]}set path(a){yc(a)&&(a=aw(a)),ec(a,"path"),this.path!==a&&this.history.push(a)}get stem(){return typeof this.path=="string"?ht.basename(this.path,this.extname):void 0}set stem(a){ec(a,"stem"),$s(a,"stem"),this.path=ht.join(this.dirname||"",a+(this.extname||""))}fail(a,r,o){const s=this.message(a,r,o);throw s.fatal=!0,s}info(a,r,o){const s=this.message(a,r,o);return s.fatal=void 0,s}message(a,r,o){const s=new bn(a,r,o);return this.path&&(s.name=this.path+":"+s.name,s.file=this.path),s.fatal=!1,this.messages.push(s),s}toString(a){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(a||void 0).decode(this.value)}}function $s(t,a){if(t&&t.includes(ht.sep))throw new Error("`"+a+"` cannot be a path: did not expect `"+ht.sep+"`")}function ec(t,a){if(!t)throw new Error("`"+a+"` cannot be empty")}function Np(t,a){if(!t)throw new Error("Setting `"+a+"` requires `path` to be set too")}function ow(t){return!!(t&&typeof t=="object"&&"byteLength"in t&&"byteOffset"in t)}const uw=(function(t){const o=this.constructor.prototype,s=o[t],f=function(){return s.apply(f,arguments)};return Object.setPrototypeOf(f,o),f}),sw={}.hasOwnProperty;class Bc extends uw{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=ZS()}copy(){const a=new Bc;let r=-1;for(;++r<this.attachers.length;){const o=this.attachers[r];a.use(...o)}return a.data(Ws(!0,{},this.namespace)),a}data(a,r){return typeof a=="string"?arguments.length===2?(ic("data",this.frozen),this.namespace[a]=r,this):sw.call(this.namespace,a)&&this.namespace[a]||void 0:a?(ic("data",this.frozen),this.namespace=a,this):this.namespace}freeze(){if(this.frozen)return this;const a=this;for(;++this.freezeIndex<this.attachers.length;){const[r,...o]=this.attachers[this.freezeIndex];if(o[0]===!1)continue;o[0]===!0&&(o[0]=void 0);const s=r.call(a,...o);typeof s=="function"&&this.transformers.use(s)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(a){this.freeze();const r=co(a),o=this.parser||this.Parser;return nc("parse",o),o(String(r),r)}process(a,r){const o=this;return this.freeze(),nc("process",this.parser||this.Parser),tc("process",this.compiler||this.Compiler),r?s(void 0,r):new Promise(s);function s(f,h){const d=co(a),g=o.parse(d);o.run(g,d,function(b,y,S){if(b||!y||!S)return p(b);const _=y,j=o.stringify(_,S);hw(j)?S.value=j:S.result=j,p(b,S)});function p(b,y){b||!y?h(b):f?f(y):r(void 0,y)}}}processSync(a){let r=!1,o;return this.freeze(),nc("processSync",this.parser||this.Parser),tc("processSync",this.compiler||this.Compiler),this.process(a,s),jp("processSync","process",r),o;function s(f,h){r=!0,Cp(f),o=h}}run(a,r,o){Dp(a),this.freeze();const s=this.transformers;return!o&&typeof r=="function"&&(o=r,r=void 0),o?f(void 0,o):new Promise(f);function f(h,d){const g=co(r);s.run(a,g,p);function p(b,y,S){const _=y||a;b?d(b):h?h(_):o(void 0,_,S)}}}runSync(a,r){let o=!1,s;return this.run(a,r,f),jp("runSync","run",o),s;function f(h,d){Cp(h),s=d,o=!0}}stringify(a,r){this.freeze();const o=co(r),s=this.compiler||this.Compiler;return tc("stringify",s),Dp(a),s(a,o)}use(a,...r){const o=this.attachers,s=this.namespace;if(ic("use",this.frozen),a!=null)if(typeof a=="function")g(a,r);else if(typeof a=="object")Array.isArray(a)?d(a):h(a);else throw new TypeError("Expected usable value, not `"+a+"`");return this;function f(p){if(typeof p=="function")g(p,[]);else if(typeof p=="object")if(Array.isArray(p)){const[b,...y]=p;g(b,y)}else h(p);else throw new TypeError("Expected usable value, not `"+p+"`")}function h(p){if(!("plugins"in p)&&!("settings"in p))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");d(p.plugins),p.settings&&(s.settings=Ws(!0,s.settings,p.settings))}function d(p){let b=-1;if(p!=null)if(Array.isArray(p))for(;++b<p.length;){const y=p[b];f(y)}else throw new TypeError("Expected a list of plugins, not `"+p+"`")}function g(p,b){let y=-1,S=-1;for(;++y<o.length;)if(o[y][0]===p){S=y;break}if(S===-1)o.push([p,...b]);else if(b.length>0){let[_,...j]=b;const L=o[S][1];gc(L)&&gc(_)&&(_=Ws(!0,L,_)),o[S]=[p,_,...j]}}}}const cw=new Bc().freeze();function nc(t,a){if(typeof a!="function")throw new TypeError("Cannot `"+t+"` without `parser`")}function tc(t,a){if(typeof a!="function")throw new TypeError("Cannot `"+t+"` without `compiler`")}function ic(t,a){if(a)throw new Error("Cannot call `"+t+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Dp(t){if(!gc(t)||typeof t.type!="string")throw new TypeError("Expected node, got `"+t+"`")}function jp(t,a,r){if(!r)throw new Error("`"+t+"` finished async. Use `"+a+"` instead")}function co(t){return fw(t)?t:new jg(t)}function fw(t){return!!(t&&typeof t=="object"&&"message"in t&&"messages"in t)}function hw(t){return typeof t=="string"||dw(t)}function dw(t){return!!(t&&typeof t=="object"&&"byteLength"in t&&"byteOffset"in t)}const mw="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",zp=[],Op={allowDangerousHtml:!0},pw=/^(https?|ircs?|mailto|xmpp)$/i,gw=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function yw(t){const a=bw(t),r=vw(t);return _w(a.runSync(a.parse(r),r),t)}function bw(t){const a=t.rehypePlugins||zp,r=t.remarkPlugins||zp,o=t.remarkRehypeOptions?{...t.remarkRehypeOptions,...Op}:Op;return cw().use(W_).use(r).use(XS,o).use(a)}function vw(t){const a=t.children||"",r=new jg;return typeof a=="string"&&(r.value=a),r}function _w(t,a){const r=a.allowedElements,o=a.allowElement,s=a.components,f=a.disallowedElements,h=a.skipHtml,d=a.unwrapDisallowed,g=a.urlTransform||Sw;for(const b of gw)Object.hasOwn(a,b.from)&&(""+b.from+(b.to?"use `"+b.to+"` instead":"remove it")+mw+b.id,void 0);return Dg(t,p),Nv(t,{Fragment:P.Fragment,components:s,ignoreInvalidStyle:!0,jsx:P.jsx,jsxs:P.jsxs,passKeys:!0,passNode:!0});function p(b,y,S){if(b.type==="raw"&&S&&typeof y=="number")return h?S.children.splice(y,1):S.children[y]={type:"text",value:b.value},y;if(b.type==="element"){let _;for(_ in Qs)if(Object.hasOwn(Qs,_)&&Object.hasOwn(b.properties,_)){const j=b.properties[_],L=Qs[_];(L===null||L.includes(b.tagName))&&(b.properties[_]=g(String(j||""),_,b))}}if(b.type==="element"){let _=r?!r.includes(b.tagName):f?f.includes(b.tagName):!1;if(!_&&o&&typeof y=="number"&&(_=!o(b,y,S)),_&&S&&typeof y=="number")return d&&b.children?S.children.splice(y,1,...b.children):S.children.splice(y,1),y}}}function Sw(t){const a=t.indexOf(":"),r=t.indexOf("?"),o=t.indexOf("#"),s=t.indexOf("/");return a===-1||s!==-1&&a>s||r!==-1&&a>r||o!==-1&&a>o||pw.test(t.slice(0,a))?t:""}function ww({node:t}){return P.jsxs("div",{className:"node-pane",children:[P.jsxs("h2",{className:"node-title",children:[t.emoji&&P.jsx("span",{className:"node-emoji",children:t.emoji}),t.title]}),P.jsx("div",{className:"node-content",children:P.jsx(yw,{children:t.content})})]})}function Rp({nodes:t,direction:a,labelFn:r,onSelect:o}){const s=Me.useRef(null),[f,h]=Me.useState(480),[d,g]=Me.useState(window.innerWidth>=768?130:100);Me.useEffect(()=>{const L=()=>{s.current&&h(s.current.offsetWidth),g(window.innerWidth>=768?130:100)};L();const Y=new ResizeObserver(L);return s.current&&Y.observe(s.current),window.addEventListener("resize",L),()=>{window.removeEventListener("resize",L),Y.disconnect()}},[]);const p=t.length,b=5,y=12,S=a==="up"?b+6+y:d-b-6-y,_=a==="up"?d+5:-5,j=4;return P.jsx("div",{className:`edge-pane ${a} ${t.length===0?"empty":""}`,ref:s,children:t.length>0&&P.jsx("svg",{className:"edge-svg",viewBox:`0 0 ${f} ${d}`,preserveAspectRatio:"xMidYMid meet",children:t.map((L,Y)=>{const B=(Y+1)/(p+1)*f,V=f/2,k=(S+_)/2,Q=a==="up"?S+b:S-b,ee=a==="up"?1:-1,R=V>B?1:V<B?-1:0;let K;R===0?K=`M ${B} ${Q} L ${V} ${_}`:K=[`M ${B} ${Q}`,`L ${B} ${k-j*ee}`,`Q ${B} ${k}, ${B+j*R} ${k}`,`L ${V-j*R} ${k}`,`Q ${V} ${k}, ${V} ${k+j*ee}`,`L ${V} ${_}`].join(" ");const ie=a==="up"?S-b-6:S+b+16;return P.jsxs("g",{className:"edge-group",onClick:()=>o(L.id),style:{cursor:"pointer"},children:[P.jsx("path",{d:K,className:"edge-line"}),P.jsx("circle",{cx:B,cy:S,r:b,className:"edge-circle"}),P.jsxs("text",{x:B,y:ie,className:"edge-title-text",children:[L.shortTitle,r(L)!=="0"&&` +${r(L)}`]})]},L.id)})})})}function xw({graph:t,currentId:a,onSelect:r}){const o=Me.useRef(null),[s,f]=Me.useState(()=>{const k=sessionStorage.getItem(`gv-transform-${t.meta.title}`);return k?JSON.parse(k):{x:0,y:0,scale:1}}),[h,d]=Me.useState(!1),[g,p]=Me.useState(!1),b=Me.useRef({x:0,y:0,tx:0,ty:0});Me.useEffect(()=>{h&&sessionStorage.setItem(`gv-transform-${t.meta.title}`,JSON.stringify(s))},[s,t.meta.title,h]);const{layoutNodes:y,edges:S,width:_,height:j}=Me.useMemo(()=>{const k={};let Q=0;const ee=Object.values(t.nodes).sort((F,M)=>F.id.localeCompare(M.id));for(const F of ee){const M=F.depth;k[M]||(k[M]=[]),k[M].push(F.id),Q=Math.max(Q,M)}const R=20,K=100,ie=90;let oe=0;for(const F of Object.values(k))oe=Math.max(oe,F.length);const pe=Math.max(360,oe*K+80),ne=(Q+1)*ie+80,W={},Se=[];for(let F=0;F<=Q;F++){const M=k[F]||[],X=M.length*K,ae=(pe-X)/2+K/2;M.forEach((be,x)=>{const A=ae+x*K,U=40+F*ie;W[be]={x:A,y:U},Se.push({id:be,x:A,y:U,indexInRow:x})})}const le=[];for(const F of Object.values(t.nodes))for(const M of F.parents)t.nodes[M]&&W[M]&&le.push({from:M,to:F.id,fromPos:W[M],toPos:W[F.id]});return{layoutNodes:Se,edges:le,width:pe,height:ne,nodeRadius:R}},[t]);Me.useEffect(()=>{if(!o.current||h)return;if(sessionStorage.getItem(`gv-transform-${t.meta.title}`)){d(!0);return}const Q=o.current.getBoundingClientRect();if(Q.width===0)return;const ee=Q.width/_,R=Q.height/j,K=Math.min(ee,R,2.5)*.9,ie=(Q.width-_*K)/2,oe=(Q.height-j*K)/2;f({x:ie,y:oe,scale:K}),d(!0)},[_,j,t.meta.title,h]);const L=Me.useCallback(k=>{k.target.closest(".gv-node")||(p(!0),b.current={x:k.clientX,y:k.clientY,tx:s.x,ty:s.y},k.currentTarget.setPointerCapture(k.pointerId))},[s.x,s.y]),Y=Me.useCallback(k=>{if(!g)return;const Q=k.clientX-b.current.x,ee=k.clientY-b.current.y;f(R=>({...R,x:b.current.tx+Q,y:b.current.ty+ee}))},[g]),B=Me.useCallback(()=>{p(!1)},[]),V=Me.useCallback(k=>{k.preventDefault();const Q=o.current.getBoundingClientRect(),ee=k.clientX-Q.left,R=k.clientY-Q.top,K=k.deltaY>0?.9:1.1;f(ie=>{const oe=Math.max(.2,Math.min(3,ie.scale*K)),pe=oe/ie.scale;return{scale:oe,x:ee-(ee-ie.x)*pe,y:R-(R-ie.y)*pe}})},[]);return P.jsx("div",{className:"graph-view-canvas",ref:o,onPointerDown:L,onPointerMove:Y,onPointerUp:B,onPointerCancel:B,onWheel:V,style:{cursor:g?"grabbing":"grab"},children:P.jsxs("svg",{className:"graph-view-svg",style:{transform:`translate(${s.x}px, ${s.y}px) scale(${s.scale})`,transformOrigin:"0 0"},width:_,height:j,viewBox:`0 0 ${_} ${j}`,children:[S.map((k,Q)=>{const ee=k.fromPos.y+20,R=k.toPos.y-20,K=(ee+R)/2;return P.jsx("path",{d:`M ${k.fromPos.x} ${ee} C ${k.fromPos.x} ${K}, ${k.toPos.x} ${K}, ${k.toPos.x} ${R}`,className:"gv-edge"},Q)}),y.map(k=>{const Q=t.nodes[k.id],R=k.indexInRow%2===0?k.y-28:k.y+34;return P.jsxs("g",{className:`gv-node ${k.id===a?"current":""}`,onClick:()=>r(k.id),children:[P.jsx("circle",{cx:k.x,cy:k.y,r:20}),P.jsx("rect",{x:k.x-Q.shortTitle.length*3.3-4,y:R-10,width:Q.shortTitle.length*6.6+8,height:14,rx:2,className:"gv-label-bg"}),P.jsx("text",{x:k.x,y:R,className:"gv-node-title",children:Q.shortTitle}),Q.emoji?P.jsx("text",{x:k.x,y:k.y+7,className:"gv-node-emoji",children:Q.emoji}):P.jsx("text",{x:k.x,y:k.y+5,className:"gv-node-depth",children:Q.depth})]},k.id)}),S.map((k,Q)=>P.jsxs("g",{children:[P.jsx("line",{x1:k.fromPos.x,y1:k.fromPos.y+13,x2:k.fromPos.x,y2:k.fromPos.y+21,className:"gv-edge-stub"}),P.jsx("circle",{cx:k.fromPos.x,cy:k.fromPos.y+13,r:1.5,className:"gv-edge-dot"}),P.jsx("line",{x1:k.toPos.x,y1:k.toPos.y-21,x2:k.toPos.x,y2:k.toPos.y-13,className:"gv-edge-stub"}),P.jsx("circle",{cx:k.toPos.x,cy:k.toPos.y-13,r:1.5,className:"gv-edge-dot"})]},`stubs-${Q}`))]})})}function Tw({graph:t,onBack:a}){const r=t.meta.start[0]??t.roots[0]??Object.keys(t.nodes)[0],[o,s]=Me.useState(r),[f,h]=Me.useState(!0),d=t.nodes[o];if(!d)return null;const g=d.parents.filter(k=>t.nodes[k]).map(k=>t.nodes[k]),p=d.children.filter(k=>t.nodes[k]).map(k=>t.nodes[k]),b=Me.useMemo(()=>Object.values(t.nodes).filter(k=>k.depth===d.depth).sort((k,Q)=>k.id.localeCompare(Q.id)),[t,d.depth,o]),y=Me.useRef(null),S=Me.useRef(null),_=Me.useRef(0),j=Me.useCallback(k=>{if(k==="left"){if(b.length<=1)return;const Q=b.findIndex(ee=>ee.id===o);Q<b.length-1&&s(b[Q+1].id)}else if(k==="right"){if(b.length<=1)return;const Q=b.findIndex(ee=>ee.id===o);Q>0&&s(b[Q-1].id)}else if(k==="up"){const Q=t.nodes[o].children.filter(ee=>t.nodes[ee]);Q.length>0&&s(Q[0])}else if(k==="down"){const Q=t.nodes[o].parents.filter(ee=>t.nodes[ee]);Q.length>0&&s(Q[0])}},[o,b,t]),L=Me.useCallback(k=>{k.pointerType!=="mouse"&&k.button===0&&(k.target.closest("button, a")||(y.current={x:k.clientX,y:k.clientY,t:Date.now(),id:k.pointerId}))},[]),Y=Me.useCallback(k=>{if(!y.current||y.current.id!==k.pointerId)return;const Q=k.clientX-y.current.x,ee=k.clientY-y.current.y,R=Date.now()-y.current.t;if(y.current=null,R>600)return;const K=Math.abs(Q),ie=Math.abs(ee),oe=40;K>ie&&K>oe?j(Q<0?"left":"right"):ie>K&&ie>oe&&j(ee<0?"up":"down")},[j]);Me.useEffect(()=>{const k=S.current;if(!k||f)return;const Q=ee=>{const{deltaX:R,deltaY:K}=ee,ie=Math.abs(R),oe=Math.abs(K);ie>oe&&ie>10&&ee.cancelable&&ee.preventDefault();const pe=Date.now();if(pe-_.current<500)return;const ne=20;if(ie>oe&&ie>ne)j(R>0?"left":"right"),_.current=pe;else if(oe>ie&&oe>ne){const W=k.querySelector(".node-pane");if(W){const Se=W.scrollTop<=0,le=Math.ceil(W.scrollTop+W.clientHeight)>=W.scrollHeight;K<0&&Se?(j("down"),_.current=pe,ee.cancelable&&ee.preventDefault()):K>0&&le&&(j("up"),_.current=pe,ee.cancelable&&ee.preventDefault())}}};return k.addEventListener("wheel",Q,{passive:!1}),()=>k.removeEventListener("wheel",Q)},[j,f]),Me.useEffect(()=>{function k(Q){f||(Q.key==="ArrowLeft"?j("right"):Q.key==="ArrowRight"?j("left"):Q.key==="ArrowUp"?j("down"):Q.key==="ArrowDown"&&j("up"))}return window.addEventListener("keydown",k),()=>window.removeEventListener("keydown",k)},[j,f]);const B=P.jsxs("svg",{className:"header-icon-svg",viewBox:"0 0 20 20",width:"20",height:"20",children:[P.jsx("circle",{cx:"10",cy:"4",r:"2.5"}),P.jsx("circle",{cx:"5",cy:"14",r:"2.5"}),P.jsx("circle",{cx:"15",cy:"14",r:"2.5"}),P.jsx("line",{x1:"10",y1:"6.5",x2:"5",y2:"11.5"}),P.jsx("line",{x1:"10",y1:"6.5",x2:"15",y2:"11.5"})]}),V=P.jsxs("svg",{className:"header-icon-svg",viewBox:"0 0 20 20",width:"20",height:"20",children:[P.jsx("rect",{x:"3",y:"2",width:"14",height:"16",rx:"2",fill:"none",stroke:"#000",strokeWidth:"1.5"}),P.jsx("line",{x1:"6",y1:"6",x2:"14",y2:"6",stroke:"#000",strokeWidth:"1.5"}),P.jsx("line",{x1:"6",y1:"10",x2:"14",y2:"10",stroke:"#000",strokeWidth:"1.5"}),P.jsx("line",{x1:"6",y1:"14",x2:"11",y2:"14",stroke:"#000",strokeWidth:"1.5"})]});return P.jsx("div",{className:"explorer-wrapper",children:P.jsxs("div",{className:"explorer",children:[P.jsxs("div",{className:"header-bar",children:[P.jsx("button",{className:"header-btn",onClick:a,title:"Back to home","aria-label":"Back",children:P.jsx("svg",{className:"header-icon-svg",viewBox:"0 0 20 20",width:"20",height:"20",children:P.jsx("path",{d:"M10 3 L3 9 V17 H8 V12 H12 V17 H17 V9 L10 3 Z",fill:"none",stroke:"#000",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),P.jsx("span",{className:"header-title",children:t.meta.title}),P.jsx("button",{className:"header-btn",onClick:()=>h(!f),title:f?"Details view":"Graph view","aria-label":f?"Details view":"Graph view",children:f?V:B})]}),f?P.jsx(xw,{graph:t,currentId:o,onSelect:k=>{s(k),h(!1)}}):P.jsxs(P.Fragment,{children:[P.jsx(Rp,{nodes:g,direction:"up",labelFn:k=>String(k.depth),onSelect:s}),P.jsxs("div",{className:"mid-pane-wrapper",ref:S,onPointerDown:L,onPointerUp:Y,children:[P.jsx(ww,{node:d}),b.length>1&&P.jsxs("div",{className:"sibling-carousel",children:[P.jsx("button",{className:"nav-arrow-mini left",onClick:()=>j("right"),disabled:b.findIndex(k=>k.id===o)===0,"aria-label":"Previous sibling",children:P.jsx("svg",{viewBox:"0 0 20 20",width:"16",height:"16",children:P.jsx("path",{d:"M12 5 L7 10 L12 15",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),P.jsx("div",{className:"sibling-dots",children:b.map(k=>P.jsx("button",{className:`sibling-dot ${k.id===o?"active":""}`,onClick:()=>s(k.id),title:k.shortTitle,"aria-label":k.shortTitle},k.id))}),P.jsx("button",{className:"nav-arrow-mini right",onClick:()=>j("left"),disabled:b.findIndex(k=>k.id===o)===b.length-1,"aria-label":"Next sibling",children:P.jsx("svg",{viewBox:"0 0 20 20",width:"16",height:"16",children:P.jsx("path",{d:"M8 5 L13 10 L8 15",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]})]}),P.jsx(Rp,{nodes:p,direction:"down",labelFn:k=>String(k.height),onSelect:s})]})]})})}function zg(t){return typeof t>"u"||t===null}function Aw(t){return typeof t=="object"&&t!==null}function Ew(t){return Array.isArray(t)?t:zg(t)?[]:[t]}function kw(t,a){var r,o,s,f;if(a)for(f=Object.keys(a),r=0,o=f.length;r<o;r+=1)s=f[r],t[s]=a[s];return t}function Cw(t,a){var r="",o;for(o=0;o<a;o+=1)r+=t;return r}function Mw(t){return t===0&&Number.NEGATIVE_INFINITY===1/t}var Nw=zg,Dw=Aw,jw=Ew,zw=Cw,Ow=Mw,Rw=kw,un={isNothing:Nw,isObject:Dw,toArray:jw,repeat:zw,isNegativeZero:Ow,extend:Rw};function Og(t,a){var r="",o=t.reason||"(unknown reason)";return t.mark?(t.mark.name&&(r+='in "'+t.mark.name+'" '),r+="("+(t.mark.line+1)+":"+(t.mark.column+1)+")",!a&&t.mark.snippet&&(r+=`

`+t.mark.snippet),o+" "+r):o}function Ba(t,a){Error.call(this),this.name="YAMLException",this.reason=t,this.mark=a,this.message=Og(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Ba.prototype=Object.create(Error.prototype);Ba.prototype.constructor=Ba;Ba.prototype.toString=function(a){return this.name+": "+Og(this,a)};var xn=Ba;function lc(t,a,r,o,s){var f="",h="",d=Math.floor(s/2)-1;return o-a>d&&(f=" ... ",a=o-d+f.length),r-o>d&&(h=" ...",r=o+d-h.length),{str:f+t.slice(a,r).replace(/\t/g,"→")+h,pos:o-a+f.length}}function ac(t,a){return un.repeat(" ",a-t.length)+t}function Lw(t,a){if(a=Object.create(a||null),!t.buffer)return null;a.maxLength||(a.maxLength=79),typeof a.indent!="number"&&(a.indent=1),typeof a.linesBefore!="number"&&(a.linesBefore=3),typeof a.linesAfter!="number"&&(a.linesAfter=2);for(var r=/\r?\n|\r|\0/g,o=[0],s=[],f,h=-1;f=r.exec(t.buffer);)s.push(f.index),o.push(f.index+f[0].length),t.position<=f.index&&h<0&&(h=o.length-2);h<0&&(h=o.length-1);var d="",g,p,b=Math.min(t.line+a.linesAfter,s.length).toString().length,y=a.maxLength-(a.indent+b+3);for(g=1;g<=a.linesBefore&&!(h-g<0);g++)p=lc(t.buffer,o[h-g],s[h-g],t.position-(o[h]-o[h-g]),y),d=un.repeat(" ",a.indent)+ac((t.line-g+1).toString(),b)+" | "+p.str+`
`+d;for(p=lc(t.buffer,o[h],s[h],t.position,y),d+=un.repeat(" ",a.indent)+ac((t.line+1).toString(),b)+" | "+p.str+`
`,d+=un.repeat("-",a.indent+b+3+p.pos)+`^
`,g=1;g<=a.linesAfter&&!(h+g>=s.length);g++)p=lc(t.buffer,o[h+g],s[h+g],t.position-(o[h]-o[h+g]),y),d+=un.repeat(" ",a.indent)+ac((t.line+g+1).toString(),b)+" | "+p.str+`
`;return d.replace(/\n$/,"")}var Bw=Lw,Hw=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],Uw=["scalar","sequence","mapping"];function Gw(t){var a={};return t!==null&&Object.keys(t).forEach(function(r){t[r].forEach(function(o){a[String(o)]=r})}),a}function qw(t,a){if(a=a||{},Object.keys(a).forEach(function(r){if(Hw.indexOf(r)===-1)throw new xn('Unknown option "'+r+'" is met in definition of "'+t+'" YAML type.')}),this.options=a,this.tag=t,this.kind=a.kind||null,this.resolve=a.resolve||function(){return!0},this.construct=a.construct||function(r){return r},this.instanceOf=a.instanceOf||null,this.predicate=a.predicate||null,this.represent=a.represent||null,this.representName=a.representName||null,this.defaultStyle=a.defaultStyle||null,this.multi=a.multi||!1,this.styleAliases=Gw(a.styleAliases||null),Uw.indexOf(this.kind)===-1)throw new xn('Unknown kind "'+this.kind+'" is specified for "'+t+'" YAML type.')}var gn=qw;function Lp(t,a){var r=[];return t[a].forEach(function(o){var s=r.length;r.forEach(function(f,h){f.tag===o.tag&&f.kind===o.kind&&f.multi===o.multi&&(s=h)}),r[s]=o}),r}function Iw(){var t={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},a,r;function o(s){s.multi?(t.multi[s.kind].push(s),t.multi.fallback.push(s)):t[s.kind][s.tag]=t.fallback[s.tag]=s}for(a=0,r=arguments.length;a<r;a+=1)arguments[a].forEach(o);return t}function bc(t){return this.extend(t)}bc.prototype.extend=function(a){var r=[],o=[];if(a instanceof gn)o.push(a);else if(Array.isArray(a))o=o.concat(a);else if(a&&(Array.isArray(a.implicit)||Array.isArray(a.explicit)))a.implicit&&(r=r.concat(a.implicit)),a.explicit&&(o=o.concat(a.explicit));else throw new xn("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");r.forEach(function(f){if(!(f instanceof gn))throw new xn("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(f.loadKind&&f.loadKind!=="scalar")throw new xn("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(f.multi)throw new xn("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),o.forEach(function(f){if(!(f instanceof gn))throw new xn("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var s=Object.create(bc.prototype);return s.implicit=(this.implicit||[]).concat(r),s.explicit=(this.explicit||[]).concat(o),s.compiledImplicit=Lp(s,"implicit"),s.compiledExplicit=Lp(s,"explicit"),s.compiledTypeMap=Iw(s.compiledImplicit,s.compiledExplicit),s};var Rg=bc,Lg=new gn("tag:yaml.org,2002:str",{kind:"scalar",construct:function(t){return t!==null?t:""}}),Bg=new gn("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(t){return t!==null?t:[]}}),Hg=new gn("tag:yaml.org,2002:map",{kind:"mapping",construct:function(t){return t!==null?t:{}}}),Ug=new Rg({explicit:[Lg,Bg,Hg]});function Yw(t){if(t===null)return!0;var a=t.length;return a===1&&t==="~"||a===4&&(t==="null"||t==="Null"||t==="NULL")}function Fw(){return null}function Vw(t){return t===null}var Gg=new gn("tag:yaml.org,2002:null",{kind:"scalar",resolve:Yw,construct:Fw,predicate:Vw,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function Xw(t){if(t===null)return!1;var a=t.length;return a===4&&(t==="true"||t==="True"||t==="TRUE")||a===5&&(t==="false"||t==="False"||t==="FALSE")}function Qw(t){return t==="true"||t==="True"||t==="TRUE"}function Kw(t){return Object.prototype.toString.call(t)==="[object Boolean]"}var qg=new gn("tag:yaml.org,2002:bool",{kind:"scalar",resolve:Xw,construct:Qw,predicate:Kw,represent:{lowercase:function(t){return t?"true":"false"},uppercase:function(t){return t?"TRUE":"FALSE"},camelcase:function(t){return t?"True":"False"}},defaultStyle:"lowercase"});function Zw(t){return 48<=t&&t<=57||65<=t&&t<=70||97<=t&&t<=102}function Jw(t){return 48<=t&&t<=55}function Ww(t){return 48<=t&&t<=57}function Pw(t){if(t===null)return!1;var a=t.length,r=0,o=!1,s;if(!a)return!1;if(s=t[r],(s==="-"||s==="+")&&(s=t[++r]),s==="0"){if(r+1===a)return!0;if(s=t[++r],s==="b"){for(r++;r<a;r++)if(s=t[r],s!=="_"){if(s!=="0"&&s!=="1")return!1;o=!0}return o&&s!=="_"}if(s==="x"){for(r++;r<a;r++)if(s=t[r],s!=="_"){if(!Zw(t.charCodeAt(r)))return!1;o=!0}return o&&s!=="_"}if(s==="o"){for(r++;r<a;r++)if(s=t[r],s!=="_"){if(!Jw(t.charCodeAt(r)))return!1;o=!0}return o&&s!=="_"}}if(s==="_")return!1;for(;r<a;r++)if(s=t[r],s!=="_"){if(!Ww(t.charCodeAt(r)))return!1;o=!0}return!(!o||s==="_")}function $w(t){var a=t,r=1,o;if(a.indexOf("_")!==-1&&(a=a.replace(/_/g,"")),o=a[0],(o==="-"||o==="+")&&(o==="-"&&(r=-1),a=a.slice(1),o=a[0]),a==="0")return 0;if(o==="0"){if(a[1]==="b")return r*parseInt(a.slice(2),2);if(a[1]==="x")return r*parseInt(a.slice(2),16);if(a[1]==="o")return r*parseInt(a.slice(2),8)}return r*parseInt(a,10)}function ex(t){return Object.prototype.toString.call(t)==="[object Number]"&&t%1===0&&!un.isNegativeZero(t)}var Ig=new gn("tag:yaml.org,2002:int",{kind:"scalar",resolve:Pw,construct:$w,predicate:ex,represent:{binary:function(t){return t>=0?"0b"+t.toString(2):"-0b"+t.toString(2).slice(1)},octal:function(t){return t>=0?"0o"+t.toString(8):"-0o"+t.toString(8).slice(1)},decimal:function(t){return t.toString(10)},hexadecimal:function(t){return t>=0?"0x"+t.toString(16).toUpperCase():"-0x"+t.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),nx=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function tx(t){return!(t===null||!nx.test(t)||t[t.length-1]==="_")}function ix(t){var a,r;return a=t.replace(/_/g,"").toLowerCase(),r=a[0]==="-"?-1:1,"+-".indexOf(a[0])>=0&&(a=a.slice(1)),a===".inf"?r===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:a===".nan"?NaN:r*parseFloat(a,10)}var lx=/^[-+]?[0-9]+e/;function ax(t,a){var r;if(isNaN(t))switch(a){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===t)switch(a){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===t)switch(a){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(un.isNegativeZero(t))return"-0.0";return r=t.toString(10),lx.test(r)?r.replace("e",".e"):r}function rx(t){return Object.prototype.toString.call(t)==="[object Number]"&&(t%1!==0||un.isNegativeZero(t))}var Yg=new gn("tag:yaml.org,2002:float",{kind:"scalar",resolve:tx,construct:ix,predicate:rx,represent:ax,defaultStyle:"lowercase"}),Fg=Ug.extend({implicit:[Gg,qg,Ig,Yg]}),Vg=Fg,Xg=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),Qg=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function ox(t){return t===null?!1:Xg.exec(t)!==null||Qg.exec(t)!==null}function ux(t){var a,r,o,s,f,h,d,g=0,p=null,b,y,S;if(a=Xg.exec(t),a===null&&(a=Qg.exec(t)),a===null)throw new Error("Date resolve error");if(r=+a[1],o=+a[2]-1,s=+a[3],!a[4])return new Date(Date.UTC(r,o,s));if(f=+a[4],h=+a[5],d=+a[6],a[7]){for(g=a[7].slice(0,3);g.length<3;)g+="0";g=+g}return a[9]&&(b=+a[10],y=+(a[11]||0),p=(b*60+y)*6e4,a[9]==="-"&&(p=-p)),S=new Date(Date.UTC(r,o,s,f,h,d,g)),p&&S.setTime(S.getTime()-p),S}function sx(t){return t.toISOString()}var Kg=new gn("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:ox,construct:ux,instanceOf:Date,represent:sx});function cx(t){return t==="<<"||t===null}var Zg=new gn("tag:yaml.org,2002:merge",{kind:"scalar",resolve:cx}),Hc=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function fx(t){if(t===null)return!1;var a,r,o=0,s=t.length,f=Hc;for(r=0;r<s;r++)if(a=f.indexOf(t.charAt(r)),!(a>64)){if(a<0)return!1;o+=6}return o%8===0}function hx(t){var a,r,o=t.replace(/[\r\n=]/g,""),s=o.length,f=Hc,h=0,d=[];for(a=0;a<s;a++)a%4===0&&a&&(d.push(h>>16&255),d.push(h>>8&255),d.push(h&255)),h=h<<6|f.indexOf(o.charAt(a));return r=s%4*6,r===0?(d.push(h>>16&255),d.push(h>>8&255),d.push(h&255)):r===18?(d.push(h>>10&255),d.push(h>>2&255)):r===12&&d.push(h>>4&255),new Uint8Array(d)}function dx(t){var a="",r=0,o,s,f=t.length,h=Hc;for(o=0;o<f;o++)o%3===0&&o&&(a+=h[r>>18&63],a+=h[r>>12&63],a+=h[r>>6&63],a+=h[r&63]),r=(r<<8)+t[o];return s=f%3,s===0?(a+=h[r>>18&63],a+=h[r>>12&63],a+=h[r>>6&63],a+=h[r&63]):s===2?(a+=h[r>>10&63],a+=h[r>>4&63],a+=h[r<<2&63],a+=h[64]):s===1&&(a+=h[r>>2&63],a+=h[r<<4&63],a+=h[64],a+=h[64]),a}function mx(t){return Object.prototype.toString.call(t)==="[object Uint8Array]"}var Jg=new gn("tag:yaml.org,2002:binary",{kind:"scalar",resolve:fx,construct:hx,predicate:mx,represent:dx}),px=Object.prototype.hasOwnProperty,gx=Object.prototype.toString;function yx(t){if(t===null)return!0;var a=[],r,o,s,f,h,d=t;for(r=0,o=d.length;r<o;r+=1){if(s=d[r],h=!1,gx.call(s)!=="[object Object]")return!1;for(f in s)if(px.call(s,f))if(!h)h=!0;else return!1;if(!h)return!1;if(a.indexOf(f)===-1)a.push(f);else return!1}return!0}function bx(t){return t!==null?t:[]}var Wg=new gn("tag:yaml.org,2002:omap",{kind:"sequence",resolve:yx,construct:bx}),vx=Object.prototype.toString;function _x(t){if(t===null)return!0;var a,r,o,s,f,h=t;for(f=new Array(h.length),a=0,r=h.length;a<r;a+=1){if(o=h[a],vx.call(o)!=="[object Object]"||(s=Object.keys(o),s.length!==1))return!1;f[a]=[s[0],o[s[0]]]}return!0}function Sx(t){if(t===null)return[];var a,r,o,s,f,h=t;for(f=new Array(h.length),a=0,r=h.length;a<r;a+=1)o=h[a],s=Object.keys(o),f[a]=[s[0],o[s[0]]];return f}var Pg=new gn("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:_x,construct:Sx}),wx=Object.prototype.hasOwnProperty;function xx(t){if(t===null)return!0;var a,r=t;for(a in r)if(wx.call(r,a)&&r[a]!==null)return!1;return!0}function Tx(t){return t!==null?t:{}}var $g=new gn("tag:yaml.org,2002:set",{kind:"mapping",resolve:xx,construct:Tx}),Uc=Vg.extend({implicit:[Kg,Zg],explicit:[Jg,Wg,Pg,$g]}),fi=Object.prototype.hasOwnProperty,po=1,ey=2,ny=3,go=4,rc=1,Ax=2,Bp=3,Ex=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,kx=/[\x85\u2028\u2029]/,Cx=/[,\[\]\{\}]/,ty=/^(?:!|!!|![a-z\-]+!)$/i,iy=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function Hp(t){return Object.prototype.toString.call(t)}function mt(t){return t===10||t===13}function Di(t){return t===9||t===32}function zn(t){return t===9||t===32||t===10||t===13}function El(t){return t===44||t===91||t===93||t===123||t===125}function Mx(t){var a;return 48<=t&&t<=57?t-48:(a=t|32,97<=a&&a<=102?a-97+10:-1)}function Nx(t){return t===120?2:t===117?4:t===85?8:0}function Dx(t){return 48<=t&&t<=57?t-48:-1}function Up(t){return t===48?"\0":t===97?"\x07":t===98?"\b":t===116||t===9?"	":t===110?`
`:t===118?"\v":t===102?"\f":t===114?"\r":t===101?"\x1B":t===32?" ":t===34?'"':t===47?"/":t===92?"\\":t===78?"":t===95?" ":t===76?"\u2028":t===80?"\u2029":""}function jx(t){return t<=65535?String.fromCharCode(t):String.fromCharCode((t-65536>>10)+55296,(t-65536&1023)+56320)}function ly(t,a,r){a==="__proto__"?Object.defineProperty(t,a,{configurable:!0,enumerable:!0,writable:!0,value:r}):t[a]=r}var ay=new Array(256),ry=new Array(256);for(var xl=0;xl<256;xl++)ay[xl]=Up(xl)?1:0,ry[xl]=Up(xl);function zx(t,a){this.input=t,this.filename=a.filename||null,this.schema=a.schema||Uc,this.onWarning=a.onWarning||null,this.legacy=a.legacy||!1,this.json=a.json||!1,this.listener=a.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=t.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.firstTabInLine=-1,this.documents=[]}function oy(t,a){var r={name:t.filename,buffer:t.input.slice(0,-1),position:t.position,line:t.line,column:t.position-t.lineStart};return r.snippet=Bw(r),new xn(a,r)}function ue(t,a){throw oy(t,a)}function yo(t,a){t.onWarning&&t.onWarning.call(null,oy(t,a))}var Gp={YAML:function(a,r,o){var s,f,h;a.version!==null&&ue(a,"duplication of %YAML directive"),o.length!==1&&ue(a,"YAML directive accepts exactly one argument"),s=/^([0-9]+)\.([0-9]+)$/.exec(o[0]),s===null&&ue(a,"ill-formed argument of the YAML directive"),f=parseInt(s[1],10),h=parseInt(s[2],10),f!==1&&ue(a,"unacceptable YAML version of the document"),a.version=o[0],a.checkLineBreaks=h<2,h!==1&&h!==2&&yo(a,"unsupported YAML version of the document")},TAG:function(a,r,o){var s,f;o.length!==2&&ue(a,"TAG directive accepts exactly two arguments"),s=o[0],f=o[1],ty.test(s)||ue(a,"ill-formed tag handle (first argument) of the TAG directive"),fi.call(a.tagMap,s)&&ue(a,'there is a previously declared suffix for "'+s+'" tag handle'),iy.test(f)||ue(a,"ill-formed tag prefix (second argument) of the TAG directive");try{f=decodeURIComponent(f)}catch{ue(a,"tag prefix is malformed: "+f)}a.tagMap[s]=f}};function ci(t,a,r,o){var s,f,h,d;if(a<r){if(d=t.input.slice(a,r),o)for(s=0,f=d.length;s<f;s+=1)h=d.charCodeAt(s),h===9||32<=h&&h<=1114111||ue(t,"expected valid JSON character");else Ex.test(d)&&ue(t,"the stream contains non-printable characters");t.result+=d}}function qp(t,a,r,o){var s,f,h,d;for(un.isObject(r)||ue(t,"cannot merge mappings; the provided source object is unacceptable"),s=Object.keys(r),h=0,d=s.length;h<d;h+=1)f=s[h],fi.call(a,f)||(ly(a,f,r[f]),o[f]=!0)}function kl(t,a,r,o,s,f,h,d,g){var p,b;if(Array.isArray(s))for(s=Array.prototype.slice.call(s),p=0,b=s.length;p<b;p+=1)Array.isArray(s[p])&&ue(t,"nested arrays are not supported inside keys"),typeof s=="object"&&Hp(s[p])==="[object Object]"&&(s[p]="[object Object]");if(typeof s=="object"&&Hp(s)==="[object Object]"&&(s="[object Object]"),s=String(s),a===null&&(a={}),o==="tag:yaml.org,2002:merge")if(Array.isArray(f))for(p=0,b=f.length;p<b;p+=1)qp(t,a,f[p],r);else qp(t,a,f,r);else!t.json&&!fi.call(r,s)&&fi.call(a,s)&&(t.line=h||t.line,t.lineStart=d||t.lineStart,t.position=g||t.position,ue(t,"duplicated mapping key")),ly(a,s,f),delete r[s];return a}function Gc(t){var a;a=t.input.charCodeAt(t.position),a===10?t.position++:a===13?(t.position++,t.input.charCodeAt(t.position)===10&&t.position++):ue(t,"a line break is expected"),t.line+=1,t.lineStart=t.position,t.firstTabInLine=-1}function an(t,a,r){for(var o=0,s=t.input.charCodeAt(t.position);s!==0;){for(;Di(s);)s===9&&t.firstTabInLine===-1&&(t.firstTabInLine=t.position),s=t.input.charCodeAt(++t.position);if(a&&s===35)do s=t.input.charCodeAt(++t.position);while(s!==10&&s!==13&&s!==0);if(mt(s))for(Gc(t),s=t.input.charCodeAt(t.position),o++,t.lineIndent=0;s===32;)t.lineIndent++,s=t.input.charCodeAt(++t.position);else break}return r!==-1&&o!==0&&t.lineIndent<r&&yo(t,"deficient indentation"),o}function xo(t){var a=t.position,r;return r=t.input.charCodeAt(a),!!((r===45||r===46)&&r===t.input.charCodeAt(a+1)&&r===t.input.charCodeAt(a+2)&&(a+=3,r=t.input.charCodeAt(a),r===0||zn(r)))}function qc(t,a){a===1?t.result+=" ":a>1&&(t.result+=un.repeat(`
`,a-1))}function Ox(t,a,r){var o,s,f,h,d,g,p,b,y=t.kind,S=t.result,_;if(_=t.input.charCodeAt(t.position),zn(_)||El(_)||_===35||_===38||_===42||_===33||_===124||_===62||_===39||_===34||_===37||_===64||_===96||(_===63||_===45)&&(s=t.input.charCodeAt(t.position+1),zn(s)||r&&El(s)))return!1;for(t.kind="scalar",t.result="",f=h=t.position,d=!1;_!==0;){if(_===58){if(s=t.input.charCodeAt(t.position+1),zn(s)||r&&El(s))break}else if(_===35){if(o=t.input.charCodeAt(t.position-1),zn(o))break}else{if(t.position===t.lineStart&&xo(t)||r&&El(_))break;if(mt(_))if(g=t.line,p=t.lineStart,b=t.lineIndent,an(t,!1,-1),t.lineIndent>=a){d=!0,_=t.input.charCodeAt(t.position);continue}else{t.position=h,t.line=g,t.lineStart=p,t.lineIndent=b;break}}d&&(ci(t,f,h,!1),qc(t,t.line-g),f=h=t.position,d=!1),Di(_)||(h=t.position+1),_=t.input.charCodeAt(++t.position)}return ci(t,f,h,!1),t.result?!0:(t.kind=y,t.result=S,!1)}function Rx(t,a){var r,o,s;if(r=t.input.charCodeAt(t.position),r!==39)return!1;for(t.kind="scalar",t.result="",t.position++,o=s=t.position;(r=t.input.charCodeAt(t.position))!==0;)if(r===39)if(ci(t,o,t.position,!0),r=t.input.charCodeAt(++t.position),r===39)o=t.position,t.position++,s=t.position;else return!0;else mt(r)?(ci(t,o,s,!0),qc(t,an(t,!1,a)),o=s=t.position):t.position===t.lineStart&&xo(t)?ue(t,"unexpected end of the document within a single quoted scalar"):(t.position++,s=t.position);ue(t,"unexpected end of the stream within a single quoted scalar")}function Lx(t,a){var r,o,s,f,h,d;if(d=t.input.charCodeAt(t.position),d!==34)return!1;for(t.kind="scalar",t.result="",t.position++,r=o=t.position;(d=t.input.charCodeAt(t.position))!==0;){if(d===34)return ci(t,r,t.position,!0),t.position++,!0;if(d===92){if(ci(t,r,t.position,!0),d=t.input.charCodeAt(++t.position),mt(d))an(t,!1,a);else if(d<256&&ay[d])t.result+=ry[d],t.position++;else if((h=Nx(d))>0){for(s=h,f=0;s>0;s--)d=t.input.charCodeAt(++t.position),(h=Mx(d))>=0?f=(f<<4)+h:ue(t,"expected hexadecimal character");t.result+=jx(f),t.position++}else ue(t,"unknown escape sequence");r=o=t.position}else mt(d)?(ci(t,r,o,!0),qc(t,an(t,!1,a)),r=o=t.position):t.position===t.lineStart&&xo(t)?ue(t,"unexpected end of the document within a double quoted scalar"):(t.position++,o=t.position)}ue(t,"unexpected end of the stream within a double quoted scalar")}function Bx(t,a){var r=!0,o,s,f,h=t.tag,d,g=t.anchor,p,b,y,S,_,j=Object.create(null),L,Y,B,V;if(V=t.input.charCodeAt(t.position),V===91)b=93,_=!1,d=[];else if(V===123)b=125,_=!0,d={};else return!1;for(t.anchor!==null&&(t.anchorMap[t.anchor]=d),V=t.input.charCodeAt(++t.position);V!==0;){if(an(t,!0,a),V=t.input.charCodeAt(t.position),V===b)return t.position++,t.tag=h,t.anchor=g,t.kind=_?"mapping":"sequence",t.result=d,!0;r?V===44&&ue(t,"expected the node content, but found ','"):ue(t,"missed comma between flow collection entries"),Y=L=B=null,y=S=!1,V===63&&(p=t.input.charCodeAt(t.position+1),zn(p)&&(y=S=!0,t.position++,an(t,!0,a))),o=t.line,s=t.lineStart,f=t.position,Nl(t,a,po,!1,!0),Y=t.tag,L=t.result,an(t,!0,a),V=t.input.charCodeAt(t.position),(S||t.line===o)&&V===58&&(y=!0,V=t.input.charCodeAt(++t.position),an(t,!0,a),Nl(t,a,po,!1,!0),B=t.result),_?kl(t,d,j,Y,L,B,o,s,f):y?d.push(kl(t,null,j,Y,L,B,o,s,f)):d.push(L),an(t,!0,a),V=t.input.charCodeAt(t.position),V===44?(r=!0,V=t.input.charCodeAt(++t.position)):r=!1}ue(t,"unexpected end of the stream within a flow collection")}function Hx(t,a){var r,o,s=rc,f=!1,h=!1,d=a,g=0,p=!1,b,y;if(y=t.input.charCodeAt(t.position),y===124)o=!1;else if(y===62)o=!0;else return!1;for(t.kind="scalar",t.result="";y!==0;)if(y=t.input.charCodeAt(++t.position),y===43||y===45)rc===s?s=y===43?Bp:Ax:ue(t,"repeat of a chomping mode identifier");else if((b=Dx(y))>=0)b===0?ue(t,"bad explicit indentation width of a block scalar; it cannot be less than one"):h?ue(t,"repeat of an indentation width identifier"):(d=a+b-1,h=!0);else break;if(Di(y)){do y=t.input.charCodeAt(++t.position);while(Di(y));if(y===35)do y=t.input.charCodeAt(++t.position);while(!mt(y)&&y!==0)}for(;y!==0;){for(Gc(t),t.lineIndent=0,y=t.input.charCodeAt(t.position);(!h||t.lineIndent<d)&&y===32;)t.lineIndent++,y=t.input.charCodeAt(++t.position);if(!h&&t.lineIndent>d&&(d=t.lineIndent),mt(y)){g++;continue}if(t.lineIndent<d){s===Bp?t.result+=un.repeat(`
`,f?1+g:g):s===rc&&f&&(t.result+=`
`);break}for(o?Di(y)?(p=!0,t.result+=un.repeat(`
`,f?1+g:g)):p?(p=!1,t.result+=un.repeat(`
`,g+1)):g===0?f&&(t.result+=" "):t.result+=un.repeat(`
`,g):t.result+=un.repeat(`
`,f?1+g:g),f=!0,h=!0,g=0,r=t.position;!mt(y)&&y!==0;)y=t.input.charCodeAt(++t.position);ci(t,r,t.position,!1)}return!0}function Ip(t,a){var r,o=t.tag,s=t.anchor,f=[],h,d=!1,g;if(t.firstTabInLine!==-1)return!1;for(t.anchor!==null&&(t.anchorMap[t.anchor]=f),g=t.input.charCodeAt(t.position);g!==0&&(t.firstTabInLine!==-1&&(t.position=t.firstTabInLine,ue(t,"tab characters must not be used in indentation")),!(g!==45||(h=t.input.charCodeAt(t.position+1),!zn(h))));){if(d=!0,t.position++,an(t,!0,-1)&&t.lineIndent<=a){f.push(null),g=t.input.charCodeAt(t.position);continue}if(r=t.line,Nl(t,a,ny,!1,!0),f.push(t.result),an(t,!0,-1),g=t.input.charCodeAt(t.position),(t.line===r||t.lineIndent>a)&&g!==0)ue(t,"bad indentation of a sequence entry");else if(t.lineIndent<a)break}return d?(t.tag=o,t.anchor=s,t.kind="sequence",t.result=f,!0):!1}function Ux(t,a,r){var o,s,f,h,d,g,p=t.tag,b=t.anchor,y={},S=Object.create(null),_=null,j=null,L=null,Y=!1,B=!1,V;if(t.firstTabInLine!==-1)return!1;for(t.anchor!==null&&(t.anchorMap[t.anchor]=y),V=t.input.charCodeAt(t.position);V!==0;){if(!Y&&t.firstTabInLine!==-1&&(t.position=t.firstTabInLine,ue(t,"tab characters must not be used in indentation")),o=t.input.charCodeAt(t.position+1),f=t.line,(V===63||V===58)&&zn(o))V===63?(Y&&(kl(t,y,S,_,j,null,h,d,g),_=j=L=null),B=!0,Y=!0,s=!0):Y?(Y=!1,s=!0):ue(t,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),t.position+=1,V=o;else{if(h=t.line,d=t.lineStart,g=t.position,!Nl(t,r,ey,!1,!0))break;if(t.line===f){for(V=t.input.charCodeAt(t.position);Di(V);)V=t.input.charCodeAt(++t.position);if(V===58)V=t.input.charCodeAt(++t.position),zn(V)||ue(t,"a whitespace character is expected after the key-value separator within a block mapping"),Y&&(kl(t,y,S,_,j,null,h,d,g),_=j=L=null),B=!0,Y=!1,s=!1,_=t.tag,j=t.result;else if(B)ue(t,"can not read an implicit mapping pair; a colon is missed");else return t.tag=p,t.anchor=b,!0}else if(B)ue(t,"can not read a block mapping entry; a multiline key may not be an implicit key");else return t.tag=p,t.anchor=b,!0}if((t.line===f||t.lineIndent>a)&&(Y&&(h=t.line,d=t.lineStart,g=t.position),Nl(t,a,go,!0,s)&&(Y?j=t.result:L=t.result),Y||(kl(t,y,S,_,j,L,h,d,g),_=j=L=null),an(t,!0,-1),V=t.input.charCodeAt(t.position)),(t.line===f||t.lineIndent>a)&&V!==0)ue(t,"bad indentation of a mapping entry");else if(t.lineIndent<a)break}return Y&&kl(t,y,S,_,j,null,h,d,g),B&&(t.tag=p,t.anchor=b,t.kind="mapping",t.result=y),B}function Gx(t){var a,r=!1,o=!1,s,f,h;if(h=t.input.charCodeAt(t.position),h!==33)return!1;if(t.tag!==null&&ue(t,"duplication of a tag property"),h=t.input.charCodeAt(++t.position),h===60?(r=!0,h=t.input.charCodeAt(++t.position)):h===33?(o=!0,s="!!",h=t.input.charCodeAt(++t.position)):s="!",a=t.position,r){do h=t.input.charCodeAt(++t.position);while(h!==0&&h!==62);t.position<t.length?(f=t.input.slice(a,t.position),h=t.input.charCodeAt(++t.position)):ue(t,"unexpected end of the stream within a verbatim tag")}else{for(;h!==0&&!zn(h);)h===33&&(o?ue(t,"tag suffix cannot contain exclamation marks"):(s=t.input.slice(a-1,t.position+1),ty.test(s)||ue(t,"named tag handle cannot contain such characters"),o=!0,a=t.position+1)),h=t.input.charCodeAt(++t.position);f=t.input.slice(a,t.position),Cx.test(f)&&ue(t,"tag suffix cannot contain flow indicator characters")}f&&!iy.test(f)&&ue(t,"tag name cannot contain such characters: "+f);try{f=decodeURIComponent(f)}catch{ue(t,"tag name is malformed: "+f)}return r?t.tag=f:fi.call(t.tagMap,s)?t.tag=t.tagMap[s]+f:s==="!"?t.tag="!"+f:s==="!!"?t.tag="tag:yaml.org,2002:"+f:ue(t,'undeclared tag handle "'+s+'"'),!0}function qx(t){var a,r;if(r=t.input.charCodeAt(t.position),r!==38)return!1;for(t.anchor!==null&&ue(t,"duplication of an anchor property"),r=t.input.charCodeAt(++t.position),a=t.position;r!==0&&!zn(r)&&!El(r);)r=t.input.charCodeAt(++t.position);return t.position===a&&ue(t,"name of an anchor node must contain at least one character"),t.anchor=t.input.slice(a,t.position),!0}function Ix(t){var a,r,o;if(o=t.input.charCodeAt(t.position),o!==42)return!1;for(o=t.input.charCodeAt(++t.position),a=t.position;o!==0&&!zn(o)&&!El(o);)o=t.input.charCodeAt(++t.position);return t.position===a&&ue(t,"name of an alias node must contain at least one character"),r=t.input.slice(a,t.position),fi.call(t.anchorMap,r)||ue(t,'unidentified alias "'+r+'"'),t.result=t.anchorMap[r],an(t,!0,-1),!0}function Nl(t,a,r,o,s){var f,h,d,g=1,p=!1,b=!1,y,S,_,j,L,Y;if(t.listener!==null&&t.listener("open",t),t.tag=null,t.anchor=null,t.kind=null,t.result=null,f=h=d=go===r||ny===r,o&&an(t,!0,-1)&&(p=!0,t.lineIndent>a?g=1:t.lineIndent===a?g=0:t.lineIndent<a&&(g=-1)),g===1)for(;Gx(t)||qx(t);)an(t,!0,-1)?(p=!0,d=f,t.lineIndent>a?g=1:t.lineIndent===a?g=0:t.lineIndent<a&&(g=-1)):d=!1;if(d&&(d=p||s),(g===1||go===r)&&(po===r||ey===r?L=a:L=a+1,Y=t.position-t.lineStart,g===1?d&&(Ip(t,Y)||Ux(t,Y,L))||Bx(t,L)?b=!0:(h&&Hx(t,L)||Rx(t,L)||Lx(t,L)?b=!0:Ix(t)?(b=!0,(t.tag!==null||t.anchor!==null)&&ue(t,"alias node should not have any properties")):Ox(t,L,po===r)&&(b=!0,t.tag===null&&(t.tag="?")),t.anchor!==null&&(t.anchorMap[t.anchor]=t.result)):g===0&&(b=d&&Ip(t,Y))),t.tag===null)t.anchor!==null&&(t.anchorMap[t.anchor]=t.result);else if(t.tag==="?"){for(t.result!==null&&t.kind!=="scalar"&&ue(t,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+t.kind+'"'),y=0,S=t.implicitTypes.length;y<S;y+=1)if(j=t.implicitTypes[y],j.resolve(t.result)){t.result=j.construct(t.result),t.tag=j.tag,t.anchor!==null&&(t.anchorMap[t.anchor]=t.result);break}}else if(t.tag!=="!"){if(fi.call(t.typeMap[t.kind||"fallback"],t.tag))j=t.typeMap[t.kind||"fallback"][t.tag];else for(j=null,_=t.typeMap.multi[t.kind||"fallback"],y=0,S=_.length;y<S;y+=1)if(t.tag.slice(0,_[y].tag.length)===_[y].tag){j=_[y];break}j||ue(t,"unknown tag !<"+t.tag+">"),t.result!==null&&j.kind!==t.kind&&ue(t,"unacceptable node kind for !<"+t.tag+'> tag; it should be "'+j.kind+'", not "'+t.kind+'"'),j.resolve(t.result,t.tag)?(t.result=j.construct(t.result,t.tag),t.anchor!==null&&(t.anchorMap[t.anchor]=t.result)):ue(t,"cannot resolve a node with !<"+t.tag+"> explicit tag")}return t.listener!==null&&t.listener("close",t),t.tag!==null||t.anchor!==null||b}function Yx(t){var a=t.position,r,o,s,f=!1,h;for(t.version=null,t.checkLineBreaks=t.legacy,t.tagMap=Object.create(null),t.anchorMap=Object.create(null);(h=t.input.charCodeAt(t.position))!==0&&(an(t,!0,-1),h=t.input.charCodeAt(t.position),!(t.lineIndent>0||h!==37));){for(f=!0,h=t.input.charCodeAt(++t.position),r=t.position;h!==0&&!zn(h);)h=t.input.charCodeAt(++t.position);for(o=t.input.slice(r,t.position),s=[],o.length<1&&ue(t,"directive name must not be less than one character in length");h!==0;){for(;Di(h);)h=t.input.charCodeAt(++t.position);if(h===35){do h=t.input.charCodeAt(++t.position);while(h!==0&&!mt(h));break}if(mt(h))break;for(r=t.position;h!==0&&!zn(h);)h=t.input.charCodeAt(++t.position);s.push(t.input.slice(r,t.position))}h!==0&&Gc(t),fi.call(Gp,o)?Gp[o](t,o,s):yo(t,'unknown document directive "'+o+'"')}if(an(t,!0,-1),t.lineIndent===0&&t.input.charCodeAt(t.position)===45&&t.input.charCodeAt(t.position+1)===45&&t.input.charCodeAt(t.position+2)===45?(t.position+=3,an(t,!0,-1)):f&&ue(t,"directives end mark is expected"),Nl(t,t.lineIndent-1,go,!1,!0),an(t,!0,-1),t.checkLineBreaks&&kx.test(t.input.slice(a,t.position))&&yo(t,"non-ASCII line breaks are interpreted as content"),t.documents.push(t.result),t.position===t.lineStart&&xo(t)){t.input.charCodeAt(t.position)===46&&(t.position+=3,an(t,!0,-1));return}if(t.position<t.length-1)ue(t,"end of the stream or a document separator is expected");else return}function uy(t,a){t=String(t),a=a||{},t.length!==0&&(t.charCodeAt(t.length-1)!==10&&t.charCodeAt(t.length-1)!==13&&(t+=`
`),t.charCodeAt(0)===65279&&(t=t.slice(1)));var r=new zx(t,a),o=t.indexOf("\0");for(o!==-1&&(r.position=o,ue(r,"null byte is not allowed in input")),r.input+="\0";r.input.charCodeAt(r.position)===32;)r.lineIndent+=1,r.position+=1;for(;r.position<r.length-1;)Yx(r);return r.documents}function Fx(t,a,r){a!==null&&typeof a=="object"&&typeof r>"u"&&(r=a,a=null);var o=uy(t,r);if(typeof a!="function")return o;for(var s=0,f=o.length;s<f;s+=1)a(o[s])}function Vx(t,a){var r=uy(t,a);if(r.length!==0){if(r.length===1)return r[0];throw new xn("expected a single document in the stream, but found more")}}var Xx=Fx,Qx=Vx,sy={loadAll:Xx,load:Qx},cy=Object.prototype.toString,fy=Object.prototype.hasOwnProperty,Ic=65279,Kx=9,Ha=10,Zx=13,Jx=32,Wx=33,Px=34,vc=35,$x=37,eT=38,nT=39,tT=42,hy=44,iT=45,bo=58,lT=61,aT=62,rT=63,oT=64,dy=91,my=93,uT=96,py=123,sT=124,gy=125,vn={};vn[0]="\\0";vn[7]="\\a";vn[8]="\\b";vn[9]="\\t";vn[10]="\\n";vn[11]="\\v";vn[12]="\\f";vn[13]="\\r";vn[27]="\\e";vn[34]='\\"';vn[92]="\\\\";vn[133]="\\N";vn[160]="\\_";vn[8232]="\\L";vn[8233]="\\P";var cT=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],fT=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function hT(t,a){var r,o,s,f,h,d,g;if(a===null)return{};for(r={},o=Object.keys(a),s=0,f=o.length;s<f;s+=1)h=o[s],d=String(a[h]),h.slice(0,2)==="!!"&&(h="tag:yaml.org,2002:"+h.slice(2)),g=t.compiledTypeMap.fallback[h],g&&fy.call(g.styleAliases,d)&&(d=g.styleAliases[d]),r[h]=d;return r}function dT(t){var a,r,o;if(a=t.toString(16).toUpperCase(),t<=255)r="x",o=2;else if(t<=65535)r="u",o=4;else if(t<=4294967295)r="U",o=8;else throw new xn("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+r+un.repeat("0",o-a.length)+a}var mT=1,Ua=2;function pT(t){this.schema=t.schema||Uc,this.indent=Math.max(1,t.indent||2),this.noArrayIndent=t.noArrayIndent||!1,this.skipInvalid=t.skipInvalid||!1,this.flowLevel=un.isNothing(t.flowLevel)?-1:t.flowLevel,this.styleMap=hT(this.schema,t.styles||null),this.sortKeys=t.sortKeys||!1,this.lineWidth=t.lineWidth||80,this.noRefs=t.noRefs||!1,this.noCompatMode=t.noCompatMode||!1,this.condenseFlow=t.condenseFlow||!1,this.quotingType=t.quotingType==='"'?Ua:mT,this.forceQuotes=t.forceQuotes||!1,this.replacer=typeof t.replacer=="function"?t.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function Yp(t,a){for(var r=un.repeat(" ",a),o=0,s=-1,f="",h,d=t.length;o<d;)s=t.indexOf(`
`,o),s===-1?(h=t.slice(o),o=d):(h=t.slice(o,s+1),o=s+1),h.length&&h!==`
`&&(f+=r),f+=h;return f}function _c(t,a){return`
`+un.repeat(" ",t.indent*a)}function gT(t,a){var r,o,s;for(r=0,o=t.implicitTypes.length;r<o;r+=1)if(s=t.implicitTypes[r],s.resolve(a))return!0;return!1}function vo(t){return t===Jx||t===Kx}function Ga(t){return 32<=t&&t<=126||161<=t&&t<=55295&&t!==8232&&t!==8233||57344<=t&&t<=65533&&t!==Ic||65536<=t&&t<=1114111}function Fp(t){return Ga(t)&&t!==Ic&&t!==Zx&&t!==Ha}function Vp(t,a,r){var o=Fp(t),s=o&&!vo(t);return(r?o:o&&t!==hy&&t!==dy&&t!==my&&t!==py&&t!==gy)&&t!==vc&&!(a===bo&&!s)||Fp(a)&&!vo(a)&&t===vc||a===bo&&s}function yT(t){return Ga(t)&&t!==Ic&&!vo(t)&&t!==iT&&t!==rT&&t!==bo&&t!==hy&&t!==dy&&t!==my&&t!==py&&t!==gy&&t!==vc&&t!==eT&&t!==tT&&t!==Wx&&t!==sT&&t!==lT&&t!==aT&&t!==nT&&t!==Px&&t!==$x&&t!==oT&&t!==uT}function bT(t){return!vo(t)&&t!==bo}function ja(t,a){var r=t.charCodeAt(a),o;return r>=55296&&r<=56319&&a+1<t.length&&(o=t.charCodeAt(a+1),o>=56320&&o<=57343)?(r-55296)*1024+o-56320+65536:r}function yy(t){var a=/^\n* /;return a.test(t)}var by=1,Sc=2,vy=3,_y=4,Al=5;function vT(t,a,r,o,s,f,h,d){var g,p=0,b=null,y=!1,S=!1,_=o!==-1,j=-1,L=yT(ja(t,0))&&bT(ja(t,t.length-1));if(a||h)for(g=0;g<t.length;p>=65536?g+=2:g++){if(p=ja(t,g),!Ga(p))return Al;L=L&&Vp(p,b,d),b=p}else{for(g=0;g<t.length;p>=65536?g+=2:g++){if(p=ja(t,g),p===Ha)y=!0,_&&(S=S||g-j-1>o&&t[j+1]!==" ",j=g);else if(!Ga(p))return Al;L=L&&Vp(p,b,d),b=p}S=S||_&&g-j-1>o&&t[j+1]!==" "}return!y&&!S?L&&!h&&!s(t)?by:f===Ua?Al:Sc:r>9&&yy(t)?Al:h?f===Ua?Al:Sc:S?_y:vy}function _T(t,a,r,o,s){t.dump=(function(){if(a.length===0)return t.quotingType===Ua?'""':"''";if(!t.noCompatMode&&(cT.indexOf(a)!==-1||fT.test(a)))return t.quotingType===Ua?'"'+a+'"':"'"+a+"'";var f=t.indent*Math.max(1,r),h=t.lineWidth===-1?-1:Math.max(Math.min(t.lineWidth,40),t.lineWidth-f),d=o||t.flowLevel>-1&&r>=t.flowLevel;function g(p){return gT(t,p)}switch(vT(a,d,t.indent,h,g,t.quotingType,t.forceQuotes&&!o,s)){case by:return a;case Sc:return"'"+a.replace(/'/g,"''")+"'";case vy:return"|"+Xp(a,t.indent)+Qp(Yp(a,f));case _y:return">"+Xp(a,t.indent)+Qp(Yp(ST(a,h),f));case Al:return'"'+wT(a)+'"';default:throw new xn("impossible error: invalid scalar style")}})()}function Xp(t,a){var r=yy(t)?String(a):"",o=t[t.length-1]===`
`,s=o&&(t[t.length-2]===`
`||t===`
`),f=s?"+":o?"":"-";return r+f+`
`}function Qp(t){return t[t.length-1]===`
`?t.slice(0,-1):t}function ST(t,a){for(var r=/(\n+)([^\n]*)/g,o=(function(){var p=t.indexOf(`
`);return p=p!==-1?p:t.length,r.lastIndex=p,Kp(t.slice(0,p),a)})(),s=t[0]===`
`||t[0]===" ",f,h;h=r.exec(t);){var d=h[1],g=h[2];f=g[0]===" ",o+=d+(!s&&!f&&g!==""?`
`:"")+Kp(g,a),s=f}return o}function Kp(t,a){if(t===""||t[0]===" ")return t;for(var r=/ [^ ]/g,o,s=0,f,h=0,d=0,g="";o=r.exec(t);)d=o.index,d-s>a&&(f=h>s?h:d,g+=`
`+t.slice(s,f),s=f+1),h=d;return g+=`
`,t.length-s>a&&h>s?g+=t.slice(s,h)+`
`+t.slice(h+1):g+=t.slice(s),g.slice(1)}function wT(t){for(var a="",r=0,o,s=0;s<t.length;r>=65536?s+=2:s++)r=ja(t,s),o=vn[r],!o&&Ga(r)?(a+=t[s],r>=65536&&(a+=t[s+1])):a+=o||dT(r);return a}function xT(t,a,r){var o="",s=t.tag,f,h,d;for(f=0,h=r.length;f<h;f+=1)d=r[f],t.replacer&&(d=t.replacer.call(r,String(f),d)),(Bt(t,a,d,!1,!1)||typeof d>"u"&&Bt(t,a,null,!1,!1))&&(o!==""&&(o+=","+(t.condenseFlow?"":" ")),o+=t.dump);t.tag=s,t.dump="["+o+"]"}function Zp(t,a,r,o){var s="",f=t.tag,h,d,g;for(h=0,d=r.length;h<d;h+=1)g=r[h],t.replacer&&(g=t.replacer.call(r,String(h),g)),(Bt(t,a+1,g,!0,!0,!1,!0)||typeof g>"u"&&Bt(t,a+1,null,!0,!0,!1,!0))&&((!o||s!=="")&&(s+=_c(t,a)),t.dump&&Ha===t.dump.charCodeAt(0)?s+="-":s+="- ",s+=t.dump);t.tag=f,t.dump=s||"[]"}function TT(t,a,r){var o="",s=t.tag,f=Object.keys(r),h,d,g,p,b;for(h=0,d=f.length;h<d;h+=1)b="",o!==""&&(b+=", "),t.condenseFlow&&(b+='"'),g=f[h],p=r[g],t.replacer&&(p=t.replacer.call(r,g,p)),Bt(t,a,g,!1,!1)&&(t.dump.length>1024&&(b+="? "),b+=t.dump+(t.condenseFlow?'"':"")+":"+(t.condenseFlow?"":" "),Bt(t,a,p,!1,!1)&&(b+=t.dump,o+=b));t.tag=s,t.dump="{"+o+"}"}function AT(t,a,r,o){var s="",f=t.tag,h=Object.keys(r),d,g,p,b,y,S;if(t.sortKeys===!0)h.sort();else if(typeof t.sortKeys=="function")h.sort(t.sortKeys);else if(t.sortKeys)throw new xn("sortKeys must be a boolean or a function");for(d=0,g=h.length;d<g;d+=1)S="",(!o||s!=="")&&(S+=_c(t,a)),p=h[d],b=r[p],t.replacer&&(b=t.replacer.call(r,p,b)),Bt(t,a+1,p,!0,!0,!0)&&(y=t.tag!==null&&t.tag!=="?"||t.dump&&t.dump.length>1024,y&&(t.dump&&Ha===t.dump.charCodeAt(0)?S+="?":S+="? "),S+=t.dump,y&&(S+=_c(t,a)),Bt(t,a+1,b,!0,y)&&(t.dump&&Ha===t.dump.charCodeAt(0)?S+=":":S+=": ",S+=t.dump,s+=S));t.tag=f,t.dump=s||"{}"}function Jp(t,a,r){var o,s,f,h,d,g;for(s=r?t.explicitTypes:t.implicitTypes,f=0,h=s.length;f<h;f+=1)if(d=s[f],(d.instanceOf||d.predicate)&&(!d.instanceOf||typeof a=="object"&&a instanceof d.instanceOf)&&(!d.predicate||d.predicate(a))){if(r?d.multi&&d.representName?t.tag=d.representName(a):t.tag=d.tag:t.tag="?",d.represent){if(g=t.styleMap[d.tag]||d.defaultStyle,cy.call(d.represent)==="[object Function]")o=d.represent(a,g);else if(fy.call(d.represent,g))o=d.represent[g](a,g);else throw new xn("!<"+d.tag+'> tag resolver accepts not "'+g+'" style');t.dump=o}return!0}return!1}function Bt(t,a,r,o,s,f,h){t.tag=null,t.dump=r,Jp(t,r,!1)||Jp(t,r,!0);var d=cy.call(t.dump),g=o,p;o&&(o=t.flowLevel<0||t.flowLevel>a);var b=d==="[object Object]"||d==="[object Array]",y,S;if(b&&(y=t.duplicates.indexOf(r),S=y!==-1),(t.tag!==null&&t.tag!=="?"||S||t.indent!==2&&a>0)&&(s=!1),S&&t.usedDuplicates[y])t.dump="*ref_"+y;else{if(b&&S&&!t.usedDuplicates[y]&&(t.usedDuplicates[y]=!0),d==="[object Object]")o&&Object.keys(t.dump).length!==0?(AT(t,a,t.dump,s),S&&(t.dump="&ref_"+y+t.dump)):(TT(t,a,t.dump),S&&(t.dump="&ref_"+y+" "+t.dump));else if(d==="[object Array]")o&&t.dump.length!==0?(t.noArrayIndent&&!h&&a>0?Zp(t,a-1,t.dump,s):Zp(t,a,t.dump,s),S&&(t.dump="&ref_"+y+t.dump)):(xT(t,a,t.dump),S&&(t.dump="&ref_"+y+" "+t.dump));else if(d==="[object String]")t.tag!=="?"&&_T(t,t.dump,a,f,g);else{if(d==="[object Undefined]")return!1;if(t.skipInvalid)return!1;throw new xn("unacceptable kind of an object to dump "+d)}t.tag!==null&&t.tag!=="?"&&(p=encodeURI(t.tag[0]==="!"?t.tag.slice(1):t.tag).replace(/!/g,"%21"),t.tag[0]==="!"?p="!"+p:p.slice(0,18)==="tag:yaml.org,2002:"?p="!!"+p.slice(18):p="!<"+p+">",t.dump=p+" "+t.dump)}return!0}function ET(t,a){var r=[],o=[],s,f;for(wc(t,r,o),s=0,f=o.length;s<f;s+=1)a.duplicates.push(r[o[s]]);a.usedDuplicates=new Array(f)}function wc(t,a,r){var o,s,f;if(t!==null&&typeof t=="object")if(s=a.indexOf(t),s!==-1)r.indexOf(s)===-1&&r.push(s);else if(a.push(t),Array.isArray(t))for(s=0,f=t.length;s<f;s+=1)wc(t[s],a,r);else for(o=Object.keys(t),s=0,f=o.length;s<f;s+=1)wc(t[o[s]],a,r)}function kT(t,a){a=a||{};var r=new pT(a);r.noRefs||ET(t,r);var o=t;return r.replacer&&(o=r.replacer.call({"":o},"",o)),Bt(r,0,o,!0,!0)?r.dump+`
`:""}var CT=kT,MT={dump:CT};function Yc(t,a){return function(){throw new Error("Function yaml."+t+" is removed in js-yaml 4. Use yaml."+a+" instead, which is now safe by default.")}}var NT=gn,DT=Rg,jT=Ug,zT=Fg,OT=Vg,RT=Uc,LT=sy.load,BT=sy.loadAll,HT=MT.dump,UT=xn,GT={binary:Jg,float:Yg,map:Hg,null:Gg,pairs:Pg,set:$g,timestamp:Kg,bool:qg,int:Ig,merge:Zg,omap:Wg,seq:Bg,str:Lg},qT=Yc("safeLoad","load"),IT=Yc("safeLoadAll","loadAll"),YT=Yc("safeDump","dump"),FT={Type:NT,Schema:DT,FAILSAFE_SCHEMA:jT,JSON_SCHEMA:zT,CORE_SCHEMA:OT,DEFAULT_SCHEMA:RT,load:LT,loadAll:BT,dump:HT,YAMLException:UT,types:GT,safeLoad:qT,safeLoadAll:IT,safeDump:YT};function oc(t){const a=FT.load(t);if(!a||typeof a!="object")throw new Error("Invalid YAML: expected a mapping");let r,o;if("nodes"in a&&a.nodes&&typeof a.nodes=="object"){const y=a;r={title:y.meta?.title??"Untitled Graph",description:y.meta?.description??"",start:y.meta?.start??[]},o=y.nodes}else r={title:"Untitled Graph",description:"",start:[]},o=a;const s={};for(const[y,S]of Object.entries(o))s[y]={id:y,title:S?.title??y,shortTitle:S?.short_title??S?.title??y,emoji:S?.emoji??"",content:S?.content??"",parents:S?.parents??[],children:[],depth:0,height:0};for(const y of Object.values(s))for(const S of y.parents)s[S]&&s[S].children.push(y.id);const f=new Map;function h(y,S){if(f.has(y))return f.get(y);if(S.has(y))return 0;S.add(y);const _=s[y];if(_.parents.length===0)return f.set(y,0),0;const j=1+Math.max(..._.parents.filter(L=>s[L]).map(L=>h(L,S)));return f.set(y,j),j}const d=new Map;function g(y,S){if(d.has(y))return d.get(y);if(S.has(y))return 0;S.add(y);const _=s[y];if(_.children.length===0)return d.set(y,0),0;const j=1+Math.max(..._.children.filter(L=>s[L]).map(L=>g(L,S)));return d.set(y,j),j}for(const y of Object.keys(s))s[y].depth=h(y,new Set),s[y].height=g(y,new Set);const p=Object.keys(s).filter(y=>s[y].parents.length===0),b=Object.keys(s).filter(y=>s[y].children.length===0);return r.start.length===0&&(r.start=p.length>0?[p[0]]:[Object.keys(s)[0]]),{meta:r,nodes:s,roots:p,leaves:b}}function VT(){const[t,a]=Me.useState(null),[r,o]=Me.useState("");Me.useEffect(()=>{const h=window.location.hash;if(h.startsWith("#graph/")){const d=parseInt(h.slice(7));if(!isNaN(d)&&Tl[d])try{const g=oc(Tl[d].yaml);if(Object.keys(g.nodes).length===0){o("No nodes found in YAML");return}o(""),a(g)}catch(g){o(g instanceof Error?g.message:"Failed to parse YAML")}}},[]),Me.useEffect(()=>{function h(){const d=window.location.hash;if(d.startsWith("#graph/")){const g=parseInt(d.slice(7));if(!isNaN(g)&&Tl[g])try{const p=oc(Tl[g].yaml);a(p),o("")}catch(p){o(p instanceof Error?p.message:"Failed to parse YAML")}}else a(null)}return window.addEventListener("popstate",h),()=>window.removeEventListener("popstate",h)},[]);function s(h){try{const d=oc(h);if(Object.keys(d.nodes).length===0){o("No nodes found in YAML");return}o(""),a(d);const g=Tl.findIndex(p=>p.yaml===h);g!==-1&&window.history.pushState(null,"",`#graph/${g}`)}catch(d){o(d instanceof Error?d.message:"Failed to parse YAML")}}function f(){window.history.back()}return t?P.jsx(Tw,{graph:t,onBack:f}):P.jsxs(P.Fragment,{children:[P.jsx(nv,{onLoad:s}),r&&P.jsx("p",{style:{color:"#e74c3c",textAlign:"center",fontSize:"0.85rem"},children:r})]})}F0.createRoot(document.getElementById("root")).render(P.jsx(Me.StrictMode,{children:P.jsx(VT,{})}));
