"use strict";(self.webpackChunktow_track_frontend=self.webpackChunktow_track_frontend||[]).push([[1657],{"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){var obj,key,value;obj=e,key=r,value=t[r],(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectSpread2}})},"./src/shared/ui/button-toggle/buttonToggle.stories.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder}});var _Default$parameters,_Default$parameters2,_Default$parameters2$,D_dev_tow_truck_for_cars_and_trucks_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_buttonToggle__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/shared/ui/button-toggle/buttonToggle.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function Default(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_buttonToggle__WEBPACK_IMPORTED_MODULE_0__.Z,{})}__webpack_exports__.default={title:"Shared/checkboxTogl",component:_buttonToggle__WEBPACK_IMPORTED_MODULE_0__.Z},Default.parameters=(0,D_dev_tow_truck_for_cars_and_trucks_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)((0,D_dev_tow_truck_for_cars_and_trucks_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)({},Default.parameters),{},{docs:(0,D_dev_tow_truck_for_cars_and_trucks_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)((0,D_dev_tow_truck_for_cars_and_trucks_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:(0,D_dev_tow_truck_for_cars_and_trucks_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)({originalSource:"function Default() {\n  return <ButtonCheckbox />;\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})});var __namedExportsOrder=["Default"];Default.__docgenInfo={description:"",methods:[],displayName:"Default"}},"./src/shared/ui/button-toggle/buttonToggle.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return button_toggle_buttonToggle}});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function ButtonToggle(_ref){var id=_ref.id,title=_ref.title;return(0,jsx_runtime.jsxs)("label",{className:"button-toggle__lab",htmlFor:id,children:[(0,jsx_runtime.jsx)("p",{className:"filterCheckbox__title",children:title}),(0,jsx_runtime.jsx)("input",{className:"button-toggle__input",type:"checkbox",id:id}),(0,jsx_runtime.jsx)("span",{className:"button-toggle__span"})]})}ButtonToggle.__docgenInfo={description:"",methods:[],displayName:"ButtonToggle"};var button_toggle_buttonToggle=ButtonToggle}}]);