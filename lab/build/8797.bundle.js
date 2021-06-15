(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[8797],{850:(o,c,t)=>{"use strict";t.r(c),t.d(c,{default:()=>a});var r=t(1799),n=t.n(r),e=t(82609),s=t.n(e)()(n());s.push([o.id,"/*\n\n    Name:       Hopscotch\n    Author:     Jan T. Sott\n\n    CodeMirror template by Jan T. Sott (https://github.com/idleberg/base16-codemirror)\n    Original Base16 color scheme by Chris Kempson (https://github.com/chriskempson/base16)\n\n*/\n\n.cm-s-hopscotch.CodeMirror {background: #322931; color: #d5d3d5;}\n.cm-s-hopscotch div.CodeMirror-selected {background: #433b42 !important;}\n.cm-s-hopscotch .CodeMirror-gutters {background: #322931; border-right: 0px;}\n.cm-s-hopscotch .CodeMirror-linenumber {color: #797379;}\n.cm-s-hopscotch .CodeMirror-cursor {border-left: 1px solid #989498 !important;}\n\n.cm-s-hopscotch span.cm-comment {color: #b33508;}\n.cm-s-hopscotch span.cm-atom {color: #c85e7c;}\n.cm-s-hopscotch span.cm-number {color: #c85e7c;}\n\n.cm-s-hopscotch span.cm-property, .cm-s-hopscotch span.cm-attribute {color: #8fc13e;}\n.cm-s-hopscotch span.cm-keyword {color: #dd464c;}\n.cm-s-hopscotch span.cm-string {color: #fdcc59;}\n\n.cm-s-hopscotch span.cm-variable {color: #8fc13e;}\n.cm-s-hopscotch span.cm-variable-2 {color: #1290bf;}\n.cm-s-hopscotch span.cm-def {color: #fd8b19;}\n.cm-s-hopscotch span.cm-error {background: #dd464c; color: #989498;}\n.cm-s-hopscotch span.cm-bracket {color: #d5d3d5;}\n.cm-s-hopscotch span.cm-tag {color: #dd464c;}\n.cm-s-hopscotch span.cm-link {color: #c85e7c;}\n\n.cm-s-hopscotch .CodeMirror-matchingbracket { text-decoration: underline; color: white !important;}\n.cm-s-hopscotch .CodeMirror-activeline-background { background: #302020; }\n","",{version:3,sources:["webpack://./../../node_modules/codemirror/theme/hopscotch.css"],names:[],mappings:"AAAA;;;;;;;;CAQC;;AAED,4BAA4B,mBAAmB,EAAE,cAAc,CAAC;AAChE,yCAAyC,8BAA8B,CAAC;AACxE,qCAAqC,mBAAmB,EAAE,iBAAiB,CAAC;AAC5E,wCAAwC,cAAc,CAAC;AACvD,oCAAoC,yCAAyC,CAAC;;AAE9E,iCAAiC,cAAc,CAAC;AAChD,8BAA8B,cAAc,CAAC;AAC7C,gCAAgC,cAAc,CAAC;;AAE/C,qEAAqE,cAAc,CAAC;AACpF,iCAAiC,cAAc,CAAC;AAChD,gCAAgC,cAAc,CAAC;;AAE/C,kCAAkC,cAAc,CAAC;AACjD,oCAAoC,cAAc,CAAC;AACnD,6BAA6B,cAAc,CAAC;AAC5C,+BAA+B,mBAAmB,EAAE,cAAc,CAAC;AACnE,iCAAiC,cAAc,CAAC;AAChD,6BAA6B,cAAc,CAAC;AAC5C,8BAA8B,cAAc,CAAC;;AAE7C,8CAA8C,0BAA0B,EAAE,uBAAuB,CAAC;AAClG,oDAAoD,mBAAmB,EAAE",sourcesContent:["/*\n\n    Name:       Hopscotch\n    Author:     Jan T. Sott\n\n    CodeMirror template by Jan T. Sott (https://github.com/idleberg/base16-codemirror)\n    Original Base16 color scheme by Chris Kempson (https://github.com/chriskempson/base16)\n\n*/\n\n.cm-s-hopscotch.CodeMirror {background: #322931; color: #d5d3d5;}\n.cm-s-hopscotch div.CodeMirror-selected {background: #433b42 !important;}\n.cm-s-hopscotch .CodeMirror-gutters {background: #322931; border-right: 0px;}\n.cm-s-hopscotch .CodeMirror-linenumber {color: #797379;}\n.cm-s-hopscotch .CodeMirror-cursor {border-left: 1px solid #989498 !important;}\n\n.cm-s-hopscotch span.cm-comment {color: #b33508;}\n.cm-s-hopscotch span.cm-atom {color: #c85e7c;}\n.cm-s-hopscotch span.cm-number {color: #c85e7c;}\n\n.cm-s-hopscotch span.cm-property, .cm-s-hopscotch span.cm-attribute {color: #8fc13e;}\n.cm-s-hopscotch span.cm-keyword {color: #dd464c;}\n.cm-s-hopscotch span.cm-string {color: #fdcc59;}\n\n.cm-s-hopscotch span.cm-variable {color: #8fc13e;}\n.cm-s-hopscotch span.cm-variable-2 {color: #1290bf;}\n.cm-s-hopscotch span.cm-def {color: #fd8b19;}\n.cm-s-hopscotch span.cm-error {background: #dd464c; color: #989498;}\n.cm-s-hopscotch span.cm-bracket {color: #d5d3d5;}\n.cm-s-hopscotch span.cm-tag {color: #dd464c;}\n.cm-s-hopscotch span.cm-link {color: #c85e7c;}\n\n.cm-s-hopscotch .CodeMirror-matchingbracket { text-decoration: underline; color: white !important;}\n.cm-s-hopscotch .CodeMirror-activeline-background { background: #302020; }\n"],sourceRoot:""}]);const a=s},82609:o=>{"use strict";o.exports=function(o){var c=[];return c.toString=function(){return this.map((function(c){var t=o(c);return c[2]?"@media ".concat(c[2]," {").concat(t,"}"):t})).join("")},c.i=function(o,t,r){"string"==typeof o&&(o=[[null,o,""]]);var n={};if(r)for(var e=0;e<this.length;e++){var s=this[e][0];null!=s&&(n[s]=!0)}for(var a=0;a<o.length;a++){var i=[].concat(o[a]);r&&n[i[0]]||(t&&(i[2]?i[2]="".concat(t," and ").concat(i[2]):i[2]=t),c.push(i))}},c}},1799:o=>{"use strict";function c(o,c){(null==c||c>o.length)&&(c=o.length);for(var t=0,r=new Array(c);t<c;t++)r[t]=o[t];return r}o.exports=function(o){var t,r,n=(r=4,function(o){if(Array.isArray(o))return o}(t=o)||function(o,c){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(o)){var t=[],r=!0,n=!1,e=void 0;try{for(var s,a=o[Symbol.iterator]();!(r=(s=a.next()).done)&&(t.push(s.value),!c||t.length!==c);r=!0);}catch(o){n=!0,e=o}finally{try{r||null==a.return||a.return()}finally{if(n)throw e}}return t}}(t,r)||function(o,t){if(o){if("string"==typeof o)return c(o,t);var r=Object.prototype.toString.call(o).slice(8,-1);return"Object"===r&&o.constructor&&(r=o.constructor.name),"Map"===r||"Set"===r?Array.from(o):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(o,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),e=n[1],s=n[3];if("function"==typeof btoa){var a=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),A="/*# ".concat(i," */"),h=s.sources.map((function(o){return"/*# sourceURL=".concat(s.sourceRoot||"").concat(o," */")}));return[e].concat(h).concat([A]).join("\n")}return[e].join("\n")}},48797:(o,c,t)=>{var r=t(850);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[o.id,r,""]]);t(46062)(r,{insert:"head",singleton:!1}),r.locals&&(o.exports=r.locals)},46062:(o,c,t)=>{"use strict";var r,n={},e=function(){var o={};return function(c){if(void 0===o[c]){var t=document.querySelector(c);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(o){t=null}o[c]=t}return o[c]}}();function s(o,c){for(var t=[],r={},n=0;n<o.length;n++){var e=o[n],s=c.base?e[0]+c.base:e[0],a={css:e[1],media:e[2],sourceMap:e[3]};r[s]?r[s].parts.push(a):t.push(r[s]={id:s,parts:[a]})}return t}function a(o,c){for(var t=0;t<o.length;t++){var r=o[t],e=n[r.id],s=0;if(e){for(e.refs++;s<e.parts.length;s++)e.parts[s](r.parts[s]);for(;s<r.parts.length;s++)e.parts.push(u(r.parts[s],c))}else{for(var a=[];s<r.parts.length;s++)a.push(u(r.parts[s],c));n[r.id]={id:r.id,refs:1,parts:a}}}}function i(o){var c=document.createElement("style");if(void 0===o.attributes.nonce){var r=t.nc;r&&(o.attributes.nonce=r)}if(Object.keys(o.attributes).forEach((function(t){c.setAttribute(t,o.attributes[t])})),"function"==typeof o.insert)o.insert(c);else{var n=e(o.insert||"head");if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(c)}return c}var A,h=(A=[],function(o,c){return A[o]=c,A.filter(Boolean).join("\n")});function p(o,c,t,r){var n=t?"":r.css;if(o.styleSheet)o.styleSheet.cssText=h(c,n);else{var e=document.createTextNode(n),s=o.childNodes;s[c]&&o.removeChild(s[c]),s.length?o.insertBefore(e,s[c]):o.appendChild(e)}}function l(o,c,t){var r=t.css,n=t.media,e=t.sourceMap;if(n&&o.setAttribute("media",n),e&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(e))))," */")),o.styleSheet)o.styleSheet.cssText=r;else{for(;o.firstChild;)o.removeChild(o.firstChild);o.appendChild(document.createTextNode(r))}}var d=null,m=0;function u(o,c){var t,r,n;if(c.singleton){var e=m++;t=d||(d=i(c)),r=p.bind(null,t,e,!1),n=p.bind(null,t,e,!0)}else t=i(c),r=l.bind(null,t,c),n=function(){!function(o){if(null===o.parentNode)return!1;o.parentNode.removeChild(o)}(t)};return r(o),function(c){if(c){if(c.css===o.css&&c.media===o.media&&c.sourceMap===o.sourceMap)return;r(o=c)}else n()}}o.exports=function(o,c){(c=c||{}).attributes="object"==typeof c.attributes?c.attributes:{},c.singleton||"boolean"==typeof c.singleton||(c.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=s(o,c);return a(t,c),function(o){for(var r=[],e=0;e<t.length;e++){var i=t[e],A=n[i.id];A&&(A.refs--,r.push(A))}o&&a(s(o,c),c);for(var h=0;h<r.length;h++){var p=r[h];if(0===p.refs){for(var l=0;l<p.parts.length;l++)p.parts[l]();delete n[p.id]}}}}}}]);
//# sourceMappingURL=8797.bundle.js.map