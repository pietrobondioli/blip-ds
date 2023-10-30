"use strict";(self.webpackChunkblip_ds=self.webpackChunkblip_ds||[]).push([[1402],{"./dist/esm/bds-sidebar.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{bds_sidebar:()=>Sidebar});var _index_27f906e2_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-27f906e2.js");const Sidebar=class{constructor(hostRef){(0,_index_27f906e2_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.bdsToggle=(0,_index_27f906e2_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"bdsToggle",7),this.listiner=event=>{"Escape"==event.key&&"fixed"!==this.type&&(this.isOpen=!1)},this.onClickCloseButtom=()=>{this.isOpen=!1},this.InnerSpacing=0,this.isOpen="fixed"===this.type,this.sidebarPosition="left",this.type="over",this.margin=!0,this.width=360,this.dtOutzone=null,this.dtButtonClose=null,this.background="surface-2"}async toggle(){this.isOpen=!this.isOpen}isOpenChanged(newValue){this.bdsToggle.emit({value:newValue}),!0===newValue?document.addEventListener("keyup",this.listiner,!1):document.removeEventListener("keyup",this.listiner,!1)}componentWillLoad(){this.hasFooterSlot=!!this.hostElement.querySelector('[slot="footer"]'),this.hasHeaderSlot=!!this.hostElement.querySelector('[slot="header"]')}render(){return(0,_index_27f906e2_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:{sidebar_dialog:!0,is_open:this.isOpen,[`type_${this.type}`]:!0}},"over"===this.type?(0,_index_27f906e2_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:{outzone:!0},onClick:()=>this.onClickCloseButtom(),"data-test":this.dtOutzone}):"",(0,_index_27f906e2_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:{sidebar:!0,is_open:this.isOpen,[`type_${this.type}`]:!0,[`position_${this.sidebarPosition}`]:!0,[`background_${this.background}`]:!0},style:{width:`${this.width<144?144:this.width}px`}},this.hasHeaderSlot&&(0,_index_27f906e2_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:{header:!0}},(0,_index_27f906e2_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:{content:!0}},(0,_index_27f906e2_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"header"})),"fixed"===this.type?"":(0,_index_27f906e2_js__WEBPACK_IMPORTED_MODULE_0__.h)("bds-button-icon",{class:{closeButton:!0},icon:"close",size:"short",variant:"secondary",onClick:()=>this.onClickCloseButtom(),dataTest:this.dtButtonClose})),(0,_index_27f906e2_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:{body:!0}},(0,_index_27f906e2_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:{content:!0,element_scrolled:!0,margin:this.margin}},(0,_index_27f906e2_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"body"}))),this.hasFooterSlot&&(0,_index_27f906e2_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:{footer:!0}},(0,_index_27f906e2_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:{content:!0}},(0,_index_27f906e2_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"footer"})))))}get hostElement(){return(0,_index_27f906e2_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{isOpen:["isOpenChanged"]}}};Sidebar.style=".sidebar_dialog{width:100%;height:100vh;-webkit-box-shadow:0px 4px 10px rgba(51, 51, 51, 0.3);box-shadow:0px 4px 10px rgba(51, 51, 51, 0.3);background-color:rgba(0, 0, 0, 0.7);opacity:0;visibility:hidden;-webkit-transition:opacity 0.3s ease-in-out;transition:opacity 0.3s ease-in-out;display:none}.sidebar_dialog.type_over{position:fixed;top:0;left:0;z-index:80000}.sidebar_dialog.type_over .sidebar{z-index:90000}.sidebar_dialog.type_fixed{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;position:relative;height:100%;-webkit-box-shadow:none;box-shadow:none}.sidebar_dialog.is_open{display:-ms-flexbox;display:flex;opacity:1;visibility:visible}.sidebar_dialog .outzone{-ms-flex-order:2;order:2;width:100%;height:100vh}.sidebar_dialog .sidebar{width:360px;-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;background-color:var(--color-surface-2, #E0E0E0);-ms-flex-negative:0;flex-shrink:0}.sidebar_dialog .sidebar.position_left{-ms-flex-order:1;order:1}.sidebar_dialog .sidebar.position_right{-ms-flex-order:3;order:3}.sidebar_dialog .sidebar.background_surface-1{background-color:var(--color-surface-1, #F6F6F6)}.sidebar_dialog .sidebar.background_surface-2{background-color:var(--color-surface-2, #E0E0E0)}.sidebar_dialog .sidebar.background_surface-3{background-color:var(--color-surface-3, #CFCFCF)}.sidebar_dialog .sidebar.background_surface-4{background-color:var(--color-surface-4, #141414)}.sidebar_dialog .sidebar.type_fixed{width:288px}.sidebar_dialog .sidebar .header{display:-ms-flexbox;display:flex;-ms-flex-line-pack:center;align-content:center;-ms-flex-pack:justify;justify-content:space-between;padding:24px}.sidebar_dialog .sidebar .header .content{display:-ms-flexbox;display:flex;width:100%;-ms-flex-align:center;align-items:center;position:relative;color:var(--color-content-default, #454545)}.sidebar_dialog .sidebar .header .content ::slotted(*){width:100%}.sidebar_dialog .sidebar .header .closeButton{border-radius:8px;contain:inherit;-webkit-transition:height 0.5s, all 0.3s;-moz-transition:height 0.5s, all 0.3s;transition:height 0.5s, all 0.3s;z-index:1;cursor:pointer;color:var(--color-content-default, #454545)}.sidebar_dialog .sidebar .body{position:relative;-ms-flex:1 1 auto;flex:1 1 auto}.sidebar_dialog .sidebar .body .content{position:absolute;inset:0;z-index:999999;overflow-y:overlay;overflow-x:clip}.sidebar_dialog .sidebar .body .content::-webkit-scrollbar{width:16px;background-color:transparent}.sidebar_dialog .sidebar .body .content::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:#b9cbd3}.sidebar_dialog .sidebar .body .margin{padding:8px 24px}.sidebar_dialog .sidebar .footer .content{padding:24px}.sidebar_dialog .sidebar .footer .content ::slotted(*){height:40px;overflow:hidden}.sidebar_dialog .sidebar.is_open.position_left{right:calc(100% - 360px)}.sidebar_dialog .sidebar.is_open.position_right{left:calc(100% - 360px)}"}}]);