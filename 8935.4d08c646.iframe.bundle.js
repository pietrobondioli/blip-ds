"use strict";(self.webpackChunkblip_ds=self.webpackChunkblip_ds||[]).push([[8935],{"./dist/esm/bds-checkbox_2.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{bds_checkbox:()=>Checkbox,bds_select_option:()=>SelectOption});var _index_27f906e2_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-27f906e2.js");let checkBoxIds=0;const Checkbox=class{constructor(hostRef){(0,_index_27f906e2_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.bdsChange=(0,_index_27f906e2_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"bdsChange",7),this.bdsInput=(0,_index_27f906e2_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"bdsInput",7),this.onClick=()=>{this.checked=!this.checked,this.bdsChange.emit({checked:this.checked})},this.refNativeInput=input=>{this.nativeInput=input},this.getStyleState=()=>this.checked&&!this.disabled?"checkbox--selected":this.checked||this.disabled?this.checked&&this.disabled?"checkbox--selected-disabled":!this.checked&&this.disabled?"checkbox--deselected-disabled":"":"checkbox--deselected",this.checkBoxId=void 0,this.refer=void 0,this.label=void 0,this.name=void 0,this.checked=!1,this.disabled=!1,this.dataTest=null}connectedCallback(){this.checkBoxId=this.refer||"bds-checkbox-"+checkBoxIds++}getInputElement(){return Promise.resolve(this.nativeInput)}getValue(){return Promise.resolve(this.nativeInput.checked)}async toggle(){this.checked=!this.checked,this.bdsChange.emit({checked:this.checked})}render(){const styleState=this.getStyleState();return(0,_index_27f906e2_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:{checkbox:!0,[styleState]:!0}},(0,_index_27f906e2_js__WEBPACK_IMPORTED_MODULE_0__.h)("input",{type:"checkbox",ref:this.refNativeInput,id:this.checkBoxId,name:this.name,onClick:this.onClick,checked:this.checked,disabled:this.disabled,"data-test":this.dataTest}),(0,_index_27f906e2_js__WEBPACK_IMPORTED_MODULE_0__.h)("label",{class:"checkbox__label",htmlFor:this.checkBoxId},(0,_index_27f906e2_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"checkbox__icon"},(0,_index_27f906e2_js__WEBPACK_IMPORTED_MODULE_0__.h)("bds-icon",{class:"checkbox__icon__svg",size:"x-small",name:"true",color:"inherit"})),this.label&&(0,_index_27f906e2_js__WEBPACK_IMPORTED_MODULE_0__.h)("bds-typo",{class:"checkbox__text",variant:"fs-14",tag:"span"},this.label)))}};Checkbox.style=".checkbox{display:inline}.checkbox input[type=checkbox]{display:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-tap-highlight-color:transparent;cursor:pointer;margin:0}.checkbox input[type=checkbox]:focus{outline:0}.checkbox__icon{background:var(--color-surface-1, #F6F6F6)}.checkbox__icon:hover{border-color:var(--color-brand, #0096fa)}.checkbox--selected .checkbox__icon{background-color:var(--color-brand, #0096fa);border-color:var(--color-brand, #0096fa)}.checkbox--selected .checkbox__icon__svg{color:var(--color-content-bright, #ffffff)}.checkbox--selected .checkbox__icon:hover{background-color:var(--color-brand, #0096fa)}.checkbox--selected-disabled .checkbox__label{cursor:not-allowed}.checkbox--selected-disabled .checkbox__icon{color:var(--color-content-default, #454545);border-color:var(--color-content-default, #454545);background-color:var(--color-surface-3, #CFCFCF);opacity:50%}.checkbox--selected-disabled .checkbox__text{opacity:50%}.checkbox--deselected .checkbox__icon__svg{display:none}.checkbox--deselected-disabled .checkbox__label{cursor:not-allowed}.checkbox--deselected-disabled .checkbox__icon{opacity:50%;background-color:var(--color-surface-1, #F6F6F6);border:1px solid var(--color-brand, #0096fa)}.checkbox--deselected-disabled .checkbox__icon__svg{display:none}.checkbox__label{-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;-ms-user-select:none;user-select:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;cursor:pointer;max-width:-webkit-fit-content;max-width:-moz-fit-content;max-width:fit-content}.checkbox__icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:18px;width:18px;border-radius:4px;color:var(--color-surface-1, #F6F6F6);border:1px solid var(--color-content-default, #454545);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:4px;-webkit-transition:all 0.3s;transition:all 0.3s;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:0.3s;transition-duration:0.3s;-webkit-transition-timing-function:ease;transition-timing-function:ease;-webkit-transition-delay:0s;transition-delay:0s}.checkbox__text{margin-left:8px;color:var(--color-content-default, #454545)}";const SelectOption=class{constructor(hostRef){(0,_index_27f906e2_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.optionSelected=(0,_index_27f906e2_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"optionSelected",7),this.optionChecked=(0,_index_27f906e2_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"optionChecked",7),this.refNativeInput=input=>{this.nativeInput=input},this.checkedCurrent=()=>{"checkbox"===this.typeOption&&this.nativeInput.toggle()},this.onClickSelectOption=()=>{"checkbox"!=this.typeOption&&(this.disabled||this.optionSelected.emit({value:this.value}))},this.optionHandle=ev=>{const elementChecked=ev.target,data={value:elementChecked.name,label:this.element.innerHTML,checked:elementChecked.checked};this.checked=!this.checked,this.optionChecked.emit(data)},this.attachOptionKeyboardListeners=event=>{const element=event.target;switch(event.key){case"Enter":this.onClickSelectOption();break;case"ArrowDown":element.parentElement.nextElementSibling&&!element.parentElement.nextElementSibling.hasAttribute("invisible")&&(event.preventDefault(),event.stopPropagation(),element.parentElement.nextElementSibling.firstElementChild.focus());break;case"ArrowUp":element.parentElement.previousElementSibling&&!element.parentElement.previousElementSibling.hasAttribute("invisible")&&(event.preventDefault(),event.stopPropagation(),element.parentElement.previousElementSibling.firstElementChild.focus())}},this.value=void 0,this.selected=!1,this.disabled=!1,this.invisible=!1,this.danger=!1,this.bulkOption="",this.slotAlign="center",this.titleText=void 0,this.status=void 0,this.typeOption="default",this.checked=!1,this.dataTest=null}changeSelectionType(){this.typeOption=this.typeOption}async toggle(){this.checked=!this.checked}async toMark(){this.checked=!0}async markOff(){this.checked=!1}render(){return(0,_index_27f906e2_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{id:`bds-select-option-${this.value}`,tabindex:"0",onKeyDown:this.attachOptionKeyboardListeners,onClick:this.onClickSelectOption,"data-value":this.value,"data-test":this.dataTest,class:{"select-option":"checkbox"!=this.typeOption,"select-option--selected":this.selected,"select-option--disabled":this.disabled,"select-option--invisible":this.invisible}},(0,_index_27f906e2_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{style:{alignSelf:this.slotAlign}},(0,_index_27f906e2_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"input-left"})),(0,_index_27f906e2_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:{"select-option__container":!0,"select-option__container__fill_space":!!this.status,"select-option__container__checkbox":"checkbox"==this.typeOption},onClick:()=>this.checkedCurrent()},this.titleText&&(0,_index_27f906e2_js__WEBPACK_IMPORTED_MODULE_0__.h)("bds-typo",{class:"select-option__container--value",variant:"fs-16",bold:"semi-bold"},this.titleText),"checkbox"===this.typeOption?(0,_index_27f906e2_js__WEBPACK_IMPORTED_MODULE_0__.h)("bds-checkbox",{ref:this.refNativeInput,refer:`html-for-${this.value}`,label:this.element.innerHTML,name:this.value,checked:this.checked,onBdsChange:ev=>this.optionHandle(ev)}):(0,_index_27f906e2_js__WEBPACK_IMPORTED_MODULE_0__.h)("bds-typo",{class:{"select-option__container--value":!0,"select-option__container__overflow":!!this.status},noWrap:!!this.status,variant:"fs-14"},(0,_index_27f906e2_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null))),this.bulkOption&&(0,_index_27f906e2_js__WEBPACK_IMPORTED_MODULE_0__.h)("bds-typo",{class:"select-option__container--bulk",variant:"fs-10"},this.bulkOption),this.status&&(0,_index_27f906e2_js__WEBPACK_IMPORTED_MODULE_0__.h)("bds-typo",{class:"select-option__container--status",noWrap:!0,variant:"fs-10"},this.status))}get element(){return(0,_index_27f906e2_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{typeOption:["changeSelectionType"]}}};SelectOption.style=":host(.option-checked){-ms-flex-order:-1;order:-1}.load-spinner{background-color:var(--color-surface-1, #F6F6F6);height:200px}.select-option{display:grid;width:100%;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;background-color:var(--color-surface-1, #F6F6F6);padding:8px;padding-left:12px;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;outline:none;-ms-flex-order:1;order:1}.select-option--selected .select-option__container--value{color:var(--color-primary, #1e6bf1)}.select-option--disabled .select-option__container--value,.select-option--disabled .select-option__container--bulk{cursor:not-allowed;color:var(--color-content-disable, #636363)}.select-option--disabled .select-option__container--value:hover,.select-option--disabled .select-option__container--bulk:hover{background-color:var(--color-surface-1, #F6F6F6)}.select-option ::slotted(bds-icon){margin-right:10px}.select-option__container{color:var(--color-content-default, #454545);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.select-option__container__checkbox{cursor:pointer;background-color:var(--color-surface-1, #F6F6F6);padding:8px;padding-left:12px;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;gap:8px;-ms-flex-align:center;align-items:center;outline:none;-ms-flex-direction:row;flex-direction:row}.select-option__container__fill_space{width:100%}.select-option__container--bulk,.select-option__container--status{color:var(--color-content-ghost, #8C8C8C)}.select-option__container--status{margin-left:4px}.select-option__container__overflow{overflow:hidden;padding-right:16px}.select-option__container:hover>.select-option__container--value,.select-option__container:hover>.select-option__container--bulk,.select-option__container:hover>.select-option__container--status{color:var(--color-primary, #1e6bf1)}.select-option__container:active>.select-option__container--value,.select-option__container:active>.select-option__container--bulk,.select-option__container:active>.select-option__container--status{color:var(--color-primary, #1e6bf1)}.select-option:hover{background-color:var(--color-surface-2, #E0E0E0)}.select-option:focus{background-color:var(--color-surface-2, #E0E0E0);color:#3f7de8}.select-option--selected{background-color:var(--color-surface-2, #E0E0E0)}.select-option--invisible{display:none}"}}]);