!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.MultiSelect=t(require("react")):e.MultiSelect=t(e.React)}(window,function(r){return a={},l.m=n=[function(e,t){e.exports=r},function(e,t,r){e.exports=r(2)},function(e,t,r){"use strict";function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=l;var N=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==i(e)&&"function"!=typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(Object.prototype.hasOwnProperty.call(e,l)){var a=n?Object.getOwnPropertyDescriptor(e,l):null;a&&(a.get||a.set)?Object.defineProperty(r,l,a):r[l]=e[l]}r.default=e,t&&t.set(e,r);return r}(r(0)),g=r(3),h=n(r(4)),j=n(r(5)),w="/home/darkcode/Projects/libraries/multi-select/source/MultiSelect/MultiSelect.js";function n(e){return e&&e.__esModule?e:{default:e}}function o(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}function O(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,l=!1,a=void 0;try{for(var i,o=e[Symbol.iterator]();!(n=(i=o.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){l=!0,a=e}finally{try{n||null==o.return||o.return()}finally{if(l)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function l(a){function e(e){f(e.target.value),c(!0)}var t=(0,N.useRef)(null),r=x((0,N.useState)(0),2),n=r[0],l=r[1],i=x((0,N.useState)(-1),1)[0],o=x((0,N.useState)(!1),2),u=o[0],c=o[1],s=x((0,N.useState)(""),2),d=s[0],f=s[1],m=x((0,N.useState)(!1),2),p=m[0],b=m[1],_=a.items.filter(function(e){return e[a.label]?e[a.label].includes(d):e[a.id].includes(d)}).map(function(e,t){var r=e[a.label]?e[a.label]:(0,h.default)(e[a.id]),n=a.selected.includes(e[a.id])?"✓":"",l=t===i?a.classes.activeItem:"";return N.default.createElement("div",{className:j.default.item+" "+l+" "+a.classes.item,key:e[a.id],"data-value":e[a.id],style:{color:e.menuColor,backgroundColor:e.menuBackground},__source:{fileName:w,lineNumber:69}},r," ",N.default.createElement("span",{"data-value":e[a.id],__source:{fileName:w,lineNumber:70}},n))}),y=a.selected.map(function(t,e){var r=a.items.find(function(e){return e[a.id]==t}),n=r[a.label]?r[a.label]:(0,h.default)(r[a.id]);return N.default.createElement("div",{className:j.default.selectedItem+" "+a.classes.selectedItem,key:r[a.id],style:{color:r.selectedColor,backgroundColor:r.selectedBackground},__source:{fileName:w,lineNumber:82}},n,N.default.createElement("span",{id:j.default.cmdRemoveItem,className:j.default.cmdRemoveItem+" "+a.classes.cmdRemoveItem,"data-value":r[a.id],__source:{fileName:w,lineNumber:84}},"×"))}),v=0===y.length;return(0,N.useEffect)(function(){l(t.current.offsetHeight)}),N.default.createElement("div",{tabIndex:-1,className:j.default.select+" "+a.classes.select,onFocus:function(){return b(!0)},onBlur:function(e){return function(e){var t=null!==e.relatedTarget?e.relatedTarget:document.createElement("p");!1===e.currentTarget.contains(t)&&(b(!1),c(!1))}(e)},onClick:function(e){var t=e.target.dataset.value;if(void 0!==t){var r=a.items.find(function(e){return e[a.id]==t}),n=a.selected.indexOf(r[a.id]);-1===n?a.setSelected(a.selected.concat([r[a.id]])):a.setSelected([].concat(O(a.selected.slice(0,n)),O(a.selected.slice(n+1))))}},"data-is-open":u,style:{width:a.width,zIndex:p?"9999":"1"},__source:{fileName:w,lineNumber:96}},N.default.createElement("div",{className:j.default.header+" "+a.classes.header,onClick:function(e){if(e.preventDefault(),e.target.id!==j.default.cmdRemoveItem){if(e.target.id===j.default.txtFilter)return l(t.current.offsetHeight),void c(!0);l(t.current.offsetHeight),c(!u)}},__source:{fileName:w,lineNumber:97}},N.default.createElement("div",{__source:{fileName:w,lineNumber:98}},N.default.createElement("div",{__source:{fileName:w,lineNumber:99}},y),N.default.createElement("input",{placeholder:a.placeholder,"data-open":u,id:j.default.txtFilter,className:j.default.txtFilter+" "+a.classes.input,style:{display:v?"inline-block":"none"},type:"text",onChange:e,value:d,__source:{fileName:w,lineNumber:102}}),0===y.length?N.default.createElement("div",{className:j.default.selectedItem+" "+a.classes.selectedItem,style:{visibility:"hidden"},__source:{fileName:w,lineNumber:103}}," "):null),N.default.createElement("div",{__source:{fileName:w,lineNumber:106}},N.default.createElement(g.DownArrow,{id:j.default.downArrow,className:j.default.downArrow+" "+a.classes.downArrow,__source:{fileName:w,lineNumber:107}}))),N.default.createElement("div",{className:j.default.itemContainer+" "+a.classes.itemContainer,"data-is-open":u,style:{height:!0===u?n:"0"},__source:{fileName:w,lineNumber:111}},N.default.createElement("div",{ref:t,__source:{fileName:w,lineNumber:112}},N.default.createElement("input",{placeholder:a.placeholder,"data-open":u,id:j.default.txtFilter,className:j.default.txtFilter+" "+a.classes.input,style:{display:v?"none":"inline-block"},type:"text",onChange:e,value:d,__source:{fileName:w,lineNumber:113}}),N.default.createElement("div",{className:j.default.itemList+" "+a.classes.list,__source:{fileName:w,lineNumber:114}},_))))}l.defaultProps={onFilterChange:function(){},width:"auto",classes:{selectClass:"",headerClass:"",inputClass:"",selectedItemClass:"",itemContainerClass:"",listClass:""},id:"id",label:"label"}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DownArrow=void 0;var n,l=(n=r(0))&&n.__esModule?n:{default:n},a="/home/darkcode/Projects/libraries/multi-select/source/MultiSelect/Shapes.js";t.DownArrow=function(e){var t=e.className,r=e.handleClick;return l.default.createElement("svg",{className:t,height:"0.9em",version:"1.1",viewBox:"0 0 8.4666665 8.4666669",onClick:r,__source:{fileName:a,lineNumber:4}},l.default.createElement("g",{transform:"translate(0 -288.53)",fill:"none",stroke:"#000",strokeLinecap:"round",strokeWidth:".8176",__source:{fileName:a,lineNumber:5}},l.default.createElement("path",{d:"m0.61405 290.96 3.6193 3.6193",stroke:"currentColor",__source:{fileName:a,lineNumber:6}}),l.default.createElement("path",{d:"m7.8526 290.96-3.6193 3.6193",stroke:"currentColor",__source:{fileName:a,lineNumber:7}})))}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e.charAt(0).toUpperCase()+e.replace(/_/g," ").substring(1)}},function(e,t,r){e.exports={select:"_1f4KvlI1rx-3baxCJxqkWf",header:"AyDHj_iVdxs0mV-lHKWwA","down-arrow":"_3YOM1QA0cp8qmPwcgusaIe",downArrow:"_3YOM1QA0cp8qmPwcgusaIe","selected-item":"_2kjKYYLAoYcqBeXW2ngScO",selectedItem:"_2kjKYYLAoYcqBeXW2ngScO","cmd-remove-item":"_3kJbI7XA_P_g3O24jFiNyq",cmdRemoveItem:"_3kJbI7XA_P_g3O24jFiNyq","txt-filter":"_3-iNI-D3qzFqDZc8qKKJbj",txtFilter:"_3-iNI-D3qzFqDZc8qKKJbj","item-container":"_1b9KRus8cWq9wzEZQ5QNXj",itemContainer:"_1b9KRus8cWq9wzEZQ5QNXj","item-list":"_1ROtNr2H5R9o-Mq1PLt_4I",itemList:"_1ROtNr2H5R9o-Mq1PLt_4I"}}],l.c=a,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(r,n,function(e){return t[e]}.bind(null,n));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="./",l(l.s=1);function l(e){if(a[e])return a[e].exports;var t=a[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,l),t.l=!0,t.exports}var n,a});