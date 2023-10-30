"use strict";(self.webpackChunkblip_ds=self.webpackChunkblip_ds||[]).push([[1577],{"./blip-ds-react/dist/components.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Fv:()=>BdsAccordion,JS:()=>BdsAccordionBody,w3:()=>BdsAccordionGroup,wY:()=>BdsAccordionHeader,DO:()=>BdsAlert,LP:()=>BdsAlertActions,B5:()=>BdsAlertBody,vf:()=>BdsAlertHeader,n5:()=>BdsAutocomplete,av:()=>BdsAvatar,kD:()=>BdsAvatarGroup,N6:()=>BdsBadge,WL:()=>BdsBanner,_j:()=>BdsBannerLink,Dw:()=>BdsButton,OJ:()=>BdsButtonIcon,yG:()=>BdsCard,XM:()=>BdsCardBody,z9:()=>BdsCardFooter,My:()=>BdsCardHeader,sR:()=>BdsCardTitle,LF:()=>BdsCheckbox,r0:()=>BdsChipClickable,ET:()=>BdsChipSelected,a3:()=>BdsChipTag,Ps:()=>BdsDataTable,wJ:()=>BdsDatepicker,Sm:()=>BdsGrid,ho:()=>BdsIcon,TO:()=>BdsIllustration,x6:()=>BdsInput,Jp:()=>BdsInputChips,ND:()=>BdsInputEditable,Sr:()=>BdsInputPassword,uT:()=>BdsInputPhoneNumber,Bi:()=>BdsList,m5:()=>BdsListItem,WJ:()=>BdsLoadingBar,J3:()=>BdsLoadingPage,M4:()=>BdsLoadingSpinner,U2:()=>BdsModal,PU:()=>BdsModalAction,F_:()=>BdsNavbar,az:()=>BdsNavbarContent,Sg:()=>BdsPagination,gl:()=>BdsPaper,sZ:()=>BdsProgressBar,oG:()=>BdsRadio,Gd:()=>BdsRadioGroup,b3:()=>BdsSelect,z:()=>BdsSelectChips,Np:()=>BdsSelectOption,ZK:()=>BdsSidebar,JL:()=>BdsSkeleton,mb:()=>BdsStep,fm:()=>BdsStepper,zO:()=>BdsSwitch,Ld:()=>BdsTabGroup,wA:()=>BdsTabItem,Lw:()=>BdsTable,Jn:()=>BdsTableBody,EQ:()=>BdsTableCell,GT:()=>BdsTableHeader,II:()=>BdsTableRow,Xc:()=>BdsTableTh,nb:()=>BdsThemeProvider,r2:()=>BdsToast,zy:()=>BdsTooltip,Rl:()=>BdsTypo,S0:()=>BdsUpload});var react=__webpack_require__("./node_modules/react/index.js");const camelToDashCase=str=>str.replace(/([A-Z])/g,(m=>`-${m[0].toLowerCase()}`)),getClassName=(classList,newProps,oldProps)=>{const newClassProp=newProps.className||newProps.class,oldClassProp=oldProps.className||oldProps.class,currentClasses=arrayToMap(classList),incomingPropClasses=arrayToMap(newClassProp?newClassProp.split(" "):[]),oldPropClasses=arrayToMap(oldClassProp?oldClassProp.split(" "):[]),finalClassNames=[];return currentClasses.forEach((currentClass=>{incomingPropClasses.has(currentClass)?(finalClassNames.push(currentClass),incomingPropClasses.delete(currentClass)):oldPropClasses.has(currentClass)||finalClassNames.push(currentClass)})),incomingPropClasses.forEach((s=>finalClassNames.push(s))),finalClassNames.join(" ")},isCoveredByReact=eventNameSuffix=>{if("undefined"==typeof document)return!0;{const eventName="on"+(eventNameSuffix=>"doubleclick"===eventNameSuffix?"dblclick":eventNameSuffix)(eventNameSuffix);let isSupported=eventName in document;if(!isSupported){const element=document.createElement("div");element.setAttribute(eventName,"return;"),isSupported="function"==typeof element[eventName]}return isSupported}},syncEvent=(node,eventName,newEventHandler)=>{const eventStore=node.__events||(node.__events={}),oldEventHandler=eventStore[eventName];oldEventHandler&&node.removeEventListener(eventName,oldEventHandler),node.addEventListener(eventName,eventStore[eventName]=function handler(e){newEventHandler&&newEventHandler.call(this,e)})},arrayToMap=arr=>{const map=new Map;return arr.forEach((s=>map.set(s,s))),map},mergeRefs=(...refs)=>value=>{refs.forEach((ref=>{((ref,value)=>{"function"==typeof ref?ref(value):null!=ref&&(ref.current=value)})(ref,value)}))};var __rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};const createComponent_createReactComponent=(tagName,ReactComponentContext,manipulatePropsFunction,defineCustomElement)=>{void 0!==defineCustomElement&&defineCustomElement();const displayName=tagName.toLowerCase().split("-").map((segment=>segment.charAt(0).toUpperCase()+segment.slice(1))).join("");const ReactComponent=class extends react.Component{constructor(props){super(props),this.setComponentElRef=element=>{this.componentEl=element}}componentDidMount(){this.componentDidUpdate(this.props)}componentDidUpdate(prevProps){((node,newProps,oldProps={})=>{if(node instanceof Element){const className=getClassName(node.classList,newProps,oldProps);""!==className&&(node.className=className),Object.keys(newProps).forEach((name=>{if("children"!==name&&"style"!==name&&"ref"!==name&&"class"!==name&&"className"!==name&&"forwardedRef"!==name)if(0===name.indexOf("on")&&name[2]===name[2].toUpperCase()){const eventName=name.substring(2),eventNameLc=eventName[0].toLowerCase()+eventName.substring(1);isCoveredByReact(eventNameLc)||syncEvent(node,eventNameLc,newProps[name])}else node[name]=newProps[name],"string"==typeof newProps[name]&&node.setAttribute(camelToDashCase(name),newProps[name])}))}})(this.componentEl,this.props,prevProps)}render(){const _a=this.props,{children,forwardedRef,style,className,ref}=_a,cProps=__rest(_a,["children","forwardedRef","style","className","ref"]);let propsToPass=Object.keys(cProps).reduce(((acc,name)=>{const value=cProps[name];if(0===name.indexOf("on")&&name[2]===name[2].toUpperCase()){const eventName=name.substring(2).toLowerCase();"undefined"!=typeof document&&isCoveredByReact(eventName)&&(acc[name]=value)}else{const type=typeof value;"string"!==type&&"boolean"!==type&&"number"!==type||(acc[camelToDashCase(name)]=value)}return acc}),{});manipulatePropsFunction&&(propsToPass=manipulatePropsFunction(this.props,propsToPass));const newProps=Object.assign(Object.assign({},propsToPass),{ref:mergeRefs(forwardedRef,this.setComponentElRef),style});return(0,react.createElement)(tagName,newProps,children)}static get displayName(){return displayName}};return ReactComponentContext&&(ReactComponent.contextType=ReactComponentContext),((ReactComponent,displayName)=>{const forwardRef=(props,ref)=>react.createElement(ReactComponent,Object.assign({},props,{forwardedRef:ref}));return forwardRef.displayName=displayName,react.forwardRef(forwardRef)})(ReactComponent,displayName)},BdsAccordion=createComponent_createReactComponent("bds-accordion"),BdsAccordionBody=createComponent_createReactComponent("bds-accordion-body"),BdsAccordionGroup=createComponent_createReactComponent("bds-accordion-group"),BdsAccordionHeader=createComponent_createReactComponent("bds-accordion-header"),BdsAlert=createComponent_createReactComponent("bds-alert"),BdsAlertActions=createComponent_createReactComponent("bds-alert-actions"),BdsAlertBody=createComponent_createReactComponent("bds-alert-body"),BdsAlertHeader=createComponent_createReactComponent("bds-alert-header"),BdsAutocomplete=createComponent_createReactComponent("bds-autocomplete"),BdsAvatar=createComponent_createReactComponent("bds-avatar"),BdsAvatarGroup=createComponent_createReactComponent("bds-avatar-group"),BdsBadge=createComponent_createReactComponent("bds-badge"),BdsBanner=createComponent_createReactComponent("bds-banner"),BdsBannerLink=createComponent_createReactComponent("bds-banner-link"),BdsButton=createComponent_createReactComponent("bds-button"),BdsButtonIcon=createComponent_createReactComponent("bds-button-icon"),BdsCard=createComponent_createReactComponent("bds-card"),BdsCardBody=createComponent_createReactComponent("bds-card-body"),BdsCardFooter=createComponent_createReactComponent("bds-card-footer"),BdsCardHeader=createComponent_createReactComponent("bds-card-header"),BdsCardTitle=createComponent_createReactComponent("bds-card-title"),BdsCheckbox=createComponent_createReactComponent("bds-checkbox"),BdsChipClickable=createComponent_createReactComponent("bds-chip-clickable"),BdsChipSelected=createComponent_createReactComponent("bds-chip-selected"),BdsChipTag=createComponent_createReactComponent("bds-chip-tag"),BdsDataTable=createComponent_createReactComponent("bds-data-table"),BdsDatepicker=createComponent_createReactComponent("bds-datepicker"),BdsGrid=createComponent_createReactComponent("bds-grid"),BdsIcon=createComponent_createReactComponent("bds-icon"),BdsIllustration=createComponent_createReactComponent("bds-illustration"),BdsInput=createComponent_createReactComponent("bds-input"),BdsInputChips=createComponent_createReactComponent("bds-input-chips"),BdsInputEditable=createComponent_createReactComponent("bds-input-editable"),BdsInputPassword=createComponent_createReactComponent("bds-input-password"),BdsInputPhoneNumber=createComponent_createReactComponent("bds-input-phone-number"),BdsList=createComponent_createReactComponent("bds-list"),BdsListItem=createComponent_createReactComponent("bds-list-item"),BdsLoadingBar=createComponent_createReactComponent("bds-loading-bar"),BdsLoadingPage=createComponent_createReactComponent("bds-loading-page"),BdsLoadingSpinner=createComponent_createReactComponent("bds-loading-spinner"),BdsModal=createComponent_createReactComponent("bds-modal"),BdsModalAction=createComponent_createReactComponent("bds-modal-action"),BdsNavbar=createComponent_createReactComponent("bds-navbar"),BdsNavbarContent=createComponent_createReactComponent("bds-navbar-content"),BdsPagination=createComponent_createReactComponent("bds-pagination"),BdsPaper=createComponent_createReactComponent("bds-paper"),BdsProgressBar=createComponent_createReactComponent("bds-progress-bar"),BdsRadio=createComponent_createReactComponent("bds-radio"),BdsRadioGroup=createComponent_createReactComponent("bds-radio-group"),BdsSelect=createComponent_createReactComponent("bds-select"),BdsSelectChips=createComponent_createReactComponent("bds-select-chips"),BdsSelectOption=createComponent_createReactComponent("bds-select-option"),BdsSidebar=createComponent_createReactComponent("bds-sidebar"),BdsSkeleton=createComponent_createReactComponent("bds-skeleton"),BdsStep=createComponent_createReactComponent("bds-step"),BdsStepper=createComponent_createReactComponent("bds-stepper"),BdsSwitch=createComponent_createReactComponent("bds-switch"),BdsTabGroup=createComponent_createReactComponent("bds-tab-group"),BdsTabItem=createComponent_createReactComponent("bds-tab-item"),BdsTable=createComponent_createReactComponent("bds-table"),BdsTableBody=createComponent_createReactComponent("bds-table-body"),BdsTableCell=createComponent_createReactComponent("bds-table-cell"),BdsTableHeader=createComponent_createReactComponent("bds-table-header"),BdsTableRow=createComponent_createReactComponent("bds-table-row"),BdsTableTh=createComponent_createReactComponent("bds-table-th"),BdsThemeProvider=createComponent_createReactComponent("bds-theme-provider"),BdsToast=createComponent_createReactComponent("bds-toast"),BdsTooltip=createComponent_createReactComponent("bds-tooltip"),BdsTypo=createComponent_createReactComponent("bds-typo"),BdsUpload=createComponent_createReactComponent("bds-upload")},"./src/components/typo/typo.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{FrameworkReact:()=>FrameworkReact,Properties:()=>Properties,__namedExportsOrder:()=>__namedExportsOrder,default:()=>typo_stories});__webpack_require__("./node_modules/react/index.js");var components=__webpack_require__("./blip-ds-react/dist/components.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const typo_stories={title:"Components/Typo",parameters:{notes:{markdown:'# bds-typo\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property     | Attribute     | Description                                                                                                                              | Type                                                                                   | Default   |\n| ------------ | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | --------- |\n| `bold`       | `bold`        | Bold. Entered as one of the bold. Can be one of: \'regular\', \'semi-bold\', \'bold\', \'extra-bold\';                                           | `"bold" \\| "extra-bold" \\| "regular" \\| "semi-bold"`                                   | `null`    |\n| `dataTest`   | `data-test`   | Data test is the prop to specifically test the component action object.                                                                  | `string`                                                                               | `null`    |\n| `italic`     | `italic`      | Added font style italic                                                                                                                  | `boolean`                                                                              | `false`   |\n| `lineHeight` | `line-height` | Line Height. Entered as one of the line hieght. Can be one of: \'none\', \'small\', \'simple\', \'plus\', \'double\'                               | `"double" \\| "none" \\| "plus" \\| "simple" \\| "small"`                                  | `null`    |\n| `margin`     | `margin`      | If true, adds default margin values                                                                                                      | `boolean`                                                                              | `true`    |\n| `noWrap`     | `no-wrap`     | Added style no wrap                                                                                                                      | `boolean`                                                                              | `false`   |\n| `paragraph`  | `paragraph`   | Tranform text in paragraph                                                                                                               | `boolean`                                                                              | `false`   |\n| `tag`        | `tag`         | Define element tag, must be used for acessibilty                                                                                         | `"h1" \\| "h2" \\| "h3" \\| "h4" \\| "p" \\| "span"`                                        | `\'p\'`     |\n| `variant`    | `variant`     | Variant. Entered as one of the font size variant. Can be one of: \'fs-10\' ,\'fs-12\' ,\'fs-14\' ,\'fs-16\' ,\'fs-20\' ,\'fs-24\' ,\'fs-32\' ,\'fs-40\'; | `"fs-10" \\| "fs-12" \\| "fs-14" \\| "fs-16" \\| "fs-20" \\| "fs-24" \\| "fs-32" \\| "fs-40"` | `\'fs-16\'` |\n\n\n## Shadow Parts\n\n| Part               | Description |\n| ------------------ | ----------- |\n| `"bds-typo__text"` |             |\n\n\n## Dependencies\n\n### Used by\n\n - [bds-accordion-header](../accordion)\n - [bds-alert-body](../alert/alert-body)\n - [bds-alert-header](../alert/alert-header)\n - [bds-autocomplete](../autocomplete)\n - [bds-avatar](../avatar)\n - [bds-badge](../badge)\n - [bds-button](../button)\n - [bds-card-color](../card-color)\n - [bds-card-subtitle](../card/card-subtitle)\n - [bds-card-title](../card/card-title)\n - [bds-checkbox](../checkbox)\n - [bds-chip-clickable](../chip-clickable)\n - [bds-chip-selected](../chip-selected)\n - [bds-chip-tag](../chip-tag)\n - [bds-counter-text](../counter-text)\n - [bds-data-table](../table)\n - [bds-datepicker](../datepicker)\n - [bds-datepicker-period](../datepicker/datepicker-period)\n - [bds-datepicker-single](../datepicker/datepicker-single)\n - [bds-expansion-panel-header](../expansion-panel/expansion-panel-header)\n - [bds-input](../input)\n - [bds-input-chips](../input-chips)\n - [bds-input-editable](../input-editable)\n - [bds-input-password](../input-password)\n - [bds-input-phone-number](../input-phone-number)\n - [bds-list-item](../list)\n - [bds-menu-action](../menu/menu-action)\n - [bds-menu-exibition](../menu/menu-exibition)\n - [bds-menu-list-item](../menu-list-item)\n - [bds-menu-separation](../menu/menu-separation)\n - [bds-pagination](../pagination)\n - [bds-progress-bar](../progress-bar)\n - [bds-radio](../radio)\n - [bds-select](../selects/select)\n - [bds-select-chips](../selects/select-chips)\n - [bds-select-option](../select-option)\n - [bds-step](../stepper/step)\n - [bds-tab](../tabs/tab (depreciated)/tab)\n - [bds-tab-group](../tabs)\n - [bds-table-cell](../table/table-cell)\n - [bds-table-th](../table/table-header-cell)\n - [bds-test-component](../test-component)\n - [bds-toast](../toast)\n - [bds-tooltip](../tooltip)\n - [bds-upload](../upload)\n - [bds-warning](../warning)\n\n### Graph\n```mermaid\ngraph TD;\n  bds-accordion-header --\x3e bds-typo\n  bds-alert-body --\x3e bds-typo\n  bds-alert-header --\x3e bds-typo\n  bds-autocomplete --\x3e bds-typo\n  bds-avatar --\x3e bds-typo\n  bds-badge --\x3e bds-typo\n  bds-button --\x3e bds-typo\n  bds-card-color --\x3e bds-typo\n  bds-card-subtitle --\x3e bds-typo\n  bds-card-title --\x3e bds-typo\n  bds-checkbox --\x3e bds-typo\n  bds-chip-clickable --\x3e bds-typo\n  bds-chip-selected --\x3e bds-typo\n  bds-chip-tag --\x3e bds-typo\n  bds-counter-text --\x3e bds-typo\n  bds-data-table --\x3e bds-typo\n  bds-datepicker --\x3e bds-typo\n  bds-datepicker-period --\x3e bds-typo\n  bds-datepicker-single --\x3e bds-typo\n  bds-expansion-panel-header --\x3e bds-typo\n  bds-input --\x3e bds-typo\n  bds-input-chips --\x3e bds-typo\n  bds-input-editable --\x3e bds-typo\n  bds-input-password --\x3e bds-typo\n  bds-input-phone-number --\x3e bds-typo\n  bds-list-item --\x3e bds-typo\n  bds-menu-action --\x3e bds-typo\n  bds-menu-exibition --\x3e bds-typo\n  bds-menu-list-item --\x3e bds-typo\n  bds-menu-separation --\x3e bds-typo\n  bds-pagination --\x3e bds-typo\n  bds-progress-bar --\x3e bds-typo\n  bds-radio --\x3e bds-typo\n  bds-select --\x3e bds-typo\n  bds-select-chips --\x3e bds-typo\n  bds-select-option --\x3e bds-typo\n  bds-step --\x3e bds-typo\n  bds-tab --\x3e bds-typo\n  bds-tab-group --\x3e bds-typo\n  bds-table-cell --\x3e bds-typo\n  bds-table-th --\x3e bds-typo\n  bds-test-component --\x3e bds-typo\n  bds-toast --\x3e bds-typo\n  bds-tooltip --\x3e bds-typo\n  bds-upload --\x3e bds-typo\n  bds-warning --\x3e bds-typo\n  style bds-typo fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n*Built with [StencilJS](https://stenciljs.com/)*\n'}}},Properties=args=>(0,jsx_runtime.jsx)("bds-typo",{variant:args.variant,"line-height":args.lineHeight,bold:args.bold,italic:args.italic,"no-wrap":args.noWrap,paragraph:args.paragraph,margin:args.margin,children:"Texto para teste do typo."});Properties.displayName="Properties",Properties.args={bold:"regular",italic:!1,lineHeight:"",margin:!1,noWrap:!1,paragraph:!1,tag:"p",variant:"fs-16"},Properties.argTypes={bold:{table:{defaultValue:{summary:"regular"}},options:["bold","extra-bold","regular","semi-bold"],control:"select"},lineHeight:{table:{defaultValue:{summary:"none"}},options:["double","none","plus","simple","small"],control:"select"},tag:{table:{defaultValue:{summary:"p"}},options:["h1","h2","h3","h4","p","span"],control:"select"},variant:{table:{defaultValue:{summary:"fs-16"}},options:["fs-10","fs-12","fs-14","fs-16","fs-20","fs-24","fs-32","fs-40"],control:"select"}};const FrameworkReact=()=>(0,jsx_runtime.jsx)(components.Rl,{children:"Texto para teste do typo."});FrameworkReact.displayName="FrameworkReact",Properties.parameters={...Properties.parameters,docs:{...Properties.parameters?.docs,source:{originalSource:"args => {\n  return <bds-typo variant={args.variant} line-height={args.lineHeight} bold={args.bold} italic={args.italic} no-wrap={args.noWrap} paragraph={args.paragraph} margin={args.margin}>\n      Texto para teste do typo.\n    </bds-typo>;\n}",...Properties.parameters?.docs?.source}}},FrameworkReact.parameters={...FrameworkReact.parameters,docs:{...FrameworkReact.parameters?.docs,source:{originalSource:"() => {\n  return <BdsTypo>Texto para teste do typo.</BdsTypo>;\n}",...FrameworkReact.parameters?.docs?.source}}};const __namedExportsOrder=["Properties","FrameworkReact"]}}]);