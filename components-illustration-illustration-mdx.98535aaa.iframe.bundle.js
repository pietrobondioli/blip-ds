"use strict";(self.webpackChunkblip_ds=self.webpackChunkblip_ds||[]).push([[1726],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./blip-ds-react/dist/components.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Fv:()=>BdsAccordion,JS:()=>BdsAccordionBody,w3:()=>BdsAccordionGroup,wY:()=>BdsAccordionHeader,DO:()=>BdsAlert,LP:()=>BdsAlertActions,B5:()=>BdsAlertBody,vf:()=>BdsAlertHeader,n5:()=>BdsAutocomplete,av:()=>BdsAvatar,kD:()=>BdsAvatarGroup,N6:()=>BdsBadge,WL:()=>BdsBanner,_j:()=>BdsBannerLink,Dw:()=>BdsButton,OJ:()=>BdsButtonIcon,yG:()=>BdsCard,XM:()=>BdsCardBody,z9:()=>BdsCardFooter,My:()=>BdsCardHeader,sR:()=>BdsCardTitle,LF:()=>BdsCheckbox,r0:()=>BdsChipClickable,ET:()=>BdsChipSelected,a3:()=>BdsChipTag,Ps:()=>BdsDataTable,wJ:()=>BdsDatepicker,Sm:()=>BdsGrid,ho:()=>BdsIcon,TO:()=>BdsIllustration,x6:()=>BdsInput,Jp:()=>BdsInputChips,ND:()=>BdsInputEditable,Sr:()=>BdsInputPassword,uT:()=>BdsInputPhoneNumber,Bi:()=>BdsList,m5:()=>BdsListItem,WJ:()=>BdsLoadingBar,J3:()=>BdsLoadingPage,M4:()=>BdsLoadingSpinner,U2:()=>BdsModal,PU:()=>BdsModalAction,F_:()=>BdsNavbar,az:()=>BdsNavbarContent,Sg:()=>BdsPagination,gl:()=>BdsPaper,sZ:()=>BdsProgressBar,oG:()=>BdsRadio,Gd:()=>BdsRadioGroup,b3:()=>BdsSelect,z:()=>BdsSelectChips,Np:()=>BdsSelectOption,ZK:()=>BdsSidebar,JL:()=>BdsSkeleton,mb:()=>BdsStep,fm:()=>BdsStepper,zO:()=>BdsSwitch,Ld:()=>BdsTabGroup,wA:()=>BdsTabItem,Lw:()=>BdsTable,Jn:()=>BdsTableBody,EQ:()=>BdsTableCell,GT:()=>BdsTableHeader,II:()=>BdsTableRow,Xc:()=>BdsTableTh,nb:()=>BdsThemeProvider,r2:()=>BdsToast,zy:()=>BdsTooltip,Rl:()=>BdsTypo,S0:()=>BdsUpload});var react=__webpack_require__("./node_modules/react/index.js");const camelToDashCase=str=>str.replace(/([A-Z])/g,(m=>`-${m[0].toLowerCase()}`)),getClassName=(classList,newProps,oldProps)=>{const newClassProp=newProps.className||newProps.class,oldClassProp=oldProps.className||oldProps.class,currentClasses=arrayToMap(classList),incomingPropClasses=arrayToMap(newClassProp?newClassProp.split(" "):[]),oldPropClasses=arrayToMap(oldClassProp?oldClassProp.split(" "):[]),finalClassNames=[];return currentClasses.forEach((currentClass=>{incomingPropClasses.has(currentClass)?(finalClassNames.push(currentClass),incomingPropClasses.delete(currentClass)):oldPropClasses.has(currentClass)||finalClassNames.push(currentClass)})),incomingPropClasses.forEach((s=>finalClassNames.push(s))),finalClassNames.join(" ")},isCoveredByReact=eventNameSuffix=>{if("undefined"==typeof document)return!0;{const eventName="on"+(eventNameSuffix=>"doubleclick"===eventNameSuffix?"dblclick":eventNameSuffix)(eventNameSuffix);let isSupported=eventName in document;if(!isSupported){const element=document.createElement("div");element.setAttribute(eventName,"return;"),isSupported="function"==typeof element[eventName]}return isSupported}},syncEvent=(node,eventName,newEventHandler)=>{const eventStore=node.__events||(node.__events={}),oldEventHandler=eventStore[eventName];oldEventHandler&&node.removeEventListener(eventName,oldEventHandler),node.addEventListener(eventName,eventStore[eventName]=function handler(e){newEventHandler&&newEventHandler.call(this,e)})},arrayToMap=arr=>{const map=new Map;return arr.forEach((s=>map.set(s,s))),map},mergeRefs=(...refs)=>value=>{refs.forEach((ref=>{((ref,value)=>{"function"==typeof ref?ref(value):null!=ref&&(ref.current=value)})(ref,value)}))};var __rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};const createComponent_createReactComponent=(tagName,ReactComponentContext,manipulatePropsFunction,defineCustomElement)=>{void 0!==defineCustomElement&&defineCustomElement();const displayName=tagName.toLowerCase().split("-").map((segment=>segment.charAt(0).toUpperCase()+segment.slice(1))).join("");const ReactComponent=class extends react.Component{constructor(props){super(props),this.setComponentElRef=element=>{this.componentEl=element}}componentDidMount(){this.componentDidUpdate(this.props)}componentDidUpdate(prevProps){((node,newProps,oldProps={})=>{if(node instanceof Element){const className=getClassName(node.classList,newProps,oldProps);""!==className&&(node.className=className),Object.keys(newProps).forEach((name=>{if("children"!==name&&"style"!==name&&"ref"!==name&&"class"!==name&&"className"!==name&&"forwardedRef"!==name)if(0===name.indexOf("on")&&name[2]===name[2].toUpperCase()){const eventName=name.substring(2),eventNameLc=eventName[0].toLowerCase()+eventName.substring(1);isCoveredByReact(eventNameLc)||syncEvent(node,eventNameLc,newProps[name])}else node[name]=newProps[name],"string"==typeof newProps[name]&&node.setAttribute(camelToDashCase(name),newProps[name])}))}})(this.componentEl,this.props,prevProps)}render(){const _a=this.props,{children,forwardedRef,style,className,ref}=_a,cProps=__rest(_a,["children","forwardedRef","style","className","ref"]);let propsToPass=Object.keys(cProps).reduce(((acc,name)=>{const value=cProps[name];if(0===name.indexOf("on")&&name[2]===name[2].toUpperCase()){const eventName=name.substring(2).toLowerCase();"undefined"!=typeof document&&isCoveredByReact(eventName)&&(acc[name]=value)}else{const type=typeof value;"string"!==type&&"boolean"!==type&&"number"!==type||(acc[camelToDashCase(name)]=value)}return acc}),{});manipulatePropsFunction&&(propsToPass=manipulatePropsFunction(this.props,propsToPass));const newProps=Object.assign(Object.assign({},propsToPass),{ref:mergeRefs(forwardedRef,this.setComponentElRef),style});return(0,react.createElement)(tagName,newProps,children)}static get displayName(){return displayName}};return ReactComponentContext&&(ReactComponent.contextType=ReactComponentContext),((ReactComponent,displayName)=>{const forwardRef=(props,ref)=>react.createElement(ReactComponent,Object.assign({},props,{forwardedRef:ref}));return forwardRef.displayName=displayName,react.forwardRef(forwardRef)})(ReactComponent,displayName)},BdsAccordion=createComponent_createReactComponent("bds-accordion"),BdsAccordionBody=createComponent_createReactComponent("bds-accordion-body"),BdsAccordionGroup=createComponent_createReactComponent("bds-accordion-group"),BdsAccordionHeader=createComponent_createReactComponent("bds-accordion-header"),BdsAlert=createComponent_createReactComponent("bds-alert"),BdsAlertActions=createComponent_createReactComponent("bds-alert-actions"),BdsAlertBody=createComponent_createReactComponent("bds-alert-body"),BdsAlertHeader=createComponent_createReactComponent("bds-alert-header"),BdsAutocomplete=createComponent_createReactComponent("bds-autocomplete"),BdsAvatar=createComponent_createReactComponent("bds-avatar"),BdsAvatarGroup=createComponent_createReactComponent("bds-avatar-group"),BdsBadge=createComponent_createReactComponent("bds-badge"),BdsBanner=createComponent_createReactComponent("bds-banner"),BdsBannerLink=createComponent_createReactComponent("bds-banner-link"),BdsButton=createComponent_createReactComponent("bds-button"),BdsButtonIcon=createComponent_createReactComponent("bds-button-icon"),BdsCard=createComponent_createReactComponent("bds-card"),BdsCardBody=createComponent_createReactComponent("bds-card-body"),BdsCardFooter=createComponent_createReactComponent("bds-card-footer"),BdsCardHeader=createComponent_createReactComponent("bds-card-header"),BdsCardTitle=createComponent_createReactComponent("bds-card-title"),BdsCheckbox=createComponent_createReactComponent("bds-checkbox"),BdsChipClickable=createComponent_createReactComponent("bds-chip-clickable"),BdsChipSelected=createComponent_createReactComponent("bds-chip-selected"),BdsChipTag=createComponent_createReactComponent("bds-chip-tag"),BdsDataTable=createComponent_createReactComponent("bds-data-table"),BdsDatepicker=createComponent_createReactComponent("bds-datepicker"),BdsGrid=createComponent_createReactComponent("bds-grid"),BdsIcon=createComponent_createReactComponent("bds-icon"),BdsIllustration=createComponent_createReactComponent("bds-illustration"),BdsInput=createComponent_createReactComponent("bds-input"),BdsInputChips=createComponent_createReactComponent("bds-input-chips"),BdsInputEditable=createComponent_createReactComponent("bds-input-editable"),BdsInputPassword=createComponent_createReactComponent("bds-input-password"),BdsInputPhoneNumber=createComponent_createReactComponent("bds-input-phone-number"),BdsList=createComponent_createReactComponent("bds-list"),BdsListItem=createComponent_createReactComponent("bds-list-item"),BdsLoadingBar=createComponent_createReactComponent("bds-loading-bar"),BdsLoadingPage=createComponent_createReactComponent("bds-loading-page"),BdsLoadingSpinner=createComponent_createReactComponent("bds-loading-spinner"),BdsModal=createComponent_createReactComponent("bds-modal"),BdsModalAction=createComponent_createReactComponent("bds-modal-action"),BdsNavbar=createComponent_createReactComponent("bds-navbar"),BdsNavbarContent=createComponent_createReactComponent("bds-navbar-content"),BdsPagination=createComponent_createReactComponent("bds-pagination"),BdsPaper=createComponent_createReactComponent("bds-paper"),BdsProgressBar=createComponent_createReactComponent("bds-progress-bar"),BdsRadio=createComponent_createReactComponent("bds-radio"),BdsRadioGroup=createComponent_createReactComponent("bds-radio-group"),BdsSelect=createComponent_createReactComponent("bds-select"),BdsSelectChips=createComponent_createReactComponent("bds-select-chips"),BdsSelectOption=createComponent_createReactComponent("bds-select-option"),BdsSidebar=createComponent_createReactComponent("bds-sidebar"),BdsSkeleton=createComponent_createReactComponent("bds-skeleton"),BdsStep=createComponent_createReactComponent("bds-step"),BdsStepper=createComponent_createReactComponent("bds-stepper"),BdsSwitch=createComponent_createReactComponent("bds-switch"),BdsTabGroup=createComponent_createReactComponent("bds-tab-group"),BdsTabItem=createComponent_createReactComponent("bds-tab-item"),BdsTable=createComponent_createReactComponent("bds-table"),BdsTableBody=createComponent_createReactComponent("bds-table-body"),BdsTableCell=createComponent_createReactComponent("bds-table-cell"),BdsTableHeader=createComponent_createReactComponent("bds-table-header"),BdsTableRow=createComponent_createReactComponent("bds-table-row"),BdsTableTh=createComponent_createReactComponent("bds-table-th"),BdsThemeProvider=createComponent_createReactComponent("bds-theme-provider"),BdsToast=createComponent_createReactComponent("bds-toast"),BdsTooltip=createComponent_createReactComponent("bds-tooltip"),BdsTypo=createComponent_createReactComponent("bds-typo"),BdsUpload=createComponent_createReactComponent("bds-upload")},"./src/components/illustration/illustration.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{FrameworkReact:()=>FrameworkReact,IllustrationsBlipOutline:()=>IllustrationsBlipOutline,IllustrationsBlipSolid:()=>IllustrationsBlipSolid,IllustrationsBrand:()=>IllustrationsBrand,IllustrationsDefault:()=>IllustrationsDefault,IllustrationsLogoIntegration:()=>IllustrationsLogoIntegration,IllustrationsScreens:()=>IllustrationsScreens,IllustrationsSegmented:()=>IllustrationsSegmented,IllustrationsSmartphone:()=>IllustrationsSmartphone,IllustrationsSpots:()=>IllustrationsSpots,Properties:()=>Properties,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _blip_ds_react_dist_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./blip-ds-react/dist/components.js"),_illustration_mdx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/illustration/illustration.mdx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/illustration",parameters:{docs:{page:_illustration_mdx__WEBPACK_IMPORTED_MODULE_1__.default}}},defaults=["accessibility-1","accessibility-2","accessibility-3","accessibility-4","accessibility-5","accessibility-6","attendance-1","attendance-2","attendance-3","attendance-4","agent-1","agent-2","agent-flat-1","agent-flat-2","agent-flat-3","agent-flat-4","atention","blip-chat","blip-chat-health","blip-chat-logistic","blip-chat-marketing","blip-chat-sales","blip-ideas-blue-bg","blip-ideas","blip-sales","boy-computer","chat-bank","chat-sales","cookie","collaboration-1","collaboration-2","collaboration-3","delivery-chat","exchange-person","ecossytem-1","faq","girl-email","girl-tablet","loading-error","management","message-template-1","message-template-2","newsletter","organizations","plataform-1","professional-1","professional-2","professional-3","professional-4","professional-5","professional-6","professional-7","professional-8","rating-1","rh-hunting","ringtones","robot-flat","robot","robot-2","robot-3","robot-4","robot-5","robots","search","search-1","search-2","segmentos","settings-1","stilingue-1","stilingue-2","stilingue-3","stilingue-4","solicition","solutions-agent","suprise","talking","tangram","team-work","time-1","user-1","user-2","user-3","user-4","user-plataform","webhook","welcome-blip","whatsapp-web","whatsapp","error","search-2","time-2","time","robot-6"],screens=["dashboard","screen-home","screen-control-panel","screen-builder","screen-desk","screen-users","screen-report","screen-blipchat","screen-whatsapp","screen-home-off","screen-control-panel-off","screen-builder-off","screen-desk-off","screen-users-off","screen-report-off","screen-blipchat-off","screen-whatsapp-off"],blipSolid=["bag","bone","cap","coffee","gift","headphones","heart","hi","message","phone","raised-eyebrow","skate","sport","agent","baby","bored","bunny","cry","curious","developer","embaresed","fortune-teller","friendly","happy","laughing","lol","lovely","naughty","party","playful-1","playful-2","playful-3","poker-face","rised-eyebrow","sad","satisfact","serene","sherlock","shy","sleepy","smart","smiley","thug-life","wink","worker","wow"],blipOutline=["agent","bored","cry","curious","embaresed","friendly","happy","laughing","lol","lovely","naughty","party","playful-1","playful-2","playful-3","poker-face","rised-eyebrow","sad","satisfact","search","sherlock","shy","sleepy","smart","smiley","thug-life","wink","worker","wow"],brand=["blip-academy-black","blip-academy-blue-black","blip-academy-blue-white","blip-academy-white","blip-assist-white-horizontal","blip-assist-blue-white-horizontal","blip-assist-black-horizontal","blip-assist-blue-black-horizontal","blip-blog-blue-black","blip-blog-blue-white","blip-builder-black","blip-builder-blue-black","blip-builder-blue-white","blip-builder-white","blip-docs-black","blip-docs-blue-black","blip-docs-blue-white","blip-docs-white","blip-ecosystem-black","blip-ecosystem-blue-black","blip-ecosystem-blue-white","blip-ecosystem-white","blip-foods-black","blip-foods-blue-black","blip-foods-blue-white","blip-foods-white","blip-go-black","blip-go-blue-black","blip-go-blue-white","blip-go-white","blip-news-black","blip-news-blue-black","blip-news-blue-white","blip-news-white","blip-packs-black","blip-packs-blue-black","blip-packs-blue-white","blip-packs-white","blip-packspace-black","blip-packspace-blue-black","blip-packspace-blue-white","blip-packspace-white","blip-partner-black","blip-partner-blue-black","blip-partner-blue-white","blip-partner-white","blip-payments-black","blip-payments-blue-black","blip-payments-blue-white","blip-payments-white","blip-purpose-black","blip-purpose-blue-black","blip-purpose-blue-white","blip-purpose-white","blip-shop-black","blip-shop-blue-black","blip-shop-blue-white","blip-shop-white","blip-status-black","blip-status-blue-black","blip-status-blue-white","blip-status-white","blip-store-black","blip-store-blue-black","blip-store-blue-white","blip-store-white","blip-think-black","blip-think-blue-black","blip-think-blue-white","blip-think-white","blip-time-black","blip-time-blue-black","blip-time-blue-white","blip-time-white","blip-tools-black","blip-tools-blue-black","blip-tools-blue-white","blip-tools-white","blip-trust-black","blip-trust-blue-black","blip-trust-blue-white","blip-trust-white","take-blip-black-horizontal","take-blip-black-vertical","take-blip-blue-black-horizontal","take-blip-blue-black-vertical","take-blip-blue-white-horizontal","take-blip-blue-white-vertical","take-blip-white-horizontal","take-blip-white-vertical","blip-ballon-blue","blip-ballon-blue-black-horizontal","blip-ballon-blue-black-vertical","blip-ballon-white","blip-ballon-blue-white-horizontal","blip-ballon-blue-white-vertical","blip-ballon-white-horizontal","blip-ballon-white-vertical","blip-desk-black-horizontal","blip-desk-blue-black-horizontal","blip-desk-white-horizontal","blip-desk-blue-white-horizontal","blip-community-black-horizontal","blip-community-blue-black-horizontal","blip-community-white-horizontal","blip-community-blue-white-horizontal","blip-ideas-black-horizontal","blip-ideas-blue-black-horizontal","blip-ideas-white-horizontal","blip-ideas-blue-white-horizontal","blip-chat-black-horizontal","blip-chat-blue-black-horizontal","blip-chat-white-horizontal","blip-chat-blue-white-horizontal","blip-support-black-horizontal","blip-support-blue-black-horizontal","blip-support-white-horizontal","blip-support-blue-white-horizontal","blip-help-center-black-horizontal","blip-help-center-blue-black-horizontal","blip-help-center-white-horizontal","blip-help-center-blue-white-horizontal","sti-blue-horizontal","sti-blue-symbol","sti-blue-vertical","sti-white-horizontal","sti-white-vertical","sti-white-vertical-symbol"],logoIntegration=["blip-instagram","blip-messenger","blip-whatsapp"],segmented=["cart-selected","catalog-option","item-overview","send-catalog"],smartphone=["blip-chat-1","blip-chat-2","blip-chat-3","digital-scanning-1","digital-scanning-2"],spots=["air-ballon","analytics-satisfaction","avatar","binoculars","bot-list","bill-1","clock-1","clock-2","column-chart","connectivity","empty","folder-1","folder-2","folder-3","folder-4","folder-5","folder-6","folder-7","glad","greeting-1","greeting-2","hand-1","hand-2","hand-3","hand-4","hand-5","hand-6","idea","information-security","letter-1","letter-cancel-error","letter-check-okay","letter-close","letter-empty","letter-error-empty","letter-invite-blip","letter-search-avatars","letter-search-question","lock-1","lock-2","map","message-notification","new-feature","notification-1","paper-plane","password","pie-chart","pizza","profile-1","rocket","send-ticket","speak-bubble","ticket"],illustrationStyles={width:"200px",height:"150px",margin:"24px",textAlign:"center"},illustrationProps={width:"250px",margin:"auto"},illustrationWrapperStyles={display:"flex",flexWrap:"wrap"},Properties=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("bds-illustration",{style:illustrationProps,type:args.type,name:args.name});Properties.displayName="Properties",Properties.args={type:"default",name:"agent-1"},Properties.argTypes={type:{table:{defaultValue:{summary:"default"}},options:["default","screens","blip-solid","blip-outline","logo-integration","brand","segmented","smartphone","spots"],control:"select"},name:{table:{defaultValue:{summary:"vazio"}},control:"text"}};const FrameworkReact=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_blip_ds_react_dist_components__WEBPACK_IMPORTED_MODULE_3__.TO,{style:illustrationProps,type:"default",name:"agent-1"});FrameworkReact.displayName="FrameworkReact";const IllustrationsDefault=()=>{const defaultArray=[];return defaults.forEach((name=>{defaultArray.push((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{style:illustrationStyles,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("bds-illustration",{type:"default",name}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("bds-typo",{variant:"fs-10",children:name})]}))})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:illustrationWrapperStyles,children:defaultArray})};IllustrationsDefault.displayName="IllustrationsDefault";const IllustrationsScreens=()=>{const defaultArray=[];return screens.forEach((name=>{defaultArray.push((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{style:illustrationStyles,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("bds-illustration",{type:"screens",name}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("bds-typo",{variant:"fs-10",children:name})]}))})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:illustrationWrapperStyles,children:defaultArray})};IllustrationsScreens.displayName="IllustrationsScreens";const IllustrationsBlipSolid=()=>{const defaultArray=[];return blipSolid.forEach((name=>{defaultArray.push((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{style:illustrationStyles,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("bds-illustration",{type:"blip-solid",name}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("bds-typo",{variant:"fs-10",children:name})]}))})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:illustrationWrapperStyles,children:defaultArray})};IllustrationsBlipSolid.displayName="IllustrationsBlipSolid";const IllustrationsBlipOutline=()=>{const defaultArray=[];return blipOutline.forEach((name=>{defaultArray.push((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{style:illustrationStyles,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("bds-illustration",{type:"blip-outline",name}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("bds-typo",{variant:"fs-10",children:name})]}))})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:illustrationWrapperStyles,children:defaultArray})};IllustrationsBlipOutline.displayName="IllustrationsBlipOutline";const IllustrationsBrand=()=>{const defaultArray=[];return brand.forEach((name=>{defaultArray.push((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{style:illustrationStyles,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("bds-illustration",{type:"brand",name}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("bds-typo",{variant:"fs-10",children:name})]}))})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:illustrationWrapperStyles,children:defaultArray})};IllustrationsBrand.displayName="IllustrationsBrand";const IllustrationsLogoIntegration=()=>{const defaultArray=[];return logoIntegration.forEach((name=>{defaultArray.push((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{style:illustrationStyles,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("bds-illustration",{type:"logo-integration",name}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("bds-typo",{variant:"fs-10",children:name})]}))})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:illustrationWrapperStyles,children:defaultArray})};IllustrationsLogoIntegration.displayName="IllustrationsLogoIntegration";const IllustrationsSegmented=()=>{const defaultArray=[];return segmented.forEach((name=>{defaultArray.push((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{style:illustrationStyles,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("bds-illustration",{type:"segmented",name}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("bds-typo",{variant:"fs-10",children:name})]}))})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:illustrationWrapperStyles,children:defaultArray})};IllustrationsSegmented.displayName="IllustrationsSegmented";const IllustrationsSmartphone=()=>{const defaultArray=[];return smartphone.forEach((name=>{defaultArray.push((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{style:illustrationStyles,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("bds-illustration",{type:"smartphone",name}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("bds-typo",{variant:"fs-10",children:name})]}))})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:illustrationWrapperStyles,children:defaultArray})};IllustrationsSmartphone.displayName="IllustrationsSmartphone";const IllustrationsSpots=()=>{const defaultArray=[];return spots.forEach((name=>{defaultArray.push((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{style:illustrationStyles,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("bds-illustration",{type:"spots",name}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("bds-typo",{variant:"fs-10",children:name})]}))})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:illustrationWrapperStyles,children:defaultArray})};IllustrationsSpots.displayName="IllustrationsSpots",Properties.parameters={...Properties.parameters,docs:{...Properties.parameters?.docs,source:{originalSource:"args => {\n  return <bds-illustration style={illustrationProps} type={args.type} name={args.name}></bds-illustration>;\n}",...Properties.parameters?.docs?.source}}},FrameworkReact.parameters={...FrameworkReact.parameters,docs:{...FrameworkReact.parameters?.docs,source:{originalSource:'args => {\n  return <BdsIllustration style={illustrationProps} type="default" name="agent-1"></BdsIllustration>;\n}',...FrameworkReact.parameters?.docs?.source}}},IllustrationsDefault.parameters={...IllustrationsDefault.parameters,docs:{...IllustrationsDefault.parameters?.docs,source:{originalSource:'() => {\n  const defaultArray = [];\n  defaults.forEach(name => {\n    defaultArray.push(<div style={illustrationStyles}>\n        <bds-illustration type="default" name={name}></bds-illustration>\n        <bds-typo variant="fs-10">{name}</bds-typo>\n      </div>);\n  });\n  return <div style={illustrationWrapperStyles}>{defaultArray}</div>;\n}',...IllustrationsDefault.parameters?.docs?.source}}},IllustrationsScreens.parameters={...IllustrationsScreens.parameters,docs:{...IllustrationsScreens.parameters?.docs,source:{originalSource:'() => {\n  const defaultArray = [];\n  screens.forEach(name => {\n    defaultArray.push(<div style={illustrationStyles}>\n        <bds-illustration type="screens" name={name}></bds-illustration>\n        <bds-typo variant="fs-10">{name}</bds-typo>\n      </div>);\n  });\n  return <div style={illustrationWrapperStyles}>{defaultArray}</div>;\n}',...IllustrationsScreens.parameters?.docs?.source}}},IllustrationsBlipSolid.parameters={...IllustrationsBlipSolid.parameters,docs:{...IllustrationsBlipSolid.parameters?.docs,source:{originalSource:'() => {\n  const defaultArray = [];\n  blipSolid.forEach(name => {\n    defaultArray.push(<div style={illustrationStyles}>\n        <bds-illustration type="blip-solid" name={name}></bds-illustration>\n        <bds-typo variant="fs-10">{name}</bds-typo>\n      </div>);\n  });\n  return <div style={illustrationWrapperStyles}>{defaultArray}</div>;\n}',...IllustrationsBlipSolid.parameters?.docs?.source}}},IllustrationsBlipOutline.parameters={...IllustrationsBlipOutline.parameters,docs:{...IllustrationsBlipOutline.parameters?.docs,source:{originalSource:'() => {\n  const defaultArray = [];\n  blipOutline.forEach(name => {\n    defaultArray.push(<div style={illustrationStyles}>\n        <bds-illustration type="blip-outline" name={name}></bds-illustration>\n        <bds-typo variant="fs-10">{name}</bds-typo>\n      </div>);\n  });\n  return <div style={illustrationWrapperStyles}>{defaultArray}</div>;\n}',...IllustrationsBlipOutline.parameters?.docs?.source}}},IllustrationsBrand.parameters={...IllustrationsBrand.parameters,docs:{...IllustrationsBrand.parameters?.docs,source:{originalSource:'() => {\n  const defaultArray = [];\n  brand.forEach(name => {\n    defaultArray.push(<div style={illustrationStyles}>\n        <bds-illustration type="brand" name={name}></bds-illustration>\n        <bds-typo variant="fs-10">{name}</bds-typo>\n      </div>);\n  });\n  return <div style={illustrationWrapperStyles}>{defaultArray}</div>;\n}',...IllustrationsBrand.parameters?.docs?.source}}},IllustrationsLogoIntegration.parameters={...IllustrationsLogoIntegration.parameters,docs:{...IllustrationsLogoIntegration.parameters?.docs,source:{originalSource:'() => {\n  const defaultArray = [];\n  logoIntegration.forEach(name => {\n    defaultArray.push(<div style={illustrationStyles}>\n        <bds-illustration type="logo-integration" name={name}></bds-illustration>\n        <bds-typo variant="fs-10">{name}</bds-typo>\n      </div>);\n  });\n  return <div style={illustrationWrapperStyles}>{defaultArray}</div>;\n}',...IllustrationsLogoIntegration.parameters?.docs?.source}}},IllustrationsSegmented.parameters={...IllustrationsSegmented.parameters,docs:{...IllustrationsSegmented.parameters?.docs,source:{originalSource:'() => {\n  const defaultArray = [];\n  segmented.forEach(name => {\n    defaultArray.push(<div style={illustrationStyles}>\n        <bds-illustration type="segmented" name={name}></bds-illustration>\n        <bds-typo variant="fs-10">{name}</bds-typo>\n      </div>);\n  });\n  return <div style={illustrationWrapperStyles}>{defaultArray}</div>;\n}',...IllustrationsSegmented.parameters?.docs?.source}}},IllustrationsSmartphone.parameters={...IllustrationsSmartphone.parameters,docs:{...IllustrationsSmartphone.parameters?.docs,source:{originalSource:'() => {\n  const defaultArray = [];\n  smartphone.forEach(name => {\n    defaultArray.push(<div style={illustrationStyles}>\n        <bds-illustration type="smartphone" name={name}></bds-illustration>\n        <bds-typo variant="fs-10">{name}</bds-typo>\n      </div>);\n  });\n  return <div style={illustrationWrapperStyles}>{defaultArray}</div>;\n}',...IllustrationsSmartphone.parameters?.docs?.source}}},IllustrationsSpots.parameters={...IllustrationsSpots.parameters,docs:{...IllustrationsSpots.parameters?.docs,source:{originalSource:'() => {\n  const defaultArray = [];\n  spots.forEach(name => {\n    defaultArray.push(<div style={illustrationStyles}>\n        <bds-illustration type="spots" name={name}></bds-illustration>\n        <bds-typo variant="fs-10">{name}</bds-typo>\n      </div>);\n  });\n  return <div style={illustrationWrapperStyles}>{defaultArray}</div>;\n}',...IllustrationsSpots.parameters?.docs?.source}}};const __namedExportsOrder=["Properties","FrameworkReact","IllustrationsDefault","IllustrationsScreens","IllustrationsBlipSolid","IllustrationsBlipOutline","IllustrationsBrand","IllustrationsLogoIntegration","IllustrationsSegmented","IllustrationsSmartphone","IllustrationsSpots"]},"./src/components/illustration/illustration.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_blip_ds_blip_ds_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_illustration_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/illustration/illustration.stories.jsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",h2:"h2",p:"p"},(0,_home_runner_work_blip_ds_blip_ds_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"illustration",children:"Illustration"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Illustration allows users to select a date or a range of dates."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_illustration_stories__WEBPACK_IMPORTED_MODULE_2__.Properties}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{isTemplate:!0}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The following properties that are shared by Illustration."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.ZX,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"build-on-react",children:"Build on React"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hw,{of:_illustration_stories__WEBPACK_IMPORTED_MODULE_2__.FrameworkReact})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_blip_ds_blip_ds_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);