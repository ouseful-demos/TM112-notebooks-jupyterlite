(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[8961,3509],{95168:(e,t,s)=>{"use strict";s.r(t),s.d(t,{ITooltipManager:()=>o,Tooltip:()=>a});const o=new(s(66065).Token)("@jupyterlab/tooltip:ITooltipManager");var n=s(77031),i=s(67906),d=s(46287);const r="jp-mod-tooltip",h=!0;class a extends n.Widget{constructor(e){super(),this._content=null;const t=this.layout=new n.PanelLayout,s=new d.MimeModel({data:e.bundle});this.anchor=e.anchor,this.addClass("jp-Tooltip"),this.hide(),this._editor=e.editor,this._rendermime=e.rendermime;const o=this._rendermime.preferredMimeType(e.bundle,"any");o&&(this._content=this._rendermime.createRenderer(o),this._content.renderModel(s),this._content.addClass("jp-Tooltip-content"),t.addWidget(this._content))}dispose(){this._content&&(this._content.dispose(),this._content=null),super.dispose()}handleEvent(e){if(this.isHidden||this.isDisposed)return;const{node:t}=this,s=e.target;switch(e.type){case"keydown":if(t.contains(s))return;this.dispose();break;case"mousedown":if(t.contains(s))return void this.activate();this.dispose();break;case"scroll":this._evtScroll(e)}}onActivateRequest(e){this.node.tabIndex=-1,this.node.focus()}onAfterAttach(e){document.body.classList.add(r),document.addEventListener("keydown",this,h),document.addEventListener("mousedown",this,h),this.anchor.node.addEventListener("scroll",this,h),this.update()}onBeforeDetach(e){document.body.classList.remove(r),document.removeEventListener("keydown",this,h),document.removeEventListener("mousedown",this,h),this.anchor.node.removeEventListener("scroll",this,h)}onUpdateRequest(e){this.isHidden&&this.show(),this._setGeometry(),super.onUpdateRequest(e)}_evtScroll(e){this.node.contains(e.target)||this.update()}_setGeometry(){const e=this._editor,t=e.getCursorPosition(),s=e.getOffsetAt(t),o=e.getLine(t.line);if(!o)return;const n=o.substring(0,s).split(/\W+/),d=n[n.length-1],r=d?s-d.length:s,h=e.getPositionAt(r);if(!h)return;const a=e.getCoordinateForPosition(h),c=window.getComputedStyle(this.node),l=parseInt(c.paddingLeft,10)||0;i.HoverBox.setGeometry({anchor:a,host:e.host,maxHeight:250,minHeight:20,node:this.node,offset:{horizontal:-1*l},privilege:"below",style:c})}}}}]);
//# sourceMappingURL=8961.bundle.js.map