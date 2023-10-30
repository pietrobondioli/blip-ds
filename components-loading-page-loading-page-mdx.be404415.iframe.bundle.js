"use strict";(self.webpackChunkblip_ds=self.webpackChunkblip_ds||[]).push([[7675],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./blip-ds-react/dist/components.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Fv:()=>BdsAccordion,JS:()=>BdsAccordionBody,w3:()=>BdsAccordionGroup,wY:()=>BdsAccordionHeader,DO:()=>BdsAlert,LP:()=>BdsAlertActions,B5:()=>BdsAlertBody,vf:()=>BdsAlertHeader,n5:()=>BdsAutocomplete,av:()=>BdsAvatar,kD:()=>BdsAvatarGroup,N6:()=>BdsBadge,WL:()=>BdsBanner,_j:()=>BdsBannerLink,Dw:()=>BdsButton,OJ:()=>BdsButtonIcon,yG:()=>BdsCard,XM:()=>BdsCardBody,z9:()=>BdsCardFooter,My:()=>BdsCardHeader,sR:()=>BdsCardTitle,LF:()=>BdsCheckbox,r0:()=>BdsChipClickable,ET:()=>BdsChipSelected,a3:()=>BdsChipTag,Ps:()=>BdsDataTable,wJ:()=>BdsDatepicker,Sm:()=>BdsGrid,ho:()=>BdsIcon,TO:()=>BdsIllustration,x6:()=>BdsInput,Jp:()=>BdsInputChips,ND:()=>BdsInputEditable,Sr:()=>BdsInputPassword,uT:()=>BdsInputPhoneNumber,Bi:()=>BdsList,m5:()=>BdsListItem,WJ:()=>BdsLoadingBar,J3:()=>BdsLoadingPage,M4:()=>BdsLoadingSpinner,U2:()=>BdsModal,PU:()=>BdsModalAction,F_:()=>BdsNavbar,az:()=>BdsNavbarContent,Sg:()=>BdsPagination,gl:()=>BdsPaper,sZ:()=>BdsProgressBar,oG:()=>BdsRadio,Gd:()=>BdsRadioGroup,b3:()=>BdsSelect,z:()=>BdsSelectChips,Np:()=>BdsSelectOption,ZK:()=>BdsSidebar,JL:()=>BdsSkeleton,mb:()=>BdsStep,fm:()=>BdsStepper,zO:()=>BdsSwitch,Ld:()=>BdsTabGroup,wA:()=>BdsTabItem,Lw:()=>BdsTable,Jn:()=>BdsTableBody,EQ:()=>BdsTableCell,GT:()=>BdsTableHeader,II:()=>BdsTableRow,Xc:()=>BdsTableTh,nb:()=>BdsThemeProvider,r2:()=>BdsToast,zy:()=>BdsTooltip,Rl:()=>BdsTypo,S0:()=>BdsUpload});var react=__webpack_require__("./node_modules/react/index.js");const camelToDashCase=str=>str.replace(/([A-Z])/g,(m=>`-${m[0].toLowerCase()}`)),getClassName=(classList,newProps,oldProps)=>{const newClassProp=newProps.className||newProps.class,oldClassProp=oldProps.className||oldProps.class,currentClasses=arrayToMap(classList),incomingPropClasses=arrayToMap(newClassProp?newClassProp.split(" "):[]),oldPropClasses=arrayToMap(oldClassProp?oldClassProp.split(" "):[]),finalClassNames=[];return currentClasses.forEach((currentClass=>{incomingPropClasses.has(currentClass)?(finalClassNames.push(currentClass),incomingPropClasses.delete(currentClass)):oldPropClasses.has(currentClass)||finalClassNames.push(currentClass)})),incomingPropClasses.forEach((s=>finalClassNames.push(s))),finalClassNames.join(" ")},isCoveredByReact=eventNameSuffix=>{if("undefined"==typeof document)return!0;{const eventName="on"+(eventNameSuffix=>"doubleclick"===eventNameSuffix?"dblclick":eventNameSuffix)(eventNameSuffix);let isSupported=eventName in document;if(!isSupported){const element=document.createElement("div");element.setAttribute(eventName,"return;"),isSupported="function"==typeof element[eventName]}return isSupported}},syncEvent=(node,eventName,newEventHandler)=>{const eventStore=node.__events||(node.__events={}),oldEventHandler=eventStore[eventName];oldEventHandler&&node.removeEventListener(eventName,oldEventHandler),node.addEventListener(eventName,eventStore[eventName]=function handler(e){newEventHandler&&newEventHandler.call(this,e)})},arrayToMap=arr=>{const map=new Map;return arr.forEach((s=>map.set(s,s))),map},mergeRefs=(...refs)=>value=>{refs.forEach((ref=>{((ref,value)=>{"function"==typeof ref?ref(value):null!=ref&&(ref.current=value)})(ref,value)}))};var __rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};const createComponent_createReactComponent=(tagName,ReactComponentContext,manipulatePropsFunction,defineCustomElement)=>{void 0!==defineCustomElement&&defineCustomElement();const displayName=tagName.toLowerCase().split("-").map((segment=>segment.charAt(0).toUpperCase()+segment.slice(1))).join("");const ReactComponent=class extends react.Component{constructor(props){super(props),this.setComponentElRef=element=>{this.componentEl=element}}componentDidMount(){this.componentDidUpdate(this.props)}componentDidUpdate(prevProps){((node,newProps,oldProps={})=>{if(node instanceof Element){const className=getClassName(node.classList,newProps,oldProps);""!==className&&(node.className=className),Object.keys(newProps).forEach((name=>{if("children"!==name&&"style"!==name&&"ref"!==name&&"class"!==name&&"className"!==name&&"forwardedRef"!==name)if(0===name.indexOf("on")&&name[2]===name[2].toUpperCase()){const eventName=name.substring(2),eventNameLc=eventName[0].toLowerCase()+eventName.substring(1);isCoveredByReact(eventNameLc)||syncEvent(node,eventNameLc,newProps[name])}else node[name]=newProps[name],"string"==typeof newProps[name]&&node.setAttribute(camelToDashCase(name),newProps[name])}))}})(this.componentEl,this.props,prevProps)}render(){const _a=this.props,{children,forwardedRef,style,className,ref}=_a,cProps=__rest(_a,["children","forwardedRef","style","className","ref"]);let propsToPass=Object.keys(cProps).reduce(((acc,name)=>{const value=cProps[name];if(0===name.indexOf("on")&&name[2]===name[2].toUpperCase()){const eventName=name.substring(2).toLowerCase();"undefined"!=typeof document&&isCoveredByReact(eventName)&&(acc[name]=value)}else{const type=typeof value;"string"!==type&&"boolean"!==type&&"number"!==type||(acc[camelToDashCase(name)]=value)}return acc}),{});manipulatePropsFunction&&(propsToPass=manipulatePropsFunction(this.props,propsToPass));const newProps=Object.assign(Object.assign({},propsToPass),{ref:mergeRefs(forwardedRef,this.setComponentElRef),style});return(0,react.createElement)(tagName,newProps,children)}static get displayName(){return displayName}};return ReactComponentContext&&(ReactComponent.contextType=ReactComponentContext),((ReactComponent,displayName)=>{const forwardRef=(props,ref)=>react.createElement(ReactComponent,Object.assign({},props,{forwardedRef:ref}));return forwardRef.displayName=displayName,react.forwardRef(forwardRef)})(ReactComponent,displayName)},BdsAccordion=createComponent_createReactComponent("bds-accordion"),BdsAccordionBody=createComponent_createReactComponent("bds-accordion-body"),BdsAccordionGroup=createComponent_createReactComponent("bds-accordion-group"),BdsAccordionHeader=createComponent_createReactComponent("bds-accordion-header"),BdsAlert=createComponent_createReactComponent("bds-alert"),BdsAlertActions=createComponent_createReactComponent("bds-alert-actions"),BdsAlertBody=createComponent_createReactComponent("bds-alert-body"),BdsAlertHeader=createComponent_createReactComponent("bds-alert-header"),BdsAutocomplete=createComponent_createReactComponent("bds-autocomplete"),BdsAvatar=createComponent_createReactComponent("bds-avatar"),BdsAvatarGroup=createComponent_createReactComponent("bds-avatar-group"),BdsBadge=createComponent_createReactComponent("bds-badge"),BdsBanner=createComponent_createReactComponent("bds-banner"),BdsBannerLink=createComponent_createReactComponent("bds-banner-link"),BdsButton=createComponent_createReactComponent("bds-button"),BdsButtonIcon=createComponent_createReactComponent("bds-button-icon"),BdsCard=createComponent_createReactComponent("bds-card"),BdsCardBody=createComponent_createReactComponent("bds-card-body"),BdsCardFooter=createComponent_createReactComponent("bds-card-footer"),BdsCardHeader=createComponent_createReactComponent("bds-card-header"),BdsCardTitle=createComponent_createReactComponent("bds-card-title"),BdsCheckbox=createComponent_createReactComponent("bds-checkbox"),BdsChipClickable=createComponent_createReactComponent("bds-chip-clickable"),BdsChipSelected=createComponent_createReactComponent("bds-chip-selected"),BdsChipTag=createComponent_createReactComponent("bds-chip-tag"),BdsDataTable=createComponent_createReactComponent("bds-data-table"),BdsDatepicker=createComponent_createReactComponent("bds-datepicker"),BdsGrid=createComponent_createReactComponent("bds-grid"),BdsIcon=createComponent_createReactComponent("bds-icon"),BdsIllustration=createComponent_createReactComponent("bds-illustration"),BdsInput=createComponent_createReactComponent("bds-input"),BdsInputChips=createComponent_createReactComponent("bds-input-chips"),BdsInputEditable=createComponent_createReactComponent("bds-input-editable"),BdsInputPassword=createComponent_createReactComponent("bds-input-password"),BdsInputPhoneNumber=createComponent_createReactComponent("bds-input-phone-number"),BdsList=createComponent_createReactComponent("bds-list"),BdsListItem=createComponent_createReactComponent("bds-list-item"),BdsLoadingBar=createComponent_createReactComponent("bds-loading-bar"),BdsLoadingPage=createComponent_createReactComponent("bds-loading-page"),BdsLoadingSpinner=createComponent_createReactComponent("bds-loading-spinner"),BdsModal=createComponent_createReactComponent("bds-modal"),BdsModalAction=createComponent_createReactComponent("bds-modal-action"),BdsNavbar=createComponent_createReactComponent("bds-navbar"),BdsNavbarContent=createComponent_createReactComponent("bds-navbar-content"),BdsPagination=createComponent_createReactComponent("bds-pagination"),BdsPaper=createComponent_createReactComponent("bds-paper"),BdsProgressBar=createComponent_createReactComponent("bds-progress-bar"),BdsRadio=createComponent_createReactComponent("bds-radio"),BdsRadioGroup=createComponent_createReactComponent("bds-radio-group"),BdsSelect=createComponent_createReactComponent("bds-select"),BdsSelectChips=createComponent_createReactComponent("bds-select-chips"),BdsSelectOption=createComponent_createReactComponent("bds-select-option"),BdsSidebar=createComponent_createReactComponent("bds-sidebar"),BdsSkeleton=createComponent_createReactComponent("bds-skeleton"),BdsStep=createComponent_createReactComponent("bds-step"),BdsStepper=createComponent_createReactComponent("bds-stepper"),BdsSwitch=createComponent_createReactComponent("bds-switch"),BdsTabGroup=createComponent_createReactComponent("bds-tab-group"),BdsTabItem=createComponent_createReactComponent("bds-tab-item"),BdsTable=createComponent_createReactComponent("bds-table"),BdsTableBody=createComponent_createReactComponent("bds-table-body"),BdsTableCell=createComponent_createReactComponent("bds-table-cell"),BdsTableHeader=createComponent_createReactComponent("bds-table-header"),BdsTableRow=createComponent_createReactComponent("bds-table-row"),BdsTableTh=createComponent_createReactComponent("bds-table-th"),BdsThemeProvider=createComponent_createReactComponent("bds-theme-provider"),BdsToast=createComponent_createReactComponent("bds-toast"),BdsTooltip=createComponent_createReactComponent("bds-tooltip"),BdsTypo=createComponent_createReactComponent("bds-typo"),BdsUpload=createComponent_createReactComponent("bds-upload")},"./src/components/loading-page/loading-page.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{FrameworkReact:()=>FrameworkReact,Properties:()=>Properties,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _loading_page_mdx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/loading-page/loading-page.mdx"),_blip_ds_react_dist_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./blip-ds-react/dist/components.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Loading page",parameters:{docs:{page:_loading_page_mdx__WEBPACK_IMPORTED_MODULE_1__.default}}},loadingPage={width:"100%",height:"100%"},Properties=args=>{const el=document.getElementsByClassName("sb-story");return 0!==el.length&&(el[0].style.width="700px",el[0].style.height="500px"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("bds-loading-page",{style:loadingPage})};Properties.displayName="Properties";const FrameworkReact=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_blip_ds_react_dist_components__WEBPACK_IMPORTED_MODULE_3__.J3,{});FrameworkReact.displayName="FrameworkReact",Properties.parameters={...Properties.parameters,docs:{...Properties.parameters?.docs,source:{originalSource:"args => {\n  const el = document.getElementsByClassName('sb-story');\n  if (el.length !== 0) {\n    el[0].style.width = '700px';\n    el[0].style.height = '500px';\n  }\n  return <bds-loading-page style={loadingPage}></bds-loading-page>;\n}",...Properties.parameters?.docs?.source}}},FrameworkReact.parameters={...FrameworkReact.parameters,docs:{...FrameworkReact.parameters?.docs,source:{originalSource:"() => <BdsLoadingPage></BdsLoadingPage>",...FrameworkReact.parameters?.docs?.source}}};const __namedExportsOrder=["Properties","FrameworkReact"]},"./src/components/loading-page/loading-page.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_blip_ds_blip_ds_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_loading_page_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/loading-page/loading-page.stories.jsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",h2:"h2",p:"p"},(0,_home_runner_work_blip_ds_blip_ds_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"loadingpage",children:"loadingPage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"loadingPage allows users to select a date or a range of dates."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_loading_page_stories__WEBPACK_IMPORTED_MODULE_2__.Properties}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{isTemplate:!0}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"build-on-react",children:"Build on React"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hw,{of:_loading_page_stories__WEBPACK_IMPORTED_MODULE_2__.FrameworkReact})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_blip_ds_blip_ds_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);