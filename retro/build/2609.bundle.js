(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[2609],{12609:(t,e,s)=>{"use strict";s.r(e),s.d(e,{AttachmentsCell:()=>K,AttachmentsCellModel:()=>W,Cell:()=>Y,CellDragUtils:()=>l,CellFooter:()=>C,CellHeader:()=>_,CellModel:()=>N,CodeCell:()=>X,CodeCellModel:()=>V,Collapser:()=>c,InputArea:()=>f,InputCollapser:()=>p,InputPlaceholder:()=>L,InputPrompt:()=>w,MarkdownCell:()=>Q,MarkdownCellModel:()=>H,OutputCollapser:()=>m,OutputPlaceholder:()=>U,Placeholder:()=>J,RawCell:()=>Z,RawCellModel:()=>A,isCodeCellModel:()=>F,isMarkdownCellModel:()=>I,isRawCellModel:()=>P});var a=s(79028),n=s(52522);const i="jp-dragImage",o="jp-dragImage-content",r="jp-dragImage-prompt",d="jp-dragImage-multipleBack";var l;!function(t){t.findCell=function(t,e,s){let n=-1;for(;t&&t.parentElement;){if(s(t)){(0,a.each)(e,((e,s)=>{if(e.node===t)return n=s,!1}));break}t=t.parentElement}return n},t.detectTargetArea=function(t,e){let s;return s=t?t.editorWidget.node.contains(e)?"input":t.promptNode.contains(e)?"prompt":"cell":"unknown",s},t.shouldStartDrag=function(t,e,s,a){const n=Math.abs(s-t),i=Math.abs(a-e);return n>=5||i>=5},t.createCellDragImage=function(t,e){const s=e.length;let a;if("code"===t.model.type){const e=t.model.executionCount;a=" ",e&&(a=e.toString())}else a="";const l=t.model.value.text.split("\n")[0].slice(0,26);return s>1?""!==a?n.VirtualDOM.realize(n.h.div(n.h.div({className:i},n.h.span({className:r},"["+a+"]:"),n.h.span({className:o},l)),n.h.div({className:d},""))):n.VirtualDOM.realize(n.h.div(n.h.div({className:i},n.h.span({className:r}),n.h.span({className:o},l)),n.h.div({className:d},""))):""!==a?n.VirtualDOM.realize(n.h.div(n.h.div({className:"jp-dragImage jp-dragImage-singlePrompt"},n.h.span({className:r},"["+a+"]:"),n.h.span({className:o},l)))):n.VirtualDOM.realize(n.h.div(n.h.div({className:"jp-dragImage jp-dragImage-singlePrompt"},n.h.span({className:r}),n.h.span({className:o},l))))}}(l||(l={}));var u=s(67906),h=s(96927);class c extends u.ReactWidget{constructor(){super(),this.addClass("jp-Collapser")}get collapsed(){return!1}render(){return h.createElement("div",{className:"jp-Collapser-child",onClick:t=>this.handleClick(t)})}}class p extends c{constructor(){super(),this.addClass("jp-InputCollapser")}get collapsed(){var t;const e=null===(t=this.parent)||void 0===t?void 0:t.parent;return!!e&&e.inputHidden}handleClick(t){var e;const s=null===(e=this.parent)||void 0===e?void 0:e.parent;s&&(s.inputHidden=!s.inputHidden),this.update()}}class m extends c{constructor(){super(),this.addClass("jp-OutputCollapser")}get collapsed(){var t;const e=null===(t=this.parent)||void 0===t?void 0:t.parent;return!!e&&e.outputHidden}handleClick(t){var e;const s=null===(e=this.parent)||void 0===e?void 0:e.parent;s&&(s.outputHidden=!s.outputHidden),this.update()}}var g=s(77031);class _ extends g.Widget{constructor(){super(),this.addClass("jp-CellHeader")}}class C extends g.Widget{constructor(){super(),this.addClass("jp-CellFooter")}}var y=s(8608),v=s(20155);class f extends g.Widget{constructor(t){super(),this.addClass("jp-InputArea");const e=this.model=t.model,s=this.contentFactory=t.contentFactory||f.defaultContentFactory,a=this._prompt=s.createInputPrompt();a.addClass("jp-InputArea-prompt");const n={model:e,factory:s.editorFactory,updateOnShow:t.updateOnShow},i=this._editor=new y.CodeEditorWrapper(n);i.addClass("jp-InputArea-editor");const o=this.layout=new g.PanelLayout;o.addWidget(a),o.addWidget(i)}get editorWidget(){return this._editor}get editor(){return this._editor.editor}get promptNode(){return this._prompt.node}renderInput(t){const e=this.layout;this._rendered&&(this._rendered.parent=null),this._editor.hide(),this._rendered=t,e.addWidget(t)}showEditor(){this._rendered&&(this._rendered.parent=null),this._editor.show()}setPrompt(t){this._prompt.executionCount=t}dispose(){this.isDisposed||(this._prompt=null,this._editor=null,this._rendered=null,super.dispose())}}!function(t){class e{constructor(e={}){this._editor=e.editorFactory||t.defaultEditorFactory}get editorFactory(){return this._editor}createInputPrompt(){return new w}}t.ContentFactory=e,t.defaultEditorFactory=(new v.CodeMirrorEditorFactory).newInlineEditor,t.defaultContentFactory=new e({})}(f||(f={}));class w extends g.Widget{constructor(){super(),this._executionCount=null,this.addClass("jp-InputPrompt")}get executionCount(){return this._executionCount}set executionCount(t){this._executionCount=t,this.node.textContent=null===t?" ":`[${t||" "}]:`}}var S=s(66065),O=s(58137),x=s(54344),k=s(46287);class D{constructor(t={}){if(this._map=new x.v,this._isDisposed=!1,this._stateChanged=new O.Signal(this),this._changed=new O.Signal(this),this._modelDB=null,this._serialized=null,this._changeGuard=!1,this.contentFactory=t.contentFactory||D.defaultContentFactory,t.values)for(const e of Object.keys(t.values))void 0!==t.values[e]&&this.set(e,t.values[e]);this._map.changed.connect(this._onMapChanged,this),t.modelDB&&(this._modelDB=t.modelDB,this._serialized=this._modelDB.createValue("attachments"),this._serialized.get()?this.fromJSON(this._serialized.get()):this._serialized.set(this.toJSON()),this._serialized.changed.connect(this._onSerializedChanged,this))}get stateChanged(){return this._stateChanged}get changed(){return this._changed}get keys(){return this._map.keys()}get length(){return this._map.keys().length}get isDisposed(){return this._isDisposed}dispose(){this.isDisposed||(this._isDisposed=!0,this._map.dispose(),O.Signal.clearData(this))}has(t){return this._map.has(t)}get(t){return this._map.get(t)}set(t,e){const s=this._createItem({value:e});this._map.set(t,s)}remove(t){this._map.delete(t)}clear(){this._map.values().forEach((t=>{t.dispose()})),this._map.clear()}fromJSON(t){this.clear(),Object.keys(t).forEach((e=>{void 0!==t[e]&&this.set(e,t[e])}))}toJSON(){const t={};for(const e of this._map.keys())t[e]=this._map.get(e).toJSON();return t}_createItem(t){const e=this.contentFactory.createAttachmentModel(t);return e.changed.connect(this._onGenericChange,this),e}_onMapChanged(t,e){this._serialized&&!this._changeGuard&&(this._changeGuard=!0,this._serialized.set(this.toJSON()),this._changeGuard=!1),this._changed.emit(e),this._stateChanged.emit(void 0)}_onSerializedChanged(t,e){this._changeGuard||(this._changeGuard=!0,this.fromJSON(e.newValue),this._changeGuard=!1)}_onGenericChange(){this._stateChanged.emit(void 0)}}!function(t){class e{createAttachmentModel(t){return new k.AttachmentModel(t)}}t.ContentFactory=e,t.defaultContentFactory=new e}(D||(D={}));class j{constructor(t){this._parent=t.parent||null,this._model=t.model}async resolveUrl(t){return this._parent&&!t.startsWith("attachment:")?this._parent.resolveUrl(t):t}async getDownloadUrl(t){if(this._parent&&!t.startsWith("attachment:"))return this._parent.getDownloadUrl(t);const e=t.slice("attachment:".length),s=this._model.get(e);if(void 0===s)return t;const{data:a}=s,n=Object.keys(a)[0];if(void 0===n||-1===k.imageRendererFactory.mimeTypes.indexOf(n))throw new Error(`Cannot render unknown image mime type "${n}".`);return`data:${n};base64,${a[n]}`}isLocal(t){var e,s,a;return!(this._parent&&!t.startsWith("attachment:"))||null===(a=null===(s=(e=this._parent).isLocal)||void 0===s?void 0:s.call(e,t))||void 0===a||a}}var b,M=s(49634),E=s(48188);function F(t){return"code"===t.type}function I(t){return"markdown"===t.type}function P(t){return"raw"===t.type}class N extends y.CodeEditor.Model{constructor(t){var e;super({modelDB:t.modelDB,id:t.id||(null===(e=t.cell)||void 0===e?void 0:e.id)||S.UUID.uuid4()}),this.contentChanged=new O.Signal(this),this.stateChanged=new O.Signal(this),this._modelDBMutex=M.M(),this.value.changed.connect(this.onGenericChange,this),this.modelDB.createValue("type").set(this.type);const s=this.modelDB.createMap("metadata");s.changed.connect(this.onModelDBMetadataChange,this),s.changed.connect(this.onGenericChange,this);const a=t.cell,n=this.modelDB.createValue("trusted");if(n.changed.connect(this.onTrustedChanged,this),!a)return void n.set(!1);n.set(!!a.metadata.trusted),delete a.metadata.trusted,Array.isArray(a.source)?this.value.text=a.source.join(""):this.value.text=a.source;const i=S.JSONExt.deepCopy(a.metadata);"raw"!==this.type&&delete i.format,"code"!==this.type&&(delete i.collapsed,delete i.scrolled);for(const t in i)s.set(t,i[t])}get type(){return"raw"}get id(){return this.sharedModel.getId()}get metadata(){return this.modelDB.get("metadata")}get trusted(){return this.modelDB.getValue("trusted")}set trusted(t){this.trusted!==t&&this.modelDB.setValue("trusted",t)}toJSON(){const t=Object.create(null);for(const e of this.metadata.keys()){const s=JSON.parse(JSON.stringify(this.metadata.get(e)));t[e]=s}return this.trusted&&(t.trusted=!0),{cell_type:this.type,source:this.value.text,metadata:t}}onTrustedChanged(t,e){}onModelDBMetadataChange(t,e){const s=this.sharedModel.getMetadata();this._modelDBMutex((()=>{switch(e.type){case"add":case"change":this._changeCellMetata(s,e);break;case"remove":delete s[e.key];break;default:throw new Error(`Invalid event type: ${e.type}`)}this.sharedModel.setMetadata(s)}))}_changeCellMetata(t,e){switch(e.key){case"jupyter":t.jupyter=e.newValue;break;case"collapsed":t.collapsed=e.newValue;break;case"name":t.name=e.newValue;break;case"scrolled":t.scrolled=e.newValue;break;case"tags":t.tags=e.newValue;break;case"trusted":t.trusted=e.newValue;break;default:t[e.key]=e.newValue}}_onSharedModelChanged(t,e){super._onSharedModelChanged(t,e),this._modelDBMutex((()=>{var t;if(e.metadataChange){const s=null===(t=e.metadataChange)||void 0===t?void 0:t.newValue;s&&Object.keys(s).map((t=>{switch(t){case"collapsed":this.metadata.set("collapsed",s.jupyter);break;case"jupyter":this.metadata.set("jupyter",s.jupyter);break;case"name":this.metadata.set("name",s.name);break;case"scrolled":this.metadata.set("scrolled",s.scrolled);break;case"tags":this.metadata.set("tags",s.tags);break;case"trusted":this.metadata.set("trusted",s.trusted);break;default:this.metadata.set(t,s[t])}}))}}))}onGenericChange(){this.contentChanged.emit(void 0)}}class W extends N{constructor(t){super(t);const e=t.contentFactory||W.defaultContentFactory;let s;const a=t.cell;!a||"raw"!==a.cell_type&&"markdown"!==a.cell_type||(s=a.attachments),this._attachments=e.createAttachmentsModel({values:s,modelDB:this.modelDB}),this._attachments.stateChanged.connect(this.onGenericChange,this)}get attachments(){return this._attachments}toJSON(){const t=super.toJSON();return this.attachments.length&&(t.attachments=this.attachments.toJSON()),t}}!function(t){class e{createAttachmentsModel(t){return new D(t)}}t.ContentFactory=e,t.defaultContentFactory=new e}(W||(W={}));class A extends W{get type(){return"raw"}toJSON(){const t=super.toJSON();return t.id=this.id,t}}class H extends W{constructor(t){super(t),this.mimeType="text/x-ipythongfm"}get type(){return"markdown"}toJSON(){const t=super.toJSON();return t.id=this.id,t}}class V extends N{constructor(t){super(t);const e=t.contentFactory||V.defaultContentFactory,s=this.trusted,a=t.cell;let n=[];const i=this.modelDB.createValue("executionCount");if(i.get()||(a&&"code"===a.cell_type?(i.set(a.execution_count||null),n=a.outputs):i.set(null)),i.changed.connect(this._onExecutionCountChanged,this),this._modelDBMutex((()=>{this.sharedModel.setOutputs(null!=n?n:[])})),this._outputs=e.createOutputArea({trusted:s,values:n}),this._outputs.changed.connect(this.onGenericChange,this),this._outputs.changed.connect(this.onModelDBOutputsChange,this),this.metadata.changed.connect(b.collapseChanged,this),this.metadata.has("collapsed")){const t=this.metadata.get("collapsed");b.collapseChanged(this.metadata,{type:"change",key:"collapsed",oldValue:t,newValue:t})}else if(this.metadata.has("jupyter")){const t=this.metadata.get("jupyter");t.hasOwnProperty("outputs_hidden")&&b.collapseChanged(this.metadata,{type:"change",key:"jupyter",oldValue:t,newValue:t})}}switchSharedModel(t,e){e&&(this.clearExecution(),t.getOutputs().forEach((t=>this._outputs.add(t)))),super.switchSharedModel(t,e)}get type(){return"code"}get executionCount(){return this.modelDB.getValue("executionCount")}set executionCount(t){t!==this.executionCount&&this.modelDB.setValue("executionCount",t||null)}clearExecution(){this.outputs.clear(),this.executionCount=null,this.metadata.delete("execution")}get outputs(){return this._outputs}dispose(){this.isDisposed||(this._outputs.dispose(),this._outputs=null,super.dispose())}toJSON(){const t=super.toJSON();return t.execution_count=this.executionCount||null,t.outputs=this.outputs.toJSON(),t.id=this.id,t}onTrustedChanged(t,e){this._outputs&&(this._outputs.trusted=e.newValue),this.stateChanged.emit({name:"trusted",oldValue:e.oldValue,newValue:e.newValue})}onModelDBOutputsChange(t,e){const s=this.sharedModel;this._modelDBMutex((()=>{switch(e.type){case"add":{const t=e.newValues.map((t=>t.toJSON()));s.updateOutputs(e.newIndex,e.newIndex+t.length,t);break}case"set":{const t=e.newValues.map((t=>t.toJSON()));s.updateOutputs(e.oldIndex,e.oldValues.length,t);break}case"remove":s.updateOutputs(e.oldIndex,e.oldValues.length);break;default:throw new Error(`Invalid event type: ${e.type}`)}}))}_onSharedModelChanged(t,e){super._onSharedModelChanged(t,e),this._modelDBMutex((()=>{e.outputsChange&&(this.clearExecution(),t.getOutputs().forEach((t=>this._outputs.add(t)))),e.executionCountChange&&(this.executionCount=e.executionCountChange.newValue?e.executionCountChange.newValue:null)}))}_onExecutionCountChanged(t,e){const s=this.sharedModel;this._modelDBMutex((()=>{s.execution_count=e.newValue?e.newValue:null})),this.contentChanged.emit(void 0),this.stateChanged.emit({name:"executionCount",oldValue:e.oldValue,newValue:e.newValue})}}!function(t){class e{createOutputArea(t){return new E.n(t)}}t.ContentFactory=e,t.defaultContentFactory=new e}(V||(V={})),function(t){t.collapseChanged=function(t,e){if("collapsed"===e.key){const s=t.get("jupyter")||{},{outputs_hidden:a}=s,n=function(t,e){var s={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(s[a]=t[a]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(t);n<a.length;n++)e.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(t,a[n])&&(s[a[n]]=t[a[n]])}return s}(s,["outputs_hidden"]);a!==e.newValue&&(void 0!==e.newValue&&(n.outputs_hidden=e.newValue),0===Object.keys(n).length?t.delete("jupyter"):t.set("jupyter",n))}else if("jupyter"===e.key){const s=e.newValue||{};s.hasOwnProperty("outputs_hidden")?t.set("collapsed",s.outputs_hidden):t.delete("collapsed")}}}(b||(b={}));var B=s(30742);const R="jp-Placeholder-content";class J extends u.ReactWidget{constructor(t){super(),this.addClass("jp-Placeholder"),this._callback=t}handleClick(t){(0,this._callback)(t)}}class L extends J{constructor(t){super(t),this.addClass("jp-InputPlaceholder")}render(){return[h.createElement("div",{className:"jp-Placeholder-prompt jp-InputPrompt",key:"input"}),h.createElement("div",{className:R,onClick:t=>this.handleClick(t),key:"content"},h.createElement(B.ellipsesIcon.react,{className:"jp-MoreHorizIcon",elementPosition:"center",height:"auto",width:"32px"}))]}}class U extends J{constructor(t){super(t),this.addClass("jp-OutputPlaceholder")}render(){return[h.createElement("div",{className:"jp-Placeholder-prompt jp-OutputPrompt",key:"output"}),h.createElement("div",{className:R,onClick:t=>this.handleClick(t),key:"content"},h.createElement(B.ellipsesIcon.react,{className:"jp-MoreHorizIcon",elementPosition:"center",height:"auto",width:"32px"}))]}}var T=s(98838),z=s(67753);const $="jp-mod-rendered",G="jp-mod-noOutputs",q="application/x-jupyter-icontentsrich";class Y extends g.Widget{constructor(t){super(),this._readOnly=!1,this._inputHidden=!1,this._syncCollapse=!1,this._syncEditable=!1,this.addClass("jp-Cell");const e=this._model=t.model,s=this.contentFactory=t.contentFactory||Y.defaultContentFactory;this.layout=new g.PanelLayout;const a=s.createCellHeader();a.addClass("jp-Cell-header"),this.layout.addWidget(a);const n=this._inputWrapper=new g.Panel;n.addClass("jp-Cell-inputWrapper");const i=new p;i.addClass("jp-Cell-inputCollapser");const o=this._input=new f({model:e,contentFactory:s,updateOnShow:t.updateEditorOnShow});o.addClass("jp-Cell-inputArea"),n.addWidget(i),n.addWidget(o),this.layout.addWidget(n),this._inputPlaceholder=new L((()=>{this.inputHidden=!this.inputHidden}));const r=this.contentFactory.createCellFooter();if(r.addClass("jp-Cell-footer"),this.layout.addWidget(r),t.editorConfig){let e={};Object.keys(t.editorConfig).forEach((s=>{var a,n;e[s]=null!==(n=null===(a=t.editorConfig)||void 0===a?void 0:a[s])&&void 0!==n?n:null})),this.editor.setOptions(e)}e.metadata.changed.connect(this.onMetadataChanged,this)}initializeState(){return this.loadCollapseState(),this.loadEditableState(),this}get promptNode(){return this._inputHidden?this._inputPlaceholder.node.firstElementChild:this._input.promptNode}get editorWidget(){return this._input.editorWidget}get editor(){return this._input.editor}get model(){return this._model}get inputArea(){return this._input}get readOnly(){return this._readOnly}set readOnly(t){t!==this._readOnly&&(this._readOnly=t,this.syncEditable&&this.saveEditableState(),this.update())}saveEditableState(){const{metadata:t}=this.model,e=t.get("editable");this.readOnly&&!1===e||!this.readOnly&&void 0===e||(this.readOnly?this.model.metadata.set("editable",!1):this.model.metadata.delete("editable"))}loadEditableState(){this.readOnly=!1===this.model.metadata.get("editable")}get ready(){return Promise.resolve(void 0)}setPrompt(t){this._input.setPrompt(t)}get inputHidden(){return this._inputHidden}set inputHidden(t){if(this._inputHidden===t)return;const e=this._inputWrapper.layout;t?(this._input.parent=null,e.addWidget(this._inputPlaceholder)):(this._inputPlaceholder.parent=null,e.addWidget(this._input)),this._inputHidden=t,this.syncCollapse&&this.saveCollapseState(),this.handleInputHidden(t)}saveCollapseState(){const t=Object.assign({},this.model.metadata.get("jupyter"));this.inputHidden&&!0===t.source_hidden||!this.inputHidden&&void 0===t.source_hidden||(this.inputHidden?t.source_hidden=!0:delete t.source_hidden,0===Object.keys(t).length?this.model.metadata.delete("jupyter"):this.model.metadata.set("jupyter",t))}loadCollapseState(){const t=this.model.metadata.get("jupyter")||{};this.inputHidden=!!t.source_hidden}handleInputHidden(t){}get syncCollapse(){return this._syncCollapse}set syncCollapse(t){this._syncCollapse!==t&&(this._syncCollapse=t,t&&this.loadCollapseState())}get syncEditable(){return this._syncEditable}set syncEditable(t){this._syncEditable!==t&&(this._syncEditable=t,t&&this.loadEditableState())}clone(){return new(0,this.constructor)({model:this.model,contentFactory:this.contentFactory})}dispose(){this.isDisposed||(this._input=null,this._model=null,this._inputWrapper=null,this._inputPlaceholder=null,super.dispose())}onAfterAttach(t){this.update()}onActivateRequest(t){this.editor.focus()}onFitRequest(t){this.editor.refresh()}onUpdateRequest(t){this._model&&this.editor.getOption("readOnly")!==this._readOnly&&(this.editor.setOption("readOnly",this._readOnly),this.toggleClass("jp-mod-readOnly",this._readOnly))}onMetadataChanged(t,e){switch(e.key){case"jupyter":this.syncCollapse&&this.loadCollapseState();break;case"editable":this.syncEditable&&this.loadEditableState()}}}!function(t){class e{constructor(t={}){this._editorFactory=t.editorFactory||f.defaultEditorFactory}get editorFactory(){return this._editorFactory}createCellHeader(){return new _}createCellFooter(){return new C}createInputPrompt(){return new w}createOutputPrompt(){return new z.ni}createStdin(t){return new z.yu(t)}}t.ContentFactory=e,t.defaultContentFactory=new e}(Y||(Y={}));class X extends Y{constructor(t){super(t),this._outputHidden=!1,this._syncScrolled=!1,this._savingMetadata=!1,this.addClass("jp-CodeCell");const e=this._rendermime=t.rendermime,s=this.contentFactory,a=this.model,n=this._outputWrapper=new g.Panel;n.addClass("jp-Cell-outputWrapper");const i=new m;i.addClass("jp-Cell-outputCollapser");const o=this._output=new z.FJ({model:a.outputs,rendermime:e,contentFactory:s,maxNumberOutputs:t.maxNumberOutputs});o.addClass("jp-Cell-outputArea"),0===a.outputs.length&&this.addClass(G),o.outputLengthChanged.connect(this._outputLengthHandler,this),n.addWidget(i),n.addWidget(o),this.layout.insertWidget(2,n),this._outputPlaceholder=new U((()=>{this.outputHidden=!this.outputHidden})),a.stateChanged.connect(this.onStateChanged,this)}initializeState(){return super.initializeState(),this.loadScrolledState(),this.setPrompt(`${this.model.executionCount||""}`),this}get outputArea(){return this._output}get outputHidden(){return this._outputHidden}set outputHidden(t){if(this._outputHidden===t)return;const e=this._outputWrapper.layout;t?(e.removeWidget(this._output),e.addWidget(this._outputPlaceholder),this.inputHidden&&!this._outputWrapper.isHidden&&this._outputWrapper.hide()):(this._outputWrapper.isHidden&&this._outputWrapper.show(),e.removeWidget(this._outputPlaceholder),e.addWidget(this._output)),this._outputHidden=t,this.syncCollapse&&this.saveCollapseState()}saveCollapseState(){this._savingMetadata=!0;try{super.saveCollapseState();const t=this.model.metadata,e=this.model.metadata.get("collapsed");if(this.outputHidden&&!0===e||!this.outputHidden&&void 0===e)return;this.outputHidden?t.set("collapsed",!0):t.delete("collapsed")}finally{this._savingMetadata=!1}}loadCollapseState(){super.loadCollapseState(),this.outputHidden=!!this.model.metadata.get("collapsed")}get outputsScrolled(){return this._outputsScrolled}set outputsScrolled(t){this.toggleClass("jp-mod-outputsScrolled",t),this._outputsScrolled=t,this.syncScrolled&&this.saveScrolledState()}saveScrolledState(){const{metadata:t}=this.model,e=t.get("scrolled");this.outputsScrolled&&!0===e||!this.outputsScrolled&&void 0===e||(this.outputsScrolled?t.set("scrolled",!0):t.delete("scrolled"))}loadScrolledState(){const t=this.model.metadata;"auto"===t.get("scrolled")?this.outputsScrolled=!1:this.outputsScrolled=!!t.get("scrolled")}get syncScrolled(){return this._syncScrolled}set syncScrolled(t){this._syncScrolled!==t&&(this._syncScrolled=t,t&&this.loadScrolledState())}handleInputHidden(t){!t&&this._outputWrapper.isHidden?this._outputWrapper.show():t&&!this._outputWrapper.isHidden&&this._outputHidden&&this._outputWrapper.hide()}clone(){return new(0,this.constructor)({model:this.model,contentFactory:this.contentFactory,rendermime:this._rendermime})}cloneOutputArea(){return new z.AS({model:this.model.outputs,contentFactory:this.contentFactory,rendermime:this._rendermime})}dispose(){this.isDisposed||(this._output.outputLengthChanged.disconnect(this._outputLengthHandler,this),this._rendermime=null,this._output=null,this._outputWrapper=null,this._outputPlaceholder=null,super.dispose())}onStateChanged(t,e){switch(e.name){case"executionCount":this.setPrompt(`${t.executionCount||""}`)}}onMetadataChanged(t,e){if(!this._savingMetadata){switch(e.key){case"scrolled":this.syncScrolled&&this.loadScrolledState();break;case"collapsed":this.syncCollapse&&this.loadCollapseState()}super.onMetadataChanged(t,e)}}_outputLengthHandler(t,e){const s=0===e;this.toggleClass(G,s)}}!function(t){t.execute=async function(t,e,s){var a;const n=t.model,i=n.value.text;if(!i.trim()||!(null===(a=e.session)||void 0===a?void 0:a.kernel))return void n.clearExecution();const o={cellId:n.id};s=Object.assign(Object.assign(Object.assign({},n.metadata.toJSON()),s),o);const{recordTiming:r}=s;let d;n.clearExecution(),t.outputHidden=!1,t.setPrompt("*"),n.trusted=!0;try{const a=z.FJ.execute(i,t.outputArea,e,s);if(r){const e=t=>{let e;switch(t.header.msg_type){case"status":e=`status.${t.content.execution_state}`;break;case"execute_input":e="execute_input";break;default:return!0}const s=t.header.date||(new Date).toISOString(),a=Object.assign({},n.metadata.get("execution"));return a[`iopub.${e}`]=s,n.metadata.set("execution",a),!0};t.outputArea.future.registerMessageHook(e)}else n.metadata.delete("execution");d=t.outputArea.future;const o=await a;if(n.executionCount=o.content.execution_count,r){const t=Object.assign({},n.metadata.get("execution")),e=o.metadata.started;e&&(t["shell.execute_reply.started"]=e);const s=o.header.date;t["shell.execute_reply"]=s||(new Date).toISOString(),n.metadata.set("execution",t)}return o}catch(e){throw d&&!t.isDisposed&&t.outputArea.future===d&&t.setPrompt(""),e}}}(X||(X={}));class K extends Y{handleEvent(t){switch(t.type){case"paste":this._evtPaste(t);break;case"dragenter":case"dragover":t.preventDefault();break;case"drop":this._evtNativeDrop(t);break;case"lm-dragover":this._evtDragOver(t);break;case"lm-drop":this._evtDrop(t)}}onAfterAttach(t){super.onAfterAttach(t);const e=this.node;e.addEventListener("lm-dragover",this),e.addEventListener("lm-drop",this),e.addEventListener("dragenter",this),e.addEventListener("dragover",this),e.addEventListener("drop",this),e.addEventListener("paste",this)}onBeforeDetach(t){const e=this.node;e.removeEventListener("drop",this),e.removeEventListener("dragover",this),e.removeEventListener("dragenter",this),e.removeEventListener("paste",this),e.removeEventListener("lm-dragover",this),e.removeEventListener("lm-drop",this)}_evtDragOver(t){(0,a.some)(k.imageRendererFactory.mimeTypes,(e=>!!t.mimeData.hasData(q)&&t.mimeData.getData(q).model.mimetype===e))&&(t.preventDefault(),t.stopPropagation(),t.dropAction=t.proposedAction)}_evtPaste(t){if(t.clipboardData){const e=t.clipboardData.items;for(let s=0;s<e.length;s++){if("text/plain"===e[s].type){if(s<e.length-1&&"file"===e[s+1].kind)continue;e[s].getAsString((t=>{var e,s;null===(s=(e=this.editor).replaceSelection)||void 0===s||s.call(e,t)}))}this._attachFiles(t.clipboardData.items)}}t.preventDefault()}_evtNativeDrop(t){t.dataTransfer&&this._attachFiles(t.dataTransfer.items),t.preventDefault()}_evtDrop(t){const e=(0,a.toArray)((0,a.filter)(t.mimeData.types(),(e=>{if(e===q){const e=t.mimeData.getData(q);return-1!==k.imageRendererFactory.mimeTypes.indexOf(e.model.mimetype)}return-1!==k.imageRendererFactory.mimeTypes.indexOf(e)})));if(0!==e.length)if(t.preventDefault(),t.stopPropagation(),"none"!==t.proposedAction){t.dropAction="copy";for(const s of e)if(s===q){const{model:e,withContent:s}=t.mimeData.getData(q);if("file"===e.type){const t=this._generateURI(e.name);this.updateCellSourceWithAttachment(e.name,t),s().then((e=>{this.model.attachments.set(t,{[e.mimetype]:e.content})}))}}else{const e=this._generateURI();this.model.attachments.set(e,{[s]:t.mimeData.getData(s)}),this.updateCellSourceWithAttachment(e,e)}}else t.dropAction="none"}_attachFiles(t){for(let e=0;e<t.length;e++){const s=t[e];if("file"===s.kind){const t=s.getAsFile();t&&this._attachFile(t)}}}_attachFile(t){const e=new FileReader;e.onload=s=>{const{href:a,protocol:n}=T.URLExt.parse(e.result);if("data:"!==n)return;const i=/([\w+\/\+]+)?(?:;(charset=[\w\d-]*|base64))?,(.*)/.exec(a);if(!i||4!==i.length)return;const o=i[1],r={[o]:i[3]},d=this._generateURI(t.name);o.startsWith("image/")&&(this.model.attachments.set(d,r),this.updateCellSourceWithAttachment(t.name,d))},e.onerror=e=>{console.error(`Failed to attach ${t.name}`+e)},e.readAsDataURL(t)}_generateURI(t=""){const e=t.lastIndexOf(".");return-1!==e?S.UUID.uuid4().concat(t.substring(e)):S.UUID.uuid4()}}class Q extends K{constructor(t){var e;super(t),this._renderer=null,this._rendered=!0,this._prevText="",this._ready=new S.PromiseDelegate,this.addClass("jp-MarkdownCell"),this._rendermime=t.rendermime.clone({resolver:new j({parent:null!==(e=t.rendermime.resolver)&&void 0!==e?e:void 0,model:this.model.attachments})}),this.editor.setOption("handlePaste",!1),this._monitor=new T.ActivityMonitor({signal:this.model.contentChanged,timeout:1e3}),this._monitor.activityStopped.connect((()=>{this._rendered&&this.update()}),this),this._updateRenderedInput().then((()=>{this._ready.resolve(void 0)})),this.renderInput(this._renderer)}get ready(){return this._ready.promise}get rendered(){return this._rendered}set rendered(t){t!==this._rendered&&(this._rendered=t,this._handleRendered(),this._rendered||this.editor.refresh())}renderInput(t){this.addClass($),this.inputArea.renderInput(t)}showEditor(){this.removeClass($),this.inputArea.showEditor()}onUpdateRequest(t){this._handleRendered(),super.onUpdateRequest(t)}updateCellSourceWithAttachment(t,e){var s,a;const n=`![${t}](attachment:${null!=e?e:t})`;null===(a=(s=this.editor).replaceSelection)||void 0===a||a.call(s,n)}_handleRendered(){this._rendered?(this._updateRenderedInput(),this.renderInput(this._renderer)):this.showEditor()}_updateRenderedInput(){const t=this.model,e=t&&t.value.text||"Type Markdown and LaTeX: $ α^2 $";if(e!==this._prevText){const t=new k.MimeModel({data:{"text/markdown":e}});return this._renderer||(this._renderer=this._rendermime.createRenderer("text/markdown"),this._renderer.addClass("jp-MarkdownOutput")),this._prevText=e,this._renderer.renderModel(t)}return Promise.resolve(void 0)}clone(){return new(0,this.constructor)({model:this.model,contentFactory:this.contentFactory,rendermime:this._rendermime})}}class Z extends Y{constructor(t){super(t),this.addClass("jp-RawCell")}clone(){return new(0,this.constructor)({model:this.model,contentFactory:this.contentFactory})}}},54344:(t,e,s)=>{"use strict";s.d(e,{v:()=>i});var a,n=s(58137);class i{constructor(t={}){if(this._map=new Map,this._changed=new n.Signal(this),this._isDisposed=!1,this._itemCmp=t.itemCmp||a.itemCmp,t.values)for(const e in t.values)this._map.set(e,t.values[e])}get type(){return"Map"}get changed(){return this._changed}get isDisposed(){return this._isDisposed}get size(){return this._map.size}set(t,e){const s=this._map.get(t);if(void 0===e)throw Error("Cannot set an undefined value, use remove");const a=this._itemCmp;return void 0!==s&&a(s,e)||(this._map.set(t,e),this._changed.emit({type:s?"change":"add",key:t,oldValue:s,newValue:e})),s}get(t){return this._map.get(t)}has(t){return this._map.has(t)}keys(){const t=[];return this._map.forEach(((e,s)=>{t.push(s)})),t}values(){const t=[];return this._map.forEach(((e,s)=>{t.push(e)})),t}delete(t){const e=this._map.get(t);return this._map.delete(t)&&this._changed.emit({type:"remove",key:t,oldValue:e,newValue:void 0}),e}clear(){const t=this.keys();for(let e=0;e<t.length;e++)this.delete(t[e])}dispose(){this.isDisposed||(this._isDisposed=!0,n.Signal.clearData(this),this._map.clear())}}!function(t){t.itemCmp=function(t,e){return t===e}}(a||(a={}))},49634:(t,e,s)=>{"use strict";s.d(e,{M:()=>a});const a=()=>{let t=!0;return e=>{if(t){t=!1;try{e()}finally{t=!0}}}}}}]);
//# sourceMappingURL=2609.bundle.js.map