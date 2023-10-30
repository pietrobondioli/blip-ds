"use strict";(self.webpackChunkblip_ds=self.webpackChunkblip_ds||[]).push([[7467],{"./dist/esm/bds-dropdown.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{bds_dropdown:()=>BdsDropdown});var _index_27f906e2_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-27f906e2.js"),_position_element_be44bd1c_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/esm/position-element-be44bd1c.js");const BdsDropdown=class{constructor(hostRef){(0,_index_27f906e2_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.bdsToggle=(0,_index_27f906e2_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"bdsToggle",7),this.onCloseSubMenu=()=>{this.stateSubMenu="close"},this.refDropElement=el=>{this.dropElement=el},this.onClickCloseButtom=()=>{this.open=!1},this.openSubmenu=()=>{"hover"===this.activeMode&&(this.zIndex=1),this.openSubMenu=!0},this.closeSubmenu=()=>{"hover"===this.activeMode&&(this.zIndex=0),this.openSubMenu=!1},this.centerDropElement=value=>{const arrayPosition=value.split("-");"left"!=arrayPosition[0]&&"right"!=arrayPosition[0]||"center"!=arrayPosition[1]||(this.dropElement.style.top=`calc(50% - ${this.dropElement.offsetHeight/2}px)`)},this.intoView=null,this.openSubMenu=!1,this.stateSubMenu="close",this.zIndex=0,this.delay=null,this.activeMode="click",this.open=!1,this.position="auto"}componentWillLoad(){this.activatorElement=this.hostElement.querySelector('[slot="dropdown-activator"]').children[0],this.intoView=(0,_position_element_be44bd1c_js__WEBPACK_IMPORTED_MODULE_1__.g)(this.hostElement),"hover"==this.activeMode?(this.activatorElement.addEventListener("mouseover",(()=>this.openSubmenu())),this.activatorElement.addEventListener("click",(()=>this.openSubmenu())),this.activatorElement.addEventListener("mouseout",(()=>this.closeSubmenu()))):this.activatorElement.addEventListener("click",(()=>this.toggle()))}componentDidLoad(){"auto"!=this.position?(this.centerDropElement(this.position),this.setDefaultPlacement(this.position)):this.validatePositionDrop()}setDefaultPlacement(value){this.dropElement.classList.add(`dropdown__basic__${value}`)}validatePositionDrop(){const positionValue=(0,_position_element_be44bd1c_js__WEBPACK_IMPORTED_MODULE_1__.p)({actionElement:this.hostElement,changedElement:this.dropElement,intoView:this.intoView});this.dropElement.classList.add(`dropdown__basic__${positionValue.y}-${positionValue.x}`)}isOpenChanged(open){this.bdsToggle.emit({value:open}),open&&("auto"!=this.position?this.setDefaultPlacement(this.position):this.validatePositionDrop())}isPositionChanged(){this.setDefaultPlacement(this.position)}async toggle(){this.open=!this.open}async setOpen(){this.open=!0}async setClose(){this.open=!1}openSubMenuChanged(active){0==active&&(this.stateSubMenu="pending",this.delay=setTimeout(this.onCloseSubMenu,1e3)),1==active&&(clearTimeout(this.delay),this.delay=null,this.stateSubMenu="open")}stateSubMenuChanged(state){switch(state){case"open":case"pending":this.open=!0;break;case"close":this.open=!1}}render(){const zIndexSubmenu={zIndex:`${this.zIndex}`};return(0,_index_27f906e2_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_27f906e2_js__WEBPACK_IMPORTED_MODULE_0__.H,null,(0,_index_27f906e2_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"dropdown-activator"}),(0,_index_27f906e2_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{ref:el=>this.refDropElement(el),class:{dropdown:!0,dropdown__open:this.open},onMouseOver:()=>this.openSubmenu(),onMouseOut:()=>this.closeSubmenu()},(0,_index_27f906e2_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"content",style:zIndexSubmenu},(0,_index_27f906e2_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"dropdown-content"}))),"hover"!==this.activeMode&&this.open&&(0,_index_27f906e2_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:{outzone:!0},onClick:()=>this.onClickCloseButtom()}))}get hostElement(){return(0,_index_27f906e2_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{open:["isOpenChanged"],position:["isPositionChanged"],openSubMenu:["openSubMenuChanged"],stateSubMenu:["stateSubMenuChanged"]}}};BdsDropdown.style=':host{position:relative;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}:host(.is_child_drop){display:block;width:100%}.dropdown{position:absolute;pointer-events:none;padding:2px;background-color:var(--color-surface-1, #F6F6F6);border-radius:8px;-webkit-box-shadow:0px 10px 16px rgba(0, 0, 0, 0.12);box-shadow:0px 10px 16px rgba(0, 0, 0, 0.12);min-width:240px;width:-webkit-max-content;width:-moz-max-content;width:max-content;opacity:0;-webkit-transition:opacity 0.5s;-moz-transition:opacity 0.5s;transition:opacity 0.5s;z-index:90000}.dropdown__open{pointer-events:auto;opacity:1}.dropdown__basic__top-center{bottom:calc(100% + 16px);left:calc(50% - 122px)}.dropdown__basic__top-left{bottom:calc(100% + 16px);left:0}.dropdown__basic__top-right{bottom:calc(100% + 16px);right:0}.dropdown__basic__bottom-center{top:calc(100% + 16px);left:calc(50% - 122px)}.dropdown__basic__bottom-right{top:calc(100% + 16px);right:0}.dropdown__basic__bottom-left{top:calc(100% + 16px);left:0}.dropdown__basic__right-center{right:calc(100% + 8px)}.dropdown__basic__right-top{right:calc(100% + 8px);top:0}.dropdown__basic__right-bottom{right:calc(100% + 8px);bottom:0}.dropdown__basic__left-center{left:calc(100% + 8px)}.dropdown__basic__left-top{left:calc(100% + 8px);top:0}.dropdown__basic__left-bottom{left:calc(100% + 8px);bottom:0}.dropdown:after{content:"";position:absolute;inset:0;border-radius:8px;-webkit-box-shadow:var(--color-surface-1, #F6F6F6) 0px 0px 0px 2px inset;box-shadow:var(--color-surface-1, #F6F6F6) 0px 0px 0px 2px inset;pointer-events:none}.outzone{position:fixed;top:0;left:0;width:100%;height:100vh;z-index:80000}'},"./dist/esm/position-element-be44bd1c.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>positionElement,g:()=>getScrollParent,p:()=>positionAbsoluteElement});const getScrollParent=node=>null===node?null:node.classList.contains("element_scrolled")||"BODY"==(null==node?void 0:node.tagName)?node:getScrollParent(node.offsetParent);function positionElement({actionElement,changedElement,intoView}){const parentElement=intoView.offsetParent,contentScrolled=!!intoView.classList.contains("element_scrolled"),positionTop=contentScrolled?actionElement.offsetTop-intoView.scrollTop+parentElement.offsetTop:actionElement.offsetTop-window.scrollY,positionLeft=contentScrolled?actionElement.offsetLeft+parentElement.offsetLeft:actionElement.offsetLeft,changedpositionTop=(null==changedElement?void 0:changedElement.offsetHeight)>window.innerHeight-positionTop?positionTop-(null==changedElement?void 0:changedElement.offsetHeight)-16:positionTop+(null==actionElement?void 0:actionElement.offsetHeight)+16,changedpositionLeft=(null==changedElement?void 0:changedElement.offsetWidth)>window.innerWidth-positionLeft?positionLeft+(null==actionElement?void 0:actionElement.offsetWidth)-(null==changedElement?void 0:changedElement.offsetWidth):positionLeft,limitedHeightScreen=window.innerHeight-(null==changedElement?void 0:changedElement.offsetHeight),limitedWidthScreen=window.innerWidth-(null==changedElement?void 0:changedElement.offsetWidth);return{top:changedpositionTop<8?8:changedpositionTop>limitedHeightScreen?limitedHeightScreen-8:changedpositionTop,left:changedpositionLeft<0?0:changedpositionLeft>limitedWidthScreen?limitedWidthScreen:changedpositionLeft}}function positionAbsoluteElement({actionElement,changedElement,intoView}){const body=intoView||document.body,numberHeignt=body.offsetHeight<changedElement.offsetHeight?window.screen.height:body.offsetHeight,numberWidth=body.offsetWidth<changedElement.offsetWidth?window.screen.width:body.offsetWidth,heightTop=numberHeignt-actionElement.offsetTop,widthLeft=numberWidth-actionElement.offsetLeft;return{y:heightTop<changedElement.offsetHeight+actionElement.offsetHeight?"top":"bottom",x:widthLeft<changedElement.offsetWidth?"right":"left"}}}}]);