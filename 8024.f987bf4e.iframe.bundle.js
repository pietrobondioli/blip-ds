"use strict";(self.webpackChunkblip_ds=self.webpackChunkblip_ds||[]).push([[8024],{"./dist/esm/bds-modal.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{bds_modal:()=>BdsModal});var _index_27f906e2_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-27f906e2.js");const BdsModal=class{constructor(hostRef){(0,_index_27f906e2_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.bdsModalChanged=(0,_index_27f906e2_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"bdsModalChanged",7),this.handleMouseClick=()=>{this.open=!1,this.bdsModalChanged.emit({modalStatus:"closed"})},this.onClickCloseButtom=()=>{!0===this.outzoneClose&&(this.open=!1,this.bdsModalChanged.emit({modalStatus:"closed"}))},this.open=!1,this.closeButton=!0,this.size="fixed",this.outzoneClose=!0,this.dtOutzone=null,this.dtButtonClose=null}async toggle(){this.open=!this.open,this.open?this.bdsModalChanged.emit({modalStatus:"opened"}):this.bdsModalChanged.emit({modalStatus:"closed"})}handleKeyDown(event){"Enter"==event.key&&(this.open=!1)}render(){return(0,_index_27f906e2_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:{modal__dialog:!0,"modal__dialog--open":this.open,[`modal__dialog--${this.size}`]:!0}},(0,_index_27f906e2_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:{outzone:!0},onClick:()=>this.onClickCloseButtom(),"data-test":this.dtOutzone}),(0,_index_27f906e2_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:{modal:!0,[`modal--${this.size}`]:!0}},this.closeButton&&(0,_index_27f906e2_js__WEBPACK_IMPORTED_MODULE_0__.h)("bds-icon",{size:"medium",class:"close-button",name:"close",tabindex:"0",onKeyDown:this.handleKeyDown.bind(this),onClick:this.handleMouseClick,dataTest:this.dtButtonClose}),"fixed"==this.size&&(0,_index_27f906e2_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null),"fixed"!==this.size&&(0,_index_27f906e2_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:{slot:!0,[`slot--${this.size}`]:!0}},(0,_index_27f906e2_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null))))}};BdsModal.style=".modal__dialog{opacity:0;visibility:hidden;width:100%;height:100%;position:fixed;top:0;left:0;-webkit-transition:opacity 0.3s ease-in-out;transition:opacity 0.3s ease-in-out;z-index:80000;display:none}.modal__dialog .outzone{position:absolute;inset:0;background-color:var(--color-content-din, #000000);opacity:0.7}.modal__dialog--dynamic{overflow-y:auto;padding-top:40px;padding-bottom:40px;height:-webkit-fill-available}.modal__dialog .modal{position:relative;margin:auto;width:592px;height:368px;border-radius:8px;background:var(--color-surface-1, #F6F6F6);-webkit-box-shadow:0px 4px 10px rgba(51, 51, 51, 0.3);box-shadow:0px 4px 10px rgba(51, 51, 51, 0.3);padding:32px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between}.modal__dialog .modal--dynamic{height:auto;width:auto;max-width:1000px}.modal__dialog .modal .close-button{color:var(--color-content-default, #454545);-ms-flex-item-align:end;align-self:flex-end;margin-bottom:16px;cursor:pointer}.modal__dialog .modal .slot--dynamic{-ms-flex:1 1 auto;flex:1 1 auto}.modal__dialog--open{opacity:1;visibility:visible;display:-ms-flexbox;display:flex}"}}]);