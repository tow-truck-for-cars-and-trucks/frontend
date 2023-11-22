"use strict";(self.webpackChunktow_track_frontend=self.webpackChunktow_track_frontend||[]).push([[7122],{"./src/entities/ui/auth/auth.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return auth_auth}});var slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),input=__webpack_require__("./src/shared/ui/input/input.jsx"),password_input=__webpack_require__("./src/shared/ui/password-input/password-input.jsx"),button_button=__webpack_require__("./src/shared/ui/button/button.jsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Auth(){var _useState=(0,react.useState)(""),_useState2=(0,slicedToArray.Z)(_useState,2),emailValue=_useState2[0],setEmailValue=_useState2[1],_useState3=(0,react.useState)(""),_useState4=(0,slicedToArray.Z)(_useState3,2),passwordValue=_useState4[0],setPasswordValue=_useState4[1];return(0,jsx_runtime.jsxs)("main",{className:"auth",children:[(0,jsx_runtime.jsx)("div",{className:"auth__input",children:(0,jsx_runtime.jsx)(input.Z,{value:emailValue,onChange:function onChange(value){return setEmailValue(value)},placeholder:"Введите почту",id:"email-input"})}),(0,jsx_runtime.jsx)("div",{className:"auth__input",children:(0,jsx_runtime.jsx)(password_input.Z,{value:passwordValue,onChange:function onChange(value){return setPasswordValue(value)},placeholder:"Введите пароль",id:"password-input"})}),(0,jsx_runtime.jsx)("div",{className:"auth__button",children:(0,jsx_runtime.jsx)(button_button.Z,{primary:"true",label:"Получить код"})})]})}Auth.__docgenInfo={description:"",methods:[],displayName:"Auth"};var auth_auth=Auth},"./src/entities/ui/chips-list/chips-list.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_shared_ui_chip_chip__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/shared/ui/chip/chip.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function ChipsList(_ref){var chips=_ref.chips,onActivate=_ref.onActivate,value=_ref.value,onChange=_ref.onChange,onChipActivation=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(id){onChange(id)}),[onActivate]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:chips.map((function(chip){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_shared_ui_chip_chip__WEBPACK_IMPORTED_MODULE_1__.Z,{label:chip.label,disabled:chip.disabled,isActive:value===chip.id,setActive:function setActive(){return onChipActivation(chip.id)}})}))})}ChipsList.__docgenInfo={description:"@param {Array} chips - Chip component array\n@param {function} onActivate - callback-function\n@param {string} value - value of the Chip component\n@param {function} onChange - (e: string) => void - tracks id changes",methods:[],displayName:"ChipsList"},__webpack_exports__.Z=ChipsList},"./src/entities/ui/register/register.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return register_register}});var slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),input=__webpack_require__("./src/shared/ui/input/input.jsx"),password_input=__webpack_require__("./src/shared/ui/password-input/password-input.jsx"),button_button=__webpack_require__("./src/shared/ui/button/button.jsx"),checkbox_checkbox=__webpack_require__("./src/shared/ui/checkbox/checkbox.jsx"),checkbox_auth_description=__webpack_require__("./src/shared/ui/checkbox-auth-description/checkbox-auth-description.jsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Register(){var _useState=(0,react.useState)(""),_useState2=(0,slicedToArray.Z)(_useState,2),nameValue=_useState2[0],setNameValue=_useState2[1],_useState3=(0,react.useState)(""),_useState4=(0,slicedToArray.Z)(_useState3,2),lastNameValue=_useState4[0],setLastNameValue=_useState4[1],_useState5=(0,react.useState)(""),_useState6=(0,slicedToArray.Z)(_useState5,2),emailValue=_useState6[0],setEmailValue=_useState6[1],_useState7=(0,react.useState)(""),_useState8=(0,slicedToArray.Z)(_useState7,2),numberValue=_useState8[0],setNumberValue=_useState8[1],_useState9=(0,react.useState)(""),_useState10=(0,slicedToArray.Z)(_useState9,2),passwordValue=_useState10[0],setPasswordValue=_useState10[1],_useState11=(0,react.useState)(""),_useState12=(0,slicedToArray.Z)(_useState11,2),confirmPasswordValue=_useState12[0],setConfirmPasswordValue=_useState12[1],_useState13=(0,react.useState)(""),_useState14=(0,slicedToArray.Z)(_useState13,2),isCheckedValue=_useState14[0],setIsCheckedValue=_useState14[1];return(0,jsx_runtime.jsxs)("main",{className:"register",children:[(0,jsx_runtime.jsx)("div",{className:"register__input",children:(0,jsx_runtime.jsx)(input.Z,{value:nameValue,onChange:function onChange(value){return setNameValue(value)},placeholder:"Имя",id:"name-input"})}),(0,jsx_runtime.jsx)("div",{className:"register__input",children:(0,jsx_runtime.jsx)(input.Z,{value:lastNameValue,onChange:function onChange(value){return setLastNameValue(value)},placeholder:"Фамилия",id:"last-name-input"})}),(0,jsx_runtime.jsx)("div",{className:"register__input",children:(0,jsx_runtime.jsx)(input.Z,{value:numberValue,onChange:function onChange(value){return setNumberValue(value)},mask:"+7 (999) 999 99 99",placeholder:"+ 7 (___) ___ __ __",id:"phone-input"})}),(0,jsx_runtime.jsx)("div",{className:"register__input",children:(0,jsx_runtime.jsx)(input.Z,{value:emailValue,onChange:function onChange(value){return setEmailValue(value)},placeholder:"Введите почту",id:"email-input"})}),(0,jsx_runtime.jsxs)("div",{className:"register__input",children:[(0,jsx_runtime.jsx)(password_input.Z,{value:passwordValue,onChange:function onChange(value){return setPasswordValue(value)},placeholder:"Введите пароль",id:"password-input"}),(0,jsx_runtime.jsx)("p",{className:"register__input-caption",children:"Пароль должен содержать латинские символы, цифры и символы /!-?:"})]}),(0,jsx_runtime.jsx)("div",{className:"register__input",children:(0,jsx_runtime.jsx)(password_input.Z,{value:confirmPasswordValue,onChange:function onChange(value){return setConfirmPasswordValue(value)},placeholder:"Подтвердите пароль",id:"confirm-password-input"})}),(0,jsx_runtime.jsx)("div",{className:"register__checkbox",children:(0,jsx_runtime.jsx)(checkbox_checkbox.Z,{height:"16px",width:"16px",value:isCheckedValue,onChange:function onChange(value){return setIsCheckedValue(value)},children:(0,jsx_runtime.jsx)(checkbox_auth_description.Z,{})})}),(0,jsx_runtime.jsx)("div",{className:"register__button",children:(0,jsx_runtime.jsx)(button_button.Z,{primary:"true",label:"Зарегистрироваться"})})]})}Register.__docgenInfo={description:"",methods:[],displayName:"Register"};var register_register=Register},"./src/shared/ui/back-button/back-button.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return back_button_back_button}});var dist=__webpack_require__("./node_modules/react-router/dist/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function ArrowBackIcon(_ref){var width=_ref.width,height=_ref.height;return(0,jsx_runtime.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:width,height:height,viewBox:"0 0 16 16",fill:"none",children:(0,jsx_runtime.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.354 1.64598C11.4006 1.69242 11.4375 1.7476 11.4627 1.80834C11.4879 1.86909 11.5009 1.93421 11.5009 1.99998C11.5009 2.06575 11.4879 2.13087 11.4627 2.19161C11.4375 2.25236 11.4006 2.30753 11.354 2.35398L5.70702 7.99998L11.354 13.646C11.4005 13.6925 11.4374 13.7477 11.4625 13.8084C11.4877 13.8691 11.5007 13.9342 11.5007 14C11.5007 14.0657 11.4877 14.1308 11.4625 14.1916C11.4374 14.2523 11.4005 14.3075 11.354 14.354C11.3075 14.4005 11.2523 14.4373 11.1916 14.4625C11.1309 14.4877 11.0658 14.5006 11 14.5006C10.9343 14.5006 10.8692 14.4877 10.8084 14.4625C10.7477 14.4373 10.6925 14.4005 10.646 14.354L4.64602 8.35398C4.59946 8.30753 4.56252 8.25236 4.53731 8.19161C4.5121 8.13087 4.49913 8.06575 4.49913 7.99998C4.49913 7.93421 4.5121 7.86909 4.53731 7.80834C4.56252 7.7476 4.59946 7.69242 4.64602 7.64598L10.646 1.64598C10.6925 1.59942 10.7476 1.56247 10.8084 1.53727C10.8691 1.51206 10.9343 1.49908 11 1.49908C11.0658 1.49908 11.1309 1.51206 11.1917 1.53727C11.2524 1.56247 11.3076 1.59942 11.354 1.64598Z",fill:"#3B3E49"})})}function BackButton(){var navigate=(0,dist.s0)();return(0,jsx_runtime.jsxs)("button",{type:"button","aria-label":"Назад",className:"back-button",onClick:function onClick(){return navigate("/",{replace:!0})},children:[(0,jsx_runtime.jsx)("div",{className:"back-button__icon",children:(0,jsx_runtime.jsx)(ArrowBackIcon,{width:"16px",height:"16px"})}),(0,jsx_runtime.jsx)("span",{className:"back-button__title",children:"Назад"})]})}ArrowBackIcon.__docgenInfo={description:"",methods:[],displayName:"ArrowBackIcon"},BackButton.__docgenInfo={description:"",methods:[],displayName:"BackButton"};var back_button_back_button=BackButton},"./src/shared/ui/button/button.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return ui_button_button}});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Button(_ref){var primary=_ref.primary,label=_ref.label,onClick=_ref.onClick,disabled=_ref.disabled,mode=primary?"button__primary":"button__secondary";return(0,jsx_runtime.jsx)("button",{type:"button",className:["button",mode].join(" "),disabled:disabled,onClick:onClick,children:label})}Button.defaultProps={primary:!1,onClick:void 0},Button.__docgenInfo={description:"@param {string} label - title of the button\n@param {boolean} primary - flag indicating the style of the button\n@param {string} disabled - flag indicating that the button is disabled for clicking\n@param {function} onClick - callback called by pressing a button",methods:[],displayName:"Button",props:{primary:{defaultValue:{value:"false",computed:!1},required:!1},onClick:{defaultValue:{value:"undefined",computed:!0},required:!1}}};var ui_button_button=Button},"./src/shared/ui/checkbox-auth-description/checkbox-auth-description.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return checkbox_auth_description}});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function CheckboxAuthDescription(){return(0,jsx_runtime.jsxs)("div",{className:"description",children:[(0,jsx_runtime.jsx)("p",{className:"description__title",children:"Я даю своё согласие на обработку"}),(0,jsx_runtime.jsx)("p",{className:"description__title",children:"персональных данных и соглашаюсь"}),(0,jsx_runtime.jsxs)("a",{href:"#privacy-policy",className:"description__link",children:[" ","с политикой конфиденциальности"]})]})}CheckboxAuthDescription.__docgenInfo={description:"",methods:[],displayName:"CheckboxAuthDescription"};var checkbox_auth_description=CheckboxAuthDescription},"./src/shared/ui/checkbox/checkbox.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return ui_checkbox_checkbox}});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function CheckboxIcon(_ref){var width=_ref.width,height=_ref.height;return(0,jsx_runtime.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:width,height:height,viewBox:"0 0 16 16",fill:"none",children:[(0,jsx_runtime.jsx)("g",{clipPath:"url(#clip0_779_3779)",children:(0,jsx_runtime.jsx)("path",{d:"M14 1C14.2652 1 14.5196 1.10536 14.7071 1.29289C14.8946 1.48043 15 1.73478 15 2V14C15 14.2652 14.8946 14.5196 14.7071 14.7071C14.5196 14.8946 14.2652 15 14 15H2C1.73478 15 1.48043 14.8946 1.29289 14.7071C1.10536 14.5196 1 14.2652 1 14V2C1 1.73478 1.10536 1.48043 1.29289 1.29289C1.48043 1.10536 1.73478 1 2 1H14ZM2 0C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2L0 14C0 14.5304 0.210714 15.0391 0.585786 15.4142C0.960859 15.7893 1.46957 16 2 16H14C14.5304 16 15.0391 15.7893 15.4142 15.4142C15.7893 15.0391 16 14.5304 16 14V2C16 1.46957 15.7893 0.960859 15.4142 0.585786C15.0391 0.210714 14.5304 0 14 0L2 0Z",fill:"#3B3E49"})}),(0,jsx_runtime.jsx)("defs",{children:(0,jsx_runtime.jsx)("clipPath",{id:"clip0_779_3779",children:(0,jsx_runtime.jsx)("rect",{width:"16",height:"16",fill:"white"})})})]})}CheckboxIcon.__docgenInfo={description:"",methods:[],displayName:"CheckboxIcon"};var checkbox_icon=CheckboxIcon;function CheckboxCheckedIcon(_ref){var width=_ref.width,height=_ref.height;return(0,jsx_runtime.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:width,height:height,viewBox:"0 0 16 16",fill:"none",children:[(0,jsx_runtime.jsxs)("g",{clipPath:"url(#clip0_779_3778)",children:[(0,jsx_runtime.jsx)("path",{d:"M14 1C14.2652 1 14.5196 1.10536 14.7071 1.29289C14.8946 1.48043 15 1.73478 15 2V14C15 14.2652 14.8946 14.5196 14.7071 14.7071C14.5196 14.8946 14.2652 15 14 15H2C1.73478 15 1.48043 14.8946 1.29289 14.7071C1.10536 14.5196 1 14.2652 1 14V2C1 1.73478 1.10536 1.48043 1.29289 1.29289C1.48043 1.10536 1.73478 1 2 1H14ZM2 0C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2L0 14C0 14.5304 0.210714 15.0391 0.585786 15.4142C0.960859 15.7893 1.46957 16 2 16H14C14.5304 16 15.0391 15.7893 15.4142 15.4142C15.7893 15.0391 16 14.5304 16 14V2C16 1.46957 15.7893 0.960859 15.4142 0.585786C15.0391 0.210714 14.5304 0 14 0L2 0Z",fill:"#3B3E49"}),(0,jsx_runtime.jsx)("path",{d:"M10.97 4.97001C11.11 4.83128 11.2989 4.7532 11.496 4.75266C11.693 4.75211 11.8824 4.82915 12.0231 4.9671C12.1638 5.10505 12.2446 5.29285 12.2479 5.48987C12.2513 5.6869 12.177 5.87734 12.041 6.02001L8.04904 11.01C7.98043 11.0839 7.89762 11.1432 7.80557 11.1844C7.71352 11.2255 7.61411 11.2477 7.51329 11.2496C7.41247 11.2515 7.31231 11.233 7.21879 11.1952C7.12528 11.1575 7.04033 11.1013 6.96904 11.03L4.32404 8.38401C4.25035 8.31534 4.19125 8.23254 4.15025 8.14054C4.10926 8.04854 4.08722 7.94923 4.08544 7.84853C4.08367 7.74783 4.10219 7.6478 4.13991 7.55441C4.17763 7.46102 4.23378 7.37619 4.305 7.30497C4.37622 7.23375 4.46105 7.1776 4.55444 7.13988C4.64783 7.10216 4.74786 7.08364 4.84856 7.08541C4.94926 7.08719 5.04857 7.10923 5.14057 7.15022C5.23257 7.19122 5.31537 7.25032 5.38404 7.32401L7.47804 9.41701L10.951 4.99201C10.9572 4.98426 10.9639 4.97691 10.971 4.97001H10.97Z",fill:"#3B3E49"})]}),(0,jsx_runtime.jsx)("defs",{children:(0,jsx_runtime.jsx)("clipPath",{id:"clip0_779_3778",children:(0,jsx_runtime.jsx)("rect",{width:"16",height:"16",fill:"white"})})})]})}CheckboxCheckedIcon.__docgenInfo={description:"",methods:[],displayName:"CheckboxCheckedIcon"};var checkbox_checked_icon=CheckboxCheckedIcon;function Checkbox(_ref){var children=_ref.children,onChange=_ref.onChange,value=_ref.value,width=_ref.width,height=_ref.height,isRight=_ref.isRight;return(0,jsx_runtime.jsxs)("label",{className:"checkbox ".concat(isRight?"checkbox_right":""),htmlFor:"checkbox",children:[(0,jsx_runtime.jsx)("input",{className:"checkbox__input",type:"checkbox",name:"checkbox",checked:value}),(0,jsx_runtime.jsx)("button",{type:"button",className:"checkbox__icons","aria-label":"Чекбокс",tabIndex:"0",onClick:function onClick(){return onChange(!value)},children:value?(0,jsx_runtime.jsx)(checkbox_icon,{width:width,height:height}):(0,jsx_runtime.jsx)(checkbox_checked_icon,{width:width,height:height})}),children]})}Checkbox.__docgenInfo={description:"@param {string} width - width of icon\n@param {string} height - height of icon\n@param {boolean} value - checked/not checked\n@param {JSX element} children -embedded component\n@param {boolean} isRight - the text from the checkbox is located on the left or right\n@param {function} onChange: (event) => void - fired with the new event of the input each time it changes",methods:[],displayName:"Checkbox"};var ui_checkbox_checkbox=Checkbox},"./src/shared/ui/chip/chip.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return chip_chip}});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Chip(_ref){var label=_ref.label,disabled=_ref.disabled,setActive=_ref.setActive,isActive=_ref.isActive;return(0,jsx_runtime.jsx)("button",{type:"button",disabled:disabled,className:"chip ".concat(isActive?"chip_active":""),onClick:function onClick(){return setActive(!0)},children:label})}Chip.defaultProps={primary:!1},Chip.__docgenInfo={description:"@param {string} label - title of the chip\n@param {string} disabled - flag indicating that the button is disabled for clicking\n@param {boolean} isActive - selected chip",methods:[],displayName:"Chip",props:{primary:{defaultValue:{value:"false",computed:!1},required:!1}}};var chip_chip=Chip},"./src/shared/ui/password-input/password-input.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return password_input_password_input}});var slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function EyeIcon(_ref){var width=_ref.width,height=_ref.height;return(0,jsx_runtime.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:width,height:height,viewBox:"0 0 16 16",fill:"none",children:[(0,jsx_runtime.jsx)("path",{d:"M16 8C16 8 13 2.5 8 2.5C3 2.5 0 8 0 8C0 8 3 13.5 8 13.5C13 13.5 16 8 16 8ZM1.173 8C1.65651 7.26512 2.21264 6.58069 2.833 5.957C4.12 4.668 5.88 3.5 8 3.5C10.12 3.5 11.879 4.668 13.168 5.957C13.7884 6.58069 14.3445 7.26512 14.828 8C14.77 8.087 14.706 8.183 14.633 8.288C14.298 8.768 13.803 9.408 13.168 10.043C11.879 11.332 10.119 12.5 8 12.5C5.88 12.5 4.121 11.332 2.832 10.043C2.21165 9.41931 1.65652 8.73487 1.173 8Z",fill:"#3B3E49"}),(0,jsx_runtime.jsx)("path",{d:"M8 5.5C7.33696 5.5 6.70107 5.76339 6.23223 6.23223C5.76339 6.70107 5.5 7.33696 5.5 8C5.5 8.66304 5.76339 9.29893 6.23223 9.76777C6.70107 10.2366 7.33696 10.5 8 10.5C8.66304 10.5 9.29893 10.2366 9.76777 9.76777C10.2366 9.29893 10.5 8.66304 10.5 8C10.5 7.33696 10.2366 6.70107 9.76777 6.23223C9.29893 5.76339 8.66304 5.5 8 5.5ZM4.5 8C4.5 7.07174 4.86875 6.1815 5.52513 5.52513C6.1815 4.86875 7.07174 4.5 8 4.5C8.92826 4.5 9.8185 4.86875 10.4749 5.52513C11.1313 6.1815 11.5 7.07174 11.5 8C11.5 8.92826 11.1313 9.8185 10.4749 10.4749C9.8185 11.1313 8.92826 11.5 8 11.5C7.07174 11.5 6.1815 11.1313 5.52513 10.4749C4.86875 9.8185 4.5 8.92826 4.5 8Z",fill:"#3B3E49"})]})}function EyeSlashIcon(_ref){var width=_ref.width,height=_ref.height;return(0,jsx_runtime.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:width,height:height,viewBox:"0 0 16 16",fill:"none",children:[(0,jsx_runtime.jsx)("path",{d:"M13.359 11.238C15.06 9.72 16 8 16 8C16 8 13 2.5 8 2.5C7.03959 2.50331 6.09005 2.70342 5.21 3.088L5.98 3.859C6.62744 3.62315 7.31095 3.50168 8 3.5C10.12 3.5 11.879 4.668 13.168 5.957C13.7884 6.58069 14.3445 7.26513 14.828 8C14.77 8.087 14.706 8.183 14.633 8.288C14.298 8.768 13.803 9.408 13.168 10.043C13.003 10.208 12.831 10.371 12.651 10.529L13.359 11.238Z",fill:"#3B3E49"}),(0,jsx_runtime.jsx)("path",{d:"M11.297 9.17599C11.5202 8.55183 11.5615 7.87714 11.4162 7.23041C11.2709 6.58368 10.9449 5.99151 10.4762 5.52281C10.0075 5.0541 9.41531 4.72813 8.76858 4.58282C8.12185 4.43751 7.44716 4.47883 6.823 4.70199L7.646 5.52499C8.03031 5.46998 8.42215 5.50523 8.79047 5.62795C9.15879 5.75067 9.49347 5.95748 9.76799 6.232C10.0425 6.50652 10.2493 6.8412 10.372 7.20952C10.4948 7.57784 10.53 7.96968 10.475 8.35399L11.297 9.17599ZM8.354 10.475L9.176 11.297C8.55184 11.5201 7.87715 11.5615 7.23042 11.4162C6.58369 11.2708 5.99153 10.9449 5.52282 10.4762C5.05411 10.0075 4.72814 9.41529 4.58283 8.76857C4.43752 8.12184 4.47885 7.44715 4.702 6.82299L5.525 7.64599C5.46999 8.0303 5.50524 8.42214 5.62796 8.79046C5.75068 9.15878 5.95749 9.49346 6.23201 9.76798C6.50653 10.0425 6.84121 10.2493 7.20953 10.372C7.57785 10.4947 7.96969 10.53 8.354 10.475Z",fill:"#3B3E49"}),(0,jsx_runtime.jsx)("path",{d:"M3.35 5.47C3.17 5.63 2.997 5.792 2.832 5.957C2.21165 6.58069 1.65552 7.26512 1.172 8L1.367 8.288C1.702 8.768 2.197 9.408 2.832 10.043C4.121 11.332 5.881 12.5 8 12.5C8.716 12.5 9.39 12.367 10.02 12.14L10.79 12.912C9.90994 13.2965 8.9604 13.4967 8 13.5C3 13.5 0 8 0 8C0 8 0.939 6.279 2.641 4.762L3.349 5.471L3.35 5.47ZM13.646 14.354L1.646 2.354L2.354 1.646L14.354 13.646L13.646 14.354Z",fill:"#3B3E49"})]})}EyeIcon.__docgenInfo={description:"",methods:[],displayName:"EyeIcon"},EyeSlashIcon.__docgenInfo={description:"",methods:[],displayName:"EyeSlashIcon"};var close_icon=__webpack_require__("./src/shared/ui/icons/close-icon.jsx");function PasswordInput(_ref){var value=_ref.value,placeholder=_ref.placeholder,_onChange=_ref.onChange,invalid=_ref.invalid,errorText=_ref.errorText,id=_ref.id,_useState=(0,react.useState)(!1),_useState2=(0,slicedToArray.Z)(_useState,2),showInput=_useState2[0],setShowInput=_useState2[1];return(0,jsx_runtime.jsx)("div",{className:"password-input\n      ".concat(invalid?"password-input_invalid":"","\n      ").concat(value?"password-input_filled":""),children:(0,jsx_runtime.jsxs)("div",{className:"password-input__container",children:[(0,jsx_runtime.jsx)("input",{type:showInput?"text":"password",id:id,className:"password-input__text",value:value,onChange:function onChange(e){return _onChange(e.target.value)}}),(0,jsx_runtime.jsx)("label",{htmlFor:id,className:"password-input__placeholder",children:placeholder}),(0,jsx_runtime.jsx)("div",{role:"button","aria-label":"Стереть текст",className:"password-input__delete-icon",onMouseDown:function onMouseDown(){_onChange("")},onTouchStart:function onTouchStart(){_onChange("")},children:(0,jsx_runtime.jsx)(close_icon.Z,{width:"16px",height:"16px"})}),(0,jsx_runtime.jsx)("div",{role:"button","aria-label":"Показать пароль",className:"password-input__eye-icons",onMouseDown:function onMouseDown(){setShowInput(!showInput)},onTouchStart:function onTouchStart(){setShowInput(!showInput)},children:showInput?(0,jsx_runtime.jsx)("div",{className:"password-input__eye-icon",children:(0,jsx_runtime.jsx)(EyeIcon,{width:"16px",height:"16px"})}):(0,jsx_runtime.jsx)("div",{className:"password-input__eye-icon",children:(0,jsx_runtime.jsx)(EyeSlashIcon,{width:"16px",height:"16px"})})}),(0,jsx_runtime.jsx)("div",{className:"password-input__error-text",children:errorText})]})})}PasswordInput.defaultProps={placeholder:"placeholder",invalid:!1},PasswordInput.__docgenInfo={description:"@param {string} value - value displayed within the input\n@param {string} placeholder - placeholder of the input\n@param {function} onChange: (e: string) => void - fired with the new value of the input each time it changes\n@param {boolean} invalid - invalid input value\n@param {string} id - identificator for the input\n@param {string} errorText - error text for invalid value",methods:[],displayName:"PasswordInput",props:{placeholder:{defaultValue:{value:"'placeholder'",computed:!1},required:!1},invalid:{defaultValue:{value:"false",computed:!1},required:!1}}};var password_input_password_input=PasswordInput},"./src/widget/register-widget/register-widget.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return register_widget_register_widget}});var slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),chips_list=__webpack_require__("./src/entities/ui/chips-list/chips-list.jsx"),auth=__webpack_require__("./src/entities/ui/auth/auth.jsx"),register=__webpack_require__("./src/entities/ui/register/register.jsx"),back_button=__webpack_require__("./src/shared/ui/back-button/back-button.jsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function RegisterWidget(){var _useState=(0,react.useState)("login"),_useState2=(0,slicedToArray.Z)(_useState,2),activeTab=_useState2[0],setActiveTab=_useState2[1];return(0,jsx_runtime.jsxs)("main",{className:"register-widget",children:[(0,jsx_runtime.jsx)("div",{className:"register-widget__back-button",children:(0,jsx_runtime.jsx)(back_button.Z,{})}),(0,jsx_runtime.jsx)("div",{className:"register-widget__navigation",children:(0,jsx_runtime.jsx)(chips_list.Z,{chips:[{label:"Вход",id:"login"},{label:"Регистрация",id:"register"}],value:activeTab,onChange:function onChange(chips){return setActiveTab(chips)}})}),"login"===activeTab?(0,jsx_runtime.jsx)(auth.Z,{}):(0,jsx_runtime.jsx)(register.Z,{})]})}RegisterWidget.__docgenInfo={description:"",methods:[],displayName:"RegisterWidget"};var register_widget_register_widget=RegisterWidget}}]);