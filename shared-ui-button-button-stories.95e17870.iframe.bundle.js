"use strict";(self.webpackChunktow_track_frontend=self.webpackChunktow_track_frontend||[]).push([[9738],{"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectSpread2}});var toPropertyKey=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){var obj,key,value;obj=e,key=r,value=t[r],(key=(0,toPropertyKey.Z)(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}},"./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}__webpack_require__.d(__webpack_exports__,{Z:function(){return _toPropertyKey}})},"./src/shared/ui/button/button.stories.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:function(){return Primary},PrimaryDisabled:function(){return PrimaryDisabled},Secondary:function(){return Secondary},SecondaryDisabled:function(){return SecondaryDisabled},__namedExportsOrder:function(){return __namedExportsOrder}});var _Primary$parameters,_Primary$parameters2,_Primary$parameters2$,_PrimaryDisabled$para,_PrimaryDisabled$para2,_PrimaryDisabled$para3,_Secondary$parameters,_Secondary$parameters2,_Secondary$parameters3,_SecondaryDisabled$pa,_SecondaryDisabled$pa2,_SecondaryDisabled$pa3,D_dev_tow_truck_for_cars_and_trucks_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_button__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/shared/ui/button/button.jsx");__webpack_exports__.default={title:"Shared/Button",component:_button__WEBPACK_IMPORTED_MODULE_0__.Z,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}}};var Primary={args:{primary:!0,label:"Оформить заказ"}},PrimaryDisabled={args:{label:"Оформить заказ",primary:!0,disabled:!0}},Secondary={args:{label:"Оформить заказ",primary:!1}},SecondaryDisabled={args:{label:"Оформить заказ",disabled:!0,primary:!1}};Primary.parameters=(0,D_dev_tow_truck_for_cars_and_trucks_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)((0,D_dev_tow_truck_for_cars_and_trucks_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)({},Primary.parameters),{},{docs:(0,D_dev_tow_truck_for_cars_and_trucks_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)((0,D_dev_tow_truck_for_cars_and_trucks_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)({},null===(_Primary$parameters=Primary.parameters)||void 0===_Primary$parameters?void 0:_Primary$parameters.docs),{},{source:(0,D_dev_tow_truck_for_cars_and_trucks_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)({originalSource:"{\n  args: {\n    primary: true,\n    label: 'Оформить заказ'\n  }\n}"},null===(_Primary$parameters2=Primary.parameters)||void 0===_Primary$parameters2||null===(_Primary$parameters2$=_Primary$parameters2.docs)||void 0===_Primary$parameters2$?void 0:_Primary$parameters2$.source)})}),PrimaryDisabled.parameters=(0,D_dev_tow_truck_for_cars_and_trucks_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)((0,D_dev_tow_truck_for_cars_and_trucks_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)({},PrimaryDisabled.parameters),{},{docs:(0,D_dev_tow_truck_for_cars_and_trucks_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)((0,D_dev_tow_truck_for_cars_and_trucks_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)({},null===(_PrimaryDisabled$para=PrimaryDisabled.parameters)||void 0===_PrimaryDisabled$para?void 0:_PrimaryDisabled$para.docs),{},{source:(0,D_dev_tow_truck_for_cars_and_trucks_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)({originalSource:"{\n  args: {\n    label: 'Оформить заказ',\n    primary: true,\n    disabled: true\n  }\n}"},null===(_PrimaryDisabled$para2=PrimaryDisabled.parameters)||void 0===_PrimaryDisabled$para2||null===(_PrimaryDisabled$para3=_PrimaryDisabled$para2.docs)||void 0===_PrimaryDisabled$para3?void 0:_PrimaryDisabled$para3.source)})}),Secondary.parameters=(0,D_dev_tow_truck_for_cars_and_trucks_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)((0,D_dev_tow_truck_for_cars_and_trucks_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)({},Secondary.parameters),{},{docs:(0,D_dev_tow_truck_for_cars_and_trucks_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)((0,D_dev_tow_truck_for_cars_and_trucks_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)({},null===(_Secondary$parameters=Secondary.parameters)||void 0===_Secondary$parameters?void 0:_Secondary$parameters.docs),{},{source:(0,D_dev_tow_truck_for_cars_and_trucks_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)({originalSource:"{\n  args: {\n    label: 'Оформить заказ',\n    primary: false\n  }\n}"},null===(_Secondary$parameters2=Secondary.parameters)||void 0===_Secondary$parameters2||null===(_Secondary$parameters3=_Secondary$parameters2.docs)||void 0===_Secondary$parameters3?void 0:_Secondary$parameters3.source)})}),SecondaryDisabled.parameters=(0,D_dev_tow_truck_for_cars_and_trucks_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)((0,D_dev_tow_truck_for_cars_and_trucks_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)({},SecondaryDisabled.parameters),{},{docs:(0,D_dev_tow_truck_for_cars_and_trucks_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)((0,D_dev_tow_truck_for_cars_and_trucks_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)({},null===(_SecondaryDisabled$pa=SecondaryDisabled.parameters)||void 0===_SecondaryDisabled$pa?void 0:_SecondaryDisabled$pa.docs),{},{source:(0,D_dev_tow_truck_for_cars_and_trucks_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)({originalSource:"{\n  args: {\n    label: 'Оформить заказ',\n    disabled: true,\n    primary: false\n  }\n}"},null===(_SecondaryDisabled$pa2=SecondaryDisabled.parameters)||void 0===_SecondaryDisabled$pa2||null===(_SecondaryDisabled$pa3=_SecondaryDisabled$pa2.docs)||void 0===_SecondaryDisabled$pa3?void 0:_SecondaryDisabled$pa3.source)})});var __namedExportsOrder=["Primary","PrimaryDisabled","Secondary","SecondaryDisabled"]},"./src/shared/ui/button/button.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return ui_button_button}});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Button(_ref){var primary=_ref.primary,label=_ref.label,onClick=_ref.onClick,disabled=_ref.disabled,mode=primary?"button__primary":"button__secondary";return(0,jsx_runtime.jsx)("button",{type:"button",className:["button",mode].join(" "),disabled:disabled,onClick:onClick,children:label})}Button.defaultProps={primary:!1,onClick:void 0},Button.__docgenInfo={description:"@param {string} label - title of the button\n@param {boolean} primary - flag indicating the style of the button\n@param {string} disabled - flag indicating that the button is disabled for clicking\n@param {function} onClick - callback called by pressing a button",methods:[],displayName:"Button",props:{primary:{defaultValue:{value:"false",computed:!1},required:!1},onClick:{defaultValue:{value:"undefined",computed:!0},required:!1}}};var ui_button_button=Button}}]);