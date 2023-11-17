"use strict";(self.webpackChunktow_track_frontend=self.webpackChunktow_track_frontend||[]).push([[982],{"./src/pages/contacts-page/contact-page.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return contact_page_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),header=__webpack_require__("./src/widget/header/header.jsx"),footer=__webpack_require__("./src/widget/footer/footer.jsx"),contacts=__webpack_require__("./src/widget/contacts/contacts.jsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function ContactsPage(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(header.Z,{}),(0,jsx_runtime.jsx)(contacts.Z,{}),(0,jsx_runtime.jsx)(footer.Z,{})]})}ContactsPage.__docgenInfo={description:"",methods:[],displayName:"ContactsPage"};var _Default$parameters,_Default$parameters2,_Default$parameters2$,contact_page_stories={title:"pages/ContactsPage",component:ContactsPage,tags:["autodocs"],arg:{primary:!0}},Default={};Default.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Default.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})});var __namedExportsOrder=["Default"]},"./src/entities/contacts-map/contacts-map.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return contacts_map_contacts_map}});var react=__webpack_require__("./node_modules/react/index.js");function r(){return r=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},r.apply(this,arguments)}const a=(t,e)=>{const n={};for(const o in t)-1===e.indexOf(o)&&(n[o]=t[o]);return n},i=react.createContext(null),c=react.createContext(null),l=e=>n=>react.createElement(c.Consumer,null,(o=>react.createElement(e,r({parent:o},n)))),p=(t=[])=>{const[r,a]=(0,react.useState)(!1),c=(0,react.useRef)(t),l=(()=>{const t=(0,react.useContext)(i);if(null===t)throw new Error("Couldn't find Yandex.Maps API in the context. Make sure that hook useYMaps is inside <YMaps /> provider");return t})(),p=l.getApi();return(0,react.useEffect)((()=>{l.load().then((()=>Promise.all(c.current.map(l.loadModule)))).then((()=>a(!0)))}),[]),r&&p?p:null},u=()=>{},m=["onLoad","onError","modules","apiLoader"];function d(e,n=!1,o=[]){return i=>{const{width:c,height:l,modules:d=[],onLoad:h=u}=i,f=p(o.concat(d)),y=!n||!!f,b=a(i,m);return(0,react.useEffect)((()=>f?h(f):void 0),[f]),y?react.createElement(e,r({ymaps:f},b)):react.createElement("div",{style:{width:c,height:l}})}}const h="undefined"!=typeof window,f={lang:"ru_RU",load:"",ns:"",mode:"release"},y=e=>{const{version:n="2.1",enterprise:r=!1,query:a={lang:"ru_RU",load:"",ns:""},preload:c=!1,children:l}=e,p=(0,react.useRef)((t=>{const{query:e=f}=t,n=Date.now().toString(32),o=e.ns||"",s="__yandex-maps-api-onload__$$"+n,r="__yandex-maps-api-onerror__$$"+n,a=h?window:{},i={};let c;const l=()=>o?a[o]:c,p=()=>{delete a[s],delete a[r]};return{load:()=>{if(l())return Promise.resolve(c);if(i[o])return i[o];const n={onload:s,onerror:r,...f,...e},u=Object.keys(n).map((t=>`${t}=${n[t]}`)).join("&"),m=[`https://${t.enterprise?"enterprise.":""}api-maps.yandex.ru`,t.version,"?"+u].join("/");return i[o]=new Promise(((t,e)=>{a[s]=e=>{p(),e.ready((()=>{c=e,t(e)}))},a[r]=t=>{p(),e(t)},(t=>new Promise(((e,n)=>{const o=document.createElement("script");o.type="text/javascript",o.onload=e,o.onerror=n,o.src=t,o.async=!0,document.head.appendChild(o)})))(m).catch(a[r])})),i[o]},getApi:l,loadModule:t=>new Promise(((e,n)=>{c.modules.require(t).done((n=>{n.forEach((e=>{((t,e,n,o=!1)=>{const s="string"==typeof e?e.split("."):e.slice();let r,a=t;for(;s.length>1;)r=s.shift(),a[r]||(a[r]={}),a=a[r];const i=s[0];a[i]=!0===o&&a[i]||n})(c,t,e,!0)})),e(c)}),n)}))}})({version:n,enterprise:r,query:a,preload:c}));return(0,react.useEffect)((()=>{c&&p.current.load()}),[p.current]),react.createElement(i.Provider,{value:p.current},l)},b=/^on(?=[A-Z])/;function v(t){return Object.keys(t).reduce(((e,n)=>{if(b.test(n)){const o=n.replace(b,"").toLowerCase();e._events[o]=t[n]}else e[n]=t[n];return e}),{_events:{}})}function j(t,e,n){"function"==typeof n&&t.events.add(e,n)}function O(t,e,n){"function"==typeof n&&t.events.remove(e,n)}function g(t,e,n){Object.keys(Object.assign({},e,n)).forEach((o=>{e[o]!==n[o]&&(O(t,o,e[o]),j(t,o,n[o]))}))}const E=t=>"default"+t.charAt(0).toUpperCase()+t.slice(1);function C(t,e){return void 0!==t[e]||void 0===t[E(e)]}function _(t,e,n){return(C(t,e)?t[e]:t[E(e)])||n}function R(t,e,n=null){if(t!==e){if(t&&("current"in t?t.current=null:"function"==typeof t&&t(null)),!e)return;"current"in e?e.current=n:"function"==typeof e&&e(n)}}function w(t){const{width:e,height:n,style:o,className:s}=t;return void 0!==o||void 0!==s?Object.assign({},o&&{style:o},s&&{className:s}):{style:{width:e,height:n}}}class P extends react.Component{constructor(t){super(t),this.state={error:null,errorInfo:null}}componentDidCatch(t,e){const{onError:n=(()=>{})}=this.props;n(t),this.setState({error:t,errorInfo:e})}render(){return this.state.error?null:this.props.children}}const x=e=>({onError:n,...o})=>react.createElement(P,{onError:n},react.createElement(e,o));class M extends react.Component{constructor(){super(),this.instance=null,this.state={instance:null},this._parentElement=null,this._getRef=t=>{this._parentElement=t}}componentDidMount(){this.instance=M.mountObject(this._parentElement,this.props.ymaps.Map,this.props),this.setState({instance:this.instance})}componentDidUpdate(t){null!==this.instance&&M.updateObject(this.instance,t,this.props)}componentWillUnmount(){M.unmountObject(this.instance,this.props)}render(){const e=w(this.props),n=v(this.props),o=a(n,["_events","state","defaultState","options","defaultOptions","instanceRef","ymaps","children","width","height","style","className"]);return react.createElement(c.Provider,{value:this.state.instance},react.createElement("div",r({ref:this._getRef},e,o),this.props.children))}static mountObject(t,e,n){const{instanceRef:o,_events:s}=v(n),r=new e(t,_(n,"state"),_(n,"options"));return Object.keys(s).forEach((t=>j(r,t,s[t]))),R(null,o,r),r}static updateObject(t,e,n){const{_events:o,instanceRef:s}=v(n),{_events:r,instanceRef:a}=v(e);if(C(n,"state")){const o=_(e,"state",{}),s=_(n,"state",{});o.type!==s.type&&t.setType(s.type),o.behaviors!==s.behaviors&&(o.behaviors&&t.behaviors.disable(o.behaviors),s.behaviors&&t.behaviors.enable(s.behaviors)),s.zoom&&o.zoom!==s.zoom&&t.setZoom(s.zoom),s.center&&o.center!==s.center&&t.setCenter(s.center),s.bounds&&o.bounds!==s.bounds&&t.setBounds(s.bounds)}if(C(n,"options")){const o=_(e,"options"),s=_(n,"options",{});o!==s&&t.options.set(s)}_(e,"width")===_(n,"width")&&_(e,"height")===_(n,"height")||t.container.fitToViewport(),g(t,r,o),R(a,s,t)}static unmountObject(t,e){const{instanceRef:n,_events:o}=v(e);null!==t&&(Object.keys(o).forEach((e=>O(t,e,o[e]))),t.destroy(),R(n))}}const k=x(d(M,!0,["Map"]));k.defaultProps={width:320,height:240};class S extends react.Component{constructor(){super(),this.state={instance:null},this._parentElement=null,this._getRef=t=>{this._parentElement=t}}componentDidMount(){this._mounted=!0,this.props.ymaps.panorama.isSupported()&&S.mountObject(this._parentElement,this.props.ymaps.panorama,this.props).then((t=>this._mounted&&this.setState({instance:t})))}componentDidUpdate(t){null!==this.state.instance&&S.updateObject(this.state.instance,t,this.props)}componentWillUnmount(){this._mounted=!1,S.unmountObject(this.state.instance,this.props)}render(){const e=w(this.props);return react.createElement("div",r({ref:this._getRef},e))}static mountObject(t,e,n){const{instanceRef:o,_events:s}=v(n),r=_(n,"point"),a=_(n,"locateOptions"),i=_(n,"options");return new Promise(((n,c)=>{e.locate(r,a).done((r=>{if(r.length>0){const a=new e.Player(t,r[0],i);R(null,o,a),Object.keys(s).forEach((t=>j(a,t,s[t]))),n(a)}}),c)}))}static updateObject(t,e,n){const{_events:o,instanceRef:s}=v(n),{_events:r,instanceRef:a}=v(e);if(C(n,"options")){const o=_(e,"options"),s=_(n,"options");o!==s&&t.options.set(s)}if(C(n,"point")){const o=_(n,"point"),s=_(e,"point"),r=_(n,"locateOptions");o!==s&&t.moveTo(o,r)}g(t,r,o),R(a,s,t)}static unmountObject(t,e){const{instanceRef:n,_events:o}=v(e);null!==t&&(Object.keys(o).forEach((e=>O(t,e,o[e]))),R(n))}}x(d(S,!0,["panorama.isSupported","panorama.locate","panorama.createPlayer","panorama.Player"])).defaultProps={width:320,height:240};class U extends react.Component{constructor(){super(),this.state={instance:null},this.instance=null}componentDidMount(){const t=U.mountControl(this.props.ymaps.control[this.props.name],this.props);this.instance=t,this.setState({instance:t})}componentDidUpdate(t){null!==this.instance&&U.updateControl(this.instance,t,this.props)}componentWillUnmount(){U.unmountControl(this.instance,this.props)}render(){return react.createElement(c.Provider,{value:this.state.instance},this.props.children)}static mountControl(t,e){const{instanceRef:n,parent:o,lazy:s,_events:r}=v(e),a=new t({data:_(e,"data"),options:_(e,"options"),state:_(e,"state"),mapTypes:_(e,"mapTypes"),lazy:s});if(Object.keys(r).forEach((t=>j(a,t,r[t]))),o&&o.controls&&"function"==typeof o.controls.add)o.controls.add(a);else{if(!o||!o.add||"function"!=typeof o.add)throw new Error(`No parent found to mount ${e.name}`);o.add(a)}return R(null,n,a),a}static updateControl(t,e,n){const{_events:o,instanceRef:s}=v(n),{_events:r,instanceRef:a}=v(e);if(C(n,"options")){const o=_(e,"options"),s=_(n,"options");o!==s&&t.options.set(s)}if(C(n,"data")){const o=_(e,"data"),s=_(n,"data");o!==s&&t.data.set(s)}if(C(n,"state")){const o=_(e,"state"),s=_(n,"state");o!==s&&t.state.set(s)}if(C(n,"mapTypes")){const o=_(e,"mapTypes"),s=_(n,"mapTypes");o!==s&&(t.removeAllMapTypes(),s.forEach((e=>t.addMapType(e))))}g(t,r,o),R(a,s,t)}static unmountControl(t,e){const{instanceRef:n,parent:o,_events:s}=v(e);null!==t&&(Object.keys(s).forEach((e=>O(t,e,s[e]))),o.controls&&"function"==typeof o.controls.remove?o.controls.remove(t):o.remove&&"function"==typeof o.remove&&o.remove(t),R(n))}}x(l(d((e=>react.createElement(U,r({},e,{name:"Button"}))),!0,["control.Button"]))),x(l(d((e=>react.createElement(U,r({},e,{name:"FullscreenControl"}))),!0,["control.FullscreenControl"]))),x(l(d((e=>react.createElement(U,r({},e,{name:"GeolocationControl"}))),!0,["control.GeolocationControl"]))),x(l(d((e=>react.createElement(U,r({},e,{name:"ListBox"}))),!0,["control.ListBox"]))),x(l(d((e=>react.createElement(U,r({},e,{name:"ListBoxItem"}))),!0,["control.ListBoxItem"]))),x(l(d((e=>react.createElement(U,r({},e,{name:"RouteButton"}))),!0,["control.RouteButton"]))),x(l(d((e=>react.createElement(U,r({},e,{name:"RouteEditor"}))),!0,["control.RouteEditor"]))),x(l(d((e=>react.createElement(U,r({},e,{name:"RoutePanel"}))),!0,["control.RoutePanel"]))),x(l(d((e=>react.createElement(U,r({},e,{name:"RulerControl"}))),!0,["control.RulerControl"]))),x(l(d((e=>react.createElement(U,r({},e,{name:"SearchControl"}))),!0,["control.SearchControl"]))),x(l(d((e=>react.createElement(U,r({},e,{name:"TrafficControl"}))),!0,["control.TrafficControl"]))),x(l(d((e=>react.createElement(U,r({},e,{name:"TypeSelector"}))),!0,["control.TypeSelector"]))),x(l(d((e=>react.createElement(U,r({},e,{name:"ZoomControl"}))),!0,["control.ZoomControl"])));class Y extends react.Component{constructor(){super(),this.state={instance:null},this.instance=null}componentDidMount(){const t=Y.mountObject(this.props.ymaps.Clusterer,this.props);this.instance=t,this.setState({instance:t})}componentDidUpdate(t){null!==this.state.instance&&Y.updateObject(this.instance,t,this.props)}componentWillUnmount(){Y.unmountObject(this.instance,this.props)}render(){return react.createElement(c.Provider,{value:this.state.instance},this.props.children)}static mountObject(t,e){const{instanceRef:n,parent:o,_events:s}=v(e),r=new t(_(e,"options"));if(Object.keys(s).forEach((t=>j(r,t,s[t]))),o.geoObjects&&"function"==typeof o.geoObjects.add)o.geoObjects.add(r);else{if(!o.add||"function"!=typeof o.add)throw new Error("No parent found to mount Clusterer");o.add(r)}return R(null,n,r),r}static updateObject(t,e,n){const{_events:o,instanceRef:s}=v(n),{_events:r,instanceRef:a}=v(e);if(C(n,"options")){const o=_(e,"options"),s=_(n,"options");o!==s&&t.options.set(s)}g(t,r,o),R(a,s,t)}static unmountObject(t,e){const{instanceRef:n,parent:o,_events:s}=v(e);null!==t&&(Object.keys(s).forEach((e=>O(t,e,s[e]))),o.geoObjects&&"function"==typeof o.geoObjects.remove?o.geoObjects.remove(t):o.remove&&"function"==typeof o.remove&&o.remove(t),R(n))}}x(l(d(Y,!0,["Clusterer"])));class H extends react.Component{constructor(){super(),this.state={instance:null}}componentDidMount(){const t=H.mountObject(this.props.ymaps.ObjectManager,this.props);this.instance=t,this.setState({instance:t})}componentDidUpdate(t){null!==this.instance&&H.updateObject(this.instance,t,this.props)}componentWillUnmount(){H.unmountObject(this.instance,this.props)}render(){return null}static mountObject(t,e){const{instanceRef:n,parent:o,_events:s}=v(e),r=_(e,"options",{}),a=_(e,"features",{}),i=_(e,"filter",null),c=_(e,"objects",{}),l=_(e,"clusters",{}),p=new t(r);if(p.add(a||[]),p.setFilter(i),p.objects.options.set(c),p.clusters.options.set(l),Object.keys(s).forEach((t=>j(p,t,s[t]))),o.geoObjects&&"function"==typeof o.geoObjects.add)o.geoObjects.add(p);else{if(!o.add||"function"!=typeof o.add)throw new Error("No parent found to mount ObjectManager");o.add(p)}return R(null,n,p),p}static updateObject(t,e,n){const{_events:o,instanceRef:s}=v(n),{_events:r,instanceRef:a}=v(e);if(C(n,"options")){const o=_(e,"options"),s=_(n,"options");o!==s&&t.options.set(s)}if(C(n,"objects")){const o=_(e,"objects"),s=_(n,"objects");o!==s&&t.objects.options.set(s)}if(C(n,"clusters")){const o=_(e,"clusters"),s=_(n,"clusters");o!==s&&t.clusters.options.set(s)}if(C(n,"filter")){const o=_(e,"filter"),s=_(n,"filter");o!==s&&t.setFilter(s)}if(C(n,"features")){const o=_(e,"features"),s=_(n,"features");o!==s&&(t.remove(o),t.add(s))}g(t,r,o),R(a,s,t)}static unmountObject(t,e){const{instanceRef:n,parent:o,_events:s}=v(e);null!==t&&(Object.keys(s).forEach((e=>O(t,e,s[e]))),o.geoObjects&&"function"==typeof o.geoObjects.remove?o.geoObjects.remove(t):o.remove&&"function"==typeof o.remove&&o.remove(t),R(n))}}x(l(d(H,!0,["ObjectManager"])));class K extends react.Component{constructor(){super(),this.state={instance:null},this.instance=null}componentDidMount(){const{name:t,ymaps:e,dangerZone:n}=this.props,o=K.mountObject(n&&"function"==typeof n.modifyConstructor?n.modifyConstructor(e[t]):e[t],this.props);this.instance=o,this.setState({instance:o})}componentDidUpdate(t){null!==this.instance&&K.updateObject(this.instance,t,this.props)}componentWillUnmount(){K.unmountObject(this.instance,this.props)}render(){return null}static mountObject(t,e){const{instanceRef:n,parent:o,_events:s}=v(e),r=new t(_(e,"geometry"),_(e,"properties"),_(e,"options"));if(Object.keys(s).forEach((t=>j(r,t,s[t]))),o&&o.geoObjects&&"function"==typeof o.geoObjects.add)o.geoObjects.add(r);else{if(!o||!o.add||"function"!=typeof o.add)throw new Error(`No parent found to mount ${e.name}`);o.add(r)}return R(null,n,r),r}static updateObject(t,e,n){const{_events:o,instanceRef:s}=v(n),{_events:r,instanceRef:a}=v(e);if(C(n,"geometry")){const o=_(e,"geometry",{}),s=_(n,"geometry",{});Array.isArray(s)&&s!==o?Array.isArray(s[0])&&"number"==typeof s[1]?(t.geometry.setCoordinates(s[0]),t.geometry.setRadius(s[1])):t.geometry.setCoordinates(s):"object"==typeof s&&(s.coordinates!==o.coordinates&&t.geometry.setCoordinates(s.coordinates),s.radius!==o.radius&&t.geometry.setRadius(s.radius))}if(C(n,"properties")){const o=_(e,"properties"),s=_(n,"properties");o!==s&&t.properties.set(s)}if(C(n,"options")){const o=_(e,"options"),s=_(n,"options");o!==s&&t.options.set(s)}g(t,r,o),R(a,s,t)}static unmountObject(t,e){const{instanceRef:n,parent:o,_events:s}=v(e);null!==t&&(Object.keys(s).forEach((e=>O(t,e,s[e]))),o.geoObjects&&"function"==typeof o.geoObjects.remove?o.geoObjects.remove(t):o.remove&&"function"==typeof o.remove&&o.remove(t),R(n))}}const Q={modifyConstructor(t){function e(e,n,o){t.call(this,{geometry:e,properties:n},o)}return e.prototype=t.prototype,e}};x(l(d((e=>react.createElement(K,r({},e,{name:"GeoObject",dangerZone:Q}))),!0,["GeoObject"]))),x(l(d((e=>react.createElement(K,r({},e,{name:"Circle"}))),!0,["Circle"])));var et=x(l(d((e=>react.createElement(K,r({},e,{name:"Placemark"}))),!0,["Placemark"]))),contacts_info=(x(l(d((e=>react.createElement(K,r({},e,{name:"Polygon"}))),!0,["Polygon"]))),x(l(d((e=>react.createElement(K,r({},e,{name:"Polyline"}))),!0,["Polyline"]))),x(l(d((e=>react.createElement(K,r({},e,{name:"Rectangle"}))),!0,["Rectangle"]))),__webpack_require__("./src/shared/ui/contacts-info/contacts-info.jsx")),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function ContactsMap(){return(0,jsx_runtime.jsxs)("section",{className:"contacts-map",children:[(0,jsx_runtime.jsx)("div",{className:"contacts-map__container",children:(0,jsx_runtime.jsx)(y,{children:(0,jsx_runtime.jsx)(k,{className:"contacts-map__ymap",defaultState:{center:[55.588867,37.031152],zoom:8},children:(0,jsx_runtime.jsx)(et,{geometry:[55.588867,37.031152]})})})}),(0,jsx_runtime.jsx)(contacts_info.Z,{})]})}ContactsMap.__docgenInfo={description:"",methods:[],displayName:"ContactsMap"};var contacts_map_contacts_map=ContactsMap},"./src/shared/ui/contacts-info/contacts-info.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return contacts_info_contacts_info}});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function ContactsInfo(){return(0,jsx_runtime.jsxs)("section",{className:"contacts-info",children:[(0,jsx_runtime.jsxs)("ul",{className:"contacts-info__item",children:[(0,jsx_runtime.jsx)("li",{className:"contacts-info__title",children:"Адрес"}),(0,jsx_runtime.jsxs)("li",{className:"contacts-info__description",children:["123123, г. Москва, ул. Ленинградская, 28А, стр. 6"," "]})]}),(0,jsx_runtime.jsxs)("ul",{className:"contacts-info__item",children:[(0,jsx_runtime.jsx)("li",{className:"contacts-info__title",children:"Телефон"}),(0,jsx_runtime.jsx)("li",{className:"contacts-info__description",children:"8 800 111 2222"})]}),(0,jsx_runtime.jsxs)("ul",{className:"contacts-info__item",children:[(0,jsx_runtime.jsx)("li",{className:"contacts-info__title",children:"E-mail"}),(0,jsx_runtime.jsx)("li",{className:"contacts-info__description",children:"info@ttexpress.ru"})]})]})}ContactsInfo.__docgenInfo={description:"",methods:[],displayName:"ContactsInfo"};var contacts_info_contacts_info=ContactsInfo},"./src/shared/ui/pages-title/pages-title.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return pages_title_pages_title}});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function PagesTitle(_ref){var title=_ref.title;return(0,jsx_runtime.jsx)("h1",{className:"pages-title",children:title})}PagesTitle.defaultProps={title:"label"},PagesTitle.__docgenInfo={description:"@param {string} title - title of the pages",methods:[],displayName:"PagesTitle",props:{title:{defaultValue:{value:"'label'",computed:!1},required:!1}}};var pages_title_pages_title=PagesTitle},"./src/widget/contacts/contacts.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return contacts_contacts}});var contacts_map=__webpack_require__("./src/entities/contacts-map/contacts-map.jsx"),pages_title=__webpack_require__("./src/shared/ui/pages-title/pages-title.jsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Contacts(){return(0,jsx_runtime.jsxs)("main",{className:"contacts",children:[(0,jsx_runtime.jsxs)("div",{className:"contacts__header",children:[(0,jsx_runtime.jsx)(pages_title.Z,{title:"Контакты"}),(0,jsx_runtime.jsx)("p",{className:"contacts__subtitle",children:"Работаем 24/7"})]}),(0,jsx_runtime.jsx)(contacts_map.Z,{})]})}Contacts.__docgenInfo={description:"",methods:[],displayName:"Contacts"};var contacts_contacts=Contacts},"./src/widget/footer/footer.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return footer_footer}});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function ExpressLogo(_ref){var width=_ref.width,height=_ref.height;return(0,jsx_runtime.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:width,height:height,viewBox:"0 0 158 70",fill:"none",children:[(0,jsx_runtime.jsxs)("g",{clipPath:"url(#clip0_459_1322)",children:[(0,jsx_runtime.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M58.6432 2.8898C58.6432 6.92929 58.6432 10.9688 58.6432 14.9896C58.6432 15.7937 58.6618 16.8036 57.6946 17.0841C57.1367 17.2711 56.1137 16.9719 55.8161 18.2436C55.7045 18.6924 55.8533 19.1787 56.0393 19.4592C56.6717 20.3382 58.606 20.2072 58.606 18.5428H61.4517C61.4517 20.0202 60.8751 21.1797 59.7406 22.0587C58.327 23.1247 56.0951 23.1621 54.6444 22.0587C54.0678 21.6098 53.6028 21.1049 53.3052 20.413C53.0077 19.7023 52.8217 18.8233 52.9891 17.8322C53.1192 17.0467 53.4912 16.28 53.9376 15.7937L54.3096 15.4384C54.4584 15.2888 54.5514 15.214 54.7374 15.0831C55.1466 14.8026 55.3883 14.7652 55.7417 14.5594V6.51786L41.3832 21.8343H30.67L54.9234 0.290317C55.2582 0.0284978 55.7603 -0.0837103 56.2439 0.103303C56.6717 0.252914 57.6574 1.35629 58.0294 1.73032C58.3642 2.06694 58.606 2.27266 58.6432 2.8898Z",fill:"white"}),(0,jsx_runtime.jsx)("path",{d:"M40.8996 21.8156H5.46816C5.35656 21.8156 5.28217 21.9091 5.28217 22.0213V26.1356C5.28217 26.2478 5.35656 26.3226 5.46816 26.3226H19.4361C19.5291 26.3226 19.6221 26.4161 19.6221 26.5283V55.3845C19.6221 55.478 19.7151 55.5715 19.8081 55.5715H23.5094C23.621 55.5715 23.7139 55.478 23.7139 55.3845V26.5283C23.7139 26.4161 23.7883 26.3226 23.8999 26.3226H53.4912C53.6028 26.3226 53.6772 26.4161 53.6772 26.5283V41.2649C53.6772 41.3585 53.6028 41.452 53.4912 41.452H38.7421C38.6305 41.452 38.5375 41.5455 38.5375 41.639V69.8032C38.5375 69.9154 38.4631 69.9902 38.3515 69.9902H24.3463C24.2347 69.9902 24.1417 69.9154 24.1417 69.8032V64.8847C24.1417 64.7725 24.2347 64.6977 24.3463 64.6977H33.0693C33.1809 64.6977 33.2553 64.6042 33.2553 64.492V36.3465C33.2553 36.2343 33.3483 36.1408 33.4599 36.1408H48.2091C48.3207 36.1408 48.4137 36.0473 48.4137 35.9538V31.8395C48.4137 31.7273 48.3207 31.6338 48.2091 31.6338H29.1821C29.0705 31.6338 28.9775 31.7273 28.9775 31.8395V60.6956C28.9775 60.7892 28.9031 60.8827 28.7915 60.8827H14.526C14.433 60.8827 14.34 60.7892 14.34 60.6956V31.8395C14.34 31.7273 14.247 31.6338 14.154 31.6338H0.185992C0.0929959 31.6338 0 31.559 0 31.4467V16.7101C0 16.5979 0.0929959 16.5231 0.185992 16.5231H40.8996C40.9926 16.5231 41.0856 16.5979 41.0856 16.7101V21.6285C41.0856 21.7407 40.9926 21.8156 40.8996 21.8156Z",fill:"white"}),(0,jsx_runtime.jsx)("path",{d:"M58.5316 41.4894L60.9309 26.3226H72.109L71.551 29.8572H64.7809L64.4276 32.0265H70.6955L70.1375 35.5424H63.8696L63.4976 37.9548H70.2677L69.7097 41.4894H58.5316ZM69.3563 41.4894L77.261 32.7933L77.0936 34.9252L71.9974 26.3226H77.2238L80.0137 31.5777H78.5257L83.0267 26.3226H88.5879L80.739 34.9252L80.925 32.7933L86.1328 41.4894H80.9064L78.005 36.2156H79.4371L74.8803 41.4894H69.3563ZM86.5978 41.4894L88.9971 26.3226H96.3623C98.2409 26.3226 99.5986 26.8088 100.436 27.7813C101.254 28.7351 101.552 30.0068 101.31 31.5964C101.18 32.4379 100.882 33.2047 100.398 33.878C99.9148 34.5699 99.2452 35.0935 98.3897 35.4863C97.5527 35.879 96.4925 36.0847 95.2464 36.0847H92.0845L91.229 41.4894H86.5978ZM92.6425 32.5689H95.172C95.7486 32.5689 96.1764 32.4566 96.4553 32.2322C96.7343 32.0078 96.9017 31.6899 96.9575 31.2972C97.0319 30.8296 96.9575 30.4743 96.7343 30.2312C96.5111 29.9694 96.102 29.8572 95.5068 29.8572H93.0703L92.6425 32.5689ZM101.44 41.4894L103.839 26.3226H110.833C112.823 26.3226 114.255 26.7714 115.11 27.6504C115.984 28.5294 116.282 29.7824 116.022 31.3907C115.891 32.3257 115.538 33.1486 114.999 33.8405C114.459 34.5325 113.753 35.0748 112.878 35.4676C112.004 35.8416 111.019 36.0473 109.884 36.0473L109.94 35.4115H111.074C111.688 35.4115 112.227 35.5985 112.655 35.9725C113.102 36.3278 113.436 36.8141 113.678 37.3938L115.371 41.4894H110.554L108.712 36.7019C108.619 36.4961 108.452 36.3465 108.173 36.253C107.894 36.1595 107.615 36.1034 107.336 36.1034H106.927L106.071 41.4894H101.44ZM107.429 32.8681H109.512C110.163 32.8681 110.665 32.7372 111 32.4941C111.335 32.2509 111.558 31.8956 111.614 31.4281C111.707 30.867 111.595 30.4743 111.297 30.2312C111 29.9694 110.535 29.8572 109.884 29.8572H107.894L107.429 32.8681ZM116.84 41.4894L119.239 26.3226H130.417L129.859 29.8572H123.089L122.736 32.0265H129.004L128.446 35.5424H122.178L121.806 37.9548H128.576L128.018 41.4894H116.84ZM135.7 41.7325C134.602 41.7325 133.523 41.6203 132.463 41.3585C131.403 41.1154 130.529 40.7787 129.859 40.3673L131.254 36.7954C131.868 37.0946 132.631 37.3751 133.505 37.6182C134.379 37.8613 135.253 37.9735 136.127 37.9735C136.964 37.9735 137.541 37.88 137.857 37.7117C138.173 37.5247 138.341 37.3003 138.396 37.0385C138.415 36.7954 138.359 36.6083 138.229 36.44C138.099 36.2717 137.82 36.1595 137.392 36.0847L134.751 35.6172C133.523 35.3741 132.556 34.8691 131.85 34.0463C131.161 33.2421 130.92 32.2135 131.124 30.9418C131.292 29.9133 131.701 29.0343 132.333 28.305C132.966 27.5943 133.802 27.0333 134.825 26.6405C135.867 26.2665 137.057 26.0608 138.415 26.0608C139.345 26.0608 140.275 26.173 141.186 26.3974C142.098 26.6218 142.823 26.9398 143.344 27.3512L141.893 30.8483C141.41 30.5491 140.833 30.306 140.182 30.119C139.512 29.932 138.768 29.8385 137.913 29.8385C137.206 29.8385 136.667 29.9133 136.276 30.0816C135.904 30.2499 135.681 30.493 135.625 30.8109C135.607 30.9979 135.662 31.2037 135.811 31.3907C135.941 31.5964 136.258 31.746 136.723 31.8208L139.308 32.2883C140.628 32.5128 141.596 33.0177 142.247 33.8218C142.897 34.626 143.121 35.6546 142.916 36.9076C142.786 37.8426 142.414 38.6842 141.8 39.4136C141.186 40.1429 140.387 40.7226 139.345 41.1341C138.322 41.5268 137.113 41.7325 135.7 41.7325ZM150.337 41.7325C149.24 41.7325 148.161 41.6203 147.101 41.3585C146.041 41.1154 145.167 40.7787 144.497 40.3673L145.892 36.7954C146.524 37.0946 147.268 37.3751 148.142 37.6182C149.017 37.8613 149.891 37.9735 150.765 37.9735C151.602 37.9735 152.178 37.88 152.495 37.7117C152.811 37.5247 152.997 37.3003 153.034 37.0385C153.071 36.7954 153.015 36.6083 152.867 36.44C152.736 36.2717 152.457 36.1595 152.03 36.0847L149.407 35.6172C148.161 35.3741 147.194 34.8691 146.506 34.0463C145.818 33.2421 145.557 32.2135 145.762 30.9418C145.929 29.9133 146.338 29.0343 146.971 28.305C147.603 27.5943 148.44 27.0333 149.482 26.6405C150.505 26.2665 151.695 26.0608 153.053 26.0608C154.001 26.0608 154.931 26.173 155.843 26.3974C156.754 26.6218 157.461 26.9398 158 27.3512L156.549 30.8483C156.047 30.5491 155.489 30.306 154.82 30.119C154.15 29.932 153.406 29.8385 152.569 29.8385C151.844 29.8385 151.304 29.9133 150.932 30.0816C150.542 30.2499 150.337 30.493 150.281 30.8109C150.244 30.9979 150.3 31.2037 150.449 31.3907C150.598 31.5964 150.895 31.746 151.36 31.8208L153.945 32.2883C155.266 32.5128 156.252 33.0177 156.903 33.8218C157.535 34.626 157.758 35.6546 157.572 36.9076C157.423 37.8426 157.051 38.6842 156.438 39.4136C155.843 40.1429 155.024 40.7226 154.001 41.1341C152.978 41.5268 151.751 41.7325 150.337 41.7325Z",fill:"white"})]}),(0,jsx_runtime.jsx)("defs",{children:(0,jsx_runtime.jsx)("clipPath",{id:"clip0_459_1322",children:(0,jsx_runtime.jsx)("rect",{width:"158",height:"70",fill:"white"})})})]})}function Logo(_ref){var width=_ref.width,height=_ref.height;return(0,jsx_runtime.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:width,height:height,viewBox:"0 0 40 40",fill:"none",children:[(0,jsx_runtime.jsxs)("g",{clipPath:"url(#clip0_421_1132)",children:[(0,jsx_runtime.jsx)("path",{d:"M21.2745 0.417953L9.1284 3.67249C2.56226 5.43189 -1.33438 12.1811 0.425011 18.7472L3.67955 30.8933C5.43894 37.4595 12.1881 41.3561 18.7543 39.5967L30.9004 36.3422C37.4665 34.5828 41.3631 27.8336 39.6038 21.2674L36.3492 9.12134C34.5898 2.5552 27.8406 -1.34144 21.2745 0.417953Z",fill:"#FFCC00"}),(0,jsx_runtime.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M30.8912 5.37543C30.8912 7.14385 30.8912 8.91227 30.8912 10.6807C30.8912 11.0175 30.8912 11.4667 30.4702 11.593C30.2175 11.6631 29.7825 11.5368 29.6421 12.0982C29.6 12.2947 29.6561 12.5053 29.7404 12.6316C30.0211 13.0105 30.8632 12.9544 30.8632 12.2386H32.1263C32.1263 12.8842 31.8737 13.3895 31.3684 13.7684C30.7509 14.2316 29.7684 14.2456 29.1228 13.7684C28.8702 13.5719 28.6737 13.3474 28.5333 13.0386C28.407 12.7438 28.3228 12.3509 28.393 11.9158C28.4632 11.5789 28.6175 11.2421 28.814 11.0316L28.9825 10.8631C29.0526 10.807 29.0947 10.7649 29.1649 10.7228C29.3474 10.5965 29.4597 10.5684 29.614 10.4842V6.96139L23.2842 13.6702H18.5684L29.2491 4.23859C29.3895 4.12631 29.614 4.07017 29.8386 4.15438C30.0211 4.22455 30.4561 4.70174 30.6246 4.87017C30.7649 5.01052 30.8632 5.09473 30.8912 5.37543Z",fill:"black"}),(0,jsx_runtime.jsx)("path",{d:"M23.0737 13.6702H7.48069C7.43858 13.6702 7.39648 13.6982 7.39648 13.7544V15.5509C7.39648 15.593 7.43858 15.6351 7.48069 15.6351H13.6281C13.6702 15.6351 13.7123 15.6772 13.7123 15.7193V28.3509C13.7123 28.407 13.7544 28.4351 13.7965 28.4351H15.4245C15.4667 28.4351 15.5088 28.407 15.5088 28.3509V15.7193C15.5088 15.6772 15.5509 15.6351 15.593 15.6351H28.6175C28.6737 15.6351 28.7017 15.6772 28.7017 15.7193V22.1754C28.7017 22.2175 28.6737 22.2596 28.6175 22.2596H22.1193C22.0772 22.2596 22.0351 22.3017 22.0351 22.3438V34.6666C22.0351 34.7228 22.007 34.7509 21.9509 34.7509H15.7895C15.7474 34.7509 15.7052 34.7228 15.7052 34.6666V32.5193C15.7052 32.4772 15.7474 32.4351 15.7895 32.4351H19.6351C19.6772 32.4351 19.7193 32.393 19.7193 32.3509V20.014C19.7193 19.9719 19.7474 19.9298 19.8035 19.9298H26.3017C26.3438 19.9298 26.3859 19.9017 26.3859 19.8456V18.0491C26.3859 17.993 26.3438 17.9649 26.3017 17.9649H17.9088C17.8667 17.9649 17.8245 17.993 17.8245 18.0491V30.6807C17.8245 30.7228 17.7965 30.7649 17.7403 30.7649H11.4667C11.4245 30.7649 11.3824 30.7228 11.3824 30.6807V18.0491C11.3824 17.993 11.3403 17.9649 11.2982 17.9649H5.15086C5.10876 17.9649 5.06665 17.9228 5.06665 17.8807V11.4245C5.06665 11.3824 5.10876 11.3403 5.15086 11.3403H23.0737C23.1158 11.3403 23.1579 11.3824 23.1579 11.4245V13.5859C23.1579 13.6281 23.1158 13.6702 23.0737 13.6702Z",fill:"black"})]}),(0,jsx_runtime.jsx)("defs",{children:(0,jsx_runtime.jsx)("clipPath",{id:"clip0_421_1132",children:(0,jsx_runtime.jsx)("rect",{width:"40",height:"40",fill:"white"})})})]})}function ArrowUpwardIcon(_ref){var width=_ref.width,height=_ref.height;return(0,jsx_runtime.jsx)("svg",{width:width,height:height,viewBox:"0 0 16 41",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)("path",{d:"M8.7071 0.292892C8.31658 -0.0976296 7.68342 -0.0976295 7.29289 0.292892L0.928931 6.65685C0.538406 7.04738 0.538406 7.68054 0.928931 8.07107C1.31946 8.46159 1.95262 8.46159 2.34314 8.07107L8 2.41422L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.7071 0.292892ZM9 41L9 1L7 1L7 41L9 41Z",fill:"#3B3E49"})})}ExpressLogo.__docgenInfo={description:"",methods:[],displayName:"ExpressLogo"},Logo.__docgenInfo={description:"",methods:[],displayName:"Logo"},ArrowUpwardIcon.__docgenInfo={description:"",methods:[],displayName:"ArrowUpwardIcon"};var arrow_upward_icon=ArrowUpwardIcon;function ArrowScroll(){return(0,jsx_runtime.jsx)("a",{href:"#header",className:"arrow","aria-label":"Наверх",children:(0,jsx_runtime.jsx)(arrow_upward_icon,{width:"16px",height:"40px"})})}ArrowScroll.__docgenInfo={description:"",methods:[],displayName:"ArrowScroll"};var arrow_scroll_arrow_scroll=ArrowScroll;function Footer(){return(0,jsx_runtime.jsx)("footer",{className:"footer",children:(0,jsx_runtime.jsxs)("div",{className:"footer__container",children:[(0,jsx_runtime.jsx)(arrow_scroll_arrow_scroll,{}),(0,jsx_runtime.jsxs)("div",{className:"footer__main",children:[(0,jsx_runtime.jsx)("div",{className:"footer__logo",children:(0,jsx_runtime.jsx)(Logo,{width:"100px",height:"100px"})}),(0,jsx_runtime.jsxs)("div",{className:"footer__column",children:[(0,jsx_runtime.jsx)(ExpressLogo,{width:"158px",height:"70px"}),(0,jsx_runtime.jsxs)("div",{className:"footer__main-contacts",children:[(0,jsx_runtime.jsxs)("div",{className:"footer__phone-block",children:[(0,jsx_runtime.jsx)("span",{className:"footer__phone-number",children:"8 880 111 2222"}),(0,jsx_runtime.jsx)("div",{children:"Круглосуточно"})]}),(0,jsx_runtime.jsx)("div",{className:"footer__contacts",children:"Контакты"})]}),(0,jsx_runtime.jsxs)("div",{className:"footer__documents",children:[(0,jsx_runtime.jsx)("a",{href:"/",className:"footer__link",children:"Оферта"}),(0,jsx_runtime.jsx)("a",{href:"/",className:"footer__link",children:"Политика конфиденциальности"}),(0,jsx_runtime.jsx)("a",{href:"/",className:"footer__link",children:"Пользовательское соглашение"}),(0,jsx_runtime.jsx)("a",{href:"/",className:"footer__link",children:"Сертификация эвакуаторов"})]})]})]}),(0,jsx_runtime.jsxs)("div",{className:"footer__copyright",children:[(0,jsx_runtime.jsx)("div",{children:"Информация, представленная на сайте, не является публичной офертой"}),(0,jsx_runtime.jsx)("div",{children:"© 2023 TT Express"})]})]})})}Footer.__docgenInfo={description:"",methods:[],displayName:"Footer"};var footer_footer=Footer}}]);