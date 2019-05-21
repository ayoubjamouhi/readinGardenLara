(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{932:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.focusableElements=t.defaultToggleEvents=t.canUseDOM=t.PopperPlacements=t.keyCodes=t.TransitionStatuses=t.TransitionPropTypeKeys=t.TransitionTimeouts=t.targetPropType=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.getScrollbarWidth=l,t.setScrollbarWidth=u,t.isBodyOverflowing=c,t.getOriginalBodyPadding=function(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)},t.conditionallyUpdateScrollbar=function(){var e=l(),t=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],n=t?parseInt(t.style.paddingRight||0,10):0;c()&&u(n+e)},t.setGlobalCssModule=function(e){s=e},t.mapToCssModules=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s;return t?e.split(" ").map(function(e){return t[e]||e}).join(" "):e},t.omit=function(e,t){var n={};return Object.keys(e).forEach(function(o){-1===t.indexOf(o)&&(n[o]=e[o])}),n},t.pick=function(e,t){var n=Array.isArray(t)?t:[t],o=n.length,r=void 0,a={};for(;o>0;)r=n[o-=1],a[r]=e[r];return a},t.warnOnce=f,t.deprecated=function(e,t){return function(n,o,r){null!==n[o]&&void 0!==n[o]&&f('"'+o+'" property of "'+r+'" has been deprecated.\n'+t);for(var a=arguments.length,i=Array(a>3?a-3:0),l=3;l<a;l++)i[l-3]=arguments[l];return e.apply(void 0,[n,o,r].concat(i))}},t.DOMElement=p,t.isReactRefObj=m,t.findDOMElements=b,t.isArrayOrNodeList=v,t.getTarget=function(e){var t=b(e);if(v(t))return t[0];return t},t.addMultipleEventListeners=function(e,t,n){var o=e;v(o)||(o=[o]);var r=n;"string"==typeof r&&(r=r.split(/\s+/));if(!v(o)||"function"!=typeof t||!Array.isArray(r))throw new Error("\n      The first argument of this function must be DOM node or an array on DOM nodes or NodeList.\n      The second must be a function.\n      The third is a string or an array of strings that represents DOM events\n    ");return r.forEach(function(e){o.forEach(function(n){n.addEventListener(e,t)})}),function(){r.forEach(function(e){o.forEach(function(n){n.removeEventListener(e,t)})})}};var r=i(n(26)),a=i(n(0));function i(e){return e&&e.__esModule?e:{default:e}}function l(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}function u(e){document.body.style.paddingRight=e>0?e+"px":null}function c(){return document.body.clientWidth<window.innerWidth}var s=void 0;var d={};function f(e){d[e]||("undefined"!=typeof console&&console.error(e),d[e]=!0)}function p(e,t,n){if(!(e[t]instanceof Element))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")}t.targetPropType=a.default.oneOfType([a.default.string,a.default.func,p,a.default.shape({current:a.default.any})]),t.TransitionTimeouts={Fade:150,Collapse:350,Modal:300,Carousel:600},t.TransitionPropTypeKeys=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],t.TransitionStatuses={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"},t.keyCodes={esc:27,space:32,enter:13,tab:9,up:38,down:40},t.PopperPlacements=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"];var y=t.canUseDOM=!("undefined"==typeof window||!window.document||!window.document.createElement);function m(e){return!(!e||"object"!==(void 0===e?"undefined":o(e)))&&"current"in e}function b(e){if(m(e))return e.current;if((0,r.default)(e))return e();if("string"==typeof e&&y){var t=document.querySelectorAll(e);if(t.length||(t=document.querySelectorAll("#"+e)),!t.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return t}return e}function v(e){return null!==e&&(Array.isArray(e)||y&&"number"==typeof e.length)}t.defaultToggleEvents=["touchstart","click"];t.focusableElements=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},963:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),a=n(0),i=n.n(a),l=n(2),u=n.n(l),c=n(932);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function f(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function p(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b={children:i.a.node,className:i.a.string,cssModule:i.a.object,dataBox:i.a.func},v=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,y(t).apply(this,arguments))}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,o["Component"]),n=t,(a=[{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,o=e.cssModule,a=e.dataBox,i=(d(e,["children","className","cssModule","dataBox"]),a()),l=i.variant;if(!l||["facebook","twitter","linkedin","google-plus"].indexOf(l)<0)return null;var s="bg-"+l,f="fa fa-"+l,p=Object.keys(i),y=Object.values(i),m=u()("".concat("brand-card","-header"),s),b=u()("".concat("brand-card","-body")),v=Object(c.mapToCssModules)(u()("brand-card",n),o);return r.a.createElement("div",{className:v},r.a.createElement("div",{className:m},r.a.createElement("i",{className:f}),t),r.a.createElement("div",{className:b},r.a.createElement("div",null,r.a.createElement("div",{className:"text-value"},y[1]),r.a.createElement("div",{className:"text-uppercase text-muted small"},p[1])),r.a.createElement("div",null,r.a.createElement("div",{className:"text-value"},y[2]),r.a.createElement("div",{className:"text-uppercase text-muted small"},p[2]))))}}])&&f(n.prototype,a),i&&f(n,i),t}();v.propTypes=b,v.defaultProps={dataBox:function(){return{variant:"facebook",friends:"-",feeds:"-"}}},t.default=v}}]);
//# sourceMappingURL=25.js.map