/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{464:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r=n(3);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e){return function(e){if(Array.isArray(e)){for(var i=0,t=new Array(e.length);i<e.length;i++)t[i]=e[i];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function l(){return"undefined"!=typeof Reflect&&Reflect.defineMetadata&&Reflect.getOwnMetadataKeys}function d(e,t){y(e,t),Object.getOwnPropertyNames(t.prototype).forEach((function(n){y(e.prototype,t.prototype,n)})),Object.getOwnPropertyNames(t).forEach((function(n){y(e,t,n)}))}function y(e,t,n){(n?Reflect.getOwnMetadataKeys(t,n):Reflect.getOwnMetadataKeys(t)).forEach((function(r){var o=n?Reflect.getOwnMetadata(r,t,n):Reflect.getOwnMetadata(r,t);n?Reflect.defineMetadata(r,o,e,n):Reflect.defineMetadata(r,o,e)}))}var v={__proto__:[]}instanceof Array;function h(e){return function(t,n,r){var o="function"==typeof t?t:t.constructor;o.__decorators__||(o.__decorators__=[]),"number"!=typeof r&&(r=void 0),o.__decorators__.push((function(t){return e(t,n,r)}))}}function O(e,t){var n=t.prototype._init;t.prototype._init=function(){var t=this,n=Object.getOwnPropertyNames(e);if(e.$options.props)for(var r in e.$options.props)e.hasOwnProperty(r)||n.push(r);n.forEach((function(n){Object.defineProperty(t,n,{get:function(){return e[n]},set:function(t){e[n]=t},configurable:!0})}))};var data=new t;t.prototype._init=n;var r={};return Object.keys(data).forEach((function(e){void 0!==data[e]&&(r[e]=data[e])})),r}var m=["data","beforeCreate","created","beforeMount","mounted","beforeDestroy","destroyed","beforeUpdate","updated","activated","deactivated","render","errorCaptured","serverPrefetch"];function j(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.name=t.name||e._componentTag||e.name;var n=e.prototype;Object.getOwnPropertyNames(n).forEach((function(e){if("constructor"!==e)if(m.indexOf(e)>-1)t[e]=n[e];else{var r=Object.getOwnPropertyDescriptor(n,e);void 0!==r.value?"function"==typeof r.value?(t.methods||(t.methods={}))[e]=r.value:(t.mixins||(t.mixins=[])).push({data:function(){return c({},e,r.value)}}):(r.get||r.set)&&((t.computed||(t.computed={}))[e]={get:r.get,set:r.set})}})),(t.mixins||(t.mixins=[])).push({data:function(){return O(this,e)}});var o=e.__decorators__;o&&(o.forEach((function(e){return e(t)})),delete e.__decorators__);var f=Object.getPrototypeOf(e.prototype),y=f instanceof r.default?f.constructor:r.default,v=y.extend(t);return _(v,e,y),l()&&d(v,e),v}var w={prototype:!0,arguments:!0,callee:!0,caller:!0};function _(e,t,n){Object.getOwnPropertyNames(t).forEach((function(r){if(!w[r]){var c=Object.getOwnPropertyDescriptor(e,r);if(!c||c.configurable){var f,l,d=Object.getOwnPropertyDescriptor(t,r);if(!v){if("cid"===r)return;var y=Object.getOwnPropertyDescriptor(n,r);if(f=d.value,l=o(f),null!=f&&("object"===l||"function"===l)&&y&&y.value===d.value)return}0,Object.defineProperty(e,r,d)}}}))}function R(e){return"function"==typeof e?j(e):function(t){return j(t,e)}}R.registerHooks=function(e){m.push.apply(m,f(e))},t.b=R},465:function(e,t,n){"use strict";n.d(t,"a",(function(){return o.b})),n.d(t,"d",(function(){return r.default})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return h})),n.d(t,"e",(function(){return O}));var r=n(3),o=n(464),c=function(){for(var s=0,i=0,e=arguments.length;i<e;i++)s+=arguments[i].length;var t=Array(s),n=0;for(i=0;i<e;i++)for(var a=arguments[i],r=0,o=a.length;r<o;r++,n++)t[n]=a[r];return t},f=/\B([A-Z])/g;function l(e){return function(t,n,r){var o=n.replace(f,"-$1").toLowerCase(),l=r.value;r.value=function(){for(var t=this,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var f=function(r){var f=e||o;void 0===r?0===n.length?t.$emit(f):1===n.length?t.$emit(f,n[0]):t.$emit.apply(t,c([f],n)):(n.unshift(r),t.$emit.apply(t,c([f],n)))},y=l.apply(this,n);return d(y)?y.then(f):f(y),y}}}function d(e){return e instanceof Promise||e&&"function"==typeof e.then}var y="undefined"!=typeof Reflect&&void 0!==Reflect.getMetadata;function v(e,t,n){if(y&&!Array.isArray(e)&&"function"!=typeof e&&!e.hasOwnProperty("type")&&void 0===e.type){var r=Reflect.getMetadata("design:type",t,n);r!==Object&&(e.type=r)}}function h(e){return void 0===e&&(e={}),function(t,n){v(e,t,n),Object(o.a)((function(t,n){(t.props||(t.props={}))[n]=e}))(t,n)}}function O(path,e){void 0===e&&(e={});var t=e.deep,n=void 0!==t&&t,r=e.immediate,c=void 0!==r&&r;return Object(o.a)((function(e,t){"object"!=typeof e.watch&&(e.watch=Object.create(null));var r=e.watch;"object"!=typeof r[path]||Array.isArray(r[path])?void 0===r[path]&&(r[path]=[]):r[path]=[r[path]],r[path].push({handler:t,deep:n,immediate:c})}))}},502:function(e,t,n){"use strict";n.r(t);n(166);var r=n(22),o=n(50),c=n(61),f=n(87),l=n(103),d=n(62),y=n(25),v=(n(47),n(465));function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(d.a)(e);if(t){var o=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var O=function(e,t,n,desc){var r,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(y.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(o<3?r(c):o>3?r(t,n,c):r(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c},m=function(e){Object(f.a)(n,e);var t=h(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"typeAssertClick",value:function(){var e,t="";!function(e){e[e.blue=0]="blue",e[e.red=1]="red",e[e.green=2]="green"}(e||(e={}));switch(0){case e.red:case e.blue:t="#FF0000";break;case e.green:t="#008000"}console.log(t)}},{key:"tsVersionSwitch",value:function(){var e,t="red",n="blue",o="green",c=(e={},Object(r.a)(e,t,"#FF0000"),Object(r.a)(e,n,"#0000FF"),Object(r.a)(e,o,"#008000"),e);console.log(c[n])}},{key:"spredfunction",value:function(){}}]),n}(v.d),j=m=O([v.a],m),w=n(76),component=Object(w.a)(j,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("button",{on:{click:e.typeAssertClick}},[e._v("Switch文を書かない")])])}),[],!1,null,null,null);t.default=component.exports}}]);