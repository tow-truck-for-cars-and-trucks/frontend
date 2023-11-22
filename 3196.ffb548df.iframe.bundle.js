"use strict";(self.webpackChunktow_track_frontend=self.webpackChunktow_track_frontend||[]).push([[3196],{"./src/entities/ui/order-success/order-success.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return order_success_order_success}});var delivery_time=__webpack_require__("./src/shared/ui/delivery-time/delivery-time.jsx"),progress_bar=__webpack_require__("./src/shared/ui/progress-bar/progress-bar.jsx"),adress=__webpack_require__("./src/shared/ui/adress/adress.jsx"),accordion=__webpack_require__("./src/shared/ui/accordion/accordion.jsx"),order_details=__webpack_require__("./src/shared/ui/order-details/order-details.jsx"),alert_alert=__webpack_require__("./src/shared/ui/alert/alert.jsx"),button_button=__webpack_require__("./src/shared/ui/button/button.jsx"),step_one_default_icon=__webpack_require__("./src/shared/ui/icons/step-one-default-icon.jsx"),step_two_fill_icon=__webpack_require__("./src/shared/ui/icons/step-two-fill-icon.jsx"),step_three_disable_icon=__webpack_require__("./src/shared/ui/icons/step-three-disable-icon.jsx"),step_four_disable_icon=__webpack_require__("./src/shared/ui/icons/step-four-disable-icon.jsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function OrderSuccess(){return(0,jsx_runtime.jsxs)("section",{className:"order-success",children:[(0,jsx_runtime.jsx)("div",{className:"order-success__time",children:(0,jsx_runtime.jsx)(delivery_time.Z,{time:"16:45"})}),(0,jsx_runtime.jsx)(progress_bar.Z,{icons:[(0,jsx_runtime.jsx)(step_one_default_icon.Z,{width:"40px",height:"40px"}),(0,jsx_runtime.jsx)(step_two_fill_icon.Z,{width:"40px",height:"40px"}),(0,jsx_runtime.jsx)(step_three_disable_icon.Z,{width:"40px",height:"40px"}),(0,jsx_runtime.jsx)(step_four_disable_icon.Z,{width:"40px",height:"40px"})],activeIndex:1,activeText:"В пути"}),(0,jsx_runtime.jsx)("div",{className:"order-success__adress",children:(0,jsx_runtime.jsx)(adress.Z,{adressFrom:"Москва, ул. Ленинградская, 28",adressTo:"​Московская область, г. Сергиев Посад, Сергиевская улица, 10"})}),(0,jsx_runtime.jsxs)("div",{className:"order-success__price",children:[(0,jsx_runtime.jsx)("p",{className:"order-success__price-title",children:"Стоимость заказа"}),(0,jsx_runtime.jsx)("p",{className:"order-success__price-total",children:"1820 ₽"})]}),(0,jsx_runtime.jsx)(accordion.Z,{title:"Информация о машине и водителе",withBorder:!1,children:(0,jsx_runtime.jsx)(order_details.Z,{pricing:"Эконом",carType:"Легковой автомобиль",wheelLock:"0",cuvetteWork:"Нет",deferredOrder:"Нет",comment:"Еще один очень важный комментарий"})}),(0,jsx_runtime.jsx)("div",{className:"order-success__alert",children:(0,jsx_runtime.jsx)(alert_alert.Z,{})}),(0,jsx_runtime.jsx)("div",{className:"order-success__button",children:(0,jsx_runtime.jsx)(button_button.Z,{primary:"true",label:"Связаться с водителем"})}),(0,jsx_runtime.jsx)(button_button.Z,{secondary:"true",label:"Отменить заказ"})]})}OrderSuccess.__docgenInfo={description:"",methods:[],displayName:"OrderSuccess"};var order_success_order_success=OrderSuccess},"./src/shared/ui/accordion/accordion.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return accordion_accordion}});var slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),arrow_down_icon=__webpack_require__("./src/shared/ui/icons/arrow-down-icon.jsx"),arrow_up_icon=__webpack_require__("./src/shared/ui/icons/arrow-up-icon.jsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Accordion(_ref){var title=_ref.title,children=_ref.children,withBorder=_ref.withBorder,_useState=(0,react.useState)(!1),_useState2=(0,slicedToArray.Z)(_useState,2),isShow=_useState2[0],setIsShow=_useState2[1];return(0,jsx_runtime.jsxs)("div",{className:"accordion\n    ".concat(withBorder?"accordion_with-border":""),children:[(0,jsx_runtime.jsxs)("div",{className:"accordion__header",children:[(0,jsx_runtime.jsx)("h2",{className:"accordion__title",children:title}),!isShow&&(0,jsx_runtime.jsx)("button",{type:"button","aria-label":"Развернуть",className:"accordion__icon",onClick:function onClick(){return setIsShow(!0)},children:(0,jsx_runtime.jsx)(arrow_down_icon.Z,{width:"16px",height:"16px",fill:"#3B3E49"})}),isShow&&(0,jsx_runtime.jsx)("button",{type:"button","aria-label":"Свернуть",className:"accordion__icon",onClick:function onClick(){return setIsShow(!1)},children:(0,jsx_runtime.jsx)(arrow_up_icon.Z,{width:"16px",height:"16px",fill:"#3B3E49"})})]}),isShow&&(0,jsx_runtime.jsx)("div",{className:isShow?"accordion-content_opened":"",children:children})]})}Accordion.defaultProps={isShow:!1,withBorder:!0},Accordion.__docgenInfo={description:"@param {string} title - title of the accordion\n@param {boolean} withBorder - accordion style with or without border",methods:[],displayName:"Accordion",props:{isShow:{defaultValue:{value:"false",computed:!1},required:!1},withBorder:{defaultValue:{value:"true",computed:!1},required:!1}}};var accordion_accordion=Accordion},"./src/shared/ui/adress/adress.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return adress_adress}});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Adress(_ref){var adressFrom=_ref.adressFrom,adressTo=_ref.adressTo;return(0,jsx_runtime.jsxs)("div",{className:"adress",children:[(0,jsx_runtime.jsxs)("ul",{className:"adress__content",children:[(0,jsx_runtime.jsx)("li",{className:"adress__caption",children:"Откуда забрать"}),(0,jsx_runtime.jsx)("li",{className:"adress__value",children:adressFrom})]}),(0,jsx_runtime.jsxs)("ul",{className:"adress__content",children:[(0,jsx_runtime.jsx)("li",{className:"adress__caption",children:"Куда доставить"}),(0,jsx_runtime.jsx)("li",{className:"adress__value",children:adressTo})]})]})}Adress.__docgenInfo={description:"@param {string} adressFrom - address to pick up from\n@param {string} adressTo - address where to take it",methods:[],displayName:"Adress"};var adress_adress=Adress},"./src/shared/ui/alert/alert.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return ui_alert_alert}});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function WarnIcon(_ref){var width=_ref.width,height=_ref.height;return(0,jsx_runtime.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:width,height:height,viewBox:"0 0 16 16",fill:"none",children:[(0,jsx_runtime.jsxs)("g",{clipPath:"url(#clip0_1145_3458)",children:[(0,jsx_runtime.jsx)("path",{d:"M8 15C6.14348 15 4.36301 14.2625 3.05025 12.9497C1.7375 11.637 1 9.85652 1 8C1 6.14348 1.7375 4.36301 3.05025 3.05025C4.36301 1.7375 6.14348 1 8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8C15 9.85652 14.2625 11.637 12.9497 12.9497C11.637 14.2625 9.85652 15 8 15ZM8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16Z",fill:"#FF8F01"}),(0,jsx_runtime.jsx)("path",{d:"M7.00195 11.0001C7.00195 10.8688 7.02782 10.7388 7.07807 10.6174C7.12833 10.4961 7.20199 10.3859 7.29485 10.293C7.38771 10.2002 7.49794 10.1265 7.61927 10.0762C7.7406 10.026 7.87063 10.0001 8.00195 10.0001C8.13328 10.0001 8.26331 10.026 8.38464 10.0762C8.50596 10.1265 8.6162 10.2002 8.70906 10.293C8.80192 10.3859 8.87558 10.4961 8.92583 10.6174C8.97609 10.7388 9.00195 10.8688 9.00195 11.0001C9.00195 11.2653 8.8966 11.5197 8.70906 11.7072C8.52152 11.8948 8.26717 12.0001 8.00195 12.0001C7.73674 12.0001 7.48238 11.8948 7.29485 11.7072C7.10731 11.5197 7.00195 11.2653 7.00195 11.0001ZM7.09995 4.99512C7.08664 4.86896 7.09999 4.74141 7.13915 4.62075C7.17831 4.50008 7.24241 4.389 7.32727 4.2947C7.41214 4.20041 7.51588 4.12501 7.63176 4.0734C7.74765 4.02179 7.87309 3.99512 7.99995 3.99512C8.12681 3.99512 8.25226 4.02179 8.36814 4.0734C8.48403 4.12501 8.58777 4.20041 8.67263 4.2947C8.7575 4.389 8.82159 4.50008 8.86075 4.62075C8.89991 4.74141 8.91327 4.86896 8.89995 4.99512L8.54995 8.50212C8.53819 8.63989 8.47516 8.76823 8.37331 8.86175C8.27146 8.95528 8.13823 9.00717 7.99995 9.00717C7.86168 9.00717 7.72844 8.95528 7.6266 8.86175C7.52475 8.76823 7.46171 8.63989 7.44995 8.50212L7.09995 4.99512Z",fill:"#FF8F01"})]}),(0,jsx_runtime.jsx)("defs",{children:(0,jsx_runtime.jsx)("clipPath",{id:"clip0_1145_3458",children:(0,jsx_runtime.jsx)("rect",{width:"16",height:"16",fill:"white"})})})]})}function Alert(){return(0,jsx_runtime.jsxs)("div",{className:"alert",children:[(0,jsx_runtime.jsx)("div",{className:"alert__icon",children:(0,jsx_runtime.jsx)(WarnIcon,{width:"16px",height:"16px"})}),(0,jsx_runtime.jsx)("p",{className:"alert__description",children:"Для погрузки понадобится свидетельство о регистрации ТС, водительское удостоверение или документы удостоверяющие личность"})]})}WarnIcon.__docgenInfo={description:"",methods:[],displayName:"WarnIcon"},Alert.__docgenInfo={description:"",methods:[],displayName:"Alert"};var ui_alert_alert=Alert},"./src/shared/ui/button/button.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return ui_button_button}});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Button(_ref){var primary=_ref.primary,label=_ref.label,onClick=_ref.onClick,disabled=_ref.disabled,mode=primary?"button__primary":"button__secondary";return(0,jsx_runtime.jsx)("button",{type:"button",className:["button",mode].join(" "),disabled:disabled,onClick:onClick,children:label})}Button.defaultProps={primary:!1,onClick:void 0},Button.__docgenInfo={description:"@param {string} label - title of the button\n@param {boolean} primary - flag indicating the style of the button\n@param {string} disabled - flag indicating that the button is disabled for clicking\n@param {function} onClick - callback called by pressing a button",methods:[],displayName:"Button",props:{primary:{defaultValue:{value:"false",computed:!1},required:!1},onClick:{defaultValue:{value:"undefined",computed:!0},required:!1}}};var ui_button_button=Button},"./src/shared/ui/delivery-time/delivery-time.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return delivery_time_delivery_time}});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function DeliveryTime(_ref){var time=_ref.time;return(0,jsx_runtime.jsxs)("div",{className:"delivery-time",children:[(0,jsx_runtime.jsx)("p",{className:"delivery-time__description",children:"Примерное время подачи эвакуатора"}),(0,jsx_runtime.jsx)("p",{className:"delivery-time__description",children:time})]})}DeliveryTime.__docgenInfo={description:"@param {string} time - time of the delivery",methods:[],displayName:"DeliveryTime"};var delivery_time_delivery_time=DeliveryTime},"./src/shared/ui/icons/arrow-down-icon.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return ArrowDownIcon}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function ArrowDownIcon(_ref){var width=_ref.width,height=_ref.height,fill=_ref.fill;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:width,height:height,viewBox:"0 0 16 16",fill:fill,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.64598 4.64598C1.69242 4.59941 1.7476 4.56247 1.80834 4.53727C1.86909 4.51206 1.93421 4.49908 1.99998 4.49908C2.06575 4.49908 2.13087 4.51206 2.19161 4.53727C2.25236 4.56247 2.30753 4.59941 2.35398 4.64598L7.99998 10.293L13.646 4.64598C13.6925 4.59949 13.7477 4.56261 13.8084 4.53745C13.8691 4.5123 13.9342 4.49935 14 4.49935C14.0657 4.49935 14.1308 4.5123 14.1916 4.53745C14.2523 4.56261 14.3075 4.59949 14.354 4.64598C14.4005 4.69247 14.4373 4.74766 14.4625 4.80839C14.4877 4.86913 14.5006 4.93423 14.5006 4.99998C14.5006 5.06572 14.4877 5.13082 14.4625 5.19156C14.4373 5.2523 14.4005 5.30749 14.354 5.35398L8.35398 11.354C8.30753 11.4005 8.25236 11.4375 8.19161 11.4627C8.13087 11.4879 8.06575 11.5009 7.99998 11.5009C7.93421 11.5009 7.86909 11.4879 7.80834 11.4627C7.7476 11.4375 7.69242 11.4005 7.64598 11.354L1.64598 5.35398C1.59942 5.30753 1.56247 5.25236 1.53727 5.19161C1.51206 5.13087 1.49908 5.06575 1.49908 4.99998C1.49908 4.93421 1.51206 4.86909 1.53727 4.80834C1.56247 4.7476 1.59942 4.69242 1.64598 4.64598Z",fill:fill})})}ArrowDownIcon.__docgenInfo={description:"",methods:[],displayName:"ArrowDownIcon"}},"./src/shared/ui/icons/arrow-up-icon.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return ArrowUpIcon}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function ArrowUpIcon(_ref){var width=_ref.width,height=_ref.height,fill=_ref.fill;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:width,height:height,viewBox:"0 0 16 16",fill:fill,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.64602 4.64598C7.69247 4.59941 7.74764 4.56247 7.80839 4.53727C7.86913 4.51206 7.93425 4.49908 8.00002 4.49908C8.06579 4.49908 8.13091 4.51206 8.19165 4.53727C8.2524 4.56247 8.30758 4.59941 8.35402 4.64598L14.354 10.646C14.4479 10.7399 14.5007 10.8672 14.5007 11C14.5007 11.1328 14.4479 11.2601 14.354 11.354C14.2601 11.4479 14.1328 11.5006 14 11.5006C13.8672 11.5006 13.7399 11.4479 13.646 11.354L8.00002 5.70698L2.35402 11.354C2.26013 11.4479 2.1328 11.5006 2.00002 11.5006C1.86725 11.5006 1.73991 11.4479 1.64602 11.354C1.55213 11.2601 1.49939 11.1328 1.49939 11C1.49939 10.8672 1.55213 10.7399 1.64602 10.646L7.64602 4.64598Z",fill:fill})})}ArrowUpIcon.__docgenInfo={description:"",methods:[],displayName:"ArrowUpIcon"}},"./src/shared/ui/icons/step-four-disable-icon.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return StepFourDisableIcon}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function StepFourDisableIcon(_ref){var width=_ref.width,height=_ref.height;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:width,height:height,viewBox:"0 0 40 40",fill:"none",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g",{clipPath:"url(#clip0_1716_693)",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M39.5 20C39.5 30.7696 30.7696 39.5 20 39.5C9.23045 39.5 0.5 30.7696 0.5 20C0.5 9.23045 9.23045 0.5 20 0.5C30.7696 0.5 39.5 9.23045 39.5 20Z",fill:"white",stroke:"#BEBEBF"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.7506 16.4026C17.5898 16.4026 18.2425 16.2198 18.9884 16.037C19.3614 15.9457 19.6411 15.8543 20.014 15.7629C20.6667 15.5801 20.387 15.4887 21.2262 16.1284C21.2262 16.2198 21.3194 16.2198 21.4126 16.3112C21.4126 16.4026 21.5059 16.4026 21.5059 16.494L22.5315 17.3165C22.718 17.4993 22.718 17.4993 22.9045 17.6821L23.9301 18.596C24.0233 18.596 24.0233 18.6874 24.1166 18.6874C24.1166 18.7788 24.2098 18.7788 24.3031 18.8701L27.8462 21.9774C28.5921 22.6171 28.2191 22.6171 29.711 22.6171C30.5501 22.6171 31.5758 22.343 32.3217 22.0688C32.6014 21.886 32.9744 21.7032 33.2541 21.5205C33.7203 21.1549 33.627 21.1549 34 20.8807C34 20.6066 33.1608 18.8701 33.0676 18.6874L31.5758 15.4887C31.3893 15.1231 31.296 14.849 31.1096 14.4834C30.9231 14.2092 30.0839 12.6556 29.8974 12.6556C29.711 12.6556 29.4313 12.747 29.2448 12.747C29.0583 12.8384 28.8718 12.8384 28.6853 12.9298L26.2611 13.5695C25.9814 13.6609 25.9814 13.5695 25.7017 13.4781L21.7856 12.1073C21.5991 12.0159 20.8532 11.7417 20.6667 11.7417C20.1073 11.7417 19.5478 11.8331 19.0816 11.9245C18.6154 12.1073 18.2425 12.29 17.7763 12.4728C16.6574 12.8384 15.4453 13.2953 14.3264 13.5695C14.0467 13.6609 13.9534 13.8437 13.767 14.0265C13.5805 14.4834 13.9534 15.0318 14.2332 15.3059C14.7926 15.9457 15.725 16.4026 16.7506 16.4026ZM14.4196 25.0847C14.5129 24.9019 14.8858 24.7191 14.8858 24.0794C14.8858 23.531 14.6061 23.1655 14.3264 22.8913C13.9534 22.6171 13.5805 22.5258 13.0211 22.6171C13.1143 22.2516 13.3008 22.0688 13.2075 21.6119C13.2075 21.2463 13.021 20.8807 12.8346 20.6979C12.6481 20.5152 12.2751 20.3324 11.9954 20.241C11.5292 20.1496 11.2495 20.3324 10.9698 20.4238C10.7833 19.9668 10.5036 19.6013 10.0374 19.4185C9.8509 19.3271 9.57118 19.2357 9.29146 19.3271C8.63878 19.3271 8.4523 19.6927 8.07934 20.0582C7.61314 20.6066 6.96046 20.8807 7.0537 21.7946C7.14694 22.2516 7.5199 22.7085 7.70638 22.9827C7.9861 23.3483 8.26582 23.7138 8.54554 24.0794C9.10498 24.7191 10.6901 26.8211 11.3427 27.4608L12.1819 28.4661C12.3684 28.5575 12.8346 29.0145 12.9278 29.1059C13.5805 29.4714 14.3264 29.1972 14.6994 28.7403L15.8182 27.5522C16.0047 27.3694 16.098 27.1867 16.1912 27.0039C16.3777 26.4555 16.098 25.8158 15.8182 25.5416C15.4453 25.1761 15.0723 25.0847 14.4196 25.0847ZM23.6504 28.1919C23.3707 29.1972 22.0653 29.5628 21.5059 29.1059C21.3194 29.0145 18.6154 26.3641 18.1492 25.8158C17.9628 25.633 17.7763 25.3589 17.4033 25.5416C17.1236 25.5416 16.9371 25.9072 17.1236 26.2728C17.2168 26.3641 19.8276 28.8317 19.9208 29.0145C19.7343 29.38 19.1749 29.7456 18.6154 29.7456C17.8695 29.7456 17.2168 28.7403 16.5642 28.1919C16.4709 28.2833 16.1912 28.5575 16.098 28.6489L15.725 29.1059L16.9371 30.2939C17.683 31.025 18.8952 31.2078 19.8276 30.7509C20.2005 30.5681 20.4802 30.3853 20.6667 30.1111C21.1329 30.2939 21.3194 30.5681 22.1586 30.5681C23.3707 30.5681 24.3963 29.7456 24.676 28.9231C25.7949 28.9231 26.8205 28.1919 27.1935 27.278C27.2867 27.1867 27.38 26.8211 27.38 26.8211C27.4732 26.7297 27.7529 26.7297 28.1259 26.4555C29.8042 25.3589 29.4313 23.6224 29.4313 23.6224C29.338 23.531 28.8718 23.531 28.6853 23.531C28.4989 23.531 28.2191 23.531 28.0327 23.4397C28.0327 23.6224 28.2191 23.7138 28.2191 24.1708C28.2191 24.8105 27.7529 25.3589 27.1935 25.5416C26.7273 25.633 26.8205 25.5416 26.6341 25.3589L21.2262 20.0582C20.6667 19.6013 20.2938 20.0582 20.2938 20.3324C20.2938 20.6066 20.387 20.7893 20.5735 20.8807C22.345 22.6171 24.2098 24.4449 25.9814 26.1814C26.1679 26.3641 26.1679 26.3641 26.0746 26.7297C25.7949 27.3694 24.9557 27.8264 24.5828 27.6436C24.4895 27.6436 23.3707 26.5469 23.2774 26.4555L19.5478 22.7999C19.4546 22.7085 19.2681 22.5258 19.0816 22.4344C18.5222 22.343 18.2425 22.9827 18.6154 23.3483C18.8952 23.6224 19.1749 23.8966 19.4546 24.1708L23.6504 28.1919ZM7.14694 19.6013C7.33342 19.4185 7.42666 19.2357 7.61314 19.1443C7.70638 19.0529 7.70638 18.9615 7.79962 18.8701L7.9861 18.6874C7.9861 18.6874 7.9861 18.6874 8.07934 18.6874C7.5199 17.9562 7.33342 17.9562 7.24018 16.7682C7.24018 16.037 7.42666 15.0318 7.61314 14.392C7.79962 13.6609 8.07934 13.1126 8.4523 12.4728C8.73202 12.1073 9.29146 11.2848 9.66442 11.0106C9.75766 10.9192 10.3171 10.3709 10.4103 10.3709C10.5036 10.3709 11.3427 10.645 11.436 10.7364C12.1819 10.9192 12.9278 11.1934 13.5805 11.3761L15.1656 11.8331C15.9115 12.1073 15.6318 12.1073 16.7506 11.7417L17.683 11.3761L16.4709 11.0106C15.352 10.645 14.0467 10.1881 12.8346 9.82251C11.9954 9.54834 11.1563 9.36556 10.3171 9C10.1306 9 10.2239 9 9.8509 9.27417C9.29146 9.63973 8.63878 10.2795 8.17258 10.8278C6.5875 12.747 5.84159 14.9404 6.02807 17.4993C6.12131 18.2304 6.5875 18.8701 7.0537 19.4185C7.0537 19.5099 7.0537 19.5099 7.14694 19.6013Z",fill:"#BEBEBF"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("defs",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("clipPath",{id:"clip0_1716_693",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect",{width:"40",height:"40",fill:"white"})})})]})}StepFourDisableIcon.__docgenInfo={description:"",methods:[],displayName:"StepFourDisableIcon"}},"./src/shared/ui/icons/step-one-default-icon.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return StepOneDefaultIcon}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function StepOneDefaultIcon(_ref){var width=_ref.width,height=_ref.height,className=_ref.className;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:width,height:height,viewBox:"0 0 40 40",fill:"none",className:className,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g",{clipPath:"url(#clip0_1716_675)",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M39.5 20C39.5 30.7696 30.7696 39.5 20 39.5C9.23045 39.5 0.5 30.7696 0.5 20C0.5 9.23045 9.23045 0.5 20 0.5C30.7696 0.5 39.5 9.23045 39.5 20Z",fill:"white",stroke:"#FFCC00"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M14.582 22.7437C14.2705 22.4272 14.2705 21.8734 14.582 21.557C14.8934 21.2405 15.3607 21.2405 15.75 21.557L18.709 24.5633L25.25 17.8386C25.5615 17.5222 26.1066 17.5222 26.418 17.8386C26.7295 18.2342 26.7295 18.7089 26.418 19.0253L19.2541 26.3038C18.9426 26.6203 18.3975 26.6203 18.0861 26.3038L14.582 22.7437ZM15.9057 9.53165H16.5287H17.4631C17.6189 8.89873 17.9303 8.34494 18.3197 7.94937C18.8648 7.39557 19.6434 7 20.5 7C21.3566 7 22.0574 7.39557 22.6803 7.94937C23.0697 8.34494 23.3811 8.89873 23.459 9.53165H24.4713H25.7172H27.5861C28.209 9.53165 28.832 9.76899 29.2992 10.2437C29.6885 10.6392 30 11.2722 30 11.9051V29.5475C30 30.2595 29.6885 30.8133 29.2992 31.288C28.832 31.6835 28.209 32 27.5861 32H13.4139C12.7131 32 12.168 31.6835 11.7008 31.288C11.3115 30.8133 11 30.2595 11 29.5475V11.9051C11 11.2722 11.3115 10.6392 11.7008 10.2437C12.168 9.76899 12.7131 9.53165 13.4139 9.53165H15.2828H15.9057ZM25.7172 10.7184V13.8829H15.2828V10.7184H13.4139C13.1025 10.7184 12.791 10.8766 12.5574 11.0348C12.3238 11.2722 12.168 11.5886 12.168 11.9051V29.5475C12.168 29.8639 12.3238 30.1804 12.5574 30.4177C12.791 30.6551 13.1025 30.8133 13.4139 30.8133H27.5861C27.8975 30.8133 28.209 30.6551 28.4426 30.4177C28.6762 30.1804 28.7541 29.8639 28.7541 29.5475V11.9051C28.7541 11.5886 28.6762 11.2722 28.4426 11.0348C28.209 10.8766 27.8975 10.7184 27.5861 10.7184H25.7172Z",fill:"#3B3E49"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("defs",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("clipPath",{id:"clip0_1716_675",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect",{width:"40",height:"40",fill:"white"})})})]})}StepOneDefaultIcon.__docgenInfo={description:"",methods:[],displayName:"StepOneDefaultIcon"}},"./src/shared/ui/icons/step-three-disable-icon.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return StepThreeDisableIcon}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function StepThreeDisableIcon(_ref){var width=_ref.width,height=_ref.height;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:width,height:height,viewBox:"0 0 40 40",fill:"none",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g",{clipPath:"url(#clip0_1716_688)",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M39.5 20C39.5 30.7696 30.7696 39.5 20 39.5C9.23045 39.5 0.5 30.7696 0.5 20C0.5 9.23045 9.23045 0.5 20 0.5C30.7696 0.5 39.5 9.23045 39.5 20Z",fill:"white",stroke:"#BEBEBF"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.6696 18.2776V20.5146H8.16713C6.7549 20.5146 7.0197 21.6331 7.0197 23.0958C7.0197 24.5585 7.19622 24.7305 8.78498 24.7305H10.1972V24.8166C10.1972 26.5373 11.6977 28 13.5513 28C15.3166 28 16.817 26.5373 16.817 24.8166V24.7305H24.3195V24.8166C24.3195 26.5373 25.7318 28 27.5853 28C29.4389 28 30.9394 26.5373 30.9394 24.8166V24.7305C33.4108 24.7305 32.9694 24.8166 32.9694 21.203V18.7939C32.9694 18.1916 32.1751 17.3312 31.9103 16.815C31.4689 16.2127 31.0276 15.6104 30.5863 15.0082C30.4098 14.7501 28.821 12.341 28.7327 12.2549C28.3797 11.9968 27.3205 12.0829 26.7909 12.0829H22.9073C22.0246 12.0829 22.1129 13.1153 22.2012 13.9757V20.5146H21.0537V18.6218C21.0537 17.1591 20.9655 17.2452 20.0828 16.6429L14.4339 12.8572C13.9926 12.5131 10.3737 10.0179 10.1972 10.0179C9.57936 9.84586 9.04978 10.9644 9.04978 11.1364C9.04978 11.3085 9.57936 11.9108 9.93242 12.2549C9.93242 12.2549 9.93242 12.341 9.93242 12.427V17.4173C9.93242 17.9335 9.93242 18.3637 9.40284 18.4497C8.60846 18.5358 8.78498 17.9335 8.60846 17.5893C8.16713 16.815 6.84317 17.5033 7.72581 18.7939C8.43193 19.9124 10.109 19.9984 10.9033 18.7939C11.2564 18.1916 11.1681 17.0731 11.1681 16.2988V13.5455L15.6696 18.2776ZM30.9394 18.3637C30.6746 17.9335 28.2914 14.4059 28.1149 14.2338H25.467V18.3637H30.8511C30.9394 18.3637 30.9394 18.3637 30.9394 18.3637ZM27.5853 23.2679C28.468 23.2679 29.1741 23.9562 29.1741 24.8166C29.1741 25.5909 28.468 26.3653 27.5853 26.3653C26.7027 26.3653 25.9965 25.5909 25.9965 24.8166C25.9965 23.9562 26.7027 23.2679 27.5853 23.2679ZM13.5513 23.2679C14.3456 23.2679 15.14 23.9562 15.14 24.8166C15.14 25.5909 14.3456 26.3653 13.5513 26.3653C12.6686 26.3653 11.9625 25.5909 11.9625 24.8166C11.9625 23.9562 12.6686 23.2679 13.5513 23.2679Z",fill:"#BEBEBF"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("defs",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("clipPath",{id:"clip0_1716_688",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect",{width:"40",height:"40",fill:"white"})})})]})}StepThreeDisableIcon.__docgenInfo={description:"",methods:[],displayName:"StepThreeDisableIcon"}},"./src/shared/ui/icons/step-two-fill-icon.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return StepTwoFillIcon}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function StepTwoFillIcon(_ref){var width=_ref.width,height=_ref.height;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:width,height:height,viewBox:"0 0 40 40",fill:"none",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g",{clipPath:"url(#clip0_1716_680)",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z",fill:"#FFCC00"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18.7202 18.3162V20.5134H11.1887C9.76603 20.5134 10.0171 21.6527 10.0171 23.0361C10.0171 24.5822 10.1845 24.745 11.8581 24.745H13.1971C13.1971 26.5352 14.7034 28 16.5444 28C18.3854 28 19.8081 26.5352 19.8081 24.745H27.3396C27.3396 26.5352 28.7622 28 30.6033 28C32.4443 28 33.9506 26.5352 33.9506 24.745C36.4611 24.745 35.959 24.8263 35.959 21.1644V18.8045C35.959 18.2349 35.2059 17.3397 34.8711 16.8515C34.4527 16.2005 34.0343 15.6308 33.6159 14.9798C33.4485 14.7357 31.8585 12.2944 31.7748 12.213C31.4401 12.0503 30.3522 12.1316 29.7664 12.1316H25.917C24.9965 12.1316 25.1638 13.1082 25.1638 14.0033V20.5134H24.0759V18.6417C24.0759 17.177 23.9923 17.2583 23.0717 16.6073L17.4649 12.864C17.0465 12.5385 13.3644 10.0972 13.1971 10.0159C12.5276 9.85311 12.0255 10.9924 12.0255 11.1551C12.1092 11.3993 12.946 12.2944 13.1134 12.4572L18.7202 18.3162ZM33.9506 18.3162C33.6996 17.9094 31.3564 14.4102 31.1054 14.1661H28.4275V18.3976H33.8669C33.9506 18.3976 33.9506 18.3976 33.9506 18.3162ZM30.6033 23.1988C31.5238 23.1988 32.1932 23.9312 32.1932 24.745C32.1932 25.6401 31.5238 26.2911 30.6033 26.2911C29.7664 26.2911 29.0133 25.6401 29.0133 24.745C29.0133 23.9312 29.7664 23.1988 30.6033 23.1988ZM16.5444 23.1988C17.3812 23.1988 18.1344 23.9312 18.1344 24.745C18.1344 25.6401 17.3812 26.2911 16.5444 26.2911C15.6239 26.2911 14.9544 25.6401 14.9544 24.745C14.9544 23.9312 15.6239 23.1988 16.5444 23.1988Z",fill:"#3B3E49"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M11.3171 15C11.6585 15 12 15.25 12 15.5C12 15.8125 11.6585 16 11.3171 16H5.59756C5.2561 16 5 15.8125 5 15.5C5 15.25 5.2561 15 5.59756 15H11.3171Z",fill:"#3B3E49"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M9.43434 18C9.75758 18 10 18.2 10 18.4667C10 18.8 9.75758 19 9.43434 19H2.56566C2.24242 19 2 18.8 2 18.4667C2 18.2 2.24242 18 2.56566 18H9.43434Z",fill:"#3B3E49"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M7.48148 21C7.77778 21 8 21.2 8 21.5333C8 21.8 7.77778 22 7.48148 22H4.59259C4.2963 22 4 21.8 4 21.5333C4 21.2 4.2963 21 4.59259 21H7.48148Z",fill:"#3B3E49"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("defs",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("clipPath",{id:"clip0_1716_680",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect",{width:"40",height:"40",fill:"white"})})})]})}StepTwoFillIcon.__docgenInfo={description:"",methods:[],displayName:"StepTwoFillIcon"}},"./src/shared/ui/order-details/order-details.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return order_details_order_details}});var slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function OrderDetails(_ref){var pricing=_ref.pricing,carType=_ref.carType,wheelLock=_ref.wheelLock,cuvetteWork=_ref.cuvetteWork,deferredOrder=_ref.deferredOrder,comment=_ref.comment,_useState=(0,react.useState)(!1),_useState2=(0,slicedToArray.Z)(_useState,2),isShow=_useState2[0],setIsShow=_useState2[1];return(0,jsx_runtime.jsxs)("div",{className:"order-details",children:[(0,jsx_runtime.jsxs)("ul",{className:"order-details__content",children:[(0,jsx_runtime.jsx)("li",{className:"order-details__title",children:"Выбранный тариф"}),(0,jsx_runtime.jsx)("li",{className:"order-details__selected",children:pricing})]}),(0,jsx_runtime.jsxs)("ul",{className:"order-details__content",children:[(0,jsx_runtime.jsx)("li",{className:"order-details__title",children:"Что везем"}),(0,jsx_runtime.jsx)("li",{className:"order-details__selected",children:carType})]}),(0,jsx_runtime.jsxs)("ul",{className:"order-details__content",children:[(0,jsx_runtime.jsx)("li",{className:"order-details__title",children:"Блокировка колес"}),(0,jsx_runtime.jsxs)("li",{className:"order-details__selected",children:[wheelLock," колес"]})]}),(0,jsx_runtime.jsxs)("ul",{className:"order-details__content",children:[(0,jsx_runtime.jsx)("li",{className:"order-details__title",children:"Кюветные работы"}),(0,jsx_runtime.jsx)("li",{className:"order-details__selected",children:cuvetteWork})]}),(0,jsx_runtime.jsxs)("ul",{className:"order-details__content",children:[(0,jsx_runtime.jsx)("li",{className:"order-details__title",children:"Отложенный заказ"}),(0,jsx_runtime.jsx)("li",{className:"order-details__selected",children:deferredOrder})]}),(0,jsx_runtime.jsxs)("ul",{className:"order-details__content",children:[(0,jsx_runtime.jsx)("li",{className:"order-details__title",children:"Комментарий"}),!isShow&&(0,jsx_runtime.jsx)("button",{type:"button","aria-label":"Читать",className:"order-details__button",onClick:function onClick(){return setIsShow(!0)},children:"Читать"}),isShow&&(0,jsx_runtime.jsx)("button",{type:"button","aria-label":"Свернуть",className:"order-details__button",onClick:function onClick(){return setIsShow(!1)},children:"Свернуть"})]}),isShow&&(0,jsx_runtime.jsx)("p",{className:isShow?"order-details_opened":"",children:comment})]})}OrderDetails.defaultProps={},OrderDetails.__docgenInfo={description:"@param {string} pricing - pricing chosen by the user\n@param {string} description - description of the prising\n@param {string} carType - the type of car specified by the user\n@param {number} wheelLock - how many wheels are blocked\n@param {boolean} cuvetteWork - cuvette work is needed or not needed\n@param {string} comment - comment of the user\n@param {boolean} deferredOrder - deferred order needed/not needed",methods:[],displayName:"OrderDetails"};var order_details_order_details=OrderDetails},"./src/shared/ui/progress-bar/progress-bar.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return progress_bar_progress_bar}});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function ProgressBar(_ref){var icons=_ref.icons,activeIndex=_ref.activeIndex,activeText=_ref.activeText;return(0,jsx_runtime.jsxs)("div",{className:"progress-bar",children:[(0,jsx_runtime.jsx)("div",{className:"progress-bar__container",children:icons.map((function(icon){return(0,jsx_runtime.jsx)("div",{className:"progress-bar__item",children:icon})}))}),(0,jsx_runtime.jsx)("div",{className:"progress-bar__text-container",children:icons.map((function(e,i){return(0,jsx_runtime.jsx)("div",{className:["progress-bar__description",i===activeIndex?"progress-bar__description_active":""].join(" "),children:i===activeIndex?activeText:null})}))})]})}ProgressBar.__docgenInfo={description:"@param {JSX element} icon - icon of the progress-bar\n@param {number} activeIndex - active element index\n@param {string} activeText - active element description",methods:[],displayName:"ProgressBar"};var progress_bar_progress_bar=ProgressBar}}]);