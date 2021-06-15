/*! For license information please see 8763.bundle.js.LICENSE.txt */
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[8763],{54344:(e,t,n)=>{"use strict";n.d(t,{v:()=>i});var r,o=n(58137);class i{constructor(e={}){if(this._map=new Map,this._changed=new o.Signal(this),this._isDisposed=!1,this._itemCmp=e.itemCmp||r.itemCmp,e.values)for(const t in e.values)this._map.set(t,e.values[t])}get type(){return"Map"}get changed(){return this._changed}get isDisposed(){return this._isDisposed}get size(){return this._map.size}set(e,t){const n=this._map.get(e);if(void 0===t)throw Error("Cannot set an undefined value, use remove");const r=this._itemCmp;return void 0!==n&&r(n,t)||(this._map.set(e,t),this._changed.emit({type:n?"change":"add",key:e,oldValue:n,newValue:t})),n}get(e){return this._map.get(e)}has(e){return this._map.has(e)}keys(){const e=[];return this._map.forEach(((t,n)=>{e.push(n)})),e}values(){const e=[];return this._map.forEach(((t,n)=>{e.push(t)})),e}delete(e){const t=this._map.get(e);return this._map.delete(e)&&this._changed.emit({type:"remove",key:e,oldValue:t,newValue:void 0}),t}clear(){const e=this.keys();for(let t=0;t<e.length;t++)this.delete(e[t])}dispose(){this.isDisposed||(this._isDisposed=!0,o.Signal.clearData(this),this._map.clear())}}!function(e){e.itemCmp=function(e,t){return e===t}}(r||(r={}))},67411:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.serialize=t.deserialize=void 0,t.deserialize=function(e){let t;return t="string"==typeof e?JSON.parse(e):function(e){const t=new DataView(e),n=t.getUint32(0),r=[];if(n<2)throw new Error("Invalid incoming Kernel Message");for(let e=1;e<=n;e++)r.push(t.getUint32(4*e));const o=new Uint8Array(e.slice(r[0],r[1])),i=JSON.parse(new TextDecoder("utf8").decode(o));i.buffers=[];for(let t=1;t<n;t++){const n=r[t],o=r[t+1]||e.byteLength;i.buffers.push(new DataView(e.slice(n,o)))}return i}(e),t},t.serialize=function(e){var t;let n;return n=(null===(t=e.buffers)||void 0===t?void 0:t.length)?function(e){const t=[],n=[],r=new TextEncoder;let o=[];void 0!==e.buffers&&(o=e.buffers,delete e.buffers);const i=r.encode(JSON.stringify(e));n.push(i.buffer);for(let e=0;e<o.length;e++){const t=o[e];n.push(ArrayBuffer.isView(t)?t.buffer:t)}const a=n.length;t.push(4*(a+1));for(let e=0;e+1<n.length;e++)t.push(t[t.length-1]+n[e].byteLength);const u=new Uint8Array(t[t.length-1]+n[n.length-1].byteLength),c=new DataView(u.buffer);c.setUint32(0,a);for(let e=0;e<t.length;e++)c.setUint32(4*(e+1),t[e]);for(let e=0;e<n.length;e++)u.set(new Uint8Array(n[e]),t[e]);return u.buffer}(e):JSON.stringify(e),n}},4810:(e,t,n)=>{"use strict";n.d(t,{WU:()=>i}),new Error("timeout while waiting for mutex to become available"),new Error("mutex already locked");const r=new Error("request for lock canceled");class o{constructor(e,t=r){if(this._maxConcurrency=e,this._cancelError=t,this._queue=[],e<=0)throw new Error("semaphore must be initialized to a positive value");this._value=e}acquire(){const e=this.isLocked(),t=new Promise(((e,t)=>this._queue.push({resolve:e,reject:t})));return e||this._dispatch(),t}runExclusive(e){return t=this,n=void 0,o=function*(){const[t,n]=yield this.acquire();try{return yield e(t)}finally{n()}},new((r=void 0)||(r=Promise))((function(e,i){function a(e){try{c(o.next(e))}catch(e){i(e)}}function u(e){try{c(o.throw(e))}catch(e){i(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(a,u)}c((o=o.apply(t,n||[])).next())}));var t,n,r,o}isLocked(){return this._value<=0}release(){if(this._maxConcurrency>1)throw new Error("this method is unavailable on semaphores with concurrency > 1; use the scoped release returned by acquire instead");if(this._currentReleaser){const e=this._currentReleaser;this._currentReleaser=void 0,e()}}cancel(){this._queue.forEach((e=>e.reject(this._cancelError))),this._queue=[]}_dispatch(){const e=this._queue.shift();if(!e)return;let t=!1;this._currentReleaser=()=>{t||(t=!0,this._value++,this._dispatch())},e.resolve([this._value--,this._currentReleaser])}}class i{constructor(e){this._semaphore=new o(1,e)}acquire(){return e=this,t=void 0,r=function*(){const[,e]=yield this._semaphore.acquire();return e},new((n=void 0)||(n=Promise))((function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function u(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}c((r=r.apply(e,t||[])).next())}));var e,t,n,r}runExclusive(e){return this._semaphore.runExclusive((()=>e()))}isLocked(){return this._semaphore.isLocked()}release(){this._semaphore.release()}cancel(){return this._semaphore.cancel()}}},75486:(e,t,n)=>{e.exports=function e(t,n,r){function o(a,u){if(!n[a]){if(!t[a]){if(i)return i(a,!0);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var s=n[a]={exports:{}};t[a][0].call(s.exports,(function(e){return o(t[a][1][e]||e)}),s,s.exports,e,t,n,r)}return n[a].exports}for(var i=void 0,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(e,t,r){(function(e){"use strict";var n,r,o=e.MutationObserver||e.WebKitMutationObserver;if(o){var i=0,a=new o(f),u=e.document.createTextNode("");a.observe(u,{characterData:!0}),n=function(){u.data=i=++i%2}}else if(e.setImmediate||void 0===e.MessageChannel)n="document"in e&&"onreadystatechange"in e.document.createElement("script")?function(){var t=e.document.createElement("script");t.onreadystatechange=function(){f(),t.onreadystatechange=null,t.parentNode.removeChild(t),t=null},e.document.documentElement.appendChild(t)}:function(){setTimeout(f,0)};else{var c=new e.MessageChannel;c.port1.onmessage=f,n=function(){c.port2.postMessage(0)}}var s=[];function f(){var e,t;r=!0;for(var n=s.length;n;){for(t=s,s=[],e=-1;++e<n;)t[e]();n=s.length}r=!1}t.exports=function(e){1!==s.push(e)||r||n()}}).call(this,void 0!==n.g?n.g:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],2:[function(e,t,n){"use strict";var r=e(1);function o(){}var i={},a=["REJECTED"],u=["FULFILLED"],c=["PENDING"];function s(e){if("function"!=typeof e)throw new TypeError("resolver must be a function");this.state=c,this.queue=[],this.outcome=void 0,e!==o&&h(this,e)}function f(e,t,n){this.promise=e,"function"==typeof t&&(this.onFulfilled=t,this.callFulfilled=this.otherCallFulfilled),"function"==typeof n&&(this.onRejected=n,this.callRejected=this.otherCallRejected)}function l(e,t,n){r((function(){var r;try{r=t(n)}catch(t){return i.reject(e,t)}r===e?i.reject(e,new TypeError("Cannot resolve promise with itself")):i.resolve(e,r)}))}function d(e){var t=e&&e.then;if(e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof t)return function(){t.apply(e,arguments)}}function h(e,t){var n=!1;function r(t){n||(n=!0,i.reject(e,t))}function o(t){n||(n=!0,i.resolve(e,t))}var a=v((function(){t(o,r)}));"error"===a.status&&r(a.value)}function v(e,t){var n={};try{n.value=e(t),n.status="success"}catch(e){n.status="error",n.value=e}return n}t.exports=s,s.prototype.catch=function(e){return this.then(null,e)},s.prototype.then=function(e,t){if("function"!=typeof e&&this.state===u||"function"!=typeof t&&this.state===a)return this;var n=new this.constructor(o);return this.state!==c?l(n,this.state===u?e:t,this.outcome):this.queue.push(new f(n,e,t)),n},f.prototype.callFulfilled=function(e){i.resolve(this.promise,e)},f.prototype.otherCallFulfilled=function(e){l(this.promise,this.onFulfilled,e)},f.prototype.callRejected=function(e){i.reject(this.promise,e)},f.prototype.otherCallRejected=function(e){l(this.promise,this.onRejected,e)},i.resolve=function(e,t){var n=v(d,t);if("error"===n.status)return i.reject(e,n.value);var r=n.value;if(r)h(e,r);else{e.state=u,e.outcome=t;for(var o=-1,a=e.queue.length;++o<a;)e.queue[o].callFulfilled(t)}return e},i.reject=function(e,t){e.state=a,e.outcome=t;for(var n=-1,r=e.queue.length;++n<r;)e.queue[n].callRejected(t);return e},s.resolve=function(e){return e instanceof this?e:i.resolve(new this(o),e)},s.reject=function(e){var t=new this(o);return i.reject(t,e)},s.all=function(e){var t=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var n=e.length,r=!1;if(!n)return this.resolve([]);for(var a=new Array(n),u=0,c=-1,s=new this(o);++c<n;)f(e[c],c);return s;function f(e,o){t.resolve(e).then((function(e){a[o]=e,++u!==n||r||(r=!0,i.resolve(s,a))}),(function(e){r||(r=!0,i.reject(s,e))}))}},s.race=function(e){var t=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var n,r=e.length,a=!1;if(!r)return this.resolve([]);for(var u=-1,c=new this(o);++u<r;)n=e[u],t.resolve(n).then((function(e){a||(a=!0,i.resolve(c,e))}),(function(e){a||(a=!0,i.reject(c,e))}));return c}},{1:1}],3:[function(e,t,r){(function(t){"use strict";"function"!=typeof t.Promise&&(t.Promise=e(2))}).call(this,void 0!==n.g?n.g:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{2:2}],4:[function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var o=function(){try{if("undefined"!=typeof indexedDB)return indexedDB;if("undefined"!=typeof webkitIndexedDB)return webkitIndexedDB;if("undefined"!=typeof mozIndexedDB)return mozIndexedDB;if("undefined"!=typeof OIndexedDB)return OIndexedDB;if("undefined"!=typeof msIndexedDB)return msIndexedDB}catch(e){return}}();function i(e,t){e=e||[],t=t||{};try{return new Blob(e,t)}catch(o){if("TypeError"!==o.name)throw o;for(var n=new("undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof MSBlobBuilder?MSBlobBuilder:"undefined"!=typeof MozBlobBuilder?MozBlobBuilder:WebKitBlobBuilder),r=0;r<e.length;r+=1)n.append(e[r]);return n.getBlob(t.type)}}"undefined"==typeof Promise&&e(3);var a=Promise;function u(e,t){t&&e.then((function(e){t(null,e)}),(function(e){t(e)}))}function c(e,t,n){"function"==typeof t&&e.then(t),"function"==typeof n&&e.catch(n)}function s(e){return"string"!=typeof e&&(console.warn(e+" used as a key, but it is not a string."),e=String(e)),e}function f(){if(arguments.length&&"function"==typeof arguments[arguments.length-1])return arguments[arguments.length-1]}var l="local-forage-detect-blob-support",d=void 0,h={},v=Object.prototype.toString,p="readonly",y="readwrite";function b(e){for(var t=e.length,n=new ArrayBuffer(t),r=new Uint8Array(n),o=0;o<t;o++)r[o]=e.charCodeAt(o);return n}function m(e){return"boolean"==typeof d?a.resolve(d):function(e){return new a((function(t){var n=e.transaction(l,y),r=i([""]);n.objectStore(l).put(r,"key"),n.onabort=function(e){e.preventDefault(),e.stopPropagation(),t(!1)},n.oncomplete=function(){var e=navigator.userAgent.match(/Chrome\/(\d+)/),n=navigator.userAgent.match(/Edge\//);t(n||!e||parseInt(e[1],10)>=43)}})).catch((function(){return!1}))}(e).then((function(e){return d=e}))}function g(e){var t=h[e.name],n={};n.promise=new a((function(e,t){n.resolve=e,n.reject=t})),t.deferredOperations.push(n),t.dbReady?t.dbReady=t.dbReady.then((function(){return n.promise})):t.dbReady=n.promise}function _(e){var t=h[e.name].deferredOperations.pop();if(t)return t.resolve(),t.promise}function w(e,t){var n=h[e.name].deferredOperations.pop();if(n)return n.reject(t),n.promise}function I(e,t){return new a((function(n,r){if(h[e.name]=h[e.name]||{forages:[],db:null,dbReady:null,deferredOperations:[]},e.db){if(!t)return n(e.db);g(e),e.db.close()}var i=[e.name];t&&i.push(e.version);var a=o.open.apply(o,i);t&&(a.onupgradeneeded=function(t){var n=a.result;try{n.createObjectStore(e.storeName),t.oldVersion<=1&&n.createObjectStore(l)}catch(n){if("ConstraintError"!==n.name)throw n;console.warn('The database "'+e.name+'" has been upgraded from version '+t.oldVersion+" to version "+t.newVersion+', but the storage "'+e.storeName+'" already exists.')}}),a.onerror=function(e){e.preventDefault(),r(a.error)},a.onsuccess=function(){n(a.result),_(e)}}))}function S(e){return I(e,!1)}function E(e){return I(e,!0)}function N(e,t){if(!e.db)return!0;var n=!e.db.objectStoreNames.contains(e.storeName),r=e.version<e.db.version,o=e.version>e.db.version;if(r&&(e.version!==t&&console.warn('The database "'+e.name+"\" can't be downgraded from version "+e.db.version+" to version "+e.version+"."),e.version=e.db.version),o||n){if(n){var i=e.db.version+1;i>e.version&&(e.version=i)}return!0}return!1}function j(e){return i([b(atob(e.data))],{type:e.type})}function R(e){return e&&e.__local_forage_encoded_blob}function O(e){var t=this,n=t._initReady().then((function(){var e=h[t._dbInfo.name];if(e&&e.dbReady)return e.dbReady}));return c(n,e,e),n}function D(e,t,n,r){void 0===r&&(r=1);try{var o=e.db.transaction(e.storeName,t);n(null,o)}catch(o){if(r>0&&(!e.db||"InvalidStateError"===o.name||"NotFoundError"===o.name))return a.resolve().then((function(){if(!e.db||"NotFoundError"===o.name&&!e.db.objectStoreNames.contains(e.storeName)&&e.version<=e.db.version)return e.db&&(e.version=e.db.version+1),E(e)})).then((function(){return function(e){g(e);for(var t=h[e.name],n=t.forages,r=0;r<n.length;r++){var o=n[r];o._dbInfo.db&&(o._dbInfo.db.close(),o._dbInfo.db=null)}return e.db=null,S(e).then((function(t){return e.db=t,N(e)?E(e):t})).then((function(r){e.db=t.db=r;for(var o=0;o<n.length;o++)n[o]._dbInfo.db=r})).catch((function(t){throw w(e,t),t}))}(e).then((function(){D(e,t,n,r-1)}))})).catch(n);n(o)}}var A={_driver:"asyncStorage",_initStorage:function(e){var t=this,n={db:null};if(e)for(var r in e)n[r]=e[r];var o=h[n.name];o||(o={forages:[],db:null,dbReady:null,deferredOperations:[]},h[n.name]=o),o.forages.push(t),t._initReady||(t._initReady=t.ready,t.ready=O);var i=[];function u(){return a.resolve()}for(var c=0;c<o.forages.length;c++){var s=o.forages[c];s!==t&&i.push(s._initReady().catch(u))}var f=o.forages.slice(0);return a.all(i).then((function(){return n.db=o.db,S(n)})).then((function(e){return n.db=e,N(n,t._defaultConfig.version)?E(n):e})).then((function(e){n.db=o.db=e,t._dbInfo=n;for(var r=0;r<f.length;r++){var i=f[r];i!==t&&(i._dbInfo.db=n.db,i._dbInfo.version=n.version)}}))},_support:function(){try{if(!o||!o.open)return!1;var e="undefined"!=typeof openDatabase&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),t="function"==typeof fetch&&-1!==fetch.toString().indexOf("[native code");return(!e||t)&&"undefined"!=typeof indexedDB&&"undefined"!=typeof IDBKeyRange}catch(e){return!1}}(),iterate:function(e,t){var n=this,r=new a((function(t,r){n.ready().then((function(){D(n._dbInfo,p,(function(o,i){if(o)return r(o);try{var a=i.objectStore(n._dbInfo.storeName).openCursor(),u=1;a.onsuccess=function(){var n=a.result;if(n){var r=n.value;R(r)&&(r=j(r));var o=e(r,n.key,u++);void 0!==o?t(o):n.continue()}else t()},a.onerror=function(){r(a.error)}}catch(e){r(e)}}))})).catch(r)}));return u(r,t),r},getItem:function(e,t){var n=this;e=s(e);var r=new a((function(t,r){n.ready().then((function(){D(n._dbInfo,p,(function(o,i){if(o)return r(o);try{var a=i.objectStore(n._dbInfo.storeName).get(e);a.onsuccess=function(){var e=a.result;void 0===e&&(e=null),R(e)&&(e=j(e)),t(e)},a.onerror=function(){r(a.error)}}catch(e){r(e)}}))})).catch(r)}));return u(r,t),r},setItem:function(e,t,n){var r=this;e=s(e);var o=new a((function(n,o){var i;r.ready().then((function(){return i=r._dbInfo,"[object Blob]"===v.call(t)?m(i.db).then((function(e){return e?t:(n=t,new a((function(e,t){var r=new FileReader;r.onerror=t,r.onloadend=function(t){var r=btoa(t.target.result||"");e({__local_forage_encoded_blob:!0,data:r,type:n.type})},r.readAsBinaryString(n)})));var n})):t})).then((function(t){D(r._dbInfo,y,(function(i,a){if(i)return o(i);try{var u=a.objectStore(r._dbInfo.storeName);null===t&&(t=void 0);var c=u.put(t,e);a.oncomplete=function(){void 0===t&&(t=null),n(t)},a.onabort=a.onerror=function(){var e=c.error?c.error:c.transaction.error;o(e)}}catch(e){o(e)}}))})).catch(o)}));return u(o,n),o},removeItem:function(e,t){var n=this;e=s(e);var r=new a((function(t,r){n.ready().then((function(){D(n._dbInfo,y,(function(o,i){if(o)return r(o);try{var a=i.objectStore(n._dbInfo.storeName).delete(e);i.oncomplete=function(){t()},i.onerror=function(){r(a.error)},i.onabort=function(){var e=a.error?a.error:a.transaction.error;r(e)}}catch(e){r(e)}}))})).catch(r)}));return u(r,t),r},clear:function(e){var t=this,n=new a((function(e,n){t.ready().then((function(){D(t._dbInfo,y,(function(r,o){if(r)return n(r);try{var i=o.objectStore(t._dbInfo.storeName).clear();o.oncomplete=function(){e()},o.onabort=o.onerror=function(){var e=i.error?i.error:i.transaction.error;n(e)}}catch(e){n(e)}}))})).catch(n)}));return u(n,e),n},length:function(e){var t=this,n=new a((function(e,n){t.ready().then((function(){D(t._dbInfo,p,(function(r,o){if(r)return n(r);try{var i=o.objectStore(t._dbInfo.storeName).count();i.onsuccess=function(){e(i.result)},i.onerror=function(){n(i.error)}}catch(e){n(e)}}))})).catch(n)}));return u(n,e),n},key:function(e,t){var n=this,r=new a((function(t,r){e<0?t(null):n.ready().then((function(){D(n._dbInfo,p,(function(o,i){if(o)return r(o);try{var a=i.objectStore(n._dbInfo.storeName),u=!1,c=a.openKeyCursor();c.onsuccess=function(){var n=c.result;n?0===e||u?t(n.key):(u=!0,n.advance(e)):t(null)},c.onerror=function(){r(c.error)}}catch(e){r(e)}}))})).catch(r)}));return u(r,t),r},keys:function(e){var t=this,n=new a((function(e,n){t.ready().then((function(){D(t._dbInfo,p,(function(r,o){if(r)return n(r);try{var i=o.objectStore(t._dbInfo.storeName).openKeyCursor(),a=[];i.onsuccess=function(){var t=i.result;t?(a.push(t.key),t.continue()):e(a)},i.onerror=function(){n(i.error)}}catch(e){n(e)}}))})).catch(n)}));return u(n,e),n},dropInstance:function(e,t){t=f.apply(this,arguments);var n=this.config();(e="function"!=typeof e&&e||{}).name||(e.name=e.name||n.name,e.storeName=e.storeName||n.storeName);var r,i=this;if(e.name){var c=e.name===n.name&&i._dbInfo.db?a.resolve(i._dbInfo.db):S(e).then((function(t){var n=h[e.name],r=n.forages;n.db=t;for(var o=0;o<r.length;o++)r[o]._dbInfo.db=t;return t}));r=e.storeName?c.then((function(t){if(t.objectStoreNames.contains(e.storeName)){var n=t.version+1;g(e);var r=h[e.name],i=r.forages;t.close();for(var u=0;u<i.length;u++){var c=i[u];c._dbInfo.db=null,c._dbInfo.version=n}return new a((function(t,r){var i=o.open(e.name,n);i.onerror=function(e){i.result.close(),r(e)},i.onupgradeneeded=function(){i.result.deleteObjectStore(e.storeName)},i.onsuccess=function(){var e=i.result;e.close(),t(e)}})).then((function(e){r.db=e;for(var t=0;t<i.length;t++){var n=i[t];n._dbInfo.db=e,_(n._dbInfo)}})).catch((function(t){throw(w(e,t)||a.resolve()).catch((function(){})),t}))}})):c.then((function(t){g(e);var n=h[e.name],r=n.forages;t.close();for(var i=0;i<r.length;i++)r[i]._dbInfo.db=null;return new a((function(t,n){var r=o.deleteDatabase(e.name);r.onerror=r.onblocked=function(e){var t=r.result;t&&t.close(),n(e)},r.onsuccess=function(){var e=r.result;e&&e.close(),t(e)}})).then((function(e){n.db=e;for(var t=0;t<r.length;t++)_(r[t]._dbInfo)})).catch((function(t){throw(w(e,t)||a.resolve()).catch((function(){})),t}))}))}else r=a.reject("Invalid arguments");return u(r,t),r}};var x="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",k=/^~~local_forage_type~([^~]+)~/,C="__lfsc__:",B=C.length,T="arbf",L="blob",U="si08",F="ui08",z="uic8",M="si16",P="si32",q="ur16",W="ui32",V="fl32",J="fl64",K=B+T.length,H=Object.prototype.toString;function Q(e){var t,n,r,o,i,a=.75*e.length,u=e.length,c=0;"="===e[e.length-1]&&(a--,"="===e[e.length-2]&&a--);var s=new ArrayBuffer(a),f=new Uint8Array(s);for(t=0;t<u;t+=4)n=x.indexOf(e[t]),r=x.indexOf(e[t+1]),o=x.indexOf(e[t+2]),i=x.indexOf(e[t+3]),f[c++]=n<<2|r>>4,f[c++]=(15&r)<<4|o>>2,f[c++]=(3&o)<<6|63&i;return s}function X(e){var t,n=new Uint8Array(e),r="";for(t=0;t<n.length;t+=3)r+=x[n[t]>>2],r+=x[(3&n[t])<<4|n[t+1]>>4],r+=x[(15&n[t+1])<<2|n[t+2]>>6],r+=x[63&n[t+2]];return n.length%3==2?r=r.substring(0,r.length-1)+"=":n.length%3==1&&(r=r.substring(0,r.length-2)+"=="),r}var Y={serialize:function(e,t){var n="";if(e&&(n=H.call(e)),e&&("[object ArrayBuffer]"===n||e.buffer&&"[object ArrayBuffer]"===H.call(e.buffer))){var r,o=C;e instanceof ArrayBuffer?(r=e,o+=T):(r=e.buffer,"[object Int8Array]"===n?o+=U:"[object Uint8Array]"===n?o+=F:"[object Uint8ClampedArray]"===n?o+=z:"[object Int16Array]"===n?o+=M:"[object Uint16Array]"===n?o+=q:"[object Int32Array]"===n?o+=P:"[object Uint32Array]"===n?o+=W:"[object Float32Array]"===n?o+=V:"[object Float64Array]"===n?o+=J:t(new Error("Failed to get type for BinaryArray"))),t(o+X(r))}else if("[object Blob]"===n){var i=new FileReader;i.onload=function(){var n="~~local_forage_type~"+e.type+"~"+X(this.result);t("__lfsc__:blob"+n)},i.readAsArrayBuffer(e)}else try{t(JSON.stringify(e))}catch(n){console.error("Couldn't convert value into a JSON string: ",e),t(null,n)}},deserialize:function(e){if(e.substring(0,B)!==C)return JSON.parse(e);var t,n=e.substring(K),r=e.substring(B,K);if(r===L&&k.test(n)){var o=n.match(k);t=o[1],n=n.substring(o[0].length)}var a=Q(n);switch(r){case T:return a;case L:return i([a],{type:t});case U:return new Int8Array(a);case F:return new Uint8Array(a);case z:return new Uint8ClampedArray(a);case M:return new Int16Array(a);case q:return new Uint16Array(a);case P:return new Int32Array(a);case W:return new Uint32Array(a);case V:return new Float32Array(a);case J:return new Float64Array(a);default:throw new Error("Unkown type: "+r)}},stringToBuffer:Q,bufferToString:X};function G(e,t,n,r){e.executeSql("CREATE TABLE IF NOT EXISTS "+t.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],n,r)}function Z(e,t,n,r,o,i){e.executeSql(n,r,o,(function(e,a){a.code===a.SYNTAX_ERR?e.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[t.storeName],(function(e,u){u.rows.length?i(e,a):G(e,t,(function(){e.executeSql(n,r,o,i)}),i)}),i):i(e,a)}),i)}function $(e,t,n,r){var o=this;e=s(e);var i=new a((function(i,a){o.ready().then((function(){void 0===t&&(t=null);var u=t,c=o._dbInfo;c.serializer.serialize(t,(function(t,s){s?a(s):c.db.transaction((function(n){Z(n,c,"INSERT OR REPLACE INTO "+c.storeName+" (key, value) VALUES (?, ?)",[e,t],(function(){i(u)}),(function(e,t){a(t)}))}),(function(t){if(t.code===t.QUOTA_ERR){if(r>0)return void i($.apply(o,[e,u,n,r-1]));a(t)}}))}))})).catch(a)}));return u(i,n),i}function ee(e){return new a((function(t,n){e.transaction((function(r){r.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],(function(n,r){for(var o=[],i=0;i<r.rows.length;i++)o.push(r.rows.item(i).name);t({db:e,storeNames:o})}),(function(e,t){n(t)}))}),(function(e){n(e)}))}))}var te={_driver:"webSQLStorage",_initStorage:function(e){var t=this,n={db:null};if(e)for(var r in e)n[r]="string"!=typeof e[r]?e[r].toString():e[r];var o=new a((function(e,r){try{n.db=openDatabase(n.name,String(n.version),n.description,n.size)}catch(e){return r(e)}n.db.transaction((function(o){G(o,n,(function(){t._dbInfo=n,e()}),(function(e,t){r(t)}))}),r)}));return n.serializer=Y,o},_support:"function"==typeof openDatabase,iterate:function(e,t){var n=this,r=new a((function(t,r){n.ready().then((function(){var o=n._dbInfo;o.db.transaction((function(n){Z(n,o,"SELECT * FROM "+o.storeName,[],(function(n,r){for(var i=r.rows,a=i.length,u=0;u<a;u++){var c=i.item(u),s=c.value;if(s&&(s=o.serializer.deserialize(s)),void 0!==(s=e(s,c.key,u+1)))return void t(s)}t()}),(function(e,t){r(t)}))}))})).catch(r)}));return u(r,t),r},getItem:function(e,t){var n=this;e=s(e);var r=new a((function(t,r){n.ready().then((function(){var o=n._dbInfo;o.db.transaction((function(n){Z(n,o,"SELECT * FROM "+o.storeName+" WHERE key = ? LIMIT 1",[e],(function(e,n){var r=n.rows.length?n.rows.item(0).value:null;r&&(r=o.serializer.deserialize(r)),t(r)}),(function(e,t){r(t)}))}))})).catch(r)}));return u(r,t),r},setItem:function(e,t,n){return $.apply(this,[e,t,n,1])},removeItem:function(e,t){var n=this;e=s(e);var r=new a((function(t,r){n.ready().then((function(){var o=n._dbInfo;o.db.transaction((function(n){Z(n,o,"DELETE FROM "+o.storeName+" WHERE key = ?",[e],(function(){t()}),(function(e,t){r(t)}))}))})).catch(r)}));return u(r,t),r},clear:function(e){var t=this,n=new a((function(e,n){t.ready().then((function(){var r=t._dbInfo;r.db.transaction((function(t){Z(t,r,"DELETE FROM "+r.storeName,[],(function(){e()}),(function(e,t){n(t)}))}))})).catch(n)}));return u(n,e),n},length:function(e){var t=this,n=new a((function(e,n){t.ready().then((function(){var r=t._dbInfo;r.db.transaction((function(t){Z(t,r,"SELECT COUNT(key) as c FROM "+r.storeName,[],(function(t,n){var r=n.rows.item(0).c;e(r)}),(function(e,t){n(t)}))}))})).catch(n)}));return u(n,e),n},key:function(e,t){var n=this,r=new a((function(t,r){n.ready().then((function(){var o=n._dbInfo;o.db.transaction((function(n){Z(n,o,"SELECT key FROM "+o.storeName+" WHERE id = ? LIMIT 1",[e+1],(function(e,n){var r=n.rows.length?n.rows.item(0).key:null;t(r)}),(function(e,t){r(t)}))}))})).catch(r)}));return u(r,t),r},keys:function(e){var t=this,n=new a((function(e,n){t.ready().then((function(){var r=t._dbInfo;r.db.transaction((function(t){Z(t,r,"SELECT key FROM "+r.storeName,[],(function(t,n){for(var r=[],o=0;o<n.rows.length;o++)r.push(n.rows.item(o).key);e(r)}),(function(e,t){n(t)}))}))})).catch(n)}));return u(n,e),n},dropInstance:function(e,t){t=f.apply(this,arguments);var n=this.config();(e="function"!=typeof e&&e||{}).name||(e.name=e.name||n.name,e.storeName=e.storeName||n.storeName);var r,o=this;return u(r=e.name?new a((function(t){var r;r=e.name===n.name?o._dbInfo.db:openDatabase(e.name,"","",0),e.storeName?t({db:r,storeNames:[e.storeName]}):t(ee(r))})).then((function(e){return new a((function(t,n){e.db.transaction((function(r){function o(e){return new a((function(t,n){r.executeSql("DROP TABLE IF EXISTS "+e,[],(function(){t()}),(function(e,t){n(t)}))}))}for(var i=[],u=0,c=e.storeNames.length;u<c;u++)i.push(o(e.storeNames[u]));a.all(i).then((function(){t()})).catch((function(e){n(e)}))}),(function(e){n(e)}))}))})):a.reject("Invalid arguments"),t),r}};function ne(e,t){var n=e.name+"/";return e.storeName!==t.storeName&&(n+=e.storeName+"/"),n}function re(){return!function(){var e="_localforage_support_test";try{return localStorage.setItem(e,!0),localStorage.removeItem(e),!1}catch(e){return!0}}()||localStorage.length>0}var oe={_driver:"localStorageWrapper",_initStorage:function(e){var t={};if(e)for(var n in e)t[n]=e[n];return t.keyPrefix=ne(e,this._defaultConfig),re()?(this._dbInfo=t,t.serializer=Y,a.resolve()):a.reject()},_support:function(){try{return"undefined"!=typeof localStorage&&"setItem"in localStorage&&!!localStorage.setItem}catch(e){return!1}}(),iterate:function(e,t){var n=this,r=n.ready().then((function(){for(var t=n._dbInfo,r=t.keyPrefix,o=r.length,i=localStorage.length,a=1,u=0;u<i;u++){var c=localStorage.key(u);if(0===c.indexOf(r)){var s=localStorage.getItem(c);if(s&&(s=t.serializer.deserialize(s)),void 0!==(s=e(s,c.substring(o),a++)))return s}}}));return u(r,t),r},getItem:function(e,t){var n=this;e=s(e);var r=n.ready().then((function(){var t=n._dbInfo,r=localStorage.getItem(t.keyPrefix+e);return r&&(r=t.serializer.deserialize(r)),r}));return u(r,t),r},setItem:function(e,t,n){var r=this;e=s(e);var o=r.ready().then((function(){void 0===t&&(t=null);var n=t;return new a((function(o,i){var a=r._dbInfo;a.serializer.serialize(t,(function(t,r){if(r)i(r);else try{localStorage.setItem(a.keyPrefix+e,t),o(n)}catch(e){"QuotaExceededError"!==e.name&&"NS_ERROR_DOM_QUOTA_REACHED"!==e.name||i(e),i(e)}}))}))}));return u(o,n),o},removeItem:function(e,t){var n=this;e=s(e);var r=n.ready().then((function(){var t=n._dbInfo;localStorage.removeItem(t.keyPrefix+e)}));return u(r,t),r},clear:function(e){var t=this,n=t.ready().then((function(){for(var e=t._dbInfo.keyPrefix,n=localStorage.length-1;n>=0;n--){var r=localStorage.key(n);0===r.indexOf(e)&&localStorage.removeItem(r)}}));return u(n,e),n},length:function(e){var t=this.keys().then((function(e){return e.length}));return u(t,e),t},key:function(e,t){var n=this,r=n.ready().then((function(){var t,r=n._dbInfo;try{t=localStorage.key(e)}catch(e){t=null}return t&&(t=t.substring(r.keyPrefix.length)),t}));return u(r,t),r},keys:function(e){var t=this,n=t.ready().then((function(){for(var e=t._dbInfo,n=localStorage.length,r=[],o=0;o<n;o++){var i=localStorage.key(o);0===i.indexOf(e.keyPrefix)&&r.push(i.substring(e.keyPrefix.length))}return r}));return u(n,e),n},dropInstance:function(e,t){if(t=f.apply(this,arguments),!(e="function"!=typeof e&&e||{}).name){var n=this.config();e.name=e.name||n.name,e.storeName=e.storeName||n.storeName}var r,o=this;return u(r=e.name?new a((function(t){e.storeName?t(ne(e,o._defaultConfig)):t(e.name+"/")})).then((function(e){for(var t=localStorage.length-1;t>=0;t--){var n=localStorage.key(t);0===n.indexOf(e)&&localStorage.removeItem(n)}})):a.reject("Invalid arguments"),t),r}},ie=function(e,t){for(var n=e.length,r=0;r<n;){if((o=e[r])===(i=t)||"number"==typeof o&&"number"==typeof i&&isNaN(o)&&isNaN(i))return!0;r++}var o,i;return!1},ae=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},ue={},ce={},se={INDEXEDDB:A,WEBSQL:te,LOCALSTORAGE:oe},fe=[se.INDEXEDDB._driver,se.WEBSQL._driver,se.LOCALSTORAGE._driver],le=["dropInstance"],de=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(le),he={description:"",driver:fe.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function ve(e,t){e[t]=function(){var n=arguments;return e.ready().then((function(){return e[t].apply(e,n)}))}}function pe(){for(var e=1;e<arguments.length;e++){var t=arguments[e];if(t)for(var n in t)t.hasOwnProperty(n)&&(ae(t[n])?arguments[0][n]=t[n].slice():arguments[0][n]=t[n])}return arguments[0]}var ye=new(function(){function e(t){for(var n in function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),se)if(se.hasOwnProperty(n)){var r=se[n],o=r._driver;this[n]=o,ue[o]||this.defineDriver(r)}this._defaultConfig=pe({},he),this._config=pe({},this._defaultConfig,t),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch((function(){}))}return e.prototype.config=function(e){if("object"===(void 0===e?"undefined":r(e))){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(var t in e){if("storeName"===t&&(e[t]=e[t].replace(/\W/g,"_")),"version"===t&&"number"!=typeof e[t])return new Error("Database version must be a number.");this._config[t]=e[t]}return!("driver"in e)||!e.driver||this.setDriver(this._config.driver)}return"string"==typeof e?this._config[e]:this._config},e.prototype.defineDriver=function(e,t,n){var r=new a((function(t,n){try{var r=e._driver,o=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!e._driver)return void n(o);for(var i=de.concat("_initStorage"),c=0,s=i.length;c<s;c++){var f=i[c];if((!ie(le,f)||e[f])&&"function"!=typeof e[f])return void n(o)}!function(){for(var t=function(e){return function(){var t=new Error("Method "+e+" is not implemented by the current driver"),n=a.reject(t);return u(n,arguments[arguments.length-1]),n}},n=0,r=le.length;n<r;n++){var o=le[n];e[o]||(e[o]=t(o))}}();var l=function(n){ue[r]&&console.info("Redefining LocalForage driver: "+r),ue[r]=e,ce[r]=n,t()};"_support"in e?e._support&&"function"==typeof e._support?e._support().then(l,n):l(!!e._support):l(!0)}catch(e){n(e)}}));return c(r,t,n),r},e.prototype.driver=function(){return this._driver||null},e.prototype.getDriver=function(e,t,n){var r=ue[e]?a.resolve(ue[e]):a.reject(new Error("Driver not found."));return c(r,t,n),r},e.prototype.getSerializer=function(e){var t=a.resolve(Y);return c(t,e),t},e.prototype.ready=function(e){var t=this,n=t._driverSet.then((function(){return null===t._ready&&(t._ready=t._initDriver()),t._ready}));return c(n,e,e),n},e.prototype.setDriver=function(e,t,n){var r=this;ae(e)||(e=[e]);var o=this._getSupportedDrivers(e);function i(){r._config.driver=r.driver()}function u(e){return r._extend(e),i(),r._ready=r._initStorage(r._config),r._ready}var s=null!==this._driverSet?this._driverSet.catch((function(){return a.resolve()})):a.resolve();return this._driverSet=s.then((function(){var e=o[0];return r._dbInfo=null,r._ready=null,r.getDriver(e).then((function(e){r._driver=e._driver,i(),r._wrapLibraryMethodsWithReady(),r._initDriver=function(e){return function(){var t=0;return function n(){for(;t<e.length;){var o=e[t];return t++,r._dbInfo=null,r._ready=null,r.getDriver(o).then(u).catch(n)}i();var c=new Error("No available storage method found.");return r._driverSet=a.reject(c),r._driverSet}()}}(o)}))})).catch((function(){i();var e=new Error("No available storage method found.");return r._driverSet=a.reject(e),r._driverSet})),c(this._driverSet,t,n),this._driverSet},e.prototype.supports=function(e){return!!ce[e]},e.prototype._extend=function(e){pe(this,e)},e.prototype._getSupportedDrivers=function(e){for(var t=[],n=0,r=e.length;n<r;n++){var o=e[n];this.supports(o)&&t.push(o)}return t},e.prototype._wrapLibraryMethodsWithReady=function(){for(var e=0,t=de.length;e<t;e++)ve(this,de[e])},e.prototype.createInstance=function(t){return new e(t)},e}());t.exports=ye},{3:3}]},{},[4])(4)}}]);
//# sourceMappingURL=8763.bundle.js.map