(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[6839],{86839:(e,t,s)=>{"use strict";s.d(t,{a:()=>i});var r,a=s(79028),n=s(58137);class i{constructor(e={}){this._array=[],this._isDisposed=!1,this._changed=new n.Signal(this),void 0!==e.values&&(0,a.each)(e.values,(e=>{this._array.push(e)})),this._itemCmp=e.itemCmp||r.itemCmp}get type(){return"List"}get changed(){return this._changed}get length(){return this._array.length}get isDisposed(){return this._isDisposed}dispose(){this._isDisposed||(this._isDisposed=!0,n.Signal.clearData(this),this.clear())}iter(){return new a.ArrayIterator(this._array)}get(e){return this._array[e]}set(e,t){const s=this._array[e];if(void 0===t)throw new Error("Cannot set an undefined item");(0,this._itemCmp)(s,t)||(this._array[e]=t,this._changed.emit({type:"set",oldIndex:e,newIndex:e,oldValues:[s],newValues:[t]}))}push(e){const t=this._array.push(e);return this._changed.emit({type:"add",oldIndex:-1,newIndex:this.length-1,oldValues:[],newValues:[e]}),t}insert(e,t){a.ArrayExt.insert(this._array,e,t),this._changed.emit({type:"add",oldIndex:-1,newIndex:e,oldValues:[],newValues:[t]})}removeValue(e){const t=this._itemCmp,s=a.ArrayExt.findFirstIndex(this._array,(s=>t(s,e)));return this.remove(s),s}remove(e){const t=a.ArrayExt.removeAt(this._array,e);if(void 0!==t)return this._changed.emit({type:"remove",oldIndex:e,newIndex:-1,newValues:[],oldValues:[t]}),t}clear(){const e=this._array.slice();this._array.length=0,this._changed.emit({type:"remove",oldIndex:0,newIndex:0,newValues:[],oldValues:e})}move(e,t){if(this.length<=1||e===t)return;const s=[this._array[e]];a.ArrayExt.move(this._array,e,t),this._changed.emit({type:"move",oldIndex:e,newIndex:t,oldValues:s,newValues:s})}pushAll(e){const t=this.length;return(0,a.each)(e,(e=>{this._array.push(e)})),this._changed.emit({type:"add",oldIndex:-1,newIndex:t,oldValues:[],newValues:(0,a.toArray)(e)}),this.length}insertAll(e,t){const s=e;(0,a.each)(t,(t=>{a.ArrayExt.insert(this._array,e++,t)})),this._changed.emit({type:"add",oldIndex:-1,newIndex:s,oldValues:[],newValues:(0,a.toArray)(t)})}removeRange(e,t){const s=this._array.slice(e,t);for(let s=e;s<t;s++)a.ArrayExt.removeAt(this._array,e);return this._changed.emit({type:"remove",oldIndex:e,newIndex:-1,oldValues:s,newValues:[]}),this.length}}!function(e){e.itemCmp=function(e,t){return e===t}}(r||(r={}))}}]);
//# sourceMappingURL=6839.bundle.js.map