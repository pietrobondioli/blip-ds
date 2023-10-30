"use strict";(self.webpackChunkblip_ds=self.webpackChunkblip_ds||[]).push([[665],{"./dist/esm/bds-tabs.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{bds_tabs:()=>Tabs});var _index_27f906e2_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-27f906e2.js");const Tabs=class{constructor(hostRef){(0,_index_27f906e2_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.scrollButtonClick=(0,_index_27f906e2_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"scrollButtonClick",7),this.bdsTabInit=(0,_index_27f906e2_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"bdsTabInit",7),this.SCROLL_BEHAVIOR="smooth",this.handleHeaderResize=()=>{this.tabsHeaderChildElement.offsetWidth<this.tabsHeaderChildElement.scrollWidth?this.updateButtonsVisibility(!0):this.updateButtonsVisibility(!1)},this.updateButtonsVisibility=isScrollable=>{this.setLeftButtonVisibility(isScrollable),this.setRightButtonVisibility(isScrollable)},this.handleScrollButtonClick=direction=>{this.scrollButtonClick.emit({direction})},this.align="center"}onScrollButtonClick(event){var _a;event.preventDefault();const options={behavior:this.SCROLL_BEHAVIOR,top:0,left:event.detail.distance};null!==(_a=options.left)&&void 0!==_a||(options.left=this.getDistance(options,event)),this.tabsHeaderChildElement.scrollTo(options)}onSelectedTab(event){this.handleButtonOverlay(event.detail)}componentDidLoad(){this.getChildElements(),this.attachEvents(),this.setLeftButtonVisibility(!1),this.setRightButtonVisibility(!0),this.handleActiveTab()}handleActiveTab(){const tabs=Array.from(this.tabsHeaderChildElement.getElementsByTagName("bds-tab")),activeTab=tabs.find((tab=>tab.active));if(activeTab)this.bdsTabInit.emit(activeTab.group);else{const[firstTab]=tabs;this.bdsTabInit.emit(firstTab.group)}}getChildElements(){this.tabsHeaderChildElement=this.el.querySelector(".bds-tabs__header"),this.leftButtonChildElement=this.el.querySelector("#bds-tabs-button-left"),this.rightButtonChildElement=this.el.querySelector("#bds-tabs-button-right")}attachEvents(){window.onresize=this.handleHeaderResize,this.tabsHeaderChildElement.onscroll=()=>this.updateButtonsVisibility(this.tabsHeaderChildElement.scrollWidth>this.tabsHeaderChildElement.clientWidth)}setRightButtonVisibility(isScrollable){isScrollable&&this.tabsHeaderChildElement.scrollWidth>Math.ceil(this.tabsHeaderChildElement.scrollLeft+this.tabsHeaderChildElement.clientWidth)?this.rightButtonChildElement.style.display="block":this.rightButtonChildElement.style.display="none"}setLeftButtonVisibility(isScrollable){this.leftButtonChildElement.style.display=this.tabsHeaderChildElement.scrollLeft>0&&isScrollable?"block":"none"}handleButtonOverlay(group){const tab=Array.from(this.tabsHeaderChildElement.getElementsByTagName("bds-tab")).find((header=>header.group==group));[this.leftButtonChildElement,this.rightButtonChildElement].forEach((button=>{if(this.isButtonOverlappingTab(button,tab)){const distance=this.getAdjutScrollDistance(button,tab);this.scrollButtonClick.emit({distance})}}))}isButtonOverlappingTab(button,tab){const tabRect=tab.getBoundingClientRect(),buttonRect=button.getBoundingClientRect();return this.elementIsOverlapping(buttonRect,tabRect)}elementIsOverlapping(element,overlaidElement){const elementStart=element.x,elementEnd=element.x+element.width,comparatorStart=overlaidElement.x,comparatorEnd=overlaidElement.x+overlaidElement.width;return elementStart>=comparatorStart&&elementStart<=comparatorEnd||elementEnd>=comparatorStart&&elementEnd<=comparatorEnd}getAdjutScrollDistance(button,tab){const direction="bds-tabs-button-left"==button.id?"left":"right",distanceDifference=tab.clientWidth+parseInt(getComputedStyle(tab).marginRight)-button.offsetWidth;return"right"==direction?tab.parentElement.scrollLeft+distanceDifference:tab.parentElement.scrollLeft-distanceDifference}getDistance(options,event){return"right"==event.detail.direction?options.left=this.tabsHeaderChildElement.scrollLeft+this.tabsHeaderChildElement.clientWidth:options.left=this.tabsHeaderChildElement.scrollLeft-this.tabsHeaderChildElement.clientWidth}render(){return(0,_index_27f906e2_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_27f906e2_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:{"bds-tabs":!0,[`bds-tabs--${this.align}`]:!0}},(0,_index_27f906e2_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"bds-tabs__header-button-container"},(0,_index_27f906e2_js__WEBPACK_IMPORTED_MODULE_0__.h)("bds-button-icon",{class:"bds-tabs__header-button",icon:"arrow-left",size:"short",id:"bds-tabs-button-left",onClick:()=>this.handleScrollButtonClick("left"),variant:"secondary"})),(0,_index_27f906e2_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"bds-tabs__header"},(0,_index_27f906e2_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null)),(0,_index_27f906e2_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"bds-tabs__header-button-container"},(0,_index_27f906e2_js__WEBPACK_IMPORTED_MODULE_0__.h)("bds-button-icon",{class:"bds-tabs__header-button",icon:"arrow-right",size:"short",id:"bds-tabs-button-right",onClick:()=>this.handleScrollButtonClick("right"),variant:"secondary"})))}get el(){return(0,_index_27f906e2_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};Tabs.style=".bds-tabs{width:100%;display:-ms-flexbox;display:flex;z-index:1100;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-negative:0;flex-shrink:0;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;height:48px;padding:0 10px 0 10px}.bds-tabs--center{-ms-flex-pack:center;justify-content:center}.bds-tabs--left{-ms-flex-pack:start;justify-content:flex-start}.bds-tabs--right{-ms-flex-pack:end;justify-content:flex-end}.bds-tabs .bds-tabs__header{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;overflow:hidden;-ms-flex-align:stretch;align-items:stretch;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.bds-tabs .bds-tabs__header-button-container{padding:0px;min-width:40px}"}}]);