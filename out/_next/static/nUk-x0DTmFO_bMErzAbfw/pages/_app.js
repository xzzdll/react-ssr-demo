(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"+oT+":function(e,t,n){var r=n("eVuF");function o(e,t,n,o,u,i,a){try{var c=e[i](a),s=c.value}catch(f){return void n(f)}c.done?t(s):r.resolve(s).then(o,u)}e.exports=function(e){return function(){var t=this,n=arguments;return new r((function(r,u){var i=e.apply(t,n);function a(e){o(i,r,u,a,c,"next",e)}function c(e){o(i,r,u,a,c,"throw",e)}a(void 0)}))}}},"1TCz":function(e,t,n){"use strict";n.r(t);var r=n("0iUn"),o=n("sLSF"),u=n("MI3g"),i=n("a7VT"),a=n("Tit0"),c=n("8Bbg"),s=n.n(c),f=n("q1tI"),p=n.n(f),d=n("17x9"),l=n.n(d),y=p.a.createContext(null);var v=function(e){e()},h=function(){return v},b=null,m={notify:function(){}};var w=function(){function e(e,t){this.store=e,this.parentSub=t,this.unsubscribe=null,this.listeners=m,this.handleChangeWrapper=this.handleChangeWrapper.bind(this)}var t=e.prototype;return t.addNestedSub=function(e){return this.trySubscribe(),this.listeners.subscribe(e)},t.notifyNestedSubs=function(){this.listeners.notify()},t.handleChangeWrapper=function(){this.onStateChange&&this.onStateChange()},t.isSubscribed=function(){return Boolean(this.unsubscribe)},t.trySubscribe=function(){this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.handleChangeWrapper):this.store.subscribe(this.handleChangeWrapper),this.listeners=function(){var e=h(),t=[],n=[];return{clear:function(){n=b,t=b},notify:function(){var r=t=n;e((function(){for(var e=0;e<r.length;e++)r[e]()}))},get:function(){return n},subscribe:function(e){var r=!0;return n===t&&(n=t.slice()),n.push(e),function(){r&&t!==b&&(r=!1,n===t&&(n=t.slice()),n.splice(n.indexOf(e),1))}}}}())},t.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=m)},e}();function O(e){var t=e.store,n=e.context,r=e.children,o=Object(f.useMemo)((function(){var e=new w(t);return e.onStateChange=e.notifyNestedSubs,{store:t,subscription:e}}),[t]),u=Object(f.useMemo)((function(){return t.getState()}),[t]);Object(f.useEffect)((function(){var e=o.subscription;return e.trySubscribe(),u!==t.getState()&&e.notifyNestedSubs(),function(){e.tryUnsubscribe(),e.onStateChange=null}}),[o,u]);var i=n||y;return p.a.createElement(i.Provider,{value:o},r)}O.propTypes={store:l.a.shape({subscribe:l.a.func.isRequired,dispatch:l.a.func.isRequired,getState:l.a.func.isRequired}),context:l.a.object,children:l.a.any};var g=O,j=n("wx14");function P(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}var x=n("2mql"),S=n.n(x),C=n("QLaP"),E=n.n(C),T=n("TOwV"),N="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?f.useLayoutEffect:f.useEffect,R=[],M=[null,null];function k(e,t){var n=e[1];return[t.payload,n+1]}var I=function(){return[null,0]};function A(e,t){void 0===t&&(t={});var n=t,r=n.getDisplayName,o=void 0===r?function(e){return"ConnectAdvanced("+e+")"}:r,u=n.methodName,i=void 0===u?"connectAdvanced":u,a=n.renderCountProp,c=void 0===a?void 0:a,s=n.shouldHandleStateChanges,d=void 0===s||s,l=n.storeKey,v=void 0===l?"store":l,h=n.withRef,b=void 0!==h&&h,m=n.forwardRef,O=void 0!==m&&m,g=n.context,x=void 0===g?y:g,C=P(n,["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef","forwardRef","context"]);E()(void 0===c,"renderCountProp is removed. render counting is built into the latest React Dev Tools profiling extension"),E()(!b,"withRef is removed. To access the wrapped instance, use a ref on the connected component");E()("store"===v,"storeKey has been removed and does not do anything. To use a custom Redux store for specific components, create a custom React context with React.createContext(), and pass the context object to React Redux's Provider and specific components like: <Provider context={MyContext}><ConnectedComponent context={MyContext} /></Provider>. You may also pass a {context : MyContext} option to connect");var A=x;return function(t){var n=t.displayName||t.name||"Component",r=o(n),u=Object(j.a)({},C,{getDisplayName:o,methodName:i,renderCountProp:c,shouldHandleStateChanges:d,storeKey:v,displayName:r,wrappedComponentName:n,WrappedComponent:t}),a=C.pure;var s=a?f.useMemo:function(e){return e()};function l(n){var o=Object(f.useMemo)((function(){var e=n.forwardedRef,t=P(n,["forwardedRef"]);return[n.context,e,t]}),[n]),i=o[0],a=o[1],c=o[2],l=Object(f.useMemo)((function(){return i&&i.Consumer&&Object(T.isContextConsumer)(p.a.createElement(i.Consumer,null))?i:A}),[i,A]),y=Object(f.useContext)(l),v=Boolean(n.store)&&Boolean(n.store.getState)&&Boolean(n.store.dispatch),h=Boolean(y)&&Boolean(y.store);E()(v||h,'Could not find "store" in the context of "'+r+'". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to '+r+" in connect options.");var b=v?n.store:y.store,m=Object(f.useMemo)((function(){return function(t){return e(t.dispatch,u)}(b)}),[b]),O=Object(f.useMemo)((function(){if(!d)return M;var e=new w(b,v?null:y.subscription),t=e.notifyNestedSubs.bind(e);return[e,t]}),[b,v,y]),g=O[0],x=O[1],S=Object(f.useMemo)((function(){return v?y:Object(j.a)({},y,{subscription:g})}),[v,y,g]),C=Object(f.useReducer)(k,R,I),D=C[0][0],$=C[1];if(D&&D.error)throw D.error;var _=Object(f.useRef)(),F=Object(f.useRef)(c),K=Object(f.useRef)(),W=Object(f.useRef)(!1),q=s((function(){return K.current&&c===F.current?K.current:m(b.getState(),c)}),[b,D,c]);N((function(){F.current=c,_.current=q,W.current=!1,K.current&&(K.current=null,x())})),N((function(){if(d){var e=!1,t=null,n=function(){if(!e){var n,r,o=b.getState();try{n=m(o,F.current)}catch(u){r=u,t=u}r||(t=null),n===_.current?W.current||x():(_.current=n,K.current=n,W.current=!0,$({type:"STORE_UPDATED",payload:{error:r}}))}};g.onStateChange=n,g.trySubscribe(),n();return function(){if(e=!0,g.tryUnsubscribe(),g.onStateChange=null,t)throw t}}}),[b,g,m]);var L=Object(f.useMemo)((function(){return p.a.createElement(t,Object(j.a)({},q,{ref:a}))}),[a,t,q]);return Object(f.useMemo)((function(){return d?p.a.createElement(l.Provider,{value:S},L):L}),[l,L,S])}var y=a?p.a.memo(l):l;if(y.WrappedComponent=t,y.displayName=r,O){var h=p.a.forwardRef((function(e,t){return p.a.createElement(y,Object(j.a)({},e,{forwardedRef:t}))}));return h.displayName=r,h.WrappedComponent=t,S()(h,t)}return S()(y,t)}}var D=Object.prototype.hasOwnProperty;function $(e,t){return e===t?0!==e||0!==t||1/e===1/t:e!==e&&t!==t}function _(e,t){if($(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(var o=0;o<n.length;o++)if(!D.call(t,n[o])||!$(e[n[o]],t[n[o]]))return!1;return!0}var F=n("ANjH");function K(e){return function(t,n){var r=e(t,n);function o(){return r}return o.dependsOnOwnProps=!1,o}}function W(e){return null!==e.dependsOnOwnProps&&void 0!==e.dependsOnOwnProps?Boolean(e.dependsOnOwnProps):1!==e.length}function q(e,t){return function(t,n){n.displayName;var r=function(e,t){return r.dependsOnOwnProps?r.mapToProps(e,t):r.mapToProps(e)};return r.dependsOnOwnProps=!0,r.mapToProps=function(t,n){r.mapToProps=e,r.dependsOnOwnProps=W(e);var o=r(t,n);return"function"===typeof o&&(r.mapToProps=o,r.dependsOnOwnProps=W(o),o=r(t,n)),o},r}}var L=[function(e){return"function"===typeof e?q(e):void 0},function(e){return e?void 0:K((function(e){return{dispatch:e}}))},function(e){return e&&"object"===typeof e?K((function(t){return Object(F.a)(e,t)})):void 0}];var U=[function(e){return"function"===typeof e?q(e):void 0},function(e){return e?void 0:K((function(){return{}}))}];function Y(e,t,n){return Object(j.a)({},n,{},e,{},t)}var X=[function(e){return"function"===typeof e?function(e){return function(t,n){n.displayName;var r,o=n.pure,u=n.areMergedPropsEqual,i=!1;return function(t,n,a){var c=e(t,n,a);return i?o&&u(c,r)||(r=c):(i=!0,r=c),r}}}(e):void 0},function(e){return e?void 0:function(){return Y}}];function B(e,t,n,r){return function(o,u){return n(e(o,u),t(r,u),u)}}function V(e,t,n,r,o){var u,i,a,c,s,f=o.areStatesEqual,p=o.areOwnPropsEqual,d=o.areStatePropsEqual,l=!1;function y(o,l){var y=!p(l,i),v=!f(o,u);return u=o,i=l,y&&v?(a=e(u,i),t.dependsOnOwnProps&&(c=t(r,i)),s=n(a,c,i)):y?(e.dependsOnOwnProps&&(a=e(u,i)),t.dependsOnOwnProps&&(c=t(r,i)),s=n(a,c,i)):v?function(){var t=e(u,i),r=!d(t,a);return a=t,r&&(s=n(a,c,i)),s}():s}return function(o,f){return l?y(o,f):(a=e(u=o,i=f),c=t(r,i),s=n(a,c,i),l=!0,s)}}function G(e,t){var n=t.initMapStateToProps,r=t.initMapDispatchToProps,o=t.initMergeProps,u=P(t,["initMapStateToProps","initMapDispatchToProps","initMergeProps"]),i=n(e,u),a=r(e,u),c=o(e,u);return(u.pure?V:B)(i,a,c,e,u)}function H(e,t,n){for(var r=t.length-1;r>=0;r--){var o=t[r](e);if(o)return o}return function(t,r){throw new Error("Invalid value of type "+typeof e+" for "+n+" argument when connecting component "+r.wrappedComponentName+".")}}function J(e,t){return e===t}!function(e){var t=void 0===e?{}:e,n=t.connectHOC,r=void 0===n?A:n,o=t.mapStateToPropsFactories,u=void 0===o?U:o,i=t.mapDispatchToPropsFactories,a=void 0===i?L:i,c=t.mergePropsFactories,s=void 0===c?X:c,f=t.selectorFactory,p=void 0===f?G:f}();function z(){var e=Object(f.useContext)(y);return E()(e,"could not find react-redux context value; please ensure the component is wrapped in a <Provider>"),e}function Z(e){void 0===e&&(e=y);var t=e===y?z:function(){return Object(f.useContext)(e)};return function(){return t().store}}var Q=Z();!function(e){void 0===e&&(e=y);var t=e===y?Q:Z(e)}();var ee=function(e,t){return e===t};!function(e){void 0===e&&(e=y);var t=e===y?z:function(){return Object(f.useContext)(e)}}();var te,ne=n("i8i4");te=ne.unstable_batchedUpdates,v=te;var re=n("Rc1n"),oe=p.a.createElement,ue=Object(F.c)(re.default.rootReducer),ie=function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(a.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.Component,n=e.pageProps;return oe(g,{store:ue},oe(t,n))}}]),t}(s.a);t.default=ie},"2Eek":function(e,t,n){e.exports=n("W7oM")},"2mql":function(e,t,n){"use strict";var r=n("TOwV"),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},u={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},a={};function c(e){return r.isMemo(e)?i:a[e.$$typeof]||o}a[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0};var s=Object.defineProperty,f=Object.getOwnPropertyNames,p=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,l=Object.getPrototypeOf,y=Object.prototype;e.exports=function e(t,n,r){if("string"!==typeof n){if(y){var o=l(n);o&&o!==y&&e(t,o,r)}var i=f(n);p&&(i=i.concat(p(n)));for(var a=c(t),v=c(n),h=0;h<i.length;++h){var b=i[h];if(!u[b]&&(!r||!r[b])&&(!v||!v[b])&&(!a||!a[b])){var m=d(n,b);try{s(t,b,m)}catch(w){}}}}return t}},"3UD+":function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},"4mXO":function(e,t,n){e.exports=n("7TPF")},"7TPF":function(e,t,n){n("AUvm"),e.exports=n("WEpk").Object.getOwnPropertySymbols},"7m0m":function(e,t,n){var r=n("Y7ZC"),o=n("uplh"),u=n("NsO/"),i=n("vwuL"),a=n("IP1Z");r(r.S,"Object",{getOwnPropertyDescriptors:function(e){for(var t,n,r=u(e),c=i.f,s=o(r),f={},p=0;s.length>p;)void 0!==(n=c(r,t=s[p++]))&&a(f,t,n);return f}})},"8Bbg":function(e,t,n){e.exports=n("B5Ud")},ANjH:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return a}));var r=n("bCCX"),o=function(){return Math.random().toString(36).substring(7).split("").join(".")},u={INIT:"@@redux/INIT"+o(),REPLACE:"@@redux/REPLACE"+o(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+o()}};function i(e){if("object"!==typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function a(e,t,n){var o;if("function"===typeof t&&"function"===typeof n||"function"===typeof n&&"function"===typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");if("function"===typeof t&&"undefined"===typeof n&&(n=t,t=void 0),"undefined"!==typeof n){if("function"!==typeof n)throw new Error("Expected the enhancer to be a function.");return n(a)(e,t)}if("function"!==typeof e)throw new Error("Expected the reducer to be a function.");var c=e,s=t,f=[],p=f,d=!1;function l(){p===f&&(p=f.slice())}function y(){if(d)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return s}function v(e){if("function"!==typeof e)throw new Error("Expected the listener to be a function.");if(d)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");var t=!0;return l(),p.push(e),function(){if(t){if(d)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");t=!1,l();var n=p.indexOf(e);p.splice(n,1)}}}function h(e){if(!i(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if("undefined"===typeof e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(d)throw new Error("Reducers may not dispatch actions.");try{d=!0,s=c(s,e)}finally{d=!1}for(var t=f=p,n=0;n<t.length;n++){(0,t[n])()}return e}return h({type:u.INIT}),(o={dispatch:h,subscribe:v,getState:y,replaceReducer:function(e){if("function"!==typeof e)throw new Error("Expected the nextReducer to be a function.");c=e,h({type:u.REPLACE})}})[r.a]=function(){var e,t=v;return(e={subscribe:function(e){if("object"!==typeof e||null===e)throw new TypeError("Expected the observer to be an object.");function n(){e.next&&e.next(y())}return n(),{unsubscribe:t(n)}}})[r.a]=function(){return this},e},o}function c(e,t){var n=t&&t.type;return"Given "+(n&&'action "'+String(n)+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function s(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var o=t[r];0,"function"===typeof e[o]&&(n[o]=e[o])}var i,a=Object.keys(n);try{!function(e){Object.keys(e).forEach((function(t){var n=e[t];if("undefined"===typeof n(void 0,{type:u.INIT}))throw new Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if("undefined"===typeof n(void 0,{type:u.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+u.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')}))}(n)}catch(s){i=s}return function(e,t){if(void 0===e&&(e={}),i)throw i;for(var r=!1,o={},u=0;u<a.length;u++){var s=a[u],f=n[s],p=e[s],d=f(p,t);if("undefined"===typeof d){var l=c(s,t);throw new Error(l)}o[s]=d,r=r||d!==p}return r?o:e}}function f(e,t){return function(){return t(e.apply(this,arguments))}}function p(e,t){if("function"===typeof e)return f(e,t);if("object"!==typeof e||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');var n={};for(var r in e){var o=e[r];"function"===typeof o&&(n[r]=f(o,t))}return n}},B5Ud:function(e,t,n){"use strict";var r=n("/HRN"),o=n("WaGi"),u=n("ZDA2"),i=n("/+P4"),a=n("N9n2"),c=n("ln6h"),s=n("KI45");t.__esModule=!0,t.Container=function(e){0;return e.children},t.createUrl=b,t.default=void 0;var f=s(n("htGi")),p=s(n("+oT+")),d=s(n("q1tI")),l=n("g/15");function y(e){return v.apply(this,arguments)}function v(){return(v=(0,p.default)(c.mark((function e(t){var n,r,o;return c.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.Component,r=t.ctx,e.next=3,(0,l.loadGetInitialProps)(n,r);case 3:return o=e.sent,e.abrupt("return",{pageProps:o});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.AppInitialProps=l.AppInitialProps;var h=function(e){function t(){return r(this,t),u(this,i(t).apply(this,arguments))}return a(t,e),o(t,[{key:"componentDidCatch",value:function(e,t){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,n=e.Component,r=e.pageProps,o=b(t);return d.default.createElement(n,(0,f.default)({},r,{url:o}))}}]),t}(d.default.Component);function b(e){var t=e.pathname,n=e.asPath,r=e.query;return{get query(){return r},get pathname(){return t},get asPath(){return n},back:function(){e.back()},push:function(t,n){return e.push(t,n)},pushTo:function(t,n){var r=n?t:"",o=n||t;return e.push(r,o)},replace:function(t,n){return e.replace(t,n)},replaceTo:function(t,n){var r=n?t:"",o=n||t;return e.replace(r,o)}}}t.default=h,h.origGetInitialProps=y,h.getInitialProps=y},CGkA:function(e,t,n){"use strict";n.r(t);var r=n("hfKm"),o=n.n(r),u=n("2Eek"),i=n.n(u),a=n("XoMD"),c=n.n(a),s=n("Jo+v"),f=n.n(s),p=n("4mXO"),d=n.n(p),l=n("pLtp"),y=n.n(l),v=n("vYYK");function h(e,t){var n=y()(e);if(d.a){var r=d()(e);t&&(r=r.filter((function(t){return f()(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){Object(v.a)(e,t,n[t])})):c.a?i()(e,c()(n)):h(Object(n)).forEach((function(t){o()(e,t,f()(n,t))}))}return e}t.default={name:"says",reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"says:set":return b({},e,{},t.payload);default:return e}}}},E99W:function(e,t,n){"use strict";n.r(t);var r=n("hfKm"),o=n.n(r),u=n("2Eek"),i=n.n(u),a=n("XoMD"),c=n.n(a),s=n("Jo+v"),f=n.n(s),p=n("4mXO"),d=n.n(p),l=n("pLtp"),y=n.n(l),v=n("vYYK");function h(e,t){var n=y()(e);if(d.a){var r=d()(e);t&&(r=r.filter((function(t){return f()(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){Object(v.a)(e,t,n[t])})):c.a?i()(e,c()(n)):h(Object(n)).forEach((function(t){o()(e,t,f()(n,t))}))}return e}t.default={name:"articals",reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"articals:set":return b({},e,{},t.payload);default:return e}}}},GcxT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("1TCz")}])},QLaP:function(e,t,n){"use strict";e.exports=function(e,t,n,r,o,u,i,a){if(!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[n,r,o,u,i,a],f=0;(c=new Error(t.replace(/%s/g,(function(){return s[f++]})))).name="Invariant Violation"}throw c.framesToPop=1,c}}},Rc1n:function(e,t,n){"use strict";n.r(t);var r=n("hfKm"),o=n.n(r),u=n("2Eek"),i=n.n(u),a=n("XoMD"),c=n.n(a),s=n("Jo+v"),f=n.n(s),p=n("4mXO"),d=n.n(p),l=n("pLtp"),y=n.n(l),v=n("vYYK"),h=n("ln6h"),b=n.n(h),m=n("ANjH"),w=function(e){return"@@redux-saga/"+e},O=w("IO"),g=(n("wx14"),function(e){return"function"===typeof e}),j=function(e){return"string"===typeof e},P=Array.isArray;"function"===typeof Symbol&&Symbol.asyncIterator&&Symbol.asyncIterator;var x="FORK",S=function(e,t){var n;return(n={})[O]=!0,n.combinator=!1,n.type=e,n.payload=t,n};function C(e,t){var n,r=null;return g(e)?n=e:(P(e)?(r=e[0],n=e[1]):(r=e.context,n=e.fn),r&&j(n)&&g(r[n])&&(n=r[n])),{context:r,fn:n,args:t}}function E(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return S(x,C(e,n))}function T(e,t){var n=y()(e);if(d.a){var r=d()(e);t&&(r=r.filter((function(t){return f()(e,t).enumerable}))),n.push.apply(n,r)}return n}for(var N=n("yJrV"),R=N.keys().filter((function(e){return"./index.js"!==e})).map((function(e){return N(e)})),M={},k=[],I=0;I<R.length;I++){var A=R[I].default;M[A.name]=A.reducer,k.push(A.saga)}var D;t.default={rootReducer:Object(m.b)(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){Object(v.a)(e,t,n[t])})):c.a?i()(e,c()(n)):T(Object(n)).forEach((function(t){o()(e,t,f()(n,t))}))}return e}({},M)),rootSaga:(D=k,b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=D.map((function(e){return E(e)})),e.next=3,t;case 3:case"end":return e.stop()}}),e)})))}},SLVX:function(e,t,n){"use strict";function r(e){var t,n=e.Symbol;return"function"===typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}n.d(t,"a",(function(){return r}))},TOwV:function(e,t,n){"use strict";e.exports=n("qT12")},W7oM:function(e,t,n){n("nZgG");var r=n("WEpk").Object;e.exports=function(e,t){return r.defineProperties(e,t)}},XoMD:function(e,t,n){e.exports=n("hYAz")},bCCX:function(e,t,n){"use strict";(function(e,r){var o,u=n("SLVX");o="undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof e?e:r;var i=Object(u.a)(o);t.a=i}).call(this,n("yLpj"),n("3UD+")(e))},bSdq:function(e,t,n){"use strict";n.r(t),t.default={name:"visitors",reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"visitors:set":return e=t.payload;default:return e}}}},hYAz:function(e,t,n){n("7m0m"),e.exports=n("WEpk").Object.getOwnPropertyDescriptors},l8y4:function(e,t,n){"use strict";n.r(t);var r=n("hfKm"),o=n.n(r),u=n("2Eek"),i=n.n(u),a=n("XoMD"),c=n.n(a),s=n("Jo+v"),f=n.n(s),p=n("4mXO"),d=n.n(p),l=n("pLtp"),y=n.n(l),v=n("vYYK");function h(e,t){var n=y()(e);if(d.a){var r=d()(e);t&&(r=r.filter((function(t){return f()(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){Object(v.a)(e,t,n[t])})):c.a?i()(e,c()(n)):h(Object(n)).forEach((function(t){o()(e,t,f()(n,t))}))}return e}t.default={name:"detail",reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"detail:set":return b({},e,{},t.payload);default:return e}}}},nZgG:function(e,t,n){var r=n("Y7ZC");r(r.S+r.F*!n("jmDH"),"Object",{defineProperties:n("fpC5")})},qT12:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"===typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,u=r?Symbol.for("react.portal"):60106,i=r?Symbol.for("react.fragment"):60107,a=r?Symbol.for("react.strict_mode"):60108,c=r?Symbol.for("react.profiler"):60114,s=r?Symbol.for("react.provider"):60109,f=r?Symbol.for("react.context"):60110,p=r?Symbol.for("react.async_mode"):60111,d=r?Symbol.for("react.concurrent_mode"):60111,l=r?Symbol.for("react.forward_ref"):60112,y=r?Symbol.for("react.suspense"):60113,v=r?Symbol.for("react.suspense_list"):60120,h=r?Symbol.for("react.memo"):60115,b=r?Symbol.for("react.lazy"):60116,m=r?Symbol.for("react.fundamental"):60117,w=r?Symbol.for("react.responder"):60118,O=r?Symbol.for("react.scope"):60119;function g(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case p:case d:case i:case c:case a:case y:return e;default:switch(e=e&&e.$$typeof){case f:case l:case b:case h:case s:return e;default:return t}}case u:return t}}}function j(e){return g(e)===d}t.typeOf=g,t.AsyncMode=p,t.ConcurrentMode=d,t.ContextConsumer=f,t.ContextProvider=s,t.Element=o,t.ForwardRef=l,t.Fragment=i,t.Lazy=b,t.Memo=h,t.Portal=u,t.Profiler=c,t.StrictMode=a,t.Suspense=y,t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===i||e===d||e===c||e===a||e===y||e===v||"object"===typeof e&&null!==e&&(e.$$typeof===b||e.$$typeof===h||e.$$typeof===s||e.$$typeof===f||e.$$typeof===l||e.$$typeof===m||e.$$typeof===w||e.$$typeof===O)},t.isAsyncMode=function(e){return j(e)||g(e)===p},t.isConcurrentMode=j,t.isContextConsumer=function(e){return g(e)===f},t.isContextProvider=function(e){return g(e)===s},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return g(e)===l},t.isFragment=function(e){return g(e)===i},t.isLazy=function(e){return g(e)===b},t.isMemo=function(e){return g(e)===h},t.isPortal=function(e){return g(e)===u},t.isProfiler=function(e){return g(e)===c},t.isStrictMode=function(e){return g(e)===a},t.isSuspense=function(e){return g(e)===y}},uplh:function(e,t,n){var r=n("ar/p"),o=n("mqlF"),u=n("5K7Z"),i=n("5T2Y").Reflect;e.exports=i&&i.ownKeys||function(e){var t=r.f(u(e)),n=o.f;return n?t.concat(n(e)):t}},wx14:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},yJrV:function(e,t,n){var r={"./articalsModel.js":"E99W","./detailModel.js":"l8y4","./index.js":"Rc1n","./saysModel.js":"CGkA","./visitorModel.js":"bSdq"};function o(e){var t=u(e);return n(t)}function u(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=u,e.exports=o,o.id="yJrV"}},[["GcxT",1,0]]]);